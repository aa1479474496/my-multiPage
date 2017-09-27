<template>
    <div>
        <vhead></vhead>
        <h1>This is about module!</h1>
        <a href="javascript:window.history.go(-1)" style="font-size:24px;">返回上一层</a>
        <div class="index">about页面引用index.css</div>
        <i class="about-icon"></i>
        <div style="background:#000">
            <i class="needle-icon"></i>
        </div>
        <vfoot></vfoot>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import vhead from '../common/Head'
import vfoot from '../../components/common/Foot'
export default {
    components: {
        vhead,
        vfoot
    },
    computed: {
        ...mapState({
           indexName: state => state.index.name,
        }),
        ...mapGetters({
            products: 'getAboutName',
        }),
    },
    mounted() {
        var code = this.getQueryString('code');
        console.log('About.vue');
        console.log(code);
        console.log(this.products);
        console.log(this.indexName);
    },
    methods: {
        getQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        }
    }
}
</script>

<style scoped>
h1 {
    color: rgb(5, 110, 234);
}
</style>