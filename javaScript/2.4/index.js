function dates(){
    const currentDay=new Date();
    const dayArr=['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday', 'Friday','Saturday'];
    const monthArr=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `Today is ${dayArr[currentDay.getDay()]} the ${currentDay.getDate()} of ${monthArr[currentDay.getMonth()]} ${currentDay.getFullYear()}`;
}
console.log(dates());