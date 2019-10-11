<template>
  <draggable v-model="items">
    <div v-for="(section, index) in items" :key="section.module.id" :data-index="index">
      <SectionListItem :id="section.module.id" :module="section.type" />
    </div>
  </draggable>
</template>

<script>
import Draggable from 'vuedraggable';
import SectionListItem from "../atoms/SectionListItem";

export default {
  name: 'SectionsList',
  components: {
    Draggable,
    SectionListItem
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
  mounted() {
    this.$bus.$on('pageBuilder.sync', () => {
      this.items = this.sections;
    });
  },
};
</script>
