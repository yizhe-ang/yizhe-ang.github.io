import { persisted } from "svelte-local-storage-store"

export const numVisits = persisted('numVisits', 0)
