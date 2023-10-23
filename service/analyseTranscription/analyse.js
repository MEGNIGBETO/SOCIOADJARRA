$(document).ready(function () {
    $("#send-button").click(function () {
        sendMessage();
    });

    function sendMessage() {
        const userInput = $("#user-input").val();
        const chatOutput = $("#chat-output");

        // Afficher le message de l'utilisateur dans la fenêtre de chat
        chatOutput.append("<p>Vous : " + userInput + "</p>");

        // Effacer la zone de saisie utilisateur
        $("#user-input").val("");

        // Envoyer la requête au modèle GPT-3 (votre code pour envoyer la requête)
        //getGPTResponse(userInput, function (gptResponse) {
            // Afficher la réponse de GPT-3 dans la fenêtre de chat
        //    chatOutput.append("<p>GPT-3 : " + gptResponse + "</p>");
        //});
    }

    const { Configuration, OpenAIApi } = require("openai")

    const MY_FOURTH_NN = "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";

    const configuration = new Configuration({
        apiKey: MY_FOURTH_NN, // Idéalement, vous aurez mis votre clé api dans l'env
    })
    const openai = new OpenAIApi(configuration)

    const completion = openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Bonjour" }],
    })

    console.log(completion.data.choices[0].message)








    
});