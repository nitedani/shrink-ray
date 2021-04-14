const NPM = '@semantic-release/npm';
const GH = '@semantic-release/github';

module.exports = {
  generateNotes: {
    config: '@alorel-personal/conventional-changelog-alorel'
  },
  prepare: [
    '@semantic-release/changelog',
    NPM,
    {
      assets: [
        'CHANGELOG.md',
        'README.md',
        'package.json',
        'package-lock.json',
      ],
      message: 'chore(release): ${nextRelease.version}',
      path: '@semantic-release/git'
    }
  ],
  publish: [
    NPM,
    GH
  ],
  tagFormat: '${version}',
  verifyConditions: [
    NPM,
    GH
  ]
};
