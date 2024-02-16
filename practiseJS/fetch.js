fetch("http://localhost:5030/v1/todo/todos")
    .then((response) => response.json())
    .then((json) => console.log(json.todos[0].task))
    
    // {
    //     todos:[
    //         {
    //             id:1,
    //             userId:1,
    //             task:[Array],
    //             completed:true
    //         },
    //         {
    //             id:2,
    //             userId:1,
    //             task:[Array],
    //             completed:true
    //         }
    //     ]
    // }

//    Value returned specific to a id
    fetch("http://localhost:5030/v1/todo/todoid?todoId=1")
    .then((response) => response.json())
    .then((json) => console.log(json))


//return todos based on userId
    fetch("http://localhost:5030/v1/todo/byuserid?userId=1")
    .then((response) => response.json())
    .then((json) => console.log(json))


    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))