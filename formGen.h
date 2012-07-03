#ifndef FORMGEN_H 
#define FORMGEN_H
#include "stdio.h"
#include <stdlib.h>
#include <ios>
#include "structs.h"
#include "tpl.h"
#include "my.h"
#include "util.h"
#include "myData.h"
#include "files.h"

//class FormGen : Tpl, MyData {
class FormGen : MyData {
	public:
		FormGen();
		void test(string);

	private:
		TplTree tplT;
		s2Map 	tabHtmlM;
		i2s2Map	injectM;
		isMap	plugsM;

		void 	iterateIds(int);
		void 	genInjectPlugs(int);
		void 	mkHtmlTabs(int,s2Map,string);
		string 	mkJsonFields(int,s2Map,string);
		string 	mkFields(int,string);
		string 	renderPane(string,string);
		string 	assemblePlug(int,string,string);
		string 	mkPlug(int, char const* pFix);
		string 	runTpl(string, TplTree *tplP);
};
#endif
