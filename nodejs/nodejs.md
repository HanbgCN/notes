##### exports / require

```javascript
// 在一个 *.js 文件中
// exports.** = {}
// require('*/*.js')
// *.js文件中exports对象被导出, 通过require以同步的方式导出
// require所导入的也就是 exports 对象
// exports对象之外的变量，都将成为该文件的私有变量

// require是同步I/O 会阻塞程序， 所以在顶端引入，初始化加载


// 若想替换默认的exports对象，需要使用 module.exports = * 格式
// * 可以定义为 变量 / 函数 / 对象
// module.exports 才是真正导出的内容
// 默认情况下 exports 指向 module.exports 
// 若使用 exports = * 则破坏了 exports的指向，进而产生错误
// 而直接修改 module.exports，即是直接改变了文件的导出内容
// 可以使用 module.exports = exports = * 维持原有的 exports 指向
```

