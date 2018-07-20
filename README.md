# Halftime Metro

A meetup app that leverages 5 Google Maps APIs to remove the complexity of deciding where to meet in the city. It calculates optimum metro-plus-walking travel times for each party and offers a list of easy walking destinations to choose from. The destination choices are grouped around an optimum travel time midpoint so that each party can arrive within a couple minutes of each other. It returns detailed directions and a map route for each friend that includes optimized walk times.

The app uses asynchronous fetch requests to Google Maps Geocode, DistanceMatrix, DirectionsService, DirectionsRenderer and Places APIs. Promises and `Promise.all` iterables are used to leverage the various APIs smoothly.

The app also uses a minimal backend Rails API for user registration (hosted on Heroku). 

## Demo / How To
* Live on [Github Pages](https://jaf7.github.io/halftime_metro/)
* Youtube [Demo](https://youtu.be/DK8PVKX0Dq8)

## Motivation
This app was born because I couldn't find a service online that offered the best metro / walking route to a meeting place between two origins, based on optimum travel time. While distance is important, within the city (NYC in my case) travel time is most important when planning to meet up. When you're on the go or short of time, it can be difficult and time consuming to figure out the best subway stops to get off at and the best walking destinations. I wanted a way to make a quick decision and spend more time with my friend and less figuring out where to meet.

## Built Using

* [ES6 JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Bulma]() and custom CSS
* [jQuery](https://jquery.com/)

* [jQuery.scrollTo](https://github.com/flesler/jquery.scrollTo) - Lightweight animated scrolling with jQuery
* [Heroku](https://devcenter.heroku.com/) - deployed to Heroku remote
* [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) - For local development server, logging, controlling dynos

## Contribute
Fork and clone the repo, install live-server:
```
npm install -g live-server
```
and execute `live-server` while in the root directory. 

To run the backend locally, see it's [repo]() (when running locally the app will look for the API endpoint at `localhost:3001`)

#### TODO

  - [ ] Persist logged in users' routes to backend or LocalStorage

## Credits
Thanks to my pairing partner on this project, Caroline Lee!

## License
 
The MIT License (MIT)

Copyright (c) 2015 Chris Kibble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.