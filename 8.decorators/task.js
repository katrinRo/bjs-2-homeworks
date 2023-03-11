function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = args.join(',');
        let objectInCache = cache.find((item) => item.hash === hash);
        if (objectInCache) {
            console.log("Из кэша: " + objectInCache.value);
            return "Из кэша: " + objectInCache.value;
        }
        let value = func(...args);
        cache.push({hash, value}) ;
        if (cache.length > 5) {
            cache.shift();
        }
        console.log("Вычисляем: " + value);
        return "Вычисляем: " + value;
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
        wrapper.allCount++;
    }
}