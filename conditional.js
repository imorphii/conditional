function checkGrade(grade){
    if (grade>=90) {
        return "your grade is A"
    } else if(grade>=70) {
        return"your grade is B"
        
    } else if(grade>= 50){
        return"your grade is c"

    }else{
        return"who are you "
    }
}
console.log(checkGrade(76))