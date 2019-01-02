//1.配置模块路径
require.config({
	"paths" : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"two-meau" : "two-meau"
	}
})
//2.设置依赖
require(['jquery','cookie','two-meau'],function($,cookie,two){
	$(function(){
	two.load("header","Header.html");
	two.load("footer","Footer.html");
//		two.img(".two-meau li a");
		two.json('../js/two-meau.json','.nav div');
//		two.jsonimg(7);
		two.hover(".two-meau li",".two-meau-div")
		two.hover(".first-li",".two-meau");
		two.hover1('.man-li',".man");
		two.hover1('.man-li1',".man1");
		two.hover1('.man-li2',".man2");
		two.hover1('.man-li3',".man3");
		two.hover1('.man-li4',".man4");
	})
	
})