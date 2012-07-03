#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <vector>
#include <mysql.h>
#include <sstream>

#include "structs.h"
#include "tpl.h"
#include "my.h"
#include "files.h"
#include "conf.h"
#include "util.h"
#include "formGen.h"
#include "myData.h"
#include "json.h"

//change
using namespace std;

string My::dbName="";
s3Map Files::confV;
s3Map::iterator Files::confVit;
s3Map Conf::keyVal;
s3Map::iterator Conf::keyValit;
s2Map Tpl::loadedTpls;
bool Conf::initPending=true;

void cPlay(int i) {
/*
	string S="0x1f";
	cout << strtol(S.c_str(),NULL,16)<< endl;
	cout << "TEST:" << 
		Util::getNthWord("ab, bc, cd",i,1) 
		<< "<"  << endl;
	*/
	Conf cf;
	cf.init();
	cf.defineFields("unif");
}

main( int argc, char* argv[] ) {
	if ( argc==1 ) {
		cout << "USAGE:"<< endl;
		cout << "a 0 <databaseName> <query> "<< endl;
		cout << "a 1 <databaseName> MyData"<< endl;
		cout << "a 2 {testing templates}" << endl;
		cout << "a 3 {testing files}" << endl;
		cout << "a 4 {testing form generation}" << endl;
		cout << "a 5 {invokde cPlay function in main()}" << endl;
		cout << "a 6 {testing JSON simple parser}" << endl;
	} else {
		switch ( atoi(argv[1]) ) {
			case 0: {
				My MY(argv[2]);
				if ( MY.isConnected() ) { 
					MY.tabQ(argv[3]," LIMIT 3");
					MY.renderData();
				} else { cout << "NOT CONNECTED TO DB" <<endl; }
				break; }
			case 1: {
				if ( argv[2] ) {
					MyData td(argv[2]) ;
					td.getConfFromDb("72");
				}else {
					cout << "Database Name must be provided."<< endl;
				}
				break; }
			case 2: {
				Tpl tpl;
				tpl.test();
				break; }
			case 3: {
				Conf mf;
				mf.init();
				break; }
			case 4: {
				FormGen fg;
				fg.test((string)argv[2]);
				/*
				if  (argv[3]) fg.test((string)argv[3]);
				if  (argv[4]) fg.test((string)argv[4]);
				if  (argv[5]) fg.test((string)argv[5]);
				*/
				break; }
			case 5: {
				cPlay(atoi(argv[2]));
				break; }
			case 6: {
				JSON js;
				js.test("   {   \"domId\"   :   \"name \\\" like this \\\"\"  , \"label\" : \"lab\" }");
				if ( argv[2] ) {
					cout << "ARGV2: " <<  argv[2]<< endl;
					js.test( argv[2] );
				}
				break; }
			default: 
				cout << "USAGE:"<< endl;
				cout << "a 0 <databaseName> <query> "<< endl;
				cout << "a 1 <databaseName> MyData"<< endl;
				cout << "a 2 {testing templates}" << endl;
				cout << "a 3 {testing files}" << endl;
				cout << "a 4 {testing form generation}" << endl;
				cout << "a 5 {invokde cPlay function in main()}" << endl;
				cout << "a 6 {testing JSON simple parser}" << endl;
				break;
		}
	}
}
