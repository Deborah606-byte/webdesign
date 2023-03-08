$(document).ready(function(){
    $('.rate_country').click((event) => {
        let country = event.target.parentNode.id;
        
        switch (event.target.classList[3]) {
            case "s1":
                    $(`#${country} .fa-star`).css("color", "black");
                    $(`#${country} .s1`).css("color","#ffd700");
                break;
            case "s2":
                    $(`#${country} .fa-star`).css("color", "black");
                    $(`#${country} .s1, #${country} .s2`).css("color","#ffd700");
                break;
            case "s3":
                    $(`#${country} .fa-star`).css("color", "black");
                    $(`#${country} .s1, #${country} .s2, #${country} .s3`).css("color","#ffd700");
                break;
            case "s4":
                    $(`#${country} .fa-star`).css("color", "black");
                    $(`#${country} .s1, #${country} .s2, #${country} .s3, #${country} .s4`).css("color","#ffd700");
                break;
            case "s5":
                    $(`#${country} .fa-star`).css("color", "black");
                    $(`#${country} .fa-star`).css("color","#ffd700");
                break;
            default:
                $(`#${country} .fa-star`).css("color", "black");
                break;
        }
    })

    // get search input
    // $('#search_form').submit((event) => {
    //     event.preventDefault();
    //     const searchTerm = $('#search').val().toLowerCase();
    //     if(searchTerm !== ""){
    //         // remove any error element
    //         $('#displaySearchError').remove();
    //         $('#displaySearchedCountry').remove();

    //         // write a display message
    //         const textToDisplay = `<p id="displaySearchTerm" class="text-center italic text-white font-medium">You searched for: ${searchTerm}</p>`;
    //         $('.search-box').after(textToDisplay);

    //         // clear the input
    //         $('#search').val("");

    //         // fetch country from api
    //         fetch(`https://restcountries.com/v3.1/name/${searchTerm}`)
    //         .then(res => res.json() )
    //         .then(data => {
    //             if(data.status === 404){
    //                  // write an error message to display
    //                 const textToDisplay = `<p id="displaySearchError" class="py-1 text-center italic text-red-600 font-medium">Country ${data.message}</p>`;
    //                 $('#displaySearchTerm').append(textToDisplay);

    //                 // hide error element after 3 seconds
    //                 setTimeout(() => {
    //                     $('#displaySearchError').remove();
    //                 }, 3000);
    //             }else{
    //                 const {capital, name: {official}, continents, population, subregion, flags: {png: flag, alt: description}, coatOfArms: { png: coat_of_arms}} = data[0];

    //                 const countryInfo =`
    //                 <div id="displaySearchedCountry" class="p-10 my-5">
    //                     <h2 class="text-center mx-auto text-3xl font-bold">You searched for: 
    //                         <span class="font-[georgia] text-primary uppercase">
    //                             ${searchTerm}
    //                         </span>
    //                     </h2>

    //                     <div class="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-0 mt-10">
    //                         <div class="flex flex-col gap-y-5">
    //                             <h3 class="text-xl">Name: <span class="font-semibold">${official}</span></h3>
    //                             <p class="text-lg py-1">Capital: <span class="font-semibold">${capital[0]}</span></p>
    //                             <p class="text-lg py-1">Continent:  <span class="font-semibold">${continents[0]}</span></p>
    //                             <p class="text-lg py-1">Population:  <span class="font-semibold">${population}</span></p>
    //                             <p class="text-lg py-1">Subregion:  <span class="font-semibold">${subregion}</span></p>
    //                         </div>

    //                         <div class="flex flex-col gap-y-5">
    //                             <div class="flex flex-col gap-y-3">
    //                                 <h3 class="text-green-600 font-semibold uppercase">Flag</h3>
    //                                 <img src="${flag}" alt="The flag of ${official}" class="w-[100px] h-[100px] object-contain aspect-square">
    //                                 <p class="italic">${description}</p>
    //                             </div>

    //                             <div class="flex flex-col gap-y-3">
    //                                 <h3 class="text-green-600 font-semibold uppercase">Coat Of Arms</h3>
    //                                 <img src="${coat_of_arms}" alt="he coat of arms of ${official}" class="w-[100px] h-[100px] object-contain aspect-square">
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 `

    //                 // append country infor to the dom
    //                 $('#compare-countries').before(countryInfo);

    //                 // scroll to country section
    //                 $('html, body').animate({
    //                     scrollTop: $("#displaySearchedCountry").offset().top
    //                 }, 2000);
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })

    //         // hide search success message after 4 seconds
    //         setTimeout(() => {
    //             $('#displaySearchTerm').remove();
    //         }, 4000);
    //     }else{
    //         // remove any previous success element
    //         $('#displaySearchTerm').remove();

    //         // write an error message to display
    //         const textToDisplay = `<p id="displaySearchError" class="text-center italic text-primary font-medium">Please enter a country to search</p>`;
    //         $('.search-box').after(textToDisplay);

    //         // hide error element after 3 seconds
    //         setTimeout(() => {
    //             $('#displaySearchError').remove();
    //         }, 3000);
    //     }
        
    // })
});