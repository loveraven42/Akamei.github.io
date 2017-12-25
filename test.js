// <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.js"></script>
// <script>
// var data = {"content":"123","styleid":"1","from":"share","sourceUrl":"","appKey":"8003029170","source":"","refer":"","url_type":"","object_type":"","visible":"0","pic_ids":"","gid":""}
// $.ajax({
//   url: "https://service.weibo.com/share/aj_share.php",
//   type: "POST",
//   data: JSON.stringify(data),
//   success: function(a) {
//     alert(a);
//   }
// });
// </script>
alert(1);
if(window.XMLHttpRequest){
      var xhr=new XMLHttpRequest();
}else if(window.ActiveXObject){
      try{
         var xhr=new ActiveXObject("Msxml2.XMLHTTP");
      }catch(e){
         try{
            var xhr= new ActiveXObject("Microsoft.XMLHTTP");
         }catch(e){
            console.log(e);
         }
      }
}else{
      console.log(e);
}
xhr.open('post', 'https://service.weibo.com/share/aj_share.php' );
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//发送请求
xhr.send('content=123%20%20&styleid=1&from=share&sourceUrl=&appkey=8003029170&source=&refer=&url_type=&object_type=&visible=0&pic_ids=&gid=');
xhr.onreadystatechange = function () {
    // 这步为判断服务器是否正确响应
  if (xhr.readyState == 4 && xhr.status == 200) {
    alert("ok");
    console.log(xhr.responseText);
  }
};
