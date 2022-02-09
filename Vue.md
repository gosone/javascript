## MVVM
* M:module 模型 模块 --->数据源
* V:view 视图
* VM:data data的劫持 渲染, 数据逻辑处理

## 双向绑定原理
https://juejin.cn/post/6844903698166988808

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
VueX：
集中管理项目公共数据，Vuex 的状态存储是响应式的，当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。
加分回答
EventBus的优缺点，缺点vue是单页应用，如果你在某一个页面刷新了之后，与之相关的EventBus会被移除，这样就导致业务走不下去。同时如果页面中有反复操作的业务，EventBus在监听的时候就会触发很多次，需要好好处理EventBus在项目中的关系。在vue页面销毁时，同时移除EventBus事件监听。优点，解决了多层组件之间繁琐的事件传播，使用原理十分简单，代码量少。适合业简单，组件传递数据较少的项目，大型项目业务复杂的还是尽量使用VueX
vuex


## vue
1. vue.use()：（vue.install有同样的效果）全局注册组件，通过Vue.component('ceshi',ceshi)来注册组件，vue.prototype.$tbtoast就是注册一个全局的方法
## dom更新和nexttick
1. Vue 在更新 DOM 时是 异步执行 的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。
2. 官方定义： 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
