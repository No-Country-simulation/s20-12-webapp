namespace LittleBooksBackend.Models.Dtos;

public class BookDto 
{
    public int Id { get; set; }
    public string Title {get; set; } = string.Empty;
    public int Year { get; set; }
    public string Description { get; set; } = string.Empty;
    public string ImageUrl { get; set; } = string.Empty;
    public ICollection<IdValueDto> Authors {get; set; } = [];
    public ICollection<IdValueDto> Genres {get; set; } = [];

    public BookDto(Book book)
    {
        Id = book.Id;
        Title = book.Title;
        Year = book.Year;
        Description = book.Description;
        ImageUrl = book.ImageUrl;
        Authors = [.. book.Authors.Select(author => new IdValueDto(author.Id, author.Name))];
        Genres = [.. book.Genres.Select(genre => new IdValueDto(genre.Id, genre.Name))];
    }
}