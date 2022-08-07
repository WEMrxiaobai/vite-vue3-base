<template>
  <div>使用store的数据：{{name}}</div>
  <button class="btn" @click="handleChange">修改store的数据</button>
</template>

<script>
import { getCurrentInstance, ref, defineProps, watch, nextTick, reactive, onMounted, toRefs } from 'vue';
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const state = reactive({
      name: store.state.themes.UserName,
    })
    let num = 0;
    const handleChange = ()=> {
      num++
      store.commit("GetUserName", "新的名字"+ num);
      state.name = store.state.themes.UserName;
    }
    return {
      ...toRefs(state),
      handleChange
    }
  }
}
</script>