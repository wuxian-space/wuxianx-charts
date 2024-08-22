import { _ as _export_sfc, c as createElementBlock, I as createVNode, w as withCtx, j as createBaseVNode, a as createTextVNode, af as createStaticVNode, E as resolveComponent, o as openBlock } from "./chunks/framework.B2dTi_e6.js";
const __pageData = JSON.parse('{"title":"Area Chart (Trend Chart)","description":"","frontmatter":{},"headers":[],"relativePath":"charts/line-gradient-trend.md","filePath":"en/charts/line-gradient-trend.md","lastUpdated":1724294638000}');
const _sfc_main = { name: "charts/line-gradient-trend.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "area-chart-trend-chart",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Area Chart (Trend Chart) "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#area-chart-trend-chart",
    "aria-label": 'Permalink to "Area Chart (Trend Chart)"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "examples",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Examples "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#examples",
    "aria-label": 'Permalink to "Examples"'
  }, "​")
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "basic-example",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Basic Example "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#basic-example",
    "aria-label": 'Permalink to "Basic Example"'
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
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " {")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  Taylor: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "502.84"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  Clark: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "205.97"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  Martin: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "332.79"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  Perez: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "282.55"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  Wilson: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "214.02"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "}")
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
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "div")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "    v-ec"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "="),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, '"'),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "["),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, "'lineGradientTrend'"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", data]"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, '"')
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "    style"),
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
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, '"')
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#B31D28", "--shiki-dark": "#FDAEB7", "--shiki-light-font-style": "italic", "--shiki-dark-font-style": "italic" } }, "  /"),
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
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "configured-example",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Configured Example "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#configured-example",
    "aria-label": 'Permalink to "Configured Example"'
  }, "​")
], -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "language-vue vp-adaptive-theme" }, [
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
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  {")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    name: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "2021"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    data: {")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "      Taylor: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "502.84"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "      Clark: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "205.97"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "      Martin: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "332.79"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "      Perez: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "282.55"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "      Wilson: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "214.02"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    },")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  },")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  {")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    name: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "2022"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    data: {")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "      Taylor: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "281.55"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "      Clark: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "398.35"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "      Martin: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "214.02"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "      Perez: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "179.55"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "      Wilson: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "356.14"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    },")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "  },")
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
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" } }, "div")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "    v-ec"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "="),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, '"'),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "[")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, "      'lineGradientTrend'"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "      data,")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "      {")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        backgroundColor: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, "'#0A1612'"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        lineColors: ["),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, "'#C5C1C0'"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, "'#F7CE3E'"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "],")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        xAxisLabelColor: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, "'#C5C1C0'"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "      },")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "      {")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        legend: { top: "),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, "'15px'"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " },")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "      },")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    ]"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, '"')
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "    style"),
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
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, '"')
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#B31D28", "--shiki-dark": "#FDAEB7", "--shiki-light-font-style": "italic", "--shiki-dark-font-style": "italic" } }, "  /"),
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
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<h2 id="parameter-descriptions" tabindex="-1">Parameter Descriptions <a class="header-anchor" href="#parameter-descriptions" aria-label="Permalink to &quot;Parameter Descriptions&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">Index</th><th>Type</th><th style="text-align:center;">Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td style="text-align:center;">0</td><td>lineGradientTrend</td><td style="text-align:center;">Yes</td><td>-</td><td>-</td></tr><tr><td style="text-align:center;">1</td><td><a href="#data">Data</a></td><td style="text-align:center;">Yes</td><td>-</td><td>Data</td></tr><tr><td style="text-align:center;">2</td><td><a href="#options-1">Options</a></td><td style="text-align:center;">No</td><td><a href="#options">defaultOptions</a></td><td>Configuration Parameters</td></tr><tr><td style="text-align:center;">3</td><td><a href="#ecoptions">EcOptions</a></td><td style="text-align:center;">No</td><td>-</td><td>ECharts Configuration Parameters</td></tr></tbody></table><h2 id="default-parameter-values" tabindex="-1">Default Parameter Values <a class="header-anchor" href="#default-parameter-values" aria-label="Permalink to &quot;Default Parameter Values&quot;">​</a></h2><h3 id="options" tabindex="-1">options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;options&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> defaultOptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  lineColors: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#00b3f4&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#00ca95&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  backgroundColor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#080b30&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  xAxisLabelColor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#fff&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="parameter-types" tabindex="-1">Parameter Types <a class="header-anchor" href="#parameter-types" aria-label="Permalink to &quot;Parameter Types&quot;">​</a></h2><h3 id="data" tabindex="-1">Data <a class="header-anchor" href="#data" aria-label="Permalink to &quot;Data&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NameData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NumberObject</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NumberKeyValuePairArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }[]</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  NumberObject</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  NumberKeyValuePairArray</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  NameData</span></span></code></pre></div><h3 id="options-1" tabindex="-1">Options <a class="header-anchor" href="#options-1" aria-label="Permalink to &quot;Options&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  lineColors</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  backgroundColor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  xAxisLabelColor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="ecoptions" tabindex="-1">EcOptions <a class="header-anchor" href="#ecoptions" aria-label="Permalink to &quot;EcOptions&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EcOptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Partial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">EChartsOption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>', 12);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_chart_tags = resolveComponent("chart-tags");
  const _component_line_gradient_trend = resolveComponent("line-gradient-trend", true);
  const _component_demo = resolveComponent("demo");
  const _component_line_gradient_trend_configured = resolveComponent("line-gradient-trend-configured");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_chart_tags),
    _hoisted_2,
    _hoisted_3,
    createVNode(_component_demo, null, {
      component: withCtx(() => [
        createVNode(_component_line_gradient_trend)
      ]),
      default: withCtx(() => [
        _hoisted_4
      ]),
      _: 1
    }),
    _hoisted_5,
    createVNode(_component_demo, null, {
      component: withCtx(() => [
        createVNode(_component_line_gradient_trend_configured)
      ]),
      default: withCtx(() => [
        _hoisted_6
      ]),
      _: 1
    }),
    _hoisted_7
  ]);
}
const lineGradientTrend = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  lineGradientTrend as default
};
