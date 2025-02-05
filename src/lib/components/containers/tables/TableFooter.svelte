<script>
	import { ArrowLeftExtraSmallIcon, ArrowRightExtraSmallIcon } from '$lib/index.js'
  export let paging, pageSize, page, totalPages, incrementPage, decrementPage
</script>

<div>
  <button on:click={decrementPage}>
    <ArrowLeftExtraSmallIcon />
  </button>

  <span>Page {page} of {totalPages}</span>
  
  <button on:click={incrementPage}>
    <ArrowRightExtraSmallIcon />
  </button>
</div>

<style>
  div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    color: var(--neutral-400);
    margin-top: 2em;
    margin-bottom: 1em;
  }
</style>
