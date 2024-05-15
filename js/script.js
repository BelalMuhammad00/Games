import {Games} from "./ui.js";

$(document).ready(function(){
    $('.loading').fadeOut(1000,function(){
        $("body").css("overflow","auto");
    });

});


const games =new Games();
games.displayGames();


