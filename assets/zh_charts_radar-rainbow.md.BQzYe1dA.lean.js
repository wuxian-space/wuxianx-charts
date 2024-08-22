import { _ as _export_sfc, c as createElementBlock, I as createVNode, w as withCtx, j as createBaseVNode, a as createTextVNode, af as createStaticVNode, E as resolveComponent, o as openBlock } from "./chunks/framework.B2dTi_e6.js";
const __pageData = JSON.parse('{"title":"彩虹雷达图","description":"","frontmatter":{},"headers":[],"relativePath":"zh/charts/radar-rainbow.md","filePath":"zh/charts/radar-rainbow.md","lastUpdated":1724294638000}');
const _sfc_main = { name: "zh/charts/radar-rainbow.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "彩虹雷达图",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("彩虹雷达图 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#彩虹雷达图",
    "aria-label": 'Permalink to "彩虹雷达图"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "示例",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("示例 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#示例",
    "aria-label": 'Permalink to "示例"'
  }, "​")
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "基础示例",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("基础示例 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#基础示例",
    "aria-label": 'Permalink to "基础示例"'
  }, "​")
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "language-vue vp-adaptive-theme" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    title: "Copy Code",
    class: "copy"
  }),
  /* @__PURE__ */ createBaseVNode("span", { class: "lang" }, "vue"),
  /* @__PURE__ */ createBaseVNode("pre", {
    class: "shiki shiki-themes github-light github-dark vp-code",
    tabindex: "0"
  }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "<"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "script"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " setup"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "const"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " data"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " [")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  ["),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "2016"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", { Perez: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "73"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", Harris: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "99"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", Walker: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "89"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", Davis: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "51"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", Johnson: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "86"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " }],")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  ["),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "2017"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", { Perez: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "85"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", Harris: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "89"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", Walker: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "59"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", Davis: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "72"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", Johnson: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "39"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " }],")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  ["),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "2018"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", { Perez: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "35"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", Harris: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "59"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", Walker: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "58"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", Davis: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "63"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", Johnson: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "49"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " }],")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "]")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "</"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "script"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "<"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "template"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  <"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "div"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " v-ec"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "="),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, '"'),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "["),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, "'radarRainbow'"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", data]"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, '"'),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " style"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "="),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, '"'),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "width"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "100"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "%"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "; "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "height"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "500"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "px"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, '"'),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#B31D28", "--shiki-dark": "#FDAEB7", "--shiki-light-font-style": "italic", "--shiki-dark-font-style": "italic" } }, " /"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "</"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "template"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">")
      ])
    ])
  ])
], -1);
const _hoisted_5 = /* @__PURE__ */ createStaticVNode("", 12);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_chart_tags = resolveComponent("chart-tags");
  const _component_radar_rainbow = resolveComponent("radar-rainbow", true);
  const _component_demo = resolveComponent("demo");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_chart_tags),
    _hoisted_2,
    _hoisted_3,
    createVNode(_component_demo, null, {
      component: withCtx(() => [
        createVNode(_component_radar_rainbow)
      ]),
      default: withCtx(() => [
        _hoisted_4
      ]),
      _: 1
    }),
    _hoisted_5
  ]);
}
const radarRainbow = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  radarRainbow as default
};
