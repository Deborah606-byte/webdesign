let inputOne = document.getElementById("search_one").value;
let inputTwo = document.getElementById("search_two").value;
let form = document.getElementById("search_form");

let inputOneCountry = inputOne;
// let inputOneCity = inputOne.value.split("/")[0];

let inputTwoCountry = inputTwo;
// let inputTwoCity = inputTwo.value.split("/")[0];

form.addEventListener("submit",compareCities)

function compareCities(e){
    e.preventDefault();
    console.log(inputOneCountry, inputTwoCountry);
}
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd2260a13c1msh84244b3a1f0f4b9p135905jsn7f3483f03bac',
// 		'X-RapidAPI-Host': 'cities-cost-of-living-and-average-prices-api.p.rapidapi.com'
// 	}
// };

// fetch('https://cities-cost-of-living-and-average-prices-api.p.rapidapi.com/cost_of_living?country=united-states&city=austin-tx', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));