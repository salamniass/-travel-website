class Person {
    constructor(name, favoritColor) {
        this.name = name ;
        this.favoritColor = favoritColor ;
    }
    greet() {
        console.log('hello my name is ' + this.name + ' and my favorite color is ' + this.favoritColor + ' .');
    }
}


export default Person ;