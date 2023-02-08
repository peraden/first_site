const spreadSheetId = "1D-F3u2PCdUv29epyaqbxRbqK0MaNEB563liD5rZSjdw";
const apiKey = "AIzaSyA5tI-XE5tDgiQBanwAo5brLvYAesnmhg0"
let spisakSemeringa = [];

noviCenovnik = async () => {
    try {
        const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadSheetId}/values/Sheet1!A3:F1000?key=${apiKey}`);
        const resArray = await res.json();
       
        resArray.values.forEach(semering => {

            if (semering.length !== 6) {
                return;
            }

            const semeringObj = {
                sifra: semering[0],
                tip: semering[1],
                osovina: semering[2],
                kuciste: semering[3],
                visina: semering[4],
                cena: semering[5]
            };

            spisakSemeringa.push(semeringObj);
        })

        console.log(spisakSemeringa);
    } catch(error) {
        console.log(error);
    }
}

function renderDataInTheTable(todos) {
    const mytable = document.getElementById("html-data-table");
    todos.forEach(spisakSemeringa => {
        let newRow = document.createElement("tr");
        Object.values(spisakSemeringa).forEach((value) => {
            let cell = document.createElement("td");
            cell.innerText = value;
            newRow.appendChild(cell);
        })
        mytable.appendChild(newRow);
    });
}

let newRow = document.createElement("tr");
Object.values(spisakSemeringa).forEach((value) => {
    let cell = document.createElement("td");
    cell.innerText = value;
    newRow.appendChild(cell);
})

window.onload = async () => {
    await noviCenovnik();
    renderDataInTheTable(spisakSemeringa);
 }