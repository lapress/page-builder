<template>
  <div>
    <div v-for="(_items, key) in items" :key="key" class="m-group">
      <h4 class="title">
        :: {{ key }}
      </h4>
      <MenuItem
        v-for="module in _items"
        :key="module.key"
        :module="module.key"
      />
    </div>
  </div>
</template>

<script>
import MenuItem from '../atoms/MenuItem';

export default {
  name: 'SidebarMenu',
  components: { MenuItem },
  data: () => ({
    query: ''
  }),
  computed: {
    items() {
      const groups = {};
      Object.values(this.$lapress.pages.modules).forEach(module => {
        const key = module.menu.group || 'Podstawowe';

        if (groups[key] === undefined) {
          groups[key] = [];
        }
        groups[key] = [...groups[key], module];
      });

      return groups;
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
@import '~@lapress/frontend-core/src/sass/variables';

.m-group {
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
}

.title {
  color: map-get($polarNight, 100);
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 5px;
}
</style>
