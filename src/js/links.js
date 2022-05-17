function getCMSLinks () {

	var menuList = document.getElementById("mainmenuset");
	let outputHTML = "";

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
		  query getMenus {
			navMenus {
			  id
			  menuTitle
			  navSubmenus {
				id
				link
				submenuTitle
			  }
			link
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

		const  menus  = res.data;
		console.log(menus);

		outputHTML += '<div id="mainmenuset">'


		// support two menu levels
		menus.navMenus.forEach(menu => {
			// main titles
			console.log("title = " + menu.menuTitle);
			console.log("LINK = " + menu.link);
			

			if (menu.link) {
				outputHTML += `<a href="${menu.link}" target="_blank"><h2>${menu.menuTitle}</h2></a>`	
			} else {
				outputHTML += `<h2>${menu.menuTitle}</h2>`
			}

			//submenus
			menu.navSubmenus.forEach(submenu => {
				console.log(submenu.submenuTitle);
				console.log(submenu.link);
				outputHTML += `<p><a href="${submenu.link}" target="_blank">${submenu.submenuTitle}</a></p>`
			})


			})

			outputHTML += `</div>`
			menuList.innerHTML = outputHTML;
		})

	};