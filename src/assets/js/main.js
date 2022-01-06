/*
    * Sticky Nav 
    * Owl Slider 
    * MAP Section
    * Theme Slider
    * Theme Variables
    * external js: isotope.pkgd.js
    * Smooth Scroll 
    * Slider
    * Scroll Top
    * Skill Bars 
/*
|--------------------------------------------------------------------------
| Sticky Nav 
|--------------------------------------------------------------------------
|
|
|
*/
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

/*-------------------------------------
     * Animate scroll
     -------------------------------------*/
/*
    $.fn.animated = function () {
        $(this).each(function () {
            var ths = $(this),
                anim = ths.attr('data-animate'),
                dur = ths.attr('data-duration');
            ths.css('opacity', '0').addClass('animated');
            ths.waypoint(function (dir) {
                    if (dir === 'down') {
                        ths.addClass(anim).css({'opacity': '1', 'animation-duration': '' + dur + 's'});
                    }
                    else {
                        ths.removeClass(anim).css('opacity', '0');
                    }
                }, {
                    offset: '95%'
                });
        });
    };
	$.fn.animatedOne = function () {
        $(this).each(function () {
            var ths = $(this),
                anim = ths.attr('data-animate'),
                dur = ths.attr('data-duration');
            ths.css('opacity', '0').addClass('animated')
                .waypoint(function (dir) {
                    if (dir === 'down') {
                        ths.addClass(anim).css({'opacity': '1', 'animation-duration': '' + dur + 's'});
                    }
                    else {
                        return false
                    }
                }, {
                    offset: '95%'
                });
        });
    };

*/


/*
|--------------------------------------------------------------------------
| Testimonial Slider 
|--------------------------------------------------------------------------
|
|
|
*/

/*
|--------------------------------------------------------------------------
| Smooth Scroll 
|--------------------------------------------------------------------------
|
|
|
*/
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

/*-------------------------------------
  * Start function
-------------------------------------*/

	var $win = $(window),
		$winW = $win.width(),
		$doc = $(document),
		$headerH = $doc.height();
    function resFun() {
        if ($winW > 560) {
          //  $('.animate').animated();
          //  $('.animate--one').animatedOne();
        }
		if ($winW < 992) {
            $('.cart_full span').remove();

		}
     }


			
		
    $doc.on('scroll',function () {
        var $hs = $doc.height();
        if($hs != $headerH && $winW > 768){
          //  $('.animate').animated();
          //  $('.animate--one').animatedOne();
            $headerH = $hs;
        }
    });

    resFun();
	
    $win.resize(function () {
        resFun();
    });


var priceList = {
	"p001" : {"id" : "001", "subid" : {}, "name" : "No.3 Hair Perfector 100 ml", "price" : "2160"},
	"p002" : {"id" : "002", "subid" : {}, "name" : "No.2 Bond Perfector", "price" : "8750"},
	"p003" : {"id" : "003", "subid" : {}, "name" : "No.1 Bond Multiplier", "price" : "8750"},
	"p004" : {"id" : "004", "subid" : {}, "name" : "Traveling Stylist Kit", "price" : "9350"},
	"p005" : {"id" : "005", "subid" : {}, "name" : "Salon Intro Kit", "price" : "23700"},
  	"p006" : {"id" : "006", "subid" : {}, "name" : "No.4 Bond Maintenance Shampoo 250 ml", "price" : "2350"},
	"p007" : {"id" : "007", "subid" : {}, "name" : "No.5 Bond Maintenance Conditioner 250 ml", "price" : "2350"},
  	"p008" : {"id" : "008", "subid" : {}, "name" : "No.6 Bond Smoother 100 ml", "price" : "2350"},
	"p009" : {"id" : "009", "subid" : {}, "name" : "No.7 Bonding Oil 30 ml", "price" : "2430"},
    "p010" : {"id" : "010", "subid" : {}, "name" : "No.0 Olaplex Hair Treatment 155 ml", "price" : "2600"},
    "p011" : {"id" : "011", "subid" : {}, "name" : "No.3 Hair Perfector 250ml", "price" : "4200"},
    "p012" : {"id" : "012", "subid" : {}, "name" : "No.4 Bond Maintenance Shampoo 2000 ml", "price" : "10285"},
    "p013" : {"id" : "013", "subid" : {}, "name" : "No.5 Bond Maintenance Conditioner 2000 ml", "price" : "10285"},
    "p015" : {"id" : "015", "subid" : {}, "name" : "No.8 Bond Intense Moisture Mask", "price" : "2500"}
	};

	jQuery(document).ready(function($) {
  $(window).load(function() {
    setTimeout(function() {
      $('#preloader').fadeOut('slow', function() {});
    }, 100);

  });
});

/*-------------------------------------
  * Электронная коммерция - аналитика
-------------------------------------*/
//Проставляю индификаторы для каждого блока для "list_position" в gtag('event')
$('[data-id]').each(function (e) {
    $(this).attr('data-id', e);
});

// Событие при просмотре (наведении) товара
$("#max-featured-section").each(function() {
    $(this).children('#max-feature-section').on("mouseenter", function(){
        var onclickBtnEvView = $(this).find('button').attr('onclick');
        var searchEvView = 'categoryFilter(\'';
        var argsStartEvView = onclickBtnEvView.indexOf(searchEvView)+searchEvView.length;
        onclickBtnEvView = onclickBtnEvView.substring(argsStartEvView, onclickBtnEvView.indexOf(')', argsStartEvView));
        var resultsEvView = onclickBtnEvView.split('\',')
        var productIdEvView = resultsEvView[0].replace(/[^\d]/g, '');

        var productNameEvView = $(this).find('h2').text();
        var listPositionEvView = $(this).find('.tovar-name').attr('data-id');
        var productPriceEvView = $(this).find('.buy > p').children('strong').text()
            .replace(/[^\d]/g, '');
        // Проверка отправки данных
        // console.log(
        //     'id: ' + productIdEvView,
        //     'Название: ' + productNameEvView,
        //     'Номер блока: ' + listPositionEvView,
        //     'Цена: ' + productPriceEvView
        // );
        googleViewItem.push(
            {
                "id": productIdEvView,
                "name": productNameEvView,
                "list_name": "Home page",
                "brand": "Olaplex",
                "list_position": listPositionEvView,
                "quantity": 1,
                "price": productPriceEvView
            }
        );
        yaDetail.push(
            {
                "id": productIdEvView,
                "name" : productNameEvView,
                "price": Number(productPriceEvView),
                "brand": "Olaplex",
            }
        );
    });
});

// Событие при клике на добавить в корзину
$(".tovar-name").each(function() {
    $(this).find('.buy').children('button').on("click", function(){
        var onclickBtn = $(this).attr('onclick');
        var search = 'categoryFilter(\'';
        var argsStart = onclickBtn.indexOf(search)+search.length;
        onclickBtn = onclickBtn.substring(argsStart, onclickBtn.indexOf(')', argsStart));
        var results = onclickBtn.split('\',');
        var productId = results[0].replace(/[^\d]/g, '');

        var productName = $(this).parent('.buy').parent('.tovar-name').children('h2').text();
        var listPosition = $(this).parent('.buy').parent('.tovar-name').attr('data-id');
        var productPrice = $(this).prev().children('strong').text()
            .replace(/[^\d]/g, '');

        // Проверка отправляемых данных
        // console.log(
        //     'id: ' + productId,
        //     'Название: ' + productName,
        //     'Номер блока: ' + listPosition,
        //     'Цена: ' + productPrice
        // );

        googleAddToCart.push(
            {
                "id": productId,
                "name": productName,
                "list_name": "Home page",
                "brand": "Olaplex",
                "list_position": listPosition,
                "quantity": 1,
                "price": productPrice
            }
        );
        yaAddToCart.push(
            {
                "id": productId,
                "name": productName,
                "price": Number(productPrice),
                "brand": "Olaplex",
                "quantity": 1
            }
        );
    });
});

