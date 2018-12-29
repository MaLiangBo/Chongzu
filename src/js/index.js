//声明并获取变量
var oCarousel = document.getElementById('carousel');
var oBig = document.getElementById("pic");
var oBigPic = oBig.getElementsByTagName('li');
var oSmall = document.getElementById("bd");
var oSmallPic= oSmall.getElementsByTagName('a');
//声明下标，通过zIndex来实现轮播
var indexA = 0;
var zIndex = 1;
var timer = null;
slider();
autoplay();
//遍历所有小li
for(var i = 0,len = oSmallPic.length;i < len; i ++){
	//记录当前下标
	oSmallPic[i].index = i;
	//移入事件
	oSmallPic[i].onmouseenter = function(){
		this.style.background = '#ff7f0d';
		indexA = this.index;
		slider();
	}
	//移出事件
	oSmallPic[i].onmouseleave = function(){
		this.style.background = '#dcd4d1';
	}
	//点击事件
	oSmallPic[i].onclick = function(){
		indexA = this.index;
		slider();
	}
}
//设置图片轮播
function slider(){
	//大图轮播
	oBigPic[indexA].style.zIndex = ++ zIndex;
}
function autoplay(){
	clearInterval(timer);
	timer = setInterval(function(){
		indexA ++;
		if(indexA == oBigPic.length){
			indexA = 0;
		}
		slider();
	},3000)
}
oCarousel.onmouseenter = function(){
	clearInterval(timer);
}
oCarousel.onmouseleave = function(){
	autoplay();
}




