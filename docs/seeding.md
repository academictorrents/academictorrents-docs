# Seeding

We would like to avoid the blind mirroring of all data. We provide RSS feeds for subsets of all the torrents grouped into collections.

Per collection RSS feeds allow you to mirror only collections you care about. Each collection has it's own unique RSS feed. You can add the RSS feeds found on this page: http://academictorrents.com/collections.php You can mirror these RSS feeds automatically with a BitTorrent client such as uTorrent or qBitTorrent. 


## Smartnodes

We are slowly making progress on tools which automatically download and manage torrents. The current development repo is here: https://github.com/academictorrents/smartnode-transmission 

The goals of this project are as follows:

- Smart BitTorrent client (Not just syncing an RSS feed)
- Mirrors based on resources donated
  - Limit by space
  - Limit by RSS feed
  - Limit by bandwidth
- Dynamically select in-need data
  - Low peers
  - Not geographically distributed
  - Slow downloads
- Completely client side 








