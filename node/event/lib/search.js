const request = require('./request')
module.exports = (keyword) => {
  keyword = encodeURIComponent(keyword)
  const url = 'http://neteasecloudmusicapi.zhaoboy.com/search?keywords=' + keyword;
  // promise
  return request(url);
  // return keyword;
}