/***************************************
 * JQuery based script					
 * Basket on client side 				
 * Created WebInside WebStudio (c) 2014	
 * Use only for linked www.webinside.ru 
 **************************************/

var local = 	{
			"basket_is_empty" : "(0)", 
			"name" : "Название",
			"price" : "Цена",
			"all" : "Всего",
			"order" : "Оформить заказ",
			"skip_order" : "Продолжить покупки",
			"basket" : "",
			"num" : "кол-во",
			"send" : "Спасибо за покупку!\nМы свяжемся с Вами в ближайшее время",
			"goods" : "Товаров",
			"amount" : "на сумму"
			};
 var img = $('.inner').append('<img src="images/basket.png" alt="">');
function WICard(obj, plugins)
	{
	this.widjetX = 0;
	this.widjetY = 0;	
	this.widjetObj;
	this.widjetPos;
	this.cardID = "";
	this.DATA = {};
	this.IDS = [];
	this.objNAME = obj;
	this.CONFIG = {};
	this.IMG = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABpFBMVEUAAABEREBEREBEREBEREASEhEJCQgGBgYBAQEAAAAGBgUHBwYAAAAAAAADAwNEREBEREAJCQkICAcGBgYFBQUJCQgnJyVEREAICAgBAQEAAAAICAcAAAAAAAAAAAAJCQgAAAAGBgYBAQEQEA8NDQwHBwcBAQEMDAsSEhEJCQkBAQEBAQEBAQFAQDxEREBEREADAwIAAAABAQESEhEkJCIAAAAICAgAAAAQEA9EREAAAAATExIAAAAKCgkNDQwAAAAAAAABAQETExIHBwcDAwMDAwMTExIAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAADAwIAAAAGBgUBAQEWFhUAAAAAAAAHBwYBAQEVFRMDAwMHBwcUFBMWFhUBAQETExIAAAAAAAADAwMMDAsAAAAAAAASEhEAAAAUFBMAAAAJCQkrKygDAwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMAAAAJCQgAAAAiIiABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQFEREAFBQUBAQEAAAAGBgYICAgHBwcBAQEJW8x2AAAAhXRSTlMAAQcIAjJ0kZqZnp+LaygNDxKw/v6wIwPY1A+upf4nenGWvXCg/Pubc8eSmLkcHxpW+vlhBr6hl3EDUl9pop5Q+fhe+1FPXVT8mlxfXWD9+1dbnPRRRved9ldI+Fhd+mBaVlSYWJN1V2dqwwVTA8ORvJXAknRzKii2rCjc3BUTqagrepgUbRZwswAAAAlwSFlzAAAASAAAAEgARslrPgAAAb1JREFUOMuNk2dTwkAQhpdiCZagotiwd5RYQeyKJdii2FDsvffeG0TJnza3lzg4kBnv0zt5NpvdZ3IA/zs6vUGv00wAxrj4hESGnERTkomk5JRU1swaFZ6WnhEMieSEgl9qsmRmWVWe/R2W8KkUjkw5uUr/vNhcEvPpLHEZGly0FYA8pb4wqMFFscioBzAU06lKSsvKKa+orKqmqYY1yB3smGvrHFx9A0mNTQ6uuQU7Oc1yB50Lc6uDc0ObXNHYTlIHfqmTJaZcmLvkpwDdPb19hAODkzjRlAuzpx93GhhEPsTjpF6gBTg1PyxnN4d8hHKJoQUhuhU/qvKxcWVTWmAPKlsLE5RP8qoJLND5vhQ/U9PIYWZWNcWgyTnFpH+ecoCFgNKTQZM+atK/qHI3txSg73gjTC6vIF9dw0nXhSiTG8g3eaEeJ92KMrlN+I4gSp5dkvaiTO4fAKwJ6PQQ4Og4wuQJ3fp070zZXzhJOafpAgsuQ2Gtf+4KC64tWtx2gybZW61/8g7QpPn+ITZ/fAI0yVqfX2wx+r8+gxVNkl3f3j+cnU4v3j4vSa73NwDrJ5qkt+f3Jv5N6u3Vvt0/UGcpYbC85ecAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTMtMDUtMThUMDY6MDM6MzEtMDU6MDALk1CfAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDEzLTA1LTE4VDA2OjAzOjMxLTA1OjAwes7oIwAAAABJRU5ErkJggg==";
	
	
	this.init = function(widjetID, config)
		{
		this.CONFIG = config || {};
		try {
			this.DATA = JSON.parse(localStorage.getItem(widjetID)); 
			if ($.isEmptyObject(this.DATA))
				{
				this.DATA = {};
				}	
			} 
			catch (e) 
			{
			this.DATA = {};
			}	
		try  {
			this.IDS = JSON.parse(localStorage.getItem(widjetID + "_ids"));
			if ($.isEmptyObject(this.IDS))
				{
				this.IDS = [];
				}	
			} 
			catch (e) 
			{
			this.IDS = [];
			}	
		
		this.cardID = widjetID;	
		
		this.widjetObj = $("#" + widjetID);
			
		
		if ($.isEmptyObject(this.DATA))
			{
			this.widjetObj.html(local.basket_is_empty);
			$('#basketwidjet2').html(local.basket_is_empty);
			
			}
			else
			{
			this.reCalc();
			this.renderBasketTable();
			}
		
		}
		
/***********************************************************************************************
 * example: onclick="cart.addToCart(this, '2', 'Name of comic 2', '25500')						
 **********************************************************************************************/
	this.addToCart = function(curObj, id, params)
		{
			yaCounter48443993.reachGoal('zakaz');
			gtag('event', 'zakaz', {
			  'event_category' : 'zakaz'
			  
			});

		var kol = 1;
		
		if ( $("input").is("#" + wiNumInputPrefID + id) )
			{
			kol = parseInt( $("#" + wiNumInputPrefID + id).val() );	
			}
				
		id = ( $.isNumeric(id) ) ? "ID" + id.toString() : id;
		
		var id_ = ( $.isEmptyObject(params.subid) ) ? id : id + "_" + params.subid;
		
		 
		var goodieLine = {"id" : id_, "name" : params.name, "price": params.price, "num" : kol, "url" : document.location.href, "photo" : ""};
		
		if ($.isEmptyObject(this.DATA))
			{
			this.DATA[id_] = goodieLine;	
			this.IDS.push(id_);
			}
		else
		for(var idkey in this.DATA) 
			{
			
			
			if($.inArray(id_, this.IDS) === -1)
				{
				this.DATA[id_] = goodieLine;
				this.IDS.push(id_)
				
				}
			else	
			if (idkey == id_)
				{
				
				this.DATA[idkey].num += kol;	
				
				}
			}
		
		localStorage.setItem(this.cardID, JSON.stringify(this.DATA));
		localStorage.setItem(this.cardID + "_ids", JSON.stringify(this.IDS));
		this.reCalc();
		
		this.renderBasketTable();
		this.renderComfirmAdd();
		
		
		if (this.CONFIG.showAfterAdd)
			{
			cart.showWinow('bcontainer', 1);
			}
		}
	this.reCalc = function()
		{
		var num = 0;
		var sum = 0; 	
		for(var idkey in this.DATA) 
			{
			num += parseInt(this.DATA[idkey].num);
			sum += parseFloat(parseInt(this.DATA[idkey].num) * parseFloat(this.DATA[idkey].price));
			}
				
		// *** currency plugin *** //
		
		if (typeof WICartConvert == 'function' )
				{
				sum = WICartConvert(sum);
				}
				
		// *** //		 		
		this.widjetObj.html(local.basket + " (" + num + ")");
		$('#basketwidjet2').html(local.basket + " (" + num + ")");
		localStorage.setItem(this.cardID, JSON.stringify(this.DATA));
		}

	this.clearBasket = function()
		{
		this.DATA = {};	
		this.IDS = [];
		this.widjetObj.html(local.basket_is_empty);	
		$('#basketwidjet2').html(local.basket_is_empty);	
		localStorage.setItem(this.cardID, "{}");
		localStorage.setItem(this.cardID + "_ids", "[]");
		$("#bcontainer").remove();
		$("#blindLayer").remove();
		}	
		
		
	this.renderComfirmAdd = function()
		{
			$("body").append(" \
				<div id='blindLayer1' class='blindLayer1'></div> \
				<div id='bcontainer1' class='bcontainer1'> \
				<div id='bsubject'>Товар добавлен в корзину!<a id='bclose' href='javascript:void(0)' onclick='" + this.objNAME + ".closeWindow(\"bcontainer1\", 1);'><img src='data:image/jpeg;base64,"+ this.IMG + "' /></a></div> \
				</div> \
			");	
		this.center( $("#bcontainer1") );
		setTimeout(function(){
		$("#bcontainer1").remove();
		$("#blindLayer1").remove();	
		},1000);		
		}		
	this.renderBasketTable = function()
		{
		if ($('#bcontainer').length == 0)
			{		
			$("body").append(" \
				<div id='blindLayer' class='blindLayer'></div> \
				<div id='bcontainer' class='bcontainer'> \
				<div id='bsubject'>Корзина<a id='bclose' href='javascript:void(0)' onclick='" + this.objNAME + ".closeWindow(\"bcontainer\", 1);'><img src='data:image/jpeg;base64,"+ this.IMG + "' /></a></div> \
				<div id='overflw'><table class='btable' id='btable'></table></div> \
				<div id='bfooter'> <button class='bbutton' onclick=\"cart.showWinow('order', 1);\">" + local.order + "</button><button class='bbutton skip' onclick='" + this.objNAME + ".closeWindow(\"bcontainer\", 1);'>" + local.skip_order + "</button><span id='bsum'>...</span>\<div class='delivery_checkout_text'>ДОСТАВКА</div>\<div class='delivery_checkout'><div id='moscow'>...</div>  <div id='region'>...</div></div>\</div> \
				</div> \
			");	
			//<button class='bbutton' onclick=\"cart.showWinow('order', 1);ga('send', 'event', 'zakaz', 'oformit_zakaz');\">
			}
			else 
			{
			$("#btable").html("");	
			//cart.closeWindow("bcontainer", 1);	
			}
		this.center( $("#bcontainer") )	
		
		for(var idkey in this.DATA) 
			{
				
			with (this.DATA[idkey])
				{
				var productLine = '<tr class="bitem" id="wigoodline-' + id + '"  data-id-product=""> \
													<td><img src="images/'+ id +'.png"></td> \
													<td><a href="' + url + '">'+ name +'</a></td> \
													<td id="lineprice_' + id + '"class="wigoodprice">' + price + ' руб.</td> \
													<td> \
													<div class="basket_num_buttons" id="minus_' + id + '">-</div> \
													<span class="basket_num" id="basket_num_' + id + '">'+ num +'</span> \
													<div class="basket_num_buttons" id="plus_' + id + '">+</div></td> \
													<td><a href="javascript:void(0)" onclick="' + this.objNAME + '.delItem(\'' + id + '\')"><img src="data:image/jpeg;base64,'+ this.IMG + '" /></a></td> \
													</tr>';	
				}

			$("#btable").append(productLine);
			
			$(".basket_num_buttons").data("min-value");
			}
		//* кнопки +/-
		var self = this;
		for(var ids in this.IDS)
			{
			$('#minus_' + this.IDS[ids]).bind("click", function() {
			var cartItemID =  $(this).attr("id").substr(6);
			var cartNum = parseInt($("#basket_num_" + cartItemID).text());
			var cartNum = (cartNum > 1) ? cartNum - 1 : 1;
			self.DATA[cartItemID].num = cartNum;
			
			$("#basket_num_" + cartItemID).html(cartNum);
			var price = parseFloat( $("#lineprice_" + cartItemID).html() );
			$("#linesum_" + cartItemID).html( parseFloat(price * cartNum) + ' руб.' );
			
			self.sumAll();
			self.reCalc();
			
			});
			
			$('#plus_' + this.IDS[ids]).bind("click", function() {
			var cartItemID =  $(this).attr("id").substr(5);
			var cartNum = parseInt($("#basket_num_" + cartItemID).text());
			var cartNum = (cartNum < 1000000) ? cartNum + 1 : 1000000;
			self.DATA[cartItemID].num = cartNum;
			$("#basket_num_" + cartItemID).html(cartNum);
			var price = parseFloat( $("#lineprice_" + cartItemID).html() );
			$("#linesum_" + cartItemID).html( parseFloat(price * cartNum)  + ' руб.' );
			
			self.sumAll();
			self.reCalc();
              
             
			
			});
			
			}
		this.sumAll();	
		
		}

	this.sumAll = function()
		{
		var sum = 0;
		for(var idkey in this.DATA) { sum += parseFloat(this.DATA[idkey].price * this.DATA[idkey].num); }
		$("#bsum").html("Сумма: " + sum + " руб.");
		if(sum < 2500 ){
			$("#moscow").html("<span>Москва</span>: +250 руб ");	
		}else{
			$("#moscow").html("<span>Москва</span>: бесплатно ");
		}
		if(sum < 10000 ){
			$("#region").html("<span>Регионы</span>: +350 руб ");
		}else{
			$("#region").html("<span>Регионы</span>: бесплатно ");
		}
		}	
	this.center = function(obj)
		{
		
		obj.css({"top" : "0px"});	
			obj.css({"position" : "fixed"});
    		obj.css({"left" : Math.max(0, (($(window).width() - $(obj).outerWidth()) / 2) + $(window).scrollLeft()) + "px"});	
    		return obj;
		}	
	this.showWinow = function(win, blind)
		{
		if (win == 'bcontainer') {
			yaCounter48443993.reachGoal('korzina');
			gtag('event', 'korzina', {
			  'event_category' : 'zakaz',
			  
			});

		}
		if (win == 'order') {
			yaCounter48443993.reachGoal('oformit_zakaz');
			gtag('event', 'oformit_zakaz', {
			  'event_category' : 'zakaz',
			  
			});
		}
		$("#" + win).show();
		if (blind)
		$("#blindLayer").show();	
		}
	this.closeWindow = function(win, blind)
		{
		$("#" + win).hide();
		if (blind)
		$("#blindLayer").hide();	
		}
	this.delItem = function(id)
		{
		if (confirm("Удалить #" + id + "?"))
			{
			/*-------------------------------------
			  * Электронная коммерция - аналитика удаление товара из корзины
			-------------------------------------*/
			var googleRemoveFromCart = [];
			var yaRemove = [];
			$('.btable > tbody').each(function () {
				var nameDelProduct = $(this).find('.bitem').children("td:eq(1)").text();
				var priceDelProduct = $(this).find('.bitem').children("td:eq(2)").text().replace(/[^\d]/g, '');
				// Проверка отправляемых данных в google
				// console.log(
				// 	'id: ' + id,
				// 	'Название: ' + nameDelProduct,
				// 	'Цена: ' + priceDelProduct
				// )
				googleRemoveFromCart.push(
					{
						"id": id,
						"name": nameDelProduct,
						"list_name": "Basket",
						"brand": "Olaplex",
						"quantity": 1,
						"price": priceDelProduct
					}
				);
				yaRemove.push(
					{
						"id": id,
						"name": nameDelProduct,
						"quantity": 1
					}
				);
			});
			gtag('event', 'remove_from_cart', {
				"items": googleRemoveFromCart
			});
			dataLayer.push({
				"ecommerce": {
					"remove": {
						"products": yaRemove
					}
				}
			});

			$("#btable").html("");	
			delete this.DATA[id];
			this.IDS.splice( $.inArray(id, this.IDS), 1 );
			this.reCalc();
			this.renderBasketTable();
			localStorage.setItem(this.cardID, JSON.stringify(this.DATA));
			localStorage.setItem(this.cardID + "_ids", JSON.stringify(this.IDS));
			if (this.IDS.length == 0)
			{
			this.widjetObj.html(local.basket_is_empty);
			$('#basketwidjet2').html(local.basket_is_empty);
			$("#bcontainer").remove();
			$("#blindLayer").remove();
			//cart.closeWindow("bcontainer", 1);
			}
			}

		}


	
	this.sendOrder = function(domElm)	
		{
		var bodyHTML = "";
		var arr = domElm.split(",");
      	var images = $("#btable .basket_num_buttons").attr("id");
     	 var src2 = images.substr(images.length - 1);
		
		for (var f=0; f < arr.length; f++) {
		
			var test = (bodyHTML +=  this.getForm(arr[f]) + "<br><br>");	
			
			};
		$('.basket_num_buttons').remove();
		$.post( "sendmail.php?subj=Order_Olaplex", { "name": $('#formToSend input#fio').val(), "email": $('#formToSend input#email').val(),"phone": $('#formToSend input#phoneNumber').val(),"comments": $('#formToSend textarea#question').val(),"id_product": src2,"order": bodyHTML }).done(function( data ) {
		cart.closeWindow("bcontainer", 1)	
		//cart.closeWindow("order", 0);
		//alert(local.send);
		console.info('post');

		/*-------------------------------------
		  * Электронная коммерция - аналитика покупки товара
		-------------------------------------*/
		var valuePrice = $('#bsum').text().replace(/[^\d]/g, '');
		// Дата и время - уникальный индификатор для заказа (transaction_id)
		var todayDate = new Date();
		var dateString = todayDate.getDate()  + "" + (todayDate.getMonth()+1) + "" + todayDate.getFullYear() + "" +
			todayDate.getHours() + "" + todayDate.getMinutes();
		var googlePurchase = [];
		var yaPurchase = [];
		$('.btable > tbody').find('.bitem').each(function (id) {
			var namePushProduct = $(this).children("td:eq(1)").text();
			var pricePushProduct = $(this).children("td:eq(2)").text()
				.replace(/[^\d]/g, '');
			// Проверка отправляемых данных в google
			// console.log(
			// 	'Индификатор транзакции: ' + dateString,
			// 	'id: ' + id,
			// 	'Название: ' + namePushProduct,
			// 	'Цена: ' + pricePushProduct,
			// 	'Сумма заказа: ' + valuePrice
			// );
			googlePurchase.push(
				{
					"id": id,
					"name": namePushProduct,
					"list_name": "Basket",
					"brand": "Olaplex",
					"quantity": 1,
					"price": pricePushProduct
				}
			);
			yaPurchase.push(
				{
					"id": id,
					"name": namePushProduct,
					"price": Number(pricePushProduct),
					"brand": "Olaplex",
				}
			);
		});
		gtag('event', 'purchase', {
			"transaction_id": dateString,
			"affiliation": "Olaplex store",
			"value": valuePrice,
			"currency": "RUB",
			"items": googlePurchase
		});
		dataLayer.push({
			"ecommerce": {
				"purchase": {
					"actionField": {
						"id" : dateString
					},
					"products": yaPurchase
				}
			}
		});

		if ((data) == 'ok') {
		console.info('ok');
			yaCounter48443993.reachGoal('oformit_zakaz_true');
			gtag('event', 'oformit_zakaz_true', {
			  'event_category' : 'zakaz',
			  
			});
		console.info('metrika');
		console.log(test);
            $("#order").css({"top" : "40vh"});
			$('.valid-text2').text('Заказ отправлен, мы с Вами обязательно свяжемся.').fadeIn('fast'); 
			$("#order h4").hide();
			$("#formToSend").hide();
			setTimeout(function(){document.getElementById('order').style.display="none";  $('.valid-text2').text(''); $("#order h4").show();$("#formToSend").show();document.getElementById("formToSend").reset();
					console.info('hide');
},5000);
			if (cart.CONFIG.clearAfterSend)
			{
			cart.clearBasket();
					console.info('clear');

			} 
		} else {
			$('.valid-text').text('Сообщение не отправлено!').fadeIn('fast');       
		}
		return false;
		});
		}
	this.getForm = function (formId)
		{
		var formObj = document.getElementById(formId);
		var copyForm = formObj.cloneNode(true);
		
		INPUTS=[].slice.call( copyForm.querySelectorAll("input,textarea") );
	
		INPUTS.forEach(function(elm)
			{
			if  ( (elm.tagName == 'INPUT') && ((elm.type == 'text') || (elm.type == 'hidden')) )	
					{	
					var subjP = document.createElement('b');
  					subjP.innerHTML = elm.placeholder;	
					elm.parentNode.insertBefore(subjP, elm);
					var spanReplace = document.createElement("div");
					spanReplace.innerHTML = elm.value;	
					elm.parentNode.replaceChild(spanReplace, elm);	
					}
			else 
			if (elm.tagName == 'TEXTAREA')
					{
					var subjP = document.createElement('b');
					subjP.innerHTML = elm.placeholder;	
					elm.parentNode.insertBefore(subjP, elm);
					var spanReplace = document.createElement("div");
					spanReplace.innerHTML = $("#" + elm.id).val();	
					elm.parentNode.replaceChild(spanReplace, elm);		
					}
			});
	
	
	return copyForm.innerHTML;
		}
	}

