chartIt(); 
const filterChart = document.getElementById('filterChart');
const chartForm = document.getElementById('filterForm');

chartForm.addEventListener("submit, handleFilter");

let myChart;

async function handleFilter(e){
  myChart.destroy();

  e.preventDefault();
  let selectedFilter = Number(filterChart,value);

  if(selectedFilter === "") return alert ("Select a value to filter");

  const data = await getData();

  let filteredDataY = [];

  data.ys.filter((value) => {
    if(selectedFilter == 0){
      if(Number(value) < 0){
        filteredDataY.push(value);
      }
    }else if(selectedFilter == 4.9){
      if(Number(value) < 4.9 && Number(value) >= 0){
          filteredDataY.push(value);
      }
    }else if(selectedFilter == 5){
      if(Number(value) >= 5){
          filteredDataY.push(value);
      }
    }
  })

  chartIt();

  async function chartIt(){
    const data = await getData();
    const ctx = document.getElementById('myChartWealth');
    
      myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.xs,
          datasets: [{
            label: 'Quaterly GDP(Q4 2022)',
            data: data.ys,
            backgroundColor: [
              'rgba(255, 26, 104, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(0, 0, 0, 0.2)'
            ],
            borderColor: [
              'rgba(255, 26, 104, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 1)'
            ],
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
}

async function chartIt(){
const data = await getData();
const ctx = document.getElementById('myChartWealth');

  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.xs,
      datasets: [{
        label: 'Quaterly GDP(Q4 2022)',
        data: data.ys,
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(0, 0, 0, 0.2)'
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(0, 0, 0, 1)'
        ],
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

	const response = await fetch('../data/DP_LIVE_31032023125455270.csv');
   
	const data = await response.text();

	const table = data.split('\n').slice(1);
	table.forEach( row => {
		const column = row.split(',');
		const country = column[0];
        xs.push(country);
		const value = column[6];
        ys.push(value);
		console.log(table);
	});
    return{xs, ys};
}
