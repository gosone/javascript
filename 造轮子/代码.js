// 计算属性
const concernBaTitleText = computed(
    () => {
        return +root.$store.state.info.follow_num
            ? `获得<span class="animation-span">${root.$store.state.info.max_score_fgrade}级</span>头衔
            <span class="concern-baname-start"></span>
            ${root.$store.state.info.max_score_ftitle}
            <span class="concern-baname-end"></span>`
            : '';
    }
);
// toast组件 context.root.Message.success("成功消息)
/**
 * @file 提示
 * @author shijiaqi
 */
import {Vue as _Vue} from 'vue/types/vue';
import TbvToast, {VueComponent} from './tbv-toast.vue';

interface Options {
    message: string;
    delay?: number;
    type?: string;
    icon?: string;
}

interface SetupRawBindings {
    message: string;
    visible: boolean;
    delay: number;
    type: string | undefined;
    icon: string | undefined;
    remove: () => void;
    setCloseTimeout: () => void;
    handleAfterLeave: () => void;
}

interface TbComponent extends VueComponent, SetupRawBindings {}

TbvToast.install = (Vue: typeof _Vue) => {
    const TbvToastComponent = Vue.extend(TbvToast);
    let isFirstToastRender = true;
    const tbvToastComponentList: TbComponent[] = [];

    function tbvToast(options: Options | string) {
        const instance: TbComponent = new TbvToastComponent();
        if (Vue.prototype.$isServer) {
            return;
        }

        if (isFirstToastRender) {
            if (!document.querySelector('#_tbv-toast_')) {
                const el = document.createElement('div');
                el.setAttribute('id', '_tbv-toast_');
                el.setAttribute('class', 'tbv-toast');
                document.querySelector('body')?.appendChild(el);
            }
            isFirstToastRender = false;
        }

        instance.$mount();
        document.querySelector('#_tbv-toast_')?.appendChild(instance.$el);
        instance.visible = true;
        if (typeof options === 'string') {
            instance.message = options;
        }
        else {
            instance.message = options.message;
            instance.type = options.type;
            instance.icon = options.icon;
            instance.delay = options.delay || 2000;
        }
        instance.setCloseTimeout();

        tbvToastComponentList.push(instance);
        if (tbvToastComponentList.length >= 5) {
            const tbvToastComponentShift = tbvToastComponentList.shift();
            tbvToastComponentShift && tbvToastComponentShift.remove();
        }
    }

    ['success', 'warn', 'info', 'error', 'loading'].forEach(type => {
        tbvToast[type] = (options: Options | string) => {
            if (typeof options === 'string') {
                options = {
                    message: options
                };
            }
            options.type = type;
            options.icon = type;
            options.delay = options.delay;
            return tbvToast(options);
        };
    });
    Vue.prototype.$tbvToast = tbvToast;
};

export default TbvToast;

export {SetupRawBindings, TbComponent};
  
// template
<template>
  <transition name="tbv-toast-transition" @after-leave="handleAfterLeave">
      <div v-if="visible" class="tbv-toast-item">
          <tbv-icon
              v-if="icon"
              class="tbv-toast-icon"
              :name="icon"
              :class="`tbv-toast-${type}`"
          />
          <!--bca-disable-next-line-->
          <span class="tbv-toast-content" v-html="message">
          </span>
      </div>
  </transition>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs
} from '@vue/composition-api';
import tbvIcon from '../tbv-icon/tbv-icon.vue';
import {SetupRawBindings} from './index';
// eslint-disable-next-line vue/require-direct-export
export default defineComponent({
    name: 'TbvToast',
    components: {
        tbvIcon
    },
    setup(): SetupRawBindings {
        // eslint-disable-next-line
        let timer: number | null = null;
        const state = reactive({
            message: '',
            visible: false,
            delay: 2000,
            type: '',
            icon: ''
        });

        const remove = () => {
            state.visible = false;
            timer && clearTimeout(timer);
        };

        const setCloseTimeout = () => {
            timer = window.setTimeout(() => {
                remove();
            }, state.delay);
        };

        const handleAfterLeave = () => {
            timer && clearTimeout(timer);
            timer = null;
        };

        return {
            ...toRefs(state),
            remove,
            setCloseTimeout,
            handleAfterLeave
        };
    }

});
</script>
