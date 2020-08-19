export default function({contribPercent, annualSalary, annualRaise, currentAge, retirementAge, currentBalance, annualRateOfReturn, employerMatch, employerMatchCap}) {

    let valArray = []

    for (let i = 0; i < retirementAge - currentAge; i++) {

        let effectiveRaiseForYear = (1 + (annualRaise/100)) ** i

        let employeeContribition = (annualSalary * effectiveRaiseForYear) * (contribPercent/100)


        if (employeeContribition > 19500) {
            employeeContribition = 19500
        }

        let startingBalance = i === 0 ? currentBalance : valArray[i-1]

        let endOfYearTotalBeforeInterest = startingBalance + employeeContribition
        let endOfYearTotalAfterInterest = endOfYearTotalBeforeInterest * (1 + (annualRateOfReturn/100))


        valArray.push(endOfYearTotalAfterInterest)

    }

    return valArray

}