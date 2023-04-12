# search-js
## A simple search library to perform text search in JavaScript.

* Very light weight (less than 1 KB).
* No dependency.
* Easy to use.
* Allows configuration.

### Instructions

To use the library frist you need to import the single function `search` using following import statement.
```
inport { search } from '@pritesh9/search'
```

Now you can call the function to get matced objects. Following code requests first 20 matchs.
```
const matchedData = search(data, query, 20)
```

### Notes

The `search` function takes 3 parameters.
1. d: The array of objects. Each object must contain `searchIndex` and `searchScore` fields where searchIndex is a string to search from and it can be manually generated before hand or you can use technique whown in following example. The searchScore field is usually initilized with 0 but you can have some numeric value for bised results.
```
import { search } from '../search.js'

const data = [
    {
        "name": "John Doe",
        "gender": "Male",
        "position": "Manager"
    },
    {
        "name": "Jane Doe",
        "gender": "Female",
        "position": "Supervisor"
    },
    {
        "name": "Steven Demetrius",
        "gender": "Male",
        "position": "Supervisor"
    }
];

let dataWithIndex = [];

for (let i = 0; i < data.length; i++) {
    const o = {
        "searchIndex": (data[i].gender + data[i].position + data[i].name).toLowerCase(),
        "searchScore": 0,
        "result": {...data[i]}
    }
    dataWithIndex.push(o);
}

console.log(search(dataWithIndex, "male doe"), dataWithIndex.length); // returns whole array sortedd by heighest searchScore to lowest.
```
2. q: The query string. By default, matching is case sensite. For case insensitivity, supply searchIndes and query both in same case.
3. n: The number of results you want back (default value is 10). To get whole array back, you can use array.length as a input.

### How does it work? How the searchScore is decided?

* For each word match, 1 point is added to the searchScore along with a value between 0 and 1 based on the position of the matched word.
* More point for matching word is in the begining of the searchIndex and less if matching word is towards the end.
* Number of matching words is favoured more than position in the string.
* Position of words in the query string and white spaces are completely ignored (For eaample, searching for "hello world" and "world hello" have same effect).
* Maximum score for any query is 2 time the number of words in the query string (seperated by a space).
