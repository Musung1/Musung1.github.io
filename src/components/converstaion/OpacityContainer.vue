<template>
        <div class="opacity-container"></div>
</template>
<style>
.opacity-container{
    height: 100px;
    width: 100%;
    position: absolute; /* 다른 요소는 상대 위치로 유지 */
    z-index: 1; /* 다른 요소는 기본적으로 투명한 div 아래에 위치 */
    background: linear-gradient(180deg, #FEF8F1 0%, rgba(253.94, 247.59, 241.24, 0.80) 42%, rgba(253.94, 247.59, 241.24, 0) 100%);
}
</style>