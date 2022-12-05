using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dashboardAPI.Models;

namespace dashboardAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkingTimeController : ControllerBase
    {
        private readonly DashboardDbContext _context;

        public WorkingTimeController(DashboardDbContext context)
        {
            _context = context;
        }

        // GET: api/WorkingTime
        [HttpGet]
        public async Task<ActionResult<IEnumerable<WorkingTime>>> GetWorkingTimes()
        {
            return await _context.WorkingTimes.ToListAsync();
        }

        // GET: api/WorkingTime/5
        [HttpGet("{id}")]
        public async Task<ActionResult<WorkingTime>> GetWorkingTime(int id)
        {
            var workingTime = await _context.WorkingTimes.FindAsync(id);

            if (workingTime == null)
            {
                return NotFound();
            }

            return workingTime;
        }

        // PUT: api/WorkingTime/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorkingTime(int id, WorkingTime workingTime)
        {
            if (id != workingTime.TimeId)
            {
                return BadRequest();
            }

            _context.Entry(workingTime).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkingTimeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/WorkingTime
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<WorkingTime>> PostWorkingTime(WorkingTime workingTime)
        {
            _context.WorkingTimes.Add(workingTime);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWorkingTime", new { id = workingTime.TimeId }, workingTime);
        }

        // DELETE: api/WorkingTime/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorkingTime(int id)
        {
            var workingTime = await _context.WorkingTimes.FindAsync(id);
            if (workingTime == null)
            {
                return NotFound();
            }

            _context.WorkingTimes.Remove(workingTime);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool WorkingTimeExists(int id)
        {
            return _context.WorkingTimes.Any(e => e.TimeId == id);
        }
    }
}
