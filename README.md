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