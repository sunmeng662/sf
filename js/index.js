$(()=>{
    // 顶通特效
    $(()=>{
        $('.banner').hide();
        $('.topshow').show();
        setInterval(()=>{
            $('.topshow').slideUp()
        },3600);
        setTimeout(()=>{
            $('.banner').show()
        },3600);
    })
    $('.topclose').click(()=>{
        $('.banner').slideUp(2000);
    })
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
            var imgs = $('.wrap img')
            var timer = null;
            var dot = $('.index ol li')
            var len = imgs.length - 1;
            var bg = $('.index dl dd')
            var cindex = 0;
            // 轮播函数
            play();
            function play(){
                bg.eq(_index).fadeIn()
                bg.eq(_index).siblings().fadeOut();
                imgs.eq(_index).fadeIn()
                imgs.eq(_index).siblings().fadeOut();
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
                },3500)
            }
            auto()
            // 鼠标移入切换图片
            dot.mouseenter(function(){
                clearInterval(timer);
                cindex = $(this).index();
                bg.eq(cindex).fadeIn().siblings().fadeOut();
                imgs.eq(cindex).fadeIn().siblings().fadeOut();
                dot.eq(cindex).addClass('active').siblings().removeClass('active')
            }).mouseleave(function(){
                _index = cindex
                auto()
            })
            // 获取数据、插入节点
            let big = document.getElementsByClassName('bbig')[0];
        $.getJSON('../json/index.json',(data)=>{
            for(let j=0;j<data.length;j++){
                let html = `<li>
                <a href="javascript:;">${data[j].title}</a>
                <div class="price">
                    <span>
                        <i>￥</i>
                        <b>${data[j].price}</b>
                    </span>
                </div>
                <div class="img"><img src="${data[j].src}" alt=""></div>
                <div class="btn">
                    <a href="shoppingcar.html">加入购物车</a>
                </div>
            </li>`
            big.innerHTML += html;
        // 购物车
        $('.bbig li').mouseenter(function(){
            $(this).find('.btn').show()
        })
        $('.bbig li').mouseleave(function(){
            $(this).find('.btn').hide();
        })
            }

        })
        let pList = document.getElementsByClassName('pList')[0];
        let pList0 = document.getElementsByClassName('pList')[0];
        let pList1 = document.getElementsByClassName('pList')[1];
        let pList2 = document.getElementsByClassName('pList')[2];
        let pList3 = document.getElementsByClassName('pList')[3];
        $.getJSON('../json/index2.json',(data)=>{
            for(let j=0;j<8;j++){
                let html = `<li>
                <div class="box">
                    <img src="${data[j].src}" alt="">
                </div>
                <div class="title">
                    <a href="javascript:;">${data[j].title}</a>
                </div>
                <div class="price">
                    <span>
                        <i>￥</i>
                        <b>${data[j].price}</b>
                    </span>
                </div>
                <div class="btno">
                        <a href="shoppingcar.html">加入购物车</a>
                    </div>
            </li>`;
            pList0.innerHTML += html;
        // 购物车
        $('.pList li').mouseenter(function(){
            $(this).find('.btno').show()
        })
        $('.pList li').mouseleave(function(){
            $(this).find('.btno').hide();
        })
            }
        })
        $.getJSON('../json/index2.json',(data)=>{
            for(let j=8;j<16;j++){
                let html = `<li>
                <div class="box">
                    <img src="${data[j].src}" alt="">
                </div>
                <div class="title">
                    <a href="javascript:;">${data[j].title}</a>
                </div>
                <div class="price">
                    <span>
                        <i>￥</i>
                        <b>${data[j].price}</b>
                    </span>
                </div>
                <div class="btno">
                        <a href="shoppingcar.html">加入购物车</a>
                    </div>
            </li>`;
            pList1.innerHTML += html;
        // 购物车
        $('.pList li').mouseenter(function(){
            $(this).find('.btno').show()
        })
        $('.pList li').mouseleave(function(){
            $(this).find('.btno').hide();
        })
            }
        })
        $.getJSON('../json/index2.json',(data)=>{
            for(let j=16;j<24;j++){
                let html = `<li>
                <div class="box">
                    <img src="${data[j].src}" alt="">
                </div>
                <div class="title">
                    <a href="javascript:;">${data[j].title}</a>
                </div>
                <div class="price">
                    <span>
                        <i>￥</i>
                        <b>${data[j].price}</b>
                    </span>
                </div>
                <div class="btno">
                        <a href="shoppingcar.html">加入购物车</a>
                    </div>
            </li>`;
            pList2.innerHTML += html;
        // 购物车
        $('.pList li').mouseenter(function(){
            $(this).find('.btno').show()
        })
        $('.pList li').mouseleave(function(){
            $(this).find('.btno').hide();
        })
            }
        })
        $.getJSON('../json/index2.json',(data)=>{
            for(let j=24;j<32;j++){
                let html = `<li>
                <div class="box">
                    <img src="${data[j].src}" alt="">
                </div>
                <div class="title">
                    <a href="javascript:;">${data[j].title}</a>
                </div>
                <div class="price">
                    <span>
                        <i>￥</i>
                        <b>${data[j].price}</b>
                    </span>
                </div>
                <div class="btno">
                        <a href="shoppingcar.html">加入购物车</a>
                    </div>
            </li>`;
            pList3.innerHTML += html;
        // 购物车
        $('.pList li').mouseenter(function(){
            $(this).find('.btno').show()
        })
        $('.pList li').mouseleave(function(){
            $(this).find('.btno').hide();
        })
            }
        })
        // 商品按钮
        $('.rimg').mouseenter(()=>{
            $('.edg .btn').css('background','              url(../img/index_icon_new.png)               no-repeat -204px -33px')
        })
        $('.rimg').mouseleave(()=>{
            $('.edg .btn').css('background','              url(../img/index_icon_new.png)               no-repeat -204px 0px')
        })
        let llist = document.getElementsByClassName('llist')[0];
        $.getJSON('../json/index2.json',(data)=>{
            for(let j=32;j<48;j++){
                let html = `            <li>
                <div class="tu">
                    <img src="${data[j].src}" alt="">
                </div>
                <div class="title">
                    <a href="javascript:;">${data[j].title}</a>
                </div>
                <div class="price">
                    <span>
                        <i>￥</i>
                        <b>${data[j].price}</b>
                    </span>
                </div>
                <div class="btnn">
                    <a href="shoppingcar.html">加入购物车</a>
                </div>
            </li>`;
            llist.innerHTML += html;
        // 购物车
        $('.llist li').mouseenter(function(){
            $(this).find('.btnn').show()
        })
        $('.llist li').mouseleave(function(){
            $(this).find('.btnn').hide();
        })
            }
        })
        // 底部图
        $('.side').mouseenter(function(){
            $('.prev').show().click(()=>{
                $('.side ul').css('left','-170px');
                $('.slideControls span').eq(0).addClass('cur').siblings().removeClass('cur');
            })
            $('.next').show().click(()=>{
                $('.side ul').css('left','0px');
                $('.slideControls span').eq(1).addClass('cur').siblings().removeClass('cur')
            })
        })
        $('.side').mouseleave(function(){
            $('.prev').hide();
            $('.next').hide();
        })
        // 底部轮播
        let sbox = document.getElementsByClassName('sbox')[0];
        $.getJSON('../json/index2.json',(data)=>{
            for(let j=48;j<data.length;j++){
                let html = `                    <li>
                <div class="sharec">
                    <div class="l">
                        <img src="${data[j].src}" alt="">
                    </div>
                    <div class="r">
                        <p><a href="javascript:;">${data[j].p}</a></p>
                        <p class="title">
                        ${data[j].title}
                        </p>
                    </div>
                </div>
            </li>`;
            sbox.innerHTML += html;
            }
        })
        let t = 0;
        let time = setInterval(()=>{
            t = t-130;
            $('.sbox').css('top',t)
            if(t<-780){
                t=0;
            }
        },2000)
})