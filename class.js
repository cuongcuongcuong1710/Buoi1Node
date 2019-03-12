class car{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    showcar(){
        console.log("height",this.height);
        console.log("width",this.width);
    }
}

const myClass = new car(2,4);
myClass.showcar();
//myClass.buy();

class Kia extends car{
    buy(){
        console.log("buy");
    }
}

const kiaCar = new Kia(3,5);
kiaCar.showcar();
kiaCar.buy();