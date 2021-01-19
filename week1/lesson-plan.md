# Lesson Plan - Hello, world (and more) in React Native

- Hello world in React Native
- A general overview of React Native
- An overview of Expo
- React for mobile
- Primitive components
  - `View`
  - `Text`
  - `Image`
  - `ScrollView`
  - `TextInput`
- Platform-specific code


## Hello, world in React Native

Install CLI and bootstrap application

Before installation, make sure you have a recent [version of node installed on your machine](https://nodejs.org/en/download/). So anything from node version 12 should suffice. 

Also, ensure you've setup the expo client on your device and signed up for an expo account.

```bash
npm install -g expo-cli # or yarn global add expo-cli
```

```bash
expo init my-weather-app # Select the blank template (under the managed workflow)
cd my-weather-app
npm start # or yarn start 
```

This will open a browser window with the web client of expo. You can scan the QR code generated with your device to load up the project in Expo client on your phone.


Open the code in your editor and notice the project structure

```

/my-weather-app
├── App.js
├── app.json
├── assets
├── babel.config.js
├── node_modules
├── package.json
├── pbcopy
└── yarn.lock
```

Not too unlike something you'd generate with `create-react-app`, right 😎. 

*➡️ Now update the content of your `App` component in the in your `App.js` to the following:*

```
<Text>Hello world!</Text>

```

Save the file.

You should now see this in your Expo client

<img src="/week1/assets/hello-world.png" alt="drawing" width="200"/>

And we're off 🚀!

You've just succeeded in setting up all the tools we need to get out app to fully working (and useful) state.

From here on out, what we'll be doing now is building on your knowledge of JavaScript and React and tailoring it to Platform.

## A general overview of React Native

React Native  allows you to build universal React applications. This means that React Native handles all the complex "bridge" code we would have had to build ourselves to talk to native APIs on the iOS and Android platforms. There are a few key differences worth mentioning here:

- We're no longer dealing with the DOM or HTML. So while you'll still use the component-based approach you picked up from React (or similar framework), you'll no longer be dealing with really any browser-based Web APIs or technologies. So no SVG, Canvas, etc. This also means you won't be able to pull in your favorite React module that may allow you to implement some cool feature with any of these technologies.
- No more CSS Animations. In fact, we'll deal with a whole new way of styling but still quite familiar if you've used CSS-in-JS frameworks. (You can even use cool options like styled-componets for react native for styling)
- Navigation works quite differently on native. It's a stack-based navigation that's unlike web. 
- Native Platforms (quite like browser vendors) have different UI guidelines. This often means you'd need to tailor your design and code to the platform.

We'll touch on each of these in detail as we go through the course. 

## An overview of Expo

Before we go any further, it is important to reiterate and understand the role Expo plays in our development of React Native applications. Expo provides useful wrappers around system and platform functionalities that we'll need and it takes care of the build an release process for us when using the managed workflow (which we've opted to use to make things simpler). Also, they scaffold React Native modules to make it play nicely. The implication of this is that you'll have to now use the `expo-cli` to add JavaScript modules.

Example add the camera module

```bash
expo install expo-camera

```

Usage

```js

import {Camera} from 'expo-camera'

```

Now you can use it like any other React component.

*➡️ Now, try this yourself by adding the camera package and using it in your `App.js`*


_Note: while using the managed workflow, avoid adding components that aren't supported by expo._


*[Visit this link to read more about Expo's SDK](https://docs.expo.io/versions/latest/)*

## React for mobile

So what then is React for mobile, it is simply the React you know. This means you can use class components as well as the full suite of React APIs like hooks, context, etc. Other than the now obvious fact that we're no longer rendering in HTML (DOM), there are performance concerns that are not necessarily mobile-specific but whose impact are more visible on mobile. [Click on this link to read more about](https://github.com/wix/react-native-crash-course/blob/master/docs/App.performance.md)

## Primitive components

*[Read more in the React Native documentation here](https://reactnative.dev/docs/intro-react-native-components)*

While there are quite a few ready made components for us thanks to React Native and Expo. We'll create our own custom and oftentimes more components composed of these components provided for us. The building blocks of these are the following

  - `View`
  - `Text`
  - `Image`
  - `ScrollView`
  - `TextInput`


*➡️ Try using these components in your `App.js`*


*[List of components](https://reactnative.dev/docs/components-and-apis)*

### Platform specific code

[Visit this link to read more on platform-specific code](https://reactnative.dev/docs/platform-specific-code)
