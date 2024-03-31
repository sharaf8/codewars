function newAvg(arr, navg) {
    let currentSum = arr.reduce((acc, curr) => acc + curr, 0);
    let currentAvg = currentSum / arr.length;

    let requiredSum = navg * (arr.length + 1);
    let requiredDonation = requiredSum - currentSum;

    if (requiredDonation <= 0) {
        throw new Error("Expected New Average is too low");
    }

    return Math.ceil(requiredDonation);
}