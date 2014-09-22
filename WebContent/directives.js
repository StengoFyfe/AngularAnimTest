/*
// defines the upmost banner including the home an the settings button
app.directive('headerhome', function(){
  return {
    restrict: 'E',
    scope: {
      value: '='
    },
    template: 
    '<form ng-controller="SelectionCtrl" class="top_header_back">'+
    '<table style="width: 100%"  >'+
  	'<tr> '+
  		'<td align="left" style="width: 10%" class="top_header" ng_controller="ToggleButtonGeneric" > '+		  	
  			'<input class="icon32" ng-show="masterContext.isLoggedIn()" ng-mouseover="over(true)" ng-mouseout="over(false)" type="image" ng-src="{{imgBtnUrl(\'images/home\', \'png\')}}" ng-click="masterContext.onSweep(0);masterContext.setCurrShownScreen(1000);"/>'+ 
  		'</td>  '+
  		'<td class="top_header">'+
		  	 '<span>{{value}}</span> '+
		'</td>'+
  		'<td align="right" style="width: 10%" class="top_header" ng_controller="ToggleButtonGeneric" > '+		  	
			'<input class="icon32" ng-show="masterContext.isLoggedIn()" ng-mouseover="over(true)" ng-mouseout="over(false)" type="image" ng-src="{{imgBtnUrl(\'images/settings\', \'png\')}}" ng-click="masterContext.onSweep(0);masterContext.setCurrShownScreen(1010);"/>'+ 
		'</td>  '+		
	'</tr> '+
  '</table>'+
  '</form> '

  };
});

*/
