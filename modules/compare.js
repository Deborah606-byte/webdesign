    let inputOne = document.getElementById("search_one");
    let inputTwo = document.getElementById("search_two");
    let form = document.getElementById("search_form");
    let loading = document.getElementById("loader"); 

    //for listing the cost and values in tarbular format
    function showList(list){
        return list?.map(({Cost, Value}) =>
            `<tr>
                <td class="border-2 border-black p-2">${Cost}</td>
                <td class="border-2 border-black p-2">${Value}</td>
            </tr>`
        ).join(" ");
    }

    form.addEventListener("submit", async (e) => {
        // prevent form from submitting and refreshing page on submission
        e.preventDefault();

        //to hide the div and display it when searched
        result.classList.add("hidden");

        loader.classList.remove("hidden");
	    loader.innerHTML = "Loading...";

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

        result.classList.remove("hidden");
        loader.classList.add("hidden");
        result.innerHTML =`
            <div class="main">
                <div class="country_search_left">
                    <h2 class="text-heading text-3xl font-bold heading_city">${cityOne[2]}</h2>
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
                        <div class="data-wrapper flex flex-col items-start">
                            <h4 class="information accordion">
                            <span>Restaurant Prices</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 open">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                                </svg>

                            </h4>

                            <table class="border-collapse border-spacing-2 border-2 border-slate-800 hidden_table">
                                <thead>
                                    <tr>
                                        <th class="text-start border-2 border-slate-800 py-2 w-[100px]">Item</th>
                                        <th class="border-2 border-slate-800 py-2">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${showList(cityOne[8])}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper flex flex-col items-start">
                        <h4 class="information accordion">
                        <span>Market Prices</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 open">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                            </svg>

                        </h4>

                        <table class="border-collapse border-spacing-2 border-2 border-slate-800 hidden_table">
                                <thead>
                                    <tr>
                                        <th class="text-start border-2 border-slate-800 py-2 w-[100px]">Item</th>
                                        <th class="border-2 border-slate-800 py-2">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${showList(cityOne[9])}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper flex flex-col items-start">
                        <h4 class="information accordion">
                        <span>Transportation Prices</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 open">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                            </svg>

                        </h4>

                        <table class="border-collapse border-spacing-2 border-2 border-slate-800 hidden_table">
                                <thead>
                                    <tr>
                                        <th class="text-start border-2 border-slate-800 py-2 w-[100px]">Item</th>
                                        <th class="border-2 border-slate-800 py-2">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${showList(cityOne[10])}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper flex flex-col items-start">
                        <h4 class="information accordion">
                        <span>Utilities Per Month Prices</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 open">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                            </svg>

                        </h4>

                        <table class="border-collapse border-spacing-2 border-2 border-slate-800 hidden_table">
                                <thead>
                                    <tr>
                                        <th class="text-start border-2 border-slate-800 py-2 w-[100px]">Item</th>
                                        <th class="border-2 border-slate-800 py-2">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${showList(cityOne[11])}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper flex flex-col items-start">
                        <h4 class="information accordion">
                        <span>Sports and Leisure Prices</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 open">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                            </svg>

                        </h4>

                        <table class="border-collapse border-spacing-2 border-2 border-slate-800 hidden_table">
                                <thead>
                                  <tr>
                                        <th class="border-2 border-slate-800 py-2 w-[100px]">Item</th>
                                        <th classtext-start ="border-2 border-slate-800 py-2">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${showList(cityOne[12])}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper flex flex-col items-start">
                        <h4 class="information accordion">
                        <span>Salaries and Financing Prices</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 open">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                            </svg>

                        </h4>

                        <table class="border-collapse border-spacing-2 border-2 border-slate-800 hidden_table">
                                <thead>
                                  <tr>
                                        <th class="border-2 border-slate-800 py-2 w-[100px]">Item</th>
                                        <th classtext-start ="border-2 border-slate-800 py-2">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${showList(cityOne[13])}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper flex flex-col items-start">
                        <h4 class="information accordion">
                        <span>Childcare Prices</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 open">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                            </svg>

                        </h4>

                        <table class="border-collapse border-spacing-2 border-2 border-slate-800 hidden_table">
                                <thead>
                                  <tr>
                                        <th class="border-2 border-slate-800 py-2 w-[100px]">Item</th>
                                        <th classtext-start ="border-2 border-slate-800 py-2">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${showList(cityOne[14])}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper flex flex-col items-start">
                        <h4 class="information accordion">
                        <span>Clothing and Shoe Prices</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 open">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                            </svg>

                        </h4>

                        <table class="border-collapse border-spacing-2 border-2 border-slate-800 hidden_table">
                                <thead>
                                  <tr>
                                        <th class="border-2 border-slate-800 py-2 w-[100px]">Item</th>
                                        <th classtext-start ="border-2 border-slate-800 py-2">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${showList(cityOne[15])}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper flex flex-col items-start">
                        <h4 class="information accordion">
                        <span>Rent Per Month Prices</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 open">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                            </svg>

                        </h4>

                        <table class="border-collapse border-spacing-2 border-2 border-slate-800 hidden_table">
                                <thead>
                                  <tr>
                                        <th class="border-2 border-slate-800 py-2 w-[100px]">Item</th>
                                        <th classtext-start ="border-2 border-slate-800 py-2">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${showList(cityOne[16])}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper flex flex-col items-start">
                        <h4 class="information accordion">
                        <span>Buy Apartment Prices</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 open">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                            </svg>

                        </h4>

                        <table class="border-collapse border-spacing-2 border-2 border-slate-800 hidden_table">
                                <thead>
                                  <tr>
                                        <th class="border-2 border-slate-800 py-2 w-[100px]">Item</th>
                                        <th classtext-start ="border-2 border-slate-800 py-2">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${showList(cityOne[17])}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="country_search_right">
                    <h2 class="text-heading text-3xl font-bold heading_city">${cityTwo[2]}</h2>
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
                        <div class="data-wrapper flex flex-col items-start">
                        <h4 class="information accordion">
                        <span>Restaurant Prices</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 open">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                            </svg>

                        </h4>

                        <table class="border-collapse border-spacing-2 border-2 border-slate-800 hidden_table">
                                <thead>
                                  <tr>
                                        <th class="border-2 border-slate-800 py-2 w-[100px]">Item</th>
                                        <th classtext-start ="border-2 border-slate-800 py-2">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${showList(cityTwo[8])}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper flex flex-col items-start">
                        <h4 class="information accordion">
                        <span>Market Prices</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 open">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                            </svg>

                        </h4>

                        <table class="border-collapse border-spacing-2 border-2 border-slate-800 hidden_table">
                                <thead>
                                  <tr>
                                        <th class="border-2 border-slate-800 py-2 w-[100px]">Item</th>
                                        <th classtext-start ="border-2 border-slate-800 py-2">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${showList(cityTwo[9])}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper flex flex-col items-start">
                        <h4 class="information accordion">
                        <span>Transportation Prices</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 open">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                            </svg>

                        </h4>

                        <table class="border-collapse border-spacing-2 border-2 border-slate-800 hidden_table">
                                <thead>
                                  <tr>
                                        <th class="border-2 border-slate-800 py-2 w-[100px]">Item</th>
                                        <th classtext-start ="border-2 border-slate-800 py-2">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${showList(cityTwo[10])}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper flex flex-col items-start">
                        <h4 class="information accordion">
                        <span>Utilities Per Month Prices</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 open">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                            </svg>

                        </h4>

                        <table class="border-collapse border-spacing-2 border-2 border-slate-800 hidden_table">
                                <thead>
                                  <tr>
                                        <th class="border-2 border-slate-800 py-2 w-[100px]">Item</th>
                                        <th classtext-start ="border-2 border-slate-800 py-2">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${showList(cityTwo[11])}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper flex flex-col items-start">
                        <h4 class="information accordion">
                        <span>Sports and Leisure Prices</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 open">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                            </svg>

                        </h4>

                        <table class="border-collapse border-spacing-2 border-2 border-slate-800 hidden_table">
                                <thead>
                                  <tr>
                                        <th class="border-2 border-slate-800 py-2 w-[100px]">Item</th>
                                        <th classtext-start ="border-2 border-slate-800 py-2">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${showList(cityTwo[12])}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper flex flex-col items-start">
                        <h4 class="information accordion">
                        <span>Salaries and Financing Prices</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 open">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                            </svg>

                        </h4>

                        <table class="border-collapse border-spacing-2 border-2 border-slate-800 hidden_table">
                                <thead>
                                  <tr>
                                        <th class="border-2 border-slate-800 py-2 w-[100px]">Item</th>
                                        <th classtext-start ="border-2 border-slate-800 py-2">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${showList(cityTwo[13])}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper flex flex-col items-start">
                        <h4 class="information accordion">
                        <span>Childcare Prices</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 open">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                            </svg>

                        </h4>

                        <table class="border-collapse border-spacing-2 border-2 border-slate-800 hidden_table">
                                <thead>
                                  <tr>
                                        <th class="border-2 border-slate-800 py-2 w-[100px]">Item</th>
                                        <th classtext-start ="border-2 border-slate-800 py-2">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${showList(cityTwo[14])}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper flex flex-col items-start">
                        <h4 class="information accordion">
                        <span>Clothings and Shoes Prices</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 open">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                            </svg>

                        </h4>

                        <table class="border-collapse border-spacing-2 border-2 border-slate-800 hidden_table">
                                <thead>
                                  <tr>
                                        <th class="border-2 border-slate-800 py-2 w-[100px]">Item</th>
                                        <th classtext-start ="border-2 border-slate-800 py-2">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${showList(cityTwo[15])}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper flex flex-col items-start">
                        <h4 class="information accordion">
                        <span>Rent Per Month Prices</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 open">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                            </svg>

                        </h4>

                        <table class="border-collapse border-spacing-2 border-2 border-slate-800 hidden_table">
                                <thead>
                                  <tr>
                                        <th class="border-2 border-slate-800 py-2 w-[100px]">Item</th>
                                        <th classtext-start ="border-2 border-slate-800 py-2">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${showList(cityTwo[16])}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="wrapper">
                        <div class="data-wrapper flex flex-col items-start">
                        <h4 class="information accordion">
                        <span>Buy Apartment Prices</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 open">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                            </svg>

                        </h4>

                        <table class="border-collapse border-spacing-2 border-2 border-slate-800 hidden_table">
                                <thead>
                                  <tr>
                                        <th class="border-2 border-slate-800 py-2 w-[100px]">Item</th>
                                        <th classtext-start ="border-2 border-slate-800 py-2">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${showList(cityTwo[17])}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                

            </div>
            `;
        let tableInfo = document.getElementsByClassName("information");
        let hideTable = document.querySelector(".hidden_table");
        let open = document.querySelector(".open");
        let close = document.querySelector(".close");

        Array.from(tableInfo).forEach((table) => {
            console.log(table);
            table.addEventListener("click", () =>{
                hideTable.classList.toggle("hidden_table");
                if(hideTable.classList.contains("hidden_table")){
                    open.style.display = "block";
                    close.style.display = "none";
                }
                else{
                    open.style.display = "none";
                    close.style.display = "block";
                }
            })
        })

        console.log(cityOne);
        console.log(cityTwo);

        // clear the input field after getting the data
        inputOne.value = "";
        inputTwo.value = "";

        // do something with the data received
        result.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        })
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

            // hide the error after 3 seconds
            setTimeout(() => {
                result.classList.add('hidden');
            }, 3000);
        }
    }