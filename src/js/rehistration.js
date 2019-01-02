//获取六位验证码
function random(max,min){
	return Math.floor(Math.random()*(max-min+1)+min);
}

//获取元素
var $uphone= $('#zhuce_form_phone');
var $cuowu = $('#cuowu');
var $zhengque = $('#zhengque');
var $uname = $('#uname')

var arr = [false,false,false,false,false,false]
//设置失焦事件
$uphone.blur(function(){
	var uPhone = $(this).val();
	var re = /^(13|14|15|17|18)\d{9}$/g;
	if(!re.test(uPhone)){
		$cuowu.css({"display" : "block"});
		arr[0] = false;
	}else{
		$cuowu.css({"display" : "none"});
		$zhengque.css({"display" : "block"});
		arr[0] = true;
	}
})
//用户名验证
$uname.blur(function(){
	var uName = $(this).val();
	var re = /^[A-Za-z0-9]{6,12}$/;
	if(!re.test(uName)){
		$('#cuowu_name').css({"display" : "block"});
		arr[1] = false;
	}else{
		$('#cuowu_name').css({"display" : "none"});
		$('#zhengque_name').css({"display" : "block"});
		arr[1] = true;
	}
})
$('#duanxin_a').click(function(){
	$('#duanxinyanzheng').html(random(999999,100000));
	$('#duanxinyanzheng').css({"color":"red","display":"block"});
})
//给验证码框添加失焦事件
$('#duanxin').blur(function(){
	var $content = $(this).val();
	if($content != $('#duanxinyanzheng').html()){
		$(this).val("请输入正确验证码");
		$(this).css({"color":"red"});
		arr[2] = false;
	}
})
$('#duanxin').focus(function(){
	$(this).val("");
	arr[2] = true;
})
//图片验证
$('#picyanzheng').blur(function(){
	var encode = $(this).val();
	if((encode === 'ksofer') || (encode === 'ksofer')){
		$('#pic_dui').css({"display" : "block"});
		arr[3] = true;
	}else{
		$('#pic_dui').css({"display" : "none"});
		$('#pic_cuo').css({"display" : "block"});
		arr[3] = false;
	}
})
//密码验证
$('#upwd').blur(function(){
	var uPwd = $(this).val();
	var re = /^[0-9a-zA-Z]{6,16}$/;
	if(!re.test(uPwd)){
		$('#upwd_cuo').css({"display" : "block"});
		arr[4] = false;
	}else{
		$('#upwd_dui').css({"display" : "block"});
		$('#upwd_cuo').css({"display" : "none"});
		arr[4] = true;
	}
})
//重复密码验证
$('#againpwd').blur(function(){
	var uApwd = $(this).val();
	if(uApwd === $('#upwd').val()){
		$('#pwdr_dui').css({"display" : "block"});
		arr[5] = true;
	}else{
		$('#pwdr_cuo').css({"display" : "block"});
		$('#pwdr_dui').css({"display" : "none"});
		arr[5] = false;
	}
})
$('#reg').click(function(event){
	var uName = $uname.val();
	var uPwd = $('#upwd').val();
	if(!uName){
		alert('用户名不能为空！');
		return;
	}
	if(arr.indexOf(false) != -1){
		alert('请正确填写信息！');
		return;
	}
	var cookieStr = $.cookie('user') ? $.cookie('user') : '';
	var cookieObj = convertCookieStrToObj(cookieStr);
	//alert(user);
	if(uName in cookieObj){
		alert('用户名已存在');
	}else{ 
		cookieObj[uName] = uPwd;
		cookieStr = convertObjToCookieStr(cookieObj);
		//alert(JSON.stringify(cookieObj));
		$.cookie('user',cookieStr,{expires : 7,path : '/'});
		alert('注册成功！');
		
		location.href = 'login.html'
	}
	//alert(decodeURIComponent(document.cookie));
})

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
	//将对象转为cookie字符串
	function convertObjToCookieStr(obj){
		var str = '';
		for(var i in obj){
			var pwd = obj[i];
			if(str){
				str += ',';
			}
			str += i + ':' + pwd;
		}
		return str;
	}
