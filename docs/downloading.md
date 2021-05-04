# Downloading

A tutorial video about downloading

[![](https://img.youtube.com/vi/mgONKmc52iI/0.jpg)](https://www.youtube.com/watch?v=mgONKmc52iI)


We recommend the Transmission torrent client which supports all major operating systems: [https://www.transmissionbt.com/](https://www.transmissionbt.com/)


## From the command line

For downloading from the command line we provide a pure python client [at-python](https://github.com/academictorrents/at-python) which can be installed as follows:

```bash
pip install academictorrents
at-get c5af268ec55cf2d3b439e7311ad43101ba8322eb
```

Alternativly for large files we recommend [aria2c](https://aria2.github.io/)

```bash
aria2c https://academictorrents.com/download/c5af268ec55cf2d3b439e7311ad43101ba8322eb.torrent
```


## Python API

This repository is an implementation of the BitTorrent protocol written in Python and downloadable as a pip module. 

[https://github.com/academictorrents/at-python](https://github.com/academictorrents/at-python)

You can download datasets from AcademicTorrents.com in two lines of code:

```python
import academictorrents as at
path_of_dataset = at.get("323a0048d87ca79b68f12a6350a57776b6a3b7fb") # Download mnist dataset
```
