using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace dotnet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SampleDataController : ControllerBase
    {
        private static readonly string[] names = new[]
        {
            "Zach Demo", "Peter Next", "Last One"
        };

        private readonly ILogger<SampleDataController> _logger;

        public SampleDataController(ILogger<SampleDataController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<SampleData> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new SampleData
            {
                Date = DateTime.Now.AddDays(index),
                uid = rng.Next(-20, 55),
                fullName = names[rng.Next(names.Length)]
            })
            .ToArray();
        }
    }
}
