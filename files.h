#ifndef FILE_H
#define FILE_H
#include "structs.h"
#include <fstream>
#include "util.h"
#define LOG(h,m) (Files::log(h,m,0))
#define SLOG(h,m) (Files::log(h,m,1))

class Files {
	private:
	static s3Map confV;
	static s3Map::iterator confVit;

	public:
	Files();
	static string getConfVal(string cat,string key);
	static string getConfKeys(string cat);

	static void log(string,string,int);
	string *getConfKeys(string cat, string *inA);
	string readTxtFile(const char* fName);
	void writeForms(string,string);
	void readConfFile( const char* fName);
	void iterateConfKeys( string cat, 
							void (*cb)(string));
};
#endif
