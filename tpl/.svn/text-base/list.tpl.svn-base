	<div id='[%% subAction %%]_listFormWrap' class='listFormWrap'>
	  <form method='POST' id='list_form_[%% subAction %%]'
		  [%% IF hasListUpload %%]
			  enctype='multipart/form-data'
			  onsubmit='[%% listUploadMethod %%]'
			  action='../serviceupload/[%% listUploadAction %%]' 
		  [%% ENDIF %%]
	  >
		  <fieldset id='list_[%% subAction %%]' class='adminPane list [%% noActionsClass %%]' style='display:none'>
			  <legend id='legend_list_[%% subAction %%]' class='adminPane'>
				  <span id='legend_[%% subAction %%]_text'>[%% legend %%]</span>
				  <img id='[%% subAction %%]_listOpen' src='[%% listOpenIconUrl %%]' onclick='ListEdit.Inst.listOpen("[%% subAction %%]", this);'
					  width='16' height='16' [%% IF NOT hasShowFeature %%] style='display:none;' [%% ENDIF %%]
				  />
				  <img id='[%% subAction %%]_listClose' src='[%% listCloseIconUrl %%]' onclick='ListEdit.Inst.listClose("[%% subAction %%]", this);' 
					  width='16' height='16' [%% IF hasShowFeature %%] style='display:none;' [%% ENDIF %%]
				  />
				  [%% IF hasEditData %%]
					  <img id='addIcon_[%% subAction %%]'src='[%% addIconUrl %%]' onclick='[%% tabAction %%].[%% subAction %%].doAdd("[%% subAction %%]");'  />
				  [%% ENDIF %%]
				  <span id='listHideText_[%% subAction %%]' style='display:none'>
					  <span id='labText_[%% subAction %%]'></span>
					  <img src='[%% listIconUrl %%]' width="18" height="18"
						  onclick='$("#list_[%% subAction %%] div.linesContainer").show(); $("#listHideText_[%% subAction %%]").hide();'
					  />
					  <img src='[%% editIconUrl %%]' onclick='ListEdit.Inst.showHideEdit("[%% subAction %%]", true);' />
				  </span>
				  [%% IF hasAdditionalIcon %%]
					  <img src='[%% additionalIconUrl %%]' onclick='[%% tabAction %%].[%% subAction %%].setAdditional("[%% subAction %%]", true);' />

				  [%% ENDIF %%]
			  </legend>
			  [%% RENDER tpl/list/header.tpl %%]
			  <div class='linesContainer'>
				  [%% RENDER tpl/list/line.tpl %%]
			  </div>
		  </fieldset>
	  </form>
	  [%% IF treePane %%]
	  <div class='leftLine'>.</div>
	  [%% ENDIF %%]
	</div>
