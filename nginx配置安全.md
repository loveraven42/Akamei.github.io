# Nginx不安全配置可能导致的安全漏洞
- 任意文件读取
  - 没有设定好正则的表示， 造成任意文件的读取
- CRLF漏洞
  - 也是没有设定好正则的表示， 造成任意文件的读取
- 目录遍历
  - 默认配置里 autoindex 是为 off 的， 如果修改成on的话，造成目录遍历
- 解析漏洞
  - 比如nginx 0.7.65以下（0.5.*, 0.6.*, 0.7.* ）全版本系列和0.8.37（0.8.*）以下8系列受影响
  - 先上传图片 使其路径为 http://x.x.x.x/logo.jpg/， 然后访问http://x.x.x.x/logo.jpg/x.php 是这个jpg以php文件执行
  - 在配置文件nginx.conf里面,设置如下：server_tokens off; 即可不显示版本号

- [检查配置文件漏洞的工具](https://github.com/yandex/gixy)
