const Url = `http://localhost:3000/`

async function postFerrari() {
    try {

        const ferrariObject = { description: "Buy A Ferrari", done: false };
        const response = await fetch(Url, {
            method: "POST",
            body: JSON.stringify(ferrariObject),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        console.log(result)

    } catch {
        console.log("error");
    }
}
// postFerrari()

async function getFerrari() {
    try {

        const response = await fetch(Url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        console.log(result)

    } catch {
        console.log("error");
    }
}













// async function postFerrari() {
//     postFerrari)
// }

// postFerrari()


// ALTERNATIVE GET FUNCTIE ..................................................

// async function getFerrari() {
//     
//     try {
//         const response = await fetch(baseUrl, {
//             headers: { "Content-Type": "application/json" },
//         });
//         if (response.ok) {
//             let result = await response.json();
//             return result;
//         } else {
//             console.log(`Something went wrong: ${error}`);
//         } log(response)
//     } catch (error) {
//         console.log("error");
//     }
// }
// ALTERNATIVE GET FUNCTIE ..................................................


// getResult()

// WERKT NOG NIET.............................................

// async function deleteOatmeal() {
//     try {
//         const response = await fetch(baseUrl, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         }); const result = await response.json();
//         console.log(result)

//     } catch {
//         console.log("error");
//     }
// }
//.............................................................

// document.getElementById("button1").addEventListener('click', deleteOatmeal)