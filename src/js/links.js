const links = `
{
	"nav-links": [
	  {
		"desc": "HOME",
		"link": "www.mainmenu.com",
		"submenu": [
		]
	  },
	  {
		"desc": "NOT HOME!",
		"link": "#",
		"submenu": [
		  {
			"desc": "sub menu 1",
			"link": "www.sub1.com"
		  },
		  {
			"desc": "sub menu 2",
			"link": "www.sub2.com"
		  }
		]
	  }
	]
  }
`


function createlinks () {

    var linkHTML = document.getElementById("linkList");
	var menuList = document.getElementById("mainmenuset");
	var returnHTML = "";
	var navbarCounter = 1;

    const linkList = JSON.parse(links);

	const liItemStart = `
	<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	`
	const liItemEnd = `
		</a>
	`



	// loop through menus
	if (linkList["nav-links"].length > 0) {

		linkList["nav-links"].forEach(element => {
			
			console.log(element.desc);
			console.log(element.link);
			returnHTML += liItemStart + 
				element.desc + liItemEnd;

				// check if there are submenus
			if (element.submenu.length > 0) {

				element.submenu.forEach(element => {
					console.log(element.desc);
					console.log(element.link);					
				});
			}	
		});

			} else {
				console.log("error - no menu items available")
			}

			menuList.innerHTML = returnHTML;
	}


