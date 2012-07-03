	<form  id='list_form_[%% subAction %%]' method='post' type='[%% formType %%]'
		[%% IF hasListUpload %%]
			enctype="multipart/form-data"
			onsubmit="return TV.doUpload(this);"
			action='../serviceinstant/upload'
		[%% ENDIF %%]
	>
		<input type='hidden' id='elmCfg' name='elmCfg' />
		[%% IF hasEditUpload %%]
			<input type="hidden" value="30000000" name="MAX_FILESIZE" />
		[%% ENDIF %%]
		<fieldset id='list_[%% subAction %%]' class='adminPane'>
			<div class='listSubPane'>[%% listContent %%]</div>
			<div class='btnWrap'>
				<input id='[%% subAction %%]_cancelButton' type='button' value='' class='formButton cancel'
					onclick='TV.doCancel("[%% subAction %%]");'
				/>
			</div>
			<div class='btnWrap'>
				<input id='[%% subAction %%]_saveButton' class='formButton update' value=''
					[%% IF hasListUpload %%]
						type='submit' 
					[%% ELSE %%]
						type='button' onclick='TV.doSave();'
					[%% ENDIF %%]
				/>
			</div>
		[%% IF treePane %%]
		<div class='leftLine edit'>.</div>
		[%% ENDIF %%]
		</fieldset>
	</form>
