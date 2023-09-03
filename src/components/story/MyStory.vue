<template>
<div class="story">
    <img id="storyText" src="../../assets/StoryText.png">
    <h1 v-if="load"> 생성중 </h1>
    <p id="storyStartText">아띠가 {{ result.제목}} 이야기를 들려줄게요.</p>
    <div class="rectangle"> {{result.서론}}</div>
    <div class="rectangle"> {{result.본론}}</div>
    <div class="rectangle"> {{result.결론}}</div>
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
    .story {height: 1677px; background-color: #FF7C46;border: 0; margin: 0;}
    .story #storyStartText {
        color: var(--text-dark-400, rgba(255, 255, 255, 0.70));
        text-align: center;
        font-family: Pretendard;
        font-size: 36px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-top: 32px; margin-bottom: 128px;
    }    
    .story #storyText {width: 842px; margin-top: 184px;}
    .story .rectangle {width: 1410px; height: 297px; background-color: #FEF8F1; margin: auto; margin-top: 60px; border-radius: 60px;}
</style>