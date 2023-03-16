    let inputOne = document.getElementById("search_one");
    let inputTwo = document.getElementById("search_two");
    let form = document.getElementById("search_form");


    form.addEventListener("submit", async (e) => {
        // prevent form from submitting and refreshing page on submission
        e.preventDefault();

        //extract city and country info from input fields
        const inputOneCountry = inputOne.value.toLowerCase().split("/")[1];
        const inputOneCity = inputOne.value.toLowerCase().split("/")[0];
        const inputTwoCountry = inputTwo.value.toLowerCase().split("/")[1];
        const inputTwoCity= inputTwo.value.toLowerCase().split("/")[0];

        // using the fetch function to retrieve data from the two input fields
        let cityOneData = await fetchCityData(inputOneCity, inputOneCountry);
        let cityTwoData = await fetchCityData(inputTwoCity, inputTwoCountry);

        console.log(cityOneData);
        console.log(cityTwoData);

        //extract data into an object
        const cityOne = {...Object.values(cityOneData)};
        const cityTwo = {...Object.values(cityTwoData)};

        console.log(cityOne);
        console.log(cityTwo);

        // clear the input field after getting the data
        inputOne.value = "";
        inputTwo.value = "";

        // do something with the data received
        
    });


    // fetch api function to return city data
    const fetchCityData = async(city, country) => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd2260a13c1msh84244b3a1f0f4b9p135905jsn7f3483f03bac',
                'X-RapidAPI-Host': 'cities-cost-of-living-and-average-prices-api.p.rapidapi.com'
            }
        };

        try {
            const res = await fetch(`https://cities-cost-of-living-and-average-prices-api.p.rapidapi.com/cost_of_living?country=${country}&city=${city}`, options);

            const data = await res.json();
            
            return data;
        } catch (err) {
            console.log(err);
        }
    }