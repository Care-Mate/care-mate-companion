# Care-Mate Companion

This is the companion application for the Care-Mate Wheelchair Pressure Distribution System.
The application has been tested on a Google Pixel 3 phone running the Android operating system.

# Features
- Connect to the companion pressure pad via BlueTooth.
- Calibrate data based on the current readings of the connected pressure pad. 
- Display pressure maps for both seat and back pressure pads.

# Setup
These instructions will show you how to run the development version of the application on your local machine.

1. Install NPM, then install the Ionic framework:

```
npm install -g @ionic/cli
```

2. Download this repository and extract it somewhere on your computer. 
Open this directory in the command line.

3. Install the other dependencies of this project, based on package-lock.json:
```
npm ci
``` 

4. Run the Ionic development server:
```
ionic serve
```

# Deployment to an Android Device
These steps are needed to put the Care-Mate companion application on a physical Android device.

1. Build the app for production use:
```
ionic build
ionic cap add android
```

2. Download and install Android Studio, provided for free by Google.

3. Open the built Android application in Android Studio.
Ionic provides a helper command for this:
```
ionic cap open android
```

4. Open the AndroidManifest.xml file, which Android Studio usually opens automatically.
Verify that the following lines are included:
```
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

5. Connect an Android device to your computer.

6. Select the attached device in the dropdown menu next to the run button (on the top toolbar), then click the "Run" button to build, install, and launch the application on the Android device.

7. After any change in the Ionic web assets, run the command
```
ionic capacitor copy android
```
to load the new artifacts into the location expected by Android Studio.

