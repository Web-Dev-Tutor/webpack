# 树震(Tree Shaking)是什么？
>因为树被摇动时，树上的枯枝或者不是树的真正部分的东西都会被摇落，所以树震(Tree Shaking) 会被用来表示去掉不必要的东西。

> 在Javascript里面使用树震来表示去除没有用到的不必要的代码。

下面我们看看如何通过树震(Tree Shaking)来清理没有使用的代码。

## ES2015的静态模型结构

树震的实现依赖于ES2015的静态模型结构。

在ES2015之前，模块的结构是动态调整的。

而静态模型结构的好处是可以在编译期知道模块的输入(imports)和输出(exports)内容。

这样就可以知道那些内容是用不到的，这样就可以优化没有使用到的代码。

它有仍有很多其它好处，可以参考以下的内容：
http://exploringjs.com/es6/ch_modules.html#static-module-structure

## 树震步骤

### 1. 添加一个模块
在项目里添加一个模块，比如math.js:

```
export function square(x) {
  return x * x;
}

export function cube(x) {
  return x * x * x;
}

```
这里我们添加了两个函数。
我们会使用一个，而不使用另一个。
这样通过webpack优化掉没有使用的另一个人。

### 2. 将模式调整到开发模式

这样打包代码不会被压缩。

```js
  mode: 'development`,
```

### 3. 开启树震优化

这样可以基于静态模块结构去掉没有使用的代码。

```js
  optimization: {
    usedExports: true
  }
```

### 4. 使用两个函数中的一种

导入

```
import { cube } from './math.js';
```

```
cube(100);
```

### 5. 执行webpack

运行`npm run webpack`，我们可以看到新的`./out/app.bundle.js`输出。

这个时候体积是：25473;

### 6. 查看输出app.bundle.js

```js
/*! exports provided: square, cube */
/*! exports used: cube */
```
可以看出来已经准确的区分出来使用与没有使用的代码了。

### 7. 将模式调整为`production`

并执行`npm run webpack`，我们可以看到更新的`./out/app.bundle.js`输出。

体积明显变小：7237;

体积变小好几倍： 25473/7237 = 3.5。

这时我们再去查找`*`号，只发现了

```
let t=function(e){return e*e*e}
```
而
```
e*e
```
这种有可能由square产生的代码消失了。

这个时候树震的目标就达成了。我们多余的代码被删除了。




