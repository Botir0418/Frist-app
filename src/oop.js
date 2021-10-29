// let car1={
//     brand:"Mers",
//     color:"qora",
//     model:221
// }

// let car2={
//     brand:"BMW",
//     color:"kok",
//     model:'X7'
// }

// let car3={
//     brand:"gm",
//     color:"kok",
//     model:'nexia'
// }

// function Car(brand,color,model) {
//     this.brand=brand;
//     this.color=color;
//     this.model=model
// }

// let car4 = new Car('bmw','oq','x5')

// console.log(car4.brand);
// console.log(car4)

class Car {
    constructor(brand,color,model){
        this.brand=brand;
        this.color=color;
        this._model=model
    }
    start(){
        console.log('Boshlash')
    }

    static toString(){
        console.log('toString ishladi')
    }

}

let car1 = new Car('bmw','oq','x5')

car1._model=543;

class Texnika extends Car{
    constructor(model){
        this._model=model
    }

    start(){
        super.start()
        console.log('Texnika boshlash')
    }

    get model(){
        return this._model;
    }
    set model(Model){
        this._model = new Model
    }


}
console.log(car1.start())
