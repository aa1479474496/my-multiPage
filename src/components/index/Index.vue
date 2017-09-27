<template>
    <div>
        <div style="height:1000px;"></div>
        <vhead></vhead>
        <h1>This is Index module!</h1>
        <a href="about.html?code=123" style="font-size:24px;">去about页面</a>
        <i class="index-icon"></i>
        <img src="../../assets/img/item_icons.png" alt="">
        <div @click="addCount">state.index.count++ &nbsp;&nbsp;&nbsp;&nbsp;{{indexCount}}</div>
        <vfoot></vfoot>
    </div>
</template>

<script>
import { mapState, mapActions  } from 'vuex'

import vhead from '../common/Head'
import vfoot from '../../components/common/Foot'
export default {
    components: {
        vhead,
        vfoot
    },
    computed: {
        ...mapState({
           indexCount: state => state.index.count
        })
       
    },
    methods: {
        addCount() {
            this.$store.dispatch('getIndexCount')
        }
    }
}
</script>

<style scoped>
h1 {
    color: rgb(5, 110, 234);
}
</style>