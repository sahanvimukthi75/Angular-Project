using AngularApp.Models;
using AngularApp.Services;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly BookService _bookService;

        public BooksController(BookService bookService)
        {
            _bookService = bookService;
        }

        // GET: api/books
        [HttpGet]
        public ActionResult<List<Book>> GetAll() => _bookService.GetAll();

        // GET: api/books/
        [HttpGet("{id}")]
        public ActionResult<Book> Get(int id)
        {
            var book = _bookService.GetById(id);
            if (book == null) return NotFound();
            return book;
        }

        // POST: api/books
        [HttpPost]
        public IActionResult Create(Book book)
        {
            _bookService.Add(book);
            return CreatedAtAction(nameof(Get), new { id = book.Id }, book);
        }

        // PUT: api/books/
        [HttpPut("{id}")]
        public IActionResult Update(int id, Book book)
        {
            if (id != book.Id) return BadRequest();

            var existing = _bookService.GetById(id);
            if (existing == null) return NotFound();

            _bookService.Update(book);
            return NoContent();
        }

        // DELETE: api/books/
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var existing = _bookService.GetById(id);
            if (existing == null) return NotFound();

            _bookService.Delete(id);
            return NoContent();
        }
    }
}
