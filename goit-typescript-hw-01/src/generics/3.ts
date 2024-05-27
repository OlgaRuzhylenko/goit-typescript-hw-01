

function merge <T extends object, U extends object> (objA: T, objB: U): T & U {
    return { ...objA, ...objB };
  }

const merged = merge({ name: 'Alisa' }, { age: 28 });
 console.log(merged);