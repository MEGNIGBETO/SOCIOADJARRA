function getGPTResponse(userInput, callback) {
    // Remplacez 'VOTRE_CLE_API' par votre clé d'API GPT-3
    const apiKey = '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';
    const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

    // Préparez les données à envoyer
    const requestData = {
        prompt: userInput,
        max_tokens: 50, // Nombre de tokens dans la réponse
    };

    // Effectuez la requête à l'API de GPT-3 en utilisant jQuery
    $.ajax({
        type: 'POST',
        url: apiUrl,
        headers: {
            'Authorization': `Bearer ${apiKey}`
        },
        data: JSON.stringify(requestData),
        contentType: 'application/json',
        success: function (response) {
            const gptResponse = response.choices[0].text;
            callback(gptResponse);
        },
        error: function (error) {
            console.error('Erreur lors de la requête à GPT-3 :', error);
            callback('Erreur lors de la requête à GPT-3.');
        }
    });
}