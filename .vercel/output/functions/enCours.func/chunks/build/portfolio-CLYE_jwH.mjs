import { _ as __nuxt_component_0$1 } from './GithubCard-L1C7VRP7.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './index-CuQ5lyFa.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './composables-CMP1omG0.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:fs';
import 'node:path';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main$1 = {
  __name: "SectionsPortfolioSection",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = [
      {
        title: "TodoList-VueJS",
        url: "https://github.com/martin-samson-png/TodoList-VueJS",
        image: "/image/TodoList_VueJs.png",
        icon: ["fa6-brands:vuejs"]
      },
      {
        title: "portail-evenements-Martin",
        url: "https://github.com/martin-samson-png/portail-evenements-Martin",
        image: "/image/Événements_WordPress.png",
        icon: ["fa6-brands:css3", "fa6-brands:js"]
      },
      {
        title: "Portfolio-NuxtJS",
        url: "https://github.com/martin-samson-png/PortfolioNuxt",
        image: "/image/PortfolioNuxt.png",
        icon: ["fa6-brands:vuejs"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiGithubCard = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-b4f78b2d><!--[-->`);
      ssrRenderList(projects, (p) => {
        _push(ssrRenderComponent(_component_UiGithubCard, {
          key: p.title,
          title: p.title,
          icon: p.icon,
          url: p.url,
          image: p.image
        }, null, _parent));
      });
      _push(`<!--]--></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/PortfolioSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b4f78b2d"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SectionsPortfolioSection = __nuxt_component_0;
  _push(ssrRenderComponent(_component_SectionsPortfolioSection, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const portfolio = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { portfolio as default };
//# sourceMappingURL=portfolio-CLYE_jwH.mjs.map
