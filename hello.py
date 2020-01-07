from collections import namedtuple
import functools

PalindromeData = namedtuple("PalindromeData", "cache word interval")

def longestPalindrome(query, bunchofFuns):
    if not query:
        return ""

    cache = {"result": (0, 0)}
    wordSize = len(query)
    palindromeValidator = validationPipe(
bunchofFuns
    )
    palindromeDPMiddleMans = getMiddleMans(wordSize)

    # update is a curried version of the function 'updateCache'
    # that gets called onto each middleman in the pipeline
    update = functools.partial(
        updateCache, 
        validator=palindromeValidator, 
        cache=cache, 
        query=query,
    )

    palindronePipeline = pipeDP(*palindromeDPMiddleMans)(update)

    # execute the pipeline with the given middlemans and the functions
    palindronePipeline()

    startIndex, endIndex = cache["result"]
    result = query[startIndex : endIndex + 1]
    return result


def validationPipe(*funcs):
    def apply(*args):
        for f in funcs:
            if not f(*args):
                return False
        return True

    return apply


def pipeDP(*pathArgs):
    def inner(func):
        def apply():
            for arg in pathArgs:
                func(arg)

        return apply

    return inner


def getMiddleMans(size):
    for substrLength in range(size):
        for startIndex in range(size - substrLength):
            endIndex = startIndex + substrLength
            yield startIndex, endIndex


def updateCache(interval, *, validator, cache, query):
    data = PalindromeData(cache, query, interval)
    isPalindrome = validator(data)

    startIndex, endIndex = interval
    cache[startIndex, endIndex] = isPalindrome

    if not isPalindrome:
        return

    lo, hi = cache["result"]
    maxLengthSoFar = hi - lo
    substrLength = endIndex - startIndex
    isLargerPalindrome = substrLength > maxLengthSoFar

    if isLargerPalindrome:
        cache["result"] = startIndex, endIndex


def hasSameOuterChars(data):
    start, end = data.interval
    firstCharacter = data.word[start]
    lastCharacter = data.word[end]
    return firstCharacter == lastCharacter


def hasPalindromicSubstring(data):
    start, end = data.interval
    substrLength = end - start
    meetsBaseCaseLength = substrLength <= 1

    if meetsBaseCaseLength:
        return True

    substrStartIndex = start + 1
    substrEndIndex = end - 1
    containsPalindromicSubstr = data.cache[substrStartIndex, substrEndIndex] is True

    return containsPalindromicSubstr