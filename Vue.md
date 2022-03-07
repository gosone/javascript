## MVVM
* M:module 模型 模块 --->数据源
* V:view 视图
* VM:data data的劫持 渲染, 数据逻辑处理

## vue3比vue2快的原因
 ```
<div>
   <p>这是段落1</p>
   <p>这是段落2</p>
   <p>{{msg}}</p>
</div>
 ```
1. diff算法
新增了静态标记（PatchFlag），在创建虚拟dom的时候，如果节点会发生变化，就会加上静态标记，然后对比的时候只比较带有patchFlag的节点。

2. 静态提升
vue2中无论元素是否参与更新，每次都会重新创建，然后再渲染。比如：上面的两个p都没有更新，但是每次都会创建前两个p节点。
vue3中对于不参与更新点元素，会做静态提升、只会被创建一次，在渲染时直接复用。

3. 事件监听器缓存
给元素绑定一个事件会被视为一个动态绑定，所以会加上patchflag，每次比较的时候都会比较这个节点，但是事件绑定函数都是同一个函数，所以不用追踪变化，直接缓存起来复用即可。

4. ssr渲染
当有大量静态内容的时候，这些内容会被当做纯字符串推进一个buffer里面，即使存在动态的绑定，会通过模板值嵌入进去。这样会比虚拟dom来渲染的快上很多。

## 双向绑定原理
https://juejin.cn/post/6844903698166988808

## diff算法
1. diff过程的整体策略：同层比较，深度优先，就近复用
2. patch方法：用于 比较 新旧节点的不同，然后更新的函数
* 没有旧节点，说明是页面刚开始初始化的时候 ，此时，根本不需要对比，直接新建
* 新旧虚拟Dom树的根节点完全一样才会调用patchVnode方法进行打补丁
* 新旧虚拟Dom树的根节点不一样，直接创建新节点，删除旧节点

## keep-alive
被keep-alive包裹的动态组件或router-view会缓存不活动的实例，再次被调用这些被缓存的实例会被再次复用，对于我们的某些不是需要实时更新的页面来说大大减少了性能上的消耗，不需要再次发送HTTP请求，但是同样也存在一个问题就是被keep-alive包裹的组件我们请求获取的数据不会再重新渲染页面

作者：羊烊羴
链接：https://www.jianshu.com/p/4b55d312d297
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

## vue-router，前端路由
hash：通过添加#，比如#address，虽然出现在url中，但是并不会发出http请求。hash改变会触发hashchange事件。
* 触发hash值的改变：1. a标签，href 2. js，location.hash
history：利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法，提供了对历史记录进行修改的功能。只是当他们执行修改时，虽然改变了当前的url，但是浏览器并不会立即向后端发送请求。pushstate向历史记录中追加一条记录，replacestate替换当前页在历史记录中的信息。location.hash, history.go(-1), history.pushState 等方法操作都会触发 popstate 事件，并且浏览器的url地址也会跟着改变，且不会重新刷新页面。若访问的路由地址不存在时、会报404,需服务端配合支持重定向返回统一的404页面。

## 同步请求，异步请求

## ajax异步请求

## vue面试总结
https://juejin.cn/post/6850037277675454478

## vue3组件通信
1. 父组件给子组件传值：v-bind，props
2. 子组件给父组件传值：v-on，emit
3. 子组件给父组件传值：v-model，emit（'update: value', newvalue）;
4. 父组件给子组件传值
```
// 子组件
<template>
  // 渲染从父级接受到的值
  <div>Son: {{ valueRef }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Son',
  setup() {
    const valueRef = ref('')
    
    // 该函数可以接受父级传递一个参数，并修改valueRef的值
    const acceptValue = (value: string) => (valueRef.value = value)

    return {
      acceptValue,
      valueRef
    }
  }
})
</script>

// 父组件
<template>
  <div>sonRef</div>
  <button @click="sendValue">send</button>
  // 这里ref接受的字符串，要setup返回的ref类型的变量同名
  <Son ref="sonRef" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Son from '@/components/Son.vue'

export default defineComponent({
  name: 'Demo',
  components: {
    Son
  },
  setup() {
    // 如果ref初始值是一个空，可以用于接受一个实例
    // vue3中获取实例的方式和vue2略有不同
    const sonRef = ref()

    const sendValue = () => {
      // 可以拿到son组件实例，并调用其setup返回的所有信息
      console.log(sonRef.value)
      
      // 通过调用son组件实例的方法，向其传递数据
      sonRef.value.acceptValue('123456')
    }

    return {
      sonRef,
      sendValue
    }
  }
})
</script>
// 父组件获取子组件的实例，通过创建一个ref（），绑定到子组件上，就可以获取到子组件的实例。
```
```
Vue组件的通信方式分为两大类，一类是父子组件通信，另一类是任何关系类型组件通信（父子、兄弟、非兄弟）
父子组件的通信方式：
•    父给子传递数据，通过给子组件添加自定义属性，比如：<List :list="list"/>，list是父组件给子组件传递的数据。子获取父的数据，在子组件中使用props属性获取
•    子给父传递数据，通过给子组件传递父组件的方法，子组件调用父组件的方法传递数据，比如：<List @delete="deleteHandler"/> ,deleteHandler就是父组件的函数，在子组件中通过this.$emit('方法名',参数)，调用父组件的方法，并把数据传递到父组件。
•    props是只读，不可以被修改，所有被修改都会失效和被警告
```
5. 父传子，子传父，兄弟之间
EventBus：
使用方法是创建一个新的Vue实例，需要通信的组件都引入该Vue实例，传递数据的组件使用 event.$emit('名称',参数)发送数据，接收数据的组件使用 event.$on('名称',方法)接收数据。
6. VueX：
集中管理项目公共数据，Vuex 的状态存储是响应式的，当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。
7. 加分回答
EventBus的优缺点，缺点vue是单页应用，如果你在某一个页面刷新了之后，与之相关的EventBus会被移除，这样就导致业务走不下去。同时如果页面中有反复操作的业务，EventBus在监听的时候就会触发很多次，需要好好处理EventBus在项目中的关系。在vue页面销毁时，同时移除EventBus事件监听。优点，解决了多层组件之间繁琐的事件传播，使用原理十分简单，代码量少。适合业简单，组件传递数据较少的项目，大型项目业务复杂的还是尽量使用VueX

## vuex


## eventbus
创建一个vue实例，采用发布订阅模式，基于一个消息中心，进行消息的订阅和发布。

## vue
vue.use()：（vue.install有同样的效果）全局注册组件，通过Vue.component('ceshi',ceshi)来注册组件，vue.prototype.$tbtoast就是注册一个全局的方法
### dom更新和nexttick
1. Vue 在更新 DOM 时是 异步执行 的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。
2. 官方定义： 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
### vuex
vuex每次更新，store的数据都会被清空，是因为vuex的数据是存储在内存中的，刷新页面后都会重新创建一个vue实例。
* 避免刷新：可以存储在缓存里，比如localstorage，sessionstorage，cookie，但是cookie的存储量比较小，localstorage有效期过长，每次打开页面的时候都存储着之前的数据，所以使用sessionstorage比较合适。
* 为什么不直接用sessionstorage：可以在每次页面刷新之前（unupload）将数据放入到sessionstorage中。刷新后vuex获取sessionstorage中的内容。

### nexttick原理
包装方式：promise > mutationobserver > settimeout
nexttick方法就是在异步队列里传入一个回调函数，通过包装使这个函数变为微任务或者宏任务，保证在这个回调函数执行前，它前面的所有dom更新都执行了。

### 组件库的封装和分层
prop、event、slot
* props 表示组件接收的参数，最好用对象的写法，这样可以针对每个属性设置类型、默认值或自定义校验属性的值，此外还可以通过type、validator等方式对输入进行验证
* slot可以给组件动态插入一些内容或组件，是实现高阶组件的重要途径；当需要多个插槽时，可以使用具名slot
* event是子组件向父组件传递消息的重要途径
考虑
* 为什么要抽取组件？ 提高代码的可复用型
* 抽取组件的原则：高内聚，低耦合，复用性和通用性（但是一味的考虑复用性或者复用性可能会导致组件后期难以维护，会增加很多判断逻辑）
单向数据流
* 如何绕开单向数据流？比如淘宝购物车里数量组件，每次需要将改变的数据给父组件，如果子组件只是负责展示的话，那么父组件里每次都要添加方法。

### 虚拟dom
页面的更新可以先全部反映在JS对象(虚拟DOM)上，操作内存中的JS对象的速度显然要更快，等更新完成后，再将最终的JS对象映射成真实的DOM，交由浏览器去绘制。
patch(也叫做patching算法)：虚拟DOM最核心的部分，它可以将vnode渲染成真实的DOM，这个过程是对比新旧虚拟节点之间有哪些不同，然后根据对比结果找出需要更新的的节点进行更新
会比较修改后的虚拟dom与原来的节点的不同diff，只修改需要更新的部分。
* 操作真实dom：更新10个DOM节点，浏览器收到第一个DOM请求后并不知道还有9次更新操作，因此会马上执行流程，最终执行10次
虚拟dom减少了重排与重绘
* 真实DOM操作：真实DOM增删改 + （可能较多节点）重排与重绘
* 虚拟DOM操作：虚拟DOM增删改 + 真实DOM差异增删改（这与Diff算法效率有关） + （较少节点）重排与重绘

### vue2如何解决监听数组的变化

