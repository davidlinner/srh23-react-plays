# Simple project with examples on common challenges in Reactjs app development
## Getting started

Install dependencies with 

`npm install`

Run the application in development mode with

`npm run dev`

## Routing
This project uses the library *wouter* in favor of the more mature library *react-router*. With version 6 react-router's focus
moved from pure routing to data provisioning and mutation, which makes the solution less universal. For this reason *wouter* is
preferred here.
Link: https://github.com/molefrog/wouter
## Forms
Formik is supporting you with basic form state management problems such as keeping track of input field state and validation without 
interfering with your design system. 
https://formik.org/
## I18n
A must-have. Introducing i18n later to a projects comes with a lot of effort, while integrating it from the very beginning only means
a little extra effort for each feature. In react you can use *react-intl*  for this purpose. 
Link: https://formatjs.io/docs/react-intl/
This Intellij Plugin *Easy I18n* helps you to keep track of all translations for the time being. Proper tools are required when
you are heading for a real projects.
Link: https://plugins.jetbrains.com/plugin/16316-easy-i18n
## Global State
Jotai and its concept of atoms provides you with a global version of the useState-hook, called *useAtom*.
https://jotai.org/
## Fetching and Mutating Data
SWR is one of several prominent querying libraries for react. Those libs help you to make the connection of your app to an API server.
https://swr.vercel.app/