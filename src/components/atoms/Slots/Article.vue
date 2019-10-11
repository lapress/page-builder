<template>
  <div @dblclick="isEditOpen = true">
    <slot>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad autem commodi corporis, eveniet exercitationem expedita illo ipsum maiores modi nisi non nostrum odio provident quis quod, ratione veritatis? Ut.
    </slot>

    <b-aside
      :is-show="isEditOpen"
      placement="right"
      title="Edycja artykułu"
      :show-ok="false"
      :show-cancel="false"
      @close="isEditOpen = false"
    >
      <PostSearch @select="select" />
      <div v-if="article.title" class="article">
        <span class="close article__close" @click="reset">×</span>
        <h2 class="article__title" v-text="article.title" />
        <div class="article__meta">
          <span class="article__author" v-text="article.author.name" />
          <span class="article__meta__separator">&#183;</span>
          <span class="article__date" v-text="article.date" />
        </div>

        <p v-text="article.excerpt" />
        <img :src="article.thumbnail" alt="">
      </div>
      <slot name="edit" :post="article" />
    </b-aside>
  </div>
</template>

<script>
import PostSearch from '@lapress/frontend-core/src/components/atoms/PostSearch';

export default {
  name: 'Article',
  components: { PostSearch },
  props: {
    value: {
      type: [Object, Array],
      required: true
    },
  },
  data() {
    return {
      article: this.value,
      isEditOpen: false
    };
  },
  computed: {},
  watch: {
    article(article) {
      this.$emit('input', article);
    },
  },
  methods: {
    select(post) {
      this.article = post;
    },
    reset() {
      this.article = {};
    }
  },
};
</script>
<style lang="scss" scoped>
@import '~@lapress/frontend-core/src/sass/variables';

.article {
  position: relative;

  &__close {
    position: absolute;
    right: 0;
  }

  &__title {
    padding: 0 50px 10px 0;
  }

  &__meta {
    color: map-get($polarNight, 100);
    font-size: 12px;
    margin-bottom: 10px;
    opacity: .75;
  }
}
</style>
