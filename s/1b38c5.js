try{(function($){"use strict";$(window).load(function(){$(".zass_flexslider","#content").flexslider({controlNav:false,directionNav:true,animation:"fade",animationSpeed:1500,smoothHeight:true,prevText:"",nextText:"",touch:true,pauseOnHover:true});if(typeof zass_supersized_conf!=="undefined"){var imagesArr=new Array;for(var i=0;i<zass_supersized_conf.images.length;i++){imagesArr[i]={image:zass_supersized_conf.images[i]}}$.supersized({slideshow:1,autoplay:1,start_slide:1,stop_loop:0,random:0,slide_interval:5e3,transition:1,transition_speed:1300,new_window:0,pause_hover:0,keyboard_nav:0,performance:1,image_protect:1,min_width:0,min_height:0,vertical_center:1,horizontal_center:1,fit_always:0,fit_portrait:0,fit_landscape:0,slide_links:false,thumb_links:0,thumbnail_navigation:0,slides:imagesArr,progress_bar:0,mouse_scrub:0})}if(typeof zass_masonry_settings!=="undefined"){$(".zass_blog_masonry","#main").isotope({itemSelector:"#main div.blog-post"})}});$(document).ready(function(){if(typeof zass_ajax_search!=="undefined"){var touch=$("html.touch");if(touch.length==0){new $.ZassAjaxSearch}}if(typeof zass_isotope_infinite!=="undefined"){var $container=$("div.portfolios","#main").imagesLoaded(function(){$container.isotope({itemSelector:"#main div.portfolio-unit"})});$("div.zass-portfolio-categories","#main").on("click","a",function(){var filterValue=$(this).attr("data-filter");$container.isotope({filter:filterValue})});$("div.zass-portfolio-categories","#main").each(function(i,buttonGroup){var $buttonGroup=$(buttonGroup);$buttonGroup.on("click","a",function(){$buttonGroup.find(".is-checked").removeClass("is-checked");$(this).addClass("is-checked")})});var $ininite_scrl_path="";if(zass_isotope_infinite.perm_structure){var $the_path=zass_isotope_infinite.path;if($the_path.slice(-1)==="/"){$the_path=$the_path.substr(0,$the_path.length-1)}$ininite_scrl_path=[$the_path+"/page/","/"]}else{$ininite_scrl_path=undefined}$("div.portfolios","#main").infinitescroll({navSelector:"#main div.portfolio-nav",nextSelector:".portfolio-nav a.next_page",itemSelector:"#main div.portfolio-unit",prefill:true,path:$ininite_scrl_path,loading:{selector:"#main div.content_holder",finishedMsg:"<em>"+zass_isotope_infinite.finishedMsg+"</em>",msgText:"<em>"+zass_isotope_infinite.msgText+"</em>"}},function(arrayOfNewElems){$container.isotope("insert",arrayOfNewElems);$container.imagesLoaded(function(){$container.isotope("layout");$("a.portfolio-lightbox-link").magnificPopup({mainClass:"mfp-fade",type:"image"})})})}$("a.zass-magnific-gallery-item").magnificPopup({mainClass:"mfp-fade",type:"image",gallery:{enabled:true}});$("a.portfolio-lightbox-link").magnificPopup({mainClass:"mfp-fade",type:"image"});if(typeof zass_owl_carousel_cat!=="undefined"){var is_rtl=false;if(zass_rtl.is_rtl==="true"){is_rtl=true}$(".zass_woo_categories_shop.zass-owl-carousel","#main").owlCarousel({rtl:is_rtl,responsiveClass:true,responsive:{0:{items:1},600:{items:2},768:{items:zass_owl_carousel_cat.columns<3?zass_owl_carousel_cat.columns:"3"},1024:{items:zass_owl_carousel_cat.columns<4?zass_owl_carousel_cat.columns:"4"},1280:{items:zass_owl_carousel_cat.columns}},dots:false,loop:false,nav:true,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]})}if(typeof zass_owl_carousel!=="undefined"){var is_rtl=false;if(zass_rtl.is_rtl==="true"){is_rtl=true}$("div.zass-owl-carousel","#content:not(.has-sidebar)").owlCarousel({rtl:is_rtl,responsiveClass:true,responsive:{0:{items:1},600:{items:2},768:{items:3},1024:{items:3},1280:{items:4}},dots:false,nav:true,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]})}if(typeof zass_owl_carousel!=="undefined"){var is_rtl=false;if(zass_rtl.is_rtl==="true"){is_rtl=true}$("div.zass-owl-carousel","#content.has-sidebar").owlCarousel({rtl:is_rtl,responsiveClass:true,responsive:{0:{items:1},600:{items:2},768:{items:3},1024:{items:3},1280:{items:3}},dots:false,nav:true,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]})}if(typeof zass_quickview!=="undefined"){$("a.zass-quick-view-link","#content").on("click",function(e){$(this).closest("div.prod_hold").addClass("loading");var product_id=$(this).attr("data-id");var data={action:"zass_quickview",productid:product_id};$.post(zass_quickview.zass_ajax_url,data,function(response){$.magnificPopup.open({mainClass:"zass-quick-view-lightbox mfp-fade",items:{src:'<div class="zass-quickview-product-pop">'+response+"</div>",type:"inline"},callbacks:{open:function(){$(".zass-quickview-product-pop form").wc_variation_form()},change:function(){$(".zass-quickview-product-pop form").wc_variation_form()}},removalDelay:300});$(".prod_hold.loading").removeClass("loading")});e.preventDefault()})}if(typeof zass_variation_prod_cloudzoom!=="undefined"){if(jQuery("#zoom1").length){jQuery(document).on("update_variation_values",function(){jQuery("a.reset_variations").on("click",jQuery(this),function(event){var o_href=$("#zoom1").attr("data-o_href");$("#zoom1").attr("href",o_href);jQuery("#zoom1").CloudZoom()});jQuery("table.variations select option").on("click",jQuery(this),function(event){if(jQuery("#zoom1").data("zoom")){jQuery("#zoom1").data("zoom").destroy();jQuery("#zoom1").CloudZoom();return false}})})}}if(typeof zass_ytplayer_conf!=="undefined"){$("div.zass_bckgr_player","html.no-touch").YTPlayer()}});$.ZassAjaxSearch=function(options){var defaults={delay:200,minChars:3,scope:"#header div#search"};this.options=$.extend({},defaults,options);this.scope=$(this.options.scope);this.timer=false;this.lastVal="";this.bind_keyup()};$.ZassAjaxSearch.prototype={bind_keyup:function(){this.scope.on("keyup","#s",$.proxy(this.attempt_search,this))},attempt_search:function(e){clearTimeout(this.timer);if(e.currentTarget.value.trim().length==""){var result=$(".ajax_search_result");if(result)result.remove()}if(e.currentTarget.value.length>=this.options.minChars&&this.lastVal!=$.trim(e.currentTarget.value)){this.timer=setTimeout($.proxy(this.execute_search,this,e),this.options.delay)}},execute_search:function(e){var obj=this,currentField=$(e.currentTarget).attr("autocomplete","off"),form=currentField.parents("form:eq(0)"),results=form.find(".ajax_search_result"),loading=$('<div class="ajax_loading"><span class="ajax_loading_inner"></span></div>'),action=form.attr("action"),values=form.serialize();values+="&action=zass_ajax_search";if(action.indexOf("?")!=-1){action=action.split("?");values+="&"+action[1]}if(!results.length)results=$('<div class="ajax_search_result"></div>').appendTo(form);if(results.find(".ajax_not_found").length&&e.currentTarget.value.indexOf(this.lastVal)!=-1){return}this.lastVal=e.currentTarget.value;$.ajax({url:zass_main_js_params.admin_url,type:"POST",data:values,beforeSend:function(){if(!currentField.next("div.ajax_loading").length){loading.insertAfter(currentField)}},success:function(response){if(response==0)response="";results.html(response)},complete:function(){loading.remove()}})}};var scrolltotop={setting:{startline:500,scrollto:0,scrollduration:1e3,fadeduration:[500,100]},controlHTML:'<span class="scroltopcontrol"></span>',controlattrs:{offsetx:10,offsety:10},anchorkeyword:"#top",state:{isvisible:false,shouldvisible:false},scrollup:function(){if(!this.cssfixedsupport)this.$control.css({opacity:0});var dest=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);if(typeof dest=="string"&&jQuery("#"+dest).length==1)dest=jQuery("#"+dest).offset().top;else dest=0;this.$body.animate({scrollTop:dest},this.setting.scrollduration)},keepfixed:function(){var $window=jQuery(window);var controlx=$window.scrollLeft()+$window.width()-this.$control.width()-this.controlattrs.offsetx;var controly=$window.scrollTop()+$window.height()-this.$control.height()-this.controlattrs.offsety;this.$control.css({left:controlx+"px",top:controly+"px"})},togglecontrol:function(){var scrolltop=jQuery(window).scrollTop();if(!this.cssfixedsupport)this.keepfixed();this.state.shouldvisible=scrolltop>=this.setting.startline?true:false;if(this.state.shouldvisible&&!this.state.isvisible){this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]);this.state.isvisible=true}else if(this.state.shouldvisible==false&&this.state.isvisible){this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]);this.state.isvisible=false}},init:function(){jQuery(document).ready(function($){var mainobj=scrolltotop;var iebrws=document.all;mainobj.cssfixedsupport=!iebrws||iebrws&&document.compatMode=="CSS1Compat"&&window.XMLHttpRequest;mainobj.$body=window.opera?document.compatMode=="CSS1Compat"?$("html"):$("body"):$("html,body");mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+"</div>").css({position:mainobj.cssfixedsupport?"fixed":"absolute",bottom:mainobj.controlattrs.offsety,right:mainobj.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"Scroll Back to Top"}).on("click",function(){mainobj.scrollup();return false}).appendTo("body");if(document.all&&!window.XMLHttpRequest&&mainobj.$control.text()!="")mainobj.$control.css({width:mainobj.$control.width()});mainobj.togglecontrol();$('a[href="'+mainobj.anchorkeyword+'"]').on("click",function(){mainobj.scrollup();return false});$(window).bind("scroll resize",function(e){mainobj.togglecontrol()})})}};scrolltotop.init()})(window.jQuery);if(typeof zass_quickview!=="undefined"){(function($,window,document,undefined){$.fn.wc_variation_form=function(){$.fn.wc_variation_form.find_matching_variations=function(product_variations,settings){var matching=[];for(var i=0;i<product_variations.length;i++){var variation=product_variations[i];var variation_id=variation.variation_id;if($.fn.wc_variation_form.variations_match(variation.attributes,settings)){matching.push(variation)}}return matching};$.fn.wc_variation_form.variations_match=function(attrs1,attrs2){var match=true;for(var attr_name in attrs1){if(attrs1.hasOwnProperty(attr_name)){var val1=attrs1[attr_name];var val2=attrs2[attr_name];if(val1!==undefined&&val2!==undefined&&val1.length!==0&&val2.length!==0&&val1!==val2){match=false}}}return match};this.unbind("check_variations update_variation_values found_variation");this.find(".reset_variations").unbind("click");this.find(".variations select").unbind("change focusin");$form=this.on("click",".reset_variations",function(event){$(this).closest(".variations_form").find(".variations select").val("").change();var $sku=$(this).closest(".product").find(".sku"),$weight=$(this).closest(".product").find(".product_weight"),$dimensions=$(this).closest(".product").find(".product_dimensions");if($sku.attr("data-o_sku"))$sku.text($sku.attr("data-o_sku"));if($weight.attr("data-o_weight"))$weight.text($weight.attr("data-o_weight"));if($dimensions.attr("data-o_dimensions"))$dimensions.text($dimensions.attr("data-o_dimensions"));return false}).on("change",".variations select",function(event){$variation_form=$(this).closest(".variations_form");$variation_form.find("input[name=variation_id]").val("").change();$variation_form.trigger("woocommerce_variation_select_change").trigger("check_variations",["",false]);$(this).blur();if($().uniform&&$.isFunction($.uniform.update)){$.uniform.update()}}).on("focusin touchstart",".variations select",function(event){$variation_form=$(this).closest(".variations_form");$variation_form.trigger("woocommerce_variation_select_focusin").trigger("check_variations",[$(this).attr("name"),true])}).on("check_variations",function(event,exclude,focus){var all_set=true,any_set=false,showing_variation=false,current_settings={},$variation_form=$(this),$reset_variations=$variation_form.find(".reset_variations");$variation_form.find(".variations select").each(function(){if($(this).val().length===0){all_set=false}else{any_set=true}if(exclude&&$(this).attr("name")===exclude){all_set=false;current_settings[$(this).attr("name")]=""}else{value=$(this).val();current_settings[$(this).attr("name")]=value}});var product_id=parseInt($variation_form.data("product_id")),all_variations=$variation_form.data("product_variations");if(!all_variations)all_variations=window.product_variations.product_id;if(!all_variations)all_variations=window.product_variations;if(!all_variations)all_variations=window["product_variations_"+product_id];var matching_variations=$.fn.wc_variation_form.find_matching_variations(all_variations,current_settings);if(all_set){var variation=matching_variations.shift();if(variation){$variation_form.find("input[name=variation_id]").val(variation.variation_id).change();$variation_form.trigger("found_variation",[variation])}else{$variation_form.find(".variations select").val("");if(!focus)$variation_form.trigger("reset_image");alert(wc_add_to_cart_variation_params.i18n_no_matching_variations_text)}}else{$variation_form.trigger("update_variation_values",[matching_variations]);if(!focus)$variation_form.trigger("reset_image");if(!exclude){$variation_form.find(".single_variation_wrap").slideUp(200)}}if(any_set){if($reset_variations.css("visibility")==="hidden")$reset_variations.css("visibility","visible").hide().fadeIn()}else{$reset_variations.css("visibility","hidden")}}).on("reset_image",function(event){var $product=$(this).closest(".product"),$product_img=$product.find("div.images img:eq(0)"),$product_link=$product.find("div.images a.zoom:eq(0)"),o_src=$product_img.attr("data-o_src"),o_title=$product_img.attr("data-o_title"),o_alt=$product_img.attr("data-o_alt"),o_href=$product_link.attr("data-o_href");if(o_src!==undefined){$product_img.attr("src",o_src)}if(o_href!==undefined){$product_link.attr("href",o_href)}if(o_title!==undefined){$product_img.attr("title",o_title);$product_link.attr("title",o_title)}if(o_alt!==undefined){$product_img.attr("alt",o_alt)}}).on("update_variation_values",function(event,variations){$variation_form=$(this).closest(".variations_form");$variation_form.find(".variations select").each(function(index,el){current_attr_select=$(el);if(!current_attr_select.data("attribute_options"))current_attr_select.data("attribute_options",current_attr_select.find("option:gt(0)").get());current_attr_select.find("option:gt(0)").remove();current_attr_select.append(current_attr_select.data("attribute_options"));current_attr_select.find("option:gt(0)").removeClass("active");var current_attr_name=current_attr_select.attr("name");for(var num in variations){if(typeof variations[num]!="undefined"){var attributes=variations[num].attributes;for(var attr_name in attributes){if(attributes.hasOwnProperty(attr_name)){var attr_val=attributes[attr_name];if(attr_name==current_attr_name){if(attr_val){attr_val=$("<div/>").html(attr_val).text();attr_val=attr_val.replace(/'/g,"\\'");attr_val=attr_val.replace(/"/g,'\\"');current_attr_select.find('option[value="'+attr_val+'"]').addClass("active")}else{current_attr_select.find("option:gt(0)").addClass("active")}}}}}}current_attr_select.find("option:gt(0):not(.active)").remove()});$variation_form.trigger("woocommerce_update_variation_values")}).on("found_variation",function(event,variation){var $variation_form=$(this),$product=$(this).closest(".product"),$product_img=$product.find("div.images img:eq(0)"),$product_link=$product.find("div.images a.zoom:eq(0)"),o_src=$product_img.attr("data-o_src"),o_title=$product_img.attr("data-o_title"),o_alt=$product_img.attr("data-o_alt"),o_href=$product_link.attr("data-o_href"),variation_image=variation.image_src,variation_link=variation.image_link,variation_title=variation.image_title,variation_alt=variation.image_alt;$variation_form.find(".variations_button").show();$variation_form.find(".single_variation").html(variation.price_html+variation.availability_html);if(o_src===undefined){o_src=!$product_img.attr("src")?"":$product_img.attr("src");$product_img.attr("data-o_src",o_src)}if(o_href===undefined){o_href=!$product_link.attr("href")?"":$product_link.attr("href");$product_link.attr("data-o_href",o_href)}if(o_title===undefined){o_title=!$product_img.attr("title")?"":$product_img.attr("title");$product_img.attr("data-o_title",o_title)}if(o_alt===undefined){o_alt=!$product_img.attr("alt")?"":$product_img.attr("alt");$product_img.attr("data-o_alt",o_alt)}if(variation_image&&variation_image.length>1){$product_img.attr("src",variation_image).attr("alt",variation_alt).attr("title",variation_title);$product_link.attr("href",variation_link).attr("title",variation_title)}else{$product_img.attr("src",o_src).attr("alt",o_alt).attr("title",o_title);$product_link.attr("href",o_href).attr("title",o_title)}var $single_variation_wrap=$variation_form.find(".single_variation_wrap"),$sku=$product.find(".product_meta").find(".sku"),$weight=$product.find(".product_weight"),$dimensions=$product.find(".product_dimensions");if(!$sku.attr("data-o_sku"))$sku.attr("data-o_sku",$sku.text());if(!$weight.attr("data-o_weight"))$weight.attr("data-o_weight",$weight.text());if(!$dimensions.attr("data-o_dimensions"))$dimensions.attr("data-o_dimensions",$dimensions.text());if(variation.sku){$sku.text(variation.sku)}else{$sku.text($sku.attr("data-o_sku"))}if(variation.weight){$weight.text(variation.weight)}else{$weight.text($weight.attr("data-o_weight"))}if(variation.dimensions){$dimensions.text(variation.dimensions)}else{$dimensions.text($dimensions.attr("data-o_dimensions"))}$single_variation_wrap.find(".quantity").show();if(!variation.is_purchasable||!variation.is_in_stock||!variation.variation_is_visible){$variation_form.find(".variations_button").hide()}if(!variation.variation_is_visible){$variation_form.find(".single_variation").html("<p>"+wc_add_to_cart_variation_params.i18n_unavailable_text+"</p>")}if(variation.min_qty)$single_variation_wrap.find("input[name=quantity]").attr("min",variation.min_qty).val(variation.min_qty);else $single_variation_wrap.find("input[name=quantity]").removeAttr("min");if(variation.max_qty)$single_variation_wrap.find("input[name=quantity]").attr("max",variation.max_qty);else $single_variation_wrap.find("input[name=quantity]").removeAttr("max");if(variation.is_sold_individually==="yes"){$single_variation_wrap.find("input[name=quantity]").val("1");$single_variation_wrap.find(".quantity").hide()}$single_variation_wrap.slideDown(200).trigger("show_variation",[variation])}).on("click",".zass-qty-plus",function(event){var input=$(this).parent().find("input[type=number]");if(isNaN(input.val())){input.val(0)}input.val(parseInt(input.val())+1)}).on("click",".zass-qty-minus",function(event){var input=$(this).parent().find("input[type=number]");if(isNaN(input.val())){input.val(1)}if(input.val()>1){input.val(parseInt(input.val())-1)}});$form.trigger("wc_variation_form");return $form};$(function(){if(typeof wc_add_to_cart_variation_params==="undefined")return false;$(".zass-quickview-product-pop .variations_form").wc_variation_form();$(".zass-quickview-product-pop .variations_form .variations select").change()})})(jQuery,window,document)}if(typeof zass_map_config!=="undefined"){var directionsDisplayCnt;var directionsServiceCnt=new google.maps.DirectionsService;var polylineOptionsActualCnt=new google.maps.Polyline({strokeColor:"#585858",strokeOpacity:.7,strokeWeight:4});function initializeCnt(){var latlng=new google.maps.LatLng(zass_map_config.lattitude,zass_map_config.longitude);directionsDisplayCnt=new google.maps.DirectionsRenderer;directionsDisplayCnt=new google.maps.DirectionsRenderer({suppressMarkers:true,polylineOptions:polylineOptionsActualCnt});var myOptionsCnt={zoom:17,center:latlng,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:true,scrollwheel:false};var mapCnt=new google.maps.Map(document.getElementById("zass_map_canvas"),myOptionsCnt);directionsDisplayCnt.setMap(mapCnt);var image=new google.maps.MarkerImage(zass_map_config.images+"marker.png",new google.maps.Size(45,48),new google.maps.Point(0,0),new google.maps.Point(25,40));var shadow=new google.maps.MarkerImage(zass_map_config.images+"shadow.png",new google.maps.Size(26,10),new google.maps.Point(0,0),new google.maps.Point(10,4));var marker=new google.maps.Marker({position:latlng,map:mapCnt,shadow:shadow,title:zass_map_config.location_title,icon:image});toggleBounce();google.maps.event.addListener(marker,"click",toggleBounce);function toggleBounce(){if(marker.getAnimation()!=null){marker.setAnimation(null)}else{marker.setAnimation(google.maps.Animation.BOUNCE)}}}function calcRouteOnContacts(){var start=document.getElementById("routeStart").value;var end=zass_map_config.lattitude+","+zass_map_config.longitude;var request={origin:start,destination:end,travelMode:google.maps.DirectionsTravelMode.DRIVING};directionsServiceCnt.route(request,function(response,status){if(status==google.maps.DirectionsStatus.OK){directionsDisplayCnt.setDirections(response)}})}google.maps.event.addDomListener(window,"load",initializeCnt)}}catch(e){console.log(e)}