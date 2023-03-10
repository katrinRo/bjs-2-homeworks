function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = args.join(',');
        let objectInCache = cache.find((item) => item === hash);
        if (objectInCache) {
            objectInCache = func.call(this, ...args);
            console.log("Из кэша: " + objectInCache);
            return "Из кэша: " + objectInCache;
        }
        let result = func(...args);
        cache.push(hash) ;
        if (cache.length > 5) {
            cache.shift();
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }

    return wrapper;
}



function debounceDecoratorNew(func) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;
    return function wrapper(...args) {
        if (timeoutId === null) {
            wrapper.count++;
            func(...args);
        }
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            wrapper.count++;
            func(...args);
        }, delay)
    }
}