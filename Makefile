.PHONY: publish
publish:
	npm version $(kind)
	npm publish
	git push && git push --tags

.PHONY: publish-dry-run
publish-dry-run:
	npm run npm-dry-run
