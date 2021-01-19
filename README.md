> Please help us improve and share your feedback! If you find better tutorials
or links, please share them by [opening a pull request](https://github.com/HackYourFuture-CPH/react-native/pulls).

# HackYourFuture - React Native

In this 4 week module we will build a React Native application from scratch

## Prerequisites

* Experience with npm/yarn
* Experience with JS (ES6 features)
* Experience with React (hooks/context will be used throughout the whole course)

## Preparation

React Native is a framework for building cross platform applications using JSX that target iOS, Android, and even [Windows](https://github.com/microsoft/react-native-windows). It is built on react which itself is built in JavaScript. This means that you think in react native the way you [think in react](https://reactjs.org/docs/thinking-in-react.html) with some caveats. [Click here to read  more about some of these differences](https://medium.com/@alexmngn/from-reactjs-to-react-native-what-are-the-main-differences-between-both-d6e8e88ebf24). The most important thing to note is that when building with React Native, you are targeting a [“native” platform](https://searchsoftwarequality.techtarget.com/definition/native-application-native-app#:~:text=A%20native%20application%20is%20a,device-specific%20hardware%20and%20software.) not a web platform (usually through a browser). This means that the client is a mobile device running Android or iOS. 

The goal of this course is to give you a working knowledge of react native fundamentals while building a real life application. By the end of this course, you will end up with a production ready mobile application that you can use on our phone (iOS or Android). 

In order to make this process less painful, we’ll employ Expo, a mobile application framework and platform to build universal react applications. Expo provides a suite of tools, services and [APIs](https://docs.expo.io/versions/latest/sdk/overview/) that leverages react native to make it a breeze to build and distribute mobile applications. It promotes conventions and best practices used by lots of mobile developers through sane workflows you’ll discover as you build your first mobile application with react native.

To recap:

- Expo - a framework and platform for building universal react applications. Prerequisites: React or React Native
- React Native - A framework for building native applications using React. Prerequisites: React
- React - a library for building composable user interfaces. Prerequisites: JavaScript and JSX

The React Native documentation site and the Expo documentation sites are excellent resources that we’ll continue to reference throughout this course. 

*Note*: Since we’re using expo, there will be no need to download Xcode or Android Studio. We’ll touch on these topics at the end of the course when we discuss how you can eject your expo application. If you’re curious, speak to your facilitator to help you get started or better still, give it a go yourself.


## Environment setup. 

Install CLI and bootstrap application

Before installation, make sure you have a recent [version of node installed on your machine](https://nodejs.org/en/download/). So anything from node version 12 should suffice. 


```bash
npm install -g expo-cli # or yarn global add expo-cli
```

```bash
expo init my-weather-app
cd my-weather-app
npm start # or yarn start 
```

### Install Expo client

Since we won't be using the native simulators (XCode or Android Studio), we'll make use of the expo client to preview and share our app.

Download the app and sign up for expo (it is free). 

- 🤖 [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
- 🍎 [iOS App Store](https://itunes.apple.com/app/apple-store/id982107779)

### Running your app

Now that you have both the `expo-cli` and the expo client app set up, open the app and sign into your account.

### Workflows

Expo provides us two ways to work with the project setup for development. This means

- A managed workflow. With this workflow, you focus on your code, in our case JavaScript, and Expo takes care of the rest. 
- A bare workflow. With this workflow, you get to manage everything.

For our needs for this course, we'll embrace the managed workflow to get us up-and-running. The reason fo this is that we don't want to spend a lot of time figuring out ourselves how to build our applications, how to distribute them to the app store, how to get services like push notifications, pushing updates, etc. It is painstaking work but all that's made simple and straightforward with Expo. 

All you need is the `expo-cli`, the Expo client on your phone, and an Expo account.

#### Debugging

[Read more on Expo's documentation site](https://docs.expo.io/workflow/debugging)

[*Are you still not sure how Expo fits in? Read this guide*](https://docs.expo.io/workflow/already-used-react-native/)


## Planning
| Week | Topic                                                                                                             | Preparation                         | Lesson plan                         | Homework                      |
| ---- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------- |
| 1.   | **First app using React Native** <br> React Native Overview <br> Expo <br> React for mobile <br> Basic components | [Preparation](week1/preparation.md) | [Lesson plan](week1/lesson-plan.md) | [Homework](week1/homework.md) |
| 2.   | **Interaction** <br> Button <br> Touch <br> Text <br> Image                                                       | [Preparation](week2/preparation.md) | [Lesson plan](week2/lesson-plan.md) | [Homework](week2/homework.md) |
| 3.   | **Top level elements** <br> Navigation <br> ScrollView <br> ListView <br> Modal                                   | [Preparation](week3/preparation.md) | [Lesson plan](week3/lesson-plan.md) | [Homework](week3/homework.md) |
| 4.   | **Animations** <br> React Native Animations <br> Reanimated <br> Gestures                                         | [Preparation](week4/preparation.md) | [Lesson plan](week4/lesson-plan.md) | [Homework](week4/homework.md) |

## Check this out to get an idea what we will work with

[This short introduction in the official documentation](https://reactnative.dev/) gives a nice idea about what React Native is.

The easiest way to start with React Native is [expo](https://expo.io/features). Check [this answer](https://stackoverflow.com/questions/39170622/what-is-the-difference-between-expo-and-react-native) to get the idea about where the library lies in React Native ecosystem. 

Finally, to see how React Native stands versus Native Development check [this post](https://medium.com/mop-developers/mobile-app-development-react-native-vs-native-ios-android-49c5c168045b)

## Applications built with React Native

There are plenty of companies using React Native as a tool of choice for their mobile applications. 
You can find famous examples [here](https://brainhub.eu/blog/react-native-apps/)

*The HackYourFuture curriculum is subject to CC BY copyright. This means you can freely use our materials, but just make sure to give us credit for it :)*

# After the course

Popular libraries helping to build your application:
- **[React native elements](https://reactnativeelements.com/)** - a library with a set of pre-built components for your application
- **[React native community](https://github.com/react-native-community)** - a set of additional tools in React Native (among others contains persistent storage, hooks for React Native, pickers, netinfo etc.)
- **[Gifted Chat](https://github.com/FaridSafi/react-native-gifted-chat#readme)** - chat component made easy to use
- **[React Native Redash](https://github.com/wcandillon/react-native-redash#readme)** - makes reanimated experience even nicer
- **[Detox](https://github.com/wix/Detox#readme)** - e2e testing for React Native

Advanced topics:
- **[React Native internals](https://www.reactnative.guide/3-react-native-internals/3.1-react-native-internals.html)** - how does React Native work under the hood
- **[Bridges](https://medium.com/hackernoon/react-native-bridge-for-ios-and-android-43feb9712fcb)** - making React Native work with native Android/iOS layers
