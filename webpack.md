## plugin
* mini-css-extract-plugin
* html-webpack-plugin
* optimize-css-assets-webpack-plugin
* commonchunckplugin
* HotModuleReplacementPlugin

## 打包流程
1. 核心概念
* entry：一个可执行模块或者库的入口。
* chunk：多个文件组成一个代码块。可以将可执行的模块和他所依赖的模块组合成一个chunk，这是打包。
* loader：文件转换器。例如把es6转为es5，scss转为css等
* plugin：扩展webpack功能的插件。在webpack构建的生命周期节点上加入扩展hook，添加功能。

2. webpack构建流程（原理）
从启动构建到输出结果一系列过程：
* 初始化参数：解析webpack配置参数，合并shell传入和webpack.config.js文件配置的参数，形成最后的配置结果。
* 开始编译：上一步得到的参数初始化compiler对象，注册所有配置的插件，插件监听webpack构建生命周期的事件节点，做出相应的反应，执行对象的 run 方法开始执行编译。
* 确定入口：从配置的entry入口，开始解析文件构建AST语法树，找出依赖，递归下去。
* 编译模块：递归中根据文件类型和loader配置，调用所有配置的loader对文件进行转换，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。
* 完成模块编译并输出：递归完事后，得到每个文件结果，包含每个模块以及他们之间的依赖关系（根据ast树），根据entry配置生成代码块chunk。
* 输出完成：输出所有的chunk到文件系统。
注意：在构建生命周期中有一系列插件在做合适的时机做合适事情，比如UglifyPlugin会在loader转换递归完对结果使用UglifyJs压缩覆盖之前的结果。
## AST树
从entry开始读取文件，根据文件的类型和loader对文件进行编译，将loader处理后的文件，抽象成抽象语法树ast，而后遍历ast树，得到全部依赖。
## 如何找到依赖的文件
根据编译的ast树
