# Downloading

A tutorial video about downloading

<iframe src="https://www.youtube.com/embed/mgONKmc52iI" style="max-width:100%"  width="640" height="480" frameborder=0 allowfullscreen></iframe>


We recommend the Transmission torrent client which supports all major operating systems: [https://www.transmissionbt.com/](https://www.transmissionbt.com/)


## From the command line


We recommend [aria2c](https://aria2.github.io/). Specify a torrent URL or the magnet link to download. Here is an example usage:

```bash
aria2c --seed-time=0 --max-overall-download-limit=10M --file-allocation=none https://academictorrents.com/download/c5af268ec55cf2d3b439e7311ad43101ba8322eb.torrent
```

Useful switches:

- `--seed-ratio=0` Stop after downloading
- `--file-allocation=none` Start downloading right away instead of allocating the file on disk
- `--max-overall-download-limit=10M` Limit the download speed to prevent high speeds from breaking things



As an alternative we also provide a pure python client at-python which can be installed as follows:

```bash
$ pip install academictorrents
$ at-get c5af268ec55cf2d3b439e7311ad43101ba8322eb
```


## Python API

This repository is an implementation of the BitTorrent protocol written in Python and downloadable as a pip module.

https://github.com/academictorrents/at-python

You can download datasets from AcademicTorrents.com in two lines of code:

```python
import academictorrents as at
path_of_dataset = at.get("323a0048d87ca79b68f12a6350a57776b6a3b7fb") # Download mnist dataset
```
