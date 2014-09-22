'use strict';

// Angular Stuff (only 1.0.0.Master)
var app = angular.module('AngularAnimApp', ['ngCookies', 'ngAnimate', 'ngRoute', 'ngSanitize', 'ngTouch', 'pascalprecht.translate']);



// this object generates a random guid
function guid () {
	  function s4() {
	    return Math.floor((1 + Math.random()) * 0x10000)
	               .toString(16)
	               .substring(1);
	  }
	  return function() {
	    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	           s4() + '-' + s4() + s4() + s4();
	  };
	};
	
  // non modal wait dlg implemenation
	var ray={
			ajax:function(st)
				{
					this.show('load');
				},
			endit:function(st)
			{
				this.hide('load');
			},
			show:function(el)
			{
				this.getID(el).style.display='';
			},
			hide:function(el)
			{
				this.getID(el).style.display='none';
			},
			getID:function(el)
				{
					return document.getElementById(el);
				}
			};
	
	
