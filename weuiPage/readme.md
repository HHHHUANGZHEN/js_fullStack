#   
-   动画 @keyframes  
    加一个 @-webkit-keyframes 为了兼容各种不同浏览器
-   animation 属性 :在 @keyframes 中创建动画时，请把它捆绑到某个选择器，否则不会产生动画效果


-   this.classList.add('active');   
    添加css中的类名

-   setTimeout(function(){},2000);      (es5)
    setTimeout 会修改当前函数的   作用域    

-   setTimeout(() => { },2000);     箭头函数  (es6)
        不存在作用域自动修改的现象