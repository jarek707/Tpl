using namespace std;
#include "conf.h"

	Conf::Conf() {}

// Application conf methods
	void Conf::readConfFile( const char* fName) { 
		string line ="";
		ifstream fil(fName);
		string lineA[2];
		string cat="";
		s2Map sM;
		if ( fil.is_open() ) {
			while ( fil.good() ) {
				getline(fil,line);	
				if ( line.substr(0,2) != "//" ) 
				{
					if ( line.size() > 0 ) {
						if ( line.substr(0,1) == "[" ) {
							Conf::keyVal.insert( s3Pair(cat,sM) );
							sM.clear();
							cat = Util::collapseSpaces(line.substr(1,line.size()-2));
						} else {
							line = Util::collapseSpaces(line);
							int firstSpace = line.find(" ");
							sM.insert( s2Pair(line.substr(0,firstSpace),line.substr(firstSpace+1,-1)) );
						}
					}
				}
			}
			Conf::keyVal.insert( s3Pair(cat,sM) );
		}
	}
	
	string Conf::getConfVal(string cat, string key) {
		return Conf::keyVal[cat][key];
	}

	string *Conf::getConfKeys(string cat, string *inA) {
		string *outA=inA;
		return outA;
	}

	void Conf::iterateConfKeys(string cat, void (*cb)(string)) {

	}

	string Conf::getConfKeys(string cat) {
		string outS="";
		s2Map sM = Conf::keyVal[cat];
		s2Map::iterator it;

		for ( it = sM.begin(); it != sM.end(); it++ ) {
			outS += (*it).first + " ";
		}
		return outS.substr(0,outS.size()-1);
	}

	void Conf::init() {
		if ( Conf::initPending ) {
			readConfFile("config.txt");
			Conf::initPending=false;
		}
	}

// Database Conf methods
	string Conf::buildInsert(sVector sV) {
		int i=0;
		string colS="", valS="";
		for ( sVector::iterator it=sV.begin(); it!=sV.end(); it++ ) {
			colS += (*it++) + ",";
			valS += "'" + (*it) + "',";
		}
		s2Map sM;
		sM.insert(s2Pair("cols",colS.substr(0,colS.size()-1)));
		sM.insert(s2Pair("vals",valS.substr(0,valS.size()-1)));
		Tpl tpl(&sM,"tpl/db/my/insert.tpl");
		string sqlS = tpl.getOutS().c_str();
		return sqlS;
	}

	void Conf::defineAction(string tabName) {
		string jsonS = readTxtFile(("db/" + tabName + ".json").c_str());
		JSON js;
		sVector sV = js.simpleObject(jsonS);
		string sql=buildInsert(sV);
	}

	void Conf::defineFields(string tabName) {
		string jsonS = readTxtFile(("db/" + tabName + ".json").c_str());
		JSON js;
		sVector oV = js.getObjFromArray(jsonS);
		string sqlS;
		for ( sVector::iterator it=oV.begin(); it!=oV.end(); it++ ) {
			sqlS = buildInsert(js.simpleObject(*it));
			cout << sqlS << endl;
		}
	}
