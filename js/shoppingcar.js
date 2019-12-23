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
    // 判断购物车是不是空的
    // 购物车商品信息：localStorage key值为shopmsg的数组
    if (localStorage.getItem('shopmsg')) {
        $('.productsbox').hide();
        $('.cartThead').show();
        $('.prodList').show();
        $('#orderCount').show();
        $('.cartJsuan').show();
        let msg = JSON.parse(localStorage.getItem('shopmsg'))
        let _index = 0;
        let cartItem = document.getElementsByClassName('cartItem')[0];
        // console.log(msg)
        for (let k = 0; k < msg.length; k++) {
            let html = `                            <div class="cartPInfo" id="p-main-0-26270029-276625">


            <div class="clearit">
                <div class="pItem pCheckbox">
                    <input name="cart_list" class="chk_p chk_p_main" value="main-0-26270029-276625"
                        type="checkbox" checked="checked">
                </div>
                <!-- 商品 -->
                <div class="pItem pGoods">
                    <div class="clearfix">
                        <div class="cart_pimg">
                            <a target="_blank" title="${msg[k].titlea}"
                                href="javascript:;">
                                <img width="62" height="62"
                                    src="${msg[k].src}">
                            </a>
                        </div>
                        <div class="cart_pname">
                            <div>
                                <a target="_blank"
                                    href="javascript:;"
                                    title="${msg[k].titlea}">
                                    <span class="tags-wk icon-2"></span>${msg[k].titlea}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pItem spree_sm03 spree_p10">
                    <span>
                        <strong>${msg[k].price}</strong>
                    </span>
                </div>

                <div class="pItem pPromotion">&nbsp;</div>

                <div class="pItem pQuantity">
                    <div class="cartAmount">
                        <a href="javascript:void(0);" class="cartCountBtn numberCtrl down"
                            belong="main" cid="main-0-26270029-276625" canselect="1">-</a>
                        <input type="text" value="${msg[k].num}" class="amount pAmount"
                            id="main-0-26270029-276625-amount" name="amount"
                            cid="main-0-26270029-276625" canselect="1" stock="-6">
                        <input type="hidden" value="1" id="main-0-26270029-276625-amountHidden">
                        <a href="javascript:void(0);" class="cartCountBtn numberCtrl up"
                            belong="main" cid="main-0-26270029-276625" canselect="1"
                            stock="-6">+</a>
                    </div>


                    <div class="pGift-tips" style="display: none" id="tips-main-0-26270029-276625">
                        <span class="pGift-tips-up"></span>
                        <span class="pGift-tips-words" id="tips-msg-main-0-26270029-276625">
                            活动库存告急，继续购买不参与活动哟！
                        </span>
                    </div>

                </div>

                <div class="pItem pWeight">0.39kg<br></div>
                <div class="pItem pSubtotal">¥<span id="total_price">${(msg[k].num * msg[k].price).toFixed(2)}</span></div>
                <div class="pItem pInventory">现货</div>
                <div class="pItem pOperator">
                    <div style="display:none;" class="getfavok" id="follow-276625-26270029">商品收藏成功
                    </div>
                    <a id="cartDel" class="follow" pid="276625" cid="26270029"
                        href="javascript:void(0)">收藏</a>&nbsp;&nbsp;
                    <a id="cartDel" class="remove" cid="main-0-26270029-276625"
                        href="javascript:void(0)">删除</a>
                </div>
            </div>
        </div>`
            cartItem.innerHTML += html;
        }
        // 删除
        $('.remove').click(function () {
            let father = $(this).parent().parent().parent()
            // console.log(father)
            _index = father.index();
            msg.splice(_index, 1)
            localStorage.setItem('shopmsg', JSON.stringify(msg))
            father.remove()
            showTotal();
        })
        // 全选
        $('#Zall').on("click", function () {
            if ($(this).is(':checked')) {
                $('.chk_p_main').each(function () {
                    $(this).prop("checked", true);
                });
            } else {
                $('.chk_p_main').each(function () {
                    $(this).prop("checked", false);
                });
            }
            showTotal();
        })
        // $('.chk_p_main:checked').each((s)=>{
        //     // let ul = $('.chk_p_main:checked')[s]
        //     console.log(s)
        // })
        // 点击+ -
        $('.up').click(function () {
            let old = $(this).siblings('.amount').val()
            old++;
            $(this).siblings('.amount').val(old)
            let dj = $(this).parent().parent().siblings('.spree_p10').find('strong').text();
            let total_price = $(this).parent().parent().siblings('.pSubtotal').find('span')
            $(total_price).html((old * dj).toFixed(2))
            showTotal();
        })
        $('.down').click(function () {
            let old = $(this).siblings('.amount').val()
            if (old > 1) {
                old--;
                $(this).siblings('.amount').val(old)
                let dj = $(this).parent().parent().siblings('.spree_p10').find('strong').text()
                let total_price = $(this).parent().parent().siblings('.pSubtotal').find('span')
                $(total_price).html((old * dj).toFixed(2))
                showTotal();
            }
        })

        $(function () {
            // 加载完页面时,计算总计
            showTotal();
            $('.chk_p_main').click(function () {
                // 选择多选框后,再重新计算
                showTotal();
            });
        });
        // 计算总计的函数!!
        function showTotal() {
            var total = 0;
            // 1. 获取所有的被勾选的条目复选框！循环遍历
            $(".chk_p_main").each(function () {
                var isChecked = $(this).prop("checked");
                // 如果多选框被选中
                if (isChecked == true) {
                    // 2. 获取复选框的值，即其他元素的前缀
                    // var id = $(this).val();
                    // alert("id" + id);
                    //3. 再通过前缀找到小计元素，获取其文本
                    var text = $(this).parent().parent().parent().find('#total_price').text()
                    // node = $(this).parent().parent().parent()
                    // console.log(node)
                    //4. 累加计算
                    total += Number(text);
                    console.log(text)
                    // alert(total);
                }
            });
            // 5. 把总计显示在总计元素上
            // $("#txts").text(number);//toFixed(2)函数的作用是把total保留2位
            // $("#totals").text(total.toFixed(2));//toFixed(2)函数的作用是把total保留2位
            $('#allMoney2').text(total.toFixed(2));
        }
        //   console.log(node)
        // 删除选中商品
        $('.removeSelect').click(function () {
            $(".chk_p_main").each(function () {
                var isChecked = $(this).prop("checked");
                if (isChecked == true) {
                    let node = $(this).parent().parent().parent();
                    _index = node.index();
                    msg.splice(_index, 1)
                    localStorage.setItem('shopmsg', JSON.stringify(msg))
                    node.remove()
                    showTotal();
                }
            })
        })
        // 清空购物车
        $('.resetCart').click(function () {
            $('.cartPInfo').remove();
            localStorage.setItem('shopmsg', [])
            showTotal();
        })
    } else {
        $('.productsbox').show();
        $('.cartThead').hide();
        $('.prodList').hide();
        $('#orderCount').hide()
        $('.cartJsuan').hide();
    }
    // 获取用户名
    $(() => {
        let u = localStorage.getItem('user');
        if (u) {
            $('.login .dl').hide();
            $('.user span').show();
            $('.user span').html(u);
            $('.newregbox').hide();
            $('.out').show();
        } else {
            $('.login .dl').show();
            $('.user').hide();
            $('.newregbox').show();
            $('.out').hide();
        }
    })
    $('.out').click(() => {
        localStorage.removeItem('user')
    })
})