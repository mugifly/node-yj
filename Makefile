SOURCES = api/**/*.js

# ==============================================================================
# Node Tests
# ==============================================================================

VOWS = ./node_modules/.bin/vows
TESTS ?= test/*-test.js

test:
	@NODE_ENV=test $(VOWS) $(TESTS)

# ==============================================================================
# Static Analysis
# ==============================================================================

JSHINT = jshint

hint: lint
lint:
	$(JSHINT) $(SOURCES)


.PHONY: test hint lint