require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


async function seed() {
  await User.deleteMany({});
  await Post.deleteMany({});

  const users = await User.insertMany([
    { username: 'Alice', email: 'alice@example.com', password: '123456' },
    { username: 'Bob', email: 'bob@example.com', password: '123456' },
  ]);

  const posts = await Post.insertMany([
    { user: users[0]._id, content: 'Hello world!' },
    { user: users[1]._id, content: 'This is a test post.' },
  ]);

  posts[0].comments.push({ user: users[1]._id, text: 'Nice post!' });
  posts[0].likes.push(users[1]._id);

  posts[1].comments.push({ user: users[0]._id, text: 'Great!' });
  posts[1].likes.push(users[0]._id);

  await posts[0].save();
  await posts[1].save();

  console.log('Seed done!');
  mongoose.connection.close();
}

seed();
