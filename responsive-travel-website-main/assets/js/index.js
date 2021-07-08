$(document).ready(function(){
    var lat,lon;
    var degree;     //摄氏度
    var tmpShow;    //显示的温度，因为有摄氏与华氏度的转换

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            console.log(lat+"  "+lon);

            var para = "https://free-api.heweather.com/v5/weather?city="+lon+","+lat+"&key=53153e2fed574ce19f5c089a1aacede0";
            console.log(para);
            $.getJSON(para,function(json){
                var city= json["HeWeather5"][0]["basic"]["city"];
                var cnty= json["HeWeather5"][0]["basic"]["cnty"];
                var weatherNow = json["HeWeather5"][0]["now"]["cond"]["txt"];
                degree=json["HeWeather5"][0]["now"]["tmp"];
                tmpShow = degree;

                var windShow = json["HeWeather5"][0]["now"]["wind"]["dir"]+" "+json["HeWeather5"][0]["now"]["wind"]["sc"]+"级";
                //console.log(city);
                $("#cityname").html(city+","+cnty);
                $('.weather').html(weatherNow);    
                $(".tmp").html(tmpShow);
                $(".wind").html(windShow);
            });
        });
    }

    $(".btn-tmp-change").on("click",function(){
        console.log($(".tmp").html());
        if(degree == $(".tmp").html()){
            $(".tmp").html(degree*1.8+32);
            $(".tmp-kind").html("°F");
            console.log(degree);
            console.log($(".tmp").html());
        }else{
            $(".tmp").html(degree);
            $(".tmp-kind").html("°C");
        }
    });

});
$(function(){
    //无点击效果
    $('.menus0 li').each(function(){
        $('.menus0 li').mouseover(function(){
            var index = $(this).index();
            $('.menus0 .bg').css('left',(index-1)*100+'px');
            $('.menus0 li').css('color','#000');
            $(this).css('color','#fff');
        });
        $('.menus0 li').mouseout(function(){
            $('.menus0 li').css('color','#000');
            $('.menus0 .bg').css('left','0');
            $('.menus0 li').eq(0).css('color','#fff');
        });
    })

    //菜单形式
    $('.menus1 li').each(function(){
        var flag = 0;
        var i = 0;
        $('.menus1 li').mouseover(function(){
            var index = $(this).index();
            $('.menus1 .bg').css('left',(index-1)*100+'px');
            $('.menus1 li').css('color','#000');
            $(this).css('color','#fff');
            $('.menus1 li').click(function(){
                $('.menus1 .bg').css('left',(index-1)*100+'px');
                flag = (index-1)*100;
                i=$(this).index()-1;
                $(this).css('color','#fff');
            })
            $('.menus1 li').mouseout(function(){
                $('.menus1 .bg').css('left',flag+'px');
                $('.menus1 li').css('color','#000');
                $('.menus1 li').eq(i).css('color','#fff');
            });
        });
    })


    //点击选项卡形式
    $('.menus2 li').each(function(){
        var flag = 0;
        var i = 0;
        $('.menus2 li').mouseover(function(){
            var index = $(this).index();
            $('.menus2 .bg').css('left',(index-1)*100+'px');
            $('.menus2 li').css('color','#000');
            $(this).css('color','#fff');
            $('.menus2 li').click(function(){
                $('.menus2 .bg').css('left',(index-1)*100+'px');
                flag = (index-1)*100;
                i=$(this).index()-1;
                $(this).css('color','#fff');
                $('.menus2 .menus-list').removeClass('show')
                $('.menus2 .menus-list').eq(index-1).addClass('show')
                $('.tab1').removeClass('show')
                $('.tab1').eq(index-1).addClass('show')
            })
            $('.menus2 li').mouseout(function(){
                $('.menus2 .bg').css('left',flag+'px');
                $('.menus2 li').css('color','#000');
                $('.menus2 li').eq(i).css('color','#fff');
            });
        });
    })

    //移入型选项卡
    $('.menus3 li').each(function(){
        $('.menus3 li').mouseover(function(){
            var index = $(this).index();
            $('.menus3 .bg').css('left',(index-1)*100+'px');
            $('.menus3 li').css('color','#000');
            $(this).css('color','#fff');
            $('.tab2').removeClass('show')
            $('.tab2').eq(index-1).addClass('show')
        });
    })
})
