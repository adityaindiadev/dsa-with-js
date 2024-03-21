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


function traverse(tree) {

    // console.log(tree);

    tree.forEach((item) => {

        console.log(item.value);

        if (item?.children?.length != 0) {

            traverse(item.children)

        }

    })



}

traverse(StaticTree)