USER=$(shell find . -maxdepth 1 -name index.html  -printf %u)
LASTDATE=$(shell find *.js *.html -printf "%TY-%Tm-%Td\n" | sort -gr | head -n 1)
OPS_HASH=opskrbljivaci-$(shell md5sum opskrbljivaci*.js | cut -c-9).js

nothing:
	@echo Doing nothing as user=$(USER)...

fixdate:
	fgrep -q "var last_updated='$(LASTDATE)" opskrbljivaci*.js || sed -i -e "s/last_updated=.*/last_updated='$(LASTDATE)';\t\/\/ autoupdated by Makefile/"  opskrbljivaci*.js
	test -f $(OPS_HASH) || git mv opskrbljivaci*.js $(OPS_HASH)
	fgrep -q "<script defer src=\"$(OPS_HASH)\">" index.html || sed -i -e "s/<script defer src=\"opskrbljivaci-[a-z0-9]*.js\">/<script defer src=\"$(OPS_HASH)\">/"  index.html

update:
	umask 077; if [ "`id -un`" = "$(USER)" ] ; then git pull; else env -i setuidgid $(USER) git pull; fi
	chmod -R a=rX,u=wr *.html *.js *.css *.txt LICENSE README.md
	chmod 700 .git

publish: fixdate
	git commit -a || true
	git push
