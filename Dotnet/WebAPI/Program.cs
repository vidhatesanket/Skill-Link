var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews();
var app = builder.Build();
if (!app.Environment.IsDevelopment())
{
    app.UseHsts();
}
app.UseHttpsRedirection();
// app.UseStaticFiles();
app.UseRouting();
app.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Joblisting}/{action=login}");
app.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Login}/{action=userlogin}");

            
app.Run();