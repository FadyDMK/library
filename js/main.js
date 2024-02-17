const books = document.querySelector('.main');



const myLibrary = [];
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
        readBtn.textContent = 'Read';
        readBtn.classList.add('readbtn');
        readBtn.addEventListener('click', () => {
            this.read=!this.read;
            book.setAttribute('data-read', this.read);

        })





        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Delete';

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

let test = new Book('berserk', 'Miura', 130, true);

test.display();
test.display();
test.display();



