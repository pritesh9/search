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

document.addEventListener("DOMContentLoaded", () => {
    const searchbar = document.querySelector("#searchbar")
    searchbar.addEventListener("input", (e) => {
        console.log(search(dataWithIndex, e.target.value.toLowerCase()));
    })

})