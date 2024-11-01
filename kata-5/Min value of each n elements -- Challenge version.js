function minValue(arr, n) {
    const result = [];
    const deque = [];

    for (let i = 0; i < arr.length; i++) {
        if (deque.length && deque[0] < i - n + 1) {
            deque.shift();
        }

        while (deque.length && arr[deque[deque.length - 1]] > arr[i]) {
            deque.pop();
        }

        deque.push(i);

        if (i >= n - 1) {
            result.push(arr[deque[0]]);
        }
    }

    return result;
}
