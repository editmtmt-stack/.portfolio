// ===== Javascript =====

window.onload = function() {
  let Animation = function() {
  //アイコン位置取得
  let pageTop = document.getElementById('p-top');

  //要素の位置座標を取得
  let rect = pageTop.getBoundingClientRect();
  //topからの距離
  let scrollTop = rect.top + window.pageYOffset;

  if(scrollTop > 1000){
    pageTop.classList.add('show');
   }  else {
    pageTop.classList.remove('show');
  } 
 }
    window.addEventListener('scroll', Animation);
}

// ===== jQuery =====

$(function(){

  // イメージ要素のフェードイン効果
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 200){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
          }
      });
  });

  $(function() {
    var topBtn = $('#p-top');    
    topBtn.hide();
    //スクロールが1000に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
  });


});

  /* ハンバーガーメニュー */
$(function(){
  $('.ham-menu').on('click', function() {
    $(this).toggleClass('ham-menu-active');
    $('.nav-res').toggleClass('is-active');
  });

  $('.nav-res a').on('click', function() {
    $('.ham-menu').toggleClass('ham-menu-active');
    $('.nav-res').toggleClass('is-active');
  });
})  