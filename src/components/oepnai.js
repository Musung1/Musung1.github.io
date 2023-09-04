import OpenAI from 'openai';
// const apiKey = process.env.VUE_APP_API_KEY
const openai = new OpenAI({
    apiKey: process.env.VUE_APP_API_KEY,
    dangerouslyAllowBrowser: true,
});
export{
    openai
}