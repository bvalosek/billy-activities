var test = require('tape');

var ActivityService = require('../index.js');

test('api', function(t) {
  t.plan(1);
  t.strictEqual(ActivityService, require('../lib/ActivityService.js'));
});
