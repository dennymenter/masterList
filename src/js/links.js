export function getCMSLinks () {

	let menuList = document.getElementById("navbarSupportedContent");
	let outputHTML = "";
	let dropDownIDCounter = 1;

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
			navMenus (orderBy: menuOrder_ASC) {
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
		// console.log(menus);

		outputHTML = `<ul class="navbar-nav">`

		// support one menu level underneath header
		menus.navMenus.forEach(menu => {

			//are there submenus? If not, just draw a button

			if (!menu.navSubmenus.length == 0) {
				
				//dropdown and sublinks
				outputHTML += `
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown${dropDownIDCounter}" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					${menu.menuTitle}
					</a>	
					<div class="dropdown-menu" aria-labelledby="navbarDropdown${dropDownIDCounter}">
				`
				//draw submenus
				menu.navSubmenus.forEach(submenu => {
					outputHTML += `
						<a class="dropdown-item" href="${submenu.link}" target="_blank">${submenu.submenuTitle}</a>
					`
					})
				dropDownIDCounter ++;

				} else { //button only
					outputHTML += `
					<li class="nav-item active ">
						<a class="nav-link border" href="${menu.link}" target="_blank">${menu.menuTitle}</a>
					</li>
					`
				// finish off LI tag
				outputHTML += "</div></li>"
				}

		})
		outputHTML += `</ul>`;

		menuList.innerHTML = outputHTML;
	})
}