// 对象
const googleMap = {
  show() {
    console.log('开始渲染GOOGLE地图');
  }
}
const baiduMap = {
  // 为互换做准备
  show() {
    console.log('开始渲染百度地图');
  }
}
const gaodeMap = {
  // 为互换做准备
  show() {
    console.log('开始渲染高德地图');
  }
}
const sosoMap = {
}
/**
 * 
 * @param {object} map 
 */
const renderMap = (map) => {
  // map 检测
  //if (map.show && typeof map.show === 'function')
  if (map.show && map.show instanceof Function) {
    map.show();
  }

  // googleMap.show();
  // if (type === 'baidu')
  //   baiduMap.show();
  // else if (type === 'google')
  //   googleMap.show();
  // else if (type === 'gaode')
  //   gaodeMap.show();
}

renderMap(baiduMap);
renderMap(googleMap);
renderMap(sosoMap);