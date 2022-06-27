function getCards () {

    const footer = document.getElementById("footer");

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
		  query cards {
            cards {
              cardTitle
              cardLink
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

		const cards  = res.data;

        cards.cards.forEach(element => {
            // console.log(element.cardTitle);
            footer.innerHTML += `<a href="http://${element.cardLink}" target="_blank"><div class="footer ">${element.cardTitle}</div></a>`;
        });
	
    })
	}