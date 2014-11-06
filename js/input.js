$(document).ready(function() {
        $(".stages-bar-item" ).click(function() {
          $( this ).toggleClass( "stages--active" ).next(".stages-bar-item").addClass("stages--current");
        });
    
$("#m").click(function(){
    $('label.position-s').not(this).removeClass('input-checked');
    $("#lb-m").addClass('input-checked');
 })

$("#w").click(function(){
    $('label.position-s').not(this).removeClass('input-checked');
    $("#lb-w").addClass('input-checked');
 })

$("#y").click(function(){
    $('label.position').not(this).removeClass('input-checked');
    $("#lb-y").addClass('input-checked');
 })

$("#n").click(function(){
    $('label.position').not(this).removeClass('input-checked');
    $("#lb-n").addClass('input-checked');
 })
    
        
    });