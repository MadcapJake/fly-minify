const test = require("tape").test
const bind = require("fly-util").bind
const defer = require("fly-util").defer
const html = require("path").join("test", "fixtures", "test.html")

test("fly-minify", (t) => {
  t.plan(3)

  const fly = {
    defer: defer,
    filter: function (name, transform) {
      t.equal(name, "minify", "minify filter name")
      this[name] = transform
    }
  }
  require(bind("../")).call(fly)

  require("minify")(html, function(error, oriResult) {
    if (error) console.error(error.message)
    else {
      fly.minify(require("fs").readFileSync(html), {ext: "html"})
         .then(function (result) {
           t.equal(result.code, oriResult, "minify direct vs via transform")
           t.equal(result.ext, ".html", "transform returns proper extension")
         })
    }
  })

})
