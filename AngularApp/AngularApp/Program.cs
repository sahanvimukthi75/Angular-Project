using AngularApp.Services;

var builder = WebApplication.CreateBuilder(args);

// Adding services to the container.
builder.Services.AddControllers();
builder.Services.AddSingleton<BookService>();

// using cors
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp",
        policy => policy.WithOrigins("http://localhost:4200")
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

//  Use cors
app.UseCors("AllowAngularApp");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
