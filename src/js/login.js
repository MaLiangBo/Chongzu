//给登录按钮设置点击事件
$('#dengludianji').click(function(event){
	var uName = $('#username-input').val();
	var uPwd = $('#password-input').val();
	var cookieStr = $.cookie('user') ? $.cookie('user') : '';
	var cookieObj = convertCookieStrToObj(cookieStr);
	if(cookieObj[uName] == cookieObj[uPwd]){
		alert('登录成功')
		location.href = '../index.html';
	
	}else{
		alert('用户名与密码不匹配');
	}
	location.href = "../html/index.html"
})

//将cookie字符串转为cookie对象
function convertCookieStrToObj(str){
		if(!str){
			return {};
		}
		
		var arr = str.split(','); 
		//console.log(arr);
		var obj = {};
		for(var i = 0;i < arr.length;i ++){
			var list = arr[i].split(':');
			obj[list[0]] = list[1];
		}
		return obj;
	}
