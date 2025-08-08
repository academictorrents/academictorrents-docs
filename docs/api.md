# API

## Database Access

To ensure efficient and effective database searches, we recommend downloading the entire database (available at the following URL) and conducting searches on the locally saved file. 
This file is regularly updated on a nightly basis, allowing us to optimize performance and scalability by avoiding local searches.


Database: [https://academictorrents.com/database.xml](https://academictorrents.com/database.xml)


## Endpoint

Our API is constantly improving based on feedback from users. Please contact us if you are planning to use the API so that we can make it fit your needs better. The basic api is shown below.

Base API url: [https://academictorrents.com/apiv2/](https://academictorrents.com/apiv2/)

```
===Entries===
GET /apiv2/entry/INFOHASH  -- retreive data about an INFOHASH
POST /apiv2/entry  -- upload an entry
POST /apiv2/entry/INFOHASH  -- modity an entry

===Collections===
POST /apiv2/collection  -- create an collection 
POST /apiv2/collection/collection-name  -- update an collection 
POST /apiv2/collection/collection-name/delete  -- delete an collection 
POST /apiv2/collection/collection-name/add  -- add an item to a collection 
POST /apiv2/collection/collection-name/remove  -- remove an item from a collection 

===Testing===
GET /apiv2/test  -- test access rights
```


The API fields for uploading a entry to Academic Torrents are shown below. 
To upload a file you must send a POST request to https://academictorrents.com/apiv2/entry with the following parameters as well as your API Key.

```
name : "The title of the publication"
authors : "Author1 and Author2"
descr : "@article{,
		title = {The title of the publication},
		author = {Author1 and Author2},
		abstract = {Abstract}
	}"
category : 6
tags : "Tag1, Tag2"
urllist : "http://someurltoafile.com/file.pdf, http://anothermirror.com/file.pdf"
file: data:application/x-bittorrent;base64,ZDg6YW5ub3VuY2UzODp...vMRIjFFguASKUplZQ==
```


## Curl Examples

To use the above API Key you can use curl. Curl is a simple way of sending data the server just to test that our API is working. Below is the curl command to test your API key on our server. The -b option sets a cookie. We can use this to pass the API key and isolate it from the post data. 
The --data tag must be present to instruct curl that this is a POST request and not a GET request.

```
$ curl https://academictorrents.com/apiv2/test -b "uid=14;pass=71135221ceb8b5279cd15150d2126dcb" --data ""
Welcome to the API test!
You have made a POST request.
API Key Received: uid=14&pass=71135221ceb8b5279cd15150d2126dcb
Your username is joecohen
Everything seems fine, You should be able to use the API
```

You can also put the API Key directly in the POST request via the --data argument

```
$ curl https://academictorrents.com/apiv2/test --data "uid=14&pass=71135221ceb8b5279cd15150d2126dcb"
Welcome to the API test!
You have made a POST request.
API Key Received: uid=14&pass=71135221ceb8b5279cd15150d2126dcb
Your username is joecohen
Everything seems fine, You should be able to use the API
```

You can also put the API Key directly in the GET request.

```
$ curl https://academictorrents.com/apiv2/test?uid=14&pass=71135221ceb8b5279cd15150d2126dcb"
Welcome to the API test!
You have made a GET request.
API Key Received: uid=14&pass=71135221ceb8b5279cd15150d2126dcb
Your username is joecohen
Everything seems fine, You should be able to use the API
```

## Python Example

This is a Python API usage example. A tool that uses this code is here: [https://github.com/academictorrents/academictorrents_uploader](https://github.com/academictorrents/academictorrents_uploader)

```
# get base64 of torrent
f = open("file.torrent", 'rb')
b64_torrent = b64encode(f.read())
f.close()

post_params = {
    'uid' : "14",
    'pass' : "71135221ceb8b5279cd15150d2126dcb",
    'name' : "The title of the publication",
    'authors' : "Author1 and Author2",
    'descr' : """@article{,
		title = {The title of the publication},
		author = {Author1 and Author2},
		abstract = {Abstract}
	}""",
    'category' : "6",
    'tags' : "tag1, tag2",
    'urllist' : "http://domainname/backupfileurl.zip",
    'file' : b64_torrent
}

data = urlencode(post_params).encode('utf-8')
req = Request('https://academictorrents.com/apiv2/entry', data)

response = urlopen(req)
```




