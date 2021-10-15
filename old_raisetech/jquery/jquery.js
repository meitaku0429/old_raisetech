$(function () {
    $(".js-hamburger").on("click", function () {
        $(this).toggleClass("open");
        $(".gnav1").toggleClass("open");
        $(".gnav1").slideToggle(200);
    });

    // ハンバーガーメニューのマイナスにする操作
    $(".gnav1").hover(function () {
        $(this).removeClass("close");
    },
        function () {
            $(this).addClass("close");
        });
});

$(window).on("resize", function () {
    if (window.matchMedia('(max-width: 1175px)').matches) {
        // ウィンドウサイズ1175px以下のときの処理
        $(".gnav1").removeClass("open");
        $(".js-hamburger").removeClass("open")
        $(".gnav1").slideUp(200);
    }
});

