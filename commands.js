// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis

use jaskis
// 2. Create a collection called bounties
db.createCollections('bounties')

// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object

db.jaskins.insertOne({})
// 2. Query for all bounties in the bounties collection
db.jaskins.find()

// 3. Insert many bounties at once using the given objects
db.jaskins.insertMany({})
// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
db.jaskins.find({ location: "Grasslands" }) 
// 2. Query for all bounties with a reward worth 10000 or more
db.jaskins.find({reward: {gt: 10000}})
use $gt operator 
// 3. Query for all bounties, but exclude the client attribute from being shown
 db.jaskis.find({},{client:0}) 
"0: If you don't want the field to be returned in the query"
// 4. Query for a Groundhog in the Woodlands
db.jaskis.find({$and:[{species:"Groundhog"},{location:"Woodlands"}]})



// Update and Delete
// 1. Update the reward for Polarwind to 10000
 db.jaskis.updateOne({name:"Polarwind"},{$set:{reward: 10000}})
// 2. Remove Lokinkajou
db.jaskis.deleteOne({name:"Lokinkajou"})
// 3. Delete all bounties sent by Songbird
db.jaskis.deleteMany({client:"Songbird"})
// 4. Update all captured statuses to true
db.jaskis.updateMany({},{$set:{captured:true}})