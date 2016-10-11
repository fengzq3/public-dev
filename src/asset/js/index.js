/**
 * Created by feng on 2016/10/9.
 */
//引入superSlide
require('./index.slide');
//引入datapicker
require('./bootstrap-datepicker');
require('./bootstrap-datepicker.zh-CN.min');

$(function () {
    var jsSlide = $('.js-slide');
    var datePicker = $('.js-datePicker');
    var tabC = $('.js-panelTab');

    console.log(jsSlide);
    if (jsSlide) {
        jsSlide.slide({
            titCell: '.hd ul',
            mainCell: '.bd ul',
            effect: "left",
            autoPlay: true,
            autoPage: "<li></li>"
        });
    }
//    top-info 关闭按钮
    $('.js-close-info').on('click', function () {
        $(this).parent().hide();
    });

//    添加收藏
    $('#favorite').on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        shoucang(document.title, window.location);
    });

//    datePicker 日期
    datePicker.datepicker({
        //startDate: 'today',
        language: "zh-CN",
        todayBtn: false,
        format: "yyyy-mm-dd",
        keyboardNavigation: false,
        autoclose: false
    }).on('changeDate', function (ev) {
        var url = $(ev.delegateTarget).data('action');
        console.log(url);
        window.location.href = url + '?' + ev.date.valueOf();
    });

//    自定义tab
    tabC.find('.js-tab-item').hover(function () {
        $(this).addClass('on').siblings('.on').removeClass('on');
        $(this).parent().stop().animate({'background-positionX': $(this).position().left - 15 + 'px'}, 100);
    //    显示con
        tabC.find('.panel-body ul'+$(this).attr('href')).show().siblings().hide();
    }, function () {
    });


});


function shoucang(sTitle, sURL) {
    try {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}