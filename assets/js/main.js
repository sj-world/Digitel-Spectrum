// Train effect 

$(document).ready(function () {
    setInterval('cursorAnimation()', 250);
});




var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 215 - Math.random() * 250;

    if (this.isDeleting) { delta /= 7; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 400;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }

};

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

// Train effect end


(function($) {
    "use strict";
    jQuery(document).ready(function($) {
        /*------------------------------
            wow js init
        ------------------------------*/
        new WOW().init();

        /*---------------------------------------------
            hardware - masonary - gallery activation
        -----------------------------------------------*/
        var $hardwaseMasonay = $('#hardware-masonary-gallery');
        if ($hardwaseMasonay.length > 0) {
            $hardwaseMasonay.imagesLoaded(function() {
                var festivarMasonry = $hardwaseMasonay.isotope({
                    percentPosition: true,
                    masonry: {
                        columnWidth: 0,
                        gutter: 30
                    }
                });
            });
        }

        /*---------------------------------------------
            photo gallery masonay activation
        -----------------------------------------------*/
        var $Container = $('#photo-gallery-masony-inner');
        if ($Container.length > 0) {
            $Container.imagesLoaded(function() {
                var festivarMasonry = $Container.isotope({
                    percentPosition: true,
                    masonry: {
                        columnWidth: 0,
                        gutter: 30
                    }
                });
                $(document).on('click', '.photo-gallery-manu-wrppaer ul li', function() {
                    var filterValue = $(this).attr('data-filter');
                    festivarMasonry.isotope({
                        filter: filterValue
                    });
                });
            });
        }
        /*---------------------------------------------
            photo gallery masonay filter
        -----------------------------------------------*/
        var portfolioMenu = '.photo-gallery-manu-wrppaer ul li';
        $(document).on('click', portfolioMenu, function() {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });

        /*----------------------------
            magnific popup activation
        -----------------------------*/
        $('.video-play-btn,.video-popup,.small-vide-play-btn,.video-play-about-page').magnificPopup({
            type: 'video'
        });
        /*----------------------------
            back to top
        ----------------------------*/
        // $(document).on('click', '.back-to-top', function() {
        //     $("html,body").animate({
        //         scrollTop: 0
        //     }, 2000);
        // });
        var $datepicker = $('.datepicker');
        if ($datepicker.length > 0) {
            $datepicker.datepicker();
        }
        /* ---------------------------
            counter section activation
        ------------------------------*/
        var counternumber = $('.count-number,.forum-count');
        counternumber.counterUp({
            delay: 20,
            time: 3000
        });
        /*-----------------------------------
            testimonial carousel
        -------------------------------------*/
        var $tesitmonialCarousel = $('#tesitmonial-carousel');
        if ($tesitmonialCarousel.length > 0) {
            $tesitmonialCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                dots: false,
                nav: false,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    960: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    },
                    1920: {
                        items: 1
                    }
                }
            });
            $tesitmonialCarousel.on('translate.owl.carousel', function() {
                $('.single-testimonial-item .descripton').removeClass('animated fadeInDown').css('opaciry', '0');
                $('.single-testimonial-item .clients-details').removeClass('animated fadeInUp').css('opaciry', '0');
            });
            $tesitmonialCarousel.on('translated.owl.carousel', function() {
                $('.single-testimonial-item .descripton').addClass('animated fadeInDown').css('opaciry', '1');
                $('.single-testimonial-item .clients-details').addClass('animated fadeInUp').css('opaciry', '1');
            });
        }


        /*---------------------------------
            brand logo carousel
        ----------------------------------*/
        var $brandCarousel = $('#brand-carousel');
        if ($brandCarousel.length > 0) {
            $brandCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                dots: false,
                margin:20,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    414: {
                        items: 2
                    },
                    599: {
                        items: 3
                    },
                    768: {
                        items: 3
                    },
                    960: {
                        items: 4
                    },
                    1200: {
                        items: 5
                    },
                    1920: {
                        items: 6
                    }
                }
            });
        }


    });
    /*----------------------------------------------
        define variable for store last scrolltop
    ----------------------------------------------*/
    var lastScrollTop = '';
    $(window).on('scroll', function() {
        /*---------------------------------
            back to top show / hide
        -----------------------------------*/
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
        /*----------------------------------
         sticky menu activation
        -----------------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        // mainMenuTop.style.transition = "1s all ease in-out";
        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                /*----------------------------------
                    hide sticky menu on scrolldown
                ----------------------------------*/
                mainMenuTop.removeClass('nav-fixed');

            } else {
                /*-----------------------------------
                    active sticky menu on scrollup
                ------------------------------------*/
                mainMenuTop.addClass('nav-fixed');
            }

        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }
        lastScrollTop = st;

    });

    $(window).on('load', function() {
        /*------------------------
            preloader
        -------------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);
        /*------------------------------
            back to Top
        --------------------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut(100);
    });

}(jQuery));


// sticky header

// window.onscroll = function () { myFunction() };

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;
// var mainHeading = document.getElementById('main-heading');


function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        // console.log(mainHeading);
        // mainHeading.style.border = "5px solid white";
        // mainHeading.style.marginTop = "141px";
    } else {
        header.classList.remove("sticky");
        // mainHeading.style.border = "2px solid white";
        // mainHeading.style.margin = "0px";

    }
}

// Read more and Read less functionality

$("#Solution-Read-Btn1").click(function () {
    $(".content1").slideToggle("fast");
    var $this = $(this);
    $this.toggleClass("open");

    // if ($this.hasClass("open")) {
    //     $this.html("Read Less");
    // } else {
    //     $this.html("Read more");
    // }
});


$("#Solution-Read-Btn2").click(function () {
    $(".content2").slideToggle("fast");
    var $this = $(this);
    $this.toggleClass("open");

    // if ($this.hasClass("open")) {
    //     $this.html("Read Less");
    // } else {
    //     $this.html("Read more");
    // }
});


// TODO:  change the button style ..

// var btn = document.getElementById('Solution-Read-Btn1');
// var btn2 = document.getElementById('Solution-Read-Btn2');

// var more = document.getElementById('more');

// var more2 = document.getElementById('more2');


// btn.onclick = function () {
//     var txt = this.textContent;
//     if (txt == "Read More") {
//         more.innerHTML = "Read Less";
//     } else if (txt == "Read Less") {
//         more.innerHTML = "Read More";
//     }
// }

// btn2.onclick = function () {
//     var txt = this.textContent;
//     if (txt == "Read More") {
//         more2.innerHTML = "Read Less";
//     } else if (txt == "Read Less") {
//         more2.innerHTML = "Read More";
//     }
// }


// jsor slider js


    var options = {
        $FillMode: 2, //[Optional] The way to fill image in slide, 0 stretch, 1 contain (keep aspect ratio and put all inside slide), 2 cover (keep aspect ratio and cover whole slide), 4 actual size, 5 contain for large image, actual size for small image, default value is 0
        $AutoPlay: 1, //[Optional] Auto play or not, to enable slideshow, this option must be set to greater than 0. Default value is 0. 0: no auto play, 1: continuously, 2: stop at last slide, 4: stop on click, 8: stop on user navigation (by arrow/bullet/thumbnail/drag/arrow key navigation)
        $Idle: 4000, //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
        $PauseOnHover: 1, //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

        $ArrowKeyNavigation: 1, //[Optional] Steps to go for each navigation request by pressing arrow key, default value is 1.
        $SlideEasing: $Jease$.$OutQuint, //[Optional] Specifies easing for right to left animation, default value is $Jease$.$OutQuad
        $SlideDuration: 1200, //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
        $MinDragOffsetToSlide: 20, //[Optional] Minimum drag offset to trigger slide, default value is 20
        //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
        //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
        $SlideSpacing: 0, //[Optional] Space between each slide in pixels, default value is 0
        $UISearchMode: 1, //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
        $PlayOrientation: 1, //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
        $DragOrientation: 1, //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $Cols is greater than 1, or parking position is not 0)

        $BulletNavigatorOptions: { //[Optional] Options to specify and enable navigator or not
            $Class: $JssorBulletNavigator$, //[Required] Class to create navigator instance
            $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always
            $Steps: 1, //[Optional] Steps to go for each navigation request, default value is 1
            $Rows: 1, //[Optional] Specify lanes to arrange items, default value is 1
            $SpacingX: 8, //[Optional] Horizontal space between each item in pixel, default value is 0
            $SpacingY: 8, //[Optional] Vertical space between each item in pixel, default value is 0
            $Orientation: 1 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
        },

        $ArrowNavigatorOptions: { //[Optional] Options to specify and enable arrow navigator or not
            $Class: $JssorArrowNavigator$, //[Requried] Class to create arrow navigator instance
            $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always
            $Steps: 1 //[Optional] Steps to go for each navigation request, default value is 1
        }
    };

    var jssor_slider1 = new $JssorSlider$('slider1_container', options);

    /*#region responsive code begin*/
    //you can remove responsive code if you don't want the slider scales while window resizing
    function ScaleSlider() {
        var bodyWidth = document.body.clientWidth;
        if (bodyWidth)
            jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));
        else
            $Jssor$.$Delay(ScaleSlider, 30);
    }

    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*#endregion responsive code end*/


// data tooltip
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});



