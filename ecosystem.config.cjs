module.exports = {
  apps: [
    {
      name: 'lagamberra-landing',
      script: './.output/server/index.mjs',
      exec_mode: 'cluster',
      instances: 'max',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
}
