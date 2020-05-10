<template>
   <div id="history-wrap">
      <li>
        <span>{{todo.keyWord}}</span>
      </li>
   </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: { // 声明属性的属性名和属性值的类型
      todo: Object,
      index: Number,
    },
  }
</script>

<style lang="stylus">
#history-wrap
  li
    max-width 275px
    text-overflow ellipsis
    overflow hidden
    white-space nowrap

</style>
