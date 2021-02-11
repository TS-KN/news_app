<template>
  <section class="alert alert-primary">
    <h2>{{ data.topics }}</h2>
  </section>
  <section class="alert alert-secondary mt-3"
      v-for="(item,index) in data.store.state.news" :key="index">
    <div class="d-flex p-2">
      <div>
        <p class="h5 text-left">{{ item.title }}</p>
        <p class="text-left mt-5">{{ item.description }}</p>
      </div>
      <img :src="item.urlToImage" class="img-responsive" width="200" />
    </div>
  </section>
</template>

<script>
import { ref, reactive, computed, onMounted } from "vue";
import { useStore } from "vuex";
import axios from 'axios'


export default {
  name: "NewsContent",
  setup(props) {
    const data = reactive({
      topics: '今日のニュース',
      store: useStore(),
    })
    const getData = () => {
      axios.get(import.meta.env.VITE_API_URL).then((result)=>{
        data.store.state.news = result.data.articles
      })
    }
    onMounted(() => {
      getData()
      console.log(import.meta.env.VITE_API_URL)
    })
    return {
      data
    }
  }
};
</script>
