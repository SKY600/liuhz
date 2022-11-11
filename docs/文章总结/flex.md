# 一、什么是flex?

官方说法：Flex是Flexible Box的缩写，意为”弹性布局”，用来为盒状模型提供最大的灵活性。任何一个容器都可以指定为Flex布局。

民间说法：flex 就是一种布局方式，类似于 block，inline-block等。

    1. 弹性布局（flex-layout）是一套css3新增的自适应布局模式，用于替代传统的div+css布局或辅助
    2. 弹性布局主要是为了让盒子里面的子元素在面对容器不同宽度时都能够很好的适应。

# 二、基本使用

1. 开启 flex 弹性布局 display: flex/inline-flex
2. 设置子元素方向 flex-direction
3. 子元素是否可换行 flex-wrap
4. 子元素居中对齐
    > 主轴居中：justify-content: center;
    > 侧轴居中：align-item: center;
5. 子元素如何处理间隔
    > 间隔均分：justify-content 及 align-items
    > 消化多余的空间（弹性空间):flex-grow
6. 子元素高度如何占满父容器高度 align-items
7. 子元素如何完成自适应
    > 开启弹性容器
    > 处理多余空间
8. 设置单个弹性项目的对齐 align-self
9. 改变弹性项目的显示顺序 order
10. 设置弹性项目的默认宽度 flex-basis
11. 如果弹性容器的宽度容不下弹性项目的预期总宽度
    >弹性容器会按照每个弹性项目的flex-shrink（默认1）的值来确定每个弹性项目要减少的的宽度

# 三、弹性布局相关CSS属性

## 1. 给父元素设置

#### display:flex/inline-flex
> 给容器设置css属性display:flex/inline-flex将该盒子变为一个弹性容器，它里面的子元素会以弹性布局的方式来处理。

1. display:flex; 会将盒子变为块级的弹性容器。对其他兄弟标签来说，就是一个普通的块级标签，对里面子元素来说，该盒子就是他们的弹性容器。
2. display:inline-flex; 会将盒子变为行内的弹性容器。对其他兄弟标签来说，就是一个普通的行内标签，对里面子元素来说，该盒子就是他们的弹性容器。

> 特点:
> 1. 弹性容器只对自己的直接子元素有效 <br>
> 2. display:inline-flex和flex对自己的兄弟标签来说没有任何影响 <br>
> 3. 对于弹性容器来说，高度是自适应的，无需设置高度 <br>

#### flex-direction：设置子元素的排列方式，同时确定弹性容器的主轴

通过flex-direction设置的方向为主轴，与之垂直的方向为侧轴。

    row：默认
    row-reverse
    column：垂直排列
    column-reverse

#### flex-wrap：设置弹性项目是否换行显示，默认不换行

    nowrap：默认，不换行。
    wrap：换行显示。

> 特点：设置换行之后，弹性项目的尺寸不会发生自适应变化

#### justify-content、align-items：处理富裕空间

justify-content：处理主轴上的富裕空间；align-items：处理侧轴上的富裕空间；

    flex-start：默认。弹性项目跟主轴左部/顶部对齐
    flex-end：弹性项目跟主轴右部/底部对齐
    space-between：弹性项目之间的空间均匀分配
    space-around：每个弹性项目两侧的距离是一样的
    space-evently：每个弹性项目之间的空隙完全一样，包含第一个和最后一个弹性项目
    center：让弹性项目居中显示
    stretch：当弹性项目没设置高度时，那么弹性项目的高度跟弹性容器一致（侧轴）
    align-items：处理侧轴上的富裕空间

## 2. 给子元素设置

#### flew-grow：设置弹性项目的弹性因子

需要一个数字，默认为1

>原理：弹性容器会将多余的富裕空间按照设置的弹性因子分成等量的几份分给弹性项目消化，弹性因子大的弹性项目得到的多余空间要多一些。

#### align-self：
align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
```
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

#### flex-basis：设置弹性项目的默认宽度，其优先级大于用户设定的width

flex-basis:300px;

>宽度优先级：flex-basis > width > 宽度由内容确定

#### flew-shrink：设置当弹性容器宽度不够时，弹性项目的收缩因子

弹性容器会按照每个弹性项目的flex-shrink（默认1）的值来确定每个弹性项目要减少的的宽度

> 原理：当弹性容器宽度容不下当前该行的所有弹性项目，就会依照flex-shrink来收缩弹性项目已达到不换行的目的。flex-shrink会按照设定的值将需要收缩的宽度等量划分，减少弹性项目对应的尺寸。

#### order：能够改变某个弹性项目的显示位置

order:数字; 数字默认为1

> 数字越大，显示的位置越靠后。数字越小，位置越靠前。不能为负


# 四、名词解释

##### 富裕空间

概念：富裕空间是指一行除了弹性项目外多余的空间
处理：justify-content: 处理主轴上的富裕空间，align-items: 处理侧轴上的富裕空间

##### 弹性空间

概念：让弹性项目消化富裕空间，将富裕空间变成弹性项目的一部分。即弹性容器的尺寸变化会影响弹性项目的尺寸。
原理：给子元素（弹性项目）设置flew-grow(俗称弹性因子）来瓜分富裕空间。
注意：如果说弹性项目太小，我们可以给弹性项目设置min-width

# 五、弹性布局兼容性

概念：弹性布局兼容ie10+，ie9或8不支持，如果ie89想达到一样的效果，需使用响应式布局来实现。

# 六、弹性容器的应用场景

带有重复性的盒子规正放置的盒子列表。
需要自适应的部分

