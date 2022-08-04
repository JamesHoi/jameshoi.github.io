function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.youtube.com") ||
        shExpMatch(host, "*.google.com") ||
        shExpMatch(host, "*.googlevideo.com")) {
        return "PROXY 192.168.1.106:7890; DIRECT";
    }
    return "DIRECT";
}