	<a id="avs-siteLogo" href="#"><img src="[%% logoImg %%]" /></a>
	<div id="avs-primaryNavigation">
		<ul>
			<li class="avs-identity">
				Welcome
				<span class='headerUserName' >[%% userName %%] </span> | 
				<span class='headerBroadcaster' >[%% broadcaster %%] </span>
			</li>
			<li id='logout'  class="avs-logout"><a class='logout'  href='../logout'>Logout</a></li>
			<li id='account' class="avs-account"><a href='users?logged=1' >My Account</a><br /></li>
			<li id='home' class="avs-home"><a href='../'>Home</a></li>
			<li id='prefs' class="avs-home"><div onclick="Prefs.dlog();">Prefs</div></li>
			<div id='prefsDiv'></div>
		</ul>
	</div>
	<div id='progress' onClick='NF.toggleVis();'>
		<div id='p0' class='pLine'>
			<div id='pIcon'></div>
			<div id='pText'></div>
		</div>
		<div id='p1' class='pLine'>
			<div id='pIcon'></div>
			<div id='pText'></div>
		</div>
		<div id='p2' class='pLine'>
			<div id='pIcon'></div>
			<div id='pText'></div>
		</div>
		<div id='debug' class='pLine'></div>
	</div>
