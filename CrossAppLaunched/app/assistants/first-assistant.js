function FirstAssistant(args) {
	this.launchParams = {}
	if (launchParams.title) {
		this.launchParams = args;
		this.str1 = 'This app was launched by another app!'
		this.str2 = 'Info passed from launcher app'
	}
	else {
		this.launchParams.title = Mojo.appInfo.title;
		this.launchParams.id = Mojo.appInfo.id;
		this.launchParams.version = Mojo.appInfo.version;
		this.str1 = 'This app was launched from the launcher'
		this.str2 = 'Mojo info for app B'
	}
}

FirstAssistant.prototype.setup = function() {
	/* this function is for setup tasks that have to happen when the scene is first created */
		
	/* use Mojo.View.render to render view templates and add them to the scene, if needed */
	
	/* setup widgets here */
	
	/* update the app info using values from our app */
	this.controller.get("updateArea1").update(this.str1);
	this.controller.get("updateArea2").update(this.str2);
	this.controller.get("app-title").update(this.launchParams.title);
	this.controller.get("app-id").update(this.launchParams.id);
	this.controller.get("app-version").update(this.launchParams.version);
	
	/* add event handlers to listen to events from widgets */
};

FirstAssistant.prototype.activate = function(event) {
	/* put in event handlers here that should only be in effect when this scene is active. For
	   example, key handlers that are observing the document */
};

FirstAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
};

FirstAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
};
