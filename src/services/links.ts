import { getLinks } from '@/Shared/db'

export async function getAllLinks () {
  const response = await getLinks()
  if (!response.success || !response.data) {
    return []
  }

  // redirect
  return response.data
}
