function Bird() {
  let weight = 15;
  this.getWeight = () => weight;
}

let ducky = new Bird();
ducky.getWeight();
