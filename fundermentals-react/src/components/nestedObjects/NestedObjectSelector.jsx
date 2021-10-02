const DATA_OBJECT = {
    english: {
        date: "Date",
        keys: "Keys",
        ready: "Ready"
    },
    french: {
        date: "Rendez-vouz",
        keys: "Cles",
        ready: "Pret"
    }
}

const SelectTranslation = () => {
    return (
        <select name="" id="">
        {Object.keys(DATA_OBJECT).map((word, i) => {
            console.log("woorrdd-->",word);
            return (
                <option key={i} value={word}>{word}</option>
            )
        })}
        </select>
    )
}

export default SelectTranslation;