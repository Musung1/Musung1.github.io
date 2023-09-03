<template>
	<header>
		<h1><a href="#" class="logo"><img alt="Vue logo" src="../../assets/logo.png" height="65"></a></h1>
		<div class="menuWrap">
			<ul class="menu">
				<li id="homeLi"><router-link to="/">홈</router-link></li>
				<li><router-link to="/board/myList">아띠와 나눈 대화들</router-link></li>
			</ul>
		</div>
	</header>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
	text-align: center;
	position: fixed;
	height: 120px;
	width: 100%;
	background-color: rgba(249, 241, 233, 0.8);
}

header h1 {
	position: absolute;
	top: 27px;
	left: 255px;
}

header ul.menu:after {
	display: block;
	clear: both;
	content: '';
}

header ul.menu {
	position: absolute;
	right: 160px;
}
.menuWrap {
	margin-top: 53px;
}
header ul.menu li {
	float: left;
	padding: 0px 20px 38px 20px;
	list-style: none;
	font-family: Pretendard;
	font-size: 24px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
}

a {
	text-decoration: none;
	color: #333;
	
}

#homeLi {
	opacity: 0;
}
</style>