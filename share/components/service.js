const domain = 'https://cnodejs.org/api/v1/topics?tab=good'
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

export default {
    getList (page, num) {
        return Vue.http.get(domain+'&page=' +page+ '&limit=' + num);
    }
}