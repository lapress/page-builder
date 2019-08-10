<template>
  <div class="counter">
    <span class="counter__label" v-text="label" />
    <strong class="counter__count" v-text="count" />
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    label: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      default: 0
    },
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.counter {
  color: #ffffff;
  text-align: center;
  padding: 0 10px;


  &__label {
    display: block;
    font-size: 12px;
    margin-bottom: 4px;
    opacity: .5;
  }

  &__count {
    color: #ffffff;
    opacity: .85;
    font-size: 16px;
  }
}
</style>
