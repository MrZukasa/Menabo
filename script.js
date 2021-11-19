$(".cella").click(function () {     

    if ($(this).hasClass("bg-success")==true) {
        $(this).removeClass("bg-success");
        $(this).addClass("bg-dark");
    } else {
        $(this).removeClass("bg-dark");
        $(this).addClass("bg-success");
    }

});

$("#scrivi1").click(function () {

    $(".cella").each(function () {
        var temp=$(this).attr("id");        
        if (($(this).hasClass("bg-dark")==true)&&(temp.indexOf("sx")!=-1)) {
            console.log($(this).attr("id"));
        }        
    })

});