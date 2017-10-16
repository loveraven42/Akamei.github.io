pwn kr
  - bof
    - gdb 调试显示 距离 52 + address
    - payload = 52 * 'A' + address
  - uaf
    - main中定义了两个类，然后输入3先free掉
    - 在输入2中输入payload, 因为use after free
    - 所以再输入payload后，在输入1，即可运行我们的payload
    - 其中注意下delete的函数是按栈的顺序进行的， 所以payload要注意这一点
  
