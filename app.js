const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from PipelineIQ test app' });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'pipelineiq-test-node'
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;
