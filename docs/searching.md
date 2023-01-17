# Searching

## Overview

The website provides the ability for humans to search the database. 
However, for robots we provide a few XML URLs to help programatically navigate the database.

For a standard RSS feed of recent entries there is:

[https://academictorrents.com/rss.xml](https://academictorrents.com/rss.xml)


For enable users programmatically search the entire database we provide an XML file in RSS format
containing all public entries. The expectation here is that you will download this file locally
and then search offline. It contains the torrent title, description, the URL of the details page,
and the infohash which can be used to construct a magnet link for the torrent.

[https://academictorrents.com/database.xml](https://academictorrents.com/database.xml)

Some example output:


```xml
<rss xmlns:academictorrents="http://academictorrents.com" version="2.0">
<channel>
<title>Academic Torrents</title>
<description>All Torrents</description>
<link>http://academictorrents.com/</link>
<item>
<title>MLDS-DS3-10000-v1.0</title>
<category>Dataset</category>
<infohash>b2bbaccd349e8e2954a438ced6fc01adae4ea1f1</infohash>
<guid>http://academictorrents.com/details/b2bbaccd349e8e2954a438ced6fc01adae4ea1f1</guid>
<link>http://academictorrents.com/details/b2bbaccd349e8e2954a438ced6fc01adae4ea1f1</link>
<description>Machine Learning Dataset, DS3-10000 v1.0: A dataset for parameter-space analysis of neural networks. See https://www.mlcathome.org/ for more information</description>
<size>1354135939103</size>
</item>
<item>
<title>MLDS-DS3-5000-v1.0</title>
<category>Dataset</category>
<infohash>c143f1b108fe5ab748d5a6f1ff7b2a6271e4219d</infohash>
<guid>http://academictorrents.com/details/c143f1b108fe5ab748d5a6f1ff7b2a6271e4219d</guid>
<link>http://academictorrents.com/details/c143f1b108fe5ab748d5a6f1ff7b2a6271e4219d</link>
<description>Machine Learning Dataset, DS3-5000 v1.0: A dataset for parameter-space analysis of neural networks. See https://www.mlcathome.org/ for more information</description>
<size>677223180049</size>
</item>
...
</channel>
</rss>

```


