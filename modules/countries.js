const search = document.querySelector("#search")
const countries = document.querySelector(".countries");
const dropList = document.querySelector(".dropDown");

let countryData = [];

async function getCountry(){
  const url = await fetch("https://restcountries.com/v3.1/all");
  const res = await url.json();
  countryData = res;
  console.log(countryData);
  showCountry(countryData.slice(0,8));
}

getCountry();

function showCountry(data){
  countries.innerHTML = "";
  data.forEach((country) => {
    countries.innerHTML += `
      <div class="continent">
        <div class="country-img">
          <img src="${country.flags.png}" alt="country">
        </div>
        <div class="country-info">
        <h4>${country.name.common}</h4>
        <p><strong>Population: </strong>${country.population}</p>
        <p><strong>Region: </strong>${country.region}</p>
        <p><strong>Capital: </strong>${country.capital}</p>
        </div>
      </div> 
      `;
  });
}

function searchCountry(query){
  const filteredData = countryData.filter((country) => {
    const name = country.name.common.toLowerCase();
    return name.includes(query.toLowerCase());
  });
  showCountry(filteredData);
}

search.addEventListener("input", (event) => {
  const query = event.target.value;
  if (query.trim() !== "") {
    searchCountry(query);
  } else {
    showCountry(countryData.slice(0,8));
  }
});

dropList.addEventListener("change", (event) => {
  const selectedContinent = event.target.value;
  if (selectedContinent === "select continent") {
    showCountry(countryData.slice(0,8));
  } else {
    const filteredData = countryData.filter((country) => {
      return country.region === selectedContinent;
    });
    showCountry(filteredData);
  }
  console.log(selectedContinent);
});

