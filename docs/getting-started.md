# Getting Started

Welcome to Academic Torrents! This guide will help you understand the basics of using our platform for sharing and downloading academic datasets.

## What is Academic Torrents?

Academic Torrents is a distributed system for sharing large academic datasets using BitTorrent technology. Unlike traditional file hosting services, Academic Torrents distributes the burden of hosting data across a network of users, making it more resilient and cost-effective for researchers.

## Key Concepts

### INFOHASH
A unique 40-character hexadecimal identifier for each torrent file. It's calculated from the torrent's metadata and serves as a permanent, unique reference to that specific dataset. You can find the infohash in the torrent's details page URL or by examining the torrent file itself.

### Torrent File
A small metadata file (usually with a `.torrent` extension) that contains information about the dataset, including file names, sizes, and the tracker information needed to download the data.

### Seeding
The process of sharing data you have downloaded with other users. When you seed a torrent, you become part of the distribution network, helping others download the dataset faster.

### Tracker
A server that coordinates the distribution of data between users. Academic Torrents operates its own tracker to manage the sharing of academic datasets.

### Magnet Link
A URI that contains the infohash and tracker information, allowing you to download a torrent without first downloading a `.torrent` file.

### Peers and Swarm
- **Peer**: Any user participating in downloading or uploading a torrent
- **Swarm**: The collective group of all peers sharing a particular torrent
- **Leecher**: A peer that is downloading but not yet sharing the complete file
- **Seeder**: A peer that has the complete file and is sharing it with others

### Backup URLs (WebSeeds)
HTTP URLs that provide alternative download sources when BitTorrent peers are unavailable. These bypass firewalls and provide fallback access to datasets.

## Why Use Academic Torrents?

### Benefits for Researchers
- **Cost-effective**: No expensive cloud storage fees for large datasets
- **Resilient**: Data remains available even if original hosts go offline
- **Fast downloads**: Multiple sources provide faster download speeds
- **Permanent access**: Datasets won't disappear due to hosting changes
- **Version control**: Each version gets a unique identifier
- **Global distribution**: Data automatically spreads to researchers worldwide

### Benefits for Institutions
- **Reduced bandwidth costs**: Distribute hosting load across the community
- **Compliance friendly**: Maintain control over your data while sharing it
- **Academic focus**: Platform designed specifically for research needs
- **Long-term preservation**: Community-driven data preservation

## System Requirements

### For Downloading
- **Operating System**: Windows, macOS, or Linux
- **BitTorrent Client**: We recommend Transmission (free, open-source)
- **Internet Connection**: Broadband recommended for large datasets
- **Storage Space**: Enough free space for the datasets you want to download

### For Uploading/Seeding
- **Stable Internet**: Reliable connection for consistent sharing
- **Open Ports**: Some routers may need port forwarding configuration
- **Adequate Bandwidth**: Consider your upload limits when seeding multiple datasets

## Choosing the Right BitTorrent Client

### Recommended: Transmission
- **Free and open-source**
- **Available on all platforms**
- **Simple, clean interface**
- **Low resource usage**
- **Excellent for academic use**
- **Download**: [transmissionbt.com](https://www.transmissionbt.com/)

### Alternative Clients
- **qBittorrent**: Feature-rich, open-source alternative
- **Deluge**: Lightweight, plugin-extensible client
- **rtorrent**: Command-line client for servers

## Quick Start

### For Downloading Data
1. **Browse datasets** at [academictorrents.com](https://academictorrents.com)
2. **Install a BitTorrent client** (we recommend [Transmission](https://www.transmissionbt.com/))
3. **Find a dataset** you need using the search function
4. **Download the torrent** by clicking the "Download" button or copying the magnet link
5. **Open in your client** by double-clicking the `.torrent` file or pasting the magnet link
6. **Choose download location** and start the download
7. **Keep seeding** after download to help others access the data

### For Sharing Data
1. **Create an account** at [academictorrents.com](https://academictorrents.com)
2. **Prepare your dataset** - organize files and create documentation
3. **Create a torrent file** using your BitTorrent client
4. **Upload your torrent** using the [upload form](https://academictorrents.com/upload.php)
5. **Fill in metadata** - title, description, category, tags
6. **Start seeding** to make your data available
7. **Monitor and maintain** your uploads over time

## Step-by-Step: Your First Download

### Step 1: Install Transmission
1. Visit [transmissionbt.com](https://www.transmissionbt.com/)
2. Download the version for your operating system
3. Install following the standard process for your OS
4. Launch Transmission

### Step 2: Find a Dataset
1. Go to [academictorrents.com](https://academictorrents.com)
2. Use the search bar or browse categories
3. Click on a dataset that interests you
4. Read the description and check the file size

### Step 3: Download the Torrent
**Option A: Torrent File**
1. Click the "Download" button
2. Save the `.torrent` file to your computer
3. Double-click the file to open in Transmission

**Option B: Magnet Link**
1. Right-click the magnet link
2. Copy the link address
3. In Transmission: File → Open URL → Paste the link

### Step 4: Configure Download
1. Choose where to save the files
2. Select which files to download (if it's a multi-file torrent)
3. Set bandwidth limits if needed
4. Click "Add" to start downloading

### Step 5: Monitor Progress
1. Watch the download progress in Transmission
2. Check download speed and peers connected
3. Be patient - large datasets may take time
4. Leave Transmission running to continue downloading

## Common Issues and Solutions

### Slow Downloads
- **Check peers**: Look for torrents with more seeders
- **Port forwarding**: Configure your router for better connectivity
- **Bandwidth limits**: Remove or increase download limits
- **Peak hours**: Try downloading during off-peak times

### Can't Connect to Tracker
- **Firewall**: Check if your firewall is blocking Transmission
- **ISP blocking**: Some ISPs block BitTorrent traffic
- **Proxy settings**: Configure proxy if required by your network
- **Try magnet links**: Sometimes work when tracker URLs don't

### Files Won't Start Downloading
- **Check file availability**: Ensure there are active seeders
- **Restart client**: Sometimes helps refresh connections
- **Re-add torrent**: Delete and re-add the torrent
- **Check disk space**: Ensure you have enough free space


## Next Steps

### Learn More About the Platform
- **[About Academic Torrents](about.md)**: Learn about our mission and team
- **[BitTorrent Technology](bittorrent.md)**: Understand the underlying technology
- **[FAQ](faq.md)**: Find answers to common questions

### Start Using Academic Torrents
- **[Downloading Guide](downloading.md)**: Detailed instructions for downloading datasets
- **[Uploading Guide](uploading.md)**: Complete guide to sharing your research data
- **[API Documentation](api.md)**: Programmatic access to Academic Torrents
- **[Searching](searching.md)**: Advanced techniques for finding datasets

### Join the Community
- **[Mirroring](mirroring.md)**: Help host data and support the community
- **Contributing**: Share your datasets and help others
- **Feedback**: Let us know how we can improve the platform
