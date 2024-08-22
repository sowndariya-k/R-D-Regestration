$(document).ready(function() {
    "use strict";
    var e = '<i class="fa fa-angle-down" aria-hidden="true"></i>',
        s = '<span class="rs-menu-parent">' + e + "</span>",
        a = '<div class="sub-menu-close"><i class="fa fa-times" aria-hidden="true"></i>Close</div>';
    $(".nav-menu .rs-mega-menu").append(s), $(".nav-menu > .menu-item-has-children").append(s), $(".nav-menu > .menu-item-has-children .sub-menu > .menu-item-has-children").append(s), $(".nav-menu .menu-item-has-children .sub-menu").append(a), $(".nav-menu .rs-mega-menu .mega-menu").append(a), $("span.rs-menu-parent").on("click", function(s) {
        s.preventDefault();
        var a = $(this),
            n = a.siblings("ul"),
            l = a.parent("li"),
            i = l.siblings("li"),
            t = "span.rs-menu-parent";
        if (n.hasClass("sub-menu")) var n = a.siblings("ul.sub-menu");
        else if (n.hasClass("mega-menu")) var n = a.siblings("ul.mega-menu");
        n.hasClass("visible") ? (setTimeout(function() {
            n.removeClass("visible")
        }, 10), a.html(e)) : (setTimeout(function() {
            n.addClass("visible")
        }, 10), a.html('<i class="fa fa-angle-up" aria-hidden="true"></i>')), l.find("ul.visible").removeClass("visible"), l.siblings("li").children("ul").removeClass("visible"), i.find("ul.visible").removeClass("visible"), l.children("ul").find(t).html(e), i.children(t).html(e), i.find(t).html(e)
    }), $("ul.nav-menu div.sub-menu-close").on("click", function(s) {
        s.preventDefault();
        var a = $(this).parent("ul");
        a.removeClass("visible"), a.siblings("span.rs-menu-parent").html(e)
    }), $("a.rs-menu-toggle").on("click", function(e) {
        e.preventDefault();
        var s = $(".rs-menu ul").height();
        $(this).hasClass("rs-menu-toggle-open") ? ($(this).removeClass("rs-menu-toggle-open").addClass("rs-menu-toggle-close"), $(".rs-menu").animate({
            height: "0px"
        }, {
            queue: !1,
            duration: 300
        }).addClass("rs-menu-close")) : ($(this).removeClass("rs-menu-toggle-close").addClass("rs-menu-toggle-open"), $(".rs-menu").animate({
            height: s
        }, {
            queue: !1,
            duration: 300
        }).removeClass("rs-menu-close"))
    });
    var n = 0;
    $(window).on("load", function() {
        n = $(window).width(), $(".rs-menu").addClass("rs-menu-close")
    }), $(window).resize(function() {
        n !== $(window).width() && ($(".visible").removeClass("visible"), $(".rs-menu-toggle").removeClass("rs-menu-toggle-open").addClass("rs-menu-toggle-close"), $(".rs-menu").css("height", "0").addClass("rs-menu-close"), $("span.rs-menu-parent").html(e), n = $(window).width())
    })
});
const toggles = document.querySelectorAll(".faq-toggle");
toggles.forEach(e => {
    e.addEventListener("click", () => {
        e.parentNode.classList.toggle("active")
    })
}), $(".tab-title").on("click", function() {
    var e = $(this).attr("dataId");
    $(".tab-title").not($(this)).removeClass("active"), $(this).addClass("active"), $(this).addClass("active"), $(".tab-c").not($(".tab-c[dataId=" + e + "]")).removeClass("active"), $(".tab-c[dataId=" + e + "]").addClass("active")
}), window.onscroll = function(e) {
    var s = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop,
        a = document.getElementsByClassName("sidebar");
    s > 300 ? a[0].classList.add("sticky-panel") : a[0].classList.remove("sticky-panel")
};