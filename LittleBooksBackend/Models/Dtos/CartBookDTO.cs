namespace LittleBooksBackend.Models.Dtos
{
    public class CartBookDTO
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public int Cant { get; set; }
    }
}
