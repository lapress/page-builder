<template>
  <div class="builder">
    <LpNavigationBar :title="config.navigation.title" :subtitle="config.navigation.subtitle">
      <button class="lp button is-info" @click.prevent="openModuleList">
        Dodaj moduł
      </button>
      <button class="lp button is-success" type="submit" name="update">
        Zapisz zmiany
      </button>

      <template v-slot:middle>
        <a href="#" class="" @click.prevent="showListPanel = true">
          <Counter label="Moduły" :count="count"/>
        </a>

        <Counter label="Ilosc wpisow" :count="postCount"/>
      </template>
    </LpNavigationBar>
    <LpModuleMapper v-model="sections" class="container m-mapper"/>
    <b-aside :is-show="showAddPanel" placement="right" title="Dodawanie modułu" :show-ok="false" :show-cancel="false" @close="showAddPanel = false">
     <SidebarMenu @add="addModule" />
    </b-aside>
    <b-aside :is-show="showListPanel" placement="right" title="Lista Modułów" :show-ok="false" :show-cancel="false" @close="showListPanel = false">
      <SectionsList v-model="sections" />
    </b-aside>
  </div>
</template>

<script>
import uuid from 'uuid'
import { KEY } from "../../index"
import Counter from "./atoms/Counter"

const SidebarMenu = () => import(/* webpackChunkName: "lapress-blocks-pb-sidebar-menu" */ './blocks/SidebarMenu')
const SectionsList = () => import(/* webpackChunkName: "lapress-blocks-pb-sidebar-menu" */ './blocks/SectionsList')
const LpModuleMapper = () => import(/* webpackChunkName: "lapress-module-mapper" */ './LpModuleMapper')

export default {
  name: 'LpPageBuilder',
  components: {
    LpModuleMapper,
    SidebarMenu,
    SectionsList,
    Counter
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
  },
  data(){
    return {
      showAddPanel: false,
      showListPanel: false,
      sections: this.value
    }
  },
  computed: {
    count() {
      return this.sections.length
    },
    postCount() {
      return this.sections.reduce((sum, section) => sum + section.module.count, 0)
    },
    config() {
      return this.$lapress[KEY]
    }
  },
  watch: {
    sections(sections) {
      this.$emit('input', sections)
    },
  },
  mounted() {
    this.$bus.$on('pageBuilder.module.remove', this.removeSection)
    this.$bus.$on('pageBuilder.module.add',  this.addModule)
  },
  methods: {
    openModuleList() {
      this.showAddPanel = true
    },
    removeSection(id) {
      const section = this.sections.find(section => section.module.id === id)
      const index = this.sections.indexOf(section)
      this.sections.splice(index, 1)
    },
    addModule(key) {
      const _module = this.$lapress.pages.modules[key]
      const config = JSON.parse(JSON.stringify(_module.config))
      const section = {
        type: _module.name,
        module: {
          id: uuid.v4(),
          ...config
        }
      }
      this.sections.push(Object.assign({}, section))
    },
  },
}
</script>

<style lang="scss">
@import '~@lapress/frontend-core/src/sass/blu.scss';

.m-mapper {
  /*padding: 20px 0;*/
}

.grid {
  margin-left: -20px;
}

.lp.button {
  box-shadow: none;
  border: none;
}

.control {
  margin: 2rem 0;

  &:first-child {
    margin-top: 0;
  }
}
</style>
