getData();
async function getData() {
    var subRegion = [], subRegionNumber = []
  
    fetch("https://restcountries.com/v3.1/all")
      .then((response)=>{
        return response.json()
      })
      .then((data)=>{
        let subregions = {};
  
        data.forEach(element => {
          const subregion = element.subregion || 'Unknown'; // set default value to 'Unknown' if subregion is undefined
          if(subregions[subregion]){
            subregions[subregion] = subregions[subregion] + 1;
          }
          else{
            subregions[subregion] = 1;
          }
        });
  
        subRegion = Object.keys(subregions);
        subRegionNumber = Object.values(subregions);
  
        var ctx = document.getElementById("myChart").getContext("2d");
  
        var chart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: subRegion,
            datasets: [{
              // barThickness: 10,
              label: "Number of Countries",
              data: subRegionNumber,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
              ],
              borderWidth: 2,
              hoverBackgroundColor: "rgba(255,99,132,0.4)",
              hoverBorderColor: "rgba(255,99,132,1)",
            }]
          },
          options:{
            scales: {
              y: {
                stacked: true,
                grid: {
                  display: true,
                  color: "rgba(255,99,132,0.2)"
                }
              },
              x: {
                grid: {
                  display: false
                }
              }
          }
          },
            
        });
      })
      .catch((e) =>{
        console.log(e)
      })


  }
  