var dcLocList =
[
{ name: "North Central US", x: "41.8842506408691", y: "-87.6324462890625", location: "Chicago, IL, USA", description: "<br/>Location: Chicago, IL, USA<br/>Status: Production<br/>Scope: Full Windows Azure<br/>Failover Data Center: South Central US" }, 
{ name: "South Central US", x: "29.4245796203613", y: "-98.4946136474609", location: "San Antonio, TX, USA", description: "<br/>Location: San Antonio, TX, USA<br/>Status: Production<br/>Scope: Full Windows Azure<br/>Failover Data Center: North Central US" }, 
{ name: "West Europe", x: "52.3306999206543", y: "4.86433982849121", location: "Amsterdam, Netherlands", description: "<br/>Location: Amsterdam, Netherlands<br/>Status: Production<br/>Scope: Full Windows Azure<br/>Failover Data Center: North Europe" }, 
{ name: "North Europe", x: "53.3480682373047", y: "-6.24827003479004", location: "Dublin, Ireland", description: "<br/>Location: Dublin, Ireland<br/>Status: Production<br/>Scope: Full Windows Azure<br/>Failover Data Center: West Europe" }, 
{ name: "East Asia", x: "22.3361568450928", y: "114.186965942383", location: "Hong Kong", description: "<br/>Location: Hong Kong<br/>Status: Production<br/>Scope: Full Windows Azure<br/>Failover Data Center: Southeast Asia" }, 
{ name: "Southeast Asia", x: "1.32199585437775", y: "103.820533752441", location: "Singapore", description: "<br/>Location: Singapore<br/>Status: Production<br/>Scope: Full Windows Azure<br/>Failover Data Center: East Asia" }, 
{ name: "East US", x: "37.5088043212891", y: "-78.6515426635742", location: "Virginia, USA", description: "<br/>Location: Virginia, USA<br/>Status: Production<br/>Scope: Full Windows Azure<br/>Failover Data Center: West US" }, 
{ name: "West US", x: "37.1519241333008", y: "-119.646041870117", location: "California, USA", description: "<br/>Location: California, USA<br/>Status: Production<br/>Scope: Full Windows Azure<br/>Failover Data Center: East US" }, 
{ name: "Shanghai China", x: "31.2551593780518", y: "121.474700927734", location: "Shanghai, China", description: "<br/>Location: Shanghai, China<br/>Status: Preview<br/>Scope: Full Windows Azure<br/>Failover Data Center: Beijing China" }, 
{ name: "Beijing China", x: "39.9065704345703", y: "116.387649536133", location: "Beijing, China", description: "<br/>Location: Beijing, China<br/>Status: Preview<br/>Scope: Full Windows Azure<br/>Failover Data Center: Shanghai China" }, 
{ name: "East Japan", x: "35.6832084655762", y: "139.808944702148", location: "Tokyo, Japan", description: "<br/>Location: Tokyo, Japan<br/>Status: Announced<br/>Scope: Full Windows Azure<br/>Failover Data Center: West Japan" }, 
{ name: "West Japan", x: "34.7703742980957", y: "135.508148193359", location: "Kansai, Japan", description: "<br/>Location: Kansai, Japan<br/>Status: Announced<br/>Scope: Full Windows Azure<br/>Failover Data Center: East Japan" }, 
{ name: "NSW", x: "-32.1742324829102", y: "147.067459106445", location: "New South Wales, Australia", description: "<br/>Location: New South Wales, Australia<br/>Status: Announced<br/>Scope: Full Windows Azure<br/>Failover Data Center: Victoria" }, 
{ name: "Victoria", x: "-36.9223518371582", y: "144.351409912109", location: "Victoria, Australia", description: "<br/>Location: Victoria, Australia<br/>Status: Announced<br/>Scope: Full Windows Azure<br/>Failover Data Center: NSW" }, 
{ name: "Brazil", x: "-10.8104515075684", y: "-52.9731178283691", location: "Brazil", description: "<br/>Location: Brazil<br/>Status: Announced<br/>Scope: Full Windows Azure<br/>Failover Data Center: South Central US" }, 
];




var dcPairList =
[
{ x1: "29.4245796203613", y1: "-98.4946136474609", x2: "41.8842506408691", y2: "-87.6324462890625", source: "North Central US", pair: "South Central US" }, 
{ x1: "41.8842506408691", y1: "-87.6324462890625", x2: "29.4245796203613", y2: "-98.4946136474609", source: "South Central US", pair: "North Central US" }, 
{ x1: "53.3480682373047", y1: "-6.24827003479004", x2: "52.3306999206543", y2: "4.86433982849121", source: "West Europe", pair: "North Europe" }, 
{ x1: "52.3306999206543", y1: "4.86433982849121", x2: "53.3480682373047", y2: "-6.24827003479004", source: "North Europe", pair: "West Europe" }, 
{ x1: "1.32199585437775", y1: "103.820533752441", x2: "22.3361568450928", y2: "114.186965942383", source: "East Asia", pair: "Southeast Asia" }, 
{ x1: "22.3361568450928", y1: "114.186965942383", x2: "1.32199585437775", y2: "103.820533752441", source: "Southeast Asia", pair: "East Asia" }, 
{ x1: "37.1519241333008", y1: "-119.646041870117", x2: "37.5088043212891", y2: "-78.6515426635742", source: "East US", pair: "West US" }, 
{ x1: "37.5088043212891", y1: "-78.6515426635742", x2: "37.1519241333008", y2: "-119.646041870117", source: "West US", pair: "East US" }, 
{ x1: "39.9065704345703", y1: "116.387649536133", x2: "31.2551593780518", y2: "121.474700927734", source: "Shanghai China", pair: "Beijing China" }, 
{ x1: "31.2551593780518", y1: "121.474700927734", x2: "39.9065704345703", y2: "116.387649536133", source: "Beijing China", pair: "Shanghai China" }, 
{ x1: "34.7703742980957", y1: "135.508148193359", x2: "35.6832084655762", y2: "139.808944702148", source: "East Japan", pair: "West Japan" }, 
{ x1: "35.6832084655762", y1: "139.808944702148", x2: "34.7703742980957", y2: "135.508148193359", source: "West Japan", pair: "East Japan" }, 
{ x1: "-36.9223518371582", y1: "144.351409912109", x2: "-32.1742324829102", y2: "147.067459106445", source: "NSW", pair: "Victoria" }, 
{ x1: "-32.1742324829102", y1: "147.067459106445", x2: "-36.9223518371582", y2: "144.351409912109", source: "Victoria", pair: "NSW" }, 
{ x1: "29.4245796203613", y1: "-98.4946136474609", x2: "-10.8104515075684", y2: "-52.9731178283691", source: "Brazil", pair: "South Central US" }, 
];
