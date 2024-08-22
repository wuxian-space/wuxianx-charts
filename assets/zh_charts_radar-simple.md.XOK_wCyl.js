import { _ as _export_sfc, c as createElementBlock, I as createVNode, w as withCtx, j as createBaseVNode, a as createTextVNode, af as createStaticVNode, E as resolveComponent, o as openBlock } from "./chunks/framework.B2dTi_e6.js";
const __pageData = JSON.parse('{"title":"基础雷达图","description":"","frontmatter":{},"headers":[],"relativePath":"zh/charts/radar-simple.md","filePath":"zh/charts/radar-simple.md","lastUpdated":1724294638000}');
const _sfc_main = { name: "zh/charts/radar-simple.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "基础雷达图",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("基础雷达图 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#基础雷达图",
    "aria-label": 'Permalink to "基础雷达图"'
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
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, "'radarSimple'"),
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
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "300"),
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
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<h2 id="参数说明" tabindex="-1">参数说明 <a class="header-anchor" href="#参数说明" aria-label="Permalink to &quot;参数说明&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">索引</th><th>类型</th><th style="text-align:center;">必填</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:center;">0</td><td>radarSimple</td><td style="text-align:center;">是</td><td>-</td><td>-</td></tr><tr><td style="text-align:center;">1</td><td><a href="#data">Data</a></td><td style="text-align:center;">是</td><td>-</td><td>数据</td></tr><tr><td style="text-align:center;">2</td><td><a href="#ecoptions">EcOptions</a></td><td style="text-align:center;">否</td><td>-</td><td>ECharts 配置参数</td></tr></tbody></table><h2 id="参数类型" tabindex="-1">参数类型 <a class="header-anchor" href="#参数类型" aria-label="Permalink to &quot;参数类型&quot;">​</a></h2><h3 id="data" tabindex="-1">Data <a class="header-anchor" href="#data" aria-label="Permalink to &quot;Data&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;][]</span></span></code></pre></div><h3 id="ecoptions" tabindex="-1">EcOptions <a class="header-anchor" href="#ecoptions" aria-label="Permalink to &quot;EcOptions&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EcOptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Partial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">EChartsOption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>', 7);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_chart_tags = resolveComponent("chart-tags");
  const _component_radar_simple = resolveComponent("radar-simple", true);
  const _component_demo = resolveComponent("demo");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_chart_tags),
    _hoisted_2,
    _hoisted_3,
    createVNode(_component_demo, null, {
      component: withCtx(() => [
        createVNode(_component_radar_simple)
      ]),
      default: withCtx(() => [
        _hoisted_4
      ]),
      _: 1
    }),
    _hoisted_5
  ]);
}
const radarSimple = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  radarSimple as default
};
