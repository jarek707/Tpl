#include "json.h"

JSON::JSON() {}

//
//  Parses JSON string and returns a Vector with alternating key/value items.
//
sVector JSON::simpleObject(string jsonS) {
	sVector sV;
	int opPos=0, clPos = 0;

	string key;
	while ( jsonS.find("\"",clPos+1) != string::npos ) {
		opPos = jsonS.find_first_of("\"",clPos+1);
		clPos = jsonS.find_first_of("\"",opPos+1);
		while (jsonS.substr(clPos-1,1) == "\\") {
			clPos = jsonS.find_first_of("\"",clPos+1);
		}
		sV.push_back(jsonS.substr(opPos+1,clPos-opPos-1));
	}
	
	return sV;
}

sVector JSON::getObjFromArray(string jsonS) {
	sVector retV;
	int opPos=jsonS.find("[",0);
	int clPos=opPos;
	while ( jsonS.find("{",clPos) != string::npos ) {
		opPos = jsonS.find_first_of("{",opPos+1);
		clPos = jsonS.find_first_of("}",opPos+1);
		retV.push_back(jsonS.substr(opPos,clPos));
		cout << opPos << "  " << clPos << endl;
	}
	return retV;
}
//
//	Extracts key/value pairs from a Vector with alternating key/value items
//	and returns a JSON string.
//
string JSON::simpleGen(sVector sV) {
	string outS="";
	for ( sVector::iterator it = sV.begin(); it != sV.end(); it++ ) {
		outS += "\"" + *it + "\"";
		outS += ":\"" + *(++it) + "\",";
	}
	return "{" + outS.substr(0,outS.size()-1) + "}";
}

void JSON::showPairs(sVector jV) {
	int i=0;
	for ( sVector::iterator it=jV.begin(); it!=jV.end(); it++ ) {
		cout << (*it) ;
		if ( i==1 )  { cout << endl; i=0; }
		else { cout << "="; i=1;}
	}
}

void JSON::test(string jsonS) {
	cout << jsonS << endl;
	if (jsonS=="") return;
	sVector jV= simpleObject(jsonS);
	int i=0;
	for ( sVector::iterator it=jV.begin(); it!=jV.end(); it++ ) {
		cout << (*it) ;
		if ( i==1 )  { cout << endl; i=0; }
		else { cout << "="; i=1;}
	}
	cout <<">>>>>>>>>>>>>>>>"<< endl;
	cout << simpleGen(jV)<<endl;
}
