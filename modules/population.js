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
        // listName.add(option);
        // select.appendChild(option);
        listName.appendChild(option);
      });
  }
  countryList.addEventListener("keyup", (e) =>{
      e.preventDefault();
      
      displayList.classList.add("hidden");
      
      const searchTerm = e.target.value.toLowerCase().trim();
      
      const url = 'https://restcountries.com/v3.1/all';
    
      fetch(url)
      .then(response => response.json())
      .then(data => {
        const filteredData = data.filter(country => {
          return country.name.common.toLowerCase().startsWith(searchTerm);
        });
        displayList.classList.remove("hidden");
        countryListName(filteredData);
      });
  });
  countryList.value = listName.value;
  
});
