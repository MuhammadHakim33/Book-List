import {Store} from './Store.js';

// Interface Class : Handle Interface Task
export class Interface 
{
    // Menampilkan tabel buku
    static showBooks()
    {
        const books = Store.get();
        books.forEach((book) => Interface.addBooksToTable(book));
    }

    // Memasukan buku ke baris baru pada tabel
    static addBooksToTable(book){
        const tbody = document.querySelector('tbody');
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.judul}</td>
            <td>${book.penulis}</td>
            <td>${book.isbn}</td>
            <td>
                <button class="btn btn-outline-warning btn-sm btn-delete" role="button">Hapus</button>
            </td>
        `;

        tbody.appendChild(row);
    }

    // Menhapus baris buku
    static deleteBookFromTable(book)
    {
        book.parentElement.parentElement.remove();
    }

    // Membersihkan field input
    static clearFields()
    {
        document.getElementById('field-judul').value = '';
        document.getElementById('field-penulis').value = '';
        document.getElementById('field-isbn').value = '';
    }

    // Notifikasi
    static notifikasi(text, situasi)
    {
        const containerForm = document.getElementById('container-form');
        const notifikasi = document.createElement('div');
        notifikasi.classList.add('alert', `alert-${situasi}`);
        notifikasi.textContent = text;

        containerForm.insertBefore(notifikasi, containerForm.lastElementChild);

        setTimeout(() => document.querySelector('.alert').remove(), 1500);
    }
}