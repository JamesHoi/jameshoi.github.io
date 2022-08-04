function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.youtube.com") ||
        shExpMatch(url, "*.google.com") ||
        shExpMatch(url, "*.googlevideo.com")) {
        return "PROXY 192.168.1.106:7890; DIRECT";
    }
    return "DIRECT";
}