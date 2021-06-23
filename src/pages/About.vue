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


	<!-- Box -->
	<section class="box">
		<h2 class="title">食品輸入事業<span></span></h2>

<figure class="c mb30">
<img src="images/work2_top.png" width="100%" alt="写真の説明を入れます">
</figure>

		<h2 >私たちはインドネシア産のバニラビーンズ、コーヒー豆、カカオ、ココアを輸入し国内で販売をしています。</h2>
		<!-- <img src="images/top1.png" alt=""> -->
		<h3>インドネシア商業省とのプロジェクトによりインドネシア国内の高品質な食品原材料を低コストでのご提供が可能です。

			インドネシアのオーガニック食品を皆さまへお届けし喜んでもらう事、
			インドネシア農家の方々の発展に尽力しています。
			私たちの農場について
			インドネシアで高評価を受けている、ボゴール農科大学(IPB)から直接、
			最高のオーガニックの種を仕入れて育てています。
			最高品質の食品原材料を提供するため、ランプン、ロンボク、北スマトラなど、インドネシアのさまざまな地域の専門のインドネシア内の農家の方々と協力して、
			最高品質のオーガニック食品原材料を栽培をしています。</h3>
			<div class="flex about-image flex-col md:flex-row py-3">
			<div>
				<img src="images/works2_1.png" alt="" class="works-image" > 
			</div>
       
			<div>
				<img src="images/works2_2.png" alt="" class="works-image" > 
			</div>

			</div>
		
		</section>
	<!-- Box -->

<p><a href="javascript:history.back()">&lt;&lt; 前のページに戻る</a></p>

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