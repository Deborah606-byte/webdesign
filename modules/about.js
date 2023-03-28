const dropList = document.querySelectorAll(".drop-list select");

for(let i = 0; i < dropList.length; i++){
    for(currency_code in country_code){
        console.log(currency_code)
        // let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "MUR" ? "selected" : "";
        // let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        // dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
}