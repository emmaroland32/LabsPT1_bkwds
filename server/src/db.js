import mongoose from "mongoose"
import config from "./config"

mongoose.Promise = global.Promise
mongoose.set("useCreateIndex", true)

// const databaseURI = config.db.url
const options = {
  useNewUrlParser: true,
  useFindAndModify: false
}

export const connect = () => {
  return mongoose
    .connect(
      config.db.url,
      options
    )
    .then(() => {
      console.log("MONGO DB CONNECTED")
    })
    .catch(err => {
      console.log(err)
      console.log(`Connection failed with config ${config.db.url}`)
    })
}