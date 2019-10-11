<template>
  <input
    v-model="title"
    type="text"
    class="title"
    :class="`title--h${level}`"
    placeholder="Wprowadź tytuł..."
  >
</template>

<script>
export default {
  name: 'Title',
  props: {
    // eslint-disable-next-line vue/require-prop-types
    value: {
      required: true
    },
    level: {
      type: Number,
      default: 2,
      validator: level => level > 1 && level < 6
    }
  },
  data() {
    return {
      title: this.value
    };
  },

  computed: {
    isActive() {
      return this.value !== undefined;
    }
  },
  watch: {
    title(title) {
      this.$emit('input', title);
    },
    value(value) {
      this.title = value
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import '~@lapress/frontend-core/src/sass/variables';
.title {
  background: transparent;
  border: 0;
  box-shadow: none;
  color: map-get($polarNight, 400);
  font-weight: 500;
  display: block;
  transition: all .3s ease;
  padding: 5px 0;
  width: 100%;

  &--h2 {
    font-size: 32px;
  }

  &--h3 {
    font-size: 24px;
  }

  &--h4 {
    font-size: 18px;
  }

  &--h5 {
    font-size: 16px;
  }


  &:active,
  &:focus {
    background: map-get($snowStorm, 200);
    box-shadow: none;
    outline: none;
  }

  &::placeholder {
   color: map-get($snowStorm, 300);
  }
}
</style>
