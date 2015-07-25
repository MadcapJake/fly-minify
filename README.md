<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

> [Minify](https://coderaiser.github.io/minify/) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][mit-badge]][mit]

## Usage
This plugin works for `js`, `html`, `css`, and `img` files.  Just pass one of those as `opts.ext` and you'll be good to go!

> Currently I'm aware of no relevant options for this package.  If you think `name` (or somehow `stream`) could be of use, they will properly pass through.  


> If you would like more control over the minifiers, you'll need to either create a separate plugin for a minifier package with more control, submit a PR to `minify`, and/or submit a PR to `minify`'s deps.

> Whatever you decide, let me know how it works out or if you need help!

### Install

```a
npm install -D fly-minify
```

### Example

```js
export default function* () {
    yield this.tasks.html()
    yield this.tasks.javascript()
}

export function* html () {
    yield this.clear("lib/html")
    yield this
        .source("src/**/*.html")
        .minify({ ext: "html" })
        .target("lib/html")
}

export function* javascript () {
    yield this.clear("lib/js")
    yield this
        .source("src/**/*.js")
        .minify({ ext: "js" })
        .target("lib/js")
}
```

# License

[MIT][mit] © [Jake Russo][author] et [al][contributors]


[mit]:          http://opensource.org/licenses/MIT
[author]:       http://github.com/MadcapJake
[contributors]: https://github.com/MadcapJake/fly-minify/graphs/contributors
[releases]:     https://github.com/MadcapJake/fly-minify/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-minify
[npm-ver-link]: https://img.shields.io/npm/v/fly-minify.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-minify.svg?style=flat-square
[travis-link]:  https://travis-ci.org/MadcapJake/fly-minify
[travis-badge]: http://img.shields.io/travis/MadcapJake/fly-minify.svg?style=flat-square
