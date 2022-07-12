export function logMe (message) {
		const logger = document.getElementById("logger");
			logger.innerHTML += "custom log >>>>>  <pre>" + message + "</pre><br>";
}

