function play_se(){
    var warning = new Audio('warning.mp3');
    var voice = new Audio('voice.mp3');
    warning.play();
    voice.play();
    navigator.vibrate([200, 100, 200, 100, 200, 100, 200])
}


$(function(){
    // ページ読み込みが完了すると実行


   // ブラウザバック禁止
   history.pushState(null, null, null);
   $(window).on('popstate', function(e){
       if (!e.orinialEvent.state){
           play_se();
           history.poushState(null, null, null);
           return;
       }
   })



    // モダール表示
    $('.modal').modal({dismissible: false});
    $('#alert').modal('open');
    $('#close').click(function(){
        $('#alert').modal('close');
        play_se();
    })

    // 端末情報取得
    var device = navigator.userAgent.match(/Andoroid|iPhone|iPad|Windows|Mac/);
    if (device == null){
        device = '端末';
    }
    $('#device').text(device);

    //　カウントダウン処理
    var time = 200;
    setInterval(function(){
        time--;
        $('#timer').text(time);
    }, 1000);
});