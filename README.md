# Smart Waterways to Linked Open Data

This repository transforms waterway information (Geopackage format) into Linked Open Data (Turtle format). This way, the data can be published on the Web lowering the integration cost for third-parties. The data can be retrieved [here](https://brechtvdv.github.io/smartwaterways/data/output.nq"). A demo is provided below that queries over the data.

## OSLO

Mappings are aligned with the Open Standards for Linked Organizations (OSLO) standardization programme:
- Vocabulary [Netwerk](https://data.vlaanderen.be/ns/netwerk#), which is a Flemish implementation of the European INSPIRE directive, to describe the network of waterway axis.
- Application Profile [Watervoorkomen](https://data.vlaanderen.be/ns/openbaardomein/watervoorkomen#) to describe it is deep water.
- Application Profile [Waterdeel](https://data.vlaanderen.be/ns/openbaardomein/waterdeel#) to describe the water area.

## Workflow

* A Geopackage file containing the waterway axis and areas in the city of Ghent is provided in the data folder (Binnenstad_gent.gpkg). This is an export from the [Flemish Waterweg](https://www.vlaamsewaterweg.be/).

* To export GIS layers into CSV, which allows us to transform the data into RDF, we use the open source [QGIS](https://qgis.org/nl/site/) tool.

* We exported two layers: IENC_WTWARE.csv and IENC_WTWAXS.csv

* A [YARRRML](https://rml.io/yarrrml/) file is provided for the Linked Data generation rules in a human readable text-based representation:  `mapping.yml`. * This YARRRML must be converted into an RML mapping file: 

```
yarrrml-parser -i mapping.yml -o mapping.ttl
```

* Now the waterway CSVs can be converted into Linked Open Data with the RML mapper:

```
java -jar rmlmapper-4.7.0-r156.jar -m mapping.ttl -o data/output.nq
```

## Demo

The output file can be queried with query engines, such as Comunica.
An example query to retrieve the label and geometry is provided [here](http://query.linkeddatafragments.org/#datasources=https%3A%2F%2Fbrechtvdv.github.io%2Fsmartwaterways%2Fdata%2Foutput.nq&query=PREFIX%20locn%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Flocn%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20geosparql%3A%20%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0Aselect%20*%0Awhere%20%7B%0A%20%20%3Fs%20rdfs%3Alabel%20%3Flabel%20%3B%0A%20%20%20%20%20locn%3Ageometry%20%5B%20geosparql%3AasWKT%20%3Fwkt%20%5D%20.%0A%7D).

<img src="https://github.com/brechtvdv/smartwaterways/blob/master/example-query.PNG?raw=true" width="500" height="400">

Also, a more advanced GUI can be found here: https://julianrojas87.github.io/ghent-waterways/
<img src="https://github.com/brechtvdv/smartwaterways/blob/master/map-ghent.PNG?raw=true" width="400" height="400">

Source code: https://github.com/julianrojas87/ghent-waterways 
