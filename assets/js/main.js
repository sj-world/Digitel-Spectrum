// Train effect 

$(document).ready(function () {
    setInterval('cursorAnimation()', 600);
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
    var delta = 300 - Math.random() * 250;

    if (this.isDeleting) { delta /= 7; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
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
        $(document).on('click', '.back-to-top', function() {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });
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
                nav: false,
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