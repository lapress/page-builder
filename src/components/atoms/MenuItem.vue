<template>
  <a
    href="#"
    class="item"
    @click.prevent="add"
  >
    <strong class="item__label" v-text="label" />
    <span v-if="description" class="item__description" v-text="description" />
    <img
      v-if="image"
      :src="image"
      :alt="label"
      class="item__image"
    >
  </a>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    module: {
      type: String,
      required: true
    },
  },
  computed: {
    config() {
      return this.$lapress.pages.modules[this.module];
    },
    label() {
      return this.config.menu.label || this.config.key;
    },
    description() {
      return this.config.menu.description;
    },
    image() {
      if (!this.config.menu.image) {
        return;
      }
      return this.config.menu.image.replace('{theme}', this.$lapress.data.theme);
    }
  },

  methods: {
    add() {
      this.$bus.$emit('pageBuilder.module.add', this.module);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@lapress/frontend-core/src/sass/variables';

.item {
  display: block;
  padding: 10px;

  &:active,
  &:focus {
    outline: none;
  }

  &__label {
    color: map-get($polarNight, 400);
    display: block;
    font-weight: 500;
  }

  &__description{
    color: map-get($polarNight, 100);
    font-size: 12px;
  }

  &__image {
    margin: 20px 0;
    max-width: 100%;
  }
}
</style>
