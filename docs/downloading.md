# Downloading

A [video](https://www.youtube.com/embed/mgONKmc52iI) about downloading


We recommend the Transmission torrent client which supports all major operating systems: [https://www.transmissionbt.com/](https://www.transmissionbt.com/)


## From the command line

For downloading from the command line you can use ctorrent locally or when connected over ssh to a server.
To install ctorrent run:

```bash
$ sudo apt-get install ctorrent  ## for Ubuntu/Debian
$ sudo yum install ctorrent      ## for Fedora/Red Hat
$ brew install ctorrent          ## for Mac OSX
```

To use ctorrent you first need to download the .torrent file of the file/files that you want.
You can do this using wget from the command line:

```bash
$ wget http://academictorrents.com/download/30ac2ef27829b1b5a7d0644097f55f335ca5241b.torrent
```

Then specify this .torrent when running ctorrent.
The files will be downloaded as they are displayed on the technical tab of the details page.

```bash
$ ctorrent 30ac2ef27829b1b5a7d0644097f55f335ca5241b.torrent
```

## Python library

This repository is an implementation of the BitTorrent protocol written in Python and downloadable as a pip module. 

[https://github.com/academictorrents/at-python](https://github.com/academictorrents/at-python)

You can download datasets from AcademicTorrents.com in two lines of code:

```python
import academictorrents as at
path_of_dataset = at.get("323a0048d87ca79b68f12a6350a57776b6a3b7fb") # Download mnist dataset
```
