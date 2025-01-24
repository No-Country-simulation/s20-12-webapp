using LittleBooksBackend.Models.Dtos;

namespace LittleBooksBackend.Interface;

public interface IBookService
{
    Task<IEnumerable<BookDto>> FindByGenre(string genre);
    Task<IEnumerable<BookDto>> FindByTitleOrAuthor(string term);
};