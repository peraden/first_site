import { Semering } from '../js/semering.js';

const spreadSheetId = "1D-F3u2PCdUv29epyaqbxRbqK0MaNEB563liD5rZSjdw";
const apiKey = "AIzaSyA5tI-XE5tDgiQBanwAo5brLvYAesnmhg0"
let spisakSemeringa = [];

const noviCenovnik = async () => {
    try {
        const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadSheetId}/values/Sheet1!A3:F1000?key=${apiKey}`);
        const resArray = await res.json();

        spisakSemeringa = resArray.values.filter(semeringData => semeringData.length === 6).map(semeringData => new Semering(...semeringData))

        console.log(spisakSemeringa);
    } catch(error) {
        console.log(error);
    }
}

window.onload = () => {
    noviCenovnik();
}