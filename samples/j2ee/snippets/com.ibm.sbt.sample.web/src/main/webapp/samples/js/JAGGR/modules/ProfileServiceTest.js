define([], function(){
require(["sbt/dom", "sbt/json", "sbt/connections/ProfileService"],function(dom,json,ProfileService){
    var profileId = "FrankAdams@renovations.com";
    var results = null;
    try {
        var profileService = new ProfileService();
        var promise = profileService.getProfile(profileId);
        promise.then(    
            function(profile){
            	alert("here");
            	console.log("11 " +  profile.getUserid());
            	dom.setText("json", "UsedId of fetched profile - " + profile.getUserid());
            },
            function(error){ 
            	alert("here2");           	
                console.log("22 " + error);
            }
        );
    } catch(error) {
    	alert("here3");  
       console.log("33 " + error);
    }
});
return {};
}

);