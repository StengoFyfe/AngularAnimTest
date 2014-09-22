// ToggleButtonGeneric Controller ... Map the mouseOver Events to the function "over" and provide the image-base-info with "imgBtnurl"
app.controller('ToggleButtonGeneric', function($scope, SelectionContext, MasterContext) {
	$scope.selectionContext = SelectionContext;
	$scope.masterContext = MasterContext;
	$scope.menuClass = 'MenuItemOff';
	$scope.btnPressed = false;
	$scope.mouseOver = false;
	
	$scope.over = function( isOver ) {
		if( isOver )
			$scope.mouseOver = true;
		else
			$scope.mouseOver = false;
		
	};
	$scope.imgBtnUrl = function( baseurl, extension ) {
		if($scope.mouseOver) {
			return baseurl+'_sel'+'.'+extension;
		}
		else {
			return baseurl+'.'+extension;
			
		}
	};

});

app.controller('MasterController', function($scope, MasterContext ){
	    $scope.masterContext = MasterContext;
	    
	    
		$scope.showWaitDlg = function() {
			ray.ajax();
			//$scope.masterContext.setShowWait(true);

		  };
		$scope.hideWaitDlg = function() {
			//$scope.masterContext.setShowWait(false);
			ray.endit();
		  };

  } );
app.controller('LoginController', function($scope ){

    $scope.LoginInfo = function() {
    	return {
    		user : "",
    		pwd  : ""
    		
    	};
    };

 } );

