function save(files, capacity) {
    let totalSize = 0;
    let filesSaved = 0;
    for (let fileSize of files) {
        if (totalSize + fileSize <= capacity) {
            totalSize += fileSize;
            filesSaved++;
        } else {
            break;
        }
    }
    return filesSaved;
}
