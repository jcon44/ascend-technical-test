<script>
  import { CommunityIcon, Button } from '$lib/index.js'

  export let callback,
    text = 'Add a Staff Member'
</script>

<Button
  {callback}
  classes={['btn-neutral']}
  leftIcon={CommunityIcon}
  {text}
/>
