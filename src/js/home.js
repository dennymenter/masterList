import {getCMSLinks} from "./links.js";
import {getHomeElements} from "./homeLoad.js";
import {logMe} from "./logger.js";


try {
	getCMSLinks();	
} catch (error) {
	console.log("can't get links: " + error);
	logMe("can't get links: " + error);
}

try {
	getHomeElements();	
} catch (error) {
	console.log("can't get home load elememts: " + error);
	logMe ("can't get home load elememts: " + error);
}