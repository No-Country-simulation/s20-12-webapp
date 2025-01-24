namespace LittleBooksBackend.Models.Dtos;

public class IdValueDto
{
    public int Id { get; set; }
    public string Value { get; set; } = string.Empty;

    public IdValueDto(int id, string value)
    {
        Id = id;
        Value = value;
    }
}