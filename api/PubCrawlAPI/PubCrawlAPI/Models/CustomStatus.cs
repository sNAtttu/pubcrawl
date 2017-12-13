using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PubCrawlAPI.Models
{
    public class CustomStatus
    {
        public CustomStatusCode StatusCode { get; set; }
        public string StatusMessage { get; set; }
    }

    public enum CustomStatusCode
    {
        Success,TeamNotFound,TeamExists,TeamCreationFail,NameIsNull
    }

}
