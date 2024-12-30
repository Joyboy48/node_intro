require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;

const githubData = {
    "login": "Joyboy48",
    "id": 147731572,
    "node_id": "U_kgDOCM40dA",
    "avatar_url": "https://avatars.githubusercontent.com/u/147731572?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Joyboy48",
    "html_url": "https://github.com/Joyboy48",
    "followers_url": "https://api.github.com/users/Joyboy48/followers",
    "following_url": "https://api.github.com/users/Joyboy48/following{/other_user}",
    "gists_url": "https://api.github.com/users/Joyboy48/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Joyboy48/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Joyboy48/subscriptions",
    "organizations_url": "https://api.github.com/users/Joyboy48/orgs",
    "repos_url": "https://api.github.com/users/Joyboy48/repos",
    "events_url": "https://api.github.com/users/Joyboy48/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Joyboy48/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Astitva Arya",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": "astitva_arya",
    "public_repos": 17,
    "public_gists": 0,
    "followers": 6,
    "following": 10,
    "created_at": "2023-10-12T14:09:22Z",
    "updated_at": "2024-12-16T08:56:15Z"
  }

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/name",(req,res)=>{
    res.send("Astitva Arya");
});

app.get("/learn",(req,res)=>{
    res.send("<h1>please study Backend</h1>");
});

app.get("/github",(req,res)=>{
    res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
