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

// import React from 'react';
// import classnames from 'classnames';
// // you should import `lodash` as a whole module
// import lodash from 'lodash';
// import axios from 'axios';

// const ITEMS_API_URL = 'https://example.com/api/items';
// const DEBOUNCE_DELAY = 500;

// // the exported component can be either a function or a class

// class Autocomplete extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       list: [],
//       search: '',
//     };
//     this.handleSearch = this.handleSearch.bind(this);
//     this.displayList = this.displayList.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleSearch(e) {
//     if (e.currentTarget.value.length === 0) {
//       this.setState({list: []})
//     } else {
//       axios.get(`${ITEMS_API_URL}?q=${e.currentTarget.value}`)
//         .then(res => this.setState({list: res.data}, () => console.log(this.state)));
//     };
//   }

//   displayList() {
//     const {list} = this.state;

//     return list.map(item => {
//       return <a className='list-item' onClick={() => this.handleClick(item)}>{item}</a>
//     })
//   }

//   handleClick(e) {
//     alert(`Selected: ${e}`);
//   }

//   render() {
//     return (
//       <div className="wrapper">
//         <div className="control">
//           <input type="text" className="input" onChange={this.handleSearch} />
//         </div>
//         <div className="list is-hoverable">
//           {this.displayList()}
//         </div>
//       </div>
//     )
//   }
// }

// export default Autocomplete;

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

// // app.all('*', (req, res) => {
// //     return res.sendStatus(500);
// // });

// app.post('/messages', (req, res) => {
//     const payloadInfo = ['date', 'author', 'channel', 'text'];

//     payloadInfo.forEach (property => {
//         if (!req.body[property]) return res.sendStatus(422);
//     });

//     return res.sendStatus(201);
// });

// app.get('/messages', (req, res) => {
//     const author = req.body['author'] ? req.body['author'] : null;
//     const channel = req.body['channel'] ? req.body['channel'] : null;
//     const count = req.body['count'] ? req.body['count'] : 10;
    
    

//     const payload = {

//     };
// });



// module.exports = app;

// function solution(S) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     const visited = {};
    
//     for(let i = 0; i < S.length; i++) {
//         let currentChar = S[i];
//         if (visited[currentChar]) {
//             return currentChar;
//         } else {
//             visited[currentChar] = true;
//         };
//     };
// }

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

// function showCustomers(customers, targetList) {
//   // Your code goes here
//   targetList.innerHTML = customers.map(customer => {
//     return `
//       <li>
//         <p>${customer.name}</p>
//         <p id=${customer.name}=>${customer.email}</p>
//       </li>
//     `
//   }).join('');
  
//   targetList.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target)
//      const email = document.getElementById("e.target.value");
//     if (email.style.display === "none") {
//       email.style.display === "block";
//     } else {
//       email.style.display === "none";
//     }
//   })
  
// }

// function getInParallel(apiCalls) {
//   // Write your code here
// //   let print = []

// //   let i = 0;
// //   while (i < apiCalls.length) {
// //     apiCalls[i]().then( res => {
// //         return res
// //     })
   
// //     i++;
// //   }
// //     let print = []
// //   apiCalls.forEach(apiCall => {
// //     apiCall.then( function(response) {
// //       print.push(response);
// //     })
// //   });
  
// //   return print;
// //   apiCalls.forEach(apiCall => {
// //     apiCall().then( res => {
// //         console.log(results)
// //     })
// //   });

// //   console.log(...apiCalls);
  
// //   apiCalls.forEach(apiCall => {
// //     apiCall().then( res => {
// //         console.log([res])
// //     })
// //   });
// }

// let promise = getInParallel([() => Promise.resolve("First API call!"),
//                              () => Promise.resolve("Second API call!")]);
// if(promise) {
//   promise.then((result) => console.log(result)).catch((err) => console.log(err));
// }

// function createEmitter(onOpen, onClose) {    
//   onOpen();
//   onClose();
// }

// function opened(emitter) {
//   return emitter;
// }
// function closed(emitter) {
//   return emitter;
// }

// let emitter = createEmitter(
//   () => console.log("Opened!"), () => console.log("Closed!")
// );
// opened(emitter);
// closed(emitter);

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
