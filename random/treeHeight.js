const tree = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 1,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        value: 8,
        left: null,
        right: {
            value: 10,
            left: null,
            right: null
        }
    }
};

function treeHeight(node) {
    if (node === null) {
        console.log('Reached null → returning 0');
        return 0;
    }

    console.log('Visiting node with value:', node.value)

    const leftHeight = treeHeight(node.left);
    console.log(`Left height of node ${node.value} is: ${leftHeight}`);

    const rightHeight = treeHeight(node.right);
    console.log(`Right height of node ${node.value} is: ${rightHeight}`);

    const height = 1 + Math.max(leftHeight, rightHeight);
    console.log(`Total height at node ${node.value} is: ${height}\n`);

    return height;
}

console.log('FINAL TREE HEIGHT:', treeHeight(tree));