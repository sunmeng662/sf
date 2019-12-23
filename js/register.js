// input框
let _input = document.getElementsByTagName('input');
for(let i=0;i<_input.length-1;i++){
    _input[i].onfocus = function(){
        this.parentNode.style.border = '1px solid #6e9b0c'
    }
    _input[i].onblur = function(){
        this.parentNode.style.border = '1px solid #cdcdcd'
    }
}
let yanzheng = document.getElementsByClassName('yanzheng')[0];
let info3 = document.getElementById('info3');
// 点击换验证码图片
let yimg = document.getElementsByClassName('yimg')[0];
let fiximg = document.getElementsByClassName('fiximg')[0];
let zimg = document.getElementsByClassName('zimg')[0];
let zimg1 = document.getElementsByClassName('zimg1')[0];
let zimg2= document.getElementsByClassName('zimg2')[0];
let zimg3 = document.getElementsByClassName('zimg3')[0];
let yanzhengarr = [
    {
        src:'../img/0.png',
        content1:'7BDb',
    },
    {
        src:'../img/1.png',
        content1:'PG2K',
    },
    {
        src:'../img/2.png',
        content1:'pvHW',
    },
    {
        src:'../img/3.png',
        content1:'X3KK',
    },
    {
        src:'../img/4.png',
        content1:'727V',
    },
    {
        src:'../img/5.png',
        content1:'PDK6',
    },
    {
        src:'../img/6.png',
        content1:'yyXU',
    },
    {
        src:'../img/7.png',
        content1:'7ZGB',
    },
    {
        src:'../img/8.png',
        content1:'p57v',
    },
    {
        src:'../img/9.png',
        content1:'58kp',
    },
    {
        src:'../img/10.png',
        content1:'SP2F',
    }
]
var right = '7BDb';
yimg.onclick = function(){
    let yannum = Math.floor(Math.random()*12);
    // console.log(yanzhengarr[yannum])
    yimg.src = yanzhengarr[yannum].src;
    right = yanzhengarr[yannum].content1;
    // console.log(right)
} 
fiximg.onclick = function(){
    let yannum = Math.floor(Math.random()*12);
    yimg.src = yanzhengarr[yannum].src;
    right = yanzhengarr[yannum].content1;
}
yanzheng.onfocus = function(){
    this.style.border = '1px solid #6e9b0c';
    info3.innerText = '请输入验证码'
}
yanzheng.onblur = function(){
    this.style.border = '1px solid #cdcdcd';
    let rel = new RegExp(right,'i');
    // console.log(rel);
    if(rel.test(yanzheng.value)){
        // console.log('正确的图')
        zimg.style.display = 'block';
        info3.innerText ='';
    }else{
        info3.innerText = '网站验证码不正确';
        info3.style.color = 'red';
    }
}
// 注册验证
// 手机号
let user = document.getElementsByClassName('user')[0];
let info = document.getElementById('info');
user.addEventListener('focus',function(){
    info.innerText = '请输入您的手机号码';
    info.style.color = '#666';
})
user.addEventListener('blur',function(){
    let rel = /^[1][3,4,5,7,8][0-9]{9}$/;
    let userval = user.value;
    if(rel.test(userval)){
        ajax('get','../php/zhucea.php',`user=${userval}`,x=>{
            // console.log(x)
            let b = JSON.parse(x);
            if(b.err == 1){
                info.innerHTML = b.msg;
                info.style.color = 'red';
                zimg1.style.display = 'none';
            }else{
                info.innerHTML = '';
                zimg1.style.display = 'block';
            }
        })
    }else{
        info.innerText = '请输入正确的的手机号码';
        info.style.color = 'red';
    }
})
// 密码
let pwd = document.getElementsByClassName('user')[1];
let info1 = document.getElementById('info1');
let em = document.getElementsByTagName('em');
let pwda = '';
pwd.addEventListener('focus',function(){
    em[0].style.backgroundColor = '#c4c4c4';
    em[1].style.backgroundColor = '#c4c4c4';
    em[2].style.backgroundColor = '#c4c4c4';
    info1.innerText = '6-20位字符，可使用数字、字母、下划线。不建议使用纯数字或字母组合';
    info1.style.color = '#666';
})
pwd.addEventListener('keyup',function(){
    let rel = /^(\w){6,20}$/;
    let rel1 = /^(?:\d+|[a-zA-Z]+)$/;
    let rel11 = /^(?![a-zA-Z]+$)(?![\d]+$)[a-zA-Z_]+$/;
    let rel12 = /^(?![a-zA-Z]+$)(?![\d]+$)[\d_]+$/;
    let rel13 = /^(?![a-zA-Z]+$)(?![\d]+$)[\da-zA-Z]+$/;
    let rel3 = /^(?![a-zA-z]+$)(?!\d+$)(?![a-zA-Z\d]+$)(?![\d_]+$)(?![a-zA-z_]+$)[a-zA-Z\d_]+$/
    let pwdval = pwd.value;
    // console.log(pwdval)
    if(rel.test(pwdval)){
        if(rel1.test(pwdval)){
            info1.innerText = '密码太简单，建议使用数字、字母、下划线组合';
            info1.style.color = '#666';
            zimg2.style.display = 'block';
            em[0].style.backgroundColor = '#ff4800';
            em[1].style.backgroundColor = '#c4c4c4';
            em[2].style.backgroundColor = '#c4c4c4';
        }
        if(rel11.test(pwdval)||rel12.test(pwdval)||rel13.test(pwdval)){
            info1.innerText = '';
            info1.style.color = '#666';
            zimg2.style.display = 'block';
            em[1].style.backgroundColor = '#ff4800';
            em[0].style.backgroundColor = '#c4c4c4';
            em[2].style.backgroundColor = '#c4c4c4';
        }
        if(rel3.test(pwdval)){
            info1.innerText = '';
            info1.style.color = '#666';
            zimg2.style.display = 'block';
            em[2].style.backgroundColor = '#ff4800';
            em[0].style.backgroundColor = '#c4c4c4';
            em[1].style.backgroundColor = '#c4c4c4';
        }
    }else{
        info1.innerText = '密码只能为6-20位字母数字下划线组合';
        info1.style.color = 'red';
        zimg2.style.display = 'none';
    }
})
pwd.addEventListener('blur',function(){
    pwda = pwd.value;
    // console.log(pwda)
})
// console.log(pwda)
// 确认密码
let pwdb = document.getElementsByClassName('user')[2];
pwdb.addEventListener('focus',function(){
    info2.innerText = '请再次输入密码';
    info2.style.color = '#666';
})
pwdb.addEventListener('blur',function(){
    pwda = pwd.value;
    let pwdbval = pwdb.value;
    if(pwdbval === pwda && pwdbval!==''){
        info2.innerText = '';
        zimg3.style.display = 'block';
    }else{
        info2.innerText = '两次输入不一致，请重新输入';
        info2.style.color = 'red';
    }
})
let check = document.getElementById('check');
let zhuce = document.getElementById('zhuce');
let info4 = document.getElementById('info4');
let infofo = document.getElementById('infofo');
zhuce.onclick = function(){
    if(!check.checked){
        info4.style.opacity = '1';
    }else{
        info4.style.opacity = '0';
    }
}
check.onclick = function(){
    if(check.checked){
        info4.style.opacity = '0';
    }    
}
zhuce.addEventListener('click',function(){
    let obj = {};
    if(zimg.style.display==='block'&&zimg1.style.display==='block'&&zimg2.style.display==='block'&&zimg3.style.display==='block'&&info4.style.opacity === '0'){
        // console.log('可以注册')
        obj.user=user.value;
        obj.password = pwdb.value;
        // console.log(obj)
        let a = JSON.stringify(obj);
        ajax('post','../php/zhuce.php',`data=${a}`,x=>{
            let b = JSON.parse(x);
            if(b.err == 1){
                info.innerHTML = b.msg;
                info.style.color = 'red';
            }else{
                zhuce.innerHTML = '注册成功，请稍后...'
                setTimeout(()=>{
                    window.location.href = '../html/login.html';
                },1000)
            }
        })
    }else{
        console.log('不可以')
    }
})
