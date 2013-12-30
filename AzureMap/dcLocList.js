var dcLocList =
[
{ name: "US North Central", x: "41.8842506408691", y: "-87.6324462890625", location: "Chicago, IL, USA", description: "Geo: United States<br/>Region: Chicago, IL, USA<br/>Status: Production<br/>Scope: Full Windows Azure<br/>Failover Data Center: US South Central" }, 
{ name: "US South Central", x: "29.4245796203613", y: "-98.4946136474609", location: "San Antonio, TX, USA", description: "Geo: United States<br/>Region: San Antonio, TX, USA<br/>Status: Production<br/>Scope: Full Windows Azure<br/>Failover Data Center: US North Central" }, 
{ name: "Europe West", x: "52.3306999206543", y: "4.86433982849121", location: "Amsterdam, Netherlands", description: "Geo: Europe<br/>Region: Amsterdam, Netherlands<br/>Status: Production<br/>Scope: Full Windows Azure<br/>Failover Data Center: Europe North" }, 
{ name: "Europe North", x: "53.3480682373047", y: "-6.24827003479004", location: "Dublin, Ireland", description: "Geo: Europe<br/>Region: Dublin, Ireland<br/>Status: Production<br/>Scope: Full Windows Azure<br/>Failover Data Center: Europe West" }, 
{ name: "East Asia", x: "22.3361568450928", y: "114.186965942383", location: "Hong Kong", description: "Geo: Asia Pacific<br/>Region: Hong Kong<br/>Status: Production<br/>Scope: Full Windows Azure<br/>Failover Data Center: SE Asia" }, 
{ name: "SE Asia", x: "1.32199585437775", y: "103.820533752441", location: "Singapore", description: "Geo: Asia Pacific<br/>Region: Singapore<br/>Status: Production<br/>Scope: Full Windows Azure<br/>Failover Data Center: East Asia" }, 
{ name: "US East", x: "37.5088043212891", y: "-78.6515426635742", location: "Virginia, USA", description: "Geo: United States<br/>Region: Virginia, USA<br/>Status: Production<br/>Scope: Full Windows Azure<br/>Failover Data Center: US West" }, 
{ name: "US West", x: "37.1519241333008", y: "-119.646041870117", location: "California, USA", description: "Geo: United States<br/>Region: California, USA<br/>Status: Production<br/>Scope: Full Windows Azure<br/>Failover Data Center: US East" }, 
{ name: "Shanghai China", x: "31.2551593780518", y: "121.474700927734", location: "Shanghai, China", description: "Geo: Asia Pacific<br/>Region: Shanghai, China<br/>Status: Public Preview (since 06-June-2013)<br/>Scope: Full Windows Azure<br/>Failover Data Center: Beijing China" }, 
{ name: "Beijing China", x: "39.9065704345703", y: "116.387649536133", location: "Beijing, China", description: "Geo: Asia Pacific<br/>Region: Beijing, China<br/>Status: Public Preview (since 06-June-2013)<br/>Scope: Full Windows Azure<br/>Failover Data Center: Shanghai China" }, 
{ name: "Japan East", x: "35.6832084655762", y: "139.808944702148", location: "Tokyo, Japan", description: "Geo: Japan<br/>Region: Tokyo, Japan<br/>Status: Announced<br/>Scope: Full Windows Azure<br/>Failover Data Center: Japan West" }, 
{ name: "Japan West", x: "34.7703742980957", y: "135.508148193359", location: "Kansai, Japan", description: "Geo: Japan<br/>Region: Kansai, Japan<br/>Status: Announced<br/>Scope: Full Windows Azure<br/>Failover Data Center: Japan East" }, 
{ name: "Australia East", x: "-33.8740005493164", y: "151.203002929688", location: "Sydney, New South Wales, Australia", description: "Geo: Australia<br/>Region: Sydney, New South Wales, Australia<br/>Status: Announced<br/>Scope: Full Windows Azure<br/>Failover Data Center: Australia SE" }, 
{ name: "Australia SE", x: "-37.8132019042969", y: "144.955001831055", location: "Melbourne, Victoria, Australia", description: "Geo: Australia<br/>Region: Melbourne, Victoria, Australia<br/>Status: Announced<br/>Scope: Full Windows Azure<br/>Failover Data Center: Australia East" }, 
{ name: "Brazil South", x: "-10.8104515075684", y: "-52.9731178283691", location: "Brazil South", description: "Geo: South America (Geo name not confirmed)<br/>Region: Brazil South<br/>Status: Announced (Public Preview <a href='http://blogs.msdn.com/b/windowsazure/archive/2013/12/04/expanding-windows-azure-capacity-brazil.aspx'>expected</a> early in 2014)<br/>Scope: Full Windows Azure<br/>Failover Data Center: US South Central" }, 
];




var dcPairList =
[
{ x1: "29.4245796203613", y1: "-98.4946136474609", x2: "41.8842506408691", y2: "-87.6324462890625", source: "US North Central", pair: "US South Central" }, 
{ x1: "41.8842506408691", y1: "-87.6324462890625", x2: "29.4245796203613", y2: "-98.4946136474609", source: "US South Central", pair: "US North Central" }, 
{ x1: "53.3480682373047", y1: "-6.24827003479004", x2: "52.3306999206543", y2: "4.86433982849121", source: "Europe West", pair: "Europe North" }, 
{ x1: "52.3306999206543", y1: "4.86433982849121", x2: "53.3480682373047", y2: "-6.24827003479004", source: "Europe North", pair: "Europe West" }, 
{ x1: "1.32199585437775", y1: "103.820533752441", x2: "22.3361568450928", y2: "114.186965942383", source: "East Asia", pair: "SE Asia" }, 
{ x1: "22.3361568450928", y1: "114.186965942383", x2: "1.32199585437775", y2: "103.820533752441", source: "SE Asia", pair: "East Asia" }, 
{ x1: "37.1519241333008", y1: "-119.646041870117", x2: "37.5088043212891", y2: "-78.6515426635742", source: "US East", pair: "US West" }, 
{ x1: "37.5088043212891", y1: "-78.6515426635742", x2: "37.1519241333008", y2: "-119.646041870117", source: "US West", pair: "US East" }, 
{ x1: "39.9065704345703", y1: "116.387649536133", x2: "31.2551593780518", y2: "121.474700927734", source: "Shanghai China", pair: "Beijing China" }, 
{ x1: "31.2551593780518", y1: "121.474700927734", x2: "39.9065704345703", y2: "116.387649536133", source: "Beijing China", pair: "Shanghai China" }, 
{ x1: "34.7703742980957", y1: "135.508148193359", x2: "35.6832084655762", y2: "139.808944702148", source: "Japan East", pair: "Japan West" }, 
{ x1: "35.6832084655762", y1: "139.808944702148", x2: "34.7703742980957", y2: "135.508148193359", source: "Japan West", pair: "Japan East" }, 
{ x1: "-37.8132019042969", y1: "144.955001831055", x2: "-33.8740005493164", y2: "151.203002929688", source: "Australia East", pair: "Australia SE" }, 
{ x1: "-33.8740005493164", y1: "151.203002929688", x2: "-37.8132019042969", y2: "144.955001831055", source: "Australia SE", pair: "Australia East" }, 
{ x1: "29.4245796203613", y1: "-98.4946136474609", x2: "-10.8104515075684", y2: "-52.9731178283691", source: "Brazil South", pair: "US South Central" }, 
];
