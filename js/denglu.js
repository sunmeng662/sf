$(function(){
    // input时点击边框特效
    // 手机号
    $('.phoneipt input').keydown(()=>{
        $('.phone em').show()
        $('.errorbox').hide();
        })
        $('.phone em').click(()=>{
            $('.phoneipt input').val('');
            $('.phone em').hide();
        })
        $('.phoneipt input').focus(function(){
            $('.phone').css('border','1px solid #69AF04');
            $('.phoneicon').css({
                'border-right':'1px solid #69AF04',
                'background-color':'#8DC63F'
            });
            $('.phone .icon').css('background', 'url(../img/login-icon25.png) no-repeat')
        }).blur(function(){
            let rel = /^[1][3,4,5,7,8][0-9]{9}$/;
            let phoneval = $(this).val();
            if(rel.test(phoneval)&&phoneval !== ''){
                $('.errorbox').hide();
                $('.phone').css('border','1px solid #BDBDBD');
                $('.phoneicon').css({
                    'border-right':'1px solid #BDBDBD',
                    'background-color':'#f0f0f0'
                });
                $('.phone .icon').css('background', 'url(../img/login-icon24.png) no-repeat');
            }else if(phoneval ==''){
                $('.errorbox').hide();
                $('.phone').css('border','1px solid #BDBDBD');
                $('.phoneicon').css({
                    'border-right':'1px solid #BDBDBD',
                    'background-color':'#f0f0f0'
                });
                $('.phone .icon').css('background', 'url(../img/login-icon24.png) no-repeat');
                $('.phone em').hide();
            }else{
                $('.errorbox').show();
                $('.errorbox .span2').text('手机号输入有误')
                $('.phone').css('border','1px solid #FF4422');
                $('.phoneicon').css({
                    'border-right':'1px solid #FF4422',
                    'background-color':'#f0f0f0'
                });
                $('.phone .icon').css('background', 'url(../img/login-icon26.png) no-repeat');
            }
        })
            // 验证码
            $('.code-ipt input').keydown(()=>{
                $('.e').show()
                $('.errorbox').hide();
            })
            $('.e').click(()=>{
                $('.code-ipt input').val('');
                $('.e').hide();
            })
            $('.code-ipt input').focus(function(){
                $('.code-ipt .zimg').hide();
                $('.errorbox').hide();
                // $('.e').hide();
                $('.loginCode').css('border','1px solid #69AF04');
                $('.code-icon').css({
                    'border-right':'1px solid #69AF04',
                    'background-color':'#69AF04'
                });
                $('.loginCode .icon').css('background', 'url(../img/login-icon3.png) no-repeat');
                let rel = /^[1][3,4,5,7,8][0-9]{9}$/;
                let phoneval = $('.phoneipt input').val();
                if(rel.test(phoneval)){
                    $('.errorbox').hide();
                    $('.phone').css('border','1px solid #BDBDBD');
                    $('.phoneicon').css({
                        'border-right':'1px solid #BDBDBD',
                        'background-color':'#f0f0f0'
                    });
                    $('.phone .icon').css('background', 'url(../img/login-icon24.png) no-repeat');
                    // $('.phone em').hide();
                    $('.loginCode').css('border','1px solid #69AF04');
                    $('.code-icon').css({
                        'border-right':'1px solid #69AF04',
                        'background-color':'#8DC63F'
                    });
                    $('.loginCode .icon').css('background', 'url(../img/login-icon25.png) no-repeat')
                    $('.huo').attr("disabled",false).css("pointer-events","auto");
                }else if(phoneval ==''){
                    $('.huo').attr("disabled",true).css("pointer-events","none");
                    $('.errorbox').show();
                    $('.errorbox .span2').text('请填写手机号')
                    $('.phone').css('border','1px solid #FF4422');
                    $('.phoneicon').css({
                        'border-right':'1px solid #FF4422',
                        'background-color':'#f0f0f0'
                    });
                    $('.phone .icon').css('background', 'url(../img/login-icon26.png) no-repeat');
                    // $('.phone em').show();
                }else{
                    $('.huo').attr("disabled",true).css("pointer-events","none");
                    $('.errorbox').show();
                    $('.errorbox .span2').text('手机号输入有误')
                    $('.phone').css('border','1px solid #FF4422');
                    $('.phoneicon').css({
                        'border-right':'1px solid #FF4422',
                        'background-color':'#f0f0f0'
                    });
                    $('.phone .icon').css('background', 'url(../img/login-icon26.png) no-repeat');
                    // $('.phone em').show();
                }
            }).blur(()=>{
                if($('.code-ipt input').val()!==''&& $('.code-ipt input').val() === num){
                    $('.code-ipt .zimg').show();
                    $('.errorbox').hide();
                    $('.e').hide();
                    $('.loginCode').css('border','1px solid #BDBDBD');
                    $('.code-icon').css({
                        'border-right':'1px solid #BDBDBD',
                        'background-color':'#f0f0f0'
                    });
                    $('.loginCode .icon').css('background', 'url(../img/login-icon2.png) no-repeat');
                }else if( $('.code-ipt input').val() == ''){
                    $('.errorbox').hide();
                    // $('.e').hide();
                    $('.loginCode').css('border','1px solid #BDBDBD');
                    $('.code-icon').css({
                        'border-right':'1px solid #BDBDBD',
                        'background-color':'#f0f0f0'
                    });
                    $('.loginCode .icon').css('background', 'url(../img/login-icon2.png) no-repeat');
                }else{
                    $('.code-ipt .zimg').hide();
                    $('.errorbox').show();
                    $('.errorbox .span2').text('验证码输入有误')
                    $('.loginCode').css('border','1px solid #FF4422');
                    $('.code-icon').css({
                        'border-right':'1px solid #FF4422',
                        'background-color':'#f0f0f0'
                    });
                    $('.loginCode .icon').css('background', 'url(../img/login-icon4.png) no-repeat');
                    // $('.e').show();
                }
            })
        // 获取验证码
        let num = '';
        $('.huo').click(()=>{
            if(($('.errorbox').css('display')=='block' && $('.errorbox .span2').text()!=='验证码输入有误')||$('.phoneipt input').val() == ''){
                $('.huo').attr("disabled",true).css("pointer-events","none");
            }else{
                $('.huo').attr("disabled",false).css("pointer-events","auto");
                num = '';
                for(i=0;i<4;i++){
                    let n = parseInt(Math.random()*9+1);
                    num += n;
                }
                alert('【顺丰优选】验证码为：'+num);
                $('.huo').hide();
                $('.send').show();
                let t = 4;
                $('.send i').text(5)
                let timer = setInterval(()=>{
                    // console.log(t)
                    if(t>0){
                        $('.huo').attr("disabled",true).css("pointer-events","none");
                        $('.huo').hide();
                        $('.send i').text(t)
                    }else{
                        $('.huo').attr("disabled",false).css("pointer-events","auto");
                        $('.huo').show();
                        $('.send').hide();
                        t=5;
                        clearInterval(timer)
                    }
                    t=t-1;
                },1000)
            }
        })
        // 协议
        let n = 0;
        $('.xieyi i').click(function(){
            if(n%2==0){
                $(this).css(                        'background',' url(../img/login-icon18.png) no-repeat');
                $('.errorbox').hide();
            }else{
                $(this).css(                        'background',' url(../img/login-icon19.png) no-repeat');
                $('.errorbox').show();
                $('.errorbox .span2').text('请同意《顺丰优选用户协议》')
            }
            n++;
        })
        // 登录按钮
        $('.btn').click(()=>{
            if($('.errorbox').css('display') == 'none' && $('.phoneipt input').val() !== '' && $('.code-ipt input').val() !== '' && $('.xieyi i').css( 'background') == 'rgba(0, 0, 0, 0) url("http://127.0.0.1/shunfeng/img/login-icon18.png") no-repeat scroll 0% 0% / auto padding-box border-box'){
                let user = $('.phoneipt input').val();
                console.log(user)
                $.get('../php/denglu.php',`user=${user}`,x=>{
                    // console.log(x)
                    let b = JSON.parse(x);
                    if(b.err == 1){
                        $('.errorbox').show();
                        $('.errorbox .span2').text('此手机号还未注册');
                        $('.btn').text('前往注册...')
                        setInterval(()=>{
                            window.location.href = 'zhuce.html'
                        },2000)
                    }else{
                        // 存储用户信息
                        localStorage.setItem('user',user)
                        $('.btn').text('登录中...')
                        setInterval(()=>{
                            window.location.href = 'shouye.html'
                        },2000)
                    }
                })
            }
        })
        // 账号密码登录
        $('#change1').click(()=>{
            $('#ula').hide();
            $('#ulb').show();
        })
        $('#change2').click(()=>{
            $('#ula').show();
            $('#ulb').hide();
        })
})
 