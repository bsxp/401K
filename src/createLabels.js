export default function({currentAge, retirementAge}) {

    let arr = []
    for (let i = 0; i < retirementAge-currentAge; i++) {
        arr.push(currentAge + i)
    }

    return arr

}