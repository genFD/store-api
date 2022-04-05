import mongoose from 'mongoose';
import colors from 'colors';

colors.setTheme({
  database: ['bgMagenta', 'black', 'underline'],
  error: ['bgRed', 'black', 'bold', 'underline'],
});
const connectDB = async (uri) => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(`MONGODB CONNECTED: ${conn.connection.host}`.database);
  } catch (error) {
    console.log(`ERROR: ${error.message}`.bgBrightRed.black.bold.underline);
    process.exit(1);
  }
};

export default connectDB;
