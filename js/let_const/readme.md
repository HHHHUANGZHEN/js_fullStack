# 作用域 Scope
document DOM 
    getElementsByTagName
    getELementsByClassName
    querySelector
    querySelectorALL
window BOM 
    全局定义了 var name = "yu";
    全局变量    前端 js window
    局部变量    function() { }
    window js 内嵌在浏览器中的脚本语言,它与其它语言不一样的地方在于 window
    全局变量挂载在window上 
    console.log(name);  console.log(name);
    window 类型 typeof 
    数值 字符串 布尔值 null undefined  
    Symbol object
    const let 比 var 优秀的地方 遵守块级作用域 
    全局 -> 函数局部 -> 块级作用域
    scope 范围

    setTimeout 异步的内置函数
    for 循环 立即同步执行 
    1000 之后 var i 变成了 10 
    let    创建了块级作用域    for { 块级作用域 }
    1000 后， 