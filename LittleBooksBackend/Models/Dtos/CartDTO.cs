namespace LittleBooksBackend.Models.Dtos
{
    public class CartDTO
    {
        public string? Nombre { get; set; }
        public string? Email { get; set; }
        public List<CartBookDTO>? Books { get; set; }
    }
}
