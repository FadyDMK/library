const books = document.querySelector('.main');
const add = document.querySelector('#add')
const addMenu = document.querySelector('#addMenu')

add.addEventListener('click', () => {
    addMenu.showModal();
});


class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;

    }

    display() {
        const book = document.createElement('div');
        book.classList.add('book');
        book.setAttribute('data-read', this.read);

        const text = document.createElement('div');
        text.classList.add('text');


        const titleDisplay = document.createElement('div')
        titleDisplay.classList.add('title');
        titleDisplay.textContent = `Title: ${this.title}`;

        const authorDisplay = document.createElement('div')
        authorDisplay.classList.add('author');
        authorDisplay.textContent = `Author: ${this.author}`;

        const pagesDisplay = document.createElement('div')
        pagesDisplay.classList.add('pages');
        pagesDisplay.textContent = `Number of Pages: ${this.pages}`;



        const buttons = document.createElement('div');
        buttons.classList.add('buttons');

        const readBtn = document.createElement('button');
        if (this.read) { readBtn.textContent = 'Read'; }
        else { readBtn.textContent = 'Not Read'; }
        readBtn.classList.add('readbtn');
        readBtn.addEventListener('click', () => {
            this.read = !this.read;
            book.setAttribute('data-read', this.read);
            if (this.read) { readBtn.textContent = 'Read'; }
            else { readBtn.textContent = 'Not Read'; }


        })



        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Delete';
        removeBtn.addEventListener('click', () => {
            book.remove();
        })

        text.appendChild(titleDisplay);
        text.appendChild(authorDisplay);
        text.appendChild(pagesDisplay);
        book.appendChild(text);
        book.appendChild(buttons);

        buttons.appendChild(readBtn);
        buttons.appendChild(removeBtn);




        books.appendChild(book);



    }

}








let test = new Book('berserk', 'Miura', 130, false);
let test2 = new Book('1984', 'George Orwell', 328, false);
let test3 = new Book('Red Storm Rising', 'Tom Clancy', 400, true);

test.display();
test2.display();
test3.display();



const submit = document.querySelector('#submit');
submit.addEventListener('click', () => {
    const title = document.querySelector('#newTitle').value;
    const author = document.querySelector('#newAuthor').value;
    const pages = document.querySelector('#newPages').value;
    const read = document.querySelector('#newRead').checked;
    let newBook = new Book(title, author, pages, read)
    newBook.display();

})



//TODO: add connection to a server using mongoose mongodb and express js
