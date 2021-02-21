<template>
  <section
    class="alert alert-secondary mt-3"
    v-for="(item, index) in data.store.state.news"
    :key="index"
  >
    <div class="d-flex p-2">
      <div class="news-content">
        <a :href="item.url" target="_blank">
          <p class="h5 text-left">{{ item.title }}</p>
        </a>
        <p class="text-left mt-5">{{ item.description }}</p>
      </div>
      <div>
        <img :src="item.image" class="img-responsive image" />
      </div>
    </div>
  </section>
</template>

<script>
import { ref, reactive, computed, onMounted } from "vue";
import { useStore } from "vuex";
import axios from "axios";
let url = import.meta.env.VITE_API_URL

export default {
  name: "NewsContent",
  setup(props) {
    const data = reactive({
      store: useStore(),
    });
    const getData = (category) => {
      let url = import.meta.env.VITE_API_URL
      if(!category == ''){
        url += '&topic=' + category
      }
      axios.get(url).then((result)=>{
        data.store.state.news = result.data.articles
      })
    }
    const changecategory = () => {
      data.store.watch(
        (state, getters) => getters.getCategory,
        (newValue, oldValue) => {
          getData(newValue)
        }
    )}
    onMounted(() => {
      getData('')
      changecategory()
    });
    return {
      data,
    };
  },
};
</script>

<style>
.news-content{
  width: 85%;
}
.image{
  width: 150px;
  height: auto;
}
</style>
