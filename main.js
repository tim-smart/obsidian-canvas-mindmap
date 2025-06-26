'use strict';

var Obsidian2 = require('obsidian');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var Obsidian2__namespace = /*#__PURE__*/_interopNamespace(Obsidian2);

var __defProp = Object.defineProperty;
var __export = (target, all6) => {
  for (var name in all6)
    __defProp(target, name, { get: all6[name], enumerable: true });
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Function.js
var isFunction = (input) => typeof input === "function";
var dual = function(arity, body) {
  if (typeof arity === "function") {
    return function() {
      if (arity(arguments)) {
        return body.apply(this, arguments);
      }
      return (self) => body(self, ...arguments);
    };
  }
  switch (arity) {
    case 0:
    case 1:
      throw new RangeError(`Invalid arity ${arity}`);
    case 2:
      return function(a, b) {
        if (arguments.length >= 2) {
          return body(a, b);
        }
        return function(self) {
          return body(self, a);
        };
      };
    case 3:
      return function(a, b, c) {
        if (arguments.length >= 3) {
          return body(a, b, c);
        }
        return function(self) {
          return body(self, a, b);
        };
      };
    case 4:
      return function(a, b, c, d) {
        if (arguments.length >= 4) {
          return body(a, b, c, d);
        }
        return function(self) {
          return body(self, a, b, c);
        };
      };
    case 5:
      return function(a, b, c, d, e) {
        if (arguments.length >= 5) {
          return body(a, b, c, d, e);
        }
        return function(self) {
          return body(self, a, b, c, d);
        };
      };
    default:
      return function() {
        if (arguments.length >= arity) {
          return body.apply(this, arguments);
        }
        const args2 = arguments;
        return function(self) {
          return body(self, ...args2);
        };
      };
  }
};
var identity = (a) => a;
var constant = (value) => () => value;
var constTrue = /* @__PURE__ */ constant(true);
var constFalse = /* @__PURE__ */ constant(false);
var constNull = /* @__PURE__ */ constant(null);
var constUndefined = /* @__PURE__ */ constant(void 0);
var constVoid = constUndefined;
function pipe(a, ab, bc, cd, de, ef, fg, gh, hi) {
  switch (arguments.length) {
    case 1:
      return a;
    case 2:
      return ab(a);
    case 3:
      return bc(ab(a));
    case 4:
      return cd(bc(ab(a)));
    case 5:
      return de(cd(bc(ab(a))));
    case 6:
      return ef(de(cd(bc(ab(a)))));
    case 7:
      return fg(ef(de(cd(bc(ab(a))))));
    case 8:
      return gh(fg(ef(de(cd(bc(ab(a)))))));
    case 9:
      return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
    default: {
      let ret = arguments[0];
      for (let i = 1; i < arguments.length; i++) {
        ret = arguments[i](ret);
      }
      return ret;
    }
  }
}

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Array.js
var Array_exports = {};
__export(Array_exports, {
  Do: () => Do2,
  allocate: () => allocate,
  append: () => append,
  appendAll: () => appendAll,
  bind: () => bind3,
  bindTo: () => bindTo3,
  cartesian: () => cartesian,
  cartesianWith: () => cartesianWith,
  chop: () => chop,
  chunksOf: () => chunksOf,
  contains: () => contains2,
  containsWith: () => containsWith2,
  copy: () => copy,
  countBy: () => countBy,
  dedupe: () => dedupe,
  dedupeAdjacent: () => dedupeAdjacent,
  dedupeAdjacentWith: () => dedupeAdjacentWith,
  dedupeWith: () => dedupeWith,
  difference: () => difference2,
  differenceWith: () => differenceWith,
  drop: () => drop,
  dropRight: () => dropRight,
  dropWhile: () => dropWhile,
  empty: () => empty4,
  ensure: () => ensure,
  every: () => every2,
  extend: () => extend,
  filter: () => filter3,
  filterMap: () => filterMap3,
  filterMapWhile: () => filterMapWhile,
  findFirst: () => findFirst3,
  findFirstIndex: () => findFirstIndex,
  findLast: () => findLast,
  findLastIndex: () => findLastIndex,
  flatMap: () => flatMap2,
  flatMapNullable: () => flatMapNullable2,
  flatten: () => flatten2,
  forEach: () => forEach,
  fromIterable: () => fromIterable2,
  fromNullable: () => fromNullable2,
  fromOption: () => fromOption2,
  fromRecord: () => fromRecord,
  get: () => get2,
  getEquivalence: () => getEquivalence3,
  getLefts: () => getLefts2,
  getOrder: () => getOrder2,
  getRights: () => getRights2,
  getSomes: () => getSomes2,
  group: () => group,
  groupBy: () => groupBy,
  groupWith: () => groupWith,
  head: () => head,
  headNonEmpty: () => headNonEmpty,
  init: () => init,
  initNonEmpty: () => initNonEmpty,
  insertAt: () => insertAt,
  intersection: () => intersection2,
  intersectionWith: () => intersectionWith,
  intersperse: () => intersperse,
  isArray: () => isArray,
  isEmptyArray: () => isEmptyArray,
  isEmptyReadonlyArray: () => isEmptyReadonlyArray,
  isNonEmptyArray: () => isNonEmptyArray2,
  isNonEmptyReadonlyArray: () => isNonEmptyReadonlyArray,
  join: () => join,
  last: () => last,
  lastNonEmpty: () => lastNonEmpty,
  length: () => length,
  let: () => let_3,
  liftEither: () => liftEither,
  liftNullable: () => liftNullable2,
  liftOption: () => liftOption,
  liftPredicate: () => liftPredicate2,
  make: () => make4,
  makeBy: () => makeBy,
  map: () => map4,
  mapAccum: () => mapAccum,
  match: () => match3,
  matchLeft: () => matchLeft,
  matchRight: () => matchRight,
  max: () => max2,
  min: () => min2,
  modify: () => modify2,
  modifyNonEmptyHead: () => modifyNonEmptyHead,
  modifyNonEmptyLast: () => modifyNonEmptyLast,
  modifyOption: () => modifyOption2,
  of: () => of,
  pad: () => pad,
  partition: () => partition2,
  partitionMap: () => partitionMap3,
  prepend: () => prepend,
  prependAll: () => prependAll,
  range: () => range,
  reduce: () => reduce2,
  reduceRight: () => reduceRight,
  remove: () => remove2,
  removeOption: () => removeOption,
  replace: () => replace2,
  replaceOption: () => replaceOption2,
  replicate: () => replicate,
  reverse: () => reverse,
  rotate: () => rotate,
  scan: () => scan,
  scanRight: () => scanRight,
  separate: () => separate2,
  setNonEmptyHead: () => setNonEmptyHead,
  setNonEmptyLast: () => setNonEmptyLast,
  some: () => some4,
  sort: () => sort,
  sortBy: () => sortBy,
  sortWith: () => sortWith,
  span: () => span,
  split: () => split,
  splitAt: () => splitAt,
  splitNonEmptyAt: () => splitNonEmptyAt,
  splitWhere: () => splitWhere,
  tail: () => tail,
  tailNonEmpty: () => tailNonEmpty,
  take: () => take,
  takeRight: () => takeRight,
  takeWhile: () => takeWhile,
  unappend: () => unappend,
  unfold: () => unfold,
  union: () => union2,
  unionWith: () => unionWith,
  unprepend: () => unprepend,
  unsafeGet: () => unsafeGet,
  unzip: () => unzip,
  window: () => window,
  zip: () => zip,
  zipWith: () => zipWith2
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Equivalence.js
var make = (isEquivalent) => (self, that) => self === that || isEquivalent(self, that);
var mapInput = /* @__PURE__ */ dual(2, (self, f) => make((x, y) => self(f(x), f(y))));
var array = (item) => make((self, that) => {
  if (self.length !== that.length) {
    return false;
  }
  for (let i = 0; i < self.length; i++) {
    const isEq = item(self[i], that[i]);
    if (!isEq) {
      return false;
    }
  }
  return true;
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/doNotation.js
var let_ = (map28) => dual(3, (self, name, f) => map28(self, (a) => ({
  ...a,
  [name]: f(a)
})));
var bindTo = (map28) => dual(2, (self, name) => map28(self, (a) => ({
  [name]: a
})));
var bind = (map28, flatMap19) => dual(3, (self, name, f) => flatMap19(self, (a) => map28(f(a), (b) => ({
  ...a,
  [name]: b
}))));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/version.js
var moduleVersion = "3.16.9";
var getCurrentVersion = () => moduleVersion;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/GlobalValue.js
var globalStoreId = `effect/GlobalValue/globalStoreId/${/* @__PURE__ */ getCurrentVersion()}`;
var globalStore;
var globalValue = (id2, compute) => {
  if (!globalStore) {
    globalThis[globalStoreId] ??= /* @__PURE__ */ new Map();
    globalStore = globalThis[globalStoreId];
  }
  if (!globalStore.has(id2)) {
    globalStore.set(id2, compute());
  }
  return globalStore.get(id2);
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Predicate.js
var isString = (input) => typeof input === "string";
var isNumber = (input) => typeof input === "number";
var isBoolean = (input) => typeof input === "boolean";
var isBigInt = (input) => typeof input === "bigint";
var isSymbol = (input) => typeof input === "symbol";
var isFunction2 = isFunction;
var isUndefined = (input) => input === void 0;
var isNotUndefined = (input) => input !== void 0;
var isNotNull = (input) => input !== null;
var isNever = (_) => false;
var isRecordOrArray = (input) => typeof input === "object" && input !== null;
var isObject = (input) => isRecordOrArray(input) || isFunction2(input);
var hasProperty = /* @__PURE__ */ dual(2, (self, property) => isObject(self) && property in self);
var isTagged = /* @__PURE__ */ dual(2, (self, tag2) => hasProperty(self, "_tag") && self["_tag"] === tag2);
var isNullable = (input) => input === null || input === void 0;
var isNotNullable = (input) => input !== null && input !== void 0;
var isDate = (input) => input instanceof Date;
var isIterable = (input) => hasProperty(input, Symbol.iterator);
var isRecord = (input) => isRecordOrArray(input) && !Array.isArray(input);
var isPromiseLike = (input) => hasProperty(input, "then") && isFunction2(input.then);

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/errors.js
var getBugErrorMessage = (message) => `BUG: ${message} - please report an issue at https://github.com/Effect-TS/effect/issues`;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Utils.js
var GenKindTypeId = /* @__PURE__ */ Symbol.for("effect/Gen/GenKind");
var isGenKind = (u) => isObject(u) && GenKindTypeId in u;
var GenKindImpl = class {
  value;
  constructor(value) {
    this.value = value;
  }
  /**
   * @since 2.0.0
   */
  get _F() {
    return identity;
  }
  /**
   * @since 2.0.0
   */
  get _R() {
    return (_) => _;
  }
  /**
   * @since 2.0.0
   */
  get _O() {
    return (_) => _;
  }
  /**
   * @since 2.0.0
   */
  get _E() {
    return (_) => _;
  }
  /**
   * @since 2.0.0
   */
  [GenKindTypeId] = GenKindTypeId;
  /**
   * @since 2.0.0
   */
  [Symbol.iterator]() {
    return new SingleShotGen(this);
  }
};
var SingleShotGen = class _SingleShotGen {
  self;
  called = false;
  constructor(self) {
    this.self = self;
  }
  /**
   * @since 2.0.0
   */
  next(a) {
    return this.called ? {
      value: a,
      done: true
    } : (this.called = true, {
      value: this.self,
      done: false
    });
  }
  /**
   * @since 2.0.0
   */
  return(a) {
    return {
      value: a,
      done: true
    };
  }
  /**
   * @since 2.0.0
   */
  throw(e) {
    throw e;
  }
  /**
   * @since 2.0.0
   */
  [Symbol.iterator]() {
    return new _SingleShotGen(this.self);
  }
};
var adapter = () => function() {
  let x = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    x = arguments[i](x);
  }
  return new GenKindImpl(x);
};
var defaultIncHi = 335903614;
var defaultIncLo = 4150755663;
var MUL_HI = 1481765933 >>> 0;
var MUL_LO = 1284865837 >>> 0;
var BIT_53 = 9007199254740992;
var BIT_27 = 134217728;
var PCGRandom = class {
  _state;
  constructor(seedHi, seedLo, incHi, incLo) {
    if (isNullable(seedLo) && isNullable(seedHi)) {
      seedLo = Math.random() * 4294967295 >>> 0;
      seedHi = 0;
    } else if (isNullable(seedLo)) {
      seedLo = seedHi;
      seedHi = 0;
    }
    if (isNullable(incLo) && isNullable(incHi)) {
      incLo = this._state ? this._state[3] : defaultIncLo;
      incHi = this._state ? this._state[2] : defaultIncHi;
    } else if (isNullable(incLo)) {
      incLo = incHi;
      incHi = 0;
    }
    this._state = new Int32Array([0, 0, incHi >>> 0, ((incLo || 0) | 1) >>> 0]);
    this._next();
    add64(this._state, this._state[0], this._state[1], seedHi >>> 0, seedLo >>> 0);
    this._next();
    return this;
  }
  /**
   * Returns a copy of the internal state of this random number generator as a
   * JavaScript Array.
   *
   * @category getters
   * @since 2.0.0
   */
  getState() {
    return [this._state[0], this._state[1], this._state[2], this._state[3]];
  }
  /**
   * Restore state previously retrieved using `getState()`.
   *
   * @since 2.0.0
   */
  setState(state) {
    this._state[0] = state[0];
    this._state[1] = state[1];
    this._state[2] = state[2];
    this._state[3] = state[3] | 1;
  }
  /**
   * Get a uniformly distributed 32 bit integer between [0, max).
   *
   * @category getter
   * @since 2.0.0
   */
  integer(max6) {
    return Math.round(this.number() * Number.MAX_SAFE_INTEGER) % max6;
  }
  /**
   * Get a uniformly distributed IEEE-754 double between 0.0 and 1.0, with
   * 53 bits of precision (every bit of the mantissa is randomized).
   *
   * @category getters
   * @since 2.0.0
   */
  number() {
    const hi = (this._next() & 67108863) * 1;
    const lo = (this._next() & 134217727) * 1;
    return (hi * BIT_27 + lo) / BIT_53;
  }
  /** @internal */
  _next() {
    const oldHi = this._state[0] >>> 0;
    const oldLo = this._state[1] >>> 0;
    mul64(this._state, oldHi, oldLo, MUL_HI, MUL_LO);
    add64(this._state, this._state[0], this._state[1], this._state[2], this._state[3]);
    let xsHi = oldHi >>> 18;
    let xsLo = (oldLo >>> 18 | oldHi << 14) >>> 0;
    xsHi = (xsHi ^ oldHi) >>> 0;
    xsLo = (xsLo ^ oldLo) >>> 0;
    const xorshifted = (xsLo >>> 27 | xsHi << 5) >>> 0;
    const rot = oldHi >>> 27;
    const rot2 = (-rot >>> 0 & 31) >>> 0;
    return (xorshifted >>> rot | xorshifted << rot2) >>> 0;
  }
};
function mul64(out, aHi, aLo, bHi, bLo) {
  let c1 = (aLo >>> 16) * (bLo & 65535) >>> 0;
  let c0 = (aLo & 65535) * (bLo >>> 16) >>> 0;
  let lo = (aLo & 65535) * (bLo & 65535) >>> 0;
  let hi = (aLo >>> 16) * (bLo >>> 16) + ((c0 >>> 16) + (c1 >>> 16)) >>> 0;
  c0 = c0 << 16 >>> 0;
  lo = lo + c0 >>> 0;
  if (lo >>> 0 < c0 >>> 0) {
    hi = hi + 1 >>> 0;
  }
  c1 = c1 << 16 >>> 0;
  lo = lo + c1 >>> 0;
  if (lo >>> 0 < c1 >>> 0) {
    hi = hi + 1 >>> 0;
  }
  hi = hi + Math.imul(aLo, bHi) >>> 0;
  hi = hi + Math.imul(aHi, bLo) >>> 0;
  out[0] = hi;
  out[1] = lo;
}
function add64(out, aHi, aLo, bHi, bLo) {
  let hi = aHi + bHi >>> 0;
  const lo = aLo + bLo >>> 0;
  if (lo >>> 0 < aLo >>> 0) {
    hi = hi + 1 | 0;
  }
  out[0] = hi;
  out[1] = lo;
}
var YieldWrapTypeId = /* @__PURE__ */ Symbol.for("effect/Utils/YieldWrap");
var YieldWrap = class {
  /**
   * @since 3.0.6
   */
  #value;
  constructor(value) {
    this.#value = value;
  }
  /**
   * @since 3.0.6
   */
  [YieldWrapTypeId]() {
    return this.#value;
  }
};
function yieldWrapGet(self) {
  if (typeof self === "object" && self !== null && YieldWrapTypeId in self) {
    return self[YieldWrapTypeId]();
  }
  throw new Error(getBugErrorMessage("yieldWrapGet"));
}
var structuralRegionState = /* @__PURE__ */ globalValue("effect/Utils/isStructuralRegion", () => ({
  enabled: false,
  tester: void 0
}));
var standard = {
  effect_internal_function: (body) => {
    return body();
  }
};
var forced = {
  effect_internal_function: (body) => {
    try {
      return body();
    } finally {
    }
  }
};
var isNotOptimizedAway = /* @__PURE__ */ standard.effect_internal_function(() => new Error().stack)?.includes("effect_internal_function") === true;
var internalCall = isNotOptimizedAway ? standard.effect_internal_function : forced.effect_internal_function;
var genConstructor = function* () {
}.constructor;
var isGeneratorFunction = (u) => isObject(u) && u.constructor === genConstructor;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Hash.js
var randomHashCache = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Hash/randomHashCache"), () => /* @__PURE__ */ new WeakMap());
var symbol = /* @__PURE__ */ Symbol.for("effect/Hash");
var hash = (self) => {
  if (structuralRegionState.enabled === true) {
    return 0;
  }
  switch (typeof self) {
    case "number":
      return number2(self);
    case "bigint":
      return string(self.toString(10));
    case "boolean":
      return string(String(self));
    case "symbol":
      return string(String(self));
    case "string":
      return string(self);
    case "undefined":
      return string("undefined");
    case "function":
    case "object": {
      if (self === null) {
        return string("null");
      } else if (self instanceof Date) {
        return hash(self.toISOString());
      } else if (self instanceof URL) {
        return hash(self.href);
      } else if (isHash(self)) {
        return self[symbol]();
      } else {
        return random(self);
      }
    }
    default:
      throw new Error(`BUG: unhandled typeof ${typeof self} - please report an issue at https://github.com/Effect-TS/effect/issues`);
  }
};
var random = (self) => {
  if (!randomHashCache.has(self)) {
    randomHashCache.set(self, number2(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)));
  }
  return randomHashCache.get(self);
};
var combine = (b) => (self) => self * 53 ^ b;
var optimize = (n) => n & 3221225471 | n >>> 1 & 1073741824;
var isHash = (u) => hasProperty(u, symbol);
var number2 = (n) => {
  if (n !== n || n === Infinity) {
    return 0;
  }
  let h = n | 0;
  if (h !== n) {
    h ^= n * 4294967295;
  }
  while (n > 4294967295) {
    h ^= n /= 4294967295;
  }
  return optimize(h);
};
var string = (str) => {
  let h = 5381, i = str.length;
  while (i) {
    h = h * 33 ^ str.charCodeAt(--i);
  }
  return optimize(h);
};
var structureKeys = (o, keys6) => {
  let h = 12289;
  for (let i = 0; i < keys6.length; i++) {
    h ^= pipe(string(keys6[i]), combine(hash(o[keys6[i]])));
  }
  return optimize(h);
};
var structure = (o) => structureKeys(o, Object.keys(o));
var array2 = (arr) => {
  let h = 6151;
  for (let i = 0; i < arr.length; i++) {
    h = pipe(h, combine(hash(arr[i])));
  }
  return optimize(h);
};
var cached = function() {
  if (arguments.length === 1) {
    const self2 = arguments[0];
    return function(hash3) {
      Object.defineProperty(self2, symbol, {
        value() {
          return hash3;
        },
        enumerable: false
      });
      return hash3;
    };
  }
  const self = arguments[0];
  const hash2 = arguments[1];
  Object.defineProperty(self, symbol, {
    value() {
      return hash2;
    },
    enumerable: false
  });
  return hash2;
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Equal.js
var symbol2 = /* @__PURE__ */ Symbol.for("effect/Equal");
function equals() {
  if (arguments.length === 1) {
    return (self) => compareBoth(self, arguments[0]);
  }
  return compareBoth(arguments[0], arguments[1]);
}
function compareBoth(self, that) {
  if (self === that) {
    return true;
  }
  const selfType = typeof self;
  if (selfType !== typeof that) {
    return false;
  }
  if (selfType === "object" || selfType === "function") {
    if (self !== null && that !== null) {
      if (isEqual(self) && isEqual(that)) {
        if (hash(self) === hash(that) && self[symbol2](that)) {
          return true;
        } else {
          return structuralRegionState.enabled && structuralRegionState.tester ? structuralRegionState.tester(self, that) : false;
        }
      } else if (self instanceof Date && that instanceof Date) {
        return self.toISOString() === that.toISOString();
      } else if (self instanceof URL && that instanceof URL) {
        return self.href === that.href;
      }
    }
    if (structuralRegionState.enabled) {
      if (Array.isArray(self) && Array.isArray(that)) {
        return self.length === that.length && self.every((v, i) => compareBoth(v, that[i]));
      }
      if (Object.getPrototypeOf(self) === Object.prototype && Object.getPrototypeOf(self) === Object.prototype) {
        const keysSelf = Object.keys(self);
        const keysThat = Object.keys(that);
        if (keysSelf.length === keysThat.length) {
          for (const key of keysSelf) {
            if (!(key in that && compareBoth(self[key], that[key]))) {
              return structuralRegionState.tester ? structuralRegionState.tester(self, that) : false;
            }
          }
          return true;
        }
      }
      return structuralRegionState.tester ? structuralRegionState.tester(self, that) : false;
    }
  }
  return structuralRegionState.enabled && structuralRegionState.tester ? structuralRegionState.tester(self, that) : false;
}
var isEqual = (u) => hasProperty(u, symbol2);
var equivalence = () => equals;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Inspectable.js
var NodeInspectSymbol = /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom");
var toJSON = (x) => {
  try {
    if (hasProperty(x, "toJSON") && isFunction2(x["toJSON"]) && x["toJSON"].length === 0) {
      return x.toJSON();
    } else if (Array.isArray(x)) {
      return x.map(toJSON);
    }
  } catch {
    return {};
  }
  return redact(x);
};
var format = (x) => JSON.stringify(x, null, 2);
var toStringUnknown = (u, whitespace = 2) => {
  if (typeof u === "string") {
    return u;
  }
  try {
    return typeof u === "object" ? stringifyCircular(u, whitespace) : String(u);
  } catch {
    return String(u);
  }
};
var stringifyCircular = (obj, whitespace) => {
  let cache = [];
  const retVal = JSON.stringify(obj, (_key, value) => typeof value === "object" && value !== null ? cache.includes(value) ? void 0 : cache.push(value) && (redactableState.fiberRefs !== void 0 && isRedactable(value) ? value[symbolRedactable](redactableState.fiberRefs) : value) : value, whitespace);
  cache = void 0;
  return retVal;
};
var symbolRedactable = /* @__PURE__ */ Symbol.for("effect/Inspectable/Redactable");
var isRedactable = (u) => typeof u === "object" && u !== null && symbolRedactable in u;
var redactableState = /* @__PURE__ */ globalValue("effect/Inspectable/redactableState", () => ({
  fiberRefs: void 0
}));
var withRedactableContext = (context7, f) => {
  const prev = redactableState.fiberRefs;
  redactableState.fiberRefs = context7;
  try {
    return f();
  } finally {
    redactableState.fiberRefs = prev;
  }
};
var redact = (u) => {
  if (isRedactable(u) && redactableState.fiberRefs !== void 0) {
    return u[symbolRedactable](redactableState.fiberRefs);
  }
  return u;
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Pipeable.js
var pipeArguments = (self, args2) => {
  switch (args2.length) {
    case 0:
      return self;
    case 1:
      return args2[0](self);
    case 2:
      return args2[1](args2[0](self));
    case 3:
      return args2[2](args2[1](args2[0](self)));
    case 4:
      return args2[3](args2[2](args2[1](args2[0](self))));
    case 5:
      return args2[4](args2[3](args2[2](args2[1](args2[0](self)))));
    case 6:
      return args2[5](args2[4](args2[3](args2[2](args2[1](args2[0](self))))));
    case 7:
      return args2[6](args2[5](args2[4](args2[3](args2[2](args2[1](args2[0](self)))))));
    case 8:
      return args2[7](args2[6](args2[5](args2[4](args2[3](args2[2](args2[1](args2[0](self))))))));
    case 9:
      return args2[8](args2[7](args2[6](args2[5](args2[4](args2[3](args2[2](args2[1](args2[0](self)))))))));
    default: {
      let ret = self;
      for (let i = 0, len = args2.length; i < len; i++) {
        ret = args2[i](ret);
      }
      return ret;
    }
  }
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/opCodes/effect.js
var OP_ASYNC = "Async";
var OP_COMMIT = "Commit";
var OP_FAILURE = "Failure";
var OP_ON_FAILURE = "OnFailure";
var OP_ON_SUCCESS = "OnSuccess";
var OP_ON_SUCCESS_AND_FAILURE = "OnSuccessAndFailure";
var OP_SUCCESS = "Success";
var OP_SYNC = "Sync";
var OP_TAG = "Tag";
var OP_UPDATE_RUNTIME_FLAGS = "UpdateRuntimeFlags";
var OP_WHILE = "While";
var OP_ITERATOR = "Iterator";
var OP_WITH_RUNTIME = "WithRuntime";
var OP_YIELD = "Yield";
var OP_REVERT_FLAGS = "RevertFlags";

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/effectable.js
var EffectTypeId = /* @__PURE__ */ Symbol.for("effect/Effect");
var StreamTypeId = /* @__PURE__ */ Symbol.for("effect/Stream");
var SinkTypeId = /* @__PURE__ */ Symbol.for("effect/Sink");
var ChannelTypeId = /* @__PURE__ */ Symbol.for("effect/Channel");
var effectVariance = {
  /* c8 ignore next */
  _R: (_) => _,
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _A: (_) => _,
  _V: /* @__PURE__ */ getCurrentVersion()
};
var sinkVariance = {
  /* c8 ignore next */
  _A: (_) => _,
  /* c8 ignore next */
  _In: (_) => _,
  /* c8 ignore next */
  _L: (_) => _,
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _R: (_) => _
};
var channelVariance = {
  /* c8 ignore next */
  _Env: (_) => _,
  /* c8 ignore next */
  _InErr: (_) => _,
  /* c8 ignore next */
  _InElem: (_) => _,
  /* c8 ignore next */
  _InDone: (_) => _,
  /* c8 ignore next */
  _OutErr: (_) => _,
  /* c8 ignore next */
  _OutElem: (_) => _,
  /* c8 ignore next */
  _OutDone: (_) => _
};
var EffectPrototype = {
  [EffectTypeId]: effectVariance,
  [StreamTypeId]: effectVariance,
  [SinkTypeId]: sinkVariance,
  [ChannelTypeId]: channelVariance,
  [symbol2](that) {
    return this === that;
  },
  [symbol]() {
    return cached(this, random(this));
  },
  [Symbol.iterator]() {
    return new SingleShotGen(new YieldWrap(this));
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var StructuralPrototype = {
  [symbol]() {
    return cached(this, structure(this));
  },
  [symbol2](that) {
    const selfKeys = Object.keys(this);
    const thatKeys = Object.keys(that);
    if (selfKeys.length !== thatKeys.length) {
      return false;
    }
    for (const key of selfKeys) {
      if (!(key in that && equals(this[key], that[key]))) {
        return false;
      }
    }
    return true;
  }
};
var CommitPrototype = {
  ...EffectPrototype,
  _op: OP_COMMIT
};
var StructuralCommitPrototype = {
  ...CommitPrototype,
  ...StructuralPrototype
};
var Base = /* @__PURE__ */ function() {
  function Base3() {
  }
  Base3.prototype = CommitPrototype;
  return Base3;
}();

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/option.js
var TypeId = /* @__PURE__ */ Symbol.for("effect/Option");
var CommonProto = {
  ...EffectPrototype,
  [TypeId]: {
    _A: (_) => _
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  toString() {
    return format(this.toJSON());
  }
};
var SomeProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(CommonProto), {
  _tag: "Some",
  _op: "Some",
  [symbol2](that) {
    return isOption(that) && isSome(that) && equals(this.value, that.value);
  },
  [symbol]() {
    return cached(this, combine(hash(this._tag))(hash(this.value)));
  },
  toJSON() {
    return {
      _id: "Option",
      _tag: this._tag,
      value: toJSON(this.value)
    };
  }
});
var NoneHash = /* @__PURE__ */ hash("None");
var NoneProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(CommonProto), {
  _tag: "None",
  _op: "None",
  [symbol2](that) {
    return isOption(that) && isNone(that);
  },
  [symbol]() {
    return NoneHash;
  },
  toJSON() {
    return {
      _id: "Option",
      _tag: this._tag
    };
  }
});
var isOption = (input) => hasProperty(input, TypeId);
var isNone = (fa) => fa._tag === "None";
var isSome = (fa) => fa._tag === "Some";
var none = /* @__PURE__ */ Object.create(NoneProto);
var some = (value) => {
  const a = Object.create(SomeProto);
  a.value = value;
  return a;
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/either.js
var TypeId2 = /* @__PURE__ */ Symbol.for("effect/Either");
var CommonProto2 = {
  ...EffectPrototype,
  [TypeId2]: {
    _R: (_) => _
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  toString() {
    return format(this.toJSON());
  }
};
var RightProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(CommonProto2), {
  _tag: "Right",
  _op: "Right",
  [symbol2](that) {
    return isEither(that) && isRight(that) && equals(this.right, that.right);
  },
  [symbol]() {
    return combine(hash(this._tag))(hash(this.right));
  },
  toJSON() {
    return {
      _id: "Either",
      _tag: this._tag,
      right: toJSON(this.right)
    };
  }
});
var LeftProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(CommonProto2), {
  _tag: "Left",
  _op: "Left",
  [symbol2](that) {
    return isEither(that) && isLeft(that) && equals(this.left, that.left);
  },
  [symbol]() {
    return combine(hash(this._tag))(hash(this.left));
  },
  toJSON() {
    return {
      _id: "Either",
      _tag: this._tag,
      left: toJSON(this.left)
    };
  }
});
var isEither = (input) => hasProperty(input, TypeId2);
var isLeft = (ma) => ma._tag === "Left";
var isRight = (ma) => ma._tag === "Right";
var left = (left3) => {
  const a = Object.create(LeftProto);
  a.left = left3;
  return a;
};
var right = (right3) => {
  const a = Object.create(RightProto);
  a.right = right3;
  return a;
};
var getLeft = (self) => isRight(self) ? none : some(self.left);
var getRight = (self) => isLeft(self) ? none : some(self.right);

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Either.js
var right2 = right;
var left2 = left;
var isEither2 = isEither;
var isLeft2 = isLeft;
var isRight2 = isRight;
var mapBoth = /* @__PURE__ */ dual(2, (self, {
  onLeft,
  onRight
}) => isLeft2(self) ? left2(onLeft(self.left)) : right2(onRight(self.right)));
var mapLeft = /* @__PURE__ */ dual(2, (self, f) => isLeft2(self) ? left2(f(self.left)) : right2(self.right));
var map = /* @__PURE__ */ dual(2, (self, f) => isRight2(self) ? right2(f(self.right)) : left2(self.left));
var match = /* @__PURE__ */ dual(2, (self, {
  onLeft,
  onRight
}) => isLeft2(self) ? onLeft(self.left) : onRight(self.right));
var merge = /* @__PURE__ */ match({
  onLeft: identity,
  onRight: identity
});
var getOrThrowWith = /* @__PURE__ */ dual(2, (self, onLeft) => {
  if (isRight2(self)) {
    return self.right;
  }
  throw onLeft(self.left);
});
var getOrThrow = /* @__PURE__ */ getOrThrowWith(() => new Error("getOrThrow called on a Left"));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/array.js
var isNonEmptyArray = (self) => self.length > 0;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Option.js
var Option_exports = {};
__export(Option_exports, {
  Do: () => Do,
  TypeId: () => TypeId3,
  all: () => all,
  andThen: () => andThen,
  ap: () => ap,
  as: () => as,
  asVoid: () => asVoid,
  bind: () => bind2,
  bindTo: () => bindTo2,
  composeK: () => composeK,
  contains: () => contains,
  containsWith: () => containsWith,
  exists: () => exists,
  filter: () => filter,
  filterMap: () => filterMap,
  firstSomeOf: () => firstSomeOf,
  flatMap: () => flatMap,
  flatMapNullable: () => flatMapNullable,
  flatten: () => flatten,
  fromIterable: () => fromIterable,
  fromNullable: () => fromNullable,
  gen: () => gen,
  getEquivalence: () => getEquivalence,
  getLeft: () => getLeft2,
  getOrElse: () => getOrElse,
  getOrNull: () => getOrNull,
  getOrThrow: () => getOrThrow2,
  getOrThrowWith: () => getOrThrowWith2,
  getOrUndefined: () => getOrUndefined,
  getOrder: () => getOrder,
  getRight: () => getRight2,
  isNone: () => isNone2,
  isOption: () => isOption2,
  isSome: () => isSome2,
  let: () => let_2,
  lift2: () => lift2,
  liftNullable: () => liftNullable,
  liftPredicate: () => liftPredicate,
  liftThrowable: () => liftThrowable,
  map: () => map2,
  match: () => match2,
  mergeWith: () => mergeWith,
  none: () => none2,
  orElse: () => orElse,
  orElseEither: () => orElseEither,
  orElseSome: () => orElseSome,
  partitionMap: () => partitionMap,
  product: () => product,
  productMany: () => productMany,
  reduceCompact: () => reduceCompact,
  some: () => some2,
  tap: () => tap,
  toArray: () => toArray,
  toRefinement: () => toRefinement,
  void: () => void_,
  zipLeft: () => zipLeft,
  zipRight: () => zipRight,
  zipWith: () => zipWith
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Order.js
var make2 = (compare2) => (self, that) => self === that ? 0 : compare2(self, that);
var number3 = /* @__PURE__ */ make2((self, that) => self < that ? -1 : 1);
var combineMany = /* @__PURE__ */ dual(2, (self, collection) => make2((a1, a2) => {
  let out = self(a1, a2);
  if (out !== 0) {
    return out;
  }
  for (const O of collection) {
    out = O(a1, a2);
    if (out !== 0) {
      return out;
    }
  }
  return out;
}));
var empty = () => make2(() => 0);
var combineAll = (collection) => combineMany(empty(), collection);
var mapInput2 = /* @__PURE__ */ dual(2, (self, f) => make2((b1, b2) => self(f(b1), f(b2))));
var array3 = (O) => make2((self, that) => {
  const aLen = self.length;
  const bLen = that.length;
  const len = Math.min(aLen, bLen);
  for (let i = 0; i < len; i++) {
    const o = O(self[i], that[i]);
    if (o !== 0) {
      return o;
    }
  }
  return number3(aLen, bLen);
});
var struct = (fields) => {
  const keys6 = Object.keys(fields);
  return make2((self, that) => {
    for (const key of keys6) {
      const o = fields[key](self[key], that[key]);
      if (o !== 0) {
        return o;
      }
    }
    return 0;
  });
};
var lessThan = (O) => dual(2, (self, that) => O(self, that) === -1);
var greaterThan = (O) => dual(2, (self, that) => O(self, that) === 1);
var lessThanOrEqualTo = (O) => dual(2, (self, that) => O(self, that) !== 1);
var greaterThanOrEqualTo = (O) => dual(2, (self, that) => O(self, that) !== -1);
var min = (O) => dual(2, (self, that) => self === that || O(self, that) < 1 ? self : that);
var max = (O) => dual(2, (self, that) => self === that || O(self, that) > -1 ? self : that);

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Option.js
var TypeId3 = /* @__PURE__ */ Symbol.for("effect/Option");
var none2 = () => none;
var some2 = some;
var isOption2 = isOption;
var isNone2 = isNone;
var isSome2 = isSome;
var match2 = /* @__PURE__ */ dual(2, (self, {
  onNone,
  onSome
}) => isNone2(self) ? onNone() : onSome(self.value));
var toRefinement = (f) => (a) => isSome2(f(a));
var fromIterable = (collection) => {
  for (const a of collection) {
    return some2(a);
  }
  return none2();
};
var getRight2 = getRight;
var getLeft2 = getLeft;
var getOrElse = /* @__PURE__ */ dual(2, (self, onNone) => isNone2(self) ? onNone() : self.value);
var orElse = /* @__PURE__ */ dual(2, (self, that) => isNone2(self) ? that() : self);
var orElseSome = /* @__PURE__ */ dual(2, (self, onNone) => isNone2(self) ? some2(onNone()) : self);
var orElseEither = /* @__PURE__ */ dual(2, (self, that) => isNone2(self) ? map2(that(), right) : map2(self, left));
var firstSomeOf = (collection) => {
  let out = none2();
  for (out of collection) {
    if (isSome2(out)) {
      return out;
    }
  }
  return out;
};
var fromNullable = (nullableValue) => nullableValue == null ? none2() : some2(nullableValue);
var liftNullable = (f) => (...a) => fromNullable(f(...a));
var getOrNull = /* @__PURE__ */ getOrElse(constNull);
var getOrUndefined = /* @__PURE__ */ getOrElse(constUndefined);
var liftThrowable = (f) => (...a) => {
  try {
    return some2(f(...a));
  } catch {
    return none2();
  }
};
var getOrThrowWith2 = /* @__PURE__ */ dual(2, (self, onNone) => {
  if (isSome2(self)) {
    return self.value;
  }
  throw onNone();
});
var getOrThrow2 = /* @__PURE__ */ getOrThrowWith2(() => new Error("getOrThrow called on a None"));
var map2 = /* @__PURE__ */ dual(2, (self, f) => isNone2(self) ? none2() : some2(f(self.value)));
var as = /* @__PURE__ */ dual(2, (self, b) => map2(self, () => b));
var asVoid = /* @__PURE__ */ as(void 0);
var void_ = /* @__PURE__ */ some2(void 0);
var flatMap = /* @__PURE__ */ dual(2, (self, f) => isNone2(self) ? none2() : f(self.value));
var andThen = /* @__PURE__ */ dual(2, (self, f) => flatMap(self, (a) => {
  const b = isFunction(f) ? f(a) : f;
  return isOption2(b) ? b : some2(b);
}));
var flatMapNullable = /* @__PURE__ */ dual(2, (self, f) => isNone2(self) ? none2() : fromNullable(f(self.value)));
var flatten = /* @__PURE__ */ flatMap(identity);
var zipRight = /* @__PURE__ */ dual(2, (self, that) => flatMap(self, () => that));
var zipLeft = /* @__PURE__ */ dual(2, (self, that) => tap(self, () => that));
var composeK = /* @__PURE__ */ dual(2, (afb, bfc) => (a) => flatMap(afb(a), bfc));
var tap = /* @__PURE__ */ dual(2, (self, f) => flatMap(self, (a) => map2(f(a), () => a)));
var product = (self, that) => isSome2(self) && isSome2(that) ? some2([self.value, that.value]) : none2();
var productMany = (self, collection) => {
  if (isNone2(self)) {
    return none2();
  }
  const out = [self.value];
  for (const o of collection) {
    if (isNone2(o)) {
      return none2();
    }
    out.push(o.value);
  }
  return some2(out);
};
var all = (input) => {
  if (Symbol.iterator in input) {
    const out2 = [];
    for (const o of input) {
      if (isNone2(o)) {
        return none2();
      }
      out2.push(o.value);
    }
    return some2(out2);
  }
  const out = {};
  for (const key of Object.keys(input)) {
    const o = input[key];
    if (isNone2(o)) {
      return none2();
    }
    out[key] = o.value;
  }
  return some2(out);
};
var zipWith = /* @__PURE__ */ dual(3, (self, that, f) => map2(product(self, that), ([a, b]) => f(a, b)));
var ap = /* @__PURE__ */ dual(2, (self, that) => zipWith(self, that, (f, a) => f(a)));
var reduceCompact = /* @__PURE__ */ dual(3, (self, b, f) => {
  let out = b;
  for (const oa of self) {
    if (isSome2(oa)) {
      out = f(out, oa.value);
    }
  }
  return out;
});
var toArray = (self) => isNone2(self) ? [] : [self.value];
var partitionMap = /* @__PURE__ */ dual(2, (self, f) => {
  if (isNone2(self)) {
    return [none2(), none2()];
  }
  const e = f(self.value);
  return isLeft(e) ? [some2(e.left), none2()] : [none2(), some2(e.right)];
});
var filterMap = flatMap;
var filter = /* @__PURE__ */ dual(2, (self, predicate) => filterMap(self, (b) => predicate(b) ? some(b) : none));
var getEquivalence = (isEquivalent) => make((x, y) => isNone2(x) ? isNone2(y) : isNone2(y) ? false : isEquivalent(x.value, y.value));
var getOrder = (O) => make2((self, that) => isSome2(self) ? isSome2(that) ? O(self.value, that.value) : 1 : -1);
var lift2 = (f) => dual(2, (self, that) => zipWith(self, that, f));
var liftPredicate = /* @__PURE__ */ dual(2, (b, predicate) => predicate(b) ? some2(b) : none2());
var containsWith = (isEquivalent) => dual(2, (self, a) => isNone2(self) ? false : isEquivalent(self.value, a));
var _equivalence = /* @__PURE__ */ equivalence();
var contains = /* @__PURE__ */ containsWith(_equivalence);
var exists = /* @__PURE__ */ dual(2, (self, refinement) => isNone2(self) ? false : refinement(self.value));
var bindTo2 = /* @__PURE__ */ bindTo(map2);
var let_2 = /* @__PURE__ */ let_(map2);
var bind2 = /* @__PURE__ */ bind(map2, flatMap);
var Do = /* @__PURE__ */ some2({});
var adapter2 = /* @__PURE__ */ adapter();
var gen = (...args2) => {
  const f = args2.length === 1 ? args2[0] : args2[1].bind(args2[0]);
  const iterator = f(adapter2);
  let state = iterator.next();
  while (!state.done) {
    const current2 = isGenKind(state.value) ? state.value.value : yieldWrapGet(state.value);
    if (isNone2(current2)) {
      return current2;
    }
    state = iterator.next(current2.value);
  }
  return some2(state.value);
};
var mergeWith = (f) => (o1, o2) => {
  if (isNone2(o1)) {
    return o2;
  } else if (isNone2(o2)) {
    return o1;
  }
  return some2(f(o1.value, o2.value));
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Tuple.js
var make3 = (...elements) => elements;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Iterable.js
var findFirst = /* @__PURE__ */ dual(2, (self, f) => {
  let i = 0;
  for (const a of self) {
    const o = f(a, i);
    if (isBoolean(o)) {
      if (o) {
        return some2(a);
      }
    } else {
      if (isSome2(o)) {
        return o;
      }
    }
    i++;
  }
  return none2();
});
var constEmpty = {
  [Symbol.iterator]() {
    return constEmptyIterator;
  }
};
var constEmptyIterator = {
  next() {
    return {
      done: true,
      value: void 0
    };
  }
};
var empty2 = () => constEmpty;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Record.js
var Record_exports = {};
__export(Record_exports, {
  collect: () => collect,
  difference: () => difference,
  empty: () => empty3,
  every: () => every,
  filter: () => filter2,
  filterMap: () => filterMap2,
  findFirst: () => findFirst2,
  fromEntries: () => fromEntries,
  fromIterableBy: () => fromIterableBy,
  fromIterableWith: () => fromIterableWith,
  get: () => get,
  getEquivalence: () => getEquivalence2,
  getLefts: () => getLefts,
  getRights: () => getRights,
  getSomes: () => getSomes,
  has: () => has,
  intersection: () => intersection,
  isEmptyReadonlyRecord: () => isEmptyReadonlyRecord,
  isEmptyRecord: () => isEmptyRecord,
  isSubrecord: () => isSubrecord,
  isSubrecordBy: () => isSubrecordBy,
  keys: () => keys,
  map: () => map3,
  mapEntries: () => mapEntries,
  mapKeys: () => mapKeys,
  modify: () => modify,
  modifyOption: () => modifyOption,
  partition: () => partition,
  partitionMap: () => partitionMap2,
  pop: () => pop,
  reduce: () => reduce,
  remove: () => remove,
  replace: () => replace,
  replaceOption: () => replaceOption,
  separate: () => separate,
  set: () => set,
  singleton: () => singleton,
  size: () => size,
  some: () => some3,
  toEntries: () => toEntries,
  union: () => union,
  values: () => values
});
var empty3 = () => ({});
var isEmptyRecord = (self) => keys(self).length === 0;
var isEmptyReadonlyRecord = isEmptyRecord;
var fromIterableWith = /* @__PURE__ */ dual(2, (self, f) => {
  const out = empty3();
  for (const a of self) {
    const [k, b] = f(a);
    out[k] = b;
  }
  return out;
});
var fromIterableBy = (items, f) => fromIterableWith(items, (a) => [f(a), a]);
var fromEntries = Object.fromEntries;
var collect = /* @__PURE__ */ dual(2, (self, f) => {
  const out = [];
  for (const key of keys(self)) {
    out.push(f(key, self[key]));
  }
  return out;
});
var toEntries = /* @__PURE__ */ collect((key, value) => [key, value]);
var size = (self) => keys(self).length;
var has = /* @__PURE__ */ dual(2, (self, key) => Object.prototype.hasOwnProperty.call(self, key));
var get = /* @__PURE__ */ dual(2, (self, key) => has(self, key) ? some2(self[key]) : none2());
var modify = /* @__PURE__ */ dual(3, (self, key, f) => {
  if (!has(self, key)) {
    return {
      ...self
    };
  }
  return {
    ...self,
    [key]: f(self[key])
  };
});
var modifyOption = /* @__PURE__ */ dual(3, (self, key, f) => {
  if (!has(self, key)) {
    return none2();
  }
  return some2({
    ...self,
    [key]: f(self[key])
  });
});
var replaceOption = /* @__PURE__ */ dual(3, (self, key, b) => modifyOption(self, key, () => b));
var remove = /* @__PURE__ */ dual(2, (self, key) => {
  if (!has(self, key)) {
    return {
      ...self
    };
  }
  const out = {
    ...self
  };
  delete out[key];
  return out;
});
var pop = /* @__PURE__ */ dual(2, (self, key) => has(self, key) ? some2([self[key], remove(self, key)]) : none2());
var map3 = /* @__PURE__ */ dual(2, (self, f) => {
  const out = {
    ...self
  };
  for (const key of keys(self)) {
    out[key] = f(self[key], key);
  }
  return out;
});
var mapKeys = /* @__PURE__ */ dual(2, (self, f) => {
  const out = {};
  for (const key of keys(self)) {
    const a = self[key];
    out[f(key, a)] = a;
  }
  return out;
});
var mapEntries = /* @__PURE__ */ dual(2, (self, f) => {
  const out = {};
  for (const key of keys(self)) {
    const [k, b] = f(self[key], key);
    out[k] = b;
  }
  return out;
});
var filterMap2 = /* @__PURE__ */ dual(2, (self, f) => {
  const out = empty3();
  for (const key of keys(self)) {
    const o = f(self[key], key);
    if (isSome2(o)) {
      out[key] = o.value;
    }
  }
  return out;
});
var filter2 = /* @__PURE__ */ dual(2, (self, predicate) => {
  const out = empty3();
  for (const key of keys(self)) {
    if (predicate(self[key], key)) {
      out[key] = self[key];
    }
  }
  return out;
});
var getSomes = /* @__PURE__ */ filterMap2(identity);
var getLefts = (self) => {
  const out = empty3();
  for (const key of keys(self)) {
    const value = self[key];
    if (isLeft2(value)) {
      out[key] = value.left;
    }
  }
  return out;
};
var getRights = (self) => {
  const out = empty3();
  for (const key of keys(self)) {
    const value = self[key];
    if (isRight2(value)) {
      out[key] = value.right;
    }
  }
  return out;
};
var partitionMap2 = /* @__PURE__ */ dual(2, (self, f) => {
  const left3 = empty3();
  const right3 = empty3();
  for (const key of keys(self)) {
    const e = f(self[key], key);
    if (isLeft2(e)) {
      left3[key] = e.left;
    } else {
      right3[key] = e.right;
    }
  }
  return [left3, right3];
});
var separate = /* @__PURE__ */ partitionMap2(identity);
var partition = /* @__PURE__ */ dual(2, (self, predicate) => {
  const left3 = empty3();
  const right3 = empty3();
  for (const key of keys(self)) {
    if (predicate(self[key], key)) {
      right3[key] = self[key];
    } else {
      left3[key] = self[key];
    }
  }
  return [left3, right3];
});
var keys = (self) => Object.keys(self);
var values = (self) => collect(self, (_, a) => a);
var set = /* @__PURE__ */ dual(3, (self, key, value) => {
  return {
    ...self,
    [key]: value
  };
});
var replace = /* @__PURE__ */ dual(3, (self, key, value) => {
  if (has(self, key)) {
    return {
      ...self,
      [key]: value
    };
  }
  return {
    ...self
  };
});
var isSubrecordBy = (equivalence2) => dual(2, (self, that) => {
  for (const key of keys(self)) {
    if (!has(that, key) || !equivalence2(self[key], that[key])) {
      return false;
    }
  }
  return true;
});
var isSubrecord = /* @__PURE__ */ isSubrecordBy(/* @__PURE__ */ equivalence());
var reduce = /* @__PURE__ */ dual(3, (self, zero2, f) => {
  let out = zero2;
  for (const key of keys(self)) {
    out = f(out, self[key], key);
  }
  return out;
});
var every = /* @__PURE__ */ dual(2, (self, refinement) => {
  for (const key of keys(self)) {
    if (!refinement(self[key], key)) {
      return false;
    }
  }
  return true;
});
var some3 = /* @__PURE__ */ dual(2, (self, predicate) => {
  for (const key of keys(self)) {
    if (predicate(self[key], key)) {
      return true;
    }
  }
  return false;
});
var union = /* @__PURE__ */ dual(3, (self, that, combine11) => {
  if (isEmptyRecord(self)) {
    return {
      ...that
    };
  }
  if (isEmptyRecord(that)) {
    return {
      ...self
    };
  }
  const out = empty3();
  for (const key of keys(self)) {
    if (has(that, key)) {
      out[key] = combine11(self[key], that[key]);
    } else {
      out[key] = self[key];
    }
  }
  for (const key of keys(that)) {
    if (!has(out, key)) {
      out[key] = that[key];
    }
  }
  return out;
});
var intersection = /* @__PURE__ */ dual(3, (self, that, combine11) => {
  const out = empty3();
  if (isEmptyRecord(self) || isEmptyRecord(that)) {
    return out;
  }
  for (const key of keys(self)) {
    if (has(that, key)) {
      out[key] = combine11(self[key], that[key]);
    }
  }
  return out;
});
var difference = /* @__PURE__ */ dual(2, (self, that) => {
  if (isEmptyRecord(self)) {
    return {
      ...that
    };
  }
  if (isEmptyRecord(that)) {
    return {
      ...self
    };
  }
  const out = {};
  for (const key of keys(self)) {
    if (!has(that, key)) {
      out[key] = self[key];
    }
  }
  for (const key of keys(that)) {
    if (!has(self, key)) {
      out[key] = that[key];
    }
  }
  return out;
});
var getEquivalence2 = (equivalence2) => {
  const is2 = isSubrecordBy(equivalence2);
  return (self, that) => is2(self, that) && is2(that, self);
};
var singleton = (key, value) => ({
  [key]: value
});
var findFirst2 = /* @__PURE__ */ dual(2, (self, f) => {
  const k = keys(self);
  for (let i = 0; i < k.length; i++) {
    const key = k[i];
    if (f(self[key], key)) {
      return some2([key, self[key]]);
    }
  }
  return none2();
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Array.js
var make4 = (...elements) => elements;
var allocate = (n) => new Array(n);
var makeBy = /* @__PURE__ */ dual(2, (n, f) => {
  const max6 = Math.max(1, Math.floor(n));
  const out = new Array(max6);
  for (let i = 0; i < max6; i++) {
    out[i] = f(i);
  }
  return out;
});
var range = (start3, end6) => start3 <= end6 ? makeBy(end6 - start3 + 1, (i) => start3 + i) : [start3];
var replicate = /* @__PURE__ */ dual(2, (a, n) => makeBy(n, () => a));
var fromIterable2 = (collection) => Array.isArray(collection) ? collection : Array.from(collection);
var ensure = (self) => Array.isArray(self) ? self : [self];
var fromRecord = toEntries;
var fromOption2 = toArray;
var match3 = /* @__PURE__ */ dual(2, (self, {
  onEmpty,
  onNonEmpty
}) => isNonEmptyReadonlyArray(self) ? onNonEmpty(self) : onEmpty());
var matchLeft = /* @__PURE__ */ dual(2, (self, {
  onEmpty,
  onNonEmpty
}) => isNonEmptyReadonlyArray(self) ? onNonEmpty(headNonEmpty(self), tailNonEmpty(self)) : onEmpty());
var matchRight = /* @__PURE__ */ dual(2, (self, {
  onEmpty,
  onNonEmpty
}) => isNonEmptyReadonlyArray(self) ? onNonEmpty(initNonEmpty(self), lastNonEmpty(self)) : onEmpty());
var prepend = /* @__PURE__ */ dual(2, (self, head6) => [head6, ...self]);
var prependAll = /* @__PURE__ */ dual(2, (self, that) => fromIterable2(that).concat(fromIterable2(self)));
var append = /* @__PURE__ */ dual(2, (self, last5) => [...self, last5]);
var appendAll = /* @__PURE__ */ dual(2, (self, that) => fromIterable2(self).concat(fromIterable2(that)));
var scan = /* @__PURE__ */ dual(3, (self, b, f) => {
  const out = [b];
  let i = 0;
  for (const a of self) {
    out[i + 1] = f(out[i], a);
    i++;
  }
  return out;
});
var scanRight = /* @__PURE__ */ dual(3, (self, b, f) => {
  const input = fromIterable2(self);
  const out = new Array(input.length + 1);
  out[input.length] = b;
  for (let i = input.length - 1; i >= 0; i--) {
    out[i] = f(out[i + 1], input[i]);
  }
  return out;
});
var isArray = Array.isArray;
var isEmptyArray = (self) => self.length === 0;
var isEmptyReadonlyArray = isEmptyArray;
var isNonEmptyArray2 = isNonEmptyArray;
var isNonEmptyReadonlyArray = isNonEmptyArray;
var length = (self) => self.length;
var isOutOfBounds = (i, as11) => i < 0 || i >= as11.length;
var clamp = (i, as11) => Math.floor(Math.min(Math.max(0, i), as11.length));
var get2 = /* @__PURE__ */ dual(2, (self, index) => {
  const i = Math.floor(index);
  return isOutOfBounds(i, self) ? none2() : some2(self[i]);
});
var unsafeGet = /* @__PURE__ */ dual(2, (self, index) => {
  const i = Math.floor(index);
  if (isOutOfBounds(i, self)) {
    throw new Error(`Index ${i} out of bounds`);
  }
  return self[i];
});
var unprepend = (self) => [headNonEmpty(self), tailNonEmpty(self)];
var unappend = (self) => [initNonEmpty(self), lastNonEmpty(self)];
var head = /* @__PURE__ */ get2(0);
var headNonEmpty = /* @__PURE__ */ unsafeGet(0);
var last = (self) => isNonEmptyReadonlyArray(self) ? some2(lastNonEmpty(self)) : none2();
var lastNonEmpty = (self) => self[self.length - 1];
var tail = (self) => {
  const input = fromIterable2(self);
  return isNonEmptyReadonlyArray(input) ? some2(tailNonEmpty(input)) : none2();
};
var tailNonEmpty = (self) => self.slice(1);
var init = (self) => {
  const input = fromIterable2(self);
  return isNonEmptyReadonlyArray(input) ? some2(initNonEmpty(input)) : none2();
};
var initNonEmpty = (self) => self.slice(0, -1);
var take = /* @__PURE__ */ dual(2, (self, n) => {
  const input = fromIterable2(self);
  return input.slice(0, clamp(n, input));
});
var takeRight = /* @__PURE__ */ dual(2, (self, n) => {
  const input = fromIterable2(self);
  const i = clamp(n, input);
  return i === 0 ? [] : input.slice(-i);
});
var takeWhile = /* @__PURE__ */ dual(2, (self, predicate) => {
  let i = 0;
  const out = [];
  for (const a of self) {
    if (!predicate(a, i)) {
      break;
    }
    out.push(a);
    i++;
  }
  return out;
});
var spanIndex = (self, predicate) => {
  let i = 0;
  for (const a of self) {
    if (!predicate(a, i)) {
      break;
    }
    i++;
  }
  return i;
};
var span = /* @__PURE__ */ dual(2, (self, predicate) => splitAt(self, spanIndex(self, predicate)));
var drop = /* @__PURE__ */ dual(2, (self, n) => {
  const input = fromIterable2(self);
  return input.slice(clamp(n, input), input.length);
});
var dropRight = /* @__PURE__ */ dual(2, (self, n) => {
  const input = fromIterable2(self);
  return input.slice(0, input.length - clamp(n, input));
});
var dropWhile = /* @__PURE__ */ dual(2, (self, predicate) => fromIterable2(self).slice(spanIndex(self, predicate)));
var findFirstIndex = /* @__PURE__ */ dual(2, (self, predicate) => {
  let i = 0;
  for (const a of self) {
    if (predicate(a, i)) {
      return some2(i);
    }
    i++;
  }
  return none2();
});
var findLastIndex = /* @__PURE__ */ dual(2, (self, predicate) => {
  const input = fromIterable2(self);
  for (let i = input.length - 1; i >= 0; i--) {
    if (predicate(input[i], i)) {
      return some2(i);
    }
  }
  return none2();
});
var findFirst3 = findFirst;
var findLast = /* @__PURE__ */ dual(2, (self, f) => {
  const input = fromIterable2(self);
  for (let i = input.length - 1; i >= 0; i--) {
    const a = input[i];
    const o = f(a, i);
    if (isBoolean(o)) {
      if (o) {
        return some2(a);
      }
    } else {
      if (isSome2(o)) {
        return o;
      }
    }
  }
  return none2();
});
var countBy = /* @__PURE__ */ dual(2, (self, f) => {
  let count3 = 0;
  const as11 = fromIterable2(self);
  for (let i = 0; i < as11.length; i++) {
    const a = as11[i];
    if (f(a, i)) {
      count3++;
    }
  }
  return count3;
});
var insertAt = /* @__PURE__ */ dual(3, (self, i, b) => {
  const out = Array.from(self);
  if (i < 0 || i > out.length) {
    return none2();
  }
  out.splice(i, 0, b);
  return some2(out);
});
var replace2 = /* @__PURE__ */ dual(3, (self, i, b) => modify2(self, i, () => b));
var replaceOption2 = /* @__PURE__ */ dual(3, (self, i, b) => modifyOption2(self, i, () => b));
var modify2 = /* @__PURE__ */ dual(3, (self, i, f) => {
  const out = Array.from(self);
  if (isOutOfBounds(i, out)) {
    return out;
  }
  const b = f(out[i]);
  out[i] = b;
  return out;
});
var modifyOption2 = /* @__PURE__ */ dual(3, (self, i, f) => {
  const arr = fromIterable2(self);
  if (isOutOfBounds(i, arr)) {
    return none2();
  }
  const out = Array.isArray(self) ? self.slice() : arr;
  const b = f(arr[i]);
  out[i] = b;
  return some2(out);
});
var remove2 = /* @__PURE__ */ dual(2, (self, i) => {
  const out = Array.from(self);
  if (isOutOfBounds(i, out)) {
    return out;
  }
  out.splice(i, 1);
  return out;
});
var removeOption = /* @__PURE__ */ dual(2, (self, i) => {
  const arr = fromIterable2(self);
  if (isOutOfBounds(i, arr)) {
    return none2();
  }
  const out = Array.isArray(self) ? self.slice() : arr;
  out.splice(i, 1);
  return some2(out);
});
var reverse = (self) => Array.from(self).reverse();
var sort = /* @__PURE__ */ dual(2, (self, O) => {
  const out = Array.from(self);
  out.sort(O);
  return out;
});
var sortWith = /* @__PURE__ */ dual(3, (self, f, order) => Array.from(self).map((a) => [a, f(a)]).sort(([, a], [, b]) => order(a, b)).map(([_]) => _));
var sortBy = (...orders) => {
  const sortByAll = sort(combineAll(orders));
  return (self) => {
    const input = fromIterable2(self);
    if (isNonEmptyReadonlyArray(input)) {
      return sortByAll(input);
    }
    return [];
  };
};
var zip = /* @__PURE__ */ dual(2, (self, that) => zipWith2(self, that, make3));
var zipWith2 = /* @__PURE__ */ dual(3, (self, that, f) => {
  const as11 = fromIterable2(self);
  const bs = fromIterable2(that);
  if (isNonEmptyReadonlyArray(as11) && isNonEmptyReadonlyArray(bs)) {
    const out = [f(headNonEmpty(as11), headNonEmpty(bs))];
    const len = Math.min(as11.length, bs.length);
    for (let i = 1; i < len; i++) {
      out[i] = f(as11[i], bs[i]);
    }
    return out;
  }
  return [];
});
var unzip = (self) => {
  const input = fromIterable2(self);
  if (isNonEmptyReadonlyArray(input)) {
    const fa = [input[0][0]];
    const fb = [input[0][1]];
    for (let i = 1; i < input.length; i++) {
      fa[i] = input[i][0];
      fb[i] = input[i][1];
    }
    return [fa, fb];
  }
  return [[], []];
};
var intersperse = /* @__PURE__ */ dual(2, (self, middle) => {
  const input = fromIterable2(self);
  if (isNonEmptyReadonlyArray(input)) {
    const out = [headNonEmpty(input)];
    const tail2 = tailNonEmpty(input);
    for (let i = 0; i < tail2.length; i++) {
      if (i < tail2.length) {
        out.push(middle);
      }
      out.push(tail2[i]);
    }
    return out;
  }
  return [];
});
var modifyNonEmptyHead = /* @__PURE__ */ dual(2, (self, f) => [f(headNonEmpty(self)), ...tailNonEmpty(self)]);
var setNonEmptyHead = /* @__PURE__ */ dual(2, (self, b) => modifyNonEmptyHead(self, () => b));
var modifyNonEmptyLast = /* @__PURE__ */ dual(2, (self, f) => append(initNonEmpty(self), f(lastNonEmpty(self))));
var setNonEmptyLast = /* @__PURE__ */ dual(2, (self, b) => modifyNonEmptyLast(self, () => b));
var rotate = /* @__PURE__ */ dual(2, (self, n) => {
  const input = fromIterable2(self);
  if (isNonEmptyReadonlyArray(input)) {
    const len = input.length;
    const m = Math.round(n) % len;
    if (isOutOfBounds(Math.abs(m), input) || m === 0) {
      return copy(input);
    }
    if (m < 0) {
      const [f, s] = splitNonEmptyAt(input, -m);
      return appendAll(s, f);
    } else {
      return rotate(self, m - len);
    }
  }
  return [];
});
var containsWith2 = (isEquivalent) => dual(2, (self, a) => {
  for (const i of self) {
    if (isEquivalent(a, i)) {
      return true;
    }
  }
  return false;
});
var _equivalence2 = /* @__PURE__ */ equivalence();
var contains2 = /* @__PURE__ */ containsWith2(_equivalence2);
var chop = /* @__PURE__ */ dual(2, (self, f) => {
  const input = fromIterable2(self);
  if (isNonEmptyReadonlyArray(input)) {
    const [b, rest] = f(input);
    const out = [b];
    let next = rest;
    while (isNonEmptyArray(next)) {
      const [b2, rest2] = f(next);
      out.push(b2);
      next = rest2;
    }
    return out;
  }
  return [];
});
var splitAt = /* @__PURE__ */ dual(2, (self, n) => {
  const input = Array.from(self);
  const _n = Math.floor(n);
  if (isNonEmptyReadonlyArray(input)) {
    if (_n >= 1) {
      return splitNonEmptyAt(input, _n);
    }
    return [[], input];
  }
  return [input, []];
});
var splitNonEmptyAt = /* @__PURE__ */ dual(2, (self, n) => {
  const _n = Math.max(1, Math.floor(n));
  return _n >= self.length ? [copy(self), []] : [prepend(self.slice(1, _n), headNonEmpty(self)), self.slice(_n)];
});
var split = /* @__PURE__ */ dual(2, (self, n) => {
  const input = fromIterable2(self);
  return chunksOf(input, Math.ceil(input.length / Math.floor(n)));
});
var splitWhere = /* @__PURE__ */ dual(2, (self, predicate) => span(self, (a, i) => !predicate(a, i)));
var copy = (self) => self.slice();
var pad = /* @__PURE__ */ dual(3, (self, n, fill) => {
  if (self.length >= n) {
    return take(self, n);
  }
  return appendAll(self, makeBy(n - self.length, () => fill));
});
var chunksOf = /* @__PURE__ */ dual(2, (self, n) => {
  const input = fromIterable2(self);
  if (isNonEmptyReadonlyArray(input)) {
    return chop(input, splitNonEmptyAt(n));
  }
  return [];
});
var window = /* @__PURE__ */ dual(2, (self, n) => {
  const input = fromIterable2(self);
  if (n > 0 && isNonEmptyReadonlyArray(input)) {
    return Array.from({
      length: input.length - (n - 1)
    }, (_, index) => input.slice(index, index + n));
  }
  return [];
});
var groupWith = /* @__PURE__ */ dual(2, (self, isEquivalent) => chop(self, (as11) => {
  const h = headNonEmpty(as11);
  const out = [h];
  let i = 1;
  for (; i < as11.length; i++) {
    const a = as11[i];
    if (isEquivalent(a, h)) {
      out.push(a);
    } else {
      break;
    }
  }
  return [out, as11.slice(i)];
}));
var group = /* @__PURE__ */ groupWith(/* @__PURE__ */ equivalence());
var groupBy = /* @__PURE__ */ dual(2, (self, f) => {
  const out = {};
  for (const a of self) {
    const k = f(a);
    if (Object.prototype.hasOwnProperty.call(out, k)) {
      out[k].push(a);
    } else {
      out[k] = [a];
    }
  }
  return out;
});
var unionWith = /* @__PURE__ */ dual(3, (self, that, isEquivalent) => {
  const a = fromIterable2(self);
  const b = fromIterable2(that);
  if (isNonEmptyReadonlyArray(a)) {
    if (isNonEmptyReadonlyArray(b)) {
      const dedupe2 = dedupeWith(isEquivalent);
      return dedupe2(appendAll(a, b));
    }
    return a;
  }
  return b;
});
var union2 = /* @__PURE__ */ dual(2, (self, that) => unionWith(self, that, _equivalence2));
var intersectionWith = (isEquivalent) => {
  const has8 = containsWith2(isEquivalent);
  return dual(2, (self, that) => fromIterable2(self).filter((a) => has8(that, a)));
};
var intersection2 = /* @__PURE__ */ intersectionWith(_equivalence2);
var differenceWith = (isEquivalent) => {
  const has8 = containsWith2(isEquivalent);
  return dual(2, (self, that) => fromIterable2(self).filter((a) => !has8(that, a)));
};
var difference2 = /* @__PURE__ */ differenceWith(_equivalence2);
var empty4 = () => [];
var of = (a) => [a];
var map4 = /* @__PURE__ */ dual(2, (self, f) => self.map(f));
var flatMap2 = /* @__PURE__ */ dual(2, (self, f) => {
  if (isEmptyReadonlyArray(self)) {
    return [];
  }
  const out = [];
  for (let i = 0; i < self.length; i++) {
    const inner = f(self[i], i);
    for (let j = 0; j < inner.length; j++) {
      out.push(inner[j]);
    }
  }
  return out;
});
var flatten2 = /* @__PURE__ */ flatMap2(identity);
var filterMap3 = /* @__PURE__ */ dual(2, (self, f) => {
  const as11 = fromIterable2(self);
  const out = [];
  for (let i = 0; i < as11.length; i++) {
    const o = f(as11[i], i);
    if (isSome2(o)) {
      out.push(o.value);
    }
  }
  return out;
});
var filterMapWhile = /* @__PURE__ */ dual(2, (self, f) => {
  let i = 0;
  const out = [];
  for (const a of self) {
    const b = f(a, i);
    if (isSome2(b)) {
      out.push(b.value);
    } else {
      break;
    }
    i++;
  }
  return out;
});
var partitionMap3 = /* @__PURE__ */ dual(2, (self, f) => {
  const left3 = [];
  const right3 = [];
  const as11 = fromIterable2(self);
  for (let i = 0; i < as11.length; i++) {
    const e = f(as11[i], i);
    if (isLeft2(e)) {
      left3.push(e.left);
    } else {
      right3.push(e.right);
    }
  }
  return [left3, right3];
});
var getSomes2 = /* @__PURE__ */ filterMap3(identity);
var getLefts2 = (self) => {
  const out = [];
  for (const a of self) {
    if (isLeft2(a)) {
      out.push(a.left);
    }
  }
  return out;
};
var getRights2 = (self) => {
  const out = [];
  for (const a of self) {
    if (isRight2(a)) {
      out.push(a.right);
    }
  }
  return out;
};
var filter3 = /* @__PURE__ */ dual(2, (self, predicate) => {
  const as11 = fromIterable2(self);
  const out = [];
  for (let i = 0; i < as11.length; i++) {
    if (predicate(as11[i], i)) {
      out.push(as11[i]);
    }
  }
  return out;
});
var partition2 = /* @__PURE__ */ dual(2, (self, predicate) => {
  const left3 = [];
  const right3 = [];
  const as11 = fromIterable2(self);
  for (let i = 0; i < as11.length; i++) {
    if (predicate(as11[i], i)) {
      right3.push(as11[i]);
    } else {
      left3.push(as11[i]);
    }
  }
  return [left3, right3];
});
var separate2 = /* @__PURE__ */ partitionMap3(identity);
var reduce2 = /* @__PURE__ */ dual(3, (self, b, f) => fromIterable2(self).reduce((b2, a, i) => f(b2, a, i), b));
var reduceRight = /* @__PURE__ */ dual(3, (self, b, f) => fromIterable2(self).reduceRight((b2, a, i) => f(b2, a, i), b));
var liftPredicate2 = (predicate) => (b) => predicate(b) ? [b] : [];
var liftOption = (f) => (...a) => fromOption2(f(...a));
var fromNullable2 = (a) => a == null ? empty4() : [a];
var liftNullable2 = (f) => (...a) => fromNullable2(f(...a));
var flatMapNullable2 = /* @__PURE__ */ dual(2, (self, f) => flatMap2(self, (a) => fromNullable2(f(a))));
var liftEither = (f) => (...a) => {
  const e = f(...a);
  return isLeft2(e) ? [] : [e.right];
};
var every2 = /* @__PURE__ */ dual(2, (self, refinement) => self.every(refinement));
var some4 = /* @__PURE__ */ dual(2, (self, predicate) => self.some(predicate));
var extend = /* @__PURE__ */ dual(2, (self, f) => self.map((_, i, as11) => f(as11.slice(i))));
var min2 = /* @__PURE__ */ dual(2, (self, O) => self.reduce(min(O)));
var max2 = /* @__PURE__ */ dual(2, (self, O) => self.reduce(max(O)));
var unfold = (b, f) => {
  const out = [];
  let next = b;
  let o;
  while (isSome2(o = f(next))) {
    const [a, b2] = o.value;
    out.push(a);
    next = b2;
  }
  return out;
};
var getOrder2 = array3;
var getEquivalence3 = array;
var forEach = /* @__PURE__ */ dual(2, (self, f) => fromIterable2(self).forEach((a, i) => f(a, i)));
var dedupeWith = /* @__PURE__ */ dual(2, (self, isEquivalent) => {
  const input = fromIterable2(self);
  if (isNonEmptyReadonlyArray(input)) {
    const out = [headNonEmpty(input)];
    const rest = tailNonEmpty(input);
    for (const r of rest) {
      if (out.every((a) => !isEquivalent(r, a))) {
        out.push(r);
      }
    }
    return out;
  }
  return [];
});
var dedupe = (self) => dedupeWith(self, equivalence());
var dedupeAdjacentWith = /* @__PURE__ */ dual(2, (self, isEquivalent) => {
  const out = [];
  let lastA = none2();
  for (const a of self) {
    if (isNone2(lastA) || !isEquivalent(a, lastA.value)) {
      out.push(a);
      lastA = some2(a);
    }
  }
  return out;
});
var dedupeAdjacent = /* @__PURE__ */ dedupeAdjacentWith(/* @__PURE__ */ equivalence());
var join = /* @__PURE__ */ dual(2, (self, sep) => fromIterable2(self).join(sep));
var mapAccum = /* @__PURE__ */ dual(3, (self, s, f) => {
  let i = 0;
  let s1 = s;
  const out = [];
  for (const a of self) {
    const r = f(s1, a, i);
    s1 = r[0];
    out.push(r[1]);
    i++;
  }
  return [s1, out];
});
var cartesianWith = /* @__PURE__ */ dual(3, (self, that, f) => flatMap2(self, (a) => map4(that, (b) => f(a, b))));
var cartesian = /* @__PURE__ */ dual(2, (self, that) => cartesianWith(self, that, (a, b) => [a, b]));
var Do2 = /* @__PURE__ */ of({});
var bind3 = /* @__PURE__ */ bind(map4, flatMap2);
var bindTo3 = /* @__PURE__ */ bindTo(map4);
var let_3 = /* @__PURE__ */ let_(map4);

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/schema/util.js
var getKeysForIndexSignature = (input, parameter) => {
  switch (parameter._tag) {
    case "StringKeyword":
    case "TemplateLiteral":
      return Object.keys(input);
    case "SymbolKeyword":
      return Object.getOwnPropertySymbols(input);
    case "Refinement":
      return getKeysForIndexSignature(input, parameter.from);
  }
};
var ownKeys = (o) => Object.keys(o).concat(Object.getOwnPropertySymbols(o));
var memoizeThunk = (f) => {
  let done11 = false;
  let a;
  return () => {
    if (done11) {
      return a;
    }
    a = f();
    done11 = true;
    return a;
  };
};
var formatDate = (date) => {
  try {
    return date.toISOString();
  } catch {
    return String(date);
  }
};
var formatUnknown = (u, checkCircular = true) => {
  if (Array.isArray(u)) {
    return `[${u.map((i) => formatUnknown(i, checkCircular)).join(",")}]`;
  }
  if (isDate(u)) {
    return formatDate(u);
  }
  if (hasProperty(u, "toString") && isFunction2(u["toString"]) && u["toString"] !== Object.prototype.toString) {
    return u["toString"]();
  }
  if (isString(u)) {
    return JSON.stringify(u);
  }
  if (isNumber(u) || u == null || isBoolean(u) || isSymbol(u)) {
    return String(u);
  }
  if (isBigInt(u)) {
    return String(u) + "n";
  }
  if (isIterable(u)) {
    return `${u.constructor.name}(${formatUnknown(Array.from(u), checkCircular)})`;
  }
  try {
    if (checkCircular) {
      JSON.stringify(u);
    }
    const pojo = `{${ownKeys(u).map((k) => `${isString(k) ? JSON.stringify(k) : String(k)}:${formatUnknown(u[k], false)}`).join(",")}}`;
    const name = u.constructor.name;
    return u.constructor !== Object.prototype.constructor ? `${name}(${pojo})` : pojo;
  } catch {
    return "<circular structure>";
  }
};
var formatPropertyKey = (name) => typeof name === "string" ? JSON.stringify(name) : String(name);
var isNonEmpty = (x) => Array.isArray(x);
var formatPathKey = (key) => `[${formatPropertyKey(key)}]`;
var formatPath = (path) => isNonEmpty(path) ? path.map(formatPathKey).join("") : formatPathKey(path);

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/schema/errors.js
var getErrorMessage = (reason, details, path, ast) => {
  let out = reason;
  if (details !== void 0) {
    out += `
details: ${details}`;
  }
  if (ast) {
    out += `
schema (${ast._tag}): ${ast}`;
  }
  return out;
};
var getASTUnsupportedKeySchemaErrorMessage = (ast) => getErrorMessage("Unsupported key schema", void 0, void 0, ast);
var getASTUnsupportedLiteralErrorMessage = (literal) => getErrorMessage("Unsupported literal", `literal value: ${formatUnknown(literal)}`);
var getASTDuplicateIndexSignatureErrorMessage = (type) => getErrorMessage("Duplicate index signature", `${type} index signature`);
var getASTIndexSignatureParameterErrorMessage = /* @__PURE__ */ getErrorMessage("Unsupported index signature parameter", "An index signature parameter type must be `string`, `symbol`, a template literal type or a refinement of the previous types");
var getASTRequiredElementFollowinAnOptionalElementErrorMessage = /* @__PURE__ */ getErrorMessage("Invalid element", "A required element cannot follow an optional element. ts(1257)");
var getASTDuplicatePropertySignatureTransformationErrorMessage = (key) => getErrorMessage("Duplicate property signature transformation", `Duplicate key ${formatUnknown(key)}`);
var getASTDuplicatePropertySignatureErrorMessage = (key) => getErrorMessage("Duplicate property signature", `Duplicate key ${formatUnknown(key)}`);

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Number.js
var Order = number3;
var nextPow2 = (n) => {
  const nextPow = Math.ceil(Math.log(n) / Math.log(2));
  return Math.max(Math.pow(2, nextPow), 2);
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/RegExp.js
var escape = (string2) => string2.replace(/[/\\^$*+?.()|[\]{}]/g, "\\$&");

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/SchemaAST.js
var BrandAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Brand");
var SchemaIdAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/SchemaId");
var MessageAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Message");
var MissingMessageAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/MissingMessage");
var IdentifierAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Identifier");
var TitleAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Title");
var AutoTitleAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/AutoTitle");
var DescriptionAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Description");
var ExamplesAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Examples");
var DefaultAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Default");
var JSONSchemaAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/JSONSchema");
var ArbitraryAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Arbitrary");
var PrettyAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Pretty");
var EquivalenceAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Equivalence");
var DocumentationAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Documentation");
var ConcurrencyAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Concurrency");
var BatchingAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Batching");
var ParseIssueTitleAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/ParseIssueTitle");
var ParseOptionsAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/ParseOptions");
var DecodingFallbackAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/DecodingFallback");
var SurrogateAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Surrogate");
var StableFilterAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/StableFilter");
var getAnnotation = /* @__PURE__ */ dual(2, (annotated, key) => Object.prototype.hasOwnProperty.call(annotated.annotations, key) ? some2(annotated.annotations[key]) : none2());
var getBrandAnnotation = /* @__PURE__ */ getAnnotation(BrandAnnotationId);
var getMessageAnnotation = /* @__PURE__ */ getAnnotation(MessageAnnotationId);
var getMissingMessageAnnotation = /* @__PURE__ */ getAnnotation(MissingMessageAnnotationId);
var getTitleAnnotation = /* @__PURE__ */ getAnnotation(TitleAnnotationId);
var getAutoTitleAnnotation = /* @__PURE__ */ getAnnotation(AutoTitleAnnotationId);
var getIdentifierAnnotation = /* @__PURE__ */ getAnnotation(IdentifierAnnotationId);
var getDescriptionAnnotation = /* @__PURE__ */ getAnnotation(DescriptionAnnotationId);
var getConcurrencyAnnotation = /* @__PURE__ */ getAnnotation(ConcurrencyAnnotationId);
var getBatchingAnnotation = /* @__PURE__ */ getAnnotation(BatchingAnnotationId);
var getParseIssueTitleAnnotation = /* @__PURE__ */ getAnnotation(ParseIssueTitleAnnotationId);
var getParseOptionsAnnotation = /* @__PURE__ */ getAnnotation(ParseOptionsAnnotationId);
var getDecodingFallbackAnnotation = /* @__PURE__ */ getAnnotation(DecodingFallbackAnnotationId);
var getSurrogateAnnotation = /* @__PURE__ */ getAnnotation(SurrogateAnnotationId);
var getStableFilterAnnotation = /* @__PURE__ */ getAnnotation(StableFilterAnnotationId);
var hasStableFilter = (annotated) => exists(getStableFilterAnnotation(annotated), (b) => b === true);
var JSONIdentifierAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/JSONIdentifier");
var getJSONIdentifierAnnotation = /* @__PURE__ */ getAnnotation(JSONIdentifierAnnotationId);
var getJSONIdentifier = (annotated) => orElse(getJSONIdentifierAnnotation(annotated), () => getIdentifierAnnotation(annotated));
var Declaration = class {
  typeParameters;
  decodeUnknown;
  encodeUnknown;
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "Declaration";
  constructor(typeParameters, decodeUnknown3, encodeUnknown3, annotations2 = {}) {
    this.typeParameters = typeParameters;
    this.decodeUnknown = decodeUnknown3;
    this.encodeUnknown = encodeUnknown3;
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return getOrElse(getExpected(this), () => "<declaration schema>");
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      typeParameters: this.typeParameters.map((ast) => ast.toJSON()),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var createASTGuard = (tag2) => (ast) => ast._tag === tag2;
var Literal = class {
  literal;
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "Literal";
  constructor(literal, annotations2 = {}) {
    this.literal = literal;
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return getOrElse(getExpected(this), () => formatUnknown(this.literal));
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      literal: isBigInt(this.literal) ? String(this.literal) : this.literal,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var isLiteral = /* @__PURE__ */ createASTGuard("Literal");
var $null = /* @__PURE__ */ new Literal(null);
var UniqueSymbol = class {
  symbol;
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "UniqueSymbol";
  constructor(symbol3, annotations2 = {}) {
    this.symbol = symbol3;
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return getOrElse(getExpected(this), () => formatUnknown(this.symbol));
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      symbol: String(this.symbol),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var UndefinedKeyword = class {
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "UndefinedKeyword";
  constructor(annotations2 = {}) {
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var undefinedKeyword = /* @__PURE__ */ new UndefinedKeyword({
  [TitleAnnotationId]: "undefined"
});
var NeverKeyword = class {
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "NeverKeyword";
  constructor(annotations2 = {}) {
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var neverKeyword = /* @__PURE__ */ new NeverKeyword({
  [TitleAnnotationId]: "never"
});
var UnknownKeyword = class {
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "UnknownKeyword";
  constructor(annotations2 = {}) {
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var unknownKeyword = /* @__PURE__ */ new UnknownKeyword({
  [TitleAnnotationId]: "unknown"
});
var AnyKeyword = class {
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "AnyKeyword";
  constructor(annotations2 = {}) {
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var anyKeyword = /* @__PURE__ */ new AnyKeyword({
  [TitleAnnotationId]: "any"
});
var StringKeyword = class {
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "StringKeyword";
  constructor(annotations2 = {}) {
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var stringKeyword = /* @__PURE__ */ new StringKeyword({
  [TitleAnnotationId]: "string",
  [DescriptionAnnotationId]: "a string"
});
var isStringKeyword = /* @__PURE__ */ createASTGuard("StringKeyword");
var BooleanKeyword = class {
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "BooleanKeyword";
  constructor(annotations2 = {}) {
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var booleanKeyword = /* @__PURE__ */ new BooleanKeyword({
  [TitleAnnotationId]: "boolean",
  [DescriptionAnnotationId]: "a boolean"
});
var isSymbolKeyword = /* @__PURE__ */ createASTGuard("SymbolKeyword");
var Type = class {
  type;
  annotations;
  constructor(type, annotations2 = {}) {
    this.type = type;
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      type: this.type.toJSON(),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return String(this.type);
  }
};
var OptionalType = class extends Type {
  isOptional;
  constructor(type, isOptional, annotations2 = {}) {
    super(type, annotations2);
    this.isOptional = isOptional;
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      type: this.type.toJSON(),
      isOptional: this.isOptional,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return String(this.type) + (this.isOptional ? "?" : "");
  }
};
var getRestASTs = (rest) => rest.map((annotatedAST) => annotatedAST.type);
var TupleType = class {
  elements;
  rest;
  isReadonly;
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "TupleType";
  constructor(elements, rest, isReadonly, annotations2 = {}) {
    this.elements = elements;
    this.rest = rest;
    this.isReadonly = isReadonly;
    this.annotations = annotations2;
    let hasOptionalElement = false;
    let hasIllegalRequiredElement = false;
    for (const e of elements) {
      if (e.isOptional) {
        hasOptionalElement = true;
      } else if (hasOptionalElement) {
        hasIllegalRequiredElement = true;
        break;
      }
    }
    if (hasIllegalRequiredElement || hasOptionalElement && rest.length > 1) {
      throw new Error(getASTRequiredElementFollowinAnOptionalElementErrorMessage);
    }
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return getOrElse(getExpected(this), () => formatTuple(this));
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      elements: this.elements.map((e) => e.toJSON()),
      rest: this.rest.map((ast) => ast.toJSON()),
      isReadonly: this.isReadonly,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var formatTuple = (ast) => {
  const formattedElements = ast.elements.map(String).join(", ");
  return matchLeft(ast.rest, {
    onEmpty: () => `readonly [${formattedElements}]`,
    onNonEmpty: (head6, tail2) => {
      const formattedHead = String(head6);
      const wrappedHead = formattedHead.includes(" | ") ? `(${formattedHead})` : formattedHead;
      if (tail2.length > 0) {
        const formattedTail = tail2.map(String).join(", ");
        if (ast.elements.length > 0) {
          return `readonly [${formattedElements}, ...${wrappedHead}[], ${formattedTail}]`;
        } else {
          return `readonly [...${wrappedHead}[], ${formattedTail}]`;
        }
      } else {
        if (ast.elements.length > 0) {
          return `readonly [${formattedElements}, ...${wrappedHead}[]]`;
        } else {
          return `ReadonlyArray<${formattedHead}>`;
        }
      }
    }
  });
};
var PropertySignature = class extends OptionalType {
  name;
  isReadonly;
  constructor(name, type, isOptional, isReadonly, annotations2) {
    super(type, isOptional, annotations2);
    this.name = name;
    this.isReadonly = isReadonly;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return (this.isReadonly ? "readonly " : "") + String(this.name) + (this.isOptional ? "?" : "") + ": " + this.type;
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      name: String(this.name),
      type: this.type.toJSON(),
      isOptional: this.isOptional,
      isReadonly: this.isReadonly,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var isParameter = (ast) => {
  switch (ast._tag) {
    case "StringKeyword":
    case "SymbolKeyword":
    case "TemplateLiteral":
      return true;
    case "Refinement":
      return isParameter(ast.from);
  }
  return false;
};
var IndexSignature = class {
  type;
  isReadonly;
  /**
   * @since 3.10.0
   */
  parameter;
  constructor(parameter, type, isReadonly) {
    this.type = type;
    this.isReadonly = isReadonly;
    if (isParameter(parameter)) {
      this.parameter = parameter;
    } else {
      throw new Error(getASTIndexSignatureParameterErrorMessage);
    }
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return (this.isReadonly ? "readonly " : "") + `[x: ${this.parameter}]: ${this.type}`;
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      parameter: this.parameter.toJSON(),
      type: this.type.toJSON(),
      isReadonly: this.isReadonly
    };
  }
};
var TypeLiteral = class {
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "TypeLiteral";
  /**
   * @since 3.10.0
   */
  propertySignatures;
  /**
   * @since 3.10.0
   */
  indexSignatures;
  constructor(propertySignatures, indexSignatures, annotations2 = {}) {
    this.annotations = annotations2;
    const keys6 = {};
    for (let i = 0; i < propertySignatures.length; i++) {
      const name = propertySignatures[i].name;
      if (Object.prototype.hasOwnProperty.call(keys6, name)) {
        throw new Error(getASTDuplicatePropertySignatureErrorMessage(name));
      }
      keys6[name] = null;
    }
    const parameters = {
      string: false,
      symbol: false
    };
    for (let i = 0; i < indexSignatures.length; i++) {
      const encodedParameter = getEncodedParameter(indexSignatures[i].parameter);
      if (isStringKeyword(encodedParameter)) {
        if (parameters.string) {
          throw new Error(getASTDuplicateIndexSignatureErrorMessage("string"));
        }
        parameters.string = true;
      } else if (isSymbolKeyword(encodedParameter)) {
        if (parameters.symbol) {
          throw new Error(getASTDuplicateIndexSignatureErrorMessage("symbol"));
        }
        parameters.symbol = true;
      }
    }
    this.propertySignatures = propertySignatures;
    this.indexSignatures = indexSignatures;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return getOrElse(getExpected(this), () => formatTypeLiteral(this));
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      propertySignatures: this.propertySignatures.map((ps) => ps.toJSON()),
      indexSignatures: this.indexSignatures.map((ps) => ps.toJSON()),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var formatIndexSignatures = (iss) => iss.map(String).join("; ");
var formatTypeLiteral = (ast) => {
  if (ast.propertySignatures.length > 0) {
    const pss = ast.propertySignatures.map(String).join("; ");
    if (ast.indexSignatures.length > 0) {
      return `{ ${pss}; ${formatIndexSignatures(ast.indexSignatures)} }`;
    } else {
      return `{ ${pss} }`;
    }
  } else {
    if (ast.indexSignatures.length > 0) {
      return `{ ${formatIndexSignatures(ast.indexSignatures)} }`;
    } else {
      return "{}";
    }
  }
};
var sortCandidates = /* @__PURE__ */ sort(/* @__PURE__ */ mapInput2(Order, (ast) => {
  switch (ast._tag) {
    case "AnyKeyword":
      return 0;
    case "UnknownKeyword":
      return 1;
    case "ObjectKeyword":
      return 2;
    case "StringKeyword":
    case "NumberKeyword":
    case "BooleanKeyword":
    case "BigIntKeyword":
    case "SymbolKeyword":
      return 3;
  }
  return 4;
}));
var literalMap = {
  string: "StringKeyword",
  number: "NumberKeyword",
  boolean: "BooleanKeyword",
  bigint: "BigIntKeyword"
};
var flatten3 = (candidates) => flatMap2(candidates, (ast) => isUnion(ast) ? flatten3(ast.types) : [ast]);
var unify = (candidates) => {
  const cs = sortCandidates(candidates);
  const out = [];
  const uniques = {};
  const literals = [];
  for (const ast of cs) {
    switch (ast._tag) {
      case "NeverKeyword":
        break;
      case "AnyKeyword":
        return [anyKeyword];
      case "UnknownKeyword":
        return [unknownKeyword];
      // uniques
      case "ObjectKeyword":
      case "UndefinedKeyword":
      case "VoidKeyword":
      case "StringKeyword":
      case "NumberKeyword":
      case "BooleanKeyword":
      case "BigIntKeyword":
      case "SymbolKeyword": {
        if (!uniques[ast._tag]) {
          uniques[ast._tag] = ast;
          out.push(ast);
        }
        break;
      }
      case "Literal": {
        const type = typeof ast.literal;
        switch (type) {
          case "string":
          case "number":
          case "bigint":
          case "boolean": {
            const _tag = literalMap[type];
            if (!uniques[_tag] && !literals.includes(ast.literal)) {
              literals.push(ast.literal);
              out.push(ast);
            }
            break;
          }
          // null
          case "object": {
            if (!literals.includes(ast.literal)) {
              literals.push(ast.literal);
              out.push(ast);
            }
            break;
          }
        }
        break;
      }
      case "UniqueSymbol": {
        if (!uniques["SymbolKeyword"] && !literals.includes(ast.symbol)) {
          literals.push(ast.symbol);
          out.push(ast);
        }
        break;
      }
      case "TupleType": {
        if (!uniques["ObjectKeyword"]) {
          out.push(ast);
        }
        break;
      }
      case "TypeLiteral": {
        if (ast.propertySignatures.length === 0 && ast.indexSignatures.length === 0) {
          if (!uniques["{}"]) {
            uniques["{}"] = ast;
            out.push(ast);
          }
        } else if (!uniques["ObjectKeyword"]) {
          out.push(ast);
        }
        break;
      }
      default:
        out.push(ast);
    }
  }
  return out;
};
var Union = class _Union {
  types;
  annotations;
  static make = (types, annotations2) => {
    return isMembers(types) ? new _Union(types, annotations2) : types.length === 1 ? types[0] : neverKeyword;
  };
  /** @internal */
  static unify = (candidates, annotations2) => {
    return _Union.make(unify(flatten3(candidates)), annotations2);
  };
  /**
   * @since 3.10.0
   */
  _tag = "Union";
  constructor(types, annotations2 = {}) {
    this.types = types;
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return getOrElse(getExpected(this), () => this.types.map(String).join(" | "));
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      types: this.types.map((ast) => ast.toJSON()),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var isMembers = (as11) => as11.length > 1;
var isUnion = /* @__PURE__ */ createASTGuard("Union");
var toJSONMemoMap = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Schema/AST/toJSONMemoMap"), () => /* @__PURE__ */ new WeakMap());
var Suspend = class {
  f;
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "Suspend";
  constructor(f, annotations2 = {}) {
    this.f = f;
    this.annotations = annotations2;
    this.f = memoizeThunk(f);
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return getExpected(this).pipe(orElse(() => flatMap(liftThrowable(this.f)(), (ast) => getExpected(ast))), getOrElse(() => "<suspended schema>"));
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    const ast = this.f();
    let out = toJSONMemoMap.get(ast);
    if (out) {
      return out;
    }
    toJSONMemoMap.set(ast, {
      _tag: this._tag
    });
    out = {
      _tag: this._tag,
      ast: ast.toJSON(),
      annotations: toJSONAnnotations(this.annotations)
    };
    toJSONMemoMap.set(ast, out);
    return out;
  }
};
var Refinement = class {
  from;
  filter;
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "Refinement";
  constructor(from, filter13, annotations2 = {}) {
    this.from = from;
    this.filter = filter13;
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return getIdentifierAnnotation(this).pipe(getOrElse(() => match2(getOrElseExpected(this), {
      onNone: () => `{ ${this.from} | filter }`,
      onSome: (expected) => isRefinement(this.from) ? String(this.from) + " & " + expected : expected
    })));
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      from: this.from.toJSON(),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var isRefinement = /* @__PURE__ */ createASTGuard("Refinement");
var defaultParseOption = {};
var Transformation = class {
  from;
  to;
  transformation;
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "Transformation";
  constructor(from, to, transformation, annotations2 = {}) {
    this.from = from;
    this.to = to;
    this.transformation = transformation;
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return getOrElse(getExpected(this), () => `(${String(this.from)} <-> ${String(this.to)})`);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      from: this.from.toJSON(),
      to: this.to.toJSON(),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var PropertySignatureTransformation = class {
  from;
  to;
  decode;
  encode;
  constructor(from, to, decode2, encode2) {
    this.from = from;
    this.to = to;
    this.decode = decode2;
    this.encode = encode2;
  }
};
var TypeLiteralTransformation = class {
  propertySignatureTransformations;
  /**
   * @since 3.10.0
   */
  _tag = "TypeLiteralTransformation";
  constructor(propertySignatureTransformations) {
    this.propertySignatureTransformations = propertySignatureTransformations;
    const fromKeys = {};
    const toKeys = {};
    for (const pst of propertySignatureTransformations) {
      const from = pst.from;
      if (fromKeys[from]) {
        throw new Error(getASTDuplicatePropertySignatureTransformationErrorMessage(from));
      }
      fromKeys[from] = true;
      const to = pst.to;
      if (toKeys[to]) {
        throw new Error(getASTDuplicatePropertySignatureTransformationErrorMessage(to));
      }
      toKeys[to] = true;
    }
  }
};
var annotations = (ast, overrides) => {
  const d = Object.getOwnPropertyDescriptors(ast);
  const value = {
    ...ast.annotations,
    ...overrides
  };
  const surrogate = getSurrogateAnnotation(ast);
  if (isSome2(surrogate)) {
    value[SurrogateAnnotationId] = annotations(surrogate.value, overrides);
  }
  d.annotations.value = value;
  return Object.create(Object.getPrototypeOf(ast), d);
};
var STRING_KEYWORD_PATTERN = "[\\s\\S]*";
var NUMBER_KEYWORD_PATTERN = "[+-]?\\d*\\.?\\d+(?:[Ee][+-]?\\d+)?";
var getTemplateLiteralSpanTypePattern = (type, capture2) => {
  switch (type._tag) {
    case "Literal":
      return escape(String(type.literal));
    case "StringKeyword":
      return STRING_KEYWORD_PATTERN;
    case "NumberKeyword":
      return NUMBER_KEYWORD_PATTERN;
    case "TemplateLiteral":
      return getTemplateLiteralPattern(type);
    case "Union":
      return type.types.map((type2) => getTemplateLiteralSpanTypePattern(type2)).join("|");
  }
};
var handleTemplateLiteralSpanTypeParens = (type, s, capture2, top) => {
  if (isUnion(type)) ; else {
    return s;
  }
  return `(${s})`;
};
var getTemplateLiteralPattern = (ast, capture2, top) => {
  let pattern2 = ``;
  if (ast.head !== "") {
    const head6 = escape(ast.head);
    pattern2 += head6;
  }
  for (const span4 of ast.spans) {
    const spanPattern = getTemplateLiteralSpanTypePattern(span4.type);
    pattern2 += handleTemplateLiteralSpanTypeParens(span4.type, spanPattern);
    if (span4.literal !== "") {
      const literal = escape(span4.literal);
      pattern2 += literal;
    }
  }
  return pattern2;
};
var getTemplateLiteralRegExp = (ast) => new RegExp(`^${getTemplateLiteralPattern(ast)}$`);
var record = (key, value) => {
  const propertySignatures = [];
  const indexSignatures = [];
  const go2 = (key2) => {
    switch (key2._tag) {
      case "NeverKeyword":
        break;
      case "StringKeyword":
      case "SymbolKeyword":
      case "TemplateLiteral":
      case "Refinement":
        indexSignatures.push(new IndexSignature(key2, value, true));
        break;
      case "Literal":
        if (isString(key2.literal) || isNumber(key2.literal)) {
          propertySignatures.push(new PropertySignature(key2.literal, value, false, true));
        } else {
          throw new Error(getASTUnsupportedLiteralErrorMessage(key2.literal));
        }
        break;
      case "Enums": {
        for (const [_, name] of key2.enums) {
          propertySignatures.push(new PropertySignature(name, value, false, true));
        }
        break;
      }
      case "UniqueSymbol":
        propertySignatures.push(new PropertySignature(key2.symbol, value, false, true));
        break;
      case "Union":
        key2.types.forEach(go2);
        break;
      default:
        throw new Error(getASTUnsupportedKeySchemaErrorMessage(key2));
    }
  };
  go2(key);
  return {
    propertySignatures,
    indexSignatures
  };
};
var pickAnnotations = (annotationIds) => (annotated) => {
  let out = void 0;
  for (const id2 of annotationIds) {
    if (Object.prototype.hasOwnProperty.call(annotated.annotations, id2)) {
      if (out === void 0) {
        out = {};
      }
      out[id2] = annotated.annotations[id2];
    }
  }
  return out;
};
var preserveTransformationAnnotations = /* @__PURE__ */ pickAnnotations([ExamplesAnnotationId, DefaultAnnotationId, JSONSchemaAnnotationId, ArbitraryAnnotationId, PrettyAnnotationId, EquivalenceAnnotationId]);
var typeAST = (ast) => {
  switch (ast._tag) {
    case "Declaration": {
      const typeParameters = changeMap(ast.typeParameters, typeAST);
      return typeParameters === ast.typeParameters ? ast : new Declaration(typeParameters, ast.decodeUnknown, ast.encodeUnknown, ast.annotations);
    }
    case "TupleType": {
      const elements = changeMap(ast.elements, (e) => {
        const type = typeAST(e.type);
        return type === e.type ? e : new OptionalType(type, e.isOptional);
      });
      const restASTs = getRestASTs(ast.rest);
      const rest = changeMap(restASTs, typeAST);
      return elements === ast.elements && rest === restASTs ? ast : new TupleType(elements, rest.map((type) => new Type(type)), ast.isReadonly, ast.annotations);
    }
    case "TypeLiteral": {
      const propertySignatures = changeMap(ast.propertySignatures, (p) => {
        const type = typeAST(p.type);
        return type === p.type ? p : new PropertySignature(p.name, type, p.isOptional, p.isReadonly);
      });
      const indexSignatures = changeMap(ast.indexSignatures, (is2) => {
        const type = typeAST(is2.type);
        return type === is2.type ? is2 : new IndexSignature(is2.parameter, type, is2.isReadonly);
      });
      return propertySignatures === ast.propertySignatures && indexSignatures === ast.indexSignatures ? ast : new TypeLiteral(propertySignatures, indexSignatures, ast.annotations);
    }
    case "Union": {
      const types = changeMap(ast.types, typeAST);
      return types === ast.types ? ast : Union.make(types, ast.annotations);
    }
    case "Suspend":
      return new Suspend(() => typeAST(ast.f()), ast.annotations);
    case "Refinement": {
      const from = typeAST(ast.from);
      return from === ast.from ? ast : new Refinement(from, ast.filter, ast.annotations);
    }
    case "Transformation": {
      const preserve = preserveTransformationAnnotations(ast);
      return typeAST(preserve !== void 0 ? annotations(ast.to, preserve) : ast.to);
    }
  }
  return ast;
};
var createJSONIdentifierAnnotation = (annotated) => match2(getJSONIdentifier(annotated), {
  onNone: () => void 0,
  onSome: (identifier2) => ({
    [JSONIdentifierAnnotationId]: identifier2
  })
});
function changeMap(as11, f) {
  let changed = false;
  const out = allocate(as11.length);
  for (let i = 0; i < as11.length; i++) {
    const a = as11[i];
    const fa = f(a);
    if (fa !== a) {
      changed = true;
    }
    out[i] = fa;
  }
  return changed ? out : as11;
}
var encodedAST_ = (ast, isBound) => {
  switch (ast._tag) {
    case "Declaration": {
      const typeParameters = changeMap(ast.typeParameters, (ast2) => encodedAST_(ast2));
      return typeParameters === ast.typeParameters ? ast : new Declaration(typeParameters, ast.decodeUnknown, ast.encodeUnknown, ast.annotations);
    }
    case "TupleType": {
      const elements = changeMap(ast.elements, (e) => {
        const type = encodedAST_(e.type);
        return type === e.type ? e : new OptionalType(type, e.isOptional);
      });
      const restASTs = getRestASTs(ast.rest);
      const rest = changeMap(restASTs, (ast2) => encodedAST_(ast2));
      return elements === ast.elements && rest === restASTs ? ast : new TupleType(elements, rest.map((ast2) => new Type(ast2)), ast.isReadonly, createJSONIdentifierAnnotation(ast));
    }
    case "TypeLiteral": {
      const propertySignatures = changeMap(ast.propertySignatures, (ps) => {
        const type = encodedAST_(ps.type);
        return type === ps.type ? ps : new PropertySignature(ps.name, type, ps.isOptional, ps.isReadonly);
      });
      const indexSignatures = changeMap(ast.indexSignatures, (is2) => {
        const type = encodedAST_(is2.type);
        return type === is2.type ? is2 : new IndexSignature(is2.parameter, type, is2.isReadonly);
      });
      return propertySignatures === ast.propertySignatures && indexSignatures === ast.indexSignatures ? ast : new TypeLiteral(propertySignatures, indexSignatures, createJSONIdentifierAnnotation(ast));
    }
    case "Union": {
      const types = changeMap(ast.types, (ast2) => encodedAST_(ast2));
      return types === ast.types ? ast : Union.make(types, createJSONIdentifierAnnotation(ast));
    }
    case "Suspend":
      return new Suspend(() => encodedAST_(ast.f()), createJSONIdentifierAnnotation(ast));
    case "Refinement": {
      const from = encodedAST_(ast.from);
      const identifier2 = createJSONIdentifierAnnotation(ast);
      return identifier2 ? annotations(from, identifier2) : from;
    }
    case "Transformation": {
      const identifier2 = createJSONIdentifierAnnotation(ast);
      return encodedAST_(identifier2 ? annotations(ast.from, identifier2) : ast.from);
    }
  }
  return ast;
};
var encodedAST = (ast) => encodedAST_(ast);
var toJSONAnnotations = (annotations2) => {
  const out = {};
  for (const k of Object.getOwnPropertySymbols(annotations2)) {
    out[String(k)] = annotations2[k];
  }
  return out;
};
var getEncodedParameter = (ast) => {
  switch (ast._tag) {
    case "StringKeyword":
    case "SymbolKeyword":
    case "TemplateLiteral":
      return ast;
    case "Refinement":
      return getEncodedParameter(ast.from);
  }
};
var formatKeyword = (ast) => getOrElse(getExpected(ast), () => ast._tag);
function getBrands(ast) {
  return match2(getBrandAnnotation(ast), {
    onNone: () => "",
    onSome: (brands) => brands.map((brand) => ` & Brand<${formatUnknown(brand)}>`).join("")
  });
}
var getOrElseExpected = (ast) => getTitleAnnotation(ast).pipe(orElse(() => getDescriptionAnnotation(ast)), orElse(() => getAutoTitleAnnotation(ast)), map2((s) => s + getBrands(ast)));
var getExpected = (ast) => orElse(getIdentifierAnnotation(ast), () => getOrElseExpected(ast));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Boolean.js
var not = (self) => !self;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/context.js
var TagTypeId = /* @__PURE__ */ Symbol.for("effect/Context/Tag");
var ReferenceTypeId = /* @__PURE__ */ Symbol.for("effect/Context/Reference");
var STMSymbolKey = "effect/STM";
var STMTypeId = /* @__PURE__ */ Symbol.for(STMSymbolKey);
var TagProto = {
  ...EffectPrototype,
  _op: "Tag",
  [STMTypeId]: effectVariance,
  [TagTypeId]: {
    _Service: (_) => _,
    _Identifier: (_) => _
  },
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "Tag",
      key: this.key,
      stack: this.stack
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  of(self) {
    return self;
  },
  context(self) {
    return make5(this, self);
  }
};
var ReferenceProto = {
  ...TagProto,
  [ReferenceTypeId]: ReferenceTypeId
};
var makeGenericTag = (key) => {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  const creationError = new Error();
  Error.stackTraceLimit = limit;
  const tag2 = Object.create(TagProto);
  Object.defineProperty(tag2, "stack", {
    get() {
      return creationError.stack;
    }
  });
  tag2.key = key;
  return tag2;
};
var Reference = () => (id2, options) => {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  const creationError = new Error();
  Error.stackTraceLimit = limit;
  function ReferenceClass() {
  }
  Object.setPrototypeOf(ReferenceClass, ReferenceProto);
  ReferenceClass.key = id2;
  ReferenceClass.defaultValue = options.defaultValue;
  Object.defineProperty(ReferenceClass, "stack", {
    get() {
      return creationError.stack;
    }
  });
  return ReferenceClass;
};
var TypeId4 = /* @__PURE__ */ Symbol.for("effect/Context");
var ContextProto = {
  [TypeId4]: {
    _Services: (_) => _
  },
  [symbol2](that) {
    if (isContext(that)) {
      if (this.unsafeMap.size === that.unsafeMap.size) {
        for (const k of this.unsafeMap.keys()) {
          if (!that.unsafeMap.has(k) || !equals(this.unsafeMap.get(k), that.unsafeMap.get(k))) {
            return false;
          }
        }
        return true;
      }
    }
    return false;
  },
  [symbol]() {
    return cached(this, number2(this.unsafeMap.size));
  },
  pipe() {
    return pipeArguments(this, arguments);
  },
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "Context",
      services: Array.from(this.unsafeMap).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
};
var makeContext = (unsafeMap) => {
  const context7 = Object.create(ContextProto);
  context7.unsafeMap = unsafeMap;
  return context7;
};
var serviceNotFoundError = (tag2) => {
  const error = new Error(`Service not found${tag2.key ? `: ${String(tag2.key)}` : ""}`);
  if (tag2.stack) {
    const lines = tag2.stack.split("\n");
    if (lines.length > 2) {
      const afterAt = lines[2].match(/at (.*)/);
      if (afterAt) {
        error.message = error.message + ` (defined at ${afterAt[1]})`;
      }
    }
  }
  if (error.stack) {
    const lines = error.stack.split("\n");
    lines.splice(1, 3);
    error.stack = lines.join("\n");
  }
  return error;
};
var isContext = (u) => hasProperty(u, TypeId4);
var isTag = (u) => hasProperty(u, TagTypeId);
var isReference = (u) => hasProperty(u, ReferenceTypeId);
var _empty = /* @__PURE__ */ makeContext(/* @__PURE__ */ new Map());
var empty5 = () => _empty;
var make5 = (tag2, service3) => makeContext(/* @__PURE__ */ new Map([[tag2.key, service3]]));
var add = /* @__PURE__ */ dual(3, (self, tag2, service3) => {
  const map28 = new Map(self.unsafeMap);
  map28.set(tag2.key, service3);
  return makeContext(map28);
});
var defaultValueCache = /* @__PURE__ */ globalValue("effect/Context/defaultValueCache", () => /* @__PURE__ */ new Map());
var getDefaultValue = (tag2) => {
  if (defaultValueCache.has(tag2.key)) {
    return defaultValueCache.get(tag2.key);
  }
  const value = tag2.defaultValue();
  defaultValueCache.set(tag2.key, value);
  return value;
};
var unsafeGetReference = (self, tag2) => {
  return self.unsafeMap.has(tag2.key) ? self.unsafeMap.get(tag2.key) : getDefaultValue(tag2);
};
var unsafeGet2 = /* @__PURE__ */ dual(2, (self, tag2) => {
  if (!self.unsafeMap.has(tag2.key)) {
    if (ReferenceTypeId in tag2) return getDefaultValue(tag2);
    throw serviceNotFoundError(tag2);
  }
  return self.unsafeMap.get(tag2.key);
});
var get3 = unsafeGet2;
var getOption = /* @__PURE__ */ dual(2, (self, tag2) => {
  if (!self.unsafeMap.has(tag2.key)) {
    return isReference(tag2) ? some(getDefaultValue(tag2)) : none;
  }
  return some(self.unsafeMap.get(tag2.key));
});
var merge2 = /* @__PURE__ */ dual(2, (self, that) => {
  const map28 = new Map(self.unsafeMap);
  for (const [tag2, s] of that.unsafeMap) {
    map28.set(tag2, s);
  }
  return makeContext(map28);
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Context.js
var GenericTag = makeGenericTag;
var isContext2 = isContext;
var isTag2 = isTag;
var empty6 = empty5;
var make6 = make5;
var add2 = add;
var get4 = get3;
var unsafeGet3 = unsafeGet2;
var getOption2 = getOption;
var merge3 = merge2;
var Reference2 = Reference;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Chunk.js
var TypeId5 = /* @__PURE__ */ Symbol.for("effect/Chunk");
function copy2(src, srcPos, dest, destPos, len) {
  for (let i = srcPos; i < Math.min(src.length, srcPos + len); i++) {
    dest[destPos + i - srcPos] = src[i];
  }
  return dest;
}
var emptyArray = [];
var getEquivalence4 = (isEquivalent) => make((self, that) => self.length === that.length && toReadonlyArray(self).every((value, i) => isEquivalent(value, unsafeGet4(that, i))));
var _equivalence3 = /* @__PURE__ */ getEquivalence4(equals);
var ChunkProto = {
  [TypeId5]: {
    _A: (_) => _
  },
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "Chunk",
      values: toReadonlyArray(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  [symbol2](that) {
    return isChunk(that) && _equivalence3(this, that);
  },
  [symbol]() {
    return cached(this, array2(toReadonlyArray(this)));
  },
  [Symbol.iterator]() {
    switch (this.backing._tag) {
      case "IArray": {
        return this.backing.array[Symbol.iterator]();
      }
      case "IEmpty": {
        return emptyArray[Symbol.iterator]();
      }
      default: {
        return toReadonlyArray(this)[Symbol.iterator]();
      }
    }
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var makeChunk = (backing) => {
  const chunk3 = Object.create(ChunkProto);
  chunk3.backing = backing;
  switch (backing._tag) {
    case "IEmpty": {
      chunk3.length = 0;
      chunk3.depth = 0;
      chunk3.left = chunk3;
      chunk3.right = chunk3;
      break;
    }
    case "IConcat": {
      chunk3.length = backing.left.length + backing.right.length;
      chunk3.depth = 1 + Math.max(backing.left.depth, backing.right.depth);
      chunk3.left = backing.left;
      chunk3.right = backing.right;
      break;
    }
    case "IArray": {
      chunk3.length = backing.array.length;
      chunk3.depth = 0;
      chunk3.left = _empty2;
      chunk3.right = _empty2;
      break;
    }
    case "ISingleton": {
      chunk3.length = 1;
      chunk3.depth = 0;
      chunk3.left = _empty2;
      chunk3.right = _empty2;
      break;
    }
    case "ISlice": {
      chunk3.length = backing.length;
      chunk3.depth = backing.chunk.depth + 1;
      chunk3.left = _empty2;
      chunk3.right = _empty2;
      break;
    }
  }
  return chunk3;
};
var isChunk = (u) => hasProperty(u, TypeId5);
var _empty2 = /* @__PURE__ */ makeChunk({
  _tag: "IEmpty"
});
var empty7 = () => _empty2;
var make7 = (...as11) => unsafeFromNonEmptyArray(as11);
var of2 = (a) => makeChunk({
  _tag: "ISingleton",
  a
});
var fromIterable3 = (self) => isChunk(self) ? self : unsafeFromArray(fromIterable2(self));
var copyToArray = (self, array4, initial) => {
  switch (self.backing._tag) {
    case "IArray": {
      copy2(self.backing.array, 0, array4, initial, self.length);
      break;
    }
    case "IConcat": {
      copyToArray(self.left, array4, initial);
      copyToArray(self.right, array4, initial + self.left.length);
      break;
    }
    case "ISingleton": {
      array4[initial] = self.backing.a;
      break;
    }
    case "ISlice": {
      let i = 0;
      let j = initial;
      while (i < self.length) {
        array4[j] = unsafeGet4(self, i);
        i += 1;
        j += 1;
      }
      break;
    }
  }
};
var toReadonlyArray_ = (self) => {
  switch (self.backing._tag) {
    case "IEmpty": {
      return emptyArray;
    }
    case "IArray": {
      return self.backing.array;
    }
    default: {
      const arr = new Array(self.length);
      copyToArray(self, arr, 0);
      self.backing = {
        _tag: "IArray",
        array: arr
      };
      self.left = _empty2;
      self.right = _empty2;
      self.depth = 0;
      return arr;
    }
  }
};
var toReadonlyArray = toReadonlyArray_;
var reverseChunk = (self) => {
  switch (self.backing._tag) {
    case "IEmpty":
    case "ISingleton":
      return self;
    case "IArray": {
      return makeChunk({
        _tag: "IArray",
        array: reverse(self.backing.array)
      });
    }
    case "IConcat": {
      return makeChunk({
        _tag: "IConcat",
        left: reverse2(self.backing.right),
        right: reverse2(self.backing.left)
      });
    }
    case "ISlice":
      return unsafeFromArray(reverse(toReadonlyArray(self)));
  }
};
var reverse2 = reverseChunk;
var get5 = /* @__PURE__ */ dual(2, (self, index) => index < 0 || index >= self.length ? none2() : some2(unsafeGet4(self, index)));
var unsafeFromArray = (self) => self.length === 0 ? empty7() : self.length === 1 ? of2(self[0]) : makeChunk({
  _tag: "IArray",
  array: self
});
var unsafeFromNonEmptyArray = (self) => unsafeFromArray(self);
var unsafeGet4 = /* @__PURE__ */ dual(2, (self, index) => {
  switch (self.backing._tag) {
    case "IEmpty": {
      throw new Error(`Index out of bounds`);
    }
    case "ISingleton": {
      if (index !== 0) {
        throw new Error(`Index out of bounds`);
      }
      return self.backing.a;
    }
    case "IArray": {
      if (index >= self.length || index < 0) {
        throw new Error(`Index out of bounds`);
      }
      return self.backing.array[index];
    }
    case "IConcat": {
      return index < self.left.length ? unsafeGet4(self.left, index) : unsafeGet4(self.right, index - self.left.length);
    }
    case "ISlice": {
      return unsafeGet4(self.backing.chunk, index + self.backing.offset);
    }
  }
});
var append2 = /* @__PURE__ */ dual(2, (self, a) => appendAll2(self, of2(a)));
var prepend2 = /* @__PURE__ */ dual(2, (self, elem) => appendAll2(of2(elem), self));
var take2 = /* @__PURE__ */ dual(2, (self, n) => {
  if (n <= 0) {
    return _empty2;
  } else if (n >= self.length) {
    return self;
  } else {
    switch (self.backing._tag) {
      case "ISlice": {
        return makeChunk({
          _tag: "ISlice",
          chunk: self.backing.chunk,
          length: n,
          offset: self.backing.offset
        });
      }
      case "IConcat": {
        if (n > self.left.length) {
          return makeChunk({
            _tag: "IConcat",
            left: self.left,
            right: take2(self.right, n - self.left.length)
          });
        }
        return take2(self.left, n);
      }
      default: {
        return makeChunk({
          _tag: "ISlice",
          chunk: self,
          offset: 0,
          length: n
        });
      }
    }
  }
});
var drop2 = /* @__PURE__ */ dual(2, (self, n) => {
  if (n <= 0) {
    return self;
  } else if (n >= self.length) {
    return _empty2;
  } else {
    switch (self.backing._tag) {
      case "ISlice": {
        return makeChunk({
          _tag: "ISlice",
          chunk: self.backing.chunk,
          offset: self.backing.offset + n,
          length: self.backing.length - n
        });
      }
      case "IConcat": {
        if (n > self.left.length) {
          return drop2(self.right, n - self.left.length);
        }
        return makeChunk({
          _tag: "IConcat",
          left: drop2(self.left, n),
          right: self.right
        });
      }
      default: {
        return makeChunk({
          _tag: "ISlice",
          chunk: self,
          offset: n,
          length: self.length - n
        });
      }
    }
  }
});
var dropWhile2 = /* @__PURE__ */ dual(2, (self, predicate) => {
  const arr = toReadonlyArray(self);
  const len = arr.length;
  let i = 0;
  while (i < len && predicate(arr[i])) {
    i++;
  }
  return drop2(self, i);
});
var appendAll2 = /* @__PURE__ */ dual(2, (self, that) => {
  if (self.backing._tag === "IEmpty") {
    return that;
  }
  if (that.backing._tag === "IEmpty") {
    return self;
  }
  const diff8 = that.depth - self.depth;
  if (Math.abs(diff8) <= 1) {
    return makeChunk({
      _tag: "IConcat",
      left: self,
      right: that
    });
  } else if (diff8 < -1) {
    if (self.left.depth >= self.right.depth) {
      const nr = appendAll2(self.right, that);
      return makeChunk({
        _tag: "IConcat",
        left: self.left,
        right: nr
      });
    } else {
      const nrr = appendAll2(self.right.right, that);
      if (nrr.depth === self.depth - 3) {
        const nr = makeChunk({
          _tag: "IConcat",
          left: self.right.left,
          right: nrr
        });
        return makeChunk({
          _tag: "IConcat",
          left: self.left,
          right: nr
        });
      } else {
        const nl = makeChunk({
          _tag: "IConcat",
          left: self.left,
          right: self.right.left
        });
        return makeChunk({
          _tag: "IConcat",
          left: nl,
          right: nrr
        });
      }
    }
  } else {
    if (that.right.depth >= that.left.depth) {
      const nl = appendAll2(self, that.left);
      return makeChunk({
        _tag: "IConcat",
        left: nl,
        right: that.right
      });
    } else {
      const nll = appendAll2(self, that.left.left);
      if (nll.depth === that.depth - 3) {
        const nl = makeChunk({
          _tag: "IConcat",
          left: nll,
          right: that.left.right
        });
        return makeChunk({
          _tag: "IConcat",
          left: nl,
          right: that.right
        });
      } else {
        const nr = makeChunk({
          _tag: "IConcat",
          left: that.left.right,
          right: that.right
        });
        return makeChunk({
          _tag: "IConcat",
          left: nll,
          right: nr
        });
      }
    }
  }
});
var filterMap4 = /* @__PURE__ */ dual(2, (self, f) => unsafeFromArray(filterMap3(self, f)));
var filter4 = /* @__PURE__ */ dual(2, (self, predicate) => unsafeFromArray(filter3(self, predicate)));
var filterMapWhile2 = /* @__PURE__ */ dual(2, (self, f) => unsafeFromArray(filterMapWhile(self, f)));
var flatMap3 = /* @__PURE__ */ dual(2, (self, f) => {
  if (self.backing._tag === "ISingleton") {
    return f(self.backing.a, 0);
  }
  let out = _empty2;
  let i = 0;
  for (const k of self) {
    out = appendAll2(out, f(k, i++));
  }
  return out;
});
var flatten4 = /* @__PURE__ */ flatMap3(identity);
var isEmpty = (self) => self.length === 0;
var isNonEmpty2 = (self) => self.length > 0;
var head2 = /* @__PURE__ */ get5(0);
var unsafeHead = (self) => unsafeGet4(self, 0);
var headNonEmpty2 = unsafeHead;
var last2 = (self) => get5(self, self.length - 1);
var unsafeLast = (self) => unsafeGet4(self, self.length - 1);
var map5 = /* @__PURE__ */ dual(2, (self, f) => self.backing._tag === "ISingleton" ? of2(f(self.backing.a, 0)) : unsafeFromArray(pipe(toReadonlyArray(self), map4((a, i) => f(a, i)))));
var mapAccum2 = /* @__PURE__ */ dual(3, (self, s, f) => {
  const [s1, as11] = mapAccum(self, s, f);
  return [s1, unsafeFromArray(as11)];
});
var splitAt2 = /* @__PURE__ */ dual(2, (self, n) => [take2(self, n), drop2(self, n)]);
var splitWhere2 = /* @__PURE__ */ dual(2, (self, predicate) => {
  let i = 0;
  for (const a of toReadonlyArray(self)) {
    if (predicate(a)) {
      break;
    } else {
      i++;
    }
  }
  return splitAt2(self, i);
});
var tailNonEmpty2 = (self) => drop2(self, 1);
var takeRight2 = /* @__PURE__ */ dual(2, (self, n) => drop2(self, self.length - n));
var takeWhile2 = /* @__PURE__ */ dual(2, (self, predicate) => {
  const out = [];
  for (const a of toReadonlyArray(self)) {
    if (predicate(a)) {
      out.push(a);
    } else {
      break;
    }
  }
  return unsafeFromArray(out);
});
var zipWith3 = /* @__PURE__ */ dual(3, (self, that, f) => unsafeFromArray(zipWith2(self, that, f)));
var makeBy2 = /* @__PURE__ */ dual(2, (n, f) => fromIterable3(makeBy(n, f)));
var range2 = (start3, end6) => start3 <= end6 ? makeBy2(end6 - start3 + 1, (i) => start3 + i) : of2(start3);
var findFirst4 = findFirst3;
var reduce3 = reduce2;
var reduceRight2 = reduceRight;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Duration.js
var TypeId6 = /* @__PURE__ */ Symbol.for("effect/Duration");
var bigint0 = /* @__PURE__ */ BigInt(0);
var bigint24 = /* @__PURE__ */ BigInt(24);
var bigint60 = /* @__PURE__ */ BigInt(60);
var bigint1e3 = /* @__PURE__ */ BigInt(1e3);
var bigint1e6 = /* @__PURE__ */ BigInt(1e6);
var bigint1e9 = /* @__PURE__ */ BigInt(1e9);
var DURATION_REGEX = /^(-?\d+(?:\.\d+)?)\s+(nanos?|micros?|millis?|seconds?|minutes?|hours?|days?|weeks?)$/;
var decode = (input) => {
  if (isDuration(input)) {
    return input;
  } else if (isNumber(input)) {
    return millis(input);
  } else if (isBigInt(input)) {
    return nanos(input);
  } else if (Array.isArray(input) && input.length === 2 && input.every(isNumber)) {
    if (input[0] === -Infinity || input[1] === -Infinity || Number.isNaN(input[0]) || Number.isNaN(input[1])) {
      return zero;
    }
    if (input[0] === Infinity || input[1] === Infinity) {
      return infinity;
    }
    return nanos(BigInt(Math.round(input[0] * 1e9)) + BigInt(Math.round(input[1])));
  } else if (isString(input)) {
    const match18 = DURATION_REGEX.exec(input);
    if (match18) {
      const [_, valueStr, unit] = match18;
      const value = Number(valueStr);
      switch (unit) {
        case "nano":
        case "nanos":
          return nanos(BigInt(valueStr));
        case "micro":
        case "micros":
          return micros(BigInt(valueStr));
        case "milli":
        case "millis":
          return millis(value);
        case "second":
        case "seconds":
          return seconds(value);
        case "minute":
        case "minutes":
          return minutes(value);
        case "hour":
        case "hours":
          return hours(value);
        case "day":
        case "days":
          return days(value);
        case "week":
        case "weeks":
          return weeks(value);
      }
    }
  }
  throw new Error("Invalid DurationInput");
};
var zeroValue = {
  _tag: "Millis",
  millis: 0
};
var infinityValue = {
  _tag: "Infinity"
};
var DurationProto = {
  [TypeId6]: TypeId6,
  [symbol]() {
    return cached(this, structure(this.value));
  },
  [symbol2](that) {
    return isDuration(that) && equals2(this, that);
  },
  toString() {
    return `Duration(${format2(this)})`;
  },
  toJSON() {
    switch (this.value._tag) {
      case "Millis":
        return {
          _id: "Duration",
          _tag: "Millis",
          millis: this.value.millis
        };
      case "Nanos":
        return {
          _id: "Duration",
          _tag: "Nanos",
          hrtime: toHrTime(this)
        };
      case "Infinity":
        return {
          _id: "Duration",
          _tag: "Infinity"
        };
    }
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var make8 = (input) => {
  const duration2 = Object.create(DurationProto);
  if (isNumber(input)) {
    if (isNaN(input) || input <= 0) {
      duration2.value = zeroValue;
    } else if (!Number.isFinite(input)) {
      duration2.value = infinityValue;
    } else if (!Number.isInteger(input)) {
      duration2.value = {
        _tag: "Nanos",
        nanos: BigInt(Math.round(input * 1e6))
      };
    } else {
      duration2.value = {
        _tag: "Millis",
        millis: input
      };
    }
  } else if (input <= bigint0) {
    duration2.value = zeroValue;
  } else {
    duration2.value = {
      _tag: "Nanos",
      nanos: input
    };
  }
  return duration2;
};
var isDuration = (u) => hasProperty(u, TypeId6);
var isZero = (self) => {
  switch (self.value._tag) {
    case "Millis": {
      return self.value.millis === 0;
    }
    case "Nanos": {
      return self.value.nanos === bigint0;
    }
    case "Infinity": {
      return false;
    }
  }
};
var zero = /* @__PURE__ */ make8(0);
var infinity = /* @__PURE__ */ make8(Infinity);
var nanos = (nanos2) => make8(nanos2);
var micros = (micros2) => make8(micros2 * bigint1e3);
var millis = (millis2) => make8(millis2);
var seconds = (seconds2) => make8(seconds2 * 1e3);
var minutes = (minutes2) => make8(minutes2 * 6e4);
var hours = (hours2) => make8(hours2 * 36e5);
var days = (days2) => make8(days2 * 864e5);
var weeks = (weeks2) => make8(weeks2 * 6048e5);
var toMillis = (self) => match4(self, {
  onMillis: (millis2) => millis2,
  onNanos: (nanos2) => Number(nanos2) / 1e6
});
var unsafeToNanos = (self) => {
  const _self = decode(self);
  switch (_self.value._tag) {
    case "Infinity":
      throw new Error("Cannot convert infinite duration to nanos");
    case "Nanos":
      return _self.value.nanos;
    case "Millis":
      return BigInt(Math.round(_self.value.millis * 1e6));
  }
};
var toHrTime = (self) => {
  const _self = decode(self);
  switch (_self.value._tag) {
    case "Infinity":
      return [Infinity, 0];
    case "Nanos":
      return [Number(_self.value.nanos / bigint1e9), Number(_self.value.nanos % bigint1e9)];
    case "Millis":
      return [Math.floor(_self.value.millis / 1e3), Math.round(_self.value.millis % 1e3 * 1e6)];
  }
};
var match4 = /* @__PURE__ */ dual(2, (self, options) => {
  const _self = decode(self);
  switch (_self.value._tag) {
    case "Nanos":
      return options.onNanos(_self.value.nanos);
    case "Infinity":
      return options.onMillis(Infinity);
    case "Millis":
      return options.onMillis(_self.value.millis);
  }
});
var matchWith = /* @__PURE__ */ dual(3, (self, that, options) => {
  const _self = decode(self);
  const _that = decode(that);
  if (_self.value._tag === "Infinity" || _that.value._tag === "Infinity") {
    return options.onMillis(toMillis(_self), toMillis(_that));
  } else if (_self.value._tag === "Nanos" || _that.value._tag === "Nanos") {
    const selfNanos = _self.value._tag === "Nanos" ? _self.value.nanos : BigInt(Math.round(_self.value.millis * 1e6));
    const thatNanos = _that.value._tag === "Nanos" ? _that.value.nanos : BigInt(Math.round(_that.value.millis * 1e6));
    return options.onNanos(selfNanos, thatNanos);
  }
  return options.onMillis(_self.value.millis, _that.value.millis);
});
var Equivalence = (self, that) => matchWith(self, that, {
  onMillis: (self2, that2) => self2 === that2,
  onNanos: (self2, that2) => self2 === that2
});
var sum = /* @__PURE__ */ dual(2, (self, that) => matchWith(self, that, {
  onMillis: (self2, that2) => make8(self2 + that2),
  onNanos: (self2, that2) => make8(self2 + that2)
}));
var lessThanOrEqualTo2 = /* @__PURE__ */ dual(2, (self, that) => matchWith(self, that, {
  onMillis: (self2, that2) => self2 <= that2,
  onNanos: (self2, that2) => self2 <= that2
}));
var greaterThan2 = /* @__PURE__ */ dual(2, (self, that) => matchWith(self, that, {
  onMillis: (self2, that2) => self2 > that2,
  onNanos: (self2, that2) => self2 > that2
}));
var greaterThanOrEqualTo2 = /* @__PURE__ */ dual(2, (self, that) => matchWith(self, that, {
  onMillis: (self2, that2) => self2 >= that2,
  onNanos: (self2, that2) => self2 >= that2
}));
var equals2 = /* @__PURE__ */ dual(2, (self, that) => Equivalence(decode(self), decode(that)));
var parts = (self) => {
  const duration2 = decode(self);
  if (duration2.value._tag === "Infinity") {
    return {
      days: Infinity,
      hours: Infinity,
      minutes: Infinity,
      seconds: Infinity,
      millis: Infinity,
      nanos: Infinity
    };
  }
  const nanos2 = unsafeToNanos(duration2);
  const ms = nanos2 / bigint1e6;
  const sec = ms / bigint1e3;
  const min4 = sec / bigint60;
  const hr = min4 / bigint60;
  const days2 = hr / bigint24;
  return {
    days: Number(days2),
    hours: Number(hr % bigint24),
    minutes: Number(min4 % bigint60),
    seconds: Number(sec % bigint60),
    millis: Number(ms % bigint1e3),
    nanos: Number(nanos2 % bigint1e6)
  };
};
var format2 = (self) => {
  const duration2 = decode(self);
  if (duration2.value._tag === "Infinity") {
    return "Infinity";
  }
  if (isZero(duration2)) {
    return "0";
  }
  const fragments = parts(duration2);
  const pieces = [];
  if (fragments.days !== 0) {
    pieces.push(`${fragments.days}d`);
  }
  if (fragments.hours !== 0) {
    pieces.push(`${fragments.hours}h`);
  }
  if (fragments.minutes !== 0) {
    pieces.push(`${fragments.minutes}m`);
  }
  if (fragments.seconds !== 0) {
    pieces.push(`${fragments.seconds}s`);
  }
  if (fragments.millis !== 0) {
    pieces.push(`${fragments.millis}ms`);
  }
  if (fragments.nanos !== 0) {
    pieces.push(`${fragments.nanos}ns`);
  }
  return pieces.join(" ");
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/hashMap/config.js
var SIZE = 5;
var BUCKET_SIZE = /* @__PURE__ */ Math.pow(2, SIZE);
var MASK = BUCKET_SIZE - 1;
var MAX_INDEX_NODE = BUCKET_SIZE / 2;
var MIN_ARRAY_NODE = BUCKET_SIZE / 4;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/hashMap/bitwise.js
function popcount(x) {
  x -= x >> 1 & 1431655765;
  x = (x & 858993459) + (x >> 2 & 858993459);
  x = x + (x >> 4) & 252645135;
  x += x >> 8;
  x += x >> 16;
  return x & 127;
}
function hashFragment(shift2, h) {
  return h >>> shift2 & MASK;
}
function toBitmap(x) {
  return 1 << x;
}
function fromBitmap(bitmap, bit) {
  return popcount(bitmap & bit - 1);
}

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stack.js
var make9 = (value, previous2) => ({
  value,
  previous: previous2
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/hashMap/array.js
function arrayUpdate(mutate4, at, v, arr) {
  let out = arr;
  if (!mutate4) {
    const len = arr.length;
    out = new Array(len);
    for (let i = 0; i < len; ++i) out[i] = arr[i];
  }
  out[at] = v;
  return out;
}
function arraySpliceOut(mutate4, at, arr) {
  const newLen = arr.length - 1;
  let i = 0;
  let g = 0;
  let out = arr;
  if (mutate4) {
    i = g = at;
  } else {
    out = new Array(newLen);
    while (i < at) out[g++] = arr[i++];
  }
  ++i;
  while (i <= newLen) out[g++] = arr[i++];
  if (mutate4) {
    out.length = newLen;
  }
  return out;
}
function arraySpliceIn(mutate4, at, v, arr) {
  const len = arr.length;
  if (mutate4) {
    let i2 = len;
    while (i2 >= at) arr[i2--] = arr[i2];
    arr[at] = v;
    return arr;
  }
  let i = 0, g = 0;
  const out = new Array(len + 1);
  while (i < at) out[g++] = arr[i++];
  out[at] = v;
  while (i < len) out[++g] = arr[i++];
  return out;
}

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/hashMap/node.js
var EmptyNode = class _EmptyNode {
  _tag = "EmptyNode";
  modify(edit, _shift, f, hash2, key, size17) {
    const v = f(none2());
    if (isNone2(v)) return new _EmptyNode();
    ++size17.value;
    return new LeafNode(edit, hash2, key, v);
  }
};
function isEmptyNode(a) {
  return isTagged(a, "EmptyNode");
}
function isLeafNode(node) {
  return isEmptyNode(node) || node._tag === "LeafNode" || node._tag === "CollisionNode";
}
function canEditNode(node, edit) {
  return isEmptyNode(node) ? false : edit === node.edit;
}
var LeafNode = class _LeafNode {
  edit;
  hash;
  key;
  value;
  _tag = "LeafNode";
  constructor(edit, hash2, key, value) {
    this.edit = edit;
    this.hash = hash2;
    this.key = key;
    this.value = value;
  }
  modify(edit, shift2, f, hash2, key, size17) {
    if (equals(key, this.key)) {
      const v2 = f(this.value);
      if (v2 === this.value) return this;
      else if (isNone2(v2)) {
        --size17.value;
        return new EmptyNode();
      }
      if (canEditNode(this, edit)) {
        this.value = v2;
        return this;
      }
      return new _LeafNode(edit, hash2, key, v2);
    }
    const v = f(none2());
    if (isNone2(v)) return this;
    ++size17.value;
    return mergeLeaves(edit, shift2, this.hash, this, hash2, new _LeafNode(edit, hash2, key, v));
  }
};
var CollisionNode = class _CollisionNode {
  edit;
  hash;
  children;
  _tag = "CollisionNode";
  constructor(edit, hash2, children3) {
    this.edit = edit;
    this.hash = hash2;
    this.children = children3;
  }
  modify(edit, shift2, f, hash2, key, size17) {
    if (hash2 === this.hash) {
      const canEdit = canEditNode(this, edit);
      const list = this.updateCollisionList(canEdit, edit, this.hash, this.children, f, key, size17);
      if (list === this.children) return this;
      return list.length > 1 ? new _CollisionNode(edit, this.hash, list) : list[0];
    }
    const v = f(none2());
    if (isNone2(v)) return this;
    ++size17.value;
    return mergeLeaves(edit, shift2, this.hash, this, hash2, new LeafNode(edit, hash2, key, v));
  }
  updateCollisionList(mutate4, edit, hash2, list, f, key, size17) {
    const len = list.length;
    for (let i = 0; i < len; ++i) {
      const child = list[i];
      if ("key" in child && equals(key, child.key)) {
        const value = child.value;
        const newValue2 = f(value);
        if (newValue2 === value) return list;
        if (isNone2(newValue2)) {
          --size17.value;
          return arraySpliceOut(mutate4, i, list);
        }
        return arrayUpdate(mutate4, i, new LeafNode(edit, hash2, key, newValue2), list);
      }
    }
    const newValue = f(none2());
    if (isNone2(newValue)) return list;
    ++size17.value;
    return arrayUpdate(mutate4, len, new LeafNode(edit, hash2, key, newValue), list);
  }
};
var IndexedNode = class _IndexedNode {
  edit;
  mask;
  children;
  _tag = "IndexedNode";
  constructor(edit, mask, children3) {
    this.edit = edit;
    this.mask = mask;
    this.children = children3;
  }
  modify(edit, shift2, f, hash2, key, size17) {
    const mask = this.mask;
    const children3 = this.children;
    const frag = hashFragment(shift2, hash2);
    const bit = toBitmap(frag);
    const indx = fromBitmap(mask, bit);
    const exists4 = mask & bit;
    const canEdit = canEditNode(this, edit);
    if (!exists4) {
      const _newChild = new EmptyNode().modify(edit, shift2 + SIZE, f, hash2, key, size17);
      if (!_newChild) return this;
      return children3.length >= MAX_INDEX_NODE ? expand(edit, frag, _newChild, mask, children3) : new _IndexedNode(edit, mask | bit, arraySpliceIn(canEdit, indx, _newChild, children3));
    }
    const current2 = children3[indx];
    const child = current2.modify(edit, shift2 + SIZE, f, hash2, key, size17);
    if (current2 === child) return this;
    let bitmap = mask;
    let newChildren;
    if (isEmptyNode(child)) {
      bitmap &= ~bit;
      if (!bitmap) return new EmptyNode();
      if (children3.length <= 2 && isLeafNode(children3[indx ^ 1])) {
        return children3[indx ^ 1];
      }
      newChildren = arraySpliceOut(canEdit, indx, children3);
    } else {
      newChildren = arrayUpdate(canEdit, indx, child, children3);
    }
    if (canEdit) {
      this.mask = bitmap;
      this.children = newChildren;
      return this;
    }
    return new _IndexedNode(edit, bitmap, newChildren);
  }
};
var ArrayNode = class _ArrayNode {
  edit;
  size;
  children;
  _tag = "ArrayNode";
  constructor(edit, size17, children3) {
    this.edit = edit;
    this.size = size17;
    this.children = children3;
  }
  modify(edit, shift2, f, hash2, key, size17) {
    let count3 = this.size;
    const children3 = this.children;
    const frag = hashFragment(shift2, hash2);
    const child = children3[frag];
    const newChild = (child || new EmptyNode()).modify(edit, shift2 + SIZE, f, hash2, key, size17);
    if (child === newChild) return this;
    const canEdit = canEditNode(this, edit);
    let newChildren;
    if (isEmptyNode(child) && !isEmptyNode(newChild)) {
      ++count3;
      newChildren = arrayUpdate(canEdit, frag, newChild, children3);
    } else if (!isEmptyNode(child) && isEmptyNode(newChild)) {
      --count3;
      if (count3 <= MIN_ARRAY_NODE) {
        return pack(edit, count3, frag, children3);
      }
      newChildren = arrayUpdate(canEdit, frag, new EmptyNode(), children3);
    } else {
      newChildren = arrayUpdate(canEdit, frag, newChild, children3);
    }
    if (canEdit) {
      this.size = count3;
      this.children = newChildren;
      return this;
    }
    return new _ArrayNode(edit, count3, newChildren);
  }
};
function pack(edit, count3, removed, elements) {
  const children3 = new Array(count3 - 1);
  let g = 0;
  let bitmap = 0;
  for (let i = 0, len = elements.length; i < len; ++i) {
    if (i !== removed) {
      const elem = elements[i];
      if (elem && !isEmptyNode(elem)) {
        children3[g++] = elem;
        bitmap |= 1 << i;
      }
    }
  }
  return new IndexedNode(edit, bitmap, children3);
}
function expand(edit, frag, child, bitmap, subNodes) {
  const arr = [];
  let bit = bitmap;
  let count3 = 0;
  for (let i = 0; bit; ++i) {
    if (bit & 1) arr[i] = subNodes[count3++];
    bit >>>= 1;
  }
  arr[frag] = child;
  return new ArrayNode(edit, count3 + 1, arr);
}
function mergeLeavesInner(edit, shift2, h1, n1, h2, n2) {
  if (h1 === h2) return new CollisionNode(edit, h1, [n2, n1]);
  const subH1 = hashFragment(shift2, h1);
  const subH2 = hashFragment(shift2, h2);
  if (subH1 === subH2) {
    return (child) => new IndexedNode(edit, toBitmap(subH1) | toBitmap(subH2), [child]);
  } else {
    const children3 = subH1 < subH2 ? [n1, n2] : [n2, n1];
    return new IndexedNode(edit, toBitmap(subH1) | toBitmap(subH2), children3);
  }
}
function mergeLeaves(edit, shift2, h1, n1, h2, n2) {
  let stack = void 0;
  let currentShift = shift2;
  while (true) {
    const res = mergeLeavesInner(edit, currentShift, h1, n1, h2, n2);
    if (typeof res === "function") {
      stack = make9(res, stack);
      currentShift = currentShift + SIZE;
    } else {
      let final = res;
      while (stack != null) {
        final = stack.value(final);
        stack = stack.previous;
      }
      return final;
    }
  }
}

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/hashMap.js
var HashMapSymbolKey = "effect/HashMap";
var HashMapTypeId = /* @__PURE__ */ Symbol.for(HashMapSymbolKey);
var HashMapProto = {
  [HashMapTypeId]: HashMapTypeId,
  [Symbol.iterator]() {
    return new HashMapIterator(this, (k, v) => [k, v]);
  },
  [symbol]() {
    let hash2 = hash(HashMapSymbolKey);
    for (const item of this) {
      hash2 ^= pipe(hash(item[0]), combine(hash(item[1])));
    }
    return cached(this, hash2);
  },
  [symbol2](that) {
    if (isHashMap(that)) {
      if (that._size !== this._size) {
        return false;
      }
      for (const item of this) {
        const elem = pipe(that, getHash(item[0], hash(item[0])));
        if (isNone2(elem)) {
          return false;
        } else {
          if (!equals(item[1], elem.value)) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  },
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "HashMap",
      values: Array.from(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var makeImpl = (editable, edit, root, size17) => {
  const map28 = Object.create(HashMapProto);
  map28._editable = editable;
  map28._edit = edit;
  map28._root = root;
  map28._size = size17;
  return map28;
};
var HashMapIterator = class _HashMapIterator {
  map;
  f;
  v;
  constructor(map28, f) {
    this.map = map28;
    this.f = f;
    this.v = visitLazy(this.map._root, this.f, void 0);
  }
  next() {
    if (isNone2(this.v)) {
      return {
        done: true,
        value: void 0
      };
    }
    const v0 = this.v.value;
    this.v = applyCont(v0.cont);
    return {
      done: false,
      value: v0.value
    };
  }
  [Symbol.iterator]() {
    return new _HashMapIterator(this.map, this.f);
  }
};
var applyCont = (cont) => cont ? visitLazyChildren(cont[0], cont[1], cont[2], cont[3], cont[4]) : none2();
var visitLazy = (node, f, cont = void 0) => {
  switch (node._tag) {
    case "LeafNode": {
      if (isSome2(node.value)) {
        return some2({
          value: f(node.key, node.value.value),
          cont
        });
      }
      return applyCont(cont);
    }
    case "CollisionNode":
    case "ArrayNode":
    case "IndexedNode": {
      const children3 = node.children;
      return visitLazyChildren(children3.length, children3, 0, f, cont);
    }
    default: {
      return applyCont(cont);
    }
  }
};
var visitLazyChildren = (len, children3, i, f, cont) => {
  while (i < len) {
    const child = children3[i++];
    if (child && !isEmptyNode(child)) {
      return visitLazy(child, f, [len, children3, i, f, cont]);
    }
  }
  return applyCont(cont);
};
var _empty3 = /* @__PURE__ */ makeImpl(false, 0, /* @__PURE__ */ new EmptyNode(), 0);
var empty8 = () => _empty3;
var fromIterable4 = (entries2) => {
  const map28 = beginMutation(empty8());
  for (const entry of entries2) {
    set2(map28, entry[0], entry[1]);
  }
  return endMutation(map28);
};
var isHashMap = (u) => hasProperty(u, HashMapTypeId);
var isEmpty2 = (self) => self && isEmptyNode(self._root);
var get6 = /* @__PURE__ */ dual(2, (self, key) => getHash(self, key, hash(key)));
var getHash = /* @__PURE__ */ dual(3, (self, key, hash2) => {
  let node = self._root;
  let shift2 = 0;
  while (true) {
    switch (node._tag) {
      case "LeafNode": {
        return equals(key, node.key) ? node.value : none2();
      }
      case "CollisionNode": {
        if (hash2 === node.hash) {
          const children3 = node.children;
          for (let i = 0, len = children3.length; i < len; ++i) {
            const child = children3[i];
            if ("key" in child && equals(key, child.key)) {
              return child.value;
            }
          }
        }
        return none2();
      }
      case "IndexedNode": {
        const frag = hashFragment(shift2, hash2);
        const bit = toBitmap(frag);
        if (node.mask & bit) {
          node = node.children[fromBitmap(node.mask, bit)];
          shift2 += SIZE;
          break;
        }
        return none2();
      }
      case "ArrayNode": {
        node = node.children[hashFragment(shift2, hash2)];
        if (node) {
          shift2 += SIZE;
          break;
        }
        return none2();
      }
      default:
        return none2();
    }
  }
});
var has2 = /* @__PURE__ */ dual(2, (self, key) => isSome2(getHash(self, key, hash(key))));
var set2 = /* @__PURE__ */ dual(3, (self, key, value) => modifyAt(self, key, () => some2(value)));
var setTree = /* @__PURE__ */ dual(3, (self, newRoot, newSize) => {
  if (self._editable) {
    self._root = newRoot;
    self._size = newSize;
    return self;
  }
  return newRoot === self._root ? self : makeImpl(self._editable, self._edit, newRoot, newSize);
});
var keys2 = (self) => new HashMapIterator(self, (key) => key);
var size2 = (self) => self._size;
var beginMutation = (self) => makeImpl(true, self._edit + 1, self._root, self._size);
var endMutation = (self) => {
  self._editable = false;
  return self;
};
var mutate = /* @__PURE__ */ dual(2, (self, f) => {
  const transient = beginMutation(self);
  f(transient);
  return endMutation(transient);
});
var modifyAt = /* @__PURE__ */ dual(3, (self, key, f) => modifyHash(self, key, hash(key), f));
var modifyHash = /* @__PURE__ */ dual(4, (self, key, hash2, f) => {
  const size17 = {
    value: self._size
  };
  const newRoot = self._root.modify(self._editable ? self._edit : NaN, 0, f, hash2, key, size17);
  return pipe(self, setTree(newRoot, size17.value));
});
var remove3 = /* @__PURE__ */ dual(2, (self, key) => modifyAt(self, key, none2));
var map6 = /* @__PURE__ */ dual(2, (self, f) => reduce4(self, empty8(), (map28, value, key) => set2(map28, key, f(value, key))));
var forEach2 = /* @__PURE__ */ dual(2, (self, f) => reduce4(self, void 0, (_, value, key) => f(value, key)));
var reduce4 = /* @__PURE__ */ dual(3, (self, zero2, f) => {
  const root = self._root;
  if (root._tag === "LeafNode") {
    return isSome2(root.value) ? f(zero2, root.value.value, root.key) : zero2;
  }
  if (root._tag === "EmptyNode") {
    return zero2;
  }
  const toVisit = [root.children];
  let children3;
  while (children3 = toVisit.pop()) {
    for (let i = 0, len = children3.length; i < len; ) {
      const child = children3[i++];
      if (child && !isEmptyNode(child)) {
        if (child._tag === "LeafNode") {
          if (isSome2(child.value)) {
            zero2 = f(zero2, child.value.value, child.key);
          }
        } else {
          toVisit.push(child.children);
        }
      }
    }
  }
  return zero2;
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/hashSet.js
var HashSetSymbolKey = "effect/HashSet";
var HashSetTypeId = /* @__PURE__ */ Symbol.for(HashSetSymbolKey);
var HashSetProto = {
  [HashSetTypeId]: HashSetTypeId,
  [Symbol.iterator]() {
    return keys2(this._keyMap);
  },
  [symbol]() {
    return cached(this, combine(hash(this._keyMap))(hash(HashSetSymbolKey)));
  },
  [symbol2](that) {
    if (isHashSet(that)) {
      return size2(this._keyMap) === size2(that._keyMap) && equals(this._keyMap, that._keyMap);
    }
    return false;
  },
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "HashSet",
      values: Array.from(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var makeImpl2 = (keyMap) => {
  const set10 = Object.create(HashSetProto);
  set10._keyMap = keyMap;
  return set10;
};
var isHashSet = (u) => hasProperty(u, HashSetTypeId);
var _empty4 = /* @__PURE__ */ makeImpl2(/* @__PURE__ */ empty8());
var empty9 = () => _empty4;
var fromIterable5 = (elements) => {
  const set10 = beginMutation2(empty9());
  for (const value of elements) {
    add3(set10, value);
  }
  return endMutation2(set10);
};
var make10 = (...elements) => {
  const set10 = beginMutation2(empty9());
  for (const value of elements) {
    add3(set10, value);
  }
  return endMutation2(set10);
};
var has3 = /* @__PURE__ */ dual(2, (self, value) => has2(self._keyMap, value));
var size3 = (self) => size2(self._keyMap);
var beginMutation2 = (self) => makeImpl2(beginMutation(self._keyMap));
var endMutation2 = (self) => {
  self._keyMap._editable = false;
  return self;
};
var mutate2 = /* @__PURE__ */ dual(2, (self, f) => {
  const transient = beginMutation2(self);
  f(transient);
  return endMutation2(transient);
});
var add3 = /* @__PURE__ */ dual(2, (self, value) => self._keyMap._editable ? (set2(value, true)(self._keyMap), self) : makeImpl2(set2(value, true)(self._keyMap)));
var remove4 = /* @__PURE__ */ dual(2, (self, value) => self._keyMap._editable ? (remove3(value)(self._keyMap), self) : makeImpl2(remove3(value)(self._keyMap)));
var difference3 = /* @__PURE__ */ dual(2, (self, that) => mutate2(self, (set10) => {
  for (const value of that) {
    remove4(set10, value);
  }
}));
var union3 = /* @__PURE__ */ dual(2, (self, that) => mutate2(empty9(), (set10) => {
  forEach3(self, (value) => add3(set10, value));
  for (const value of that) {
    add3(set10, value);
  }
}));
var forEach3 = /* @__PURE__ */ dual(2, (self, f) => forEach2(self._keyMap, (_, k) => f(k)));
var reduce5 = /* @__PURE__ */ dual(3, (self, zero2, f) => reduce4(self._keyMap, zero2, (z, _, a) => f(z, a)));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/HashSet.js
var empty10 = empty9;
var fromIterable6 = fromIterable5;
var make11 = make10;
var has4 = has3;
var size4 = size3;
var add4 = add3;
var remove5 = remove4;
var difference4 = difference3;
var union4 = union3;
var reduce6 = reduce5;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/MutableRef.js
var TypeId7 = /* @__PURE__ */ Symbol.for("effect/MutableRef");
var MutableRefProto = {
  [TypeId7]: TypeId7,
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "MutableRef",
      current: toJSON(this.current)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var make12 = (value) => {
  const ref = Object.create(MutableRefProto);
  ref.current = value;
  return ref;
};
var compareAndSet = /* @__PURE__ */ dual(3, (self, oldValue, newValue) => {
  if (equals(oldValue, self.current)) {
    self.current = newValue;
    return true;
  }
  return false;
});
var get7 = (self) => self.current;
var set3 = /* @__PURE__ */ dual(2, (self, value) => {
  self.current = value;
  return self;
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/fiberId.js
var FiberIdSymbolKey = "effect/FiberId";
var FiberIdTypeId = /* @__PURE__ */ Symbol.for(FiberIdSymbolKey);
var OP_NONE = "None";
var OP_RUNTIME = "Runtime";
var OP_COMPOSITE = "Composite";
var emptyHash = /* @__PURE__ */ string(`${FiberIdSymbolKey}-${OP_NONE}`);
var None = class {
  [FiberIdTypeId] = FiberIdTypeId;
  _tag = OP_NONE;
  id = -1;
  startTimeMillis = -1;
  [symbol]() {
    return emptyHash;
  }
  [symbol2](that) {
    return isFiberId(that) && that._tag === OP_NONE;
  }
  toString() {
    return format(this.toJSON());
  }
  toJSON() {
    return {
      _id: "FiberId",
      _tag: this._tag
    };
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
};
var Runtime = class {
  id;
  startTimeMillis;
  [FiberIdTypeId] = FiberIdTypeId;
  _tag = OP_RUNTIME;
  constructor(id2, startTimeMillis) {
    this.id = id2;
    this.startTimeMillis = startTimeMillis;
  }
  [symbol]() {
    return cached(this, string(`${FiberIdSymbolKey}-${this._tag}-${this.id}-${this.startTimeMillis}`));
  }
  [symbol2](that) {
    return isFiberId(that) && that._tag === OP_RUNTIME && this.id === that.id && this.startTimeMillis === that.startTimeMillis;
  }
  toString() {
    return format(this.toJSON());
  }
  toJSON() {
    return {
      _id: "FiberId",
      _tag: this._tag,
      id: this.id,
      startTimeMillis: this.startTimeMillis
    };
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
};
var Composite = class {
  left;
  right;
  [FiberIdTypeId] = FiberIdTypeId;
  _tag = OP_COMPOSITE;
  constructor(left3, right3) {
    this.left = left3;
    this.right = right3;
  }
  _hash;
  [symbol]() {
    return pipe(string(`${FiberIdSymbolKey}-${this._tag}`), combine(hash(this.left)), combine(hash(this.right)), cached(this));
  }
  [symbol2](that) {
    return isFiberId(that) && that._tag === OP_COMPOSITE && equals(this.left, that.left) && equals(this.right, that.right);
  }
  toString() {
    return format(this.toJSON());
  }
  toJSON() {
    return {
      _id: "FiberId",
      _tag: this._tag,
      left: toJSON(this.left),
      right: toJSON(this.right)
    };
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
};
var none3 = /* @__PURE__ */ new None();
var isFiberId = (self) => hasProperty(self, FiberIdTypeId);
var combine2 = /* @__PURE__ */ dual(2, (self, that) => {
  if (self._tag === OP_NONE) {
    return that;
  }
  if (that._tag === OP_NONE) {
    return self;
  }
  return new Composite(self, that);
});
var combineAll2 = (fiberIds) => {
  return pipe(fiberIds, reduce6(none3, (a, b) => combine2(b)(a)));
};
var ids = (self) => {
  switch (self._tag) {
    case OP_NONE: {
      return empty10();
    }
    case OP_RUNTIME: {
      return make11(self.id);
    }
    case OP_COMPOSITE: {
      return pipe(ids(self.left), union4(ids(self.right)));
    }
  }
};
var _fiberCounter = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Fiber/Id/_fiberCounter"), () => make12(0));
var make13 = (id2, startTimeSeconds) => {
  return new Runtime(id2, startTimeSeconds);
};
var threadName = (self) => {
  const identifiers = Array.from(ids(self)).map((n) => `#${n}`).join(",");
  return identifiers;
};
var unsafeMake = () => {
  const id2 = get7(_fiberCounter);
  pipe(_fiberCounter, set3(id2 + 1));
  return new Runtime(id2, Date.now());
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/FiberId.js
var none4 = none3;
var combine3 = combine2;
var combineAll3 = combineAll2;
var ids2 = ids;
var make14 = make13;
var threadName2 = threadName;
var unsafeMake2 = unsafeMake;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/HashMap.js
var empty11 = empty8;
var fromIterable7 = fromIterable4;
var isEmpty3 = isEmpty2;
var get8 = get6;
var set4 = set2;
var keys3 = keys2;
var size5 = size2;
var mutate3 = mutate;
var modifyAt2 = modifyAt;
var map8 = map6;
var forEach5 = forEach2;
var reduce7 = reduce4;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/List.js
var TypeId8 = /* @__PURE__ */ Symbol.for("effect/List");
var toArray2 = (self) => fromIterable2(self);
var getEquivalence5 = (isEquivalent) => mapInput(getEquivalence3(isEquivalent), toArray2);
var _equivalence4 = /* @__PURE__ */ getEquivalence5(equals);
var ConsProto = {
  [TypeId8]: TypeId8,
  _tag: "Cons",
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "List",
      _tag: "Cons",
      values: toArray2(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  [symbol2](that) {
    return isList(that) && this._tag === that._tag && _equivalence4(this, that);
  },
  [symbol]() {
    return cached(this, array2(toArray2(this)));
  },
  [Symbol.iterator]() {
    let done11 = false;
    let self = this;
    return {
      next() {
        if (done11) {
          return this.return();
        }
        if (self._tag === "Nil") {
          done11 = true;
          return this.return();
        }
        const value = self.head;
        self = self.tail;
        return {
          done: done11,
          value
        };
      },
      return(value) {
        if (!done11) {
          done11 = true;
        }
        return {
          done: true,
          value
        };
      }
    };
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var makeCons = (head6, tail2) => {
  const cons2 = Object.create(ConsProto);
  cons2.head = head6;
  cons2.tail = tail2;
  return cons2;
};
var NilHash = /* @__PURE__ */ string("Nil");
var NilProto = {
  [TypeId8]: TypeId8,
  _tag: "Nil",
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "List",
      _tag: "Nil"
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  [symbol]() {
    return NilHash;
  },
  [symbol2](that) {
    return isList(that) && this._tag === that._tag;
  },
  [Symbol.iterator]() {
    return {
      next() {
        return {
          done: true,
          value: void 0
        };
      }
    };
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var _Nil = /* @__PURE__ */ Object.create(NilProto);
var isList = (u) => hasProperty(u, TypeId8);
var isNil = (self) => self._tag === "Nil";
var isCons = (self) => self._tag === "Cons";
var nil = () => _Nil;
var cons = (head6, tail2) => makeCons(head6, tail2);
var empty12 = nil;
var of3 = (value) => makeCons(value, _Nil);
var appendAll3 = /* @__PURE__ */ dual(2, (self, that) => prependAll2(that, self));
var prepend3 = /* @__PURE__ */ dual(2, (self, element) => cons(element, self));
var prependAll2 = /* @__PURE__ */ dual(2, (self, prefix) => {
  if (isNil(self)) {
    return prefix;
  } else if (isNil(prefix)) {
    return self;
  } else {
    const result = makeCons(prefix.head, self);
    let curr = result;
    let that = prefix.tail;
    while (!isNil(that)) {
      const temp = makeCons(that.head, self);
      curr.tail = temp;
      curr = temp;
      that = that.tail;
    }
    return result;
  }
});
var reduce8 = /* @__PURE__ */ dual(3, (self, zero2, f) => {
  let acc = zero2;
  let these = self;
  while (!isNil(these)) {
    acc = f(acc, these.head);
    these = these.tail;
  }
  return acc;
});
var reverse3 = (self) => {
  let result = empty12();
  let these = self;
  while (!isNil(these)) {
    result = prepend3(result, these.head);
    these = these.tail;
  }
  return result;
};
var Structural = /* @__PURE__ */ function() {
  function Structural2(args2) {
    if (args2) {
      Object.assign(this, args2);
    }
  }
  Structural2.prototype = StructuralPrototype;
  return Structural2;
}();
var struct2 = (as11) => Object.assign(Object.create(StructuralPrototype), as11);

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/differ/contextPatch.js
var ContextPatchTypeId = /* @__PURE__ */ Symbol.for("effect/DifferContextPatch");
function variance(a) {
  return a;
}
var PatchProto = {
  ...Structural.prototype,
  [ContextPatchTypeId]: {
    _Value: variance,
    _Patch: variance
  }
};
var EmptyProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto), {
  _tag: "Empty"
});
var _empty5 = /* @__PURE__ */ Object.create(EmptyProto);
var empty13 = () => _empty5;
var AndThenProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto), {
  _tag: "AndThen"
});
var makeAndThen = (first2, second) => {
  const o = Object.create(AndThenProto);
  o.first = first2;
  o.second = second;
  return o;
};
var AddServiceProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto), {
  _tag: "AddService"
});
var makeAddService = (key, service3) => {
  const o = Object.create(AddServiceProto);
  o.key = key;
  o.service = service3;
  return o;
};
var RemoveServiceProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto), {
  _tag: "RemoveService"
});
var makeRemoveService = (key) => {
  const o = Object.create(RemoveServiceProto);
  o.key = key;
  return o;
};
var UpdateServiceProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto), {
  _tag: "UpdateService"
});
var makeUpdateService = (key, update6) => {
  const o = Object.create(UpdateServiceProto);
  o.key = key;
  o.update = update6;
  return o;
};
var diff = (oldValue, newValue) => {
  const missingServices = new Map(oldValue.unsafeMap);
  let patch9 = empty13();
  for (const [tag2, newService] of newValue.unsafeMap.entries()) {
    if (missingServices.has(tag2)) {
      const old = missingServices.get(tag2);
      missingServices.delete(tag2);
      if (!equals(old, newService)) {
        patch9 = combine4(makeUpdateService(tag2, () => newService))(patch9);
      }
    } else {
      missingServices.delete(tag2);
      patch9 = combine4(makeAddService(tag2, newService))(patch9);
    }
  }
  for (const [tag2] of missingServices.entries()) {
    patch9 = combine4(makeRemoveService(tag2))(patch9);
  }
  return patch9;
};
var combine4 = /* @__PURE__ */ dual(2, (self, that) => makeAndThen(self, that));
var patch = /* @__PURE__ */ dual(2, (self, context7) => {
  if (self._tag === "Empty") {
    return context7;
  }
  let wasServiceUpdated = false;
  let patches = of2(self);
  const updatedContext = new Map(context7.unsafeMap);
  while (isNonEmpty2(patches)) {
    const head6 = headNonEmpty2(patches);
    const tail2 = tailNonEmpty2(patches);
    switch (head6._tag) {
      case "Empty": {
        patches = tail2;
        break;
      }
      case "AddService": {
        updatedContext.set(head6.key, head6.service);
        patches = tail2;
        break;
      }
      case "AndThen": {
        patches = prepend2(prepend2(tail2, head6.second), head6.first);
        break;
      }
      case "RemoveService": {
        updatedContext.delete(head6.key);
        patches = tail2;
        break;
      }
      case "UpdateService": {
        updatedContext.set(head6.key, head6.update(updatedContext.get(head6.key)));
        wasServiceUpdated = true;
        patches = tail2;
        break;
      }
    }
  }
  if (!wasServiceUpdated) {
    return makeContext(updatedContext);
  }
  const map28 = /* @__PURE__ */ new Map();
  for (const [tag2] of context7.unsafeMap) {
    if (updatedContext.has(tag2)) {
      map28.set(tag2, updatedContext.get(tag2));
      updatedContext.delete(tag2);
    }
  }
  for (const [tag2, s] of updatedContext) {
    map28.set(tag2, s);
  }
  return makeContext(map28);
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/differ/hashSetPatch.js
var HashSetPatchTypeId = /* @__PURE__ */ Symbol.for("effect/DifferHashSetPatch");
function variance2(a) {
  return a;
}
var PatchProto2 = {
  ...Structural.prototype,
  [HashSetPatchTypeId]: {
    _Value: variance2,
    _Key: variance2,
    _Patch: variance2
  }
};
var EmptyProto2 = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto2), {
  _tag: "Empty"
});
var _empty6 = /* @__PURE__ */ Object.create(EmptyProto2);
var empty14 = () => _empty6;
var AndThenProto2 = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto2), {
  _tag: "AndThen"
});
var makeAndThen2 = (first2, second) => {
  const o = Object.create(AndThenProto2);
  o.first = first2;
  o.second = second;
  return o;
};
var AddProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto2), {
  _tag: "Add"
});
var makeAdd = (value) => {
  const o = Object.create(AddProto);
  o.value = value;
  return o;
};
var RemoveProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto2), {
  _tag: "Remove"
});
var makeRemove = (value) => {
  const o = Object.create(RemoveProto);
  o.value = value;
  return o;
};
var diff2 = (oldValue, newValue) => {
  const [removed, patch9] = reduce6([oldValue, empty14()], ([set10, patch10], value) => {
    if (has4(value)(set10)) {
      return [remove5(value)(set10), patch10];
    }
    return [set10, combine5(makeAdd(value))(patch10)];
  })(newValue);
  return reduce6(patch9, (patch10, value) => combine5(makeRemove(value))(patch10))(removed);
};
var combine5 = /* @__PURE__ */ dual(2, (self, that) => makeAndThen2(self, that));
var patch2 = /* @__PURE__ */ dual(2, (self, oldValue) => {
  if (self._tag === "Empty") {
    return oldValue;
  }
  let set10 = oldValue;
  let patches = of2(self);
  while (isNonEmpty2(patches)) {
    const head6 = headNonEmpty2(patches);
    const tail2 = tailNonEmpty2(patches);
    switch (head6._tag) {
      case "Empty": {
        patches = tail2;
        break;
      }
      case "AndThen": {
        patches = prepend2(head6.first)(prepend2(head6.second)(tail2));
        break;
      }
      case "Add": {
        set10 = add4(head6.value)(set10);
        patches = tail2;
        break;
      }
      case "Remove": {
        set10 = remove5(head6.value)(set10);
        patches = tail2;
      }
    }
  }
  return set10;
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/differ/readonlyArrayPatch.js
var ReadonlyArrayPatchTypeId = /* @__PURE__ */ Symbol.for("effect/DifferReadonlyArrayPatch");
function variance3(a) {
  return a;
}
var PatchProto3 = {
  ...Structural.prototype,
  [ReadonlyArrayPatchTypeId]: {
    _Value: variance3,
    _Patch: variance3
  }
};
var EmptyProto3 = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto3), {
  _tag: "Empty"
});
var _empty7 = /* @__PURE__ */ Object.create(EmptyProto3);
var empty15 = () => _empty7;
var AndThenProto3 = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto3), {
  _tag: "AndThen"
});
var makeAndThen3 = (first2, second) => {
  const o = Object.create(AndThenProto3);
  o.first = first2;
  o.second = second;
  return o;
};
var AppendProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto3), {
  _tag: "Append"
});
var makeAppend = (values4) => {
  const o = Object.create(AppendProto);
  o.values = values4;
  return o;
};
var SliceProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto3), {
  _tag: "Slice"
});
var makeSlice = (from, until) => {
  const o = Object.create(SliceProto);
  o.from = from;
  o.until = until;
  return o;
};
var UpdateProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto3), {
  _tag: "Update"
});
var makeUpdate = (index, patch9) => {
  const o = Object.create(UpdateProto);
  o.index = index;
  o.patch = patch9;
  return o;
};
var diff3 = (options) => {
  let i = 0;
  let patch9 = empty15();
  while (i < options.oldValue.length && i < options.newValue.length) {
    const oldElement = options.oldValue[i];
    const newElement = options.newValue[i];
    const valuePatch = options.differ.diff(oldElement, newElement);
    if (!equals(valuePatch, options.differ.empty)) {
      patch9 = combine6(patch9, makeUpdate(i, valuePatch));
    }
    i = i + 1;
  }
  if (i < options.oldValue.length) {
    patch9 = combine6(patch9, makeSlice(0, i));
  }
  if (i < options.newValue.length) {
    patch9 = combine6(patch9, makeAppend(drop(i)(options.newValue)));
  }
  return patch9;
};
var combine6 = /* @__PURE__ */ dual(2, (self, that) => makeAndThen3(self, that));
var patch3 = /* @__PURE__ */ dual(3, (self, oldValue, differ3) => {
  if (self._tag === "Empty") {
    return oldValue;
  }
  let readonlyArray2 = oldValue.slice();
  let patches = of(self);
  while (isNonEmptyArray2(patches)) {
    const head6 = headNonEmpty(patches);
    const tail2 = tailNonEmpty(patches);
    switch (head6._tag) {
      case "Empty": {
        patches = tail2;
        break;
      }
      case "AndThen": {
        tail2.unshift(head6.first, head6.second);
        patches = tail2;
        break;
      }
      case "Append": {
        for (const value of head6.values) {
          readonlyArray2.push(value);
        }
        patches = tail2;
        break;
      }
      case "Slice": {
        readonlyArray2 = readonlyArray2.slice(head6.from, head6.until);
        patches = tail2;
        break;
      }
      case "Update": {
        readonlyArray2[head6.index] = differ3.patch(head6.patch, readonlyArray2[head6.index]);
        patches = tail2;
        break;
      }
    }
  }
  return readonlyArray2;
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/differ.js
var DifferTypeId = /* @__PURE__ */ Symbol.for("effect/Differ");
var DifferProto = {
  [DifferTypeId]: {
    _P: identity,
    _V: identity
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var make16 = (params) => {
  const differ3 = Object.create(DifferProto);
  differ3.empty = params.empty;
  differ3.diff = params.diff;
  differ3.combine = params.combine;
  differ3.patch = params.patch;
  return differ3;
};
var environment = () => make16({
  empty: empty13(),
  combine: (first2, second) => combine4(second)(first2),
  diff: (oldValue, newValue) => diff(oldValue, newValue),
  patch: (patch9, oldValue) => patch(oldValue)(patch9)
});
var hashSet = () => make16({
  empty: empty14(),
  combine: (first2, second) => combine5(second)(first2),
  diff: (oldValue, newValue) => diff2(oldValue, newValue),
  patch: (patch9, oldValue) => patch2(oldValue)(patch9)
});
var readonlyArray = (differ3) => make16({
  empty: empty15(),
  combine: (first2, second) => combine6(first2, second),
  diff: (oldValue, newValue) => diff3({
    oldValue,
    newValue,
    differ: differ3
  }),
  patch: (patch9, oldValue) => patch3(patch9, oldValue, differ3)
});
var update = () => updateWith((_, a) => a);
var updateWith = (f) => make16({
  empty: identity,
  combine: (first2, second) => {
    if (first2 === identity) {
      return second;
    }
    if (second === identity) {
      return first2;
    }
    return (a) => second(first2(a));
  },
  diff: (oldValue, newValue) => {
    if (equals(oldValue, newValue)) {
      return identity;
    }
    return constant(newValue);
  },
  patch: (patch9, oldValue) => f(oldValue, patch9(oldValue))
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/runtimeFlagsPatch.js
var BIT_MASK = 255;
var BIT_SHIFT = 8;
var active = (patch9) => patch9 & BIT_MASK;
var enabled = (patch9) => patch9 >> BIT_SHIFT & BIT_MASK;
var make17 = (active2, enabled2) => (active2 & BIT_MASK) + ((enabled2 & active2 & BIT_MASK) << BIT_SHIFT);
var empty16 = /* @__PURE__ */ make17(0, 0);
var enable = (flag) => make17(flag, flag);
var disable = (flag) => make17(flag, 0);
var exclude = /* @__PURE__ */ dual(2, (self, flag) => make17(active(self) & ~flag, enabled(self)));
var andThen2 = /* @__PURE__ */ dual(2, (self, that) => self | that);
var invert = (n) => ~n >>> 0 & BIT_MASK;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/runtimeFlags.js
var None2 = 0;
var Interruption = 1 << 0;
var OpSupervision = 1 << 1;
var RuntimeMetrics = 1 << 2;
var WindDown = 1 << 4;
var CooperativeYielding = 1 << 5;
var cooperativeYielding = (self) => isEnabled(self, CooperativeYielding);
var disable2 = /* @__PURE__ */ dual(2, (self, flag) => self & ~flag);
var enable2 = /* @__PURE__ */ dual(2, (self, flag) => self | flag);
var interruptible = (self) => interruption(self) && !windDown(self);
var interruption = (self) => isEnabled(self, Interruption);
var isEnabled = /* @__PURE__ */ dual(2, (self, flag) => (self & flag) !== 0);
var make18 = (...flags) => flags.reduce((a, b) => a | b, 0);
var none5 = /* @__PURE__ */ make18(None2);
var runtimeMetrics = (self) => isEnabled(self, RuntimeMetrics);
var windDown = (self) => isEnabled(self, WindDown);
var diff4 = /* @__PURE__ */ dual(2, (self, that) => make17(self ^ that, that));
var patch4 = /* @__PURE__ */ dual(2, (self, patch9) => self & (invert(active(patch9)) | enabled(patch9)) | active(patch9) & enabled(patch9));
var differ = /* @__PURE__ */ make16({
  empty: empty16,
  diff: (oldValue, newValue) => diff4(oldValue, newValue),
  combine: (first2, second) => andThen2(second)(first2),
  patch: (_patch, oldValue) => patch4(oldValue, _patch)
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/RuntimeFlagsPatch.js
var empty17 = empty16;
var enable3 = enable;
var disable3 = disable;
var exclude2 = exclude;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/blockedRequests.js
var empty18 = {
  _tag: "Empty"
};
var par = (self, that) => ({
  _tag: "Par",
  left: self,
  right: that
});
var seq = (self, that) => ({
  _tag: "Seq",
  left: self,
  right: that
});
var single = (dataSource, blockedRequest) => ({
  _tag: "Single",
  dataSource,
  blockedRequest
});
var flatten5 = (self) => {
  let current2 = of3(self);
  let updated = empty12();
  while (1) {
    const [parallel4, sequential4] = reduce8(current2, [parallelCollectionEmpty(), empty12()], ([parallel5, sequential5], blockedRequest) => {
      const [par2, seq2] = step(blockedRequest);
      return [parallelCollectionCombine(parallel5, par2), appendAll3(sequential5, seq2)];
    });
    updated = merge4(updated, parallel4);
    if (isNil(sequential4)) {
      return reverse3(updated);
    }
    current2 = sequential4;
  }
  throw new Error("BUG: BlockedRequests.flatten - please report an issue at https://github.com/Effect-TS/effect/issues");
};
var step = (requests) => {
  let current2 = requests;
  let parallel4 = parallelCollectionEmpty();
  let stack = empty12();
  let sequential4 = empty12();
  while (1) {
    switch (current2._tag) {
      case "Empty": {
        if (isNil(stack)) {
          return [parallel4, sequential4];
        }
        current2 = stack.head;
        stack = stack.tail;
        break;
      }
      case "Par": {
        stack = cons(current2.right, stack);
        current2 = current2.left;
        break;
      }
      case "Seq": {
        const left3 = current2.left;
        const right3 = current2.right;
        switch (left3._tag) {
          case "Empty": {
            current2 = right3;
            break;
          }
          case "Par": {
            const l = left3.left;
            const r = left3.right;
            current2 = par(seq(l, right3), seq(r, right3));
            break;
          }
          case "Seq": {
            const l = left3.left;
            const r = left3.right;
            current2 = seq(l, seq(r, right3));
            break;
          }
          case "Single": {
            current2 = left3;
            sequential4 = cons(right3, sequential4);
            break;
          }
        }
        break;
      }
      case "Single": {
        parallel4 = parallelCollectionAdd(parallel4, current2);
        if (isNil(stack)) {
          return [parallel4, sequential4];
        }
        current2 = stack.head;
        stack = stack.tail;
        break;
      }
    }
  }
  throw new Error("BUG: BlockedRequests.step - please report an issue at https://github.com/Effect-TS/effect/issues");
};
var merge4 = (sequential4, parallel4) => {
  if (isNil(sequential4)) {
    return of3(parallelCollectionToSequentialCollection(parallel4));
  }
  if (parallelCollectionIsEmpty(parallel4)) {
    return sequential4;
  }
  const seqHeadKeys = sequentialCollectionKeys(sequential4.head);
  const parKeys = parallelCollectionKeys(parallel4);
  if (seqHeadKeys.length === 1 && parKeys.length === 1 && equals(seqHeadKeys[0], parKeys[0])) {
    return cons(sequentialCollectionCombine(sequential4.head, parallelCollectionToSequentialCollection(parallel4)), sequential4.tail);
  }
  return cons(parallelCollectionToSequentialCollection(parallel4), sequential4);
};
var EntryTypeId = /* @__PURE__ */ Symbol.for("effect/RequestBlock/Entry");
var EntryImpl = class {
  request;
  result;
  listeners;
  ownerId;
  state;
  [EntryTypeId] = blockedRequestVariance;
  constructor(request2, result, listeners, ownerId, state) {
    this.request = request2;
    this.result = result;
    this.listeners = listeners;
    this.ownerId = ownerId;
    this.state = state;
  }
};
var blockedRequestVariance = {
  /* c8 ignore next */
  _R: (_) => _
};
var makeEntry = (options) => new EntryImpl(options.request, options.result, options.listeners, options.ownerId, options.state);
var RequestBlockParallelTypeId = /* @__PURE__ */ Symbol.for("effect/RequestBlock/RequestBlockParallel");
var parallelVariance = {
  /* c8 ignore next */
  _R: (_) => _
};
var ParallelImpl = class {
  map;
  [RequestBlockParallelTypeId] = parallelVariance;
  constructor(map28) {
    this.map = map28;
  }
};
var parallelCollectionEmpty = () => new ParallelImpl(empty11());
var parallelCollectionAdd = (self, blockedRequest) => new ParallelImpl(modifyAt2(self.map, blockedRequest.dataSource, (_) => orElseSome(map2(_, append2(blockedRequest.blockedRequest)), () => of2(blockedRequest.blockedRequest))));
var parallelCollectionCombine = (self, that) => new ParallelImpl(reduce7(self.map, that.map, (map28, value, key) => set4(map28, key, match2(get8(map28, key), {
  onNone: () => value,
  onSome: (other) => appendAll2(value, other)
}))));
var parallelCollectionIsEmpty = (self) => isEmpty3(self.map);
var parallelCollectionKeys = (self) => Array.from(keys3(self.map));
var parallelCollectionToSequentialCollection = (self) => sequentialCollectionMake(map8(self.map, (x) => of2(x)));
var SequentialCollectionTypeId = /* @__PURE__ */ Symbol.for("effect/RequestBlock/RequestBlockSequential");
var sequentialVariance = {
  /* c8 ignore next */
  _R: (_) => _
};
var SequentialImpl = class {
  map;
  [SequentialCollectionTypeId] = sequentialVariance;
  constructor(map28) {
    this.map = map28;
  }
};
var sequentialCollectionMake = (map28) => new SequentialImpl(map28);
var sequentialCollectionCombine = (self, that) => new SequentialImpl(reduce7(that.map, self.map, (map28, value, key) => set4(map28, key, match2(get8(map28, key), {
  onNone: () => empty7(),
  onSome: (a) => appendAll2(a, value)
}))));
var sequentialCollectionKeys = (self) => Array.from(keys3(self.map));
var sequentialCollectionToChunk = (self) => Array.from(self.map);

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/opCodes/cause.js
var OP_DIE = "Die";
var OP_EMPTY = "Empty";
var OP_FAIL = "Fail";
var OP_INTERRUPT = "Interrupt";
var OP_PARALLEL = "Parallel";
var OP_SEQUENTIAL = "Sequential";

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/cause.js
var CauseSymbolKey = "effect/Cause";
var CauseTypeId = /* @__PURE__ */ Symbol.for(CauseSymbolKey);
var variance4 = {
  /* c8 ignore next */
  _E: (_) => _
};
var proto = {
  [CauseTypeId]: variance4,
  [symbol]() {
    return pipe(hash(CauseSymbolKey), combine(hash(flattenCause(this))), cached(this));
  },
  [symbol2](that) {
    return isCause(that) && causeEquals(this, that);
  },
  pipe() {
    return pipeArguments(this, arguments);
  },
  toJSON() {
    switch (this._tag) {
      case "Empty":
        return {
          _id: "Cause",
          _tag: this._tag
        };
      case "Die":
        return {
          _id: "Cause",
          _tag: this._tag,
          defect: toJSON(this.defect)
        };
      case "Interrupt":
        return {
          _id: "Cause",
          _tag: this._tag,
          fiberId: this.fiberId.toJSON()
        };
      case "Fail":
        return {
          _id: "Cause",
          _tag: this._tag,
          failure: toJSON(this.error)
        };
      case "Sequential":
      case "Parallel":
        return {
          _id: "Cause",
          _tag: this._tag,
          left: toJSON(this.left),
          right: toJSON(this.right)
        };
    }
  },
  toString() {
    return pretty(this);
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
};
var empty19 = /* @__PURE__ */ (() => {
  const o = /* @__PURE__ */ Object.create(proto);
  o._tag = OP_EMPTY;
  return o;
})();
var fail = (error) => {
  const o = Object.create(proto);
  o._tag = OP_FAIL;
  o.error = error;
  return o;
};
var die = (defect) => {
  const o = Object.create(proto);
  o._tag = OP_DIE;
  o.defect = defect;
  return o;
};
var interrupt = (fiberId3) => {
  const o = Object.create(proto);
  o._tag = OP_INTERRUPT;
  o.fiberId = fiberId3;
  return o;
};
var parallel = (left3, right3) => {
  const o = Object.create(proto);
  o._tag = OP_PARALLEL;
  o.left = left3;
  o.right = right3;
  return o;
};
var sequential = (left3, right3) => {
  const o = Object.create(proto);
  o._tag = OP_SEQUENTIAL;
  o.left = left3;
  o.right = right3;
  return o;
};
var isCause = (u) => hasProperty(u, CauseTypeId);
var isEmptyType = (self) => self._tag === OP_EMPTY;
var isFailType = (self) => self._tag === OP_FAIL;
var isDieType = (self) => self._tag === OP_DIE;
var isEmpty5 = (self) => {
  if (self._tag === OP_EMPTY) {
    return true;
  }
  return reduce9(self, true, (acc, cause3) => {
    switch (cause3._tag) {
      case OP_EMPTY: {
        return some2(acc);
      }
      case OP_DIE:
      case OP_FAIL:
      case OP_INTERRUPT: {
        return some2(false);
      }
      default: {
        return none2();
      }
    }
  });
};
var isInterrupted = (self) => isSome2(interruptOption(self));
var isInterruptedOnly = (self) => reduceWithContext(void 0, IsInterruptedOnlyCauseReducer)(self);
var failures = (self) => reverse2(reduce9(self, empty7(), (list, cause3) => cause3._tag === OP_FAIL ? some2(pipe(list, prepend2(cause3.error))) : none2()));
var defects = (self) => reverse2(reduce9(self, empty7(), (list, cause3) => cause3._tag === OP_DIE ? some2(pipe(list, prepend2(cause3.defect))) : none2()));
var interruptors = (self) => reduce9(self, empty10(), (set10, cause3) => cause3._tag === OP_INTERRUPT ? some2(pipe(set10, add4(cause3.fiberId))) : none2());
var failureOption = (self) => find(self, (cause3) => cause3._tag === OP_FAIL ? some2(cause3.error) : none2());
var failureOrCause = (self) => {
  const option3 = failureOption(self);
  switch (option3._tag) {
    case "None": {
      return right2(self);
    }
    case "Some": {
      return left2(option3.value);
    }
  }
};
var flipCauseOption = (self) => match5(self, {
  onEmpty: some2(empty19),
  onFail: map2(fail),
  onDie: (defect) => some2(die(defect)),
  onInterrupt: (fiberId3) => some2(interrupt(fiberId3)),
  onSequential: mergeWith(sequential),
  onParallel: mergeWith(parallel)
});
var interruptOption = (self) => find(self, (cause3) => cause3._tag === OP_INTERRUPT ? some2(cause3.fiberId) : none2());
var keepDefects = (self) => match5(self, {
  onEmpty: none2(),
  onFail: () => none2(),
  onDie: (defect) => some2(die(defect)),
  onInterrupt: () => none2(),
  onSequential: mergeWith(sequential),
  onParallel: mergeWith(parallel)
});
var keepDefectsAndElectFailures = (self) => match5(self, {
  onEmpty: none2(),
  onFail: (failure) => some2(die(failure)),
  onDie: (defect) => some2(die(defect)),
  onInterrupt: () => none2(),
  onSequential: mergeWith(sequential),
  onParallel: mergeWith(parallel)
});
var stripFailures = (self) => match5(self, {
  onEmpty: empty19,
  onFail: () => empty19,
  onDie: die,
  onInterrupt: interrupt,
  onSequential: sequential,
  onParallel: parallel
});
var electFailures = (self) => match5(self, {
  onEmpty: empty19,
  onFail: die,
  onDie: die,
  onInterrupt: interrupt,
  onSequential: sequential,
  onParallel: parallel
});
var map10 = /* @__PURE__ */ dual(2, (self, f) => flatMap7(self, (e) => fail(f(e))));
var flatMap7 = /* @__PURE__ */ dual(2, (self, f) => match5(self, {
  onEmpty: empty19,
  onFail: (error) => f(error),
  onDie: (defect) => die(defect),
  onInterrupt: (fiberId3) => interrupt(fiberId3),
  onSequential: (left3, right3) => sequential(left3, right3),
  onParallel: (left3, right3) => parallel(left3, right3)
}));
var flatten6 = (self) => flatMap7(self, identity);
var causeEquals = (left3, right3) => {
  let leftStack = of2(left3);
  let rightStack = of2(right3);
  while (isNonEmpty2(leftStack) && isNonEmpty2(rightStack)) {
    const [leftParallel, leftSequential] = pipe(headNonEmpty2(leftStack), reduce9([empty10(), empty7()], ([parallel4, sequential4], cause3) => {
      const [par2, seq2] = evaluateCause(cause3);
      return some2([pipe(parallel4, union4(par2)), pipe(sequential4, appendAll2(seq2))]);
    }));
    const [rightParallel, rightSequential] = pipe(headNonEmpty2(rightStack), reduce9([empty10(), empty7()], ([parallel4, sequential4], cause3) => {
      const [par2, seq2] = evaluateCause(cause3);
      return some2([pipe(parallel4, union4(par2)), pipe(sequential4, appendAll2(seq2))]);
    }));
    if (!equals(leftParallel, rightParallel)) {
      return false;
    }
    leftStack = leftSequential;
    rightStack = rightSequential;
  }
  return true;
};
var flattenCause = (cause3) => {
  return flattenCauseLoop(of2(cause3), empty7());
};
var flattenCauseLoop = (causes, flattened) => {
  while (1) {
    const [parallel4, sequential4] = pipe(causes, reduce2([empty10(), empty7()], ([parallel5, sequential5], cause3) => {
      const [par2, seq2] = evaluateCause(cause3);
      return [pipe(parallel5, union4(par2)), pipe(sequential5, appendAll2(seq2))];
    }));
    const updated = size4(parallel4) > 0 ? pipe(flattened, prepend2(parallel4)) : flattened;
    if (isEmpty(sequential4)) {
      return reverse2(updated);
    }
    causes = sequential4;
    flattened = updated;
  }
  throw new Error(getBugErrorMessage("Cause.flattenCauseLoop"));
};
var find = /* @__PURE__ */ dual(2, (self, pf) => {
  const stack = [self];
  while (stack.length > 0) {
    const item = stack.pop();
    const option3 = pf(item);
    switch (option3._tag) {
      case "None": {
        switch (item._tag) {
          case OP_SEQUENTIAL:
          case OP_PARALLEL: {
            stack.push(item.right);
            stack.push(item.left);
            break;
          }
        }
        break;
      }
      case "Some": {
        return option3;
      }
    }
  }
  return none2();
});
var evaluateCause = (self) => {
  let cause3 = self;
  const stack = [];
  let _parallel = empty10();
  let _sequential = empty7();
  while (cause3 !== void 0) {
    switch (cause3._tag) {
      case OP_EMPTY: {
        if (stack.length === 0) {
          return [_parallel, _sequential];
        }
        cause3 = stack.pop();
        break;
      }
      case OP_FAIL: {
        _parallel = add4(_parallel, make7(cause3._tag, cause3.error));
        if (stack.length === 0) {
          return [_parallel, _sequential];
        }
        cause3 = stack.pop();
        break;
      }
      case OP_DIE: {
        _parallel = add4(_parallel, make7(cause3._tag, cause3.defect));
        if (stack.length === 0) {
          return [_parallel, _sequential];
        }
        cause3 = stack.pop();
        break;
      }
      case OP_INTERRUPT: {
        _parallel = add4(_parallel, make7(cause3._tag, cause3.fiberId));
        if (stack.length === 0) {
          return [_parallel, _sequential];
        }
        cause3 = stack.pop();
        break;
      }
      case OP_SEQUENTIAL: {
        switch (cause3.left._tag) {
          case OP_EMPTY: {
            cause3 = cause3.right;
            break;
          }
          case OP_SEQUENTIAL: {
            cause3 = sequential(cause3.left.left, sequential(cause3.left.right, cause3.right));
            break;
          }
          case OP_PARALLEL: {
            cause3 = parallel(sequential(cause3.left.left, cause3.right), sequential(cause3.left.right, cause3.right));
            break;
          }
          default: {
            _sequential = prepend2(_sequential, cause3.right);
            cause3 = cause3.left;
            break;
          }
        }
        break;
      }
      case OP_PARALLEL: {
        stack.push(cause3.right);
        cause3 = cause3.left;
        break;
      }
    }
  }
  throw new Error(getBugErrorMessage("Cause.evaluateCauseLoop"));
};
var IsInterruptedOnlyCauseReducer = {
  emptyCase: constTrue,
  failCase: constFalse,
  dieCase: constFalse,
  interruptCase: constTrue,
  sequentialCase: (_, left3, right3) => left3 && right3,
  parallelCase: (_, left3, right3) => left3 && right3
};
var OP_SEQUENTIAL_CASE = "SequentialCase";
var OP_PARALLEL_CASE = "ParallelCase";
var match5 = /* @__PURE__ */ dual(2, (self, {
  onDie,
  onEmpty,
  onFail,
  onInterrupt: onInterrupt3,
  onParallel,
  onSequential
}) => {
  return reduceWithContext(self, void 0, {
    emptyCase: () => onEmpty,
    failCase: (_, error) => onFail(error),
    dieCase: (_, defect) => onDie(defect),
    interruptCase: (_, fiberId3) => onInterrupt3(fiberId3),
    sequentialCase: (_, left3, right3) => onSequential(left3, right3),
    parallelCase: (_, left3, right3) => onParallel(left3, right3)
  });
});
var reduce9 = /* @__PURE__ */ dual(3, (self, zero2, pf) => {
  let accumulator = zero2;
  let cause3 = self;
  const causes = [];
  while (cause3 !== void 0) {
    const option3 = pf(accumulator, cause3);
    accumulator = isSome2(option3) ? option3.value : accumulator;
    switch (cause3._tag) {
      case OP_SEQUENTIAL: {
        causes.push(cause3.right);
        cause3 = cause3.left;
        break;
      }
      case OP_PARALLEL: {
        causes.push(cause3.right);
        cause3 = cause3.left;
        break;
      }
      default: {
        cause3 = void 0;
        break;
      }
    }
    if (cause3 === void 0 && causes.length > 0) {
      cause3 = causes.pop();
    }
  }
  return accumulator;
});
var reduceWithContext = /* @__PURE__ */ dual(3, (self, context7, reducer) => {
  const input = [self];
  const output = [];
  while (input.length > 0) {
    const cause3 = input.pop();
    switch (cause3._tag) {
      case OP_EMPTY: {
        output.push(right2(reducer.emptyCase(context7)));
        break;
      }
      case OP_FAIL: {
        output.push(right2(reducer.failCase(context7, cause3.error)));
        break;
      }
      case OP_DIE: {
        output.push(right2(reducer.dieCase(context7, cause3.defect)));
        break;
      }
      case OP_INTERRUPT: {
        output.push(right2(reducer.interruptCase(context7, cause3.fiberId)));
        break;
      }
      case OP_SEQUENTIAL: {
        input.push(cause3.right);
        input.push(cause3.left);
        output.push(left2({
          _tag: OP_SEQUENTIAL_CASE
        }));
        break;
      }
      case OP_PARALLEL: {
        input.push(cause3.right);
        input.push(cause3.left);
        output.push(left2({
          _tag: OP_PARALLEL_CASE
        }));
        break;
      }
    }
  }
  const accumulator = [];
  while (output.length > 0) {
    const either7 = output.pop();
    switch (either7._tag) {
      case "Left": {
        switch (either7.left._tag) {
          case OP_SEQUENTIAL_CASE: {
            const left3 = accumulator.pop();
            const right3 = accumulator.pop();
            const value = reducer.sequentialCase(context7, left3, right3);
            accumulator.push(value);
            break;
          }
          case OP_PARALLEL_CASE: {
            const left3 = accumulator.pop();
            const right3 = accumulator.pop();
            const value = reducer.parallelCase(context7, left3, right3);
            accumulator.push(value);
            break;
          }
        }
        break;
      }
      case "Right": {
        accumulator.push(either7.right);
        break;
      }
    }
  }
  if (accumulator.length === 0) {
    throw new Error("BUG: Cause.reduceWithContext - please report an issue at https://github.com/Effect-TS/effect/issues");
  }
  return accumulator.pop();
});
var pretty = (cause3, options) => {
  if (isInterruptedOnly(cause3)) {
    return "All fibers interrupted without errors.";
  }
  return prettyErrors(cause3).map(function(e) {
    if (options?.renderErrorCause !== true || e.cause === void 0) {
      return e.stack;
    }
    return `${e.stack} {
${renderErrorCause(e.cause, "  ")}
}`;
  }).join("\n");
};
var renderErrorCause = (cause3, prefix) => {
  const lines = cause3.stack.split("\n");
  let stack = `${prefix}[cause]: ${lines[0]}`;
  for (let i = 1, len = lines.length; i < len; i++) {
    stack += `
${prefix}${lines[i]}`;
  }
  if (cause3.cause) {
    stack += ` {
${renderErrorCause(cause3.cause, `${prefix}  `)}
${prefix}}`;
  }
  return stack;
};
var PrettyError = class _PrettyError extends globalThis.Error {
  span = void 0;
  constructor(originalError) {
    const originalErrorIsObject = typeof originalError === "object" && originalError !== null;
    const prevLimit = Error.stackTraceLimit;
    Error.stackTraceLimit = 1;
    super(prettyErrorMessage(originalError), originalErrorIsObject && "cause" in originalError && typeof originalError.cause !== "undefined" ? {
      cause: new _PrettyError(originalError.cause)
    } : void 0);
    if (this.message === "") {
      this.message = "An error has occurred";
    }
    Error.stackTraceLimit = prevLimit;
    this.name = originalError instanceof Error ? originalError.name : "Error";
    if (originalErrorIsObject) {
      if (spanSymbol in originalError) {
        this.span = originalError[spanSymbol];
      }
      Object.keys(originalError).forEach((key) => {
        if (!(key in this)) {
          this[key] = originalError[key];
        }
      });
    }
    this.stack = prettyErrorStack(`${this.name}: ${this.message}`, originalError instanceof Error && originalError.stack ? originalError.stack : "", this.span);
  }
};
var prettyErrorMessage = (u) => {
  if (typeof u === "string") {
    return u;
  }
  if (typeof u === "object" && u !== null && u instanceof Error) {
    return u.message;
  }
  try {
    if (hasProperty(u, "toString") && isFunction2(u["toString"]) && u["toString"] !== Object.prototype.toString && u["toString"] !== globalThis.Array.prototype.toString) {
      return u["toString"]();
    }
  } catch {
  }
  return stringifyCircular(u);
};
var locationRegex = /\((.*)\)/g;
var spanToTrace = /* @__PURE__ */ globalValue("effect/Tracer/spanToTrace", () => /* @__PURE__ */ new WeakMap());
var prettyErrorStack = (message, stack, span4) => {
  const out = [message];
  const lines = stack.startsWith(message) ? stack.slice(message.length).split("\n") : stack.split("\n");
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].includes(" at new BaseEffectError") || lines[i].includes(" at new YieldableError")) {
      i++;
      continue;
    }
    if (lines[i].includes("Generator.next")) {
      break;
    }
    if (lines[i].includes("effect_internal_function")) {
      break;
    }
    out.push(lines[i].replace(/at .*effect_instruction_i.*\((.*)\)/, "at $1").replace(/EffectPrimitive\.\w+/, "<anonymous>"));
  }
  if (span4) {
    let current2 = span4;
    let i = 0;
    while (current2 && current2._tag === "Span" && i < 10) {
      const stackFn = spanToTrace.get(current2);
      if (typeof stackFn === "function") {
        const stack2 = stackFn();
        if (typeof stack2 === "string") {
          const locationMatchAll = stack2.matchAll(locationRegex);
          let match18 = false;
          for (const [, location] of locationMatchAll) {
            match18 = true;
            out.push(`    at ${current2.name} (${location})`);
          }
          if (!match18) {
            out.push(`    at ${current2.name} (${stack2.replace(/^at /, "")})`);
          }
        } else {
          out.push(`    at ${current2.name}`);
        }
      } else {
        out.push(`    at ${current2.name}`);
      }
      current2 = getOrUndefined(current2.parent);
      i++;
    }
  }
  return out.join("\n");
};
var spanSymbol = /* @__PURE__ */ Symbol.for("effect/SpanAnnotation");
var prettyErrors = (cause3) => reduceWithContext(cause3, void 0, {
  emptyCase: () => [],
  dieCase: (_, unknownError) => {
    return [new PrettyError(unknownError)];
  },
  failCase: (_, error) => {
    return [new PrettyError(error)];
  },
  interruptCase: () => [],
  parallelCase: (_, l, r) => [...l, ...r],
  sequentialCase: (_, l, r) => [...l, ...r]
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/opCodes/deferred.js
var OP_STATE_PENDING = "Pending";
var OP_STATE_DONE = "Done";

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/deferred.js
var DeferredSymbolKey = "effect/Deferred";
var DeferredTypeId = /* @__PURE__ */ Symbol.for(DeferredSymbolKey);
var deferredVariance = {
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _A: (_) => _
};
var pending = (joiners) => {
  return {
    _tag: OP_STATE_PENDING,
    joiners
  };
};
var done = (effect4) => {
  return {
    _tag: OP_STATE_DONE,
    effect: effect4
  };
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/singleShotGen.js
var SingleShotGen2 = class _SingleShotGen {
  self;
  called = false;
  constructor(self) {
    this.self = self;
  }
  next(a) {
    return this.called ? {
      value: a,
      done: true
    } : (this.called = true, {
      value: this.self,
      done: false
    });
  }
  return(a) {
    return {
      value: a,
      done: true
    };
  }
  throw(e) {
    throw e;
  }
  [Symbol.iterator]() {
    return new _SingleShotGen(this.self);
  }
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/core.js
var blocked = (blockedRequests, _continue3) => {
  const effect4 = new EffectPrimitive("Blocked");
  effect4.effect_instruction_i0 = blockedRequests;
  effect4.effect_instruction_i1 = _continue3;
  return effect4;
};
var runRequestBlock = (blockedRequests) => {
  const effect4 = new EffectPrimitive("RunBlocked");
  effect4.effect_instruction_i0 = blockedRequests;
  return effect4;
};
var EffectTypeId2 = /* @__PURE__ */ Symbol.for("effect/Effect");
var RevertFlags = class {
  patch;
  op;
  _op = OP_REVERT_FLAGS;
  constructor(patch9, op) {
    this.patch = patch9;
    this.op = op;
  }
};
var EffectPrimitive = class {
  _op;
  effect_instruction_i0 = void 0;
  effect_instruction_i1 = void 0;
  effect_instruction_i2 = void 0;
  trace = void 0;
  [EffectTypeId2] = effectVariance;
  constructor(_op) {
    this._op = _op;
  }
  [symbol2](that) {
    return this === that;
  }
  [symbol]() {
    return cached(this, random(this));
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  toJSON() {
    return {
      _id: "Effect",
      _op: this._op,
      effect_instruction_i0: toJSON(this.effect_instruction_i0),
      effect_instruction_i1: toJSON(this.effect_instruction_i1),
      effect_instruction_i2: toJSON(this.effect_instruction_i2)
    };
  }
  toString() {
    return format(this.toJSON());
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
  [Symbol.iterator]() {
    return new SingleShotGen2(new YieldWrap(this));
  }
};
var EffectPrimitiveFailure = class {
  _op;
  effect_instruction_i0 = void 0;
  effect_instruction_i1 = void 0;
  effect_instruction_i2 = void 0;
  trace = void 0;
  [EffectTypeId2] = effectVariance;
  constructor(_op) {
    this._op = _op;
    this._tag = _op;
  }
  [symbol2](that) {
    return exitIsExit(that) && that._op === "Failure" && // @ts-expect-error
    equals(this.effect_instruction_i0, that.effect_instruction_i0);
  }
  [symbol]() {
    return pipe(
      // @ts-expect-error
      string(this._tag),
      // @ts-expect-error
      combine(hash(this.effect_instruction_i0)),
      cached(this)
    );
  }
  get cause() {
    return this.effect_instruction_i0;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  toJSON() {
    return {
      _id: "Exit",
      _tag: this._op,
      cause: this.cause.toJSON()
    };
  }
  toString() {
    return format(this.toJSON());
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
  [Symbol.iterator]() {
    return new SingleShotGen2(new YieldWrap(this));
  }
};
var EffectPrimitiveSuccess = class {
  _op;
  effect_instruction_i0 = void 0;
  effect_instruction_i1 = void 0;
  effect_instruction_i2 = void 0;
  trace = void 0;
  [EffectTypeId2] = effectVariance;
  constructor(_op) {
    this._op = _op;
    this._tag = _op;
  }
  [symbol2](that) {
    return exitIsExit(that) && that._op === "Success" && // @ts-expect-error
    equals(this.effect_instruction_i0, that.effect_instruction_i0);
  }
  [symbol]() {
    return pipe(
      // @ts-expect-error
      string(this._tag),
      // @ts-expect-error
      combine(hash(this.effect_instruction_i0)),
      cached(this)
    );
  }
  get value() {
    return this.effect_instruction_i0;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  toJSON() {
    return {
      _id: "Exit",
      _tag: this._op,
      value: toJSON(this.value)
    };
  }
  toString() {
    return format(this.toJSON());
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
  [Symbol.iterator]() {
    return new SingleShotGen2(new YieldWrap(this));
  }
};
var isEffect = (u) => hasProperty(u, EffectTypeId2);
var withFiberRuntime = (withRuntime) => {
  const effect4 = new EffectPrimitive(OP_WITH_RUNTIME);
  effect4.effect_instruction_i0 = withRuntime;
  return effect4;
};
var acquireUseRelease = /* @__PURE__ */ dual(3, (acquire, use2, release) => uninterruptibleMask((restore) => flatMap8(acquire, (a) => flatMap8(exit(suspend(() => restore(use2(a)))), (exit4) => {
  return suspend(() => release(a, exit4)).pipe(matchCauseEffect({
    onFailure: (cause3) => {
      switch (exit4._tag) {
        case OP_FAILURE:
          return failCause(sequential(exit4.effect_instruction_i0, cause3));
        case OP_SUCCESS:
          return failCause(cause3);
      }
    },
    onSuccess: () => exit4
  }));
}))));
var as2 = /* @__PURE__ */ dual(2, (self, value) => flatMap8(self, () => succeed(value)));
var asVoid2 = (self) => as2(self, void 0);
var custom = function() {
  const wrapper = new EffectPrimitive(OP_COMMIT);
  switch (arguments.length) {
    case 2: {
      wrapper.effect_instruction_i0 = arguments[0];
      wrapper.commit = arguments[1];
      break;
    }
    case 3: {
      wrapper.effect_instruction_i0 = arguments[0];
      wrapper.effect_instruction_i1 = arguments[1];
      wrapper.commit = arguments[2];
      break;
    }
    case 4: {
      wrapper.effect_instruction_i0 = arguments[0];
      wrapper.effect_instruction_i1 = arguments[1];
      wrapper.effect_instruction_i2 = arguments[2];
      wrapper.commit = arguments[3];
      break;
    }
    default: {
      throw new Error(getBugErrorMessage("you're not supposed to end up here"));
    }
  }
  return wrapper;
};
var unsafeAsync = (register, blockingOn = none4) => {
  const effect4 = new EffectPrimitive(OP_ASYNC);
  let cancelerRef = void 0;
  effect4.effect_instruction_i0 = (resume2) => {
    cancelerRef = register(resume2);
  };
  effect4.effect_instruction_i1 = blockingOn;
  return onInterrupt(effect4, (_) => isEffect(cancelerRef) ? cancelerRef : void_2);
};
var asyncInterrupt = (register, blockingOn = none4) => suspend(() => unsafeAsync(register, blockingOn));
var async_ = (resume2, blockingOn = none4) => {
  return custom(resume2, function() {
    let backingResume = void 0;
    let pendingEffect = void 0;
    function proxyResume(effect5) {
      if (backingResume) {
        backingResume(effect5);
      } else if (pendingEffect === void 0) {
        pendingEffect = effect5;
      }
    }
    const effect4 = new EffectPrimitive(OP_ASYNC);
    effect4.effect_instruction_i0 = (resume3) => {
      backingResume = resume3;
      if (pendingEffect) {
        resume3(pendingEffect);
      }
    };
    effect4.effect_instruction_i1 = blockingOn;
    let cancelerRef = void 0;
    let controllerRef = void 0;
    if (this.effect_instruction_i0.length !== 1) {
      controllerRef = new AbortController();
      cancelerRef = internalCall(() => this.effect_instruction_i0(proxyResume, controllerRef.signal));
    } else {
      cancelerRef = internalCall(() => this.effect_instruction_i0(proxyResume));
    }
    return cancelerRef || controllerRef ? onInterrupt(effect4, (_) => {
      if (controllerRef) {
        controllerRef.abort();
      }
      return cancelerRef ?? void_2;
    }) : effect4;
  });
};
var catchAllCause = /* @__PURE__ */ dual(2, (self, f) => {
  const effect4 = new EffectPrimitive(OP_ON_FAILURE);
  effect4.effect_instruction_i0 = self;
  effect4.effect_instruction_i1 = f;
  return effect4;
});
var catchAll = /* @__PURE__ */ dual(2, (self, f) => matchEffect(self, {
  onFailure: f,
  onSuccess: succeed
}));
var catchIf = /* @__PURE__ */ dual(3, (self, predicate, f) => catchAllCause(self, (cause3) => {
  const either7 = failureOrCause(cause3);
  switch (either7._tag) {
    case "Left":
      return predicate(either7.left) ? f(either7.left) : failCause(cause3);
    case "Right":
      return failCause(either7.right);
  }
}));
var catchSome = /* @__PURE__ */ dual(2, (self, pf) => catchAllCause(self, (cause3) => {
  const either7 = failureOrCause(cause3);
  switch (either7._tag) {
    case "Left":
      return pipe(pf(either7.left), getOrElse(() => failCause(cause3)));
    case "Right":
      return failCause(either7.right);
  }
}));
var checkInterruptible = (f) => withFiberRuntime((_, status2) => f(interruption(status2.runtimeFlags)));
var originalSymbol = /* @__PURE__ */ Symbol.for("effect/OriginalAnnotation");
var capture = (obj, span4) => {
  if (isSome2(span4)) {
    return new Proxy(obj, {
      has(target, p) {
        return p === spanSymbol || p === originalSymbol || p in target;
      },
      get(target, p) {
        if (p === spanSymbol) {
          return span4.value;
        }
        if (p === originalSymbol) {
          return obj;
        }
        return target[p];
      }
    });
  }
  return obj;
};
var die2 = (defect) => isObject(defect) && !(spanSymbol in defect) ? withFiberRuntime((fiber) => failCause(die(capture(defect, currentSpanFromFiber(fiber))))) : failCause(die(defect));
var dieMessage = (message) => failCauseSync(() => die(new RuntimeException(message)));
var dieSync = (evaluate3) => flatMap8(sync(evaluate3), die2);
var either2 = (self) => matchEffect(self, {
  onFailure: (e) => succeed(left2(e)),
  onSuccess: (a) => succeed(right2(a))
});
var exit = (self) => matchCause(self, {
  onFailure: exitFailCause,
  onSuccess: exitSucceed
});
var fail2 = (error) => isObject(error) && !(spanSymbol in error) ? withFiberRuntime((fiber) => failCause(fail(capture(error, currentSpanFromFiber(fiber))))) : failCause(fail(error));
var failSync = (evaluate3) => flatMap8(sync(evaluate3), fail2);
var failCause = (cause3) => {
  const effect4 = new EffectPrimitiveFailure(OP_FAILURE);
  effect4.effect_instruction_i0 = cause3;
  return effect4;
};
var failCauseSync = (evaluate3) => flatMap8(sync(evaluate3), failCause);
var fiberId = /* @__PURE__ */ withFiberRuntime((state) => succeed(state.id()));
var fiberIdWith = (f) => withFiberRuntime((state) => f(state.id()));
var flatMap8 = /* @__PURE__ */ dual(2, (self, f) => {
  const effect4 = new EffectPrimitive(OP_ON_SUCCESS);
  effect4.effect_instruction_i0 = self;
  effect4.effect_instruction_i1 = f;
  return effect4;
});
var andThen3 = /* @__PURE__ */ dual(2, (self, f) => flatMap8(self, (a) => {
  const b = typeof f === "function" ? f(a) : f;
  if (isEffect(b)) {
    return b;
  } else if (isPromiseLike(b)) {
    return unsafeAsync((resume2) => {
      b.then((a2) => resume2(succeed(a2)), (e) => resume2(fail2(new UnknownException(e, "An unknown error occurred in Effect.andThen"))));
    });
  }
  return succeed(b);
}));
var step2 = (self) => {
  const effect4 = new EffectPrimitive("OnStep");
  effect4.effect_instruction_i0 = self;
  return effect4;
};
var flatten7 = (self) => flatMap8(self, identity);
var flip = (self) => matchEffect(self, {
  onFailure: succeed,
  onSuccess: fail2
});
var matchCause = /* @__PURE__ */ dual(2, (self, options) => matchCauseEffect(self, {
  onFailure: (cause3) => succeed(options.onFailure(cause3)),
  onSuccess: (a) => succeed(options.onSuccess(a))
}));
var matchCauseEffect = /* @__PURE__ */ dual(2, (self, options) => {
  const effect4 = new EffectPrimitive(OP_ON_SUCCESS_AND_FAILURE);
  effect4.effect_instruction_i0 = self;
  effect4.effect_instruction_i1 = options.onFailure;
  effect4.effect_instruction_i2 = options.onSuccess;
  return effect4;
});
var matchEffect = /* @__PURE__ */ dual(2, (self, options) => matchCauseEffect(self, {
  onFailure: (cause3) => {
    const defects2 = defects(cause3);
    if (defects2.length > 0) {
      return failCause(electFailures(cause3));
    }
    const failures2 = failures(cause3);
    if (failures2.length > 0) {
      return options.onFailure(unsafeHead(failures2));
    }
    return failCause(cause3);
  },
  onSuccess: options.onSuccess
}));
var forEachSequential = /* @__PURE__ */ dual(2, (self, f) => suspend(() => {
  const arr = fromIterable2(self);
  const ret = allocate(arr.length);
  let i = 0;
  return as2(whileLoop({
    while: () => i < arr.length,
    body: () => f(arr[i], i),
    step: (b) => {
      ret[i++] = b;
    }
  }), ret);
}));
var forEachSequentialDiscard = /* @__PURE__ */ dual(2, (self, f) => suspend(() => {
  const arr = fromIterable2(self);
  let i = 0;
  return whileLoop({
    while: () => i < arr.length,
    body: () => f(arr[i], i),
    step: () => {
      i++;
    }
  });
}));
var if_ = /* @__PURE__ */ dual((args2) => typeof args2[0] === "boolean" || isEffect(args2[0]), (self, options) => isEffect(self) ? flatMap8(self, (b) => b ? options.onTrue() : options.onFalse()) : self ? options.onTrue() : options.onFalse());
var interrupt2 = /* @__PURE__ */ flatMap8(fiberId, (fiberId3) => interruptWith(fiberId3));
var interruptWith = (fiberId3) => failCause(interrupt(fiberId3));
var interruptible2 = (self) => {
  const effect4 = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
  effect4.effect_instruction_i0 = enable3(Interruption);
  effect4.effect_instruction_i1 = () => self;
  return effect4;
};
var interruptibleMask = (f) => custom(f, function() {
  const effect4 = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
  effect4.effect_instruction_i0 = enable3(Interruption);
  effect4.effect_instruction_i1 = (oldFlags) => interruption(oldFlags) ? internalCall(() => this.effect_instruction_i0(interruptible2)) : internalCall(() => this.effect_instruction_i0(uninterruptible));
  return effect4;
});
var intoDeferred = /* @__PURE__ */ dual(2, (self, deferred) => uninterruptibleMask((restore) => flatMap8(exit(restore(self)), (exit4) => deferredDone(deferred, exit4))));
var map11 = /* @__PURE__ */ dual(2, (self, f) => flatMap8(self, (a) => sync(() => f(a))));
var mapBoth2 = /* @__PURE__ */ dual(2, (self, options) => matchEffect(self, {
  onFailure: (e) => failSync(() => options.onFailure(e)),
  onSuccess: (a) => sync(() => options.onSuccess(a))
}));
var mapError = /* @__PURE__ */ dual(2, (self, f) => matchCauseEffect(self, {
  onFailure: (cause3) => {
    const either7 = failureOrCause(cause3);
    switch (either7._tag) {
      case "Left": {
        return failSync(() => f(either7.left));
      }
      case "Right": {
        return failCause(either7.right);
      }
    }
  },
  onSuccess: succeed
}));
var onError = /* @__PURE__ */ dual(2, (self, cleanup) => onExit(self, (exit4) => exitIsSuccess(exit4) ? void_2 : cleanup(exit4.effect_instruction_i0)));
var onExit = /* @__PURE__ */ dual(2, (self, cleanup) => uninterruptibleMask((restore) => matchCauseEffect(restore(self), {
  onFailure: (cause1) => {
    const result = exitFailCause(cause1);
    return matchCauseEffect(cleanup(result), {
      onFailure: (cause22) => exitFailCause(sequential(cause1, cause22)),
      onSuccess: () => result
    });
  },
  onSuccess: (success) => {
    const result = exitSucceed(success);
    return zipRight2(cleanup(result), result);
  }
})));
var onInterrupt = /* @__PURE__ */ dual(2, (self, cleanup) => onExit(self, exitMatch({
  onFailure: (cause3) => isInterruptedOnly(cause3) ? asVoid2(cleanup(interruptors(cause3))) : void_2,
  onSuccess: () => void_2
})));
var orElse2 = /* @__PURE__ */ dual(2, (self, that) => attemptOrElse(self, that, succeed));
var orDie = (self) => orDieWith(self, identity);
var orDieWith = /* @__PURE__ */ dual(2, (self, f) => matchEffect(self, {
  onFailure: (e) => die2(f(e)),
  onSuccess: succeed
}));
var partitionMap4 = partitionMap3;
var runtimeFlags = /* @__PURE__ */ withFiberRuntime((_, status2) => succeed(status2.runtimeFlags));
var succeed = (value) => {
  const effect4 = new EffectPrimitiveSuccess(OP_SUCCESS);
  effect4.effect_instruction_i0 = value;
  return effect4;
};
var suspend = (evaluate3) => {
  const effect4 = new EffectPrimitive(OP_COMMIT);
  effect4.commit = evaluate3;
  return effect4;
};
var sync = (thunk) => {
  const effect4 = new EffectPrimitive(OP_SYNC);
  effect4.effect_instruction_i0 = thunk;
  return effect4;
};
var tap2 = /* @__PURE__ */ dual((args2) => args2.length === 3 || args2.length === 2 && !(isObject(args2[1]) && "onlyEffect" in args2[1]), (self, f) => flatMap8(self, (a) => {
  const b = typeof f === "function" ? f(a) : f;
  if (isEffect(b)) {
    return as2(b, a);
  } else if (isPromiseLike(b)) {
    return unsafeAsync((resume2) => {
      b.then((_) => resume2(succeed(a)), (e) => resume2(fail2(new UnknownException(e, "An unknown error occurred in Effect.tap"))));
    });
  }
  return succeed(a);
}));
var transplant = (f) => withFiberRuntime((state) => {
  const scopeOverride = state.getFiberRef(currentForkScopeOverride);
  const scope5 = pipe(scopeOverride, getOrElse(() => state.scope()));
  return f(fiberRefLocally(currentForkScopeOverride, some2(scope5)));
});
var attemptOrElse = /* @__PURE__ */ dual(3, (self, that, onSuccess) => matchCauseEffect(self, {
  onFailure: (cause3) => {
    const defects2 = defects(cause3);
    if (defects2.length > 0) {
      return failCause(getOrThrow2(keepDefectsAndElectFailures(cause3)));
    }
    return that();
  },
  onSuccess
}));
var uninterruptible = (self) => {
  const effect4 = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
  effect4.effect_instruction_i0 = disable3(Interruption);
  effect4.effect_instruction_i1 = () => self;
  return effect4;
};
var uninterruptibleMask = (f) => custom(f, function() {
  const effect4 = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
  effect4.effect_instruction_i0 = disable3(Interruption);
  effect4.effect_instruction_i1 = (oldFlags) => interruption(oldFlags) ? internalCall(() => this.effect_instruction_i0(interruptible2)) : internalCall(() => this.effect_instruction_i0(uninterruptible));
  return effect4;
});
var void_2 = /* @__PURE__ */ succeed(void 0);
var updateRuntimeFlags = (patch9) => {
  const effect4 = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
  effect4.effect_instruction_i0 = patch9;
  effect4.effect_instruction_i1 = void 0;
  return effect4;
};
var whenEffect = /* @__PURE__ */ dual(2, (self, condition) => flatMap8(condition, (b) => {
  if (b) {
    return pipe(self, map11(some2));
  }
  return succeed(none2());
}));
var whileLoop = (options) => {
  const effect4 = new EffectPrimitive(OP_WHILE);
  effect4.effect_instruction_i0 = options.while;
  effect4.effect_instruction_i1 = options.body;
  effect4.effect_instruction_i2 = options.step;
  return effect4;
};
var fromIterator = (iterator) => suspend(() => {
  const effect4 = new EffectPrimitive(OP_ITERATOR);
  effect4.effect_instruction_i0 = iterator();
  return effect4;
});
var gen2 = function() {
  const f = arguments.length === 1 ? arguments[0] : arguments[1].bind(arguments[0]);
  return fromIterator(() => f(pipe));
};
var fnUntraced = (body, ...pipeables) => Object.defineProperty(pipeables.length === 0 ? function(...args2) {
  return fromIterator(() => body.apply(this, args2));
} : function(...args2) {
  let effect4 = fromIterator(() => body.apply(this, args2));
  for (const x of pipeables) {
    effect4 = x(effect4, ...args2);
  }
  return effect4;
}, "length", {
  value: body.length,
  configurable: true
});
var withConcurrency = /* @__PURE__ */ dual(2, (self, concurrency) => fiberRefLocally(self, currentConcurrency, concurrency));
var withRequestBatching = /* @__PURE__ */ dual(2, (self, requestBatching) => fiberRefLocally(self, currentRequestBatching, requestBatching));
var withRuntimeFlags = /* @__PURE__ */ dual(2, (self, update6) => {
  const effect4 = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
  effect4.effect_instruction_i0 = update6;
  effect4.effect_instruction_i1 = () => self;
  return effect4;
});
var withTracerEnabled = /* @__PURE__ */ dual(2, (effect4, enabled2) => fiberRefLocally(effect4, currentTracerEnabled, enabled2));
var withTracerTiming = /* @__PURE__ */ dual(2, (effect4, enabled2) => fiberRefLocally(effect4, currentTracerTimingEnabled, enabled2));
var yieldNow = (options) => {
  const effect4 = new EffectPrimitive(OP_YIELD);
  return typeof options?.priority !== "undefined" ? withSchedulingPriority(effect4, options.priority) : effect4;
};
var zip2 = /* @__PURE__ */ dual(2, (self, that) => flatMap8(self, (a) => map11(that, (b) => [a, b])));
var zipLeft2 = /* @__PURE__ */ dual(2, (self, that) => flatMap8(self, (a) => as2(that, a)));
var zipRight2 = /* @__PURE__ */ dual(2, (self, that) => flatMap8(self, () => that));
var zipWith4 = /* @__PURE__ */ dual(3, (self, that, f) => flatMap8(self, (a) => map11(that, (b) => f(a, b))));
var never = /* @__PURE__ */ asyncInterrupt(() => {
  const interval = setInterval(() => {
  }, 2 ** 31 - 1);
  return sync(() => clearInterval(interval));
});
var interruptFiber = (self) => flatMap8(fiberId, (fiberId3) => pipe(self, interruptAsFiber(fiberId3)));
var interruptAsFiber = /* @__PURE__ */ dual(2, (self, fiberId3) => flatMap8(self.interruptAsFork(fiberId3), () => self.await));
var logLevelAll = {
  _tag: "All",
  syslog: 0,
  label: "ALL",
  ordinal: Number.MIN_SAFE_INTEGER,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var logLevelFatal = {
  _tag: "Fatal",
  syslog: 2,
  label: "FATAL",
  ordinal: 5e4,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var logLevelError = {
  _tag: "Error",
  syslog: 3,
  label: "ERROR",
  ordinal: 4e4,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var logLevelWarning = {
  _tag: "Warning",
  syslog: 4,
  label: "WARN",
  ordinal: 3e4,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var logLevelInfo = {
  _tag: "Info",
  syslog: 6,
  label: "INFO",
  ordinal: 2e4,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var logLevelDebug = {
  _tag: "Debug",
  syslog: 7,
  label: "DEBUG",
  ordinal: 1e4,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var logLevelTrace = {
  _tag: "Trace",
  syslog: 7,
  label: "TRACE",
  ordinal: 0,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var logLevelNone = {
  _tag: "None",
  syslog: 7,
  label: "OFF",
  ordinal: Number.MAX_SAFE_INTEGER,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var allLogLevels = [logLevelAll, logLevelTrace, logLevelDebug, logLevelInfo, logLevelWarning, logLevelError, logLevelFatal, logLevelNone];
var FiberRefSymbolKey = "effect/FiberRef";
var FiberRefTypeId = /* @__PURE__ */ Symbol.for(FiberRefSymbolKey);
var fiberRefVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
var fiberRefGet = (self) => withFiberRuntime((fiber) => exitSucceed(fiber.getFiberRef(self)));
var fiberRefGetWith = /* @__PURE__ */ dual(2, (self, f) => flatMap8(fiberRefGet(self), f));
var fiberRefSet = /* @__PURE__ */ dual(2, (self, value) => fiberRefModify(self, () => [void 0, value]));
var fiberRefModify = /* @__PURE__ */ dual(2, (self, f) => withFiberRuntime((state) => {
  const [b, a] = f(state.getFiberRef(self));
  state.setFiberRef(self, a);
  return succeed(b);
}));
var fiberRefLocally = /* @__PURE__ */ dual(3, (use2, self, value) => acquireUseRelease(zipLeft2(fiberRefGet(self), fiberRefSet(self, value)), () => use2, (oldValue) => fiberRefSet(self, oldValue)));
var fiberRefLocallyWith = /* @__PURE__ */ dual(3, (use2, self, f) => fiberRefGetWith(self, (a) => fiberRefLocally(use2, self, f(a))));
var fiberRefUnsafeMake = (initial, options) => fiberRefUnsafeMakePatch(initial, {
  differ: update(),
  fork: options?.fork ?? identity,
  join: options?.join
});
var fiberRefUnsafeMakeHashSet = (initial) => {
  const differ3 = hashSet();
  return fiberRefUnsafeMakePatch(initial, {
    differ: differ3,
    fork: differ3.empty
  });
};
var fiberRefUnsafeMakeReadonlyArray = (initial) => {
  const differ3 = readonlyArray(update());
  return fiberRefUnsafeMakePatch(initial, {
    differ: differ3,
    fork: differ3.empty
  });
};
var fiberRefUnsafeMakeContext = (initial) => {
  const differ3 = environment();
  return fiberRefUnsafeMakePatch(initial, {
    differ: differ3,
    fork: differ3.empty
  });
};
var fiberRefUnsafeMakePatch = (initial, options) => {
  const _fiberRef = {
    ...CommitPrototype,
    [FiberRefTypeId]: fiberRefVariance,
    initial,
    commit() {
      return fiberRefGet(this);
    },
    diff: (oldValue, newValue) => options.differ.diff(oldValue, newValue),
    combine: (first2, second) => options.differ.combine(first2, second),
    patch: (patch9) => (oldValue) => options.differ.patch(patch9, oldValue),
    fork: options.fork,
    join: options.join ?? ((_, n) => n)
  };
  return _fiberRef;
};
var fiberRefUnsafeMakeRuntimeFlags = (initial) => fiberRefUnsafeMakePatch(initial, {
  differ,
  fork: differ.empty
});
var currentContext = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentContext"), () => fiberRefUnsafeMakeContext(empty6()));
var currentSchedulingPriority = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentSchedulingPriority"), () => fiberRefUnsafeMake(0));
var currentMaxOpsBeforeYield = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentMaxOpsBeforeYield"), () => fiberRefUnsafeMake(2048));
var currentLogAnnotations = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentLogAnnotation"), () => fiberRefUnsafeMake(empty11()));
var currentLogLevel = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentLogLevel"), () => fiberRefUnsafeMake(logLevelInfo));
var currentLogSpan = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentLogSpan"), () => fiberRefUnsafeMake(empty12()));
var withSchedulingPriority = /* @__PURE__ */ dual(2, (self, scheduler) => fiberRefLocally(self, currentSchedulingPriority, scheduler));
var withMaxOpsBeforeYield = /* @__PURE__ */ dual(2, (self, scheduler) => fiberRefLocally(self, currentMaxOpsBeforeYield, scheduler));
var currentConcurrency = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentConcurrency"), () => fiberRefUnsafeMake("unbounded"));
var currentRequestBatching = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentRequestBatching"), () => fiberRefUnsafeMake(true));
var currentUnhandledErrorLogLevel = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentUnhandledErrorLogLevel"), () => fiberRefUnsafeMake(some2(logLevelDebug)));
var withUnhandledErrorLogLevel = /* @__PURE__ */ dual(2, (self, level) => fiberRefLocally(self, currentUnhandledErrorLogLevel, level));
var currentMetricLabels = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentMetricLabels"), () => fiberRefUnsafeMakeReadonlyArray(empty4()));
var metricLabels = /* @__PURE__ */ fiberRefGet(currentMetricLabels);
var currentForkScopeOverride = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentForkScopeOverride"), () => fiberRefUnsafeMake(none2(), {
  fork: () => none2(),
  join: (parent2, _) => parent2
}));
var currentInterruptedCause = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentInterruptedCause"), () => fiberRefUnsafeMake(empty19, {
  fork: () => empty19,
  join: (parent2, _) => parent2
}));
var currentTracerEnabled = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentTracerEnabled"), () => fiberRefUnsafeMake(true));
var currentTracerTimingEnabled = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentTracerTiming"), () => fiberRefUnsafeMake(true));
var currentTracerSpanAnnotations = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentTracerSpanAnnotations"), () => fiberRefUnsafeMake(empty11()));
var currentTracerSpanLinks = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentTracerSpanLinks"), () => fiberRefUnsafeMake(empty7()));
var ScopeTypeId = /* @__PURE__ */ Symbol.for("effect/Scope");
var CloseableScopeTypeId = /* @__PURE__ */ Symbol.for("effect/CloseableScope");
var scopeAddFinalizer = (self, finalizer3) => self.addFinalizer(() => asVoid2(finalizer3));
var scopeAddFinalizerExit = (self, finalizer3) => self.addFinalizer(finalizer3);
var scopeClose = (self, exit4) => self.close(exit4);
var scopeFork = (self, strategy) => self.fork(strategy);
var causeSquash = (self) => {
  return causeSquashWith(identity)(self);
};
var causeSquashWith = /* @__PURE__ */ dual(2, (self, f) => {
  const option3 = pipe(self, failureOption, map2(f));
  switch (option3._tag) {
    case "None": {
      return pipe(defects(self), head2, match2({
        onNone: () => {
          const interrupts = fromIterable2(interruptors(self)).flatMap((fiberId3) => fromIterable2(ids2(fiberId3)).map((id2) => `#${id2}`));
          return new InterruptedException(interrupts ? `Interrupted by fibers: ${interrupts.join(", ")}` : void 0);
        },
        onSome: identity
      }));
    }
    case "Some": {
      return option3.value;
    }
  }
});
var YieldableError = /* @__PURE__ */ function() {
  class YieldableError2 extends globalThis.Error {
    commit() {
      return fail2(this);
    }
    toJSON() {
      const obj = {
        ...this
      };
      if (this.message) obj.message = this.message;
      if (this.cause) obj.cause = this.cause;
      return obj;
    }
    [NodeInspectSymbol]() {
      if (this.toString !== globalThis.Error.prototype.toString) {
        return this.stack ? `${this.toString()}
${this.stack.split("\n").slice(1).join("\n")}` : this.toString();
      } else if ("Bun" in globalThis) {
        return pretty(fail(this), {
          renderErrorCause: true
        });
      }
      return this;
    }
  }
  Object.assign(YieldableError2.prototype, StructuralCommitPrototype);
  return YieldableError2;
}();
var makeException = (proto12, tag2) => {
  class Base3 extends YieldableError {
    _tag = tag2;
  }
  Object.assign(Base3.prototype, proto12);
  Base3.prototype.name = tag2;
  return Base3;
};
var RuntimeExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Cause/errors/RuntimeException");
var RuntimeException = /* @__PURE__ */ makeException({
  [RuntimeExceptionTypeId]: RuntimeExceptionTypeId
}, "RuntimeException");
var isRuntimeException = (u) => hasProperty(u, RuntimeExceptionTypeId);
var InterruptedExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Cause/errors/InterruptedException");
var InterruptedException = /* @__PURE__ */ makeException({
  [InterruptedExceptionTypeId]: InterruptedExceptionTypeId
}, "InterruptedException");
var isInterruptedException = (u) => hasProperty(u, InterruptedExceptionTypeId);
var IllegalArgumentExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Cause/errors/IllegalArgument");
var IllegalArgumentException = /* @__PURE__ */ makeException({
  [IllegalArgumentExceptionTypeId]: IllegalArgumentExceptionTypeId
}, "IllegalArgumentException");
var NoSuchElementExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Cause/errors/NoSuchElement");
var NoSuchElementException = /* @__PURE__ */ makeException({
  [NoSuchElementExceptionTypeId]: NoSuchElementExceptionTypeId
}, "NoSuchElementException");
var isNoSuchElementException = (u) => hasProperty(u, NoSuchElementExceptionTypeId);
var InvalidPubSubCapacityExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Cause/errors/InvalidPubSubCapacityException");
var InvalidPubSubCapacityException = /* @__PURE__ */ makeException({
  [InvalidPubSubCapacityExceptionTypeId]: InvalidPubSubCapacityExceptionTypeId
}, "InvalidPubSubCapacityException");
var TimeoutExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Cause/errors/Timeout");
var TimeoutException = /* @__PURE__ */ makeException({
  [TimeoutExceptionTypeId]: TimeoutExceptionTypeId
}, "TimeoutException");
var timeoutExceptionFromDuration = (duration2) => new TimeoutException(`Operation timed out after '${format2(duration2)}'`);
var UnknownExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Cause/errors/UnknownException");
var UnknownException = /* @__PURE__ */ function() {
  class UnknownException2 extends YieldableError {
    _tag = "UnknownException";
    error;
    constructor(cause3, message) {
      super(message ?? "An unknown error occurred", {
        cause: cause3
      });
      this.error = cause3;
    }
  }
  Object.assign(UnknownException2.prototype, {
    [UnknownExceptionTypeId]: UnknownExceptionTypeId,
    name: "UnknownException"
  });
  return UnknownException2;
}();
var exitIsExit = (u) => isEffect(u) && "_tag" in u && (u._tag === "Success" || u._tag === "Failure");
var exitIsFailure = (self) => self._tag === "Failure";
var exitIsSuccess = (self) => self._tag === "Success";
var exitAs = /* @__PURE__ */ dual(2, (self, value) => {
  switch (self._tag) {
    case OP_FAILURE: {
      return exitFailCause(self.effect_instruction_i0);
    }
    case OP_SUCCESS: {
      return exitSucceed(value);
    }
  }
});
var exitAsVoid = (self) => exitAs(self, void 0);
var exitCollectAll = (exits, options) => exitCollectAllInternal(exits, options?.parallel ? parallel : sequential);
var exitDie = (defect) => exitFailCause(die(defect));
var exitFail = (error) => exitFailCause(fail(error));
var exitFailCause = (cause3) => {
  const effect4 = new EffectPrimitiveFailure(OP_FAILURE);
  effect4.effect_instruction_i0 = cause3;
  return effect4;
};
var exitFlatMap = /* @__PURE__ */ dual(2, (self, f) => {
  switch (self._tag) {
    case OP_FAILURE: {
      return exitFailCause(self.effect_instruction_i0);
    }
    case OP_SUCCESS: {
      return f(self.effect_instruction_i0);
    }
  }
});
var exitFlatten = (self) => pipe(self, exitFlatMap(identity));
var exitInterrupt = (fiberId3) => exitFailCause(interrupt(fiberId3));
var exitMap = /* @__PURE__ */ dual(2, (self, f) => {
  switch (self._tag) {
    case OP_FAILURE:
      return exitFailCause(self.effect_instruction_i0);
    case OP_SUCCESS:
      return exitSucceed(f(self.effect_instruction_i0));
  }
});
var exitMapBoth = /* @__PURE__ */ dual(2, (self, {
  onFailure,
  onSuccess
}) => {
  switch (self._tag) {
    case OP_FAILURE:
      return exitFailCause(pipe(self.effect_instruction_i0, map10(onFailure)));
    case OP_SUCCESS:
      return exitSucceed(onSuccess(self.effect_instruction_i0));
  }
});
var exitMatch = /* @__PURE__ */ dual(2, (self, {
  onFailure,
  onSuccess
}) => {
  switch (self._tag) {
    case OP_FAILURE:
      return onFailure(self.effect_instruction_i0);
    case OP_SUCCESS:
      return onSuccess(self.effect_instruction_i0);
  }
});
var exitMatchEffect = /* @__PURE__ */ dual(2, (self, {
  onFailure,
  onSuccess
}) => {
  switch (self._tag) {
    case OP_FAILURE:
      return onFailure(self.effect_instruction_i0);
    case OP_SUCCESS:
      return onSuccess(self.effect_instruction_i0);
  }
});
var exitSucceed = (value) => {
  const effect4 = new EffectPrimitiveSuccess(OP_SUCCESS);
  effect4.effect_instruction_i0 = value;
  return effect4;
};
var exitVoid = /* @__PURE__ */ exitSucceed(void 0);
var exitZip = /* @__PURE__ */ dual(2, (self, that) => exitZipWith(self, that, {
  onSuccess: (a, a2) => [a, a2],
  onFailure: sequential
}));
var exitZipRight = /* @__PURE__ */ dual(2, (self, that) => exitZipWith(self, that, {
  onSuccess: (_, a2) => a2,
  onFailure: sequential
}));
var exitZipWith = /* @__PURE__ */ dual(3, (self, that, {
  onFailure,
  onSuccess
}) => {
  switch (self._tag) {
    case OP_FAILURE: {
      switch (that._tag) {
        case OP_SUCCESS:
          return exitFailCause(self.effect_instruction_i0);
        case OP_FAILURE: {
          return exitFailCause(onFailure(self.effect_instruction_i0, that.effect_instruction_i0));
        }
      }
    }
    case OP_SUCCESS: {
      switch (that._tag) {
        case OP_SUCCESS:
          return exitSucceed(onSuccess(self.effect_instruction_i0, that.effect_instruction_i0));
        case OP_FAILURE:
          return exitFailCause(that.effect_instruction_i0);
      }
    }
  }
});
var exitCollectAllInternal = (exits, combineCauses) => {
  const list = fromIterable3(exits);
  if (!isNonEmpty2(list)) {
    return none2();
  }
  return pipe(tailNonEmpty2(list), reduce2(pipe(headNonEmpty2(list), exitMap(of2)), (accumulator, current2) => pipe(accumulator, exitZipWith(current2, {
    onSuccess: (list2, value) => pipe(list2, prepend2(value)),
    onFailure: combineCauses
  }))), exitMap(reverse2), exitMap((chunk3) => toReadonlyArray(chunk3)), some2);
};
var deferredUnsafeMake = (fiberId3) => {
  const _deferred = {
    ...CommitPrototype,
    [DeferredTypeId]: deferredVariance,
    state: make12(pending([])),
    commit() {
      return deferredAwait(this);
    },
    blockingOn: fiberId3
  };
  return _deferred;
};
var deferredMake = () => flatMap8(fiberId, (id2) => deferredMakeAs(id2));
var deferredMakeAs = (fiberId3) => sync(() => deferredUnsafeMake(fiberId3));
var deferredAwait = (self) => asyncInterrupt((resume2) => {
  const state = get7(self.state);
  switch (state._tag) {
    case OP_STATE_DONE: {
      return resume2(state.effect);
    }
    case OP_STATE_PENDING: {
      state.joiners.push(resume2);
      return deferredInterruptJoiner(self, resume2);
    }
  }
}, self.blockingOn);
var deferredComplete = /* @__PURE__ */ dual(2, (self, effect4) => intoDeferred(effect4, self));
var deferredCompleteWith = /* @__PURE__ */ dual(2, (self, effect4) => sync(() => {
  const state = get7(self.state);
  switch (state._tag) {
    case OP_STATE_DONE: {
      return false;
    }
    case OP_STATE_PENDING: {
      set3(self.state, done(effect4));
      for (let i = 0, len = state.joiners.length; i < len; i++) {
        state.joiners[i](effect4);
      }
      return true;
    }
  }
}));
var deferredDone = /* @__PURE__ */ dual(2, (self, exit4) => deferredCompleteWith(self, exit4));
var deferredFail = /* @__PURE__ */ dual(2, (self, error) => deferredCompleteWith(self, fail2(error)));
var deferredFailCause = /* @__PURE__ */ dual(2, (self, cause3) => deferredCompleteWith(self, failCause(cause3)));
var deferredInterrupt = (self) => flatMap8(fiberId, (fiberId3) => deferredCompleteWith(self, interruptWith(fiberId3)));
var deferredInterruptWith = /* @__PURE__ */ dual(2, (self, fiberId3) => deferredCompleteWith(self, interruptWith(fiberId3)));
var deferredIsDone = (self) => sync(() => get7(self.state)._tag === OP_STATE_DONE);
var deferredPoll = (self) => sync(() => {
  const state = get7(self.state);
  switch (state._tag) {
    case OP_STATE_DONE: {
      return some2(state.effect);
    }
    case OP_STATE_PENDING: {
      return none2();
    }
  }
});
var deferredSucceed = /* @__PURE__ */ dual(2, (self, value) => deferredCompleteWith(self, succeed(value)));
var deferredUnsafeDone = (self, effect4) => {
  const state = get7(self.state);
  if (state._tag === OP_STATE_PENDING) {
    set3(self.state, done(effect4));
    for (let i = 0, len = state.joiners.length; i < len; i++) {
      state.joiners[i](effect4);
    }
  }
};
var deferredInterruptJoiner = (self, joiner) => sync(() => {
  const state = get7(self.state);
  if (state._tag === OP_STATE_PENDING) {
    const index = state.joiners.indexOf(joiner);
    if (index >= 0) {
      state.joiners.splice(index, 1);
    }
  }
});
var constContext = /* @__PURE__ */ withFiberRuntime((fiber) => exitSucceed(fiber.currentContext));
var context = () => constContext;
var contextWithEffect = (f) => flatMap8(context(), f);
var provideContext = /* @__PURE__ */ dual(2, (self, context7) => fiberRefLocally(currentContext, context7)(self));
var provideSomeContext = /* @__PURE__ */ dual(2, (self, context7) => fiberRefLocallyWith(currentContext, (parent2) => merge3(parent2, context7))(self));
var mapInputContext = /* @__PURE__ */ dual(2, (self, f) => contextWithEffect((context7) => provideContext(self, f(context7))));
var filterEffectOrElse = /* @__PURE__ */ dual(2, (self, options) => flatMap8(self, (a) => flatMap8(options.predicate(a), (pass) => pass ? succeed(a) : options.orElse(a))));
var filterEffectOrFail = /* @__PURE__ */ dual(2, (self, options) => filterEffectOrElse(self, {
  predicate: options.predicate,
  orElse: (a) => fail2(options.orFailWith(a))
}));
var currentSpanFromFiber = (fiber) => {
  const span4 = fiber.currentSpan;
  return span4 !== void 0 && span4._tag === "Span" ? some2(span4) : none2();
};
var NoopSpanProto = {
  _tag: "Span",
  spanId: "noop",
  traceId: "noop",
  sampled: false,
  status: {
    _tag: "Ended",
    startTime: /* @__PURE__ */ BigInt(0),
    endTime: /* @__PURE__ */ BigInt(0),
    exit: exitVoid
  },
  attributes: /* @__PURE__ */ new Map(),
  links: [],
  kind: "internal",
  attribute() {
  },
  event() {
  },
  end() {
  },
  addLinks() {
  }
};
var noopSpan = (options) => Object.assign(Object.create(NoopSpanProto), options);

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Deferred.js
var make20 = deferredMake;
var _await = deferredAwait;
var done2 = deferredDone;
var fail3 = deferredFail;
var failCause2 = deferredFailCause;
var interrupt3 = deferredInterrupt;
var isDone = deferredIsDone;
var poll = deferredPoll;
var succeed2 = deferredSucceed;
var unsafeMake3 = deferredUnsafeMake;
var unsafeDone = deferredUnsafeDone;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Exit.js
var isExit = exitIsExit;
var isFailure = exitIsFailure;
var isSuccess = exitIsSuccess;
var all2 = exitCollectAll;
var die3 = exitDie;
var fail4 = exitFail;
var failCause3 = exitFailCause;
var flatten8 = exitFlatten;
var interrupt4 = exitInterrupt;
var map12 = exitMap;
var mapBoth3 = exitMapBoth;
var match6 = exitMatch;
var succeed3 = exitSucceed;
var void_3 = exitVoid;
var zip3 = exitZip;
var zipRight3 = exitZipRight;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/MutableHashMap.js
var TypeId9 = /* @__PURE__ */ Symbol.for("effect/MutableHashMap");
var MutableHashMapProto = {
  [TypeId9]: TypeId9,
  [Symbol.iterator]() {
    return new MutableHashMapIterator(this);
  },
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "MutableHashMap",
      values: Array.from(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var MutableHashMapIterator = class _MutableHashMapIterator {
  self;
  referentialIterator;
  bucketIterator;
  constructor(self) {
    this.self = self;
    this.referentialIterator = self.referential[Symbol.iterator]();
  }
  next() {
    if (this.bucketIterator !== void 0) {
      return this.bucketIterator.next();
    }
    const result = this.referentialIterator.next();
    if (result.done) {
      this.bucketIterator = new BucketIterator(this.self.buckets.values());
      return this.next();
    }
    return result;
  }
  [Symbol.iterator]() {
    return new _MutableHashMapIterator(this.self);
  }
};
var BucketIterator = class {
  backing;
  constructor(backing) {
    this.backing = backing;
  }
  currentBucket;
  next() {
    if (this.currentBucket === void 0) {
      const result2 = this.backing.next();
      if (result2.done) {
        return result2;
      }
      this.currentBucket = result2.value[Symbol.iterator]();
    }
    const result = this.currentBucket.next();
    if (result.done) {
      this.currentBucket = void 0;
      return this.next();
    }
    return result;
  }
};
var empty20 = () => {
  const self = Object.create(MutableHashMapProto);
  self.referential = /* @__PURE__ */ new Map();
  self.buckets = /* @__PURE__ */ new Map();
  self.bucketsSize = 0;
  return self;
};
var get9 = /* @__PURE__ */ dual(2, (self, key) => {
  if (isEqual(key) === false) {
    return self.referential.has(key) ? some2(self.referential.get(key)) : none2();
  }
  const hash2 = key[symbol]();
  const bucket = self.buckets.get(hash2);
  if (bucket === void 0) {
    return none2();
  }
  return getFromBucket(self, bucket, key);
});
var getFromBucket = (self, bucket, key, remove10 = false) => {
  for (let i = 0, len = bucket.length; i < len; i++) {
    if (key[symbol2](bucket[i][0])) {
      const value = bucket[i][1];
      if (remove10) {
        bucket.splice(i, 1);
        self.bucketsSize--;
      }
      return some2(value);
    }
  }
  return none2();
};
var has5 = /* @__PURE__ */ dual(2, (self, key) => isSome2(get9(self, key)));
var set5 = /* @__PURE__ */ dual(3, (self, key, value) => {
  if (isEqual(key) === false) {
    self.referential.set(key, value);
    return self;
  }
  const hash2 = key[symbol]();
  const bucket = self.buckets.get(hash2);
  if (bucket === void 0) {
    self.buckets.set(hash2, [[key, value]]);
    self.bucketsSize++;
    return self;
  }
  removeFromBucket(self, bucket, key);
  bucket.push([key, value]);
  self.bucketsSize++;
  return self;
});
var removeFromBucket = (self, bucket, key) => {
  for (let i = 0, len = bucket.length; i < len; i++) {
    if (key[symbol2](bucket[i][0])) {
      bucket.splice(i, 1);
      self.bucketsSize--;
      return;
    }
  }
};
var remove6 = /* @__PURE__ */ dual(2, (self, key) => {
  if (isEqual(key) === false) {
    self.referential.delete(key);
    return self;
  }
  const hash2 = key[symbol]();
  const bucket = self.buckets.get(hash2);
  if (bucket === void 0) {
    return self;
  }
  removeFromBucket(self, bucket, key);
  if (bucket.length === 0) {
    self.buckets.delete(hash2);
  }
  return self;
});
var size6 = (self) => {
  return self.referential.size + self.bucketsSize;
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/MutableList.js
var TypeId10 = /* @__PURE__ */ Symbol.for("effect/MutableList");
var MutableListProto = {
  [TypeId10]: TypeId10,
  [Symbol.iterator]() {
    let done11 = false;
    let head6 = this.head;
    return {
      next() {
        if (done11) {
          return this.return();
        }
        if (head6 == null) {
          done11 = true;
          return this.return();
        }
        const value = head6.value;
        head6 = head6.next;
        return {
          done: done11,
          value
        };
      },
      return(value) {
        if (!done11) {
          done11 = true;
        }
        return {
          done: true,
          value
        };
      }
    };
  },
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "MutableList",
      values: Array.from(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var makeNode = (value) => ({
  value,
  removed: false,
  prev: void 0,
  next: void 0
});
var empty21 = () => {
  const list = Object.create(MutableListProto);
  list.head = void 0;
  list.tail = void 0;
  list._length = 0;
  return list;
};
var isEmpty6 = (self) => length2(self) === 0;
var length2 = (self) => self._length;
var append3 = /* @__PURE__ */ dual(2, (self, value) => {
  const node = makeNode(value);
  if (self.head === void 0) {
    self.head = node;
  }
  if (self.tail === void 0) {
    self.tail = node;
  } else {
    self.tail.next = node;
    node.prev = self.tail;
    self.tail = node;
  }
  self._length += 1;
  return self;
});
var shift = (self) => {
  const head6 = self.head;
  if (head6 !== void 0) {
    remove7(self, head6);
    return head6.value;
  }
  return void 0;
};
var remove7 = (self, node) => {
  if (node.removed) {
    return;
  }
  node.removed = true;
  if (node.prev !== void 0 && node.next !== void 0) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  } else if (node.prev !== void 0) {
    self.tail = node.prev;
    node.prev.next = void 0;
  } else if (node.next !== void 0) {
    self.head = node.next;
    node.next.prev = void 0;
  } else {
    self.tail = void 0;
    self.head = void 0;
  }
  if (self._length > 0) {
    self._length -= 1;
  }
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/MutableQueue.js
var TypeId11 = /* @__PURE__ */ Symbol.for("effect/MutableQueue");
var EmptyMutableQueue = /* @__PURE__ */ Symbol.for("effect/mutable/MutableQueue/Empty");
var MutableQueueProto = {
  [TypeId11]: TypeId11,
  [Symbol.iterator]() {
    return Array.from(this.queue)[Symbol.iterator]();
  },
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "MutableQueue",
      values: Array.from(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var make21 = (capacity7) => {
  const queue = Object.create(MutableQueueProto);
  queue.queue = empty21();
  queue.capacity = capacity7;
  return queue;
};
var bounded = (capacity7) => make21(capacity7);
var unbounded = () => make21(void 0);
var length3 = (self) => length2(self.queue);
var isEmpty7 = (self) => isEmpty6(self.queue);
var capacity = (self) => self.capacity === void 0 ? Infinity : self.capacity;
var offer = /* @__PURE__ */ dual(2, (self, value) => {
  const queueLength = length2(self.queue);
  if (self.capacity !== void 0 && queueLength === self.capacity) {
    return false;
  }
  append3(value)(self.queue);
  return true;
});
var offerAll = /* @__PURE__ */ dual(2, (self, values4) => {
  const iterator = values4[Symbol.iterator]();
  let next;
  let remainder = empty7();
  let offering = true;
  while (offering && (next = iterator.next()) && !next.done) {
    offering = offer(next.value)(self);
  }
  while (next != null && !next.done) {
    remainder = prepend2(next.value)(remainder);
    next = iterator.next();
  }
  return reverse2(remainder);
});
var poll2 = /* @__PURE__ */ dual(2, (self, def) => {
  if (isEmpty6(self.queue)) {
    return def;
  }
  return shift(self.queue);
});
var pollUpTo = /* @__PURE__ */ dual(2, (self, n) => {
  let result = empty7();
  let count3 = 0;
  while (count3 < n) {
    const element = poll2(EmptyMutableQueue)(self);
    if (element === EmptyMutableQueue) {
      break;
    }
    result = prepend2(element)(result);
    count3 += 1;
  }
  return reverse2(result);
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/clock.js
var ClockSymbolKey = "effect/Clock";
var ClockTypeId = /* @__PURE__ */ Symbol.for(ClockSymbolKey);
var clockTag = /* @__PURE__ */ GenericTag("effect/Clock");
var MAX_TIMER_MILLIS = 2 ** 31 - 1;
var globalClockScheduler = {
  unsafeSchedule(task, duration2) {
    const millis2 = toMillis(duration2);
    if (millis2 > MAX_TIMER_MILLIS) {
      return constFalse;
    }
    let completed = false;
    const handle = setTimeout(() => {
      completed = true;
      task();
    }, millis2);
    return () => {
      clearTimeout(handle);
      return !completed;
    };
  }
};
var performanceNowNanos = /* @__PURE__ */ function() {
  const bigint1e62 = /* @__PURE__ */ BigInt(1e6);
  if (typeof performance === "undefined") {
    return () => BigInt(Date.now()) * bigint1e62;
  }
  let origin;
  return () => {
    if (origin === void 0) {
      origin = BigInt(Date.now()) * bigint1e62 - BigInt(Math.round(performance.now() * 1e6));
    }
    return origin + BigInt(Math.round(performance.now() * 1e6));
  };
}();
var processOrPerformanceNow = /* @__PURE__ */ function() {
  const processHrtime = typeof process === "object" && "hrtime" in process && typeof process.hrtime.bigint === "function" ? process.hrtime : void 0;
  if (!processHrtime) {
    return performanceNowNanos;
  }
  const origin = /* @__PURE__ */ performanceNowNanos() - /* @__PURE__ */ processHrtime.bigint();
  return () => origin + processHrtime.bigint();
}();
var ClockImpl = class {
  [ClockTypeId] = ClockTypeId;
  unsafeCurrentTimeMillis() {
    return Date.now();
  }
  unsafeCurrentTimeNanos() {
    return processOrPerformanceNow();
  }
  currentTimeMillis = /* @__PURE__ */ sync(() => this.unsafeCurrentTimeMillis());
  currentTimeNanos = /* @__PURE__ */ sync(() => this.unsafeCurrentTimeNanos());
  scheduler() {
    return succeed(globalClockScheduler);
  }
  sleep(duration2) {
    return async_((resume2) => {
      const canceler = globalClockScheduler.unsafeSchedule(() => resume2(void_2), duration2);
      return asVoid2(sync(canceler));
    });
  }
};
var make22 = () => new ClockImpl();

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/opCodes/configError.js
var OP_AND = "And";
var OP_OR = "Or";
var OP_INVALID_DATA = "InvalidData";
var OP_MISSING_DATA = "MissingData";
var OP_SOURCE_UNAVAILABLE = "SourceUnavailable";
var OP_UNSUPPORTED = "Unsupported";

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/configError.js
var ConfigErrorSymbolKey = "effect/ConfigError";
var ConfigErrorTypeId = /* @__PURE__ */ Symbol.for(ConfigErrorSymbolKey);
var proto2 = {
  _tag: "ConfigError",
  [ConfigErrorTypeId]: ConfigErrorTypeId
};
var And = (self, that) => {
  const error = Object.create(proto2);
  error._op = OP_AND;
  error.left = self;
  error.right = that;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      return `${this.left} and ${this.right}`;
    }
  });
  Object.defineProperty(error, "message", {
    enumerable: false,
    get() {
      return this.toString();
    }
  });
  return error;
};
var Or = (self, that) => {
  const error = Object.create(proto2);
  error._op = OP_OR;
  error.left = self;
  error.right = that;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      return `${this.left} or ${this.right}`;
    }
  });
  Object.defineProperty(error, "message", {
    enumerable: false,
    get() {
      return this.toString();
    }
  });
  return error;
};
var InvalidData = (path, message, options = {
  pathDelim: "."
}) => {
  const error = Object.create(proto2);
  error._op = OP_INVALID_DATA;
  error.path = path;
  error.message = message;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      const path2 = pipe(this.path, join(options.pathDelim));
      return `(Invalid data at ${path2}: "${this.message}")`;
    }
  });
  return error;
};
var MissingData = (path, message, options = {
  pathDelim: "."
}) => {
  const error = Object.create(proto2);
  error._op = OP_MISSING_DATA;
  error.path = path;
  error.message = message;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      const path2 = pipe(this.path, join(options.pathDelim));
      return `(Missing data at ${path2}: "${this.message}")`;
    }
  });
  return error;
};
var SourceUnavailable = (path, message, cause3, options = {
  pathDelim: "."
}) => {
  const error = Object.create(proto2);
  error._op = OP_SOURCE_UNAVAILABLE;
  error.path = path;
  error.message = message;
  error.cause = cause3;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      const path2 = pipe(this.path, join(options.pathDelim));
      return `(Source unavailable at ${path2}: "${this.message}")`;
    }
  });
  return error;
};
var Unsupported = (path, message, options = {
  pathDelim: "."
}) => {
  const error = Object.create(proto2);
  error._op = OP_UNSUPPORTED;
  error.path = path;
  error.message = message;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      const path2 = pipe(this.path, join(options.pathDelim));
      return `(Unsupported operation at ${path2}: "${this.message}")`;
    }
  });
  return error;
};
var prefixed = /* @__PURE__ */ dual(2, (self, prefix) => {
  switch (self._op) {
    case OP_AND: {
      return And(prefixed(self.left, prefix), prefixed(self.right, prefix));
    }
    case OP_OR: {
      return Or(prefixed(self.left, prefix), prefixed(self.right, prefix));
    }
    case OP_INVALID_DATA: {
      return InvalidData([...prefix, ...self.path], self.message);
    }
    case OP_MISSING_DATA: {
      return MissingData([...prefix, ...self.path], self.message);
    }
    case OP_SOURCE_UNAVAILABLE: {
      return SourceUnavailable([...prefix, ...self.path], self.message, self.cause);
    }
    case OP_UNSUPPORTED: {
      return Unsupported([...prefix, ...self.path], self.message);
    }
  }
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/configProvider/pathPatch.js
var empty22 = {
  _tag: "Empty"
};
var patch5 = /* @__PURE__ */ dual(2, (path, patch9) => {
  let input = of3(patch9);
  let output = path;
  while (isCons(input)) {
    const patch10 = input.head;
    switch (patch10._tag) {
      case "Empty": {
        input = input.tail;
        break;
      }
      case "AndThen": {
        input = cons(patch10.first, cons(patch10.second, input.tail));
        break;
      }
      case "MapName": {
        output = map4(output, patch10.f);
        input = input.tail;
        break;
      }
      case "Nested": {
        output = prepend(output, patch10.name);
        input = input.tail;
        break;
      }
      case "Unnested": {
        const containsName = pipe(head(output), contains(patch10.name));
        if (containsName) {
          output = tailNonEmpty(output);
          input = input.tail;
        } else {
          return left2(MissingData(output, `Expected ${patch10.name} to be in path in ConfigProvider#unnested`));
        }
        break;
      }
    }
  }
  return right2(output);
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/opCodes/config.js
var OP_CONSTANT = "Constant";
var OP_FAIL2 = "Fail";
var OP_FALLBACK = "Fallback";
var OP_DESCRIBED = "Described";
var OP_LAZY = "Lazy";
var OP_MAP_OR_FAIL = "MapOrFail";
var OP_NESTED = "Nested";
var OP_PRIMITIVE = "Primitive";
var OP_SEQUENCE = "Sequence";
var OP_HASHMAP = "HashMap";
var OP_ZIP_WITH = "ZipWith";

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/configProvider.js
var concat = (l, r) => [...l, ...r];
var ConfigProviderSymbolKey = "effect/ConfigProvider";
var ConfigProviderTypeId = /* @__PURE__ */ Symbol.for(ConfigProviderSymbolKey);
var configProviderTag = /* @__PURE__ */ GenericTag("effect/ConfigProvider");
var FlatConfigProviderSymbolKey = "effect/ConfigProviderFlat";
var FlatConfigProviderTypeId = /* @__PURE__ */ Symbol.for(FlatConfigProviderSymbolKey);
var make23 = (options) => ({
  [ConfigProviderTypeId]: ConfigProviderTypeId,
  pipe() {
    return pipeArguments(this, arguments);
  },
  ...options
});
var makeFlat = (options) => ({
  [FlatConfigProviderTypeId]: FlatConfigProviderTypeId,
  patch: options.patch,
  load: (path, config, split4 = true) => options.load(path, config, split4),
  enumerateChildren: options.enumerateChildren
});
var fromFlat = (flat) => make23({
  load: (config) => flatMap8(fromFlatLoop(flat, empty4(), config, false), (chunk3) => match2(head(chunk3), {
    onNone: () => fail2(MissingData(empty4(), `Expected a single value having structure: ${config}`)),
    onSome: succeed
  })),
  flattened: flat
});
var fromEnv = (options) => {
  const {
    pathDelim,
    seqDelim
  } = Object.assign({}, {
    pathDelim: "_",
    seqDelim: ","
  }, options);
  const makePathString = (path) => pipe(path, join(pathDelim));
  const unmakePathString = (pathString) => pathString.split(pathDelim);
  const getEnv = () => typeof process !== "undefined" && "env" in process && typeof process.env === "object" ? process.env : {};
  const load = (path, primitive, split4 = true) => {
    const pathString = makePathString(path);
    const current2 = getEnv();
    const valueOpt = pathString in current2 ? some2(current2[pathString]) : none2();
    return pipe(valueOpt, mapError(() => MissingData(path, `Expected ${pathString} to exist in the process context`)), flatMap8((value) => parsePrimitive(value, path, primitive, seqDelim, split4)));
  };
  const enumerateChildren = (path) => sync(() => {
    const current2 = getEnv();
    const keys6 = Object.keys(current2);
    const keyPaths = keys6.map((value) => unmakePathString(value.toUpperCase()));
    const filteredKeyPaths = keyPaths.filter((keyPath) => {
      for (let i = 0; i < path.length; i++) {
        const pathComponent = pipe(path, unsafeGet(i));
        const currentElement = keyPath[i];
        if (currentElement === void 0 || pathComponent !== currentElement) {
          return false;
        }
      }
      return true;
    }).flatMap((keyPath) => keyPath.slice(path.length, path.length + 1));
    return fromIterable6(filteredKeyPaths);
  });
  return fromFlat(makeFlat({
    load,
    enumerateChildren,
    patch: empty22
  }));
};
var extend2 = (leftDef, rightDef, left3, right3) => {
  const leftPad = unfold(left3.length, (index) => index >= right3.length ? none2() : some2([leftDef(index), index + 1]));
  const rightPad = unfold(right3.length, (index) => index >= left3.length ? none2() : some2([rightDef(index), index + 1]));
  const leftExtension = concat(left3, leftPad);
  const rightExtension = concat(right3, rightPad);
  return [leftExtension, rightExtension];
};
var appendConfigPath = (path, config) => {
  let op = config;
  if (op._tag === "Nested") {
    const out = path.slice();
    while (op._tag === "Nested") {
      out.push(op.name);
      op = op.config;
    }
    return out;
  }
  return path;
};
var fromFlatLoop = (flat, prefix, config, split4) => {
  const op = config;
  switch (op._tag) {
    case OP_CONSTANT: {
      return succeed(of(op.value));
    }
    case OP_DESCRIBED: {
      return suspend(() => fromFlatLoop(flat, prefix, op.config, split4));
    }
    case OP_FAIL2: {
      return fail2(MissingData(prefix, op.message));
    }
    case OP_FALLBACK: {
      return pipe(suspend(() => fromFlatLoop(flat, prefix, op.first, split4)), catchAll((error1) => {
        if (op.condition(error1)) {
          return pipe(fromFlatLoop(flat, prefix, op.second, split4), catchAll((error2) => fail2(Or(error1, error2))));
        }
        return fail2(error1);
      }));
    }
    case OP_LAZY: {
      return suspend(() => fromFlatLoop(flat, prefix, op.config(), split4));
    }
    case OP_MAP_OR_FAIL: {
      return suspend(() => pipe(fromFlatLoop(flat, prefix, op.original, split4), flatMap8(forEachSequential((a) => pipe(op.mapOrFail(a), mapError(prefixed(appendConfigPath(prefix, op.original))))))));
    }
    case OP_NESTED: {
      return suspend(() => fromFlatLoop(flat, concat(prefix, of(op.name)), op.config, split4));
    }
    case OP_PRIMITIVE: {
      return pipe(patch5(prefix, flat.patch), flatMap8((prefix2) => pipe(flat.load(prefix2, op, split4), flatMap8((values4) => {
        if (values4.length === 0) {
          const name = pipe(last(prefix2), getOrElse(() => "<n/a>"));
          return fail2(MissingData([], `Expected ${op.description} with name ${name}`));
        }
        return succeed(values4);
      }))));
    }
    case OP_SEQUENCE: {
      return pipe(patch5(prefix, flat.patch), flatMap8((patchedPrefix) => pipe(flat.enumerateChildren(patchedPrefix), flatMap8(indicesFrom), flatMap8((indices) => {
        if (indices.length === 0) {
          return suspend(() => map11(fromFlatLoop(flat, prefix, op.config, true), of));
        }
        return pipe(forEachSequential(indices, (index) => fromFlatLoop(flat, append(prefix, `[${index}]`), op.config, true)), map11((chunkChunk) => {
          const flattened = flatten2(chunkChunk);
          if (flattened.length === 0) {
            return of(empty4());
          }
          return of(flattened);
        }));
      }))));
    }
    case OP_HASHMAP: {
      return suspend(() => pipe(patch5(prefix, flat.patch), flatMap8((prefix2) => pipe(flat.enumerateChildren(prefix2), flatMap8((keys6) => {
        return pipe(keys6, forEachSequential((key) => fromFlatLoop(flat, concat(prefix2, of(key)), op.valueConfig, split4)), map11((matrix) => {
          if (matrix.length === 0) {
            return of(empty11());
          }
          return pipe(transpose(matrix), map4((values4) => fromIterable7(zip(fromIterable2(keys6), values4))));
        }));
      })))));
    }
    case OP_ZIP_WITH: {
      return suspend(() => pipe(fromFlatLoop(flat, prefix, op.left, split4), either2, flatMap8((left3) => pipe(fromFlatLoop(flat, prefix, op.right, split4), either2, flatMap8((right3) => {
        if (isLeft2(left3) && isLeft2(right3)) {
          return fail2(And(left3.left, right3.left));
        }
        if (isLeft2(left3) && isRight2(right3)) {
          return fail2(left3.left);
        }
        if (isRight2(left3) && isLeft2(right3)) {
          return fail2(right3.left);
        }
        if (isRight2(left3) && isRight2(right3)) {
          const path = pipe(prefix, join("."));
          const fail18 = fromFlatLoopFail(prefix, path);
          const [lefts, rights] = extend2(fail18, fail18, pipe(left3.right, map4(right2)), pipe(right3.right, map4(right2)));
          return pipe(lefts, zip(rights), forEachSequential(([left4, right4]) => pipe(zip2(left4, right4), map11(([left5, right5]) => op.zip(left5, right5)))));
        }
        throw new Error("BUG: ConfigProvider.fromFlatLoop - please report an issue at https://github.com/Effect-TS/effect/issues");
      })))));
    }
  }
};
var fromFlatLoopFail = (prefix, path) => (index) => left2(MissingData(prefix, `The element at index ${index} in a sequence at path "${path}" was missing`));
var splitPathString = (text, delim) => {
  const split4 = text.split(new RegExp(`\\s*${escape(delim)}\\s*`));
  return split4;
};
var parsePrimitive = (text, path, primitive, delimiter, split4) => {
  if (!split4) {
    return pipe(primitive.parse(text), mapBoth2({
      onFailure: prefixed(path),
      onSuccess: of
    }));
  }
  return pipe(splitPathString(text, delimiter), forEachSequential((char) => primitive.parse(char.trim())), mapError(prefixed(path)));
};
var transpose = (array4) => {
  return Object.keys(array4[0]).map((column) => array4.map((row) => row[column]));
};
var indicesFrom = (quotedIndices) => pipe(forEachSequential(quotedIndices, parseQuotedIndex), mapBoth2({
  onFailure: () => empty4(),
  onSuccess: sort(Order)
}), either2, map11(merge));
var QUOTED_INDEX_REGEX = /^(\[(\d+)\])$/;
var parseQuotedIndex = (str) => {
  const match18 = str.match(QUOTED_INDEX_REGEX);
  if (match18 !== null) {
    const matchedIndex = match18[2];
    return pipe(matchedIndex !== void 0 && matchedIndex.length > 0 ? some2(matchedIndex) : none2(), flatMap(parseInteger));
  }
  return none2();
};
var parseInteger = (str) => {
  const parsedIndex = Number.parseInt(str);
  return Number.isNaN(parsedIndex) ? none2() : some2(parsedIndex);
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/defaultServices/console.js
var TypeId12 = /* @__PURE__ */ Symbol.for("effect/Console");
var consoleTag = /* @__PURE__ */ GenericTag("effect/Console");
var defaultConsole = {
  [TypeId12]: TypeId12,
  assert(condition, ...args2) {
    return sync(() => {
      console.assert(condition, ...args2);
    });
  },
  clear: /* @__PURE__ */ sync(() => {
    console.clear();
  }),
  count(label) {
    return sync(() => {
      console.count(label);
    });
  },
  countReset(label) {
    return sync(() => {
      console.countReset(label);
    });
  },
  debug(...args2) {
    return sync(() => {
      console.debug(...args2);
    });
  },
  dir(item, options) {
    return sync(() => {
      console.dir(item, options);
    });
  },
  dirxml(...args2) {
    return sync(() => {
      console.dirxml(...args2);
    });
  },
  error(...args2) {
    return sync(() => {
      console.error(...args2);
    });
  },
  group(options) {
    return options?.collapsed ? sync(() => console.groupCollapsed(options?.label)) : sync(() => console.group(options?.label));
  },
  groupEnd: /* @__PURE__ */ sync(() => {
    console.groupEnd();
  }),
  info(...args2) {
    return sync(() => {
      console.info(...args2);
    });
  },
  log(...args2) {
    return sync(() => {
      console.log(...args2);
    });
  },
  table(tabularData, properties) {
    return sync(() => {
      console.table(tabularData, properties);
    });
  },
  time(label) {
    return sync(() => console.time(label));
  },
  timeEnd(label) {
    return sync(() => console.timeEnd(label));
  },
  timeLog(label, ...args2) {
    return sync(() => {
      console.timeLog(label, ...args2);
    });
  },
  trace(...args2) {
    return sync(() => {
      console.trace(...args2);
    });
  },
  warn(...args2) {
    return sync(() => {
      console.warn(...args2);
    });
  },
  unsafe: console
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/random.js
var RandomSymbolKey = "effect/Random";
var RandomTypeId = /* @__PURE__ */ Symbol.for(RandomSymbolKey);
var randomTag = /* @__PURE__ */ GenericTag("effect/Random");
var RandomImpl = class {
  seed;
  [RandomTypeId] = RandomTypeId;
  PRNG;
  constructor(seed) {
    this.seed = seed;
    this.PRNG = new PCGRandom(seed);
  }
  get next() {
    return sync(() => this.PRNG.number());
  }
  get nextBoolean() {
    return map11(this.next, (n) => n > 0.5);
  }
  get nextInt() {
    return sync(() => this.PRNG.integer(Number.MAX_SAFE_INTEGER));
  }
  nextRange(min4, max6) {
    return map11(this.next, (n) => (max6 - min4) * n + min4);
  }
  nextIntBetween(min4, max6) {
    return sync(() => this.PRNG.integer(max6 - min4) + min4);
  }
  shuffle(elements) {
    return shuffleWith(elements, (n) => this.nextIntBetween(0, n));
  }
};
var shuffleWith = (elements, nextIntBounded) => {
  return suspend(() => pipe(sync(() => Array.from(elements)), flatMap8((buffer3) => {
    const numbers = [];
    for (let i = buffer3.length; i >= 2; i = i - 1) {
      numbers.push(i);
    }
    return pipe(numbers, forEachSequentialDiscard((n) => pipe(nextIntBounded(n), map11((k) => swap(buffer3, n - 1, k)))), as2(fromIterable3(buffer3)));
  })));
};
var swap = (buffer3, index1, index2) => {
  const tmp = buffer3[index1];
  buffer3[index1] = buffer3[index2];
  buffer3[index2] = tmp;
  return buffer3;
};
var make24 = (seed) => new RandomImpl(hash(seed));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/tracer.js
var TracerTypeId = /* @__PURE__ */ Symbol.for("effect/Tracer");
var make25 = (options) => ({
  [TracerTypeId]: TracerTypeId,
  ...options
});
var tracerTag = /* @__PURE__ */ GenericTag("effect/Tracer");
var spanTag = /* @__PURE__ */ GenericTag("effect/ParentSpan");
var randomHexString = /* @__PURE__ */ function() {
  const characters = "abcdef0123456789";
  const charactersLength = characters.length;
  return function(length4) {
    let result = "";
    for (let i = 0; i < length4; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
}();
var NativeSpan = class {
  name;
  parent;
  context;
  startTime;
  kind;
  _tag = "Span";
  spanId;
  traceId = "native";
  sampled = true;
  status;
  attributes;
  events = [];
  links;
  constructor(name, parent2, context7, links, startTime, kind) {
    this.name = name;
    this.parent = parent2;
    this.context = context7;
    this.startTime = startTime;
    this.kind = kind;
    this.status = {
      _tag: "Started",
      startTime
    };
    this.attributes = /* @__PURE__ */ new Map();
    this.traceId = parent2._tag === "Some" ? parent2.value.traceId : randomHexString(32);
    this.spanId = randomHexString(16);
    this.links = Array.from(links);
  }
  end(endTime, exit4) {
    this.status = {
      _tag: "Ended",
      endTime,
      exit: exit4,
      startTime: this.status.startTime
    };
  }
  attribute(key, value) {
    this.attributes.set(key, value);
  }
  event(name, startTime, attributes) {
    this.events.push([name, startTime, attributes ?? {}]);
  }
  addLinks(links) {
    this.links.push(...links);
  }
};
var nativeTracer = /* @__PURE__ */ make25({
  span: (name, parent2, context7, links, startTime, kind) => new NativeSpan(name, parent2, context7, links, startTime, kind),
  context: (f) => f()
});
var addSpanStackTrace = (options) => {
  if (options?.captureStackTrace === false) {
    return options;
  } else if (options?.captureStackTrace !== void 0 && typeof options.captureStackTrace !== "boolean") {
    return options;
  }
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 3;
  const traceError = new Error();
  Error.stackTraceLimit = limit;
  let cache = false;
  return {
    ...options,
    captureStackTrace: () => {
      if (cache !== false) {
        return cache;
      }
      if (traceError.stack !== void 0) {
        const stack = traceError.stack.split("\n");
        if (stack[3] !== void 0) {
          cache = stack[3].trim();
          return cache;
        }
      }
    }
  };
};
var DisablePropagation = /* @__PURE__ */ Reference2()("effect/Tracer/DisablePropagation", {
  defaultValue: constFalse
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/defaultServices.js
var liveServices = /* @__PURE__ */ pipe(/* @__PURE__ */ empty6(), /* @__PURE__ */ add2(clockTag, /* @__PURE__ */ make22()), /* @__PURE__ */ add2(consoleTag, defaultConsole), /* @__PURE__ */ add2(randomTag, /* @__PURE__ */ make24(/* @__PURE__ */ Math.random())), /* @__PURE__ */ add2(configProviderTag, /* @__PURE__ */ fromEnv()), /* @__PURE__ */ add2(tracerTag, nativeTracer));
var currentServices = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/DefaultServices/currentServices"), () => fiberRefUnsafeMakeContext(liveServices));
var sleep = (duration2) => {
  const decodedDuration = decode(duration2);
  return clockWith((clock3) => clock3.sleep(decodedDuration));
};
var defaultServicesWith = (f) => withFiberRuntime((fiber) => f(fiber.currentDefaultServices));
var clockWith = (f) => defaultServicesWith((services) => f(services.unsafeMap.get(clockTag.key)));
var currentTimeMillis = /* @__PURE__ */ clockWith((clock3) => clock3.currentTimeMillis);
var currentTimeNanos = /* @__PURE__ */ clockWith((clock3) => clock3.currentTimeNanos);
var withClock = /* @__PURE__ */ dual(2, (effect4, c) => fiberRefLocallyWith(currentServices, add2(clockTag, c))(effect4));
var withConfigProvider = /* @__PURE__ */ dual(2, (self, provider) => fiberRefLocallyWith(currentServices, add2(configProviderTag, provider))(self));
var configProviderWith = (f) => defaultServicesWith((services) => f(services.unsafeMap.get(configProviderTag.key)));
var randomWith = (f) => defaultServicesWith((services) => f(services.unsafeMap.get(randomTag.key)));
var withRandom = /* @__PURE__ */ dual(2, (effect4, value) => fiberRefLocallyWith(currentServices, add2(randomTag, value))(effect4));
var tracerWith = (f) => defaultServicesWith((services) => f(services.unsafeMap.get(tracerTag.key)));
var withTracer = /* @__PURE__ */ dual(2, (effect4, value) => fiberRefLocallyWith(currentServices, add2(tracerTag, value))(effect4));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Clock.js
var sleep2 = sleep;
var currentTimeMillis2 = currentTimeMillis;
var currentTimeNanos2 = currentTimeNanos;
var clockWith2 = clockWith;
var Clock = clockTag;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/fiberRefs.js
function unsafeMake4(fiberRefLocals) {
  return new FiberRefsImpl(fiberRefLocals);
}
function empty23() {
  return unsafeMake4(/* @__PURE__ */ new Map());
}
var FiberRefsSym = /* @__PURE__ */ Symbol.for("effect/FiberRefs");
var FiberRefsImpl = class {
  locals;
  [FiberRefsSym] = FiberRefsSym;
  constructor(locals) {
    this.locals = locals;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var findAncestor = (_ref, _parentStack, _childStack, _childModified = false) => {
  const ref = _ref;
  let parentStack = _parentStack;
  let childStack = _childStack;
  let childModified = _childModified;
  let ret = void 0;
  while (ret === void 0) {
    if (isNonEmptyReadonlyArray(parentStack) && isNonEmptyReadonlyArray(childStack)) {
      const parentFiberId = headNonEmpty(parentStack)[0];
      const parentAncestors = tailNonEmpty(parentStack);
      const childFiberId = headNonEmpty(childStack)[0];
      const childRefValue = headNonEmpty(childStack)[1];
      const childAncestors = tailNonEmpty(childStack);
      if (parentFiberId.startTimeMillis < childFiberId.startTimeMillis) {
        childStack = childAncestors;
        childModified = true;
      } else if (parentFiberId.startTimeMillis > childFiberId.startTimeMillis) {
        parentStack = parentAncestors;
      } else {
        if (parentFiberId.id < childFiberId.id) {
          childStack = childAncestors;
          childModified = true;
        } else if (parentFiberId.id > childFiberId.id) {
          parentStack = parentAncestors;
        } else {
          ret = [childRefValue, childModified];
        }
      }
    } else {
      ret = [ref.initial, true];
    }
  }
  return ret;
};
var joinAs = /* @__PURE__ */ dual(3, (self, fiberId3, that) => {
  const parentFiberRefs = new Map(self.locals);
  that.locals.forEach((childStack, fiberRef) => {
    const childValue = childStack[0][1];
    if (!childStack[0][0][symbol2](fiberId3)) {
      if (!parentFiberRefs.has(fiberRef)) {
        if (equals(childValue, fiberRef.initial)) {
          return;
        }
        parentFiberRefs.set(fiberRef, [[fiberId3, fiberRef.join(fiberRef.initial, childValue)]]);
        return;
      }
      const parentStack = parentFiberRefs.get(fiberRef);
      const [ancestor, wasModified] = findAncestor(fiberRef, parentStack, childStack);
      if (wasModified) {
        const patch9 = fiberRef.diff(ancestor, childValue);
        const oldValue = parentStack[0][1];
        const newValue = fiberRef.join(oldValue, fiberRef.patch(patch9)(oldValue));
        if (!equals(oldValue, newValue)) {
          let newStack;
          const parentFiberId = parentStack[0][0];
          if (parentFiberId[symbol2](fiberId3)) {
            newStack = [[parentFiberId, newValue], ...parentStack.slice(1)];
          } else {
            newStack = [[fiberId3, newValue], ...parentStack];
          }
          parentFiberRefs.set(fiberRef, newStack);
        }
      }
    }
  });
  return new FiberRefsImpl(parentFiberRefs);
});
var forkAs = /* @__PURE__ */ dual(2, (self, childId) => {
  const map28 = /* @__PURE__ */ new Map();
  unsafeForkAs(self, map28, childId);
  return new FiberRefsImpl(map28);
});
var unsafeForkAs = (self, map28, fiberId3) => {
  self.locals.forEach((stack, fiberRef) => {
    const oldValue = stack[0][1];
    const newValue = fiberRef.patch(fiberRef.fork)(oldValue);
    if (equals(oldValue, newValue)) {
      map28.set(fiberRef, stack);
    } else {
      map28.set(fiberRef, [[fiberId3, newValue], ...stack]);
    }
  });
};
var fiberRefs = (self) => fromIterable6(self.locals.keys());
var setAll = (self) => forEachSequentialDiscard(fiberRefs(self), (fiberRef) => fiberRefSet(fiberRef, getOrDefault(self, fiberRef)));
var delete_ = /* @__PURE__ */ dual(2, (self, fiberRef) => {
  const locals = new Map(self.locals);
  locals.delete(fiberRef);
  return new FiberRefsImpl(locals);
});
var get10 = /* @__PURE__ */ dual(2, (self, fiberRef) => {
  if (!self.locals.has(fiberRef)) {
    return none2();
  }
  return some2(headNonEmpty(self.locals.get(fiberRef))[1]);
});
var getOrDefault = /* @__PURE__ */ dual(2, (self, fiberRef) => pipe(get10(self, fiberRef), getOrElse(() => fiberRef.initial)));
var updateAs = /* @__PURE__ */ dual(2, (self, {
  fiberId: fiberId3,
  fiberRef,
  value
}) => {
  if (self.locals.size === 0) {
    return new FiberRefsImpl(/* @__PURE__ */ new Map([[fiberRef, [[fiberId3, value]]]]));
  }
  const locals = new Map(self.locals);
  unsafeUpdateAs(locals, fiberId3, fiberRef, value);
  return new FiberRefsImpl(locals);
});
var unsafeUpdateAs = (locals, fiberId3, fiberRef, value) => {
  const oldStack = locals.get(fiberRef) ?? [];
  let newStack;
  if (isNonEmptyReadonlyArray(oldStack)) {
    const [currentId, currentValue] = headNonEmpty(oldStack);
    if (currentId[symbol2](fiberId3)) {
      if (equals(currentValue, value)) {
        return;
      } else {
        newStack = [[fiberId3, value], ...oldStack.slice(1)];
      }
    } else {
      newStack = [[fiberId3, value], ...oldStack];
    }
  } else {
    newStack = [[fiberId3, value]];
  }
  locals.set(fiberRef, newStack);
};
var updateManyAs = /* @__PURE__ */ dual(2, (self, {
  entries: entries2,
  forkAs: forkAs2
}) => {
  if (self.locals.size === 0) {
    return new FiberRefsImpl(new Map(entries2));
  }
  const locals = new Map(self.locals);
  if (forkAs2 !== void 0) {
    unsafeForkAs(self, locals, forkAs2);
  }
  entries2.forEach(([fiberRef, values4]) => {
    if (values4.length === 1) {
      unsafeUpdateAs(locals, values4[0][0], fiberRef, values4[0][1]);
    } else {
      values4.forEach(([fiberId3, value]) => {
        unsafeUpdateAs(locals, fiberId3, fiberRef, value);
      });
    }
  });
  return new FiberRefsImpl(locals);
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/FiberRefs.js
var get11 = get10;
var getOrDefault2 = getOrDefault;
var joinAs2 = joinAs;
var setAll2 = setAll;
var updateManyAs2 = updateManyAs;
var empty24 = empty23;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/LogLevel.js
var LogLevel_exports = {};
__export(LogLevel_exports, {
  All: () => All,
  Debug: () => Debug,
  Error: () => Error2,
  Fatal: () => Fatal,
  Info: () => Info,
  None: () => None3,
  Order: () => Order2,
  Trace: () => Trace,
  Warning: () => Warning,
  allLevels: () => allLevels,
  fromLiteral: () => fromLiteral,
  greaterThan: () => greaterThan3,
  greaterThanEqual: () => greaterThanEqual,
  lessThan: () => lessThan2,
  lessThanEqual: () => lessThanEqual,
  locally: () => locally
});
var All = logLevelAll;
var Fatal = logLevelFatal;
var Error2 = logLevelError;
var Warning = logLevelWarning;
var Info = logLevelInfo;
var Debug = logLevelDebug;
var Trace = logLevelTrace;
var None3 = logLevelNone;
var allLevels = allLogLevels;
var locally = /* @__PURE__ */ dual(2, (use2, self) => fiberRefLocally(use2, currentLogLevel, self));
var Order2 = /* @__PURE__ */ pipe(Order, /* @__PURE__ */ mapInput2((level) => level.ordinal));
var lessThan2 = /* @__PURE__ */ lessThan(Order2);
var lessThanEqual = /* @__PURE__ */ lessThanOrEqualTo(Order2);
var greaterThan3 = /* @__PURE__ */ greaterThan(Order2);
var greaterThanEqual = /* @__PURE__ */ greaterThanOrEqualTo(Order2);
var fromLiteral = (literal) => {
  switch (literal) {
    case "All":
      return All;
    case "Debug":
      return Debug;
    case "Error":
      return Error2;
    case "Fatal":
      return Fatal;
    case "Info":
      return Info;
    case "Trace":
      return Trace;
    case "None":
      return None3;
    case "Warning":
      return Warning;
  }
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/logSpan.js
var make26 = (label, startTime) => ({
  label,
  startTime
});
var formatLabel = (key) => key.replace(/[\s="]/g, "_");
var render = (now) => (self) => {
  const label = formatLabel(self.label);
  return `${label}=${now - self.startTime}ms`;
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/LogSpan.js
var make27 = make26;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Effectable.js
var EffectPrototype2 = EffectPrototype;
var CommitPrototype2 = CommitPrototype;
var Base2 = Base;
var Class2 = class extends Base2 {
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Readable.js
var TypeId13 = /* @__PURE__ */ Symbol.for("effect/Readable");

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/ref.js
var RefTypeId = /* @__PURE__ */ Symbol.for("effect/Ref");
var refVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
var RefImpl = class extends Class2 {
  ref;
  commit() {
    return this.get;
  }
  [RefTypeId] = refVariance;
  [TypeId13] = TypeId13;
  constructor(ref) {
    super();
    this.ref = ref;
    this.get = sync(() => get7(this.ref));
  }
  get;
  modify(f) {
    return sync(() => {
      const current2 = get7(this.ref);
      const [b, a] = f(current2);
      if (current2 !== a) {
        set3(a)(this.ref);
      }
      return b;
    });
  }
};
var unsafeMake5 = (value) => new RefImpl(make12(value));
var make28 = (value) => sync(() => unsafeMake5(value));
var get12 = (self) => self.get;
var set6 = /* @__PURE__ */ dual(2, (self, value) => self.modify(() => [void 0, value]));
var getAndSet = /* @__PURE__ */ dual(2, (self, value) => self.modify((a) => [a, value]));
var modify4 = /* @__PURE__ */ dual(2, (self, f) => self.modify(f));
var update2 = /* @__PURE__ */ dual(2, (self, f) => self.modify((a) => [void 0, f(a)]));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Ref.js
var RefTypeId2 = RefTypeId;
var make29 = make28;
var get13 = get12;
var getAndSet2 = getAndSet;
var modify5 = modify4;
var set7 = set6;
var update3 = update2;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Tracer.js
var tracerWith2 = tracerWith;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/fiberRefs/patch.js
var OP_EMPTY2 = "Empty";
var OP_ADD = "Add";
var OP_REMOVE = "Remove";
var OP_UPDATE = "Update";
var OP_AND_THEN = "AndThen";
var empty25 = {
  _tag: OP_EMPTY2
};
var diff5 = (oldValue, newValue) => {
  const missingLocals = new Map(oldValue.locals);
  let patch9 = empty25;
  for (const [fiberRef, pairs] of newValue.locals.entries()) {
    const newValue2 = headNonEmpty(pairs)[1];
    const old = missingLocals.get(fiberRef);
    if (old !== void 0) {
      const oldValue2 = headNonEmpty(old)[1];
      if (!equals(oldValue2, newValue2)) {
        patch9 = combine7({
          _tag: OP_UPDATE,
          fiberRef,
          patch: fiberRef.diff(oldValue2, newValue2)
        })(patch9);
      }
    } else {
      patch9 = combine7({
        _tag: OP_ADD,
        fiberRef,
        value: newValue2
      })(patch9);
    }
    missingLocals.delete(fiberRef);
  }
  for (const [fiberRef] of missingLocals.entries()) {
    patch9 = combine7({
      _tag: OP_REMOVE,
      fiberRef
    })(patch9);
  }
  return patch9;
};
var combine7 = /* @__PURE__ */ dual(2, (self, that) => ({
  _tag: OP_AND_THEN,
  first: self,
  second: that
}));
var patch6 = /* @__PURE__ */ dual(3, (self, fiberId3, oldValue) => {
  let fiberRefs3 = oldValue;
  let patches = of(self);
  while (isNonEmptyReadonlyArray(patches)) {
    const head6 = headNonEmpty(patches);
    const tail2 = tailNonEmpty(patches);
    switch (head6._tag) {
      case OP_EMPTY2: {
        patches = tail2;
        break;
      }
      case OP_ADD: {
        fiberRefs3 = updateAs(fiberRefs3, {
          fiberId: fiberId3,
          fiberRef: head6.fiberRef,
          value: head6.value
        });
        patches = tail2;
        break;
      }
      case OP_REMOVE: {
        fiberRefs3 = delete_(fiberRefs3, head6.fiberRef);
        patches = tail2;
        break;
      }
      case OP_UPDATE: {
        const value = getOrDefault(fiberRefs3, head6.fiberRef);
        fiberRefs3 = updateAs(fiberRefs3, {
          fiberId: fiberId3,
          fiberRef: head6.fiberRef,
          value: head6.fiberRef.patch(head6.patch)(value)
        });
        patches = tail2;
        break;
      }
      case OP_AND_THEN: {
        patches = prepend(head6.first)(prepend(head6.second)(tail2));
        break;
      }
    }
  }
  return fiberRefs3;
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/metric/label.js
var MetricLabelSymbolKey = "effect/MetricLabel";
var MetricLabelTypeId = /* @__PURE__ */ Symbol.for(MetricLabelSymbolKey);
var MetricLabelImpl = class {
  key;
  value;
  [MetricLabelTypeId] = MetricLabelTypeId;
  _hash;
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this._hash = string(MetricLabelSymbolKey + this.key + this.value);
  }
  [symbol]() {
    return this._hash;
  }
  [symbol2](that) {
    return isMetricLabel(that) && this.key === that.key && this.value === that.value;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var make30 = (key, value) => {
  return new MetricLabelImpl(key, value);
};
var isMetricLabel = (u) => hasProperty(u, MetricLabelTypeId);

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/core-effect.js
var annotateLogs = /* @__PURE__ */ dual((args2) => isEffect(args2[0]), function() {
  const args2 = arguments;
  return fiberRefLocallyWith(args2[0], currentLogAnnotations, typeof args2[1] === "string" ? set4(args2[1], args2[2]) : (annotations2) => Object.entries(args2[1]).reduce((acc, [key, value]) => set4(acc, key, value), annotations2));
});
var asSome = (self) => map11(self, some2);
var asSomeError = (self) => mapError(self, some2);
var try_ = (arg) => {
  let evaluate3;
  let onFailure = void 0;
  if (typeof arg === "function") {
    evaluate3 = arg;
  } else {
    evaluate3 = arg.try;
    onFailure = arg.catch;
  }
  return suspend(() => {
    try {
      return succeed(internalCall(evaluate3));
    } catch (error) {
      return fail2(onFailure ? internalCall(() => onFailure(error)) : new UnknownException(error, "An unknown error occurred in Effect.try"));
    }
  });
};
var _catch = /* @__PURE__ */ dual(3, (self, tag2, options) => catchAll(self, (e) => {
  if (hasProperty(e, tag2) && e[tag2] === options.failure) {
    return options.onFailure(e);
  }
  return fail2(e);
}));
var catchAllDefect = /* @__PURE__ */ dual(2, (self, f) => catchAllCause(self, (cause3) => {
  const option3 = find(cause3, (_) => isDieType(_) ? some2(_) : none2());
  switch (option3._tag) {
    case "None": {
      return failCause(cause3);
    }
    case "Some": {
      return f(option3.value.defect);
    }
  }
}));
var catchSomeCause = /* @__PURE__ */ dual(2, (self, f) => matchCauseEffect(self, {
  onFailure: (cause3) => {
    const option3 = f(cause3);
    switch (option3._tag) {
      case "None": {
        return failCause(cause3);
      }
      case "Some": {
        return option3.value;
      }
    }
  },
  onSuccess: succeed
}));
var catchSomeDefect = /* @__PURE__ */ dual(2, (self, pf) => catchAllCause(self, (cause3) => {
  const option3 = find(cause3, (_) => isDieType(_) ? some2(_) : none2());
  switch (option3._tag) {
    case "None": {
      return failCause(cause3);
    }
    case "Some": {
      const optionEffect = pf(option3.value.defect);
      return optionEffect._tag === "Some" ? optionEffect.value : failCause(cause3);
    }
  }
}));
var catchTag = /* @__PURE__ */ dual((args2) => isEffect(args2[0]), (self, ...args2) => {
  const f = args2[args2.length - 1];
  let predicate;
  if (args2.length === 2) {
    predicate = isTagged(args2[0]);
  } else {
    predicate = (e) => {
      const tag2 = hasProperty(e, "_tag") ? e["_tag"] : void 0;
      if (!tag2) return false;
      for (let i = 0; i < args2.length - 1; i++) {
        if (args2[i] === tag2) return true;
      }
      return false;
    };
  }
  return catchIf(self, predicate, f);
});
var catchTags = /* @__PURE__ */ dual(2, (self, cases) => {
  let keys6;
  return catchIf(self, (e) => {
    keys6 ??= Object.keys(cases);
    return hasProperty(e, "_tag") && isString(e["_tag"]) && keys6.includes(e["_tag"]);
  }, (e) => cases[e["_tag"]](e));
});
var cause = (self) => matchCause(self, {
  onFailure: identity,
  onSuccess: () => empty19
});
var clockWith3 = clockWith2;
var clock = /* @__PURE__ */ clockWith3(succeed);
var delay = /* @__PURE__ */ dual(2, (self, duration2) => zipRight2(sleep2(duration2), self));
var descriptorWith = (f) => withFiberRuntime((state, status2) => f({
  id: state.id(),
  status: status2,
  interruptors: interruptors(state.getFiberRef(currentInterruptedCause))
}));
var allowInterrupt = /* @__PURE__ */ descriptorWith((descriptor3) => size4(descriptor3.interruptors) > 0 ? interrupt2 : void_2);
var descriptor = /* @__PURE__ */ descriptorWith(succeed);
var diffFiberRefs = (self) => summarized(self, fiberRefs2, diff5);
var diffFiberRefsAndRuntimeFlags = (self) => summarized(self, zip2(fiberRefs2, runtimeFlags), ([refs, flags], [refsNew, flagsNew]) => [diff5(refs, refsNew), diff4(flags, flagsNew)]);
var Do3 = /* @__PURE__ */ succeed({});
var bind4 = /* @__PURE__ */ bind(map11, flatMap8);
var bindTo4 = /* @__PURE__ */ bindTo(map11);
var let_4 = /* @__PURE__ */ let_(map11);
var dropUntil = /* @__PURE__ */ dual(2, (elements, predicate) => suspend(() => {
  const iterator = elements[Symbol.iterator]();
  const builder = [];
  let next;
  let dropping7 = succeed(false);
  let i = 0;
  while ((next = iterator.next()) && !next.done) {
    const a = next.value;
    const index = i++;
    dropping7 = flatMap8(dropping7, (bool) => {
      if (bool) {
        builder.push(a);
        return succeed(true);
      }
      return predicate(a, index);
    });
  }
  return map11(dropping7, () => builder);
}));
var dropWhile3 = /* @__PURE__ */ dual(2, (elements, predicate) => suspend(() => {
  const iterator = elements[Symbol.iterator]();
  const builder = [];
  let next;
  let dropping7 = succeed(true);
  let i = 0;
  while ((next = iterator.next()) && !next.done) {
    const a = next.value;
    const index = i++;
    dropping7 = flatMap8(dropping7, (d) => map11(d ? predicate(a, index) : succeed(false), (b) => {
      if (!b) {
        builder.push(a);
      }
      return b;
    }));
  }
  return map11(dropping7, () => builder);
}));
var contextWith = (f) => map11(context(), f);
var eventually = (self) => orElse2(self, () => flatMap8(yieldNow(), () => eventually(self)));
var filterMap6 = /* @__PURE__ */ dual(2, (elements, pf) => map11(forEachSequential(elements, identity), filterMap3(pf)));
var filterOrDie = /* @__PURE__ */ dual(3, (self, predicate, orDieWith6) => filterOrElse(self, predicate, (a) => dieSync(() => orDieWith6(a))));
var filterOrDieMessage = /* @__PURE__ */ dual(3, (self, predicate, message) => filterOrElse(self, predicate, () => dieMessage(message)));
var filterOrElse = /* @__PURE__ */ dual(3, (self, predicate, orElse11) => flatMap8(self, (a) => predicate(a) ? succeed(a) : orElse11(a)));
var liftPredicate3 = /* @__PURE__ */ dual(3, (self, predicate, orFailWith) => suspend(() => predicate(self) ? succeed(self) : fail2(orFailWith(self))));
var filterOrFail = /* @__PURE__ */ dual((args2) => isEffect(args2[0]), (self, predicate, orFailWith) => filterOrElse(self, predicate, (a) => orFailWith === void 0 ? fail2(new NoSuchElementException()) : failSync(() => orFailWith(a))));
var findFirst6 = /* @__PURE__ */ dual(2, (elements, predicate) => suspend(() => {
  const iterator = elements[Symbol.iterator]();
  const next = iterator.next();
  if (!next.done) {
    return findLoop(iterator, 0, predicate, next.value);
  }
  return succeed(none2());
}));
var findLoop = (iterator, index, f, value) => flatMap8(f(value, index), (result) => {
  if (result) {
    return succeed(some2(value));
  }
  const next = iterator.next();
  if (!next.done) {
    return findLoop(iterator, index + 1, f, next.value);
  }
  return succeed(none2());
});
var firstSuccessOf = (effects) => suspend(() => {
  const list = fromIterable3(effects);
  if (!isNonEmpty2(list)) {
    return dieSync(() => new IllegalArgumentException(`Received an empty collection of effects`));
  }
  return pipe(tailNonEmpty2(list), reduce2(headNonEmpty2(list), (left3, right3) => orElse2(left3, () => right3)));
});
var flipWith = /* @__PURE__ */ dual(2, (self, f) => flip(f(flip(self))));
var match7 = /* @__PURE__ */ dual(2, (self, options) => matchEffect(self, {
  onFailure: (e) => succeed(options.onFailure(e)),
  onSuccess: (a) => succeed(options.onSuccess(a))
}));
var every6 = /* @__PURE__ */ dual(2, (elements, predicate) => suspend(() => forAllLoop(elements[Symbol.iterator](), 0, predicate)));
var forAllLoop = (iterator, index, f) => {
  const next = iterator.next();
  return next.done ? succeed(true) : flatMap8(f(next.value, index), (b) => b ? forAllLoop(iterator, index + 1, f) : succeed(b));
};
var forever = (self) => {
  const loop3 = flatMap8(flatMap8(self, () => yieldNow()), () => loop3);
  return loop3;
};
var fiberRefs2 = /* @__PURE__ */ withFiberRuntime((state) => succeed(state.getFiberRefs()));
var head3 = (self) => flatMap8(self, (as11) => {
  const iterator = as11[Symbol.iterator]();
  const next = iterator.next();
  if (next.done) {
    return fail2(new NoSuchElementException());
  }
  return succeed(next.value);
});
var ignore = (self) => match7(self, {
  onFailure: constVoid,
  onSuccess: constVoid
});
var ignoreLogged = (self) => matchCauseEffect(self, {
  onFailure: (cause3) => logDebug(cause3, "An error was silently ignored because it is not anticipated to be useful"),
  onSuccess: () => void_2
});
var inheritFiberRefs = (childFiberRefs) => updateFiberRefs((parentFiberId, parentFiberRefs) => joinAs2(parentFiberRefs, parentFiberId, childFiberRefs));
var isFailure2 = (self) => match7(self, {
  onFailure: constTrue,
  onSuccess: constFalse
});
var isSuccess2 = (self) => match7(self, {
  onFailure: constFalse,
  onSuccess: constTrue
});
var iterate = (initial, options) => suspend(() => {
  if (options.while(initial)) {
    return flatMap8(options.body(initial), (z2) => iterate(z2, options));
  }
  return succeed(initial);
});
var logWithLevel = (level) => (...message) => {
  const levelOption = fromNullable(level);
  let cause3 = void 0;
  for (let i = 0, len = message.length; i < len; i++) {
    const msg = message[i];
    if (isCause(msg)) {
      if (cause3 !== void 0) {
        cause3 = sequential(cause3, msg);
      } else {
        cause3 = msg;
      }
      message = [...message.slice(0, i), ...message.slice(i + 1)];
      i--;
    }
  }
  if (cause3 === void 0) {
    cause3 = empty19;
  }
  return withFiberRuntime((fiberState) => {
    fiberState.log(message, cause3, levelOption);
    return void_2;
  });
};
var log = /* @__PURE__ */ logWithLevel();
var logTrace = /* @__PURE__ */ logWithLevel(Trace);
var logDebug = /* @__PURE__ */ logWithLevel(Debug);
var logInfo = /* @__PURE__ */ logWithLevel(Info);
var logWarning = /* @__PURE__ */ logWithLevel(Warning);
var logError = /* @__PURE__ */ logWithLevel(Error2);
var logFatal = /* @__PURE__ */ logWithLevel(Fatal);
var withLogSpan = /* @__PURE__ */ dual(2, (effect4, label) => flatMap8(currentTimeMillis2, (now) => fiberRefLocallyWith(effect4, currentLogSpan, prepend3(make27(label, now)))));
var logAnnotations = /* @__PURE__ */ fiberRefGet(currentLogAnnotations);
var loop = (initial, options) => options.discard ? loopDiscard(initial, options.while, options.step, options.body) : map11(loopInternal(initial, options.while, options.step, options.body), fromIterable2);
var loopInternal = (initial, cont, inc, body) => suspend(() => cont(initial) ? flatMap8(body(initial), (a) => map11(loopInternal(inc(initial), cont, inc, body), prepend3(a))) : sync(() => empty12()));
var loopDiscard = (initial, cont, inc, body) => suspend(() => cont(initial) ? flatMap8(body(initial), () => loopDiscard(inc(initial), cont, inc, body)) : void_2);
var mapAccum3 = /* @__PURE__ */ dual(3, (elements, initial, f) => suspend(() => {
  const iterator = elements[Symbol.iterator]();
  const builder = [];
  let result = succeed(initial);
  let next;
  let i = 0;
  while (!(next = iterator.next()).done) {
    const index = i++;
    const value = next.value;
    result = flatMap8(result, (state) => map11(f(state, value, index), ([z, b]) => {
      builder.push(b);
      return z;
    }));
  }
  return map11(result, (z) => [z, builder]);
}));
var mapErrorCause = /* @__PURE__ */ dual(2, (self, f) => matchCauseEffect(self, {
  onFailure: (c) => failCauseSync(() => f(c)),
  onSuccess: succeed
}));
var memoize = (self) => pipe(deferredMake(), flatMap8((deferred) => pipe(diffFiberRefsAndRuntimeFlags(self), intoDeferred(deferred), once, map11((complete3) => zipRight2(complete3, pipe(deferredAwait(deferred), flatMap8(([patch9, a]) => as2(zip2(patchFiberRefs(patch9[0]), updateRuntimeFlags(patch9[1])), a))))))));
var merge5 = (self) => matchEffect(self, {
  onFailure: (e) => succeed(e),
  onSuccess: succeed
});
var negate = (self) => map11(self, (b) => !b);
var none6 = (self) => flatMap8(self, (option3) => {
  switch (option3._tag) {
    case "None":
      return void_2;
    case "Some":
      return fail2(new NoSuchElementException());
  }
});
var once = (self) => map11(make29(true), (ref) => asVoid2(whenEffect(self, getAndSet2(ref, false))));
var option = (self) => matchEffect(self, {
  onFailure: () => succeed(none2()),
  onSuccess: (a) => succeed(some2(a))
});
var orElseFail = /* @__PURE__ */ dual(2, (self, evaluate3) => orElse2(self, () => failSync(evaluate3)));
var orElseSucceed = /* @__PURE__ */ dual(2, (self, evaluate3) => orElse2(self, () => sync(evaluate3)));
var parallelErrors = (self) => matchCauseEffect(self, {
  onFailure: (cause3) => {
    const errors = fromIterable2(failures(cause3));
    return errors.length === 0 ? failCause(cause3) : fail2(errors);
  },
  onSuccess: succeed
});
var patchFiberRefs = (patch9) => updateFiberRefs((fiberId3, fiberRefs3) => pipe(patch9, patch6(fiberId3, fiberRefs3)));
var promise = (evaluate3) => evaluate3.length >= 1 ? async_((resolve, signal) => {
  try {
    evaluate3(signal).then((a) => resolve(exitSucceed(a)), (e) => resolve(exitDie(e)));
  } catch (e) {
    resolve(exitDie(e));
  }
}) : async_((resolve) => {
  try {
    evaluate3().then((a) => resolve(exitSucceed(a)), (e) => resolve(exitDie(e)));
  } catch (e) {
    resolve(exitDie(e));
  }
});
var provideService = /* @__PURE__ */ dual(3, (self, tag2, service3) => contextWithEffect((env) => provideContext(self, add2(env, tag2, service3))));
var provideServiceEffect = /* @__PURE__ */ dual(3, (self, tag2, effect4) => contextWithEffect((env) => flatMap8(effect4, (service3) => provideContext(self, pipe(env, add2(tag2, service3))))));
var random2 = /* @__PURE__ */ randomWith(succeed);
var reduce10 = /* @__PURE__ */ dual(3, (elements, zero2, f) => fromIterable2(elements).reduce((acc, el, i) => flatMap8(acc, (a) => f(a, el, i)), succeed(zero2)));
var reduceRight3 = /* @__PURE__ */ dual(3, (elements, zero2, f) => fromIterable2(elements).reduceRight((acc, el, i) => flatMap8(acc, (a) => f(el, a, i)), succeed(zero2)));
var reduceWhile = /* @__PURE__ */ dual(3, (elements, zero2, options) => flatMap8(sync(() => elements[Symbol.iterator]()), (iterator) => reduceWhileLoop(iterator, 0, zero2, options.while, options.body)));
var reduceWhileLoop = (iterator, index, state, predicate, f) => {
  const next = iterator.next();
  if (!next.done && predicate(state)) {
    return flatMap8(f(state, next.value, index), (nextState) => reduceWhileLoop(iterator, index + 1, nextState, predicate, f));
  }
  return succeed(state);
};
var repeatN = /* @__PURE__ */ dual(2, (self, n) => suspend(() => repeatNLoop(self, n)));
var repeatNLoop = (self, n) => flatMap8(self, (a) => n <= 0 ? succeed(a) : zipRight2(yieldNow(), repeatNLoop(self, n - 1)));
var sandbox = (self) => matchCauseEffect(self, {
  onFailure: fail2,
  onSuccess: succeed
});
var setFiberRefs = (fiberRefs3) => suspend(() => setAll2(fiberRefs3));
var sleep3 = sleep2;
var succeedNone = /* @__PURE__ */ succeed(/* @__PURE__ */ none2());
var succeedSome = (value) => succeed(some2(value));
var summarized = /* @__PURE__ */ dual(3, (self, summary5, f) => flatMap8(summary5, (start3) => flatMap8(self, (value) => map11(summary5, (end6) => [f(start3, end6), value]))));
var tagMetrics = /* @__PURE__ */ dual((args2) => isEffect(args2[0]), function() {
  return labelMetrics(arguments[0], typeof arguments[1] === "string" ? [make30(arguments[1], arguments[2])] : Object.entries(arguments[1]).map(([k, v]) => make30(k, v)));
});
var labelMetrics = /* @__PURE__ */ dual(2, (self, labels) => fiberRefLocallyWith(self, currentMetricLabels, (old) => union2(old, labels)));
var takeUntil = /* @__PURE__ */ dual(2, (elements, predicate) => suspend(() => {
  const iterator = elements[Symbol.iterator]();
  const builder = [];
  let next;
  let effect4 = succeed(false);
  let i = 0;
  while ((next = iterator.next()) && !next.done) {
    const a = next.value;
    const index = i++;
    effect4 = flatMap8(effect4, (bool) => {
      if (bool) {
        return succeed(true);
      }
      builder.push(a);
      return predicate(a, index);
    });
  }
  return map11(effect4, () => builder);
}));
var takeWhile3 = /* @__PURE__ */ dual(2, (elements, predicate) => suspend(() => {
  const iterator = elements[Symbol.iterator]();
  const builder = [];
  let next;
  let taking = succeed(true);
  let i = 0;
  while ((next = iterator.next()) && !next.done) {
    const a = next.value;
    const index = i++;
    taking = flatMap8(taking, (taking2) => pipe(taking2 ? predicate(a, index) : succeed(false), map11((bool) => {
      if (bool) {
        builder.push(a);
      }
      return bool;
    })));
  }
  return map11(taking, () => builder);
}));
var tapBoth = /* @__PURE__ */ dual(2, (self, {
  onFailure,
  onSuccess
}) => matchCauseEffect(self, {
  onFailure: (cause3) => {
    const either7 = failureOrCause(cause3);
    switch (either7._tag) {
      case "Left": {
        return zipRight2(onFailure(either7.left), failCause(cause3));
      }
      case "Right": {
        return failCause(cause3);
      }
    }
  },
  onSuccess: (a) => as2(onSuccess(a), a)
}));
var tapDefect = /* @__PURE__ */ dual(2, (self, f) => catchAllCause(self, (cause3) => match2(keepDefects(cause3), {
  onNone: () => failCause(cause3),
  onSome: (a) => zipRight2(f(a), failCause(cause3))
})));
var tapError = /* @__PURE__ */ dual(2, (self, f) => matchCauseEffect(self, {
  onFailure: (cause3) => {
    const either7 = failureOrCause(cause3);
    switch (either7._tag) {
      case "Left":
        return zipRight2(f(either7.left), failCause(cause3));
      case "Right":
        return failCause(cause3);
    }
  },
  onSuccess: succeed
}));
var tapErrorTag = /* @__PURE__ */ dual(3, (self, k, f) => tapError(self, (e) => {
  if (isTagged(e, k)) {
    return f(e);
  }
  return void_2;
}));
var tapErrorCause = /* @__PURE__ */ dual(2, (self, f) => matchCauseEffect(self, {
  onFailure: (cause3) => zipRight2(f(cause3), failCause(cause3)),
  onSuccess: succeed
}));
var timed = (self) => timedWith(self, currentTimeNanos2);
var timedWith = /* @__PURE__ */ dual(2, (self, nanos2) => summarized(self, nanos2, (start3, end6) => nanos(end6 - start3)));
var tracerWith3 = tracerWith2;
var tracer = /* @__PURE__ */ tracerWith3(succeed);
var tryPromise = (arg) => {
  let evaluate3;
  let catcher = void 0;
  if (typeof arg === "function") {
    evaluate3 = arg;
  } else {
    evaluate3 = arg.try;
    catcher = arg.catch;
  }
  const fail18 = (e) => catcher ? failSync(() => catcher(e)) : fail2(new UnknownException(e, "An unknown error occurred in Effect.tryPromise"));
  if (evaluate3.length >= 1) {
    return async_((resolve, signal) => {
      try {
        evaluate3(signal).then((a) => resolve(exitSucceed(a)), (e) => resolve(fail18(e)));
      } catch (e) {
        resolve(fail18(e));
      }
    });
  }
  return async_((resolve) => {
    try {
      evaluate3().then((a) => resolve(exitSucceed(a)), (e) => resolve(fail18(e)));
    } catch (e) {
      resolve(fail18(e));
    }
  });
};
var tryMap = /* @__PURE__ */ dual(2, (self, options) => flatMap8(self, (a) => try_({
  try: () => options.try(a),
  catch: options.catch
})));
var tryMapPromise = /* @__PURE__ */ dual(2, (self, options) => flatMap8(self, (a) => tryPromise({
  try: options.try.length >= 1 ? (signal) => options.try(a, signal) : () => options.try(a),
  catch: options.catch
})));
var unless = /* @__PURE__ */ dual(2, (self, condition) => suspend(() => condition() ? succeedNone : asSome(self)));
var unlessEffect = /* @__PURE__ */ dual(2, (self, condition) => flatMap8(condition, (b) => b ? succeedNone : asSome(self)));
var unsandbox = (self) => mapErrorCause(self, flatten6);
var updateFiberRefs = (f) => withFiberRuntime((state) => {
  state.setFiberRefs(f(state.id(), state.getFiberRefs()));
  return void_2;
});
var updateService = /* @__PURE__ */ dual(3, (self, tag2, f) => mapInputContext(self, (context7) => add2(context7, tag2, f(unsafeGet3(context7, tag2)))));
var when = /* @__PURE__ */ dual(2, (self, condition) => suspend(() => condition() ? map11(self, some2) : succeed(none2())));
var whenFiberRef = /* @__PURE__ */ dual(3, (self, fiberRef, predicate) => flatMap8(fiberRefGet(fiberRef), (s) => predicate(s) ? map11(self, (a) => [s, some2(a)]) : succeed([s, none2()])));
var whenRef = /* @__PURE__ */ dual(3, (self, ref, predicate) => flatMap8(get13(ref), (s) => predicate(s) ? map11(self, (a) => [s, some2(a)]) : succeed([s, none2()])));
var withMetric = /* @__PURE__ */ dual(2, (self, metric) => metric(self));
var serviceFunctionEffect = (getService, f) => (...args2) => flatMap8(getService, (a) => f(a)(...args2));
var serviceFunction = (getService, f) => (...args2) => map11(getService, (a) => f(a)(...args2));
var serviceFunctions = (getService) => new Proxy({}, {
  get(_target, prop3, _receiver) {
    return (...args2) => flatMap8(getService, (s) => s[prop3](...args2));
  }
});
var serviceConstants = (getService) => new Proxy({}, {
  get(_target, prop3, _receiver) {
    return flatMap8(getService, (s) => isEffect(s[prop3]) ? s[prop3] : succeed(s[prop3]));
  }
});
var serviceMembers = (getService) => ({
  functions: serviceFunctions(getService),
  constants: serviceConstants(getService)
});
var serviceOption = (tag2) => map11(context(), getOption2(tag2));
var serviceOptional = (tag2) => flatMap8(context(), getOption2(tag2));
var annotateCurrentSpan = function() {
  const args2 = arguments;
  return ignore(flatMap8(currentSpan, (span4) => sync(() => {
    if (typeof args2[0] === "string") {
      span4.attribute(args2[0], args2[1]);
    } else {
      for (const key in args2[0]) {
        span4.attribute(key, args2[0][key]);
      }
    }
  })));
};
var linkSpanCurrent = function() {
  const args2 = arguments;
  const links = Array.isArray(args2[0]) ? args2[0] : [{
    _tag: "SpanLink",
    span: args2[0],
    attributes: args2[1] ?? {}
  }];
  return ignore(flatMap8(currentSpan, (span4) => sync(() => span4.addLinks(links))));
};
var annotateSpans = /* @__PURE__ */ dual((args2) => isEffect(args2[0]), function() {
  const args2 = arguments;
  return fiberRefLocallyWith(args2[0], currentTracerSpanAnnotations, typeof args2[1] === "string" ? set4(args2[1], args2[2]) : (annotations2) => Object.entries(args2[1]).reduce((acc, [key, value]) => set4(acc, key, value), annotations2));
});
var currentParentSpan = /* @__PURE__ */ serviceOptional(spanTag);
var currentSpan = /* @__PURE__ */ flatMap8(/* @__PURE__ */ context(), (context7) => {
  const span4 = context7.unsafeMap.get(spanTag.key);
  return span4 !== void 0 && span4._tag === "Span" ? succeed(span4) : fail2(new NoSuchElementException());
});
var linkSpans = /* @__PURE__ */ dual((args2) => isEffect(args2[0]), (self, span4, attributes) => fiberRefLocallyWith(self, currentTracerSpanLinks, append2({
  _tag: "SpanLink",
  span: span4,
  attributes: attributes ?? {}
})));
var bigint02 = /* @__PURE__ */ BigInt(0);
var filterDisablePropagation = /* @__PURE__ */ flatMap((span4) => get4(span4.context, DisablePropagation) ? span4._tag === "Span" ? filterDisablePropagation(span4.parent) : none2() : some2(span4));
var unsafeMakeSpan = (fiber, name, options) => {
  const disablePropagation = !fiber.getFiberRef(currentTracerEnabled) || options.context && get4(options.context, DisablePropagation);
  const context7 = fiber.getFiberRef(currentContext);
  const parent2 = options.parent ? some2(options.parent) : options.root ? none2() : filterDisablePropagation(getOption2(context7, spanTag));
  let span4;
  if (disablePropagation) {
    span4 = noopSpan({
      name,
      parent: parent2,
      context: add2(options.context ?? empty6(), DisablePropagation, true)
    });
  } else {
    const services = fiber.getFiberRef(currentServices);
    const tracer3 = get4(services, tracerTag);
    const clock3 = get4(services, Clock);
    const timingEnabled = fiber.getFiberRef(currentTracerTimingEnabled);
    const fiberRefs3 = fiber.getFiberRefs();
    const annotationsFromEnv = get11(fiberRefs3, currentTracerSpanAnnotations);
    const linksFromEnv = get11(fiberRefs3, currentTracerSpanLinks);
    const links = linksFromEnv._tag === "Some" ? options.links !== void 0 ? [...toReadonlyArray(linksFromEnv.value), ...options.links ?? []] : toReadonlyArray(linksFromEnv.value) : options.links ?? empty4();
    span4 = tracer3.span(name, parent2, options.context ?? empty6(), links, timingEnabled ? clock3.unsafeCurrentTimeNanos() : bigint02, options.kind ?? "internal");
    if (annotationsFromEnv._tag === "Some") {
      forEach5(annotationsFromEnv.value, (value, key) => span4.attribute(key, value));
    }
    if (options.attributes !== void 0) {
      Object.entries(options.attributes).forEach(([k, v]) => span4.attribute(k, v));
    }
  }
  if (typeof options.captureStackTrace === "function") {
    spanToTrace.set(span4, options.captureStackTrace);
  }
  return span4;
};
var makeSpan = (name, options) => {
  options = addSpanStackTrace(options);
  return withFiberRuntime((fiber) => succeed(unsafeMakeSpan(fiber, name, options)));
};
var spanAnnotations = /* @__PURE__ */ fiberRefGet(currentTracerSpanAnnotations);
var spanLinks = /* @__PURE__ */ fiberRefGet(currentTracerSpanLinks);
var endSpan = (span4, exit4, clock3, timingEnabled) => sync(() => {
  if (span4.status._tag === "Ended") {
    return;
  }
  if (exitIsFailure(exit4) && spanToTrace.has(span4)) {
    span4.attribute("code.stacktrace", spanToTrace.get(span4)());
  }
  span4.end(timingEnabled ? clock3.unsafeCurrentTimeNanos() : bigint02, exit4);
});
var useSpan = (name, ...args2) => {
  const options = addSpanStackTrace(args2.length === 1 ? void 0 : args2[0]);
  const evaluate3 = args2[args2.length - 1];
  return withFiberRuntime((fiber) => {
    const span4 = unsafeMakeSpan(fiber, name, options);
    const timingEnabled = fiber.getFiberRef(currentTracerTimingEnabled);
    const clock3 = get4(fiber.getFiberRef(currentServices), clockTag);
    return onExit(evaluate3(span4), (exit4) => endSpan(span4, exit4, clock3, timingEnabled));
  });
};
var withParentSpan = /* @__PURE__ */ dual(2, (self, span4) => provideService(self, spanTag, span4));
var withSpan = function() {
  const dataFirst = typeof arguments[0] !== "string";
  const name = dataFirst ? arguments[1] : arguments[0];
  const options = addSpanStackTrace(dataFirst ? arguments[2] : arguments[1]);
  if (dataFirst) {
    const self = arguments[0];
    return useSpan(name, options, (span4) => withParentSpan(self, span4));
  }
  return (self) => useSpan(name, options, (span4) => withParentSpan(self, span4));
};
var functionWithSpan = (options) => function() {
  let captureStackTrace = options.captureStackTrace ?? false;
  if (options.captureStackTrace !== false) {
    const limit = Error.stackTraceLimit;
    Error.stackTraceLimit = 2;
    const error = new Error();
    Error.stackTraceLimit = limit;
    let cache = false;
    captureStackTrace = () => {
      if (cache !== false) {
        return cache;
      }
      if (error.stack) {
        const stack = error.stack.trim().split("\n");
        cache = stack.slice(2).join("\n").trim();
        return cache;
      }
    };
  }
  return suspend(() => {
    const opts = typeof options.options === "function" ? options.options.apply(null, arguments) : options.options;
    return withSpan(suspend(() => internalCall(() => options.body.apply(this, arguments))), opts.name, {
      ...opts,
      captureStackTrace
    });
  });
};
var fromNullable3 = (value) => value == null ? fail2(new NoSuchElementException()) : succeed(value);
var optionFromOptional = (self) => catchAll(map11(self, some2), (error) => isNoSuchElementException(error) ? succeedNone : fail2(error));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/executionStrategy.js
var OP_SEQUENTIAL2 = "Sequential";
var OP_PARALLEL2 = "Parallel";
var OP_PARALLEL_N = "ParallelN";
var sequential2 = {
  _tag: OP_SEQUENTIAL2
};
var parallel2 = {
  _tag: OP_PARALLEL2
};
var parallelN = (parallelism) => ({
  _tag: OP_PARALLEL_N,
  parallelism
});
var isSequential = (self) => self._tag === OP_SEQUENTIAL2;
var isParallel = (self) => self._tag === OP_PARALLEL2;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/ExecutionStrategy.js
var sequential3 = sequential2;
var parallel3 = parallel2;
var parallelN2 = parallelN;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/FiberRefsPatch.js
var diff6 = diff5;
var patch7 = patch6;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/fiberStatus.js
var FiberStatusSymbolKey = "effect/FiberStatus";
var FiberStatusTypeId = /* @__PURE__ */ Symbol.for(FiberStatusSymbolKey);
var OP_DONE = "Done";
var OP_RUNNING = "Running";
var OP_SUSPENDED = "Suspended";
var DoneHash = /* @__PURE__ */ string(`${FiberStatusSymbolKey}-${OP_DONE}`);
var Done = class {
  [FiberStatusTypeId] = FiberStatusTypeId;
  _tag = OP_DONE;
  [symbol]() {
    return DoneHash;
  }
  [symbol2](that) {
    return isFiberStatus(that) && that._tag === OP_DONE;
  }
};
var Running = class {
  runtimeFlags;
  [FiberStatusTypeId] = FiberStatusTypeId;
  _tag = OP_RUNNING;
  constructor(runtimeFlags2) {
    this.runtimeFlags = runtimeFlags2;
  }
  [symbol]() {
    return pipe(hash(FiberStatusSymbolKey), combine(hash(this._tag)), combine(hash(this.runtimeFlags)), cached(this));
  }
  [symbol2](that) {
    return isFiberStatus(that) && that._tag === OP_RUNNING && this.runtimeFlags === that.runtimeFlags;
  }
};
var Suspended = class {
  runtimeFlags;
  blockingOn;
  [FiberStatusTypeId] = FiberStatusTypeId;
  _tag = OP_SUSPENDED;
  constructor(runtimeFlags2, blockingOn) {
    this.runtimeFlags = runtimeFlags2;
    this.blockingOn = blockingOn;
  }
  [symbol]() {
    return pipe(hash(FiberStatusSymbolKey), combine(hash(this._tag)), combine(hash(this.runtimeFlags)), combine(hash(this.blockingOn)), cached(this));
  }
  [symbol2](that) {
    return isFiberStatus(that) && that._tag === OP_SUSPENDED && this.runtimeFlags === that.runtimeFlags && equals(this.blockingOn, that.blockingOn);
  }
};
var done3 = /* @__PURE__ */ new Done();
var running = (runtimeFlags2) => new Running(runtimeFlags2);
var suspended = (runtimeFlags2, blockingOn) => new Suspended(runtimeFlags2, blockingOn);
var isFiberStatus = (u) => hasProperty(u, FiberStatusTypeId);
var isDone2 = (self) => self._tag === OP_DONE;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/FiberStatus.js
var done4 = done3;
var running2 = running;
var suspended2 = suspended;
var isDone3 = isDone2;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Micro.js
var TypeId14 = /* @__PURE__ */ Symbol.for("effect/Micro");
var MicroExitTypeId = /* @__PURE__ */ Symbol.for("effect/Micro/MicroExit");
var MicroCauseTypeId = /* @__PURE__ */ Symbol.for("effect/Micro/MicroCause");
var microCauseVariance = {
  _E: identity
};
var MicroCauseImpl = class extends globalThis.Error {
  _tag;
  traces;
  [MicroCauseTypeId];
  constructor(_tag, originalError, traces) {
    const causeName = `MicroCause.${_tag}`;
    let name;
    let message;
    let stack;
    if (originalError instanceof globalThis.Error) {
      name = `(${causeName}) ${originalError.name}`;
      message = originalError.message;
      const messageLines = message.split("\n").length;
      stack = originalError.stack ? `(${causeName}) ${originalError.stack.split("\n").slice(0, messageLines + 3).join("\n")}` : `${name}: ${message}`;
    } else {
      name = causeName;
      message = toStringUnknown(originalError, 0);
      stack = `${name}: ${message}`;
    }
    if (traces.length > 0) {
      stack += `
    ${traces.join("\n    ")}`;
    }
    super(message);
    this._tag = _tag;
    this.traces = traces;
    this[MicroCauseTypeId] = microCauseVariance;
    this.name = name;
    this.stack = stack;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  toString() {
    return this.stack;
  }
  [NodeInspectSymbol]() {
    return this.stack;
  }
};
var Die = class extends MicroCauseImpl {
  defect;
  constructor(defect, traces = []) {
    super("Die", defect, traces);
    this.defect = defect;
  }
};
var causeDie = (defect, traces = []) => new Die(defect, traces);
var Interrupt = class extends MicroCauseImpl {
  constructor(traces = []) {
    super("Interrupt", "interrupted", traces);
  }
};
var causeInterrupt = (traces = []) => new Interrupt(traces);
var causeIsInterrupt = (self) => self._tag === "Interrupt";
var MicroFiberTypeId = /* @__PURE__ */ Symbol.for("effect/Micro/MicroFiber");
var fiberVariance = {
  _A: identity,
  _E: identity
};
var MicroFiberImpl = class {
  context;
  interruptible;
  [MicroFiberTypeId];
  _stack = [];
  _observers = [];
  _exit;
  _children;
  currentOpCount = 0;
  constructor(context7, interruptible5 = true) {
    this.context = context7;
    this.interruptible = interruptible5;
    this[MicroFiberTypeId] = fiberVariance;
  }
  getRef(ref) {
    return unsafeGetReference(this.context, ref);
  }
  addObserver(cb) {
    if (this._exit) {
      cb(this._exit);
      return constVoid;
    }
    this._observers.push(cb);
    return () => {
      const index = this._observers.indexOf(cb);
      if (index >= 0) {
        this._observers.splice(index, 1);
      }
    };
  }
  _interrupted = false;
  unsafeInterrupt() {
    if (this._exit) {
      return;
    }
    this._interrupted = true;
    if (this.interruptible) {
      this.evaluate(exitInterrupt2);
    }
  }
  unsafePoll() {
    return this._exit;
  }
  evaluate(effect4) {
    if (this._exit) {
      return;
    } else if (this._yielded !== void 0) {
      const yielded = this._yielded;
      this._yielded = void 0;
      yielded();
    }
    const exit4 = this.runLoop(effect4);
    if (exit4 === Yield) {
      return;
    }
    const interruptChildren = fiberMiddleware.interruptChildren && fiberMiddleware.interruptChildren(this);
    if (interruptChildren !== void 0) {
      return this.evaluate(flatMap9(interruptChildren, () => exit4));
    }
    this._exit = exit4;
    for (let i = 0; i < this._observers.length; i++) {
      this._observers[i](exit4);
    }
    this._observers.length = 0;
  }
  runLoop(effect4) {
    let yielding = false;
    let current2 = effect4;
    this.currentOpCount = 0;
    try {
      while (true) {
        this.currentOpCount++;
        if (!yielding && this.getRef(CurrentScheduler).shouldYield(this)) {
          yielding = true;
          const prev = current2;
          current2 = flatMap9(yieldNow2, () => prev);
        }
        current2 = current2[evaluate](this);
        if (current2 === Yield) {
          const yielded = this._yielded;
          if (MicroExitTypeId in yielded) {
            this._yielded = void 0;
            return yielded;
          }
          return Yield;
        }
      }
    } catch (error) {
      if (!hasProperty(current2, evaluate)) {
        return exitDie2(`MicroFiber.runLoop: Not a valid effect: ${String(current2)}`);
      }
      return exitDie2(error);
    }
  }
  getCont(symbol3) {
    while (true) {
      const op = this._stack.pop();
      if (!op) return void 0;
      const cont = op[ensureCont] && op[ensureCont](this);
      if (cont) return {
        [symbol3]: cont
      };
      if (op[symbol3]) return op;
    }
  }
  // cancel the yielded operation, or for the yielded exit value
  _yielded = void 0;
  yieldWith(value) {
    this._yielded = value;
    return Yield;
  }
  children() {
    return this._children ??= /* @__PURE__ */ new Set();
  }
};
var fiberMiddleware = /* @__PURE__ */ globalValue("effect/Micro/fiberMiddleware", () => ({
  interruptChildren: void 0
}));
var identifier = /* @__PURE__ */ Symbol.for("effect/Micro/identifier");
var args = /* @__PURE__ */ Symbol.for("effect/Micro/args");
var evaluate = /* @__PURE__ */ Symbol.for("effect/Micro/evaluate");
var successCont = /* @__PURE__ */ Symbol.for("effect/Micro/successCont");
var failureCont = /* @__PURE__ */ Symbol.for("effect/Micro/failureCont");
var ensureCont = /* @__PURE__ */ Symbol.for("effect/Micro/ensureCont");
var Yield = /* @__PURE__ */ Symbol.for("effect/Micro/Yield");
var microVariance = {
  _A: identity,
  _E: identity,
  _R: identity
};
var MicroProto = {
  ...EffectPrototype2,
  _op: "Micro",
  [TypeId14]: microVariance,
  pipe() {
    return pipeArguments(this, arguments);
  },
  [Symbol.iterator]() {
    return new SingleShotGen(new YieldWrap(this));
  },
  toJSON() {
    return {
      _id: "Micro",
      op: this[identifier],
      ...args in this ? {
        args: this[args]
      } : void 0
    };
  },
  toString() {
    return format(this);
  },
  [NodeInspectSymbol]() {
    return format(this);
  }
};
function defaultEvaluate(_fiber) {
  return exitDie2(`Micro.evaluate: Not implemented`);
}
var makePrimitiveProto = (options) => ({
  ...MicroProto,
  [identifier]: options.op,
  [evaluate]: options.eval ?? defaultEvaluate,
  [successCont]: options.contA,
  [failureCont]: options.contE,
  [ensureCont]: options.ensure
});
var makePrimitive = (options) => {
  const Proto5 = makePrimitiveProto(options);
  return function() {
    const self = Object.create(Proto5);
    self[args] = options.single === false ? arguments : arguments[0];
    return self;
  };
};
var makeExit = (options) => {
  const Proto5 = {
    ...makePrimitiveProto(options),
    [MicroExitTypeId]: MicroExitTypeId,
    _tag: options.op,
    get [options.prop]() {
      return this[args];
    },
    toJSON() {
      return {
        _id: "MicroExit",
        _tag: options.op,
        [options.prop]: this[args]
      };
    },
    [symbol2](that) {
      return isMicroExit(that) && that._tag === options.op && equals(this[args], that[args]);
    },
    [symbol]() {
      return cached(this, combine(string(options.op))(hash(this[args])));
    }
  };
  return function(value) {
    const self = Object.create(Proto5);
    self[args] = value;
    self[successCont] = void 0;
    self[failureCont] = void 0;
    self[ensureCont] = void 0;
    return self;
  };
};
var succeed4 = /* @__PURE__ */ makeExit({
  op: "Success",
  prop: "value",
  eval(fiber) {
    const cont = fiber.getCont(successCont);
    return cont ? cont[successCont](this[args], fiber) : fiber.yieldWith(this);
  }
});
var failCause4 = /* @__PURE__ */ makeExit({
  op: "Failure",
  prop: "cause",
  eval(fiber) {
    let cont = fiber.getCont(failureCont);
    while (causeIsInterrupt(this[args]) && cont && fiber.interruptible) {
      cont = fiber.getCont(failureCont);
    }
    return cont ? cont[failureCont](this[args], fiber) : fiber.yieldWith(this);
  }
});
var yieldNowWith = /* @__PURE__ */ makePrimitive({
  op: "Yield",
  eval(fiber) {
    let resumed = false;
    fiber.getRef(CurrentScheduler).scheduleTask(() => {
      if (resumed) return;
      fiber.evaluate(exitVoid2);
    }, this[args] ?? 0);
    return fiber.yieldWith(() => {
      resumed = true;
    });
  }
});
var yieldNow2 = /* @__PURE__ */ yieldNowWith(0);
var void_4 = /* @__PURE__ */ succeed4(void 0);
var withMicroFiber = /* @__PURE__ */ makePrimitive({
  op: "WithMicroFiber",
  eval(fiber) {
    return this[args](fiber);
  }
});
var flatMap9 = /* @__PURE__ */ dual(2, (self, f) => {
  const onSuccess = Object.create(OnSuccessProto);
  onSuccess[args] = self;
  onSuccess[successCont] = f;
  return onSuccess;
});
var OnSuccessProto = /* @__PURE__ */ makePrimitiveProto({
  op: "OnSuccess",
  eval(fiber) {
    fiber._stack.push(this);
    return this[args];
  }
});
var isMicroExit = (u) => hasProperty(u, MicroExitTypeId);
var exitSucceed2 = succeed4;
var exitFailCause2 = failCause4;
var exitInterrupt2 = /* @__PURE__ */ exitFailCause2(/* @__PURE__ */ causeInterrupt());
var exitDie2 = (defect) => exitFailCause2(causeDie(defect));
var exitVoid2 = /* @__PURE__ */ exitSucceed2(void 0);
var setImmediate = "setImmediate" in globalThis ? globalThis.setImmediate : (f) => setTimeout(f, 0);
var MicroSchedulerDefault = class {
  tasks = [];
  running = false;
  /**
   * @since 3.5.9
   */
  scheduleTask(task, _priority) {
    this.tasks.push(task);
    if (!this.running) {
      this.running = true;
      setImmediate(this.afterScheduled);
    }
  }
  /**
   * @since 3.5.9
   */
  afterScheduled = () => {
    this.running = false;
    this.runTasks();
  };
  /**
   * @since 3.5.9
   */
  runTasks() {
    const tasks = this.tasks;
    this.tasks = [];
    for (let i = 0, len = tasks.length; i < len; i++) {
      tasks[i]();
    }
  }
  /**
   * @since 3.5.9
   */
  shouldYield(fiber) {
    return fiber.currentOpCount >= fiber.getRef(MaxOpsBeforeYield);
  }
  /**
   * @since 3.5.9
   */
  flush() {
    while (this.tasks.length > 0) {
      this.runTasks();
    }
  }
};
var updateContext = /* @__PURE__ */ dual(2, (self, f) => withMicroFiber((fiber) => {
  const prev = fiber.context;
  fiber.context = f(prev);
  return onExit2(self, () => {
    fiber.context = prev;
    return void_4;
  });
}));
var provideContext2 = /* @__PURE__ */ dual(2, (self, provided) => updateContext(self, merge3(provided)));
var MaxOpsBeforeYield = class extends (/* @__PURE__ */ Reference2()("effect/Micro/currentMaxOpsBeforeYield", {
  defaultValue: () => 2048
})) {
};
var CurrentScheduler = class extends (/* @__PURE__ */ Reference2()("effect/Micro/currentScheduler", {
  defaultValue: () => new MicroSchedulerDefault()
})) {
};
var matchCauseEffect2 = /* @__PURE__ */ dual(2, (self, options) => {
  const primitive = Object.create(OnSuccessAndFailureProto);
  primitive[args] = self;
  primitive[successCont] = options.onSuccess;
  primitive[failureCont] = options.onFailure;
  return primitive;
});
var OnSuccessAndFailureProto = /* @__PURE__ */ makePrimitiveProto({
  op: "OnSuccessAndFailure",
  eval(fiber) {
    fiber._stack.push(this);
    return this[args];
  }
});
var onExit2 = /* @__PURE__ */ dual(2, (self, f) => uninterruptibleMask2((restore) => matchCauseEffect2(restore(self), {
  onFailure: (cause3) => flatMap9(f(exitFailCause2(cause3)), () => failCause4(cause3)),
  onSuccess: (a) => flatMap9(f(exitSucceed2(a)), () => succeed4(a))
})));
var setInterruptible = /* @__PURE__ */ makePrimitive({
  op: "SetInterruptible",
  ensure(fiber) {
    fiber.interruptible = this[args];
    if (fiber._interrupted && fiber.interruptible) {
      return () => exitInterrupt2;
    }
  }
});
var interruptible3 = (self) => withMicroFiber((fiber) => {
  if (fiber.interruptible) return self;
  fiber.interruptible = true;
  fiber._stack.push(setInterruptible(false));
  if (fiber._interrupted) return exitInterrupt2;
  return self;
});
var uninterruptibleMask2 = (f) => withMicroFiber((fiber) => {
  if (!fiber.interruptible) return f(identity);
  fiber.interruptible = false;
  fiber._stack.push(setInterruptible(true));
  return f(interruptible3);
});
var runFork = (effect4, options) => {
  const fiber = new MicroFiberImpl(CurrentScheduler.context(new MicroSchedulerDefault()));
  fiber.evaluate(effect4);
  return fiber;
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Scheduler.js
var PriorityBuckets = class {
  /**
   * @since 2.0.0
   */
  buckets = [];
  /**
   * @since 2.0.0
   */
  scheduleTask(task, priority) {
    const length4 = this.buckets.length;
    let bucket = void 0;
    let index = 0;
    for (; index < length4; index++) {
      if (this.buckets[index][0] <= priority) {
        bucket = this.buckets[index];
      } else {
        break;
      }
    }
    if (bucket && bucket[0] === priority) {
      bucket[1].push(task);
    } else if (index === length4) {
      this.buckets.push([priority, [task]]);
    } else {
      this.buckets.splice(index, 0, [priority, [task]]);
    }
  }
};
var MixedScheduler = class {
  maxNextTickBeforeTimer;
  /**
   * @since 2.0.0
   */
  running = false;
  /**
   * @since 2.0.0
   */
  tasks = /* @__PURE__ */ new PriorityBuckets();
  constructor(maxNextTickBeforeTimer) {
    this.maxNextTickBeforeTimer = maxNextTickBeforeTimer;
  }
  /**
   * @since 2.0.0
   */
  starveInternal(depth) {
    const tasks = this.tasks.buckets;
    this.tasks.buckets = [];
    for (const [_, toRun] of tasks) {
      for (let i = 0; i < toRun.length; i++) {
        toRun[i]();
      }
    }
    if (this.tasks.buckets.length === 0) {
      this.running = false;
    } else {
      this.starve(depth);
    }
  }
  /**
   * @since 2.0.0
   */
  starve(depth = 0) {
    if (depth >= this.maxNextTickBeforeTimer) {
      setTimeout(() => this.starveInternal(0), 0);
    } else {
      Promise.resolve(void 0).then(() => this.starveInternal(depth + 1));
    }
  }
  /**
   * @since 2.0.0
   */
  shouldYield(fiber) {
    return fiber.currentOpCount > fiber.getFiberRef(currentMaxOpsBeforeYield) ? fiber.getFiberRef(currentSchedulingPriority) : false;
  }
  /**
   * @since 2.0.0
   */
  scheduleTask(task, priority) {
    this.tasks.scheduleTask(task, priority);
    if (!this.running) {
      this.running = true;
      this.starve();
    }
  }
};
var defaultScheduler = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Scheduler/defaultScheduler"), () => new MixedScheduler(2048));
var SyncScheduler = class {
  /**
   * @since 2.0.0
   */
  tasks = /* @__PURE__ */ new PriorityBuckets();
  /**
   * @since 2.0.0
   */
  deferred = false;
  /**
   * @since 2.0.0
   */
  scheduleTask(task, priority) {
    if (this.deferred) {
      defaultScheduler.scheduleTask(task, priority);
    } else {
      this.tasks.scheduleTask(task, priority);
    }
  }
  /**
   * @since 2.0.0
   */
  shouldYield(fiber) {
    return fiber.currentOpCount > fiber.getFiberRef(currentMaxOpsBeforeYield) ? fiber.getFiberRef(currentSchedulingPriority) : false;
  }
  /**
   * @since 2.0.0
   */
  flush() {
    while (this.tasks.buckets.length > 0) {
      const tasks = this.tasks.buckets;
      this.tasks.buckets = [];
      for (const [_, toRun] of tasks) {
        for (let i = 0; i < toRun.length; i++) {
          toRun[i]();
        }
      }
    }
    this.deferred = true;
  }
};
var currentScheduler = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentScheduler"), () => fiberRefUnsafeMake(defaultScheduler));
var withScheduler = /* @__PURE__ */ dual(2, (self, scheduler) => fiberRefLocally(self, currentScheduler, scheduler));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/completedRequestMap.js
var currentRequestMap = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentRequestMap"), () => fiberRefUnsafeMake(/* @__PURE__ */ new Map()));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/concurrency.js
var match9 = (concurrency, sequential4, unbounded8, bounded8) => {
  switch (concurrency) {
    case void 0:
      return sequential4();
    case "unbounded":
      return unbounded8();
    case "inherit":
      return fiberRefGetWith(currentConcurrency, (concurrency2) => concurrency2 === "unbounded" ? unbounded8() : concurrency2 > 1 ? bounded8(concurrency2) : sequential4());
    default:
      return concurrency > 1 ? bounded8(concurrency) : sequential4();
  }
};
var matchSimple = (concurrency, sequential4, concurrent) => {
  switch (concurrency) {
    case void 0:
      return sequential4();
    case "unbounded":
      return concurrent();
    case "inherit":
      return fiberRefGetWith(currentConcurrency, (concurrency2) => concurrency2 === "unbounded" || concurrency2 > 1 ? concurrent() : sequential4());
    default:
      return concurrency > 1 ? concurrent() : sequential4();
  }
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/fiberMessage.js
var OP_INTERRUPT_SIGNAL = "InterruptSignal";
var OP_STATEFUL = "Stateful";
var OP_RESUME = "Resume";
var OP_YIELD_NOW = "YieldNow";
var interruptSignal = (cause3) => ({
  _tag: OP_INTERRUPT_SIGNAL,
  cause: cause3
});
var stateful = (onFiber) => ({
  _tag: OP_STATEFUL,
  onFiber
});
var resume = (effect4) => ({
  _tag: OP_RESUME,
  effect: effect4
});
var yieldNow3 = () => ({
  _tag: OP_YIELD_NOW
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/fiberScope.js
var FiberScopeSymbolKey = "effect/FiberScope";
var FiberScopeTypeId = /* @__PURE__ */ Symbol.for(FiberScopeSymbolKey);
var Global = class {
  [FiberScopeTypeId] = FiberScopeTypeId;
  fiberId = none4;
  roots = /* @__PURE__ */ new Set();
  add(_runtimeFlags, child) {
    this.roots.add(child);
    child.addObserver(() => {
      this.roots.delete(child);
    });
  }
};
var Local = class {
  fiberId;
  parent;
  [FiberScopeTypeId] = FiberScopeTypeId;
  constructor(fiberId3, parent2) {
    this.fiberId = fiberId3;
    this.parent = parent2;
  }
  add(_runtimeFlags, child) {
    this.parent.tell(stateful((parentFiber) => {
      parentFiber.addChild(child);
      child.addObserver(() => {
        parentFiber.removeChild(child);
      });
    }));
  }
};
var unsafeMake6 = (fiber) => {
  return new Local(fiber.id(), fiber);
};
var globalScope = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberScope/Global"), () => new Global());

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/fiber.js
var FiberSymbolKey = "effect/Fiber";
var FiberTypeId = /* @__PURE__ */ Symbol.for(FiberSymbolKey);
var fiberVariance2 = {
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _A: (_) => _
};
var RuntimeFiberSymbolKey = "effect/Fiber";
var RuntimeFiberTypeId = /* @__PURE__ */ Symbol.for(RuntimeFiberSymbolKey);
var _await2 = (self) => self.await;
var inheritAll = (self) => self.inheritAll;
var interruptAllAs = /* @__PURE__ */ dual(2, (fibers, fiberId3) => pipe(forEachSequentialDiscard(fibers, interruptAsFork(fiberId3)), zipRight2(pipe(fibers, forEachSequentialDiscard(_await2)))));
var interruptAsFork = /* @__PURE__ */ dual(2, (self, fiberId3) => self.interruptAsFork(fiberId3));
var join2 = (self) => zipLeft2(flatten7(self.await), self.inheritAll);
var poll3 = (self) => self.poll;
var currentFiberURI = "effect/FiberCurrent";

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/logger.js
var LoggerSymbolKey = "effect/Logger";
var LoggerTypeId = /* @__PURE__ */ Symbol.for(LoggerSymbolKey);
var loggerVariance = {
  /* c8 ignore next */
  _Message: (_) => _,
  /* c8 ignore next */
  _Output: (_) => _
};
var makeLogger = (log3) => ({
  [LoggerTypeId]: loggerVariance,
  log: log3,
  pipe() {
    return pipeArguments(this, arguments);
  }
});
var mapInput3 = /* @__PURE__ */ dual(2, (self, f) => makeLogger((options) => self.log({
  ...options,
  message: f(options.message)
})));
var mapInputOptions = /* @__PURE__ */ dual(2, (self, f) => makeLogger((options) => self.log(f(options))));
var filterLogLevel = /* @__PURE__ */ dual(2, (self, f) => makeLogger((options) => f(options.logLevel) ? some2(self.log(options)) : none2()));
var map14 = /* @__PURE__ */ dual(2, (self, f) => makeLogger((options) => f(self.log(options))));
var none7 = {
  [LoggerTypeId]: loggerVariance,
  log: constVoid,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var simple = (log3) => ({
  [LoggerTypeId]: loggerVariance,
  log: ({
    message
  }) => log3(message),
  pipe() {
    return pipeArguments(this, arguments);
  }
});
var succeed5 = (value) => {
  return simple(() => value);
};
var sync3 = (evaluate3) => {
  return simple(evaluate3);
};
var zip4 = /* @__PURE__ */ dual(2, (self, that) => makeLogger((options) => [self.log(options), that.log(options)]));
var zipLeft3 = /* @__PURE__ */ dual(2, (self, that) => map14(zip4(self, that), (tuple) => tuple[0]));
var zipRight4 = /* @__PURE__ */ dual(2, (self, that) => map14(zip4(self, that), (tuple) => tuple[1]));
var textOnly = /^[^\s"=]*$/;
var format3 = (quoteValue, whitespace) => ({
  annotations: annotations2,
  cause: cause3,
  date,
  fiberId: fiberId3,
  logLevel,
  message,
  spans
}) => {
  const formatValue = (value) => value.match(textOnly) ? value : quoteValue(value);
  const format5 = (label, value) => `${formatLabel(label)}=${formatValue(value)}`;
  const append4 = (label, value) => " " + format5(label, value);
  let out = format5("timestamp", date.toISOString());
  out += append4("level", logLevel.label);
  out += append4("fiber", threadName(fiberId3));
  const messages = ensure(message);
  for (let i = 0; i < messages.length; i++) {
    out += append4("message", toStringUnknown(messages[i], whitespace));
  }
  if (!isEmptyType(cause3)) {
    out += append4("cause", pretty(cause3, {
      renderErrorCause: true
    }));
  }
  for (const span4 of spans) {
    out += " " + render(date.getTime())(span4);
  }
  for (const [label, value] of annotations2) {
    out += append4(label, toStringUnknown(value, whitespace));
  }
  return out;
};
var escapeDoubleQuotes = (s) => `"${s.replace(/\\([\s\S])|(")/g, "\\$1$2")}"`;
var stringLogger = /* @__PURE__ */ makeLogger(/* @__PURE__ */ format3(escapeDoubleQuotes));
var logfmtLogger = /* @__PURE__ */ makeLogger(/* @__PURE__ */ format3(JSON.stringify, 0));
var structuredLogger = /* @__PURE__ */ makeLogger(({
  annotations: annotations2,
  cause: cause3,
  date,
  fiberId: fiberId3,
  logLevel,
  message,
  spans
}) => {
  const now = date.getTime();
  const annotationsObj = {};
  const spansObj = {};
  if (size5(annotations2) > 0) {
    for (const [k, v] of annotations2) {
      annotationsObj[k] = structuredMessage(v);
    }
  }
  if (isCons(spans)) {
    for (const span4 of spans) {
      spansObj[span4.label] = now - span4.startTime;
    }
  }
  const messageArr = ensure(message);
  return {
    message: messageArr.length === 1 ? structuredMessage(messageArr[0]) : messageArr.map(structuredMessage),
    logLevel: logLevel.label,
    timestamp: date.toISOString(),
    cause: isEmpty5(cause3) ? void 0 : pretty(cause3, {
      renderErrorCause: true
    }),
    annotations: annotationsObj,
    spans: spansObj,
    fiberId: threadName(fiberId3)
  };
});
var structuredMessage = (u) => {
  switch (typeof u) {
    case "bigint":
    case "function":
    case "symbol": {
      return String(u);
    }
    default: {
      return toJSON(u);
    }
  }
};
var jsonLogger = /* @__PURE__ */ map14(structuredLogger, stringifyCircular);
var isLogger = (u) => {
  return typeof u === "object" && u != null && LoggerTypeId in u;
};
var withColor = (text, ...colors2) => {
  let out = "";
  for (let i = 0; i < colors2.length; i++) {
    out += `\x1B[${colors2[i]}m`;
  }
  return out + text + "\x1B[0m";
};
var withColorNoop = (text, ..._colors) => text;
var colors = {
  bold: "1",
  red: "31",
  green: "32",
  yellow: "33",
  blue: "34",
  cyan: "36",
  white: "37",
  gray: "90",
  black: "30",
  bgBrightRed: "101"
};
var logLevelColors = {
  None: [],
  All: [],
  Trace: [colors.gray],
  Debug: [colors.blue],
  Info: [colors.green],
  Warning: [colors.yellow],
  Error: [colors.red],
  Fatal: [colors.bgBrightRed, colors.black]
};
var logLevelStyle = {
  None: "",
  All: "",
  Trace: "color:gray",
  Debug: "color:blue",
  Info: "color:green",
  Warning: "color:orange",
  Error: "color:red",
  Fatal: "background-color:red;color:white"
};
var defaultDateFormat = (date) => `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}.${date.getMilliseconds().toString().padStart(3, "0")}`;
var hasProcessStdout = typeof process === "object" && process !== null && typeof process.stdout === "object" && process.stdout !== null;
var processStdoutIsTTY = hasProcessStdout && process.stdout.isTTY === true;
var hasProcessStdoutOrDeno = hasProcessStdout || "Deno" in globalThis;
var prettyLogger = (options) => {
  const mode_ = options?.mode ?? "auto";
  const mode = mode_ === "auto" ? hasProcessStdoutOrDeno ? "tty" : "browser" : mode_;
  const isBrowser = mode === "browser";
  const showColors = typeof options?.colors === "boolean" ? options.colors : processStdoutIsTTY || isBrowser;
  const formatDate2 = options?.formatDate ?? defaultDateFormat;
  return isBrowser ? prettyLoggerBrowser({
    colors: showColors,
    formatDate: formatDate2
  }) : prettyLoggerTty({
    colors: showColors,
    formatDate: formatDate2,
    stderr: options?.stderr === true
  });
};
var prettyLoggerTty = (options) => {
  const processIsBun = typeof process === "object" && "isBun" in process && process.isBun === true;
  const color = options.colors ? withColor : withColorNoop;
  return makeLogger(({
    annotations: annotations2,
    cause: cause3,
    context: context7,
    date,
    fiberId: fiberId3,
    logLevel,
    message: message_,
    spans
  }) => {
    const services = getOrDefault2(context7, currentServices);
    const console4 = get4(services, consoleTag).unsafe;
    const log3 = options.stderr === true ? console4.error : console4.log;
    const message = ensure(message_);
    let firstLine = color(`[${options.formatDate(date)}]`, colors.white) + ` ${color(logLevel.label, ...logLevelColors[logLevel._tag])} (${threadName(fiberId3)})`;
    if (isCons(spans)) {
      const now = date.getTime();
      const render2 = render(now);
      for (const span4 of spans) {
        firstLine += " " + render2(span4);
      }
    }
    firstLine += ":";
    let messageIndex = 0;
    if (message.length > 0) {
      const firstMaybeString = structuredMessage(message[0]);
      if (typeof firstMaybeString === "string") {
        firstLine += " " + color(firstMaybeString, colors.bold, colors.cyan);
        messageIndex++;
      }
    }
    log3(firstLine);
    if (!processIsBun) console4.group();
    if (!isEmpty5(cause3)) {
      log3(pretty(cause3, {
        renderErrorCause: true
      }));
    }
    if (messageIndex < message.length) {
      for (; messageIndex < message.length; messageIndex++) {
        log3(redact(message[messageIndex]));
      }
    }
    if (size5(annotations2) > 0) {
      for (const [key, value] of annotations2) {
        log3(color(`${key}:`, colors.bold, colors.white), redact(value));
      }
    }
    if (!processIsBun) console4.groupEnd();
  });
};
var prettyLoggerBrowser = (options) => {
  const color = options.colors ? "%c" : "";
  return makeLogger(({
    annotations: annotations2,
    cause: cause3,
    context: context7,
    date,
    fiberId: fiberId3,
    logLevel,
    message: message_,
    spans
  }) => {
    const services = getOrDefault2(context7, currentServices);
    const console4 = get4(services, consoleTag).unsafe;
    const message = ensure(message_);
    let firstLine = `${color}[${options.formatDate(date)}]`;
    const firstParams = [];
    if (options.colors) {
      firstParams.push("color:gray");
    }
    firstLine += ` ${color}${logLevel.label}${color} (${threadName(fiberId3)})`;
    if (options.colors) {
      firstParams.push(logLevelStyle[logLevel._tag], "");
    }
    if (isCons(spans)) {
      const now = date.getTime();
      const render2 = render(now);
      for (const span4 of spans) {
        firstLine += " " + render2(span4);
      }
    }
    firstLine += ":";
    let messageIndex = 0;
    if (message.length > 0) {
      const firstMaybeString = structuredMessage(message[0]);
      if (typeof firstMaybeString === "string") {
        firstLine += ` ${color}${firstMaybeString}`;
        if (options.colors) {
          firstParams.push("color:deepskyblue");
        }
        messageIndex++;
      }
    }
    console4.groupCollapsed(firstLine, ...firstParams);
    if (!isEmpty5(cause3)) {
      console4.error(pretty(cause3, {
        renderErrorCause: true
      }));
    }
    if (messageIndex < message.length) {
      for (; messageIndex < message.length; messageIndex++) {
        console4.log(redact(message[messageIndex]));
      }
    }
    if (size5(annotations2) > 0) {
      for (const [key, value] of annotations2) {
        const redacted = redact(value);
        if (options.colors) {
          console4.log(`%c${key}:`, "color:gray", redacted);
        } else {
          console4.log(`${key}:`, redacted);
        }
      }
    }
    console4.groupEnd();
  });
};
var prettyLoggerDefault = /* @__PURE__ */ globalValue("effect/Logger/prettyLoggerDefault", () => prettyLogger());

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/metric/boundaries.js
var MetricBoundariesSymbolKey = "effect/MetricBoundaries";
var MetricBoundariesTypeId = /* @__PURE__ */ Symbol.for(MetricBoundariesSymbolKey);
var MetricBoundariesImpl = class {
  values;
  [MetricBoundariesTypeId] = MetricBoundariesTypeId;
  constructor(values4) {
    this.values = values4;
    this._hash = pipe(string(MetricBoundariesSymbolKey), combine(array2(this.values)));
  }
  _hash;
  [symbol]() {
    return this._hash;
  }
  [symbol2](u) {
    return isMetricBoundaries(u) && equals(this.values, u.values);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var isMetricBoundaries = (u) => hasProperty(u, MetricBoundariesTypeId);
var fromIterable8 = (iterable) => {
  const values4 = pipe(iterable, appendAll(of2(Number.POSITIVE_INFINITY)), dedupe);
  return new MetricBoundariesImpl(values4);
};
var exponential = (options) => pipe(makeBy(options.count - 1, (i) => options.start * Math.pow(options.factor, i)), unsafeFromArray, fromIterable8);

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/metric/keyType.js
var MetricKeyTypeSymbolKey = "effect/MetricKeyType";
var MetricKeyTypeTypeId = /* @__PURE__ */ Symbol.for(MetricKeyTypeSymbolKey);
var CounterKeyTypeSymbolKey = "effect/MetricKeyType/Counter";
var CounterKeyTypeTypeId = /* @__PURE__ */ Symbol.for(CounterKeyTypeSymbolKey);
var FrequencyKeyTypeSymbolKey = "effect/MetricKeyType/Frequency";
var FrequencyKeyTypeTypeId = /* @__PURE__ */ Symbol.for(FrequencyKeyTypeSymbolKey);
var GaugeKeyTypeSymbolKey = "effect/MetricKeyType/Gauge";
var GaugeKeyTypeTypeId = /* @__PURE__ */ Symbol.for(GaugeKeyTypeSymbolKey);
var HistogramKeyTypeSymbolKey = "effect/MetricKeyType/Histogram";
var HistogramKeyTypeTypeId = /* @__PURE__ */ Symbol.for(HistogramKeyTypeSymbolKey);
var SummaryKeyTypeSymbolKey = "effect/MetricKeyType/Summary";
var SummaryKeyTypeTypeId = /* @__PURE__ */ Symbol.for(SummaryKeyTypeSymbolKey);
var metricKeyTypeVariance = {
  /* c8 ignore next */
  _In: (_) => _,
  /* c8 ignore next */
  _Out: (_) => _
};
var CounterKeyType = class {
  incremental;
  bigint;
  [MetricKeyTypeTypeId] = metricKeyTypeVariance;
  [CounterKeyTypeTypeId] = CounterKeyTypeTypeId;
  constructor(incremental, bigint) {
    this.incremental = incremental;
    this.bigint = bigint;
    this._hash = string(CounterKeyTypeSymbolKey);
  }
  _hash;
  [symbol]() {
    return this._hash;
  }
  [symbol2](that) {
    return isCounterKey(that);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var HistogramKeyType = class {
  boundaries;
  [MetricKeyTypeTypeId] = metricKeyTypeVariance;
  [HistogramKeyTypeTypeId] = HistogramKeyTypeTypeId;
  constructor(boundaries) {
    this.boundaries = boundaries;
    this._hash = pipe(string(HistogramKeyTypeSymbolKey), combine(hash(this.boundaries)));
  }
  _hash;
  [symbol]() {
    return this._hash;
  }
  [symbol2](that) {
    return isHistogramKey(that) && equals(this.boundaries, that.boundaries);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var counter = (options) => new CounterKeyType(options?.incremental ?? false, options?.bigint ?? false);
var histogram = (boundaries) => {
  return new HistogramKeyType(boundaries);
};
var isCounterKey = (u) => hasProperty(u, CounterKeyTypeTypeId);
var isFrequencyKey = (u) => hasProperty(u, FrequencyKeyTypeTypeId);
var isGaugeKey = (u) => hasProperty(u, GaugeKeyTypeTypeId);
var isHistogramKey = (u) => hasProperty(u, HistogramKeyTypeTypeId);
var isSummaryKey = (u) => hasProperty(u, SummaryKeyTypeTypeId);

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/metric/key.js
var MetricKeySymbolKey = "effect/MetricKey";
var MetricKeyTypeId = /* @__PURE__ */ Symbol.for(MetricKeySymbolKey);
var metricKeyVariance = {
  /* c8 ignore next */
  _Type: (_) => _
};
var arrayEquivilence = /* @__PURE__ */ getEquivalence3(equals);
var MetricKeyImpl = class {
  name;
  keyType;
  description;
  tags;
  [MetricKeyTypeId] = metricKeyVariance;
  constructor(name, keyType, description, tags = []) {
    this.name = name;
    this.keyType = keyType;
    this.description = description;
    this.tags = tags;
    this._hash = pipe(string(this.name + this.description), combine(hash(this.keyType)), combine(array2(this.tags)));
  }
  _hash;
  [symbol]() {
    return this._hash;
  }
  [symbol2](u) {
    return isMetricKey(u) && this.name === u.name && equals(this.keyType, u.keyType) && equals(this.description, u.description) && arrayEquivilence(this.tags, u.tags);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var isMetricKey = (u) => hasProperty(u, MetricKeyTypeId);
var counter2 = (name, options) => new MetricKeyImpl(name, counter(options), fromNullable(options?.description));
var histogram2 = (name, boundaries, description) => new MetricKeyImpl(name, histogram(boundaries), fromNullable(description));
var taggedWithLabels = /* @__PURE__ */ dual(2, (self, extraTags) => extraTags.length === 0 ? self : new MetricKeyImpl(self.name, self.keyType, self.description, union2(self.tags, extraTags)));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/metric/state.js
var MetricStateSymbolKey = "effect/MetricState";
var MetricStateTypeId = /* @__PURE__ */ Symbol.for(MetricStateSymbolKey);
var CounterStateSymbolKey = "effect/MetricState/Counter";
var CounterStateTypeId = /* @__PURE__ */ Symbol.for(CounterStateSymbolKey);
var FrequencyStateSymbolKey = "effect/MetricState/Frequency";
var FrequencyStateTypeId = /* @__PURE__ */ Symbol.for(FrequencyStateSymbolKey);
var GaugeStateSymbolKey = "effect/MetricState/Gauge";
var GaugeStateTypeId = /* @__PURE__ */ Symbol.for(GaugeStateSymbolKey);
var HistogramStateSymbolKey = "effect/MetricState/Histogram";
var HistogramStateTypeId = /* @__PURE__ */ Symbol.for(HistogramStateSymbolKey);
var SummaryStateSymbolKey = "effect/MetricState/Summary";
var SummaryStateTypeId = /* @__PURE__ */ Symbol.for(SummaryStateSymbolKey);
var metricStateVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
var CounterState = class {
  count;
  [MetricStateTypeId] = metricStateVariance;
  [CounterStateTypeId] = CounterStateTypeId;
  constructor(count3) {
    this.count = count3;
  }
  [symbol]() {
    return pipe(hash(CounterStateSymbolKey), combine(hash(this.count)), cached(this));
  }
  [symbol2](that) {
    return isCounterState(that) && this.count === that.count;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var arrayEquals = /* @__PURE__ */ getEquivalence3(equals);
var FrequencyState = class {
  occurrences;
  [MetricStateTypeId] = metricStateVariance;
  [FrequencyStateTypeId] = FrequencyStateTypeId;
  constructor(occurrences) {
    this.occurrences = occurrences;
  }
  _hash;
  [symbol]() {
    return pipe(string(FrequencyStateSymbolKey), combine(array2(fromIterable2(this.occurrences.entries()))), cached(this));
  }
  [symbol2](that) {
    return isFrequencyState(that) && arrayEquals(fromIterable2(this.occurrences.entries()), fromIterable2(that.occurrences.entries()));
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var GaugeState = class {
  value;
  [MetricStateTypeId] = metricStateVariance;
  [GaugeStateTypeId] = GaugeStateTypeId;
  constructor(value) {
    this.value = value;
  }
  [symbol]() {
    return pipe(hash(GaugeStateSymbolKey), combine(hash(this.value)), cached(this));
  }
  [symbol2](u) {
    return isGaugeState(u) && this.value === u.value;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var HistogramState = class {
  buckets;
  count;
  min;
  max;
  sum;
  [MetricStateTypeId] = metricStateVariance;
  [HistogramStateTypeId] = HistogramStateTypeId;
  constructor(buckets, count3, min4, max6, sum3) {
    this.buckets = buckets;
    this.count = count3;
    this.min = min4;
    this.max = max6;
    this.sum = sum3;
  }
  [symbol]() {
    return pipe(hash(HistogramStateSymbolKey), combine(hash(this.buckets)), combine(hash(this.count)), combine(hash(this.min)), combine(hash(this.max)), combine(hash(this.sum)), cached(this));
  }
  [symbol2](that) {
    return isHistogramState(that) && equals(this.buckets, that.buckets) && this.count === that.count && this.min === that.min && this.max === that.max && this.sum === that.sum;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var SummaryState = class {
  error;
  quantiles;
  count;
  min;
  max;
  sum;
  [MetricStateTypeId] = metricStateVariance;
  [SummaryStateTypeId] = SummaryStateTypeId;
  constructor(error, quantiles, count3, min4, max6, sum3) {
    this.error = error;
    this.quantiles = quantiles;
    this.count = count3;
    this.min = min4;
    this.max = max6;
    this.sum = sum3;
  }
  [symbol]() {
    return pipe(hash(SummaryStateSymbolKey), combine(hash(this.error)), combine(hash(this.quantiles)), combine(hash(this.count)), combine(hash(this.min)), combine(hash(this.max)), combine(hash(this.sum)), cached(this));
  }
  [symbol2](that) {
    return isSummaryState(that) && this.error === that.error && equals(this.quantiles, that.quantiles) && this.count === that.count && this.min === that.min && this.max === that.max && this.sum === that.sum;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var counter3 = (count3) => new CounterState(count3);
var frequency2 = (occurrences) => {
  return new FrequencyState(occurrences);
};
var gauge2 = (count3) => new GaugeState(count3);
var histogram3 = (options) => new HistogramState(options.buckets, options.count, options.min, options.max, options.sum);
var summary2 = (options) => new SummaryState(options.error, options.quantiles, options.count, options.min, options.max, options.sum);
var isCounterState = (u) => hasProperty(u, CounterStateTypeId);
var isFrequencyState = (u) => hasProperty(u, FrequencyStateTypeId);
var isGaugeState = (u) => hasProperty(u, GaugeStateTypeId);
var isHistogramState = (u) => hasProperty(u, HistogramStateTypeId);
var isSummaryState = (u) => hasProperty(u, SummaryStateTypeId);

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/metric/hook.js
var MetricHookSymbolKey = "effect/MetricHook";
var MetricHookTypeId = /* @__PURE__ */ Symbol.for(MetricHookSymbolKey);
var metricHookVariance = {
  /* c8 ignore next */
  _In: (_) => _,
  /* c8 ignore next */
  _Out: (_) => _
};
var make31 = (options) => ({
  [MetricHookTypeId]: metricHookVariance,
  pipe() {
    return pipeArguments(this, arguments);
  },
  ...options
});
var bigint03 = /* @__PURE__ */ BigInt(0);
var counter4 = (key) => {
  let sum3 = key.keyType.bigint ? bigint03 : 0;
  const canUpdate = key.keyType.incremental ? key.keyType.bigint ? (value) => value >= bigint03 : (value) => value >= 0 : (_value) => true;
  const update6 = (value) => {
    if (canUpdate(value)) {
      sum3 = sum3 + value;
    }
  };
  return make31({
    get: () => counter3(sum3),
    update: update6,
    modify: update6
  });
};
var frequency3 = (key) => {
  const values4 = /* @__PURE__ */ new Map();
  for (const word of key.keyType.preregisteredWords) {
    values4.set(word, 0);
  }
  const update6 = (word) => {
    const slotCount = values4.get(word) ?? 0;
    values4.set(word, slotCount + 1);
  };
  return make31({
    get: () => frequency2(values4),
    update: update6,
    modify: update6
  });
};
var gauge3 = (_key, startAt) => {
  let value = startAt;
  return make31({
    get: () => gauge2(value),
    update: (v) => {
      value = v;
    },
    modify: (v) => {
      value = value + v;
    }
  });
};
var histogram4 = (key) => {
  const bounds = key.keyType.boundaries.values;
  const size17 = bounds.length;
  const values4 = new Uint32Array(size17 + 1);
  const boundaries = new Float32Array(size17);
  let count3 = 0;
  let sum3 = 0;
  let min4 = Number.MAX_VALUE;
  let max6 = Number.MIN_VALUE;
  pipe(bounds, sort(Order), map4((n, i) => {
    boundaries[i] = n;
  }));
  const update6 = (value) => {
    let from = 0;
    let to = size17;
    while (from !== to) {
      const mid = Math.floor(from + (to - from) / 2);
      const boundary = boundaries[mid];
      if (value <= boundary) {
        to = mid;
      } else {
        from = mid;
      }
      if (to === from + 1) {
        if (value <= boundaries[from]) {
          to = from;
        } else {
          from = to;
        }
      }
    }
    values4[from] = values4[from] + 1;
    count3 = count3 + 1;
    sum3 = sum3 + value;
    if (value < min4) {
      min4 = value;
    }
    if (value > max6) {
      max6 = value;
    }
  };
  const getBuckets = () => {
    const builder = allocate(size17);
    let cumulated = 0;
    for (let i = 0; i < size17; i++) {
      const boundary = boundaries[i];
      const value = values4[i];
      cumulated = cumulated + value;
      builder[i] = [boundary, cumulated];
    }
    return builder;
  };
  return make31({
    get: () => histogram3({
      buckets: getBuckets(),
      count: count3,
      min: min4,
      max: max6,
      sum: sum3
    }),
    update: update6,
    modify: update6
  });
};
var summary3 = (key) => {
  const {
    error,
    maxAge,
    maxSize,
    quantiles
  } = key.keyType;
  const sortedQuantiles = pipe(quantiles, sort(Order));
  const values4 = allocate(maxSize);
  let head6 = 0;
  let count3 = 0;
  let sum3 = 0;
  let min4 = 0;
  let max6 = 0;
  const snapshot = (now) => {
    const builder = [];
    let i = 0;
    while (i !== maxSize - 1) {
      const item = values4[i];
      if (item != null) {
        const [t, v] = item;
        const age = millis(now - t);
        if (greaterThanOrEqualTo2(age, zero) && lessThanOrEqualTo2(age, maxAge)) {
          builder.push(v);
        }
      }
      i = i + 1;
    }
    return calculateQuantiles(error, sortedQuantiles, sort(builder, Order));
  };
  const observe = (value, timestamp) => {
    if (maxSize > 0) {
      head6 = head6 + 1;
      const target = head6 % maxSize;
      values4[target] = [timestamp, value];
    }
    min4 = count3 === 0 ? value : Math.min(min4, value);
    max6 = count3 === 0 ? value : Math.max(max6, value);
    count3 = count3 + 1;
    sum3 = sum3 + value;
  };
  return make31({
    get: () => summary2({
      error,
      quantiles: snapshot(Date.now()),
      count: count3,
      min: min4,
      max: max6,
      sum: sum3
    }),
    update: ([value, timestamp]) => observe(value, timestamp),
    modify: ([value, timestamp]) => observe(value, timestamp)
  });
};
var calculateQuantiles = (error, sortedQuantiles, sortedSamples) => {
  const sampleCount = sortedSamples.length;
  if (!isNonEmptyReadonlyArray(sortedQuantiles)) {
    return empty4();
  }
  const head6 = sortedQuantiles[0];
  const tail2 = sortedQuantiles.slice(1);
  const resolvedHead = resolveQuantile(error, sampleCount, none2(), 0, head6, sortedSamples);
  const resolved = of(resolvedHead);
  tail2.forEach((quantile) => {
    resolved.push(resolveQuantile(error, sampleCount, resolvedHead.value, resolvedHead.consumed, quantile, resolvedHead.rest));
  });
  return map4(resolved, (rq) => [rq.quantile, rq.value]);
};
var resolveQuantile = (error, sampleCount, current2, consumed, quantile, rest) => {
  let error_1 = error;
  let sampleCount_1 = sampleCount;
  let current_1 = current2;
  let consumed_1 = consumed;
  let quantile_1 = quantile;
  let rest_1 = rest;
  let error_2 = error;
  let sampleCount_2 = sampleCount;
  let current_2 = current2;
  let consumed_2 = consumed;
  let quantile_2 = quantile;
  let rest_2 = rest;
  while (1) {
    if (!isNonEmptyReadonlyArray(rest_1)) {
      return {
        quantile: quantile_1,
        value: none2(),
        consumed: consumed_1,
        rest: []
      };
    }
    if (quantile_1 === 1) {
      return {
        quantile: quantile_1,
        value: some2(lastNonEmpty(rest_1)),
        consumed: consumed_1 + rest_1.length,
        rest: []
      };
    }
    const headValue = headNonEmpty(rest_1);
    const sameHead = span(rest_1, (n) => n === headValue);
    const desired = quantile_1 * sampleCount_1;
    const allowedError = error_1 / 2 * desired;
    const candConsumed = consumed_1 + sameHead[0].length;
    const candError = Math.abs(candConsumed - desired);
    if (candConsumed < desired - allowedError) {
      error_2 = error_1;
      sampleCount_2 = sampleCount_1;
      current_2 = head(rest_1);
      consumed_2 = candConsumed;
      quantile_2 = quantile_1;
      rest_2 = sameHead[1];
      error_1 = error_2;
      sampleCount_1 = sampleCount_2;
      current_1 = current_2;
      consumed_1 = consumed_2;
      quantile_1 = quantile_2;
      rest_1 = rest_2;
      continue;
    }
    if (candConsumed > desired + allowedError) {
      const valueToReturn = isNone2(current_1) ? some2(headValue) : current_1;
      return {
        quantile: quantile_1,
        value: valueToReturn,
        consumed: consumed_1,
        rest: rest_1
      };
    }
    switch (current_1._tag) {
      case "None": {
        error_2 = error_1;
        sampleCount_2 = sampleCount_1;
        current_2 = head(rest_1);
        consumed_2 = candConsumed;
        quantile_2 = quantile_1;
        rest_2 = sameHead[1];
        error_1 = error_2;
        sampleCount_1 = sampleCount_2;
        current_1 = current_2;
        consumed_1 = consumed_2;
        quantile_1 = quantile_2;
        rest_1 = rest_2;
        continue;
      }
      case "Some": {
        const prevError = Math.abs(desired - current_1.value);
        if (candError < prevError) {
          error_2 = error_1;
          sampleCount_2 = sampleCount_1;
          current_2 = head(rest_1);
          consumed_2 = candConsumed;
          quantile_2 = quantile_1;
          rest_2 = sameHead[1];
          error_1 = error_2;
          sampleCount_1 = sampleCount_2;
          current_1 = current_2;
          consumed_1 = consumed_2;
          quantile_1 = quantile_2;
          rest_1 = rest_2;
          continue;
        }
        return {
          quantile: quantile_1,
          value: some2(current_1.value),
          consumed: consumed_1,
          rest: rest_1
        };
      }
    }
  }
  throw new Error("BUG: MetricHook.resolveQuantiles - please report an issue at https://github.com/Effect-TS/effect/issues");
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/metric/pair.js
var MetricPairSymbolKey = "effect/MetricPair";
var MetricPairTypeId = /* @__PURE__ */ Symbol.for(MetricPairSymbolKey);
var metricPairVariance = {
  /* c8 ignore next */
  _Type: (_) => _
};
var unsafeMake7 = (metricKey, metricState) => {
  return {
    [MetricPairTypeId]: metricPairVariance,
    metricKey,
    metricState,
    pipe() {
      return pipeArguments(this, arguments);
    }
  };
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/metric/registry.js
var MetricRegistrySymbolKey = "effect/MetricRegistry";
var MetricRegistryTypeId = /* @__PURE__ */ Symbol.for(MetricRegistrySymbolKey);
var MetricRegistryImpl = class {
  [MetricRegistryTypeId] = MetricRegistryTypeId;
  map = /* @__PURE__ */ empty20();
  snapshot() {
    const result = [];
    for (const [key, hook] of this.map) {
      result.push(unsafeMake7(key, hook.get()));
    }
    return result;
  }
  get(key) {
    const hook = pipe(this.map, get9(key), getOrUndefined);
    if (hook == null) {
      if (isCounterKey(key.keyType)) {
        return this.getCounter(key);
      }
      if (isGaugeKey(key.keyType)) {
        return this.getGauge(key);
      }
      if (isFrequencyKey(key.keyType)) {
        return this.getFrequency(key);
      }
      if (isHistogramKey(key.keyType)) {
        return this.getHistogram(key);
      }
      if (isSummaryKey(key.keyType)) {
        return this.getSummary(key);
      }
      throw new Error("BUG: MetricRegistry.get - unknown MetricKeyType - please report an issue at https://github.com/Effect-TS/effect/issues");
    } else {
      return hook;
    }
  }
  getCounter(key) {
    let value = pipe(this.map, get9(key), getOrUndefined);
    if (value == null) {
      const counter6 = counter4(key);
      if (!pipe(this.map, has5(key))) {
        pipe(this.map, set5(key, counter6));
      }
      value = counter6;
    }
    return value;
  }
  getFrequency(key) {
    let value = pipe(this.map, get9(key), getOrUndefined);
    if (value == null) {
      const frequency5 = frequency3(key);
      if (!pipe(this.map, has5(key))) {
        pipe(this.map, set5(key, frequency5));
      }
      value = frequency5;
    }
    return value;
  }
  getGauge(key) {
    let value = pipe(this.map, get9(key), getOrUndefined);
    if (value == null) {
      const gauge5 = gauge3(key, key.keyType.bigint ? BigInt(0) : 0);
      if (!pipe(this.map, has5(key))) {
        pipe(this.map, set5(key, gauge5));
      }
      value = gauge5;
    }
    return value;
  }
  getHistogram(key) {
    let value = pipe(this.map, get9(key), getOrUndefined);
    if (value == null) {
      const histogram6 = histogram4(key);
      if (!pipe(this.map, has5(key))) {
        pipe(this.map, set5(key, histogram6));
      }
      value = histogram6;
    }
    return value;
  }
  getSummary(key) {
    let value = pipe(this.map, get9(key), getOrUndefined);
    if (value == null) {
      const summary5 = summary3(key);
      if (!pipe(this.map, has5(key))) {
        pipe(this.map, set5(key, summary5));
      }
      value = summary5;
    }
    return value;
  }
};
var make32 = () => {
  return new MetricRegistryImpl();
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/metric.js
var MetricSymbolKey = "effect/Metric";
var MetricTypeId = /* @__PURE__ */ Symbol.for(MetricSymbolKey);
var metricVariance = {
  /* c8 ignore next */
  _Type: (_) => _,
  /* c8 ignore next */
  _In: (_) => _,
  /* c8 ignore next */
  _Out: (_) => _
};
var globalMetricRegistry = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Metric/globalMetricRegistry"), () => make32());
var make33 = function(keyType, unsafeUpdate, unsafeValue, unsafeModify) {
  const metric = Object.assign((effect4) => tap2(effect4, (a) => update4(metric, a)), {
    [MetricTypeId]: metricVariance,
    keyType,
    unsafeUpdate,
    unsafeValue,
    unsafeModify,
    register() {
      this.unsafeValue([]);
      return this;
    },
    pipe() {
      return pipeArguments(this, arguments);
    }
  });
  return metric;
};
var counter5 = (name, options) => fromMetricKey(counter2(name, options));
var fromMetricKey = (key) => {
  let untaggedHook;
  const hookCache = /* @__PURE__ */ new WeakMap();
  const hook = (extraTags) => {
    if (extraTags.length === 0) {
      if (untaggedHook !== void 0) {
        return untaggedHook;
      }
      untaggedHook = globalMetricRegistry.get(key);
      return untaggedHook;
    }
    let hook2 = hookCache.get(extraTags);
    if (hook2 !== void 0) {
      return hook2;
    }
    hook2 = globalMetricRegistry.get(taggedWithLabels(key, extraTags));
    hookCache.set(extraTags, hook2);
    return hook2;
  };
  return make33(key.keyType, (input, extraTags) => hook(extraTags).update(input), (extraTags) => hook(extraTags).get(), (input, extraTags) => hook(extraTags).modify(input));
};
var histogram5 = (name, boundaries, description) => fromMetricKey(histogram2(name, boundaries, description));
var tagged = /* @__PURE__ */ dual(3, (self, key, value) => taggedWithLabels2(self, [make30(key, value)]));
var taggedWithLabels2 = /* @__PURE__ */ dual(2, (self, extraTags) => {
  return make33(self.keyType, (input, extraTags1) => self.unsafeUpdate(input, union2(extraTags, extraTags1)), (extraTags1) => self.unsafeValue(union2(extraTags, extraTags1)), (input, extraTags1) => self.unsafeModify(input, union2(extraTags, extraTags1)));
});
var update4 = /* @__PURE__ */ dual(2, (self, input) => fiberRefGetWith(currentMetricLabels, (tags) => sync(() => self.unsafeUpdate(input, tags))));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/request.js
var RequestSymbolKey = "effect/Request";
var RequestTypeId = /* @__PURE__ */ Symbol.for(RequestSymbolKey);
var isRequest = (u) => hasProperty(u, RequestTypeId);
var complete = /* @__PURE__ */ dual(2, (self, result) => fiberRefGetWith(currentRequestMap, (map28) => sync(() => {
  if (map28.has(self)) {
    const entry = map28.get(self);
    if (!entry.state.completed) {
      entry.state.completed = true;
      deferredUnsafeDone(entry.result, result);
    }
  }
})));
var Listeners = class {
  count = 0;
  observers = /* @__PURE__ */ new Set();
  interrupted = false;
  addObserver(f) {
    this.observers.add(f);
  }
  removeObserver(f) {
    this.observers.delete(f);
  }
  increment() {
    this.count++;
    this.observers.forEach((f) => f(this.count));
  }
  decrement() {
    this.count--;
    this.observers.forEach((f) => f(this.count));
  }
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/supervisor.js
var SupervisorSymbolKey = "effect/Supervisor";
var SupervisorTypeId = /* @__PURE__ */ Symbol.for(SupervisorSymbolKey);
var supervisorVariance = {
  /* c8 ignore next */
  _T: (_) => _
};
var ProxySupervisor = class _ProxySupervisor {
  underlying;
  value0;
  [SupervisorTypeId] = supervisorVariance;
  constructor(underlying, value0) {
    this.underlying = underlying;
    this.value0 = value0;
  }
  get value() {
    return this.value0;
  }
  onStart(context7, effect4, parent2, fiber) {
    this.underlying.onStart(context7, effect4, parent2, fiber);
  }
  onEnd(value, fiber) {
    this.underlying.onEnd(value, fiber);
  }
  onEffect(fiber, effect4) {
    this.underlying.onEffect(fiber, effect4);
  }
  onSuspend(fiber) {
    this.underlying.onSuspend(fiber);
  }
  onResume(fiber) {
    this.underlying.onResume(fiber);
  }
  map(f) {
    return new _ProxySupervisor(this, pipe(this.value, map11(f)));
  }
  zip(right3) {
    return new Zip(this, right3);
  }
};
var Zip = class _Zip {
  left;
  right;
  _tag = "Zip";
  [SupervisorTypeId] = supervisorVariance;
  constructor(left3, right3) {
    this.left = left3;
    this.right = right3;
  }
  get value() {
    return zip2(this.left.value, this.right.value);
  }
  onStart(context7, effect4, parent2, fiber) {
    this.left.onStart(context7, effect4, parent2, fiber);
    this.right.onStart(context7, effect4, parent2, fiber);
  }
  onEnd(value, fiber) {
    this.left.onEnd(value, fiber);
    this.right.onEnd(value, fiber);
  }
  onEffect(fiber, effect4) {
    this.left.onEffect(fiber, effect4);
    this.right.onEffect(fiber, effect4);
  }
  onSuspend(fiber) {
    this.left.onSuspend(fiber);
    this.right.onSuspend(fiber);
  }
  onResume(fiber) {
    this.left.onResume(fiber);
    this.right.onResume(fiber);
  }
  map(f) {
    return new ProxySupervisor(this, pipe(this.value, map11(f)));
  }
  zip(right3) {
    return new _Zip(this, right3);
  }
};
var isZip = (self) => hasProperty(self, SupervisorTypeId) && isTagged(self, "Zip");
var Track = class {
  [SupervisorTypeId] = supervisorVariance;
  fibers = /* @__PURE__ */ new Set();
  get value() {
    return sync(() => Array.from(this.fibers));
  }
  onStart(_context, _effect, _parent, fiber) {
    this.fibers.add(fiber);
  }
  onEnd(_value, fiber) {
    this.fibers.delete(fiber);
  }
  onEffect(_fiber, _effect) {
  }
  onSuspend(_fiber) {
  }
  onResume(_fiber) {
  }
  map(f) {
    return new ProxySupervisor(this, pipe(this.value, map11(f)));
  }
  zip(right3) {
    return new Zip(this, right3);
  }
  onRun(execution, _fiber) {
    return execution();
  }
};
var Const = class {
  effect;
  [SupervisorTypeId] = supervisorVariance;
  constructor(effect4) {
    this.effect = effect4;
  }
  get value() {
    return this.effect;
  }
  onStart(_context, _effect, _parent, _fiber) {
  }
  onEnd(_value, _fiber) {
  }
  onEffect(_fiber, _effect) {
  }
  onSuspend(_fiber) {
  }
  onResume(_fiber) {
  }
  map(f) {
    return new ProxySupervisor(this, pipe(this.value, map11(f)));
  }
  zip(right3) {
    return new Zip(this, right3);
  }
  onRun(execution, _fiber) {
    return execution();
  }
};
var unsafeTrack = () => {
  return new Track();
};
var track = /* @__PURE__ */ sync(unsafeTrack);
var fromEffect = (effect4) => {
  return new Const(effect4);
};
var none8 = /* @__PURE__ */ globalValue("effect/Supervisor/none", () => fromEffect(void_2));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Differ.js
var make35 = make16;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/supervisor/patch.js
var OP_EMPTY3 = "Empty";
var OP_ADD_SUPERVISOR = "AddSupervisor";
var OP_REMOVE_SUPERVISOR = "RemoveSupervisor";
var OP_AND_THEN2 = "AndThen";
var empty28 = {
  _tag: OP_EMPTY3
};
var combine8 = (self, that) => {
  return {
    _tag: OP_AND_THEN2,
    first: self,
    second: that
  };
};
var patch8 = (self, supervisor) => {
  return patchLoop(supervisor, of2(self));
};
var patchLoop = (_supervisor, _patches) => {
  let supervisor = _supervisor;
  let patches = _patches;
  while (isNonEmpty2(patches)) {
    const head6 = headNonEmpty2(patches);
    switch (head6._tag) {
      case OP_EMPTY3: {
        patches = tailNonEmpty2(patches);
        break;
      }
      case OP_ADD_SUPERVISOR: {
        supervisor = supervisor.zip(head6.supervisor);
        patches = tailNonEmpty2(patches);
        break;
      }
      case OP_REMOVE_SUPERVISOR: {
        supervisor = removeSupervisor(supervisor, head6.supervisor);
        patches = tailNonEmpty2(patches);
        break;
      }
      case OP_AND_THEN2: {
        patches = prepend2(head6.first)(prepend2(head6.second)(tailNonEmpty2(patches)));
        break;
      }
    }
  }
  return supervisor;
};
var removeSupervisor = (self, that) => {
  if (equals(self, that)) {
    return none8;
  } else {
    if (isZip(self)) {
      return removeSupervisor(self.left, that).zip(removeSupervisor(self.right, that));
    } else {
      return self;
    }
  }
};
var toSet2 = (self) => {
  if (equals(self, none8)) {
    return empty10();
  } else {
    if (isZip(self)) {
      return pipe(toSet2(self.left), union4(toSet2(self.right)));
    } else {
      return make11(self);
    }
  }
};
var diff7 = (oldValue, newValue) => {
  if (equals(oldValue, newValue)) {
    return empty28;
  }
  const oldSupervisors = toSet2(oldValue);
  const newSupervisors = toSet2(newValue);
  const added = pipe(newSupervisors, difference4(oldSupervisors), reduce6(empty28, (patch9, supervisor) => combine8(patch9, {
    _tag: OP_ADD_SUPERVISOR,
    supervisor
  })));
  const removed = pipe(oldSupervisors, difference4(newSupervisors), reduce6(empty28, (patch9, supervisor) => combine8(patch9, {
    _tag: OP_REMOVE_SUPERVISOR,
    supervisor
  })));
  return combine8(added, removed);
};
var differ2 = /* @__PURE__ */ make35({
  empty: empty28,
  patch: patch8,
  combine: combine8,
  diff: diff7
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/fiberRuntime.js
var fiberStarted = /* @__PURE__ */ counter5("effect_fiber_started", {
  incremental: true
});
var fiberActive = /* @__PURE__ */ counter5("effect_fiber_active");
var fiberSuccesses = /* @__PURE__ */ counter5("effect_fiber_successes", {
  incremental: true
});
var fiberFailures = /* @__PURE__ */ counter5("effect_fiber_failures", {
  incremental: true
});
var fiberLifetimes = /* @__PURE__ */ tagged(/* @__PURE__ */ histogram5("effect_fiber_lifetimes", /* @__PURE__ */ exponential({
  start: 0.5,
  factor: 2,
  count: 35
})), "time_unit", "milliseconds");
var EvaluationSignalContinue = "Continue";
var EvaluationSignalDone = "Done";
var EvaluationSignalYieldNow = "Yield";
var runtimeFiberVariance = {
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _A: (_) => _
};
var absurd = (_) => {
  throw new Error(`BUG: FiberRuntime - ${toStringUnknown(_)} - please report an issue at https://github.com/Effect-TS/effect/issues`);
};
var YieldedOp = /* @__PURE__ */ Symbol.for("effect/internal/fiberRuntime/YieldedOp");
var yieldedOpChannel = /* @__PURE__ */ globalValue("effect/internal/fiberRuntime/yieldedOpChannel", () => ({
  currentOp: null
}));
var contOpSuccess = {
  [OP_ON_SUCCESS]: (_, cont, value) => {
    return internalCall(() => cont.effect_instruction_i1(value));
  },
  ["OnStep"]: (_, _cont, value) => {
    return exitSucceed(exitSucceed(value));
  },
  [OP_ON_SUCCESS_AND_FAILURE]: (_, cont, value) => {
    return internalCall(() => cont.effect_instruction_i2(value));
  },
  [OP_REVERT_FLAGS]: (self, cont, value) => {
    self.patchRuntimeFlags(self.currentRuntimeFlags, cont.patch);
    if (interruptible(self.currentRuntimeFlags) && self.isInterrupted()) {
      return exitFailCause(self.getInterruptedCause());
    } else {
      return exitSucceed(value);
    }
  },
  [OP_WHILE]: (self, cont, value) => {
    internalCall(() => cont.effect_instruction_i2(value));
    if (internalCall(() => cont.effect_instruction_i0())) {
      self.pushStack(cont);
      return internalCall(() => cont.effect_instruction_i1());
    } else {
      return void_2;
    }
  },
  [OP_ITERATOR]: (self, cont, value) => {
    const state = internalCall(() => cont.effect_instruction_i0.next(value));
    if (state.done) return exitSucceed(state.value);
    self.pushStack(cont);
    return yieldWrapGet(state.value);
  }
};
var drainQueueWhileRunningTable = {
  [OP_INTERRUPT_SIGNAL]: (self, runtimeFlags2, cur, message) => {
    self.processNewInterruptSignal(message.cause);
    return interruptible(runtimeFlags2) ? exitFailCause(message.cause) : cur;
  },
  [OP_RESUME]: (_self, _runtimeFlags, _cur, _message) => {
    throw new Error("It is illegal to have multiple concurrent run loops in a single fiber");
  },
  [OP_STATEFUL]: (self, runtimeFlags2, cur, message) => {
    message.onFiber(self, running2(runtimeFlags2));
    return cur;
  },
  [OP_YIELD_NOW]: (_self, _runtimeFlags, cur, _message) => {
    return flatMap8(yieldNow(), () => cur);
  }
};
var runBlockedRequests = (self) => forEachSequentialDiscard(flatten5(self), (requestsByRequestResolver) => forEachConcurrentDiscard(sequentialCollectionToChunk(requestsByRequestResolver), ([dataSource, sequential4]) => {
  const map28 = /* @__PURE__ */ new Map();
  const arr = [];
  for (const block of sequential4) {
    arr.push(toReadonlyArray(block));
    for (const entry of block) {
      map28.set(entry.request, entry);
    }
  }
  const flat = arr.flat();
  return fiberRefLocally(invokeWithInterrupt(dataSource.runAll(arr), flat, () => flat.forEach((entry) => {
    entry.listeners.interrupted = true;
  })), currentRequestMap, map28);
}, false, false));
var _version = /* @__PURE__ */ getCurrentVersion();
var FiberRuntime = class extends Class2 {
  [FiberTypeId] = fiberVariance2;
  [RuntimeFiberTypeId] = runtimeFiberVariance;
  _fiberRefs;
  _fiberId;
  _queue = /* @__PURE__ */ new Array();
  _children = null;
  _observers = /* @__PURE__ */ new Array();
  _running = false;
  _stack = [];
  _asyncInterruptor = null;
  _asyncBlockingOn = null;
  _exitValue = null;
  _steps = [];
  _isYielding = false;
  currentRuntimeFlags;
  currentOpCount = 0;
  currentSupervisor;
  currentScheduler;
  currentTracer;
  currentSpan;
  currentContext;
  currentDefaultServices;
  constructor(fiberId3, fiberRefs0, runtimeFlags0) {
    super();
    this.currentRuntimeFlags = runtimeFlags0;
    this._fiberId = fiberId3;
    this._fiberRefs = fiberRefs0;
    if (runtimeMetrics(runtimeFlags0)) {
      const tags = this.getFiberRef(currentMetricLabels);
      fiberStarted.unsafeUpdate(1, tags);
      fiberActive.unsafeUpdate(1, tags);
    }
    this.refreshRefCache();
  }
  commit() {
    return join2(this);
  }
  /**
   * The identity of the fiber.
   */
  id() {
    return this._fiberId;
  }
  /**
   * Begins execution of the effect associated with this fiber on in the
   * background. This can be called to "kick off" execution of a fiber after
   * it has been created.
   */
  resume(effect4) {
    this.tell(resume(effect4));
  }
  /**
   * The status of the fiber.
   */
  get status() {
    return this.ask((_, status2) => status2);
  }
  /**
   * Gets the fiber runtime flags.
   */
  get runtimeFlags() {
    return this.ask((state, status2) => {
      if (isDone3(status2)) {
        return state.currentRuntimeFlags;
      }
      return status2.runtimeFlags;
    });
  }
  /**
   * Returns the current `FiberScope` for the fiber.
   */
  scope() {
    return unsafeMake6(this);
  }
  /**
   * Retrieves the immediate children of the fiber.
   */
  get children() {
    return this.ask((fiber) => Array.from(fiber.getChildren()));
  }
  /**
   * Gets the fiber's set of children.
   */
  getChildren() {
    if (this._children === null) {
      this._children = /* @__PURE__ */ new Set();
    }
    return this._children;
  }
  /**
   * Retrieves the interrupted cause of the fiber, which will be `Cause.empty`
   * if the fiber has not been interrupted.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  getInterruptedCause() {
    return this.getFiberRef(currentInterruptedCause);
  }
  /**
   * Retrieves the whole set of fiber refs.
   */
  fiberRefs() {
    return this.ask((fiber) => fiber.getFiberRefs());
  }
  /**
   * Returns an effect that will contain information computed from the fiber
   * state and status while running on the fiber.
   *
   * This allows the outside world to interact safely with mutable fiber state
   * without locks or immutable data.
   */
  ask(f) {
    return suspend(() => {
      const deferred = deferredUnsafeMake(this._fiberId);
      this.tell(stateful((fiber, status2) => {
        deferredUnsafeDone(deferred, sync(() => f(fiber, status2)));
      }));
      return deferredAwait(deferred);
    });
  }
  /**
   * Adds a message to be processed by the fiber on the fiber.
   */
  tell(message) {
    this._queue.push(message);
    if (!this._running) {
      this._running = true;
      this.drainQueueLaterOnExecutor();
    }
  }
  get await() {
    return async_((resume2) => {
      const cb = (exit4) => resume2(succeed(exit4));
      this.tell(stateful((fiber, _) => {
        if (fiber._exitValue !== null) {
          cb(this._exitValue);
        } else {
          fiber.addObserver(cb);
        }
      }));
      return sync(() => this.tell(stateful((fiber, _) => {
        fiber.removeObserver(cb);
      })));
    }, this.id());
  }
  get inheritAll() {
    return withFiberRuntime((parentFiber, parentStatus) => {
      const parentFiberId = parentFiber.id();
      const parentFiberRefs = parentFiber.getFiberRefs();
      const parentRuntimeFlags = parentStatus.runtimeFlags;
      const childFiberRefs = this.getFiberRefs();
      const updatedFiberRefs = joinAs(parentFiberRefs, parentFiberId, childFiberRefs);
      parentFiber.setFiberRefs(updatedFiberRefs);
      const updatedRuntimeFlags = parentFiber.getFiberRef(currentRuntimeFlags);
      const patch9 = pipe(
        diff4(parentRuntimeFlags, updatedRuntimeFlags),
        // Do not inherit WindDown or Interruption!
        exclude2(Interruption),
        exclude2(WindDown)
      );
      return updateRuntimeFlags(patch9);
    });
  }
  /**
   * Tentatively observes the fiber, but returns immediately if it is not
   * already done.
   */
  get poll() {
    return sync(() => fromNullable(this._exitValue));
  }
  /**
   * Unsafely observes the fiber, but returns immediately if it is not
   * already done.
   */
  unsafePoll() {
    return this._exitValue;
  }
  /**
   * In the background, interrupts the fiber as if interrupted from the specified fiber.
   */
  interruptAsFork(fiberId3) {
    return sync(() => this.tell(interruptSignal(interrupt(fiberId3))));
  }
  /**
   * In the background, interrupts the fiber as if interrupted from the specified fiber.
   */
  unsafeInterruptAsFork(fiberId3) {
    this.tell(interruptSignal(interrupt(fiberId3)));
  }
  /**
   * Adds an observer to the list of observers.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  addObserver(observer) {
    if (this._exitValue !== null) {
      observer(this._exitValue);
    } else {
      this._observers.push(observer);
    }
  }
  /**
   * Removes the specified observer from the list of observers that will be
   * notified when the fiber exits.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  removeObserver(observer) {
    this._observers = this._observers.filter((o) => o !== observer);
  }
  /**
   * Retrieves all fiber refs of the fiber.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  getFiberRefs() {
    this.setFiberRef(currentRuntimeFlags, this.currentRuntimeFlags);
    return this._fiberRefs;
  }
  /**
   * Deletes the specified fiber ref.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  unsafeDeleteFiberRef(fiberRef) {
    this._fiberRefs = delete_(this._fiberRefs, fiberRef);
  }
  /**
   * Retrieves the state of the fiber ref, or else its initial value.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  getFiberRef(fiberRef) {
    if (this._fiberRefs.locals.has(fiberRef)) {
      return this._fiberRefs.locals.get(fiberRef)[0][1];
    }
    return fiberRef.initial;
  }
  /**
   * Sets the fiber ref to the specified value.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  setFiberRef(fiberRef, value) {
    this._fiberRefs = updateAs(this._fiberRefs, {
      fiberId: this._fiberId,
      fiberRef,
      value
    });
    this.refreshRefCache();
  }
  refreshRefCache() {
    this.currentDefaultServices = this.getFiberRef(currentServices);
    this.currentTracer = this.currentDefaultServices.unsafeMap.get(tracerTag.key);
    this.currentSupervisor = this.getFiberRef(currentSupervisor);
    this.currentScheduler = this.getFiberRef(currentScheduler);
    this.currentContext = this.getFiberRef(currentContext);
    this.currentSpan = this.currentContext.unsafeMap.get(spanTag.key);
  }
  /**
   * Wholesale replaces all fiber refs of this fiber.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  setFiberRefs(fiberRefs3) {
    this._fiberRefs = fiberRefs3;
    this.refreshRefCache();
  }
  /**
   * Adds a reference to the specified fiber inside the children set.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  addChild(child) {
    this.getChildren().add(child);
  }
  /**
   * Removes a reference to the specified fiber inside the children set.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  removeChild(child) {
    this.getChildren().delete(child);
  }
  /**
   * Transfers all children of this fiber that are currently running to the
   * specified fiber scope.
   *
   * **NOTE**: This method must be invoked by the fiber itself after it has
   * evaluated the effects but prior to exiting.
   */
  transferChildren(scope5) {
    const children3 = this._children;
    this._children = null;
    if (children3 !== null && children3.size > 0) {
      for (const child of children3) {
        if (child._exitValue === null) {
          scope5.add(this.currentRuntimeFlags, child);
        }
      }
    }
  }
  /**
   * On the current thread, executes all messages in the fiber's inbox. This
   * method may return before all work is done, in the event the fiber executes
   * an asynchronous operation.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  drainQueueOnCurrentThread() {
    let recurse = true;
    while (recurse) {
      let evaluationSignal = EvaluationSignalContinue;
      const prev = globalThis[currentFiberURI];
      globalThis[currentFiberURI] = this;
      try {
        while (evaluationSignal === EvaluationSignalContinue) {
          evaluationSignal = this._queue.length === 0 ? EvaluationSignalDone : this.evaluateMessageWhileSuspended(this._queue.splice(0, 1)[0]);
        }
      } finally {
        this._running = false;
        globalThis[currentFiberURI] = prev;
      }
      if (this._queue.length > 0 && !this._running) {
        this._running = true;
        if (evaluationSignal === EvaluationSignalYieldNow) {
          this.drainQueueLaterOnExecutor();
          recurse = false;
        } else {
          recurse = true;
        }
      } else {
        recurse = false;
      }
    }
  }
  /**
   * Schedules the execution of all messages in the fiber's inbox.
   *
   * This method will return immediately after the scheduling
   * operation is completed, but potentially before such messages have been
   * executed.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  drainQueueLaterOnExecutor() {
    this.currentScheduler.scheduleTask(this.run, this.getFiberRef(currentSchedulingPriority));
  }
  /**
   * Drains the fiber's message queue while the fiber is actively running,
   * returning the next effect to execute, which may be the input effect if no
   * additional effect needs to be executed.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  drainQueueWhileRunning(runtimeFlags2, cur0) {
    let cur = cur0;
    while (this._queue.length > 0) {
      const message = this._queue.splice(0, 1)[0];
      cur = drainQueueWhileRunningTable[message._tag](this, runtimeFlags2, cur, message);
    }
    return cur;
  }
  /**
   * Determines if the fiber is interrupted.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  isInterrupted() {
    return !isEmpty5(this.getFiberRef(currentInterruptedCause));
  }
  /**
   * Adds an interruptor to the set of interruptors that are interrupting this
   * fiber.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  addInterruptedCause(cause3) {
    const oldSC = this.getFiberRef(currentInterruptedCause);
    this.setFiberRef(currentInterruptedCause, sequential(oldSC, cause3));
  }
  /**
   * Processes a new incoming interrupt signal.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  processNewInterruptSignal(cause3) {
    this.addInterruptedCause(cause3);
    this.sendInterruptSignalToAllChildren();
  }
  /**
   * Interrupts all children of the current fiber, returning an effect that will
   * await the exit of the children. This method will return null if the fiber
   * has no children.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  sendInterruptSignalToAllChildren() {
    if (this._children === null || this._children.size === 0) {
      return false;
    }
    let told = false;
    for (const child of this._children) {
      child.tell(interruptSignal(interrupt(this.id())));
      told = true;
    }
    return told;
  }
  /**
   * Interrupts all children of the current fiber, returning an effect that will
   * await the exit of the children. This method will return null if the fiber
   * has no children.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  interruptAllChildren() {
    if (this.sendInterruptSignalToAllChildren()) {
      const it = this._children.values();
      this._children = null;
      let isDone7 = false;
      const body = () => {
        const next = it.next();
        if (!next.done) {
          return asVoid2(next.value.await);
        } else {
          return sync(() => {
            isDone7 = true;
          });
        }
      };
      return whileLoop({
        while: () => !isDone7,
        body,
        step: () => {
        }
      });
    }
    return null;
  }
  reportExitValue(exit4) {
    if (runtimeMetrics(this.currentRuntimeFlags)) {
      const tags = this.getFiberRef(currentMetricLabels);
      const startTimeMillis = this.id().startTimeMillis;
      const endTimeMillis = Date.now();
      fiberLifetimes.unsafeUpdate(endTimeMillis - startTimeMillis, tags);
      fiberActive.unsafeUpdate(-1, tags);
      switch (exit4._tag) {
        case OP_SUCCESS: {
          fiberSuccesses.unsafeUpdate(1, tags);
          break;
        }
        case OP_FAILURE: {
          fiberFailures.unsafeUpdate(1, tags);
          break;
        }
      }
    }
    if (exit4._tag === "Failure") {
      const level = this.getFiberRef(currentUnhandledErrorLogLevel);
      if (!isInterruptedOnly(exit4.cause) && level._tag === "Some") {
        this.log("Fiber terminated with an unhandled error", exit4.cause, level);
      }
    }
  }
  setExitValue(exit4) {
    this._exitValue = exit4;
    this.reportExitValue(exit4);
    for (let i = this._observers.length - 1; i >= 0; i--) {
      this._observers[i](exit4);
    }
    this._observers = [];
  }
  getLoggers() {
    return this.getFiberRef(currentLoggers);
  }
  log(message, cause3, overrideLogLevel) {
    const logLevel = isSome2(overrideLogLevel) ? overrideLogLevel.value : this.getFiberRef(currentLogLevel);
    const minimumLogLevel3 = this.getFiberRef(currentMinimumLogLevel);
    if (greaterThan3(minimumLogLevel3, logLevel)) {
      return;
    }
    const spans = this.getFiberRef(currentLogSpan);
    const annotations2 = this.getFiberRef(currentLogAnnotations);
    const loggers = this.getLoggers();
    const contextMap = this.getFiberRefs();
    if (size4(loggers) > 0) {
      const clockService = get4(this.getFiberRef(currentServices), clockTag);
      const date = new Date(clockService.unsafeCurrentTimeMillis());
      withRedactableContext(contextMap, () => {
        for (const logger of loggers) {
          logger.log({
            fiberId: this.id(),
            logLevel,
            message,
            cause: cause3,
            context: contextMap,
            spans,
            annotations: annotations2,
            date
          });
        }
      });
    }
  }
  /**
   * Evaluates a single message on the current thread, while the fiber is
   * suspended. This method should only be called while evaluation of the
   * fiber's effect is suspended due to an asynchronous operation.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  evaluateMessageWhileSuspended(message) {
    switch (message._tag) {
      case OP_YIELD_NOW: {
        return EvaluationSignalYieldNow;
      }
      case OP_INTERRUPT_SIGNAL: {
        this.processNewInterruptSignal(message.cause);
        if (this._asyncInterruptor !== null) {
          this._asyncInterruptor(exitFailCause(message.cause));
          this._asyncInterruptor = null;
        }
        return EvaluationSignalContinue;
      }
      case OP_RESUME: {
        this._asyncInterruptor = null;
        this._asyncBlockingOn = null;
        this.evaluateEffect(message.effect);
        return EvaluationSignalContinue;
      }
      case OP_STATEFUL: {
        message.onFiber(this, this._exitValue !== null ? done4 : suspended2(this.currentRuntimeFlags, this._asyncBlockingOn));
        return EvaluationSignalContinue;
      }
      default: {
        return absurd(message);
      }
    }
  }
  /**
   * Evaluates an effect until completion, potentially asynchronously.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  evaluateEffect(effect0) {
    this.currentSupervisor.onResume(this);
    try {
      let effect4 = interruptible(this.currentRuntimeFlags) && this.isInterrupted() ? exitFailCause(this.getInterruptedCause()) : effect0;
      while (effect4 !== null) {
        const eff = effect4;
        const exit4 = this.runLoop(eff);
        if (exit4 === YieldedOp) {
          const op = yieldedOpChannel.currentOp;
          yieldedOpChannel.currentOp = null;
          if (op._op === OP_YIELD) {
            if (cooperativeYielding(this.currentRuntimeFlags)) {
              this.tell(yieldNow3());
              this.tell(resume(exitVoid));
              effect4 = null;
            } else {
              effect4 = exitVoid;
            }
          } else if (op._op === OP_ASYNC) {
            effect4 = null;
          }
        } else {
          this.currentRuntimeFlags = pipe(this.currentRuntimeFlags, enable2(WindDown));
          const interruption2 = this.interruptAllChildren();
          if (interruption2 !== null) {
            effect4 = flatMap8(interruption2, () => exit4);
          } else {
            if (this._queue.length === 0) {
              this.setExitValue(exit4);
            } else {
              this.tell(resume(exit4));
            }
            effect4 = null;
          }
        }
      }
    } finally {
      this.currentSupervisor.onSuspend(this);
    }
  }
  /**
   * Begins execution of the effect associated with this fiber on the current
   * thread. This can be called to "kick off" execution of a fiber after it has
   * been created, in hopes that the effect can be executed synchronously.
   *
   * This is not the normal way of starting a fiber, but it is useful when the
   * express goal of executing the fiber is to synchronously produce its exit.
   */
  start(effect4) {
    if (!this._running) {
      this._running = true;
      const prev = globalThis[currentFiberURI];
      globalThis[currentFiberURI] = this;
      try {
        this.evaluateEffect(effect4);
      } finally {
        this._running = false;
        globalThis[currentFiberURI] = prev;
        if (this._queue.length > 0) {
          this.drainQueueLaterOnExecutor();
        }
      }
    } else {
      this.tell(resume(effect4));
    }
  }
  /**
   * Begins execution of the effect associated with this fiber on in the
   * background, and on the correct thread pool. This can be called to "kick
   * off" execution of a fiber after it has been created, in hopes that the
   * effect can be executed synchronously.
   */
  startFork(effect4) {
    this.tell(resume(effect4));
  }
  /**
   * Takes the current runtime flags, patches them to return the new runtime
   * flags, and then makes any changes necessary to fiber state based on the
   * specified patch.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  patchRuntimeFlags(oldRuntimeFlags, patch9) {
    const newRuntimeFlags = patch4(oldRuntimeFlags, patch9);
    globalThis[currentFiberURI] = this;
    this.currentRuntimeFlags = newRuntimeFlags;
    return newRuntimeFlags;
  }
  /**
   * Initiates an asynchronous operation, by building a callback that will
   * resume execution, and then feeding that callback to the registration
   * function, handling error cases and repeated resumptions appropriately.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  initiateAsync(runtimeFlags2, asyncRegister) {
    let alreadyCalled = false;
    const callback = (effect4) => {
      if (!alreadyCalled) {
        alreadyCalled = true;
        this.tell(resume(effect4));
      }
    };
    if (interruptible(runtimeFlags2)) {
      this._asyncInterruptor = callback;
    }
    try {
      asyncRegister(callback);
    } catch (e) {
      callback(failCause(die(e)));
    }
  }
  pushStack(cont) {
    this._stack.push(cont);
    if (cont._op === "OnStep") {
      this._steps.push({
        refs: this.getFiberRefs(),
        flags: this.currentRuntimeFlags
      });
    }
  }
  popStack() {
    const item = this._stack.pop();
    if (item) {
      if (item._op === "OnStep") {
        this._steps.pop();
      }
      return item;
    }
    return;
  }
  getNextSuccessCont() {
    let frame = this.popStack();
    while (frame) {
      if (frame._op !== OP_ON_FAILURE) {
        return frame;
      }
      frame = this.popStack();
    }
  }
  getNextFailCont() {
    let frame = this.popStack();
    while (frame) {
      if (frame._op !== OP_ON_SUCCESS && frame._op !== OP_WHILE && frame._op !== OP_ITERATOR) {
        return frame;
      }
      frame = this.popStack();
    }
  }
  [OP_TAG](op) {
    return sync(() => unsafeGet3(this.currentContext, op));
  }
  ["Left"](op) {
    return fail2(op.left);
  }
  ["None"](_) {
    return fail2(new NoSuchElementException());
  }
  ["Right"](op) {
    return exitSucceed(op.right);
  }
  ["Some"](op) {
    return exitSucceed(op.value);
  }
  ["Micro"](op) {
    return unsafeAsync((microResume) => {
      let resume2 = microResume;
      const fiber = runFork(provideContext2(op, this.currentContext));
      fiber.addObserver((exit4) => {
        if (exit4._tag === "Success") {
          return resume2(exitSucceed(exit4.value));
        }
        switch (exit4.cause._tag) {
          case "Interrupt": {
            return resume2(exitFailCause(interrupt(none4)));
          }
          case "Fail": {
            return resume2(fail2(exit4.cause.error));
          }
          case "Die": {
            return resume2(die2(exit4.cause.defect));
          }
        }
      });
      return unsafeAsync((abortResume) => {
        resume2 = (_) => {
          abortResume(void_2);
        };
        fiber.unsafeInterrupt();
      });
    });
  }
  [OP_SYNC](op) {
    const value = internalCall(() => op.effect_instruction_i0());
    const cont = this.getNextSuccessCont();
    if (cont !== void 0) {
      if (!(cont._op in contOpSuccess)) {
        absurd(cont);
      }
      return contOpSuccess[cont._op](this, cont, value);
    } else {
      yieldedOpChannel.currentOp = exitSucceed(value);
      return YieldedOp;
    }
  }
  [OP_SUCCESS](op) {
    const oldCur = op;
    const cont = this.getNextSuccessCont();
    if (cont !== void 0) {
      if (!(cont._op in contOpSuccess)) {
        absurd(cont);
      }
      return contOpSuccess[cont._op](this, cont, oldCur.effect_instruction_i0);
    } else {
      yieldedOpChannel.currentOp = oldCur;
      return YieldedOp;
    }
  }
  [OP_FAILURE](op) {
    const cause3 = op.effect_instruction_i0;
    const cont = this.getNextFailCont();
    if (cont !== void 0) {
      switch (cont._op) {
        case OP_ON_FAILURE:
        case OP_ON_SUCCESS_AND_FAILURE: {
          if (!(interruptible(this.currentRuntimeFlags) && this.isInterrupted())) {
            return internalCall(() => cont.effect_instruction_i1(cause3));
          } else {
            return exitFailCause(stripFailures(cause3));
          }
        }
        case "OnStep": {
          if (!(interruptible(this.currentRuntimeFlags) && this.isInterrupted())) {
            return exitSucceed(exitFailCause(cause3));
          } else {
            return exitFailCause(stripFailures(cause3));
          }
        }
        case OP_REVERT_FLAGS: {
          this.patchRuntimeFlags(this.currentRuntimeFlags, cont.patch);
          if (interruptible(this.currentRuntimeFlags) && this.isInterrupted()) {
            return exitFailCause(sequential(cause3, this.getInterruptedCause()));
          } else {
            return exitFailCause(cause3);
          }
        }
        default: {
          absurd(cont);
        }
      }
    } else {
      yieldedOpChannel.currentOp = exitFailCause(cause3);
      return YieldedOp;
    }
  }
  [OP_WITH_RUNTIME](op) {
    return internalCall(() => op.effect_instruction_i0(this, running2(this.currentRuntimeFlags)));
  }
  ["Blocked"](op) {
    const refs = this.getFiberRefs();
    const flags = this.currentRuntimeFlags;
    if (this._steps.length > 0) {
      const frames = [];
      const snap = this._steps[this._steps.length - 1];
      let frame = this.popStack();
      while (frame && frame._op !== "OnStep") {
        frames.push(frame);
        frame = this.popStack();
      }
      this.setFiberRefs(snap.refs);
      this.currentRuntimeFlags = snap.flags;
      const patchRefs = diff6(snap.refs, refs);
      const patchFlags = diff4(snap.flags, flags);
      return exitSucceed(blocked(op.effect_instruction_i0, withFiberRuntime((newFiber) => {
        while (frames.length > 0) {
          newFiber.pushStack(frames.pop());
        }
        newFiber.setFiberRefs(patch7(newFiber.id(), newFiber.getFiberRefs())(patchRefs));
        newFiber.currentRuntimeFlags = patch4(patchFlags)(newFiber.currentRuntimeFlags);
        return op.effect_instruction_i1;
      })));
    }
    return uninterruptibleMask((restore) => flatMap8(forkDaemon(runRequestBlock(op.effect_instruction_i0)), () => restore(op.effect_instruction_i1)));
  }
  ["RunBlocked"](op) {
    return runBlockedRequests(op.effect_instruction_i0);
  }
  [OP_UPDATE_RUNTIME_FLAGS](op) {
    const updateFlags = op.effect_instruction_i0;
    const oldRuntimeFlags = this.currentRuntimeFlags;
    const newRuntimeFlags = patch4(oldRuntimeFlags, updateFlags);
    if (interruptible(newRuntimeFlags) && this.isInterrupted()) {
      return exitFailCause(this.getInterruptedCause());
    } else {
      this.patchRuntimeFlags(this.currentRuntimeFlags, updateFlags);
      if (op.effect_instruction_i1) {
        const revertFlags = diff4(newRuntimeFlags, oldRuntimeFlags);
        this.pushStack(new RevertFlags(revertFlags, op));
        return internalCall(() => op.effect_instruction_i1(oldRuntimeFlags));
      } else {
        return exitVoid;
      }
    }
  }
  [OP_ON_SUCCESS](op) {
    this.pushStack(op);
    return op.effect_instruction_i0;
  }
  ["OnStep"](op) {
    this.pushStack(op);
    return op.effect_instruction_i0;
  }
  [OP_ON_FAILURE](op) {
    this.pushStack(op);
    return op.effect_instruction_i0;
  }
  [OP_ON_SUCCESS_AND_FAILURE](op) {
    this.pushStack(op);
    return op.effect_instruction_i0;
  }
  [OP_ASYNC](op) {
    this._asyncBlockingOn = op.effect_instruction_i1;
    this.initiateAsync(this.currentRuntimeFlags, op.effect_instruction_i0);
    yieldedOpChannel.currentOp = op;
    return YieldedOp;
  }
  [OP_YIELD](op) {
    this._isYielding = false;
    yieldedOpChannel.currentOp = op;
    return YieldedOp;
  }
  [OP_WHILE](op) {
    const check2 = op.effect_instruction_i0;
    const body = op.effect_instruction_i1;
    if (check2()) {
      this.pushStack(op);
      return body();
    } else {
      return exitVoid;
    }
  }
  [OP_ITERATOR](op) {
    return contOpSuccess[OP_ITERATOR](this, op, void 0);
  }
  [OP_COMMIT](op) {
    return internalCall(() => op.commit());
  }
  /**
   * The main run-loop for evaluating effects.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  runLoop(effect0) {
    let cur = effect0;
    this.currentOpCount = 0;
    while (true) {
      if ((this.currentRuntimeFlags & OpSupervision) !== 0) {
        this.currentSupervisor.onEffect(this, cur);
      }
      if (this._queue.length > 0) {
        cur = this.drainQueueWhileRunning(this.currentRuntimeFlags, cur);
      }
      if (!this._isYielding) {
        this.currentOpCount += 1;
        const shouldYield = this.currentScheduler.shouldYield(this);
        if (shouldYield !== false) {
          this._isYielding = true;
          this.currentOpCount = 0;
          const oldCur = cur;
          cur = flatMap8(yieldNow({
            priority: shouldYield
          }), () => oldCur);
        }
      }
      try {
        cur = this.currentTracer.context(() => {
          if (_version !== cur[EffectTypeId2]._V) {
            return dieMessage(`Cannot execute an Effect versioned ${cur[EffectTypeId2]._V} with a Runtime of version ${getCurrentVersion()}`);
          }
          return this[cur._op](cur);
        }, this);
        if (cur === YieldedOp) {
          const op = yieldedOpChannel.currentOp;
          if (op._op === OP_YIELD || op._op === OP_ASYNC) {
            return YieldedOp;
          }
          yieldedOpChannel.currentOp = null;
          return op._op === OP_SUCCESS || op._op === OP_FAILURE ? op : exitFailCause(die(op));
        }
      } catch (e) {
        if (cur !== YieldedOp && !hasProperty(cur, "_op") || !(cur._op in this)) {
          cur = dieMessage(`Not a valid effect: ${toStringUnknown(cur)}`);
        } else if (isInterruptedException(e)) {
          cur = exitFailCause(sequential(die(e), interrupt(none4)));
        } else {
          cur = die2(e);
        }
      }
    }
  }
  run = () => {
    this.drainQueueOnCurrentThread();
  };
};
var currentMinimumLogLevel = /* @__PURE__ */ globalValue("effect/FiberRef/currentMinimumLogLevel", () => fiberRefUnsafeMake(fromLiteral("Info")));
var loggerWithConsoleLog = (self) => makeLogger((opts) => {
  const services = getOrDefault2(opts.context, currentServices);
  get4(services, consoleTag).unsafe.log(self.log(opts));
});
var loggerWithLeveledLog = (self) => makeLogger((opts) => {
  const services = getOrDefault2(opts.context, currentServices);
  const unsafeLogger = get4(services, consoleTag).unsafe;
  switch (opts.logLevel._tag) {
    case "Debug":
      return unsafeLogger.debug(self.log(opts));
    case "Info":
      return unsafeLogger.info(self.log(opts));
    case "Trace":
      return unsafeLogger.trace(self.log(opts));
    case "Warning":
      return unsafeLogger.warn(self.log(opts));
    case "Error":
    case "Fatal":
      return unsafeLogger.error(self.log(opts));
    default:
      return unsafeLogger.log(self.log(opts));
  }
});
var loggerWithConsoleError = (self) => makeLogger((opts) => {
  const services = getOrDefault2(opts.context, currentServices);
  get4(services, consoleTag).unsafe.error(self.log(opts));
});
var defaultLogger = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Logger/defaultLogger"), () => loggerWithConsoleLog(stringLogger));
var jsonLogger2 = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Logger/jsonLogger"), () => loggerWithConsoleLog(jsonLogger));
var logFmtLogger = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Logger/logFmtLogger"), () => loggerWithConsoleLog(logfmtLogger));
var prettyLogger2 = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Logger/prettyLogger"), () => prettyLoggerDefault);
var structuredLogger2 = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Logger/structuredLogger"), () => loggerWithConsoleLog(structuredLogger));
var tracerLogger = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Logger/tracerLogger"), () => makeLogger(({
  annotations: annotations2,
  cause: cause3,
  context: context7,
  fiberId: fiberId3,
  logLevel,
  message
}) => {
  const span4 = getOption2(getOrDefault(context7, currentContext), spanTag);
  if (span4._tag === "None" || span4.value._tag === "ExternalSpan") {
    return;
  }
  const clockService = unsafeGet3(getOrDefault(context7, currentServices), clockTag);
  const attributes = {};
  for (const [key, value] of annotations2) {
    attributes[key] = value;
  }
  attributes["effect.fiberId"] = threadName2(fiberId3);
  attributes["effect.logLevel"] = logLevel.label;
  if (cause3 !== null && cause3._tag !== "Empty") {
    attributes["effect.cause"] = pretty(cause3, {
      renderErrorCause: true
    });
  }
  span4.value.event(toStringUnknown(Array.isArray(message) ? message[0] : message), clockService.unsafeCurrentTimeNanos(), attributes);
}));
var loggerWithSpanAnnotations = (self) => mapInputOptions(self, (options) => {
  const span4 = flatMap(get10(options.context, currentContext), getOption2(spanTag));
  if (span4._tag === "None") {
    return options;
  }
  return {
    ...options,
    annotations: pipe(options.annotations, set4("effect.traceId", span4.value.traceId), set4("effect.spanId", span4.value.spanId), span4.value._tag === "Span" ? set4("effect.spanName", span4.value.name) : identity)
  };
});
var currentLoggers = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentLoggers"), () => fiberRefUnsafeMakeHashSet(make11(defaultLogger, tracerLogger)));
var batchedLogger = /* @__PURE__ */ dual(3, (self, window2, f) => flatMap8(scope, (scope5) => {
  let buffer3 = [];
  const flush = suspend(() => {
    if (buffer3.length === 0) {
      return void_2;
    }
    const arr = buffer3;
    buffer3 = [];
    return f(arr);
  });
  return uninterruptibleMask((restore) => pipe(sleep3(window2), zipRight2(flush), forever, restore, forkDaemon, flatMap8((fiber) => scopeAddFinalizer(scope5, interruptFiber(fiber))), zipRight2(addFinalizer(() => flush)), as2(makeLogger((options) => {
    buffer3.push(self.log(options));
  }))));
}));
var annotateLogsScoped = function() {
  if (typeof arguments[0] === "string") {
    return fiberRefLocallyScopedWith(currentLogAnnotations, set4(arguments[0], arguments[1]));
  }
  const entries2 = Object.entries(arguments[0]);
  return fiberRefLocallyScopedWith(currentLogAnnotations, mutate3((annotations2) => {
    for (let i = 0; i < entries2.length; i++) {
      const [key, value] = entries2[i];
      set4(annotations2, key, value);
    }
    return annotations2;
  }));
};
var whenLogLevel = /* @__PURE__ */ dual(2, (effect4, level) => {
  const requiredLogLevel = typeof level === "string" ? fromLiteral(level) : level;
  return withFiberRuntime((fiberState) => {
    const minimumLogLevel3 = fiberState.getFiberRef(currentMinimumLogLevel);
    if (greaterThan3(minimumLogLevel3, requiredLogLevel)) {
      return succeed(none2());
    }
    return map11(effect4, some2);
  });
});
var acquireRelease = /* @__PURE__ */ dual((args2) => isEffect(args2[0]), (acquire, release) => uninterruptible(tap2(acquire, (a) => addFinalizer((exit4) => release(a, exit4)))));
var acquireReleaseInterruptible = /* @__PURE__ */ dual((args2) => isEffect(args2[0]), (acquire, release) => ensuring(acquire, addFinalizer((exit4) => release(exit4))));
var addFinalizer = (finalizer3) => withFiberRuntime((runtime5) => {
  const acquireRefs = runtime5.getFiberRefs();
  const acquireFlags = disable2(runtime5.currentRuntimeFlags, Interruption);
  return flatMap8(scope, (scope5) => scopeAddFinalizerExit(scope5, (exit4) => withFiberRuntime((runtimeFinalizer) => {
    const preRefs = runtimeFinalizer.getFiberRefs();
    const preFlags = runtimeFinalizer.currentRuntimeFlags;
    const patchRefs = diff6(preRefs, acquireRefs);
    const patchFlags = diff4(preFlags, acquireFlags);
    const inverseRefs = diff6(acquireRefs, preRefs);
    runtimeFinalizer.setFiberRefs(patch7(patchRefs, runtimeFinalizer.id(), acquireRefs));
    return ensuring(withRuntimeFlags(finalizer3(exit4), patchFlags), sync(() => {
      runtimeFinalizer.setFiberRefs(patch7(inverseRefs, runtimeFinalizer.id(), runtimeFinalizer.getFiberRefs()));
    }));
  })));
});
var daemonChildren = (self) => {
  const forkScope = fiberRefLocally(currentForkScopeOverride, some2(globalScope));
  return forkScope(self);
};
var _existsParFound = /* @__PURE__ */ Symbol.for("effect/Effect/existsPar/found");
var exists2 = /* @__PURE__ */ dual((args2) => isIterable(args2[0]) && !isEffect(args2[0]), (elements, predicate, options) => matchSimple(options?.concurrency, () => suspend(() => existsLoop(elements[Symbol.iterator](), 0, predicate)), () => matchEffect(forEach9(elements, (a, i) => if_(predicate(a, i), {
  onTrue: () => fail2(_existsParFound),
  onFalse: () => void_2
}), options), {
  onFailure: (e) => e === _existsParFound ? succeed(true) : fail2(e),
  onSuccess: () => succeed(false)
})));
var existsLoop = (iterator, index, f) => {
  const next = iterator.next();
  if (next.done) {
    return succeed(false);
  }
  return pipe(flatMap8(f(next.value, index), (b) => b ? succeed(b) : existsLoop(iterator, index + 1, f)));
};
var filter7 = /* @__PURE__ */ dual((args2) => isIterable(args2[0]) && !isEffect(args2[0]), (elements, predicate, options) => {
  const predicate_ = options?.negate ? (a, i) => map11(predicate(a, i), not) : predicate;
  return matchSimple(options?.concurrency, () => suspend(() => fromIterable2(elements).reduceRight((effect4, a, i) => zipWith4(effect4, suspend(() => predicate_(a, i)), (list, b) => b ? [a, ...list] : list), sync(() => new Array()))), () => map11(forEach9(elements, (a, i) => map11(predicate_(a, i), (b) => b ? some2(a) : none2()), options), getSomes2));
});
var allResolveInput = (input) => {
  if (Array.isArray(input) || isIterable(input)) {
    return [input, none2()];
  }
  const keys6 = Object.keys(input);
  const size17 = keys6.length;
  return [keys6.map((k) => input[k]), some2((values4) => {
    const res = {};
    for (let i = 0; i < size17; i++) {
      res[keys6[i]] = values4[i];
    }
    return res;
  })];
};
var allValidate = (effects, reconcile, options) => {
  const eitherEffects = [];
  for (const effect4 of effects) {
    eitherEffects.push(either2(effect4));
  }
  return flatMap8(forEach9(eitherEffects, identity, {
    concurrency: options?.concurrency,
    batching: options?.batching,
    concurrentFinalizers: options?.concurrentFinalizers
  }), (eithers) => {
    const none11 = none2();
    const size17 = eithers.length;
    const errors = new Array(size17);
    const successes = new Array(size17);
    let errored = false;
    for (let i = 0; i < size17; i++) {
      const either7 = eithers[i];
      if (either7._tag === "Left") {
        errors[i] = some2(either7.left);
        errored = true;
      } else {
        successes[i] = either7.right;
        errors[i] = none11;
      }
    }
    if (errored) {
      return reconcile._tag === "Some" ? fail2(reconcile.value(errors)) : fail2(errors);
    } else if (options?.discard) {
      return void_2;
    }
    return reconcile._tag === "Some" ? succeed(reconcile.value(successes)) : succeed(successes);
  });
};
var allEither = (effects, reconcile, options) => {
  const eitherEffects = [];
  for (const effect4 of effects) {
    eitherEffects.push(either2(effect4));
  }
  if (options?.discard) {
    return forEach9(eitherEffects, identity, {
      concurrency: options?.concurrency,
      batching: options?.batching,
      discard: true,
      concurrentFinalizers: options?.concurrentFinalizers
    });
  }
  return map11(forEach9(eitherEffects, identity, {
    concurrency: options?.concurrency,
    batching: options?.batching,
    concurrentFinalizers: options?.concurrentFinalizers
  }), (eithers) => reconcile._tag === "Some" ? reconcile.value(eithers) : eithers);
};
var all3 = (arg, options) => {
  const [effects, reconcile] = allResolveInput(arg);
  if (options?.mode === "validate") {
    return allValidate(effects, reconcile, options);
  } else if (options?.mode === "either") {
    return allEither(effects, reconcile, options);
  }
  return options?.discard !== true && reconcile._tag === "Some" ? map11(forEach9(effects, identity, options), reconcile.value) : forEach9(effects, identity, options);
};
var allWith = (options) => (arg) => all3(arg, options);
var allSuccesses = (elements, options) => map11(all3(fromIterable2(elements).map(exit), options), filterMap3((exit4) => exitIsSuccess(exit4) ? some2(exit4.effect_instruction_i0) : none2()));
var replicate2 = /* @__PURE__ */ dual(2, (self, n) => Array.from({
  length: n
}, () => self));
var replicateEffect = /* @__PURE__ */ dual((args2) => isEffect(args2[0]), (self, n, options) => all3(replicate2(self, n), options));
var forEach9 = /* @__PURE__ */ dual((args2) => isIterable(args2[0]), (self, f, options) => withFiberRuntime((r) => {
  const isRequestBatchingEnabled = options?.batching === true || options?.batching === "inherit" && r.getFiberRef(currentRequestBatching);
  if (options?.discard) {
    return match9(options.concurrency, () => finalizersMaskInternal(sequential3, options?.concurrentFinalizers)((restore) => isRequestBatchingEnabled ? forEachConcurrentDiscard(self, (a, i) => restore(f(a, i)), true, false, 1) : forEachSequentialDiscard(self, (a, i) => restore(f(a, i)))), () => finalizersMaskInternal(parallel3, options?.concurrentFinalizers)((restore) => forEachConcurrentDiscard(self, (a, i) => restore(f(a, i)), isRequestBatchingEnabled, false)), (n) => finalizersMaskInternal(parallelN2(n), options?.concurrentFinalizers)((restore) => forEachConcurrentDiscard(self, (a, i) => restore(f(a, i)), isRequestBatchingEnabled, false, n)));
  }
  return match9(options?.concurrency, () => finalizersMaskInternal(sequential3, options?.concurrentFinalizers)((restore) => isRequestBatchingEnabled ? forEachParN(self, 1, (a, i) => restore(f(a, i)), true) : forEachSequential(self, (a, i) => restore(f(a, i)))), () => finalizersMaskInternal(parallel3, options?.concurrentFinalizers)((restore) => forEachParUnbounded(self, (a, i) => restore(f(a, i)), isRequestBatchingEnabled)), (n) => finalizersMaskInternal(parallelN2(n), options?.concurrentFinalizers)((restore) => forEachParN(self, n, (a, i) => restore(f(a, i)), isRequestBatchingEnabled)));
}));
var forEachParUnbounded = (self, f, batching) => suspend(() => {
  const as11 = fromIterable2(self);
  const array4 = new Array(as11.length);
  const fn2 = (a, i) => flatMap8(f(a, i), (b) => sync(() => array4[i] = b));
  return zipRight2(forEachConcurrentDiscard(as11, fn2, batching, false), succeed(array4));
});
var forEachConcurrentDiscard = (self, f, batching, processAll, n) => uninterruptibleMask((restore) => transplant((graft) => withFiberRuntime((parent2) => {
  let todos = Array.from(self).reverse();
  let target = todos.length;
  if (target === 0) {
    return void_2;
  }
  let counter6 = 0;
  let interrupted3 = false;
  const fibersCount = n ? Math.min(todos.length, n) : todos.length;
  const fibers = /* @__PURE__ */ new Set();
  const results = new Array();
  const interruptAll2 = () => fibers.forEach((fiber) => {
    fiber.currentScheduler.scheduleTask(() => {
      fiber.unsafeInterruptAsFork(parent2.id());
    }, 0);
  });
  const startOrder = new Array();
  const joinOrder = new Array();
  const residual = new Array();
  const collectExits = () => {
    const exits = results.filter(({
      exit: exit4
    }) => exit4._tag === "Failure").sort((a, b) => a.index < b.index ? -1 : a.index === b.index ? 0 : 1).map(({
      exit: exit4
    }) => exit4);
    if (exits.length === 0) {
      exits.push(exitVoid);
    }
    return exits;
  };
  const runFiber = (eff, interruptImmediately = false) => {
    const runnable = uninterruptible(graft(eff));
    const fiber = unsafeForkUnstarted(runnable, parent2, parent2.currentRuntimeFlags, globalScope);
    parent2.currentScheduler.scheduleTask(() => {
      if (interruptImmediately) {
        fiber.unsafeInterruptAsFork(parent2.id());
      }
      fiber.resume(runnable);
    }, 0);
    return fiber;
  };
  const onInterruptSignal = () => {
    if (!processAll) {
      target -= todos.length;
      todos = [];
    }
    interrupted3 = true;
    interruptAll2();
  };
  const stepOrExit = batching ? step2 : exit;
  const processingFiber = runFiber(async_((resume2) => {
    const pushResult = (res, index) => {
      if (res._op === "Blocked") {
        residual.push(res);
      } else {
        results.push({
          index,
          exit: res
        });
        if (res._op === "Failure" && !interrupted3) {
          onInterruptSignal();
        }
      }
    };
    const next = () => {
      if (todos.length > 0) {
        const a = todos.pop();
        let index = counter6++;
        const returnNextElement = () => {
          const a2 = todos.pop();
          index = counter6++;
          return flatMap8(yieldNow(), () => flatMap8(stepOrExit(restore(f(a2, index))), onRes));
        };
        const onRes = (res) => {
          if (todos.length > 0) {
            pushResult(res, index);
            if (todos.length > 0) {
              return returnNextElement();
            }
          }
          return succeed(res);
        };
        const todo = flatMap8(stepOrExit(restore(f(a, index))), onRes);
        const fiber = runFiber(todo);
        startOrder.push(fiber);
        fibers.add(fiber);
        if (interrupted3) {
          fiber.currentScheduler.scheduleTask(() => {
            fiber.unsafeInterruptAsFork(parent2.id());
          }, 0);
        }
        fiber.addObserver((wrapped) => {
          let exit4;
          if (wrapped._op === "Failure") {
            exit4 = wrapped;
          } else {
            exit4 = wrapped.effect_instruction_i0;
          }
          joinOrder.push(fiber);
          fibers.delete(fiber);
          pushResult(exit4, index);
          if (results.length === target) {
            resume2(succeed(getOrElse(exitCollectAll(collectExits(), {
              parallel: true
            }), () => exitVoid)));
          } else if (residual.length + results.length === target) {
            const exits = collectExits();
            const requests = residual.map((blocked3) => blocked3.effect_instruction_i0).reduce(par);
            resume2(succeed(blocked(requests, forEachConcurrentDiscard([getOrElse(exitCollectAll(exits, {
              parallel: true
            }), () => exitVoid), ...residual.map((blocked3) => blocked3.effect_instruction_i1)], (i) => i, batching, true, n))));
          } else {
            next();
          }
        });
      }
    };
    for (let i = 0; i < fibersCount; i++) {
      next();
    }
  }));
  return asVoid2(onExit(flatten7(restore(join2(processingFiber))), exitMatch({
    onFailure: (cause3) => {
      onInterruptSignal();
      const target2 = residual.length + 1;
      const concurrency = Math.min(typeof n === "number" ? n : residual.length, residual.length);
      const toPop = Array.from(residual);
      return async_((cb) => {
        let count3 = 0;
        let index = 0;
        const check2 = (index2, hitNext) => (exit4) => {
          count3++;
          if (count3 === target2) {
            cb(exitSucceed(exitFailCause(cause3)));
          }
          if (toPop.length > 0 && hitNext) {
            next();
          }
        };
        const next = () => {
          runFiber(toPop.pop(), true).addObserver(check2(index, true));
          index++;
        };
        processingFiber.addObserver(check2(index, false));
        index++;
        for (let i = 0; i < concurrency; i++) {
          next();
        }
      });
    },
    onSuccess: () => forEachSequential(joinOrder, (f2) => f2.inheritAll)
  })));
})));
var forEachParN = (self, n, f, batching) => suspend(() => {
  const as11 = fromIterable2(self);
  const array4 = new Array(as11.length);
  const fn2 = (a, i) => map11(f(a, i), (b) => array4[i] = b);
  return zipRight2(forEachConcurrentDiscard(as11, fn2, batching, false, n), succeed(array4));
});
var fork = (self) => withFiberRuntime((state, status2) => succeed(unsafeFork2(self, state, status2.runtimeFlags)));
var forkDaemon = (self) => forkWithScopeOverride(self, globalScope);
var forkWithErrorHandler = /* @__PURE__ */ dual(2, (self, handler) => fork(onError(self, (cause3) => {
  const either7 = failureOrCause(cause3);
  switch (either7._tag) {
    case "Left":
      return handler(either7.left);
    case "Right":
      return failCause(either7.right);
  }
})));
var unsafeFork2 = (effect4, parentFiber, parentRuntimeFlags, overrideScope = null) => {
  const childFiber = unsafeMakeChildFiber(effect4, parentFiber, parentRuntimeFlags, overrideScope);
  childFiber.resume(effect4);
  return childFiber;
};
var unsafeForkUnstarted = (effect4, parentFiber, parentRuntimeFlags, overrideScope = null) => {
  const childFiber = unsafeMakeChildFiber(effect4, parentFiber, parentRuntimeFlags, overrideScope);
  return childFiber;
};
var unsafeMakeChildFiber = (effect4, parentFiber, parentRuntimeFlags, overrideScope = null) => {
  const childId = unsafeMake2();
  const parentFiberRefs = parentFiber.getFiberRefs();
  const childFiberRefs = forkAs(parentFiberRefs, childId);
  const childFiber = new FiberRuntime(childId, childFiberRefs, parentRuntimeFlags);
  const childContext = getOrDefault(childFiberRefs, currentContext);
  const supervisor = childFiber.currentSupervisor;
  supervisor.onStart(childContext, effect4, some2(parentFiber), childFiber);
  childFiber.addObserver((exit4) => supervisor.onEnd(exit4, childFiber));
  const parentScope = overrideScope !== null ? overrideScope : pipe(parentFiber.getFiberRef(currentForkScopeOverride), getOrElse(() => parentFiber.scope()));
  parentScope.add(parentRuntimeFlags, childFiber);
  return childFiber;
};
var forkWithScopeOverride = (self, scopeOverride) => withFiberRuntime((parentFiber, parentStatus) => succeed(unsafeFork2(self, parentFiber, parentStatus.runtimeFlags, scopeOverride)));
var mergeAll2 = /* @__PURE__ */ dual((args2) => isFunction2(args2[2]), (elements, zero2, f, options) => matchSimple(options?.concurrency, () => fromIterable2(elements).reduce((acc, a, i) => zipWith4(acc, a, (acc2, a2) => f(acc2, a2, i)), succeed(zero2)), () => flatMap8(make29(zero2), (acc) => flatMap8(forEach9(elements, (effect4, i) => flatMap8(effect4, (a) => update3(acc, (b) => f(b, a, i))), options), () => get13(acc)))));
var partition4 = /* @__PURE__ */ dual((args2) => isIterable(args2[0]), (elements, f, options) => pipe(forEach9(elements, (a, i) => either2(f(a, i)), options), map11((chunk3) => partitionMap4(chunk3, identity))));
var validateAll = /* @__PURE__ */ dual((args2) => isIterable(args2[0]), (elements, f, options) => flatMap8(partition4(elements, f, {
  concurrency: options?.concurrency,
  batching: options?.batching,
  concurrentFinalizers: options?.concurrentFinalizers
}), ([es, bs]) => isNonEmptyArray2(es) ? fail2(es) : options?.discard ? void_2 : succeed(bs)));
var raceAll = (all6) => {
  const list = fromIterable3(all6);
  if (!isNonEmpty2(list)) {
    return dieSync(() => new IllegalArgumentException(`Received an empty collection of effects`));
  }
  const self = headNonEmpty2(list);
  const effects = tailNonEmpty2(list);
  const inheritAll3 = (res) => pipe(inheritAll(res[1]), as2(res[0]));
  return pipe(deferredMake(), flatMap8((done11) => pipe(make29(effects.length), flatMap8((fails) => uninterruptibleMask((restore) => pipe(fork(interruptible2(self)), flatMap8((head6) => pipe(effects, forEachSequential((effect4) => fork(interruptible2(effect4))), map11((fibers) => unsafeFromArray(fibers)), map11((tail2) => pipe(tail2, prepend2(head6))), tap2((fibers) => pipe(fibers, reduce2(void_2, (effect4, fiber) => pipe(effect4, zipRight2(pipe(_await2(fiber), flatMap8(raceAllArbiter(fibers, fiber, done11, fails)), fork, asVoid2)))))), flatMap8((fibers) => pipe(restore(pipe(_await(done11), flatMap8(inheritAll3))), onInterrupt(() => pipe(fibers, reduce2(void_2, (effect4, fiber) => pipe(effect4, zipLeft2(interruptFiber(fiber))))))))))))))));
};
var raceAllArbiter = (fibers, winner, deferred, fails) => (exit4) => exitMatchEffect(exit4, {
  onFailure: (cause3) => pipe(modify5(fails, (fails2) => [fails2 === 0 ? pipe(deferredFailCause(deferred, cause3), asVoid2) : void_2, fails2 - 1]), flatten7),
  onSuccess: (value) => pipe(deferredSucceed(deferred, [value, winner]), flatMap8((set10) => set10 ? pipe(fromIterable3(fibers), reduce2(void_2, (effect4, fiber) => fiber === winner ? effect4 : pipe(effect4, zipLeft2(interruptFiber(fiber))))) : void_2))
});
var reduceEffect = /* @__PURE__ */ dual((args2) => isIterable(args2[0]) && !isEffect(args2[0]), (elements, zero2, f, options) => matchSimple(options?.concurrency, () => fromIterable2(elements).reduce((acc, a, i) => zipWith4(acc, a, (acc2, a2) => f(acc2, a2, i)), zero2), () => suspend(() => pipe(mergeAll2([zero2, ...elements], none2(), (acc, elem, i) => {
  switch (acc._tag) {
    case "None": {
      return some2(elem);
    }
    case "Some": {
      return some2(f(acc.value, elem, i));
    }
  }
}, options), map11((option3) => {
  switch (option3._tag) {
    case "None": {
      throw new Error("BUG: Effect.reduceEffect - please report an issue at https://github.com/Effect-TS/effect/issues");
    }
    case "Some": {
      return option3.value;
    }
  }
})))));
var parallelFinalizers = (self) => contextWithEffect((context7) => match2(getOption2(context7, scopeTag), {
  onNone: () => self,
  onSome: (scope5) => {
    switch (scope5.strategy._tag) {
      case "Parallel":
        return self;
      case "Sequential":
      case "ParallelN":
        return flatMap8(scopeFork(scope5, parallel3), (inner) => scopeExtend(self, inner));
    }
  }
}));
var parallelNFinalizers = (parallelism) => (self) => contextWithEffect((context7) => match2(getOption2(context7, scopeTag), {
  onNone: () => self,
  onSome: (scope5) => {
    if (scope5.strategy._tag === "ParallelN" && scope5.strategy.parallelism === parallelism) {
      return self;
    }
    return flatMap8(scopeFork(scope5, parallelN2(parallelism)), (inner) => scopeExtend(self, inner));
  }
}));
var finalizersMask = (strategy) => (self) => finalizersMaskInternal(strategy, true)(self);
var finalizersMaskInternal = (strategy, concurrentFinalizers) => (self) => contextWithEffect((context7) => match2(getOption2(context7, scopeTag), {
  onNone: () => self(identity),
  onSome: (scope5) => {
    if (concurrentFinalizers === true) {
      const patch9 = strategy._tag === "Parallel" ? parallelFinalizers : strategy._tag === "Sequential" ? sequentialFinalizers : parallelNFinalizers(strategy.parallelism);
      switch (scope5.strategy._tag) {
        case "Parallel":
          return patch9(self(parallelFinalizers));
        case "Sequential":
          return patch9(self(sequentialFinalizers));
        case "ParallelN":
          return patch9(self(parallelNFinalizers(scope5.strategy.parallelism)));
      }
    } else {
      return self(identity);
    }
  }
}));
var scopeWith = (f) => flatMap8(scopeTag, f);
var scopedWith = (f) => flatMap8(scopeMake(), (scope5) => onExit(f(scope5), (exit4) => scope5.close(exit4)));
var scopedEffect = (effect4) => flatMap8(scopeMake(), (scope5) => scopeUse(effect4, scope5));
var sequentialFinalizers = (self) => contextWithEffect((context7) => match2(getOption2(context7, scopeTag), {
  onNone: () => self,
  onSome: (scope5) => {
    switch (scope5.strategy._tag) {
      case "Sequential":
        return self;
      case "Parallel":
      case "ParallelN":
        return flatMap8(scopeFork(scope5, sequential3), (inner) => scopeExtend(self, inner));
    }
  }
}));
var tagMetricsScoped = (key, value) => labelMetricsScoped([make30(key, value)]);
var labelMetricsScoped = (labels) => fiberRefLocallyScopedWith(currentMetricLabels, (old) => union2(old, labels));
var using = /* @__PURE__ */ dual(2, (self, use2) => scopedWith((scope5) => flatMap8(scopeExtend(self, scope5), use2)));
var validate = /* @__PURE__ */ dual((args2) => isEffect(args2[1]), (self, that, options) => validateWith(self, that, (a, b) => [a, b], options));
var validateWith = /* @__PURE__ */ dual((args2) => isEffect(args2[1]), (self, that, f, options) => flatten7(zipWithOptions(exit(self), exit(that), (ea, eb) => exitZipWith(ea, eb, {
  onSuccess: f,
  onFailure: (ca, cb) => options?.concurrent ? parallel(ca, cb) : sequential(ca, cb)
}), options)));
var validateFirst = /* @__PURE__ */ dual((args2) => isIterable(args2[0]), (elements, f, options) => flip(forEach9(elements, (a, i) => flip(f(a, i)), options)));
var withClockScoped = (c) => fiberRefLocallyScopedWith(currentServices, add2(clockTag, c));
var withRandomScoped = (value) => fiberRefLocallyScopedWith(currentServices, add2(randomTag, value));
var withConfigProviderScoped = (provider) => fiberRefLocallyScopedWith(currentServices, add2(configProviderTag, provider));
var withEarlyRelease = (self) => scopeWith((parent2) => flatMap8(scopeFork(parent2, sequential2), (child) => pipe(self, scopeExtend(child), map11((value) => [fiberIdWith((fiberId3) => scopeClose(child, exitInterrupt(fiberId3))), value]))));
var zipOptions = /* @__PURE__ */ dual((args2) => isEffect(args2[1]), (self, that, options) => zipWithOptions(self, that, (a, b) => [a, b], options));
var zipLeftOptions = /* @__PURE__ */ dual((args2) => isEffect(args2[1]), (self, that, options) => {
  if (options?.concurrent !== true && (options?.batching === void 0 || options.batching === false)) {
    return zipLeft2(self, that);
  }
  return zipWithOptions(self, that, (a, _) => a, options);
});
var zipRightOptions = /* @__PURE__ */ dual((args2) => isEffect(args2[1]), (self, that, options) => {
  if (options?.concurrent !== true && (options?.batching === void 0 || options.batching === false)) {
    return zipRight2(self, that);
  }
  return zipWithOptions(self, that, (_, b) => b, options);
});
var zipWithOptions = /* @__PURE__ */ dual((args2) => isEffect(args2[1]), (self, that, f, options) => map11(all3([self, that], {
  concurrency: options?.concurrent ? 2 : 1,
  batching: options?.batching,
  concurrentFinalizers: options?.concurrentFinalizers
}), ([a, a2]) => f(a, a2)));
var withRuntimeFlagsScoped = (update6) => {
  if (update6 === empty17) {
    return void_2;
  }
  return pipe(runtimeFlags, flatMap8((runtimeFlags2) => {
    const updatedRuntimeFlags = patch4(runtimeFlags2, update6);
    const revertRuntimeFlags = diff4(updatedRuntimeFlags, runtimeFlags2);
    return pipe(updateRuntimeFlags(update6), zipRight2(addFinalizer(() => updateRuntimeFlags(revertRuntimeFlags))), asVoid2);
  }), uninterruptible);
};
var scopeTag = /* @__PURE__ */ GenericTag("effect/Scope");
var scope = scopeTag;
var scopeUnsafeAddFinalizer = (scope5, fin) => {
  if (scope5.state._tag === "Open") {
    scope5.state.finalizers.set({}, fin);
  }
};
var ScopeImplProto = {
  [ScopeTypeId]: ScopeTypeId,
  [CloseableScopeTypeId]: CloseableScopeTypeId,
  pipe() {
    return pipeArguments(this, arguments);
  },
  fork(strategy) {
    return sync(() => {
      const newScope = scopeUnsafeMake(strategy);
      if (this.state._tag === "Closed") {
        newScope.state = this.state;
        return newScope;
      }
      const key = {};
      const fin = (exit4) => newScope.close(exit4);
      this.state.finalizers.set(key, fin);
      scopeUnsafeAddFinalizer(newScope, (_) => sync(() => {
        if (this.state._tag === "Open") {
          this.state.finalizers.delete(key);
        }
      }));
      return newScope;
    });
  },
  close(exit4) {
    return suspend(() => {
      if (this.state._tag === "Closed") {
        return void_2;
      }
      const finalizers = Array.from(this.state.finalizers.values()).reverse();
      this.state = {
        _tag: "Closed",
        exit: exit4
      };
      if (finalizers.length === 0) {
        return void_2;
      }
      return isSequential(this.strategy) ? pipe(forEachSequential(finalizers, (fin) => exit(fin(exit4))), flatMap8((results) => pipe(exitCollectAll(results), map2(exitAsVoid), getOrElse(() => exitVoid)))) : isParallel(this.strategy) ? pipe(forEachParUnbounded(finalizers, (fin) => exit(fin(exit4)), false), flatMap8((results) => pipe(exitCollectAll(results, {
        parallel: true
      }), map2(exitAsVoid), getOrElse(() => exitVoid)))) : pipe(forEachParN(finalizers, this.strategy.parallelism, (fin) => exit(fin(exit4)), false), flatMap8((results) => pipe(exitCollectAll(results, {
        parallel: true
      }), map2(exitAsVoid), getOrElse(() => exitVoid))));
    });
  },
  addFinalizer(fin) {
    return suspend(() => {
      if (this.state._tag === "Closed") {
        return fin(this.state.exit);
      }
      this.state.finalizers.set({}, fin);
      return void_2;
    });
  }
};
var scopeUnsafeMake = (strategy = sequential2) => {
  const scope5 = Object.create(ScopeImplProto);
  scope5.strategy = strategy;
  scope5.state = {
    _tag: "Open",
    finalizers: /* @__PURE__ */ new Map()
  };
  return scope5;
};
var scopeMake = (strategy = sequential2) => sync(() => scopeUnsafeMake(strategy));
var scopeExtend = /* @__PURE__ */ dual(2, (effect4, scope5) => mapInputContext(
  effect4,
  // @ts-expect-error
  merge3(make6(scopeTag, scope5))
));
var scopeUse = /* @__PURE__ */ dual(2, (effect4, scope5) => pipe(effect4, scopeExtend(scope5), onExit((exit4) => scope5.close(exit4))));
var fiberRefUnsafeMakeSupervisor = (initial) => fiberRefUnsafeMakePatch(initial, {
  differ: differ2,
  fork: empty28
});
var fiberRefLocallyScoped = /* @__PURE__ */ dual(2, (self, value) => asVoid2(acquireRelease(flatMap8(fiberRefGet(self), (oldValue) => as2(fiberRefSet(self, value), oldValue)), (oldValue) => fiberRefSet(self, oldValue))));
var fiberRefLocallyScopedWith = /* @__PURE__ */ dual(2, (self, f) => fiberRefGetWith(self, (a) => fiberRefLocallyScoped(self, f(a))));
var currentRuntimeFlags = /* @__PURE__ */ fiberRefUnsafeMakeRuntimeFlags(none5);
var currentSupervisor = /* @__PURE__ */ fiberRefUnsafeMakeSupervisor(none8);
var fiberAwaitAll = (fibers) => forEach9(fibers, _await2);
var fiberAll = (fibers) => {
  const _fiberAll = {
    ...CommitPrototype2,
    commit() {
      return join2(this);
    },
    [FiberTypeId]: fiberVariance2,
    id: () => fromIterable2(fibers).reduce((id2, fiber) => combine3(id2, fiber.id()), none4),
    await: exit(forEachParUnbounded(fibers, (fiber) => flatten7(fiber.await), false)),
    children: map11(forEachParUnbounded(fibers, (fiber) => fiber.children, false), flatten2),
    inheritAll: forEachSequentialDiscard(fibers, (fiber) => fiber.inheritAll),
    poll: map11(forEachSequential(fibers, (fiber) => fiber.poll), reduceRight(some2(exitSucceed(new Array())), (optionB, optionA) => {
      switch (optionA._tag) {
        case "None": {
          return none2();
        }
        case "Some": {
          switch (optionB._tag) {
            case "None": {
              return none2();
            }
            case "Some": {
              return some2(exitZipWith(optionA.value, optionB.value, {
                onSuccess: (a, chunk3) => [a, ...chunk3],
                onFailure: parallel
              }));
            }
          }
        }
      }
    })),
    interruptAsFork: (fiberId3) => forEachSequentialDiscard(fibers, (fiber) => fiber.interruptAsFork(fiberId3))
  };
  return _fiberAll;
};
var raceWith = /* @__PURE__ */ dual(3, (self, other, options) => raceFibersWith(self, other, {
  onSelfWin: (winner, loser) => flatMap8(winner.await, (exit4) => {
    switch (exit4._tag) {
      case OP_SUCCESS: {
        return flatMap8(winner.inheritAll, () => options.onSelfDone(exit4, loser));
      }
      case OP_FAILURE: {
        return options.onSelfDone(exit4, loser);
      }
    }
  }),
  onOtherWin: (winner, loser) => flatMap8(winner.await, (exit4) => {
    switch (exit4._tag) {
      case OP_SUCCESS: {
        return flatMap8(winner.inheritAll, () => options.onOtherDone(exit4, loser));
      }
      case OP_FAILURE: {
        return options.onOtherDone(exit4, loser);
      }
    }
  })
}));
var disconnect = (self) => uninterruptibleMask((restore) => fiberIdWith((fiberId3) => flatMap8(forkDaemon(restore(self)), (fiber) => pipe(restore(join2(fiber)), onInterrupt(() => pipe(fiber, interruptAsFork(fiberId3)))))));
var race = /* @__PURE__ */ dual(2, (self, that) => fiberIdWith((parentFiberId) => raceWith(self, that, {
  onSelfDone: (exit4, right3) => exitMatchEffect(exit4, {
    onFailure: (cause3) => pipe(join2(right3), mapErrorCause((cause22) => parallel(cause3, cause22))),
    onSuccess: (value) => pipe(right3, interruptAsFiber(parentFiberId), as2(value))
  }),
  onOtherDone: (exit4, left3) => exitMatchEffect(exit4, {
    onFailure: (cause3) => pipe(join2(left3), mapErrorCause((cause22) => parallel(cause22, cause3))),
    onSuccess: (value) => pipe(left3, interruptAsFiber(parentFiberId), as2(value))
  })
})));
var raceFibersWith = /* @__PURE__ */ dual(3, (self, other, options) => withFiberRuntime((parentFiber, parentStatus) => {
  const parentRuntimeFlags = parentStatus.runtimeFlags;
  const raceIndicator = make12(true);
  const leftFiber = unsafeMakeChildFiber(self, parentFiber, parentRuntimeFlags, options.selfScope);
  const rightFiber = unsafeMakeChildFiber(other, parentFiber, parentRuntimeFlags, options.otherScope);
  return async_((cb) => {
    leftFiber.addObserver(() => completeRace(leftFiber, rightFiber, options.onSelfWin, raceIndicator, cb));
    rightFiber.addObserver(() => completeRace(rightFiber, leftFiber, options.onOtherWin, raceIndicator, cb));
    leftFiber.startFork(self);
    rightFiber.startFork(other);
  }, combine3(leftFiber.id(), rightFiber.id()));
}));
var completeRace = (winner, loser, cont, ab, cb) => {
  if (compareAndSet(true, false)(ab)) {
    cb(cont(winner, loser));
  }
};
var ensuring = /* @__PURE__ */ dual(2, (self, finalizer3) => uninterruptibleMask((restore) => matchCauseEffect(restore(self), {
  onFailure: (cause1) => matchCauseEffect(finalizer3, {
    onFailure: (cause22) => failCause(sequential(cause1, cause22)),
    onSuccess: () => failCause(cause1)
  }),
  onSuccess: (a) => as2(finalizer3, a)
})));
var invokeWithInterrupt = (self, entries2, onInterrupt3) => fiberIdWith((id2) => flatMap8(flatMap8(forkDaemon(interruptible2(self)), (processing) => async_((cb) => {
  const counts = entries2.map((_) => _.listeners.count);
  const checkDone = () => {
    if (counts.every((count3) => count3 === 0)) {
      if (entries2.every((_) => {
        if (_.result.state.current._tag === "Pending") {
          return true;
        } else if (_.result.state.current._tag === "Done" && exitIsExit(_.result.state.current.effect) && _.result.state.current.effect._tag === "Failure" && isInterrupted(_.result.state.current.effect.cause)) {
          return true;
        } else {
          return false;
        }
      })) {
        cleanup.forEach((f) => f());
        onInterrupt3?.();
        cb(interruptFiber(processing));
      }
    }
  };
  processing.addObserver((exit4) => {
    cleanup.forEach((f) => f());
    cb(exit4);
  });
  const cleanup = entries2.map((r, i) => {
    const observer = (count3) => {
      counts[i] = count3;
      checkDone();
    };
    r.listeners.addObserver(observer);
    return () => r.listeners.removeObserver(observer);
  });
  checkDone();
  return sync(() => {
    cleanup.forEach((f) => f());
  });
})), () => suspend(() => {
  const residual = entries2.flatMap((entry) => {
    if (!entry.state.completed) {
      return [entry];
    }
    return [];
  });
  return forEachSequentialDiscard(residual, (entry) => complete(entry.request, exitInterrupt(id2)));
})));
var makeSpanScoped = (name, options) => {
  options = addSpanStackTrace(options);
  return uninterruptible(withFiberRuntime((fiber) => {
    const scope5 = unsafeGet3(fiber.getFiberRef(currentContext), scopeTag);
    const span4 = unsafeMakeSpan(fiber, name, options);
    const timingEnabled = fiber.getFiberRef(currentTracerTimingEnabled);
    const clock_ = get4(fiber.getFiberRef(currentServices), clockTag);
    return as2(scopeAddFinalizerExit(scope5, (exit4) => endSpan(span4, exit4, clock_, timingEnabled)), span4);
  }));
};
var withTracerScoped = (value) => fiberRefLocallyScopedWith(currentServices, add2(tracerTag, value));
var withSpanScoped = function() {
  const dataFirst = typeof arguments[0] !== "string";
  const name = dataFirst ? arguments[1] : arguments[0];
  const options = addSpanStackTrace(dataFirst ? arguments[2] : arguments[1]);
  if (dataFirst) {
    const self = arguments[0];
    return flatMap8(makeSpanScoped(name, addSpanStackTrace(options)), (span4) => provideService(self, spanTag, span4));
  }
  return (self) => flatMap8(makeSpanScoped(name, addSpanStackTrace(options)), (span4) => provideService(self, spanTag, span4));
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/cache.js
var complete2 = (key, exit4, entryStats, timeToLiveMillis) => struct2({
  _tag: "Complete",
  key,
  exit: exit4,
  entryStats,
  timeToLiveMillis
});
var pending2 = (key, deferred) => struct2({
  _tag: "Pending",
  key,
  deferred
});
var refreshing = (deferred, complete3) => struct2({
  _tag: "Refreshing",
  deferred,
  complete: complete3
});
var MapKeyTypeId = /* @__PURE__ */ Symbol.for("effect/Cache/MapKey");
var MapKeyImpl = class {
  current;
  [MapKeyTypeId] = MapKeyTypeId;
  previous = void 0;
  next = void 0;
  constructor(current2) {
    this.current = current2;
  }
  [symbol]() {
    return pipe(hash(this.current), combine(hash(this.previous)), combine(hash(this.next)), cached(this));
  }
  [symbol2](that) {
    if (this === that) {
      return true;
    }
    return isMapKey(that) && equals(this.current, that.current) && equals(this.previous, that.previous) && equals(this.next, that.next);
  }
};
var makeMapKey = (current2) => new MapKeyImpl(current2);
var isMapKey = (u) => hasProperty(u, MapKeyTypeId);
var KeySetImpl = class {
  head = void 0;
  tail = void 0;
  add(key) {
    if (key !== this.tail) {
      if (this.tail === void 0) {
        this.head = key;
        this.tail = key;
      } else {
        const previous2 = key.previous;
        const next = key.next;
        if (next !== void 0) {
          key.next = void 0;
          if (previous2 !== void 0) {
            previous2.next = next;
            next.previous = previous2;
          } else {
            this.head = next;
            this.head.previous = void 0;
          }
        }
        this.tail.next = key;
        key.previous = this.tail;
        this.tail = key;
      }
    }
  }
  remove() {
    const key = this.head;
    if (key !== void 0) {
      const next = key.next;
      if (next !== void 0) {
        key.next = void 0;
        this.head = next;
        this.head.previous = void 0;
      } else {
        this.head = void 0;
        this.tail = void 0;
      }
    }
    return key;
  }
};
var makeKeySet = () => new KeySetImpl();
var makeCacheState = (map28, keys6, accesses, updating, hits, misses) => ({
  map: map28,
  keys: keys6,
  accesses,
  updating,
  hits,
  misses
});
var initialCacheState = () => makeCacheState(empty20(), makeKeySet(), unbounded(), make12(false), 0, 0);
var CacheSymbolKey = "effect/Cache";
var CacheTypeId = /* @__PURE__ */ Symbol.for(CacheSymbolKey);
var cacheVariance = {
  /* c8 ignore next */
  _Key: (_) => _,
  /* c8 ignore next */
  _Error: (_) => _,
  /* c8 ignore next */
  _Value: (_) => _
};
var ConsumerCacheSymbolKey = "effect/ConsumerCache";
var ConsumerCacheTypeId = /* @__PURE__ */ Symbol.for(ConsumerCacheSymbolKey);
var consumerCacheVariance = {
  /* c8 ignore next */
  _Key: (_) => _,
  /* c8 ignore next */
  _Error: (_) => _,
  /* c8 ignore next */
  _Value: (_) => _
};
var makeCacheStats = (options) => options;
var makeEntryStats = (loadedMillis) => ({
  loadedMillis
});
var CacheImpl = class {
  capacity;
  context;
  fiberId;
  lookup;
  timeToLive;
  [CacheTypeId] = cacheVariance;
  [ConsumerCacheTypeId] = consumerCacheVariance;
  cacheState;
  constructor(capacity7, context7, fiberId3, lookup, timeToLive) {
    this.capacity = capacity7;
    this.context = context7;
    this.fiberId = fiberId3;
    this.lookup = lookup;
    this.timeToLive = timeToLive;
    this.cacheState = initialCacheState();
  }
  get(key) {
    return map11(this.getEither(key), merge);
  }
  get cacheStats() {
    return sync(() => makeCacheStats({
      hits: this.cacheState.hits,
      misses: this.cacheState.misses,
      size: size6(this.cacheState.map)
    }));
  }
  getOption(key) {
    return suspend(() => match2(get9(this.cacheState.map, key), {
      onNone: () => {
        const mapKey = makeMapKey(key);
        this.trackAccess(mapKey);
        this.trackMiss();
        return succeed(none2());
      },
      onSome: (value) => this.resolveMapValue(value)
    }));
  }
  getOptionComplete(key) {
    return suspend(() => match2(get9(this.cacheState.map, key), {
      onNone: () => {
        const mapKey = makeMapKey(key);
        this.trackAccess(mapKey);
        this.trackMiss();
        return succeed(none2());
      },
      onSome: (value) => this.resolveMapValue(value, true)
    }));
  }
  contains(key) {
    return sync(() => has5(this.cacheState.map, key));
  }
  entryStats(key) {
    return sync(() => {
      const option3 = get9(this.cacheState.map, key);
      if (isSome2(option3)) {
        switch (option3.value._tag) {
          case "Complete": {
            const loaded = option3.value.entryStats.loadedMillis;
            return some2(makeEntryStats(loaded));
          }
          case "Pending": {
            return none2();
          }
          case "Refreshing": {
            const loaded = option3.value.complete.entryStats.loadedMillis;
            return some2(makeEntryStats(loaded));
          }
        }
      }
      return none2();
    });
  }
  getEither(key) {
    return suspend(() => {
      const k = key;
      let mapKey = void 0;
      let deferred = void 0;
      let value = getOrUndefined(get9(this.cacheState.map, k));
      if (value === void 0) {
        deferred = unsafeMake3(this.fiberId);
        mapKey = makeMapKey(k);
        if (has5(this.cacheState.map, k)) {
          value = getOrUndefined(get9(this.cacheState.map, k));
        } else {
          set5(this.cacheState.map, k, pending2(mapKey, deferred));
        }
      }
      if (value === void 0) {
        this.trackAccess(mapKey);
        this.trackMiss();
        return map11(this.lookupValueOf(key, deferred), right2);
      } else {
        return flatMap8(this.resolveMapValue(value), match2({
          onNone: () => this.getEither(key),
          onSome: (value2) => succeed(left2(value2))
        }));
      }
    });
  }
  invalidate(key) {
    return sync(() => {
      remove6(this.cacheState.map, key);
    });
  }
  invalidateWhen(key, when5) {
    return sync(() => {
      const value = get9(this.cacheState.map, key);
      if (isSome2(value) && value.value._tag === "Complete") {
        if (value.value.exit._tag === "Success") {
          if (when5(value.value.exit.value)) {
            remove6(this.cacheState.map, key);
          }
        }
      }
    });
  }
  get invalidateAll() {
    return sync(() => {
      this.cacheState.map = empty20();
    });
  }
  refresh(key) {
    return clockWith3((clock3) => suspend(() => {
      const k = key;
      const deferred = unsafeMake3(this.fiberId);
      let value = getOrUndefined(get9(this.cacheState.map, k));
      if (value === void 0) {
        if (has5(this.cacheState.map, k)) {
          value = getOrUndefined(get9(this.cacheState.map, k));
        } else {
          set5(this.cacheState.map, k, pending2(makeMapKey(k), deferred));
        }
      }
      if (value === void 0) {
        return asVoid2(this.lookupValueOf(key, deferred));
      } else {
        switch (value._tag) {
          case "Complete": {
            if (this.hasExpired(clock3, value.timeToLiveMillis)) {
              const found = getOrUndefined(get9(this.cacheState.map, k));
              if (equals(found, value)) {
                remove6(this.cacheState.map, k);
              }
              return asVoid2(this.get(key));
            }
            return pipe(this.lookupValueOf(key, deferred), when(() => {
              const current2 = getOrUndefined(get9(this.cacheState.map, k));
              if (equals(current2, value)) {
                const mapValue = refreshing(deferred, value);
                set5(this.cacheState.map, k, mapValue);
                return true;
              }
              return false;
            }), asVoid2);
          }
          case "Pending": {
            return _await(value.deferred);
          }
          case "Refreshing": {
            return _await(value.deferred);
          }
        }
      }
    }));
  }
  set(key, value) {
    return clockWith3((clock3) => sync(() => {
      const now = clock3.unsafeCurrentTimeMillis();
      const k = key;
      const lookupResult = succeed3(value);
      const mapValue = complete2(makeMapKey(k), lookupResult, makeEntryStats(now), now + toMillis(decode(this.timeToLive(lookupResult))));
      set5(this.cacheState.map, k, mapValue);
    }));
  }
  get size() {
    return sync(() => {
      return size6(this.cacheState.map);
    });
  }
  get values() {
    return sync(() => {
      const values4 = [];
      for (const entry of this.cacheState.map) {
        if (entry[1]._tag === "Complete" && entry[1].exit._tag === "Success") {
          values4.push(entry[1].exit.value);
        }
      }
      return values4;
    });
  }
  get entries() {
    return sync(() => {
      const values4 = [];
      for (const entry of this.cacheState.map) {
        if (entry[1]._tag === "Complete" && entry[1].exit._tag === "Success") {
          values4.push([entry[0], entry[1].exit.value]);
        }
      }
      return values4;
    });
  }
  get keys() {
    return sync(() => {
      const keys6 = [];
      for (const entry of this.cacheState.map) {
        if (entry[1]._tag === "Complete" && entry[1].exit._tag === "Success") {
          keys6.push(entry[0]);
        }
      }
      return keys6;
    });
  }
  resolveMapValue(value, ignorePending = false) {
    return clockWith3((clock3) => {
      switch (value._tag) {
        case "Complete": {
          this.trackAccess(value.key);
          if (this.hasExpired(clock3, value.timeToLiveMillis)) {
            remove6(this.cacheState.map, value.key.current);
            return succeed(none2());
          }
          this.trackHit();
          return map11(value.exit, some2);
        }
        case "Pending": {
          this.trackAccess(value.key);
          this.trackHit();
          if (ignorePending) {
            return succeed(none2());
          }
          return map11(_await(value.deferred), some2);
        }
        case "Refreshing": {
          this.trackAccess(value.complete.key);
          this.trackHit();
          if (this.hasExpired(clock3, value.complete.timeToLiveMillis)) {
            if (ignorePending) {
              return succeed(none2());
            }
            return map11(_await(value.deferred), some2);
          }
          return map11(value.complete.exit, some2);
        }
      }
    });
  }
  trackHit() {
    this.cacheState.hits = this.cacheState.hits + 1;
  }
  trackMiss() {
    this.cacheState.misses = this.cacheState.misses + 1;
  }
  trackAccess(key) {
    offer(this.cacheState.accesses, key);
    if (compareAndSet(this.cacheState.updating, false, true)) {
      let loop3 = true;
      while (loop3) {
        const key2 = poll2(this.cacheState.accesses, EmptyMutableQueue);
        if (key2 === EmptyMutableQueue) {
          loop3 = false;
        } else {
          this.cacheState.keys.add(key2);
        }
      }
      let size17 = size6(this.cacheState.map);
      loop3 = size17 > this.capacity;
      while (loop3) {
        const key2 = this.cacheState.keys.remove();
        if (key2 !== void 0) {
          if (has5(this.cacheState.map, key2.current)) {
            remove6(this.cacheState.map, key2.current);
            size17 = size17 - 1;
            loop3 = size17 > this.capacity;
          }
        } else {
          loop3 = false;
        }
      }
      set3(this.cacheState.updating, false);
    }
  }
  hasExpired(clock3, timeToLiveMillis) {
    return clock3.unsafeCurrentTimeMillis() > timeToLiveMillis;
  }
  lookupValueOf(input, deferred) {
    return clockWith3((clock3) => suspend(() => {
      const key = input;
      return pipe(this.lookup(input), provideContext(this.context), exit, flatMap8((exit4) => {
        const now = clock3.unsafeCurrentTimeMillis();
        const stats = makeEntryStats(now);
        const value = complete2(makeMapKey(key), exit4, stats, now + toMillis(decode(this.timeToLive(exit4))));
        set5(this.cacheState.map, key, value);
        return zipRight2(done2(deferred, exit4), exit4);
      }), onInterrupt(() => zipRight2(interrupt3(deferred), sync(() => {
        remove6(this.cacheState.map, key);
      }))));
    }));
  }
};
var unsafeMakeWith = (capacity7, lookup, timeToLive) => new CacheImpl(capacity7, empty6(), none3, lookup, (exit4) => decode(timeToLive(exit4)));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Cause.js
var empty29 = empty19;
var fail5 = fail;
var die4 = die;
var interrupt5 = interrupt;
var isFailType2 = isFailType;
var isDieType2 = isDieType;
var isInterrupted2 = isInterrupted;
var isInterruptedOnly2 = isInterruptedOnly;
var interruptors2 = interruptors;
var failureOrCause2 = failureOrCause;
var flipCauseOption2 = flipCauseOption;
var map15 = map10;
var squash = causeSquash;
var reduceWithContext2 = reduceWithContext;
var IllegalArgumentException2 = IllegalArgumentException;
var NoSuchElementException2 = NoSuchElementException;
var RuntimeException2 = RuntimeException;
var isRuntimeException2 = isRuntimeException;
var pretty2 = pretty;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Effect.js
var Effect_exports = {};
__export(Effect_exports, {
  Do: () => Do4,
  EffectTypeId: () => EffectTypeId3,
  Service: () => Service,
  Tag: () => Tag2,
  acquireRelease: () => acquireRelease2,
  acquireReleaseInterruptible: () => acquireReleaseInterruptible2,
  acquireUseRelease: () => acquireUseRelease2,
  addFinalizer: () => addFinalizer3,
  all: () => all4,
  allSuccesses: () => allSuccesses2,
  allWith: () => allWith2,
  allowInterrupt: () => allowInterrupt2,
  andThen: () => andThen5,
  annotateCurrentSpan: () => annotateCurrentSpan2,
  annotateLogs: () => annotateLogs3,
  annotateLogsScoped: () => annotateLogsScoped2,
  annotateSpans: () => annotateSpans3,
  ap: () => ap2,
  as: () => as5,
  asSome: () => asSome2,
  asSomeError: () => asSomeError2,
  asVoid: () => asVoid4,
  async: () => async2,
  asyncEffect: () => asyncEffect2,
  awaitAllChildren: () => awaitAllChildren2,
  bind: () => bind5,
  bindAll: () => bindAll2,
  bindTo: () => bindTo5,
  blocked: () => blocked2,
  cacheRequestResult: () => cacheRequestResult,
  cached: () => cached3,
  cachedFunction: () => cachedFunction2,
  cachedInvalidateWithTTL: () => cachedInvalidateWithTTL2,
  cachedWithTTL: () => cachedWithTTL,
  catch: () => _catch2,
  catchAll: () => catchAll3,
  catchAllCause: () => catchAllCause3,
  catchAllDefect: () => catchAllDefect2,
  catchIf: () => catchIf2,
  catchSome: () => catchSome2,
  catchSomeCause: () => catchSomeCause2,
  catchSomeDefect: () => catchSomeDefect2,
  catchTag: () => catchTag2,
  catchTags: () => catchTags2,
  cause: () => cause2,
  checkInterruptible: () => checkInterruptible2,
  clock: () => clock2,
  clockWith: () => clockWith4,
  configProviderWith: () => configProviderWith2,
  console: () => console3,
  consoleWith: () => consoleWith2,
  context: () => context3,
  contextWith: () => contextWith2,
  contextWithEffect: () => contextWithEffect2,
  currentParentSpan: () => currentParentSpan2,
  currentSpan: () => currentSpan2,
  custom: () => custom2,
  daemonChildren: () => daemonChildren2,
  delay: () => delay2,
  descriptor: () => descriptor2,
  descriptorWith: () => descriptorWith2,
  die: () => die6,
  dieMessage: () => dieMessage2,
  dieSync: () => dieSync3,
  diffFiberRefs: () => diffFiberRefs2,
  disconnect: () => disconnect2,
  dropUntil: () => dropUntil2,
  dropWhile: () => dropWhile4,
  either: () => either3,
  ensuring: () => ensuring2,
  ensuringChild: () => ensuringChild2,
  ensuringChildren: () => ensuringChildren2,
  eventually: () => eventually2,
  every: () => every7,
  exists: () => exists3,
  exit: () => exit3,
  fail: () => fail9,
  failCause: () => failCause8,
  failCauseSync: () => failCauseSync3,
  failSync: () => failSync3,
  fiberId: () => fiberId2,
  fiberIdWith: () => fiberIdWith2,
  filter: () => filter9,
  filterEffectOrElse: () => filterEffectOrElse2,
  filterEffectOrFail: () => filterEffectOrFail2,
  filterMap: () => filterMap7,
  filterOrDie: () => filterOrDie2,
  filterOrDieMessage: () => filterOrDieMessage2,
  filterOrElse: () => filterOrElse2,
  filterOrFail: () => filterOrFail2,
  finalizersMask: () => finalizersMask2,
  findFirst: () => findFirst8,
  firstSuccessOf: () => firstSuccessOf2,
  flatMap: () => flatMap11,
  flatten: () => flatten10,
  flip: () => flip2,
  flipWith: () => flipWith2,
  fn: () => fn,
  fnUntraced: () => fnUntraced2,
  forEach: () => forEach10,
  forever: () => forever3,
  fork: () => fork3,
  forkAll: () => forkAll2,
  forkDaemon: () => forkDaemon2,
  forkIn: () => forkIn2,
  forkScoped: () => forkScoped2,
  forkWithErrorHandler: () => forkWithErrorHandler2,
  fromFiber: () => fromFiber2,
  fromFiberEffect: () => fromFiberEffect2,
  fromNullable: () => fromNullable4,
  functionWithSpan: () => functionWithSpan2,
  gen: () => gen3,
  getFiberRefs: () => getFiberRefs,
  getRuntimeFlags: () => getRuntimeFlags,
  head: () => head4,
  if: () => if_2,
  ignore: () => ignore2,
  ignoreLogged: () => ignoreLogged2,
  inheritFiberRefs: () => inheritFiberRefs2,
  interrupt: () => interrupt7,
  interruptWith: () => interruptWith2,
  interruptible: () => interruptible4,
  interruptibleMask: () => interruptibleMask2,
  intoDeferred: () => intoDeferred2,
  isEffect: () => isEffect2,
  isFailure: () => isFailure4,
  isSuccess: () => isSuccess3,
  iterate: () => iterate2,
  labelMetrics: () => labelMetrics2,
  labelMetricsScoped: () => labelMetricsScoped2,
  let: () => let_5,
  liftPredicate: () => liftPredicate4,
  linkSpanCurrent: () => linkSpanCurrent2,
  linkSpans: () => linkSpans2,
  locally: () => locally2,
  locallyScoped: () => locallyScoped,
  locallyScopedWith: () => locallyScopedWith,
  locallyWith: () => locallyWith,
  log: () => log2,
  logAnnotations: () => logAnnotations2,
  logDebug: () => logDebug2,
  logError: () => logError2,
  logFatal: () => logFatal2,
  logInfo: () => logInfo2,
  logTrace: () => logTrace2,
  logWarning: () => logWarning2,
  logWithLevel: () => logWithLevel2,
  loop: () => loop2,
  makeLatch: () => makeLatch2,
  makeSemaphore: () => makeSemaphore2,
  makeSpan: () => makeSpan2,
  makeSpanScoped: () => makeSpanScoped2,
  map: () => map19,
  mapAccum: () => mapAccum4,
  mapBoth: () => mapBoth4,
  mapError: () => mapError3,
  mapErrorCause: () => mapErrorCause2,
  mapInputContext: () => mapInputContext2,
  match: () => match12,
  matchCause: () => matchCause4,
  matchCauseEffect: () => matchCauseEffect3,
  matchEffect: () => matchEffect2,
  merge: () => merge7,
  mergeAll: () => mergeAll4,
  metricLabels: () => metricLabels2,
  negate: () => negate2,
  never: () => never3,
  none: () => none9,
  onError: () => onError2,
  onExit: () => onExit3,
  onInterrupt: () => onInterrupt2,
  once: () => once3,
  option: () => option2,
  optionFromOptional: () => optionFromOptional2,
  orDie: () => orDie3,
  orDieWith: () => orDieWith2,
  orElse: () => orElse5,
  orElseFail: () => orElseFail2,
  orElseSucceed: () => orElseSucceed2,
  parallelErrors: () => parallelErrors2,
  parallelFinalizers: () => parallelFinalizers2,
  partition: () => partition5,
  patchFiberRefs: () => patchFiberRefs2,
  patchRuntimeFlags: () => patchRuntimeFlags,
  promise: () => promise2,
  provide: () => provide2,
  provideService: () => provideService2,
  provideServiceEffect: () => provideServiceEffect2,
  race: () => race2,
  raceAll: () => raceAll2,
  raceFirst: () => raceFirst2,
  raceWith: () => raceWith2,
  random: () => random3,
  randomWith: () => randomWith2,
  reduce: () => reduce12,
  reduceEffect: () => reduceEffect2,
  reduceRight: () => reduceRight4,
  reduceWhile: () => reduceWhile2,
  repeat: () => repeat,
  repeatN: () => repeatN2,
  repeatOrElse: () => repeatOrElse,
  replicate: () => replicate3,
  replicateEffect: () => replicateEffect2,
  request: () => request,
  retry: () => retry2,
  retryOrElse: () => retryOrElse,
  runCallback: () => runCallback,
  runFork: () => runFork2,
  runPromise: () => runPromise,
  runPromiseExit: () => runPromiseExit,
  runRequestBlock: () => runRequestBlock2,
  runSync: () => runSync,
  runSyncExit: () => runSyncExit,
  runtime: () => runtime3,
  sandbox: () => sandbox2,
  schedule: () => schedule,
  scheduleForked: () => scheduleForked2,
  scheduleFrom: () => scheduleFrom,
  scope: () => scope3,
  scopeWith: () => scopeWith2,
  scoped: () => scoped2,
  scopedWith: () => scopedWith2,
  sequentialFinalizers: () => sequentialFinalizers2,
  serviceConstants: () => serviceConstants2,
  serviceFunction: () => serviceFunction2,
  serviceFunctionEffect: () => serviceFunctionEffect2,
  serviceFunctions: () => serviceFunctions2,
  serviceMembers: () => serviceMembers2,
  serviceOption: () => serviceOption2,
  serviceOptional: () => serviceOptional2,
  setFiberRefs: () => setFiberRefs2,
  sleep: () => sleep4,
  spanAnnotations: () => spanAnnotations2,
  spanLinks: () => spanLinks2,
  step: () => step3,
  succeed: () => succeed9,
  succeedNone: () => succeedNone2,
  succeedSome: () => succeedSome2,
  summarized: () => summarized2,
  supervised: () => supervised2,
  suspend: () => suspend4,
  sync: () => sync5,
  tagMetrics: () => tagMetrics2,
  tagMetricsScoped: () => tagMetricsScoped2,
  takeUntil: () => takeUntil2,
  takeWhile: () => takeWhile4,
  tap: () => tap4,
  tapBoth: () => tapBoth2,
  tapDefect: () => tapDefect2,
  tapError: () => tapError3,
  tapErrorCause: () => tapErrorCause3,
  tapErrorTag: () => tapErrorTag2,
  timed: () => timed2,
  timedWith: () => timedWith2,
  timeout: () => timeout2,
  timeoutFail: () => timeoutFail2,
  timeoutFailCause: () => timeoutFailCause2,
  timeoutOption: () => timeoutOption2,
  timeoutTo: () => timeoutTo2,
  tracer: () => tracer2,
  tracerWith: () => tracerWith4,
  transplant: () => transplant2,
  transposeMapOption: () => transposeMapOption,
  transposeOption: () => transposeOption,
  try: () => try_2,
  tryMap: () => tryMap2,
  tryMapPromise: () => tryMapPromise2,
  tryPromise: () => tryPromise2,
  uninterruptible: () => uninterruptible2,
  uninterruptibleMask: () => uninterruptibleMask3,
  unless: () => unless2,
  unlessEffect: () => unlessEffect2,
  unsafeMakeLatch: () => unsafeMakeLatch2,
  unsafeMakeSemaphore: () => unsafeMakeSemaphore2,
  unsandbox: () => unsandbox2,
  updateFiberRefs: () => updateFiberRefs2,
  updateService: () => updateService2,
  useSpan: () => useSpan2,
  using: () => using2,
  validate: () => validate2,
  validateAll: () => validateAll2,
  validateFirst: () => validateFirst2,
  validateWith: () => validateWith2,
  void: () => _void,
  when: () => when2,
  whenEffect: () => whenEffect2,
  whenFiberRef: () => whenFiberRef2,
  whenLogLevel: () => whenLogLevel2,
  whenRef: () => whenRef2,
  whileLoop: () => whileLoop3,
  withClock: () => withClock2,
  withClockScoped: () => withClockScoped2,
  withConcurrency: () => withConcurrency2,
  withConfigProvider: () => withConfigProvider2,
  withConfigProviderScoped: () => withConfigProviderScoped2,
  withConsole: () => withConsole2,
  withConsoleScoped: () => withConsoleScoped2,
  withEarlyRelease: () => withEarlyRelease2,
  withExecutionPlan: () => withExecutionPlan2,
  withFiberRuntime: () => withFiberRuntime2,
  withLogSpan: () => withLogSpan2,
  withMaxOpsBeforeYield: () => withMaxOpsBeforeYield2,
  withMetric: () => withMetric2,
  withParentSpan: () => withParentSpan3,
  withRandom: () => withRandom2,
  withRandomScoped: () => withRandomScoped2,
  withRequestBatching: () => withRequestBatching2,
  withRequestCache: () => withRequestCache2,
  withRequestCaching: () => withRequestCaching2,
  withRuntimeFlagsPatch: () => withRuntimeFlagsPatch,
  withRuntimeFlagsPatchScoped: () => withRuntimeFlagsPatchScoped,
  withScheduler: () => withScheduler2,
  withSchedulingPriority: () => withSchedulingPriority2,
  withSpan: () => withSpan3,
  withSpanScoped: () => withSpanScoped2,
  withTracer: () => withTracer2,
  withTracerEnabled: () => withTracerEnabled2,
  withTracerScoped: () => withTracerScoped2,
  withTracerTiming: () => withTracerTiming2,
  withUnhandledErrorLogLevel: () => withUnhandledErrorLogLevel2,
  yieldNow: () => yieldNow4,
  zip: () => zip6,
  zipLeft: () => zipLeft4,
  zipRight: () => zipRight5,
  zipWith: () => zipWith6
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/schedule/interval.js
var IntervalSymbolKey = "effect/ScheduleInterval";
var IntervalTypeId = /* @__PURE__ */ Symbol.for(IntervalSymbolKey);
var empty30 = {
  [IntervalTypeId]: IntervalTypeId,
  startMillis: 0,
  endMillis: 0
};
var make36 = (startMillis, endMillis) => {
  if (startMillis > endMillis) {
    return empty30;
  }
  return {
    [IntervalTypeId]: IntervalTypeId,
    startMillis,
    endMillis
  };
};
var lessThan3 = /* @__PURE__ */ dual(2, (self, that) => min3(self, that) === self);
var min3 = /* @__PURE__ */ dual(2, (self, that) => {
  if (self.endMillis <= that.startMillis) return self;
  if (that.endMillis <= self.startMillis) return that;
  if (self.startMillis < that.startMillis) return self;
  if (that.startMillis < self.startMillis) return that;
  if (self.endMillis <= that.endMillis) return self;
  return that;
});
var isEmpty8 = (self) => {
  return self.startMillis >= self.endMillis;
};
var intersect = /* @__PURE__ */ dual(2, (self, that) => {
  const start3 = Math.max(self.startMillis, that.startMillis);
  const end6 = Math.min(self.endMillis, that.endMillis);
  return make36(start3, end6);
});
var size10 = (self) => {
  return millis(self.endMillis - self.startMillis);
};
var after = (startMilliseconds) => {
  return make36(startMilliseconds, Number.POSITIVE_INFINITY);
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/ScheduleInterval.js
var make37 = make36;
var empty31 = empty30;
var lessThan4 = lessThan3;
var isEmpty9 = isEmpty8;
var intersect2 = intersect;
var size11 = size10;
var after2 = after;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/schedule/intervals.js
var IntervalsSymbolKey = "effect/ScheduleIntervals";
var IntervalsTypeId = /* @__PURE__ */ Symbol.for(IntervalsSymbolKey);
var make38 = (intervals) => {
  return {
    [IntervalsTypeId]: IntervalsTypeId,
    intervals
  };
};
var intersect3 = /* @__PURE__ */ dual(2, (self, that) => intersectLoop(self.intervals, that.intervals, empty7()));
var intersectLoop = (_left, _right, _acc) => {
  let left3 = _left;
  let right3 = _right;
  let acc = _acc;
  while (isNonEmpty2(left3) && isNonEmpty2(right3)) {
    const interval = pipe(headNonEmpty2(left3), intersect2(headNonEmpty2(right3)));
    const intervals = isEmpty9(interval) ? acc : pipe(acc, prepend2(interval));
    if (pipe(headNonEmpty2(left3), lessThan4(headNonEmpty2(right3)))) {
      left3 = tailNonEmpty2(left3);
    } else {
      right3 = tailNonEmpty2(right3);
    }
    acc = intervals;
  }
  return make38(reverse2(acc));
};
var start = (self) => {
  return pipe(self.intervals, head2, getOrElse(() => empty31)).startMillis;
};
var end = (self) => {
  return pipe(self.intervals, head2, getOrElse(() => empty31)).endMillis;
};
var lessThan5 = /* @__PURE__ */ dual(2, (self, that) => start(self) < start(that));
var isNonEmpty4 = (self) => {
  return isNonEmpty2(self.intervals);
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/ScheduleIntervals.js
var make39 = make38;
var intersect4 = intersect3;
var start2 = start;
var end2 = end;
var lessThan6 = lessThan5;
var isNonEmpty5 = isNonEmpty4;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/schedule/decision.js
var OP_CONTINUE = "Continue";
var OP_DONE2 = "Done";
var _continue = (intervals) => {
  return {
    _tag: OP_CONTINUE,
    intervals
  };
};
var continueWith = (interval) => {
  return {
    _tag: OP_CONTINUE,
    intervals: make39(of2(interval))
  };
};
var done5 = {
  _tag: OP_DONE2
};
var isContinue = (self) => {
  return self._tag === OP_CONTINUE;
};
var isDone4 = (self) => {
  return self._tag === OP_DONE2;
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/ScheduleDecision.js
var _continue2 = _continue;
var continueWith2 = continueWith;
var done6 = done5;
var isContinue2 = isContinue;
var isDone5 = isDone4;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Scope.js
var Scope_exports = {};
__export(Scope_exports, {
  CloseableScopeTypeId: () => CloseableScopeTypeId2,
  Scope: () => Scope,
  ScopeTypeId: () => ScopeTypeId2,
  addFinalizer: () => addFinalizer2,
  addFinalizerExit: () => addFinalizerExit,
  close: () => close,
  extend: () => extend3,
  fork: () => fork2,
  make: () => make40,
  use: () => use
});
var ScopeTypeId2 = ScopeTypeId;
var CloseableScopeTypeId2 = CloseableScopeTypeId;
var Scope = scopeTag;
var addFinalizer2 = scopeAddFinalizer;
var addFinalizerExit = scopeAddFinalizerExit;
var close = scopeClose;
var extend3 = scopeExtend;
var fork2 = scopeFork;
var use = scopeUse;
var make40 = scopeMake;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/effect/circular.js
var Semaphore = class {
  permits;
  waiters = /* @__PURE__ */ new Set();
  taken = 0;
  constructor(permits) {
    this.permits = permits;
  }
  get free() {
    return this.permits - this.taken;
  }
  take = (n) => asyncInterrupt((resume2) => {
    if (this.free < n) {
      const observer = () => {
        if (this.free < n) {
          return;
        }
        this.waiters.delete(observer);
        this.taken += n;
        resume2(succeed(n));
      };
      this.waiters.add(observer);
      return sync(() => {
        this.waiters.delete(observer);
      });
    }
    this.taken += n;
    return resume2(succeed(n));
  });
  updateTaken = (f) => withFiberRuntime((fiber) => {
    this.taken = f(this.taken);
    if (this.waiters.size > 0) {
      fiber.getFiberRef(currentScheduler).scheduleTask(() => {
        const iter = this.waiters.values();
        let item = iter.next();
        while (item.done === false && this.free > 0) {
          item.value();
          item = iter.next();
        }
      }, fiber.getFiberRef(currentSchedulingPriority));
    }
    return succeed(this.free);
  });
  release = (n) => this.updateTaken((taken) => taken - n);
  releaseAll = /* @__PURE__ */ this.updateTaken((_) => 0);
  withPermits = (n) => (self) => uninterruptibleMask((restore) => flatMap8(restore(this.take(n)), (permits) => ensuring(restore(self), this.release(permits))));
  withPermitsIfAvailable = (n) => (self) => uninterruptibleMask((restore) => suspend(() => {
    if (this.free < n) {
      return succeedNone;
    }
    this.taken += n;
    return ensuring(restore(asSome(self)), this.release(n));
  }));
};
var unsafeMakeSemaphore = (permits) => new Semaphore(permits);
var makeSemaphore = (permits) => sync(() => unsafeMakeSemaphore(permits));
var Latch = class extends Class2 {
  isOpen;
  waiters = [];
  scheduled = false;
  constructor(isOpen) {
    super();
    this.isOpen = isOpen;
  }
  commit() {
    return this.await;
  }
  unsafeSchedule(fiber) {
    if (this.scheduled || this.waiters.length === 0) {
      return void_2;
    }
    this.scheduled = true;
    fiber.currentScheduler.scheduleTask(this.flushWaiters, fiber.getFiberRef(currentSchedulingPriority));
    return void_2;
  }
  flushWaiters = () => {
    this.scheduled = false;
    const waiters = this.waiters;
    this.waiters = [];
    for (let i = 0; i < waiters.length; i++) {
      waiters[i](exitVoid);
    }
  };
  open = /* @__PURE__ */ withFiberRuntime((fiber) => {
    if (this.isOpen) {
      return void_2;
    }
    this.isOpen = true;
    return this.unsafeSchedule(fiber);
  });
  unsafeOpen() {
    if (this.isOpen) return;
    this.isOpen = true;
    this.flushWaiters();
  }
  release = /* @__PURE__ */ withFiberRuntime((fiber) => {
    if (this.isOpen) {
      return void_2;
    }
    return this.unsafeSchedule(fiber);
  });
  await = /* @__PURE__ */ asyncInterrupt((resume2) => {
    if (this.isOpen) {
      return resume2(void_2);
    }
    this.waiters.push(resume2);
    return sync(() => {
      const index = this.waiters.indexOf(resume2);
      if (index !== -1) {
        this.waiters.splice(index, 1);
      }
    });
  });
  unsafeClose() {
    this.isOpen = false;
  }
  close = /* @__PURE__ */ sync(() => {
    this.isOpen = false;
  });
  whenOpen = (self) => {
    return zipRight2(this.await, self);
  };
};
var unsafeMakeLatch = (open) => new Latch(open ?? false);
var makeLatch = (open) => sync(() => unsafeMakeLatch(open));
var awaitAllChildren = (self) => ensuringChildren(self, fiberAwaitAll);
var cached2 = /* @__PURE__ */ dual(2, (self, timeToLive) => map11(cachedInvalidateWithTTL(self, timeToLive), (tuple) => tuple[0]));
var cachedInvalidateWithTTL = /* @__PURE__ */ dual(2, (self, timeToLive) => {
  const duration2 = decode(timeToLive);
  return flatMap8(context(), (env) => map11(makeSynchronized(none2()), (cache) => [provideContext(getCachedValue(self, duration2, cache), env), invalidateCache(cache)]));
});
var computeCachedValue = (self, timeToLive, start3) => {
  const timeToLiveMillis = toMillis(decode(timeToLive));
  return pipe(deferredMake(), tap2((deferred) => intoDeferred(self, deferred)), map11((deferred) => some2([start3 + timeToLiveMillis, deferred])));
};
var getCachedValue = (self, timeToLive, cache) => uninterruptibleMask((restore) => pipe(clockWith3((clock3) => clock3.currentTimeMillis), flatMap8((time) => updateSomeAndGetEffectSynchronized(cache, (option3) => {
  switch (option3._tag) {
    case "None": {
      return some2(computeCachedValue(self, timeToLive, time));
    }
    case "Some": {
      const [end6] = option3.value;
      return end6 - time <= 0 ? some2(computeCachedValue(self, timeToLive, time)) : none2();
    }
  }
})), flatMap8((option3) => isNone2(option3) ? dieMessage("BUG: Effect.cachedInvalidate - please report an issue at https://github.com/Effect-TS/effect/issues") : restore(deferredAwait(option3.value[1])))));
var invalidateCache = (cache) => set6(cache, none2());
var ensuringChild = /* @__PURE__ */ dual(2, (self, f) => ensuringChildren(self, (children3) => f(fiberAll(children3))));
var ensuringChildren = /* @__PURE__ */ dual(2, (self, children3) => flatMap8(track, (supervisor) => pipe(supervised(self, supervisor), ensuring(flatMap8(supervisor.value, children3)))));
var forkAll = /* @__PURE__ */ dual((args2) => isIterable(args2[0]), (effects, options) => options?.discard ? forEachSequentialDiscard(effects, fork) : map11(forEachSequential(effects, fork), fiberAll));
var forkIn = /* @__PURE__ */ dual(2, (self, scope5) => withFiberRuntime((parent2, parentStatus) => {
  const scopeImpl = scope5;
  const fiber = unsafeFork2(self, parent2, parentStatus.runtimeFlags, globalScope);
  if (scopeImpl.state._tag === "Open") {
    const finalizer3 = () => fiberIdWith((fiberId3) => equals(fiberId3, fiber.id()) ? void_2 : asVoid2(interruptFiber(fiber)));
    const key = {};
    scopeImpl.state.finalizers.set(key, finalizer3);
    fiber.addObserver(() => {
      if (scopeImpl.state._tag === "Closed") return;
      scopeImpl.state.finalizers.delete(key);
    });
  } else {
    fiber.unsafeInterruptAsFork(parent2.id());
  }
  return succeed(fiber);
}));
var forkScoped = (self) => scopeWith((scope5) => forkIn(self, scope5));
var fromFiber = (fiber) => join2(fiber);
var fromFiberEffect = (fiber) => suspend(() => flatMap8(fiber, join2));
var memoKeySymbol = /* @__PURE__ */ Symbol.for("effect/Effect/memoizeFunction.key");
var Key = class {
  a;
  eq;
  [memoKeySymbol] = memoKeySymbol;
  constructor(a, eq) {
    this.a = a;
    this.eq = eq;
  }
  [symbol2](that) {
    if (hasProperty(that, memoKeySymbol)) {
      if (this.eq) {
        return this.eq(this.a, that.a);
      } else {
        return equals(this.a, that.a);
      }
    }
    return false;
  }
  [symbol]() {
    return this.eq ? 0 : cached(this, hash(this.a));
  }
};
var cachedFunction = (f, eq) => {
  return pipe(sync(() => empty20()), flatMap8(makeSynchronized), map11((ref) => (a) => pipe(ref.modifyEffect((map28) => {
    const result = pipe(map28, get9(new Key(a, eq)));
    if (isNone2(result)) {
      return pipe(deferredMake(), tap2((deferred) => pipe(diffFiberRefs(f(a)), intoDeferred(deferred), fork)), map11((deferred) => [deferred, pipe(map28, set5(new Key(a, eq), deferred))]));
    }
    return succeed([result.value, map28]);
  }), flatMap8(deferredAwait), flatMap8(([patch9, b]) => pipe(patchFiberRefs(patch9), as2(b))))));
};
var raceFirst = /* @__PURE__ */ dual(2, (self, that) => pipe(exit(self), race(exit(that)), (effect4) => flatten7(effect4)));
var supervised = /* @__PURE__ */ dual(2, (self, supervisor) => {
  const supervise = fiberRefLocallyWith(currentSupervisor, (s) => s.zip(supervisor));
  return supervise(self);
});
var timeout = /* @__PURE__ */ dual(2, (self, duration2) => timeoutFail(self, {
  onTimeout: () => timeoutExceptionFromDuration(duration2),
  duration: duration2
}));
var timeoutFail = /* @__PURE__ */ dual(2, (self, {
  duration: duration2,
  onTimeout
}) => flatten7(timeoutTo(self, {
  onTimeout: () => failSync(onTimeout),
  onSuccess: succeed,
  duration: duration2
})));
var timeoutFailCause = /* @__PURE__ */ dual(2, (self, {
  duration: duration2,
  onTimeout
}) => flatten7(timeoutTo(self, {
  onTimeout: () => failCauseSync(onTimeout),
  onSuccess: succeed,
  duration: duration2
})));
var timeoutOption = /* @__PURE__ */ dual(2, (self, duration2) => timeoutTo(self, {
  duration: duration2,
  onSuccess: some2,
  onTimeout: none2
}));
var timeoutTo = /* @__PURE__ */ dual(2, (self, {
  duration: duration2,
  onSuccess,
  onTimeout
}) => fiberIdWith((parentFiberId) => uninterruptibleMask((restore) => raceFibersWith(restore(self), interruptible2(sleep3(duration2)), {
  onSelfWin: (winner, loser) => flatMap8(winner.await, (exit4) => {
    if (exit4._tag === "Success") {
      return flatMap8(winner.inheritAll, () => as2(interruptAsFiber(loser, parentFiberId), onSuccess(exit4.value)));
    } else {
      return flatMap8(interruptAsFiber(loser, parentFiberId), () => exitFailCause(exit4.cause));
    }
  }),
  onOtherWin: (winner, loser) => flatMap8(winner.await, (exit4) => {
    if (exit4._tag === "Success") {
      return flatMap8(winner.inheritAll, () => as2(interruptAsFiber(loser, parentFiberId), onTimeout()));
    } else {
      return flatMap8(interruptAsFiber(loser, parentFiberId), () => exitFailCause(exit4.cause));
    }
  }),
  otherScope: globalScope
}))));
var SynchronizedSymbolKey = "effect/Ref/SynchronizedRef";
var SynchronizedTypeId = /* @__PURE__ */ Symbol.for(SynchronizedSymbolKey);
var synchronizedVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
var SynchronizedImpl = class extends Class2 {
  ref;
  withLock;
  [SynchronizedTypeId] = synchronizedVariance;
  [RefTypeId] = refVariance;
  [TypeId13] = TypeId13;
  constructor(ref, withLock) {
    super();
    this.ref = ref;
    this.withLock = withLock;
    this.get = get12(this.ref);
  }
  get;
  commit() {
    return this.get;
  }
  modify(f) {
    return this.modifyEffect((a) => succeed(f(a)));
  }
  modifyEffect(f) {
    return this.withLock(pipe(flatMap8(get12(this.ref), f), flatMap8(([b, a]) => as2(set6(this.ref, a), b))));
  }
};
var makeSynchronized = (value) => sync(() => unsafeMakeSynchronized(value));
var unsafeMakeSynchronized = (value) => {
  const ref = unsafeMake5(value);
  const sem = unsafeMakeSemaphore(1);
  return new SynchronizedImpl(ref, sem.withPermits(1));
};
var updateSomeAndGetEffectSynchronized = /* @__PURE__ */ dual(2, (self, pf) => self.modifyEffect((value) => {
  const result = pf(value);
  switch (result._tag) {
    case "None": {
      return succeed([value, value]);
    }
    case "Some": {
      return map11(result.value, (a) => [a, a]);
    }
  }
}));
var bindAll = /* @__PURE__ */ dual((args2) => isEffect(args2[0]), (self, f, options) => flatMap8(self, (a) => all3(f(a), options).pipe(map11((record2) => Object.assign({}, a, record2)))));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/managedRuntime/circular.js
var TypeId16 = /* @__PURE__ */ Symbol.for("effect/ManagedRuntime");

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/opCodes/layer.js
var OP_EXTEND_SCOPE = "ExtendScope";
var OP_FOLD = "Fold";
var OP_FRESH = "Fresh";
var OP_FROM_EFFECT = "FromEffect";
var OP_SCOPED = "Scoped";
var OP_SUSPEND = "Suspend";
var OP_PROVIDE = "Provide";
var OP_PROVIDE_MERGE = "ProvideMerge";
var OP_ZIP_WITH2 = "ZipWith";

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Fiber.js
var _await3 = _await2;
var inheritAll2 = inheritAll;
var interrupt6 = interruptFiber;
var interruptAs = interruptAsFiber;
var interruptAllAs2 = interruptAllAs;
var join3 = join2;
var poll4 = poll3;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/runtime.js
var makeDual = (f) => function() {
  if (arguments.length === 1) {
    const runtime5 = arguments[0];
    return (effect4, ...args2) => f(runtime5, effect4, ...args2);
  }
  return f.apply(this, arguments);
};
var unsafeFork3 = /* @__PURE__ */ makeDual((runtime5, self, options) => {
  const fiberId3 = unsafeMake2();
  const fiberRefUpdates = [[currentContext, [[fiberId3, runtime5.context]]]];
  if (options?.scheduler) {
    fiberRefUpdates.push([currentScheduler, [[fiberId3, options.scheduler]]]);
  }
  let fiberRefs3 = updateManyAs2(runtime5.fiberRefs, {
    entries: fiberRefUpdates,
    forkAs: fiberId3
  });
  if (options?.updateRefs) {
    fiberRefs3 = options.updateRefs(fiberRefs3, fiberId3);
  }
  const fiberRuntime = new FiberRuntime(fiberId3, fiberRefs3, runtime5.runtimeFlags);
  let effect4 = self;
  if (options?.scope) {
    effect4 = flatMap8(fork2(options.scope, sequential2), (closeableScope) => zipRight2(scopeAddFinalizer(closeableScope, fiberIdWith((id2) => equals(id2, fiberRuntime.id()) ? void_2 : interruptAsFiber(fiberRuntime, id2))), onExit(self, (exit4) => close(closeableScope, exit4))));
  }
  const supervisor = fiberRuntime.currentSupervisor;
  if (supervisor !== none8) {
    supervisor.onStart(runtime5.context, effect4, none2(), fiberRuntime);
    fiberRuntime.addObserver((exit4) => supervisor.onEnd(exit4, fiberRuntime));
  }
  globalScope.add(runtime5.runtimeFlags, fiberRuntime);
  if (options?.immediate === false) {
    fiberRuntime.resume(effect4);
  } else {
    fiberRuntime.start(effect4);
  }
  return fiberRuntime;
});
var unsafeRunCallback = /* @__PURE__ */ makeDual((runtime5, effect4, options = {}) => {
  const fiberRuntime = unsafeFork3(runtime5, effect4, options);
  if (options.onExit) {
    fiberRuntime.addObserver((exit4) => {
      options.onExit(exit4);
    });
  }
  return (id2, cancelOptions) => unsafeRunCallback(runtime5)(pipe(fiberRuntime, interruptAs(id2 ?? none4)), {
    ...cancelOptions,
    onExit: cancelOptions?.onExit ? (exit4) => cancelOptions.onExit(flatten8(exit4)) : void 0
  });
});
var unsafeRunSync = /* @__PURE__ */ makeDual((runtime5, effect4) => {
  const result = unsafeRunSyncExit(runtime5)(effect4);
  if (result._tag === "Failure") {
    throw fiberFailure(result.effect_instruction_i0);
  }
  return result.effect_instruction_i0;
});
var AsyncFiberExceptionImpl = class extends Error {
  fiber;
  _tag = "AsyncFiberException";
  constructor(fiber) {
    super(`Fiber #${fiber.id().id} cannot be resolved synchronously. This is caused by using runSync on an effect that performs async work`);
    this.fiber = fiber;
    this.name = this._tag;
    this.stack = this.message;
  }
};
var asyncFiberException = (fiber) => {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  const error = new AsyncFiberExceptionImpl(fiber);
  Error.stackTraceLimit = limit;
  return error;
};
var FiberFailureId = /* @__PURE__ */ Symbol.for("effect/Runtime/FiberFailure");
var FiberFailureCauseId = /* @__PURE__ */ Symbol.for("effect/Runtime/FiberFailure/Cause");
var FiberFailureImpl = class extends Error {
  [FiberFailureId];
  [FiberFailureCauseId];
  constructor(cause3) {
    const head6 = prettyErrors(cause3)[0];
    super(head6?.message || "An error has occurred");
    this[FiberFailureId] = FiberFailureId;
    this[FiberFailureCauseId] = cause3;
    this.name = head6 ? `(FiberFailure) ${head6.name}` : "FiberFailure";
    if (head6?.stack) {
      this.stack = head6.stack;
    }
  }
  toJSON() {
    return {
      _id: "FiberFailure",
      cause: this[FiberFailureCauseId].toJSON()
    };
  }
  toString() {
    return "(FiberFailure) " + pretty(this[FiberFailureCauseId], {
      renderErrorCause: true
    });
  }
  [NodeInspectSymbol]() {
    return this.toString();
  }
};
var fiberFailure = (cause3) => {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  const error = new FiberFailureImpl(cause3);
  Error.stackTraceLimit = limit;
  return error;
};
var fastPath = (effect4) => {
  const op = effect4;
  switch (op._op) {
    case "Failure":
    case "Success": {
      return op;
    }
    case "Left": {
      return exitFail(op.left);
    }
    case "Right": {
      return exitSucceed(op.right);
    }
    case "Some": {
      return exitSucceed(op.value);
    }
    case "None": {
      return exitFail(NoSuchElementException());
    }
  }
};
var unsafeRunSyncExit = /* @__PURE__ */ makeDual((runtime5, effect4) => {
  const op = fastPath(effect4);
  if (op) {
    return op;
  }
  const scheduler = new SyncScheduler();
  const fiberRuntime = unsafeFork3(runtime5)(effect4, {
    scheduler
  });
  scheduler.flush();
  const result = fiberRuntime.unsafePoll();
  if (result) {
    return result;
  }
  return exitDie(capture(asyncFiberException(fiberRuntime), currentSpanFromFiber(fiberRuntime)));
});
var unsafeRunPromise = /* @__PURE__ */ makeDual((runtime5, effect4, options) => unsafeRunPromiseExit(runtime5, effect4, options).then((result) => {
  switch (result._tag) {
    case OP_SUCCESS: {
      return result.effect_instruction_i0;
    }
    case OP_FAILURE: {
      throw fiberFailure(result.effect_instruction_i0);
    }
  }
}));
var unsafeRunPromiseExit = /* @__PURE__ */ makeDual((runtime5, effect4, options) => new Promise((resolve) => {
  const op = fastPath(effect4);
  if (op) {
    resolve(op);
  }
  const fiber = unsafeFork3(runtime5)(effect4);
  fiber.addObserver((exit4) => {
    resolve(exit4);
  });
  if (options?.signal !== void 0) {
    if (options.signal.aborted) {
      fiber.unsafeInterruptAsFork(fiber.id());
    } else {
      options.signal.addEventListener("abort", () => {
        fiber.unsafeInterruptAsFork(fiber.id());
      }, {
        once: true
      });
    }
  }
}));
var RuntimeImpl = class {
  context;
  runtimeFlags;
  fiberRefs;
  constructor(context7, runtimeFlags2, fiberRefs3) {
    this.context = context7;
    this.runtimeFlags = runtimeFlags2;
    this.fiberRefs = fiberRefs3;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var make41 = (options) => new RuntimeImpl(options.context, options.runtimeFlags, options.fiberRefs);
var runtime2 = () => withFiberRuntime((state, status2) => succeed(new RuntimeImpl(state.getFiberRef(currentContext), status2.runtimeFlags, state.getFiberRefs())));
var defaultRuntimeFlags = /* @__PURE__ */ make18(Interruption, CooperativeYielding, RuntimeMetrics);
var defaultRuntime = /* @__PURE__ */ make41({
  context: /* @__PURE__ */ empty6(),
  runtimeFlags: defaultRuntimeFlags,
  fiberRefs: /* @__PURE__ */ empty24()
});
var unsafeRunEffect = /* @__PURE__ */ unsafeRunCallback(defaultRuntime);
var unsafeForkEffect = /* @__PURE__ */ unsafeFork3(defaultRuntime);
var unsafeRunPromiseEffect = /* @__PURE__ */ unsafeRunPromise(defaultRuntime);
var unsafeRunPromiseExitEffect = /* @__PURE__ */ unsafeRunPromiseExit(defaultRuntime);
var unsafeRunSyncEffect = /* @__PURE__ */ unsafeRunSync(defaultRuntime);
var unsafeRunSyncExitEffect = /* @__PURE__ */ unsafeRunSyncExit(defaultRuntime);
var asyncEffect = (register) => suspend(() => {
  let cleanup = void 0;
  return flatMap8(deferredMake(), (deferred) => flatMap8(runtime2(), (runtime5) => uninterruptibleMask((restore) => zipRight2(fork(restore(matchCauseEffect(register((cb) => unsafeRunCallback(runtime5)(intoDeferred(cb, deferred))), {
    onFailure: (cause3) => deferredFailCause(deferred, cause3),
    onSuccess: (cleanup_) => {
      cleanup = cleanup_;
      return void_2;
    }
  }))), restore(onInterrupt(deferredAwait(deferred), () => cleanup ?? void_2))))));
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/synchronizedRef.js
var modifyEffect = /* @__PURE__ */ dual(2, (self, f) => self.modifyEffect(f));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/layer.js
var LayerSymbolKey = "effect/Layer";
var LayerTypeId = /* @__PURE__ */ Symbol.for(LayerSymbolKey);
var layerVariance = {
  /* c8 ignore next */
  _RIn: (_) => _,
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _ROut: (_) => _
};
var proto3 = {
  [LayerTypeId]: layerVariance,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var MemoMapTypeIdKey = "effect/Layer/MemoMap";
var MemoMapTypeId = /* @__PURE__ */ Symbol.for(MemoMapTypeIdKey);
var CurrentMemoMap = /* @__PURE__ */ Reference2()("effect/Layer/CurrentMemoMap", {
  defaultValue: () => unsafeMakeMemoMap()
});
var isLayer = (u) => hasProperty(u, LayerTypeId);
var isFresh = (self) => {
  return self._op_layer === OP_FRESH;
};
var MemoMapImpl = class {
  ref;
  [MemoMapTypeId];
  constructor(ref) {
    this.ref = ref;
    this[MemoMapTypeId] = MemoMapTypeId;
  }
  /**
   * Checks the memo map to see if a layer exists. If it is, immediately
   * returns it. Otherwise, obtains the layer, stores it in the memo map,
   * and adds a finalizer to the `Scope`.
   */
  getOrElseMemoize(layer3, scope5) {
    return pipe(modifyEffect(this.ref, (map28) => {
      const inMap = map28.get(layer3);
      if (inMap !== void 0) {
        const [acquire, release] = inMap;
        const cached4 = pipe(acquire, flatMap8(([patch9, b]) => pipe(patchFiberRefs(patch9), as2(b))), onExit(exitMatch({
          onFailure: () => void_2,
          onSuccess: () => scopeAddFinalizerExit(scope5, release)
        })));
        return succeed([cached4, map28]);
      }
      return pipe(make28(0), flatMap8((observers) => pipe(deferredMake(), flatMap8((deferred) => pipe(make28(() => void_2), map11((finalizerRef) => {
        const resource = uninterruptibleMask((restore) => pipe(scopeMake(), flatMap8((innerScope) => pipe(restore(flatMap8(makeBuilder(layer3, innerScope, true), (f) => diffFiberRefs(f(this)))), exit, flatMap8((exit4) => {
          switch (exit4._tag) {
            case OP_FAILURE: {
              return pipe(deferredFailCause(deferred, exit4.effect_instruction_i0), zipRight2(scopeClose(innerScope, exit4)), zipRight2(failCause(exit4.effect_instruction_i0)));
            }
            case OP_SUCCESS: {
              return pipe(set6(finalizerRef, (exit5) => pipe(scopeClose(innerScope, exit5), whenEffect(modify4(observers, (n) => [n === 1, n - 1])), asVoid2)), zipRight2(update2(observers, (n) => n + 1)), zipRight2(scopeAddFinalizerExit(scope5, (exit5) => pipe(sync(() => map28.delete(layer3)), zipRight2(get12(finalizerRef)), flatMap8((finalizer3) => finalizer3(exit5))))), zipRight2(deferredSucceed(deferred, exit4.effect_instruction_i0)), as2(exit4.effect_instruction_i0[1]));
            }
          }
        })))));
        const memoized = [pipe(deferredAwait(deferred), onExit(exitMatchEffect({
          onFailure: () => void_2,
          onSuccess: () => update2(observers, (n) => n + 1)
        }))), (exit4) => pipe(get12(finalizerRef), flatMap8((finalizer3) => finalizer3(exit4)))];
        return [resource, isFresh(layer3) ? map28 : map28.set(layer3, memoized)];
      }))))));
    }), flatten7);
  }
};
var makeMemoMap = /* @__PURE__ */ suspend(() => map11(makeSynchronized(/* @__PURE__ */ new Map()), (ref) => new MemoMapImpl(ref)));
var unsafeMakeMemoMap = () => new MemoMapImpl(unsafeMakeSynchronized(/* @__PURE__ */ new Map()));
var build = (self) => scopeWith((scope5) => buildWithScope(self, scope5));
var buildWithScope = /* @__PURE__ */ dual(2, (self, scope5) => flatMap8(makeMemoMap, (memoMap) => buildWithMemoMap(self, memoMap, scope5)));
var buildWithMemoMap = /* @__PURE__ */ dual(3, (self, memoMap, scope5) => flatMap8(makeBuilder(self, scope5), (run7) => provideService(run7(memoMap), CurrentMemoMap, memoMap)));
var makeBuilder = (self, scope5, inMemoMap = false) => {
  const op = self;
  switch (op._op_layer) {
    case "Locally": {
      return sync(() => (memoMap) => op.f(memoMap.getOrElseMemoize(op.self, scope5)));
    }
    case "ExtendScope": {
      return sync(() => (memoMap) => scopeWith((scope6) => memoMap.getOrElseMemoize(op.layer, scope6)));
    }
    case "Fold": {
      return sync(() => (memoMap) => pipe(memoMap.getOrElseMemoize(op.layer, scope5), matchCauseEffect({
        onFailure: (cause3) => memoMap.getOrElseMemoize(op.failureK(cause3), scope5),
        onSuccess: (value) => memoMap.getOrElseMemoize(op.successK(value), scope5)
      })));
    }
    case "Fresh": {
      return sync(() => (_) => pipe(op.layer, buildWithScope(scope5)));
    }
    case "FromEffect": {
      return inMemoMap ? sync(() => (_) => op.effect) : sync(() => (memoMap) => memoMap.getOrElseMemoize(self, scope5));
    }
    case "Provide": {
      return sync(() => (memoMap) => pipe(memoMap.getOrElseMemoize(op.first, scope5), flatMap8((env) => pipe(memoMap.getOrElseMemoize(op.second, scope5), provideContext(env)))));
    }
    case "Scoped": {
      return inMemoMap ? sync(() => (_) => scopeExtend(op.effect, scope5)) : sync(() => (memoMap) => memoMap.getOrElseMemoize(self, scope5));
    }
    case "Suspend": {
      return sync(() => (memoMap) => memoMap.getOrElseMemoize(op.evaluate(), scope5));
    }
    case "ProvideMerge": {
      return sync(() => (memoMap) => pipe(memoMap.getOrElseMemoize(op.first, scope5), zipWith4(memoMap.getOrElseMemoize(op.second, scope5), op.zipK)));
    }
    case "ZipWith": {
      return sync(() => (memoMap) => pipe(memoMap.getOrElseMemoize(op.first, scope5), zipWithOptions(memoMap.getOrElseMemoize(op.second, scope5), op.zipK, {
        concurrent: true
      })));
    }
  }
};
var catchAll2 = /* @__PURE__ */ dual(2, (self, onFailure) => match11(self, {
  onFailure,
  onSuccess: succeedContext
}));
var catchAllCause2 = /* @__PURE__ */ dual(2, (self, onFailure) => matchCause3(self, {
  onFailure,
  onSuccess: succeedContext
}));
var die5 = (defect) => failCause6(die4(defect));
var dieSync2 = (evaluate3) => failCauseSync2(() => die4(evaluate3()));
var discard = (self) => map17(self, () => empty6());
var context2 = () => fromEffectContext(context());
var extendScope = (self) => {
  const extendScope3 = Object.create(proto3);
  extendScope3._op_layer = OP_EXTEND_SCOPE;
  extendScope3.layer = self;
  return extendScope3;
};
var fail7 = (error) => failCause6(fail5(error));
var failSync2 = (evaluate3) => failCauseSync2(() => fail5(evaluate3()));
var failCause6 = (cause3) => fromEffectContext(failCause(cause3));
var failCauseSync2 = (evaluate3) => fromEffectContext(failCauseSync(evaluate3));
var flatMap10 = /* @__PURE__ */ dual(2, (self, f) => match11(self, {
  onFailure: fail7,
  onSuccess: f
}));
var flatten9 = /* @__PURE__ */ dual(2, (self, tag2) => flatMap10(self, get4(tag2)));
var fresh = (self) => {
  const fresh3 = Object.create(proto3);
  fresh3._op_layer = OP_FRESH;
  fresh3.layer = self;
  return fresh3;
};
var fromEffect3 = /* @__PURE__ */ dual(2, (a, b) => {
  const tagFirst = isTag2(a);
  const tag2 = tagFirst ? a : b;
  const effect4 = tagFirst ? b : a;
  return fromEffectContext(map11(effect4, (service3) => make6(tag2, service3)));
});
var fromEffectDiscard = (effect4) => fromEffectContext(map11(effect4, () => empty6()));
function fromEffectContext(effect4) {
  const fromEffect9 = Object.create(proto3);
  fromEffect9._op_layer = OP_FROM_EFFECT;
  fromEffect9.effect = effect4;
  return fromEffect9;
}
var fiberRefLocally2 = /* @__PURE__ */ dual(3, (self, ref, value) => locallyEffect(self, fiberRefLocally(ref, value)));
var locallyEffect = /* @__PURE__ */ dual(2, (self, f) => {
  const locally4 = Object.create(proto3);
  locally4._op_layer = "Locally";
  locally4.self = self;
  locally4.f = f;
  return locally4;
});
var fiberRefLocallyWith2 = /* @__PURE__ */ dual(3, (self, ref, value) => locallyEffect(self, fiberRefLocallyWith(ref, value)));
var fiberRefLocallyScoped2 = (self, value) => scopedDiscard(fiberRefLocallyScoped(self, value));
var fiberRefLocallyScopedWith2 = (self, value) => scopedDiscard(fiberRefLocallyScopedWith(self, value));
var fromFunction = (tagA, tagB, f) => fromEffectContext(map11(tagA, (a) => make6(tagB, f(a))));
var launch = (self) => scopedEffect(zipRight2(scopeWith((scope5) => pipe(self, buildWithScope(scope5))), never));
var map17 = /* @__PURE__ */ dual(2, (self, f) => flatMap10(self, (context7) => succeedContext(f(context7))));
var mapError2 = /* @__PURE__ */ dual(2, (self, f) => catchAll2(self, (error) => failSync2(() => f(error))));
var matchCause3 = /* @__PURE__ */ dual(2, (self, {
  onFailure,
  onSuccess
}) => {
  const fold2 = Object.create(proto3);
  fold2._op_layer = OP_FOLD;
  fold2.layer = self;
  fold2.failureK = onFailure;
  fold2.successK = onSuccess;
  return fold2;
});
var match11 = /* @__PURE__ */ dual(2, (self, {
  onFailure,
  onSuccess
}) => matchCause3(self, {
  onFailure: (cause3) => {
    const failureOrCause3 = failureOrCause2(cause3);
    switch (failureOrCause3._tag) {
      case "Left": {
        return onFailure(failureOrCause3.left);
      }
      case "Right": {
        return failCause6(failureOrCause3.right);
      }
    }
  },
  onSuccess
}));
var memoize2 = (self) => scopeWith((scope5) => map11(memoize(buildWithScope(self, scope5)), fromEffectContext));
var merge6 = /* @__PURE__ */ dual(2, (self, that) => zipWith5(self, that, (a, b) => merge3(a, b)));
var mergeAll3 = (...layers) => {
  let final = layers[0];
  for (let i = 1; i < layers.length; i++) {
    final = merge6(final, layers[i]);
  }
  return final;
};
var orDie2 = (self) => catchAll2(self, (defect) => die5(defect));
var orElse4 = /* @__PURE__ */ dual(2, (self, that) => catchAll2(self, that));
var passthrough = (self) => merge6(context2(), self);
var project = /* @__PURE__ */ dual(4, (self, tagA, tagB, f) => map17(self, (context7) => make6(tagB, f(unsafeGet3(context7, tagA)))));
var retry = /* @__PURE__ */ dual(2, (self, schedule4) => suspend3(() => {
  const stateTag = GenericTag("effect/Layer/retry/{ state: unknown }");
  return pipe(succeed7(stateTag, {
    state: schedule4.initial
  }), flatMap10((env) => retryLoop(self, schedule4, stateTag, pipe(env, get4(stateTag)).state)));
}));
var retryLoop = (self, schedule4, stateTag, state) => {
  return pipe(self, catchAll2((error) => pipe(retryUpdate(schedule4, stateTag, error, state), flatMap10((env) => fresh(retryLoop(self, schedule4, stateTag, pipe(env, get4(stateTag)).state))))));
};
var retryUpdate = (schedule4, stateTag, error, state) => {
  return fromEffect3(stateTag, pipe(currentTimeMillis2, flatMap8((now) => pipe(schedule4.step(now, error, state), flatMap8(([state2, _, decision]) => isDone5(decision) ? fail2(error) : pipe(sleep2(millis(start2(decision.intervals) - now)), as2({
    state: state2
  })))))));
};
var scoped = /* @__PURE__ */ dual(2, (a, b) => {
  const tagFirst = isTag2(a);
  const tag2 = tagFirst ? a : b;
  const effect4 = tagFirst ? b : a;
  return scopedContext(map11(effect4, (service3) => make6(tag2, service3)));
});
var scopedDiscard = (effect4) => scopedContext(pipe(effect4, as2(empty6())));
var scopedContext = (effect4) => {
  const scoped7 = Object.create(proto3);
  scoped7._op_layer = OP_SCOPED;
  scoped7.effect = effect4;
  return scoped7;
};
var scope2 = /* @__PURE__ */ scopedContext(/* @__PURE__ */ map11(/* @__PURE__ */ acquireRelease(/* @__PURE__ */ scopeMake(), (scope5, exit4) => scope5.close(exit4)), (scope5) => make6(Scope, scope5)));
var service = (tag2) => fromEffect3(tag2, tag2);
var succeed7 = /* @__PURE__ */ dual(2, (a, b) => {
  const tagFirst = isTag2(a);
  const tag2 = tagFirst ? a : b;
  const resource = tagFirst ? b : a;
  return fromEffectContext(succeed(make6(tag2, resource)));
});
var succeedContext = (context7) => {
  return fromEffectContext(succeed(context7));
};
var empty33 = /* @__PURE__ */ succeedContext(/* @__PURE__ */ empty6());
var suspend3 = (evaluate3) => {
  const suspend12 = Object.create(proto3);
  suspend12._op_layer = OP_SUSPEND;
  suspend12.evaluate = evaluate3;
  return suspend12;
};
var sync4 = /* @__PURE__ */ dual(2, (a, b) => {
  const tagFirst = isTag2(a);
  const tag2 = tagFirst ? a : b;
  const evaluate3 = tagFirst ? b : a;
  return fromEffectContext(sync(() => make6(tag2, evaluate3())));
});
var syncContext = (evaluate3) => {
  return fromEffectContext(sync(evaluate3));
};
var tap3 = /* @__PURE__ */ dual(2, (self, f) => flatMap10(self, (context7) => fromEffectContext(as2(f(context7), context7))));
var tapError2 = /* @__PURE__ */ dual(2, (self, f) => catchAll2(self, (e) => fromEffectContext(flatMap8(f(e), () => fail2(e)))));
var tapErrorCause2 = /* @__PURE__ */ dual(2, (self, f) => catchAllCause2(self, (cause3) => fromEffectContext(flatMap8(f(cause3), () => failCause(cause3)))));
var toRuntime = (self) => pipe(scopeWith((scope5) => buildWithScope(self, scope5)), flatMap8((context7) => pipe(runtime2(), provideContext(context7))));
var toRuntimeWithMemoMap = /* @__PURE__ */ dual(2, (self, memoMap) => flatMap8(scopeWith((scope5) => buildWithMemoMap(self, memoMap, scope5)), (context7) => pipe(runtime2(), provideContext(context7))));
var provide = /* @__PURE__ */ dual(2, (self, that) => suspend3(() => {
  const provideTo = Object.create(proto3);
  provideTo._op_layer = OP_PROVIDE;
  provideTo.first = Object.create(proto3, {
    _op_layer: {
      value: OP_PROVIDE_MERGE,
      enumerable: true
    },
    first: {
      value: context2(),
      enumerable: true
    },
    second: {
      value: Array.isArray(that) ? mergeAll3(...that) : that
    },
    zipK: {
      value: (a, b) => pipe(a, merge3(b))
    }
  });
  provideTo.second = self;
  return provideTo;
}));
var provideMerge = /* @__PURE__ */ dual(2, (that, self) => {
  const zipWith13 = Object.create(proto3);
  zipWith13._op_layer = OP_PROVIDE_MERGE;
  zipWith13.first = self;
  zipWith13.second = provide(that, self);
  zipWith13.zipK = (a, b) => {
    return pipe(a, merge3(b));
  };
  return zipWith13;
});
var zipWith5 = /* @__PURE__ */ dual(3, (self, that, f) => suspend3(() => {
  const zipWith13 = Object.create(proto3);
  zipWith13._op_layer = OP_ZIP_WITH2;
  zipWith13.first = self;
  zipWith13.second = that;
  zipWith13.zipK = f;
  return zipWith13;
}));
var unwrapEffect = (self) => {
  const tag2 = GenericTag("effect/Layer/unwrapEffect/Layer.Layer<R1, E1, A>");
  return flatMap10(fromEffect3(tag2, self), (context7) => get4(context7, tag2));
};
var unwrapScoped = (self) => {
  const tag2 = GenericTag("effect/Layer/unwrapScoped/Layer.Layer<R1, E1, A>");
  return flatMap10(scoped(tag2, self), (context7) => get4(context7, tag2));
};
var annotateLogs2 = /* @__PURE__ */ dual((args2) => isLayer(args2[0]), function() {
  const args2 = arguments;
  return fiberRefLocallyWith2(args2[0], currentLogAnnotations, typeof args2[1] === "string" ? set4(args2[1], args2[2]) : (annotations2) => Object.entries(args2[1]).reduce((acc, [key, value]) => set4(acc, key, value), annotations2));
});
var annotateSpans2 = /* @__PURE__ */ dual((args2) => isLayer(args2[0]), function() {
  const args2 = arguments;
  return fiberRefLocallyWith2(args2[0], currentTracerSpanAnnotations, typeof args2[1] === "string" ? set4(args2[1], args2[2]) : (annotations2) => Object.entries(args2[1]).reduce((acc, [key, value]) => set4(acc, key, value), annotations2));
});
var withSpan2 = function() {
  const dataFirst = typeof arguments[0] !== "string";
  const name = dataFirst ? arguments[1] : arguments[0];
  const options = addSpanStackTrace(dataFirst ? arguments[2] : arguments[1]);
  if (dataFirst) {
    const self = arguments[0];
    return unwrapScoped(map11(options?.onEnd ? tap2(makeSpanScoped(name, options), (span4) => addFinalizer((exit4) => options.onEnd(span4, exit4))) : makeSpanScoped(name, options), (span4) => withParentSpan2(self, span4)));
  }
  return (self) => unwrapScoped(map11(options?.onEnd ? tap2(makeSpanScoped(name, options), (span4) => addFinalizer((exit4) => options.onEnd(span4, exit4))) : makeSpanScoped(name, options), (span4) => withParentSpan2(self, span4)));
};
var withParentSpan2 = /* @__PURE__ */ dual(2, (self, span4) => provide(self, succeedContext(make6(spanTag, span4))));
var provideSomeLayer = /* @__PURE__ */ dual(2, (self, layer3) => scopedWith((scope5) => flatMap8(buildWithScope(layer3, scope5), (context7) => provideSomeContext(self, context7))));
var provideSomeRuntime = /* @__PURE__ */ dual(2, (self, rt) => {
  const patchRefs = diff6(defaultRuntime.fiberRefs, rt.fiberRefs);
  const patchFlags = diff4(defaultRuntime.runtimeFlags, rt.runtimeFlags);
  return uninterruptibleMask((restore) => withFiberRuntime((fiber) => {
    const oldContext = fiber.getFiberRef(currentContext);
    const oldRefs = fiber.getFiberRefs();
    const newRefs = patch7(fiber.id(), oldRefs)(patchRefs);
    const oldFlags = fiber.currentRuntimeFlags;
    const newFlags = patch4(patchFlags)(oldFlags);
    const rollbackRefs = diff6(newRefs, oldRefs);
    const rollbackFlags = diff4(newFlags, oldFlags);
    fiber.setFiberRefs(newRefs);
    fiber.currentRuntimeFlags = newFlags;
    return ensuring(provideSomeContext(restore(self), merge3(oldContext, rt.context)), withFiberRuntime((fiber2) => {
      fiber2.setFiberRefs(patch7(fiber2.id(), fiber2.getFiberRefs())(rollbackRefs));
      fiber2.currentRuntimeFlags = patch4(rollbackFlags)(fiber2.currentRuntimeFlags);
      return void_2;
    }));
  }));
});
var effect_provide = /* @__PURE__ */ dual(2, (self, source) => {
  if (Array.isArray(source)) {
    return provideSomeLayer(self, mergeAll3(...source));
  } else if (isLayer(source)) {
    return provideSomeLayer(self, source);
  } else if (isContext2(source)) {
    return provideSomeContext(self, source);
  } else if (TypeId16 in source) {
    return flatMap8(source.runtimeEffect, (rt) => provideSomeRuntime(self, rt));
  } else {
    return provideSomeRuntime(self, source);
  }
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/console.js
var console2 = /* @__PURE__ */ map11(/* @__PURE__ */ fiberRefGet(currentServices), /* @__PURE__ */ get4(consoleTag));
var consoleWith = (f) => fiberRefGetWith(currentServices, (services) => f(get4(services, consoleTag)));
var withConsole = /* @__PURE__ */ dual(2, (effect4, value) => fiberRefLocallyWith(effect4, currentServices, add2(consoleTag, value)));
var withConsoleScoped = (console4) => fiberRefLocallyScopedWith(currentServices, add2(consoleTag, console4));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Data.js
var Error3 = /* @__PURE__ */ function() {
  const plainArgsSymbol = /* @__PURE__ */ Symbol.for("effect/Data/Error/plainArgs");
  const O = {
    BaseEffectError: class extends YieldableError {
      constructor(args2) {
        super(args2?.message, args2?.cause ? {
          cause: args2.cause
        } : void 0);
        if (args2) {
          Object.assign(this, args2);
          Object.defineProperty(this, plainArgsSymbol, {
            value: args2,
            enumerable: false
          });
        }
      }
      toJSON() {
        return {
          ...this[plainArgsSymbol],
          ...this
        };
      }
    }
  };
  return O.BaseEffectError;
}();
var TaggedError = (tag2) => {
  const O = {
    BaseEffectError: class extends Error3 {
      _tag = tag2;
    }
  };
  O.BaseEffectError.prototype.name = tag2;
  return O.BaseEffectError;
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/schedule.js
var ScheduleSymbolKey = "effect/Schedule";
var ScheduleTypeId = /* @__PURE__ */ Symbol.for(ScheduleSymbolKey);
var isSchedule = (u) => hasProperty(u, ScheduleTypeId);
var ScheduleDriverSymbolKey = "effect/ScheduleDriver";
var ScheduleDriverTypeId = /* @__PURE__ */ Symbol.for(ScheduleDriverSymbolKey);
var defaultIterationMetadata = {
  start: 0,
  now: 0,
  input: void 0,
  elapsed: zero,
  elapsedSincePrevious: zero,
  recurrence: 0
};
var CurrentIterationMetadata = /* @__PURE__ */ Reference2()("effect/Schedule/CurrentIterationMetadata", {
  defaultValue: () => defaultIterationMetadata
});
var scheduleVariance = {
  /* c8 ignore next */
  _Out: (_) => _,
  /* c8 ignore next */
  _In: (_) => _,
  /* c8 ignore next */
  _R: (_) => _
};
var scheduleDriverVariance = {
  /* c8 ignore next */
  _Out: (_) => _,
  /* c8 ignore next */
  _In: (_) => _,
  /* c8 ignore next */
  _R: (_) => _
};
var ScheduleImpl = class {
  initial;
  step;
  [ScheduleTypeId] = scheduleVariance;
  constructor(initial, step4) {
    this.initial = initial;
    this.step = step4;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var updateInfo = (iterationMetaRef, now, input) => update2(iterationMetaRef, (prev) => prev.recurrence === 0 ? {
  now,
  input,
  recurrence: prev.recurrence + 1,
  elapsed: zero,
  elapsedSincePrevious: zero,
  start: now
} : {
  now,
  input,
  recurrence: prev.recurrence + 1,
  elapsed: millis(now - prev.start),
  elapsedSincePrevious: millis(now - prev.now),
  start: prev.start
});
var ScheduleDriverImpl = class {
  schedule;
  ref;
  [ScheduleDriverTypeId] = scheduleDriverVariance;
  constructor(schedule4, ref) {
    this.schedule = schedule4;
    this.ref = ref;
  }
  get state() {
    return map11(get12(this.ref), (tuple) => tuple[1]);
  }
  get last() {
    return flatMap8(get12(this.ref), ([element, _]) => {
      switch (element._tag) {
        case "None": {
          return failSync(() => new NoSuchElementException());
        }
        case "Some": {
          return succeed(element.value);
        }
      }
    });
  }
  iterationMeta = /* @__PURE__ */ unsafeMake5(defaultIterationMetadata);
  get reset() {
    return set6(this.ref, [none2(), this.schedule.initial]).pipe(zipLeft2(set6(this.iterationMeta, defaultIterationMetadata)));
  }
  next(input) {
    return pipe(map11(get12(this.ref), (tuple) => tuple[1]), flatMap8((state) => pipe(currentTimeMillis2, flatMap8((now) => pipe(suspend(() => this.schedule.step(now, input, state)), flatMap8(([state2, out, decision]) => {
      const setState = set6(this.ref, [some2(out), state2]);
      if (isDone5(decision)) {
        return setState.pipe(zipRight2(fail2(none2())));
      }
      const millis2 = start2(decision.intervals) - now;
      if (millis2 <= 0) {
        return setState.pipe(zipRight2(updateInfo(this.iterationMeta, now, input)), as2(out));
      }
      const duration2 = millis(millis2);
      return pipe(setState, zipRight2(updateInfo(this.iterationMeta, now, input)), zipRight2(sleep3(duration2)), as2(out));
    }))))));
  }
};
var makeWithState = (initial, step4) => new ScheduleImpl(initial, step4);
var addDelay = /* @__PURE__ */ dual(2, (self, f) => addDelayEffect(self, (out) => sync(() => f(out))));
var addDelayEffect = /* @__PURE__ */ dual(2, (self, f) => modifyDelayEffect(self, (out, duration2) => map11(f(out), (delay3) => sum(duration2, decode(delay3)))));
var asVoid3 = (self) => map18(self, constVoid);
var check = /* @__PURE__ */ dual(2, (self, test3) => checkEffect(self, (input, out) => sync(() => test3(input, out))));
var checkEffect = /* @__PURE__ */ dual(2, (self, test3) => makeWithState(self.initial, (now, input, state) => flatMap8(self.step(now, input, state), ([state2, out, decision]) => {
  if (isDone5(decision)) {
    return succeed([state2, out, done6]);
  }
  return map11(test3(input, out), (cont) => cont ? [state2, out, decision] : [state2, out, done6]);
})));
var driver = (self) => pipe(make28([none2(), self.initial]), map11((ref) => new ScheduleDriverImpl(self, ref)));
var intersect5 = /* @__PURE__ */ dual(2, (self, that) => intersectWith(self, that, intersect4));
var intersectWith = /* @__PURE__ */ dual(3, (self, that, f) => makeWithState([self.initial, that.initial], (now, input, state) => pipe(zipWith4(self.step(now, input, state[0]), that.step(now, input, state[1]), (a, b) => [a, b]), flatMap8(([[lState, out, lDecision], [rState, out2, rDecision]]) => {
  if (isContinue2(lDecision) && isContinue2(rDecision)) {
    return intersectWithLoop(self, that, input, lState, out, lDecision.intervals, rState, out2, rDecision.intervals, f);
  }
  return succeed([[lState, rState], [out, out2], done6]);
}))));
var intersectWithLoop = (self, that, input, lState, out, lInterval, rState, out2, rInterval, f) => {
  const combined = f(lInterval, rInterval);
  if (isNonEmpty5(combined)) {
    return succeed([[lState, rState], [out, out2], _continue2(combined)]);
  }
  if (pipe(lInterval, lessThan6(rInterval))) {
    return flatMap8(self.step(end2(lInterval), input, lState), ([lState2, out3, decision]) => {
      if (isDone5(decision)) {
        return succeed([[lState2, rState], [out3, out2], done6]);
      }
      return intersectWithLoop(self, that, input, lState2, out3, decision.intervals, rState, out2, rInterval, f);
    });
  }
  return flatMap8(that.step(end2(rInterval), input, rState), ([rState2, out22, decision]) => {
    if (isDone5(decision)) {
      return succeed([[lState, rState2], [out, out22], done6]);
    }
    return intersectWithLoop(self, that, input, lState, out, lInterval, rState2, out22, decision.intervals, f);
  });
};
var map18 = /* @__PURE__ */ dual(2, (self, f) => mapEffect2(self, (out) => sync(() => f(out))));
var mapEffect2 = /* @__PURE__ */ dual(2, (self, f) => makeWithState(self.initial, (now, input, state) => flatMap8(self.step(now, input, state), ([state2, out, decision]) => map11(f(out), (out2) => [state2, out2, decision]))));
var modifyDelayEffect = /* @__PURE__ */ dual(2, (self, f) => makeWithState(self.initial, (now, input, state) => flatMap8(self.step(now, input, state), ([state2, out, decision]) => {
  if (isDone5(decision)) {
    return succeed([state2, out, decision]);
  }
  const intervals = decision.intervals;
  const delay3 = size11(make37(now, start2(intervals)));
  return map11(f(out, delay3), (durationInput) => {
    const duration2 = decode(durationInput);
    const oldStart = start2(intervals);
    const newStart = now + toMillis(duration2);
    const delta = newStart - oldStart;
    const newEnd = Math.max(0, end2(intervals) + delta);
    const newInterval = make37(newStart, newEnd);
    return [state2, out, continueWith2(newInterval)];
  });
})));
var passthrough2 = (self) => makeWithState(self.initial, (now, input, state) => pipe(self.step(now, input, state), map11(([state2, _, decision]) => [state2, input, decision])));
var recurs = (n) => whileOutput(forever2, (out) => out < n);
var spaced = (duration2) => addDelay(forever2, () => duration2);
var unfold2 = (initial, f) => makeWithState(initial, (now, _, state) => sync(() => [f(state), state, continueWith2(after2(now))]));
var untilInputEffect = /* @__PURE__ */ dual(2, (self, f) => checkEffect(self, (input, _) => negate(f(input))));
var whileInputEffect = /* @__PURE__ */ dual(2, (self, f) => checkEffect(self, (input, _) => f(input)));
var whileOutput = /* @__PURE__ */ dual(2, (self, f) => check(self, (_, out) => f(out)));
var ScheduleDefectTypeId = /* @__PURE__ */ Symbol.for("effect/Schedule/ScheduleDefect");
var ScheduleDefect = class {
  error;
  [ScheduleDefectTypeId];
  constructor(error) {
    this.error = error;
    this[ScheduleDefectTypeId] = ScheduleDefectTypeId;
  }
};
var isScheduleDefect = (u) => hasProperty(u, ScheduleDefectTypeId);
var scheduleDefectWrap = (self) => catchAll(self, (e) => die2(new ScheduleDefect(e)));
var scheduleDefectRefailCause = (cause3) => match2(find(cause3, (_) => isDieType(_) && isScheduleDefect(_.defect) ? some2(_.defect) : none2()), {
  onNone: () => cause3,
  onSome: (error) => fail(error.error)
});
var scheduleDefectRefail = (effect4) => catchAllCause(effect4, (cause3) => failCause(scheduleDefectRefailCause(cause3)));
var repeat_Effect = /* @__PURE__ */ dual(2, (self, schedule4) => repeatOrElse_Effect(self, schedule4, (e, _) => fail2(e)));
var repeat_combined = /* @__PURE__ */ dual(2, (self, options) => {
  if (isSchedule(options)) {
    return repeat_Effect(self, options);
  }
  const base = options.schedule ?? passthrough2(forever2);
  const withWhile = options.while ? whileInputEffect(base, (a) => {
    const applied = options.while(a);
    if (typeof applied === "boolean") {
      return succeed(applied);
    }
    return scheduleDefectWrap(applied);
  }) : base;
  const withUntil = options.until ? untilInputEffect(withWhile, (a) => {
    const applied = options.until(a);
    if (typeof applied === "boolean") {
      return succeed(applied);
    }
    return scheduleDefectWrap(applied);
  }) : withWhile;
  const withTimes = options.times ? intersect5(withUntil, recurs(options.times)).pipe(map18((intersectionPair) => intersectionPair[0])) : withUntil;
  return scheduleDefectRefail(repeat_Effect(self, withTimes));
});
var repeatOrElse_Effect = /* @__PURE__ */ dual(3, (self, schedule4, orElse11) => flatMap8(driver(schedule4), (driver3) => matchEffect(self, {
  onFailure: (error) => orElse11(error, none2()),
  onSuccess: (value) => repeatOrElseEffectLoop(provideServiceEffect(self, CurrentIterationMetadata, get12(driver3.iterationMeta)), driver3, (error, option3) => provideServiceEffect(orElse11(error, option3), CurrentIterationMetadata, get12(driver3.iterationMeta)), value)
})));
var repeatOrElseEffectLoop = (self, driver3, orElse11, value) => matchEffect(driver3.next(value), {
  onFailure: () => orDie(driver3.last),
  onSuccess: (b) => matchEffect(self, {
    onFailure: (error) => orElse11(error, some2(b)),
    onSuccess: (value2) => repeatOrElseEffectLoop(self, driver3, orElse11, value2)
  })
});
var retry_Effect = /* @__PURE__ */ dual(2, (self, policy) => retryOrElse_Effect(self, policy, (e, _) => fail2(e)));
var retry_combined = /* @__PURE__ */ dual(2, (self, options) => {
  if (isSchedule(options)) {
    return retry_Effect(self, options);
  }
  return scheduleDefectRefail(retry_Effect(self, fromRetryOptions(options)));
});
var fromRetryOptions = (options) => {
  const base = options.schedule ?? forever2;
  const withWhile = options.while ? whileInputEffect(base, (e) => {
    const applied = options.while(e);
    if (typeof applied === "boolean") {
      return succeed(applied);
    }
    return scheduleDefectWrap(applied);
  }) : base;
  const withUntil = options.until ? untilInputEffect(withWhile, (e) => {
    const applied = options.until(e);
    if (typeof applied === "boolean") {
      return succeed(applied);
    }
    return scheduleDefectWrap(applied);
  }) : withWhile;
  return options.times ? intersect5(withUntil, recurs(options.times)) : withUntil;
};
var retryOrElse_Effect = /* @__PURE__ */ dual(3, (self, policy, orElse11) => flatMap8(driver(policy), (driver3) => retryOrElse_EffectLoop(provideServiceEffect(self, CurrentIterationMetadata, get12(driver3.iterationMeta)), driver3, (e, out) => provideServiceEffect(orElse11(e, out), CurrentIterationMetadata, get12(driver3.iterationMeta)))));
var retryOrElse_EffectLoop = (self, driver3, orElse11) => {
  return catchAll(self, (e) => matchEffect(driver3.next(e), {
    onFailure: () => pipe(driver3.last, orDie, flatMap8((out) => orElse11(e, out))),
    onSuccess: () => retryOrElse_EffectLoop(self, driver3, orElse11)
  }));
};
var schedule_Effect = /* @__PURE__ */ dual(2, (self, schedule4) => scheduleFrom_Effect(self, void 0, schedule4));
var scheduleFrom_Effect = /* @__PURE__ */ dual(3, (self, initial, schedule4) => flatMap8(driver(schedule4), (driver3) => scheduleFrom_EffectLoop(provideServiceEffect(self, CurrentIterationMetadata, get12(driver3.iterationMeta)), initial, driver3)));
var scheduleFrom_EffectLoop = (self, initial, driver3) => matchEffect(driver3.next(initial), {
  onFailure: () => orDie(driver3.last),
  onSuccess: () => flatMap8(self, (a) => scheduleFrom_EffectLoop(self, a, driver3))
});
var forever2 = /* @__PURE__ */ unfold2(0, (n) => n + 1);
var once2 = /* @__PURE__ */ asVoid3(/* @__PURE__ */ recurs(1));
var scheduleForked = /* @__PURE__ */ dual(2, (self, schedule4) => forkScoped(schedule_Effect(self, schedule4)));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/executionPlan.js
var withExecutionPlan = /* @__PURE__ */ dual(2, (effect4, plan) => suspend(() => {
  let i = 0;
  let result;
  return flatMap8(whileLoop({
    while: () => i < plan.steps.length && (result === void 0 || isLeft2(result)),
    body: () => {
      const step4 = plan.steps[i];
      let nextEffect = effect_provide(effect4, step4.provide);
      if (result) {
        let attempted = false;
        const wrapped = nextEffect;
        nextEffect = suspend(() => {
          if (attempted) return wrapped;
          attempted = true;
          return result;
        });
        nextEffect = scheduleDefectRefail(retry_Effect(nextEffect, scheduleFromStep(step4, false)));
      } else {
        const schedule4 = scheduleFromStep(step4, true);
        nextEffect = schedule4 ? scheduleDefectRefail(retry_Effect(nextEffect, schedule4)) : nextEffect;
      }
      return either2(nextEffect);
    },
    step: (either7) => {
      result = either7;
      i++;
    }
  }), () => result);
}));
var scheduleFromStep = (step4, first2) => {
  if (!first2) {
    return fromRetryOptions({
      schedule: step4.schedule ? step4.schedule : step4.attempts ? void 0 : once2,
      times: step4.attempts,
      while: step4.while
    });
  } else if (step4.attempts === 1 || !(step4.schedule || step4.attempts)) {
    return void 0;
  }
  return fromRetryOptions({
    schedule: step4.schedule,
    while: step4.while,
    times: step4.attempts ? step4.attempts - 1 : void 0
  });
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/query.js
var currentCache = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentCache"), () => fiberRefUnsafeMake(unsafeMakeWith(65536, () => map11(deferredMake(), (handle) => ({
  listeners: new Listeners(),
  handle
})), () => seconds(60))));
var currentCacheEnabled = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentCacheEnabled"), () => fiberRefUnsafeMake(false));
var fromRequest = (request2, dataSource) => flatMap8(isEffect(dataSource) ? dataSource : succeed(dataSource), (ds) => fiberIdWith((id2) => {
  const proxy = new Proxy(request2, {});
  return fiberRefGetWith(currentCacheEnabled, (cacheEnabled) => {
    if (cacheEnabled) {
      const cached4 = fiberRefGetWith(currentCache, (cache) => flatMap8(cache.getEither(proxy), (orNew) => {
        switch (orNew._tag) {
          case "Left": {
            if (orNew.left.listeners.interrupted) {
              return flatMap8(cache.invalidateWhen(proxy, (entry) => entry.handle === orNew.left.handle), () => cached4);
            }
            orNew.left.listeners.increment();
            return uninterruptibleMask((restore) => flatMap8(exit(blocked(empty18, restore(deferredAwait(orNew.left.handle)))), (exit4) => {
              orNew.left.listeners.decrement();
              return exit4;
            }));
          }
          case "Right": {
            orNew.right.listeners.increment();
            return uninterruptibleMask((restore) => flatMap8(exit(blocked(single(ds, makeEntry({
              request: proxy,
              result: orNew.right.handle,
              listeners: orNew.right.listeners,
              ownerId: id2,
              state: {
                completed: false
              }
            })), restore(deferredAwait(orNew.right.handle)))), () => {
              orNew.right.listeners.decrement();
              return deferredAwait(orNew.right.handle);
            }));
          }
        }
      }));
      return cached4;
    }
    const listeners = new Listeners();
    listeners.increment();
    return flatMap8(deferredMake(), (ref) => ensuring(blocked(single(ds, makeEntry({
      request: proxy,
      result: ref,
      listeners,
      ownerId: id2,
      state: {
        completed: false
      }
    })), deferredAwait(ref)), sync(() => listeners.decrement())));
  });
}));
var cacheRequest = (request2, result) => {
  return fiberRefGetWith(currentCacheEnabled, (cacheEnabled) => {
    if (cacheEnabled) {
      return fiberRefGetWith(currentCache, (cache) => flatMap8(cache.getEither(request2), (orNew) => {
        switch (orNew._tag) {
          case "Left": {
            return void_2;
          }
          case "Right": {
            return deferredComplete(orNew.right.handle, result);
          }
        }
      }));
    }
    return void_2;
  });
};
var withRequestCaching = /* @__PURE__ */ dual(2, (self, strategy) => fiberRefLocally(self, currentCacheEnabled, strategy));
var withRequestCache = /* @__PURE__ */ dual(
  2,
  // @ts-expect-error
  (self, cache) => fiberRefLocally(self, currentCache, cache)
);

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Request.js
var isRequest2 = isRequest;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Effect.js
var EffectTypeId3 = EffectTypeId2;
var isEffect2 = isEffect;
var cachedWithTTL = cached2;
var cachedInvalidateWithTTL2 = cachedInvalidateWithTTL;
var cached3 = memoize;
var cachedFunction2 = cachedFunction;
var once3 = once;
var all4 = all3;
var allWith2 = allWith;
var allSuccesses2 = allSuccesses;
var dropUntil2 = dropUntil;
var dropWhile4 = dropWhile3;
var takeUntil2 = takeUntil;
var takeWhile4 = takeWhile3;
var every7 = every6;
var exists3 = exists2;
var filter9 = filter7;
var filterMap7 = filterMap6;
var findFirst8 = findFirst6;
var forEach10 = forEach9;
var head4 = head3;
var mergeAll4 = mergeAll2;
var partition5 = partition4;
var reduce12 = reduce10;
var reduceWhile2 = reduceWhile;
var reduceRight4 = reduceRight3;
var reduceEffect2 = reduceEffect;
var replicate3 = replicate2;
var replicateEffect2 = replicateEffect;
var validateAll2 = validateAll;
var validateFirst2 = validateFirst;
var async2 = async_;
var asyncEffect2 = asyncEffect;
var custom2 = custom;
var withFiberRuntime2 = withFiberRuntime;
var fail9 = fail2;
var failSync3 = failSync;
var failCause8 = failCause;
var failCauseSync3 = failCauseSync;
var die6 = die2;
var dieMessage2 = dieMessage;
var dieSync3 = dieSync;
var gen3 = gen2;
var never3 = never;
var none9 = none6;
var promise2 = promise;
var succeed9 = succeed;
var succeedNone2 = succeedNone;
var succeedSome2 = succeedSome;
var suspend4 = suspend;
var sync5 = sync;
var _void = void_2;
var yieldNow4 = yieldNow;
var _catch2 = _catch;
var catchAll3 = catchAll;
var catchAllCause3 = catchAllCause;
var catchAllDefect2 = catchAllDefect;
var catchIf2 = catchIf;
var catchSome2 = catchSome;
var catchSomeCause2 = catchSomeCause;
var catchSomeDefect2 = catchSomeDefect;
var catchTag2 = catchTag;
var catchTags2 = catchTags;
var cause2 = cause;
var eventually2 = eventually;
var ignore2 = ignore;
var ignoreLogged2 = ignoreLogged;
var parallelErrors2 = parallelErrors;
var sandbox2 = sandbox;
var retry2 = retry_combined;
var withExecutionPlan2 = withExecutionPlan;
var retryOrElse = retryOrElse_Effect;
var try_2 = try_;
var tryMap2 = tryMap;
var tryMapPromise2 = tryMapPromise;
var tryPromise2 = tryPromise;
var unsandbox2 = unsandbox;
var allowInterrupt2 = allowInterrupt;
var checkInterruptible2 = checkInterruptible;
var disconnect2 = disconnect;
var interrupt7 = interrupt2;
var interruptWith2 = interruptWith;
var interruptible4 = interruptible2;
var interruptibleMask2 = interruptibleMask;
var onInterrupt2 = onInterrupt;
var uninterruptible2 = uninterruptible;
var uninterruptibleMask3 = uninterruptibleMask;
var liftPredicate4 = liftPredicate3;
var as5 = as2;
var asSome2 = asSome;
var asSomeError2 = asSomeError;
var asVoid4 = asVoid2;
var flip2 = flip;
var flipWith2 = flipWith;
var map19 = map11;
var mapAccum4 = mapAccum3;
var mapBoth4 = mapBoth2;
var mapError3 = mapError;
var mapErrorCause2 = mapErrorCause;
var merge7 = merge5;
var negate2 = negate;
var acquireRelease2 = acquireRelease;
var acquireReleaseInterruptible2 = acquireReleaseInterruptible;
var acquireUseRelease2 = acquireUseRelease;
var addFinalizer3 = addFinalizer;
var ensuring2 = ensuring;
var onError2 = onError;
var onExit3 = onExit;
var parallelFinalizers2 = parallelFinalizers;
var sequentialFinalizers2 = sequentialFinalizers;
var finalizersMask2 = finalizersMask;
var scope3 = scope;
var scopeWith2 = scopeWith;
var scopedWith2 = scopedWith;
var scoped2 = scopedEffect;
var using2 = using;
var withEarlyRelease2 = withEarlyRelease;
var awaitAllChildren2 = awaitAllChildren;
var daemonChildren2 = daemonChildren;
var descriptor2 = descriptor;
var descriptorWith2 = descriptorWith;
var diffFiberRefs2 = diffFiberRefs;
var ensuringChild2 = ensuringChild;
var ensuringChildren2 = ensuringChildren;
var fiberId2 = fiberId;
var fiberIdWith2 = fiberIdWith;
var fork3 = fork;
var forkDaemon2 = forkDaemon;
var forkAll2 = forkAll;
var forkIn2 = forkIn;
var forkScoped2 = forkScoped;
var forkWithErrorHandler2 = forkWithErrorHandler;
var fromFiber2 = fromFiber;
var fromFiberEffect2 = fromFiberEffect;
var supervised2 = supervised;
var transplant2 = transplant;
var withConcurrency2 = withConcurrency;
var withScheduler2 = withScheduler;
var withSchedulingPriority2 = withSchedulingPriority;
var withMaxOpsBeforeYield2 = withMaxOpsBeforeYield;
var clock2 = clock;
var clockWith4 = clockWith3;
var withClockScoped2 = withClockScoped;
var withClock2 = withClock;
var console3 = console2;
var consoleWith2 = consoleWith;
var withConsoleScoped2 = withConsoleScoped;
var withConsole2 = withConsole;
var delay2 = delay;
var sleep4 = sleep3;
var timed2 = timed;
var timedWith2 = timedWith;
var timeout2 = timeout;
var timeoutOption2 = timeoutOption;
var timeoutFail2 = timeoutFail;
var timeoutFailCause2 = timeoutFailCause;
var timeoutTo2 = timeoutTo;
var configProviderWith2 = configProviderWith;
var withConfigProvider2 = withConfigProvider;
var withConfigProviderScoped2 = withConfigProviderScoped;
var context3 = context;
var contextWith2 = contextWith;
var contextWithEffect2 = contextWithEffect;
var mapInputContext2 = mapInputContext;
var provide2 = effect_provide;
var provideService2 = provideService;
var provideServiceEffect2 = provideServiceEffect;
var serviceFunction2 = serviceFunction;
var serviceFunctionEffect2 = serviceFunctionEffect;
var serviceFunctions2 = serviceFunctions;
var serviceConstants2 = serviceConstants;
var serviceMembers2 = serviceMembers;
var serviceOption2 = serviceOption;
var serviceOptional2 = serviceOptional;
var updateService2 = updateService;
var Do4 = Do3;
var bind5 = bind4;
var bindAll2 = bindAll;
var bindTo5 = bindTo4;
var let_5 = let_4;
var option2 = option;
var either3 = either2;
var exit3 = exit;
var intoDeferred2 = intoDeferred;
var if_2 = if_;
var filterOrDie2 = filterOrDie;
var filterOrDieMessage2 = filterOrDieMessage;
var filterOrElse2 = filterOrElse;
var filterOrFail2 = filterOrFail;
var filterEffectOrElse2 = filterEffectOrElse;
var filterEffectOrFail2 = filterEffectOrFail;
var unless2 = unless;
var unlessEffect2 = unlessEffect;
var when2 = when;
var whenEffect2 = whenEffect;
var whenFiberRef2 = whenFiberRef;
var whenRef2 = whenRef;
var flatMap11 = flatMap8;
var andThen5 = andThen3;
var flatten10 = flatten7;
var race2 = race;
var raceAll2 = raceAll;
var raceFirst2 = raceFirst;
var raceWith2 = raceWith;
var summarized2 = summarized;
var tap4 = tap2;
var tapBoth2 = tapBoth;
var tapDefect2 = tapDefect;
var tapError3 = tapError;
var tapErrorTag2 = tapErrorTag;
var tapErrorCause3 = tapErrorCause;
var forever3 = forever;
var iterate2 = iterate;
var loop2 = loop;
var repeat = repeat_combined;
var repeatN2 = repeatN;
var repeatOrElse = repeatOrElse_Effect;
var schedule = schedule_Effect;
var scheduleForked2 = scheduleForked;
var scheduleFrom = scheduleFrom_Effect;
var whileLoop3 = whileLoop;
var getFiberRefs = fiberRefs2;
var inheritFiberRefs2 = inheritFiberRefs;
var locally2 = fiberRefLocally;
var locallyWith = fiberRefLocallyWith;
var locallyScoped = fiberRefLocallyScoped;
var locallyScopedWith = fiberRefLocallyScopedWith;
var patchFiberRefs2 = patchFiberRefs;
var setFiberRefs2 = setFiberRefs;
var updateFiberRefs2 = updateFiberRefs;
var isFailure4 = isFailure2;
var isSuccess3 = isSuccess2;
var match12 = match7;
var matchCause4 = matchCause;
var matchCauseEffect3 = matchCauseEffect;
var matchEffect2 = matchEffect;
var log2 = log;
var logWithLevel2 = (level, ...message) => logWithLevel(level)(...message);
var logTrace2 = logTrace;
var logDebug2 = logDebug;
var logInfo2 = logInfo;
var logWarning2 = logWarning;
var logError2 = logError;
var logFatal2 = logFatal;
var withLogSpan2 = withLogSpan;
var annotateLogs3 = annotateLogs;
var annotateLogsScoped2 = annotateLogsScoped;
var logAnnotations2 = logAnnotations;
var withUnhandledErrorLogLevel2 = withUnhandledErrorLogLevel;
var whenLogLevel2 = whenLogLevel;
var orDie3 = orDie;
var orDieWith2 = orDieWith;
var orElse5 = orElse2;
var orElseFail2 = orElseFail;
var orElseSucceed2 = orElseSucceed;
var firstSuccessOf2 = firstSuccessOf;
var random3 = random2;
var randomWith2 = randomWith;
var withRandom2 = withRandom;
var withRandomScoped2 = withRandomScoped;
var runtime3 = runtime2;
var getRuntimeFlags = runtimeFlags;
var patchRuntimeFlags = updateRuntimeFlags;
var withRuntimeFlagsPatch = withRuntimeFlags;
var withRuntimeFlagsPatchScoped = withRuntimeFlagsScoped;
var tagMetrics2 = tagMetrics;
var labelMetrics2 = labelMetrics;
var tagMetricsScoped2 = tagMetricsScoped;
var labelMetricsScoped2 = labelMetricsScoped;
var metricLabels2 = metricLabels;
var withMetric2 = withMetric;
var unsafeMakeSemaphore2 = unsafeMakeSemaphore;
var makeSemaphore2 = makeSemaphore;
var unsafeMakeLatch2 = unsafeMakeLatch;
var makeLatch2 = makeLatch;
var runFork2 = unsafeForkEffect;
var runCallback = unsafeRunEffect;
var runPromise = unsafeRunPromiseEffect;
var runPromiseExit = unsafeRunPromiseExitEffect;
var runSync = unsafeRunSyncEffect;
var runSyncExit = unsafeRunSyncExitEffect;
var validate2 = validate;
var validateWith2 = validateWith;
var zip6 = zipOptions;
var zipLeft4 = zipLeftOptions;
var zipRight5 = zipRightOptions;
var zipWith6 = zipWithOptions;
var ap2 = /* @__PURE__ */ dual(2, (self, that) => zipWith6(self, that, (f, a) => f(a)));
var blocked2 = blocked;
var runRequestBlock2 = runRequestBlock;
var step3 = step2;
var request = /* @__PURE__ */ dual((args2) => isRequest2(args2[0]), fromRequest);
var cacheRequestResult = cacheRequest;
var withRequestBatching2 = withRequestBatching;
var withRequestCaching2 = withRequestCaching;
var withRequestCache2 = withRequestCache;
var tracer2 = tracer;
var tracerWith4 = tracerWith;
var withTracer2 = withTracer;
var withTracerScoped2 = withTracerScoped;
var withTracerEnabled2 = withTracerEnabled;
var withTracerTiming2 = withTracerTiming;
var annotateSpans3 = annotateSpans;
var annotateCurrentSpan2 = annotateCurrentSpan;
var currentSpan2 = currentSpan;
var currentParentSpan2 = currentParentSpan;
var spanAnnotations2 = spanAnnotations;
var spanLinks2 = spanLinks;
var linkSpans2 = linkSpans;
var linkSpanCurrent2 = linkSpanCurrent;
var makeSpan2 = makeSpan;
var makeSpanScoped2 = makeSpanScoped;
var useSpan2 = useSpan;
var withSpan3 = withSpan;
var functionWithSpan2 = functionWithSpan;
var withSpanScoped2 = withSpanScoped;
var withParentSpan3 = withParentSpan;
var fromNullable4 = fromNullable3;
var optionFromOptional2 = optionFromOptional;
var transposeOption = (self) => {
  return isNone(self) ? succeedNone2 : map19(self.value, some);
};
var transposeMapOption = /* @__PURE__ */ dual(2, (self, f) => isNone(self) ? succeedNone2 : map19(f(self.value), some));
var makeTagProxy = (TagClass) => {
  const cache = /* @__PURE__ */ new Map();
  return new Proxy(TagClass, {
    get(target, prop3, receiver) {
      if (prop3 in target) {
        return Reflect.get(target, prop3, receiver);
      }
      if (cache.has(prop3)) {
        return cache.get(prop3);
      }
      const fn2 = (...args2) => andThen3(target, (s) => {
        if (typeof s[prop3] === "function") {
          cache.set(prop3, (...args3) => andThen3(target, (s2) => s2[prop3](...args3)));
          return s[prop3](...args2);
        }
        cache.set(prop3, andThen3(target, (s2) => s2[prop3]));
        return s[prop3];
      });
      const cn = andThen3(target, (s) => s[prop3]);
      Object.assign(fn2, cn);
      Object.setPrototypeOf(fn2, Object.getPrototypeOf(cn));
      cache.set(prop3, fn2);
      return fn2;
    }
  });
};
var Tag2 = (id2) => () => {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  const creationError = new Error();
  Error.stackTraceLimit = limit;
  function TagClass() {
  }
  Object.setPrototypeOf(TagClass, TagProto);
  TagClass.key = id2;
  Object.defineProperty(TagClass, "use", {
    get() {
      return (body) => andThen3(this, body);
    }
  });
  Object.defineProperty(TagClass, "stack", {
    get() {
      return creationError.stack;
    }
  });
  return makeTagProxy(TagClass);
};
var Service = function() {
  return function() {
    const [id2, maker] = arguments;
    const proxy = "accessors" in maker ? maker["accessors"] : false;
    const limit = Error.stackTraceLimit;
    Error.stackTraceLimit = 2;
    const creationError = new Error();
    Error.stackTraceLimit = limit;
    let patchState = "unchecked";
    const TagClass = function(service3) {
      if (patchState === "unchecked") {
        const proto12 = Object.getPrototypeOf(service3);
        if (proto12 === Object.prototype || proto12 === null) {
          patchState = "plain";
        } else {
          const selfProto = Object.getPrototypeOf(this);
          Object.setPrototypeOf(selfProto, proto12);
          patchState = "patched";
        }
      }
      if (patchState === "plain") {
        Object.assign(this, service3);
      } else if (patchState === "patched") {
        Object.setPrototypeOf(service3, Object.getPrototypeOf(this));
        return service3;
      }
    };
    TagClass.prototype._tag = id2;
    Object.defineProperty(TagClass, "make", {
      get() {
        return (service3) => new this(service3);
      }
    });
    Object.defineProperty(TagClass, "use", {
      get() {
        return (body) => andThen3(this, body);
      }
    });
    TagClass.key = id2;
    Object.assign(TagClass, TagProto);
    Object.defineProperty(TagClass, "stack", {
      get() {
        return creationError.stack;
      }
    });
    const hasDeps = "dependencies" in maker && maker.dependencies.length > 0;
    const layerName = hasDeps ? "DefaultWithoutDependencies" : "Default";
    let layerCache;
    let isFunction3 = false;
    if ("effect" in maker) {
      isFunction3 = typeof maker.effect === "function";
      Object.defineProperty(TagClass, layerName, {
        get() {
          if (isFunction3) {
            return function() {
              return fromEffect3(TagClass, map19(maker.effect.apply(null, arguments), (_) => new this(_)));
            }.bind(this);
          }
          return layerCache ??= fromEffect3(TagClass, map19(maker.effect, (_) => new this(_)));
        }
      });
    } else if ("scoped" in maker) {
      isFunction3 = typeof maker.scoped === "function";
      Object.defineProperty(TagClass, layerName, {
        get() {
          if (isFunction3) {
            return function() {
              return scoped(TagClass, map19(maker.scoped.apply(null, arguments), (_) => new this(_)));
            }.bind(this);
          }
          return layerCache ??= scoped(TagClass, map19(maker.scoped, (_) => new this(_)));
        }
      });
    } else if ("sync" in maker) {
      Object.defineProperty(TagClass, layerName, {
        get() {
          return layerCache ??= sync4(TagClass, () => new this(maker.sync()));
        }
      });
    } else {
      Object.defineProperty(TagClass, layerName, {
        get() {
          return layerCache ??= succeed7(TagClass, new this(maker.succeed));
        }
      });
    }
    if (hasDeps) {
      let layerWithDepsCache;
      Object.defineProperty(TagClass, "Default", {
        get() {
          if (isFunction3) {
            return function() {
              return provide(this.DefaultWithoutDependencies.apply(null, arguments), maker.dependencies);
            };
          }
          return layerWithDepsCache ??= provide(this.DefaultWithoutDependencies, maker.dependencies);
        }
      });
    }
    return proxy === true ? makeTagProxy(TagClass) : TagClass;
  };
};
var fn = function(nameOrBody, ...pipeables) {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  const errorDef = new Error();
  Error.stackTraceLimit = limit;
  if (typeof nameOrBody !== "string") {
    return defineLength(nameOrBody.length, function(...args2) {
      const limit2 = Error.stackTraceLimit;
      Error.stackTraceLimit = 2;
      const errorCall = new Error();
      Error.stackTraceLimit = limit2;
      return fnApply({
        self: this,
        body: nameOrBody,
        args: args2,
        pipeables,
        spanName: "<anonymous>",
        spanOptions: {
          context: DisablePropagation.context(true)
        },
        errorDef,
        errorCall
      });
    });
  }
  const name = nameOrBody;
  const options = pipeables[0];
  return (body, ...pipeables2) => defineLength(body.length, {
    [name](...args2) {
      const limit2 = Error.stackTraceLimit;
      Error.stackTraceLimit = 2;
      const errorCall = new Error();
      Error.stackTraceLimit = limit2;
      return fnApply({
        self: this,
        body,
        args: args2,
        pipeables: pipeables2,
        spanName: name,
        spanOptions: options,
        errorDef,
        errorCall
      });
    }
  }[name]);
};
function defineLength(length4, fn2) {
  return Object.defineProperty(fn2, "length", {
    value: length4,
    configurable: true
  });
}
function fnApply(options) {
  let effect4;
  let fnError = void 0;
  if (isGeneratorFunction(options.body)) {
    effect4 = fromIterator(() => options.body.apply(options.self, options.args));
  } else {
    try {
      effect4 = options.body.apply(options.self, options.args);
    } catch (error) {
      fnError = error;
      effect4 = die6(error);
    }
  }
  if (options.pipeables.length > 0) {
    try {
      for (const x of options.pipeables) {
        effect4 = x(effect4, ...options.args);
      }
    } catch (error) {
      effect4 = fnError ? failCause8(sequential(die(fnError), die(error))) : die6(error);
    }
  }
  let cache = false;
  const captureStackTrace = () => {
    if (cache !== false) {
      return cache;
    }
    if (options.errorCall.stack) {
      const stackDef = options.errorDef.stack.trim().split("\n");
      const stackCall = options.errorCall.stack.trim().split("\n");
      let endStackDef = stackDef.slice(2).join("\n").trim();
      if (!endStackDef.includes(`(`)) {
        endStackDef = endStackDef.replace(/at (.*)/, "at ($1)");
      }
      let endStackCall = stackCall.slice(2).join("\n").trim();
      if (!endStackCall.includes(`(`)) {
        endStackCall = endStackCall.replace(/at (.*)/, "at ($1)");
      }
      cache = `${endStackDef}
${endStackCall}`;
      return cache;
    }
  };
  const opts = options.spanOptions && "captureStackTrace" in options.spanOptions ? options.spanOptions : {
    captureStackTrace,
    ...options.spanOptions
  };
  return withSpan3(effect4, options.spanName, opts);
}
var fnUntraced2 = fnUntraced;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/FiberRef.js
var get14 = fiberRefGet;
var getWith = fiberRefGetWith;
var currentContext2 = currentContext;
var currentSchedulingPriority2 = currentSchedulingPriority;
var currentScheduler2 = currentScheduler;
var currentTracerTimingEnabled2 = currentTracerTimingEnabled;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Layer.js
var Layer_exports = {};
__export(Layer_exports, {
  CurrentMemoMap: () => CurrentMemoMap2,
  LayerTypeId: () => LayerTypeId2,
  MemoMapTypeId: () => MemoMapTypeId2,
  annotateLogs: () => annotateLogs4,
  annotateSpans: () => annotateSpans4,
  build: () => build2,
  buildWithMemoMap: () => buildWithMemoMap2,
  buildWithScope: () => buildWithScope2,
  catchAll: () => catchAll4,
  catchAllCause: () => catchAllCause4,
  context: () => context4,
  die: () => die7,
  dieSync: () => dieSync4,
  discard: () => discard2,
  effect: () => effect,
  effectContext: () => effectContext,
  effectDiscard: () => effectDiscard,
  empty: () => empty34,
  extendScope: () => extendScope2,
  fail: () => fail10,
  failCause: () => failCause9,
  failCauseSync: () => failCauseSync4,
  failSync: () => failSync4,
  fiberRefLocallyScopedWith: () => fiberRefLocallyScopedWith3,
  flatMap: () => flatMap12,
  flatten: () => flatten11,
  fresh: () => fresh2,
  function: () => fromFunction2,
  isFresh: () => isFresh2,
  isLayer: () => isLayer2,
  launch: () => launch2,
  locally: () => locally3,
  locallyEffect: () => locallyEffect2,
  locallyScoped: () => locallyScoped2,
  locallyWith: () => locallyWith2,
  makeMemoMap: () => makeMemoMap2,
  map: () => map20,
  mapError: () => mapError4,
  match: () => match13,
  matchCause: () => matchCause5,
  memoize: () => memoize3,
  merge: () => merge8,
  mergeAll: () => mergeAll5,
  orDie: () => orDie4,
  orElse: () => orElse6,
  parentSpan: () => parentSpan2,
  passthrough: () => passthrough3,
  project: () => project2,
  provide: () => provide3,
  provideMerge: () => provideMerge2,
  retry: () => retry3,
  scope: () => scope4,
  scoped: () => scoped3,
  scopedContext: () => scopedContext2,
  scopedDiscard: () => scopedDiscard2,
  service: () => service2,
  setClock: () => setClock,
  setConfigProvider: () => setConfigProvider2,
  setRandom: () => setRandom,
  setRequestBatching: () => setRequestBatching,
  setRequestCache: () => setRequestCache,
  setRequestCaching: () => setRequestCaching,
  setScheduler: () => setScheduler,
  setTracer: () => setTracer2,
  setTracerEnabled: () => setTracerEnabled,
  setTracerTiming: () => setTracerTiming,
  setUnhandledErrorLogLevel: () => setUnhandledErrorLogLevel,
  span: () => span3,
  succeed: () => succeed10,
  succeedContext: () => succeedContext2,
  suspend: () => suspend5,
  sync: () => sync6,
  syncContext: () => syncContext2,
  tap: () => tap5,
  tapError: () => tapError4,
  tapErrorCause: () => tapErrorCause4,
  toRuntime: () => toRuntime2,
  toRuntimeWithMemoMap: () => toRuntimeWithMemoMap2,
  unwrapEffect: () => unwrapEffect2,
  unwrapScoped: () => unwrapScoped2,
  updateService: () => updateService3,
  withParentSpan: () => withParentSpan4,
  withSpan: () => withSpan4,
  zipWith: () => zipWith7
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/layer/circular.js
var minimumLogLevel = (level) => scopedDiscard(fiberRefLocallyScoped(currentMinimumLogLevel, level));
var withMinimumLogLevel = /* @__PURE__ */ dual(2, (self, level) => fiberRefLocally(currentMinimumLogLevel, level)(self));
var addLogger = (logger) => scopedDiscard(fiberRefLocallyScopedWith(currentLoggers, add4(logger)));
var addLoggerEffect = (effect4) => unwrapEffect(map11(effect4, addLogger));
var addLoggerScoped = (effect4) => unwrapScoped(map11(effect4, addLogger));
var removeLogger = (logger) => scopedDiscard(fiberRefLocallyScopedWith(currentLoggers, remove5(logger)));
var replaceLogger = /* @__PURE__ */ dual(2, (self, that) => flatMap10(removeLogger(self), () => addLogger(that)));
var replaceLoggerEffect = /* @__PURE__ */ dual(2, (self, that) => flatMap10(removeLogger(self), () => addLoggerEffect(that)));
var replaceLoggerScoped = /* @__PURE__ */ dual(2, (self, that) => flatMap10(removeLogger(self), () => addLoggerScoped(that)));
var setConfigProvider = (configProvider) => scopedDiscard(withConfigProviderScoped(configProvider));
var parentSpan = (span4) => succeedContext(make6(spanTag, span4));
var span2 = (name, options) => {
  options = addSpanStackTrace(options);
  return scoped(spanTag, options?.onEnd ? tap2(makeSpanScoped(name, options), (span4) => addFinalizer((exit4) => options.onEnd(span4, exit4))) : makeSpanScoped(name, options));
};
var setTracer = (tracer3) => scopedDiscard(withTracerScoped(tracer3));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Layer.js
var LayerTypeId2 = LayerTypeId;
var MemoMapTypeId2 = MemoMapTypeId;
var CurrentMemoMap2 = CurrentMemoMap;
var isLayer2 = isLayer;
var isFresh2 = isFresh;
var annotateLogs4 = annotateLogs2;
var annotateSpans4 = annotateSpans2;
var build2 = build;
var buildWithScope2 = buildWithScope;
var catchAll4 = catchAll2;
var catchAllCause4 = catchAllCause2;
var context4 = context2;
var die7 = die5;
var dieSync4 = dieSync2;
var discard2 = discard;
var effect = fromEffect3;
var effectDiscard = fromEffectDiscard;
var effectContext = fromEffectContext;
var empty34 = empty33;
var extendScope2 = extendScope;
var fail10 = fail7;
var failSync4 = failSync2;
var failCause9 = failCause6;
var failCauseSync4 = failCauseSync2;
var flatMap12 = flatMap10;
var flatten11 = flatten9;
var fresh2 = fresh;
var fromFunction2 = fromFunction;
var launch2 = launch;
var map20 = map17;
var mapError4 = mapError2;
var match13 = match11;
var matchCause5 = matchCause3;
var memoize3 = memoize2;
var merge8 = merge6;
var mergeAll5 = mergeAll3;
var orDie4 = orDie2;
var orElse6 = orElse4;
var passthrough3 = passthrough;
var project2 = project;
var locallyEffect2 = locallyEffect;
var locally3 = fiberRefLocally2;
var locallyWith2 = fiberRefLocallyWith2;
var locallyScoped2 = fiberRefLocallyScoped2;
var fiberRefLocallyScopedWith3 = fiberRefLocallyScopedWith2;
var retry3 = retry;
var scope4 = scope2;
var scoped3 = scoped;
var scopedDiscard2 = scopedDiscard;
var scopedContext2 = scopedContext;
var service2 = service;
var succeed10 = succeed7;
var succeedContext2 = succeedContext;
var suspend5 = suspend3;
var sync6 = sync4;
var syncContext2 = syncContext;
var tap5 = tap3;
var tapError4 = tapError2;
var tapErrorCause4 = tapErrorCause2;
var toRuntime2 = toRuntime;
var toRuntimeWithMemoMap2 = toRuntimeWithMemoMap;
var provide3 = provide;
var provideMerge2 = provideMerge;
var zipWith7 = zipWith5;
var unwrapEffect2 = unwrapEffect;
var unwrapScoped2 = unwrapScoped;
var setClock = (clock3) => scopedDiscard2(fiberRefLocallyScopedWith(currentServices, add2(clockTag, clock3)));
var setConfigProvider2 = setConfigProvider;
var parentSpan2 = parentSpan;
var setRandom = (random4) => scopedDiscard2(fiberRefLocallyScopedWith(currentServices, add2(randomTag, random4)));
var setRequestBatching = (requestBatching) => scopedDiscard2(fiberRefLocallyScoped(currentRequestBatching, requestBatching));
var setRequestCaching = (requestCaching) => scopedDiscard2(fiberRefLocallyScoped(currentCacheEnabled, requestCaching));
var setRequestCache = (cache) => scopedDiscard2(isEffect(cache) ? flatMap8(cache, (x) => fiberRefLocallyScoped(currentCache, x)) : fiberRefLocallyScoped(currentCache, cache));
var setScheduler = (scheduler) => scopedDiscard2(fiberRefLocallyScoped(currentScheduler, scheduler));
var span3 = span2;
var setTracer2 = setTracer;
var setTracerEnabled = (enabled2) => scopedDiscard2(fiberRefLocallyScoped(currentTracerEnabled, enabled2));
var setTracerTiming = (enabled2) => scopedDiscard2(fiberRefLocallyScoped(currentTracerTimingEnabled, enabled2));
var setUnhandledErrorLogLevel = (level) => scopedDiscard2(fiberRefLocallyScoped(currentUnhandledErrorLogLevel, level));
var withSpan4 = withSpan2;
var withParentSpan4 = withParentSpan2;
var makeMemoMap2 = makeMemoMap;
var buildWithMemoMap2 = buildWithMemoMap;
var updateService3 = /* @__PURE__ */ dual(3, (layer3, tag2, f) => provide3(layer3, map20(context4(), (c) => add2(c, tag2, f(unsafeGet3(c, tag2))))));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/queue.js
var EnqueueSymbolKey = "effect/QueueEnqueue";
var EnqueueTypeId = /* @__PURE__ */ Symbol.for(EnqueueSymbolKey);
var DequeueSymbolKey = "effect/QueueDequeue";
var DequeueTypeId = /* @__PURE__ */ Symbol.for(DequeueSymbolKey);
var QueueStrategySymbolKey = "effect/QueueStrategy";
var QueueStrategyTypeId = /* @__PURE__ */ Symbol.for(QueueStrategySymbolKey);
var BackingQueueSymbolKey = "effect/BackingQueue";
var BackingQueueTypeId = /* @__PURE__ */ Symbol.for(BackingQueueSymbolKey);
var queueStrategyVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
var backingQueueVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
var enqueueVariance = {
  /* c8 ignore next */
  _In: (_) => _
};
var dequeueVariance = {
  /* c8 ignore next */
  _Out: (_) => _
};
var QueueImpl = class extends Class2 {
  queue;
  takers;
  shutdownHook;
  shutdownFlag;
  strategy;
  [EnqueueTypeId] = enqueueVariance;
  [DequeueTypeId] = dequeueVariance;
  constructor(queue, takers, shutdownHook, shutdownFlag, strategy) {
    super();
    this.queue = queue;
    this.takers = takers;
    this.shutdownHook = shutdownHook;
    this.shutdownFlag = shutdownFlag;
    this.strategy = strategy;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  commit() {
    return this.take;
  }
  capacity() {
    return this.queue.capacity();
  }
  get size() {
    return suspend(() => catchAll(this.unsafeSize(), () => interrupt2));
  }
  unsafeSize() {
    if (get7(this.shutdownFlag)) {
      return none2();
    }
    return some2(this.queue.length() - length3(this.takers) + this.strategy.surplusSize());
  }
  get isEmpty() {
    return map11(this.size, (size17) => size17 <= 0);
  }
  get isFull() {
    return map11(this.size, (size17) => size17 >= this.capacity());
  }
  get shutdown() {
    return uninterruptible(withFiberRuntime((state) => {
      pipe(this.shutdownFlag, set3(true));
      return pipe(forEachConcurrentDiscard(unsafePollAll(this.takers), (d) => deferredInterruptWith(d, state.id()), false, false), zipRight2(this.strategy.shutdown), whenEffect(deferredSucceed(this.shutdownHook, void 0)), asVoid2);
    }));
  }
  get isShutdown() {
    return sync(() => get7(this.shutdownFlag));
  }
  get awaitShutdown() {
    return deferredAwait(this.shutdownHook);
  }
  isActive() {
    return !get7(this.shutdownFlag);
  }
  unsafeOffer(value) {
    if (get7(this.shutdownFlag)) {
      return false;
    }
    let noRemaining;
    if (this.queue.length() === 0) {
      const taker = pipe(this.takers, poll2(EmptyMutableQueue));
      if (taker !== EmptyMutableQueue) {
        unsafeCompleteDeferred(taker, value);
        noRemaining = true;
      } else {
        noRemaining = false;
      }
    } else {
      noRemaining = false;
    }
    if (noRemaining) {
      return true;
    }
    const succeeded = this.queue.offer(value);
    unsafeCompleteTakers(this.strategy, this.queue, this.takers);
    return succeeded;
  }
  offer(value) {
    return suspend(() => {
      if (get7(this.shutdownFlag)) {
        return interrupt2;
      }
      let noRemaining;
      if (this.queue.length() === 0) {
        const taker = pipe(this.takers, poll2(EmptyMutableQueue));
        if (taker !== EmptyMutableQueue) {
          unsafeCompleteDeferred(taker, value);
          noRemaining = true;
        } else {
          noRemaining = false;
        }
      } else {
        noRemaining = false;
      }
      if (noRemaining) {
        return succeed(true);
      }
      const succeeded = this.queue.offer(value);
      unsafeCompleteTakers(this.strategy, this.queue, this.takers);
      return succeeded ? succeed(true) : this.strategy.handleSurplus([value], this.queue, this.takers, this.shutdownFlag);
    });
  }
  offerAll(iterable) {
    return suspend(() => {
      if (get7(this.shutdownFlag)) {
        return interrupt2;
      }
      const values4 = fromIterable2(iterable);
      const pTakers = this.queue.length() === 0 ? fromIterable2(unsafePollN(this.takers, values4.length)) : empty4;
      const [forTakers, remaining] = pipe(values4, splitAt(pTakers.length));
      for (let i = 0; i < pTakers.length; i++) {
        const taker = pTakers[i];
        const item = forTakers[i];
        unsafeCompleteDeferred(taker, item);
      }
      if (remaining.length === 0) {
        return succeed(true);
      }
      const surplus = this.queue.offerAll(remaining);
      unsafeCompleteTakers(this.strategy, this.queue, this.takers);
      return isEmpty(surplus) ? succeed(true) : this.strategy.handleSurplus(surplus, this.queue, this.takers, this.shutdownFlag);
    });
  }
  get take() {
    return withFiberRuntime((state) => {
      if (get7(this.shutdownFlag)) {
        return interrupt2;
      }
      const item = this.queue.poll(EmptyMutableQueue);
      if (item !== EmptyMutableQueue) {
        this.strategy.unsafeOnQueueEmptySpace(this.queue, this.takers);
        return succeed(item);
      } else {
        const deferred = deferredUnsafeMake(state.id());
        return pipe(suspend(() => {
          pipe(this.takers, offer(deferred));
          unsafeCompleteTakers(this.strategy, this.queue, this.takers);
          return get7(this.shutdownFlag) ? interrupt2 : deferredAwait(deferred);
        }), onInterrupt(() => {
          return sync(() => unsafeRemove(this.takers, deferred));
        }));
      }
    });
  }
  get takeAll() {
    return suspend(() => {
      return get7(this.shutdownFlag) ? interrupt2 : sync(() => {
        const values4 = this.queue.pollUpTo(Number.POSITIVE_INFINITY);
        this.strategy.unsafeOnQueueEmptySpace(this.queue, this.takers);
        return fromIterable3(values4);
      });
    });
  }
  takeUpTo(max6) {
    return suspend(() => get7(this.shutdownFlag) ? interrupt2 : sync(() => {
      const values4 = this.queue.pollUpTo(max6);
      this.strategy.unsafeOnQueueEmptySpace(this.queue, this.takers);
      return fromIterable3(values4);
    }));
  }
  takeBetween(min4, max6) {
    return suspend(() => takeRemainderLoop(this, min4, max6, empty7()));
  }
};
var takeRemainderLoop = (self, min4, max6, acc) => {
  if (max6 < min4) {
    return succeed(acc);
  }
  return pipe(takeUpTo(self, max6), flatMap8((bs) => {
    const remaining = min4 - bs.length;
    if (remaining === 1) {
      return pipe(take3(self), map11((b) => pipe(acc, appendAll2(bs), append2(b))));
    }
    if (remaining > 1) {
      return pipe(take3(self), flatMap8((b) => takeRemainderLoop(self, remaining - 1, max6 - bs.length - 1, pipe(acc, appendAll2(bs), append2(b)))));
    }
    return succeed(pipe(acc, appendAll2(bs)));
  }));
};
var bounded2 = (requestedCapacity) => pipe(sync(() => bounded(requestedCapacity)), flatMap8((queue) => make42(backingQueueFromMutableQueue(queue), backPressureStrategy())));
var dropping = (requestedCapacity) => pipe(sync(() => bounded(requestedCapacity)), flatMap8((queue) => make42(backingQueueFromMutableQueue(queue), droppingStrategy())));
var sliding = (requestedCapacity) => pipe(sync(() => bounded(requestedCapacity)), flatMap8((queue) => make42(backingQueueFromMutableQueue(queue), slidingStrategy())));
var unbounded2 = () => pipe(sync(() => unbounded()), flatMap8((queue) => make42(backingQueueFromMutableQueue(queue), droppingStrategy())));
var unsafeMake8 = (queue, takers, shutdownHook, shutdownFlag, strategy) => {
  return new QueueImpl(queue, takers, shutdownHook, shutdownFlag, strategy);
};
var make42 = (queue, strategy) => pipe(deferredMake(), map11((deferred) => unsafeMake8(queue, unbounded(), deferred, make12(false), strategy)));
var BackingQueueFromMutableQueue = class {
  mutable;
  [BackingQueueTypeId] = backingQueueVariance;
  constructor(mutable2) {
    this.mutable = mutable2;
  }
  poll(def) {
    return poll2(this.mutable, def);
  }
  pollUpTo(limit) {
    return pollUpTo(this.mutable, limit);
  }
  offerAll(elements) {
    return offerAll(this.mutable, elements);
  }
  offer(element) {
    return offer(this.mutable, element);
  }
  capacity() {
    return capacity(this.mutable);
  }
  length() {
    return length3(this.mutable);
  }
};
var backingQueueFromMutableQueue = (mutable2) => new BackingQueueFromMutableQueue(mutable2);
var capacity2 = (self) => self.capacity();
var size12 = (self) => self.size;
var isFull = (self) => self.isFull;
var isEmpty10 = (self) => self.isEmpty;
var isShutdown = (self) => self.isShutdown;
var awaitShutdown = (self) => self.awaitShutdown;
var shutdown = (self) => self.shutdown;
var offer2 = /* @__PURE__ */ dual(2, (self, value) => self.offer(value));
var offerAll2 = /* @__PURE__ */ dual(2, (self, iterable) => self.offerAll(iterable));
var poll5 = (self) => map11(self.takeUpTo(1), head2);
var take3 = (self) => self.take;
var takeAll = (self) => self.takeAll;
var takeUpTo = /* @__PURE__ */ dual(2, (self, max6) => self.takeUpTo(max6));
var takeBetween = /* @__PURE__ */ dual(3, (self, min4, max6) => self.takeBetween(min4, max6));
var takeN = /* @__PURE__ */ dual(2, (self, n) => self.takeBetween(n, n));
var backPressureStrategy = () => new BackPressureStrategy();
var droppingStrategy = () => new DroppingStrategy();
var slidingStrategy = () => new SlidingStrategy();
var BackPressureStrategy = class {
  [QueueStrategyTypeId] = queueStrategyVariance;
  putters = /* @__PURE__ */ unbounded();
  surplusSize() {
    return length3(this.putters);
  }
  onCompleteTakersWithEmptyQueue(takers) {
    while (!isEmpty7(this.putters) && !isEmpty7(takers)) {
      const taker = poll2(takers, void 0);
      const putter = poll2(this.putters, void 0);
      if (putter[2]) {
        unsafeCompleteDeferred(putter[1], true);
      }
      unsafeCompleteDeferred(taker, putter[0]);
    }
  }
  get shutdown() {
    return pipe(fiberId, flatMap8((fiberId3) => pipe(sync(() => unsafePollAll(this.putters)), flatMap8((putters) => forEachConcurrentDiscard(putters, ([_, deferred, isLastItem]) => isLastItem ? pipe(deferredInterruptWith(deferred, fiberId3), asVoid2) : void_2, false, false)))));
  }
  handleSurplus(iterable, queue, takers, isShutdown7) {
    return withFiberRuntime((state) => {
      const deferred = deferredUnsafeMake(state.id());
      return pipe(suspend(() => {
        this.unsafeOffer(iterable, deferred);
        this.unsafeOnQueueEmptySpace(queue, takers);
        unsafeCompleteTakers(this, queue, takers);
        return get7(isShutdown7) ? interrupt2 : deferredAwait(deferred);
      }), onInterrupt(() => sync(() => this.unsafeRemove(deferred))));
    });
  }
  unsafeOnQueueEmptySpace(queue, takers) {
    let keepPolling = true;
    while (keepPolling && (queue.capacity() === Number.POSITIVE_INFINITY || queue.length() < queue.capacity())) {
      const putter = pipe(this.putters, poll2(EmptyMutableQueue));
      if (putter === EmptyMutableQueue) {
        keepPolling = false;
      } else {
        const offered = queue.offer(putter[0]);
        if (offered && putter[2]) {
          unsafeCompleteDeferred(putter[1], true);
        } else if (!offered) {
          unsafeOfferAll(this.putters, pipe(unsafePollAll(this.putters), prepend2(putter)));
        }
        unsafeCompleteTakers(this, queue, takers);
      }
    }
  }
  unsafeOffer(iterable, deferred) {
    const stuff = fromIterable2(iterable);
    for (let i = 0; i < stuff.length; i++) {
      const value = stuff[i];
      if (i === stuff.length - 1) {
        pipe(this.putters, offer([value, deferred, true]));
      } else {
        pipe(this.putters, offer([value, deferred, false]));
      }
    }
  }
  unsafeRemove(deferred) {
    unsafeOfferAll(this.putters, pipe(unsafePollAll(this.putters), filter4(([, _]) => _ !== deferred)));
  }
};
var DroppingStrategy = class {
  [QueueStrategyTypeId] = queueStrategyVariance;
  surplusSize() {
    return 0;
  }
  get shutdown() {
    return void_2;
  }
  onCompleteTakersWithEmptyQueue() {
  }
  handleSurplus(_iterable, _queue, _takers, _isShutdown) {
    return succeed(false);
  }
  unsafeOnQueueEmptySpace(_queue, _takers) {
  }
};
var SlidingStrategy = class {
  [QueueStrategyTypeId] = queueStrategyVariance;
  surplusSize() {
    return 0;
  }
  get shutdown() {
    return void_2;
  }
  onCompleteTakersWithEmptyQueue() {
  }
  handleSurplus(iterable, queue, takers, _isShutdown) {
    return sync(() => {
      this.unsafeOffer(queue, iterable);
      unsafeCompleteTakers(this, queue, takers);
      return true;
    });
  }
  unsafeOnQueueEmptySpace(_queue, _takers) {
  }
  unsafeOffer(queue, iterable) {
    const iterator = iterable[Symbol.iterator]();
    let next;
    let offering = true;
    while (!(next = iterator.next()).done && offering) {
      if (queue.capacity() === 0) {
        return;
      }
      queue.poll(EmptyMutableQueue);
      offering = queue.offer(next.value);
    }
  }
};
var unsafeCompleteDeferred = (deferred, a) => {
  return deferredUnsafeDone(deferred, succeed(a));
};
var unsafeOfferAll = (queue, as11) => {
  return pipe(queue, offerAll(as11));
};
var unsafePollAll = (queue) => {
  return pipe(queue, pollUpTo(Number.POSITIVE_INFINITY));
};
var unsafePollN = (queue, max6) => {
  return pipe(queue, pollUpTo(max6));
};
var unsafeRemove = (queue, a) => {
  unsafeOfferAll(queue, pipe(unsafePollAll(queue), filter4((b) => a !== b)));
};
var unsafeCompleteTakers = (strategy, queue, takers) => {
  let keepPolling = true;
  while (keepPolling && queue.length() !== 0) {
    const taker = pipe(takers, poll2(EmptyMutableQueue));
    if (taker !== EmptyMutableQueue) {
      const element = queue.poll(EmptyMutableQueue);
      if (element !== EmptyMutableQueue) {
        unsafeCompleteDeferred(taker, element);
        strategy.unsafeOnQueueEmptySpace(queue, takers);
      } else {
        unsafeOfferAll(takers, pipe(unsafePollAll(takers), prepend2(taker)));
      }
      keepPolling = true;
    } else {
      keepPolling = false;
    }
  }
  if (keepPolling && queue.length() === 0 && !isEmpty7(takers)) {
    strategy.onCompleteTakersWithEmptyQueue(takers);
  }
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/pubsub.js
var AbsentValue = /* @__PURE__ */ Symbol.for("effect/PubSub/AbsentValue");
var addSubscribers = (subscription, pollers) => (subscribers) => {
  if (!subscribers.has(subscription)) {
    subscribers.set(subscription, /* @__PURE__ */ new Set());
  }
  const set10 = subscribers.get(subscription);
  set10.add(pollers);
};
var removeSubscribers = (subscription, pollers) => (subscribers) => {
  if (!subscribers.has(subscription)) {
    return;
  }
  const set10 = subscribers.get(subscription);
  set10.delete(pollers);
  if (set10.size === 0) {
    subscribers.delete(subscription);
  }
};
var bounded3 = (capacity7) => suspend(() => {
  const pubsub = makeBoundedPubSub(capacity7);
  return makePubSub(pubsub, new BackPressureStrategy2());
});
var dropping2 = (capacity7) => suspend(() => {
  const pubsub = makeBoundedPubSub(capacity7);
  return makePubSub(pubsub, new DroppingStrategy2());
});
var sliding2 = (capacity7) => suspend(() => {
  const pubsub = makeBoundedPubSub(capacity7);
  return makePubSub(pubsub, new SlidingStrategy2());
});
var unbounded3 = (options) => suspend(() => {
  const pubsub = makeUnboundedPubSub(options);
  return makePubSub(pubsub, new DroppingStrategy2());
});
var shutdown2 = (self) => self.shutdown;
var publish = /* @__PURE__ */ dual(2, (self, value) => self.publish(value));
var subscribe = (self) => self.subscribe;
var makeBoundedPubSub = (capacity7) => {
  const options = typeof capacity7 === "number" ? {
    capacity: capacity7
  } : capacity7;
  ensureCapacity(options.capacity);
  const replayBuffer = options.replay && options.replay > 0 ? new ReplayBuffer(Math.ceil(options.replay)) : void 0;
  if (options.capacity === 1) {
    return new BoundedPubSubSingle(replayBuffer);
  } else if (nextPow2(options.capacity) === options.capacity) {
    return new BoundedPubSubPow2(options.capacity, replayBuffer);
  } else {
    return new BoundedPubSubArb(options.capacity, replayBuffer);
  }
};
var makeUnboundedPubSub = (options) => new UnboundedPubSub(options?.replay ? new ReplayBuffer(options.replay) : void 0);
var makeSubscription = (pubsub, subscribers, strategy) => map11(deferredMake(), (deferred) => unsafeMakeSubscription(pubsub, subscribers, pubsub.subscribe(), unbounded(), deferred, make12(false), strategy));
var unsafeMakeSubscription = (pubsub, subscribers, subscription, pollers, shutdownHook, shutdownFlag, strategy) => new SubscriptionImpl(pubsub, subscribers, subscription, pollers, shutdownHook, shutdownFlag, strategy, pubsub.replayWindow());
var BoundedPubSubArb = class {
  capacity;
  replayBuffer;
  array;
  publisherIndex = 0;
  subscribers;
  subscriberCount = 0;
  subscribersIndex = 0;
  constructor(capacity7, replayBuffer) {
    this.capacity = capacity7;
    this.replayBuffer = replayBuffer;
    this.array = Array.from({
      length: capacity7
    });
    this.subscribers = Array.from({
      length: capacity7
    });
  }
  replayWindow() {
    return this.replayBuffer ? new ReplayWindowImpl(this.replayBuffer) : emptyReplayWindow;
  }
  isEmpty() {
    return this.publisherIndex === this.subscribersIndex;
  }
  isFull() {
    return this.publisherIndex === this.subscribersIndex + this.capacity;
  }
  size() {
    return this.publisherIndex - this.subscribersIndex;
  }
  publish(value) {
    if (this.isFull()) {
      return false;
    }
    if (this.subscriberCount !== 0) {
      const index = this.publisherIndex % this.capacity;
      this.array[index] = value;
      this.subscribers[index] = this.subscriberCount;
      this.publisherIndex += 1;
    }
    if (this.replayBuffer) {
      this.replayBuffer.offer(value);
    }
    return true;
  }
  publishAll(elements) {
    if (this.subscriberCount === 0) {
      if (this.replayBuffer) {
        this.replayBuffer.offerAll(elements);
      }
      return empty7();
    }
    const chunk3 = fromIterable3(elements);
    const n = chunk3.length;
    const size17 = this.publisherIndex - this.subscribersIndex;
    const available = this.capacity - size17;
    const forPubSub = Math.min(n, available);
    if (forPubSub === 0) {
      return chunk3;
    }
    let iteratorIndex = 0;
    const publishAllIndex = this.publisherIndex + forPubSub;
    while (this.publisherIndex !== publishAllIndex) {
      const a = unsafeGet4(chunk3, iteratorIndex++);
      const index = this.publisherIndex % this.capacity;
      this.array[index] = a;
      this.subscribers[index] = this.subscriberCount;
      this.publisherIndex += 1;
      if (this.replayBuffer) {
        this.replayBuffer.offer(a);
      }
    }
    return drop2(chunk3, iteratorIndex);
  }
  slide() {
    if (this.subscribersIndex !== this.publisherIndex) {
      const index = this.subscribersIndex % this.capacity;
      this.array[index] = AbsentValue;
      this.subscribers[index] = 0;
      this.subscribersIndex += 1;
    }
    if (this.replayBuffer) {
      this.replayBuffer.slide();
    }
  }
  subscribe() {
    this.subscriberCount += 1;
    return new BoundedPubSubArbSubscription(this, this.publisherIndex, false);
  }
};
var BoundedPubSubArbSubscription = class {
  self;
  subscriberIndex;
  unsubscribed;
  constructor(self, subscriberIndex, unsubscribed) {
    this.self = self;
    this.subscriberIndex = subscriberIndex;
    this.unsubscribed = unsubscribed;
  }
  isEmpty() {
    return this.unsubscribed || this.self.publisherIndex === this.subscriberIndex || this.self.publisherIndex === this.self.subscribersIndex;
  }
  size() {
    if (this.unsubscribed) {
      return 0;
    }
    return this.self.publisherIndex - Math.max(this.subscriberIndex, this.self.subscribersIndex);
  }
  poll(default_) {
    if (this.unsubscribed) {
      return default_;
    }
    this.subscriberIndex = Math.max(this.subscriberIndex, this.self.subscribersIndex);
    if (this.subscriberIndex !== this.self.publisherIndex) {
      const index = this.subscriberIndex % this.self.capacity;
      const elem = this.self.array[index];
      this.self.subscribers[index] -= 1;
      if (this.self.subscribers[index] === 0) {
        this.self.array[index] = AbsentValue;
        this.self.subscribersIndex += 1;
      }
      this.subscriberIndex += 1;
      return elem;
    }
    return default_;
  }
  pollUpTo(n) {
    if (this.unsubscribed) {
      return empty7();
    }
    this.subscriberIndex = Math.max(this.subscriberIndex, this.self.subscribersIndex);
    const size17 = this.self.publisherIndex - this.subscriberIndex;
    const toPoll = Math.min(n, size17);
    if (toPoll <= 0) {
      return empty7();
    }
    const builder = [];
    const pollUpToIndex = this.subscriberIndex + toPoll;
    while (this.subscriberIndex !== pollUpToIndex) {
      const index = this.subscriberIndex % this.self.capacity;
      const a = this.self.array[index];
      this.self.subscribers[index] -= 1;
      if (this.self.subscribers[index] === 0) {
        this.self.array[index] = AbsentValue;
        this.self.subscribersIndex += 1;
      }
      builder.push(a);
      this.subscriberIndex += 1;
    }
    return fromIterable3(builder);
  }
  unsubscribe() {
    if (!this.unsubscribed) {
      this.unsubscribed = true;
      this.self.subscriberCount -= 1;
      this.subscriberIndex = Math.max(this.subscriberIndex, this.self.subscribersIndex);
      while (this.subscriberIndex !== this.self.publisherIndex) {
        const index = this.subscriberIndex % this.self.capacity;
        this.self.subscribers[index] -= 1;
        if (this.self.subscribers[index] === 0) {
          this.self.array[index] = AbsentValue;
          this.self.subscribersIndex += 1;
        }
        this.subscriberIndex += 1;
      }
    }
  }
};
var BoundedPubSubPow2 = class {
  capacity;
  replayBuffer;
  array;
  mask;
  publisherIndex = 0;
  subscribers;
  subscriberCount = 0;
  subscribersIndex = 0;
  constructor(capacity7, replayBuffer) {
    this.capacity = capacity7;
    this.replayBuffer = replayBuffer;
    this.array = Array.from({
      length: capacity7
    });
    this.mask = capacity7 - 1;
    this.subscribers = Array.from({
      length: capacity7
    });
  }
  replayWindow() {
    return this.replayBuffer ? new ReplayWindowImpl(this.replayBuffer) : emptyReplayWindow;
  }
  isEmpty() {
    return this.publisherIndex === this.subscribersIndex;
  }
  isFull() {
    return this.publisherIndex === this.subscribersIndex + this.capacity;
  }
  size() {
    return this.publisherIndex - this.subscribersIndex;
  }
  publish(value) {
    if (this.isFull()) {
      return false;
    }
    if (this.subscriberCount !== 0) {
      const index = this.publisherIndex & this.mask;
      this.array[index] = value;
      this.subscribers[index] = this.subscriberCount;
      this.publisherIndex += 1;
    }
    if (this.replayBuffer) {
      this.replayBuffer.offer(value);
    }
    return true;
  }
  publishAll(elements) {
    if (this.subscriberCount === 0) {
      if (this.replayBuffer) {
        this.replayBuffer.offerAll(elements);
      }
      return empty7();
    }
    const chunk3 = fromIterable3(elements);
    const n = chunk3.length;
    const size17 = this.publisherIndex - this.subscribersIndex;
    const available = this.capacity - size17;
    const forPubSub = Math.min(n, available);
    if (forPubSub === 0) {
      return chunk3;
    }
    let iteratorIndex = 0;
    const publishAllIndex = this.publisherIndex + forPubSub;
    while (this.publisherIndex !== publishAllIndex) {
      const elem = unsafeGet4(chunk3, iteratorIndex++);
      const index = this.publisherIndex & this.mask;
      this.array[index] = elem;
      this.subscribers[index] = this.subscriberCount;
      this.publisherIndex += 1;
      if (this.replayBuffer) {
        this.replayBuffer.offer(elem);
      }
    }
    return drop2(chunk3, iteratorIndex);
  }
  slide() {
    if (this.subscribersIndex !== this.publisherIndex) {
      const index = this.subscribersIndex & this.mask;
      this.array[index] = AbsentValue;
      this.subscribers[index] = 0;
      this.subscribersIndex += 1;
    }
    if (this.replayBuffer) {
      this.replayBuffer.slide();
    }
  }
  subscribe() {
    this.subscriberCount += 1;
    return new BoundedPubSubPow2Subscription(this, this.publisherIndex, false);
  }
};
var BoundedPubSubPow2Subscription = class {
  self;
  subscriberIndex;
  unsubscribed;
  constructor(self, subscriberIndex, unsubscribed) {
    this.self = self;
    this.subscriberIndex = subscriberIndex;
    this.unsubscribed = unsubscribed;
  }
  isEmpty() {
    return this.unsubscribed || this.self.publisherIndex === this.subscriberIndex || this.self.publisherIndex === this.self.subscribersIndex;
  }
  size() {
    if (this.unsubscribed) {
      return 0;
    }
    return this.self.publisherIndex - Math.max(this.subscriberIndex, this.self.subscribersIndex);
  }
  poll(default_) {
    if (this.unsubscribed) {
      return default_;
    }
    this.subscriberIndex = Math.max(this.subscriberIndex, this.self.subscribersIndex);
    if (this.subscriberIndex !== this.self.publisherIndex) {
      const index = this.subscriberIndex & this.self.mask;
      const elem = this.self.array[index];
      this.self.subscribers[index] -= 1;
      if (this.self.subscribers[index] === 0) {
        this.self.array[index] = AbsentValue;
        this.self.subscribersIndex += 1;
      }
      this.subscriberIndex += 1;
      return elem;
    }
    return default_;
  }
  pollUpTo(n) {
    if (this.unsubscribed) {
      return empty7();
    }
    this.subscriberIndex = Math.max(this.subscriberIndex, this.self.subscribersIndex);
    const size17 = this.self.publisherIndex - this.subscriberIndex;
    const toPoll = Math.min(n, size17);
    if (toPoll <= 0) {
      return empty7();
    }
    const builder = [];
    const pollUpToIndex = this.subscriberIndex + toPoll;
    while (this.subscriberIndex !== pollUpToIndex) {
      const index = this.subscriberIndex & this.self.mask;
      const elem = this.self.array[index];
      this.self.subscribers[index] -= 1;
      if (this.self.subscribers[index] === 0) {
        this.self.array[index] = AbsentValue;
        this.self.subscribersIndex += 1;
      }
      builder.push(elem);
      this.subscriberIndex += 1;
    }
    return fromIterable3(builder);
  }
  unsubscribe() {
    if (!this.unsubscribed) {
      this.unsubscribed = true;
      this.self.subscriberCount -= 1;
      this.subscriberIndex = Math.max(this.subscriberIndex, this.self.subscribersIndex);
      while (this.subscriberIndex !== this.self.publisherIndex) {
        const index = this.subscriberIndex & this.self.mask;
        this.self.subscribers[index] -= 1;
        if (this.self.subscribers[index] === 0) {
          this.self.array[index] = AbsentValue;
          this.self.subscribersIndex += 1;
        }
        this.subscriberIndex += 1;
      }
    }
  }
};
var BoundedPubSubSingle = class {
  replayBuffer;
  publisherIndex = 0;
  subscriberCount = 0;
  subscribers = 0;
  value = AbsentValue;
  capacity = 1;
  constructor(replayBuffer) {
    this.replayBuffer = replayBuffer;
  }
  replayWindow() {
    return this.replayBuffer ? new ReplayWindowImpl(this.replayBuffer) : emptyReplayWindow;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  isEmpty() {
    return this.subscribers === 0;
  }
  isFull() {
    return !this.isEmpty();
  }
  size() {
    return this.isEmpty() ? 0 : 1;
  }
  publish(value) {
    if (this.isFull()) {
      return false;
    }
    if (this.subscriberCount !== 0) {
      this.value = value;
      this.subscribers = this.subscriberCount;
      this.publisherIndex += 1;
    }
    if (this.replayBuffer) {
      this.replayBuffer.offer(value);
    }
    return true;
  }
  publishAll(elements) {
    if (this.subscriberCount === 0) {
      if (this.replayBuffer) {
        this.replayBuffer.offerAll(elements);
      }
      return empty7();
    }
    const chunk3 = fromIterable3(elements);
    if (isEmpty(chunk3)) {
      return chunk3;
    }
    if (this.publish(unsafeHead(chunk3))) {
      return drop2(chunk3, 1);
    } else {
      return chunk3;
    }
  }
  slide() {
    if (this.isFull()) {
      this.subscribers = 0;
      this.value = AbsentValue;
    }
    if (this.replayBuffer) {
      this.replayBuffer.slide();
    }
  }
  subscribe() {
    this.subscriberCount += 1;
    return new BoundedPubSubSingleSubscription(this, this.publisherIndex, false);
  }
};
var BoundedPubSubSingleSubscription = class {
  self;
  subscriberIndex;
  unsubscribed;
  constructor(self, subscriberIndex, unsubscribed) {
    this.self = self;
    this.subscriberIndex = subscriberIndex;
    this.unsubscribed = unsubscribed;
  }
  isEmpty() {
    return this.unsubscribed || this.self.subscribers === 0 || this.subscriberIndex === this.self.publisherIndex;
  }
  size() {
    return this.isEmpty() ? 0 : 1;
  }
  poll(default_) {
    if (this.isEmpty()) {
      return default_;
    }
    const elem = this.self.value;
    this.self.subscribers -= 1;
    if (this.self.subscribers === 0) {
      this.self.value = AbsentValue;
    }
    this.subscriberIndex += 1;
    return elem;
  }
  pollUpTo(n) {
    if (this.isEmpty() || n < 1) {
      return empty7();
    }
    const a = this.self.value;
    this.self.subscribers -= 1;
    if (this.self.subscribers === 0) {
      this.self.value = AbsentValue;
    }
    this.subscriberIndex += 1;
    return of2(a);
  }
  unsubscribe() {
    if (!this.unsubscribed) {
      this.unsubscribed = true;
      this.self.subscriberCount -= 1;
      if (this.subscriberIndex !== this.self.publisherIndex) {
        this.self.subscribers -= 1;
        if (this.self.subscribers === 0) {
          this.self.value = AbsentValue;
        }
      }
    }
  }
};
var UnboundedPubSub = class {
  replayBuffer;
  publisherHead = {
    value: AbsentValue,
    subscribers: 0,
    next: null
  };
  publisherTail = this.publisherHead;
  publisherIndex = 0;
  subscribersIndex = 0;
  capacity = Number.MAX_SAFE_INTEGER;
  constructor(replayBuffer) {
    this.replayBuffer = replayBuffer;
  }
  replayWindow() {
    return this.replayBuffer ? new ReplayWindowImpl(this.replayBuffer) : emptyReplayWindow;
  }
  isEmpty() {
    return this.publisherHead === this.publisherTail;
  }
  isFull() {
    return false;
  }
  size() {
    return this.publisherIndex - this.subscribersIndex;
  }
  publish(value) {
    const subscribers = this.publisherTail.subscribers;
    if (subscribers !== 0) {
      this.publisherTail.next = {
        value,
        subscribers,
        next: null
      };
      this.publisherTail = this.publisherTail.next;
      this.publisherIndex += 1;
    }
    if (this.replayBuffer) {
      this.replayBuffer.offer(value);
    }
    return true;
  }
  publishAll(elements) {
    if (this.publisherTail.subscribers !== 0) {
      for (const a of elements) {
        this.publish(a);
      }
    } else if (this.replayBuffer) {
      this.replayBuffer.offerAll(elements);
    }
    return empty7();
  }
  slide() {
    if (this.publisherHead !== this.publisherTail) {
      this.publisherHead = this.publisherHead.next;
      this.publisherHead.value = AbsentValue;
      this.subscribersIndex += 1;
    }
    if (this.replayBuffer) {
      this.replayBuffer.slide();
    }
  }
  subscribe() {
    this.publisherTail.subscribers += 1;
    return new UnboundedPubSubSubscription(this, this.publisherTail, this.publisherIndex, false);
  }
};
var UnboundedPubSubSubscription = class {
  self;
  subscriberHead;
  subscriberIndex;
  unsubscribed;
  constructor(self, subscriberHead, subscriberIndex, unsubscribed) {
    this.self = self;
    this.subscriberHead = subscriberHead;
    this.subscriberIndex = subscriberIndex;
    this.unsubscribed = unsubscribed;
  }
  isEmpty() {
    if (this.unsubscribed) {
      return true;
    }
    let empty37 = true;
    let loop3 = true;
    while (loop3) {
      if (this.subscriberHead === this.self.publisherTail) {
        loop3 = false;
      } else {
        if (this.subscriberHead.next.value !== AbsentValue) {
          empty37 = false;
          loop3 = false;
        } else {
          this.subscriberHead = this.subscriberHead.next;
          this.subscriberIndex += 1;
        }
      }
    }
    return empty37;
  }
  size() {
    if (this.unsubscribed) {
      return 0;
    }
    return this.self.publisherIndex - Math.max(this.subscriberIndex, this.self.subscribersIndex);
  }
  poll(default_) {
    if (this.unsubscribed) {
      return default_;
    }
    let loop3 = true;
    let polled = default_;
    while (loop3) {
      if (this.subscriberHead === this.self.publisherTail) {
        loop3 = false;
      } else {
        const elem = this.subscriberHead.next.value;
        if (elem !== AbsentValue) {
          polled = elem;
          this.subscriberHead.subscribers -= 1;
          if (this.subscriberHead.subscribers === 0) {
            this.self.publisherHead = this.self.publisherHead.next;
            this.self.publisherHead.value = AbsentValue;
            this.self.subscribersIndex += 1;
          }
          loop3 = false;
        }
        this.subscriberHead = this.subscriberHead.next;
        this.subscriberIndex += 1;
      }
    }
    return polled;
  }
  pollUpTo(n) {
    const builder = [];
    const default_ = AbsentValue;
    let i = 0;
    while (i !== n) {
      const a = this.poll(default_);
      if (a === default_) {
        i = n;
      } else {
        builder.push(a);
        i += 1;
      }
    }
    return fromIterable3(builder);
  }
  unsubscribe() {
    if (!this.unsubscribed) {
      this.unsubscribed = true;
      this.self.publisherTail.subscribers -= 1;
      while (this.subscriberHead !== this.self.publisherTail) {
        if (this.subscriberHead.next.value !== AbsentValue) {
          this.subscriberHead.subscribers -= 1;
          if (this.subscriberHead.subscribers === 0) {
            this.self.publisherHead = this.self.publisherHead.next;
            this.self.publisherHead.value = AbsentValue;
            this.self.subscribersIndex += 1;
          }
        }
        this.subscriberHead = this.subscriberHead.next;
      }
    }
  }
};
var SubscriptionImpl = class extends Class2 {
  pubsub;
  subscribers;
  subscription;
  pollers;
  shutdownHook;
  shutdownFlag;
  strategy;
  replayWindow;
  [DequeueTypeId] = dequeueVariance;
  constructor(pubsub, subscribers, subscription, pollers, shutdownHook, shutdownFlag, strategy, replayWindow) {
    super();
    this.pubsub = pubsub;
    this.subscribers = subscribers;
    this.subscription = subscription;
    this.pollers = pollers;
    this.shutdownHook = shutdownHook;
    this.shutdownFlag = shutdownFlag;
    this.strategy = strategy;
    this.replayWindow = replayWindow;
  }
  commit() {
    return this.take;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  capacity() {
    return this.pubsub.capacity;
  }
  isActive() {
    return !get7(this.shutdownFlag);
  }
  get size() {
    return suspend(() => get7(this.shutdownFlag) ? interrupt2 : succeed(this.subscription.size() + this.replayWindow.remaining));
  }
  unsafeSize() {
    if (get7(this.shutdownFlag)) {
      return none2();
    }
    return some2(this.subscription.size() + this.replayWindow.remaining);
  }
  get isFull() {
    return suspend(() => get7(this.shutdownFlag) ? interrupt2 : succeed(this.subscription.size() === this.capacity()));
  }
  get isEmpty() {
    return map11(this.size, (size17) => size17 === 0);
  }
  get shutdown() {
    return uninterruptible(withFiberRuntime((state) => {
      set3(this.shutdownFlag, true);
      return pipe(forEachParUnbounded(unsafePollAllQueue(this.pollers), (d) => deferredInterruptWith(d, state.id()), false), zipRight2(sync(() => {
        this.subscribers.delete(this.subscription);
        this.subscription.unsubscribe();
        this.strategy.unsafeOnPubSubEmptySpace(this.pubsub, this.subscribers);
      })), whenEffect(deferredSucceed(this.shutdownHook, void 0)), asVoid2);
    }));
  }
  get isShutdown() {
    return sync(() => get7(this.shutdownFlag));
  }
  get awaitShutdown() {
    return deferredAwait(this.shutdownHook);
  }
  get take() {
    return withFiberRuntime((state) => {
      if (get7(this.shutdownFlag)) {
        return interrupt2;
      }
      if (this.replayWindow.remaining > 0) {
        const message2 = this.replayWindow.take();
        return succeed(message2);
      }
      const message = isEmpty7(this.pollers) ? this.subscription.poll(EmptyMutableQueue) : EmptyMutableQueue;
      if (message === EmptyMutableQueue) {
        const deferred = deferredUnsafeMake(state.id());
        return pipe(suspend(() => {
          pipe(this.pollers, offer(deferred));
          pipe(this.subscribers, addSubscribers(this.subscription, this.pollers));
          this.strategy.unsafeCompletePollers(this.pubsub, this.subscribers, this.subscription, this.pollers);
          return get7(this.shutdownFlag) ? interrupt2 : deferredAwait(deferred);
        }), onInterrupt(() => sync(() => unsafeRemove2(this.pollers, deferred))));
      } else {
        this.strategy.unsafeOnPubSubEmptySpace(this.pubsub, this.subscribers);
        return succeed(message);
      }
    });
  }
  get takeAll() {
    return suspend(() => {
      if (get7(this.shutdownFlag)) {
        return interrupt2;
      }
      const as11 = isEmpty7(this.pollers) ? unsafePollAllSubscription(this.subscription) : empty7();
      this.strategy.unsafeOnPubSubEmptySpace(this.pubsub, this.subscribers);
      if (this.replayWindow.remaining > 0) {
        return succeed(appendAll2(this.replayWindow.takeAll(), as11));
      }
      return succeed(as11);
    });
  }
  takeUpTo(max6) {
    return suspend(() => {
      if (get7(this.shutdownFlag)) {
        return interrupt2;
      }
      let replay = void 0;
      if (this.replayWindow.remaining >= max6) {
        const as12 = this.replayWindow.takeN(max6);
        return succeed(as12);
      } else if (this.replayWindow.remaining > 0) {
        replay = this.replayWindow.takeAll();
        max6 = max6 - replay.length;
      }
      const as11 = isEmpty7(this.pollers) ? unsafePollN2(this.subscription, max6) : empty7();
      this.strategy.unsafeOnPubSubEmptySpace(this.pubsub, this.subscribers);
      return replay ? succeed(appendAll2(replay, as11)) : succeed(as11);
    });
  }
  takeBetween(min4, max6) {
    return suspend(() => takeRemainderLoop2(this, min4, max6, empty7()));
  }
};
var takeRemainderLoop2 = (self, min4, max6, acc) => {
  if (max6 < min4) {
    return succeed(acc);
  }
  return pipe(self.takeUpTo(max6), flatMap8((bs) => {
    const remaining = min4 - bs.length;
    if (remaining === 1) {
      return pipe(self.take, map11((b) => pipe(acc, appendAll2(bs), append2(b))));
    }
    if (remaining > 1) {
      return pipe(self.take, flatMap8((b) => takeRemainderLoop2(self, remaining - 1, max6 - bs.length - 1, pipe(acc, appendAll2(bs), append2(b)))));
    }
    return succeed(pipe(acc, appendAll2(bs)));
  }));
};
var PubSubImpl = class {
  pubsub;
  subscribers;
  scope;
  shutdownHook;
  shutdownFlag;
  strategy;
  [EnqueueTypeId] = enqueueVariance;
  [DequeueTypeId] = dequeueVariance;
  constructor(pubsub, subscribers, scope5, shutdownHook, shutdownFlag, strategy) {
    this.pubsub = pubsub;
    this.subscribers = subscribers;
    this.scope = scope5;
    this.shutdownHook = shutdownHook;
    this.shutdownFlag = shutdownFlag;
    this.strategy = strategy;
  }
  capacity() {
    return this.pubsub.capacity;
  }
  get size() {
    return suspend(() => get7(this.shutdownFlag) ? interrupt2 : sync(() => this.pubsub.size()));
  }
  unsafeSize() {
    if (get7(this.shutdownFlag)) {
      return none2();
    }
    return some2(this.pubsub.size());
  }
  get isFull() {
    return map11(this.size, (size17) => size17 === this.capacity());
  }
  get isEmpty() {
    return map11(this.size, (size17) => size17 === 0);
  }
  get awaitShutdown() {
    return deferredAwait(this.shutdownHook);
  }
  get isShutdown() {
    return sync(() => get7(this.shutdownFlag));
  }
  get shutdown() {
    return uninterruptible(withFiberRuntime((state) => {
      pipe(this.shutdownFlag, set3(true));
      return pipe(this.scope.close(exitInterrupt(state.id())), zipRight2(this.strategy.shutdown), whenEffect(deferredSucceed(this.shutdownHook, void 0)), asVoid2);
    }));
  }
  publish(value) {
    return suspend(() => {
      if (get7(this.shutdownFlag)) {
        return interrupt2;
      }
      if (this.pubsub.publish(value)) {
        this.strategy.unsafeCompleteSubscribers(this.pubsub, this.subscribers);
        return succeed(true);
      }
      return this.strategy.handleSurplus(this.pubsub, this.subscribers, of2(value), this.shutdownFlag);
    });
  }
  isActive() {
    return !get7(this.shutdownFlag);
  }
  unsafeOffer(value) {
    if (get7(this.shutdownFlag)) {
      return false;
    }
    if (this.pubsub.publish(value)) {
      this.strategy.unsafeCompleteSubscribers(this.pubsub, this.subscribers);
      return true;
    }
    return false;
  }
  publishAll(elements) {
    return suspend(() => {
      if (get7(this.shutdownFlag)) {
        return interrupt2;
      }
      const surplus = unsafePublishAll(this.pubsub, elements);
      this.strategy.unsafeCompleteSubscribers(this.pubsub, this.subscribers);
      if (isEmpty(surplus)) {
        return succeed(true);
      }
      return this.strategy.handleSurplus(this.pubsub, this.subscribers, surplus, this.shutdownFlag);
    });
  }
  get subscribe() {
    const acquire = tap2(all3([this.scope.fork(sequential2), makeSubscription(this.pubsub, this.subscribers, this.strategy)]), (tuple) => tuple[0].addFinalizer(() => tuple[1].shutdown));
    return map11(acquireRelease(acquire, (tuple, exit4) => tuple[0].close(exit4)), (tuple) => tuple[1]);
  }
  offer(value) {
    return this.publish(value);
  }
  offerAll(elements) {
    return this.publishAll(elements);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var makePubSub = (pubsub, strategy) => flatMap8(scopeMake(), (scope5) => map11(deferredMake(), (deferred) => unsafeMakePubSub(pubsub, /* @__PURE__ */ new Map(), scope5, deferred, make12(false), strategy)));
var unsafeMakePubSub = (pubsub, subscribers, scope5, shutdownHook, shutdownFlag, strategy) => new PubSubImpl(pubsub, subscribers, scope5, shutdownHook, shutdownFlag, strategy);
var ensureCapacity = (capacity7) => {
  if (capacity7 <= 0) {
    throw new InvalidPubSubCapacityException(`Cannot construct PubSub with capacity of ${capacity7}`);
  }
};
var unsafeCompleteDeferred2 = (deferred, a) => {
  deferredUnsafeDone(deferred, succeed(a));
};
var unsafeOfferAll2 = (queue, as11) => {
  return pipe(queue, offerAll(as11));
};
var unsafePollAllQueue = (queue) => {
  return pipe(queue, pollUpTo(Number.POSITIVE_INFINITY));
};
var unsafePollAllSubscription = (subscription) => {
  return subscription.pollUpTo(Number.POSITIVE_INFINITY);
};
var unsafePollN2 = (subscription, max6) => {
  return subscription.pollUpTo(max6);
};
var unsafePublishAll = (pubsub, as11) => {
  return pubsub.publishAll(as11);
};
var unsafeRemove2 = (queue, value) => {
  unsafeOfferAll2(queue, pipe(unsafePollAllQueue(queue), filter4((elem) => elem !== value)));
};
var BackPressureStrategy2 = class {
  publishers = /* @__PURE__ */ unbounded();
  get shutdown() {
    return flatMap8(fiberId, (fiberId3) => flatMap8(sync(() => unsafePollAllQueue(this.publishers)), (publishers) => forEachConcurrentDiscard(publishers, ([_, deferred, last5]) => last5 ? pipe(deferredInterruptWith(deferred, fiberId3), asVoid2) : void_2, false, false)));
  }
  handleSurplus(pubsub, subscribers, elements, isShutdown7) {
    return withFiberRuntime((state) => {
      const deferred = deferredUnsafeMake(state.id());
      return pipe(suspend(() => {
        this.unsafeOffer(elements, deferred);
        this.unsafeOnPubSubEmptySpace(pubsub, subscribers);
        this.unsafeCompleteSubscribers(pubsub, subscribers);
        return get7(isShutdown7) ? interrupt2 : deferredAwait(deferred);
      }), onInterrupt(() => sync(() => this.unsafeRemove(deferred))));
    });
  }
  unsafeOnPubSubEmptySpace(pubsub, subscribers) {
    let keepPolling = true;
    while (keepPolling && !pubsub.isFull()) {
      const publisher = pipe(this.publishers, poll2(EmptyMutableQueue));
      if (publisher === EmptyMutableQueue) {
        keepPolling = false;
      } else {
        const published = pubsub.publish(publisher[0]);
        if (published && publisher[2]) {
          unsafeCompleteDeferred2(publisher[1], true);
        } else if (!published) {
          unsafeOfferAll2(this.publishers, pipe(unsafePollAllQueue(this.publishers), prepend2(publisher)));
        }
        this.unsafeCompleteSubscribers(pubsub, subscribers);
      }
    }
  }
  unsafeCompletePollers(pubsub, subscribers, subscription, pollers) {
    return unsafeStrategyCompletePollers(this, pubsub, subscribers, subscription, pollers);
  }
  unsafeCompleteSubscribers(pubsub, subscribers) {
    return unsafeStrategyCompleteSubscribers(this, pubsub, subscribers);
  }
  unsafeOffer(elements, deferred) {
    const iterator = elements[Symbol.iterator]();
    let next = iterator.next();
    if (!next.done) {
      while (1) {
        const value = next.value;
        next = iterator.next();
        if (next.done) {
          pipe(this.publishers, offer([value, deferred, true]));
          break;
        }
        pipe(this.publishers, offer([value, deferred, false]));
      }
    }
  }
  unsafeRemove(deferred) {
    unsafeOfferAll2(this.publishers, pipe(unsafePollAllQueue(this.publishers), filter4(([_, a]) => a !== deferred)));
  }
};
var DroppingStrategy2 = class {
  get shutdown() {
    return void_2;
  }
  handleSurplus(_pubsub, _subscribers, _elements, _isShutdown) {
    return succeed(false);
  }
  unsafeOnPubSubEmptySpace(_pubsub, _subscribers) {
  }
  unsafeCompletePollers(pubsub, subscribers, subscription, pollers) {
    return unsafeStrategyCompletePollers(this, pubsub, subscribers, subscription, pollers);
  }
  unsafeCompleteSubscribers(pubsub, subscribers) {
    return unsafeStrategyCompleteSubscribers(this, pubsub, subscribers);
  }
};
var SlidingStrategy2 = class {
  get shutdown() {
    return void_2;
  }
  handleSurplus(pubsub, subscribers, elements, _isShutdown) {
    return sync(() => {
      this.unsafeSlidingPublish(pubsub, elements);
      this.unsafeCompleteSubscribers(pubsub, subscribers);
      return true;
    });
  }
  unsafeOnPubSubEmptySpace(_pubsub, _subscribers) {
  }
  unsafeCompletePollers(pubsub, subscribers, subscription, pollers) {
    return unsafeStrategyCompletePollers(this, pubsub, subscribers, subscription, pollers);
  }
  unsafeCompleteSubscribers(pubsub, subscribers) {
    return unsafeStrategyCompleteSubscribers(this, pubsub, subscribers);
  }
  unsafeSlidingPublish(pubsub, elements) {
    const it = elements[Symbol.iterator]();
    let next = it.next();
    if (!next.done && pubsub.capacity > 0) {
      let a = next.value;
      let loop3 = true;
      while (loop3) {
        pubsub.slide();
        const pub = pubsub.publish(a);
        if (pub && (next = it.next()) && !next.done) {
          a = next.value;
        } else if (pub) {
          loop3 = false;
        }
      }
    }
  }
};
var unsafeStrategyCompletePollers = (strategy, pubsub, subscribers, subscription, pollers) => {
  let keepPolling = true;
  while (keepPolling && !subscription.isEmpty()) {
    const poller = pipe(pollers, poll2(EmptyMutableQueue));
    if (poller === EmptyMutableQueue) {
      pipe(subscribers, removeSubscribers(subscription, pollers));
      if (isEmpty7(pollers)) {
        keepPolling = false;
      } else {
        pipe(subscribers, addSubscribers(subscription, pollers));
      }
    } else {
      const pollResult = subscription.poll(EmptyMutableQueue);
      if (pollResult === EmptyMutableQueue) {
        unsafeOfferAll2(pollers, pipe(unsafePollAllQueue(pollers), prepend2(poller)));
      } else {
        unsafeCompleteDeferred2(poller, pollResult);
        strategy.unsafeOnPubSubEmptySpace(pubsub, subscribers);
      }
    }
  }
};
var unsafeStrategyCompleteSubscribers = (strategy, pubsub, subscribers) => {
  for (const [subscription, pollersSet] of subscribers) {
    for (const pollers of pollersSet) {
      strategy.unsafeCompletePollers(pubsub, subscribers, subscription, pollers);
    }
  }
};
var ReplayBuffer = class {
  capacity;
  constructor(capacity7) {
    this.capacity = capacity7;
  }
  head = {
    value: AbsentValue,
    next: null
  };
  tail = this.head;
  size = 0;
  index = 0;
  slide() {
    this.index++;
  }
  offer(a) {
    this.tail.value = a;
    this.tail.next = {
      value: AbsentValue,
      next: null
    };
    this.tail = this.tail.next;
    if (this.size === this.capacity) {
      this.head = this.head.next;
    } else {
      this.size += 1;
    }
  }
  offerAll(as11) {
    for (const a of as11) {
      this.offer(a);
    }
  }
};
var ReplayWindowImpl = class {
  buffer;
  head;
  index;
  remaining;
  constructor(buffer3) {
    this.buffer = buffer3;
    this.index = buffer3.index;
    this.remaining = buffer3.size;
    this.head = buffer3.head;
  }
  fastForward() {
    while (this.index < this.buffer.index) {
      this.head = this.head.next;
      this.index++;
    }
  }
  take() {
    if (this.remaining === 0) {
      return void 0;
    } else if (this.index < this.buffer.index) {
      this.fastForward();
    }
    this.remaining--;
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }
  takeN(n) {
    if (this.remaining === 0) {
      return empty7();
    } else if (this.index < this.buffer.index) {
      this.fastForward();
    }
    const len = Math.min(n, this.remaining);
    const items = new Array(len);
    for (let i = 0; i < len; i++) {
      const value = this.head.value;
      this.head = this.head.next;
      items[i] = value;
    }
    this.remaining -= len;
    return unsafeFromArray(items);
  }
  takeAll() {
    return this.takeN(this.remaining);
  }
};
var emptyReplayWindow = {
  remaining: 0,
  take: () => void 0,
  takeN: () => empty7(),
  takeAll: () => empty7()
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/PubSub.js
var bounded4 = bounded3;
var dropping3 = dropping2;
var sliding3 = sliding2;
var unbounded4 = unbounded3;
var shutdown3 = shutdown2;
var publish2 = publish;
var subscribe2 = subscribe;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Queue.js
var DequeueTypeId2 = DequeueTypeId;
var bounded5 = bounded2;
var dropping4 = dropping;
var sliding4 = sliding;
var unbounded5 = unbounded2;
var capacity4 = capacity2;
var size14 = size12;
var isEmpty12 = isEmpty10;
var isFull3 = isFull;
var isShutdown3 = isShutdown;
var awaitShutdown3 = awaitShutdown;
var shutdown4 = shutdown;
var offer3 = offer2;
var offerAll3 = offerAll2;
var poll6 = poll5;
var take4 = take3;
var takeAll2 = takeAll;
var takeUpTo2 = takeUpTo;
var takeBetween2 = takeBetween;
var takeN2 = takeN;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/opCodes/channelChildExecutorDecision.js
var OP_CONTINUE2 = "Continue";
var OP_CLOSE = "Close";
var OP_YIELD2 = "Yield";

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/channel/childExecutorDecision.js
var ChildExecutorDecisionSymbolKey = "effect/ChannelChildExecutorDecision";
var ChildExecutorDecisionTypeId = /* @__PURE__ */ Symbol.for(ChildExecutorDecisionSymbolKey);
var proto4 = {
  [ChildExecutorDecisionTypeId]: ChildExecutorDecisionTypeId
};
var Continue = (_) => {
  const op = Object.create(proto4);
  op._tag = OP_CONTINUE2;
  return op;
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/opCodes/continuation.js
var OP_CONTINUATION_K = "ContinuationK";
var OP_CONTINUATION_FINALIZER = "ContinuationFinalizer";

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/channel/continuation.js
var ContinuationTypeId = /* @__PURE__ */ Symbol.for("effect/ChannelContinuation");
var continuationVariance = {
  /* c8 ignore next */
  _Env: (_) => _,
  /* c8 ignore next */
  _InErr: (_) => _,
  /* c8 ignore next */
  _InElem: (_) => _,
  /* c8 ignore next */
  _InDone: (_) => _,
  /* c8 ignore next */
  _OutErr: (_) => _,
  /* c8 ignore next */
  _OutDone: (_) => _,
  /* c8 ignore next */
  _OutErr2: (_) => _,
  /* c8 ignore next */
  _OutElem: (_) => _,
  /* c8 ignore next */
  _OutDone2: (_) => _
};
var ContinuationKImpl = class {
  onSuccess;
  onHalt;
  _tag = OP_CONTINUATION_K;
  [ContinuationTypeId] = continuationVariance;
  constructor(onSuccess, onHalt) {
    this.onSuccess = onSuccess;
    this.onHalt = onHalt;
  }
  onExit(exit4) {
    return isFailure(exit4) ? this.onHalt(exit4.cause) : this.onSuccess(exit4.value);
  }
};
var ContinuationFinalizerImpl = class {
  finalizer;
  _tag = OP_CONTINUATION_FINALIZER;
  [ContinuationTypeId] = continuationVariance;
  constructor(finalizer3) {
    this.finalizer = finalizer3;
  }
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/opCodes/channelUpstreamPullStrategy.js
var OP_PULL_AFTER_NEXT = "PullAfterNext";
var OP_PULL_AFTER_ALL_ENQUEUED = "PullAfterAllEnqueued";

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/channel/upstreamPullStrategy.js
var UpstreamPullStrategySymbolKey = "effect/ChannelUpstreamPullStrategy";
var UpstreamPullStrategyTypeId = /* @__PURE__ */ Symbol.for(UpstreamPullStrategySymbolKey);
var upstreamPullStrategyVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
var proto5 = {
  [UpstreamPullStrategyTypeId]: upstreamPullStrategyVariance
};
var PullAfterNext = (emitSeparator) => {
  const op = Object.create(proto5);
  op._tag = OP_PULL_AFTER_NEXT;
  op.emitSeparator = emitSeparator;
  return op;
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/opCodes/channel.js
var OP_BRACKET_OUT = "BracketOut";
var OP_BRIDGE = "Bridge";
var OP_CONCAT_ALL = "ConcatAll";
var OP_EMIT = "Emit";
var OP_ENSURING = "Ensuring";
var OP_FAIL3 = "Fail";
var OP_FOLD2 = "Fold";
var OP_FROM_EFFECT2 = "FromEffect";
var OP_PIPE_TO = "PipeTo";
var OP_PROVIDE2 = "Provide";
var OP_READ = "Read";
var OP_SUCCEED = "Succeed";
var OP_SUCCEED_NOW = "SucceedNow";
var OP_SUSPEND2 = "Suspend";

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/core-stream.js
var ChannelSymbolKey = "effect/Channel";
var ChannelTypeId2 = /* @__PURE__ */ Symbol.for(ChannelSymbolKey);
var channelVariance2 = {
  /* c8 ignore next */
  _Env: (_) => _,
  /* c8 ignore next */
  _InErr: (_) => _,
  /* c8 ignore next */
  _InElem: (_) => _,
  /* c8 ignore next */
  _InDone: (_) => _,
  /* c8 ignore next */
  _OutErr: (_) => _,
  /* c8 ignore next */
  _OutElem: (_) => _,
  /* c8 ignore next */
  _OutDone: (_) => _
};
var proto6 = {
  [ChannelTypeId2]: channelVariance2,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var isChannel = (u) => hasProperty(u, ChannelTypeId2) || isEffect2(u);
var acquireReleaseOut = /* @__PURE__ */ dual(2, (self, release) => {
  const op = Object.create(proto6);
  op._tag = OP_BRACKET_OUT;
  op.acquire = () => self;
  op.finalizer = release;
  return op;
});
var catchAllCause5 = /* @__PURE__ */ dual(2, (self, f) => {
  const op = Object.create(proto6);
  op._tag = OP_FOLD2;
  op.channel = self;
  op.k = new ContinuationKImpl(succeed11, f);
  return op;
});
var collectElements = (self) => {
  return suspend6(() => {
    const builder = [];
    return flatMap13(pipeTo(self, collectElementsReader(builder)), (value) => sync7(() => [fromIterable3(builder), value]));
  });
};
var collectElementsReader = (builder) => readWith({
  onInput: (outElem) => flatMap13(sync7(() => {
    builder.push(outElem);
  }), () => collectElementsReader(builder)),
  onFailure: fail11,
  onDone: succeedNow
});
var concatAllWith = (channels, f, g) => {
  const op = Object.create(proto6);
  op._tag = OP_CONCAT_ALL;
  op.combineInners = f;
  op.combineAll = g;
  op.onPull = () => PullAfterNext(none2());
  op.onEmit = () => Continue;
  op.value = () => channels;
  op.k = identity;
  return op;
};
var concatMapWith = /* @__PURE__ */ dual(4, (self, f, g, h) => {
  const op = Object.create(proto6);
  op._tag = OP_CONCAT_ALL;
  op.combineInners = g;
  op.combineAll = h;
  op.onPull = () => PullAfterNext(none2());
  op.onEmit = () => Continue;
  op.value = () => self;
  op.k = f;
  return op;
});
var embedInput = /* @__PURE__ */ dual(2, (self, input) => {
  const op = Object.create(proto6);
  op._tag = OP_BRIDGE;
  op.input = input;
  op.channel = self;
  return op;
});
var ensuringWith = /* @__PURE__ */ dual(2, (self, finalizer3) => {
  const op = Object.create(proto6);
  op._tag = OP_ENSURING;
  op.channel = self;
  op.finalizer = finalizer3;
  return op;
});
var fail11 = (error) => failCause10(fail5(error));
var failCause10 = (cause3) => failCauseSync5(() => cause3);
var failCauseSync5 = (evaluate3) => {
  const op = Object.create(proto6);
  op._tag = OP_FAIL3;
  op.error = evaluate3;
  return op;
};
var flatMap13 = /* @__PURE__ */ dual(2, (self, f) => {
  const op = Object.create(proto6);
  op._tag = OP_FOLD2;
  op.channel = self;
  op.k = new ContinuationKImpl(f, failCause10);
  return op;
});
var foldCauseChannel = /* @__PURE__ */ dual(2, (self, options) => {
  const op = Object.create(proto6);
  op._tag = OP_FOLD2;
  op.channel = self;
  op.k = new ContinuationKImpl(options.onSuccess, options.onFailure);
  return op;
});
var fromEffect4 = (effect4) => {
  const op = Object.create(proto6);
  op._tag = OP_FROM_EFFECT2;
  op.effect = () => effect4;
  return op;
};
var pipeTo = /* @__PURE__ */ dual(2, (self, that) => {
  const op = Object.create(proto6);
  op._tag = OP_PIPE_TO;
  op.left = () => self;
  op.right = () => that;
  return op;
});
var provideContext3 = /* @__PURE__ */ dual(2, (self, env) => {
  const op = Object.create(proto6);
  op._tag = OP_PROVIDE2;
  op.context = () => env;
  op.inner = self;
  return op;
});
var readWith = (options) => readWithCause({
  onInput: options.onInput,
  onFailure: (cause3) => match(failureOrCause2(cause3), {
    onLeft: options.onFailure,
    onRight: failCause10
  }),
  onDone: options.onDone
});
var readWithCause = (options) => {
  const op = Object.create(proto6);
  op._tag = OP_READ;
  op.more = options.onInput;
  op.done = new ContinuationKImpl(options.onDone, options.onFailure);
  return op;
};
var succeed11 = (value) => sync7(() => value);
var succeedNow = (result) => {
  const op = Object.create(proto6);
  op._tag = OP_SUCCEED_NOW;
  op.terminal = result;
  return op;
};
var suspend6 = (evaluate3) => {
  const op = Object.create(proto6);
  op._tag = OP_SUSPEND2;
  op.channel = evaluate3;
  return op;
};
var sync7 = (evaluate3) => {
  const op = Object.create(proto6);
  op._tag = OP_SUCCEED;
  op.evaluate = evaluate3;
  return op;
};
var void_6 = /* @__PURE__ */ succeedNow(void 0);
var write = (out) => {
  const op = Object.create(proto6);
  op._tag = OP_EMIT;
  op.out = out;
  return op;
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/opCodes/channelState.js
var OP_DONE3 = "Done";
var OP_EMIT2 = "Emit";
var OP_FROM_EFFECT3 = "FromEffect";
var OP_READ2 = "Read";

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/channel/channelState.js
var ChannelStateTypeId = /* @__PURE__ */ Symbol.for("effect/ChannelState");
var channelStateVariance = {
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _R: (_) => _
};
var proto7 = {
  [ChannelStateTypeId]: channelStateVariance
};
var Done2 = () => {
  const op = Object.create(proto7);
  op._tag = OP_DONE3;
  return op;
};
var Emit = () => {
  const op = Object.create(proto7);
  op._tag = OP_EMIT2;
  return op;
};
var fromEffect5 = (effect4) => {
  const op = Object.create(proto7);
  op._tag = OP_FROM_EFFECT3;
  op.effect = effect4;
  return op;
};
var Read = (upstream, onEffect, onEmit, onDone3) => {
  const op = Object.create(proto7);
  op._tag = OP_READ2;
  op.upstream = upstream;
  op.onEffect = onEffect;
  op.onEmit = onEmit;
  op.onDone = onDone3;
  return op;
};
var isFromEffect = (self) => self._tag === OP_FROM_EFFECT3;
var effect2 = (self) => isFromEffect(self) ? self.effect : _void;
var effectOrUndefinedIgnored = (self) => isFromEffect(self) ? ignore2(self.effect) : void 0;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/channel/subexecutor.js
var OP_PULL_FROM_CHILD = "PullFromChild";
var OP_PULL_FROM_UPSTREAM = "PullFromUpstream";
var OP_DRAIN_CHILD_EXECUTORS = "DrainChildExecutors";
var OP_EMIT3 = "Emit";
var PullFromChild = class {
  childExecutor;
  parentSubexecutor;
  onEmit;
  _tag = OP_PULL_FROM_CHILD;
  constructor(childExecutor, parentSubexecutor, onEmit) {
    this.childExecutor = childExecutor;
    this.parentSubexecutor = parentSubexecutor;
    this.onEmit = onEmit;
  }
  close(exit4) {
    const fin1 = this.childExecutor.close(exit4);
    const fin2 = this.parentSubexecutor.close(exit4);
    if (fin1 !== void 0 && fin2 !== void 0) {
      return zipWith6(exit3(fin1), exit3(fin2), (exit1, exit22) => pipe(exit1, zipRight3(exit22)));
    } else if (fin1 !== void 0) {
      return fin1;
    } else if (fin2 !== void 0) {
      return fin2;
    } else {
      return void 0;
    }
  }
  enqueuePullFromChild(_child) {
    return this;
  }
};
var PullFromUpstream = class _PullFromUpstream {
  upstreamExecutor;
  createChild;
  lastDone;
  activeChildExecutors;
  combineChildResults;
  combineWithChildResult;
  onPull;
  onEmit;
  _tag = OP_PULL_FROM_UPSTREAM;
  constructor(upstreamExecutor, createChild, lastDone, activeChildExecutors, combineChildResults, combineWithChildResult, onPull, onEmit) {
    this.upstreamExecutor = upstreamExecutor;
    this.createChild = createChild;
    this.lastDone = lastDone;
    this.activeChildExecutors = activeChildExecutors;
    this.combineChildResults = combineChildResults;
    this.combineWithChildResult = combineWithChildResult;
    this.onPull = onPull;
    this.onEmit = onEmit;
  }
  close(exit4) {
    const fin1 = this.upstreamExecutor.close(exit4);
    const fins = [...this.activeChildExecutors.map((child) => child !== void 0 ? child.childExecutor.close(exit4) : void 0), fin1];
    const result = fins.reduce((acc, next) => {
      if (acc !== void 0 && next !== void 0) {
        return zipWith6(acc, exit3(next), (exit1, exit22) => zipRight3(exit1, exit22));
      } else if (acc !== void 0) {
        return acc;
      } else if (next !== void 0) {
        return exit3(next);
      } else {
        return void 0;
      }
    }, void 0);
    return result === void 0 ? result : result;
  }
  enqueuePullFromChild(child) {
    return new _PullFromUpstream(this.upstreamExecutor, this.createChild, this.lastDone, [...this.activeChildExecutors, child], this.combineChildResults, this.combineWithChildResult, this.onPull, this.onEmit);
  }
};
var DrainChildExecutors = class _DrainChildExecutors {
  upstreamExecutor;
  lastDone;
  activeChildExecutors;
  upstreamDone;
  combineChildResults;
  combineWithChildResult;
  onPull;
  _tag = OP_DRAIN_CHILD_EXECUTORS;
  constructor(upstreamExecutor, lastDone, activeChildExecutors, upstreamDone, combineChildResults, combineWithChildResult, onPull) {
    this.upstreamExecutor = upstreamExecutor;
    this.lastDone = lastDone;
    this.activeChildExecutors = activeChildExecutors;
    this.upstreamDone = upstreamDone;
    this.combineChildResults = combineChildResults;
    this.combineWithChildResult = combineWithChildResult;
    this.onPull = onPull;
  }
  close(exit4) {
    const fin1 = this.upstreamExecutor.close(exit4);
    const fins = [...this.activeChildExecutors.map((child) => child !== void 0 ? child.childExecutor.close(exit4) : void 0), fin1];
    const result = fins.reduce((acc, next) => {
      if (acc !== void 0 && next !== void 0) {
        return zipWith6(acc, exit3(next), (exit1, exit22) => zipRight3(exit1, exit22));
      } else if (acc !== void 0) {
        return acc;
      } else if (next !== void 0) {
        return exit3(next);
      } else {
        return void 0;
      }
    }, void 0);
    return result === void 0 ? result : result;
  }
  enqueuePullFromChild(child) {
    return new _DrainChildExecutors(this.upstreamExecutor, this.lastDone, [...this.activeChildExecutors, child], this.upstreamDone, this.combineChildResults, this.combineWithChildResult, this.onPull);
  }
};
var Emit2 = class {
  value;
  next;
  _tag = OP_EMIT3;
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
  close(exit4) {
    const result = this.next.close(exit4);
    return result === void 0 ? result : result;
  }
  enqueuePullFromChild(_child) {
    return this;
  }
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/opCodes/channelUpstreamPullRequest.js
var OP_PULLED = "Pulled";
var OP_NO_UPSTREAM = "NoUpstream";

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/channel/upstreamPullRequest.js
var UpstreamPullRequestSymbolKey = "effect/ChannelUpstreamPullRequest";
var UpstreamPullRequestTypeId = /* @__PURE__ */ Symbol.for(UpstreamPullRequestSymbolKey);
var upstreamPullRequestVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
var proto8 = {
  [UpstreamPullRequestTypeId]: upstreamPullRequestVariance
};
var Pulled = (value) => {
  const op = Object.create(proto8);
  op._tag = OP_PULLED;
  op.value = value;
  return op;
};
var NoUpstream = (activeDownstreamCount) => {
  const op = Object.create(proto8);
  op._tag = OP_NO_UPSTREAM;
  op.activeDownstreamCount = activeDownstreamCount;
  return op;
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/channel/channelExecutor.js
var ChannelExecutor = class _ChannelExecutor {
  _activeSubexecutor = void 0;
  _cancelled = void 0;
  _closeLastSubstream = void 0;
  _currentChannel;
  _done = void 0;
  _doneStack = [];
  _emitted = void 0;
  _executeCloseLastSubstream;
  _input = void 0;
  _inProgressFinalizer = void 0;
  _providedEnv;
  constructor(initialChannel, providedEnv, executeCloseLastSubstream) {
    this._currentChannel = initialChannel;
    this._executeCloseLastSubstream = executeCloseLastSubstream;
    this._providedEnv = providedEnv;
  }
  run() {
    let result = void 0;
    while (result === void 0) {
      if (this._cancelled !== void 0) {
        result = this.processCancellation();
      } else if (this._activeSubexecutor !== void 0) {
        result = this.runSubexecutor();
      } else {
        try {
          if (this._currentChannel === void 0) {
            result = Done2();
          } else {
            if (isEffect2(this._currentChannel)) {
              this._currentChannel = fromEffect4(this._currentChannel);
            }
            switch (this._currentChannel._tag) {
              case OP_BRACKET_OUT: {
                result = this.runBracketOut(this._currentChannel);
                break;
              }
              case OP_BRIDGE: {
                const bridgeInput = this._currentChannel.input;
                this._currentChannel = this._currentChannel.channel;
                if (this._input !== void 0) {
                  const inputExecutor = this._input;
                  this._input = void 0;
                  const drainer = () => flatMap11(bridgeInput.awaitRead(), () => suspend4(() => {
                    const state = inputExecutor.run();
                    switch (state._tag) {
                      case OP_DONE3: {
                        return match6(inputExecutor.getDone(), {
                          onFailure: (cause3) => bridgeInput.error(cause3),
                          onSuccess: (value) => bridgeInput.done(value)
                        });
                      }
                      case OP_EMIT2: {
                        return flatMap11(bridgeInput.emit(inputExecutor.getEmit()), () => drainer());
                      }
                      case OP_FROM_EFFECT3: {
                        return matchCauseEffect3(state.effect, {
                          onFailure: (cause3) => bridgeInput.error(cause3),
                          onSuccess: () => drainer()
                        });
                      }
                      case OP_READ2: {
                        return readUpstream(state, () => drainer(), (cause3) => bridgeInput.error(cause3));
                      }
                    }
                  }));
                  result = fromEffect5(flatMap11(forkDaemon2(interruptible4(drainer())), (fiber) => sync5(() => this.addFinalizer((exit4) => flatMap11(interrupt6(fiber), () => suspend4(() => {
                    const effect4 = this.restorePipe(exit4, inputExecutor);
                    return effect4 !== void 0 ? effect4 : _void;
                  }))))));
                }
                break;
              }
              case OP_CONCAT_ALL: {
                const executor = new _ChannelExecutor(this._currentChannel.value(), this._providedEnv, (effect4) => sync5(() => {
                  const prevLastClose = this._closeLastSubstream === void 0 ? _void : this._closeLastSubstream;
                  this._closeLastSubstream = pipe(prevLastClose, zipRight5(effect4));
                }));
                executor._input = this._input;
                const channel = this._currentChannel;
                this._activeSubexecutor = new PullFromUpstream(executor, (value) => channel.k(value), void 0, [], (x, y) => channel.combineInners(x, y), (x, y) => channel.combineAll(x, y), (request2) => channel.onPull(request2), (value) => channel.onEmit(value));
                this._closeLastSubstream = void 0;
                this._currentChannel = void 0;
                break;
              }
              case OP_EMIT: {
                this._emitted = this._currentChannel.out;
                this._currentChannel = this._activeSubexecutor !== void 0 ? void 0 : void_6;
                result = Emit();
                break;
              }
              case OP_ENSURING: {
                this.runEnsuring(this._currentChannel);
                break;
              }
              case OP_FAIL3: {
                result = this.doneHalt(this._currentChannel.error());
                break;
              }
              case OP_FOLD2: {
                this._doneStack.push(this._currentChannel.k);
                this._currentChannel = this._currentChannel.channel;
                break;
              }
              case OP_FROM_EFFECT2: {
                const effect4 = this._providedEnv === void 0 ? this._currentChannel.effect() : pipe(this._currentChannel.effect(), provide2(this._providedEnv));
                result = fromEffect5(matchCauseEffect3(effect4, {
                  onFailure: (cause3) => {
                    const state = this.doneHalt(cause3);
                    return state !== void 0 && isFromEffect(state) ? state.effect : _void;
                  },
                  onSuccess: (value) => {
                    const state = this.doneSucceed(value);
                    return state !== void 0 && isFromEffect(state) ? state.effect : _void;
                  }
                }));
                break;
              }
              case OP_PIPE_TO: {
                const previousInput = this._input;
                const leftExec = new _ChannelExecutor(this._currentChannel.left(), this._providedEnv, (effect4) => this._executeCloseLastSubstream(effect4));
                leftExec._input = previousInput;
                this._input = leftExec;
                this.addFinalizer((exit4) => {
                  const effect4 = this.restorePipe(exit4, previousInput);
                  return effect4 !== void 0 ? effect4 : _void;
                });
                this._currentChannel = this._currentChannel.right();
                break;
              }
              case OP_PROVIDE2: {
                const previousEnv = this._providedEnv;
                this._providedEnv = this._currentChannel.context();
                this._currentChannel = this._currentChannel.inner;
                this.addFinalizer(() => sync5(() => {
                  this._providedEnv = previousEnv;
                }));
                break;
              }
              case OP_READ: {
                const read = this._currentChannel;
                result = Read(this._input, identity, (emitted) => {
                  try {
                    this._currentChannel = read.more(emitted);
                  } catch (error) {
                    this._currentChannel = read.done.onExit(die3(error));
                  }
                  return void 0;
                }, (exit4) => {
                  const onExit4 = (exit5) => {
                    return read.done.onExit(exit5);
                  };
                  this._currentChannel = onExit4(exit4);
                  return void 0;
                });
                break;
              }
              case OP_SUCCEED: {
                result = this.doneSucceed(this._currentChannel.evaluate());
                break;
              }
              case OP_SUCCEED_NOW: {
                result = this.doneSucceed(this._currentChannel.terminal);
                break;
              }
              case OP_SUSPEND2: {
                this._currentChannel = this._currentChannel.channel();
                break;
              }
            }
          }
        } catch (error) {
          this._currentChannel = failCause10(die4(error));
        }
      }
    }
    return result;
  }
  getDone() {
    return this._done;
  }
  getEmit() {
    return this._emitted;
  }
  cancelWith(exit4) {
    this._cancelled = exit4;
  }
  clearInProgressFinalizer() {
    this._inProgressFinalizer = void 0;
  }
  storeInProgressFinalizer(finalizer3) {
    this._inProgressFinalizer = finalizer3;
  }
  popAllFinalizers(exit4) {
    const finalizers = [];
    let next = this._doneStack.pop();
    while (next) {
      if (next._tag === "ContinuationFinalizer") {
        finalizers.push(next.finalizer);
      }
      next = this._doneStack.pop();
    }
    const effect4 = finalizers.length === 0 ? _void : runFinalizers(finalizers, exit4);
    this.storeInProgressFinalizer(effect4);
    return effect4;
  }
  popNextFinalizers() {
    const builder = [];
    while (this._doneStack.length !== 0) {
      const cont = this._doneStack[this._doneStack.length - 1];
      if (cont._tag === OP_CONTINUATION_K) {
        return builder;
      }
      builder.push(cont);
      this._doneStack.pop();
    }
    return builder;
  }
  restorePipe(exit4, prev) {
    const currInput = this._input;
    this._input = prev;
    if (currInput !== void 0) {
      const effect4 = currInput.close(exit4);
      return effect4;
    }
    return _void;
  }
  close(exit4) {
    let runInProgressFinalizers = void 0;
    const finalizer3 = this._inProgressFinalizer;
    if (finalizer3 !== void 0) {
      runInProgressFinalizers = pipe(finalizer3, ensuring2(sync5(() => this.clearInProgressFinalizer())));
    }
    let closeSelf = void 0;
    const selfFinalizers = this.popAllFinalizers(exit4);
    if (selfFinalizers !== void 0) {
      closeSelf = pipe(selfFinalizers, ensuring2(sync5(() => this.clearInProgressFinalizer())));
    }
    const closeSubexecutors = this._activeSubexecutor === void 0 ? void 0 : this._activeSubexecutor.close(exit4);
    if (closeSubexecutors === void 0 && runInProgressFinalizers === void 0 && closeSelf === void 0) {
      return void 0;
    }
    return pipe(
      exit3(ifNotNull(closeSubexecutors)),
      zip6(exit3(ifNotNull(runInProgressFinalizers))),
      zip6(exit3(ifNotNull(closeSelf))),
      map19(([[exit1, exit22], exit32]) => pipe(exit1, zipRight3(exit22), zipRight3(exit32))),
      uninterruptible2,
      // TODO: remove
      flatMap11((exit5) => suspend4(() => exit5))
    );
  }
  doneSucceed(value) {
    if (this._doneStack.length === 0) {
      this._done = succeed3(value);
      this._currentChannel = void 0;
      return Done2();
    }
    const head6 = this._doneStack[this._doneStack.length - 1];
    if (head6._tag === OP_CONTINUATION_K) {
      this._doneStack.pop();
      this._currentChannel = head6.onSuccess(value);
      return void 0;
    }
    const finalizers = this.popNextFinalizers();
    if (this._doneStack.length === 0) {
      this._doneStack = finalizers.reverse();
      this._done = succeed3(value);
      this._currentChannel = void 0;
      return Done2();
    }
    const finalizerEffect = runFinalizers(finalizers.map((f) => f.finalizer), succeed3(value));
    this.storeInProgressFinalizer(finalizerEffect);
    const effect4 = pipe(finalizerEffect, ensuring2(sync5(() => this.clearInProgressFinalizer())), uninterruptible2, flatMap11(() => sync5(() => this.doneSucceed(value))));
    return fromEffect5(effect4);
  }
  doneHalt(cause3) {
    if (this._doneStack.length === 0) {
      this._done = failCause3(cause3);
      this._currentChannel = void 0;
      return Done2();
    }
    const head6 = this._doneStack[this._doneStack.length - 1];
    if (head6._tag === OP_CONTINUATION_K) {
      this._doneStack.pop();
      try {
        this._currentChannel = head6.onHalt(cause3);
      } catch (error) {
        this._currentChannel = failCause10(die4(error));
      }
      return void 0;
    }
    const finalizers = this.popNextFinalizers();
    if (this._doneStack.length === 0) {
      this._doneStack = finalizers.reverse();
      this._done = failCause3(cause3);
      this._currentChannel = void 0;
      return Done2();
    }
    const finalizerEffect = runFinalizers(finalizers.map((f) => f.finalizer), failCause3(cause3));
    this.storeInProgressFinalizer(finalizerEffect);
    const effect4 = pipe(finalizerEffect, ensuring2(sync5(() => this.clearInProgressFinalizer())), uninterruptible2, flatMap11(() => sync5(() => this.doneHalt(cause3))));
    return fromEffect5(effect4);
  }
  processCancellation() {
    this._currentChannel = void 0;
    this._done = this._cancelled;
    this._cancelled = void 0;
    return Done2();
  }
  runBracketOut(bracketOut) {
    const effect4 = uninterruptible2(matchCauseEffect3(this.provide(bracketOut.acquire()), {
      onFailure: (cause3) => sync5(() => {
        this._currentChannel = failCause10(cause3);
      }),
      onSuccess: (out) => sync5(() => {
        this.addFinalizer((exit4) => this.provide(bracketOut.finalizer(out, exit4)));
        this._currentChannel = write(out);
      })
    }));
    return fromEffect5(effect4);
  }
  provide(effect4) {
    if (this._providedEnv === void 0) {
      return effect4;
    }
    return pipe(effect4, provide2(this._providedEnv));
  }
  runEnsuring(ensuring8) {
    this.addFinalizer(ensuring8.finalizer);
    this._currentChannel = ensuring8.channel;
  }
  addFinalizer(f) {
    this._doneStack.push(new ContinuationFinalizerImpl(f));
  }
  runSubexecutor() {
    const subexecutor = this._activeSubexecutor;
    switch (subexecutor._tag) {
      case OP_PULL_FROM_CHILD: {
        return this.pullFromChild(subexecutor.childExecutor, subexecutor.parentSubexecutor, subexecutor.onEmit, subexecutor);
      }
      case OP_PULL_FROM_UPSTREAM: {
        return this.pullFromUpstream(subexecutor);
      }
      case OP_DRAIN_CHILD_EXECUTORS: {
        return this.drainChildExecutors(subexecutor);
      }
      case OP_EMIT3: {
        this._emitted = subexecutor.value;
        this._activeSubexecutor = subexecutor.next;
        return Emit();
      }
    }
  }
  replaceSubexecutor(nextSubExec) {
    this._currentChannel = void 0;
    this._activeSubexecutor = nextSubExec;
  }
  finishWithExit(exit4) {
    const state = match6(exit4, {
      onFailure: (cause3) => this.doneHalt(cause3),
      onSuccess: (value) => this.doneSucceed(value)
    });
    this._activeSubexecutor = void 0;
    return state === void 0 ? _void : effect2(state);
  }
  finishSubexecutorWithCloseEffect(subexecutorDone, ...closeFuncs) {
    this.addFinalizer(() => pipe(closeFuncs, forEach10((closeFunc) => pipe(sync5(() => closeFunc(subexecutorDone)), flatMap11((closeEffect) => closeEffect !== void 0 ? closeEffect : _void)), {
      discard: true
    })));
    const state = pipe(subexecutorDone, match6({
      onFailure: (cause3) => this.doneHalt(cause3),
      onSuccess: (value) => this.doneSucceed(value)
    }));
    this._activeSubexecutor = void 0;
    return state;
  }
  applyUpstreamPullStrategy(upstreamFinished, queue, strategy) {
    switch (strategy._tag) {
      case OP_PULL_AFTER_NEXT: {
        const shouldPrepend = !upstreamFinished || queue.some((subexecutor) => subexecutor !== void 0);
        return [strategy.emitSeparator, shouldPrepend ? [void 0, ...queue] : queue];
      }
      case OP_PULL_AFTER_ALL_ENQUEUED: {
        const shouldEnqueue = !upstreamFinished || queue.some((subexecutor) => subexecutor !== void 0);
        return [strategy.emitSeparator, shouldEnqueue ? [...queue, void 0] : queue];
      }
    }
  }
  pullFromChild(childExecutor, parentSubexecutor, onEmitted, subexecutor) {
    return Read(childExecutor, identity, (emitted) => {
      const childExecutorDecision = onEmitted(emitted);
      switch (childExecutorDecision._tag) {
        case OP_CONTINUE2: {
          break;
        }
        case OP_CLOSE: {
          this.finishWithDoneValue(childExecutor, parentSubexecutor, childExecutorDecision.value);
          break;
        }
        case OP_YIELD2: {
          const modifiedParent = parentSubexecutor.enqueuePullFromChild(subexecutor);
          this.replaceSubexecutor(modifiedParent);
          break;
        }
      }
      this._activeSubexecutor = new Emit2(emitted, this._activeSubexecutor);
      return void 0;
    }, match6({
      onFailure: (cause3) => {
        const state = this.handleSubexecutorFailure(childExecutor, parentSubexecutor, cause3);
        return state === void 0 ? void 0 : effectOrUndefinedIgnored(state);
      },
      onSuccess: (doneValue) => {
        this.finishWithDoneValue(childExecutor, parentSubexecutor, doneValue);
        return void 0;
      }
    }));
  }
  finishWithDoneValue(childExecutor, parentSubexecutor, doneValue) {
    const subexecutor = parentSubexecutor;
    switch (subexecutor._tag) {
      case OP_PULL_FROM_UPSTREAM: {
        const modifiedParent = new PullFromUpstream(subexecutor.upstreamExecutor, subexecutor.createChild, subexecutor.lastDone !== void 0 ? subexecutor.combineChildResults(subexecutor.lastDone, doneValue) : doneValue, subexecutor.activeChildExecutors, subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull, subexecutor.onEmit);
        this._closeLastSubstream = childExecutor.close(succeed3(doneValue));
        this.replaceSubexecutor(modifiedParent);
        break;
      }
      case OP_DRAIN_CHILD_EXECUTORS: {
        const modifiedParent = new DrainChildExecutors(subexecutor.upstreamExecutor, subexecutor.lastDone !== void 0 ? subexecutor.combineChildResults(subexecutor.lastDone, doneValue) : doneValue, subexecutor.activeChildExecutors, subexecutor.upstreamDone, subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull);
        this._closeLastSubstream = childExecutor.close(succeed3(doneValue));
        this.replaceSubexecutor(modifiedParent);
        break;
      }
    }
  }
  handleSubexecutorFailure(childExecutor, parentSubexecutor, cause3) {
    return this.finishSubexecutorWithCloseEffect(failCause3(cause3), (exit4) => parentSubexecutor.close(exit4), (exit4) => childExecutor.close(exit4));
  }
  pullFromUpstream(subexecutor) {
    if (subexecutor.activeChildExecutors.length === 0) {
      return this.performPullFromUpstream(subexecutor);
    }
    const activeChild = subexecutor.activeChildExecutors[0];
    const parentSubexecutor = new PullFromUpstream(subexecutor.upstreamExecutor, subexecutor.createChild, subexecutor.lastDone, subexecutor.activeChildExecutors.slice(1), subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull, subexecutor.onEmit);
    if (activeChild === void 0) {
      return this.performPullFromUpstream(parentSubexecutor);
    }
    this.replaceSubexecutor(new PullFromChild(activeChild.childExecutor, parentSubexecutor, activeChild.onEmit));
    return void 0;
  }
  performPullFromUpstream(subexecutor) {
    return Read(subexecutor.upstreamExecutor, (effect4) => {
      const closeLastSubstream = this._closeLastSubstream === void 0 ? _void : this._closeLastSubstream;
      this._closeLastSubstream = void 0;
      return pipe(this._executeCloseLastSubstream(closeLastSubstream), zipRight5(effect4));
    }, (emitted) => {
      if (this._closeLastSubstream !== void 0) {
        const closeLastSubstream = this._closeLastSubstream;
        this._closeLastSubstream = void 0;
        return pipe(this._executeCloseLastSubstream(closeLastSubstream), map19(() => {
          const childExecutor2 = new _ChannelExecutor(subexecutor.createChild(emitted), this._providedEnv, this._executeCloseLastSubstream);
          childExecutor2._input = this._input;
          const [emitSeparator2, updatedChildExecutors2] = this.applyUpstreamPullStrategy(false, subexecutor.activeChildExecutors, subexecutor.onPull(Pulled(emitted)));
          this._activeSubexecutor = new PullFromChild(childExecutor2, new PullFromUpstream(subexecutor.upstreamExecutor, subexecutor.createChild, subexecutor.lastDone, updatedChildExecutors2, subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull, subexecutor.onEmit), subexecutor.onEmit);
          if (isSome2(emitSeparator2)) {
            this._activeSubexecutor = new Emit2(emitSeparator2.value, this._activeSubexecutor);
          }
          return void 0;
        }));
      }
      const childExecutor = new _ChannelExecutor(subexecutor.createChild(emitted), this._providedEnv, this._executeCloseLastSubstream);
      childExecutor._input = this._input;
      const [emitSeparator, updatedChildExecutors] = this.applyUpstreamPullStrategy(false, subexecutor.activeChildExecutors, subexecutor.onPull(Pulled(emitted)));
      this._activeSubexecutor = new PullFromChild(childExecutor, new PullFromUpstream(subexecutor.upstreamExecutor, subexecutor.createChild, subexecutor.lastDone, updatedChildExecutors, subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull, subexecutor.onEmit), subexecutor.onEmit);
      if (isSome2(emitSeparator)) {
        this._activeSubexecutor = new Emit2(emitSeparator.value, this._activeSubexecutor);
      }
      return void 0;
    }, (exit4) => {
      if (subexecutor.activeChildExecutors.some((subexecutor2) => subexecutor2 !== void 0)) {
        const drain5 = new DrainChildExecutors(subexecutor.upstreamExecutor, subexecutor.lastDone, [void 0, ...subexecutor.activeChildExecutors], subexecutor.upstreamExecutor.getDone(), subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull);
        if (this._closeLastSubstream !== void 0) {
          const closeLastSubstream2 = this._closeLastSubstream;
          this._closeLastSubstream = void 0;
          return pipe(this._executeCloseLastSubstream(closeLastSubstream2), map19(() => this.replaceSubexecutor(drain5)));
        }
        this.replaceSubexecutor(drain5);
        return void 0;
      }
      const closeLastSubstream = this._closeLastSubstream;
      const state = this.finishSubexecutorWithCloseEffect(pipe(exit4, map12((a) => subexecutor.combineWithChildResult(subexecutor.lastDone, a))), () => closeLastSubstream, (exit5) => subexecutor.upstreamExecutor.close(exit5));
      return state === void 0 ? void 0 : (
        // NOTE: assuming finalizers cannot fail
        effectOrUndefinedIgnored(state)
      );
    });
  }
  drainChildExecutors(subexecutor) {
    if (subexecutor.activeChildExecutors.length === 0) {
      const lastClose = this._closeLastSubstream;
      if (lastClose !== void 0) {
        this.addFinalizer(() => succeed9(lastClose));
      }
      return this.finishSubexecutorWithCloseEffect(subexecutor.upstreamDone, () => lastClose, (exit4) => subexecutor.upstreamExecutor.close(exit4));
    }
    const activeChild = subexecutor.activeChildExecutors[0];
    const rest = subexecutor.activeChildExecutors.slice(1);
    if (activeChild === void 0) {
      const [emitSeparator, remainingExecutors] = this.applyUpstreamPullStrategy(true, rest, subexecutor.onPull(NoUpstream(rest.reduce((n, curr) => curr !== void 0 ? n + 1 : n, 0))));
      this.replaceSubexecutor(new DrainChildExecutors(subexecutor.upstreamExecutor, subexecutor.lastDone, remainingExecutors, subexecutor.upstreamDone, subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull));
      if (isSome2(emitSeparator)) {
        this._emitted = emitSeparator.value;
        return Emit();
      }
      return void 0;
    }
    const parentSubexecutor = new DrainChildExecutors(subexecutor.upstreamExecutor, subexecutor.lastDone, rest, subexecutor.upstreamDone, subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull);
    this.replaceSubexecutor(new PullFromChild(activeChild.childExecutor, parentSubexecutor, activeChild.onEmit));
    return void 0;
  }
};
var ifNotNull = (effect4) => effect4 !== void 0 ? effect4 : _void;
var runFinalizers = (finalizers, exit4) => {
  return pipe(forEach10(finalizers, (fin) => exit3(fin(exit4))), map19((exits) => pipe(all2(exits), getOrElse(() => void_3))), flatMap11((exit5) => suspend4(() => exit5)));
};
var readUpstream = (r, onSuccess, onFailure) => {
  const readStack = [r];
  const read = () => {
    const current2 = readStack.pop();
    if (current2 === void 0 || current2.upstream === void 0) {
      return dieMessage2("Unexpected end of input for channel execution");
    }
    const state = current2.upstream.run();
    switch (state._tag) {
      case OP_EMIT2: {
        const emitEffect = current2.onEmit(current2.upstream.getEmit());
        if (readStack.length === 0) {
          if (emitEffect === void 0) {
            return suspend4(onSuccess);
          }
          return pipe(emitEffect, matchCauseEffect3({
            onFailure,
            onSuccess
          }));
        }
        if (emitEffect === void 0) {
          return suspend4(() => read());
        }
        return pipe(emitEffect, matchCauseEffect3({
          onFailure,
          onSuccess: () => read()
        }));
      }
      case OP_DONE3: {
        const doneEffect = current2.onDone(current2.upstream.getDone());
        if (readStack.length === 0) {
          if (doneEffect === void 0) {
            return suspend4(onSuccess);
          }
          return pipe(doneEffect, matchCauseEffect3({
            onFailure,
            onSuccess
          }));
        }
        if (doneEffect === void 0) {
          return suspend4(() => read());
        }
        return pipe(doneEffect, matchCauseEffect3({
          onFailure,
          onSuccess: () => read()
        }));
      }
      case OP_FROM_EFFECT3: {
        readStack.push(current2);
        return pipe(current2.onEffect(state.effect), catchAllCause3((cause3) => suspend4(() => {
          const doneEffect = current2.onDone(failCause3(cause3));
          return doneEffect === void 0 ? _void : doneEffect;
        })), matchCauseEffect3({
          onFailure,
          onSuccess: () => read()
        }));
      }
      case OP_READ2: {
        readStack.push(current2);
        readStack.push(state);
        return suspend4(() => read());
      }
    }
  };
  return read();
};
var runIn = /* @__PURE__ */ dual(2, (self, scope5) => {
  const run7 = (channelDeferred, scopeDeferred, scope6) => acquireUseRelease2(sync5(() => new ChannelExecutor(self, void 0, identity)), (exec) => suspend4(() => runScopedInterpret(exec.run(), exec).pipe(intoDeferred2(channelDeferred), zipRight5(_await(channelDeferred)), zipLeft4(_await(scopeDeferred)))), (exec, exit4) => {
    const finalize = exec.close(exit4);
    if (finalize === void 0) {
      return _void;
    }
    return tapErrorCause3(finalize, (cause3) => addFinalizer2(scope6, failCause8(cause3)));
  });
  return uninterruptibleMask3((restore) => all4([fork2(scope5, sequential3), make20(), make20()]).pipe(flatMap11(([child, channelDeferred, scopeDeferred]) => restore(run7(channelDeferred, scopeDeferred, child)).pipe(forkIn2(scope5), flatMap11((fiber) => scope5.addFinalizer((exit4) => {
    const interruptors3 = isFailure(exit4) ? interruptors2(exit4.cause) : void 0;
    return isDone(channelDeferred).pipe(flatMap11((isDone7) => isDone7 ? succeed2(scopeDeferred, void 0).pipe(zipRight5(_await3(fiber)), zipRight5(inheritAll2(fiber))) : succeed2(scopeDeferred, void 0).pipe(zipRight5(interruptors3 && size4(interruptors3) > 0 ? interruptAs(fiber, combineAll3(interruptors3)) : interrupt6(fiber)), zipRight5(inheritAll2(fiber)))));
  }).pipe(zipRight5(restore(_await(channelDeferred)))))))));
});
var runScopedInterpret = (channelState, exec) => {
  const op = channelState;
  switch (op._tag) {
    case OP_FROM_EFFECT3: {
      return pipe(op.effect, flatMap11(() => runScopedInterpret(exec.run(), exec)));
    }
    case OP_EMIT2: {
      return runScopedInterpret(exec.run(), exec);
    }
    case OP_DONE3: {
      return suspend4(() => exec.getDone());
    }
    case OP_READ2: {
      return readUpstream(op, () => runScopedInterpret(exec.run(), exec), failCause8);
    }
  }
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/opCodes/channelMergeDecision.js
var OP_DONE4 = "Done";
var OP_AWAIT = "Await";

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/channel/mergeDecision.js
var MergeDecisionSymbolKey = "effect/ChannelMergeDecision";
var MergeDecisionTypeId = /* @__PURE__ */ Symbol.for(MergeDecisionSymbolKey);
var proto9 = {
  [MergeDecisionTypeId]: {
    _R: (_) => _,
    _E0: (_) => _,
    _Z0: (_) => _,
    _E: (_) => _,
    _Z: (_) => _
  }
};
var Done3 = (effect4) => {
  const op = Object.create(proto9);
  op._tag = OP_DONE4;
  op.effect = effect4;
  return op;
};
var Await = (f) => {
  const op = Object.create(proto9);
  op._tag = OP_AWAIT;
  op.f = f;
  return op;
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/opCodes/channelMergeState.js
var OP_BOTH_RUNNING = "BothRunning";
var OP_LEFT_DONE = "LeftDone";
var OP_RIGHT_DONE = "RightDone";

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/channel/mergeState.js
var MergeStateSymbolKey = "effect/ChannelMergeState";
var MergeStateTypeId = /* @__PURE__ */ Symbol.for(MergeStateSymbolKey);
var proto10 = {
  [MergeStateTypeId]: MergeStateTypeId
};
var BothRunning = (left3, right3) => {
  const op = Object.create(proto10);
  op._tag = OP_BOTH_RUNNING;
  op.left = left3;
  op.right = right3;
  return op;
};
var LeftDone = (f) => {
  const op = Object.create(proto10);
  op._tag = OP_LEFT_DONE;
  op.f = f;
  return op;
};
var RightDone = (f) => {
  const op = Object.create(proto10);
  op._tag = OP_RIGHT_DONE;
  op.f = f;
  return op;
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/opCodes/channelMergeStrategy.js
var OP_BACK_PRESSURE = "BackPressure";
var OP_BUFFER_SLIDING = "BufferSliding";

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/channel/mergeStrategy.js
var MergeStrategySymbolKey = "effect/ChannelMergeStrategy";
var MergeStrategyTypeId = /* @__PURE__ */ Symbol.for(MergeStrategySymbolKey);
var proto11 = {
  [MergeStrategyTypeId]: MergeStrategyTypeId
};
var BackPressure = (_) => {
  const op = Object.create(proto11);
  op._tag = OP_BACK_PRESSURE;
  return op;
};
var BufferSliding = (_) => {
  const op = Object.create(proto11);
  op._tag = OP_BUFFER_SLIDING;
  return op;
};
var match14 = /* @__PURE__ */ dual(2, (self, {
  onBackPressure,
  onBufferSliding
}) => {
  switch (self._tag) {
    case OP_BACK_PRESSURE: {
      return onBackPressure();
    }
    case OP_BUFFER_SLIDING: {
      return onBufferSliding();
    }
  }
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/channel/singleProducerAsyncInput.js
var OP_STATE_EMPTY = "Empty";
var OP_STATE_EMIT = "Emit";
var OP_STATE_ERROR = "Error";
var OP_STATE_DONE2 = "Done";
var stateEmpty = (notifyProducer) => ({
  _tag: OP_STATE_EMPTY,
  notifyProducer
});
var stateEmit = (notifyConsumers) => ({
  _tag: OP_STATE_EMIT,
  notifyConsumers
});
var stateError = (cause3) => ({
  _tag: OP_STATE_ERROR,
  cause: cause3
});
var stateDone = (done11) => ({
  _tag: OP_STATE_DONE2,
  done: done11
});
var SingleProducerAsyncInputImpl = class {
  ref;
  constructor(ref) {
    this.ref = ref;
  }
  awaitRead() {
    return flatten10(modify5(this.ref, (state) => state._tag === OP_STATE_EMPTY ? [_await(state.notifyProducer), state] : [_void, state]));
  }
  get close() {
    return fiberIdWith2((fiberId3) => this.error(interrupt5(fiberId3)));
  }
  done(value) {
    return flatten10(modify5(this.ref, (state) => {
      switch (state._tag) {
        case OP_STATE_EMPTY: {
          return [_await(state.notifyProducer), state];
        }
        case OP_STATE_EMIT: {
          return [forEach10(state.notifyConsumers, (deferred) => succeed2(deferred, left2(value)), {
            discard: true
          }), stateDone(value)];
        }
        case OP_STATE_ERROR: {
          return [interrupt7, state];
        }
        case OP_STATE_DONE2: {
          return [interrupt7, state];
        }
      }
    }));
  }
  emit(element) {
    return flatMap11(make20(), (deferred) => flatten10(modify5(this.ref, (state) => {
      switch (state._tag) {
        case OP_STATE_EMPTY: {
          return [_await(state.notifyProducer), state];
        }
        case OP_STATE_EMIT: {
          const notifyConsumer = state.notifyConsumers[0];
          const notifyConsumers = state.notifyConsumers.slice(1);
          if (notifyConsumer !== void 0) {
            return [succeed2(notifyConsumer, right2(element)), notifyConsumers.length === 0 ? stateEmpty(deferred) : stateEmit(notifyConsumers)];
          }
          throw new Error("Bug: Channel.SingleProducerAsyncInput.emit - Queue was empty! please report an issue at https://github.com/Effect-TS/effect/issues");
        }
        case OP_STATE_ERROR: {
          return [interrupt7, state];
        }
        case OP_STATE_DONE2: {
          return [interrupt7, state];
        }
      }
    })));
  }
  error(cause3) {
    return flatten10(modify5(this.ref, (state) => {
      switch (state._tag) {
        case OP_STATE_EMPTY: {
          return [_await(state.notifyProducer), state];
        }
        case OP_STATE_EMIT: {
          return [forEach10(state.notifyConsumers, (deferred) => failCause2(deferred, cause3), {
            discard: true
          }), stateError(cause3)];
        }
        case OP_STATE_ERROR: {
          return [interrupt7, state];
        }
        case OP_STATE_DONE2: {
          return [interrupt7, state];
        }
      }
    }));
  }
  get take() {
    return this.takeWith((cause3) => failCause3(map15(cause3, left2)), (elem) => succeed3(elem), (done11) => fail4(right2(done11)));
  }
  takeWith(onError5, onElement, onDone3) {
    return flatMap11(make20(), (deferred) => flatten10(modify5(this.ref, (state) => {
      switch (state._tag) {
        case OP_STATE_EMPTY: {
          return [zipRight5(succeed2(state.notifyProducer, void 0), matchCause4(_await(deferred), {
            onFailure: onError5,
            onSuccess: match({
              onLeft: onDone3,
              onRight: onElement
            })
          })), stateEmit([deferred])];
        }
        case OP_STATE_EMIT: {
          return [matchCause4(_await(deferred), {
            onFailure: onError5,
            onSuccess: match({
              onLeft: onDone3,
              onRight: onElement
            })
          }), stateEmit([...state.notifyConsumers, deferred])];
        }
        case OP_STATE_ERROR: {
          return [succeed9(onError5(state.cause)), state];
        }
        case OP_STATE_DONE2: {
          return [succeed9(onDone3(state.done)), state];
        }
      }
    })));
  }
};
var make43 = () => pipe(make20(), flatMap11((deferred) => make29(stateEmpty(deferred))), map19((ref) => new SingleProducerAsyncInputImpl(ref)));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/channel.js
var acquireUseRelease3 = (acquire, use2, release) => flatMap13(fromEffect4(make29(() => _void)), (ref) => pipe(fromEffect4(uninterruptible2(tap4(acquire, (a) => set7(ref, (exit4) => release(a, exit4))))), flatMap13(use2), ensuringWith((exit4) => flatMap11(get13(ref), (f) => f(exit4)))));
var as6 = /* @__PURE__ */ dual(2, (self, value) => map21(self, () => value));
var catchAll5 = /* @__PURE__ */ dual(2, (self, f) => catchAllCause5(self, (cause3) => match(failureOrCause2(cause3), {
  onLeft: f,
  onRight: failCause10
})));
var concatMap = /* @__PURE__ */ dual(2, (self, f) => concatMapWith(self, f, () => void 0, () => void 0));
var drain = (self) => {
  const drainer = readWithCause({
    onInput: () => drainer,
    onFailure: failCause10,
    onDone: succeed11
  });
  return pipeTo(self, drainer);
};
var ensuring3 = /* @__PURE__ */ dual(2, (self, finalizer3) => ensuringWith(self, () => finalizer3));
var flatten12 = (self) => flatMap13(self, identity);
var foldChannel = /* @__PURE__ */ dual(2, (self, options) => foldCauseChannel(self, {
  onFailure: (cause3) => {
    const either7 = failureOrCause2(cause3);
    switch (either7._tag) {
      case "Left": {
        return options.onFailure(either7.left);
      }
      case "Right": {
        return failCause10(either7.right);
      }
    }
  },
  onSuccess: options.onSuccess
}));
var fromInput = (input) => unwrap(input.takeWith(failCause10, (elem) => flatMap13(write(elem), () => fromInput(input)), succeed11));
var fromQueue = (queue) => suspend6(() => fromQueueInternal(queue));
var fromQueueInternal = (queue) => pipe(fromEffect4(take4(queue)), flatMap13(match({
  onLeft: match6({
    onFailure: failCause10,
    onSuccess: succeedNow
  }),
  onRight: (elem) => flatMap13(write(elem), () => fromQueueInternal(queue))
})));
var identityChannel = () => readWith({
  onInput: (input) => flatMap13(write(input), () => identityChannel()),
  onFailure: fail11,
  onDone: succeedNow
});
var interruptWhen = /* @__PURE__ */ dual(2, (self, effect4) => mergeWith2(self, {
  other: fromEffect4(effect4),
  onSelfDone: (selfDone) => Done3(suspend4(() => selfDone)),
  onOtherDone: (effectDone) => Done3(suspend4(() => effectDone))
}));
var interruptWhenDeferred = /* @__PURE__ */ dual(2, (self, deferred) => interruptWhen(self, _await(deferred)));
var map21 = /* @__PURE__ */ dual(2, (self, f) => flatMap13(self, (a) => sync7(() => f(a))));
var mapError5 = /* @__PURE__ */ dual(2, (self, f) => mapErrorCause3(self, map15(f)));
var mapErrorCause3 = /* @__PURE__ */ dual(2, (self, f) => catchAllCause5(self, (cause3) => failCause10(f(cause3))));
var mapOut = /* @__PURE__ */ dual(2, (self, f) => {
  const reader = readWith({
    onInput: (outElem) => flatMap13(write(f(outElem)), () => reader),
    onFailure: fail11,
    onDone: succeedNow
  });
  return pipeTo(self, reader);
});
var mapOutEffect = /* @__PURE__ */ dual(2, (self, f) => {
  const reader = readWithCause({
    onInput: (outElem) => pipe(fromEffect4(f(outElem)), flatMap13(write), flatMap13(() => reader)),
    onFailure: failCause10,
    onDone: succeedNow
  });
  return pipeTo(self, reader);
});
var mapOutEffectPar = /* @__PURE__ */ dual(3, (self, f, n) => unwrapScopedWith((scope5) => gen3(function* () {
  const input = yield* make43();
  const queueReader = fromInput(input);
  const queue = yield* bounded5(n);
  yield* addFinalizer2(scope5, shutdown4(queue));
  const errorSignal = yield* make20();
  const withPermits = n === Number.POSITIVE_INFINITY ? (_) => identity : (yield* makeSemaphore2(n)).withPermits;
  const pull = yield* queueReader.pipe(pipeTo(self), toPullIn(scope5));
  yield* pull.pipe(matchCauseEffect3({
    onFailure: (cause3) => offer3(queue, failCause8(cause3)),
    onSuccess: match({
      onLeft: (outDone) => zipRight5(interruptible4(withPermits(n)(_void)), asVoid4(offer3(queue, succeed9(left2(outDone))))),
      onRight: (outElem) => gen3(function* () {
        const deferred = yield* make20();
        const latch = yield* make20();
        yield* offer3(queue, map19(_await(deferred), right2));
        yield* succeed2(latch, void 0).pipe(zipRight5(uninterruptibleMask3((restore) => exit3(restore(_await(errorSignal))).pipe(raceFirst2(exit3(restore(f(outElem)))), flatMap11(identity))).pipe(tapErrorCause3((cause3) => failCause2(errorSignal, cause3)), intoDeferred2(deferred))), withPermits(1), forkIn2(scope5));
        yield* _await(latch);
      })
    })
  }), forever3, interruptible4, forkIn2(scope5));
  const consumer = unwrap(matchCause4(flatten10(take4(queue)), {
    onFailure: failCause10,
    onSuccess: match({
      onLeft: succeedNow,
      onRight: (outElem) => flatMap13(write(outElem), () => consumer)
    })
  }));
  return embedInput(consumer, input);
})));
var mergeAll6 = (options) => {
  return (channels) => mergeAllWith(options)(channels, constVoid);
};
var mergeAllWith = ({
  bufferSize = 16,
  concurrency,
  mergeStrategy = BackPressure()
}) => (channels, f) => unwrapScopedWith((scope5) => gen3(function* () {
  const concurrencyN = concurrency === "unbounded" ? Number.MAX_SAFE_INTEGER : concurrency;
  const input = yield* make43();
  const queueReader = fromInput(input);
  const queue = yield* bounded5(bufferSize);
  yield* addFinalizer2(scope5, shutdown4(queue));
  const cancelers = yield* unbounded5();
  yield* addFinalizer2(scope5, shutdown4(cancelers));
  const lastDone = yield* make29(none2());
  const errorSignal = yield* make20();
  const withPermits = (yield* makeSemaphore2(concurrencyN)).withPermits;
  const pull = yield* toPullIn(pipeTo(queueReader, channels), scope5);
  function evaluatePull(pull2) {
    return pull2.pipe(flatMap11(match({
      onLeft: (done11) => succeed9(some2(done11)),
      onRight: (outElem) => as5(offer3(queue, succeed9(right2(outElem))), none2())
    })), repeat({
      until: (_) => isSome2(_)
    }), flatMap11((outDone) => update3(lastDone, match2({
      onNone: () => some2(outDone.value),
      onSome: (lastDone2) => some2(f(lastDone2, outDone.value))
    }))), catchAllCause3((cause3) => isInterrupted2(cause3) ? failCause8(cause3) : offer3(queue, failCause8(cause3)).pipe(zipRight5(succeed2(errorSignal, void 0)), asVoid4)));
  }
  yield* pull.pipe(matchCauseEffect3({
    onFailure: (cause3) => offer3(queue, failCause8(cause3)).pipe(zipRight5(succeed9(false))),
    onSuccess: match({
      onLeft: (outDone) => raceWith2(interruptible4(_await(errorSignal)), interruptible4(withPermits(concurrencyN)(_void)), {
        onSelfDone: (_, permitAcquisition) => as5(interrupt6(permitAcquisition), false),
        onOtherDone: (_, failureAwait) => zipRight5(interrupt6(failureAwait), get13(lastDone).pipe(flatMap11(match2({
          onNone: () => offer3(queue, succeed9(left2(outDone))),
          onSome: (lastDone2) => offer3(queue, succeed9(left2(f(lastDone2, outDone))))
        })), as5(false)))
      }),
      onRight: (channel) => match14(mergeStrategy, {
        onBackPressure: () => gen3(function* () {
          const latch = yield* make20();
          const raceEffects = scopedWith2((scope6) => toPullIn(pipeTo(queueReader, channel), scope6).pipe(flatMap11((pull2) => race2(exit3(evaluatePull(pull2)), exit3(interruptible4(_await(errorSignal))))), flatMap11(identity)));
          yield* succeed2(latch, void 0).pipe(zipRight5(raceEffects), withPermits(1), forkIn2(scope5));
          yield* _await(latch);
          const errored = yield* isDone(errorSignal);
          return !errored;
        }),
        onBufferSliding: () => gen3(function* () {
          const canceler = yield* make20();
          const latch = yield* make20();
          const size17 = yield* size14(cancelers);
          yield* take4(cancelers).pipe(flatMap11((canceler2) => succeed2(canceler2, void 0)), when2(() => size17 >= concurrencyN));
          yield* offer3(cancelers, canceler);
          const raceEffects = scopedWith2((scope6) => toPullIn(pipeTo(queueReader, channel), scope6).pipe(flatMap11((pull2) => exit3(evaluatePull(pull2)).pipe(race2(exit3(interruptible4(_await(errorSignal)))), race2(exit3(interruptible4(_await(canceler)))))), flatMap11(identity)));
          yield* succeed2(latch, void 0).pipe(zipRight5(raceEffects), withPermits(1), forkIn2(scope5));
          yield* _await(latch);
          const errored = yield* isDone(errorSignal);
          return !errored;
        })
      })
    })
  }), repeat({
    while: (_) => _
  }), forkIn2(scope5));
  const consumer = pipe(take4(queue), flatten10, matchCause4({
    onFailure: failCause10,
    onSuccess: match({
      onLeft: succeedNow,
      onRight: (outElem) => flatMap13(write(outElem), () => consumer)
    })
  }), unwrap);
  return embedInput(consumer, input);
}));
var mergeMap = /* @__PURE__ */ dual(3, (self, f, options) => mergeAll6(options)(mapOut(self, f)));
var mergeWith2 = /* @__PURE__ */ dual(2, (self, options) => {
  function merge11(scope5) {
    return gen3(function* () {
      const input = yield* make43();
      const queueReader = fromInput(input);
      const pullL = yield* toPullIn(pipeTo(queueReader, self), scope5);
      const pullR = yield* toPullIn(pipeTo(queueReader, options.other), scope5);
      function handleSide(exit4, fiber, pull) {
        return (done11, both2, single2) => {
          function onDecision2(decision) {
            const op = decision;
            if (op._tag === OP_DONE4) {
              return succeed9(fromEffect4(zipRight5(interrupt6(fiber), op.effect)));
            }
            return map19(_await3(fiber), match6({
              onFailure: (cause3) => fromEffect4(op.f(failCause3(cause3))),
              onSuccess: match({
                onLeft: (done12) => fromEffect4(op.f(succeed3(done12))),
                onRight: (elem) => zipRight6(write(elem), go2(single2(op.f)))
              })
            }));
          }
          return match6(exit4, {
            onFailure: (cause3) => onDecision2(done11(failCause3(cause3))),
            onSuccess: match({
              onLeft: (z) => onDecision2(done11(succeed3(z))),
              onRight: (elem) => succeed9(flatMap13(write(elem), () => flatMap13(fromEffect4(forkIn2(interruptible4(pull), scope5)), (leftFiber) => go2(both2(leftFiber, fiber)))))
            })
          });
        };
      }
      function go2(state) {
        switch (state._tag) {
          case OP_BOTH_RUNNING: {
            const leftJoin = interruptible4(join3(state.left));
            const rightJoin = interruptible4(join3(state.right));
            return unwrap(raceWith2(leftJoin, rightJoin, {
              onSelfDone: (leftExit, rf) => zipRight5(interrupt6(rf), handleSide(leftExit, state.right, pullL)(options.onSelfDone, BothRunning, (f) => LeftDone(f))),
              onOtherDone: (rightExit, lf) => zipRight5(interrupt6(lf), handleSide(rightExit, state.left, pullR)(options.onOtherDone, (left3, right3) => BothRunning(right3, left3), (f) => RightDone(f)))
            }));
          }
          case OP_LEFT_DONE: {
            return unwrap(map19(exit3(pullR), match6({
              onFailure: (cause3) => fromEffect4(state.f(failCause3(cause3))),
              onSuccess: match({
                onLeft: (done11) => fromEffect4(state.f(succeed3(done11))),
                onRight: (elem) => flatMap13(write(elem), () => go2(LeftDone(state.f)))
              })
            })));
          }
          case OP_RIGHT_DONE: {
            return unwrap(map19(exit3(pullL), match6({
              onFailure: (cause3) => fromEffect4(state.f(failCause3(cause3))),
              onSuccess: match({
                onLeft: (done11) => fromEffect4(state.f(succeed3(done11))),
                onRight: (elem) => flatMap13(write(elem), () => go2(RightDone(state.f)))
              })
            })));
          }
        }
      }
      return fromEffect4(withFiberRuntime2((parent2) => {
        const inherit = withFiberRuntime2((state) => {
          state.transferChildren(parent2.scope());
          return _void;
        });
        const leftFiber = interruptible4(pullL).pipe(ensuring2(inherit), forkIn2(scope5));
        const rightFiber = interruptible4(pullR).pipe(ensuring2(inherit), forkIn2(scope5));
        return zipWith6(leftFiber, rightFiber, (left3, right3) => BothRunning(left3, right3));
      })).pipe(flatMap13(go2), embedInput(input));
    });
  }
  return unwrapScopedWith(merge11);
});
var orDieWith3 = /* @__PURE__ */ dual(2, (self, f) => catchAll5(self, (e) => failCauseSync5(() => die4(f(e)))));
var orElse7 = /* @__PURE__ */ dual(2, (self, that) => catchAll5(self, that));
var pipeToOrFail = /* @__PURE__ */ dual(2, (self, that) => suspend6(() => {
  let channelException = void 0;
  const reader = readWith({
    onInput: (outElem) => flatMap13(write(outElem), () => reader),
    onFailure: (outErr) => {
      channelException = ChannelException(outErr);
      return failCause10(die4(channelException));
    },
    onDone: succeedNow
  });
  const writer = readWithCause({
    onInput: (outElem) => pipe(write(outElem), flatMap13(() => writer)),
    onFailure: (cause3) => isDieType2(cause3) && isChannelException(cause3.defect) && equals(cause3.defect, channelException) ? fail11(cause3.defect.error) : failCause10(cause3),
    onDone: succeedNow
  });
  return pipeTo(pipeTo(pipeTo(self, reader), that), writer);
}));
var repeated = (self) => flatMap13(self, () => repeated(self));
var run = (self) => scopedWith2((scope5) => runIn(self, scope5));
var runDrain = (self) => run(drain(self));
var runScoped = (self) => scopeWith2((scope5) => runIn(self, scope5));
var scoped4 = (effect4) => unwrap(uninterruptibleMask3((restore) => map19(make40(), (scope5) => acquireReleaseOut(tapErrorCause3(restore(extend3(effect4, scope5)), (cause3) => close(scope5, failCause3(cause3))), (_, exit4) => close(scope5, exit4)))));
var scopedWith3 = (f) => unwrapScoped3(map19(scope3, (scope5) => flatMap13(fromEffect4(f(scope5)), write)));
var splitLines = () => suspend6(() => {
  let stringBuilder = "";
  let midCRLF = false;
  const splitLinesChunk = (chunk3) => {
    const chunkBuilder = [];
    map5(chunk3, (str) => {
      if (str.length !== 0) {
        let from = 0;
        let indexOfCR = str.indexOf("\r");
        let indexOfLF = str.indexOf("\n");
        if (midCRLF) {
          if (indexOfLF === 0) {
            chunkBuilder.push(stringBuilder);
            stringBuilder = "";
            from = 1;
            indexOfLF = str.indexOf("\n", from);
          } else {
            stringBuilder = stringBuilder + "\r";
          }
          midCRLF = false;
        }
        while (indexOfCR !== -1 || indexOfLF !== -1) {
          if (indexOfCR === -1 || indexOfLF !== -1 && indexOfLF < indexOfCR) {
            if (stringBuilder.length === 0) {
              chunkBuilder.push(str.substring(from, indexOfLF));
            } else {
              chunkBuilder.push(stringBuilder + str.substring(from, indexOfLF));
              stringBuilder = "";
            }
            from = indexOfLF + 1;
            indexOfLF = str.indexOf("\n", from);
          } else {
            if (str.length === indexOfCR + 1) {
              midCRLF = true;
              indexOfCR = -1;
            } else {
              if (indexOfLF === indexOfCR + 1) {
                if (stringBuilder.length === 0) {
                  chunkBuilder.push(str.substring(from, indexOfCR));
                } else {
                  stringBuilder = stringBuilder + str.substring(from, indexOfCR);
                  chunkBuilder.push(stringBuilder);
                  stringBuilder = "";
                }
                from = indexOfCR + 2;
                indexOfCR = str.indexOf("\r", from);
                indexOfLF = str.indexOf("\n", from);
              } else {
                indexOfCR = str.indexOf("\r", indexOfCR + 1);
              }
            }
          }
        }
        if (midCRLF) {
          stringBuilder = stringBuilder + str.substring(from, str.length - 1);
        } else {
          stringBuilder = stringBuilder + str.substring(from, str.length);
        }
      }
    });
    return unsafeFromArray(chunkBuilder);
  };
  const loop3 = readWithCause({
    onInput: (input) => {
      const out = splitLinesChunk(input);
      return isEmpty(out) ? loop3 : flatMap13(write(out), () => loop3);
    },
    onFailure: (cause3) => stringBuilder.length === 0 ? failCause10(cause3) : flatMap13(write(of2(stringBuilder)), () => failCause10(cause3)),
    onDone: (done11) => stringBuilder.length === 0 ? succeed11(done11) : flatMap13(write(of2(stringBuilder)), () => succeed11(done11))
  });
  return loop3;
});
var toPubSub = (pubsub) => toQueue(pubsub);
var toPull = (self) => flatMap11(scope3, (scope5) => toPullIn(self, scope5));
var toPullIn = /* @__PURE__ */ dual(2, (self, scope5) => zip6(sync5(() => new ChannelExecutor(self, void 0, identity)), runtime3()).pipe(tap4(([executor, runtime5]) => addFinalizerExit(scope5, (exit4) => {
  const finalizer3 = executor.close(exit4);
  return finalizer3 !== void 0 ? provide2(finalizer3, runtime5) : _void;
})), uninterruptible2, map19(([executor]) => suspend4(() => interpretToPull(executor.run(), executor)))));
var interpretToPull = (channelState, exec) => {
  const state = channelState;
  switch (state._tag) {
    case OP_DONE3: {
      return match6(exec.getDone(), {
        onFailure: failCause8,
        onSuccess: (done11) => succeed9(left2(done11))
      });
    }
    case OP_EMIT2: {
      return succeed9(right2(exec.getEmit()));
    }
    case OP_FROM_EFFECT3: {
      return pipe(state.effect, flatMap11(() => interpretToPull(exec.run(), exec)));
    }
    case OP_READ2: {
      return readUpstream(state, () => interpretToPull(exec.run(), exec), (cause3) => failCause8(cause3));
    }
  }
};
var toQueue = (queue) => suspend6(() => toQueueInternal(queue));
var toQueueInternal = (queue) => {
  return readWithCause({
    onInput: (elem) => flatMap13(fromEffect4(offer3(queue, right2(elem))), () => toQueueInternal(queue)),
    onFailure: (cause3) => fromEffect4(pipe(offer3(queue, left2(failCause3(cause3))))),
    onDone: (done11) => fromEffect4(pipe(offer3(queue, left2(succeed3(done11)))))
  });
};
var unwrap = (channel) => flatten12(fromEffect4(channel));
var unwrapScoped3 = (self) => concatAllWith(scoped4(self), (d, _) => d, (d, _) => d);
var unwrapScopedWith = (f) => concatAllWith(scopedWith3(f), (d, _) => d, (d, _) => d);
var withSpan5 = function() {
  const dataFirst = typeof arguments[0] !== "string";
  const name = dataFirst ? arguments[1] : arguments[0];
  const options = addSpanStackTrace(dataFirst ? arguments[2] : arguments[1]);
  const acquire = all4([makeSpan2(name, options), context3(), clock2, get14(currentTracerTimingEnabled2)]);
  if (dataFirst) {
    const self = arguments[0];
    return acquireUseRelease3(acquire, ([span4, context7]) => provideContext3(self, add2(context7, spanTag, span4)), ([span4, , clock3, timingEnabled], exit4) => endSpan(span4, exit4, clock3, timingEnabled));
  }
  return (self) => acquireUseRelease3(acquire, ([span4, context7]) => provideContext3(self, add2(context7, spanTag, span4)), ([span4, , clock3, timingEnabled], exit4) => endSpan(span4, exit4, clock3, timingEnabled));
};
var writeAll = (...outs) => writeChunk(fromIterable3(outs));
var writeChunk = (outs) => writeChunkWriter(0, outs.length, outs);
var writeChunkWriter = (idx, len, chunk3) => {
  return idx === len ? void_6 : pipe(write(pipe(chunk3, unsafeGet4(idx))), flatMap13(() => writeChunkWriter(idx + 1, len, chunk3)));
};
var zip7 = /* @__PURE__ */ dual((args2) => isChannel(args2[1]), (self, that, options) => options?.concurrent ? mergeWith2(self, {
  other: that,
  onSelfDone: (exit1) => Await((exit22) => suspend4(() => zip3(exit1, exit22))),
  onOtherDone: (exit22) => Await((exit1) => suspend4(() => zip3(exit1, exit22)))
}) : flatMap13(self, (a) => map21(that, (b) => [a, b])));
var zipLeft5 = /* @__PURE__ */ dual((args2) => isChannel(args2[1]), (self, that, options) => options?.concurrent ? map21(zip7(self, that, {
  concurrent: true
}), (tuple) => tuple[0]) : flatMap13(self, (z) => as6(that, z)));
var zipRight6 = /* @__PURE__ */ dual((args2) => isChannel(args2[1]), (self, that, options) => options?.concurrent ? map21(zip7(self, that, {
  concurrent: true
}), (tuple) => tuple[1]) : flatMap13(self, () => that));
var ChannelExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Channel/ChannelException");
var ChannelException = (error) => ({
  _tag: "ChannelException",
  [ChannelExceptionTypeId]: ChannelExceptionTypeId,
  error
});
var isChannelException = (u) => hasProperty(u, ChannelExceptionTypeId);

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/sink.js
var SinkTypeId2 = /* @__PURE__ */ Symbol.for("effect/Sink");
var sinkVariance2 = {
  /* c8 ignore next */
  _A: (_) => _,
  /* c8 ignore next */
  _In: (_) => _,
  /* c8 ignore next */
  _L: (_) => _,
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _R: (_) => _
};
var SinkImpl = class {
  channel;
  [SinkTypeId2] = sinkVariance2;
  constructor(channel) {
    this.channel = channel;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var isSink = (u) => hasProperty(u, SinkTypeId2);
var suspend7 = (evaluate3) => new SinkImpl(suspend6(() => toChannel(evaluate3())));
var collectAll = () => new SinkImpl(collectAllLoop(empty7()));
var collectAllLoop = (acc) => readWithCause({
  onInput: (chunk3) => collectAllLoop(pipe(acc, appendAll2(chunk3))),
  onFailure: failCause10,
  onDone: () => succeed11(acc)
});
var collectAllN = (n) => suspend7(() => fromChannel(collectAllNLoop(n, empty7())));
var collectAllNLoop = (n, acc) => readWithCause({
  onInput: (chunk3) => {
    const [collected, leftovers] = splitAt2(chunk3, n);
    if (collected.length < n) {
      return collectAllNLoop(n - collected.length, appendAll2(acc, collected));
    }
    if (isEmpty(leftovers)) {
      return succeed11(appendAll2(acc, collected));
    }
    return flatMap13(write(leftovers), () => succeed11(appendAll2(acc, collected)));
  },
  onFailure: failCause10,
  onDone: () => succeed11(acc)
});
var collectLeftover = (self) => new SinkImpl(pipe(collectElements(toChannel(self)), map21(([chunks3, z]) => [z, flatten4(chunks3)])));
var drain2 = /* @__PURE__ */ new SinkImpl(/* @__PURE__ */ drain(/* @__PURE__ */ identityChannel()));
var fail12 = (e) => new SinkImpl(fail11(e));
var fold = (s, contFn, f) => suspend7(() => new SinkImpl(foldReader(s, contFn, f)));
var foldReader = (s, contFn, f) => {
  if (!contFn(s)) {
    return succeedNow(s);
  }
  return readWith({
    onInput: (input) => {
      const [nextS, leftovers] = foldChunkSplit(s, input, contFn, f, 0, input.length);
      if (isNonEmpty2(leftovers)) {
        return pipe(write(leftovers), as6(nextS));
      }
      return foldReader(nextS, contFn, f);
    },
    onFailure: fail11,
    onDone: () => succeedNow(s)
  });
};
var foldChunkSplit = (s, chunk3, contFn, f, index, length4) => {
  if (index === length4) {
    return [s, empty7()];
  }
  const s1 = f(s, pipe(chunk3, unsafeGet4(index)));
  if (contFn(s1)) {
    return foldChunkSplit(s1, chunk3, contFn, f, index + 1, length4);
  }
  return [s1, pipe(chunk3, drop2(index + 1))];
};
var foldSink = /* @__PURE__ */ dual(2, (self, options) => {
  const newChannel = pipe(toChannel(self), collectElements, foldChannel({
    onFailure: (error) => toChannel(options.onFailure(error)),
    onSuccess: ([leftovers, z]) => suspend6(() => {
      const leftoversRef = {
        ref: pipe(leftovers, filter4(isNonEmpty2))
      };
      const refReader = pipe(
        sync7(() => {
          const ref = leftoversRef.ref;
          leftoversRef.ref = empty7();
          return ref;
        }),
        // This cast is safe because of the L1 >: L <: In1 bound. It follows that
        // L <: In1 and therefore Chunk[L] can be safely cast to Chunk[In1].
        flatMap13((chunk3) => writeChunk(chunk3))
      );
      const passthrough4 = identityChannel();
      const continuationSink = pipe(refReader, zipRight6(passthrough4), pipeTo(toChannel(options.onSuccess(z))));
      return flatMap13(collectElements(continuationSink), ([newLeftovers, z1]) => pipe(succeed11(leftoversRef.ref), flatMap13(writeChunk), zipRight6(writeChunk(newLeftovers)), as6(z1)));
    })
  }));
  return new SinkImpl(newChannel);
});
var foldChunks = (s, contFn, f) => suspend7(() => new SinkImpl(foldChunksReader(s, contFn, f)));
var foldChunksReader = (s, contFn, f) => {
  if (!contFn(s)) {
    return succeedNow(s);
  }
  return readWith({
    onInput: (input) => foldChunksReader(f(s, input), contFn, f),
    onFailure: fail11,
    onDone: () => succeedNow(s)
  });
};
var foldEffect = (s, contFn, f) => suspend7(() => new SinkImpl(foldEffectReader(s, contFn, f)));
var foldEffectReader = (s, contFn, f) => {
  if (!contFn(s)) {
    return succeedNow(s);
  }
  return readWith({
    onInput: (input) => pipe(fromEffect4(foldChunkSplitEffect(s, input, contFn, f)), flatMap13(([nextS, leftovers]) => pipe(leftovers, match2({
      onNone: () => foldEffectReader(nextS, contFn, f),
      onSome: (leftover) => pipe(write(leftover), as6(nextS))
    })))),
    onFailure: fail11,
    onDone: () => succeedNow(s)
  });
};
var foldChunkSplitEffect = (s, chunk3, contFn, f) => foldChunkSplitEffectInternal(s, chunk3, 0, chunk3.length, contFn, f);
var foldChunkSplitEffectInternal = (s, chunk3, index, length4, contFn, f) => {
  if (index === length4) {
    return succeed9([s, none2()]);
  }
  return pipe(f(s, pipe(chunk3, unsafeGet4(index))), flatMap11((s1) => contFn(s1) ? foldChunkSplitEffectInternal(s1, chunk3, index + 1, length4, contFn, f) : succeed9([s1, some2(pipe(chunk3, drop2(index + 1)))])));
};
var foldLeftChunks = (s, f) => foldChunks(s, constTrue, f);
var flatMap14 = /* @__PURE__ */ dual(2, (self, f) => foldSink(self, {
  onFailure: fail12,
  onSuccess: f
}));
var forEach11 = (f) => {
  const process2 = readWithCause({
    onInput: (input) => pipe(fromEffect4(forEach10(input, (v) => f(v), {
      discard: true
    })), flatMap13(() => process2)),
    onFailure: failCause10,
    onDone: () => void_6
  });
  return new SinkImpl(process2);
};
var forEachChunk = (f) => {
  const process2 = readWithCause({
    onInput: (input) => pipe(fromEffect4(f(input)), flatMap13(() => process2)),
    onFailure: failCause10,
    onDone: () => void_6
  });
  return new SinkImpl(process2);
};
var forEachWhile = (f) => {
  const process2 = readWithCause({
    onInput: (input) => forEachWhileReader(f, input, 0, input.length, process2),
    onFailure: failCause10,
    onDone: () => void_6
  });
  return new SinkImpl(process2);
};
var forEachWhileReader = (f, input, index, length4, cont) => {
  if (index === length4) {
    return cont;
  }
  return pipe(fromEffect4(f(pipe(input, unsafeGet4(index)))), flatMap13((bool) => bool ? forEachWhileReader(f, input, index + 1, length4, cont) : write(pipe(input, drop2(index)))), catchAll5((error) => pipe(write(pipe(input, drop2(index))), zipRight6(fail11(error)))));
};
var fromChannel = (channel) => new SinkImpl(channel);
var fromEffect6 = (effect4) => new SinkImpl(fromEffect4(effect4));
var head5 = () => fold(none2(), isNone2, (option3, input) => match2(option3, {
  onNone: () => some2(input),
  onSome: () => option3
}));
var last4 = () => foldLeftChunks(none2(), (s, input) => orElse(last2(input), () => s));
var map22 = /* @__PURE__ */ dual(2, (self, f) => {
  return new SinkImpl(pipe(toChannel(self), map21(f)));
});
var raceWith3 = /* @__PURE__ */ dual(2, (self, options) => {
  function race5(scope5) {
    return gen3(function* () {
      const pubsub = yield* bounded4(options?.capacity ?? 16);
      const subscription1 = yield* extend3(subscribe2(pubsub), scope5);
      const subscription2 = yield* extend3(subscribe2(pubsub), scope5);
      const reader = toPubSub(pubsub);
      const writer = fromQueue(subscription1).pipe(pipeTo(toChannel(self)), zipLeft5(fromEffect4(shutdown4(subscription1))), mergeWith2({
        other: fromQueue(subscription2).pipe(pipeTo(toChannel(options.other)), zipLeft5(fromEffect4(shutdown4(subscription2)))),
        onSelfDone: options.onSelfDone,
        onOtherDone: options.onOtherDone
      }));
      const racedChannel = mergeWith2(reader, {
        other: writer,
        onSelfDone: () => Await(identity),
        onOtherDone: (exit4) => Done3(exit4)
      });
      return new SinkImpl(racedChannel);
    });
  }
  return unwrapScopedWith2(race5);
});
var sum2 = /* @__PURE__ */ foldLeftChunks(0, (acc, chunk3) => acc + reduce3(chunk3, 0, (s, a) => s + a));
var toChannel = (self) => isEffect2(self) ? toChannel(fromEffect6(self)) : self.channel;
var unwrapScopedWith2 = (f) => new SinkImpl(unwrapScopedWith((scope5) => f(scope5).pipe(map19((sink) => toChannel(sink)))));
var zipRight7 = /* @__PURE__ */ dual((args2) => isSink(args2[1]), (self, that, options) => zipWith8(self, that, (_, z2) => z2, options));
var zipWith8 = /* @__PURE__ */ dual((args2) => isSink(args2[1]), (self, that, f, options) => options?.concurrent ? raceWith3(self, {
  other: that,
  onSelfDone: match6({
    onFailure: (cause3) => Done3(failCause8(cause3)),
    onSuccess: (leftZ) => Await(match6({
      onFailure: failCause8,
      onSuccess: (rightZ) => succeed9(f(leftZ, rightZ))
    }))
  }),
  onOtherDone: match6({
    onFailure: (cause3) => Done3(failCause8(cause3)),
    onSuccess: (rightZ) => Await(match6({
      onFailure: failCause8,
      onSuccess: (leftZ) => succeed9(f(leftZ, rightZ))
    }))
  })
}) : flatMap14(self, (z) => map22(that, (z2) => f(z, z2))));
var count = /* @__PURE__ */ foldLeftChunks(0, (acc, chunk3) => acc + chunk3.length);
var mkString = /* @__PURE__ */ suspend7(() => {
  const strings = [];
  return pipe(foldLeftChunks(void 0, (_, elems) => map5(elems, (elem) => {
    strings.push(String(elem));
  })), map22(() => strings.join("")));
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/MergeDecision.js
var Done4 = Done3;
var Await2 = Await;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/rcRef.js
var TypeId17 = /* @__PURE__ */ Symbol.for("effect/RcRef");
var stateEmpty2 = {
  _tag: "Empty"
};
var stateClosed = {
  _tag: "Closed"
};
var variance5 = {
  _A: identity,
  _E: identity
};
var RcRefImpl = class extends Class2 {
  acquire;
  context;
  scope;
  idleTimeToLive;
  [TypeId17] = variance5;
  [TypeId13] = TypeId13;
  state = stateEmpty2;
  semaphore = /* @__PURE__ */ unsafeMakeSemaphore(1);
  constructor(acquire, context7, scope5, idleTimeToLive) {
    super();
    this.acquire = acquire;
    this.context = context7;
    this.scope = scope5;
    this.idleTimeToLive = idleTimeToLive;
    this.get = get15(this);
  }
  get;
  commit() {
    return this.get;
  }
};
var make44 = (options) => withFiberRuntime((fiber) => {
  const context7 = fiber.getFiberRef(currentContext);
  const scope5 = get4(context7, scopeTag);
  const ref = new RcRefImpl(options.acquire, context7, scope5, options.idleTimeToLive ? decode(options.idleTimeToLive) : void 0);
  return as2(scope5.addFinalizer(() => ref.semaphore.withPermits(1)(suspend(() => {
    const close2 = ref.state._tag === "Acquired" ? scopeClose(ref.state.scope, exitVoid) : void_2;
    ref.state = stateClosed;
    return close2;
  }))), ref);
});
var get15 = (self_) => {
  const self = self_;
  return uninterruptibleMask((restore) => suspend(() => {
    switch (self.state._tag) {
      case "Closed": {
        return interrupt2;
      }
      case "Acquired": {
        self.state.refCount++;
        return self.state.fiber ? as2(interruptFiber(self.state.fiber), self.state) : succeed(self.state);
      }
      case "Empty": {
        return scopeMake().pipe(bindTo4("scope"), bind4("value", ({
          scope: scope5
        }) => restore(fiberRefLocally(self.acquire, currentContext, add2(self.context, scopeTag, scope5)))), map11(({
          scope: scope5,
          value
        }) => {
          const state = {
            _tag: "Acquired",
            value,
            scope: scope5,
            fiber: void 0,
            refCount: 1
          };
          self.state = state;
          return state;
        }));
      }
    }
  })).pipe(self.semaphore.withPermits(1), bindTo4("state"), bind4("scope", () => scopeTag), tap2(({
    scope: scope5,
    state
  }) => scope5.addFinalizer(() => suspend(() => {
    state.refCount--;
    if (state.refCount > 0) {
      return void_2;
    }
    if (self.idleTimeToLive === void 0) {
      self.state = stateEmpty2;
      return scopeClose(state.scope, exitVoid);
    }
    return sleep3(self.idleTimeToLive).pipe(interruptible2, zipRight2(suspend(() => {
      if (self.state._tag === "Acquired" && self.state.refCount === 0) {
        self.state = stateEmpty2;
        return scopeClose(state.scope, exitVoid);
      }
      return void_2;
    })), ensuring(sync(() => {
      state.fiber = void 0;
    })), forkIn(self.scope), tap2((fiber) => {
      state.fiber = fiber;
    }), self.semaphore.withPermits(1));
  }))), map11(({
    state
  }) => state.value));
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/RcRef.js
var make45 = make44;
var get16 = get15;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Runtime.js
var runFork3 = unsafeFork3;
var runSync2 = unsafeRunSync;
var runPromiseExit2 = unsafeRunPromiseExit;
var defaultRuntime2 = defaultRuntime;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Schedule.js
var driver2 = driver;
var forever4 = forever2;
var spaced2 = spaced;
var CurrentIterationMetadata2 = CurrentIterationMetadata;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/opCodes/streamHaltStrategy.js
var OP_LEFT = "Left";
var OP_RIGHT = "Right";
var OP_BOTH = "Both";
var OP_EITHER = "Either";

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stream/haltStrategy.js
var Left = {
  _tag: OP_LEFT
};
var Right = {
  _tag: OP_RIGHT
};
var Both = {
  _tag: OP_BOTH
};
var Either = {
  _tag: OP_EITHER
};
var fromInput2 = (input) => {
  switch (input) {
    case "left":
      return Left;
    case "right":
      return Right;
    case "both":
      return Both;
    case "either":
      return Either;
    default:
      return input;
  }
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/StreamHaltStrategy.js
var Both2 = Both;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stm/versioned.js
var Versioned = class {
  value;
  constructor(value) {
    this.value = value;
  }
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stm/entry.js
var make46 = (ref, isNew) => ({
  ref,
  isNew,
  isChanged: false,
  expected: ref.versioned,
  newValue: ref.versioned.value
});
var unsafeGet6 = (self) => {
  return self.newValue;
};
var unsafeSet = (self, value) => {
  self.isChanged = true;
  self.newValue = value;
};
var commit = (self) => {
  self.ref.versioned = new Versioned(self.newValue);
};
var isInvalid = (self) => {
  return self.ref.versioned !== self.expected;
};
var isChanged = (self) => {
  return self.isChanged;
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stm/journal.js
var JournalAnalysisInvalid = "Invalid";
var JournalAnalysisReadWrite = "ReadWrite";
var JournalAnalysisReadOnly = "ReadOnly";
var commitJournal = (journal) => {
  for (const entry of journal) {
    commit(entry[1]);
  }
};
var analyzeJournal = (journal) => {
  let val = JournalAnalysisReadOnly;
  for (const [, entry] of journal) {
    val = isInvalid(entry) ? JournalAnalysisInvalid : isChanged(entry) ? JournalAnalysisReadWrite : val;
    if (val === JournalAnalysisInvalid) {
      return val;
    }
  }
  return val;
};
var collectTodos = (journal) => {
  const allTodos = /* @__PURE__ */ new Map();
  for (const [, entry] of journal) {
    for (const todo of entry.ref.todos) {
      allTodos.set(todo[0], todo[1]);
    }
    entry.ref.todos = /* @__PURE__ */ new Map();
  }
  return allTodos;
};
var execTodos = (todos) => {
  const todosSorted = Array.from(todos.entries()).sort((x, y) => x[0] - y[0]);
  for (const [_, todo] of todosSorted) {
    todo();
  }
};
var addTodo = (txnId, journal, todoEffect) => {
  let added = false;
  for (const [, entry] of journal) {
    if (!entry.ref.todos.has(txnId)) {
      entry.ref.todos.set(txnId, todoEffect);
      added = true;
    }
  }
  return added;
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stm/opCodes/stm.js
var OP_WITH_STM_RUNTIME = "WithSTMRuntime";
var OP_ON_FAILURE2 = "OnFailure";
var OP_ON_RETRY = "OnRetry";
var OP_ON_SUCCESS2 = "OnSuccess";
var OP_PROVIDE3 = "Provide";
var OP_SYNC2 = "Sync";
var OP_SUCCEED2 = "Succeed";
var OP_RETRY = "Retry";
var OP_FAIL4 = "Fail";
var OP_DIE2 = "Die";
var OP_INTERRUPT2 = "Interrupt";

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stm/opCodes/tExit.js
var OP_FAIL5 = "Fail";
var OP_DIE3 = "Die";
var OP_INTERRUPT3 = "Interrupt";
var OP_SUCCEED3 = "Succeed";
var OP_RETRY2 = "Retry";

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stm/opCodes/tryCommit.js
var OP_DONE5 = "Done";
var OP_SUSPEND3 = "Suspend";

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stm/opCodes/stmState.js
var OP_DONE6 = "Done";
var OP_INTERRUPTED = "Interrupted";
var OP_RUNNING2 = "Running";

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stm/stmState.js
var STMStateSymbolKey = "effect/STM/State";
var STMStateTypeId = /* @__PURE__ */ Symbol.for(STMStateSymbolKey);
var isSTMState = (u) => hasProperty(u, STMStateTypeId);
var isRunning2 = (self) => {
  return self._tag === OP_RUNNING2;
};
var isDone6 = (self) => {
  return self._tag === OP_DONE6;
};
var done8 = (exit4) => {
  return {
    [STMStateTypeId]: STMStateTypeId,
    _tag: OP_DONE6,
    exit: exit4,
    [symbol]() {
      return pipe(hash(STMStateSymbolKey), combine(hash(OP_DONE6)), combine(hash(exit4)), cached(this));
    },
    [symbol2](that) {
      return isSTMState(that) && that._tag === OP_DONE6 && equals(exit4, that.exit);
    }
  };
};
var interruptedHash = /* @__PURE__ */ pipe(/* @__PURE__ */ hash(STMStateSymbolKey), /* @__PURE__ */ combine(/* @__PURE__ */ hash(OP_INTERRUPTED)), /* @__PURE__ */ combine(/* @__PURE__ */ hash("interrupted")));
var interrupted2 = {
  [STMStateTypeId]: STMStateTypeId,
  _tag: OP_INTERRUPTED,
  [symbol]() {
    return interruptedHash;
  },
  [symbol2](that) {
    return isSTMState(that) && that._tag === OP_INTERRUPTED;
  }
};
var runningHash = /* @__PURE__ */ pipe(/* @__PURE__ */ hash(STMStateSymbolKey), /* @__PURE__ */ combine(/* @__PURE__ */ hash(OP_RUNNING2)), /* @__PURE__ */ combine(/* @__PURE__ */ hash("running")));
var running3 = {
  [STMStateTypeId]: STMStateTypeId,
  _tag: OP_RUNNING2,
  [symbol]() {
    return runningHash;
  },
  [symbol2](that) {
    return isSTMState(that) && that._tag === OP_RUNNING2;
  }
};
var fromTExit = (tExit) => {
  switch (tExit._tag) {
    case OP_FAIL5: {
      return done8(fail4(tExit.error));
    }
    case OP_DIE3: {
      return done8(die3(tExit.defect));
    }
    case OP_INTERRUPT3: {
      return done8(interrupt4(tExit.fiberId));
    }
    case OP_SUCCEED3: {
      return done8(succeed3(tExit.value));
    }
    case OP_RETRY2: {
      throw new Error("BUG: STM.STMState.fromTExit - please report an issue at https://github.com/Effect-TS/effect/issues");
    }
  }
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stm/tExit.js
var TExitSymbolKey = "effect/TExit";
var TExitTypeId = /* @__PURE__ */ Symbol.for(TExitSymbolKey);
var variance6 = {
  /* c8 ignore next */
  _A: (_) => _,
  /* c8 ignore next */
  _E: (_) => _
};
var isExit2 = (u) => hasProperty(u, TExitTypeId);
var isSuccess4 = (self) => {
  return self._tag === OP_SUCCEED3;
};
var isRetry = (self) => {
  return self._tag === OP_RETRY2;
};
var fail13 = (error) => ({
  [TExitTypeId]: variance6,
  _tag: OP_FAIL5,
  error,
  [symbol]() {
    return pipe(hash(TExitSymbolKey), combine(hash(OP_FAIL5)), combine(hash(error)), cached(this));
  },
  [symbol2](that) {
    return isExit2(that) && that._tag === OP_FAIL5 && equals(error, that.error);
  }
});
var die8 = (defect) => ({
  [TExitTypeId]: variance6,
  _tag: OP_DIE3,
  defect,
  [symbol]() {
    return pipe(hash(TExitSymbolKey), combine(hash(OP_DIE3)), combine(hash(defect)), cached(this));
  },
  [symbol2](that) {
    return isExit2(that) && that._tag === OP_DIE3 && equals(defect, that.defect);
  }
});
var interrupt8 = (fiberId3) => ({
  [TExitTypeId]: variance6,
  _tag: OP_INTERRUPT3,
  fiberId: fiberId3,
  [symbol]() {
    return pipe(hash(TExitSymbolKey), combine(hash(OP_INTERRUPT3)), combine(hash(fiberId3)), cached(this));
  },
  [symbol2](that) {
    return isExit2(that) && that._tag === OP_INTERRUPT3 && equals(fiberId3, that.fiberId);
  }
});
var succeed13 = (value) => ({
  [TExitTypeId]: variance6,
  _tag: OP_SUCCEED3,
  value,
  [symbol]() {
    return pipe(hash(TExitSymbolKey), combine(hash(OP_SUCCEED3)), combine(hash(value)), cached(this));
  },
  [symbol2](that) {
    return isExit2(that) && that._tag === OP_SUCCEED3 && equals(value, that.value);
  }
});
var retryHash = /* @__PURE__ */ pipe(/* @__PURE__ */ hash(TExitSymbolKey), /* @__PURE__ */ combine(/* @__PURE__ */ hash(OP_RETRY2)), /* @__PURE__ */ combine(/* @__PURE__ */ hash("retry")));
var retry4 = {
  [TExitTypeId]: variance6,
  _tag: OP_RETRY2,
  [symbol]() {
    return retryHash;
  },
  [symbol2](that) {
    return isExit2(that) && isRetry(that);
  }
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stm/tryCommit.js
var done9 = (exit4) => {
  return {
    _tag: OP_DONE5,
    exit: exit4
  };
};
var suspend8 = (journal) => {
  return {
    _tag: OP_SUSPEND3,
    journal
  };
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stm/txnId.js
var txnCounter = {
  ref: 0
};
var make47 = () => {
  const newId = txnCounter.ref + 1;
  txnCounter.ref = newId;
  return newId;
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stm/core.js
var STMSymbolKey2 = "effect/STM";
var STMTypeId2 = /* @__PURE__ */ Symbol.for(STMSymbolKey2);
var stmVariance = {
  /* c8 ignore next */
  _R: (_) => _,
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _A: (_) => _
};
var STMPrimitive = class {
  effect_instruction_i0;
  _op = OP_COMMIT;
  effect_instruction_i1 = void 0;
  effect_instruction_i2 = void 0;
  [EffectTypeId3];
  [StreamTypeId];
  [SinkTypeId2];
  [ChannelTypeId2];
  get [STMTypeId2]() {
    return stmVariance;
  }
  constructor(effect_instruction_i0) {
    this.effect_instruction_i0 = effect_instruction_i0;
    this[EffectTypeId3] = effectVariance;
    this[StreamTypeId] = stmVariance;
    this[SinkTypeId2] = stmVariance;
    this[ChannelTypeId2] = stmVariance;
  }
  [symbol2](that) {
    return this === that;
  }
  [symbol]() {
    return cached(this, random(this));
  }
  [Symbol.iterator]() {
    return new SingleShotGen2(new YieldWrap(this));
  }
  commit() {
    return unsafeAtomically(this);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var unsafeAtomically = (self, onDone3, onInterrupt3) => withFiberRuntime((state) => {
  const fiberId3 = state.id();
  const env = state.getFiberRef(currentContext2);
  const scheduler = state.getFiberRef(currentScheduler2);
  const priority = state.getFiberRef(currentSchedulingPriority2);
  const commitResult = tryCommitSync(fiberId3, self, env, scheduler, priority);
  switch (commitResult._tag) {
    case OP_DONE5: {
      return commitResult.exit;
    }
    case OP_SUSPEND3: {
      const txnId = make47();
      const state2 = {
        value: running3
      };
      const effect4 = async2((k) => tryCommitAsync(fiberId3, self, txnId, state2, env, scheduler, priority, k));
      return uninterruptibleMask3((restore) => pipe(restore(effect4), catchAllCause3((cause3) => {
        let currentState = state2.value;
        if (isRunning2(currentState)) {
          state2.value = interrupted2;
        }
        currentState = state2.value;
        if (isDone6(currentState)) {
          return currentState.exit;
        }
        return failCause8(cause3);
      })));
    }
  }
});
var tryCommit = (fiberId3, stm, state, env, scheduler, priority) => {
  const journal = /* @__PURE__ */ new Map();
  const tExit = new STMDriver(stm, journal, fiberId3, env).run();
  const analysis = analyzeJournal(journal);
  if (analysis === JournalAnalysisReadWrite) {
    commitJournal(journal);
  } else if (analysis === JournalAnalysisInvalid) {
    throw new Error("BUG: STM.TryCommit.tryCommit - please report an issue at https://github.com/Effect-TS/effect/issues");
  }
  switch (tExit._tag) {
    case OP_SUCCEED3: {
      state.value = fromTExit(tExit);
      return completeTodos(succeed3(tExit.value), journal, scheduler, priority);
    }
    case OP_FAIL5: {
      state.value = fromTExit(tExit);
      const cause3 = fail5(tExit.error);
      return completeTodos(failCause3(cause3), journal, scheduler, priority);
    }
    case OP_DIE3: {
      state.value = fromTExit(tExit);
      const cause3 = die4(tExit.defect);
      return completeTodos(failCause3(cause3), journal, scheduler, priority);
    }
    case OP_INTERRUPT3: {
      state.value = fromTExit(tExit);
      const cause3 = interrupt5(fiberId3);
      return completeTodos(failCause3(cause3), journal, scheduler, priority);
    }
    case OP_RETRY2: {
      return suspend8(journal);
    }
  }
};
var tryCommitSync = (fiberId3, stm, env, scheduler, priority) => {
  const journal = /* @__PURE__ */ new Map();
  const tExit = new STMDriver(stm, journal, fiberId3, env).run();
  const analysis = analyzeJournal(journal);
  if (analysis === JournalAnalysisReadWrite && isSuccess4(tExit)) {
    commitJournal(journal);
  } else if (analysis === JournalAnalysisInvalid) {
    throw new Error("BUG: STM.TryCommit.tryCommitSync - please report an issue at https://github.com/Effect-TS/effect/issues");
  }
  switch (tExit._tag) {
    case OP_SUCCEED3: {
      return completeTodos(succeed3(tExit.value), journal, scheduler, priority);
    }
    case OP_FAIL5: {
      const cause3 = fail5(tExit.error);
      return completeTodos(failCause3(cause3), journal, scheduler, priority);
    }
    case OP_DIE3: {
      const cause3 = die4(tExit.defect);
      return completeTodos(failCause3(cause3), journal, scheduler, priority);
    }
    case OP_INTERRUPT3: {
      const cause3 = interrupt5(fiberId3);
      return completeTodos(failCause3(cause3), journal, scheduler, priority);
    }
    case OP_RETRY2: {
      return suspend8(journal);
    }
  }
};
var tryCommitAsync = (fiberId3, self, txnId, state, context7, scheduler, priority, k) => {
  if (isRunning2(state.value)) {
    const result = tryCommit(fiberId3, self, state, context7, scheduler, priority);
    switch (result._tag) {
      case OP_DONE5: {
        completeTryCommit(result.exit, k);
        break;
      }
      case OP_SUSPEND3: {
        addTodo(txnId, result.journal, () => tryCommitAsync(fiberId3, self, txnId, state, context7, scheduler, priority, k));
        break;
      }
    }
  }
};
var completeTodos = (exit4, journal, scheduler, priority) => {
  const todos = collectTodos(journal);
  if (todos.size > 0) {
    scheduler.scheduleTask(() => execTodos(todos), priority);
  }
  return done9(exit4);
};
var completeTryCommit = (exit4, k) => {
  k(exit4);
};
var STMDriver = class {
  self;
  journal;
  fiberId;
  contStack = [];
  env;
  constructor(self, journal, fiberId3, r0) {
    this.self = self;
    this.journal = journal;
    this.fiberId = fiberId3;
    this.env = r0;
  }
  getEnv() {
    return this.env;
  }
  pushStack(cont) {
    this.contStack.push(cont);
  }
  popStack() {
    return this.contStack.pop();
  }
  nextSuccess() {
    let current2 = this.popStack();
    while (current2 !== void 0 && current2.effect_instruction_i0 !== OP_ON_SUCCESS2) {
      current2 = this.popStack();
    }
    return current2;
  }
  nextFailure() {
    let current2 = this.popStack();
    while (current2 !== void 0 && current2.effect_instruction_i0 !== OP_ON_FAILURE2) {
      current2 = this.popStack();
    }
    return current2;
  }
  nextRetry() {
    let current2 = this.popStack();
    while (current2 !== void 0 && current2.effect_instruction_i0 !== OP_ON_RETRY) {
      current2 = this.popStack();
    }
    return current2;
  }
  run() {
    let curr = this.self;
    let exit4 = void 0;
    while (exit4 === void 0 && curr !== void 0) {
      try {
        const current2 = curr;
        if (current2) {
          switch (current2._op) {
            case "Tag": {
              curr = effect3((_, __, env) => unsafeGet3(env, current2));
              break;
            }
            case "Left": {
              curr = fail14(current2.left);
              break;
            }
            case "None": {
              curr = fail14(new NoSuchElementException2());
              break;
            }
            case "Right": {
              curr = succeed14(current2.right);
              break;
            }
            case "Some": {
              curr = succeed14(current2.value);
              break;
            }
            case "Commit": {
              switch (current2.effect_instruction_i0) {
                case OP_DIE2: {
                  exit4 = die8(internalCall(() => current2.effect_instruction_i1()));
                  break;
                }
                case OP_FAIL4: {
                  const cont = this.nextFailure();
                  if (cont === void 0) {
                    exit4 = fail13(internalCall(() => current2.effect_instruction_i1()));
                  } else {
                    curr = internalCall(() => cont.effect_instruction_i2(internalCall(() => current2.effect_instruction_i1())));
                  }
                  break;
                }
                case OP_RETRY: {
                  const cont = this.nextRetry();
                  if (cont === void 0) {
                    exit4 = retry4;
                  } else {
                    curr = internalCall(() => cont.effect_instruction_i2());
                  }
                  break;
                }
                case OP_INTERRUPT2: {
                  exit4 = interrupt8(this.fiberId);
                  break;
                }
                case OP_WITH_STM_RUNTIME: {
                  curr = internalCall(() => current2.effect_instruction_i1(this));
                  break;
                }
                case OP_ON_SUCCESS2:
                case OP_ON_FAILURE2:
                case OP_ON_RETRY: {
                  this.pushStack(current2);
                  curr = current2.effect_instruction_i1;
                  break;
                }
                case OP_PROVIDE3: {
                  const env = this.env;
                  this.env = internalCall(() => current2.effect_instruction_i2(env));
                  curr = pipe(current2.effect_instruction_i1, ensuring5(sync9(() => this.env = env)));
                  break;
                }
                case OP_SUCCEED2: {
                  const value = current2.effect_instruction_i1;
                  const cont = this.nextSuccess();
                  if (cont === void 0) {
                    exit4 = succeed13(value);
                  } else {
                    curr = internalCall(() => cont.effect_instruction_i2(value));
                  }
                  break;
                }
                case OP_SYNC2: {
                  const value = internalCall(() => current2.effect_instruction_i1());
                  const cont = this.nextSuccess();
                  if (cont === void 0) {
                    exit4 = succeed13(value);
                  } else {
                    curr = internalCall(() => cont.effect_instruction_i2(value));
                  }
                  break;
                }
              }
              break;
            }
          }
        }
      } catch (e) {
        curr = die9(e);
      }
    }
    return exit4;
  }
};
var catchAll6 = /* @__PURE__ */ dual(2, (self, f) => {
  const stm = new STMPrimitive(OP_ON_FAILURE2);
  stm.effect_instruction_i1 = self;
  stm.effect_instruction_i2 = f;
  return stm;
});
var die9 = (defect) => dieSync5(() => defect);
var dieSync5 = (evaluate3) => {
  const stm = new STMPrimitive(OP_DIE2);
  stm.effect_instruction_i1 = evaluate3;
  return stm;
};
var effect3 = (f) => withSTMRuntime((_) => succeed14(f(_.journal, _.fiberId, _.getEnv())));
var ensuring5 = /* @__PURE__ */ dual(2, (self, finalizer3) => matchSTM(self, {
  onFailure: (e) => zipRight9(finalizer3, fail14(e)),
  onSuccess: (a) => zipRight9(finalizer3, succeed14(a))
}));
var fail14 = (error) => failSync6(() => error);
var failSync6 = (evaluate3) => {
  const stm = new STMPrimitive(OP_FAIL4);
  stm.effect_instruction_i1 = evaluate3;
  return stm;
};
var flatMap15 = /* @__PURE__ */ dual(2, (self, f) => {
  const stm = new STMPrimitive(OP_ON_SUCCESS2);
  stm.effect_instruction_i1 = self;
  stm.effect_instruction_i2 = f;
  return stm;
});
var matchSTM = /* @__PURE__ */ dual(2, (self, {
  onFailure,
  onSuccess
}) => pipe(self, map23(right2), catchAll6((e) => pipe(onFailure(e), map23(left2))), flatMap15((either7) => {
  switch (either7._tag) {
    case "Left": {
      return succeed14(either7.left);
    }
    case "Right": {
      return onSuccess(either7.right);
    }
  }
})));
var withSTMRuntime = (f) => {
  const stm = new STMPrimitive(OP_WITH_STM_RUNTIME);
  stm.effect_instruction_i1 = f;
  return stm;
};
var interruptAs2 = (fiberId3) => {
  const stm = new STMPrimitive(OP_INTERRUPT2);
  stm.effect_instruction_i1 = fiberId3;
  return stm;
};
var map23 = /* @__PURE__ */ dual(2, (self, f) => pipe(self, flatMap15((a) => sync9(() => f(a)))));
var retry5 = /* @__PURE__ */ new STMPrimitive(OP_RETRY);
var succeed14 = (value) => {
  const stm = new STMPrimitive(OP_SUCCEED2);
  stm.effect_instruction_i1 = value;
  return stm;
};
var sync9 = (evaluate3) => {
  const stm = new STMPrimitive(OP_SYNC2);
  stm.effect_instruction_i1 = evaluate3;
  return stm;
};
var zipRight9 = /* @__PURE__ */ dual(2, (self, that) => pipe(self, flatMap15(() => that)));
var zipWith10 = /* @__PURE__ */ dual(3, (self, that, f) => pipe(self, flatMap15((a) => pipe(that, map23((b) => f(a, b))))));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stm/stm.js
var as8 = /* @__PURE__ */ dual(2, (self, value) => pipe(self, map23(() => value)));
var flatten13 = (self) => flatMap15(self, identity);
var forEach12 = /* @__PURE__ */ dual((args2) => isIterable(args2[0]), (iterable, f, options) => {
  if (options?.discard) {
    return pipe(sync9(() => iterable[Symbol.iterator]()), flatMap15((iterator) => {
      const loop3 = suspend9(() => {
        const next = iterator.next();
        if (next.done) {
          return void_7;
        }
        return pipe(f(next.value), flatMap15(() => loop3));
      });
      return loop3;
    }));
  }
  return suspend9(() => fromIterable2(iterable).reduce((acc, curr) => zipWith10(acc, f(curr), (array4, elem) => {
    array4.push(elem);
    return array4;
  }), succeed14([])));
});
var all5 = (input, options) => {
  if (Symbol.iterator in input) {
    return forEach12(input, identity, options);
  }
  return map23(forEach12(Object.entries(input), ([_, e]) => map23(e, (a) => [_, a])), (values4) => {
    const res = {};
    for (const [k, v] of values4) {
      res[k] = v;
    }
    return res;
  });
};
var suspend9 = (evaluate3) => flatten13(sync9(evaluate3));
var tap6 = /* @__PURE__ */ dual(2, (self, f) => flatMap15(self, (a) => as8(f(a), a)));
var void_7 = /* @__PURE__ */ succeed14(void 0);

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stm/tRef.js
var TRefSymbolKey = "effect/TRef";
var TRefTypeId = /* @__PURE__ */ Symbol.for(TRefSymbolKey);
var tRefVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
var TRefImpl = class {
  [TRefTypeId] = tRefVariance;
  /** @internal */
  todos;
  /** @internal */
  versioned;
  constructor(value) {
    this.versioned = new Versioned(value);
    this.todos = /* @__PURE__ */ new Map();
  }
  modify(f) {
    return effect3((journal) => {
      const entry = getOrMakeEntry(this, journal);
      const [retValue, newValue] = f(unsafeGet6(entry));
      unsafeSet(entry, newValue);
      return retValue;
    });
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var make48 = (value) => effect3((journal) => {
  const ref = new TRefImpl(value);
  journal.set(ref, make46(ref, true));
  return ref;
});
var get17 = (self) => self.modify((a) => [a, a]);
var set8 = /* @__PURE__ */ dual(2, (self, value) => self.modify(() => [void 0, value]));
var getOrMakeEntry = (self, journal) => {
  if (journal.has(self)) {
    return journal.get(self);
  }
  const entry = make46(self, false);
  journal.set(self, entry);
  return entry;
};
var unsafeGet7 = /* @__PURE__ */ dual(2, (self, journal) => unsafeGet6(getOrMakeEntry(self, journal)));
var unsafeSet2 = /* @__PURE__ */ dual(3, (self, value, journal) => {
  const entry = getOrMakeEntry(self, journal);
  unsafeSet(entry, value);
  return void 0;
});
var TDequeueSymbolKey = "effect/TQueue/TDequeue";
var TDequeueTypeId = /* @__PURE__ */ Symbol.for(TDequeueSymbolKey);
var tDequeueVariance = {
  /* c8 ignore next */
  _Out: (_) => _
};
var isShutdown4 = (self) => self.isShutdown;
var shutdown5 = (self) => self.shutdown;
var take5 = (self) => self.take;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stm/tPubSub.js
var TPubSubSymbolKey = "effect/TPubSub";
var TPubSubTypeId = /* @__PURE__ */ Symbol.for(TPubSubSymbolKey);
var AbsentValue2 = /* @__PURE__ */ Symbol.for("effect/TPubSub/AbsentValue");
var makeNode2 = (head6, subscribers, tail2) => ({
  head: head6,
  subscribers,
  tail: tail2
});
var TPubSubSubscriptionImpl = class {
  pubsubSize;
  publisherHead;
  requestedCapacity;
  subscriberHead;
  subscriberCount;
  subscribers;
  [TPubSubTypeId] = TPubSubTypeId;
  [TDequeueTypeId] = tDequeueVariance;
  constructor(pubsubSize, publisherHead, requestedCapacity, subscriberHead, subscriberCount, subscribers) {
    this.pubsubSize = pubsubSize;
    this.publisherHead = publisherHead;
    this.requestedCapacity = requestedCapacity;
    this.subscriberHead = subscriberHead;
    this.subscriberCount = subscriberCount;
    this.subscribers = subscribers;
  }
  isShutdown = /* @__PURE__ */ effect3((journal) => {
    const currentSubscriberHead = unsafeGet7(this.subscriberHead, journal);
    return currentSubscriberHead === void 0;
  });
  awaitShutdown = /* @__PURE__ */ flatMap15(this.isShutdown, (isShutdown7) => isShutdown7 ? void_7 : retry5);
  capacity() {
    return this.requestedCapacity;
  }
  size = /* @__PURE__ */ withSTMRuntime((runtime5) => {
    let currentSubscriberHead = unsafeGet7(this.subscriberHead, runtime5.journal);
    if (currentSubscriberHead === void 0) {
      return interruptAs2(runtime5.fiberId);
    }
    let loop3 = true;
    let size17 = 0;
    while (loop3) {
      const node = unsafeGet7(currentSubscriberHead, runtime5.journal);
      if (node === void 0) {
        loop3 = false;
      } else {
        const head6 = node.head;
        const tail2 = node.tail;
        if (head6 !== AbsentValue2) {
          size17 = size17 + 1;
          if (size17 >= Number.MAX_SAFE_INTEGER) {
            loop3 = false;
          }
        }
        currentSubscriberHead = tail2;
      }
    }
    return succeed14(size17);
  });
  isEmpty = /* @__PURE__ */ map23(this.size, (size17) => size17 === 0);
  isFull = /* @__PURE__ */ map23(this.size, (size17) => size17 === this.capacity());
  peek = /* @__PURE__ */ withSTMRuntime((runtime5) => {
    let currentSubscriberHead = unsafeGet7(this.subscriberHead, runtime5.journal);
    if (currentSubscriberHead === void 0) {
      return interruptAs2(runtime5.fiberId);
    }
    let value = AbsentValue2;
    let loop3 = true;
    while (loop3) {
      const node = unsafeGet7(currentSubscriberHead, runtime5.journal);
      if (node === void 0) {
        return retry5;
      }
      const head6 = node.head;
      const tail2 = node.tail;
      if (head6 !== AbsentValue2) {
        value = head6;
        loop3 = false;
      } else {
        currentSubscriberHead = tail2;
      }
    }
    return succeed14(value);
  });
  peekOption = /* @__PURE__ */ withSTMRuntime((runtime5) => {
    let currentSubscriberHead = unsafeGet7(this.subscriberHead, runtime5.journal);
    if (currentSubscriberHead === void 0) {
      return interruptAs2(runtime5.fiberId);
    }
    let value = none2();
    let loop3 = true;
    while (loop3) {
      const node = unsafeGet7(currentSubscriberHead, runtime5.journal);
      if (node === void 0) {
        value = none2();
        loop3 = false;
      } else {
        const head6 = node.head;
        const tail2 = node.tail;
        if (head6 !== AbsentValue2) {
          value = some2(head6);
          loop3 = false;
        } else {
          currentSubscriberHead = tail2;
        }
      }
    }
    return succeed14(value);
  });
  shutdown = /* @__PURE__ */ effect3((journal) => {
    let currentSubscriberHead = unsafeGet7(this.subscriberHead, journal);
    if (currentSubscriberHead !== void 0) {
      unsafeSet2(this.subscriberHead, void 0, journal);
      let loop3 = true;
      while (loop3) {
        const node = unsafeGet7(currentSubscriberHead, journal);
        if (node === void 0) {
          loop3 = false;
        } else {
          const head6 = node.head;
          const tail2 = node.tail;
          if (head6 !== AbsentValue2) {
            const subscribers = node.subscribers;
            if (subscribers === 1) {
              const size17 = unsafeGet7(this.pubsubSize, journal);
              const updatedNode = makeNode2(AbsentValue2, 0, tail2);
              unsafeSet2(currentSubscriberHead, updatedNode, journal);
              unsafeSet2(this.publisherHead, tail2, journal);
              unsafeSet2(this.pubsubSize, size17 - 1, journal);
            } else {
              const updatedNode = makeNode2(head6, subscribers - 1, tail2);
              unsafeSet2(currentSubscriberHead, updatedNode, journal);
            }
          }
          currentSubscriberHead = tail2;
        }
      }
      const currentSubscriberCount = unsafeGet7(this.subscriberCount, journal);
      unsafeSet2(this.subscriberCount, currentSubscriberCount - 1, journal);
      unsafeSet2(this.subscribers, remove5(unsafeGet7(this.subscribers, journal), this.subscriberHead), journal);
    }
  });
  take = /* @__PURE__ */ withSTMRuntime((runtime5) => {
    let currentSubscriberHead = unsafeGet7(this.subscriberHead, runtime5.journal);
    if (currentSubscriberHead === void 0) {
      return interruptAs2(runtime5.fiberId);
    }
    let value = AbsentValue2;
    let loop3 = true;
    while (loop3) {
      const node = unsafeGet7(currentSubscriberHead, runtime5.journal);
      if (node === void 0) {
        return retry5;
      }
      const head6 = node.head;
      const tail2 = node.tail;
      if (head6 !== AbsentValue2) {
        const subscribers = node.subscribers;
        if (subscribers === 1) {
          const size17 = unsafeGet7(this.pubsubSize, runtime5.journal);
          const updatedNode = makeNode2(AbsentValue2, 0, tail2);
          unsafeSet2(currentSubscriberHead, updatedNode, runtime5.journal);
          unsafeSet2(this.publisherHead, tail2, runtime5.journal);
          unsafeSet2(this.pubsubSize, size17 - 1, runtime5.journal);
        } else {
          const updatedNode = makeNode2(head6, subscribers - 1, tail2);
          unsafeSet2(currentSubscriberHead, updatedNode, runtime5.journal);
        }
        unsafeSet2(this.subscriberHead, tail2, runtime5.journal);
        value = head6;
        loop3 = false;
      } else {
        currentSubscriberHead = tail2;
      }
    }
    return succeed14(value);
  });
  takeAll = /* @__PURE__ */ this.takeUpTo(Number.POSITIVE_INFINITY);
  takeUpTo(max6) {
    return withSTMRuntime((runtime5) => {
      let currentSubscriberHead = unsafeGet7(this.subscriberHead, runtime5.journal);
      if (currentSubscriberHead === void 0) {
        return interruptAs2(runtime5.fiberId);
      }
      const builder = [];
      let n = 0;
      while (n !== max6) {
        const node = unsafeGet7(currentSubscriberHead, runtime5.journal);
        if (node === void 0) {
          n = max6;
        } else {
          const head6 = node.head;
          const tail2 = node.tail;
          if (head6 !== AbsentValue2) {
            const subscribers = node.subscribers;
            if (subscribers === 1) {
              const size17 = unsafeGet7(this.pubsubSize, runtime5.journal);
              const updatedNode = makeNode2(AbsentValue2, 0, tail2);
              unsafeSet2(currentSubscriberHead, updatedNode, runtime5.journal);
              unsafeSet2(this.publisherHead, tail2, runtime5.journal);
              unsafeSet2(this.pubsubSize, size17 - 1, runtime5.journal);
            } else {
              const updatedNode = makeNode2(head6, subscribers - 1, tail2);
              unsafeSet2(currentSubscriberHead, updatedNode, runtime5.journal);
            }
            builder.push(head6);
            n = n + 1;
          }
          currentSubscriberHead = tail2;
        }
      }
      unsafeSet2(this.subscriberHead, currentSubscriberHead, runtime5.journal);
      return succeed14(builder);
    });
  }
};
var makeSubscription2 = (pubsubSize, publisherHead, publisherTail, requestedCapacity, subscriberCount, subscribers) => pipe(get17(publisherTail), flatMap15((currentPublisherTail) => pipe(all5([make48(currentPublisherTail), get17(subscriberCount), get17(subscribers)]), tap6(([_, currentSubscriberCount]) => pipe(subscriberCount, set8(currentSubscriberCount + 1))), tap6(([subscriberHead, _, currentSubscribers]) => pipe(subscribers, set8(pipe(currentSubscribers, add4(subscriberHead))))), map23(([subscriberHead]) => new TPubSubSubscriptionImpl(pubsubSize, publisherHead, requestedCapacity, subscriberHead, subscriberCount, subscribers)))));
var subscribe3 = (self) => makeSubscription2(self.pubsubSize, self.publisherHead, self.publisherTail, self.requestedCapacity, self.subscriberCount, self.subscribers);
var subscribeScoped = (self) => acquireRelease2(subscribe3(self), (dequeue) => shutdown5(dequeue));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/TPubSub.js
var subscribeScoped2 = subscribeScoped;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/TQueue.js
var isShutdown6 = isShutdown4;
var take6 = take5;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/ringBuffer.js
var RingBuffer = class {
  capacity;
  array;
  size = 0;
  current = 0;
  constructor(capacity7) {
    this.capacity = capacity7;
    this.array = Array.from({
      length: capacity7
    }, constUndefined);
  }
  head() {
    return fromNullable(this.array[this.current]);
  }
  lastOrNull() {
    if (this.size === 0) {
      return void 0;
    }
    const index = this.current === 0 ? this.array.length - 1 : this.current - 1;
    return this.array[index] ?? void 0;
  }
  put(value) {
    this.array[this.current] = value;
    this.increment();
  }
  dropLast() {
    if (this.size > 0) {
      this.decrement();
      this.array[this.current] = void 0;
    }
  }
  toChunk() {
    const begin = this.current - this.size;
    const newArray = begin < 0 ? [...this.array.slice(this.capacity + begin, this.capacity), ...this.array.slice(0, this.current)] : this.array.slice(begin, this.current);
    return fromIterable3(newArray);
  }
  increment() {
    if (this.size < this.capacity) {
      this.size += 1;
    }
    this.current = (this.current + 1) % this.capacity;
  }
  decrement() {
    this.size -= 1;
    if (this.current > 0) {
      this.current -= 1;
    } else {
      this.current = this.capacity - 1;
    }
  }
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stream/debounceState.js
var OP_NOT_STARTED = "NotStarted";
var OP_PREVIOUS = "Previous";
var OP_CURRENT = "Current";
var notStarted = {
  _tag: OP_NOT_STARTED
};
var previous = (fiber) => ({
  _tag: OP_PREVIOUS,
  fiber
});
var current = (fiber) => ({
  _tag: OP_CURRENT,
  fiber
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stream/emit.js
var make49 = (emit2) => {
  const ops = {
    chunk(as11) {
      return this(succeed9(as11));
    },
    die(defect) {
      return this(die6(defect));
    },
    dieMessage(message) {
      return this(dieMessage2(message));
    },
    done(exit4) {
      return this(suspend4(() => mapBoth3(exit4, {
        onFailure: some2,
        onSuccess: of2
      })));
    },
    end() {
      return this(fail9(none2()));
    },
    fail(e) {
      return this(fail9(some2(e)));
    },
    fromEffect(effect4) {
      return this(mapBoth4(effect4, {
        onFailure: some2,
        onSuccess: of2
      }));
    },
    fromEffectChunk(effect4) {
      return this(pipe(effect4, mapError3(some2)));
    },
    halt(cause3) {
      return this(failCause8(pipe(cause3, map15(some2))));
    },
    single(value) {
      return this(succeed9(of2(value)));
    }
  };
  return Object.assign(emit2, ops);
};
var makePush = (queue, scheduler) => {
  let finished = false;
  let buffer3 = [];
  let running4 = false;
  function array4(items) {
    if (finished) return false;
    if (items.length <= 5e4) {
      buffer3.push.apply(buffer3, items);
    } else {
      for (let i = 0; i < items.length; i++) {
        buffer3.push(items[0]);
      }
    }
    if (!running4) {
      running4 = true;
      scheduler.scheduleTask(flush, 0);
    }
    return true;
  }
  function flush() {
    running4 = false;
    if (buffer3.length > 0) {
      queue.unsafeOffer(buffer3);
      buffer3 = [];
    }
  }
  function done11(exit4) {
    if (finished) return;
    finished = true;
    if (exit4._tag === "Success") {
      buffer3.push(exit4.value);
    }
    flush();
    queue.unsafeOffer(exit4._tag === "Success" ? void_3 : exit4);
  }
  return {
    single(value) {
      if (finished) return false;
      buffer3.push(value);
      if (!running4) {
        running4 = true;
        scheduler.scheduleTask(flush, 0);
      }
      return true;
    },
    array: array4,
    chunk(chunk3) {
      return array4(toReadonlyArray(chunk3));
    },
    done: done11,
    end() {
      if (finished) return;
      finished = true;
      flush();
      queue.unsafeOffer(void_3);
    },
    halt(cause3) {
      return done11(failCause3(cause3));
    },
    fail(error) {
      return done11(fail4(error));
    },
    die(defect) {
      return done11(die3(defect));
    },
    dieMessage(message) {
      return done11(die3(new Error(message)));
    }
  };
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stream/handoff.js
var HandoffTypeId = /* @__PURE__ */ Symbol.for("effect/Stream/Handoff");
var OP_HANDOFF_STATE_EMPTY = "Empty";
var OP_HANDOFF_STATE_FULL = "Full";
var handoffStateEmpty = (notifyConsumer) => ({
  _tag: OP_HANDOFF_STATE_EMPTY,
  notifyConsumer
});
var handoffStateFull = (value, notifyProducer) => ({
  _tag: OP_HANDOFF_STATE_FULL,
  value,
  notifyProducer
});
var handoffStateMatch = (onEmpty, onFull) => {
  return (self) => {
    switch (self._tag) {
      case OP_HANDOFF_STATE_EMPTY: {
        return onEmpty(self.notifyConsumer);
      }
      case OP_HANDOFF_STATE_FULL: {
        return onFull(self.value, self.notifyProducer);
      }
    }
  };
};
var handoffVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
var make50 = () => pipe(make20(), flatMap11((deferred) => make29(handoffStateEmpty(deferred))), map19((ref) => ({
  [HandoffTypeId]: handoffVariance,
  ref
})));
var offer5 = /* @__PURE__ */ dual(2, (self, value) => {
  return flatMap11(make20(), (deferred) => flatten10(modify5(self.ref, (state) => pipe(state, handoffStateMatch((notifyConsumer) => [zipRight5(succeed2(notifyConsumer, void 0), _await(deferred)), handoffStateFull(value, deferred)], (_, notifyProducer) => [flatMap11(_await(notifyProducer), () => pipe(self, offer5(value))), state])))));
});
var take7 = (self) => flatMap11(make20(), (deferred) => flatten10(modify5(self.ref, (state) => pipe(state, handoffStateMatch((notifyConsumer) => [flatMap11(_await(notifyConsumer), () => take7(self)), state], (value, notifyProducer) => [as5(succeed2(notifyProducer, void 0), value), handoffStateEmpty(deferred)])))));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stream/handoffSignal.js
var OP_EMIT4 = "Emit";
var OP_HALT = "Halt";
var OP_END = "End";
var emit = (elements) => ({
  _tag: OP_EMIT4,
  elements
});
var halt = (cause3) => ({
  _tag: OP_HALT,
  cause: cause3
});
var end3 = (reason) => ({
  _tag: OP_END,
  reason
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/take.js
var TakeSymbolKey = "effect/Take";
var TakeTypeId = /* @__PURE__ */ Symbol.for(TakeSymbolKey);
var takeVariance = {
  /* c8 ignore next */
  _A: (_) => _,
  /* c8 ignore next */
  _E: (_) => _
};
var TakeImpl = class {
  exit;
  [TakeTypeId] = takeVariance;
  constructor(exit4) {
    this.exit = exit4;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var chunk2 = (chunk3) => new TakeImpl(succeed3(chunk3));
var done10 = (self) => suspend4(() => self.exit);
var end4 = /* @__PURE__ */ new TakeImpl(/* @__PURE__ */ fail4(/* @__PURE__ */ none2()));
var failCause11 = (cause3) => new TakeImpl(failCause3(pipe(cause3, map15(some2))));
var fromPull = (pull) => matchCause4(pull, {
  onFailure: (cause3) => match2(flipCauseOption2(cause3), {
    onNone: () => end4,
    onSome: failCause11
  }),
  onSuccess: chunk2
});
var match17 = /* @__PURE__ */ dual(2, (self, {
  onEnd: onEnd3,
  onFailure,
  onSuccess
}) => match6(self.exit, {
  onFailure: (cause3) => match2(flipCauseOption2(cause3), {
    onNone: onEnd3,
    onSome: onFailure
  }),
  onSuccess
}));
var of5 = (value) => new TakeImpl(succeed3(of2(value)));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stream/pull.js
var end5 = () => fail9(none2());
var failCause12 = (cause3) => mapError3(failCause8(cause3), some2);

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stream/sinkEndReason.js
var OP_SCHEDULE_END = "ScheduleEnd";
var OP_UPSTREAM_END = "UpstreamEnd";
var ScheduleEnd = {
  _tag: OP_SCHEDULE_END
};
var UpstreamEnd = {
  _tag: OP_UPSTREAM_END
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stream/zipAllState.js
var OP_DRAIN_LEFT = "DrainLeft";
var OP_DRAIN_RIGHT = "DrainRight";
var OP_PULL_BOTH = "PullBoth";
var OP_PULL_LEFT = "PullLeft";
var OP_PULL_RIGHT = "PullRight";
var DrainLeft = {
  _tag: OP_DRAIN_LEFT
};
var DrainRight = {
  _tag: OP_DRAIN_RIGHT
};
var PullBoth = {
  _tag: OP_PULL_BOTH
};
var PullLeft = (rightChunk) => ({
  _tag: OP_PULL_LEFT,
  rightChunk
});
var PullRight = (leftChunk) => ({
  _tag: OP_PULL_RIGHT,
  leftChunk
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stream/zipChunksState.js
var OP_PULL_BOTH2 = "PullBoth";
var OP_PULL_LEFT2 = "PullLet";
var OP_PULL_RIGHT2 = "PullRight";
var PullBoth2 = {
  _tag: OP_PULL_BOTH2
};
var PullLeft2 = (rightChunk) => ({
  _tag: OP_PULL_LEFT2,
  rightChunk
});
var PullRight2 = (leftChunk) => ({
  _tag: OP_PULL_RIGHT2,
  leftChunk
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/stream.js
var StreamSymbolKey = "effect/Stream";
var StreamTypeId2 = /* @__PURE__ */ Symbol.for(StreamSymbolKey);
var streamVariance = {
  _R: (_) => _,
  _E: (_) => _,
  _A: (_) => _
};
var StreamImpl = class {
  channel;
  [StreamTypeId2] = streamVariance;
  constructor(channel) {
    this.channel = channel;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var isStream = (u) => hasProperty(u, StreamTypeId2) || isEffect2(u);
var DefaultChunkSize = 4096;
var accumulate = (self) => chunks(accumulateChunks(self));
var accumulateChunks = (self) => {
  const accumulator = (s) => readWith({
    onInput: (input) => {
      const next = appendAll2(s, input);
      return flatMap13(write(next), () => accumulator(next));
    },
    onFailure: fail11,
    onDone: () => void_6
  });
  return new StreamImpl(pipeTo(toChannel2(self), accumulator(empty7())));
};
var acquireRelease3 = (acquire, release) => scoped5(acquireRelease2(acquire, release));
var aggregate = /* @__PURE__ */ dual(2, (self, sink) => aggregateWithin(self, sink, forever4));
var aggregateWithin = /* @__PURE__ */ dual(3, (self, sink, schedule4) => filterMap8(aggregateWithinEither(self, sink, schedule4), (_) => match(_, {
  onLeft: none2,
  onRight: some2
})));
var aggregateWithinEither = /* @__PURE__ */ dual(3, (self, sink, schedule4) => {
  const layer3 = all4([make50(), make29(ScheduleEnd), make29(empty7()), driver2(schedule4), make29(false), make29(false)]);
  return fromEffect7(layer3).pipe(flatMap16(([handoff, sinkEndReason, sinkLeftovers, scheduleDriver, consumed, endAfterEmit]) => {
    const handoffProducer = readWithCause({
      onInput: (input) => flatMap13(fromEffect4(pipe(handoff, offer5(emit(input)), when2(() => isNonEmpty2(input)))), () => handoffProducer),
      onFailure: (cause3) => fromEffect4(offer5(handoff, halt(cause3))),
      onDone: () => fromEffect4(offer5(handoff, end3(UpstreamEnd)))
    });
    const handoffConsumer = pipe(getAndSet2(sinkLeftovers, empty7()), flatMap11((leftovers) => {
      if (isNonEmpty2(leftovers)) {
        return pipe(set7(consumed, true), zipRight5(succeed9(pipe(write(leftovers), flatMap13(() => handoffConsumer)))));
      }
      return pipe(take7(handoff), map19((signal) => {
        switch (signal._tag) {
          case OP_EMIT4: {
            return pipe(fromEffect4(set7(consumed, true)), zipRight6(write(signal.elements)), zipRight6(fromEffect4(get13(endAfterEmit))), flatMap13((bool) => bool ? void_6 : handoffConsumer));
          }
          case OP_HALT: {
            return failCause10(signal.cause);
          }
          case OP_END: {
            if (signal.reason._tag === OP_SCHEDULE_END) {
              return pipe(get13(consumed), map19((bool) => bool ? fromEffect4(pipe(set7(sinkEndReason, ScheduleEnd), zipRight5(set7(endAfterEmit, true)))) : pipe(fromEffect4(pipe(set7(sinkEndReason, ScheduleEnd), zipRight5(set7(endAfterEmit, true)))), flatMap13(() => handoffConsumer))), unwrap);
            }
            return pipe(set7(sinkEndReason, signal.reason), zipRight5(set7(endAfterEmit, true)), fromEffect4);
          }
        }
      }));
    }), unwrap);
    const timeout5 = (lastB) => scheduleDriver.next(lastB);
    const scheduledAggregator = (sinkFiber, scheduleFiber, scope5) => {
      const forkSink = pipe(set7(consumed, false), zipRight5(set7(endAfterEmit, false)), zipRight5(pipe(handoffConsumer, pipeToOrFail(toChannel(sink)), collectElements, run, forkIn2(scope5))));
      const handleSide = (leftovers, b, c) => pipe(set7(sinkLeftovers, flatten4(leftovers)), zipRight5(map19(get13(sinkEndReason), (reason) => {
        switch (reason._tag) {
          case OP_SCHEDULE_END: {
            return pipe(all4([get13(consumed), forkSink, pipe(timeout5(some2(b)), forkIn2(scope5))]), map19(([wasConsumed, sinkFiber2, scheduleFiber2]) => {
              const toWrite = pipe(c, match2({
                onNone: () => of2(right2(b)),
                onSome: (c2) => make7(right2(b), left2(c2))
              }));
              if (wasConsumed) {
                return pipe(write(toWrite), flatMap13(() => scheduledAggregator(sinkFiber2, scheduleFiber2, scope5)));
              }
              return scheduledAggregator(sinkFiber2, scheduleFiber2, scope5);
            }), unwrap);
          }
          case OP_UPSTREAM_END: {
            return pipe(get13(consumed), map19((wasConsumed) => wasConsumed ? write(of2(right2(b))) : void_6), unwrap);
          }
        }
      })), unwrap);
      return unwrap(raceWith2(join3(sinkFiber), join3(scheduleFiber), {
        onSelfDone: (sinkExit, _) => pipe(interrupt6(scheduleFiber), zipRight5(pipe(suspend4(() => sinkExit), map19(([leftovers, b]) => handleSide(leftovers, b, none2()))))),
        onOtherDone: (scheduleExit, _) => matchCauseEffect3(suspend4(() => scheduleExit), {
          onFailure: (cause3) => match(failureOrCause2(cause3), {
            onLeft: () => pipe(handoff, offer5(end3(ScheduleEnd)), forkDaemon2, zipRight5(pipe(join3(sinkFiber), map19(([leftovers, b]) => handleSide(leftovers, b, none2()))))),
            onRight: (cause4) => pipe(handoff, offer5(halt(cause4)), forkDaemon2, zipRight5(pipe(join3(sinkFiber), map19(([leftovers, b]) => handleSide(leftovers, b, none2())))))
          }),
          onSuccess: (c) => pipe(handoff, offer5(end3(ScheduleEnd)), forkDaemon2, zipRight5(pipe(join3(sinkFiber), map19(([leftovers, b]) => handleSide(leftovers, b, some2(c))))))
        })
      }));
    };
    return unwrapScopedWith3((scope5) => pipeTo(toChannel2(self), handoffProducer).pipe(run, forkIn2(scope5), zipRight5(pipeToOrFail(handoffConsumer, toChannel(sink)).pipe(collectElements, run, forkIn2(scope5), flatMap11((sinkFiber) => timeout5(none2()).pipe(forkIn2(scope5), map19((scheduleFiber) => new StreamImpl(scheduledAggregator(sinkFiber, scheduleFiber, scope5)))))))));
  }));
});
var as9 = /* @__PURE__ */ dual(2, (self, value) => map24(self, () => value));
var queueFromBufferOptions = (bufferSize) => {
  if (bufferSize === "unbounded") {
    return unbounded5();
  } else if (typeof bufferSize === "number" || bufferSize === void 0) {
    return bounded5(bufferSize ?? 16);
  }
  switch (bufferSize.strategy) {
    case "dropping":
      return dropping4(bufferSize.bufferSize ?? 16);
    case "sliding":
      return sliding4(bufferSize.bufferSize ?? 16);
    default:
      return bounded5(bufferSize.bufferSize ?? 16);
  }
};
var _async = (register, bufferSize) => acquireRelease2(queueFromBufferOptions(bufferSize), (queue) => shutdown4(queue)).pipe(flatMap11((output) => runtime3().pipe(flatMap11((runtime5) => sync5(() => {
  const runPromiseExit3 = runPromiseExit2(runtime5);
  const canceler = register(make49((resume2) => fromPull(resume2).pipe(flatMap11((take10) => offer3(output, take10)), asVoid4, runPromiseExit3).then((exit4) => {
    if (isFailure(exit4)) {
      if (!isInterrupted2(exit4.cause)) {
        throw squash(exit4.cause);
      }
    }
  })));
  return canceler;
})), map19((value) => {
  const loop3 = take4(output).pipe(flatMap11((take10) => done10(take10)), match12({
    onFailure: (maybeError) => fromEffect4(shutdown4(output)).pipe(zipRight6(match2(maybeError, {
      onNone: () => void_6,
      onSome: (error) => fail11(error)
    }))),
    onSuccess: (chunk3) => write(chunk3).pipe(flatMap13(() => loop3))
  }), unwrap);
  return fromChannel2(loop3).pipe(ensuring6(value ?? _void));
}))), unwrapScoped4);
var asyncEffect3 = (register, bufferSize) => pipe(acquireRelease2(queueFromBufferOptions(bufferSize), (queue) => shutdown4(queue)), flatMap11((output) => pipe(runtime3(), flatMap11((runtime5) => pipe(register(make49((k) => pipe(fromPull(k), flatMap11((take10) => offer3(output, take10)), asVoid4, runPromiseExit2(runtime5)).then((exit4) => {
  if (isFailure(exit4)) {
    if (!isInterrupted2(exit4.cause)) {
      throw squash(exit4.cause);
    }
  }
}))), map19(() => {
  const loop3 = pipe(take4(output), flatMap11(done10), match12({
    onFailure: (maybeError) => pipe(fromEffect4(shutdown4(output)), zipRight6(match2(maybeError, {
      onNone: () => void_6,
      onSome: fail11
    }))),
    onSuccess: (chunk3) => pipe(write(chunk3), flatMap13(() => loop3))
  }), unwrap);
  return loop3;
}))))), unwrapScoped3, fromChannel2);
var queueFromBufferOptionsPush = (options) => {
  if (options?.bufferSize === "unbounded" || options?.bufferSize === void 0 && options?.strategy === void 0) {
    return unbounded5();
  }
  switch (options?.strategy) {
    case "sliding":
      return sliding4(options.bufferSize ?? 16);
    default:
      return dropping4(options?.bufferSize ?? 16);
  }
};
var asyncPush = (register, options) => acquireRelease2(queueFromBufferOptionsPush(options), shutdown4).pipe(tap4((queue) => getWith(currentScheduler2, (scheduler) => register(makePush(queue, scheduler)))), map19((queue) => {
  const loop3 = flatMap13(take4(queue), (item) => isExit(item) ? isSuccess(item) ? void_6 : failCause10(item.cause) : zipRight6(write(unsafeFromArray(item)), loop3));
  return loop3;
}), unwrapScoped3, fromChannel2);
var asyncScoped = (register, bufferSize) => pipe(acquireRelease2(queueFromBufferOptions(bufferSize), (queue) => shutdown4(queue)), flatMap11((output) => pipe(runtime3(), flatMap11((runtime5) => pipe(register(make49((k) => pipe(fromPull(k), flatMap11((take10) => offer3(output, take10)), asVoid4, runPromiseExit2(runtime5)).then((exit4) => {
  if (isFailure(exit4)) {
    if (!isInterrupted2(exit4.cause)) {
      throw squash(exit4.cause);
    }
  }
}))), zipRight5(make29(false)), flatMap11((ref) => pipe(get13(ref), map19((isDone7) => isDone7 ? end5() : pipe(take4(output), flatMap11(done10), onError2(() => pipe(set7(ref, true), zipRight5(shutdown4(output)))))))))))), scoped5, flatMap16(repeatEffectChunkOption));
var branchAfter = /* @__PURE__ */ dual(3, (self, n, f) => suspend10(() => {
  const buffering = (acc) => readWith({
    onInput: (input) => {
      const nextSize = acc.length + input.length;
      if (nextSize >= n) {
        const [b1, b2] = pipe(input, splitAt2(n - acc.length));
        return running4(pipe(acc, appendAll2(b1)), b2);
      }
      return buffering(pipe(acc, appendAll2(input)));
    },
    onFailure: fail11,
    onDone: () => running4(acc, empty7())
  });
  const running4 = (prefix, leftover) => pipeTo(zipRight6(write(leftover), identityChannel()), toChannel2(f(prefix)));
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(buffering(empty7()))));
}));
var broadcast = /* @__PURE__ */ dual(3, (self, n, maximumLag) => pipe(self, broadcastedQueues(n, maximumLag), map19((tuple) => tuple.map((queue) => flattenTake(fromQueue2(queue, {
  shutdown: true
}))))));
var broadcastDynamic = /* @__PURE__ */ dual(2, (self, maximumLag) => map19(toPubSub2(self, maximumLag), (pubsub) => flattenTake(fromPubSub(pubsub))));
var share = /* @__PURE__ */ dual(2, (self, options) => map19(make45({
  acquire: broadcastDynamic(self, options),
  idleTimeToLive: options.idleTimeToLive
}), (rcRef) => unwrapScoped4(get16(rcRef))));
var broadcastedQueues = /* @__PURE__ */ dual(3, (self, n, maximumLag) => flatMap11(pubsubFromOptions(maximumLag), (pubsub) => pipe(all4(Array.from({
  length: n
}, () => subscribe2(pubsub))), tap4(() => forkScoped2(runIntoPubSubScoped(self, pubsub))))));
var broadcastedQueuesDynamic = /* @__PURE__ */ dual(2, (self, maximumLag) => map19(toPubSub2(self, maximumLag), subscribe2));
var buffer = /* @__PURE__ */ dual(2, (self, options) => {
  if (options.capacity === "unbounded") {
    return bufferUnbounded(self);
  } else if (options.strategy === "dropping") {
    return bufferDropping(self, options.capacity);
  } else if (options.strategy === "sliding") {
    return bufferSliding(self, options.capacity);
  }
  const queue = toQueueOfElements(self, options);
  return new StreamImpl(unwrapScoped3(map19(queue, (queue2) => {
    const process2 = pipe(fromEffect4(take4(queue2)), flatMap13(match6({
      onFailure: (cause3) => pipe(flipCauseOption2(cause3), match2({
        onNone: () => void_6,
        onSome: failCause10
      })),
      onSuccess: (value) => flatMap13(write(of2(value)), () => process2)
    })));
    return process2;
  })));
});
var bufferChunks = /* @__PURE__ */ dual(2, (self, options) => {
  if (options.strategy === "dropping") {
    return bufferChunksDropping(self, options.capacity);
  } else if (options.strategy === "sliding") {
    return bufferChunksSliding(self, options.capacity);
  }
  const queue = toQueue2(self, options);
  return new StreamImpl(unwrapScoped3(map19(queue, (queue2) => {
    const process2 = pipe(fromEffect4(take4(queue2)), flatMap13(match17({
      onEnd: () => void_6,
      onFailure: failCause10,
      onSuccess: (value) => pipe(write(value), flatMap13(() => process2))
    })));
    return process2;
  })));
});
var bufferChunksDropping = /* @__PURE__ */ dual(2, (self, capacity7) => {
  const queue = acquireRelease2(dropping4(capacity7), (queue2) => shutdown4(queue2));
  return new StreamImpl(bufferSignal(queue, toChannel2(self)));
});
var bufferChunksSliding = /* @__PURE__ */ dual(2, (self, capacity7) => {
  const queue = acquireRelease2(sliding4(capacity7), (queue2) => shutdown4(queue2));
  return new StreamImpl(bufferSignal(queue, toChannel2(self)));
});
var bufferDropping = /* @__PURE__ */ dual(2, (self, capacity7) => {
  const queue = acquireRelease2(dropping4(capacity7), (queue2) => shutdown4(queue2));
  return new StreamImpl(bufferSignal(queue, toChannel2(rechunk(1)(self))));
});
var bufferSliding = /* @__PURE__ */ dual(2, (self, capacity7) => {
  const queue = acquireRelease2(sliding4(capacity7), (queue2) => shutdown4(queue2));
  return new StreamImpl(bufferSignal(queue, toChannel2(pipe(self, rechunk(1)))));
});
var bufferUnbounded = (self) => {
  const queue = toQueue2(self, {
    strategy: "unbounded"
  });
  return new StreamImpl(unwrapScoped3(map19(queue, (queue2) => {
    const process2 = pipe(fromEffect4(take4(queue2)), flatMap13(match17({
      onEnd: () => void_6,
      onFailure: failCause10,
      onSuccess: (value) => flatMap13(write(value), () => process2)
    })));
    return process2;
  })));
};
var bufferSignal = (scoped7, bufferChannel) => {
  const producer = (queue, ref) => {
    const terminate = (take10) => pipe(get13(ref), tap4(_await), zipRight5(make20()), flatMap11((deferred) => pipe(offer3(queue, [take10, deferred]), zipRight5(set7(ref, deferred)), zipRight5(_await(deferred)))), asVoid4, fromEffect4);
    return readWithCause({
      onInput: (input) => pipe(make20(), flatMap11((deferred) => pipe(offer3(queue, [chunk2(input), deferred]), flatMap11((added) => pipe(set7(ref, deferred), when2(() => added))))), asVoid4, fromEffect4, flatMap13(() => producer(queue, ref))),
      onFailure: (error) => terminate(failCause11(error)),
      onDone: () => terminate(end4)
    });
  };
  const consumer = (queue) => {
    const process2 = pipe(fromEffect4(take4(queue)), flatMap13(([take10, deferred]) => zipRight6(fromEffect4(succeed2(deferred, void 0)), match17(take10, {
      onEnd: () => void_6,
      onFailure: failCause10,
      onSuccess: (value) => pipe(write(value), flatMap13(() => process2))
    }))));
    return process2;
  };
  return unwrapScoped3(pipe(scoped7, flatMap11((queue) => pipe(make20(), tap4((start3) => succeed2(start3, void 0)), flatMap11((start3) => pipe(make29(start3), flatMap11((ref) => pipe(bufferChannel, pipeTo(producer(queue, ref)), runScoped, forkScoped2)), as5(consumer(queue))))))));
};
var catchAll7 = /* @__PURE__ */ dual(2, (self, f) => catchAllCause6(self, (cause3) => match(failureOrCause2(cause3), {
  onLeft: f,
  onRight: failCause13
})));
var catchAllCause6 = /* @__PURE__ */ dual(2, (self, f) => new StreamImpl(pipe(toChannel2(self), catchAllCause5((cause3) => toChannel2(f(cause3))))));
var catchSome3 = /* @__PURE__ */ dual(2, (self, pf) => pipe(self, catchAll7((error) => pipe(pf(error), getOrElse(() => fail15(error))))));
var catchSomeCause3 = /* @__PURE__ */ dual(2, (self, pf) => pipe(self, catchAllCause6((cause3) => pipe(pf(cause3), getOrElse(() => failCause13(cause3))))));
var catchTag3 = /* @__PURE__ */ dual(3, (self, k, f) => catchAll7(self, (e) => {
  if ("_tag" in e && e["_tag"] === k) {
    return f(e);
  }
  return fail15(e);
}));
var catchTags3 = /* @__PURE__ */ dual(2, (self, cases) => catchAll7(self, (e) => {
  const keys6 = Object.keys(cases);
  if ("_tag" in e && keys6.includes(e["_tag"])) {
    return cases[e["_tag"]](e);
  }
  return fail15(e);
}));
var changes = (self) => pipe(self, changesWith((x, y) => equals(y)(x)));
var changesWith = /* @__PURE__ */ dual(2, (self, f) => {
  const writer = (last5) => readWithCause({
    onInput: (input) => {
      const [newLast, newChunk] = reduce3(input, [last5, empty7()], ([option3, outputs], output) => {
        if (isSome2(option3) && f(option3.value, output)) {
          return [some2(output), outputs];
        }
        return [some2(output), pipe(outputs, append2(output))];
      });
      return flatMap13(write(newChunk), () => writer(newLast));
    },
    onFailure: failCause10,
    onDone: () => void_6
  });
  return new StreamImpl(pipe(toChannel2(self), pipeTo(writer(none2()))));
});
var changesWithEffect = /* @__PURE__ */ dual(2, (self, f) => {
  const writer = (last5) => readWithCause({
    onInput: (input) => pipe(input, reduce12([last5, empty7()], ([option3, outputs], output) => {
      if (isSome2(option3)) {
        return pipe(f(option3.value, output), map19((bool) => bool ? [some2(output), outputs] : [some2(output), pipe(outputs, append2(output))]));
      }
      return succeed9([some2(output), pipe(outputs, append2(output))]);
    }), fromEffect4, flatMap13(([newLast, newChunk]) => pipe(write(newChunk), flatMap13(() => writer(newLast))))),
    onFailure: failCause10,
    onDone: () => void_6
  });
  return new StreamImpl(pipe(toChannel2(self), pipeTo(writer(none2()))));
});
var chunks = (self) => pipe(self, mapChunks(of2));
var chunksWith = /* @__PURE__ */ dual(2, (self, f) => flattenChunks(f(chunks(self))));
var unsome = (effect4) => catchAll3(asSome2(effect4), (o) => o._tag === "None" ? succeedNone2 : fail9(o.value));
var combine9 = /* @__PURE__ */ dual(4, (self, that, s, f) => {
  function producer(handoff, latch) {
    return fromEffect4(take7(latch)).pipe(zipRight6(readWithCause({
      onInput: (input) => flatMap13(fromEffect4(offer5(handoff, succeed3(input))), () => producer(handoff, latch)),
      onFailure: (cause3) => fromEffect4(offer5(handoff, failCause3(pipe(cause3, map15(some2))))),
      onDone: () => flatMap13(fromEffect4(offer5(handoff, fail4(none2()))), () => producer(handoff, latch))
    })));
  }
  return new StreamImpl(unwrapScopedWith((scope5) => all4([make50(), make50(), make50(), make50()]).pipe(tap4(([left3, _, latchL]) => toChannel2(self).pipe(concatMap(writeChunk), pipeTo(producer(left3, latchL)), runIn(scope5), forkIn2(scope5))), tap4(([, right3, _, rightL]) => toChannel2(that).pipe(concatMap(writeChunk), pipeTo(producer(right3, rightL)), runIn(scope5), forkIn2(scope5))), map19(([left3, right3, latchL, latchR]) => {
    const pullLeft = offer5(latchL, void 0).pipe(zipRight5(take7(left3).pipe(flatMap11(identity))));
    const pullRight = offer5(latchR, void 0).pipe(zipRight5(take7(right3).pipe(flatMap11(identity))));
    return toChannel2(unfoldEffect(s, (s2) => flatMap11(f(s2, pullLeft, pullRight), unsome)));
  }))));
});
var combineChunks = /* @__PURE__ */ dual(4, (self, that, s, f) => {
  const producer = (handoff, latch) => zipRight6(fromEffect4(take7(latch)), readWithCause({
    onInput: (input) => flatMap13(fromEffect4(pipe(handoff, offer5(chunk2(input)))), () => producer(handoff, latch)),
    onFailure: (cause3) => fromEffect4(offer5(handoff, failCause11(cause3))),
    onDone: () => fromEffect4(offer5(handoff, end4))
  }));
  return new StreamImpl(unwrapScopedWith((scope5) => all4([make50(), make50(), make50(), make50()]).pipe(tap4(([left3, _, latchL]) => pipeTo(toChannel2(self), producer(left3, latchL)).pipe(runIn(scope5), forkIn2(scope5))), tap4(([_, right3, __, latchR]) => pipeTo(toChannel2(that), producer(right3, latchR)).pipe(runIn(scope5), forkIn2(scope5))), map19(([left3, right3, latchL, latchR]) => {
    const pullLeft = offer5(latchL, void 0).pipe(zipRight5(take7(left3).pipe(flatMap11(done10))));
    const pullRight = offer5(latchR, void 0).pipe(zipRight5(take7(right3).pipe(flatMap11(done10))));
    return toChannel2(unfoldChunkEffect(s, (s2) => flatMap11(f(s2, pullLeft, pullRight), unsome)));
  }))));
});
var concat2 = /* @__PURE__ */ dual(2, (self, that) => new StreamImpl(pipe(toChannel2(self), zipRight6(toChannel2(that)))));
var concatAll2 = (streams) => suspend10(() => pipe(streams, reduce3(empty35, (x, y) => concat2(y)(x))));
var cross = /* @__PURE__ */ dual(2, (left3, right3) => pipe(left3, crossWith(right3, (a, a2) => [a, a2])));
var crossLeft = /* @__PURE__ */ dual(2, (left3, right3) => pipe(left3, crossWith(right3, (a, _) => a)));
var crossRight = /* @__PURE__ */ dual(2, (left3, right3) => flatMap16(left3, () => right3));
var crossWith = /* @__PURE__ */ dual(3, (left3, right3, f) => pipe(left3, flatMap16((a) => pipe(right3, map24((b) => f(a, b))))));
var debounce = /* @__PURE__ */ dual(2, (self, duration2) => unwrapScopedWith3((scope5) => gen3(function* () {
  const handoff = yield* make50();
  function enqueue(last5) {
    return sleep2(duration2).pipe(as5(last5), forkIn2(scope5), map19((fiber) => consumer(previous(fiber))));
  }
  const producer = readWithCause({
    onInput: (input) => match2(last2(input), {
      onNone: () => producer,
      onSome: (elem) => fromEffect4(offer5(handoff, emit(of2(elem)))).pipe(flatMap13(() => producer))
    }),
    onFailure: (cause3) => fromEffect4(offer5(handoff, halt(cause3))),
    onDone: () => fromEffect4(offer5(handoff, end3(UpstreamEnd)))
  });
  function consumer(state) {
    switch (state._tag) {
      case OP_NOT_STARTED: {
        return unwrap(take7(handoff).pipe(map19((signal) => {
          switch (signal._tag) {
            case OP_EMIT4: {
              return unwrap(enqueue(signal.elements));
            }
            case OP_HALT: {
              return failCause10(signal.cause);
            }
            case OP_END: {
              return void_6;
            }
          }
        })));
      }
      case OP_PREVIOUS: {
        return unwrap(take7(handoff).pipe(forkIn2(scope5), flatMap11((handoffFiber) => raceWith2(join3(state.fiber), join3(handoffFiber), {
          onSelfDone: (leftExit, current2) => match6(leftExit, {
            onFailure: (cause3) => interrupt6(current2).pipe(as5(failCause10(cause3))),
            onSuccess: (chunk3) => interrupt6(current2).pipe(zipRight5(succeed9(write(chunk3).pipe(flatMap13(() => consumer(current(handoffFiber)))))))
          }),
          onOtherDone: (rightExit, previous2) => match6(rightExit, {
            onFailure: (cause3) => interrupt6(previous2).pipe(as5(failCause10(cause3))),
            onSuccess: (signal) => {
              switch (signal._tag) {
                case OP_EMIT4: {
                  return interrupt6(previous2).pipe(zipRight5(enqueue(signal.elements)));
                }
                case OP_HALT: {
                  return interrupt6(previous2).pipe(as5(failCause10(signal.cause)));
                }
                case OP_END: {
                  return join3(previous2).pipe(map19((chunk3) => write(chunk3).pipe(zipRight6(void_6))));
                }
              }
            }
          })
        }))));
      }
      case OP_CURRENT: {
        return unwrap(join3(state.fiber).pipe(map19((signal) => {
          switch (signal._tag) {
            case OP_EMIT4: {
              return unwrap(enqueue(signal.elements));
            }
            case OP_HALT: {
              return failCause10(signal.cause);
            }
            case OP_END: {
              return void_6;
            }
          }
        })));
      }
    }
  }
  return scopedWith4((scope6) => pipeTo(toChannel2(self), producer).pipe(runIn(scope6), forkIn2(scope6))).pipe(crossRight(new StreamImpl(consumer(notStarted))));
})));
var die10 = (defect) => fromEffect7(die6(defect));
var dieSync6 = (evaluate3) => fromEffect7(dieSync3(evaluate3));
var dieMessage4 = (message) => fromEffect7(dieMessage2(message));
var distributedWith = /* @__PURE__ */ dual(2, (self, options) => pipe(make20(), flatMap11((deferred) => pipe(self, distributedWithDynamic({
  maximumLag: options.maximumLag,
  decide: (a) => flatMap11(_await(deferred), (f) => f(a))
}), flatMap11((next) => pipe(all4(map5(range2(0, options.size - 1), (id2) => map19(next, ([key, queue]) => [[key, id2], queue]))), map19(unsafeFromArray), flatMap11((entries2) => {
  const [mappings, queues] = reduceRight2(entries2, [/* @__PURE__ */ new Map(), empty7()], ([mappings2, queues2], [mapping, queue]) => [mappings2.set(mapping[0], mapping[1]), pipe(queues2, prepend2(queue))]);
  return pipe(succeed2(deferred, (a) => map19(options.decide(a), (f) => (key) => pipe(f(mappings.get(key))))), as5(Array.from(queues)));
})))))));
var distributedWithDynamicId = {
  ref: 0
};
var newDistributedWithDynamicId = () => {
  const current2 = distributedWithDynamicId.ref;
  distributedWithDynamicId.ref = current2 + 1;
  return current2;
};
var distributedWithDynamic = /* @__PURE__ */ dual(2, (self, options) => distributedWithDynamicCallback(self, options.maximumLag, options.decide, () => _void));
var distributedWithDynamicCallback = /* @__PURE__ */ dual(4, (self, maximumLag, decide, done11) => pipe(acquireRelease2(make29(/* @__PURE__ */ new Map()), (ref, _) => pipe(get13(ref), flatMap11((queues) => pipe(queues.values(), forEach10(shutdown4))))), flatMap11((queuesRef) => gen3(function* () {
  const offer6 = (a) => pipe(decide(a), flatMap11((shouldProcess) => pipe(get13(queuesRef), flatMap11((queues) => pipe(queues.entries(), reduce12(empty7(), (acc, [id2, queue]) => {
    if (shouldProcess(id2)) {
      return pipe(offer3(queue, succeed3(a)), matchCauseEffect3({
        onFailure: (cause3) => (
          // Ignore all downstream queues that were shut
          // down and remove them later
          isInterrupted2(cause3) ? succeed9(pipe(acc, prepend2(id2))) : failCause8(cause3)
        ),
        onSuccess: () => succeed9(acc)
      }));
    }
    return succeed9(acc);
  }), flatMap11((ids3) => {
    if (isNonEmpty2(ids3)) {
      return pipe(update3(queuesRef, (map28) => {
        for (const id2 of ids3) {
          map28.delete(id2);
        }
        return map28;
      }));
    }
    return _void;
  }))))), asVoid4);
  const queuesLock = yield* makeSemaphore2(1);
  const newQueue = yield* make29(pipe(bounded5(maximumLag), flatMap11((queue) => {
    const id2 = newDistributedWithDynamicId();
    return pipe(update3(queuesRef, (map28) => map28.set(id2, queue)), as5([id2, queue]));
  })));
  const finalize = (endTake) => (
    // Make sure that no queues are currently being added
    queuesLock.withPermits(1)(pipe(set7(newQueue, pipe(
      // All newly created queues should end immediately
      bounded5(1),
      tap4((queue) => offer3(queue, endTake)),
      flatMap11((queue) => {
        const id2 = newDistributedWithDynamicId();
        return pipe(update3(queuesRef, (map28) => map28.set(id2, queue)), as5(make3(id2, queue)));
      })
    )), zipRight5(pipe(get13(queuesRef), flatMap11((map28) => pipe(fromIterable3(map28.values()), forEach10((queue) => pipe(offer3(queue, endTake), catchSomeCause2((cause3) => isInterrupted2(cause3) ? some2(_void) : none2()))))))), zipRight5(done11(endTake)), asVoid4))
  );
  yield* pipe(self, runForEachScoped(offer6), matchCauseEffect3({
    onFailure: (cause3) => finalize(failCause3(pipe(cause3, map15(some2)))),
    onSuccess: () => finalize(fail4(none2()))
  }), forkScoped2);
  return queuesLock.withPermits(1)(flatten10(get13(newQueue)));
}))));
var drain3 = (self) => new StreamImpl(drain(toChannel2(self)));
var drainFork = /* @__PURE__ */ dual(2, (self, that) => fromEffect7(make20()).pipe(flatMap16((backgroundDied) => scopedWith4((scope5) => toChannel2(that).pipe(drain, runIn(scope5), catchAllCause3((cause3) => failCause2(backgroundDied, cause3)), forkIn2(scope5))).pipe(crossRight(interruptWhenDeferred2(self, backgroundDied))))));
var drop3 = /* @__PURE__ */ dual(2, (self, n) => {
  const loop3 = (r) => readWith({
    onInput: (input) => {
      const dropped = pipe(input, drop2(r));
      const leftover = Math.max(0, r - input.length);
      const more = isEmpty(input) || leftover > 0;
      if (more) {
        return loop3(leftover);
      }
      return pipe(write(dropped), zipRight6(identityChannel()));
    },
    onFailure: fail11,
    onDone: () => void_6
  });
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(loop3(n))));
});
var dropRight2 = /* @__PURE__ */ dual(2, (self, n) => {
  if (n <= 0) {
    return identityStream();
  }
  return suspend10(() => {
    const queue = new RingBuffer(n);
    const reader = readWith({
      onInput: (input) => {
        const outputs = pipe(input, filterMap4((elem) => {
          const head6 = queue.head();
          queue.put(elem);
          return head6;
        }));
        return pipe(write(outputs), flatMap13(() => reader));
      },
      onFailure: fail11,
      onDone: () => void_6
    });
    return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(reader)));
  });
});
var dropUntil3 = /* @__PURE__ */ dual(2, (self, predicate) => drop3(dropWhile5(self, (a) => !predicate(a)), 1));
var dropUntilEffect = /* @__PURE__ */ dual(2, (self, predicate) => {
  const loop3 = readWith({
    onInput: (input) => pipe(dropUntil2(input, predicate), map19(unsafeFromArray), map19((leftover) => {
      const more = isEmpty(leftover);
      if (more) {
        return suspend6(() => loop3);
      }
      return pipe(write(leftover), zipRight6(identityChannel()));
    }), unwrap),
    onFailure: fail11,
    onDone: () => void_6
  });
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(loop3)));
});
var dropWhile5 = /* @__PURE__ */ dual(2, (self, predicate) => {
  const loop3 = readWith({
    onInput: (input) => {
      const output = dropWhile2(input, predicate);
      if (isEmpty(output)) {
        return suspend6(() => loop3);
      }
      return zipRight6(write(output), identityChannel());
    },
    onFailure: fail11,
    onDone: succeedNow
  });
  return new StreamImpl(pipeToOrFail(toChannel2(self), loop3));
});
var dropWhileEffect = /* @__PURE__ */ dual(2, (self, predicate) => {
  const loop3 = readWith({
    onInput: (input) => pipe(dropWhile4(input, predicate), map19(unsafeFromArray), map19((leftover) => {
      const more = isEmpty(leftover);
      if (more) {
        return suspend6(() => loop3);
      }
      return zipRight6(write(leftover), identityChannel());
    }), unwrap),
    onFailure: fail11,
    onDone: () => void_6
  });
  return new StreamImpl(pipeToOrFail(toChannel2(self), loop3));
});
var either5 = (self) => pipe(self, map24(right2), catchAll7((error) => make51(left2(error))));
var empty35 = /* @__PURE__ */ new StreamImpl(void_6);
var ensuring6 = /* @__PURE__ */ dual(2, (self, finalizer3) => new StreamImpl(pipe(toChannel2(self), ensuring3(finalizer3))));
var ensuringWith2 = /* @__PURE__ */ dual(2, (self, finalizer3) => new StreamImpl(ensuringWith(toChannel2(self), finalizer3)));
var context5 = () => fromEffect7(context3());
var contextWith3 = (f) => pipe(context5(), map24(f));
var contextWithEffect3 = (f) => pipe(context5(), mapEffectSequential(f));
var contextWithStream = (f) => pipe(context5(), flatMap16(f));
var execute = (effect4) => drain3(fromEffect7(effect4));
var fail15 = (error) => fromEffectOption(fail9(some2(error)));
var failSync7 = (evaluate3) => fromEffectOption(failSync3(() => some2(evaluate3())));
var failCause13 = (cause3) => fromEffect7(failCause8(cause3));
var failCauseSync6 = (evaluate3) => fromEffect7(failCauseSync3(evaluate3));
var filter10 = /* @__PURE__ */ dual(2, (self, predicate) => mapChunks(self, filter4(predicate)));
var filterEffect = /* @__PURE__ */ dual(2, (self, f) => {
  const loop3 = (iterator) => {
    const next = iterator.next();
    if (next.done) {
      return readWithCause({
        onInput: (input) => loop3(input[Symbol.iterator]()),
        onFailure: failCause10,
        onDone: succeed11
      });
    } else {
      return pipe(f(next.value), map19((bool) => bool ? pipe(write(of2(next.value)), flatMap13(() => loop3(iterator))) : loop3(iterator)), unwrap);
    }
  };
  return new StreamImpl(suspend6(() => pipe(toChannel2(self), pipeTo(loop3(empty7()[Symbol.iterator]())))));
});
var filterMap8 = /* @__PURE__ */ dual(2, (self, pf) => mapChunks(self, filterMap4(pf)));
var filterMapEffect = /* @__PURE__ */ dual(2, (self, pf) => suspend10(() => {
  const loop3 = (iterator) => {
    const next = iterator.next();
    if (next.done) {
      return readWithCause({
        onInput: (input) => loop3(input[Symbol.iterator]()),
        onFailure: failCause10,
        onDone: succeed11
      });
    } else {
      return pipe(pf(next.value), match2({
        onNone: () => sync5(() => loop3(iterator)),
        onSome: map19((a2) => flatMap13(write(of2(a2)), () => loop3(iterator)))
      }), unwrap);
    }
  };
  return new StreamImpl(pipe(toChannel2(self), pipeTo(loop3(empty7()[Symbol.iterator]()))));
}));
var filterMapWhile3 = /* @__PURE__ */ dual(2, (self, pf) => {
  const loop3 = readWith({
    onInput: (input) => {
      const mapped = filterMapWhile2(input, pf);
      if (mapped.length === input.length) {
        return pipe(write(mapped), flatMap13(() => loop3));
      }
      return write(mapped);
    },
    onFailure: fail11,
    onDone: succeed11
  });
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(loop3)));
});
var filterMapWhileEffect = /* @__PURE__ */ dual(2, (self, pf) => suspend10(() => {
  const loop3 = (iterator) => {
    const next = iterator.next();
    if (next.done) {
      return readWithCause({
        onInput: (input) => loop3(input[Symbol.iterator]()),
        onFailure: failCause10,
        onDone: succeed11
      });
    } else {
      return unwrap(match2(pf(next.value), {
        onNone: () => succeed9(void_6),
        onSome: map19((a2) => flatMap13(write(of2(a2)), () => loop3(iterator)))
      }));
    }
  };
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(loop3(empty7()[Symbol.iterator]()))));
}));
var finalizer = (finalizer3) => acquireRelease3(_void, () => finalizer3);
var find2 = /* @__PURE__ */ dual(2, (self, predicate) => {
  const loop3 = readWith({
    onInput: (input) => match2(findFirst4(input, predicate), {
      onNone: () => loop3,
      onSome: (n) => write(of2(n))
    }),
    onFailure: fail11,
    onDone: () => void_6
  });
  return new StreamImpl(pipe(toChannel2(self), pipeTo(loop3)));
});
var findEffect = /* @__PURE__ */ dual(2, (self, predicate) => {
  const loop3 = readWith({
    onInput: (input) => pipe(findFirst8(input, predicate), map19(match2({
      onNone: () => loop3,
      onSome: (n) => write(of2(n))
    })), unwrap),
    onFailure: fail11,
    onDone: () => void_6
  });
  return new StreamImpl(pipe(toChannel2(self), pipeTo(loop3)));
});
var flatMap16 = /* @__PURE__ */ dual((args2) => isStream(args2[0]), (self, f, options) => {
  const bufferSize = options?.bufferSize ?? 16;
  if (options?.switch) {
    return matchConcurrency(options?.concurrency, () => flatMapParSwitchBuffer(self, 1, bufferSize, f), (n) => flatMapParSwitchBuffer(self, n, bufferSize, f));
  }
  return matchConcurrency(options?.concurrency, () => new StreamImpl(concatMap(toChannel2(self), (as11) => pipe(as11, map5((a) => toChannel2(f(a))), reduce3(void_6, (left3, right3) => pipe(left3, zipRight6(right3)))))), (_) => new StreamImpl(pipe(toChannel2(self), concatMap(writeChunk), mergeMap((out) => toChannel2(f(out)), options))));
});
var matchConcurrency = (concurrency, sequential4, bounded8) => {
  switch (concurrency) {
    case void 0:
      return sequential4();
    case "unbounded":
      return bounded8(Number.MAX_SAFE_INTEGER);
    default:
      return concurrency > 1 ? bounded8(concurrency) : sequential4();
  }
};
var flatMapParSwitchBuffer = /* @__PURE__ */ dual(4, (self, n, bufferSize, f) => new StreamImpl(pipe(toChannel2(self), concatMap(writeChunk), mergeMap((out) => toChannel2(f(out)), {
  concurrency: n,
  mergeStrategy: BufferSliding(),
  bufferSize
}))));
var flatten14 = /* @__PURE__ */ dual((args2) => isStream(args2[0]), (self, options) => flatMap16(self, identity, options));
var flattenChunks = (self) => {
  const flatten16 = readWithCause({
    onInput: (chunks3) => flatMap13(writeChunk(chunks3), () => flatten16),
    onFailure: failCause10,
    onDone: () => void_6
  });
  return new StreamImpl(pipe(toChannel2(self), pipeTo(flatten16)));
};
var flattenEffect = /* @__PURE__ */ dual((args2) => isStream(args2[0]), (self, options) => options?.unordered ? flatMap16(self, (a) => fromEffect7(a), {
  concurrency: options.concurrency
}) : matchConcurrency(options?.concurrency, () => mapEffectSequential(self, identity), (n) => new StreamImpl(pipe(toChannel2(self), concatMap(writeChunk), mapOutEffectPar(identity, n), mapOut(of2)))));
var flattenExitOption = (self) => {
  const processChunk = (chunk3, cont) => {
    const [toEmit, rest] = pipe(chunk3, splitWhere2((exit4) => !isSuccess(exit4)));
    const next = pipe(head2(rest), match2({
      onNone: () => cont,
      onSome: match6({
        onFailure: (cause3) => match2(flipCauseOption2(cause3), {
          onNone: () => void_6,
          onSome: failCause10
        }),
        onSuccess: () => void_6
      })
    }));
    return pipe(write(pipe(toEmit, filterMap4((exit4) => isSuccess(exit4) ? some2(exit4.value) : none2()))), flatMap13(() => next));
  };
  const process2 = readWithCause({
    onInput: (chunk3) => processChunk(chunk3, process2),
    onFailure: (cause3) => failCause10(cause3),
    onDone: () => void_6
  });
  return new StreamImpl(pipe(toChannel2(self), pipeTo(process2)));
};
var flattenIterables = (self) => pipe(self, map24(fromIterable3), flattenChunks);
var flattenTake = (self) => flattenChunks(flattenExitOption(pipe(self, map24((take10) => take10.exit))));
var forever5 = (self) => new StreamImpl(repeated(toChannel2(self)));
var fromAsyncIterable = (iterable, onError5) => pipe(acquireRelease2(sync5(() => iterable[Symbol.asyncIterator]()), (iterator) => iterator.return ? promise2(async () => iterator.return()) : _void), map19((iterator) => repeatEffectOption(pipe(tryPromise2({
  try: async () => iterator.next(),
  catch: (reason) => some2(onError5(reason))
}), flatMap11((result) => result.done ? fail9(none2()) : succeed9(result.value))))), unwrapScoped4);
var fromChannel2 = (channel) => new StreamImpl(channel);
var toChannel2 = (stream) => {
  if ("channel" in stream) {
    return stream.channel;
  } else if (isEffect2(stream)) {
    return toChannel2(fromEffect7(stream));
  } else {
    throw new TypeError(`Expected a Stream.`);
  }
};
var fromChunk = (chunk3) => new StreamImpl(isEmpty(chunk3) ? void_6 : write(chunk3));
var fromChunkPubSub = (pubsub, options) => {
  if (options?.scoped) {
    const effect4 = map19(subscribe2(pubsub), fromChunkQueue);
    return options.shutdown ? map19(effect4, ensuring6(shutdown3(pubsub))) : effect4;
  }
  const stream = flatMap16(scoped5(subscribe2(pubsub)), fromChunkQueue);
  return options?.shutdown ? ensuring6(stream, shutdown3(pubsub)) : stream;
};
var fromChunkQueue = (queue, options) => pipe(take4(queue), catchAllCause3((cause3) => pipe(isShutdown3(queue), flatMap11((isShutdown7) => isShutdown7 && isInterrupted2(cause3) ? end5() : failCause12(cause3)))), repeatEffectChunkOption, options?.shutdown ? ensuring6(shutdown4(queue)) : identity);
var fromChunks = (...chunks3) => pipe(fromIterable12(chunks3), flatMap16(fromChunk));
var fromEffect7 = (effect4) => pipe(effect4, mapError3(some2), fromEffectOption);
var fromEffectOption = (effect4) => new StreamImpl(unwrap(match12(effect4, {
  onFailure: match2({
    onNone: () => void_6,
    onSome: fail11
  }),
  onSuccess: (a) => write(of2(a))
})));
var fromPubSub = (pubsub, options) => {
  const maxChunkSize = options?.maxChunkSize ?? DefaultChunkSize;
  if (options?.scoped) {
    const effect4 = map19(subscribe2(pubsub), (queue) => fromQueue2(queue, {
      maxChunkSize,
      shutdown: true
    }));
    return options.shutdown ? map19(effect4, ensuring6(shutdown3(pubsub))) : effect4;
  }
  const stream = flatMap16(scoped5(subscribe2(pubsub)), (queue) => fromQueue2(queue, {
    maxChunkSize
  }));
  return options?.shutdown ? ensuring6(stream, shutdown3(pubsub)) : stream;
};
var fromTPubSub = (pubsub) => {
  return unwrapScoped4(map19(subscribeScoped2(pubsub), (queue) => fromTQueue(queue)));
};
var fromIterable12 = (iterable) => suspend10(() => isChunk(iterable) ? fromChunk(iterable) : fromIteratorSucceed(iterable[Symbol.iterator]()));
var fromIterableEffect = (effect4) => pipe(effect4, map19(fromIterable12), unwrap2);
var fromIteratorSucceed = (iterator, maxChunkSize = DefaultChunkSize) => {
  return pipe(sync5(() => {
    let builder = [];
    const loop3 = (iterator2) => pipe(sync5(() => {
      let next = iterator2.next();
      if (maxChunkSize === 1) {
        if (next.done) {
          return void_6;
        }
        return pipe(write(of2(next.value)), flatMap13(() => loop3(iterator2)));
      }
      builder = [];
      let count3 = 0;
      while (next.done === false) {
        builder.push(next.value);
        count3 = count3 + 1;
        if (count3 >= maxChunkSize) {
          break;
        }
        next = iterator2.next();
      }
      if (count3 > 0) {
        return pipe(write(unsafeFromArray(builder)), flatMap13(() => loop3(iterator2)));
      }
      return void_6;
    }), unwrap);
    return new StreamImpl(loop3(iterator));
  }), unwrap2);
};
var fromPull2 = (effect4) => pipe(effect4, map19(repeatEffectChunkOption), unwrapScoped4);
var fromQueue2 = (queue, options) => pipe(takeBetween2(queue, 1, options?.maxChunkSize ?? DefaultChunkSize), catchAllCause3((cause3) => pipe(isShutdown3(queue), flatMap11((isShutdown7) => isShutdown7 && isInterrupted2(cause3) ? end5() : failCause12(cause3)))), repeatEffectChunkOption, options?.shutdown ? ensuring6(shutdown4(queue)) : identity);
var fromTQueue = (queue) => pipe(take6(queue), map19(of2), catchAllCause3((cause3) => pipe(isShutdown6(queue), flatMap11((isShutdown7) => isShutdown7 && isInterrupted2(cause3) ? end5() : failCause12(cause3)))), repeatEffectChunkOption);
var fromSchedule = (schedule4) => pipe(driver2(schedule4), map19((driver3) => repeatEffectOption(driver3.next(void 0))), unwrap2);
var fromReadableStream = (...args2) => {
  const evaluate3 = args2.length === 1 ? args2[0].evaluate : args2[0];
  const onError5 = args2.length === 1 ? args2[0].onError : args2[1];
  const releaseLockOnEnd = args2.length === 1 ? args2[0].releaseLockOnEnd === true : false;
  return unwrapScoped4(map19(acquireRelease2(sync5(() => evaluate3().getReader()), (reader) => releaseLockOnEnd ? sync5(() => reader.releaseLock()) : promise2(() => reader.cancel())), (reader) => repeatEffectOption(flatMap11(tryPromise2({
    try: () => reader.read(),
    catch: (reason) => some2(onError5(reason))
  }), ({
    done: done11,
    value
  }) => done11 ? fail9(none2()) : succeed9(value)))));
};
var fromReadableStreamByob = (...args2) => {
  const evaluate3 = args2.length === 1 ? args2[0].evaluate : args2[0];
  const onError5 = args2.length === 1 ? args2[0].onError : args2[1];
  const allocSize = (args2.length === 1 ? args2[0].bufferSize : args2[2]) ?? 4096;
  const releaseLockOnEnd = args2.length === 1 ? args2[0].releaseLockOnEnd === true : false;
  return unwrapScoped4(map19(acquireRelease2(sync5(() => evaluate3().getReader({
    mode: "byob"
  })), (reader) => releaseLockOnEnd ? sync5(() => reader.releaseLock()) : promise2(() => reader.cancel())), (reader) => catchAll7(forever5(readChunkStreamByobReader(reader, onError5, allocSize)), (error) => error === EOF ? empty35 : fail15(error))));
};
var EOF = /* @__PURE__ */ Symbol.for("effect/Stream/EOF");
var readChunkStreamByobReader = (reader, onError5, size17) => {
  const buffer3 = new ArrayBuffer(size17);
  return paginateEffect(0, (offset) => flatMap11(tryPromise2({
    try: () => reader.read(new Uint8Array(buffer3, offset, buffer3.byteLength - offset)),
    catch: (reason) => onError5(reason)
  }), ({
    done: done11,
    value
  }) => {
    if (done11) {
      return fail9(EOF);
    }
    const newOffset = offset + value.byteLength;
    return succeed9([value, newOffset >= buffer3.byteLength ? none2() : some2(newOffset)]);
  }));
};
var groupAdjacentBy = /* @__PURE__ */ dual(2, (self, f) => {
  const groupAdjacentByChunk = (state, chunk3) => {
    if (isEmpty(chunk3)) {
      return [state, empty7()];
    }
    const builder = [];
    let from = 0;
    let until = 0;
    let key = void 0;
    let previousChunk = empty7();
    switch (state._tag) {
      case "Some": {
        const tuple = state.value;
        key = tuple[0];
        let loop3 = true;
        while (loop3 && until < chunk3.length) {
          const input = unsafeGet4(chunk3, until);
          const updatedKey = f(input);
          if (!equals(key, updatedKey)) {
            const previousChunk2 = tuple[1];
            const additionalChunk = unsafeFromArray(Array.from(chunk3).slice(from, until));
            const group2 = appendAll2(previousChunk2, additionalChunk);
            builder.push([key, group2]);
            key = updatedKey;
            from = until;
            loop3 = false;
          }
          until = until + 1;
        }
        if (loop3) {
          previousChunk = tuple[1];
        }
        break;
      }
      case "None": {
        key = f(unsafeGet4(chunk3, until));
        until = until + 1;
        break;
      }
    }
    while (until < chunk3.length) {
      const input = unsafeGet4(chunk3, until);
      const updatedKey = f(input);
      if (!equals(key, updatedKey)) {
        builder.push([key, unsafeFromArray(Array.from(chunk3).slice(from, until))]);
        key = updatedKey;
        from = until;
      }
      until = until + 1;
    }
    const nonEmptyChunk = appendAll2(previousChunk, unsafeFromArray(Array.from(chunk3).slice(from, until)));
    const output = unsafeFromArray(builder);
    return [some2([key, nonEmptyChunk]), output];
  };
  const groupAdjacent = (state) => readWithCause({
    onInput: (input) => {
      const [updatedState, output] = groupAdjacentByChunk(state, input);
      return isEmpty(output) ? groupAdjacent(updatedState) : flatMap13(write(output), () => groupAdjacent(updatedState));
    },
    onFailure: (cause3) => match2(state, {
      onNone: () => failCause10(cause3),
      onSome: (output) => flatMap13(write(of2(output)), () => failCause10(cause3))
    }),
    onDone: (done11) => match2(state, {
      onNone: () => succeedNow(done11),
      onSome: (output) => flatMap13(write(of2(output)), () => succeedNow(done11))
    })
  });
  return new StreamImpl(pipeToOrFail(toChannel2(self), groupAdjacent(none2())));
});
var grouped = /* @__PURE__ */ dual(2, (self, chunkSize) => pipe(self, rechunk(chunkSize), chunks));
var groupedWithin = /* @__PURE__ */ dual(3, (self, chunkSize, duration2) => aggregateWithin(self, collectAllN(chunkSize), spaced2(duration2)));
var haltWhen = /* @__PURE__ */ dual(2, (self, effect4) => {
  const writer = (fiber) => pipe(poll4(fiber), map19(match2({
    onNone: () => readWith({
      onInput: (input) => flatMap13(write(input), () => writer(fiber)),
      onFailure: fail11,
      onDone: () => void_6
    }),
    onSome: match6({
      onFailure: failCause10,
      onSuccess: () => void_6
    })
  })), unwrap);
  return new StreamImpl(unwrapScopedWith((scope5) => effect4.pipe(forkIn2(scope5), map19((fiber) => toChannel2(self).pipe(pipeTo(writer(fiber)))))));
});
var haltAfter = /* @__PURE__ */ dual(2, (self, duration2) => pipe(self, haltWhen(sleep2(duration2))));
var haltWhenDeferred = /* @__PURE__ */ dual(2, (self, deferred) => {
  const writer = pipe(poll(deferred), map19(match2({
    onNone: () => readWith({
      onInput: (input) => pipe(write(input), flatMap13(() => writer)),
      onFailure: fail11,
      onDone: () => void_6
    }),
    onSome: (effect4) => unwrap(match12(effect4, {
      onFailure: fail11,
      onSuccess: () => void_6
    }))
  })), unwrap);
  return new StreamImpl(pipe(toChannel2(self), pipeTo(writer)));
});
var identityStream = () => new StreamImpl(identityChannel());
var interleave = /* @__PURE__ */ dual(2, (self, that) => pipe(self, interleaveWith(that, forever5(make51(true, false)))));
var interleaveWith = /* @__PURE__ */ dual(3, (self, that, decider) => {
  const producer = (handoff) => readWithCause({
    onInput: (value) => flatMap13(fromEffect4(offer5(handoff, of5(value))), () => producer(handoff)),
    onFailure: (cause3) => fromEffect4(offer5(handoff, failCause11(cause3))),
    onDone: () => fromEffect4(offer5(handoff, end4))
  });
  return new StreamImpl(unwrapScopedWith((scope5) => pipe(make50(), zip6(make50()), tap4(([left3]) => toChannel2(self).pipe(concatMap(writeChunk), pipeTo(producer(left3)), runIn(scope5), forkIn2(scope5))), tap4(([_, right3]) => toChannel2(that).pipe(concatMap(writeChunk), pipeTo(producer(right3)), runIn(scope5), forkIn2(scope5))), map19(([left3, right3]) => {
    const process2 = (leftDone, rightDone) => readWithCause({
      onInput: (bool) => {
        if (bool && !leftDone) {
          return pipe(fromEffect4(take7(left3)), flatMap13(match17({
            onEnd: () => rightDone ? void_6 : process2(true, rightDone),
            onFailure: failCause10,
            onSuccess: (chunk3) => pipe(write(chunk3), flatMap13(() => process2(leftDone, rightDone)))
          })));
        }
        if (!bool && !rightDone) {
          return pipe(fromEffect4(take7(right3)), flatMap13(match17({
            onEnd: () => leftDone ? void_6 : process2(leftDone, true),
            onFailure: failCause10,
            onSuccess: (chunk3) => pipe(write(chunk3), flatMap13(() => process2(leftDone, rightDone)))
          })));
        }
        return process2(leftDone, rightDone);
      },
      onFailure: failCause10,
      onDone: () => void_6
    });
    return pipe(toChannel2(decider), concatMap(writeChunk), pipeTo(process2(false, false)));
  }))));
});
var intersperse2 = /* @__PURE__ */ dual(2, (self, element) => new StreamImpl(pipe(toChannel2(self), pipeToOrFail(suspend6(() => {
  const writer = (isFirst) => readWithCause({
    onInput: (chunk3) => {
      const builder = [];
      let flagResult = isFirst;
      for (const output of chunk3) {
        if (flagResult) {
          flagResult = false;
          builder.push(output);
        } else {
          builder.push(element);
          builder.push(output);
        }
      }
      return pipe(write(unsafeFromArray(builder)), flatMap13(() => writer(flagResult)));
    },
    onFailure: failCause10,
    onDone: () => void_6
  });
  return writer(true);
})))));
var intersperseAffixes = /* @__PURE__ */ dual(2, (self, {
  end: end6,
  middle,
  start: start3
}) => pipe(make51(start3), concat2(pipe(self, intersperse2(middle))), concat2(make51(end6))));
var interruptAfter = /* @__PURE__ */ dual(2, (self, duration2) => pipe(self, interruptWhen2(sleep2(duration2))));
var interruptWhen2 = /* @__PURE__ */ dual(2, (self, effect4) => new StreamImpl(pipe(toChannel2(self), interruptWhen(effect4))));
var interruptWhenDeferred2 = /* @__PURE__ */ dual(2, (self, deferred) => new StreamImpl(pipe(toChannel2(self), interruptWhenDeferred(deferred))));
var iterate3 = (value, next) => unfold3(value, (a) => some2([a, next(a)]));
var make51 = (...as11) => fromIterable12(as11);
var map24 = /* @__PURE__ */ dual(2, (self, f) => new StreamImpl(pipe(toChannel2(self), mapOut(map5(f)))));
var mapAccum5 = /* @__PURE__ */ dual(3, (self, s, f) => {
  const accumulator = (s2) => readWith({
    onInput: (input) => {
      const [nextS, chunk3] = mapAccum2(input, s2, f);
      return flatMap13(write(chunk3), () => accumulator(nextS));
    },
    onFailure: fail11,
    onDone: () => void_6
  });
  return new StreamImpl(pipe(toChannel2(self), pipeTo(accumulator(s))));
});
var mapAccumEffect = /* @__PURE__ */ dual(3, (self, s, f) => suspend10(() => {
  const accumulator = (s2) => readWith({
    onInput: (input) => pipe(suspend4(() => {
      const outputs = [];
      const emit2 = (output) => sync5(() => {
        outputs.push(output);
      });
      return pipe(input, reduce12(s2, (s3, a) => pipe(f(s3, a), flatMap11(([s4, a2]) => pipe(emit2(a2), as5(s4))))), match12({
        onFailure: (error) => {
          if (outputs.length !== 0) {
            return zipRight6(write(unsafeFromArray(outputs)), fail11(error));
          }
          return fail11(error);
        },
        onSuccess: (s3) => flatMap13(write(unsafeFromArray(outputs)), () => accumulator(s3))
      }));
    }), unwrap),
    onFailure: fail11,
    onDone: () => void_6
  });
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(accumulator(s))));
}));
var mapBoth6 = /* @__PURE__ */ dual(2, (self, options) => pipe(self, mapError6(options.onFailure), map24(options.onSuccess)));
var mapChunks = /* @__PURE__ */ dual(2, (self, f) => new StreamImpl(pipe(toChannel2(self), mapOut(f))));
var mapChunksEffect = /* @__PURE__ */ dual(2, (self, f) => new StreamImpl(pipe(toChannel2(self), mapOutEffect(f))));
var mapConcat = /* @__PURE__ */ dual(2, (self, f) => pipe(self, mapConcatChunk((a) => fromIterable3(f(a)))));
var mapConcatChunk = /* @__PURE__ */ dual(2, (self, f) => pipe(self, mapChunks(flatMap3(f))));
var mapConcatChunkEffect = /* @__PURE__ */ dual(2, (self, f) => pipe(self, mapEffectSequential(f), mapConcatChunk(identity)));
var mapConcatEffect = /* @__PURE__ */ dual(2, (self, f) => pipe(self, mapEffectSequential((a) => pipe(f(a), map19(fromIterable3))), mapConcatChunk(identity)));
var mapEffectSequential = /* @__PURE__ */ dual(2, (self, f) => {
  const loop3 = (iterator) => {
    const next = iterator.next();
    if (next.done) {
      return readWithCause({
        onInput: (elem) => loop3(elem[Symbol.iterator]()),
        onFailure: failCause10,
        onDone: succeed11
      });
    } else {
      const value = next.value;
      return unwrap(map19(f(value), (a2) => flatMap13(write(of2(a2)), () => loop3(iterator))));
    }
  };
  return new StreamImpl(pipe(toChannel2(self), pipeTo(suspend6(() => loop3(empty7()[Symbol.iterator]())))));
});
var mapEffectPar = /* @__PURE__ */ dual(3, (self, n, f) => new StreamImpl(pipe(toChannel2(self), concatMap(writeChunk), mapOutEffectPar(f, n), mapOut(of2))));
var mapError6 = /* @__PURE__ */ dual(2, (self, f) => new StreamImpl(pipe(toChannel2(self), mapError5(f))));
var mapErrorCause4 = /* @__PURE__ */ dual(2, (self, f) => new StreamImpl(pipe(toChannel2(self), mapErrorCause3(f))));
var merge9 = /* @__PURE__ */ dual((args2) => isStream(args2[1]), (self, that, options) => mergeWith3(self, that, {
  onSelf: identity,
  onOther: identity,
  haltStrategy: options?.haltStrategy
}));
var mergeAll7 = /* @__PURE__ */ dual((args2) => Symbol.iterator in args2[0], (streams, options) => flatten14(fromIterable12(streams), options));
var mergeWithTag = /* @__PURE__ */ dual(2, (streams, options) => {
  const keys6 = Object.keys(streams);
  const values4 = keys6.map((key) => streams[key].pipe(map24((value) => ({
    _tag: key,
    value
  }))));
  return mergeAll7(values4, options);
});
var mergeEither = /* @__PURE__ */ dual(2, (self, that) => mergeWith3(self, that, {
  onSelf: left2,
  onOther: right2
}));
var mergeLeft = /* @__PURE__ */ dual(2, (left3, right3) => pipe(left3, merge9(drain3(right3))));
var mergeRight = /* @__PURE__ */ dual(2, (left3, right3) => pipe(drain3(left3), merge9(right3)));
var mergeWith3 = /* @__PURE__ */ dual(3, (self, other, options) => {
  const strategy = options.haltStrategy ? fromInput2(options.haltStrategy) : Both2;
  const handler = (terminate) => (exit4) => terminate || !isSuccess(exit4) ? (
    // TODO: remove
    Done4(suspend4(() => exit4))
  ) : Await2((exit5) => suspend4(() => exit5));
  return new StreamImpl(mergeWith2(toChannel2(map24(self, options.onSelf)), {
    other: toChannel2(map24(other, options.onOther)),
    onSelfDone: handler(strategy._tag === "Either" || strategy._tag === "Left"),
    onOtherDone: handler(strategy._tag === "Either" || strategy._tag === "Right")
  }));
});
var mkString2 = (self) => run3(self, mkString);
var never4 = /* @__PURE__ */ fromEffect7(never3);
var onEnd = /* @__PURE__ */ dual(2, (self, effect4) => concat2(self, drain3(fromEffect7(effect4))));
var onError3 = /* @__PURE__ */ dual(2, (self, cleanup) => pipe(self, catchAllCause6((cause3) => fromEffect7(pipe(cleanup(cause3), zipRight5(failCause8(cause3)))))));
var onDone = /* @__PURE__ */ dual(2, (self, cleanup) => new StreamImpl(pipe(toChannel2(self), ensuringWith((exit4) => isSuccess(exit4) ? cleanup() : _void))));
var onStart = /* @__PURE__ */ dual(2, (self, effect4) => unwrap2(as5(effect4, self)));
var orDie5 = (self) => pipe(self, orDieWith4(identity));
var orDieWith4 = /* @__PURE__ */ dual(2, (self, f) => new StreamImpl(pipe(toChannel2(self), orDieWith3(f))));
var orElse8 = /* @__PURE__ */ dual(2, (self, that) => new StreamImpl(pipe(toChannel2(self), orElse7(() => toChannel2(that())))));
var orElseEither4 = /* @__PURE__ */ dual(2, (self, that) => pipe(self, map24(left2), orElse8(() => pipe(that(), map24(right2)))));
var orElseFail3 = /* @__PURE__ */ dual(2, (self, error) => pipe(self, orElse8(() => failSync7(error))));
var orElseIfEmpty = /* @__PURE__ */ dual(2, (self, element) => pipe(self, orElseIfEmptyChunk(() => of2(element()))));
var orElseIfEmptyChunk = /* @__PURE__ */ dual(2, (self, chunk3) => pipe(self, orElseIfEmptyStream(() => new StreamImpl(write(chunk3())))));
var orElseIfEmptyStream = /* @__PURE__ */ dual(2, (self, stream) => {
  const writer = readWith({
    onInput: (input) => {
      if (isEmpty(input)) {
        return suspend6(() => writer);
      }
      return pipe(write(input), zipRight6(identityChannel()));
    },
    onFailure: fail11,
    onDone: () => suspend6(() => toChannel2(stream()))
  });
  return new StreamImpl(pipe(toChannel2(self), pipeTo(writer)));
});
var orElseSucceed3 = /* @__PURE__ */ dual(2, (self, value) => pipe(self, orElse8(() => sync10(value))));
var paginate = (s, f) => paginateChunk(s, (s2) => {
  const page = f(s2);
  return [of2(page[0]), page[1]];
});
var paginateChunk = (s, f) => {
  const loop3 = (s2) => {
    const page = f(s2);
    return match2(page[1], {
      onNone: () => zipRight6(write(page[0]), void_6),
      onSome: (s3) => flatMap13(write(page[0]), () => loop3(s3))
    });
  };
  return new StreamImpl(suspend6(() => loop3(s)));
};
var paginateChunkEffect = (s, f) => {
  const loop3 = (s2) => unwrap(map19(f(s2), ([chunk3, option3]) => match2(option3, {
    onNone: () => zipRight6(write(chunk3), void_6),
    onSome: (s3) => flatMap13(write(chunk3), () => loop3(s3))
  })));
  return new StreamImpl(suspend6(() => loop3(s)));
};
var paginateEffect = (s, f) => paginateChunkEffect(s, (s2) => pipe(f(s2), map19(([a, s3]) => [of2(a), s3])));
var peel = /* @__PURE__ */ dual(2, (self, sink) => {
  const OP_EMIT5 = "Emit";
  const OP_HALT2 = "Halt";
  const OP_END2 = "End";
  return pipe(make20(), flatMap11((deferred) => pipe(make50(), map19((handoff) => {
    const consumer = foldSink(collectLeftover(sink), {
      onFailure: (error) => zipRight7(fromEffect6(fail3(deferred, error)), fail12(error)),
      onSuccess: ([z, leftovers]) => {
        const loop3 = readWithCause({
          onInput: (elements) => flatMap13(fromEffect4(offer5(handoff, {
            _tag: OP_EMIT5,
            elements
          })), () => loop3),
          onFailure: (cause3) => zipRight6(fromEffect4(offer5(handoff, {
            _tag: OP_HALT2,
            cause: cause3
          })), failCause10(cause3)),
          onDone: (_) => zipRight6(fromEffect4(offer5(handoff, {
            _tag: OP_END2
          })), void_6)
        });
        return fromChannel(pipe(fromEffect4(succeed2(deferred, z)), zipRight6(fromEffect4(pipe(handoff, offer5({
          _tag: OP_EMIT5,
          elements: leftovers
        })))), zipRight6(loop3)));
      }
    });
    const producer = pipe(take7(handoff), map19((signal) => {
      switch (signal._tag) {
        case OP_EMIT5: {
          return pipe(write(signal.elements), flatMap13(() => producer));
        }
        case OP_HALT2: {
          return failCause10(signal.cause);
        }
        case OP_END2: {
          return void_6;
        }
      }
    }), unwrap);
    return pipe(self, tapErrorCause5((cause3) => failCause2(deferred, cause3)), run3(consumer), forkScoped2, zipRight5(_await(deferred)), map19((z) => [z, new StreamImpl(producer)]));
  }))), flatten10);
});
var partition6 = /* @__PURE__ */ dual((args2) => typeof args2[1] === "function", (self, predicate, options) => partitionEither(self, (a) => succeed9(predicate(a) ? right2(a) : left2(a)), options));
var partitionEither = /* @__PURE__ */ dual((args2) => typeof args2[1] === "function", (self, predicate, options) => pipe(mapEffectSequential(self, predicate), distributedWith({
  size: 2,
  maximumLag: options?.bufferSize ?? 16,
  decide: match({
    onLeft: () => succeed9((n) => n === 0),
    onRight: () => succeed9((n) => n === 1)
  })
}), flatMap11(([queue1, queue2]) => succeed9([filterMap8(flattenExitOption(fromQueue2(queue1, {
  shutdown: true
})), (_) => match(_, {
  onLeft: some2,
  onRight: none2
})), filterMap8(flattenExitOption(fromQueue2(queue2, {
  shutdown: true
})), (_) => match(_, {
  onLeft: none2,
  onRight: some2
}))]))));
var pipeThrough = /* @__PURE__ */ dual(2, (self, sink) => new StreamImpl(pipe(toChannel2(self), pipeToOrFail(toChannel(sink)))));
var pipeThroughChannel = /* @__PURE__ */ dual(2, (self, channel) => new StreamImpl(pipeTo(toChannel2(self), channel)));
var pipeThroughChannelOrFail = /* @__PURE__ */ dual(2, (self, chan) => new StreamImpl(pipe(toChannel2(self), pipeToOrFail(chan))));
var prepend4 = /* @__PURE__ */ dual(2, (self, values4) => new StreamImpl(zipRight6(write(values4), toChannel2(self))));
var provideContext5 = /* @__PURE__ */ dual(2, (self, context7) => new StreamImpl(pipe(toChannel2(self), provideContext3(context7))));
var provideSomeContext2 = /* @__PURE__ */ dual(2, (self, context7) => mapInputContext5(self, merge3(context7)));
var provideLayer = /* @__PURE__ */ dual(2, (self, layer3) => new StreamImpl(unwrapScopedWith((scope5) => buildWithScope2(layer3, scope5).pipe(map19((env) => pipe(toChannel2(self), provideContext3(env)))))));
var provideService5 = /* @__PURE__ */ dual(3, (self, tag2, resource) => provideServiceEffect3(self, tag2, succeed9(resource)));
var provideServiceEffect3 = /* @__PURE__ */ dual(3, (self, tag2, effect4) => provideServiceStream(self, tag2, fromEffect7(effect4)));
var provideServiceStream = /* @__PURE__ */ dual(3, (self, tag2, stream) => contextWithStream((env) => flatMap16(stream, (service3) => pipe(self, provideContext5(add2(env, tag2, service3))))));
var mapInputContext5 = /* @__PURE__ */ dual(2, (self, f) => contextWithStream((env) => pipe(self, provideContext5(f(env)))));
var provideSomeLayer2 = /* @__PURE__ */ dual(2, (self, layer3) => (
  // @ts-expect-error
  // @effect-diagnostics-next-line missingEffectContext:off
  pipe(self, provideLayer(pipe(context4(), merge8(layer3))))
));
var range3 = (min4, max6, chunkSize = DefaultChunkSize) => suspend10(() => {
  if (min4 > max6) {
    return empty35;
  }
  const go2 = (min5, max7, chunkSize2) => {
    const remaining = max7 - min5 + 1;
    if (remaining > chunkSize2) {
      return pipe(write(range2(min5, min5 + chunkSize2 - 1)), flatMap13(() => go2(min5 + chunkSize2, max7, chunkSize2)));
    }
    return write(range2(min5, min5 + remaining - 1));
  };
  return new StreamImpl(go2(min4, max6, chunkSize));
});
var race3 = /* @__PURE__ */ dual(2, (left3, right3) => raceAll3(left3, right3));
var raceAll3 = (...streams) => make20().pipe(map19((halt2) => {
  let winner = null;
  return mergeAll7(streams.map((stream, index) => stream.pipe(takeWhile5(() => {
    if (winner === null) {
      winner = index;
      unsafeDone(halt2, void_3);
      return true;
    }
    return winner === index;
  }), interruptWhen2(_await(halt2).pipe(flatMap11(() => winner === index ? never3 : _void))))), {
    concurrency: streams.length
  });
}), unwrap2);
var rechunk = /* @__PURE__ */ dual(2, (self, n) => suspend10(() => {
  const target = Math.max(n, 1);
  const process2 = rechunkProcess(new StreamRechunker(target), target);
  return new StreamImpl(pipe(toChannel2(self), pipeTo(process2)));
}));
var rechunkProcess = (rechunker, target) => readWithCause({
  onInput: (chunk3) => {
    if (chunk3.length === target && rechunker.isEmpty()) {
      return flatMap13(write(chunk3), () => rechunkProcess(rechunker, target));
    }
    if (chunk3.length > 0) {
      const chunks3 = [];
      let result = void 0;
      let index = 0;
      while (index < chunk3.length) {
        while (index < chunk3.length && result === void 0) {
          result = rechunker.write(pipe(chunk3, unsafeGet4(index)));
          index = index + 1;
        }
        if (result !== void 0) {
          chunks3.push(result);
          result = void 0;
        }
      }
      return flatMap13(writeAll(...chunks3), () => rechunkProcess(rechunker, target));
    }
    return suspend6(() => rechunkProcess(rechunker, target));
  },
  onFailure: (cause3) => zipRight6(rechunker.emitIfNotEmpty(), failCause10(cause3)),
  onDone: () => rechunker.emitIfNotEmpty()
});
var StreamRechunker = class {
  n;
  builder = [];
  pos = 0;
  constructor(n) {
    this.n = n;
  }
  isEmpty() {
    return this.pos === 0;
  }
  write(elem) {
    this.builder.push(elem);
    this.pos += 1;
    if (this.pos === this.n) {
      const result = unsafeFromArray(this.builder);
      this.builder = [];
      this.pos = 0;
      return result;
    }
    return void 0;
  }
  emitIfNotEmpty() {
    if (this.pos !== 0) {
      return write(unsafeFromArray(this.builder));
    }
    return void_6;
  }
};
var refineOrDie = /* @__PURE__ */ dual(2, (self, pf) => pipe(self, refineOrDieWith(pf, identity)));
var refineOrDieWith = /* @__PURE__ */ dual(3, (self, pf, f) => new StreamImpl(catchAll5(toChannel2(self), (error) => match2(pf(error), {
  onNone: () => failCause10(die4(f(error))),
  onSome: fail11
}))));
var repeat2 = /* @__PURE__ */ dual(2, (self, schedule4) => filterMap8(repeatEither(self, schedule4), (_) => match(_, {
  onLeft: none2,
  onRight: some2
})));
var repeatEffect = (effect4) => repeatEffectOption(pipe(effect4, mapError3(some2)));
var repeatEffectChunk = (effect4) => repeatEffectChunkOption(pipe(effect4, mapError3(some2)));
var repeatEffectChunkOption = (effect4) => unfoldChunkEffect(effect4, (effect5) => pipe(map19(effect5, (chunk3) => some2([chunk3, effect5])), catchAll3(match2({
  onNone: () => succeed9(none2()),
  onSome: fail9
}))));
var repeatEffectOption = (effect4) => repeatEffectChunkOption(pipe(effect4, map19(of2)));
var repeatEither = /* @__PURE__ */ dual(2, (self, schedule4) => repeatWith(self, schedule4, {
  onElement: (a) => right2(a),
  onSchedule: left2
}));
var repeatElements = /* @__PURE__ */ dual(2, (self, schedule4) => filterMap8(repeatElementsWith(self, schedule4, {
  onElement: (a) => some2(a),
  onSchedule: none2
}), identity));
var repeatElementsWith = /* @__PURE__ */ dual(3, (self, schedule4, options) => {
  const driver3 = pipe(driver2(schedule4), map19((driver4) => {
    const feed = (input) => match2(head2(input), {
      onNone: () => loop3,
      onSome: (a) => zipRight6(write(of2(options.onElement(a))), step4(pipe(input, drop2(1)), a))
    });
    const step4 = (input, a) => {
      const advance = pipe(driver4.next(a), as5(pipe(write(of2(options.onElement(a))), flatMap13(() => step4(input, a)))));
      const reset = pipe(driver4.last, orDie3, flatMap11((b) => pipe(driver4.reset, map19(() => pipe(write(of2(options.onSchedule(b))), zipRight6(feed(input)))))));
      return pipe(advance, orElse5(() => reset), unwrap);
    };
    const loop3 = readWith({
      onInput: feed,
      onFailure: fail11,
      onDone: () => void_6
    });
    return loop3;
  }), unwrap);
  return new StreamImpl(pipe(toChannel2(self), pipeTo(driver3)));
});
var repeatValue = (value) => new StreamImpl(repeated(write(of2(value))));
var repeatWith = /* @__PURE__ */ dual(3, (self, schedule4, options) => {
  return pipe(driver2(schedule4), map19((driver3) => {
    const provideLastIterationInfo = provideServiceEffect3(CurrentIterationMetadata2, get13(driver3.iterationMeta));
    const process2 = pipe(self, provideLastIterationInfo, map24(options.onElement), toChannel2);
    const loop3 = unwrap(match12(driver3.next(void 0), {
      onFailure: () => void_6,
      onSuccess: (output) => flatMap13(process2, () => zipRight6(write(of2(options.onSchedule(output))), loop3))
    }));
    return new StreamImpl(zipRight6(process2, loop3));
  }), unwrap2);
});
var repeatWithSchedule = (value, schedule4) => repeatEffectWithSchedule(succeed9(value), schedule4);
var repeatEffectWithSchedule = (effect4, schedule4) => flatMap16(fromEffect7(zip6(effect4, driver2(schedule4))), ([a, driver3]) => {
  const provideLastIterationInfo = provideServiceEffect2(CurrentIterationMetadata2, get13(driver3.iterationMeta));
  return concat2(succeed15(a), unfoldEffect(a, (s) => matchEffect2(driver3.next(s), {
    onFailure: succeed9,
    onSuccess: () => map19(provideLastIterationInfo(effect4), (nextA) => some2([nextA, nextA]))
  })));
});
var retry6 = /* @__PURE__ */ dual(2, (self, policy) => driver2(policy).pipe(map19((driver3) => {
  const provideLastIterationInfo = provideServiceEffect3(CurrentIterationMetadata2, get13(driver3.iterationMeta));
  const loop3 = toChannel2(provideLastIterationInfo(self)).pipe(mapOutEffect((out) => as5(driver3.reset, out)), catchAll5((error) => driver3.next(error).pipe(match12({
    onFailure: () => fail11(error),
    onSuccess: () => loop3
  }), unwrap)));
  return loop3;
}), unwrap, fromChannel2));
var withExecutionPlan3 = /* @__PURE__ */ dual((args2) => isStream(args2[0]), (self, policy, options) => suspend10(() => {
  const preventFallbackOnPartialStream = options?.preventFallbackOnPartialStream ?? false;
  let i = 0;
  let lastError = none2();
  const loop3 = suspend10(() => {
    const step4 = policy.steps[i++];
    if (!step4) {
      return fail15(getOrThrow2(lastError));
    }
    let nextStream = isContext2(step4.provide) ? provideSomeContext2(self, step4.provide) : provideSomeLayer2(self, step4.provide);
    let receivedElements = false;
    if (isSome2(lastError)) {
      const error = lastError.value;
      let attempted = false;
      const wrapped = nextStream;
      nextStream = suspend10(() => {
        if (attempted) return wrapped;
        attempted = true;
        return fail15(error);
      });
      nextStream = scheduleDefectRefail2(retry6(nextStream, scheduleFromStep(step4, false)));
    } else {
      const schedule4 = scheduleFromStep(step4, true);
      nextStream = schedule4 ? scheduleDefectRefail2(retry6(nextStream, schedule4)) : nextStream;
    }
    return catchAll7(preventFallbackOnPartialStream ? mapChunks(nextStream, (chunk3) => {
      receivedElements = true;
      return chunk3;
    }) : nextStream, (error) => {
      if (preventFallbackOnPartialStream && receivedElements) {
        return fail15(error);
      }
      lastError = some2(error);
      return loop3;
    });
  });
  return loop3;
}));
var scheduleDefectRefail2 = (self) => catchAllCause6(self, (cause3) => failCause13(scheduleDefectRefailCause(cause3)));
var run3 = /* @__PURE__ */ dual(2, (self, sink) => toChannel2(self).pipe(pipeToOrFail(toChannel(sink)), runDrain));
var runCollect = (self) => run3(self, collectAll());
var runCount = (self) => run3(self, count);
var runDrain2 = (self) => run3(self, drain2);
var runFold = /* @__PURE__ */ dual(3, (self, s, f) => runFoldWhile(self, s, constTrue, f));
var runFoldEffect = /* @__PURE__ */ dual(3, (self, s, f) => runFoldWhileEffect(self, s, constTrue, f));
var runFoldScoped = /* @__PURE__ */ dual(3, (self, s, f) => pipe(self, runFoldWhileScoped(s, constTrue, f)));
var runFoldScopedEffect = /* @__PURE__ */ dual(3, (self, s, f) => pipe(self, runFoldWhileScopedEffect(s, constTrue, f)));
var runFoldWhile = /* @__PURE__ */ dual(4, (self, s, cont, f) => run3(self, fold(s, cont, f)));
var runFoldWhileEffect = /* @__PURE__ */ dual(4, (self, s, cont, f) => run3(self, foldEffect(s, cont, f)));
var runFoldWhileScoped = /* @__PURE__ */ dual(4, (self, s, cont, f) => pipe(self, runScoped2(fold(s, cont, f))));
var runFoldWhileScopedEffect = /* @__PURE__ */ dual(4, (self, s, cont, f) => pipe(self, runScoped2(foldEffect(s, cont, f))));
var runForEach = /* @__PURE__ */ dual(2, (self, f) => run3(self, forEach11(f)));
var runForEachChunk = /* @__PURE__ */ dual(2, (self, f) => run3(self, forEachChunk(f)));
var runForEachChunkScoped = /* @__PURE__ */ dual(2, (self, f) => pipe(self, runScoped2(forEachChunk(f))));
var runForEachScoped = /* @__PURE__ */ dual(2, (self, f) => pipe(self, runScoped2(forEach11(f))));
var runForEachWhile = /* @__PURE__ */ dual(2, (self, f) => run3(self, forEachWhile(f)));
var runForEachWhileScoped = /* @__PURE__ */ dual(2, (self, f) => pipe(self, runScoped2(forEachWhile(f))));
var runHead = (self) => run3(self, head5());
var runIntoPubSub = /* @__PURE__ */ dual(2, (self, pubsub) => pipe(self, runIntoQueue(pubsub)));
var runIntoPubSubScoped = /* @__PURE__ */ dual(2, (self, pubsub) => pipe(self, runIntoQueueScoped(pubsub)));
var runIntoQueue = /* @__PURE__ */ dual(2, (self, queue) => pipe(self, runIntoQueueScoped(queue), scoped2));
var runIntoQueueElementsScoped = /* @__PURE__ */ dual(2, (self, queue) => {
  const writer = readWithCause({
    onInput: (input) => flatMap13(fromEffect4(offerAll3(queue, map5(input, succeed3))), () => writer),
    onFailure: (cause3) => fromEffect4(offer3(queue, failCause3(map15(cause3, some2)))),
    onDone: () => fromEffect4(offer3(queue, fail4(none2())))
  });
  return pipe(pipeTo(toChannel2(self), writer), drain, runScoped, asVoid4);
});
var runIntoQueueScoped = /* @__PURE__ */ dual(2, (self, queue) => {
  const writer = readWithCause({
    onInput: (input) => flatMap13(write(chunk2(input)), () => writer),
    onFailure: (cause3) => write(failCause11(cause3)),
    onDone: () => write(end4)
  });
  return pipe(pipeTo(toChannel2(self), writer), mapOutEffect((take10) => offer3(queue, take10)), drain, runScoped, asVoid4);
});
var runLast = (self) => run3(self, last4());
var runScoped2 = /* @__PURE__ */ dual(2, (self, sink) => pipe(toChannel2(self), pipeToOrFail(toChannel(sink)), drain, runScoped));
var runSum = (self) => run3(self, sum2);
var scan2 = /* @__PURE__ */ dual(3, (self, s, f) => pipe(self, scanEffect(s, (s2, a) => succeed9(f(s2, a)))));
var scanReduce = /* @__PURE__ */ dual(2, (self, f) => pipe(self, scanReduceEffect((a2, a) => succeed9(f(a2, a)))));
var scanReduceEffect = /* @__PURE__ */ dual(2, (self, f) => pipe(self, mapAccumEffect(none2(), (option3, a) => {
  switch (option3._tag) {
    case "None": {
      return succeed9([some2(a), a]);
    }
    case "Some": {
      return pipe(f(option3.value, a), map19((b) => [some2(b), b]));
    }
  }
})));
var schedule2 = /* @__PURE__ */ dual(2, (self, schedule4) => filterMap8(scheduleWith(self, schedule4, {
  onElement: some2,
  onSchedule: none2
}), identity));
var scheduleWith = /* @__PURE__ */ dual(3, (self, schedule4, options) => {
  const loop3 = (driver3, iterator) => {
    const next = iterator.next();
    if (next.done) {
      return readWithCause({
        onInput: (chunk3) => loop3(driver3, chunk3[Symbol.iterator]()),
        onFailure: failCause10,
        onDone: succeedNow
      });
    }
    return unwrap(matchEffect2(driver3.next(next.value), {
      onFailure: () => pipe(driver3.last, orDie3, map19((b) => pipe(write(make7(options.onElement(next.value), options.onSchedule(b))), flatMap13(() => loop3(driver3, iterator)))), zipLeft4(driver3.reset)),
      onSuccess: () => succeed9(pipe(write(of2(options.onElement(next.value))), flatMap13(() => loop3(driver3, iterator))))
    }));
  };
  return new StreamImpl(pipe(fromEffect4(driver2(schedule4)), flatMap13((driver3) => pipe(toChannel2(self), pipeTo(loop3(driver3, empty7()[Symbol.iterator]()))))));
});
var scanEffect = /* @__PURE__ */ dual(3, (self, s, f) => new StreamImpl(pipe(write(of2(s)), flatMap13(() => toChannel2(pipe(self, mapAccumEffect(s, (s2, a) => pipe(f(s2, a), map19((s3) => [s3, s3])))))))));
var scoped5 = (effect4) => new StreamImpl(ensuring3(scoped4(pipe(effect4, map19(of2))), _void));
var scopedWith4 = (f) => new StreamImpl(scopedWith3((scope5) => f(scope5).pipe(map19(of2))));
var some7 = (self) => pipe(self, mapError6(some2), someOrFail(() => none2()));
var someOrElse = /* @__PURE__ */ dual(2, (self, fallback) => pipe(self, map24(getOrElse(fallback))));
var someOrFail = /* @__PURE__ */ dual(2, (self, error) => mapEffectSequential(self, match2({
  onNone: () => failSync3(error),
  onSome: succeed9
})));
var sliding7 = /* @__PURE__ */ dual(2, (self, chunkSize) => slidingSize(self, chunkSize, 1));
var slidingSize = /* @__PURE__ */ dual(3, (self, chunkSize, stepSize) => {
  if (chunkSize <= 0 || stepSize <= 0) {
    return die10(new IllegalArgumentException2("Invalid bounds - `chunkSize` and `stepSize` must be greater than zero"));
  }
  return new StreamImpl(suspend6(() => {
    const queue = new RingBuffer(chunkSize);
    const emitOnStreamEnd = (queueSize, channelEnd) => {
      if (queueSize < chunkSize) {
        const items = queue.toChunk();
        const result2 = isEmpty(items) ? empty7() : of2(items);
        return pipe(write(result2), flatMap13(() => channelEnd));
      }
      const lastEmitIndex = queueSize - (queueSize - chunkSize) % stepSize;
      if (lastEmitIndex === queueSize) {
        return channelEnd;
      }
      const leftovers = queueSize - (lastEmitIndex - chunkSize + stepSize);
      const lastItems = pipe(queue.toChunk(), takeRight2(leftovers));
      const result = isEmpty(lastItems) ? empty7() : of2(lastItems);
      return pipe(write(result), flatMap13(() => channelEnd));
    };
    const reader = (queueSize) => readWithCause({
      onInput: (input) => flatMap13(write(filterMap4(input, (element, index) => {
        queue.put(element);
        const currentIndex = queueSize + index + 1;
        if (currentIndex < chunkSize || (currentIndex - chunkSize) % stepSize > 0) {
          return none2();
        }
        return some2(queue.toChunk());
      })), () => reader(queueSize + input.length)),
      onFailure: (cause3) => emitOnStreamEnd(queueSize, failCause10(cause3)),
      onDone: () => emitOnStreamEnd(queueSize, void_6)
    });
    return pipe(toChannel2(self), pipeTo(reader(0)));
  }));
});
var split2 = /* @__PURE__ */ dual(2, (self, predicate) => {
  const split4 = (leftovers, input) => {
    const [chunk3, remaining] = pipe(leftovers, appendAll2(input), splitWhere2(predicate));
    if (isEmpty(chunk3) || isEmpty(remaining)) {
      return loop3(pipe(chunk3, appendAll2(pipe(remaining, drop2(1)))));
    }
    return pipe(write(of2(chunk3)), flatMap13(() => split4(empty7(), pipe(remaining, drop2(1)))));
  };
  const loop3 = (leftovers) => readWith({
    onInput: (input) => split4(leftovers, input),
    onFailure: fail11,
    onDone: () => {
      if (isEmpty(leftovers)) {
        return void_6;
      }
      if (isNone2(pipe(leftovers, findFirst4(predicate)))) {
        return zipRight6(write(of2(leftovers)), void_6);
      }
      return zipRight6(split4(empty7(), leftovers), void_6);
    }
  });
  return new StreamImpl(pipe(toChannel2(self), pipeTo(loop3(empty7()))));
});
var splitOnChunk = /* @__PURE__ */ dual(2, (self, delimiter) => {
  const next = (leftover, delimiterIndex) => readWithCause({
    onInput: (inputChunk) => {
      let buffer3;
      const [carry, delimiterCursor] = pipe(inputChunk, reduce3([pipe(leftover, getOrElse(() => empty7())), delimiterIndex], ([carry2, delimiterCursor2], a) => {
        const concatenated = pipe(carry2, append2(a));
        if (delimiterCursor2 < delimiter.length && equals(a, pipe(delimiter, unsafeGet4(delimiterCursor2)))) {
          if (delimiterCursor2 + 1 === delimiter.length) {
            if (buffer3 === void 0) {
              buffer3 = [];
            }
            buffer3.push(pipe(concatenated, take2(concatenated.length - delimiter.length)));
            return [empty7(), 0];
          }
          return [concatenated, delimiterCursor2 + 1];
        }
        return [concatenated, equals(a, pipe(delimiter, unsafeGet4(0))) ? 1 : 0];
      }));
      const output = buffer3 === void 0 ? empty7() : unsafeFromArray(buffer3);
      return flatMap13(write(output), () => next(isNonEmpty2(carry) ? some2(carry) : none2(), delimiterCursor));
    },
    onFailure: (cause3) => match2(leftover, {
      onNone: () => failCause10(cause3),
      onSome: (chunk3) => zipRight6(write(of2(chunk3)), failCause10(cause3))
    }),
    onDone: (done11) => match2(leftover, {
      onNone: () => succeed11(done11),
      onSome: (chunk3) => zipRight6(write(of2(chunk3)), succeed11(done11))
    })
  });
  return new StreamImpl(pipe(toChannel2(self), pipeTo(next(none2(), 0))));
});
var splitLines2 = (self) => pipeThroughChannel(self, splitLines());
var succeed15 = (value) => fromChunk(of2(value));
var sync10 = (evaluate3) => suspend10(() => fromChunk(of2(evaluate3())));
var suspend10 = (stream) => new StreamImpl(suspend6(() => toChannel2(stream())));
var take8 = /* @__PURE__ */ dual(2, (self, n) => {
  if (!Number.isInteger(n)) {
    return die10(new IllegalArgumentException2(`${n} must be an integer`));
  }
  const loop3 = (n2) => readWith({
    onInput: (input) => {
      const taken = pipe(input, take2(Math.min(n2, Number.POSITIVE_INFINITY)));
      const leftover = Math.max(0, n2 - taken.length);
      const more = leftover > 0;
      if (more) {
        return pipe(write(taken), flatMap13(() => loop3(leftover)));
      }
      return write(taken);
    },
    onFailure: fail11,
    onDone: succeed11
  });
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(0 < n ? loop3(n) : void_6)));
});
var takeRight3 = /* @__PURE__ */ dual(2, (self, n) => {
  if (n <= 0) {
    return empty35;
  }
  return new StreamImpl(pipe(succeed9(new RingBuffer(n)), map19((queue) => {
    const reader = readWith({
      onInput: (input) => {
        for (const element of input) {
          queue.put(element);
        }
        return reader;
      },
      onFailure: fail11,
      onDone: () => pipe(write(queue.toChunk()), zipRight6(void_6))
    });
    return pipe(toChannel2(self), pipeTo(reader));
  }), unwrap));
});
var takeUntil3 = /* @__PURE__ */ dual(2, (self, predicate) => {
  const loop3 = readWith({
    onInput: (input) => {
      const taken = pipe(input, takeWhile2((a) => !predicate(a)));
      const last5 = pipe(input, drop2(taken.length), take2(1));
      if (isEmpty(last5)) {
        return pipe(write(taken), flatMap13(() => loop3));
      }
      return write(pipe(taken, appendAll2(last5)));
    },
    onFailure: fail11,
    onDone: succeed11
  });
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(loop3)));
});
var takeUntilEffect = /* @__PURE__ */ dual(2, (self, predicate) => {
  const loop3 = (iterator) => {
    const next = iterator.next();
    if (next.done) {
      return readWithCause({
        onInput: (elem) => loop3(elem[Symbol.iterator]()),
        onFailure: failCause10,
        onDone: succeed11
      });
    }
    return pipe(predicate(next.value), map19((bool) => bool ? write(of2(next.value)) : pipe(write(of2(next.value)), flatMap13(() => loop3(iterator)))), unwrap);
  };
  return new StreamImpl(pipe(toChannel2(self), pipeTo(loop3(empty7()[Symbol.iterator]()))));
});
var takeWhile5 = /* @__PURE__ */ dual(2, (self, predicate) => {
  const loop3 = readWith({
    onInput: (input) => {
      const taken = pipe(input, takeWhile2(predicate));
      const more = taken.length === input.length;
      if (more) {
        return pipe(write(taken), flatMap13(() => loop3));
      }
      return write(taken);
    },
    onFailure: fail11,
    onDone: succeed11
  });
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(loop3)));
});
var tap7 = /* @__PURE__ */ dual(2, (self, f) => mapEffectSequential(self, (a) => as5(f(a), a)));
var tapBoth3 = /* @__PURE__ */ dual(2, (self, options) => pipe(self, tapError5(options.onFailure), tap7(options.onSuccess)));
var tapError5 = /* @__PURE__ */ dual(2, (self, f) => catchAll7(self, (error) => fromEffect7(zipRight5(f(error), fail9(error)))));
var tapErrorCause5 = /* @__PURE__ */ dual(2, (self, f) => {
  const loop3 = readWithCause({
    onInput: (chunk3) => flatMap13(write(chunk3), () => loop3),
    onFailure: (cause3) => fromEffect4(zipRight5(f(cause3), failCause8(cause3))),
    onDone: succeedNow
  });
  return new StreamImpl(pipe(toChannel2(self), pipeTo(loop3)));
});
var tapSink = /* @__PURE__ */ dual(2, (self, sink) => pipe(fromEffect7(all4([bounded5(1), make20()])), flatMap16(([queue, deferred]) => {
  const right3 = flattenTake(fromQueue2(queue, {
    maxChunkSize: 1
  }));
  const loop3 = readWithCause({
    onInput: (chunk3) => pipe(fromEffect4(offer3(queue, chunk2(chunk3))), foldCauseChannel({
      onFailure: () => flatMap13(write(chunk3), () => identityChannel()),
      onSuccess: () => flatMap13(write(chunk3), () => loop3)
    })),
    onFailure: (cause3) => pipe(fromEffect4(offer3(queue, failCause11(cause3))), foldCauseChannel({
      onFailure: () => failCause10(cause3),
      onSuccess: () => failCause10(cause3)
    })),
    onDone: () => pipe(fromEffect4(offer3(queue, end4)), foldCauseChannel({
      onFailure: () => void_6,
      onSuccess: () => void_6
    }))
  });
  return pipe(new StreamImpl(pipe(pipeTo(toChannel2(self), loop3), ensuring3(zipRight5(forkDaemon2(offer3(queue, end4)), _await(deferred))))), merge9(execute(pipe(run3(right3, sink), ensuring2(zipRight5(shutdown4(queue), succeed2(deferred, void 0)))))));
})));
var throttle = /* @__PURE__ */ dual(2, (self, options) => throttleEffect(self, {
  ...options,
  cost: (chunk3) => succeed9(options.cost(chunk3))
}));
var throttleEffect = /* @__PURE__ */ dual(2, (self, options) => {
  if (options.strategy === "enforce") {
    return throttleEnforceEffect(self, options.cost, options.units, options.duration, options.burst ?? 0);
  }
  return throttleShapeEffect(self, options.cost, options.units, options.duration, options.burst ?? 0);
});
var throttleEnforceEffect = (self, cost, units, duration2, burst) => {
  const loop3 = (tokens, timestampMillis) => readWithCause({
    onInput: (input) => pipe(cost(input), zip6(currentTimeMillis2), map19(([weight, currentTimeMillis3]) => {
      const elapsed2 = currentTimeMillis3 - timestampMillis;
      const cycles = elapsed2 / toMillis(duration2);
      const sum3 = tokens + cycles * units;
      const max6 = units + burst < 0 ? Number.POSITIVE_INFINITY : units + burst;
      const available = sum3 < 0 ? max6 : Math.min(sum3, max6);
      if (weight <= available) {
        return pipe(write(input), flatMap13(() => loop3(available - weight, currentTimeMillis3)));
      }
      return loop3(tokens, timestampMillis);
    }), unwrap),
    onFailure: failCause10,
    onDone: () => void_6
  });
  const throttled = pipe(currentTimeMillis2, map19((currentTimeMillis3) => loop3(units, currentTimeMillis3)), unwrap);
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(throttled)));
};
var throttleShapeEffect = (self, costFn, units, duration2, burst) => {
  const loop3 = (tokens, timestampMillis) => readWithCause({
    onInput: (input) => pipe(costFn(input), zip6(currentTimeMillis2), map19(([weight, currentTimeMillis3]) => {
      const elapsed2 = currentTimeMillis3 - timestampMillis;
      const cycles = elapsed2 / toMillis(duration2);
      const sum3 = tokens + cycles * units;
      const max6 = units + burst < 0 ? Number.POSITIVE_INFINITY : units + burst;
      const available = sum3 < 0 ? max6 : Math.min(sum3, max6);
      const remaining = available - weight;
      const waitCycles = remaining >= 0 ? 0 : -remaining / units;
      const delay3 = millis(Math.max(0, waitCycles * toMillis(duration2)));
      if (greaterThan2(delay3, zero)) {
        return pipe(fromEffect4(sleep2(delay3)), zipRight6(write(input)), flatMap13(() => loop3(remaining, currentTimeMillis3)));
      }
      return flatMap13(write(input), () => loop3(remaining, currentTimeMillis3));
    }), unwrap),
    onFailure: failCause10,
    onDone: () => void_6
  });
  const throttled = pipe(currentTimeMillis2, map19((currentTimeMillis3) => loop3(units, currentTimeMillis3)), unwrap);
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(throttled)));
};
var tick = (interval) => repeatWithSchedule(void 0, spaced2(interval));
var timeout3 = /* @__PURE__ */ dual(2, (self, duration2) => pipe(toPull2(self), map19(timeoutFail2({
  onTimeout: () => none2(),
  duration: duration2
})), fromPull2));
var timeoutFail3 = /* @__PURE__ */ dual(3, (self, error, duration2) => pipe(self, timeoutTo3(duration2, failSync7(error))));
var timeoutFailCause3 = /* @__PURE__ */ dual(3, (self, cause3, duration2) => pipe(toPull2(self), map19(timeoutFailCause2({
  onTimeout: () => map15(cause3(), some2),
  duration: duration2
})), fromPull2));
var timeoutTo3 = /* @__PURE__ */ dual(3, (self, duration2, that) => {
  const StreamTimeout = new RuntimeException2("Stream Timeout");
  return pipe(self, timeoutFailCause3(() => die4(StreamTimeout), duration2), catchSomeCause3((cause3) => isDieType2(cause3) && isRuntimeException2(cause3.defect) && cause3.defect.message !== void 0 && cause3.defect.message === "Stream Timeout" ? some2(that) : none2()));
});
var pubsubFromOptions = (options) => {
  if (typeof options === "number") {
    return bounded4(options);
  } else if (options.capacity === "unbounded") {
    return unbounded4({
      replay: options.replay
    });
  }
  switch (options.strategy) {
    case "dropping":
      return dropping3(options);
    case "sliding":
      return sliding3(options);
    default:
      return bounded4(options);
  }
};
var toPubSub2 = /* @__PURE__ */ dual(2, (self, capacity7) => pipe(acquireRelease2(pubsubFromOptions(capacity7), (pubsub) => shutdown3(pubsub)), tap4((pubsub) => pipe(self, runIntoPubSubScoped(pubsub), forkScoped2))));
var toPull2 = (self) => map19(toPull(toChannel2(self)), (pull) => pipe(pull, mapError3(some2), flatMap11(match({
  onLeft: () => fail9(none2()),
  onRight: succeed9
}))));
var toQueue2 = /* @__PURE__ */ dual((args2) => isStream(args2[0]), (self, options) => tap4(acquireRelease2(options?.strategy === "unbounded" ? unbounded5() : options?.strategy === "dropping" ? dropping4(options.capacity ?? 2) : options?.strategy === "sliding" ? sliding4(options.capacity ?? 2) : bounded5(options?.capacity ?? 2), (queue) => shutdown4(queue)), (queue) => forkScoped2(runIntoQueueScoped(self, queue))));
var toQueueOfElements = /* @__PURE__ */ dual((args2) => isStream(args2[0]), (self, options) => tap4(acquireRelease2(bounded5(options?.capacity ?? 2), (queue) => shutdown4(queue)), (queue) => forkScoped2(runIntoQueueElementsScoped(self, queue))));
var toReadableStream = /* @__PURE__ */ dual((args2) => isStream(args2[0]), (self, options) => toReadableStreamRuntime(self, defaultRuntime2, options));
var toReadableStreamEffect = /* @__PURE__ */ dual((args2) => isStream(args2[0]), (self, options) => map19(runtime3(), (runtime5) => toReadableStreamRuntime(self, runtime5, options)));
var toReadableStreamRuntime = /* @__PURE__ */ dual((args2) => isStream(args2[0]), (self, runtime5, options) => {
  const runFork4 = runFork3(runtime5);
  let currentResolve = void 0;
  let fiber = void 0;
  const latch = unsafeMakeLatch2(false);
  return new ReadableStream({
    start(controller) {
      fiber = runFork4(runForEachChunk(self, (chunk3) => {
        if (chunk3.length === 0) return _void;
        return latch.whenOpen(sync5(() => {
          latch.unsafeClose();
          for (const item of chunk3) {
            controller.enqueue(item);
          }
          currentResolve();
          currentResolve = void 0;
        }));
      }));
      fiber.addObserver((exit4) => {
        try {
          if (exit4._tag === "Failure") {
            controller.error(squash(exit4.cause));
          } else {
            controller.close();
          }
        } catch {
        }
      });
    },
    pull() {
      return new Promise((resolve) => {
        currentResolve = resolve;
        runSync(latch.open);
      });
    },
    cancel() {
      if (!fiber) return;
      return runPromise(asVoid4(interrupt6(fiber)));
    }
  }, options?.strategy);
});
var transduce = /* @__PURE__ */ dual(2, (self, sink) => {
  const newChannel = suspend6(() => {
    const leftovers = {
      ref: empty7()
    };
    const upstreamDone = {
      ref: false
    };
    const buffer3 = suspend6(() => {
      const leftover = leftovers.ref;
      if (isEmpty(leftover)) {
        return readWith({
          onInput: (input) => pipe(write(input), flatMap13(() => buffer3)),
          onFailure: fail11,
          onDone: succeedNow
        });
      }
      leftovers.ref = empty7();
      return pipe(writeChunk(leftover), flatMap13(() => buffer3));
    });
    const concatAndGet = (chunk3) => {
      const leftover = leftovers.ref;
      const concatenated = appendAll2(leftover, filter4(chunk3, (chunk4) => chunk4.length !== 0));
      leftovers.ref = concatenated;
      return concatenated;
    };
    const upstreamMarker = readWith({
      onInput: (input) => flatMap13(write(input), () => upstreamMarker),
      onFailure: fail11,
      onDone: (done11) => zipRight6(sync7(() => {
        upstreamDone.ref = true;
      }), succeedNow(done11))
    });
    const transducer = pipe(sink, toChannel, collectElements, flatMap13(([leftover, z]) => pipe(succeed11([upstreamDone.ref, concatAndGet(leftover)]), flatMap13(([done11, newLeftovers]) => {
      const nextChannel = done11 && isEmpty(newLeftovers) ? void_6 : transducer;
      return pipe(write(of2(z)), flatMap13(() => nextChannel));
    }))));
    return pipe(toChannel2(self), pipeTo(upstreamMarker), pipeTo(buffer3), pipeToOrFail(transducer));
  });
  return new StreamImpl(newChannel);
});
var toAsyncIterableRuntime = /* @__PURE__ */ dual((args2) => isStream(args2[0]), (self, runtime5) => {
  const runFork4 = runFork3(runtime5);
  return {
    [Symbol.asyncIterator]() {
      let currentResolve = void 0;
      let currentReject = void 0;
      let fiber = void 0;
      const latch = unsafeMakeLatch2(false);
      return {
        next() {
          if (!fiber) {
            fiber = runFork4(runForEach(self, (value) => latch.whenOpen(sync5(() => {
              latch.unsafeClose();
              currentResolve({
                done: false,
                value
              });
              currentResolve = currentReject = void 0;
            }))));
            fiber.addObserver((exit4) => {
              fiber = runFork2(latch.whenOpen(sync5(() => {
                if (exit4._tag === "Failure") {
                  currentReject(squash(exit4.cause));
                } else {
                  currentResolve({
                    done: true,
                    value: void 0
                  });
                }
                currentResolve = currentReject = void 0;
              })));
            });
          }
          return new Promise((resolve, reject) => {
            currentResolve = resolve;
            currentReject = reject;
            latch.unsafeOpen();
          });
        },
        return() {
          if (!fiber) return Promise.resolve({
            done: true,
            value: void 0
          });
          return runPromise(as5(interrupt6(fiber), {
            done: true,
            value: void 0
          }));
        }
      };
    }
  };
});
var toAsyncIterable = (self) => toAsyncIterableRuntime(self, defaultRuntime2);
var toAsyncIterableEffect = (self) => map19(runtime3(), (runtime5) => toAsyncIterableRuntime(self, runtime5));
var unfold3 = (s, f) => unfoldChunk(s, (s2) => pipe(f(s2), map2(([a, s3]) => [of2(a), s3])));
var unfoldChunk = (s, f) => {
  const loop3 = (s2) => match2(f(s2), {
    onNone: () => void_6,
    onSome: ([chunk3, s3]) => flatMap13(write(chunk3), () => loop3(s3))
  });
  return new StreamImpl(suspend6(() => loop3(s)));
};
var unfoldChunkEffect = (s, f) => suspend10(() => {
  const loop3 = (s2) => unwrap(map19(f(s2), match2({
    onNone: () => void_6,
    onSome: ([chunk3, s3]) => flatMap13(write(chunk3), () => loop3(s3))
  })));
  return new StreamImpl(loop3(s));
});
var unfoldEffect = (s, f) => unfoldChunkEffect(s, (s2) => pipe(f(s2), map19(map2(([a, s3]) => [of2(a), s3]))));
var void_8 = /* @__PURE__ */ succeed15(void 0);
var unwrap2 = (effect4) => flatten14(fromEffect7(effect4));
var unwrapScoped4 = (effect4) => flatten14(scoped5(effect4));
var unwrapScopedWith3 = (f) => flatten14(scopedWith4((scope5) => f(scope5)));
var updateService4 = /* @__PURE__ */ dual(3, (self, tag2, f) => pipe(self, mapInputContext5((context7) => pipe(context7, add2(tag2, f(pipe(context7, unsafeGet3(tag2))))))));
var when3 = /* @__PURE__ */ dual(2, (self, test3) => pipe(self, whenEffect3(sync5(test3))));
var whenCase = (evaluate3, pf) => whenCaseEffect(pf)(sync5(evaluate3));
var whenCaseEffect = /* @__PURE__ */ dual(2, (self, pf) => pipe(fromEffect7(self), flatMap16((a) => pipe(pf(a), getOrElse(() => empty35)))));
var whenEffect3 = /* @__PURE__ */ dual(2, (self, effect4) => pipe(fromEffect7(effect4), flatMap16((bool) => bool ? self : empty35)));
var withSpan6 = function() {
  const dataFirst = typeof arguments[0] !== "string";
  const name = dataFirst ? arguments[1] : arguments[0];
  const options = addSpanStackTrace(dataFirst ? arguments[2] : arguments[1]);
  if (dataFirst) {
    const self = arguments[0];
    return new StreamImpl(withSpan5(toChannel2(self), name, options));
  }
  return (self) => new StreamImpl(withSpan5(toChannel2(self), name, options));
};
var zip8 = /* @__PURE__ */ dual(2, (self, that) => pipe(self, zipWith11(that, (a, a2) => [a, a2])));
var zipFlatten = /* @__PURE__ */ dual(2, (self, that) => pipe(self, zipWith11(that, (a, a2) => [...a, a2])));
var zipAll = /* @__PURE__ */ dual(2, (self, options) => zipAllWith(self, {
  other: options.other,
  onSelf: (a) => [a, options.defaultOther],
  onOther: (a2) => [options.defaultSelf, a2],
  onBoth: (a, a2) => [a, a2]
}));
var zipAllLeft = /* @__PURE__ */ dual(3, (self, other, defaultSelf) => zipAllWith(self, {
  other,
  onSelf: identity,
  onOther: () => defaultSelf,
  onBoth: (a) => a
}));
var zipAllRight = /* @__PURE__ */ dual(3, (self, other, defaultRight) => zipAllWith(self, {
  other,
  onSelf: () => defaultRight,
  onOther: identity,
  onBoth: (_, a2) => a2
}));
var zipAllSortedByKey = /* @__PURE__ */ dual(2, (self, options) => zipAllSortedByKeyWith(self, {
  other: options.other,
  onSelf: (a) => [a, options.defaultOther],
  onOther: (a2) => [options.defaultSelf, a2],
  onBoth: (a, a2) => [a, a2],
  order: options.order
}));
var zipAllSortedByKeyLeft = /* @__PURE__ */ dual(2, (self, options) => zipAllSortedByKeyWith(self, {
  other: options.other,
  onSelf: identity,
  onOther: () => options.defaultSelf,
  onBoth: (a) => a,
  order: options.order
}));
var zipAllSortedByKeyRight = /* @__PURE__ */ dual(2, (self, options) => zipAllSortedByKeyWith(self, {
  other: options.other,
  onSelf: () => options.defaultOther,
  onOther: identity,
  onBoth: (_, a2) => a2,
  order: options.order
}));
var zipAllSortedByKeyWith = /* @__PURE__ */ dual(2, (self, options) => {
  const pull = (state, pullLeft, pullRight) => {
    switch (state._tag) {
      case OP_DRAIN_LEFT: {
        return pipe(pullLeft, match12({
          onFailure: fail4,
          onSuccess: (leftChunk) => succeed3([map5(leftChunk, ([k, a]) => [k, options.onSelf(a)]), DrainLeft])
        }));
      }
      case OP_DRAIN_RIGHT: {
        return pipe(pullRight, match12({
          onFailure: fail4,
          onSuccess: (rightChunk) => succeed3([map5(rightChunk, ([k, a2]) => [k, options.onOther(a2)]), DrainRight])
        }));
      }
      case OP_PULL_BOTH: {
        return pipe(unsome(pullLeft), zip6(unsome(pullRight), {
          concurrent: true
        }), matchEffect2({
          onFailure: (error) => succeed9(fail4(some2(error))),
          onSuccess: ([leftOption, rightOption]) => {
            if (isSome2(leftOption) && isSome2(rightOption)) {
              if (isEmpty(leftOption.value) && isEmpty(rightOption.value)) {
                return pull(PullBoth, pullLeft, pullRight);
              }
              if (isEmpty(leftOption.value)) {
                return pull(PullLeft(rightOption.value), pullLeft, pullRight);
              }
              if (isEmpty(rightOption.value)) {
                return pull(PullRight(leftOption.value), pullLeft, pullRight);
              }
              return succeed9(succeed3(merge11(leftOption.value, rightOption.value)));
            }
            if (isSome2(leftOption) && isNone2(rightOption)) {
              if (isEmpty(leftOption.value)) {
                return pull(DrainLeft, pullLeft, pullRight);
              }
              return succeed9(succeed3([pipe(leftOption.value, map5(([k, a]) => [k, options.onSelf(a)])), DrainLeft]));
            }
            if (isNone2(leftOption) && isSome2(rightOption)) {
              if (isEmpty(rightOption.value)) {
                return pull(DrainRight, pullLeft, pullRight);
              }
              return succeed9(succeed3([pipe(rightOption.value, map5(([k, a2]) => [k, options.onOther(a2)])), DrainRight]));
            }
            return succeed9(fail4(none2()));
          }
        }));
      }
      case OP_PULL_LEFT: {
        return matchEffect2(pullLeft, {
          onFailure: match2({
            onNone: () => succeed9(succeed3([pipe(state.rightChunk, map5(([k, a2]) => [k, options.onOther(a2)])), DrainRight])),
            onSome: (error) => succeed9(fail4(some2(error)))
          }),
          onSuccess: (leftChunk) => isEmpty(leftChunk) ? pull(PullLeft(state.rightChunk), pullLeft, pullRight) : succeed9(succeed3(merge11(leftChunk, state.rightChunk)))
        });
      }
      case OP_PULL_RIGHT: {
        return matchEffect2(pullRight, {
          onFailure: match2({
            onNone: () => succeed9(succeed3([map5(state.leftChunk, ([k, a]) => [k, options.onSelf(a)]), DrainLeft])),
            onSome: (error) => succeed9(fail4(some2(error)))
          }),
          onSuccess: (rightChunk) => isEmpty(rightChunk) ? pull(PullRight(state.leftChunk), pullLeft, pullRight) : succeed9(succeed3(merge11(state.leftChunk, rightChunk)))
        });
      }
    }
  };
  const merge11 = (leftChunk, rightChunk) => {
    const hasNext = (chunk3, index) => index < chunk3.length - 1;
    const builder = [];
    let state = void 0;
    let leftIndex = 0;
    let rightIndex = 0;
    let leftTuple = pipe(leftChunk, unsafeGet4(leftIndex));
    let rightTuple = pipe(rightChunk, unsafeGet4(rightIndex));
    let k1 = leftTuple[0];
    let a = leftTuple[1];
    let k2 = rightTuple[0];
    let a2 = rightTuple[1];
    let loop3 = true;
    while (loop3) {
      const compare2 = options.order(k1, k2);
      if (compare2 === 0) {
        builder.push([k1, options.onBoth(a, a2)]);
        if (hasNext(leftChunk, leftIndex) && hasNext(rightChunk, rightIndex)) {
          leftIndex = leftIndex + 1;
          rightIndex = rightIndex + 1;
          leftTuple = pipe(leftChunk, unsafeGet4(leftIndex));
          rightTuple = pipe(rightChunk, unsafeGet4(rightIndex));
          k1 = leftTuple[0];
          a = leftTuple[1];
          k2 = rightTuple[0];
          a2 = rightTuple[1];
        } else if (hasNext(leftChunk, leftIndex)) {
          state = PullRight(pipe(leftChunk, drop2(leftIndex + 1)));
          loop3 = false;
        } else if (hasNext(rightChunk, rightIndex)) {
          state = PullLeft(pipe(rightChunk, drop2(rightIndex + 1)));
          loop3 = false;
        } else {
          state = PullBoth;
          loop3 = false;
        }
      } else if (compare2 < 0) {
        builder.push([k1, options.onSelf(a)]);
        if (hasNext(leftChunk, leftIndex)) {
          leftIndex = leftIndex + 1;
          leftTuple = pipe(leftChunk, unsafeGet4(leftIndex));
          k1 = leftTuple[0];
          a = leftTuple[1];
        } else {
          const rightBuilder = [];
          rightBuilder.push(rightTuple);
          while (hasNext(rightChunk, rightIndex)) {
            rightIndex = rightIndex + 1;
            rightTuple = pipe(rightChunk, unsafeGet4(rightIndex));
            rightBuilder.push(rightTuple);
          }
          state = PullLeft(unsafeFromArray(rightBuilder));
          loop3 = false;
        }
      } else {
        builder.push([k2, options.onOther(a2)]);
        if (hasNext(rightChunk, rightIndex)) {
          rightIndex = rightIndex + 1;
          rightTuple = pipe(rightChunk, unsafeGet4(rightIndex));
          k2 = rightTuple[0];
          a2 = rightTuple[1];
        } else {
          const leftBuilder = [];
          leftBuilder.push(leftTuple);
          while (hasNext(leftChunk, leftIndex)) {
            leftIndex = leftIndex + 1;
            leftTuple = pipe(leftChunk, unsafeGet4(leftIndex));
            leftBuilder.push(leftTuple);
          }
          state = PullRight(unsafeFromArray(leftBuilder));
          loop3 = false;
        }
      }
    }
    return [unsafeFromArray(builder), state];
  };
  return combineChunks(self, options.other, PullBoth, pull);
});
var zipAllWith = /* @__PURE__ */ dual(2, (self, options) => {
  const pull = (state, pullLeft, pullRight) => {
    switch (state._tag) {
      case OP_DRAIN_LEFT: {
        return matchEffect2(pullLeft, {
          onFailure: (error) => succeed9(fail4(error)),
          onSuccess: (leftChunk) => succeed9(succeed3([map5(leftChunk, options.onSelf), DrainLeft]))
        });
      }
      case OP_DRAIN_RIGHT: {
        return matchEffect2(pullRight, {
          onFailure: (error) => succeed9(fail4(error)),
          onSuccess: (rightChunk) => succeed9(succeed3([map5(rightChunk, options.onOther), DrainRight]))
        });
      }
      case OP_PULL_BOTH: {
        return pipe(unsome(pullLeft), zip6(unsome(pullRight), {
          concurrent: true
        }), matchEffect2({
          onFailure: (error) => succeed9(fail4(some2(error))),
          onSuccess: ([leftOption, rightOption]) => {
            if (isSome2(leftOption) && isSome2(rightOption)) {
              if (isEmpty(leftOption.value) && isEmpty(rightOption.value)) {
                return pull(PullBoth, pullLeft, pullRight);
              }
              if (isEmpty(leftOption.value)) {
                return pull(PullLeft(rightOption.value), pullLeft, pullRight);
              }
              if (isEmpty(rightOption.value)) {
                return pull(PullRight(leftOption.value), pullLeft, pullRight);
              }
              return succeed9(succeed3(zip11(leftOption.value, rightOption.value, options.onBoth)));
            }
            if (isSome2(leftOption) && isNone2(rightOption)) {
              return succeed9(succeed3([map5(leftOption.value, options.onSelf), DrainLeft]));
            }
            if (isNone2(leftOption) && isSome2(rightOption)) {
              return succeed9(succeed3([map5(rightOption.value, options.onOther), DrainRight]));
            }
            return succeed9(fail4(none2()));
          }
        }));
      }
      case OP_PULL_LEFT: {
        return matchEffect2(pullLeft, {
          onFailure: match2({
            onNone: () => succeed9(succeed3([map5(state.rightChunk, options.onOther), DrainRight])),
            onSome: (error) => succeed9(fail4(some2(error)))
          }),
          onSuccess: (leftChunk) => {
            if (isEmpty(leftChunk)) {
              return pull(PullLeft(state.rightChunk), pullLeft, pullRight);
            }
            if (isEmpty(state.rightChunk)) {
              return pull(PullRight(leftChunk), pullLeft, pullRight);
            }
            return succeed9(succeed3(zip11(leftChunk, state.rightChunk, options.onBoth)));
          }
        });
      }
      case OP_PULL_RIGHT: {
        return matchEffect2(pullRight, {
          onFailure: match2({
            onNone: () => succeed9(succeed3([map5(state.leftChunk, options.onSelf), DrainLeft])),
            onSome: (error) => succeed9(fail4(some2(error)))
          }),
          onSuccess: (rightChunk) => {
            if (isEmpty(rightChunk)) {
              return pull(PullRight(state.leftChunk), pullLeft, pullRight);
            }
            if (isEmpty(state.leftChunk)) {
              return pull(PullLeft(rightChunk), pullLeft, pullRight);
            }
            return succeed9(succeed3(zip11(state.leftChunk, rightChunk, options.onBoth)));
          }
        });
      }
    }
  };
  const zip11 = (leftChunk, rightChunk, f) => {
    const [output, either7] = zipChunks(leftChunk, rightChunk, f);
    switch (either7._tag) {
      case "Left": {
        if (isEmpty(either7.left)) {
          return [output, PullBoth];
        }
        return [output, PullRight(either7.left)];
      }
      case "Right": {
        if (isEmpty(either7.right)) {
          return [output, PullBoth];
        }
        return [output, PullLeft(either7.right)];
      }
    }
  };
  return combineChunks(self, options.other, PullBoth, pull);
});
var zipLatest = /* @__PURE__ */ dual(2, (left3, right3) => pipe(left3, zipLatestWith(right3, (a, a2) => [a, a2])));
var zipLatestAll = (...streams) => {
  if (streams.length === 0) {
    return empty35;
  } else if (streams.length === 1) {
    return map24(streams[0], (x) => [x]);
  }
  const [head6, ...tail2] = streams;
  return zipLatestWith(head6, zipLatestAll(...tail2), (first2, second) => [first2, ...second]);
};
var zipLatestWith = /* @__PURE__ */ dual(3, (left3, right3, f) => {
  const pullNonEmpty = (pull) => pipe(pull, flatMap11((chunk3) => isEmpty(chunk3) ? pullNonEmpty(pull) : succeed9(chunk3)));
  return pipe(toPull2(left3), map19(pullNonEmpty), zip6(pipe(toPull2(right3), map19(pullNonEmpty))), flatMap11(([left4, right4]) => pipe(fromEffectOption(raceWith2(left4, right4, {
    onSelfDone: (leftDone, rightFiber) => pipe(suspend4(() => leftDone), zipWith6(join3(rightFiber), (l, r) => [l, r, true])),
    onOtherDone: (rightDone, leftFiber) => pipe(suspend4(() => rightDone), zipWith6(join3(leftFiber), (l, r) => [r, l, false]))
  })), flatMap16(([l, r, leftFirst]) => pipe(fromEffect7(make29([unsafeLast(l), unsafeLast(r)])), flatMap16((latest) => pipe(fromChunk(leftFirst ? pipe(r, map5((a2) => f(unsafeLast(l), a2))) : pipe(l, map5((a) => f(a, unsafeLast(r))))), concat2(pipe(repeatEffectOption(left4), mergeEither(repeatEffectOption(right4)), mapEffectSequential(match({
    onLeft: (leftChunk) => pipe(modify5(latest, ([_, rightLatest]) => [pipe(leftChunk, map5((a) => f(a, rightLatest))), [unsafeLast(leftChunk), rightLatest]])),
    onRight: (rightChunk) => pipe(modify5(latest, ([leftLatest, _]) => [pipe(rightChunk, map5((a2) => f(leftLatest, a2))), [leftLatest, unsafeLast(rightChunk)]]))
  })), flatMap16(fromChunk))))))), toPull2)), fromPull2);
});
var zipLeft7 = /* @__PURE__ */ dual(2, (left3, right3) => pipe(left3, zipWithChunks(right3, (left4, right4) => {
  if (left4.length > right4.length) {
    return [pipe(left4, take2(right4.length)), left2(pipe(left4, take2(right4.length)))];
  }
  return [left4, right2(pipe(right4, drop2(left4.length)))];
})));
var zipRight10 = /* @__PURE__ */ dual(2, (left3, right3) => pipe(left3, zipWithChunks(right3, (left4, right4) => {
  if (left4.length > right4.length) {
    return [right4, left2(pipe(left4, take2(right4.length)))];
  }
  return [pipe(right4, take2(left4.length)), right2(pipe(right4, drop2(left4.length)))];
})));
var zipWith11 = /* @__PURE__ */ dual(3, (left3, right3, f) => pipe(left3, zipWithChunks(right3, (leftChunk, rightChunk) => zipChunks(leftChunk, rightChunk, f))));
var zipWithChunks = /* @__PURE__ */ dual(3, (self, that, f) => {
  const pull = (state, pullLeft, pullRight) => {
    switch (state._tag) {
      case OP_PULL_BOTH2: {
        return pipe(unsome(pullLeft), zip6(unsome(pullRight), {
          concurrent: true
        }), matchEffect2({
          onFailure: (error) => succeed9(fail4(some2(error))),
          onSuccess: ([leftOption, rightOption]) => {
            if (isSome2(leftOption) && isSome2(rightOption)) {
              if (isEmpty(leftOption.value) && isEmpty(rightOption.value)) {
                return pull(PullBoth2, pullLeft, pullRight);
              }
              if (isEmpty(leftOption.value)) {
                return pull(PullLeft2(rightOption.value), pullLeft, pullRight);
              }
              if (isEmpty(rightOption.value)) {
                return pull(PullRight2(leftOption.value), pullLeft, pullRight);
              }
              return succeed9(succeed3(zip11(leftOption.value, rightOption.value)));
            }
            return succeed9(fail4(none2()));
          }
        }));
      }
      case OP_PULL_LEFT2: {
        return matchEffect2(pullLeft, {
          onFailure: (error) => succeed9(fail4(error)),
          onSuccess: (leftChunk) => {
            if (isEmpty(leftChunk)) {
              return pull(PullLeft2(state.rightChunk), pullLeft, pullRight);
            }
            if (isEmpty(state.rightChunk)) {
              return pull(PullRight2(leftChunk), pullLeft, pullRight);
            }
            return succeed9(succeed3(zip11(leftChunk, state.rightChunk)));
          }
        });
      }
      case OP_PULL_RIGHT2: {
        return matchEffect2(pullRight, {
          onFailure: (error) => succeed9(fail4(error)),
          onSuccess: (rightChunk) => {
            if (isEmpty(rightChunk)) {
              return pull(PullRight2(state.leftChunk), pullLeft, pullRight);
            }
            if (isEmpty(state.leftChunk)) {
              return pull(PullLeft2(rightChunk), pullLeft, pullRight);
            }
            return succeed9(succeed3(zip11(state.leftChunk, rightChunk)));
          }
        });
      }
    }
  };
  const zip11 = (leftChunk, rightChunk) => {
    const [output, either7] = f(leftChunk, rightChunk);
    switch (either7._tag) {
      case "Left": {
        if (isEmpty(either7.left)) {
          return [output, PullBoth2];
        }
        return [output, PullRight2(either7.left)];
      }
      case "Right": {
        if (isEmpty(either7.right)) {
          return [output, PullBoth2];
        }
        return [output, PullLeft2(either7.right)];
      }
    }
  };
  return pipe(self, combineChunks(that, PullBoth2, pull));
});
var zipWithIndex = (self) => pipe(self, mapAccum5(0, (index, a) => [index + 1, [a, index]]));
var zipWithNext = (self) => {
  const process2 = (last5) => readWithCause({
    onInput: (input) => {
      const [newLast, chunk3] = mapAccum2(input, last5, (prev, curr) => [some2(curr), pipe(prev, map2((a) => [a, curr]))]);
      const output = filterMap4(chunk3, (option3) => isSome2(option3) ? some2([option3.value[0], some2(option3.value[1])]) : none2());
      return flatMap13(write(output), () => process2(newLast));
    },
    onFailure: failCause10,
    onDone: () => match2(last5, {
      onNone: () => void_6,
      onSome: (value) => zipRight6(write(of2([value, none2()])), void_6)
    })
  });
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(process2(none2()))));
};
var zipWithPrevious = (self) => pipe(self, mapAccum5(none2(), (prev, curr) => [some2(curr), [prev, curr]]));
var zipWithPreviousAndNext = (self) => pipe(zipWithNext(zipWithPrevious(self)), map24(([[prev, curr], next]) => [prev, curr, pipe(next, map2((tuple) => tuple[1]))]));
var zipChunks = (left3, right3, f) => {
  if (left3.length > right3.length) {
    return [pipe(left3, take2(right3.length), zipWith3(right3, f)), left2(pipe(left3, drop2(right3.length)))];
  }
  return [pipe(left3, zipWith3(pipe(right3, take2(left3.length)), f)), right2(pipe(right3, drop2(left3.length)))];
};
var Do5 = /* @__PURE__ */ succeed15({});
var bind6 = /* @__PURE__ */ dual((args2) => typeof args2[0] !== "string", (self, tag2, f, options) => flatMap16(self, (k) => map24(f(k), (a) => ({
  ...k,
  [tag2]: a
})), options));
var bindTo6 = /* @__PURE__ */ bindTo(map24);
var let_6 = /* @__PURE__ */ let_(map24);
var decodeText = /* @__PURE__ */ dual((args2) => isStream(args2[0]), (self, encoding = "utf-8") => suspend10(() => {
  const decoder = new TextDecoder(encoding);
  return map24(self, (s) => decoder.decode(s));
}));
var encodeText = (self) => suspend10(() => {
  const encoder = new TextEncoder();
  return map24(self, (s) => encoder.encode(s));
});
var fromEventListener = (target, type, options) => asyncPush((emit2) => acquireRelease2(sync5(() => target.addEventListener(type, emit2.single, options)), () => sync5(() => target.removeEventListener(type, emit2.single, options))), {
  bufferSize: typeof options === "object" ? options.bufferSize : void 0
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/FiberHandle.js
var TypeId18 = /* @__PURE__ */ Symbol.for("effect/FiberHandle");
var isFiberHandle = (u) => hasProperty(u, TypeId18);
var Proto2 = {
  [TypeId18]: TypeId18,
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "FiberHandle",
      state: this.state
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var unsafeMake9 = (deferred) => {
  const self = Object.create(Proto2);
  self.state = {
    _tag: "Open",
    fiber: void 0
  };
  self.deferred = deferred;
  return self;
};
var make52 = () => acquireRelease2(map19(make20(), (deferred) => unsafeMake9(deferred)), (handle) => withFiberRuntime2((parent2) => {
  const state = handle.state;
  if (state._tag === "Closed") return _void;
  handle.state = {
    _tag: "Closed"
  };
  return state.fiber ? intoDeferred2(asVoid4(interruptAs(state.fiber, combine3(parent2.id(), internalFiberId))), handle.deferred) : done2(handle.deferred, void_3);
}));
var internalFiberIdId = -1;
var internalFiberId = /* @__PURE__ */ make14(internalFiberIdId, 0);
var isInternalInterruption = /* @__PURE__ */ reduceWithContext2(void 0, {
  emptyCase: constFalse,
  failCase: constFalse,
  dieCase: constFalse,
  interruptCase: (_, fiberId3) => has4(ids2(fiberId3), internalFiberIdId),
  sequentialCase: (_, left3, right3) => left3 || right3,
  parallelCase: (_, left3, right3) => left3 || right3
});
var unsafeSet3 = /* @__PURE__ */ dual((args2) => isFiberHandle(args2[0]), (self, fiber, options) => {
  if (self.state._tag === "Closed") {
    fiber.unsafeInterruptAsFork(combine3(options?.interruptAs ?? none4, internalFiberId));
    return;
  } else if (self.state.fiber !== void 0) {
    if (options?.onlyIfMissing === true) {
      fiber.unsafeInterruptAsFork(combine3(options?.interruptAs ?? none4, internalFiberId));
      return;
    } else if (self.state.fiber === fiber) {
      return;
    }
    self.state.fiber.unsafeInterruptAsFork(combine3(options?.interruptAs ?? none4, internalFiberId));
    self.state.fiber = void 0;
  }
  self.state.fiber = fiber;
  fiber.addObserver((exit4) => {
    if (self.state._tag === "Open" && fiber === self.state.fiber) {
      self.state.fiber = void 0;
    }
    if (isFailure(exit4) && (options?.propagateInterruption === true ? !isInternalInterruption(exit4.cause) : !isInterruptedOnly2(exit4.cause))) {
      unsafeDone(self.deferred, exit4);
    }
  });
});
var clear = (self) => uninterruptibleMask3((restore) => withFiberRuntime2((fiber) => {
  if (self.state._tag === "Closed" || self.state.fiber === void 0) {
    return _void;
  }
  return zipRight5(restore(interruptAs(self.state.fiber, combine3(fiber.id(), internalFiberId))), sync5(() => {
    if (self.state._tag === "Open") {
      self.state.fiber = void 0;
    }
  }));
}));
var constInterruptedFiber = /* @__PURE__ */ function() {
  let fiber = void 0;
  return () => {
    if (fiber === void 0) {
      fiber = runFork2(interrupt7);
    }
    return fiber;
  };
}();
var run4 = function() {
  const self = arguments[0];
  if (isEffect2(arguments[1])) {
    return runImpl(self, arguments[1], arguments[2]);
  }
  const options = arguments[1];
  return (effect4) => runImpl(self, effect4, options);
};
var runImpl = (self, effect4, options) => fiberIdWith2((fiberId3) => {
  if (self.state._tag === "Closed") {
    return interrupt7;
  } else if (self.state.fiber !== void 0 && options?.onlyIfMissing === true) {
    return sync5(constInterruptedFiber);
  }
  return tap4(forkDaemon2(effect4), (fiber) => unsafeSet3(self, fiber, {
    ...options,
    interruptAs: fiberId3
  }));
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/FiberSet.js
var TypeId19 = /* @__PURE__ */ Symbol.for("effect/FiberSet");
var isFiberSet = (u) => hasProperty(u, TypeId19);
var Proto3 = {
  [TypeId19]: TypeId19,
  [Symbol.iterator]() {
    if (this.state._tag === "Closed") {
      return empty2();
    }
    return this.state.backing[Symbol.iterator]();
  },
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "FiberMap",
      state: this.state
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var unsafeMake10 = (backing, deferred) => {
  const self = Object.create(Proto3);
  self.state = {
    _tag: "Open",
    backing
  };
  self.deferred = deferred;
  return self;
};
var make53 = () => acquireRelease2(map19(make20(), (deferred) => unsafeMake10(/* @__PURE__ */ new Set(), deferred)), (set10) => withFiberRuntime2((parent2) => {
  const state = set10.state;
  if (state._tag === "Closed") return _void;
  set10.state = {
    _tag: "Closed"
  };
  const fibers = state.backing;
  return interruptAllAs2(fibers, combine3(parent2.id(), internalFiberId2)).pipe(intoDeferred2(set10.deferred));
}));
var makeRuntime = () => flatMap11(make53(), (self) => runtime4(self)());
var internalFiberIdId2 = -1;
var internalFiberId2 = /* @__PURE__ */ make14(internalFiberIdId2, 0);
var isInternalInterruption2 = /* @__PURE__ */ reduceWithContext2(void 0, {
  emptyCase: constFalse,
  failCase: constFalse,
  dieCase: constFalse,
  interruptCase: (_, fiberId3) => has4(ids2(fiberId3), internalFiberIdId2),
  sequentialCase: (_, left3, right3) => left3 || right3,
  parallelCase: (_, left3, right3) => left3 || right3
});
var unsafeAdd = /* @__PURE__ */ dual((args2) => isFiberSet(args2[0]), (self, fiber, options) => {
  if (self.state._tag === "Closed") {
    fiber.unsafeInterruptAsFork(combine3(options?.interruptAs ?? none4, internalFiberId2));
    return;
  } else if (self.state.backing.has(fiber)) {
    return;
  }
  self.state.backing.add(fiber);
  fiber.addObserver((exit4) => {
    if (self.state._tag === "Closed") {
      return;
    }
    self.state.backing.delete(fiber);
    if (isFailure(exit4) && (options?.propagateInterruption === true ? !isInternalInterruption2(exit4.cause) : !isInterruptedOnly2(exit4.cause))) {
      unsafeDone(self.deferred, exit4);
    }
  });
});
var constInterruptedFiber2 = /* @__PURE__ */ function() {
  let fiber = void 0;
  return () => {
    if (fiber === void 0) {
      fiber = runFork2(interrupt7);
    }
    return fiber;
  };
}();
var runtime4 = (self) => () => map19(runtime3(), (runtime5) => {
  const runFork4 = runFork3(runtime5);
  return (effect4, options) => {
    if (self.state._tag === "Closed") {
      return constInterruptedFiber2();
    }
    const fiber = runFork4(effect4, options);
    unsafeAdd(self, fiber);
    return fiber;
  };
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/groupBy.js
var GroupBySymbolKey = "effect/GroupBy";
var GroupByTypeId = /* @__PURE__ */ Symbol.for(GroupBySymbolKey);
var groupByVariance = {
  /* c8 ignore next */
  _R: (_) => _,
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _K: (_) => _,
  /* c8 ignore next */
  _V: (_) => _
};
var isGroupBy = (u) => hasProperty(u, GroupByTypeId);
var evaluate2 = /* @__PURE__ */ dual((args2) => isGroupBy(args2[0]), (self, f, options) => flatMap16(self.grouped, ([key, queue]) => f(key, flattenTake(fromQueue2(queue, {
  shutdown: true
}))), {
  concurrency: "unbounded",
  bufferSize: options?.bufferSize ?? 16
}));
var make54 = (grouped3) => ({
  [GroupByTypeId]: groupByVariance,
  pipe() {
    return pipeArguments(this, arguments);
  },
  grouped: grouped3
});
var groupBy2 = /* @__PURE__ */ dual((args2) => isStream(args2[0]), (self, f, options) => make54(unwrapScoped4(gen3(function* () {
  const decider = yield* make20();
  const output = yield* acquireRelease2(bounded5(options?.bufferSize ?? 16), (queue) => shutdown4(queue));
  const ref = yield* make29(/* @__PURE__ */ new Map());
  const add7 = yield* pipe(mapEffectSequential(self, f), distributedWithDynamicCallback(options?.bufferSize ?? 16, ([key, value]) => flatMap11(_await(decider), (f2) => f2(key, value)), (exit4) => offer3(output, exit4)));
  yield* succeed2(decider, (key, _) => pipe(get13(ref), map19((map28) => fromNullable(map28.get(key))), flatMap11(match2({
    onNone: () => flatMap11(add7, ([index, queue]) => zipRight5(update3(ref, (map28) => map28.set(key, index)), pipe(offer3(output, succeed3([key, mapDequeue(queue, (exit4) => new TakeImpl(pipe(exit4, map12((tuple) => of2(tuple[1])))))])), as5((n) => n === index)))),
    onSome: (index) => succeed9((n) => n === index)
  }))));
  return flattenExitOption(fromQueue2(output, {
    shutdown: true
  }));
}))));
var mapEffectOptions = /* @__PURE__ */ dual((args2) => typeof args2[0] !== "function", (self, f, options) => {
  if (options?.key) {
    return evaluate2(groupByKey(self, options.key, {
      bufferSize: options.bufferSize
    }), (_, s) => mapEffectSequential(s, f));
  }
  return matchConcurrency(options?.concurrency, () => mapEffectSequential(self, f), (n) => options?.unordered ? flatMap16(self, (a) => fromEffect7(f(a)), {
    concurrency: n
  }) : mapEffectPar(self, n, f));
});
var bindEffect = /* @__PURE__ */ dual((args2) => typeof args2[0] !== "string", (self, tag2, f, options) => mapEffectOptions(self, (k) => map19(f(k), (a) => ({
  ...k,
  [tag2]: a
})), options));
var mapDequeue = (dequeue, f) => new MapDequeue(dequeue, f);
var MapDequeue = class extends Class2 {
  dequeue;
  f;
  [DequeueTypeId2] = {
    _Out: (_) => _
  };
  constructor(dequeue, f) {
    super();
    this.dequeue = dequeue;
    this.f = f;
  }
  capacity() {
    return capacity4(this.dequeue);
  }
  get size() {
    return size14(this.dequeue);
  }
  unsafeSize() {
    return this.dequeue.unsafeSize();
  }
  get awaitShutdown() {
    return awaitShutdown3(this.dequeue);
  }
  isActive() {
    return this.dequeue.isActive();
  }
  get isShutdown() {
    return isShutdown3(this.dequeue);
  }
  get shutdown() {
    return shutdown4(this.dequeue);
  }
  get isFull() {
    return isFull3(this.dequeue);
  }
  get isEmpty() {
    return isEmpty12(this.dequeue);
  }
  get take() {
    return pipe(take4(this.dequeue), map19((a) => this.f(a)));
  }
  get takeAll() {
    return pipe(takeAll2(this.dequeue), map19(map5((a) => this.f(a))));
  }
  takeUpTo(max6) {
    return pipe(takeUpTo2(this.dequeue, max6), map19(map5((a) => this.f(a))));
  }
  takeBetween(min4, max6) {
    return pipe(takeBetween2(this.dequeue, min4, max6), map19(map5((a) => this.f(a))));
  }
  takeN(n) {
    return pipe(takeN2(this.dequeue, n), map19(map5((a) => this.f(a))));
  }
  poll() {
    return pipe(poll6(this.dequeue), map19(map2((a) => this.f(a))));
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  commit() {
    return this.take;
  }
};
var groupByKey = /* @__PURE__ */ dual((args2) => typeof args2[0] !== "function", (self, f, options) => {
  const loop3 = (map28, outerQueue) => readWithCause({
    onInput: (input) => flatMap13(fromEffect4(forEach10(groupByIterable(input, f), ([key, values4]) => {
      const innerQueue = map28.get(key);
      if (innerQueue === void 0) {
        return pipe(bounded5(options?.bufferSize ?? 16), flatMap11((innerQueue2) => pipe(sync5(() => {
          map28.set(key, innerQueue2);
        }), zipRight5(offer3(outerQueue, of5([key, innerQueue2]))), zipRight5(pipe(offer3(innerQueue2, chunk2(values4)), catchSomeCause2((cause3) => isInterruptedOnly2(cause3) ? some2(_void) : none2()))))));
      }
      return catchSomeCause2(offer3(innerQueue, chunk2(values4)), (cause3) => isInterruptedOnly2(cause3) ? some2(_void) : none2());
    }, {
      discard: true
    })), () => loop3(map28, outerQueue)),
    onFailure: (cause3) => fromEffect4(offer3(outerQueue, failCause11(cause3))),
    onDone: () => pipe(fromEffect4(pipe(forEach10(map28.entries(), ([_, innerQueue]) => pipe(offer3(innerQueue, end4), catchSomeCause2((cause3) => isInterruptedOnly2(cause3) ? some2(_void) : none2())), {
      discard: true
    }), zipRight5(offer3(outerQueue, end4)))))
  });
  return make54(unwrapScopedWith3((scope5) => gen3(function* () {
    const map28 = /* @__PURE__ */ new Map();
    const queue = yield* unbounded5();
    yield* addFinalizer2(scope5, shutdown4(queue));
    return yield* toChannel2(self).pipe(pipeTo(loop3(map28, queue)), drain, runIn(scope5), forkIn2(scope5), as5(flattenTake(fromQueue2(queue, {
      shutdown: true
    }))));
  })));
});
var groupByIterable = /* @__PURE__ */ dual(2, (iterable, f) => {
  const builder = [];
  const iterator = iterable[Symbol.iterator]();
  const map28 = /* @__PURE__ */ new Map();
  let next;
  while ((next = iterator.next()) && !next.done) {
    const value = next.value;
    const key = f(value);
    if (map28.has(key)) {
      const innerBuilder = map28.get(key);
      innerBuilder.push(value);
    } else {
      const innerBuilder = [value];
      builder.push([key, innerBuilder]);
      map28.set(key, innerBuilder);
    }
  }
  return unsafeFromArray(builder.map((tuple) => [tuple[0], unsafeFromArray(tuple[1])]));
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/ParseResult.js
var Pointer = class {
  path;
  actual;
  issue;
  /**
   * @since 3.10.0
   */
  _tag = "Pointer";
  constructor(path, actual, issue) {
    this.path = path;
    this.actual = actual;
    this.issue = issue;
  }
};
var Unexpected = class {
  actual;
  message;
  /**
   * @since 3.10.0
   */
  _tag = "Unexpected";
  constructor(actual, message) {
    this.actual = actual;
    this.message = message;
  }
};
var Missing = class {
  ast;
  message;
  /**
   * @since 3.10.0
   */
  _tag = "Missing";
  /**
   * @since 3.10.0
   */
  actual = void 0;
  constructor(ast, message) {
    this.ast = ast;
    this.message = message;
  }
};
var Composite2 = class {
  ast;
  actual;
  issues;
  output;
  /**
   * @since 3.10.0
   */
  _tag = "Composite";
  constructor(ast, actual, issues, output) {
    this.ast = ast;
    this.actual = actual;
    this.issues = issues;
    this.output = output;
  }
};
var Refinement2 = class {
  ast;
  actual;
  kind;
  issue;
  /**
   * @since 3.10.0
   */
  _tag = "Refinement";
  constructor(ast, actual, kind, issue) {
    this.ast = ast;
    this.actual = actual;
    this.kind = kind;
    this.issue = issue;
  }
};
var Transformation2 = class {
  ast;
  actual;
  kind;
  issue;
  /**
   * @since 3.10.0
   */
  _tag = "Transformation";
  constructor(ast, actual, kind, issue) {
    this.ast = ast;
    this.actual = actual;
    this.kind = kind;
    this.issue = issue;
  }
};
var Type2 = class {
  ast;
  actual;
  message;
  /**
   * @since 3.10.0
   */
  _tag = "Type";
  constructor(ast, actual, message) {
    this.ast = ast;
    this.actual = actual;
    this.message = message;
  }
};
var Forbidden = class {
  ast;
  actual;
  message;
  /**
   * @since 3.10.0
   */
  _tag = "Forbidden";
  constructor(ast, actual, message) {
    this.ast = ast;
    this.actual = actual;
    this.message = message;
  }
};
var ParseErrorTypeId = /* @__PURE__ */ Symbol.for("effect/Schema/ParseErrorTypeId");
var ParseError = class extends (/* @__PURE__ */ TaggedError("ParseError")) {
  /**
   * @since 3.10.0
   */
  [ParseErrorTypeId] = ParseErrorTypeId;
  get message() {
    return this.toString();
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return TreeFormatter.formatIssueSync(this.issue);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _id: "ParseError",
      message: this.toString()
    };
  }
  /**
   * @since 3.10.0
   */
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
};
var parseError = (issue) => new ParseError({
  issue
});
var succeed16 = right2;
var fail16 = left2;
var isEither4 = isEither2;
var flatMap17 = /* @__PURE__ */ dual(2, (self, f) => {
  return isEither4(self) ? match(self, {
    onLeft: left2,
    onRight: f
  }) : flatMap11(self, f);
});
var map25 = /* @__PURE__ */ dual(2, (self, f) => {
  return isEither4(self) ? map(self, f) : map19(self, f);
});
var mapError7 = /* @__PURE__ */ dual(2, (self, f) => {
  return isEither4(self) ? mapLeft(self, f) : mapError3(self, f);
});
var mapBoth7 = /* @__PURE__ */ dual(2, (self, options) => {
  return isEither4(self) ? mapBoth(self, {
    onLeft: options.onFailure,
    onRight: options.onSuccess
  }) : mapBoth4(self, options);
});
var orElse9 = /* @__PURE__ */ dual(2, (self, f) => {
  return isEither4(self) ? match(self, {
    onLeft: f,
    onRight: right2
  }) : catchAll3(self, f);
});
var mergeInternalOptions = (options, overrideOptions) => {
  if (overrideOptions === void 0 || isNumber(overrideOptions)) {
    return options;
  }
  if (options === void 0) {
    return overrideOptions;
  }
  return {
    ...options,
    ...overrideOptions
  };
};
var getEither = (ast, isDecoding, options) => {
  const parser = goMemo(ast, isDecoding);
  return (u, overrideOptions) => parser(u, mergeInternalOptions(options, overrideOptions));
};
var getSync = (ast, isDecoding, options) => {
  const parser = getEither(ast, isDecoding, options);
  return (input, overrideOptions) => getOrThrowWith(parser(input, overrideOptions), parseError);
};
var getEffect = (ast, isDecoding, options) => {
  const parser = goMemo(ast, isDecoding);
  return (input, overrideOptions) => parser(input, {
    ...mergeInternalOptions(options, overrideOptions),
    isEffectAllowed: true
  });
};
var decodeUnknown = (schema, options) => getEffect(schema.ast, true, options);
var encodeUnknown = (schema, options) => getEffect(schema.ast, false, options);
var validateSync = (schema, options) => getSync(typeAST(schema.ast), true, options);
var decodeMemoMap = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/ParseResult/decodeMemoMap"), () => /* @__PURE__ */ new WeakMap());
var encodeMemoMap = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/ParseResult/encodeMemoMap"), () => /* @__PURE__ */ new WeakMap());
var goMemo = (ast, isDecoding) => {
  const memoMap = isDecoding ? decodeMemoMap : encodeMemoMap;
  const memo = memoMap.get(ast);
  if (memo) {
    return memo;
  }
  const raw = go(ast, isDecoding);
  const parseOptionsAnnotation = getParseOptionsAnnotation(ast);
  const parserWithOptions = isSome2(parseOptionsAnnotation) ? (i, options) => raw(i, mergeInternalOptions(options, parseOptionsAnnotation.value)) : raw;
  const decodingFallbackAnnotation = getDecodingFallbackAnnotation(ast);
  const parser = isDecoding && isSome2(decodingFallbackAnnotation) ? (i, options) => handleForbidden(orElse9(parserWithOptions(i, options), decodingFallbackAnnotation.value), ast, i, options) : parserWithOptions;
  memoMap.set(ast, parser);
  return parser;
};
var getConcurrency = (ast) => getOrUndefined(getConcurrencyAnnotation(ast));
var getBatching = (ast) => getOrUndefined(getBatchingAnnotation(ast));
var go = (ast, isDecoding) => {
  switch (ast._tag) {
    case "Refinement": {
      if (isDecoding) {
        const from = goMemo(ast.from, true);
        return (i, options) => {
          options = options ?? defaultParseOption;
          const allErrors = options?.errors === "all";
          const result = flatMap17(orElse9(from(i, options), (ef) => {
            const issue = new Refinement2(ast, i, "From", ef);
            if (allErrors && hasStableFilter(ast) && isComposite2(ef)) {
              return match2(ast.filter(i, options, ast), {
                onNone: () => left2(issue),
                onSome: (ep) => left2(new Composite2(ast, i, [issue, new Refinement2(ast, i, "Predicate", ep)]))
              });
            }
            return left2(issue);
          }), (a) => match2(ast.filter(a, options, ast), {
            onNone: () => right2(a),
            onSome: (ep) => left2(new Refinement2(ast, i, "Predicate", ep))
          }));
          return handleForbidden(result, ast, i, options);
        };
      } else {
        const from = goMemo(typeAST(ast), true);
        const to = goMemo(dropRightRefinement(ast.from), false);
        return (i, options) => handleForbidden(flatMap17(from(i, options), (a) => to(a, options)), ast, i, options);
      }
    }
    case "Transformation": {
      const transform2 = getFinalTransformation(ast.transformation, isDecoding);
      const from = isDecoding ? goMemo(ast.from, true) : goMemo(ast.to, false);
      const to = isDecoding ? goMemo(ast.to, true) : goMemo(ast.from, false);
      return (i, options) => handleForbidden(flatMap17(mapError7(from(i, options), (e) => new Transformation2(ast, i, isDecoding ? "Encoded" : "Type", e)), (a) => flatMap17(mapError7(transform2(a, options ?? defaultParseOption, ast, i), (e) => new Transformation2(ast, i, "Transformation", e)), (i2) => mapError7(to(i2, options), (e) => new Transformation2(ast, i, isDecoding ? "Type" : "Encoded", e)))), ast, i, options);
    }
    case "Declaration": {
      const parse = isDecoding ? ast.decodeUnknown(...ast.typeParameters) : ast.encodeUnknown(...ast.typeParameters);
      return (i, options) => handleForbidden(parse(i, options ?? defaultParseOption, ast), ast, i, options);
    }
    case "Literal":
      return fromRefinement(ast, (u) => u === ast.literal);
    case "UniqueSymbol":
      return fromRefinement(ast, (u) => u === ast.symbol);
    case "UndefinedKeyword":
      return fromRefinement(ast, isUndefined);
    case "NeverKeyword":
      return fromRefinement(ast, isNever);
    case "UnknownKeyword":
    case "AnyKeyword":
    case "VoidKeyword":
      return right2;
    case "StringKeyword":
      return fromRefinement(ast, isString);
    case "NumberKeyword":
      return fromRefinement(ast, isNumber);
    case "BooleanKeyword":
      return fromRefinement(ast, isBoolean);
    case "BigIntKeyword":
      return fromRefinement(ast, isBigInt);
    case "SymbolKeyword":
      return fromRefinement(ast, isSymbol);
    case "ObjectKeyword":
      return fromRefinement(ast, isObject);
    case "Enums":
      return fromRefinement(ast, (u) => ast.enums.some(([_, value]) => value === u));
    case "TemplateLiteral": {
      const regex = getTemplateLiteralRegExp(ast);
      return fromRefinement(ast, (u) => isString(u) && regex.test(u));
    }
    case "TupleType": {
      const elements = ast.elements.map((e) => goMemo(e.type, isDecoding));
      const rest = ast.rest.map((annotatedAST) => goMemo(annotatedAST.type, isDecoding));
      let requiredTypes = ast.elements.filter((e) => !e.isOptional);
      if (ast.rest.length > 0) {
        requiredTypes = requiredTypes.concat(ast.rest.slice(1));
      }
      const requiredLen = requiredTypes.length;
      const expectedIndexes = ast.elements.length > 0 ? ast.elements.map((_, i) => i).join(" | ") : "never";
      const concurrency = getConcurrency(ast);
      const batching = getBatching(ast);
      return (input, options) => {
        if (!isArray(input)) {
          return left2(new Type2(ast, input));
        }
        const allErrors = options?.errors === "all";
        const es = [];
        let stepKey = 0;
        const output = [];
        const len = input.length;
        for (let i2 = len; i2 <= requiredLen - 1; i2++) {
          const e = new Pointer(i2, input, new Missing(requiredTypes[i2 - len]));
          if (allErrors) {
            es.push([stepKey++, e]);
            continue;
          } else {
            return left2(new Composite2(ast, input, e, output));
          }
        }
        if (ast.rest.length === 0) {
          for (let i2 = ast.elements.length; i2 <= len - 1; i2++) {
            const e = new Pointer(i2, input, new Unexpected(input[i2], `is unexpected, expected: ${expectedIndexes}`));
            if (allErrors) {
              es.push([stepKey++, e]);
              continue;
            } else {
              return left2(new Composite2(ast, input, e, output));
            }
          }
        }
        let i = 0;
        let queue = void 0;
        for (; i < elements.length; i++) {
          if (len < i + 1) {
            if (ast.elements[i].isOptional) {
              continue;
            }
          } else {
            const parser = elements[i];
            const te = parser(input[i], options);
            if (isEither4(te)) {
              if (isLeft2(te)) {
                const e = new Pointer(i, input, te.left);
                if (allErrors) {
                  es.push([stepKey++, e]);
                  continue;
                } else {
                  return left2(new Composite2(ast, input, e, sortByIndex(output)));
                }
              }
              output.push([stepKey++, te.right]);
            } else {
              const nk = stepKey++;
              const index = i;
              if (!queue) {
                queue = [];
              }
              queue.push(({
                es: es2,
                output: output2
              }) => flatMap11(either3(te), (t) => {
                if (isLeft2(t)) {
                  const e = new Pointer(index, input, t.left);
                  if (allErrors) {
                    es2.push([nk, e]);
                    return _void;
                  } else {
                    return left2(new Composite2(ast, input, e, sortByIndex(output2)));
                  }
                }
                output2.push([nk, t.right]);
                return _void;
              }));
            }
          }
        }
        if (isNonEmptyReadonlyArray(rest)) {
          const [head6, ...tail2] = rest;
          for (; i < len - tail2.length; i++) {
            const te = head6(input[i], options);
            if (isEither4(te)) {
              if (isLeft2(te)) {
                const e = new Pointer(i, input, te.left);
                if (allErrors) {
                  es.push([stepKey++, e]);
                  continue;
                } else {
                  return left2(new Composite2(ast, input, e, sortByIndex(output)));
                }
              } else {
                output.push([stepKey++, te.right]);
              }
            } else {
              const nk = stepKey++;
              const index = i;
              if (!queue) {
                queue = [];
              }
              queue.push(({
                es: es2,
                output: output2
              }) => flatMap11(either3(te), (t) => {
                if (isLeft2(t)) {
                  const e = new Pointer(index, input, t.left);
                  if (allErrors) {
                    es2.push([nk, e]);
                    return _void;
                  } else {
                    return left2(new Composite2(ast, input, e, sortByIndex(output2)));
                  }
                } else {
                  output2.push([nk, t.right]);
                  return _void;
                }
              }));
            }
          }
          for (let j = 0; j < tail2.length; j++) {
            i += j;
            if (len < i + 1) {
              continue;
            } else {
              const te = tail2[j](input[i], options);
              if (isEither4(te)) {
                if (isLeft2(te)) {
                  const e = new Pointer(i, input, te.left);
                  if (allErrors) {
                    es.push([stepKey++, e]);
                    continue;
                  } else {
                    return left2(new Composite2(ast, input, e, sortByIndex(output)));
                  }
                }
                output.push([stepKey++, te.right]);
              } else {
                const nk = stepKey++;
                const index = i;
                if (!queue) {
                  queue = [];
                }
                queue.push(({
                  es: es2,
                  output: output2
                }) => flatMap11(either3(te), (t) => {
                  if (isLeft2(t)) {
                    const e = new Pointer(index, input, t.left);
                    if (allErrors) {
                      es2.push([nk, e]);
                      return _void;
                    } else {
                      return left2(new Composite2(ast, input, e, sortByIndex(output2)));
                    }
                  }
                  output2.push([nk, t.right]);
                  return _void;
                }));
              }
            }
          }
        }
        const computeResult = ({
          es: es2,
          output: output2
        }) => isNonEmptyArray2(es2) ? left2(new Composite2(ast, input, sortByIndex(es2), sortByIndex(output2))) : right2(sortByIndex(output2));
        if (queue && queue.length > 0) {
          const cqueue = queue;
          return suspend4(() => {
            const state = {
              es: copy(es),
              output: copy(output)
            };
            return flatMap11(forEach10(cqueue, (f) => f(state), {
              concurrency,
              batching,
              discard: true
            }), () => computeResult(state));
          });
        }
        return computeResult({
          output,
          es
        });
      };
    }
    case "TypeLiteral": {
      if (ast.propertySignatures.length === 0 && ast.indexSignatures.length === 0) {
        return fromRefinement(ast, isNotNullable);
      }
      const propertySignatures = [];
      const expectedKeysMap = {};
      const expectedKeys = [];
      for (const ps of ast.propertySignatures) {
        propertySignatures.push([goMemo(ps.type, isDecoding), ps]);
        expectedKeysMap[ps.name] = null;
        expectedKeys.push(ps.name);
      }
      const indexSignatures = ast.indexSignatures.map((is2) => [goMemo(is2.parameter, isDecoding), goMemo(is2.type, isDecoding), is2.parameter]);
      const expectedAST = Union.make(ast.indexSignatures.map((is2) => is2.parameter).concat(expectedKeys.map((key) => isSymbol(key) ? new UniqueSymbol(key) : new Literal(key))));
      const expected = goMemo(expectedAST, isDecoding);
      const concurrency = getConcurrency(ast);
      const batching = getBatching(ast);
      return (input, options) => {
        if (!isRecord(input)) {
          return left2(new Type2(ast, input));
        }
        const allErrors = options?.errors === "all";
        const es = [];
        let stepKey = 0;
        const onExcessPropertyError = options?.onExcessProperty === "error";
        const onExcessPropertyPreserve = options?.onExcessProperty === "preserve";
        const output = {};
        let inputKeys;
        if (onExcessPropertyError || onExcessPropertyPreserve) {
          inputKeys = ownKeys(input);
          for (const key of inputKeys) {
            const te = expected(key, options);
            if (isEither4(te) && isLeft2(te)) {
              if (onExcessPropertyError) {
                const e = new Pointer(key, input, new Unexpected(input[key], `is unexpected, expected: ${String(expectedAST)}`));
                if (allErrors) {
                  es.push([stepKey++, e]);
                  continue;
                } else {
                  return left2(new Composite2(ast, input, e, output));
                }
              } else {
                output[key] = input[key];
              }
            }
          }
        }
        let queue = void 0;
        const isExact = options?.exact === true;
        for (let i = 0; i < propertySignatures.length; i++) {
          const ps = propertySignatures[i][1];
          const name = ps.name;
          const hasKey = Object.prototype.hasOwnProperty.call(input, name);
          if (!hasKey) {
            if (ps.isOptional) {
              continue;
            } else if (isExact) {
              const e = new Pointer(name, input, new Missing(ps));
              if (allErrors) {
                es.push([stepKey++, e]);
                continue;
              } else {
                return left2(new Composite2(ast, input, e, output));
              }
            }
          }
          const parser = propertySignatures[i][0];
          const te = parser(input[name], options);
          if (isEither4(te)) {
            if (isLeft2(te)) {
              const e = new Pointer(name, input, hasKey ? te.left : new Missing(ps));
              if (allErrors) {
                es.push([stepKey++, e]);
                continue;
              } else {
                return left2(new Composite2(ast, input, e, output));
              }
            }
            output[name] = te.right;
          } else {
            const nk = stepKey++;
            const index = name;
            if (!queue) {
              queue = [];
            }
            queue.push(({
              es: es2,
              output: output2
            }) => flatMap11(either3(te), (t) => {
              if (isLeft2(t)) {
                const e = new Pointer(index, input, hasKey ? t.left : new Missing(ps));
                if (allErrors) {
                  es2.push([nk, e]);
                  return _void;
                } else {
                  return left2(new Composite2(ast, input, e, output2));
                }
              }
              output2[index] = t.right;
              return _void;
            }));
          }
        }
        for (let i = 0; i < indexSignatures.length; i++) {
          const indexSignature = indexSignatures[i];
          const parameter = indexSignature[0];
          const type = indexSignature[1];
          const keys6 = getKeysForIndexSignature(input, indexSignature[2]);
          for (const key of keys6) {
            const keu = parameter(key, options);
            if (isEither4(keu) && isRight2(keu)) {
              const vpr = type(input[key], options);
              if (isEither4(vpr)) {
                if (isLeft2(vpr)) {
                  const e = new Pointer(key, input, vpr.left);
                  if (allErrors) {
                    es.push([stepKey++, e]);
                    continue;
                  } else {
                    return left2(new Composite2(ast, input, e, output));
                  }
                } else {
                  if (!Object.prototype.hasOwnProperty.call(expectedKeysMap, key)) {
                    output[key] = vpr.right;
                  }
                }
              } else {
                const nk = stepKey++;
                const index = key;
                if (!queue) {
                  queue = [];
                }
                queue.push(({
                  es: es2,
                  output: output2
                }) => flatMap11(either3(vpr), (tv) => {
                  if (isLeft2(tv)) {
                    const e = new Pointer(index, input, tv.left);
                    if (allErrors) {
                      es2.push([nk, e]);
                      return _void;
                    } else {
                      return left2(new Composite2(ast, input, e, output2));
                    }
                  } else {
                    if (!Object.prototype.hasOwnProperty.call(expectedKeysMap, key)) {
                      output2[key] = tv.right;
                    }
                    return _void;
                  }
                }));
              }
            }
          }
        }
        const computeResult = ({
          es: es2,
          output: output2
        }) => {
          if (isNonEmptyArray2(es2)) {
            return left2(new Composite2(ast, input, sortByIndex(es2), output2));
          }
          if (options?.propertyOrder === "original") {
            const keys6 = inputKeys || ownKeys(input);
            for (const name of expectedKeys) {
              if (keys6.indexOf(name) === -1) {
                keys6.push(name);
              }
            }
            const out = {};
            for (const key of keys6) {
              if (Object.prototype.hasOwnProperty.call(output2, key)) {
                out[key] = output2[key];
              }
            }
            return right2(out);
          }
          return right2(output2);
        };
        if (queue && queue.length > 0) {
          const cqueue = queue;
          return suspend4(() => {
            const state = {
              es: copy(es),
              output: Object.assign({}, output)
            };
            return flatMap11(forEach10(cqueue, (f) => f(state), {
              concurrency,
              batching,
              discard: true
            }), () => computeResult(state));
          });
        }
        return computeResult({
          es,
          output
        });
      };
    }
    case "Union": {
      const searchTree = getSearchTree(ast.types, isDecoding);
      const ownKeys2 = ownKeys(searchTree.keys);
      const ownKeysLen = ownKeys2.length;
      const astTypesLen = ast.types.length;
      const map28 = /* @__PURE__ */ new Map();
      for (let i = 0; i < astTypesLen; i++) {
        map28.set(ast.types[i], goMemo(ast.types[i], isDecoding));
      }
      const concurrency = getConcurrency(ast) ?? 1;
      const batching = getBatching(ast);
      return (input, options) => {
        const es = [];
        let stepKey = 0;
        let candidates = [];
        if (ownKeysLen > 0) {
          if (isRecordOrArray(input)) {
            for (let i = 0; i < ownKeysLen; i++) {
              const name = ownKeys2[i];
              const buckets = searchTree.keys[name].buckets;
              if (Object.prototype.hasOwnProperty.call(input, name)) {
                const literal = String(input[name]);
                if (Object.prototype.hasOwnProperty.call(buckets, literal)) {
                  candidates = candidates.concat(buckets[literal]);
                } else {
                  const {
                    candidates: candidates2,
                    literals
                  } = searchTree.keys[name];
                  const literalsUnion = Union.make(literals);
                  const errorAst = candidates2.length === astTypesLen ? new TypeLiteral([new PropertySignature(name, literalsUnion, false, true)], []) : Union.make(candidates2);
                  es.push([stepKey++, new Composite2(errorAst, input, new Pointer(name, input, new Type2(literalsUnion, input[name])))]);
                }
              } else {
                const {
                  candidates: candidates2,
                  literals
                } = searchTree.keys[name];
                const fakePropertySignature = new PropertySignature(name, Union.make(literals), false, true);
                const errorAst = candidates2.length === astTypesLen ? new TypeLiteral([fakePropertySignature], []) : Union.make(candidates2);
                es.push([stepKey++, new Composite2(errorAst, input, new Pointer(name, input, new Missing(fakePropertySignature)))]);
              }
            }
          } else {
            const errorAst = searchTree.candidates.length === astTypesLen ? ast : Union.make(searchTree.candidates);
            es.push([stepKey++, new Type2(errorAst, input)]);
          }
        }
        if (searchTree.otherwise.length > 0) {
          candidates = candidates.concat(searchTree.otherwise);
        }
        let queue = void 0;
        for (let i = 0; i < candidates.length; i++) {
          const candidate = candidates[i];
          const pr = map28.get(candidate)(input, options);
          if (isEither4(pr) && (!queue || queue.length === 0)) {
            if (isRight2(pr)) {
              return pr;
            } else {
              es.push([stepKey++, pr.left]);
            }
          } else {
            const nk = stepKey++;
            if (!queue) {
              queue = [];
            }
            queue.push((state) => suspend4(() => {
              if ("finalResult" in state) {
                return _void;
              } else {
                return flatMap11(either3(pr), (t) => {
                  if (isRight2(t)) {
                    state.finalResult = t;
                  } else {
                    state.es.push([nk, t.left]);
                  }
                  return _void;
                });
              }
            }));
          }
        }
        const computeResult = (es2) => isNonEmptyArray2(es2) ? es2.length === 1 && es2[0][1]._tag === "Type" ? left2(es2[0][1]) : left2(new Composite2(ast, input, sortByIndex(es2))) : (
          // this should never happen
          left2(new Type2(ast, input))
        );
        if (queue && queue.length > 0) {
          const cqueue = queue;
          return suspend4(() => {
            const state = {
              es: copy(es)
            };
            return flatMap11(forEach10(cqueue, (f) => f(state), {
              concurrency,
              batching,
              discard: true
            }), () => {
              if ("finalResult" in state) {
                return state.finalResult;
              }
              return computeResult(state.es);
            });
          });
        }
        return computeResult(es);
      };
    }
    case "Suspend": {
      const get21 = memoizeThunk(() => goMemo(annotations(ast.f(), ast.annotations), isDecoding));
      return (a, options) => get21()(a, options);
    }
  }
};
var fromRefinement = (ast, refinement) => (u) => refinement(u) ? right2(u) : left2(new Type2(ast, u));
var getLiterals = (ast, isDecoding) => {
  switch (ast._tag) {
    case "Declaration": {
      const annotation = getSurrogateAnnotation(ast);
      if (isSome2(annotation)) {
        return getLiterals(annotation.value, isDecoding);
      }
      break;
    }
    case "TypeLiteral": {
      const out = [];
      for (let i = 0; i < ast.propertySignatures.length; i++) {
        const propertySignature = ast.propertySignatures[i];
        const type = isDecoding ? encodedAST(propertySignature.type) : typeAST(propertySignature.type);
        if (isLiteral(type) && !propertySignature.isOptional) {
          out.push([propertySignature.name, type]);
        }
      }
      return out;
    }
    case "TupleType": {
      const out = [];
      for (let i = 0; i < ast.elements.length; i++) {
        const element = ast.elements[i];
        const type = isDecoding ? encodedAST(element.type) : typeAST(element.type);
        if (isLiteral(type) && !element.isOptional) {
          out.push([i, type]);
        }
      }
      return out;
    }
    case "Refinement":
      return getLiterals(ast.from, isDecoding);
    case "Suspend":
      return getLiterals(ast.f(), isDecoding);
    case "Transformation":
      return getLiterals(isDecoding ? ast.from : ast.to, isDecoding);
  }
  return [];
};
var getSearchTree = (members, isDecoding) => {
  const keys6 = {};
  const otherwise = [];
  const candidates = [];
  for (let i = 0; i < members.length; i++) {
    const member = members[i];
    const tags = getLiterals(member, isDecoding);
    if (tags.length > 0) {
      candidates.push(member);
      for (let j = 0; j < tags.length; j++) {
        const [key, literal] = tags[j];
        const hash2 = String(literal.literal);
        keys6[key] = keys6[key] || {
          buckets: {},
          literals: [],
          candidates: []
        };
        const buckets = keys6[key].buckets;
        if (Object.prototype.hasOwnProperty.call(buckets, hash2)) {
          if (j < tags.length - 1) {
            continue;
          }
          buckets[hash2].push(member);
          keys6[key].literals.push(literal);
          keys6[key].candidates.push(member);
        } else {
          buckets[hash2] = [member];
          keys6[key].literals.push(literal);
          keys6[key].candidates.push(member);
          break;
        }
      }
    } else {
      otherwise.push(member);
    }
  }
  return {
    keys: keys6,
    otherwise,
    candidates
  };
};
var dropRightRefinement = (ast) => isRefinement(ast) ? dropRightRefinement(ast.from) : ast;
var handleForbidden = (effect4, ast, actual, options) => {
  if (options?.isEffectAllowed === true) {
    return effect4;
  }
  if (isEither4(effect4)) {
    return effect4;
  }
  const scheduler = new SyncScheduler();
  const fiber = runFork2(effect4, {
    scheduler
  });
  scheduler.flush();
  const exit4 = fiber.unsafePoll();
  if (exit4) {
    if (isSuccess(exit4)) {
      return right2(exit4.value);
    }
    const cause3 = exit4.cause;
    if (isFailType2(cause3)) {
      return left2(cause3.error);
    }
    return left2(new Forbidden(ast, actual, pretty2(cause3)));
  }
  return left2(new Forbidden(ast, actual, "cannot be be resolved synchronously, this is caused by using runSync on an effect that performs async work"));
};
var compare = ([a], [b]) => a > b ? 1 : a < b ? -1 : 0;
function sortByIndex(es) {
  return es.sort(compare).map((t) => t[1]);
}
var getFinalTransformation = (transformation, isDecoding) => {
  switch (transformation._tag) {
    case "FinalTransformation":
      return isDecoding ? transformation.decode : transformation.encode;
    case "ComposeTransformation":
      return right2;
    case "TypeLiteralTransformation":
      return (input) => {
        let out = right2(input);
        for (const pst of transformation.propertySignatureTransformations) {
          const [from, to] = isDecoding ? [pst.from, pst.to] : [pst.to, pst.from];
          const transformation2 = isDecoding ? pst.decode : pst.encode;
          const f = (input2) => {
            const o = transformation2(Object.prototype.hasOwnProperty.call(input2, from) ? some2(input2[from]) : none2());
            delete input2[from];
            if (isSome2(o)) {
              input2[to] = o.value;
            }
            return input2;
          };
          out = map25(out, f);
        }
        return out;
      };
  }
};
var makeTree = (value, forest = []) => ({
  value,
  forest
});
var TreeFormatter = {
  formatIssue: (issue) => map25(formatTree(issue), drawTree),
  formatIssueSync: (issue) => {
    const e = TreeFormatter.formatIssue(issue);
    return isEither4(e) ? getOrThrow(e) : runSync(e);
  },
  formatError: (error) => TreeFormatter.formatIssue(error.issue),
  formatErrorSync: (error) => TreeFormatter.formatIssueSync(error.issue)
};
var drawTree = (tree) => tree.value + draw("\n", tree.forest);
var draw = (indentation, forest) => {
  let r = "";
  const len = forest.length;
  let tree;
  for (let i = 0; i < len; i++) {
    tree = forest[i];
    const isLast = i === len - 1;
    r += indentation + (isLast ? "\u2514" : "\u251C") + "\u2500 " + tree.value;
    r += draw(indentation + (len > 1 && !isLast ? "\u2502  " : "   "), tree.forest);
  }
  return r;
};
var formatTransformationKind = (kind) => {
  switch (kind) {
    case "Encoded":
      return "Encoded side transformation failure";
    case "Transformation":
      return "Transformation process failure";
    case "Type":
      return "Type side transformation failure";
  }
};
var formatRefinementKind = (kind) => {
  switch (kind) {
    case "From":
      return "From side refinement failure";
    case "Predicate":
      return "Predicate refinement failure";
  }
};
var getAnnotated = (issue) => "ast" in issue ? some2(issue.ast) : none2();
var Either_void = /* @__PURE__ */ right2(void 0);
var getCurrentMessage = (issue) => getAnnotated(issue).pipe(flatMap(getMessageAnnotation), match2({
  onNone: () => Either_void,
  onSome: (messageAnnotation) => {
    const union10 = messageAnnotation(issue);
    if (isString(union10)) {
      return right2({
        message: union10,
        override: false
      });
    }
    if (isEffect2(union10)) {
      return map19(union10, (message) => ({
        message,
        override: false
      }));
    }
    if (isString(union10.message)) {
      return right2({
        message: union10.message,
        override: union10.override
      });
    }
    return map19(union10.message, (message) => ({
      message,
      override: union10.override
    }));
  }
}));
var createParseIssueGuard = (tag2) => (issue) => issue._tag === tag2;
var isComposite2 = /* @__PURE__ */ createParseIssueGuard("Composite");
var isRefinement2 = /* @__PURE__ */ createParseIssueGuard("Refinement");
var isTransformation = /* @__PURE__ */ createParseIssueGuard("Transformation");
var getMessage = (issue) => flatMap17(getCurrentMessage(issue), (currentMessage) => {
  if (currentMessage !== void 0) {
    const useInnerMessage = !currentMessage.override && (isComposite2(issue) || isRefinement2(issue) && issue.kind === "From" || isTransformation(issue) && issue.kind !== "Transformation");
    return useInnerMessage ? isTransformation(issue) || isRefinement2(issue) ? getMessage(issue.issue) : Either_void : right2(currentMessage.message);
  }
  return Either_void;
});
var getParseIssueTitleAnnotation2 = (issue) => getAnnotated(issue).pipe(flatMap(getParseIssueTitleAnnotation), flatMapNullable((annotation) => annotation(issue)), getOrUndefined);
function getRefinementExpected(ast) {
  return getDescriptionAnnotation(ast).pipe(orElse(() => getTitleAnnotation(ast)), orElse(() => getAutoTitleAnnotation(ast)), orElse(() => getIdentifierAnnotation(ast)), getOrElse(() => `{ ${ast.from} | filter }`));
}
function getDefaultTypeMessage(issue) {
  if (issue.message !== void 0) {
    return issue.message;
  }
  const expected = isRefinement(issue.ast) ? getRefinementExpected(issue.ast) : String(issue.ast);
  return `Expected ${expected}, actual ${formatUnknown(issue.actual)}`;
}
var formatTypeMessage = (issue) => map25(getMessage(issue), (message) => message ?? getParseIssueTitleAnnotation2(issue) ?? getDefaultTypeMessage(issue));
var getParseIssueTitle = (issue) => getParseIssueTitleAnnotation2(issue) ?? String(issue.ast);
var formatForbiddenMessage = (issue) => issue.message ?? "is forbidden";
var formatUnexpectedMessage = (issue) => issue.message ?? "is unexpected";
var formatMissingMessage = (issue) => {
  const missingMessageAnnotation = getMissingMessageAnnotation(issue.ast);
  if (isSome2(missingMessageAnnotation)) {
    const annotation = missingMessageAnnotation.value();
    return isString(annotation) ? right2(annotation) : annotation;
  }
  return right2(issue.message ?? "is missing");
};
var formatTree = (issue) => {
  switch (issue._tag) {
    case "Type":
      return map25(formatTypeMessage(issue), makeTree);
    case "Forbidden":
      return right2(makeTree(getParseIssueTitle(issue), [makeTree(formatForbiddenMessage(issue))]));
    case "Unexpected":
      return right2(makeTree(formatUnexpectedMessage(issue)));
    case "Missing":
      return map25(formatMissingMessage(issue), makeTree);
    case "Transformation":
      return flatMap17(getMessage(issue), (message) => {
        if (message !== void 0) {
          return right2(makeTree(message));
        }
        return map25(formatTree(issue.issue), (tree) => makeTree(getParseIssueTitle(issue), [makeTree(formatTransformationKind(issue.kind), [tree])]));
      });
    case "Refinement":
      return flatMap17(getMessage(issue), (message) => {
        if (message !== void 0) {
          return right2(makeTree(message));
        }
        return map25(formatTree(issue.issue), (tree) => makeTree(getParseIssueTitle(issue), [makeTree(formatRefinementKind(issue.kind), [tree])]));
      });
    case "Pointer":
      return map25(formatTree(issue.issue), (tree) => makeTree(formatPath(issue.path), [tree]));
    case "Composite":
      return flatMap17(getMessage(issue), (message) => {
        if (message !== void 0) {
          return right2(makeTree(message));
        }
        const parseIssueTitle = getParseIssueTitle(issue);
        return isNonEmpty(issue.issues) ? map25(forEach10(issue.issues, formatTree), (forest) => makeTree(parseIssueTitle, forest)) : map25(formatTree(issue.issues), (tree) => makeTree(parseIssueTitle, [tree]));
      });
  }
};

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Logger.js
var Logger_exports = {};
__export(Logger_exports, {
  LoggerTypeId: () => LoggerTypeId2,
  add: () => add6,
  addEffect: () => addEffect,
  addScoped: () => addScoped,
  batched: () => batched,
  defaultLogger: () => defaultLogger2,
  filterLogLevel: () => filterLogLevel2,
  isLogger: () => isLogger2,
  json: () => json,
  jsonLogger: () => jsonLogger3,
  logFmt: () => logFmt,
  logfmtLogger: () => logfmtLogger2,
  make: () => make55,
  map: () => map26,
  mapInput: () => mapInput5,
  mapInputOptions: () => mapInputOptions2,
  minimumLogLevel: () => minimumLogLevel2,
  none: () => none10,
  pretty: () => pretty4,
  prettyLogger: () => prettyLogger3,
  prettyLoggerDefault: () => prettyLoggerDefault2,
  remove: () => remove9,
  replace: () => replace3,
  replaceEffect: () => replaceEffect,
  replaceScoped: () => replaceScoped,
  simple: () => simple2,
  stringLogger: () => stringLogger2,
  structured: () => structured,
  structuredLogger: () => structuredLogger3,
  succeed: () => succeed17,
  sync: () => sync11,
  test: () => test2,
  tracerLogger: () => tracerLogger2,
  withConsoleError: () => withConsoleError,
  withConsoleLog: () => withConsoleLog,
  withLeveledConsole: () => withLeveledConsole,
  withMinimumLogLevel: () => withMinimumLogLevel2,
  withSpanAnnotations: () => withSpanAnnotations,
  zip: () => zip9,
  zipLeft: () => zipLeft8,
  zipRight: () => zipRight11
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/logger-circular.js
var test = /* @__PURE__ */ dual(2, (self, input) => self.log({
  fiberId: none3,
  logLevel: logLevelInfo,
  message: input,
  cause: empty29,
  context: empty23(),
  spans: empty12(),
  annotations: empty11(),
  date: /* @__PURE__ */ new Date()
}));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Logger.js
var LoggerTypeId2 = LoggerTypeId;
var make55 = makeLogger;
var add6 = addLogger;
var addEffect = addLoggerEffect;
var addScoped = addLoggerScoped;
var mapInput5 = mapInput3;
var mapInputOptions2 = mapInputOptions;
var filterLogLevel2 = filterLogLevel;
var map26 = map14;
var batched = batchedLogger;
var withConsoleLog = loggerWithConsoleLog;
var withLeveledConsole = loggerWithLeveledLog;
var withConsoleError = loggerWithConsoleError;
var none10 = none7;
var remove9 = removeLogger;
var replace3 = replaceLogger;
var replaceEffect = replaceLoggerEffect;
var replaceScoped = replaceLoggerScoped;
var simple2 = simple;
var succeed17 = succeed5;
var sync11 = sync3;
var test2 = test;
var withMinimumLogLevel2 = withMinimumLogLevel;
var withSpanAnnotations = loggerWithSpanAnnotations;
var zip9 = zip4;
var zipLeft8 = zipLeft3;
var zipRight11 = zipRight4;
var defaultLogger2 = defaultLogger;
var jsonLogger3 = jsonLogger;
var logfmtLogger2 = logfmtLogger;
var stringLogger2 = stringLogger;
var prettyLogger3 = prettyLogger;
var prettyLoggerDefault2 = prettyLoggerDefault;
var structuredLogger3 = structuredLogger;
var tracerLogger2 = tracerLogger;
var json = /* @__PURE__ */ replace3(defaultLogger, jsonLogger2);
var logFmt = /* @__PURE__ */ replace3(defaultLogger, logFmtLogger);
var pretty4 = /* @__PURE__ */ replace3(defaultLogger, prettyLogger2);
var structured = /* @__PURE__ */ replace3(defaultLogger, structuredLogger2);
var minimumLogLevel2 = minimumLogLevel;
var isLogger2 = isLogger;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Struct.js
var pick2 = /* @__PURE__ */ dual((args2) => isObject(args2[0]), (s, ...keys6) => {
  const out = {};
  for (const k of keys6) {
    if (k in s) {
      out[k] = s[k];
    }
  }
  return out;
});
var omit2 = /* @__PURE__ */ dual((args2) => isObject(args2[0]), (s, ...keys6) => {
  const out = {
    ...s
  };
  for (const k of keys6) {
    delete out[k];
  }
  return out;
});

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Schema.js
var TypeId20 = /* @__PURE__ */ Symbol.for("effect/Schema");
function make56(ast) {
  return class SchemaClass {
    [TypeId20] = variance7;
    static ast = ast;
    static annotations(annotations2) {
      return make56(mergeSchemaAnnotations(this.ast, annotations2));
    }
    static pipe() {
      return pipeArguments(this, arguments);
    }
    static toString() {
      return String(ast);
    }
    static Type;
    static Encoded;
    static Context;
    static [TypeId20] = variance7;
  };
}
var variance7 = {
  /* c8 ignore next */
  _A: (_) => _,
  /* c8 ignore next */
  _I: (_) => _,
  /* c8 ignore next */
  _R: (_) => _
};
var builtInAnnotations = {
  schemaId: SchemaIdAnnotationId,
  message: MessageAnnotationId,
  missingMessage: MissingMessageAnnotationId,
  identifier: IdentifierAnnotationId,
  title: TitleAnnotationId,
  description: DescriptionAnnotationId,
  examples: ExamplesAnnotationId,
  default: DefaultAnnotationId,
  documentation: DocumentationAnnotationId,
  jsonSchema: JSONSchemaAnnotationId,
  arbitrary: ArbitraryAnnotationId,
  pretty: PrettyAnnotationId,
  equivalence: EquivalenceAnnotationId,
  concurrency: ConcurrencyAnnotationId,
  batching: BatchingAnnotationId,
  parseIssueTitle: ParseIssueTitleAnnotationId,
  parseOptions: ParseOptionsAnnotationId,
  decodingFallback: DecodingFallbackAnnotationId
};
var toASTAnnotations = (annotations2) => {
  if (!annotations2) {
    return {};
  }
  const out = {
    ...annotations2
  };
  for (const key in builtInAnnotations) {
    if (key in annotations2) {
      const id2 = builtInAnnotations[key];
      out[id2] = annotations2[key];
      delete out[key];
    }
  }
  return out;
};
var mergeSchemaAnnotations = (ast, annotations2) => annotations(ast, toASTAnnotations(annotations2));
var format4 = (schema) => String(schema.ast);
var typeSchema = (schema) => make56(typeAST(schema.ast));
var encodeUnknown2 = (schema, options) => {
  const encodeUnknown3 = encodeUnknown(schema, options);
  return (u, overrideOptions) => mapError7(encodeUnknown3(u, overrideOptions), parseError);
};
var encode = encodeUnknown2;
var decodeUnknown2 = (schema, options) => {
  const decodeUnknown3 = decodeUnknown(schema, options);
  return (u, overrideOptions) => mapError7(decodeUnknown3(u, overrideOptions), parseError);
};
var isSchema = (u) => hasProperty(u, TypeId20) && isObject(u[TypeId20]);
var declareConstructor = (typeParameters, options, annotations2) => makeDeclareClass(typeParameters, new Declaration(typeParameters.map((tp) => tp.ast), (...typeParameters2) => options.decode(...typeParameters2.map(make56)), (...typeParameters2) => options.encode(...typeParameters2.map(make56)), toASTAnnotations(annotations2)));
var declarePrimitive = (is2, annotations2) => {
  const decodeUnknown3 = () => (input, _, ast) => is2(input) ? succeed16(input) : fail16(new Type2(ast, input));
  const encodeUnknown3 = decodeUnknown3;
  return makeDeclareClass([], new Declaration([], decodeUnknown3, encodeUnknown3, toASTAnnotations(annotations2)));
};
function makeDeclareClass(typeParameters, ast) {
  return class DeclareClass extends make56(ast) {
    static annotations(annotations2) {
      return makeDeclareClass(this.typeParameters, mergeSchemaAnnotations(this.ast, annotations2));
    }
    static typeParameters = [...typeParameters];
  };
}
var declare = function() {
  if (Array.isArray(arguments[0])) {
    const typeParameters = arguments[0];
    const options = arguments[1];
    const annotations3 = arguments[2];
    return declareConstructor(typeParameters, options, annotations3);
  }
  const is2 = arguments[0];
  const annotations2 = arguments[1];
  return declarePrimitive(is2, annotations2);
};
var Undefined = class extends (/* @__PURE__ */ make56(undefinedKeyword)) {
};
var Null = class extends (/* @__PURE__ */ make56($null)) {
};
var Never = class extends (/* @__PURE__ */ make56(neverKeyword)) {
};
var String$ = class extends (/* @__PURE__ */ make56(stringKeyword)) {
};
var Boolean$ = class extends (/* @__PURE__ */ make56(booleanKeyword)) {
};
var getDefaultUnionAST = (members) => Union.make(members.map((m) => m.ast));
function makeUnionClass(members, ast = getDefaultUnionAST(members)) {
  return class UnionClass extends make56(ast) {
    static annotations(annotations2) {
      return makeUnionClass(this.members, mergeSchemaAnnotations(this.ast, annotations2));
    }
    static members = [...members];
  };
}
function Union2(...members) {
  return isMembers(members) ? makeUnionClass(members) : isNonEmptyReadonlyArray(members) ? members[0] : Never;
}
var NullOr = (self) => Union2(self, Null);
var UndefinedOr = (self) => Union2(self, Undefined);
var NullishOr = (self) => Union2(self, Null, Undefined);
var formatPropertySignatureToken = (isOptional) => isOptional ? '"?:"' : '":"';
var PropertySignatureDeclaration = class extends OptionalType {
  isReadonly;
  defaultValue;
  /**
   * @since 3.10.0
   */
  _tag = "PropertySignatureDeclaration";
  constructor(type, isOptional, isReadonly, annotations2, defaultValue) {
    super(type, isOptional, annotations2);
    this.isReadonly = isReadonly;
    this.defaultValue = defaultValue;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    const token = formatPropertySignatureToken(this.isOptional);
    const type = String(this.type);
    return `PropertySignature<${token}, ${type}, never, ${token}, ${type}>`;
  }
};
var FromPropertySignature = class extends OptionalType {
  isReadonly;
  fromKey;
  constructor(type, isOptional, isReadonly, annotations2, fromKey) {
    super(type, isOptional, annotations2);
    this.isReadonly = isReadonly;
    this.fromKey = fromKey;
  }
};
var ToPropertySignature = class extends OptionalType {
  isReadonly;
  defaultValue;
  constructor(type, isOptional, isReadonly, annotations2, defaultValue) {
    super(type, isOptional, annotations2);
    this.isReadonly = isReadonly;
    this.defaultValue = defaultValue;
  }
};
var formatPropertyKey2 = (p) => {
  if (p === void 0) {
    return "never";
  }
  if (isString(p)) {
    return JSON.stringify(p);
  }
  return String(p);
};
var PropertySignatureTransformation2 = class {
  from;
  to;
  decode;
  encode;
  /**
   * @since 3.10.0
   */
  _tag = "PropertySignatureTransformation";
  constructor(from, to, decode2, encode2) {
    this.from = from;
    this.to = to;
    this.decode = decode2;
    this.encode = encode2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return `PropertySignature<${formatPropertySignatureToken(this.to.isOptional)}, ${this.to.type}, ${formatPropertyKey2(this.from.fromKey)}, ${formatPropertySignatureToken(this.from.isOptional)}, ${this.from.type}>`;
  }
};
var mergeSignatureAnnotations = (ast, annotations2) => {
  switch (ast._tag) {
    case "PropertySignatureDeclaration": {
      return new PropertySignatureDeclaration(ast.type, ast.isOptional, ast.isReadonly, {
        ...ast.annotations,
        ...annotations2
      }, ast.defaultValue);
    }
    case "PropertySignatureTransformation": {
      return new PropertySignatureTransformation2(ast.from, new ToPropertySignature(ast.to.type, ast.to.isOptional, ast.to.isReadonly, {
        ...ast.to.annotations,
        ...annotations2
      }, ast.to.defaultValue), ast.decode, ast.encode);
    }
  }
};
var PropertySignatureTypeId = /* @__PURE__ */ Symbol.for("effect/PropertySignature");
var isPropertySignature = (u) => hasProperty(u, PropertySignatureTypeId);
var PropertySignatureImpl = class _PropertySignatureImpl {
  ast;
  [TypeId20];
  [PropertySignatureTypeId] = null;
  _TypeToken;
  _Key;
  _EncodedToken;
  _HasDefault;
  constructor(ast) {
    this.ast = ast;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  annotations(annotations2) {
    return new _PropertySignatureImpl(mergeSignatureAnnotations(this.ast, toASTAnnotations(annotations2)));
  }
  toString() {
    return String(this.ast);
  }
};
var makePropertySignature = (ast) => new PropertySignatureImpl(ast);
var PropertySignatureWithFromImpl = class _PropertySignatureWithFromImpl extends PropertySignatureImpl {
  from;
  constructor(ast, from) {
    super(ast);
    this.from = from;
  }
  annotations(annotations2) {
    return new _PropertySignatureWithFromImpl(mergeSignatureAnnotations(this.ast, toASTAnnotations(annotations2)), this.from);
  }
};
var withConstructorDefault = /* @__PURE__ */ dual(2, (self, defaultValue) => {
  const ast = self.ast;
  switch (ast._tag) {
    case "PropertySignatureDeclaration":
      return makePropertySignature(new PropertySignatureDeclaration(ast.type, ast.isOptional, ast.isReadonly, ast.annotations, defaultValue));
    case "PropertySignatureTransformation":
      return makePropertySignature(new PropertySignatureTransformation2(ast.from, new ToPropertySignature(ast.to.type, ast.to.isOptional, ast.to.isReadonly, ast.to.annotations, defaultValue), ast.decode, ast.encode));
  }
});
var optionalToRequired = (from, to, options) => makePropertySignature(new PropertySignatureTransformation2(new FromPropertySignature(from.ast, true, true, {}, void 0), new ToPropertySignature(to.ast, false, true, {}, void 0), (o) => some2(options.decode(o)), flatMap(options.encode)));
var optionalToOptional = (from, to, options) => makePropertySignature(new PropertySignatureTransformation2(new FromPropertySignature(from.ast, true, true, {}, void 0), new ToPropertySignature(to.ast, true, true, {}, void 0), options.decode, options.encode));
var optionalPropertySignatureAST = (self, options) => {
  const isExact = options?.exact;
  const defaultValue = options?.default;
  const isNullable2 = options?.nullable;
  const asOption = options?.as == "Option";
  const asOptionEncode = options?.onNoneEncoding ? orElse(options.onNoneEncoding) : identity;
  if (isExact) {
    if (defaultValue) {
      if (isNullable2) {
        return withConstructorDefault(optionalToRequired(NullOr(self), typeSchema(self), {
          decode: match2({
            onNone: defaultValue,
            onSome: (a) => a === null ? defaultValue() : a
          }),
          encode: some2
        }), defaultValue).ast;
      } else {
        return withConstructorDefault(optionalToRequired(self, typeSchema(self), {
          decode: match2({
            onNone: defaultValue,
            onSome: identity
          }),
          encode: some2
        }), defaultValue).ast;
      }
    } else if (asOption) {
      if (isNullable2) {
        return optionalToRequired(NullOr(self), OptionFromSelf(typeSchema(self)), {
          decode: filter(isNotNull),
          encode: asOptionEncode
        }).ast;
      } else {
        return optionalToRequired(self, OptionFromSelf(typeSchema(self)), {
          decode: identity,
          encode: identity
        }).ast;
      }
    } else {
      if (isNullable2) {
        return optionalToOptional(NullOr(self), typeSchema(self), {
          decode: filter(isNotNull),
          encode: identity
        }).ast;
      } else {
        return new PropertySignatureDeclaration(self.ast, true, true, {}, void 0);
      }
    }
  } else {
    if (defaultValue) {
      if (isNullable2) {
        return withConstructorDefault(optionalToRequired(NullishOr(self), typeSchema(self), {
          decode: match2({
            onNone: defaultValue,
            onSome: (a) => a == null ? defaultValue() : a
          }),
          encode: some2
        }), defaultValue).ast;
      } else {
        return withConstructorDefault(optionalToRequired(UndefinedOr(self), typeSchema(self), {
          decode: match2({
            onNone: defaultValue,
            onSome: (a) => a === void 0 ? defaultValue() : a
          }),
          encode: some2
        }), defaultValue).ast;
      }
    } else if (asOption) {
      if (isNullable2) {
        return optionalToRequired(NullishOr(self), OptionFromSelf(typeSchema(self)), {
          decode: filter((a) => a != null),
          encode: asOptionEncode
        }).ast;
      } else {
        return optionalToRequired(UndefinedOr(self), OptionFromSelf(typeSchema(self)), {
          decode: filter(isNotUndefined),
          encode: asOptionEncode
        }).ast;
      }
    } else {
      if (isNullable2) {
        return optionalToOptional(NullishOr(self), UndefinedOr(typeSchema(self)), {
          decode: filter(isNotNull),
          encode: identity
        }).ast;
      } else {
        return new PropertySignatureDeclaration(UndefinedOr(self).ast, true, true, {}, void 0);
      }
    }
  }
};
var optionalWith = /* @__PURE__ */ dual((args2) => isSchema(args2[0]), (self, options) => {
  return new PropertySignatureWithFromImpl(optionalPropertySignatureAST(self, options), self);
});
var preserveMissingMessageAnnotation = /* @__PURE__ */ pickAnnotations([MissingMessageAnnotationId]);
var getDefaultTypeLiteralAST = (fields, records) => {
  const ownKeys2 = ownKeys(fields);
  const pss = [];
  if (ownKeys2.length > 0) {
    const from = [];
    const to = [];
    const transformations = [];
    for (let i = 0; i < ownKeys2.length; i++) {
      const key = ownKeys2[i];
      const field = fields[key];
      if (isPropertySignature(field)) {
        const ast = field.ast;
        switch (ast._tag) {
          case "PropertySignatureDeclaration": {
            const type = ast.type;
            const isOptional = ast.isOptional;
            const toAnnotations = ast.annotations;
            from.push(new PropertySignature(key, type, isOptional, true, preserveMissingMessageAnnotation(ast)));
            to.push(new PropertySignature(key, typeAST(type), isOptional, true, toAnnotations));
            pss.push(new PropertySignature(key, type, isOptional, true, toAnnotations));
            break;
          }
          case "PropertySignatureTransformation": {
            const fromKey = ast.from.fromKey ?? key;
            from.push(new PropertySignature(fromKey, ast.from.type, ast.from.isOptional, true, ast.from.annotations));
            to.push(new PropertySignature(key, ast.to.type, ast.to.isOptional, true, ast.to.annotations));
            transformations.push(new PropertySignatureTransformation(fromKey, key, ast.decode, ast.encode));
            break;
          }
        }
      } else {
        from.push(new PropertySignature(key, field.ast, false, true));
        to.push(new PropertySignature(key, typeAST(field.ast), false, true));
        pss.push(new PropertySignature(key, field.ast, false, true));
      }
    }
    if (isNonEmptyReadonlyArray(transformations)) {
      const issFrom = [];
      const issTo = [];
      for (const r of records) {
        const {
          indexSignatures,
          propertySignatures
        } = record(r.key.ast, r.value.ast);
        propertySignatures.forEach((ps) => {
          from.push(ps);
          to.push(new PropertySignature(ps.name, typeAST(ps.type), ps.isOptional, ps.isReadonly, ps.annotations));
        });
        indexSignatures.forEach((is2) => {
          issFrom.push(is2);
          issTo.push(new IndexSignature(is2.parameter, typeAST(is2.type), is2.isReadonly));
        });
      }
      return new Transformation(new TypeLiteral(from, issFrom, {
        [AutoTitleAnnotationId]: "Struct (Encoded side)"
      }), new TypeLiteral(to, issTo, {
        [AutoTitleAnnotationId]: "Struct (Type side)"
      }), new TypeLiteralTransformation(transformations));
    }
  }
  const iss = [];
  for (const r of records) {
    const {
      indexSignatures,
      propertySignatures
    } = record(r.key.ast, r.value.ast);
    propertySignatures.forEach((ps) => pss.push(ps));
    indexSignatures.forEach((is2) => iss.push(is2));
  }
  return new TypeLiteral(pss, iss);
};
var lazilyMergeDefaults = (fields, out) => {
  const ownKeys2 = ownKeys(fields);
  for (const key of ownKeys2) {
    const field = fields[key];
    if (out[key] === void 0 && isPropertySignature(field)) {
      const ast = field.ast;
      const defaultValue = ast._tag === "PropertySignatureDeclaration" ? ast.defaultValue : ast.to.defaultValue;
      if (defaultValue !== void 0) {
        out[key] = defaultValue();
      }
    }
  }
  return out;
};
function makeTypeLiteralClass(fields, records, ast = getDefaultTypeLiteralAST(fields, records)) {
  return class TypeLiteralClass extends make56(ast) {
    static annotations(annotations2) {
      return makeTypeLiteralClass(this.fields, this.records, mergeSchemaAnnotations(this.ast, annotations2));
    }
    static fields = {
      ...fields
    };
    static records = [...records];
    static make = (props, options) => {
      const propsWithDefaults = lazilyMergeDefaults(fields, {
        ...props
      });
      return getDisableValidationMakeOption(options) ? propsWithDefaults : validateSync(this)(propsWithDefaults);
    };
    static pick(...keys6) {
      return Struct(pick2(fields, ...keys6));
    }
    static omit(...keys6) {
      return Struct(omit2(fields, ...keys6));
    }
  };
}
function Struct(fields, ...records) {
  return makeTypeLiteralClass(fields, records);
}
function makeRecordClass(key, value, ast) {
  return class RecordClass extends makeTypeLiteralClass({}, [{
    key,
    value
  }], ast) {
    static annotations(annotations2) {
      return makeRecordClass(key, value, mergeSchemaAnnotations(this.ast, annotations2));
    }
    static key = key;
    static value = value;
  };
}
var Record = (options) => makeRecordClass(options.key, options.value);
var toComposite = (eff, onSuccess, ast, actual) => mapBoth7(eff, {
  onFailure: (e) => new Composite2(ast, actual, e),
  onSuccess
});
var optionDecode = (input) => input._tag === "None" ? none2() : some2(input.value);
var optionArbitrary = (value, ctx) => (fc) => fc.oneof(ctx, fc.record({
  _tag: fc.constant("None")
}), fc.record({
  _tag: fc.constant("Some"),
  value: value(fc)
})).map(optionDecode);
var optionPretty = (value) => match2({
  onNone: () => "none()",
  onSome: (a) => `some(${value(a)})`
});
var optionParse = (decodeUnknown3) => (u, options, ast) => isOption2(u) ? isNone2(u) ? succeed16(none2()) : toComposite(decodeUnknown3(u.value, options), some2, ast, u) : fail16(new Type2(ast, u));
var OptionFromSelf = (value) => {
  return declare([value], {
    decode: (value2) => optionParse(decodeUnknown(value2)),
    encode: (value2) => optionParse(encodeUnknown(value2))
  }, {
    description: `Option<${format4(value)}>`,
    pretty: optionPretty,
    arbitrary: optionArbitrary,
    equivalence: getEquivalence
  });
};
function getDisableValidationMakeOption(options) {
  return isBoolean(options) ? options : options?.disableValidation ?? false;
}

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Stream.js
var Stream_exports = {};
__export(Stream_exports, {
  DefaultChunkSize: () => DefaultChunkSize2,
  Do: () => Do6,
  StreamTypeId: () => StreamTypeId3,
  accumulate: () => accumulate2,
  accumulateChunks: () => accumulateChunks2,
  acquireRelease: () => acquireRelease4,
  aggregate: () => aggregate2,
  aggregateWithin: () => aggregateWithin2,
  aggregateWithinEither: () => aggregateWithinEither2,
  as: () => as10,
  async: () => _async2,
  asyncEffect: () => asyncEffect4,
  asyncPush: () => asyncPush2,
  asyncScoped: () => asyncScoped2,
  bind: () => bind7,
  bindEffect: () => bindEffect2,
  bindTo: () => bindTo7,
  branchAfter: () => branchAfter2,
  broadcast: () => broadcast2,
  broadcastDynamic: () => broadcastDynamic2,
  broadcastedQueues: () => broadcastedQueues2,
  broadcastedQueuesDynamic: () => broadcastedQueuesDynamic2,
  buffer: () => buffer2,
  bufferChunks: () => bufferChunks2,
  catchAll: () => catchAll8,
  catchAllCause: () => catchAllCause7,
  catchSome: () => catchSome4,
  catchSomeCause: () => catchSomeCause4,
  catchTag: () => catchTag4,
  catchTags: () => catchTags4,
  changes: () => changes2,
  changesWith: () => changesWith2,
  changesWithEffect: () => changesWithEffect2,
  chunks: () => chunks2,
  chunksWith: () => chunksWith2,
  combine: () => combine10,
  combineChunks: () => combineChunks2,
  concat: () => concat3,
  concatAll: () => concatAll3,
  context: () => context6,
  contextWith: () => contextWith4,
  contextWithEffect: () => contextWithEffect4,
  contextWithStream: () => contextWithStream2,
  cross: () => cross2,
  crossLeft: () => crossLeft2,
  crossRight: () => crossRight2,
  crossWith: () => crossWith2,
  debounce: () => debounce2,
  decodeText: () => decodeText2,
  die: () => die11,
  dieMessage: () => dieMessage5,
  dieSync: () => dieSync7,
  distributedWith: () => distributedWith2,
  distributedWithDynamic: () => distributedWithDynamic2,
  drain: () => drain4,
  drainFork: () => drainFork2,
  drop: () => drop4,
  dropRight: () => dropRight3,
  dropUntil: () => dropUntil4,
  dropUntilEffect: () => dropUntilEffect2,
  dropWhile: () => dropWhile6,
  dropWhileEffect: () => dropWhileEffect2,
  either: () => either6,
  empty: () => empty36,
  encodeText: () => encodeText2,
  ensuring: () => ensuring7,
  ensuringWith: () => ensuringWith3,
  execute: () => execute2,
  fail: () => fail17,
  failCause: () => failCause14,
  failCauseSync: () => failCauseSync7,
  failSync: () => failSync8,
  filter: () => filter12,
  filterEffect: () => filterEffect2,
  filterMap: () => filterMap9,
  filterMapEffect: () => filterMapEffect2,
  filterMapWhile: () => filterMapWhile4,
  filterMapWhileEffect: () => filterMapWhileEffect2,
  finalizer: () => finalizer2,
  find: () => find3,
  findEffect: () => findEffect2,
  flatMap: () => flatMap18,
  flatten: () => flatten15,
  flattenChunks: () => flattenChunks2,
  flattenEffect: () => flattenEffect2,
  flattenExitOption: () => flattenExitOption2,
  flattenIterables: () => flattenIterables2,
  flattenTake: () => flattenTake2,
  forever: () => forever6,
  fromAsyncIterable: () => fromAsyncIterable2,
  fromChannel: () => fromChannel3,
  fromChunk: () => fromChunk2,
  fromChunkPubSub: () => fromChunkPubSub2,
  fromChunkQueue: () => fromChunkQueue2,
  fromChunks: () => fromChunks2,
  fromEffect: () => fromEffect8,
  fromEffectOption: () => fromEffectOption2,
  fromEventListener: () => fromEventListener2,
  fromIterable: () => fromIterable13,
  fromIterableEffect: () => fromIterableEffect2,
  fromIteratorSucceed: () => fromIteratorSucceed2,
  fromPubSub: () => fromPubSub2,
  fromPull: () => fromPull3,
  fromQueue: () => fromQueue3,
  fromReadableStream: () => fromReadableStream2,
  fromReadableStreamByob: () => fromReadableStreamByob2,
  fromSchedule: () => fromSchedule2,
  fromTPubSub: () => fromTPubSub2,
  fromTQueue: () => fromTQueue2,
  groupAdjacentBy: () => groupAdjacentBy2,
  groupBy: () => groupBy3,
  groupByKey: () => groupByKey2,
  grouped: () => grouped2,
  groupedWithin: () => groupedWithin2,
  haltAfter: () => haltAfter2,
  haltWhen: () => haltWhen2,
  haltWhenDeferred: () => haltWhenDeferred2,
  identity: () => identity3,
  interleave: () => interleave2,
  interleaveWith: () => interleaveWith2,
  interruptAfter: () => interruptAfter2,
  interruptWhen: () => interruptWhen3,
  interruptWhenDeferred: () => interruptWhenDeferred3,
  intersperse: () => intersperse3,
  intersperseAffixes: () => intersperseAffixes2,
  iterate: () => iterate4,
  let: () => let_7,
  make: () => make57,
  map: () => map27,
  mapAccum: () => mapAccum6,
  mapAccumEffect: () => mapAccumEffect2,
  mapBoth: () => mapBoth8,
  mapChunks: () => mapChunks2,
  mapChunksEffect: () => mapChunksEffect2,
  mapConcat: () => mapConcat2,
  mapConcatChunk: () => mapConcatChunk2,
  mapConcatChunkEffect: () => mapConcatChunkEffect2,
  mapConcatEffect: () => mapConcatEffect2,
  mapEffect: () => mapEffect4,
  mapError: () => mapError8,
  mapErrorCause: () => mapErrorCause5,
  mapInputContext: () => mapInputContext6,
  merge: () => merge10,
  mergeAll: () => mergeAll8,
  mergeEither: () => mergeEither2,
  mergeLeft: () => mergeLeft2,
  mergeRight: () => mergeRight2,
  mergeWith: () => mergeWith4,
  mergeWithTag: () => mergeWithTag2,
  mkString: () => mkString3,
  never: () => never5,
  onDone: () => onDone2,
  onEnd: () => onEnd2,
  onError: () => onError4,
  onStart: () => onStart2,
  orDie: () => orDie6,
  orDieWith: () => orDieWith5,
  orElse: () => orElse10,
  orElseEither: () => orElseEither5,
  orElseFail: () => orElseFail4,
  orElseIfEmpty: () => orElseIfEmpty2,
  orElseIfEmptyChunk: () => orElseIfEmptyChunk2,
  orElseIfEmptyStream: () => orElseIfEmptyStream2,
  orElseSucceed: () => orElseSucceed4,
  paginate: () => paginate2,
  paginateChunk: () => paginateChunk2,
  paginateChunkEffect: () => paginateChunkEffect2,
  paginateEffect: () => paginateEffect2,
  partition: () => partition7,
  partitionEither: () => partitionEither2,
  peel: () => peel2,
  pipeThrough: () => pipeThrough2,
  pipeThroughChannel: () => pipeThroughChannel2,
  pipeThroughChannelOrFail: () => pipeThroughChannelOrFail2,
  prepend: () => prepend5,
  provideContext: () => provideContext6,
  provideLayer: () => provideLayer2,
  provideService: () => provideService6,
  provideServiceEffect: () => provideServiceEffect4,
  provideServiceStream: () => provideServiceStream2,
  provideSomeContext: () => provideSomeContext3,
  provideSomeLayer: () => provideSomeLayer3,
  race: () => race4,
  raceAll: () => raceAll4,
  range: () => range4,
  rechunk: () => rechunk2,
  refineOrDie: () => refineOrDie2,
  refineOrDieWith: () => refineOrDieWith2,
  repeat: () => repeat3,
  repeatEffect: () => repeatEffect2,
  repeatEffectChunk: () => repeatEffectChunk2,
  repeatEffectChunkOption: () => repeatEffectChunkOption2,
  repeatEffectOption: () => repeatEffectOption2,
  repeatEffectWithSchedule: () => repeatEffectWithSchedule2,
  repeatEither: () => repeatEither2,
  repeatElements: () => repeatElements2,
  repeatElementsWith: () => repeatElementsWith2,
  repeatValue: () => repeatValue2,
  repeatWith: () => repeatWith2,
  retry: () => retry7,
  run: () => run5,
  runCollect: () => runCollect2,
  runCount: () => runCount2,
  runDrain: () => runDrain3,
  runFold: () => runFold2,
  runFoldEffect: () => runFoldEffect2,
  runFoldScoped: () => runFoldScoped2,
  runFoldScopedEffect: () => runFoldScopedEffect2,
  runFoldWhile: () => runFoldWhile2,
  runFoldWhileEffect: () => runFoldWhileEffect2,
  runFoldWhileScoped: () => runFoldWhileScoped2,
  runFoldWhileScopedEffect: () => runFoldWhileScopedEffect2,
  runForEach: () => runForEach2,
  runForEachChunk: () => runForEachChunk2,
  runForEachChunkScoped: () => runForEachChunkScoped2,
  runForEachScoped: () => runForEachScoped2,
  runForEachWhile: () => runForEachWhile2,
  runForEachWhileScoped: () => runForEachWhileScoped2,
  runHead: () => runHead2,
  runIntoPubSub: () => runIntoPubSub2,
  runIntoPubSubScoped: () => runIntoPubSubScoped2,
  runIntoQueue: () => runIntoQueue2,
  runIntoQueueElementsScoped: () => runIntoQueueElementsScoped2,
  runIntoQueueScoped: () => runIntoQueueScoped2,
  runLast: () => runLast2,
  runScoped: () => runScoped3,
  runSum: () => runSum2,
  scan: () => scan3,
  scanEffect: () => scanEffect2,
  scanReduce: () => scanReduce2,
  scanReduceEffect: () => scanReduceEffect2,
  schedule: () => schedule3,
  scheduleWith: () => scheduleWith2,
  scoped: () => scoped6,
  scopedWith: () => scopedWith5,
  share: () => share2,
  sliding: () => sliding8,
  slidingSize: () => slidingSize2,
  some: () => some8,
  someOrElse: () => someOrElse2,
  someOrFail: () => someOrFail2,
  split: () => split3,
  splitLines: () => splitLines3,
  splitOnChunk: () => splitOnChunk2,
  succeed: () => succeed18,
  suspend: () => suspend11,
  sync: () => sync12,
  take: () => take9,
  takeRight: () => takeRight4,
  takeUntil: () => takeUntil4,
  takeUntilEffect: () => takeUntilEffect2,
  takeWhile: () => takeWhile6,
  tap: () => tap8,
  tapBoth: () => tapBoth4,
  tapError: () => tapError6,
  tapErrorCause: () => tapErrorCause6,
  tapSink: () => tapSink2,
  throttle: () => throttle2,
  throttleEffect: () => throttleEffect2,
  tick: () => tick2,
  timeout: () => timeout4,
  timeoutFail: () => timeoutFail4,
  timeoutFailCause: () => timeoutFailCause4,
  timeoutTo: () => timeoutTo4,
  toAsyncIterable: () => toAsyncIterable2,
  toAsyncIterableEffect: () => toAsyncIterableEffect2,
  toAsyncIterableRuntime: () => toAsyncIterableRuntime2,
  toChannel: () => toChannel3,
  toPubSub: () => toPubSub3,
  toPull: () => toPull3,
  toQueue: () => toQueue3,
  toQueueOfElements: () => toQueueOfElements2,
  toReadableStream: () => toReadableStream2,
  toReadableStreamEffect: () => toReadableStreamEffect2,
  toReadableStreamRuntime: () => toReadableStreamRuntime2,
  transduce: () => transduce2,
  unfold: () => unfold4,
  unfoldChunk: () => unfoldChunk2,
  unfoldChunkEffect: () => unfoldChunkEffect2,
  unfoldEffect: () => unfoldEffect2,
  unwrap: () => unwrap3,
  unwrapScoped: () => unwrapScoped5,
  unwrapScopedWith: () => unwrapScopedWith4,
  updateService: () => updateService5,
  void: () => void_9,
  when: () => when4,
  whenCase: () => whenCase2,
  whenCaseEffect: () => whenCaseEffect2,
  whenEffect: () => whenEffect4,
  withExecutionPlan: () => withExecutionPlan4,
  withSpan: () => withSpan7,
  zip: () => zip10,
  zipAll: () => zipAll2,
  zipAllLeft: () => zipAllLeft2,
  zipAllRight: () => zipAllRight2,
  zipAllSortedByKey: () => zipAllSortedByKey2,
  zipAllSortedByKeyLeft: () => zipAllSortedByKeyLeft2,
  zipAllSortedByKeyRight: () => zipAllSortedByKeyRight2,
  zipAllSortedByKeyWith: () => zipAllSortedByKeyWith2,
  zipAllWith: () => zipAllWith2,
  zipFlatten: () => zipFlatten2,
  zipLatest: () => zipLatest2,
  zipLatestAll: () => zipLatestAll2,
  zipLatestWith: () => zipLatestWith2,
  zipLeft: () => zipLeft9,
  zipRight: () => zipRight12,
  zipWith: () => zipWith12,
  zipWithChunks: () => zipWithChunks2,
  zipWithIndex: () => zipWithIndex2,
  zipWithNext: () => zipWithNext2,
  zipWithPrevious: () => zipWithPrevious2,
  zipWithPreviousAndNext: () => zipWithPreviousAndNext2
});
var StreamTypeId3 = StreamTypeId2;
var DefaultChunkSize2 = DefaultChunkSize;
var accumulate2 = accumulate;
var accumulateChunks2 = accumulateChunks;
var acquireRelease4 = acquireRelease3;
var aggregate2 = aggregate;
var aggregateWithin2 = aggregateWithin;
var aggregateWithinEither2 = aggregateWithinEither;
var as10 = as9;
var _async2 = _async;
var asyncEffect4 = asyncEffect3;
var asyncPush2 = asyncPush;
var asyncScoped2 = asyncScoped;
var branchAfter2 = branchAfter;
var broadcast2 = broadcast;
var share2 = share;
var broadcastDynamic2 = broadcastDynamic;
var broadcastedQueues2 = broadcastedQueues;
var broadcastedQueuesDynamic2 = broadcastedQueuesDynamic;
var buffer2 = buffer;
var bufferChunks2 = bufferChunks;
var catchAll8 = catchAll7;
var catchAllCause7 = catchAllCause6;
var catchSome4 = catchSome3;
var catchTag4 = catchTag3;
var catchTags4 = catchTags3;
var catchSomeCause4 = catchSomeCause3;
var changes2 = changes;
var changesWith2 = changesWith;
var changesWithEffect2 = changesWithEffect;
var chunks2 = chunks;
var chunksWith2 = chunksWith;
var combine10 = combine9;
var combineChunks2 = combineChunks;
var concat3 = concat2;
var concatAll3 = concatAll2;
var cross2 = cross;
var crossLeft2 = crossLeft;
var crossRight2 = crossRight;
var crossWith2 = crossWith;
var debounce2 = debounce;
var die11 = die10;
var dieSync7 = dieSync6;
var dieMessage5 = dieMessage4;
var distributedWith2 = distributedWith;
var distributedWithDynamic2 = distributedWithDynamic;
var drain4 = drain3;
var drainFork2 = drainFork;
var drop4 = drop3;
var dropRight3 = dropRight2;
var dropUntil4 = dropUntil3;
var dropUntilEffect2 = dropUntilEffect;
var dropWhile6 = dropWhile5;
var dropWhileEffect2 = dropWhileEffect;
var either6 = either5;
var empty36 = empty35;
var ensuring7 = ensuring6;
var ensuringWith3 = ensuringWith2;
var context6 = context5;
var contextWith4 = contextWith3;
var contextWithEffect4 = contextWithEffect3;
var contextWithStream2 = contextWithStream;
var execute2 = execute;
var fail17 = fail15;
var failSync8 = failSync7;
var failCause14 = failCause13;
var failCauseSync7 = failCauseSync6;
var filter12 = filter10;
var filterEffect2 = filterEffect;
var filterMap9 = filterMap8;
var filterMapEffect2 = filterMapEffect;
var filterMapWhile4 = filterMapWhile3;
var filterMapWhileEffect2 = filterMapWhileEffect;
var finalizer2 = finalizer;
var find3 = find2;
var findEffect2 = findEffect;
var flatMap18 = flatMap16;
var flatten15 = flatten14;
var flattenChunks2 = flattenChunks;
var flattenEffect2 = flattenEffect;
var flattenExitOption2 = flattenExitOption;
var flattenIterables2 = flattenIterables;
var flattenTake2 = flattenTake;
var forever6 = forever5;
var fromAsyncIterable2 = fromAsyncIterable;
var fromChannel3 = fromChannel2;
var toChannel3 = toChannel2;
var fromChunk2 = fromChunk;
var fromChunkPubSub2 = fromChunkPubSub;
var fromChunkQueue2 = fromChunkQueue;
var fromChunks2 = fromChunks;
var fromEffect8 = fromEffect7;
var fromEffectOption2 = fromEffectOption;
var fromPubSub2 = fromPubSub;
var fromTPubSub2 = fromTPubSub;
var fromIterable13 = fromIterable12;
var fromIterableEffect2 = fromIterableEffect;
var fromIteratorSucceed2 = fromIteratorSucceed;
var fromPull3 = fromPull2;
var fromQueue3 = fromQueue2;
var fromTQueue2 = fromTQueue;
var fromReadableStream2 = fromReadableStream;
var fromReadableStreamByob2 = fromReadableStreamByob;
var fromSchedule2 = fromSchedule;
var groupAdjacentBy2 = groupAdjacentBy;
var groupBy3 = groupBy2;
var groupByKey2 = groupByKey;
var grouped2 = grouped;
var groupedWithin2 = groupedWithin;
var haltAfter2 = haltAfter;
var haltWhen2 = haltWhen;
var haltWhenDeferred2 = haltWhenDeferred;
var identity3 = identityStream;
var interleave2 = interleave;
var interleaveWith2 = interleaveWith;
var intersperse3 = intersperse2;
var intersperseAffixes2 = intersperseAffixes;
var interruptAfter2 = interruptAfter;
var interruptWhen3 = interruptWhen2;
var interruptWhenDeferred3 = interruptWhenDeferred2;
var iterate4 = iterate3;
var make57 = make51;
var map27 = map24;
var mapAccum6 = mapAccum5;
var mapAccumEffect2 = mapAccumEffect;
var mapBoth8 = mapBoth6;
var mapChunks2 = mapChunks;
var mapChunksEffect2 = mapChunksEffect;
var mapConcat2 = mapConcat;
var mapConcatChunk2 = mapConcatChunk;
var mapConcatChunkEffect2 = mapConcatChunkEffect;
var mapConcatEffect2 = mapConcatEffect;
var mapEffect4 = mapEffectOptions;
var mapError8 = mapError6;
var mapErrorCause5 = mapErrorCause4;
var merge10 = merge9;
var mergeAll8 = mergeAll7;
var mergeWithTag2 = mergeWithTag;
var mergeWith4 = mergeWith3;
var mergeEither2 = mergeEither;
var mergeLeft2 = mergeLeft;
var mergeRight2 = mergeRight;
var mkString3 = mkString2;
var never5 = never4;
var onEnd2 = onEnd;
var onError4 = onError3;
var onDone2 = onDone;
var onStart2 = onStart;
var orDie6 = orDie5;
var orDieWith5 = orDieWith4;
var orElse10 = orElse8;
var orElseEither5 = orElseEither4;
var orElseFail4 = orElseFail3;
var orElseIfEmpty2 = orElseIfEmpty;
var orElseIfEmptyChunk2 = orElseIfEmptyChunk;
var orElseIfEmptyStream2 = orElseIfEmptyStream;
var orElseSucceed4 = orElseSucceed3;
var paginate2 = paginate;
var paginateChunk2 = paginateChunk;
var paginateChunkEffect2 = paginateChunkEffect;
var paginateEffect2 = paginateEffect;
var partition7 = partition6;
var partitionEither2 = partitionEither;
var peel2 = peel;
var pipeThrough2 = pipeThrough;
var pipeThroughChannel2 = pipeThroughChannel;
var pipeThroughChannelOrFail2 = pipeThroughChannelOrFail;
var prepend5 = prepend4;
var provideContext6 = provideContext5;
var provideSomeContext3 = provideSomeContext2;
var provideLayer2 = provideLayer;
var provideService6 = provideService5;
var provideServiceEffect4 = provideServiceEffect3;
var provideServiceStream2 = provideServiceStream;
var mapInputContext6 = mapInputContext5;
var provideSomeLayer3 = provideSomeLayer2;
var race4 = race3;
var raceAll4 = raceAll3;
var range4 = range3;
var rechunk2 = rechunk;
var refineOrDie2 = refineOrDie;
var refineOrDieWith2 = refineOrDieWith;
var repeat3 = repeat2;
var repeatEffect2 = repeatEffect;
var repeatEffectChunk2 = repeatEffectChunk;
var repeatEffectChunkOption2 = repeatEffectChunkOption;
var repeatEffectOption2 = repeatEffectOption;
var repeatEffectWithSchedule2 = repeatEffectWithSchedule;
var repeatEither2 = repeatEither;
var repeatElements2 = repeatElements;
var repeatElementsWith2 = repeatElementsWith;
var repeatValue2 = repeatValue;
var repeatWith2 = repeatWith;
var retry7 = retry6;
var withExecutionPlan4 = withExecutionPlan3;
var run5 = run3;
var runCollect2 = runCollect;
var runCount2 = runCount;
var runDrain3 = runDrain2;
var runFold2 = runFold;
var runFoldEffect2 = runFoldEffect;
var runFoldScoped2 = runFoldScoped;
var runFoldScopedEffect2 = runFoldScopedEffect;
var runFoldWhile2 = runFoldWhile;
var runFoldWhileEffect2 = runFoldWhileEffect;
var runFoldWhileScoped2 = runFoldWhileScoped;
var runFoldWhileScopedEffect2 = runFoldWhileScopedEffect;
var runForEach2 = runForEach;
var runForEachChunk2 = runForEachChunk;
var runForEachChunkScoped2 = runForEachChunkScoped;
var runForEachScoped2 = runForEachScoped;
var runForEachWhile2 = runForEachWhile;
var runForEachWhileScoped2 = runForEachWhileScoped;
var runHead2 = runHead;
var runIntoPubSub2 = runIntoPubSub;
var runIntoPubSubScoped2 = runIntoPubSubScoped;
var runIntoQueue2 = runIntoQueue;
var runIntoQueueElementsScoped2 = runIntoQueueElementsScoped;
var runIntoQueueScoped2 = runIntoQueueScoped;
var runLast2 = runLast;
var runScoped3 = runScoped2;
var runSum2 = runSum;
var scan3 = scan2;
var scanEffect2 = scanEffect;
var scanReduce2 = scanReduce;
var scanReduceEffect2 = scanReduceEffect;
var schedule3 = schedule2;
var scheduleWith2 = scheduleWith;
var scoped6 = scoped5;
var scopedWith5 = scopedWith4;
var sliding8 = sliding7;
var slidingSize2 = slidingSize;
var some8 = some7;
var someOrElse2 = someOrElse;
var someOrFail2 = someOrFail;
var split3 = split2;
var splitOnChunk2 = splitOnChunk;
var splitLines3 = splitLines2;
var succeed18 = succeed15;
var sync12 = sync10;
var suspend11 = suspend10;
var take9 = take8;
var takeRight4 = takeRight3;
var takeUntil4 = takeUntil3;
var takeUntilEffect2 = takeUntilEffect;
var takeWhile6 = takeWhile5;
var tap8 = tap7;
var tapBoth4 = tapBoth3;
var tapError6 = tapError5;
var tapErrorCause6 = tapErrorCause5;
var tapSink2 = tapSink;
var throttle2 = throttle;
var throttleEffect2 = throttleEffect;
var tick2 = tick;
var timeout4 = timeout3;
var timeoutFail4 = timeoutFail3;
var timeoutFailCause4 = timeoutFailCause3;
var timeoutTo4 = timeoutTo3;
var toPubSub3 = toPubSub2;
var toPull3 = toPull2;
var toQueue3 = toQueue2;
var toQueueOfElements2 = toQueueOfElements;
var toReadableStream2 = toReadableStream;
var toReadableStreamEffect2 = toReadableStreamEffect;
var toReadableStreamRuntime2 = toReadableStreamRuntime;
var toAsyncIterableRuntime2 = toAsyncIterableRuntime;
var toAsyncIterableEffect2 = toAsyncIterableEffect;
var toAsyncIterable2 = toAsyncIterable;
var transduce2 = transduce;
var unfold4 = unfold3;
var unfoldChunk2 = unfoldChunk;
var unfoldChunkEffect2 = unfoldChunkEffect;
var unfoldEffect2 = unfoldEffect;
var void_9 = void_8;
var unwrap3 = unwrap2;
var unwrapScoped5 = unwrapScoped4;
var unwrapScopedWith4 = unwrapScopedWith3;
var updateService5 = updateService4;
var when4 = when3;
var whenCase2 = whenCase;
var whenCaseEffect2 = whenCaseEffect;
var whenEffect4 = whenEffect3;
var withSpan7 = withSpan6;
var zip10 = zip8;
var zipFlatten2 = zipFlatten;
var zipAll2 = zipAll;
var zipAllLeft2 = zipAllLeft;
var zipAllRight2 = zipAllRight;
var zipAllSortedByKey2 = zipAllSortedByKey;
var zipAllSortedByKeyLeft2 = zipAllSortedByKeyLeft;
var zipAllSortedByKeyRight2 = zipAllSortedByKeyRight;
var zipAllSortedByKeyWith2 = zipAllSortedByKeyWith;
var zipAllWith2 = zipAllWith;
var zipLatest2 = zipLatest;
var zipLatestAll2 = zipLatestAll;
var zipLatestWith2 = zipLatestWith;
var zipLeft9 = zipLeft7;
var zipRight12 = zipRight10;
var zipWith12 = zipWith11;
var zipWithChunks2 = zipWithChunks;
var zipWithNext2 = zipWithNext;
var zipWithPrevious2 = zipWithPrevious;
var zipWithPreviousAndNext2 = zipWithPreviousAndNext;
var zipWithIndex2 = zipWithIndex;
var Do6 = Do5;
var bind7 = bind6;
var bindEffect2 = bindEffect;
var bindTo7 = bindTo6;
var let_7 = let_6;
var decodeText2 = decodeText;
var encodeText2 = encodeText;
var fromEventListener2 = fromEventListener;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/Subscribable.js
var TypeId21 = /* @__PURE__ */ Symbol.for("effect/Subscribable");

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/SynchronizedRef.js
var SynchronizedRefTypeId = SynchronizedTypeId;

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/internal/subscriptionRef.js
var SubscriptionRefSymbolKey = "effect/SubscriptionRef";
var SubscriptionRefTypeId = /* @__PURE__ */ Symbol.for(SubscriptionRefSymbolKey);
var subscriptionRefVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
var SubscriptionRefImpl = class extends Class2 {
  ref;
  pubsub;
  semaphore;
  [TypeId13] = TypeId13;
  [TypeId21] = TypeId21;
  [RefTypeId2] = refVariance;
  [SynchronizedRefTypeId] = synchronizedVariance;
  [SubscriptionRefTypeId] = subscriptionRefVariance;
  constructor(ref, pubsub, semaphore) {
    super();
    this.ref = ref;
    this.pubsub = pubsub;
    this.semaphore = semaphore;
    this.get = get13(this.ref);
  }
  commit() {
    return this.get;
  }
  get;
  get changes() {
    return pipe(get13(this.ref), flatMap11((a) => map19(fromPubSub(this.pubsub, {
      scoped: true
    }), (s) => concat2(make51(a), s))), this.semaphore.withPermits(1), unwrapScoped4);
  }
  modify(f) {
    return this.modifyEffect((a) => succeed9(f(a)));
  }
  modifyEffect(f) {
    return pipe(get13(this.ref), flatMap11(f), flatMap11(([b, a]) => pipe(set7(this.ref, a), as5(b), zipLeft4(publish2(this.pubsub, a)))), this.semaphore.withPermits(1));
  }
};
var get18 = (self) => get13(self.ref);
var make58 = (value) => pipe(all4([unbounded4(), make29(value), makeSemaphore2(1)]), map19(([pubsub, ref, semaphore]) => new SubscriptionRefImpl(ref, pubsub, semaphore)));

// ../../node_modules/.pnpm/effect@3.16.9/node_modules/effect/dist/esm/SubscriptionRef.js
var get19 = get18;
var make59 = make58;
var update5 = update3;
var Plugin2 = GenericTag(
  "effect-obsidian/Plugin"
);
GenericTag(
  "effect-obsidian/Plugin/Editor"
);
GenericTag(
  "effect-obsidian/Plugin/MarkdownView"
);
var Class4 = (layer3) => class extends EffectClass {
  run() {
    return build2(layer3);
  }
};
var EffectClass = class extends Obsidian2__namespace.Plugin {
  scope;
  /**
   * @since 1.0.0
   */
  onload() {
    this.scope = runSync(make40());
    return runPromise(
      this.run().pipe(
        provideService2(Plugin2, this),
        provideService2(Scope, this.scope)
      )
    );
  }
  /**
   * @since 1.0.0
   */
  onunload() {
    if (this.scope) {
      runFork2(close(this.scope, void_3));
      this.scope = void 0;
    }
  }
};
var addCommand = (command) => gen3(function* () {
  const plugin = yield* Plugin2;
  const runtime5 = yield* runtime3();
  const run7 = yield* makeRuntime();
  const runSync3 = runSync2(runtime5);
  plugin.addCommand(
    command.check ? {
      ...command,
      checkCallback(checking) {
        const canRun = runSync3(command.check);
        if (canRun && !checking) {
          run7(command.run);
        }
        return canRun;
      }
    } : {
      ...command,
      callback() {
        run7(command.run);
      }
    }
  );
});
map19(
  Plugin2,
  (_) => _.app.workspace
);

// ../effect-obsidian/src/Identifier.ts
var make60 = () => {
  const t = [];
  for (let n = 0; n < 16; n++) {
    t.push((16 * Math.random() | 0).toString(16));
  }
  return t.join("");
};

// ../effect-obsidian/src/Canvas.ts
var Canvas = GenericTag("effect-obsidian/Canvas");
var get20 = map19(
  Plugin2,
  (_) => fromNullable(
    _.app.workspace.getActiveViewOfType(Obsidian2__namespace.ItemView)
  ).pipe(
    filter((_2) => _2.getViewType() === "canvas"),
    map2((_2) => _2.canvas)
  )
);
var prop = (key) => map19(Canvas, (_) => _[key]);
var addCommand2 = (command) => addCommand({
  ...command,
  check: flatMap11(Plugin2, (plugin) => {
    const view = plugin.app.workspace.getActiveViewOfType(Obsidian2__namespace.ItemView);
    const isCanvas = view?.getViewType() === "canvas";
    return isCanvas && command.check ? provideService2(command.check, Canvas, view.canvas) : succeed9(isCanvas);
  }),
  run: flatMap11(Plugin2, (plugin) => command.run.pipe(
    provideService2(
      Canvas,
      plugin.app.workspace.getActiveViewOfType(Obsidian2__namespace.ItemView).canvas
    )
  ))
});
var createEdge = (options) => andThen5(Canvas, (canvas) => {
  const data = canvas.getData();
  canvas.importData({
    edges: [
      ...data.edges,
      {
        id: make60(),
        fromNode: options.from.id,
        fromSide: options.fromSide ?? "right",
        toNode: options.to.id,
        toSide: options.toSide ?? "left"
      }
    ],
    nodes: data.nodes
  });
});
var selectedNode = gen3(function* () {
  const canvas = yield* Canvas;
  return pipe(fromIterable2(canvas.selection), head);
});
var onActive = (effect4) => gen3(function* () {
  const handle = yield* make52();
  const scoped7 = effect4.pipe(
    zipRight5(never3),
    scoped2
  );
  yield* get20.pipe(
    flatMap11(
      match2({
        onNone: () => clear(handle),
        onSome: (canvas) => scoped7.pipe(
          provideService2(Canvas, canvas),
          run4(handle, { onlyIfMissing: true })
        )
      })
    ),
    schedule(spaced2(2e3)),
    forkScoped2
  );
});
var nodeChanges = (canvas) => sync5(() => canvas.getData().nodes.length).pipe(
  repeatEffect2,
  schedule3(spaced2(50)),
  changes2,
  drop4(1)
);

// ../effect-obsidian/src/Canvas/Node.ts
var yOrder = struct({
  y: number3
});
var parent = (node) => gen3(function* () {
  const canvas = yield* Canvas;
  return pipe(
    canvas.getEdgesForNode(node),
    findFirst3((edge) => edge.to.node.id === node.id),
    map2((_) => _.from.node)
  );
});
var children2 = (node) => gen3(function* () {
  const canvas = yield* Canvas;
  return childrenFromEdges(node, canvas.getEdgesForNode(node));
});
var childrenFromEdges = (node, edges, leftToRight = false) => pipe(
  filter3(edges, (_) => _.from.node.id === node.id),
  leftToRight ? filter3((_) => _.from.side === "right" && _.to.side === "left") : identity,
  map4((_) => _.to.node),
  sort(yOrder)
);
var siblings = (node) => gen3(function* () {
  const canvas = yield* Canvas;
  const parentNode = yield* parent(node);
  return parentNode.pipe(
    map2(
      (parent2) => pipe(
        canvas.getEdgesForNode(parent2),
        filter3((_) => _.from.node.id === parent2.id),
        map4((_) => _.to.node),
        sort(yOrder)
      )
    ),
    getOrElse(() => [])
  );
});

// ../effect-obsidian/src/Patch.ts
var prototype = (name, self, method, patch9) => suspend4(() => {
  const symbol3 = Symbol.for(`effect-obsidian/Patch/${name}`);
  const proto12 = Object.getPrototypeOf(self);
  if (symbol3 in proto12 && proto12[symbol3] === true) {
    return _void;
  }
  const original = proto12[method];
  return acquireRelease2(
    sync5(() => {
      proto12[method] = patch9(original);
      proto12[symbol3] = true;
    }),
    () => sync5(() => {
      proto12[method] = original;
      proto12[symbol3] = false;
    })
  );
});

// ../effect-obsidian/src/Settings.ts
var layer = (schema, register) => {
  const tag2 = GenericTag(
    "effect-obsidian/Settings"
  );
  const layer3 = gen3(function* () {
    const plugin = yield* Plugin2;
    const data = yield* promise2(() => plugin.loadData()).pipe(
      flatMap11((_) => decodeUnknown2(schema)(_ || {})),
      orDie3
    );
    const ref = yield* make59(data);
    yield* ref.changes.pipe(
      drop4(1),
      debounce2(1e3),
      flatMap18(encode(schema)),
      runForEach2((data2) => promise2(() => plugin.saveData(data2))),
      forkScoped2
    );
    const update6 = (_) => runPromise(update5(ref, _));
    const Class5 = register(
      () => runSync(get19(ref)),
      update6
    );
    plugin.addSettingTab(new Class5(plugin.app, plugin));
    return tag2.of({
      ref,
      unsafeGet: () => runSync(get19(ref)),
      unsafeUpdate: (f) => runSync(update5(ref, f))
    });
  }).pipe(
    scoped3(tag2)
  );
  const runWhen2 = (f, effect4) => gen3(function* () {
    const settings = yield* tag2;
    const handle = yield* make52();
    yield* settings.ref.changes.pipe(
      mapEffect4(
        (_) => f(_) ? effect4.pipe(
          zipRight5(never3),
          scoped2,
          run4(handle, { onlyIfMissing: true })
        ) : clear(handle)
      ),
      runDrain3,
      forkScoped2
    );
  });
  const prop3 = (key) => gen3(function* () {
    const settings = yield* tag2;
    const get21 = () => settings.unsafeGet()[key];
    const update6 = (f) => settings.unsafeUpdate((_) => ({
      ..._,
      [key]: f(_[key])
    }));
    return [get21, update6];
  });
  return { tag: tag2, layer: layer3, runWhen: runWhen2, prop: prop3 };
};
var {
  layer: layer2,
  prop: prop2,
  runWhen,
  tag
} = layer(
  Struct({
    autoLayoutDefault: optionalWith(Boolean$, {
      default: () => false
    }),
    autoLayoutEnabledFor: optionalWith(
      Record({ key: String$, value: Boolean$ }),
      { default: () => Record_exports.empty() }
    )
  }),
  (get21, update6) => class SettingsTab extends Obsidian2.PluginSettingTab {
    display() {
      this.containerEl.empty();
      const current2 = get21();
      new Obsidian2.Setting(this.containerEl).setName("Auto layout by default").setDesc("Enable auto layout for Canvas by default").addToggle(
        (toggle2) => toggle2.setValue(current2.autoLayoutDefault).onChange(
          (value) => update6((_) => ({
            ..._,
            autoLayoutDefault: value
          }))
        )
      );
    }
  }
);
var autoLayout = Effect_exports.gen(function* () {
  const settings = yield* tag;
  const [, update6] = yield* prop2("autoLayoutEnabledFor");
  return [
    (path) => {
      const current2 = settings.unsafeGet();
      return Option_exports.getOrElse(
        Record_exports.get(current2.autoLayoutEnabledFor, path),
        () => current2.autoLayoutDefault
      );
    },
    (path, value) => {
      return update6(Record_exports.set(path, value));
    },
    update6
  ];
});

// src/AutoLayout.ts
var NodeBlock = class {
  constructor(node, children3, targetWidth, gap = 20) {
    this.node = node;
    this.children = children3;
    this.targetWidth = targetWidth;
    this.gap = gap;
    this.height = Math.max(
      node.height,
      Array_exports.reduce(
        children3,
        0,
        (acc, child) => acc === 0 ? child.height : acc + child.height + gap
      )
    );
  }
  height;
};
var run6 = Effect_exports.gen(function* () {
  const canvas = yield* Canvas;
  const roots2 = [];
  canvas.nodes.forEach((node) => {
    const isRoot = node.getData().type !== "group" && !canvas.getEdgesForNode(node).some((_) => _.to.node.id === node.id);
    if (isRoot) {
      roots2.push(node);
    }
  });
  roots2.sort(yOrder);
  function createBlock(node, targetWidth) {
    const children3 = Array_exports.filter(
      childrenFromEdges(
        node,
        canvas.getEdgesForNode(node),
        true
      ),
      (_) => _.getData().type !== "group"
    );
    const childTargetWidth = Math.max(...children3.map((_) => _.width));
    const childBlocks = children3.map((_) => createBlock(_, childTargetWidth));
    return new NodeBlock(node, childBlocks, targetWidth);
  }
  const rootTargetWidth = Math.max(...roots2.map((_) => _.width));
  const rootBlocks = roots2.map((_) => createBlock(_, rootTargetWidth));
  function layoutBlocks(blocks, x, y, gap = 100) {
    if (Array_exports.isEmptyReadonlyArray(blocks)) {
      return;
    }
    const currentX = x ?? blocks[0].node.x;
    let currentY = y ?? blocks[0].node.y;
    blocks.forEach((block) => {
      block.node.moveTo({ x: currentX, y: currentY });
      layoutBlocks(
        block.children,
        currentX + block.targetWidth + 200,
        currentY,
        20
      );
      currentY += block.height + gap;
    });
  }
  layoutBlocks(rootBlocks);
  canvas.requestSave();
});
var PatchMenu = Effect_exports.gen(function* () {
  const scope5 = yield* Effect_exports.scope;
  const [get21, set10] = yield* autoLayout;
  yield* onActive(Canvas.pipe(
    Effect_exports.flatMap(
      (canvas) => prototype(
        "AutoLayout",
        canvas,
        "showQuickSettingsMenu",
        (original) => function(menu) {
          original.call(this, menu);
          const path = this.view.file.path;
          const enabled2 = get21(path);
          menu.addItem(
            (item) => item.setTitle("Auto layout").setChecked(enabled2).onClick(() => {
              set10(path, !enabled2);
            })
          );
        }
      )
    ),
    Scope_exports.extend(scope5)
  ));
}).pipe(Layer_exports.scopedDiscard);
var AutoLayoutOnChange = onActive(Effect_exports.gen(function* () {
  const canvas = yield* Canvas;
  const [get21] = yield* autoLayout;
  const path = canvas.view.file.path;
  yield* runWhen(
    () => get21(path),
    nodeChanges(canvas).pipe(
      Stream_exports.filter(() => get21(path)),
      Stream_exports.runForEach(() => run6)
    )
  );
})).pipe(Layer_exports.scopedDiscard);
var Command = addCommand2({
  id: "auto-layout",
  name: "Auto Layout",
  run: run6
}).pipe(Layer_exports.scopedDiscard);
var UpdateSettings = Effect_exports.gen(function* () {
  const plugin = yield* Plugin2;
  const [, , update6] = yield* autoLayout;
  plugin.registerEvent(
    plugin.app.vault.on("rename", (file, prev) => {
      update6(
        (self) => Option_exports.match(Record_exports.pop(self, prev), {
          onSome: ([value]) => Record_exports.set(self, file.path, value),
          onNone: () => self
        })
      );
    })
  );
  plugin.registerEvent(
    plugin.app.vault.on("delete", (file) => {
      update6(Record_exports.remove(file.path));
    })
  );
}).pipe(Layer_exports.effectDiscard);
var AutoLayoutLive = Layer_exports.mergeAll(
  Command,
  PatchMenu,
  AutoLayoutOnChange,
  UpdateSettings
).pipe(
  Layer_exports.provide(layer2)
);

// src/NewNode.ts
var writable = Effect_exports.negate(prop("readonly"));
var NewNodeLive = Effect_exports.all([
  addCommand2({
    id: "new-node",
    name: "New Node",
    hotkeys: [{ modifiers: ["Alt"], key: "Enter" }],
    check: writable,
    run: Effect_exports.gen(function* () {
      const canvas = yield* Canvas;
      const node = yield* Effect_exports.flatten(selectedNode);
      const parentNode = yield* parent(node);
      const siblings2 = yield* siblings(node);
      const lastNode = siblings2[siblings2.length - 1] ?? node;
      const newNode = canvas.createTextNode({
        pos: {
          x: lastNode.x,
          y: lastNode.y + lastNode.height + 20
        }
      });
      newNode.setColor(node.color);
      if (Option_exports.isSome(parentNode)) {
        yield* createEdge({
          from: parentNode.value,
          to: newNode
        });
      }
      canvas.requestSave();
      canvas.panIntoView(newNode.getBBox());
    }).pipe(Effect_exports.catchAllCause(Effect_exports.log))
  }),
  addCommand2({
    id: "new-child-node",
    name: "New Child Node",
    hotkeys: [{ modifiers: ["Alt"], key: "Tab" }],
    check: writable,
    run: Effect_exports.gen(function* () {
      const canvas = yield* Canvas;
      const node = yield* Effect_exports.flatten(selectedNode);
      const lastChild = yield* children2(node).pipe(Effect_exports.map(Array_exports.last));
      const newNode = Option_exports.match(lastChild, {
        onNone: () => canvas.createTextNode({
          pos: {
            x: node.x + node.width + 200,
            y: node.y
          }
        }),
        onSome: (lastChild2) => canvas.createTextNode({
          pos: {
            x: lastChild2.x,
            y: lastChild2.y + lastChild2.height + 20
          }
        })
      });
      yield* createEdge({
        from: node,
        to: newNode
      });
      canvas.requestSave();
      canvas.panIntoView(newNode.getBBox());
    }).pipe(Effect_exports.catchAllCause(Effect_exports.log))
  })
]).pipe(
  Layer_exports.scopedDiscard
);

// src/NodeNavigation.ts
var NodeNavigationLive = Effect_exports.all([
  addCommand2({
    id: "focus-down",
    name: "Focus down",
    run: Effect_exports.gen(function* () {
      const canvas = yield* Canvas;
      const node = yield* Effect_exports.flatten(selectedNode);
      const nextNode = yield* siblings(node).pipe(
        Effect_exports.flatMap(Array_exports.findFirst((_) => _.y > node.y))
      );
      canvas.selectOnly(nextNode);
      canvas.panIntoView(nextNode.getBBox());
    })
  }),
  addCommand2({
    id: "focus-up",
    name: "Focus up",
    run: Effect_exports.gen(function* () {
      const canvas = yield* Canvas;
      const node = yield* Effect_exports.flatten(selectedNode);
      const nextNode = yield* siblings(node).pipe(
        Effect_exports.flatMap(Array_exports.findLast((_) => _.y < node.y))
      );
      canvas.selectOnly(nextNode);
      canvas.panIntoView(nextNode.getBBox());
    })
  }),
  addCommand2({
    id: "focus-left",
    name: "Focus left",
    run: Effect_exports.gen(function* () {
      const canvas = yield* Canvas;
      const node = yield* Effect_exports.flatten(selectedNode);
      const parent2 = yield* Effect_exports.flatten(parent(node));
      canvas.selectOnly(parent2);
      canvas.panIntoView(parent2.getBBox());
    })
  }),
  addCommand2({
    id: "focus-right",
    name: "Focus right",
    run: Effect_exports.gen(function* () {
      const canvas = yield* Canvas;
      const node = yield* Effect_exports.flatten(selectedNode);
      const child = yield* children2(node).pipe(
        Effect_exports.flatMap(Array_exports.head)
      );
      canvas.selectOnly(child);
      canvas.panIntoView(child.getBBox());
    })
  })
]).pipe(Layer_exports.scopedDiscard);

// src/main.ts
var MainLive = Layer_exports.mergeAll(AutoLayoutLive, NewNodeLive, NodeNavigationLive).pipe(Layer_exports.provide(Logger_exports.minimumLogLevel(LogLevel_exports.Debug)));
var CanvasMindmap = class extends Class4(MainLive) {
};

module.exports = CanvasMindmap;
