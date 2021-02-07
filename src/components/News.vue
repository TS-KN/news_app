<template>
  <section class="alert alert-primary">
    <h2>{{ data.title }}</h2>
  </section>
  <section class="alert alert-secondary mt-3">
    <div class="d-flex p-2">
      <div>
        <p class="h5 text-left">{{ data.n_title }}</p>
        <p class="text-left mt-5">{{ data.content }}</p>
      </div>
      <img src="src\assets\logo.png" class="img-responsive" />
    </div>
  </section>
</template>

<script>
import { ref, reactive, computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  name: "News",
  setup(props) {
    const data = reactive({
      title: "最新のニュース",
      n_title: "ミャンマーでインターネット遮断、市民の反発高まる中　抗議デモも",
      content:
        "ミャンマー軍は6日、国内のインターネット接続を遮断した。この日は1日の軍事クーデターに反対する多くの市民が、抗議デモに参加した。",
    });
    return {
      data,
    };
  },
};
</script>
