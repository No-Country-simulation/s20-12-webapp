using LittleBooksBackend.Interface;
using Microsoft.AspNetCore.Mvc;

namespace LittleBooksBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthorsController : ControllerBase
{
    private readonly IAuthorService _authorService;

    public AuthorsController(IAuthorService authorService)
    {
        _authorService = authorService;
    }

    [HttpGet("Author/{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        try
        {
            return Ok(await _authorService.Get(id));
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
            return Problem(statusCode: StatusCodes.Status500InternalServerError);
        }
    }
    [HttpGet("Authors")]
    public async Task<IActionResult> GetAllAuthors()
    {
        try
        {
            return Ok(await _authorService.GetAll());
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
            return Problem(statusCode: StatusCodes.Status500InternalServerError);
        }
    }
}
