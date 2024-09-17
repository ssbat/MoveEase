using Microsoft.AspNetCore.Mvc;
using MoveEaseLibrary.Entities;
using MoveEaseLibrary.Repositories;

namespace MoveEase.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {


        private readonly ILogger<UserController> _logger;
        private readonly IUserRepository _userRepository;

        public UserController(ILogger<UserController> logger, IUserRepository userRepository)
        {
            _logger = logger;
            _userRepository = userRepository;
        }

        [HttpPost("create")]
        public IActionResult CreateUser([FromBody]User user)
        {
            var userVM = _userRepository.CreateUser(user);
            return Ok(userVM);
        }

    }
}
