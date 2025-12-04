import __nuxt_component_0$1 from './index-CuQ5lyFa.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "UiGithubCard",
  __ssrInlineRender: true,
  props: {
    title: String,
    url: String,
    image: String,
    icon: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-a88a57b7><img${ssrRenderAttr("src", __props.image)}${ssrRenderAttr("alt", __props.title)} data-v-a88a57b7><div class="image" data-v-a88a57b7><!--[-->`);
      ssrRenderList(__props.icon, (i) => {
        _push(ssrRenderComponent(_component_Icon, {
          key: i,
          name: i,
          class: __props.icon.length === 1 ? "icon" : "icons"
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="card-info" data-v-a88a57b7><span data-v-a88a57b7>${ssrInterpolate(__props.title)}</span></div><a${ssrRenderAttr("href", __props.url)} class="button" data-v-a88a57b7>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "tabler:brand-github",
        class: "icons"
      }, null, _parent));
      _push(`</a></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/GithubCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a88a57b7"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=GithubCard-L1C7VRP7.mjs.map
