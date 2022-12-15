<p align="center">
<img src="https://github.com/ArunGovil/cmdr/blob/main/public/img/icon.png" width=180 alt="cmdr"/>
</p>
<p align="center">
one stop directory for frequently used commands.
</p>
<h4 align="center"> 
<a href="https://cmdr.netlify.app/">https://cmdr.netlify.app</a>
 </h4> 

---

## What is cmdr?

cmdr is a directory of frequently used commands in daily software development, categorized across different technologies.

## How do I add a command?

Commands are stored inside the content folder in a JSON file which acts as the current database. You can add new commands by following by following these steps:

- Add it at the end of `content/content.json` file.
- Submit a PR.

> **Note** Please follow the below format, and make sure you are not creating multiple copies of same command.

```json
{
  "title": "<COMMAND TITLE>",
  "code": "<COMMAND CODE>",
  "technology": "<CORE TECHNOLOGY>",
  "tags": [
    "<TAG ONE>",
    "<TAG TWO>"
  ],
}
```

## Running locally

Once the repo is cloned to your local device, you can run:

```sh
yarn install
yarn dev

```

cmdr will start running immediately.
