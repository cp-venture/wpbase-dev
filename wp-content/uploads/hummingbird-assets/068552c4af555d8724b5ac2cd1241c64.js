/**handles:wcmp_single_product_multiple_vendors**/
jQuery(document).ready(function(r){var a;a="undefined"!=typeof themeSingleProductMultivendor?themeSingleProductMultivendor:"#tab-singleproductmultivendor";var t=r(a+" .rowbody").length;if(4<parseInt(t)){var o=0;r(a+" .rowbody").each(function(){4<=parseInt(o)&&r(this).hide(),o=parseInt(o)+1});r.post(wcmp_single_product_multiple_vendors_script_data.ajax_url,{action:"get_loadmorebutton_single_product_multiple_vendors"},function(t){r(a).append(t)})}r("body").on("click","button#wcmp-load-more-button",function(t){r(a+" .rowbody").each(function(){r(this).show("slow")}),r(this).hide("slow")}),r("#wcmp_multiple_product_sorting").change(function(t){r(a+" .ajax_loader_class_msg").show();var o=r(this).val(),e=r(this).attr("attrid");if(""!=o){var n={action:"single_product_multiple_vendors_sorting",sorting_value:o,attrid:e};r.post(wcmp_single_product_multiple_vendors_script_data.ajax_url,n,function(t){r(a+" .rowbody").each(function(){r(this).remove()}),r(t).insertAfter(a+" .rowhead");var o=0,e=r(a+" .rowbody").length;4<parseInt(e)&&"none"!=r(a+" #wcmp-load-more-button").css("display")&&r(a+" .rowbody").each(function(){4<=parseInt(o)&&r(this).hide(),o=parseInt(o)+1}),r(a+" .ajax_loader_class_msg").hide()})}}),r(".goto_more_offer_tab").click(function(t){t.preventDefault(),r(".singleproductmultivendor_tab").hasClass("active")||r(".singleproductmultivendor_tab a, #tab_singleproductmultivendor").click(),0<r(".woocommerce-tabs").length&&r("html, body").animate({scrollTop:r(".woocommerce-tabs").offset().top-120},1500)})});