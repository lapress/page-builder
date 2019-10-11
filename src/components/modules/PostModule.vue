<template>
  <div>
    <SlotTitle v-if="hasTitle" v-model="module.title" :level="4" />
    <SlotArticle v-if="module.posts[0]" v-model="module.posts[0]" />
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsam odit sed? Accusamus ad, assumenda autem consequuntur ducimus enim hic laborum libero magnam modi quae quia, rem unde velit voluptate?
  </div>
</template>

<script>
import SlotTitle from '../atoms/Slots/Title';
import SlotArticle from '../atoms/Slots/Article';

import { createModule } from './Module';

export default createModule({
  name: 'PostModule',
  key: 'PostModule',
  components: { SlotTitle, SlotArticle },
  config: {
    count: 3,
    title: null
  },
  menu: {
    group: 'Post',
    // description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n',
    // image: 'http://antyweb.test/antyweb/dist/lol.png'
  },
  data: () => ({
    editor: ''
  }),
  computed: {},
  methods: {},

});
</script>
