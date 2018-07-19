let backendHost
const hostname = window && window.location && window.location.hostname

if ( hostname === 'jaf7.github.io' ) {
  backendHost = 'https://halftime-metro-backend.herokuapp.com'
} else if ( hostname === '127.0.0.1' ) {
  backendHost = 'http://localhost:3001'
}
 
const API_ROOT = backendHost

// TODO
// Change to using process.env
// https://medium.com/@tacomanator/environments-with-create-react-app-7b645312c09d