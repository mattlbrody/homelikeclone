## TheHomelike.com replica

A functional and visual replica of thehomelike.com built using React and Redux with data I was able to get from their API.

This is how I did it.

### The data

First, I needed to get data to pull in to use when displaying cities, apartments, pictures, etc.

I did this by pulling in JSON 'snapshots' from the main app. I found the API headers and was able to create JSON files for each city containing 24 apartments per city.

While there was extensive data, it was limited compared to the full app. This is why some of the filters (date and more) are not functioning in the app. There is also additional apartment data missing at the bottom of the apartment drawer simply because the data wasn't scrapped.

### The cities that can be searched

Berlin,
London,
Vienna,
Barcelona,
Frankfurt,
Zurich,
Cologne,
Hamburg,
Munich,

I could have pulled in as many cities as I wanted, but figured this would be enough to demonstrate what the app can do.

### Filters

These can be used to specify what the user wants in an apartment.

I changed some of the design to reduce user clicks, which I believe would good UX to test. For Price, Guests, Bedrooms, and Size, I removed the apply filter buttons and instead made each filter automatically take effect when it's changed. This allows users to see the change immediately, even while the filter is still open.

### Design resources

A lot of the design layout was built using Material UI, this simplified the project significantly as the design style is similar to thehomelike.com. 

Material UI also provided some basic functionality, such as dropdowns for the filters and the drawer which displays each apartment.

Whatever wasn't done using Material UI was built with CSS.

Font Awesome was used for the icons. I could have matched most of the icons exactly if I would have paid to use Font Awesome, but that seemed unnecessary.

### React and Redux

This is a fairly complex application with a lot of different components, which makes react and redux ideal for this project.

The data is stored in the redux store and then sent out to each component that needs it, which makes this app much more manageable than a pure react app.

### Google Maps

This was done using react-google-maps.

The map changes based on what city is being searched. 

I might add each apartment as a marker, and have each marker display that apartment when it's clicked, but that'll be functionality for the next version.

### Responsiveness

while the app is responsive, a lot of the functionality is not. On the main app, a new page is opened when an apartment is clicked. This is functionality that was intentionally left out. 

Additionally, the filters are not responsive either.

Both of these features will be added if I do a version 2.