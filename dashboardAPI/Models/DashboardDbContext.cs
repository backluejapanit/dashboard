using Microsoft.EntityFrameworkCore;

namespace dashboardAPI.Models
{
    public class DashboardDbContext : DbContext
    {
        public DashboardDbContext(DbContextOptions<DashboardDbContext> options) : base(options) { }

        public DbSet<WorkingTime>? WorkingTimes { get; set; }
    }
}
