# Semantic-UI.alertAndConfirm
Semantic-UI Alert &amp; Confirm
<br>Semantic is a UI component framework based around useful principles from natural language. http://www.semantic-ui.com

<p>
  <a href="https://gitter.im/miamarti/Semantic-UI.alertAndConfirm" target="_blank"><img src="https://img.shields.io/gitter/room/nwjs/nw.js.svg"></a>
  <img src="https://img.shields.io/badge/SemanticUI.alertAndConfirm-release-green.svg">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
  <a href="https://github.com/miamarti/Semantic-UI.alertAndConfirm/tarball/master"><img src="https://img.shields.io/github/downloads/atom/atom/latest/total.svg"></a>
  <img src="https://img.shields.io/bower/v/bootstrap.svg">
</p>

## Dependencies
* AngularJS

## Implementation
```
    <div class="ui pointing secondary menu" ng-tab>
        <a class="item active" data-tab="tabA">Tab A</a>
        <a class="item" data-tab="tabB">Tab B</a>
        <a class="item" data-tab="tabC">Tab C</a>
    </div>
    
    <div class="ui attached tab active tabs-datails" data-tab="tabA">
      ...
    </div>
    <div class="ui attached tab tabs-datails" data-tab="tabB">
      ...
    </div>
    <div class="ui attached tab tabs-datails" data-tab="tabC">
      ...
    </div>
```

## Bower install de dependency
```
$ bower install Semantic-UI.alertAndConfirm --save
```

## Module AngularJS include
```
angular.module('example', ["ngAlertAndConfirm"]);
```
