<template>
  <div class="section-item">
    :: {{ label }} <span class="section-item__id">({{ id }})</span>
    <span class="section-item__delete" @click="removeSection(id)">
      <LpCloseSvg color="#4C566A" mini />
    </span>
  </div>
</template>

<script>
export default {
  name: 'SectionListItem',
  props: {
    module: {
      type: String,
      required: true
    },
    id: {
      type: String,
      default: null
    }
  },
  data: () => ({}),
  computed: {
    config() {
      return this.$lapress.pages.modules[this.module];
    },
    label() {
      return this.config.menu.label || this.config.key;
    },
  },
  methods: {
    removeSection(id) {
      this.$bus.$emit('pageBuilder.module.remove', id);
    }
  },
};
</script>
<style lang="scss" scoped>
@import '~@lapress/frontend-core/src/sass/variables';
.section-item {
  display: flex;
  align-items: center;
  background: map-get($snowStorm, 100);
  color: map-get($polarNight, 200);
  font-weight: 600;
  padding: 8px;
  margin-bottom: .75rem;
  border-radius: 2px;

  &__id {
    display: inline-block;
    margin-left: .5rem;
    opacity: .5;
    font-size: 10px;
  }

  &__delete {
    cursor: pointer;
    margin-left: auto;
  }
}

</style>
