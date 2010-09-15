function AppAssistant(appController) {
}
 
AppAssistant.prototype = {
  cleanup: function() {
    //blah blah
  },
  handleLaunch: function(launchParams){
  	
	Mojo.Log.error('****************************************** ' + JSON.stringify(launchParams))
	/*
  	 * Display the splash scene while we get the databases organized  
  	 * and figure out what launched us
  	 */
		var f = function(stageController) {
			stageController.pushScene('first',launchParams)
		};
		Mojo.Controller.appController.createStageWithCallback({name: 'mainStage', lightweight: true}, f);
  	}
  
}
