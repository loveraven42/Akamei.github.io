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
//设置请求的类型及url
//post请求一定要添加请求头才行不然会报错
xhr.open('post', 'https://service.weibo.com/share/aj_share.php' );
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//发送请求
xhr.send('content=123%20%20&styleid=1&from=share&sourceUrl=&appkey=8003029170&source=&refer=&url_type=&object_type=&visible=0&pic_ids=&gid=');
xhr.onreadystatechange = function () {
    // 这步为判断服务器是否正确响应
  if (xhr.readyState == 4 && xhr.status == 200) {
    alert(xhr.responseText);
    console.log(xhr.responseText);
  }
};
