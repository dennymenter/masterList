function getFeatures () {


	const feature = document.getElementById("featureTitle");


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
		  query myFeatures {
			features {
			  pageSlug
			  title
			  id
			  featureDesc {
				html
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

		const featureLinks  = res.data;

        featureLinks.features.forEach(element => {
			
			feature.innerHTML +=
			`
				<a href="features/${element.pageSlug}.html" target = "_new">${element.title}</a><br>
			`			
			console.log(feature.innerHTML);
	    })
		
	})
}