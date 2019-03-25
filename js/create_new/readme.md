new 的时候发生了什么？

构造函数的运行方式 是以 new 的方式被运行，所以函数内部的 this 是动态的，指向实例化后的this

空对象？ 开始时
之后，拿到了构造函数里定义的属性
最后，又拿到prototy 上定义的属性和方法

对象？ 由 属性 和 方法 构成 

1. 实例化一个新的对象，并且是这个类的实例
2. 在new的过程中，构造函数被执行，this指向实例
    constructor 运行慢半拍 
    在面向对象中，构造函数是为他人服务的，为this服务
    this 由函数的运行方式决定  
    this -> 实例 new      this -> 任何对象 call
3. OtaKu.prototype  值是对象
    原型对象
    任何函数都拥有一个prototype属性，才能构建类
    constructor 车头 
4. obj.__proto__ = conFn.prototype;
    得到原型对象上的方法和属性