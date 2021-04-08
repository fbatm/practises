export const someUnusedVar = 1;
export function fun() {}

const a = 1;
const b = 2;
const c = { c1: 1, c2: 2 };
const d = { d1: 1, d2: 2 };
export { a, b };
export { c as delete };

export default d;
