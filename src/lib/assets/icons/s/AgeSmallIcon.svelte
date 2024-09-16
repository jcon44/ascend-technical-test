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
        d="M11 15.5H7.5C6.10444 15.5 5.40665 15.5 4.83886 15.6722C3.56045 16.06 2.56004 17.0605 2.17224 18.3389C2 18.9067 2 19.6044 2 21M14.5 7.5C14.5 9.98528 12.4853 12 10 12C7.51472 12 5.5 9.98528 5.5 7.5C5.5 5.01472 7.51472 3 10 3C12.4853 3 14.5 5.01472 14.5 7.5Z" 
        stroke={colorOverride || "#6F6697"} 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
    />
    <path 
        d="M20.5 14V16M16.5 14V16M16.4 23H20.6C21.4401 23 21.8601 23 22.181 22.8365C22.4632 22.6927 22.6927 22.4632 22.8365 22.181C23 21.8601 23 21.4401 23 20.6V17.4C23 16.5599 23 16.1399 22.8365 15.819C22.6927 15.5368 22.4632 15.3073 22.181 15.1635C21.8601 15 21.4401 15 20.6 15H16.4C15.5599 15 15.1399 15 14.819 15.1635C14.5368 15.3073 14.3073 15.5368 14.1635 15.819C14 16.1399 14 16.5599 14 17.4V20.6C14 21.4401 14 21.8601 14.1635 22.181C14.3073 22.4632 14.5368 22.6927 14.819 22.8365C15.1399 23 15.5599 23 16.4 23Z" 
        stroke={colorOverride || "#6F6697"} 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
    />
</Icon>
