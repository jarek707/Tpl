using namespace std;
#include "files.h"

	Files::Files() {}

	void Files::writeForms(string genS, string grpId) {
		ofstream outFile(("jsGen/" + grpId + "f.js").c_str());
		outFile.write(genS.c_str(),genS.size());
	}

	void Files::log(string head, string msgS, int logtype) {
		FILE *fp;
		if ( logtype==0 ) {
			fp = fopen("/tmp/a.log","a");
		} else {
			if ( LOGSQL == 1 ) {
				fp = fopen("/tmp/sql.log","a");
			}
		}
		if ( fp != NULL ) {
			fputs((head + msgS + "\n").c_str(), fp);
			fclose(fp);
		}
	}

	string Files::readTxtFile( const char* fName ) {
		string line ="";
		string fileContent="";
		ifstream fil(fName);
		if ( fil.is_open() ) {
			while ( fil.good() ) {
				getline(fil,line);	
				fileContent += line + "\n";
			}
		}
		return fileContent.substr(0,fileContent.size()-1);
	}

	void Files::readConfFile( const char* fName) { 
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
							Files::confV.insert( s3Pair(cat,sM) );
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
			Files::confV.insert( s3Pair(cat,sM) );
		}
	}
	
	string Files::getConfVal(string cat, string key) {
		return Files::confV[cat][key];
	}

	string *Files::getConfKeys(string cat, string *inA) {
		string *outA=inA;
		return outA;
	}

	void Files::iterateConfKeys(string cat, void (*cb)(string)) {

	}

	string Files::getConfKeys(string cat) {
		string outS="";
		s2Map sM = Files::confV[cat];
		s2Map::iterator it;

		for ( it = sM.begin(); it != sM.end(); it++ ) {
			outS += (*it).first + " ";
		}
		return outS.substr(0,outS.size()-1);
	}
