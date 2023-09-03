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
            console.log("hellowww");
            window.scrollTo({
            top: 0, // 스크롤할 위치의 Y 좌표를 0으로 설정합니다.
            behavior: 'smooth' // 부드러운 스크롤 효과를 적용합니다.
            });
        }
    }
}
</script>
<style>
.end-chip{
    background-color: #FFB547 !important; 
    color: white !important; 
    display: inline-flex;

    padding: 46px 61px 46px 60px !important;
    justify-content: center !important;
    align-items: center !important; 
    text-align: right !important;
    font-family: Pretendard !important;
    font-size: 24px !important;
    font-style: normal !important;
    font-weight: 700 !important;
    line-height: normal !important;  
    margin-right: 40px !important;  
}
.next-chip{

    padding: 46px 78px !important;
    background-color: #FF7C46 !important;
    color: white !important; 
    justify-content: center !important;
    align-items: center !important; 
    text-align: right !important;
    font-family: Pretendard !important;
    font-size: 24px !important;
    font-style: normal !important;
    font-weight: 700 !important;
    line-height: normal !important;   
}
</style>