import React from "react";

export default function About() {
  return (
    <div className="flex flex-col justify-center p-4 w-full max-w-5xl mt-12">
      <p className="text-2xl">about cmdr</p>
      <p className="mt-4 font-thin ">
        The goal of the project is to create a beautiful and extensible
        experience for command-line interface users, built on open web
        standards. In the beginning, our focus will be primarily around speed,
        stability and the development of the correct API for extension authors.
        <br />
        <br />
        In the future, we anticipate the community will come up with innovative
        additions to enhance what could be the simplest, most powerful and
        well-tested interface for productivity.
      </p>
    </div>
  );
}
