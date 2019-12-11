/**
	method 方法 
	url 请求的地址 
	data 发送的数据
	cb
*/

function ajax(method,url,data,cb) {



	let xhr = null; 

	try {
		xhr = new XMLHttpRequest();
	}catch(e) {
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}

	// get post 
	if(method === 'get' && data) {
		url += '?' + data;
	}


	xhr.open(method,url,true);

	if(method === 'get') {
		xhr.send();
	}else {
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(data);
	}


	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if(xhr.status == 200) {
				cb && cb(xhr.responseText);
			}else {
				alert("出现错误:" + xhr.status);
			}
		}
	}

}