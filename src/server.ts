import config from './config';
import app from './app';
const { port } = config;

app.listen(port, () => console.log(`Server is running on port ${port}`));