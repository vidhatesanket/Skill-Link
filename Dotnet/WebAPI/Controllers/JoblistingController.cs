using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using BOL;
using DAL;
using System.ComponentModel.DataAnnotations;
using Org.BouncyCastle.Asn1.Iana;
namespace WebAPI.Controllers;
[ApiController]
[Route("[controller]")]

public class JoblistingController : Controller
{
    private readonly ILogger<JoblistingController> _logger;

    public JoblistingController(ILogger<JoblistingController> logger)
    {
        _logger = logger;
    }

        [HttpGet]
        public IEnumerable<JobListing> Joblisting(){
            List<JobListing> joblist = DBManager.jobList();
            return joblist;
        }

}