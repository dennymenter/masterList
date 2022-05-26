function getHomeElements () {

	var mainTitle = document.getElementById("title");
	var subtitle = document.getElementById("subtitle");
	document.body.style.backgroundRepeat= "no-repeat";
	// document.body.style.backgroundSize= "contain";




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
		  query homePage {
			homePages {
			  title
			  subtitle
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
		// console.log(home.homePages[0].title);
		// console.log(home.homePages[0].subtitle);
		// console.log(home.homePages[0].backgroundImage.url);

		mainTitle.innerText = home.homePages[0].title;
		subtitle.innerText = home.homePages[0].subtitle;
		document.body.style.backgroundImage = "url('" + home.homePages[0].
		backgroundImage.url + "')";
		})

	}