$(document).ready(function() {
    window.onscroll = function() { windowScroll() };
    $(".page_header .btn-expand").on('click', btnExpandClick);

    var isMobile, isTablet, isDesktop;
    /*check device width*/
    bsContainerWidth = $("body").find('.container').outerWidth();
    if (bsContainerWidth < 720) {
        console.log("mobile");
        isMobile = true;
    } else if (bsContainerWidth < 960) {
        console.log("tablet");
        isTablet = true;
    } else {
        console.log("desktop");
        isDesktop = true;
    }
    var serviceSlider = $('#slide_service')
    if (serviceSlider.length > 0 && isDesktop) {
        serviceSlider.bxSlider({
            minSlides: 4,
            maxSlides: 5,
            slideMargin: 16,
            slideWidth: 300,
            pager: 0,
            nextText: '',
            prevText: '',
            nextSelector: "#service-next",
            prevSelector: "#service-prev",
            touchEnabled: false
        });
    } else if (serviceSlider.length > 0 && isMobile) {
        serviceSlider.bxSlider({
            minSlides: 1,
            maxSlides: 2,
            slideMargin: 16,
            slideWidth: 200,
            pager: 0,
            nextText: '',
            prevText: '',
            nextSelector: "#service-next",
            prevSelector: "#service-prev"
        });
    } else if (serviceSlider.length > 0 && isTablet) {
        serviceSlider.bxSlider({
            minSlides: 3,
            maxSlides: 4,
            pager: 0,
            slideMargin: 16,
            slideWidth: 320,
            nextText: '',
            prevText: '',
            nextSelector: "#service-next",
            prevSelector: "#service-prev"
        });
    }

    var arrivalSlider = $('#slide_arrival')
    if (arrivalSlider.length > 0) {
        arrivalSlider.bxSlider({
            minSlides: 1,
            maxSlides: 1,
            pause: 6000,
            pagerSelector: '#arrival-pager',
            nextText: '',
            prevText: '',
            nextSelector: "#arrival-next",
            prevSelector: "#arrival-prev"
        });
    }
    var clientSlider = $('#slide_cmt')
    if (clientSlider.length > 0) {
        clientSlider.bxSlider({
            auto: 1,
            minSlides: 1,
            maxSlides: 1,
            pause: 7000,
            pagerSelector: '#cmt-pager',
            nextText: '',
            prevText: ''
        });
    }

    var width = $(".container").outerWidth() - 30;

    if ($("body").outerWidth() <= 768) {
        $("#nav").css("width", width);
    }

    $(window).resize(function() {
        var width = $(".container").outerWidth() - 30;

        if ($("body").outerWidth() <= 768) {

            $("#nav").css("width", width);
        } else {

            $(".nav").css("width", "100%");
        }
    });


    if ($(".grid_masonry").length > 0) {
        $(".grid_masonry").masonry({
            itemSelector: '.masonry_item',
            columnWidth: '.item_sizer',
            gutter: '.gutter_sizer',
            percentPosition: true
        });
    }


    if ($(".lightgallery").length > 0) {
        $('.lightgallery').lightGallery();
    }
});




function btnExpandClick(e) {
    e.preventDefault();
    e.stopPropagation();
    expandNav();
}

function expandNav() {
    $('.page_header .nav').toggle();
    $('.btn-expand .fa-bars').toggle();
    $('.btn-expand .fa-times').toggle();
}

function windowScroll() {
    var headerHeight = $("header").outerHeight();
    if (document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight) {
        $(".page_header").addClass('is-pinned');
    } else {
        $(".page_header").removeClass('is-pinned');
    }
}