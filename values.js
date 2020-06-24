// Answers to first set of lightning exercises regarding Object.values()

const lightningValues = () => {
    const dateVisited = "visitDate"
    const owed = "amountBilled"
    const patient = "patientName"
    
    // Exercise 1: Create an object
    const doctorBill = {
        officeName: "Dover Proctology",
        streetAddress: "1330 Rear End",
        doctorName: "Ben Dover",
        patientName: "Teddy Rumpskin",
        visitDate: "2019-04-20",
        amountBilled: 1439.27,
        dueDate: "2020-07-04"
    }

    // Exercise 2: add variables obove the object then log three values to the console
    console.log(`Answers for exercise 2: 
    Date visited: ${doctorBill[dateVisited]}
    Amount owed: ${doctorBill[owed]}
    Patient name: ${doctorBill[patient]}`)

    // Exercise 3: Display all property values to the console
    for (const value of Object.values(doctorBill)) {
        console.log(value)
    }

    // Object.keys lightning exercise 1 + 2
    const answersGoHere = document.getElementById("billKeys")
    for (const key of Object.keys(doctorBill)) {
        console.log(key)
        answersGoHere.innerHTML += `<span> ${key} </span>`
    }
    
}

export default lightningValues
