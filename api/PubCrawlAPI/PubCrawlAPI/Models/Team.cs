using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PubCrawlAPI.Models
{
    public class Team
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Participant> Participants { get; set; }
    }
}
