

export async function createPoll(req, res) {
    const poll = req.body;

    try {
      await usersCollection.insertOne({ ...user, password: passwordHash });
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }