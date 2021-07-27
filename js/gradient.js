var input1 = document.querySelector('#color1');
var input2 = document.querySelector('#color2');

input1.addEventListener('input', function(){
    // console.log('input value to: ', input1.value); //코드 보는 콘솔
    $('#color1_label h1').text(input1.value);
    $('.color1_circle').css('background-color',input1.value);
    var gradient = 'linear-gradient(135deg,'+  input1.value + ',' + input2.value  + ')';
    $('.mix_color').css('background',gradient);

});
input2.addEventListener('input', function(){
    // console.log('input value to: ', input2.value); //코드 보는 콘솔
    $('#color2_label h1').text(input2.value);
    $('.color2_circle').css('background-color',input2.value);
    var gradient = 'linear-gradient(135deg,'+  input1.value + ',' + input2.value  + ')';
    $('.mix_color').css('background',gradient);
});

$('.mix_color').click(function() {
    //색상 데이터 가져오기
    color = $(this).attr('style') == null ? 'background: white;' : $(this).attr('style');
    //문자열 자르기 정규식 사용
    color_name = color.replace(/background: /g,'');
    
    //바꾼 데이터 넣고 복사하기
    copyText = $('.mix_color input').val(color_name);
    $(copyText).select();
    document.execCommand('copy');

    //복사 했습니다
    popup();
})