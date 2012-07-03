SELECT [%% tabCols %%] FROM [%% tabName %%] t JOIN plugPerms pp ON (pp.adId=t.adId) 
	JOIN users u ON (u.grpId=pp.grpId OR pp.grpId<1) WHERE u.id=[%% userId %%] ORDER BY [%% IF tabName = 'actions' %%]t.tabPfix DESC[%% ELSE %%]t.adId,t.seq[%% ENDIF %%]
