<script>
  import { ArrowDownExtraSmallIcon, Button } from '$lib/index.js'

  export let callback,
    text = 'Export Mileage'
</script>

<Button
  {callback}
  classes={[]}
  leftIcon=ArrowDownExtraSmallIcon
  {text}
/>
