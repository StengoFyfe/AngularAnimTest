//Globals
   // Master Context
   // Central Singleton for controlling the UI 
 app.factory('MasterContext', function($rootScope, $location, $translate) {
	  var settingShown = false;
	  
		  return {
		  MasterContext : function() {
			  this.showWait = showWait;
		  },
		  isSettingShown : function() {
			  return settingShown;  
		  },
		  setSettingShown : function( shown ) {
			  settingShown = shown;
			  if( shown )
				  $location.path("/settings");
			  else
				  $location.path("/home");
		  },
		  toggleSetting : function() {
			if( settingShown == false )
				settingShown = true;
			else
				settingShown = false;
		  },
		  onSweep : function( dir ) {
			// detect the correct animation Direction
			switch( dir ) {
			case 1:
				sweepAnimation = 'view-animate-l';
				break;
			case 0:
				sweepAnimation = 'view-animate-b';
				break;

			case -1:
				sweepAnimation = 'view-animate-r';
				break;
				
			default:
				sweepAnimation = null;
				break;
			}
		  },
		  getSweepAnimation : function() {
			  return sweepAnimation;
		  },
		  onSwipe : function( direction ) {
				if( direction == 1 ) {
					this.onSweep(1);
					this.setSettingShown( true );
				
				}
				if( direction == -1  ) {
					this.onSweep(-1);
					this.setSettingShown(false);
				}
			  },		  

	  };
	
	} );
