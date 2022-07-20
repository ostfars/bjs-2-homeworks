function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
      const hash = args.join(',');
      let objectInCache = cache.find((item) => item.hash === hash);
      if (objectInCache) { 
          console.log("Из кэша: " + objectInCache.value)
          return "Из кэша: " + objectInCache.value;
      }

      let result = func(...args); 
      cache.push({'hash': `${hash}`, 'value': `${result}`}); 
      if (cache.length > 5) { 
        cache.shift()
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
}


function debounceDecoratorNew(func) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      f.apply(this, args);
      console.timeEnd('time'); // согласуется с console.time() и используется для засекания времени
    }, ms)
  }
}
console.time('time')
const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);



function debounceDecorator2(func) {
  // Ваш код
}
