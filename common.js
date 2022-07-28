$(function(){
    $('.ham').click(function(){
        $(this).toggleClass('on')
        $('.gnb').toggleClass('on')
    })

    $('.gnb>li').click(function () {
        if ($(this).attr('class') != 'on') {
          $('.sub').slideUp()
          $(this).find('.sub').slideToggle()
          $('.gnb>li').removeClass('on')
          $(this).addClass('on')
        } else {
          $(this).find('.sub').slideToggle()
          $('.gnb>li').removeClass('on')
        }
      })
})