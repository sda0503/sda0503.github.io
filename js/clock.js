const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval (()=> {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    //데이터 가져오기
    year = day.getFullYear();
    month = day.getMonth() + 1;
    date = day.getDate();
    hour = day.getHours();
    min = day.getMinutes();
    sec = day.getSeconds();

    //00으로 바꿔주기
    month = month < 10 ? '0' + month : month;
    date = date < 10 ? '0' + date : date;
    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    //데이터 넣기
    $('.year').text(year);
    $('.month').text(month);
    $('.day').text(date);

    $('.hh').text(hour);
    $('.mm').text(min);
    $('.ss').text(sec);
})