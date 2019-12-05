var mod = function (n, m) {
    var remain = n % m;
    return Math.floor(remain >= 0 ? remain : remain + m);
};

let adjust_rotations_needed = function(n, length) {
    //  If n is positive then number of rotations performed is from right side
    //  and if n is negative then number of rotations performed from left side
    //  Let's optimize the number of rotations.
    //  Handle case if 'n' is a negative number.
    n = n % length;

    if (n < 0) {
        n = n + length;
    }

    return n;
};