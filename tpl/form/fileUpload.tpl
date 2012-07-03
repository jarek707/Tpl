<div id='[%% pfix %%][%% domId %%]Inner'>
	<div class='vInfo' style='display:none;' onclick='fileLaunch(this)'></div>
[%% IF upld %%]
	<div class='upldWrap file'>
		<input type='file' class='fileInput' id='file_[%% pfix %%][%% domId %%]' name='file_[%% pfix %%][%% domId %%][]' />
		<div class='uplOvl' />
	</div>
[%% ENDIF %%]
	<input type='hidden' id='[%% pfix %%][%% domId %%]' name='[%% pfix %%][%% domId %%]' />
</div>
