#ifndef JSON_H
#define JSON_H
#include <stdio.h>
#include <stdlib.h>
#include "structs.h"
#include "my.h"
#include "tplTree.h"
#include "tpl.h"
#include <stack>

class JSON {
	private:
		s2Map simpleM;
		s2PairStack jSt;
	public:
		JSON();
		sVector simpleObject(string);
		string simpleGen(sVector);
		void showPairs(sVector);
		void test(string);
		sVector getObjFromArray(string);
};
#endif
