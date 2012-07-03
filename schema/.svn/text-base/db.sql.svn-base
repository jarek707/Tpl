-- MySQL dump 10.13  Distrib 5.1.54, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: engine
-- ------------------------------------------------------
-- Server version	5.1.54-1ubuntu4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actions`
--

DROP TABLE IF EXISTS `actions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `actions` (
  `id` int(11) NOT NULL DEFAULT '0',
  `adId` int(11) DEFAULT '-1',
  `pAdId` int(11) DEFAULT NULL,
  `action` varchar(255) DEFAULT NULL,
  `legend` varchar(64) DEFAULT NULL,
  `parentTab` varchar(255) DEFAULT 'broadcastEvents',
  `listTab` varchar(255) DEFAULT '',
  `editTab` varchar(64) DEFAULT '',
  `parentRefId` varchar(64) DEFAULT '',
  `childRefId` varchar(64) DEFAULT '',
  `hasListUpload` tinyint(4) DEFAULT '-1',
  `hasEditUpload` tinyint(4) DEFAULT '0',
  `paneType` varchar(64) DEFAULT '',
  `seq` int(11) DEFAULT '-1',
  `tTyp` int(11) DEFAULT '-1',
  `xmlGroupTag` varchar(255) DEFAULT 'eventFcts',
  `xmlFuncTag` varchar(255) DEFAULT 'customFeature',
  `xmlItemsTag` varchar(255) DEFAULT 'item',
  `xmlParent` varchar(64) DEFAULT '',
  `multiUpld` tinyint(4) DEFAULT '0',
  `funcTab` varchar(255) DEFAULT '',
  `tabIds` text,
  `tabPfix` varchar(255) DEFAULT '',
  `tabLab` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `adId` (`adId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actions`
--

LOCK TABLES `actions` WRITE;
/*!40000 ALTER TABLE `actions` DISABLE KEYS */;
INSERT INTO `actions` VALUES (15,15,-1,'Users','Users','','','users','','',0,0,'6',28,-1,'','','','-1',0,'none','','',''),(19,19,-1,'Layout','Admin','','','action_defs','','',0,0,'6',1,-1,'','','','-1',0,'none','','',''),(20,20,19,'editDefs','Edit Fields','action_defs','','edit_defs','parent_id','',0,0,'6',2,-1,'','','','-1',0,'none','','',''),(21,21,19,'listDefs','List Defs','action_defs','','list_defs','parent_id','',0,0,'6',3,-1,'','','','-1',0,'none','','',''),(23,23,-1,'Conf','Conf','','','conf','','',0,0,'1',1,-1,'','','','-1',0,'none','','',''),(30,30,23,'Constants','Constants','conf','','consts','twoLayer','',0,0,'6',2,-1,'','','','-1',0,'none','','',''),(75,75,-1,'Templates','Templates','','','tpls','','',0,0,'3',1,-1,'','','','-1',0,'none','','',''),(100,100,75,'pictureShowStyleCF','PictureShow Style','broadcastEvents','pictureShowStyleCF','pictureShowStyleCFEdit','','',0,1,'1',6,-1,'eventFcts','customFeature','item','3',1,'none','','',''),(114,114,75,'catalogStyleCF','Catalog Style','broadcastEvents','catalogStyleCF','catalogStyleCFEdit','','',0,1,'1',10,-1,'eventFcts','customFeature','item','3',1,'none','','',''),(115,115,75,'multicamStyleCF','MultiCam Style','broadcastEvents','multicamStyleCF','multicamStyleCFEdit','','',0,1,'1',7,-1,'eventFcts','customFeature','item','3',0,'none','','',''),(124,124,75,'aStyle','A STYLE','broadcastEvents','la','ea','null','null',0,1,'1',5,-1,'eventFcts','customFeature','item','3',1,'none','','',''),(200,200,75,'zoom','Zoom','broadcastEvents','lzoom','ezoom','','',0,1,'1',3,-1,'eventCoreFcts','zooms','videoZoom','3',1,'','tl tc tr cl cc cr bl bc br','zm','Zoom'),(201,201,75,'cc','Closed Caption','broadcastEvents','cclist','ccedit','','',0,1,'1',4,-1,'eventCoreFcts','captions','caption','3',0,'','','cc','Closed_Caption'),(203,203,23,'selects','Static Selects','','','selects','twoLayer','',0,1,'1',6,-1,'','','','-1',0,'','','',''),(206,206,23,'viewSelects','Dynamic Selects (DB View Only)','','','viewSelects','twoLayer','',0,0,'1',7,-1,'','','','-1',0,'','','',''),(207,207,23,'usertypes','UserTypes','conf','','userTypes','oneLayer','',0,0,'1',5,-1,'','','','-1',0,'','','',''),(208,208,23,'eventtypes','Event Types','Conf','','eventTypes','oneLayer','',0,0,'1',4,-1,'','','','-1',0,'','','',''),(209,209,23,'broadcasttypes','Broadcast Types','Conf','','broadcastTypes','oneLayer','',0,0,'1',3,-1,'','','','-1',0,'','','',''),(215,215,75,'uptest','UPTest','broadcastEvents','upl','upe','','',1,1,'1',2,-1,'eventFcts','customFeature','item','3',1,'','','',''),(232,232,-1,'Operator','Operator','','','operator','','',0,0,'1',0,-1,'','','','15',0,'','','',''),(238,238,232,'antena','Antena','operator','','antena','','',0,0,'1',1,-1,'','','','232',0,'','','',''),(239,239,232,'applicant','Applicant','operator','','applicant','','',0,0,'1',2,-1,'','','','232',0,'','','',''),(240,240,232,'equipment','Equipment','operator','','equipment','','',0,0,'1',3,-1,'','','','232',0,'','','',''),(241,241,238,'antenaMW','ANTENA_MW','antena','ANTENNA_MW','antenamwe','','',0,0,'1',5,-1,'','','','238',0,'','','',''),(242,242,240,'equipmw','Equimpment MW','equipment','mvl','mve','','',0,0,'1',4,-1,'','','','240',0,'','','',''),(243,243,-1,'Fields','Configured Fields','','','fieldse','','',0,0,'1',-1,-1,'','','','15',0,'','','','');
/*!40000 ALTER TABLE `actions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consts`
--

DROP TABLE IF EXISTS `consts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `consts` (
  `id` int(11) NOT NULL DEFAULT '0',
  `confId` int(11) DEFAULT '1',
  `typ` char(12) DEFAULT '',
  `name` varchar(255) DEFAULT '',
  `val` mediumtext,
  `seq` int(11) DEFAULT '0',
  `data` varchar(255) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consts`
--

LOCK TABLES `consts` WRITE;
/*!40000 ALTER TABLE `consts` DISABLE KEYS */;
INSERT INTO `consts` VALUES (338,1,'T','LAB','0x4000',18,'lab'),(337,1,'T','SELTEXT','0x2000',3,'selText'),(18,1,'S','SHOW_VIEW_EDIT','0x0060',0,''),(19,1,'S','SHOW_GRID','0x0010',1,''),(20,1,'S','SHOW_EDIT','0x0020',2,''),(21,1,'S','SHOW_VIEW','0x0040',3,''),(22,1,'S','SHOW_GRID_EDIT','0x0050',5,''),(23,1,'S','SHOW_GRID_EDIT_VIEW','0x0070',6,''),(24,1,'S','DISABLED','0x0081',11,''),(25,1,'S','NO_GUI','0x0001',9,''),(26,1,'S','SHOW_VIEW_EDIT_NODB','0x00E0',7,''),(27,1,'V','IGNORE','0x0000',0,''),(28,1,'V','OPT','0x0001',1,''),(29,1,'V','REQ','0x0002',2,''),(30,1,'V','TXT','0x0010',3,''),(31,1,'V','URL','0x0020',4,''),(32,1,'V','EMAL','0x0040',5,''),(33,1,'V','PSWD','0x0080',6,''),(34,1,'V','PHON','0x0100',7,''),(35,1,'V','ALNUM','0x0200',8,''),(36,1,'V','TXT_OPT','0x0011',9,''),(37,1,'V','TXT_REQ','0x0012',10,''),(38,1,'V','URL_OPT','0x0021',11,''),(39,1,'V','URL_REQ','0x0022',12,''),(40,1,'V','EML_OPT','0x0041',13,''),(41,1,'V','EML_REQ','0x0042',14,''),(42,1,'V','EMAL_REQ','0x0042',15,''),(43,1,'V','PSWD_OPT','0x0081',16,''),(44,1,'V','PSWD_REQ','0x0082',17,''),(45,1,'V','PHON_REQ','0x0102',18,''),(46,1,'V','ALNUM_REQ','0x0202',19,''),(47,1,'','VOD_SELVAL','0x001',6,''),(48,1,'','LIVE_SELVAL','0x000',7,''),(49,1,'','FREE_PACK','0x001',8,''),(50,1,'','VOD','0x001',4,''),(51,1,'','LIVE','0x000',5,''),(52,1,'','BROADCASTERS_PACK','0x0000',9,''),(53,1,'','ROWUPDATE','0x0001',0,''),(54,1,'','ROWCREATE','0x0002',1,''),(55,1,'','ROWDELETE','0x0004',2,''),(56,1,'','RESEQUENCED','0x0011',3,''),(57,1,'','PACK_DELIM','>',10,''),(58,3,'','XML_CACHE','false',11,''),(59,3,'','OBJ_CACHE','false',12,''),(60,3,'','HTML_CACHE','false',14,''),(336,1,'T','RADIO','0x1000',6,'radio'),(335,1,'T','RADIOGROUP','0x0800',5,'radioGroup'),(334,1,'T','CAL','0x0400',14,'text'),(333,1,'T','PASSWD','0x0200',7,'password'),(332,1,'T','DIV','0x0100',8,''),(331,1,'T','URL','0x0080',9,'url'),(330,1,'T','CHK_BOX','0x0040',10,'chkBox'),(329,1,'T','FILE_UPLOAD','0x0020',15,'fileUpload'),(328,1,'T','IMG_UPLOAD','0x0010',16,'imgUpload'),(327,1,'T','TEXTAREA','0x0008',4,'textarea'),(326,1,'T','SELECTINT','0x0005',12,'select'),(325,1,'T','SELECT','0x0004',11,'select'),(257,1,'P','EDIT','0x0001',0,''),(258,1,'P','GRID','0x0002',1,''),(259,1,'P','GRID_EDIT','0x0003',2,''),(260,1,'P','GRID_TV','0x0006',3,''),(261,1,'R','GRID_ENABLED','0x0001',0,''),(262,1,'R','HIDE_GINFO','0x0002',1,''),(263,1,'R','HIDE_TREE','0x0004',2,''),(264,1,'P','TV','0x0004',4,''),(265,1,'S','SHOW_LIST','0x0100',4,''),(324,1,'T','TEXTINT','0x0003',1,'text'),(284,1,'R','HIDE_INFO','0x0008',3,''),(323,1,'T','TEXT','0x0002',0,'text'),(322,1,'T','INT','0x0001',2,'text'),(321,1,'X','LAUNCHER_URL','http://app.atdi.tv/avslive/v3dev/preview.html',1,''),(339,1,'T','BUTTON','0x8000',13,'button'),(341,1,'','SLEDITOR','true',13,''),(342,1,'X','VIEW_LINK_URL','http://app.atdi.tv/avslive/v3dev/preview.html?tag=bcid=___bcid___,bid=___bid___,eid=___eid___&title=___title___',2,''),(343,1,'R','VALIDATE','0x0010',4,''),(345,1,'','SLLOADTO','40',15,''),(346,1,'','SLWRITETO','500',16,''),(347,1,'','SELECTONOPEN','true',17,''),(348,1,'V','TIMECODE','0x0400',20,''),(349,1,'V','TIMECODE_REQ','0x0402',21,''),(350,1,'V','TIMECODE_OPT','0x0401',22,''),(351,1,'X','SKIN','skin2',0,''),(352,1,'T','UPLOAD','0x0030',17,''),(354,1,'S','NO_DB','0x0080',10,''),(355,1,'S','SHOW_LIST_NODB','0x0180',8,''),(356,1,'','CONSOLECLEAR','0',0,'');
/*!40000 ALTER TABLE `consts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fields`
--

DROP TABLE IF EXISTS `fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fields` (
  `id` int(11) NOT NULL DEFAULT '0',
  `adId` int(11) DEFAULT NULL,
  `lab` varchar(64) DEFAULT '',
  `domId` varchar(64) DEFAULT '',
  `elmType` varchar(64) DEFAULT '',
  `validationFlag` int(11) DEFAULT '-1',
  `source` varchar(64) DEFAULT '',
  `visibility` varchar(64) DEFAULT '',
  `callback` varchar(64) DEFAULT '',
  `wrapperClass` char(255) DEFAULT '',
  `attrs` text,
  `defaultVal` varchar(255) DEFAULT '',
  `tabLab` varchar(64) DEFAULT '',
  `gridWidth` varchar(255) DEFAULT '',
  `xmlTag` varchar(255) DEFAULT '',
  `seq` int(11) DEFAULT '-1',
  PRIMARY KEY (`id`),
  KEY `fk_actionsAdId` (`adId`),
  CONSTRAINT `fk_actionsAdId` FOREIGN KEY (`adId`) REFERENCES `actions` (`adId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fields`
--

LOCK TABLES `fields` WRITE;
/*!40000 ALTER TABLE `fields` DISABLE KEYS */;
INSERT INTO `fields` VALUES (45,20,'Label','lab','2',17,'-1','112','','leftCol med','','','','140','',0),(46,20,'DOM Id','domId','2',18,'-1','112','','rightCol med medLab','','','','120','',1),(47,20,'Wrapper CSS Class','wrapperClass','2',17,'-1','96','','noclear','','','','200','',8),(48,20,'Element Type','elmType','4',0,'ElmTypes','112','change','leftCol med','','','','120','',2),(49,20,'Validation','validationFlag','4',0,'Validation','96','','leftCol med','','','','115','',4),(50,20,'Visibility','visibility','4',0,'Visibility','112','none','rightCol medLab','','','','120','',3),(51,20,'Select Data Source','source','4',17,'dirMap','96','','rightCol','','','','80','',5),(52,20,'Callback','callback','4',0,'CallbackTypes','96','none','leftCol med','','','','80','',7),(53,20,'','pid','2',0,'-1','1','','','','','','80','',13),(54,19,'ACTIONS: Tab','tabAction','2',17,'-1','112','none','med leftCol','','Templates','','80','',1),(55,15,'Name','name','2',18,'-1','112','none','','','','','100','',1),(56,15,'Forname','forname','2',18,'-1','112','','','','','','100','',1),(57,15,'Phone','phone','2',256,'-1','96','','','','','','100','',3),(58,15,'Type','userTypes_id','4',0,'UserTypes','112','change','leftCol','','','','110','',8),(59,15,'Login','login','2',18,'-1','96','','','','','','100','',2),(60,15,'Password','pass1','512',129,'-1','96','none','','','','','80','',6),(61,15,'Confirm Password','pass2','512',0,'-1','96','none','','','','','80','',7),(62,15,'Language','userLanguages_id','4',0,'Languages','96','','','','','','80','',5),(63,15,'Broadcaster','broadcasters_id','4',0,'Broadcasters','96','','leftCol','','','','110','',9),(64,15,'Producer','producers_id','4',0,'Producers','96','','leftCol','','','','110','',10),(65,15,'','created','2',0,'-1','1','','','','','','80','',11),(82,19,'List','listTab','2',17,'-1','96','none','med rightCol vshortLab','','','','80','',4),(83,19,'TABLES: Parent','parentTab','2',17,'-1','96','none','leftCol med','','broadcastEvents','','80','',3),(84,19,'RefId','parentRefId','2',17,'-1','96','','rightCol med vshortLab','','','','80','',7),(85,19,'Edit','editTab','2',0,'-1','112','','rightCol med vshortLab','','','','80','',5),(86,19,'RefParam','childRefId','2',17,'-1','96','','leftCol med','','','','80','',6),(87,19,'Legend','legend','2',18,'-1','112','none','xlong leftCol','','','','80','',0),(89,19,'Sub','subAction','2',17,'-1','112','none','rightCol vshortLab long','','main_cc','','80','',2),(130,15,'Email','email','2',66,'-1','96','','','','','','200','',4),(131,21,'Label/Dom Id','lab','2',0,'-1','112','','leftCol med','','','','120','',0),(132,21,'/','domId','2',0,'-1','112','','rightCol med tinyLab','','','','120','',1),(133,21,'Wrapper CSS Class','wrapperClass','2',17,'-1','96','','noclear','','','','200','',5),(134,21,'Element Type','elmType','4',0,'ElmTypes','112','change','','','','','120','',2),(135,21,'Validation','validationFlag','4',0,'Validation','96','change','','','','','120','',4),(136,21,'Visibility Flag','visibility','4',0,'Visibility','112','','','','','','190','',3),(137,21,'Select Data Source','source','4',17,'PaneTypes','96','none','','','','','80','',6),(138,21,'Callback','callback','4',17,'CallbackTypes','96','none','','','','','80','',7),(139,21,'_','pid','2',0,'-1','1','','','','','','80','',10),(144,19,'Edit','hasEditUpload','64',0,'-1','96','none','rightCol chkbx revLab tinyLab','','','','80','',10),(145,19,'List','hasListUpload','64',0,'-1','96','none','rightCol chkbx tinyLab revLab','','','','80','',11),(152,20,'Db Default Value','defaultVal','2',0,'-1','96','none','leftCol','','','','80','',6),(157,20,'DOM Attributes','attrs','2',0,'-1','96','','xlong','','','','80','',9),(184,20,'Tab Label','tabLab','4',0,'Tabs','96','none','','','','','80','',10),(235,23,'Label','label','2',0,'-1','112','','','','','','80','',88),(277,30,'/','name','2',0,'-1','112','','rightCol tinyLab','','','','200','',1),(278,30,'Type/Name','typ','2',0,'-1','112','','oneChar leftCol','','','','30','',0),(279,30,'Value','val','128',0,'-1','112','none','full','','','','80','',2),(280,23,'Sub List','subRef','2',0,'-1','96','','','','','','80','',133),(341,15,'','seq','1',0,'-1','1','','','','','','80','',194),(342,19,'','seq','1',0,'-1','1','','','','','','80','',20),(346,19,'Pane Type','paneType','4',0,'PaneTypes','96','none','leftCol med','','','','80','',8),(347,20,'Grid Width','gridWidth','2',0,'-1','96','none','rightCol tiny','','','','40','',11),(393,19,'Has Upload:','_uploads_lab_','16384',0,'-1','112','none','rightCol medLab','','','','','',9),(437,75,'Template Name','name','2',0,'-1','112','none','','','','','66','',38),(438,75,'DB Table','dbTab','2',0,'-1','112','none','','','','','','',39),(455,75,'','funcId','1',0,'-1','1','none','','','','','','',20),(465,100,'Name','name','2',18,'-1','112','none','full','','','TAB_Basic','80','name',0),(466,100,'Picture (JPG 5mo max)','url','16',0,'-1','96','none','','','','TAB_Basic','80','url',4),(467,100,'','pid','1',0,'-1','1','none','','','','','80','pid',2),(468,100,'Description','description','8',18,'-1','96','none','fullWidth','','','TAB_Basic','80','description',5),(469,100,'Copyright Label','copyLab','2',0,'-1','96','none','','','©DR','TAB_Basic','80','copyLab',6),(470,100,'Time Code','timecode','2',1026,'-1','96','none','leftCol short','','00:00:00','TAB_Basic','80','timecode',7),(471,100,'','launchVid','32768',0,'-1','96','click','rightCol tinyLab','','Launch','TAB_Basic','80','',8),(472,100,'','clearTC','32768',0,'-1','96','click','rightCol tinyLab','','Clear','TAB_Basic','80','',9),(473,100,'Large logo (300x100 | PNG) ','logo','16',0,'-1','96','none','','','','TAB_Extra','80','logo',0),(474,100,'Link Label','lnkLab','2',0,'-1','96','none','','leftCol shortLab','','TAB_ECommerce','80','lnkLab',1),(475,100,'Link URL','lnkUrl','128',32,'-1','96','none','','rightCol shortLab','','TAB_ECommerce','80','lnkUrl',2),(476,100,'Sponsor Logo (150x50 | PNG)','sponsLog','16',0,'-1','96','none','','','','TAB_ECommerce','80','sponsLog',0),(477,100,'ECommerce Type','ecomType','2048',0,'-1','96','click','','','0','TAB_ECommerce','80','ecomType',3),(478,100,'None','ecomType','4096',0,'-1','96','click','','','','TAB_ECommerce','80','ecomType',4),(479,100,'Download a File','ecomType','4096',0,'-1','96','click','','','','TAB_ECommerce','80','ecomType',5),(480,100,'Link to a Store','ecomType','4096',0,'-1','80','click','','','','TAB_ECommerce','80','ecomType',6),(481,100,'ECommerce Link','ecomLnk','128',32,'-1','96','none','','','','TAB_ECommerce','80','ecomLnk',7),(482,100,'ECommerce Download','ecomDnl','32',0,'-1','96','none','','','','TAB_ECommerce','80','ecomDnl',8),(483,100,'FuncId','funcId','1',0,'-1','1','none','','','','','','',1),(487,20,'XML tag','xmlTag','2',0,'-1','112','none','leftCol','','','','','',12),(489,21,'XML Tag','xmlTag','2',0,'-1','112','none','leftCol','','','','','',9),(492,19,'XML Tags: Group','xmlGroupTag','2',0,'-1','112','none','med','','eventFcts','','','',14),(493,19,'Func','xmlFuncTag','2',0,'-1','112','none','rightCol vshortLab med','','customFeature','','','',15),(494,19,'Items','xmlItemsTag','2',0,'-1','112','none','rightCol med vshortLab','','item','','','',16),(512,19,'XML Parent','xmlParent','4',0,'XmlParent','112','none','','','','','80','',13),(528,114,'Parent Id','pid','1',0,'-1','1','','','','','','','',0),(529,114,'Func Id','funcId','1',0,'-1','1','','','','','','','',1),(530,114,'Name','name','2',18,'-1','112','none','full','','','TAB_Basic','80','name',2),(531,114,'Picture (JPG 5mo max)','url','16',0,'-1','96','none','','','','TAB_Basic','80','url',3),(532,114,'','pid','1',0,'-1','1','none','','','','TAB_Basic','80','pid',0),(533,114,'Description','description','8',0,'-1','96','none','fullWidth','','','TAB_Basic','80','description',4),(534,114,'Copyright Label','copyLab','2',0,'-1','96','none','','','©DR','TAB_Basic','80','copyLab',5),(535,114,'','launchVid','32768',0,'-1','96','click','rightCol tinyLab','','Launch','TAB_Basic','80','',8),(536,114,'','clearTC','32768',0,'-1','96','click','rightCol tinyLab','','Clear','TAB_Basic','80','',9),(537,114,'Start/End TC','startTC','2',1026,'-1','96','none','leftCol short','','00:00:00','TAB_Basic','80','startTC',6),(538,114,'/','endTC','2',1026,'-1','96','none','rightCol tinyLab short','','00:00:00','TAB_Basic','80','endTC',7),(539,114,'Large logo (300x100 | PNG)','logo','16',0,'-1','96','none','','','','TAB_Extra','80','logo',0),(540,114,'Link Label','lnkLab','2',0,'-1','96','none','','leftCol shortLab','','TAB_ECommerce','80','lnkLab',1),(541,114,'Link URL','lnkUrl','128',32,'-1','96','none','','rightCol shortLab','','TAB_ECommerce','80','lnkUrl',2),(542,114,'Sponsor Logo (150x50 | PNG) ','sponsLog','16',0,'-1','96','none','','','','TAB_ECommerce','80','sponsLog',0),(543,114,'ECommerce Type','ecomType','2048',0,'-1','96','none','','','0','TAB_ECommerce','80','ecomType',3),(544,114,'None','ecomType','4096',0,'-1','96','click','','','','TAB_ECommerce','80','ecomType',4),(545,114,'Download a File','ecomType','4096',0,'-1','96','click','','','','TAB_ECommerce','80','ecomType',5),(546,114,'Link to a Store','ecomType','4096',0,'-1','80','click','','','','TAB_ECommerce','80','ecomType',6),(547,114,'ECommerce Link','ecomLnk','128',32,'-1','96','none','','','','TAB_ECommerce','80','ecomLnk',7),(548,114,'ECommerce Download','ecomDnl','32',0,'-1','96','none','','','','TAB_ECommerce','','ecomDnl',8),(549,115,'Parent Id','pid','1',0,'-1','1','none','','','','','','',0),(550,115,'Func Id','funcId','1',0,'-1','1','none','','','','','','',1),(551,115,'Title','name','2',18,'-1','112','none','full','','','TAB_Basic','180','label',1),(552,115,'Publishing','mode','2048',0,'-1','96','change','','','','TAB_Basic','80','',2),(553,115,'Live','mode','4096',0,'-1','96','change','','','','TAB_Basic','80','',3),(554,115,'VOD','mode','4096',0,'-1','96','change','','','','TAB_Basic','80','',4),(555,115,'Stream AS URL','streamAS','8192',0,'-1','96','none','leftCol streamAS','','','TAB_Basic','240','streamAS',5),(556,115,'','upldMcAS','32768',0,'-1','64','click','rightCol noLab upld streamAS','','','TAB_Basic','30','',6),(557,115,'Stream HD URL','streamHd','8192',0,'-1','96','none','leftCol streamStd','','','TAB_Basic','240','streamHd',7),(558,115,'','upldMcHD','32768',0,'-1','96','click','rightCol noLab upld streamStd','','','TAB_Basic','30','',8),(559,115,'Stream Thumb','streamThumb','8192',0,'-1','96','none','leftCol streamStd','','','TAB_Basic','240','streamThb',9),(560,115,'','upldMcTmb','32768',0,'-1','32','click','rightCol noLab upld streamStd','','','TAB_Basic','30','',10),(561,115,'Stream Iso','streamIso','8192',0,'-1','96','none','leftCol streamStd','','','TAB_Basic','240','streamIso',11),(562,115,'','upldMcIso','32768',0,'-1','32','click','rightCol noLab upld streamStd','','','TAB_Basic','30','',12),(563,115,'Synchronize with Main Video','syncmv','64',0,'-1','96','none','mondoLab','','','TAB_Basic','280','syncmv',13),(564,115,'Volume','_','16384',0,'-1','97','none','leftCol','','','TAB_Basic','80','',14),(565,115,'Video','volVI','4',0,'zeroHundred','96','change','rightCol vshortLab small','','','TAB_Basic','80','volVI',15),(566,115,'Main Video','volMainVideo','4',0,'zeroHundred','96','none','rightCol medLab small','','','TAB_Basic','80','volMainVideo',16),(567,115,'Description','description','8',18,'-1','96','none','fullWidth','','','TAB_Basic','80','description',17),(568,115,'Copyright Label','copyLab','2',0,'-1','96','none','','','©DR','TAB_Basic','100','copyLab',21),(569,115,'','pid','1',0,'-1','1','none','','','','','80','',18),(570,115,'Large logo (300x100 | PNG) ','logo','16',0,'-1','96','none','','','','TAB_Extra','80','logo',0),(571,115,'Link Label','lnkLab','2',0,'-1','96','none','','leftCol shortLab','','TAB_ECommerce','80','lnkLab',1),(572,115,'Link URL','lnkUrl','128',32,'-1','96','none','','rightCol shortLab','','TAB_ECommerce','80','lnkUrl',1),(573,115,'Sponsor Logo (150x50 | PNG)','sponsLog','16',0,'-1','96','none','','','','TAB_ECommerce','80','sponsLog',0),(574,115,'ECommerce Type','ecomType','2048',0,'-1','96','click','','','','TAB_ECommerce','80','ecomType',1),(575,115,'None','ecomType','4096',0,'-1','96','none','','','','TAB_ECommerce','80','',2),(576,115,'Download a File','ecomType','4096',0,'-1','96','click','','','','TAB_ECommerce','80','',3),(577,115,'Link to a Store','ecomType','4096',0,'-1','96','click','','','','TAB_ECommerce','80','',4),(578,115,'ECommerce Link','ecomLnk','128',32,'-1','96','none','','','','TAB_ECommerce','80','ecomLnk',5),(579,115,'ECommerce Download','ecomDnl','32',0,'-1','96','none','','','','TAB_ECommerce','80','ecomDnl',6),(583,100,'Template Name','tplName','2',0,'-1','1','none','','','pictureShowStyleCF','TAB_Basic','80','tplName',1),(584,114,'Template Name','tplName','2',0,'-1','1','none','','','catalogStyleCF','TAB_Basic','80','tplName',1),(619,100,'mode','mode','1',0,'-1','1','none','','','','','','mode',0),(880,124,'Parent Id','pid','1',0,'-1','1','','','','','','','',-1),(881,124,'Func Id','funcId','1',0,'-1','1','','','','','','','',-1),(889,124,'Name','name','2',0,'-1','112','none','','','','TAB_Basic','','name',0),(1029,124,'Stream HD','streamHd','8192',0,'-1','112','none','streamStd','','','TAB_Basic','','streamHd',8),(1030,124,'','UstreamHd','32768',0,'-1','32','click','rightCol noLab upld streamStd','','0','TAB_Basic','20','',9),(1031,124,'Stream AS','streamAS','8192',0,'-1','96','none','leftCol streamAS','','0','TAB_Basic','20','steamAS',10),(1032,124,'','UstreamAS','32768',0,'-1','32','click','rightCol noLab upld streamAS','','0','TAB_Basic','20','',11),(1033,124,'Publishing Mode','mode','2048',0,'-1','96','change','leftCol','','0','TAB_Basic','20','mode',3),(1034,124,'Live','mode','4096',0,'-1','96','change','leftCol','','0','TAB_Basic','20','mode',4),(1035,124,'VOD','mode','4096',0,'-1','96','change','leftCol','','0','TAB_Basic','20','mode',5),(1036,124,'Stream BS','streamBS','8192',0,'-1','112','none','streamStd','','','TAB_Basic','','streamBS',6),(1037,124,'','UstreamBS','32768',0,'-1','32','click','rightCol noLab upld streamStd','','0','TAB_Basic','20','',7),(1038,124,'Picture','picture','16',0,'-1','112','none','','','','TAB_Basic','','picture',1),(1039,19,'Multiple','multiUpld','64',0,'-1','112','none','rightCol medLab chkbx','','','','','',12),(1040,124,'Picture 2','picture2','16',0,'-1','112','none','rightCol medLab','','','TAB_Basic','','',2),(1041,124,'Img ','image1','16',0,'-1','112','none','','','','TAB_Image','','',-1),(1056,19,'Tab Item Ids','tabIds','128',0,'-1','112','none','tabWrap','','','','','',19),(1057,19,'Unique Tab Prefix','tabPfix','2',0,'-1','112','none','tabWrap rightCol short','','','','','',18),(1105,19,'Tab Label','tabLab','2',0,'-1','112','change','','','','','','',17),(1259,200,'Parent Id','pid','1',0,'-1','1','','','','','','','',5),(1260,200,'Func Id','funcId','1',0,'-1','1','','','','','','','',4),(1261,200,'','name','2',0,'-1','112','none','zoomIco noLab','','','','','id',0),(1262,200,'Sync To Main Video','sync','64',0,'-1','112','none','rightCol','','','','','sync',3),(1263,200,'','url','128',0,'-1','112','none','rightCol noLab','','','','','url',1),(1264,200,'','upld','32768',0,'-1','112','click','rightCol upld noLab','','something','','','',2),(1265,201,'Parent Id','pid','1',0,'-1','1','','','','','','','',4),(1266,201,'Func Id','funcId','1',0,'-1','1','','','','','','','',3),(1267,201,'Language Label','name','2',0,'-1','112','none','','','','','','language',0),(1268,201,'Caption File','capFile','32',0,'-1','112','none','','','','','','url',1),(1269,201,'ISO Code','isoCode','4',0,'Languages','112','none','','','','','','isoCode',2),(1274,21,'Tab Label','tabLab','4',0,'Tabs','112','none','','','','','','',8),(1280,203,'Value','val','2',0,'-1','96','none','rightCol shortLab','','','','','',3),(1281,203,'Add New','typ','2',0,'-1','112','none','rightCol longLab','','','','','',1),(1285,203,'Label','name','2',0,'-1','96','none','','','','','','',2),(1286,203,'Choose Category','selOption','4',0,'dirMap','224','change','','','','','','',0),(1287,203,'File Upload','fileUp','32',0,'-1','96','none','','','','','','',9),(1288,203,'Choose From List','sel','4',0,'CallbackTypes','224','change','','','','','','',10),(1301,203,'Get Value','selType','2048',0,'-1','96','click','','','','','','',4),(1302,203,'From Field','selType','4096',0,'-1','96','none','rightCol','','','','','',5),(1304,203,'From Select','selType','4096',0,'-1','96','none','rightCol','','','','','',6),(1305,203,'From Upload','selType','4096',0,'-1','96','none','rightCol','','','','','',7),(1333,206,'Value','val','2',0,'-1','96','none','rightCol shortLab','','','','','',3),(1334,206,'Add New','typ','2',0,'-1','112','none','rightCol longLab','','','','','',1),(1335,206,'Label','name','2',0,'-1','96','none','','','','','','',2),(1336,206,'Choose Category','selOption','4',0,'dirMap','224','change','','','','','','',0),(1337,206,'File Upload','fileUp','32',0,'-1','96','none','','','','','','',9),(1338,206,'Choose From List','sel','4',0,'CallbackTypes','224','change','','','','','','',10),(1339,206,'Get Value','selType','2048',0,'-1','96','click','','','','','','',4),(1340,206,'From Field','selType','4096',0,'-1','96','none','rightCol','','','','','',5),(1341,206,'From Select','selType','4096',0,'-1','96','none','rightCol','','','','','',6),(1342,206,'From Upload','selType','4096',0,'-1','96','none','rightCol','','','','','',7),(1345,207,'Label','label','2',0,'-1','96','none','','','','','','',-1),(1346,207,'Id','id','1',0,'-1','96','none','','','','','','',-1),(1349,208,'Label','label','2',0,'-1','96','none','','','','','','',-1),(1350,208,'Id','id','1',0,'-1','96','none','','','','','','',-1),(1353,209,'Lablel','label','2',0,'-1','96','none','','','','','','',-1),(1354,209,'Id','id','1',0,'-1','96','none','','','','','','',-1),(1369,215,'Parent Id','pid','1',0,'-1','1','','','','','','','',-1),(1370,215,'Func Id','funcId','1',0,'-1','1','','','','','','','',-1),(1371,215,'Name','name','2',0,'-1','112','none','','','','','','id',-1),(1372,215,'URL','url','128',0,'-1','96','none','','','','','','url',-1),(1374,115,'Template Name','tplName','2',0,'-1','1','none','','','multicamStyleCF','TAB_Basic','80','tplName',0),(1378,115,'Time Code','timecode','2',1026,'-1','96','none','leftCol short','','00:00:00','TAB_Basic','80','timecode',18),(1379,115,'','launchVid','32768',0,'-1','96','click','rightCol tinyLab','','Launch','TAB_Basic','80','',19),(1380,115,'','clearTC','32768',0,'-1','96','click','rightCol tinyLab','','Clear','TAB_Basic','80','',20),(1430,232,'Func Id','funcId','1',0,'-1','1','','','','','','','',-1),(1431,232,'Name','name','2',0,'-1','112','','','','','','','id',-1),(1447,238,'Parent Id','pid','1',0,'-1','1','','','','','','','',-1),(1448,238,'Func Id','funcId','1',0,'-1','1','','','','','','','',-1),(1449,238,'Name','name','2',0,'-1','112','','','','','','','id',-1),(1450,239,'Parent Id','pid','1',0,'-1','1','','','','','','','',-1),(1451,239,'Func Id','funcId','1',0,'-1','1','','','','','','','',-1),(1452,239,'Name','name','2',0,'-1','112','','','','','','','id',-1),(1453,240,'Parent Id','pid','1',0,'-1','1','','','','','','','',-1),(1454,240,'Func Id','funcId','1',0,'-1','1','','','','','','','',-1),(1455,240,'Name','name','2',0,'-1','112','','','','','','','id',-1),(1456,241,'Parent Id','pid','1',0,'-1','1','','','','','','','',-1),(1457,241,'Func Id','funcId','1',0,'-1','1','','','','','','','',-1),(1458,241,'Name','name','2',0,'-1','112','','','','','','','id',-1),(1459,242,'Parent Id','pid','1',0,'-1','1','','','','','','','',-1),(1460,242,'Func Id','funcId','1',0,'-1','1','','','','','','','',-1),(1461,242,'Name','name','2',0,'-1','112','','','','','','','id',-1),(1465,243,'Code: Function','FNCT_CODE','2',0,'-1','96','none','','','','','','',3),(1466,243,'Control','CTRL_CODE','2',0,'-1','96','none','rightCol short medLab','','','','','',4),(1467,243,'Table','TABLE_NAME','2',0,'-1','96','none','','','','','','',1),(1468,243,'Column','NAME','2',0,'-1','96','none','rightCol med medLab','','','','','',2),(1469,243,'Label ','TRANS_LABEL','2',0,'-1','96','none','','','','','','',0),(1470,243,'Description ','TRANS_DESC','128',0,'-1','96','none','','','','','','',5),(1471,243,'Display Order','DISPLAY_ORDER','1',0,'-1','96','none','short','','','','','',6),(1472,243,'Field Mandatory','MANDATORY','64',0,'-1','96','none','','','','','','',7),(1473,243,'Validation Message','REQUIRED_ERROR_MSG','2',0,'-1','96','none','','','','','','',9),(1474,243,'Editable','EDITABLE','64',0,'-1','96','none','rightCol','','','','','',8);
/*!40000 ALTER TABLE `fields` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (1,'Admin'),(2,'Agent'),(3,'Manager'),(4,'User');
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plugPerms`
--

DROP TABLE IF EXISTS `plugPerms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `plugPerms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `adId` int(11) DEFAULT NULL,
  `grpId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `grpId` (`grpId`,`adId`),
  KEY `fk_plugAction` (`adId`),
  CONSTRAINT `fk_plugAction` FOREIGN KEY (`adId`) REFERENCES `actions` (`adId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_plugGroup` FOREIGN KEY (`grpId`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plugPerms`
--

LOCK TABLES `plugPerms` WRITE;
/*!40000 ALTER TABLE `plugPerms` DISABLE KEYS */;
INSERT INTO `plugPerms` VALUES (1,15,1),(2,19,1),(3,20,1),(4,21,1),(5,23,1),(6,30,1),(7,75,1),(8,100,1),(9,114,1),(10,115,1),(11,124,1),(12,200,1),(13,201,1),(14,203,1),(15,206,1),(16,207,1),(17,208,1),(18,209,1),(19,215,1),(20,232,1),(21,238,1),(22,239,1),(23,240,1),(24,241,1),(25,242,1),(26,243,1),(106,19,2),(54,19,3),(55,20,3),(56,21,3),(57,23,3),(58,30,3),(59,75,3),(60,100,3),(61,114,3),(62,115,3),(63,124,3),(64,200,3),(65,201,3),(66,203,3),(67,206,3),(68,207,3),(69,208,3),(70,209,3),(108,75,4),(109,200,4),(110,201,4),(111,203,4);
/*!40000 ALTER TABLE `plugPerms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plugs`
--

DROP TABLE IF EXISTS `plugs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `plugs` (
  `id` int(11) NOT NULL DEFAULT '0',
  `pAdId` int(11) DEFAULT '-1',
  `adId` int(11) DEFAULT '-1',
  `itemId` int(11) DEFAULT '-1',
  `seq` int(11) DEFAULT '999',
  KEY `fk_plugsPaction` (`pAdId`),
  KEY `fk_plugsAction` (`adId`),
  CONSTRAINT `fk_plugsAction` FOREIGN KEY (`adId`) REFERENCES `actions` (`adId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_plugsPaction` FOREIGN KEY (`pAdId`) REFERENCES `actions` (`adId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plugs`
--

LOCK TABLES `plugs` WRITE;
/*!40000 ALTER TABLE `plugs` DISABLE KEYS */;
INSERT INTO `plugs` VALUES (1,3,100,297,1),(2,3,114,297,2),(3,3,124,307,3),(4,3,124,309,4),(5,3,115,139,5),(6,3,100,139,6),(7,3,114,139,7),(8,3,115,282,8),(9,3,115,317,9),(10,15,201,-2,999),(12,15,200,-1,12);
/*!40000 ALTER TABLE `plugs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(100) NOT NULL,
  `forname` varchar(100) NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `login` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `prefs` bigint(20) DEFAULT '0',
  `seq` int(11) DEFAULT NULL,
  `grpId` int(11) DEFAULT '1',
  KEY `fk_userGroups` (`grpId`),
  CONSTRAINT `fk_userGroups` FOREIGN KEY (`grpId`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (35,'Admin','Super','555 555 5555','escotto@atdi.com','Super','f641ee9e08ff9717ada122697f9b22e3',0,0,1),(71,'Emmanuel','Scotto','+34 91 598 21 36','escotto@atdi.com','escotto','0e1041fb8b6e49bb84fe43b67647de71',0,1,2),(72,'Jarek','Kulikowski','123-123-1234','jarek707@gmail.com','JarekKulikowski','9443b0fceb8c03b6a514a706ea69df0b',0,2,3),(74,'Philippe','Missud','+33 1 53 30 81 44','ph.missud@atdi.com','pmissud','c80619459c2423222e928050c3911bab',0,3,1),(75,'Cordani','Sandrine','555 555 5555','scunlim@free.fr','scordani','4c23f1c165059cd020558da7cd6a4bd6',0,7,1),(76,'Missud','Gilles','0682666799','gmissud@atdi.com','gmissud','3d4dcd6fc8845fa8dfc04c3ea01eb0fb',0,4,1),(77,'Capaldi','Michel','0650301986','michel@lesfilmsdelaflibuste.com','mcapaldi','17ba39d46cdf7e2b4a5e206a0c465566',0,8,1),(78,'Bérard','Wilhelm','06 72 15 09 52','wilhelm@eventsmag.com','wberard','6b0e61e1f9039046a1b7c6d5f3ec838c',0,9,1),(79,'Véronique ','Blanc','0101010101','eblanc@cfdt.fr','vblanc','a9dd035a7d489da5b8fd833f390d81c8',0,10,1),(80,'test','test','','test@test.fr','test','098f6bcd4621d373cade4e832627b4f6',0,11,4),(81,'Othnin-Girard','Thierry','015555555','tog@atdi.com','tog','34ff02d1962df25367ed157a77cc9d68',0,5,1),(82,'Brecheteau','Olivier',NULL,'obrecheteau@atdi.com','olivier','063a86a2b38c629c29f0da6448b7924d',0,6,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'engine'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2011-10-14  1:34:49
