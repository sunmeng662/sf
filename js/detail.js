$(()=>{
    // 获取localstorage
    let sptitle = localStorage.getItem('title');
    $.getJSON('../json/list.json',(data)=>{
        for(let i=0;i<data.length;i++){
            let obj = data[i];
            // console.log(obj.titlea)
            // console.log(obj['titlea'] == sptitle);
            if(obj['titlea']== sptitle.trim()){
                // console.log(obj['titlea'])
                $('#base_name-sf').html(obj['titlea']);
                $('#small_sf').html(obj['titlea']);
                $('#adword-sf').html(obj['titleb']);
                $('#price-sf').html(obj['price'])
                $('#jqzoom_sf').attr('src',obj['src'])
                $('#bigimg').attr('src',obj['src'])
                $('#img_sf').attr('src',obj['src'])
                $('#img1').attr('src',obj['img1'])
                $('#img2').attr('src',obj['img2'])
                $('#img3').attr('src',obj['img3'])
                $('#img4').attr('src',obj['img4'])
                $('#img5').attr('src',obj['img5'])
            }
        }
    })


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
        $(window).scroll(function(){
            if($(this).scrollTop()>700){
                $('.pDetail').addClass('fixed')
            }else{
                $('.pDetail').removeClass('fixed')
            }
        })
        // 商品展示图
        $('.pic-items img').mouseenter(function(){
            // $('.jqzoom img').attr('src') = $(this).attr('src')
            let src = $(this).attr('src');
            $('.jqzoom img').attr('src',src);
            let src1 = $('.jqzoom img').attr('src');
            $('.zoomdiv img').attr('src',src1)

        })
        // 放大镜
        $('.jqzoom').mousemove((e)=>{
            // 大图
            $('.zoomdiv').show();
            // 放大镜
            $('.jqZoomLens').show();
            var left = e.pageX -$('.jqzoom').offset().left - parseInt($('.jqZoomLens').width()) / 2;
            // console.log(left)
            var top = e.pageY -$('.jqzoom').offset().top - parseInt($('.jqZoomLens').height()) / 2;
            left = left < 0 ? 0 : left;
            left = left > (parseInt($('.jqzoom').outerWidth()) - parseInt($('.jqZoomLens').outerWidth())) ? (parseInt($('.jqzoom').outerWidth()) - parseInt($('.jqZoomLens').outerWidth())) : left;
            top = top < 0 ? 0 : top;
            top = top > (parseInt($('.jqzoom').outerHeight()) - parseInt($('.jqZoomLens').outerHeight())) ? (parseInt($('.jqzoom').outerHeight()) - parseInt($('.jqZoomLens').outerHeight())) : top;
            $('.jqZoomLens').css('left', left + 'px');
            $('.jqZoomLens').css('top', top + 'px');
            var leftRate = left / parseInt($('.jqzoom').outerWidth());
            var bigLeft = leftRate * parseInt($('.zoomdiv img').outerWidth());
            $('.zoomdiv img').css('margin-left', -bigLeft + 'px');
            var topRate = top / parseInt($('.jqzoom').outerHeight());
            var bigTop =  topRate * parseInt($('.zoomdiv img').outerHeight());
            $('.zoomdiv img').css('margin-top', -bigTop + 'px');
        })
        $('.jqzoom').mouseleave(function(){
            $('.zoomdiv').hide();
            $('.jqZoomLens').hide();
        })
        // 商品数量
        let num = 1;
        $('.add').click(()=>{
            num++;
            $('.pAmount .text').val(num)
        })
        $('.reduce').click(()=>{
            if(num>1){
                num--;
            }else{
                num = 1;
            }
            $('.pAmount .text').val(num)
        })
        $('.pBtn').click(()=>{
            $('#carwindow').show();
            $('.num').html(num);
            $('.total').html(($('#price-sf').text()*num).toFixed(2))
        })
        // 购物车弹窗
        $('.pClose').click(function(){
            $('#carwindow').hide();
        })
        // 向localstorage中存储商品信息
        // key值为shopmsg value值为 [{"title":"","num":""}]
        let k = 0;
        $('#js').click(()=>{
            let src = $('#img1').attr('src');
            let price = $('#price-sf').text();
            let title = $('#base_name-sf').text();
            let shop = {
                "src":src,
                "price":price,
                "num":num,
                "titlea":title
            }
            let gifts = localStorage.getItem("shopmsg")
            ? JSON.parse(localStorage.getItem("shopmsg"))
            : [];
            for(var i=0;i<gifts.length;i++) {
                var item = gifts[i];
                if(item.titlea === shop.titlea) {
                    // 如果id 相等则表示用户之前已经购买过相同的商品
                    item.num = shop.num;
                }else {
                    // id不相等，
                    用户没有购买过当前商品
                    k = k + 1;
                }
            }
            if(k === gifts.length) {
                // 意味着用户根本就没有买过本商品
                gifts.push(shop)
            }
            localStorage.setItem('shopmsg',JSON.stringify(gifts))
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