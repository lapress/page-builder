<template>
  <draggable v-model="sections">
    <div v-for="(section, index) in sections" :key="section.id" :data-index="index">
      <component
        :is="getComponentName(section)"
        v-model="sections[index]"
        :section="section"
      />
    </div>
  </draggable>
</template>

<script>
import Draggable from 'vuedraggable';

export default {
  name: 'LpSectionMapper',
  components: { Draggable },
  props: {
    sections: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({}),
  computed: {},
  methods: {
    getComponentName(section) {

    },

  },
};
</script>
