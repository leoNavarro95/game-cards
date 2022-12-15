    const shuffle = (array) => {
        let currentIndex = array.length,  randomIndex;
    
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
    
        return array;
    }

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max + 1); //it can't be zero
    }

    const getRndNumArr = ( size, max ) => {
        var arr = []
        while (size > 0) {
            arr.push(getRandomInt(max))
            size--
        }
        return arr
    }

    const makeCouples = (arr) => {
        arr.forEach(element => {
            arr.push(element)
        })
        return arr
    }

    export {makeCouples, getRndNumArr, shuffle}