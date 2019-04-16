/**
 * 
 * @param {number[]} piles 
 * @param {number} H 
 * @param {number} mid
 * @return {boolean}
 */
function canEatAllBananas(piles, H, mid) {
  //一定是H小时
  let h = 0;
  // 吃
  for (let pile of piles) {
    h += Math.ceil(pile / mid);
  }
  return h <= H;
}
/**
 * 
 * @param {number[]} piles 
 * @param {number} H 
 * @return {number}
 */
function minEatingSpeed(piles, H) {
  let lo = 1;
  let hi = Math.max(...piles);
  console.log(hi);
  while(lo <= hi) {
    // lo尝试
    let mid = lo + ((hi - lo) >> 1);
    // m 正好可以
    console.log('--------',mid);
    if(canEatAllBananas(piles, H, mid)) {
      hi = mid - 1; //将最大值改为中间值-1
    } else {
      lo = mid + 1; //将最小值改为中间值+1
    }
  }
  return lo;
}
// console.log(canEatAllBananas([3,6,7,11], 8, 4));
console.log(minEatingSpeed([3,6,7,11], 8, 4));