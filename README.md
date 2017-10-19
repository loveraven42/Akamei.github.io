# Sorry, It just wastes your time to stay here！！！！！
# Maybe you could go to [this place](http://github.com/ring04h/) to get something you real need :)
# pwn 中
- [关于windows chunk的知识](http://www.cnblogs.com/aliflycoris/p/5914663.html)
- 堆溢出的利用的精髓就是精心构造的数据溢出下一个堆块的块首，改写块首的前向指针和后向指针，然后在分配、释放、合并等操作发生时获得一次向内存任意地址读写任意数据的机会。
- 绕过保护机制的 一些方法[在这](http://www.cnblogs.com/bingghost/p/3977696.html)
- app动态调试的基本操作[在这](https://bbs.pediy.com/thread-217612.htm)
- afl-fuzz已经学会，平时没事在家找下数据集。然后进行fuzz,希望回去可以看到crash
- 多看些ctf的writeup，学下基本操作


# 自己动手写个fuzz工具
- 先随机写入文件对应格式的数据，如 图片，则需要写好相应图片的图片头以及相应内容(fuzz的data越精确越好)
- 用ASAN配合python执行相关命令，然后检测相关crash以及相关的记录
- 最后自己调试相关crash

# 编写步骤(对应功能分析相关函数,例子参考[这个](https://github.com/lcatro/Fuzzing-ImageMagick/blob/master/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Fuzzing%E6%8C%96%E6%8E%98ImageMagick%E7%9A%84%E6%BC%8F%E6%B4%9E.md))
  - 了解相关文件格式
  - 创建随机数据，然后对应相关的输入(但这一步不要被自己的固有思维给堵死了)
  - python 执行ASAN编译好的程序并且 记录相关crash
  - 达到一定程度，自动删除多余文件但保留crash

# web中
- [可能得到内网ip的点](https://www.secpulse.com/archives/58730.html)
 
 
# 深度学习
- 等书到了开始做个例子试试，但兴趣没有以前那么浓厚了
 
 
- 这些弄好之后，还是好好学医吧
