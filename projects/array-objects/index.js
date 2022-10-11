/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   forEach([1, 2, 3], (el) => console.log(el))
 */
function forEach(target, callback) {
  for (let i = 0; i < target.length; i += 1) {
    const element = target[i];
    callback(element, i, target);
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]
 */
function map(target, callback) {
  const result = []; // Создание массива. Результирующий массив который мы наполняем.
  for (let i = 0; i < target.length; i += 1) {
    const element = target[i]; // Получаем элемент массива.
    const resultElement = callback(element, i, target); // 1 - элемент массива, 2 - индекс и 3 - сам массив.
    result.push(resultElement);
  }

  return result; // Возврат массива.
}

// const numArray = [1, 2, 3, 4];
// console.log(map(numArray, (i) => i % 2 === 0));

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   reduce([1, 2, 3], (all, current) => all + current) // 6
 */
function reduce(array, fn, initial) {
  const hasInitial = typeof initial !== 'undefined';
  let prev = hasInitial ? initial : array[0];

  for (let i = hasInitial ? 0 : 1; i < array.length; i += 1) {
    prev = fn(prev, array[i], i, array);
  }

  return prev;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */

function upperProps(obj) {
  const result = [];
  for (const name in obj) {
    result.push(name.toUpperCase());
  }
  return result;
}

/*
 Задание 5 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат

 Пример:
   const obj = createProxy({});
   obj.foo = 2;
   console.log(obj.foo); // 4
 */
function createProxy(obj) {
  return new Proxy(obj, {
    set(obj, key, value) {
      obj[key] = value ** 2;
      return true;
    },
  });
}

export { forEach, map, reduce, upperProps, createProxy };
