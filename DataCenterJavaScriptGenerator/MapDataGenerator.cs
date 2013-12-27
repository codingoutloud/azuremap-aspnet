using System;
using System.Net;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;

namespace AzureMap.MapData
{
   class DataCenterDescription
   {
      public string Name { get; set; }
      public string PairName { get; set; }
      public string Location { get; set; }
      public string Culture { get; set; }
      public string Status { get; set; }
      public string Scope { get; set; }
      public string DescriptionHTML { get; set; }
   }

   public class MapDataGenerator
   {
      static string BingMapsKey = "AmQnuM6i5-v2Z1jM44W1OUVycySYZ_975GFp7vqKSZ9IqVW76bKThXgUujAfInq9";

      private static DataCenterDescription[] dataCenterDescriptions =
      {
         new DataCenterDescription
         {
            Name = "North Central US",
            PairName = "South Central US",
            Location = "Chicago, IL, USA",
            Culture = "en-US",
            Status = "Production",
            Scope = "Full Windows Azure",
            DescriptionHTML = ""
         },
         new DataCenterDescription
         {
            Name = "South Central US",
            PairName = "North Central US",
            Location = "San Antonio, TX, USA",
            Culture = "en-US",
            Status = "Production",
            Scope = "Full Windows Azure",
            DescriptionHTML = ""
         },

         new DataCenterDescription
         {
            Name = "West Europe",
            PairName = "North Europe",
            Location = "Amsterdam, Netherlands",
            Culture = "nl-BE",
            Status = "Production",
            Scope = "Full Windows Azure",
            DescriptionHTML = ""
         },
         new DataCenterDescription
         {
            Name = "North Europe",
            PairName = "West Europe",
            Location = "Dublin, Ireland",
            Culture = "en-GB",
            Status = "Production",
            Scope = "Full Windows Azure",
            DescriptionHTML = ""
         },

         new DataCenterDescription
         {
            Name = "East Asia",
            PairName = "Southeast Asia",
            Location = "Hong Kong",
            Culture = "zh-Hans",
            Status = "Production",
            Scope = "Full Windows Azure",
            DescriptionHTML = "Mainland China"
         },
         new DataCenterDescription
         {
            Name = "Southeast Asia",
            PairName = "East Asia",
            Location = "Singapore",
            Culture = "zh-Hans",
            Status = "Production",
            Scope = "Full Windows Azure",
            DescriptionHTML = "Mainland China"
         },

         new DataCenterDescription
         {
            Name = "East US",
            PairName = "West US",
            Location = "Virginia, USA",
            Culture = "en-US",
            Status = "Production",
            Scope = "Full Windows Azure",
            DescriptionHTML = ""
         },
         new DataCenterDescription
         {
            Name = "West US",
            PairName = "East US",
            Location = "California, USA",
            Culture = "en-US",
            Status = "Production",
            Scope = "Full Windows Azure",
            DescriptionHTML = ""
         },

         new DataCenterDescription
         {
            Name = "Shanghai China",
            PairName = "Beijing China",
            Location = "Shanghai, China",
            Culture = "zh-Hans",
            Status = "Preview",
            Scope = "Full Windows Azure",
            DescriptionHTML =
               "Mainland China - 'Daxing District of Beijing' partnering with 21Vianet - <a href='http://ir.21vianet.com/releasedetail.cfm?ReleaseID=766443'>press release</a>"
         },
         new DataCenterDescription
         {
            Name = "Beijing China",
            PairName = "Shanghai China",
            Location = "Beijing, China",
            Culture = "zh-Hans",
            Status = "Preview",
            Scope = "Full Windows Azure",
            DescriptionHTML =
               "Mainland China - 'Daxing District of Beijing' partnering with 21Vianet - <a href='http://ir.21vianet.com/releasedetail.cfm?ReleaseID=766443'>press release</a>"
         },

         // http://blogs.technet.com/b/microsoft_blog/archive/2013/05/22/microsoft-announces-major-expansion-of-windows-azure-services-in-asia.aspx
         new DataCenterDescription
         {
            Name = "East Japan",
            PairName = "West Japan",
            Location = "Tokyo, Japan",
            Culture = "ja",
            Status = "Announced",
            Scope = "Full Windows Azure",
            DescriptionHTML = ""
         },
         new DataCenterDescription
         {
            Name = "West Japan",
            PairName = "East Japan",
            Location = "Kansai, Japan", // Kansai (Satya), Osaka (was early first guess)
            Culture = "ja",
            Status = "Announced",
            Scope = "Full Windows Azure",
            DescriptionHTML = ""
         },

         new DataCenterDescription
         {
            Name = "NSW",
            PairName = "Victoria",
            Location = "New South Wales, Australia",
            Culture = "en-GB",
            Status = "Announced",
            Scope = "Full Windows Azure",
            DescriptionHTML = ""
         },
         new DataCenterDescription
         {
            Name = "Victoria",
            PairName = "NSW",
            Location = "Victoria, Australia",
            Culture = "en-GB",
            Status = "Announced",
            Scope = "Full Windows Azure",
            DescriptionHTML = ""
         },

         // http://blogs.msdn.com/b/windowsazure/archive/2013/12/04/expanding-windows-azure-capacity-brazil.aspx?Redirected=true
         new DataCenterDescription
         {
            Name = "Brazil",
            PairName = "South Central US",
            Location = "Brazil",
            Culture = "pt-BR",
            Status = "Announced",
            Scope = "Full Windows Azure",
            DescriptionHTML = ""
         },
      };

      public static void Main2(string[] args)
      {
         Console.WriteLine("var dcLocList =");
         Console.WriteLine("[");
         foreach (DataCenterDescription dc in dataCenterDescriptions)
         {
            try
            {
               // string locationsRequest = CreateRequest("New%20York");
               var locationsRequest = CreateRequest(dc.Location);
               var locationsResponse = MakeRequest(locationsRequest);

               var x =
                  ((AzureMap.MapData.Point)
                     (locationsResponse.ResourceSets[0].Resources[0].GeocodePoints[0]))
                     .Coordinates[0];
               var y =
                  ((AzureMap.MapData.Point)
                     (locationsResponse.ResourceSets[0].Resources[0].GeocodePoints[0]))
                     .Coordinates[1];

               string html = dc.DescriptionHTML;
               html = String.Empty;
               html += "<br/>Location: " + dc.Location;
               html += "<br/>Status: " + dc.Status;
               html += "<br/>Scope: " + dc.Scope;
               html += "<br/>Failover Data Center: " + dc.PairName;
               Console.WriteLine("{{ name: \"{0}\", x: \"{1}\", y: \"{2}\", location: \"{3}\", description: \"{4}\" }}, ", 
                  dc.Name, x, y, dc.Location, html);
//               Console.WriteLine(locationsResponse.ResourceSets[0].Resources[0].Address.FormattedAddress);
/////            ProcessResponse(locationsResponse);
            }
            catch (Exception e)
            {
               Console.WriteLine(e.Message);
               Console.Read();
            }
         }
         Console.WriteLine("];");


         Console.WriteLine("\n\n\n");

         Console.WriteLine("var dcPairList =");
         Console.WriteLine("[");
         foreach (DataCenterDescription sourceDC in dataCenterDescriptions)
            foreach (DataCenterDescription dc in dataCenterDescriptions)
               if (sourceDC.PairName == dc.Name)
         {
            try
            {
               var locationsRequest1 = CreateRequest(dc.Location);
               var locationsResponse1 = MakeRequest(locationsRequest1);

               var x1 =
                  ((AzureMap.MapData.Point)
                     (locationsResponse1.ResourceSets[0].Resources[0].GeocodePoints[0]))
                     .Coordinates[0];
               var y1 =
                  ((AzureMap.MapData.Point)
                     (locationsResponse1.ResourceSets[0].Resources[0].GeocodePoints[0]))
                     .Coordinates[1];

               var locationsRequest2 = CreateRequest(sourceDC.Location);
               var locationsResponse2 = MakeRequest(locationsRequest2);

               var x2 =
                  ((AzureMap.MapData.Point)
                     (locationsResponse2.ResourceSets[0].Resources[0].GeocodePoints[0]))
                     .Coordinates[0];
               var y2 =
                  ((AzureMap.MapData.Point)
                     (locationsResponse2.ResourceSets[0].Resources[0].GeocodePoints[0]))
                     .Coordinates[1];

               Console.WriteLine("{{ x1: \"{0}\", y1: \"{1}\", x2: \"{2}\", y2: \"{3}\", source: \"{4}\", pair: \"{5}\" }}, ",
                  x1, y1, x2, y2, sourceDC.Name, sourceDC.PairName);
            }
            catch (Exception e)
            {
               Console.WriteLine(e.Message);
               Console.Read();
            }
         }
         Console.WriteLine("];");



//         if (Debugger.IsAttached) Console.Read();
      }


      //Create the request URL
      public static string CreateRequest(string queryString)
      {
         string UrlRequest = "http://dev.virtualearth.net/REST/v1/Locations/" +
                                        queryString +
                                        "?key=" + BingMapsKey;
         return (UrlRequest);
      }

      public static Response MakeRequest(string requestUrl)
      {
         try
         {
            var request = WebRequest.Create(requestUrl) as HttpWebRequest;
            using (var response = request.GetResponse() as HttpWebResponse)
            {
               if (response.StatusCode != HttpStatusCode.OK)
                  throw new Exception(String.Format(
                  "Server error (HTTP {0}: {1}).",
                  response.StatusCode,
                  response.StatusDescription));
               var jsonSerializer = new DataContractJsonSerializer(typeof(Response));
               object objResponse = jsonSerializer.ReadObject(response.GetResponseStream());
               var jsonResponse = objResponse as Response;
               return jsonResponse;
            }
         }
         catch (Exception e)
         {
            Console.WriteLine(e.Message);
            return null;
         }

      }

      static public void ProcessResponse(Response locationsResponse)
      {

         int locNum = locationsResponse.ResourceSets[0].Resources.Length;

         //Get formatted addresses: Option 1
         //Get all locations in the response and then extract the formatted address for each location
         Console.WriteLine("Show all formatted addresses");
         for (int i = 0; i < locNum; i++)
         {
            Location location = (Location)locationsResponse.ResourceSets[0].Resources[i];
            Console.WriteLine(location.Address.FormattedAddress);
         }
         Console.WriteLine();

         //Get the Geocode Points for each Location
         for (int i = 0; i < locNum; i++)
         {
            Location location = (Location)locationsResponse.ResourceSets[0].Resources[i];
            Console.WriteLine("Geocode Points for " + location.Address.FormattedAddress);
            int geocodePointNum = location.GeocodePoints.Length;
            for (int j = 0; j < geocodePointNum; j++)
            {
               Console.WriteLine("    Point: " + location.GeocodePoints[j].Coordinates[0].ToString() + "," +
                                            location.GeocodePoints[j].Coordinates[1].ToString());
               double test = location.GeocodePoints[j].Coordinates[1];
               Console.Write("    Usage: ");
               for (int k = 0; k < location.GeocodePoints[j].UsageTypes.Length; k++)
               {
                  Console.Write(location.GeocodePoints[j].UsageTypes[k].ToString() + " ");
               }
               Console.WriteLine("\n\n");
            }
         }
         Console.WriteLine();


         //Get all locations that have a MatchCode=Good and Confidence=High
         Console.WriteLine("Locations that have a Confidence=High");
         for (int i = 0; i < locNum; i++)
         {
            Location location = (Location)locationsResponse.ResourceSets[0].Resources[i];
            if (location.Confidence == "High")
               Console.WriteLine(location.Address.FormattedAddress);
         }
         Console.WriteLine();

         Console.WriteLine("Press any key to exit");
         Console.ReadKey();


      }
   }
   [DataContract]
   public class Response
   {
      [DataMember(Name = "copyright")]
      public string Copyright { get; set; }
      [DataMember(Name = "brandLogoUri")]
      public string BrandLogoUri { get; set; }
      [DataMember(Name = "statusCode")]
      public int StatusCode { get; set; }
      [DataMember(Name = "statusDescription")]
      public string StatusDescription { get; set; }
      [DataMember(Name = "authenticationResultCode")]
      public string AuthenticationResultCode { get; set; }
      [DataMember(Name = "errorDetails")]
      public string[] errorDetails { get; set; }
      [DataMember(Name = "traceId")]
      public string TraceId { get; set; }
      [DataMember(Name = "resourceSets")]
      public ResourceSet[] ResourceSets { get; set; }
   }


   [DataContract]
   public class ResourceSet
   {
      [DataMember(Name = "estimatedTotal")]

      public long EstimatedTotal { get; set; }
      [DataMember(Name = "resources")]
      public Location[] Resources { get; set; }
   }

   [DataContract]
   public class Point
   {
      /// <summary>
      /// Latitude,Longitude
      /// </summary>
      [DataMember(Name = "coordinates")]
      public double[] Coordinates { get; set; }
   }


   [DataContract]
   public class BoundingBox
   {
      [DataMember(Name = "southLatitude")]
      public double SouthLatitude { get; set; }
      [DataMember(Name = "westLongitude")]
      public double WestLongitude { get; set; }
      [DataMember(Name = "northLatitude")]
      public double NorthLatitude { get; set; }
      [DataMember(Name = "eastLongitude")]
      public double EastLongitude { get; set; }
   }

   [DataContract]
   public class GeocodePoint : Point
   {
      [DataMember(Name = "calculationMethod")]
      public string CalculationMethod { get; set; }
      [DataMember(Name = "usageTypes")]
      public string[] UsageTypes { get; set; }
   }

   [DataContract(Namespace = "http://schemas.microsoft.com/search/local/ws/rest/v1")]
   public class Location
   {
      [DataMember(Name = "boundingBox")]
      public BoundingBox BoundingBox { get; set; }
      [DataMember(Name = "name")]
      public string Name { get; set; }
      [DataMember(Name = "point")]
      public Point Point { get; set; }
      [DataMember(Name = "entityType")]
      public string EntityType { get; set; }
      [DataMember(Name = "address")]
      public Address Address { get; set; }
      [DataMember(Name = "confidence")]
      public string Confidence { get; set; }
      [DataMember(Name = "geocodePoints")]
      public GeocodePoint[] GeocodePoints { get; set; }
      [DataMember(Name = "matchCodes")]
      public string[] MatchCodes { get; set; }
   }

   [DataContract]
   public class Address
   {
      [DataMember(Name = "addressLine")]
      public string AddressLine { get; set; }
      [DataMember(Name = "adminDistrict")]
      public string AdminDistrict { get; set; }
      [DataMember(Name = "adminDistrict2")]
      public string AdminDistrict2 { get; set; }
      [DataMember(Name = "countryRegion")]
      public string CountryRegion { get; set; }
      [DataMember(Name = "formattedAddress")]
      public string FormattedAddress { get; set; }
      [DataMember(Name = "locality")]
      public string Locality { get; set; }
      [DataMember(Name = "postalCode")]
      public string PostalCode { get; set; }
   }
}
