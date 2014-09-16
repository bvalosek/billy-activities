# billy-activities

[![Build Status](https://travis-ci.org/bvalosek/billy-activities.png?branch=master)](https://travis-ci.org/bvalosek/billy-activities)
[![NPM version](https://badge.fury.io/js/billy-activities.png)](http://badge.fury.io/js/billy-activities)

A service that allows for the use of activities for state management in
[Billy](https://github.com/bvalosek/billy) Applications

## Install

```
$ npm install billy-activities
```

## Usage

```javascript
var Application        = require('billy');
var ActivityService    = require('billy-activities');
var HomeScreenActivity = require('./activities/HomeScreenActivity.js');

var app = new Application();
app.service(ActivityService);
app.config('navigator.startup', HomeScreenActivity);

app.start();
```

## Injectables

New dependencies that you can use after adding this service:

 tag | type |description | notes
-----|------|------------|-------
`navigator` | `Navigator` | The [activity navigator](https://github.com/bvalosek/activities/blob/master/lib/Navigator.js) interface | Use the navigator to `start` and `finish` activities across the application

## Configs

Available config properties:

 config | type | description | default value | notes
--------|------|-------------|---------------|------
 `navigator.startup` | `Activity` | Activity to to launch at app startup | `null` | |

## Testing

```
$ npm test
```

## License

MIT
