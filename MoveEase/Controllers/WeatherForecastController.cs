using Library.Entities;
using Microsoft.AspNetCore.Mvc;

namespace MoveEase.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {


        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }

        [HttpPost("create")]
        public IActionResult CreateUser([FromBody]User user)
        {

            return Ok(user);
        }

    }
}
