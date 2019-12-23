
/**
 * 验证用户名 、密码 、 第二次输入的密码  、 邮箱 、手机号 、 用户名是否存在 、验证码  、存储用户信息
 * 
 * 
 * 
 * 注意: 
 * 1 . 本工具库 依赖md5.js,需要在使用本工具库的html文件当中引入md5.js
 * 2. 在使用存储用户信息功能时，需要你的浏览器是支持localStorage 
 * 3. 在本地存储当中，数据存储的格式按照如下格式来进行存储:
 *      [
 *          {user:"zhangsan",pass:"123456",email:"zhangsan@qq.com",phone:"13223233232"},
 *          {user:"zhangsan",pass:"123456",email:"zhangsan@qq.com",phone:"13223233232"},
 *          {user:"zhangsan",pass:"123456",email:"zhangsan@qq.com",phone:"13223233232"},
 *          .....
 *      ]
 * 
*/

(function(window) {

    // 先来创建一个用来验证的对象 
    var Validator = (function() {
        // 验证规则对象
        var rules = {
            // 验证用户名 str: 表示需要验证的用户名 
            user: function(str) {
                var re = /^[a-zA-Z]\w{5,10}$/g;

                if(re.test(str)) {
                    return true;
                }else {
                    return false;
                }
            },
            // 验证密码 
            pass: function(str) {
                var re = /^[A-Z]\w{5,11}$/g;
                
                if(re.test(str)) {
                    return true;
                }else {
                    return false;
                }

            },

            // 验证邮箱 
            email: function(str) {
                var re = /^\w+@[a-z0-9]+\.[a-z]{2,3}$/;
                if(re.test(str)) {
                    return true;
                }else {
                    return false;
                }
            },

            // 验证两次密码是否一致 
            rePass: function(pass,repass) {
                // 先来验证长度 
                var info = this.cLength(pass,repass);
                if(info) {
                    if(pass === repass) {
                        return true;
                    }else {
                        return false;
                    }
                }
            },

            // 验证长度是否一致  
            cLength: function(str1,str2) {
                if(str1.length === str2.length) {
                    return true;
                }else {
                    return false;
                }
            },

            // 验证手机号
            phone: function(str) {
                var re = /^1[34578]\d{9}$/g;
                if(re.test(str)) {
                    return true;
                }else {
                    return false;
                }
            },

            // 用户名是否存在  
            existUser: function(str) {
                // 获取Storage中的数据 
                var data = JSON.parse(localStorage.getItem('user_info'));
                for(var i=0;i<data.length;i++) {
                    var obj = data[i];
                    if(obj['user'] === str) {
                        return true;
                    }else {
                        return false;
                    }
                }
            },

            // 验证密码是否正确 
            rightPass: function(user,pass) {
                var data =  JSON.parse(localStorage.getItem('user_info'));
                for(var i=0;i<data.length;i++) {
                    var obj = data[i];

                    // 判断用户是否存在 
                    var info = this.existUser(user);
                    if(info) {
                        // 在用户名存在的情况下来验证密码
                        if(obj['pass'] === md5(pass)) {
                            return true;
                        }else {
                            return false;
                        }
                    }
                }
            }
        }

        // 验证码 
        var verCode = {
            code: '', // 用来存储验证码 
            // 生成验证码 
            createCode: function(length) {
                this.code = '';
                var word = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
                // 设置一个循环,生成验证码 
                for(var i=0;i<length;i++) {
                    var num = Math.floor(Math.random() * 62)
                    this.code += word[num]
                }
                
                return this.code;
            },
            // 验证验证码是否正确 
            checkCode: function(str) {
                if(str === this.code) {
                    return true;
                }else {
                    return false;
                }
            }
        }

        return {
            rules: rules,
            verCode: verCode
        }

    })();


    // Validator.verCode.createCode()

    // 创建一个存储的方法 
    var MemoryInfo = (function() {
        // 存储用户信息
        return {
            // 要求: data 是一个存储用户信息的对象 {user:...,pass:...email:....phone: ....}
            register: function(data) {
                // 判断storage当中是否存在 user_info 
                var e = localStorage.getItem('user_info');
                if(e) {
                    // 先来获取数据  
                    var info = JSON.parse(e);
                    // 将用户传递过来的数据存储到数组当中
                    info.push(data);
                    localStorage.setItem('user_info',JSON.stringify(info));
                    return true;
                }else {
                    var arr = [];
                    arr.push(data);
                    localStorage.setItem('user_info',JSON.stringify(arr));
                    return true;
                }
            }
        }
    })();

	
	
	
	// 创建一个用来处理数据的方法 
	var HandleData = (function() {
		// 处理数据 
		var dealData = {
			// 展示数据  data [{},{},{}]
			showData:function(data) {
				var code = ''; 
				for(var i=0;i<data.length;i++) {
					var obj = data[i];
					var info = this.template(obj.goods_id,obj.img,obj.name,obj.author,obj.year,obj.price)
					code += info;
				}
				return code;
			},
			// 字符串模板 
			template: function(goods_id,src,title,author,date,price) {
				var template = `
				<div class="col-md-6">
					<div class="row">
						<div class="col-md-5 left">
							<img src="${src}" alt="" class="img-responsive center-block" />
						</div>
						
						<div class="col-md-7 right">
							<h3 data-goods-id="${goods_id}" class="title">${title}</h3>
							<p>${author}</p>
							<p>${date}</p>
							<p>$ ${price}</p>
						</div>
					</div>
				</div>
				`;
				
				
				return template;
				
			},
			
			// 价格排序  data 操作的数据 status 布尔值 true 为升序  false 为降序 
			priceSort:function(data,status) {
				if(status) {
					for(var i=0;i<data.length-1;i++) {
						for(var j=0;j<data.length - 1 -i;j++) {
							if(parseFloat(data[j]['price']) > parseFloat(data[j+1]['price']) ) {
								// 交换位置 
								var temp = data[j];
								data[j] = data[j+1];
								data[j+1] = temp;
							}
						}
					}
				}else {
					for(var i=0;i<data.length-1;i++) {
						for(var j=0;j<data.length - 1 -i;j++) {
							if(parseFloat(data[j]['price']) < parseFloat(data[j+1]['price']) ) {
								// 交换位置 
								var temp = data[j];
								data[j] = data[j+1];
								data[j+1] = temp;
							}
						}
					}
				}
				
				return data;
				
			},
			commitSort:function(data,status) {
				if(status) {
					for(var i=0;i<data.length-1;i++) {
						for(var j=0;j<data.length - 1 -i;j++) {
							if(parseFloat(data[j]['commit']) > parseFloat(data[j+1]['commit']) ) {
								// 交换位置 
								var temp = data[j];
								data[j] = data[j+1];
								data[j+1] = temp;
							}
						}
					}
				}else {
					for(var i=0;i<data.length-1;i++) {
						for(var j=0;j<data.length - 1 -i;j++) {
							if(parseFloat(data[j]['commit']) < parseFloat(data[j+1]['commit']) ) {
								// 交换位置 
								var temp = data[j];
								data[j] = data[j+1];
								data[j+1] = temp;
							}
						}
					}
				}
				
				return data;
				
			},
			// 进行日期比较的方法  a 和 b 都是日期字符串 
			comporeDate: function(a,b) {
				var arr = a.split("-");
				// ["2017","12","09"]
				var starttime = new Date(arr[0],arr[1],arr[2]);
				var starttimes = starttime.getTime();// 毫秒数
				var arrs = b.split("-");
				var endtime = new Date(arrs[0],arrs[1],arrs[2]);
				var endtims = endtime.getTime();
				
				if(endtims >= starttimes) {
					return true;
				}else {
					return false;
				}
			},
			// 日期排序 
			dateSort:function(data,status) {
//				console.log(this.comporeDate("2017-11-20","2019-11-30"));
				if(status) {
					// 升序
					for(var i=0;i<data.length-1;i++) {
						for(var j=0;j<data.length - 1 -i;j++) {
							var info = this.comporeDate(data[j+1]['year'],data[j]['year'])
							if( info ) {
								// 交换位置 
								var temp = data[j];
								data[j] = data[j+1];
								data[j+1] = temp;
							}
						}
					}
				}else {
					// 降序 
					for(var i=0;i<data.length-1;i++) {
						for(var j=0;j<data.length - 1 -i;j++) {
							var info = this.comporeDate(data[j]['year'],data[j+1]['year'])
							if( info ) {
								// 交换位置 
								var temp = data[j];
								data[j] = data[j+1];
								data[j+1] = temp;
							}
						}
					}
				}
				
				return data;
			},
			
			getIdData: function(id,data) {
				for(var i=0;i<data.length;i++) {
					var obj = data[i]; // 所有商品当中的一条 
					if(obj['goods_id'] === id) {
						// 证明此条商品就是商品详情页需要的那个商品
						var info = this.detailsTemplate(obj.img,obj.name,obj.author,obj.year,obj.price,obj.stock,obj.goods_id)
						return info;
					}
					
				}
			},
			detailsTemplate: function(src,title,author,date,price,stock,id) {
				var template = `
					<div class="col-md-3 left">
						<img src="${src}">
					</div> 
					<div class="col-md-9 right">
						<h2>书名: ${title}</h2>
						<p>作者: ${author}</p>
						<p>出版日期: ${date}</p>
						<p>价格:$ <span id="price">${price}</span></p>
						<p>库存:<span id="stock">${stock}</span></p>
						
						<div>
							<span>购买数量:</span>
							<button class="add">+</button>
							<span id="num">0</span>
							<button class="del">-</button>
						</div>
						<p>总价: $ <span id="total">0</span></p>
						<button id="btn" data-goods-id="${id}">加入购物车</button>
					</div>
				`;
				return template;
			},
			payPrice: function(id,price,num) {
				// id 商品id  price 商品价格  num 商品购买数量 
				var k = 0; 
				// [{id:...,price:...,num:...}]
				var shop = {
					id: id,
					num: num,
					price: price
				}
				
				// 获取storage中的数据 
				var gifts = localStorage.getItem("shop_msg")
							? JSON.parse(localStorage.getItem("shop_msg"))
							: [];
							
				// 处理数据 
				for(var i=0;i<gifts.length;i++) {
					var item = gifts[i];
					if(item.id === shop.id) {
						// 如果id 相等则表示用户之前已经购买过相同的商品
						item.num = shop.num;
					}else {
						// id不相等，表示用户没有购买过当前商品
						k = k + 1;
					}
				}
				
				if(k === gifts.length) {
					// 意味着用户根本就没有买过本商品
					gifts.push(shop)
				}
							
				localStorage.setItem('shop_msg',JSON.stringify(gifts))
			}
			
			
		}
		
		
		return dealData;
	})();

    window.Validator = Validator;
    window.MemoryInfo = MemoryInfo;
    window.HandleData = HandleData;
})(window)