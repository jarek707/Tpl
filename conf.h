#ifndef CONF_H
#define CONF_H
#include "structs.h"
#include <fstream>
#include "util.h"
#include "files.h"
#include "json.h"

class Conf : Files {
	private:
	static s3Map keyVal;
	static s3Map::iterator keyValit;
	static bool initPending;

	public:
	Conf();
	static string getConfVal(string cat,string key);
	static string getConfKeys(string cat);

	string *getConfKeys(string cat, string *inA);
	string buildInsert(sVector);
	void readConfFile( const char* fName);
	void iterateConfKeys( string cat, void (*cb)(string));
	void init();


	void defineAction(string tabName);
	void defineFields(string tabName);
};
#endif
