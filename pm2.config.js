module.exports = {
    apps: [
      {
        script: "node_modules/next/dist/bin/next",
        args: "start",
        instances: '8',
        name: 'transfer',
        env: {
            NODE_ENV: "production",
            PORT: 4000    
          }
      }
    ],
  };