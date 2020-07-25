<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <!-- 遮罩 -->
      <div class="mask"></div>
      <!-- 会话 -->
      <div class="modal-dialog">
        <div class="dialog-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" v-on:click="$emit('cancel')"></a>
        </div>
        <div class="dialog-body">
          <slot name="body"></slot>
        </div>
        <div class="dialog-footer">
            <!-- 子组件点击“确定”以后向父组件传递，父组件用emit进行传递；在这里点击“确定”之后，调用父组件的submit -->
          <a href="javascript:;" v-if="btnType==1" @click="$emit('submit')" class="btn btn-default btn-margin">{{confirmText}}</a>
          <a href="javascript:;" v-if="btnType==2" @click="$emit('cancel')" class="btn btn-default btn-margin btn-gray">{{cancelText}}</a>
          <div v-if="btnType==3" class="btn-margin">
              <a href="javascript:;" @click="$emit('submit')" class="btn btn-default btn-margin">{{confirmText}}</a>
              <a href="javascript:;" @click="$emit('cancel')" class="btn btn-default btn-margin btn-gray">{{cancelText}}</a>
          </div>
        </div>
      </div>
    </div> 
  </transition>
</template>

<script>
export default {
  name: "modal",
  props: {
    // 弹框类型：小small、中middle、大large、表单form
    modalType: {
      type: String,
      default: "form"
    },
    // 弹框标题
    title: String,
    // 按钮类型：1、 确定按钮 2、取消按钮 3、确定取消
    btnType: String,
    // 确定文本
    confirmText: {
      type: String,
      default: "确定"
    },
    // 取消文本
    cancelText: {
      type: String,
      default: "取消"
    },
    // 弹框是否需要展示
    showModal: Boolean
  }
};
</script>

<style lang="scss" scope>
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
@import "../assets/scss/modal.scss";
</style>