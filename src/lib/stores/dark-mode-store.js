import { writable } from "svelte/store"
import { browser } from "$app/env"
import { Theme } from "$lib/enums/theme.js"

export const darkMode = writable(browser && (JSON.parse(localStorage.getItem('mode')) || Theme.Dark.name))
darkMode.subscribe((val) => {
  if (browser) return (localStorage.setItem('mode', JSON.stringify(val)));
});