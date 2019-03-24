不再写css,写的是css预编译语言stylus
快
一套语法，支持现代css开发
compile 过程
stylus style.styl -o style.css 
    -o output 输出的
stylus -w style.styl -o style.css
    watch 一直监听style.styl文件的修改，实时的去生成style.css

1. 跟css 的规则说byebye  {} : ;  取而代之的是tab键
2. stylus 提供嵌套功能
   可以帮我们补上前面的选择器
   现在我的css 就模块化了，从此css就有编程感觉了
3. & 运算符
    依然使用tab缩进，但是它与前面同级，
    适合于同一个元素多个样式，.active ，或者伪类，伪状态
4. 变量定义  $ 运算符
   将常用的，重复使用的，
   css不是编程语言，表达性的
   在最上面统一定义后，可以修改一处所有使用了此变量的地方都会跟着修改
   成为网站的风格

CSS 语法
1. overflow:hidden
2. flex align-items 搞定 vertical-align 有时不好搞定的地方
vertical-align 兄弟之间  img + 兄弟
3. text-rendering: optimizeLegibility;
抗锯齿 在高清手机上文字的边缘不出现锯齿
4. flex-shrink:0
    flex-grow
5. 第几个元素的选择  :first-child :last-child  
                    :nth-child(2n)  :nth-child(2n+1)
6. -apple-system



PS：
一个盒子内部两个兄弟元素之间的对齐
- vertical-align: middle (为第一个兄弟元素设置这个属性)
- display:inline-flex    (为盒子元素设置该属性，同时设置对齐方式，比如 align-items：center)
- 弹性布局 父元素里面的子元素们对齐 （为父元素设置以下属性）
  display flex
  align-items center