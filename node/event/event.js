// event 原生的一个模块
// 供其他模块调用 比如 http的res 继承自Event
const Events = require('events');
const ev = new Events();

ev.on('open', () => {
  console.log('open发生了')
})
function callBack() {
  console.log('第二个回调')
}
ev.on('open', callBack);
// removeEventListener
ev.emit('open');
ev.removeListener('open', callBack);
ev.emit('open');

//

ev.once('one', (data) => {
  console.log(data)
})
ev.emit('one', 'from emit data');
ev.emit('one');