		<ul class='listLine' id='[%% subAction %%]_lineUl_idxReplace' style='display:block'>
			<li id='[%% subAction %%]_savedEntry' class='dbListIcon saved' style="display:block">
				<img src='../public/images/database-icon.jpg' width="22" height="22"/>
			</li>
			<li id='[%% subAction %%]_newEntry' class='dbListIcon add' style="display:none">
				<img src='../public/images/database-add-icon.jpg' width="22" height="22"/>
			</li>
			<li id='[%% subAction %%]_delEntry' class='dbListIcon del' style="display:none">
				<img src='../public/images/database-remove-icon.jpg' width="22" height="22"/>
			</li>
			<li id='[%% subAction %%]_updEntry' class='dbListIcon upd' style="display:none">
				<img src='../public/images/database-up-icon.jpg' width="22" height="22"/>
			</li>
            [%% ITERATE listLines tpl/list/fieldReplace.tpl %%]
			<!-- nav icons -->

			[%% IF noActions %%]
			[%% ELSE %%]
			  <li class='action view_nav' 
				  onclick='[%% tabAction %%][%% subActionJs %%].doView(idxReplace,"[%% subAction %%]");'>
				  <img src='[%% viewIconUrl %%]' alt='View' />	
			  </li>
			  <li class='action del_nav' 
				  onclick='[%% tabAction %%][%% subActionJs %%].doDel(idxReplace,"[%% subAction %%]");'>
				  <img src='[%% delIconUrl %%]' alt='Delete' />	
			  </li>
			  <li class='action edit_nav' 
				  onclick='[%% tabAction %%][%% subActionJs %%].doEdit(idxReplace,"[%% subAction %%]");'>
				  <img src='[%% editIconUrl %%]' alt='Edit' />	
			  </li>
			  <li class='action func_nav' style='display:none'
				  onclick='[%% tabAction %%][%% subActionJs %%].doFunc(idxReplace,"[%% subAction %%]");'>
				  <img src='[%% funcIconUrl %%]' alt='Features' />	
			  </li>
			  	[%% IF eventButtons %%]
				<li class='action func_nav' style='display:block'
					onclick='[%% tabAction %%][%% subActionJs %%].doJsCode(idxReplace,"[%% subAction %%]");'>
					<img src='[%% cpJsUrl %%]' alt='Features' />	
				</li>
				<li class='action func_nav' style='display:block'
					<a id='launcher_idxReplace' href='[%% appUrlJs %%]' target='_blank'>
						<img src='[%% dloadZipUrl %%]' alt='Features'  style='border:none;' />	
					</a>
				</li>
				<!--
				<li class='action func_nav' style='display:block'
					onclick='[%% tabAction %%][%% subActionJs %%].doLaunchApp(idxReplace,"[%% subAction %%]");'>
					<img src='[%% launchAppUrl %%]' alt='Features' />	
					</a>
				</li>
				-->
			 	[%% ENDIF %%]
				[%% IF hasMakeFunc %%]
					<li class='action func_nav' style='display:block'
						onclick='[%% tabAction %%][%% subActionJs %%].doMakeFunc(idxReplace,"[%% subAction %%]");'>
						<img id='makeFunc_[%% subAction %%]'src='[%% makeFuncUrl %%]' width="16" height="16"  />
				  	</li>
					<li class='action clone_nav' style='display:block'
						onclick='[%% tabAction %%][%% subActionJs %%].doClone(idxReplace,"[%% subAction %%]");'>
						<img id='clone_[%% subAction %%]'src='[%% cloneIconUrl %%]' width="16" height="16"  />
				  	</li>
				[%% ENDIF %%]
			 [%% ENDIF %%]
		</ul>
