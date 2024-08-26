<script>
    import 'leaflet/dist/leaflet.css'
    import { Loader } from "@googlemaps/js-api-loader"
	import { browser } from "$app/environment"
	import { onMount } from 'svelte'

    export let data,
        markers,
        pillText,
        pillKey,
        addressKey,
        infoTitleKey,
        mapCenter = {}

    onMount(async () => {
        const L = await import('leaflet')
        if (browser) {
            const map = L.map('map').setView([39.758948403189585, -84.19290454518598], 13)
        
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            for (let point of data) {
                const icon = L.icon({
                    iconUrl: markers.lhn
                })

                const popup = L.popup({
                    offset: [24, 24]
                })
                    .setLatLng(point.lat, point.lng)
                    .setContent(
                        `<div {id} class="geo-chart-tooltip" style="max-width:260px;">`+
                            `<p style="font-size:16px;"><b>${point[infoTitleKey]}</b></p>` +
                            `<div>`+
                                `<p style="font-size:14px;">${pillText}: ${point[pillKey]}</p>` +
                            `</div>` +
                        `</div>`
                    )

                const marker = L.marker([point.lat, point.lng], { icon: icon }).addTo(map)
                marker.bindPopup(popup).openPopup()
            }
        }
    })
</script>

<div id="map">
</div>

<style>
    #map {
        position: relative;
        height: 100%;
    }
</style>