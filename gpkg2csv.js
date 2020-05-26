var GeoPackageAPI = require('@ngageoint/geopackage')
  , GeoPackageManager = GeoPackageAPI.GeoPackageManager
  , GeoPackageConnection = GeoPackageAPI.GeoPackageConnection
  , GeoPackageTileRetriever = GeoPackageAPI.GeoPackageTileRetriever;
const path = require('path');

let filename = path.join(__dirname, 'Binnenstad_gent.gpkg');

GeoPackageAPI.open(filename, function(err, geoPackage) { });
 