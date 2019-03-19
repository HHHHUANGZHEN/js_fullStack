float  浮动 元素脱离文档流
# 清除浮动 (五种方法) 
1. 在父元素底部加一行代码   <div style="clear:both"></div>     (left||right||both)
2. 利用 BFC  简称为"块级格式化上下文"  来给父元素增加 CSS 
    div.content {
        overflow: auto ;
        <!-- overflow:hidden -->
        <!-- overflow:scroll -->
    }
3. 使用 CSS 中的 after伪元素，给父元素 div 添加一个 clearfix 的类名
    .clearfix::after {
        content:'';
        clear:both;
        display:block;
    }
4. 给父元素 增加一行CSS 
    .content {
        float:left;
    }
    (不建议使用：父容器后的兄弟节点也会受影响)
5. 一个优雅的改进  -- 尼古拉斯大师 方法
    把 display 设置为 table ，可以创建一个表格单元，这个匿名的表格单元可以直接触发BFC
    .clearfix::after {
        content:'';
        display: table; 
        clear:both;
    }