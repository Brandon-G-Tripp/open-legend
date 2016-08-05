System.register(["angular","lodash","./boons.json!"],function(_export){var angular,boons,_createClass,_classCallCheck,BoonsListCtrl;return{setters:[function(_angular){angular=_angular["default"]},function(_lodash){},function(_boonsJson){boons=_boonsJson["default"]}],execute:function(){"use strict";_createClass=function(){function defineProperties(target,props){for(var key in props){var prop=props[key];prop.configurable=!0,prop.value&&(prop.writable=!0)}Object.defineProperties(target,props)}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_classCallCheck=function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")},BoonsListCtrl=function(){function BoonsListCtrl($scope,$http,$filter,$sce,$mdMedia,Config,Link){_classCallCheck(this,BoonsListCtrl),this.$scope=$scope,this.$scope.$mdMedia=$mdMedia,this.Config=Config,this.Link=Link,this.items=boons||[],this.attributes=["All","Entropy","Divination","Alteration","Creation","Illusion","Movement","Abjuration","Fortitude","Energy"],this.selectedPowers=[],this.selectedAttributes=["All"],this.searchQuery="",this.attackAttrSearchText="",this.powerLevelValue=0,this.powerAboveBelow="or Greater"}return _createClass(BoonsListCtrl,{updateSearchTextModel:{value:function(val){this.attackAttrSearchText=val}},attackAttrSearchFilter:{value:function(){var _this=this;return function(item){return""===_this.attackAttrSearchText?!0:item.toLowerCase().match(_this.attackAttrSearchText.toLowerCase())}.bind(this)}},textSearchFilter:{value:function(){var _this=this;return function(thisPower){var item=thisPower;if(""===_this.searchQuery&&_.includes(_this.selectedAttributes,"All"))return!0;var regex=new RegExp(_this.searchQuery,"gi"),show=!1,inAttackFilter=!0;if(show=item.name.match(regex)||item.description.match(regex)||item.effect.match(regex),_this.selectedAttributes.length>0){var inAttackFilter=!1;if(-1!==_this.selectedAttributes.indexOf("All"))inAttackFilter=!0;else var searchAttrs=angular.copy(_this.selectedAttributes),inAttackFilter=_.intersection(item.attribute,searchAttrs).length>0}return show&&inAttackFilter}}},powerLevelFilter:{value:function(){var _this=this;return function(thisPower){for(var item=thisPower,powerAbove="or Greater"===_this.powerAboveBelow,include=!1,i=0;i<=item.power.length;i++){if(powerAbove&&item.power[i]>_this.powerLevelValue){include=!0;break}if(!powerAbove&&item.power[i]<=_this.powerLevelValue){include=!0;break}}return include}}}}),BoonsListCtrl}(),_export("default",BoonsListCtrl)}}});