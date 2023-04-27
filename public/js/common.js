
$(".header_menu").click(function() {
    if($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(".header_nav_first").removeClass("active");
        $("body").css("overflow","visible");
        $(".header_nav_second").each(function(){
            $(this).removeClass("active");
        })
    }else {
        $(this).addClass("active");
        $(".header_nav_first").addClass("active");
        $("body").css("overflow","hidden");
    }
})

$(".header_nav_first_title").click(function(){
    if($(window).width() < 1200) {
        $(this).parents("li").find(".header_nav_second").addClass("active");
    }
})

$(".header_nav_second_title").click(function(){
    if($(window).width() < 1200) {
        $(this).parents(".header_nav_second").removeClass("active");
    }
})

function navLink(){
    $(".header_nav_first_title").each(function(){
        let link = $(this).attr("data-link");
        console.log(link);
        if($(window).width() < 1200) {
            $(this).attr("href","javascript:void(0)");
        }else {
            $(this).attr("href",link);
        }
    })
}
navLink();
$(window).on("resize scroll",function(){
    navLink();
})

// gototop
$(".gototop").click(function(){
    $("html, body").animate({scrollTop: 0}, 300);
})

// btn-save
$(".btn-save").click(function(){
    $(this).toggleClass("active");
})

// member_product table
function memberProductTable() {
    if($(window).width()<992) {
        $(".member_product_table").each(function(){
            if(!$(this).hasClass("nochange")) {
                $(this).find(".table-title").each(function(){
                    let thisHight = $(this).find(".member_product_td").height();
                })

                let length = $(this).find(".member_product_tr").find(".table-title").length;
                titleHeight = $(this).find(".table-title").eq(0).height();
                contentHeight = $(this).find(".table-content").eq(0).height();
                for (let i=0; i<length; i++) {
                    let titleHeight, contentHeight, maxHeight;
                    titleHeight = $(this).find(".member_product_tr .table-title").eq(i).find(".member_product_td").height();
                    contentHeight = $(this).find(".member_product_tr .table-content").eq(i).find(".member_product_td").height();
                    if(titleHeight > contentHeight ) {
                        maxHeight = titleHeight + 16;
                    }else {
                        maxHeight = contentHeight + 16;
                    }
                    $(this).find(".table-title").eq(i).css("height",maxHeight + "px");
                    $(this).find(".table-content").eq(i).css("height",maxHeight + "px");
                }
            }
        })
    }else {
        $(".member_product_td, .member_product_tr").each(function(){
            $(this).css("height","auto");
            $(this).find(".table-content").css("height","auto");
            $(this).find(".table-title").css("height","auto");
        })
    }
}
memberProductTable();
$(window).on("resize scroll",function(){
    memberProductTable();
})



// tab_bg
$(".tab_bg_active").click(function(){
    $(this).parents(".tab_bg").find(".nav-tabs").slideToggle(300);
})
$(".tab_bg").find(".nav-link").click(function(){
    memberProductTable();
    if($(window).width()<992 && !$(this).parents(".tab_bg").hasClass("scroll")) {
        let text = $(this).text();
        $(this).parents(".tab_bg").find(".tab_bg_active span").text(text);
        $(this).parents(".nav-tabs").slideUp(300);
    }
})

$(".tab_bg").find('button[data-toggle="tab"]').on('shown.bs.tab', function (event) {
    memberProductTable();
})

// font size
$(".fontSize_item").click(function(){
    if($(this).hasClass("lg")) {
        $("body").removeClass("font-sm").addClass("font-lg");
    }else if($(this).hasClass("sm")) {
        $("body").removeClass("font-lg").addClass("font-sm");
    }else if($(this).hasClass("normal")) {
        $("body").removeClass("font-lg").removeClass("font-sm");
    }
})

// 看密碼
$(".btn-eye").click(function(){
    if($(this).hasClass("open")) {
        $(this).removeClass("open");
        $(this).parents(".login_input").find("input").attr("type","password");
    }else {
        $(this).addClass("open");
        $(this).parents(".login_input").find("input").attr("type","text");
    }
})

// 勾選
$(".member_check_item").click(function(){
    if(!$(this).hasClass("invalid")) {
        $(this).toggleClass("active");
    }
})

// qa
$(".qa_title").click(function(){
    $(this).parents(".qa_item").toggleClass("active");
    $(this).parents(".qa_item").find(".qa_answer").slideToggle(300);
})

// price
function price(){
    let priceNum;
    let priceWidth;
    $(".product_price").each(function(){
        priceNum = $(this).find(".product_price_item").length;
        if($(this).hasClass("report_purchase")) {
            if($(window).width() >= 768) {
                if(priceNum <= 5) {
                    priceWidth = 100 / priceNum;
                }else {
                    priceWidth = 20;
                }
            }else {
                if(priceNum <= 2) {
                    priceWidth = 100 / priceNum;
                }else {
                    priceWidth = 50;
                }
            }
        }else {
            if($(window).width() >= 768) {
                if(priceNum <= 4) {
                    priceWidth = 100 / priceNum;
                }else {
                    priceWidth = 25;
                }
            }else {
                if(priceNum <= 2) {
                    priceWidth = 100 / priceNum;
                }else {
                    priceWidth = 50;
                }
            }
        }
    })
    $(".product_price").find(".product_price_item").each(function(){
        $(this).css("width",priceWidth + "%");
    })
}
price();
$(window).on("resize scroll",function(){
    price();
})


// radio
$(".radio_circle").click(function(){
    $(this).addClass("active");
    $(this).parents(".radio_item").siblings(".radio_item").find(".radio_circle").removeClass("active");
})

$(".member_term").each(function(){
    $(this).on("scroll",function(){
        let padding;
        if($(window).width() >= 576) {
            padding = 49;
        }else {
            padding = 29;
        }
        let top = $(this).scrollTop();
        let heightOuter = $(this).height();
        let heightInner = $(this).find(".member_term_inner").height();
        let bottom = top + heightOuter - padding;
        if(bottom >= heightInner) {
            $(this).parents(".member_section").find(".member_check_item").removeClass("invalid");
        }
        console.log("top=" + top + ",heightOuter=" + heightOuter + ",heightInner=" + heightInner + ",bottom=" + bottom);
    })
})




// select
$(".select_active").click(function(){
    $(this).toggleClass("active");
    $(this).parents(".select").find(".select_hide").slideToggle(300);
})
$(document).click(function (event) {
    var select = $(".select");
    if (!select.is(event.target) && select.has(event.target).length === 0) {
        $(".select_active").removeClass("active");
        $(".select_hide").slideUp(300);
    }
});
$(".select_hide li").click(function(){
    let text = $(this).text();
    $(this).parents(".select").find(".select_active p").text(text);
    $(this).parents(".select").find(".select_active").removeClass("active");
    $(this).parents(".select").find(".select_hide").slideUp(300);
})

let memberTabTop;
memberTabTop = $(".member_tab.stick").offset().top;
$(window).on("resize",function(){
    memberTabTop = $(".member_tab.stick").offset().top;
})
$(window).on("resize scroll",function(){
    memberProductTable();

    // member_tab
    let scrollTop = $(window).scrollTop();
    let headerHeight = $(".header").height();
    let top = memberTabTop - headerHeight;
    let headerTop;
    let memberTabFixedTop;
    if(scrollTop >= top) {
        $(".member_tab.stick").addClass("scrollDown");
        $(".header").addClass("shadow-none");
        $(".member_tab_height").show();
        if(scrollTop <= memberTabTop) {
            headerTop = top - scrollTop;
            memberTabFixedTop = headerHeight + top - scrollTop;
        }else {
            headerTop = headerHeight * (-1);
            memberTabFixedTop = 0;
        }
    }else{
        $(".member_tab.stick").removeClass("scrollDown");
        $(".header").removeClass("shadow-none");
        $(".member_tab_height").hide();
        headerTop = 0;
    }
    $(".header").css("top",headerTop);
    $(".member_tab.stick").css("top",memberTabFixedTop);
})


