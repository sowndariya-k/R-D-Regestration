$(".logos-slider").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: !0,
    autoplaySpeed: 1500,
    arrows: !1,
    dots: !1,
    pauseOnHover: !1,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 2
        }
    }]
});