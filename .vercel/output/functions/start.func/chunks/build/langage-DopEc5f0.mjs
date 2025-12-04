import __nuxt_component_0$2 from './index-CuQ5lyFa.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$2 = {
  __name: "UiCard",
  __ssrInlineRender: true,
  props: { skill: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-f459f586><div class="content" data-v-f459f586><div class="back" data-v-f459f586><div class="back-content" data-v-f459f586>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: __props.skill.icon,
        class: "icon"
      }, null, _parent));
      _push(`</div></div><div class="front" data-v-f459f586><div class="img" data-v-f459f586><div class="circle" data-v-f459f586></div><div class="circle" id="right" data-v-f459f586></div><div class="circle" id="bottom" data-v-f459f586></div></div><div class="front-content" data-v-f459f586><small class="badge" data-v-f459f586>${ssrInterpolate(__props.skill.name)}</small><div class="description" data-v-f459f586><div class="title" data-v-f459f586><p class="title" data-v-f459f586><strong data-v-f459f586>${ssrInterpolate(__props.skill.descr)}</strong></p></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f459f586"]]);
const _sfc_main$1 = {
  __name: "SectionsLanguageSection",
  __ssrInlineRender: true,
  setup(__props) {
    const skills = [
      {
        icon: "fa6-brands:figma",
        name: "Figma",
        descr: "Le bac à sable des designers : on bouge des rectangles jusqu’à ce que ça fasse une app (et ça collabore très bien)."
      },
      {
        icon: "fa6-brands:html5",
        name: "HTML5",
        descr: "Le squelette du web. Sans lui, ton site tient debout… mais pas très glam"
      },
      {
        icon: "fa6-brands:css3",
        name: "CSS3",
        descr: " Magie noire pour faire tenir trois colonnes partout. Flexbox/Grid = vie sauve."
      },
      {
        icon: "fa6-brands:js",
        name: "JavaScript",
        descr: "La caféine du navigateur : rend les pages vivantes (et parfois un peu trop)."
      },
      {
        icon: "fa6-brands:vuejs",
        name: "VueJS",
        descr: "Le framework “zen” : réactif, simple, on respire et ça ship."
      },
      {
        icon: "fa6-brands:react",
        name: "React",
        descr: "Des composants, des hooks, et un écosystème qui a plus d’extensions qu’un navigateur en 2010."
      },
      {
        icon: "fa6-brands:node",
        name: "NodeJS",
        descr: "JavaScript côté serveur : rapide, bavard, adore les callbacks (promises now, promis)."
      },
      {
        icon: "simple-icons:prisma",
        name: "Prisma",
        descr: "L’ORM qui te rend SQL-friendly : schémas lisibles, types costauds, migrations propres."
      },
      {
        icon: "simple-icons:mongodb",
        name: "MongoDB",
        descr: "Base NoSQL “documents”. Tu mets un JSON, tu ressors un JSON. Liberté, parfois chaos."
      },
      {
        icon: "simple-icons:mysql",
        name: "MySQL",
        descr: "Le classique du web. Solide, rapide, pas trop capricieux."
      },
      {
        icon: "simple-icons:postgresql",
        name: "PostgreSQL",
        descr: "Le studieux de la bande : SQL musclé, JSON qui va bien, extensions puissantes."
      },
      {
        icon: "simple-icons:docker",
        name: "Docker",
        descr: "“Ça marche chez moi” en production : tout dans un container, peace of mind."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "skills" }, _attrs))} data-v-afe56b2e><!--[-->`);
      ssrRenderList(skills, (s) => {
        _push(ssrRenderComponent(_component_UiCard, { skill: s }, null, _parent));
      });
      _push(`<!--]--></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/LanguageSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-afe56b2e"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SectionsLanguageSection = __nuxt_component_0;
  _push(ssrRenderComponent(_component_SectionsLanguageSection, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/langage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const langage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { langage as default };
//# sourceMappingURL=langage-DopEc5f0.mjs.map
