<template>
<div class="story">
    <img id="storyText" src="../../assets/StoryText.png">
    <p v-if="!load" id="storyStartText">아띠가 재미있는 이야기를 들려줄게요.</p>
    <p v-if="load" id="storyStartText">아띠가 {{ result.제목}} 이야기를 들려줄게요.</p>
    <img v-if="load" src="../../assets/cute_atti.gif" class = "cute-atti">
    <div v-if="!load">
        <div class="rectangle"> {{result.서론}}</div>
        <div class="rectangle"> {{result.본론}}</div>
        <div class="rectangle"> {{result.결론}}</div>
    </div>
</div>
</template>
<script>
    import OpenAI from 'openai'
    const apiKey = process.env.VUE_APP_API_KEY
    const openai = new OpenAI({
        apiKey: apiKey, // defaults to process.env["OPENAI_API_KEY"]
        dangerouslyAllowBrowser: true,
    });
    class Story{
        제목;
        서론;
        본론;
        결론;
        constructor(제목,서론,본론,결론) {
            this.제목 = 제목;
            this.서론 = 서론;
            this.본론 = 본론;
            this.결론 = 결론;
        }
    }
    class Message {
        role;
        content;
        constructor(role, content) {
        this.role = role;
        this.content = content.trim();
        }
    }

export default{
    data(){
        return{
            result: new Story(),
            load: false,
        }
    },
    props:{
        keyword:String,
    },
    watch: {
    keyword() {
        this.run()
    },
  },
    methods:{
        async run(){
            this.load = true
            const messages = [new Message('user',`6-10세 아이들에게 ${this.keyword}와 관련된 교훈이 담긴 재미있는 이야기를 들려주려고 해. 친구에게 말하듯이 "~했어"라는 반말 문체를 써줄래?.return as a JSON object in this format:{"제목":String","서론":"String","본론":"String","결론":"String"}`)];
            const completion = await openai.chat.completions.create({
            messages: messages,
            model: "gpt-3.5-turbo",
            });
            const jsonString = completion.choices[0].message.content
            try {
            const jsonObject = JSON.parse(jsonString);
            this.result = jsonObject
            messages.push(new Message("assistant",jsonString))
            this.$emit('send-data',messages);
            this.load = false
            } catch (error) {
            console.error('JSON 파싱 중 오류 발생:', error);
            }
        },
    },
}
</script>
<style>
    .cute-atti{
        height: 300px;
        width: 300px;
    }
    .story {
        min-height: 1300px; 
        background-color: #FF7C46;
        border: 0; 
        padding-bottom: 180px;}
    .story #storyStartText {
        color: var(--text-dark-400, rgba(255, 255, 255, 0.70));
        text-align: center;
        font-family: Pretendard;
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-top: 32px; margin-bottom: 60px;
    }    
    .story #storyText {
        width: 650px; 
        margin-top: 184px;
    }
    .story .rectangle 
    {
        max-width: 970px; 
        background-color: #FEF8F1; 
        margin: auto;
        margin-top: 40px; 
        padding: 65px 120px 65px 120px;
        border-color: red;
        border-radius: 45px;
        color: #373737;
        text-align: center;
        font-family: Pretendard;
        font-size: 26px;
        font-style: normal;
        font-weight: 600;
        line-height: 48px;
    }
</style>