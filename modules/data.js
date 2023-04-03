async function chartIt(){
    await getData()

    var ctx = document.getElementById('myChart');
    var chart =  new Chart(ctx, {
        type: 'bar',
        data: {
        labels: region,
        datasets: [{
            label: '# of Votes',
            data: regionNumber,
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
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });

}

chartIt();

//fetch data from rest api
async function getData(){
    var subRegion = [], subRegionNumber = []
    
fetch("https://restcountries.com/v3.1/all")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    let subregions = {};

    data.forEach(element => {
        if(subregions[element.subregion]){
            subregions[element.subregion] = subregions[element.subregion] + 1;
            console.log(0)
        }

        else{
            subregions[element.subregion] = 1;
        }
    });
    
        console.log(subregions);
        const column = row.split(',');
        const region = column[0];
        region.push(subRegion);
		const regionNumber= column[1];
        regionNumber.push(subRegionNumber);


})
.catch((e) =>{
    console.log(e)
})
}
