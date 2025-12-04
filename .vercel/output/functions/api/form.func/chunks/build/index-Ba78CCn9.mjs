import { _ as _export_sfc, a as __nuxt_component_0$2 } from './server.mjs';
import { mergeProps, withCtx, createVNode, createBlock, createCommentVNode, createTextVNode, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './Photo-CXLPMJvx.mjs';
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

const _sfc_main$2 = {
  __name: "UiLinkButton",
  __ssrInlineRender: true,
  props: {
    categories: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<!--[-->`);
      ssrRenderList(__props.categories, (categorie) => {
        _push(`<div data-v-b70ccc38>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "nav-link",
          to: `/${categorie.split(" ").join("")}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="btn-primary" data-v-b70ccc38${_scopeId}><span data-v-b70ccc38${_scopeId}>${ssrInterpolate(categorie)}</span></button>`);
            } else {
              return [
                createVNode("button", { class: "btn-primary" }, [
                  createVNode("span", null, toDisplayString(categorie), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/LinkButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b70ccc38"]]);
const _sfc_main$1 = {
  __name: "UiSwitchPage",
  __ssrInlineRender: true,
  props: { path: String, link: String, index: String },
  setup(__props) {
    const props = __props;
    console.log(props.link);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: __props.path ? `/${__props.path}/${__props.link.toLowerCase().split(" ").join("")}` : `/${__props.link.toLowerCase().split(" ").join("")}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="${ssrRenderClass(
              __props.index === "prev" ? "btn-primary cssbuttons-io-button-left" : "btn-primary cssbuttons-io-button-right"
            )}"${_scopeId}>`);
            if (__props.index % 2 === 0) {
              _push2(`<div class="icon-left"${_scopeId}><svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M7.828 11l5.364-5.364-1.414-1.414L4 12l7.778 7.778 1.414-1.414L7.828 13H20v-2z" fill="currentColor"${_scopeId}></path></svg></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(__props.link)} `);
            if (__props.index === "next") {
              _push2(`<div class="icon-right"${_scopeId}><svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"${_scopeId}></path></svg></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", {
                class: __props.index === "prev" ? "btn-primary cssbuttons-io-button-left" : "btn-primary cssbuttons-io-button-right"
              }, [
                __props.index % 2 === 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "icon-left"
                }, [
                  (openBlock(), createBlock("svg", {
                    height: "24",
                    width: "24",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M7.828 11l5.364-5.364-1.414-1.414L4 12l7.778 7.778 1.414-1.414L7.828 13H20v-2z",
                      fill: "currentColor"
                    })
                  ]))
                ])) : createCommentVNode("", true),
                createTextVNode(" " + toDisplayString(__props.link) + " ", 1),
                __props.index === "next" ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "icon-right"
                }, [
                  (openBlock(), createBlock("svg", {
                    height: "24",
                    width: "24",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z",
                      fill: "currentColor"
                    })
                  ]))
                ])) : createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/SwitchPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const categories = [
      "Portfolio",
      "Contact",
      "Avis",
      "Service",
      "Info perso",
      "Chronologie",
      "Langage",
      "En cours"
    ];
    const grouped = [];
    for (let i = 0; i < categories.length; i += 2) {
      grouped.push([categories[i], categories[i + 1]]);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiLinkButton = __nuxt_component_0;
      const _component_UiPhoto = __nuxt_component_0$1;
      const _component_UiSwitchPage = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-c235f300><!--[-->`);
      ssrRenderList(grouped, (group, index2) => {
        _push(`<div class="${ssrRenderClass(`categorie-nav${index2}`)}" data-v-c235f300>`);
        _push(ssrRenderComponent(_component_UiLinkButton, { categories: group }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_UiPhoto, { class: "photo-profile" }, null, _parent));
      _push(ssrRenderComponent(_component_UiSwitchPage, {
        class: "switch-page",
        index: "next",
        link: "Start"
      }, null, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c235f300"]]);

export { index as default };
//# sourceMappingURL=index-Ba78CCn9.mjs.map
