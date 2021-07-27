function popup(){
    mini_popup = `<div class='popup'><div class="mini">원하는 곳에 붙여 넣으세요</div></div>`;
    $('body').append(mini_popup);
    $('.popup').fadeIn('slow');
    setInterval (()=>{
        $('.popup').fadeOut('slow');
    },2000);
}