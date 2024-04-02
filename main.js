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
var __export = (target, all5) => {
  for (var name in all5)
    __defProp(target, name, { get: all5[name], enumerable: true });
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Function.js
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
        const args = arguments;
        return function(self) {
          return body(self, ...args);
        };
      };
  }
};
var identity = (a) => a;
var constant = (value3) => () => value3;
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/version.js
var moduleVersion = "2.4.15";
var getCurrentVersion = () => moduleVersion;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/GlobalValue.js
var globalStoreId = /* @__PURE__ */ Symbol.for(`effect/GlobalValue/globalStoreId/${/* @__PURE__ */ getCurrentVersion()}`);
if (!(globalStoreId in globalThis)) {
  globalThis[globalStoreId] = /* @__PURE__ */ new Map();
}
var globalStore = globalThis[globalStoreId];
var globalValue = (id2, compute) => {
  if (!globalStore.has(id2)) {
    globalStore.set(id2, compute());
  }
  return globalStore.get(id2);
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Predicate.js
var isSet = (input) => input instanceof Set;
var isMap = (input) => input instanceof Map;
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
var isUint8Array = (input) => input instanceof Uint8Array;
var isDate = (input) => input instanceof Date;
var isIterable = (input) => hasProperty(input, Symbol.iterator);
var isRecord = (input) => isRecordOrArray(input) && !Array.isArray(input);
var isPromiseLike = (input) => hasProperty(input, "then") && isFunction2(input.then);

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Utils.js
var GenKindTypeId = /* @__PURE__ */ Symbol.for("effect/Gen/GenKind");
var GenKindImpl = class {
  value;
  constructor(value3) {
    this.value = value3;
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
var adapter = () => (
  // @ts-expect-error
  function() {
    let x = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      x = arguments[i](x);
    }
    return new GenKindImpl(x);
  }
);
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
    if (!max6) {
      return this._next();
    }
    max6 = max6 >>> 0;
    if ((max6 & max6 - 1) === 0) {
      return this._next() & max6 - 1;
    }
    let num = 0;
    const skew = (-max6 >>> 0) % max6 >>> 0;
    for (num = this._next(); num < skew; num = this._next()) {
    }
    return num % max6;
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Hash.js
var randomHashCache = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Hash/randomHashCache"), () => /* @__PURE__ */ new WeakMap());
var pcgr = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Hash/pcgr"), () => new PCGRandom());
var symbol = /* @__PURE__ */ Symbol.for("effect/Hash");
var hash = (self) => {
  switch (typeof self) {
    case "number":
      return number(self);
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
      }
      if (isHash(self)) {
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
    randomHashCache.set(self, number(pcgr.integer(Number.MAX_SAFE_INTEGER)));
  }
  return randomHashCache.get(self);
};
var combine = (b) => (self) => self * 53 ^ b;
var optimize = (n) => n & 3221225471 | n >>> 1 & 1073741824;
var isHash = (u) => hasProperty(u, symbol);
var number = (n) => {
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
  return optimize(n);
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
var array = (arr) => {
  let h = 6151;
  for (let i = 0; i < arr.length; i++) {
    h = pipe(h, combine(hash(arr[i])));
  }
  return optimize(h);
};
var cached = function() {
  if (arguments.length === 1) {
    const self2 = arguments[0];
    return function(hash5) {
      Object.defineProperty(self2, symbol, {
        value() {
          return hash5;
        },
        enumerable: false
      });
      return hash5;
    };
  }
  const self = arguments[0];
  const hash4 = arguments[1];
  Object.defineProperty(self, symbol, {
    value() {
      return hash4;
    },
    enumerable: false
  });
  return hash4;
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Equal.js
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
  if ((selfType === "object" || selfType === "function") && self !== null && that !== null) {
    if (isEqual(self) && isEqual(that)) {
      return hash(self) === hash(that) && self[symbol2](that);
    }
  }
  return false;
}
var isEqual = (u) => hasProperty(u, symbol2);
var equivalence = () => equals;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Equivalence.js
var make = (isEquivalent) => (self, that) => self === that || isEquivalent(self, that);
var isStrictEquivalent = (x, y) => x === y;
var strict = () => isStrictEquivalent;
var number2 = /* @__PURE__ */ strict();
var mapInput = /* @__PURE__ */ dual(2, (self, f) => make((x, y) => self(f(x), f(y))));
var Date2 = /* @__PURE__ */ mapInput(number2, (date) => date.getTime());
var array2 = (item) => make((self, that) => {
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Inspectable.js
var NodeInspectSymbol = /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom");
var toJSON = (x) => {
  if (hasProperty(x, "toJSON") && isFunction2(x["toJSON"]) && x["toJSON"].length === 0) {
    return x.toJSON();
  } else if (Array.isArray(x)) {
    return x.map(toJSON);
  }
  return x;
};
var format = (x) => JSON.stringify(x, null, 2);

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Option.js
var Option_exports = {};
__export(Option_exports, {
  Do: () => Do,
  TypeId: () => TypeId3,
  all: () => all,
  andThen: () => andThen,
  ap: () => ap,
  as: () => as,
  asUnit: () => asUnit,
  bind: () => bind,
  bindTo: () => bindTo,
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
  getOrThrow: () => getOrThrow,
  getOrThrowWith: () => getOrThrowWith,
  getOrUndefined: () => getOrUndefined,
  getOrder: () => getOrder,
  getRight: () => getRight2,
  isNone: () => isNone2,
  isOption: () => isOption2,
  isSome: () => isSome2,
  let: () => let_,
  lift2: () => lift2,
  liftNullable: () => liftNullable,
  liftPredicate: () => liftPredicate,
  liftThrowable: () => liftThrowable,
  map: () => map,
  match: () => match,
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
  unit: () => unit,
  zipLeft: () => zipLeft,
  zipRight: () => zipRight,
  zipWith: () => zipWith
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Pipeable.js
var pipeArguments = (self, args) => {
  switch (args.length) {
    case 1:
      return args[0](self);
    case 2:
      return args[1](args[0](self));
    case 3:
      return args[2](args[1](args[0](self)));
    case 4:
      return args[3](args[2](args[1](args[0](self))));
    case 5:
      return args[4](args[3](args[2](args[1](args[0](self)))));
    case 6:
      return args[5](args[4](args[3](args[2](args[1](args[0](self))))));
    case 7:
      return args[6](args[5](args[4](args[3](args[2](args[1](args[0](self)))))));
    case 8:
      return args[7](args[6](args[5](args[4](args[3](args[2](args[1](args[0](self))))))));
    case 9:
      return args[8](args[7](args[6](args[5](args[4](args[3](args[2](args[1](args[0](self)))))))));
    default: {
      let ret = self;
      for (let i = 0, len = args.length; i < len; i++) {
        ret = args[i](ret);
      }
      return ret;
    }
  }
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/opCodes/effect.js
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
var OP_WITH_RUNTIME = "WithRuntime";
var OP_YIELD = "Yield";
var OP_REVERT_FLAGS = "RevertFlags";

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/effectable.js
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/option.js
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
    return isOption(that) && isSome(that) && equals(that.value, this.value);
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
var some = (value3) => {
  const a = Object.create(SomeProto);
  a.value = value3;
  return a;
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/either.js
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
    return isEither(that) && isRight(that) && equals(that.right, this.right);
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
    return isEither(that) && isLeft(that) && equals(that.left, this.left);
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
var fromOption = /* @__PURE__ */ dual(2, (self, onNone) => isNone(self) ? left(onNone()) : right(self.value));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Order.js
var make2 = (compare) => (self, that) => self === that ? 0 : compare(self, that);
var number3 = /* @__PURE__ */ make2((self, that) => self < that ? -1 : 1);
var bigint = /* @__PURE__ */ make2((self, that) => self < that ? -1 : 1);
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
var clamp = (O) => dual(2, (self, options) => min(O)(options.maximum, max(O)(options.minimum, self)));
var between = (O) => dual(2, (self, options) => !lessThan(O)(self, options.minimum) && !greaterThan(O)(self, options.maximum));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Option.js
var TypeId3 = /* @__PURE__ */ Symbol.for("effect/Option");
var none2 = () => none;
var some2 = some;
var isOption2 = isOption;
var isNone2 = isNone;
var isSome2 = isSome;
var match = /* @__PURE__ */ dual(2, (self, {
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
var orElseEither = /* @__PURE__ */ dual(2, (self, that) => isNone2(self) ? map(that(), right) : map(self, left));
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
  } catch (e) {
    return none2();
  }
};
var getOrThrowWith = /* @__PURE__ */ dual(2, (self, onNone) => {
  if (isSome2(self)) {
    return self.value;
  }
  throw onNone();
});
var getOrThrow = /* @__PURE__ */ getOrThrowWith(() => new Error("getOrThrow called on a None"));
var map = /* @__PURE__ */ dual(2, (self, f) => isNone2(self) ? none2() : some2(f(self.value)));
var as = /* @__PURE__ */ dual(2, (self, b) => map(self, () => b));
var asUnit = /* @__PURE__ */ as(void 0);
var unit = /* @__PURE__ */ some2(void 0);
var flatMap = /* @__PURE__ */ dual(2, (self, f) => isNone2(self) ? none2() : f(self.value));
var andThen = /* @__PURE__ */ dual(2, (self, f) => flatMap(self, (a) => {
  const b = isFunction(f) ? f(a) : f;
  return isOption2(b) ? b : some2(b);
}));
var flatMapNullable = /* @__PURE__ */ dual(2, (self, f) => isNone2(self) ? none2() : fromNullable(f(self.value)));
var flatten = /* @__PURE__ */ flatMap(identity);
var zipRight = /* @__PURE__ */ dual(2, (self, that) => flatMap(self, () => that));
var composeK = /* @__PURE__ */ dual(2, (afb, bfc) => (a) => flatMap(afb(a), bfc));
var zipLeft = /* @__PURE__ */ dual(2, (self, that) => tap(self, () => that));
var tap = /* @__PURE__ */ dual(2, (self, f) => flatMap(self, (a) => map(f(a), () => a)));
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
var zipWith = /* @__PURE__ */ dual(3, (self, that, f) => map(product(self, that), ([a, b]) => f(a, b)));
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
var filterMap = /* @__PURE__ */ dual(2, (self, f) => isNone2(self) ? none2() : f(self.value));
var filter = /* @__PURE__ */ dual(2, (self, predicate) => filterMap(self, (b) => predicate(b) ? some(b) : none));
var getEquivalence = (isEquivalent) => make((x, y) => x === y || (isNone2(x) ? isNone2(y) : isNone2(y) ? false : isEquivalent(x.value, y.value)));
var getOrder = (O) => make2((self, that) => isSome2(self) ? isSome2(that) ? O(self.value, that.value) : 1 : -1);
var lift2 = (f) => dual(2, (self, that) => zipWith(self, that, f));
var liftPredicate = (predicate) => (b) => predicate(b) ? some2(b) : none2();
var containsWith = (isEquivalent) => dual(2, (self, a) => isNone2(self) ? false : isEquivalent(self.value, a));
var _equivalence = /* @__PURE__ */ equivalence();
var contains = /* @__PURE__ */ containsWith(_equivalence);
var exists = /* @__PURE__ */ dual(2, (self, refinement) => isNone2(self) ? false : refinement(self.value));
var bindTo = /* @__PURE__ */ dual(2, (self, name) => map(self, (a) => ({
  [name]: a
})));
var let_ = /* @__PURE__ */ dual(3, (self, name, f) => map(self, (a) => Object.assign({}, a, {
  [name]: f(a)
})));
var bind = /* @__PURE__ */ dual(3, (self, name, f) => flatMap(self, (a) => map(f(a), (b) => Object.assign({}, a, {
  [name]: b
}))));
var Do = /* @__PURE__ */ some2({});
var adapter2 = /* @__PURE__ */ adapter();
var gen = (f) => {
  const iterator = f(adapter2);
  let state = iterator.next();
  if (state.done) {
    return some2(state.value);
  } else {
    let current2 = state.value.value;
    if (isNone2(current2)) {
      return current2;
    }
    while (!state.done) {
      state = iterator.next(current2.value);
      if (!state.done) {
        current2 = state.value.value;
        if (isNone2(current2)) {
          return current2;
        }
      }
    }
    return some2(state.value);
  }
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/BigDecimal.js
var TypeId4 = /* @__PURE__ */ Symbol.for("effect/BigDecimal");
var BigDecimalProto = {
  [TypeId4]: TypeId4,
  [symbol]() {
    const normalized = normalize(this);
    return pipe(hash(normalized.value), combine(number(normalized.scale)), cached(this));
  },
  [symbol2](that) {
    return isBigDecimal(that) && equals2(this, that);
  },
  toString() {
    return `BigDecimal(${format2(this)})`;
  },
  toJSON() {
    return {
      _id: "BigDecimal",
      value: String(this.value),
      scale: this.scale
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var isBigDecimal = (u) => hasProperty(u, TypeId4);
var make3 = (value3, scale2) => {
  const o = Object.create(BigDecimalProto);
  o.value = value3;
  o.scale = scale2;
  return o;
};
var unsafeMakeNormalized = (value3, scale2) => {
  if (value3 !== bigint0 && value3 % bigint10 === bigint0) {
    throw new RangeError("Value must be normalized");
  }
  const o = make3(value3, scale2);
  o.normalized = o;
  return o;
};
var bigint0 = /* @__PURE__ */ BigInt(0);
var bigint10 = /* @__PURE__ */ BigInt(10);
var zero = /* @__PURE__ */ unsafeMakeNormalized(bigint0, 0);
var normalize = (self) => {
  if (self.normalized === void 0) {
    if (self.value === bigint0) {
      self.normalized = zero;
    } else {
      const digits = `${self.value}`;
      let trail = 0;
      for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === "0") {
          trail++;
        } else {
          break;
        }
      }
      if (trail === 0) {
        self.normalized = self;
      }
      const value3 = BigInt(digits.substring(0, digits.length - trail));
      const scale2 = self.scale - trail;
      self.normalized = unsafeMakeNormalized(value3, scale2);
    }
  }
  return self.normalized;
};
var scale = (self, scale2) => {
  if (scale2 > self.scale) {
    return make3(self.value * bigint10 ** BigInt(scale2 - self.scale), scale2);
  }
  if (scale2 < self.scale) {
    return make3(self.value / bigint10 ** BigInt(self.scale - scale2), scale2);
  }
  return self;
};
var Order = /* @__PURE__ */ make2((self, that) => {
  const scmp = number3(sign(self), sign(that));
  if (scmp !== 0) {
    return scmp;
  }
  if (self.scale > that.scale) {
    return bigint(self.value, scale(that, self.scale).value);
  }
  if (self.scale < that.scale) {
    return bigint(scale(self, that.scale).value, that.value);
  }
  return bigint(self.value, that.value);
});
var lessThan2 = /* @__PURE__ */ lessThan(Order);
var lessThanOrEqualTo2 = /* @__PURE__ */ lessThanOrEqualTo(Order);
var greaterThan2 = /* @__PURE__ */ greaterThan(Order);
var greaterThanOrEqualTo2 = /* @__PURE__ */ greaterThanOrEqualTo(Order);
var between2 = /* @__PURE__ */ between(Order);
var clamp2 = /* @__PURE__ */ clamp(Order);
var sign = (n) => n.value === bigint0 ? 0 : n.value < bigint0 ? -1 : 1;
var negate = (n) => make3(-n.value, n.scale);
var Equivalence = /* @__PURE__ */ make((self, that) => {
  if (self.scale > that.scale) {
    return scale(that, self.scale).value === self.value;
  }
  if (self.scale < that.scale) {
    return scale(self, that.scale).value === that.value;
  }
  return self.value === that.value;
});
var equals2 = /* @__PURE__ */ dual(2, (self, that) => Equivalence(self, that));
var fromNumber = (n) => {
  const [lead, trail = ""] = `${n}`.split(".");
  return make3(BigInt(`${lead}${trail}`), trail.length);
};
var fromString = (s) => {
  let digits;
  let scale2;
  const dot = s.search(/\./);
  if (dot !== -1) {
    const lead = s.slice(0, dot);
    const trail = s.slice(dot + 1);
    digits = `${lead}${trail}`;
    scale2 = trail.length;
  } else {
    digits = s;
    scale2 = 0;
  }
  if (digits === "") {
    return some2(zero);
  }
  if (!/^(?:\+|-)?\d+$/.test(digits)) {
    return none2();
  }
  return some2(make3(BigInt(digits), scale2));
};
var format2 = (n) => {
  const negative2 = n.value < bigint0;
  const absolute = negative2 ? `${n.value}`.substring(1) : `${n.value}`;
  let before2;
  let after3;
  if (n.scale >= absolute.length) {
    before2 = "0";
    after3 = "0".repeat(n.scale - absolute.length) + absolute;
  } else {
    const location = absolute.length - n.scale;
    if (location > absolute.length) {
      const zeros = location - absolute.length;
      before2 = `${absolute}${"0".repeat(zeros)}`;
      after3 = "";
    } else {
      after3 = absolute.slice(location);
      before2 = absolute.slice(0, location);
    }
  }
  const complete3 = after3 === "" ? before2 : `${before2}.${after3}`;
  return negative2 ? `-${complete3}` : complete3;
};
var unsafeToNumber = (n) => Number(format2(n));
var isNegative = (n) => n.value < bigint0;
var isPositive = (n) => n.value > bigint0;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/BigInt.js
var Order2 = bigint;
var clamp3 = /* @__PURE__ */ clamp(Order2);
var toNumber = (b) => {
  if (b > BigInt(Number.MAX_SAFE_INTEGER) || b < BigInt(Number.MIN_SAFE_INTEGER)) {
    return none2();
  }
  return some2(Number(b));
};
var fromString2 = (s) => {
  try {
    return s.trim() === "" ? none2() : some2(BigInt(s));
  } catch (_) {
    return none2();
  }
};
var fromNumber2 = (n) => {
  if (n > Number.MAX_SAFE_INTEGER || n < Number.MIN_SAFE_INTEGER) {
    return none2();
  }
  try {
    return some2(BigInt(n));
  } catch (_) {
    return none2();
  }
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Boolean.js
var not = (self) => !self;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Either.js
var right2 = right;
var left2 = left;
var fromOption2 = fromOption;
var try_ = (evaluate2) => {
  if (isFunction2(evaluate2)) {
    try {
      return right2(evaluate2());
    } catch (e) {
      return left2(e);
    }
  } else {
    try {
      return right2(evaluate2.try());
    } catch (e) {
      return left2(evaluate2.catch(e));
    }
  }
};
var isEither2 = isEither;
var isLeft2 = isLeft;
var isRight2 = isRight;
var getEquivalence2 = (EquivalenceL, EquivalenceR) => make((x, y) => x === y || (isLeft2(x) ? isLeft2(y) && EquivalenceL(x.left, y.left) : isRight2(y) && EquivalenceR(x.right, y.right)));
var mapLeft = /* @__PURE__ */ dual(2, (self, f) => isLeft2(self) ? left2(f(self.left)) : right2(self.right));
var match2 = /* @__PURE__ */ dual(2, (self, {
  onLeft,
  onRight
}) => isLeft2(self) ? onLeft(self.left) : onRight(self.right));
var merge = /* @__PURE__ */ match2({
  onLeft: identity,
  onRight: identity
});
var getOrThrowWith2 = /* @__PURE__ */ dual(2, (self, onLeft) => {
  if (isRight2(self)) {
    return self.right;
  }
  throw onLeft(self.left);
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/ReadonlyArray.js
var ReadonlyArray_exports = {};
__export(ReadonlyArray_exports, {
  append: () => append,
  appendAll: () => appendAll,
  cartesian: () => cartesian,
  cartesianWith: () => cartesianWith,
  chop: () => chop,
  chunksOf: () => chunksOf,
  contains: () => contains2,
  containsWith: () => containsWith2,
  copy: () => copy,
  dedupe: () => dedupe,
  dedupeAdjacent: () => dedupeAdjacent,
  dedupeAdjacentWith: () => dedupeAdjacentWith,
  dedupeWith: () => dedupeWith,
  difference: () => difference2,
  differenceWith: () => differenceWith,
  drop: () => drop,
  dropRight: () => dropRight,
  dropWhile: () => dropWhile,
  empty: () => empty3,
  every: () => every2,
  extend: () => extend,
  filter: () => filter3,
  filterMap: () => filterMap3,
  filterMapWhile: () => filterMapWhile,
  findFirst: () => findFirst,
  findFirstIndex: () => findFirstIndex,
  findLast: () => findLast,
  findLastIndex: () => findLastIndex,
  flatMap: () => flatMap2,
  flatMapNullable: () => flatMapNullable2,
  flatten: () => flatten2,
  forEach: () => forEach,
  fromIterable: () => fromIterable2,
  fromNullable: () => fromNullable2,
  fromOption: () => fromOption3,
  fromRecord: () => fromRecord,
  get: () => get2,
  getEquivalence: () => getEquivalence4,
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
  isEmptyArray: () => isEmptyArray,
  isEmptyReadonlyArray: () => isEmptyReadonlyArray,
  isNonEmptyArray: () => isNonEmptyArray2,
  isNonEmptyReadonlyArray: () => isNonEmptyReadonlyArray,
  join: () => join,
  last: () => last,
  lastNonEmpty: () => lastNonEmpty,
  length: () => length,
  liftEither: () => liftEither,
  liftNullable: () => liftNullable2,
  liftOption: () => liftOption,
  liftPredicate: () => liftPredicate2,
  make: () => make5,
  makeBy: () => makeBy,
  map: () => map3,
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
  partition: () => partition2,
  partitionMap: () => partitionMap3,
  prepend: () => prepend,
  prependAll: () => prependAll,
  range: () => range,
  reduce: () => reduce2,
  reduceRight: () => reduceRight,
  remove: () => remove2,
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
  zip: () => zip,
  zipWith: () => zipWith2
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/readonlyArray.js
var isNonEmptyArray = (self) => self.length > 0;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/ReadonlyRecord.js
var ReadonlyRecord_exports = {};
__export(ReadonlyRecord_exports, {
  collect: () => collect,
  difference: () => difference,
  empty: () => empty2,
  every: () => every,
  filter: () => filter2,
  filterMap: () => filterMap2,
  fromEntries: () => fromEntries,
  fromIterableBy: () => fromIterableBy,
  fromIterableWith: () => fromIterableWith,
  get: () => get,
  getEquivalence: () => getEquivalence3,
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
  map: () => map2,
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
var empty2 = () => ({});
var isEmptyRecord = (self) => keys(self).length === 0;
var isEmptyReadonlyRecord = isEmptyRecord;
var fromIterableWith = /* @__PURE__ */ dual(2, (self, f) => {
  const out = empty2();
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
var toEntries = /* @__PURE__ */ collect((key, value3) => [key, value3]);
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
var map2 = /* @__PURE__ */ dual(2, (self, f) => {
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
  const out = empty2();
  for (const key of keys(self)) {
    const o = f(self[key], key);
    if (isSome2(o)) {
      out[key] = o.value;
    }
  }
  return out;
});
var filter2 = /* @__PURE__ */ dual(2, (self, predicate) => {
  const out = empty2();
  for (const key of keys(self)) {
    if (predicate(self[key], key)) {
      out[key] = self[key];
    }
  }
  return out;
});
var getSomes = /* @__PURE__ */ filterMap2(identity);
var getLefts = (self) => {
  const out = empty2();
  for (const key of keys(self)) {
    const value3 = self[key];
    if (isLeft2(value3)) {
      out[key] = value3.left;
    }
  }
  return out;
};
var getRights = (self) => {
  const out = empty2();
  for (const key of keys(self)) {
    const value3 = self[key];
    if (isRight2(value3)) {
      out[key] = value3.right;
    }
  }
  return out;
};
var partitionMap2 = /* @__PURE__ */ dual(2, (self, f) => {
  const left3 = empty2();
  const right3 = empty2();
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
  const left3 = empty2();
  const right3 = empty2();
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
var set = /* @__PURE__ */ dual(3, (self, key, value3) => {
  return {
    ...self,
    [key]: value3
  };
});
var replace = /* @__PURE__ */ dual(3, (self, key, value3) => {
  if (has(self, key)) {
    return {
      ...self,
      [key]: value3
    };
  }
  return {
    ...self
  };
});
var isSubrecordBy = (equivalence3) => dual(2, (self, that) => {
  for (const key of keys(self)) {
    if (!has(that, key) || !equivalence3(self[key], that[key])) {
      return false;
    }
  }
  return true;
});
var isSubrecord = /* @__PURE__ */ isSubrecordBy(/* @__PURE__ */ equivalence());
var reduce = /* @__PURE__ */ dual(3, (self, zero3, f) => {
  let out = zero3;
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
  const out = empty2();
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
  const out = empty2();
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
var getEquivalence3 = (equivalence3) => {
  const is2 = isSubrecordBy(equivalence3);
  return (self, that) => is2(self, that) && is2(that, self);
};
var singleton = (key, value3) => ({
  [key]: value3
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Tuple.js
var make4 = (...elements) => elements;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/ReadonlyArray.js
var make5 = (...elements) => elements;
var makeBy = (n, f) => {
  const max6 = Math.max(1, Math.floor(n));
  const out = [f(0)];
  for (let i = 1; i < max6; i++) {
    out.push(f(i));
  }
  return out;
};
var range = (start3, end6) => start3 <= end6 ? makeBy(end6 - start3 + 1, (i) => start3 + i) : [start3];
var replicate = /* @__PURE__ */ dual(2, (a, n) => makeBy(n, () => a));
var fromIterable2 = (collection) => Array.isArray(collection) ? collection : Array.from(collection);
var fromRecord = toEntries;
var fromOption3 = toArray;
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
var prepend = /* @__PURE__ */ dual(2, (self, head7) => [head7, ...self]);
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
var isEmptyArray = (self) => self.length === 0;
var isEmptyReadonlyArray = isEmptyArray;
var isNonEmptyArray2 = isNonEmptyArray;
var isNonEmptyReadonlyArray = isNonEmptyArray;
var length = (self) => self.length;
var isOutOfBound = (i, as9) => i < 0 || i >= as9.length;
var clamp4 = (i, as9) => Math.floor(Math.min(Math.max(0, i), as9.length));
var get2 = /* @__PURE__ */ dual(2, (self, index) => {
  const i = Math.floor(index);
  return isOutOfBound(i, self) ? none2() : some2(self[i]);
});
var unsafeGet = /* @__PURE__ */ dual(2, (self, index) => {
  const i = Math.floor(index);
  if (isOutOfBound(i, self)) {
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
  return input.slice(0, clamp4(n, input));
});
var takeRight = /* @__PURE__ */ dual(2, (self, n) => {
  const input = fromIterable2(self);
  const i = clamp4(n, input);
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
  return input.slice(clamp4(n, input), input.length);
});
var dropRight = /* @__PURE__ */ dual(2, (self, n) => {
  const input = fromIterable2(self);
  return input.slice(0, input.length - clamp4(n, input));
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
var modify2 = /* @__PURE__ */ dual(3, (self, i, f) => getOrElse(modifyOption2(self, i, f), () => Array.from(self)));
var modifyOption2 = /* @__PURE__ */ dual(3, (self, i, f) => {
  const out = Array.from(self);
  if (isOutOfBound(i, out)) {
    return none2();
  }
  const next = f(out[i]);
  out[i] = next;
  return some2(out);
});
var remove2 = /* @__PURE__ */ dual(2, (self, i) => {
  const out = Array.from(self);
  if (isOutOfBound(i, out)) {
    return out;
  }
  out.splice(i, 1);
  return out;
});
var reverse = (self) => Array.from(self).reverse();
var sort = /* @__PURE__ */ dual(2, (self, O) => {
  const out = Array.from(self);
  out.sort(O);
  return out;
});
var sortWith = /* @__PURE__ */ dual(3, (self, f, order) => sort(self, mapInput2(order, f)));
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
var zip = /* @__PURE__ */ dual(2, (self, that) => zipWith2(self, that, make4));
var zipWith2 = /* @__PURE__ */ dual(3, (self, that, f) => {
  const as9 = fromIterable2(self);
  const bs = fromIterable2(that);
  if (isNonEmptyReadonlyArray(as9) && isNonEmptyReadonlyArray(bs)) {
    const out = [f(headNonEmpty(as9), headNonEmpty(bs))];
    const len = Math.min(as9.length, bs.length);
    for (let i = 1; i < len; i++) {
      out[i] = f(as9[i], bs[i]);
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
    if (isOutOfBound(Math.abs(m), input) || m === 0) {
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
var chunksOf = /* @__PURE__ */ dual(2, (self, n) => {
  const input = fromIterable2(self);
  if (isNonEmptyReadonlyArray(input)) {
    return chop(input, splitNonEmptyAt(n));
  }
  return [];
});
var groupWith = /* @__PURE__ */ dual(2, (self, isEquivalent) => chop(self, (as9) => {
  const h = headNonEmpty(as9);
  const out = [h];
  let i = 1;
  for (; i < as9.length; i++) {
    const a = as9[i];
    if (isEquivalent(a, h)) {
      out.push(a);
    } else {
      break;
    }
  }
  return [out, as9.slice(i)];
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
  const has9 = containsWith2(isEquivalent);
  return dual(2, (self, that) => fromIterable2(self).filter((a) => has9(that, a)));
};
var intersection2 = /* @__PURE__ */ intersectionWith(_equivalence2);
var differenceWith = (isEquivalent) => {
  const has9 = containsWith2(isEquivalent);
  return dual(2, (self, that) => fromIterable2(self).filter((a) => !has9(that, a)));
};
var difference2 = /* @__PURE__ */ differenceWith(_equivalence2);
var empty3 = () => [];
var of = (a) => [a];
var map3 = /* @__PURE__ */ dual(2, (self, f) => self.map(f));
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
  const as9 = fromIterable2(self);
  const out = [];
  for (let i = 0; i < as9.length; i++) {
    const o = f(as9[i], i);
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
  const as9 = fromIterable2(self);
  for (let i = 0; i < as9.length; i++) {
    const e = f(as9[i], i);
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
  const as9 = fromIterable2(self);
  const out = [];
  for (let i = 0; i < as9.length; i++) {
    if (predicate(as9[i], i)) {
      out.push(as9[i]);
    }
  }
  return out;
});
var partition2 = /* @__PURE__ */ dual(2, (self, predicate) => {
  const left3 = [];
  const right3 = [];
  const as9 = fromIterable2(self);
  for (let i = 0; i < as9.length; i++) {
    if (predicate(as9[i], i)) {
      right3.push(as9[i]);
    } else {
      left3.push(as9[i]);
    }
  }
  return [left3, right3];
});
var separate2 = /* @__PURE__ */ partitionMap3(identity);
var reduce2 = /* @__PURE__ */ dual(3, (self, b, f) => fromIterable2(self).reduce((b2, a, i) => f(b2, a, i), b));
var reduceRight = /* @__PURE__ */ dual(3, (self, b, f) => fromIterable2(self).reduceRight((b2, a, i) => f(b2, a, i), b));
var liftPredicate2 = (predicate) => (b) => predicate(b) ? [b] : [];
var liftOption = (f) => (...a) => fromOption3(f(...a));
var fromNullable2 = (a) => a == null ? empty3() : [a];
var liftNullable2 = (f) => (...a) => fromNullable2(f(...a));
var flatMapNullable2 = /* @__PURE__ */ dual(2, (self, f) => isNonEmptyReadonlyArray(self) ? fromNullable2(f(headNonEmpty(self))) : empty3());
var liftEither = (f) => (...a) => {
  const e = f(...a);
  return isLeft2(e) ? [] : [e.right];
};
var every2 = /* @__PURE__ */ dual(2, (self, refinement) => self.every(refinement));
var some4 = /* @__PURE__ */ dual(2, (self, predicate) => self.some(predicate));
var extend = /* @__PURE__ */ dual(2, (self, f) => self.map((_, i, as9) => f(as9.slice(i))));
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
var getEquivalence4 = array2;
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
var cartesianWith = /* @__PURE__ */ dual(3, (self, that, f) => flatMap2(self, (a) => map3(that, (b) => f(a, b))));
var cartesian = /* @__PURE__ */ dual(2, (self, that) => cartesianWith(self, that, (a, b) => [a, b]));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Brand.js
var RefinedConstructorsTypeId = /* @__PURE__ */ Symbol.for("effect/Brand/Refined");
var error = (message2, meta) => [{
  message: message2,
  meta
}];
function refined(...args) {
  const either8 = args.length === 2 ? (unbranded) => args[0](unbranded) ? right2(unbranded) : left2(args[1](unbranded)) : (unbranded) => {
    return match(args[0](unbranded), {
      onNone: () => right2(unbranded),
      onSome: left2
    });
  };
  return Object.assign((unbranded) => getOrThrowWith2(either8(unbranded), identity), {
    [RefinedConstructorsTypeId]: RefinedConstructorsTypeId,
    option: (args2) => getRight2(either8(args2)),
    either: either8,
    is: (args2) => isRight2(either8(args2))
  });
}

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/context.js
var TagTypeId = /* @__PURE__ */ Symbol.for("effect/Context/Tag");
var STMSymbolKey = "effect/STM";
var STMTypeId = /* @__PURE__ */ Symbol.for(STMSymbolKey);
var TagProto = {
  ...EffectPrototype,
  _tag: "Tag",
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
    return make6(this, self);
  }
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
var TypeId5 = /* @__PURE__ */ Symbol.for("effect/Context");
var ContextProto = {
  [TypeId5]: {
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
    return cached(this, number(this.unsafeMap.size));
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
  const error2 = new Error(`Service not found${tag2.key ? `: ${String(tag2.key)}` : ""}`);
  if (tag2.stack) {
    const lines = tag2.stack.split("\n");
    if (lines.length > 2) {
      const afterAt = lines[2].match(/at (.*)/);
      if (afterAt) {
        error2.message = error2.message + ` (defined at ${afterAt[1]})`;
      }
    }
  }
  if (error2.stack) {
    const lines = error2.stack.split("\n");
    lines.splice(1, 3);
    error2.stack = lines.join("\n");
  }
  return error2;
};
var isContext = (u) => hasProperty(u, TypeId5);
var isTag = (u) => hasProperty(u, TagTypeId);
var _empty = /* @__PURE__ */ makeContext(/* @__PURE__ */ new Map());
var empty4 = () => _empty;
var make6 = (tag2, service3) => makeContext(/* @__PURE__ */ new Map([[tag2.key, service3]]));
var add = /* @__PURE__ */ dual(3, (self, tag2, service3) => {
  const map25 = new Map(self.unsafeMap);
  map25.set(tag2.key, service3);
  return makeContext(map25);
});
var unsafeGet2 = /* @__PURE__ */ dual(2, (self, tag2) => {
  if (!self.unsafeMap.has(tag2.key)) {
    throw serviceNotFoundError(tag2);
  }
  return self.unsafeMap.get(tag2.key);
});
var get3 = unsafeGet2;
var getOption = /* @__PURE__ */ dual(2, (self, tag2) => {
  if (!self.unsafeMap.has(tag2.key)) {
    return none;
  }
  return some(self.unsafeMap.get(tag2.key));
});
var merge2 = /* @__PURE__ */ dual(2, (self, that) => {
  const map25 = new Map(self.unsafeMap);
  for (const [tag2, s] of that.unsafeMap) {
    map25.set(tag2, s);
  }
  return makeContext(map25);
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Context.js
var GenericTag = makeGenericTag;
var isContext2 = isContext;
var isTag2 = isTag;
var empty5 = empty4;
var make7 = make6;
var add2 = add;
var get4 = get3;
var unsafeGet3 = unsafeGet2;
var getOption2 = getOption;
var merge3 = merge2;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Chunk.js
var TypeId6 = /* @__PURE__ */ Symbol.for("effect/Chunk");
function copy2(src, srcPos, dest, destPos, len) {
  for (let i = srcPos; i < Math.min(src.length, srcPos + len); i++) {
    dest[destPos + i - srcPos] = src[i];
  }
  return dest;
}
var emptyArray = [];
var getEquivalence5 = (isEquivalent) => make((self, that) => self.length === that.length && toReadonlyArray(self).every((value3, i) => isEquivalent(value3, unsafeGet4(that, i))));
var _equivalence3 = /* @__PURE__ */ getEquivalence5(equals);
var ChunkProto = {
  [TypeId6]: {
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
    return cached(this, array(toReadonlyArray(this)));
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
  const chunk4 = Object.create(ChunkProto);
  chunk4.backing = backing;
  switch (backing._tag) {
    case "IEmpty": {
      chunk4.length = 0;
      chunk4.depth = 0;
      chunk4.left = chunk4;
      chunk4.right = chunk4;
      break;
    }
    case "IConcat": {
      chunk4.length = backing.left.length + backing.right.length;
      chunk4.depth = 1 + Math.max(backing.left.depth, backing.right.depth);
      chunk4.left = backing.left;
      chunk4.right = backing.right;
      break;
    }
    case "IArray": {
      chunk4.length = backing.array.length;
      chunk4.depth = 0;
      chunk4.left = _empty2;
      chunk4.right = _empty2;
      break;
    }
    case "ISingleton": {
      chunk4.length = 1;
      chunk4.depth = 0;
      chunk4.left = _empty2;
      chunk4.right = _empty2;
      break;
    }
    case "ISlice": {
      chunk4.length = backing.length;
      chunk4.depth = backing.chunk.depth + 1;
      chunk4.left = _empty2;
      chunk4.right = _empty2;
      break;
    }
  }
  return chunk4;
};
var isChunk = (u) => hasProperty(u, TypeId6);
var _empty2 = /* @__PURE__ */ makeChunk({
  _tag: "IEmpty"
});
var empty6 = () => _empty2;
var make8 = (...as9) => as9.length === 1 ? of2(as9[0]) : unsafeFromNonEmptyArray(as9);
var of2 = (a) => makeChunk({
  _tag: "ISingleton",
  a
});
var fromIterable3 = (self) => isChunk(self) ? self : makeChunk({
  _tag: "IArray",
  array: fromIterable2(self)
});
var copyToArray = (self, array6, initial) => {
  switch (self.backing._tag) {
    case "IArray": {
      copy2(self.backing.array, 0, array6, initial, self.length);
      break;
    }
    case "IConcat": {
      copyToArray(self.left, array6, initial);
      copyToArray(self.right, array6, initial + self.left.length);
      break;
    }
    case "ISingleton": {
      array6[initial] = self.backing.a;
      break;
    }
    case "ISlice": {
      let i = 0;
      let j = initial;
      while (i < self.length) {
        array6[j] = unsafeGet4(self, i);
        i += 1;
        j += 1;
      }
      break;
    }
  }
};
var toReadonlyArray = (self) => {
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
var reverse2 = (self) => {
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
var get5 = /* @__PURE__ */ dual(2, (self, index) => index < 0 || index >= self.length ? none2() : some2(unsafeGet4(self, index)));
var unsafeFromArray = (self) => makeChunk({
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
var filter4 = /* @__PURE__ */ dual(2, (self, predicate) => unsafeFromArray(filterMap3(self, liftPredicate(predicate))));
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
var flatten3 = /* @__PURE__ */ flatMap3(identity);
var isEmpty = (self) => self.length === 0;
var isNonEmpty = (self) => self.length > 0;
var head2 = /* @__PURE__ */ get5(0);
var unsafeHead = (self) => unsafeGet4(self, 0);
var headNonEmpty2 = unsafeHead;
var last2 = (self) => get5(self, self.length - 1);
var unsafeLast = (self) => unsafeGet4(self, self.length - 1);
var map4 = /* @__PURE__ */ dual(2, (self, f) => self.backing._tag === "ISingleton" ? of2(f(self.backing.a, 0)) : unsafeFromArray(pipe(toReadonlyArray(self), map3((a, i) => f(a, i)))));
var mapAccum2 = /* @__PURE__ */ dual(3, (self, s, f) => {
  const [s1, as9] = mapAccum(self, s, f);
  return [s1, unsafeFromArray(as9)];
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
var findFirst2 = findFirst;
var reduce3 = reduce2;
var reduceRight2 = reduceRight;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/hashMap/config.js
var SIZE = 5;
var BUCKET_SIZE = /* @__PURE__ */ Math.pow(2, SIZE);
var MASK = BUCKET_SIZE - 1;
var MAX_INDEX_NODE = BUCKET_SIZE / 2;
var MIN_ARRAY_NODE = BUCKET_SIZE / 4;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/hashMap/bitwise.js
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/stack.js
var make9 = (value3, previous2) => ({
  value: value3,
  previous: previous2
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/hashMap/array.js
function arrayUpdate(mutate3, at, v, arr) {
  let out = arr;
  if (!mutate3) {
    const len = arr.length;
    out = new Array(len);
    for (let i = 0; i < len; ++i)
      out[i] = arr[i];
  }
  out[at] = v;
  return out;
}
function arraySpliceOut(mutate3, at, arr) {
  const newLen = arr.length - 1;
  let i = 0;
  let g = 0;
  let out = arr;
  if (mutate3) {
    i = g = at;
  } else {
    out = new Array(newLen);
    while (i < at)
      out[g++] = arr[i++];
  }
  ++i;
  while (i <= newLen)
    out[g++] = arr[i++];
  if (mutate3) {
    out.length = newLen;
  }
  return out;
}
function arraySpliceIn(mutate3, at, v, arr) {
  const len = arr.length;
  if (mutate3) {
    let i2 = len;
    while (i2 >= at)
      arr[i2--] = arr[i2];
    arr[at] = v;
    return arr;
  }
  let i = 0, g = 0;
  const out = new Array(len + 1);
  while (i < at)
    out[g++] = arr[i++];
  out[at] = v;
  while (i < len)
    out[++g] = arr[i++];
  return out;
}

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/hashMap/node.js
var EmptyNode = class _EmptyNode {
  _tag = "EmptyNode";
  modify(edit, _shift, f, hash4, key, size16) {
    const v = f(none2());
    if (isNone2(v))
      return new _EmptyNode();
    ++size16.value;
    return new LeafNode(edit, hash4, key, v);
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
  constructor(edit, hash4, key, value3) {
    this.edit = edit;
    this.hash = hash4;
    this.key = key;
    this.value = value3;
  }
  modify(edit, shift2, f, hash4, key, size16) {
    if (equals(key, this.key)) {
      const v2 = f(this.value);
      if (v2 === this.value)
        return this;
      else if (isNone2(v2)) {
        --size16.value;
        return new EmptyNode();
      }
      if (canEditNode(this, edit)) {
        this.value = v2;
        return this;
      }
      return new _LeafNode(edit, hash4, key, v2);
    }
    const v = f(none2());
    if (isNone2(v))
      return this;
    ++size16.value;
    return mergeLeaves(edit, shift2, this.hash, this, hash4, new _LeafNode(edit, hash4, key, v));
  }
};
var CollisionNode = class _CollisionNode {
  edit;
  hash;
  children;
  _tag = "CollisionNode";
  constructor(edit, hash4, children3) {
    this.edit = edit;
    this.hash = hash4;
    this.children = children3;
  }
  modify(edit, shift2, f, hash4, key, size16) {
    if (hash4 === this.hash) {
      const canEdit = canEditNode(this, edit);
      const list2 = this.updateCollisionList(canEdit, edit, this.hash, this.children, f, key, size16);
      if (list2 === this.children)
        return this;
      return list2.length > 1 ? new _CollisionNode(edit, this.hash, list2) : list2[0];
    }
    const v = f(none2());
    if (isNone2(v))
      return this;
    ++size16.value;
    return mergeLeaves(edit, shift2, this.hash, this, hash4, new LeafNode(edit, hash4, key, v));
  }
  updateCollisionList(mutate3, edit, hash4, list2, f, key, size16) {
    const len = list2.length;
    for (let i = 0; i < len; ++i) {
      const child = list2[i];
      if ("key" in child && equals(key, child.key)) {
        const value3 = child.value;
        const newValue2 = f(value3);
        if (newValue2 === value3)
          return list2;
        if (isNone2(newValue2)) {
          --size16.value;
          return arraySpliceOut(mutate3, i, list2);
        }
        return arrayUpdate(mutate3, i, new LeafNode(edit, hash4, key, newValue2), list2);
      }
    }
    const newValue = f(none2());
    if (isNone2(newValue))
      return list2;
    ++size16.value;
    return arrayUpdate(mutate3, len, new LeafNode(edit, hash4, key, newValue), list2);
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
  modify(edit, shift2, f, hash4, key, size16) {
    const mask = this.mask;
    const children3 = this.children;
    const frag = hashFragment(shift2, hash4);
    const bit = toBitmap(frag);
    const indx = fromBitmap(mask, bit);
    const exists4 = mask & bit;
    const canEdit = canEditNode(this, edit);
    if (!exists4) {
      const _newChild = new EmptyNode().modify(edit, shift2 + SIZE, f, hash4, key, size16);
      if (!_newChild)
        return this;
      return children3.length >= MAX_INDEX_NODE ? expand(edit, frag, _newChild, mask, children3) : new _IndexedNode(edit, mask | bit, arraySpliceIn(canEdit, indx, _newChild, children3));
    }
    const current2 = children3[indx];
    const child = current2.modify(edit, shift2 + SIZE, f, hash4, key, size16);
    if (current2 === child)
      return this;
    let bitmap = mask;
    let newChildren;
    if (isEmptyNode(child)) {
      bitmap &= ~bit;
      if (!bitmap)
        return new EmptyNode();
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
  constructor(edit, size16, children3) {
    this.edit = edit;
    this.size = size16;
    this.children = children3;
  }
  modify(edit, shift2, f, hash4, key, size16) {
    let count3 = this.size;
    const children3 = this.children;
    const frag = hashFragment(shift2, hash4);
    const child = children3[frag];
    const newChild = (child || new EmptyNode()).modify(edit, shift2 + SIZE, f, hash4, key, size16);
    if (child === newChild)
      return this;
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
    if (bit & 1)
      arr[i] = subNodes[count3++];
    bit >>>= 1;
  }
  arr[frag] = child;
  return new ArrayNode(edit, count3 + 1, arr);
}
function mergeLeavesInner(edit, shift2, h1, n1, h2, n2) {
  if (h1 === h2)
    return new CollisionNode(edit, h1, [n2, n1]);
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/hashMap.js
var HashMapSymbolKey = "effect/HashMap";
var HashMapTypeId = /* @__PURE__ */ Symbol.for(HashMapSymbolKey);
var HashMapProto = {
  [HashMapTypeId]: HashMapTypeId,
  [Symbol.iterator]() {
    return new HashMapIterator(this, (k, v) => [k, v]);
  },
  [symbol]() {
    let hash4 = hash(HashMapSymbolKey);
    for (const item of this) {
      hash4 ^= pipe(hash(item[0]), combine(hash(item[1])));
    }
    return cached(this, hash4);
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
var makeImpl = (editable, edit, root, size16) => {
  const map25 = Object.create(HashMapProto);
  map25._editable = editable;
  map25._edit = edit;
  map25._root = root;
  map25._size = size16;
  return map25;
};
var HashMapIterator = class _HashMapIterator {
  map;
  f;
  v;
  constructor(map25, f) {
    this.map = map25;
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
var empty7 = () => _empty3;
var fromIterable4 = (entries2) => {
  const map25 = beginMutation(empty7());
  for (const entry of entries2) {
    set2(map25, entry[0], entry[1]);
  }
  return endMutation(map25);
};
var isHashMap = (u) => hasProperty(u, HashMapTypeId);
var isEmpty2 = (self) => self && isEmptyNode(self._root);
var get6 = /* @__PURE__ */ dual(2, (self, key) => getHash(self, key, hash(key)));
var getHash = /* @__PURE__ */ dual(3, (self, key, hash4) => {
  let node = self._root;
  let shift2 = 0;
  while (true) {
    switch (node._tag) {
      case "LeafNode": {
        return equals(key, node.key) ? node.value : none2();
      }
      case "CollisionNode": {
        if (hash4 === node.hash) {
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
        const frag = hashFragment(shift2, hash4);
        const bit = toBitmap(frag);
        if (node.mask & bit) {
          node = node.children[fromBitmap(node.mask, bit)];
          shift2 += SIZE;
          break;
        }
        return none2();
      }
      case "ArrayNode": {
        node = node.children[hashFragment(shift2, hash4)];
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
var set2 = /* @__PURE__ */ dual(3, (self, key, value3) => modifyAt(self, key, () => some2(value3)));
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
var modifyAt = /* @__PURE__ */ dual(3, (self, key, f) => modifyHash(self, key, hash(key), f));
var modifyHash = /* @__PURE__ */ dual(4, (self, key, hash4, f) => {
  const size16 = {
    value: self._size
  };
  const newRoot = self._root.modify(self._editable ? self._edit : NaN, 0, f, hash4, key, size16);
  return pipe(self, setTree(newRoot, size16.value));
});
var remove3 = /* @__PURE__ */ dual(2, (self, key) => modifyAt(self, key, none2));
var map5 = /* @__PURE__ */ dual(2, (self, f) => reduce4(self, empty7(), (map25, value3, key) => set2(map25, key, f(value3, key))));
var forEach2 = /* @__PURE__ */ dual(2, (self, f) => reduce4(self, void 0, (_, value3, key) => f(value3, key)));
var reduce4 = /* @__PURE__ */ dual(3, (self, zero3, f) => {
  const root = self._root;
  if (root._tag === "LeafNode") {
    return isSome2(root.value) ? f(zero3, root.value.value, root.key) : zero3;
  }
  if (root._tag === "EmptyNode") {
    return zero3;
  }
  const toVisit = [root.children];
  let children3;
  while (children3 = toVisit.pop()) {
    for (let i = 0, len = children3.length; i < len; ) {
      const child = children3[i++];
      if (child && !isEmptyNode(child)) {
        if (child._tag === "LeafNode") {
          if (isSome2(child.value)) {
            zero3 = f(zero3, child.value.value, child.key);
          }
        } else {
          toVisit.push(child.children);
        }
      }
    }
  }
  return zero3;
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/hashSet.js
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
var _empty4 = /* @__PURE__ */ makeImpl2(/* @__PURE__ */ empty7());
var empty8 = () => _empty4;
var fromIterable5 = (elements) => {
  const set10 = beginMutation2(empty8());
  for (const value3 of elements) {
    add3(set10, value3);
  }
  return endMutation2(set10);
};
var make10 = (...elements) => {
  const set10 = beginMutation2(empty8());
  for (const value3 of elements) {
    add3(set10, value3);
  }
  return endMutation2(set10);
};
var has3 = /* @__PURE__ */ dual(2, (self, value3) => has2(self._keyMap, value3));
var size3 = (self) => size2(self._keyMap);
var beginMutation2 = (self) => makeImpl2(beginMutation(self._keyMap));
var endMutation2 = (self) => {
  self._keyMap._editable = false;
  return self;
};
var mutate = /* @__PURE__ */ dual(2, (self, f) => {
  const transient = beginMutation2(self);
  f(transient);
  return endMutation2(transient);
});
var add3 = /* @__PURE__ */ dual(2, (self, value3) => self._keyMap._editable ? (set2(value3, true)(self._keyMap), self) : makeImpl2(set2(value3, true)(self._keyMap)));
var remove4 = /* @__PURE__ */ dual(2, (self, value3) => self._keyMap._editable ? (remove3(value3)(self._keyMap), self) : makeImpl2(remove3(value3)(self._keyMap)));
var difference3 = /* @__PURE__ */ dual(2, (self, that) => mutate(self, (set10) => {
  for (const value3 of that) {
    remove4(set10, value3);
  }
}));
var union3 = /* @__PURE__ */ dual(2, (self, that) => mutate(empty8(), (set10) => {
  forEach3(self, (value3) => add3(set10, value3));
  for (const value3 of that) {
    add3(set10, value3);
  }
}));
var forEach3 = /* @__PURE__ */ dual(2, (self, f) => forEach2(self._keyMap, (_, k) => f(k)));
var reduce5 = /* @__PURE__ */ dual(3, (self, zero3, f) => reduce4(self._keyMap, zero3, (z, _, a) => f(z, a)));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/HashSet.js
var isHashSet2 = isHashSet;
var empty9 = empty8;
var fromIterable6 = fromIterable5;
var make11 = make10;
var has4 = has3;
var size4 = size3;
var add4 = add3;
var remove5 = remove4;
var difference4 = difference3;
var union4 = union3;
var reduce6 = reduce5;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/MutableRef.js
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
var make12 = (value3) => {
  const ref = Object.create(MutableRefProto);
  ref.current = value3;
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
var set3 = /* @__PURE__ */ dual(2, (self, value3) => {
  self.current = value3;
  return self;
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/fiberId.js
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
var runtime = (id2, startTimeMillis) => {
  return new Runtime(id2, startTimeMillis);
};
var composite = (left3, right3) => {
  return new Composite(left3, right3);
};
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
var ids = (self) => {
  switch (self._tag) {
    case OP_NONE: {
      return empty9();
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
var threadName = (self) => {
  const identifiers = Array.from(ids(self)).map((n) => `#${n}`).join(",");
  return identifiers;
};
var unsafeMake = () => {
  const id2 = get7(_fiberCounter);
  pipe(_fiberCounter, set3(id2 + 1));
  return new Runtime(id2, Date.now());
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/FiberId.js
var none4 = none3;
var runtime2 = runtime;
var composite2 = composite;
var isFiberId2 = isFiberId;
var combine3 = combine2;
var ids2 = ids;
var threadName2 = threadName;
var unsafeMake2 = unsafeMake;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/HashMap.js
var isHashMap2 = isHashMap;
var empty10 = empty7;
var fromIterable7 = fromIterable4;
var isEmpty3 = isEmpty2;
var get8 = get6;
var set4 = set2;
var keys3 = keys2;
var size5 = size2;
var modifyAt2 = modifyAt;
var map7 = map5;
var forEach4 = forEach2;
var reduce7 = reduce4;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/List.js
var TypeId8 = /* @__PURE__ */ Symbol.for("effect/List");
var toArray2 = (self) => Array.from(self);
var getEquivalence6 = (isEquivalent) => mapInput(getEquivalence4(isEquivalent), toArray2);
var _equivalence4 = /* @__PURE__ */ getEquivalence6(equals);
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
    return cached(this, array(toArray2(this)));
  },
  [Symbol.iterator]() {
    let done9 = false;
    let self = this;
    return {
      next() {
        if (done9) {
          return this.return();
        }
        if (self._tag === "Nil") {
          done9 = true;
          return this.return();
        }
        const value3 = self.head;
        self = self.tail;
        return {
          done: done9,
          value: value3
        };
      },
      return(value3) {
        if (!done9) {
          done9 = true;
        }
        return {
          done: true,
          value: value3
        };
      }
    };
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var makeCons = (head7, tail2) => {
  const cons2 = Object.create(ConsProto);
  cons2.head = head7;
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
var cons = (head7, tail2) => makeCons(head7, tail2);
var empty11 = nil;
var of3 = (value3) => makeCons(value3, _Nil);
var fromIterable8 = (prefix) => {
  const iterator = prefix[Symbol.iterator]();
  let next;
  if ((next = iterator.next()) && !next.done) {
    const result = makeCons(next.value, _Nil);
    let curr = result;
    while ((next = iterator.next()) && !next.done) {
      const temp = makeCons(next.value, _Nil);
      curr.tail = temp;
      curr = temp;
    }
    return result;
  } else {
    return _Nil;
  }
};
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
var reduce8 = /* @__PURE__ */ dual(3, (self, zero3, f) => {
  let acc = zero3;
  let these = self;
  while (!isNil(these)) {
    acc = f(acc, these.head);
    these = these.tail;
  }
  return acc;
});
var reverse3 = (self) => {
  let result = empty11();
  let these = self;
  while (!isNil(these)) {
    result = prepend3(result, these.head);
    these = these.tail;
  }
  return result;
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/data.js
var ArrayProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(Array.prototype), {
  [symbol]() {
    return cached(this, array(this));
  },
  [symbol2](that) {
    if (Array.isArray(that) && this.length === that.length) {
      return this.every((v, i) => equals(v, that[i]));
    } else {
      return false;
    }
  }
});
var Structural = /* @__PURE__ */ function() {
  function Structural2(args) {
    if (args) {
      Object.assign(this, args);
    }
  }
  Structural2.prototype = StructuralPrototype;
  return Structural2;
}();
var struct2 = (as9) => Object.assign(Object.create(StructuralPrototype), as9);

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/differ/contextPatch.js
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
var empty12 = () => _empty5;
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
  let patch9 = empty12();
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
  while (isNonEmpty(patches)) {
    const head7 = headNonEmpty2(patches);
    const tail2 = tailNonEmpty2(patches);
    switch (head7._tag) {
      case "Empty": {
        patches = tail2;
        break;
      }
      case "AddService": {
        updatedContext.set(head7.key, head7.service);
        patches = tail2;
        break;
      }
      case "AndThen": {
        patches = prepend2(prepend2(tail2, head7.second), head7.first);
        break;
      }
      case "RemoveService": {
        updatedContext.delete(head7.key);
        patches = tail2;
        break;
      }
      case "UpdateService": {
        updatedContext.set(head7.key, head7.update(updatedContext.get(head7.key)));
        wasServiceUpdated = true;
        patches = tail2;
        break;
      }
    }
  }
  if (!wasServiceUpdated) {
    return makeContext(updatedContext);
  }
  const map25 = /* @__PURE__ */ new Map();
  for (const [tag2] of context7.unsafeMap) {
    if (updatedContext.has(tag2)) {
      map25.set(tag2, updatedContext.get(tag2));
      updatedContext.delete(tag2);
    }
  }
  for (const [tag2, s] of updatedContext) {
    map25.set(tag2, s);
  }
  return makeContext(map25);
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/differ/hashSetPatch.js
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
var empty13 = () => _empty6;
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
var makeAdd = (value3) => {
  const o = Object.create(AddProto);
  o.value = value3;
  return o;
};
var RemoveProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto2), {
  _tag: "Remove"
});
var makeRemove = (value3) => {
  const o = Object.create(RemoveProto);
  o.value = value3;
  return o;
};
var diff2 = (oldValue, newValue) => {
  const [removed, patch9] = reduce6([oldValue, empty13()], ([set10, patch10], value3) => {
    if (has4(value3)(set10)) {
      return [remove5(value3)(set10), patch10];
    }
    return [set10, combine5(makeAdd(value3))(patch10)];
  })(newValue);
  return reduce6(patch9, (patch10, value3) => combine5(makeRemove(value3))(patch10))(removed);
};
var combine5 = /* @__PURE__ */ dual(2, (self, that) => makeAndThen2(self, that));
var patch2 = /* @__PURE__ */ dual(2, (self, oldValue) => {
  if (self._tag === "Empty") {
    return oldValue;
  }
  let set10 = oldValue;
  let patches = of2(self);
  while (isNonEmpty(patches)) {
    const head7 = headNonEmpty2(patches);
    const tail2 = tailNonEmpty2(patches);
    switch (head7._tag) {
      case "Empty": {
        patches = tail2;
        break;
      }
      case "AndThen": {
        patches = prepend2(head7.first)(prepend2(head7.second)(tail2));
        break;
      }
      case "Add": {
        set10 = add4(head7.value)(set10);
        patches = tail2;
        break;
      }
      case "Remove": {
        set10 = remove5(head7.value)(set10);
        patches = tail2;
      }
    }
  }
  return set10;
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/differ/readonlyArrayPatch.js
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
var empty14 = () => _empty7;
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
var makeAppend = (values5) => {
  const o = Object.create(AppendProto);
  o.values = values5;
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
  let patch9 = empty14();
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
    const head7 = headNonEmpty(patches);
    const tail2 = tailNonEmpty(patches);
    switch (head7._tag) {
      case "Empty": {
        patches = tail2;
        break;
      }
      case "AndThen": {
        tail2.unshift(head7.first, head7.second);
        patches = tail2;
        break;
      }
      case "Append": {
        for (const value3 of head7.values) {
          readonlyArray2.push(value3);
        }
        patches = tail2;
        break;
      }
      case "Slice": {
        readonlyArray2 = readonlyArray2.slice(head7.from, head7.until);
        patches = tail2;
        break;
      }
      case "Update": {
        readonlyArray2[head7.index] = differ3.patch(head7.patch, readonlyArray2[head7.index]);
        patches = tail2;
        break;
      }
    }
  }
  return readonlyArray2;
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/differ.js
var DifferTypeId = /* @__PURE__ */ Symbol.for("effect/Differ");
var DifferProto = {
  [DifferTypeId]: {
    _P: identity,
    _V: identity
  }
};
var make15 = (params) => {
  const differ3 = Object.create(DifferProto);
  differ3.empty = params.empty;
  differ3.diff = params.diff;
  differ3.combine = params.combine;
  differ3.patch = params.patch;
  return differ3;
};
var environment = () => make15({
  empty: empty12(),
  combine: (first2, second) => combine4(second)(first2),
  diff: (oldValue, newValue) => diff(oldValue, newValue),
  patch: (patch9, oldValue) => patch(oldValue)(patch9)
});
var hashSet = () => make15({
  empty: empty13(),
  combine: (first2, second) => combine5(second)(first2),
  diff: (oldValue, newValue) => diff2(oldValue, newValue),
  patch: (patch9, oldValue) => patch2(oldValue)(patch9)
});
var readonlyArray = (differ3) => make15({
  empty: empty14(),
  combine: (first2, second) => combine6(first2, second),
  diff: (oldValue, newValue) => diff3({
    oldValue,
    newValue,
    differ: differ3
  }),
  patch: (patch9, oldValue) => patch3(patch9, oldValue, differ3)
});
var update = () => updateWith((_, a) => a);
var updateWith = (f) => make15({
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/runtimeFlagsPatch.js
var BIT_MASK = 255;
var BIT_SHIFT = 8;
var active = (patch9) => patch9 & BIT_MASK;
var enabled = (patch9) => patch9 >> BIT_SHIFT & BIT_MASK;
var make16 = (active2, enabled2) => (active2 & BIT_MASK) + ((enabled2 & active2 & BIT_MASK) << BIT_SHIFT);
var empty15 = /* @__PURE__ */ make16(0, 0);
var enable = (flag) => make16(flag, flag);
var disable = (flag) => make16(flag, 0);
var exclude = /* @__PURE__ */ dual(2, (self, flag) => make16(active(self) & ~flag, enabled(self)));
var andThen2 = /* @__PURE__ */ dual(2, (self, that) => self | that);
var invert = (n) => ~n >>> 0 & BIT_MASK;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/runtimeFlags.js
var None2 = 0;
var Interruption = 1 << 0;
var OpSupervision = 1 << 1;
var RuntimeMetrics = 1 << 2;
var WindDown = 1 << 4;
var CooperativeYielding = 1 << 5;
var cooperativeYielding = (self) => isEnabled(self, CooperativeYielding);
var enable2 = /* @__PURE__ */ dual(2, (self, flag) => self | flag);
var interruptible = (self) => interruption(self) && !windDown(self);
var interruption = (self) => isEnabled(self, Interruption);
var isEnabled = /* @__PURE__ */ dual(2, (self, flag) => (self & flag) !== 0);
var make17 = (...flags) => flags.reduce((a, b) => a | b, 0);
var none5 = /* @__PURE__ */ make17(None2);
var runtimeMetrics = (self) => isEnabled(self, RuntimeMetrics);
var windDown = (self) => isEnabled(self, WindDown);
var diff4 = /* @__PURE__ */ dual(2, (self, that) => make16(self ^ that, that));
var patch4 = /* @__PURE__ */ dual(2, (self, patch9) => self & (invert(active(patch9)) | enabled(patch9)) | active(patch9) & enabled(patch9));
var differ = /* @__PURE__ */ make15({
  empty: empty15,
  diff: (oldValue, newValue) => diff4(oldValue, newValue),
  combine: (first2, second) => andThen2(second)(first2),
  patch: (_patch, oldValue) => patch4(oldValue, _patch)
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/RuntimeFlagsPatch.js
var empty16 = empty15;
var enable3 = enable;
var disable2 = disable;
var exclude2 = exclude;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/blockedRequests.js
var empty17 = {
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
var flatten4 = (self) => {
  let current2 = of3(self);
  let updated = empty11();
  while (1) {
    const [parallel5, sequential5] = reduce8(current2, [parallelCollectionEmpty(), empty11()], ([parallel6, sequential6], blockedRequest) => {
      const [par2, seq2] = step(blockedRequest);
      return [parallelCollectionCombine(parallel6, par2), appendAll3(sequential6, seq2)];
    });
    updated = merge4(updated, parallel5);
    if (isNil(sequential5)) {
      return reverse3(updated);
    }
    current2 = sequential5;
  }
  throw new Error("BUG: BlockedRequests.flatten - please report an issue at https://github.com/Effect-TS/effect/issues");
};
var step = (requests) => {
  let current2 = requests;
  let parallel5 = parallelCollectionEmpty();
  let stack = empty11();
  let sequential5 = empty11();
  while (1) {
    switch (current2._tag) {
      case "Empty": {
        if (isNil(stack)) {
          return [parallel5, sequential5];
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
            sequential5 = cons(right3, sequential5);
            break;
          }
        }
        break;
      }
      case "Single": {
        parallel5 = parallelCollectionAdd(parallel5, current2);
        if (isNil(stack)) {
          return [parallel5, sequential5];
        }
        current2 = stack.head;
        stack = stack.tail;
        break;
      }
    }
  }
  throw new Error("BUG: BlockedRequests.step - please report an issue at https://github.com/Effect-TS/effect/issues");
};
var merge4 = (sequential5, parallel5) => {
  if (isNil(sequential5)) {
    return of3(parallelCollectionToSequentialCollection(parallel5));
  }
  if (parallelCollectionIsEmpty(parallel5)) {
    return sequential5;
  }
  const seqHeadKeys = sequentialCollectionKeys(sequential5.head);
  const parKeys = parallelCollectionKeys(parallel5);
  if (seqHeadKeys.length === 1 && parKeys.length === 1 && equals(seqHeadKeys[0], parKeys[0])) {
    return cons(sequentialCollectionCombine(sequential5.head, parallelCollectionToSequentialCollection(parallel5)), sequential5.tail);
  }
  return cons(parallelCollectionToSequentialCollection(parallel5), sequential5);
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
  constructor(map25) {
    this.map = map25;
  }
};
var parallelCollectionEmpty = () => new ParallelImpl(empty10());
var parallelCollectionAdd = (self, blockedRequest) => new ParallelImpl(modifyAt2(self.map, blockedRequest.dataSource, (_) => orElseSome(map(_, append2(blockedRequest.blockedRequest)), () => of2(blockedRequest.blockedRequest))));
var parallelCollectionCombine = (self, that) => new ParallelImpl(reduce7(self.map, that.map, (map25, value3, key) => set4(map25, key, match(get8(map25, key), {
  onNone: () => value3,
  onSome: (other) => appendAll2(value3, other)
}))));
var parallelCollectionIsEmpty = (self) => isEmpty3(self.map);
var parallelCollectionKeys = (self) => Array.from(keys3(self.map));
var parallelCollectionToSequentialCollection = (self) => sequentialCollectionMake(map7(self.map, (x) => of2(x)));
var SequentialCollectionTypeId = /* @__PURE__ */ Symbol.for("effect/RequestBlock/RequestBlockSequential");
var sequentialVariance = {
  /* c8 ignore next */
  _R: (_) => _
};
var SequentialImpl = class {
  map;
  [SequentialCollectionTypeId] = sequentialVariance;
  constructor(map25) {
    this.map = map25;
  }
};
var sequentialCollectionMake = (map25) => new SequentialImpl(map25);
var sequentialCollectionCombine = (self, that) => new SequentialImpl(reduce7(that.map, self.map, (map25, value3, key) => set4(map25, key, match(get8(map25, key), {
  onNone: () => empty6(),
  onSome: (a) => appendAll2(a, value3)
}))));
var sequentialCollectionKeys = (self) => Array.from(keys3(self.map));
var sequentialCollectionToChunk = (self) => Array.from(self.map);

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/opCodes/cause.js
var OP_DIE = "Die";
var OP_EMPTY = "Empty";
var OP_FAIL = "Fail";
var OP_INTERRUPT = "Interrupt";
var OP_PARALLEL = "Parallel";
var OP_SEQUENTIAL = "Sequential";

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/cause.js
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
var empty18 = /* @__PURE__ */ (() => {
  const o = /* @__PURE__ */ Object.create(proto);
  o._tag = OP_EMPTY;
  return o;
})();
var fail = (error2) => {
  const o = Object.create(proto);
  o._tag = OP_FAIL;
  o.error = error2;
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
var isDieType = (self) => self._tag === OP_DIE;
var isEmpty5 = (self) => {
  if (self._tag === OP_EMPTY) {
    return true;
  }
  return reduce9(self, true, (acc, cause4) => {
    switch (cause4._tag) {
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
var failures = (self) => reverse2(reduce9(self, empty6(), (list2, cause4) => cause4._tag === OP_FAIL ? some2(pipe(list2, prepend2(cause4.error))) : none2()));
var defects = (self) => reverse2(reduce9(self, empty6(), (list2, cause4) => cause4._tag === OP_DIE ? some2(pipe(list2, prepend2(cause4.defect))) : none2()));
var interruptors = (self) => reduce9(self, empty9(), (set10, cause4) => cause4._tag === OP_INTERRUPT ? some2(pipe(set10, add4(cause4.fiberId))) : none2());
var failureOption = (self) => find(self, (cause4) => cause4._tag === OP_FAIL ? some2(cause4.error) : none2());
var failureOrCause = (self) => {
  const option4 = failureOption(self);
  switch (option4._tag) {
    case "None": {
      return right2(self);
    }
    case "Some": {
      return left2(option4.value);
    }
  }
};
var flipCauseOption = (self) => match4(self, {
  onEmpty: some2(empty18),
  onFail: (failureOption2) => pipe(failureOption2, map(fail)),
  onDie: (defect) => some2(die(defect)),
  onInterrupt: (fiberId3) => some2(interrupt(fiberId3)),
  onSequential: (left3, right3) => {
    if (isSome2(left3) && isSome2(right3)) {
      return some2(sequential(left3.value, right3.value));
    }
    if (isNone2(left3) && isSome2(right3)) {
      return some2(right3.value);
    }
    if (isSome2(left3) && isNone2(right3)) {
      return some2(left3.value);
    }
    return none2();
  },
  onParallel: (left3, right3) => {
    if (isSome2(left3) && isSome2(right3)) {
      return some2(parallel(left3.value, right3.value));
    }
    if (isNone2(left3) && isSome2(right3)) {
      return some2(right3.value);
    }
    if (isSome2(left3) && isNone2(right3)) {
      return some2(left3.value);
    }
    return none2();
  }
});
var interruptOption = (self) => find(self, (cause4) => cause4._tag === OP_INTERRUPT ? some2(cause4.fiberId) : none2());
var keepDefects = (self) => match4(self, {
  onEmpty: none2(),
  onFail: () => none2(),
  onDie: (defect) => some2(die(defect)),
  onInterrupt: () => none2(),
  onSequential: (left3, right3) => {
    if (isSome2(left3) && isSome2(right3)) {
      return some2(sequential(left3.value, right3.value));
    }
    if (isSome2(left3) && isNone2(right3)) {
      return some2(left3.value);
    }
    if (isNone2(left3) && isSome2(right3)) {
      return some2(right3.value);
    }
    return none2();
  },
  onParallel: (left3, right3) => {
    if (isSome2(left3) && isSome2(right3)) {
      return some2(parallel(left3.value, right3.value));
    }
    if (isSome2(left3) && isNone2(right3)) {
      return some2(left3.value);
    }
    if (isNone2(left3) && isSome2(right3)) {
      return some2(right3.value);
    }
    return none2();
  }
});
var keepDefectsAndElectFailures = (self) => match4(self, {
  onEmpty: none2(),
  onFail: (failure) => some2(die(failure)),
  onDie: (defect) => some2(die(defect)),
  onInterrupt: () => none2(),
  onSequential: (left3, right3) => {
    if (isSome2(left3) && isSome2(right3)) {
      return some2(sequential(left3.value, right3.value));
    }
    if (isSome2(left3) && isNone2(right3)) {
      return some2(left3.value);
    }
    if (isNone2(left3) && isSome2(right3)) {
      return some2(right3.value);
    }
    return none2();
  },
  onParallel: (left3, right3) => {
    if (isSome2(left3) && isSome2(right3)) {
      return some2(parallel(left3.value, right3.value));
    }
    if (isSome2(left3) && isNone2(right3)) {
      return some2(left3.value);
    }
    if (isNone2(left3) && isSome2(right3)) {
      return some2(right3.value);
    }
    return none2();
  }
});
var stripFailures = (self) => match4(self, {
  onEmpty: empty18,
  onFail: () => empty18,
  onDie: (defect) => die(defect),
  onInterrupt: (fiberId3) => interrupt(fiberId3),
  onSequential: sequential,
  onParallel: parallel
});
var electFailures = (self) => match4(self, {
  onEmpty: empty18,
  onFail: (failure) => die(failure),
  onDie: (defect) => die(defect),
  onInterrupt: (fiberId3) => interrupt(fiberId3),
  onSequential: (left3, right3) => sequential(left3, right3),
  onParallel: (left3, right3) => parallel(left3, right3)
});
var map9 = /* @__PURE__ */ dual(2, (self, f) => flatMap7(self, (e) => fail(f(e))));
var flatMap7 = /* @__PURE__ */ dual(2, (self, f) => match4(self, {
  onEmpty: empty18,
  onFail: (error2) => f(error2),
  onDie: (defect) => die(defect),
  onInterrupt: (fiberId3) => interrupt(fiberId3),
  onSequential: (left3, right3) => sequential(left3, right3),
  onParallel: (left3, right3) => parallel(left3, right3)
}));
var flatten5 = (self) => flatMap7(self, identity);
var causeEquals = (left3, right3) => {
  let leftStack = of2(left3);
  let rightStack = of2(right3);
  while (isNonEmpty(leftStack) && isNonEmpty(rightStack)) {
    const [leftParallel, leftSequential] = pipe(headNonEmpty2(leftStack), reduce9([empty9(), empty6()], ([parallel5, sequential5], cause4) => {
      const [par2, seq2] = evaluateCause(cause4);
      return some2([pipe(parallel5, union4(par2)), pipe(sequential5, appendAll2(seq2))]);
    }));
    const [rightParallel, rightSequential] = pipe(headNonEmpty2(rightStack), reduce9([empty9(), empty6()], ([parallel5, sequential5], cause4) => {
      const [par2, seq2] = evaluateCause(cause4);
      return some2([pipe(parallel5, union4(par2)), pipe(sequential5, appendAll2(seq2))]);
    }));
    if (!equals(leftParallel, rightParallel)) {
      return false;
    }
    leftStack = leftSequential;
    rightStack = rightSequential;
  }
  return true;
};
var flattenCause = (cause4) => {
  return flattenCauseLoop(of2(cause4), empty6());
};
var flattenCauseLoop = (causes, flattened) => {
  while (1) {
    const [parallel5, sequential5] = pipe(causes, reduce2([empty9(), empty6()], ([parallel6, sequential6], cause4) => {
      const [par2, seq2] = evaluateCause(cause4);
      return [pipe(parallel6, union4(par2)), pipe(sequential6, appendAll2(seq2))];
    }));
    const updated = size4(parallel5) > 0 ? pipe(flattened, prepend2(parallel5)) : flattened;
    if (isEmpty(sequential5)) {
      return reverse2(updated);
    }
    causes = sequential5;
    flattened = updated;
  }
  throw new Error("BUG: Cause.flattenCauseLoop - please report an issue at https://github.com/Effect-TS/effect/issues");
};
var find = /* @__PURE__ */ dual(2, (self, pf) => {
  const stack = [self];
  while (stack.length > 0) {
    const item = stack.pop();
    const option4 = pf(item);
    switch (option4._tag) {
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
        return option4;
      }
    }
  }
  return none2();
});
var evaluateCause = (self) => {
  let cause4 = self;
  const stack = [];
  let _parallel = empty9();
  let _sequential = empty6();
  while (cause4 !== void 0) {
    switch (cause4._tag) {
      case OP_EMPTY: {
        if (stack.length === 0) {
          return [_parallel, _sequential];
        }
        cause4 = stack.pop();
        break;
      }
      case OP_FAIL: {
        _parallel = add4(_parallel, cause4.error);
        if (stack.length === 0) {
          return [_parallel, _sequential];
        }
        cause4 = stack.pop();
        break;
      }
      case OP_DIE: {
        _parallel = add4(_parallel, cause4.defect);
        if (stack.length === 0) {
          return [_parallel, _sequential];
        }
        cause4 = stack.pop();
        break;
      }
      case OP_INTERRUPT: {
        _parallel = add4(_parallel, cause4.fiberId);
        if (stack.length === 0) {
          return [_parallel, _sequential];
        }
        cause4 = stack.pop();
        break;
      }
      case OP_SEQUENTIAL: {
        switch (cause4.left._tag) {
          case OP_EMPTY: {
            cause4 = cause4.right;
            break;
          }
          case OP_SEQUENTIAL: {
            cause4 = sequential(cause4.left.left, sequential(cause4.left.right, cause4.right));
            break;
          }
          case OP_PARALLEL: {
            cause4 = parallel(sequential(cause4.left.left, cause4.right), sequential(cause4.left.right, cause4.right));
            break;
          }
          default: {
            _sequential = prepend2(_sequential, cause4.right);
            cause4 = cause4.left;
            break;
          }
        }
        break;
      }
      case OP_PARALLEL: {
        stack.push(cause4.right);
        cause4 = cause4.left;
        break;
      }
    }
  }
  throw new Error("BUG: Cause.evaluateCauseLoop - please report an issue at https://github.com/Effect-TS/effect/issues");
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
var match4 = /* @__PURE__ */ dual(2, (self, {
  onDie,
  onEmpty,
  onFail,
  onInterrupt: onInterrupt3,
  onParallel,
  onSequential
}) => {
  return reduceWithContext(self, void 0, {
    emptyCase: () => onEmpty,
    failCase: (_, error2) => onFail(error2),
    dieCase: (_, defect) => onDie(defect),
    interruptCase: (_, fiberId3) => onInterrupt3(fiberId3),
    sequentialCase: (_, left3, right3) => onSequential(left3, right3),
    parallelCase: (_, left3, right3) => onParallel(left3, right3)
  });
});
var reduce9 = /* @__PURE__ */ dual(3, (self, zero3, pf) => {
  let accumulator = zero3;
  let cause4 = self;
  const causes = [];
  while (cause4 !== void 0) {
    const option4 = pf(accumulator, cause4);
    accumulator = isSome2(option4) ? option4.value : accumulator;
    switch (cause4._tag) {
      case OP_SEQUENTIAL: {
        causes.push(cause4.right);
        cause4 = cause4.left;
        break;
      }
      case OP_PARALLEL: {
        causes.push(cause4.right);
        cause4 = cause4.left;
        break;
      }
      default: {
        cause4 = void 0;
        break;
      }
    }
    if (cause4 === void 0 && causes.length > 0) {
      cause4 = causes.pop();
    }
  }
  return accumulator;
});
var reduceWithContext = /* @__PURE__ */ dual(3, (self, context7, reducer) => {
  const input = [self];
  const output = [];
  while (input.length > 0) {
    const cause4 = input.pop();
    switch (cause4._tag) {
      case OP_EMPTY: {
        output.push(right2(reducer.emptyCase(context7)));
        break;
      }
      case OP_FAIL: {
        output.push(right2(reducer.failCase(context7, cause4.error)));
        break;
      }
      case OP_DIE: {
        output.push(right2(reducer.dieCase(context7, cause4.defect)));
        break;
      }
      case OP_INTERRUPT: {
        output.push(right2(reducer.interruptCase(context7, cause4.fiberId)));
        break;
      }
      case OP_SEQUENTIAL: {
        input.push(cause4.right);
        input.push(cause4.left);
        output.push(left2({
          _tag: OP_SEQUENTIAL_CASE
        }));
        break;
      }
      case OP_PARALLEL: {
        input.push(cause4.right);
        input.push(cause4.left);
        output.push(left2({
          _tag: OP_PARALLEL_CASE
        }));
        break;
      }
    }
  }
  const accumulator = [];
  while (output.length > 0) {
    const either8 = output.pop();
    switch (either8._tag) {
      case "Left": {
        switch (either8.left._tag) {
          case OP_SEQUENTIAL_CASE: {
            const left3 = accumulator.pop();
            const right3 = accumulator.pop();
            const value3 = reducer.sequentialCase(context7, left3, right3);
            accumulator.push(value3);
            break;
          }
          case OP_PARALLEL_CASE: {
            const left3 = accumulator.pop();
            const right3 = accumulator.pop();
            const value3 = reducer.parallelCase(context7, left3, right3);
            accumulator.push(value3);
            break;
          }
        }
        break;
      }
      case "Right": {
        accumulator.push(either8.right);
        break;
      }
    }
  }
  if (accumulator.length === 0) {
    throw new Error("BUG: Cause.reduceWithContext - please report an issue at https://github.com/Effect-TS/effect/issues");
  }
  return accumulator.pop();
});
var filterStack = (stack) => {
  const lines = stack.split("\n");
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    out.push(lines[i].replace(/at .*effect_instruction_i.*\((.*)\)/, "at $1"));
    if (lines[i].includes("effect_instruction_i")) {
      return out.join("\n");
    }
  }
  return out.join("\n");
};
var pretty = (cause4) => {
  if (isInterruptedOnly(cause4)) {
    return "All fibers interrupted without errors.";
  }
  const final = prettyErrors(cause4).map((e) => {
    let message2 = e.message;
    if (e.stack) {
      message2 += `\r
${filterStack(e.stack)}`;
    }
    if (e.span) {
      let current2 = e.span;
      let i = 0;
      while (current2 && current2._tag === "Span" && i < 10) {
        message2 += `\r
    at ${current2.name}`;
        current2 = getOrUndefined(current2.parent);
        i++;
      }
    }
    return message2;
  }).join("\r\n");
  return final;
};
var PrettyError = class {
  message;
  stack;
  span;
  constructor(message2, stack, span4) {
    this.message = message2;
    this.stack = stack;
    this.span = span4;
  }
  toJSON() {
    const out = {
      message: this.message
    };
    if (this.stack) {
      out.stack = this.stack;
    }
    if (this.span) {
      out.span = this.span;
    }
    return out;
  }
};
var prettyErrorMessage = (u) => {
  if (typeof u === "string") {
    return `Error: ${u}`;
  }
  try {
    if (hasProperty(u, "toString") && isFunction2(u["toString"]) && u["toString"] !== Object.prototype.toString && u["toString"] !== Array.prototype.toString) {
      return u["toString"]();
    }
  } catch {
  }
  return `Error: ${JSON.stringify(u)}`;
};
var spanSymbol = /* @__PURE__ */ Symbol.for("effect/SpanAnnotation");
var defaultRenderError = (error2) => {
  const span4 = hasProperty(error2, spanSymbol) && error2[spanSymbol];
  if (error2 instanceof Error) {
    return new PrettyError(prettyErrorMessage(error2), error2.stack?.split("\n").filter((_) => _.match(/at (.*)/)).join("\n"), span4);
  }
  return new PrettyError(prettyErrorMessage(error2), void 0, span4);
};
var prettyErrors = (cause4) => reduceWithContext(cause4, void 0, {
  emptyCase: () => [],
  dieCase: (_, unknownError) => {
    return [defaultRenderError(unknownError)];
  },
  failCase: (_, error2) => {
    return [defaultRenderError(error2)];
  },
  interruptCase: () => [],
  parallelCase: (_, l, r) => [...l, ...r],
  sequentialCase: (_, l, r) => [...l, ...r]
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/opCodes/deferred.js
var OP_STATE_PENDING = "Pending";
var OP_STATE_DONE = "Done";

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/deferred.js
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
var done = (effect3) => {
  return {
    _tag: OP_STATE_DONE,
    effect: effect3
  };
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/tracer.js
var TracerTypeId = /* @__PURE__ */ Symbol.for("effect/Tracer");
var make19 = (options) => ({
  [TracerTypeId]: TracerTypeId,
  ...options
});
var tracerTag = /* @__PURE__ */ GenericTag("effect/Tracer");
var spanTag = /* @__PURE__ */ GenericTag("effect/ParentSpan");
var randomString = /* @__PURE__ */ function() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  return function(length5) {
    let result = "";
    for (let i = 0; i < length5; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
}();
var NativeSpan = class {
  name;
  parent;
  context;
  links;
  startTime;
  _tag = "Span";
  spanId;
  traceId = "native";
  sampled = true;
  status;
  attributes;
  events = [];
  constructor(name, parent2, context7, links, startTime) {
    this.name = name;
    this.parent = parent2;
    this.context = context7;
    this.links = links;
    this.startTime = startTime;
    this.status = {
      _tag: "Started",
      startTime
    };
    this.attributes = /* @__PURE__ */ new Map();
    this.spanId = `span${randomString(16)}`;
  }
  end(endTime, exit4) {
    this.status = {
      _tag: "Ended",
      endTime,
      exit: exit4,
      startTime: this.status.startTime
    };
  }
  attribute(key, value3) {
    this.attributes.set(key, value3);
  }
  event(name, startTime, attributes) {
    this.events.push([name, startTime, attributes ?? {}]);
  }
};
var nativeTracer = /* @__PURE__ */ make19({
  span: (name, parent2, context7, links, startTime) => new NativeSpan(name, parent2, context7, links, startTime),
  context: (f) => f()
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/core.js
var EffectErrorSymbolKey = "effect/EffectError";
var EffectErrorTypeId = /* @__PURE__ */ Symbol.for(EffectErrorSymbolKey);
var isEffectError = (u) => hasProperty(u, EffectErrorTypeId);
var makeEffectError = (cause4) => ({
  [EffectErrorTypeId]: EffectErrorTypeId,
  _tag: "EffectError",
  cause: cause4
});
var blocked = (blockedRequests, _continue3) => {
  const effect3 = new EffectPrimitive("Blocked");
  effect3.effect_instruction_i0 = blockedRequests;
  effect3.effect_instruction_i1 = _continue3;
  return effect3;
};
var runRequestBlock = (blockedRequests) => {
  const effect3 = new EffectPrimitive("RunBlocked");
  effect3.effect_instruction_i0 = blockedRequests;
  return effect3;
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
    return this === that;
  }
  [symbol]() {
    return cached(this, random(this));
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
    return this === that;
  }
  [symbol]() {
    return cached(this, random(this));
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
};
var isEffect = (u) => hasProperty(u, EffectTypeId2);
var withFiberRuntime = (withRuntime) => {
  const effect3 = new EffectPrimitive(OP_WITH_RUNTIME);
  effect3.effect_instruction_i0 = withRuntime;
  return effect3;
};
var acquireUseRelease = /* @__PURE__ */ dual(3, (acquire, use2, release) => uninterruptibleMask((restore) => flatMap8(acquire, (a) => flatMap8(exit(suspend(() => restore(use2(a)))), (exit4) => {
  return suspend(() => release(a, exit4)).pipe(matchCauseEffect({
    onFailure: (cause4) => {
      switch (exit4._tag) {
        case OP_FAILURE:
          return failCause(parallel(exit4.effect_instruction_i0, cause4));
        case OP_SUCCESS:
          return failCause(cause4);
      }
    },
    onSuccess: () => exit4
  }));
}))));
var as2 = /* @__PURE__ */ dual(2, (self, value3) => flatMap8(self, () => succeed(value3)));
var asUnit2 = (self) => as2(self, void 0);
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
      throw new Error("Bug, you're not supposed to end up here");
    }
  }
  return wrapper;
};
var async = (register, blockingOn = none4) => {
  return custom(register, function() {
    let backingResume = void 0;
    let pendingEffect = void 0;
    function proxyResume(effect4) {
      if (backingResume) {
        backingResume(effect4);
      } else if (pendingEffect === void 0) {
        pendingEffect = effect4;
      }
    }
    const effect3 = new EffectPrimitive(OP_ASYNC);
    effect3.effect_instruction_i0 = (resume2) => {
      backingResume = resume2;
      if (pendingEffect) {
        resume2(pendingEffect);
      }
    };
    effect3.effect_instruction_i1 = blockingOn;
    let cancelerRef = void 0;
    let controllerRef = void 0;
    if (this.effect_instruction_i0.length !== 1) {
      controllerRef = new AbortController();
      cancelerRef = this.effect_instruction_i0(proxyResume, controllerRef.signal);
    } else {
      cancelerRef = this.effect_instruction_i0(proxyResume);
    }
    return cancelerRef || controllerRef ? onInterrupt(effect3, (_) => {
      if (controllerRef) {
        controllerRef.abort();
      }
      return cancelerRef ?? unit2;
    }) : effect3;
  });
};
var catchAllCause = /* @__PURE__ */ dual(2, (self, f) => {
  const effect3 = new EffectPrimitive(OP_ON_FAILURE);
  effect3.effect_instruction_i0 = self;
  effect3.effect_instruction_i1 = f;
  return effect3;
});
var catchAll = /* @__PURE__ */ dual(2, (self, f) => matchEffect(self, {
  onFailure: f,
  onSuccess: succeed
}));
var catchIf = /* @__PURE__ */ dual(3, (self, predicate, f) => catchAllCause(self, (cause4) => {
  const either8 = failureOrCause(cause4);
  switch (either8._tag) {
    case "Left":
      return predicate(either8.left) ? f(either8.left) : failCause(cause4);
    case "Right":
      return failCause(either8.right);
  }
}));
var catchSome = /* @__PURE__ */ dual(2, (self, pf) => catchAllCause(self, (cause4) => {
  const either8 = failureOrCause(cause4);
  switch (either8._tag) {
    case "Left":
      return pipe(pf(either8.left), getOrElse(() => failCause(cause4)));
    case "Right":
      return failCause(either8.right);
  }
}));
var checkInterruptible = (f) => withFiberRuntime((_, status2) => f(interruption(status2.runtimeFlags)));
var spanSymbol2 = /* @__PURE__ */ Symbol.for("effect/SpanAnnotation");
var originalSymbol = /* @__PURE__ */ Symbol.for("effect/OriginalAnnotation");
var capture = (obj, span4) => {
  if (isSome2(span4)) {
    return new Proxy(obj, {
      has(target, p) {
        return p === spanSymbol2 || p === originalSymbol || p in target;
      },
      get(target, p) {
        if (p === spanSymbol2) {
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
var die2 = (defect) => isObject(defect) && !(spanSymbol2 in defect) ? withFiberRuntime((fiber) => failCause(die(capture(defect, currentSpanFromFiber(fiber))))) : failCause(die(defect));
var dieMessage = (message2) => failCauseSync(() => die(new RuntimeException(message2)));
var dieSync = (evaluate2) => flatMap8(sync(evaluate2), die2);
var either2 = (self) => matchEffect(self, {
  onFailure: (e) => succeed(left2(e)),
  onSuccess: (a) => succeed(right2(a))
});
var exit = (self) => matchCause(self, {
  onFailure: exitFailCause,
  onSuccess: exitSucceed
});
var fail2 = (error2) => isObject(error2) && !(spanSymbol2 in error2) ? withFiberRuntime((fiber) => failCause(fail(capture(error2, currentSpanFromFiber(fiber))))) : failCause(fail(error2));
var failSync = (evaluate2) => flatMap8(sync(evaluate2), fail2);
var failCause = (cause4) => {
  const effect3 = new EffectPrimitiveFailure(OP_FAILURE);
  effect3.effect_instruction_i0 = cause4;
  return effect3;
};
var failCauseSync = (evaluate2) => flatMap8(sync(evaluate2), failCause);
var fiberId = /* @__PURE__ */ withFiberRuntime((state) => succeed(state.id()));
var fiberIdWith = (f) => withFiberRuntime((state) => f(state.id()));
var flatMap8 = /* @__PURE__ */ dual(2, (self, f) => {
  const effect3 = new EffectPrimitive(OP_ON_SUCCESS);
  effect3.effect_instruction_i0 = self;
  effect3.effect_instruction_i1 = f;
  return effect3;
});
var andThen3 = /* @__PURE__ */ dual(2, (self, f) => flatMap8(self, (a) => {
  const b = typeof f === "function" ? f(a) : f;
  if (isEffect(b)) {
    return b;
  } else if (isPromiseLike(b)) {
    return async((resume2) => {
      b.then((a2) => resume2(succeed(a2)), (e) => resume2(fail2(new UnknownException(e))));
    });
  }
  return succeed(b);
}));
var step2 = (self) => {
  const effect3 = new EffectPrimitive("OnStep");
  effect3.effect_instruction_i0 = self;
  return effect3;
};
var flatten6 = (self) => flatMap8(self, identity);
var flip = (self) => matchEffect(self, {
  onFailure: succeed,
  onSuccess: fail2
});
var matchCause = /* @__PURE__ */ dual(2, (self, options) => matchCauseEffect(self, {
  onFailure: (cause4) => succeed(options.onFailure(cause4)),
  onSuccess: (a) => succeed(options.onSuccess(a))
}));
var matchCauseEffect = /* @__PURE__ */ dual(2, (self, options) => {
  const effect3 = new EffectPrimitive(OP_ON_SUCCESS_AND_FAILURE);
  effect3.effect_instruction_i0 = self;
  effect3.effect_instruction_i1 = options.onFailure;
  effect3.effect_instruction_i2 = options.onSuccess;
  return effect3;
});
var matchEffect = /* @__PURE__ */ dual(2, (self, options) => matchCauseEffect(self, {
  onFailure: (cause4) => {
    const defects2 = defects(cause4);
    if (defects2.length > 0) {
      return failCause(electFailures(cause4));
    }
    const failures2 = failures(cause4);
    if (failures2.length > 0) {
      return options.onFailure(unsafeHead(failures2));
    }
    return failCause(cause4);
  },
  onSuccess: options.onSuccess
}));
var forEachSequential = /* @__PURE__ */ dual(2, (self, f) => suspend(() => {
  const arr = fromIterable2(self);
  const ret = new Array(arr.length);
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
var if_ = /* @__PURE__ */ dual((args) => typeof args[0] === "boolean" || isEffect(args[0]), (self, {
  onFalse,
  onTrue
}) => isEffect(self) ? flatMap8(self, (b) => b ? onTrue : onFalse) : Boolean(self) ? onTrue : onFalse);
var interrupt2 = /* @__PURE__ */ flatMap8(fiberId, (fiberId3) => interruptWith(fiberId3));
var interruptWith = (fiberId3) => failCause(interrupt(fiberId3));
var interruptible2 = (self) => {
  const effect3 = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
  effect3.effect_instruction_i0 = enable3(Interruption);
  effect3.effect_instruction_i1 = () => self;
  return effect3;
};
var interruptibleMask = (f) => custom(f, function() {
  const effect3 = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
  effect3.effect_instruction_i0 = enable3(Interruption);
  effect3.effect_instruction_i1 = (oldFlags) => interruption(oldFlags) ? this.effect_instruction_i0(interruptible2) : this.effect_instruction_i0(uninterruptible);
  return effect3;
});
var intoDeferred = /* @__PURE__ */ dual(2, (self, deferred) => uninterruptibleMask((restore) => flatMap8(exit(restore(self)), (exit4) => deferredDone(deferred, exit4))));
var map10 = /* @__PURE__ */ dual(2, (self, f) => flatMap8(self, (a) => sync(() => f(a))));
var mapBoth = /* @__PURE__ */ dual(2, (self, options) => matchEffect(self, {
  onFailure: (e) => failSync(() => options.onFailure(e)),
  onSuccess: (a) => sync(() => options.onSuccess(a))
}));
var mapError = /* @__PURE__ */ dual(2, (self, f) => matchCauseEffect(self, {
  onFailure: (cause4) => {
    const either8 = failureOrCause(cause4);
    switch (either8._tag) {
      case "Left": {
        return failSync(() => f(either8.left));
      }
      case "Right": {
        return failCause(either8.right);
      }
    }
  },
  onSuccess: succeed
}));
var onError = /* @__PURE__ */ dual(2, (self, cleanup) => onExit(self, (exit4) => exitIsSuccess(exit4) ? unit2 : cleanup(exit4.effect_instruction_i0)));
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
  onFailure: (cause4) => isInterruptedOnly(cause4) ? asUnit2(cleanup(interruptors(cause4))) : unit2,
  onSuccess: () => unit2
})));
var orElse2 = /* @__PURE__ */ dual(2, (self, that) => attemptOrElse(self, that, succeed));
var orDie = (self) => orDieWith(self, identity);
var orDieWith = /* @__PURE__ */ dual(2, (self, f) => matchEffect(self, {
  onFailure: (e) => die2(f(e)),
  onSuccess: succeed
}));
var partitionMap4 = (elements, f) => fromIterable2(elements).reduceRight(([lefts, rights], current2) => {
  const either8 = f(current2);
  switch (either8._tag) {
    case "Left": {
      return [[either8.left, ...lefts], rights];
    }
    case "Right": {
      return [lefts, [either8.right, ...rights]];
    }
  }
}, [new Array(), new Array()]);
var runtimeFlags = /* @__PURE__ */ withFiberRuntime((_, status2) => succeed(status2.runtimeFlags));
var succeed = (value3) => {
  const effect3 = new EffectPrimitiveSuccess(OP_SUCCESS);
  effect3.effect_instruction_i0 = value3;
  return effect3;
};
var suspend = (effect3) => flatMap8(sync(effect3), identity);
var sync = (evaluate2) => {
  const effect3 = new EffectPrimitive(OP_SYNC);
  effect3.effect_instruction_i0 = evaluate2;
  return effect3;
};
var tap2 = /* @__PURE__ */ dual(2, (self, f) => flatMap8(self, (a) => {
  const b = typeof f === "function" ? f(a) : f;
  if (isEffect(b)) {
    return as2(b, a);
  } else if (isPromiseLike(b)) {
    return async((resume2) => {
      b.then((_) => resume2(succeed(a)), (e) => resume2(fail2(new UnknownException(e))));
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
  onFailure: (cause4) => {
    const defects2 = defects(cause4);
    if (defects2.length > 0) {
      return failCause(getOrThrow(keepDefectsAndElectFailures(cause4)));
    }
    return that();
  },
  onSuccess
}));
var uninterruptible = (self) => {
  const effect3 = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
  effect3.effect_instruction_i0 = disable2(Interruption);
  effect3.effect_instruction_i1 = () => self;
  return effect3;
};
var uninterruptibleMask = (f) => custom(f, function() {
  const effect3 = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
  effect3.effect_instruction_i0 = disable2(Interruption);
  effect3.effect_instruction_i1 = (oldFlags) => interruption(oldFlags) ? this.effect_instruction_i0(interruptible2) : this.effect_instruction_i0(uninterruptible);
  return effect3;
});
var unit2 = /* @__PURE__ */ succeed(void 0);
var updateRuntimeFlags = (patch9) => {
  const effect3 = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
  effect3.effect_instruction_i0 = patch9;
  effect3.effect_instruction_i1 = void 0;
  return effect3;
};
var whenEffect = /* @__PURE__ */ dual(2, (self, condition) => flatMap8(condition, (b) => {
  if (b) {
    return pipe(self, map10(some2));
  }
  return succeed(none2());
}));
var whileLoop = (options) => {
  const effect3 = new EffectPrimitive(OP_WHILE);
  effect3.effect_instruction_i0 = options.while;
  effect3.effect_instruction_i1 = options.body;
  effect3.effect_instruction_i2 = options.step;
  return effect3;
};
var withConcurrency = /* @__PURE__ */ dual(2, (self, concurrency2) => fiberRefLocally(self, currentConcurrency, concurrency2));
var withRequestBatching = /* @__PURE__ */ dual(2, (self, requestBatching) => fiberRefLocally(self, currentRequestBatching, requestBatching));
var withRuntimeFlags = /* @__PURE__ */ dual(2, (self, update6) => {
  const effect3 = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
  effect3.effect_instruction_i0 = update6;
  effect3.effect_instruction_i1 = () => self;
  return effect3;
});
var withTracerEnabled = /* @__PURE__ */ dual(2, (effect3, enabled2) => fiberRefLocally(effect3, currentTracerEnabled, enabled2));
var withTracerTiming = /* @__PURE__ */ dual(2, (effect3, enabled2) => fiberRefLocally(effect3, currentTracerTimingEnabled, enabled2));
var yieldNow = (options) => {
  const effect3 = new EffectPrimitive(OP_YIELD);
  return typeof options?.priority !== "undefined" ? withSchedulingPriority(effect3, options.priority) : effect3;
};
var zip2 = /* @__PURE__ */ dual(2, (self, that) => flatMap8(self, (a) => map10(that, (b) => [a, b])));
var zipLeft2 = /* @__PURE__ */ dual(2, (self, that) => flatMap8(self, (a) => as2(that, a)));
var zipRight2 = /* @__PURE__ */ dual(2, (self, that) => flatMap8(self, () => that));
var zipWith4 = /* @__PURE__ */ dual(3, (self, that, f) => flatMap8(self, (a) => map10(that, (b) => f(a, b))));
var never = /* @__PURE__ */ async(() => {
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
var fiberRefGet = (self) => fiberRefModify(self, (a) => [a, a]);
var fiberRefGetWith = /* @__PURE__ */ dual(2, (self, f) => flatMap8(fiberRefGet(self), f));
var fiberRefSet = /* @__PURE__ */ dual(2, (self, value3) => fiberRefModify(self, () => [void 0, value3]));
var fiberRefModify = /* @__PURE__ */ dual(2, (self, f) => withFiberRuntime((state) => {
  const [b, a] = f(state.getFiberRef(self));
  state.setFiberRef(self, a);
  return succeed(b);
}));
var fiberRefLocally = /* @__PURE__ */ dual(3, (use2, self, value3) => acquireUseRelease(zipLeft2(fiberRefGet(self), fiberRefSet(self, value3)), () => use2, (oldValue) => fiberRefSet(self, oldValue)));
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
var fiberRefUnsafeMakePatch = (initial, options) => ({
  [FiberRefTypeId]: fiberRefVariance,
  initial,
  diff: (oldValue, newValue) => options.differ.diff(oldValue, newValue),
  combine: (first2, second) => options.differ.combine(first2, second),
  patch: (patch9) => (oldValue) => options.differ.patch(patch9, oldValue),
  fork: options.fork,
  join: options.join ?? ((_, n) => n),
  pipe() {
    return pipeArguments(this, arguments);
  }
});
var fiberRefUnsafeMakeRuntimeFlags = (initial) => fiberRefUnsafeMakePatch(initial, {
  differ,
  fork: differ.empty
});
var currentContext = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentContext"), () => fiberRefUnsafeMakeContext(empty5()));
var currentSchedulingPriority = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentSchedulingPriority"), () => fiberRefUnsafeMake(0));
var currentMaxOpsBeforeYield = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentMaxOpsBeforeYield"), () => fiberRefUnsafeMake(2048));
var currentLogAnnotations = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentLogAnnotation"), () => fiberRefUnsafeMake(empty10()));
var currentLogLevel = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentLogLevel"), () => fiberRefUnsafeMake(logLevelInfo));
var currentLogSpan = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentLogSpan"), () => fiberRefUnsafeMake(empty11()));
var withSchedulingPriority = /* @__PURE__ */ dual(2, (self, scheduler) => fiberRefLocally(self, currentSchedulingPriority, scheduler));
var withMaxOpsBeforeYield = /* @__PURE__ */ dual(2, (self, scheduler) => fiberRefLocally(self, currentMaxOpsBeforeYield, scheduler));
var currentConcurrency = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentConcurrency"), () => fiberRefUnsafeMake("unbounded"));
var currentRequestBatching = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentRequestBatching"), () => fiberRefUnsafeMake(true));
var currentUnhandledErrorLogLevel = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentUnhandledErrorLogLevel"), () => fiberRefUnsafeMake(some2(logLevelDebug)));
var withUnhandledErrorLogLevel = /* @__PURE__ */ dual(2, (self, level) => fiberRefLocally(self, currentUnhandledErrorLogLevel, level));
var currentMetricLabels = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentMetricLabels"), () => fiberRefUnsafeMakeReadonlyArray(empty3()));
var metricLabels = /* @__PURE__ */ fiberRefGet(currentMetricLabels);
var currentForkScopeOverride = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentForkScopeOverride"), () => fiberRefUnsafeMake(none2(), {
  fork: () => none2(),
  join: (parent2, _) => parent2
}));
var currentInterruptedCause = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentInterruptedCause"), () => fiberRefUnsafeMake(empty18, {
  fork: () => empty18,
  join: (parent2, _) => parent2
}));
var currentTracerEnabled = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentTracerEnabled"), () => fiberRefUnsafeMake(true));
var currentTracerTimingEnabled = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentTracerTiming"), () => fiberRefUnsafeMake(true));
var currentTracerSpanAnnotations = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentTracerSpanAnnotations"), () => fiberRefUnsafeMake(empty10()));
var currentTracerSpanLinks = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentTracerSpanLinks"), () => fiberRefUnsafeMake(empty6()));
var ScopeTypeId = /* @__PURE__ */ Symbol.for("effect/Scope");
var CloseableScopeTypeId = /* @__PURE__ */ Symbol.for("effect/CloseableScope");
var scopeAddFinalizer = (self, finalizer3) => self.addFinalizer(() => asUnit2(finalizer3));
var scopeAddFinalizerExit = (self, finalizer3) => self.addFinalizer(finalizer3);
var scopeClose = (self, exit4) => self.close(exit4);
var scopeFork = (self, strategy) => self.fork(strategy);
var releaseMapAdd = /* @__PURE__ */ dual(2, (self, finalizer3) => map10(releaseMapAddIfOpen(self, finalizer3), match({
  onNone: () => () => unit2,
  onSome: (key) => (exit4) => releaseMapRelease(key, exit4)(self)
})));
var releaseMapRelease = /* @__PURE__ */ dual(3, (self, key, exit4) => suspend(() => {
  switch (self.state._tag) {
    case "Exited": {
      return unit2;
    }
    case "Running": {
      const finalizer3 = self.state.finalizers.get(key);
      self.state.finalizers.delete(key);
      if (finalizer3 != null) {
        return self.state.update(finalizer3)(exit4);
      }
      return unit2;
    }
  }
}));
var releaseMapAddIfOpen = /* @__PURE__ */ dual(2, (self, finalizer3) => suspend(() => {
  switch (self.state._tag) {
    case "Exited": {
      self.state.nextKey += 1;
      return as2(finalizer3(self.state.exit), none2());
    }
    case "Running": {
      const key = self.state.nextKey;
      self.state.finalizers.set(key, finalizer3);
      self.state.nextKey += 1;
      return succeed(some2(key));
    }
  }
}));
var releaseMapMake = /* @__PURE__ */ sync(() => ({
  state: {
    _tag: "Running",
    nextKey: 0,
    finalizers: /* @__PURE__ */ new Map(),
    update: identity
  }
}));
var causeSquash = (self) => {
  return causeSquashWith(identity)(self);
};
var causeSquashWith = /* @__PURE__ */ dual(2, (self, f) => {
  const option4 = pipe(self, failureOption, map(f));
  switch (option4._tag) {
    case "None": {
      return pipe(defects(self), head2, match({
        onNone: () => {
          const interrupts = Array.from(interruptors(self)).flatMap((fiberId3) => Array.from(ids2(fiberId3)).map((id2) => `#${id2}`));
          return new InterruptedException(interrupts ? `Interrupted by fibers: ${interrupts.join(", ")}` : void 0);
        },
        onSome: identity
      }));
    }
    case "Some": {
      return option4.value;
    }
  }
});
var YieldableError = /* @__PURE__ */ function() {
  class YieldableError2 extends globalThis.Error {
    commit() {
      return fail2(this);
    }
    toString() {
      return this.message ? `${this.name}: ${this.message}` : this.name;
    }
    toJSON() {
      return {
        ...this
      };
    }
    [NodeInspectSymbol]() {
      const stack = this.stack;
      if (stack) {
        return `${this.toString()}
${stack.split("\n").slice(1).join("\n")}`;
      }
      return this.toString();
    }
  }
  Object.assign(YieldableError2.prototype, StructuralCommitPrototype);
  return YieldableError2;
}();
var makeException = (proto13, tag2) => {
  class Base2 extends YieldableError {
    _tag = tag2;
  }
  Object.assign(Base2.prototype, proto13);
  Base2.prototype.name = tag2;
  return Base2;
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
var UnknownExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Cause/errors/UnknownException");
var UnknownException = /* @__PURE__ */ function() {
  class UnknownException2 extends YieldableError {
    error;
    _tag = "UnknownException";
    constructor(error2, message2) {
      super(message2 ?? (hasProperty(error2, "message") && isString(error2.message) ? error2.message : void 0));
      this.error = error2;
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
var exitAs = /* @__PURE__ */ dual(2, (self, value3) => {
  switch (self._tag) {
    case OP_FAILURE: {
      return exitFailCause(self.effect_instruction_i0);
    }
    case OP_SUCCESS: {
      return exitSucceed(value3);
    }
  }
});
var exitAsUnit = (self) => exitAs(self, void 0);
var exitCollectAll = (exits, options) => exitCollectAllInternal(exits, options?.parallel ? parallel : sequential);
var exitDie = (defect) => exitFailCause(die(defect));
var exitFail = (error2) => exitFailCause(fail(error2));
var exitFailCause = (cause4) => {
  const effect3 = new EffectPrimitiveFailure(OP_FAILURE);
  effect3.effect_instruction_i0 = cause4;
  return effect3;
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
      return exitFailCause(pipe(self.effect_instruction_i0, map9(onFailure)));
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
var exitSucceed = (value3) => {
  const effect3 = new EffectPrimitiveSuccess(OP_SUCCESS);
  effect3.effect_instruction_i0 = value3;
  return effect3;
};
var exitUnit = /* @__PURE__ */ exitSucceed(void 0);
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
  const list2 = fromIterable3(exits);
  if (!isNonEmpty(list2)) {
    return none2();
  }
  return pipe(tailNonEmpty2(list2), reduce2(pipe(headNonEmpty2(list2), exitMap(of2)), (accumulator, current2) => pipe(accumulator, exitZipWith(current2, {
    onSuccess: (list3, value3) => pipe(list3, prepend2(value3)),
    onFailure: combineCauses
  }))), exitMap(reverse2), exitMap((chunk4) => Array.from(chunk4)), some2);
};
var deferredUnsafeMake = (fiberId3) => ({
  [DeferredTypeId]: deferredVariance,
  state: make12(pending([])),
  blockingOn: fiberId3,
  pipe() {
    return pipeArguments(this, arguments);
  }
});
var deferredMake = () => flatMap8(fiberId, (id2) => deferredMakeAs(id2));
var deferredMakeAs = (fiberId3) => sync(() => deferredUnsafeMake(fiberId3));
var deferredAwait = (self) => async((resume2) => {
  const state = get7(self.state);
  switch (state._tag) {
    case OP_STATE_DONE: {
      return resume2(state.effect);
    }
    case OP_STATE_PENDING: {
      pipe(self.state, set3(pending([resume2, ...state.joiners])));
      return deferredInterruptJoiner(self, resume2);
    }
  }
}, self.blockingOn);
var deferredComplete = /* @__PURE__ */ dual(2, (self, effect3) => intoDeferred(effect3, self));
var deferredCompleteWith = /* @__PURE__ */ dual(2, (self, effect3) => sync(() => {
  const state = get7(self.state);
  switch (state._tag) {
    case OP_STATE_DONE: {
      return false;
    }
    case OP_STATE_PENDING: {
      pipe(self.state, set3(done(effect3)));
      for (let i = 0; i < state.joiners.length; i++) {
        state.joiners[i](effect3);
      }
      return true;
    }
  }
}));
var deferredDone = /* @__PURE__ */ dual(2, (self, exit4) => deferredCompleteWith(self, exit4));
var deferredFail = /* @__PURE__ */ dual(2, (self, error2) => deferredCompleteWith(self, fail2(error2)));
var deferredFailCause = /* @__PURE__ */ dual(2, (self, cause4) => deferredCompleteWith(self, failCause(cause4)));
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
var deferredSucceed = /* @__PURE__ */ dual(2, (self, value3) => deferredCompleteWith(self, succeed(value3)));
var deferredUnsafeDone = (self, effect3) => {
  const state = get7(self.state);
  if (state._tag === OP_STATE_PENDING) {
    pipe(self.state, set3(done(effect3)));
    for (let i = state.joiners.length - 1; i >= 0; i--) {
      state.joiners[i](effect3);
    }
  }
};
var deferredInterruptJoiner = (self, joiner) => sync(() => {
  const state = get7(self.state);
  if (state._tag === OP_STATE_PENDING) {
    pipe(self.state, set3(pending(state.joiners.filter((j) => j !== joiner))));
  }
});
var constContext = /* @__PURE__ */ fiberRefGet(currentContext);
var context = () => constContext;
var contextWithEffect = (f) => flatMap8(context(), f);
var provideContext = /* @__PURE__ */ dual(2, (self, context7) => fiberRefLocally(currentContext, context7)(self));
var provideSomeContext = /* @__PURE__ */ dual(2, (self, context7) => fiberRefLocallyWith(currentContext, (parent2) => merge3(parent2, context7))(self));
var mapInputContext = /* @__PURE__ */ dual(2, (self, f) => contextWithEffect((context7) => provideContext(self, f(context7))));
var currentSpanFromFiber = (fiber) => {
  const span4 = fiber.getFiberRef(currentContext).unsafeMap.get(spanTag.key);
  return span4 !== void 0 && span4._tag === "Span" ? some2(span4) : none2();
};
var NoopSpanProto = {
  _tag: "Span",
  spanId: "noop",
  traceId: "noop",
  name: "noop",
  sampled: false,
  parent: /* @__PURE__ */ none2(),
  context: /* @__PURE__ */ empty5(),
  status: {
    _tag: "Ended",
    startTime: /* @__PURE__ */ BigInt(0),
    endTime: /* @__PURE__ */ BigInt(0),
    exit: exitUnit
  },
  attributes: /* @__PURE__ */ new Map(),
  links: [],
  attribute() {
  },
  event() {
  },
  end() {
  }
};
var noopSpan = (name) => {
  const span4 = Object.create(NoopSpanProto);
  span4.name = name;
  return span4;
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Deferred.js
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Duration.js
var TypeId9 = /* @__PURE__ */ Symbol.for("effect/Duration");
var bigint02 = /* @__PURE__ */ BigInt(0);
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
  } else if (Array.isArray(input)) {
    if (input.length === 2 && isNumber(input[0]) && isNumber(input[1])) {
      return nanos(BigInt(input[0]) * bigint1e9 + BigInt(input[1]));
    }
  } else if (isString(input)) {
    DURATION_REGEX.lastIndex = 0;
    const match18 = DURATION_REGEX.exec(input);
    if (match18) {
      const [_, valueStr, unit9] = match18;
      const value3 = Number(valueStr);
      switch (unit9) {
        case "nano":
        case "nanos":
          return nanos(BigInt(valueStr));
        case "micro":
        case "micros":
          return micros(BigInt(valueStr));
        case "milli":
        case "millis":
          return millis(value3);
        case "second":
        case "seconds":
          return seconds(value3);
        case "minute":
        case "minutes":
          return minutes(value3);
        case "hour":
        case "hours":
          return hours(value3);
        case "day":
        case "days":
          return days(value3);
        case "week":
        case "weeks":
          return weeks(value3);
      }
    }
  }
  throw new Error("Invalid duration input");
};
var zeroValue = {
  _tag: "Millis",
  millis: 0
};
var infinityValue = {
  _tag: "Infinity"
};
var DurationProto = {
  [TypeId9]: TypeId9,
  [symbol]() {
    return cached(this, structure(this.value));
  },
  [symbol2](that) {
    return isDuration(that) && equals3(this, that);
  },
  toString() {
    return `Duration(${format3(this)})`;
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
var make21 = (input) => {
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
  } else if (input <= bigint02) {
    duration2.value = zeroValue;
  } else {
    duration2.value = {
      _tag: "Nanos",
      nanos: input
    };
  }
  return duration2;
};
var isDuration = (u) => hasProperty(u, TypeId9);
var zero2 = /* @__PURE__ */ make21(0);
var infinity = /* @__PURE__ */ make21(Infinity);
var nanos = (nanos2) => make21(nanos2);
var micros = (micros2) => make21(micros2 * bigint1e3);
var millis = (millis2) => make21(millis2);
var seconds = (seconds2) => make21(seconds2 * 1e3);
var minutes = (minutes2) => make21(minutes2 * 6e4);
var hours = (hours2) => make21(hours2 * 36e5);
var days = (days2) => make21(days2 * 864e5);
var weeks = (weeks2) => make21(weeks2 * 6048e5);
var toMillis = (self) => {
  const _self = decode(self);
  switch (_self.value._tag) {
    case "Infinity":
      return Infinity;
    case "Nanos":
      return Number(_self.value.nanos) / 1e6;
    case "Millis":
      return _self.value.millis;
  }
};
var toNanos = (self) => {
  const _self = decode(self);
  switch (_self.value._tag) {
    case "Infinity":
      return none2();
    case "Nanos":
      return some2(_self.value.nanos);
    case "Millis":
      return some2(BigInt(Math.round(_self.value.millis * 1e6)));
  }
};
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
var Order3 = /* @__PURE__ */ make2((self, that) => matchWith(self, that, {
  onMillis: (self2, that2) => self2 < that2 ? -1 : self2 > that2 ? 1 : 0,
  onNanos: (self2, that2) => self2 < that2 ? -1 : self2 > that2 ? 1 : 0
}));
var between3 = /* @__PURE__ */ between(/* @__PURE__ */ mapInput2(Order3, decode));
var Equivalence2 = (self, that) => matchWith(self, that, {
  onMillis: (self2, that2) => self2 === that2,
  onNanos: (self2, that2) => self2 === that2
});
var _clamp = /* @__PURE__ */ clamp(Order3);
var clamp5 = /* @__PURE__ */ dual(2, (self, options) => _clamp(decode(self), {
  minimum: decode(options.minimum),
  maximum: decode(options.maximum)
}));
var sum = /* @__PURE__ */ dual(2, (self, that) => matchWith(self, that, {
  onMillis: (self2, that2) => make21(self2 + that2),
  onNanos: (self2, that2) => make21(self2 + that2)
}));
var lessThan3 = /* @__PURE__ */ dual(2, (self, that) => matchWith(self, that, {
  onMillis: (self2, that2) => self2 < that2,
  onNanos: (self2, that2) => self2 < that2
}));
var lessThanOrEqualTo3 = /* @__PURE__ */ dual(2, (self, that) => matchWith(self, that, {
  onMillis: (self2, that2) => self2 <= that2,
  onNanos: (self2, that2) => self2 <= that2
}));
var greaterThan3 = /* @__PURE__ */ dual(2, (self, that) => matchWith(self, that, {
  onMillis: (self2, that2) => self2 > that2,
  onNanos: (self2, that2) => self2 > that2
}));
var greaterThanOrEqualTo3 = /* @__PURE__ */ dual(2, (self, that) => matchWith(self, that, {
  onMillis: (self2, that2) => self2 >= that2,
  onNanos: (self2, that2) => self2 >= that2
}));
var equals3 = /* @__PURE__ */ dual(2, (self, that) => Equivalence2(decode(self), decode(that)));
var format3 = (self) => {
  const duration2 = decode(self);
  const parts = [];
  if (duration2.value._tag === "Infinity") {
    return "Infinity";
  }
  const nanos2 = unsafeToNanos(duration2);
  if (nanos2 % bigint1e6) {
    parts.push(`${nanos2 % bigint1e6}ns`);
  }
  const ms = nanos2 / bigint1e6;
  if (ms % bigint1e3 !== bigint02) {
    parts.push(`${ms % bigint1e3}ms`);
  }
  const sec = ms / bigint1e3;
  if (sec % bigint60 !== bigint02) {
    parts.push(`${sec % bigint60}s`);
  }
  const min4 = sec / bigint60;
  if (min4 % bigint60 !== bigint02) {
    parts.push(`${min4 % bigint60}m`);
  }
  const hr = min4 / bigint60;
  if (hr % bigint24 !== bigint02) {
    parts.push(`${hr % bigint24}h`);
  }
  const days2 = hr / bigint24;
  if (days2 !== bigint02) {
    parts.push(`${days2}d`);
  }
  return parts.reverse().join(" ");
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Exit.js
var isExit = exitIsExit;
var isFailure = exitIsFailure;
var isSuccess = exitIsSuccess;
var all2 = exitCollectAll;
var die3 = exitDie;
var fail4 = exitFail;
var failCause3 = exitFailCause;
var flatten7 = exitFlatten;
var map11 = exitMap;
var mapBoth2 = exitMapBoth;
var match5 = exitMatch;
var succeed3 = exitSucceed;
var unit3 = exitUnit;
var zip3 = exitZip;
var zipRight3 = exitZipRight;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/MutableHashMap.js
var TypeId10 = /* @__PURE__ */ Symbol.for("effect/MutableHashMap");
var MutableHashMapProto = {
  [TypeId10]: TypeId10,
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
var empty19 = () => {
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
  const hash4 = key[symbol]();
  const bucket = self.buckets.get(hash4);
  if (bucket === void 0) {
    return none2();
  }
  return getFromBucket(self, bucket, key);
});
var getFromBucket = (self, bucket, key, remove10 = false) => {
  for (let i = 0, len = bucket.length; i < len; i++) {
    if (key[symbol2](bucket[i][0])) {
      const value3 = bucket[i][1];
      if (remove10) {
        bucket.splice(i, 1);
        self.bucketsSize--;
      }
      return some2(value3);
    }
  }
  return none2();
};
var has5 = /* @__PURE__ */ dual(2, (self, key) => isSome2(get9(self, key)));
var set5 = /* @__PURE__ */ dual(3, (self, key, value3) => {
  if (isEqual(key) === false) {
    self.referential.set(key, value3);
    return self;
  }
  const hash4 = key[symbol]();
  const bucket = self.buckets.get(hash4);
  if (bucket === void 0) {
    self.buckets.set(hash4, [[key, value3]]);
    self.bucketsSize++;
    return self;
  }
  removeFromBucket(self, bucket, key);
  bucket.push([key, value3]);
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
  const hash4 = key[symbol]();
  const bucket = self.buckets.get(hash4);
  if (bucket === void 0) {
    return self;
  }
  removeFromBucket(self, bucket, key);
  if (bucket.length === 0) {
    self.buckets.delete(hash4);
  }
  return self;
});
var clear = (self) => {
  self.referential.clear();
  self.buckets.clear();
  self.bucketsSize = 0;
  return self;
};
var size6 = (self) => {
  return self.referential.size + self.bucketsSize;
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/MutableList.js
var TypeId11 = /* @__PURE__ */ Symbol.for("effect/MutableList");
var MutableListProto = {
  [TypeId11]: TypeId11,
  [Symbol.iterator]() {
    let done9 = false;
    let head7 = this.head;
    return {
      next() {
        if (done9) {
          return this.return();
        }
        if (head7 == null) {
          done9 = true;
          return this.return();
        }
        const value3 = head7.value;
        head7 = head7.next;
        return {
          done: done9,
          value: value3
        };
      },
      return(value3) {
        if (!done9) {
          done9 = true;
        }
        return {
          done: true,
          value: value3
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
var makeNode = (value3) => ({
  value: value3,
  removed: false,
  prev: void 0,
  next: void 0
});
var empty20 = () => {
  const list2 = Object.create(MutableListProto);
  list2.head = void 0;
  list2.tail = void 0;
  list2._length = 0;
  return list2;
};
var isEmpty6 = (self) => length2(self) === 0;
var length2 = (self) => self._length;
var append3 = /* @__PURE__ */ dual(2, (self, value3) => {
  const node = makeNode(value3);
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
  const head7 = self.head;
  if (head7 !== void 0) {
    remove7(self, head7);
    return head7.value;
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/MutableQueue.js
var TypeId12 = /* @__PURE__ */ Symbol.for("effect/MutableQueue");
var EmptyMutableQueue = /* @__PURE__ */ Symbol.for("effect/mutable/MutableQueue/Empty");
var MutableQueueProto = {
  [TypeId12]: TypeId12,
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
var make22 = (capacity5) => {
  const queue = Object.create(MutableQueueProto);
  queue.queue = empty20();
  queue.capacity = capacity5;
  return queue;
};
var bounded = (capacity5) => make22(capacity5);
var unbounded = () => make22(void 0);
var length3 = (self) => length2(self.queue);
var isEmpty7 = (self) => isEmpty6(self.queue);
var capacity = (self) => self.capacity === void 0 ? Infinity : self.capacity;
var offer = /* @__PURE__ */ dual(2, (self, value3) => {
  const queueLength = length2(self.queue);
  if (self.capacity !== void 0 && queueLength === self.capacity) {
    return false;
  }
  append3(value3)(self.queue);
  return true;
});
var offerAll = /* @__PURE__ */ dual(2, (self, values5) => {
  const iterator = values5[Symbol.iterator]();
  let next;
  let remainder2 = empty6();
  let offering = true;
  while (offering && (next = iterator.next()) && !next.done) {
    offering = offer(next.value)(self);
  }
  while (next != null && !next.done) {
    remainder2 = prepend2(next.value)(remainder2);
    next = iterator.next();
  }
  return reverse2(remainder2);
});
var poll2 = /* @__PURE__ */ dual(2, (self, def) => {
  if (isEmpty6(self.queue)) {
    return def;
  }
  return shift(self.queue);
});
var pollUpTo = /* @__PURE__ */ dual(2, (self, n) => {
  let result = empty6();
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/clock.js
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
  const origin = "timeOrigin" in performance && typeof performance.timeOrigin === "number" ? /* @__PURE__ */ BigInt(/* @__PURE__ */ Math.round(performance.timeOrigin * 1e6)) : /* @__PURE__ */ BigInt(/* @__PURE__ */ Date.now()) * bigint1e62 - /* @__PURE__ */ BigInt(/* @__PURE__ */ Math.round(/* @__PURE__ */ performance.now() * 1e6));
  return () => origin + BigInt(Math.round(performance.now() * 1e6));
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
  currentTimeMillis = sync(() => this.unsafeCurrentTimeMillis());
  currentTimeNanos = sync(() => this.unsafeCurrentTimeNanos());
  scheduler() {
    return succeed(globalClockScheduler);
  }
  sleep(duration2) {
    return async((resume2) => {
      const canceler = globalClockScheduler.unsafeSchedule(() => resume2(unit2), duration2);
      return asUnit2(sync(canceler));
    });
  }
};
var make23 = () => new ClockImpl();

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Number.js
var Order4 = number3;
var clamp6 = /* @__PURE__ */ clamp(Order4);
var remainder = /* @__PURE__ */ dual(2, (self, divisor) => {
  const selfDecCount = (self.toString().split(".")[1] || "").length;
  const divisorDecCount = (divisor.toString().split(".")[1] || "").length;
  const decCount = selfDecCount > divisorDecCount ? selfDecCount : divisorDecCount;
  const selfInt = parseInt(self.toFixed(decCount).replace(".", ""));
  const divisorInt = parseInt(divisor.toFixed(decCount).replace(".", ""));
  return selfInt % divisorInt / Math.pow(10, decCount);
});
var nextPow2 = (n) => {
  const nextPow = Math.ceil(Math.log(n) / Math.log(2));
  return Math.max(Math.pow(2, nextPow), 2);
};
var parse = (s) => {
  if (s === "NaN") {
    return some(NaN);
  }
  if (s === "Infinity") {
    return some(Infinity);
  }
  if (s === "-Infinity") {
    return some(-Infinity);
  }
  if (s.trim() === "") {
    return none;
  }
  const n = Number(s);
  return Number.isNaN(n) ? none : some(n);
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/opCodes/configError.js
var OP_AND = "And";
var OP_OR = "Or";
var OP_INVALID_DATA = "InvalidData";
var OP_MISSING_DATA = "MissingData";
var OP_SOURCE_UNAVAILABLE = "SourceUnavailable";
var OP_UNSUPPORTED = "Unsupported";

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/configError.js
var ConfigErrorSymbolKey = "effect/ConfigError";
var ConfigErrorTypeId = /* @__PURE__ */ Symbol.for(ConfigErrorSymbolKey);
var proto2 = {
  [ConfigErrorTypeId]: ConfigErrorTypeId
};
var And = (self, that) => {
  const error2 = Object.create(proto2);
  error2._tag = OP_AND;
  error2.left = self;
  error2.right = that;
  Object.defineProperty(error2, "toString", {
    enumerable: false,
    value() {
      return `${this.left} and ${this.right}`;
    }
  });
  return error2;
};
var Or = (self, that) => {
  const error2 = Object.create(proto2);
  error2._tag = OP_OR;
  error2.left = self;
  error2.right = that;
  Object.defineProperty(error2, "toString", {
    enumerable: false,
    value() {
      return `${this.left} or ${this.right}`;
    }
  });
  return error2;
};
var InvalidData = (path, message2, options = {
  pathDelim: "."
}) => {
  const error2 = Object.create(proto2);
  error2._tag = OP_INVALID_DATA;
  error2.path = path;
  error2.message = message2;
  Object.defineProperty(error2, "toString", {
    enumerable: false,
    value() {
      const path2 = pipe(this.path, join(options.pathDelim));
      return `(Invalid data at ${path2}: "${this.message}")`;
    }
  });
  return error2;
};
var MissingData = (path, message2, options = {
  pathDelim: "."
}) => {
  const error2 = Object.create(proto2);
  error2._tag = OP_MISSING_DATA;
  error2.path = path;
  error2.message = message2;
  Object.defineProperty(error2, "toString", {
    enumerable: false,
    value() {
      const path2 = pipe(this.path, join(options.pathDelim));
      return `(Missing data at ${path2}: "${this.message}")`;
    }
  });
  return error2;
};
var SourceUnavailable = (path, message2, cause4, options = {
  pathDelim: "."
}) => {
  const error2 = Object.create(proto2);
  error2._tag = OP_SOURCE_UNAVAILABLE;
  error2.path = path;
  error2.message = message2;
  error2.cause = cause4;
  Object.defineProperty(error2, "toString", {
    enumerable: false,
    value() {
      const path2 = pipe(this.path, join(options.pathDelim));
      return `(Source unavailable at ${path2}: "${this.message}")`;
    }
  });
  return error2;
};
var Unsupported = (path, message2, options = {
  pathDelim: "."
}) => {
  const error2 = Object.create(proto2);
  error2._tag = OP_UNSUPPORTED;
  error2.path = path;
  error2.message = message2;
  Object.defineProperty(error2, "toString", {
    enumerable: false,
    value() {
      const path2 = pipe(this.path, join(options.pathDelim));
      return `(Unsupported operation at ${path2}: "${this.message}")`;
    }
  });
  return error2;
};
var prefixed = /* @__PURE__ */ dual(2, (self, prefix) => {
  switch (self._tag) {
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/configProvider/pathPatch.js
var empty21 = {
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
        output = map3(output, patch10.f);
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/opCodes/config.js
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/configProvider.js
var concat = (l, r) => [...l, ...r];
var ConfigProviderSymbolKey = "effect/ConfigProvider";
var ConfigProviderTypeId = /* @__PURE__ */ Symbol.for(ConfigProviderSymbolKey);
var configProviderTag = /* @__PURE__ */ GenericTag("effect/ConfigProvider");
var FlatConfigProviderSymbolKey = "effect/ConfigProviderFlat";
var FlatConfigProviderTypeId = /* @__PURE__ */ Symbol.for(FlatConfigProviderSymbolKey);
var make24 = (options) => ({
  [ConfigProviderTypeId]: ConfigProviderTypeId,
  pipe() {
    return pipeArguments(this, arguments);
  },
  ...options
});
var makeFlat = (options) => ({
  [FlatConfigProviderTypeId]: FlatConfigProviderTypeId,
  patch: options.patch,
  load: (path, config, split6 = true) => options.load(path, config, split6),
  enumerateChildren: options.enumerateChildren
});
var fromFlat = (flat) => make24({
  load: (config) => flatMap8(fromFlatLoop(flat, empty3(), config, false), (chunk4) => match(head(chunk4), {
    onNone: () => fail2(MissingData(empty3(), `Expected a single value having structure: ${config}`)),
    onSome: succeed
  })),
  flattened: flat
});
var fromEnv = (config) => {
  const {
    pathDelim,
    seqDelim
  } = Object.assign({}, {
    pathDelim: "_",
    seqDelim: ","
  }, config);
  const makePathString = (path) => pipe(path, join(pathDelim));
  const unmakePathString = (pathString) => pathString.split(pathDelim);
  const getEnv = () => typeof process !== "undefined" && "env" in process && typeof process.env === "object" ? process.env : {};
  const load = (path, primitive, split6 = true) => {
    const pathString = makePathString(path);
    const current2 = getEnv();
    const valueOpt = pathString in current2 ? some2(current2[pathString]) : none2();
    return pipe(valueOpt, mapError(() => MissingData(path, `Expected ${pathString} to exist in the process context`)), flatMap8((value3) => parsePrimitive(value3, path, primitive, seqDelim, split6)));
  };
  const enumerateChildren = (path) => sync(() => {
    const current2 = getEnv();
    const keys6 = Object.keys(current2);
    const keyPaths = Array.from(keys6).map((value3) => unmakePathString(value3.toUpperCase()));
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
    patch: empty21
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
var fromFlatLoop = (flat, prefix, config, split6) => {
  const op = config;
  switch (op._tag) {
    case OP_CONSTANT: {
      return succeed(of(op.value));
    }
    case OP_DESCRIBED: {
      return suspend(() => fromFlatLoop(flat, prefix, op.config, split6));
    }
    case OP_FAIL2: {
      return fail2(MissingData(prefix, op.message));
    }
    case OP_FALLBACK: {
      return pipe(suspend(() => fromFlatLoop(flat, prefix, op.first, split6)), catchAll((error1) => {
        if (op.condition(error1)) {
          return pipe(fromFlatLoop(flat, prefix, op.second, split6), catchAll((error2) => fail2(Or(error1, error2))));
        }
        return fail2(error1);
      }));
    }
    case OP_LAZY: {
      return suspend(() => fromFlatLoop(flat, prefix, op.config(), split6));
    }
    case OP_MAP_OR_FAIL: {
      return suspend(() => pipe(fromFlatLoop(flat, prefix, op.original, split6), flatMap8(forEachSequential((a) => pipe(op.mapOrFail(a), mapError(prefixed(appendConfigPath(prefix, op.original))))))));
    }
    case OP_NESTED: {
      return suspend(() => fromFlatLoop(flat, concat(prefix, of(op.name)), op.config, split6));
    }
    case OP_PRIMITIVE: {
      return pipe(patch5(prefix, flat.patch), flatMap8((prefix2) => pipe(flat.load(prefix2, op, split6), flatMap8((values5) => {
        if (values5.length === 0) {
          const name = pipe(last(prefix2), getOrElse(() => "<n/a>"));
          return fail2(MissingData([], `Expected ${op.description} with name ${name}`));
        }
        return succeed(values5);
      }))));
    }
    case OP_SEQUENCE: {
      return pipe(patch5(prefix, flat.patch), flatMap8((patchedPrefix) => pipe(flat.enumerateChildren(patchedPrefix), flatMap8(indicesFrom), flatMap8((indices) => {
        if (indices.length === 0) {
          return suspend(() => map10(fromFlatLoop(flat, patchedPrefix, op.config, true), of));
        }
        return pipe(forEachSequential(indices, (index) => fromFlatLoop(flat, append(prefix, `[${index}]`), op.config, true)), map10((chunkChunk) => {
          const flattened = flatten2(chunkChunk);
          if (flattened.length === 0) {
            return of(empty3());
          }
          return of(flattened);
        }));
      }))));
    }
    case OP_HASHMAP: {
      return suspend(() => pipe(patch5(prefix, flat.patch), flatMap8((prefix2) => pipe(flat.enumerateChildren(prefix2), flatMap8((keys6) => {
        return pipe(keys6, forEachSequential((key) => fromFlatLoop(flat, concat(prefix2, of(key)), op.valueConfig, split6)), map10((values5) => {
          if (values5.length === 0) {
            return of(empty10());
          }
          const matrix = values5.map((x) => Array.from(x));
          return pipe(transpose(matrix), map3((values6) => fromIterable7(zip(fromIterable2(keys6), values6))));
        }));
      })))));
    }
    case OP_ZIP_WITH: {
      return suspend(() => pipe(fromFlatLoop(flat, prefix, op.left, split6), either2, flatMap8((left3) => pipe(fromFlatLoop(flat, prefix, op.right, split6), either2, flatMap8((right3) => {
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
          const fail16 = fromFlatLoopFail(prefix, path);
          const [lefts, rights] = extend2(fail16, fail16, pipe(left3.right, map3(right2)), pipe(right3.right, map3(right2)));
          return pipe(lefts, zip(rights), forEachSequential(([left4, right4]) => pipe(zip2(left4, right4), map10(([left5, right5]) => op.zip(left5, right5)))));
        }
        throw new Error("BUG: ConfigProvider.fromFlatLoop - please report an issue at https://github.com/Effect-TS/effect/issues");
      })))));
    }
  }
};
var fromFlatLoopFail = (prefix, path) => (index) => left2(MissingData(prefix, `The element at index ${index} in a sequence at path "${path}" was missing`));
var splitPathString = (text, delim) => {
  const split6 = text.split(new RegExp(`\\s*${escapeRegex(delim)}\\s*`));
  return split6;
};
var parsePrimitive = (text, path, primitive, delimiter, split6) => {
  if (!split6) {
    return pipe(primitive.parse(text), mapBoth({
      onFailure: prefixed(path),
      onSuccess: of
    }));
  }
  return pipe(splitPathString(text, delimiter), forEachSequential((char) => primitive.parse(char.trim())), mapError(prefixed(path)));
};
var transpose = (array6) => {
  return Object.keys(array6[0]).map((column) => array6.map((row) => row[column]));
};
var escapeRegex = (string3) => string3.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
var indicesFrom = (quotedIndices) => pipe(forEachSequential(quotedIndices, parseQuotedIndex), mapBoth({
  onFailure: () => empty3(),
  onSuccess: sort(Order4)
}), either2, map10(merge));
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/defaultServices/console.js
var TypeId13 = /* @__PURE__ */ Symbol.for("effect/Console");
var consoleTag = /* @__PURE__ */ GenericTag("effect/Console");
var defaultConsole = {
  [TypeId13]: TypeId13,
  assert(condition, ...args) {
    return sync(() => {
      console.assert(condition, ...args);
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
  debug(...args) {
    return sync(() => {
      console.debug(...args);
    });
  },
  dir(item, options) {
    return sync(() => {
      console.dir(item, options);
    });
  },
  dirxml(...args) {
    return sync(() => {
      console.dirxml(...args);
    });
  },
  error(...args) {
    return sync(() => {
      console.error(...args);
    });
  },
  group(options) {
    return options?.collapsed ? sync(() => console.groupCollapsed(options?.label)) : sync(() => console.group(options?.label));
  },
  groupEnd: /* @__PURE__ */ sync(() => {
    console.groupEnd();
  }),
  info(...args) {
    return sync(() => {
      console.info(...args);
    });
  },
  log(...args) {
    return sync(() => {
      console.log(...args);
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
  timeLog(label, ...args) {
    return sync(() => {
      console.timeLog(label, ...args);
    });
  },
  trace(...args) {
    return sync(() => {
      console.trace(...args);
    });
  },
  warn(...args) {
    return sync(() => {
      console.warn(...args);
    });
  },
  unsafe: console
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/random.js
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
    return map10(this.next, (n) => n > 0.5);
  }
  get nextInt() {
    return sync(() => this.PRNG.integer(Number.MAX_SAFE_INTEGER));
  }
  nextRange(min4, max6) {
    return map10(this.next, (n) => (max6 - min4) * n + min4);
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
    return pipe(numbers, forEachSequentialDiscard((n) => pipe(nextIntBounded(n), map10((k) => swap(buffer3, n - 1, k)))), as2(fromIterable3(buffer3)));
  })));
};
var swap = (buffer3, index1, index2) => {
  const tmp = buffer3[index1];
  buffer3[index1] = buffer3[index2];
  buffer3[index2] = tmp;
  return buffer3;
};
var make25 = (seed) => new RandomImpl(seed);

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/defaultServices.js
var liveServices = /* @__PURE__ */ pipe(/* @__PURE__ */ empty5(), /* @__PURE__ */ add2(clockTag, /* @__PURE__ */ make23()), /* @__PURE__ */ add2(consoleTag, defaultConsole), /* @__PURE__ */ add2(randomTag, /* @__PURE__ */ make25(/* @__PURE__ */ Math.random() * 4294967296 >>> 0)), /* @__PURE__ */ add2(configProviderTag, /* @__PURE__ */ fromEnv()), /* @__PURE__ */ add2(tracerTag, nativeTracer));
var currentServices = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/DefaultServices/currentServices"), () => fiberRefUnsafeMakeContext(liveServices));
var sleep = (duration2) => {
  const decodedDuration = decode(duration2);
  return clockWith((clock3) => clock3.sleep(decodedDuration));
};
var clockWith = (f) => fiberRefGetWith(currentServices, (services) => f(get4(services, clockTag)));
var currentTimeMillis = /* @__PURE__ */ clockWith((clock3) => clock3.currentTimeMillis);
var currentTimeNanos = /* @__PURE__ */ clockWith((clock3) => clock3.currentTimeNanos);
var withClock = /* @__PURE__ */ dual(2, (effect3, value3) => fiberRefLocallyWith(currentServices, add2(clockTag, value3))(effect3));
var withConfigProvider = /* @__PURE__ */ dual(2, (effect3, value3) => fiberRefLocallyWith(currentServices, add2(configProviderTag, value3))(effect3));
var configProviderWith = (f) => fiberRefGetWith(currentServices, (services) => f(get4(services, configProviderTag)));
var randomWith = (f) => fiberRefGetWith(currentServices, (services) => f(get4(services, randomTag)));
var withRandom = /* @__PURE__ */ dual(2, (effect3, value3) => fiberRefLocallyWith(currentServices, add2(randomTag, value3))(effect3));
var tracerWith = (f) => fiberRefGetWith(currentServices, (services) => f(get4(services, tracerTag)));
var withTracer = /* @__PURE__ */ dual(2, (effect3, value3) => fiberRefLocallyWith(currentServices, add2(tracerTag, value3))(effect3));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Clock.js
var sleep2 = sleep;
var currentTimeMillis2 = currentTimeMillis;
var currentTimeNanos2 = currentTimeNanos;
var clockWith2 = clockWith;
var Clock = clockTag;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/fiberRefs.js
function unsafeMake4(fiberRefLocals) {
  return new FiberRefsImpl(fiberRefLocals);
}
function empty22() {
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
  const map25 = /* @__PURE__ */ new Map();
  unsafeForkAs(self, map25, childId);
  return new FiberRefsImpl(map25);
});
var unsafeForkAs = (self, map25, fiberId3) => {
  self.locals.forEach((stack, fiberRef) => {
    const oldValue = stack[0][1];
    const newValue = fiberRef.patch(fiberRef.fork)(oldValue);
    if (equals(oldValue, newValue)) {
      map25.set(fiberRef, stack);
    } else {
      map25.set(fiberRef, [[fiberId3, newValue], ...stack]);
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
  value: value3
}) => {
  if (self.locals.size === 0) {
    return new FiberRefsImpl(/* @__PURE__ */ new Map([[fiberRef, [[fiberId3, value3]]]]));
  }
  const locals = new Map(self.locals);
  unsafeUpdateAs(locals, fiberId3, fiberRef, value3);
  return new FiberRefsImpl(locals);
});
var unsafeUpdateAs = (locals, fiberId3, fiberRef, value3) => {
  const oldStack = locals.get(fiberRef) ?? [];
  let newStack;
  if (isNonEmptyReadonlyArray(oldStack)) {
    const [currentId, currentValue] = headNonEmpty(oldStack);
    if (currentId[symbol2](fiberId3)) {
      if (equals(currentValue, value3)) {
        return;
      } else {
        newStack = [[fiberId3, value3], ...oldStack.slice(1)];
      }
    } else {
      newStack = [[fiberId3, value3], ...oldStack];
    }
  } else {
    newStack = [[fiberId3, value3]];
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
  entries2.forEach(([fiberRef, values5]) => {
    if (values5.length === 1) {
      unsafeUpdateAs(locals, values5[0][0], fiberRef, values5[0][1]);
    } else {
      values5.forEach(([fiberId3, value3]) => {
        unsafeUpdateAs(locals, fiberId3, fiberRef, value3);
      });
    }
  });
  return new FiberRefsImpl(locals);
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/FiberRefs.js
var get11 = get10;
var getOrDefault2 = getOrDefault;
var joinAs2 = joinAs;
var setAll2 = setAll;
var updateManyAs2 = updateManyAs;
var empty23 = empty22;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/LogLevel.js
var LogLevel_exports = {};
__export(LogLevel_exports, {
  All: () => All,
  Debug: () => Debug,
  Error: () => Error2,
  Fatal: () => Fatal,
  Info: () => Info,
  None: () => None3,
  Order: () => Order5,
  Trace: () => Trace,
  Warning: () => Warning,
  allLevels: () => allLevels,
  fromLiteral: () => fromLiteral,
  greaterThan: () => greaterThan4,
  greaterThanEqual: () => greaterThanEqual,
  lessThan: () => lessThan4,
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
var Order5 = /* @__PURE__ */ pipe(Order4, /* @__PURE__ */ mapInput2((level) => level.ordinal));
var lessThan4 = /* @__PURE__ */ lessThan(Order5);
var lessThanEqual = /* @__PURE__ */ lessThanOrEqualTo(Order5);
var greaterThan4 = /* @__PURE__ */ greaterThan(Order5);
var greaterThanEqual = /* @__PURE__ */ greaterThanOrEqualTo(Order5);
var fromLiteral = (literal2) => {
  switch (literal2) {
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/logSpan.js
var make26 = (label, startTime) => ({
  label,
  startTime
});
var render = (now) => (self) => {
  const label = self.label.replace(/[\s="]/g, "_");
  return `${label}=${now - self.startTime}ms`;
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/LogSpan.js
var make27 = make26;
var render2 = render;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/ref.js
var RefTypeId = /* @__PURE__ */ Symbol.for("effect/Ref");
var refVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
var RefImpl = class {
  ref;
  [RefTypeId] = refVariance;
  constructor(ref) {
    this.ref = ref;
  }
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
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var unsafeMake5 = (value3) => new RefImpl(make12(value3));
var make28 = (value3) => sync(() => unsafeMake5(value3));
var get12 = (self) => self.modify((a) => [a, a]);
var set6 = /* @__PURE__ */ dual(2, (self, value3) => self.modify(() => [void 0, value3]));
var getAndSet = /* @__PURE__ */ dual(2, (self, value3) => self.modify((a) => [a, value3]));
var modify4 = /* @__PURE__ */ dual(2, (self, f) => self.modify(f));
var update2 = /* @__PURE__ */ dual(2, (self, f) => self.modify((a) => [void 0, f(a)]));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Ref.js
var RefTypeId2 = RefTypeId;
var make29 = make28;
var get13 = get12;
var getAndSet2 = getAndSet;
var modify5 = modify4;
var set7 = set6;
var update3 = update2;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Tracer.js
var tracerWith2 = tracerWith;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/fiberRefs/patch.js
var OP_EMPTY2 = "Empty";
var OP_ADD = "Add";
var OP_REMOVE = "Remove";
var OP_UPDATE = "Update";
var OP_AND_THEN = "AndThen";
var empty24 = {
  _tag: OP_EMPTY2
};
var diff5 = (oldValue, newValue) => {
  const missingLocals = new Map(oldValue.locals);
  let patch9 = empty24;
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
    const head7 = headNonEmpty(patches);
    const tail2 = tailNonEmpty(patches);
    switch (head7._tag) {
      case OP_EMPTY2: {
        patches = tail2;
        break;
      }
      case OP_ADD: {
        fiberRefs3 = updateAs(fiberRefs3, {
          fiberId: fiberId3,
          fiberRef: head7.fiberRef,
          value: head7.value
        });
        patches = tail2;
        break;
      }
      case OP_REMOVE: {
        fiberRefs3 = delete_(fiberRefs3, head7.fiberRef);
        patches = tail2;
        break;
      }
      case OP_UPDATE: {
        const value3 = getOrDefault(fiberRefs3, head7.fiberRef);
        fiberRefs3 = updateAs(fiberRefs3, {
          fiberId: fiberId3,
          fiberRef: head7.fiberRef,
          value: head7.fiberRef.patch(head7.patch)(value3)
        });
        patches = tail2;
        break;
      }
      case OP_AND_THEN: {
        patches = prepend(head7.first)(prepend(head7.second)(tail2));
        break;
      }
    }
  }
  return fiberRefs3;
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/metric/label.js
var MetricLabelSymbolKey = "effect/MetricLabel";
var MetricLabelTypeId = /* @__PURE__ */ Symbol.for(MetricLabelSymbolKey);
var MetricLabelImpl = class {
  key;
  value;
  [MetricLabelTypeId] = MetricLabelTypeId;
  _hash;
  constructor(key, value3) {
    this.key = key;
    this.value = value3;
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
var make30 = (key, value3) => {
  return new MetricLabelImpl(key, value3);
};
var isMetricLabel = (u) => hasProperty(u, MetricLabelTypeId);

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/singleShotGen.js
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/core-effect.js
var annotateLogs = /* @__PURE__ */ dual((args) => isEffect(args[0]), function() {
  const args = arguments;
  return fiberRefLocallyWith(args[0], currentLogAnnotations, typeof args[1] === "string" ? set4(args[1], args[2]) : (annotations4) => Object.entries(args[1]).reduce((acc, [key, value3]) => set4(acc, key, value3), annotations4));
});
var asSome = (self) => map10(self, some2);
var asSomeError = (self) => mapError(self, some2);
var try_2 = (arg) => {
  let evaluate2;
  let onFailure = void 0;
  if (typeof arg === "function") {
    evaluate2 = arg;
  } else {
    evaluate2 = arg.try;
    onFailure = arg.catch;
  }
  return sync(() => {
    try {
      return evaluate2();
    } catch (error2) {
      throw makeEffectError(fail(onFailure ? onFailure(error2) : new UnknownException(error2)));
    }
  });
};
var _catch = /* @__PURE__ */ dual(3, (self, tag2, options) => catchAll(self, (e) => {
  if (hasProperty(e, tag2) && e[tag2] === options.failure) {
    return options.onFailure(e);
  }
  return fail2(e);
}));
var catchAllDefect = /* @__PURE__ */ dual(2, (self, f) => catchAllCause(self, (cause4) => {
  const option4 = find(cause4, (_) => isDieType(_) ? some2(_) : none2());
  switch (option4._tag) {
    case "None": {
      return failCause(cause4);
    }
    case "Some": {
      return f(option4.value.defect);
    }
  }
}));
var catchSomeCause = /* @__PURE__ */ dual(2, (self, f) => matchCauseEffect(self, {
  onFailure: (cause4) => {
    const option4 = f(cause4);
    switch (option4._tag) {
      case "None": {
        return failCause(cause4);
      }
      case "Some": {
        return option4.value;
      }
    }
  },
  onSuccess: succeed
}));
var catchSomeDefect = /* @__PURE__ */ dual(2, (self, pf) => catchAllCause(self, (cause4) => {
  const option4 = find(cause4, (_) => isDieType(_) ? some2(_) : none2());
  switch (option4._tag) {
    case "None": {
      return failCause(cause4);
    }
    case "Some": {
      const optionEffect = pf(option4.value.defect);
      return optionEffect._tag === "Some" ? optionEffect.value : failCause(cause4);
    }
  }
}));
var catchTag = /* @__PURE__ */ dual(3, (self, k, f) => catchIf(self, isTagged(k), f));
var catchTags = /* @__PURE__ */ dual(2, (self, cases) => {
  let keys6;
  return catchIf(self, (e) => {
    keys6 ??= Object.keys(cases);
    return hasProperty(e, "_tag") && isString(e["_tag"]) && keys6.includes(e["_tag"]);
  }, (e) => cases[e["_tag"]](e));
});
var cause = (self) => matchCause(self, {
  onFailure: identity,
  onSuccess: () => empty18
});
var clockWith3 = clockWith2;
var clock = /* @__PURE__ */ clockWith3(succeed);
var delay = /* @__PURE__ */ dual(2, (self, duration2) => zipRight2(sleep2(duration2), self));
var descriptorWith = (f) => withFiberRuntime((state, status2) => f({
  id: state.id(),
  status: status2,
  interruptors: interruptors(state.getFiberRef(currentInterruptedCause))
}));
var allowInterrupt = /* @__PURE__ */ descriptorWith((descriptor3) => size4(descriptor3.interruptors) > 0 ? interrupt2 : unit2);
var descriptor = /* @__PURE__ */ descriptorWith(succeed);
var diffFiberRefs = (self) => summarized(self, fiberRefs2, diff5);
var diffFiberRefsAndRuntimeFlags = (self) => summarized(self, zip2(fiberRefs2, runtimeFlags), ([refs, flags], [refsNew, flagsNew]) => [diff5(refs, refsNew), diff4(flags, flagsNew)]);
var Do2 = /* @__PURE__ */ succeed({});
var bind2 = /* @__PURE__ */ dual(3, (self, tag2, f) => flatMap8(self, (k) => map10(f(k), (a) => ({
  ...k,
  [tag2]: a
}))));
var bindTo2 = /* @__PURE__ */ dual(2, (self, tag2) => map10(self, (a) => ({
  [tag2]: a
})));
var let_2 = /* @__PURE__ */ dual(3, (self, tag2, f) => map10(self, (k) => ({
  ...k,
  [tag2]: f(k)
})));
var dropUntil = /* @__PURE__ */ dual(2, (elements, predicate) => suspend(() => {
  const iterator = elements[Symbol.iterator]();
  const builder = [];
  let next;
  let dropping4 = succeed(false);
  let i = 0;
  while ((next = iterator.next()) && !next.done) {
    const a = next.value;
    const index = i++;
    dropping4 = flatMap8(dropping4, (bool) => {
      if (bool) {
        builder.push(a);
        return succeed(true);
      }
      return predicate(a, index);
    });
  }
  return map10(dropping4, () => builder);
}));
var dropWhile3 = /* @__PURE__ */ dual(2, (elements, predicate) => suspend(() => {
  const iterator = elements[Symbol.iterator]();
  const builder = [];
  let next;
  let dropping4 = succeed(true);
  let i = 0;
  while ((next = iterator.next()) && !next.done) {
    const a = next.value;
    const index = i++;
    dropping4 = flatMap8(dropping4, (d) => map10(d ? predicate(a, index) : succeed(false), (b) => {
      if (!b) {
        builder.push(a);
      }
      return b;
    }));
  }
  return map10(dropping4, () => builder);
}));
var contextWith = (f) => map10(context(), f);
var eventually = (self) => orElse2(self, () => flatMap8(yieldNow(), () => eventually(self)));
var filterOrDie = /* @__PURE__ */ dual(3, (self, predicate, orDieWith6) => filterOrElse(self, predicate, (a) => dieSync(() => orDieWith6(a))));
var filterOrDieMessage = /* @__PURE__ */ dual(3, (self, predicate, message2) => filterOrElse(self, predicate, () => dieMessage(message2)));
var filterOrElse = /* @__PURE__ */ dual(3, (self, predicate, orElse10) => flatMap8(self, (a) => predicate(a) ? succeed(a) : orElse10(a)));
var filterOrFail = /* @__PURE__ */ dual((args) => isEffect(args[0]), (self, predicate, orFailWith) => filterOrElse(self, predicate, (a) => orFailWith === void 0 ? fail2(new NoSuchElementException()) : failSync(() => orFailWith(a))));
var findFirst4 = /* @__PURE__ */ dual(2, (elements, f) => suspend(() => {
  const iterator = elements[Symbol.iterator]();
  const next = iterator.next();
  if (!next.done) {
    return findLoop(iterator, 0, f, next.value);
  }
  return succeed(none2());
}));
var findLoop = (iterator, index, f, value3) => flatMap8(f(value3, index), (result) => {
  if (result) {
    return succeed(some2(value3));
  }
  const next = iterator.next();
  if (!next.done) {
    return findLoop(iterator, index + 1, f, next.value);
  }
  return succeed(none2());
});
var firstSuccessOf = (effects) => suspend(() => {
  const list2 = fromIterable3(effects);
  if (!isNonEmpty(list2)) {
    return dieSync(() => new IllegalArgumentException(`Received an empty collection of effects`));
  }
  return pipe(tailNonEmpty2(list2), reduce2(headNonEmpty2(list2), (left3, right3) => orElse2(left3, () => right3)));
});
var flipWith = /* @__PURE__ */ dual(2, (self, f) => flip(f(flip(self))));
var match6 = /* @__PURE__ */ dual(2, (self, options) => matchEffect(self, {
  onFailure: (e) => succeed(options.onFailure(e)),
  onSuccess: (a) => succeed(options.onSuccess(a))
}));
var every5 = /* @__PURE__ */ dual(2, (elements, f) => suspend(() => forAllLoop(elements[Symbol.iterator](), 0, f)));
var forAllLoop = (iterator, index, f) => {
  const next = iterator.next();
  return next.done ? succeed(true) : flatMap8(f(next.value, index), (b) => b ? forAllLoop(iterator, index + 1, f) : succeed(b));
};
var forever = (self) => {
  const loop3 = flatMap8(flatMap8(self, () => yieldNow()), () => loop3);
  return loop3;
};
var EffectGen = class {
  value;
  constructor(value3) {
    this.value = value3;
  }
  [Symbol.iterator]() {
    return new SingleShotGen2(this);
  }
};
var adapter3 = function() {
  let x = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    x = arguments[i](x);
  }
  return new EffectGen(x);
};
var gen2 = function() {
  let f;
  if (arguments.length === 1) {
    f = arguments[0];
  } else {
    f = arguments[1].bind(arguments[0]);
  }
  return suspend(() => {
    const iterator = f(adapter3);
    const state = iterator.next();
    const run8 = (state2) => state2.done ? succeed(state2.value) : pipe(state2.value.value, flatMap8((val) => run8(iterator.next(val))));
    return run8(state);
  });
};
var fiberRefs2 = /* @__PURE__ */ withFiberRuntime((state) => succeed(state.getFiberRefs()));
var head3 = (self) => flatMap8(self, (as9) => {
  const iterator = as9[Symbol.iterator]();
  const next = iterator.next();
  if (next.done) {
    return fail2(new NoSuchElementException());
  }
  return succeed(next.value);
});
var ignore = (self) => match6(self, {
  onFailure: constVoid,
  onSuccess: constVoid
});
var ignoreLogged = (self) => matchCauseEffect(self, {
  onFailure: (cause4) => logDebug(cause4, "An error was silently ignored because it is not anticipated to be useful"),
  onSuccess: () => unit2
});
var inheritFiberRefs = (childFiberRefs) => updateFiberRefs((parentFiberId, parentFiberRefs) => joinAs2(parentFiberRefs, parentFiberId, childFiberRefs));
var isFailure2 = (self) => match6(self, {
  onFailure: constTrue,
  onSuccess: constFalse
});
var isSuccess2 = (self) => match6(self, {
  onFailure: constFalse,
  onSuccess: constTrue
});
var iterate = (initial, options) => suspend(() => {
  if (options.while(initial)) {
    return flatMap8(options.body(initial), (z2) => iterate(z2, options));
  }
  return succeed(initial);
});
var logWithLevel = (level) => (messageOrCause, supplementary) => {
  const levelOption = fromNullable(level);
  let message2;
  let cause4;
  if (isCause(messageOrCause)) {
    cause4 = messageOrCause;
    message2 = supplementary ?? "";
  } else {
    message2 = messageOrCause;
    cause4 = supplementary ?? empty18;
  }
  return withFiberRuntime((fiberState) => {
    fiberState.log(message2, cause4, levelOption);
    return unit2;
  });
};
var log = /* @__PURE__ */ logWithLevel();
var logTrace = /* @__PURE__ */ logWithLevel(Trace);
var logDebug = /* @__PURE__ */ logWithLevel(Debug);
var logInfo = /* @__PURE__ */ logWithLevel(Info);
var logWarning = /* @__PURE__ */ logWithLevel(Warning);
var logError = /* @__PURE__ */ logWithLevel(Error2);
var logFatal = /* @__PURE__ */ logWithLevel(Fatal);
var withLogSpan = /* @__PURE__ */ dual(2, (effect3, label) => flatMap8(currentTimeMillis2, (now) => fiberRefLocallyWith(effect3, currentLogSpan, prepend3(make27(label, now)))));
var logAnnotations = /* @__PURE__ */ fiberRefGet(currentLogAnnotations);
var loop = (initial, options) => options.discard ? loopDiscard(initial, options.while, options.step, options.body) : map10(loopInternal(initial, options.while, options.step, options.body), Array.from);
var loopInternal = (initial, cont, inc, body) => suspend(() => cont(initial) ? flatMap8(body(initial), (a) => map10(loopInternal(inc(initial), cont, inc, body), prepend3(a))) : sync(() => empty11()));
var loopDiscard = (initial, cont, inc, body) => suspend(() => cont(initial) ? flatMap8(body(initial), () => loopDiscard(inc(initial), cont, inc, body)) : unit2);
var mapAccum3 = /* @__PURE__ */ dual(3, (elements, zero3, f) => suspend(() => {
  const iterator = elements[Symbol.iterator]();
  const builder = [];
  let result = succeed(zero3);
  let next;
  let i = 0;
  while (!(next = iterator.next()).done) {
    const index = i++;
    result = flatMap8(result, (state) => map10(f(state, next.value, index), ([z, b]) => {
      builder.push(b);
      return z;
    }));
  }
  return map10(result, (z) => [z, builder]);
}));
var mapErrorCause = /* @__PURE__ */ dual(2, (self, f) => matchCauseEffect(self, {
  onFailure: (c) => failCauseSync(() => f(c)),
  onSuccess: succeed
}));
var memoize = (self) => pipe(deferredMake(), flatMap8((deferred) => pipe(diffFiberRefsAndRuntimeFlags(self), intoDeferred(deferred), once, map10((complete3) => zipRight2(complete3, pipe(deferredAwait(deferred), flatMap8(([patch9, a]) => as2(zip2(patchFiberRefs(patch9[0]), updateRuntimeFlags(patch9[1])), a))))))));
var merge5 = (self) => matchEffect(self, {
  onFailure: (e) => succeed(e),
  onSuccess: succeed
});
var negate2 = (self) => map10(self, (b) => !b);
var none6 = (self) => flatMap8(self, (option4) => {
  switch (option4._tag) {
    case "None":
      return unit2;
    case "Some":
      return fail2(new NoSuchElementException());
  }
});
var once = (self) => map10(make29(true), (ref) => asUnit2(whenEffect(self, getAndSet2(ref, false))));
var option = (self) => matchEffect(self, {
  onFailure: () => succeed(none2()),
  onSuccess: (a) => succeed(some2(a))
});
var orElseFail = /* @__PURE__ */ dual(2, (self, evaluate2) => orElse2(self, () => failSync(evaluate2)));
var orElseSucceed = /* @__PURE__ */ dual(2, (self, evaluate2) => orElse2(self, () => sync(evaluate2)));
var parallelErrors = (self) => matchCauseEffect(self, {
  onFailure: (cause4) => {
    const errors = Array.from(failures(cause4));
    return errors.length === 0 ? failCause(cause4) : fail2(errors);
  },
  onSuccess: succeed
});
var patchFiberRefs = (patch9) => updateFiberRefs((fiberId3, fiberRefs3) => pipe(patch9, patch6(fiberId3, fiberRefs3)));
var promise = (evaluate2) => evaluate2.length >= 1 ? async((resolve, signal) => {
  evaluate2(signal).then((a) => resolve(exitSucceed(a)), (e) => resolve(exitDie(e)));
}) : async((resolve) => {
  evaluate2().then((a) => resolve(exitSucceed(a)), (e) => resolve(exitDie(e)));
});
var provideService = /* @__PURE__ */ dual(3, (self, tag2, service3) => contextWithEffect((env) => provideContext(self, add2(env, tag2, service3))));
var provideServiceEffect = /* @__PURE__ */ dual(3, (self, tag2, effect3) => contextWithEffect((env) => flatMap8(effect3, (service3) => provideContext(self, pipe(env, add2(tag2, service3))))));
var random2 = /* @__PURE__ */ randomWith(succeed);
var reduce10 = /* @__PURE__ */ dual(3, (elements, zero3, f) => fromIterable2(elements).reduce((acc, el, i) => flatMap8(acc, (a) => f(a, el, i)), succeed(zero3)));
var reduceRight3 = /* @__PURE__ */ dual(3, (elements, zero3, f) => fromIterable2(elements).reduceRight((acc, el, i) => flatMap8(acc, (a) => f(el, a, i)), succeed(zero3)));
var reduceWhile = /* @__PURE__ */ dual(3, (elements, zero3, options) => flatMap8(sync(() => elements[Symbol.iterator]()), (iterator) => reduceWhileLoop(iterator, 0, zero3, options.while, options.body)));
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
var succeedSome = (value3) => succeed(some2(value3));
var summarized = /* @__PURE__ */ dual(3, (self, summary5, f) => flatMap8(summary5, (start3) => flatMap8(self, (value3) => map10(summary5, (end6) => [f(start3, end6), value3]))));
var tagMetrics = /* @__PURE__ */ dual((args) => isEffect(args[0]), function() {
  return labelMetrics(arguments[0], typeof arguments[1] === "string" ? [make30(arguments[1], arguments[2])] : Object.entries(arguments[1]).map(([k, v]) => make30(k, v)));
});
var labelMetrics = /* @__PURE__ */ dual(2, (self, labels) => fiberRefLocallyWith(self, currentMetricLabels, (old) => union2(old, labels)));
var takeUntil = /* @__PURE__ */ dual(2, (elements, predicate) => suspend(() => {
  const iterator = elements[Symbol.iterator]();
  const builder = [];
  let next;
  let effect3 = succeed(false);
  let i = 0;
  while ((next = iterator.next()) && !next.done) {
    const a = next.value;
    const index = i++;
    effect3 = flatMap8(effect3, (bool) => {
      if (bool) {
        return succeed(true);
      }
      builder.push(a);
      return predicate(a, index);
    });
  }
  return map10(effect3, () => builder);
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
    taking = flatMap8(taking, (taking2) => pipe(taking2 ? predicate(a, index) : succeed(false), map10((bool) => {
      if (bool) {
        builder.push(a);
      }
      return bool;
    })));
  }
  return map10(taking, () => builder);
}));
var tapBoth = /* @__PURE__ */ dual(2, (self, {
  onFailure,
  onSuccess
}) => matchCauseEffect(self, {
  onFailure: (cause4) => {
    const either8 = failureOrCause(cause4);
    switch (either8._tag) {
      case "Left": {
        return zipRight2(onFailure(either8.left), failCause(cause4));
      }
      case "Right": {
        return failCause(cause4);
      }
    }
  },
  onSuccess: (a) => as2(onSuccess(a), a)
}));
var tapDefect = /* @__PURE__ */ dual(2, (self, f) => catchAllCause(self, (cause4) => match(keepDefects(cause4), {
  onNone: () => failCause(cause4),
  onSome: (a) => zipRight2(f(a), failCause(cause4))
})));
var tapError = /* @__PURE__ */ dual(2, (self, f) => matchCauseEffect(self, {
  onFailure: (cause4) => {
    const either8 = failureOrCause(cause4);
    switch (either8._tag) {
      case "Left":
        return zipRight2(f(either8.left), failCause(cause4));
      case "Right":
        return failCause(cause4);
    }
  },
  onSuccess: succeed
}));
var tapErrorTag = /* @__PURE__ */ dual(3, (self, k, f) => tapError(self, (e) => {
  if (isTagged(e, k)) {
    return f(e);
  }
  return unit2;
}));
var tapErrorCause = /* @__PURE__ */ dual(2, (self, f) => matchCauseEffect(self, {
  onFailure: (cause4) => zipRight2(f(cause4), failCause(cause4)),
  onSuccess: succeed
}));
var timed = (self) => timedWith(self, currentTimeNanos2);
var timedWith = /* @__PURE__ */ dual(2, (self, nanos2) => summarized(self, nanos2, (start3, end6) => nanos(end6 - start3)));
var tracerWith3 = tracerWith2;
var tracer = /* @__PURE__ */ tracerWith3(succeed);
var tryPromise = (arg) => {
  let evaluate2;
  let catcher = void 0;
  if (typeof arg === "function") {
    evaluate2 = arg;
  } else {
    evaluate2 = arg.try;
    catcher = arg.catch;
  }
  if (evaluate2.length >= 1) {
    return async((resolve, signal) => {
      try {
        evaluate2(signal).then((a) => resolve(exitSucceed(a)), (e) => resolve(fail2(catcher ? catcher(e) : new UnknownException(e))));
      } catch (e) {
        resolve(fail2(catcher ? catcher(e) : new UnknownException(e)));
      }
    });
  }
  return async((resolve) => {
    try {
      evaluate2().then((a) => resolve(exitSucceed(a)), (e) => resolve(fail2(catcher ? catcher(e) : new UnknownException(e))));
    } catch (e) {
      resolve(fail2(catcher ? catcher(e) : new UnknownException(e)));
    }
  });
};
var tryMap = /* @__PURE__ */ dual(2, (self, options) => flatMap8(self, (a) => try_2({
  try: () => options.try(a),
  catch: options.catch
})));
var tryMapPromise = /* @__PURE__ */ dual(2, (self, options) => flatMap8(self, (a) => tryPromise({
  try: options.try.length >= 1 ? (signal) => options.try(a, signal) : () => options.try(a),
  catch: options.catch
})));
var unless = /* @__PURE__ */ dual(2, (self, condition) => suspend(() => condition() ? succeedNone : asSome(self)));
var unlessEffect = /* @__PURE__ */ dual(2, (self, condition) => flatMap8(condition, (b) => b ? succeedNone : asSome(self)));
var unsandbox = (self) => mapErrorCause(self, flatten5);
var updateFiberRefs = (f) => withFiberRuntime((state) => {
  state.setFiberRefs(f(state.id(), state.getFiberRefs()));
  return unit2;
});
var updateService = /* @__PURE__ */ dual(3, (self, tag2, f) => mapInputContext(self, (context7) => add2(context7, tag2, f(unsafeGet3(context7, tag2)))));
var when = /* @__PURE__ */ dual(2, (self, condition) => suspend(() => condition() ? map10(self, some2) : succeed(none2())));
var whenFiberRef = /* @__PURE__ */ dual(3, (self, fiberRef, predicate) => flatMap8(fiberRefGet(fiberRef), (s) => predicate(s) ? map10(self, (a) => [s, some2(a)]) : succeed([s, none2()])));
var whenRef = /* @__PURE__ */ dual(3, (self, ref, predicate) => flatMap8(get13(ref), (s) => predicate(s) ? map10(self, (a) => [s, some2(a)]) : succeed([s, none2()])));
var withMetric = /* @__PURE__ */ dual(2, (self, metric) => metric(self));
var serviceFunctionEffect = (getService, f) => (...args) => flatMap8(getService, (a) => f(a)(...args));
var serviceFunction = (getService, f) => (...args) => map10(getService, (a) => f(a)(...args));
var serviceFunctions = (getService) => new Proxy({}, {
  get(_target, prop2, _receiver) {
    return (...args) => flatMap8(getService, (s) => s[prop2](...args));
  }
});
var serviceConstants = (getService) => new Proxy({}, {
  get(_target, prop2, _receiver) {
    return flatMap8(getService, (s) => isEffect(s[prop2]) ? s[prop2] : succeed(s[prop2]));
  }
});
var serviceMembers = (getService) => ({
  functions: serviceFunctions(getService),
  constants: serviceConstants(getService)
});
var serviceOption = (tag2) => map10(context(), getOption2(tag2));
var serviceOptional = (tag2) => flatMap8(context(), getOption2(tag2));
var annotateCurrentSpan = function() {
  const args = arguments;
  return ignore(flatMap8(currentSpan, (span4) => sync(() => {
    if (typeof args[0] === "string") {
      span4.attribute(args[0], args[1]);
    } else {
      for (const key in args[0]) {
        span4.attribute(key, args[0][key]);
      }
    }
  })));
};
var annotateSpans = /* @__PURE__ */ dual((args) => isEffect(args[0]), function() {
  const args = arguments;
  return fiberRefLocallyWith(args[0], currentTracerSpanAnnotations, typeof args[1] === "string" ? set4(args[1], args[2]) : (annotations4) => Object.entries(args[1]).reduce((acc, [key, value3]) => set4(acc, key, value3), annotations4));
});
var currentParentSpan = /* @__PURE__ */ serviceOptional(spanTag);
var currentSpan = /* @__PURE__ */ flatMap8(/* @__PURE__ */ context(), (context7) => {
  const span4 = context7.unsafeMap.get(spanTag.key);
  return span4 !== void 0 && span4._tag === "Span" ? succeed(span4) : fail2(new NoSuchElementException());
});
var bigint03 = /* @__PURE__ */ BigInt(0);
var currentTimeNanosTracing = /* @__PURE__ */ fiberRefGetWith(currentTracerTimingEnabled, (enabled2) => enabled2 ? currentTimeNanos2 : succeed(bigint03));
var linkSpans = /* @__PURE__ */ dual((args) => isEffect(args[0]), (self, span4, attributes) => fiberRefLocallyWith(self, currentTracerSpanLinks, append2({
  _tag: "SpanLink",
  span: span4,
  attributes: attributes ?? {}
})));
var makeSpan = (name, options) => flatMap8(fiberRefs2, (fiberRefs3) => sync(() => {
  const enabled2 = getOrDefault2(fiberRefs3, currentTracerEnabled);
  if (enabled2 === false) {
    return noopSpan(name);
  }
  const context7 = getOrDefault2(fiberRefs3, currentContext);
  const services = getOrDefault2(fiberRefs3, currentServices);
  const tracer3 = get4(services, tracerTag);
  const clock3 = get4(services, Clock);
  const timingEnabled = getOrDefault2(fiberRefs3, currentTracerTimingEnabled);
  const annotationsFromEnv = get11(fiberRefs3, currentTracerSpanAnnotations);
  const linksFromEnv = get11(fiberRefs3, currentTracerSpanLinks);
  const parent2 = options?.parent ? some2(options.parent) : options?.root ? none2() : getOption2(context7, spanTag);
  const links = linksFromEnv._tag === "Some" ? options?.links !== void 0 ? [...toReadonlyArray(linksFromEnv.value), ...options?.links ?? []] : toReadonlyArray(linksFromEnv.value) : options?.links ?? empty3();
  const span4 = tracer3.span(name, parent2, options?.context ?? empty5(), links, timingEnabled ? clock3.unsafeCurrentTimeNanos() : bigint03);
  if (annotationsFromEnv._tag === "Some") {
    forEach4(annotationsFromEnv.value, (value3, key) => span4.attribute(key, value3));
  }
  if (options?.attributes) {
    Object.entries(options.attributes).forEach(([k, v]) => span4.attribute(k, v));
  }
  return span4;
}));
var spanAnnotations = /* @__PURE__ */ fiberRefGet(currentTracerSpanAnnotations);
var spanLinks = /* @__PURE__ */ fiberRefGet(currentTracerSpanLinks);
var useSpan = (name, ...args) => {
  const options = args.length === 1 ? void 0 : args[0];
  const evaluate2 = args[args.length - 1];
  return acquireUseRelease(makeSpan(name, options), evaluate2, (span4, exit4) => span4.status._tag === "Ended" ? unit2 : flatMap8(currentTimeNanosTracing, (endTime) => sync(() => span4.end(endTime, exit4))));
};
var withParentSpan = /* @__PURE__ */ dual(2, (self, span4) => provideService(self, spanTag, span4));
var withSpan = /* @__PURE__ */ dual((args) => typeof args[0] !== "string", (self, name, options) => useSpan(name, options ?? {}, (span4) => withParentSpan(self, span4)));
var fromNullable3 = (value3) => value3 == null ? fail2(new NoSuchElementException()) : succeed(value3);
var optionFromOptional = (self) => catchAll(map10(self, some2), (error2) => isNoSuchElementException(error2) ? succeedNone : fail2(error2));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Effectable.js
var EffectTypeId3 = EffectTypeId;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/executionStrategy.js
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/ExecutionStrategy.js
var sequential3 = sequential2;
var parallel3 = parallel2;
var parallelN2 = parallelN;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/FiberRefsPatch.js
var diff6 = diff5;
var patch7 = patch6;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/fiberStatus.js
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/FiberStatus.js
var done4 = done3;
var running2 = running;
var suspended2 = suspended;
var isDone3 = isDone2;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Scheduler.js
var PriorityBuckets = class {
  /**
   * @since 2.0.0
   */
  buckets = [];
  /**
   * @since 2.0.0
   */
  scheduleTask(task, priority) {
    let bucket = void 0;
    let index;
    for (index = 0; index < this.buckets.length; index++) {
      if (this.buckets[index][0] <= priority) {
        bucket = this.buckets[index];
      } else {
        break;
      }
    }
    if (bucket) {
      bucket[1].push(task);
    } else {
      const newBuckets = [];
      for (let i = 0; i < index; i++) {
        newBuckets.push(this.buckets[i]);
      }
      newBuckets.push([priority, [task]]);
      for (let i = index; i < this.buckets.length; i++) {
        newBuckets.push(this.buckets[i]);
      }
      this.buckets = newBuckets;
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
  tasks = new PriorityBuckets();
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
  tasks = new PriorityBuckets();
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/completedRequestMap.js
var currentRequestMap = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentRequestMap"), () => fiberRefUnsafeMake(/* @__PURE__ */ new Map()));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/concurrency.js
var match8 = (concurrency2, sequential5, unbounded6, bounded6) => {
  switch (concurrency2) {
    case void 0:
      return sequential5();
    case "unbounded":
      return unbounded6();
    case "inherit":
      return fiberRefGetWith(currentConcurrency, (concurrency3) => concurrency3 === "unbounded" ? unbounded6() : concurrency3 > 1 ? bounded6(concurrency3) : sequential5());
    default:
      return concurrency2 > 1 ? bounded6(concurrency2) : sequential5();
  }
};
var matchSimple = (concurrency2, sequential5, concurrent) => {
  switch (concurrency2) {
    case void 0:
      return sequential5();
    case "unbounded":
      return concurrent();
    case "inherit":
      return fiberRefGetWith(currentConcurrency, (concurrency3) => concurrency3 === "unbounded" || concurrency3 > 1 ? concurrent() : sequential5());
    default:
      return concurrency2 > 1 ? concurrent() : sequential5();
  }
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/fiberMessage.js
var OP_INTERRUPT_SIGNAL = "InterruptSignal";
var OP_STATEFUL = "Stateful";
var OP_RESUME = "Resume";
var OP_YIELD_NOW = "YieldNow";
var interruptSignal = (cause4) => ({
  _tag: OP_INTERRUPT_SIGNAL,
  cause: cause4
});
var stateful = (onFiber) => ({
  _tag: OP_STATEFUL,
  onFiber
});
var resume = (effect3) => ({
  _tag: OP_RESUME,
  effect: effect3
});
var yieldNow2 = () => ({
  _tag: OP_YIELD_NOW
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/fiberScope.js
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/fiber.js
var FiberSymbolKey = "effect/Fiber";
var FiberTypeId = /* @__PURE__ */ Symbol.for(FiberSymbolKey);
var fiberVariance = {
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _A: (_) => _
};
var RuntimeFiberSymbolKey = "effect/Fiber";
var RuntimeFiberTypeId = /* @__PURE__ */ Symbol.for(RuntimeFiberSymbolKey);
var _await2 = (self) => self.await;
var inheritAll = (self) => self.inheritAll;
var interruptAsFork = /* @__PURE__ */ dual(2, (self, fiberId3) => self.interruptAsFork(fiberId3));
var join2 = (self) => zipLeft2(flatten6(self.await), self.inheritAll);
var poll3 = (self) => self.poll;
var currentFiberURI = "effect/FiberCurrent";

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/logger.js
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
var map12 = /* @__PURE__ */ dual(2, (self, f) => makeLogger((options) => f(self.log(options))));
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
    message: message2
  }) => log3(message2),
  pipe() {
    return pipeArguments(this, arguments);
  }
});
var succeed4 = (value3) => {
  return simple(() => value3);
};
var sync2 = (evaluate2) => {
  return simple(evaluate2);
};
var zip4 = /* @__PURE__ */ dual(2, (self, that) => makeLogger((options) => [self.log(options), that.log(options)]));
var zipLeft3 = /* @__PURE__ */ dual(2, (self, that) => map12(zip4(self, that), (tuple3) => tuple3[0]));
var zipRight4 = /* @__PURE__ */ dual(2, (self, that) => map12(zip4(self, that), (tuple3) => tuple3[1]));
var stringLogger = /* @__PURE__ */ makeLogger(({
  annotations: annotations4,
  cause: cause4,
  date,
  fiberId: fiberId3,
  logLevel,
  message: message2,
  spans
}) => {
  const nowMillis = date.getTime();
  const outputArray = [`timestamp=${date.toISOString()}`, `level=${logLevel.label}`, `fiber=${threadName(fiberId3)}`];
  let output = outputArray.join(" ");
  const stringMessage = serializeUnknown(message2);
  if (stringMessage.length > 0) {
    output = output + " message=";
    output = appendQuoted(stringMessage, output);
  }
  if (cause4 != null && cause4._tag !== "Empty") {
    output = output + " cause=";
    output = appendQuoted(pretty(cause4), output);
  }
  if (isCons(spans)) {
    output = output + " ";
    let first2 = true;
    for (const span4 of spans) {
      if (first2) {
        first2 = false;
      } else {
        output = output + " ";
      }
      output = output + pipe(span4, render2(nowMillis));
    }
  }
  if (pipe(annotations4, size5) > 0) {
    output = output + " ";
    let first2 = true;
    for (const [key, value3] of annotations4) {
      if (first2) {
        first2 = false;
      } else {
        output = output + " ";
      }
      output = output + filterKeyName(key);
      output = output + "=";
      output = appendQuoted(serializeUnknown(value3), output);
    }
  }
  return output;
});
var serializeUnknown = (u) => {
  try {
    return typeof u === "object" ? jsonStringifyCircular(u) : String(u);
  } catch (_) {
    return String(u);
  }
};
var escapeDoubleQuotes = (str) => `"${str.replace(/\\([\s\S])|(")/g, "\\$1$2")}"`;
var textOnly = /^[^\s"=]+$/;
var appendQuoted = (label, output) => output + (label.match(textOnly) ? label : escapeDoubleQuotes(label));
var logfmtLogger = /* @__PURE__ */ makeLogger(({
  annotations: annotations4,
  cause: cause4,
  date,
  fiberId: fiberId3,
  logLevel,
  message: message2,
  spans
}) => {
  const nowMillis = date.getTime();
  const outputArray = [`timestamp=${date.toISOString()}`, `level=${logLevel.label}`, `fiber=${threadName(fiberId3)}`];
  let output = outputArray.join(" ");
  const stringMessage = serializeUnknown(message2);
  if (stringMessage.length > 0) {
    output = output + " message=";
    output = appendQuotedLogfmt(stringMessage, output);
  }
  if (cause4 != null && cause4._tag !== "Empty") {
    output = output + " cause=";
    output = appendQuotedLogfmt(pretty(cause4), output);
  }
  if (isCons(spans)) {
    output = output + " ";
    let first2 = true;
    for (const span4 of spans) {
      if (first2) {
        first2 = false;
      } else {
        output = output + " ";
      }
      output = output + pipe(span4, renderLogSpanLogfmt(nowMillis));
    }
  }
  if (pipe(annotations4, size5) > 0) {
    output = output + " ";
    let first2 = true;
    for (const [key, value3] of annotations4) {
      if (first2) {
        first2 = false;
      } else {
        output = output + " ";
      }
      output = output + filterKeyName(key);
      output = output + "=";
      output = appendQuotedLogfmt(serializeUnknown(value3), output);
    }
  }
  return output;
});
var structuredLogger = /* @__PURE__ */ makeLogger(({
  annotations: annotations4,
  cause: cause4,
  date,
  fiberId: fiberId3,
  logLevel,
  message: message2,
  spans
}) => {
  const now = date.getTime();
  const annotationsObj = {};
  const spansObj = {};
  if (size5(annotations4) > 0) {
    for (const [k, v] of annotations4) {
      annotationsObj[k] = structuredMessage(v);
    }
  }
  if (isCons(spans)) {
    for (const span4 of spans) {
      spansObj[span4.label] = now - span4.startTime;
    }
  }
  return {
    message: structuredMessage(message2),
    logLevel: logLevel.label,
    timestamp: date.toISOString(),
    cause: isEmpty5(cause4) ? void 0 : pretty(cause4),
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
      return u;
    }
  }
};
var jsonStringifyCircular = (obj) => {
  let cache = [];
  const retVal = JSON.stringify(obj, (_key, value3) => typeof value3 === "object" && value3 !== null ? cache.includes(value3) ? void 0 : cache.push(value3) && value3 : value3);
  cache = void 0;
  return retVal;
};
var jsonLogger = /* @__PURE__ */ map12(structuredLogger, jsonStringifyCircular);
var filterKeyName = (key) => key.replace(/[\s="]/g, "_");
var escapeDoubleQuotesLogfmt = (str) => JSON.stringify(str);
var appendQuotedLogfmt = (label, output) => output + (label.match(textOnly) ? label : escapeDoubleQuotesLogfmt(label));
var renderLogSpanLogfmt = (now) => (self) => {
  const label = filterKeyName(self.label);
  return `${label}=${now - self.startTime}ms`;
};
var isLogger = (u) => {
  return typeof u === "object" && u != null && LoggerTypeId in u;
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/metric/boundaries.js
var MetricBoundariesSymbolKey = "effect/MetricBoundaries";
var MetricBoundariesTypeId = /* @__PURE__ */ Symbol.for(MetricBoundariesSymbolKey);
var MetricBoundariesImpl = class {
  values;
  [MetricBoundariesTypeId] = MetricBoundariesTypeId;
  constructor(values5) {
    this.values = values5;
    this._hash = pipe(string(MetricBoundariesSymbolKey), combine(array(this.values)));
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
var fromIterable9 = (iterable) => {
  const values5 = pipe(iterable, appendAll(of2(Number.POSITIVE_INFINITY)), dedupe);
  return new MetricBoundariesImpl(values5);
};
var exponential = (options) => pipe(makeBy(options.count - 1, (i) => options.start * Math.pow(options.factor, i)), unsafeFromArray, fromIterable9);

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/metric/keyType.js
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
  constructor(incremental, bigint3) {
    this.incremental = incremental;
    this.bigint = bigint3;
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/metric/key.js
var MetricKeySymbolKey = "effect/MetricKey";
var MetricKeyTypeId = /* @__PURE__ */ Symbol.for(MetricKeySymbolKey);
var metricKeyVariance = {
  /* c8 ignore next */
  _Type: (_) => _
};
var arrayEquivilence = /* @__PURE__ */ getEquivalence4(equals);
var MetricKeyImpl = class {
  name;
  keyType;
  description;
  tags;
  [MetricKeyTypeId] = metricKeyVariance;
  constructor(name, keyType, description2, tags = []) {
    this.name = name;
    this.keyType = keyType;
    this.description = description2;
    this.tags = tags;
    this._hash = pipe(string(this.name + this.description), combine(hash(this.keyType)), combine(array(this.tags)));
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
var histogram2 = (name, boundaries, description2) => new MetricKeyImpl(name, histogram(boundaries), fromNullable(description2));
var taggedWithLabels = /* @__PURE__ */ dual(2, (self, extraTags) => extraTags.length === 0 ? self : new MetricKeyImpl(self.name, self.keyType, self.description, union2(self.tags, extraTags)));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/metric/state.js
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
var arrayEquals = /* @__PURE__ */ getEquivalence4(equals);
var FrequencyState = class {
  occurrences;
  [MetricStateTypeId] = metricStateVariance;
  [FrequencyStateTypeId] = FrequencyStateTypeId;
  constructor(occurrences) {
    this.occurrences = occurrences;
  }
  _hash;
  [symbol]() {
    return pipe(string(FrequencyStateSymbolKey), combine(array(fromIterable2(this.occurrences.entries()))), cached(this));
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
  constructor(value3) {
    this.value = value3;
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
  constructor(error2, quantiles, count3, min4, max6, sum3) {
    this.error = error2;
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/metric/hook.js
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
var bigint04 = /* @__PURE__ */ BigInt(0);
var counter4 = (key) => {
  let sum3 = key.keyType.bigint ? bigint04 : 0;
  const canUpdate = key.keyType.incremental ? key.keyType.bigint ? (value3) => value3 >= bigint04 : (value3) => value3 >= 0 : (_value) => true;
  return make31({
    get: () => counter3(sum3),
    update: (value3) => {
      if (canUpdate(value3)) {
        sum3 = sum3 + value3;
      }
    }
  });
};
var frequency3 = (_key) => {
  const values5 = /* @__PURE__ */ new Map();
  const update6 = (word) => {
    const slotCount = values5.get(word) ?? 0;
    values5.set(word, slotCount + 1);
  };
  return make31({
    get: () => frequency2(values5),
    update: update6
  });
};
var gauge3 = (_key, startAt) => {
  let value3 = startAt;
  return make31({
    get: () => gauge2(value3),
    update: (v) => {
      value3 = v;
    }
  });
};
var histogram4 = (key) => {
  const bounds = key.keyType.boundaries.values;
  const size16 = bounds.length;
  const values5 = new Uint32Array(size16 + 1);
  const boundaries = new Float32Array(size16);
  let count3 = 0;
  let sum3 = 0;
  let min4 = Number.MAX_VALUE;
  let max6 = Number.MIN_VALUE;
  pipe(bounds, sort(Order4), map3((n, i) => {
    boundaries[i] = n;
  }));
  const update6 = (value3) => {
    let from = 0;
    let to = size16;
    while (from !== to) {
      const mid = Math.floor(from + (to - from) / 2);
      const boundary = boundaries[mid];
      if (value3 <= boundary) {
        to = mid;
      } else {
        from = mid;
      }
      if (to === from + 1) {
        if (value3 <= boundaries[from]) {
          to = from;
        } else {
          from = to;
        }
      }
    }
    values5[from] = values5[from] + 1;
    count3 = count3 + 1;
    sum3 = sum3 + value3;
    if (value3 < min4) {
      min4 = value3;
    }
    if (value3 > max6) {
      max6 = value3;
    }
  };
  const getBuckets = () => {
    const builder = Array(size16);
    let cumulated = 0;
    for (let i = 0; i < size16; i++) {
      const boundary = boundaries[i];
      const value3 = values5[i];
      cumulated = cumulated + value3;
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
    update: update6
  });
};
var summary3 = (key) => {
  const {
    error: error2,
    maxAge,
    maxSize,
    quantiles
  } = key.keyType;
  const sortedQuantiles = pipe(quantiles, sort(Order4));
  const values5 = Array(maxSize);
  let head7 = 0;
  let count3 = 0;
  let sum3 = 0;
  let min4 = Number.MAX_VALUE;
  let max6 = Number.MIN_VALUE;
  const snapshot = (now) => {
    const builder = [];
    let i = 0;
    while (i !== maxSize - 1) {
      const item = values5[i];
      if (item != null) {
        const [t, v] = item;
        const age = millis(now - t);
        if (greaterThanOrEqualTo3(age, zero2) && age <= maxAge) {
          builder.push(v);
        }
      }
      i = i + 1;
    }
    return calculateQuantiles(error2, sortedQuantiles, sort(builder, Order4));
  };
  const observe = (value3, timestamp) => {
    if (maxSize > 0) {
      head7 = head7 + 1;
      const target = head7 % maxSize;
      values5[target] = [timestamp, value3];
    }
    count3 = count3 + 1;
    sum3 = sum3 + value3;
    if (value3 < min4) {
      min4 = value3;
    }
    if (value3 > max6) {
      max6 = value3;
    }
  };
  return make31({
    get: () => summary2({
      error: error2,
      quantiles: snapshot(Date.now()),
      count: count3,
      min: min4,
      max: max6,
      sum: sum3
    }),
    update: ([value3, timestamp]) => observe(value3, timestamp)
  });
};
var calculateQuantiles = (error2, sortedQuantiles, sortedSamples) => {
  const sampleCount = sortedSamples.length;
  if (!isNonEmptyReadonlyArray(sortedQuantiles)) {
    return empty3();
  }
  const head7 = sortedQuantiles[0];
  const tail2 = sortedQuantiles.slice(1);
  const resolvedHead = resolveQuantile(error2, sampleCount, none2(), 0, head7, sortedSamples);
  const resolved = of(resolvedHead);
  tail2.forEach((quantile) => {
    resolved.push(resolveQuantile(error2, sampleCount, resolvedHead.value, resolvedHead.consumed, quantile, resolvedHead.rest));
  });
  return map3(resolved, (rq) => [rq.quantile, rq.value]);
};
var resolveQuantile = (error2, sampleCount, current2, consumed, quantile, rest) => {
  let error_1 = error2;
  let sampleCount_1 = sampleCount;
  let current_1 = current2;
  let consumed_1 = consumed;
  let quantile_1 = quantile;
  let rest_1 = rest;
  let error_2 = error2;
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
    const sameHead = span(rest_1, (n) => n <= rest_1[0]);
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
      return {
        quantile: quantile_1,
        value: current_1,
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/metric/pair.js
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/metric/registry.js
var MetricRegistrySymbolKey = "effect/MetricRegistry";
var MetricRegistryTypeId = /* @__PURE__ */ Symbol.for(MetricRegistrySymbolKey);
var MetricRegistryImpl = class {
  [MetricRegistryTypeId] = MetricRegistryTypeId;
  map = empty19();
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
    let value3 = pipe(this.map, get9(key), getOrUndefined);
    if (value3 == null) {
      const counter6 = counter4(key);
      if (!pipe(this.map, has5(key))) {
        pipe(this.map, set5(key, counter6));
      }
      value3 = counter6;
    }
    return value3;
  }
  getFrequency(key) {
    let value3 = pipe(this.map, get9(key), getOrUndefined);
    if (value3 == null) {
      const frequency5 = frequency3();
      if (!pipe(this.map, has5(key))) {
        pipe(this.map, set5(key, frequency5));
      }
      value3 = frequency5;
    }
    return value3;
  }
  getGauge(key) {
    let value3 = pipe(this.map, get9(key), getOrUndefined);
    if (value3 == null) {
      const gauge5 = gauge3(key, key.keyType.bigint ? BigInt(0) : 0);
      if (!pipe(this.map, has5(key))) {
        pipe(this.map, set5(key, gauge5));
      }
      value3 = gauge5;
    }
    return value3;
  }
  getHistogram(key) {
    let value3 = pipe(this.map, get9(key), getOrUndefined);
    if (value3 == null) {
      const histogram6 = histogram4(key);
      if (!pipe(this.map, has5(key))) {
        pipe(this.map, set5(key, histogram6));
      }
      value3 = histogram6;
    }
    return value3;
  }
  getSummary(key) {
    let value3 = pipe(this.map, get9(key), getOrUndefined);
    if (value3 == null) {
      const summary5 = summary3(key);
      if (!pipe(this.map, has5(key))) {
        pipe(this.map, set5(key, summary5));
      }
      value3 = summary5;
    }
    return value3;
  }
};
var make32 = () => {
  return new MetricRegistryImpl();
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/metric.js
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
var make33 = function(keyType, unsafeUpdate, unsafeValue) {
  const metric = Object.assign((effect3) => tap2(effect3, (a) => update4(metric, a)), {
    [MetricTypeId]: metricVariance,
    keyType,
    unsafeUpdate,
    unsafeValue,
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
  return make33(key.keyType, (input, extraTags) => hook(extraTags).update(input), (extraTags) => hook(extraTags).get());
};
var histogram5 = (name, boundaries, description2) => fromMetricKey(histogram2(name, boundaries, description2));
var tagged = /* @__PURE__ */ dual(3, (self, key, value3) => taggedWithLabels2(self, [make30(key, value3)]));
var taggedWithLabels2 = /* @__PURE__ */ dual(2, (self, extraTags) => {
  return make33(self.keyType, (input, extraTags1) => self.unsafeUpdate(input, union2(extraTags, extraTags1)), (extraTags1) => self.unsafeValue(union2(extraTags, extraTags1)));
});
var update4 = /* @__PURE__ */ dual(2, (self, input) => fiberRefGetWith(currentMetricLabels, (tags) => sync(() => self.unsafeUpdate(input, tags))));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/request.js
var RequestSymbolKey = "effect/Request";
var RequestTypeId = /* @__PURE__ */ Symbol.for(RequestSymbolKey);
var requestVariance = {
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _A: (_) => _
};
var RequestPrototype = {
  ...StructuralPrototype,
  [RequestTypeId]: requestVariance
};
var isRequest = (u) => hasProperty(u, RequestTypeId);
var Class2 = /* @__PURE__ */ function() {
  function Class7(args) {
    if (args) {
      Object.assign(this, args);
    }
  }
  Class7.prototype = RequestPrototype;
  return Class7;
}();
var complete = /* @__PURE__ */ dual(2, (self, result) => fiberRefGetWith(currentRequestMap, (map25) => sync(() => {
  if (map25.has(self)) {
    const entry = map25.get(self);
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/redBlackTree/iterator.js
var Direction = {
  Forward: 0,
  Backward: 1 << 0
};
var RedBlackTreeIterator = class _RedBlackTreeIterator {
  self;
  stack;
  direction;
  count = 0;
  constructor(self, stack, direction) {
    this.self = self;
    this.stack = stack;
    this.direction = direction;
  }
  /**
   * Clones the iterator
   */
  clone() {
    return new _RedBlackTreeIterator(this.self, this.stack.slice(), this.direction);
  }
  /**
   * Reverse the traversal direction
   */
  reversed() {
    return new _RedBlackTreeIterator(this.self, this.stack.slice(), this.direction === Direction.Forward ? Direction.Backward : Direction.Forward);
  }
  /**
   * Iterator next
   */
  next() {
    const entry = this.entry;
    this.count++;
    if (this.direction === Direction.Forward) {
      this.moveNext();
    } else {
      this.movePrev();
    }
    switch (entry._tag) {
      case "None": {
        return {
          done: true,
          value: this.count
        };
      }
      case "Some": {
        return {
          done: false,
          value: entry.value
        };
      }
    }
  }
  /**
   * Returns the key
   */
  get key() {
    if (this.stack.length > 0) {
      return some2(this.stack[this.stack.length - 1].key);
    }
    return none2();
  }
  /**
   * Returns the value
   */
  get value() {
    if (this.stack.length > 0) {
      return some2(this.stack[this.stack.length - 1].value);
    }
    return none2();
  }
  /**
   * Returns the key
   */
  get entry() {
    return map(last(this.stack), (node) => [node.key, node.value]);
  }
  /**
   * Returns the position of this iterator in the sorted list
   */
  get index() {
    let idx = 0;
    const stack = this.stack;
    if (stack.length === 0) {
      const r = this.self._root;
      if (r != null) {
        return r.count;
      }
      return 0;
    } else if (stack[stack.length - 1].left != null) {
      idx = stack[stack.length - 1].left.count;
    }
    for (let s = stack.length - 2; s >= 0; --s) {
      if (stack[s + 1] === stack[s].right) {
        ++idx;
        if (stack[s].left != null) {
          idx += stack[s].left.count;
        }
      }
    }
    return idx;
  }
  /**
   * Advances iterator to next element in list
   */
  moveNext() {
    const stack = this.stack;
    if (stack.length === 0) {
      return;
    }
    let n = stack[stack.length - 1];
    if (n.right != null) {
      n = n.right;
      while (n != null) {
        stack.push(n);
        n = n.left;
      }
    } else {
      stack.pop();
      while (stack.length > 0 && stack[stack.length - 1].right === n) {
        n = stack[stack.length - 1];
        stack.pop();
      }
    }
  }
  /**
   * Checks if there is a next element
   */
  get hasNext() {
    const stack = this.stack;
    if (stack.length === 0) {
      return false;
    }
    if (stack[stack.length - 1].right != null) {
      return true;
    }
    for (let s = stack.length - 1; s > 0; --s) {
      if (stack[s - 1].left === stack[s]) {
        return true;
      }
    }
    return false;
  }
  /**
   * Advances iterator to previous element in list
   */
  movePrev() {
    const stack = this.stack;
    if (stack.length === 0) {
      return;
    }
    let n = stack[stack.length - 1];
    if (n != null && n.left != null) {
      n = n.left;
      while (n != null) {
        stack.push(n);
        n = n.right;
      }
    } else {
      stack.pop();
      while (stack.length > 0 && stack[stack.length - 1].left === n) {
        n = stack[stack.length - 1];
        stack.pop();
      }
    }
  }
  /**
   * Checks if there is a previous element
   */
  get hasPrev() {
    const stack = this.stack;
    if (stack.length === 0) {
      return false;
    }
    if (stack[stack.length - 1].left != null) {
      return true;
    }
    for (let s = stack.length - 1; s > 0; --s) {
      if (stack[s - 1].right === stack[s]) {
        return true;
      }
    }
    return false;
  }
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/redBlackTree/node.js
var Color = {
  Red: 0,
  Black: 1 << 0
};
var repaint = ({
  count: count3,
  key,
  left: left3,
  right: right3,
  value: value3
}, color) => ({
  color,
  key,
  value: value3,
  left: left3,
  right: right3,
  count: count3
});
var recount = (node) => {
  node.count = 1 + (node.left?.count ?? 0) + (node.right?.count ?? 0);
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/redBlackTree.js
var RedBlackTreeSymbolKey = "effect/RedBlackTree";
var RedBlackTreeTypeId = /* @__PURE__ */ Symbol.for(RedBlackTreeSymbolKey);
var redBlackTreeVariance = {
  /* c8 ignore next */
  _Key: (_) => _,
  /* c8 ignore next */
  _Value: (_) => _
};
var RedBlackTreeProto = {
  [RedBlackTreeTypeId]: redBlackTreeVariance,
  [symbol]() {
    let hash4 = hash(RedBlackTreeSymbolKey);
    for (const item of this) {
      hash4 ^= pipe(hash(item[0]), combine(hash(item[1])));
    }
    return cached(this, hash4);
  },
  [symbol2](that) {
    if (isRedBlackTree(that)) {
      if ((this._root?.count ?? 0) !== (that._root?.count ?? 0)) {
        return false;
      }
      const entries2 = Array.from(that);
      return Array.from(this).every((itemSelf, i) => {
        const itemThat = entries2[i];
        return equals(itemSelf[0], itemThat[0]) && equals(itemSelf[1], itemThat[1]);
      });
    }
    return false;
  },
  [Symbol.iterator]() {
    const stack = [];
    let n = this._root;
    while (n != null) {
      stack.push(n);
      n = n.left;
    }
    return new RedBlackTreeIterator(this, stack, Direction.Forward);
  },
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "RedBlackTree",
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
var makeImpl3 = (ord, root) => {
  const tree = Object.create(RedBlackTreeProto);
  tree._ord = ord;
  tree._root = root;
  return tree;
};
var isRedBlackTree = (u) => hasProperty(u, RedBlackTreeTypeId);
var empty25 = (ord) => makeImpl3(ord, void 0);
var fromIterable10 = /* @__PURE__ */ dual(2, (entries2, ord) => {
  let tree = empty25(ord);
  for (const [key, value3] of entries2) {
    tree = insert(tree, key, value3);
  }
  return tree;
});
var findFirst5 = /* @__PURE__ */ dual(2, (self, key) => {
  const cmp = self._ord;
  let node = self._root;
  while (node !== void 0) {
    const d = cmp(key, node.key);
    if (equals(key, node.key)) {
      return some2(node.value);
    }
    if (d <= 0) {
      node = node.left;
    } else {
      node = node.right;
    }
  }
  return none2();
});
var has6 = /* @__PURE__ */ dual(2, (self, key) => isSome2(findFirst5(self, key)));
var insert = /* @__PURE__ */ dual(3, (self, key, value3) => {
  const cmp = self._ord;
  let n = self._root;
  const n_stack = [];
  const d_stack = [];
  while (n != null) {
    const d = cmp(key, n.key);
    n_stack.push(n);
    d_stack.push(d);
    if (d <= 0) {
      n = n.left;
    } else {
      n = n.right;
    }
  }
  n_stack.push({
    color: Color.Red,
    key,
    value: value3,
    left: void 0,
    right: void 0,
    count: 1
  });
  for (let s = n_stack.length - 2; s >= 0; --s) {
    const n2 = n_stack[s];
    if (d_stack[s] <= 0) {
      n_stack[s] = {
        color: n2.color,
        key: n2.key,
        value: n2.value,
        left: n_stack[s + 1],
        right: n2.right,
        count: n2.count + 1
      };
    } else {
      n_stack[s] = {
        color: n2.color,
        key: n2.key,
        value: n2.value,
        left: n2.left,
        right: n_stack[s + 1],
        count: n2.count + 1
      };
    }
  }
  for (let s = n_stack.length - 1; s > 1; --s) {
    const p = n_stack[s - 1];
    const n3 = n_stack[s];
    if (p.color === Color.Black || n3.color === Color.Black) {
      break;
    }
    const pp = n_stack[s - 2];
    if (pp.left === p) {
      if (p.left === n3) {
        const y = pp.right;
        if (y && y.color === Color.Red) {
          p.color = Color.Black;
          pp.right = repaint(y, Color.Black);
          pp.color = Color.Red;
          s -= 1;
        } else {
          pp.color = Color.Red;
          pp.left = p.right;
          p.color = Color.Black;
          p.right = pp;
          n_stack[s - 2] = p;
          n_stack[s - 1] = n3;
          recount(pp);
          recount(p);
          if (s >= 3) {
            const ppp = n_stack[s - 3];
            if (ppp.left === pp) {
              ppp.left = p;
            } else {
              ppp.right = p;
            }
          }
          break;
        }
      } else {
        const y = pp.right;
        if (y && y.color === Color.Red) {
          p.color = Color.Black;
          pp.right = repaint(y, Color.Black);
          pp.color = Color.Red;
          s -= 1;
        } else {
          p.right = n3.left;
          pp.color = Color.Red;
          pp.left = n3.right;
          n3.color = Color.Black;
          n3.left = p;
          n3.right = pp;
          n_stack[s - 2] = n3;
          n_stack[s - 1] = p;
          recount(pp);
          recount(p);
          recount(n3);
          if (s >= 3) {
            const ppp = n_stack[s - 3];
            if (ppp.left === pp) {
              ppp.left = n3;
            } else {
              ppp.right = n3;
            }
          }
          break;
        }
      }
    } else {
      if (p.right === n3) {
        const y = pp.left;
        if (y && y.color === Color.Red) {
          p.color = Color.Black;
          pp.left = repaint(y, Color.Black);
          pp.color = Color.Red;
          s -= 1;
        } else {
          pp.color = Color.Red;
          pp.right = p.left;
          p.color = Color.Black;
          p.left = pp;
          n_stack[s - 2] = p;
          n_stack[s - 1] = n3;
          recount(pp);
          recount(p);
          if (s >= 3) {
            const ppp = n_stack[s - 3];
            if (ppp.right === pp) {
              ppp.right = p;
            } else {
              ppp.left = p;
            }
          }
          break;
        }
      } else {
        const y = pp.left;
        if (y && y.color === Color.Red) {
          p.color = Color.Black;
          pp.left = repaint(y, Color.Black);
          pp.color = Color.Red;
          s -= 1;
        } else {
          p.left = n3.right;
          pp.color = Color.Red;
          pp.right = n3.left;
          n3.color = Color.Black;
          n3.right = p;
          n3.left = pp;
          n_stack[s - 2] = n3;
          n_stack[s - 1] = p;
          recount(pp);
          recount(p);
          recount(n3);
          if (s >= 3) {
            const ppp = n_stack[s - 3];
            if (ppp.right === pp) {
              ppp.right = n3;
            } else {
              ppp.left = n3;
            }
          }
          break;
        }
      }
    }
  }
  n_stack[0].color = Color.Black;
  return makeImpl3(self._ord, n_stack[0]);
});
var keysForward = (self) => keys4(self, Direction.Forward);
var keys4 = (self, direction) => {
  const begin = self[Symbol.iterator]();
  let count3 = 0;
  return {
    [Symbol.iterator]: () => keys4(self, direction),
    next: () => {
      count3++;
      const entry = begin.key;
      if (direction === Direction.Forward) {
        begin.moveNext();
      } else {
        begin.movePrev();
      }
      switch (entry._tag) {
        case "None": {
          return {
            done: true,
            value: count3
          };
        }
        case "Some": {
          return {
            done: false,
            value: entry.value
          };
        }
      }
    }
  };
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/RedBlackTree.js
var fromIterable11 = fromIterable10;
var has7 = has6;
var keys5 = keysForward;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/SortedSet.js
var TypeId14 = /* @__PURE__ */ Symbol.for("effect/SortedSet");
var SortedSetProto = {
  [TypeId14]: {
    _A: (_) => _
  },
  [symbol]() {
    return pipe(hash(this.keyTree), combine(hash(TypeId14)), cached(this));
  },
  [symbol2](that) {
    return isSortedSet(that) && equals(this.keyTree, that.keyTree);
  },
  [Symbol.iterator]() {
    return keys5(this.keyTree);
  },
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "SortedSet",
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
var fromTree = (keyTree) => {
  const a = Object.create(SortedSetProto);
  a.keyTree = keyTree;
  return a;
};
var isSortedSet = (u) => hasProperty(u, TypeId14);
var fromIterable12 = /* @__PURE__ */ dual(2, (iterable, ord) => fromTree(fromIterable11(Array.from(iterable).map((k) => [k, true]), ord)));
var every6 = /* @__PURE__ */ dual(2, (self, predicate) => {
  for (const value3 of self) {
    if (!predicate(value3)) {
      return false;
    }
  }
  return true;
});
var has8 = /* @__PURE__ */ dual(2, (self, value3) => has7(self.keyTree, value3));
var isSubset2 = /* @__PURE__ */ dual(2, (self, that) => every6(self, (a) => has8(that, a)));
var values4 = (self) => keys5(self.keyTree);
var getEquivalence7 = () => (a, b) => isSubset2(a, b) && isSubset2(b, a);

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/supervisor.js
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
  onStart(context7, effect3, parent2, fiber) {
    this.underlying.onStart(context7, effect3, parent2, fiber);
  }
  onEnd(value3, fiber) {
    this.underlying.onEnd(value3, fiber);
  }
  onEffect(fiber, effect3) {
    this.underlying.onEffect(fiber, effect3);
  }
  onSuspend(fiber) {
    this.underlying.onSuspend(fiber);
  }
  onResume(fiber) {
    this.underlying.onResume(fiber);
  }
  map(f) {
    return new _ProxySupervisor(this, pipe(this.value, map10(f)));
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
  onStart(context7, effect3, parent2, fiber) {
    this.left.onStart(context7, effect3, parent2, fiber);
    this.right.onStart(context7, effect3, parent2, fiber);
  }
  onEnd(value3, fiber) {
    this.left.onEnd(value3, fiber);
    this.right.onEnd(value3, fiber);
  }
  onEffect(fiber, effect3) {
    this.left.onEffect(fiber, effect3);
    this.right.onEffect(fiber, effect3);
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
    return new ProxySupervisor(this, pipe(this.value, map10(f)));
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
    return new ProxySupervisor(this, pipe(this.value, map10(f)));
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
  constructor(effect3) {
    this.effect = effect3;
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
    return new ProxySupervisor(this, pipe(this.value, map10(f)));
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
var fromEffect = (effect3) => {
  return new Const(effect3);
};
var none8 = /* @__PURE__ */ globalValue("effect/Supervisor/none", () => fromEffect(unit2));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Differ.js
var make35 = make15;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/supervisor/patch.js
var OP_EMPTY3 = "Empty";
var OP_ADD_SUPERVISOR = "AddSupervisor";
var OP_REMOVE_SUPERVISOR = "RemoveSupervisor";
var OP_AND_THEN2 = "AndThen";
var empty27 = {
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
  while (isNonEmpty(patches)) {
    const head7 = headNonEmpty2(patches);
    switch (head7._tag) {
      case OP_EMPTY3: {
        patches = tailNonEmpty2(patches);
        break;
      }
      case OP_ADD_SUPERVISOR: {
        supervisor = supervisor.zip(head7.supervisor);
        patches = tailNonEmpty2(patches);
        break;
      }
      case OP_REMOVE_SUPERVISOR: {
        supervisor = removeSupervisor(supervisor, head7.supervisor);
        patches = tailNonEmpty2(patches);
        break;
      }
      case OP_AND_THEN2: {
        patches = prepend2(head7.first)(prepend2(head7.second)(tailNonEmpty2(patches)));
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
    return empty9();
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
    return empty27;
  }
  const oldSupervisors = toSet2(oldValue);
  const newSupervisors = toSet2(newValue);
  const added = pipe(newSupervisors, difference4(oldSupervisors), reduce6(empty27, (patch9, supervisor) => combine8(patch9, {
    _tag: OP_ADD_SUPERVISOR,
    supervisor
  })));
  const removed = pipe(oldSupervisors, difference4(newSupervisors), reduce6(empty27, (patch9, supervisor) => combine8(patch9, {
    _tag: OP_REMOVE_SUPERVISOR,
    supervisor
  })));
  return combine8(added, removed);
};
var differ2 = /* @__PURE__ */ make35({
  empty: empty27,
  patch: patch8,
  combine: combine8,
  diff: diff7
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/fiberRuntime.js
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
  throw new Error(`BUG: FiberRuntime - ${JSON.stringify(_)} - please report an issue at https://github.com/Effect-TS/effect/issues`);
};
var YieldedOp = /* @__PURE__ */ Symbol.for("effect/internal/fiberRuntime/YieldedOp");
var yieldedOpChannel = /* @__PURE__ */ globalValue("effect/internal/fiberRuntime/yieldedOpChannel", () => ({
  currentOp: null
}));
var contOpSuccess = {
  [OP_ON_SUCCESS]: (_, cont, value3) => {
    return cont.effect_instruction_i1(value3);
  },
  ["OnStep"]: (_, _cont, value3) => {
    return exitSucceed(exitSucceed(value3));
  },
  [OP_ON_SUCCESS_AND_FAILURE]: (_, cont, value3) => {
    return cont.effect_instruction_i2(value3);
  },
  [OP_REVERT_FLAGS]: (self, cont, value3) => {
    self.patchRuntimeFlags(self._runtimeFlags, cont.patch);
    if (interruptible(self._runtimeFlags) && self.isInterrupted()) {
      return exitFailCause(self.getInterruptedCause());
    } else {
      return exitSucceed(value3);
    }
  },
  [OP_WHILE]: (self, cont, value3) => {
    cont.effect_instruction_i2(value3);
    if (cont.effect_instruction_i0()) {
      self.pushStack(cont);
      return cont.effect_instruction_i1();
    } else {
      return unit2;
    }
  }
};
var drainQueueWhileRunningTable = {
  [OP_INTERRUPT_SIGNAL]: (self, runtimeFlags2, cur, message2) => {
    self.processNewInterruptSignal(message2.cause);
    return interruptible(runtimeFlags2) ? exitFailCause(message2.cause) : cur;
  },
  [OP_RESUME]: (_self, _runtimeFlags, _cur, _message) => {
    throw new Error("It is illegal to have multiple concurrent run loops in a single fiber");
  },
  [OP_STATEFUL]: (self, runtimeFlags2, cur, message2) => {
    message2.onFiber(self, running2(runtimeFlags2));
    return cur;
  },
  [OP_YIELD_NOW]: (_self, _runtimeFlags, cur, _message) => {
    return flatMap8(yieldNow(), () => cur);
  }
};
var runBlockedRequests = (self) => forEachSequentialDiscard(flatten4(self), (requestsByRequestResolver) => forEachConcurrentDiscard(sequentialCollectionToChunk(requestsByRequestResolver), ([dataSource, sequential5]) => {
  const map25 = /* @__PURE__ */ new Map();
  const arr = [];
  for (const block of sequential5) {
    arr.push(toReadonlyArray(block));
    for (const entry of block) {
      map25.set(entry.request, entry);
    }
  }
  const flat = arr.flat();
  return fiberRefLocally(invokeWithInterrupt(dataSource.runAll(arr), flat, () => flat.forEach((entry) => {
    entry.listeners.interrupted = true;
  })), currentRequestMap, map25);
}, false, false));
var FiberRuntime = class {
  [FiberTypeId] = fiberVariance;
  [RuntimeFiberTypeId] = runtimeFiberVariance;
  pipe() {
    return pipeArguments(this, arguments);
  }
  _fiberRefs;
  _fiberId;
  _runtimeFlags;
  _queue = new Array();
  _children = null;
  _observers = new Array();
  _running = false;
  _stack = [];
  _asyncInterruptor = null;
  _asyncBlockingOn = null;
  _exitValue = null;
  _steps = [];
  _supervisor;
  _scheduler;
  _tracer;
  currentOpCount = 0;
  isYielding = false;
  constructor(fiberId3, fiberRefs0, runtimeFlags0) {
    this._runtimeFlags = runtimeFlags0;
    this._fiberId = fiberId3;
    this._fiberRefs = fiberRefs0;
    this._supervisor = this.getFiberRef(currentSupervisor);
    this._scheduler = this.getFiberRef(currentScheduler);
    if (runtimeMetrics(runtimeFlags0)) {
      const tags = this.getFiberRef(currentMetricLabels);
      fiberStarted.unsafeUpdate(1, tags);
      fiberActive.unsafeUpdate(1, tags);
    }
    this._tracer = get4(this.getFiberRef(currentServices), tracerTag);
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
  resume(effect3) {
    this.tell(resume(effect3));
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
        return state._runtimeFlags;
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
  tell(message2) {
    this._queue.push(message2);
    if (!this._running) {
      this._running = true;
      this.drainQueueLaterOnExecutor();
    }
  }
  get await() {
    return async((resume2) => {
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
    this.setFiberRef(currentRuntimeFlags, this._runtimeFlags);
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
  setFiberRef(fiberRef, value3) {
    this._fiberRefs = updateAs(this._fiberRefs, {
      fiberId: this._fiberId,
      fiberRef,
      value: value3
    });
    this.refreshRefCache();
  }
  refreshRefCache() {
    this._tracer = get4(this.getFiberRef(currentServices), tracerTag);
    this._supervisor = this.getFiberRef(currentSupervisor);
    this._scheduler = this.getFiberRef(currentScheduler);
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
    this._scheduler.scheduleTask(this.run, this.getFiberRef(currentSchedulingPriority));
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
      const message2 = this._queue.splice(0, 1)[0];
      cur = drainQueueWhileRunningTable[message2._tag](this, runtimeFlags2, cur, message2);
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
  addInterruptedCause(cause4) {
    const oldSC = this.getFiberRef(currentInterruptedCause);
    this.setFiberRef(currentInterruptedCause, sequential(oldSC, cause4));
  }
  /**
   * Processes a new incoming interrupt signal.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  processNewInterruptSignal(cause4) {
    this.addInterruptedCause(cause4);
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
      let isDone6 = false;
      const body = () => {
        const next = it.next();
        if (!next.done) {
          return asUnit2(next.value.await);
        } else {
          return sync(() => {
            isDone6 = true;
          });
        }
      };
      return whileLoop({
        while: () => !isDone6,
        body,
        step: () => {
        }
      });
    }
    return null;
  }
  reportExitValue(exit4) {
    if (runtimeMetrics(this._runtimeFlags)) {
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
        this.log("Fiber terminated with a non handled error", exit4.cause, level);
      }
    }
  }
  setExitValue(exit4) {
    this._exitValue = exit4;
    this.reportExitValue(exit4);
    for (let i = this._observers.length - 1; i >= 0; i--) {
      this._observers[i](exit4);
    }
  }
  getLoggers() {
    return this.getFiberRef(currentLoggers);
  }
  log(message2, cause4, overrideLogLevel) {
    const logLevel = isSome2(overrideLogLevel) ? overrideLogLevel.value : this.getFiberRef(currentLogLevel);
    const minimumLogLevel3 = this.getFiberRef(currentMinimumLogLevel);
    if (greaterThan4(minimumLogLevel3, logLevel)) {
      return;
    }
    const spans = this.getFiberRef(currentLogSpan);
    const annotations4 = this.getFiberRef(currentLogAnnotations);
    const loggers = this.getLoggers();
    const contextMap = this.getFiberRefs();
    if (size4(loggers) > 0) {
      const clockService = get4(this.getFiberRef(currentServices), clockTag);
      const date = new Date(clockService.unsafeCurrentTimeMillis());
      for (const logger of loggers) {
        logger.log({
          fiberId: this.id(),
          logLevel,
          message: message2,
          cause: cause4,
          context: contextMap,
          spans,
          annotations: annotations4,
          date
        });
      }
    }
  }
  /**
   * Evaluates a single message on the current thread, while the fiber is
   * suspended. This method should only be called while evaluation of the
   * fiber's effect is suspended due to an asynchronous operation.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  evaluateMessageWhileSuspended(message2) {
    switch (message2._tag) {
      case OP_YIELD_NOW: {
        return EvaluationSignalYieldNow;
      }
      case OP_INTERRUPT_SIGNAL: {
        this.processNewInterruptSignal(message2.cause);
        if (this._asyncInterruptor !== null) {
          this._asyncInterruptor(exitFailCause(message2.cause));
          this._asyncInterruptor = null;
        }
        return EvaluationSignalContinue;
      }
      case OP_RESUME: {
        this._asyncInterruptor = null;
        this._asyncBlockingOn = null;
        this.evaluateEffect(message2.effect);
        return EvaluationSignalContinue;
      }
      case OP_STATEFUL: {
        message2.onFiber(this, this._exitValue !== null ? done4 : suspended2(this._runtimeFlags, this._asyncBlockingOn));
        return EvaluationSignalContinue;
      }
      default: {
        return absurd(message2);
      }
    }
  }
  /**
   * Evaluates an effect until completion, potentially asynchronously.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  evaluateEffect(effect0) {
    this._supervisor.onResume(this);
    try {
      let effect3 = interruptible(this._runtimeFlags) && this.isInterrupted() ? exitFailCause(this.getInterruptedCause()) : effect0;
      while (effect3 !== null) {
        const eff = effect3;
        const exit4 = this.runLoop(eff);
        if (exit4 === YieldedOp) {
          const op = yieldedOpChannel.currentOp;
          yieldedOpChannel.currentOp = null;
          if (op._op === OP_YIELD) {
            if (cooperativeYielding(this._runtimeFlags)) {
              this.tell(yieldNow2());
              this.tell(resume(exitUnit));
              effect3 = null;
            } else {
              effect3 = exitUnit;
            }
          } else if (op._op === OP_ASYNC) {
            effect3 = null;
          }
        } else {
          this._runtimeFlags = pipe(this._runtimeFlags, enable2(WindDown));
          const interruption2 = this.interruptAllChildren();
          if (interruption2 !== null) {
            effect3 = flatMap8(interruption2, () => exit4);
          } else {
            if (this._queue.length === 0) {
              this.setExitValue(exit4);
            } else {
              this.tell(resume(exit4));
            }
            effect3 = null;
          }
        }
      }
    } finally {
      this._supervisor.onSuspend(this);
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
  start(effect3) {
    if (!this._running) {
      this._running = true;
      const prev = globalThis[currentFiberURI];
      globalThis[currentFiberURI] = this;
      try {
        this.evaluateEffect(effect3);
      } finally {
        this._running = false;
        globalThis[currentFiberURI] = prev;
        if (this._queue.length > 0) {
          this.drainQueueLaterOnExecutor();
        }
      }
    } else {
      this.tell(resume(effect3));
    }
  }
  /**
   * Begins execution of the effect associated with this fiber on in the
   * background, and on the correct thread pool. This can be called to "kick
   * off" execution of a fiber after it has been created, in hopes that the
   * effect can be executed synchronously.
   */
  startFork(effect3) {
    this.tell(resume(effect3));
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
    this._runtimeFlags = newRuntimeFlags;
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
    const callback = (effect3) => {
      if (!alreadyCalled) {
        alreadyCalled = true;
        this.tell(resume(effect3));
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
        flags: this._runtimeFlags
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
      if (frame._op !== OP_ON_SUCCESS && frame._op !== OP_WHILE) {
        return frame;
      }
      frame = this.popStack();
    }
  }
  [OP_TAG](op) {
    return map10(fiberRefGet(currentContext), (context7) => unsafeGet3(context7, op));
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
  [OP_SYNC](op) {
    const value3 = op.effect_instruction_i0();
    const cont = this.getNextSuccessCont();
    if (cont !== void 0) {
      if (!(cont._op in contOpSuccess)) {
        absurd(cont);
      }
      return contOpSuccess[cont._op](this, cont, value3);
    } else {
      yieldedOpChannel.currentOp = exitSucceed(value3);
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
    const cause4 = op.effect_instruction_i0;
    const cont = this.getNextFailCont();
    if (cont !== void 0) {
      switch (cont._op) {
        case OP_ON_FAILURE:
        case OP_ON_SUCCESS_AND_FAILURE: {
          if (!(interruptible(this._runtimeFlags) && this.isInterrupted())) {
            return cont.effect_instruction_i1(cause4);
          } else {
            return exitFailCause(stripFailures(cause4));
          }
        }
        case "OnStep": {
          if (!(interruptible(this._runtimeFlags) && this.isInterrupted())) {
            return exitSucceed(exitFailCause(cause4));
          } else {
            return exitFailCause(stripFailures(cause4));
          }
        }
        case OP_REVERT_FLAGS: {
          this.patchRuntimeFlags(this._runtimeFlags, cont.patch);
          if (interruptible(this._runtimeFlags) && this.isInterrupted()) {
            return exitFailCause(sequential(cause4, this.getInterruptedCause()));
          } else {
            return exitFailCause(cause4);
          }
        }
        default: {
          absurd(cont);
        }
      }
    } else {
      yieldedOpChannel.currentOp = exitFailCause(cause4);
      return YieldedOp;
    }
  }
  [OP_WITH_RUNTIME](op) {
    return op.effect_instruction_i0(this, running2(this._runtimeFlags));
  }
  ["Blocked"](op) {
    const refs = this.getFiberRefs();
    const flags = this._runtimeFlags;
    if (this._steps.length > 0) {
      const frames = [];
      const snap = this._steps[this._steps.length - 1];
      let frame = this.popStack();
      while (frame && frame._op !== "OnStep") {
        frames.push(frame);
        frame = this.popStack();
      }
      this.setFiberRefs(snap.refs);
      this._runtimeFlags = snap.flags;
      const patchRefs = diff6(snap.refs, refs);
      const patchFlags = diff4(snap.flags, flags);
      return exitSucceed(blocked(op.effect_instruction_i0, withFiberRuntime((newFiber) => {
        while (frames.length > 0) {
          newFiber.pushStack(frames.pop());
        }
        newFiber.setFiberRefs(patch7(newFiber.id(), newFiber.getFiberRefs())(patchRefs));
        newFiber._runtimeFlags = patch4(patchFlags)(newFiber._runtimeFlags);
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
    const oldRuntimeFlags = this._runtimeFlags;
    const newRuntimeFlags = patch4(oldRuntimeFlags, updateFlags);
    if (interruptible(newRuntimeFlags) && this.isInterrupted()) {
      return exitFailCause(this.getInterruptedCause());
    } else {
      this.patchRuntimeFlags(this._runtimeFlags, updateFlags);
      if (op.effect_instruction_i1) {
        const revertFlags = diff4(newRuntimeFlags, oldRuntimeFlags);
        this.pushStack(new RevertFlags(revertFlags, op));
        return op.effect_instruction_i1(oldRuntimeFlags);
      } else {
        return exitUnit;
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
    this.initiateAsync(this._runtimeFlags, op.effect_instruction_i0);
    yieldedOpChannel.currentOp = op;
    return YieldedOp;
  }
  [OP_YIELD](op) {
    this.isYielding = false;
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
      return exitUnit;
    }
  }
  [OP_COMMIT](op) {
    return op.commit();
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
      if ((this._runtimeFlags & OpSupervision) !== 0) {
        this._supervisor.onEffect(this, cur);
      }
      if (this._queue.length > 0) {
        cur = this.drainQueueWhileRunning(this._runtimeFlags, cur);
      }
      if (!this.isYielding) {
        this.currentOpCount += 1;
        const shouldYield = this._scheduler.shouldYield(this);
        if (shouldYield !== false) {
          this.isYielding = true;
          this.currentOpCount = 0;
          const oldCur = cur;
          cur = flatMap8(yieldNow({
            priority: shouldYield
          }), () => oldCur);
        }
      }
      try {
        if (!("_op" in cur) || !(cur._op in this)) {
          absurd(cur);
        }
        cur = this._tracer.context(() => {
          if (getCurrentVersion() !== cur[EffectTypeId3]._V) {
            return dieMessage(`Cannot execute an Effect versioned ${cur[EffectTypeId3]._V} with a Runtime of version ${getCurrentVersion()}`);
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
        if (isEffectError(e)) {
          cur = exitFailCause(e.cause);
        } else if (isInterruptedException(e)) {
          cur = exitFailCause(sequential(die(e), interrupt(none4)));
        } else {
          cur = exitFailCause(die(e));
        }
      }
    }
  }
  run = () => {
    this.drainQueueOnCurrentThread();
  };
};
var currentMinimumLogLevel = /* @__PURE__ */ globalValue("effect/FiberRef/currentMinimumLogLevel", () => fiberRefUnsafeMake(fromLiteral("Info")));
var getConsole = (refs) => {
  const defaultServicesValue = getOrDefault2(refs, currentServices);
  const cnsl = get4(defaultServicesValue, consoleTag);
  return cnsl.unsafe;
};
var defaultLogger = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Logger/defaultLogger"), () => makeLogger((options) => {
  const formatted = stringLogger.log(options);
  getConsole(options.context).log(formatted);
}));
var jsonLogger2 = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Logger/jsonLogger"), () => makeLogger((options) => {
  const formatted = jsonLogger.log(options);
  getConsole(options.context).log(formatted);
}));
var logFmtLogger = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Logger/logFmtLogger"), () => makeLogger((options) => {
  const formatted = logfmtLogger.log(options);
  getConsole(options.context).log(formatted);
}));
var structuredLogger2 = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Logger/structuredLogger"), () => makeLogger((options) => {
  const formatted = structuredLogger.log(options);
  getConsole(options.context).log(formatted);
}));
var tracerLogger = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Logger/tracerLogger"), () => makeLogger(({
  annotations: annotations4,
  cause: cause4,
  context: context7,
  fiberId: fiberId3,
  logLevel,
  message: message2
}) => {
  const span4 = flatMap(get10(context7, currentContext), getOption2(spanTag));
  const clockService = map(get10(context7, currentServices), (_) => get4(_, clockTag));
  if (span4._tag === "None" || span4.value._tag === "ExternalSpan" || clockService._tag === "None") {
    return;
  }
  const attributes = Object.fromEntries(map7(annotations4, (value3) => serializeUnknown(value3)));
  attributes["effect.fiberId"] = threadName2(fiberId3);
  attributes["effect.logLevel"] = logLevel.label;
  if (cause4 !== null && cause4._tag !== "Empty") {
    attributes["effect.cause"] = pretty(cause4);
  }
  span4.value.event(String(message2), clockService.value.unsafeCurrentTimeNanos(), attributes);
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
var batchedLogger = /* @__PURE__ */ dual(3, (self, window, f) => flatMap8(scope, (scope5) => {
  let buffer3 = [];
  const flush = suspend(() => {
    if (buffer3.length === 0) {
      return unit2;
    }
    const arr = buffer3;
    buffer3 = [];
    return f(arr);
  });
  return uninterruptibleMask((restore) => pipe(sleep3(window), zipRight2(flush), forever, restore, forkDaemon, flatMap8((fiber) => scopeAddFinalizer(scope5, interruptFiber(fiber))), zipRight2(addFinalizer(() => flush)), as2(makeLogger((options) => {
    buffer3.push(self.log(options));
  }))));
}));
var acquireRelease = /* @__PURE__ */ dual((args) => isEffect(args[0]), (acquire, release) => uninterruptible(tap2(acquire, (a) => addFinalizer((exit4) => release(a, exit4)))));
var acquireReleaseInterruptible = /* @__PURE__ */ dual((args) => isEffect(args[0]), (acquire, release) => ensuring(acquire, addFinalizer((exit4) => release(exit4))));
var addFinalizer = (finalizer3) => withFiberRuntime((runtime6) => {
  const acquireRefs = runtime6.getFiberRefs();
  const acquireFlags = runtime6._runtimeFlags;
  return flatMap8(scope, (scope5) => scopeAddFinalizerExit(scope5, (exit4) => withFiberRuntime((runtimeFinalizer) => {
    const preRefs = runtimeFinalizer.getFiberRefs();
    const preFlags = runtimeFinalizer._runtimeFlags;
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
var exists2 = /* @__PURE__ */ dual((args) => isIterable(args[0]), (elements, f, options) => matchSimple(options?.concurrency, () => suspend(() => existsLoop(elements[Symbol.iterator](), 0, f)), () => matchEffect(forEach7(elements, (a, i) => if_(f(a, i), {
  onTrue: fail2(_existsParFound),
  onFalse: unit2
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
var filter7 = /* @__PURE__ */ dual((args) => isIterable(args[0]), (elements, f, options) => {
  const predicate = options?.negate ? (a, i) => map10(f(a, i), not) : f;
  return matchSimple(options?.concurrency, () => suspend(() => fromIterable2(elements).reduceRight((effect3, a, i) => zipWith4(effect3, suspend(() => predicate(a, i)), (list2, b) => b ? [a, ...list2] : list2), sync(() => new Array()))), () => map10(forEach7(elements, (a, i) => map10(predicate(a, i), (b) => b ? some2(a) : none2()), options), getSomes2));
});
var allResolveInput = (input) => {
  if (Array.isArray(input) || isIterable(input)) {
    return [input, none2()];
  }
  const keys6 = Object.keys(input);
  const size16 = keys6.length;
  return [keys6.map((k) => input[k]), some2((values5) => {
    const res = {};
    for (let i = 0; i < size16; i++) {
      res[keys6[i]] = values5[i];
    }
    return res;
  })];
};
var allValidate = (effects, reconcile, options) => {
  const eitherEffects = [];
  for (const effect3 of effects) {
    eitherEffects.push(either2(effect3));
  }
  return flatMap8(forEach7(eitherEffects, identity, {
    concurrency: options?.concurrency,
    batching: options?.batching
  }), (eithers) => {
    const none11 = none2();
    const size16 = eithers.length;
    const errors = new Array(size16);
    const successes = new Array(size16);
    let errored = false;
    for (let i = 0; i < size16; i++) {
      const either8 = eithers[i];
      if (either8._tag === "Left") {
        errors[i] = some2(either8.left);
        errored = true;
      } else {
        successes[i] = either8.right;
        errors[i] = none11;
      }
    }
    if (errored) {
      return reconcile._tag === "Some" ? fail2(reconcile.value(errors)) : fail2(errors);
    } else if (options?.discard) {
      return unit2;
    }
    return reconcile._tag === "Some" ? succeed(reconcile.value(successes)) : succeed(successes);
  });
};
var allEither = (effects, reconcile, options) => {
  const eitherEffects = [];
  for (const effect3 of effects) {
    eitherEffects.push(either2(effect3));
  }
  if (options?.discard) {
    return forEach7(eitherEffects, identity, {
      concurrency: options?.concurrency,
      batching: options?.batching,
      discard: true
    });
  }
  return map10(forEach7(eitherEffects, identity, {
    concurrency: options?.concurrency,
    batching: options?.batching
  }), (eithers) => reconcile._tag === "Some" ? reconcile.value(eithers) : eithers);
};
var all3 = (arg, options) => {
  const [effects, reconcile] = allResolveInput(arg);
  if (options?.mode === "validate") {
    return allValidate(effects, reconcile, options);
  } else if (options?.mode === "either") {
    return allEither(effects, reconcile, options);
  }
  return reconcile._tag === "Some" ? map10(forEach7(effects, identity, options), reconcile.value) : forEach7(effects, identity, options);
};
var allWith = (options) => (arg) => all3(arg, options);
var allSuccesses = (elements, options) => map10(all3(fromIterable2(elements).map(exit), options), filterMap3((exit4) => exitIsSuccess(exit4) ? some2(exit4.effect_instruction_i0) : none2()));
var replicate2 = /* @__PURE__ */ dual(2, (self, n) => Array.from({
  length: n
}, () => self));
var replicateEffect = /* @__PURE__ */ dual((args) => isEffect(args[0]), (self, n, options) => all3(replicate2(self, n), options));
var forEach7 = /* @__PURE__ */ dual((args) => isIterable(args[0]), (self, f, options) => withFiberRuntime((r) => {
  const isRequestBatchingEnabled = options?.batching === true || options?.batching === "inherit" && r.getFiberRef(currentRequestBatching);
  if (options?.discard) {
    return match8(options.concurrency, () => finalizersMask(sequential3)((restore) => isRequestBatchingEnabled ? forEachConcurrentDiscard(self, (a, i) => restore(f(a, i)), true, false, 1) : forEachSequentialDiscard(self, (a, i) => restore(f(a, i)))), () => finalizersMask(parallel3)((restore) => forEachConcurrentDiscard(self, (a, i) => restore(f(a, i)), isRequestBatchingEnabled, false)), (n) => finalizersMask(parallelN2(n))((restore) => forEachConcurrentDiscard(self, (a, i) => restore(f(a, i)), isRequestBatchingEnabled, false, n)));
  }
  return match8(options?.concurrency, () => finalizersMask(sequential3)((restore) => isRequestBatchingEnabled ? forEachParN(self, 1, (a, i) => restore(f(a, i)), true) : forEachSequential(self, (a, i) => restore(f(a, i)))), () => finalizersMask(parallel3)((restore) => forEachParUnbounded(self, (a, i) => restore(f(a, i)), isRequestBatchingEnabled)), (n) => finalizersMask(parallelN2(n))((restore) => forEachParN(self, n, (a, i) => restore(f(a, i)), isRequestBatchingEnabled)));
}));
var forEachParUnbounded = (self, f, batching2) => suspend(() => {
  const as9 = fromIterable2(self);
  const array6 = new Array(as9.length);
  const fn = (a, i) => flatMap8(f(a, i), (b) => sync(() => array6[i] = b));
  return zipRight2(forEachConcurrentDiscard(as9, fn, batching2, false), succeed(array6));
});
var forEachConcurrentDiscard = (self, f, batching2, processAll, n) => uninterruptibleMask((restore) => transplant((graft) => withFiberRuntime((parent2) => {
  let todos = Array.from(self).reverse();
  let target = todos.length;
  if (target === 0) {
    return unit2;
  }
  let counter6 = 0;
  let interrupted2 = false;
  const fibersCount = n ? Math.min(todos.length, n) : todos.length;
  const fibers = /* @__PURE__ */ new Set();
  const results = new Array();
  const interruptAll2 = () => fibers.forEach((fiber) => {
    fiber._scheduler.scheduleTask(() => {
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
      exits.push(exitUnit);
    }
    return exits;
  };
  const runFiber = (eff, interruptImmediately = false) => {
    const runnable = uninterruptible(graft(eff));
    const fiber = unsafeForkUnstarted(runnable, parent2, parent2._runtimeFlags, globalScope);
    parent2._scheduler.scheduleTask(() => {
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
    interrupted2 = true;
    interruptAll2();
  };
  const stepOrExit = batching2 ? step2 : exit;
  const processingFiber = runFiber(async((resume2) => {
    const pushResult = (res, index) => {
      if (res._op === "Blocked") {
        residual.push(res);
      } else {
        results.push({
          index,
          exit: res
        });
        if (res._op === "Failure" && !interrupted2) {
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
        if (interrupted2) {
          fiber._scheduler.scheduleTask(() => {
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
            }), () => exitUnit)));
          } else if (residual.length + results.length === target) {
            const requests = residual.map((blocked3) => blocked3.effect_instruction_i0).reduce(par);
            resume2(succeed(blocked(requests, forEachConcurrentDiscard([getOrElse(exitCollectAll(collectExits(), {
              parallel: true
            }), () => exitUnit), ...residual.map((blocked3) => blocked3.effect_instruction_i1)], (i) => i, batching2, true, n))));
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
  return asUnit2(onExit(flatten6(restore(join2(processingFiber))), exitMatch({
    onFailure: () => {
      onInterruptSignal();
      const target2 = residual.length + 1;
      const concurrency2 = Math.min(typeof n === "number" ? n : residual.length, residual.length);
      const toPop = Array.from(residual);
      return async((cb) => {
        const exits = [];
        let count3 = 0;
        let index = 0;
        const check2 = (index2, hitNext) => (exit4) => {
          exits[index2] = exit4;
          count3++;
          if (count3 === target2) {
            cb(getOrThrow(exitCollectAll(exits, {
              parallel: true
            })));
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
        for (let i = 0; i < concurrency2; i++) {
          next();
        }
      });
    },
    onSuccess: () => forEachSequential(joinOrder, (f2) => f2.inheritAll)
  })));
})));
var forEachParN = (self, n, f, batching2) => suspend(() => {
  const as9 = fromIterable2(self);
  const array6 = new Array(as9.length);
  const fn = (a, i) => map10(f(a, i), (b) => array6[i] = b);
  return zipRight2(forEachConcurrentDiscard(as9, fn, batching2, false, n), succeed(array6));
});
var fork = (self) => withFiberRuntime((state, status2) => succeed(unsafeFork(self, state, status2.runtimeFlags)));
var forkDaemon = (self) => forkWithScopeOverride(self, globalScope);
var forkWithErrorHandler = /* @__PURE__ */ dual(2, (self, handler) => fork(onError(self, (cause4) => {
  const either8 = failureOrCause(cause4);
  switch (either8._tag) {
    case "Left":
      return handler(either8.left);
    case "Right":
      return failCause(either8.right);
  }
})));
var unsafeFork = (effect3, parentFiber, parentRuntimeFlags, overrideScope = null) => {
  const childFiber = unsafeMakeChildFiber(effect3, parentFiber, parentRuntimeFlags, overrideScope);
  childFiber.resume(effect3);
  return childFiber;
};
var unsafeForkUnstarted = (effect3, parentFiber, parentRuntimeFlags, overrideScope = null) => {
  const childFiber = unsafeMakeChildFiber(effect3, parentFiber, parentRuntimeFlags, overrideScope);
  return childFiber;
};
var unsafeMakeChildFiber = (effect3, parentFiber, parentRuntimeFlags, overrideScope = null) => {
  const childId = unsafeMake2();
  const parentFiberRefs = parentFiber.getFiberRefs();
  const childFiberRefs = forkAs(parentFiberRefs, childId);
  const childFiber = new FiberRuntime(childId, childFiberRefs, parentRuntimeFlags);
  const childContext = getOrDefault(childFiberRefs, currentContext);
  const supervisor = childFiber._supervisor;
  supervisor.onStart(childContext, effect3, some2(parentFiber), childFiber);
  childFiber.addObserver((exit4) => supervisor.onEnd(exit4, childFiber));
  const parentScope = overrideScope !== null ? overrideScope : pipe(parentFiber.getFiberRef(currentForkScopeOverride), getOrElse(() => parentFiber.scope()));
  parentScope.add(parentRuntimeFlags, childFiber);
  return childFiber;
};
var forkWithScopeOverride = (self, scopeOverride) => withFiberRuntime((parentFiber, parentStatus) => succeed(unsafeFork(self, parentFiber, parentStatus.runtimeFlags, scopeOverride)));
var mergeAll = /* @__PURE__ */ dual((args) => isFunction2(args[2]), (elements, zero3, f, options) => matchSimple(options?.concurrency, () => fromIterable2(elements).reduce((acc, a, i) => zipWith4(acc, a, (acc2, a2) => f(acc2, a2, i)), succeed(zero3)), () => flatMap8(make29(zero3), (acc) => flatMap8(forEach7(elements, (effect3, i) => flatMap8(effect3, (a) => update3(acc, (b) => f(b, a, i))), options), () => get13(acc)))));
var partition4 = /* @__PURE__ */ dual((args) => isIterable(args[0]), (elements, f, options) => pipe(forEach7(elements, (a, i) => either2(f(a, i)), options), map10((chunk4) => partitionMap4(chunk4, identity))));
var validateAll = /* @__PURE__ */ dual((args) => isIterable(args[0]), (elements, f, options) => flatMap8(partition4(elements, f, {
  concurrency: options?.concurrency,
  batching: options?.batching
}), ([es, bs]) => es.length === 0 ? options?.discard ? unit2 : succeed(bs) : fail2(es)));
var raceAll = (all5) => {
  const list2 = fromIterable3(all5);
  if (!isNonEmpty(list2)) {
    return dieSync(() => new IllegalArgumentException(`Received an empty collection of effects`));
  }
  const self = headNonEmpty2(list2);
  const effects = tailNonEmpty2(list2);
  const inheritAll3 = (res) => pipe(inheritAll(res[1]), as2(res[0]));
  return pipe(deferredMake(), flatMap8((done9) => pipe(make29(effects.length), flatMap8((fails) => uninterruptibleMask((restore) => pipe(fork(interruptible2(self)), flatMap8((head7) => pipe(effects, forEachSequential((effect3) => fork(interruptible2(effect3))), map10((fibers) => unsafeFromArray(fibers)), map10((tail2) => pipe(tail2, prepend2(head7))), tap2((fibers) => pipe(fibers, reduce2(unit2, (effect3, fiber) => pipe(effect3, zipRight2(pipe(_await2(fiber), flatMap8(raceAllArbiter(fibers, fiber, done9, fails)), fork, asUnit2)))))), flatMap8((fibers) => pipe(restore(pipe(_await(done9), flatMap8(inheritAll3))), onInterrupt(() => pipe(fibers, reduce2(unit2, (effect3, fiber) => pipe(effect3, zipLeft2(interruptFiber(fiber))))))))))))))));
};
var raceAllArbiter = (fibers, winner, deferred, fails) => (exit4) => exitMatchEffect(exit4, {
  onFailure: (cause4) => pipe(modify5(fails, (fails2) => [fails2 === 0 ? pipe(deferredFailCause(deferred, cause4), asUnit2) : unit2, fails2 - 1]), flatten6),
  onSuccess: (value3) => pipe(deferredSucceed(deferred, [value3, winner]), flatMap8((set10) => set10 ? pipe(fromIterable3(fibers), reduce2(unit2, (effect3, fiber) => fiber === winner ? effect3 : pipe(effect3, zipLeft2(interruptFiber(fiber))))) : unit2))
});
var reduceEffect = /* @__PURE__ */ dual((args) => isIterable(args[0]), (elements, zero3, f, options) => matchSimple(options?.concurrency, () => fromIterable2(elements).reduce((acc, a, i) => zipWith4(acc, a, (acc2, a2) => f(acc2, a2, i)), zero3), () => suspend(() => pipe(mergeAll([zero3, ...elements], none2(), (acc, elem, i) => {
  switch (acc._tag) {
    case "None": {
      return some2(elem);
    }
    case "Some": {
      return some2(f(acc.value, elem, i));
    }
  }
}, options), map10((option4) => {
  switch (option4._tag) {
    case "None": {
      throw new Error("BUG: Effect.reduceEffect - please report an issue at https://github.com/Effect-TS/effect/issues");
    }
    case "Some": {
      return option4.value;
    }
  }
})))));
var parallelFinalizers = (self) => contextWithEffect((context7) => match(getOption2(context7, scopeTag), {
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
var parallelNFinalizers = (parallelism) => (self) => contextWithEffect((context7) => match(getOption2(context7, scopeTag), {
  onNone: () => self,
  onSome: (scope5) => {
    if (scope5.strategy._tag === "ParallelN" && scope5.strategy.parallelism === parallelism) {
      return self;
    }
    return flatMap8(scopeFork(scope5, parallelN2(parallelism)), (inner) => scopeExtend(self, inner));
  }
}));
var finalizersMask = (strategy) => (self) => contextWithEffect((context7) => match(getOption2(context7, scopeTag), {
  onNone: () => self(identity),
  onSome: (scope5) => {
    const patch9 = strategy._tag === "Parallel" ? parallelFinalizers : strategy._tag === "Sequential" ? sequentialFinalizers : parallelNFinalizers(strategy.parallelism);
    switch (scope5.strategy._tag) {
      case "Parallel":
        return patch9(self(parallelFinalizers));
      case "Sequential":
        return patch9(self(sequentialFinalizers));
      case "ParallelN":
        return patch9(self(parallelNFinalizers(scope5.strategy.parallelism)));
    }
  }
}));
var scopeWith = (f) => flatMap8(scopeTag, f);
var scopedEffect = (effect3) => flatMap8(scopeMake(), (scope5) => scopeUse(scope5)(effect3));
var sequentialFinalizers = (self) => contextWithEffect((context7) => match(getOption2(context7, scopeTag), {
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
var tagMetricsScoped = (key, value3) => labelMetricsScoped([make30(key, value3)]);
var labelMetricsScoped = (labels) => fiberRefLocallyScopedWith(currentMetricLabels, (old) => union2(old, labels));
var using = /* @__PURE__ */ dual(2, (self, use2) => acquireUseRelease(scopeMake(), (scope5) => flatMap8(scopeExtend(self, scope5), use2), (scope5, exit4) => scopeClose(scope5, exit4)));
var validate = /* @__PURE__ */ dual((args) => isEffect(args[1]), (self, that, options) => validateWith(self, that, (a, b) => [a, b], options));
var validateWith = /* @__PURE__ */ dual((args) => isEffect(args[1]), (self, that, f, options) => flatten6(zipWithOptions(exit(self), exit(that), (ea, eb) => exitZipWith(ea, eb, {
  onSuccess: f,
  onFailure: (ca, cb) => options?.concurrent ? parallel(ca, cb) : sequential(ca, cb)
}), options)));
var validateFirst = /* @__PURE__ */ dual((args) => isIterable(args[0]), (elements, f, options) => flip(forEach7(elements, (a, i) => flip(f(a, i)), options)));
var withClockScoped = (value3) => fiberRefLocallyScopedWith(currentServices, add2(clockTag, value3));
var withRandomScoped = (value3) => fiberRefLocallyScopedWith(currentServices, add2(randomTag, value3));
var withConfigProviderScoped = (value3) => fiberRefLocallyScopedWith(currentServices, add2(configProviderTag, value3));
var withEarlyRelease = (self) => scopeWith((parent2) => flatMap8(scopeFork(parent2, sequential2), (child) => pipe(self, scopeExtend(child), map10((value3) => [fiberIdWith((fiberId3) => scopeClose(child, exitInterrupt(fiberId3))), value3]))));
var zipOptions = /* @__PURE__ */ dual((args) => isEffect(args[1]), (self, that, options) => zipWithOptions(self, that, (a, b) => [a, b], options));
var zipLeftOptions = /* @__PURE__ */ dual((args) => isEffect(args[1]), (self, that, options) => {
  if (options?.concurrent !== true && (options?.batching === void 0 || options.batching === false)) {
    return zipLeft2(self, that);
  }
  return zipWithOptions(self, that, (a, _) => a, options);
});
var zipRightOptions = /* @__PURE__ */ dual((args) => isEffect(args[1]), (self, that, options) => {
  if (options?.concurrent !== true && (options?.batching === void 0 || options.batching === false)) {
    return zipRight2(self, that);
  }
  return zipWithOptions(self, that, (_, b) => b, options);
});
var zipWithOptions = /* @__PURE__ */ dual((args) => isEffect(args[1]), (self, that, f, options) => map10(all3([self, that], {
  concurrency: options?.concurrent ? 2 : 1,
  batching: options?.batching
}), ([a, a2]) => f(a, a2)));
var withRuntimeFlagsScoped = (update6) => {
  if (update6 === empty16) {
    return unit2;
  }
  return pipe(runtimeFlags, flatMap8((runtimeFlags2) => {
    const updatedRuntimeFlags = patch4(runtimeFlags2, update6);
    const revertRuntimeFlags = diff4(updatedRuntimeFlags, runtimeFlags2);
    return pipe(updateRuntimeFlags(update6), zipRight2(addFinalizer(() => updateRuntimeFlags(revertRuntimeFlags))), asUnit2);
  }), uninterruptible);
};
var releaseMapReleaseAll = (strategy, exit4) => (self) => suspend(() => {
  switch (self.state._tag) {
    case "Exited": {
      return unit2;
    }
    case "Running": {
      const finalizersMap = self.state.finalizers;
      const update6 = self.state.update;
      const finalizers = Array.from(finalizersMap.keys()).sort((a, b) => b - a).map((key) => finalizersMap.get(key));
      self.state = {
        _tag: "Exited",
        nextKey: self.state.nextKey,
        exit: exit4,
        update: update6
      };
      return isSequential(strategy) ? pipe(finalizers, forEachSequential((fin) => exit(update6(fin)(exit4))), flatMap8((results) => pipe(exitCollectAll(results), map(exitAsUnit), getOrElse(() => exitUnit)))) : isParallel(strategy) ? pipe(forEachParUnbounded(finalizers, (fin) => exit(update6(fin)(exit4)), false), flatMap8((results) => pipe(exitCollectAll(results, {
        parallel: true
      }), map(exitAsUnit), getOrElse(() => exitUnit)))) : pipe(forEachParN(finalizers, strategy.parallelism, (fin) => exit(update6(fin)(exit4)), false), flatMap8((results) => pipe(exitCollectAll(results, {
        parallel: true
      }), map(exitAsUnit), getOrElse(() => exitUnit))));
    }
  }
});
var scopeTag = /* @__PURE__ */ GenericTag("effect/Scope");
var scope = scopeTag;
var scopeMake = (strategy = sequential2) => map10(releaseMapMake, (rm) => ({
  [ScopeTypeId]: ScopeTypeId,
  [CloseableScopeTypeId]: CloseableScopeTypeId,
  strategy,
  pipe() {
    return pipeArguments(this, arguments);
  },
  fork: (strategy2) => uninterruptible(pipe(scopeMake(strategy2), flatMap8((scope5) => pipe(releaseMapAdd(rm, (exit4) => scopeClose(scope5, exit4)), tap2((fin) => scopeAddFinalizerExit(scope5, fin)), as2(scope5))))),
  close: (exit4) => asUnit2(releaseMapReleaseAll(strategy, exit4)(rm)),
  addFinalizer: (fin) => asUnit2(releaseMapAdd(fin)(rm))
}));
var scopeExtend = /* @__PURE__ */ dual(2, (effect3, scope5) => mapInputContext(
  effect3,
  // @ts-expect-error
  merge3(make7(scopeTag, scope5))
));
var scopeUse = /* @__PURE__ */ dual(2, (effect3, scope5) => pipe(effect3, scopeExtend(scope5), onExit((exit4) => scope5.close(exit4))));
var fiberRefUnsafeMakeSupervisor = (initial) => fiberRefUnsafeMakePatch(initial, {
  differ: differ2,
  fork: empty27
});
var fiberRefLocallyScoped = /* @__PURE__ */ dual(2, (self, value3) => asUnit2(acquireRelease(flatMap8(fiberRefGet(self), (oldValue) => as2(fiberRefSet(self, value3), oldValue)), (oldValue) => fiberRefSet(self, oldValue))));
var fiberRefLocallyScopedWith = /* @__PURE__ */ dual(2, (self, f) => fiberRefGetWith(self, (a) => fiberRefLocallyScoped(self, f(a))));
var currentRuntimeFlags = /* @__PURE__ */ fiberRefUnsafeMakeRuntimeFlags(none5);
var currentSupervisor = /* @__PURE__ */ fiberRefUnsafeMakeSupervisor(none8);
var fiberAwaitAll = (fibers) => asUnit2(_await2(fiberAll(fibers)));
var fiberAll = (fibers) => ({
  [FiberTypeId]: fiberVariance,
  id: () => fromIterable2(fibers).reduce((id2, fiber) => combine3(id2, fiber.id()), none4),
  await: exit(forEachParUnbounded(fibers, (fiber) => flatten6(fiber.await), false)),
  children: map10(forEachParUnbounded(fibers, (fiber) => fiber.children, false), flatten2),
  inheritAll: forEachSequentialDiscard(fibers, (fiber) => fiber.inheritAll),
  poll: map10(forEachSequential(fibers, (fiber) => fiber.poll), reduceRight(some2(exitSucceed(new Array())), (optionB, optionA) => {
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
              onSuccess: (a, chunk4) => [a, ...chunk4],
              onFailure: parallel
            }));
          }
        }
      }
    }
  })),
  interruptAsFork: (fiberId3) => forEachSequentialDiscard(fibers, (fiber) => fiber.interruptAsFork(fiberId3)),
  pipe() {
    return pipeArguments(this, arguments);
  }
});
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
    onFailure: (cause4) => pipe(join2(right3), mapErrorCause((cause22) => parallel(cause4, cause22))),
    onSuccess: (value3) => pipe(right3, interruptAsFiber(parentFiberId), as2(value3))
  }),
  onOtherDone: (exit4, left3) => exitMatchEffect(exit4, {
    onFailure: (cause4) => pipe(join2(left3), mapErrorCause((cause22) => parallel(cause22, cause4))),
    onSuccess: (value3) => pipe(left3, interruptAsFiber(parentFiberId), as2(value3))
  })
})));
var raceFibersWith = /* @__PURE__ */ dual(3, (self, other, options) => withFiberRuntime((parentFiber, parentStatus) => {
  const parentRuntimeFlags = parentStatus.runtimeFlags;
  const raceIndicator = make12(true);
  const leftFiber = unsafeMakeChildFiber(self, parentFiber, parentRuntimeFlags, options.selfScope);
  const rightFiber = unsafeMakeChildFiber(other, parentFiber, parentRuntimeFlags, options.otherScope);
  return async((cb) => {
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
var invokeWithInterrupt = (self, entries2, onInterrupt3) => fiberIdWith((id2) => flatMap8(flatMap8(forkDaemon(interruptible2(self)), (processing) => async((cb) => {
  const counts = entries2.map((_) => _.listeners.count);
  const checkDone = () => {
    if (counts.every((count3) => count3 === 0)) {
      cleanup.forEach((f) => f());
      onInterrupt3?.();
      cb(interruptFiber(processing));
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
var makeSpanScoped = (name, options) => acquireRelease(makeSpan(name, options), (span4, exit4) => span4.status._tag === "Ended" ? unit2 : flatMap8(currentTimeNanosTracing, (endTime) => sync(() => span4.end(endTime, exit4))));
var withTracerScoped = (value3) => fiberRefLocallyScopedWith(currentServices, add2(tracerTag, value3));
var withSpanScoped = /* @__PURE__ */ dual((args) => typeof args[0] !== "string", (self, name, options) => flatMap8(makeSpanScoped(name, options), (span4) => provideService(self, spanTag, span4)));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/cache.js
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
var makeCacheState = (map25, keys6, accesses, updating, hits, misses) => ({
  map: map25,
  keys: keys6,
  accesses,
  updating,
  hits,
  misses
});
var initialCacheState = () => makeCacheState(empty19(), makeKeySet(), unbounded(), make12(false), 0, 0);
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
  cacheState;
  constructor(capacity5, context7, fiberId3, lookup, timeToLive) {
    this.capacity = capacity5;
    this.context = context7;
    this.fiberId = fiberId3;
    this.lookup = lookup;
    this.timeToLive = timeToLive;
    this.cacheState = initialCacheState();
  }
  get(key) {
    return map10(this.getEither(key), merge);
  }
  get cacheStats() {
    return sync(() => makeCacheStats({
      hits: this.cacheState.hits,
      misses: this.cacheState.misses,
      size: size6(this.cacheState.map)
    }));
  }
  getOption(key) {
    return suspend(() => match(get9(this.cacheState.map, key), {
      onNone: () => {
        const mapKey = makeMapKey(key);
        this.trackAccess(mapKey);
        this.trackMiss();
        return succeed(none2());
      },
      onSome: (value3) => this.resolveMapValue(value3)
    }));
  }
  getOptionComplete(key) {
    return suspend(() => match(get9(this.cacheState.map, key), {
      onNone: () => {
        const mapKey = makeMapKey(key);
        this.trackAccess(mapKey);
        this.trackMiss();
        return succeed(none2());
      },
      onSome: (value3) => this.resolveMapValue(value3, true)
    }));
  }
  contains(key) {
    return sync(() => has5(this.cacheState.map, key));
  }
  entryStats(key) {
    return sync(() => {
      const option4 = get9(this.cacheState.map, key);
      if (isSome2(option4)) {
        switch (option4.value._tag) {
          case "Complete": {
            const loaded = option4.value.entryStats.loadedMillis;
            return some2(makeEntryStats(loaded));
          }
          case "Pending": {
            return none2();
          }
          case "Refreshing": {
            const loaded = option4.value.complete.entryStats.loadedMillis;
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
      let value3 = getOrUndefined(get9(this.cacheState.map, k));
      if (value3 === void 0) {
        deferred = unsafeMake3(this.fiberId);
        mapKey = makeMapKey(k);
        if (has5(this.cacheState.map, k)) {
          value3 = getOrUndefined(get9(this.cacheState.map, k));
        } else {
          set5(this.cacheState.map, k, pending2(mapKey, deferred));
        }
      }
      if (value3 === void 0) {
        this.trackAccess(mapKey);
        this.trackMiss();
        return map10(this.lookupValueOf(key, deferred), right2);
      } else {
        return flatMap8(this.resolveMapValue(value3), match({
          onNone: () => this.getEither(key),
          onSome: (value4) => succeed(left2(value4))
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
      const value3 = get9(this.cacheState.map, key);
      if (isSome2(value3) && value3.value._tag === "Complete") {
        if (value3.value.exit._tag === "Success") {
          if (when5(value3.value.exit.value)) {
            remove6(this.cacheState.map, key);
          }
        }
      }
    });
  }
  get invalidateAll() {
    return sync(() => {
      this.cacheState.map = empty19();
    });
  }
  refresh(key) {
    return clockWith3((clock3) => suspend(() => {
      const k = key;
      const deferred = unsafeMake3(this.fiberId);
      let value3 = getOrUndefined(get9(this.cacheState.map, k));
      if (value3 === void 0) {
        if (has5(this.cacheState.map, k)) {
          value3 = getOrUndefined(get9(this.cacheState.map, k));
        } else {
          set5(this.cacheState.map, k, pending2(makeMapKey(k), deferred));
        }
      }
      if (value3 === void 0) {
        return asUnit2(this.lookupValueOf(key, deferred));
      } else {
        switch (value3._tag) {
          case "Complete": {
            if (this.hasExpired(clock3, value3.timeToLiveMillis)) {
              const found = getOrUndefined(get9(this.cacheState.map, k));
              if (equals(found, value3)) {
                remove6(this.cacheState.map, k);
              }
              return asUnit2(this.get(key));
            }
            return pipe(this.lookupValueOf(key, deferred), when(() => {
              const current2 = getOrUndefined(get9(this.cacheState.map, k));
              if (equals(current2, value3)) {
                const mapValue = refreshing(deferred, value3);
                set5(this.cacheState.map, k, mapValue);
                return true;
              }
              return false;
            }), asUnit2);
          }
          case "Pending": {
            return _await(value3.deferred);
          }
          case "Refreshing": {
            return _await(value3.deferred);
          }
        }
      }
    }));
  }
  set(key, value3) {
    return clockWith3((clock3) => sync(() => {
      const now = clock3.unsafeCurrentTimeMillis();
      const k = key;
      const lookupResult = succeed3(value3);
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
      const values5 = [];
      for (const entry of this.cacheState.map) {
        if (entry[1]._tag === "Complete" && entry[1].exit._tag === "Success") {
          values5.push(entry[1].exit.value);
        }
      }
      return values5;
    });
  }
  get entries() {
    return sync(() => {
      const values5 = [];
      for (const entry of this.cacheState.map) {
        if (entry[1]._tag === "Complete" && entry[1].exit._tag === "Success") {
          values5.push([entry[0], entry[1].exit.value]);
        }
      }
      return values5;
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
  resolveMapValue(value3, ignorePending = false) {
    return clockWith3((clock3) => {
      switch (value3._tag) {
        case "Complete": {
          this.trackAccess(value3.key);
          if (this.hasExpired(clock3, value3.timeToLiveMillis)) {
            remove6(this.cacheState.map, value3.key.current);
            return succeed(none2());
          }
          this.trackHit();
          return map10(value3.exit, some2);
        }
        case "Pending": {
          this.trackAccess(value3.key);
          this.trackHit();
          if (ignorePending) {
            return succeed(none2());
          }
          return map10(_await(value3.deferred), some2);
        }
        case "Refreshing": {
          this.trackAccess(value3.complete.key);
          this.trackHit();
          if (this.hasExpired(clock3, value3.complete.timeToLiveMillis)) {
            if (ignorePending) {
              return succeed(none2());
            }
            return map10(_await(value3.deferred), some2);
          }
          return map10(value3.complete.exit, some2);
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
      let size16 = size6(this.cacheState.map);
      loop3 = size16 > this.capacity;
      while (loop3) {
        const key2 = this.cacheState.keys.remove();
        if (key2 !== void 0) {
          if (has5(this.cacheState.map, key2.current)) {
            remove6(this.cacheState.map, key2.current);
            size16 = size16 - 1;
            loop3 = size16 > this.capacity;
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
        const value3 = complete2(makeMapKey(key), exit4, stats, now + toMillis(decode(this.timeToLive(exit4))));
        set5(this.cacheState.map, key, value3);
        return zipRight2(done2(deferred, exit4), exit4);
      }), onInterrupt(() => zipRight2(interrupt3(deferred), sync(() => {
        remove6(this.cacheState.map, key);
      }))));
    }));
  }
};
var unsafeMakeWith = (capacity5, lookup, timeToLive) => new CacheImpl(capacity5, empty5(), none3, lookup, (exit4) => decode(timeToLive(exit4)));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Cause.js
var empty28 = empty18;
var fail5 = fail;
var die4 = die;
var interrupt4 = interrupt;
var parallel4 = parallel;
var sequential4 = sequential;
var isCause2 = isCause;
var isDieType2 = isDieType;
var isInterrupted2 = isInterrupted;
var isInterruptedOnly2 = isInterruptedOnly;
var failureOrCause2 = failureOrCause;
var flipCauseOption2 = flipCauseOption;
var map13 = map9;
var squash = causeSquash;
var IllegalArgumentException2 = IllegalArgumentException;
var RuntimeException2 = RuntimeException;
var isRuntimeException2 = isRuntimeException;
var pretty2 = pretty;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Effect.js
var Effect_exports = {};
__export(Effect_exports, {
  Do: () => Do3,
  EffectTypeId: () => EffectTypeId4,
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
  annotateLogs: () => annotateLogs2,
  annotateSpans: () => annotateSpans2,
  ap: () => ap2,
  as: () => as4,
  asSome: () => asSome2,
  asSomeError: () => asSomeError2,
  asUnit: () => asUnit3,
  async: () => async2,
  asyncEffect: () => asyncEffect2,
  awaitAllChildren: () => awaitAllChildren2,
  bind: () => bind3,
  bindTo: () => bindTo3,
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
  exit: () => exit2,
  fail: () => fail9,
  failCause: () => failCause7,
  failCauseSync: () => failCauseSync3,
  failSync: () => failSync3,
  fiberId: () => fiberId2,
  fiberIdWith: () => fiberIdWith2,
  filter: () => filter9,
  filterOrDie: () => filterOrDie2,
  filterOrDieMessage: () => filterOrDieMessage2,
  filterOrElse: () => filterOrElse2,
  filterOrFail: () => filterOrFail2,
  finalizersMask: () => finalizersMask2,
  findFirst: () => findFirst6,
  firstSuccessOf: () => firstSuccessOf2,
  flatMap: () => flatMap10,
  flatten: () => flatten9,
  flip: () => flip2,
  flipWith: () => flipWith2,
  forEach: () => forEach8,
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
  gen: () => gen3,
  getFiberRefs: () => getFiberRefs,
  getRuntimeFlags: () => getRuntimeFlags,
  head: () => head4,
  if: () => if_2,
  ignore: () => ignore2,
  ignoreLogged: () => ignoreLogged2,
  inheritFiberRefs: () => inheritFiberRefs2,
  interrupt: () => interrupt6,
  interruptWith: () => interruptWith2,
  interruptible: () => interruptible3,
  interruptibleMask: () => interruptibleMask2,
  intoDeferred: () => intoDeferred2,
  isEffect: () => isEffect2,
  isFailure: () => isFailure4,
  isSuccess: () => isSuccess3,
  iterate: () => iterate2,
  labelMetrics: () => labelMetrics2,
  labelMetricsScoped: () => labelMetricsScoped2,
  let: () => let_3,
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
  loop: () => loop2,
  makeSemaphore: () => makeSemaphore2,
  makeSpan: () => makeSpan2,
  makeSpanScoped: () => makeSpanScoped2,
  map: () => map16,
  mapAccum: () => mapAccum4,
  mapBoth: () => mapBoth3,
  mapError: () => mapError3,
  mapErrorCause: () => mapErrorCause2,
  mapInputContext: () => mapInputContext2,
  match: () => match11,
  matchCause: () => matchCause3,
  matchCauseEffect: () => matchCauseEffect2,
  matchEffect: () => matchEffect2,
  merge: () => merge7,
  mergeAll: () => mergeAll3,
  metricLabels: () => metricLabels2,
  negate: () => negate3,
  never: () => never3,
  none: () => none9,
  onError: () => onError2,
  onExit: () => onExit2,
  onInterrupt: () => onInterrupt2,
  once: () => once2,
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
  runFork: () => runFork,
  runPromise: () => runPromise,
  runPromiseExit: () => runPromiseExit,
  runRequestBlock: () => runRequestBlock2,
  runSync: () => runSync,
  runSyncExit: () => runSyncExit,
  runtime: () => runtime4,
  sandbox: () => sandbox2,
  schedule: () => schedule,
  scheduleForked: () => scheduleForked2,
  scheduleFrom: () => scheduleFrom,
  scope: () => scope3,
  scopeWith: () => scopeWith2,
  scoped: () => scoped2,
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
  succeed: () => succeed8,
  succeedNone: () => succeedNone2,
  succeedSome: () => succeedSome2,
  summarized: () => summarized2,
  supervised: () => supervised2,
  suspend: () => suspend3,
  sync: () => sync4,
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
  timeoutTo: () => timeoutTo2,
  tracer: () => tracer2,
  tracerWith: () => tracerWith4,
  transplant: () => transplant2,
  try: () => try_3,
  tryMap: () => tryMap2,
  tryMapPromise: () => tryMapPromise2,
  tryPromise: () => tryPromise2,
  uninterruptible: () => uninterruptible2,
  uninterruptibleMask: () => uninterruptibleMask2,
  unit: () => unit5,
  unless: () => unless2,
  unlessEffect: () => unlessEffect2,
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
  when: () => when2,
  whenEffect: () => whenEffect2,
  whenFiberRef: () => whenFiberRef2,
  whenRef: () => whenRef2,
  whileLoop: () => whileLoop2,
  withClock: () => withClock2,
  withClockScoped: () => withClockScoped2,
  withConcurrency: () => withConcurrency2,
  withConfigProvider: () => withConfigProvider2,
  withConfigProviderScoped: () => withConfigProviderScoped2,
  withConsole: () => withConsole2,
  withConsoleScoped: () => withConsoleScoped2,
  withEarlyRelease: () => withEarlyRelease2,
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
  yieldNow: () => yieldNow3,
  zip: () => zip6,
  zipLeft: () => zipLeft4,
  zipRight: () => zipRight5,
  zipWith: () => zipWith6
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/schedule/interval.js
var IntervalSymbolKey = "effect/ScheduleInterval";
var IntervalTypeId = /* @__PURE__ */ Symbol.for(IntervalSymbolKey);
var empty29 = {
  [IntervalTypeId]: IntervalTypeId,
  startMillis: 0,
  endMillis: 0
};
var make36 = (startMillis, endMillis) => {
  if (startMillis > endMillis) {
    return empty29;
  }
  return {
    [IntervalTypeId]: IntervalTypeId,
    startMillis,
    endMillis
  };
};
var lessThan5 = /* @__PURE__ */ dual(2, (self, that) => min3(self, that) === self);
var min3 = /* @__PURE__ */ dual(2, (self, that) => {
  if (self.endMillis <= that.startMillis)
    return self;
  if (that.endMillis <= self.startMillis)
    return that;
  if (self.startMillis < that.startMillis)
    return self;
  if (that.startMillis < self.startMillis)
    return that;
  if (self.endMillis <= that.endMillis)
    return self;
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/ScheduleInterval.js
var make37 = make36;
var empty30 = empty29;
var lessThan6 = lessThan5;
var isEmpty9 = isEmpty8;
var intersect2 = intersect;
var size11 = size10;
var after2 = after;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/schedule/intervals.js
var IntervalsSymbolKey = "effect/ScheduleIntervals";
var IntervalsTypeId = /* @__PURE__ */ Symbol.for(IntervalsSymbolKey);
var make38 = (intervals) => {
  return {
    [IntervalsTypeId]: IntervalsTypeId,
    intervals
  };
};
var intersect3 = /* @__PURE__ */ dual(2, (self, that) => intersectLoop(self.intervals, that.intervals, empty6()));
var intersectLoop = (_left, _right, _acc) => {
  let left3 = _left;
  let right3 = _right;
  let acc = _acc;
  while (isNonEmpty(left3) && isNonEmpty(right3)) {
    const interval = pipe(headNonEmpty2(left3), intersect2(headNonEmpty2(right3)));
    const intervals = isEmpty9(interval) ? acc : pipe(acc, prepend2(interval));
    if (pipe(headNonEmpty2(left3), lessThan6(headNonEmpty2(right3)))) {
      left3 = tailNonEmpty2(left3);
    } else {
      right3 = tailNonEmpty2(right3);
    }
    acc = intervals;
  }
  return make38(reverse2(acc));
};
var start = (self) => {
  return pipe(self.intervals, head2, getOrElse(() => empty30)).startMillis;
};
var end = (self) => {
  return pipe(self.intervals, head2, getOrElse(() => empty30)).endMillis;
};
var lessThan7 = /* @__PURE__ */ dual(2, (self, that) => start(self) < start(that));
var isNonEmpty3 = (self) => {
  return isNonEmpty(self.intervals);
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/ScheduleIntervals.js
var make39 = make38;
var intersect4 = intersect3;
var start2 = start;
var end2 = end;
var lessThan8 = lessThan7;
var isNonEmpty4 = isNonEmpty3;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/schedule/decision.js
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/ScheduleDecision.js
var _continue2 = _continue;
var continueWith2 = continueWith;
var done6 = done5;
var isContinue2 = isContinue;
var isDone5 = isDone4;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Scope.js
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/String.js
var split2 = /* @__PURE__ */ dual(2, (self, separator) => {
  const out = self.split(separator);
  return isNonEmptyArray(out) ? out : [self];
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/schedule.js
var ScheduleSymbolKey = "effect/Schedule";
var ScheduleTypeId = /* @__PURE__ */ Symbol.for(ScheduleSymbolKey);
var isSchedule = (u) => hasProperty(u, ScheduleTypeId);
var ScheduleDriverSymbolKey = "effect/ScheduleDriver";
var ScheduleDriverTypeId = /* @__PURE__ */ Symbol.for(ScheduleDriverSymbolKey);
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
var ScheduleDriverImpl = class {
  schedule;
  ref;
  [ScheduleDriverTypeId] = scheduleDriverVariance;
  constructor(schedule4, ref) {
    this.schedule = schedule4;
    this.ref = ref;
  }
  get state() {
    return map10(get12(this.ref), (tuple3) => tuple3[1]);
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
  get reset() {
    return set6(this.ref, [none2(), this.schedule.initial]);
  }
  next(input) {
    return pipe(map10(get12(this.ref), (tuple3) => tuple3[1]), flatMap8((state) => pipe(currentTimeMillis2, flatMap8((now) => pipe(suspend(() => this.schedule.step(now, input, state)), flatMap8(([state2, out, decision]) => {
      const setState = set6(this.ref, [some2(out), state2]);
      if (isDone5(decision)) {
        return zipRight2(setState, fail2(none2()));
      }
      const millis2 = start2(decision.intervals) - now;
      if (millis2 <= 0) {
        return as2(setState, out);
      }
      return pipe(setState, zipRight2(sleep3(millis(millis2))), as2(out));
    }))))));
  }
};
var makeWithState = (initial, step4) => new ScheduleImpl(initial, step4);
var addDelay = /* @__PURE__ */ dual(2, (self, f) => addDelayEffect(self, (out) => sync(() => f(out))));
var addDelayEffect = /* @__PURE__ */ dual(2, (self, f) => modifyDelayEffect(self, (out, duration2) => map10(f(out), (delay3) => sum(duration2, decode(delay3)))));
var check = /* @__PURE__ */ dual(2, (self, test3) => checkEffect(self, (input, out) => sync(() => test3(input, out))));
var checkEffect = /* @__PURE__ */ dual(2, (self, test3) => makeWithState(self.initial, (now, input, state) => flatMap8(self.step(now, input, state), ([state2, out, decision]) => {
  if (isDone5(decision)) {
    return succeed([state2, out, done6]);
  }
  return map10(test3(input, out), (cont) => cont ? [state2, out, decision] : [state2, out, done6]);
})));
var driver = (self) => pipe(make28([none2(), self.initial]), map10((ref) => new ScheduleDriverImpl(self, ref)));
var intersect5 = /* @__PURE__ */ dual(2, (self, that) => intersectWith(self, that, intersect4));
var intersectWith = /* @__PURE__ */ dual(3, (self, that, f) => makeWithState([self.initial, that.initial], (now, input, state) => pipe(zipWith4(self.step(now, input, state[0]), that.step(now, input, state[1]), (a, b) => [a, b]), flatMap8(([[lState, out, lDecision], [rState, out2, rDecision]]) => {
  if (isContinue2(lDecision) && isContinue2(rDecision)) {
    return intersectWithLoop(self, that, input, lState, out, lDecision.intervals, rState, out2, rDecision.intervals, f);
  }
  return succeed([[lState, rState], [out, out2], done6]);
}))));
var intersectWithLoop = (self, that, input, lState, out, lInterval, rState, out2, rInterval, f) => {
  const combined = f(lInterval, rInterval);
  if (isNonEmpty4(combined)) {
    return succeed([[lState, rState], [out, out2], _continue2(combined)]);
  }
  if (pipe(lInterval, lessThan8(rInterval))) {
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
var modifyDelayEffect = /* @__PURE__ */ dual(2, (self, f) => makeWithState(self.initial, (now, input, state) => flatMap8(self.step(now, input, state), ([state2, out, decision]) => {
  if (isDone5(decision)) {
    return succeed([state2, out, decision]);
  }
  const intervals = decision.intervals;
  const delay3 = size11(make37(now, start2(intervals)));
  return map10(f(out, delay3), (durationInput) => {
    const duration2 = decode(durationInput);
    const oldStart = start2(intervals);
    const newStart = now + toMillis(duration2);
    const delta = newStart - oldStart;
    const newEnd = Math.min(Math.max(0, end2(intervals) + delta), Number.MAX_SAFE_INTEGER);
    const newInterval = make37(newStart, newEnd);
    return [state2, out, continueWith2(newInterval)];
  });
})));
var passthrough = (self) => makeWithState(self.initial, (now, input, state) => pipe(self.step(now, input, state), map10(([state2, _, decision]) => [state2, input, decision])));
var recurs = (n) => whileOutput(forever2, (out) => out < n);
var spaced = (duration2) => addDelay(forever2, () => duration2);
var unfold2 = (initial, f) => makeWithState(initial, (now, _, state) => sync(() => [f(state), state, continueWith2(after2(now))]));
var untilInputEffect = /* @__PURE__ */ dual(2, (self, f) => checkEffect(self, (input, _) => negate2(f(input))));
var whileInputEffect = /* @__PURE__ */ dual(2, (self, f) => checkEffect(self, (input, _) => f(input)));
var whileOutput = /* @__PURE__ */ dual(2, (self, f) => check(self, (_, out) => f(out)));
var ScheduleDefectTypeId = /* @__PURE__ */ Symbol.for("effect/Schedule/ScheduleDefect");
var ScheduleDefect = class {
  error;
  [ScheduleDefectTypeId];
  constructor(error2) {
    this.error = error2;
    this[ScheduleDefectTypeId] = ScheduleDefectTypeId;
  }
};
var isScheduleDefect = (u) => hasProperty(u, ScheduleDefectTypeId);
var scheduleDefectWrap = (self) => catchAll(self, (e) => die2(new ScheduleDefect(e)));
var scheduleDefectRefail = (self) => catchAllCause(self, (cause4) => match(find(cause4, (_) => isDieType(_) && isScheduleDefect(_.defect) ? some2(_.defect) : none2()), {
  onNone: () => failCause(cause4),
  onSome: (error2) => fail2(error2.error)
}));
var repeat_Effect = /* @__PURE__ */ dual(2, (self, schedule4) => repeatOrElse_Effect(self, schedule4, (e, _) => fail2(e)));
var repeat_combined = /* @__PURE__ */ dual(2, (self, options) => {
  if (isSchedule(options)) {
    return repeat_Effect(self, options);
  }
  const base = options.schedule ?? passthrough(forever2);
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
  const withTimes = options.times ? intersect5(withUntil, recurs(options.times)) : withUntil;
  return scheduleDefectRefail(repeat_Effect(self, withTimes));
});
var repeatOrElse_Effect = /* @__PURE__ */ dual(3, (self, schedule4, orElse10) => flatMap8(driver(schedule4), (driver3) => matchEffect(self, {
  onFailure: (error2) => orElse10(error2, none2()),
  onSuccess: (value3) => repeatOrElseEffectLoop(self, driver3, orElse10, value3)
})));
var repeatOrElseEffectLoop = (self, driver3, orElse10, value3) => {
  return matchEffect(driver3.next(value3), {
    onFailure: () => orDie(driver3.last),
    onSuccess: (b) => matchEffect(self, {
      onFailure: (error2) => orElse10(error2, some2(b)),
      onSuccess: (value4) => repeatOrElseEffectLoop(self, driver3, orElse10, value4)
    })
  });
};
var retry_Effect = /* @__PURE__ */ dual(2, (self, policy) => retryOrElse_Effect(self, policy, (e, _) => fail2(e)));
var retry_combined = /* @__PURE__ */ dual(2, (self, options) => {
  if (isSchedule(options)) {
    return retry_Effect(self, options);
  }
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
  const withTimes = options.times ? intersect5(withUntil, recurs(options.times)) : withUntil;
  return scheduleDefectRefail(retry_Effect(self, withTimes));
});
var retryOrElse_Effect = /* @__PURE__ */ dual(3, (self, policy, orElse10) => flatMap8(driver(policy), (driver3) => retryOrElse_EffectLoop(self, driver3, orElse10)));
var retryOrElse_EffectLoop = (self, driver3, orElse10) => {
  return catchAll(self, (e) => matchEffect(driver3.next(e), {
    onFailure: () => pipe(driver3.last, orDie, flatMap8((out) => orElse10(e, out))),
    onSuccess: () => retryOrElse_EffectLoop(self, driver3, orElse10)
  }));
};
var schedule_Effect = /* @__PURE__ */ dual(2, (self, schedule4) => scheduleFrom_Effect(self, void 0, schedule4));
var scheduleFrom_Effect = /* @__PURE__ */ dual(3, (self, initial, schedule4) => flatMap8(driver(schedule4), (driver3) => scheduleFrom_EffectLoop(self, initial, driver3)));
var scheduleFrom_EffectLoop = (self, initial, driver3) => matchEffect(driver3.next(initial), {
  onFailure: () => orDie(driver3.last),
  onSuccess: () => flatMap8(self, (a) => scheduleFrom_EffectLoop(self, a, driver3))
});
var forever2 = /* @__PURE__ */ unfold2(0, (n) => n + 1);

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/effect/circular.js
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
  take = (n) => async((resume2) => {
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
  releaseAll = this.updateTaken((_) => 0);
  withPermits = (n) => (self) => uninterruptibleMask((restore) => flatMap8(restore(this.take(n)), (permits) => ensuring(restore(self), this.release(permits))));
};
var unsafeMakeSemaphore = (permits) => new Semaphore(permits);
var makeSemaphore = (permits) => sync(() => unsafeMakeSemaphore(permits));
var awaitAllChildren = (self) => ensuringChildren(self, fiberAwaitAll);
var cached2 = /* @__PURE__ */ dual(2, (self, timeToLive) => map10(cachedInvalidateWithTTL(self, timeToLive), (tuple3) => tuple3[0]));
var cachedInvalidateWithTTL = /* @__PURE__ */ dual(2, (self, timeToLive) => {
  const duration2 = decode(timeToLive);
  return flatMap8(context(), (env) => map10(makeSynchronized(none2()), (cache) => [provideContext(getCachedValue(self, duration2, cache), env), invalidateCache(cache)]));
});
var computeCachedValue = (self, timeToLive, start3) => {
  const timeToLiveMillis = toMillis(decode(timeToLive));
  return pipe(deferredMake(), tap2((deferred) => intoDeferred(self, deferred)), map10((deferred) => some2([start3 + timeToLiveMillis, deferred])));
};
var getCachedValue = (self, timeToLive, cache) => uninterruptibleMask((restore) => pipe(clockWith3((clock3) => clock3.currentTimeMillis), flatMap8((time) => updateSomeAndGetEffectSynchronized(cache, (option4) => {
  switch (option4._tag) {
    case "None": {
      return some2(computeCachedValue(self, timeToLive, time));
    }
    case "Some": {
      const [end6] = option4.value;
      return end6 - time <= 0 ? some2(computeCachedValue(self, timeToLive, time)) : none2();
    }
  }
})), flatMap8((option4) => isNone2(option4) ? dieMessage("BUG: Effect.cachedInvalidate - please report an issue at https://github.com/Effect-TS/effect/issues") : restore(deferredAwait(option4.value[1])))));
var invalidateCache = (cache) => set6(cache, none2());
var ensuringChild = /* @__PURE__ */ dual(2, (self, f) => ensuringChildren(self, (children3) => f(fiberAll(children3))));
var ensuringChildren = /* @__PURE__ */ dual(2, (self, children3) => flatMap8(track, (supervisor) => pipe(supervised(self, supervisor), ensuring(flatMap8(supervisor.value, children3)))));
var forkAll = /* @__PURE__ */ dual((args) => isIterable(args[0]), (effects, options) => options?.discard ? forEachSequentialDiscard(effects, fork) : map10(forEachSequential(effects, fork), fiberAll));
var forkIn = /* @__PURE__ */ dual(2, (self, scope5) => uninterruptibleMask((restore) => flatMap8(scope5.fork(sequential2), (child) => pipe(restore(self), onExit((exit4) => child.close(exit4)), forkDaemon, tap2((fiber) => child.addFinalizer(() => fiberIdWith((fiberId3) => equals(fiberId3, fiber.id()) ? unit2 : asUnit2(interruptFiber(fiber)))))))));
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
  return pipe(sync(() => empty19()), flatMap8(makeSynchronized), map10((ref) => (a) => pipe(ref.modifyEffect((map25) => {
    const result = pipe(map25, get9(new Key(a, eq)));
    if (isNone2(result)) {
      return pipe(deferredMake(), tap2((deferred) => pipe(diffFiberRefs(f(a)), intoDeferred(deferred), fork)), map10((deferred) => [deferred, pipe(map25, set5(new Key(a, eq), deferred))]));
    }
    return succeed([result.value, map25]);
  }), flatMap8(deferredAwait), flatMap8(([patch9, b]) => pipe(patchFiberRefs(patch9), as2(b))))));
};
var raceFirst = /* @__PURE__ */ dual(2, (self, that) => pipe(exit(self), race(exit(that)), (effect3) => flatten6(effect3)));
var scheduleForked = /* @__PURE__ */ dual(2, (self, schedule4) => pipe(self, schedule_Effect(schedule4), forkScoped));
var supervised = /* @__PURE__ */ dual(2, (self, supervisor) => {
  const supervise = fiberRefLocallyWith(currentSupervisor, (s) => s.zip(supervisor));
  return supervise(self);
});
var timeout = /* @__PURE__ */ dual(2, (self, duration2) => timeoutFail(self, {
  onTimeout: () => new TimeoutException(),
  duration: duration2
}));
var timeoutFail = /* @__PURE__ */ dual(2, (self, {
  duration: duration2,
  onTimeout
}) => flatten6(timeoutTo(self, {
  onTimeout: () => failSync(onTimeout),
  onSuccess: succeed,
  duration: duration2
})));
var timeoutFailCause = /* @__PURE__ */ dual(2, (self, {
  duration: duration2,
  onTimeout
}) => flatten6(timeoutTo(self, {
  onTimeout: () => failCauseSync(onTimeout),
  onSuccess: succeed,
  duration: duration2
})));
var timeoutTo = /* @__PURE__ */ dual(2, (self, {
  duration: duration2,
  onSuccess,
  onTimeout
}) => fiberIdWith((parentFiberId) => raceFibersWith(self, interruptible2(sleep3(duration2)), {
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
})));
var SynchronizedSymbolKey = "effect/Ref/SynchronizedRef";
var SynchronizedTypeId = /* @__PURE__ */ Symbol.for(SynchronizedSymbolKey);
var synchronizedVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
var SynchronizedImpl = class {
  ref;
  withLock;
  [SynchronizedTypeId] = synchronizedVariance;
  [RefTypeId] = refVariance;
  constructor(ref, withLock) {
    this.ref = ref;
    this.withLock = withLock;
  }
  modify(f) {
    return this.modifyEffect((a) => succeed(f(a)));
  }
  modifyEffect(f) {
    return this.withLock(pipe(flatMap8(get12(this.ref), f), flatMap8(([b, a]) => as2(set6(this.ref, a), b))));
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var makeSynchronized = (value3) => sync(() => unsafeMakeSynchronized(value3));
var unsafeMakeSynchronized = (value3) => {
  const ref = unsafeMake5(value3);
  const sem = unsafeMakeSemaphore(1);
  return new SynchronizedImpl(ref, sem.withPermits(1));
};
var updateSomeAndGetEffectSynchronized = /* @__PURE__ */ dual(2, (self, pf) => self.modifyEffect((value3) => {
  const result = pf(value3);
  switch (result._tag) {
    case "None": {
      return succeed([value3, value3]);
    }
    case "Some": {
      return map10(result.value, (a) => [a, a]);
    }
  }
}));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/opCodes/layer.js
var OP_EXTEND_SCOPE = "ExtendScope";
var OP_FOLD = "Fold";
var OP_FRESH = "Fresh";
var OP_FROM_EFFECT = "FromEffect";
var OP_SCOPED = "Scoped";
var OP_SUSPEND = "Suspend";
var OP_PROVIDE = "Provide";
var OP_PROVIDE_MERGE = "ProvideMerge";
var OP_ZIP_WITH2 = "ZipWith";

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Fiber.js
var _await3 = _await2;
var inheritAll2 = inheritAll;
var interrupt5 = interruptFiber;
var interruptAs = interruptAsFiber;
var join3 = join2;
var poll4 = poll3;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/runtime.js
var unsafeFork2 = (runtime6) => (self, options) => {
  const fiberId3 = unsafeMake2();
  const fiberRefUpdates = [[currentContext, [[fiberId3, runtime6.context]]]];
  if (options?.scheduler) {
    fiberRefUpdates.push([currentScheduler, [[fiberId3, options.scheduler]]]);
  }
  let fiberRefs3 = updateManyAs2(runtime6.fiberRefs, {
    entries: fiberRefUpdates,
    forkAs: fiberId3
  });
  if (options?.updateRefs) {
    fiberRefs3 = options.updateRefs(fiberRefs3, fiberId3);
  }
  const fiberRuntime = new FiberRuntime(fiberId3, fiberRefs3, runtime6.runtimeFlags);
  let effect3 = self;
  if (options?.scope) {
    effect3 = flatMap8(fork2(options.scope, sequential2), (closeableScope) => zipRight2(scopeAddFinalizer(closeableScope, fiberIdWith((id2) => equals(id2, fiberRuntime.id()) ? unit2 : interruptAsFiber(fiberRuntime, id2))), onExit(self, (exit4) => close(closeableScope, exit4))));
  }
  const supervisor = fiberRuntime._supervisor;
  if (supervisor !== none8) {
    supervisor.onStart(runtime6.context, effect3, none2(), fiberRuntime);
    fiberRuntime.addObserver((exit4) => supervisor.onEnd(exit4, fiberRuntime));
  }
  globalScope.add(runtime6.runtimeFlags, fiberRuntime);
  if (options?.immediate === false) {
    fiberRuntime.resume(effect3);
  } else {
    fiberRuntime.start(effect3);
  }
  return fiberRuntime;
};
var unsafeRunCallback = (runtime6) => (effect3, options = {}) => {
  const fiberRuntime = unsafeFork2(runtime6)(effect3, options);
  if (options.onExit) {
    fiberRuntime.addObserver((exit4) => {
      options.onExit(exit4);
    });
  }
  return (id2, cancelOptions) => unsafeRunCallback(runtime6)(pipe(fiberRuntime, interruptAs(id2 ?? none4)), {
    ...cancelOptions,
    onExit: cancelOptions?.onExit ? (exit4) => cancelOptions.onExit(flatten7(exit4)) : void 0
  });
};
var unsafeRunSync = (runtime6) => (effect3) => {
  const result = unsafeRunSyncExit(runtime6)(effect3);
  if (result._tag === "Failure") {
    throw fiberFailure(result.effect_instruction_i0);
  } else {
    return result.effect_instruction_i0;
  }
};
var asyncFiberException = (fiber) => {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  const error2 = new Error();
  Error.stackTraceLimit = limit;
  const message2 = `Fiber #${fiber.id().id} cannot be be resolved synchronously, this is caused by using runSync on an effect that performs async work`;
  const _tag = "AsyncFiberException";
  Object.defineProperties(error2, {
    _tag: {
      value: _tag
    },
    fiber: {
      value: fiber
    },
    message: {
      value: message2
    },
    name: {
      value: _tag
    },
    toString: {
      get() {
        return () => message2;
      }
    },
    [NodeInspectSymbol]: {
      get() {
        return () => message2;
      }
    }
  });
  return error2;
};
var FiberFailureId = /* @__PURE__ */ Symbol.for("effect/Runtime/FiberFailure");
var FiberFailureCauseId = /* @__PURE__ */ Symbol.for("effect/Runtime/FiberFailure/Cause");
var fiberFailure = (cause4) => {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  const error2 = new Error();
  Error.stackTraceLimit = limit;
  const prettyErrors2 = prettyErrors(cause4);
  if (prettyErrors2.length > 0) {
    const head7 = prettyErrors2[0];
    error2.name = head7.message.split(":")[0];
    error2.message = head7.message.substring(error2.name.length + 2);
    error2.stack = pretty(cause4);
  }
  error2[FiberFailureId] = FiberFailureId;
  error2[FiberFailureCauseId] = cause4;
  error2.toJSON = () => {
    return {
      _id: "FiberFailure",
      cause: cause4.toJSON()
    };
  };
  error2.toString = () => {
    return format(error2.toJSON());
  };
  error2[NodeInspectSymbol] = () => {
    return error2.toJSON();
  };
  return error2;
};
var fastPath = (effect3) => {
  const op = effect3;
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
var unsafeRunSyncExit = (runtime6) => (effect3) => {
  const op = fastPath(effect3);
  if (op) {
    return op;
  }
  const scheduler = new SyncScheduler();
  const fiberRuntime = unsafeFork2(runtime6)(effect3, {
    scheduler
  });
  scheduler.flush();
  const result = fiberRuntime.unsafePoll();
  if (result) {
    return result;
  }
  throw asyncFiberException(fiberRuntime);
};
var unsafeRunPromise = (runtime6) => (effect3, options) => unsafeRunPromiseExit(runtime6)(effect3, options).then((result) => {
  switch (result._tag) {
    case OP_SUCCESS: {
      return result.effect_instruction_i0;
    }
    case OP_FAILURE: {
      throw fiberFailure(result.effect_instruction_i0);
    }
  }
});
var unsafeRunPromiseExit = (runtime6) => (effect3, options) => new Promise((resolve) => {
  const op = fastPath(effect3);
  if (op) {
    resolve(op);
  }
  const fiber = unsafeFork2(runtime6)(effect3);
  fiber.addObserver((exit4) => {
    resolve(exit4);
  });
  if (options?.signal !== void 0) {
    if (options.signal.aborted) {
      fiber.unsafeInterruptAsFork(fiber.id());
    } else {
      options.signal.addEventListener("abort", () => {
        fiber.unsafeInterruptAsFork(fiber.id());
      });
    }
  }
});
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
var runtime3 = () => withFiberRuntime((state, status2) => succeed(new RuntimeImpl(state.getFiberRef(currentContext), status2.runtimeFlags, state.getFiberRefs())));
var defaultRuntimeFlags = /* @__PURE__ */ make17(Interruption, CooperativeYielding, RuntimeMetrics);
var defaultRuntime = /* @__PURE__ */ make41({
  context: /* @__PURE__ */ empty5(),
  runtimeFlags: defaultRuntimeFlags,
  fiberRefs: /* @__PURE__ */ empty23()
});
var unsafeRunEffect = /* @__PURE__ */ unsafeRunCallback(defaultRuntime);
var unsafeForkEffect = /* @__PURE__ */ unsafeFork2(defaultRuntime);
var unsafeRunPromiseEffect = /* @__PURE__ */ unsafeRunPromise(defaultRuntime);
var unsafeRunPromiseExitEffect = /* @__PURE__ */ unsafeRunPromiseExit(defaultRuntime);
var unsafeRunSyncEffect = /* @__PURE__ */ unsafeRunSync(defaultRuntime);
var unsafeRunSyncExitEffect = /* @__PURE__ */ unsafeRunSyncExit(defaultRuntime);
var asyncEffect = (register) => suspend(() => {
  let cleanup = void 0;
  return flatMap8(deferredMake(), (deferred) => flatMap8(runtime3(), (runtime6) => uninterruptibleMask((restore) => zipRight2(fork(restore(matchCauseEffect(register((cb) => unsafeRunCallback(runtime6)(intoDeferred(cb, deferred))), {
    onFailure: (cause4) => deferredFailCause(deferred, cause4),
    onSuccess: (cleanup_) => {
      cleanup = cleanup_;
      return unit2;
    }
  }))), restore(onInterrupt(deferredAwait(deferred), () => cleanup ?? unit2))))));
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/synchronizedRef.js
var modifyEffect = /* @__PURE__ */ dual(2, (self, f) => self.modifyEffect(f));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/layer.js
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
var isLayer = (u) => hasProperty(u, LayerTypeId);
var isFresh = (self) => {
  return self._tag === OP_FRESH;
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
    return pipe(modifyEffect(this.ref, (map25) => {
      const inMap = map25.get(layer3);
      if (inMap !== void 0) {
        const [acquire, release] = inMap;
        const cached4 = pipe(acquire, flatMap8(([patch9, b]) => pipe(patchFiberRefs(patch9), as2(b))), onExit(exitMatch({
          onFailure: () => unit2,
          onSuccess: () => scopeAddFinalizerExit(scope5, release)
        })));
        return succeed([cached4, map25]);
      }
      return pipe(make28(0), flatMap8((observers) => pipe(deferredMake(), flatMap8((deferred) => pipe(make28(() => unit2), map10((finalizerRef) => {
        const resource = uninterruptibleMask((restore) => pipe(scopeMake(), flatMap8((innerScope) => pipe(restore(flatMap8(makeBuilder(layer3, innerScope, true), (f) => diffFiberRefs(f(this)))), exit, flatMap8((exit4) => {
          switch (exit4._tag) {
            case OP_FAILURE: {
              return pipe(deferredFailCause(deferred, exit4.effect_instruction_i0), zipRight2(scopeClose(innerScope, exit4)), zipRight2(failCause(exit4.effect_instruction_i0)));
            }
            case OP_SUCCESS: {
              return pipe(set6(finalizerRef, (exit5) => pipe(scopeClose(innerScope, exit5), whenEffect(modify4(observers, (n) => [n === 1, n - 1])), asUnit2)), zipRight2(update2(observers, (n) => n + 1)), zipRight2(scopeAddFinalizerExit(scope5, (exit5) => pipe(sync(() => map25.delete(layer3)), zipRight2(get12(finalizerRef)), flatMap8((finalizer3) => finalizer3(exit5))))), zipRight2(deferredSucceed(deferred, exit4.effect_instruction_i0)), as2(exit4.effect_instruction_i0[1]));
            }
          }
        })))));
        const memoized = [pipe(deferredAwait(deferred), onExit(exitMatchEffect({
          onFailure: () => unit2,
          onSuccess: () => update2(observers, (n) => n + 1)
        }))), (exit4) => pipe(get12(finalizerRef), flatMap8((finalizer3) => finalizer3(exit4)))];
        return [resource, isFresh(layer3) ? map25 : map25.set(layer3, memoized)];
      }))))));
    }), flatten6);
  }
};
var makeMemoMap = /* @__PURE__ */ suspend(() => map10(makeSynchronized(/* @__PURE__ */ new Map()), (ref) => new MemoMapImpl(ref)));
var build = (self) => scopeWith((scope5) => buildWithScope(self, scope5));
var buildWithScope = /* @__PURE__ */ dual(2, (self, scope5) => flatMap8(makeMemoMap, (memoMap) => flatMap8(makeBuilder(self, scope5), (run8) => run8(memoMap))));
var buildWithMemoMap = /* @__PURE__ */ dual(3, (self, memoMap, scope5) => flatMap8(makeBuilder(self, scope5), (run8) => run8(memoMap)));
var makeBuilder = (self, scope5, inMemoMap = false) => {
  const op = self;
  switch (op._tag) {
    case "Locally": {
      return sync(() => (memoMap) => op.f(memoMap.getOrElseMemoize(op.self, scope5)));
    }
    case "ExtendScope": {
      return sync(() => (memoMap) => scopeWith((scope6) => memoMap.getOrElseMemoize(op.layer, scope6)));
    }
    case "Fold": {
      return sync(() => (memoMap) => pipe(memoMap.getOrElseMemoize(op.layer, scope5), matchCauseEffect({
        onFailure: (cause4) => memoMap.getOrElseMemoize(op.failureK(cause4), scope5),
        onSuccess: (value3) => memoMap.getOrElseMemoize(op.successK(value3), scope5)
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
var catchAll2 = /* @__PURE__ */ dual(2, (self, onFailure) => match10(self, {
  onFailure,
  onSuccess: succeedContext
}));
var catchAllCause2 = /* @__PURE__ */ dual(2, (self, onFailure) => matchCause2(self, {
  onFailure,
  onSuccess: succeedContext
}));
var die5 = (defect) => failCause5(die4(defect));
var dieSync2 = (evaluate2) => failCauseSync2(() => die4(evaluate2()));
var discard = (self) => map15(self, () => empty5());
var context2 = () => fromEffectContext(context());
var extendScope = (self) => {
  const extendScope3 = Object.create(proto3);
  extendScope3._tag = OP_EXTEND_SCOPE;
  extendScope3.layer = self;
  return extendScope3;
};
var fail7 = (error2) => failCause5(fail5(error2));
var failSync2 = (evaluate2) => failCauseSync2(() => fail5(evaluate2()));
var failCause5 = (cause4) => fromEffectContext(failCause(cause4));
var failCauseSync2 = (evaluate2) => fromEffectContext(failCauseSync(evaluate2));
var flatMap9 = /* @__PURE__ */ dual(2, (self, f) => match10(self, {
  onFailure: fail7,
  onSuccess: f
}));
var flatten8 = /* @__PURE__ */ dual(2, (self, tag2) => flatMap9(self, get4(tag2)));
var fresh = (self) => {
  const fresh3 = Object.create(proto3);
  fresh3._tag = OP_FRESH;
  fresh3.layer = self;
  return fresh3;
};
var fromEffect3 = /* @__PURE__ */ dual(2, (a, b) => {
  const tagFirst = isTag2(a);
  const tag2 = tagFirst ? a : b;
  const effect3 = tagFirst ? b : a;
  return fromEffectContext(map10(effect3, (service3) => make7(tag2, service3)));
});
var fromEffectDiscard = (effect3) => fromEffectContext(map10(effect3, () => empty5()));
function fromEffectContext(effect3) {
  const fromEffect9 = Object.create(proto3);
  fromEffect9._tag = OP_FROM_EFFECT;
  fromEffect9.effect = effect3;
  return fromEffect9;
}
var fiberRefLocally2 = /* @__PURE__ */ dual(3, (self, ref, value3) => locallyEffect(self, fiberRefLocally(ref, value3)));
var locallyEffect = /* @__PURE__ */ dual(2, (self, f) => {
  const locally4 = Object.create(proto3);
  locally4._tag = "Locally";
  locally4.self = self;
  locally4.f = f;
  return locally4;
});
var fiberRefLocallyWith2 = /* @__PURE__ */ dual(3, (self, ref, value3) => locallyEffect(self, fiberRefLocallyWith(ref, value3)));
var fiberRefLocallyScoped2 = (self, value3) => scopedDiscard(fiberRefLocallyScoped(self, value3));
var fiberRefLocallyScopedWith2 = (self, value3) => scopedDiscard(fiberRefLocallyScopedWith(self, value3));
var fromFunction = (tagA, tagB, f) => fromEffectContext(map10(tagA, (a) => make7(tagB, f(a))));
var launch = (self) => scopedEffect(zipRight2(scopeWith((scope5) => pipe(self, buildWithScope(scope5))), never));
var map15 = /* @__PURE__ */ dual(2, (self, f) => flatMap9(self, (context7) => succeedContext(f(context7))));
var mapError2 = /* @__PURE__ */ dual(2, (self, f) => catchAll2(self, (error2) => failSync2(() => f(error2))));
var matchCause2 = /* @__PURE__ */ dual(2, (self, {
  onFailure,
  onSuccess
}) => {
  const fold2 = Object.create(proto3);
  fold2._tag = OP_FOLD;
  fold2.layer = self;
  fold2.failureK = onFailure;
  fold2.successK = onSuccess;
  return fold2;
});
var match10 = /* @__PURE__ */ dual(2, (self, {
  onFailure,
  onSuccess
}) => matchCause2(self, {
  onFailure: (cause4) => {
    const failureOrCause3 = failureOrCause2(cause4);
    switch (failureOrCause3._tag) {
      case "Left": {
        return onFailure(failureOrCause3.left);
      }
      case "Right": {
        return failCause5(failureOrCause3.right);
      }
    }
  },
  onSuccess
}));
var memoize2 = (self) => scopeWith((scope5) => map10(memoize(buildWithScope(self, scope5)), fromEffectContext));
var merge6 = /* @__PURE__ */ dual(2, (self, that) => zipWith5(self, that, (a, b) => merge3(a, b)));
var mergeAll2 = (...layers) => {
  let final = layers[0];
  for (let i = 1; i < layers.length; i++) {
    final = merge6(final, layers[i]);
  }
  return final;
};
var orDie2 = (self) => catchAll2(self, (defect) => die5(defect));
var orElse4 = /* @__PURE__ */ dual(2, (self, that) => catchAll2(self, that));
var passthrough2 = (self) => merge6(context2(), self);
var project = /* @__PURE__ */ dual(4, (self, tagA, tagB, f) => map15(self, (context7) => make7(tagB, f(unsafeGet3(context7, tagA)))));
var retry = /* @__PURE__ */ dual(2, (self, schedule4) => suspend2(() => {
  const stateTag = GenericTag("effect/Layer/retry/{ state: unknown }");
  return pipe(succeed6(stateTag, {
    state: schedule4.initial
  }), flatMap9((env) => retryLoop(self, schedule4, stateTag, pipe(env, get4(stateTag)).state)));
}));
var retryLoop = (self, schedule4, stateTag, state) => {
  return pipe(self, catchAll2((error2) => pipe(retryUpdate(schedule4, stateTag, error2, state), flatMap9((env) => fresh(retryLoop(self, schedule4, stateTag, pipe(env, get4(stateTag)).state))))));
};
var retryUpdate = (schedule4, stateTag, error2, state) => {
  return fromEffect3(stateTag, pipe(currentTimeMillis2, flatMap8((now) => pipe(schedule4.step(now, error2, state), flatMap8(([state2, _, decision]) => isDone5(decision) ? fail2(error2) : pipe(sleep2(millis(start2(decision.intervals) - now)), as2({
    state: state2
  })))))));
};
var scoped = /* @__PURE__ */ dual(2, (a, b) => {
  const tagFirst = isTag2(a);
  const tag2 = tagFirst ? a : b;
  const effect3 = tagFirst ? b : a;
  return scopedContext(map10(effect3, (service3) => make7(tag2, service3)));
});
var scopedDiscard = (effect3) => scopedContext(pipe(effect3, as2(empty5())));
var scopedContext = (effect3) => {
  const scoped7 = Object.create(proto3);
  scoped7._tag = OP_SCOPED;
  scoped7.effect = effect3;
  return scoped7;
};
var scope2 = /* @__PURE__ */ scopedContext(/* @__PURE__ */ map10(/* @__PURE__ */ acquireRelease(/* @__PURE__ */ scopeMake(), (scope5, exit4) => scope5.close(exit4)), (scope5) => make7(Scope, scope5)));
var service = (tag2) => fromEffect3(tag2, tag2);
var succeed6 = /* @__PURE__ */ dual(2, (a, b) => {
  const tagFirst = isTag2(a);
  const tag2 = tagFirst ? a : b;
  const resource = tagFirst ? b : a;
  return fromEffectContext(succeed(make7(tag2, resource)));
});
var succeedContext = (context7) => {
  return fromEffectContext(succeed(context7));
};
var empty32 = /* @__PURE__ */ succeedContext(/* @__PURE__ */ empty5());
var suspend2 = (evaluate2) => {
  const suspend10 = Object.create(proto3);
  suspend10._tag = OP_SUSPEND;
  suspend10.evaluate = evaluate2;
  return suspend10;
};
var sync3 = /* @__PURE__ */ dual(2, (a, b) => {
  const tagFirst = isTag2(a);
  const tag2 = tagFirst ? a : b;
  const evaluate2 = tagFirst ? b : a;
  return fromEffectContext(sync(() => make7(tag2, evaluate2())));
});
var syncContext = (evaluate2) => {
  return fromEffectContext(sync(evaluate2));
};
var tap3 = /* @__PURE__ */ dual(2, (self, f) => flatMap9(self, (context7) => fromEffectContext(as2(f(context7), context7))));
var tapError2 = /* @__PURE__ */ dual(2, (self, f) => catchAll2(self, (e) => fromEffectContext(flatMap8(f(e), () => fail2(e)))));
var tapErrorCause2 = /* @__PURE__ */ dual(2, (self, f) => catchAllCause2(self, (cause4) => fromEffectContext(flatMap8(f(cause4), () => failCause(cause4)))));
var toRuntime = (self) => pipe(scopeWith((scope5) => buildWithScope(self, scope5)), flatMap8((context7) => pipe(runtime3(), provideContext(context7))));
var toRuntimeWithMemoMap = /* @__PURE__ */ dual(2, (self, memoMap) => flatMap8(scopeWith((scope5) => buildWithMemoMap(self, memoMap, scope5)), (context7) => pipe(runtime3(), provideContext(context7))));
var provide = /* @__PURE__ */ dual(2, (that, self) => suspend2(() => {
  const provideTo = Object.create(proto3);
  provideTo._tag = OP_PROVIDE;
  provideTo.first = Object.create(proto3, {
    _tag: {
      value: OP_PROVIDE_MERGE,
      enumerable: true
    },
    first: {
      value: context2(),
      enumerable: true
    },
    second: {
      value: self
    },
    zipK: {
      value: (a, b) => pipe(a, merge3(b))
    }
  });
  provideTo.second = that;
  return provideTo;
}));
var provideMerge = /* @__PURE__ */ dual(2, (that, self) => {
  const zipWith12 = Object.create(proto3);
  zipWith12._tag = OP_PROVIDE_MERGE;
  zipWith12.first = self;
  zipWith12.second = provide(that, self);
  zipWith12.zipK = (a, b) => {
    return pipe(a, merge3(b));
  };
  return zipWith12;
});
var zipWith5 = /* @__PURE__ */ dual(3, (self, that, f) => suspend2(() => {
  const zipWith12 = Object.create(proto3);
  zipWith12._tag = OP_ZIP_WITH2;
  zipWith12.first = self;
  zipWith12.second = that;
  zipWith12.zipK = f;
  return zipWith12;
}));
var unwrapEffect = (self) => {
  const tag2 = GenericTag("effect/Layer/unwrapEffect/Layer.Layer<R1, E1, A>");
  return flatMap9(fromEffect3(tag2, self), (context7) => get4(context7, tag2));
};
var unwrapScoped = (self) => {
  const tag2 = GenericTag("effect/Layer/unwrapScoped/Layer.Layer<R1, E1, A>");
  return flatMap9(scoped(tag2, self), (context7) => get4(context7, tag2));
};
var withSpan2 = /* @__PURE__ */ dual((args) => isLayer(args[0]), (self, name, options) => unwrapScoped(map10(options?.onEnd ? tap2(makeSpanScoped(name, options), (span4) => addFinalizer((exit4) => options.onEnd(span4, exit4))) : makeSpanScoped(name, options), (span4) => withParentSpan2(self, span4))));
var withParentSpan2 = /* @__PURE__ */ dual(2, (self, span4) => provide(self, succeedContext(make7(spanTag, span4))));
var provideSomeLayer = /* @__PURE__ */ dual(2, (self, layer3) => acquireUseRelease(scopeMake(), (scope5) => flatMap8(buildWithScope(layer3, scope5), (context7) => provideSomeContext(self, context7)), (scope5, exit4) => scopeClose(scope5, exit4)));
var provideSomeRuntime = /* @__PURE__ */ dual(2, (self, rt) => {
  const patchRefs = diff6(defaultRuntime.fiberRefs, rt.fiberRefs);
  const patchFlags = diff4(defaultRuntime.runtimeFlags, rt.runtimeFlags);
  return uninterruptibleMask((restore) => withFiberRuntime((fiber) => {
    const oldRefs = fiber.getFiberRefs();
    const newRefs = patch7(fiber.id(), oldRefs)(patchRefs);
    const oldFlags = fiber._runtimeFlags;
    const newFlags = patch4(patchFlags)(oldFlags);
    const rollbackRefs = diff6(newRefs, oldRefs);
    const rollbackFlags = diff4(newFlags, oldFlags);
    fiber.setFiberRefs(newRefs);
    fiber._runtimeFlags = newFlags;
    return ensuring(provideSomeContext(restore(self), rt.context), withFiberRuntime((fiber2) => {
      fiber2.setFiberRefs(patch7(fiber2.id(), fiber2.getFiberRefs())(rollbackRefs));
      fiber2._runtimeFlags = patch4(rollbackFlags)(fiber2._runtimeFlags);
      return unit2;
    }));
  }));
});
var effect_provide = /* @__PURE__ */ dual(2, (self, source) => isLayer(source) ? provideSomeLayer(self, source) : isContext2(source) ? provideSomeContext(self, source) : provideSomeRuntime(self, source));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/console.js
var console2 = /* @__PURE__ */ map10(/* @__PURE__ */ fiberRefGet(currentServices), /* @__PURE__ */ get4(consoleTag));
var consoleWith = (f) => fiberRefGetWith(currentServices, (services) => f(get4(services, consoleTag)));
var withConsole = /* @__PURE__ */ dual(2, (effect3, value3) => fiberRefLocallyWith(effect3, currentServices, add2(consoleTag, value3)));
var withConsoleScoped = (console4) => fiberRefLocallyScopedWith(currentServices, add2(consoleTag, console4));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/query.js
var currentCache = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentCache"), () => fiberRefUnsafeMake(unsafeMakeWith(65536, () => map10(deferredMake(), (handle) => ({
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
            return uninterruptibleMask((restore) => flatMap8(exit(blocked(empty17, restore(deferredAwait(orNew.left.handle)))), (exit4) => {
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
            return unit2;
          }
          case "Right": {
            return deferredComplete(orNew.right.handle, result);
          }
        }
      }));
    }
    return unit2;
  });
};
var withRequestCaching = /* @__PURE__ */ dual(2, (self, strategy) => fiberRefLocally(self, currentCacheEnabled, strategy));
var withRequestCache = /* @__PURE__ */ dual(
  2,
  // @ts-expect-error
  (self, cache) => fiberRefLocally(self, currentCache, cache)
);

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Request.js
var isRequest2 = isRequest;
var Class3 = Class2;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Effect.js
var EffectTypeId4 = EffectTypeId2;
var isEffect2 = isEffect;
var cachedWithTTL = cached2;
var cachedInvalidateWithTTL2 = cachedInvalidateWithTTL;
var cached3 = memoize;
var cachedFunction2 = cachedFunction;
var once2 = once;
var all4 = all3;
var allWith2 = allWith;
var allSuccesses2 = allSuccesses;
var dropUntil2 = dropUntil;
var dropWhile4 = dropWhile3;
var every7 = every5;
var exists3 = exists2;
var filter9 = filter7;
var findFirst6 = findFirst4;
var firstSuccessOf2 = firstSuccessOf;
var forEach8 = forEach7;
var head4 = head3;
var mergeAll3 = mergeAll;
var partition5 = partition4;
var reduce12 = reduce10;
var reduceEffect2 = reduceEffect;
var reduceRight4 = reduceRight3;
var reduceWhile2 = reduceWhile;
var replicate3 = replicate2;
var replicateEffect2 = replicateEffect;
var takeUntil2 = takeUntil;
var takeWhile4 = takeWhile3;
var validateAll2 = validateAll;
var validateFirst2 = validateFirst;
var async2 = async;
var asyncEffect2 = asyncEffect;
var custom2 = custom;
var withFiberRuntime2 = withFiberRuntime;
var fail9 = fail2;
var failSync3 = failSync;
var failCause7 = failCause;
var failCauseSync3 = failCauseSync;
var die6 = die2;
var dieMessage2 = dieMessage;
var dieSync3 = dieSync;
var gen3 = gen2;
var never3 = never;
var none9 = none6;
var promise2 = promise;
var succeed8 = succeed;
var succeedNone2 = succeedNone;
var succeedSome2 = succeedSome;
var suspend3 = suspend;
var sync4 = sync;
var unit5 = unit2;
var yieldNow3 = yieldNow;
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
var retryOrElse = retryOrElse_Effect;
var try_3 = try_2;
var tryMap2 = tryMap;
var tryMapPromise2 = tryMapPromise;
var tryPromise2 = tryPromise;
var unsandbox2 = unsandbox;
var allowInterrupt2 = allowInterrupt;
var checkInterruptible2 = checkInterruptible;
var disconnect2 = disconnect;
var interrupt6 = interrupt2;
var interruptWith2 = interruptWith;
var interruptible3 = interruptible2;
var interruptibleMask2 = interruptibleMask;
var onInterrupt2 = onInterrupt;
var uninterruptible2 = uninterruptible;
var uninterruptibleMask2 = uninterruptibleMask;
var as4 = as2;
var asSome2 = asSome;
var asSomeError2 = asSomeError;
var asUnit3 = asUnit2;
var flip2 = flip;
var flipWith2 = flipWith;
var map16 = map10;
var mapAccum4 = mapAccum3;
var mapBoth3 = mapBoth;
var mapError3 = mapError;
var mapErrorCause2 = mapErrorCause;
var merge7 = merge5;
var negate3 = negate2;
var acquireRelease2 = acquireRelease;
var acquireReleaseInterruptible2 = acquireReleaseInterruptible;
var acquireUseRelease2 = acquireUseRelease;
var addFinalizer3 = addFinalizer;
var ensuring2 = ensuring;
var onError2 = onError;
var onExit2 = onExit;
var parallelFinalizers2 = parallelFinalizers;
var finalizersMask2 = finalizersMask;
var sequentialFinalizers2 = sequentialFinalizers;
var scope3 = scope;
var scopeWith2 = scopeWith;
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
var Do3 = Do2;
var bind3 = bind2;
var bindTo3 = bindTo2;
var let_3 = let_2;
var either3 = either2;
var exit2 = exit;
var intoDeferred2 = intoDeferred;
var option2 = option;
var if_2 = if_;
var filterOrDie2 = filterOrDie;
var filterOrDieMessage2 = filterOrDieMessage;
var filterOrElse2 = filterOrElse;
var filterOrFail2 = filterOrFail;
var unless2 = unless;
var unlessEffect2 = unlessEffect;
var when2 = when;
var whenEffect2 = whenEffect;
var whenFiberRef2 = whenFiberRef;
var whenRef2 = whenRef;
var flatMap10 = flatMap8;
var andThen5 = andThen3;
var flatten9 = flatten6;
var raceAll2 = raceAll;
var race2 = race;
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
var whileLoop2 = whileLoop;
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
var match11 = match6;
var matchCause3 = matchCause;
var matchCauseEffect2 = matchCauseEffect;
var matchEffect2 = matchEffect;
var log2 = log;
var logTrace2 = logTrace;
var logDebug2 = logDebug;
var logInfo2 = logInfo;
var logWarning2 = logWarning;
var logError2 = logError;
var logFatal2 = logFatal;
var withLogSpan2 = withLogSpan;
var annotateLogs2 = annotateLogs;
var logAnnotations2 = logAnnotations;
var withUnhandledErrorLogLevel2 = withUnhandledErrorLogLevel;
var orDie3 = orDie;
var orDieWith2 = orDieWith;
var orElse5 = orElse2;
var orElseFail2 = orElseFail;
var orElseSucceed2 = orElseSucceed;
var random3 = random2;
var randomWith2 = randomWith;
var withRandom2 = withRandom;
var withRandomScoped2 = withRandomScoped;
var runtime4 = runtime3;
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
var runFork = unsafeForkEffect;
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
var request = /* @__PURE__ */ dual((args) => isRequest2(args[0]), fromRequest);
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
var annotateSpans2 = annotateSpans;
var annotateCurrentSpan2 = annotateCurrentSpan;
var currentSpan2 = currentSpan;
var currentParentSpan2 = currentParentSpan;
var spanAnnotations2 = spanAnnotations;
var spanLinks2 = spanLinks;
var linkSpans2 = linkSpans;
var makeSpan2 = makeSpan;
var makeSpanScoped2 = makeSpanScoped;
var useSpan2 = useSpan;
var withSpan3 = withSpan;
var withSpanScoped2 = withSpanScoped;
var withParentSpan3 = withParentSpan;
var fromNullable4 = fromNullable3;
var optionFromOptional2 = optionFromOptional;
var Tag2 = (id2) => () => {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  const creationError = new Error();
  Error.stackTraceLimit = limit;
  function TagClass() {
  }
  Object.setPrototypeOf(TagClass, TagProto);
  TagClass.key = id2;
  Object.defineProperty(TagClass, "stack", {
    get() {
      return creationError.stack;
    }
  });
  const cache = /* @__PURE__ */ new Map();
  const done9 = new Proxy(TagClass, {
    get(_target, prop2, _receiver) {
      if (prop2 === "use") {
        return (body) => andThen3(TagClass, body);
      }
      if (prop2 in TagClass) {
        return TagClass[prop2];
      }
      if (cache.has(prop2)) {
        return cache.get(prop2);
      }
      const fn = (...args) => (
        // @ts-expect-error
        andThen3(TagClass, (s) => {
          if (typeof s[prop2] === "function") {
            cache.set(prop2, (...args2) => andThen3(TagClass, (s2) => s2[prop2](...args2)));
            return s[prop2](...args);
          }
          cache.set(prop2, andThen3(TagClass, (s2) => s2[prop2]));
          return s[prop2];
        })
      );
      const cn = andThen3(TagClass, (s) => s[prop2]);
      Object.assign(fn, cn);
      Object.setPrototypeOf(fn, Object.getPrototypeOf(cn));
      cache.set(prop2, fn);
      return fn;
    }
  });
  return done9;
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Layer.js
var Layer_exports = {};
__export(Layer_exports, {
  LayerTypeId: () => LayerTypeId2,
  MemoMapTypeId: () => MemoMapTypeId2,
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
  empty: () => empty33,
  extendScope: () => extendScope2,
  fail: () => fail10,
  failCause: () => failCause8,
  failCauseSync: () => failCauseSync4,
  failSync: () => failSync4,
  fiberRefLocallyScopedWith: () => fiberRefLocallyScopedWith3,
  flatMap: () => flatMap11,
  flatten: () => flatten10,
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
  map: () => map17,
  mapError: () => mapError4,
  match: () => match12,
  matchCause: () => matchCause4,
  memoize: () => memoize3,
  merge: () => merge8,
  mergeAll: () => mergeAll4,
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
  setRequestBatching: () => setRequestBatching,
  setRequestCache: () => setRequestCache,
  setRequestCaching: () => setRequestCaching,
  setScheduler: () => setScheduler,
  setTracer: () => setTracer2,
  setTracerEnabled: () => setTracerEnabled,
  setTracerTiming: () => setTracerTiming,
  setUnhandledErrorLogLevel: () => setUnhandledErrorLogLevel,
  span: () => span3,
  succeed: () => succeed9,
  succeedContext: () => succeedContext2,
  suspend: () => suspend4,
  sync: () => sync5,
  syncContext: () => syncContext2,
  tap: () => tap5,
  tapError: () => tapError4,
  tapErrorCause: () => tapErrorCause4,
  toRuntime: () => toRuntime2,
  toRuntimeWithMemoMap: () => toRuntimeWithMemoMap2,
  unwrapEffect: () => unwrapEffect2,
  unwrapScoped: () => unwrapScoped2,
  withParentSpan: () => withParentSpan4,
  withSpan: () => withSpan4,
  zipWith: () => zipWith7
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/layer/circular.js
var minimumLogLevel = (level) => scopedDiscard(fiberRefLocallyScoped(currentMinimumLogLevel, level));
var withMinimumLogLevel = /* @__PURE__ */ dual(2, (self, level) => fiberRefLocally(currentMinimumLogLevel, level)(self));
var addLogger = (logger) => scopedDiscard(fiberRefLocallyScopedWith(currentLoggers, add4(logger)));
var addLoggerEffect = (effect3) => unwrapEffect(map10(effect3, addLogger));
var addLoggerScoped = (effect3) => unwrapScoped(map10(effect3, addLogger));
var removeLogger = (logger) => scopedDiscard(fiberRefLocallyScopedWith(currentLoggers, remove5(logger)));
var replaceLogger = /* @__PURE__ */ dual(2, (self, that) => flatMap9(removeLogger(self), () => addLogger(that)));
var replaceLoggerEffect = /* @__PURE__ */ dual(2, (self, that) => flatMap9(removeLogger(self), () => addLoggerEffect(that)));
var replaceLoggerScoped = /* @__PURE__ */ dual(2, (self, that) => flatMap9(removeLogger(self), () => addLoggerScoped(that)));
var setConfigProvider = (configProvider) => scopedDiscard(withConfigProviderScoped(configProvider));
var parentSpan = (span4) => succeedContext(make7(spanTag, span4));
var span2 = (name, options) => scoped(spanTag, options?.onEnd ? tap2(makeSpanScoped(name, options), (span4) => addFinalizer((exit4) => options.onEnd(span4, exit4))) : makeSpanScoped(name, options));
var setTracer = (tracer3) => scopedDiscard(withTracerScoped(tracer3));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Layer.js
var LayerTypeId2 = LayerTypeId;
var MemoMapTypeId2 = MemoMapTypeId;
var isLayer2 = isLayer;
var isFresh2 = isFresh;
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
var empty33 = empty32;
var extendScope2 = extendScope;
var fail10 = fail7;
var failSync4 = failSync2;
var failCause8 = failCause5;
var failCauseSync4 = failCauseSync2;
var flatMap11 = flatMap9;
var flatten10 = flatten8;
var fresh2 = fresh;
var fromFunction2 = fromFunction;
var launch2 = launch;
var map17 = map15;
var mapError4 = mapError2;
var match12 = match10;
var matchCause4 = matchCause2;
var memoize3 = memoize2;
var merge8 = merge6;
var mergeAll4 = mergeAll2;
var orDie4 = orDie2;
var orElse6 = orElse4;
var passthrough3 = passthrough2;
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
var succeed9 = succeed6;
var succeedContext2 = succeedContext;
var suspend4 = suspend2;
var sync5 = sync3;
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/queue.js
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
var QueueImpl = class {
  queue;
  takers;
  shutdownHook;
  shutdownFlag;
  strategy;
  [EnqueueTypeId] = enqueueVariance;
  [DequeueTypeId] = dequeueVariance;
  constructor(queue, takers, shutdownHook, shutdownFlag, strategy) {
    this.queue = queue;
    this.takers = takers;
    this.shutdownHook = shutdownHook;
    this.shutdownFlag = shutdownFlag;
    this.strategy = strategy;
  }
  pipe() {
    return pipeArguments(this, arguments);
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
    return map10(this.size, (size16) => size16 <= 0);
  }
  get isFull() {
    return map10(this.size, (size16) => size16 >= this.capacity());
  }
  get shutdown() {
    return uninterruptible(withFiberRuntime((state) => {
      pipe(this.shutdownFlag, set3(true));
      return pipe(forEachConcurrentDiscard(unsafePollAll(this.takers), (d) => deferredInterruptWith(d, state.id()), false, false), zipRight2(this.strategy.shutdown), whenEffect(deferredSucceed(this.shutdownHook, void 0)), asUnit2);
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
  unsafeOffer(value3) {
    if (get7(this.shutdownFlag)) {
      return false;
    }
    let noRemaining;
    if (this.queue.length() === 0) {
      const taker = pipe(this.takers, poll2(EmptyMutableQueue));
      if (taker !== EmptyMutableQueue) {
        unsafeCompleteDeferred(taker, value3);
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
    const succeeded = this.queue.offer(value3);
    unsafeCompleteTakers(this.strategy, this.queue, this.takers);
    return succeeded;
  }
  offer(value3) {
    return suspend(() => {
      if (get7(this.shutdownFlag)) {
        return interrupt2;
      }
      let noRemaining;
      if (this.queue.length() === 0) {
        const taker = pipe(this.takers, poll2(EmptyMutableQueue));
        if (taker !== EmptyMutableQueue) {
          unsafeCompleteDeferred(taker, value3);
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
      const succeeded = this.queue.offer(value3);
      unsafeCompleteTakers(this.strategy, this.queue, this.takers);
      return succeeded ? succeed(true) : this.strategy.handleSurplus([value3], this.queue, this.takers, this.shutdownFlag);
    });
  }
  offerAll(iterable) {
    return suspend(() => {
      if (get7(this.shutdownFlag)) {
        return interrupt2;
      }
      const values5 = fromIterable2(iterable);
      const pTakers = this.queue.length() === 0 ? fromIterable2(unsafePollN(this.takers, values5.length)) : empty3;
      const [forTakers, remaining] = pipe(values5, splitAt(pTakers.length));
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
        const values5 = this.queue.pollUpTo(Number.POSITIVE_INFINITY);
        this.strategy.unsafeOnQueueEmptySpace(this.queue, this.takers);
        return fromIterable3(values5);
      });
    });
  }
  takeUpTo(max6) {
    return suspend(() => get7(this.shutdownFlag) ? interrupt2 : sync(() => {
      const values5 = this.queue.pollUpTo(max6);
      this.strategy.unsafeOnQueueEmptySpace(this.queue, this.takers);
      return fromIterable3(values5);
    }));
  }
  takeBetween(min4, max6) {
    return suspend(() => takeRemainderLoop(this, min4, max6, empty6()));
  }
};
var takeRemainderLoop = (self, min4, max6, acc) => {
  if (max6 < min4) {
    return succeed(acc);
  }
  return pipe(takeUpTo(self, max6), flatMap8((bs) => {
    const remaining = min4 - bs.length;
    if (remaining === 1) {
      return pipe(take3(self), map10((b) => pipe(acc, appendAll2(bs), append2(b))));
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
var make42 = (queue, strategy) => pipe(deferredMake(), map10((deferred) => unsafeMake8(queue, unbounded(), deferred, make12(false), strategy)));
var BackingQueueFromMutableQueue = class {
  mutable;
  [BackingQueueTypeId] = backingQueueVariance;
  constructor(mutable3) {
    this.mutable = mutable3;
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
var backingQueueFromMutableQueue = (mutable3) => new BackingQueueFromMutableQueue(mutable3);
var capacity2 = (self) => self.capacity();
var size12 = (self) => self.size;
var isFull = (self) => self.isFull;
var isEmpty10 = (self) => self.isEmpty;
var isShutdown = (self) => self.isShutdown;
var awaitShutdown = (self) => self.awaitShutdown;
var shutdown = (self) => self.shutdown;
var offer2 = /* @__PURE__ */ dual(2, (self, value3) => self.offer(value3));
var offerAll2 = /* @__PURE__ */ dual(2, (self, iterable) => self.offerAll(iterable));
var poll5 = (self) => map10(self.takeUpTo(1), head2);
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
  putters = unbounded();
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
    return pipe(fiberId, flatMap8((fiberId3) => pipe(sync(() => unsafePollAll(this.putters)), flatMap8((putters) => forEachConcurrentDiscard(putters, ([_, deferred, isLastItem]) => isLastItem ? pipe(deferredInterruptWith(deferred, fiberId3), asUnit2) : unit2, false, false)))));
  }
  handleSurplus(iterable, queue, takers, isShutdown4) {
    return withFiberRuntime((state) => {
      const deferred = deferredUnsafeMake(state.id());
      return pipe(suspend(() => {
        this.unsafeOffer(iterable, deferred);
        this.unsafeOnQueueEmptySpace(queue, takers);
        unsafeCompleteTakers(this, queue, takers);
        return get7(isShutdown4) ? interrupt2 : deferredAwait(deferred);
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
    const stuff = Array.from(iterable);
    for (let i = 0; i < stuff.length; i++) {
      const value3 = stuff[i];
      if (i === stuff.length - 1) {
        pipe(this.putters, offer([value3, deferred, true]));
      } else {
        pipe(this.putters, offer([value3, deferred, false]));
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
    return unit2;
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
    return unit2;
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
var unsafeOfferAll = (queue, as9) => {
  return pipe(queue, offerAll(as9));
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/pubsub.js
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
var bounded3 = (requestedCapacity) => pipe(sync(() => makeBoundedPubSub(requestedCapacity)), flatMap8((atomicPubSub) => makePubSub(atomicPubSub, new BackPressureStrategy2())));
var unbounded3 = () => pipe(sync(() => makeUnboundedPubSub()), flatMap8((atomicPubSub) => makePubSub(atomicPubSub, new DroppingStrategy2())));
var shutdown2 = (self) => self.shutdown;
var publish = /* @__PURE__ */ dual(2, (self, value3) => self.publish(value3));
var subscribe = (self) => self.subscribe;
var makeBoundedPubSub = (requestedCapacity) => {
  ensureCapacity(requestedCapacity);
  if (requestedCapacity === 1) {
    return new BoundedPubSubSingle();
  } else if (nextPow2(requestedCapacity) === requestedCapacity) {
    return new BoundedPubSubPow2(requestedCapacity);
  } else {
    return new BoundedPubSubArb(requestedCapacity);
  }
};
var makeUnboundedPubSub = () => {
  return new UnboundedPubSub();
};
var makeSubscription = (pubsub, subscribers, strategy) => map10(deferredMake(), (deferred) => unsafeMakeSubscription(pubsub, subscribers, pubsub.subscribe(), unbounded(), deferred, make12(false), strategy));
var unsafeMakeSubscription = (pubsub, subscribers, subscription, pollers, shutdownHook, shutdownFlag, strategy) => {
  return new SubscriptionImpl(pubsub, subscribers, subscription, pollers, shutdownHook, shutdownFlag, strategy);
};
var BoundedPubSubArb = class {
  array;
  publisherIndex = 0;
  subscribers;
  subscriberCount = 0;
  subscribersIndex = 0;
  capacity;
  constructor(requestedCapacity) {
    this.array = Array.from({
      length: requestedCapacity
    });
    this.subscribers = Array.from({
      length: requestedCapacity
    });
    this.capacity = requestedCapacity;
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
  publish(value3) {
    if (this.isFull()) {
      return false;
    }
    if (this.subscriberCount !== 0) {
      const index = this.publisherIndex % this.capacity;
      this.array[index] = value3;
      this.subscribers[index] = this.subscriberCount;
      this.publisherIndex += 1;
    }
    return true;
  }
  publishAll(elements) {
    const chunk4 = fromIterable3(elements);
    const n = chunk4.length;
    const size16 = this.publisherIndex - this.subscribersIndex;
    const available = this.capacity - size16;
    const forPubSub = Math.min(n, available);
    if (forPubSub === 0) {
      return chunk4;
    }
    let iteratorIndex = 0;
    const publishAllIndex = this.publisherIndex + forPubSub;
    while (this.publisherIndex !== publishAllIndex) {
      const a = unsafeGet4(chunk4, iteratorIndex++);
      const index = this.publisherIndex % this.capacity;
      this.array[index] = a;
      this.subscribers[index] = this.subscriberCount;
      this.publisherIndex += 1;
    }
    return drop2(chunk4, iteratorIndex);
  }
  slide() {
    if (this.subscribersIndex !== this.publisherIndex) {
      const index = this.subscribersIndex % this.capacity;
      this.array[index] = AbsentValue;
      this.subscribers[index] = 0;
      this.subscribersIndex += 1;
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
      return empty6();
    }
    this.subscriberIndex = Math.max(this.subscriberIndex, this.self.subscribersIndex);
    const size16 = this.self.publisherIndex - this.subscriberIndex;
    const toPoll = Math.min(n, size16);
    if (toPoll <= 0) {
      return empty6();
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
  array;
  mask;
  publisherIndex = 0;
  subscribers;
  subscriberCount = 0;
  subscribersIndex = 0;
  capacity;
  constructor(requestedCapacity) {
    this.array = Array.from({
      length: requestedCapacity
    });
    this.mask = requestedCapacity - 1;
    this.subscribers = Array.from({
      length: requestedCapacity
    });
    this.capacity = requestedCapacity;
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
  publish(value3) {
    if (this.isFull()) {
      return false;
    }
    if (this.subscriberCount !== 0) {
      const index = this.publisherIndex & this.mask;
      this.array[index] = value3;
      this.subscribers[index] = this.subscriberCount;
      this.publisherIndex += 1;
    }
    return true;
  }
  publishAll(elements) {
    const chunk4 = fromIterable3(elements);
    const n = chunk4.length;
    const size16 = this.publisherIndex - this.subscribersIndex;
    const available = this.capacity - size16;
    const forPubSub = Math.min(n, available);
    if (forPubSub === 0) {
      return chunk4;
    }
    let iteratorIndex = 0;
    const publishAllIndex = this.publisherIndex + forPubSub;
    while (this.publisherIndex !== publishAllIndex) {
      const elem = unsafeGet4(chunk4, iteratorIndex++);
      const index = this.publisherIndex & this.mask;
      this.array[index] = elem;
      this.subscribers[index] = this.subscriberCount;
      this.publisherIndex += 1;
    }
    return drop2(chunk4, iteratorIndex);
  }
  slide() {
    if (this.subscribersIndex !== this.publisherIndex) {
      const index = this.subscribersIndex & this.mask;
      this.array[index] = AbsentValue;
      this.subscribers[index] = 0;
      this.subscribersIndex += 1;
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
      return empty6();
    }
    this.subscriberIndex = Math.max(this.subscriberIndex, this.self.subscribersIndex);
    const size16 = this.self.publisherIndex - this.subscriberIndex;
    const toPoll = Math.min(n, size16);
    if (toPoll <= 0) {
      return empty6();
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
  publisherIndex = 0;
  subscriberCount = 0;
  subscribers = 0;
  value = AbsentValue;
  capacity = 1;
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
  publish(value3) {
    if (this.isFull()) {
      return false;
    }
    if (this.subscriberCount !== 0) {
      this.value = value3;
      this.subscribers = this.subscriberCount;
      this.publisherIndex += 1;
    }
    return true;
  }
  publishAll(elements) {
    const chunk4 = fromIterable3(elements);
    if (isEmpty(chunk4)) {
      return chunk4;
    }
    if (this.publish(unsafeHead(chunk4))) {
      return drop2(chunk4, 1);
    } else {
      return chunk4;
    }
  }
  slide() {
    if (this.isFull()) {
      this.subscribers = 0;
      this.value = AbsentValue;
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
      return empty6();
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
  publisherHead = {
    value: AbsentValue,
    subscribers: 0,
    next: null
  };
  publisherTail = this.publisherHead;
  publisherIndex = 0;
  subscribersIndex = 0;
  capacity = Number.MAX_SAFE_INTEGER;
  isEmpty() {
    return this.publisherHead === this.publisherTail;
  }
  isFull() {
    return false;
  }
  size() {
    return this.publisherIndex - this.subscribersIndex;
  }
  publish(value3) {
    const subscribers = this.publisherTail.subscribers;
    if (subscribers !== 0) {
      this.publisherTail.next = {
        value: value3,
        subscribers,
        next: null
      };
      this.publisherTail = this.publisherTail.next;
      this.publisherIndex += 1;
    }
    return true;
  }
  publishAll(elements) {
    for (const a of elements) {
      this.publish(a);
    }
    return empty6();
  }
  slide() {
    if (this.publisherHead !== this.publisherTail) {
      this.publisherHead = this.publisherHead.next;
      this.publisherHead.value = AbsentValue;
      this.subscribersIndex += 1;
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
    let empty36 = true;
    let loop3 = true;
    while (loop3) {
      if (this.subscriberHead === this.self.publisherTail) {
        loop3 = false;
      } else {
        if (this.subscriberHead.next.value !== AbsentValue) {
          empty36 = false;
          loop3 = false;
        } else {
          this.subscriberHead = this.subscriberHead.next;
          this.subscriberIndex += 1;
        }
      }
    }
    return empty36;
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
var SubscriptionImpl = class {
  pubsub;
  subscribers;
  subscription;
  pollers;
  shutdownHook;
  shutdownFlag;
  strategy;
  [DequeueTypeId] = dequeueVariance;
  constructor(pubsub, subscribers, subscription, pollers, shutdownHook, shutdownFlag, strategy) {
    this.pubsub = pubsub;
    this.subscribers = subscribers;
    this.subscription = subscription;
    this.pollers = pollers;
    this.shutdownHook = shutdownHook;
    this.shutdownFlag = shutdownFlag;
    this.strategy = strategy;
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
    return suspend(() => get7(this.shutdownFlag) ? interrupt2 : succeed(this.subscription.size()));
  }
  unsafeSize() {
    if (get7(this.shutdownFlag)) {
      return none2();
    }
    return some2(this.subscription.size());
  }
  get isFull() {
    return map10(this.size, (size16) => size16 === this.capacity());
  }
  get isEmpty() {
    return map10(this.size, (size16) => size16 === 0);
  }
  get shutdown() {
    return uninterruptible(withFiberRuntime((state) => {
      set3(this.shutdownFlag, true);
      return pipe(forEachParUnbounded(unsafePollAllQueue(this.pollers), (d) => deferredInterruptWith(d, state.id()), false), zipRight2(sync(() => {
        this.subscribers.delete(this.subscription);
        this.subscription.unsubscribe();
        this.strategy.unsafeOnPubSubEmptySpace(this.pubsub, this.subscribers);
      })), whenEffect(deferredSucceed(this.shutdownHook, void 0)), asUnit2);
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
      const message2 = isEmpty7(this.pollers) ? this.subscription.poll(EmptyMutableQueue) : EmptyMutableQueue;
      if (message2 === EmptyMutableQueue) {
        const deferred = deferredUnsafeMake(state.id());
        return pipe(suspend(() => {
          pipe(this.pollers, offer(deferred));
          pipe(this.subscribers, addSubscribers(this.subscription, this.pollers));
          this.strategy.unsafeCompletePollers(this.pubsub, this.subscribers, this.subscription, this.pollers);
          return get7(this.shutdownFlag) ? interrupt2 : deferredAwait(deferred);
        }), onInterrupt(() => sync(() => unsafeRemove2(this.pollers, deferred))));
      } else {
        this.strategy.unsafeOnPubSubEmptySpace(this.pubsub, this.subscribers);
        return succeed(message2);
      }
    });
  }
  get takeAll() {
    return suspend(() => {
      if (get7(this.shutdownFlag)) {
        return interrupt2;
      }
      const as9 = isEmpty7(this.pollers) ? unsafePollAllSubscription(this.subscription) : empty6();
      this.strategy.unsafeOnPubSubEmptySpace(this.pubsub, this.subscribers);
      return succeed(as9);
    });
  }
  takeUpTo(max6) {
    return suspend(() => {
      if (get7(this.shutdownFlag)) {
        return interrupt2;
      }
      const as9 = isEmpty7(this.pollers) ? unsafePollN2(this.subscription, max6) : empty6();
      this.strategy.unsafeOnPubSubEmptySpace(this.pubsub, this.subscribers);
      return succeed(as9);
    });
  }
  takeBetween(min4, max6) {
    return suspend(() => takeRemainderLoop2(this, min4, max6, empty6()));
  }
};
var takeRemainderLoop2 = (self, min4, max6, acc) => {
  if (max6 < min4) {
    return succeed(acc);
  }
  return pipe(self.takeUpTo(max6), flatMap8((bs) => {
    const remaining = min4 - bs.length;
    if (remaining === 1) {
      return pipe(self.take, map10((b) => pipe(acc, appendAll2(bs), append2(b))));
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
    return map10(this.size, (size16) => size16 === this.capacity());
  }
  get isEmpty() {
    return map10(this.size, (size16) => size16 === 0);
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
      return pipe(this.scope.close(exitInterrupt(state.id())), zipRight2(this.strategy.shutdown), whenEffect(deferredSucceed(this.shutdownHook, void 0)), asUnit2);
    }));
  }
  publish(value3) {
    return suspend(() => {
      if (get7(this.shutdownFlag)) {
        return interrupt2;
      }
      if (this.pubsub.publish(value3)) {
        this.strategy.unsafeCompleteSubscribers(this.pubsub, this.subscribers);
        return succeed(true);
      }
      return this.strategy.handleSurplus(this.pubsub, this.subscribers, of2(value3), this.shutdownFlag);
    });
  }
  isActive() {
    return !get7(this.shutdownFlag);
  }
  unsafeOffer(value3) {
    if (get7(this.shutdownFlag)) {
      return false;
    }
    if (this.pubsub.publish(value3)) {
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
    const acquire = tap2(all3([this.scope.fork(sequential2), makeSubscription(this.pubsub, this.subscribers, this.strategy)]), (tuple3) => tuple3[0].addFinalizer(() => tuple3[1].shutdown));
    return map10(acquireRelease(acquire, (tuple3, exit4) => tuple3[0].close(exit4)), (tuple3) => tuple3[1]);
  }
  offer(value3) {
    return this.publish(value3);
  }
  offerAll(elements) {
    return this.publishAll(elements);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var makePubSub = (pubsub, strategy) => flatMap8(scopeMake(), (scope5) => map10(deferredMake(), (deferred) => unsafeMakePubSub(pubsub, /* @__PURE__ */ new Map(), scope5, deferred, make12(false), strategy)));
var unsafeMakePubSub = (pubsub, subscribers, scope5, shutdownHook, shutdownFlag, strategy) => {
  return new PubSubImpl(pubsub, subscribers, scope5, shutdownHook, shutdownFlag, strategy);
};
var ensureCapacity = (capacity5) => {
  if (capacity5 <= 0) {
    throw new InvalidPubSubCapacityException(`Cannot construct PubSub with capacity of ${capacity5}`);
  }
};
var unsafeCompleteDeferred2 = (deferred, a) => {
  deferredUnsafeDone(deferred, succeed(a));
};
var unsafeOfferAll2 = (queue, as9) => {
  return pipe(queue, offerAll(as9));
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
var unsafePublishAll = (pubsub, as9) => {
  return pubsub.publishAll(as9);
};
var unsafeRemove2 = (queue, value3) => {
  unsafeOfferAll2(queue, pipe(unsafePollAllQueue(queue), filter4((elem) => elem !== value3)));
};
var BackPressureStrategy2 = class {
  publishers = unbounded();
  get shutdown() {
    return flatMap8(fiberId, (fiberId3) => flatMap8(sync(() => unsafePollAllQueue(this.publishers)), (publishers) => forEachConcurrentDiscard(publishers, ([_, deferred, last5]) => last5 ? pipe(deferredInterruptWith(deferred, fiberId3), asUnit2) : unit2, false, false)));
  }
  handleSurplus(pubsub, subscribers, elements, isShutdown4) {
    return withFiberRuntime((state) => {
      const deferred = deferredUnsafeMake(state.id());
      return pipe(suspend(() => {
        this.unsafeOffer(elements, deferred);
        this.unsafeOnPubSubEmptySpace(pubsub, subscribers);
        this.unsafeCompleteSubscribers(pubsub, subscribers);
        return get7(isShutdown4) ? interrupt2 : deferredAwait(deferred);
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
        const value3 = next.value;
        next = iterator.next();
        if (next.done) {
          pipe(this.publishers, offer([value3, deferred, true]));
          break;
        }
        pipe(this.publishers, offer([value3, deferred, false]));
      }
    }
  }
  unsafeRemove(deferred) {
    unsafeOfferAll2(this.publishers, pipe(unsafePollAllQueue(this.publishers), filter4(([_, a]) => a !== deferred)));
  }
};
var DroppingStrategy2 = class {
  get shutdown() {
    return unit2;
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/PubSub.js
var bounded4 = bounded3;
var unbounded4 = unbounded3;
var shutdown3 = shutdown2;
var publish2 = publish;
var subscribe2 = subscribe;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Queue.js
var DequeueTypeId2 = DequeueTypeId;
var bounded5 = bounded2;
var dropping3 = dropping;
var sliding3 = sliding;
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/opCodes/channelChildExecutorDecision.js
var OP_CONTINUE2 = "Continue";
var OP_CLOSE = "Close";
var OP_YIELD2 = "Yield";

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/channel/childExecutorDecision.js
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/opCodes/continuation.js
var OP_CONTINUATION_K = "ContinuationK";
var OP_CONTINUATION_FINALIZER = "ContinuationFinalizer";

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/channel/continuation.js
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/opCodes/channelUpstreamPullStrategy.js
var OP_PULL_AFTER_NEXT = "PullAfterNext";
var OP_PULL_AFTER_ALL_ENQUEUED = "PullAfterAllEnqueued";

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/channel/upstreamPullStrategy.js
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/opCodes/channel.js
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/core-stream.js
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
  op.k = new ContinuationKImpl(succeed10, f);
  return op;
});
var collectElements = (self) => {
  return suspend5(() => {
    const builder = [];
    return flatMap12(pipeTo(self, collectElementsReader(builder)), (value3) => sync6(() => [fromIterable3(builder), value3]));
  });
};
var collectElementsReader = (builder) => readWith({
  onInput: (outElem) => flatMap12(sync6(() => {
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
var fail11 = (error2) => failCause9(fail5(error2));
var failCause9 = (cause4) => failCauseSync5(() => cause4);
var failCauseSync5 = (evaluate2) => {
  const op = Object.create(proto6);
  op._tag = OP_FAIL3;
  op.error = evaluate2;
  return op;
};
var flatMap12 = /* @__PURE__ */ dual(2, (self, f) => {
  const op = Object.create(proto6);
  op._tag = OP_FOLD2;
  op.channel = self;
  op.k = new ContinuationKImpl(f, failCause9);
  return op;
});
var foldCauseChannel = /* @__PURE__ */ dual(2, (self, options) => {
  const op = Object.create(proto6);
  op._tag = OP_FOLD2;
  op.channel = self;
  op.k = new ContinuationKImpl(options.onSuccess, options.onFailure);
  return op;
});
var fromEffect4 = (effect3) => {
  const op = Object.create(proto6);
  op._tag = OP_FROM_EFFECT2;
  op.effect = () => effect3;
  return op;
};
var pipeTo = /* @__PURE__ */ dual(2, (self, that) => {
  const op = Object.create(proto6);
  op._tag = OP_PIPE_TO;
  op.left = () => self;
  op.right = () => that;
  return op;
});
var provideContext2 = /* @__PURE__ */ dual(2, (self, env) => {
  const op = Object.create(proto6);
  op._tag = OP_PROVIDE2;
  op.context = () => env;
  op.inner = self;
  return op;
});
var readWith = (options) => readWithCause({
  onInput: options.onInput,
  onFailure: (cause4) => match2(failureOrCause2(cause4), {
    onLeft: options.onFailure,
    onRight: failCause9
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
var succeed10 = (value3) => sync6(() => value3);
var succeedNow = (result) => {
  const op = Object.create(proto6);
  op._tag = OP_SUCCEED_NOW;
  op.terminal = result;
  return op;
};
var suspend5 = (evaluate2) => {
  const op = Object.create(proto6);
  op._tag = OP_SUSPEND2;
  op.channel = evaluate2;
  return op;
};
var sync6 = (evaluate2) => {
  const op = Object.create(proto6);
  op._tag = OP_SUCCEED;
  op.evaluate = evaluate2;
  return op;
};
var unit6 = /* @__PURE__ */ succeedNow(void 0);
var write = (out) => {
  const op = Object.create(proto6);
  op._tag = OP_EMIT;
  op.out = out;
  return op;
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/opCodes/channelState.js
var OP_DONE3 = "Done";
var OP_EMIT2 = "Emit";
var OP_FROM_EFFECT3 = "FromEffect";
var OP_READ2 = "Read";

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/channel/channelState.js
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
var fromEffect5 = (effect3) => {
  const op = Object.create(proto7);
  op._tag = OP_FROM_EFFECT3;
  op.effect = effect3;
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
var effect2 = (self) => isFromEffect(self) ? self.effect : unit5;
var effectOrUndefinedIgnored = (self) => isFromEffect(self) ? ignore2(self.effect) : void 0;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/channel/subexecutor.js
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
      return zipWith6(exit2(fin1), exit2(fin2), (exit1, exit22) => pipe(exit1, zipRight3(exit22)));
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
        return zipWith6(acc, exit2(next), (exit1, exit22) => zipRight3(exit1, exit22));
      } else if (acc !== void 0) {
        return acc;
      } else if (next !== void 0) {
        return exit2(next);
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
        return zipWith6(acc, exit2(next), (exit1, exit22) => zipRight3(exit1, exit22));
      } else if (acc !== void 0) {
        return acc;
      } else if (next !== void 0) {
        return exit2(next);
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
  constructor(value3, next) {
    this.value = value3;
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/opCodes/channelUpstreamPullRequest.js
var OP_PULLED = "Pulled";
var OP_NO_UPSTREAM = "NoUpstream";

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/channel/upstreamPullRequest.js
var UpstreamPullRequestSymbolKey = "effect/ChannelUpstreamPullRequest";
var UpstreamPullRequestTypeId = /* @__PURE__ */ Symbol.for(UpstreamPullRequestSymbolKey);
var upstreamPullRequestVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
var proto8 = {
  [UpstreamPullRequestTypeId]: upstreamPullRequestVariance
};
var Pulled = (value3) => {
  const op = Object.create(proto8);
  op._tag = OP_PULLED;
  op.value = value3;
  return op;
};
var NoUpstream = (activeDownstreamCount) => {
  const op = Object.create(proto8);
  op._tag = OP_NO_UPSTREAM;
  op.activeDownstreamCount = activeDownstreamCount;
  return op;
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/channel/channelExecutor.js
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
            } else {
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
                    const drainer = () => flatMap10(bridgeInput.awaitRead(), () => suspend3(() => {
                      const state = inputExecutor.run();
                      switch (state._tag) {
                        case OP_DONE3: {
                          return match5(inputExecutor.getDone(), {
                            onFailure: (cause4) => bridgeInput.error(cause4),
                            onSuccess: (value3) => bridgeInput.done(value3)
                          });
                        }
                        case OP_EMIT2: {
                          return flatMap10(bridgeInput.emit(inputExecutor.getEmit()), () => drainer());
                        }
                        case OP_FROM_EFFECT3: {
                          return matchCauseEffect2(state.effect, {
                            onFailure: (cause4) => bridgeInput.error(cause4),
                            onSuccess: () => drainer()
                          });
                        }
                        case OP_READ2: {
                          return readUpstream(state, () => drainer(), (cause4) => bridgeInput.error(cause4));
                        }
                      }
                    }));
                    result = fromEffect5(flatMap10(forkDaemon2(drainer()), (fiber) => sync4(() => this.addFinalizer((exit4) => flatMap10(interrupt5(fiber), () => suspend3(() => {
                      const effect3 = this.restorePipe(exit4, inputExecutor);
                      return effect3 !== void 0 ? effect3 : unit5;
                    }))))));
                  }
                  break;
                }
                case OP_CONCAT_ALL: {
                  const executor = new _ChannelExecutor(this._currentChannel.value(), this._providedEnv, (effect3) => sync4(() => {
                    const prevLastClose = this._closeLastSubstream === void 0 ? unit5 : this._closeLastSubstream;
                    this._closeLastSubstream = pipe(prevLastClose, zipRight5(effect3));
                  }));
                  executor._input = this._input;
                  const channel = this._currentChannel;
                  this._activeSubexecutor = new PullFromUpstream(executor, (value3) => channel.k(value3), void 0, [], (x, y) => channel.combineInners(x, y), (x, y) => channel.combineAll(x, y), (request2) => channel.onPull(request2), (value3) => channel.onEmit(value3));
                  this._closeLastSubstream = void 0;
                  this._currentChannel = void 0;
                  break;
                }
                case OP_EMIT: {
                  this._emitted = this._currentChannel.out;
                  this._currentChannel = this._activeSubexecutor !== void 0 ? void 0 : unit6;
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
                  const effect3 = this._providedEnv === void 0 ? this._currentChannel.effect() : pipe(this._currentChannel.effect(), provide2(this._providedEnv));
                  result = fromEffect5(matchCauseEffect2(effect3, {
                    onFailure: (cause4) => {
                      const state = this.doneHalt(cause4);
                      return state !== void 0 && isFromEffect(state) ? state.effect : unit5;
                    },
                    onSuccess: (value3) => {
                      const state = this.doneSucceed(value3);
                      return state !== void 0 && isFromEffect(state) ? state.effect : unit5;
                    }
                  }));
                  break;
                }
                case OP_PIPE_TO: {
                  const previousInput = this._input;
                  const leftExec = new _ChannelExecutor(this._currentChannel.left(), this._providedEnv, (effect3) => this._executeCloseLastSubstream(effect3));
                  leftExec._input = previousInput;
                  this._input = leftExec;
                  this.addFinalizer((exit4) => {
                    const effect3 = this.restorePipe(exit4, previousInput);
                    return effect3 !== void 0 ? effect3 : unit5;
                  });
                  this._currentChannel = this._currentChannel.right();
                  break;
                }
                case OP_PROVIDE2: {
                  const previousEnv = this._providedEnv;
                  this._providedEnv = this._currentChannel.context();
                  this._currentChannel = this._currentChannel.inner;
                  this.addFinalizer(() => sync4(() => {
                    this._providedEnv = previousEnv;
                  }));
                  break;
                }
                case OP_READ: {
                  const read = this._currentChannel;
                  result = Read(this._input, identity, (emitted) => {
                    try {
                      this._currentChannel = read.more(emitted);
                    } catch (error2) {
                      this._currentChannel = read.done.onExit(die3(error2));
                    }
                    return void 0;
                  }, (exit4) => {
                    const onExit3 = (exit5) => {
                      return read.done.onExit(exit5);
                    };
                    this._currentChannel = onExit3(exit4);
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
          }
        } catch (error2) {
          this._currentChannel = failCause9(die4(error2));
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
    const effect3 = finalizers.length === 0 ? unit5 : runFinalizers(finalizers, exit4);
    this.storeInProgressFinalizer(effect3);
    return effect3;
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
      const effect3 = currInput.close(exit4);
      return effect3;
    }
    return unit5;
  }
  close(exit4) {
    let runInProgressFinalizers = void 0;
    const finalizer3 = this._inProgressFinalizer;
    if (finalizer3 !== void 0) {
      runInProgressFinalizers = pipe(finalizer3, ensuring2(sync4(() => this.clearInProgressFinalizer())));
    }
    let closeSelf = void 0;
    const selfFinalizers = this.popAllFinalizers(exit4);
    if (selfFinalizers !== void 0) {
      closeSelf = pipe(selfFinalizers, ensuring2(sync4(() => this.clearInProgressFinalizer())));
    }
    const closeSubexecutors = this._activeSubexecutor === void 0 ? void 0 : this._activeSubexecutor.close(exit4);
    if (closeSubexecutors === void 0 && runInProgressFinalizers === void 0 && closeSelf === void 0) {
      return void 0;
    }
    return pipe(
      exit2(ifNotNull(closeSubexecutors)),
      zip6(exit2(ifNotNull(runInProgressFinalizers))),
      zip6(exit2(ifNotNull(closeSelf))),
      map16(([[exit1, exit22], exit32]) => pipe(exit1, zipRight3(exit22), zipRight3(exit32))),
      uninterruptible2,
      // TODO: remove
      flatMap10((exit5) => suspend3(() => exit5))
    );
  }
  doneSucceed(value3) {
    if (this._doneStack.length === 0) {
      this._done = succeed3(value3);
      this._currentChannel = void 0;
      return Done2();
    }
    const head7 = this._doneStack[this._doneStack.length - 1];
    if (head7._tag === OP_CONTINUATION_K) {
      this._doneStack.pop();
      this._currentChannel = head7.onSuccess(value3);
      return void 0;
    }
    const finalizers = this.popNextFinalizers();
    if (this._doneStack.length === 0) {
      this._doneStack = finalizers.reverse();
      this._done = succeed3(value3);
      this._currentChannel = void 0;
      return Done2();
    }
    const finalizerEffect = runFinalizers(finalizers.map((f) => f.finalizer), succeed3(value3));
    this.storeInProgressFinalizer(finalizerEffect);
    const effect3 = pipe(finalizerEffect, ensuring2(sync4(() => this.clearInProgressFinalizer())), uninterruptible2, flatMap10(() => sync4(() => this.doneSucceed(value3))));
    return fromEffect5(effect3);
  }
  doneHalt(cause4) {
    if (this._doneStack.length === 0) {
      this._done = failCause3(cause4);
      this._currentChannel = void 0;
      return Done2();
    }
    const head7 = this._doneStack[this._doneStack.length - 1];
    if (head7._tag === OP_CONTINUATION_K) {
      this._doneStack.pop();
      this._currentChannel = head7.onHalt(cause4);
      return void 0;
    }
    const finalizers = this.popNextFinalizers();
    if (this._doneStack.length === 0) {
      this._doneStack = finalizers.reverse();
      this._done = failCause3(cause4);
      this._currentChannel = void 0;
      return Done2();
    }
    const finalizerEffect = runFinalizers(finalizers.map((f) => f.finalizer), failCause3(cause4));
    this.storeInProgressFinalizer(finalizerEffect);
    const effect3 = pipe(finalizerEffect, ensuring2(sync4(() => this.clearInProgressFinalizer())), uninterruptible2, flatMap10(() => sync4(() => this.doneHalt(cause4))));
    return fromEffect5(effect3);
  }
  processCancellation() {
    this._currentChannel = void 0;
    this._done = this._cancelled;
    this._cancelled = void 0;
    return Done2();
  }
  runBracketOut(bracketOut) {
    const effect3 = uninterruptible2(matchCauseEffect2(this.provide(bracketOut.acquire()), {
      onFailure: (cause4) => sync4(() => {
        this._currentChannel = failCause9(cause4);
      }),
      onSuccess: (out) => sync4(() => {
        this.addFinalizer((exit4) => this.provide(bracketOut.finalizer(out, exit4)));
        this._currentChannel = write(out);
      })
    }));
    return fromEffect5(effect3);
  }
  provide(effect3) {
    if (this._providedEnv === void 0) {
      return effect3;
    }
    return pipe(effect3, provide2(this._providedEnv));
  }
  runEnsuring(ensuring7) {
    this.addFinalizer(ensuring7.finalizer);
    this._currentChannel = ensuring7.channel;
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
    const state = match5(exit4, {
      onFailure: (cause4) => this.doneHalt(cause4),
      onSuccess: (value3) => this.doneSucceed(value3)
    });
    this._activeSubexecutor = void 0;
    return state === void 0 ? unit5 : effect2(state);
  }
  finishSubexecutorWithCloseEffect(subexecutorDone, ...closeFuncs) {
    this.addFinalizer(() => pipe(closeFuncs, forEach8((closeFunc) => pipe(sync4(() => closeFunc(subexecutorDone)), flatMap10((closeEffect) => closeEffect !== void 0 ? closeEffect : unit5)), {
      discard: true
    })));
    const state = pipe(subexecutorDone, match5({
      onFailure: (cause4) => this.doneHalt(cause4),
      onSuccess: (value3) => this.doneSucceed(value3)
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
    }, match5({
      onFailure: (cause4) => {
        const state = this.handleSubexecutorFailure(childExecutor, parentSubexecutor, cause4);
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
  handleSubexecutorFailure(childExecutor, parentSubexecutor, cause4) {
    return this.finishSubexecutorWithCloseEffect(failCause3(cause4), (exit4) => parentSubexecutor.close(exit4), (exit4) => childExecutor.close(exit4));
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
    return Read(subexecutor.upstreamExecutor, (effect3) => {
      const closeLastSubstream = this._closeLastSubstream === void 0 ? unit5 : this._closeLastSubstream;
      this._closeLastSubstream = void 0;
      return pipe(this._executeCloseLastSubstream(closeLastSubstream), zipRight5(effect3));
    }, (emitted) => {
      if (this._closeLastSubstream !== void 0) {
        const closeLastSubstream = this._closeLastSubstream;
        this._closeLastSubstream = void 0;
        return pipe(this._executeCloseLastSubstream(closeLastSubstream), map16(() => {
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
          return pipe(this._executeCloseLastSubstream(closeLastSubstream2), map16(() => this.replaceSubexecutor(drain5)));
        }
        this.replaceSubexecutor(drain5);
        return void 0;
      }
      const closeLastSubstream = this._closeLastSubstream;
      const state = this.finishSubexecutorWithCloseEffect(pipe(exit4, map11((a) => subexecutor.combineWithChildResult(subexecutor.lastDone, a))), () => closeLastSubstream, (exit5) => subexecutor.upstreamExecutor.close(exit5));
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
        this.addFinalizer(() => succeed8(lastClose));
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
var ifNotNull = (effect3) => effect3 !== void 0 ? effect3 : unit5;
var runFinalizers = (finalizers, exit4) => {
  return pipe(forEach8(finalizers, (fin) => exit2(fin(exit4))), map16((exits) => pipe(all2(exits), getOrElse(() => unit3))), flatMap10((exit5) => suspend3(() => exit5)));
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
            return suspend3(onSuccess);
          }
          return pipe(emitEffect, matchCauseEffect2({
            onFailure,
            onSuccess
          }));
        }
        if (emitEffect === void 0) {
          return suspend3(() => read());
        }
        return pipe(emitEffect, matchCauseEffect2({
          onFailure,
          onSuccess: () => read()
        }));
      }
      case OP_DONE3: {
        const doneEffect = current2.onDone(current2.upstream.getDone());
        if (readStack.length === 0) {
          if (doneEffect === void 0) {
            return suspend3(onSuccess);
          }
          return pipe(doneEffect, matchCauseEffect2({
            onFailure,
            onSuccess
          }));
        }
        if (doneEffect === void 0) {
          return suspend3(() => read());
        }
        return pipe(doneEffect, matchCauseEffect2({
          onFailure,
          onSuccess: () => read()
        }));
      }
      case OP_FROM_EFFECT3: {
        readStack.push(current2);
        return pipe(current2.onEffect(state.effect), catchAllCause3((cause4) => suspend3(() => {
          const doneEffect = current2.onDone(failCause3(cause4));
          return doneEffect === void 0 ? unit5 : doneEffect;
        })), matchCauseEffect2({
          onFailure,
          onSuccess: () => read()
        }));
      }
      case OP_READ2: {
        readStack.push(current2);
        readStack.push(state);
        return suspend3(() => read());
      }
    }
  };
  return read();
};
var run = (self) => pipe(runScoped(self), scoped2);
var runScoped = (self) => {
  const run8 = (channelDeferred, scopeDeferred, scope5) => acquireUseRelease2(sync4(() => new ChannelExecutor(self, void 0, identity)), (exec) => suspend3(() => pipe(runScopedInterpret(exec.run(), exec), intoDeferred2(channelDeferred), zipRight5(_await(channelDeferred)), zipLeft4(_await(scopeDeferred)))), (exec, exit4) => {
    const finalize = exec.close(exit4);
    if (finalize === void 0) {
      return unit5;
    }
    return tapErrorCause3(finalize, (cause4) => addFinalizer2(scope5, failCause7(cause4)));
  });
  return uninterruptibleMask2((restore) => flatMap10(scope3, (parent2) => pipe(all4([fork2(parent2, sequential3), make20(), make20()]), flatMap10(([child, channelDeferred, scopeDeferred]) => pipe(forkScoped2(restore(run8(channelDeferred, scopeDeferred, child))), flatMap10((fiber) => pipe(addFinalizer3(() => succeed2(scopeDeferred, void 0)), zipRight5(restore(_await(channelDeferred))), zipLeft4(inheritAll2(fiber)))))))));
};
var runScopedInterpret = (channelState, exec) => {
  const op = channelState;
  switch (op._tag) {
    case OP_FROM_EFFECT3: {
      return pipe(op.effect, flatMap10(() => runScopedInterpret(exec.run(), exec)));
    }
    case OP_EMIT2: {
      return runScopedInterpret(exec.run(), exec);
    }
    case OP_DONE3: {
      return suspend3(() => exec.getDone());
    }
    case OP_READ2: {
      return readUpstream(op, () => runScopedInterpret(exec.run(), exec), failCause7);
    }
  }
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/opCodes/channelMergeDecision.js
var OP_DONE4 = "Done";
var OP_AWAIT = "Await";

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/channel/mergeDecision.js
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
var Done3 = (effect3) => {
  const op = Object.create(proto9);
  op._tag = OP_DONE4;
  op.effect = effect3;
  return op;
};
var Await = (f) => {
  const op = Object.create(proto9);
  op._tag = OP_AWAIT;
  op.f = f;
  return op;
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/opCodes/channelMergeState.js
var OP_BOTH_RUNNING = "BothRunning";
var OP_LEFT_DONE = "LeftDone";
var OP_RIGHT_DONE = "RightDone";

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/channel/mergeState.js
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/opCodes/channelMergeStrategy.js
var OP_BACK_PRESSURE = "BackPressure";
var OP_BUFFER_SLIDING = "BufferSliding";

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/channel/mergeStrategy.js
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
var match13 = /* @__PURE__ */ dual(2, (self, {
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/channel/singleProducerAsyncInput.js
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
var stateError = (cause4) => ({
  _tag: OP_STATE_ERROR,
  cause: cause4
});
var stateDone = (done9) => ({
  _tag: OP_STATE_DONE2,
  done: done9
});
var SingleProducerAsyncInputImpl = class {
  ref;
  constructor(ref) {
    this.ref = ref;
  }
  awaitRead() {
    return flatten9(modify5(this.ref, (state) => state._tag === OP_STATE_EMPTY ? [_await(state.notifyProducer), state] : [unit5, state]));
  }
  get close() {
    return fiberIdWith2((fiberId3) => this.error(interrupt4(fiberId3)));
  }
  done(value3) {
    return flatten9(modify5(this.ref, (state) => {
      switch (state._tag) {
        case OP_STATE_EMPTY: {
          return [_await(state.notifyProducer), state];
        }
        case OP_STATE_EMIT: {
          return [forEach8(state.notifyConsumers, (deferred) => succeed2(deferred, left2(value3)), {
            discard: true
          }), stateDone(value3)];
        }
        case OP_STATE_ERROR: {
          return [interrupt6, state];
        }
        case OP_STATE_DONE2: {
          return [interrupt6, state];
        }
      }
    }));
  }
  emit(element) {
    return flatMap10(make20(), (deferred) => flatten9(modify5(this.ref, (state) => {
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
          return [interrupt6, state];
        }
        case OP_STATE_DONE2: {
          return [interrupt6, state];
        }
      }
    })));
  }
  error(cause4) {
    return flatten9(modify5(this.ref, (state) => {
      switch (state._tag) {
        case OP_STATE_EMPTY: {
          return [_await(state.notifyProducer), state];
        }
        case OP_STATE_EMIT: {
          return [forEach8(state.notifyConsumers, (deferred) => failCause2(deferred, cause4), {
            discard: true
          }), stateError(cause4)];
        }
        case OP_STATE_ERROR: {
          return [interrupt6, state];
        }
        case OP_STATE_DONE2: {
          return [interrupt6, state];
        }
      }
    }));
  }
  get take() {
    return this.takeWith((cause4) => failCause3(map13(cause4, left2)), (elem) => succeed3(elem), (done9) => fail4(right2(done9)));
  }
  takeWith(onError5, onElement, onDone3) {
    return flatMap10(make20(), (deferred) => flatten9(modify5(this.ref, (state) => {
      switch (state._tag) {
        case OP_STATE_EMPTY: {
          return [zipRight5(succeed2(state.notifyProducer, void 0), matchCause3(_await(deferred), {
            onFailure: onError5,
            onSuccess: match2({
              onLeft: onDone3,
              onRight: onElement
            })
          })), stateEmit([deferred])];
        }
        case OP_STATE_EMIT: {
          return [matchCause3(_await(deferred), {
            onFailure: onError5,
            onSuccess: match2({
              onLeft: onDone3,
              onRight: onElement
            })
          }), stateEmit([...state.notifyConsumers, deferred])];
        }
        case OP_STATE_ERROR: {
          return [succeed8(onError5(state.cause)), state];
        }
        case OP_STATE_DONE2: {
          return [succeed8(onDone3(state.done)), state];
        }
      }
    })));
  }
};
var make43 = () => pipe(make20(), flatMap10((deferred) => make29(stateEmpty(deferred))), map16((ref) => new SingleProducerAsyncInputImpl(ref)));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/channel.js
var as5 = /* @__PURE__ */ dual(2, (self, value3) => map18(self, () => value3));
var catchAll5 = /* @__PURE__ */ dual(2, (self, f) => catchAllCause5(self, (cause4) => match2(failureOrCause2(cause4), {
  onLeft: f,
  onRight: failCause9
})));
var concatMap = /* @__PURE__ */ dual(2, (self, f) => concatMapWith(self, f, () => void 0, () => void 0));
var drain = (self) => {
  const drainer = readWithCause({
    onInput: () => drainer,
    onFailure: failCause9,
    onDone: succeed10
  });
  return pipeTo(self, drainer);
};
var ensuring3 = /* @__PURE__ */ dual(2, (self, finalizer3) => ensuringWith(self, () => finalizer3));
var flatten11 = (self) => flatMap12(self, identity);
var foldChannel = /* @__PURE__ */ dual(2, (self, options) => foldCauseChannel(self, {
  onFailure: (cause4) => {
    const either8 = failureOrCause2(cause4);
    switch (either8._tag) {
      case "Left": {
        return options.onFailure(either8.left);
      }
      case "Right": {
        return failCause9(either8.right);
      }
    }
  },
  onSuccess: options.onSuccess
}));
var fromInput = (input) => unwrap(input.takeWith(failCause9, (elem) => flatMap12(write(elem), () => fromInput(input)), succeed10));
var fromPubSubScoped = (pubsub) => map16(subscribe2(pubsub), fromQueue);
var fromQueue = (queue) => suspend5(() => fromQueueInternal(queue));
var fromQueueInternal = (queue) => pipe(fromEffect4(take4(queue)), flatMap12(match2({
  onLeft: match5({
    onFailure: failCause9,
    onSuccess: succeedNow
  }),
  onRight: (elem) => flatMap12(write(elem), () => fromQueueInternal(queue))
})));
var identityChannel = () => readWith({
  onInput: (input) => flatMap12(write(input), () => identityChannel()),
  onFailure: fail11,
  onDone: succeedNow
});
var interruptWhen = /* @__PURE__ */ dual(2, (self, effect3) => mergeWith(self, {
  other: fromEffect4(effect3),
  onSelfDone: (selfDone) => Done3(suspend3(() => selfDone)),
  onOtherDone: (effectDone) => Done3(suspend3(() => effectDone))
}));
var interruptWhenDeferred = /* @__PURE__ */ dual(2, (self, deferred) => interruptWhen(self, _await(deferred)));
var map18 = /* @__PURE__ */ dual(2, (self, f) => flatMap12(self, (a) => sync6(() => f(a))));
var mapError5 = /* @__PURE__ */ dual(2, (self, f) => mapErrorCause3(self, map13(f)));
var mapErrorCause3 = /* @__PURE__ */ dual(2, (self, f) => catchAllCause5(self, (cause4) => failCause9(f(cause4))));
var mapOut = /* @__PURE__ */ dual(2, (self, f) => {
  const reader = readWith({
    onInput: (outElem) => flatMap12(write(f(outElem)), () => reader),
    onFailure: fail11,
    onDone: succeedNow
  });
  return pipeTo(self, reader);
});
var mapOutEffect = /* @__PURE__ */ dual(2, (self, f) => {
  const reader = readWithCause({
    onInput: (outElem) => pipe(fromEffect4(f(outElem)), flatMap12(write), flatMap12(() => reader)),
    onFailure: failCause9,
    onDone: succeedNow
  });
  return pipeTo(self, reader);
});
var mapOutEffectPar = /* @__PURE__ */ dual(3, (self, f, n) => pipe(gen3(function* ($) {
  const queue = yield* $(acquireRelease2(bounded5(n), (queue2) => shutdown4(queue2)));
  const errorSignal = yield* $(make20());
  const withPermits = n === Number.POSITIVE_INFINITY ? (_) => identity : (yield* $(makeSemaphore2(n))).withPermits;
  const pull = yield* $(toPull(self));
  yield* $(matchCauseEffect2(pull, {
    onFailure: (cause4) => offer3(queue, failCause7(cause4)),
    onSuccess: (either8) => match2(either8, {
      onLeft: (outDone) => {
        const lock = withPermits(n);
        return zipRight5(interruptible3(lock(unit5)), asUnit3(offer3(queue, succeed8(left2(outDone)))));
      },
      onRight: (outElem) => gen3(function* ($2) {
        const deferred = yield* $2(make20());
        const latch = yield* $2(make20());
        yield* $2(asUnit3(offer3(queue, map16(_await(deferred), right2))));
        yield* $2(succeed2(latch, void 0), zipRight5(pipe(uninterruptibleMask2((restore) => pipe(
          exit2(restore(_await(errorSignal))),
          raceFirst2(exit2(restore(f(outElem)))),
          // TODO: remove
          flatMap10((exit4) => suspend3(() => exit4))
        )), tapErrorCause3((cause4) => failCause2(errorSignal, cause4)), intoDeferred2(deferred))), withPermits(1), forkScoped2);
        yield* $2(_await(latch));
      })
    })
  }), forever3, interruptible3, forkScoped2);
  return queue;
}), map16((queue) => {
  const consumer = unwrap(matchCause3(flatten9(take4(queue)), {
    onFailure: failCause9,
    onSuccess: match2({
      onLeft: succeedNow,
      onRight: (outElem) => flatMap12(write(outElem), () => consumer)
    })
  }));
  return consumer;
}), unwrapScoped3));
var mergeAll5 = (options) => {
  return (channels) => mergeAllWith(options)(channels, constVoid);
};
var mergeAllWith = ({
  bufferSize = 16,
  concurrency: concurrency2,
  mergeStrategy = BackPressure()
}) => (channels, f) => pipe(gen3(function* ($) {
  const concurrencyN = concurrency2 === "unbounded" ? Number.MAX_SAFE_INTEGER : concurrency2;
  const input = yield* $(make43());
  const queueReader = fromInput(input);
  const queue = yield* $(acquireRelease2(bounded5(bufferSize), (queue2) => shutdown4(queue2)));
  const cancelers = yield* $(acquireRelease2(unbounded5(), (queue2) => shutdown4(queue2)));
  const lastDone = yield* $(make29(none2()));
  const errorSignal = yield* $(make20());
  const withPermits = (yield* $(makeSemaphore2(concurrencyN))).withPermits;
  const pull = yield* $(toPull(channels));
  const evaluatePull = (pull2) => pipe(flatMap10(pull2, match2({
    onLeft: (done9) => succeed8(some2(done9)),
    onRight: (outElem) => as4(offer3(queue, succeed8(right2(outElem))), none2())
  })), repeat({
    until: (_) => isSome2(_)
  }), flatMap10((outDone) => update3(lastDone, match({
    onNone: () => some2(outDone.value),
    onSome: (lastDone2) => some2(f(lastDone2, outDone.value))
  }))), catchAllCause3((cause4) => isInterrupted2(cause4) ? failCause7(cause4) : pipe(offer3(queue, failCause7(cause4)), zipRight5(succeed2(errorSignal, void 0)), asUnit3)));
  yield* $(matchCauseEffect2(pull, {
    onFailure: (cause4) => pipe(offer3(queue, failCause7(cause4)), zipRight5(succeed8(false))),
    onSuccess: match2({
      onLeft: (outDone) => raceWith2(interruptible3(_await(errorSignal)), interruptible3(withPermits(concurrencyN)(unit5)), {
        onSelfDone: (_, permitAcquisition) => as4(interrupt5(permitAcquisition), false),
        onOtherDone: (_, failureAwait) => zipRight5(interrupt5(failureAwait), pipe(get13(lastDone), flatMap10(match({
          onNone: () => offer3(queue, succeed8(left2(outDone))),
          onSome: (lastDone2) => offer3(queue, succeed8(left2(f(lastDone2, outDone))))
        })), as4(false)))
      }),
      onRight: (channel) => match13(mergeStrategy, {
        onBackPressure: () => gen3(function* ($2) {
          const latch = yield* $2(make20());
          const raceEffects = pipe(queueReader, pipeTo(channel), toPull, flatMap10((pull2) => race2(evaluatePull(pull2), interruptible3(_await(errorSignal)))), scoped2);
          yield* $2(succeed2(latch, void 0), zipRight5(raceEffects), withPermits(1), forkScoped2);
          yield* $2(_await(latch));
          const errored = yield* $2(isDone(errorSignal));
          return !errored;
        }),
        onBufferSliding: () => gen3(function* ($2) {
          const canceler = yield* $2(make20());
          const latch = yield* $2(make20());
          const size16 = yield* $2(size14(cancelers));
          yield* $2(take4(cancelers), flatMap10((_) => succeed2(_, void 0)), when2(() => size16 >= concurrencyN));
          yield* $2(offer3(cancelers, canceler));
          const raceEffects = pipe(queueReader, pipeTo(channel), toPull, flatMap10((pull2) => pipe(evaluatePull(pull2), race2(interruptible3(_await(errorSignal))), race2(interruptible3(_await(canceler))))), scoped2);
          yield* $2(succeed2(latch, void 0), zipRight5(raceEffects), withPermits(1), forkScoped2);
          yield* $2(_await(latch));
          const errored = yield* $2(isDone(errorSignal));
          return !errored;
        })
      })
    })
  }), repeat({
    while: (_) => _
  }), forkScoped2);
  return [queue, input];
}), map16(([queue, input]) => {
  const consumer = pipe(take4(queue), flatten9, matchCause3({
    onFailure: failCause9,
    onSuccess: match2({
      onLeft: succeedNow,
      onRight: (outElem) => flatMap12(write(outElem), () => consumer)
    })
  }), unwrap);
  return embedInput(consumer, input);
}), unwrapScoped3);
var mergeMap = /* @__PURE__ */ dual(3, (self, f, options) => mergeAll5(options)(mapOut(self, f)));
var mergeWith = /* @__PURE__ */ dual(2, (self, options) => unwrapScoped3(flatMap10(make43(), (input) => {
  const queueReader = fromInput(input);
  return map16(zip6(toPull(pipeTo(queueReader, self)), toPull(pipeTo(queueReader, options.other))), ([pullL, pullR]) => {
    const handleSide = (exit4, fiber, pull) => (done9, both2, single2) => {
      const onDecision2 = (decision) => {
        const op = decision;
        if (op._tag === OP_DONE4) {
          return succeed8(fromEffect4(zipRight5(interrupt5(fiber), op.effect)));
        }
        return map16(_await3(fiber), match5({
          onFailure: (cause4) => fromEffect4(op.f(failCause3(cause4))),
          onSuccess: match2({
            onLeft: (done10) => fromEffect4(op.f(succeed3(done10))),
            onRight: (elem) => zipRight6(write(elem), go5(single2(op.f)))
          })
        }));
      };
      return match5(exit4, {
        onFailure: (cause4) => onDecision2(done9(failCause3(cause4))),
        onSuccess: match2({
          onLeft: (z) => onDecision2(done9(succeed3(z))),
          onRight: (elem) => succeed8(flatMap12(write(elem), () => flatMap12(fromEffect4(forkDaemon2(pull)), (leftFiber) => go5(both2(leftFiber, fiber)))))
        })
      });
    };
    const go5 = (state) => {
      switch (state._tag) {
        case OP_BOTH_RUNNING: {
          const leftJoin = interruptible3(join3(state.left));
          const rightJoin = interruptible3(join3(state.right));
          return unwrap(raceWith2(leftJoin, rightJoin, {
            onSelfDone: (leftExit, rf) => zipRight5(interrupt5(rf), handleSide(leftExit, state.right, pullL)(options.onSelfDone, BothRunning, (f) => LeftDone(f))),
            onOtherDone: (rightExit, lf) => zipRight5(interrupt5(lf), handleSide(rightExit, state.left, pullR)(options.onOtherDone, (left3, right3) => BothRunning(right3, left3), (f) => RightDone(f)))
          }));
        }
        case OP_LEFT_DONE: {
          return unwrap(map16(exit2(pullR), match5({
            onFailure: (cause4) => fromEffect4(state.f(failCause3(cause4))),
            onSuccess: match2({
              onLeft: (done9) => fromEffect4(state.f(succeed3(done9))),
              onRight: (elem) => flatMap12(write(elem), () => go5(LeftDone(state.f)))
            })
          })));
        }
        case OP_RIGHT_DONE: {
          return unwrap(map16(exit2(pullL), match5({
            onFailure: (cause4) => fromEffect4(state.f(failCause3(cause4))),
            onSuccess: match2({
              onLeft: (done9) => fromEffect4(state.f(succeed3(done9))),
              onRight: (elem) => flatMap12(write(elem), () => go5(RightDone(state.f)))
            })
          })));
        }
      }
    };
    return pipe(fromEffect4(zipWith6(forkDaemon2(pullL), forkDaemon2(pullR), (left3, right3) => BothRunning(left3, right3))), flatMap12(go5), embedInput(input));
  });
})));
var orDieWith3 = /* @__PURE__ */ dual(2, (self, f) => catchAll5(self, (e) => {
  throw f(e);
}));
var orElse7 = /* @__PURE__ */ dual(2, (self, that) => catchAll5(self, that));
var pipeToOrFail = /* @__PURE__ */ dual(2, (self, that) => suspend5(() => {
  let channelException = void 0;
  const reader = readWith({
    onInput: (outElem) => flatMap12(write(outElem), () => reader),
    onFailure: (outErr) => {
      channelException = ChannelException(outErr);
      return failCause9(die4(channelException));
    },
    onDone: succeedNow
  });
  const writer = readWithCause({
    onInput: (outElem) => pipe(write(outElem), flatMap12(() => writer)),
    onFailure: (cause4) => isDieType2(cause4) && isChannelException(cause4.defect) && equals(cause4.defect, channelException) ? fail11(cause4.defect.error) : failCause9(cause4),
    onDone: succeedNow
  });
  return pipeTo(pipeTo(pipeTo(self, reader), that), writer);
}));
var repeated = (self) => flatMap12(self, () => repeated(self));
var runDrain = (self) => run(drain(self));
var scoped4 = (effect3) => unwrap(uninterruptibleMask2((restore) => map16(make40(), (scope5) => acquireReleaseOut(tapErrorCause3(restore(extend3(effect3, scope5)), (cause4) => close(scope5, failCause3(cause4))), (_, exit4) => close(scope5, exit4)))));
var splitLines = () => suspend5(() => {
  let stringBuilder = "";
  let midCRLF = false;
  const splitLinesChunk = (chunk4) => {
    const chunkBuilder = [];
    map4(chunk4, (str) => {
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
      return isEmpty(out) ? loop3 : flatMap12(write(out), () => loop3);
    },
    onFailure: (cause4) => stringBuilder.length === 0 ? failCause9(cause4) : flatMap12(write(of2(stringBuilder)), () => failCause9(cause4)),
    onDone: (done9) => stringBuilder.length === 0 ? succeed10(done9) : flatMap12(write(of2(stringBuilder)), () => succeed10(done9))
  });
  return loop3;
});
var toPubSub = (pubsub) => toQueue(pubsub);
var toPull = (self) => map16(acquireRelease2(sync4(() => new ChannelExecutor(self, void 0, identity)), (exec, exit4) => {
  const finalize = exec.close(exit4);
  return finalize === void 0 ? unit5 : finalize;
}), (exec) => suspend3(() => interpretToPull(exec.run(), exec)));
var interpretToPull = (channelState, exec) => {
  const state = channelState;
  switch (state._tag) {
    case OP_DONE3: {
      return match5(exec.getDone(), {
        onFailure: failCause7,
        onSuccess: (done9) => succeed8(left2(done9))
      });
    }
    case OP_EMIT2: {
      return succeed8(right2(exec.getEmit()));
    }
    case OP_FROM_EFFECT3: {
      return pipe(state.effect, flatMap10(() => interpretToPull(exec.run(), exec)));
    }
    case OP_READ2: {
      return readUpstream(state, () => interpretToPull(exec.run(), exec), (cause4) => failCause7(cause4));
    }
  }
};
var toQueue = (queue) => suspend5(() => toQueueInternal(queue));
var toQueueInternal = (queue) => {
  return readWithCause({
    onInput: (elem) => flatMap12(fromEffect4(offer3(queue, right2(elem))), () => toQueueInternal(queue)),
    onFailure: (cause4) => fromEffect4(pipe(offer3(queue, left2(failCause3(cause4))))),
    onDone: (done9) => fromEffect4(pipe(offer3(queue, left2(succeed3(done9)))))
  });
};
var unwrap = (channel) => flatten11(fromEffect4(channel));
var unwrapScoped3 = (self) => concatAllWith(scoped4(self), (d, _) => d, (d, _) => d);
var withSpan5 = /* @__PURE__ */ dual(3, (self, name, options) => unwrapScoped3(flatMap10(context3(), (context7) => map16(makeSpanScoped2(name, options), (span4) => provideContext2(self, add2(context7, spanTag, span4))))));
var writeAll = (...outs) => writeChunk(fromIterable3(outs));
var writeChunk = (outs) => writeChunkWriter(0, outs.length, outs);
var writeChunkWriter = (idx, len, chunk4) => {
  return idx === len ? unit6 : pipe(write(pipe(chunk4, unsafeGet4(idx))), flatMap12(() => writeChunkWriter(idx + 1, len, chunk4)));
};
var zip7 = /* @__PURE__ */ dual((args) => isChannel(args[1]), (self, that, options) => options?.concurrent ? mergeWith(self, {
  other: that,
  onSelfDone: (exit1) => Await((exit22) => suspend3(() => zip3(exit1, exit22))),
  onOtherDone: (exit22) => Await((exit1) => suspend3(() => zip3(exit1, exit22)))
}) : flatMap12(self, (a) => map18(that, (b) => [a, b])));
var zipRight6 = /* @__PURE__ */ dual((args) => isChannel(args[1]), (self, that, options) => options?.concurrent ? map18(zip7(self, that, {
  concurrent: true
}), (tuple3) => tuple3[1]) : flatMap12(self, () => that));
var ChannelExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Channel/ChannelException");
var ChannelException = (error2) => ({
  _tag: "ChannelException",
  [ChannelExceptionTypeId]: ChannelExceptionTypeId,
  error: error2
});
var isChannelException = (u) => hasProperty(u, ChannelExceptionTypeId);

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/sink.js
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
var suspend6 = (evaluate2) => new SinkImpl(suspend5(() => toChannel(evaluate2())));
var collectAll = () => new SinkImpl(collectAllLoop(empty6()));
var collectAllLoop = (acc) => readWithCause({
  onInput: (chunk4) => collectAllLoop(pipe(acc, appendAll2(chunk4))),
  onFailure: failCause9,
  onDone: () => succeed10(acc)
});
var collectAllN = (n) => suspend6(() => fromChannel(collectAllNLoop(n, empty6())));
var collectAllNLoop = (n, acc) => readWithCause({
  onInput: (chunk4) => {
    const [collected, leftovers] = splitAt2(chunk4, n);
    if (collected.length < n) {
      return collectAllNLoop(n - collected.length, appendAll2(acc, collected));
    }
    if (isEmpty(leftovers)) {
      return succeed10(appendAll2(acc, collected));
    }
    return flatMap12(write(leftovers), () => succeed10(appendAll2(acc, collected)));
  },
  onFailure: failCause9,
  onDone: () => succeed10(acc)
});
var collectLeftover = (self) => new SinkImpl(pipe(collectElements(toChannel(self)), map18(([chunks3, z]) => [z, flatten3(chunks3)])));
var drain2 = /* @__PURE__ */ new SinkImpl(/* @__PURE__ */ drain(/* @__PURE__ */ identityChannel()));
var fail12 = (e) => new SinkImpl(fail11(e));
var fold = (s, contFn, f) => suspend6(() => new SinkImpl(foldReader(s, contFn, f)));
var foldReader = (s, contFn, f) => {
  if (!contFn(s)) {
    return succeedNow(s);
  }
  return readWith({
    onInput: (input) => {
      const [nextS, leftovers] = foldChunkSplit(s, input, contFn, f, 0, input.length);
      if (isNonEmpty(leftovers)) {
        return pipe(write(leftovers), as5(nextS));
      }
      return foldReader(nextS, contFn, f);
    },
    onFailure: fail11,
    onDone: () => succeedNow(s)
  });
};
var foldChunkSplit = (s, chunk4, contFn, f, index, length5) => {
  if (index === length5) {
    return [s, empty6()];
  }
  const s1 = f(s, pipe(chunk4, unsafeGet4(index)));
  if (contFn(s1)) {
    return foldChunkSplit(s1, chunk4, contFn, f, index + 1, length5);
  }
  return [s1, pipe(chunk4, drop2(index + 1))];
};
var foldSink = /* @__PURE__ */ dual(2, (self, options) => {
  const newChannel = pipe(toChannel(self), collectElements, foldChannel({
    onFailure: (error2) => toChannel(options.onFailure(error2)),
    onSuccess: ([leftovers, z]) => suspend5(() => {
      const leftoversRef = {
        ref: pipe(leftovers, filter4(isNonEmpty))
      };
      const refReader = pipe(
        sync6(() => {
          const ref = leftoversRef.ref;
          leftoversRef.ref = empty6();
          return ref;
        }),
        // This cast is safe because of the L1 >: L <: In1 bound. It follows that
        // L <: In1 and therefore Chunk[L] can be safely cast to Chunk[In1].
        flatMap12((chunk4) => writeChunk(chunk4))
      );
      const passthrough4 = identityChannel();
      const continuationSink = pipe(refReader, zipRight6(passthrough4), pipeTo(toChannel(options.onSuccess(z))));
      return flatMap12(collectElements(continuationSink), ([newLeftovers, z1]) => pipe(succeed10(leftoversRef.ref), flatMap12(writeChunk), zipRight6(writeChunk(newLeftovers)), as5(z1)));
    })
  }));
  return new SinkImpl(newChannel);
});
var foldChunks = (s, contFn, f) => suspend6(() => new SinkImpl(foldChunksReader(s, contFn, f)));
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
var foldEffect = (s, contFn, f) => suspend6(() => new SinkImpl(foldEffectReader(s, contFn, f)));
var foldEffectReader = (s, contFn, f) => {
  if (!contFn(s)) {
    return succeedNow(s);
  }
  return readWith({
    onInput: (input) => pipe(fromEffect4(foldChunkSplitEffect(s, input, contFn, f)), flatMap12(([nextS, leftovers]) => pipe(leftovers, match({
      onNone: () => foldEffectReader(nextS, contFn, f),
      onSome: (leftover) => pipe(write(leftover), as5(nextS))
    })))),
    onFailure: fail11,
    onDone: () => succeedNow(s)
  });
};
var foldChunkSplitEffect = (s, chunk4, contFn, f) => foldChunkSplitEffectInternal(s, chunk4, 0, chunk4.length, contFn, f);
var foldChunkSplitEffectInternal = (s, chunk4, index, length5, contFn, f) => {
  if (index === length5) {
    return succeed8([s, none2()]);
  }
  return pipe(f(s, pipe(chunk4, unsafeGet4(index))), flatMap10((s1) => contFn(s1) ? foldChunkSplitEffectInternal(s1, chunk4, index + 1, length5, contFn, f) : succeed8([s1, some2(pipe(chunk4, drop2(index + 1)))])));
};
var foldLeftChunks = (s, f) => foldChunks(s, constTrue, f);
var flatMap13 = /* @__PURE__ */ dual(2, (self, f) => foldSink(self, {
  onFailure: fail12,
  onSuccess: f
}));
var forEach9 = (f) => {
  const process2 = readWithCause({
    onInput: (input) => pipe(fromEffect4(forEach8(input, (v) => f(v), {
      discard: true
    })), flatMap12(() => process2)),
    onFailure: failCause9,
    onDone: () => unit6
  });
  return new SinkImpl(process2);
};
var forEachChunk = (f) => {
  const process2 = readWithCause({
    onInput: (input) => pipe(fromEffect4(f(input)), flatMap12(() => process2)),
    onFailure: failCause9,
    onDone: () => unit6
  });
  return new SinkImpl(process2);
};
var forEachWhile = (f) => {
  const process2 = readWithCause({
    onInput: (input) => forEachWhileReader(f, input, 0, input.length, process2),
    onFailure: failCause9,
    onDone: () => unit6
  });
  return new SinkImpl(process2);
};
var forEachWhileReader = (f, input, index, length5, cont) => {
  if (index === length5) {
    return cont;
  }
  return pipe(fromEffect4(f(pipe(input, unsafeGet4(index)))), flatMap12((bool) => bool ? forEachWhileReader(f, input, index + 1, length5, cont) : write(pipe(input, drop2(index)))), catchAll5((error2) => pipe(write(pipe(input, drop2(index))), zipRight6(fail11(error2)))));
};
var fromChannel = (channel) => new SinkImpl(channel);
var fromEffect6 = (effect3) => new SinkImpl(fromEffect4(effect3));
var head5 = () => fold(none2(), isNone2, (option4, input) => match(option4, {
  onNone: () => some2(input),
  onSome: () => option4
}));
var last4 = () => foldLeftChunks(none2(), (s, input) => orElse(last2(input), () => s));
var map19 = /* @__PURE__ */ dual(2, (self, f) => {
  return new SinkImpl(pipe(toChannel(self), map18(f)));
});
var raceWith3 = /* @__PURE__ */ dual(2, (self, options) => {
  const scoped7 = gen3(function* ($) {
    const pubsub = yield* $(bounded4(options?.capacity ?? 16));
    const channel1 = yield* $(fromPubSubScoped(pubsub));
    const channel2 = yield* $(fromPubSubScoped(pubsub));
    const reader = toPubSub(pubsub);
    const writer = pipe(channel1, pipeTo(toChannel(self)), mergeWith({
      other: pipe(channel2, pipeTo(toChannel(options.other))),
      onSelfDone: options.onSelfDone,
      onOtherDone: options.onOtherDone
    }));
    const racedChannel = mergeWith(reader, {
      other: writer,
      onSelfDone: (_) => Await((exit4) => suspend3(() => exit4)),
      onOtherDone: (done9) => Done3(suspend3(() => done9))
    });
    return new SinkImpl(racedChannel);
  });
  return unwrapScoped4(scoped7);
});
var sum2 = /* @__PURE__ */ foldLeftChunks(0, (acc, chunk4) => acc + reduce3(chunk4, 0, (s, a) => s + a));
var toChannel = (self) => isEffect2(self) ? toChannel(fromEffect6(self)) : self.channel;
var unwrapScoped4 = (effect3) => {
  return new SinkImpl(unwrapScoped3(pipe(effect3, map16((sink) => toChannel(sink)))));
};
var zipRight7 = /* @__PURE__ */ dual((args) => isSink(args[1]), (self, that, options) => zipWith8(self, that, (_, z2) => z2, options));
var zipWith8 = /* @__PURE__ */ dual((args) => isSink(args[1]), (self, that, f, options) => options?.concurrent ? raceWith3(self, {
  other: that,
  onSelfDone: match5({
    onFailure: (cause4) => Done3(failCause7(cause4)),
    onSuccess: (leftZ) => Await(match5({
      onFailure: failCause7,
      onSuccess: (rightZ) => succeed8(f(leftZ, rightZ))
    }))
  }),
  onOtherDone: match5({
    onFailure: (cause4) => Done3(failCause7(cause4)),
    onSuccess: (rightZ) => Await(match5({
      onFailure: failCause7,
      onSuccess: (leftZ) => succeed8(f(leftZ, rightZ))
    }))
  })
}) : flatMap13(self, (z) => map19(that, (z2) => f(z, z2))));
var count = /* @__PURE__ */ foldLeftChunks(0, (acc, chunk4) => acc + chunk4.length);
var mkString = /* @__PURE__ */ suspend6(() => {
  const strings = [];
  return pipe(foldLeftChunks(void 0, (_, elems) => map4(elems, (elem) => {
    strings.push(String(elem));
  })), map19(() => strings.join("")));
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/MergeDecision.js
var Done4 = Done3;
var Await2 = Await;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Runtime.js
var runFork2 = unsafeFork2;
var runSync2 = unsafeRunSync;
var runPromiseExit2 = unsafeRunPromiseExit;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Schedule.js
var driver2 = driver;
var forever4 = forever2;
var spaced2 = spaced;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/opCodes/streamHaltStrategy.js
var OP_LEFT = "Left";
var OP_RIGHT = "Right";
var OP_BOTH = "Both";
var OP_EITHER = "Either";

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/stream/haltStrategy.js
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/StreamHaltStrategy.js
var Both2 = Both;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/ringBuffer.js
var RingBuffer = class {
  capacity;
  array;
  size = 0;
  current = 0;
  constructor(capacity5) {
    this.capacity = capacity5;
    this.array = Array.from({
      length: capacity5
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
  put(value3) {
    this.array[this.current] = value3;
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/stream/debounceState.js
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/stream/emit.js
var make44 = (emit2) => {
  const ops = {
    chunk(as9) {
      return this(succeed8(as9));
    },
    die(defect) {
      return this(die6(defect));
    },
    dieMessage(message2) {
      return this(dieMessage2(message2));
    },
    done(exit4) {
      return this(suspend3(() => mapBoth2(exit4, {
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
    fromEffect(effect3) {
      return this(mapBoth3(effect3, {
        onFailure: some2,
        onSuccess: of2
      }));
    },
    fromEffectChunk(effect3) {
      return this(pipe(effect3, mapError3(some2)));
    },
    halt(cause4) {
      return this(failCause7(pipe(cause4, map13(some2))));
    },
    single(value3) {
      return this(succeed8(of2(value3)));
    }
  };
  return Object.assign(emit2, ops);
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/stream/handoff.js
var HandoffTypeId = /* @__PURE__ */ Symbol.for("effect/Stream/Handoff");
var OP_HANDOFF_STATE_EMPTY = "Empty";
var OP_HANDOFF_STATE_FULL = "Full";
var handoffStateEmpty = (notifyConsumer) => ({
  _tag: OP_HANDOFF_STATE_EMPTY,
  notifyConsumer
});
var handoffStateFull = (value3, notifyProducer) => ({
  _tag: OP_HANDOFF_STATE_FULL,
  value: value3,
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
var make45 = () => pipe(make20(), flatMap10((deferred) => make29(handoffStateEmpty(deferred))), map16((ref) => ({
  [HandoffTypeId]: handoffVariance,
  ref
})));
var offer4 = /* @__PURE__ */ dual(2, (self, value3) => {
  return flatMap10(make20(), (deferred) => flatten9(modify5(self.ref, (state) => pipe(state, handoffStateMatch((notifyConsumer) => [zipRight5(succeed2(notifyConsumer, void 0), _await(deferred)), handoffStateFull(value3, deferred)], (_, notifyProducer) => [flatMap10(_await(notifyProducer), () => pipe(self, offer4(value3))), state])))));
});
var take5 = (self) => flatMap10(make20(), (deferred) => flatten9(modify5(self.ref, (state) => pipe(state, handoffStateMatch((notifyConsumer) => [flatMap10(_await(notifyConsumer), () => take5(self)), state], (value3, notifyProducer) => [as4(succeed2(notifyProducer, void 0), value3), handoffStateEmpty(deferred)])))));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/stream/handoffSignal.js
var OP_EMIT4 = "Emit";
var OP_HALT = "Halt";
var OP_END = "End";
var emit = (elements) => ({
  _tag: OP_EMIT4,
  elements
});
var halt = (cause4) => ({
  _tag: OP_HALT,
  cause: cause4
});
var end3 = (reason) => ({
  _tag: OP_END,
  reason
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/take.js
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
var chunk2 = (chunk4) => new TakeImpl(succeed3(chunk4));
var done8 = (self) => suspend3(() => self.exit);
var end4 = /* @__PURE__ */ new TakeImpl(/* @__PURE__ */ fail4(/* @__PURE__ */ none2()));
var failCause10 = (cause4) => new TakeImpl(failCause3(pipe(cause4, map13(some2))));
var fromPull = (pull) => matchCause3(pull, {
  onFailure: (cause4) => match(flipCauseOption2(cause4), {
    onNone: () => end4,
    onSome: failCause10
  }),
  onSuccess: chunk2
});
var match16 = /* @__PURE__ */ dual(2, (self, {
  onEnd,
  onFailure,
  onSuccess
}) => match5(self.exit, {
  onFailure: (cause4) => match(flipCauseOption2(cause4), {
    onNone: onEnd,
    onSome: onFailure
  }),
  onSuccess
}));
var of5 = (value3) => new TakeImpl(succeed3(of2(value3)));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/stream/pull.js
var end5 = () => fail9(none2());
var failCause11 = (cause4) => mapError3(failCause7(cause4), some2);

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/stream/sinkEndReason.js
var OP_SCHEDULE_END = "ScheduleEnd";
var OP_UPSTREAM_END = "UpstreamEnd";
var ScheduleEnd = {
  _tag: OP_SCHEDULE_END
};
var UpstreamEnd = {
  _tag: OP_UPSTREAM_END
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/stream/zipAllState.js
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/stream/zipChunksState.js
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

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/stream.js
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
      return flatMap12(write(next), () => accumulator(next));
    },
    onFailure: fail11,
    onDone: () => unit6
  });
  return new StreamImpl(pipeTo(toChannel2(self), accumulator(empty6())));
};
var acquireRelease3 = (acquire, release) => scoped5(acquireRelease2(acquire, release));
var aggregate = /* @__PURE__ */ dual(2, (self, sink) => aggregateWithin(self, sink, forever4));
var aggregateWithin = /* @__PURE__ */ dual(3, (self, sink, schedule4) => filterMap6(aggregateWithinEither(self, sink, schedule4), (_) => match2(_, {
  onLeft: none2,
  onRight: some2
})));
var aggregateWithinEither = /* @__PURE__ */ dual(3, (self, sink, schedule4) => {
  const layer3 = all4([make45(), make29(ScheduleEnd), make29(empty6()), driver2(schedule4), make29(false), make29(false)]);
  return pipe(fromEffect7(layer3), flatMap14(([handoff, sinkEndReason, sinkLeftovers, scheduleDriver, consumed, endAfterEmit]) => {
    const handoffProducer = readWithCause({
      onInput: (input) => flatMap12(fromEffect4(pipe(handoff, offer4(emit(input)), when2(() => isNonEmpty(input)))), () => handoffProducer),
      onFailure: (cause4) => fromEffect4(offer4(handoff, halt(cause4))),
      onDone: () => fromEffect4(offer4(handoff, end3(UpstreamEnd)))
    });
    const handoffConsumer = pipe(getAndSet2(sinkLeftovers, empty6()), flatMap10((leftovers) => {
      if (isNonEmpty(leftovers)) {
        return pipe(set7(consumed, true), zipRight5(succeed8(pipe(write(leftovers), flatMap12(() => handoffConsumer)))));
      }
      return pipe(take5(handoff), map16((signal) => {
        switch (signal._tag) {
          case OP_EMIT4: {
            return pipe(fromEffect4(set7(consumed, true)), zipRight6(write(signal.elements)), zipRight6(fromEffect4(get13(endAfterEmit))), flatMap12((bool) => bool ? unit6 : handoffConsumer));
          }
          case OP_HALT: {
            return failCause9(signal.cause);
          }
          case OP_END: {
            if (signal.reason._tag === OP_SCHEDULE_END) {
              return pipe(get13(consumed), map16((bool) => bool ? fromEffect4(pipe(set7(sinkEndReason, ScheduleEnd), zipRight5(set7(endAfterEmit, true)))) : pipe(fromEffect4(pipe(set7(sinkEndReason, ScheduleEnd), zipRight5(set7(endAfterEmit, true)))), flatMap12(() => handoffConsumer))), unwrap);
            }
            return pipe(set7(sinkEndReason, signal.reason), zipRight5(set7(endAfterEmit, true)), fromEffect4);
          }
        }
      }));
    }), unwrap);
    const timeout5 = (lastB) => scheduleDriver.next(lastB);
    const scheduledAggregator = (sinkFiber, scheduleFiber, scope5) => {
      const forkSink = pipe(set7(consumed, false), zipRight5(set7(endAfterEmit, false)), zipRight5(pipe(handoffConsumer, pipeToOrFail(toChannel(sink)), collectElements, run, forkIn2(scope5))));
      const handleSide = (leftovers, b, c) => pipe(set7(sinkLeftovers, flatten3(leftovers)), zipRight5(map16(get13(sinkEndReason), (reason) => {
        switch (reason._tag) {
          case OP_SCHEDULE_END: {
            return pipe(all4([get13(consumed), forkSink, pipe(timeout5(some2(b)), forkIn2(scope5))]), map16(([wasConsumed, sinkFiber2, scheduleFiber2]) => {
              const toWrite = pipe(c, match({
                onNone: () => of2(right2(b)),
                onSome: (c2) => make8(right2(b), left2(c2))
              }));
              if (wasConsumed) {
                return pipe(write(toWrite), flatMap12(() => scheduledAggregator(sinkFiber2, scheduleFiber2, scope5)));
              }
              return scheduledAggregator(sinkFiber2, scheduleFiber2, scope5);
            }), unwrap);
          }
          case OP_UPSTREAM_END: {
            return pipe(get13(consumed), map16((wasConsumed) => wasConsumed ? write(of2(right2(b))) : unit6), unwrap);
          }
        }
      })), unwrap);
      return unwrap(raceWith2(join3(sinkFiber), join3(scheduleFiber), {
        onSelfDone: (sinkExit, _) => pipe(interrupt5(scheduleFiber), zipRight5(pipe(suspend3(() => sinkExit), map16(([leftovers, b]) => handleSide(leftovers, b, none2()))))),
        onOtherDone: (scheduleExit, _) => matchCauseEffect2(suspend3(() => scheduleExit), {
          onFailure: (cause4) => match2(failureOrCause2(cause4), {
            onLeft: () => pipe(handoff, offer4(end3(ScheduleEnd)), forkDaemon2, zipRight5(pipe(join3(sinkFiber), map16(([leftovers, b]) => handleSide(leftovers, b, none2()))))),
            onRight: (cause5) => pipe(handoff, offer4(halt(cause5)), forkDaemon2, zipRight5(pipe(join3(sinkFiber), map16(([leftovers, b]) => handleSide(leftovers, b, none2())))))
          }),
          onSuccess: (c) => pipe(handoff, offer4(end3(ScheduleEnd)), forkDaemon2, zipRight5(pipe(join3(sinkFiber), map16(([leftovers, b]) => handleSide(leftovers, b, some2(c))))))
        })
      }));
    };
    return unwrapScoped5(pipe(self, toChannel2, pipeTo(handoffProducer), run, forkScoped2, zipRight5(pipe(handoffConsumer, pipeToOrFail(toChannel(sink)), collectElements, run, forkScoped2, flatMap10((sinkFiber) => pipe(forkScoped2(timeout5(none2())), flatMap10((scheduleFiber) => pipe(scope3, map16((scope5) => new StreamImpl(scheduledAggregator(sinkFiber, scheduleFiber, scope5)))))))))));
  }));
});
var as7 = /* @__PURE__ */ dual(2, (self, value3) => map21(self, () => value3));
var _async = (register, outputBuffer = 16) => acquireRelease2(bounded5(outputBuffer), (queue) => shutdown4(queue)).pipe(flatMap10((output) => runtime4().pipe(flatMap10((runtime6) => sync4(() => {
  const runPromiseExit3 = runPromiseExit2(runtime6);
  const canceler = register(make44((resume2) => fromPull(resume2).pipe(flatMap10((take8) => offer3(output, take8)), asUnit3, runPromiseExit3).then((exit4) => {
    if (isFailure(exit4)) {
      if (!isInterrupted2(exit4.cause)) {
        throw squash(exit4.cause);
      }
    }
  })));
  return canceler;
})), map16((value3) => {
  const loop3 = take4(output).pipe(flatMap10((take8) => done8(take8)), match11({
    onFailure: (maybeError) => fromEffect4(shutdown4(output)).pipe(zipRight6(match(maybeError, {
      onNone: () => unit6,
      onSome: (error2) => fail11(error2)
    }))),
    onSuccess: (chunk4) => write(chunk4).pipe(flatMap12(() => loop3))
  }), unwrap);
  return fromChannel2(loop3).pipe(ensuring5(value3 ?? unit5));
}))), unwrapScoped5);
var asyncEffect3 = (register, outputBuffer = 16) => pipe(acquireRelease2(bounded5(outputBuffer), (queue) => shutdown4(queue)), flatMap10((output) => pipe(runtime4(), flatMap10((runtime6) => pipe(register(make44((k) => pipe(fromPull(k), flatMap10((take8) => offer3(output, take8)), asUnit3, runPromiseExit2(runtime6)).then((exit4) => {
  if (isFailure(exit4)) {
    if (!isInterrupted2(exit4.cause)) {
      throw squash(exit4.cause);
    }
  }
}))), map16(() => {
  const loop3 = pipe(take4(output), flatMap10(done8), match11({
    onFailure: (maybeError) => pipe(fromEffect4(shutdown4(output)), zipRight6(match(maybeError, {
      onNone: () => unit6,
      onSome: fail11
    }))),
    onSuccess: (chunk4) => pipe(write(chunk4), flatMap12(() => loop3))
  }), unwrap);
  return loop3;
}))))), unwrapScoped3, fromChannel2);
var asyncScoped = (register, outputBuffer = 16) => pipe(acquireRelease2(bounded5(outputBuffer), (queue) => shutdown4(queue)), flatMap10((output) => pipe(runtime4(), flatMap10((runtime6) => pipe(register(make44((k) => pipe(fromPull(k), flatMap10((take8) => offer3(output, take8)), asUnit3, runPromiseExit2(runtime6)).then((exit4) => {
  if (isFailure(exit4)) {
    if (!isInterrupted2(exit4.cause)) {
      throw squash(exit4.cause);
    }
  }
}))), zipRight5(make29(false)), flatMap10((ref) => pipe(get13(ref), map16((isDone6) => isDone6 ? end5() : pipe(take4(output), flatMap10(done8), onError2(() => pipe(set7(ref, true), zipRight5(shutdown4(output)))))))))))), scoped5, flatMap14(repeatEffectChunkOption));
var branchAfter = /* @__PURE__ */ dual(3, (self, n, f) => suspend7(() => {
  const buffering = (acc) => readWith({
    onInput: (input) => {
      const nextSize = acc.length + input.length;
      if (nextSize >= n) {
        const [b1, b2] = pipe(input, splitAt2(n - acc.length));
        return running3(pipe(acc, appendAll2(b1)), b2);
      }
      return buffering(pipe(acc, appendAll2(input)));
    },
    onFailure: fail11,
    onDone: () => running3(acc, empty6())
  });
  const running3 = (prefix, leftover) => pipeTo(zipRight6(write(leftover), identityChannel()), toChannel2(f(prefix)));
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(buffering(empty6()))));
}));
var broadcast = /* @__PURE__ */ dual(3, (self, n, maximumLag) => pipe(self, broadcastedQueues(n, maximumLag), map16((tuple3) => tuple3.map((queue) => flattenTake(fromQueue2(queue, {
  shutdown: true
}))))));
var broadcastDynamic = /* @__PURE__ */ dual(2, (self, maximumLag) => pipe(self, broadcastedQueuesDynamic(maximumLag), map16((effect3) => flattenTake(flatMap14(scoped5(effect3), fromQueue2)))));
var broadcastedQueues = /* @__PURE__ */ dual(3, (self, n, maximumLag) => flatMap10(bounded4(maximumLag), (pubsub) => pipe(all4(Array.from({
  length: n
}, () => subscribe2(pubsub))), tap4(() => forkScoped2(runIntoPubSubScoped(self, pubsub))))));
var broadcastedQueuesDynamic = /* @__PURE__ */ dual(2, (self, maximumLag) => map16(toPubSub2(self, maximumLag), subscribe2));
var buffer = /* @__PURE__ */ dual(2, (self, options) => {
  if (options.capacity === "unbounded") {
    return bufferUnbounded(self);
  } else if (options.strategy === "dropping") {
    return bufferDropping(self, options.capacity);
  } else if (options.strategy === "sliding") {
    return bufferSliding(self, options.capacity);
  }
  const queue = toQueueOfElements(self, options);
  return new StreamImpl(unwrapScoped3(map16(queue, (queue2) => {
    const process2 = pipe(fromEffect4(take4(queue2)), flatMap12(match5({
      onFailure: (cause4) => pipe(flipCauseOption2(cause4), match({
        onNone: () => unit6,
        onSome: failCause9
      })),
      onSuccess: (value3) => flatMap12(write(of2(value3)), () => process2)
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
  return new StreamImpl(unwrapScoped3(map16(queue, (queue2) => {
    const process2 = pipe(fromEffect4(take4(queue2)), flatMap12(match16({
      onEnd: () => unit6,
      onFailure: failCause9,
      onSuccess: (value3) => pipe(write(value3), flatMap12(() => process2))
    })));
    return process2;
  })));
});
var bufferChunksDropping = /* @__PURE__ */ dual(2, (self, capacity5) => {
  const queue = acquireRelease2(dropping3(capacity5), (queue2) => shutdown4(queue2));
  return new StreamImpl(bufferSignal(queue, toChannel2(self)));
});
var bufferChunksSliding = /* @__PURE__ */ dual(2, (self, capacity5) => {
  const queue = acquireRelease2(sliding3(capacity5), (queue2) => shutdown4(queue2));
  return new StreamImpl(bufferSignal(queue, toChannel2(self)));
});
var bufferDropping = /* @__PURE__ */ dual(2, (self, capacity5) => {
  const queue = acquireRelease2(dropping3(capacity5), (queue2) => shutdown4(queue2));
  return new StreamImpl(bufferSignal(queue, toChannel2(rechunk(1)(self))));
});
var bufferSliding = /* @__PURE__ */ dual(2, (self, capacity5) => {
  const queue = acquireRelease2(sliding3(capacity5), (queue2) => shutdown4(queue2));
  return new StreamImpl(bufferSignal(queue, toChannel2(pipe(self, rechunk(1)))));
});
var bufferUnbounded = (self) => {
  const queue = toQueue2(self, {
    strategy: "unbounded"
  });
  return new StreamImpl(unwrapScoped3(map16(queue, (queue2) => {
    const process2 = pipe(fromEffect4(take4(queue2)), flatMap12(match16({
      onEnd: () => unit6,
      onFailure: failCause9,
      onSuccess: (value3) => flatMap12(write(value3), () => process2)
    })));
    return process2;
  })));
};
var bufferSignal = (scoped7, bufferChannel) => {
  const producer = (queue, ref) => {
    const terminate = (take8) => pipe(get13(ref), tap4(_await), zipRight5(make20()), flatMap10((deferred) => pipe(offer3(queue, [take8, deferred]), zipRight5(set7(ref, deferred)), zipRight5(_await(deferred)))), asUnit3, fromEffect4);
    return readWithCause({
      onInput: (input) => pipe(make20(), flatMap10((deferred) => pipe(offer3(queue, [chunk2(input), deferred]), flatMap10((added) => pipe(set7(ref, deferred), when2(() => added))))), asUnit3, fromEffect4, flatMap12(() => producer(queue, ref))),
      onFailure: (error2) => terminate(failCause10(error2)),
      onDone: () => terminate(end4)
    });
  };
  const consumer = (queue) => {
    const process2 = pipe(fromEffect4(take4(queue)), flatMap12(([take8, deferred]) => zipRight6(fromEffect4(succeed2(deferred, void 0)), match16(take8, {
      onEnd: () => unit6,
      onFailure: failCause9,
      onSuccess: (value3) => pipe(write(value3), flatMap12(() => process2))
    }))));
    return process2;
  };
  return unwrapScoped3(pipe(scoped7, flatMap10((queue) => pipe(make20(), tap4((start3) => succeed2(start3, void 0)), flatMap10((start3) => pipe(make29(start3), flatMap10((ref) => pipe(bufferChannel, pipeTo(producer(queue, ref)), runScoped, forkScoped2)), as4(consumer(queue))))))));
};
var catchAll6 = /* @__PURE__ */ dual(2, (self, f) => catchAllCause6(self, (cause4) => match2(failureOrCause2(cause4), {
  onLeft: f,
  onRight: failCause12
})));
var catchAllCause6 = /* @__PURE__ */ dual(2, (self, f) => new StreamImpl(pipe(toChannel2(self), catchAllCause5((cause4) => toChannel2(f(cause4))))));
var catchSome3 = /* @__PURE__ */ dual(2, (self, pf) => pipe(self, catchAll6((error2) => pipe(pf(error2), getOrElse(() => fail13(error2))))));
var catchSomeCause3 = /* @__PURE__ */ dual(2, (self, pf) => pipe(self, catchAllCause6((cause4) => pipe(pf(cause4), getOrElse(() => failCause12(cause4))))));
var catchTag3 = /* @__PURE__ */ dual(3, (self, k, f) => catchAll6(self, (e) => {
  if ("_tag" in e && e["_tag"] === k) {
    return f(e);
  }
  return fail13(e);
}));
var catchTags3 = /* @__PURE__ */ dual(2, (self, cases) => catchAll6(self, (e) => {
  const keys6 = Object.keys(cases);
  if ("_tag" in e && keys6.includes(e["_tag"])) {
    return cases[e["_tag"]](e);
  }
  return fail13(e);
}));
var changes = (self) => pipe(self, changesWith((x, y) => equals(y)(x)));
var changesWith = /* @__PURE__ */ dual(2, (self, f) => {
  const writer = (last5) => readWithCause({
    onInput: (input) => {
      const [newLast, newChunk] = reduce3(input, [last5, empty6()], ([option4, outputs], output) => {
        if (isSome2(option4) && f(option4.value, output)) {
          return [some2(output), outputs];
        }
        return [some2(output), pipe(outputs, append2(output))];
      });
      return flatMap12(write(newChunk), () => writer(newLast));
    },
    onFailure: failCause9,
    onDone: () => unit6
  });
  return new StreamImpl(pipe(toChannel2(self), pipeTo(writer(none2()))));
});
var changesWithEffect = /* @__PURE__ */ dual(2, (self, f) => {
  const writer = (last5) => readWithCause({
    onInput: (input) => pipe(input, reduce12([last5, empty6()], ([option4, outputs], output) => {
      if (isSome2(option4)) {
        return pipe(f(option4.value, output), map16((bool) => bool ? [some2(output), outputs] : [some2(output), pipe(outputs, append2(output))]));
      }
      return succeed8([some2(output), pipe(outputs, append2(output))]);
    }), fromEffect4, flatMap12(([newLast, newChunk]) => pipe(write(newChunk), flatMap12(() => writer(newLast))))),
    onFailure: failCause9,
    onDone: () => unit6
  });
  return new StreamImpl(pipe(toChannel2(self), pipeTo(writer(none2()))));
});
var chunks = (self) => pipe(self, mapChunks(of2));
var chunksWith = /* @__PURE__ */ dual(2, (self, f) => flattenChunks(f(chunks(self))));
var unsome = (effect3) => catchAll3(asSome2(effect3), (o) => o._tag === "None" ? succeedNone2 : fail9(o.value));
var combine9 = /* @__PURE__ */ dual(4, (self, that, s, f) => {
  const producer = (handoff, latch) => pipe(fromEffect4(take5(latch)), zipRight6(readWithCause({
    onInput: (input) => flatMap12(fromEffect4(pipe(handoff, offer4(succeed3(input)))), () => producer(handoff, latch)),
    onFailure: (cause4) => fromEffect4(offer4(handoff, failCause3(pipe(cause4, map13(some2))))),
    onDone: () => flatMap12(fromEffect4(offer4(handoff, fail4(none2()))), () => producer(handoff, latch))
  })));
  return new StreamImpl(unwrapScoped3(gen3(function* ($) {
    const left3 = yield* $(make45());
    const right3 = yield* $(make45());
    const latchL = yield* $(make45());
    const latchR = yield* $(make45());
    yield* $(toChannel2(self), concatMap(writeChunk), pipeTo(producer(left3, latchL)), runScoped, forkScoped2);
    yield* $(toChannel2(that), concatMap(writeChunk), pipeTo(producer(right3, latchR)), runScoped, forkScoped2);
    const pullLeft = pipe(
      latchL,
      offer4(void 0),
      // TODO: remove
      zipRight5(pipe(take5(left3), flatMap10((exit4) => suspend3(() => exit4))))
    );
    const pullRight = pipe(
      latchR,
      offer4(void 0),
      // TODO: remove
      zipRight5(pipe(take5(right3), flatMap10((exit4) => suspend3(() => exit4))))
    );
    return toChannel2(unfoldEffect(s, (s2) => flatMap10(f(s2, pullLeft, pullRight), unsome)));
  })));
});
var combineChunks = /* @__PURE__ */ dual(4, (self, that, s, f) => {
  const producer = (handoff, latch) => zipRight6(fromEffect4(take5(latch)), readWithCause({
    onInput: (input) => flatMap12(fromEffect4(pipe(handoff, offer4(chunk2(input)))), () => producer(handoff, latch)),
    onFailure: (cause4) => fromEffect4(offer4(handoff, failCause10(cause4))),
    onDone: () => fromEffect4(offer4(handoff, end4))
  }));
  return new StreamImpl(pipe(all4([make45(), make45(), make45(), make45()]), tap4(([left3, _, latchL]) => pipe(toChannel2(self), pipeTo(producer(left3, latchL)), runScoped, forkScoped2)), tap4(([_, right3, __, latchR]) => pipe(toChannel2(that), pipeTo(producer(right3, latchR)), runScoped, forkScoped2)), map16(([left3, right3, latchL, latchR]) => {
    const pullLeft = pipe(latchL, offer4(void 0), zipRight5(pipe(take5(left3), flatMap10(done8))));
    const pullRight = pipe(latchR, offer4(void 0), zipRight5(pipe(take5(right3), flatMap10(done8))));
    return toChannel2(unfoldChunkEffect(s, (s2) => flatMap10(f(s2, pullLeft, pullRight), unsome)));
  }), unwrapScoped3));
});
var concat2 = /* @__PURE__ */ dual(2, (self, that) => new StreamImpl(pipe(toChannel2(self), zipRight6(toChannel2(that)))));
var concatAll2 = (streams) => suspend7(() => pipe(streams, reduce3(empty34, (x, y) => concat2(y)(x))));
var cross = /* @__PURE__ */ dual(2, (self, that) => pipe(self, crossWith(that, (a, a2) => [a, a2])));
var crossLeft = /* @__PURE__ */ dual(2, (self, that) => pipe(self, crossWith(that, (a, _) => a)));
var crossRight = /* @__PURE__ */ dual(2, (self, that) => flatMap14(self, () => that));
var crossWith = /* @__PURE__ */ dual(3, (self, that, f) => pipe(self, flatMap14((a) => pipe(that, map21((b) => f(a, b))))));
var debounce = /* @__PURE__ */ dual(2, (self, duration2) => pipe(make43(), flatMap10((input) => transplant2((grafter) => pipe(make45(), map16((handoff) => {
  const enqueue = (last5) => pipe(sleep2(duration2), as4(last5), fork3, grafter, map16((fiber) => consumer(previous(fiber))));
  const producer = readWithCause({
    onInput: (input2) => match(last2(input2), {
      onNone: () => producer,
      onSome: (last5) => flatMap12(fromEffect4(offer4(handoff, emit(of2(last5)))), () => producer)
    }),
    onFailure: (cause4) => fromEffect4(offer4(handoff, halt(cause4))),
    onDone: () => fromEffect4(offer4(handoff, end3(UpstreamEnd)))
  });
  const consumer = (state) => {
    switch (state._tag) {
      case OP_NOT_STARTED: {
        return pipe(take5(handoff), map16((signal) => {
          switch (signal._tag) {
            case OP_EMIT4: {
              return unwrap(enqueue(signal.elements));
            }
            case OP_HALT: {
              return failCause9(signal.cause);
            }
            case OP_END: {
              return unit6;
            }
          }
        }), unwrap);
      }
      case OP_PREVIOUS: {
        return unwrap(raceWith2(join3(state.fiber), take5(handoff), {
          onSelfDone: (leftExit, current2) => match5(leftExit, {
            onFailure: (cause4) => pipe(interrupt5(current2), as4(failCause9(cause4))),
            onSuccess: (chunk4) => succeed8(pipe(write(chunk4), flatMap12(() => consumer(current(current2)))))
          }),
          onOtherDone: (rightExit, previous2) => match5(rightExit, {
            onFailure: (cause4) => pipe(interrupt5(previous2), as4(failCause9(cause4))),
            onSuccess: (signal) => {
              switch (signal._tag) {
                case OP_EMIT4: {
                  return pipe(interrupt5(previous2), zipRight5(enqueue(signal.elements)));
                }
                case OP_HALT: {
                  return pipe(interrupt5(previous2), as4(failCause9(signal.cause)));
                }
                case OP_END: {
                  return pipe(join3(previous2), map16((chunk4) => pipe(write(chunk4), zipRight6(unit6))));
                }
              }
            }
          })
        }));
      }
      case OP_CURRENT: {
        return pipe(join3(state.fiber), map16((signal) => {
          switch (signal._tag) {
            case OP_EMIT4: {
              return unwrap(enqueue(signal.elements));
            }
            case OP_HALT: {
              return failCause9(signal.cause);
            }
            case OP_END: {
              return unit6;
            }
          }
        }), unwrap);
      }
    }
  };
  const debounceChannel = pipe(fromInput(input), pipeTo(producer), run, forkScoped2, as4(pipe(consumer(notStarted), embedInput(input))), unwrapScoped3);
  return new StreamImpl(pipe(toChannel2(self), pipeTo(debounceChannel)));
})))), unwrap2));
var die8 = (defect) => fromEffect7(die6(defect));
var dieSync5 = (evaluate2) => fromEffect7(dieSync3(evaluate2));
var dieMessage3 = (message2) => fromEffect7(dieMessage2(message2));
var distributedWith = /* @__PURE__ */ dual(2, (self, options) => pipe(make20(), flatMap10((deferred) => pipe(self, distributedWithDynamic({
  maximumLag: options.maximumLag,
  decide: (a) => flatMap10(_await(deferred), (f) => f(a))
}), flatMap10((next) => pipe(all4(map4(range2(0, options.size - 1), (id2) => map16(next, ([key, queue]) => [[key, id2], queue]))), map16(unsafeFromArray), flatMap10((entries2) => {
  const [mappings, queues] = reduceRight2(entries2, [/* @__PURE__ */ new Map(), empty6()], ([mappings2, queues2], [mapping, queue]) => [mappings2.set(mapping[0], mapping[1]), pipe(queues2, prepend2(queue))]);
  return pipe(succeed2(deferred, (a) => map16(options.decide(a), (f) => (key) => pipe(f(mappings.get(key))))), as4(Array.from(queues)));
})))))));
var distributedWithDynamicId = {
  ref: 0
};
var newDistributedWithDynamicId = () => {
  const current2 = distributedWithDynamicId.ref;
  distributedWithDynamicId.ref = current2 + 1;
  return current2;
};
var distributedWithDynamic = /* @__PURE__ */ dual(2, (self, options) => distributedWithDynamicCallback(self, options.maximumLag, options.decide, () => unit5));
var distributedWithDynamicCallback = /* @__PURE__ */ dual(4, (self, maximumLag, decide, done9) => pipe(acquireRelease2(make29(/* @__PURE__ */ new Map()), (ref, _) => pipe(get13(ref), flatMap10((queues) => pipe(queues.values(), forEach8(shutdown4))))), flatMap10((queuesRef) => gen3(function* ($) {
  const offer5 = (a) => pipe(decide(a), flatMap10((shouldProcess) => pipe(get13(queuesRef), flatMap10((queues) => pipe(queues.entries(), reduce12(empty6(), (acc, [id2, queue]) => {
    if (shouldProcess(id2)) {
      return pipe(offer3(queue, succeed3(a)), matchCauseEffect2({
        onFailure: (cause4) => (
          // Ignore all downstream queues that were shut
          // down and remove them later
          isInterrupted2(cause4) ? succeed8(pipe(acc, prepend2(id2))) : failCause7(cause4)
        ),
        onSuccess: () => succeed8(acc)
      }));
    }
    return succeed8(acc);
  }), flatMap10((ids3) => {
    if (isNonEmpty(ids3)) {
      return pipe(update3(queuesRef, (map25) => {
        for (const id2 of ids3) {
          map25.delete(id2);
        }
        return map25;
      }));
    }
    return unit5;
  }))))), asUnit3);
  const queuesLock = yield* $(makeSemaphore2(1));
  const newQueue = yield* $(make29(pipe(bounded5(maximumLag), flatMap10((queue) => {
    const id2 = newDistributedWithDynamicId();
    return pipe(update3(queuesRef, (map25) => map25.set(id2, queue)), as4([id2, queue]));
  }))));
  const finalize = (endTake) => (
    // Make sure that no queues are currently being added
    queuesLock.withPermits(1)(pipe(set7(newQueue, pipe(
      // All newly created queues should end immediately
      bounded5(1),
      tap4((queue) => offer3(queue, endTake)),
      flatMap10((queue) => {
        const id2 = newDistributedWithDynamicId();
        return pipe(update3(queuesRef, (map25) => map25.set(id2, queue)), as4(make4(id2, queue)));
      })
    )), zipRight5(pipe(get13(queuesRef), flatMap10((map25) => pipe(fromIterable3(map25.values()), forEach8((queue) => pipe(offer3(queue, endTake), catchSomeCause2((cause4) => isInterrupted2(cause4) ? some2(unit5) : none2()))))))), zipRight5(done9(endTake)), asUnit3))
  );
  yield* $(self, runForEachScoped(offer5), matchCauseEffect2({
    onFailure: (cause4) => finalize(failCause3(pipe(cause4, map13(some2)))),
    onSuccess: () => finalize(fail4(none2()))
  }), forkScoped2);
  return queuesLock.withPermits(1)(flatten9(get13(newQueue)));
}))));
var drain3 = (self) => new StreamImpl(drain(toChannel2(self)));
var drainFork = /* @__PURE__ */ dual(2, (self, that) => pipe(fromEffect7(make20()), flatMap14((backgroundDied) => pipe(scoped5(pipe(that, runForEachScoped(() => unit5), catchAllCause3((cause4) => failCause2(backgroundDied, cause4)), forkScoped2)), crossRight(pipe(self, interruptWhenDeferred2(backgroundDied)))))));
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
    onDone: () => unit6
  });
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(loop3(n))));
});
var dropRight2 = /* @__PURE__ */ dual(2, (self, n) => {
  if (n <= 0) {
    return identityStream();
  }
  return suspend7(() => {
    const queue = new RingBuffer(n);
    const reader = readWith({
      onInput: (input) => {
        const outputs = pipe(input, filterMap4((elem) => {
          const head7 = queue.head();
          queue.put(elem);
          return head7;
        }));
        return pipe(write(outputs), flatMap12(() => reader));
      },
      onFailure: fail11,
      onDone: () => unit6
    });
    return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(reader)));
  });
});
var dropUntil3 = /* @__PURE__ */ dual(2, (self, predicate) => drop3(dropWhile5(self, (a) => !predicate(a)), 1));
var dropUntilEffect = /* @__PURE__ */ dual(2, (self, predicate) => {
  const loop3 = readWith({
    onInput: (input) => pipe(dropUntil2(input, predicate), map16(unsafeFromArray), map16((leftover) => {
      const more = isEmpty(leftover);
      if (more) {
        return suspend5(() => loop3);
      }
      return pipe(write(leftover), zipRight6(identityChannel()));
    }), unwrap),
    onFailure: fail11,
    onDone: () => unit6
  });
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(loop3)));
});
var dropWhile5 = /* @__PURE__ */ dual(2, (self, predicate) => {
  const loop3 = readWith({
    onInput: (input) => {
      const output = dropWhile2(input, predicate);
      if (isEmpty(output)) {
        return suspend5(() => loop3);
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
    onInput: (input) => pipe(dropWhile4(input, predicate), map16(unsafeFromArray), map16((leftover) => {
      const more = isEmpty(leftover);
      if (more) {
        return suspend5(() => loop3);
      }
      return zipRight6(write(leftover), identityChannel());
    }), unwrap),
    onFailure: fail11,
    onDone: () => unit6
  });
  return new StreamImpl(pipeToOrFail(toChannel2(self), loop3));
});
var either5 = (self) => pipe(self, map21(right2), catchAll6((error2) => make46(left2(error2))));
var empty34 = /* @__PURE__ */ new StreamImpl(/* @__PURE__ */ write(/* @__PURE__ */ empty6()));
var ensuring5 = /* @__PURE__ */ dual(2, (self, finalizer3) => new StreamImpl(pipe(toChannel2(self), ensuring3(finalizer3))));
var ensuringWith2 = /* @__PURE__ */ dual(2, (self, finalizer3) => new StreamImpl(ensuringWith(toChannel2(self), finalizer3)));
var context5 = () => fromEffect7(context3());
var contextWith3 = (f) => pipe(context5(), map21(f));
var contextWithEffect3 = (f) => pipe(context5(), mapEffectSequential(f));
var contextWithStream = (f) => pipe(context5(), flatMap14(f));
var execute = (effect3) => drain3(fromEffect7(effect3));
var fail13 = (error2) => fromEffectOption(fail9(some2(error2)));
var failSync6 = (evaluate2) => fromEffectOption(failSync3(() => some2(evaluate2())));
var failCause12 = (cause4) => fromEffect7(failCause7(cause4));
var failCauseSync6 = (evaluate2) => fromEffect7(failCauseSync3(evaluate2));
var filter10 = /* @__PURE__ */ dual(2, (self, predicate) => mapChunks(self, filter4(predicate)));
var filterEffect = /* @__PURE__ */ dual(2, (self, f) => {
  const loop3 = (iterator) => {
    const next = iterator.next();
    if (next.done) {
      return readWithCause({
        onInput: (input) => loop3(input[Symbol.iterator]()),
        onFailure: failCause9,
        onDone: succeed10
      });
    } else {
      return pipe(f(next.value), map16((bool) => bool ? pipe(write(of2(next.value)), flatMap12(() => loop3(iterator))) : loop3(iterator)), unwrap);
    }
  };
  return new StreamImpl(suspend5(() => pipe(toChannel2(self), pipeTo(loop3(empty6()[Symbol.iterator]())))));
});
var filterMap6 = /* @__PURE__ */ dual(2, (self, pf) => mapChunks(self, filterMap4(pf)));
var filterMapEffect = /* @__PURE__ */ dual(2, (self, pf) => suspend7(() => {
  const loop3 = (iterator) => {
    const next = iterator.next();
    if (next.done) {
      return readWithCause({
        onInput: (input) => loop3(input[Symbol.iterator]()),
        onFailure: failCause9,
        onDone: succeed10
      });
    } else {
      return pipe(pf(next.value), match({
        onNone: () => sync4(() => loop3(iterator)),
        onSome: map16((a2) => flatMap12(write(of2(a2)), () => loop3(iterator)))
      }), unwrap);
    }
  };
  return new StreamImpl(pipe(toChannel2(self), pipeTo(loop3(empty6()[Symbol.iterator]()))));
}));
var filterMapWhile3 = /* @__PURE__ */ dual(2, (self, pf) => {
  const loop3 = readWith({
    onInput: (input) => {
      const mapped = filterMapWhile2(input, pf);
      if (mapped.length === input.length) {
        return pipe(write(mapped), flatMap12(() => loop3));
      }
      return write(mapped);
    },
    onFailure: fail11,
    onDone: succeed10
  });
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(loop3)));
});
var filterMapWhileEffect = /* @__PURE__ */ dual(2, (self, pf) => suspend7(() => {
  const loop3 = (iterator) => {
    const next = iterator.next();
    if (next.done) {
      return readWithCause({
        onInput: (input) => loop3(input[Symbol.iterator]()),
        onFailure: failCause9,
        onDone: succeed10
      });
    } else {
      return unwrap(match(pf(next.value), {
        onNone: () => succeed8(unit6),
        onSome: map16((a2) => flatMap12(write(of2(a2)), () => loop3(iterator)))
      }));
    }
  };
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(loop3(empty6()[Symbol.iterator]()))));
}));
var finalizer = (finalizer3) => acquireRelease3(unit5, () => finalizer3);
var find2 = /* @__PURE__ */ dual(2, (self, predicate) => {
  const loop3 = readWith({
    onInput: (input) => match(findFirst2(input, predicate), {
      onNone: () => loop3,
      onSome: (n) => write(of2(n))
    }),
    onFailure: fail11,
    onDone: () => unit6
  });
  return new StreamImpl(pipe(toChannel2(self), pipeTo(loop3)));
});
var findEffect = /* @__PURE__ */ dual(2, (self, predicate) => {
  const loop3 = readWith({
    onInput: (input) => pipe(findFirst6(input, predicate), map16(match({
      onNone: () => loop3,
      onSome: (n) => write(of2(n))
    })), unwrap),
    onFailure: fail11,
    onDone: () => unit6
  });
  return new StreamImpl(pipe(toChannel2(self), pipeTo(loop3)));
});
var flatMap14 = /* @__PURE__ */ dual((args) => isStream(args[0]), (self, f, options) => {
  const bufferSize = options?.bufferSize ?? 16;
  if (options?.switch) {
    return matchConcurrency(options?.concurrency, () => flatMapParSwitchBuffer(self, 1, bufferSize, f), (n) => flatMapParSwitchBuffer(self, n, bufferSize, f));
  }
  return matchConcurrency(options?.concurrency, () => new StreamImpl(concatMap(toChannel2(self), (as9) => pipe(as9, map4((a) => toChannel2(f(a))), reduce3(unit6, (left3, right3) => pipe(left3, zipRight6(right3)))))), (_) => new StreamImpl(pipe(toChannel2(self), concatMap(writeChunk), mergeMap((out) => toChannel2(f(out)), options))));
});
var matchConcurrency = (concurrency2, sequential5, bounded6) => {
  switch (concurrency2) {
    case void 0:
      return sequential5();
    case "unbounded":
      return bounded6(Number.MAX_SAFE_INTEGER);
    default:
      return concurrency2 > 1 ? bounded6(concurrency2) : sequential5();
  }
};
var flatMapParSwitchBuffer = /* @__PURE__ */ dual(4, (self, n, bufferSize, f) => new StreamImpl(pipe(toChannel2(self), concatMap(writeChunk), mergeMap((out) => toChannel2(f(out)), {
  concurrency: n,
  mergeStrategy: BufferSliding(),
  bufferSize
}))));
var flatten12 = /* @__PURE__ */ dual((args) => isStream(args[0]), (self, options) => flatMap14(self, identity, options));
var flattenChunks = (self) => {
  const flatten15 = readWithCause({
    onInput: (chunks3) => flatMap12(writeChunk(chunks3), () => flatten15),
    onFailure: failCause9,
    onDone: () => unit6
  });
  return new StreamImpl(pipe(toChannel2(self), pipeTo(flatten15)));
};
var flattenEffect = /* @__PURE__ */ dual((args) => isStream(args[0]), (self, options) => options?.unordered ? flatMap14(self, (a) => fromEffect7(a), {
  concurrency: options.concurrency
}) : matchConcurrency(options?.concurrency, () => mapEffectSequential(self, identity), (n) => new StreamImpl(pipe(toChannel2(self), concatMap(writeChunk), mapOutEffectPar(identity, n), mapOut(of2)))));
var flattenExitOption = (self) => {
  const processChunk = (chunk4, cont) => {
    const [toEmit, rest] = pipe(chunk4, splitWhere2((exit4) => !isSuccess(exit4)));
    const next = pipe(head2(rest), match({
      onNone: () => cont,
      onSome: match5({
        onFailure: (cause4) => match(flipCauseOption2(cause4), {
          onNone: () => unit6,
          onSome: failCause9
        }),
        onSuccess: () => unit6
      })
    }));
    return pipe(write(pipe(toEmit, filterMap4((exit4) => isSuccess(exit4) ? some2(exit4.value) : none2()))), flatMap12(() => next));
  };
  const process2 = readWithCause({
    onInput: (chunk4) => processChunk(chunk4, process2),
    onFailure: (cause4) => failCause9(cause4),
    onDone: () => unit6
  });
  return new StreamImpl(pipe(toChannel2(self), pipeTo(process2)));
};
var flattenIterables = (self) => pipe(self, map21(fromIterable3), flattenChunks);
var flattenTake = (self) => flattenChunks(flattenExitOption(pipe(self, map21((take8) => take8.exit))));
var forever5 = (self) => new StreamImpl(repeated(toChannel2(self)));
var fromAsyncIterable = (iterable, onError5) => pipe(acquireRelease2(sync4(() => iterable[Symbol.asyncIterator]()), (iterator) => iterator.return ? promise2(async () => iterator.return()) : unit5), map16((iterator) => repeatEffectOption(pipe(tryPromise2({
  try: async () => iterator.next(),
  catch: (reason) => some2(onError5(reason))
}), flatMap10((result) => result.done ? fail9(none2()) : succeed8(result.value))))), unwrapScoped5);
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
var fromChunk = (chunk4) => new StreamImpl(isEmpty(chunk4) ? unit6 : write(chunk4));
var fromChunkPubSub = (pubsub, options) => {
  if (options?.scoped) {
    const effect3 = map16(subscribe2(pubsub), fromChunkQueue);
    return options.shutdown ? map16(effect3, ensuring5(shutdown3(pubsub))) : effect3;
  }
  const stream = flatMap14(scoped5(subscribe2(pubsub)), fromChunkQueue);
  return options?.shutdown ? ensuring5(stream, shutdown3(pubsub)) : stream;
};
var fromChunkQueue = (queue, options) => pipe(take4(queue), catchAllCause3((cause4) => pipe(isShutdown3(queue), flatMap10((isShutdown4) => isShutdown4 && isInterrupted2(cause4) ? end5() : failCause11(cause4)))), repeatEffectChunkOption, options?.shutdown ? ensuring5(shutdown4(queue)) : identity);
var fromChunks = (...chunks3) => pipe(fromIterable14(chunks3), flatMap14(fromChunk));
var fromEffect7 = (effect3) => pipe(effect3, mapError3(some2), fromEffectOption);
var fromEffectOption = (effect3) => new StreamImpl(unwrap(match11(effect3, {
  onFailure: match({
    onNone: () => unit6,
    onSome: fail11
  }),
  onSuccess: (a) => write(of2(a))
})));
var fromPubSub = (pubsub, options) => {
  const maxChunkSize = options?.maxChunkSize ?? DefaultChunkSize;
  if (options?.scoped) {
    const effect3 = map16(subscribe2(pubsub), (queue) => fromQueue2(queue, {
      maxChunkSize,
      shutdown: true
    }));
    return options.shutdown ? map16(effect3, ensuring5(shutdown3(pubsub))) : effect3;
  }
  const stream = flatMap14(scoped5(subscribe2(pubsub)), (queue) => fromQueue2(queue, {
    maxChunkSize
  }));
  return options?.shutdown ? ensuring5(stream, shutdown3(pubsub)) : stream;
};
var fromIterable14 = (iterable) => suspend7(() => isChunk(iterable) ? fromChunk(iterable) : fromIteratorSucceed(iterable[Symbol.iterator]()));
var fromIterableEffect = (effect3) => pipe(effect3, map16(fromIterable14), unwrap2);
var fromIteratorSucceed = (iterator, maxChunkSize = DefaultChunkSize) => {
  return pipe(sync4(() => {
    let builder = [];
    const loop3 = (iterator2) => pipe(sync4(() => {
      let next = iterator2.next();
      if (maxChunkSize === 1) {
        if (next.done) {
          return unit6;
        }
        return pipe(write(of2(next.value)), flatMap12(() => loop3(iterator2)));
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
        return pipe(write(unsafeFromArray(builder)), flatMap12(() => loop3(iterator2)));
      }
      return unit6;
    }), unwrap);
    return new StreamImpl(loop3(iterator));
  }), unwrap2);
};
var fromPull2 = (effect3) => pipe(effect3, map16(repeatEffectChunkOption), unwrapScoped5);
var fromQueue2 = (queue, options) => pipe(takeBetween2(queue, 1, options?.maxChunkSize ?? DefaultChunkSize), catchAllCause3((cause4) => pipe(isShutdown3(queue), flatMap10((isShutdown4) => isShutdown4 && isInterrupted2(cause4) ? end5() : failCause11(cause4)))), repeatEffectChunkOption, options?.shutdown ? ensuring5(shutdown4(queue)) : identity);
var fromSchedule = (schedule4) => pipe(driver2(schedule4), map16((driver3) => repeatEffectOption(driver3.next(void 0))), unwrap2);
var fromReadableStream = (evaluate2, onError5) => unwrapScoped5(map16(acquireRelease2(sync4(() => evaluate2().getReader()), (reader) => promise2(() => reader.cancel())), (reader) => repeatEffectOption(flatMap10(tryPromise2({
  try: () => reader.read(),
  catch: (reason) => some2(onError5(reason))
}), ({
  done: done9,
  value: value3
}) => done9 ? fail9(none2()) : succeed8(value3)))));
var fromReadableStreamByob = (evaluate2, onError5, allocSize = 4096) => unwrapScoped5(map16(acquireRelease2(sync4(() => evaluate2().getReader({
  mode: "byob"
})), (reader) => promise2(() => reader.cancel())), (reader) => catchAll6(forever5(readChunkStreamByobReader(reader, onError5, allocSize)), (error2) => isTagged(error2, "EOF") ? empty34 : fail13(error2))));
var readChunkStreamByobReader = (reader, onError5, size16) => {
  const buffer3 = new ArrayBuffer(size16);
  return paginateEffect(0, (offset) => flatMap10(tryPromise2({
    try: () => reader.read(new Uint8Array(buffer3, offset, buffer3.byteLength - offset)),
    catch: (reason) => onError5(reason)
  }), ({
    done: done9,
    value: value3
  }) => {
    if (done9) {
      return fail9({
        _tag: "EOF"
      });
    }
    const newOffset = offset + value3.byteLength;
    return succeed8([value3, newOffset >= buffer3.byteLength ? none2() : some2(newOffset)]);
  }));
};
var groupAdjacentBy = /* @__PURE__ */ dual(2, (self, f) => {
  const groupAdjacentByChunk = (state, chunk4) => {
    if (isEmpty(chunk4)) {
      return [state, empty6()];
    }
    const builder = [];
    let from = 0;
    let until = 0;
    let key = void 0;
    let previousChunk = empty6();
    switch (state._tag) {
      case "Some": {
        const tuple3 = state.value;
        key = tuple3[0];
        let loop3 = true;
        while (loop3 && until < chunk4.length) {
          const input = unsafeGet4(chunk4, until);
          const updatedKey = f(input);
          if (!equals(key, updatedKey)) {
            const previousChunk2 = tuple3[1];
            const additionalChunk = unsafeFromArray(Array.from(chunk4).slice(from, until));
            const group2 = appendAll2(previousChunk2, additionalChunk);
            builder.push([key, group2]);
            key = updatedKey;
            from = until;
            loop3 = false;
          }
          until = until + 1;
        }
        if (loop3) {
          previousChunk = tuple3[1];
        }
        break;
      }
      case "None": {
        key = f(unsafeGet4(chunk4, until));
        until = until + 1;
        break;
      }
    }
    while (until < chunk4.length) {
      const input = unsafeGet4(chunk4, until);
      const updatedKey = f(input);
      if (!equals(key, updatedKey)) {
        builder.push([key, unsafeFromArray(Array.from(chunk4).slice(from, until))]);
        key = updatedKey;
        from = until;
      }
      until = until + 1;
    }
    const nonEmptyChunk = appendAll2(previousChunk, unsafeFromArray(Array.from(chunk4).slice(from, until)));
    const output = unsafeFromArray(builder);
    return [some2([key, nonEmptyChunk]), output];
  };
  const groupAdjacent = (state) => readWithCause({
    onInput: (input) => {
      const [updatedState, output] = groupAdjacentByChunk(state, input);
      return isEmpty(output) ? groupAdjacent(updatedState) : flatMap12(write(output), () => groupAdjacent(updatedState));
    },
    onFailure: (cause4) => match(state, {
      onNone: () => failCause9(cause4),
      onSome: (output) => flatMap12(write(of2(output)), () => failCause9(cause4))
    }),
    onDone: (done9) => match(state, {
      onNone: () => succeedNow(done9),
      onSome: (output) => flatMap12(write(of2(output)), () => succeedNow(done9))
    })
  });
  return new StreamImpl(pipeToOrFail(toChannel2(self), groupAdjacent(none2())));
});
var grouped = /* @__PURE__ */ dual(2, (self, chunkSize) => pipe(self, rechunk(chunkSize), chunks));
var groupedWithin = /* @__PURE__ */ dual(3, (self, chunkSize, duration2) => aggregateWithin(self, collectAllN(chunkSize), spaced2(duration2)));
var haltWhen = /* @__PURE__ */ dual(2, (self, effect3) => {
  const writer = (fiber) => pipe(poll4(fiber), map16(match({
    onNone: () => readWith({
      onInput: (input) => flatMap12(write(input), () => writer(fiber)),
      onFailure: fail11,
      onDone: () => unit6
    }),
    onSome: match5({
      onFailure: failCause9,
      onSuccess: () => unit6
    })
  })), unwrap);
  return new StreamImpl(pipe(forkScoped2(effect3), map16((fiber) => pipe(toChannel2(self), pipeTo(writer(fiber)))), unwrapScoped3));
});
var haltAfter = /* @__PURE__ */ dual(2, (self, duration2) => pipe(self, haltWhen(sleep2(duration2))));
var haltWhenDeferred = /* @__PURE__ */ dual(2, (self, deferred) => {
  const writer = pipe(poll(deferred), map16(match({
    onNone: () => readWith({
      onInput: (input) => pipe(write(input), flatMap12(() => writer)),
      onFailure: fail11,
      onDone: () => unit6
    }),
    onSome: (effect3) => unwrap(match11(effect3, {
      onFailure: fail11,
      onSuccess: () => unit6
    }))
  })), unwrap);
  return new StreamImpl(pipe(toChannel2(self), pipeTo(writer)));
});
var identityStream = () => new StreamImpl(identityChannel());
var interleave = /* @__PURE__ */ dual(2, (self, that) => pipe(self, interleaveWith(that, forever5(make46(true, false)))));
var interleaveWith = /* @__PURE__ */ dual(3, (self, that, decider) => {
  const producer = (handoff) => readWithCause({
    onInput: (value3) => flatMap12(fromEffect4(offer4(handoff, of5(value3))), () => producer(handoff)),
    onFailure: (cause4) => fromEffect4(offer4(handoff, failCause10(cause4))),
    onDone: () => fromEffect4(offer4(handoff, end4))
  });
  return new StreamImpl(unwrapScoped3(pipe(make45(), zip6(make45()), tap4(([left3]) => pipe(toChannel2(self), concatMap(writeChunk), pipeTo(producer(left3)), runScoped, forkScoped2)), tap4(([_, right3]) => pipe(toChannel2(that), concatMap(writeChunk), pipeTo(producer(right3)), runScoped, forkScoped2)), map16(([left3, right3]) => {
    const process2 = (leftDone, rightDone) => readWithCause({
      onInput: (bool) => {
        if (bool && !leftDone) {
          return pipe(fromEffect4(take5(left3)), flatMap12(match16({
            onEnd: () => rightDone ? unit6 : process2(true, rightDone),
            onFailure: failCause9,
            onSuccess: (chunk4) => pipe(write(chunk4), flatMap12(() => process2(leftDone, rightDone)))
          })));
        }
        if (!bool && !rightDone) {
          return pipe(fromEffect4(take5(right3)), flatMap12(match16({
            onEnd: () => leftDone ? unit6 : process2(leftDone, true),
            onFailure: failCause9,
            onSuccess: (chunk4) => pipe(write(chunk4), flatMap12(() => process2(leftDone, rightDone)))
          })));
        }
        return process2(leftDone, rightDone);
      },
      onFailure: failCause9,
      onDone: () => unit6
    });
    return pipe(toChannel2(decider), concatMap(writeChunk), pipeTo(process2(false, false)));
  }))));
});
var intersperse2 = /* @__PURE__ */ dual(2, (self, element) => new StreamImpl(pipe(toChannel2(self), pipeToOrFail(suspend5(() => {
  const writer = (isFirst) => readWithCause({
    onInput: (chunk4) => {
      const builder = [];
      let flagResult = isFirst;
      for (const output of chunk4) {
        if (flagResult) {
          flagResult = false;
          builder.push(output);
        } else {
          builder.push(element);
          builder.push(output);
        }
      }
      return pipe(write(unsafeFromArray(builder)), flatMap12(() => writer(flagResult)));
    },
    onFailure: failCause9,
    onDone: () => unit6
  });
  return writer(true);
})))));
var intersperseAffixes = /* @__PURE__ */ dual(2, (self, {
  end: end6,
  middle,
  start: start3
}) => pipe(make46(start3), concat2(pipe(self, intersperse2(middle))), concat2(make46(end6))));
var interruptAfter = /* @__PURE__ */ dual(2, (self, duration2) => pipe(self, interruptWhen2(sleep2(duration2))));
var interruptWhen2 = /* @__PURE__ */ dual(2, (self, effect3) => new StreamImpl(pipe(toChannel2(self), interruptWhen(effect3))));
var interruptWhenDeferred2 = /* @__PURE__ */ dual(2, (self, deferred) => new StreamImpl(pipe(toChannel2(self), interruptWhenDeferred(deferred))));
var iterate3 = (value3, next) => unfold3(value3, (a) => some2([a, next(a)]));
var make46 = (...as9) => fromIterable14(as9);
var map21 = /* @__PURE__ */ dual(2, (self, f) => new StreamImpl(pipe(toChannel2(self), mapOut(map4(f)))));
var mapAccum5 = /* @__PURE__ */ dual(3, (self, s, f) => {
  const accumulator = (s2) => readWith({
    onInput: (input) => {
      const [nextS, chunk4] = mapAccum2(input, s2, f);
      return flatMap12(write(chunk4), () => accumulator(nextS));
    },
    onFailure: fail11,
    onDone: () => unit6
  });
  return new StreamImpl(pipe(toChannel2(self), pipeTo(accumulator(s))));
});
var mapAccumEffect = /* @__PURE__ */ dual(3, (self, s, f) => suspend7(() => {
  const accumulator = (s2) => readWith({
    onInput: (input) => pipe(suspend3(() => {
      const outputs = [];
      const emit2 = (output) => sync4(() => {
        outputs.push(output);
      });
      return pipe(input, reduce12(s2, (s3, a) => pipe(f(s3, a), flatMap10(([s4, a2]) => pipe(emit2(a2), as4(s4))))), match11({
        onFailure: (error2) => {
          if (outputs.length !== 0) {
            return zipRight6(write(unsafeFromArray(outputs)), fail11(error2));
          }
          return fail11(error2);
        },
        onSuccess: (s3) => flatMap12(write(unsafeFromArray(outputs)), () => accumulator(s3))
      }));
    }), unwrap),
    onFailure: fail11,
    onDone: () => unit6
  });
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(accumulator(s))));
}));
var mapBoth5 = /* @__PURE__ */ dual(2, (self, options) => pipe(self, mapError6(options.onFailure), map21(options.onSuccess)));
var mapChunks = /* @__PURE__ */ dual(2, (self, f) => new StreamImpl(pipe(toChannel2(self), mapOut(f))));
var mapChunksEffect = /* @__PURE__ */ dual(2, (self, f) => new StreamImpl(pipe(toChannel2(self), mapOutEffect(f))));
var mapConcat = /* @__PURE__ */ dual(2, (self, f) => pipe(self, mapConcatChunk((a) => fromIterable3(f(a)))));
var mapConcatChunk = /* @__PURE__ */ dual(2, (self, f) => pipe(self, mapChunks(flatMap3(f))));
var mapConcatChunkEffect = /* @__PURE__ */ dual(2, (self, f) => pipe(self, mapEffectSequential(f), mapConcatChunk(identity)));
var mapConcatEffect = /* @__PURE__ */ dual(2, (self, f) => pipe(self, mapEffectSequential((a) => pipe(f(a), map16(fromIterable3))), mapConcatChunk(identity)));
var mapEffectSequential = /* @__PURE__ */ dual(2, (self, f) => {
  const loop3 = (iterator) => {
    const next = iterator.next();
    if (next.done) {
      return readWithCause({
        onInput: (elem) => loop3(elem[Symbol.iterator]()),
        onFailure: failCause9,
        onDone: succeed10
      });
    } else {
      const value3 = next.value;
      return unwrap(map16(f(value3), (a2) => flatMap12(write(of2(a2)), () => loop3(iterator))));
    }
  };
  return new StreamImpl(pipe(toChannel2(self), pipeTo(suspend5(() => loop3(empty6()[Symbol.iterator]())))));
});
var mapEffectPar = /* @__PURE__ */ dual(3, (self, n, f) => new StreamImpl(pipe(toChannel2(self), concatMap(writeChunk), mapOutEffectPar(f, n), mapOut(of2))));
var mapError6 = /* @__PURE__ */ dual(2, (self, f) => new StreamImpl(pipe(toChannel2(self), mapError5(f))));
var mapErrorCause4 = /* @__PURE__ */ dual(2, (self, f) => new StreamImpl(pipe(toChannel2(self), mapErrorCause3(f))));
var merge9 = /* @__PURE__ */ dual((args) => isStream(args[1]), (self, that, options) => mergeWith2(self, that, {
  onSelf: identity,
  onOther: identity,
  haltStrategy: options?.haltStrategy
}));
var mergeAll6 = /* @__PURE__ */ dual((args) => Symbol.iterator in args[0], (streams, options) => flatten12(fromIterable14(streams), options));
var mergeEither = /* @__PURE__ */ dual(2, (self, that) => mergeWith2(self, that, {
  onSelf: left2,
  onOther: right2
}));
var mergeLeft = /* @__PURE__ */ dual(2, (self, that) => pipe(self, merge9(drain3(that))));
var mergeRight = /* @__PURE__ */ dual(2, (self, that) => pipe(drain3(self), merge9(that)));
var mergeWith2 = /* @__PURE__ */ dual(3, (self, other, options) => {
  const strategy = options.haltStrategy ? fromInput2(options.haltStrategy) : Both2;
  const handler = (terminate) => (exit4) => terminate || !isSuccess(exit4) ? (
    // TODO: remove
    Done4(suspend3(() => exit4))
  ) : Await2((exit5) => suspend3(() => exit5));
  return new StreamImpl(mergeWith(toChannel2(map21(self, options.onSelf)), {
    other: toChannel2(map21(other, options.onOther)),
    onSelfDone: handler(strategy._tag === "Either" || strategy._tag === "Left"),
    onOtherDone: handler(strategy._tag === "Either" || strategy._tag === "Right")
  }));
});
var mkString2 = (self) => run3(self, mkString);
var never4 = /* @__PURE__ */ fromEffect7(never3);
var onError3 = /* @__PURE__ */ dual(2, (self, cleanup) => pipe(self, catchAllCause6((cause4) => fromEffect7(pipe(cleanup(cause4), zipRight5(failCause7(cause4)))))));
var onDone = /* @__PURE__ */ dual(2, (self, cleanup) => new StreamImpl(pipe(toChannel2(self), ensuringWith((exit4) => isSuccess(exit4) ? cleanup() : unit5))));
var orDie5 = (self) => pipe(self, orDieWith4(identity));
var orDieWith4 = /* @__PURE__ */ dual(2, (self, f) => new StreamImpl(pipe(toChannel2(self), orDieWith3(f))));
var orElse8 = /* @__PURE__ */ dual(2, (self, that) => new StreamImpl(pipe(toChannel2(self), orElse7(() => toChannel2(that())))));
var orElseEither4 = /* @__PURE__ */ dual(2, (self, that) => pipe(self, map21(left2), orElse8(() => pipe(that(), map21(right2)))));
var orElseFail3 = /* @__PURE__ */ dual(2, (self, error2) => pipe(self, orElse8(() => failSync6(error2))));
var orElseIfEmpty = /* @__PURE__ */ dual(2, (self, element) => pipe(self, orElseIfEmptyChunk(() => of2(element()))));
var orElseIfEmptyChunk = /* @__PURE__ */ dual(2, (self, chunk4) => pipe(self, orElseIfEmptyStream(() => new StreamImpl(write(chunk4())))));
var orElseIfEmptyStream = /* @__PURE__ */ dual(2, (self, stream) => {
  const writer = readWith({
    onInput: (input) => {
      if (isEmpty(input)) {
        return suspend5(() => writer);
      }
      return pipe(write(input), zipRight6(identityChannel()));
    },
    onFailure: fail11,
    onDone: () => suspend5(() => toChannel2(stream()))
  });
  return new StreamImpl(pipe(toChannel2(self), pipeTo(writer)));
});
var orElseSucceed3 = /* @__PURE__ */ dual(2, (self, value3) => pipe(self, orElse8(() => sync8(value3))));
var paginate = (s, f) => paginateChunk(s, (s2) => {
  const page = f(s2);
  return [of2(page[0]), page[1]];
});
var paginateChunk = (s, f) => {
  const loop3 = (s2) => {
    const page = f(s2);
    return match(page[1], {
      onNone: () => zipRight6(write(page[0]), unit6),
      onSome: (s3) => flatMap12(write(page[0]), () => loop3(s3))
    });
  };
  return new StreamImpl(suspend5(() => loop3(s)));
};
var paginateChunkEffect = (s, f) => {
  const loop3 = (s2) => unwrap(map16(f(s2), ([chunk4, option4]) => match(option4, {
    onNone: () => zipRight6(write(chunk4), unit6),
    onSome: (s3) => flatMap12(write(chunk4), () => loop3(s3))
  })));
  return new StreamImpl(suspend5(() => loop3(s)));
};
var paginateEffect = (s, f) => paginateChunkEffect(s, (s2) => pipe(f(s2), map16(([a, s3]) => [of2(a), s3])));
var peel = /* @__PURE__ */ dual(2, (self, sink) => {
  const OP_EMIT5 = "Emit";
  const OP_HALT2 = "Halt";
  const OP_END2 = "End";
  return pipe(make20(), flatMap10((deferred) => pipe(make45(), map16((handoff) => {
    const consumer = foldSink(collectLeftover(sink), {
      onFailure: (error2) => zipRight7(fromEffect6(fail3(deferred, error2)), fail12(error2)),
      onSuccess: ([z, leftovers]) => {
        const loop3 = readWithCause({
          onInput: (elements) => flatMap12(fromEffect4(offer4(handoff, {
            _tag: OP_EMIT5,
            elements
          })), () => loop3),
          onFailure: (cause4) => zipRight6(fromEffect4(offer4(handoff, {
            _tag: OP_HALT2,
            cause: cause4
          })), failCause9(cause4)),
          onDone: (_) => zipRight6(fromEffect4(offer4(handoff, {
            _tag: OP_END2
          })), unit6)
        });
        return fromChannel(pipe(fromEffect4(succeed2(deferred, z)), zipRight6(fromEffect4(pipe(handoff, offer4({
          _tag: OP_EMIT5,
          elements: leftovers
        })))), zipRight6(loop3)));
      }
    });
    const producer = pipe(take5(handoff), map16((signal) => {
      switch (signal._tag) {
        case OP_EMIT5: {
          return pipe(write(signal.elements), flatMap12(() => producer));
        }
        case OP_HALT2: {
          return failCause9(signal.cause);
        }
        case OP_END2: {
          return unit6;
        }
      }
    }), unwrap);
    return pipe(self, tapErrorCause5((cause4) => failCause2(deferred, cause4)), run3(consumer), forkScoped2, zipRight5(_await(deferred)), map16((z) => [z, new StreamImpl(producer)]));
  }))), flatten9);
});
var partition6 = /* @__PURE__ */ dual((args) => typeof args[1] === "function", (self, predicate, options) => partitionEither(self, (a) => succeed8(predicate(a) ? left2(a) : right2(a)), options));
var partitionEither = /* @__PURE__ */ dual((args) => typeof args[1] === "function", (self, predicate, options) => pipe(mapEffectSequential(self, predicate), distributedWith({
  size: 2,
  maximumLag: options?.bufferSize ?? 16,
  decide: match2({
    onLeft: () => succeed8((n) => n === 0),
    onRight: () => succeed8((n) => n === 1)
  })
}), flatMap10(([queue1, queue2]) => succeed8([filterMap6(flattenExitOption(fromQueue2(queue1, {
  shutdown: true
})), (_) => match2(_, {
  onLeft: some2,
  onRight: none2
})), filterMap6(flattenExitOption(fromQueue2(queue2, {
  shutdown: true
})), (_) => match2(_, {
  onLeft: none2,
  onRight: some2
}))]))));
var pipeThrough = /* @__PURE__ */ dual(2, (self, sink) => new StreamImpl(pipe(toChannel2(self), pipeToOrFail(toChannel(sink)))));
var pipeThroughChannel = /* @__PURE__ */ dual(2, (self, channel) => new StreamImpl(pipeTo(toChannel2(self), channel)));
var pipeThroughChannelOrFail = /* @__PURE__ */ dual(2, (self, chan) => new StreamImpl(pipe(toChannel2(self), pipeToOrFail(chan))));
var prepend4 = /* @__PURE__ */ dual(2, (self, values5) => new StreamImpl(zipRight6(write(values5), toChannel2(self))));
var provideContext4 = /* @__PURE__ */ dual(2, (self, context7) => new StreamImpl(pipe(toChannel2(self), provideContext2(context7))));
var provideLayer = /* @__PURE__ */ dual(2, (self, layer3) => new StreamImpl(unwrapScoped3(pipe(build2(layer3), map16((env) => pipe(toChannel2(self), provideContext2(env)))))));
var provideService5 = /* @__PURE__ */ dual(3, (self, tag2, resource) => provideServiceEffect3(self, tag2, succeed8(resource)));
var provideServiceEffect3 = /* @__PURE__ */ dual(3, (self, tag2, effect3) => provideServiceStream(self, tag2, fromEffect7(effect3)));
var provideServiceStream = /* @__PURE__ */ dual(3, (self, tag2, stream) => contextWithStream((env) => flatMap14(stream, (service3) => pipe(self, provideContext4(add2(env, tag2, service3))))));
var mapInputContext4 = /* @__PURE__ */ dual(2, (self, f) => contextWithStream((env) => pipe(self, provideContext4(f(env)))));
var provideSomeLayer2 = /* @__PURE__ */ dual(2, (self, layer3) => (
  // @ts-expect-error
  pipe(self, provideLayer(pipe(context4(), merge8(layer3))))
));
var range3 = (min4, max6, chunkSize = DefaultChunkSize) => suspend7(() => {
  if (min4 > max6) {
    return empty34;
  }
  const go5 = (min5, max7, chunkSize2) => {
    const remaining = max7 - min5 + 1;
    if (remaining > chunkSize2) {
      return pipe(write(range2(min5, min5 + chunkSize2 - 1)), flatMap12(() => go5(min5 + chunkSize2, max7, chunkSize2)));
    }
    return write(range2(min5, min5 + remaining - 1));
  };
  return new StreamImpl(go5(min4, max6, chunkSize));
});
var rechunk = /* @__PURE__ */ dual(2, (self, n) => suspend7(() => {
  const target = Math.max(n, 1);
  const process2 = rechunkProcess(new StreamRechunker(target), target);
  return new StreamImpl(pipe(toChannel2(self), pipeTo(process2)));
}));
var rechunkProcess = (rechunker, target) => readWithCause({
  onInput: (chunk4) => {
    if (chunk4.length === target && rechunker.isEmpty()) {
      return flatMap12(write(chunk4), () => rechunkProcess(rechunker, target));
    }
    if (chunk4.length > 0) {
      const chunks3 = [];
      let result = void 0;
      let index = 0;
      while (index < chunk4.length) {
        while (index < chunk4.length && result === void 0) {
          result = rechunker.write(pipe(chunk4, unsafeGet4(index)));
          index = index + 1;
        }
        if (result !== void 0) {
          chunks3.push(result);
          result = void 0;
        }
      }
      return flatMap12(writeAll(...chunks3), () => rechunkProcess(rechunker, target));
    }
    return suspend5(() => rechunkProcess(rechunker, target));
  },
  onFailure: (cause4) => zipRight6(rechunker.emitIfNotEmpty(), failCause9(cause4)),
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
    return unit6;
  }
};
var refineOrDie = /* @__PURE__ */ dual(2, (self, pf) => pipe(self, refineOrDieWith(pf, identity)));
var refineOrDieWith = /* @__PURE__ */ dual(3, (self, pf, f) => new StreamImpl(catchAll5(toChannel2(self), (error2) => match(pf(error2), {
  onNone: () => failCause9(die4(f(error2))),
  onSome: fail11
}))));
var repeat2 = /* @__PURE__ */ dual(2, (self, schedule4) => filterMap6(repeatEither(self, schedule4), (_) => match2(_, {
  onLeft: none2,
  onRight: some2
})));
var repeatEffect = (effect3) => repeatEffectOption(pipe(effect3, mapError3(some2)));
var repeatEffectChunk = (effect3) => repeatEffectChunkOption(pipe(effect3, mapError3(some2)));
var repeatEffectChunkOption = (effect3) => unfoldChunkEffect(effect3, (effect4) => pipe(map16(effect4, (chunk4) => some2([chunk4, effect4])), catchAll3(match({
  onNone: () => succeed8(none2()),
  onSome: fail9
}))));
var repeatEffectOption = (effect3) => repeatEffectChunkOption(pipe(effect3, map16(of2)));
var repeatEither = /* @__PURE__ */ dual(2, (self, schedule4) => repeatWith(self, schedule4, {
  onElement: (a) => right2(a),
  onSchedule: left2
}));
var repeatElements = /* @__PURE__ */ dual(2, (self, schedule4) => filterMap6(repeatElementsWith(self, schedule4, {
  onElement: (a) => some2(a),
  onSchedule: none2
}), identity));
var repeatElementsWith = /* @__PURE__ */ dual(3, (self, schedule4, options) => {
  const driver3 = pipe(driver2(schedule4), map16((driver4) => {
    const feed = (input) => match(head2(input), {
      onNone: () => loop3,
      onSome: (a) => zipRight6(write(of2(options.onElement(a))), step4(pipe(input, drop2(1)), a))
    });
    const step4 = (input, a) => {
      const advance = pipe(driver4.next(a), as4(pipe(write(of2(options.onElement(a))), flatMap12(() => step4(input, a)))));
      const reset = pipe(driver4.last, orDie3, flatMap10((b) => pipe(driver4.reset, map16(() => pipe(write(of2(options.onSchedule(b))), zipRight6(feed(input)))))));
      return pipe(advance, orElse5(() => reset), unwrap);
    };
    const loop3 = readWith({
      onInput: feed,
      onFailure: fail11,
      onDone: () => unit6
    });
    return loop3;
  }), unwrap);
  return new StreamImpl(pipe(toChannel2(self), pipeTo(driver3)));
});
var repeatValue = (value3) => new StreamImpl(repeated(write(of2(value3))));
var repeatWith = /* @__PURE__ */ dual(3, (self, schedule4, options) => {
  return pipe(driver2(schedule4), map16((driver3) => {
    const scheduleOutput = pipe(driver3.last, orDie3, map16(options.onSchedule));
    const process2 = pipe(self, map21(options.onElement), toChannel2);
    const loop3 = unwrap(match11(driver3.next(void 0), {
      onFailure: () => unit6,
      onSuccess: () => pipe(process2, zipRight6(pipe(scheduleOutput, map16((c) => pipe(write(of2(c)), flatMap12(() => loop3))), unwrap)))
    }));
    return new StreamImpl(pipe(process2, zipRight6(loop3)));
  }), unwrap2);
});
var repeatWithSchedule = (value3, schedule4) => repeatEffectWithSchedule(succeed8(value3), schedule4);
var repeatEffectWithSchedule = (effect3, schedule4) => flatMap14(fromEffect7(zip6(effect3, driver2(schedule4))), ([a, driver3]) => concat2(succeed12(a), unfoldEffect(a, (s) => matchEffect2(driver3.next(s), {
  onFailure: succeed8,
  onSuccess: () => map16(effect3, (nextA) => some2([nextA, nextA]))
}))));
var retry4 = /* @__PURE__ */ dual(2, (self, schedule4) => unwrap2(map16(driver2(schedule4), (driver3) => {
  const loop3 = catchAll6(self, (error2) => unwrap2(matchEffect2(driver3.next(error2), {
    onFailure: () => fail9(error2),
    onSuccess: () => succeed8(pipe(loop3, tap6(() => driver3.reset)))
  })));
  return loop3;
})));
var run3 = /* @__PURE__ */ dual(2, (self, sink) => pipe(toChannel2(self), pipeToOrFail(toChannel(sink)), runDrain));
var runCollect = (self) => pipe(self, run3(collectAll()));
var runCount = (self) => pipe(self, run3(count));
var runDrain2 = (self) => pipe(self, run3(drain2));
var runFold = /* @__PURE__ */ dual(3, (self, s, f) => pipe(self, runFoldWhileScoped(s, constTrue, f), scoped2));
var runFoldEffect = /* @__PURE__ */ dual(3, (self, s, f) => pipe(self, runFoldWhileScopedEffect(s, constTrue, f), scoped2));
var runFoldScoped = /* @__PURE__ */ dual(3, (self, s, f) => pipe(self, runFoldWhileScoped(s, constTrue, f)));
var runFoldScopedEffect = /* @__PURE__ */ dual(3, (self, s, f) => pipe(self, runFoldWhileScopedEffect(s, constTrue, f)));
var runFoldWhile = /* @__PURE__ */ dual(4, (self, s, cont, f) => pipe(self, runFoldWhileScoped(s, cont, f), scoped2));
var runFoldWhileEffect = /* @__PURE__ */ dual(4, (self, s, cont, f) => pipe(self, runFoldWhileScopedEffect(s, cont, f), scoped2));
var runFoldWhileScoped = /* @__PURE__ */ dual(4, (self, s, cont, f) => pipe(self, runScoped2(fold(s, cont, f))));
var runFoldWhileScopedEffect = /* @__PURE__ */ dual(4, (self, s, cont, f) => pipe(self, runScoped2(foldEffect(s, cont, f))));
var runForEach = /* @__PURE__ */ dual(2, (self, f) => pipe(self, run3(forEach9(f))));
var runForEachChunk = /* @__PURE__ */ dual(2, (self, f) => pipe(self, run3(forEachChunk(f))));
var runForEachChunkScoped = /* @__PURE__ */ dual(2, (self, f) => pipe(self, runScoped2(forEachChunk(f))));
var runForEachScoped = /* @__PURE__ */ dual(2, (self, f) => pipe(self, runScoped2(forEach9(f))));
var runForEachWhile = /* @__PURE__ */ dual(2, (self, f) => pipe(self, run3(forEachWhile(f))));
var runForEachWhileScoped = /* @__PURE__ */ dual(2, (self, f) => pipe(self, runScoped2(forEachWhile(f))));
var runHead = (self) => pipe(self, run3(head5()));
var runIntoPubSub = /* @__PURE__ */ dual(2, (self, pubsub) => pipe(self, runIntoQueue(pubsub)));
var runIntoPubSubScoped = /* @__PURE__ */ dual(2, (self, pubsub) => pipe(self, runIntoQueueScoped(pubsub)));
var runIntoQueue = /* @__PURE__ */ dual(2, (self, queue) => pipe(self, runIntoQueueScoped(queue), scoped2));
var runIntoQueueElementsScoped = /* @__PURE__ */ dual(2, (self, queue) => {
  const writer = readWithCause({
    onInput: (input) => flatMap12(fromEffect4(offerAll3(queue, map4(input, succeed3))), () => writer),
    onFailure: (cause4) => fromEffect4(offer3(queue, failCause3(map13(cause4, some2)))),
    onDone: () => fromEffect4(offer3(queue, fail4(none2())))
  });
  return pipe(pipeTo(toChannel2(self), writer), drain, runScoped, asUnit3);
});
var runIntoQueueScoped = /* @__PURE__ */ dual(2, (self, queue) => {
  const writer = readWithCause({
    onInput: (input) => flatMap12(write(chunk2(input)), () => writer),
    onFailure: (cause4) => write(failCause10(cause4)),
    onDone: () => write(end4)
  });
  return pipe(pipeTo(toChannel2(self), writer), mapOutEffect((take8) => offer3(queue, take8)), drain, runScoped, asUnit3);
});
var runLast = (self) => pipe(self, run3(last4()));
var runScoped2 = /* @__PURE__ */ dual(2, (self, sink) => pipe(toChannel2(self), pipeToOrFail(toChannel(sink)), drain, runScoped));
var runSum = (self) => pipe(self, run3(sum2));
var scan2 = /* @__PURE__ */ dual(3, (self, s, f) => pipe(self, scanEffect(s, (s2, a) => succeed8(f(s2, a)))));
var scanReduce = /* @__PURE__ */ dual(2, (self, f) => pipe(self, scanReduceEffect((a2, a) => succeed8(f(a2, a)))));
var scanReduceEffect = /* @__PURE__ */ dual(2, (self, f) => pipe(self, mapAccumEffect(none2(), (option4, a) => {
  switch (option4._tag) {
    case "None": {
      return succeed8([some2(a), a]);
    }
    case "Some": {
      return pipe(f(option4.value, a), map16((b) => [some2(b), b]));
    }
  }
})));
var schedule2 = /* @__PURE__ */ dual(2, (self, schedule4) => filterMap6(scheduleWith(self, schedule4, {
  onElement: some2,
  onSchedule: none2
}), identity));
var scheduleWith = /* @__PURE__ */ dual(3, (self, schedule4, options) => {
  const loop3 = (driver3, iterator) => {
    const next = iterator.next();
    if (next.done) {
      return readWithCause({
        onInput: (chunk4) => loop3(driver3, chunk4[Symbol.iterator]()),
        onFailure: failCause9,
        onDone: succeedNow
      });
    }
    return unwrap(matchEffect2(driver3.next(next.value), {
      onFailure: () => pipe(driver3.last, orDie3, map16((b) => pipe(write(make8(options.onElement(next.value), options.onSchedule(b))), flatMap12(() => loop3(driver3, iterator)))), zipLeft4(driver3.reset)),
      onSuccess: () => succeed8(pipe(write(of2(options.onElement(next.value))), flatMap12(() => loop3(driver3, iterator))))
    }));
  };
  return new StreamImpl(pipe(fromEffect4(driver2(schedule4)), flatMap12((driver3) => pipe(toChannel2(self), pipeTo(loop3(driver3, empty6()[Symbol.iterator]()))))));
});
var scanEffect = /* @__PURE__ */ dual(3, (self, s, f) => new StreamImpl(pipe(write(of2(s)), flatMap12(() => toChannel2(pipe(self, mapAccumEffect(s, (s2, a) => pipe(f(s2, a), map16((s3) => [s3, s3])))))))));
var scoped5 = (effect3) => new StreamImpl(ensuring3(scoped4(pipe(effect3, map16(of2))), unit5));
var some6 = (self) => pipe(self, mapError6(some2), someOrFail(() => none2()));
var someOrElse = /* @__PURE__ */ dual(2, (self, fallback) => pipe(self, map21(getOrElse(fallback))));
var someOrFail = /* @__PURE__ */ dual(2, (self, error2) => mapEffectSequential(self, match({
  onNone: () => failSync3(error2),
  onSome: succeed8
})));
var sliding4 = /* @__PURE__ */ dual(2, (self, chunkSize) => slidingSize(self, chunkSize, 1));
var slidingSize = /* @__PURE__ */ dual(3, (self, chunkSize, stepSize) => {
  if (chunkSize <= 0 || stepSize <= 0) {
    return die8(new IllegalArgumentException2("Invalid bounds - `chunkSize` and `stepSize` must be greater than zero"));
  }
  return new StreamImpl(suspend5(() => {
    const queue = new RingBuffer(chunkSize);
    const emitOnStreamEnd = (queueSize, channelEnd) => {
      if (queueSize < chunkSize) {
        const items = queue.toChunk();
        const result2 = isEmpty(items) ? empty6() : of2(items);
        return pipe(write(result2), flatMap12(() => channelEnd));
      }
      const lastEmitIndex = queueSize - (queueSize - chunkSize) % stepSize;
      if (lastEmitIndex === queueSize) {
        return channelEnd;
      }
      const leftovers = queueSize - (lastEmitIndex - chunkSize + stepSize);
      const lastItems = pipe(queue.toChunk(), takeRight2(leftovers));
      const result = isEmpty(lastItems) ? empty6() : of2(lastItems);
      return pipe(write(result), flatMap12(() => channelEnd));
    };
    const reader = (queueSize) => readWithCause({
      onInput: (input) => flatMap12(write(filterMap4(input, (element, index) => {
        queue.put(element);
        const currentIndex = queueSize + index + 1;
        if (currentIndex < chunkSize || (currentIndex - chunkSize) % stepSize > 0) {
          return none2();
        }
        return some2(queue.toChunk());
      })), () => reader(queueSize + input.length)),
      onFailure: (cause4) => emitOnStreamEnd(queueSize, failCause9(cause4)),
      onDone: () => emitOnStreamEnd(queueSize, unit6)
    });
    return pipe(toChannel2(self), pipeTo(reader(0)));
  }));
});
var split3 = /* @__PURE__ */ dual(2, (self, predicate) => {
  const split6 = (leftovers, input) => {
    const [chunk4, remaining] = pipe(leftovers, appendAll2(input), splitWhere2(predicate));
    if (isEmpty(chunk4) || isEmpty(remaining)) {
      return loop3(pipe(chunk4, appendAll2(pipe(remaining, drop2(1)))));
    }
    return pipe(write(of2(chunk4)), flatMap12(() => split6(empty6(), pipe(remaining, drop2(1)))));
  };
  const loop3 = (leftovers) => readWith({
    onInput: (input) => split6(leftovers, input),
    onFailure: fail11,
    onDone: () => {
      if (isEmpty(leftovers)) {
        return unit6;
      }
      if (isNone2(pipe(leftovers, findFirst2(predicate)))) {
        return zipRight6(write(of2(leftovers)), unit6);
      }
      return zipRight6(split6(empty6(), leftovers), unit6);
    }
  });
  return new StreamImpl(pipe(toChannel2(self), pipeTo(loop3(empty6()))));
});
var splitOnChunk = /* @__PURE__ */ dual(2, (self, delimiter) => {
  const next = (leftover, delimiterIndex) => readWithCause({
    onInput: (inputChunk) => {
      let buffer3;
      const [carry, delimiterCursor] = pipe(inputChunk, reduce3([pipe(leftover, getOrElse(() => empty6())), delimiterIndex], ([carry2, delimiterCursor2], a) => {
        const concatenated = pipe(carry2, append2(a));
        if (delimiterCursor2 < delimiter.length && equals(a, pipe(delimiter, unsafeGet4(delimiterCursor2)))) {
          if (delimiterCursor2 + 1 === delimiter.length) {
            if (buffer3 === void 0) {
              buffer3 = [];
            }
            buffer3.push(pipe(concatenated, take2(concatenated.length - delimiter.length)));
            return [empty6(), 0];
          }
          return [concatenated, delimiterCursor2 + 1];
        }
        return [concatenated, equals(a, pipe(delimiter, unsafeGet4(0))) ? 1 : 0];
      }));
      const output = buffer3 === void 0 ? empty6() : unsafeFromArray(buffer3);
      return flatMap12(write(output), () => next(isNonEmpty(carry) ? some2(carry) : none2(), delimiterCursor));
    },
    onFailure: (cause4) => match(leftover, {
      onNone: () => failCause9(cause4),
      onSome: (chunk4) => zipRight6(write(of2(chunk4)), failCause9(cause4))
    }),
    onDone: (done9) => match(leftover, {
      onNone: () => succeed10(done9),
      onSome: (chunk4) => zipRight6(write(of2(chunk4)), succeed10(done9))
    })
  });
  return new StreamImpl(pipe(toChannel2(self), pipeTo(next(none2(), 0))));
});
var splitLines2 = (self) => pipeThroughChannel(self, splitLines());
var succeed12 = (value3) => fromChunk(of2(value3));
var sync8 = (evaluate2) => suspend7(() => fromChunk(of2(evaluate2())));
var suspend7 = (stream) => new StreamImpl(suspend5(() => toChannel2(stream())));
var take6 = /* @__PURE__ */ dual(2, (self, n) => {
  if (!Number.isInteger(n)) {
    return die8(new IllegalArgumentException2(`${n} must be an integer`));
  }
  const loop3 = (n2) => readWith({
    onInput: (input) => {
      const taken = pipe(input, take2(Math.min(n2, Number.POSITIVE_INFINITY)));
      const leftover = Math.max(0, n2 - taken.length);
      const more = leftover > 0;
      if (more) {
        return pipe(write(taken), flatMap12(() => loop3(leftover)));
      }
      return write(taken);
    },
    onFailure: fail11,
    onDone: succeed10
  });
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(0 < n ? loop3(n) : unit6)));
});
var takeRight3 = /* @__PURE__ */ dual(2, (self, n) => {
  if (n <= 0) {
    return empty34;
  }
  return new StreamImpl(pipe(succeed8(new RingBuffer(n)), map16((queue) => {
    const reader = readWith({
      onInput: (input) => {
        for (const element of input) {
          queue.put(element);
        }
        return reader;
      },
      onFailure: fail11,
      onDone: () => pipe(write(queue.toChunk()), zipRight6(unit6))
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
        return pipe(write(taken), flatMap12(() => loop3));
      }
      return write(pipe(taken, appendAll2(last5)));
    },
    onFailure: fail11,
    onDone: succeed10
  });
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(loop3)));
});
var takeUntilEffect = /* @__PURE__ */ dual(2, (self, predicate) => {
  const loop3 = (iterator) => {
    const next = iterator.next();
    if (next.done) {
      return readWithCause({
        onInput: (elem) => loop3(elem[Symbol.iterator]()),
        onFailure: failCause9,
        onDone: succeed10
      });
    }
    return pipe(predicate(next.value), map16((bool) => bool ? write(of2(next.value)) : pipe(write(of2(next.value)), flatMap12(() => loop3(iterator)))), unwrap);
  };
  return new StreamImpl(pipe(toChannel2(self), pipeTo(loop3(empty6()[Symbol.iterator]()))));
});
var takeWhile5 = /* @__PURE__ */ dual(2, (self, predicate) => {
  const loop3 = readWith({
    onInput: (input) => {
      const taken = pipe(input, takeWhile2(predicate));
      const more = taken.length === input.length;
      if (more) {
        return pipe(write(taken), flatMap12(() => loop3));
      }
      return write(taken);
    },
    onFailure: fail11,
    onDone: succeed10
  });
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(loop3)));
});
var tap6 = /* @__PURE__ */ dual(2, (self, f) => mapEffectSequential(self, (a) => as4(f(a), a)));
var tapBoth3 = /* @__PURE__ */ dual(2, (self, options) => pipe(self, tapError5(options.onFailure), tap6(options.onSuccess)));
var tapError5 = /* @__PURE__ */ dual(2, (self, f) => catchAll6(self, (error2) => fromEffect7(zipRight5(f(error2), fail9(error2)))));
var tapErrorCause5 = /* @__PURE__ */ dual(2, (self, f) => {
  const loop3 = readWithCause({
    onInput: (chunk4) => flatMap12(write(chunk4), () => loop3),
    onFailure: (cause4) => fromEffect4(zipRight5(f(cause4), failCause7(cause4))),
    onDone: succeedNow
  });
  return new StreamImpl(pipe(toChannel2(self), pipeTo(loop3)));
});
var tapSink = /* @__PURE__ */ dual(2, (self, sink) => pipe(fromEffect7(all4([bounded5(1), make20()])), flatMap14(([queue, deferred]) => {
  const right3 = flattenTake(fromQueue2(queue, {
    maxChunkSize: 1
  }));
  const loop3 = readWithCause({
    onInput: (chunk4) => pipe(fromEffect4(offer3(queue, chunk2(chunk4))), foldCauseChannel({
      onFailure: () => flatMap12(write(chunk4), () => identityChannel()),
      onSuccess: () => flatMap12(write(chunk4), () => loop3)
    })),
    onFailure: (cause4) => pipe(fromEffect4(offer3(queue, failCause10(cause4))), foldCauseChannel({
      onFailure: () => failCause9(cause4),
      onSuccess: () => failCause9(cause4)
    })),
    onDone: () => pipe(fromEffect4(offer3(queue, end4)), foldCauseChannel({
      onFailure: () => unit6,
      onSuccess: () => unit6
    }))
  });
  return pipe(new StreamImpl(pipe(pipeTo(toChannel2(self), loop3), ensuring3(zipRight5(forkDaemon2(offer3(queue, end4)), _await(deferred))))), merge9(execute(pipe(run3(right3, sink), ensuring2(zipRight5(shutdown4(queue), succeed2(deferred, void 0)))))));
})));
var throttle = /* @__PURE__ */ dual(2, (self, options) => throttleEffect(self, {
  ...options,
  cost: (chunk4) => succeed8(options.cost(chunk4))
}));
var throttleEffect = /* @__PURE__ */ dual(2, (self, options) => {
  if (options.strategy === "enforce") {
    return throttleEnforceEffect(self, options.cost, options.units, options.duration, options.burst ?? 0);
  }
  return throttleShapeEffect(self, options.cost, options.units, options.duration, options.burst ?? 0);
});
var throttleEnforceEffect = (self, cost, units, duration2, burst) => {
  const loop3 = (tokens, timestampMillis) => readWithCause({
    onInput: (input) => pipe(cost(input), zip6(currentTimeMillis2), map16(([weight, currentTimeMillis3]) => {
      const elapsed2 = currentTimeMillis3 - timestampMillis;
      const cycles = elapsed2 / toMillis(duration2);
      const sum3 = tokens + cycles * units;
      const max6 = units + burst < 0 ? Number.POSITIVE_INFINITY : units + burst;
      const available = sum3 < 0 ? max6 : Math.min(sum3, max6);
      if (weight <= available) {
        return pipe(write(input), flatMap12(() => loop3(available - weight, currentTimeMillis3)));
      }
      return loop3(tokens, timestampMillis);
    }), unwrap),
    onFailure: failCause9,
    onDone: () => unit6
  });
  const throttled = pipe(currentTimeMillis2, map16((currentTimeMillis3) => loop3(units, currentTimeMillis3)), unwrap);
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(throttled)));
};
var throttleShapeEffect = (self, costFn, units, duration2, burst) => {
  const loop3 = (tokens, timestampMillis) => readWithCause({
    onInput: (input) => pipe(costFn(input), zip6(currentTimeMillis2), map16(([weight, currentTimeMillis3]) => {
      const elapsed2 = currentTimeMillis3 - timestampMillis;
      const cycles = elapsed2 / toMillis(duration2);
      const sum3 = tokens + cycles * units;
      const max6 = units + burst < 0 ? Number.POSITIVE_INFINITY : units + burst;
      const available = sum3 < 0 ? max6 : Math.min(sum3, max6);
      const remaining = available - weight;
      const waitCycles = remaining >= 0 ? 0 : -remaining / units;
      const delay3 = millis(Math.max(0, waitCycles * toMillis(duration2)));
      if (greaterThan3(delay3, zero2)) {
        return pipe(fromEffect4(sleep2(delay3)), zipRight6(write(input)), flatMap12(() => loop3(remaining, currentTimeMillis3)));
      }
      return flatMap12(write(input), () => loop3(remaining, currentTimeMillis3));
    }), unwrap),
    onFailure: failCause9,
    onDone: () => unit6
  });
  const throttled = pipe(currentTimeMillis2, map16((currentTimeMillis3) => loop3(units, currentTimeMillis3)), unwrap);
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(throttled)));
};
var tick = (interval) => repeatWithSchedule(void 0, spaced2(interval));
var timeout3 = /* @__PURE__ */ dual(2, (self, duration2) => pipe(toPull2(self), map16(timeoutFail2({
  onTimeout: () => none2(),
  duration: duration2
})), fromPull2));
var timeoutFail3 = /* @__PURE__ */ dual(3, (self, error2, duration2) => pipe(self, timeoutTo3(duration2, failSync6(error2))));
var timeoutFailCause3 = /* @__PURE__ */ dual(3, (self, cause4, duration2) => pipe(toPull2(self), map16(timeoutFailCause2({
  onTimeout: () => map13(cause4(), some2),
  duration: duration2
})), fromPull2));
var timeoutTo3 = /* @__PURE__ */ dual(3, (self, duration2, that) => {
  const StreamTimeout = new RuntimeException2("Stream Timeout");
  return pipe(self, timeoutFailCause3(() => die4(StreamTimeout), duration2), catchSomeCause3((cause4) => isDieType2(cause4) && isRuntimeException2(cause4.defect) && cause4.defect.message !== void 0 && cause4.defect.message === "Stream Timeout" ? some2(that) : none2()));
});
var toPubSub2 = /* @__PURE__ */ dual(2, (self, capacity5) => pipe(acquireRelease2(bounded4(capacity5), (pubsub) => shutdown3(pubsub)), tap4((pubsub) => pipe(self, runIntoPubSubScoped(pubsub), forkScoped2))));
var toPull2 = (self) => map16(toPull(toChannel2(self)), (pull) => pipe(pull, mapError3(some2), flatMap10(match2({
  onLeft: () => fail9(none2()),
  onRight: succeed8
}))));
var toQueue2 = /* @__PURE__ */ dual((args) => isStream(args[0]), (self, options) => tap4(acquireRelease2(options?.strategy === "unbounded" ? unbounded5() : options?.strategy === "dropping" ? dropping3(options.capacity ?? 2) : options?.strategy === "sliding" ? sliding3(options.capacity ?? 2) : bounded5(options?.capacity ?? 2), (queue) => shutdown4(queue)), (queue) => forkScoped2(runIntoQueueScoped(self, queue))));
var toQueueOfElements = /* @__PURE__ */ dual((args) => isStream(args[0]), (self, options) => tap4(acquireRelease2(bounded5(options?.capacity ?? 2), (queue) => shutdown4(queue)), (queue) => forkScoped2(runIntoQueueElementsScoped(self, queue))));
var toReadableStream = (source) => {
  let pull;
  let scope5;
  return new ReadableStream({
    start(controller) {
      scope5 = runSync(make40());
      pull = pipe(toPull2(source), use(scope5), runSync, tap4((chunk4) => sync4(() => {
        map4(chunk4, (a) => {
          controller.enqueue(a);
        });
      })), tapErrorCause3(() => close(scope5, unit3)), catchTags2({
        "None": () => sync4(() => {
          controller.close();
        }),
        "Some": (error2) => sync4(() => {
          controller.error(error2.value);
        })
      }), asUnit3);
    },
    pull() {
      return runPromise(pull);
    },
    cancel() {
      return runPromise(close(scope5, unit3));
    }
  });
};
var transduce = /* @__PURE__ */ dual(2, (self, sink) => {
  const newChannel = suspend5(() => {
    const leftovers = {
      ref: empty6()
    };
    const upstreamDone = {
      ref: false
    };
    const buffer3 = suspend5(() => {
      const leftover = leftovers.ref;
      if (isEmpty(leftover)) {
        return readWith({
          onInput: (input) => pipe(write(input), flatMap12(() => buffer3)),
          onFailure: fail11,
          onDone: succeedNow
        });
      }
      leftovers.ref = empty6();
      return pipe(writeChunk(leftover), flatMap12(() => buffer3));
    });
    const concatAndGet = (chunk4) => {
      const leftover = leftovers.ref;
      const concatenated = appendAll2(leftover, filter4(chunk4, (chunk5) => chunk5.length !== 0));
      leftovers.ref = concatenated;
      return concatenated;
    };
    const upstreamMarker = readWith({
      onInput: (input) => flatMap12(write(input), () => upstreamMarker),
      onFailure: fail11,
      onDone: (done9) => zipRight6(sync6(() => {
        upstreamDone.ref = true;
      }), succeedNow(done9))
    });
    const transducer = pipe(sink, toChannel, collectElements, flatMap12(([leftover, z]) => pipe(succeed10([upstreamDone.ref, concatAndGet(leftover)]), flatMap12(([done9, newLeftovers]) => {
      const nextChannel = done9 && isEmpty(newLeftovers) ? unit6 : transducer;
      return pipe(write(of2(z)), flatMap12(() => nextChannel));
    }))));
    return pipe(toChannel2(self), pipeTo(upstreamMarker), pipeTo(buffer3), pipeToOrFail(transducer));
  });
  return new StreamImpl(newChannel);
});
var unfold3 = (s, f) => unfoldChunk(s, (s2) => pipe(f(s2), map(([a, s3]) => [of2(a), s3])));
var unfoldChunk = (s, f) => {
  const loop3 = (s2) => match(f(s2), {
    onNone: () => unit6,
    onSome: ([chunk4, s3]) => flatMap12(write(chunk4), () => loop3(s3))
  });
  return new StreamImpl(suspend5(() => loop3(s)));
};
var unfoldChunkEffect = (s, f) => suspend7(() => {
  const loop3 = (s2) => unwrap(map16(f(s2), match({
    onNone: () => unit6,
    onSome: ([chunk4, s3]) => flatMap12(write(chunk4), () => loop3(s3))
  })));
  return new StreamImpl(loop3(s));
});
var unfoldEffect = (s, f) => unfoldChunkEffect(s, (s2) => pipe(f(s2), map16(map(([a, s3]) => [of2(a), s3]))));
var unit7 = /* @__PURE__ */ succeed12(void 0);
var unwrap2 = (effect3) => flatten12(fromEffect7(effect3));
var unwrapScoped5 = (effect3) => flatten12(scoped5(effect3));
var updateService3 = /* @__PURE__ */ dual(3, (self, tag2, f) => pipe(self, mapInputContext4((context7) => pipe(context7, add2(tag2, f(pipe(context7, unsafeGet3(tag2))))))));
var when3 = /* @__PURE__ */ dual(2, (self, test3) => pipe(self, whenEffect3(sync4(test3))));
var whenCase = (evaluate2, pf) => whenCaseEffect(pf)(sync4(evaluate2));
var whenCaseEffect = /* @__PURE__ */ dual(2, (self, pf) => pipe(fromEffect7(self), flatMap14((a) => pipe(pf(a), getOrElse(() => empty34)))));
var whenEffect3 = /* @__PURE__ */ dual(2, (self, effect3) => pipe(fromEffect7(effect3), flatMap14((bool) => bool ? self : empty34)));
var withSpan6 = /* @__PURE__ */ dual(3, (self, name, options) => new StreamImpl(withSpan5(toChannel2(self), name, options)));
var zip8 = /* @__PURE__ */ dual(2, (self, that) => pipe(self, zipWith10(that, (a, a2) => [a, a2])));
var zipFlatten = /* @__PURE__ */ dual(2, (self, that) => pipe(self, zipWith10(that, (a, a2) => [...a, a2])));
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
        return pipe(pullLeft, match11({
          onFailure: fail4,
          onSuccess: (leftChunk) => succeed3([map4(leftChunk, ([k, a]) => [k, options.onSelf(a)]), DrainLeft])
        }));
      }
      case OP_DRAIN_RIGHT: {
        return pipe(pullRight, match11({
          onFailure: fail4,
          onSuccess: (rightChunk) => succeed3([map4(rightChunk, ([k, a2]) => [k, options.onOther(a2)]), DrainRight])
        }));
      }
      case OP_PULL_BOTH: {
        return pipe(unsome(pullLeft), zip6(unsome(pullRight), {
          concurrent: true
        }), matchEffect2({
          onFailure: (error2) => succeed8(fail4(some2(error2))),
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
              return succeed8(succeed3(merge11(leftOption.value, rightOption.value)));
            }
            if (isSome2(leftOption) && isNone2(rightOption)) {
              if (isEmpty(leftOption.value)) {
                return pull(DrainLeft, pullLeft, pullRight);
              }
              return succeed8(succeed3([pipe(leftOption.value, map4(([k, a]) => [k, options.onSelf(a)])), DrainLeft]));
            }
            if (isNone2(leftOption) && isSome2(rightOption)) {
              if (isEmpty(rightOption.value)) {
                return pull(DrainRight, pullLeft, pullRight);
              }
              return succeed8(succeed3([pipe(rightOption.value, map4(([k, a2]) => [k, options.onOther(a2)])), DrainRight]));
            }
            return succeed8(fail4(none2()));
          }
        }));
      }
      case OP_PULL_LEFT: {
        return matchEffect2(pullLeft, {
          onFailure: match({
            onNone: () => succeed8(succeed3([pipe(state.rightChunk, map4(([k, a2]) => [k, options.onOther(a2)])), DrainRight])),
            onSome: (error2) => succeed8(fail4(some2(error2)))
          }),
          onSuccess: (leftChunk) => isEmpty(leftChunk) ? pull(PullLeft(state.rightChunk), pullLeft, pullRight) : succeed8(succeed3(merge11(leftChunk, state.rightChunk)))
        });
      }
      case OP_PULL_RIGHT: {
        return matchEffect2(pullRight, {
          onFailure: match({
            onNone: () => succeed8(succeed3([map4(state.leftChunk, ([k, a]) => [k, options.onSelf(a)]), DrainLeft])),
            onSome: (error2) => succeed8(fail4(some2(error2)))
          }),
          onSuccess: (rightChunk) => isEmpty(rightChunk) ? pull(PullRight(state.leftChunk), pullLeft, pullRight) : succeed8(succeed3(merge11(state.leftChunk, rightChunk)))
        });
      }
    }
  };
  const merge11 = (leftChunk, rightChunk) => {
    const hasNext = (chunk4, index) => index < chunk4.length - 1;
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
      const compare = options.order(k1, k2);
      if (compare === 0) {
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
      } else if (compare < 0) {
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
          onFailure: (error2) => succeed8(fail4(error2)),
          onSuccess: (leftChunk) => succeed8(succeed3([map4(leftChunk, options.onSelf), DrainLeft]))
        });
      }
      case OP_DRAIN_RIGHT: {
        return matchEffect2(pullRight, {
          onFailure: (error2) => succeed8(fail4(error2)),
          onSuccess: (rightChunk) => succeed8(succeed3([map4(rightChunk, options.onOther), DrainRight]))
        });
      }
      case OP_PULL_BOTH: {
        return pipe(unsome(pullLeft), zip6(unsome(pullRight), {
          concurrent: true
        }), matchEffect2({
          onFailure: (error2) => succeed8(fail4(some2(error2))),
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
              return succeed8(succeed3(zip11(leftOption.value, rightOption.value, options.onBoth)));
            }
            if (isSome2(leftOption) && isNone2(rightOption)) {
              return succeed8(succeed3([map4(leftOption.value, options.onSelf), DrainLeft]));
            }
            if (isNone2(leftOption) && isSome2(rightOption)) {
              return succeed8(succeed3([map4(rightOption.value, options.onOther), DrainRight]));
            }
            return succeed8(fail4(none2()));
          }
        }));
      }
      case OP_PULL_LEFT: {
        return matchEffect2(pullLeft, {
          onFailure: match({
            onNone: () => succeed8(succeed3([map4(state.rightChunk, options.onOther), DrainRight])),
            onSome: (error2) => succeed8(fail4(some2(error2)))
          }),
          onSuccess: (leftChunk) => {
            if (isEmpty(leftChunk)) {
              return pull(PullLeft(state.rightChunk), pullLeft, pullRight);
            }
            if (isEmpty(state.rightChunk)) {
              return pull(PullRight(leftChunk), pullLeft, pullRight);
            }
            return succeed8(succeed3(zip11(leftChunk, state.rightChunk, options.onBoth)));
          }
        });
      }
      case OP_PULL_RIGHT: {
        return matchEffect2(pullRight, {
          onFailure: match({
            onNone: () => succeed8(succeed3([map4(state.leftChunk, options.onSelf), DrainLeft])),
            onSome: (error2) => succeed8(fail4(some2(error2)))
          }),
          onSuccess: (rightChunk) => {
            if (isEmpty(rightChunk)) {
              return pull(PullRight(state.leftChunk), pullLeft, pullRight);
            }
            if (isEmpty(state.leftChunk)) {
              return pull(PullLeft(rightChunk), pullLeft, pullRight);
            }
            return succeed8(succeed3(zip11(state.leftChunk, rightChunk, options.onBoth)));
          }
        });
      }
    }
  };
  const zip11 = (leftChunk, rightChunk, f) => {
    const [output, either8] = zipChunks(leftChunk, rightChunk, f);
    switch (either8._tag) {
      case "Left": {
        if (isEmpty(either8.left)) {
          return [output, PullBoth];
        }
        return [output, PullRight(either8.left)];
      }
      case "Right": {
        if (isEmpty(either8.right)) {
          return [output, PullBoth];
        }
        return [output, PullLeft(either8.right)];
      }
    }
  };
  return combineChunks(self, options.other, PullBoth, pull);
});
var zipLatest = /* @__PURE__ */ dual(2, (self, that) => pipe(self, zipLatestWith(that, (a, a2) => [a, a2])));
var zipLatestWith = /* @__PURE__ */ dual(3, (self, that, f) => {
  const pullNonEmpty = (pull) => pipe(pull, flatMap10((chunk4) => isEmpty(chunk4) ? pullNonEmpty(pull) : succeed8(chunk4)));
  return pipe(toPull2(self), map16(pullNonEmpty), zip6(pipe(toPull2(that), map16(pullNonEmpty))), flatMap10(([left3, right3]) => pipe(fromEffectOption(raceWith2(left3, right3, {
    onSelfDone: (leftDone, rightFiber) => pipe(suspend3(() => leftDone), zipWith6(join3(rightFiber), (l, r) => [l, r, true])),
    onOtherDone: (rightDone, leftFiber) => pipe(suspend3(() => rightDone), zipWith6(join3(leftFiber), (l, r) => [r, l, false]))
  })), flatMap14(([l, r, leftFirst]) => pipe(fromEffect7(make29([unsafeLast(l), unsafeLast(r)])), flatMap14((latest) => pipe(fromChunk(leftFirst ? pipe(r, map4((a2) => f(unsafeLast(l), a2))) : pipe(l, map4((a) => f(a, unsafeLast(r))))), concat2(pipe(repeatEffectOption(left3), mergeEither(repeatEffectOption(right3)), mapEffectSequential(match2({
    onLeft: (leftChunk) => pipe(modify5(latest, ([_, rightLatest]) => [pipe(leftChunk, map4((a) => f(a, rightLatest))), [unsafeLast(leftChunk), rightLatest]])),
    onRight: (rightChunk) => pipe(modify5(latest, ([leftLatest, _]) => [pipe(rightChunk, map4((a2) => f(leftLatest, a2))), [leftLatest, unsafeLast(rightChunk)]]))
  })), flatMap14(fromChunk))))))), toPull2)), fromPull2);
});
var zipLeft6 = /* @__PURE__ */ dual(2, (self, that) => pipe(self, zipWithChunks(that, (left3, right3) => {
  if (left3.length > right3.length) {
    return [pipe(left3, take2(right3.length)), left2(pipe(left3, take2(right3.length)))];
  }
  return [left3, right2(pipe(right3, drop2(left3.length)))];
})));
var zipRight9 = /* @__PURE__ */ dual(2, (self, that) => pipe(self, zipWithChunks(that, (left3, right3) => {
  if (left3.length > right3.length) {
    return [right3, left2(pipe(left3, take2(right3.length)))];
  }
  return [pipe(right3, take2(left3.length)), right2(pipe(right3, drop2(left3.length)))];
})));
var zipWith10 = /* @__PURE__ */ dual(3, (self, that, f) => pipe(self, zipWithChunks(that, (leftChunk, rightChunk) => zipChunks(leftChunk, rightChunk, f))));
var zipWithChunks = /* @__PURE__ */ dual(3, (self, that, f) => {
  const pull = (state, pullLeft, pullRight) => {
    switch (state._tag) {
      case OP_PULL_BOTH2: {
        return pipe(unsome(pullLeft), zip6(unsome(pullRight), {
          concurrent: true
        }), matchEffect2({
          onFailure: (error2) => succeed8(fail4(some2(error2))),
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
              return succeed8(succeed3(zip11(leftOption.value, rightOption.value)));
            }
            return succeed8(fail4(none2()));
          }
        }));
      }
      case OP_PULL_LEFT2: {
        return matchEffect2(pullLeft, {
          onFailure: (error2) => succeed8(fail4(error2)),
          onSuccess: (leftChunk) => {
            if (isEmpty(leftChunk)) {
              return pull(PullLeft2(state.rightChunk), pullLeft, pullRight);
            }
            if (isEmpty(state.rightChunk)) {
              return pull(PullRight2(leftChunk), pullLeft, pullRight);
            }
            return succeed8(succeed3(zip11(leftChunk, state.rightChunk)));
          }
        });
      }
      case OP_PULL_RIGHT2: {
        return matchEffect2(pullRight, {
          onFailure: (error2) => succeed8(fail4(error2)),
          onSuccess: (rightChunk) => {
            if (isEmpty(rightChunk)) {
              return pull(PullRight2(state.leftChunk), pullLeft, pullRight);
            }
            if (isEmpty(state.leftChunk)) {
              return pull(PullLeft2(rightChunk), pullLeft, pullRight);
            }
            return succeed8(succeed3(zip11(state.leftChunk, rightChunk)));
          }
        });
      }
    }
  };
  const zip11 = (leftChunk, rightChunk) => {
    const [output, either8] = f(leftChunk, rightChunk);
    switch (either8._tag) {
      case "Left": {
        if (isEmpty(either8.left)) {
          return [output, PullBoth2];
        }
        return [output, PullRight2(either8.left)];
      }
      case "Right": {
        if (isEmpty(either8.right)) {
          return [output, PullBoth2];
        }
        return [output, PullLeft2(either8.right)];
      }
    }
  };
  return pipe(self, combineChunks(that, PullBoth2, pull));
});
var zipWithIndex = (self) => pipe(self, mapAccum5(0, (index, a) => [index + 1, [a, index]]));
var zipWithNext = (self) => {
  const process2 = (last5) => readWithCause({
    onInput: (input) => {
      const [newLast, chunk4] = mapAccum2(input, last5, (prev, curr) => [some2(curr), pipe(prev, map((a) => [a, curr]))]);
      const output = filterMap4(chunk4, (option4) => isSome2(option4) ? some2([option4.value[0], some2(option4.value[1])]) : none2());
      return flatMap12(write(output), () => process2(newLast));
    },
    onFailure: failCause9,
    onDone: () => match(last5, {
      onNone: () => unit6,
      onSome: (value3) => zipRight6(write(of2([value3, none2()])), unit6)
    })
  });
  return new StreamImpl(pipe(toChannel2(self), pipeToOrFail(process2(none2()))));
};
var zipWithPrevious = (self) => pipe(self, mapAccum5(none2(), (prev, curr) => [some2(curr), [prev, curr]]));
var zipWithPreviousAndNext = (self) => pipe(zipWithNext(zipWithPrevious(self)), map21(([[prev, curr], next]) => [prev, curr, pipe(next, map((tuple3) => tuple3[1]))]));
var zipChunks = (left3, right3, f) => {
  if (left3.length > right3.length) {
    return [pipe(left3, take2(right3.length), zipWith3(right3, f)), left2(pipe(left3, drop2(right3.length)))];
  }
  return [pipe(left3, zipWith3(pipe(right3, take2(left3.length)), f)), right2(pipe(right3, drop2(left3.length)))];
};
var Do4 = /* @__PURE__ */ succeed12({});
var bind4 = /* @__PURE__ */ dual((args) => typeof args[0] !== "string", (self, tag2, f, options) => flatMap14(self, (k) => map21(f(k), (a) => ({
  ...k,
  [tag2]: a
})), options));
var bindTo4 = /* @__PURE__ */ dual(2, (self, tag2) => map21(self, (a) => ({
  [tag2]: a
})));
var let_4 = /* @__PURE__ */ dual(3, (self, tag2, f) => map21(self, (k) => ({
  ...k,
  [tag2]: f(k)
})));
var decodeText = /* @__PURE__ */ dual((args) => isStream(args[0]), (self, encoding = "utf-8") => suspend7(() => {
  const decoder2 = new TextDecoder(encoding);
  return map21(self, (s) => decoder2.decode(s));
}));
var encodeText = (self) => suspend7(() => {
  const encoder2 = new TextEncoder();
  return map21(self, (s) => encoder2.encode(s));
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/secret.js
var SecretSymbolKey = "effect/Secret";
var SecretTypeId = /* @__PURE__ */ Symbol.for(SecretSymbolKey);
var proto12 = {
  [SecretTypeId]: SecretTypeId,
  [symbol]() {
    return pipe(hash(SecretSymbolKey), combine(array(this.raw)), cached(this));
  },
  [symbol2](that) {
    return isSecret(that) && this.raw.length === that.raw.length && this.raw.every((v, i) => equals(v, that.raw[i]));
  }
};
var isSecret = (u) => hasProperty(u, SecretTypeId);
var make47 = (bytes) => {
  const secret = Object.create(proto12);
  Object.defineProperty(secret, "toString", {
    enumerable: false,
    value() {
      return "Secret(<redacted>)";
    }
  });
  Object.defineProperty(secret, "toJSON", {
    enumerable: false,
    value() {
      return "<redacted>";
    }
  });
  Object.defineProperty(secret, "raw", {
    enumerable: false,
    value: bytes
  });
  return secret;
};
var fromString3 = (text) => {
  return make47(text.split("").map((char) => char.charCodeAt(0)));
};
var value = (self) => {
  return self.raw.map((byte) => String.fromCharCode(byte)).join("");
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Data.js
var struct3 = struct2;
var array4 = (as9) => unsafeArray(as9.slice(0));
var unsafeArray = (as9) => Object.setPrototypeOf(as9, ArrayProto);
var Class4 = Structural;
var Error3 = /* @__PURE__ */ function() {
  return class Base extends YieldableError {
    constructor(args) {
      super();
      if (args) {
        Object.assign(this, args);
      }
    }
  };
}();
var TaggedError = (tag2) => {
  class Base2 extends Error3 {
    _tag = tag2;
  }
  Base2.prototype.name = tag2;
  return Base2;
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/encoding/common.js
var DecodeExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Encoding/errors/Decode");
var DecodeException = (input, message2) => {
  const out = {
    _tag: "DecodeException",
    [DecodeExceptionTypeId]: DecodeExceptionTypeId,
    input
  };
  if (isString(message2)) {
    out.message = message2;
  }
  return out;
};
var encoder = /* @__PURE__ */ new TextEncoder();

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/encoding/base64.js
var encode = (bytes) => {
  const length5 = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < length5; i += 3) {
    result += base64abc[bytes[i - 2] >> 2];
    result += base64abc[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += base64abc[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += base64abc[bytes[i] & 63];
  }
  if (i === length5 + 1) {
    result += base64abc[bytes[i - 2] >> 2];
    result += base64abc[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === length5) {
    result += base64abc[bytes[i - 2] >> 2];
    result += base64abc[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += base64abc[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
};
var decode2 = (str) => {
  const length5 = str.length;
  if (length5 % 4 !== 0) {
    return left2(DecodeException(str, `Length must be a multiple of 4, but is ${length5}`));
  }
  const index = str.indexOf("=");
  if (index !== -1 && (index < length5 - 2 || index === length5 - 2 && str[length5 - 1] !== "=")) {
    return left2(DecodeException(str, "Found a '=' character, but it is not at the end"));
  }
  try {
    const missingOctets = str.endsWith("==") ? 2 : str.endsWith("=") ? 1 : 0;
    const result = new Uint8Array(3 * (length5 / 4));
    for (let i = 0, j = 0; i < length5; i += 4, j += 3) {
      const buffer3 = getBase64Code(str.charCodeAt(i)) << 18 | getBase64Code(str.charCodeAt(i + 1)) << 12 | getBase64Code(str.charCodeAt(i + 2)) << 6 | getBase64Code(str.charCodeAt(i + 3));
      result[j] = buffer3 >> 16;
      result[j + 1] = buffer3 >> 8 & 255;
      result[j + 2] = buffer3 & 255;
    }
    return right2(result.subarray(0, result.length - missingOctets));
  } catch (e) {
    return left2(DecodeException(str, e instanceof Error ? e.message : "Invalid input"));
  }
};
function getBase64Code(charCode) {
  if (charCode >= base64codes.length) {
    throw new TypeError(`Invalid character ${String.fromCharCode(charCode)}`);
  }
  const code = base64codes[charCode];
  if (code === 255) {
    throw new TypeError(`Invalid character ${String.fromCharCode(charCode)}`);
  }
  return code;
}
var base64abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"];
var base64codes = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 62, 255, 255, 255, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 255, 255, 255, 0, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/encoding/base64Url.js
var encode2 = (data2) => encode(data2).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
var decode3 = (str) => {
  const length5 = str.length;
  if (length5 % 4 === 1) {
    return left2(DecodeException(str, `Length should be a multiple of 4, but is ${length5}`));
  }
  if (!/^[-_A-Z0-9]*?={0,2}$/i.test(str)) {
    return left2(DecodeException(str, "Invalid input"));
  }
  let sanitized = length5 % 4 === 2 ? `${str}==` : length5 % 4 === 3 ? `${str}=` : str;
  sanitized = sanitized.replace(/-/g, "+").replace(/_/g, "/");
  return decode2(sanitized);
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/encoding/hex.js
var encode3 = (bytes) => {
  let result = "";
  for (let i = 0; i < bytes.length; ++i) {
    result += bytesToHex[bytes[i]];
  }
  return result;
};
var decode4 = (str) => {
  const bytes = new TextEncoder().encode(str);
  if (bytes.length % 2 !== 0) {
    return left2(DecodeException(str, `Length must be a multiple of 2, but is ${bytes.length}`));
  }
  try {
    const length5 = bytes.length / 2;
    const result = new Uint8Array(length5);
    for (let i = 0; i < length5; i++) {
      const a = fromHexChar(bytes[i * 2]);
      const b = fromHexChar(bytes[i * 2 + 1]);
      result[i] = a << 4 | b;
    }
    return right2(result);
  } catch (e) {
    return left2(DecodeException(str, e instanceof Error ? e.message : "Invalid input"));
  }
};
var bytesToHex = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
var fromHexChar = (byte) => {
  if (48 <= byte && byte <= 57) {
    return byte - 48;
  }
  if (97 <= byte && byte <= 102) {
    return byte - 97 + 10;
  }
  if (65 <= byte && byte <= 70) {
    return byte - 65 + 10;
  }
  throw new TypeError("Invalid input");
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Encoding.js
var encodeBase64 = (input) => typeof input === "string" ? encode(encoder.encode(input)) : encode(input);
var decodeBase64 = (str) => decode2(str);
var encodeBase64Url = (input) => typeof input === "string" ? encode2(encoder.encode(input)) : encode2(input);
var decodeBase64Url = (str) => decode3(str);
var encodeHex = (input) => typeof input === "string" ? encode3(encoder.encode(input)) : encode3(input);
var decodeHex = (str) => decode4(str);

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/FiberRef.js
var unhandledErrorLogLevel = currentUnhandledErrorLogLevel;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/FiberMap.js
var TypeId15 = /* @__PURE__ */ Symbol.for("effect/FiberMap");
var isFiberMap = (u) => hasProperty(u, TypeId15);
var Proto = {
  [TypeId15]: TypeId15,
  [Symbol.iterator]() {
    return this.backing[Symbol.iterator]();
  },
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "FiberMap",
      backing: this.backing.toJSON()
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var unsafeMake9 = (backing, deferred) => {
  const self = Object.create(Proto);
  self.backing = backing;
  self.deferred = deferred;
  return self;
};
var make48 = () => acquireRelease2(map16(make20(), (deferred) => unsafeMake9(empty19(), deferred)), clear2);
var unsafeSet = /* @__PURE__ */ dual((args) => isFiberMap(args[0]), (self, key, fiber, interruptAs2) => {
  const previous2 = get9(self.backing, key);
  if (previous2._tag === "Some") {
    if (previous2.value === fiber) {
      return;
    }
    previous2.value.unsafeInterruptAsFork(interruptAs2 ?? none4);
  }
  fiber.setFiberRef(unhandledErrorLogLevel, none2());
  set5(self.backing, key, fiber);
  fiber.addObserver((exit4) => {
    const current2 = get9(self.backing, key);
    if (isSome2(current2) && fiber === current2.value) {
      remove6(self.backing, key);
    }
    if (isFailure(exit4) && !isInterruptedOnly2(exit4.cause)) {
      unsafeDone(self.deferred, exit4);
    }
  });
});
var set8 = /* @__PURE__ */ dual(3, (self, key, fiber) => fiberIdWith2((fiberId3) => sync4(() => unsafeSet(self, key, fiber, fiberId3))));
var clear2 = (self) => zipRight5(forEach8(self.backing, ([_, fiber]) => interrupt5(fiber)), sync4(() => {
  clear(self.backing);
}));
var run4 = function() {
  if (arguments.length === 2) {
    const self2 = arguments[0];
    const key2 = arguments[1];
    return (effect4) => tap4(forkDaemon2(effect4), (fiber) => set8(self2, key2, fiber));
  }
  const self = arguments[0];
  const key = arguments[1];
  const effect3 = arguments[2];
  return tap4(forkDaemon2(effect3), (fiber) => set8(self, key, fiber));
};

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/FiberSet.js
var TypeId16 = /* @__PURE__ */ Symbol.for("effect/FiberSet");
var Proto2 = {
  [TypeId16]: TypeId16,
  [Symbol.iterator]() {
    return this.backing[Symbol.iterator]();
  },
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "FiberMap",
      backing: toJSON(Array.from(this.backing))
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
  const self = Object.create(Proto2);
  self.backing = backing;
  self.deferred = deferred;
  return self;
};
var make49 = () => acquireRelease2(map16(make20(), (deferred) => unsafeMake10(/* @__PURE__ */ new Set(), deferred)), clear3);
var makeRuntime = () => flatMap10(make49(), (self) => runtime5(self)());
var unsafeAdd = /* @__PURE__ */ dual(2, (self, fiber) => {
  if (self.backing.has(fiber)) {
    return;
  }
  fiber.setFiberRef(unhandledErrorLogLevel, none2());
  self.backing.add(fiber);
  fiber.addObserver((exit4) => {
    self.backing.delete(fiber);
    if (isFailure(exit4) && !isInterruptedOnly2(exit4.cause)) {
      unsafeDone(self.deferred, exit4);
    }
  });
});
var add6 = /* @__PURE__ */ dual(2, (self, fiber) => sync4(() => unsafeAdd(self, fiber)));
var clear3 = (self) => zipRight5(forEach8(self.backing, (fiber) => interrupt5(fiber)), sync4(() => {
  self.backing.clear();
}));
var run5 = function() {
  const self = arguments[0];
  if (arguments.length === 1) {
    return (effect4) => tap4(forkDaemon2(effect4), (fiber) => add6(self, fiber));
  }
  const effect3 = arguments[1];
  return tap4(forkDaemon2(effect3), (fiber) => add6(self, fiber));
};
var runtime5 = (self) => () => map16(runtime4(), (runtime6) => {
  const runFork3 = runFork2(runtime6);
  return (effect3, options) => {
    const fiber = runFork3(effect3, options);
    unsafeAdd(self, fiber);
    return fiber;
  };
});
var size15 = (self) => sync4(() => self.backing.size);

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/groupBy.js
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
var evaluate = /* @__PURE__ */ dual((args) => isGroupBy(args[0]), (self, f, options) => flatMap14(self.grouped, ([key, queue]) => f(key, flattenTake(fromQueue2(queue, {
  shutdown: true
}))), {
  concurrency: "unbounded",
  bufferSize: options?.bufferSize ?? 16
}));
var make50 = (grouped3) => ({
  [GroupByTypeId]: groupByVariance,
  pipe() {
    return pipeArguments(this, arguments);
  },
  grouped: grouped3
});
var groupBy2 = /* @__PURE__ */ dual((args) => isStream(args[0]), (self, f, options) => make50(unwrapScoped5(gen3(function* ($) {
  const decider = yield* $(make20());
  const output = yield* $(acquireRelease2(bounded5(options?.bufferSize ?? 16), (queue) => shutdown4(queue)));
  const ref = yield* $(make29(/* @__PURE__ */ new Map()));
  const add8 = yield* $(mapEffectSequential(self, f), distributedWithDynamicCallback(options?.bufferSize ?? 16, ([key, value3]) => flatMap10(_await(decider), (f2) => f2(key, value3)), (exit4) => offer3(output, exit4)));
  yield* $(succeed2(decider, (key, _) => pipe(get13(ref), map16((map25) => fromNullable(map25.get(key))), flatMap10(match({
    onNone: () => flatMap10(add8, ([index, queue]) => zipRight5(update3(ref, (map25) => map25.set(key, index)), pipe(offer3(output, succeed3([key, mapDequeue(queue, (exit4) => new TakeImpl(pipe(exit4, map11((tuple3) => of2(tuple3[1])))))])), as4((n) => n === index)))),
    onSome: (index) => succeed8((n) => n === index)
  })))));
  return flattenExitOption(fromQueue2(output, {
    shutdown: true
  }));
}))));
var mapEffectOptions = /* @__PURE__ */ dual((args) => typeof args[0] !== "function", (self, f, options) => {
  if (options?.key) {
    return evaluate(groupByKey(self, options.key, {
      bufferSize: options.bufferSize
    }), (_, s) => mapEffectSequential(s, f));
  }
  return matchConcurrency(options?.concurrency, () => mapEffectSequential(self, f), (n) => options?.unordered ? flatMap14(self, (a) => fromEffect7(f(a)), {
    concurrency: n
  }) : mapEffectPar(self, n, f));
});
var bindEffect = /* @__PURE__ */ dual((args) => typeof args[0] !== "string", (self, tag2, f, options) => mapEffectOptions(self, (k) => map16(f(k), (a) => ({
  ...k,
  [tag2]: a
})), options));
var mapDequeue = (dequeue, f) => new MapDequeue(dequeue, f);
var MapDequeue = class {
  dequeue;
  f;
  [DequeueTypeId2] = {
    _Out: (_) => _
  };
  constructor(dequeue, f) {
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
    return pipe(take4(this.dequeue), map16((a) => this.f(a)));
  }
  get takeAll() {
    return pipe(takeAll2(this.dequeue), map16(map4((a) => this.f(a))));
  }
  takeUpTo(max6) {
    return pipe(takeUpTo2(this.dequeue, max6), map16(map4((a) => this.f(a))));
  }
  takeBetween(min4, max6) {
    return pipe(takeBetween2(this.dequeue, min4, max6), map16(map4((a) => this.f(a))));
  }
  takeN(n) {
    return pipe(takeN2(this.dequeue, n), map16(map4((a) => this.f(a))));
  }
  poll() {
    return pipe(poll6(this.dequeue), map16(map((a) => this.f(a))));
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var groupByKey = /* @__PURE__ */ dual((args) => typeof args[0] !== "function", (self, f, options) => {
  const loop3 = (map25, outerQueue) => readWithCause({
    onInput: (input) => flatMap12(fromEffect4(forEach8(groupByIterable(input, f), ([key, values5]) => {
      const innerQueue = map25.get(key);
      if (innerQueue === void 0) {
        return pipe(bounded5(options?.bufferSize ?? 16), flatMap10((innerQueue2) => pipe(sync4(() => {
          map25.set(key, innerQueue2);
        }), zipRight5(offer3(outerQueue, of5([key, innerQueue2]))), zipRight5(pipe(offer3(innerQueue2, chunk2(values5)), catchSomeCause2((cause4) => isInterruptedOnly2(cause4) ? some2(unit5) : none2()))))));
      }
      return catchSomeCause2(offer3(innerQueue, chunk2(values5)), (cause4) => isInterruptedOnly2(cause4) ? some2(unit5) : none2());
    }, {
      discard: true
    })), () => loop3(map25, outerQueue)),
    onFailure: (cause4) => fromEffect4(offer3(outerQueue, failCause10(cause4))),
    onDone: () => pipe(fromEffect4(pipe(forEach8(map25.entries(), ([_, innerQueue]) => pipe(offer3(innerQueue, end4), catchSomeCause2((cause4) => isInterruptedOnly2(cause4) ? some2(unit5) : none2())), {
      discard: true
    }), zipRight5(offer3(outerQueue, end4)))))
  });
  return make50(unwrapScoped5(pipe(sync4(() => /* @__PURE__ */ new Map()), flatMap10((map25) => pipe(acquireRelease2(unbounded5(), (queue) => shutdown4(queue)), flatMap10((queue) => pipe(self, toChannel2, pipeTo(loop3(map25, queue)), drain, runScoped, forkScoped2, as4(flattenTake(fromQueue2(queue, {
    shutdown: true
  }))))))))));
});
var groupByIterable = /* @__PURE__ */ dual(2, (iterable, f) => {
  const builder = [];
  const iterator = iterable[Symbol.iterator]();
  const map25 = /* @__PURE__ */ new Map();
  let next;
  while ((next = iterator.next()) && !next.done) {
    const value3 = next.value;
    const key = f(value3);
    if (map25.has(key)) {
      const innerBuilder = map25.get(key);
      innerBuilder.push(value3);
    } else {
      const innerBuilder = [value3];
      builder.push([key, innerBuilder]);
      map25.set(key, innerBuilder);
    }
  }
  return unsafeFromArray(builder.map((tuple3) => [tuple3[0], unsafeFromArray(tuple3[1])]));
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Logger.js
var Logger_exports = {};
__export(Logger_exports, {
  LoggerTypeId: () => LoggerTypeId2,
  add: () => add7,
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
  make: () => make51,
  map: () => map22,
  mapInput: () => mapInput5,
  mapInputOptions: () => mapInputOptions2,
  minimumLogLevel: () => minimumLogLevel2,
  none: () => none10,
  remove: () => remove9,
  replace: () => replace3,
  replaceEffect: () => replaceEffect,
  replaceScoped: () => replaceScoped,
  simple: () => simple2,
  stringLogger: () => stringLogger2,
  structured: () => structured,
  structuredLogger: () => structuredLogger3,
  succeed: () => succeed13,
  sync: () => sync9,
  test: () => test2,
  tracerLogger: () => tracerLogger2,
  withMinimumLogLevel: () => withMinimumLogLevel2,
  withSpanAnnotations: () => withSpanAnnotations,
  zip: () => zip9,
  zipLeft: () => zipLeft7,
  zipRight: () => zipRight10
});

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/logger-circular.js
var test = /* @__PURE__ */ dual(2, (self, input) => self.log({
  fiberId: none3,
  logLevel: logLevelInfo,
  message: input,
  cause: empty28,
  context: empty22(),
  spans: empty11(),
  annotations: empty10(),
  date: /* @__PURE__ */ new Date()
}));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Logger.js
var LoggerTypeId2 = LoggerTypeId;
var make51 = makeLogger;
var add7 = addLogger;
var addEffect = addLoggerEffect;
var addScoped = addLoggerScoped;
var mapInput5 = mapInput3;
var mapInputOptions2 = mapInputOptions;
var filterLogLevel2 = filterLogLevel;
var map22 = map12;
var batched = batchedLogger;
var none10 = none7;
var remove9 = removeLogger;
var replace3 = replaceLogger;
var replaceEffect = replaceLoggerEffect;
var replaceScoped = replaceLoggerScoped;
var simple2 = simple;
var succeed13 = succeed4;
var sync9 = sync2;
var test2 = test;
var withMinimumLogLevel2 = withMinimumLogLevel;
var withSpanAnnotations = loggerWithSpanAnnotations;
var zip9 = zip4;
var zipLeft7 = zipLeft3;
var zipRight10 = zipRight4;
var defaultLogger2 = defaultLogger;
var jsonLogger3 = jsonLogger;
var logfmtLogger2 = logfmtLogger;
var stringLogger2 = stringLogger;
var structuredLogger3 = structuredLogger;
var tracerLogger2 = tracerLogger;
var json = /* @__PURE__ */ replace3(defaultLogger, jsonLogger2);
var logFmt = /* @__PURE__ */ replace3(defaultLogger, logFmtLogger);
var structured = /* @__PURE__ */ replace3(defaultLogger, structuredLogger2);
var minimumLogLevel2 = minimumLogLevel;
var isLogger2 = isLogger;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Stream.js
var Stream_exports = {};
__export(Stream_exports, {
  DefaultChunkSize: () => DefaultChunkSize2,
  Do: () => Do5,
  StreamTypeId: () => StreamTypeId3,
  accumulate: () => accumulate2,
  accumulateChunks: () => accumulateChunks2,
  acquireRelease: () => acquireRelease4,
  aggregate: () => aggregate2,
  aggregateWithin: () => aggregateWithin2,
  aggregateWithinEither: () => aggregateWithinEither2,
  as: () => as8,
  async: () => _async2,
  asyncEffect: () => asyncEffect4,
  asyncScoped: () => asyncScoped2,
  bind: () => bind5,
  bindEffect: () => bindEffect2,
  bindTo: () => bindTo5,
  branchAfter: () => branchAfter2,
  broadcast: () => broadcast2,
  broadcastDynamic: () => broadcastDynamic2,
  broadcastedQueues: () => broadcastedQueues2,
  broadcastedQueuesDynamic: () => broadcastedQueuesDynamic2,
  buffer: () => buffer2,
  bufferChunks: () => bufferChunks2,
  catchAll: () => catchAll7,
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
  die: () => die9,
  dieMessage: () => dieMessage4,
  dieSync: () => dieSync6,
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
  empty: () => empty35,
  encodeText: () => encodeText2,
  ensuring: () => ensuring6,
  ensuringWith: () => ensuringWith3,
  execute: () => execute2,
  fail: () => fail14,
  failCause: () => failCause13,
  failCauseSync: () => failCauseSync7,
  failSync: () => failSync7,
  filter: () => filter11,
  filterEffect: () => filterEffect2,
  filterMap: () => filterMap7,
  filterMapEffect: () => filterMapEffect2,
  filterMapWhile: () => filterMapWhile4,
  filterMapWhileEffect: () => filterMapWhileEffect2,
  finalizer: () => finalizer2,
  find: () => find3,
  findEffect: () => findEffect2,
  flatMap: () => flatMap15,
  flatten: () => flatten13,
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
  fromIterable: () => fromIterable15,
  fromIterableEffect: () => fromIterableEffect2,
  fromIteratorSucceed: () => fromIteratorSucceed2,
  fromPubSub: () => fromPubSub2,
  fromPull: () => fromPull3,
  fromQueue: () => fromQueue3,
  fromReadableStream: () => fromReadableStream2,
  fromReadableStreamByob: () => fromReadableStreamByob2,
  fromSchedule: () => fromSchedule2,
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
  let: () => let_5,
  make: () => make52,
  map: () => map23,
  mapAccum: () => mapAccum6,
  mapAccumEffect: () => mapAccumEffect2,
  mapBoth: () => mapBoth6,
  mapChunks: () => mapChunks2,
  mapChunksEffect: () => mapChunksEffect2,
  mapConcat: () => mapConcat2,
  mapConcatChunk: () => mapConcatChunk2,
  mapConcatChunkEffect: () => mapConcatChunkEffect2,
  mapConcatEffect: () => mapConcatEffect2,
  mapEffect: () => mapEffect4,
  mapError: () => mapError7,
  mapErrorCause: () => mapErrorCause5,
  mapInputContext: () => mapInputContext5,
  merge: () => merge10,
  mergeAll: () => mergeAll7,
  mergeEither: () => mergeEither2,
  mergeLeft: () => mergeLeft2,
  mergeRight: () => mergeRight2,
  mergeWith: () => mergeWith3,
  mkString: () => mkString3,
  never: () => never5,
  onDone: () => onDone2,
  onError: () => onError4,
  orDie: () => orDie6,
  orDieWith: () => orDieWith5,
  orElse: () => orElse9,
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
  provideContext: () => provideContext5,
  provideLayer: () => provideLayer2,
  provideService: () => provideService6,
  provideServiceEffect: () => provideServiceEffect4,
  provideServiceStream: () => provideServiceStream2,
  provideSomeLayer: () => provideSomeLayer3,
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
  retry: () => retry5,
  run: () => run6,
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
  sliding: () => sliding5,
  slidingSize: () => slidingSize2,
  some: () => some7,
  someOrElse: () => someOrElse2,
  someOrFail: () => someOrFail2,
  split: () => split4,
  splitLines: () => splitLines3,
  splitOnChunk: () => splitOnChunk2,
  succeed: () => succeed14,
  suspend: () => suspend8,
  sync: () => sync10,
  take: () => take7,
  takeRight: () => takeRight4,
  takeUntil: () => takeUntil4,
  takeUntilEffect: () => takeUntilEffect2,
  takeWhile: () => takeWhile6,
  tap: () => tap7,
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
  toChannel: () => toChannel3,
  toPubSub: () => toPubSub3,
  toPull: () => toPull3,
  toQueue: () => toQueue3,
  toQueueOfElements: () => toQueueOfElements2,
  toReadableStream: () => toReadableStream2,
  transduce: () => transduce2,
  unfold: () => unfold4,
  unfoldChunk: () => unfoldChunk2,
  unfoldChunkEffect: () => unfoldChunkEffect2,
  unfoldEffect: () => unfoldEffect2,
  unit: () => unit8,
  unwrap: () => unwrap3,
  unwrapScoped: () => unwrapScoped6,
  updateService: () => updateService4,
  when: () => when4,
  whenCase: () => whenCase2,
  whenCaseEffect: () => whenCaseEffect2,
  whenEffect: () => whenEffect4,
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
  zipLatestWith: () => zipLatestWith2,
  zipLeft: () => zipLeft8,
  zipRight: () => zipRight11,
  zipWith: () => zipWith11,
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
var as8 = as7;
var _async2 = _async;
var asyncEffect4 = asyncEffect3;
var asyncScoped2 = asyncScoped;
var branchAfter2 = branchAfter;
var broadcast2 = broadcast;
var broadcastDynamic2 = broadcastDynamic;
var broadcastedQueues2 = broadcastedQueues;
var broadcastedQueuesDynamic2 = broadcastedQueuesDynamic;
var buffer2 = buffer;
var bufferChunks2 = bufferChunks;
var catchAll7 = catchAll6;
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
var die9 = die8;
var dieSync6 = dieSync5;
var dieMessage4 = dieMessage3;
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
var empty35 = empty34;
var ensuring6 = ensuring5;
var ensuringWith3 = ensuringWith2;
var context6 = context5;
var contextWith4 = contextWith3;
var contextWithEffect4 = contextWithEffect3;
var contextWithStream2 = contextWithStream;
var execute2 = execute;
var fail14 = fail13;
var failSync7 = failSync6;
var failCause13 = failCause12;
var failCauseSync7 = failCauseSync6;
var filter11 = filter10;
var filterEffect2 = filterEffect;
var filterMap7 = filterMap6;
var filterMapEffect2 = filterMapEffect;
var filterMapWhile4 = filterMapWhile3;
var filterMapWhileEffect2 = filterMapWhileEffect;
var finalizer2 = finalizer;
var find3 = find2;
var findEffect2 = findEffect;
var flatMap15 = flatMap14;
var flatten13 = flatten12;
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
var fromIterable15 = fromIterable14;
var fromIterableEffect2 = fromIterableEffect;
var fromIteratorSucceed2 = fromIteratorSucceed;
var fromPull3 = fromPull2;
var fromQueue3 = fromQueue2;
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
var make52 = make46;
var map23 = map21;
var mapAccum6 = mapAccum5;
var mapAccumEffect2 = mapAccumEffect;
var mapBoth6 = mapBoth5;
var mapChunks2 = mapChunks;
var mapChunksEffect2 = mapChunksEffect;
var mapConcat2 = mapConcat;
var mapConcatChunk2 = mapConcatChunk;
var mapConcatChunkEffect2 = mapConcatChunkEffect;
var mapConcatEffect2 = mapConcatEffect;
var mapEffect4 = mapEffectOptions;
var mapError7 = mapError6;
var mapErrorCause5 = mapErrorCause4;
var merge10 = merge9;
var mergeAll7 = mergeAll6;
var mergeWith3 = mergeWith2;
var mergeEither2 = mergeEither;
var mergeLeft2 = mergeLeft;
var mergeRight2 = mergeRight;
var mkString3 = mkString2;
var never5 = never4;
var onError4 = onError3;
var onDone2 = onDone;
var orDie6 = orDie5;
var orDieWith5 = orDieWith4;
var orElse9 = orElse8;
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
var provideContext5 = provideContext4;
var provideLayer2 = provideLayer;
var provideService6 = provideService5;
var provideServiceEffect4 = provideServiceEffect3;
var provideServiceStream2 = provideServiceStream;
var mapInputContext5 = mapInputContext4;
var provideSomeLayer3 = provideSomeLayer2;
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
var retry5 = retry4;
var run6 = run3;
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
var sliding5 = sliding4;
var slidingSize2 = slidingSize;
var some7 = some6;
var someOrElse2 = someOrElse;
var someOrFail2 = someOrFail;
var split4 = split3;
var splitOnChunk2 = splitOnChunk;
var splitLines3 = splitLines2;
var succeed14 = succeed12;
var sync10 = sync8;
var suspend8 = suspend7;
var take7 = take6;
var takeRight4 = takeRight3;
var takeUntil4 = takeUntil3;
var takeUntilEffect2 = takeUntilEffect;
var takeWhile6 = takeWhile5;
var tap7 = tap6;
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
var transduce2 = transduce;
var unfold4 = unfold3;
var unfoldChunk2 = unfoldChunk;
var unfoldChunkEffect2 = unfoldChunkEffect;
var unfoldEffect2 = unfoldEffect;
var unit8 = unit7;
var unwrap3 = unwrap2;
var unwrapScoped6 = unwrapScoped5;
var updateService4 = updateService3;
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
var zipLatestWith2 = zipLatestWith;
var zipLeft8 = zipLeft6;
var zipRight11 = zipRight9;
var zipWith11 = zipWith10;
var zipWithChunks2 = zipWithChunks;
var zipWithNext2 = zipWithNext;
var zipWithPrevious2 = zipWithPrevious;
var zipWithPreviousAndNext2 = zipWithPreviousAndNext;
var zipWithIndex2 = zipWithIndex;
var Do5 = Do4;
var bind5 = bind4;
var bindEffect2 = bindEffect;
var bindTo5 = bindTo4;
var let_5 = let_4;
var decodeText2 = decodeText;
var encodeText2 = encodeText;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/Secret.js
var isSecret2 = isSecret;
var fromString4 = fromString3;
var value2 = value;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/SynchronizedRef.js
var SynchronizedRefTypeId = SynchronizedTypeId;

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/internal/subscriptionRef.js
var SubscriptionRefSymbolKey = "effect/SubscriptionRef";
var SubscriptionRefTypeId = /* @__PURE__ */ Symbol.for(SubscriptionRefSymbolKey);
var subscriptionRefVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
var SubscriptionRefImpl = class {
  ref;
  pubsub;
  semaphore;
  [RefTypeId2] = refVariance;
  [SynchronizedRefTypeId] = synchronizedVariance;
  [SubscriptionRefTypeId] = subscriptionRefVariance;
  constructor(ref, pubsub, semaphore) {
    this.ref = ref;
    this.pubsub = pubsub;
    this.semaphore = semaphore;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  get changes() {
    return pipe(get13(this.ref), flatMap10((a) => map16(fromPubSub(this.pubsub, {
      scoped: true
    }), (s) => concat2(make46(a), s))), this.semaphore.withPermits(1), unwrapScoped5);
  }
  modify(f) {
    return this.modifyEffect((a) => succeed8(f(a)));
  }
  modifyEffect(f) {
    return pipe(get13(this.ref), flatMap10(f), flatMap10(([b, a]) => pipe(set7(this.ref, a), as4(b), zipLeft4(publish2(this.pubsub, a)))), this.semaphore.withPermits(1));
  }
};
var get14 = (self) => get13(self.ref);
var make53 = (value3) => pipe(all4([unbounded4(), make29(value3), makeSemaphore2(1)]), map16(([pubsub, ref, semaphore]) => new SubscriptionRefImpl(ref, pubsub, semaphore)));

// ../../node_modules/.pnpm/effect@2.4.15/node_modules/effect/dist/esm/SubscriptionRef.js
var get15 = get14;
var make54 = make53;
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
var Class5 = (layer3) => class extends EffectClass {
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
      runFork(close(this.scope, unit3));
      this.scope = void 0;
    }
  }
};
var addCommand = (command) => gen3(function* (_) {
  const plugin = yield* _(Plugin2);
  const runtime6 = yield* _(runtime4());
  const run8 = yield* _(makeRuntime());
  const runSync3 = runSync2(runtime6);
  plugin.addCommand(
    command.check ? {
      ...command,
      checkCallback(checking) {
        const canRun = runSync3(command.check);
        if (canRun && !checking) {
          run8(command.run);
        }
        return canRun;
      }
    } : {
      ...command,
      callback() {
        run8(command.run);
      }
    }
  );
});
map16(
  Plugin2,
  (_) => _.app.workspace
);

// ../effect-obsidian/src/Identifier.ts
var make55 = () => {
  const t = [];
  for (let n = 0; n < 16; n++) {
    t.push((16 * Math.random() | 0).toString(16));
  }
  return t.join("");
};

// ../effect-obsidian/src/Canvas.ts
var Canvas = GenericTag("effect-obsidian/Canvas");
var get16 = map16(
  Plugin2,
  (_) => fromNullable(
    _.app.workspace.getActiveViewOfType(Obsidian2__namespace.ItemView)
  ).pipe(
    filter((_2) => _2.getViewType() === "canvas"),
    map((_2) => _2.canvas)
  )
);
var addCommand2 = (command) => addCommand({
  ...command,
  check: flatMap10(Plugin2, (plugin) => {
    const view = plugin.app.workspace.getActiveViewOfType(Obsidian2__namespace.ItemView);
    const isCanvas = view?.getViewType() === "canvas";
    return isCanvas && command.check ? provideService2(command.check, Canvas, view.canvas) : succeed8(isCanvas);
  }),
  run: flatMap10(Plugin2, (plugin) => command.run.pipe(
    provideService2(
      Canvas,
      plugin.app.workspace.getActiveViewOfType(Obsidian2__namespace.ItemView).canvas
    )
  ))
});
var createEdge = (options) => andThen5(Canvas, (canvas) => {
  const data2 = canvas.getData();
  canvas.importData({
    edges: [
      ...data2.edges,
      {
        id: make55(),
        fromNode: options.from.id,
        fromSide: options.fromSide ?? "right",
        toNode: options.to.id,
        toSide: options.toSide ?? "left"
      }
    ],
    nodes: data2.nodes
  });
});
var selectedNode = gen3(function* (_) {
  const canvas = yield* _(Canvas);
  return pipe(fromIterable2(canvas.selection), head);
});
var onActive = (effect3) => gen3(function* (_) {
  const set10 = yield* _(make49());
  yield* _(
    get16,
    zip6(size15(set10)),
    flatMap10(
      ([_2, size16]) => match(_2, {
        onNone: () => size16 > 0 ? clear3(set10) : unit5,
        onSome: (canvas) => size16 === 0 ? effect3.pipe(
          zipRight5(never3),
          scoped2,
          provideService2(Canvas, canvas),
          run5(set10)
        ) : unit5
      })
    ),
    schedule(spaced2(2e3)),
    forkScoped2
  );
});
var nodeChanges = (canvas) => sync4(() => canvas.getData().nodes.length).pipe(
  repeatEffect2,
  schedule3(spaced2(50)),
  changes2,
  drop4(1)
);

// ../effect-obsidian/src/Canvas/Node.ts
var yOrder = struct({
  y: number3
});
var parent = (node) => gen3(function* (_) {
  const canvas = yield* _(Canvas);
  return pipe(
    canvas.getEdgesForNode(node),
    findFirst((edge) => edge.to.node.id === node.id),
    map((_2) => _2.from.node)
  );
});
var children2 = (node) => gen3(function* (_) {
  const canvas = yield* _(Canvas);
  return childrenFromEdges(node, canvas.getEdgesForNode(node));
});
var childrenFromEdges = (node, edges, leftToRight = false) => pipe(
  filter3(edges, (_) => _.from.node.id === node.id),
  leftToRight ? filter3(
    (_) => _.from.side === "right" && _.to.side === "left"
  ) : identity,
  map3((_) => _.to.node),
  sort(yOrder)
);
var siblings = (node) => gen3(function* (_) {
  const canvas = yield* _(Canvas);
  const parentNode = yield* _(parent(node));
  return parentNode.pipe(
    map(
      (parent2) => pipe(
        canvas.getEdgesForNode(parent2),
        filter3((_2) => _2.from.node.id === parent2.id),
        map3((_2) => _2.to.node),
        sort(yOrder)
      )
    ),
    getOrElse(() => [])
  );
});

// ../effect-obsidian/src/Patch.ts
var prototype = (name, self, method, patch9) => suspend3(() => {
  const symbol5 = Symbol.for(`effect-obsidian/Patch/${name}`);
  const proto13 = Object.getPrototypeOf(self);
  if (symbol5 in proto13 && proto13[symbol5] === true) {
    return unit5;
  }
  const original = proto13[method];
  return acquireRelease2(
    sync4(() => {
      proto13[method] = patch9(original);
      proto13[symbol5] = true;
    }),
    () => sync4(() => {
      proto13[method] = original;
      proto13[symbol5] = false;
    })
  );
});

// ../../node_modules/.pnpm/@effect+schema@0.64.16_effect@2.4.15_fast-check@3.17.1/node_modules/@effect/schema/dist/esm/internal/util.js
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
  let done9 = false;
  let a;
  return () => {
    if (done9) {
      return a;
    }
    a = f();
    done9 = true;
    return a;
  };
};
var formatUnknown = (u) => {
  if (isString(u)) {
    return JSON.stringify(u);
  } else if (isNumber(u) || u == null || isBoolean(u) || isSymbol(u) || isDate(u)) {
    return String(u);
  } else if (isBigInt(u)) {
    return String(u) + "n";
  } else if (!Array.isArray(u) && hasProperty(u, "toString") && isFunction2(u["toString"]) && u["toString"] !== Object.prototype.toString) {
    return u["toString"]();
  }
  try {
    JSON.stringify(u);
    if (Array.isArray(u)) {
      return `[${u.map(formatUnknown).join(",")}]`;
    } else {
      return `{${ownKeys(u).map((k) => `${isString(k) ? JSON.stringify(k) : String(k)}:${formatUnknown(u[k])}`).join(",")}}`;
    }
  } catch (e) {
    return String(u);
  }
};

// ../../node_modules/.pnpm/@effect+schema@0.64.16_effect@2.4.15_fast-check@3.17.1/node_modules/@effect/schema/dist/esm/AST.js
var BrandAnnotationId = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Brand");
var TypeAnnotationId = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Type");
var MessageAnnotationId = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Message");
var IdentifierAnnotationId = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Identifier");
var TitleAnnotationId = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Title");
var DescriptionAnnotationId = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Description");
var ExamplesAnnotationId = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Examples");
var DefaultAnnotationId = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Default");
var JSONSchemaAnnotationId = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/JSONSchema");
var DocumentationAnnotationId = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Documentation");
var ConcurrencyAnnotationId = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Concurrency");
var BatchingAnnotationId = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Batching");
var SurrogateAnnotationId = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Surrogate");
var getAnnotation = /* @__PURE__ */ dual(2, (annotated, key) => Object.prototype.hasOwnProperty.call(annotated.annotations, key) ? some2(annotated.annotations[key]) : none2());
var getBrandAnnotation = /* @__PURE__ */ getAnnotation(BrandAnnotationId);
var getMessageAnnotation = /* @__PURE__ */ getAnnotation(MessageAnnotationId);
var getTitleAnnotation = /* @__PURE__ */ getAnnotation(TitleAnnotationId);
var getIdentifierAnnotation = /* @__PURE__ */ getAnnotation(IdentifierAnnotationId);
var getDescriptionAnnotation = /* @__PURE__ */ getAnnotation(DescriptionAnnotationId);
var getConcurrencyAnnotation = /* @__PURE__ */ getAnnotation(ConcurrencyAnnotationId);
var getBatchingAnnotation = /* @__PURE__ */ getAnnotation(BatchingAnnotationId);
var getSurrogateAnnotation = /* @__PURE__ */ getAnnotation(SurrogateAnnotationId);
var JSONIdentifierAnnotationId = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/JSONIdentifier");
var getJSONIdentifierAnnotation = /* @__PURE__ */ getAnnotation(JSONIdentifierAnnotationId);
var Declaration = class {
  typeParameters;
  decodeUnknown;
  encodeUnknown;
  annotations;
  /**
   * @since 1.0.0
   */
  _tag = "Declaration";
  constructor(typeParameters, decodeUnknown3, encodeUnknown3, annotations4 = {}) {
    this.typeParameters = typeParameters;
    this.decodeUnknown = decodeUnknown3;
    this.encodeUnknown = encodeUnknown3;
    this.annotations = annotations4;
  }
  /**
   * @since 1.0.0
   */
  toString(verbose = false) {
    return getOrElse(getExpected(this, verbose), () => "<declaration schema>");
  }
  /**
   * @since 1.0.0
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
   * @since 1.0.0
   */
  _tag = "Literal";
  constructor(literal2, annotations4 = {}) {
    this.literal = literal2;
    this.annotations = annotations4;
  }
  /**
   * @since 1.0.0
   */
  toString(verbose = false) {
    return getOrElse(getExpected(this, verbose), () => formatUnknown(this.literal));
  }
  /**
   * @since 1.0.0
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
var $null = /* @__PURE__ */ new Literal(null, {
  [IdentifierAnnotationId]: "null"
});
var UniqueSymbol = class {
  symbol;
  annotations;
  /**
   * @since 1.0.0
   */
  _tag = "UniqueSymbol";
  constructor(symbol5, annotations4 = {}) {
    this.symbol = symbol5;
    this.annotations = annotations4;
  }
  /**
   * @since 1.0.0
   */
  toString(verbose = false) {
    return getOrElse(getExpected(this, verbose), () => formatUnknown(this.symbol));
  }
  /**
   * @since 1.0.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      symbol: String(this.symbol),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var isUniqueSymbol = /* @__PURE__ */ createASTGuard("UniqueSymbol");
var UndefinedKeyword = class {
  annotations;
  /**
   * @since 1.0.0
   */
  _tag = "UndefinedKeyword";
  constructor(annotations4 = {}) {
    this.annotations = annotations4;
  }
  /**
   * @since 1.0.0
   */
  toString(verbose = false) {
    return formatKeyword(this, verbose);
  }
  /**
   * @since 1.0.0
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
var VoidKeyword = class {
  annotations;
  /**
   * @since 1.0.0
   */
  _tag = "VoidKeyword";
  constructor(annotations4 = {}) {
    this.annotations = annotations4;
  }
  /**
   * @since 1.0.0
   */
  toString(verbose = false) {
    return formatKeyword(this, verbose);
  }
  /**
   * @since 1.0.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var voidKeyword = /* @__PURE__ */ new VoidKeyword({
  [TitleAnnotationId]: "void"
});
var NeverKeyword = class {
  annotations;
  /**
   * @since 1.0.0
   */
  _tag = "NeverKeyword";
  constructor(annotations4 = {}) {
    this.annotations = annotations4;
  }
  /**
   * @since 1.0.0
   */
  toString(verbose = false) {
    return formatKeyword(this, verbose);
  }
  /**
   * @since 1.0.0
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
   * @since 1.0.0
   */
  _tag = "UnknownKeyword";
  constructor(annotations4 = {}) {
    this.annotations = annotations4;
  }
  /**
   * @since 1.0.0
   */
  toString(verbose = false) {
    return formatKeyword(this, verbose);
  }
  /**
   * @since 1.0.0
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
   * @since 1.0.0
   */
  _tag = "AnyKeyword";
  constructor(annotations4 = {}) {
    this.annotations = annotations4;
  }
  /**
   * @since 1.0.0
   */
  toString(verbose = false) {
    return formatKeyword(this, verbose);
  }
  /**
   * @since 1.0.0
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
   * @since 1.0.0
   */
  _tag = "StringKeyword";
  constructor(annotations4 = {}) {
    this.annotations = annotations4;
  }
  /**
   * @since 1.0.0
   */
  toString(verbose = false) {
    return formatKeyword(this, verbose);
  }
  /**
   * @since 1.0.0
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
var NumberKeyword = class {
  annotations;
  /**
   * @since 1.0.0
   */
  _tag = "NumberKeyword";
  constructor(annotations4 = {}) {
    this.annotations = annotations4;
  }
  /**
   * @since 1.0.0
   */
  toString(verbose = false) {
    return formatKeyword(this, verbose);
  }
  /**
   * @since 1.0.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var numberKeyword = /* @__PURE__ */ new NumberKeyword({
  [TitleAnnotationId]: "number",
  [DescriptionAnnotationId]: "a number"
});
var isNumberKeyword = /* @__PURE__ */ createASTGuard("NumberKeyword");
var BooleanKeyword = class {
  annotations;
  /**
   * @since 1.0.0
   */
  _tag = "BooleanKeyword";
  constructor(annotations4 = {}) {
    this.annotations = annotations4;
  }
  /**
   * @since 1.0.0
   */
  toString(verbose = false) {
    return formatKeyword(this, verbose);
  }
  /**
   * @since 1.0.0
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
var BigIntKeyword = class {
  annotations;
  /**
   * @since 1.0.0
   */
  _tag = "BigIntKeyword";
  constructor(annotations4 = {}) {
    this.annotations = annotations4;
  }
  /**
   * @since 1.0.0
   */
  toString(verbose = false) {
    return formatKeyword(this, verbose);
  }
  /**
   * @since 1.0.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var bigIntKeyword = /* @__PURE__ */ new BigIntKeyword({
  [TitleAnnotationId]: "bigint",
  [DescriptionAnnotationId]: "a bigint"
});
var SymbolKeyword = class {
  annotations;
  /**
   * @since 1.0.0
   */
  _tag = "SymbolKeyword";
  constructor(annotations4 = {}) {
    this.annotations = annotations4;
  }
  /**
   * @since 1.0.0
   */
  toString(verbose = false) {
    return formatKeyword(this, verbose);
  }
  /**
   * @since 1.0.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var symbolKeyword = /* @__PURE__ */ new SymbolKeyword({
  [TitleAnnotationId]: "symbol",
  [DescriptionAnnotationId]: "a symbol"
});
var isSymbolKeyword = /* @__PURE__ */ createASTGuard("SymbolKeyword");
var ObjectKeyword = class {
  annotations;
  /**
   * @since 1.0.0
   */
  _tag = "ObjectKeyword";
  constructor(annotations4 = {}) {
    this.annotations = annotations4;
  }
  /**
   * @since 1.0.0
   */
  toString(verbose = false) {
    return formatKeyword(this, verbose);
  }
  /**
   * @since 1.0.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var objectKeyword = /* @__PURE__ */ new ObjectKeyword({
  [IdentifierAnnotationId]: "object",
  [TitleAnnotationId]: "object",
  [DescriptionAnnotationId]: "an object in the TypeScript meaning, i.e. the `object` type"
});
var Enums = class {
  enums;
  annotations;
  /**
   * @since 1.0.0
   */
  _tag = "Enums";
  constructor(enums2, annotations4 = {}) {
    this.enums = enums2;
    this.annotations = annotations4;
  }
  /**
   * @since 1.0.0
   */
  toString(verbose = false) {
    return getOrElse(getExpected(this, verbose), () => `<enum ${this.enums.length} value(s): ${this.enums.map((_, value3) => JSON.stringify(value3)).join(" | ")}>`);
  }
  /**
   * @since 1.0.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      enums: this.enums,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var isEnums = /* @__PURE__ */ createASTGuard("Enums");
var TemplateLiteralSpan = class {
  type;
  literal;
  constructor(type, literal2) {
    this.type = type;
    this.literal = literal2;
  }
  /**
   * @since 1.0.0
   */
  toString() {
    switch (this.type._tag) {
      case "StringKeyword":
        return "${string}";
      case "NumberKeyword":
        return "${number}";
    }
  }
  /**
   * @since 1.0.0
   */
  toJSON() {
    return {
      type: this.type.toJSON(),
      literal: this.literal
    };
  }
};
var TemplateLiteral = class _TemplateLiteral {
  head;
  spans;
  annotations;
  static make = (head7, spans, annotations4 = {}) => isNonEmptyReadonlyArray(spans) ? new _TemplateLiteral(head7, spans, annotations4) : new Literal(head7);
  /**
   * @since 1.0.0
   */
  _tag = "TemplateLiteral";
  constructor(head7, spans, annotations4 = {}) {
    this.head = head7;
    this.spans = spans;
    this.annotations = annotations4;
  }
  /**
   * @since 1.0.0
   */
  toString(verbose = false) {
    return getOrElse(getExpected(this, verbose), () => formatTemplateLiteral(this));
  }
  /**
   * @since 1.0.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      head: this.head,
      spans: this.spans.map((span4) => span4.toJSON()),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var formatTemplateLiteral = (ast) => "`" + ast.head + ast.spans.map((span4) => String(span4) + span4.literal).join("") + "`";
var isTemplateLiteral = /* @__PURE__ */ createASTGuard("TemplateLiteral");
var Element = class {
  type;
  isOptional;
  constructor(type, isOptional) {
    this.type = type;
    this.isOptional = isOptional;
  }
  /**
   * @since 1.0.0
   */
  toJSON() {
    return {
      type: this.type.toJSON(),
      isOptional: this.isOptional
    };
  }
  /**
   * @since 1.0.0
   */
  toString() {
    return String(this.type) + (this.isOptional ? "?" : "");
  }
};
var TupleType = class {
  elements;
  rest;
  isReadonly;
  annotations;
  /**
   * @since 1.0.0
   */
  _tag = "TupleType";
  constructor(elements, rest, isReadonly, annotations4 = {}) {
    this.elements = elements;
    this.rest = rest;
    this.isReadonly = isReadonly;
    this.annotations = annotations4;
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
      throw new Error("A required element cannot follow an optional element. ts(1257)");
    }
  }
  /**
   * @since 1.0.0
   */
  toString(verbose = false) {
    return getOrElse(getExpected(this, verbose), () => formatTuple(this));
  }
  /**
   * @since 1.0.0
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
    onNonEmpty: (head7, tail2) => {
      const formattedHead = String(head7);
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
var PropertySignature = class {
  name;
  type;
  isOptional;
  isReadonly;
  annotations;
  constructor(name, type, isOptional, isReadonly, annotations4 = {}) {
    this.name = name;
    this.type = type;
    this.isOptional = isOptional;
    this.isReadonly = isReadonly;
    this.annotations = annotations4;
  }
  /**
   * @since 1.0.0
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
   * @since 1.0.0
   */
  parameter;
  constructor(parameter, type, isReadonly) {
    this.type = type;
    this.isReadonly = isReadonly;
    if (isParameter(parameter)) {
      this.parameter = parameter;
    } else {
      throw new Error("An index signature parameter type must be `string`, `symbol`, a template literal type or a refinement of the previous types");
    }
  }
  /**
   * @since 1.0.0
   */
  toJSON() {
    return {
      parameter: this.parameter.toJSON(),
      type: this.type.toJSON(),
      isReadonly: this.isReadonly
    };
  }
};
var getDuplicatePropertySignatureErrorMessage = (name) => `Duplicate property signature ${formatUnknown(name)}`;
var getDuplicateIndexSignatureErrorMessage = (name) => `Duplicate index signature for type \`${name}\``;
var TypeLiteral = class {
  annotations;
  /**
   * @since 1.0.0
   */
  _tag = "TypeLiteral";
  /**
   * @since 1.0.0
   */
  propertySignatures;
  /**
   * @since 1.0.0
   */
  indexSignatures;
  constructor(propertySignatures, indexSignatures, annotations4 = {}) {
    this.annotations = annotations4;
    const keys6 = {};
    for (let i = 0; i < propertySignatures.length; i++) {
      const name = propertySignatures[i].name;
      if (Object.prototype.hasOwnProperty.call(keys6, name)) {
        throw new Error(getDuplicatePropertySignatureErrorMessage(name));
      }
      keys6[name] = null;
    }
    const parameters = {
      string: false,
      symbol: false
    };
    for (let i = 0; i < indexSignatures.length; i++) {
      const parameter = getParameterBase(indexSignatures[i].parameter);
      if (isStringKeyword(parameter)) {
        if (parameters.string) {
          throw new Error(getDuplicateIndexSignatureErrorMessage("string"));
        }
        parameters.string = true;
      } else if (isSymbolKeyword(parameter)) {
        if (parameters.symbol) {
          throw new Error(getDuplicateIndexSignatureErrorMessage("symbol"));
        }
        parameters.symbol = true;
      }
    }
    this.propertySignatures = sortPropertySignatures(propertySignatures);
    this.indexSignatures = sortIndexSignatures(indexSignatures);
  }
  /**
   * @since 1.0.0
   */
  toString(verbose = false) {
    return getOrElse(getExpected(this, verbose), () => formatTypeLiteral(this));
  }
  /**
   * @since 1.0.0
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
var formatTypeLiteral = (ast) => {
  const formattedPropertySignatures = ast.propertySignatures.map((ps) => String(ps.name) + (ps.isOptional ? "?" : "") + ": " + ps.type).join("; ");
  if (ast.indexSignatures.length > 0) {
    const formattedIndexSignatures = ast.indexSignatures.map((is2) => `[x: ${getParameterBase(is2.parameter)}]: ${is2.type}`).join("; ");
    if (ast.propertySignatures.length > 0) {
      return `{ ${formattedPropertySignatures}; ${formattedIndexSignatures} }`;
    } else {
      return `{ ${formattedIndexSignatures} }`;
    }
  } else {
    if (ast.propertySignatures.length > 0) {
      return `{ ${formattedPropertySignatures} }`;
    } else {
      return "{}";
    }
  }
};
var isTypeLiteral = /* @__PURE__ */ createASTGuard("TypeLiteral");
var removeNevers = (candidates) => candidates.filter((ast) => !(ast === neverKeyword));
var sortCandidates = /* @__PURE__ */ sort(/* @__PURE__ */ mapInput2(Order4, (ast) => {
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
var flatten14 = (candidates) => flatMap2(candidates, (ast) => isUnion(ast) ? flatten14(ast.types) : [ast]);
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
  static make = (candidates, annotations4) => {
    const types = [];
    const memo = /* @__PURE__ */ new Set();
    for (let i = 0; i < candidates.length; i++) {
      const ast = candidates[i];
      if (ast === neverKeyword || memo.has(ast)) {
        continue;
      }
      memo.add(ast);
      types.push(ast);
    }
    return _Union.union(types, annotations4);
  };
  /** @internal */
  static members = (candidates, annotations4) => {
    return _Union.union(removeNevers(candidates), annotations4);
  };
  /** @internal */
  static unify = (candidates, annotations4) => {
    return _Union.union(unify(flatten14(candidates)), annotations4);
  };
  /** @internal */
  static union = (types, annotations4) => {
    return isMembers(types) ? new _Union(types, annotations4) : types.length === 1 ? types[0] : neverKeyword;
  };
  /**
   * @since 1.0.0
   */
  _tag = "Union";
  constructor(types, annotations4 = {}) {
    this.types = types;
    this.annotations = annotations4;
  }
  /**
   * @since 1.0.0
   */
  toString(verbose = false) {
    return getOrElse(getExpected(this, verbose), () => this.types.map(String).join(" | "));
  }
  /**
   * @since 1.0.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      types: this.types.map((ast) => ast.toJSON()),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
var mapMembers = (members, f) => members.map(f);
var isMembers = (as9) => as9.length > 1;
var isUnion = /* @__PURE__ */ createASTGuard("Union");
var toJSONMemoMap = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("@effect/schema/AST/toJSONMemoMap"), () => /* @__PURE__ */ new WeakMap());
var Suspend = class {
  f;
  annotations;
  /**
   * @since 1.0.0
   */
  _tag = "Suspend";
  constructor(f, annotations4 = {}) {
    this.f = f;
    this.annotations = annotations4;
    this.f = memoizeThunk(f);
  }
  /**
   * @since 1.0.0
   */
  toString(verbose = false) {
    return getExpected(this, verbose).pipe(orElse(() => flatMap(liftThrowable(this.f)(), (ast) => getExpected(ast, verbose))), getOrElse(() => "<suspended schema>"));
  }
  /**
   * @since 1.0.0
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
   * @since 1.0.0
   */
  _tag = "Refinement";
  constructor(from, filter13, annotations4 = {}) {
    this.from = from;
    this.filter = filter13;
    this.annotations = annotations4;
  }
  /**
   * @since 1.0.0
   */
  toString(verbose = false) {
    return getOrElse(getExpected(this, verbose), () => "<refinement schema>");
  }
  /**
   * @since 1.0.0
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
   * @since 1.0.0
   */
  _tag = "Transformation";
  constructor(from, to, transformation, annotations4 = {}) {
    this.from = from;
    this.to = to;
    this.transformation = transformation;
    this.annotations = annotations4;
  }
  /**
   * @since 1.0.0
   */
  toString(verbose = false) {
    return getOrElse(getExpected(this, verbose), () => `(${String(this.from)} <-> ${String(this.to)})`);
  }
  /**
   * @since 1.0.0
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
var isTransform = /* @__PURE__ */ createASTGuard("Transformation");
var FinalTransformation = class {
  decode;
  encode;
  /**
   * @since 1.0.0
   */
  _tag = "FinalTransformation";
  constructor(decode6, encode5) {
    this.decode = decode6;
    this.encode = encode5;
  }
};
var createTransformationGuard = (tag2) => (ast) => ast._tag === tag2;
var ComposeTransformation = class {
  /**
   * @since 1.0.0
   */
  _tag = "ComposeTransformation";
};
var composeTransformation = /* @__PURE__ */ new ComposeTransformation();
var PropertySignatureTransformation = class {
  from;
  to;
  decode;
  encode;
  constructor(from, to, decode6, encode5) {
    this.from = from;
    this.to = to;
    this.decode = decode6;
    this.encode = encode5;
  }
};
var getDuplicatePropertySignatureTransformationErrorMessage = (name) => `Duplicate property signature transformation ${formatUnknown(name)}`;
var TypeLiteralTransformation = class {
  propertySignatureTransformations;
  /**
   * @since 1.0.0
   */
  _tag = "TypeLiteralTransformation";
  constructor(propertySignatureTransformations) {
    this.propertySignatureTransformations = propertySignatureTransformations;
    const fromKeys = {};
    const toKeys = {};
    for (const pst of propertySignatureTransformations) {
      const from = pst.from;
      if (fromKeys[from]) {
        throw new Error(getDuplicatePropertySignatureTransformationErrorMessage(from));
      }
      fromKeys[from] = true;
      const to = pst.to;
      if (toKeys[to]) {
        throw new Error(getDuplicatePropertySignatureTransformationErrorMessage(to));
      }
      toKeys[to] = true;
    }
  }
};
var isTypeLiteralTransformation = /* @__PURE__ */ createTransformationGuard("TypeLiteralTransformation");
var annotations = (ast, annotations4) => {
  const d = Object.getOwnPropertyDescriptors(ast);
  d.annotations.value = {
    ...ast.annotations,
    ...annotations4
  };
  return Object.create(Object.getPrototypeOf(ast), d);
};
var keyof = (ast) => Union.unify(_keyof(ast));
var specialCharsRegex = /[.*+?^${}()|[\]\\]/g;
var escapeSpecialChars = (s) => specialCharsRegex.test(s) ? s.replace(specialCharsRegex, "\\$&") : s;
var STRING_KEYWORD_PATTERN = ".*";
var NUMBER_KEYWORD_PATTERN = "[+-]?\\d*\\.?\\d+(?:[Ee][+-]?\\d+)?";
var getTemplateLiteralRegExp = (ast) => {
  let pattern2 = `^${escapeSpecialChars(ast.head)}`;
  for (const span4 of ast.spans) {
    if (isStringKeyword(span4.type)) {
      pattern2 += STRING_KEYWORD_PATTERN;
    } else if (isNumberKeyword(span4.type)) {
      pattern2 += NUMBER_KEYWORD_PATTERN;
    }
    pattern2 += escapeSpecialChars(span4.literal);
  }
  pattern2 += "$";
  return new RegExp(pattern2);
};
var getNumberIndexedAccess = (ast) => {
  switch (ast._tag) {
    case "TupleType": {
      let hasOptional = false;
      let out = [];
      for (const e of ast.elements) {
        if (e.isOptional) {
          hasOptional = true;
        }
        out.push(e.type);
      }
      if (hasOptional) {
        out.push(undefinedKeyword);
      }
      out = out.concat(ast.rest);
      return Union.make(out);
    }
    case "Refinement":
      return getNumberIndexedAccess(ast.from);
    case "Union":
      return Union.make(ast.types.map(getNumberIndexedAccess));
    case "Suspend":
      return getNumberIndexedAccess(ast.f());
  }
  throw new Error(`getNumberIndexedAccess: unsupported schema (${ast})`);
};
var getPropertyKeyIndexedAccess = (ast, name) => {
  switch (ast._tag) {
    case "Declaration": {
      const annotation = getSurrogateAnnotation(ast);
      if (isSome2(annotation)) {
        return getPropertyKeyIndexedAccess(annotation.value, name);
      }
      break;
    }
    case "TypeLiteral": {
      const ops = findFirst(ast.propertySignatures, (ps) => ps.name === name);
      if (isSome2(ops)) {
        return ops.value;
      } else {
        if (isString(name)) {
          for (const is2 of ast.indexSignatures) {
            const parameterBase = getParameterBase(is2.parameter);
            switch (parameterBase._tag) {
              case "TemplateLiteral": {
                const regex = getTemplateLiteralRegExp(parameterBase);
                if (regex.test(name)) {
                  return new PropertySignature(name, is2.type, false, false);
                }
                break;
              }
              case "StringKeyword":
                return new PropertySignature(name, is2.type, false, false);
            }
          }
        } else if (isSymbol(name)) {
          for (const is2 of ast.indexSignatures) {
            const parameterBase = getParameterBase(is2.parameter);
            if (isSymbolKeyword(parameterBase)) {
              return new PropertySignature(name, is2.type, false, false);
            }
          }
        }
      }
      break;
    }
    case "Union":
      return new PropertySignature(name, Union.make(ast.types.map((ast2) => getPropertyKeyIndexedAccess(ast2, name).type)), false, true);
    case "Suspend":
      return getPropertyKeyIndexedAccess(ast.f(), name);
  }
  return new PropertySignature(name, neverKeyword, false, true);
};
var getPropertyKeys = (ast) => {
  switch (ast._tag) {
    case "Declaration": {
      const annotation = getSurrogateAnnotation(ast);
      if (isSome2(annotation)) {
        return getPropertyKeys(annotation.value);
      }
      break;
    }
    case "TypeLiteral":
      return ast.propertySignatures.map((ps) => ps.name);
    case "Suspend":
      return getPropertyKeys(ast.f());
    case "Union":
      return ast.types.slice(1).reduce((out, ast2) => intersection2(out, getPropertyKeys(ast2)), getPropertyKeys(ast.types[0]));
    case "Transformation":
      return getPropertyKeys(ast.to);
  }
  return [];
};
var record = (key, value3) => {
  const propertySignatures = [];
  const indexSignatures = [];
  const go5 = (key2) => {
    switch (key2._tag) {
      case "NeverKeyword":
        break;
      case "StringKeyword":
      case "SymbolKeyword":
      case "TemplateLiteral":
      case "Refinement":
        indexSignatures.push(new IndexSignature(key2, value3, true));
        break;
      case "Literal":
        if (isString(key2.literal) || isNumber(key2.literal)) {
          propertySignatures.push(new PropertySignature(key2.literal, value3, false, true));
        } else {
          throw new Error(`createRecord: unsupported literal (${formatUnknown(key2.literal)})`);
        }
        break;
      case "UniqueSymbol":
        propertySignatures.push(new PropertySignature(key2.symbol, value3, false, true));
        break;
      case "Union":
        key2.types.forEach(go5);
        break;
      default:
        throw new Error(`createRecord: unsupported key schema (${key2})`);
    }
  };
  go5(key);
  return {
    propertySignatures,
    indexSignatures
  };
};
var pick2 = (ast, keys6) => {
  if (isTransform(ast)) {
    switch (ast.transformation._tag) {
      case "ComposeTransformation":
        return new Transformation(pick2(ast.from, keys6), pick2(ast.to, keys6), composeTransformation);
      case "TypeLiteralTransformation": {
        const propertySignatureTransformations = ast.transformation.propertySignatureTransformations.filter((t) => keys6.includes(t.to));
        return new Transformation(pick2(ast.from, keys6), pick2(ast.to, keys6), isNonEmptyReadonlyArray(propertySignatureTransformations) ? new TypeLiteralTransformation(propertySignatureTransformations) : composeTransformation);
      }
      case "FinalTransformation": {
        const annotation = getSurrogateAnnotation(ast);
        if (isSome2(annotation)) {
          return pick2(annotation.value, keys6);
        }
        throw new Error("cannot handle this kind of transformation");
      }
    }
  }
  return new TypeLiteral(keys6.map((key) => getPropertyKeyIndexedAccess(ast, key)), []);
};
var omit2 = (ast, keys6) => pick2(ast, getPropertyKeys(ast).filter((name) => !keys6.includes(name)));
var orUndefined = (ast) => Union.make([ast, undefinedKeyword]);
var partial = (ast, options) => {
  const exact = options?.exact === true;
  switch (ast._tag) {
    case "TupleType":
      return new TupleType(ast.elements.map((e) => new Element(exact ? e.type : orUndefined(e.type), true)), match3(ast.rest, {
        onEmpty: () => ast.rest,
        onNonEmpty: (rest) => [Union.make([...rest, undefinedKeyword])]
      }), ast.isReadonly);
    case "TypeLiteral":
      return new TypeLiteral(ast.propertySignatures.map((ps) => new PropertySignature(ps.name, exact ? ps.type : orUndefined(ps.type), true, ps.isReadonly, ps.annotations)), ast.indexSignatures.map((is2) => new IndexSignature(is2.parameter, orUndefined(is2.type), is2.isReadonly)));
    case "Union":
      return Union.make(ast.types.map((member) => partial(member, options)));
    case "Suspend":
      return new Suspend(() => partial(ast.f(), options));
    case "Declaration":
      throw new Error("`partial` cannot handle declarations");
    case "Refinement":
      throw new Error("`partial` cannot handle refinements");
    case "Transformation":
      throw new Error("`partial` cannot handle transformations");
  }
  return ast;
};
var required = (ast) => {
  switch (ast._tag) {
    case "TupleType":
      return new TupleType(ast.elements.map((e) => new Element(e.type, false)), ast.rest, ast.isReadonly);
    case "TypeLiteral":
      return new TypeLiteral(ast.propertySignatures.map((f) => new PropertySignature(f.name, f.type, false, f.isReadonly, f.annotations)), ast.indexSignatures);
    case "Union":
      return Union.make(ast.types.map((member) => required(member)));
    case "Suspend":
      return new Suspend(() => required(ast.f()));
    case "Declaration":
      throw new Error("`required` cannot handle declarations");
    case "Refinement":
      throw new Error("`required` cannot handle refinements");
    case "Transformation":
      throw new Error("`required` cannot handle transformations");
  }
  return ast;
};
var mutable = (ast) => {
  switch (ast._tag) {
    case "TupleType":
      return ast.isReadonly === false ? ast : new TupleType(ast.elements, ast.rest, false, ast.annotations);
    case "TypeLiteral": {
      const propertySignatures = changeMap(ast.propertySignatures, (ps) => ps.isReadonly === false ? ps : new PropertySignature(ps.name, ps.type, ps.isOptional, false, ps.annotations));
      const indexSignatures = changeMap(ast.indexSignatures, (is2) => is2.isReadonly === false ? is2 : new IndexSignature(is2.parameter, is2.type, false));
      return propertySignatures === ast.propertySignatures && indexSignatures === ast.indexSignatures ? ast : new TypeLiteral(propertySignatures, indexSignatures, ast.annotations);
    }
    case "Union": {
      const types = changeMap(ast.types, mutable);
      return types === ast.types ? ast : Union.make(types, ast.annotations);
    }
    case "Suspend":
      return new Suspend(() => mutable(ast.f()), ast.annotations);
    case "Refinement": {
      const from = mutable(ast.from);
      return from === ast.from ? ast : new Refinement(from, ast.filter, ast.annotations);
    }
    case "Transformation": {
      const from = mutable(ast.from);
      const to = mutable(ast.to);
      return from === ast.from && to === ast.to ? ast : new Transformation(from, to, ast.transformation, ast.annotations);
    }
  }
  return ast;
};
var getCompiler = (match18) => {
  const compile2 = (ast) => match18[ast._tag](ast, compile2);
  return compile2;
};
var typeAST = (ast) => {
  switch (ast._tag) {
    case "Declaration": {
      const typeParameters = changeMap(ast.typeParameters, typeAST);
      return typeParameters === ast.typeParameters ? ast : new Declaration(typeParameters, ast.decodeUnknown, ast.encodeUnknown, ast.annotations);
    }
    case "TupleType": {
      const elements = changeMap(ast.elements, (e) => {
        const type = typeAST(e.type);
        return type === e.type ? e : new Element(type, e.isOptional);
      });
      const rest = changeMap(ast.rest, typeAST);
      return elements === ast.elements && rest === ast.rest ? ast : new TupleType(elements, rest, ast.isReadonly, ast.annotations);
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
    case "Transformation":
      return typeAST(ast.to);
  }
  return ast;
};
var getJSONIdentifier = (annotated) => orElse(getJSONIdentifierAnnotation(annotated), () => getIdentifierAnnotation(annotated));
var createJSONIdentifierAnnotation = (annotated) => match(getJSONIdentifier(annotated), {
  onNone: () => void 0,
  onSome: (identifier2) => ({
    [JSONIdentifierAnnotationId]: identifier2
  })
});
function changeMap(as9, f) {
  let changed = false;
  const out = new Array(as9.length);
  for (let i = 0; i < as9.length; i++) {
    const a = as9[i];
    const fa = f(a);
    if (fa !== a) {
      changed = true;
    }
    out[i] = fa;
  }
  return changed ? out : as9;
}
var encodedAST = (ast) => {
  switch (ast._tag) {
    case "Declaration": {
      const typeParameters = changeMap(ast.typeParameters, encodedAST);
      return typeParameters === ast.typeParameters ? ast : new Declaration(typeParameters, ast.decodeUnknown, ast.encodeUnknown, ast.annotations);
    }
    case "TupleType": {
      const elements = changeMap(ast.elements, (e) => {
        const type = encodedAST(e.type);
        return type === e.type ? e : new Element(type, e.isOptional);
      });
      const rest = changeMap(ast.rest, encodedAST);
      return elements === ast.elements && rest === ast.rest ? ast : new TupleType(elements, rest, ast.isReadonly, createJSONIdentifierAnnotation(ast));
    }
    case "TypeLiteral": {
      const propertySignatures = changeMap(ast.propertySignatures, (ps) => {
        const type = encodedAST(ps.type);
        return type === ps.type ? ps : new PropertySignature(ps.name, type, ps.isOptional, ps.isReadonly);
      });
      const indexSignatures = changeMap(ast.indexSignatures, (is2) => {
        const type = encodedAST(is2.type);
        return type === is2.type ? is2 : new IndexSignature(is2.parameter, type, is2.isReadonly);
      });
      return propertySignatures === ast.propertySignatures && indexSignatures === ast.indexSignatures ? ast : new TypeLiteral(propertySignatures, indexSignatures, createJSONIdentifierAnnotation(ast));
    }
    case "Union": {
      const types = changeMap(ast.types, encodedAST);
      return types === ast.types ? ast : Union.make(types, createJSONIdentifierAnnotation(ast));
    }
    case "Suspend":
      return new Suspend(() => encodedAST(ast.f()), createJSONIdentifierAnnotation(ast));
    case "Refinement":
    case "Transformation":
      return encodedAST(ast.from);
  }
  return ast;
};
var toJSONAnnotations = (annotations4) => {
  const out = {};
  for (const k of Object.getOwnPropertySymbols(annotations4)) {
    out[String(k)] = annotations4[k];
  }
  return out;
};
var hash2 = (ast) => string(JSON.stringify(ast, null, 2));
var getCardinality = (ast) => {
  switch (ast._tag) {
    case "NeverKeyword":
      return 0;
    case "Literal":
    case "UndefinedKeyword":
    case "VoidKeyword":
    case "UniqueSymbol":
      return 1;
    case "BooleanKeyword":
      return 2;
    case "StringKeyword":
    case "NumberKeyword":
    case "BigIntKeyword":
    case "SymbolKeyword":
      return 3;
    case "ObjectKeyword":
      return 5;
    case "UnknownKeyword":
    case "AnyKeyword":
      return 6;
    default:
      return 4;
  }
};
var sortPropertySignatures = /* @__PURE__ */ sort(/* @__PURE__ */ mapInput2(Order4, (ps) => getCardinality(ps.type)));
var sortIndexSignatures = /* @__PURE__ */ sort(/* @__PURE__ */ mapInput2(Order4, (is2) => {
  switch (getParameterBase(is2.parameter)._tag) {
    case "StringKeyword":
      return 2;
    case "SymbolKeyword":
      return 3;
    case "TemplateLiteral":
      return 1;
  }
}));
var getParameterBase = (ast) => {
  switch (ast._tag) {
    case "StringKeyword":
    case "SymbolKeyword":
    case "TemplateLiteral":
      return ast;
    case "Refinement":
      return getParameterBase(ast.from);
  }
};
var equalsTemplateLiteralSpan = /* @__PURE__ */ getEquivalence4((self, that) => self.type._tag === that.type._tag && self.literal === that.literal);
var equalsEnums = /* @__PURE__ */ getEquivalence4((self, that) => that[0] === self[0] && that[1] === self[1]);
var equals4 = (self, that) => {
  switch (self._tag) {
    case "Literal":
      return isLiteral(that) && that.literal === self.literal;
    case "UniqueSymbol":
      return isUniqueSymbol(that) && that.symbol === self.symbol;
    case "UndefinedKeyword":
    case "VoidKeyword":
    case "NeverKeyword":
    case "UnknownKeyword":
    case "AnyKeyword":
    case "StringKeyword":
    case "NumberKeyword":
    case "BooleanKeyword":
    case "BigIntKeyword":
    case "SymbolKeyword":
    case "ObjectKeyword":
      return that._tag === self._tag;
    case "TemplateLiteral":
      return isTemplateLiteral(that) && that.head === self.head && equalsTemplateLiteralSpan(that.spans, self.spans);
    case "Enums":
      return isEnums(that) && equalsEnums(that.enums, self.enums);
    case "Refinement":
    case "TupleType":
    case "TypeLiteral":
    case "Union":
    case "Suspend":
    case "Transformation":
    case "Declaration":
      return self === that;
  }
};
var intersection4 = /* @__PURE__ */ intersectionWith(equals4);
var _keyof = (ast) => {
  switch (ast._tag) {
    case "Declaration": {
      const annotation = getSurrogateAnnotation(ast);
      if (isSome2(annotation)) {
        return _keyof(annotation.value);
      }
      break;
    }
    case "TypeLiteral":
      return ast.propertySignatures.map((p) => isSymbol(p.name) ? new UniqueSymbol(p.name) : new Literal(p.name)).concat(ast.indexSignatures.map((is2) => getParameterBase(is2.parameter)));
    case "Suspend":
      return _keyof(ast.f());
    case "Union":
      return ast.types.slice(1).reduce((out, ast2) => intersection4(out, _keyof(ast2)), _keyof(ast.types[0]));
    case "Transformation":
      return _keyof(ast.to);
  }
  throw new Error(`keyof: unsupported schema (${ast})`);
};
var compose2 = (ab, cd) => new Transformation(ab, cd, composeTransformation);
var rename = (ast, mapping) => {
  switch (ast._tag) {
    case "TypeLiteral": {
      const propertySignatureTransformations = [];
      for (const key of ownKeys(mapping)) {
        const name = mapping[key];
        if (name !== void 0) {
          propertySignatureTransformations.push(new PropertySignatureTransformation(key, name, identity, identity));
        }
      }
      if (propertySignatureTransformations.length === 0) {
        return ast;
      }
      return new Transformation(ast, new TypeLiteral(ast.propertySignatures.map((ps) => {
        const name = mapping[ps.name];
        return new PropertySignature(name === void 0 ? ps.name : name, typeAST(ps.type), ps.isOptional, ps.isReadonly, ps.annotations);
      }), ast.indexSignatures), new TypeLiteralTransformation(propertySignatureTransformations));
    }
    case "Suspend":
      return new Suspend(() => rename(ast.f(), mapping));
    case "Transformation":
      return compose2(ast, rename(typeAST(ast), mapping));
  }
  throw new Error(`rename: cannot rename (${ast})`);
};
var formatKeyword = (ast, verbose = false) => getOrElse(getExpected(ast, verbose), () => ast._tag);
var getExpected = (ast, verbose) => {
  if (verbose) {
    const description2 = getDescriptionAnnotation(ast).pipe(orElse(() => getTitleAnnotation(ast)));
    return match(getIdentifierAnnotation(ast), {
      onNone: () => description2,
      onSome: (identifier2) => match(description2, {
        onNone: () => some2(identifier2),
        onSome: (description3) => some2(`${identifier2} (${description3})`)
      })
    });
  } else {
    return getIdentifierAnnotation(ast).pipe(orElse(() => getTitleAnnotation(ast)), orElse(() => getDescriptionAnnotation(ast)));
  }
};

// ../../node_modules/.pnpm/@effect+schema@0.64.16_effect@2.4.15_fast-check@3.17.1/node_modules/@effect/schema/dist/esm/internal/filters.js
var GreaterThanTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/GreaterThan");
var GreaterThanOrEqualToTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/GreaterThanOrEqualTo");
var LessThanTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/LessThan");
var LessThanOrEqualToTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/LessThanOrEqualTo");
var IntTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/Int");
var BetweenTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/Between");
var GreaterThanBigintTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/GreaterThanBigint");
var GreaterThanOrEqualToBigintTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/GreaterThanOrEqualToBigint");
var LessThanBigintTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/LessThanBigint");
var LessThanOrEqualToBigintTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/LessThanOrEqualToBigint");
var BetweenBigintTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/BetweenBigint");
var MinLengthTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/MinLength");
var MaxLengthTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/MaxLength");
var LengthTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/Length");
var MinItemsTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/MinItems");
var MaxItemsTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/MaxItems");
var ItemsCountTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/ItemsCount");

// ../../node_modules/.pnpm/@effect+schema@0.64.16_effect@2.4.15_fast-check@3.17.1/node_modules/@effect/schema/dist/esm/internal/hooks.js
var ArbitraryHookId = /* @__PURE__ */ Symbol.for("@effect/schema/ArbitraryHookId");
var PrettyHookId = /* @__PURE__ */ Symbol.for("@effect/schema/PrettyHookId");
var EquivalenceHookId = /* @__PURE__ */ Symbol.for("@effect/schema/EquivalenceHookId");

// ../../node_modules/.pnpm/@effect+schema@0.64.16_effect@2.4.15_fast-check@3.17.1/node_modules/@effect/schema/dist/esm/Arbitrary.js
var ArbitraryHookId2 = ArbitraryHookId;
var make56 = (schema) => go(schema.ast, {});
var depthSize = 1;
var record2 = (fc, key, value3, options) => {
  return (options.isSuspend ? fc.oneof({
    depthSize
  }, fc.constant([]), fc.array(fc.tuple(key, value3), {
    minLength: 1,
    maxLength: 2
  })) : fc.array(fc.tuple(key, value3))).map((tuples) => {
    const out = {};
    for (const [k, v] of tuples) {
      out[k] = v;
    }
    return out;
  });
};
var getHook = /* @__PURE__ */ getAnnotation(ArbitraryHookId2);
var getRefinementFromArbitrary = (ast, options) => {
  const constraints = combineConstraints(options.constraints, getConstraints(ast));
  return go(ast.from, constraints ? {
    ...options,
    constraints
  } : options);
};
var go = (ast, options) => {
  const hook = getHook(ast);
  if (isSome2(hook)) {
    switch (ast._tag) {
      case "Declaration":
        return hook.value(...ast.typeParameters.map((p) => go(p, options)));
      case "Refinement":
        return hook.value(getRefinementFromArbitrary(ast, options));
      default:
        return hook.value();
    }
  }
  switch (ast._tag) {
    case "Declaration": {
      throw new Error(`cannot build an Arbitrary for a declaration without annotations (${ast})`);
    }
    case "Literal":
      return (fc) => fc.constant(ast.literal);
    case "UniqueSymbol":
      return (fc) => fc.constant(ast.symbol);
    case "UndefinedKeyword":
    case "VoidKeyword":
      return (fc) => fc.constant(void 0);
    case "NeverKeyword":
      return () => {
        throw new Error("cannot build an Arbitrary for `never`");
      };
    case "UnknownKeyword":
    case "AnyKeyword":
      return (fc) => fc.anything();
    case "StringKeyword":
      return (fc) => {
        if (options.constraints) {
          switch (options.constraints._tag) {
            case "StringConstraints":
              return fc.string(options.constraints.constraints);
          }
        }
        return fc.string();
      };
    case "NumberKeyword":
      return (fc) => {
        if (options.constraints) {
          switch (options.constraints._tag) {
            case "NumberConstraints":
              return fc.float(options.constraints.constraints);
            case "IntegerConstraints":
              return fc.integer(options.constraints.constraints);
          }
        }
        return fc.float();
      };
    case "BooleanKeyword":
      return (fc) => fc.boolean();
    case "BigIntKeyword":
      return (fc) => {
        if (options.constraints) {
          switch (options.constraints._tag) {
            case "BigIntConstraints":
              return fc.bigInt(options.constraints.constraints);
          }
        }
        return fc.bigInt();
      };
    case "SymbolKeyword":
      return (fc) => fc.string().map((s) => Symbol.for(s));
    case "ObjectKeyword":
      return (fc) => fc.oneof(fc.object(), fc.array(fc.anything()));
    case "TemplateLiteral": {
      return (fc) => {
        const string3 = fc.string({
          maxLength: 5
        });
        const number5 = fc.float({
          noDefaultInfinity: true
        }).filter((n) => !Number.isNaN(n));
        const components = [fc.constant(ast.head)];
        for (const span4 of ast.spans) {
          if (isStringKeyword(span4.type)) {
            components.push(string3);
          } else {
            components.push(number5);
          }
          components.push(fc.constant(span4.literal));
        }
        return fc.tuple(...components).map((spans) => spans.join(""));
      };
    }
    case "TupleType": {
      const elements = [];
      let hasOptionals = false;
      for (const element of ast.elements) {
        elements.push(go(element.type, options));
        if (element.isOptional) {
          hasOptionals = true;
        }
      }
      const rest = ast.rest.map((e) => go(e, options));
      return (fc) => {
        let output = fc.tuple(...elements.map((arb) => arb(fc)));
        if (hasOptionals) {
          const indexes = fc.tuple(...ast.elements.map((element) => element.isOptional ? fc.boolean() : fc.constant(true)));
          output = output.chain((tuple3) => indexes.map((booleans) => {
            for (const [i, b] of booleans.reverse().entries()) {
              if (!b) {
                tuple3.splice(booleans.length - i, 1);
              }
            }
            return tuple3;
          }));
        }
        if (isNonEmptyReadonlyArray(rest)) {
          const [head7, ...tail2] = rest;
          const arb = head7(fc);
          const constraints = options.constraints;
          output = output.chain((as9) => {
            let out = fc.array(arb);
            if (options.isSuspend) {
              out = fc.oneof({
                depthSize
              }, fc.constant([]), fc.array(arb, {
                minLength: 1,
                maxLength: 2
              }));
            } else if (constraints && constraints._tag === "ArrayConstraints") {
              out = fc.array(arb, constraints.constraints);
            }
            return out.map((rest2) => [...as9, ...rest2]);
          });
          for (let j = 0; j < tail2.length; j++) {
            output = output.chain((as9) => tail2[j](fc).map((a) => [...as9, a]));
          }
        }
        return output;
      };
    }
    case "TypeLiteral": {
      const propertySignaturesTypes = ast.propertySignatures.map((f) => go(f.type, options));
      const indexSignatures = ast.indexSignatures.map((is2) => [go(is2.parameter, options), go(is2.type, options)]);
      return (fc) => {
        const arbs = {};
        const requiredKeys = [];
        for (let i = 0; i < propertySignaturesTypes.length; i++) {
          const ps = ast.propertySignatures[i];
          const name = ps.name;
          if (!ps.isOptional) {
            requiredKeys.push(name);
          }
          arbs[name] = propertySignaturesTypes[i](fc);
        }
        let output = fc.record(arbs, {
          requiredKeys
        });
        for (let i = 0; i < indexSignatures.length; i++) {
          const parameter = indexSignatures[i][0](fc);
          const type = indexSignatures[i][1](fc);
          output = output.chain((o) => {
            return record2(fc, parameter, type, options).map((d) => ({
              ...d,
              ...o
            }));
          });
        }
        return output;
      };
    }
    case "Union": {
      const types = ast.types.map((t) => go(t, options));
      return (fc) => fc.oneof({
        depthSize
      }, ...types.map((arb) => arb(fc)));
    }
    case "Enums": {
      if (ast.enums.length === 0) {
        throw new Error("cannot build an Arbitrary for an empty enum");
      }
      return (fc) => fc.oneof(...ast.enums.map(([_, value3]) => fc.constant(value3)));
    }
    case "Refinement": {
      const from = getRefinementFromArbitrary(ast, options);
      return (fc) => from(fc).filter((a) => isNone2(ast.filter(a, defaultParseOption, ast)));
    }
    case "Suspend": {
      const get17 = memoizeThunk(() => go(ast.f(), {
        ...options,
        isSuspend: true
      }));
      return (fc) => fc.constant(null).chain(() => get17()(fc));
    }
    case "Transformation":
      return go(ast.to, options);
  }
};
var NumberConstraints = class {
  _tag = "NumberConstraints";
  constraints;
  constructor(options) {
    this.constraints = {};
    if (isNumber(options.min)) {
      this.constraints.min = Math.fround(options.min);
    }
    if (isNumber(options.max)) {
      this.constraints.max = Math.fround(options.max);
    }
    if (isBoolean(options.noNaN)) {
      this.constraints.noNaN = options.noNaN;
    }
    if (isBoolean(options.noDefaultInfinity)) {
      this.constraints.noDefaultInfinity = options.noDefaultInfinity;
    }
  }
};
var StringConstraints = class {
  _tag = "StringConstraints";
  constraints;
  constructor(options) {
    this.constraints = {};
    if (isNumber(options.minLength)) {
      this.constraints.minLength = options.minLength;
    }
    if (isNumber(options.maxLength)) {
      this.constraints.maxLength = options.maxLength;
    }
  }
};
var IntegerConstraints = class {
  _tag = "IntegerConstraints";
  constraints;
  constructor(options) {
    this.constraints = {};
    if (isNumber(options.min)) {
      this.constraints.min = options.min;
    }
    if (isNumber(options.max)) {
      this.constraints.max = options.max;
    }
  }
};
var ArrayConstraints = class {
  _tag = "ArrayConstraints";
  constraints;
  constructor(options) {
    this.constraints = {};
    if (isNumber(options.minLength)) {
      this.constraints.minLength = options.minLength;
    }
    if (isNumber(options.maxLength)) {
      this.constraints.maxLength = options.maxLength;
    }
  }
};
var BigIntConstraints = class {
  _tag = "BigIntConstraints";
  constraints;
  constructor(options) {
    this.constraints = {};
    if (isBigInt(options.min)) {
      this.constraints.min = options.min;
    }
    if (isBigInt(options.max)) {
      this.constraints.max = options.max;
    }
  }
};
var getConstraints = (ast) => {
  const TypeAnnotationId2 = ast.annotations[TypeAnnotationId];
  const jsonSchema2 = ast.annotations[JSONSchemaAnnotationId];
  switch (TypeAnnotationId2) {
    case IntTypeId:
      return new IntegerConstraints({});
    case GreaterThanTypeId:
    case GreaterThanOrEqualToTypeId:
    case LessThanTypeId:
    case LessThanOrEqualToTypeId:
    case BetweenTypeId:
      return new NumberConstraints({
        min: jsonSchema2.exclusiveMinimum ?? jsonSchema2.minimum,
        max: jsonSchema2.exclusiveMaximum ?? jsonSchema2.maximum
      });
    case GreaterThanBigintTypeId:
    case GreaterThanOrEqualToBigintTypeId:
    case LessThanBigintTypeId:
    case LessThanOrEqualToBigintTypeId:
    case BetweenBigintTypeId: {
      const constraints = ast.annotations[TypeAnnotationId2];
      return new BigIntConstraints(constraints);
    }
    case MinLengthTypeId:
    case MaxLengthTypeId:
    case LengthTypeId:
      return new StringConstraints(jsonSchema2);
    case MinItemsTypeId:
    case MaxItemsTypeId:
    case ItemsCountTypeId:
      return new ArrayConstraints({
        minLength: jsonSchema2.minItems,
        maxLength: jsonSchema2.maxItems
      });
  }
};
var combineConstraints = (c1, c2) => {
  if (c1 === void 0) {
    return c2;
  }
  if (c2 === void 0) {
    return c1;
  }
  switch (c1._tag) {
    case "ArrayConstraints": {
      switch (c2._tag) {
        case "ArrayConstraints":
          return new ArrayConstraints({
            minLength: getMax(c1.constraints.minLength, c2.constraints.minLength),
            maxLength: getMin(c1.constraints.maxLength, c2.constraints.maxLength)
          });
      }
      break;
    }
    case "NumberConstraints": {
      switch (c2._tag) {
        case "NumberConstraints":
          return new NumberConstraints({
            min: getMax(c1.constraints.min, c2.constraints.min),
            max: getMin(c1.constraints.max, c2.constraints.max),
            noNaN: getOr(c1.constraints.noNaN, c2.constraints.noNaN),
            noDefaultInfinity: getOr(c1.constraints.noDefaultInfinity, c2.constraints.noDefaultInfinity)
          });
        case "IntegerConstraints":
          return new IntegerConstraints({
            min: getMax(c1.constraints.min, c2.constraints.min),
            max: getMin(c1.constraints.max, c2.constraints.max)
          });
      }
      break;
    }
    case "BigIntConstraints": {
      switch (c2._tag) {
        case "BigIntConstraints":
          return new BigIntConstraints({
            min: getMax(c1.constraints.min, c2.constraints.min),
            max: getMin(c1.constraints.max, c2.constraints.max)
          });
      }
      break;
    }
    case "StringConstraints": {
      switch (c2._tag) {
        case "StringConstraints":
          return new StringConstraints({
            minLength: getMax(c1.constraints.minLength, c2.constraints.minLength),
            maxLength: getMin(c1.constraints.maxLength, c2.constraints.maxLength)
          });
      }
      break;
    }
    case "IntegerConstraints": {
      switch (c2._tag) {
        case "NumberConstraints":
        case "IntegerConstraints": {
          return new IntegerConstraints({
            min: getMax(c1.constraints.min, c2.constraints.min),
            max: getMin(c1.constraints.max, c2.constraints.max)
          });
        }
      }
      break;
    }
  }
};
var getOr = (a, b) => {
  return a === void 0 ? b : b === void 0 ? a : a || b;
};
function getMax(n1, n2) {
  return n1 === void 0 ? n2 : n2 === void 0 ? n1 : n1 <= n2 ? n2 : n1;
}
function getMin(n1, n2) {
  return n1 === void 0 ? n2 : n2 === void 0 ? n1 : n1 <= n2 ? n1 : n2;
}

// ../../node_modules/.pnpm/@effect+schema@0.64.16_effect@2.4.15_fast-check@3.17.1/node_modules/@effect/schema/dist/esm/TreeFormatter.js
var make57 = (value3, forest = []) => ({
  value: value3,
  forest
});
var formatIssueEffect = (issue) => map16(go2(issue), (tree) => drawTree(tree));
var formatIssue = (issue) => runSync(formatIssueEffect(issue));
var formatError = (error2) => formatIssue(error2.error);
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
var getPrevMessage = (issue) => {
  switch (issue._tag) {
    case "Refinement": {
      if (issue.kind === "From") {
        return getMessage(issue.error);
      }
      break;
    }
    case "Transformation":
      return getMessage(issue.error);
  }
  return none2();
};
var getCurrentMessage = (issue) => getMessageAnnotation(issue.ast).pipe(flatMap10((annotation) => {
  const out = annotation(issue);
  return isString(out) ? succeed8(out) : out;
}));
var getMessage = (issue) => catchAll3(getPrevMessage(issue), () => getCurrentMessage(issue));
var formatTypeMessage = (e) => getMessage(e).pipe(orElse5(() => e.message), catchAll3(() => succeed8(`Expected ${e.ast.toString(true)}, actual ${formatUnknown(e.actual)}`)));
var formatForbiddenMessage = (e) => getOrElse(e.message, () => "is forbidden");
var go2 = (e) => {
  switch (e._tag) {
    case "Type":
      return map16(formatTypeMessage(e), make57);
    case "Forbidden":
      return succeed8(make57(String(e.ast), [make57(formatForbiddenMessage(e))]));
    case "Unexpected":
      return succeed8(make57(`is unexpected, expected ${e.ast.toString(true)}`));
    case "Missing":
      return succeed8(make57("is missing"));
    case "Union":
      return matchEffect2(getMessage(e), {
        onFailure: () => map16(forEach8(e.errors, (e2) => {
          switch (e2._tag) {
            case "Member":
              return map16(go2(e2.error), (tree) => make57(`Union member`, [tree]));
            default:
              return go2(e2);
          }
        }), (forest) => make57(String(e.ast), forest)),
        onSuccess: (message2) => succeed8(make57(message2))
      });
    case "TupleType":
      return matchEffect2(getMessage(e), {
        onFailure: () => map16(forEach8(e.errors, (index) => map16(go2(index.error), (tree) => make57(`[${index.index}]`, [tree]))), (forest) => make57(String(e.ast), forest)),
        onSuccess: (message2) => succeed8(make57(message2))
      });
    case "TypeLiteral":
      return matchEffect2(getMessage(e), {
        onFailure: () => map16(forEach8(e.errors, (key) => map16(go2(key.error), (tree) => make57(`[${formatUnknown(key.key)}]`, [tree]))), (forest) => make57(String(e.ast), forest)),
        onSuccess: (message2) => succeed8(make57(message2))
      });
    case "Transformation":
      return matchEffect2(getMessage(e), {
        onFailure: () => map16(go2(e.error), (tree) => make57(String(e.ast), [make57(formatTransformationKind(e.kind), [tree])])),
        onSuccess: (message2) => succeed8(make57(message2))
      });
    case "Refinement":
      return matchEffect2(getMessage(e), {
        onFailure: () => map16(go2(e.error), (tree) => make57(String(e.ast), [make57(formatRefinementKind(e.kind), [tree])])),
        onSuccess: (message2) => succeed8(make57(message2))
      });
    case "Declaration":
      return matchEffect2(getMessage(e), {
        onFailure: () => {
          const error2 = e.error;
          const shouldSkipDefaultMessage = error2._tag === "Type" && error2.ast === e.ast;
          return shouldSkipDefaultMessage ? go2(error2) : map16(go2(error2), (tree) => make57(String(e.ast), [tree]));
        },
        onSuccess: (message2) => succeed8(make57(message2))
      });
  }
};

// ../../node_modules/.pnpm/@effect+schema@0.64.16_effect@2.4.15_fast-check@3.17.1/node_modules/@effect/schema/dist/esm/internal/schema.js
var TypeId17 = /* @__PURE__ */ Symbol.for("@effect/schema/Schema");
var PropertySignatureTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/PropertySignature");
var make58 = (ast) => new Schema(ast);
var toASTAnnotations = (annotations4) => {
  if (!annotations4) {
    return {};
  }
  const out = {};
  const custom3 = Object.getOwnPropertySymbols(annotations4);
  for (const sym of custom3) {
    out[sym] = annotations4[sym];
  }
  if (annotations4.typeId !== void 0) {
    const typeId = annotations4.typeId;
    if (typeof typeId === "object") {
      out[TypeAnnotationId] = typeId.id;
      out[typeId.id] = typeId.annotation;
    } else {
      out[TypeAnnotationId] = typeId;
    }
  }
  const move = (from, to) => {
    if (annotations4[from] !== void 0) {
      out[to] = annotations4[from];
    }
  };
  move("message", MessageAnnotationId);
  move("identifier", IdentifierAnnotationId);
  move("title", TitleAnnotationId);
  move("description", DescriptionAnnotationId);
  move("examples", ExamplesAnnotationId);
  move("default", DefaultAnnotationId);
  move("documentation", DocumentationAnnotationId);
  move("jsonSchema", JSONSchemaAnnotationId);
  move("arbitrary", ArbitraryHookId);
  move("pretty", PrettyHookId);
  move("equivalence", EquivalenceHookId);
  move("concurrency", ConcurrencyAnnotationId);
  move("batching", BatchingAnnotationId);
  return out;
};
var variance5 = {
  /* c8 ignore next */
  _A: (_) => _,
  /* c8 ignore next */
  _I: (_) => _,
  /* c8 ignore next */
  _R: (_) => _
};
var annotations2 = (ast, annotations4) => annotations(ast, toASTAnnotations(annotations4));
var Schema = class _Schema {
  ast;
  [TypeId17] = variance5;
  constructor(ast) {
    this.ast = ast;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  annotations(a) {
    return new _Schema(annotations2(this.ast, a));
  }
  toString() {
    return String(this.ast);
  }
};

// ../../node_modules/.pnpm/@effect+schema@0.64.16_effect@2.4.15_fast-check@3.17.1/node_modules/@effect/schema/dist/esm/ParseResult.js
var Declaration2 = class {
  ast;
  actual;
  error;
  /**
   * @since 1.0.0
   */
  _tag = "Declaration";
  constructor(ast, actual, error2) {
    this.ast = ast;
    this.actual = actual;
    this.error = error2;
  }
};
var Refinement2 = class {
  ast;
  actual;
  kind;
  error;
  /**
   * @since 1.0.0
   */
  _tag = "Refinement";
  constructor(ast, actual, kind, error2) {
    this.ast = ast;
    this.actual = actual;
    this.kind = kind;
    this.error = error2;
  }
};
var Tuple = class {
  ast;
  actual;
  errors;
  /**
   * @since 1.0.0
   */
  _tag = "TupleType";
  constructor(ast, actual, errors) {
    this.ast = ast;
    this.actual = actual;
    this.errors = errors;
  }
};
var Index = class {
  index;
  error;
  /**
   * @since 1.0.0
   */
  _tag = "Index";
  constructor(index, error2) {
    this.index = index;
    this.error = error2;
  }
};
var TypeLiteral2 = class {
  ast;
  actual;
  errors;
  /**
   * @since 1.0.0
   */
  _tag = "TypeLiteral";
  constructor(ast, actual, errors) {
    this.ast = ast;
    this.actual = actual;
    this.errors = errors;
  }
};
var Key2 = class {
  key;
  error;
  /**
   * @since 1.0.0
   */
  _tag = "Key";
  constructor(key, error2) {
    this.key = key;
    this.error = error2;
  }
};
var Unexpected = class {
  ast;
  /**
   * @since 1.0.0
   */
  _tag = "Unexpected";
  constructor(ast) {
    this.ast = ast;
  }
};
var Transformation2 = class {
  ast;
  actual;
  kind;
  error;
  /**
   * @since 1.0.0
   */
  _tag = "Transformation";
  constructor(ast, actual, kind, error2) {
    this.ast = ast;
    this.actual = actual;
    this.kind = kind;
    this.error = error2;
  }
};
var Type = class {
  ast;
  actual;
  /**
   * @since 1.0.0
   */
  _tag = "Type";
  /**
   * @since 1.0.0
   */
  message;
  constructor(ast, actual, message2) {
    this.ast = ast;
    this.actual = actual;
    this.message = fromNullable(message2);
  }
};
var Forbidden = class {
  ast;
  actual;
  /**
   * @since 1.0.0
   */
  _tag = "Forbidden";
  /**
   * @since 1.0.0
   */
  message;
  constructor(ast, actual, message2) {
    this.ast = ast;
    this.actual = actual;
    this.message = fromNullable(message2);
  }
};
var Missing = class {
  /**
   * @since 1.0.0
   */
  _tag = "Missing";
};
var missing = /* @__PURE__ */ new Missing();
var Member = class {
  ast;
  error;
  /**
   * @since 1.0.0
   */
  _tag = "Member";
  constructor(ast, error2) {
    this.ast = ast;
    this.error = error2;
  }
};
var Union2 = class {
  ast;
  actual;
  errors;
  /**
   * @since 1.0.0
   */
  _tag = "Union";
  constructor(ast, actual, errors) {
    this.ast = ast;
    this.actual = actual;
    this.errors = errors;
  }
};
var ParseError = class extends TaggedError("ParseError") {
  get message() {
    return this.toString();
  }
  /**
   * @since 1.0.0
   */
  toString() {
    return formatIssue(this.error);
  }
  /**
   * @since 1.0.0
   */
  toJSON() {
    return {
      _id: "ParseError",
      message: this.toString()
    };
  }
  /**
   * @since 1.0.0
   */
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
};
var parseError = (issue) => new ParseError({
  error: issue
});
var succeed15 = right2;
var fail15 = left2;
var _try = try_;
var fromOption4 = fromOption2;
var flatMap16 = /* @__PURE__ */ dual(2, (self, f) => {
  const s = self;
  if (s["_tag"] === "Left") {
    return s;
  }
  if (s["_tag"] === "Right") {
    return f(s.right);
  }
  return flatMap10(self, f);
});
var map24 = /* @__PURE__ */ dual(2, (self, f) => {
  const s = self;
  if (s["_tag"] === "Left") {
    return s;
  }
  if (s["_tag"] === "Right") {
    return right2(f(s.right));
  }
  return map16(self, f);
});
var mapError8 = /* @__PURE__ */ dual(2, (self, f) => {
  const s = self;
  if (s["_tag"] === "Left") {
    return left2(f(s.left));
  }
  if (s["_tag"] === "Right") {
    return s;
  }
  return mapError3(self, f);
});
var eitherOrUndefined = (self) => {
  const s = self;
  if (s["_tag"] === "Left" || s["_tag"] === "Right") {
    return s;
  }
};
var mergeParseOptions = (a, b) => {
  if (a === void 0) {
    return b;
  }
  if (b === void 0) {
    return a;
  }
  const out = {};
  out.errors = b.errors ?? a.errors;
  out.onExcessProperty = b.onExcessProperty ?? a.onExcessProperty;
  return out;
};
var getEither = (ast, isDecoding, options) => {
  const parser = goMemo(ast, isDecoding);
  return (u, overrideOptions) => parser(u, mergeParseOptions(options, overrideOptions));
};
var getSync = (ast, isDecoding, options) => {
  const parser = getEither(ast, isDecoding, options);
  return (input, overrideOptions) => getOrThrowWith2(parser(input, overrideOptions), (e) => new Error(formatIssue(e)));
};
var getOption3 = (ast, isDecoding, options) => {
  const parser = getEither(ast, isDecoding, options);
  return (input, overrideOptions) => getRight2(parser(input, overrideOptions));
};
var getEffect = (ast, isDecoding, options) => {
  const parser = goMemo(ast, isDecoding);
  return (input, overrideOptions) => parser(input, {
    ...mergeParseOptions(options, overrideOptions),
    isEffectAllowed: true
  });
};
var decodeUnknownSync = (schema, options) => getSync(schema.ast, true, options);
var decodeUnknownOption = (schema, options) => getOption3(schema.ast, true, options);
var decodeUnknownEither = (schema, options) => getEither(schema.ast, true, options);
var decodeUnknown = (schema, options) => getEffect(schema.ast, true, options);
var encodeUnknownSync = (schema, options) => getSync(schema.ast, false, options);
var encodeUnknownOption = (schema, options) => getOption3(schema.ast, false, options);
var encodeUnknownEither = (schema, options) => getEither(schema.ast, false, options);
var encodeUnknown = (schema, options) => getEffect(schema.ast, false, options);
var decodeSync = decodeUnknownSync;
var decodeOption = decodeUnknownOption;
var validateSync = (schema, options) => getSync(typeAST(schema.ast), true, options);
var validateOption = (schema, options) => getOption3(typeAST(schema.ast), true, options);
var validateEither = (schema, options) => getEither(typeAST(schema.ast), true, options);
var validate3 = (schema, options) => getEffect(typeAST(schema.ast), true, options);
var is = (schema, options) => {
  const parser = goMemo(typeAST(schema.ast), true);
  return (u, overrideOptions) => isRight2(parser(u, {
    ...mergeParseOptions(options, overrideOptions),
    isExact: true
  }));
};
var asserts = (schema, options) => {
  const parser = goMemo(typeAST(schema.ast), true);
  return (u, overrideOptions) => {
    const result = parser(u, {
      ...mergeParseOptions(options, overrideOptions),
      isExact: true
    });
    if (isLeft2(result)) {
      throw new Error(formatIssue(result.left));
    }
  };
};
var encodeSync = encodeUnknownSync;
var encodeOption = encodeUnknownOption;
var decodeMemoMap = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("@effect/schema/Parser/decodeMemoMap"), () => /* @__PURE__ */ new WeakMap());
var encodeMemoMap = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("@effect/schema/Parser/encodeMemoMap"), () => /* @__PURE__ */ new WeakMap());
var goMemo = (ast, isDecoding) => {
  const memoMap = isDecoding ? decodeMemoMap : encodeMemoMap;
  const memo = memoMap.get(ast);
  if (memo) {
    return memo;
  }
  const parser = go3(ast, isDecoding);
  memoMap.set(ast, parser);
  return parser;
};
var getConcurrency = (ast) => getOrUndefined(getConcurrencyAnnotation(ast));
var getBatching = (ast) => getOrUndefined(getBatchingAnnotation(ast));
var go3 = (ast, isDecoding) => {
  switch (ast._tag) {
    case "Refinement": {
      if (isDecoding) {
        const from = goMemo(ast.from, true);
        return (i, options) => handleForbidden(flatMap16(mapError8(from(i, options), (e) => new Refinement2(ast, i, "From", e)), (a) => match(ast.filter(a, options ?? defaultParseOption, ast), {
          onNone: () => right2(a),
          onSome: (e) => left2(new Refinement2(ast, i, "Predicate", e))
        })), ast, i, options);
      } else {
        const from = goMemo(typeAST(ast), true);
        const to = goMemo(dropRightRefinement(ast.from), false);
        return (i, options) => handleForbidden(flatMap16(from(i, options), (a) => to(a, options)), ast, i, options);
      }
    }
    case "Transformation": {
      const transform3 = getFinalTransformation(ast.transformation, isDecoding);
      const from = isDecoding ? goMemo(ast.from, true) : goMemo(ast.to, false);
      const to = isDecoding ? goMemo(ast.to, true) : goMemo(ast.from, false);
      return (i1, options) => handleForbidden(flatMap16(mapError8(from(i1, options), (e) => new Transformation2(ast, i1, isDecoding ? "Encoded" : "Type", e)), (a) => flatMap16(mapError8(transform3(a, options ?? defaultParseOption, ast), (e) => new Transformation2(ast, i1, "Transformation", e)), (i2) => mapError8(to(i2, options), (e) => new Transformation2(ast, i1, isDecoding ? "Type" : "Encoded", e)))), ast, i1, options);
    }
    case "Declaration": {
      const parse2 = isDecoding ? ast.decodeUnknown(...ast.typeParameters) : ast.encodeUnknown(...ast.typeParameters);
      return (i, options) => handleForbidden(mapError8(parse2(i, options ?? defaultParseOption, ast), (e) => new Declaration2(ast, i, e)), ast, i, options);
    }
    case "Literal":
      return fromRefinement(ast, (u) => u === ast.literal);
    case "UniqueSymbol":
      return fromRefinement(ast, (u) => u === ast.symbol);
    case "UndefinedKeyword":
      return fromRefinement(ast, isUndefined);
    case "VoidKeyword":
      return fromRefinement(ast, isUndefined);
    case "NeverKeyword":
      return fromRefinement(ast, isNever);
    case "UnknownKeyword":
    case "AnyKeyword":
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
      return fromRefinement(ast, (u) => ast.enums.some(([_, value3]) => value3 === u));
    case "TemplateLiteral": {
      const regex = getTemplateLiteralRegExp(ast);
      return fromRefinement(ast, (u) => isString(u) && regex.test(u));
    }
    case "TupleType": {
      const elements = ast.elements.map((e) => goMemo(e.type, isDecoding));
      const rest = ast.rest.map((ast2) => goMemo(ast2, isDecoding));
      let requiredLen = ast.elements.filter((e) => !e.isOptional).length;
      if (ast.rest.length > 0) {
        requiredLen += ast.rest.length - 1;
      }
      const expectedAST = Union.make(ast.elements.map((_, i) => new Literal(i)));
      const concurrency2 = getConcurrency(ast);
      const batching2 = getBatching(ast);
      return (input, options) => {
        if (!Array.isArray(input)) {
          return left2(new Type(ast, input));
        }
        const allErrors = options?.errors === "all";
        const es = [];
        let stepKey = 0;
        const len = input.length;
        for (let i2 = len; i2 <= requiredLen - 1; i2++) {
          const e = new Index(i2, missing);
          if (allErrors) {
            es.push([stepKey++, e]);
            continue;
          } else {
            return left2(new Tuple(ast, input, [e]));
          }
        }
        if (ast.rest.length === 0) {
          for (let i2 = ast.elements.length; i2 <= len - 1; i2++) {
            const e = new Index(i2, new Unexpected(expectedAST));
            if (allErrors) {
              es.push([stepKey++, e]);
              continue;
            } else {
              return left2(new Tuple(ast, input, [e]));
            }
          }
        }
        const output = [];
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
            const eu = eitherOrUndefined(te);
            if (eu) {
              if (isLeft2(eu)) {
                const e = new Index(i, eu.left);
                if (allErrors) {
                  es.push([stepKey++, e]);
                  continue;
                } else {
                  return left2(new Tuple(ast, input, [e]));
                }
              }
              output.push([stepKey++, eu.right]);
            } else {
              const nk = stepKey++;
              const index = i;
              if (!queue) {
                queue = [];
              }
              queue.push(({
                es: es2,
                output: output2
              }) => flatMap10(either3(te), (t) => {
                if (isLeft2(t)) {
                  const e = new Index(index, t.left);
                  if (allErrors) {
                    es2.push([nk, e]);
                    return unit5;
                  } else {
                    return left2(new Tuple(ast, input, [e]));
                  }
                }
                output2.push([nk, t.right]);
                return unit5;
              }));
            }
          }
        }
        if (isNonEmptyReadonlyArray(rest)) {
          const [head7, ...tail2] = rest;
          for (; i < len - tail2.length; i++) {
            const te = head7(input[i], options);
            const eu = eitherOrUndefined(te);
            if (eu) {
              if (isLeft2(eu)) {
                const e = new Index(i, eu.left);
                if (allErrors) {
                  es.push([stepKey++, e]);
                  continue;
                } else {
                  return left2(new Tuple(ast, input, [e]));
                }
              } else {
                output.push([stepKey++, eu.right]);
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
              }) => flatMap10(either3(te), (t) => {
                if (isLeft2(t)) {
                  const e = new Index(index, t.left);
                  if (allErrors) {
                    es2.push([nk, e]);
                    return unit5;
                  } else {
                    return left2(new Tuple(ast, input, [e]));
                  }
                } else {
                  output2.push([nk, t.right]);
                  return unit5;
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
              const eu = eitherOrUndefined(te);
              if (eu) {
                if (isLeft2(eu)) {
                  const e = new Index(i, eu.left);
                  if (allErrors) {
                    es.push([stepKey++, e]);
                    continue;
                  } else {
                    return left2(new Tuple(ast, input, [e]));
                  }
                }
                output.push([stepKey++, eu.right]);
              } else {
                const nk = stepKey++;
                const index = i;
                if (!queue) {
                  queue = [];
                }
                queue.push(({
                  es: es2,
                  output: output2
                }) => flatMap10(either3(te), (t) => {
                  if (isLeft2(t)) {
                    const e = new Index(index, t.left);
                    if (allErrors) {
                      es2.push([nk, e]);
                      return unit5;
                    } else {
                      return left2(new Tuple(ast, input, [e]));
                    }
                  }
                  output2.push([nk, t.right]);
                  return unit5;
                }));
              }
            }
          }
        }
        const computeResult = ({
          es: es2,
          output: output2
        }) => isNonEmptyArray2(es2) ? left2(new Tuple(ast, input, sortByIndex(es2))) : right2(sortByIndex(output2));
        if (queue && queue.length > 0) {
          const cqueue = queue;
          return suspend3(() => {
            const state = {
              es: Array.from(es),
              output: Array.from(output)
            };
            return flatMap10(forEach8(cqueue, (f) => f(state), {
              concurrency: concurrency2,
              batching: batching2,
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
      const expectedKeys = {};
      for (const ps of ast.propertySignatures) {
        propertySignatures.push([goMemo(ps.type, isDecoding), ps]);
        expectedKeys[ps.name] = null;
      }
      const indexSignatures = ast.indexSignatures.map((is2) => [goMemo(is2.parameter, isDecoding), goMemo(is2.type, isDecoding), is2.parameter]);
      const expectedAST = Union.make(ast.indexSignatures.map((is2) => is2.parameter).concat(ownKeys(expectedKeys).map((key) => isSymbol(key) ? new UniqueSymbol(key) : new Literal(key))));
      const expected = goMemo(expectedAST, isDecoding);
      const concurrency2 = getConcurrency(ast);
      const batching2 = getBatching(ast);
      return (input, options) => {
        if (!isRecord(input)) {
          return left2(new Type(ast, input));
        }
        const allErrors = options?.errors === "all";
        const es = [];
        let stepKey = 0;
        const onExcessPropertyError = options?.onExcessProperty === "error";
        const onExcessPropertyPreserve = options?.onExcessProperty === "preserve";
        const output = {};
        if (onExcessPropertyError || onExcessPropertyPreserve) {
          for (const key of ownKeys(input)) {
            const eu = eitherOrUndefined(expected(key, options));
            if (isLeft2(eu)) {
              if (onExcessPropertyError) {
                const e = new Key2(key, new Unexpected(expectedAST));
                if (allErrors) {
                  es.push([stepKey++, e]);
                  continue;
                } else {
                  return left2(new TypeLiteral2(ast, input, [e]));
                }
              } else {
                output[key] = input[key];
              }
            }
          }
        }
        let queue = void 0;
        const isExact = options?.isExact === true;
        for (let i = 0; i < propertySignatures.length; i++) {
          const ps = propertySignatures[i][1];
          const name = ps.name;
          const hasKey = Object.prototype.hasOwnProperty.call(input, name);
          if (!hasKey) {
            if (ps.isOptional) {
              continue;
            } else if (isExact) {
              const e = new Key2(name, missing);
              if (allErrors) {
                es.push([stepKey++, e]);
                continue;
              } else {
                return left2(new TypeLiteral2(ast, input, [e]));
              }
            }
          }
          const parser = propertySignatures[i][0];
          const te = parser(input[name], options);
          const eu = eitherOrUndefined(te);
          if (eu) {
            if (isLeft2(eu)) {
              const e = new Key2(name, hasKey ? eu.left : missing);
              if (allErrors) {
                es.push([stepKey++, e]);
                continue;
              } else {
                return left2(new TypeLiteral2(ast, input, [e]));
              }
            }
            output[name] = eu.right;
          } else {
            const nk = stepKey++;
            const index = name;
            if (!queue) {
              queue = [];
            }
            queue.push(({
              es: es2,
              output: output2
            }) => flatMap10(either3(te), (t) => {
              if (isLeft2(t)) {
                const e = new Key2(index, hasKey ? t.left : missing);
                if (allErrors) {
                  es2.push([nk, e]);
                  return unit5;
                } else {
                  return left2(new TypeLiteral2(ast, input, [e]));
                }
              }
              output2[index] = t.right;
              return unit5;
            }));
          }
        }
        for (let i = 0; i < indexSignatures.length; i++) {
          const indexSignature = indexSignatures[i];
          const parameter = indexSignature[0];
          const type = indexSignature[1];
          const keys6 = getKeysForIndexSignature(input, indexSignature[2]);
          for (const key of keys6) {
            const keu = eitherOrUndefined(parameter(key, options));
            if (keu && isRight2(keu)) {
              const vpr = type(input[key], options);
              const veu = eitherOrUndefined(vpr);
              if (veu) {
                if (isLeft2(veu)) {
                  const e = new Key2(key, veu.left);
                  if (allErrors) {
                    es.push([stepKey++, e]);
                    continue;
                  } else {
                    return left2(new TypeLiteral2(ast, input, [e]));
                  }
                } else {
                  if (!Object.prototype.hasOwnProperty.call(expectedKeys, key)) {
                    output[key] = veu.right;
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
                }) => flatMap10(either3(vpr), (tv) => {
                  if (isLeft2(tv)) {
                    const e = new Key2(index, tv.left);
                    if (allErrors) {
                      es2.push([nk, e]);
                      return unit5;
                    } else {
                      return left2(new TypeLiteral2(ast, input, [e]));
                    }
                  } else {
                    if (!Object.prototype.hasOwnProperty.call(expectedKeys, key)) {
                      output2[key] = tv.right;
                    }
                    return unit5;
                  }
                }));
              }
            }
          }
        }
        const computeResult = ({
          es: es2,
          output: output2
        }) => isNonEmptyArray2(es2) ? left2(new TypeLiteral2(ast, input, sortByIndex(es2))) : right2(output2);
        if (queue && queue.length > 0) {
          const cqueue = queue;
          return suspend3(() => {
            const state = {
              es: Array.from(es),
              output: Object.assign({}, output)
            };
            return flatMap10(forEach8(cqueue, (f) => f(state), {
              concurrency: concurrency2,
              batching: batching2,
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
      const len = ownKeys2.length;
      const map25 = /* @__PURE__ */ new Map();
      for (let i = 0; i < ast.types.length; i++) {
        map25.set(ast.types[i], goMemo(ast.types[i], isDecoding));
      }
      const concurrency2 = getConcurrency(ast) ?? 1;
      const batching2 = getBatching(ast);
      return (input, options) => {
        const es = [];
        let stepKey = 0;
        let candidates = [];
        if (len > 0) {
          if (isRecord(input)) {
            for (let i = 0; i < len; i++) {
              const name = ownKeys2[i];
              const buckets = searchTree.keys[name].buckets;
              if (Object.prototype.hasOwnProperty.call(input, name)) {
                const literal2 = String(input[name]);
                if (Object.prototype.hasOwnProperty.call(buckets, literal2)) {
                  candidates = candidates.concat(buckets[literal2]);
                } else {
                  const literals = Union.make(searchTree.keys[name].literals);
                  es.push([stepKey++, new TypeLiteral2(new TypeLiteral([new PropertySignature(name, literals, false, true)], []), input, [new Key2(name, new Type(literals, input[name]))])]);
                }
              } else {
                const literals = Union.make(searchTree.keys[name].literals);
                es.push([stepKey++, new TypeLiteral2(new TypeLiteral([new PropertySignature(name, literals, false, true)], []), input, [new Key2(name, missing)])]);
              }
            }
          } else {
            es.push([stepKey++, new Type(ast, input)]);
          }
        }
        if (searchTree.otherwise.length > 0) {
          candidates = candidates.concat(searchTree.otherwise);
        }
        let queue = void 0;
        for (let i = 0; i < candidates.length; i++) {
          const candidate = candidates[i];
          const pr = map25.get(candidate)(input, options);
          const eu = !queue || queue.length === 0 ? eitherOrUndefined(pr) : void 0;
          if (eu) {
            if (isRight2(eu)) {
              return right2(eu.right);
            } else {
              es.push([stepKey++, new Member(candidate, eu.left)]);
            }
          } else {
            const nk = stepKey++;
            if (!queue) {
              queue = [];
            }
            queue.push((state) => suspend3(() => {
              if ("finalResult" in state) {
                return unit5;
              } else {
                return flatMap10(either3(pr), (t) => {
                  if (isRight2(t)) {
                    state.finalResult = right2(t.right);
                  } else {
                    state.es.push([nk, new Member(candidate, t.left)]);
                  }
                  return unit5;
                });
              }
            }));
          }
        }
        const computeResult = (es2) => isNonEmptyArray2(es2) ? es2.length === 1 && es2[0][1]._tag === "Type" ? left2(es2[0][1]) : left2(new Union2(ast, input, sortByIndex(es2))) : (
          // this should never happen
          left2(new Type(neverKeyword, input))
        );
        if (queue && queue.length > 0) {
          const cqueue = queue;
          return suspend3(() => {
            const state = {
              es: Array.from(es)
            };
            return flatMap10(forEach8(cqueue, (f) => f(state), {
              concurrency: concurrency2,
              batching: batching2,
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
      const get17 = memoizeThunk(() => goMemo(annotations(ast.f(), ast.annotations), isDecoding));
      return (a, options) => get17()(a, options);
    }
  }
};
var fromRefinement = (ast, refinement) => (u) => refinement(u) ? right2(u) : left2(new Type(ast, u));
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
        const propertySignature2 = ast.propertySignatures[i];
        const type = isDecoding ? encodedAST(propertySignature2.type) : typeAST(propertySignature2.type);
        if (isLiteral(type) && !propertySignature2.isOptional) {
          out.push([propertySignature2.name, type]);
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
  for (let i = 0; i < members.length; i++) {
    const member = members[i];
    const tags = getLiterals(member, isDecoding);
    if (tags.length > 0) {
      for (let j = 0; j < tags.length; j++) {
        const [key, literal2] = tags[j];
        const hash4 = String(literal2.literal);
        keys6[key] = keys6[key] || {
          buckets: {},
          literals: []
        };
        const buckets = keys6[key].buckets;
        if (Object.prototype.hasOwnProperty.call(buckets, hash4)) {
          if (j < tags.length - 1) {
            continue;
          }
          buckets[hash4].push(member);
          keys6[key].literals.push(literal2);
        } else {
          buckets[hash4] = [member];
          keys6[key].literals.push(literal2);
          break;
        }
      }
    } else {
      otherwise.push(member);
    }
  }
  return {
    keys: keys6,
    otherwise
  };
};
var dropRightRefinement = (ast) => isRefinement(ast) ? dropRightRefinement(ast.from) : ast;
var handleForbidden = (effect3, ast, actual, options) => {
  const eu = eitherOrUndefined(effect3);
  if (eu) {
    return eu;
  }
  if (options?.isEffectAllowed === true) {
    return effect3;
  }
  try {
    return runSync(either3(effect3));
  } catch (e) {
    return left2(new Forbidden(ast, actual, "cannot be be resolved synchronously, this is caused by using runSync on an effect that performs async work"));
  }
};
function sortByIndex(es) {
  return es.sort(([a], [b]) => a > b ? 1 : a < b ? -1 : 0).map(([_, a]) => a);
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
          out = map24(out, f);
        }
        return out;
      };
  }
};

// ../../node_modules/.pnpm/@effect+schema@0.64.16_effect@2.4.15_fast-check@3.17.1/node_modules/@effect/schema/dist/esm/Equivalence.js
var EquivalenceHookId2 = EquivalenceHookId;
var make59 = (schema) => go4(schema.ast);
var getHook2 = /* @__PURE__ */ getAnnotation(EquivalenceHookId2);
var go4 = (ast) => {
  const hook = getHook2(ast);
  if (isSome2(hook)) {
    switch (ast._tag) {
      case "Declaration":
        return hook.value(...ast.typeParameters.map(go4));
      case "Refinement":
        return hook.value(go4(ast.from));
      default:
        return hook.value();
    }
  }
  switch (ast._tag) {
    case "NeverKeyword":
      throw new Error("cannot build an Equivalence for `never`");
    case "Transformation":
      return go4(ast.to);
    case "Declaration":
    case "Literal":
    case "StringKeyword":
    case "TemplateLiteral":
    case "UniqueSymbol":
    case "SymbolKeyword":
    case "UnknownKeyword":
    case "AnyKeyword":
    case "NumberKeyword":
    case "BooleanKeyword":
    case "BigIntKeyword":
    case "UndefinedKeyword":
    case "VoidKeyword":
    case "Enums":
    case "ObjectKeyword":
      return equals;
    case "Refinement":
      return go4(ast.from);
    case "Suspend": {
      const get17 = memoizeThunk(() => go4(ast.f()));
      return (a, b) => get17()(a, b);
    }
    case "TupleType": {
      const elements = ast.elements.map((element) => go4(element.type));
      const rest = ast.rest.map(go4);
      return make((a, b) => {
        const len = a.length;
        if (len !== b.length) {
          return false;
        }
        let i = 0;
        for (; i < Math.min(len, ast.elements.length); i++) {
          if (!elements[i](a[i], b[i])) {
            return false;
          }
        }
        if (isNonEmptyReadonlyArray(rest)) {
          const [head7, ...tail2] = rest;
          for (; i < len - tail2.length; i++) {
            if (!head7(a[i], b[i])) {
              return false;
            }
          }
          for (let j = 0; j < tail2.length; j++) {
            i += j;
            if (!tail2[j](a[i], b[i])) {
              return false;
            }
          }
        }
        return true;
      });
    }
    case "TypeLiteral": {
      if (ast.propertySignatures.length === 0 && ast.indexSignatures.length === 0) {
        return equals;
      }
      const propertySignatures = ast.propertySignatures.map((ps) => go4(ps.type));
      const indexSignatures = ast.indexSignatures.map((is2) => go4(is2.type));
      return make((a, b) => {
        const aStringKeys = Object.keys(a);
        const aSymbolKeys = Object.getOwnPropertySymbols(a);
        for (let i = 0; i < propertySignatures.length; i++) {
          const ps = ast.propertySignatures[i];
          const name = ps.name;
          const aHas = Object.prototype.hasOwnProperty.call(a, name);
          const bHas = Object.prototype.hasOwnProperty.call(b, name);
          if (ps.isOptional) {
            if (aHas !== bHas) {
              return false;
            }
          }
          if (aHas && bHas && !propertySignatures[i](a[name], b[name])) {
            return false;
          }
        }
        let bSymbolKeys;
        let bStringKeys;
        for (let i = 0; i < indexSignatures.length; i++) {
          const is2 = ast.indexSignatures[i];
          const base = getParameterBase(is2.parameter);
          const isSymbol2 = isSymbolKeyword(base);
          if (isSymbol2) {
            bSymbolKeys = bSymbolKeys || Object.getOwnPropertySymbols(b);
            if (aSymbolKeys.length !== bSymbolKeys.length) {
              return false;
            }
          } else {
            bStringKeys = bStringKeys || Object.keys(b);
            if (aStringKeys.length !== bStringKeys.length) {
              return false;
            }
          }
          const aKeys = isSymbol2 ? aSymbolKeys : aStringKeys;
          for (let j = 0; j < aKeys.length; j++) {
            const key = aKeys[j];
            if (!Object.prototype.hasOwnProperty.call(b, key) || !indexSignatures[i](a[key], b[key])) {
              return false;
            }
          }
        }
        return true;
      });
    }
    case "Union": {
      const searchTree = getSearchTree(ast.types, true);
      const ownKeys2 = ownKeys(searchTree.keys);
      const len = ownKeys2.length;
      return make((a, b) => {
        let candidates = [];
        if (len > 0 && isRecord(a)) {
          for (let i = 0; i < len; i++) {
            const name = ownKeys2[i];
            const buckets = searchTree.keys[name].buckets;
            if (Object.prototype.hasOwnProperty.call(a, name)) {
              const literal2 = String(a[name]);
              if (Object.prototype.hasOwnProperty.call(buckets, literal2)) {
                candidates = candidates.concat(buckets[literal2]);
              }
            }
          }
        }
        if (searchTree.otherwise.length > 0) {
          candidates = candidates.concat(searchTree.otherwise);
        }
        const tuples = candidates.map((ast2) => [go4(ast2), is(make58(ast2))]);
        for (let i = 0; i < tuples.length; i++) {
          const [equivalence3, is2] = tuples[i];
          if (is2(a) && is2(b)) {
            if (equivalence3(a, b)) {
              return true;
            }
          }
        }
        return false;
      });
    }
  }
};

// ../../node_modules/.pnpm/@effect+schema@0.64.16_effect@2.4.15_fast-check@3.17.1/node_modules/@effect/schema/dist/esm/Pretty.js
var PrettyHookId2 = PrettyHookId;
var make60 = (schema) => compile(schema.ast);
var getHook3 = /* @__PURE__ */ getAnnotation(PrettyHookId2);
var getMatcher = (defaultPretty) => (ast) => match(getHook3(ast), {
  onNone: () => defaultPretty,
  onSome: (handler) => handler()
});
var toString = /* @__PURE__ */ getMatcher((a) => String(a));
var stringify = /* @__PURE__ */ getMatcher((a) => JSON.stringify(a));
var formatUnknown2 = /* @__PURE__ */ getMatcher(formatUnknown);
var match17 = {
  "Declaration": (ast, go5) => {
    const hook = getHook3(ast);
    if (isSome2(hook)) {
      return hook.value(...ast.typeParameters.map(go5));
    }
    throw new Error(`cannot build a Pretty for a declaration without annotations (${ast})`);
  },
  "VoidKeyword": /* @__PURE__ */ getMatcher(() => "void(0)"),
  "NeverKeyword": /* @__PURE__ */ getMatcher(() => {
    throw new Error("cannot pretty print a `never` value");
  }),
  "Literal": /* @__PURE__ */ getMatcher((literal2) => typeof literal2 === "bigint" ? `${String(literal2)}n` : JSON.stringify(literal2)),
  "SymbolKeyword": toString,
  "UniqueSymbol": toString,
  "TemplateLiteral": stringify,
  "UndefinedKeyword": toString,
  "UnknownKeyword": formatUnknown2,
  "AnyKeyword": formatUnknown2,
  "ObjectKeyword": formatUnknown2,
  "StringKeyword": stringify,
  "NumberKeyword": toString,
  "BooleanKeyword": toString,
  "BigIntKeyword": /* @__PURE__ */ getMatcher((a) => `${String(a)}n`),
  "Enums": stringify,
  "TupleType": (ast, go5) => {
    const hook = getHook3(ast);
    if (isSome2(hook)) {
      return hook.value();
    }
    const elements = ast.elements.map((e) => go5(e.type));
    const rest = ast.rest.map(go5);
    return (input) => {
      const output = [];
      let i = 0;
      for (; i < elements.length; i++) {
        if (input.length < i + 1) {
          if (ast.elements[i].isOptional) {
            continue;
          }
        } else {
          output.push(elements[i](input[i]));
        }
      }
      if (isNonEmptyReadonlyArray(rest)) {
        const [head7, ...tail2] = rest;
        for (; i < input.length - tail2.length; i++) {
          output.push(head7(input[i]));
        }
        for (let j = 0; j < tail2.length; j++) {
          i += j;
          output.push(tail2[j](input[i]));
        }
      }
      return "[" + output.join(", ") + "]";
    };
  },
  "TypeLiteral": (ast, go5) => {
    const hook = getHook3(ast);
    if (isSome2(hook)) {
      return hook.value();
    }
    const propertySignaturesTypes = ast.propertySignatures.map((f) => go5(f.type));
    const indexSignatureTypes = ast.indexSignatures.map((is2) => go5(is2.type));
    const expectedKeys = {};
    for (let i = 0; i < propertySignaturesTypes.length; i++) {
      expectedKeys[ast.propertySignatures[i].name] = null;
    }
    return (input) => {
      const output = [];
      for (let i = 0; i < propertySignaturesTypes.length; i++) {
        const ps = ast.propertySignatures[i];
        const name = ps.name;
        if (ps.isOptional && !Object.prototype.hasOwnProperty.call(input, name)) {
          continue;
        }
        output.push(`${getPrettyPropertyKey(name)}: ${propertySignaturesTypes[i](input[name])}`);
      }
      if (indexSignatureTypes.length > 0) {
        for (let i = 0; i < indexSignatureTypes.length; i++) {
          const type = indexSignatureTypes[i];
          const keys6 = getKeysForIndexSignature(input, ast.indexSignatures[i].parameter);
          for (const key of keys6) {
            if (Object.prototype.hasOwnProperty.call(expectedKeys, key)) {
              continue;
            }
            output.push(`${getPrettyPropertyKey(key)}: ${type(input[key])}`);
          }
        }
      }
      return isNonEmptyReadonlyArray(output) ? "{ " + output.join(", ") + " }" : "{}";
    };
  },
  "Union": (ast, go5) => {
    const hook = getHook3(ast);
    if (isSome2(hook)) {
      return hook.value();
    }
    const types = ast.types.map((ast2) => [is(make58(ast2)), go5(ast2)]);
    return (a) => {
      const index = types.findIndex(([is2]) => is2(a));
      return types[index][1](a);
    };
  },
  "Suspend": (ast, go5) => {
    return match(getHook3(ast), {
      onNone: () => {
        const get17 = memoizeThunk(() => go5(ast.f()));
        return (a) => get17()(a);
      },
      onSome: (handler) => handler()
    });
  },
  "Refinement": (ast, go5) => {
    return match(getHook3(ast), {
      onNone: () => go5(ast.from),
      onSome: (handler) => handler()
    });
  },
  "Transformation": (ast, go5) => {
    return match(getHook3(ast), {
      onNone: () => go5(ast.to),
      onSome: (handler) => handler()
    });
  }
};
var compile = /* @__PURE__ */ getCompiler(match17);
var getPrettyPropertyKey = (name) => typeof name === "string" ? JSON.stringify(name) : String(name);

// ../../node_modules/.pnpm/@effect+schema@0.64.16_effect@2.4.15_fast-check@3.17.1/node_modules/@effect/schema/dist/esm/Schema.js
var Schema_exports = {};
__export(Schema_exports, {
  $PropertySignature: () => $PropertySignature,
  Base64: () => Base64,
  Base64Url: () => Base64Url,
  BetweenBigDecimalTypeId: () => BetweenBigDecimalTypeId,
  BetweenBigintTypeId: () => BetweenBigintTypeId2,
  BetweenDurationTypeId: () => BetweenDurationTypeId,
  BetweenTypeId: () => BetweenTypeId2,
  BigDecimal: () => BigDecimal,
  BigDecimalFromNumber: () => BigDecimalFromNumber,
  BigDecimalFromSelf: () => BigDecimalFromSelf,
  BigintFromNumber: () => BigintFromNumber,
  BrandTypeId: () => BrandTypeId,
  Char: () => Char,
  Class: () => Class6,
  Date: () => _Date,
  DateFromSelf: () => DateFromSelf,
  DateFromString: () => DateFromString,
  Duration: () => Duration,
  DurationFromMillis: () => DurationFromMillis,
  DurationFromNanos: () => DurationFromNanos,
  DurationFromSelf: () => DurationFromSelf,
  EndsWithTypeId: () => EndsWithTypeId,
  FiberId: () => FiberId,
  FiberIdFromSelf: () => FiberIdFromSelf,
  Finite: () => Finite,
  FiniteTypeId: () => FiniteTypeId,
  FromPropertySignature: () => FromPropertySignature,
  GreaterThanBigDecimalTypeId: () => GreaterThanBigDecimalTypeId,
  GreaterThanBigintTypeId: () => GreaterThanBigintTypeId2,
  GreaterThanDurationTypeId: () => GreaterThanDurationTypeId,
  GreaterThanOrEqualToBigDecimalTypeId: () => GreaterThanOrEqualToBigDecimalTypeId,
  GreaterThanOrEqualToBigintTypeId: () => GreaterThanOrEqualToBigintTypeId2,
  GreaterThanOrEqualToDurationTypeId: () => GreaterThanOrEqualToDurationTypeId,
  GreaterThanOrEqualToTypeId: () => GreaterThanOrEqualToTypeId2,
  GreaterThanTypeId: () => GreaterThanTypeId2,
  Hex: () => Hex,
  IncludesTypeId: () => IncludesTypeId,
  InstanceOfTypeId: () => InstanceOfTypeId,
  Int: () => Int,
  IntTypeId: () => IntTypeId2,
  ItemsCountTypeId: () => ItemsCountTypeId2,
  JsonNumber: () => JsonNumber,
  JsonNumberTypeId: () => JsonNumberTypeId,
  LengthTypeId: () => LengthTypeId2,
  LessThanBigDecimalTypeId: () => LessThanBigDecimalTypeId,
  LessThanBigintTypeId: () => LessThanBigintTypeId2,
  LessThanDurationTypeId: () => LessThanDurationTypeId,
  LessThanOrEqualToBigDecimalTypeId: () => LessThanOrEqualToBigDecimalTypeId,
  LessThanOrEqualToBigintTypeId: () => LessThanOrEqualToBigintTypeId2,
  LessThanOrEqualToDurationTypeId: () => LessThanOrEqualToDurationTypeId,
  LessThanOrEqualToTypeId: () => LessThanOrEqualToTypeId2,
  LessThanTypeId: () => LessThanTypeId2,
  Lowercase: () => Lowercase,
  Lowercased: () => Lowercased,
  LowercasedTypeId: () => LowercasedTypeId,
  MaxItemsTypeId: () => MaxItemsTypeId2,
  MaxLengthTypeId: () => MaxLengthTypeId2,
  MinItemsTypeId: () => MinItemsTypeId2,
  MinLengthTypeId: () => MinLengthTypeId2,
  MultipleOfTypeId: () => MultipleOfTypeId,
  Negative: () => Negative,
  NegativeBigDecimalFromSelf: () => NegativeBigDecimalFromSelf,
  NegativeBigDecimalTypeId: () => NegativeBigDecimalTypeId,
  NegativeBigint: () => NegativeBigint,
  NegativeBigintFromSelf: () => NegativeBigintFromSelf,
  NonEmpty: () => NonEmpty,
  NonNaN: () => NonNaN,
  NonNaNTypeId: () => NonNaNTypeId,
  NonNegative: () => NonNegative,
  NonNegativeBigDecimalFromSelf: () => NonNegativeBigDecimalFromSelf,
  NonNegativeBigDecimalTypeId: () => NonNegativeBigDecimalTypeId,
  NonNegativeBigint: () => NonNegativeBigint,
  NonNegativeBigintFromSelf: () => NonNegativeBigintFromSelf,
  NonPositive: () => NonPositive,
  NonPositiveBigDecimalFromSelf: () => NonPositiveBigDecimalFromSelf,
  NonPositiveBigDecimalTypeId: () => NonPositiveBigDecimalTypeId,
  NonPositiveBigint: () => NonPositiveBigint,
  NonPositiveBigintFromSelf: () => NonPositiveBigintFromSelf,
  Not: () => Not,
  NumberFromString: () => NumberFromString,
  PatternTypeId: () => PatternTypeId,
  Positive: () => Positive,
  PositiveBigDecimalFromSelf: () => PositiveBigDecimalFromSelf,
  PositiveBigDecimalTypeId: () => PositiveBigDecimalTypeId,
  PositiveBigint: () => PositiveBigint,
  PositiveBigintFromSelf: () => PositiveBigintFromSelf,
  PropertySignatureDeclaration: () => PropertySignatureDeclaration,
  PropertySignatureTransformation: () => PropertySignatureTransformation2,
  PropertySignatureTypeId: () => PropertySignatureTypeId2,
  Secret: () => Secret,
  SecretFromSelf: () => SecretFromSelf,
  StartsWithTypeId: () => StartsWithTypeId,
  TaggedClass: () => TaggedClass2,
  TaggedError: () => TaggedError2,
  TaggedRequest: () => TaggedRequest,
  ToPropertySignature: () => ToPropertySignature,
  Trim: () => Trim,
  Trimmed: () => Trimmed,
  TrimmedTypeId: () => TrimmedTypeId,
  TypeId: () => TypeId18,
  ULID: () => ULID,
  ULIDTypeId: () => ULIDTypeId,
  UUID: () => UUID,
  UUIDTypeId: () => UUIDTypeId,
  Uint8Array: () => _Uint8Array,
  Uint8ArrayFromSelf: () => Uint8ArrayFromSelf,
  Uppercase: () => Uppercase,
  Uppercased: () => Uppercased,
  UppercasedTypeId: () => UppercasedTypeId,
  ValidDateFromSelf: () => ValidDateFromSelf,
  ValidDateTypeId: () => ValidDateTypeId,
  annotations: () => annotations3,
  any: () => any,
  array: () => array5,
  asBrandSchema: () => asBrandSchema,
  asSchema: () => asSchema,
  asserts: () => asserts,
  attachPropertySignature: () => attachPropertySignature,
  batching: () => batching,
  between: () => between4,
  betweenBigDecimal: () => betweenBigDecimal,
  betweenBigint: () => betweenBigint,
  betweenDuration: () => betweenDuration,
  bigint: () => bigint2,
  bigintFromSelf: () => bigintFromSelf,
  boolean: () => boolean,
  brand: () => brand,
  cause: () => cause3,
  causeDefectUnknown: () => causeDefectUnknown,
  causeFromSelf: () => causeFromSelf,
  chunk: () => chunk3,
  chunkFromSelf: () => chunkFromSelf,
  clamp: () => clamp7,
  clampBigDecimal: () => clampBigDecimal,
  clampBigint: () => clampBigint,
  clampDuration: () => clampDuration,
  compose: () => compose3,
  concurrency: () => concurrency,
  data: () => data,
  dataFromSelf: () => dataFromSelf,
  declare: () => declare,
  decode: () => decode5,
  decodeEither: () => decodeEither,
  decodeOption: () => decodeOption,
  decodePromise: () => decodePromise,
  decodeSync: () => decodeSync,
  decodeUnknown: () => decodeUnknown2,
  decodeUnknownEither: () => decodeUnknownEither2,
  decodeUnknownOption: () => decodeUnknownOption,
  decodeUnknownPromise: () => decodeUnknownPromise,
  decodeUnknownSync: () => decodeUnknownSync,
  default: () => _default,
  description: () => description,
  documentation: () => documentation,
  either: () => either7,
  eitherFromSelf: () => eitherFromSelf,
  eitherFromUnion: () => eitherFromUnion,
  encode: () => encode4,
  encodeEither: () => encodeEither,
  encodeOption: () => encodeOption,
  encodePromise: () => encodePromise,
  encodeSync: () => encodeSync,
  encodeUnknown: () => encodeUnknown2,
  encodeUnknownEither: () => encodeUnknownEither2,
  encodeUnknownOption: () => encodeUnknownOption,
  encodeUnknownPromise: () => encodeUnknownPromise,
  encodeUnknownSync: () => encodeUnknownSync,
  encodedSchema: () => encodedSchema,
  endsWith: () => endsWith,
  enums: () => enums,
  equivalence: () => equivalence2,
  examples: () => examples,
  exit: () => exit3,
  exitFromSelf: () => exitFromSelf,
  extend: () => extend4,
  filter: () => filter12,
  finite: () => finite,
  format: () => format4,
  fromBrand: () => fromBrand,
  fromKey: () => fromKey,
  getNumberIndexedAccess: () => getNumberIndexedAccess2,
  greaterThan: () => greaterThan5,
  greaterThanBigDecimal: () => greaterThanBigDecimal,
  greaterThanBigint: () => greaterThanBigint,
  greaterThanDuration: () => greaterThanDuration,
  greaterThanOrEqualTo: () => greaterThanOrEqualTo4,
  greaterThanOrEqualToBigDecimal: () => greaterThanOrEqualToBigDecimal,
  greaterThanOrEqualToBigint: () => greaterThanOrEqualToBigint,
  greaterThanOrEqualToDuration: () => greaterThanOrEqualToDuration,
  hash: () => hash3,
  hashMap: () => hashMap2,
  hashMapFromSelf: () => hashMapFromSelf,
  hashSet: () => hashSet2,
  hashSetFromSelf: () => hashSetFromSelf,
  head: () => head6,
  headOrElse: () => headOrElse,
  identifier: () => identifier,
  includes: () => includes,
  instanceOf: () => instanceOf,
  int: () => int,
  is: () => is,
  isSchema: () => isSchema,
  itemsCount: () => itemsCount,
  jsonSchema: () => jsonSchema,
  keyof: () => keyof2,
  length: () => length4,
  lessThan: () => lessThan9,
  lessThanBigDecimal: () => lessThanBigDecimal,
  lessThanBigint: () => lessThanBigint,
  lessThanDuration: () => lessThanDuration,
  lessThanOrEqualTo: () => lessThanOrEqualTo4,
  lessThanOrEqualToBigDecimal: () => lessThanOrEqualToBigDecimal,
  lessThanOrEqualToBigint: () => lessThanOrEqualToBigint,
  lessThanOrEqualToDuration: () => lessThanOrEqualToDuration,
  list: () => list,
  listFromSelf: () => listFromSelf,
  literal: () => literal,
  lowercased: () => lowercased,
  make: () => make61,
  maxItems: () => maxItems,
  maxLength: () => maxLength,
  message: () => message,
  minItems: () => minItems,
  minLength: () => minLength,
  multipleOf: () => multipleOf,
  mutable: () => mutable2,
  negateBigDecimal: () => negateBigDecimal,
  negative: () => negative,
  negativeBigDecimal: () => negativeBigDecimal,
  negativeBigint: () => negativeBigint,
  never: () => never6,
  nonEmpty: () => nonEmpty,
  nonEmptyArray: () => nonEmptyArray,
  nonNaN: () => nonNaN,
  nonNegative: () => nonNegative,
  nonNegativeBigDecimal: () => nonNegativeBigDecimal,
  nonNegativeBigint: () => nonNegativeBigint,
  nonPositive: () => nonPositive,
  nonPositiveBigDecimal: () => nonPositiveBigDecimal,
  nonPositiveBigint: () => nonPositiveBigint,
  null: () => $null2,
  nullable: () => nullable,
  nullish: () => nullish,
  number: () => number4,
  object: () => object,
  omit: () => omit3,
  option: () => option3,
  optionFromNullable: () => optionFromNullable,
  optionFromNullish: () => optionFromNullish,
  optionFromOrUndefined: () => optionFromOrUndefined,
  optionFromSelf: () => optionFromSelf,
  optional: () => optional,
  optionalElement: () => optionalElement,
  optionalToOptional: () => optionalToOptional,
  optionalToRequired: () => optionalToRequired,
  orUndefined: () => orUndefined2,
  parseJson: () => parseJson,
  partial: () => partial2,
  pattern: () => pattern,
  pick: () => pick3,
  pickLiteral: () => pickLiteral,
  pluck: () => pluck,
  positive: () => positive,
  positiveBigDecimal: () => positiveBigDecimal,
  positiveBigint: () => positiveBigint,
  propertySignature: () => propertySignature,
  readonlyMap: () => readonlyMap,
  readonlyMapFromSelf: () => readonlyMapFromSelf,
  readonlySet: () => readonlySet,
  readonlySetFromSelf: () => readonlySetFromSelf,
  record: () => record3,
  rename: () => rename2,
  required: () => required2,
  sortedSet: () => sortedSet,
  sortedSetFromSelf: () => sortedSetFromSelf,
  split: () => split5,
  startsWith: () => startsWith,
  string: () => string2,
  struct: () => struct4,
  suspend: () => suspend9,
  symbol: () => symbol4,
  symbolFromSelf: () => symbolFromSelf,
  templateLiteral: () => templateLiteral,
  title: () => title,
  transform: () => transform2,
  transformLiteral: () => transformLiteral,
  transformLiterals: () => transformLiterals,
  transformOrFail: () => transformOrFail,
  trimmed: () => trimmed,
  tuple: () => tuple2,
  typeSchema: () => typeSchema,
  undefined: () => $undefined,
  union: () => union10,
  uniqueSymbolFromSelf: () => uniqueSymbolFromSelf,
  unknown: () => unknown,
  uppercased: () => uppercased,
  validDate: () => validDate,
  validate: () => validate4,
  validateEither: () => validateEither2,
  validateOption: () => validateOption,
  validatePromise: () => validatePromise,
  validateSync: () => validateSync,
  void: () => $void
});

// ../../node_modules/.pnpm/@effect+schema@0.64.16_effect@2.4.15_fast-check@3.17.1/node_modules/@effect/schema/dist/esm/internal/serializable.js
var symbol3 = /* @__PURE__ */ Symbol.for("@effect/schema/Serializable/symbol");
var symbolResult = /* @__PURE__ */ Symbol.for("@effect/schema/Serializable/symbolResult");

// ../../node_modules/.pnpm/@effect+schema@0.64.16_effect@2.4.15_fast-check@3.17.1/node_modules/@effect/schema/dist/esm/Schema.js
var TypeId18 = TypeId17;
var asSchema = (schema) => schema;
var hash3 = (schema) => hash2(schema.ast);
var format4 = (schema) => String(schema.ast);
var encodedSchema = (schema) => make61(encodedAST(schema.ast));
var typeSchema = (schema) => make61(typeAST(schema.ast));
var encodeUnknown2 = (schema, options) => {
  const encodeUnknown3 = encodeUnknown(schema, options);
  return (u, overrideOptions) => mapError8(encodeUnknown3(u, overrideOptions), parseError);
};
var encodeUnknownEither2 = (schema, options) => {
  const encodeUnknownEither3 = encodeUnknownEither(schema, options);
  return (u, overrideOptions) => mapLeft(encodeUnknownEither3(u, overrideOptions), parseError);
};
var encodeUnknownPromise = (schema, options) => {
  const parser = encodeUnknown2(schema, options);
  return (u, overrideOptions) => runPromise(parser(u, overrideOptions));
};
var encode4 = encodeUnknown2;
var encodeEither = encodeUnknownEither2;
var encodePromise = encodeUnknownPromise;
var decodeUnknown2 = (schema, options) => {
  const decodeUnknown3 = decodeUnknown(schema, options);
  return (u, overrideOptions) => mapError8(decodeUnknown3(u, overrideOptions), parseError);
};
var decodeUnknownEither2 = (schema, options) => {
  const decodeUnknownEither3 = decodeUnknownEither(schema, options);
  return (u, overrideOptions) => mapLeft(decodeUnknownEither3(u, overrideOptions), parseError);
};
var decodeUnknownPromise = (schema, options) => {
  const parser = decodeUnknown2(schema, options);
  return (u, overrideOptions) => runPromise(parser(u, overrideOptions));
};
var decode5 = decodeUnknown2;
var decodeEither = decodeUnknownEither2;
var decodePromise = decodeUnknownPromise;
var validate4 = (schema, options) => {
  const validate5 = validate3(schema, options);
  return (u, overrideOptions) => mapError8(validate5(u, overrideOptions), parseError);
};
var validateEither2 = (schema, options) => {
  const validateEither3 = validateEither(schema, options);
  return (u, overrideOptions) => mapLeft(validateEither3(u, overrideOptions), parseError);
};
var validatePromise = (schema, options) => {
  const parser = validate4(schema, options);
  return (u, overrideOptions) => runPromise(parser(u, overrideOptions));
};
var isSchema = (u) => hasProperty(u, TypeId18) && isObject(u[TypeId18]);
var make61 = make58;
var $literal = class _$literal extends Schema {
  static ast = (literals) => {
    return isMembers(literals) ? Union.make(mapMembers(literals, (literal2) => new Literal(literal2))) : new Literal(literals[0]);
  };
  literals;
  constructor(literals, ast = _$literal.ast(literals)) {
    super(ast);
    this.literals = [...literals];
  }
  annotations(annotations4) {
    return new _$literal(this.literals, annotations2(this.ast, annotations4));
  }
};
function literal(...literals) {
  return isNonEmptyReadonlyArray(literals) ? new $literal(literals) : never6;
}
var pickLiteral = (...literals) => (_schema) => literal(...literals);
var uniqueSymbolFromSelf = (symbol5) => make61(new UniqueSymbol(symbol5));
var $enums = class _$enums extends Schema {
  enums;
  static ast = (enums2) => {
    return new Enums(Object.keys(enums2).filter((key) => typeof enums2[enums2[key]] !== "number").map((key) => [key, enums2[key]]));
  };
  constructor(enums2, ast = _$enums.ast(enums2)) {
    super(ast);
    this.enums = enums2;
  }
  annotations(annotations4) {
    return new _$enums(this.enums, annotations2(this.ast, annotations4));
  }
};
var enums = (enums2) => new $enums(enums2);
var templateLiteral = (...[head7, ...tail2]) => {
  let types = getTemplateLiterals(head7.ast);
  for (const span4 of tail2) {
    types = flatMap2(types, (a) => getTemplateLiterals(span4.ast).map((b) => combineTemplateLiterals(a, b)));
  }
  return make61(Union.make(types));
};
var combineTemplateLiterals = (a, b) => {
  if (isLiteral(a)) {
    return isLiteral(b) ? new Literal(String(a.literal) + String(b.literal)) : TemplateLiteral.make(String(a.literal) + b.head, b.spans);
  }
  if (isLiteral(b)) {
    return TemplateLiteral.make(a.head, modifyNonEmptyLast(a.spans, (span4) => new TemplateLiteralSpan(span4.type, span4.literal + String(b.literal))));
  }
  return TemplateLiteral.make(a.head, appendAll(modifyNonEmptyLast(a.spans, (span4) => new TemplateLiteralSpan(span4.type, span4.literal + String(b.head))), b.spans));
};
var getTemplateLiterals = (ast) => {
  switch (ast._tag) {
    case "Literal":
      return [ast];
    case "NumberKeyword":
    case "StringKeyword":
      return [TemplateLiteral.make("", [new TemplateLiteralSpan(ast, "")])];
    case "Union":
      return flatMap2(ast.types, getTemplateLiterals);
    default:
      throw new Error(`templateLiteral: unsupported template literal span (${ast})`);
  }
};
var declareConstructor = (typeParameters, decodeUnknown3, encodeUnknown3, annotations4) => make61(new Declaration(typeParameters.map((tp) => tp.ast), (...typeParameters2) => decodeUnknown3(...typeParameters2.map(make61)), (...typeParameters2) => encodeUnknown3(...typeParameters2.map(make61)), toASTAnnotations(annotations4)));
var declarePrimitive = (is2, annotations4) => {
  const decodeUnknown3 = () => (input, _, ast) => is2(input) ? succeed15(input) : fail15(new Type(ast, input));
  const encodeUnknown3 = decodeUnknown3;
  return make61(new Declaration([], decodeUnknown3, encodeUnknown3, toASTAnnotations(annotations4)));
};
var declare = function() {
  if (Array.isArray(arguments[0])) {
    const typeParameters = arguments[0];
    const decodeUnknown3 = arguments[1];
    const encodeUnknown3 = arguments[2];
    const annotations5 = arguments[3];
    return declareConstructor(typeParameters, decodeUnknown3, encodeUnknown3, annotations5);
  }
  const is2 = arguments[0];
  const annotations4 = arguments[1];
  return declarePrimitive(is2, annotations4);
};
var BrandTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/Brand");
var fromBrand = (constructor, annotations4) => (self) => make61(new Refinement(self.ast, (a, _, ast) => {
  const either8 = constructor.either(a);
  return isLeft2(either8) ? some2(new Type(ast, a, either8.left.map((v) => v.message).join(", "))) : none2();
}, toASTAnnotations({
  typeId: {
    id: BrandTypeId,
    annotation: {
      constructor
    }
  },
  ...annotations4
})));
var InstanceOfTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/InstanceOf");
var instanceOf = (constructor, annotations4) => declare((u) => u instanceof constructor, {
  title: constructor.name,
  description: `an instance of ${constructor.name}`,
  pretty: () => String,
  typeId: {
    id: InstanceOfTypeId,
    annotation: {
      constructor
    }
  },
  ...annotations4
});
var $undefined = /* @__PURE__ */ make61(undefinedKeyword);
var $void = /* @__PURE__ */ make61(voidKeyword);
var $null2 = /* @__PURE__ */ make61($null);
var never6 = /* @__PURE__ */ make61(neverKeyword);
var unknown = /* @__PURE__ */ make61(unknownKeyword);
var any = /* @__PURE__ */ make61(anyKeyword);
var string2 = /* @__PURE__ */ make61(stringKeyword);
var number4 = /* @__PURE__ */ make61(numberKeyword);
var boolean = /* @__PURE__ */ make61(booleanKeyword);
var bigintFromSelf = /* @__PURE__ */ make61(bigIntKeyword);
var symbolFromSelf = /* @__PURE__ */ make61(symbolKeyword);
var object = /* @__PURE__ */ make61(objectKeyword);
var $union = class _$union extends Schema {
  static ast = (members) => {
    return Union.members(members.map((m) => m.ast));
  };
  members;
  constructor(members, ast = _$union.ast(members)) {
    super(ast);
    this.members = [...members];
  }
  annotations(annotations4) {
    return new _$union(this.members, annotations2(this.ast, annotations4));
  }
};
function union10(...members) {
  return isMembers(members) ? new $union(members) : isNonEmptyReadonlyArray(members) ? members[0] : never6;
}
var nullable = (self) => union10(self, $null2);
var orUndefined2 = (self) => union10(self, $undefined);
var nullish = (self) => union10(self, $null2, $undefined);
var keyof2 = (self) => make61(keyof(self.ast));
var optionalElement = (self) => new $OptionalElement(self);
var $OptionalElement = class {
  optionalElement;
  [TypeId18];
  constructor(optionalElement2) {
    this.optionalElement = optionalElement2;
  }
  toString() {
    return `${this.optionalElement.ast}?`;
  }
};
var $tupleType = class _$tupleType extends Schema {
  elements;
  rest;
  static ast = (elements, rest) => {
    return new TupleType(elements.map((schema) => isSchema(schema) ? new Element(schema.ast, false) : new Element(schema.optionalElement.ast, true)), rest.map((e) => e.ast), true);
  };
  constructor(elements, rest, ast = _$tupleType.ast(elements, rest)) {
    super(ast);
    this.elements = elements;
    this.rest = rest;
  }
  annotations(annotations4) {
    return new _$tupleType(this.elements, this.rest, annotations2(this.ast, annotations4));
  }
};
function tuple2(...args) {
  return Array.isArray(args[0]) ? new $tupleType(args[0], args.slice(1)) : new $tupleType(args, []);
}
var $array = class _$array extends $tupleType {
  value;
  constructor(value3, ast) {
    super([], [value3], ast);
    this.value = value3;
  }
  annotations(annotations4) {
    return new _$array(this.value, annotations2(this.ast, annotations4));
  }
};
var array5 = (value3) => new $array(value3);
var $nonEmptyArray = class _$nonEmptyArray extends $tupleType {
  value;
  constructor(value3, ast) {
    super([value3], [value3], ast);
    this.value = value3;
  }
  annotations(annotations4) {
    return new _$nonEmptyArray(this.value, annotations2(this.ast, annotations4));
  }
};
var nonEmptyArray = (value3) => new $nonEmptyArray(value3);
var formatToken = (isOptional) => isOptional ? '"?:"' : '":"';
var PropertySignatureDeclaration = class {
  type;
  isOptional;
  isReadonly;
  annotations;
  /**
   * @since 1.0.0
   */
  _tag = "PropertySignatureDeclaration";
  constructor(type, isOptional, isReadonly, annotations4) {
    this.type = type;
    this.isOptional = isOptional;
    this.isReadonly = isReadonly;
    this.annotations = annotations4;
  }
  /**
   * @since 1.0.0
   */
  toString() {
    const token = formatToken(this.isOptional);
    const type = String(this.type);
    return `PropertySignature<${token}, ${type}, never, ${token}, ${type}>`;
  }
};
var FromPropertySignature = class {
  type;
  isOptional;
  isReadonly;
  annotations;
  fromKey;
  constructor(type, isOptional, isReadonly, annotations4, fromKey2) {
    this.type = type;
    this.isOptional = isOptional;
    this.isReadonly = isReadonly;
    this.annotations = annotations4;
    this.fromKey = fromKey2;
  }
};
var ToPropertySignature = class {
  type;
  isOptional;
  isReadonly;
  annotations;
  constructor(type, isOptional, isReadonly, annotations4) {
    this.type = type;
    this.isOptional = isOptional;
    this.isReadonly = isReadonly;
    this.annotations = annotations4;
  }
};
var formatPropertyKey = (p) => {
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
   * @since 1.0.0
   */
  _tag = "PropertySignatureTransformation";
  constructor(from, to, decode6, encode5) {
    this.from = from;
    this.to = to;
    this.decode = decode6;
    this.encode = encode5;
  }
  /**
   * @since 1.0.0
   */
  toString() {
    return `PropertySignature<${formatToken(this.to.isOptional)}, ${this.to.type}, ${formatPropertyKey(this.from.fromKey)}, ${formatToken(this.from.isOptional)}, ${this.from.type}>`;
  }
};
var PropertySignatureTypeId2 = PropertySignatureTypeId;
var _propertySignatureAnnotations = (ast, annotations4) => {
  switch (ast._tag) {
    case "PropertySignatureDeclaration": {
      return new PropertySignatureDeclaration(ast.type, ast.isOptional, ast.isReadonly, {
        ...ast.annotations,
        ...annotations4
      });
    }
    case "PropertySignatureTransformation": {
      return new PropertySignatureTransformation2(new FromPropertySignature(ast.from.type, ast.from.isOptional, ast.from.isReadonly, ast.from.annotations), new ToPropertySignature(ast.to.type, ast.to.isOptional, ast.to.isReadonly, {
        ...ast.to.annotations,
        ...annotations4
      }), ast.decode, ast.encode);
    }
  }
};
var $PropertySignature = class _$PropertySignature {
  ast;
  [TypeId18];
  [PropertySignatureTypeId2] = null;
  _Key;
  _EncodedToken;
  _TypeToken;
  constructor(ast) {
    this.ast = ast;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  annotations(annotations4) {
    return new _$PropertySignature(_propertySignatureAnnotations(this.ast, toASTAnnotations(annotations4)));
  }
  toString() {
    return String(this.ast);
  }
};
var propertySignature = (self) => new $PropertySignature(new PropertySignatureDeclaration(self.ast, false, true, {}));
var fromKey = /* @__PURE__ */ dual(2, (self, key) => {
  const ast = self.ast;
  switch (ast._tag) {
    case "PropertySignatureDeclaration": {
      return new $PropertySignature(new PropertySignatureTransformation2(new FromPropertySignature(ast.type, ast.isOptional, ast.isReadonly, ast.annotations, key), new ToPropertySignature(typeAST(ast.type), ast.isOptional, ast.isReadonly, {}), identity, identity));
    }
    case "PropertySignatureTransformation":
      return new $PropertySignature(new PropertySignatureTransformation2(new FromPropertySignature(ast.from.type, ast.from.isOptional, ast.from.isReadonly, ast.from.annotations, key), ast.to, ast.decode, ast.encode));
  }
});
var optionalToRequired = (from, to, decode6, encode5) => new $PropertySignature(new PropertySignatureTransformation2(new FromPropertySignature(from.ast, true, true, {}, void 0), new ToPropertySignature(to.ast, false, true, {}), (o) => some2(decode6(o)), flatMap(encode5)));
var optionalToOptional = (from, to, decode6, encode5) => new $PropertySignature(new PropertySignatureTransformation2(new FromPropertySignature(from.ast, true, true, {}, void 0), new ToPropertySignature(to.ast, true, true, {}), decode6, encode5));
var optional = /* @__PURE__ */ dual((args) => isSchema(args[0]), (schema, options) => {
  const isExact = options?.exact;
  const defaultValue = options?.default;
  const isNullable2 = options?.nullable;
  const asOption = options?.as == "Option";
  if (isExact) {
    if (defaultValue) {
      if (isNullable2) {
        return optionalToRequired(nullable(schema), typeSchema(schema), match({
          onNone: defaultValue,
          onSome: (a) => a === null ? defaultValue() : a
        }), some2);
      } else {
        return optionalToRequired(schema, typeSchema(schema), match({
          onNone: defaultValue,
          onSome: identity
        }), some2);
      }
    } else if (asOption) {
      if (isNullable2) {
        return optionalToRequired(nullable(schema), optionFromSelf(typeSchema(schema)), filter(isNotNull), identity);
      } else {
        return optionalToRequired(schema, optionFromSelf(typeSchema(schema)), identity, identity);
      }
    } else {
      if (isNullable2) {
        return optionalToOptional(nullable(schema), typeSchema(schema), filter(isNotNull), identity);
      } else {
        return new $PropertySignature(new PropertySignatureDeclaration(schema.ast, true, true, {}));
      }
    }
  } else {
    if (defaultValue) {
      if (isNullable2) {
        return optionalToRequired(nullish(schema), typeSchema(schema), match({
          onNone: defaultValue,
          onSome: (a) => a == null ? defaultValue() : a
        }), some2);
      } else {
        return optionalToRequired(orUndefined2(schema), typeSchema(schema), match({
          onNone: defaultValue,
          onSome: (a) => a === void 0 ? defaultValue() : a
        }), some2);
      }
    } else if (asOption) {
      if (isNullable2) {
        return optionalToRequired(nullish(schema), optionFromSelf(typeSchema(schema)), filter((a) => a != null), identity);
      } else {
        return optionalToRequired(orUndefined2(schema), optionFromSelf(typeSchema(schema)), filter(isNotUndefined), identity);
      }
    } else {
      if (isNullable2) {
        return optionalToOptional(nullish(schema), orUndefined2(typeSchema(schema)), filter(isNotNull), identity);
      } else {
        return new $PropertySignature(new PropertySignatureDeclaration(orUndefined2(schema).ast, true, true, {}));
      }
    }
  }
});
var isPropertySignature = (u) => hasProperty(u, PropertySignatureTypeId2);
var $typeLiteral = class _$typeLiteral extends Schema {
  static ast = (fields, records) => {
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
              from.push(new PropertySignature(key, type, isOptional, true));
              to.push(new PropertySignature(key, typeAST(type), isOptional, true, toAnnotations));
              pss.push(new PropertySignature(key, type, isOptional, true, toAnnotations));
              break;
            }
            case "PropertySignatureTransformation": {
              const fromKey2 = ast.from.fromKey ?? key;
              from.push(new PropertySignature(fromKey2, ast.from.type, ast.from.isOptional, true, ast.from.annotations));
              to.push(new PropertySignature(key, ast.to.type, ast.to.isOptional, true, ast.to.annotations));
              transformations.push(new PropertySignatureTransformation(fromKey2, key, ast.decode, ast.encode));
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
        return new Transformation(new TypeLiteral(from, issFrom), new TypeLiteral(to, issTo), new TypeLiteralTransformation(transformations));
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
  fields;
  records;
  constructor(fields, records, ast = _$typeLiteral.ast(fields, records)) {
    super(ast);
    this.fields = {
      ...fields
    };
    this.records = [...records];
  }
  annotations(annotations4) {
    return new _$typeLiteral(this.fields, this.records, annotations2(this.ast, annotations4));
  }
};
function struct4(fields, ...records) {
  return new $typeLiteral(fields, records);
}
var $record = class _$record extends $typeLiteral {
  key;
  value;
  constructor(key, value3, ast) {
    super({}, [{
      key,
      value: value3
    }], ast);
    this.key = key;
    this.value = value3;
  }
  annotations(annotations4) {
    return new _$record(this.key, this.value, annotations2(this.ast, annotations4));
  }
};
var record3 = (key, value3) => new $record(key, value3);
var pick3 = (...keys6) => (self) => make61(pick2(self.ast, keys6));
var omit3 = (...keys6) => (self) => make61(omit2(self.ast, keys6));
var pluck = /* @__PURE__ */ dual(2, (schema, key) => {
  const ps = getPropertyKeyIndexedAccess(typeSchema(schema).ast, key);
  const value3 = make61(ps.isOptional ? orUndefined(ps.type) : ps.type);
  return transform2(schema.pipe(pick3(key)), value3, (a) => a[key], (ak) => ps.isOptional && ak === void 0 ? {} : {
    [key]: ak
  });
});
var makeBrandSchema = (self, annotations4, brand2) => {
  const ast = annotations(self, toASTAnnotations(annotations4));
  const _validateEither = validateEither2(make61(ast));
  const refined2 = refined((unbranded) => match2(_validateEither(unbranded), {
    onLeft: (e) => some2(error(formatError(e), e)),
    onRight: () => none2()
  }));
  refined2[TypeId18] = variance5;
  refined2.ast = ast;
  refined2.pipe = function() {
    return pipeArguments(this, arguments);
  };
  refined2.annotations = (annotations5) => {
    return makeBrandSchema(ast, annotations5, brand2);
  };
  refined2.toString = () => `${ast} & Brand<${formatPropertyKey(brand2)}>`;
  return refined2;
};
var asBrandSchema = (schema) => schema;
var brand = (brand2, annotations4) => (self) => {
  const brandAnnotation = match(getBrandAnnotation(self.ast), {
    onNone: () => [brand2],
    onSome: (brands) => [...brands, brand2]
  });
  return makeBrandSchema(self.ast, {
    ...annotations4,
    [BrandAnnotationId]: brandAnnotation
  }, brand2);
};
var partial2 = /* @__PURE__ */ dual((args) => isSchema(args[0]), (self, options) => make61(partial(self.ast, options)));
var required2 = (self) => make61(required(self.ast));
var mutable2 = (schema) => make61(mutable(schema.ast));
var getExtendErrorMessage = (x, y, path) => `cannot extend \`${x}\` with \`${y}\` (path [${path?.join(", ")}])`;
var intersectTypeLiterals = (x, y, path) => {
  if (isTypeLiteral(x) && isTypeLiteral(y)) {
    const propertySignatures = [...x.propertySignatures];
    for (const ps of y.propertySignatures) {
      const name = ps.name;
      const i = propertySignatures.findIndex((ps2) => ps2.name === name);
      if (i === -1) {
        propertySignatures.push(ps);
      } else {
        const {
          isOptional,
          type
        } = propertySignatures[i];
        path = [...path, formatUnknown(name)];
        propertySignatures[i] = new PropertySignature(name, extendAST(type, ps.type, path), isOptional, true);
      }
    }
    return new TypeLiteral(propertySignatures, x.indexSignatures.concat(y.indexSignatures));
  }
  throw new Error(getExtendErrorMessage(x, y, path));
};
var extendAST = (x, y, path) => Union.make(intersectUnionMembers([x], [y], path));
var intersectUnionMembers = (xs, ys, path) => flatMap2(xs, (x) => flatMap2(ys, (y) => {
  if (isUnion(x)) {
    return intersectUnionMembers(x.types, isUnion(y) ? y.types : [y], path);
  } else if (isUnion(y)) {
    return intersectUnionMembers([x], y.types, path);
  }
  if (isTypeLiteral(x)) {
    if (isTypeLiteral(y)) {
      return [intersectTypeLiterals(x, y, path)];
    } else if (isTransform(y) && isTypeLiteralTransformation(y.transformation)) {
      return [new Transformation(intersectTypeLiterals(x, y.from, path), intersectTypeLiterals(typeAST(x), y.to, path), new TypeLiteralTransformation(y.transformation.propertySignatureTransformations))];
    }
  } else if (isTransform(x) && isTypeLiteralTransformation(x.transformation)) {
    if (isTypeLiteral(y)) {
      return [new Transformation(intersectTypeLiterals(x.from, y, path), intersectTypeLiterals(x.to, typeAST(y), path), new TypeLiteralTransformation(x.transformation.propertySignatureTransformations))];
    } else if (isTransform(y) && isTypeLiteralTransformation(y.transformation)) {
      return [new Transformation(intersectTypeLiterals(x.from, y.from, path), intersectTypeLiterals(x.to, y.to, path), new TypeLiteralTransformation(x.transformation.propertySignatureTransformations.concat(y.transformation.propertySignatureTransformations)))];
    }
  }
  throw new Error(getExtendErrorMessage(x, y, path));
}));
var extend4 = /* @__PURE__ */ dual(2, (self, that) => make61(extendAST(self.ast, that.ast, [])));
var compose3 = /* @__PURE__ */ dual((args) => isSchema(args[1]), (from, to) => make61(compose2(from.ast, to.ast)));
var suspend9 = (f) => make61(new Suspend(() => f().ast));
function filter12(predicate, annotations4) {
  return (self) => make61(new Refinement(self.ast, (a, options, ast) => {
    const out = predicate(a, options, ast);
    if (isBoolean(out)) {
      return out ? none2() : some2(new Type(ast, a));
    }
    return out;
  }, toASTAnnotations(annotations4)));
}
var $transformOrFail = class _$transformOrFail extends Schema {
  from;
  to;
  constructor(from, to, ast) {
    super(ast);
    this.from = from;
    this.to = to;
  }
  annotations(annotations4) {
    return new _$transformOrFail(this.from, this.to, annotations2(this.ast, annotations4));
  }
};
var transformOrFail = /* @__PURE__ */ dual((args) => isSchema(args[0]) && isSchema(args[1]), (from, to, decode6, encode5) => new $transformOrFail(from, to, new Transformation(from.ast, to.ast, new FinalTransformation(decode6, encode5))));
var transform2 = /* @__PURE__ */ dual((args) => isSchema(args[0]) && isSchema(args[1]), (from, to, decode6, encode5) => transformOrFail(from, to, (fromA) => succeed15(decode6(fromA)), (toI) => succeed15(encode5(toI))));
var transformLiteral = (from, to) => transform2(literal(from), literal(to), () => to, () => from);
function transformLiterals(...pairs) {
  return union10(...pairs.map(([from, to]) => transformLiteral(from, to)));
}
var attachPropertySignature = /* @__PURE__ */ dual((args) => isSchema(args[0]), (schema, key, value3, annotations4) => {
  const attached = extend4(typeSchema(schema), struct4({
    [key]: isSymbol(value3) ? uniqueSymbolFromSelf(value3) : literal(value3)
  })).ast;
  return make61(new Transformation(schema.ast, annotations4 ? annotations(attached, toASTAnnotations(annotations4)) : attached, new TypeLiteralTransformation([new PropertySignatureTransformation(key, key, () => some2(value3), () => none2())])));
});
var annotations3 = /* @__PURE__ */ dual(2, (self, annotations4) => self.annotations(annotations4));
var message = (message2) => (self) => self.annotations({
  [MessageAnnotationId]: message2
});
var identifier = (identifier2) => (self) => self.annotations({
  [IdentifierAnnotationId]: identifier2
});
var title = (title2) => (self) => self.annotations({
  [TitleAnnotationId]: title2
});
var description = (description2) => (self) => self.annotations({
  [DescriptionAnnotationId]: description2
});
var examples = (examples2) => (self) => self.annotations({
  [ExamplesAnnotationId]: examples2
});
var _default = (value3) => (self) => self.annotations({
  [DefaultAnnotationId]: value3
});
var documentation = (documentation2) => (self) => self.annotations({
  [DocumentationAnnotationId]: documentation2
});
var jsonSchema = (jsonSchema2) => (self) => self.annotations({
  [JSONSchemaAnnotationId]: jsonSchema2
});
var equivalence2 = (equivalence3) => (self) => self.annotations({
  [EquivalenceHookId]: () => equivalence3
});
var concurrency = (concurrency2) => (self) => self.annotations({
  [ConcurrencyAnnotationId]: concurrency2
});
var batching = (batching2) => (self) => self.annotations({
  [BatchingAnnotationId]: batching2
});
var rename2 = /* @__PURE__ */ dual(2, (self, mapping) => {
  return make61(rename(self.ast, mapping));
});
var TrimmedTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/Trimmed");
var trimmed = (annotations4) => (self) => self.pipe(filter12((a) => a === a.trim(), {
  typeId: TrimmedTypeId,
  description: "a string with no leading or trailing whitespace",
  ...annotations4
}));
var MaxLengthTypeId2 = MaxLengthTypeId;
var maxLength = (maxLength2, annotations4) => (self) => self.pipe(filter12((a) => a.length <= maxLength2, {
  typeId: MaxLengthTypeId2,
  description: `a string at most ${maxLength2} character(s) long`,
  jsonSchema: {
    maxLength: maxLength2
  },
  ...annotations4
}));
var MinLengthTypeId2 = MinLengthTypeId;
var minLength = (minLength2, annotations4) => (self) => self.pipe(filter12((a) => a.length >= minLength2, {
  typeId: MinLengthTypeId2,
  description: `a string at least ${minLength2} character(s) long`,
  jsonSchema: {
    minLength: minLength2
  },
  ...annotations4
}));
var PatternTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/Pattern");
var pattern = (regex, annotations4) => (self) => {
  const pattern2 = regex.source;
  return self.pipe(filter12((a) => {
    regex.lastIndex = 0;
    return regex.test(a);
  }, {
    typeId: {
      id: PatternTypeId,
      annotation: {
        regex
      }
    },
    description: `a string matching the pattern ${pattern2}`,
    jsonSchema: {
      pattern: pattern2
    },
    arbitrary: () => (fc) => fc.stringMatching(regex),
    ...annotations4
  }));
};
var StartsWithTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/StartsWith");
var startsWith = (startsWith2, annotations4) => (self) => self.pipe(filter12((a) => a.startsWith(startsWith2), {
  typeId: {
    id: StartsWithTypeId,
    annotation: {
      startsWith: startsWith2
    }
  },
  description: `a string starting with ${JSON.stringify(startsWith2)}`,
  jsonSchema: {
    pattern: `^${startsWith2}`
  },
  ...annotations4
}));
var EndsWithTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/EndsWith");
var endsWith = (endsWith2, annotations4) => (self) => self.pipe(filter12((a) => a.endsWith(endsWith2), {
  typeId: {
    id: EndsWithTypeId,
    annotation: {
      endsWith: endsWith2
    }
  },
  description: `a string ending with ${JSON.stringify(endsWith2)}`,
  jsonSchema: {
    pattern: `^.*${endsWith2}$`
  },
  ...annotations4
}));
var IncludesTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/Includes");
var includes = (searchString, annotations4) => (self) => self.pipe(filter12((a) => a.includes(searchString), {
  typeId: {
    id: IncludesTypeId,
    annotation: {
      includes: searchString
    }
  },
  description: `a string including ${JSON.stringify(searchString)}`,
  jsonSchema: {
    pattern: `.*${searchString}.*`
  },
  ...annotations4
}));
var LowercasedTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/Lowercased");
var lowercased = (annotations4) => (self) => self.pipe(filter12((a) => a === a.toLowerCase(), {
  typeId: LowercasedTypeId,
  description: "a lowercase string",
  ...annotations4
}));
var Lowercased = /* @__PURE__ */ string2.pipe(/* @__PURE__ */ lowercased({
  identifier: "Lowercased",
  title: "Lowercased"
}));
var UppercasedTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/Uppercased");
var uppercased = (annotations4) => (self) => self.pipe(filter12((a) => a === a.toUpperCase(), {
  typeId: UppercasedTypeId,
  description: "an uppercase string",
  ...annotations4
}));
var Uppercased = /* @__PURE__ */ string2.pipe(/* @__PURE__ */ uppercased({
  identifier: "Uppercased",
  title: "Uppercased"
}));
var LengthTypeId2 = LengthTypeId;
var length4 = (length5, annotations4) => (self) => self.pipe(filter12((a) => a.length === length5, {
  typeId: LengthTypeId2,
  description: length5 === 1 ? `a single character` : `a string ${length5} character(s) long`,
  jsonSchema: {
    minLength: length5,
    maxLength: length5
  },
  ...annotations4
}));
var Char = /* @__PURE__ */ string2.pipe(/* @__PURE__ */ length4(1, {
  identifier: "Char"
}));
var nonEmpty = (annotations4) => minLength(1, {
  description: "a non empty string",
  ...annotations4
});
var Lowercase = /* @__PURE__ */ transform2(string2, Lowercased, (s) => s.toLowerCase(), identity).annotations({
  identifier: "Lowercase"
});
var Uppercase = /* @__PURE__ */ transform2(string2, Uppercased, (s) => s.toUpperCase(), identity).annotations({
  identifier: "Uppercase"
});
var Trimmed = /* @__PURE__ */ string2.pipe(/* @__PURE__ */ trimmed({
  identifier: "Trimmed",
  title: "Trimmed"
}));
var Trim = /* @__PURE__ */ transform2(string2, Trimmed, (s) => s.trim(), identity).annotations({
  identifier: "Trim"
});
var split5 = (separator) => transform2(string2, array5(string2), split2(separator), join(separator));
var JsonString = /* @__PURE__ */ string2.annotations({
  [IdentifierAnnotationId]: "JsonString",
  [TitleAnnotationId]: "JsonString",
  [DescriptionAnnotationId]: "a JSON string"
});
var parseJson = (schema, o) => {
  if (isSchema(schema)) {
    return compose3(parseJson(o), schema);
  }
  const options = schema;
  return transformOrFail(JsonString, unknown, (s, _, ast) => _try({
    try: () => JSON.parse(s, options?.reviver),
    catch: (e) => new Type(ast, s, e.message)
  }), (u, _, ast) => _try({
    try: () => JSON.stringify(u, options?.replacer, options?.space),
    catch: (e) => new Type(ast, u, e.message)
  }));
};
var NonEmpty = /* @__PURE__ */ string2.pipe(/* @__PURE__ */ nonEmpty({
  identifier: "NonEmpty",
  title: "NonEmpty"
}));
var UUIDTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/UUID");
var uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i;
var UUID = /* @__PURE__ */ string2.pipe(/* @__PURE__ */ pattern(uuidRegex, {
  typeId: UUIDTypeId,
  identifier: "UUID",
  title: "UUID",
  description: "a Universally Unique Identifier",
  arbitrary: () => (fc) => fc.uuid()
}));
var ULIDTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/ULID");
var ulidRegex = /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/i;
var ULID = /* @__PURE__ */ string2.pipe(/* @__PURE__ */ pattern(ulidRegex, {
  typeId: ULIDTypeId,
  identifier: "ULID",
  title: "ULID",
  description: "a Universally Unique Lexicographically Sortable Identifier",
  arbitrary: () => (fc) => fc.ulid()
}));
var FiniteTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/Finite");
var finite = (annotations4) => (self) => self.pipe(filter12((a) => Number.isFinite(a), {
  typeId: FiniteTypeId,
  description: "a finite number",
  ...annotations4
}));
var GreaterThanTypeId2 = GreaterThanTypeId;
var greaterThan5 = (min4, annotations4) => (self) => self.pipe(filter12((a) => a > min4, {
  typeId: GreaterThanTypeId2,
  description: min4 === 0 ? "a positive number" : `a number greater than ${min4}`,
  jsonSchema: {
    exclusiveMinimum: min4
  },
  ...annotations4
}));
var GreaterThanOrEqualToTypeId2 = GreaterThanOrEqualToTypeId;
var greaterThanOrEqualTo4 = (min4, annotations4) => (self) => self.pipe(filter12((a) => a >= min4, {
  typeId: GreaterThanOrEqualToTypeId2,
  description: min4 === 0 ? "a non-negative number" : `a number greater than or equal to ${min4}`,
  jsonSchema: {
    minimum: min4
  },
  ...annotations4
}));
var MultipleOfTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/MultipleOf");
var multipleOf = (divisor, annotations4) => (self) => self.pipe(filter12((a) => remainder(a, divisor) === 0, {
  typeId: MultipleOfTypeId,
  description: `a number divisible by ${divisor}`,
  jsonSchema: {
    multipleOf: Math.abs(divisor)
  },
  // spec requires positive divisor
  ...annotations4
}));
var IntTypeId2 = IntTypeId;
var int = (annotations4) => (self) => self.pipe(filter12((a) => Number.isSafeInteger(a), {
  typeId: IntTypeId2,
  title: "integer",
  description: "an integer",
  jsonSchema: {
    type: "integer"
  },
  ...annotations4
}));
var LessThanTypeId2 = LessThanTypeId;
var lessThan9 = (max6, annotations4) => (self) => self.pipe(filter12((a) => a < max6, {
  typeId: LessThanTypeId2,
  description: max6 === 0 ? "a negative number" : `a number less than ${max6}`,
  jsonSchema: {
    exclusiveMaximum: max6
  },
  ...annotations4
}));
var LessThanOrEqualToTypeId2 = LessThanOrEqualToTypeId;
var lessThanOrEqualTo4 = (max6, annotations4) => (self) => self.pipe(filter12((a) => a <= max6, {
  typeId: LessThanOrEqualToTypeId2,
  description: max6 === 0 ? "a non-positive number" : `a number less than or equal to ${max6}`,
  jsonSchema: {
    maximum: max6
  },
  ...annotations4
}));
var BetweenTypeId2 = BetweenTypeId;
var between4 = (min4, max6, annotations4) => (self) => self.pipe(filter12((a) => a >= min4 && a <= max6, {
  typeId: BetweenTypeId2,
  description: `a number between ${min4} and ${max6}`,
  jsonSchema: {
    maximum: max6,
    minimum: min4
  },
  ...annotations4
}));
var NonNaNTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/NonNaN");
var nonNaN = (annotations4) => (self) => self.pipe(filter12((a) => !Number.isNaN(a), {
  typeId: NonNaNTypeId,
  description: "a number excluding NaN",
  ...annotations4
}));
var positive = (annotations4) => greaterThan5(0, annotations4);
var negative = (annotations4) => lessThan9(0, annotations4);
var nonPositive = (annotations4) => lessThanOrEqualTo4(0, annotations4);
var nonNegative = (annotations4) => greaterThanOrEqualTo4(0, annotations4);
var clamp7 = (minimum, maximum) => (self) => transform2(self, self.pipe(typeSchema, between4(minimum, maximum)), (self2) => clamp6(self2, {
  minimum,
  maximum
}), identity, {
  strict: false
});
var NumberFromString = /* @__PURE__ */ transformOrFail(string2, number4, (s, _, ast) => fromOption4(parse(s), () => new Type(ast, s)), (n) => succeed15(String(n))).annotations({
  identifier: "NumberFromString"
});
var Finite = /* @__PURE__ */ number4.pipe(/* @__PURE__ */ finite({
  identifier: "Finite",
  title: "Finite"
}));
var Int = /* @__PURE__ */ number4.pipe(/* @__PURE__ */ int({
  identifier: "Int",
  title: "Int"
}));
var NonNaN = /* @__PURE__ */ number4.pipe(/* @__PURE__ */ nonNaN({
  identifier: "NonNaN",
  title: "NonNaN"
}));
var Positive = /* @__PURE__ */ number4.pipe(/* @__PURE__ */ positive({
  identifier: "Positive",
  title: "Positive"
}));
var Negative = /* @__PURE__ */ number4.pipe(/* @__PURE__ */ negative({
  identifier: "Negative",
  title: "Negative"
}));
var NonPositive = /* @__PURE__ */ number4.pipe(/* @__PURE__ */ nonPositive({
  identifier: "NonPositive",
  title: "NonPositive"
}));
var NonNegative = /* @__PURE__ */ number4.pipe(/* @__PURE__ */ nonNegative({
  identifier: "NonNegative",
  title: "NonNegative"
}));
var JsonNumberTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/JsonNumber");
var JsonNumber = /* @__PURE__ */ number4.pipe(/* @__PURE__ */ filter12((n) => !Number.isNaN(n) && Number.isFinite(n), {
  typeId: JsonNumberTypeId,
  identifier: "JsonNumber",
  title: "JSON-compatible number",
  description: "a JSON-compatible number, excluding NaN, +Infinity, and -Infinity",
  jsonSchema: {
    type: "number"
  }
}));
var Not = /* @__PURE__ */ transform2(boolean, boolean, not, not);
var symbol4 = /* @__PURE__ */ transform2(string2, symbolFromSelf, (s) => Symbol.for(s), (sym) => sym.description, {
  strict: false
}).annotations({
  identifier: "symbol"
});
var GreaterThanBigintTypeId2 = GreaterThanBigintTypeId;
var greaterThanBigint = (min4, annotations4) => (self) => self.pipe(filter12((a) => a > min4, {
  typeId: {
    id: GreaterThanBigintTypeId2,
    annotation: {
      min: min4
    }
  },
  description: min4 === 0n ? "a positive bigint" : `a bigint greater than ${min4}n`,
  ...annotations4
}));
var GreaterThanOrEqualToBigintTypeId2 = GreaterThanOrEqualToBigintTypeId;
var greaterThanOrEqualToBigint = (min4, annotations4) => (self) => self.pipe(filter12((a) => a >= min4, {
  typeId: {
    id: GreaterThanOrEqualToBigintTypeId2,
    annotation: {
      min: min4
    }
  },
  description: min4 === 0n ? "a non-negative bigint" : `a bigint greater than or equal to ${min4}n`,
  ...annotations4
}));
var LessThanBigintTypeId2 = LessThanBigintTypeId;
var lessThanBigint = (max6, annotations4) => (self) => self.pipe(filter12((a) => a < max6, {
  typeId: {
    id: LessThanBigintTypeId2,
    annotation: {
      max: max6
    }
  },
  description: max6 === 0n ? "a negative bigint" : `a bigint less than ${max6}n`,
  ...annotations4
}));
var LessThanOrEqualToBigintTypeId2 = LessThanOrEqualToBigintTypeId;
var lessThanOrEqualToBigint = (max6, annotations4) => (self) => self.pipe(filter12((a) => a <= max6, {
  typeId: {
    id: LessThanOrEqualToBigintTypeId2,
    annotation: {
      max: max6
    }
  },
  description: max6 === 0n ? "a non-positive bigint" : `a bigint less than or equal to ${max6}n`,
  ...annotations4
}));
var BetweenBigintTypeId2 = BetweenBigintTypeId;
var betweenBigint = (min4, max6, annotations4) => (self) => self.pipe(filter12((a) => a >= min4 && a <= max6, {
  typeId: {
    id: BetweenBigintTypeId2,
    annotation: {
      max: max6,
      min: min4
    }
  },
  description: `a bigint between ${min4}n and ${max6}n`,
  ...annotations4
}));
var positiveBigint = (annotations4) => greaterThanBigint(0n, annotations4);
var negativeBigint = (annotations4) => lessThanBigint(0n, annotations4);
var nonNegativeBigint = (annotations4) => greaterThanOrEqualToBigint(0n, annotations4);
var nonPositiveBigint = (annotations4) => lessThanOrEqualToBigint(0n, annotations4);
var clampBigint = (minimum, maximum) => (self) => transform2(self, self.pipe(typeSchema, betweenBigint(minimum, maximum)), (self2) => clamp3(self2, {
  minimum,
  maximum
}), identity, {
  strict: false
});
var bigint2 = /* @__PURE__ */ transformOrFail(string2, bigintFromSelf, (s, _, ast) => fromOption4(fromString2(s), () => new Type(ast, s)), (n) => succeed15(String(n))).annotations({
  identifier: "bigint"
});
var PositiveBigintFromSelf = /* @__PURE__ */ bigintFromSelf.pipe(/* @__PURE__ */ positiveBigint({
  identifier: "PositiveBigintFromSelf",
  title: "PositiveBigintFromSelf"
}));
var PositiveBigint = /* @__PURE__ */ bigint2.pipe(/* @__PURE__ */ positiveBigint({
  identifier: "PositiveBigint",
  title: "PositiveBigint"
}));
var NegativeBigintFromSelf = /* @__PURE__ */ bigintFromSelf.pipe(/* @__PURE__ */ negativeBigint({
  identifier: "NegativeBigintFromSelf",
  title: "NegativeBigintFromSelf"
}));
var NegativeBigint = /* @__PURE__ */ bigint2.pipe(/* @__PURE__ */ negativeBigint({
  identifier: "NegativeBigint",
  title: "NegativeBigint"
}));
var NonPositiveBigintFromSelf = /* @__PURE__ */ bigintFromSelf.pipe(/* @__PURE__ */ nonPositiveBigint({
  identifier: "NonPositiveBigintFromSelf",
  title: "NonPositiveBigintFromSelf"
}));
var NonPositiveBigint = /* @__PURE__ */ bigint2.pipe(/* @__PURE__ */ nonPositiveBigint({
  identifier: "NonPositiveBigint",
  title: "NonPositiveBigint"
}));
var NonNegativeBigintFromSelf = /* @__PURE__ */ bigintFromSelf.pipe(/* @__PURE__ */ nonNegativeBigint({
  identifier: "NonNegativeBigintFromSelf",
  title: "NonNegativeBigintFromSelf"
}));
var NonNegativeBigint = /* @__PURE__ */ bigint2.pipe(/* @__PURE__ */ nonNegativeBigint({
  identifier: "NonNegativeBigint",
  title: "NonNegativeBigint"
}));
var BigintFromNumber = /* @__PURE__ */ transformOrFail(number4, bigintFromSelf, (n, _, ast) => fromOption4(fromNumber2(n), () => new Type(ast, n)), (b, _, ast) => fromOption4(toNumber(b), () => new Type(ast, b))).annotations({
  identifier: "BigintFromNumber"
});
var SecretFromSelf = /* @__PURE__ */ declare(isSecret2, {
  identifier: "SecretFromSelf",
  pretty: () => (secret) => String(secret),
  arbitrary: () => (fc) => fc.string().map((_) => fromString4(_))
});
var Secret = /* @__PURE__ */ transform2(string2, SecretFromSelf, (str) => fromString4(str), (secret) => value2(secret), {
  strict: false
}).annotations({
  identifier: "Secret"
});
var DurationFromSelf = /* @__PURE__ */ declare(isDuration, {
  identifier: "DurationFromSelf",
  pretty: () => String,
  arbitrary: () => (fc) => fc.oneof(fc.constant(infinity), fc.bigUint().map((_) => nanos(_)), fc.bigUint().map((_) => micros(_)), fc.maxSafeNat().map((_) => millis(_)), fc.maxSafeNat().map((_) => seconds(_)), fc.maxSafeNat().map((_) => minutes(_)), fc.maxSafeNat().map((_) => hours(_)), fc.maxSafeNat().map((_) => days(_)), fc.maxSafeNat().map((_) => weeks(_))),
  equivalence: () => Equivalence2
});
var DurationFromNanos = /* @__PURE__ */ transformOrFail(bigintFromSelf, DurationFromSelf, (nanos2) => succeed15(nanos(nanos2)), (duration2, _, ast) => match(toNanos(duration2), {
  onNone: () => fail15(new Type(ast, duration2)),
  onSome: (val) => succeed15(val)
})).annotations({
  identifier: "DurationFromNanos"
});
var DurationFromMillis = /* @__PURE__ */ transform2(number4, DurationFromSelf, (ms) => millis(ms), (n) => toMillis(n)).annotations({
  identifier: "DurationFromMillis"
});
var hrTime = /* @__PURE__ */ tuple2(/* @__PURE__ */ NonNegative.pipe(/* @__PURE__ */ finite({
  [TitleAnnotationId]: "seconds",
  [DescriptionAnnotationId]: "seconds"
})), /* @__PURE__ */ NonNegative.pipe(/* @__PURE__ */ finite({
  [TitleAnnotationId]: "nanos",
  [DescriptionAnnotationId]: "nanos"
})));
var Duration = /* @__PURE__ */ transform2(hrTime, DurationFromSelf, ([seconds2, nanos2]) => nanos(BigInt(seconds2) * BigInt(1e9) + BigInt(nanos2)), (duration2) => toHrTime(duration2)).annotations({
  identifier: "Duration"
});
var clampDuration = (minimum, maximum) => (self) => transform2(self, self.pipe(typeSchema, betweenDuration(minimum, maximum)), (self2) => clamp5(self2, {
  minimum,
  maximum
}), identity, {
  strict: false
});
var LessThanDurationTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/LessThanDuration");
var lessThanDuration = (max6, annotations4) => (self) => self.pipe(filter12((a) => lessThan3(a, max6), {
  typeId: {
    id: LessThanDurationTypeId,
    annotation: {
      max: max6
    }
  },
  description: `a Duration less than ${decode(max6)}`,
  ...annotations4
}));
var LessThanOrEqualToDurationTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/LessThanOrEqualToDuration");
var lessThanOrEqualToDuration = (max6, annotations4) => (self) => self.pipe(filter12((a) => lessThanOrEqualTo3(a, max6), {
  typeId: {
    id: LessThanDurationTypeId,
    annotation: {
      max: max6
    }
  },
  description: `a Duration less than or equal to ${decode(max6)}`,
  ...annotations4
}));
var GreaterThanDurationTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/GreaterThanDuration");
var greaterThanDuration = (min4, annotations4) => (self) => self.pipe(filter12((a) => greaterThan3(a, min4), {
  typeId: {
    id: GreaterThanDurationTypeId,
    annotation: {
      min: min4
    }
  },
  description: `a Duration greater than ${decode(min4)}`,
  ...annotations4
}));
var GreaterThanOrEqualToDurationTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/GreaterThanOrEqualToDuration");
var greaterThanOrEqualToDuration = (min4, annotations4) => (self) => self.pipe(filter12((a) => greaterThanOrEqualTo3(a, min4), {
  typeId: {
    id: GreaterThanOrEqualToDurationTypeId,
    annotation: {
      min: min4
    }
  },
  description: `a Duration greater than or equal to ${decode(min4)}`,
  ...annotations4
}));
var BetweenDurationTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/BetweenDuration");
var betweenDuration = (minimum, maximum, annotations4) => (self) => self.pipe(filter12((a) => between3(a, {
  minimum,
  maximum
}), {
  typeId: {
    id: BetweenDurationTypeId,
    annotation: {
      maximum,
      minimum
    }
  },
  description: `a Duration between ${decode(minimum)} and ${decode(maximum)}`,
  ...annotations4
}));
var Uint8ArrayFromSelf = /* @__PURE__ */ declare(isUint8Array, {
  identifier: "Uint8ArrayFromSelf",
  pretty: () => (u8arr) => `new Uint8Array(${JSON.stringify(Array.from(u8arr))})`,
  arbitrary: () => (fc) => fc.uint8Array(),
  equivalence: () => getEquivalence4(equals)
});
var _Uint8Array = /* @__PURE__ */ transform2(array5(number4.pipe(between4(0, 255, {
  title: "8-bit unsigned integer",
  description: "a 8-bit unsigned integer"
}))).annotations({
  description: "an array of 8-bit unsigned integers"
}), Uint8ArrayFromSelf, (a) => Uint8Array.from(a), (arr) => Array.from(arr)).annotations({
  identifier: "Uint8Array"
});
var makeEncodingTransformation = (id2, decode6, encode5) => transformOrFail(string2, Uint8ArrayFromSelf, (s, _, ast) => mapLeft(decode6(s), (decodeException) => new Type(ast, s, decodeException.message)), (u) => succeed15(encode5(u)), {
  strict: false
}).annotations({
  identifier: id2
});
var Base64 = /* @__PURE__ */ makeEncodingTransformation("Base64", decodeBase64, encodeBase64);
var Base64Url = /* @__PURE__ */ makeEncodingTransformation("Base64Url", decodeBase64Url, encodeBase64Url);
var Hex = /* @__PURE__ */ makeEncodingTransformation("Hex", decodeHex, encodeHex);
var MinItemsTypeId2 = MinItemsTypeId;
var minItems = (n, annotations4) => (self) => self.pipe(filter12((a) => a.length >= n, {
  typeId: MinItemsTypeId2,
  description: `an array of at least ${n} items`,
  jsonSchema: {
    minItems: n
  },
  ...annotations4
}));
var MaxItemsTypeId2 = MaxItemsTypeId;
var maxItems = (n, annotations4) => (self) => self.pipe(filter12((a) => a.length <= n, {
  typeId: MaxItemsTypeId2,
  description: `an array of at most ${n} items`,
  jsonSchema: {
    maxItems: n
  },
  ...annotations4
}));
var ItemsCountTypeId2 = ItemsCountTypeId;
var itemsCount = (n, annotations4) => (self) => self.pipe(filter12((a) => a.length === n, {
  typeId: ItemsCountTypeId2,
  description: `an array of exactly ${n} items`,
  jsonSchema: {
    minItems: n,
    maxItems: n
  },
  ...annotations4
}));
var getNumberIndexedAccess2 = (self) => make61(getNumberIndexedAccess(self.ast));
var head6 = (self) => transform2(self, optionFromSelf(getNumberIndexedAccess2(typeSchema(self))), head, match({
  onNone: () => [],
  onSome: of
}));
var headOrElse = /* @__PURE__ */ dual((args) => isSchema(args[0]), (self, fallback) => transformOrFail(self, getNumberIndexedAccess2(typeSchema(self)), (as9, _, ast) => as9.length > 0 ? succeed15(as9[0]) : fallback ? succeed15(fallback()) : fail15(new Type(ast, as9)), (a) => succeed15(of(a))));
var ValidDateTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/ValidDate");
var validDate = (annotations4) => (self) => self.pipe(filter12((a) => !Number.isNaN(a.getTime()), {
  typeId: ValidDateTypeId,
  description: "a valid Date",
  ...annotations4
}));
var DateFromSelf = /* @__PURE__ */ declare(isDate, {
  identifier: "DateFromSelf",
  description: "a potentially invalid Date instance",
  pretty: () => (date) => `new Date(${JSON.stringify(date)})`,
  arbitrary: () => (fc) => fc.date({
    noInvalidDate: false
  }),
  equivalence: () => Date2
});
var ValidDateFromSelf = /* @__PURE__ */ DateFromSelf.pipe(/* @__PURE__ */ validDate({
  identifier: "ValidDateFromSelf",
  description: "a valid Date instance"
}));
var DateFromString = /* @__PURE__ */ transform2(string2, DateFromSelf, (s) => new Date(s), (n) => n.toISOString()).annotations({
  identifier: "DateFromString"
});
var _Date = /* @__PURE__ */ DateFromString.pipe(/* @__PURE__ */ validDate({
  identifier: "Date"
}));
var OptionNoneEncoded = /* @__PURE__ */ struct4({
  _tag: literal("None")
}).annotations({
  description: "NoneEncoded"
});
var optionSomeEncoded = (value3) => struct4({
  _tag: literal("Some"),
  value: value3
}).annotations({
  description: `SomeEncoded<${format4(value3)}>`
});
var optionEncoded = (value3) => union10(OptionNoneEncoded, optionSomeEncoded(value3)).annotations({
  description: `OptionEncoded<${format4(value3)}>`
});
var optionDecode = (input) => input._tag === "None" ? none2() : some2(input.value);
var optionArbitrary = (value3) => {
  const arb = make56(optionEncoded(schemaFromArbitrary(value3)));
  return (fc) => arb(fc).map(optionDecode);
};
var optionPretty = (value3) => match({
  onNone: () => "none()",
  onSome: (a) => `some(${value3(a)})`
});
var optionParse = (decodeUnknown3) => (u, options, ast) => isOption2(u) ? isNone2(u) ? succeed15(none2()) : map24(decodeUnknown3(u.value, options), some2) : fail15(new Type(ast, u));
var optionFromSelf = (value3) => {
  return declare([value3], (value4) => optionParse(decodeUnknown(value4)), (value4) => optionParse(encodeUnknown(value4)), {
    description: `Option<${format4(value3)}>`,
    pretty: optionPretty,
    arbitrary: optionArbitrary,
    equivalence: getEquivalence
  });
};
var makeNoneEncoded = {
  _tag: "None"
};
var makeSomeEncoded = (value3) => ({
  _tag: "Some",
  value: value3
});
var option3 = (value3) => {
  const _value = asSchema(value3);
  return transform2(optionEncoded(_value), optionFromSelf(typeSchema(_value)), optionDecode, match({
    onNone: () => makeNoneEncoded,
    onSome: makeSomeEncoded
  }));
};
var optionFromNullable = (value3) => {
  const _value = asSchema(value3);
  return transform2(nullable(_value), optionFromSelf(typeSchema(_value)), fromNullable, getOrNull);
};
var optionFromNullish = (value3, onNoneEncoding) => {
  const _value = asSchema(value3);
  return transform2(nullish(_value), optionFromSelf(typeSchema(_value)), fromNullable, onNoneEncoding === null ? getOrNull : getOrUndefined);
};
var optionFromOrUndefined = (value3) => {
  const _value = asSchema(value3);
  return transform2(orUndefined2(_value), optionFromSelf(typeSchema(_value)), fromNullable, getOrUndefined);
};
var rightEncoded = (right3) => struct4({
  _tag: literal("Right"),
  right: right3
}).annotations({
  description: `RightEncoded<${format4(right3)}>`
});
var leftEncoded = (left3) => struct4({
  _tag: literal("Left"),
  left: left3
}).annotations({
  description: `LeftEncoded<${format4(left3)}>`
});
var eitherEncoded = (right3, left3) => union10(rightEncoded(right3), leftEncoded(left3)).annotations({
  description: `EitherEncoded<${format4(left3)}, ${format4(right3)}>`
});
var eitherDecode = (input) => input._tag === "Left" ? left2(input.left) : right2(input.right);
var eitherArbitrary = (right3, left3) => {
  const arb = make56(eitherEncoded(schemaFromArbitrary(right3), schemaFromArbitrary(left3)));
  return (fc) => arb(fc).map(eitherDecode);
};
var eitherPretty = (right3, left3) => match2({
  onLeft: (e) => `left(${left3(e)})`,
  onRight: (a) => `right(${right3(a)})`
});
var eitherParse = (parseRight, decodeUnknownLeft) => (u, options, ast) => isEither2(u) ? match2(u, {
  onLeft: (left3) => map24(decodeUnknownLeft(left3, options), left2),
  onRight: (right3) => map24(parseRight(right3, options), right2)
}) : fail15(new Type(ast, u));
var eitherFromSelf = ({
  left: left3,
  right: right3
}) => {
  return declare([right3, left3], (right4, left4) => eitherParse(decodeUnknown(right4), decodeUnknown(left4)), (right4, left4) => eitherParse(encodeUnknown(right4), encodeUnknown(left4)), {
    description: `Either<${format4(left3)}, ${format4(right3)}>`,
    pretty: eitherPretty,
    arbitrary: eitherArbitrary,
    equivalence: (right4, left4) => getEquivalence2(left4, right4)
  });
};
var makeLeftEncoded = (left3) => ({
  _tag: "Left",
  left: left3
});
var makeRightEncoded = (right3) => ({
  _tag: "Right",
  right: right3
});
var either7 = ({
  left: left3,
  right: right3
}) => {
  const _right = asSchema(right3);
  const _left = asSchema(left3);
  return transform2(eitherEncoded(_right, _left), eitherFromSelf({
    left: typeSchema(_left),
    right: typeSchema(_right)
  }), eitherDecode, match2({
    onLeft: makeLeftEncoded,
    onRight: makeRightEncoded
  }));
};
var eitherFromUnion = ({
  left: left3,
  right: right3
}) => {
  const _right = asSchema(right3);
  const _left = asSchema(left3);
  const toright = typeSchema(_right);
  const toleft = typeSchema(_left);
  const fromRight = transform2(_right, rightEncoded(toright), makeRightEncoded, (r) => r.right);
  const fromLeft = transform2(_left, leftEncoded(toleft), makeLeftEncoded, (l) => l.left);
  return transform2(union10(fromRight, fromLeft), eitherFromSelf({
    left: toleft,
    right: toright
  }), (from) => from._tag === "Left" ? left2(from.left) : right2(from.right), match2({
    onLeft: makeLeftEncoded,
    onRight: makeRightEncoded
  }));
};
var readonlyMapArbitrary = (key, value3) => (fc) => fc.array(fc.tuple(key(fc), value3(fc))).map((as9) => new Map(as9));
var readonlyMapPretty = (key, value3) => (map25) => `new Map([${Array.from(map25.entries()).map(([k, v]) => `[${key(k)}, ${value3(v)}]`).join(", ")}])`;
var readonlyMapEquivalence = (key, value3) => {
  const arrayEquivalence = getEquivalence4(make(([ka, va], [kb, vb]) => key(ka, kb) && value3(va, vb)));
  return make((a, b) => arrayEquivalence(Array.from(a.entries()), Array.from(b.entries())));
};
var readonlyMapParse = (decodeUnknown3) => (u, options, ast) => isMap(u) ? map24(decodeUnknown3(Array.from(u.entries()), options), (as9) => new Map(as9)) : fail15(new Type(ast, u));
var readonlyMapFromSelf = ({
  key,
  value: value3
}) => {
  return declare([key, value3], (key2, value4) => readonlyMapParse(decodeUnknown(array5(tuple2(key2, value4)))), (key2, value4) => readonlyMapParse(encodeUnknown(array5(tuple2(key2, value4)))), {
    description: `ReadonlyMap<${format4(key)}, ${format4(value3)}>`,
    pretty: readonlyMapPretty,
    arbitrary: readonlyMapArbitrary,
    equivalence: readonlyMapEquivalence
  });
};
var readonlyMap = ({
  key,
  value: value3
}) => {
  const _key = asSchema(key);
  const _value = asSchema(value3);
  return transform2(array5(tuple2(_key, _value)), readonlyMapFromSelf({
    key: typeSchema(_key),
    value: typeSchema(_value)
  }), (as9) => new Map(as9), (map25) => Array.from(map25.entries()));
};
var readonlySetArbitrary = (item) => (fc) => fc.array(item(fc)).map((as9) => new Set(as9));
var readonlySetPretty = (item) => (set10) => `new Set([${Array.from(set10.values()).map((a) => item(a)).join(", ")}])`;
var readonlySetEquivalence = (item) => {
  const arrayEquivalence = getEquivalence4(item);
  return make((a, b) => arrayEquivalence(Array.from(a.values()), Array.from(b.values())));
};
var readonlySetParse = (decodeUnknown3) => (u, options, ast) => isSet(u) ? map24(decodeUnknown3(Array.from(u.values()), options), (as9) => new Set(as9)) : fail15(new Type(ast, u));
var readonlySetFromSelf = (value3) => {
  return declare([value3], (item) => readonlySetParse(decodeUnknown(array5(item))), (item) => readonlySetParse(encodeUnknown(array5(item))), {
    description: `ReadonlySet<${format4(value3)}>`,
    pretty: readonlySetPretty,
    arbitrary: readonlySetArbitrary,
    equivalence: readonlySetEquivalence
  });
};
var readonlySet = (value3) => {
  const _value = asSchema(value3);
  return transform2(array5(_value), readonlySetFromSelf(typeSchema(_value)), (as9) => new Set(as9), (set10) => Array.from(set10));
};
var bigDecimalPretty = () => (val) => `BigDecimal(${format2(normalize(val))})`;
var bigDecimalArbitrary = () => (fc) => fc.tuple(fc.bigInt(), fc.integer()).map(([value3, scale2]) => make3(value3, scale2));
var BigDecimalFromSelf = /* @__PURE__ */ declare(isBigDecimal, {
  identifier: "BigDecimalFromSelf",
  pretty: bigDecimalPretty,
  arbitrary: bigDecimalArbitrary,
  equivalence: () => Equivalence
});
var BigDecimal = /* @__PURE__ */ transformOrFail(string2, BigDecimalFromSelf, (num, _, ast) => fromString(num).pipe(match({
  onNone: () => fail15(new Type(ast, num)),
  onSome: (val) => succeed15(normalize(val))
})), (val) => succeed15(format2(normalize(val)))).annotations({
  identifier: "BigDecimal"
});
var BigDecimalFromNumber = /* @__PURE__ */ transformOrFail(number4, BigDecimalFromSelf, (num) => succeed15(fromNumber(num)), (val) => succeed15(unsafeToNumber(val))).annotations({
  identifier: "BigDecimalFromNumber"
});
var GreaterThanBigDecimalTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/GreaterThanBigDecimal");
var greaterThanBigDecimal = (min4, annotations4) => (self) => self.pipe(filter12((a) => greaterThan2(a, min4), {
  typeId: {
    id: GreaterThanBigDecimalTypeId,
    annotation: {
      min: min4
    }
  },
  description: `a BigDecimal greater than ${format2(min4)}`,
  ...annotations4
}));
var GreaterThanOrEqualToBigDecimalTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/GreaterThanOrEqualToBigDecimal");
var greaterThanOrEqualToBigDecimal = (min4, annotations4) => (self) => self.pipe(filter12((a) => greaterThanOrEqualTo2(a, min4), {
  typeId: {
    id: GreaterThanOrEqualToBigDecimalTypeId,
    annotation: {
      min: min4
    }
  },
  description: `a BigDecimal greater than or equal to ${format2(min4)}`,
  ...annotations4
}));
var LessThanBigDecimalTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/LessThanBigDecimal");
var lessThanBigDecimal = (max6, annotations4) => (self) => self.pipe(filter12((a) => lessThan2(a, max6), {
  typeId: {
    id: LessThanBigDecimalTypeId,
    annotation: {
      max: max6
    }
  },
  description: `a BigDecimal less than ${format2(max6)}`,
  ...annotations4
}));
var LessThanOrEqualToBigDecimalTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/LessThanOrEqualToBigDecimal");
var lessThanOrEqualToBigDecimal = (max6, annotations4) => (self) => self.pipe(filter12((a) => lessThanOrEqualTo2(a, max6), {
  typeId: {
    id: LessThanOrEqualToBigDecimalTypeId,
    annotation: {
      max: max6
    }
  },
  description: `a BigDecimal less than or equal to ${format2(max6)}`,
  ...annotations4
}));
var PositiveBigDecimalTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/PositiveBigDecimal");
var positiveBigDecimal = (annotations4) => (self) => self.pipe(filter12((a) => isPositive(a), {
  typeId: {
    id: PositiveBigDecimalTypeId,
    annotation: {}
  },
  description: `a positive BigDecimal`,
  ...annotations4
}));
var PositiveBigDecimalFromSelf = /* @__PURE__ */ BigDecimalFromSelf.pipe(/* @__PURE__ */ positiveBigDecimal({
  identifier: "PositiveBigDecimalFromSelf",
  title: "PositiveBigDecimalFromSelf"
}));
var NonNegativeBigDecimalTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/NonNegativeBigDecimal");
var nonNegativeBigDecimal = (annotations4) => (self) => self.pipe(filter12((a) => a.value >= 0n, {
  typeId: {
    id: NonNegativeBigDecimalTypeId,
    annotation: {}
  },
  description: `a non-negative BigDecimal`,
  ...annotations4
}));
var NonNegativeBigDecimalFromSelf = /* @__PURE__ */ BigDecimalFromSelf.pipe(/* @__PURE__ */ nonNegativeBigDecimal({
  identifier: "NonNegativeBigDecimalFromSelf",
  title: "NonNegativeBigDecimalFromSelf"
}));
var NegativeBigDecimalTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/NegativeBigDecimal");
var negativeBigDecimal = (annotations4) => (self) => self.pipe(filter12((a) => isNegative(a), {
  typeId: {
    id: NegativeBigDecimalTypeId,
    annotation: {}
  },
  description: `a negative BigDecimal`,
  ...annotations4
}));
var NegativeBigDecimalFromSelf = /* @__PURE__ */ BigDecimalFromSelf.pipe(/* @__PURE__ */ negativeBigDecimal({
  identifier: "NegativeBigDecimalFromSelf",
  title: "NegativeBigDecimalFromSelf"
}));
var NonPositiveBigDecimalTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/NonPositiveBigDecimal");
var nonPositiveBigDecimal = (annotations4) => (self) => self.pipe(filter12((a) => a.value <= 0n, {
  typeId: {
    id: NonPositiveBigDecimalTypeId,
    annotation: {}
  },
  description: `a non-positive BigDecimal`,
  ...annotations4
}));
var NonPositiveBigDecimalFromSelf = /* @__PURE__ */ BigDecimalFromSelf.pipe(/* @__PURE__ */ nonPositiveBigDecimal({
  identifier: "NonPositiveBigDecimalFromSelf",
  title: "NonPositiveBigDecimalFromSelf"
}));
var BetweenBigDecimalTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/BetweenBigDecimal");
var betweenBigDecimal = (minimum, maximum, annotations4) => (self) => self.pipe(filter12((a) => between2(a, {
  minimum,
  maximum
}), {
  typeId: {
    id: BetweenBigDecimalTypeId,
    annotation: {
      maximum,
      minimum
    }
  },
  description: `a BigDecimal between ${format2(minimum)} and ${format2(maximum)}`,
  ...annotations4
}));
var clampBigDecimal = (minimum, maximum) => (self) => transform2(self, self.pipe(typeSchema, betweenBigDecimal(minimum, maximum)), (self2) => clamp2(self2, {
  minimum,
  maximum
}), identity, {
  strict: false
});
var negateBigDecimal = (self) => transform2(self, typeSchema(self), negate, negate, {
  strict: false
});
var chunkArbitrary = (item) => (fc) => fc.array(item(fc)).map(fromIterable3);
var chunkPretty = (item) => (c) => `Chunk(${toReadonlyArray(c).map(item).join(", ")})`;
var chunkParse = (decodeUnknown3) => (u, options, ast) => isChunk(u) ? isEmpty(u) ? succeed15(empty6()) : map24(decodeUnknown3(toReadonlyArray(u), options), fromIterable3) : fail15(new Type(ast, u));
var chunkFromSelf = (value3) => {
  return declare([value3], (item) => chunkParse(decodeUnknown(array5(item))), (item) => chunkParse(encodeUnknown(array5(item))), {
    description: `Chunk<${format4(value3)}>`,
    pretty: chunkPretty,
    arbitrary: chunkArbitrary,
    equivalence: getEquivalence5
  });
};
var chunk3 = (value3) => {
  const _value = asSchema(value3);
  return transform2(array5(_value), chunkFromSelf(typeSchema(_value)), (as9) => as9.length === 0 ? empty6() : fromIterable3(as9), toReadonlyArray);
};
var toData = (a) => Array.isArray(a) ? array4(a) : struct3(a);
var dataArbitrary = (item) => (fc) => item(fc).map(toData);
var dataPretty = (item) => (d) => `Data(${item(d)})`;
var dataParse = (decodeUnknown3) => (u, options, ast) => isEqual(u) ? map24(decodeUnknown3(u, options), toData) : fail15(new Type(ast, u));
var dataFromSelf = (item) => {
  return declare([item], (item2) => dataParse(decodeUnknown(item2)), (item2) => dataParse(encodeUnknown(item2)), {
    description: `Data<${format4(item)}>`,
    pretty: dataPretty,
    arbitrary: dataArbitrary
  });
};
var data = (item) => transform2(item, dataFromSelf(typeSchema(item)), toData, (a) => Array.isArray(a) ? Array.from(a) : Object.assign({}, a), {
  strict: false
});
var Class6 = (identifier2) => (fields, annotations4) => makeClass({
  kind: "Class",
  identifier: identifier2,
  fields,
  Base: Class4,
  annotations: annotations4
});
var TaggedClass2 = (identifier2) => (tag2, fields, annotations4) => makeClass({
  kind: "TaggedClass",
  identifier: identifier2 ?? tag2,
  fields: extendFields({
    _tag: literal(tag2)
  }, fields),
  Base: Class4,
  tag: {
    _tag: tag2
  },
  annotations: annotations4
});
var TaggedError2 = (identifier2) => (tag2, fields, annotations4) => {
  class Base2 extends Error3 {
  }
  Base2.prototype.name = tag2;
  return makeClass({
    kind: "TaggedError",
    identifier: identifier2 ?? tag2,
    fields: extendFields({
      _tag: literal(tag2)
    }, fields),
    Base: Base2,
    tag: {
      _tag: tag2
    },
    annotations: annotations4,
    toStringOverride(self) {
      if (!(isString(self.message) && self.message.length > 0)) {
        return make60(self.constructor)(self);
      }
      let message2 = `${self._tag}: ${self.message}`;
      if (isString(self.stack)) {
        message2 = `${message2}
${self.stack.split("\n").slice(1).join("\n")}`;
      }
      return message2;
    }
  });
};
var TaggedRequest = (identifier2) => (tag2, Failure, Success, fields, annotations4) => {
  class SerializableRequest extends Class3 {
    get [symbol3]() {
      return this.constructor;
    }
    get [symbolResult]() {
      return {
        Failure,
        Success
      };
    }
  }
  return makeClass({
    kind: "TaggedRequest",
    identifier: identifier2 ?? tag2,
    fields: extendFields({
      _tag: literal(tag2)
    }, fields),
    Base: SerializableRequest,
    tag: {
      _tag: tag2
    },
    annotations: annotations4
  });
};
var extendFields = (a, b) => {
  const out = {
    ...a
  };
  for (const name of ownKeys(b)) {
    if (name in a) {
      throw new Error(getDuplicatePropertySignatureErrorMessage(name));
    }
    out[name] = b[name];
  }
  return out;
};
var makeClass = ({
  Base: Base2,
  annotations: annotations4,
  fields,
  fromSchema,
  identifier: identifier2,
  kind,
  tag: tag2,
  toStringOverride
}) => {
  const classSymbol = Symbol.for(`@effect/schema/${kind}/${identifier2}`);
  const schema = fromSchema ?? struct4(fields);
  const validate5 = validateSync(schema);
  return class extends Base2 {
    constructor(props = {}, disableValidation = false) {
      if (tag2 !== void 0) {
        props = {
          ...props,
          ...tag2
        };
      }
      if (disableValidation !== true) {
        props = validate5(props);
      }
      super(props, true);
    }
    static [TypeId18] = variance5;
    get [classSymbol]() {
      return classSymbol;
    }
    toString() {
      return toStringOverride !== void 0 ? toStringOverride(this) : make60(this.constructor)(this);
    }
    static pipe() {
      return pipeArguments(this, arguments);
    }
    static annotations(annotations5) {
      return make61(this.ast).annotations(annotations5);
    }
    static fields = {
      ...fields
    };
    static identifier = identifier2;
    static get ast() {
      const toSchema = typeSchema(schema);
      const guard = is(toSchema);
      const fallbackInstanceOf = (u) => hasProperty(u, classSymbol) && guard(u);
      const encode5 = encodeUnknown(toSchema);
      const pretty4 = make60(toSchema);
      const arb = make56(toSchema);
      const equivalence3 = make59(toSchema);
      const declaration = declare([], () => (input, _, ast) => input instanceof this || fallbackInstanceOf(input) ? succeed15(input) : fail15(new Type(ast, input)), () => (input, options) => input instanceof this ? succeed15(input) : map24(encode5(input, options), (props) => new this(props, true)), {
        identifier: identifier2,
        title: identifier2,
        description: `an instance of ${identifier2}`,
        pretty: () => (self) => `${identifier2}(${pretty4(self)})`,
        arbitrary: () => (fc) => arb(fc).map((props) => new this(props)),
        equivalence: () => equivalence3,
        [SurrogateAnnotationId]: toSchema.ast,
        ...annotations4
      });
      const transformation = transform2(schema, declaration, (input) => new this(input, true), identity).annotations({
        [SurrogateAnnotationId]: schema.ast
      });
      return transformation.ast;
    }
    static extend(identifier3) {
      return (newFields, annotations5) => {
        const extendedFields = extendFields(fields, newFields);
        return makeClass({
          kind,
          identifier: identifier3,
          fields: extendedFields,
          Base: this,
          tag: tag2,
          annotations: annotations5
        });
      };
    }
    static transformOrFail(identifier3) {
      return (newFields, decode6, encode5, annotations5) => {
        const transformedFields = extendFields(fields, newFields);
        return makeClass({
          kind,
          identifier: identifier3,
          fromSchema: transformOrFail(schema, typeSchema(struct4(transformedFields)), decode6, encode5),
          fields: transformedFields,
          Base: this,
          tag: tag2,
          annotations: annotations5
        });
      };
    }
    static transformOrFailFrom(identifier3) {
      return (newFields, decode6, encode5, annotations5) => {
        const transformedFields = extendFields(fields, newFields);
        return makeClass({
          kind,
          identifier: identifier3,
          fromSchema: transformOrFail(encodedSchema(schema), struct4(transformedFields), decode6, encode5),
          fields: transformedFields,
          Base: this,
          tag: tag2,
          annotations: annotations5
        });
      };
    }
  };
};
var FiberIdCompositeEncoded = /* @__PURE__ */ struct4({
  _tag: literal("Composite"),
  left: suspend9(() => FiberIdEncoded),
  right: suspend9(() => FiberIdEncoded)
}).annotations({
  identifier: "FiberIdCompositeEncoded"
});
var FiberIdNoneEncoded = /* @__PURE__ */ struct4({
  _tag: literal("None")
}).annotations({
  identifier: "FiberIdNoneEncoded"
});
var FiberIdRuntimeEncoded = /* @__PURE__ */ struct4({
  _tag: literal("Runtime"),
  id: Int.pipe(nonNegative({
    title: "id",
    description: "id"
  })),
  startTimeMillis: Int.pipe(nonNegative({
    title: "startTimeMillis",
    description: "startTimeMillis"
  }))
}).annotations({
  identifier: "FiberIdRuntimeEncoded"
});
var FiberIdEncoded = /* @__PURE__ */ union10(FiberIdNoneEncoded, FiberIdRuntimeEncoded, FiberIdCompositeEncoded).annotations({
  identifier: "FiberIdEncoded"
});
var fiberIdFromArbitrary = /* @__PURE__ */ make56(FiberIdEncoded);
var fiberIdArbitrary = (fc) => fiberIdFromArbitrary(fc).map(fiberIdDecode);
var fiberIdPretty = (fiberId3) => {
  switch (fiberId3._tag) {
    case "None":
      return "FiberId.none";
    case "Runtime":
      return `FiberId.runtime(${fiberId3.id}, ${fiberId3.startTimeMillis})`;
    case "Composite":
      return `FiberId.composite(${fiberIdPretty(fiberId3.right)}, ${fiberIdPretty(fiberId3.left)})`;
  }
};
var FiberIdFromSelf = /* @__PURE__ */ declare(isFiberId2, {
  identifier: "FiberIdFromSelf",
  pretty: () => fiberIdPretty,
  arbitrary: () => fiberIdArbitrary
});
var fiberIdDecode = (input) => {
  switch (input._tag) {
    case "None":
      return none4;
    case "Runtime":
      return runtime2(input.id, input.startTimeMillis);
    case "Composite":
      return composite2(fiberIdDecode(input.left), fiberIdDecode(input.right));
  }
};
var fiberIdEncode = (input) => {
  switch (input._tag) {
    case "None":
      return {
        _tag: "None"
      };
    case "Runtime":
      return {
        _tag: "Runtime",
        id: input.id,
        startTimeMillis: input.startTimeMillis
      };
    case "Composite":
      return {
        _tag: "Composite",
        left: fiberIdEncode(input.left),
        right: fiberIdEncode(input.right)
      };
  }
};
var FiberId = /* @__PURE__ */ transform2(FiberIdEncoded, FiberIdFromSelf, fiberIdDecode, fiberIdEncode).annotations({
  identifier: "FiberId"
});
var causeDieEncoded = (defect) => struct4({
  _tag: literal("Die"),
  defect
});
var CauseEmptyEncoded = /* @__PURE__ */ struct4({
  _tag: /* @__PURE__ */ literal("Empty")
});
var causeFailEncoded = (error2) => struct4({
  _tag: literal("Fail"),
  error: error2
});
var CauseInterruptEncoded = /* @__PURE__ */ struct4({
  _tag: /* @__PURE__ */ literal("Interrupt"),
  fiberId: FiberIdEncoded
});
var causeParallelEncoded = (causeEncoded2) => struct4({
  _tag: literal("Parallel"),
  left: causeEncoded2,
  right: causeEncoded2
});
var causeSequentialEncoded = (causeEncoded2) => struct4({
  _tag: literal("Sequential"),
  left: causeEncoded2,
  right: causeEncoded2
});
var causeEncoded = (error2, defect) => {
  const recur = suspend9(() => out);
  const out = union10(CauseEmptyEncoded, causeFailEncoded(error2), causeDieEncoded(defect), CauseInterruptEncoded, causeSequentialEncoded(recur), causeParallelEncoded(recur)).annotations({
    description: `CauseEncoded<${format4(error2)}>`
  });
  return out;
};
var causeArbitrary = (error2, defect) => {
  const arb = make56(causeEncoded(schemaFromArbitrary(error2), schemaFromArbitrary(defect)));
  return (fc) => arb(fc).map(causeDecode);
};
var causePretty = (error2) => (cause4) => {
  const f = (cause5) => {
    switch (cause5._tag) {
      case "Empty":
        return "Cause.empty";
      case "Fail":
        return `Cause.fail(${error2(cause5.error)})`;
      case "Die":
        return `Cause.die(${pretty2(cause5)})`;
      case "Interrupt":
        return `Cause.interrupt(${fiberIdPretty(cause5.fiberId)})`;
      case "Sequential":
        return `Cause.sequential(${f(cause5.left)}, ${f(cause5.right)})`;
      case "Parallel":
        return `Cause.parallel(${f(cause5.left)}, ${f(cause5.right)})`;
    }
  };
  return f(cause4);
};
var causeParse = (decodeUnknown3) => (u, options, ast) => isCause2(u) ? map24(decodeUnknown3(causeEncode(u), options), causeDecode) : fail15(new Type(ast, u));
var causeFromSelf = ({
  defect = unknown,
  error: error2
}) => {
  return declare([error2, defect], (error3, defect2) => causeParse(decodeUnknown(causeEncoded(error3, defect2))), (error3, defect2) => causeParse(encodeUnknown(causeEncoded(error3, defect2))), {
    description: `Cause<${format4(error2)}>`,
    pretty: causePretty,
    arbitrary: causeArbitrary
  });
};
function causeDecode(cause4) {
  switch (cause4._tag) {
    case "Empty":
      return empty28;
    case "Fail":
      return fail5(cause4.error);
    case "Die":
      return die4(cause4.defect);
    case "Interrupt":
      return interrupt4(fiberIdDecode(cause4.fiberId));
    case "Sequential":
      return sequential4(causeDecode(cause4.left), causeDecode(cause4.right));
    case "Parallel":
      return parallel4(causeDecode(cause4.left), causeDecode(cause4.right));
  }
}
function causeEncode(cause4) {
  switch (cause4._tag) {
    case "Empty":
      return {
        _tag: "Empty"
      };
    case "Fail":
      return {
        _tag: "Fail",
        error: cause4.error
      };
    case "Die":
      return {
        _tag: "Die",
        defect: cause4.defect
      };
    case "Interrupt":
      return {
        _tag: "Interrupt",
        fiberId: cause4.fiberId
      };
    case "Sequential":
      return {
        _tag: "Sequential",
        left: causeEncode(cause4.left),
        right: causeEncode(cause4.right)
      };
    case "Parallel":
      return {
        _tag: "Parallel",
        left: causeEncode(cause4.left),
        right: causeEncode(cause4.right)
      };
  }
}
var causeDefectUnknown = /* @__PURE__ */ transform2(unknown, unknown, (u) => {
  if (isObject(u) && "message" in u && typeof u.message === "string") {
    const err = new Error(u.message, {
      cause: u
    });
    if ("name" in u && typeof u.name === "string") {
      err.name = u.name;
    }
    err.stack = "stack" in u && typeof u.stack === "string" ? u.stack : "";
    return err;
  }
  return String(u);
}, (defect) => {
  if (defect instanceof Error) {
    return {
      name: defect.name,
      message: defect.message
    };
  }
  return String(defect);
});
var cause3 = ({
  defect = causeDefectUnknown,
  error: error2
}) => {
  const _error = asSchema(error2);
  return transform2(causeEncoded(_error, defect), causeFromSelf({
    error: typeSchema(_error),
    defect: typeSchema(defect)
  }), causeDecode, causeEncode);
};
var exitFailureEncoded = (error2, defect) => struct4({
  _tag: literal("Failure"),
  cause: causeEncoded(error2, defect)
});
var exitSuccessEncoded = (value3) => struct4({
  _tag: literal("Success"),
  value: value3
});
var exitEncoded = (value3, error2, defect) => union10(exitFailureEncoded(error2, defect), exitSuccessEncoded(value3));
var exitDecode = (input) => {
  switch (input._tag) {
    case "Failure":
      return failCause3(causeDecode(input.cause));
    case "Success":
      return succeed3(input.value);
  }
};
var exitArbitrary = (value3, error2, defect) => {
  const arb = make56(exitEncoded(schemaFromArbitrary(value3), schemaFromArbitrary(error2), schemaFromArbitrary(defect)));
  return (fc) => arb(fc).map(exitDecode);
};
var exitPretty = (value3, error2) => (exit4) => exit4._tag === "Failure" ? `Exit.failCause(${causePretty(error2)(exit4.cause)})` : `Exit.succeed(${value3(exit4.value)})`;
var exitParse = (decodeUnknownValue, decodeUnknownCause) => (u, options, ast) => isExit(u) ? match5(u, {
  onFailure: (cause4) => map24(decodeUnknownCause(cause4, options), failCause3),
  onSuccess: (value3) => map24(decodeUnknownValue(value3, options), succeed3)
}) : fail15(new Type(ast, u));
var exitFromSelf = ({
  defect = unknown,
  failure,
  success
}) => declare([success, failure, defect], (success2, failure2, defect2) => exitParse(decodeUnknown(success2), decodeUnknown(causeFromSelf({
  error: failure2,
  defect: defect2
}))), (success2, failure2, defect2) => exitParse(encodeUnknown(success2), encodeUnknown(causeFromSelf({
  error: failure2,
  defect: defect2
}))), {
  description: `Exit<${format4(failure)}, ${format4(success)}>`,
  pretty: exitPretty,
  arbitrary: exitArbitrary
});
var exit3 = ({
  defect = causeDefectUnknown,
  failure,
  success
}) => {
  const _success = asSchema(success);
  const _failure = asSchema(failure);
  return transform2(exitEncoded(_success, _failure, defect), exitFromSelf({
    failure: typeSchema(_failure),
    success: typeSchema(_success),
    defect: typeSchema(defect)
  }), exitDecode, (exit4) => exit4._tag === "Failure" ? {
    _tag: "Failure",
    cause: exit4.cause
  } : {
    _tag: "Success",
    value: exit4.value
  });
};
var hashSetArbitrary = (item) => (fc) => fc.array(item(fc)).map((as9) => fromIterable6(as9));
var hashSetPretty = (item) => (set10) => `HashSet(${Array.from(set10).map((a) => item(a)).join(", ")})`;
var hashSetEquivalence = (item) => {
  const arrayEquivalence = getEquivalence4(item);
  return make((a, b) => arrayEquivalence(Array.from(a), Array.from(b)));
};
var hashSetParse = (decodeUnknown3) => (u, options, ast) => isHashSet2(u) ? map24(decodeUnknown3(Array.from(u), options), (as9) => fromIterable6(as9)) : fail15(new Type(ast, u));
var hashSetFromSelf = (value3) => {
  return declare([value3], (item) => hashSetParse(decodeUnknown(array5(item))), (item) => hashSetParse(encodeUnknown(array5(item))), {
    description: `HashSet<${format4(value3)}>`,
    pretty: hashSetPretty,
    arbitrary: hashSetArbitrary,
    equivalence: hashSetEquivalence
  });
};
var hashSet2 = (value3) => {
  const _value = asSchema(value3);
  return transform2(array5(_value), hashSetFromSelf(typeSchema(_value)), (as9) => fromIterable6(as9), (set10) => Array.from(set10));
};
var hashMapArbitrary = (key, value3) => (fc) => fc.array(fc.tuple(key(fc), value3(fc))).map((as9) => fromIterable7(as9));
var hashMapPretty = (key, value3) => (map25) => `HashMap([${Array.from(map25).map(([k, v]) => `[${key(k)}, ${value3(v)}]`).join(", ")}])`;
var hashMapEquivalence = (key, value3) => {
  const arrayEquivalence = getEquivalence4(make(([ka, va], [kb, vb]) => key(ka, kb) && value3(va, vb)));
  return make((a, b) => arrayEquivalence(Array.from(a), Array.from(b)));
};
var hashMapParse = (decodeUnknown3) => (u, options, ast) => isHashMap2(u) ? map24(decodeUnknown3(Array.from(u), options), (as9) => fromIterable7(as9)) : fail15(new Type(ast, u));
var hashMapFromSelf = ({
  key,
  value: value3
}) => {
  return declare([key, value3], (key2, value4) => hashMapParse(decodeUnknown(array5(tuple2(key2, value4)))), (key2, value4) => hashMapParse(encodeUnknown(array5(tuple2(key2, value4)))), {
    description: `HashMap<${format4(key)}, ${format4(value3)}>`,
    pretty: hashMapPretty,
    arbitrary: hashMapArbitrary,
    equivalence: hashMapEquivalence
  });
};
var hashMap2 = ({
  key,
  value: value3
}) => {
  const _key = asSchema(key);
  const _value = asSchema(value3);
  return transform2(array5(tuple2(_key, _value)), hashMapFromSelf({
    key: typeSchema(_key),
    value: typeSchema(_value)
  }), (as9) => fromIterable7(as9), (map25) => Array.from(map25));
};
var listArbitrary = (item) => (fc) => fc.array(item(fc)).map((as9) => fromIterable8(as9));
var listPretty = (item) => (set10) => `List(${Array.from(set10).map((a) => item(a)).join(", ")})`;
var listEquivalence = (item) => {
  const arrayEquivalence = getEquivalence4(item);
  return make((a, b) => arrayEquivalence(Array.from(a), Array.from(b)));
};
var listParse = (decodeUnknown3) => (u, options, ast) => isList(u) ? map24(decodeUnknown3(Array.from(u), options), (as9) => fromIterable8(as9)) : fail15(new Type(ast, u));
var listFromSelf = (value3) => {
  return declare([value3], (item) => listParse(decodeUnknown(array5(item))), (item) => listParse(encodeUnknown(array5(item))), {
    description: `List<${format4(value3)}>`,
    pretty: listPretty,
    arbitrary: listArbitrary,
    equivalence: listEquivalence
  });
};
var list = (value3) => {
  const _value = asSchema(value3);
  return transform2(array5(_value), listFromSelf(typeSchema(_value)), (as9) => fromIterable8(as9), (set10) => Array.from(set10));
};
var sortedSetArbitrary = (item, ord) => (fc) => fc.array(item(fc)).map((as9) => fromIterable12(as9, ord));
var sortedSetPretty = (item) => (set10) => `new SortedSet([${Array.from(values4(set10)).map((a) => item(a)).join(", ")}])`;
var sortedSetParse = (decodeUnknown3, ord) => (u, options, ast) => isSortedSet(u) ? map24(decodeUnknown3(Array.from(values4(u)), options), (as9) => fromIterable12(as9, ord)) : fail15(new Type(ast, u));
var sortedSetFromSelf = (value3, ordA, ordI) => {
  return declare([value3], (item) => sortedSetParse(decodeUnknown(array5(item)), ordA), (item) => sortedSetParse(encodeUnknown(array5(item)), ordI), {
    description: `SortedSet<${format4(value3)}>`,
    pretty: sortedSetPretty,
    arbitrary: (arb) => sortedSetArbitrary(arb, ordA),
    equivalence: () => getEquivalence7()
  });
};
var sortedSet = (value3, ordA) => {
  const _value = asSchema(value3);
  const to = typeSchema(_value);
  return transform2(array5(_value), sortedSetFromSelf(to, ordA, ordA), (as9) => fromIterable12(as9, ordA), (set10) => Array.from(values4(set10)));
};
var schemaFromArbitrary = (value3) => suspend9(() => any).annotations({
  [ArbitraryHookId]: () => value3
});

// ../effect-obsidian/src/Settings.ts
var layer = (schema, register) => {
  const tag2 = GenericTag(
    "effect-obsidian/Settings"
  );
  const layer3 = gen3(function* (_) {
    const plugin = yield* _(Plugin2);
    const data2 = yield* _(
      promise2(() => plugin.loadData()),
      flatMap10((_2) => decodeUnknown2(schema)(_2 || {})),
      orDie3
    );
    const ref = yield* _(make54(data2));
    yield* _(
      ref.changes,
      drop4(1),
      debounce2(1e3),
      flatMap15(encode4(schema)),
      runForEach2((data3) => promise2(() => plugin.saveData(data3))),
      forkScoped2
    );
    const update6 = (_2) => runPromise(update5(ref, _2));
    const Class7 = register(
      () => runSync(get15(ref)),
      update6
    );
    plugin.addSettingTab(new Class7(plugin.app, plugin));
    return tag2.of({
      ref,
      unsafeGet: () => runSync(get15(ref)),
      unsafeUpdate: (f) => runSync(update5(ref, f))
    });
  }).pipe(
    scoped3(tag2)
  );
  const runWhen2 = (f, effect3) => gen3(function* (_) {
    const settings = yield* _(tag2);
    const map25 = yield* _(make48());
    yield* _(
      settings.ref.changes,
      mapEffect4(
        (_2) => f(_2) ? effect3.pipe(
          zipRight5(never3),
          scoped2,
          run4(map25, "fiber")
        ) : clear2(map25)
      ),
      runDrain3,
      forkScoped2
    );
  });
  const prop2 = (key) => gen3(function* (_) {
    const settings = yield* _(tag2);
    const get17 = () => settings.unsafeGet()[key];
    const update6 = (f) => settings.unsafeUpdate((_2) => ({
      ..._2,
      [key]: f(_2[key])
    }));
    return [get17, update6];
  });
  return { tag: tag2, layer: layer3, runWhen: runWhen2, prop: prop2 };
};
var {
  layer: layer2,
  prop,
  runWhen,
  tag
} = layer(
  Schema_exports.struct({
    autoLayoutDefault: Schema_exports.optional(Schema_exports.boolean, {
      default: () => false
    }),
    autoLayoutEnabledFor: Schema_exports.optional(
      Schema_exports.record(Schema_exports.string, Schema_exports.boolean),
      { default: () => ReadonlyRecord_exports.empty() }
    )
  }),
  (get17, update6) => class SettingsTab extends Obsidian2.PluginSettingTab {
    display() {
      this.containerEl.empty();
      const current2 = get17();
      new Obsidian2.Setting(this.containerEl).setName("Auto layout by default").setDesc("Enable auto layout for Canvas by default").addToggle(
        (toggle2) => toggle2.setValue(current2.autoLayoutDefault).onChange(
          (value3) => update6((_) => ({
            ..._,
            autoLayoutDefault: value3
          }))
        )
      );
    }
  }
);
var autoLayout = Effect_exports.gen(function* (_) {
  const settings = yield* _(tag);
  const [, update6] = yield* _(prop("autoLayoutEnabledFor"));
  return [
    (path) => {
      const current2 = settings.unsafeGet();
      return Option_exports.getOrElse(
        ReadonlyRecord_exports.get(current2.autoLayoutEnabledFor, path),
        () => current2.autoLayoutDefault
      );
    },
    (path, value3) => {
      return update6(ReadonlyRecord_exports.set(path, value3));
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
      ReadonlyArray_exports.reduce(
        children3,
        0,
        (acc, child) => acc === 0 ? child.height : acc + child.height + gap
      )
    );
  }
  height;
};
var run7 = Effect_exports.gen(function* (_) {
  const canvas = yield* _(Canvas);
  const roots2 = [];
  canvas.nodes.forEach((node) => {
    const isRoot = node.getData().type !== "group" && !canvas.getEdgesForNode(node).some((_2) => _2.to.node.id === node.id);
    if (isRoot) {
      roots2.push(node);
    }
  });
  roots2.sort(yOrder);
  function createBlock(node, targetWidth) {
    const children3 = ReadonlyArray_exports.filter(
      childrenFromEdges(
        node,
        canvas.getEdgesForNode(node),
        true
      ),
      (_2) => _2.getData().type !== "group"
    );
    const childTargetWidth = Math.max(...children3.map((_2) => _2.width));
    const childBlocks = children3.map((_2) => createBlock(_2, childTargetWidth));
    return new NodeBlock(node, childBlocks, targetWidth);
  }
  const rootTargetWidth = Math.max(...roots2.map((_2) => _2.width));
  const rootBlocks = roots2.map((_2) => createBlock(_2, rootTargetWidth));
  function layoutBlocks(blocks, x, y, gap = 100) {
    if (ReadonlyArray_exports.isEmptyReadonlyArray(blocks)) {
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
var PatchMenu = Effect_exports.gen(function* (_) {
  const scope5 = yield* _(Effect_exports.scope);
  const [get17, set10] = yield* _(autoLayout);
  yield* _(onActive(Canvas.pipe(
    Effect_exports.flatMap(
      (canvas) => prototype(
        "AutoLayout",
        canvas,
        "showQuickSettingsMenu",
        (original) => function(menu) {
          original.call(this, menu);
          const path = this.view.file.path;
          const enabled2 = get17(path);
          menu.addItem(
            (item) => item.setTitle("Auto layout").setChecked(enabled2).onClick(() => {
              set10(path, !enabled2);
            })
          );
        }
      )
    ),
    Scope_exports.extend(scope5)
  )));
}).pipe(Layer_exports.scopedDiscard);
var AutoLayoutOnChange = onActive(Effect_exports.gen(function* (_) {
  const canvas = yield* _(Canvas);
  const [get17] = yield* _(autoLayout);
  const path = canvas.view.file.path;
  yield* _(
    runWhen(
      () => get17(path),
      nodeChanges(canvas).pipe(
        Stream_exports.filter(() => get17(path)),
        Stream_exports.runForEach(() => run7)
      )
    )
  );
})).pipe(Layer_exports.scopedDiscard);
var Command = addCommand2({
  id: "auto-layout",
  name: "Auto Layout",
  run: run7
}).pipe(Layer_exports.scopedDiscard);
var UpdateSettings = Effect_exports.gen(function* (_) {
  const plugin = yield* _(Plugin2);
  const [, , update6] = yield* _(autoLayout);
  plugin.registerEvent(
    plugin.app.vault.on("rename", (file, prev) => {
      update6(
        (self) => Option_exports.match(ReadonlyRecord_exports.pop(self, prev), {
          onSome: ([value3]) => ReadonlyRecord_exports.set(self, file.path, value3),
          onNone: () => self
        })
      );
    })
  );
  plugin.registerEvent(
    plugin.app.vault.on("delete", (file) => {
      update6(ReadonlyRecord_exports.remove(file.path));
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
var NewNodeLive = Effect_exports.all([
  addCommand2({
    id: "new-node",
    name: "New Node",
    hotkeys: [{ modifiers: ["Alt"], key: "Enter" }],
    run: Effect_exports.gen(function* (_) {
      const canvas = yield* _(Canvas);
      const node = yield* _(selectedNode, Effect_exports.flatten);
      const parentNode = yield* _(parent(node));
      const siblings2 = yield* _(siblings(node));
      const lastNode = siblings2[siblings2.length - 1] ?? node;
      const newNode = canvas.createTextNode({
        pos: {
          x: lastNode.x,
          y: lastNode.y + lastNode.height + 20
        }
      });
      newNode.setColor(node.color);
      if (Option_exports.isSome(parentNode)) {
        yield* _(
          createEdge({
            from: parentNode.value,
            to: newNode
          })
        );
      }
      canvas.requestSave();
      canvas.panIntoView(newNode.getBBox());
    }).pipe(Effect_exports.catchAllCause(Effect_exports.log))
  }),
  addCommand2({
    id: "new-child-node",
    name: "New Child Node",
    hotkeys: [{ modifiers: ["Alt"], key: "Tab" }],
    run: Effect_exports.gen(function* (_) {
      const canvas = yield* _(Canvas);
      const node = yield* _(selectedNode, Effect_exports.flatten);
      const lastChild = yield* _(
        children2(node),
        Effect_exports.map(ReadonlyArray_exports.last)
      );
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
      yield* _(
        createEdge({
          from: node,
          to: newNode
        })
      );
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
    run: Effect_exports.gen(function* (_) {
      const canvas = yield* _(Canvas);
      const node = yield* _(selectedNode, Effect_exports.flatten);
      const nextNode = yield* _(
        siblings(node),
        Effect_exports.flatMap(ReadonlyArray_exports.findFirst((_2) => _2.y > node.y))
      );
      canvas.selectOnly(nextNode);
      canvas.panIntoView(nextNode.getBBox());
    })
  }),
  addCommand2({
    id: "focus-up",
    name: "Focus up",
    run: Effect_exports.gen(function* (_) {
      const canvas = yield* _(Canvas);
      const node = yield* _(selectedNode, Effect_exports.flatten);
      const nextNode = yield* _(
        siblings(node),
        Effect_exports.flatMap(ReadonlyArray_exports.findLast((_2) => _2.y < node.y))
      );
      canvas.selectOnly(nextNode);
      canvas.panIntoView(nextNode.getBBox());
    })
  }),
  addCommand2({
    id: "focus-left",
    name: "Focus left",
    run: Effect_exports.gen(function* (_) {
      const canvas = yield* _(Canvas);
      const node = yield* _(selectedNode, Effect_exports.flatten);
      const parent2 = yield* _(parent(node), Effect_exports.flatten);
      canvas.selectOnly(parent2);
      canvas.panIntoView(parent2.getBBox());
    })
  }),
  addCommand2({
    id: "focus-right",
    name: "Focus right",
    run: Effect_exports.gen(function* (_) {
      const canvas = yield* _(Canvas);
      const node = yield* _(selectedNode, Effect_exports.flatten);
      const child = yield* _(
        children2(node),
        Effect_exports.flatMap(ReadonlyArray_exports.head)
      );
      canvas.selectOnly(child);
      canvas.panIntoView(child.getBBox());
    })
  })
]).pipe(Layer_exports.scopedDiscard);

// src/main.ts
var MainLive = Layer_exports.mergeAll(AutoLayoutLive, NewNodeLive, NodeNavigationLive).pipe(
  Layer_exports.provide(Logger_exports.minimumLogLevel(LogLevel_exports.Debug))
);
var CanvasMindmap = class extends Class5(MainLive) {
};

module.exports = CanvasMindmap;
