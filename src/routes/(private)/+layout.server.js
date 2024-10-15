// routes/+layout.server.js
import { error } from '@sveltejs/kit';

export async function load({ locals, url }) {
  // console.warn(locals)
  // if(url.hostname == "localhost") return
  if(!locals?.user) throw error(401, "Your account is missing")

  return { user: locals?.user || null }
}