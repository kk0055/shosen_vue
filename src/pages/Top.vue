<template>
  <div class="home"> 


<div id="container">
<!--PC用（801px以上端末）で表示させるブロック-->
<header class="pc">

	<h1 class="logo"><a href="index.html"><img src="images/logo.png" alt="Logo"></a></h1>

	<!--PC用（801px以上端末）メニュー-->
	<nav id="menubar">
	<ul>
	<li class="menuimg menu1 current"><router-link to="/" ><span>Home</span></router-link></li>
	<li class="menuimg menu2 "><router-link to="/company"><span>Company</span></router-link></li>
	<li class="menuimg menu3 "><router-link to="/works"><span>Works</span></router-link></li>
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



<div id="contents">

<div id="main">

<span id="pagetop"></span>

 <section id="new"> 
<!-- <h2>What's New</h2>
<dl>
<dt>2019/11/09</dt>
<dd>幅800px以下の端末でトップページの「What's New」を見た場合にスクロールできなかった問題点を修正。利用中のお客様は、style.cssの800px以下に#new dl {overflow: auto;}を追加して下さい。<span class="newicon">NEW</span></dd>
<dt>2019/08/27</dt>
<dd>印刷した際に１ページ目しか印刷できない問題を修正しました。</dd>
<dt>2019/08/17</dt>
<dd>ページ右下の「↑」アイコンをクリックしても上部に戻らない不具合を修正しました。</dd>
<dt>2019/07/19</dt>
<dd>tp_biz52公開。</dd>
<dt>20XX/00/00</dt>
<dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>
<dt>20XX/00/00</dt>
<dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>
<dt>20XX/00/00</dt>
<dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>
<dt>20XX/00/00</dt>
<dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>
<dt>20XX/00/00</dt>
<dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>
<dt>20XX/00/00</dt>
<dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>
<dt>20XX/00/00</dt>
<dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>
</dl> -->
</section> 
<!--/#new-->

<footer>
<small>Copyright&copy; <a href="index.html">株式会社SHOSEN</a> All Rights Reserved.</small>
<span class="pr"><a href="https://template-party.com/" target="_blank">《Web Design:Template-Party》</a></span>
</footer>

</div>
<!--/#main-->

</div>
<!--/#contents-->

<!--スライドショー-->
<aside id="mainimg">
<div class="slide0">slide0</div>
<div class="slide1">slide1</div>
<div class="slide2">slide2</div>
<div class="slide3">slide3</div>
</aside>

</div>
<!--/#container-->
<!--ページの上部に戻る「↑」ボタン-->
<p class="nav-fix-pos-pagetop"><a href="#pagetop">↑</a></p>

<!--メニュー開閉ボタン-->
<div id="menubar_hdr" class="close"></div>

</div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
   components: {
    Header
  }
}
</script>