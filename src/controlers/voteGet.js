import { voteCollections } from "../db.js";

export async function getVotes (req, res){
    const choiceId = req.params.id
    let totalVotes = 0

    try {
        const votes = await voteCollections.find(choiceId)
        votes.forEach(element => {
            totalVotes++
        });

        const result = {
            _id: votes.id,
	        title: votes.title,
	        expireAt: votes.expireAt,
	        result : {
		        title: votes.choice.title,
		        votes: totalVotes
	        }
        }
        res.send(result);
      } catch (err) {
        console.log(err);
        res.sendStatus(500);
      }
}