function to12hourtime(time) {
    let hours = parseInt(time.slice(0, 2));
    let minutes = time.slice(2, 4);

    let period = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12 || 12;

    return `${hours}:${minutes} ${period}`;
}