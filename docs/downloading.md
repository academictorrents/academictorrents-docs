# Downloading

A [video](https://www.youtube.com/embed/mgONKmc52iI) about downloading


We recommend the Transmission torrent client which supports all major operating systems: https://www.transmissionbt.com/


## From the command line

For downloading from the command line you can use ctorrent locally or when connected over ssh to a server.
To install ctorrent run:

```
$ sudo apt-get install ctorrent  ## for Ubuntu/Debian
$ sudo yum install ctorrent      ## for Fedora/Red Hat
$ brew install ctorrent          ## for Mac OSX
```

To use ctorrent you first need to download the .torrent file of the file/files that you want.
You can do this using wget from the command line:

```
$ wget http://academictorrents.com/download/30ac2ef27829b1b5a7d0644097f55f335ca5241b.torrent
```

Then specify this .torrent when running ctorrent.
The files will be downloaded as they are displayed on the technical tab of the details page.

```s
$ ctorrent 30ac2ef27829b1b5a7d0644097f55f335ca5241b.torrent
```
