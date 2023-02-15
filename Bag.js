class Bag {
    static maxweight = 34;
    constructor(weight) {
        if(!weight){
            throw new Error('bag needs weight')
        } 
        if(weight>Bag.maxweight){
            throw new Error('exceeded maximum weight')
        }
        this.weight = weight
    }
}

module.exports = Bag
