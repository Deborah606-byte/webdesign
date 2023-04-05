document.addEventListener("DOMContentLoaded", function() {
  const countryList = document.getElementById('country-info');
  const listName = document.getElementById('displayList');

  function countryListName(list){
      const countryNames = list.map(country => country.name.common);
      listName.innerHTML = '';
      countryNames.forEach(name => {
        // const select = document.createElement('select');
        const option = document.createElement('option');
        option.value = name;
        option.text = name;
        listName.appendChild(option);
      });
  }

  listName.addEventListener("click", (e) => {
    countryList.value = e.target.value;
  })

  countryList.addEventListener("keyup", (e) => {
      e.preventDefault();
      
      listName.classList.add("hidden");
      
      const searchTerm = e.target.value.toLowerCase().trim();

      if(searchTerm === ""){
        listName.classList.add("hidden");
        return null;
      }
      
      const url = 'https://restcountries.com/v3.1/all';
    
      fetch(url)
      .then(response => response.json())
      .then(data => {
        const filteredData = data.filter(country => {
          return country.name.common.toLowerCase().startsWith(searchTerm);
        });

        if(!(filteredData?.length > 0)){
          listName.classList.add("hidden");
          return null;
        }

        listName.classList.remove("hidden");
        countryListName(filteredData);
      });
  });
});
