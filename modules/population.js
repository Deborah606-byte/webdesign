chartIt(); 
const filterChart = document.getElementById('filterChart');
const chartForm = document.getElementById('filterForm');

chartForm.addEventListener("submit", handleFilter);

let myChart;

async function handleFilter(e){
    myChart.destroy();

    e.preventDefault();
    let selectedFilter = Number(filterChart.value);

    if(selectedFilter === "") return alert("Select a value to filter");

    const data = await getData();

    let filteredDataY = [];

    data.ys.filter((value) => {
        if(selectedFilter === 30){
            if(Number(value) < 30){
                filteredDataY.push(value);
            }
        }else if(selectedFilter === 69){
            if(Number(value) < 69 && Number(value) >= 30){
                filteredDataY.push(value);
            }
        }else if(selectedFilter === 70){
            if(Number(value) >= 70){
                filteredDataY.push(value);
            }
        }

    });

    chartIt();

    async function chartIt(){
        const data = await getData();
        const ctx = document.getElementById('myChartPop');
        // console.log(data.ys);
         myChart = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: data.xs,
              datasets: [{
                label: 'National population distribution (Urban Regions)',
                data: filteredDataY,
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
                                return value + '%';
                            }
                        }
                    }
                }
            }
          });
        }
}


async function chartIt(){
const data = await getData();
const ctx = document.getElementById('myChartPop');
// console.log(data.ys);
  myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.xs,
      datasets: [{
        label: 'National population distribution (Urban Regions)',
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
                        return value + '%';
                    }
                }
            }
        }
    }
  });
}

async function getData(){
    const xs = [];
	  const ys = [];

	const response = await fetch('../data/DP_LIVE_27032023110615831.csv');
	const data = await response.text();

	const table = data.split('\n').slice(1);
	table.forEach( row => {
		const column = row.split(',');
		const location = column[0];
        xs.push(location);
		const value = column[6];
        ys.push(value);
		// console.log(table);
	});
    return{xs, ys};
}
