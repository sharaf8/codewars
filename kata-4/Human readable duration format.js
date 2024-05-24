function formatDuration(seconds) {
    if (seconds === 0) return "now";

    let years = Math.floor(seconds / (365 * 24 * 3600));
    let days = Math.floor((seconds % (365 * 24 * 3600)) / (24 * 3600));
    let hours = Math.floor(((seconds % (365 * 24 * 3600)) % (24 * 3600)) / 3600);
    let minutes = Math.floor((((seconds % (365 * 24 * 3600)) % (24 * 3600)) % 3600) / 60);
    let secs = Math.floor((((seconds % (365 * 24 * 3600)) % (24 * 3600)) % 3600) % 60);

    let parts = [];
    if (years > 0) parts.push(years + " year" + (years > 1 ? "s" : ""));
    if (days > 0) parts.push(days + " day" + (days > 1 ? "s" : ""));
    if (hours > 0) parts.push(hours + " hour" + (hours > 1 ? "s" : ""));
    if (minutes > 0) parts.push(minutes + " minute" + (minutes > 1 ? "s" : ""));
    if (secs > 0) parts.push(secs + " second" + (secs > 1 ? "s" : ""));

    if (parts.length === 1) {
        return parts[0];
    } else {
        let last = parts.pop();
        return parts.join(', ') + ' and ' + last;
    }
}
