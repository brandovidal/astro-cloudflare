import { Link, db, like } from 'astro:db'

export async function getLinkBySlug (slug: string) {
  try {
    const linkExists = await db.select().from(Link).where(like(Link.slug, slug))

    if (linkExists.length === 0) {
      return {
        success: true,
        data: null
      }
    }

    return {
      success: true,
      data: linkExists[0].url
    }
  } catch (err) {
    console.log('[ERROR] getLinkBySlug ::: ', err)

    const name = (err as Error).name

    return {
      success: false,
      error: { message: name }
    }
  }
}
