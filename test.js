<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.js"></script>
<script>
var data = {"content":"123","styleid":"1","from":"share","sourceUrl":"","appKey":"8003029170","source":"","refer":"","url_type":"","object_type":"","visible":"0","pic_ids":"","gid":""}
$.ajax({
  url: "https://service.weibo.com/share/aj_share.php",
  type: "POST",
  data: JSON.stringify(data),
  success: function(a) {
    alert(a);
  }
});
</script>
