import merge from 'lodash.merge';

const data = {
  key: null,
  menu: {
    label: null,
    group: null,
    description: null,
    image: null
  },
  config: {
    posts: [],
    count: 0
  },
  props: {
    module: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    showMeta: false,
    isEditOpen: false,
  }),

  computed: {
    hasTitle() {
      return this.module.title !== undefined;
    },
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      if (this.module.posts.length === this.module.count) return this.$emit('init');

      const difference = this.module.count - this.module.posts.length;
      for (let i = 0; i < difference;i++) {
        this.module.posts.push({});
      }
      this.$emit('pageBuilder.module.init');
    },
    removeSection() {
      this.$bus.$emit('pageBuilder.module.remove', this.module.id);
    },
    decorateImagePath(path) {
      return path.replace('{theme}', this.$lapress.data.theme);
    },
  }
};

export const createModule = _module => {
  const config = Object.assign({}, data.config);
  const menu = Object.assign({}, data.menu);

  _module.mixins = [data];
  _module.key = _module.key || data.key || _module.name;
  _module.config = Object.assign({}, merge(config, _module.config));
  _module.menu = Object.assign({}, merge(menu, _module.menu));

  return _module;
};


export default data;
