// using Microsoft.AspNetCore.Mvc;
// using System.Collections.Generic;
// using BOL;
// using DAL;
//     // [ApiController]
//     // [Route("api/[controller]")]
//     public class LoginController : ControllerBase
//     {
    

//         [HttpPost]
//         public void Login([FromBody] User model)
//         {
//             List<User> plist=DBManager.getAllUsers();
//             var user = plist.Find(u => u.Uname== model.Uname && u.Pwd == model.Pwd);
//             Console.WriteLine(model.Uname+" "+model.Pwd);
//             if (user != null)
//             {
//                 // return Ok(new { message = "Login successful" });
//                 Console.WriteLine("Ok");
//             }

//             // return Unauthorized(new { message = "Invalid credentials" });
//             Console.WriteLine("Not ok");
//             // return View();
//         }
//     }








using Microsoft.AspNetCore.Mvc;
using BOL; // Import your User model
using DAL; // Import your DBManager class
using System;
[ApiController]
[Route("[controller]")]
public class LoginController : ControllerBase
{
    [HttpPost]
    public IActionResult Login([FromBody] User model)
    {
        Console.WriteLine(model.Uname +" "+model.Pwd);
        try
        {
            List<User> userList = DBManager.getAllUsers(); // Fetch users from the database
            
            var user = userList.Find(u => u.Uname == model.Uname && u.Pwd == model.Pwd);
            
            if (user != null)
            {
                return Ok(new { message = "Login successful" });
            }

            return Unauthorized(new { message = "Invalid credentials" });
        }
        catch (Exception ex)
        {
            // Log the exception
            Console.WriteLine("Exception occurred: " + ex.Message);
            return StatusCode(500); // Internal Server Error
        }
    }
}
