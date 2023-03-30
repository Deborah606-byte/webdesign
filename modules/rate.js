
chartIt(); 

async function chartIt(){
const data = await getData();
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.xs,
      datasets: [{
        label: 'Combined Land-Surface Air and Sea-Surface Water Temperature in C\u00B0',
        data: data.ys,
		fill: false,
		backgroundColor: 'rgba(255, 90, 132, 0.2)',
		borderColor: 'rgba(255, 90, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
        scales: {
            y: {
                ticks: {
                    // Include a degree sign in the ticks
                    callback: function(value, index, ticks) {
                        return value + '\u00B0';
                    }
                }
            }
        }
    }
  });
}

// function filterChart(){
//   const filterResult = Chart.data.datasets[0].data.filter(value => value < 1990);
//   console.log(filterResult);
// }
// filterChart();



async function getData(){
	const xs = [];
	const ys = [];

	const response = await fetch('../data/ZonAnn.Ts+dSST.csv');
	const data = await response.text();

	const table = data.split('\n').slice(1);
	table.forEach( row => {
		const column = row.split(',');
		const year = column[0];
		xs.push(year);
		const temp = column[1];
		ys.push(parseFloat(temp) + 14);
		console.log(year, temp);
	});
	return{xs, ys};
}
