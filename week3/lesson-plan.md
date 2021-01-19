# Lesson Plan - Top level elements

## Navigation

In React Native, we will be using a popular library [mentioned](https://reactnative.dev/docs/navigation/#react-navigation) in the official documentation - [react-navigation](https://reactnavigation.org/). In the end of the section, we will briefly discuss another popular library, which promises native look and feel. 

Navigation in mobile apps usually follows 4 main patterns, which impact types of transitions and serve different purposes.

### Stack Navigation

Provides a way for your app to transition between screens where each new screen is placed on top of a stack. By default the stack navigator is configured to have the familiar iOS and Android look & feel: new screens slide in from the right on iOS, fade in from the bottom on Android.

### Full-screen Modal

Similar to Stack, but uses a different kind of transition (bottom-top is quite common). Usually displays additional data for the last interaction.

### Tab Navigation

The tab bar pattern is inherited from desktop design. It usually contains relatively few destinations, and those destinations are of similar importance and require direct access from anywhere in the app. The tab bar doesn't hide navigation, but allows direct access and presents feedback on the icon it's related to.

### Drawer

Commonly used by Android to display multiple links in mobile navigation, the side drawer reduces UI clutter and prioritizes important navigation destinations. Not to mention, it's super simple to design and fits most mobile app layouts.

Along with defining the structure and possible transitions, essential to the navigation topic are [passing the data between screens](https://reactnavigation.org/docs/params), [nesting different navigators into each other](https://reactnavigation.org/docs/nesting-navigators) and [using conditional rendering for different flows](https://reactnavigation.org/docs/auth-flow).

## ScrollView / FlatList

These two components serve a slightly similar purpose in two different ways. [ScrollView](https://reactnative.dev/docs/scrollview) renders all its react child components at once, providing more scrollable space then the screen has. [FlatList](https://reactnative.dev/docs/flatlist) also increases the amount of content possible to be placed on a single screen via rendering similar items. 
For implementing a FlatList with sections support, React Native provides [SectionList](https://reactnative.dev/docs/sectionlist).

## Modal

The [Modal](https://reactnative.dev/docs/modal) component is a basic way to present content above an enclosing view. It is fairly similar to an alert with a bigger room for customization. 

## Exercise

### Chat application skeleton
Make a top level architecture for a simple chat application (you can use Slack mobile app for inspiration).

Don't pay much attention to neither styling nor content. The idea is to have a navigation with ~5 different screens 
(tab, drawer, stack), Flat List filled with random names representing chats, and Modal.
