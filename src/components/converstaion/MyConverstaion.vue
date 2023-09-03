<template>  
    <div class="scroll-card" ref="scrollContainer" >
    <SysChatBubble message= "안녕! 나는 너의 이야기 친구 아띠야! 이야기도 읽었으니, 함께 즐거운 이야기를 나눠볼까?"/>
    <v-chip v-if="!isStart" class="start-chip" @click="start">시작하기</v-chip>
    <div v-for="(message,i) in messages.filter((element, index) => ![0,1,2].includes(index))" :key="i">
        <SysChatBubble v-if="message.role === 'assistant'" v-bind:message= "message.content "/>
        <MyChatBubble v-if="message.role === 'user'" v-bind:message= "message.content"/>
    </div>
    <SysChatBubble v-if="load" message="..."/>
</div>  
    <input v-model="input" placeholder="여기를 수정해보세요">
    <button type="button" @click="run" > button </button>
</template>
<script>
    import MyChatBubble from './MyChatBubble.vue';
    import SysChatBubble from './SysChatBubble.vue';
    import OpenAI from 'openai';
    const ROLE_ASSISTANT = 'assistant';
    //onst ROLE_SYSTEM = 'system';
    const ROLE_USER = 'user';
    const apiKey = process.env.VUE_APP_API_KEY
    const openai = new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true,
    });
    class Message {
        role;
        content;

        constructor(role, content) {
        this.role = role;
        this.content = content.trim();
        }
    }
    export default{
    components:{
        MyChatBubble,
        SysChatBubble,
    },
    data(){
        return{
            messages:[],
            input:"",
            load: false,
            ////
            isScroll: false,
            scrolling: false,
            isTop: true,
            ////
            isStart: false,
            
        }
    },
    props:{
        value:{}
    },
    watch:{
        value(){
            this.messages = this.value
        },
        messages: {
            deep: true,
            handler(){
                console.log(this.messages);
                window.setTimeout(this.scrollToBottom, 30);
            },
        }
    },
    methods:{
        scrollToBottom() {
            const scrollContainer = this.$refs.scrollContainer;
            scrollContainer.scrollTop = scrollContainer.scrollHeight;
            if(scrollContainer.scrollTop > 0){
                this.isScroll = true;
            }
        },
        async start(){
            this.isStart = true
            this.load = true
            const msg = `6살 아이와 너는 이 이야기로 하브루타를 할거야. 너의 역할은 또래의 6살 아이야. 대답은 친구에게 말하듯이 "~했어"혹은 "~해"라는 반말체를 써.  너가 먼저 이 이야기에 대한 질문으로 시작해 return as a JSON object in this format:{"질문":String}`
            this.messages.push(new Message(ROLE_USER,msg))
            const completion = await openai.chat.completions.create({
            messages: this.messages,
            model: "gpt-3.5-turbo",
            });
            const jsonString = completion.choices[0].message.content
            try {
                const jsonObject = JSON.parse(jsonString);
                this.messages.push(new Message("assistant",jsonObject.질문))
            } catch (error) {
                console.error('JSON 파싱 중 오류 발생:', error);
            }
                    
            this.load = false
            },
        async run(){
            this.load = true
            this.messages.push(new Message(ROLE_USER,this.input))


            const completion = await openai.chat.completions.create({
            messages: this.messages,
            model: "gpt-3.5-turbo",
            });

            this.result = completion.choices[0].message.content

            this.messages.push(new Message(ROLE_ASSISTANT,this.result))
            this.load = false
        },
    },
}
</script>
<style scoped>
.scroll-card{
    width:500px; height:300px;
    background-color:#CF0;
    margin: auto;
    overflow-y: auto;
    position: relative; 
}
.start-chip{
        background: #FF7C46;
        border-radius: 120px;
        color: white;
        margin: 8px;
        float:right;
    }
</style>