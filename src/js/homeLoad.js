import {logMe} from "./logger.js";

export function getHomeElements () {

	let mainTitle = document.getElementById("title");
	let subtitle = document.getElementById("subtitle");
	
	logMe("<hr><br><br><br><b><i>custom logging:</b></i>");

	logMe("starting fetch");

	fetch(
	  'https://api-us-east-1.graphcms.com/v2/cl3aevzvn0kz401yyd0d8cmc9/master',
	  {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		  Accept: 'application/json',
		},
		body: JSON.stringify({
		  query: `
		  query MyQuery {
			homePages {
			  id
			  title
			  siteDescription {
				html
			  }
			  backgroundImage {
				url
			  }
			}
		  }
		  
		`,
		}),
	  }
	)
	  .then((res) => {
		if (!res.ok) return Promise.reject(response);
		return res.json();
	  })
	  .then((res) => {

		const home  = res.data;

		logMe("populating fetched fields");

		mainTitle.innerText = home.homePages[0].title;
		subtitle.innerHTML = home.homePages[0].siteDescription.html;

		})

		const loader = document.getElementById("loader");
		
		try {
			loader.classList.remove("body-background");	
			logMe("loading image removed");
		} catch (error) {
			logMe ("loader element > " + error);
			logMe("background not removed");
		}
				
		
	
	}