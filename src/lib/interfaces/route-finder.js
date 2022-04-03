import { toTitleCase } from '$lib/interfaces/prettify-string';

export function getAllRoutes(modules) {
  let routes = [];

  for (let route in modules) {
    // Remove file extensions
    let cleanRoute = route.replace(".svelte", "").replace(".zine", "").replace("./", "/");
    
    // Create pretty title for UI
    let title = cleanRoute.substring(cleanRoute.lastIndexOf('/') + 1);
    title = title.replace(/-/g, ' ');
    title = toTitleCase(title);
    
    // Ignore site index and special layout components in routes folder
    if (title.startsWith("__")) {
      continue;
    }
    if (title === "Index") {
      continue;
    }

    // Create correct navigatable link
    let link = cleanRoute.includes("index") ? cleanRoute.replace("index", "") : cleanRoute;
    let index = link.indexOf("routes");
    if (index >= 0) {
      link = link.substring(index + 6);
    }

    // Rename the site's index page
    if (title === "index" && link == "/") {
      title = "Home";
    }
    
    routes.push({
      title: title,
      link: link,
      subroutes: null
    });
  }

  return routes;
}