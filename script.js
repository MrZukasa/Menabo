
$(".cella").click(function () {

    if ($(this).hasClass("bg-success")==true) {
        $(this).removeClass("bg-success");
        $(this).addClass("bg-dark");
        $(this).addClass("border-warning");        
    } else {
        $(this).removeClass("bg-dark");
        $(this).addClass("bg-success");
        $(this).removeClass("border-warning");
        $(this).html('');
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

$("#inverti1").click(function () {

    $(".cella").each(function () {
        var temp=$(this).attr("id");
        if (($(this).hasClass("bg-success")==true)&&(temp.indexOf("sx")!=-1)) {
            $(this).removeClass("bg-success");
            $(this).addClass("bg-dark");
            $(this).addClass("border-warning");
        } else if (($(this).hasClass("bg-dark")==true)&&(temp.indexOf("sx")!=-1)) {
            $(this).removeClass("bg-dark");
            $(this).addClass("bg-success");
            $(this).removeClass("border-warning");
        }        
    });

});

$("#inverti2").click(function () {

    $(".cella").each(function () {
        var temp=$(this).attr("id");
        if (($(this).hasClass("bg-success")==true)&&(temp.indexOf("dx")!=-1)) {
            $(this).removeClass("bg-success");
            $(this).addClass("bg-dark");
            $(this).addClass("border-warning");
        } else if (($(this).hasClass("bg-dark")==true)&&(temp.indexOf("dx")!=-1)) {
            $(this).removeClass("bg-dark");
            $(this).addClass("bg-success");
            $(this).removeClass("border-warning");
        }        
    });

});

$("#tutto2").click(function () {

    $(".cella").each(function () {
        var temp=$(this).attr("id");
        if (($(this).hasClass("bg-success")==true)&&(temp.indexOf("dx")!=-1)) {
            $(this).removeClass("bg-success");
            $(this).addClass("bg-dark");
            $(this).addClass("border-warning");
        } else if (($(this).hasClass("bg-dark")==true)&&(temp.indexOf("dx")!=-1)) {
            $(this).removeClass("bg-dark");
            $(this).addClass("bg-success");
            $(this).removeClass("border-warning");
        }
    });

});

$("#salva1").click(function () {
    $(".cella").each(function () {
        var temp=$(this).attr("id");
        var nome=$("#nome").val();
        var prezzo=$("#prezzo").val();
        if (($(this).hasClass("bg-dark")==true)&&(temp.indexOf("sx")!=-1)) {
            $(this).html(nome +" "+ prezzo);
        }
    });
});


$("#avanti").click(function () {
    
    html2canvas(document.getElementById("main"), {scale: 1}).then(canvas => {
        document.body.appendChild(canvas);
        canvas.toBlob(function(blob){
            saveAs(blob,"diufanal"+".png");
        },"image/png");
    });

});