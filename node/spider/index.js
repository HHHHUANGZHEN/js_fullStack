const https = require('https');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
// cheerio 服务端的 $ jquery
const url = 'https://movie.douban.com/top250';
const imageDir = './images/';
// 爬取每一页的方法
function spiderMovies(start) {
  https.get(url, `?start=${start}`, (res) => {
    res.setEncoding('utf-8');
    // 源源不断收到数据
    let html = '';
    res.on('data', (chunk) => {
      html += chunk;
      // console.log(chunk);
    });
    //  数据发完了
    res.on('end', () => {
      // 可以用的html
      const $ = cheerio.load(html);
      let movies = [];
      $('.item').each(function() {
        // this 表示查找的作用域 -> 每一部电影
        //  不加this 默认全局， 每次查找都只能找到第一张
        const picUrl = $('.pic a img', this).attr('src');
        // 名字
        const title = $('.title', this).text();
        // 评分
        const star = $('.info .star .rating_num', this).text();
        // 入库
        const link = $('a', this).attr('href');
        const movie = {
          title,
          star,
          link,
          picUrl
        }
        movies.push(movie);
        // console.log(picUrl);
        downloadImg(picUrl);
      })
      // 在文件名上表示一下 数据页数
      saveLocalData( start / 25, movies);
    })
  })
}

const dataDir = './moviesData/'
function saveLocalData(page, movies) {
  // 文本信息
  fs.writeFile(dataDir + `data${page}.json`, JSON.stringify(movies),
  (err) => {
    if(!err) {
      console.log('数据保存成功');
    } else { console.log(err); }
  } )
}
function downloadImg(picUrl) {
  https.get(picUrl, (res) => {
    res.setEncoding('binary');
    let imageData = '';
    res.on('data', (chunk) => {
      imageData += chunk;
    })
    res.on('end', () => {
      fs.writeFile(imageDir + path.basename(picUrl), imageData, 'binary',
       (err) => {
         if(!err) {
           console.log('image downloaded', path.basename(picUrl));           
         }
       }
      )
    })
  })
}
// es6  generate函数
function*  doSpider(x) {
  let start = 0;
  while(start < x) {
    yield start
    spiderMovies(start);
    start += 25;
  }
}
for(let x of doSpider(250)) {
  console.log('爬取', x);
}