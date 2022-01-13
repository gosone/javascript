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
5. 传更深的后代
vuex
