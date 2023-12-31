const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
  apiKey: "API_KEY", // Idéalement, vous aurez mis votre clé api dans l'env
})
const openai = new OpenAIApi(configuration)

const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{ role: "user", content: "VOTRE_REQUETE_CHATGPT" }],
})

console.log(completion.data.choices[0].message)