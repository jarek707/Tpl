#ifndef MY_H
#define MY_H
#include <algorithm>
#include "structs.h"
#include "mysql.h"
#include "files.h"

struct DBSchema {
	const char* colName;
	const char* colType;
	int	colSize;
};
typedef vector<vector<const char* > >		TabV; 
typedef vector<DBSchema>					schemaVector;
typedef map<int,vector<vector<string> > >	confMap;
typedef pair<int,vector<vector<string> > >	confPair;

class FormGen;
class TplTree;
class My {
	public:
	static string dbName;

	schemaVector schemaVec;
	vector <vector<const char*> > dataVec;
	confMap confM;
	confMap allConf[5];
		
	My(const char* dbName);
	string schemaQ(const char* tabName);
	void tabQ(const char* tabName, string clauseS);
	void tabQ(const char* tabName, string clauseS, TplTree *tree);
	void dataQ(const char* sql,string clauseS);
	void renderData();
	virtual void populateActions(MYSQL_ROW row,int cnt, int rows, int cols) {};
	virtual void populateFields(MYSQL_ROW row,int cnt, int rows, int cols) {};
	virtual void populatePlugs(MYSQL_ROW row,int cnt, int rows, int cols) {};
	virtual void populateConsts(MYSQL_ROW row,int cnt, int rows, int cols) {};
	virtual void populatePerms(MYSQL_ROW row,int cnt, int rows, int cols) {};

	bool tabExists(const char*);

	unsigned 			isConnected() 	{ return My::dbName!=""; };
	vector<DBSchema>	getSchema()     { return schemaVec; };
	string				getSchemaColName(int i) { return schemaVec[i].colName; };
	TabV				getData()     	{ return dataVec; };

	protected:
	void all(const char* sql, void (My::*cb)(MYSQL_ROW,int,int,int));
	string quickOne(const char*);
	int getAdIdPos();
	int getColPos(string colName);
	
	private:
	MYSQL *conn;
	MYSQL_RES *res;
	MYSQL_ROW row;

	const char *server;
	const char *user;
	const char *passwd;
	const char *database;

	void populateSchema(MYSQL_ROW row, int cnt, int rows, int cols);
	void populateData(MYSQL_ROW row,int cnt, int rows, int cols);
	void populateData(MYSQL_ROW row, int rows, int cols);
};
#endif
