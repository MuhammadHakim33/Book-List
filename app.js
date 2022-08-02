import {Interface} from './Interface.js';
import {Store} from './Store.js';

// Event : Show Book List
document.addEventListener('DOMContentLoaded', Interface.showBooks());

// Event : Add Book
document.getElementById('btn-add').addEventListener('click', (e) => {
    e.preventDefault();

    const judul = document.getElementById('field-judul').value;
    const penulis = document.getElementById('field-penulis').value;
    const isbn = document.getElementById('field-isbn').value;

    // Validasi
    if(judul == "" || penulis == "" || isbn == "")
    {
        Interface.notifikasi('Isi Semua Data', 'warning');
    } 
    else 
    {
        const book = {
            'judul' : judul,
            'penulis' : penulis,
            'isbn' : isbn
        }

        Store.add(book);

        Interface.addBooksToTable(book);
    
        Interface.clearFields();

        Interface.notifikasi('Data Berhasil Ditambahkan', 'success');
    }
    
});

// Event : Remove Book
document.querySelectorAll('.btn-delete').forEach((btn) => {
    btn.addEventListener('click', (e) => {

        Interface.deleteBookFromTable(e.target);
        
        Store.delete(e.target.parentElement.previousElementSibling.textContent);

        Interface.notifikasi('Data Berhasil Dihapus', 'danger');
    })
})