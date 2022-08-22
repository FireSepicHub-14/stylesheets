{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<!-- ↓クリップボード操作のために使用するjsを読み込む　( https://clipboardjs.com/ ) -->
<script src="https://cdn.jsdelivr.net/clipboard.js/1.5.13/clipboard.min.js"></script>
 
<script> */}
var clipboard = new Clipboard('.copy_btn');    //clipboard.min.jsが動作する要素をクラス名で指定
 
//クリックしたときの挙動
$(function(){
    $('.copy_btn').click(function(){
        $(this).addClass('copied');    //ボタンの色などを変更するためにクラスを追加
        $(this).text('コピーしました');    //テキストの書き換え
    });
});
// </script>
