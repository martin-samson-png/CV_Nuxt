import __nuxt_component_0$1 from './index-CuQ5lyFa.mjs';
import { ref, resolveComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
  __name: "SectionsChronologieSection",
  __ssrInlineRender: true,
  setup(__props) {
    const activeIndex = ref(null);
    const close = () => {
      activeIndex.value = null;
    };
    const experiences = [
      { value: "bac", title: "Bac ES", date: "2019" },
      { value: "mcdo", title: "McDonald's", date: "2019-2024" },
      { value: "afec", title: "TP Développeur Web et Web Mobile", date: "2025" }
    ];
    const lists = [
      [
        {
          descr: "2019 — Baccalauréat ES, lycée Condorcet."
        }
      ],
      [
        {
          id: 2,
          title: "Team Member → Trainer",
          descr: "Juil. 2019 → Août 2022 — McDonald’s Bordeaux (Bassin à flot) : service client, travail d’équipe, puis formation des nouvelles recrues."
        },
        {
          title: "Shift Manager",
          descr: "Sept. 2022 → Janv. 2024 — Manager : supervision des équipes, pilotage des opérations et des performances au quotidien."
        },
        {
          title: "FL1 Certification (Fundamentals of Leadership Level 1)",
          descr: "Certification/formation en leadership : coordination d’équipe et gestion des conflits."
        }
      ],
      [
        {
          descr: `Depuis mars 2025 — Formation Développeur Web & Mobile à l’AFEC Pau (HTML, CSS, JavaScript, React, Node.js, SQL).`
        }
      ]
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Modale = resolveComponent("Modale");
      const _component_Icon = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-ecf4f06d><!--[-->`);
      ssrRenderList(experiences, (e, index) => {
        _push(`<div class="timeline" data-v-ecf4f06d><div class="line" data-v-ecf4f06d></div><div class="experiences" data-v-ecf4f06d><div class="date" data-v-ecf4f06d><span data-v-ecf4f06d>${ssrInterpolate(e.date)}</span></div><button class="${ssrRenderClass(
          activeIndex.value === index ? "btn-clicked btn-circle" : "btn-primary btn-circle"
        )}" data-v-ecf4f06d></button><div class="title" data-v-ecf4f06d><span data-v-ecf4f06d>${ssrInterpolate(e.title)}</span></div>`);
        _push(ssrRenderComponent(_component_Modale, {
          lists: lists[index],
          "is-active": activeIndex.value === index,
          onClose: close
        }, null, _parent));
        _push(`</div>`);
        if (index === experiences.length - 1) {
          _push(`<div class="col" data-v-ecf4f06d><div class="last-line" data-v-ecf4f06d></div>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "fa6-solid:angle-down",
            class: "faAngleDown"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ChronologieSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ecf4f06d"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SectionsChronologieSection = __nuxt_component_0;
  _push(ssrRenderComponent(_component_SectionsChronologieSection, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chronologie.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chronologie = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { chronologie as default };
//# sourceMappingURL=chronologie-BHX612Jr.mjs.map
