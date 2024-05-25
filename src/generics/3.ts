function merge<T extends {}, K extends {}>(objA: T, objB: K): T & K {
  return Object.assign({}, objA, objB);
}
