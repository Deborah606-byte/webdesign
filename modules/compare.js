    let inputOne = document.getElementById("search_one");
    let inputTwo = document.getElementById("search_two");
    let form = document.getElementById("search_form");

    function showList(list){
        return list.map(({Cost,Value})=>`Item:${Cost} Cost:${Value}`);
    }

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

        result.innerHTML =`
            <div class="main">
                <div class="country_search_left">
                    <h2 class="text-heading text-3xl font-bold">${cityOne[2]}</h2>
                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Country:</h4>
                            <span>${cityOne[1]}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Cost of Living(Per Month):</h4>
                            <span>${cityOne[3]}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Currency Used:</h4>
                            <span>${cityOne[4]}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <span>${cityOne[5]}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Restaurant Prices:</h4>
                            <span>${showList(cityOne[8])}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Market Prices:</h4>
                            <span>${showList(cityOne[9])}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Transportation Prices:</h4>
                            <span>${showList(cityOne[10])}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Utilities Per Month Prices:</h4>
                            <span>${showList(cityOne[11])}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Sports and Leisure Prices:</h4>
                            <span>${showList(cityOne[12])}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Salaries and Financing Prices:</h4>
                            <span>${showList(cityOne[13])}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Childcare Prices:</h4>
                            <span>${showList(cityOne[14])}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Clothing and Shoes Prices:</h4>
                            <span>${showList(cityOne[15])}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Rent Per Month Prices:</h4>
                            <span>${showList(cityOne[16])}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Buy Apartment Prices:</h4>
                            <span>${showList(cityOne[17])}</span>
                        </div>
                    </div>
                </div>

                <div class="country_search_right">
                    <h2 class="text-heading text-3xl font-bold">${cityTwo[2]}</h2>
                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Country:</h4>
                            <span>${cityTwo[1]}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Cost of Living(Per Month):</h4>
                            <span>${cityTwo[3]}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Currency Used:</h4>
                            <span>${cityTwo[4]}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <span>${cityTwo[5]}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Restaurant Prices:</h4>
                            <span>${showList(cityTwo[8])}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Market Prices:</h4>
                            <span>${showList(cityTwo[9])}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Transportation Prices:</h4>
                            <span>${showList(cityTwo[10])}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Utilities Per Month Prices:</h4>
                            <span>${showList(cityTwo[11])}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Sports and Leisure Prices:</h4>
                            <span>${showList(cityTwo[12])}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Salaries and Financing Prices:</h4>
                            <span>${showList(cityTwo[13])}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Childcare Prices:</h4>
                            <span>${showList(cityTwo[14])}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Clothing and Shoes Prices:</h4>
                            <span>${showList(cityTwo[15])}</span>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Rent Per Month Prices:</h4>
                            <span>${showList(cityTwo[16])}</span>
                        </div>
                    </div>

                </div>
                

            </div>
            `;

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