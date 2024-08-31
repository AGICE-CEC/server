import 'dotenv/config';
import { createServer } from 'http';
import { app } from './app';
import { initializeSequelize } from './db';

const port = (process.env.PORT as unknown as number) || 2000;
const server = createServer(app);

const startServer = async () => {
  try {
    await initializeSequelize();
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);
  } catch (err) {
    console.error('Failed to initialize the server:', err);
    process.exit(1);
  }
};

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind =
    typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + (addr ? addr.port : '');
  console.log('Listening successfully on ' + bind);
}

startServer();
