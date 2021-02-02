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

// console.log(deleteNode(node))


//sliding window (2 pointers + criteria)
const minSubArrayLen = (criteria, array) => {
    let minLen = Infinity;
    let i = 0;
    let sum = 0;

    for (let j = 0; j < array.length; j++) {
        sum += array[j];
        console.log('sum',sum)
        console.log('j', j)
        while (sum >= criteria) {
            console.log('sum',sum)
            minLen = Math.min(minLen, j - i + 1);
            console.log('minLen',minLen)
            console.log('i++',i)
            console.log('array[i++]',array[i++])
            // i++
            sum -= array[i++];
        }
    }

    // console.log('results',minLen === Infinity ? 0 : minLen)
}

// console.log(minSubArrayLen(5, [0, 2, -1, 3, 4, 1, -2]))


function minSwaps(array) {
    let count = 0;

    let pointer = 0;
    while (pointer < array.length) {
        let tempArr = array.slice(pointer);
        let minIdx = tempArr.indexOf(Math.min(...tempArr));

        if (minIdx !== 0) {
            [array[pointer], array[minIdx+pointer]] = [array[minIdx+pointer], array[pointer]]
            count += 2;
        }
        pointer++
    }

    return count
}

// console.log(minSwaps([6,1,3,4,2,5]))
// console.log(minSwaps([3,2,1]))

function getIdealNums(low, high) {
    // Write your code here
    let num = 0;
    let x = y = 0;
    let currInt = 0;
    while (currInt <= high) {
        currInt = Math.pow(3, x) * Math.pow(5, y);
        let tempInt = currInt;
        while (tempInt < high) {
            tempInt = Math.pow(3, x) * Math.pow(5, y)
            if (tempInt >= low && tempInt <= high) num++;
            y++;
        }
        y = 0;
        x++;
        // if (currInt < low) {
        //     y++
        // }
        // if (currInt >= low && currInt <= high) {
        //     num++;

        // }
    }

    return num;
}

function matchPattern(words, pattern) {
    let matchedWords = [];

    words.forEach(word => {
        if (isMatch(word, pattern)) matchedWords.push(word);
    });

    return matchedWords;
}

function isMatch(word, pattern) {
    if (word.length !== pattern.length) return false;

    let wordToPattern = {};
    let patternToWord = {};

    for (let i = 0; i < word.length; i++) {
        if (!wordToPattern[word[i]]) wordToPattern[word[i]] = pattern[i];
        if (!patternToWord[pattern[i]]) patternToWord[pattern[i]] = word[i];

        if (wordToPattern[word[i]] !== pattern[i] || patternToWord[pattern[i]] !== word[i]) return false;
    };

    return true;
}

// console.log(matchPattern(['aa','bb'], 'cc'))
// console.log(matchPattern(['aac','bbc', 'bcb', 'yzy'], 'ghg'))
// console.log(matchPattern(['aa','bb'], 'zy'))

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let obj = {};
    
    for (let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]]++;
        };
        
        if (!obj[t[i]]) {
            obj[t[i]] = -1;
        } else {
            obj[t[i]]--;
        };
    }
    
    // let output = true;

    // Object.values(obj).forEach (val => {
    //     if (val !== 0) output = false;   
    // });
    function valEqualsZero(val) {
        return val === 0;
    };
    
    Object.values(obj).every( val => valEqualsZero(val));
    console.log(Object.values(obj))
    // return output;
};

// console.log(isAnagram('anagram', 'nagaram'))

function fib(n) {
    // if (n <= 1 || n === 2) return 1;
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fib(n-1) + fib(n-2)
}

// console.log(fib(3))
// console.log(fib(5))

function allFib(n) {
    if (n === 1 || n === 2) return 1;

    let tracker = [1, 1];
    
    while (tracker.length < n) {
        let next = tracker[tracker.length - 1] + tracker[tracker.length - 2];
        tracker.push(next);
    }

    return tracker;
}

// console.log(allFib(3));
// console.log(allFib(5));

function allFibRecur(n) {
    if (n <= 1) return [1];
    if (n === 2) return [1, 1];

    let fibSeq = allFibRecur(n-1);
    fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2])
    return fibSeq;
}

// console.log(allFibRecur(3));
// console.log(allFibRecur(5));

function fibIter(n) {
    if (n === 1 || n === 2) return 1;

    let tracker = [1, 1];
    
    while (tracker.length < n) {
        let next = tracker[tracker.length - 1] + tracker[tracker.length - 2];
        tracker.push(next);
    }

    return tracker[tracker.length - 1];
};

// console.log(fibIter(3));
// console.log(fibIter(5));

function quickSort(n) {
    if (n.length <= 1) return n;
    
    let pivot = n.shift();
    let left = n.filter( val => val < pivot);
    let right = n.filter( val => val >= pivot);

    let leftSort = quickSort(left);
    let rightSort = quickSort(right);

    return [...leftSort, pivot, ...rightSort]
}

// console.log(quickSort([7, 3, 8, 9, 2]))

function quickSortIter(n) {
    if (n.length <= 1) return n;

    let pivot = n.shift();
    let left = n.filter( val => val < pivot);
    let right = n.filter( val => val >= pivot);

    let leftSort = quickSort(left);
    let rightSort = quickSort(right);

    return [...leftSort, pivot, ...rightSort]
}

// console.log(quickSortIter([7, 3, 8, 9, 2]))

function mergeSort(n) {
    if (n.length <= 1) return n;

    let midpoint = Math.floor(n.length / 2);
    let left = n.slice(0, midpoint);
    let right = n.slice(midpoint);

    let leftSort = mergeSort(left);
    let rightSort = mergeSort(right);

    return merge(leftSort, rightSort)
}

function merge(left, right) {
    let merged = [];

    while (left.length || right.length) {
        let currLeft = left[0] || Infinity;
        let currRight = right[0] || Infinity;

        if (currLeft < currRight) {
            merged.push(left.shift());
        } else {
            merged.push(right.shift());
        }
    }

    return merged;
}

// console.log(mergeSort([7, 3, 8, 9, 2]))

function bsearch(n, target) {
    if (n.length < 1) return -1;

    let midpoint = Math.floor(n.length / 2);

    let left = n.slice(0, midpoint);
    let right = n.slice(midpoint + 1);

    if (n[midpoint] === target) {
        return midpoint;
    } else if (n[midpoint] > target) {
        return bsearch(left, target);
    } else {
        let rightSorted = bsearch(right, target);
        return rightSorted === -1 ? -1 : rightSorted + midpoint + 1;
    };
}

// console.log(bsearch([5, 10, 12, 15, 20, 30, 70], 12))
// console.log(bsearch([5, 10, 12, 15, 20, 30, 70], 70))

function bsearch(n, target) {
    if (n.length < 1) return false;

    let midpoint = Math.floor(n.length / 2);

    let left = n.slice(0, midpoint);
    let right = n.slice(midpoint + 1);

    if (n[midpoint] === target) {
        return true;
    } else if (n[midpoint] > target) {
        return bsearch(left, target);
    } else {
        return bsearch(right, target);
    };
}

// console.log(bsearch([5, 10, 12, 15, 20, 30, 70], 12))
// console.log(bsearch([5, 10, 12, 15, 20, 30, 70], 71))

function dfs(root) {
    let stack = [root];

    while (stack.length) {
        let curr = stack.pop();
        console.log(curr.val);

        if (curr.right) stack.push(curr.right);
        if (curr.left) stack.push(curr.left);
    }
}

function dfsRecur(root) {
    if (!root) return;
    console.log(root.val);
    dfsRecur(root.left);
    dfsRecur(root.right);
}

function bfs(root) {
    let queue = [root];

    while (queue.length) {
        let curr = queue.shift();
        console.log(curr.val);

        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
    }
}