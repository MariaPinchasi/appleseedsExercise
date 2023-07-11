function native (language){
    switch(language){
        case 'Mandarin':
            return 'MOST number of native speakers!';
        case 'Spanish':
            return '2nd place in a number of native speakers';
        case 'English':
            return '3rd place';
        case 'Hindi':
            return 'Number 4';
        case 'Arabic':
            return '5th most spoken language';
        default:
            return 'Not in the top 5';
    }
}
console.log(native('Mandarin'));