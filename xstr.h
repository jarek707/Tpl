#ifndef XSTR_H
#define XSTR_H
#include <string>
class xstr;

class xstr : public std::string {
	public:
	xstr() : std::string() {}
	int wcount();
};
#endif
