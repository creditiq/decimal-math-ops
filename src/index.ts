
import Decimal from 'decimal.js';
import _mapValues = require('lodash/mapValues');
import _pick = require('lodash/pick');

// tslint:disable-next-line:ban-types
type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
export type MathOps = Record<FunctionPropertyNames<Math>, any>;

const mathKeys = {
  abs: '',
  acos: '',
  asin: '',
  atan: '',
  acosh: '',
  asinh: '',
  atanh: '',
  atan2: '',
  cbrt: '',
  ceil: '',
  cos: '',
  cosh: '',
  exp: '',
  // expm1: '',
  floor: '',
  // fround: '',
  hypot: '',
  log: '',
  log10: '',
  // log1p: '',
  log2: '',
  max: '',
  min: '',
  pow: '',
  random: '',
  round: '',
  sign: '',
  sin: '',
  sinh: '',
  sqrt: '',
  tan: '',
  tanh: '',
  trunc: '',
  // imul: ''
};

const mathKeyArray = (Object.keys(mathKeys) as Array<keyof typeof mathKeys>);
const pickedDecimal = _pick(Decimal, mathKeyArray);

export const DecimalMath = getMathOps({
  clz32: () => { /* nothing */ },
  expm1: () => { /* nothing */ },
  fround: () => { /* nothing */ },
  log1p: () => { /* nothing */ },
  imul: () => { /* nothing */ },
  ...pickedDecimal,
  factory: (a: number | undefined) => {
    if (a == undefined) {
      return undefined;
    }
    if (typeof a !== 'number') {
      throw new TypeError('built-in math factory only accepts numbers');
    }
    return a;
  },

  add: (a: Decimal, b: Decimal) => {
    return a.add(b);
  },
  sub: (a: Decimal, b: Decimal) => {
    return a.sub(b);
  },
  mul: (a: Decimal, b: Decimal) => {
    return a.mul(b);
  },
  div: (a: Decimal, b: Decimal) => {
    return a.div(b);
  },
  mod: (a: Decimal, b: Decimal) => {
    return a.mod(b);
  },
  factorial: (a: Decimal) => {

    let res = new Decimal(1);
    for (let i = 2; a.greaterThan(i); i += 1) {
      res = res.mul(i);
    }
    return res;
  },

  // taken from https://github.com/josdejong/mathjs/blob/master/lib/function/arithmetic/nthRoot.js
  nthRoot: (a: Decimal, root: Decimal) => {
    const inv = root.lessThan(0);
    if (inv) {
      root = root.negated();
    }

    if (root.equals(0)) {
      throw new Error('Root must be non-zero');
    }
    if (a.lessThan(0) && !(Decimal.abs(root).mod(2).equals(1))) {
      throw new Error('Root must be odd when a is negative.');
    }

    // edge cases zero and infinity
    if (a.equals(0)) {
      return a;
    }
    if (!a.isFinite()) {
      return inv ? new Decimal(0) : a;
    }

    let x = Decimal.pow(Decimal.abs(a), new Decimal(1).div(root));
    // If a < 0, we require that root is an odd integer,
    // so (-1) ^ (1/root) = -1
    x = a.lessThan(0) ? x.negated() : x;
    return inv ? new Decimal(1).div(x) : x;
  },

  // relational
  lessThan: (a: Decimal, b: Decimal) => {
    return a.lessThan(b);
  },
  lessEqualThan: (a: Decimal, b: Decimal) => {
    return a.lessThanOrEqualTo(b);
  },
  greaterThan: (a: Decimal, b: Decimal) => {
    return a.greaterThan(b);
  },
  greaterEqualThan: (a: Decimal, b: Decimal) => {
    return a.greaterThanOrEqualTo(b);
  },
  equal: (a: Decimal, b: Decimal) => {
    return a.equals(b);
  },
  strictlyEqual: (a: Decimal, b: Decimal) => {
    return a.equals(b);
  },
  notEqual: (a: Decimal, b: Decimal) => {
    return !a.equals(b);
  },
  strictlyNotEqual: (a: Decimal, b: Decimal) => {
    return !a.equals(b);
  },

  // unary
  negative: (a: Decimal) => {
    return a.negated();
  },
  positive: (a: Decimal) => {
    return a;
  },

  // methods implemented by simple math module but that i think we don't need with decimal
  // // shift
  // shiftRight: (a: Decimal, b: Decimal) => {
  //   // tslint:disable-next-line:no-bitwise
  //   return (a >> b);
  // },
  // shiftLeft: (a: Decimal, b: Decimal) => {
  //   // tslint:disable-next-line:no-bitwise
  //   return (a << b);
  // },
  // unsignedRightShift: (a: Decimal, b: Decimal) => {
  //   // tslint:disable-next-line:no-bitwise
  //   return (a >>> b);
  // },
  // logical
  logicalOR: (a: number | undefined, b: number | undefined) => {
    return a || b;
  },
  logicalXOR: (a: number | undefined, b: number | undefined) => {
    return a !== b;
  },
  logicalAND: (a: number | undefined, b: number | undefined) => {
    return a && b;
  },

  // // bitwise
  // bitwiseOR: (a: Decimal, b: Decimal) => {

  //   return a.bitwiseOR(b);
  // },
  // bitwiseXOR: (a: Decimal, b: Decimal) => {
  //   return a.bitwiseXOR(b);
  // },
  // bitwiseAND: (a: Decimal, b: Decimal) => {
  //   return a.bitwiseAND(b);
  // },
});

function getMathOps<T extends MathOps>(t: T): any {
  return _mapValues(t, (fn, key) => key !== 'factory' ?
    (...args: any[]) => {
      if (key === 'logicalOR' ||
        key === 'logicalXOR' ||
        key === 'logicalAND') {
        return fn.apply(null, args); // raw apply for logical
      }
      if (args.some((a) => a == undefined)) {
        return undefined;
      }
      const result = fn.apply(Decimal, args.map((a) => new Decimal(a)));
      return result != undefined && result.toNumber ? result.toNumber() : result;
    } : fn
  );
}
