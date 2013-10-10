<script type="text/javascript">
  (function() {
	var href = location.href,
		isDebugLoader = /[&?]debugLoader=1/.test(href),
		modules = [
			"js/loaderConfig",	// Our loader config
			"combo/loaderExt",  // The aggregator loader extension code
			"dojo/dojo"			// The loader
		],
		params = {
			expandRequire: 1,
			//exportNames: 1,
			required: "js/bootstrap" // required module that will be loaded
											// along with all of it's nested dependencies
		}, 
		features = {
			"dojo-error-api" : isDebugLoader,
			"dojo-trace-api" : isDebugLoader,
			"host-rhino" : 0,
			"host-node" : 0,
			"dojo-sniff" : 0,
			"dojo-test-sniff" : 0,
			"dojo-undef-api" : 1,
			"host-browser" : 1,
			"config-deferredInstrumentation" : 1
		},
		i = 0;
	
	// copy selected params from URL
	 for (var s in {optimize:0,expandRequire:0,showFilenames:0,noCache:0,exportNames:0,debugLoader:0}) {
		var regex = new RegExp("[&?]"+s+"=([^&]*)","i");
		var result = regex.exec(href) || [];
		if (result.length > 1) {
			params[s] = result[1];
		}
	} 
	// write out the script tag to use the aggregator to load our modules
	document.write('<script src="../sbt.sample.web/jaggr?modules=');
	for (var s in modules) {
		document.write((i++ ? "," : "") + encodeURIComponent(modules[s]));
	}
	 for (var s in params) {
		document.write("&" + s + "=" + encodeURIComponent(params[s]));
	} 
	i = 0;
	document.write("&has=");
	for (var s in features) {
		document.write((i++ ? ";" : "") + (features[s] ? "" : "!") + s);
	}
	document.write('"><'+'/script>');
})(); </script>

<link rel="stylesheet" type="text/css" title="Style" href="/sbt.dojo180/dojo/resources/dojo.css">
<link rel="stylesheet" type="text/css" title="Style" href="/sbt.dojo180/dijit/themes/claro/claro.css">
<link rel="stylesheet" type="text/css" title="Style" href="/sbt.dojo180/dojox/grid/enhanced/resources/claro/EnhancedGrid.css">
<link rel="stylesheet" type="text/css" title="Style" href="/sbt.dojo180/dojox/grid/enhanced/resources/EnhancedGrid_rtl.css">
