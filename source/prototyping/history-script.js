
window.addEventListener('DOMContentLoaded', init);

function init() {
	const history = document.querySelector(".historyWrapper");
	/**
 	* A reference to the button to go back to the menu
 	* @type {HTMLElement | null}
 	*/
	const backButton = document.querySelector(".backButton");
	const tempAddButton = document.querySelector(".tempAddButton");
	const tempClearButton = document.querySelector(".tempClearButton");
	
	backButton.addEventListener("click", backToMenu);
	/**
 	* A reference to the button for adding fortune to local storage and displaying for testing
	* Will be removed in final product
 	* @type {HTMLElement | null}
 	*/
	tempAddButton.addEventListener("click", tempAddFortuneToTest);
	/**
 	* A reference to the button clearing the saved fortunes
	* May be removed later, but could be useful too
 	* @type {HTMLElement | null}
 	*/
	tempClearButton.addEventListener("click", tempClearFortunes);

	displayFortunes();

	// currently sends to menu prototype page
	function backToMenu() {
		location.href = "https://cse110-sp23-group4.github.io/cse110-sp23-group4/source/prototyping/menu-prototype";
	}

	function tempClearFortunes() {
		localStorage.removeItem("fortunes");
		displayFortunes();
	}

	function tempAddFortuneToTest() {
		addFortune("fortune text", "category", new Date());
		displayFortunes();
	}


	window.addEventListener('storage', displayFortunes);

	/**
 	* This function adds a fortune to localStorage
 	* @param {string} - the text of the fortune
 	* @param {string} - the category of the fortune
	* @param {string} - a Date object
 	*/
	function addFortune(fortune, category, date) {
		let fortunes = getFortunes();
		fortunes.push([fortune,category,date.toLocaleDateString()]);
		localStorage.setItem('fortunes', JSON.stringify(fortunes));
	}
	
	/**
 	* This function retrieves fortunes from localStorage and returns an array
	* of fortunes. If nothing in local storage, it returns an empty array.
 	* @param {string} - the text of the fortune
 	* @param {string} - the category of the fortune
 	* @returns {Array<Object>} - an array of fortunes, each with fortune, category,
	* and date elements
 	*/
	function getFortunes() {
		if(localStorage.getItem('fortunes') == null) {
			return [];
		}else {
			let arr = [];
			let list = JSON.parse(localStorage.getItem('fortunes'));
			for(let i in list) {
				arr.push(list[i]);
			}
			return arr;
		}
	}
	
	/**
 	* This function uses getFortunes and displays the fortunes it
	* gets on the page with a div element for each fortune. Every
	* time this function is called, it clears everything in the 
	* element refered to by history and re-adds each fortuen to the
	* page.
 	*/
	function displayFortunes() {
		let arr = getFortunes();
		history.innerHTML = '';
		for(let i = 0; i<arr.length; i++) {
			let fortuneInList = document.createElement('div');
			fortuneInList.classList.add("fortune");

			let fortuneText = document.createElement("h3");
			fortuneText.innerHTML = arr[i][0];
			fortuneText.classList.add("fortuneText");

			let fortuneCategory = document.createElement("h3");
			fortuneCategory.innerHTML = arr[i][1];
			fortuneCategory.classList.add("fortuneCategory");

			let fortuneDate = document.createElement("h3");
			fortuneDate.innerHTML = arr[i][2];
			fortuneDate.classList.add("fortuneDate");

			fortuneInList.appendChild(fortuneText);
			fortuneInList.appendChild(fortuneCategory);
			fortuneInList.appendChild(fortuneDate);

			history.appendChild(fortuneInList);
		}
	}
}
