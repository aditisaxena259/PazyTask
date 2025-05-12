const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const SETTINGS_PATH = './settings.json';


app.get('/api/table-settings', (req, res) => {
  if (!fs.existsSync(SETTINGS_PATH)) {
    return res.json({ settings: {} });
  }

  const settings = JSON.parse(fs.readFileSync(SETTINGS_PATH));
  res.json(settings);
});


app.post('/api/table-settings', (req, res) => {
  const settings = req.body;
  fs.writeFileSync(SETTINGS_PATH, JSON.stringify(settings, null, 2));
  res.json({ success: true });
});


app.delete('/api/table-settings', (req, res) => {
  if (fs.existsSync(SETTINGS_PATH)) {
    fs.unlinkSync(SETTINGS_PATH);  // Delete the settings file
  }
  res.json({ success: true });
});


app.delete('/api/table-settings/:id', (req, res) => {
  const { id } = req.params;

  if (!fs.existsSync(SETTINGS_PATH)) {
    return res.status(404).json({ error: 'Settings file not found' });
  }

  let settings = JSON.parse(fs.readFileSync(SETTINGS_PATH));


  settings = settings.filter(row => row.id !== id);

  fs.writeFileSync(SETTINGS_PATH, JSON.stringify(settings, null, 2));

  res.json({ success: true, deletedId: id });
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
  });
