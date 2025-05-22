using AngularApp.Models;

namespace AngularApp.Services
{
    public class BookService
    {
        private static List<Book> _books = new();
        private static int _nextId = 1;

        public List<Book> GetAll() => _books;

        public Book? GetById(int id) => _books.FirstOrDefault(b => b.Id == id);

        public void Add(Book book)
        {
            book.Id = _nextId++;
            _books.Add(book);
        }

        public void Update(Book updatedBook)
        {
            var index = _books.FindIndex(b => b.Id == updatedBook.Id);
            if (index != -1)
            {
                _books[index] = updatedBook;
            }
        }

        public void Delete(int id)
        {
            var book = _books.FirstOrDefault(b => b.Id == id);
            if (book != null)
            {
                _books.Remove(book);
            }
        }
    }
}

