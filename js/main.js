$(document).ready(function () {
    'use strict';

    $('.main-slider--js').slick({
        autoplay: true,
        autoplaySpeed: 7000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        swipe: false,
        draggable: false,
        fade: true,
        cssEase: 'linear',
        speed: 700,
    });

    $('.card-slider--js').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        asNavFor: '.card-slider-nav--js',
        infinite: false
    });

    $('.card-slider-nav--js').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        asNavFor: '.card-slider--js',
        focusOnSelect: true,
        infinite: false,
        prevArrow: "<button type='button' class='slick-btn slick-prev'><span class='icon i-angle-double-left'></span></button>",
        nextArrow: "<button type='button' class='slick-btn slick-next'><span class='icon i-angle-double-right'></span></button>"
    });

    $('.product-slider--js').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: false,
        prevArrow: "<button type='button' class='slick-btn slick-prev'><span class='icon i-angle-double-left'></span></button>",
        nextArrow: "<button type='button' class='slick-btn slick-next'><span class='icon i-angle-double-right'></span></button>",
        cssEase: 'ease',
        speed: 200,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    function filterToggle() {
        $('.filter-mobile-btn .btn').click(function () {

            $('body').addClass('page-lock');
            $('.sidebar-filter').addClass('sidebar-filter--open');

        });

        $('.filter__btn-close').click(function () {
            $('body').removeClass('page-lock');
            $('.sidebar-filter').removeClass('sidebar-filter--open');
        });

        $(document).click(function (e) {
            const filter = $('.sidebar-filter');
            const filterBtn = $('.filter-mobile-btn .btn');

            if ((!filter.is(e.target) && !filterBtn.is(e.target)) && filter.has(e.target).length === 0) {
                $('body').removeClass('page-lock');
                $('.sidebar-filter').removeClass('sidebar-filter--open');
            }

        });
    }

    filterToggle();

    function toggleMenu() {

        $('.main-nav-btn').click(function () {

            $('body').addClass('page-lock');
            $('.main-nav').addClass('main-nav--open');

        });

        $('.main-nav__close').click(function () {

            $('body').removeClass('page-lock');
            $('.main-nav').removeClass('main-nav--open');

        });
    }

    toggleMenu();

    function modalInit() {

        if ($('.modal').length === 0) {
            return false;
        }

        $('.modal').iziModal({
            transitionIn: 'bounceInDown',
            transitionOut: 'bounceOutDown',
            bodyOverflow: true,
            overlayColor: "rgba(0, 0, 0, 0.4)",
            width: false,
            closeOnEscape: true,
            closeButton: true,
            zindex: 10000,
            focusInput: false
        });
    }

    modalInit();

    
});