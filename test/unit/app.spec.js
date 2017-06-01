/**
 * Created by ccw on 2017/5/31.
 */
import Vue from 'vue'
import app from '../../pages/about.vue'
describe('test about.vue', () => {
  it('关于我们', () => {
    let vm = new Vue(app).$mount()
    expect(vm.msg).toEqual('Hello world')
  })
})
