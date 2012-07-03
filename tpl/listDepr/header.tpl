<div class='listHeader'>
	[%% IF hasListLabel %%]
		<ul class='labelActive'>
			<li>
				<label for='label_[%% subAction %%]'>Label</label>
				<input type='text' id='label_[%% subAction %%]' />
			</li>
			<li class='rightFlush'>
				<label for='active_[%% subAction %%]'>Active</label>
				<input type='checkbox' id='active_[%% subAction %%]' />
			</li>
		</ul>
	[%% ENDIF %%]
	[%% IF hasListData %%]
		[%% listData %%]	
	[%% ENDIF %%]
</div>
