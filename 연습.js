function Card(x,y){
    this.suit = x;
    this.rank = y;
}

var card1 = new Card("하트", "a");

console.log(card1.suit);

function Circle(center, radius){
    this.center = center;
    this.radius = radius;
    this.area = function(x) {
        return this.radius * this.radius * x;
    };
}

var c = new Circle(3,4);
console.log(c.area(2));

