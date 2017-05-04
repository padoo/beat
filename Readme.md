To run with android:

* complete the following guides:
  https://docs.nativescript.org/start/quick-setup
* if you want to use the android emulator (not necessary for running on physical device):
  https://docs.nativescript.org/tooling/android-virtual-devices
* plugin your android device and enable USB Debugging
* check for device id (e.g. '1') with:
`tns device`
* launch app on android device
  (at first run this will also download and install missing dependencies):
`tns run android --device 1`