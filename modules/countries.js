const countries = document.querySelector(".countries");

async function getCountry(){
  const url = await fetch("https://restcountries.com/v3.1/all");
  const res = await url.json();
  console.log(res);
  showCountry(res)
}

getCountry();

function showCountry(data){
  countries.classList.remove('hidden');
  data.slice(0,6).map((country) => {
    countries.innerHTML += `
      <div class="continent">
        <div class="country-img">
          <img src="${country.flags.png}" alt="country">
        </div>
        <div class="country-info">
        <h4>${}</h4>
        <p><strong>Population: </strong>${country.population}</p>
        <p><strong>Region: </strong>${country.region}</p>
        <p><strong>Capital: </strong>${country.capital}</p>
        </div>
      </div> 
      `;
  });

}