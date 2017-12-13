using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using PubCrawlAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PubCrawlAPI.Controllers
{
    [Route("api/participants")]
    public class ParticipantsController : Controller
    {
        private readonly PubCrawlDbContext _context;

        public ParticipantsController(PubCrawlDbContext context)
        {
            _context = context;
        }
        // POST api/values
        [HttpPost]
        public JsonResult Post([FromBody]Participant participant)
        {
            if(participant != null)
            {
                Random rng = new Random();
                var teamsWithRoom = _context.Teams.Where(t => t.Participants.Count < 6).ToList();
                var participantsTeam = teamsWithRoom[rng.Next(teamsWithRoom.Count)];
                participant.Team = participantsTeam;
                _context.Add(participant);
                _context.SaveChanges();
                return new JsonResult(new ParticipantTeam
                {
                    Name = participant.Name,
                    TeamName = participant.Team.Name
                });
            }
            else
            {
                return new JsonResult("No participant");
            }
        }
        // api/participants/?id=1
        [HttpDelete]
        public void Delete(int id)
        {
            var participant = _context.Participants.FirstOrDefault(p => p.Id == id);
            if(participant != null)
            {
                _context.Participants.Remove(participant);
                _context.SaveChanges();
            }
        }
        
        [HttpGet]
        public JsonResult Get()
        {
            var participants = _context.Participants.ToList();
            return new JsonResult(participants);
        }
    }
}
