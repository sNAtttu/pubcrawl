using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PubCrawlAPI.Models;
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

        [HttpPost]
        public JsonResult Post([FromBody]Team team)
        {
            try
            {
                if (!string.IsNullOrWhiteSpace(team.Name))
                {
                    var existingTeam = _context.Teams.FirstOrDefault(t => t.Name == team.Name);
                    if(existingTeam == null)
                    {
                        _context.Teams.Add(team);
                        _context.SaveChanges();
                        return new JsonResult(team);
                    }
                    else
                    {
                        return new JsonResult(new CustomStatus
                        {
                            StatusCode = CustomStatusCode.TeamExists,
                            StatusMessage = "Team already exists"
                        });
                    }
                }
                return new JsonResult(new CustomStatus
                {
                    StatusCode = CustomStatusCode.NameIsNull,
                    StatusMessage = "Team name is null"
                });
            }
            catch(Exception ex)
            {
                return new JsonResult(new CustomStatus
                {
                    StatusCode = CustomStatusCode.TeamCreationFail,
                    StatusMessage = ex.Message
                });
            }
        }

    }
}
