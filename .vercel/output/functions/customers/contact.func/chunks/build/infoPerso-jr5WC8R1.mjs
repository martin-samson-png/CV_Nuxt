import { _ as __nuxt_component_0$1 } from './Photo-CXLPMJvx.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import 'vue-router';
import '@iconify/vue';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_UiPhoto = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-08af7dfe><div class="about-me" data-v-08af7dfe><div class="photo" data-v-08af7dfe>`);
  _push(ssrRenderComponent(_component_UiPhoto, { class: "photo-profile" }, null, _parent));
  _push(`</div><div class="description" data-v-08af7dfe><h2 data-v-08af7dfe>Martin Samson</h2><h3 data-v-08af7dfe>A Propos De Moi</h3><p data-v-08af7dfe> Actuellement en formation de développeur à Pau (France). Après quelques années à jongler entre assiettes et clients dans la restauration, j’ai troqué le tablier pour le clavier — moins de brûlures, plus de <em data-v-08af7dfe>bugs</em> (mais je les dresse bien !).<br data-v-08af7dfe> J’adore coder, concevoir des applications et transformer des idées en projets concrets. Curieux de nature, j’apprends vite, j’expérimente beaucoup et j’aime travailler en équipe.<br data-v-08af7dfe> Quand je ne code pas, on me trouve souvent en train de faire du sport, de jouer… ou de planifier mon prochain voyage (avec un tableau Trello que même mon GPS respecte). </p></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/InfoPersoSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-08af7dfe"]]), { __name: "SectionsInfoPersoSection" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SectionsInfoPersoSection = __nuxt_component_0;
  _push(ssrRenderComponent(_component_SectionsInfoPersoSection, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/infoPerso.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const infoPerso = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { infoPerso as default };
//# sourceMappingURL=infoPerso-jr5WC8R1.mjs.map
