.PHONY: publish
publish:
	npm version $(kind)
	git push && git push --tags

publish-dry-run:
  npm run npm-dry-run