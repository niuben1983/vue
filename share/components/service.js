const domain = 'https://cnodejs.org/api/v1/topics'
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

export default {
    getList () {
        return Vue.http.get(domain);
    }
}