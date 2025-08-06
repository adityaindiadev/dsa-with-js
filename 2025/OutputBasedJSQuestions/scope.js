for (var index = 1; index <= 3; index++) {

    setTimeout(((val) => {

        return () => {
            console.log(val);
            console.log(index);
        }
    })(index), 100);


}