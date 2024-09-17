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
    <g clip-path="url(#clip0_3012_369)">
        <path 
            d="M4 12L1.64138 15.931C1.31223 16.4796 1.57573 17.1919 2.18264 17.3942L4 18V21C4 21.5523 4.44772 22 5 22H7C7.55228 22 8 22.4477 8 23V23" 
            stroke={colorOverride || "#6F6697"} 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
        />
        <path 
            d="M4 12V11C4 6.02944 8.02944 2 13 2C17.9706 2 22 6.02944 22 11C22 14.5031 20.8671 16.6587 19.0436 18.8264C18.3938 19.5989 18 20.561 18 21.5704V23" 
            stroke={colorOverride || "#6F6697"} 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
        />
        <path 
            fill-rule="evenodd" 
            clip-rule="evenodd" 
            d="M19 1H15V5L11 5V9H15V13H19V9H23V5L19 5V1Z" 
            fill="white"
        />
        <path 
            d="M15 1V0C14.4477 0 14 0.447715 14 1L15 1ZM19 1H20C20 0.447715 19.5523 0 19 0V1ZM15 5V6C15.2652 6 15.5196 5.89464 15.7071 5.70711C15.8946 5.51957 16 5.26522 16 5H15ZM11 5L11 4C10.7348 4 10.4804 4.10536 10.2929 4.29289C10.1054 4.48043 10 4.73478 10 5H11ZM11 9H10C10 9.55229 10.4477 10 11 10V9ZM15 9H16C16 8.44772 15.5523 8 15 8V9ZM15 13H14C14 13.5523 14.4477 14 15 14V13ZM19 13V14C19.5523 14 20 13.5523 20 13H19ZM19 9V8C18.4477 8 18 8.44772 18 9H19ZM23 9V10C23.5523 10 24 9.55229 24 9H23ZM23 5H24C24 4.44772 23.5523 4 23 4V5ZM19 5H18C18 5.55228 18.4477 6 19 6V5ZM15 2H19V0H15V2ZM16 5V1H14V5H16ZM11 6H15V4L11 4L11 6ZM12 9V5H10V9H12ZM15 8H11V10H15V8ZM16 13V9H14V13H16ZM19 12H15V14H19V12ZM18 9V13H20V9H18ZM23 8H19V10H23V8ZM22 5V9H24V5H22ZM19 6L23 6V4L19 4V6ZM18 1V5H20V1H18Z" 
            fill={colorOverride || "#6F6697"}
        />
    </g>
    <defs>
        <clipPath id="clip0_3012_369">
            <rect width="24" height="24" fill="white"/>
        </clipPath>
    </defs>
</Icon>