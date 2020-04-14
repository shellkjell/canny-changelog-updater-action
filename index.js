const github = require('@actions/github');
const core = require('@actions/core');

console.log(github.context);

core.setOutput('githubContext', JSON.stringify(github.context, undefined, 2));