using Microsoft.EntityFrameworkCore;
using PubCrawlAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PubCrawlAPI
{
    public class PubCrawlDbContext : DbContext
    {
        public PubCrawlDbContext(DbContextOptions<PubCrawlDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Participant>().ToTable("Participants");
            modelBuilder.Entity<Team>().ToTable("Teams");
        }
        public DbSet<Participant> Participants { get; set; }
        public DbSet<Team> Teams { get; set; }
    }
}
