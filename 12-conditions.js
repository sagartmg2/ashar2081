let student = {
    name: "ram",
    hasPaidStatus: false,
    hasScholarship: false,
    hasMetAttendence: true,
}

/* 
    if (student.hasPaidStatus) {
        console.log(`${student.name} can give exam`)
    } else if (student.hasScholarship) {
        console.log(`${student.name} can give exam`)
    } else if (student.hasMetAttendence) {
        console.log(`${student.name} can give exam`)
    } else {
        console.log(`${student.name} can not give exam`)
    } 
*/

student = {
    name: "ram",
    hasPaidStatus: true,
    hasScholarship: false,
    hasMetAttendence: false,
}

// if (student.hasMetAttendence) {
//     if (student.hasPaidStatus) {
//         console.log(`${student.name} can give exam`)
//     } else if (student.hasScholarship) {
//         console.log(`${student.name} can give exam`)
//     } else {
//         console.log(`${student.name} can not give exam`)
//     }
// } else {
//     console.log(`${student.name} can not give exam`)
// }

if ((student.hasPaidStatus || student.hasScholarship) && student.hasMetAttendence) {
    console.log(`${student.name} can give exam`)
} else {
    console.log(`${student.name} can not give exam`)
}

/* OR Opeartors */
/* AND Opeartors */
/* NOT Opeartors */
/* ternary Opeartors */
