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

const urlify = (str) => {
    const url = '%20';
    let newStr = '';
    str.split(' ').forEach ((char, idx) => {
        if (idx === 0) {
            newStr += char
        } else if (char !== '' && idx !== str.length-1) {
            newStr += url + char
        }
    })

    return newStr
}

// console.log(urlify('Mr John Smith  '));

const stringCompression = (str1) => {
    let currentChar = str1[0];
    let count = 0;
    let newStr = '';

    str1.split('').forEach (char => {
        if (currentChar === char) {
            count += 1;
        } else {
            newStr += currentChar + count;
            currentChar = char;
            count = 1;
        }
    })

    newStr += currentChar + count;

    return newStr.length < str1.length ? newStr : str1
}

// console.log(stringCompression('aabcccaaa'))
// console.log(stringCompression('abcdefghijk'))

const matrixRotate = (arr) => {
    if (arr.length === 0 || arr.length !== arr[0].length) return false;
    let n = arr.length;
    for (let i = 0; i < n/2; i++) {

        let first = i;
        let last = n - 1 - i;

        console.log('first',first, 'last',last);

        for (let j = first; j < last; j++) {
            let offset = j - first;
            let top = arr[first][j]
            
            console.log('-----','j',j);
            console.log('offset',offset);
            console.log('top',top);
            
            //left -> top
            console.log('arr[first][j]',arr[first][j]);
            arr[first][j] = arr[last - offset][first];
            console.log('arr[last - offset][first]',arr[last - offset][first]);
            
            //bottom -> left
            arr[last - offset][first] = arr[last][last-offset]
            
            console.log('arr[last][last-offset]',arr[last][last-offset]);
            //right -> bottom
            arr[last][last-offset] = arr[j][last]
            
            console.log('arr[j][last]',arr[j][last]);
            //top -> right
            arr[j][last] = top
        }
    }
    return true;
}

// console.log(matrixRotate(
//     [
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9, 10, 11, 12],
//         [13, 14, 15, 16]
//     ]
// ))

const zeroMatrix = (array) => {
    let row = {};
    let col = {};
    array.forEach ( (ele, idx1) => {
        ele.forEach ( (ele2, idx2) => {
            if (ele2 === 0) {
                if (!row[idx1]) {
                    row[idx1] = true;
                }
                if (!col[idx2]) {
                    col[idx2] = true;
                }
            }
        })
    })

    Object.keys(row).forEach ( row => {
        for (let i = 0; i < array[row].length; i++) {
            array[row][i] = 0;
        }
    })
    
    Object.keys(col).forEach ( col => {
        for (let i = 0; i < array.length; i++) {
            array[i][col] = 0;
        }
    })

    return array;
}

// console.log(zeroMatrix([[1,2,3, 0], [4,0,6, 1], [7,8,9, 3]]))


const isRotation = (str1, str2) => {
    //assume there is a helper function isSubstring that tells you if one string is a substring of another
    if (str1.length === str2.length && str1.length > 0) {
        str1 = str1 + str1;
        return isSubstring(str1, str2)
    }

    return false;
}

const kthEle = (node, k) => {
    let first = node;
    let second = node;
    for (let i = 1; i < k; i++) {
        if (first.next === null) return null;
        first = first.next;
    }
    
    while (first) {
        first = first.next;
        second = second.next;
    }

    return second.val;
}

const deleteNode = (node) => {
    if (!node || !node.next) return false;

    let nextNode = node.next;
    node.val = nextNode.val;
    node.next = nextNode.next;
}

console.log(deleteNode(node))