using Microsoft.AspNetCore.Mvc;
using BOL; // Import your User model
using DAL; // Import your DBManager class
using System;
[ApiController]
[Route("[controller]")]
public class LoginController : ControllerBase
{
    [HttpPost]
    public IActionResult Login([FromBody
    ] User model)
    {
        Console.WriteLine(model.UserName +" "+model.Password);
        try
        {
            List<User> userList = DBManager.getAllUsers(); // Fetch users from the database
            
            var user = userList.Find(u => u.UserName == model.UserName && u.Password == model.Password);
            
            if (user != null)
            {
                return Ok(new { message = "Login successful" });
            }

            return Unauthorized(new { message = "Invalid credentials" });
        }
        catch (Exception ex)
        {
            Console.WriteLine("Exception occurred: " + ex.Message);
            return StatusCode(500); // Internal Server Error
        }
    }
}
