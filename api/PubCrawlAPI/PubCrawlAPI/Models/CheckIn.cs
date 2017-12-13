using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PubCrawlAPI.Models
{
    public class CheckIn
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int ParticipantId { get; set; }
        [JsonIgnore]
        public Participant Participant { get; set; }
        public Coordinates Coords { get; set; }
    }

    public class Coordinates
    {
        public int Id { get; set; }
        public long Longitude { get; set; }
        public long Latitude { get; set; }
    }

}
