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


const debounceDecoratorNew = (f, ms) => {
 
  let timerId;
   
  return function (...args) {
    if (!timerId) {
      f.apply(this, args)
    }
    
    clearTimeout(timerId);
      timerId = setTimeout(() => {
      f.apply(this, args);
    }, ms)
  }
}

// const sendSignal = () => console.log("Сигнал отправлен");
// const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
// setTimeout(upgradedSendSignal); // Сигнал отправлен
// setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
// setTimeout(upgradedSendSignal, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
// setTimeout(upgradedSendSignal, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (300 < 2000)
// setTimeout(upgradedSendSignal, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
// setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
// setTimeout(upgradedSendSignal, 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с



function debounceDecorator2(func) {
  f()
  
  let timerId;
   
  return function (...args) {

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      f.apply(this, args);
    }, ms)
  }
  
}
