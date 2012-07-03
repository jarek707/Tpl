#include "tplTree.h"

TplTree::TplTree(string argsS) {
	sVector sVec;
	sVec = Util::split(sVec,argsS);
	string s1, s2;
	if (sVec.size()==1) sVec.push_back("");
	while (sVec.size()>0) {
		s2 = sVec.back();
		sVec.pop_back();
		s1 = sVec.back();
		sVec.pop_back();
		quickSM.insert(s2Pair(s1,s2));
	}
	data.push_back( &quickSM );
}

TplTree::TplTree(s2Map *sMP) { appendVars(sMP); }

void TplTree::pushChild(string key, TplTree* cNode) {
	child.insert(stringTreePair(key,cNode));
};

void TplTree::setVar(int pos,string key, string val) { (*data[pos])[key] = val; };
void TplTree::setVar(string key, string val) { (*data[0])[key] = val; };

void TplTree::appendVar(int pos,string key, string val) { data[pos]->insert( s2Pair(key,val) ); };
void TplTree::appendVar(string key, string val) { data[0]->insert( s2Pair(key,val) ); };

int  TplTree::appendVars(s2Map *sMP)	{ data.push_back(sMP); return data.size()-1; }
void TplTree::reInitVars(s2Map *sMP) 	{ data.clear(); appendVars( sMP ); }

void TplTree::destroyData() { 
	for (sPmapVector::iterator it=data.begin(); it!=data.end(); it++) {
		delete (*it);
	}
}
void TplTree::dumpData() {
	cout << "------------------- Dumping Tree Data --------------"<< endl;
	for (sPmapVector::iterator it=data.begin(); it!=data.end(); it++ ) {
		for (s2Map::iterator itt=(**it).begin(); itt!=(**it).end(); itt++) {
			cout << itt->first << "=\"" << itt->second << "\"" << endl;
		}
	}
}
void TplTree::showChildren() {
	cout << "------------------- Showing Children --------------"<< endl;
	for (stringTreeMap::iterator it=child.begin(); it!=child.end(); it++ ) {
		cout << it->first << " has " << it->second->data.size() <<  " children" << endl;
	}
}
