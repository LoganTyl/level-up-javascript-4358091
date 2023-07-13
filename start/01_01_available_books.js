// Write your code here
class Book {
  constructor(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }

  get getAvailability() {
    if(this.numCopies === 0) {
      return "Out of Stock"
    }
    else if (this.numCopies < 10) {
      return "Low Stock"
    }
    else {
      return "In Stock"
    }
  }

  set sell(numSold=1) {
    if(this.numCopies - numSold < 0) {
      console.log("Not enough copies to sell")
      return;
    }
    this.numCopies -= numSold;
  }

  set restock(numCopies=5) {
    this.numCopies += numCopies;
  }
}