<div id='makeFuncDivWrap' >
	<form id='makeFuncForm' >
		<input type='hidden' id='eventId' name='eventId' />
			<ul id='funcSelectWrap' style="display:none">
				<li>
					<select id='funcId' onclick='Func.handleSelect();'>
							[%% ITERATE autoFuncOpts tpl/autoFunc/autoFuncOpts.tpl %%]
					</select>
				</li>
				<li class='button'><div id='funcAddBtn' class='funcBtn' onclick='Func.del();' /></li>
				<li class='button'><div id='funcDelBtn' class='funcBtn' onclick='Func.setAddMode();' /></li>
		</ul>
		[%% ITERATE autoFunc tpl/autoFunc/makeFuncRow.tpl %%]
		<ul><div class='tplFields' style='display:block;'/></ul>
		<ul class='notify'>
			<li>
				<input id='funcSaveButton' type='button' class='button save' value='Save This Functionality' onclick='Func.saveFunc();'/>
			</li>
			<li>
				<input type='button' class='button save ' value='Apply Functionalities' onclick='Func.applyFunc();'/>
			</li>
		</ul>
		<ul class='notify'>
			<li style='position:relative; clear:both;'>
				<p id='funcNotifyMode' >New feature Saved successfully!</p>
			</li>
			<li>
				<p id='funcNotify' >New feature Saved successfully!</p>
			</li>
		</ul>
	</form>
</div>
