/**
 * @file select单测
 * @author liangluwen
 */

import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import {createLocalVue} from '@vue/test-utils';
import sinon from 'sinon';
import tbvToast from '../../src/component/tbv-toast';

Vue.use(VueCompositionAPI);
describe('tbvSelectComponent', () => {
    it('Fn: install', function () {
        const spyTbvToast = sinon.spy(tbvToast, 'install');
        Vue.use(tbvToast);
        expect(spyTbvToast.called).toBeTruthy();
    });

    // 调用基础use使用
    it('Fn: create type function toast', async function (done) {
        const LocalVue: any = createLocalVue();
        LocalVue.use(tbvToast);
        const vm = new LocalVue();
        await vm.$tbvToast.success('创建第一个tbvToast');
        const wrapper = document.querySelectorAll('#_tbv-toast_ .tbv-toast-item');
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.length).toBe(1);
        setTimeout(() => {
            done();
        }, 2500);
    });

    // 可配置参数模式
    it('Fn: create type object toast', async function (done) {
        const LocalVue: any = createLocalVue();
        LocalVue.use(tbvToast);
        const vm = new LocalVue();
        await vm.$tbvToast.loading({
            message: 'create type object toast',
            delay: 1000,
        });
        const wrapper = document.querySelectorAll('#_tbv-toast_ .tbv-toast-item');
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.length).toBe(1);
        setTimeout(() => {
            const wrapper2 = document.querySelectorAll('#_tbv-toast_ .tbv-toast-item');
            expect(wrapper2.length).toBe(0);
            done();
        }, 1500);
    });

    // 最多展示5个
    it('Fn: 5 times to remove', async function (done) {
        const LocalVue: any = createLocalVue();
        LocalVue.use(tbvToast);
        const vm = new LocalVue();
        await vm.$tbvToast({
            type: 'success',
            message: 'create type object toast',
        });
        await vm.$tbvToast({
            type: 'success',
            message: 'create type object toast',
        });
        await vm.$tbvToast({
            type: 'success',
            message: 'create type object toast',
        });
        await vm.$tbvToast({
            type: 'success',
            message: 'create type object toast',
        });
        await vm.$tbvToast({
            type: 'success',
            message: 'create type object toast',
        });
        await vm.$tbvToast({
            type: 'success',
            message: 'create type object toast',
        });
        await vm.$tbvToast({
            type: 'success',
            message: 'create type object toast',
        });

        setTimeout(() => {
            const wrapper = document.querySelectorAll('#_tbv-toast_ .tbv-toast-item');
            expect(wrapper.length).toBeLessThanOrEqual(5);
            done();
        }, 50);
    });
});
