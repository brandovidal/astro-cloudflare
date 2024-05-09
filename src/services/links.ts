import { getLinks } from '@/Shared/db'

export async function getAllLinks () {
  const response = await getLinks()
  console.log('🚀 ~ constGET:APIRoute= ~ response:', response)

  if (!response.success) {
    return []
  }

  if (!response.data) {
    return []
  }

  // redirect
  return response.data
}
