#include "formGen.h"
FormGen::FormGen() {};

//
void FormGen::test(string userId) {
	getConfFromDb(userId);

	string outS="", pFix="";
	for (i2s2Map::iterator iit=actions.begin(); iit!=actions.end(); iit++ ) {
		pFix = ( iit->first == TPLADID ) ? "T" : "P";
		for (is2Map::iterator it=iit->second.begin(); it!=iit->second.end(); it++ ) {
			tabHtmlM.clear();
			genInjectPlugs(it->first);
			if ( it->second["tabPfix"] == "" ) {
				tplT.child.clear();
				tplT.reInitVars(getActionsData(iit->first,it->first)); // TODO this should just be it->second
				tplT.appendVar("pFix",pFix);
				outS += mkPlug(it->first,pFix.c_str());
			}
		}
	}
	Files f;
	f.writeForms(outS, userId);
}

// Fully injected plugin Id iteration
// Each Id is replicated as many times as there are tabIds
void FormGen::iterateIds(int adId) {
	sVector sV;
	sV = Util::split(sV, actions[TPLADID][adId]["tabIds"]);

	is2Map iterSM;
	int cnt = 0;
	for (sVector::iterator sit=sV.begin(); sit!=sV.end(); sit++ ) {
		for (is2Map::iterator it=fields[adId].begin(); it!=fields[adId].end(); it++ ) {
			if ( !(Util::atoi(it->second["vis"]) & NOGUI) ) {
				iterSM.insert(is2Pair((++cnt),(it->second)));
				iterSM[cnt]["dom"] = (*sit) + iterSM[cnt]["dom"]; // Prepend tabId to domId
			}
		}
	}
	fields[adId].clear();
	fields[adId]=iterSM;
}

void FormGen::genInjectPlugs(int adId) {
	iVector iV = getInjectPlugs(adId);
	if ( iV.size() > 0 ) {
		if ( injectM.find(adId) == injectM.end() ) {
			for ( iVector::iterator it=iV.begin(); it!=iV.end(); it++ ){
				if ( actions[TPLADID][(*it)]["tabIds"] != "" ) iterateIds(*it);

				if ( injectM.find(*it) == injectM.end() ) {
					s2Map 	sM;
					sM.insert(s2Pair("json",""));
					sM.insert(s2Pair("html",""));
					is2Map 	isM;
					isM.insert(is2Pair(EDITID,sM));
					isM.insert(is2Pair(LISTID,sM));
					injectM.insert(i2s2Pair(*it,isM));
				}

				injectM[*it][EDITID]["json"] = mkFields((*it),actions[TPLADID][(*it)]["tabPfix"]);
				injectM[*it][EDITID]["html"] = tabHtmlM["Main"];
			}
		}
	}
}

//
void FormGen::mkHtmlTabs(int adId, s2Map data, string tabPfix) {
	TplTree htmlT(&data);

	if ( data["tabLab"] == "" ) data["tabLab"] = DEFAULTTABLAB;
	if ( tabHtmlM.find(data["tabLab"]) == tabHtmlM.end() ) {
		tabHtmlM.insert(s2Pair(data["tabLab"],""));
	}
	string tplName = getNConst("T",(strtol(data["typ"].c_str(),NULL,0)));
	htmlT.appendVar("pfix",tabPfix);
	htmlT.appendVar("domId",data["dom"]);
	htmlT.appendVar("ulContent", runTpl("ITERATE tpl/form/" + tplName + ".tpl", &htmlT));
	tabHtmlM[data["tabLab"]] += runTpl("ITERATE tpl/form/fldWrap.tpl", &htmlT);
}

//
string FormGen::mkJsonFields(int adId, s2Map data, string tabPfix) {
	s2Map::iterator s2it;
	string fldS = "\"" + tabPfix + data["dom"] + "\":{" ;

	for ( s2it=data.begin(); s2it!=data.end(); s2it++ ) {
		string f = s2it->first;
		if (!((f=="xmlTag") || (f=="seq") || (f == "") || (f=="dom") || (f=="adId"))) {
			fldS += "\"" + s2it->first + "\":\"" + s2it->second + "\",";
		}
	}
	fldS = fldS.substr(0,fldS.size()-1) + "},\n";

	return fldS;
}

//
string FormGen::mkFields(int adId, string tabPfix) {
	is2Map *fieldsData;
	fieldsData = getFieldsData(adId);
	string jsonS=""; 

	is2Map::iterator is2it;
	for ( is2it=(*fieldsData).begin(); is2it!=(*fieldsData).end(); is2it++) {
		if ( getNConst("T",Util::atoi(is2it->second["typ"])) != "" ) {
			if ( !(Util::atoi(is2it->second["vis"]) & NOGUI) ) {
				mkHtmlTabs(adId, is2it->second, tabPfix);
				jsonS += mkJsonFields(adId, is2it->second, tabPfix);
			}
		}
	}
	return jsonS.substr(0,jsonS.size()-2);
}

//
string FormGen::renderPane(string pFix, string adIdS) {
	TplTree tabT, tabCT;

	tplT.setVar("adId", (string)pFix + adIdS);
	if ( tabHtmlM.size() > 0 ) {
		for (s2Map::iterator it=tabHtmlM.begin(); it!=tabHtmlM.end(); it++ ) {
			int i = tabCT.appendVars(new s2Map);
			tabCT.appendVar(i,"tabLabel",it->first);
			tabCT.appendVar(i,"tabContent",it->second);
			tabCT.appendVar(i,"adId", (string)pFix + adIdS);
			if ( tabHtmlM.size() > 1 ) {
				i = tabT.appendVars(new s2Map);
				tabT.appendVar(i,"tabLabel",it->first);
			}
		}
		tplT.pushChild("tabDivContent", &tabCT);

		if ( tabHtmlM.size() > 1 ) {
			tplT.pushChild("tabLabels",  &tabT);
			tplT.appendVar("hasMultipleTabs","true");
		}
	}

	string outS = '"' + runTpl("ITERATE tpl/edit.tpl", &tplT) + '"';
	tabT.destroyData();
	tabCT.destroyData();
	return outS;
}

//
string FormGen::assemblePlug(int adId, string jsonS, string pFix) {
	s2Map sM;
	sM.insert(s2Pair("adIdS", (string)pFix + Util::itoa(adId)));

	iVector iV = getInjectPlugs(adId);
	for (iVector::iterator it=iV.begin(); it!= iV.end(); it++ ) {
		jsonS += injectM[*it][EDITID]["json"] + ",\n";	
	}

	sM.insert(s2Pair("jsonS", jsonS));
	sM.insert(s2Pair("editS", renderPane(pFix,Util::itoa(adId))));

	TplTree tT(&sM);

	plugsM[adId] = runTpl("ITERATE tpl/js/htmlDefs.tpl",&tT);
	return plugsM[adId];
}

string FormGen::mkPlug(int adId, char const* pFix) {
	return assemblePlug(adId, mkFields(adId,(string)""), pFix);
}

string FormGen::runTpl(string tplS, TplTree *tplP) {
	Tpl tpl;
	return tpl.run(tplS,tplP);
}
