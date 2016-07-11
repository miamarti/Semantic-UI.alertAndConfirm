(function () {
    'use strict';
    (angular.module('ngBootstrapAlert', ['ng'])).directive('alert', [
        function () {
            return {
                restrict: 'E',
                template: function (element, attrs) {
                    var html = '';

                    html += '<div id="genericMessage" class="ui {{style}} message" ng-show="{{(type !== \'confirm\')}}"  style="list-style-type: none; border-radius: 0px; border: medium none; margin-bottom: 0px;  background: {{style}}; color: #FFF;">';
                    html += '   <i class="icon revello-close" style="position: relative; float: right; top: 10px;" ng-click="close()" />';
                    html += '   <ul class="" style="list-style-type: none ! important; position: relative; left: -29px; top: -5px;">';
                    html += '       <li ng-repeat=\'message in msg\'><b>{{message}}&nbsp;</b></li>';
                    html += '   </ul>';
                    html += '</div>';

                    html += '<div id="genericConfirm" class="ui small modal">';
                    html += '   <i class="close icon"></i>';
                    html += '   <div id="genericConfirmHeader" class="header" style="color: white;text-align: center;">';
                    html += '       <b>CONFIRM</b>';
                    html += '   </div>';
                    html += '   <div class="image content">';
                    html += '       <div class="description">';
                    html += '           <p name="description" ng-repeat=\'message in msg\'>{{message}}&nbsp;</p>';
                    html += '       </div>';
                    html += '   </div>';
                    html += '   <div class="actions" style="width: 100%; text-align: center;">';
                    html += '       <div class="ui message button deny" style="background: white; border: 1px solid #6e6e6e; width: 25%;">';
                    html += '           CANCEL';
                    html += '       </div>';
                    html += '       <div id="genericConfirmActionOk" class="ui message button ok" style="color: white; width: 25%;">';
                    html += '           YES';
                    html += '       </div>';
                    html += '   </div>';
                    html += '</div>';

                    return html;
                },
                scope: {
                    ngModel: '=ngModel',
                    ngMsg: '=ngMsg',
                    ngShow: '=ngShow',
                    ngType: '=ngType',
                    ngConfirm: '=ngConfirm'
                },
                link: function (scope, element, attrs, ctrl) {

                    var map = {
                        'success': 'success',
                        'info': 'info',
                        'warning': 'warning',
                        'danger': 'error'
                    };

                    var color = {
                        'success': '#83D147',
                        'info': '#17ABEF',
                        'warning': '#F7C000',
                        'danger': '#E23D1C',
                        'confirm': '#83D147',
                        'confirm-info': '#17ABEF',
                        'confirm-warning': '#F7C000',
                        'confirm-danger': '#E23D1C'
                    };

                    scope.close = function () {
                        scope.ngShow = false;
                        scope.show = false;
                    };

                    scope.$watch('ngModel', function (value, oldValue) {
                        if (value !== undefined && value !== null && JSON.stringify(value) !== '{}') {

                            scope.msg = scope.ngModel.msg;
                            scope.show = scope.ngModel.show;
                            scope.type = scope.ngModel.type;
                            scope.style = color[scope.type];
                            
                            if ((scope.ngModel.type.split('-'))[0] === 'confirm') {
                                $('#genericConfirmHeader').css("background", color[scope.type]);
                                $('#genericConfirmActionOk').css("background", color[scope.type]);

                                $('#genericConfirm').modal({
                                    onApprove: function () {
                                        scope.ngConfirm(scope.ngModel);
                                    }
                                }).modal('show');
                                $('#genericAlert').hide();
                            }
                        }
                    });

                    scope.$watch('ngMsg', function (value) {
                        if (value) {
                            scope.msg = value;
                        }
                    });

                    scope.$watch('ngShow', function (value) {
                        if (value != undefined) {
                            scope.show = value;
                        }
                    });

                    scope.$watch('ngType', function (value) {
                        if (map.hasOwnProperty(value)) {
                            scope.style = map[value];
                        }
                    });

                }
            };
        }
    ]);
})(window, document);
