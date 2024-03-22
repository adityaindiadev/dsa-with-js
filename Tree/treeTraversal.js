const StaticTree = [{
    "value": "A",
    "children": [
        {
            "value": "B",
            "children": [
                {
                    "value": "D",
                    "children": []
                },
                {
                    "value": "E",
                    "children": [
                        {
                            "value": "EA",
                            "children": []
                        },
                        {
                            "value": "EB",
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "value": "C",
            "children": [
                {
                    "value": "F",
                    "children": [
                        {
                            "value": "FA",
                            "children": [
                                {
                                    "value": "FAA",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "value": "G",
                    "children": []
                }
            ]
        }
    ]
}];


function traverseUsingRecursion(tree) {

    // console.log(tree);

    tree.forEach((item) => {

        console.log(item.value);

        if (item?.children?.length != 0) {

            traverseUsingRecursion(item.children)

        }

    })



}

// traverseUsingRecursion(StaticTree)


function traverseUsingLoops(tree) {
    const stack = [...tree];
    
    while (stack.length > 0) {
        const node = stack.pop();
        console.log(node.value);
        
        if (node.children && node.children.length > 0) {
            // Since stack is LIFO, we need to push children in reverse order
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push(node.children[i]);
            }
        }
    }
}

traverseUsingLoops(StaticTree);