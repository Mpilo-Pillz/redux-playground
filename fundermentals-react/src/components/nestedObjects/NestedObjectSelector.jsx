import { useState } from "react";

const DATA_OBJECT = {
    english: {
        date: "Date",
        keys: "Keys",
        ready: "Ready",
        orange: "orange"
    },
    french: {
        date: "Rendez-vouz",
        keys: "Cles",
        ready: "Pret",
        orange: "narange"
    },
    spanish: {
        date: "Rendez-vouz",
        keys: "Cles",
        ready: "Pret",
        orange: "orange"
    }
}

const SelectTranslation = () => {
    const [language, setLanguage] = useState({
        date: "Date",
        keys: "Keys",
        ready: "Ready",
        orange: "orange"
    })
    return (
        <>
        <select name="" id="" onChange={(e) => setLanguage(DATA_OBJECT[e.target.value])}>
        {Object.keys(DATA_OBJECT).map((word, i) => {
            console.log("woorrdd-->",word);
            return (
                <option key={i} value={word}>{word}</option>
            )
        })}
        </select>
        {language.date}
        </>
    )
}

export default SelectTranslation;