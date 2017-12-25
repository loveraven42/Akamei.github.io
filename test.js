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
alert(1);
xhr.open('post', 'http://weibo.com/aj/mblog/add?ajwvr=6&__rnd=1514215803895' );
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//发送请求
xhr.send('location=v6_content_home&text=13&appkey=&style_type=1&pic_id=&tid=&pdetail=&rank=0&rankid=&module=stissue&pub_source=main_&pub_type=dialog&isPri=0&_t=0');
xhr.onreadystatechange = function () {
    // 这步为判断服务器是否正确响应
  if (xhr.readyState == 4 && xhr.status == 200) {
    alert(xhr.responseText);
    console.log(xhr.responseText);
  }
};
