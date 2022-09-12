// level {3}

const obj = {
    liked: [
        { id: 1, name: "John Doe", age: 20 },
        { id: 2, name: "Jane Doe", age: 30 },
        { id: 3, name: "John Smith", age: 40 }
    ],
    disliked: [
        { id: 4, name: "Jason Doe", age: 20 },
        { id: 5, name: "Josh Doe", age: 30 },
        { id: 6, name: "Karen Smith", age: 40 }
    ],
    loved: [
        { id: 7, name: "Jasmine Doe", age: 20 },
        { id: 8, name: "Bob Doe", age: 30 },
        { id: 9, name: "Tom Smith", age: 40 }
    ]
}


function reStructure(obj){

    let output = [];
    [...Object.keys(obj)].forEach((key)=>{
        let arr = obj[key];

        arr.forEach((item)=>{
            item['reaction'] = key;

            output.push(item);
        })
    })

    return output;
}

console.log(reStructure(obj));