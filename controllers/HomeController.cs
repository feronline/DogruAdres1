using Microsoft.AspNetCore.Mvc;

namespace DogruAdres.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
