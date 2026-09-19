module.exports = {
  apps: [
    {
      name: 'site-torino-vendere-gioielli',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3800',
      cwd: __dirname,
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3800,
      },
      max_memory_restart: '600M',
      autorestart: true,
      watch: false,
    },
  ],
};
