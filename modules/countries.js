async function getCountry(){
  const url = await fetch("https://restcountries.com/v3.1/all");
  const res = await url.json();
  console.log(res);
  showCountry(res)

}
getCountry();
function showCountry(data){
  const country = document.createElement("div")
  country.classList.add("continent")
  continent.innerHTML = `
      <div class="country-img">
      <img src="${data.flag}" alt="country">
    </div>
    <div class="country-info">
    <h4>Barbados</h4>
    <p><strong>Population: </strong>${data.population}</p>
    <p><strong>Region: </strong>${data.region}</p>
    <p><strong>Capital: </strong>${data.capital}</p>
    </div>
    `;
}