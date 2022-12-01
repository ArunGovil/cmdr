import React from "react";

interface CodeCardProps {
  id: number;
  title: string;
  code: string;
}
export default function CodeCard({ id, title, code }: CodeCardProps) {
  return (
    <li key={id}>
      <p className="mt-8 mb-8">{title}</p>
      <code className="bg-slate-600 p-4 rounded-md">{code}</code>
    </li>
  );
}
