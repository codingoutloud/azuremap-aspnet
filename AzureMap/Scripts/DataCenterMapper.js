var bingMapsKey = "AmQnuM6i5-v2Z1jM44W1OUVycySYZ_975GFp7vqKSZ9IqVW76bKThXgUujAfInq9";
var lastInfoBoxDisplayed = null;
var zIndexPairLines = 20;
var zIndexInfobox = zIndexPairLines - 10;  // make sure failover data center lines will appear below infoboxes

// returns an array of objects
function getDataCenterLocationsOLD() {
    var json = getDataCenterLocationsJSON();
    alert(json);
    return jQuery.parseJSON(json);
}

// returns array of ojects
function getDataCenterPairs() {
    return dcPairList; // from included dcLocList.js file
}

// returns array of ojects
function getDataCenterLocations() {
    return dcLocList; // from included dcLocList.js file
}

function displayInfobox(e, infobox) {
    if (lastInfoBoxDisplayed != null)
        lastInfoBoxDisplayed.setOptions({ visible: false });
    lastInfoBoxDisplayed = infobox;
    infobox.setOptions({ visible: true });
}

function hideLastInfobox(e) {
    if (lastInfoBoxDisplayed != null)
        lastInfoBoxDisplayed.setOptions({ visible: false });
}

function addDataCenterToMap(dc, map) {
    var location = new Microsoft.Maps.Location(dc.x, dc.y);
    var pin = new Microsoft.Maps.Pushpin(location, { text: dc.name, /* width: 45, height: 78, */ typeName: 'pinText', textOffset: new Microsoft.Maps.Point(0, 18) });

    /*
    pin.setOptions(
    {
        text: dc.name
        // ??? MESSES UP PIN PLACEMENT
         , width: 80
         , height: 100
    });
    */

    var infobox = new Microsoft.Maps.Infobox(location,
    {
        title: dc.name,
        description: dc.description,
        offset: new Microsoft.Maps.Point(0, 20),
        height: 180,
        zIndex: zIndexInfobox,
        visible: false
    });

    Microsoft.Maps.Events.addHandler(pin, 'click',
    (function(e) {
        displayInfobox(e, infobox); // rely on closure
    }));

    // Microsoft.Maps.Events.addHandler(map, 'viewchange', hideLastInfobox);
    Microsoft.Maps.Events.addHandler(map, 'click', hideLastInfobox);

    map.entities.push(pin);
    map.entities.push(infobox);
}

// Bing Maps AJAX Control, Version 7.0 http://msdn.microsoft.com/en-us/library/gg427610.aspx

function LoadMap() {
    var map = new window.Microsoft.Maps.Map(document.getElementById("dcMap"), { credentials: bingMapsKey, zoom: 2,  });

    var dcList = getDataCenterLocations();
    for (var i = 0; i < dcList.length; i++) {
        addDataCenterToMap(dcList[i], map);
    }

    var dcPairLines = new Microsoft.Maps.EntityCollection();
    var dcPairLineColor = new Microsoft.Maps.Color(75, 225, 128, 128);
    var dcPairs = getDataCenterPairs();
    for (var j = 0; j < dcPairs.length; j++) {
        var vertices = new Array();
        vertices.push(
            new Microsoft.Maps.Location(dcPairs[j].x1, dcPairs[j].y1),
            new Microsoft.Maps.Location(dcPairs[j].x2, dcPairs[j].y2)
        );

        var polygon = new Microsoft.Maps.Polyline(vertices, { strokeColor: dcPairLineColor, strokeThickness: 4, visible: true });
        dcPairLines.push(polygon);
    }
//    dcPairLines.setOptions({ zIndex: zIndexPairLines });
    dcPairLines.setOptions({ zIndex: -1 });
    map.entities.push(dcPairLines);
}
