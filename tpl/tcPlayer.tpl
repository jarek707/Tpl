<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<!-- saved from url=(0014)about:internet -->
<head>
    <title>InternalPlayerTimeline</title>

    <style type="text/css">
    html, body {
	    height: 100%;
	    overflow: auto;
    }
    body {
	    padding: 0;
	    margin: 0;
    }
    #silverlightControlHost {
	    height: 200px;
    }
    </style>
    <script type="text/javascript" src="[%% urlRoot %%]/public/js/jscript.js"></script>
    
</head>

<body onbeforeunload="testOnBeforeOnLoad()">
    <div id="silverlightControlHost">
	  <object id="internalPlayer" data="data:application/x-silverlight-2,"  type="application/x-silverlight-2" width="400" height="300">
	  <param name="source" value="/public/sys/InternalPlayerTimeline.xap"/>
	  <param name="background" value="white" />
	  <param name="minRuntimeVersion" value="2.0.31005.0" />
	  <param name="onerror" value="slError" />
	  <param name="autoUpgrade" value="true" />
	  <param name="initParams" value="vurl=[%% vurl %%],stc=[%% stc %%],etc=[%% etc %%]"/>
	  <a href="http://go.microsoft.com/fwlink/?LinkID=124807" style="text-decoration: none;"><img src="http://go.microsoft.com/fwlink/?LinkId=108181" alt="Téléchargez Microsoft Silverlight" style="border-style: none"/></a>
	  </object>
    </div>
</body>
</html>
