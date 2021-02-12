# Reddit Micro

A reddit client built as a portfolio project with [Codecademy](https://codecademy.com), using the [Reddit JSON API](https://github.com/reddit-archive/reddit/wiki/JSON). Built with React and Redux, and various associated packages.

## Known Issues

- Can't seem to pull more than 25 (ish) posts from the Reddit API at any given time.
- The [ReactMarkdown](https://www.npmjs.com/package/react-markdown) component leaves some improperly-typed markdown tags (eg \#title tags) and HTML hex values (eg the zero-width space `&#x200b`) intact.
- The markdown converstion cuts off the raw html body text preview at 300 characters before converting markdown input to HTML for the post preview, so any dangling markdown tags are cut off, meaning you see the odd \*bold text or \_italic dangling. Likely an easy fix in the future, but nothing site-breaking for now.
- Reddit Micro doesn't differentiate between 404 errors and any other kind of error thrown, at this point.
