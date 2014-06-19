/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
var isUserAgentBlackListed = function(){
	var blacklist = ["PhantomJS", "Googlebot", "Bing", "Yahoo"];

	var userAgent = navigator.userAgent;

	if(!userAgent)
		return false;

	for(var i = 0; i < blacklist.length; i++){
		if(~userAgent.indexOf(blacklist[i]))
			return true;
	}

	return false;
}

_.extend(App, {
	track: function(key, meta){

		if(isUserAgentBlackListed())
			return;

		meta = meta || {};
		
		Deps.autorun(function(computation){
			if(!Meteor.loggingIn()){
				var user = Deps.nonreactive(function(){ return Meteor.user(); });
				var email;

				if(user && user.emails.length > 0)
					email = user.emails[0].address;
				else
					email = 'anonymous';

				_.extend(meta, {
					path: location.pathname,
					email: email
				});

				mixpanel.track(key, meta);
				computation.stop();
			}

		});
	}
});

App.helpers = {
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});

Deps.autorun(function(){
	var path = IronLocation.path();
	App.track('Page Views');
});