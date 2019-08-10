const data = {
  key: null,
  menu: {
    label: null,
    group: null,
    description: null,
    image: null
  },
  config: {
    title: null,
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
    showMeta: false
  }),

  mounted() {
    this.init();
  },

  methods: {
    init() {
      if (this.module.posts.length === this.module.count) return this.$emit('init');

      const difference = this.module.count - this.module.posts.length;
      for (let i = 0; i < difference;i++) {
        this.module.posts.push({});
      }
      this.$emit('init');
    },
    removeSection() {
      this.$bus.$emit('pagebuilder', this.module.id);
    },
  }
};

export const createModule = _module => {
  _module.mixins = [data];
  _module.key = _module.key || data.key;
  _module.config = Object.assign(data.config, _module.config);
  _module.menu = Object.assign(data.menu, _module.menu);

  return _module;
};


export default data;
