<template>
  <div class="works">


<div id="container">
<!--PC用（801px以上端末）で表示させるブロック-->
<header class="pc">

	<h1 class="logo"><a href="index.html"><img src="images/logo.png" alt="Logo"></a></h1>

	<!--PC用（801px以上端末）メニュー-->
	<nav id="menubar">
	<ul>
	<li class="menuimg menu1 "><router-link to="/"><span>Home</span></router-link></li>
	<li class="menuimg menu2 "><router-link to="/company"><span>Company</span></router-link></li>
	<li class="menuimg menu3 current"><router-link to="/works"><span>Works</span></router-link></li>
	<li class="menuimg menu4 "><router-link to="/links"><span>Links</span></router-link></li>
	<li class="menuimg menu5 "><router-link to="/contact"><span>Contact</span></router-link></li>
	</ul>
	</nav>
	<ul class="icon">
	<li><a href="#"><img src="images/icon_facebook.png" alt="Facebook"></a></li>
	<li><a href="#"><img src="images/icon_twitter.png" alt="Twitter"></a></li>
	<li><a href="#"><img src="images/icon_instagram.png" alt="Instagram"></a></li>
	<li><a href="#"><img src="images/icon_youtube.png" alt="YouTube"></a></li>
	</ul>

</header>
<!--/.pc-->

<!--小さな端末用（800px以下端末）で表示させるブロック-->
<header class="sh">

	<h1 class="logo"><a href="index.html"><img src="images/logo.png" alt="Logo"></a></h1>

	<!--小さな端末用（800px以下端末）メニュー-->
	<div id="menubar-s">
	<nav>
	<ul>
	<li class="menuimg menu1 "><router-link to="/"><span>Home</span></router-link></li>
	<li class="menuimg menu2 "><router-link to="/company"><span>Company</span></router-link></li>
	<li class="menuimg menu3 current"><router-link to="/works"><span>Works</span></router-link></li>
	<li class="menuimg menu4"><router-link to="/links"><span>Links</span></router-link></li>
	<li class="menuimg menu5"><router-link to="/contact"><span>Contact</span></router-link></li>
	</ul>
	</nav>
	<ul class="icon">
	<li><a href="#"><img src="images/icon_facebook.png" alt="Facebook"></a></li>
	<li><a href="#"><img src="images/icon_twitter.png" alt="Twitter"></a></li>
	<li><a href="#"><img src="images/icon_instagram.png" alt="Instagram"></a></li>
	<li><a href="#"><img src="images/icon_youtube.png" alt="YouTube"></a></li>
	</ul>
	
	</div>
	<!--/#menubar-s-->

</header>
<!-- <Header/> -->
<div id="contents">

<div id="main">

<section id="pagetop">

<h2 class="title">Works<span>業務内容</span></h2>

<div class="list-flex">
<div class="list">

<router-link class="list-works" to="/about">
<figure><img src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg" alt=""></figure>
<h4>事業紹介</h4>
</router-link>
</div>

<div class="list">
<router-link class="list-works" to="/vanilla">
<figure><img src="images/vanila.png"  alt=""></figure>
<h4>バニラビーンズ</h4>
</router-link>
</div>

<div class="list">
<router-link class="list-works" to="/products">
<figure><img src="images/works3.png" alt=""></figure>
<h4>商品紹介</h4>
</router-link>
</div>
</div>

</section>



<footer>
	<small>Copyright&copy; <a href="index.html">株式会社SHOSEN</a> All Rights Reserved.</small>
<span class="pr"><a href="https://template-party.com/" target="_blank">《Web Design:Template-Party》</a></span>
</footer>

</div>
<!--/#main-->

</div>
<!--/#contents-->

</div>
<!--/#container-->

<!--ページの上部に戻る「↑」ボタン-->
<p class="nav-fix-pos-pagetop"><a href="#pagetop">↑</a></p>

<!--メニュー開閉ボタン-->
<div id="menubar_hdr" class="close"></div>

  </div>
</template>