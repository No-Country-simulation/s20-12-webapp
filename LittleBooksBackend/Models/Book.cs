namespace LittleBooksBackend.Models;

public class Book 
{
    public int Id { get; set; }
    public string Title {get; set; } = string.Empty;
    public int Year { get; set; }
    public string Description { get; set; } = string.Empty;
    public string ImageUrl { get; set; } = string.Empty;
    public ICollection<Author> Authors {get; set;} = [];
    public ICollection<Genre> Genres {get; set; } = [];
}