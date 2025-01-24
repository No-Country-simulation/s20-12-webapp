using LittleBooksBackend.Interface;
using LittleBooksBackend.Models;

namespace LittleBooksBackend.Service
{
    public class AuthorService : IAuthorService
    {
        private readonly IAuthorRepository repository;

        public AuthorService(IAuthorRepository repository)
        {
            this.repository = repository;
        }

        public async Task<Author?> Get(int id)
        {
            var response = await repository.GetAuthor(id);
            if (response.IsSuccess)
            {
                return response.Value;
            }
            else
            {
                Console.WriteLine(response.ErrorMessage);
                return null;
            }

        }

        public async Task<IEnumerable<Author>?> GetAll()
        {
            var response = await repository.GetAllAuthor();
            if (response.IsSuccess)
            {
                return response.Value;
            }
            else
            {
                Console.WriteLine(response.ErrorMessage);
                return null;
            }

        }


    }
}
