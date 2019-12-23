$(() => {
    // 收货城市
    $('.off').click(() => {
        $('.dd1').hide();
    })
    $('.middle li a').click(function () {
        $('.city').text($(this).text())
    })
    $('.huadong li a').click(function () {
        $('.city').text($(this).text())
    })
    // 左侧三级菜单
    $('#mainNav .item').mouseenter(function () {
        $(this).css('background', '#fff');
        $(this).find('.track').css('color', '#76ac25');
        $(this).find('.subCat a').css('color', '#76ac25');
    });
    $('#mainNav .item').mouseleave(function () {
        $(this).css('background', '#76ac25');
        $(this).find('.track').css('color', '#fff');
        $(this).find('.subCat a').css('color', '#ddeac8');
    })
    $('#mainNav .item').mouseenter(function () {
        $(this).find('.i-cm').show();
    })
    $('#mainNav .item').mouseleave(function () {
        $(this).find('.i-cm').hide();
    })
    $('.i-right').click(function () {
        $(this).parent('.i-cm').hide()
    })
    // 展开菜单
    $('.categories .dt').mouseenter(() => {
        $('.categories .dd').slideDown().mouseleave(() => {
            $('.categories .dd').slideUp();
        })
    })
    // 获取商品信息
    let listall = document.getElementsByClassName('list-all')[0];
    $.getJSON('../json/list.json', (data) => {
        let a = '';
        let b = '';
        for (let i = 0; i < data.length; i++) {
            let html = `                    <li>
            <div class="wrap">
                <div class="pic">
                    <a href="javascript:;">
                        <img src="
                        ${data[i].src}" alt="">
                    </a>
                </div>
                <div class="price">
                    <span>
                        <span class="now">
                            ￥
                            <strong>${data[i].price}</strong>
                        </span>
                    </span>
                </div>
                <div class="titlea">
                    <a href="javascript:;">${data[i].titlea}</a>
                </div>
                <div class="titleb">${data[i].titleb}</div>
                <div class="commit">
                    <a href="javascript:;">已有${data[i].commit}人评价</a>
                    <div class="owner_shop_list">自营</div>
                </div>
                <div class="action">
                    <div class="p-num">
                        <span><a href="javascript:;">-</a></span>
                        <span>
                            <input type="text" value="1">
                        </span>
                        <span><a href="javascript:;">+</a></span>
                    </div>
                </div>
                <div class="btn">
                    <a href="shoppingcar.html">加入购物车</a>
                </div>
            </div>
        </li>`
            a += html;
            listall.innerHTML = a;
            b = a;
        }
        $('.p-list li').mouseenter(function () {
            $(this).addClass('curr').siblings().removeClass('curr');
            $(this).find('.wrap').addClass('w').siblings().removeClass('w');
        })
        $('.p-list li').mouseleave(function () {
            $(this).removeClass('curr');
            $(this).find('.wrap').removeClass('w');
        })
        $('.up').click(() => {
            let up = HandleData.priceSort(data, true);
            a = '';
            for (let j = 0; j < up.length; j++) {
                let html1 = `                    <li>
                    <div class="wrap">
                        <div class="pic">
                            <a href="javascript:;">
                                <img src="
                                ${up[j].src}" alt="">
                            </a>
                        </div>
                        <div class="price">
                            <span>
                                <span class="now">
                                    ￥
                                    <strong>${up[j].price}</strong>
                                </span>
                            </span>
                        </div>
                        <div class="titlea">
                            <a href="javascript:;">${up[j].titlea}</a>
                        </div>
                        <div class="titleb">${up[j].titleb}</div>
                        <div class="commit">
                            <a href="javascript:;">已有${up[j].commit}人评价</a>
                            <div class="owner_shop_list">自营</div>
                        </div>
                        <div class="action">
                            <div class="p-num">
                                <span><a href="javascript:;">-</a></span>
                                <span>
                                    <input type="text" value="1">
                                </span>
                                <span><a href="javascript:;">+</a></span>
                            </div>
                        </div>
                        <div class="btn">
                            <a href="shoppingcar.html">加入购物车</a>
                        </div>
                    </div>
                </li>`
                a += html1;
                listall.innerHTML = a;
            }
                            // 跳转详情页
        $('.p-list li').click(function () {
            let stitle = $(this).find('.titlea').text();
            // console.log(stitle)
            localStorage.setItem('title',stitle)
            window.location.href = 'detail.html'
        })
        })
        $('.ping').click(() => {
            let com = HandleData.commitSort(data, false);
            a = '';
            for (let j = 0; j < com.length; j++) {
                let html2 = `                    <li>
                    <div class="wrap">
                        <div class="pic">
                            <a href="javascript:;">
                                <img src="
                                ${com[j].src}" alt="">
                            </a>
                        </div>
                        <div class="price">
                            <span>
                                <span class="now">
                                    ￥
                                    <strong>${com[j].price}</strong>
                                </span>
                            </span>
                        </div>
                        <div class="titlea">
                            <a href="javascript:;">${com[j].titlea}</a>
                        </div>
                        <div class="titleb">${com[j].titleb}</div>
                        <div class="commit">
                            <a href="javascript:;">已有${com[j].commit}人评价</a>
                            <div class="owner_shop_list">自营</div>
                        </div>
                        <div class="action">
                            <div class="p-num">
                                <span><a href="javascript:;">-</a></span>
                                <span>
                                    <input type="text" value="1">
                                </span>
                                <span><a href="javascript:;">+</a></span>
                            </div>
                        </div>
                        <div class="btn">
                            <a href="shoppingcar.html">加入购物车</a>
                        </div>
                    </div>
                </li>`
                a += html2;
                listall.innerHTML = a;
            }
                            // 跳转详情页
        $('.p-list li').click(function () {
            let stitle = $(this).find('.titlea').text();
            // console.log(stitle)
            localStorage.setItem('title',stitle)
            window.location.href = 'detail.html'
        })
        })
        $('.new').click(() => {
            let day = HandleData.commitSort(data, true);
            a = '';
            for (let j = 0; j < day.length; j++) {
                let html3 = `                    <li>
                    <div class="wrap">
                        <div class="pic">
                            <a href="javascript:;">
                                <img src="
                                ${day[j].src}" alt="">
                            </a>
                        </div>
                        <div class="price">
                            <span>
                                <span class="now">
                                    ￥
                                    <strong>${day[j].price}</strong>
                                </span>
                            </span>
                        </div>
                        <div class="titlea">
                            <a href="javascript:;">${day[j].titlea}</a>
                        </div>
                        <div class="titleb">${day[j].titleb}</div>
                        <div class="commit">
                            <a href="javascript:;">已有${day[j].commit}人评价</a>
                            <div class="owner_shop_list">自营</div>
                        </div>
                        <div class="action">
                            <div class="p-num">
                                <span><a href="javascript:;">-</a></span>
                                <span>
                                    <input type="text" value="1">
                                </span>
                                <span><a href="javascript:;">+</a></span>
                            </div>
                        </div>
                        <div class="btn">
                            <a href="shoppingcar.html">加入购物车</a>
                        </div>
                    </div>
                </li>`
                a += html3;
                listall.innerHTML = a;
            }
                            // 跳转详情页
        $('.p-list li').click(function () {
            let stitle = $(this).find('.titlea').text();
            // console.log(stitle)
            localStorage.setItem('title',stitle)
            window.location.href = 'detail.html'
        })
   
        })
        $('.xiao').click(() => {
                listall.innerHTML = b;
        })
        $('.sort li').click(function(){
            $(this).addClass('curr').siblings().removeClass('curr')
        })
                // 跳转详情页
        $('.p-list li').click(function () {
            let stitle = $(this).find('.titlea').text();
            // console.log(stitle)
            localStorage.setItem('title',stitle)
            window.location.href = 'detail.html'
        })
    })
    $(window).scroll(function(){
        if($(window).scrollTop()>300){
            $('.r-filter').addClass('xitop')
        }else
        {
                $('.r-filter').removeClass('xitop')
        }
    })
            // 获取用户名
            $(()=>{
                let u = localStorage.getItem('user');
                if(u){
                    $('.login .dl').hide();
                    $('.user span').show();
                    $('.user span').html(u);
                    $('.newregbox').hide();
                    $('.out').show();
                }else{
                    $('.login .dl').show();
                    $('.user').hide();
                    $('.newregbox').show();
                    $('.out').hide();
                }
            })
            $('.out').click(()=>{
                localStorage.removeItem('user')
            })
})
