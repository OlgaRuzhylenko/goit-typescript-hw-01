

function merge <T, U> (objA: T, objB: U) {
    return { ...objA, ...objB };
  }

const merged = merge({ name: 'Alisa' }, { age: 28 });
 console.log(merged);