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
});