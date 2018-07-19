$(document).ready(() => {

    loadScript()

    function loadScript() {
        let script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=initMap`
        script.setAttribute('async','')
        script.setAttribute('defer','')
        document.body.appendChild(script)
    }
})
