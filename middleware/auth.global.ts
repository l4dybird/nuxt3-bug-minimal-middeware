export default defineNuxtRouteMiddleware(() => {
  if (location.hash) {
    location.hash = "";
  }
});