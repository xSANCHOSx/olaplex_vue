"use strict";

/*-------------------------------------
 * Scroll navigation active
 -------------------------------------*/
$(function () {

    if ($(window).width() > 760) {
        var     topMenuHeight = $("header").height()-0;
    } else {
        var     topMenuHeight = $("header .navbar").height()-0;
    }
    var lastId,
        topMenu = $(".main"),
        menuItems = topMenu.find("a[href*='#']"),
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href").replace('/#', '#'));
            if (item.length) {
                return item;
            }
        });

    menuItems.on('click', function (e) {
        $('.navbar-toggle').trigger('click');
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

    $(window).scroll(function () {
        var fromTop = $(this).scrollTop() + topMenuHeight;
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        if (lastId !== id) {
            lastId = id;
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });

});
//////////////////////
$(function () {
    $('a1[href*="#"]:not([href="#"])').on('click',function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$(window).load(function(){
    $('.flexslider').flexslider({
        animation: "slide"
    });
});
$(function() {
    var videos  = $("#slide1");

    videos.on("click", function(){
        var elm = $(this),
            conts   = elm.contents(),
            le      = conts.length,
            ifr     = null;

        for(var i = 0; i<le; i++){
            if(conts[i].nodeType == 8) ifr = conts[i].textContent;
        }

        elm.addClass("player").html(ifr);
        elm.off("click");
    });
});
$(function() {
    var video2  = $("#slide2");

    video2.on("click", function(){
        var elm2 = $(this),
            conts2   = elm2.contents(),
            le2      = conts2.length,
            ifr2     = null;

        for(var i = 0; i<le2; i++){
            if(conts2[i].nodeType == 8) ifr2 = conts2[i].textContent;
        }

        elm2.addClass("player").html(ifr2);
        elm2.off("click");
    });
});