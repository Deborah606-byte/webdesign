chartIt(); 

async function chartIt(){
const data = await getData();
const ctx = document.getElementById('myChartPop');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.xs,
      datasets: [{
        label: 'Wealth Distribution',
        data: data.ys,
		fill: false,
		backgroundColor: 'rgba(255, 90, 132, 0.2)',
		borderColor: 'rgba(255, 90, 132, 1)',
        borderWidth: 1
      }]
    },
    // options: {
    //     scales: {
    //         y: {
    //             ticks: {
    //                 // Include a degree sign in the ticks
    //                 callback: function(value, index, ticks) {
    //                     return value + '\u00B0';
    //                 }
    //             }
    //         }
    //     }
    // }
  });
}

async function getData(){
    const xs = [];
  	const ys = [];

	const response = await fetch('../data/WEALTH_27032023104704851.csv');
   
	const data = await response.text();

	const table = data.split('\n').slice(1);
	table.forEach( row => {
		const column = row.split(',');
		const country = column[0];
        xs.push(country);
		const value = column[8];
        ys.push(value);
		console.log(table);
	});
    return{xs, ys};
}
