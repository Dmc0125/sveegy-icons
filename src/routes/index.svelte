<script lang="ts">
import { SvAddAssetsFill, SvAlignLeftOutline, SvArchiveStroke } from '$lib'
</script>

<main class="wrapper">
  <SvAddAssetsFill size="6rem" color="rgba(0, 0, 0, .2)" />
  <SvAlignLeftOutline size="4rem" color="red" />
  <SvArchiveStroke size="90px" strokeWidth=".5px" color="blue" />
</main>

<style>
:global(*) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  height: 10rem;
  margin: 10rem 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

:global(.wrapper svg) {
  border: 1px solid rgb(199, 199, 199);
}
</style>