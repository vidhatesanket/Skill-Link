using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using BOL;
using DAL;
using System.ComponentModel.DataAnnotations;
using Org.BouncyCastle.Asn1.Iana;
namespace WebAPI.Controllers;
[ApiController]
[Route("api/[controller]")]

public class LoginController : Controller
{
    private readonly ILogger<LoginController> _logger;

    public LoginController(ILogger<LoginController> logger)
    {
        _logger = logger;
    }

        [HttpPost]
        public IActionResult userlogin([FromBody]User model){
            List<User> plist = DBManager.getAllUsers();
            Console.WriteLine("HII");
            foreach (User u in plist){
                if (model.Uname == u.Uname && model.Pwd == u.Pwd){
                    return Ok(new { message = "Login successful" });
                }
            }
            return Unauthorized(new { message = "Invalid credentials" });
        }

}