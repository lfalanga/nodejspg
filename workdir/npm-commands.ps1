# Get npm version
npm -v

# Help
npm help

# Upgrade npm
npm install npm -g

# Create package.json file inside directory
npm init

# Login to a registry user account
npm login

# Add a registry user account
npm adduser

# List all configuration parameters in json format
npm config list --json

# Edit configuration file
npm config edit

# Install package
npm install pkg

# List all installed packages
npm ls

# Run test: https://docs.npmjs.com/cli/v10/using-npm/scripts
npm test

# Publish package
npm publish

# Update version: https://docs.npmjs.com/cli/v10/commands/npm-version
npm version 1.0.1

# dist-tag: https://docs.npmjs.com/cli/v10/commands/npm-dist-tag
npm help dist-tag

# Adding tags
npm dist-tag add @lfalanga/workdir@1.0.1 beta

# List outdated packages
npm outdated

# Update all packages
npm Update

# Remove dependencie (package) (--save to remove it from package.json)
npm uninstall --save  @linclark/pkg
