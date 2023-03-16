const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();
const saltRounds = 10;
// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

/* Defining the schema for the user model. */
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

// Define user model with required fields
const User = mongoose.model('users', userSchema);

app.use(bodyParser.json());

// Create user route
app.post('/users', async (req, res) => {
    try {
        const rawPassword = req.body.password;

        req.body.password = await bcrypt.hash(rawPassword, saltRounds)
        const user = new User(req.body);
        console.log(user)
        await user.save();
        res.send(user);

    } catch (err) {
        res.status(400).send(err);
    }
});

// Read all users route
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Read user by id route
app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Update user by id route
app.patch('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete user by id route
app.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Start the server
app.listen(4000, () => {
    console.log('Server started on port 4000');
});
