# Weather App

Mobile app that displays weather based on the users current location.

## Setup

```
npm install
npm start
```

## Dependencies

```
npx expo install expo-location
```

### Update the `app.json`

```
Copy

{
  "expo": {
    ...
    "plugins": [
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "Allow $(PRODUCT_NAME) to use your location."
        }
      ]
    ]
  }
}
```

## Router

https://reactnavigation.org/docs/hello-react-navigation

```
npx expo install react-native-screens react-native-safe-area-context @react-navigation/native-stack
```

## Resources

- https://docs.expo.dev/versions/latest/sdk/location/