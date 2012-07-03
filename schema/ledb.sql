-- MySQL dump 10.13  Distrib 5.1.54, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: ledb
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
-- Table structure for table `action_defs`
--

DROP TABLE IF EXISTS `action_defs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `action_defs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tabAction` varchar(255) DEFAULT 'Templates',
  `subAction` varchar(255) DEFAULT 'main_cc',
  `legend` varchar(64) DEFAULT NULL,
  `parentTab` varchar(255) DEFAULT 'broadcastEvents',
  `listTab` varchar(255) DEFAULT '',
  `editTab` varchar(64) DEFAULT '',
  `parentRefId` varchar(64) DEFAULT '',
  `childRefId` varchar(64) DEFAULT '',
  `hasListUpload` tinyint(4) DEFAULT '-1',
  `hasEditUpload` tinyint(4) DEFAULT '0',
  `paneType` varchar(64) DEFAULT '',
  `pid` int(11) DEFAULT NULL,
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
  `adId` int(11) DEFAULT '-1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=244 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `action_defs`
--

LOCK TABLES `action_defs` WRITE;
/*!40000 ALTER TABLE `action_defs` DISABLE KEYS */;
INSERT INTO `action_defs` VALUES (15,'Users','main','Users','','','users','','',0,0,'6',-1,28,-1,'','','','-1',0,'none','','','',15),(19,'Layout','main','Admin','','','action_defs','','',0,0,'6',-1,1,-1,'','','','-1',0,'none','','','',19),(20,'Layout','main_editDefs','Edit Fields','action_defs','','edit_defs','parent_id','',0,0,'6',19,2,-1,'','','','-1',0,'none','','','',20),(21,'Layout','main_listDefs','List Defs','action_defs','','list_defs','parent_id','',0,0,'6',19,3,-1,'','','','-1',0,'none','','','',21),(23,'Conf','main','Conf','','','conf','','',0,0,'1',-1,1,-1,'','','','-1',0,'none','','','',23),(30,'Conf','main_Constants','Constants','conf','','consts','twoLayer','',0,0,'6',23,2,-1,'','','','-1',0,'none','','','',30),(75,'Templates','main','Templates','','','tpls','','',0,0,'3',NULL,1,-1,'','','','-1',0,'none','','','',75),(100,'Templates','main_pictureShowStyleCF','PictureShow Style','broadcastEvents','pictureShowStyleCF','pictureShowStyleCFEdit','','',0,1,'1',NULL,6,-1,'eventFcts','customFeature','item','3',1,'none','','','',100),(114,'Templates','main_catalogStyleCF','Catalog Style','broadcastEvents','catalogStyleCF','catalogStyleCFEdit','','',0,1,'1',NULL,10,-1,'eventFcts','customFeature','item','3',1,'none','','','',114),(115,'Templates','main_multicamStyleCF','MultiCam Style','broadcastEvents','multicamStyleCF','multicamStyleCFEdit','','',0,1,'1',NULL,7,-1,'eventFcts','customFeature','item','3',0,'none','','','',115),(124,'Templates','main_aStyle','A STYLE','broadcastEvents','la','ea','null','null',0,1,'1',NULL,5,-1,'eventFcts','customFeature','item','3',1,'none','','','',124),(200,'Templates','main_zoom','Zoom','broadcastEvents','lzoom','ezoom','','',0,1,'1',NULL,3,-1,'eventCoreFcts','zooms','videoZoom','3',1,'','topleft:tl topcenter:tc topright:tr centerleft:cl centercenter:cc centerright:cr bottomleft:bl bottomcenter:bc bottomright:br','zm','Zoom',200),(201,'Templates','main_cc','Closed Caption','broadcastEvents','cclist','ccedit','','',0,1,'1',NULL,4,-1,'eventCoreFcts','captions','caption','3',0,'','','cc','Closed_Caption',201),(203,'Conf','main_selects','Static Selects','','','selects','twoLayer','',0,1,'1',23,6,-1,'','','','-1',0,'','','','',-1),(206,'Conf','main_viewSelects','Dynamic Selects (DB View Only)','','','viewSelects','twoLayer','',0,0,'1',23,7,-1,'','','','-1',0,'','','','',-1),(207,'Conf','main_usertypes','UserTypes','conf','','userTypes','oneLayer','',0,0,'1',23,5,-1,'','','','-1',0,'','','','',-1),(208,'Conf','main_eventtypes','Event Types','Conf','','eventTypes','oneLayer','',0,0,'1',23,4,-1,'','','','-1',0,'','','','',-1),(209,'Conf','main_broadcasttypes','Broadcast Types','Conf','','broadcastTypes','oneLayer','',0,0,'1',23,3,-1,'','','','-1',0,'','','','',-1),(215,'Templates','main_uptest','UPTest','broadcastEvents','upl','upe','','',1,1,'1',NULL,2,-1,'eventFcts','customFeature','item','3',1,'','','','',-1),(232,'Operator','main','Operator','','','operator','','',0,0,'1',NULL,0,-1,'','','','15',0,'','','','',-1),(238,'Operator','main_antena','Antena','operator','','antena','','',0,0,'1',232,1,-1,'','','','232',0,'','','','',-1),(239,'Operator','main_applicant','Applicant','operator','','applicant','','',0,0,'1',232,2,-1,'','','','232',0,'','','','',-1),(240,'Operator','main_equipment','Equipment','operator','','equipment','','',0,0,'1',232,3,-1,'','','','232',0,'','','','',-1),(241,'Operator','main_antenaMW','ANTENA_MW','antena','ANTENNA_MW','antenamwe','','',0,0,'1',238,5,-1,'','','','238',0,'','','','',-1),(242,'Operator','main_equipmw','Equimpment MW','equipment','mvl','mve','','',0,0,'1',240,4,-1,'','','','240',0,'','','','',-1),(243,'Fields','main','Configured Fields','','','fieldse','','',0,0,'1',NULL,-1,-1,'','','','15',0,'','','','',-1);
/*!40000 ALTER TABLE `action_defs` ENABLE KEYS */;
UNLOCK TABLES;

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
  `tabLab` varchar(255) DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
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
-- Temporary table structure for view `ad`
--

DROP TABLE IF EXISTS `ad`;
/*!50001 DROP VIEW IF EXISTS `ad`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `ad` (
  `id` int(11),
  `tabAction` varchar(255),
  `subAction` varchar(255),
  `legend` varchar(64),
  `parentTab` varchar(255),
  `listTab` varchar(255),
  `editTab` varchar(64),
  `parentRefId` varchar(64),
  `childRefId` varchar(64),
  `hasListUpload` tinyint(4),
  `hasEditUpload` tinyint(4),
  `paneType` varchar(64),
  `pid` int(11),
  `seq` int(11),
  `tTyp` int(11)
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `adt`
--

DROP TABLE IF EXISTS `adt`;
/*!50001 DROP VIEW IF EXISTS `adt`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `adt` (
  `id` int(11),
  `pid` int(11),
  `tabAction` varchar(255),
  `subAction` varchar(255),
  `parentTab` varchar(255),
  `listTab` varchar(255),
  `editTab` varchar(64),
  `seq` int(11)
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Dumping routines for database 'ledb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2011-10-13 21:43:37
