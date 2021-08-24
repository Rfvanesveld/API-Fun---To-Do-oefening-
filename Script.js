const getAllTodos = async () => {
    const todos = await getFerrari();
    console.log(getFerrari)

    todos.forEach(todo => console.log(todo));

    // displayData = document.createElement("li")
    // displayData.innerHTML = (todo)
    // database.appendChild(displayData)
}; console.log(getFerrari)

const database = document.getElementById('Database');

document.getElementById("button").addEventListener('click', getFerrari);
document.getElementById("button2").addEventListener('click', postFerrari);
document.getElementById("button3").addEventListener('click', getAllTodos);



// let showData = function () {

// displayData = document.createElement("li")
// displayData.innerHTML = (result)
// database.appendChild(displayData)
// }; console.log(showData)


// async function postFerrari2() {
//     postFerrari()
// }
// postFerrari2()

// async function getFerrari2() {
//     getFerrari()
// }
// getFerrari2()