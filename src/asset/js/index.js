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
    var listTab = $('.js-listTab');
    var listSelect = $('.js-listSelect');
    var checkAll = $('.js-checkAll');
    var inputData = $('.js-inputDate');
    var navSlide = $('.js-navSlide');
    var datePic2 = $('.js-datePicker-2');

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

//    input datePicker
    inputData.datepicker({
        //startDate: 'today',
        language: "zh-CN",
        todayBtn: false,
        format: "yyyy-mm-dd",
        keyboardNavigation: false,
        autoclose: false
    });

    //双date picker
    if(datePic2){
        $( "#from" ).datepicker({
            language: "zh-CN",
            format: "yyyy-mm-dd",
            changeMonth: true,
            numberOfMonths: 2,
            autoclose: true
        }).on('changeDate',function (e) {
            console.log(e);
        });
        $( "#to" ).datepicker({
            language: "zh-CN",
            format: "yyyy-mm-dd",
            changeMonth: true,
            numberOfMonths: 2,
            autoclose: true
            // onClose: function( selectedDate ) {
            //     $( "#from" ).datepicker( "option", "maxDate", selectedDate );
            // }
        }).on('changeDate',function (e) {

        });
    }


//    自定义tab
    tabC.find('.js-tab-item').hover(function () {
        $(this).addClass('on').siblings('.on').removeClass('on');
        $(this).parent().stop().animate({'background-positionX': $(this).position().left - 15 + 'px'}, 100);
        //    显示con
        tabC.find('.panel-body ul' + $(this).attr('href')).show().siblings().hide();
    }, function () {
    });

//    listTab
    listTab.find('.js-tab-item').hover(function () {
        $(this).addClass('active').parent().siblings().find('a.active').removeClass('active');
        console.log($(this).attr('href'));
        listTab.find('.panel-body ' + $(this).attr('href')).show().siblings().hide();
    }, function () {
    });

//    list 页面form
    listSelect.on('change', function () {
        $(this).parents('form').submit();
        //window.location.href = $(this).parents('form').attr('action');
    });

//    checkbox 全选
    checkAll.on('change', function () {
        var $check = $('.' + $(this).data().check);
        var isChecked = $(this).prop('checked');

        $check.each(function () {
            console.log($(this).data().check);
            $(this).prop('checked', isChecked);
            if ($(this).data().check) {
                $('.' + $(this).data().check).prop('checked', isChecked);
            }
        });

    });

//    关于我们左侧伸缩菜单
    navSlide.on('click',function () {
        $(this).toggleClass('on').next('ul').toggleClass('hide');
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