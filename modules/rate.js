// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd2260a13c1msh84244b3a1f0f4b9p135905jsn7f3483f03bac',
// 		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
// 	}
// };

// fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

getData();

async function getData(){
	const response = await fetch('../data/text.csv');
	const data = await response.text();
	console.log(data);

	const rows = data.split('\n').slice(1);
	rows.forEach( row =>{
		console.log(row);
	});
	console.log(rows);
}
