function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
      const hash = args.join(',');
      let objectInCache = cache.find((item) => item.hash === hash);
      if (objectInCache) { 
          console.log("Из кэша: " + objectInCache.result)
          return "Из кэша: " + objectInCache.result;
      }

      let result = func(...args); 
      cache.push({hash, result}); 
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
  let timerId;
  
  function wrapper (...args) {
    if (!timerId) {
      f.apply(this, args)
    }

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      f.apply(this, args);
    }, ms)
    wrapper.count++
  }
  
  wrapper.count = 0;
  return wrapper
}