using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PubCrawlAPI.Controllers
{
    [Route("api/teams")]
    public class TeamsController : Controller
    {
        private readonly PubCrawlDbContext _context;

        public TeamsController(PubCrawlDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public JsonResult Get()
        {
            var teamsWithParticipants = _context.Teams.Include(t => t.Participants).ToList();
            return new JsonResult(teamsWithParticipants);
        }
    }
}
