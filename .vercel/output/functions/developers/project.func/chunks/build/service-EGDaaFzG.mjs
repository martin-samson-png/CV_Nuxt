import { ref, mergeProps, computed, watch, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual, ssrLooseContain, ssrRenderClass } from 'vue/server-renderer';
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

const _sfc_main$5 = {
  __name: "UiProgressService",
  __ssrInlineRender: true,
  props: { value: Number, max: Number },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "progress" }, _attrs))}><div>Etape ${ssrInterpolate(__props.value + 1)}/${ssrInterpolate(__props.max + 1)}</div><progress${ssrRenderAttr("value", __props.value)}${ssrRenderAttr("max", __props.max)}></progress></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/ProgressService.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "UiQuestionService",
  __ssrInlineRender: true,
  props: { question: Object },
  emits: ["answer"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const answer = ref(null);
    const hasAnswer = computed(() => {
      switch (props.question.type) {
        case "single":
          return answer.value !== null;
        case "number":
          return typeof answer.value === "number" && !Number.isNaN(answer.value);
        case "multi":
          return Array.isArray(answer.value);
      }
    });
    watch(
      () => props.question,
      (q) => {
        if (q.type === "single") answer.value = null;
        else if (q.type === "number") answer.value = 0;
        else if (q.type === "multi") answer.value = [];
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "question" }, _attrs))}><div class="content-section"><h3>${ssrInterpolate(__props.question.title)} :</h3>`);
      if (__props.question.type === "single") {
        _push(`<ul><!--[-->`);
        ssrRenderList(__props.question.options, (opt, i) => {
          _push(`<li><label${ssrRenderAttr("for", `answer${i}`)}><input${ssrRenderAttr("id", `answer${i}`)} type="radio" name="answer"${ssrIncludeBooleanAttr(ssrLooseEqual(answer.value, opt.label)) ? " checked" : ""}${ssrRenderAttr("value", opt.label)}> ${ssrInterpolate(opt.label)}</label></li>`);
        });
        _push(`<!--]--></ul>`);
      } else if (__props.question.type === "multi") {
        _push(`<ul><!--[-->`);
        ssrRenderList(__props.question.options, (opt, i) => {
          _push(`<li><label${ssrRenderAttr("for", `answer${i}`)}><input type="checkbox"${ssrRenderAttr("id", `answer${i}`)}${ssrRenderAttr("value", opt.id)}${ssrIncludeBooleanAttr(Array.isArray(answer.value) ? ssrLooseContain(answer.value, opt.id) : answer.value) ? " checked" : ""}>${ssrInterpolate(opt.label)}</label></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<div><input type="number"${ssrRenderAttr("min", __props.question.min)}${ssrRenderAttr("max", __props.question.max)}${ssrRenderAttr("value", answer.value)}></div>`);
      }
      _push(`</div><div class="btn-section"><button class="${ssrRenderClass(!hasAnswer.value ? "btn-disabled" : "btn-primary")}"${ssrIncludeBooleanAttr(!hasAnswer.value) ? " disabled" : ""}> Question suivante </button></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/QuestionService.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "UiRecapService",
  __ssrInlineRender: true,
  props: {
    quiz: Object,
    answers: Array
  },
  setup(__props) {
    const props = __props;
    const total = computed(() => {
      if (!props?.quiz?.steps?.length) return 0;
      let prices = [];
      let total2 = 0;
      props.quiz.steps.forEach((step, i) => {
        if (Array.isArray(step.options) && step.type === "single") {
          const idx = step.options.findIndex(
            (a) => Object.values(a).includes(props.answers?.[i])
          );
          const impact = step.options?.[idx]?.impact;
          if (impact?.type === "days") {
            prices.push({
              price: props.quiz.tjm * impact.value,
              answer: props.answers[i]
            });
            total2 += props.quiz.tjm * impact.value;
          }
        }
        if (step.type === "number") {
          const impact = step.perUnitImpact;
          if (impact?.type === "days") {
            total2 += props.quiz.tjm * (props.answers[i] * impact.value);
            prices.push({
              price: props.quiz.tjm * (props.answers[i] * impact.value),
              answer: props.answers[i]
            });
          }
        }
        if (Array.isArray(step.options) && step.type === "multi") {
          props?.answers?.[i]?.map((answer) => {
            const idx = step.options.findIndex(
              (a) => Object.values(a).includes(answer)
            );
            const impact = step.options?.[idx]?.impact;
            if (impact?.type === "days") {
              total2 += props.quiz.tjm * impact.value;
              prices.push({
                price: props.quiz.tjm * impact.value,
                answer: props.answers[i]
              });
            }
            if (impact?.type === "fixed") {
              total2 += impact.value;
              prices.push({ price: impact.value, answer: props.answers[i] });
            }
          });
        }
      });
      return { total: total2, prices };
    });
    const arraysEqual = (a, b) => Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((x, i) => Object.is(x, b[i]));
    const sumPrice = computed(() => {
      const items = total.value.prices ?? [];
      let sum = [];
      for (let i = 0; i < items.length - 1; i++) {
        const a = items[i];
        const b = items[i + 1];
        if (Array.isArray(a.answer) && a.answer.length > 1 && arraysEqual(a.answer, b.answer)) {
          sum.push({ price: a.price + b.price, answer: a.answer });
        } else sum.push({ price: a.price, answer: a.answer });
      }
      return sum;
    });
    console.log(sumPrice.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "recap" }, _attrs))} data-v-186779e2><h3 data-v-186779e2>Estimation:</h3><ul data-v-186779e2><!--[-->`);
      ssrRenderList(sumPrice.value, (p, i) => {
        _push(`<li data-v-186779e2>${ssrInterpolate(__props.quiz?.steps?.[i]?.title)} : ${ssrInterpolate(p.answer)} ${ssrInterpolate(p.price)}</li>`);
      });
      _push(`<!--]--></ul><div class="total" data-v-186779e2><span data-v-186779e2>Total :</span><span class="price" data-v-186779e2>${ssrInterpolate(total.value.total)} €</span></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/RecapService.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-186779e2"]]);
const _sfc_main$2 = {
  __name: "UiQuizService",
  __ssrInlineRender: true,
  props: { quiz: Object },
  setup(__props) {
    const props = __props;
    const state = ref("question");
    const answers = ref(props.quiz.steps.map(() => null));
    const step = ref(0);
    const question = computed(() => props.quiz.steps[step.value]);
    const addAnswer = (answer) => {
      answers.value[step.value] = answer;
      if (step.value === props.quiz.steps.length - 1) state.value = "recap";
      else step.value++;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiProgressService = _sfc_main$5;
      const _component_UiQuestionService = _sfc_main$4;
      const _component_UiRecapService = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "quiz" }, _attrs))} data-v-42b1409d><div class="section" data-v-42b1409d><h1 data-v-42b1409d>Services &amp; Tarifs</h1></div><div class="section" data-v-42b1409d>`);
      _push(ssrRenderComponent(_component_UiProgressService, {
        value: step.value,
        max: __props.quiz.steps.length - 1
      }, null, _parent));
      _push(`</div>`);
      if (state.value === "question") {
        _push(`<div class="main" data-v-42b1409d>`);
        _push(ssrRenderComponent(_component_UiQuestionService, {
          question: question.value,
          onAnswer: addAnswer
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (state.value === "recap") {
        _push(ssrRenderComponent(_component_UiRecapService, {
          answers: answers.value,
          quiz: __props.quiz
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/QuizService.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-42b1409d"]]);
const _sfc_main$1 = {
  __name: "SectionsServiceSection",
  __ssrInlineRender: true,
  setup(__props) {
    const quiz = ref(null);
    const state = ref("loading");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiQuizService = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}>`);
      if (state.value === "error") {
        _push(`<div><p>Impossible de charger le questionnaire</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div${ssrRenderAttr("aria-busy", state.value === "loading")}>`);
      if (state.value === "idle" && quiz.value) {
        _push(ssrRenderComponent(_component_UiQuizService, { quiz: quiz.value }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ServiceSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SectionsServiceSection = _sfc_main$1;
  _push(ssrRenderComponent(_component_SectionsServiceSection, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const service = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { service as default };
//# sourceMappingURL=service-EGDaaFzG.mjs.map
