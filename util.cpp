#include <iostream>
using namespace std;

#include "util.h"

Util::Util() {}

// String Utilities

string Util::itoa(int i) {
	char seq[16];
	sprintf(seq,"%d",i);
	return (string)seq;
}

int 	Util::atoi(string inS) 	{ return strtol(inS.c_str(),NULL,0); 	}
long 	Util::htol(string hexS)	{ return strtol(hexS.c_str(),NULL,16);	}

// Splits inS by spaces and returns array inA of substrings of inS.
// all leading and traling spaces are removed from each substring
void Util::split(string inA[], string inS) {
	bool lastWasCharB = false;
	string outS = "";
	int cnt=0;
	int strSizeI = inS.size();
	for ( int i=0; i<strSizeI; i++ ) {
		if (( inS.at(i) == ' ' ) || ( inS.at(i) == '\t' ) ) {
			if ( lastWasCharB ) inA[cnt++] = outS;
			outS ="";
			lastWasCharB = false;
		} else {
			lastWasCharB = true;
			outS += inS.at(i);
			if ( i == strSizeI-1 ) inA[cnt++] = outS;
		}
	}
}

sVector  Util::split(sVector strV, string inS) {
	strV.clear();
	bool lastWasCharB = false;
	string outS = "";
	int cnt=0;
	int strSizeI = inS.size();
	for ( int i=0; i<strSizeI; i++ ) {
		if (( inS.at(i) == ' ' ) || ( inS.at(i) == '\t' ) ) {
			if ( lastWasCharB ) strV.push_back(outS);
			outS ="";
			lastWasCharB = false;
		} else {
			lastWasCharB = true;
			outS += inS.at(i);
			if ( i == strSizeI-1 )strV.push_back(outS);
		}
	}
	return strV;
}
// Takes out all leading and trailing spaces and collapses multiple consecutive spaces and tabs to a single space
string Util::collapseSpaces(string inS) {
	bool lastWasCharB = false;
	string outS = "";
	int cnt=0;
	int strSizeI = inS.size();
	for ( int i=0; i<strSizeI; i++ ) {
		if (( inS.at(i) == ' ' ) || ( inS.at(i) == '\t' ) ) {
			if ( ( lastWasCharB ) && (i<strSizeI-1) )  outS += " ";
			lastWasCharB = false;
		} else {
			lastWasCharB = true;
			outS += inS.at(i);
		}
	}
	return outS;
}

string Util::getStringMapKeys(s2Map sM) {
	string outS="";
	s2Map::iterator sMit;
	for ( sMit=sM.begin(); sMit!=sM.end(); sMit++ ) {
		if ((*sMit).first != "" ) 
			outS += (*sMit).first + " ";
	}
	return outS.substr(0,outS.length()-1);
}

string Util::getNthWord(string inS, int idx, int skipTrailing) {
	int outCnt=0, cnt=0, sPos=0, ePos=0;

	bool lastWasCharB = false;
	for (int i=0; i<inS.size(); i++ ) {
		if (( inS.at(i) == ' ' ) || ( inS.at(i) == '\t' ) ) {
			if (lastWasCharB) { 
				ePos=i;
				if ( cnt == idx ) return inS.substr(sPos,ePos-sPos-skipTrailing);
				cnt++;
			}
			lastWasCharB = false;
		} else {
			if ( !(lastWasCharB) ) sPos=i;
			lastWasCharB = true;
		}
	}
	return inS.substr(inS.find_last_of(" ")+1,-1);
}

int Util::getWordPos(string inS,string target) {
	int outCnt=0;
	bool lastWasCharB = false;
	for (int i=0; i<inS.size(); i++ ) {
		if (( inS.at(i) == ' ' ) || ( inS.at(i) == '\t' ) ) {
			if (lastWasCharB) outCnt++;
			lastWasCharB = false;
		} else {
			if ( !(lastWasCharB) && (inS.substr(i,target.size()) == target) ) return outCnt;
			lastWasCharB = true;
		}
	}
	return -1;
}

string Util::escapeDblQ(string inS) {
	int qPos;
	string outS="";
	while ( (qPos = inS.find("\"")) > -1 ) {
		if ( qPos==0 ) {
			inS = "\\" + inS;
		} else {
			if ( (inS[qPos-1]) != '\\' ) {
				outS += inS.substr(0,qPos) + "\\\"";
			} else {
				outS += inS.substr(0,qPos+1);
			}
			inS = inS.substr(qPos+1,-1);
		}
	}
	return outS + inS;
}

//Conf Utilities
