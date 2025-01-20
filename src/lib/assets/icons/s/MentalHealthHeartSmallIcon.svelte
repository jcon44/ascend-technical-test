<script>
    import { getGlobalColorPalette, Icon } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let styles = [],
        colorOverride

	let palette = {}

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon
    size="24"
    {styles}
>
    <path 
        d="M5 11V10C5 5.02944 9.02944 1 14 1C18.9706 1 23 5.02944 23 10C23 13.5031 21.8671 15.6587 20.0436 17.8264C19.3938 18.5989 19 19.561 19 20.5704V23" 
        stroke={colorOverride || "#6F6697"} 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
    />
    <path 
        d="M5 11L2.64138 14.931C2.31223 15.4796 2.57573 16.1919 3.18264 16.3942L5 17V20C5 20.5523 5.44772 21 6 21H8C8.55228 21 9 21.4477 9 22V23" 
        stroke={colorOverride || "#6F6697"} 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
    />
    <path 
        fill-rule="evenodd" 
        clip-rule="evenodd" 
        d="M13.9966 6.95808C12.9969 5.90957 11.3299 5.62752 10.0773 6.58764C8.82482 7.54776 8.64848 9.15303 9.6321 10.2886C10.4499 11.2327 12.9249 13.2239 13.7361 13.8684C13.8268 13.9405 13.8722 13.9766 13.9251 13.9907C13.9713 14.0031 14.0218 14.0031 14.068 13.9907C14.121 13.9766 14.1663 13.9405 14.2571 13.8684C15.0683 13.2239 17.5432 11.2327 18.3611 10.2886C19.3447 9.15303 19.1899 7.53766 17.9158 6.58764C16.6417 5.63762 14.9963 5.90957 13.9966 6.95808Z" 
        stroke={colorOverride || "#6F6697"} 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
    />
</Icon>