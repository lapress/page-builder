<template>
  <div class="builder">
    <LpNavigationBar :title="config.navigation.title" :subtitle="config.navigation.subtitle">
      <button class="lp button is-info" @click.prevent="openModuleList">
        Dodaj moduł
      </button>
      <button class="lp button is-success" @click.prevent="save">
        Zapisz zmiany
      </button>

      <template v-slot:middle>
        <Counter label="Moduły" :count="count" />
        <Counter label="Ilosc wpisow" :count="count" />
      </template>
    </LpNavigationBar>

    <LpModuleMapper v-model="sections" />

    <b-aside :is-show="showAddPanel" placement="right" title="Dodawanie modułu" ok-text="wstaw" @close="showAddPanel = false">
      <a v-for="module in Object.keys($lapress.pages.modules)" href="#" :key="module" @click.prevent="addModule(module)" v-text="module"></a>
    </b-aside>
  </div>
</template>

<script>
import { KEY } from "../../index";
import Counter from "./atoms/Counter";

const LpModuleMapper = () => import(/* webpackChunkName: "lapress-module-mapper" */ './LpModuleMapper')

export default {
  name: 'LpPageBuilder',
  components: { LpModuleMapper, Counter },
  data: () => ({
    showAddPanel: false,
    sections: []
  }),
  computed: {
    count() {
      return 123;
    },
    config() {
      return this.$lapress[KEY];
    }
  },
  watch: {
    sections(sections) {
      this.$emit('input', sections)
    },
  },
  mounted() {
    this.$bus.$on('pageBuilder.module.remove', id => this.removeSection(id))
  },
  methods: {
    openModuleList() {
      this.showAddPanel = true;
    },
    removeSection(id) {
      const module = this.sections.find(module => module.id === id)
      const index = this.sections.indexOf(module)

      this.sections.splice(index, 0)
    },
  },
};
</script>

<style lang="scss">
$family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
$blue: #0073aa;

@import "~vue-blu/src/scss/blu";

.grid {
  margin-left: -20px;
}
.lp.button {
  box-shadow: none;
  border: none;
}
</style>
