import { v as s, Q as S, V as i, g as w } from "./styles-CcZBryOO.js";
import { g as b } from "./getParameters-wBkc0XBG.js";
import { g as D } from "./getToolbar-BsSk1QiP.js";
const n = { xSpan: { value: s.state(16), min: 1, max: 20, step: 0.1, label: "xSpan (m)" }, xDivisions: { value: s.state(14), min: 5, max: 20, step: 1 }, ySpan: { value: s.state(5), min: 1, max: 10, step: 0.1, label: "ySpan (m)" }, yDivisions: { value: s.state(3), min: 1, max: 5, step: 1 }, height: { value: s.state(9), min: 0, max: 15, step: 0.1, label: "height (m)" }, heightOffset: { value: s.state(0), min: -10, max: 10, step: 0.1, label: "height offset (m)" } }, m = s.state([]), p = s.state([]), v = s.state({});
s.derive(() => {
  const l = n.xSpan.value.val, a = n.xDivisions.value.val, c = n.ySpan.value.val, o = n.yDivisions.value.val, h = n.height.value.val, f = n.heightOffset.value.val, d = new S(new i(0, 0, 0), new i(0 + l / 2 + f, 0, h), new i(0 + l, 0, 0)), u = [], r = [];
  for (let e = 0; e <= o; e++) u.push(...d.getPoints(a).map((t) => (t.setY(0 + e * (c / o)), t.toArray())));
  for (let e = 0; e <= (o + 1) * a; e += a + 1) for (let t = 0; t < a; t++) r.push([e + t, e + t + 1]);
  for (let e = 0; e < o * (a + 1); e += a + 1) for (let t = 0; t < a + 1; t++) r.push([t + e, t + a + 1 + e]);
  const g = [...Array(o + 1).keys()].map((e) => (a + 1) * e), x = [...Array(o + 1).keys()].map((e) => (a + 1) * e + a), y = { supports: new Map([...g.map((e) => [e, [true, true, true, true, true, true]]), ...x.map((e) => [e, [true, true, true, true, true, true]])]) };
  m.val = u, p.val = r, v.val = y;
});
document.body.append(b(n), w({ mesh: { nodes: m, elements: p, nodeInputs: v } }), D({ sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/curves/main.ts", author: "https://www.linkedin.com/in/madil4/" }));
