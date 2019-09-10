// 修改html的fontsize，使得fontsize跟随页面的宽度变化
window.onresize = function(){
	resize();
}
resize();
function resize(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 360 * 50 + "px";
}
// 轮播图自动轮播
$('.carousel').carousel({
	interval: 3000
});