#!/system/bin/sh

echo '
#!/system/bin/sh

my_p=com.mitv.tvhome
while [ $( pgrep -f $my_p | wc -l ) -eq 0 ]
do
    sleep 1
done
sleep 4
settings put global adb_enabled 1
monkey -p net.i.akihiro.halauncher -c android.intent.category.LAUNCHER 1
' > /data/init.sh

/data/init.sh &