var specialArray = function (nums) {
    for (i = 0; i <= nums.length; i++) {
        let c = 0;
        for (let num of nums) {
            num >= i && ++c;
        }
        if (c === i) return i;
    }
    return -1;
};