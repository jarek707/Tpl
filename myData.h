#ifndef TPLDATA_H
#define TPLDATA_H
#include <stdio.h>
#include <stdlib.h>
#include "structs.h"
#include "my.h"
#include "tplTree.h"
#include "tpl.h"

class MyData : My {
	private:
		int pAdIdPos;
		int adIdPos;
		int itemIdPos;
		int idPos;
		int seqPos;
		string currentTab;
		const char* setupDbCall(string,string);

	protected:
		s2Map *workSM;

	public:
		i2s2Map 	actions;
		i2s2Map		fields;
		i4Map		plugs;
		s2lsMap 	numConsts;
		slsMap 		numConstsIdx;
		s4Map 		txtConsts;
		vector<int> adIdsV;
		map<int, iVector >perms;

		MyData(const char* dbName);
		MyData();
		void getConfFromDb(string);
		void populateActions(MYSQL_ROW row,int cnt, int rows, int cols);
		void populateFields(MYSQL_ROW row,int cnt, int rows, int cols);
		void populatePlugs(MYSQL_ROW row,int cnt, int rows, int cols);
		void populateConsts(MYSQL_ROW row,int cnt, int rows, int cols);
		void populatePerms(MYSQL_ROW row,int cnt, int rows, int cols);

		s2Map* 		getActionsData(int pAd, int ad ) { return &(actions[pAd][ad]); }
		is2Map* 	getFieldsData(int ad) { return &(fields[ad]); }
		s2Map* 		getFieldData(int ad,int id ) { return &(fields[ad][id]); }
		int 		getPlugsData(int pAd, int ad, int item ) { return plugs[pAd][ad][item]; }
		iVector 	getInjectPlugs(int pAd);

		string 		getTConst(string typ, string name) { return txtConsts[typ][name].begin()->first; }
		long int	getNConst(string typ, string name) { return numConsts[typ][name].begin()->first; }
		string 		getNConst(string typ, string name,long int val) { return numConsts[typ][name][val]; }
		string 		getNConst(string typ, long int val) { return numConstsIdx[typ][val]; }
	
		void iterData3(i2s2Map *dataM);
		void iterData3(i4Map *dataM);
		void iterData2(is2Map *dataM);
};
#endif
