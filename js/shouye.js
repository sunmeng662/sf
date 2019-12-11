$(()=>{
    // 顶通特效
    // $(()=>{
    //     $('.banner').hide();
    //     $('.topshow').show();
    //     setInterval(()=>{
    //         $('.topshow').slideUp()
    //     },3600);
    //     setTimeout(()=>{
    //         $('.banner').show()
    //     },3600);
    // })
    // $('.topclose').click(()=>{
    //     $('.banner').slideUp(2000);
    // })
    // 收货城市
    $('.off').click(()=>{
        $('.dd1').hide();
    })
    $('.middle li a').click(function(){
        $('.city').text($(this).text())
    })
    $('.huadong li a').click(function(){
        $('.city').text($(this).text())
    })
    // 左侧三级菜单
            $('.item').mouseenter(function(){
                $(this).css('background','#fff');
                $(this).find('.track').css('color','#76ac25');
                $(this).find('.subCat a').css('color','#76ac25');
            });
            $('.item').mouseleave(function(){
                $(this).css('background','#76ac25');
                $(this).find('.track').css('color','#fff');
                $(this).find('.subCat a').css('color','#ddeac8');
            })
        $('.item').mouseenter(function(){
            $(this).find('.i-cm').show();
        })
        $('.item').mouseleave(function(){
            $(this).find('.i-cm').hide();
        })
        $('.i-right').click(function(){
            $(this).parent('.i-cm').hide()
        })
    })
$(()=>{
            // 轮播图
            var _index = 0;
            var imgs = $('.wrap li')
            var timer = null;
            var dot = $('.index ol li')
            var len = imgs.length - 1;
            // 轮播函数
            function play(){
                imgs.eq(_index).fadeIn().siblings().fadeOut();
                dot.eq(_index).addClass('active').siblings().removeClass('active');
            }
            // 定时轮播
            function auto(){
                timer = setInterval(()=>{
                    _index++;
                    if(_index>len){
                        _index = 0;
                    }
                    play();
                },2000)
            }
            auto()
})