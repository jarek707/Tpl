#ifndef UTIL_H
#define UTIL_H
#include "structs.h"
#include <stdio.h>
#include <stdlib.h>

class Util {
	public:
	Util();

	static int 		atoi(string);
	static string 	itoa(int);
	static long 	htol(string);

	static sVector 	split(sVector,string);
	static void 	split(string inA[],string);
	static string 	collapseSpaces(string);
	static string 	getStringMapKeys(s2Map);
	static int 		getWordPos(string,string);
	static string 	escapeDblQ(string);
	static string 	getNthWord(string,int,int); 
};
#endif
