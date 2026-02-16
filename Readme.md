# Coffee Harvest Tracker
## Proof of concept
A visualization tool for coffee harvesting schedules and flavor profiles.

This proof of concept demonstrates a functional webpage containing all the necessary components to complete this project.
These components include the following:
* A basic react web-app
* A random coffee image produced by CoffeeAPI
* The ability to grab and parse csv data from the CQI database
* The ability to grab and parse data from locally hosted JSON files
* Interactive maps through the Leaflet.js library

Future features not included in the scope of the project proposal but could be added if needed include:
* Running the jldbc scraper for the Coffee Quality Institute server-side to ensure the most up-to-date dataset is obtained
* Cross-referencing bean availability through a distributor such as Coffee Bean Corral

## Setup
### Development environment
Python 3.14.3 was used for the development of this proof of concept. The only package necessary for this project is
nodeenv, which is used to install node.js, React, and npm. I recommend installing these under a python virtual environment
for this project. For Windows 11, this process is as follows:

In the project's root directory folder:
```
py -m venv venv
.\venv\Scripts\activate
pip install nodeenv==1.10.0
```
Install dependencies with npm.
```
cd .\client
nodeenv -p
npm install
```
Note: PowerShell may need administrative permissions to run > nodeenv -p

### The following list describes the npm packages installed for this project. These are additionally detailed in package.json
* @eslint/js@9.39.2
* @types/react-dom@19.2.3
* @types/react@19.2.14
* @vitejs/plugin-react@5.1.4
* eslint-plugin-react-hooks@7.0.1
* eslint-plugin-react-refresh@0.4.26
* eslint@9.39.2
* globals@16.5.0
* leaflet@1.9.4
* papaparse@5.5.3
* react-dom@19.2.4
* react-leaflet@5.0.0-rc.2
* react@19.2.4
* vite@7.3.1


## Launching Web-app
On Windows 11, launch the web application locally through:
```
cd .\client\
npm run dev
```

## Sources and dependencies:
* [CoffeeAPI](https://coffee.alexflipnote.dev/)
* [Leaflet.js](https://leafletjs.com/examples/quick-start/)
* [CQI Database](https://github.com/jldbc/coffee-quality-database)
