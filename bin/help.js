'use strict'

const { gray, white } = require('picocolors')

module.exports = white(`Usage
  ${gray('$')} git-authors-cli ${gray('[options]')}

Options
  ${gray('--')}cwd    ${gray(
  'Specify the path for running the command (defaults to process.cwd())'
)}
  ${gray('--')}save   ${gray(
  'Write contributors into package.json if it exists (defaults to true)'
)}
  ${gray('--')}print  ${gray('Show information from the terminal (defaults to true)')}
  ${gray('--')}ignore-pattern  ${gray('Skip authors if their name or email match pattern (allow multiple)')}

Examples
  ${gray('$')} git-authors-cli ${gray('# Get contributors for the current path project.')}
  ${gray('$')} git-authors-cli ~/Projects/metascraper ${gray(
  '# Get contributors for a specific path project.'
)}
  ${gray('$')} git-authors-cli --ignore-pattern noreply.github.com ${gray('# Ignore github public surrogate emails.')}
  `)
