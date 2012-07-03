	<form  id='edit_form_[%% adId %%]' method='post' action='../serviceinstant/save'
		[%% IF hasEditUpload %%]
			enctype="multipart/form-data"
			onsubmit="return TV.doUpload(this);"
		[%% ENDIF %%]
	>
		[%% IF hasEditUpload %%]
			<input type="hidden" value="30000000" name="MAX_FILESIZE" />
		[%% ENDIF %%]
		<fieldset id='edit_[%% adId %%]' class='adminPane' style='display:none'>
			[%% IF hasMultipleTabs %%]
				[%% ITERATE tpl/editTabs.tpl %%]
			[%% ENDIF %%]
			<div class='subPane'>
				[%% ITERATE tpl/tabDivContent.tpl tabDivContent %%]
			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				[%% IF hasEditUpload %%]
					type='submit' value='Add' 
				[%% ELSE %%]
					type='button' value='Add' onclick='TV.doSave("[%% adId %%]");'
				[%% ENDIF %%]
				/>
				<input id='[%% adId %%]_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='[%% adId %%].doCancel();'
				/>
			</div>
		</fieldset>
	</form>
