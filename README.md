# About
This repository contains utilities useful for Datafrog SF2000 owners.

## Foreword
If you have some IT experience you might find some of the steps counter intuitive. Eg. pagefile.sys file being the menu background music. The reason for this weird naming convention on Datafrog's end is - obfuscation. They compile their OS in a way that obfuscates the, otherwise obvious, file system/structure.
Thus you end up modifying music by editing pagefile.sys file, which usually would be responsible for something entirely different on Win/Nix systems. There's much more examples of this, eg. there are files on the SD card named after popular windows .dll libraries, or even DirectX.

Takeaway is: this is intentional obfuscation of the OS. Backup all your files prior to modification and you will be okay.


## Playbooks

### How to remove the menu music
A lot of folks, including me, find the inbuilt menu music annoying. Currently there's no way to disable it from the software of the SF2000. At the same time parts of the system's OS are reverse engineered, thus allowing us to do such modifications.

To disable the menu music:
- backup the file from your SD card
> SD/Resources/pagefile.sys
- [download the substitution file](https://github.com/tzubertowski/sf2000-utilities/releases/download/sf2000/datafrog-sf2000-remove-music.zip), this one is an empty file with required file headers
- unzip it and copy "pagefile.sys" into your SD/Resources/pagefile.sys
- replace the original file

Insert the SD card back into the device, turn it on and notice the music no longer plays in the menu.
