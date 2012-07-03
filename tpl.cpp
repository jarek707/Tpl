#include <iostream>
using namespace std;
#include "util.h"
#include "tpl.h"
#include "conf.h"

	Tpl::Tpl() {
		opS="[%%";
		clS="%%]";
	}

	Tpl::Tpl(string argsS, string tplFileName) {
		opS="[%%";
		clS="%%]";
		TplTree tt(argsS);
		tplOutS = run((string)"RENDER " + tplFileName.c_str(), &tt);
	}

	Tpl::Tpl(s2Map *sM, string tplFileName) {
		opS="[%%";
		clS="%%]";
		TplTree tt(sM);
		tplOutS = run((string)"RENDER " + tplFileName.c_str(), &tt);
	}

	string Tpl::quick(string argsS, string tplFileName) {
		TplTree tt(argsS);
		return run((string)"RENDER " + tplFileName.c_str(), &tt);
	}

	// Loading template on demand
	void Tpl::loadTplContents(const char* tplFileS) {
		if ( Tpl::loadedTpls.find(tplFileS) == Tpl::loadedTpls.end() ) {
			Files fileS;
			Tpl::loadedTpls.insert( s2Pair(tplFileS, Util::escapeDblQ(fileS.readTxtFile(tplFileS))) );
		}
	}

	bool Tpl::ifIsFalse(string ifTplS,s2Map *node) {
		string tplA[5];
		Util::split(tplA, ifTplS);

		string testVal = (*(node))[tplA[1]];
		if ( tplA[3] != "" ) {
			if ( tplA[2] == "NOT" ) {
				return (testVal == tplA[4].substr(1,tplA[4].size()-2)); // skip quotes (or any surrounding chars) in a tepmlate constant
			} else {
				return (testVal != tplA[3].substr(1,tplA[3].size()-2)); // skip quotes (or any surrounding chars) in a tepmlate constant
			}
		} else {
			return ((testVal == "") || (testVal == "0") || (testVal == "false") || (testVal == "FALSE"));
		}
	}

	atomST Tpl::setAtomContainer(string tplS, string freeTextS) {
		atomST atomContainer;
		atomContainer.tplContent = tplS;
		atomContainer.freeText	 = freeTextS;
		atomContainer.typ 		 = (tplS.find_first_of("IER") == 0) ? tplS.substr(1,1) : "V"; 
		return atomContainer;
	}

	signed int Tpl::getIfCnt(signed int ifcnt, string tToken) {
		if ( tToken == "F" ) return ifcnt+1;

		if ( ifcnt == 0 ) {
			if ( ( tToken == "N" ) || ( tToken == "L" ) ) return -1;
		} else {
			if ( tToken == "N" ) return ifcnt-1;
		}
		return ifcnt;
	}

	string Tpl::skipToEndIf(string leftOverS, signed int ifcnt) {
		if ( ifcnt < 0 ) return leftOverS;

		int nextOpPos = leftOverS.find(opS);
		if ( nextOpPos == -1 ) return leftOverS;

		int nextClPos = leftOverS.find(clS);
		string nextTplS = Util::collapseSpaces(leftOverS.substr( nextOpPos+3, nextClPos-nextOpPos-3));
		leftOverS = leftOverS.substr(nextClPos+3, -1);
		string tToken = nextTplS.substr(1,1);

		return	skipToEndIf( leftOverS, getIfCnt(ifcnt, tToken) );
	}

	// Main method of the engine.  
	// It receives a template string (leftOverS) and breaks it down into free text and template content 
	// for each template found in the template string.
	// It returns an atomVector consisting of {templateType: "VFTELN"} {free Text that precedes the template}
	// and {the contents of the template, i.e. whatever is between [%% and %%] }
	atomVector Tpl::atomizeTpl(string leftOverS, atomVector atomV, TplTree *node, int seq) {
		int opPos = leftOverS.find(opS);
		if ( opPos > -1 ) {
			int clPos = leftOverS.find(clS);
			string tplContentS	= Util::collapseSpaces(leftOverS.substr(opPos+3, (clPos-opPos-3)));
			atomV.push_back( setAtomContainer(tplContentS, leftOverS.substr(0,opPos)) );
			leftOverS = leftOverS.substr(clPos+3,-1);
			string tToken = tplContentS.substr(0,3);

			if ( ( tToken == "ITE" ) || ( tToken == "REN") ) { // ITERATE or RENDER
				atomV.push_back( setAtomContainer("", run(tplContentS, node)) );
			} else {
				if ( ((tToken=="IF ") && (ifIsFalse(tplContentS,node->data[seq]))) || (tToken=="ELS") )	{
					leftOverS = skipToEndIf(leftOverS,0);
				}
			}
			atomV = atomizeTpl(leftOverS, atomV, node, seq); // RECURSION
		} else {
			atomV.push_back( setAtomContainer("", leftOverS) );
		}
		return atomV;
	}

	// Renders or Iterates
	// tplContentS is of the format "<RENDER|ITERATE> <tplfileNamePath/tplFileName> <variableMap>"
	// Example of tplContentS: "RENDER tpl/testTemplate.tpl varM"
	string Tpl::run(string tplContentS,TplTree *node) {
		TplTree* origNode = node;
		string tplA[5];
		Util::split(tplA, tplContentS);
		loadTplContents(tplA[1].c_str());

		if ( (tplA[2] != "") && (node->child.find(tplA[2]) != node->child.end()) ) {
			node = node->child[tplA[2]]; 
		}
			
		string outS="";
		if ( node ) {
			for (int i=0; i<(node->data.size()); i++ ) {
				node->data[i]->insert(s2Pair("SEQ",Util::itoa(i)));
				atomVector atomV;
				outS += subVars( atomizeTpl(Tpl::loadedTpls[tplA[1]],atomV,node,i), node->data[i] );
			}
		}
		node = origNode;
		return outS;
	}

	// Substitues values for template variables and returns a string, this is the final step.
	string Tpl::subVars(atomVector atomV,s2Map *node) {
		string retS = "";
		for (int i=0; i<atomV.size(); i++ ) {
			retS +=  atomV.at(i).freeText + (( atomV.at(i).typ=="V" ) ? (*(node))[atomV.at(i).tplContent] : "");
		}
		return retS;
	}

	void Tpl::mkTpl(const char* tplFileName) { } 
	void Tpl::test() {
		Conf cf;
		cf.init();
		mkTpl("tpl/test.tpl");
	}
