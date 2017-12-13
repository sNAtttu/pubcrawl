using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PubCrawlAPI.Models
{
    public class Participant
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int TeamId { get; set; }
        public List<CheckIn> CheckIns { get; set; }
        [JsonIgnore]
        public Team Team { get; set; }
    }
    public class ParticipantTeam
    {
        public string Name;
        public string TeamName;
    }
}
