"use strict";
/*-------------------------------------
 * Scroll navigation active
 -------------------------------------*/
$(function () {
    let topMenuHeight;
    if ($(window).width() > 760) {
        topMenuHeight = $("header").height()-0;
    } else {
        topMenuHeight = $("header .navbar").height()-0;
    }
    let lastId,
        topMenu = $(".main"),
        menuItems = topMenu.find("a[href*='#']"),
        scrollItems = menuItems.map(function () {
            let item = $($(this).attr("href").replace('/#', '#'));
            if (item.length) {
                return item;
            }
        });

    menuItems.on('click', function (e) {
        $('.navbar-toggle').trigger('click');
        let href = $(this).attr("href");
        let offsetTop = href === '#' ? 0 : $(href).offset().top - topMenuHeight + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

    $(window).scroll(function () {
        let fromTop = $(this).scrollTop() + topMenuHeight;
        let cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length - 1];
        let id = cur && cur.length ? cur[0].id : "";
        if (lastId !== id) {
            lastId = id;
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });

});
//////////////////////
// $(function () {
//     $('a1[href*="#"]:not([href="#"])').on('click',function () {
//         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//             let target = $(this.hash);
//             target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
//             if (target.length) {
//                 $('html, body').animate({
//                     scrollTop: target.offset().top
//                 }, 1000);
//                 return false;
//             }
//         }
//     });
// });

$(window).on('load', function () {
    $('.flexslider').flexslider({
        animation: "slide"
    });
});
// document.querySelector('#slide1').onclick = event => {
//     const element = event.target.closest('img');
//
//     if (element) {
//         const frame = element.nextElementSibling;
//         const link  = frame.dataset.src;
//
//         frame.setAttribute('src', link);
//         frame.removeAttribute('data-src');
//     }
// }
$(window).on('load', function () {
    $('.slides img').on('click', function() {
        let parent = $(this).parent().attr('id');
        let frame = $(this).next();
        if(parent == 'slide1'){
            $(this).hide();
            let url = frame.attr("data-src");
            frame.attr('src', url);
            frame.removeAttr('data-src');
            frame.show();
        }else if(parent == 'slide2'){
            $(this).hide();
            let url = frame.attr("data-src");
            frame.attr('src', url);
            frame.removeAttr('data-src');
            frame.show();
        }

    });
    // let videos  = $("#slide1 ");
    // videos.on('click', function(){
    //     let elm = $(this);
    //     let fram = $("#slide1 iframe");
    //     if (elm) {
    //         let frame = videos.contents();
    //         let le    = frame.length;
    //         let ifr     = null;
    //         for(let i = 1; i<le; i++){
    //              ifr = frame[i].dataset.src;
    //             frame[i].setAttribute('src', ifr);
    //             frame[i].removeAttribute('data-src');
    //         }
    //
    //
    //         // elm.addClass("player").html(ifr);
    //         // elm.off("click");
    //     }
    //        conts   = elm.contents(),
    //         le      = conts.length,
    //         ifr     = null;
    //     console.log(elm);
    //     for(let i = 0; i<le; i++){
    //         if(conts[i].nodeType == 8) ifr = conts[i].textContent;
    //     }
    //
    //     elm.addClass("player").html(ifr);
    //     elm.off("click");
    // });
});
// $(function() {
//     let video2  = $("#slide2");
//
//     video2.on("click", function(){
//         let elm2 = $(this),
//             conts2   = elm2.contents(),
//             le2      = conts2.length,
//             ifr2     = null;
//
//         for(let i = 0; i<le2; i++){
//             if(conts2[i].nodeType == 8) ifr2 = conts2[i].textContent;
//         }
//
//         elm2.addClass("player").html(ifr2);
//         elm2.off("click");
//     });
// });