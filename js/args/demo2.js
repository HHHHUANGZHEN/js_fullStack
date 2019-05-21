// 1. userObj 一个参数带来了新的问题，代码的函数编写者，对于user里的key要去了解
// 只需用一部分，结构可以帮助提高代码的可读性
function information({name, age, height}) {
  console.log(name, age, height);
}

const user = {
  name: '杨',
  age: 22,
  height: 1.8,
  sex: '男',
  hobbies: ['打游戏']
}
information(user);