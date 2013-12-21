using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AzureMap.Controllers
{
   public class HomeController : Controller
   {
      public ActionResult Index()
      {
         return View();
      }

      public ActionResult About()
      {
         ViewBag.Message = "The Azure Map was written by Bill Wilder, but is open source. Have fun.";

         return View();
      }

      public ActionResult Contact()
      {
         ViewBag.Message = "The Azure Map was written by Bill Wilder, but is open source. Have fun.";

         return View();
      }
   }
}