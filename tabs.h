#ifndef TABS_H
#define TABS_H
#include <stdio.h>
#include <stdlib.h>
#include <jansson.h>
#include "structs.h"
#include "my.h"
#include "tplTree.h"
#include "tpl.h"

class Tabs : My {
	public:
		Tabs(const char* dbName);
		Tabs();
	private:
		string actions[23];
		string flds[16];
		void parseAction();
		void parseField();
};
#endif
