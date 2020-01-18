let findUniqueChar = string => {
    let hashMap = {}

    for (let char of string) {
        if(!hashMap(char)) {
            hashMap[char] = 1
        } else {
            hashMap[char]++
        }
    }

    for (let i = 0; i < string.length; i++) {
        if(hashMap[string[i]] === 1){
            return i
        }
    }

    return -1
}