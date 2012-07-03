#ifndef STRUCTS_H
#define STRUCTS_H

#define LOGSQL 1 
#define DBNAME "eng"
#define TPLADID 75
#define NOGUI 1 
#define EDITID 0 
#define LISTID 1 
#define DEFAULTTABLAB "Main"
#define FIELDS_COLS "t.id id, t.adId adId, domId dom, lab lab, elmType typ, source src, validationFlag val, visibility vis, defaultVal def" 

#include <iostream>
#include <vector>
#include <map>
#include <stack>

using namespace std;

typedef vector<string		> sVector;
typedef vector<int			> iVector;

typedef map<string,string	> s2Map;
typedef pair<string,string	> s2Pair;
typedef map<string,s2Map	> s3Map;
typedef pair<string,s2Map	> s3Pair;
typedef map<string,s3Map	> s4Map;
typedef pair<string,s3Map	> s4Pair;

typedef map<int,string		> isMap;
typedef pair<int,string		> isPair;
typedef map<int,isMap		> i2sMap;
typedef pair<int,isMap		> i2sPair;

typedef map<int,s2Map 		> is2Map;
typedef pair<int,s2Map 		> is2Pair;
typedef map<int,is2Map 		> i2s2Map;
typedef pair<int,is2Map 	> i2s2Pair;

typedef map<int,int			> i2Map;
typedef pair<int,int		> i2Pair;
typedef map<int,i2Map		> i3Map;
typedef pair<int,i2Map		> i3Pair;
typedef map<int,i3Map		> i4Map;
typedef pair<int,i3Map		> i4Pair;

typedef map<long int,string	>	lsMap;
typedef pair<long int,string>	lsPair;
typedef map<string,lsMap	>	slsMap;
typedef pair<string,lsMap	>	slsPair;
typedef map<string,slsMap	>	s2lsMap;
typedef pair<string,slsMap	>	s2lsPair;

typedef stack<s2Pair>			s2PairStack;
#endif
