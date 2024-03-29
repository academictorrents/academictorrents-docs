# Frequently Asked Questions

## Cannot connect to tracker

If your BitTorrent client cannot connect to the tracker first diagnose why using the follow command:

```
$curl https://academictorrents.com/announce.php
```

You should see the failure message `"d14:failure reason24:Invalid info_hash (0 - )e"` if you can connect. If it doesn't work then run `curl -vvv` to get details on the error.

## People cannot connect to your server

To ensure optimal mirroring/seeding performance, it is important that the port your BitTorrent client is listening on is accessible from the internet. This may require allowing a port in a firewall or setting up port forwarding in a router.

You can check if the tracker can connect to your client's port by looking at the `Connect` column on the Technical tab of the Details page. If it says `Yes`, the tracker can successfully connect to the port.

You can verify this yourself from a computer outside of your network with the following command:

```
nc -v {serveraddress} {port}
```

An example of a successful connection will look like:

```
$ nc -v host2.academictorrents.com 25000
Connection to host2.academictorrents.com port 25000 [tcp/icl-twobase1] succeeded!
```

An example of a unsuccessful connection will look like:

```
$ nc -v host2.academictorrents.com 25001
nc: connectx to host2.academictorrents.com port 25001 (tcp) failed: Operation timed out
```


## Transmission HTTP Response code 0 (No Response)

This error seems to be associated with an erroneous default IPv6 configuration in Transmission causing the client to make requests incorrectly. The steps to fix this problem are as follows:

Shut down transmission-daemon (service transmission-daemon stop)
Edit the settings.json file (default location: /etc/transmission-daemon/settings.json)

Change "bind-address-ipv6": "fe80::", 
to "bind-address-ipv6": "::",

Restart transmission (service transmission-daemon start)





