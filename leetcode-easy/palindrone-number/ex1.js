const isPalindrome = nums => {
    const reversed = 0

    while (nums > 0) {
        // 123
        const rightDigit = Math.floor( nums % 10) // 3
        reversed = reversed * 10 + rightDigit
        nums = Math.floor( nums / 10 )
    }
}