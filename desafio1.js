class User {
    constructor(name, secondName, books, pets) {
        this.name = name;
        this.secondName = secondName;
        this.books = books;
        this.pets = pets;
    }

    getFullName() {
        return `${this.name} ${this.secondName}`
    }

    addPets(pet) {
        this.pets.push(pet);
    }

    petCount() {
        return this.pets.length;
    }

    addBook(bookName, author) {
        this.books.push({ BookName: bookName, Author: author })
    }

    getBookName() {
        let arr = [];
        for(let i = 0; i < this.books.length; i++) {
            arr.push(this.books[i].BookName);
        } return arr;
    }
}

const user1 = new User('Hernan', 'Kra', [
    { BookName: 'It', Author: 'Stephen King' },
    { BookName: 'Cuento de Hadas', Author: 'Stephen King' }],
    ['India', 'Blanca']);

console.log(user1.getFullName());
user1.addPets('Pancha');
console.log(user1.petCount());
console.log(user1.getBookName());




