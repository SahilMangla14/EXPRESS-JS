// In express, API means setting up the HTTP interface to interact with our data
// Data is sent using json which stands for javascript object notation
// In order to send back response we are going to use res.json() which will do all the things like setting up the propaganda type and stringify our data
// The other flavour we have is server side rendering (SSR) where we will set up templates and send back entire HTML, CSS and JAVASCRIPT ourselves and we are going to do this using res.render() method


// In short
// API                            // SSR
// API - JSON                     // SSR - Template
// Send Data                      // Send - Template
// res.json()                     // res.render()