const compose = (...functions) => args =>
  functions.reduceRight((arg, fn) => fn(arg), args);
export default compose;
