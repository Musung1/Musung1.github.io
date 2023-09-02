<template>
  <div id="body">
    <div class="intro">
      <img id="introText" src="../assets/IntroText.png">
    </div>
    <div class="keyword">
      <div><img id="keywordText1" src="../assets/KeywordText1.png"></div>
      <img id="keywordText2" src="../assets/KeywordText2.png">
    </div>
    <div class="story">
      <img id="storyText" src="../assets/StoryText.png">
      <p id="storyStartText">아띠가 [피자만 좋아하는 한석이] 이야기를 들려줄게요.</p>
      <div class="rectangle"> </div>
      <div class="rectangle"> </div>
      <div class="rectangle"> </div>
    </div>
    <div class="talk">
      <img id="talkText1" src="../assets/TalkText1.png">
      <img id="talkText2" src="../assets/TalkText2.png">
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  .intro {height: 1080px; background-image: url(".././assets/IntroBack.png");
    background-size: cover;}
  .intro #introText {width: 1124px; height: 278px; margin-top: 443px;}
  

  .keyword {height: 933px; background-color: #FEF8F1;border: 0; margin: 0;}
  .keyword #keywordText1 {width:859px; height: 80px; margin-top: 184px;}
  .keyword #keywordText2 {width:768px; height: 72px; margin-top: 40px;}
  
  .story {height: 1677px; background-color: #FF7C46;border: 0; margin: 0;}
  .story #storyStartText {color: var(--text-dark-400, rgba(255, 255, 255, 0.70));
text-align: center;
font-family: Pretendard;
font-size: 36px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: 32px; margin-bottom: 128px;}
  .story #storyText {width: 684px; height: 80px; margin-top: 184px;}
  .story .rectangle {width: 1410px; height: 297px; background-color: #FEF8F1; margin: auto; margin-top: 60px; border-radius: 60px;}

  .talk {height: 1859px; background-color: #FEF8F1;border: 0; margin: 0;}
  .talk #talkText1 {width:910px; height: 80px; margin-top: 184px;}
  .talk #talkText2 {width:817px; height: 72px; margin-top: 40px;}
  
</style>
