var test = require('tape');

var Application     = require('billy');
var ActivityService = require('../lib/ActivityService.js');

test('navigator.startup is launched', function(t) {
  t.plan(1);

  var app = new Application();

  function Activity() { }
  Activity.prototype.onStart = function() { t.ok('started!'); };

  app.service(ActivityService);

  app.config('navigator.startup', Activity);

  app.start();

});

test('activities are IoC injected', function(t) {
  t.plan(1);

  var DEP = {};

  function Activity(dep) { t.strictEqual(dep, DEP); }

  var app = new Application();
  app.register('dep', DEP).asInstance();
  app.service(ActivityService);

  app.service(function(navigator) {
    navigator.start(Activity);
  });

  app.start();

});

