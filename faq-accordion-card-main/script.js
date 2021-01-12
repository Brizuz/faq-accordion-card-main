$(document).ready(function(){

$(".item-header").click(function(){
    $(".accordion-item").removeClass("active");
    $(this).parent().addClass("active");

    var activeLi = $(this).attr("class");
    console.log(activeLi);
});

function orange(){
    $(this).css("color", "hsl(14, 88%, 65%)").css("transition", "250ms");
}

function black(){
    $(this).css("color", "hsl(238, 29%, 16%)");
}

function on(){
    $(this).addClass("on");
    $("#cube").addClass("on");
    $(".container").addClass("on");
}

function off(){
    $(this).removeClass("on");
    $("#cube").removeClass("on");
    $(".container").removeClass("on");
}


$(".title").hover(on, off);

});