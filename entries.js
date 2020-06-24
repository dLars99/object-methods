// Lightning exercises for Object.entries

const dinnerEntries = () => {
    const dinuguan = {
        name: "Dinuguan",
        origin: "Filipino",
        mainIngredient: "pork",
        otherIngredients: ["pork blood", "onions"],
        sideDish: "rice"
    }

    const answerGoesHere = document.getElementById("dinnerEntries")
    for (const entry of Object.entries(dinuguan)) {
        answerGoesHere.innerHTML += `<div><strong>${entry[0]}:</strong> ${entry[1]}</div>`
    }
    
}

export default dinnerEntries