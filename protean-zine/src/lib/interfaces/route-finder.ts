export interface IRoute {
  title: string;
  link: string;
}

export function getAllRoutes(modules: Record<string, () => Promise<{ [key: string]: any; }>>) {
  let routes: Array<IRoute> = [];

  for (let route in modules) {
    let cleanRoute = route.replace(".svelte", "").replace(".svx", "").replace("./", "/");
    let title = cleanRoute.substring(cleanRoute.lastIndexOf('/') + 1);
    let link = cleanRoute.includes("index") ? cleanRoute.replace("index", "") : cleanRoute;
    let index = link.indexOf("routes");
    if (index >= 0) {
      link = link.substring(index + 6);
    }
    
    // Ignore special layout components in routes folder
    if (title.startsWith("__")) {
      continue;
    }
    
    routes.push({
      title: title,
      link: link
    });
  }

  return routes;
}