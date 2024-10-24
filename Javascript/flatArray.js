function flatArray(val) {

    const resArr = []

    function initiate(arr) {

        if (Array.isArray(arr)) {
            if (arr.length != 0) {
                arr.forEach((item) => {
                    initiate(item)
                })
                return
            }
            return
        }
        resArr.push(arr)
    }

    initiate(val)
    return resArr
}