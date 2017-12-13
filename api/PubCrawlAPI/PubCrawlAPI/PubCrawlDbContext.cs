using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using PubCrawlAPI.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace PubCrawlAPI
{
 
public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<PubCrawlDbContext>
    {
        public PubCrawlDbContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var builder = new DbContextOptionsBuilder<PubCrawlDbContext>();

            var connectionString = configuration.GetConnectionString("DefaultConnection");

            builder.UseSqlServer(connectionString);

            return new PubCrawlDbContext(builder.Options);
        }
    }
    public class PubCrawlDbContext : DbContext
    {
        public PubCrawlDbContext(DbContextOptions<PubCrawlDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Participant>().ToTable("Participants");
            modelBuilder.Entity<Team>().ToTable("Teams");
            modelBuilder.Entity<CheckIn>().ToTable("CheckIns");
        }
        public DbSet<Participant> Participants { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<CheckIn> CheckIns { get; set; }
    }
}
