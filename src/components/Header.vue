<template>
  <div>
    <!--PC用（801px以上端末）で表示させるブロック-->
<header class="pc">

	<h1 class="logo"><router-link to="/"><img src="images/logo.png" alt="Logo"></router-link></h1>

	<!--PC用（801px以上端末）メニュー-->
	<nav id="menubar">
	<ul>
	<li class="menuimg menu1 "><router-link to="/"><span>Home</span></router-link></li>
	<li class="menuimg menu2 "><router-link to="/company"><span>Company</span></router-link></li>
	<li class="menuimg menu3 "><router-link to="/works"><span>Works</span></router-link></li>
	<li class="menuimg menu4 "><router-link to="/links"><span>Links</span></router-link></li>
	<li class="menuimg menu5 "><router-link to="/contact"><span>Contact</span></router-link></li>
	<!-- <li class="menuimg menu2"><a href="company.html"><span>Company</span></a></li>
	<li class="menuimg menu3"><a href="works.html"><span>Works</span></a></li>
	<li class="menuimg menu4"><a href="link.html"><span>Links</span></a></li>
	<li class="menuimg menu5"><a href="contact.html"><span>Contact</span></a></li> -->
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
<!-- <button onclick="myFunction()" id="">aaaaa</button> -->
<!--小さな端末用（800px以下端末）で表示させるブロック-->
<header class="sh">

	<h1 class="logo"><a href="index.html"><img src="images/logo.png" alt="Logo"></a></h1>

	<!--小さな端末用（800px以下端末）メニュー-->
	<div id="menubar-s">
	<nav>
	<ul>
	<li class="menuimg menu1"><router-link to="/" ><span>Home</span>
</router-link></li>
	<li class="menuimg menu2 close" ><router-link :to="{name:'company'}" ><span>Company</span></router-link></li>
	<li class="menuimg menu3"><router-link :to="{name:'works'}" exact-active-class="current close"><span>Works</span></router-link></li>
	<li class="menuimg menu4"><router-link :to="{name:'links'}"><span>Links</span></router-link></li>
	<li class="menuimg menu5"><router-link :to="{name:'contact'}"><span>Contact</span></router-link></li>
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

  </div>
</template>


