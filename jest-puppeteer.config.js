const ci = Boolean(process.env.CI || false);

const baseOptions = {
  launch: {
    headless: true,
    slowMo: 25
  },
  server: {
    command: 'python3 -m http.server',
    port: 8000
  }
};

const ciPipelineOptions = {
  launch: {
    executablePath: '/usr/bin/google-chrome-stable',
    headless: true,
    slowMo: 25,
    args: [
      '--ignore-certificate-errors',
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu'
    ]
  },
  server: baseOptions.server
};

module.exports = ci ? ciPipelineOptions : baseOptions;
