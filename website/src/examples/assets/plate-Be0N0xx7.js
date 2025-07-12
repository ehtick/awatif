import { v as t, g as l } from "./styles-C4Vy4UV0.js";
import { a as r } from "./analyze-0pMPybQW.js";
import { d as u, __tla as __tla_0 } from "./deformCpp-wF9UoRJI.js";
import { g as i } from "./getParameters-6uvs3hTe.js";
import { g as d } from "./getToolbar-DWV7GZPM.js";
import { g as v, __tla as __tla_1 } from "./getMesh-BFRjMVyf.js";
import "./complex-i8qiIvCl.js";
import "./__vite-browser-external-D7Ct-6yo.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  const m = {
    xPosition: {
      value: t.state(15),
      min: 5,
      max: 20
    },
    load: {
      value: t.state(-50),
      min: -100,
      max: 100,
      step: 1
    }
  }, e = {
    nodes: t.state([]),
    elements: t.state([]),
    nodeInputs: t.state({}),
    elementInputs: t.state({}),
    deformOutputs: t.state({}),
    analyzeOutputs: t.state({})
  };
  t.derive(() => {
    const { nodes: n, elements: s, boundaryIndices: p } = v({
      points: [
        [
          0,
          0,
          0
        ],
        [
          15,
          0,
          0
        ],
        [
          m.xPosition.value.val,
          10,
          0
        ],
        [
          0,
          5,
          0
        ]
      ],
      polygon: [
        0,
        1,
        2,
        3
      ],
      maxMeshSize: 0.5
    });
    e.nodeInputs.val = {
      supports: new Map(p.map((o) => [
        o,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])),
      loads: new Map(n.map((o, a) => [
        a,
        [
          0,
          0,
          m.load.value.val,
          0,
          0,
          0
        ]
      ]))
    }, e.nodes.val = n, e.elements.val = s, e.elementInputs.val = {
      elasticities: new Map(s.map((o, a) => [
        a,
        100
      ])),
      thicknesses: new Map(s.map((o, a) => [
        a,
        1
      ])),
      poissonsRatios: new Map(s.map((o, a) => [
        a,
        0.3
      ]))
    }, e.deformOutputs.val = u(n, s, e.nodeInputs.val, e.elementInputs.val), e.analyzeOutputs.val = r(n, s, e.elementInputs.val, e.deformOutputs.val);
  });
  document.body.append(i(m), l({
    mesh: e,
    settingsObj: {
      deformedShape: true,
      loads: false,
      shellResults: "displacementZ"
    }
  }), d({
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/plate/main.ts",
    author: "https://www.linkedin.com/in/mahjoubmusaab/"
  }));
});
