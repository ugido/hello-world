function title(url) {
  return '=IMPORTXML("'+url+'";"/html/head/title")';
}

const SECRET_KEY = "";
const MAX_TOKENS = 800;
const TEMPERATURE = 0.9;

function AI_ChatGPT(prompt, temperature = 0.4, model = "gpt-3.5-turbo") {
  const url = "https://api.openai.com/v1/chat/completions";
  const payload = {
    model: model,
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: prompt },
    ],
    temperature: TEMPERATURE,
    max_tokens: MAX_TOKENS,
  };
  const options = {
    contentType: "application/json",
    headers: { Authorization: "Bearer " + SECRET_KEY },
    payload: JSON.stringify(payload),
  };
  const res = JSON.parse(UrlFetchApp.fetch(url, options).getContentText());
  return res.choices[0].message.content.trim();
}

=IMPORTXML("URL"; "/html/head/meta[@name='description']/@content")
=IMPORTXML("URL"; "/html/head/title")
Test=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
