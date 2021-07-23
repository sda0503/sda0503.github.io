var input1 = document.querySelector('#color1');
var input2 = document.querySelector('#color2');



input1.addEventListener('input', function()
{
    // console.log('input value to: ', input1.value); //코드 보는 콘솔
    $('#color1_label h1').text(input1.value);
    $('.color1_circle').css('background-color',input1.value);
    var gradient = 'linear-gradient(135deg,'+  input1.value + ',' + input2.value  + ')';
    $('.mix_color').css('background',gradient);

});
input2.addEventListener('input', function()
{
    // console.log('input value to: ', input2.value); //코드 보는 콘솔
    $('#color2_label h1').text(input2.value);
    $('.color2_circle').css('background-color',input2.value);
    var gradient = 'linear-gradient(135deg,'+  input1.value + ',' + input2.value  + ')';
    $('.mix_color').css('background',gradient);
});