const github = require('@actions/github');
const core = require('@actions/core');

console.log(github.context);

core.setOutput('githubContext', github.context);