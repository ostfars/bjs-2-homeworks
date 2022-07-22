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

function debounceDecorator2(func) {
  let count = 0;
  let timerId;
   
  return function (...args) {
    if (!timerId) {
      f.apply(this, args)
    }
    
    clearTimeout(timerId);
      timerId = setTimeout(() => {
      f.apply(this, args);
    }, ms)
    count++;
    // console.log(count)
  }
}
