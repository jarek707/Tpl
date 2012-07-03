#ifndef TPL_H
#define TPL_H
#include "structs.h"
#include "tplTree.h"

struct atomST {
	string typ;
	string tplContent;
	string freeText;
};

typedef vector <atomST> atomVector;

class Tpl {
	public:

	Tpl();
	Tpl(string,string);
	Tpl(s2Map *sM, string);
	string quick(string,string);
	void mkTpl(const char*);
	string run(string,TplTree *node);
	string subVars(atomVector,s2Map *node);
	void test();
	string getOutS() { return tplOutS; }

	bool ifIsFalse(string,s2Map *node);
	private:
	string opS, clS, tplOutS; 
	static s2Map loadedTpls;

	s2Map varsS;

	signed int getIfCnt( signed int, string);
	string skipToEndIf(string,signed int);
	string skipToElse(string inS,int i) {return inS;};
	void split(string inA[],string);
	void loadTplContents(const char* );
	atomVector atomizeTpl(string,atomVector,TplTree *node,int);
	atomST setAtomContainer(string, string);

	protected:
	s2Map varsM;
};
#endif
