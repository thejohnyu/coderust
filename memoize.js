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