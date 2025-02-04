using LittleBooksBackend.Models.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace LittleBooksBackend.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ShoppingCartController : ControllerBase
    {

        [HttpPost]
        public IActionResult SendCart([FromBody] CartDTO request)
        {

            if (string.IsNullOrWhiteSpace(request.Nombre) || string.IsNullOrWhiteSpace(request.Email))
            {
                return BadRequest("Nombre y Email son requeridos.");
            }

            if (request.Books == null || request.Books.Count == 0)
            {
                return BadRequest("Debe proporcionar al menos un libro.");
            }

            return StatusCode(202, "Petición procesada correctamente.");
        }
    }
}
