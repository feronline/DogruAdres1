using Microsoft.AspNetCore.Mvc;

namespace DogruAdres.Controllers
{
    public class SokakHayvanlariController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
