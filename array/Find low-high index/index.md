At every step, consider the array between low and high indices
Calculate the mid index.
If element at mid index is less than the key, low becomes mid + 1 (to move towards start of range)
If element at mid is greater or equal to the key, high becomes mid - 1. Index at low remains the same.
When low is greater than high, low would be pointing to the first occurrence of the key.
If element at low does not match the key, return -1.