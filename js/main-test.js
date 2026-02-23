$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $('.hamburger').on('click', function () {
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });
  
  // #maskのエリアをクリックした時にメニューを閉じる
  $('#mask').on('click', function () {
    $('#header').removeClass('open');
  });

  // リンクをクリックした時にメニューを閉じる
  $('#menu-sp a').on('click', function () {
    $('#header').removeClass('open');
  });
  $('#fixed-menu-sp a').on('click', function () {
    $('#header').removeClass('open');
  });

  /*=================================================
  フェード
  ===================================================*/
  // スクロールして表示領域に入ったらclass付与
  $(".js-fadeUp").on("inview", function () {
    $(this).addClass("is-inview");
  });
  $(".p").on("inview", function () {
    $(this).addClass("is-inview");
  });

  /*=================================================
  スムーススクロール
  ===================================================*/
  $('a[href^="#"]').click(function () {
    let speed = 1500;
    let type = 'swing';

    let href = $(this).attr("href");
    let target = $(href == "#index" ? 'html' : href);

    // 画面幅でヘッダー高さを切り替え
    let headerHeight = $(window).width() <= 768 ? 60 : 80;

    let position = target.offset().top - headerHeight;

    $('body,html').animate({ scrollTop: position }, speed, type);
    return false;
  });

  /*=================================================
  追従ヘッダー
  ===================================================*/
  $(window).scroll(function () {
		// 画面スクロールの位置を取得
		var scroll = $(window).scrollTop();

		// スクロール位置が200pxを超えると追従ヘッダーを表示
		if (scroll > 200) {
			$('#js-fixed-header').addClass('is-show');
		}
		else {
			$('#js-fixed-header').removeClass('is-show');
		}
	});
});




