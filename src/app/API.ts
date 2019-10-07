export const PRODUCTS = [
  {
    id: "GR1", 
    name: "Green tea", 
    price: 3.11, 
    counter: 0, 
    calcTotal() {
      if (this.counter % 2 === 0) {
        return ((this.price * this.counter) / 2);
      }
      else if (this.counter === 1) {
        return this.price;
      }
      else {
        return (this.price * ((this.counter + 1) / 2 ));
      }
    }
  },
  {
    id: "SR1", 
    name: "Strawberries", 
    price: 5.00, 
    counter: 0, 
    calcTotal() {
      if (this.counter >= 3) {
        return 4.50 * this.counter;
      }
      else {
        return (this.price * this.counter);
      }
    }
  }, 
  {
    id: "CF1", 
    name: "Coffee", 
    price: 11.23, 
    counter: 0, 
    calcTotal() {
      if (this.counter >= 3) {
        return (11.23 / 3 * 2) * this.counter;
      }
      else {
        return (this.price * this.counter);
      }
    }
  }
]