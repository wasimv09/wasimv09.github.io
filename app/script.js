$(document).ready(function(){

    $('.toggle-wrap').click(function(){
        $('.toggle').toggleClass('cross');
        $('nav').toggleClass('shownav');

        var wh = window.pageYOffset;

        if( $('.toggle').hasClass('bg') && wh > 200 ){
            $('.toggle').toggleClass('bg');
        }
    });

    $('nav a').click(function(){
        $('nav').toggleClass('shownav');
        $('.toggle').toggleClass('cross');
    });

    $(window).bind("scroll", function(){
        var wh = window.pageYOffset;
        if( wh > 400 ){
            $('.toggle').addClass('bg');
        }else{
            $('.toggle').removeClass('bg');
        }
    });

    var wh = $(window).height();
    var navH = $('nav').height();
    var homeH = $('#home').height();
    var aboutH = $('#about').height();
    var skillH = $('#skill-set').height();
    var demopH = $('#demo-p').height();
    var contactH = $('#contact').height();

    console.log(wh);
    console.log(aboutH);

    var addH = 100;
    var newwh = wh - 50;
    var navHeight = navH + addH;
    var homeHeight = homeH + addH;
    var aboutHeight = aboutH + addH;
    var skillHeight = skillH + addH;
    var demopHeight = demopH + addH;
    var contactHeight = contactH + addH;

    if( newwh > navH ){
        $('nav').css({height:wh});
    }else{
        $('nav').css({height:navH});
    }

    if( newwh > homeH ){
        $('#home').css({height:wh});
    }else{
        $('#home').css({height:homeH});
    }

    if( newwh > aboutH ){
        $('#about').css({height:wh});
    }else{
        $('#about').css({height:aboutHeight});
    }

    if( newwh > skillH ){
        $('#skill-set').css({height:wh});
    }else{
        $('#skill-set').css({height:skillHeight});
    }

    if( newwh > demopH ){
        $('#demo-p').css({height:wh});
    }else{
        $('#demo-p').css({height:demopHeight});
    }

    if( newwh > contactH ){
        $('#contact').css({height:wh});
    }else{
        $('#contact').css({height:contactHeight});
    }

});


//snowfall
window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    var numOfParticles = 100;
    var particlesArray = [];

    for(var i = 0; i < numOfParticles; i++){
        particlesArray.push({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 4 + 2,
            d: Math.random() * numOfParticles
        });
    }

    function drawParticles() {
        ctx.clearRect(0,0,W,H);
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.beginPath();

        for(var i = 0; i < numOfParticles; i++){
            var p = particlesArray[i];
            ctx.moveTo(p.x,p.y);
            ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
        }
        ctx.fill();
        fall();
    }

    function fall() {
        var angle = 0;

        for(var i = 0;i< numOfParticles; i++){
            angle += 0.1;

            var p = particlesArray[i];

            p.x += Math.abs(Math.sin(angle) + 0.1);
            p.y += Math.abs(Math.cos(angle) * 3);

            if(p.x > W || p.x < 0 || p.y > H){
                p.x = Math.random() * W;
                p.y =- 10;
            }

        }

    }

    setInterval(drawParticles, 15);
}
