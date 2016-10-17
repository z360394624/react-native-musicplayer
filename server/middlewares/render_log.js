var logger = require('../modules/logger').logger


exports.render = function (req, res, next) {
  res._render = res.render
  //重写了render
  res.render = function (view, options, fn) {
    var t = new Date()

    res._render(view, options, fn)

    var duration = (new Date() - t)
    logger.info("Render view", view, ("(" + duration + "ms)").green)
  }

  next() 
}