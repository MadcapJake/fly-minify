const assign = require("object-assign")
const minifier = require("minify")
module.exports = function () {
  const minify = (src, opts, cb) => {
    minifier(assign(opts, { data: src }), function (err, data) {
      if (err) throw err
      cb(null, data)
    })
  }

  this.filter("minify", (source, options) => {
    if (!options.ext) throw new TypeError("Minify options must contain an extension")
    if (options.ext[0] !== ".") options.ext = "." + options.ext
    return this.defer(minify)(source, options)
  })
}
