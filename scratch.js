var findKthLargest = function(nums, k) {
    
    let sorted = nums.sort((a, b) => a - b);
    console.log(sorted)
    return sorted[nums.length - k]
};

// console.log(findKthLargest([3,2,1,5,6,4], 2))

const isPermutation = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    let obj = {};
    let results = true;

    for (let i = 0; i < str1.length; i++) {
        let str1Char = str1[i];
        let str2Char = str2[i];
        if (obj[str1Char]) {
            obj[str1Char] += 1
        } else {
            obj[str1Char] = 1;
        }

        if (obj[str2Char]) {
            obj[str2Char] -= 1
        } else {
            obj[str2Char] = -1;
        }
    }

    let arr = Object.values(obj);
    
    arr.forEach (ele => {
        if (ele !== 0) results = false;
    })

    return results;
}

// console.log(isPermutation('dog ', 'dog'))