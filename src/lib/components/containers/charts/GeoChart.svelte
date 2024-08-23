<script>
    import { Loader } from "@googlemaps/js-api-loader"
	import { browser } from "$app/environment"
	import GeoTooltip from "$lib/components/containers/labels/GeoTooltip.svelte"

    export let data,
        tooltipId,
        markers,
        key

    const loader = new Loader({
        apiKey: key,
        version: 'weekly',
        });

    let innerWidth,
        innerHeight

    $: {
        if (browser) {
            async function initMap() {
                const { Map } = await loader.importLibrary('maps')
                const { AdvancedMarkerElement, PinElement } = await loader.importLibrary('marker')
                const map = new Map(document.getElementById("map"), {
                    center: { lat: 39.97231129395548, lng: -82.99908022045317 },
                    zoom: 13,
                    mapId: 'geo-map' 
                })
    
                for (let point of data) {
                    const glyphImage = document.createElement("img")
                    glyphImage.src = markers.lhn
    
                    const glyph = new PinElement({
                        glyph: glyphImage,
                    })
    
                    const item = new AdvancedMarkerElement({
                        map,
                        content: glyph.element,
                        position: point,
                        gmpClickable: true
                    })

                    console.log(item.position)

                    item.addListener('click', (e) => {
                        console.log(e)
                        // grab map tooltip and toggle its visibility
                        const tooltip = document.getElementById(`geo-${tooltipId}-tooltip`)
                        if (tooltip.style.opacity === '1') {
                            tooltip.style.opacity = '0'
                        } else {
                            tooltip.style.opacity = '1'
                        } 
                    })
                }
            }
    
            initMap()
        }
    }
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div id="map">
</div>

<GeoTooltip 
    id="geo-{tooltipId}-tooltip"
/>

<style>
    #map {
        height: 100%;
    }
</style>