<template>
  <builder-render-content
    v-if="canShowContent"
    model="product"
    :content="content"
    :api-key="apiKey"
    :customComponents="getRegisteredComponents()"
  />
</template>
<script>
import {
  RenderContent,
  getContent,
  isPreviewing,
} from '@builder.io/sdk-vue/vue3';
import HelloWorldComponent from './HelloWorld.vue';
import Baz from './IndexCtaBanner.vue';

const BUILDER_PUBLIC_API_KEY = '3e94875091f14b5fbf2446148f458738'; // ggignore
export const REGISTERED_COMPONENTS = [
  {
    component: Baz,
    name: 'Index Cta Banner',
    canHaveChildren: true,
    image:
      'https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png',
    inputs: [
      {
        name: 'texta',
        type: 'string',
        defaultValue: 'Highlights',
      },
    ],
  },
  {
    component: HelloWorldComponent,
    name: 'HelloWorld',
    canHaveChildren: true,
    image:
      'https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png',
    inputs: [
      {
        name: 'texta',
        type: 'string',
        defaultValue: 'Highlights',
      },
    ],
  },
];

export default {
  name: 'BuilderContent',
  components: { 'builder-render-content': RenderContent },
  data: () => ({
    canShowContent: true,
    content: null,
    apiKey: BUILDER_PUBLIC_API_KEY,
  }),
  methods: {
    getRegisteredComponents() {
      return REGISTERED_COMPONENTS;
    },
  },
  mounted() {
    getContent({
      model: 'product',
      apiKey: BUILDER_PUBLIC_API_KEY,
      userAttributes: {
        urlPath: window.location.pathname,
      },
    }).then((res) => {
      this.content = res;
      this.canShowContent = this.content || isPreviewing();
    });
  },
};
</script>
