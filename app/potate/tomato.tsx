import type { Route } from "../+types/root";

export default function About() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="text-gray-600">
        안녕하세요! 이 페이지는 About 페이지입니다.
      </p>
    </div>
  );
}
export const meta = ({}: Route.MetaArgs) => [
    { title: "About" },
    { name: "description", content: "About 페이지입니다" },
];
