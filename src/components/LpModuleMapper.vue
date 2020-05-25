<template>
  <draggable v-model="items">
    <div v-for="(section, index) in items" :key="section.module.id" :data-index="index">
      <component
        :is="getComponentName(section)"
        v-model="sections[index]"
        :module="section.module"
      />
    </div>
  </draggable>
</template>

<script>
import Draggable from 'vuedraggable';

import {config} from '@lapress/frontend-core';

export default {
  name: 'LpSectionMapper',
  components: {
    Draggable,
    ...config.pages.modules
  },
  model: {
    prop: 'sections',
    event: 'change'
  },
  props: {
    sections: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      items: this.sections
    };
  },
  watch: {
    items(items){
      this.$emit('change', items);
    },
    sections(sections) {
      this.items = sections
    }
  },
  methods: {
    getComponentName(section) {
      return section.type;
    },
  },
};
</script>
