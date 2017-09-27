<template>
    <div>
        <div style="height:1000px;"></div>
        <vhead></vhead>
        <h1>This is Index module!</h1>
        <a href="about.html?code=123" style="font-size:24px;">去about页面</a>
        <i class="index-icon"></i>
        <img src="../../assets/img/item_icons.png" alt="">
        <vfoot></vfoot>
    </div>
</template>

<script>
import vhead from '../common/Head'
import vfoot from '../../components/common/Foot'
export default {
    components: {
        vhead,
        vfoot
    }
}
</script>

<style scoped>
h1 {
    color: rgb(5, 110, 234);
}
</style>