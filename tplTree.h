#ifndef TPLTREE_H
#define TPLTREE_H
#include "structs.h"
#include "util.h"

class TplTree;
typedef pair<string,TplTree*> 	stringTreePair;
typedef map<string,TplTree*> 	stringTreeMap;
typedef vector< s2Map* > sPmapVector;

class TplTree {
	public:
	TplTree() {};
	TplTree(string);
	TplTree(s2Map *sMap);

	sPmapVector		data;
	stringTreeMap 	child;
	s2Map			quickSM;

	void pushChild(string,TplTree*);

	void setVar(string,string); 
	void setVar(int,string,string); 
	void appendVar(string,string); 
	void appendVar(int,string,string); 
	int appendVars(s2Map *sMP);
	void reInitVars(s2Map *sMP);
	void destroyData();

	void dumpData();
	void showChildren();
};
#endif
