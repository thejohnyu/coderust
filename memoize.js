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