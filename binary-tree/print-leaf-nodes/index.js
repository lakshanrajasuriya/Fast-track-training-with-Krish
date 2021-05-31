const BinaryTree = require('./BinaryTree');

const binaryTree = new BinaryTree();

const data = [35, 21, 56, 22, 15, 11, 2, 5, 1, 10];

data.forEach((data) => {
    binaryTree.insert(data);
});

const root = binaryTree.getRootNode();

binaryTree.printLeafNodes(root);