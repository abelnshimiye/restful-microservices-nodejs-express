var name = process.argv[2]
var age = parseInt(process.argv[3])
var basicSalary = parseFloat(process.argv[4])

if (age <= 0) {
    console.log("Please type the valid age")
} else if (basicSalary <= 0) {
    console.log("Invalid basic Salary, enter valid Salary")
} else {
    const hra = (50 * basicSalary) / 100
    const specialAlloance = (30 * basicSalary) / 100
    const pf = (12 * basicSalary) / 100

    let grossSalary = (basicSalary + hra + specialAlloance) - pf

    let annualgrossSallary = 12 * grossSalary

    console.log("the annual gross salary of ", name, " is ", annualgrossSallary)


}


