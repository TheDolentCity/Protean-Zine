export interface IRoute {
  title: string;
  link: string;
  subroutes: Array<IRoute>;
}

export function getAllRoutes(modules: Record<string, () => Promise<{ [key: string]: any; }>>): IRoute[] {
  let routes: Array<IRoute> = [];

  for (let route in modules) {
    console.log(route);
    // Remove file extensions
    let cleanRoute = route.replace(".svelte", "").replace(".svx", "").replace("./", "/");
    
    // Create pretty title for UI
    let title = cleanRoute.substring(cleanRoute.lastIndexOf('/') + 1);
    
    // Ignore site index and special layout components in routes folder
    if (title.startsWith("__")) {
      continue;
    }
    if (title === "index") {
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
      subroutes: []
    });
  }

  return routes;
}