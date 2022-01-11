## html5有哪些新特性，移出了哪些元素
* 绘画canvas
* 用于媒介的video和audio
* localstorage和sessionstorage
* 语义化更好的元素，article，header，footer
* 表单控件，date，time，email

## 移除的元素
* basefont，big，center等

## html5对离线存储资源进行管理和加载的方法
在线的情况下，浏览器发现html头部有manifest属性，它会请求manifest文件，如果是第一次访问app，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。

如果已经访问过app并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。

离线的情况下，浏览器就直接使用离线存储的资源
