#Projet Setup
* complete the following guides:
  https://docs.nativescript.org/start/quick-setup
  
#Run on Android:
* if you want to use the android emulator (not necessary for running on physical device):
  https://docs.nativescript.org/tooling/android-virtual-devices
* plugin your android device and enable USB Debugging
* check for device id (e.g. '1') with:
`tns device`
* launch app on android device
  (at first run this will also download and install missing dependencies):
`tns run android --device 1`

#Run on iPhone:

* launch app on iPhone
`tns run ios --device 1`

##iOS Code Signing
http://stackoverflow.com/questions/38301229/how-to-run-apps-on-real-devices-using-xcode-8-without-enrolling-to-apples-devel
  
* Open beat.xcodeproj in XCode
* Preferences > Accounts > Add your Apple ID (only if not done yet)
* Select project file > General
* Signing: Choose your Apple ID in _Team_ and create provisioning profile