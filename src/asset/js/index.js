/**
 * Created by feng on 2016/10/9.
 */
//引入superSlide
require('./index.slide');

$(function () {
    var jsSlide = $('.js-slide');

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

});