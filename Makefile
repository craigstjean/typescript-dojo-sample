all:
	node write_all_ts.js js
	tsc $(shell find ./js -name '*.ts')

clean:
	find ./js -name '*.js' -exec rm {} \;

