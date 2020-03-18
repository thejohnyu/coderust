const memoize = (callback) => {
    let cache = {}
    return (...args) => {
        if (n in cache) {
            return cache[n]
        } else {
            let result = callback(...args)
            cache[n] = result
            return result

        }
    }
}
// When we run the body of this function all the variables
// in the scope are gonna be re-initialize, but the "cache" variables will stay the same

// Basically the cache / callback stays the stay
// The only thing that changes is the arguements

function memoize(fn) {
    /* we'll use this object to store the results */
    let cache = {};

    /**
     * Returns a function that will receive the arguments
     * that will be passed to the memoized function (fn).
     */
    return (...args) => {
        /* We stringify the arguments in case they're non-primitive values */
        const cacheKey = JSON.stringify(args);

        /* were the arguments already passed? if no, then store the result */
        if (!(cacheKey in cache)) {
            cache[cacheKey] = fn(...args);
        }

        /* We then return the stored result */
        return cache[cacheKey];
    };
}