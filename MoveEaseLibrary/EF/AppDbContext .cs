using Library.Entities;
using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Library.Entities.Configurations;

namespace MoveEaseLibrary.EF
{
    public class AppDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration<User>(new UserConfiguration());

        }
    }
}
