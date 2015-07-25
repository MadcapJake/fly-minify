module.exports = function () {
  const minify = (src, opts, cb) => {
    require("minify")(opts, (err, data) =>
      err ? (() => { throw err })() : cb(data))
  }

  this.filter("minify", (source, options) =>
    this.defer(minify)(source, options))
}
