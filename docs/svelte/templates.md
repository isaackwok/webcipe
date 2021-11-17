---
title: Templates
---

# Svelte - Templates

Svelte 與 Vue 一樣採用 template 語法，但語法上有蠻多不同之處，以下列出基本的 Svelte 語法。

## Conditions

### if
```html
<div>
  {#if isLoading}
    <p>Fetching data ...</p>
  {/if}
</div>
```

### if-else
```html
<div>
  {#if isLoading}
    <p>Fetching data ...</p>
  {:else}
    <p>Data loaded successfully!</p>
  {/if}
</div>
```

### else-if
```html
<div>
  {#if status === 200}
    <p>Success!</p>
  {:else if status === 400}
    <p>Bad Request!</p>
  {:else}
    <p>Server Error or Unknown Error!</p>
  {/if}
</div>
```

## Loop

### for-each
```html
<ul>
  {#each userArr as user}
    <li>{user.name}: {user.email}</li>
  {/each}
</ul>
```