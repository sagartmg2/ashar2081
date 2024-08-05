let willRain = false
let hasProbabilty = false // raiing
let scorchingSun = true

/* 
    if (willRain) {
        console.log("take umbrealla")
    } else {
        if (hasProbabilty) {
            console.log("you might need ")
        } else {
            console.log("no need to take umbrealla")
        }
    } 
    
*/

if (willRain) {
    console.log("take umbrealla")
} else if (hasProbabilty) {
    console.log("you might need ")
} else if (scorchingSun) {
    console.log("you might need ")
} else {
    console.log("no need to take umbrealla")
}



/* nested if else  */
let users = [
    {
        name: "ram",
        hasPaidStatus: false,
        hasScholarship: true,
        hasMetAttendence:true,
    },
    {
        name: "hari",
        hasPaidStatus: true,
        hasScholarship: false,
        hasMetAttendence:false,
    },
    {
        name: "sita",
        hasPaidStatus: false,
        hasScholarship: false,
        hasMetAttendence:true,
    },
]

/* 
    Output: 

    Ram can give exam
    Hari cannnot give exam
    Sita cannot give exam
*/


let student1 = {
    name: "ram",
    hasPaidStatus: false,
    hasScholarship: false
}

// if(student.hasPaidStatus){
//     console.log(`${student.name} can give exam`);
// }else if (student.hasScholarship){
//     console.log(`${student.name} can give exam`);
// }else{
//     console.log(`${student.name} can not give exam`);
// }


let student2 =  {
    name: "hari",
    hasPaidStatus: true,
    hasScholarship: false,
    hasMetAttendence:false,
}

// if(student2.hasPaidStatus){
//     console.log(`${student2.name} can give exam`);
// }else if (student2.hasScholarship){
//     console.log(`${student2.name} can give exam`);
// }else{
//     console.log(`${student2.name} can not give exam`);
// }


function checkEligibilityOld(student){
    if(student.hasPaidStatus){
        console.log(`${student.name} can give exam`);
    }else if (student.hasScholarship){
        console.log(`${student.name} can give exam`);
    }else{
        console.log(`${student.name} can not give exam`);
    }
}

function checkEligibility(student){
    if(student.hasPaidStatus || student.hasScholarship){
        console.log(`${student.name} can give exam`);
    }else{
        console.log(`${student.name} can not give exam`);
    }
}

// checkEligibility(student1)
// checkEligibility(student2)

checkEligibility(users[0])
checkEligibility(users[1])
checkEligibility(users[2])
