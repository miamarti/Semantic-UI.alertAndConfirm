# Semantic-UI.alertAndConfirm
Semantic-UI Alert &amp; Confirm
<br>Semantic is a UI component framework based around useful principles from natural language. http://www.semantic-ui.com

<p>
  <a href="https://gitter.im/miamarti/Semantic-UI.alertAndConfirm" target="_blank"><img src="https://img.shields.io/gitter/room/nwjs/nw.js.svg"></a>
  <img src="https://img.shields.io/badge/SemanticUI.alertAndConfirm-release-green.svg">
  <img src="https://img.shields.io/badge/version-1.0.1-blue.svg">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
  <a href="https://github.com/miamarti/Semantic-UI.alertAndConfirm/tarball/master"><img src="https://img.shields.io/github/downloads/atom/atom/latest/total.svg"></a>
  <img src="https://img.shields.io/bower/v/bootstrap.svg">
</p>

## Dependencies
* AngularJS

## Implementation
```
    <alert ng-model="$root.msg" ng-confirm="$root.confirm" ng-show="$root.msg.show" />
```

## Factory
```
    'use strict';
    
    angular.module('example').factory('MsgFactory', function ($rootScope, $cookies) {
        return function () {
            this.msg = [];
            this.type = undefined;
            this.show = false;
    
            this.setMsg = function (value) {
                this.msg = value;
            };
    
            this.setType = function (value) {
                this.type = value;
            };
    
            this.setShow = function (value) {
                this.show = value;
            };
    
            this.push = function (value) {
                this.msg.push(value);
            };
    
            this.apply = function () {
                $rootScope.msg = this;
            };
        };
    });
```

## Use Factory
```
    var msg = new MsgFactory();
    msg.setMsg('Informed message');
    msg.setType('confirm');
    msg.setShow(true);
    msg.apply();
```

## Message Types
| Type | Color | Modal |
|:-----|:------|:------|
| success | #83D147 | false |
| info | #17ABEF | false |
| warning | #F7C000 | false |
| danger | #E23D1C | false |
| confirm | #83D147 | true |
| confirm-info | #17ABEF | true |
| confirm-warning | #F7C000 | true |
| confirm-danger | #E23D1C | true |

## Bower install de dependency
```
$ bower install Semantic-UI.alertAndConfirm --save
```

## Module AngularJS include
```
angular.module('example', ["ngAlertAndConfirm"]);
```
