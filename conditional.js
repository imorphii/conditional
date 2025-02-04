function checkGrade(grade){
    if (grade>=90) {
        return "your grade is A"
    } else if(grade>=70) {
        return"your grade is B"
        
    } else if(grade>= 50){
        return"your grade is cc"

    }else{
        return"who are you "
    }
}
console.log(checkGrade(76))
/-----------------------/
function check(yourNumber) {
    if (yourNumber <= 0) {
        console.log('Your grade is not defined, dude!');
    } else if (yourNumber <= 50) {
        console.log('Your grade is C.');
    } else if (yourNumber <= 70) {
        console.log('Your grade is B.');
    } else if (yourNumber <= 99) {
        console.log('Your grade is A.');
    } else {
        console.log('Your grade is complete.');
    }
}

let yourNumber = parseInt(prompt("Enter your grade:"));
check(yourNumber);
