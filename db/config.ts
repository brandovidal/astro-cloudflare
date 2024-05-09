// https://astro.build/db/config
import { column, defineDb, defineTable } from 'astro:db'

const Link = defineTable({
  columns: {
    url: column.text(),
    slug: column.text({ unique: true })
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    Link
  }
})
