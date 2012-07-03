if (typeof htmlPanes['P15'] =='undefined') htmlPanes[P15]=new Object();
if (typeof htmlPanes['P15']['e'] =='undefined') htmlPanes[P15]['e']=new Object();
if (typeof htmlPanes['P15']['l'] =='undefined') htmlPanes[P15]['l']=new Object();
htmlPanes['P15']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['P15']['e']['f'] = {"name":{"def":"","lab":"Name","src":"-1","typ":"2","val":"18","vis":"112"},
"forname":{"def":"","lab":"Forname","src":"-1","typ":"2","val":"18","vis":"112"},
"phone":{"def":"","lab":"Phone","src":"-1","typ":"2","val":"256","vis":"96"},
"userTypes_id":{"def":"","lab":"Type","src":"UserTypes","typ":"4","val":"0","vis":"112"},
"login":{"def":"","lab":"Login","src":"-1","typ":"2","val":"18","vis":"96"},
"pass1":{"def":"","lab":"Password","src":"-1","typ":"512","val":"129","vis":"96"},
"pass2":{"def":"","lab":"Confirm Password","src":"-1","typ":"512","val":"0","vis":"96"},
"userLanguages_id":{"def":"","lab":"Language","src":"Languages","typ":"4","val":"0","vis":"96"},
"broadcasters_id":{"def":"","lab":"Broadcaster","src":"Broadcasters","typ":"4","val":"0","vis":"96"},
"producers_id":{"def":"","lab":"Producer","src":"Producers","typ":"4","val":"0","vis":"96"},
"email":{"def":"","lab":"Email","src":"-1","typ":"2","val":"66","vis":"96"}"zmtlname":{"def":"","lab":"","src":"-1","typ":"2","val":"0","vis":"112"},
"zmtlsync":{"def":"","lab":"Sync To Main Video","src":"-1","typ":"64","val":"0","vis":"112"},
"zmtlurl":{"def":"","lab":"","src":"-1","typ":"128","val":"0","vis":"112"},
"zmtlupld":{"def":"something","lab":"","src":"-1","typ":"32768","val":"0","vis":"112"},
"zmtcname":{"def":"","lab":"","src":"-1","typ":"2","val":"0","vis":"112"},
"zmtcsync":{"def":"","lab":"Sync To Main Video","src":"-1","typ":"64","val":"0","vis":"112"},
"zmtcurl":{"def":"","lab":"","src":"-1","typ":"128","val":"0","vis":"112"},
"zmtcupld":{"def":"something","lab":"","src":"-1","typ":"32768","val":"0","vis":"112"},
"zmtrname":{"def":"","lab":"","src":"-1","typ":"2","val":"0","vis":"112"},
"zmtrsync":{"def":"","lab":"Sync To Main Video","src":"-1","typ":"64","val":"0","vis":"112"},
"zmtrurl":{"def":"","lab":"","src":"-1","typ":"128","val":"0","vis":"112"},
"zmtrupld":{"def":"something","lab":"","src":"-1","typ":"32768","val":"0","vis":"112"},
"zmclname":{"def":"","lab":"","src":"-1","typ":"2","val":"0","vis":"112"},
"zmclsync":{"def":"","lab":"Sync To Main Video","src":"-1","typ":"64","val":"0","vis":"112"},
"zmclurl":{"def":"","lab":"","src":"-1","typ":"128","val":"0","vis":"112"},
"zmclupld":{"def":"something","lab":"","src":"-1","typ":"32768","val":"0","vis":"112"},
"zmccname":{"def":"","lab":"","src":"-1","typ":"2","val":"0","vis":"112"},
"zmccsync":{"def":"","lab":"Sync To Main Video","src":"-1","typ":"64","val":"0","vis":"112"},
"zmccurl":{"def":"","lab":"","src":"-1","typ":"128","val":"0","vis":"112"},
"zmccupld":{"def":"something","lab":"","src":"-1","typ":"32768","val":"0","vis":"112"},
"zmcrname":{"def":"","lab":"","src":"-1","typ":"2","val":"0","vis":"112"},
"zmcrsync":{"def":"","lab":"Sync To Main Video","src":"-1","typ":"64","val":"0","vis":"112"},
"zmcrurl":{"def":"","lab":"","src":"-1","typ":"128","val":"0","vis":"112"},
"zmcrupld":{"def":"something","lab":"","src":"-1","typ":"32768","val":"0","vis":"112"},
"zmblname":{"def":"","lab":"","src":"-1","typ":"2","val":"0","vis":"112"},
"zmblsync":{"def":"","lab":"Sync To Main Video","src":"-1","typ":"64","val":"0","vis":"112"},
"zmblurl":{"def":"","lab":"","src":"-1","typ":"128","val":"0","vis":"112"},
"zmblupld":{"def":"something","lab":"","src":"-1","typ":"32768","val":"0","vis":"112"},
"zmbcname":{"def":"","lab":"","src":"-1","typ":"2","val":"0","vis":"112"},
"zmbcsync":{"def":"","lab":"Sync To Main Video","src":"-1","typ":"64","val":"0","vis":"112"},
"zmbcurl":{"def":"","lab":"","src":"-1","typ":"128","val":"0","vis":"112"},
"zmbcupld":{"def":"something","lab":"","src":"-1","typ":"32768","val":"0","vis":"112"},
"zmbrname":{"def":"","lab":"","src":"-1","typ":"2","val":"0","vis":"112"},
"zmbrsync":{"def":"","lab":"Sync To Main Video","src":"-1","typ":"64","val":"0","vis":"112"},
"zmbrurl":{"def":"","lab":"","src":"-1","typ":"128","val":"0","vis":"112"},
"zmbrupld":{"def":"something","lab":"","src":"-1","typ":"32768","val":"0","vis":"112"},
"ccname":{"def":"","lab":"Language Label","src":"-1","typ":"2","val":"0","vis":"112"},
"cccapFile":{"def":"","lab":"Caption File","src":"-1","typ":"32","val":"0","vis":"112"},
"ccisoCode":{"def":"","lab":"ISO Code","src":"Languages","typ":"4","val":"0","vis":"112"},
};
htmlPanes['P15']['e']['p'] = "	<form  id='edit_form_P15' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_P15' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='P15_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='zmtlname_ul' style='display:'>
				<li class='lab' >
					<label id='zmtlname_lab' for='tlname'></label>
				</li>
				<li id='zm' ><input type=\"text\" id='zmtlname' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmtlsync_ul' style='display:'>
				<li class='lab' >
					<label id='zmtlsync_lab' for='tlsync'>Sync To Main Video</label>
				</li>
				<li id='zm' ><input type='checkbox' id='zmtlsync'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmtlurl_ul' style='display:'>
				<li class='lab' >
					<label id='zmtlurl_lab' for='tlurl'></label>
				</li>
				<li id='zm' ><textarea id='zmtlurl' class='selTxtTxt' rows='3' cols='60' ></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='zmtlupld_ul' style='display:'>
				<li class='lab' >
					<label id='zmtlupld_lab' for='tlupld'></label>
				</li>
				<li id='zm' >
<div class='upldBtn'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmtcname_ul' style='display:'>
				<li class='lab' >
					<label id='zmtcname_lab' for='tcname'></label>
				</li>
				<li id='zm' ><input type=\"text\" id='zmtcname' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmtcsync_ul' style='display:'>
				<li class='lab' >
					<label id='zmtcsync_lab' for='tcsync'>Sync To Main Video</label>
				</li>
				<li id='zm' ><input type='checkbox' id='zmtcsync'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmtcurl_ul' style='display:'>
				<li class='lab' >
					<label id='zmtcurl_lab' for='tcurl'></label>
				</li>
				<li id='zm' ><textarea id='zmtcurl' class='selTxtTxt' rows='3' cols='60' ></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='zmtcupld_ul' style='display:'>
				<li class='lab' >
					<label id='zmtcupld_lab' for='tcupld'></label>
				</li>
				<li id='zm' >
<div class='upldBtn'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmtrname_ul' style='display:'>
				<li class='lab' >
					<label id='zmtrname_lab' for='trname'></label>
				</li>
				<li id='zm' ><input type=\"text\" id='zmtrname' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmtrsync_ul' style='display:'>
				<li class='lab' >
					<label id='zmtrsync_lab' for='trsync'>Sync To Main Video</label>
				</li>
				<li id='zm' ><input type='checkbox' id='zmtrsync'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmtrurl_ul' style='display:'>
				<li class='lab' >
					<label id='zmtrurl_lab' for='trurl'></label>
				</li>
				<li id='zm' ><textarea id='zmtrurl' class='selTxtTxt' rows='3' cols='60' ></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='zmtrupld_ul' style='display:'>
				<li class='lab' >
					<label id='zmtrupld_lab' for='trupld'></label>
				</li>
				<li id='zm' >
<div class='upldBtn'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmclname_ul' style='display:'>
				<li class='lab' >
					<label id='zmclname_lab' for='clname'></label>
				</li>
				<li id='zm' ><input type=\"text\" id='zmclname' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmclsync_ul' style='display:'>
				<li class='lab' >
					<label id='zmclsync_lab' for='clsync'>Sync To Main Video</label>
				</li>
				<li id='zm' ><input type='checkbox' id='zmclsync'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmclurl_ul' style='display:'>
				<li class='lab' >
					<label id='zmclurl_lab' for='clurl'></label>
				</li>
				<li id='zm' ><textarea id='zmclurl' class='selTxtTxt' rows='3' cols='60' ></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='zmclupld_ul' style='display:'>
				<li class='lab' >
					<label id='zmclupld_lab' for='clupld'></label>
				</li>
				<li id='zm' >
<div class='upldBtn'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmccname_ul' style='display:'>
				<li class='lab' >
					<label id='zmccname_lab' for='ccname'></label>
				</li>
				<li id='zm' ><input type=\"text\" id='zmccname' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmccsync_ul' style='display:'>
				<li class='lab' >
					<label id='zmccsync_lab' for='ccsync'>Sync To Main Video</label>
				</li>
				<li id='zm' ><input type='checkbox' id='zmccsync'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmccurl_ul' style='display:'>
				<li class='lab' >
					<label id='zmccurl_lab' for='ccurl'></label>
				</li>
				<li id='zm' ><textarea id='zmccurl' class='selTxtTxt' rows='3' cols='60' ></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='zmccupld_ul' style='display:'>
				<li class='lab' >
					<label id='zmccupld_lab' for='ccupld'></label>
				</li>
				<li id='zm' >
<div class='upldBtn'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmcrname_ul' style='display:'>
				<li class='lab' >
					<label id='zmcrname_lab' for='crname'></label>
				</li>
				<li id='zm' ><input type=\"text\" id='zmcrname' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmcrsync_ul' style='display:'>
				<li class='lab' >
					<label id='zmcrsync_lab' for='crsync'>Sync To Main Video</label>
				</li>
				<li id='zm' ><input type='checkbox' id='zmcrsync'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmcrurl_ul' style='display:'>
				<li class='lab' >
					<label id='zmcrurl_lab' for='crurl'></label>
				</li>
				<li id='zm' ><textarea id='zmcrurl' class='selTxtTxt' rows='3' cols='60' ></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='zmcrupld_ul' style='display:'>
				<li class='lab' >
					<label id='zmcrupld_lab' for='crupld'></label>
				</li>
				<li id='zm' >
<div class='upldBtn'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmblname_ul' style='display:'>
				<li class='lab' >
					<label id='zmblname_lab' for='blname'></label>
				</li>
				<li id='zm' ><input type=\"text\" id='zmblname' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmblsync_ul' style='display:'>
				<li class='lab' >
					<label id='zmblsync_lab' for='blsync'>Sync To Main Video</label>
				</li>
				<li id='zm' ><input type='checkbox' id='zmblsync'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmblurl_ul' style='display:'>
				<li class='lab' >
					<label id='zmblurl_lab' for='blurl'></label>
				</li>
				<li id='zm' ><textarea id='zmblurl' class='selTxtTxt' rows='3' cols='60' ></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='zmblupld_ul' style='display:'>
				<li class='lab' >
					<label id='zmblupld_lab' for='blupld'></label>
				</li>
				<li id='zm' >
<div class='upldBtn'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmbcname_ul' style='display:'>
				<li class='lab' >
					<label id='zmbcname_lab' for='bcname'></label>
				</li>
				<li id='zm' ><input type=\"text\" id='zmbcname' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmbcsync_ul' style='display:'>
				<li class='lab' >
					<label id='zmbcsync_lab' for='bcsync'>Sync To Main Video</label>
				</li>
				<li id='zm' ><input type='checkbox' id='zmbcsync'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmbcurl_ul' style='display:'>
				<li class='lab' >
					<label id='zmbcurl_lab' for='bcurl'></label>
				</li>
				<li id='zm' ><textarea id='zmbcurl' class='selTxtTxt' rows='3' cols='60' ></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='zmbcupld_ul' style='display:'>
				<li class='lab' >
					<label id='zmbcupld_lab' for='bcupld'></label>
				</li>
				<li id='zm' >
<div class='upldBtn'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmbrname_ul' style='display:'>
				<li class='lab' >
					<label id='zmbrname_lab' for='brname'></label>
				</li>
				<li id='zm' ><input type=\"text\" id='zmbrname' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmbrsync_ul' style='display:'>
				<li class='lab' >
					<label id='zmbrsync_lab' for='brsync'>Sync To Main Video</label>
				</li>
				<li id='zm' ><input type='checkbox' id='zmbrsync'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='zmbrurl_ul' style='display:'>
				<li class='lab' >
					<label id='zmbrurl_lab' for='brurl'></label>
				</li>
				<li id='zm' ><textarea id='zmbrurl' class='selTxtTxt' rows='3' cols='60' ></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='zmbrupld_ul' style='display:'>
				<li class='lab' >
					<label id='zmbrupld_lab' for='brupld'></label>
				</li>
				<li id='zm' >
<div class='upldBtn'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='ccname_ul' style='display:'>
				<li class='lab' >
					<label id='ccname_lab' for='name'>Language Label</label>
				</li>
				<li id='cc' ><input type=\"text\" id='ccname' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='cccapFile_ul' style='display:'>
				<li class='lab' >
					<label id='cccapFile_lab' for='capFile'>Caption File</label>
				</li>
				<li id='cc' ><div id='cccapFileInner'>
	<div class='vInfo' style='display:none;' onclick='fileLaunch(this)'></div>

	<input type='hidden' id='cccapFile' name='cccapFile' />
</div>
</li>
			</ul>
			<ul class='elmWrap  ' id='ccisoCode_ul' style='display:'>
				<li class='lab' >
					<label id='ccisoCode_lab' for='isoCode'>ISO Code</label>
				</li>
				<li id='cc' ><select id='ccisoCode'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='name_ul' style='display:'>
				<li class='lab' >
					<label id='name_lab' for='name'>Name</label>
				</li>
				<li id='' ><input type=\"text\" id='name' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='forname_ul' style='display:'>
				<li class='lab' >
					<label id='forname_lab' for='forname'>Forname</label>
				</li>
				<li id='' ><input type=\"text\" id='forname' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='phone_ul' style='display:'>
				<li class='lab' >
					<label id='phone_lab' for='phone'>Phone</label>
				</li>
				<li id='' ><input type=\"text\" id='phone' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='userTypes_id_ul' style='display:'>
				<li class='lab' >
					<label id='userTypes_id_lab' for='userTypes_id'>Type</label>
				</li>
				<li id='' ><select id='userTypes_id'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='login_ul' style='display:'>
				<li class='lab' >
					<label id='login_lab' for='login'>Login</label>
				</li>
				<li id='' ><input type=\"text\" id='login' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='pass1_ul' style='display:'>
				<li class='lab' >
					<label id='pass1_lab' for='pass1'>Password</label>
				</li>
				<li id='' ><input type='password' id='pass1' value='' size='35' />
</li>
			</ul>
			<ul class='elmWrap  ' id='pass2_ul' style='display:'>
				<li class='lab' >
					<label id='pass2_lab' for='pass2'>Confirm Password</label>
				</li>
				<li id='' ><input type='password' id='pass2' value='' size='35' />
</li>
			</ul>
			<ul class='elmWrap  ' id='userLanguages_id_ul' style='display:'>
				<li class='lab' >
					<label id='userLanguages_id_lab' for='userLanguages_id'>Language</label>
				</li>
				<li id='' ><select id='userLanguages_id'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='broadcasters_id_ul' style='display:'>
				<li class='lab' >
					<label id='broadcasters_id_lab' for='broadcasters_id'>Broadcaster</label>
				</li>
				<li id='' ><select id='broadcasters_id'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='producers_id_ul' style='display:'>
				<li class='lab' >
					<label id='producers_id_lab' for='producers_id'>Producer</label>
				</li>
				<li id='' ><select id='producers_id'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='email_ul' style='display:'>
				<li class='lab' >
					<label id='email_lab' for='email'>Email</label>
				</li>
				<li id='' ><input type=\"text\" id='email' value='' size='35'   />
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"P15\");'
				
				/>
				<input id='P15_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='P15.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['P19'] =='undefined') htmlPanes[P19]=new Object();
if (typeof htmlPanes['P19']['e'] =='undefined') htmlPanes[P19]['e']=new Object();
if (typeof htmlPanes['P19']['l'] =='undefined') htmlPanes[P19]['l']=new Object();
htmlPanes['P19']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['P19']['e']['f'] = {"tabAction":{"def":"Templates","lab":"ACTIONS: Tab","src":"-1","typ":"2","val":"17","vis":"112"},
"listTab":{"def":"","lab":"List","src":"-1","typ":"2","val":"17","vis":"96"},
"parentTab":{"def":"broadcastEvents","lab":"TABLES: Parent","src":"-1","typ":"2","val":"17","vis":"96"},
"parentRefId":{"def":"","lab":"RefId","src":"-1","typ":"2","val":"17","vis":"96"},
"editTab":{"def":"","lab":"Edit","src":"-1","typ":"2","val":"0","vis":"112"},
"childRefId":{"def":"","lab":"RefParam","src":"-1","typ":"2","val":"17","vis":"96"},
"legend":{"def":"","lab":"Legend","src":"-1","typ":"2","val":"18","vis":"112"},
"subAction":{"def":"main_cc","lab":"Sub","src":"-1","typ":"2","val":"17","vis":"112"},
"hasEditUpload":{"def":"","lab":"Edit","src":"-1","typ":"64","val":"0","vis":"96"},
"hasListUpload":{"def":"","lab":"List","src":"-1","typ":"64","val":"0","vis":"96"},
"paneType":{"def":"","lab":"Pane Type","src":"PaneTypes","typ":"4","val":"0","vis":"96"},
"_uploads_lab_":{"def":"","lab":"Has Upload:","src":"-1","typ":"16384","val":"0","vis":"112"},
"xmlGroupTag":{"def":"eventFcts","lab":"XML Tags: Group","src":"-1","typ":"2","val":"0","vis":"112"},
"xmlFuncTag":{"def":"customFeature","lab":"Func","src":"-1","typ":"2","val":"0","vis":"112"},
"xmlItemsTag":{"def":"item","lab":"Items","src":"-1","typ":"2","val":"0","vis":"112"},
"xmlParent":{"def":"","lab":"XML Parent","src":"XmlParent","typ":"4","val":"0","vis":"112"},
"multiUpld":{"def":"","lab":"Multiple","src":"-1","typ":"64","val":"0","vis":"112"},
"tabIds":{"def":"","lab":"Tab Item Ids","src":"-1","typ":"128","val":"0","vis":"112"},
"tabPfix":{"def":"","lab":"Unique Tab Prefix","src":"-1","typ":"2","val":"0","vis":"112"},
"tabLab":{"def":"","lab":"Tab Label","src":"-1","typ":"2","val":"0","vis":"112"}};
htmlPanes['P19']['e']['p'] = "	<form  id='edit_form_P19' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_P19' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='P19_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='tabAction_ul' style='display:'>
				<li class='lab' >
					<label id='tabAction_lab' for='tabAction'>ACTIONS: Tab</label>
				</li>
				<li id='' ><input type=\"text\" id='tabAction' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='listTab_ul' style='display:'>
				<li class='lab' >
					<label id='listTab_lab' for='listTab'>List</label>
				</li>
				<li id='' ><input type=\"text\" id='listTab' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='parentTab_ul' style='display:'>
				<li class='lab' >
					<label id='parentTab_lab' for='parentTab'>TABLES: Parent</label>
				</li>
				<li id='' ><input type=\"text\" id='parentTab' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='parentRefId_ul' style='display:'>
				<li class='lab' >
					<label id='parentRefId_lab' for='parentRefId'>RefId</label>
				</li>
				<li id='' ><input type=\"text\" id='parentRefId' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='editTab_ul' style='display:'>
				<li class='lab' >
					<label id='editTab_lab' for='editTab'>Edit</label>
				</li>
				<li id='' ><input type=\"text\" id='editTab' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='childRefId_ul' style='display:'>
				<li class='lab' >
					<label id='childRefId_lab' for='childRefId'>RefParam</label>
				</li>
				<li id='' ><input type=\"text\" id='childRefId' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='legend_ul' style='display:'>
				<li class='lab' >
					<label id='legend_lab' for='legend'>Legend</label>
				</li>
				<li id='' ><input type=\"text\" id='legend' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='subAction_ul' style='display:'>
				<li class='lab' >
					<label id='subAction_lab' for='subAction'>Sub</label>
				</li>
				<li id='' ><input type=\"text\" id='subAction' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='hasEditUpload_ul' style='display:'>
				<li class='lab' >
					<label id='hasEditUpload_lab' for='hasEditUpload'>Edit</label>
				</li>
				<li id='' ><input type='checkbox' id='hasEditUpload'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='hasListUpload_ul' style='display:'>
				<li class='lab' >
					<label id='hasListUpload_lab' for='hasListUpload'>List</label>
				</li>
				<li id='' ><input type='checkbox' id='hasListUpload'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='paneType_ul' style='display:'>
				<li class='lab' >
					<label id='paneType_lab' for='paneType'>Pane Type</label>
				</li>
				<li id='' ><select id='paneType'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='_uploads_lab__ul' style='display:'>
				<li class='lab' >
					<label id='_uploads_lab__lab' for='_uploads_lab_'>Has Upload:</label>
				</li>
				<li id='' ><div class='spacer'> </div>
</li>
			</ul>
			<ul class='elmWrap  ' id='xmlGroupTag_ul' style='display:'>
				<li class='lab' >
					<label id='xmlGroupTag_lab' for='xmlGroupTag'>XML Tags: Group</label>
				</li>
				<li id='' ><input type=\"text\" id='xmlGroupTag' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='xmlFuncTag_ul' style='display:'>
				<li class='lab' >
					<label id='xmlFuncTag_lab' for='xmlFuncTag'>Func</label>
				</li>
				<li id='' ><input type=\"text\" id='xmlFuncTag' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='xmlItemsTag_ul' style='display:'>
				<li class='lab' >
					<label id='xmlItemsTag_lab' for='xmlItemsTag'>Items</label>
				</li>
				<li id='' ><input type=\"text\" id='xmlItemsTag' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='xmlParent_ul' style='display:'>
				<li class='lab' >
					<label id='xmlParent_lab' for='xmlParent'>XML Parent</label>
				</li>
				<li id='' ><select id='xmlParent'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='multiUpld_ul' style='display:'>
				<li class='lab' >
					<label id='multiUpld_lab' for='multiUpld'>Multiple</label>
				</li>
				<li id='' ><input type='checkbox' id='multiUpld'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='tabIds_ul' style='display:'>
				<li class='lab' >
					<label id='tabIds_lab' for='tabIds'>Tab Item Ids</label>
				</li>
				<li id='' ><textarea id='tabIds' class='selTxtTxt' rows='3' cols='60' ></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='tabPfix_ul' style='display:'>
				<li class='lab' >
					<label id='tabPfix_lab' for='tabPfix'>Unique Tab Prefix</label>
				</li>
				<li id='' ><input type=\"text\" id='tabPfix' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='tabLab_ul' style='display:'>
				<li class='lab' >
					<label id='tabLab_lab' for='tabLab'>Tab Label</label>
				</li>
				<li id='' ><input type=\"text\" id='tabLab' value='' size='35'   />
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"P19\");'
				
				/>
				<input id='P19_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='P19.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['P23'] =='undefined') htmlPanes[P23]=new Object();
if (typeof htmlPanes['P23']['e'] =='undefined') htmlPanes[P23]['e']=new Object();
if (typeof htmlPanes['P23']['l'] =='undefined') htmlPanes[P23]['l']=new Object();
htmlPanes['P23']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['P23']['e']['f'] = {"label":{"def":"","lab":"Label","src":"-1","typ":"2","val":"0","vis":"112"},
"subRef":{"def":"","lab":"Sub List","src":"-1","typ":"2","val":"0","vis":"96"}};
htmlPanes['P23']['e']['p'] = "	<form  id='edit_form_P23' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_P23' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='P23_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='label_ul' style='display:'>
				<li class='lab' >
					<label id='label_lab' for='label'>Label</label>
				</li>
				<li id='' ><input type=\"text\" id='label' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='subRef_ul' style='display:'>
				<li class='lab' >
					<label id='subRef_lab' for='subRef'>Sub List</label>
				</li>
				<li id='' ><input type=\"text\" id='subRef' value='' size='35'   />
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"P23\");'
				
				/>
				<input id='P23_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='P23.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['P75'] =='undefined') htmlPanes[P75]=new Object();
if (typeof htmlPanes['P75']['e'] =='undefined') htmlPanes[P75]['e']=new Object();
if (typeof htmlPanes['P75']['l'] =='undefined') htmlPanes[P75]['l']=new Object();
htmlPanes['P75']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['P75']['e']['f'] = {"name":{"def":"","lab":"Template Name","src":"-1","typ":"2","val":"0","vis":"112"},
"dbTab":{"def":"","lab":"DB Table","src":"-1","typ":"2","val":"0","vis":"112"}};
htmlPanes['P75']['e']['p'] = "	<form  id='edit_form_P75' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_P75' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='P75_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='name_ul' style='display:'>
				<li class='lab' >
					<label id='name_lab' for='name'>Template Name</label>
				</li>
				<li id='' ><input type=\"text\" id='name' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='dbTab_ul' style='display:'>
				<li class='lab' >
					<label id='dbTab_lab' for='dbTab'>DB Table</label>
				</li>
				<li id='' ><input type=\"text\" id='dbTab' value='' size='35'   />
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"P75\");'
				
				/>
				<input id='P75_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='P75.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['P232'] =='undefined') htmlPanes[P232]=new Object();
if (typeof htmlPanes['P232']['e'] =='undefined') htmlPanes[P232]['e']=new Object();
if (typeof htmlPanes['P232']['l'] =='undefined') htmlPanes[P232]['l']=new Object();
htmlPanes['P232']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['P232']['e']['f'] = {"name":{"def":"","lab":"Name","src":"-1","typ":"2","val":"0","vis":"112"}};
htmlPanes['P232']['e']['p'] = "	<form  id='edit_form_P232' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_P232' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='P232_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='name_ul' style='display:'>
				<li class='lab' >
					<label id='name_lab' for='name'>Name</label>
				</li>
				<li id='' ><input type=\"text\" id='name' value='' size='35'   />
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"P232\");'
				
				/>
				<input id='P232_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='P232.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['P243'] =='undefined') htmlPanes[P243]=new Object();
if (typeof htmlPanes['P243']['e'] =='undefined') htmlPanes[P243]['e']=new Object();
if (typeof htmlPanes['P243']['l'] =='undefined') htmlPanes[P243]['l']=new Object();
htmlPanes['P243']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['P243']['e']['f'] = {"FNCT_CODE":{"def":"","lab":"Code: Function","src":"-1","typ":"2","val":"0","vis":"96"},
"CTRL_CODE":{"def":"","lab":"Control","src":"-1","typ":"2","val":"0","vis":"96"},
"TABLE_NAME":{"def":"","lab":"Table","src":"-1","typ":"2","val":"0","vis":"96"},
"NAME":{"def":"","lab":"Column","src":"-1","typ":"2","val":"0","vis":"96"},
"TRANS_LABEL":{"def":"","lab":"Label ","src":"-1","typ":"2","val":"0","vis":"96"},
"TRANS_DESC":{"def":"","lab":"Description ","src":"-1","typ":"128","val":"0","vis":"96"},
"DISPLAY_ORDER":{"def":"","lab":"Display Order","src":"-1","typ":"1","val":"0","vis":"96"},
"MANDATORY":{"def":"","lab":"Field Mandatory","src":"-1","typ":"64","val":"0","vis":"96"},
"REQUIRED_ERROR_MSG":{"def":"","lab":"Validation Message","src":"-1","typ":"2","val":"0","vis":"96"},
"EDITABLE":{"def":"","lab":"Editable","src":"-1","typ":"64","val":"0","vis":"96"}};
htmlPanes['P243']['e']['p'] = "	<form  id='edit_form_P243' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_P243' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='P243_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='FNCT_CODE_ul' style='display:'>
				<li class='lab' >
					<label id='FNCT_CODE_lab' for='FNCT_CODE'>Code: Function</label>
				</li>
				<li id='' ><input type=\"text\" id='FNCT_CODE' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='CTRL_CODE_ul' style='display:'>
				<li class='lab' >
					<label id='CTRL_CODE_lab' for='CTRL_CODE'>Control</label>
				</li>
				<li id='' ><input type=\"text\" id='CTRL_CODE' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='TABLE_NAME_ul' style='display:'>
				<li class='lab' >
					<label id='TABLE_NAME_lab' for='TABLE_NAME'>Table</label>
				</li>
				<li id='' ><input type=\"text\" id='TABLE_NAME' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='NAME_ul' style='display:'>
				<li class='lab' >
					<label id='NAME_lab' for='NAME'>Column</label>
				</li>
				<li id='' ><input type=\"text\" id='NAME' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='TRANS_LABEL_ul' style='display:'>
				<li class='lab' >
					<label id='TRANS_LABEL_lab' for='TRANS_LABEL'>Label </label>
				</li>
				<li id='' ><input type=\"text\" id='TRANS_LABEL' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='TRANS_DESC_ul' style='display:'>
				<li class='lab' >
					<label id='TRANS_DESC_lab' for='TRANS_DESC'>Description </label>
				</li>
				<li id='' ><textarea id='TRANS_DESC' class='selTxtTxt' rows='3' cols='60' ></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='DISPLAY_ORDER_ul' style='display:'>
				<li class='lab' >
					<label id='DISPLAY_ORDER_lab' for='DISPLAY_ORDER'>Display Order</label>
				</li>
				<li id='' ><input type=\"text\" id='DISPLAY_ORDER' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='MANDATORY_ul' style='display:'>
				<li class='lab' >
					<label id='MANDATORY_lab' for='MANDATORY'>Field Mandatory</label>
				</li>
				<li id='' ><input type='checkbox' id='MANDATORY'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='REQUIRED_ERROR_MSG_ul' style='display:'>
				<li class='lab' >
					<label id='REQUIRED_ERROR_MSG_lab' for='REQUIRED_ERROR_MSG'>Validation Message</label>
				</li>
				<li id='' ><input type=\"text\" id='REQUIRED_ERROR_MSG' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='EDITABLE_ul' style='display:'>
				<li class='lab' >
					<label id='EDITABLE_lab' for='EDITABLE'>Editable</label>
				</li>
				<li id='' ><input type='checkbox' id='EDITABLE'  />
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"P243\");'
				
				/>
				<input id='P243_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='P243.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['P20'] =='undefined') htmlPanes[P20]=new Object();
if (typeof htmlPanes['P20']['e'] =='undefined') htmlPanes[P20]['e']=new Object();
if (typeof htmlPanes['P20']['l'] =='undefined') htmlPanes[P20]['l']=new Object();
htmlPanes['P20']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['P20']['e']['f'] = {"lab":{"def":"","lab":"Label","src":"-1","typ":"2","val":"17","vis":"112"},
"domId":{"def":"","lab":"DOM Id","src":"-1","typ":"2","val":"18","vis":"112"},
"wrapperClass":{"def":"","lab":"Wrapper CSS Class","src":"-1","typ":"2","val":"17","vis":"96"},
"elmType":{"def":"","lab":"Element Type","src":"ElmTypes","typ":"4","val":"0","vis":"112"},
"validationFlag":{"def":"","lab":"Validation","src":"Validation","typ":"4","val":"0","vis":"96"},
"visibility":{"def":"","lab":"Visibility","src":"Visibility","typ":"4","val":"0","vis":"112"},
"source":{"def":"","lab":"Select Data Source","src":"dirMap","typ":"4","val":"17","vis":"96"},
"callback":{"def":"","lab":"Callback","src":"CallbackTypes","typ":"4","val":"0","vis":"96"},
"defaultVal":{"def":"","lab":"Db Default Value","src":"-1","typ":"2","val":"0","vis":"96"},
"attrs":{"def":"","lab":"DOM Attributes","src":"-1","typ":"2","val":"0","vis":"96"},
"tabLab":{"def":"","lab":"Tab Label","src":"Tabs","typ":"4","val":"0","vis":"96"},
"gridWidth":{"def":"","lab":"Grid Width","src":"-1","typ":"2","val":"0","vis":"96"},
"xmlTag":{"def":"","lab":"XML tag","src":"-1","typ":"2","val":"0","vis":"112"}};
htmlPanes['P20']['e']['p'] = "	<form  id='edit_form_P20' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_P20' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='P20_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='lab_ul' style='display:'>
				<li class='lab' >
					<label id='lab_lab' for='lab'>Label</label>
				</li>
				<li id='' ><input type=\"text\" id='lab' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='domId_ul' style='display:'>
				<li class='lab' >
					<label id='domId_lab' for='domId'>DOM Id</label>
				</li>
				<li id='' ><input type=\"text\" id='domId' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='wrapperClass_ul' style='display:'>
				<li class='lab' >
					<label id='wrapperClass_lab' for='wrapperClass'>Wrapper CSS Class</label>
				</li>
				<li id='' ><input type=\"text\" id='wrapperClass' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='elmType_ul' style='display:'>
				<li class='lab' >
					<label id='elmType_lab' for='elmType'>Element Type</label>
				</li>
				<li id='' ><select id='elmType'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='validationFlag_ul' style='display:'>
				<li class='lab' >
					<label id='validationFlag_lab' for='validationFlag'>Validation</label>
				</li>
				<li id='' ><select id='validationFlag'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='visibility_ul' style='display:'>
				<li class='lab' >
					<label id='visibility_lab' for='visibility'>Visibility</label>
				</li>
				<li id='' ><select id='visibility'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='source_ul' style='display:'>
				<li class='lab' >
					<label id='source_lab' for='source'>Select Data Source</label>
				</li>
				<li id='' ><select id='source'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='callback_ul' style='display:'>
				<li class='lab' >
					<label id='callback_lab' for='callback'>Callback</label>
				</li>
				<li id='' ><select id='callback'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='defaultVal_ul' style='display:'>
				<li class='lab' >
					<label id='defaultVal_lab' for='defaultVal'>Db Default Value</label>
				</li>
				<li id='' ><input type=\"text\" id='defaultVal' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='attrs_ul' style='display:'>
				<li class='lab' >
					<label id='attrs_lab' for='attrs'>DOM Attributes</label>
				</li>
				<li id='' ><input type=\"text\" id='attrs' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='tabLab_ul' style='display:'>
				<li class='lab' >
					<label id='tabLab_lab' for='tabLab'>Tab Label</label>
				</li>
				<li id='' ><select id='tabLab'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='gridWidth_ul' style='display:'>
				<li class='lab' >
					<label id='gridWidth_lab' for='gridWidth'>Grid Width</label>
				</li>
				<li id='' ><input type=\"text\" id='gridWidth' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='xmlTag_ul' style='display:'>
				<li class='lab' >
					<label id='xmlTag_lab' for='xmlTag'>XML tag</label>
				</li>
				<li id='' ><input type=\"text\" id='xmlTag' value='' size='35'   />
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"P20\");'
				
				/>
				<input id='P20_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='P20.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['P21'] =='undefined') htmlPanes[P21]=new Object();
if (typeof htmlPanes['P21']['e'] =='undefined') htmlPanes[P21]['e']=new Object();
if (typeof htmlPanes['P21']['l'] =='undefined') htmlPanes[P21]['l']=new Object();
htmlPanes['P21']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['P21']['e']['f'] = {"lab":{"def":"","lab":"Label/Dom Id","src":"-1","typ":"2","val":"0","vis":"112"},
"domId":{"def":"","lab":"/","src":"-1","typ":"2","val":"0","vis":"112"},
"wrapperClass":{"def":"","lab":"Wrapper CSS Class","src":"-1","typ":"2","val":"17","vis":"96"},
"elmType":{"def":"","lab":"Element Type","src":"ElmTypes","typ":"4","val":"0","vis":"112"},
"validationFlag":{"def":"","lab":"Validation","src":"Validation","typ":"4","val":"0","vis":"96"},
"visibility":{"def":"","lab":"Visibility Flag","src":"Visibility","typ":"4","val":"0","vis":"112"},
"source":{"def":"","lab":"Select Data Source","src":"PaneTypes","typ":"4","val":"17","vis":"96"},
"callback":{"def":"","lab":"Callback","src":"CallbackTypes","typ":"4","val":"17","vis":"96"},
"xmlTag":{"def":"","lab":"XML Tag","src":"-1","typ":"2","val":"0","vis":"112"},
"tabLab":{"def":"","lab":"Tab Label","src":"Tabs","typ":"4","val":"0","vis":"112"}};
htmlPanes['P21']['e']['p'] = "	<form  id='edit_form_P21' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_P21' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='P21_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='lab_ul' style='display:'>
				<li class='lab' >
					<label id='lab_lab' for='lab'>Label/Dom Id</label>
				</li>
				<li id='' ><input type=\"text\" id='lab' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='domId_ul' style='display:'>
				<li class='lab' >
					<label id='domId_lab' for='domId'>/</label>
				</li>
				<li id='' ><input type=\"text\" id='domId' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='wrapperClass_ul' style='display:'>
				<li class='lab' >
					<label id='wrapperClass_lab' for='wrapperClass'>Wrapper CSS Class</label>
				</li>
				<li id='' ><input type=\"text\" id='wrapperClass' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='elmType_ul' style='display:'>
				<li class='lab' >
					<label id='elmType_lab' for='elmType'>Element Type</label>
				</li>
				<li id='' ><select id='elmType'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='validationFlag_ul' style='display:'>
				<li class='lab' >
					<label id='validationFlag_lab' for='validationFlag'>Validation</label>
				</li>
				<li id='' ><select id='validationFlag'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='visibility_ul' style='display:'>
				<li class='lab' >
					<label id='visibility_lab' for='visibility'>Visibility Flag</label>
				</li>
				<li id='' ><select id='visibility'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='source_ul' style='display:'>
				<li class='lab' >
					<label id='source_lab' for='source'>Select Data Source</label>
				</li>
				<li id='' ><select id='source'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='callback_ul' style='display:'>
				<li class='lab' >
					<label id='callback_lab' for='callback'>Callback</label>
				</li>
				<li id='' ><select id='callback'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='xmlTag_ul' style='display:'>
				<li class='lab' >
					<label id='xmlTag_lab' for='xmlTag'>XML Tag</label>
				</li>
				<li id='' ><input type=\"text\" id='xmlTag' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='tabLab_ul' style='display:'>
				<li class='lab' >
					<label id='tabLab_lab' for='tabLab'>Tab Label</label>
				</li>
				<li id='' ><select id='tabLab'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"P21\");'
				
				/>
				<input id='P21_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='P21.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['P30'] =='undefined') htmlPanes[P30]=new Object();
if (typeof htmlPanes['P30']['e'] =='undefined') htmlPanes[P30]['e']=new Object();
if (typeof htmlPanes['P30']['l'] =='undefined') htmlPanes[P30]['l']=new Object();
htmlPanes['P30']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['P30']['e']['f'] = {"name":{"def":"","lab":"/","src":"-1","typ":"2","val":"0","vis":"112"},
"typ":{"def":"","lab":"Type/Name","src":"-1","typ":"2","val":"0","vis":"112"},
"val":{"def":"","lab":"Value","src":"-1","typ":"128","val":"0","vis":"112"}};
htmlPanes['P30']['e']['p'] = "	<form  id='edit_form_P30' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_P30' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='P30_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='name_ul' style='display:'>
				<li class='lab' >
					<label id='name_lab' for='name'>/</label>
				</li>
				<li id='' ><input type=\"text\" id='name' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='typ_ul' style='display:'>
				<li class='lab' >
					<label id='typ_lab' for='typ'>Type/Name</label>
				</li>
				<li id='' ><input type=\"text\" id='typ' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='val_ul' style='display:'>
				<li class='lab' >
					<label id='val_lab' for='val'>Value</label>
				</li>
				<li id='' ><textarea id='val' class='selTxtTxt' rows='3' cols='60' ></textarea>
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"P30\");'
				
				/>
				<input id='P30_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='P30.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['P203'] =='undefined') htmlPanes[P203]=new Object();
if (typeof htmlPanes['P203']['e'] =='undefined') htmlPanes[P203]['e']=new Object();
if (typeof htmlPanes['P203']['l'] =='undefined') htmlPanes[P203]['l']=new Object();
htmlPanes['P203']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['P203']['e']['f'] = {"val":{"def":"","lab":"Value","src":"-1","typ":"2","val":"0","vis":"96"},
"typ":{"def":"","lab":"Add New","src":"-1","typ":"2","val":"0","vis":"112"},
"name":{"def":"","lab":"Label","src":"-1","typ":"2","val":"0","vis":"96"},
"selOption":{"def":"","lab":"Choose Category","src":"dirMap","typ":"4","val":"0","vis":"224"},
"fileUp":{"def":"","lab":"File Upload","src":"-1","typ":"32","val":"0","vis":"96"},
"sel":{"def":"","lab":"Choose From List","src":"CallbackTypes","typ":"4","val":"0","vis":"224"},
"selType":{"def":"","lab":"Get Value","src":"-1","typ":"2048","val":"0","vis":"96"},
"selType":{"def":"","lab":"From Field","src":"-1","typ":"4096","val":"0","vis":"96"},
"selType":{"def":"","lab":"From Select","src":"-1","typ":"4096","val":"0","vis":"96"},
"selType":{"def":"","lab":"From Upload","src":"-1","typ":"4096","val":"0","vis":"96"}};
htmlPanes['P203']['e']['p'] = "	<form  id='edit_form_P203' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_P203' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='P203_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='val_ul' style='display:'>
				<li class='lab' >
					<label id='val_lab' for='val'>Value</label>
				</li>
				<li id='' ><input type=\"text\" id='val' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='typ_ul' style='display:'>
				<li class='lab' >
					<label id='typ_lab' for='typ'>Add New</label>
				</li>
				<li id='' ><input type=\"text\" id='typ' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='name_ul' style='display:'>
				<li class='lab' >
					<label id='name_lab' for='name'>Label</label>
				</li>
				<li id='' ><input type=\"text\" id='name' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='selOption_ul' style='display:'>
				<li class='lab' >
					<label id='selOption_lab' for='selOption'>Choose Category</label>
				</li>
				<li id='' ><select id='selOption'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='fileUp_ul' style='display:'>
				<li class='lab' >
					<label id='fileUp_lab' for='fileUp'>File Upload</label>
				</li>
				<li id='' ><div id='fileUpInner'>
	<div class='vInfo' style='display:none;' onclick='fileLaunch(this)'></div>

	<input type='hidden' id='fileUp' name='fileUp' />
</div>
</li>
			</ul>
			<ul class='elmWrap  ' id='sel_ul' style='display:'>
				<li class='lab' >
					<label id='sel_lab' for='sel'>Choose From List</label>
				</li>
				<li id='' ><select id='sel'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='selType_ul' style='display:'>
				<li class='lab' >
					<label id='selType_lab' for='selType'>Get Value</label>
				</li>
				<li id='' ><radiogroup id='selType' name='selType'> 
	<input type='radio' id='selType_0' name='selType' value='0'  />
<label id='lab_selType_0' for='selType_0'></label>

</radiogroup>
</li>
			</ul>
			<ul class='elmWrap  ' id='selType_ul' style='display:'>
				<li class='lab' >
					<label id='selType_lab' for='selType'>From Field</label>
				</li>
				<li id='' ><input type='radio' id='selType_0' name='selType' value='0'  />
<label id='lab_selType_0' for='selType_0'></label>
</li>
			</ul>
			<ul class='elmWrap  ' id='selType_ul' style='display:'>
				<li class='lab' >
					<label id='selType_lab' for='selType'>From Select</label>
				</li>
				<li id='' ><input type='radio' id='selType_0' name='selType' value='0'  />
<label id='lab_selType_0' for='selType_0'></label>
</li>
			</ul>
			<ul class='elmWrap  ' id='selType_ul' style='display:'>
				<li class='lab' >
					<label id='selType_lab' for='selType'>From Upload</label>
				</li>
				<li id='' ><input type='radio' id='selType_0' name='selType' value='0'  />
<label id='lab_selType_0' for='selType_0'></label>
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"P203\");'
				
				/>
				<input id='P203_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='P203.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['P206'] =='undefined') htmlPanes[P206]=new Object();
if (typeof htmlPanes['P206']['e'] =='undefined') htmlPanes[P206]['e']=new Object();
if (typeof htmlPanes['P206']['l'] =='undefined') htmlPanes[P206]['l']=new Object();
htmlPanes['P206']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['P206']['e']['f'] = {"val":{"def":"","lab":"Value","src":"-1","typ":"2","val":"0","vis":"96"},
"typ":{"def":"","lab":"Add New","src":"-1","typ":"2","val":"0","vis":"112"},
"name":{"def":"","lab":"Label","src":"-1","typ":"2","val":"0","vis":"96"},
"selOption":{"def":"","lab":"Choose Category","src":"dirMap","typ":"4","val":"0","vis":"224"},
"fileUp":{"def":"","lab":"File Upload","src":"-1","typ":"32","val":"0","vis":"96"},
"sel":{"def":"","lab":"Choose From List","src":"CallbackTypes","typ":"4","val":"0","vis":"224"},
"selType":{"def":"","lab":"Get Value","src":"-1","typ":"2048","val":"0","vis":"96"},
"selType":{"def":"","lab":"From Field","src":"-1","typ":"4096","val":"0","vis":"96"},
"selType":{"def":"","lab":"From Select","src":"-1","typ":"4096","val":"0","vis":"96"},
"selType":{"def":"","lab":"From Upload","src":"-1","typ":"4096","val":"0","vis":"96"}};
htmlPanes['P206']['e']['p'] = "	<form  id='edit_form_P206' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_P206' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='P206_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='val_ul' style='display:'>
				<li class='lab' >
					<label id='val_lab' for='val'>Value</label>
				</li>
				<li id='' ><input type=\"text\" id='val' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='typ_ul' style='display:'>
				<li class='lab' >
					<label id='typ_lab' for='typ'>Add New</label>
				</li>
				<li id='' ><input type=\"text\" id='typ' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='name_ul' style='display:'>
				<li class='lab' >
					<label id='name_lab' for='name'>Label</label>
				</li>
				<li id='' ><input type=\"text\" id='name' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='selOption_ul' style='display:'>
				<li class='lab' >
					<label id='selOption_lab' for='selOption'>Choose Category</label>
				</li>
				<li id='' ><select id='selOption'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='fileUp_ul' style='display:'>
				<li class='lab' >
					<label id='fileUp_lab' for='fileUp'>File Upload</label>
				</li>
				<li id='' ><div id='fileUpInner'>
	<div class='vInfo' style='display:none;' onclick='fileLaunch(this)'></div>

	<input type='hidden' id='fileUp' name='fileUp' />
</div>
</li>
			</ul>
			<ul class='elmWrap  ' id='sel_ul' style='display:'>
				<li class='lab' >
					<label id='sel_lab' for='sel'>Choose From List</label>
				</li>
				<li id='' ><select id='sel'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='selType_ul' style='display:'>
				<li class='lab' >
					<label id='selType_lab' for='selType'>Get Value</label>
				</li>
				<li id='' ><radiogroup id='selType' name='selType'> 
	<input type='radio' id='selType_0' name='selType' value='0'  />
<label id='lab_selType_0' for='selType_0'></label>

</radiogroup>
</li>
			</ul>
			<ul class='elmWrap  ' id='selType_ul' style='display:'>
				<li class='lab' >
					<label id='selType_lab' for='selType'>From Field</label>
				</li>
				<li id='' ><input type='radio' id='selType_0' name='selType' value='0'  />
<label id='lab_selType_0' for='selType_0'></label>
</li>
			</ul>
			<ul class='elmWrap  ' id='selType_ul' style='display:'>
				<li class='lab' >
					<label id='selType_lab' for='selType'>From Select</label>
				</li>
				<li id='' ><input type='radio' id='selType_0' name='selType' value='0'  />
<label id='lab_selType_0' for='selType_0'></label>
</li>
			</ul>
			<ul class='elmWrap  ' id='selType_ul' style='display:'>
				<li class='lab' >
					<label id='selType_lab' for='selType'>From Upload</label>
				</li>
				<li id='' ><input type='radio' id='selType_0' name='selType' value='0'  />
<label id='lab_selType_0' for='selType_0'></label>
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"P206\");'
				
				/>
				<input id='P206_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='P206.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['P207'] =='undefined') htmlPanes[P207]=new Object();
if (typeof htmlPanes['P207']['e'] =='undefined') htmlPanes[P207]['e']=new Object();
if (typeof htmlPanes['P207']['l'] =='undefined') htmlPanes[P207]['l']=new Object();
htmlPanes['P207']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['P207']['e']['f'] = {"label":{"def":"","lab":"Label","src":"-1","typ":"2","val":"0","vis":"96"},
"id":{"def":"","lab":"Id","src":"-1","typ":"1","val":"0","vis":"96"}};
htmlPanes['P207']['e']['p'] = "	<form  id='edit_form_P207' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_P207' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='P207_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='label_ul' style='display:'>
				<li class='lab' >
					<label id='label_lab' for='label'>Label</label>
				</li>
				<li id='' ><input type=\"text\" id='label' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='id_ul' style='display:'>
				<li class='lab' >
					<label id='id_lab' for='id'>Id</label>
				</li>
				<li id='' ><input type=\"text\" id='id' value='' size='35'   />
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"P207\");'
				
				/>
				<input id='P207_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='P207.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['P208'] =='undefined') htmlPanes[P208]=new Object();
if (typeof htmlPanes['P208']['e'] =='undefined') htmlPanes[P208]['e']=new Object();
if (typeof htmlPanes['P208']['l'] =='undefined') htmlPanes[P208]['l']=new Object();
htmlPanes['P208']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['P208']['e']['f'] = {"label":{"def":"","lab":"Label","src":"-1","typ":"2","val":"0","vis":"96"},
"id":{"def":"","lab":"Id","src":"-1","typ":"1","val":"0","vis":"96"}};
htmlPanes['P208']['e']['p'] = "	<form  id='edit_form_P208' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_P208' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='P208_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='label_ul' style='display:'>
				<li class='lab' >
					<label id='label_lab' for='label'>Label</label>
				</li>
				<li id='' ><input type=\"text\" id='label' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='id_ul' style='display:'>
				<li class='lab' >
					<label id='id_lab' for='id'>Id</label>
				</li>
				<li id='' ><input type=\"text\" id='id' value='' size='35'   />
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"P208\");'
				
				/>
				<input id='P208_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='P208.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['P209'] =='undefined') htmlPanes[P209]=new Object();
if (typeof htmlPanes['P209']['e'] =='undefined') htmlPanes[P209]['e']=new Object();
if (typeof htmlPanes['P209']['l'] =='undefined') htmlPanes[P209]['l']=new Object();
htmlPanes['P209']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['P209']['e']['f'] = {"label":{"def":"","lab":"Lablel","src":"-1","typ":"2","val":"0","vis":"96"},
"id":{"def":"","lab":"Id","src":"-1","typ":"1","val":"0","vis":"96"}};
htmlPanes['P209']['e']['p'] = "	<form  id='edit_form_P209' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_P209' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='P209_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='label_ul' style='display:'>
				<li class='lab' >
					<label id='label_lab' for='label'>Lablel</label>
				</li>
				<li id='' ><input type=\"text\" id='label' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='id_ul' style='display:'>
				<li class='lab' >
					<label id='id_lab' for='id'>Id</label>
				</li>
				<li id='' ><input type=\"text\" id='id' value='' size='35'   />
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"P209\");'
				
				/>
				<input id='P209_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='P209.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['T100'] =='undefined') htmlPanes[T100]=new Object();
if (typeof htmlPanes['T100']['e'] =='undefined') htmlPanes[T100]['e']=new Object();
if (typeof htmlPanes['T100']['l'] =='undefined') htmlPanes[T100]['l']=new Object();
htmlPanes['T100']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['T100']['e']['f'] = {"name":{"def":"","lab":"Name","src":"-1","typ":"2","val":"18","vis":"112"},
"url":{"def":"","lab":"Picture (JPG 5mo max)","src":"-1","typ":"16","val":"0","vis":"96"},
"description":{"def":"","lab":"Description","src":"-1","typ":"8","val":"18","vis":"96"},
"copyLab":{"def":"©DR","lab":"Copyright Label","src":"-1","typ":"2","val":"0","vis":"96"},
"timecode":{"def":"00:00:00","lab":"Time Code","src":"-1","typ":"2","val":"1026","vis":"96"},
"launchVid":{"def":"Launch","lab":"","src":"-1","typ":"32768","val":"0","vis":"96"},
"clearTC":{"def":"Clear","lab":"","src":"-1","typ":"32768","val":"0","vis":"96"},
"logo":{"def":"","lab":"Large logo (300x100 | PNG) ","src":"-1","typ":"16","val":"0","vis":"96"},
"lnkLab":{"def":"","lab":"Link Label","src":"-1","typ":"2","val":"0","vis":"96"},
"lnkUrl":{"def":"","lab":"Link URL","src":"-1","typ":"128","val":"32","vis":"96"},
"sponsLog":{"def":"","lab":"Sponsor Logo (150x50 | PNG)","src":"-1","typ":"16","val":"0","vis":"96"},
"ecomType":{"def":"0","lab":"ECommerce Type","src":"-1","typ":"2048","val":"0","vis":"96"},
"ecomType":{"def":"","lab":"None","src":"-1","typ":"4096","val":"0","vis":"96"},
"ecomType":{"def":"","lab":"Download a File","src":"-1","typ":"4096","val":"0","vis":"96"},
"ecomType":{"def":"","lab":"Link to a Store","src":"-1","typ":"4096","val":"0","vis":"80"},
"ecomLnk":{"def":"","lab":"ECommerce Link","src":"-1","typ":"128","val":"32","vis":"96"},
"ecomDnl":{"def":"","lab":"ECommerce Download","src":"-1","typ":"32","val":"0","vis":"96"}};
htmlPanes['T100']['e']['p'] = "	<form  id='edit_form_T100' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_T100' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='T100_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='name_ul' style='display:'>
				<li class='lab' >
					<label id='name_lab' for='name'>Name</label>
				</li>
				<li id='' ><input type=\"text\" id='name' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='url_ul' style='display:'>
				<li class='lab' >
					<label id='url_lab' for='url'>Picture (JPG 5mo max)</label>
				</li>
				<li id='' ><div class='imgUpldWrap'>
	<div class='imgWrap url'>
		<img class='logoImg' id='img_url' src='' onclick=\"ovlPic(this);\"></img>
	<!--
		<a class='lbox'>
		<img class='logoImg' id='img_url' src=''></img>
		</a>
	-->
	</div>
	
	<input type='hidden' class='imgFileTxt' id='url' name='url' style='border:none; background:transparent;' />
</div>
</li>
			</ul>
			<ul class='elmWrap  ' id='description_ul' style='display:'>
				<li class='lab' >
					<label id='description_lab' for='description'>Description</label>
				</li>
				<li id='' ><textarea id='description' class='tinyTxtArea' name='description' rows='4' cols='32'  ></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='copyLab_ul' style='display:'>
				<li class='lab' >
					<label id='copyLab_lab' for='copyLab'>Copyright Label</label>
				</li>
				<li id='' ><input type=\"text\" id='copyLab' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='timecode_ul' style='display:'>
				<li class='lab' >
					<label id='timecode_lab' for='timecode'>Time Code</label>
				</li>
				<li id='' ><input type=\"text\" id='timecode' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='launchVid_ul' style='display:'>
				<li class='lab' >
					<label id='launchVid_lab' for='launchVid'></label>
				</li>
				<li id='' >
<div class='upldBtn'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='clearTC_ul' style='display:'>
				<li class='lab' >
					<label id='clearTC_lab' for='clearTC'></label>
				</li>
				<li id='' >
<div class='upldBtn'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='logo_ul' style='display:'>
				<li class='lab' >
					<label id='logo_lab' for='logo'>Large logo (300x100 | PNG) </label>
				</li>
				<li id='' ><div class='imgUpldWrap'>
	<div class='imgWrap logo'>
		<img class='logoImg' id='img_logo' src='' onclick=\"ovlPic(this);\"></img>
	<!--
		<a class='lbox'>
		<img class='logoImg' id='img_logo' src=''></img>
		</a>
	-->
	</div>
	
	<input type='hidden' class='imgFileTxt' id='logo' name='logo' style='border:none; background:transparent;' />
</div>
</li>
			</ul>
			<ul class='elmWrap  ' id='lnkLab_ul' style='display:'>
				<li class='lab' >
					<label id='lnkLab_lab' for='lnkLab'>Link Label</label>
				</li>
				<li id='' ><input type=\"text\" id='lnkLab' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='lnkUrl_ul' style='display:'>
				<li class='lab' >
					<label id='lnkUrl_lab' for='lnkUrl'>Link URL</label>
				</li>
				<li id='' ><textarea id='lnkUrl' class='selTxtTxt' rows='3' cols='60' ></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='sponsLog_ul' style='display:'>
				<li class='lab' >
					<label id='sponsLog_lab' for='sponsLog'>Sponsor Logo (150x50 | PNG)</label>
				</li>
				<li id='' ><div class='imgUpldWrap'>
	<div class='imgWrap sponsLog'>
		<img class='logoImg' id='img_sponsLog' src='' onclick=\"ovlPic(this);\"></img>
	<!--
		<a class='lbox'>
		<img class='logoImg' id='img_sponsLog' src=''></img>
		</a>
	-->
	</div>
	
	<input type='hidden' class='imgFileTxt' id='sponsLog' name='sponsLog' style='border:none; background:transparent;' />
</div>
</li>
			</ul>
			<ul class='elmWrap  ' id='ecomType_ul' style='display:'>
				<li class='lab' >
					<label id='ecomType_lab' for='ecomType'>ECommerce Type</label>
				</li>
				<li id='' ><radiogroup id='ecomType' name='ecomType'> 
	<input type='radio' id='ecomType_0' name='ecomType' value='0'  />
<label id='lab_ecomType_0' for='ecomType_0'></label>

</radiogroup>
</li>
			</ul>
			<ul class='elmWrap  ' id='ecomType_ul' style='display:'>
				<li class='lab' >
					<label id='ecomType_lab' for='ecomType'>None</label>
				</li>
				<li id='' ><input type='radio' id='ecomType_0' name='ecomType' value='0'  />
<label id='lab_ecomType_0' for='ecomType_0'></label>
</li>
			</ul>
			<ul class='elmWrap  ' id='ecomType_ul' style='display:'>
				<li class='lab' >
					<label id='ecomType_lab' for='ecomType'>Download a File</label>
				</li>
				<li id='' ><input type='radio' id='ecomType_0' name='ecomType' value='0'  />
<label id='lab_ecomType_0' for='ecomType_0'></label>
</li>
			</ul>
			<ul class='elmWrap  ' id='ecomType_ul' style='display:'>
				<li class='lab' >
					<label id='ecomType_lab' for='ecomType'>Link to a Store</label>
				</li>
				<li id='' ><input type='radio' id='ecomType_0' name='ecomType' value='0'  />
<label id='lab_ecomType_0' for='ecomType_0'></label>
</li>
			</ul>
			<ul class='elmWrap  ' id='ecomLnk_ul' style='display:'>
				<li class='lab' >
					<label id='ecomLnk_lab' for='ecomLnk'>ECommerce Link</label>
				</li>
				<li id='' ><textarea id='ecomLnk' class='selTxtTxt' rows='3' cols='60' ></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='ecomDnl_ul' style='display:'>
				<li class='lab' >
					<label id='ecomDnl_lab' for='ecomDnl'>ECommerce Download</label>
				</li>
				<li id='' ><div id='ecomDnlInner'>
	<div class='vInfo' style='display:none;' onclick='fileLaunch(this)'></div>

	<input type='hidden' id='ecomDnl' name='ecomDnl' />
</div>
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"T100\");'
				
				/>
				<input id='T100_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='T100.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['T114'] =='undefined') htmlPanes[T114]=new Object();
if (typeof htmlPanes['T114']['e'] =='undefined') htmlPanes[T114]['e']=new Object();
if (typeof htmlPanes['T114']['l'] =='undefined') htmlPanes[T114]['l']=new Object();
htmlPanes['T114']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['T114']['e']['f'] = {"name":{"def":"","lab":"Name","src":"-1","typ":"2","val":"18","vis":"112"},
"url":{"def":"","lab":"Picture (JPG 5mo max)","src":"-1","typ":"16","val":"0","vis":"96"},
"description":{"def":"","lab":"Description","src":"-1","typ":"8","val":"0","vis":"96"},
"copyLab":{"def":"©DR","lab":"Copyright Label","src":"-1","typ":"2","val":"0","vis":"96"},
"launchVid":{"def":"Launch","lab":"","src":"-1","typ":"32768","val":"0","vis":"96"},
"clearTC":{"def":"Clear","lab":"","src":"-1","typ":"32768","val":"0","vis":"96"},
"startTC":{"def":"00:00:00","lab":"Start/End TC","src":"-1","typ":"2","val":"1026","vis":"96"},
"endTC":{"def":"00:00:00","lab":"/","src":"-1","typ":"2","val":"1026","vis":"96"},
"logo":{"def":"","lab":"Large logo (300x100 | PNG)","src":"-1","typ":"16","val":"0","vis":"96"},
"lnkLab":{"def":"","lab":"Link Label","src":"-1","typ":"2","val":"0","vis":"96"},
"lnkUrl":{"def":"","lab":"Link URL","src":"-1","typ":"128","val":"32","vis":"96"},
"sponsLog":{"def":"","lab":"Sponsor Logo (150x50 | PNG) ","src":"-1","typ":"16","val":"0","vis":"96"},
"ecomType":{"def":"0","lab":"ECommerce Type","src":"-1","typ":"2048","val":"0","vis":"96"},
"ecomType":{"def":"","lab":"None","src":"-1","typ":"4096","val":"0","vis":"96"},
"ecomType":{"def":"","lab":"Download a File","src":"-1","typ":"4096","val":"0","vis":"96"},
"ecomType":{"def":"","lab":"Link to a Store","src":"-1","typ":"4096","val":"0","vis":"80"},
"ecomLnk":{"def":"","lab":"ECommerce Link","src":"-1","typ":"128","val":"32","vis":"96"},
"ecomDnl":{"def":"","lab":"ECommerce Download","src":"-1","typ":"32","val":"0","vis":"96"}};
htmlPanes['T114']['e']['p'] = "	<form  id='edit_form_T114' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_T114' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='T114_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='name_ul' style='display:'>
				<li class='lab' >
					<label id='name_lab' for='name'>Name</label>
				</li>
				<li id='' ><input type=\"text\" id='name' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='url_ul' style='display:'>
				<li class='lab' >
					<label id='url_lab' for='url'>Picture (JPG 5mo max)</label>
				</li>
				<li id='' ><div class='imgUpldWrap'>
	<div class='imgWrap url'>
		<img class='logoImg' id='img_url' src='' onclick=\"ovlPic(this);\"></img>
	<!--
		<a class='lbox'>
		<img class='logoImg' id='img_url' src=''></img>
		</a>
	-->
	</div>
	
	<input type='hidden' class='imgFileTxt' id='url' name='url' style='border:none; background:transparent;' />
</div>
</li>
			</ul>
			<ul class='elmWrap  ' id='description_ul' style='display:'>
				<li class='lab' >
					<label id='description_lab' for='description'>Description</label>
				</li>
				<li id='' ><textarea id='description' class='tinyTxtArea' name='description' rows='4' cols='32'  ></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='copyLab_ul' style='display:'>
				<li class='lab' >
					<label id='copyLab_lab' for='copyLab'>Copyright Label</label>
				</li>
				<li id='' ><input type=\"text\" id='copyLab' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='launchVid_ul' style='display:'>
				<li class='lab' >
					<label id='launchVid_lab' for='launchVid'></label>
				</li>
				<li id='' >
<div class='upldBtn'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='clearTC_ul' style='display:'>
				<li class='lab' >
					<label id='clearTC_lab' for='clearTC'></label>
				</li>
				<li id='' >
<div class='upldBtn'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='startTC_ul' style='display:'>
				<li class='lab' >
					<label id='startTC_lab' for='startTC'>Start/End TC</label>
				</li>
				<li id='' ><input type=\"text\" id='startTC' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='endTC_ul' style='display:'>
				<li class='lab' >
					<label id='endTC_lab' for='endTC'>/</label>
				</li>
				<li id='' ><input type=\"text\" id='endTC' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='logo_ul' style='display:'>
				<li class='lab' >
					<label id='logo_lab' for='logo'>Large logo (300x100 | PNG)</label>
				</li>
				<li id='' ><div class='imgUpldWrap'>
	<div class='imgWrap logo'>
		<img class='logoImg' id='img_logo' src='' onclick=\"ovlPic(this);\"></img>
	<!--
		<a class='lbox'>
		<img class='logoImg' id='img_logo' src=''></img>
		</a>
	-->
	</div>
	
	<input type='hidden' class='imgFileTxt' id='logo' name='logo' style='border:none; background:transparent;' />
</div>
</li>
			</ul>
			<ul class='elmWrap  ' id='lnkLab_ul' style='display:'>
				<li class='lab' >
					<label id='lnkLab_lab' for='lnkLab'>Link Label</label>
				</li>
				<li id='' ><input type=\"text\" id='lnkLab' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='lnkUrl_ul' style='display:'>
				<li class='lab' >
					<label id='lnkUrl_lab' for='lnkUrl'>Link URL</label>
				</li>
				<li id='' ><textarea id='lnkUrl' class='selTxtTxt' rows='3' cols='60' ></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='sponsLog_ul' style='display:'>
				<li class='lab' >
					<label id='sponsLog_lab' for='sponsLog'>Sponsor Logo (150x50 | PNG) </label>
				</li>
				<li id='' ><div class='imgUpldWrap'>
	<div class='imgWrap sponsLog'>
		<img class='logoImg' id='img_sponsLog' src='' onclick=\"ovlPic(this);\"></img>
	<!--
		<a class='lbox'>
		<img class='logoImg' id='img_sponsLog' src=''></img>
		</a>
	-->
	</div>
	
	<input type='hidden' class='imgFileTxt' id='sponsLog' name='sponsLog' style='border:none; background:transparent;' />
</div>
</li>
			</ul>
			<ul class='elmWrap  ' id='ecomType_ul' style='display:'>
				<li class='lab' >
					<label id='ecomType_lab' for='ecomType'>ECommerce Type</label>
				</li>
				<li id='' ><radiogroup id='ecomType' name='ecomType'> 
	<input type='radio' id='ecomType_0' name='ecomType' value='0'  />
<label id='lab_ecomType_0' for='ecomType_0'></label>

</radiogroup>
</li>
			</ul>
			<ul class='elmWrap  ' id='ecomType_ul' style='display:'>
				<li class='lab' >
					<label id='ecomType_lab' for='ecomType'>None</label>
				</li>
				<li id='' ><input type='radio' id='ecomType_0' name='ecomType' value='0'  />
<label id='lab_ecomType_0' for='ecomType_0'></label>
</li>
			</ul>
			<ul class='elmWrap  ' id='ecomType_ul' style='display:'>
				<li class='lab' >
					<label id='ecomType_lab' for='ecomType'>Download a File</label>
				</li>
				<li id='' ><input type='radio' id='ecomType_0' name='ecomType' value='0'  />
<label id='lab_ecomType_0' for='ecomType_0'></label>
</li>
			</ul>
			<ul class='elmWrap  ' id='ecomType_ul' style='display:'>
				<li class='lab' >
					<label id='ecomType_lab' for='ecomType'>Link to a Store</label>
				</li>
				<li id='' ><input type='radio' id='ecomType_0' name='ecomType' value='0'  />
<label id='lab_ecomType_0' for='ecomType_0'></label>
</li>
			</ul>
			<ul class='elmWrap  ' id='ecomLnk_ul' style='display:'>
				<li class='lab' >
					<label id='ecomLnk_lab' for='ecomLnk'>ECommerce Link</label>
				</li>
				<li id='' ><textarea id='ecomLnk' class='selTxtTxt' rows='3' cols='60' ></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='ecomDnl_ul' style='display:'>
				<li class='lab' >
					<label id='ecomDnl_lab' for='ecomDnl'>ECommerce Download</label>
				</li>
				<li id='' ><div id='ecomDnlInner'>
	<div class='vInfo' style='display:none;' onclick='fileLaunch(this)'></div>

	<input type='hidden' id='ecomDnl' name='ecomDnl' />
</div>
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"T114\");'
				
				/>
				<input id='T114_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='T114.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['T115'] =='undefined') htmlPanes[T115]=new Object();
if (typeof htmlPanes['T115']['e'] =='undefined') htmlPanes[T115]['e']=new Object();
if (typeof htmlPanes['T115']['l'] =='undefined') htmlPanes[T115]['l']=new Object();
htmlPanes['T115']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['T115']['e']['f'] = {"name":{"def":"","lab":"Title","src":"-1","typ":"2","val":"18","vis":"112"},
"mode":{"def":"","lab":"Publishing","src":"-1","typ":"2048","val":"0","vis":"96"},
"mode":{"def":"","lab":"Live","src":"-1","typ":"4096","val":"0","vis":"96"},
"mode":{"def":"","lab":"VOD","src":"-1","typ":"4096","val":"0","vis":"96"},
"streamAS":{"def":"","lab":"Stream AS URL","src":"-1","typ":"8192","val":"0","vis":"96"},
"upldMcAS":{"def":"","lab":"","src":"-1","typ":"32768","val":"0","vis":"64"},
"streamHd":{"def":"","lab":"Stream HD URL","src":"-1","typ":"8192","val":"0","vis":"96"},
"upldMcHD":{"def":"","lab":"","src":"-1","typ":"32768","val":"0","vis":"96"},
"streamThumb":{"def":"","lab":"Stream Thumb","src":"-1","typ":"8192","val":"0","vis":"96"},
"upldMcTmb":{"def":"","lab":"","src":"-1","typ":"32768","val":"0","vis":"32"},
"streamIso":{"def":"","lab":"Stream Iso","src":"-1","typ":"8192","val":"0","vis":"96"},
"upldMcIso":{"def":"","lab":"","src":"-1","typ":"32768","val":"0","vis":"32"},
"syncmv":{"def":"","lab":"Synchronize with Main Video","src":"-1","typ":"64","val":"0","vis":"96"},
"volVI":{"def":"","lab":"Video","src":"zeroHundred","typ":"4","val":"0","vis":"96"},
"volMainVideo":{"def":"","lab":"Main Video","src":"zeroHundred","typ":"4","val":"0","vis":"96"},
"description":{"def":"","lab":"Description","src":"-1","typ":"8","val":"18","vis":"96"},
"copyLab":{"def":"©DR","lab":"Copyright Label","src":"-1","typ":"2","val":"0","vis":"96"},
"logo":{"def":"","lab":"Large logo (300x100 | PNG) ","src":"-1","typ":"16","val":"0","vis":"96"},
"lnkLab":{"def":"","lab":"Link Label","src":"-1","typ":"2","val":"0","vis":"96"},
"lnkUrl":{"def":"","lab":"Link URL","src":"-1","typ":"128","val":"32","vis":"96"},
"sponsLog":{"def":"","lab":"Sponsor Logo (150x50 | PNG)","src":"-1","typ":"16","val":"0","vis":"96"},
"ecomType":{"def":"","lab":"ECommerce Type","src":"-1","typ":"2048","val":"0","vis":"96"},
"ecomType":{"def":"","lab":"None","src":"-1","typ":"4096","val":"0","vis":"96"},
"ecomType":{"def":"","lab":"Download a File","src":"-1","typ":"4096","val":"0","vis":"96"},
"ecomType":{"def":"","lab":"Link to a Store","src":"-1","typ":"4096","val":"0","vis":"96"},
"ecomLnk":{"def":"","lab":"ECommerce Link","src":"-1","typ":"128","val":"32","vis":"96"},
"ecomDnl":{"def":"","lab":"ECommerce Download","src":"-1","typ":"32","val":"0","vis":"96"},
"timecode":{"def":"00:00:00","lab":"Time Code","src":"-1","typ":"2","val":"1026","vis":"96"},
"launchVid":{"def":"Launch","lab":"","src":"-1","typ":"32768","val":"0","vis":"96"},
"clearTC":{"def":"Clear","lab":"","src":"-1","typ":"32768","val":"0","vis":"96"}};
htmlPanes['T115']['e']['p'] = "	<form  id='edit_form_T115' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_T115' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='T115_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='name_ul' style='display:'>
				<li class='lab' >
					<label id='name_lab' for='name'>Title</label>
				</li>
				<li id='' ><input type=\"text\" id='name' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='mode_ul' style='display:'>
				<li class='lab' >
					<label id='mode_lab' for='mode'>Publishing</label>
				</li>
				<li id='' ><radiogroup id='mode' name='mode'> 
	<input type='radio' id='mode_0' name='mode' value='0'  />
<label id='lab_mode_0' for='mode_0'></label>

</radiogroup>
</li>
			</ul>
			<ul class='elmWrap  ' id='mode_ul' style='display:'>
				<li class='lab' >
					<label id='mode_lab' for='mode'>Live</label>
				</li>
				<li id='' ><input type='radio' id='mode_0' name='mode' value='0'  />
<label id='lab_mode_0' for='mode_0'></label>
</li>
			</ul>
			<ul class='elmWrap  ' id='mode_ul' style='display:'>
				<li class='lab' >
					<label id='mode_lab' for='mode'>VOD</label>
				</li>
				<li id='' ><input type='radio' id='mode_0' name='mode' value='0'  />
<label id='lab_mode_0' for='mode_0'></label>
</li>
			</ul>
			<ul class='elmWrap  ' id='streamAS_ul' style='display:'>
				<li class='lab' >
					<label id='streamAS_lab' for='streamAS'>Stream AS URL</label>
				</li>
				<li id='' ><select id='streamAS_sel'  class='selSelTxt'>
	<option value=''>...loading</option>
</select>
<textarea type='text' id='streamAS_txt' class='selTxtTxt' cols=\"60\" rows=\"3\"></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='upldMcAS_ul' style='display:'>
				<li class='lab' >
					<label id='upldMcAS_lab' for='upldMcAS'></label>
				</li>
				<li id='' >
<div class='upldBtn'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='streamHd_ul' style='display:'>
				<li class='lab' >
					<label id='streamHd_lab' for='streamHd'>Stream HD URL</label>
				</li>
				<li id='' ><select id='streamHd_sel'  class='selSelTxt'>
	<option value=''>...loading</option>
</select>
<textarea type='text' id='streamHd_txt' class='selTxtTxt' cols=\"60\" rows=\"3\"></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='upldMcHD_ul' style='display:'>
				<li class='lab' >
					<label id='upldMcHD_lab' for='upldMcHD'></label>
				</li>
				<li id='' >
<div class='upldBtn'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='streamThumb_ul' style='display:'>
				<li class='lab' >
					<label id='streamThumb_lab' for='streamThumb'>Stream Thumb</label>
				</li>
				<li id='' ><select id='streamThumb_sel'  class='selSelTxt'>
	<option value=''>...loading</option>
</select>
<textarea type='text' id='streamThumb_txt' class='selTxtTxt' cols=\"60\" rows=\"3\"></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='upldMcTmb_ul' style='display:'>
				<li class='lab' >
					<label id='upldMcTmb_lab' for='upldMcTmb'></label>
				</li>
				<li id='' >
<div class='upldBtn'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='streamIso_ul' style='display:'>
				<li class='lab' >
					<label id='streamIso_lab' for='streamIso'>Stream Iso</label>
				</li>
				<li id='' ><select id='streamIso_sel'  class='selSelTxt'>
	<option value=''>...loading</option>
</select>
<textarea type='text' id='streamIso_txt' class='selTxtTxt' cols=\"60\" rows=\"3\"></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='upldMcIso_ul' style='display:'>
				<li class='lab' >
					<label id='upldMcIso_lab' for='upldMcIso'></label>
				</li>
				<li id='' >
<div class='upldBtn'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='syncmv_ul' style='display:'>
				<li class='lab' >
					<label id='syncmv_lab' for='syncmv'>Synchronize with Main Video</label>
				</li>
				<li id='' ><input type='checkbox' id='syncmv'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='volVI_ul' style='display:'>
				<li class='lab' >
					<label id='volVI_lab' for='volVI'>Video</label>
				</li>
				<li id='' ><select id='volVI'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='volMainVideo_ul' style='display:'>
				<li class='lab' >
					<label id='volMainVideo_lab' for='volMainVideo'>Main Video</label>
				</li>
				<li id='' ><select id='volMainVideo'  >
	<option value=''>...loading</option>
</select>
</li>
			</ul>
			<ul class='elmWrap  ' id='description_ul' style='display:'>
				<li class='lab' >
					<label id='description_lab' for='description'>Description</label>
				</li>
				<li id='' ><textarea id='description' class='tinyTxtArea' name='description' rows='4' cols='32'  ></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='copyLab_ul' style='display:'>
				<li class='lab' >
					<label id='copyLab_lab' for='copyLab'>Copyright Label</label>
				</li>
				<li id='' ><input type=\"text\" id='copyLab' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='logo_ul' style='display:'>
				<li class='lab' >
					<label id='logo_lab' for='logo'>Large logo (300x100 | PNG) </label>
				</li>
				<li id='' ><div class='imgUpldWrap'>
	<div class='imgWrap logo'>
		<img class='logoImg' id='img_logo' src='' onclick=\"ovlPic(this);\"></img>
	<!--
		<a class='lbox'>
		<img class='logoImg' id='img_logo' src=''></img>
		</a>
	-->
	</div>
	
	<input type='hidden' class='imgFileTxt' id='logo' name='logo' style='border:none; background:transparent;' />
</div>
</li>
			</ul>
			<ul class='elmWrap  ' id='lnkLab_ul' style='display:'>
				<li class='lab' >
					<label id='lnkLab_lab' for='lnkLab'>Link Label</label>
				</li>
				<li id='' ><input type=\"text\" id='lnkLab' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='lnkUrl_ul' style='display:'>
				<li class='lab' >
					<label id='lnkUrl_lab' for='lnkUrl'>Link URL</label>
				</li>
				<li id='' ><textarea id='lnkUrl' class='selTxtTxt' rows='3' cols='60' ></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='sponsLog_ul' style='display:'>
				<li class='lab' >
					<label id='sponsLog_lab' for='sponsLog'>Sponsor Logo (150x50 | PNG)</label>
				</li>
				<li id='' ><div class='imgUpldWrap'>
	<div class='imgWrap sponsLog'>
		<img class='logoImg' id='img_sponsLog' src='' onclick=\"ovlPic(this);\"></img>
	<!--
		<a class='lbox'>
		<img class='logoImg' id='img_sponsLog' src=''></img>
		</a>
	-->
	</div>
	
	<input type='hidden' class='imgFileTxt' id='sponsLog' name='sponsLog' style='border:none; background:transparent;' />
</div>
</li>
			</ul>
			<ul class='elmWrap  ' id='ecomType_ul' style='display:'>
				<li class='lab' >
					<label id='ecomType_lab' for='ecomType'>ECommerce Type</label>
				</li>
				<li id='' ><radiogroup id='ecomType' name='ecomType'> 
	<input type='radio' id='ecomType_0' name='ecomType' value='0'  />
<label id='lab_ecomType_0' for='ecomType_0'></label>

</radiogroup>
</li>
			</ul>
			<ul class='elmWrap  ' id='ecomType_ul' style='display:'>
				<li class='lab' >
					<label id='ecomType_lab' for='ecomType'>None</label>
				</li>
				<li id='' ><input type='radio' id='ecomType_0' name='ecomType' value='0'  />
<label id='lab_ecomType_0' for='ecomType_0'></label>
</li>
			</ul>
			<ul class='elmWrap  ' id='ecomType_ul' style='display:'>
				<li class='lab' >
					<label id='ecomType_lab' for='ecomType'>Download a File</label>
				</li>
				<li id='' ><input type='radio' id='ecomType_0' name='ecomType' value='0'  />
<label id='lab_ecomType_0' for='ecomType_0'></label>
</li>
			</ul>
			<ul class='elmWrap  ' id='ecomType_ul' style='display:'>
				<li class='lab' >
					<label id='ecomType_lab' for='ecomType'>Link to a Store</label>
				</li>
				<li id='' ><input type='radio' id='ecomType_0' name='ecomType' value='0'  />
<label id='lab_ecomType_0' for='ecomType_0'></label>
</li>
			</ul>
			<ul class='elmWrap  ' id='ecomLnk_ul' style='display:'>
				<li class='lab' >
					<label id='ecomLnk_lab' for='ecomLnk'>ECommerce Link</label>
				</li>
				<li id='' ><textarea id='ecomLnk' class='selTxtTxt' rows='3' cols='60' ></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='ecomDnl_ul' style='display:'>
				<li class='lab' >
					<label id='ecomDnl_lab' for='ecomDnl'>ECommerce Download</label>
				</li>
				<li id='' ><div id='ecomDnlInner'>
	<div class='vInfo' style='display:none;' onclick='fileLaunch(this)'></div>

	<input type='hidden' id='ecomDnl' name='ecomDnl' />
</div>
</li>
			</ul>
			<ul class='elmWrap  ' id='timecode_ul' style='display:'>
				<li class='lab' >
					<label id='timecode_lab' for='timecode'>Time Code</label>
				</li>
				<li id='' ><input type=\"text\" id='timecode' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='launchVid_ul' style='display:'>
				<li class='lab' >
					<label id='launchVid_lab' for='launchVid'></label>
				</li>
				<li id='' >
<div class='upldBtn'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='clearTC_ul' style='display:'>
				<li class='lab' >
					<label id='clearTC_lab' for='clearTC'></label>
				</li>
				<li id='' >
<div class='upldBtn'  />
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"T115\");'
				
				/>
				<input id='T115_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='T115.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['T124'] =='undefined') htmlPanes[T124]=new Object();
if (typeof htmlPanes['T124']['e'] =='undefined') htmlPanes[T124]['e']=new Object();
if (typeof htmlPanes['T124']['l'] =='undefined') htmlPanes[T124]['l']=new Object();
htmlPanes['T124']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['T124']['e']['f'] = {"name":{"def":"","lab":"Name","src":"-1","typ":"2","val":"0","vis":"112"},
"streamHd":{"def":"","lab":"Stream HD","src":"-1","typ":"8192","val":"0","vis":"112"},
"UstreamHd":{"def":"0","lab":"","src":"-1","typ":"32768","val":"0","vis":"32"},
"streamAS":{"def":"0","lab":"Stream AS","src":"-1","typ":"8192","val":"0","vis":"96"},
"UstreamAS":{"def":"0","lab":"","src":"-1","typ":"32768","val":"0","vis":"32"},
"mode":{"def":"0","lab":"Publishing Mode","src":"-1","typ":"2048","val":"0","vis":"96"},
"mode":{"def":"0","lab":"Live","src":"-1","typ":"4096","val":"0","vis":"96"},
"mode":{"def":"0","lab":"VOD","src":"-1","typ":"4096","val":"0","vis":"96"},
"streamBS":{"def":"","lab":"Stream BS","src":"-1","typ":"8192","val":"0","vis":"112"},
"UstreamBS":{"def":"0","lab":"","src":"-1","typ":"32768","val":"0","vis":"32"},
"picture":{"def":"","lab":"Picture","src":"-1","typ":"16","val":"0","vis":"112"},
"picture2":{"def":"","lab":"Picture 2","src":"-1","typ":"16","val":"0","vis":"112"},
"image1":{"def":"","lab":"Img ","src":"-1","typ":"16","val":"0","vis":"112"}};
htmlPanes['T124']['e']['p'] = "	<form  id='edit_form_T124' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_T124' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='T124_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='name_ul' style='display:'>
				<li class='lab' >
					<label id='name_lab' for='name'>Name</label>
				</li>
				<li id='' ><input type=\"text\" id='name' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='streamHd_ul' style='display:'>
				<li class='lab' >
					<label id='streamHd_lab' for='streamHd'>Stream HD</label>
				</li>
				<li id='' ><select id='streamHd_sel'  class='selSelTxt'>
	<option value=''>...loading</option>
</select>
<textarea type='text' id='streamHd_txt' class='selTxtTxt' cols=\"60\" rows=\"3\"></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='UstreamHd_ul' style='display:'>
				<li class='lab' >
					<label id='UstreamHd_lab' for='UstreamHd'></label>
				</li>
				<li id='' >
<div class='upldBtn'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='streamAS_ul' style='display:'>
				<li class='lab' >
					<label id='streamAS_lab' for='streamAS'>Stream AS</label>
				</li>
				<li id='' ><select id='streamAS_sel'  class='selSelTxt'>
	<option value=''>...loading</option>
</select>
<textarea type='text' id='streamAS_txt' class='selTxtTxt' cols=\"60\" rows=\"3\"></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='UstreamAS_ul' style='display:'>
				<li class='lab' >
					<label id='UstreamAS_lab' for='UstreamAS'></label>
				</li>
				<li id='' >
<div class='upldBtn'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='mode_ul' style='display:'>
				<li class='lab' >
					<label id='mode_lab' for='mode'>Publishing Mode</label>
				</li>
				<li id='' ><radiogroup id='mode' name='mode'> 
	<input type='radio' id='mode_0' name='mode' value='0'  />
<label id='lab_mode_0' for='mode_0'></label>

</radiogroup>
</li>
			</ul>
			<ul class='elmWrap  ' id='mode_ul' style='display:'>
				<li class='lab' >
					<label id='mode_lab' for='mode'>Live</label>
				</li>
				<li id='' ><input type='radio' id='mode_0' name='mode' value='0'  />
<label id='lab_mode_0' for='mode_0'></label>
</li>
			</ul>
			<ul class='elmWrap  ' id='mode_ul' style='display:'>
				<li class='lab' >
					<label id='mode_lab' for='mode'>VOD</label>
				</li>
				<li id='' ><input type='radio' id='mode_0' name='mode' value='0'  />
<label id='lab_mode_0' for='mode_0'></label>
</li>
			</ul>
			<ul class='elmWrap  ' id='streamBS_ul' style='display:'>
				<li class='lab' >
					<label id='streamBS_lab' for='streamBS'>Stream BS</label>
				</li>
				<li id='' ><select id='streamBS_sel'  class='selSelTxt'>
	<option value=''>...loading</option>
</select>
<textarea type='text' id='streamBS_txt' class='selTxtTxt' cols=\"60\" rows=\"3\"></textarea>
</li>
			</ul>
			<ul class='elmWrap  ' id='UstreamBS_ul' style='display:'>
				<li class='lab' >
					<label id='UstreamBS_lab' for='UstreamBS'></label>
				</li>
				<li id='' >
<div class='upldBtn'  />
</li>
			</ul>
			<ul class='elmWrap  ' id='picture_ul' style='display:'>
				<li class='lab' >
					<label id='picture_lab' for='picture'>Picture</label>
				</li>
				<li id='' ><div class='imgUpldWrap'>
	<div class='imgWrap picture'>
		<img class='logoImg' id='img_picture' src='' onclick=\"ovlPic(this);\"></img>
	<!--
		<a class='lbox'>
		<img class='logoImg' id='img_picture' src=''></img>
		</a>
	-->
	</div>
	
	<input type='hidden' class='imgFileTxt' id='picture' name='picture' style='border:none; background:transparent;' />
</div>
</li>
			</ul>
			<ul class='elmWrap  ' id='picture2_ul' style='display:'>
				<li class='lab' >
					<label id='picture2_lab' for='picture2'>Picture 2</label>
				</li>
				<li id='' ><div class='imgUpldWrap'>
	<div class='imgWrap picture2'>
		<img class='logoImg' id='img_picture2' src='' onclick=\"ovlPic(this);\"></img>
	<!--
		<a class='lbox'>
		<img class='logoImg' id='img_picture2' src=''></img>
		</a>
	-->
	</div>
	
	<input type='hidden' class='imgFileTxt' id='picture2' name='picture2' style='border:none; background:transparent;' />
</div>
</li>
			</ul>
			<ul class='elmWrap  ' id='image1_ul' style='display:'>
				<li class='lab' >
					<label id='image1_lab' for='image1'>Img </label>
				</li>
				<li id='' ><div class='imgUpldWrap'>
	<div class='imgWrap image1'>
		<img class='logoImg' id='img_image1' src='' onclick=\"ovlPic(this);\"></img>
	<!--
		<a class='lbox'>
		<img class='logoImg' id='img_image1' src=''></img>
		</a>
	-->
	</div>
	
	<input type='hidden' class='imgFileTxt' id='image1' name='image1' style='border:none; background:transparent;' />
</div>
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"T124\");'
				
				/>
				<input id='T124_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='T124.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['T215'] =='undefined') htmlPanes[T215]=new Object();
if (typeof htmlPanes['T215']['e'] =='undefined') htmlPanes[T215]['e']=new Object();
if (typeof htmlPanes['T215']['l'] =='undefined') htmlPanes[T215]['l']=new Object();
htmlPanes['T215']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['T215']['e']['f'] = {"name":{"def":"","lab":"Name","src":"-1","typ":"2","val":"0","vis":"112"},
"url":{"def":"","lab":"URL","src":"-1","typ":"128","val":"0","vis":"96"}};
htmlPanes['T215']['e']['p'] = "	<form  id='edit_form_T215' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_T215' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='T215_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='name_ul' style='display:'>
				<li class='lab' >
					<label id='name_lab' for='name'>Name</label>
				</li>
				<li id='' ><input type=\"text\" id='name' value='' size='35'   />
</li>
			</ul>
			<ul class='elmWrap  ' id='url_ul' style='display:'>
				<li class='lab' >
					<label id='url_lab' for='url'>URL</label>
				</li>
				<li id='' ><textarea id='url' class='selTxtTxt' rows='3' cols='60' ></textarea>
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"T215\");'
				
				/>
				<input id='T215_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='T215.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['P238'] =='undefined') htmlPanes[P238]=new Object();
if (typeof htmlPanes['P238']['e'] =='undefined') htmlPanes[P238]['e']=new Object();
if (typeof htmlPanes['P238']['l'] =='undefined') htmlPanes[P238]['l']=new Object();
htmlPanes['P238']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['P238']['e']['f'] = {"name":{"def":"","lab":"Name","src":"-1","typ":"2","val":"0","vis":"112"}};
htmlPanes['P238']['e']['p'] = "	<form  id='edit_form_P238' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_P238' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='P238_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='name_ul' style='display:'>
				<li class='lab' >
					<label id='name_lab' for='name'>Name</label>
				</li>
				<li id='' ><input type=\"text\" id='name' value='' size='35'   />
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"P238\");'
				
				/>
				<input id='P238_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='P238.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['P239'] =='undefined') htmlPanes[P239]=new Object();
if (typeof htmlPanes['P239']['e'] =='undefined') htmlPanes[P239]['e']=new Object();
if (typeof htmlPanes['P239']['l'] =='undefined') htmlPanes[P239]['l']=new Object();
htmlPanes['P239']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['P239']['e']['f'] = {"name":{"def":"","lab":"Name","src":"-1","typ":"2","val":"0","vis":"112"}};
htmlPanes['P239']['e']['p'] = "	<form  id='edit_form_P239' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_P239' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='P239_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='name_ul' style='display:'>
				<li class='lab' >
					<label id='name_lab' for='name'>Name</label>
				</li>
				<li id='' ><input type=\"text\" id='name' value='' size='35'   />
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"P239\");'
				
				/>
				<input id='P239_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='P239.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['P240'] =='undefined') htmlPanes[P240]=new Object();
if (typeof htmlPanes['P240']['e'] =='undefined') htmlPanes[P240]['e']=new Object();
if (typeof htmlPanes['P240']['l'] =='undefined') htmlPanes[P240]['l']=new Object();
htmlPanes['P240']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['P240']['e']['f'] = {"name":{"def":"","lab":"Name","src":"-1","typ":"2","val":"0","vis":"112"}};
htmlPanes['P240']['e']['p'] = "	<form  id='edit_form_P240' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_P240' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='P240_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='name_ul' style='display:'>
				<li class='lab' >
					<label id='name_lab' for='name'>Name</label>
				</li>
				<li id='' ><input type=\"text\" id='name' value='' size='35'   />
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"P240\");'
				
				/>
				<input id='P240_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='P240.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['P241'] =='undefined') htmlPanes[P241]=new Object();
if (typeof htmlPanes['P241']['e'] =='undefined') htmlPanes[P241]['e']=new Object();
if (typeof htmlPanes['P241']['l'] =='undefined') htmlPanes[P241]['l']=new Object();
htmlPanes['P241']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['P241']['e']['f'] = {"name":{"def":"","lab":"Name","src":"-1","typ":"2","val":"0","vis":"112"}};
htmlPanes['P241']['e']['p'] = "	<form  id='edit_form_P241' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_P241' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='P241_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='name_ul' style='display:'>
				<li class='lab' >
					<label id='name_lab' for='name'>Name</label>
				</li>
				<li id='' ><input type=\"text\" id='name' value='' size='35'   />
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"P241\");'
				
				/>
				<input id='P241_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='P241.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
if (typeof htmlPanes['P242'] =='undefined') htmlPanes[P242]=new Object();
if (typeof htmlPanes['P242']['e'] =='undefined') htmlPanes[P242]['e']=new Object();
if (typeof htmlPanes['P242']['l'] =='undefined') htmlPanes[P242]['l']=new Object();
htmlPanes['P242']['g'] = {'paneType':'', 'tabPfix':'', 'tabIds':'' };
htmlPanes['P242']['e']['f'] = {"name":{"def":"","lab":"Name","src":"-1","typ":"2","val":"0","vis":"112"}};
htmlPanes['P242']['e']['p'] = "	<form  id='edit_form_P242' method='post' action='../serviceinstant/save'
		
	>
		
		<fieldset id='edit_P242' class='adminPane' style='display:none'>
			
			<div class='subPane'>
					<div id='P242_Main' class='foldable dw_Main' style=\"display:none\">
					<ul class='elmWrap  ' id='name_ul' style='display:'>
				<li class='lab' >
					<label id='name_lab' for='name'>Name</label>
				</li>
				<li id='' ><input type=\"text\" id='name' value='' size='35'   />
</li>
			</ul>

	</div>

			</div>
			<div class='buttonsContainer' style='display:none'>
				<input  class='formButton update'
				
					type='button' value='Add' onclick='TV.doSave(\"P242\");'
				
				/>
				<input id='P242_cancelButton' type='button' value='Cancel' class='formButton cancel'
					onclick='P242.doCancel();'
				/>
			</div>
		</fieldset>
	</form>
";
