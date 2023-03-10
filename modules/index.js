let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () =>{
	let countryName = countryInp.value;
	let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
	console.log(finalUrl);
	fetch(finalUrl).then((response) => response.json()).then((data) => {
		// console.log(data[0]);
		// console.log(data[0].capital[0]);
		// console.log(data[0].flags.svg);
		// console.log(data[0].name.common);
		// console.log(data[0].continents[0]);
		// console.log(Object.keys(data[0].currencies)[0]);
		// console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
		// console.log(Object.values(data[0].languages).toString().split(",").join(","));
		//console.log(data[0].maps.googleMaps);
		// console.log(data[0].latlng[0]);
		// console.log(data[0].timezones[0]);
		console.log(data);

		result.classList.remove("hidden");
		result.innerHTML =`
			<h2>${data[0].name.common}</h2>
			<div class="main">
				<div class="country_search_left">
					<img src="${data[0].flags.svg}" class="flag-img">
					<span>${data[0].maps.googleMaps}</span>
					<div class="data-wrapper">
						<h4>Official Name:</h4>
						<span>${data[0].name.official}</span>
						</div>

					<div class="wrapper">
						<div class="data-wrapper">
						<h4>Latitide:</h4>
						<span>${data[0].latlng[0]}</span>
						</div>
					</div>

					<div class="wrapper">
						<div class="data-wrapper">
						<h4>Longitude:</h4>
						<span>${data[0].latlng[1]}</span>
						</div>
					</div>

					<div class="wrapper">
						<div class="data-wrapper">
						<h4>Timezones:</h4>
						<span>${data[0].timezones[0]}</span>
						</div>
					</div>

				<div class="country_search_right">
					<div class="wrapper">
						<div class="data-wrapper">
						<h4>Capital:</h4>
						<span>${data[0].capital[0]}</span>
						</div>
					</div>

					<div class="wrapper">
						<div class="data-wrapper">
						<h4>Continent:</h4>
						<span>${data[0].continents[0]}</span>
						</div>
					</div>

					<div class="wrapper">
						<div class="data-wrapper">
						<h4>Population:</h4>
						<span>${data[0].population}</span>
						</div>
					</div>

					<div class="wrapper">
						<div class="data-wrapper">
						<h4>Currency:</h4>
						<span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
						</div>
					</div>

					<div class="wrapper">
						<div class="data-wrapper">
						<h4>Common Language:</h4>
						<span>${Object.values(data[0].languages).toString().split(",").join(",")}</span>
						</div>
					</div>
				</div>
			</div>
			`;
	}).catch(() =>{
		if(countryName.length == 0){
			result.innerHTML = `<h3>The input field cannot be empty</h3>`;
		}
		else{
			result.innerHTML = `<h3>Please enter a valid country name</h3>`;
		}
	})
});