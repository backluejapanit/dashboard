using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dashboardAPI.Migrations
{
    public partial class modifieditthen : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "clicked",
                table: "WorkingTimes",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "dateCheck",
                table: "WorkingTimes",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "clicked",
                table: "WorkingTimes");

            migrationBuilder.DropColumn(
                name: "dateCheck",
                table: "WorkingTimes");
        }
    }
}
