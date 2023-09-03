<template>
    <div>
    <v-chip variant="text" class="end-chip" @click="next">다음 질문으로 넘어가기</v-chip>
    <v-chip variant="text" class="next-chip" @click="end">대화 끝내기</v-chip>
</div>
</template>
<script>
export default {
    props:{
        isEnd: Boolean
    },
    methods:{
        next(){

        },
        end(){
            this.$emit('send-data', !this.isEnd);
        }
    }
}
</script>
<style>
.end-chip{
    background-color: #FFB547 !important; 
    color: white !important; 
    display: inline-flex;
    width: 486px !important;
    height: 120px !important;
    padding: 36px 61px 36px 60px !important;
    justify-content: center !important;
    align-items: center !important; 
    text-align: right !important;
    font-family: Pretendard !important;
    font-size: 40px !important;
    font-style: normal !important;
    font-weight: 700 !important;
    line-height: normal !important;  
    margin-right: 40px !important;  
}
.next-chip{
    width: 339px !important;
    height: 120px !important;
    padding: 36px 78px !important;
    background-color: #FF7C46 !important;
    color: white !important; 
    justify-content: center !important;
    align-items: center !important; 
    text-align: right !important;
    font-family: Pretendard !important;
    font-size: 40px !important;
    font-style: normal !important;
    font-weight: 700 !important;
    line-height: normal !important;   
}
</style>