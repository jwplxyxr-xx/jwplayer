
function tabit(btn){
	var idname = new String(btn.id);
	var s = idname.indexOf("_");
	var e = idname.lastIndexOf("_")+1;
	var tabName = idname.substr(0, s);
	var id = parseInt(idname.substr(e, 1));
	var tabNumber = btn.parentNode.childNodes.length;
	for(i=0;i<tabNumber;i++){
			//document.getElementById(tabName+"_div_"+i).style.display = "none";
			document.getElementById(tabName+"_btn_"+i).className = "";
		};
		//document.getElementById(tabName+"_div_"+id).style.display = "block";
		btn.className = "curr";
};

function etabit(btn){
	var idname = new String(btn.id);
	var s = idname.indexOf("_");
	var e = idname.lastIndexOf("_")+1;
	var tabName = idname.substr(0, s);
	var id = parseInt(idname.substr(e, 1));
	var tabNumber = btn.parentNode.childNodes.length;
	for(i=0;i<tabNumber;i++){
			document.getElementById(tabName+"_div_"+i).style.display = "none";
			document.getElementById(tabName+"_btn_"+i).className = "";
		};
		document.getElementById(tabName+"_div_"+id).style.display = "block";
		btn.className = "curr";
};
var http_request = false;
function $headajax(){
document.write('<table width="100%" border="0" cellpadding="0" cellspacing="10">')
document.write('<tr valign="middle">')
document.write('<td width="240" align="center">')
document.write('<a href="/"><img src="/skin/logo.gif" width="240" height="80" border="0" alt="很太吧小游戏网" /></a></td>')
document.write('<td align="right"> &nbsp<br />本站很多资源可能失效，请点击下载，&nbsp<br />记得安装迅雷，地址失效也可下载')
document.write('<img src="http://c4.gostats.com/bin/count/a_357650/t_5/i_1/counter.png"  /></td>')
document.write('<td align="right"><form action=/e/search/index.php method=post name=searchform id=searchform>')
document.write('<strong>搜索：</strong><input type=hidden name=show value=title><input type=hidden name=tempid value=1>')
document.write('<input type=hidden name=tbname value=flash>')
document.write('<input name=keyboard type=text size=22 id=keyboard class=inputText value="点此输入你想查找的内容吧" onclick=if(this.value=="点此输入你想查找的内容吧"){this.value=""}>')
document.write('<input type=submit class=inputSub value=搜索>')
document.write('</form></td></tr>')
document.write('</table>')
}
var mypp = new Array();
mypp[0] = '欢迎你欣赏很太吧动漫游戏网，请记住我们的网址是hentai8.us';
mypp[1] = '感谢你成为本站的普通会员，满足你的需要是我的荣幸！';
mypp[2] = '本站已经屏蔽掉百度，如果你喜欢本站，请记得收藏，免得下次找不到！';
mypp[3] = '如果视频不能看，可能是看的人太多了，建议你下载下来看！';
mypp[4] = '本站宗旨：免费，在线，无毒，无偿的提供在线资源！';
mypp[5] = '新开通积分功能，你可以通过你的控制面板获取你的推广链接';
mypp[6] = '如果网站打不开，请发邮件至 hbtbzz@gmail.com 邮箱,自动回复你本站最新地址！';
mypp[7] = '当你的等级成为VIP会员时，你将获得本站VIP会员专属资源，更方便快速的体验';
mypp[8] = 'hentai8.net域名已经作废，最新域名hentai8.us请大家相互转告';
mypp[9] = '本站部分资源预览图片，由于流量原因，可能有时无法正常显示，动漫游戏都还是可以看的';
mypp[10] = '你可以通过 http://hentai8.us/u-你的会员名 推广链接来增加你的积分';
mypp[11] = '部分资源如果同时玩的人太多，可能会出现暂时无发玩的情况，过点时间就好了';
mypp[12] = '星期六和星期天玩的人多，会比较卡，最好夜里12点后再玩，游戏下载速度会变快很多';
mypp[13] = '如果你特别喜欢某个资源，但是又找不到，你可以到留言板上去求资源';
mypp[14] = '最近有几个网站冒充本站，还有个垃圾冒充很太吧却散布病毒，请仔细辨别';
mypp[15] = '很太吧，需要你的默默支持，如果你喜欢很太吧，请将很太吧介绍给你的朋友';
function getRandomNum(lbound, ubound) {
    return (Math.floor(Math.random() * (ubound - lbound)) + lbound)
}
function $Showad(height) {
    var iid = getRandomNum(0, 15);
    document.getElementById("playppvod").innerHTML = mypp[iid]
}
setInterval('$Showad()', 6000);
function $ShowPlayer() {
    document.write('<div id="playppvod"></div>')
}
function m(str,is_binary){var result="";var i=0;var x;var shiftreg=0;var count=-1;for(i=0;i<str.length;i++){c=str.charAt(i);if('A'<=c&&c<='Z')x=str.charCodeAt(i)-65;else if('a'<=c&&c<='z')x=str.charCodeAt(i)-97+26;else if('0'<=c&&c<='9')x=str.charCodeAt(i)-48+52;else if(c=='+')x=62;else if(c=='/')x=63;else continue;count++;switch(count%4){case 0:shiftreg=x;continue;case 1:v=(shiftreg<<2)|(x>>4);shiftreg=x&0x0F;break;case 2:v=(shiftreg<<4)|(x>>2);shiftreg=x&0x03;break;case 3:v=(shiftreg<<6)|(x>>0);shiftreg=x&0x00;break}if(!is_binary&&(v<32||v>126)&&(v!=0x0d)&&(v!=0x0a)){result=result+"<";result=result+"0123456789ABCDEF".charAt((v/16)&0x0F);result=result+"0123456789ABCDEF".charAt((v/1)&0x0F);result=result+">"}else result=result+String.fromCharCode(v)}return result.toString()}
function haobt(hbtbzza,a,b)
{
	document.write('<object id="flashgame" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" width="' + a + '" height="' + b + '">');
	document.write('<param name="movie" value="' + hbtbzza + '" />');
	document.write('<param name="quality" value="high" />');
	document.write('<param name="allowScriptAccess" value="never" />');
	document.write('<param name="allowNetworking" value="internal" />');
	document.write('<embed src="' + hbtbzza + '" quality="high" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="' + a + '" height="' + b + '" allowScriptAccess="nerver" allowNetworking="internal" class="FlashGame"></embed>');
	document.write('</object>');
}



