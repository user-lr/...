$('#login-button').click(function (event) {
	// 获取当前日期对
    const today = new Date();
    // 提取年月日
        const month = String(today.getMonth() + 1).padStart(2, '0'); // 月份是0-11，所以要加1
        const day = String(today.getDate()).padStart(2, '0'); // 确保是两位数
    
        // 拼接成自定义格式
        const c = `${month}${day}`;
	var userName=document.getElementById("userName").value;  
    var pwd=document.getElementById("pwd").value;
    if(userName=="生日快乐" &&  pwd==c){ 
		event.preventDefault();
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		requestFullScreen();
		setTimeout(function(){location.href="index1.html";},2000);
		//auto_link_html("index1.html");
	}
	else{
		alert("错误");
	}
});

function requestFullScreen(element) {
	var element=document.documentElement;
 // 判断各种浏览器，找到正确的方法
 //alert(element.webkitRequestFullScreen);
 var requestMethod = element.requestFullScreen || //W3C
 element.webkitRequestFullScreen || //Chrome等
 element.mozRequestFullScreen || //FireFox
 element.msRequestFullScreen; //IE11
 if (requestMethod) {
  requestMethod.call(element);
 }
 else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
  var wscript = new ActiveXObject("WScript.Shell");
  if (wscript !== null) {
   wscript.SendKeys("{F11}");
  }
 }
}
function changeFrameHeight(){
    var ifm= document.getElementById("iframepage"); 
    if (ifm) {
        ifm.height=document.documentElement.clientHeight;
    }
}

window.onresize=function(){  
     changeFrameHeight();  

} 
