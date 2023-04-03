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
              barThickness: 30,
              label: "Number of Countries",
              data: subRegionNumber,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 1
            }]
          },
        });
      })
      .catch((e) =>{
        console.log(e)
      })
  }
  
  

//fetch data from rest api
// async function getData(){
//     var subRegion = [], subRegionNumber = []
    
// fetch("https://restcountries.com/v3.1/all")
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     let subregions = {};

//     data.forEach(element => {
//         if(subregions[element.subregion]){
//             subregions[element.subregion] = subregions[element.subregion] + 1;
//             console.log(0)
//         }

//         else{
//             subregions[element.subregion] = 1;
//         }
//     });
    
//         console.log(subregions);
// })
// .catch((e) =>{
//     console.log(e)
// })
// }
