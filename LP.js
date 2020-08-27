/*global $*/

$(function(){
    $(".slider_container").slick({
        autoplay:true,
        dots:true,
        arrows:false,
        autoPlayspeed:2000,
        speed:1000,
        infinite:true
    });
    
    
    $("#education").hover(function(){
        $(".education2").slideDown(2000);
    })
    
    $(".education2").hover(function(){
        $(".education3").slideDown(2000);
    })
    });
    
