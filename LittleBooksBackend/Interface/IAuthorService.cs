using LittleBooksBackend.Models;

namespace LittleBooksBackend.Interface
{
    public interface IAuthorService
    {
        public Task<Author?> Get(int id);
        public Task<IEnumerable<Author>?> GetAll();
    }
}
