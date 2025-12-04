import { _ as __nuxt_component_0$1 } from './GithubCard-CRyZJkdi.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './index-CRNcX4sX.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './composables-BvBNKGvI.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'resend';
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
  __name: "SectionsEnCoursSection",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = [
      {
        title: "Benelink-Association-Benevole",
        url: "https://github.com/martin-samson-png/Benelink",
        image: "/image/Benelink.png",
        icon: ["fa6-brands:vuejs", "fa6-brands:node"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiGithubCard = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-cf4caa10><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/EnCoursSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-cf4caa10"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SectionsEnCoursSection = __nuxt_component_0;
  _push(ssrRenderComponent(_component_SectionsEnCoursSection, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/enCours.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const enCours = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { enCours as default };
//# sourceMappingURL=enCours-Dmf37LJT.mjs.map
