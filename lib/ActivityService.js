module.exports = ActivityService;

var ActivityManager = require('activities').ActivityManager;
var getName         = require('typedef').getName;
var debug           = require('debug')('ActivityService');

/**
 * Expose the activity manager navigator instance as `navigator`.
 *
 * Config options:
 * * `navigator.startup` An activity to start when the application starts.
 * @constructor
 */
function ActivityService(config, app)
{
  this.config = config;
  var manager = this.manager = new ActivityManager(function(T) {
    return app.make(T);
  });
  app.register('navigator', manager.navigator).asInstance();
}

/**
 * Allow for a startup activity to be specified via config
 * @private
 */
ActivityService.prototype.start = function()
{
  var T = this.config('navigator.startup');

  if (!T) {
    debug('warning: no navigator.startup config, not starting activity');
    return;
  }

  this.manager.start(T);
  debug('navigator.startup: %s', getName(T));
};

