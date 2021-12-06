
var clicked1 = 0;
var clicked2 = 0;
var unlock = false;

$(document).ready(function() {
    $("#scrivi1").prop("disabled",true);
    $("#scrivi2").prop("disabled",true);
})

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
        $(this).attr("data-busy", "false");
    }

    $(".cella").each(function() {
        if($(this).attr("id").indexOf("sx")!=-1){
            if (($(this).hasClass("bg-dark")==true)) {
                $("#scrivi1").prop('disabled',false);
                return false;
            } else {
                $("#scrivi1").prop('disabled',true);
            }        
        }
    }); 
    $(".cella").each(function() {
        if($(this).attr("id").indexOf("dx")!=-1){
            if (($(this).hasClass("bg-dark")==true)) {
                $("#scrivi2").prop('disabled',false);
                return false;
            } else {
                $("#scrivi2").prop('disabled',true);
            }        
        }
    });
});

$("#scrivi1").click(function () {

    $(".cella").each(function () {
        var temp=$(this).attr("id");        
        if (($(this).hasClass("bg-dark")==true)&&(temp.indexOf("sx")!=-1)) {
            console.log($(this).attr("id"));
        }
    })

});

$("#scrivi2").click(function () {

    $(".cella").each(function () {
        var temp=$(this).attr("id");        
        if (($(this).hasClass("bg-dark")==true)&&(temp.indexOf("dx")!=-1)) {
            console.log($(this).attr("id"));
        }        
    })

});


$("#salva1").click(function () {
    
    var nome=$("#nome").val();
    var prezzo=$("#prezzo").val();
    
    if((nome!="")&&(prezzo!="")){
        $(".cella").each(function () {
            if (($(this).hasClass("bg-dark")==true)&&($(this).attr("id").indexOf("sx")!=-1)&&($(this).attr("data-busy")=="false")) {
                $(this).html(nome +" "+ prezzo);
                $(this).attr("data-busy", "true");
            }
        });
        $(".modal").modal("hide");
    } else {
        $("#checkpage").html("Inserisci il Nome ed il Prezzo.").fadeIn(500).delay(2000).fadeOut(500);        
    }

    $("#nome").val("");
    $("#prezzo").val("");
});

$("#salva2").click(function () {
    
    var nome=$("#nome2").val();
    var prezzo=$("#prezzo2").val();

    if((nome!="")&&(prezzo!="")){
        $(".cella").each(function () {                
            if (($(this).hasClass("bg-dark")==true)&&($(this).attr("id").indexOf("dx")!=-1)) {
                $(this).html(nome +" "+ prezzo);
            }
        });
        $(".modal").modal("hide");
    } else {
        $("#checkpage2").html("Inserisci il Nome ed il Prezzo.").fadeIn(500).delay(2000).fadeOut(500);
    }    

});


$("#salvaTutto").click(function () {        
    var mese = $("#mese").val();    
    if (mese!="") {
        html2canvas(document.getElementById("printable"), {scale: 1}).then(canvas => {             
            canvas.toBlob(function(blob){
                saveAs(blob,mese+".png");
            },"image/png");
        });                
        $(".modal").modal("hide");
    } else {
        $("#checkmese").html("Inserisci il nome del mese!").fadeIn(500).delay(2000).fadeOut(500);        
    }
});
