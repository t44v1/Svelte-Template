// src/hooks.server.js


/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {

  event.locals.user = true
  
  return await resolve(event);
}