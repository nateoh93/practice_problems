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
    
    let output = true;

    Object.values(obj).forEach (val => {
        if (val !== 0) output = false;   
    });

    return output;
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

var dailyTemperatures = function(T) {
    const stack = [], result = [];
    
    for(let i = T.length-1; i >= 0; i--) {
        let top = stack[stack.length-1];
        
        console.log('top', top)
        while(stack.length && T[top] <= T[i]) {
            console.log('enter while')
            stack.pop();
            top = stack[stack.length-1];
        }

        !stack.length ? result.push(0) : result.push(top - i);
        stack.push(i);

        console.log('stack', stack)
        console.log('result', result)
        console.log('-----')
    }
    return result.reverse();
};

// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))

function bubblesort(n) {
    let sorted = true;

    while (sorted) {
        sorted = false;

        for (let i = 0; i < n.length; i++) {
            if (n[i] > n[i+1]) {
                [n[i], n[i+1]] = [n[i+1], n[i]]
                sorted = true;
            }
        }
    }

    return n
}

// console.log(bubblesort([7, 3, 8, 9, 2]))

function shortenString(str) {
        let stack = [];
        for (let i = 0; i < str.length; i++) {
            console.log(str[i] === '#')
            if (str[i] !== '#') {
                stack.push(str[i]);
            } else {
                stack.pop();
            };
        };
        // console.log(str, stack)
        return stack.join('');
}
// console.log(shortenString('yf#c#'))

function compareStrings(s1, s2) {
    // Write your code here
    
    let news1 = shortenString(s1);
    let news2 = shortenString(s2);
    console.log(news1, news2)
    let equal = 0;
    
    return equal;
}


// console.log(compareStrings('yf#c#', 'yy#k#pp##'))

//input (book)

let book = {
    1: 'the cat likes to play with string',
    2: 'the dog likes to play with the ball',
    6: 'the bird'
}

function createIndex(book) {
    let entriesValue = Object.values(book);
    //['the cat likes to play with string', 'the dog likes to play with the ball', 'the bird']
    let entriesKey = Object.keys(book);
    let results = {};

    for (let i = 0; i < entriesValue.length; i++) {
        let words = entriesValue[i].split(' ');
        //words = [the, cat, likes, to, play, with, string]
        words.forEach (word => {
            if (results[word]) {
                if (!results[word].has(entriesKey[i])) results[word].add(entriesKey[i]);
            } else {
                results[word] = new Set();
                results[word].add(entriesKey[i]);
            };
        });
    };

    // console.log(Array.from(results['the']))
    return results;
}

// console.log(createIndex(book))

function printIndex(book) {
    let results = createIndex(book);

    for (const [key, val] of Object.entries(results)) {
        results[key] = Array.from(val);
    };

    return results;
}

// console.log(printIndex(book));

function printBySize(book) {
    let results = printIndex(book);
    const printObj = Object.entries(results).sort( (a,b) => b[1].length - a[1].length)
    return printObj;
}

// console.log(printBySize(book));

//merge 2 unsorted arrays in sorted order
//ex. a = [10, 5, 15] b = [20, 3, 2] => output = [2, 3, 5, 10, 15, 20]

//brute force: sort a, sort b. do while loop until a or b is empty. then concat them.
//n log n to sort. then n

function sortedMerge(a, b) {
    a.sort((y, z) => z - y);
    b.sort((y, z) => z - y);

    const merged = [];
    while (a.length && b.length) {
        let ele1 = a[a.length - 1];
        let ele2 = b[b.length - 1];
        if (ele1 < ele2) {
            merged.push(a.pop());
        } else {
            merged.push(b.pop());
        };
    };
    
    return merged.concat(a, b);
}

// console.log(sortedMerge([10, 5, 15], [20, 3, 2]))

//Given an array of meeting time intervals consisting of start and end times[[s1,e1],[s2,e2],...](si< ei), find the minimum number of conference rooms required.
// Input: [[0, 30],[5, 10],[15, 20]]
// Output: 2
// Input: [[7,10],[2,4]]
// Output:1


// console.log(minMeetingRooms([[7, 10],[2, 4]]));
// console.log(minMeetingRooms([[0, 30],[15, 20],[5, 10]]))

var minMeetingRooms = function(intervals) {
    var schedule = {};
    
    intervals.forEach((interval)=>{
        schedule[interval.start] = schedule[interval.start] || 0;
        schedule[interval.start]++;
        
        schedule[interval.end] = schedule[interval.end] || 0;
        schedule[interval.end]--;
    });
    // console.log(schedule)
    var maxRooms = 0;
    var rooms = 0;
    
    for(var i in schedule) {
        rooms += schedule[i];
        // console.log('i',i, 'rooms', rooms)
        maxRooms = Math.max(maxRooms, rooms);
    }
    
    return maxRooms;
};

// var data = [
//     {start: 9, end: 12},
//     {start: 2, end: 7},
//     {start: 5, end: 17},
//     {start: 12, end: 17},
// ]

// var data = [
//     {start: 0, end: 15},
//     {start: 15, end: 20},
//     {start: 5, end: 10},
//     {start: 7, end: 10},
//     {start: 21, end: 23},
//     {start: 7, end: 30},
// ]

// console.log(minMeetingRooms(data));


var decodeString = function(s) {
    let stack = [];
    let nums = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ']') {
            let tempStr = '';
            let tempChar = stack.pop();
            
            while (tempChar !== '[') {
                tempStr = tempChar + tempStr;
                tempChar = stack.pop();
            };
            
            let repeat = stack.pop();
            let num = '';
            
            while (nums.has(repeat)) {
                num = repeat + num;
                repeat = stack.pop();
            };
            
            stack.push(repeat, tempStr.repeat(parseInt(num)));
            continue;
        };
        
        stack.push(s[i]);
    };
    
    return stack.join('');
};

var twoCitySchedCost = function(costs) {
    //sort by the biggest difference between 2 cities
    //ex. costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
    
    costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
    
    // costs = [[259, 770], //diff = -511
    //          [184, 139], //45
    //          [577, 469], //108
    //          [926, 667], //259
    //          [448, 54], //394
    //          [840, 118] //722
    // ]
    
    //if you sent everybody to B. you want to find the half that will give you the biggest refund 
        // for sending them to A / or pay the smallest difference to send to A. ex. you get '511'
        // refund for sending to A, you have to pay the smallest difference of '45' to send to
        // A...'108' is the next smallest difference to go to A. the rest you keep in B.
    //you can do this vice versa. logic would be reversed
    
    let length = costs.length / 2;
    let totalCosts = 0;
    for (let i = 0; i < length; i++) {
        totalCosts += costs[i][0];
    };
    
    for (let i = length; i < costs.length; i++) {
        totalCosts += costs[i][1];
    };
    
    // return costs.reduce((total, cost, index) => (index < costs.length / 2) ? total + cost[0] : total + cost[1], 0);
    return totalCosts;
};


// console.log(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]]))
// console.log(twoCitySchedCost([[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]))

function isPalindrome(input) {
    const alpha = new Set('abcdefghijklmnopqrstuvwxyz0123456789'.split(''));
    let reversedStr = '';
    let str = '';

    for (let i = 0; i < input.length; i++) {
        let currChar = input[i].toLowerCase();
        if (!alpha.has(currChar)) continue;
        reversedStr = currChar + reversedStr;
        str += currChar;
    };
    console.log(str, reversedStr);
    return str === reversedStr;
}

// console.log(isPalindrome("A man, a plan, a canal: Panama"))
// console.log(isPalindrome("0P"))

// const UndergroundSystem = function() {
//     this.routes = {}; // { 'startstation -> endstation' : [totalTime, numTrips]}
//     this.customers = {}; // { id : [startStation, startTime]}
// }

// UndergroundSystem.prototype.checkIn = function(id, stationName, time) {
//     this.customers[id] = [stationName, time];
//     // console.log('checkin', this.customers, '------');
// }

// UndergroundSystem.prototype.checkOut = function(id, stationName, time) {
//     const startStation = this.customers[id][0];
//     const startTime = this.customers[id][1];
//     delete this.customers[id];
//     const key = startStation + stationName;
//     const travelTime = time - startTime;
    
//     if (!this.routes[key]) {
//         this.routes[key] = [travelTime, 1];
//     } else {
//         this.routes[key][0] += travelTime;
//         this.routes[key][1] += 1;
//     };
//     // console.log('checkout',this.customers, this.routes, '------');
// }

// UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
//     // console.log('avg',this.routes, '------')
//     const key = startStation + endStation;
//     // console.log('key', key)
//     const totalTime = this.routes[key][0];
//     const totalCustomers = this.routes[key][1];

//     return totalTime / totalCustomers;
// }

// undergroundSystem = new UndergroundSystem();
// undergroundSystem.checkIn(45, 'Leyton', 3);
// undergroundSystem.checkIn(32, 'Paradise', 8);
// undergroundSystem.checkIn(27, 'Leyton', 10);
// undergroundSystem.checkOut(45, 'Waterloo', 15);
// undergroundSystem.checkOut(27, 'Waterloo', 20);
// undergroundSystem.checkOut(32, 'Cambridge', 22);
// console.log(undergroundSystem.getAverageTime('Paradise', 'Cambridge'));
// console.log(undergroundSystem.getAverageTime('Leyton', 'Waterloo'));
// undergroundSystem.checkIn(10, 'Leyton', 24);
// console.log(undergroundSystem.getAverageTime('Leyton', 'Waterloo'));
// undergroundSystem.checkOut(10, 'Waterloo', 38);
// console.log(undergroundSystem.getAverageTime('Leyton', 'Waterloo'));

//assumptions:
    //customer can only check in one place at a time
    //customer can only check out one place at a time
    //checkout time will always be > checkin time
    //checkin station !== checkout station
    //average time between stations is directly from startstation to endstation
    //do not need to store customer data after they've checked out
    //can have multiple customers checked in at a time
    //can assume check in and check out data will always be consistent

class UndergroundSystem {
    constructor() {
        this.routes = {}; // { 'startstation -> endstation' : [totalTime, numTrips]}
        this.customers = {}; // { id : [startStation, startTime]}
    }

    checkIn(id, stationName, time) {
        this.customers[id] = [stationName, time];
        // console.log('checkin', this.customers, '------');
    }

    checkOut(id, stationName, time) {
        const startStation = this.customers[id][0];
        const startTime = this.customers[id][1];
        delete this.customers[id];
        const key = startStation + stationName;
        const travelTime = time - startTime;
        
        if (!this.routes[key]) {
            this.routes[key] = [travelTime, 1];
        } else {
            this.routes[key][0] += travelTime;
            this.routes[key][1] += 1;
        };
        // console.log('checkout',this.customers, this.routes, '------');
    }

    getAverageTime(startStation, endStation) {
        // console.log('avg',this.routes, '------')
        const key = startStation + endStation;
        // console.log('key', key)
        const totalTime = this.routes[key][0];
        const totalCustomers = this.routes[key][1];
    
        return totalTime / totalCustomers;
    }
}

//invalid transactions
var invalidTransactions = function(transactions) {
    const invalid = [];
    const hashMap = {};
    
    for (const transaction of transactions) {
        const [name, time, amount, city] = transaction.split(',');
        
        if (name in hashMap) {
            hashMap[name].push({ time, city });
        } else {
            hashMap[name] = [{ time, city }];
        };
    };
    
    for (const transaction of transactions) {
        if (isInvalid(transaction, hashMap)) invalid.push(transaction);
    };
    
    return invalid;
};

function isInvalid(transaction, hashMap) {
    const [name, time, amount, city] = transaction.split(',');
    if (amount > 1000) return true;
    
    const previousTransactions = hashMap[name];
    
    for (const trans of previousTransactions) {
        if (city !== trans.city && Math.abs(time - trans.time) <= 60) return true;
    };
    
    return false;
};

//word search
var exist = function(board, word) {
    function dfs(x, y, index=0) {
        if (!isValidPos(board, x, y)) return false;
        if (board[x][y] !== word.charAt(index)) return false;
        if (board[x][y] === -1) return false;
        if (index === word.length - 1) return true;

        const temp = board[x][y];
        board[x][y] = -1;
        
        if (dfs(x+1, y, index+1)) return true;
        if (dfs(x-1, y, index+1)) return true;
        if (dfs(x, y+1, index+1)) return true;
        if (dfs(x, y-1, index+1)) return true;
        
        board[x][y] = temp;
        return false;
    };
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let currPos = board[i][j]
            if (currPos === word.charAt(0) && dfs(i, j)) return true;
        };
    };
    
    return false;
};

function isValidPos(board, x, y) {
    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) return false;
    return true;
};

// console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"));

var topKFrequent = function(words, k) {
    let m = {};
    words.forEach(word => {
        if (!m[word]) {
            m[word] = 1;
        } else {
            m[word]++;
        };
    });
    let arr = Object.entries(m).sort((a,b) => b[1] - a[1]);

    let results = [];
    for (let i = 0; i < k; i++) {
        results.push(arr[i][0]);
    };
    return results;
    // Time Complexity: O(nlog(n))
    // Space Complexity: O(n)
};

// console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2))

// top k stocks

// Design an aggregator class for sum, count, avg for a stream of numbers without if else loop for checking type of aggregator each time

// Custom Index Engine

// Consider the browser search where you type an URL. You need to keep track of the history and to print the most recent URLs the user searched. More or less LRU cache

//favorite data structure

const decrement = setInterval(timer, 1000);
let second = 5;
function timer() {
    second--;
    console.log(second);
    if (second <= 0) {
        clearInterval(decrement)
    };

}

// console.log(decrement);

class UndergroundSystem {
    constructor() {
        this.routes = {};
        this.customers = {};
    }

    checkIn(id, stationName, t) {
        this.customers[id] = [stationName, t];
    }

    checkOut(id, stationName, t) {
        const startStation = this.customers[id][0];
        const startTime = this.customers[id][1];
        const totalTime = t - startTime;
        const key = startStation + stationName;
        if (!this.routes[key]) {
            this.routes[key] = [1, totalTime];
        } else {
            this.routes[key][0]++;
            this.routes[key][1] += totalTime;
        };
    }

    getAverageTime(start, end) {
        const key = start + end;
        const time = this.routes[key][1];
        const numPeople = this.routes[key][0];

        return time / numPeople;
    }
}

class BrowserHistory {
    constructor(homepage) {
        this.backwards = [homepage];
        this.forwards = [];
    }

    visit(url) {
        this.backwards.push(url);
        this.forwards = [];
    }
    //[google, face, yout, leet] //steps = 4 length = 4
    back(steps) {
        while (steps > 0) {
            if (this.backwards.length === 1) break;
            this.forwards.push(this.backwards.pop());
            steps--;
        };

        return this.backwards[this.backwards.length - 1];
    }

    forward(steps) {
        while (steps > 0) {
            if (this.forwards.length === 0) break;
            this.backwards.push(this.forwards.pop());
            steps--;
        };

        return this.backwards[this.backwards.length - 1];
    }
}

class HitCounter {
    constructor() {
        this.counter = [];
    }

    hit(timestamp) {
        this.counter.push(timestamp);
    }

    getHits(timestamp, limit=300) {
        let bottomLimit = timestamp > limit ? timestamp - limit : 0;

        while (this.counter.length) {
            const ele = this.counter[0];
            if (ele <= bottomLimit) {
                this.counter.shift();
            } else {
                break;
            };
        };

        return this.counter.length;
    }
}

var subsets = function(nums) {
    const sets = [[]];
    
    for (let i = 0; i < nums.length; i++) {
        let tempArr = [];
        
        for (let j = 0; j < sets.length; j++) {
            tempArr.push([...sets[j], nums[i]]);
        };
        
        sets.push(...tempArr);
    };
    
    return sets;
};

var isValidBST = function(root, min=-Infinity, max=Infinity) {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    
    let isLeftValid = isValidBST(root.left, min, root.val);
    let isRightValid = isValidBST(root.right, root.val, max);
    
    return isLeftValid && isRightValid
    
    //DFS
    //start at root
        //is left node < root?
            //if no - return false
            //if yes and left node has children, search again but pass in 'current root'
        //is right node > root?
            //if no - return false
            //if yes and right node has children, search again but pass in 'current root'
};

var numIslands = function(grid) {
    //iterate through the grid - nested loop (n^2)
    //if you find land - DFS - find neighbor coord (N, S, W, E) 
            //coordinates = [[0,1], [0, -1], [-1,0], [1,0]]
        //search coordinates if it's land push onto stack
            //add currCoord to all coordinate e.g. curr = [1][1]. neighbors = [[0,1],[1,0],[1,2],[2,1]]
        //keep going until stack is empty
            //after stack is empty increase island count
        //change value to X after examining coordinate
    //if you water or X keep moving
    //have edge case for if you are edge of grid.
        //[x,y]. 0<=x<grid.length 0<=y<grid[0].length
    
    let numIslands = 0;
    const coordinates = [[0,1], [0,-1], [-1,0], [1,0]];
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            let currPos = grid[i][j];
            if (currPos === 'x' || currPos === '0') continue;
            
            grid[i][j] = 'x';
            const stack = [];
            coordinates.forEach( coord => {
                let x = coord[0] + i;
                let y = coord[1] + j;
                let potNeighbor;
                if (isValidPos([x,y], grid)) potNeighbor = grid[x][y];
                
                if (potNeighbor && potNeighbor === '1') {
                    stack.push([x, y]);
                    grid[x][y] = 'x';
                };
            });
            
            while (stack.length) {
                console.log('stack',stack)
                let coordinate = stack.pop();
                coordinates.forEach( coord => {
                    let subX = coord[0] + coordinate[0];
                    let subY = coord[1] + coordinate[1];
                    let neighbors;
                    if (isValidPos([subX, subY], grid)) neighbors = grid[subX][subY];
                    
                    if (neighbors && neighbors === '1') {
                        stack.push([subX, subY]);
                        grid[subX][subY] = 'x';
                    };
                });
            };
            numIslands++;
        };
    };
    
    return numIslands
};
    
var isValidPos = function(coordinate, grid) {
    const x = coordinate[0],
        y = coordinate[1],
        xValid = 0 <= x && x < grid.length,
        yValid = 0 <= y && y < grid[0].length;
    
    return xValid && yValid;
}

var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    
    let results = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        let currentS = intervals[i][0];
        let currentE = intervals[i][1];
        let prevE = results[results.length - 1][1];
        
        if (currentS <= prevE) {
            results[results.length - 1][1] = Math.max(currentE, prevE);
        } else {
            results.push(intervals[i]);
        };
    };
    
    return results;
};

var removeDuplicates = function(s, k) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        let currChar = s[i];
        let recentChar = stack[stack.length - 1];
        
        if (stack.length && recentChar[0] === currChar) {
            recentChar[1] === k - 1 ? stack.pop() : recentChar[1]++;
        } else {
            stack.push([currChar, 1]);
        };
    };
    
    let str = ''
    for (let i = 0; i < stack.length; i++) {
        str += stack[i][0].repeat(stack[i][1]);
    }
    
    return str;
};

var decodeString = function(s) {
    let stack = [];
    let nums = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ']') {
            let tempStr = '';
            let tempChar = stack.pop();
            
            while (tempChar !== '[') {
                tempStr = tempChar + tempStr;
                tempChar = stack.pop();
            };
            
            let repeat = stack.pop();
            let num = '';
            
            while (nums.has(repeat)) {
                num = repeat + num;
                repeat = stack.pop();
            };
            
            stack.push(repeat, tempStr.repeat(parseInt(num)));
            continue;
        };
        
        stack.push(s[i]);
    };
    
    return stack.join('');
};

//flatten multilevel doubly linked list
var flatten = function(head) {
    let curr = head;
    const stack = [];
    
    while (curr) {
        if (curr.child) {
            if (curr.next !== null) stack.push(curr.next);
            curr.next = curr.child;
            curr.next.prev = curr;
            curr.child = null;
        };
        
        if (curr.next === null && stack.length > 0) {
            let node = stack.pop();
            curr.next = node;
            curr.next.prev = curr;
        };
        
        curr = curr.next;
    };
    
    return head
};

// console.log(flatten())