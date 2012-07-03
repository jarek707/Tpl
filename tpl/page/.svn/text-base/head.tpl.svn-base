<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" value="text/html"; charset="charset=utf-8" />
<script type='text/javascript'>App = {
	tabAction:'[%% tabAction %%]', 
	urlRoot: 'http://' + document.domain,
	getParams: [%% getParams %%] 
};
</script>
[%% cssJsLinks %%]
<!--[if IE]>
	<link rel='stylesheet' type='text/css' href='../css/ie.css' />
<![endif]-->
</head>

<body onUnload='UNLOAD();'>
	<div class='internalPlayer' id='internalPlayerWrap'></div>
	<div class='internalPlayer' id='playerClose' onclick='Broadcasts.playerClose();'></div>
	<div class='ovl' id='ovlContent'></div>
	<img id='ovlImg' onclick='ovlImgHide(this);'></div>

	<script type="text/javascript">App.hiLightTab('[%% selectedTab %%]');</script>
	<div id='bodyWrap'>
		<div id="avs-header">
			[%% headContent %%]
		</div>
		<div id='contentWrap'>
			<div id='leftMenuWrap'>
				<div id='leftMenuOver' onclick='NF.warn("Loading Silverlight Editor. Please try again");'></div>
				<div id='leftMenu' class=''></div>
			</div>

			<div id='rightPaneWrap'>
				<div id='actionInfo'>
					<div id='Info0' class='actionInfoLine'>
						<span class="lab">loading... </span>:
						<span class="val"></span>
					</div>
					<div id='Info1' class='actionInfoLine'>
						<span class="lab"></span>:
						<span class="val"></span>
					</div>
					<div id='Info2' class='actionInfoLine'>
						<span class="lab"></span>:
						<span class="val"></span>
					</div>
					<div id='Info3' class='actionInfoLine'>
						<span class="lab"></span>:
						<span class="val"></span>
					</div>
					<div id='actionButtons'>
						<div>
							<div id='addElm' class='btWrap' onclick="TV.doAdd();" >
								<div class='actionIcon add' title='Add New Item'></div>&nbsp;<div class='txt'>Add</div>
							</div>
							<div id='delElm' title='Delete Selected Item' class='btWrap' style='display:none' onclick="TV.doDel();">
								<div class='actionIcon del'></div>&nbsp;<div class='txt'>Delete</div>
							</div>
							<div id='multi'>
								<div id='multiAdd' class='btWrap' >
									<div class='actionIcon multiAdd' title='Add Multiple Items'></div>&nbsp;<div class='txt'>Add Multiple</div>
								</div>
								<div id='multiAddWrap'>
									<form  id='multiForm' method='post' enctype="multipart/form-data"
											onsubmit="return TV.doUpload(this);" action='../serviceinstant/savemulti' >
										<input type='file' name='multiAddFile[]' id='multiAddFile' onclick='TV.multiAddClicked=true; return true;' onmouseout='return TV.doMultiAdd();'  multiple=true />
										<input type='submit' id='multiSubmit' style='display:none' />
										<input type='hidden' name='MAX_FILESIZE' value='3000000' />
										<input type='hidden' name='elmCfg' id='elmCfg' />
									</form>
								</div>
								<div id='multiDel' class='btWrap' onclick='TV.doMultiDel();' >
									<div class='actionIcon multiDel' title='Delete All Items'></div>&nbsp;<div class='txt'>Delete All</div>
								</div>
							</div>
					</div>
						<div id='eventButtons' style='display:none'>
							<div id='createFunc' title='Manage Custom Functionalities' class='btWrap' onclick="TV.makeFunc()" >
								<div class='actionIcon func'></div> &nbsp;<div class='txt'>Functionalities</div>
							</div>

							<div id='cloneEvt' title='Clone selected event to another broadcast' class='btWrap' onclick="TV.cloneEvt()" >
								<div class='actionIcon clone'></div>&nbsp;<div class='txt'>Clone Event</div>
							</div>

							<div id='launcher' title='Launch Test Application' class='btWrap' onclick="TV.viewEvent()">
								<div class='actionIcon launcher'></div>&nbsp;<div class='txt'>View Event</div>
							</div>

							<div id='player'  title='Display Event Player Link' class='btWrap last' onclick="TV.eventLink()">
								<div class='actionIcon player'></div>&nbsp;<div class='txt'>Link</div>
							</div>
						</div>
					</div>
				</div>
				<div id='edPane'>
					<div id='aux' style='display:none'>
						<h2>Selected files:</h2>
						<div id='auxContent'></div>
						<input id='multi_saveButton' class='formButton update' value='' type='button' onclick='TV.clickMultiForm();' />
					</div>
				</div>
				<div id='gridPane'>
					<div id='gridPaneActions'>
						<div id='showTV'   title='Show Treeview Pane' class='action button' onclick='Grid.showTV();'></div>
						<div id='gridSave' title='Save Selelected Row' class='action button' onclick='Grid.save();'></div>
						<div id='gridDel'  title='Delete Selelected Row' class='action button'  onclick='Grid.del();'></div>
						<div id='gridAdd'  title='Add New Row' class='action button'  onclick='Grid.add();'></div>
						<div id='gridEdit' title='Edit Selected Row In Detail' class='action button'  onclick='Grid.edit();'></div>
					</div>
					<div id='gridContainer'></div>
				</div>
			</div> <!-- rightPaneWrap -->
		</div> <!-- contentWrap -->
	</div><!-- bodyWrap -->

	<div id='content' class='[%% selectedTab %%]'>
