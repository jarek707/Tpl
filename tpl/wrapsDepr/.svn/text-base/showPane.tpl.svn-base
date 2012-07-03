	<form method='POST' id='form_[%% subAction%%]_[%% paneType %%]'
		[%% IF uploadForm %%]
		enctype='multipart/form-data' action='../serviceupload/[%% lcSubAction %%]'
						onsubmit='return Upload.runAndAdd("[%% subAction %%]" , this);'
		[%% ENDIF %%]
	>

		<fieldset id='[%% paneType %%]_[%% subAction %%]' class='adminPane [%% isNarrow %%]' style='display:[%% initialDisplay %%]' >
		[%% IF uploadForm %%]
			<input type="hidden" name="MAX_FILE_SIZE" value="3000000" />
		[%% ENDIF %%]

		[%% IF withThrobber %%]	
			<span class='throbber' id='throbber_[%% tabAction %%]' ></span>
		[%% ENDIF %%]
		
		[%% IF legendText %%]	
			<legend id='legend_[%% paneType %%]_[%% subAction %%] 'class='adminPane'>[%% legendText %%]</legend>
		[%% ENDIF %%]

		[%% RENDER content %%]

			<ul class='hideInView'>
				<li>
				[%% IF uploadForm %%]
					<input id='submit_[%% subAction %%]' type='submit' class='formButton' 
						value='[%% submitText %%]' style='display:none;'/>
				[%% ELSE %%]
					<input id='submit_[%% subAction %%]' type='button' class='formButton' 
						onclick="Admin.[%% jsNameSpace %%][%% submitMethod %%](this,'[%% subAction %%]');" 
						value='[%% submitText %%]' style='display:none;'/>
				[%% ENDIF %%]
				   <input id='cancel_[%% subAction %%]' type='button' class='formButton' 
						value='Cancel' onclick='Admin.cancelButton("[%% tabAction %%]","[%% subAction %%]")' />
				</li>
			</ul>

		</fieldset>
	</form>
