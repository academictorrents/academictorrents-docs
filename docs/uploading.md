# Uploading

## Overview

There are many different ways to put data on the site. Please contact us if you are unsure how to share your data. The upload form is here: [http://academictorrents.com/upload.php](http://academictorrents.com/upload.php)

Note that we don't host your data directly. Although we do manage a network of donated servers. A torrent file is uploaded to the site and then hosting nodes (seeds) register with the tracker as places to download the data from. A Backup URL can be used in place of hosting the file using BitTorrent that will allow the benefits of our platform of servers that will mirror the data.

## Tutorials

Academic Torrents - How to upload for researchers

<iframe src="https://www.youtube.com/embed/PVsTwlYxGPo" style="max-width:100%"  width="640" height="480" frameborder=0 allowfullscreen></iframe>


## Piece sizes

The piece size of a torrent is the size of the smallest chunk of the file that is sent between torrent clients. Valid sizes are powers of 2. If the total number of pieces is large then it will a lot of small transactions will have to happen when downloading and may require a lot of CPU because each piece needs to have its hash computed in order to verify it is correct. If the piece size is too large then the transmission may fail in the middle and require the entire piece to be sent again. 

We recommend relativly large piece sizes (`8192` or `16384` KiB) because academic connections are typically good enough to not produce errors at this size and a very large file with a small piece size could yield so many pieces that it is a computational burden to download it.


## Backup URLs

When a user downloads a torrent, in the event that BitTorrent is blocked or if there are no seed nodes, a list of "Backup URLs" can be maintained dynamically. These URLs can be updated on the website and then are injected into the torrent file when it is downloaded. These will bypass firewalls because it looks like regular web browsing. The experience is the same as downloading the torrent normally when using a BitTorrent client which supports (such as Transmission).

A "Backup URL" which is an HTTP URL linking to the data file (or if it is a directory then the URL minus the folder name). 

In the case of a folder it is important to use the correct path. If the files are in a folder named `sourcedata` and the files are on a server under this path `http://server/folder/sourcedata/` then the Backup URL would be `http://server/folder/`

Here is an example torrent with a backup url: http://academictorrents.com/details/cf445f6073540af0803ee345f46294f088e7bba5

The backup url is "https://files.inria.fr/" because the folder that contains the files is aerialimagelabeling and they can be accessed like this: https://files.inria.fr/aerialimagelabeling/aerialimagelabeling.7z.001

Note: this is only the case for torrents which are created from folders. If the torrent is just a single file then you specify the direct path.

### RANGE queries

BitTorrent clients will use HTTP RANGE queries to select the pieces they want to download. If this is not available then the client will try to download the entire file at once which can fail if the file is too large or the connection is unstable.

Most webservers will support this (such as Apache and NGNIX) but less featured webservers such as the python http.server do not have this feature.

### Hosting providers that work as Backup URLs

Almost all paid providers work work perfectly as Backup URLs while almost all free hosting provders (Google Drive, Dropbox) do not work as Backup URLs. Here is a list of free providers which will provide HTTP URLs that can be used as Backup URLs:

- [https://archive.org](https://archive.org)





