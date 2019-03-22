## 界面大框架及经验

水平方向禁止滚动条，垂直方向出现滚动条 
- 水平和垂直两个方向都滚动，则页面会摇晃，容易产生误操作
- 垂直方向一直滚动 是开发的主要趋势

- margin:0 auto;  max-width:960px;
- flex 布局
    flex-grow   放大  
    flew-basis  
    flex-shrink 缩小
    flex-wrap   当网页由PC到Mobile时，缩小阵仗

经验： 简单的适配PC -> Mobile 照顾所有的用户
PC端可以大手大脚一点， max-width   margin：auto   padding margin
mobile flex-shrink 让关键部分坚挺一点 