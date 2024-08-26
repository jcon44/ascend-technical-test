<script>
    import 'leaflet/dist/leaflet.css'
	import { browser } from "$app/environment"
	import { onMount } from 'svelte'

    export let data,
        markers,
        pillText,
        pillKey,
        addressKey,
        infoTitleKey,
        infoLink = false,
        linkKey = '',
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

<div id="map">
</div>

<style>
    #map {
        position: relative;
        height: 100%;
    }
</style>