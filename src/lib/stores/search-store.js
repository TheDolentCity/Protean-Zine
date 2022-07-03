import { writable } from "svelte/store";
import { v4 as uuid } from '@lukeed/uuid';

export const selectedItem = writable({});