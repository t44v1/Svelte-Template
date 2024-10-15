// $lib/svelte.js
import { writable } from 'svelte/store';

// Site
// System
export const notifications = writable([])
export const sidebar = writable();
export const site = writable({ i18n: {}, page: {} });

// User
export const language = writable('en')
export const hex = writable('#f90')