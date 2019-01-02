
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
	for(var i = 0,len = oSmallPic.length;i < len; i ++){
		oSmallPic[i].style.background = "";
		oSmallPic[i].index = i;
		oBigPic[indexA].style.zIndex = ++ zIndex;
		oSmallPic[indexA].style.background = "#ff7f0d";
	}
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

//倒计时
            var maxtime = 60 * 60; //一个小时，按秒计算，自己调整!   
            var oSpic_one = document.getElementById("spic_1");
            var oSpic_two = document.getElementById("spic_2");
            var oSpic_three= document.getElementById("spic_3");
            function CountDown() {
                if (maxtime >= 0) {
                	var shi = Math.floor(maxtime / 1800);
                    var minutes = Math.floor(maxtime / 60);
                    var seconds = Math.floor(maxtime % 60);
                    oSpic_one.innerHTML = shi;
                    oSpic_two.innerHTML = minutes;
                    oSpic_three.innerHTML = seconds;
                    if (maxtime == 5 * 60)alert("还剩5分钟");
                        --maxtime;
                } else{
                    clearInterval(timer);
                }
            }
            timer = setInterval(CountDown, 1000);       
            
            
            //轮播
 function ListChange(box , boxW , liLen , delay){
        var $box = $('#' + box);
        var $ul  = $('#' + box + ' ul');
        var $li  = $('#' + box + ' li');

        $('#' + box + ' li:nth-child(' + liLen + 'n)').css('margin-right',0);

        var page = parseInt($li.length / liLen);
        page = $li.length % liLen > 0 ? page + 1 : page;
        $ul.css('width',boxW * page);

        if(page > 1){
            for(var i = 0 ; i < page ; i++){
                if(i==0){
                    $('#setPage').append('<a class="setPageIn" href="javascript:void(0)"></a>');
                }else{
                    $('#setPage').append('<a href="javascript:void(0)"></a>');
                }
            }
            $('#showPage').on('click','#setPage a',function(){
                clearTimeout(curTimer);
                var $this = $(this);
                curpage = $this.index();
                $ul.stop().animate({'margin-left':-curpage * boxW},'slow',function(){
                    curTimer = setTimeout(changePage,delay);
                });
                $this.addClass('setPageIn').siblings().removeClass('setPageIn');
            });
            var curpage = 0;
            var curTimer = setTimeout(changePage,delay);
            function changePage(){
                curpage++;
                if(curpage >= page){
                    curpage = 0;
                }
                $('#setPage a').eq(curpage).trigger('click');
                curTimer = setTimeout(changePage,delay);
            }
        }
    }
    //一屏所放的个数，CSS设置在head部分有注释
    //一屏放5个
//    ListChange('showPage',1000,5,3000);
    //一屏放6个
//  ListChange('showPage',1000,6,3000);