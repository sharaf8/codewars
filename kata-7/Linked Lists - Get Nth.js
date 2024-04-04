class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function getNth(node, index) {
    if (!node || index < 0) {
        throw new Error("Invalid arguments");
    }

    if (index === 0) {
        return node;
    }

    return getNth(node.next, index - 1);
}
