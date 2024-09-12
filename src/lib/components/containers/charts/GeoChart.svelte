<script>
    import 'leaflet/dist/leaflet.css'
	import { browser } from "$app/environment"
	import { afterUpdate } from 'svelte'

    export let data,
        markers,
        pillText,
        pillKey,
        addressKey,
        geoJSON = null,
        infoTitleKey,
        infoLink = false,
        linkKey = ''

    $: data = data
    let map,
        json = geoJSON,
        geojsonMarkerOptions = {
            radius: 4,
            fillColor: "#ff7800",
            color: "#000",
            weight: 0,
            opacity: 0.4,
            fillOpacity: 0.5
        }

    afterUpdate(async () => {
        const L = await import('leaflet')
        if (browser) {
            // Destroy existing map (if applicable) to redraw map with new data
            if (map) {
                map.remove()
            }

            // Calculate map zoom bounds to fit all data points
            let coordinates = []
            for (let point of data) {
                coordinates.push([point.lat, point.lng])
            }

            const latLngBounds = L.latLngBounds(coordinates).pad(0.2)
            const derivedMapCenter = latLngBounds.getCenter()

            // Draw the map and tile background
            map = L.map('map').setView([derivedMapCenter.lat, derivedMapCenter.lng])
            map.fitBounds(latLngBounds)
        
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            if (geoJSON !== null) {
                for (let zip of json) {
                    L.geoJSON(zip, geojsonMarkerOptions).addTo(map)
                }
            }

            // Construct and render markers with their info popups attached
            for (let point of data) {
                const icon = L.icon({
                    iconUrl: markers.lhn
                })
                
                const popup = L.popup({
                    offset: [24, 24]
                })
                    .setLatLng(point.lat, point.lng)
                    .setContent(
                        `${infoLink ? `<a href=${point[linkKey]} style="color:inherit;text-decoration:none;">` : ''}` +
                            `<div {id} class="geo-chart-tooltip" style="max-width:260px;">`+
                                `<p style="font-size:16px;"><b>${point[infoTitleKey]}</b></p>` +
                                `<div>`+
                                    `<p style="font-size:14px;">${pillText}: ${point[pillKey]}</p>` +
                                `</div>` +
                            `</div>` +
                        `${infoLink ? '</a>' : ''}`
                    )

                const marker = L.marker([point.lat, point.lng], { icon: icon }).addTo(map)
                marker.bindPopup(popup)
            }
        }
    })
</script>

<div id="map" class="border-radius-s">
</div>

<style>
    #map {
        position: relative;
        height: 100%;
    }
</style>