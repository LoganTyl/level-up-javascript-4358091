// Write your code here
class MyBook {
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

// Instructor Solution
// function Book(title, author, ISBN, numCopies){
//   this.title = title;
//   this.author = author;
//   this.ISBN = ISBN;
//   this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function() {
//   if(this.numCopies === 0) {
//     return "Out of stock";
//   } else if (this.numCopies < 10) {
//     return "Low stock";
//   }
//   return "In Stock";
// }

// Book.prototype.sell =  function(numCopiesSold = 1) {
//   this.numCopies -= numCopiesSold;
// }

// Book.prototype.restock = function(numCopiesStocked = 5) {
//   this.numCopies += numCopiesStocked;
// }

class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if(this.numCopies === 0) {
      return "Out of Stock";
    } else if (this.numCopies < 10) {
      return "Low stock"
    }

    return "In stock"
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

const SampleBook = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(SampleBook.getAvailability());
SampleBook.restock(12);
console.log(SampleBook.getAvailability());
SampleBook.sell(17)
console.log(SampleBook.getAvailability());