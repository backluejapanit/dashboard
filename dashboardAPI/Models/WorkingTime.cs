using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace dashboardAPI.Models
{
    public class WorkingTime
    {
        [Key]
        public int TimeId { get; set; }
        public string? NewDate { get; set; }
        public string? NewTime { get; set; }
        public string? Type { get; set; }
    }
}
