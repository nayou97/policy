$(document).ready(function(){
    
    //navigation
        $("nav, .subMenuWrap").mouseenter(function(){
           $(".subMenuWrap").show(); 
        });
        
        $("nav, .subMenuWrap").mouseleave(function(){
           $(".subMenuWrap").hide(); 
        });
        
        $(".searchBtn a").click(function(){
           $(".popupWrap").show(); 
        });
        
        $(".close").click(function(){
           $(".popupWrap").hide(); 
        });
    });