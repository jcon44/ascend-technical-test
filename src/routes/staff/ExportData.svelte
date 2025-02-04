<script>
  import { ArrowDownExtraSmallIcon, Button } from '$lib/index.js'

  export let callback,
    text = 'Export Data'
</script>

<Button
  {callback}
  classes={[]}
  leftIcon=ArrowDownExtraSmallIcon
  {text}
/>
