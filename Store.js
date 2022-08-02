// Store Class : Handle Storage
export class Store
{
    // Ambil data dari local storage
    static get()
    {
        let books;
        
        if(window.localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(window.localStorage.getItem('books'));
        }

        return books;
    }

    // Simpan data ke local storage
    static add(book)
    {
        const books = Store.get();
        books.push(book);
        window.localStorage.setItem('books', JSON.stringify(books));
    }

    // Hapus data ke local storage
    static delete(isbn)
    {
        const books = Store.get();

        books.forEach((book, index) => {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        })

        window.localStorage.setItem('books', JSON.stringify(books));
    }
}