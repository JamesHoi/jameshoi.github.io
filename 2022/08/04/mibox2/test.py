import os

a = ["com.xiaomi.mitv.appstore","com.xiaomi.mitv.shop","com.xiaomi.miplay","com.duokan.airkan.tvbox","com.xiaomi.tweather",
    "com.xiaomi.tv.gallery","com.mitv.shoplugin","com.xiaomi.smarthome.tv","com.xiaomi.mitv.payment","com.xiaomi.mitv.advertise",
    "com.mitv.tvhome","com.mitv.gallery"]
ip = "192.168.1.107"

os.system("taskkill /f /t /im adb.exe")
os.system("adb connect "+ip)

for i in a:
    os.system("adb shell pm uninstall "+i+"\n")
    os.system("adb shell pm block "+i+"\n")
