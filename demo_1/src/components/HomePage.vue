
<template>
    <div class="page">
        <div class="title"><img src="../assets/images/title_img.png" alt="" /></div>
        <div class="index-btn-box">
            <router-link to="/hr/hrService">
                <div class="index-btn-item flex hr">人事服务</div>
            </router-link>
            <router-link to="/hr/hrproService">
                <div class="index-btn-item flex major">专业服务</div>
            </router-link>
            <div class="index-btn-item flex health">健康管理</div>
            <div class="index-btn-item flex welfare">福利管理</div>
            <div class="index-btn-item flex platform">平台服务</div>
        </div>
        <div class="index-btns-box flex">
            <router-link to="/hr/hrService">
                <div class="index-btns-item flex">
                    <i class="iconfont icon-renshi"></i>
                    <p>人事服务</p>
                </div>
            </router-link>
            <router-link to="/hr/hrproService">
                <div class="index-btns-item flex">
                    <i class="iconfont icon-gongwenbaoshangyehetonghezuogongzuoxianxing"></i>
                    <p>专业服务</p>
                </div>
            </router-link>
            <div class="index-btns-item flex">
                <i class="iconfont icon-pingtai"></i>
                <p>平台服务</p>
            </div>
            <div class="index-btns-item flex">
                <i class="iconfont icon-yiliao"></i>
                <p>健康管理</p>
            </div>
            <div class="index-btns-item flex">
                <i class="iconfont icon-fuli"></i>
                <p>福利管理</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
