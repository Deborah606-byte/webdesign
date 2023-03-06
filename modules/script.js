$(document).ready(function(){
    // $("#s1").click(function(){
    //     $(".fa-star").css("color", "black");
    //     $("#s1").css("color","#ffd700");
    // });
    // $("#s2").click(function(){
    //     $(".fa-star").css("color", "black");
    //     $("#s1,#s2").css("color","#ffd700");
    // });
    // $("#s3").click(function(){
    //     $(".fa-star").css("color", "black");
    //     $("#s1,#s2,#s3").css("color","#ffd700");
    // });
    // $("#s4").click(function(){
    //     $(".fa-star").css("color", "black");
    //     $("#s1,#s2,#s3,#s4").css("color","#ffd700");
    // });
    // $("#s5").click(function(){
    //     $(".fa-star").css("color", "black");
    //     $(".fa-star").css("color","#ffd700");
    // });

   $(".rate_country").click(event => {

    let parentId = event.target.parentNode.id;
        $(`#${parentId}`).click(function(e){
            e.stopPropagation();
            // console.log(`#${e.target.id}`);
            if (parentId === e.target.parentNode.id) {
                switch (e.target.id) {
                    case "s1":
                        $("#s1").click(function(){
                                $(".fa-star").css("color", "black");
                                $("#s1").css("color","#ffd700");
                            });
                        break;
                    case "s2":
                        $("#s2").click(function(){
                            $(".fa-star").css("color", "black");
                            $("#s1,#s2").css("color","#ffd700");
                        });
                         break;
                    case "s3":
                        $("#s3").click(function(){
                            $(".fa-star").css("color", "black");
                            $("#s1,#s2,#s3").css("color","#ffd700");
                        });
                        break;
                    case "s4":
                        $("#s4").click(function(){
                            $(".fa-star").css("color", "black");
                            $("#s1,#s2,#s3,#s4").css("color","#ffd700");
                        });
                        break;
                    case "s5":
                        $("#s5").click(function(){
                            $(".fa-star").css("color", "black");
                            $(".fa-star").css("color","#ffd700");
                        });
                        break;
    
                    default:
                        break;
                }
            } else {
                     $("#s1,#s2,#s3,#s4,#s5").css("color", "black");
            }
        });
     console.log(event.target.parentNode.id);
   });;

});
