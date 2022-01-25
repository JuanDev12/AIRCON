$(document).ready(function(){
    //NAVBAR CODE
    function setNavbar(){
        if(window.innerWidth > 840){
            $(".navbar-options").css("display","flex");
        }
        else if (window.innerWidth <= 840) {
            $(".navbar-options").css("display","none");
        }
    }

    $("#toggle-button").click(function(){
        $(".navbar-options").slideToggle("fast");
    });

    window.addEventListener("resize", setNavbar);
});

