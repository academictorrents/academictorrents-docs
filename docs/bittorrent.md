# BitTorrent

BitTorrent is a peer-to-peer (P2P) file-sharing protocol that enables efficient distribution of large files. It achieves this by breaking files into smaller pieces and distributing them among a network of users, known as "peers." Each peer shares these pieces with others, allowing for simultaneous downloading from multiple sources.

The protocol relies on a central tracker, which keeps track of the location of file pieces and the peers sharing them. When a user wants to download a file, they connect to a tracker (such as Academic Torrents) to obtain a list of peers with the file. The user then connects to these peers and starts downloading the file pieces.

One of BitTorrent's key features is its "swarm-based" nature. As more users download a file, the number of available sources for other users to download from increases. This ensures fast and reliable downloads, even with a growing number of users.

BitTorrent is decentralized, meaning there is no central server or authority controlling file distribution. This eliminates single points of failure that could disrupt the network.

Numerous open-source BitTorrent clients are available. These clients handle connecting to trackers, downloading file pieces, and managing data upload and download. This diversity and accessibility of clients prevent a single entity from gaining monopolistic control and imposing charges or restrictions on usage.

## Pieces

In BitTorrent, files are broken down into small pieces. Historcially the sizes are between `64` and `256` KiB in size but for Academic Torrents they can go up to `8192` or `16384` KiB to better handle large files. Each of these pieces is then assigned a (hopefully) unique cryptographic SHA1 hash, which is used to ensure the integrity of the data by the clients. This means that when a user downloads a piece of a file, they can compare the hash of the piece they received to the one that was originally computed by the file creator, to ensure that the data has not been tampered with or corrupted.

![](_static/img/pieces.png)

When a user first creates a new file to share using BitTorrent, they first compute the hash of each piece of the file and create a "metadata" file, also known as a ".torrent" file. This file contains the list of hashes for all the pieces of the file, as well as information about the file itself, such as filenames, sizes, and the address of the tracker.

The use of cryptographic hashes in BitTorrent helps to ensure the integrity of the data being shared on the network, and helps to prevent the spread of corrupted or tampered files. This is particularly important for large files, where a single corrupted piece can render the entire file unusable. When receiving a piece from a peer the hash of the piece is computed. If the hash matches what is contained in the metadata, the user knows that the piece is an authentic and uncorrupted version of the file. However, if the hash does not match, the user knows that the piece is corrupt and needs to be redownloaded.

When a corrupt piece is detected, the BitTorrent client will typically mark the piece as "bad" and request a new copy from one of the other peers that the client is connected to. A piece may become corrupted due to a problem with the storage media, a network error, or even an intentional attack. Using hashing in this fashion allows the identification of a small corrupt piece in a large file so the entire file won't need to be restored. 

![](_static/img/pieces-corrupt.png)


## Trackers

In BitTorrent, a "tracker" is a server that keeps track of the location of all the pieces of a file and the peers that are currently sharing them. When a user wants to download a file, they connect to the tracker, which provides them with a list of peers that have the file. The user then connects to these peers and begins downloading the pieces of the file. The requesting user is added to the tracker and will be shared on subsequent requests.

The tracker plays a crucial role in the BitTorrent network by coordinating the distribution of files among peers. It maintains a list of peers sharing a file and the percentage of the file they have. Peers connect with each other to determine which pieces they have.

In recent years, some clients have adopted a technique known as "trackerless" or "DHT" (Distributed Hash Table). This technique eliminates the need for a central tracker and relies on a distributed system of nodes to keep track of peers and files, making the network more resilient.




















