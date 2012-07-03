CC=g++
CFLAGS=-c
LDFLAGS=
INCL=-I/usr/include/mysql
LLIBS=-L/usr/lib/mysql 
LIBS=-lmysqlclient
SOURCES=json.cpp tabs.cpp tv.cpp xstr.cpp my.cpp myData.cpp files.cpp formGen.cpp tpl.cpp tplTree.cpp util.cpp conf.cpp a.cpp
OBJECTS=$(SOURCES:.cpp=.o)
EXEC=a

all: $(SOURCES) $(EXEC)

$(EXEC): $(OBJECTS)
	$(CC) $(LDFLAGS) $(LLIBS) $(LIBS) -lm $(OBJECTS) -o $@ 
.cpp.o:
	$(CC) $(CFLAGS) $(INCL) $< -o $@
clean: 
	rm -rf *.o a jsGen/*
