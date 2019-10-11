<template>
  <div class="banner-wrapper" @dblclick="isEditOpen = true">
    <div class="banner">
      <span v-if="module.slot" class="banner__slot" v-text="module.slot" />
      <img :src="image" alt="">
    </div>
    <b-aside
      :is-show="isEditOpen"
      placement="right"
      title="Edycja bannera"
      :show-ok="false"
      :show-cancel="false"
      @close="isEditOpen = false"
    >
      <p>Nazwa kreacji z panelu Google Ad Manager</p>
      <p class="control">
        <input
          v-model="module.slot"
          type="text"
          class="input"
          placeholder="Wprowadz nazwę"
          @keypress.enter="isEditOpen = false"
        >
      </p>
    </b-aside>
  </div>
</template>

<script>
import { createModule } from './Module';
const IMAGE_PATH = '/{theme}/dist/lapress/images/modules/banner.jpg'
export default createModule({
  name: 'BannerModule',
  key: 'BannerModule',
  config: {
    slot: null
  },
  menu: {
    label: 'Banner',
    description: 'Banner reklamowy z systemu Google Ad Manager',
    image: IMAGE_PATH
  },
  computed: {
    image() {
      return IMAGE_PATH.replace('{theme}', this.$lapress.data.theme)
    }
  },

  methods: {},
});
</script>

<style lang="scss" scoped>
@import '~@lapress/frontend-core/src/sass/variables';

.banner-wrapper {
  padding: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 1200px;
  height: 400px;
}

.banner {
  position: relative;

  &__slot {
    display: block;
    background: map-get($snowStorm, 300);
    color: map-get($polarNight, 100);
    font-size: 18px;
    padding: 5px 15px;
    top: 20px;
    left: 20px;
    position: absolute;
  }
}

</style>

