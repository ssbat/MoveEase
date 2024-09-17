using Microsoft.EntityFrameworkCore;
using MoveEaseLibrary.EF;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<AppDbContext>(option =>

{
    //to add the connection string from the appsettings
    option.UseSqlServer(builder.Configuration.GetConnectionString("CodePulseConnectionString"));
});
var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseAuthorization();

app.MapControllers();

app.Run();
