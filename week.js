function week (dayNumber){
    switch (dayNumber) {
        case 1:
            return "یک شنبه";
        case 2:
            return"دوشنبه"
        case 3:
            return"سه شنبه"
        case 4:
            return"چهار شنبه"
        case 5:
            return" پنج شنبه "
        case 6:
             return"جمعه"
        case 7:
            return"شنبه"
        default:
            return"عدد بین ۱تا ۷ نیست"
    }

}
console.log(week(3)); 
console.log(week(8));