import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import 'vue-router';
import '@iconify/vue';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Form",
  __ssrInlineRender: true,
  setup(__props) {
    const firstname = ref("");
    const email = ref("");
    const phone = ref("");
    const found = ref("");
    const message = ref("");
    const website = ref("");
    const errMsg = ref("");
    const state = ref("idle");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-container" }, _attrs))} data-v-bad4df3e><div class="title" data-v-bad4df3e><p data-v-bad4df3e>Entrer vos informations</p></div><form data-v-bad4df3e><div class="input-group" data-v-bad4df3e><label for="firstName" data-v-bad4df3e>Prénom</label><input type="text" name="username" id="username" placeholder="Entrer votre prénom"${ssrRenderAttr("value", firstname.value)} data-v-bad4df3e></div><div class="input-group" data-v-bad4df3e><label for="email" data-v-bad4df3e>Email</label><input type="text" name="email" id="email" placeholder="Entrer votre adresse email"${ssrRenderAttr("value", email.value)} data-v-bad4df3e></div><div class="input-group" data-v-bad4df3e><label for="phone" data-v-bad4df3e>Téléphone</label><input type="text" name="phone" id="phone" placeholder="Entrer votre numéro de téléphone"${ssrRenderAttr("value", phone.value)} data-v-bad4df3e></div><div class="input-group" data-v-bad4df3e><label for="found-select" data-v-bad4df3e>Comment m’avez-vous trouvé ?</label><select id="found-select" name="found-select" data-v-bad4df3e><option value="" disabled data-v-bad4df3e${ssrIncludeBooleanAttr(Array.isArray(found.value) ? ssrLooseContain(found.value, "") : ssrLooseEqual(found.value, "")) ? " selected" : ""}>— Sélectionnez une option —</option><option value="ref" data-v-bad4df3e${ssrIncludeBooleanAttr(Array.isArray(found.value) ? ssrLooseContain(found.value, "ref") : ssrLooseEqual(found.value, "ref")) ? " selected" : ""}>Recommandation</option><option value="GitHub" data-v-bad4df3e${ssrIncludeBooleanAttr(Array.isArray(found.value) ? ssrLooseContain(found.value, "GitHub") : ssrLooseEqual(found.value, "GitHub")) ? " selected" : ""}>GitHub</option><option value="Google" data-v-bad4df3e${ssrIncludeBooleanAttr(Array.isArray(found.value) ? ssrLooseContain(found.value, "Google") : ssrLooseEqual(found.value, "Google")) ? " selected" : ""}>Google</option><option value="LinkedIn" data-v-bad4df3e${ssrIncludeBooleanAttr(Array.isArray(found.value) ? ssrLooseContain(found.value, "LinkedIn") : ssrLooseEqual(found.value, "LinkedIn")) ? " selected" : ""}>LinkedIn</option><option value="Other" data-v-bad4df3e${ssrIncludeBooleanAttr(Array.isArray(found.value) ? ssrLooseContain(found.value, "Other") : ssrLooseEqual(found.value, "Other")) ? " selected" : ""}>Autre</option></select></div><div class="input-group" data-v-bad4df3e><label for="message" data-v-bad4df3e>Message</label><textarea name="" id="" placeholder="Votre message ici..." rows="3" data-v-bad4df3e>${ssrInterpolate(message.value)}</textarea></div><input${ssrRenderAttr("value", website.value)} class="hidden" tabindex="-1" autocomplete="off" data-v-bad4df3e>`);
      if (state.value === "ok") {
        _push(`<p class="success" data-v-bad4df3e>Merci ! Message envoyé</p>`);
      } else {
        _push(`<!---->`);
      }
      if (state.value === "error") {
        _push(`<p class="error" data-v-bad4df3e>${ssrInterpolate(errMsg.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button${ssrIncludeBooleanAttr(state.value === "sending") ? " disabled" : ""} type="submit" class="btn-primary sign" data-v-bad4df3e> Envoyer </button></form></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Form.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-bad4df3e"]]), { __name: "UiForm" });
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_UiForm = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-9f107616>`);
  _push(ssrRenderComponent(_component_UiForm, null, null, _parent));
  _push(`</section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ContactSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-9f107616"]]), { __name: "SectionsContactSection" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SectionsContactSection = __nuxt_component_0;
  _push(ssrRenderComponent(_component_SectionsContactSection, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { contact as default };
//# sourceMappingURL=contact-YO_leSGS.mjs.map
