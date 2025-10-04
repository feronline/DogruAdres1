using Microsoft.AspNetCore.Mvc;

namespace DogruAdres.Controllers
{
    public class GiyimYemekController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
