<template>
  <section class="alert alert-primary">
    <h2>{{ $store.state.topic }}</h2>
  </section>
  <div class="d-flex form-group">
    <label class="form-group p-2">カテゴリー</label>
    <select v-model="data.category" class="form-group p-2 flex-grow-1">
      <option value="breaking-news" selected>最新のニュース</option>
      <option value="business">ビジネス</option>
      <option value="technology">テクノロジー</option>
      <option value="entertainment">エンタメ</option>
      <option value="sports">スポーツ</option>
      <option value="science">科学</option>
      <option value="health">健康</option>
    </select>
    <div class="text-right">
      <button class="btn btn-primary ml-2 p-2"
        @click="$store.dispatch('select', data.category)">表示</button>
    </div>
  </div>
  <News />
</template>

<script>
import News from "./components/News.vue";
import { ref, reactive, computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "App",
  setup(props) {
    const data = reactive({
      category: '',
    })
    return {
      data,
    }
  },
  components: {
    News,
  },
};
</script>
