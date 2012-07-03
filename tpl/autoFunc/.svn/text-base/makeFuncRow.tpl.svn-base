		[%% IF fldType EQUALS 'SELECT' %%]
			<ul>
			<li class="label"><label class="label" for='[%% domId %%]'>[%% lab %%]</label></li>
			<li class='text[%% txtDisabled %%]'>
				<select id='[%% domId %%]' onchange='Func.tplChange()' />
			</li>
			</ul>
		[%% ELSE %%]
			[%% IF domId EQUALS 'HR' %%]
				<hr />
			[%% ELSE %%]
			  <ul class="[%% ulClass %%]">
				  <li class="label"><label class="label" for='[%% domId %%]'>[%% lab %%]</label></li>
				  <li class='text[%% txtDisabled %%]'><input id='[%% domId %%]' type="text" value='[%% lab %%]' [%% txtDisabled %%]/></li>

				  [%% IF showOn %%]
					<li class="labelChk" ><label for='On_[%% domId %%]'>Set</label></li>
					<li>
						<input id='On_[%% domId %%]' type="checkBox" [%% checked %%] onclick='Func.handleClick("[%% domId %%]");'/>
					</li>
					[%% ELSE %%]
					<li class="reqChk">Required</li>
					<input id='On_[%% domId %%]' type="hidden" value="1"/></li>
				  [%% ENDIF %%]
			  </ul>
			  <input type='hidden' id='Pt_[%% domId %%]' name='Pt_[%% domId %%]' value='[%% type %%]' />
			  <input type='hidden' id='Ft_[%% domId %%]' name='Ft_[%% domId %%]' value='[%% fldType %%]' />
			  <input type='hidden' id='Id_[%% domId %%]' name='Id_[%% domId %%]' class='funcIdFields' value='' />
			[%% ENDIF %%]
		[%% ENDIF %%]
