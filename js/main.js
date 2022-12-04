
$(document).ready(function() {

    /******************************
         BOTTOM SCROLL TOP BUTTON
    ******************************/
    // declare variable
    var scrollTop = $(".scrollTop");
    $(window).scroll(function() {
        // declare variable
        var topPos = $(this).scrollTop();
        // if user scrolls down - show scroll to top button
        if (topPos > 600) {
            $(scrollTop).css("opacity", "1");
        } else {
            $(scrollTop).css("opacity", "0");
        }
    }); // scroll END
    //Click event to scroll to top
    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 200);
        return false;
    });
     // click() scroll top EMD
 //js to accordion dropdown list in the mobile navbar 
 $(function(){
    $('.sub-btn').click(function(){
        $(this).next('.sub-menu').slideToggle(500);
    })
})
//======================== owl carousel ==================
        $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:6,
            nav:true,
            loop:true
        }
        }
        });

    });

    /*===================================*/
    var mainimg = document.getElementById("mainimg");
    var smallimg = document.getElementsByClassName("small-img");

    smallimg[0].onclick = function(){
        mainimg.src = smallimg[0].src;
    }
    smallimg[1].onclick = function(){
        mainimg.src = smallimg[1].src;
    }
    smallimg[2].onclick = function(){
        mainimg.src = smallimg[2].src;
    }
    smallimg[3].onclick = function(){
        mainimg.src = smallimg[3].src;
    }
