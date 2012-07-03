#include "my.h"
	// There should be only one instance of this class called MY, defined globally somehow
	// public:: 
	My::My(const char* dbName) {
		if ( My::dbName=="" ) {
			server 		= "localhost";
			user 		= "itvuser";
			//passwd 		= "ZaP42yX";
			passwd 		= "donkey";
			database	= dbName;

			conn= mysql_init(NULL);
			if ( !mysql_real_connect(conn,server,user,passwd,database,0,NULL,0)) {
				cout << "CONNECT ERROR:" << mysql_error(conn) << endl;
			} else {
				My::dbName=dbName;
			}
		}
	}

	void My::renderData() {
		int strWidth =22;
		int intWidth =7;
		int cWidth;
		int dataWidth;
		string filler = "                   ";

		for ( int i=0; i<schemaVec.size(); i++ ) {
			cWidth = (schemaVec.at(i).colType == (string)"int") ? intWidth : strWidth;	
			cout << filler.substr(0,cWidth-((string)(schemaVec.at(i).colName)).size()) << schemaVec.at(i).colName << "|";
		}
		cout << endl;
		int totLen;
		for ( int i=0; i<schemaVec.size(); i++ ) {
			cWidth = (schemaVec.at(i).colType == (string)"int") ? intWidth : strWidth;	
			for (int j=0; j<=cWidth; j++ ) {
				cout << "-";
			}
		}
		cout << endl;
		string dataS;
		for (int i=0; i<dataVec.size(); i++ ) {
			for ( int j=0; j<dataVec.at(i).size(); j++ ) {
				cWidth = (schemaVec.at(j).colType == (string)"int") ? intWidth : strWidth;	
				dataS=dataVec[i][j];
				if ( (dataWidth = dataS.size()) > cWidth ) dataS = dataS.substr(0,strWidth);
				cout <<  filler.substr(0,cWidth-dataS.size())<< dataS  << "|";
			}
			cout << endl;
		}
	}

	string getColList(schemaVector sV) {
		string outS="";
		for ( int i=0; i<sV.size(); i++ ) {
			outS += (string)sV.at(i).colName + (string)((i==sV.size()-1) ? " " : ",");
		}
		return outS;
	}

	string My::schemaQ(const char* tabName) {
		schemaVec.clear();
		string outS="";
	    string sql 	= (string)"SELECT COLUMN_NAME , DATA_TYPE, NUMERIC_SCALE, NUMERIC_PRECISION, CHARACTER_OCTET_LENGTH "
					+ (string)" FROM INFORMATION_SCHEMA.COLUMNS  WHERE TABLE_SCHEMA='"
					+ (string)database + (string)"' AND TABLE_NAME='" + (string)tabName + (string)"'";
		all(sql.c_str(),&My::populateSchema);
		if ( schemaVec.size() == 0 ) { 
			cout << "SCHEMA was not retrieved for table '" << tabName << "'" << endl; 
		} else {
			for (int i=0; i<schemaVec.size(); i++ ) {
				outS += "t." + (string)(schemaVec[i].colName) + (string)",";
			}
			outS = outS.substr(0,outS.size()-1);
		}
		return outS;
	}

	void My::dataQ(const char* sql, string clauseS) {
		dataVec.clear();
		all(sql, &My::populateData);
	}

	void My::tabQ(const char* tabName, string clauseS ) {
		schemaQ( tabName ); 
		if ( schemaVec.size() > 0 ) { 
			dataVec.clear(); 
			string sql = "SELECT " + getColList(schemaVec) + "FROM " + (string)tabName + clauseS;
			all(sql.c_str(), &My::populateData);
		}
	}

	void My::tabQ(const char* tabName, string clauseS, TplTree *tree) {
		schemaQ( tabName ); 
		if ( schemaVec.size() > 0 ) { 
			dataVec.clear(); 
			string sql = "SELECT " + getColList(schemaVec) + "FROM " + (string)tabName + clauseS;
			all(sql.c_str(), &My::populateData);
		}
	}

	// private:
	/* CALLBACKS START */
	void My::populateSchema(MYSQL_ROW row,int cnt, int rows, int cols) {
		if ( row[1] == (string)"int" ) 									{ schemaVec.at(cnt).colSize=    11; }
			else if ( row[1] == (string)"tinyint" ) 					{ schemaVec.at(cnt).colSize=     1; }
				else if ( row[1] == (string)"text" ) 					{ schemaVec.at(cnt).colSize= 65535; }
					else if ( row[1] == (string)"char" ) 				{ schemaVec.at(cnt).colSize=   256; }
						else if ( row[1] == (string)"varchar" ) 		{ schemaVec.at(cnt).colSize=   256; }
							else if ( row[1] == (string)"datetime" ) 	{ schemaVec.at(cnt).colSize=    19;	}
								else 									{ schemaVec.at(cnt).colSize=    32; } // default
		schemaVec.at(cnt).colName=row[0];
		schemaVec.at(cnt).colType=row[1];
	}

	void My::populateData(MYSQL_ROW row, int rows, int cols) { 
	}

	void My::populateData(MYSQL_ROW row,int cnt, int rows, int cols) { 
		if ( dataVec.at(cnt).size() == 0 )	{ dataVec.at(cnt).resize(cols);	}
		for ( int i=0; i<cols; i++ )		{ dataVec[cnt][i] = row[i]; 	}
	}

	/* CALLBACKS END */
	void My::all(const char* sql,void (My::*cb)(MYSQL_ROW,int,int,int)) {
		MYSQL_RES *res;
		SLOG("QUERY:" , sql);
		if ( mysql_query(conn, sql) ) { 
			cout << "QUERY ERROR '" << mysql_error(conn) <<  "' WHEN EXECUTING:" << endl << sql<< endl;
		} else {
			res = mysql_store_result(conn);
			int cols = mysql_num_fields(res);
			int rows = mysql_num_rows(res);
			if 		( schemaVec.size()	== 0 )	{ schemaVec.resize(rows); 	}
			else if ( dataVec.size()	== 0 ) 	{ dataVec.resize(rows); 	}

			int cnt=0;
			while ( (row = mysql_fetch_row(res)) != NULL ) { (this->*cb)(row,cnt++,rows,cols); }
			//mysql_free_result(res);
		}
	}

	string My::quickOne(const char* sql) {
		if ( mysql_query(conn, sql) ) { 
			cout << "QUERY ERROR" << mysql_error(conn) << endl << "WHEN EXECUTING:" << sql<< endl;
			return "ERROR";
		} else {
			res = mysql_store_result(conn);
			row = mysql_fetch_row(res);
			return row[0];
		}
	}

	bool My::tabExists(const char* tabName) {
		string sql 	= (string)"SELECT COUNT(*) FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME='" + tabName 
					+ "' AND TABLE_SCHEMA='" + My::dbName + "'";
		if ( mysql_query(conn, sql.c_str()) ) {
			cout << "QUERY ERROR" << mysql_error(conn) << endl << "WHEN EXECUTING:" << sql<< endl;
			return false;
		} else {
			res = mysql_store_result(conn);
			row = mysql_fetch_row(res);
			return (atoi(row[0])==1);
		}
	}

	int My::getColPos(string colName) {
		int colPos = -1;
		if ( schemaVec.size() > 0 ) { 
			for (schemaVector::iterator sIt=schemaVec.begin(); sIt<schemaVec.end(); sIt++ ) {
				if ((string)(*sIt).colName == colName) sIt=schemaVec.end();
				colPos++;
			}
		}
		return ( (schemaVec.size()==colPos) ? -1 : colPos);
	}

	int My::getAdIdPos() {
		int adIdPos	= -1;
		int idPos 	= -1;
		if ( schemaVec.size() > 0 ) { 
			for (schemaVector::iterator sIt=schemaVec.begin(); sIt<schemaVec.end(); sIt++ ) {
				if ((string)(*sIt).colName == (string)"adId") sIt=schemaVec.end();
				adIdPos++;
			}
		}
		return ( (schemaVec.size()==adIdPos) ? 0 : adIdPos );
	}
