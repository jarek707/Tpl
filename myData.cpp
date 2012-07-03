#include "structs.h"
#include "myData.h"

MyData::MyData(const char* dbName) : My(dbName) {}
MyData::MyData() : My(DBNAME) {}

const char* MyData::setupDbCall( string tabName, string userId ) {
	string cols = (tabName == "fields") ? FIELDS_COLS : schemaQ(tabName.c_str());

	s2Map sM;
	sM.insert(s2Pair("tabCols",cols));
	sM.insert(s2Pair("tabName",tabName));
	sM.insert(s2Pair("userId",userId));
	Tpl tpl(&sM,"tpl/sql/conf.tpl");

	adIdPos 	= getAdIdPos();
	pAdIdPos	= getColPos("pAdId");
	idPos 		= getColPos("id");
	if ( tabName == "plugs" ) {
		itemIdPos 	= getColPos("itemId");
		seqPos 		= getColPos("seq");
	}

	return tpl.getOutS().c_str();
}

void MyData::getConfFromDb(string userId) {
	all( setupDbCall("actions",userId)	, &My::populateActions );
	all( setupDbCall("fields",userId)	, &My::populateFields );
	all( setupDbCall("plugs",userId)	, &My::populatePlugs );

	all( "SELECT typ,name,val,data FROM consts", &My::populateConsts );
	all( "SELECT grpId,adId FROM plugPerms", &My::populatePerms);
	string groupId = quickOne(("SELECT grpId FROM users WHERE id=" + userId).c_str());
}

void MyData::iterData2(is2Map *dataM) {
	is2Map::iterator it2;
	s2Map::iterator it3;
	for (it2=dataM->begin(); it2!=dataM->end(); it2++) {
		for ( it3=it2->second.begin(); it3!=it2->second.end(); it3++ ) {
			cout <<"["<< it3->first << "='" << it3->second << "']";
		}
		cout << "  SIZE:" <<  it2->second.size() << endl;
	}
	cout << endl;
}

void MyData::iterData3(i4Map *dataM) {
	i4Map::iterator it1;
	i3Map::iterator it2;
	i2Map::iterator it3;
	for (it1=dataM->begin(); it1!=dataM->end(); it1++) {
		cout << endl << it1->first << "::";
		for (it2=it1->second.begin(); it2!=it1->second.end(); it2++) {
			cout << "\t"<< it2->first << "::";
			for ( it3=it2->second.begin(); it3!=it2->second.end(); it3++ ) {
				cout <<"["<< it3->first << "='" << it3->second << "']";
			}
			cout << "  SIZE:" << it1->second.size()<<"/"<< it2->second.size() << endl;
		}
	}
	cout << endl;
}

void MyData::iterData3(i2s2Map *dataM) {
	i2s2Map::iterator iismit;
	is2Map::iterator ismit;
	s2Map::iterator isit;
	for (iismit=dataM->begin(); iismit!=dataM->end(); iismit++) {
		cout << endl << iismit->first << "::";
		for (ismit=iismit->second.begin(); ismit!=iismit->second.end(); ismit++) {
			cout << "\t" << ismit->first << "::";
			for ( isit=ismit->second.begin(); isit!=ismit->second.end(); isit++ ) {
				cout <<"["<< isit->first << "='" << isit->second << "']";
			}
			cout << "  SIZE:" << iismit->second.size()<<"/"<< ismit->second.size() << endl;
		}
	}
	cout << endl;
}

//Callbacks (implementation of virtual My::)
void MyData::populateActions(MYSQL_ROW row,int cnt, int rows, int cols) {
	int pAdId	= atoi(row[pAdIdPos]);
	int adId	= atoi(row[adIdPos]);
	adIdsV.push_back(adId);
	for ( int i=1; i<cols; i++ ){ 
		if ( actions.find(pAdId) == actions.end() ) {
			is2Map imm;
			actions.insert(i2s2Pair(pAdId,imm));
			s2Map is;
			actions[pAdId].insert(is2Pair(adId, is));
		} else {
			if ( actions[pAdId].find(adId) == actions[pAdId].end() ) {
				s2Map is;
				actions[pAdId].insert(is2Pair(adId, is));
			}
		}
		actions[pAdId][adId].insert( s2Pair(getSchemaColName(i),(string)((row[i]) ? row[i] : "blank")) );
	}
}

void MyData::populateFields(MYSQL_ROW row,int cnt, int rows, int cols) {
	//int adId	= atoi(row[adIdPos]);
	//int id		= atoi(row[idPos]);
	int id		= atoi(row[0]);
	int adId	= atoi(row[1]);
	for ( int i=1; i<cols; i++ ){ 
		if ( fields.find(adId) == fields.end() ) {
			is2Map imm;
			fields.insert(i2s2Pair(adId,imm));
			s2Map is;
			fields[adId].insert(is2Pair(id, is));
		} else {
			if ( fields[adId].find(id) == fields[adId].end() ) {
				s2Map is;
				fields[adId].insert(is2Pair(id, is));
			}
		}
		fields[adId][id].insert( s2Pair(Util::getNthWord(FIELDS_COLS,i*2+1,1),(string)((row[i]) ? row[i] : "blank")));
	}
}

void MyData::populatePlugs(MYSQL_ROW row,int cnt, int rows, int cols) {
	int pAdId	= atoi(row[pAdIdPos]);
	int adId	= atoi(row[adIdPos]);
	int itemId	= atoi(row[itemIdPos]);
	int seq     = atoi(row[seqPos]);
	for ( int i=1; i<cols; i++ ){ 
		if ( plugs.find(pAdId) == plugs.end() ) {
			i3Map imm;
			plugs.insert(i4Pair(pAdId,imm));
			i2Map im;
			plugs[pAdId].insert(i3Pair(adId, im));
		} else {
			if ( plugs[pAdId].find(adId) == plugs[pAdId].end() ) {
				i2Map im;
				plugs[pAdId].insert(i3Pair(adId, im));
			}
		}
		plugs[pAdId][adId].insert( i2Pair(itemId,seq) );
	}
}

void MyData::populateConsts(MYSQL_ROW row,int cnt, int rows, int cols) {
	string typ	= row[0];
	string name = row[1];
	string data = row[3];
	if (( typ != "X" ) && ( typ != "" )) {
		long int val	= strtol(row[2],NULL,0);
		if ( numConsts.find(typ) == numConsts.end() ) {
			slsMap sls;
			lsMap ls;
			numConsts.insert(s2lsPair(typ,sls));
			numConstsIdx.insert(slsPair(typ,ls));
		}
		if ( numConsts[typ].find(name) == numConsts[typ].end() ) {
			lsMap ls;
			numConsts[typ].insert(slsPair(name,ls));
		}
		numConsts[typ][name].insert(lsPair(val,data));
		numConstsIdx[typ].insert(lsPair(val,data));
	} else {
		string val	= row[2];
		if ( txtConsts.find(typ) == txtConsts.end() ) {
			s3Map ss;
			txtConsts.insert(s4Pair(typ,ss));
		}
		if ( txtConsts[typ].find(name) == txtConsts[typ].end() ) {
			s2Map s;
			txtConsts[typ].insert(s3Pair(name,s));
		}
		txtConsts[typ][name].insert(s2Pair(val,data));
	}
}

void MyData::populatePerms(MYSQL_ROW row,int cnt, int rows, int cols) {
	int grpId = atoi(row[0]);
	if ( perms.find(grpId) == 	perms.end() ) {
		iVector iV;
		perms.insert(pair<int, iVector>(grpId,iV));
	}
	perms[grpId].push_back(atoi(row[1]));
}

iVector MyData::getInjectPlugs(int adId) {
	iVector iV;
	i4Map::iterator i4t=plugs.find(adId);
	if ( i4t!=plugs.end() ) {
		for (i3Map::iterator i3t=i4t->second.begin(); i3t!=i4t->second.end(); i3t++) {
			if ( i3t->second.begin()->first < 0 ) {
				iV.push_back(i3t->first);
			}
		}
	}
	return iV;
}
