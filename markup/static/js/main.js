window._heightBlock = function(block) {
    var PaddingBottom, PaddingTop;
    block = $(block);
    PaddingTop = block.css('padding-top');
    PaddingBottom = block.css('padding-bottom');

    if(PaddingTop) PaddingTop = +PaddingTop.replace('px', '');
    if(PaddingBottom) PaddingBottom = +PaddingBottom.replace('px', '');
    return block.height() + PaddingTop + PaddingBottom;
};

var footerHeight = null,
    footer = $('.page__footer'),
    page__wrapper = $('.page__wrapper'),
    page__buffer = $('.page__buffer');

var checkFooterHeight = function(){
    footerHeight = _heightBlock(footer);
    page__wrapper.css("margin-bottom", "-"+footerHeight+"px");
    page__buffer.css("height", ""+footerHeight+"px");
};

checkFooterHeight();
$(window).on({
    load: function () {
        checkFooterHeight();
        // checkHeaderFix();
        IScrollFn();
    },
    scroll: function () {
        // var scrollTop = $(window).scrollTop();
        // if(scrollTop > 200){
        //     linkTop.addClass('active');
        // }else{
        //     linkTop.removeClass('active');
        // }
        // checkHeaderFix();
    },
    resize: function () {
        popoverFn();
        // checkHeaderFix();
        checkFooterHeight();
    }
});


$('.openSelectCoin__after, .openSelectCoin__btnClear').click(function () {
    $('.openSelectCoin').add('.openSelectCoin__content').removeClass('active');
});

$('.obm-select__choice').click(function () {
    var _this = $(this),
        elContent = _this.data('el');

    $('.openSelectCoin').add(elContent).addClass('active');
});