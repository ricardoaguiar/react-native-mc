# Lesson Plan - Animations

## Animations

React Native provides the [Animated](https://reactnative.dev/docs/animated) library which contains all the tools necessary to create basic animations. The implementation of the animations usually consists of defining an animation logic and using corresponding Animated components (or custom ones created using [createAnimatedComponent](https://reactnative.dev/docs/animated#createanimatedcomponent)), which look like usual ones with an added `Animated` prefix (for example `Animated.Image`, `Animated.ScrollView`, `Animated.Text`, etc.).

While the field of animations is very complex and huge, simple animations can be created following the React Native documentation.

### Two ways of running animations

React Native application consists of JS and Native OS layers. The communication between the two happens via something called bridge. To put it simple, the JS code decides what should be done on the native layer, React Native creates a JSON describing these changes, and finally the native OS layer (UI thread) performs animations on both iOS and Android.

The first obvious way to perform an animation is to calculate the changes on JS side (JS thread), and send the update each time the animation frame is changed. This means performing an animation in the same way as you could update a background on a `View` component, for example. While this sounds simple, it puts some extra work on JS thread, and adds overhead while communicating via bridge on every update.

To optimize the performance caused by the first approach, React Native provides a way to perform _some_ animations on the native side. The idea is to define an animation and send it completely at the very start, allowing UI thread to take care of the rest. While it's an optimized way of running animations, it comes with a price of losing complete control of the state of animation.

A deep overview comparing both approaches can be found [here](https://www.freecodecamp.org/news/how-react-native-animations-work/).

### Reanimated

While Animated library is a nice place to start, [Reanimated](https://docs.swmansion.com/react-native-reanimated/) is a great destination to continue. The 3rd party library provides a way to run all animations on the native side via declarative API's, still leaving the whole control of Animations state with the developer. The motivation and basic concepts are described in their [about section](https://docs.swmansion.com/react-native-reanimated/docs/1.x.x/).

## Gestures

Animations are often used in combination with touches processing. An example provided by React Native demonstrates how to subscribe to a value change on `onScroll` event in [their documentation](https://reactnative.dev/docs/animated#handling-gestures-and-other-events). As well as with Animations, there is a [3rd party library](https://docs.swmansion.com/react-native-gesture-handler/docs/), which provides additional functionality.

## Exercise

### Both exercises can be implemented using Animated/Reanimated

1. Implement simple animations with differently shaped objects. If you need some inspiration, or want to make something advanced, try to replicate this behavior:

![jumping ball](./assets/jmpball.gif)

2. Add a ScrollView and attach an animation to an `onScroll` event. Use any animation of any object (the simplest can be changing an opacity of a label)
