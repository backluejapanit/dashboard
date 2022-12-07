using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dashboardAPI.Migrations
{
    public partial class addtotalHour : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "latestTimestamp",
                table: "WorkingTimes",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "totalHour",
                table: "WorkingTimes",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "latestTimestamp",
                table: "WorkingTimes");

            migrationBuilder.DropColumn(
                name: "totalHour",
                table: "WorkingTimes");
        }
    }
}
