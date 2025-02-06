import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/about", "potate/tomato.tsx")
] satisfies RouteConfig;
