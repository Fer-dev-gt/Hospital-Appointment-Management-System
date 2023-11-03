<h1 align="center" id="title">UHospital. Appointments, medicine and prescriptions management system</h1>
<p>This a simple but really interesting app, if you look under the code you will find 3 different way in which you can manage the state of your React Components, by using good old friend useState, this hook is really good and simple to learn but if you want to go back in time you can also find and study how to manage your State with Classes, that's right! You can even learn how to use Lifecycle methods like 'componentWillMount()' to manage any logic you want to execute. 

Finally you can be more elegant and make your code more scalable by managing your State with the last but not least important of the bunch, useReducer! This hook can be very powerful specially when you implemented action types and action creators so your code can be more readible!

So now you now that even if an app looks simple in the surface you can always learn new tricks when you read its code, enjoy!

Don't be shy and try it yourself, there are many surprises waiting for you!  </p>

<img width="1392" alt="Screenshot 2023-11-02 at 18 48 48" src="https://github.com/Fer-dev-gt/Hospital-Appointment-Management-System/assets/119085740/16eaede9-0138-4653-885f-e79345d44f60">

## Table of Contents

- [Demo and Features](#demo-and-features)
- [Installation Steps](#installation-steps)
- [The process](#the-process)
  - [Built with](#built-with)
  - [Structure](#structure)
- [Useful resources](#useful-resources)
- [License](#license)
- [Author](#author)
- [React Documentation](#react-documentation)

## Demo and Features
<p>As with almost everything we start with a simple login and register user screen, if you already have an existing account the app will identify if your usertype is a patient, doctor or a nurse. If you register a new user then your account will be a patient account by default</p>
<img width="400" alt="Screenshot 2023-11-02 at 19 08 35" src="https://github.com/Fer-dev-gt/Hospital-Appointment-Management-System/assets/119085740/59721dfd-cd70-4f28-95cb-16876da6fba6">
<img width="432" alt="Screenshot 2023-11-02 at 18 56 58" src="https://github.com/Fer-dev-gt/Hospital-Appointment-Management-System/assets/119085740/54fb119b-0cea-4fa3-a6a1-bca2bef3cddf">

<p>When you log in as a patient you will be displayed a menu with five buttons that display a different Component of the app to execute one of the following patient services, for example this one where a patient can ask for a doctor appointment by just submitting date, hour and reason for the appointment </p>
<img width="1025" alt="Screenshot 2023-11-02 at 18 58 37" src="https://github.com/Fer-dev-gt/Hospital-Appointment-Management-System/assets/119085740/1b07ebfc-1f05-4e05-99b3-0f7138fd68f5">

<p>At any moment a patient can check the status of their appointment and see which doctor has been assigned also if the appointment has been rejected by any reason</p>
<img width="1021" alt="Screenshot 2023-11-02 at 18 59 16" src="https://github.com/Fer-dev-gt/Hospital-Appointment-Management-System/assets/119085740/b1eda166-2b38-4211-b519-95c5f63472f3">

<p>A patient can make an order of the medicines that the hospital has on inventory up to the existing amount of each medicine, a subtotal for a prouct will be constanly displayed and the total for the orders as well</p>
<img width="833" alt="Screenshot 2023-11-02 at 18 52 16" src="https://github.com/Fer-dev-gt/Hospital-Appointment-Management-System/assets/119085740/99fa8fcb-4978-40dc-91ee-de221b18942a">

<p>When a nurse logs in a new screen with different Components will be displayed, on this case the only function a nurse has is to assigned a doctor to any pending appointment or rejected if there are no doctors available, when an appointment is being asigned a combobox will be display with all the doctors that have an active account</p>
<img width="821" alt="Screenshot 2023-11-02 at 18 54 54" src="https://github.com/Fer-dev-gt/Hospital-Appointment-Management-System/assets/119085740/807f2687-3340-4654-b812-8255815ccc36">

<p>When a doctor logs in a different menu is display where they can check all their appointments that need to be take care of, these appointments are display inside differente containers/components</p>
<img width="799" alt="Screenshot 2023-11-02 at 18 59 57" src="https://github.com/Fer-dev-gt/Hospital-Appointment-Management-System/assets/119085740/ab652eb3-d780-487c-8308-dccc8d3fed9a">

<p>When a doctor has finished attending a patient, it can submit a report of the diagnosis and the recommendations for the patients, this information will be available for the respective patient to see what instructions to follow</p>
<img width="610" alt="Screenshot 2023-11-02 at 19 01 41" src="https://github.com/Fer-dev-gt/Hospital-Appointment-Management-System/assets/119085740/5b6b3770-2471-49cf-b42f-3e9b6eb637c2">

<p>Finally any doctor can checkout 2 reports of what medicines have been sold the most and which doctors have attended more appointments/patients</p>
<img width="431" alt="Screenshot 2023-11-02 at 19 02 04" src="https://github.com/Fer-dev-gt/Hospital-Appointment-Management-System/assets/119085740/14fabf2e-74f9-49ef-aa36-b5d1e984fe34">
<img width="454" alt="Screenshot 2023-11-02 at 19 02 19" src="https://github.com/Fer-dev-gt/Hospital-Appointment-Management-System/assets/119085740/bb3d89d1-deb2-44b7-910f-0b3b56ef0eb3">


## Installation Steps:
If you want to make changes to the source code you just need to:

1. Do a (`git clone`).
2. Install all the dependencies (`npm i`).
3. Execute and enjoy the app (`npm start`).

## The process 
### Built with

Technologies used in the project:

*   React 18.2.0
*   web-vitals 3.4.0
*   iOS 13.4.1

### Structure

## Useful resources

* [React and Components](https://create-react-app.dev/docs/deployment/) - A guide to React and Components.

## License:

> This project is licensed under the MIT License

## Author

Made with 💜 by [Fernando Orozco](https://www.linkedin.com/in/fernando-orozco-velasquez/)

## React Documentation
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

