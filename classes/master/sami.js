
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Inhere" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Inhere.html">Inhere</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Inhere_LiteDb" >                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Inhere/LiteDb.html">LiteDb</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Inhere_LiteDb_Helper" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Inhere/LiteDb/Helper.html">Helper</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Inhere_LiteDb_Helper_DBHelper" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Inhere/LiteDb/Helper/DBHelper.html">DBHelper</a>                    </div>                </li>                            <li data-name="class:Inhere_LiteDb_Helper_DsnHelper" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Inhere/LiteDb/Helper/DsnHelper.html">DsnHelper</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Inhere_LiteDb_ConfigAndEventAwareTrait" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Inhere/LiteDb/ConfigAndEventAwareTrait.html">ConfigAndEventAwareTrait</a>                    </div>                </li>                            <li data-name="class:Inhere_LiteDb_LiteDatabaseInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Inhere/LiteDb/LiteDatabaseInterface.html">LiteDatabaseInterface</a>                    </div>                </li>                            <li data-name="class:Inhere_LiteDb_LiteMongo" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Inhere/LiteDb/LiteMongo.html">LiteMongo</a>                    </div>                </li>                            <li data-name="class:Inhere_LiteDb_LitePdo" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Inhere/LiteDb/LitePdo.html">LitePdo</a>                    </div>                </li>                            <li data-name="class:Inhere_LiteDb_LitePdoInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Inhere/LiteDb/LitePdoInterface.html">LitePdoInterface</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Inhere.html", "name": "Inhere", "doc": "Namespace Inhere"},{"type": "Namespace", "link": "Inhere/LiteDb.html", "name": "Inhere\\LiteDb", "doc": "Namespace Inhere\\LiteDb"},{"type": "Namespace", "link": "Inhere/LiteDb/Helper.html", "name": "Inhere\\LiteDb\\Helper", "doc": "Namespace Inhere\\LiteDb\\Helper"},
            {"type": "Interface", "fromName": "Inhere\\LiteDb", "fromLink": "Inhere/LiteDb.html", "link": "Inhere/LiteDb/LiteDatabaseInterface.html", "name": "Inhere\\LiteDb\\LiteDatabaseInterface", "doc": "&quot;Interface LiteDatabaseInterface&quot;"},
                                                        {"type": "Method", "fromName": "Inhere\\LiteDb\\LiteDatabaseInterface", "fromLink": "Inhere/LiteDb/LiteDatabaseInterface.html", "link": "Inhere/LiteDb/LiteDatabaseInterface.html#method_connect", "name": "Inhere\\LiteDb\\LiteDatabaseInterface::connect", "doc": "&quot;connect to db server&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LiteDatabaseInterface", "fromLink": "Inhere/LiteDb/LiteDatabaseInterface.html", "link": "Inhere/LiteDb/LiteDatabaseInterface.html#method_reconnect", "name": "Inhere\\LiteDb\\LiteDatabaseInterface::reconnect", "doc": "&quot;reconnect&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LiteDatabaseInterface", "fromLink": "Inhere/LiteDb/LiteDatabaseInterface.html", "link": "Inhere/LiteDb/LiteDatabaseInterface.html#method_disconnect", "name": "Inhere\\LiteDb\\LiteDatabaseInterface::disconnect", "doc": "&quot;disconnect&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LiteDatabaseInterface", "fromLink": "Inhere/LiteDb/LiteDatabaseInterface.html", "link": "Inhere/LiteDb/LiteDatabaseInterface.html#method_isConnected", "name": "Inhere\\LiteDb\\LiteDatabaseInterface::isConnected", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LiteDatabaseInterface", "fromLink": "Inhere/LiteDb/LiteDatabaseInterface.html", "link": "Inhere/LiteDb/LiteDatabaseInterface.html#method_isSupported", "name": "Inhere\\LiteDb\\LiteDatabaseInterface::isSupported", "doc": "&quot;Is this driver supported.&quot;"},
            
            {"type": "Interface", "fromName": "Inhere\\LiteDb", "fromLink": "Inhere/LiteDb.html", "link": "Inhere/LiteDb/LitePdoInterface.html", "name": "Inhere\\LiteDb\\LitePdoInterface", "doc": "&quot;Interface LitePdoInterface&quot;"},
                    
            
            {"type": "Trait", "fromName": "Inhere\\LiteDb", "fromLink": "Inhere/LiteDb.html", "link": "Inhere/LiteDb/ConfigAndEventAwareTrait.html", "name": "Inhere\\LiteDb\\ConfigAndEventAwareTrait", "doc": "&quot;Trait ConfigAndEventAwareTrait&quot;"},
                                                        {"type": "Method", "fromName": "Inhere\\LiteDb\\ConfigAndEventAwareTrait", "fromLink": "Inhere/LiteDb/ConfigAndEventAwareTrait.html", "link": "Inhere/LiteDb/ConfigAndEventAwareTrait.html#method_create", "name": "Inhere\\LiteDb\\ConfigAndEventAwareTrait::create", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\ConfigAndEventAwareTrait", "fromLink": "Inhere/LiteDb/ConfigAndEventAwareTrait.html", "link": "Inhere/LiteDb/ConfigAndEventAwareTrait.html#method___construct", "name": "Inhere\\LiteDb\\ConfigAndEventAwareTrait::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\ConfigAndEventAwareTrait", "fromLink": "Inhere/LiteDb/ConfigAndEventAwareTrait.html", "link": "Inhere/LiteDb/ConfigAndEventAwareTrait.html#method___destruct", "name": "Inhere\\LiteDb\\ConfigAndEventAwareTrait::__destruct", "doc": "&quot;__destruct&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\ConfigAndEventAwareTrait", "fromLink": "Inhere/LiteDb/ConfigAndEventAwareTrait.html", "link": "Inhere/LiteDb/ConfigAndEventAwareTrait.html#method_isDebug", "name": "Inhere\\LiteDb\\ConfigAndEventAwareTrait::isDebug", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\ConfigAndEventAwareTrait", "fromLink": "Inhere/LiteDb/ConfigAndEventAwareTrait.html", "link": "Inhere/LiteDb/ConfigAndEventAwareTrait.html#method_on", "name": "Inhere\\LiteDb\\ConfigAndEventAwareTrait::on", "doc": "&quot;register a event callback&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\ConfigAndEventAwareTrait", "fromLink": "Inhere/LiteDb/ConfigAndEventAwareTrait.html", "link": "Inhere/LiteDb/ConfigAndEventAwareTrait.html#method_fire", "name": "Inhere\\LiteDb\\ConfigAndEventAwareTrait::fire", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\ConfigAndEventAwareTrait", "fromLink": "Inhere/LiteDb/ConfigAndEventAwareTrait.html", "link": "Inhere/LiteDb/ConfigAndEventAwareTrait.html#method_log", "name": "Inhere\\LiteDb\\ConfigAndEventAwareTrait::log", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\ConfigAndEventAwareTrait", "fromLink": "Inhere/LiteDb/ConfigAndEventAwareTrait.html", "link": "Inhere/LiteDb/ConfigAndEventAwareTrait.html#method_getConfig", "name": "Inhere\\LiteDb\\ConfigAndEventAwareTrait::getConfig", "doc": "&quot;Method to get property Options&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\ConfigAndEventAwareTrait", "fromLink": "Inhere/LiteDb/ConfigAndEventAwareTrait.html", "link": "Inhere/LiteDb/ConfigAndEventAwareTrait.html#method_setConfig", "name": "Inhere\\LiteDb\\ConfigAndEventAwareTrait::setConfig", "doc": "&quot;Method to set property config&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\ConfigAndEventAwareTrait", "fromLink": "Inhere/LiteDb/ConfigAndEventAwareTrait.html", "link": "Inhere/LiteDb/ConfigAndEventAwareTrait.html#method_getQueryLogs", "name": "Inhere\\LiteDb\\ConfigAndEventAwareTrait::getQueryLogs", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\ConfigAndEventAwareTrait", "fromLink": "Inhere/LiteDb/ConfigAndEventAwareTrait.html", "link": "Inhere/LiteDb/ConfigAndEventAwareTrait.html#method_call", "name": "Inhere\\LiteDb\\ConfigAndEventAwareTrait::call", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Inhere\\LiteDb\\Helper", "fromLink": "Inhere/LiteDb/Helper.html", "link": "Inhere/LiteDb/Helper/DBHelper.html", "name": "Inhere\\LiteDb\\Helper\\DBHelper", "doc": "&quot;Class DBHelper&quot;"},
                                                        {"type": "Method", "fromName": "Inhere\\LiteDb\\Helper\\DBHelper", "fromLink": "Inhere/LiteDb/Helper/DBHelper.html", "link": "Inhere/LiteDb/Helper/DBHelper.html#method_replaceTablePrefix", "name": "Inhere\\LiteDb\\Helper\\DBHelper::replaceTablePrefix", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\Helper\\DBHelper", "fromLink": "Inhere/LiteDb/Helper/DBHelper.html", "link": "Inhere/LiteDb/Helper/DBHelper.html#method_removeLeadingBoolean", "name": "Inhere\\LiteDb\\Helper\\DBHelper::removeLeadingBoolean", "doc": "&quot;Remove the leading boolean from a statement.&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\Helper\\DBHelper", "fromLink": "Inhere/LiteDb/Helper/DBHelper.html", "link": "Inhere/LiteDb/Helper/DBHelper.html#method_detectOperationName", "name": "Inhere\\LiteDb\\Helper\\DBHelper::detectOperationName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\Helper\\DBHelper", "fromLink": "Inhere/LiteDb/Helper/DBHelper.html", "link": "Inhere/LiteDb/Helper/DBHelper.html#method_handleConditions", "name": "Inhere\\LiteDb\\Helper\\DBHelper::handleConditions", "doc": "&quot;handle where condition&quot;"},
            
            {"type": "Class", "fromName": "Inhere\\LiteDb\\Helper", "fromLink": "Inhere/LiteDb/Helper.html", "link": "Inhere/LiteDb/Helper/DsnHelper.html", "name": "Inhere\\LiteDb\\Helper\\DsnHelper", "doc": "&quot;Class DsnHelper&quot;"},
                                                        {"type": "Method", "fromName": "Inhere\\LiteDb\\Helper\\DsnHelper", "fromLink": "Inhere/LiteDb/Helper/DsnHelper.html", "link": "Inhere/LiteDb/Helper/DsnHelper.html#method_extractDsn", "name": "Inhere\\LiteDb\\Helper\\DsnHelper::extractDsn", "doc": "&quot;extractDsn&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\Helper\\DsnHelper", "fromLink": "Inhere/LiteDb/Helper/DsnHelper.html", "link": "Inhere/LiteDb/Helper/DsnHelper.html#method_getDsn", "name": "Inhere\\LiteDb\\Helper\\DsnHelper::getDsn", "doc": "&quot;getDsn&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\Helper\\DsnHelper", "fromLink": "Inhere/LiteDb/Helper/DsnHelper.html", "link": "Inhere/LiteDb/Helper/DsnHelper.html#method_mysql", "name": "Inhere\\LiteDb\\Helper\\DsnHelper::mysql", "doc": "&quot;mysql&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\Helper\\DsnHelper", "fromLink": "Inhere/LiteDb/Helper/DsnHelper.html", "link": "Inhere/LiteDb/Helper/DsnHelper.html#method_cubrid", "name": "Inhere\\LiteDb\\Helper\\DsnHelper::cubrid", "doc": "&quot;cubrid&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\Helper\\DsnHelper", "fromLink": "Inhere/LiteDb/Helper/DsnHelper.html", "link": "Inhere/LiteDb/Helper/DsnHelper.html#method_dblib", "name": "Inhere\\LiteDb\\Helper\\DsnHelper::dblib", "doc": "&quot;dblib&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\Helper\\DsnHelper", "fromLink": "Inhere/LiteDb/Helper/DsnHelper.html", "link": "Inhere/LiteDb/Helper/DsnHelper.html#method_firebird", "name": "Inhere\\LiteDb\\Helper\\DsnHelper::firebird", "doc": "&quot;firebird&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\Helper\\DsnHelper", "fromLink": "Inhere/LiteDb/Helper/DsnHelper.html", "link": "Inhere/LiteDb/Helper/DsnHelper.html#method_ibm", "name": "Inhere\\LiteDb\\Helper\\DsnHelper::ibm", "doc": "&quot;ibm&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\Helper\\DsnHelper", "fromLink": "Inhere/LiteDb/Helper/DsnHelper.html", "link": "Inhere/LiteDb/Helper/DsnHelper.html#method_informix", "name": "Inhere\\LiteDb\\Helper\\DsnHelper::informix", "doc": "&quot;dblib&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\Helper\\DsnHelper", "fromLink": "Inhere/LiteDb/Helper/DsnHelper.html", "link": "Inhere/LiteDb/Helper/DsnHelper.html#method_mssql", "name": "Inhere\\LiteDb\\Helper\\DsnHelper::mssql", "doc": "&quot;mssql&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\Helper\\DsnHelper", "fromLink": "Inhere/LiteDb/Helper/DsnHelper.html", "link": "Inhere/LiteDb/Helper/DsnHelper.html#method_oci", "name": "Inhere\\LiteDb\\Helper\\DsnHelper::oci", "doc": "&quot;oci&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\Helper\\DsnHelper", "fromLink": "Inhere/LiteDb/Helper/DsnHelper.html", "link": "Inhere/LiteDb/Helper/DsnHelper.html#method_odbc", "name": "Inhere\\LiteDb\\Helper\\DsnHelper::odbc", "doc": "&quot;odbc&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\Helper\\DsnHelper", "fromLink": "Inhere/LiteDb/Helper/DsnHelper.html", "link": "Inhere/LiteDb/Helper/DsnHelper.html#method_pgsql", "name": "Inhere\\LiteDb\\Helper\\DsnHelper::pgsql", "doc": "&quot;pgsql&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\Helper\\DsnHelper", "fromLink": "Inhere/LiteDb/Helper/DsnHelper.html", "link": "Inhere/LiteDb/Helper/DsnHelper.html#method_postgresql", "name": "Inhere\\LiteDb\\Helper\\DsnHelper::postgresql", "doc": "&quot;Alias of pgsql&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\Helper\\DsnHelper", "fromLink": "Inhere/LiteDb/Helper/DsnHelper.html", "link": "Inhere/LiteDb/Helper/DsnHelper.html#method_sqlite", "name": "Inhere\\LiteDb\\Helper\\DsnHelper::sqlite", "doc": "&quot;sqlite&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\Helper\\DsnHelper", "fromLink": "Inhere/LiteDb/Helper/DsnHelper.html", "link": "Inhere/LiteDb/Helper/DsnHelper.html#method_sybase", "name": "Inhere\\LiteDb\\Helper\\DsnHelper::sybase", "doc": "&quot;sybase&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\Helper\\DsnHelper", "fromLink": "Inhere/LiteDb/Helper/DsnHelper.html", "link": "Inhere/LiteDb/Helper/DsnHelper.html#method_fourd", "name": "Inhere\\LiteDb\\Helper\\DsnHelper::fourd", "doc": "&quot;sybase&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\Helper\\DsnHelper", "fromLink": "Inhere/LiteDb/Helper/DsnHelper.html", "link": "Inhere/LiteDb/Helper/DsnHelper.html#method_getOption", "name": "Inhere\\LiteDb\\Helper\\DsnHelper::getOption", "doc": "&quot;getOption&quot;"},
            
            {"type": "Class", "fromName": "Inhere\\LiteDb", "fromLink": "Inhere/LiteDb.html", "link": "Inhere/LiteDb/LiteDatabaseInterface.html", "name": "Inhere\\LiteDb\\LiteDatabaseInterface", "doc": "&quot;Interface LiteDatabaseInterface&quot;"},
                                                        {"type": "Method", "fromName": "Inhere\\LiteDb\\LiteDatabaseInterface", "fromLink": "Inhere/LiteDb/LiteDatabaseInterface.html", "link": "Inhere/LiteDb/LiteDatabaseInterface.html#method_connect", "name": "Inhere\\LiteDb\\LiteDatabaseInterface::connect", "doc": "&quot;connect to db server&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LiteDatabaseInterface", "fromLink": "Inhere/LiteDb/LiteDatabaseInterface.html", "link": "Inhere/LiteDb/LiteDatabaseInterface.html#method_reconnect", "name": "Inhere\\LiteDb\\LiteDatabaseInterface::reconnect", "doc": "&quot;reconnect&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LiteDatabaseInterface", "fromLink": "Inhere/LiteDb/LiteDatabaseInterface.html", "link": "Inhere/LiteDb/LiteDatabaseInterface.html#method_disconnect", "name": "Inhere\\LiteDb\\LiteDatabaseInterface::disconnect", "doc": "&quot;disconnect&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LiteDatabaseInterface", "fromLink": "Inhere/LiteDb/LiteDatabaseInterface.html", "link": "Inhere/LiteDb/LiteDatabaseInterface.html#method_isConnected", "name": "Inhere\\LiteDb\\LiteDatabaseInterface::isConnected", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LiteDatabaseInterface", "fromLink": "Inhere/LiteDb/LiteDatabaseInterface.html", "link": "Inhere/LiteDb/LiteDatabaseInterface.html#method_isSupported", "name": "Inhere\\LiteDb\\LiteDatabaseInterface::isSupported", "doc": "&quot;Is this driver supported.&quot;"},
            
            {"type": "Class", "fromName": "Inhere\\LiteDb", "fromLink": "Inhere/LiteDb.html", "link": "Inhere/LiteDb/LiteMongo.html", "name": "Inhere\\LiteDb\\LiteMongo", "doc": "&quot;Class ExtendedMgo - for mongodb database&quot;"},
                                                        {"type": "Method", "fromName": "Inhere\\LiteDb\\LiteMongo", "fromLink": "Inhere/LiteDb/LiteMongo.html", "link": "Inhere/LiteDb/LiteMongo.html#method_isSupported", "name": "Inhere\\LiteDb\\LiteMongo::isSupported", "doc": "&quot;Is this driver supported.&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LiteMongo", "fromLink": "Inhere/LiteDb/LiteMongo.html", "link": "Inhere/LiteDb/LiteMongo.html#method_connect", "name": "Inhere\\LiteDb\\LiteMongo::connect", "doc": "&quot;connect&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LiteMongo", "fromLink": "Inhere/LiteDb/LiteMongo.html", "link": "Inhere/LiteDb/LiteMongo.html#method_reconnect", "name": "Inhere\\LiteDb\\LiteMongo::reconnect", "doc": "&quot;reconnect&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LiteMongo", "fromLink": "Inhere/LiteDb/LiteMongo.html", "link": "Inhere/LiteDb/LiteMongo.html#method_disconnect", "name": "Inhere\\LiteDb\\LiteMongo::disconnect", "doc": "&quot;disconnect&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LiteMongo", "fromLink": "Inhere/LiteDb/LiteMongo.html", "link": "Inhere/LiteDb/LiteMongo.html#method_isConnected", "name": "Inhere\\LiteDb\\LiteMongo::isConnected", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Inhere\\LiteDb", "fromLink": "Inhere/LiteDb.html", "link": "Inhere/LiteDb/LitePdo.html", "name": "Inhere\\LiteDb\\LitePdo", "doc": "&quot;Class LiteDatabase - for mysql, sqlite, pgSql database&quot;"},
                                                        {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_isSupported", "name": "Inhere\\LiteDb\\LitePdo::isSupported", "doc": "&quot;Is this driver supported.&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method___construct", "name": "Inhere\\LiteDb\\LitePdo::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_connect", "name": "Inhere\\LiteDb\\LitePdo::connect", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_reconnect", "name": "Inhere\\LiteDb\\LitePdo::reconnect", "doc": "&quot;reconnect&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_disconnect", "name": "Inhere\\LiteDb\\LitePdo::disconnect", "doc": "&quot;disconnect&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method___call", "name": "Inhere\\LiteDb\\LitePdo::__call", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_queryOne", "name": "Inhere\\LiteDb\\LitePdo::queryOne", "doc": "&quot;Run a select statement, fetch one&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_queryAll", "name": "Inhere\\LiteDb\\LitePdo::queryAll", "doc": "&quot;Run a select statement, fetch all&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_insert", "name": "Inhere\\LiteDb\\LitePdo::insert", "doc": "&quot;Run a statement for insert a row&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_insertBatch", "name": "Inhere\\LiteDb\\LitePdo::insertBatch", "doc": "&quot;Run a statement for insert multi row&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_update", "name": "Inhere\\LiteDb\\LitePdo::update", "doc": "&quot;Run a update statement&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_delete", "name": "Inhere\\LiteDb\\LitePdo::delete", "doc": "&quot;Run a delete statement&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_count", "name": "Inhere\\LiteDb\\LitePdo::count", "doc": "&quot;count&lt;\/p&gt;\n\n&lt;pre&gt;&lt;code&gt;$db-&amp;gt;count();\n&lt;\/code&gt;&lt;\/pre&gt;\n&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_exists", "name": "Inhere\\LiteDb\\LitePdo::exists", "doc": "&quot;exists&lt;\/p&gt;\n\n&lt;pre&gt;&lt;code&gt;$db-&amp;gt;exists();\n\/\/ SQL: select exists(select * from `table` where (`phone` = 152xxx)) as `exists`;\n&lt;\/code&gt;&lt;\/pre&gt;\n&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_fetchAffected", "name": "Inhere\\LiteDb\\LitePdo::fetchAffected", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_fetchAssoc", "name": "Inhere\\LiteDb\\LitePdo::fetchAssoc", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_fetchOne", "name": "Inhere\\LiteDb\\LitePdo::fetchOne", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_fetchColumn", "name": "Inhere\\LiteDb\\LitePdo::fetchColumn", "doc": "&quot;\u4ece\u7ed3\u679c\u96c6\u4e2d\u7684\u4e0b\u4e00\u884c\u8fd4\u56de\u5355\u72ec\u7684\u4e00\u5217&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_fetchValue", "name": "Inhere\\LiteDb\\LitePdo::fetchValue", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_fetchObject", "name": "Inhere\\LiteDb\\LitePdo::fetchObject", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_fetchAll", "name": "Inhere\\LiteDb\\LitePdo::fetchAll", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_fetchAssocs", "name": "Inhere\\LiteDb\\LitePdo::fetchAssocs", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_fetchValues", "name": "Inhere\\LiteDb\\LitePdo::fetchValues", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_fetchColumns", "name": "Inhere\\LiteDb\\LitePdo::fetchColumns", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_fetchObjects", "name": "Inhere\\LiteDb\\LitePdo::fetchObjects", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_fetchFuns", "name": "Inhere\\LiteDb\\LitePdo::fetchFuns", "doc": "&quot;\u6bcf\u884c\u8c03\u7528\u4e00\u6b21\u51fd\u6570. \u5c06\u6bcf\u884c\u7684\u5217\u503c\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u6307\u5b9a\u7684\u51fd\u6570\uff0c\u5e76\u8fd4\u56de\u8c03\u7528\u51fd\u6570\u540e\u7684\u7ed3\u679c\u3002&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_fetchGroups", "name": "Inhere\\LiteDb\\LitePdo::fetchGroups", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_fetchPairs", "name": "Inhere\\LiteDb\\LitePdo::fetchPairs", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_cursor", "name": "Inhere\\LiteDb\\LitePdo::cursor", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_yieldAssoc", "name": "Inhere\\LiteDb\\LitePdo::yieldAssoc", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_yieldAll", "name": "Inhere\\LiteDb\\LitePdo::yieldAll", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_yieldValue", "name": "Inhere\\LiteDb\\LitePdo::yieldValue", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_yieldColumn", "name": "Inhere\\LiteDb\\LitePdo::yieldColumn", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_yieldObjects", "name": "Inhere\\LiteDb\\LitePdo::yieldObjects", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_yieldPairs", "name": "Inhere\\LiteDb\\LitePdo::yieldPairs", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_execute", "name": "Inhere\\LiteDb\\LitePdo::execute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_prepareWithBindings", "name": "Inhere\\LiteDb\\LitePdo::prepareWithBindings", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_transactional", "name": "Inhere\\LiteDb\\LitePdo::transactional", "doc": "&quot;\u4e8b\u52a1\n{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_bindValues", "name": "Inhere\\LiteDb\\LitePdo::bindValues", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_bindValue", "name": "Inhere\\LiteDb\\LitePdo::bindValue", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_ping", "name": "Inhere\\LiteDb\\LitePdo::ping", "doc": "&quot;Check whether the connection is available&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_compileSelect", "name": "Inhere\\LiteDb\\LitePdo::compileSelect", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_compileInsert", "name": "Inhere\\LiteDb\\LitePdo::compileInsert", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_compileUpdate", "name": "Inhere\\LiteDb\\LitePdo::compileUpdate", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_compileDelete", "name": "Inhere\\LiteDb\\LitePdo::compileDelete", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_compileNodes", "name": "Inhere\\LiteDb\\LitePdo::compileNodes", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_qns", "name": "Inhere\\LiteDb\\LitePdo::qns", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_qn", "name": "Inhere\\LiteDb\\LitePdo::qn", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_quoteName", "name": "Inhere\\LiteDb\\LitePdo::quoteName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_quoteSingleName", "name": "Inhere\\LiteDb\\LitePdo::quoteSingleName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_initQuoteNameChar", "name": "Inhere\\LiteDb\\LitePdo::initQuoteNameChar", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_q", "name": "Inhere\\LiteDb\\LitePdo::q", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_quote", "name": "Inhere\\LiteDb\\LitePdo::quote", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_exec", "name": "Inhere\\LiteDb\\LitePdo::exec", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_query", "name": "Inhere\\LiteDb\\LitePdo::query", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_prepare", "name": "Inhere\\LiteDb\\LitePdo::prepare", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_beginTransaction", "name": "Inhere\\LiteDb\\LitePdo::beginTransaction", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_inTransaction", "name": "Inhere\\LiteDb\\LitePdo::inTransaction", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_commit", "name": "Inhere\\LiteDb\\LitePdo::commit", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_rollBack", "name": "Inhere\\LiteDb\\LitePdo::rollBack", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_errorCode", "name": "Inhere\\LiteDb\\LitePdo::errorCode", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_errorInfo", "name": "Inhere\\LiteDb\\LitePdo::errorInfo", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_lastInsertId", "name": "Inhere\\LiteDb\\LitePdo::lastInsertId", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_getAttribute", "name": "Inhere\\LiteDb\\LitePdo::getAttribute", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_setAttribute", "name": "Inhere\\LiteDb\\LitePdo::setAttribute", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_getAvailableDrivers", "name": "Inhere\\LiteDb\\LitePdo::getAvailableDrivers", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_freeResource", "name": "Inhere\\LiteDb\\LitePdo::freeResource", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_getDriverName", "name": "Inhere\\LiteDb\\LitePdo::getDriverName", "doc": "&quot;Get the name of the driver.&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_getDatabaseName", "name": "Inhere\\LiteDb\\LitePdo::getDatabaseName", "doc": "&quot;Get the name of the connected database.&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_setDatabaseName", "name": "Inhere\\LiteDb\\LitePdo::setDatabaseName", "doc": "&quot;Set the name of the connected database.&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_getTablePrefix", "name": "Inhere\\LiteDb\\LitePdo::getTablePrefix", "doc": "&quot;Get the table prefix for the connection.&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_setTablePrefix", "name": "Inhere\\LiteDb\\LitePdo::setTablePrefix", "doc": "&quot;Set the table prefix in use by the connection.&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_getPdo", "name": "Inhere\\LiteDb\\LitePdo::getPdo", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_setPdo", "name": "Inhere\\LiteDb\\LitePdo::setPdo", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Inhere\\LiteDb\\LitePdo", "fromLink": "Inhere/LiteDb/LitePdo.html", "link": "Inhere/LiteDb/LitePdo.html#method_isConnected", "name": "Inhere\\LiteDb\\LitePdo::isConnected", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Inhere\\LiteDb", "fromLink": "Inhere/LiteDb.html", "link": "Inhere/LiteDb/LitePdoInterface.html", "name": "Inhere\\LiteDb\\LitePdoInterface", "doc": "&quot;Interface LitePdoInterface&quot;"},
                    
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


