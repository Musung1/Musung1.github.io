import OpenAI from 'openai';
const apiKey = process.env.VUE_APP_API_KEY
const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
});
export{
    openai
}