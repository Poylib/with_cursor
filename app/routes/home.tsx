import type { Route } from "./+types/home";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <Link to="/about" className="text-blue-500 hover:text-blue-700 underline">About</Link>
    </div>
  )
}
