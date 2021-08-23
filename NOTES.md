<style>
    imp {
        color: red
    }
</style>

# Getting Started

A react-native app can be created either using the `expo-cli` or the `react-native cli`.
The `expo-cli` is simpler to use since it is independent of android studio or xcode
`expo-cli` projects can be made into `react-native cli` projects using `expo eject`

- Install expo-cli npm package
- Initialize project using `expo init <project name>`

# dependencies
- react-native-paper
- expo-linear-gradient

# Running the App
- Using the expo app and scanning QR code generated after `expo start`
- use Vysor to connect to your phone via USB and control it on your PC (enable USB debugging).
- To use LAN, both PC and phone must be on the same network, say a hotspot connection between them

# App.js Boilerplate code
- React-Native's components are all `flex` containers by default with `flexDirection` set to `column`.
- `justifyContent` is used to align items along the main-axis of a flex container.
- The default `View` component is the container for all elements. It is given a `flex` of `1` which is actually, `flexGrow: 1`. This way, is spans the whole viewport.
- `Constants.statusBarHeight` from the `expo-constants` module can be used to access the height of the status bar of the mobile device (the bar at the top).

# styling components

## Inline styles
These can be added by simply adding a `style` prop to the component and giving it an object that contains the styles.
The style prop takes a value in JSX.
```jsx
const Home = () => {
    return (
        <Text style={{backgroundColor: "yellow"}}> Hello There </Text>
    )
}
```
Notice that the styles use camel-casing to name properties.

## Creating style objects

### normal JS objects
```jsx
const Home = () => {
    return (
        <Text style={myStyles.textComp}> Hello There </Text>
    )
}

const myStyles = {
    textComp: {
        backgroundColor: "yellow",
        color: "green",
    }
}

```

### React-Native Stylesheet Object
```jsx
import { Stylesheet } from 'react-native';

const Home = () => {
    return (
        <Text style={myStyles.textComp}> Hello There </Text>
    )
}

const myStyles = Stylesheet.create({
    textComp: {
        backgroundColor: "yellow",
        color: "green",
    }
})

```

`Stylesheet.create` provides convenience due to error-checking, editor suggestions. 

## Images
To add an image, we need the `Image` component from `react-native`.
```jsx
<Image 
    source={{uri:"<some path/URL to an image>"}}
    style={{height: 50, width: 50}} 
/>

```

The width and height of the Image component is added in the style props

## rendering components from an Array
### Using Array.prototype.map
Supposing we have an Array of objects from which we plan to render similar components with different data only.
```jsx
const data = [
    {id: 1, name: "Jibril Markensen", role: "Frontend Developer"},
    {id: 2, name: "Olen Inar", role: "Backend Developer"},
    {id: 3, name: "Uzbek Rayaan", role: "Devops Engineer"},
    {id: 4, name: "John Sayers", role: "Project Manger"},
]
```

We can use the map function to generate a list of JSXElements - the kind of elements that are rendered by react.
```jsx
const renderList = data.map(singleRecord => {
    return (
        <View key={employee.id}>
            <Text>Name: {employee.name} </Text>
            <Text>Position: {employee.role} </Text>
        </View>
    )
})
```
Note that each JSXElement created from each element (`singleRecord`) of the array (`data`)
should have a unique key assigned to it.

Then after this list is created, the main return of the component should return this list wrapped in a view.
```jsx

return (
    <View>
        {renderList}
    </View>
)

```

Altogether,
```jsx
const someComponent = () => {
    // array of objects from which rendered elements will be formed
    const data = [
        {id: 1, name: "Jibril Markensen", role: "Frontend Developer"},
        {id: 2, name: "Olen Inar", role: "Backend Developer"},
        {id: 3, name: "Uzbek Rayaan", role: "Devops Engineer"},
        {id: 4, name: "John Sayers", role: "Project Manger"},
    ]

    // creating array of elements to be rendered
    const renderList = data.map(singleRecord => {
    return (
        <View key={employee.id}>
            <Text>Name: {employee.name} </Text>
            <Text>Position: {employee.role} </Text>
        </View>
    )
    })
    
    // main return of component
    return (
        <View>
            {renderList}
        </View>
    ) 

}
```

### Using react-native's Flatlist
React-Native's `Flatlist` is more optimized for large datasets and comes with a default 'ScrollView' functionality. 
```jsx
const someComponent = () => {
    // array of objects from which rendered elements will be formed
    const employeeList = [
        {id: 1, name: "Jibril Markensen", role: "Frontend Developer"},
        {id: 2, name: "Olen Inar", role: "Backend Developer"},
        {id: 3, name: "Uzbek Rayaan", role: "Devops Engineer"},
        {id: 4, name: "John Sayers", role: "Project Manger"},
    ]

    // function that creates JSXElement of a single element of the `employeeList` array
    const renderList = singleRecord => (
            <View>
                <Text>Name: {employee.name} </Text>
                <Text>Position: {employee.role} </Text>
            </View>
        )
    
    // main return of component
    return (
        <View>
            <Flatlist
                data={employeeList} // the dataset from which the JSXElements are created
                renderItem={ ({ item }) => renderData(item) } // returns a function that creates the JSXElements from each item of the given `data`
                keyExtractor={ (item) => item.id } // get the unique key of each item
            />
        </View>
    ) 
}
```

# onPress
An `onPress` prop can be added to components. The value of this prop should be a function to handle the `press` event.

# Linking
The Linking component from `react-native` is used to open links to other applications on the phone as well as hyperlinks to websites.
```jsx
// open a website link
Linking.openURL("https://www.somewebsite.com")
// open a mailing app on the device
Linking.openURL("mailto:<some_email_address>")

// open the phone app - android
Linking.openDial("tel:<phone_number>")
// open the phone app - iOS
Linking.openDial("tel:<phone_number>")
```

# React navigation
This feature is used to switch between different screens of the same app.

## installing packages
```sh
npm install @react-navigation/native
expo install react-native-screens react-native-safe-area-context

# package to handle  
npm install @react-navigation/stack react-native-gesture-handler
```
> To finalize installation of react-native-gesture-handler, add the following at the top (make sure it's at the top and there's nothing else before it) of your entry file, such as index.js or App.js:
```js
import 'react-native-gesture-handler';
```

## Adding navigation to App
First import 
- `react-native-gesture-handler` at the top of the entry file, `App.js`.
- `NavigationContainer` from `react-navigation/native`
- `createStackNavigator` from `react-navigation/stack`

```jsx
const Stack = createStackNavigator();

function App () {
    return {
        <View>
            // Stack.Navigator Component only contains Stack.Screen components 
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Contact" component={ContactUs} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        </View>
    }
}

export default () => (
        <NavigationContainer>
            <App />
        </NavigationContainer>
);
```

To actually navigate between screens, add an onPress prop to a component within one screen 
that should trigger a navigation to another screen. The `navigation` function is passed as a prop to each Stack.Screen's `component`.
use `navigation.navigate("<name of screen to navigate to>")` to navigate to a screen.
```jsx
// Home Component

const Home = (props) => {
    
    return (
        <View>
            <FAB
                // trigger navigation to About screen
                onPress={() => props.navigation.navigate("About")}
                icon="plus"
            >
            To about screen
            </FAB>
        </View>
    )
}

```

## Customizing Navigation Header

### Removing the header
Set then `headerMode` of the `Stack.Navigator` component to `none`

### header options
Each screen can have its custom header settings set using the `options` prop.
The options prop accepts an Object that contains different properties of the header that can be tweaked including 
- `headerStyle`: CSS styling
- `title`: The text shown in the header
- `headerTintColor`: header text colour

### navigate to different screens including route parameters
If you need to pass some data between screens (routes), example to pass specific info about an item, in a list displayed on one screen, to its detail screen, then we can pass an extra argument to `navigation.navigate`. 
This extra argument is called a route parameter - essentially an Object of data you want to pass.
```jsx
// Products list screen
navigation.navigate("Product Detail", {name: "Glass Mug", price: "45.00", discount: "0.02"})

// Product Detail screen - the screen that is navigated to

<Text>Item Name: {props.route.params.name}</Text>
<Text>Price Tag: {props.route.params.price}</Text>
<Text>Discount (out of 1): {props.route.params.discount}</Text>
``` 

# Accessing Native Camera/Image picker
## Install Required Packages
First install `expo-image-picker` package. 

## Required Imports
```jsx
import * as ImagePicker from 'expo-image-picker';
// for permissions
import * as MediaLibrary from 'expo-media-library'
import * as Camera from 'expo-camera'
```

## Procedure
1. request permission to use either camera or access media library
2. get image from source

```jsx
// To get image from Media Library
const getImageFromMediaLibrary = async () => {
    const { permissionGranted } = await MediaLibrary.requestPermissionsAsync();

    // if permission is granted
    if (permissionGranted) {
        // launch image picker
        let imageData = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images, // restrict to show only images
            allowsEditing: true, // allow cropping of picked image
            aspect: [1, 1], // aspect ratio
            quality: 0.7, // image quality -> from 0 to 1
        })

        console.log(imageData)
        
    } else {
        // alert user 
        Alert.alert("Permission to access files is required to upload image");
    }
}
```
To get image from camera use:
`Camera.requestPermissionsAsync()` instead of `MediaLibrary.requestPermissionsAsync()`

and

`ImagePicker.launchCameraAsync({})` instead of `ImagePicker.launchImageLibraryAsync({})`

## Uploading to Cloudinary
In this app, we uploaded to Cloudinary without using an SDK, we accessed the REST API directly. 
So the endpoint is: `https://api.cloudinary.com/v1_1/<cloudinary_account_name>/image/upload`.

<imp>**The file is sent in a particular JSON format, and this is very important else the upload will fail with an error!**</imp>. It took me days to figure it out, It actually slowed me down for about 3 days :sob:. 

This post helped me in solving the problem: [Expo Blog: braulio_valle](https://forums.expo.dev/t/network-request-failed-while-uploading-image-to-server/30737/5)

So basically, to upload the file we need to get a <imp>*file name*, *mime type*, and the *data URI* all in an object with specific keys </imp>.
As follows:
```js
const imageObjectToBeUploadedToCloudinary = {
    name: "some string", // file name
    type: "image/extension-related-name" , // mime type
    uri: "file:///some/long/path.extension" , // data URI
}
```
The URI of the image is gotten from the `imageData` returned after picking the image using `ImagePicker`. The mime type can be derived from the URI as well using the file extension or using a third-party package. 


# THE BACKEND WITH NODE, EXPRESS, AND MONGODB
# Requirements
- `express`
- `mongoose`

# Creating the Server
We are going to create a server with `express`
So we import our packages and then instantiate our server using `express()`
Typically:

```js
const 
    express = require("express"),
    app = express();
   
// add a root server path
app.get('/', (req, res) => {
    res.send("welcome to node js");
})   

// to activate server listening on port 3000:
app.listen(3000, () => {
    console.log("server running");
})

```

# Setting Up MongoDB
1. Create a database (a cluster).
2. Go to the `Network Access` tab and configure IP addresses that will be allowed to access the DB.
3. Go to the `Database Aceess` tab and add a DB user.
4. Go to the `Databases` tab to access the DB that was created, click on `Connect` to connect to the application.

# Creating a MongoDB model
The model is the document to be stored in the DB.

Define its schema first
```js
// Employee.js
const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
    name: String,
    phone: String,
    // ...
})

// mongoose.model("<modelName>", <modelSchema>)
mongoose.model("employee", EmployeeSchema)
```

The model doesn't need to be stored in a variable and exported, just require the file where it was created with its schema, then access the model using `mongoose.model(<modelName>)`. 

So to access the model created in the previous code snippet:
```js
require('./Employee');

mongoose.model("employee")

```
# Connecting to the MongoDB Database
```jsx
// create connection
// mongoose.connect("<mongo DB URL>", {...options})
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
   UseUnifiedTopology: true
});
   
mongoose.connection.on("connected", () => {
    console.log("connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
    console.log("Error while connecting to MongoDB:", err);
});
   
```

# Making post data route handler

## configuring POST request body type 
First things first, we have to tell our node server how to treat request bodies. 
In this case the client will be sending JSON in the POST body, so our server should be able to handle this.
To configure this, put this line before any route that must treat request body as JSON: 
`app.use(express.json())`

## POST Route
```js
app.post('/send', (req, res) => {
    // log request body
    console.log(req.body)

    // send response
    res.send("data received")
})

```