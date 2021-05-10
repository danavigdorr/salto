/*
*                      Copyright 2021 Salto Labs Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with
* the License.  You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/* eslint-disable max-len */
/* eslint-disable camelcase */
import { CORE_ANNOTATIONS, createRestriction, ElemID, PrimitiveType, PrimitiveTypes } from '@salto-io/adapter-api'
import * as constants from '../constants'

const enumsFolderPath = [constants.NETSUITE, constants.TYPES_PATH, constants.SUBTYPES_PATH]

const addressform_fieldidElemID = new ElemID(constants.NETSUITE, 'addressform_fieldid')
const advancedpdftemplate_standardElemID = new ElemID(constants.NETSUITE, 'advancedpdftemplate_standard')
const allrecord_script_deployment_recordtypeElemID = new ElemID(constants.NETSUITE, 'allrecord_script_deployment_recordtype')
const centercategory_tasktypeElemID = new ElemID(constants.NETSUITE, 'centercategory_tasktype')
const configurable_featuresElemID = new ElemID(constants.NETSUITE, 'configurable_features')
const countriesElemID = new ElemID(constants.NETSUITE, 'countries')
const crmcustomfield_searchcomparefieldElemID = new ElemID(constants.NETSUITE, 'crmcustomfield_searchcomparefield')
const csvimport_columndelimiterElemID = new ElemID(constants.NETSUITE, 'csvimport_columndelimiter')
const csvimport_customrecordtypeElemID = new ElemID(constants.NETSUITE, 'csvimport_customrecordtype')
const csvimport_customtransactiontypeElemID = new ElemID(constants.NETSUITE, 'csvimport_customtransactiontype')
const csvimport_datahandlingElemID = new ElemID(constants.NETSUITE, 'csvimport_datahandling')
const csvimport_decimaldelimiterElemID = new ElemID(constants.NETSUITE, 'csvimport_decimaldelimiter')
const csvimport_encodingElemID = new ElemID(constants.NETSUITE, 'csvimport_encoding')
const csvimport_entryform_standardElemID = new ElemID(constants.NETSUITE, 'csvimport_entryform_standard')
const csvimport_recordtypesElemID = new ElemID(constants.NETSUITE, 'csvimport_recordtypes')
const csvimport_referencetypeElemID = new ElemID(constants.NETSUITE, 'csvimport_referencetype')
const csvimport_transactionform_standardElemID = new ElemID(constants.NETSUITE, 'csvimport_transactionform_standard')
const csvimports_entryformrecordtypesElemID = new ElemID(constants.NETSUITE, 'csvimports_entryformrecordtypes')
const csvimports_transactionformrecordtypesElemID = new ElemID(constants.NETSUITE, 'csvimports_transactionformrecordtypes')
const customrecordtype_accesstypeElemID = new ElemID(constants.NETSUITE, 'customrecordtype_accesstype')
const customrecordtype_permission_restrictionElemID = new ElemID(constants.NETSUITE, 'customrecordtype_permission_restriction')
const customrecordtype_permittedlevelElemID = new ElemID(constants.NETSUITE, 'customrecordtype_permittedlevel')
const customrecordtype_permittedroleElemID = new ElemID(constants.NETSUITE, 'customrecordtype_permittedrole')
const customrecordtype_tasktypeElemID = new ElemID(constants.NETSUITE, 'customrecordtype_tasktype')
const customsegment_access_search_levelElemID = new ElemID(constants.NETSUITE, 'customsegment_access_search_level')
const customsegment_crm_application_idElemID = new ElemID(constants.NETSUITE, 'customsegment_crm_application_id')
const customsegment_crm_sourcelistElemID = new ElemID(constants.NETSUITE, 'customsegment_crm_sourcelist')
const customsegment_displaytypeElemID = new ElemID(constants.NETSUITE, 'customsegment_displaytype')
const customsegment_entities_application_idElemID = new ElemID(constants.NETSUITE, 'customsegment_entities_application_id')
const customsegment_entities_sourcelistElemID = new ElemID(constants.NETSUITE, 'customsegment_entities_sourcelist')
const customsegment_fieldtypeElemID = new ElemID(constants.NETSUITE, 'customsegment_fieldtype')
const customsegment_items_application_idElemID = new ElemID(constants.NETSUITE, 'customsegment_items_application_id')
const customsegment_items_sourcelistElemID = new ElemID(constants.NETSUITE, 'customsegment_items_sourcelist')
const customsegment_items_subtypeElemID = new ElemID(constants.NETSUITE, 'customsegment_items_subtype')
const customsegment_otherrecords_application_idElemID = new ElemID(constants.NETSUITE, 'customsegment_otherrecords_application_id')
const customsegment_parentElemID = new ElemID(constants.NETSUITE, 'customsegment_parent')
const customsegment_transactionbody_application_idElemID = new ElemID(constants.NETSUITE, 'customsegment_transactionbody_application_id')
const customsegment_transactionbody_sourcelistElemID = new ElemID(constants.NETSUITE, 'customsegment_transactionbody_sourcelist')
const customsegment_transactionline_application_idElemID = new ElemID(constants.NETSUITE, 'customsegment_transactionline_application_id')
const customsegment_transactionline_sourcelistElemID = new ElemID(constants.NETSUITE, 'customsegment_transactionline_sourcelist')
const customsegment_valuesdisplayorderElemID = new ElemID(constants.NETSUITE, 'customsegment_valuesdisplayorder')
const customtransactiontype_classification_positionElemID = new ElemID(constants.NETSUITE, 'customtransactiontype_classification_position')
const customtransactiontype_creditsupportstylesElemID = new ElemID(constants.NETSUITE, 'customtransactiontype_creditsupportstyles')
const customtransactiontype_filterbyaccounttypeElemID = new ElemID(constants.NETSUITE, 'customtransactiontype_filterbyaccounttype')
const customtransactiontype_statuses_idElemID = new ElemID(constants.NETSUITE, 'customtransactiontype_statuses_id')
const customtransactiontype_subliststyleElemID = new ElemID(constants.NETSUITE, 'customtransactiontype_subliststyle')
const customtransactiontype_subliststyle_salesandpurchaseElemID = new ElemID(constants.NETSUITE, 'customtransactiontype_subliststyle_salesandpurchase')
const customtransactiontype_tasktypeElemID = new ElemID(constants.NETSUITE, 'customtransactiontype_tasktype')
const dashboard_layoutElemID = new ElemID(constants.NETSUITE, 'dashboard_layout')
const dashboard_modeElemID = new ElemID(constants.NETSUITE, 'dashboard_mode')
const emailtemplate_recordtypeElemID = new ElemID(constants.NETSUITE, 'emailtemplate_recordtype')
const engine_versionsElemID = new ElemID(constants.NETSUITE, 'engine_versions')
const entryform_buttonidElemID = new ElemID(constants.NETSUITE, 'entryform_buttonid')
const entryform_fieldidElemID = new ElemID(constants.NETSUITE, 'entryform_fieldid')
const entryform_standardElemID = new ElemID(constants.NETSUITE, 'entryform_standard')
const entryform_sublistidElemID = new ElemID(constants.NETSUITE, 'entryform_sublistid')
const entryform_subtabidElemID = new ElemID(constants.NETSUITE, 'entryform_subtabid')
const entryform_tabidElemID = new ElemID(constants.NETSUITE, 'entryform_tabid')
const execution_contextElemID = new ElemID(constants.NETSUITE, 'execution_context')
const feature_statusElemID = new ElemID(constants.NETSUITE, 'feature_status')
const featuresElemID = new ElemID(constants.NETSUITE, 'features')
const forbidden_featuresElemID = new ElemID(constants.NETSUITE, 'forbidden_features')
const form_buttonstyleElemID = new ElemID(constants.NETSUITE, 'form_buttonstyle')
const form_displaytypeElemID = new ElemID(constants.NETSUITE, 'form_displaytype')
const form_fieldpositionElemID = new ElemID(constants.NETSUITE, 'form_fieldposition')
const generic_accesslevel_searchlevelElemID = new ElemID(constants.NETSUITE, 'generic_accesslevel_searchlevel')
const generic_body_tabElemID = new ElemID(constants.NETSUITE, 'generic_body_tab')
const generic_centercategoryElemID = new ElemID(constants.NETSUITE, 'generic_centercategory')
const generic_centertabElemID = new ElemID(constants.NETSUITE, 'generic_centertab')
const generic_centertypeElemID = new ElemID(constants.NETSUITE, 'generic_centertype')
const generic_crm_tabElemID = new ElemID(constants.NETSUITE, 'generic_crm_tab')
const generic_custom_record_iconElemID = new ElemID(constants.NETSUITE, 'generic_custom_record_icon')
const generic_customfield_displaytypeElemID = new ElemID(constants.NETSUITE, 'generic_customfield_displaytype')
const generic_customfield_dynamicdefaultElemID = new ElemID(constants.NETSUITE, 'generic_customfield_dynamicdefault')
const generic_customfield_fieldtypeElemID = new ElemID(constants.NETSUITE, 'generic_customfield_fieldtype')
const generic_customfield_fldfiltercomparetypeElemID = new ElemID(constants.NETSUITE, 'generic_customfield_fldfiltercomparetype')
const generic_customfield_onparentdeleteElemID = new ElemID(constants.NETSUITE, 'generic_customfield_onparentdelete')
const generic_customfield_parentsubtabElemID = new ElemID(constants.NETSUITE, 'generic_customfield_parentsubtab')
const generic_customfield_selectrecordtypeElemID = new ElemID(constants.NETSUITE, 'generic_customfield_selectrecordtype')
const generic_customrecordothercustomfield_fieldElemID = new ElemID(constants.NETSUITE, 'generic_customrecordothercustomfield_field')
const generic_customrecordothercustomfield_rectypeElemID = new ElemID(constants.NETSUITE, 'generic_customrecordothercustomfield_rectype')
const generic_day_of_monthElemID = new ElemID(constants.NETSUITE, 'generic_day_of_month')
const generic_day_of_weekElemID = new ElemID(constants.NETSUITE, 'generic_day_of_week')
const generic_entity_tabElemID = new ElemID(constants.NETSUITE, 'generic_entity_tab')
const generic_item_tabElemID = new ElemID(constants.NETSUITE, 'generic_item_tab')
const generic_itemoptionitemcol_fieldElemID = new ElemID(constants.NETSUITE, 'generic_itemoptionitemcol_field')
const generic_itemoptionitemcol_fieldtypeElemID = new ElemID(constants.NETSUITE, 'generic_itemoptionitemcol_fieldtype')
const generic_itemoptionitemcol_searchcomparefieldElemID = new ElemID(constants.NETSUITE, 'generic_itemoptionitemcol_searchcomparefield')
const generic_monthElemID = new ElemID(constants.NETSUITE, 'generic_month')
const generic_order_of_weekElemID = new ElemID(constants.NETSUITE, 'generic_order_of_week')
const generic_permissionElemID = new ElemID(constants.NETSUITE, 'generic_permission')
const generic_permission_levelElemID = new ElemID(constants.NETSUITE, 'generic_permission_level')
const generic_portletElemID = new ElemID(constants.NETSUITE, 'generic_portlet')
const generic_portletcolumnElemID = new ElemID(constants.NETSUITE, 'generic_portletcolumn')
const generic_repeat_timeElemID = new ElemID(constants.NETSUITE, 'generic_repeat_time')
const generic_repeat_time_in_minutesElemID = new ElemID(constants.NETSUITE, 'generic_repeat_time_in_minutes')
const generic_roleElemID = new ElemID(constants.NETSUITE, 'generic_role')
const generic_savedsearches_daterangeElemID = new ElemID(constants.NETSUITE, 'generic_savedsearches_daterange')
const generic_savedsearches_periodElemID = new ElemID(constants.NETSUITE, 'generic_savedsearches_period')
const generic_standard_fieldElemID = new ElemID(constants.NETSUITE, 'generic_standard_field')
const generic_standard_recordtypeElemID = new ElemID(constants.NETSUITE, 'generic_standard_recordtype')
const generic_standard_taskElemID = new ElemID(constants.NETSUITE, 'generic_standard_task')
const generic_standard_templateElemID = new ElemID(constants.NETSUITE, 'generic_standard_template')
const generic_standard_transactionsElemID = new ElemID(constants.NETSUITE, 'generic_standard_transactions')
const generic_tab_parentElemID = new ElemID(constants.NETSUITE, 'generic_tab_parent')
const generic_tab_typeElemID = new ElemID(constants.NETSUITE, 'generic_tab_type')
const generic_taskElemID = new ElemID(constants.NETSUITE, 'generic_task')
const generic_year_monthElemID = new ElemID(constants.NETSUITE, 'generic_year_month')
const hiding_actionsElemID = new ElemID(constants.NETSUITE, 'hiding_actions')
const itemcustomfield_itemsubtypeElemID = new ElemID(constants.NETSUITE, 'itemcustomfield_itemsubtype')
const itemnumbercustomfield_fieldElemID = new ElemID(constants.NETSUITE, 'itemnumbercustomfield_field')
const kpi_ranges_daterangeElemID = new ElemID(constants.NETSUITE, 'kpi_ranges_daterange')
const kpi_ranges_daterange_or_periodElemID = new ElemID(constants.NETSUITE, 'kpi_ranges_daterange_or_period')
const kpi_ranges_daterange_reportElemID = new ElemID(constants.NETSUITE, 'kpi_ranges_daterange_report')
const kpi_ranges_periodElemID = new ElemID(constants.NETSUITE, 'kpi_ranges_period')
const kpi_snapshots_customElemID = new ElemID(constants.NETSUITE, 'kpi_snapshots_custom')
const kpi_snapshots_daterangeElemID = new ElemID(constants.NETSUITE, 'kpi_snapshots_daterange')
const kpi_snapshots_daterange_or_periodElemID = new ElemID(constants.NETSUITE, 'kpi_snapshots_daterange_or_period')
const kpi_snapshots_formulaElemID = new ElemID(constants.NETSUITE, 'kpi_snapshots_formula')
const kpi_snapshots_internalElemID = new ElemID(constants.NETSUITE, 'kpi_snapshots_internal')
const kpiscorecards_comparisonsElemID = new ElemID(constants.NETSUITE, 'kpiscorecards_comparisons')
const kpiscorecards_highlight_conditionsElemID = new ElemID(constants.NETSUITE, 'kpiscorecards_highlight_conditions')
const kpiscorecards_highlight_iconsElemID = new ElemID(constants.NETSUITE, 'kpiscorecards_highlight_icons')
const kpiscorecards_useperiodsElemID = new ElemID(constants.NETSUITE, 'kpiscorecards_useperiods')
const locking_actionsElemID = new ElemID(constants.NETSUITE, 'locking_actions')
const overwriting_actionsElemID = new ElemID(constants.NETSUITE, 'overwriting_actions')
const plugintype_deployment_modelElemID = new ElemID(constants.NETSUITE, 'plugintype_deployment_model')
const plugintype_loglevelElemID = new ElemID(constants.NETSUITE, 'plugintype_loglevel')
const plugintype_statusElemID = new ElemID(constants.NETSUITE, 'plugintype_status')
const portlet_analytics_heightElemID = new ElemID(constants.NETSUITE, 'portlet_analytics_height')
const portlet_analytics_portlettypeElemID = new ElemID(constants.NETSUITE, 'portlet_analytics_portlettype')
const portlet_calendar_agendaElemID = new ElemID(constants.NETSUITE, 'portlet_calendar_agenda')
const portlet_customsearch_backgroundtypeElemID = new ElemID(constants.NETSUITE, 'portlet_customsearch_backgroundtype')
const portlet_customsearch_chartthemeElemID = new ElemID(constants.NETSUITE, 'portlet_customsearch_charttheme')
const portlet_customsearch_drilldownElemID = new ElemID(constants.NETSUITE, 'portlet_customsearch_drilldown')
const portlet_customsearch_savedsearchElemID = new ElemID(constants.NETSUITE, 'portlet_customsearch_savedsearch')
const portlet_kpi_employeesElemID = new ElemID(constants.NETSUITE, 'portlet_kpi_employees')
const portlet_kpi_highlightifElemID = new ElemID(constants.NETSUITE, 'portlet_kpi_highlightif')
const portlet_kpimeter_combined_snapshotsElemID = new ElemID(constants.NETSUITE, 'portlet_kpimeter_combined_snapshots')
const portlet_kpireport_orientationElemID = new ElemID(constants.NETSUITE, 'portlet_kpireport_orientation')
const portlet_kpireport_reportidElemID = new ElemID(constants.NETSUITE, 'portlet_kpireport_reportid')
const portlet_kpireport_restrictElemID = new ElemID(constants.NETSUITE, 'portlet_kpireport_restrict')
const portlet_list_typeElemID = new ElemID(constants.NETSUITE, 'portlet_list_type')
const portlet_quicksearch_genericElemID = new ElemID(constants.NETSUITE, 'portlet_quicksearch_generic')
const portlet_quicksearch_transactionElemID = new ElemID(constants.NETSUITE, 'portlet_quicksearch_transaction')
const portlet_quicksearch_typeElemID = new ElemID(constants.NETSUITE, 'portlet_quicksearch_type')
const portlet_reportsnapshot_backgroundtypeElemID = new ElemID(constants.NETSUITE, 'portlet_reportsnapshot_backgroundtype')
const portlet_reportsnapshot_chartthemeElemID = new ElemID(constants.NETSUITE, 'portlet_reportsnapshot_charttheme')
const portlet_reportsnapshot_charttypeElemID = new ElemID(constants.NETSUITE, 'portlet_reportsnapshot_charttype')
const portlet_reportsnapshot_daterangeElemID = new ElemID(constants.NETSUITE, 'portlet_reportsnapshot_daterange')
const portlet_reportsnapshot_displaytypeElemID = new ElemID(constants.NETSUITE, 'portlet_reportsnapshot_displaytype')
const portlet_reportsnapshot_graphlayoutElemID = new ElemID(constants.NETSUITE, 'portlet_reportsnapshot_graphlayout')
const portlet_reportsnapshot_reportperiodrangeElemID = new ElemID(constants.NETSUITE, 'portlet_reportsnapshot_reportperiodrange')
const portlet_reportsnapshot_snapshotElemID = new ElemID(constants.NETSUITE, 'portlet_reportsnapshot_snapshot')
const portlet_reportsnapshot_topxElemID = new ElemID(constants.NETSUITE, 'portlet_reportsnapshot_topx')
const portlet_trendgraph_backgroundtypeElemID = new ElemID(constants.NETSUITE, 'portlet_trendgraph_backgroundtype')
const portlet_trendgraph_chartthemeElemID = new ElemID(constants.NETSUITE, 'portlet_trendgraph_charttheme')
const portlet_trendgraph_charttypeElemID = new ElemID(constants.NETSUITE, 'portlet_trendgraph_charttype')
const portlet_trendgraph_trendtypeElemID = new ElemID(constants.NETSUITE, 'portlet_trendgraph_trendtype')
const reminders_highlighting_rules_colorsElemID = new ElemID(constants.NETSUITE, 'reminders_highlighting_rules_colors')
const reminders_standard_reminders_with_daysElemID = new ElemID(constants.NETSUITE, 'reminders_standard_reminders_with_days')
const reminders_standard_reminders_without_daysElemID = new ElemID(constants.NETSUITE, 'reminders_standard_reminders_without_days')
const report_date_rangeElemID = new ElemID(constants.NETSUITE, 'report_date_range')
const report_period_rangeElemID = new ElemID(constants.NETSUITE, 'report_period_range')
const role_centertypeElemID = new ElemID(constants.NETSUITE, 'role_centertype')
const role_fullrestrictionsElemID = new ElemID(constants.NETSUITE, 'role_fullrestrictions')
const role_restrictElemID = new ElemID(constants.NETSUITE, 'role_restrict')
const role_restrictionsElemID = new ElemID(constants.NETSUITE, 'role_restrictions')
const role_restrictionsegmentElemID = new ElemID(constants.NETSUITE, 'role_restrictionsegment')
const rolesubsidiaryoptionElemID = new ElemID(constants.NETSUITE, 'rolesubsidiaryoption')
const script_deploymentmodelElemID = new ElemID(constants.NETSUITE, 'script_deploymentmodel')
const script_eventtypeElemID = new ElemID(constants.NETSUITE, 'script_eventtype')
const script_frequencyElemID = new ElemID(constants.NETSUITE, 'script_frequency')
const script_loglevelElemID = new ElemID(constants.NETSUITE, 'script_loglevel')
const script_portlettypeElemID = new ElemID(constants.NETSUITE, 'script_portlettype')
const script_recurrenceminutesElemID = new ElemID(constants.NETSUITE, 'script_recurrenceminutes')
const script_returnrecordtypeElemID = new ElemID(constants.NETSUITE, 'script_returnrecordtype')
const script_scripttypeElemID = new ElemID(constants.NETSUITE, 'script_scripttype')
const script_settingElemID = new ElemID(constants.NETSUITE, 'script_setting')
const script_starttimeElemID = new ElemID(constants.NETSUITE, 'script_starttime')
const script_statusElemID = new ElemID(constants.NETSUITE, 'script_status')
const scriptdeployment_recordtypeElemID = new ElemID(constants.NETSUITE, 'scriptdeployment_recordtype')
const snapshot_type_customElemID = new ElemID(constants.NETSUITE, 'snapshot_type_custom')
const snapshot_type_date_range_comparableElemID = new ElemID(constants.NETSUITE, 'snapshot_type_date_range_comparable')
const snapshot_type_date_range_not_comparableElemID = new ElemID(constants.NETSUITE, 'snapshot_type_date_range_not_comparable')
const snapshot_type_period_range_comparableElemID = new ElemID(constants.NETSUITE, 'snapshot_type_period_range_comparable')
const snapshot_type_period_range_not_comparableElemID = new ElemID(constants.NETSUITE, 'snapshot_type_period_range_not_comparable')
const snapshot_type_trendgraphElemID = new ElemID(constants.NETSUITE, 'snapshot_type_trendgraph')
const sublist_standard_fieldsElemID = new ElemID(constants.NETSUITE, 'sublist_standard_fields')
const suiteletdeployment_tasktypeElemID = new ElemID(constants.NETSUITE, 'suiteletdeployment_tasktype')
const tfadurationElemID = new ElemID(constants.NETSUITE, 'tfaduration')
const tfarequiredElemID = new ElemID(constants.NETSUITE, 'tfarequired')
const transactionform_advancedtemplateElemID = new ElemID(constants.NETSUITE, 'transactionform_advancedtemplate')
const transactionform_buttonidElemID = new ElemID(constants.NETSUITE, 'transactionform_buttonid')
const transactionform_checkboxdefaultElemID = new ElemID(constants.NETSUITE, 'transactionform_checkboxdefault')
const transactionform_columnidElemID = new ElemID(constants.NETSUITE, 'transactionform_columnid')
const transactionform_fieldidElemID = new ElemID(constants.NETSUITE, 'transactionform_fieldid')
const transactionform_htmllayoutElemID = new ElemID(constants.NETSUITE, 'transactionform_htmllayout')
const transactionform_pdflayoutElemID = new ElemID(constants.NETSUITE, 'transactionform_pdflayout')
const transactionform_roleidElemID = new ElemID(constants.NETSUITE, 'transactionform_roleid')
const transactionform_standardElemID = new ElemID(constants.NETSUITE, 'transactionform_standard')
const transactionform_sublistidElemID = new ElemID(constants.NETSUITE, 'transactionform_sublistid')
const transactionform_subtabidElemID = new ElemID(constants.NETSUITE, 'transactionform_subtabid')
const transactionform_tabidElemID = new ElemID(constants.NETSUITE, 'transactionform_tabid')
const transactionform_totalboxidElemID = new ElemID(constants.NETSUITE, 'transactionform_totalboxid')
const transactionform_trantypeElemID = new ElemID(constants.NETSUITE, 'transactionform_trantype')
const translationcollection_defaultlanguageElemID = new ElemID(constants.NETSUITE, 'translationcollection_defaultlanguage')
const webapp_entrytypeElemID = new ElemID(constants.NETSUITE, 'webapp_entrytype')
const workflow_condition_typeElemID = new ElemID(constants.NETSUITE, 'workflow_condition_type')
const workflow_eventtypeElemID = new ElemID(constants.NETSUITE, 'workflow_eventtype')
const workflow_keephistoryElemID = new ElemID(constants.NETSUITE, 'workflow_keephistory')
const workflow_order_of_weekElemID = new ElemID(constants.NETSUITE, 'workflow_order_of_week')
const workflow_releasestatusElemID = new ElemID(constants.NETSUITE, 'workflow_releasestatus')
const workflow_sublistsElemID = new ElemID(constants.NETSUITE, 'workflow_sublists')
const workflow_timeunitElemID = new ElemID(constants.NETSUITE, 'workflow_timeunit')
const workflow_triggertypeElemID = new ElemID(constants.NETSUITE, 'workflow_triggertype')
const workflowaction_attachmenttypeElemID = new ElemID(constants.NETSUITE, 'workflowaction_attachmenttype')
const workflowaction_buttonidElemID = new ElemID(constants.NETSUITE, 'workflowaction_buttonid')
const workflowaction_createline_positionElemID = new ElemID(constants.NETSUITE, 'workflowaction_createline_position')
const workflowaction_displaytypeElemID = new ElemID(constants.NETSUITE, 'workflowaction_displaytype')
const workflowaction_eventtypeElemID = new ElemID(constants.NETSUITE, 'workflowaction_eventtype')
const workflowaction_radioschedulemodeElemID = new ElemID(constants.NETSUITE, 'workflowaction_radioschedulemode')
const workflowaction_recipienttypeElemID = new ElemID(constants.NETSUITE, 'workflowaction_recipienttype')
const workflowaction_sendertypeElemID = new ElemID(constants.NETSUITE, 'workflowaction_sendertype')
const workflowaction_transtatementtypeElemID = new ElemID(constants.NETSUITE, 'workflowaction_transtatementtype')
const workflowaction_triggertypeElemID = new ElemID(constants.NETSUITE, 'workflowaction_triggertype')
const workflowaction_triggertype_clientElemID = new ElemID(constants.NETSUITE, 'workflowaction_triggertype_client')
const workflowaction_valuedateElemID = new ElemID(constants.NETSUITE, 'workflowaction_valuedate')
const workflowaction_valuetypeElemID = new ElemID(constants.NETSUITE, 'workflowaction_valuetype')
const workflowtransition_triggertypeElemID = new ElemID(constants.NETSUITE, 'workflowtransition_triggertype')

export const enums: Record<string, PrimitiveType> = {
  addressform_fieldid: new PrimitiveType({
    elemID: addressform_fieldidElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ADDR1', 'ADDR2', 'ADDR3', 'ADDRESSEE', 'ADDRPHONE', 'ATTENTION', 'CITY', 'COUNTRY', 'STATE', 'ZIP'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, addressform_fieldidElemID.name],
  }),
  advancedpdftemplate_standard: new PrimitiveType({
    elemID: advancedpdftemplate_standardElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['OLDSTDTMPLPACKINGSLIP', 'STDTMPLAUVENDPYMT', 'STDTMPLAUVOUCHERCHECK', 'STDTMPLBCUSTTRAN', 'STDTMPLBOM', 'STDTMPLCASHRFND', 'STDTMPLCASHRFNDST', 'STDTMPLCASHSALE', 'STDTMPLCASHSALEST', 'STDTMPLCHECK', 'STDTMPLCUSTCRED', 'STDTMPLCUSTCREDST', 'STDTMPLCUSTDEP', 'STDTMPLCUSTINVC', 'STDTMPLCUSTINVCST', 'STDTMPLCUSTPYMT', 'STDTMPLEMPTY', 'STDTMPLEXPREPT', 'STDTMPLFRPICKINGTICKET', 'STDTMPLGLIMPACT', 'STDTMPLHCUSTTRAN', 'STDTMPLINVCGROUP2ST', 'STDTMPLINVCGROUPST', 'STDTMPLITEMLABEL', 'STDTMPLJCUSTTRAN', 'STDTMPLJOURNAL', 'STDTMPLMAILINGLABEL', 'STDTMPLMULTICURRSTMT', 'STDTMPLPACKINGSLIP', 'STDTMPLPAYCHECK', 'STDTMPLPAYMENTVOUCHER', 'STDTMPLPCUSTTRAN', 'STDTMPLPERIODENDJOURNAL', 'STDTMPLPICKINGTICKET', 'STDTMPLPRICELIST', 'STDTMPLPURCHORD', 'STDTMPLPURCHORDST', 'STDTMPLQUOTE', 'STDTMPLQUOTEST', 'STDTMPLRTNAUTH', 'STDTMPLRTNAUTHST', 'STDTMPLSALESORD', 'STDTMPLSALESORDST', 'STDTMPLSCUSTTRAN', 'STDTMPLSHIPPINGLABEL', 'STDTMPLSTATEMENT', 'STDTMPLSVENDBILL', 'STDTMPLSVENDCRED', 'STDTMPLSVPREP', 'STDTMPLUKCHECK', 'STDTMPLUKVENDPYMT', 'STDTMPLUKVOUCHERCHECK', 'STDTMPLUSVENDPYMT', 'STDTMPLUSVOUCHERCHECK', 'STDTMPLWAVE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, advancedpdftemplate_standardElemID.name],
  }),
  allrecord_script_deployment_recordtype: new PrimitiveType({
    elemID: allrecord_script_deployment_recordtypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['RECORD'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, allrecord_script_deployment_recordtypeElemID.name],
  }),
  centercategory_tasktype: new PrimitiveType({
    elemID: centercategory_tasktypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CARD', 'EDIT', 'LINK', 'LIST', 'SCRIPT', 'SRCH', 'SRCH_FORM', 'SRCH_RSLT'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, centercategory_tasktypeElemID.name],
  }),
  configurable_features: new PrimitiveType({
    elemID: configurable_featuresElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCOUNTING', 'ACCOUNTINGPERIODS', 'ACHVEND', 'ACTIVITYCODES', 'ADDONS', 'ADMINKERNELPERM', 'ADVANCEDBILLOFMATERIALS', 'ADVANCEDEMPLOYEEPERMISSIONS', 'ADVANCEDGVMNTISSUEDIDTRACKING', 'ADVANCEDJOBS', 'ADVANCEDNUMBERINGSEQUENCES', 'ADVANCEDPRINTING', 'ADVANCEDPROJECTACCOUNTING', 'ADVANCEDREVENUERECOGNITION', 'ADVANCEDSITECUST', 'ADVANCEDSITEMANAGEMENT', 'ADVBILLING', 'ADVBINSERIALLOTMGMT', 'ADVFORECASTING', 'ADVINVENTORYMGMT', 'ADVPARTNERACCESS', 'ADVRECEIVING', 'ADVSHIPPING', 'ADVSUBSCRIPTIONBILLING', 'ADVTAXENGINE', 'ADVWEBREPORTS', 'ADVWEBSEARCH', 'ALTSALESAMOUNT', 'AMORTIZATION', 'APPROVALROUTING', 'ASSEMBLIES', 'ASYNCCUSTOMER', 'ASYNCSALESORDER', 'AUTOAPPLYPROMOTIONS', 'AUTOLOCATIONASSIGNMENT', 'AVAILABLETOPROMISE', 'BALANCING_SEGMENTS', 'BARCODES', 'BASICGVMNTISSUEDIDTRACKING', 'BILLINGACCOUNTS', 'BILLINGCLASSES', 'BILLINGRATECARDS', 'BILLINGWORKCENTER', 'BILLSCOSTS', 'BINMANAGEMENT', 'BLANKETPURCHASEORDERS', 'CAMPAIGNSUBSCRIPTIONS', 'CCTRACKING', 'CENTRALIZEDPURCHASINGBILLING', 'CHARGEBASEDBILLING', 'CHECKOUTSUBDOMAIN', 'CLASSES', 'COMMERCECATEGORIES', 'COMMERCESEARCHANALYTICS', 'COMMISSIONONCUSTOMFIELDS', 'COMMISSIONS', 'COMPENSATIONTRACKING', 'CONSOLPAYMENTS', 'CREATESUITEBUNDLES', 'CRM', 'CRMTIME', 'CRM_TEMPLATE_CATEGORIES', 'CROSSSUBSIDIARYFULFILLMENT', 'CUSTOMCODE', 'CUSTOMERACCESS', 'CUSTOMGLLINES', 'CUSTOMRECORDS', 'CUSTOMSEGMENTS', 'CUSTOMTRANSACTIONS', 'DEPARTMENTS', 'DISTRIBUTIONRESOURCEPLANNING', 'DOCUMENTPUBLISHING', 'DOWNLOADITEMS', 'DROPSHIPMENTS', 'DUPLICATES', 'DYNALLOCATION', 'EFFECTIVEDATING', 'EFT', 'EMAILINTEGRATION', 'EMPLOYEECENTERPUBLISHING', 'EMPLOYEECHANGEREQUESTS', 'EMPPERMS', 'ENFORCE_INTEGRATION_ASD', 'ENHANCEDINVENTORYLOCATION', 'ENHANCEDPREMIERPAYROLL', 'ESCALATIONRULES', 'ESTIMATES', 'EXPENSEALLOCATION', 'EXPREPORTS', 'EXTCRM', 'EXTREMELIST', 'EXTSTORE', 'FCADVANCEDSECURITY', 'FCEXPENSE', 'FCEXPENSEMIGRATECONTROLLER', 'FULFILLMENTREQUEST', 'FXRATETYPE', 'FXRATEUPDATES', 'GAINLOSSACCTMAPPING', 'GIFTCERTIFICATES', 'GLAUDITNUMBERING', 'GROSSPROFIT', 'GROUPAVERAGECOSTING', 'HELPDESK', 'HISTORICALMETRICS', 'HRANALYSIS', 'INBOUNDCASEEMAIL', 'INBOUNDSHIPMENT', 'INSTALLMENTS', 'INTERCOMPANYAUTODROPSHIP', 'INTERCOMPANYAUTOELIMINATION', 'INTERCOMPANYFRAMEWORK', 'INTERCOMPANYTIMEEXPENSE', 'INTERNATIONALPHONENUMBERS', 'INTRANET', 'INTRANSITPAYMENTS', 'INVENTORY', 'INVENTORYCOUNT', 'INVENTORYSTATUS', 'INVOICEGROUP', 'IPADDRESSRULES', 'ISSUEDB', 'ITEMDEMANDPLANNING', 'ITEMOPTIONS', 'JOBCOSTING', 'JOBMANAGEMENT', 'JOBREQUISITION', 'JOBS', 'KILLINBOUNDSSO', 'KNOWLEDGEBASE', 'KPIREPORTS', 'KUDOS', 'LANDEDCOST', 'LEADMANAGEMENT', 'LOCATIONS', 'LOTNUMBEREDINVENTORY', 'MAILMERGE', 'MARKETING', 'MATERIALREQUIREMENTSPLANNING', 'MATRIXITEMS', 'MERCHANDISEHIERARCHY', 'MFGROUTING', 'MFGWORKINPROCESS', 'MOBILEPUSHNTF', 'MOSS', 'MULTICURRENCY', 'MULTICURRENCYCUSTOMER', 'MULTICURRENCYVENDOR', 'MULTILANGUAGE', 'MULTILOCINVT', 'MULTIPARTNER', 'MULTIPLEBUDGETS', 'MULTIPLECALENDARS', 'MULTISHIPTO', 'MULTISUBSIDIARYCUSTOMER', 'MULTIVENDOR', 'MULTPRICE', 'NSASOIDCPROVIDER', 'OAUTH2', 'OIDC', 'ONLINEORDERING', 'OPENIDSSO', 'OPPORTUNITIES', 'OUTSOURCEDMFG', 'PARTNERACCESS', 'PARTNERCOMMISSIONS', 'PAYABLES', 'PAYCHECKJOURNAL', 'PAYMENTINSTRUMENTS', 'PAYPALINTEGRATION', 'PAYROLL', 'PAYROLLSERVICE', 'PERFORMANCEMANAGEMENT', 'PERIODENDJOURNALENTRIES', 'PERSONALIZED_CATALOG_VIEWS', 'PICKPACKSHIP', 'PI_REMOVAL', 'PLANNEDWORK', 'PRM', 'PROMOCODES', 'PURCHASECARDDATA', 'PURCHASECONTRACTS', 'PURCHASEORDERS', 'PURCHASEREQS', 'QUANTITYPRICING', 'RECEIVABLES', 'REQUIREDDEPOSITWORKFLOW', 'REQUISITIONS', 'RESOURCEALLOCATIONS', 'RESTWEBSERVICES', 'RETURNAUTHS', 'REVENUECOMMITMENTS', 'REVENUERECOGNITION', 'REVRECSALESORDERFORECASTING', 'REVRECVSOE', 'RFQ', 'RULEBASEDRECOGNITIONTREATMENT', 'SALESCAMPAIGNS', 'SALESCHANNELALLOCATION', 'SALESORDERS', 'SAMLSSO', 'SERIALIZEDINVENTORY', 'SERVERSIDESCRIPTING', 'SERVICEPRINTEDCHECKS', 'SERVICEPRINTEDW2S', 'SFA', 'SHIPPINGLABELS', 'SITEBUILDER', 'SITEBUILDER_STORE', 'SITELOCATIONALIASES', 'SOFTDESCRIPTORS', 'STACKABLEPROMOTIONS', 'STANDARDCOSTING', 'STATACCOUNTING', 'STOREPICKUP', 'SUBSCRIPTIONBILLING', 'SUITEANALYTICSCONNECT', 'SUITEAPPCONTROLCENTER', 'SUITECOMMERCE', 'SUITECOMMERCE_ADVANCED', 'SUITECOMMERCE_IN_STORE', 'SUITECOMMERCE_MY_ACCOUNT', 'SUITESIGNON', 'SUITE_OAX_CONNECTOR', 'SUPPLYALLOCATION', 'SUPPLYCHAINCONTROLTOWER', 'SUPPLYCHAINPREDICTEDRISKS', 'SUPPORT', 'TABLEAU', 'TBA', 'TEAMSELLING', 'TELEPHONY', 'TERMINATIONREASONTRACKING', 'TIMEBASEDPRICING', 'TIMEOFFMANAGEMENT', 'TIMETRACKING', 'TRANDELETIONREASONCODE', 'UNITSOFMEASURE', 'UPSELL', 'URLCOMPONENTALIASES', 'USR', 'VENDORACCESS', 'VENDORPREPAYMENTS', 'VENDORRETURNAUTHS', 'WBS', 'WEBAPPLICATIONS', 'WEBDUPLICATEEMAILMANAGEMENT', 'WEBHOSTING', 'WEBSERVICESEXTERNAL', 'WEBSITE', 'WEEKLYTIMESHEETS', 'WEEKLYTIMESHEETSNEWUI', 'WMSSYSTEM', 'WORKFLOW', 'WORKORDERS'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, configurable_featuresElemID.name],
  }),
  countries: new PrimitiveType({
    elemID: countriesElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AN', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CS', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EA', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'IC', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'XK', 'YE', 'YT', 'ZA', 'ZM', 'ZW'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, countriesElemID.name],
  }),
  crmcustomfield_searchcomparefield: new PrimitiveType({
    elemID: crmcustomfield_searchcomparefieldElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['STDEVENTALLOCATIONPROJECT', 'STDEVENTALLOCATIONPROJECTTASK', 'STDEVENTALLOCATIONTYPE', 'STDEVENTAPPROVALSTATUS', 'STDEVENTASSIGNED', 'STDEVENTAUDIENCE', 'STDEVENTCALLSTATUS', 'STDEVENTCAMPAIGNCATEGORY', 'STDEVENTCASECATEGORY', 'STDEVENTCASEPRIORITY', 'STDEVENTCASEPROFILE', 'STDEVENTCASESTATUS', 'STDEVENTCOMPANY', 'STDEVENTCONSTRAINTTYPE', 'STDEVENTCONTACT', 'STDEVENTCUSTOMER', 'STDEVENTCUSTOMFORM', 'STDEVENTDUPLICATEOF', 'STDEVENTFAMILY', 'STDEVENTHELPDESKEMPLOYEE', 'STDEVENTISSUE', 'STDEVENTISSUESTATUS', 'STDEVENTISSUETYPE', 'STDEVENTITEM', 'STDEVENTJOB', 'STDEVENTMILESTONE', 'STDEVENTMODULE', 'STDEVENTNEXTAPPROVER', 'STDEVENTOFFER', 'STDEVENTOPPORTUNITY', 'STDEVENTORDER', 'STDEVENTORGANIZER', 'STDEVENTORIGIN', 'STDEVENTOWNER', 'STDEVENTPARENT', 'STDEVENTPRIORITY', 'STDEVENTPRODUCT', 'STDEVENTPRODUCTTEAM', 'STDEVENTPROMOTIONCODE', 'STDEVENTREMINDERMINUTES', 'STDEVENTREMINDERTYPE', 'STDEVENTREPORTEDBY', 'STDEVENTREPRODUCE', 'STDEVENTREQUESTEDBY', 'STDEVENTRESOURCE', 'STDEVENTREVIEWER', 'STDEVENTSEARCHENGINE', 'STDEVENTSEVERITY', 'STDEVENTSOURCE', 'STDEVENTSTATUS', 'STDEVENTSUBSIDIARY', 'STDEVENTSUPPORTCASE', 'STDEVENTTASKSTATUS', 'STDEVENTTRANSACTION', 'STDEVENTVERTICAL'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, crmcustomfield_searchcomparefieldElemID.name],
  }),
  csvimport_columndelimiter: new PrimitiveType({
    elemID: csvimport_columndelimiterElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['COMMA', 'PIPE', 'SEMICOLON', 'SPACE', 'TAB'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, csvimport_columndelimiterElemID.name],
  }),
  csvimport_customrecordtype: new PrimitiveType({
    elemID: csvimport_customrecordtypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CUSTOMRECORD'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, csvimport_customrecordtypeElemID.name],
  }),
  csvimport_customtransactiontype: new PrimitiveType({
    elemID: csvimport_customtransactiontypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CUSTOMTRANSACTION'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, csvimport_customtransactiontypeElemID.name],
  }),
  csvimport_datahandling: new PrimitiveType({
    elemID: csvimport_datahandlingElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ADD', 'ADDUPDATE', 'UPDATE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, csvimport_datahandlingElemID.name],
  }),
  csvimport_decimaldelimiter: new PrimitiveType({
    elemID: csvimport_decimaldelimiterElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['COMMA', 'PERIOD'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, csvimport_decimaldelimiterElemID.name],
  }),
  csvimport_encoding: new PrimitiveType({
    elemID: csvimport_encodingElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['Big5', 'EUC_KR', 'GB18030', 'GBK', 'ISO_2022_KR', 'ISO_8859_1', 'MacRoman', 'SHIFT_JIS', 'UTF_8', 'windows-1252'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, csvimport_encodingElemID.name],
  }),
  csvimport_entryform_standard: new PrimitiveType({
    elemID: csvimport_entryform_standardElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['BILLOFDISTRIBUTIONFORM', 'CLASSSEGMENTMAPPINGFORM', 'DEPARTMENTSEGMENTMAPPINGFORM', 'DISTRIBUTIONNETWORKFORM', 'INVENTORYCOSTTEMPLATEFORM', 'LABORCATEGORYFORM', 'LABORCOSTELEMENTFORM', 'LOCATIONCOSTINGGROUPFORM', 'LOCATIONSEGMENTMAPPINGFORM', 'MANUFACTURINGCOSTTEMPLATEFORM', 'MANUFACTURINGROUTINGFORM', 'MANUFACTURINGTASK', 'SHIPPINGPARTNERPACKAGEFORM', 'SHIPPINGPARTNERREGISTRATIONFORM', 'SHIPPINGPARTNERSHIPMENTFORM', 'STANDARDACCOUNTINGBOOKFORM', 'STANDARDADDRESSFORM', 'STANDARDASCHARGEDPROJECTREVENUERULE', 'STANDARDAUTOMATICLOCATIONASSIGNMENTCONFIGURATIONFORM', 'STANDARDAUTOMATICLOCATIONASSIGNMENTRULEFORM', 'STANDARDBILLINGACCOUNT', 'STANDARDBILLINGRATECARDFORM', 'STANDARDBILLOFMATERIALS', 'STANDARDBILLOFMATERIALSREVISION', 'STANDARDCAMPAIGNFORM', 'STANDARDCASEFORM', 'STANDARDCHARGEFORM', 'STANDARDCOMPETITORFORM', 'STANDARDCONTACTFORM', 'STANDARDCUSTOMERFORM', 'STANDARDDESCRIPTIONFORM', 'STANDARDDISCOUNTFORM', 'STANDARDEMPLOYEEFORM', 'STANDARDENTITYACCOUNTMAPPINGFORM', 'STANDARDEVENTFORM', 'STANDARDEXPENSEAMORTIZATIONEVENTFORM', 'STANDARDEXPENSEAMORTIZATIONRULEFORM', 'STANDARDEXPENSEBASEDCHARGERULEFORM', 'STANDARDEXPENSEFORM', 'STANDARDEXPENSEPLANFORM', 'STANDARDFAIRVALUEFORMULAFORM', 'STANDARDFAIRVALUEPRICEFORM', 'STANDARDFIXEDAMOUNTPROJECTREVENUERULE', 'STANDARDFIXEDDATECHARGERULEFORM', 'STANDARDGAINLOSSACCOUNTMAPPINGFORM', 'STANDARDGENERICRESOURCEFORM', 'STANDARDGLOBALACCOUNTMAPPINGFORM', 'STANDARDGLOBALINVENTORYRELATIONSHIPFORM', 'STANDARDGROUPITEMFORM', 'STANDARDHELPDESKFORM', 'STANDARDINBOUNDSHIPMENT', 'STANDARDINTERCOMPANYCUSTOMERFORM', 'STANDARDINTERCOMPANYVENDORFORM', 'STANDARDINVENTORYDETAILFORM', 'STANDARDINVENTORYPARTFORM', 'STANDARDINVENTORYSTATUS', 'STANDARDINVOICEGROUP', 'STANDARDISSUEFORM', 'STANDARDITEMACCOUNTMAPPINGFORM', 'STANDARDITEMDEMANDPLANFORM', 'STANDARDITEMLOCATIONCONFIGURATIONFORM', 'STANDARDITEMPROCESSFAMILYFORM', 'STANDARDITEMPROCESSGROUPFORM', 'STANDARDITEMREVENUECATEGORYFORM', 'STANDARDITEMSUPPLYPLANFORM', 'STANDARDJOBFORM', 'STANDARDLABORBASEDPROJECTREVENUERULE', 'STANDARDLEADFORM', 'STANDARDMILESTONECHARGERULEFORM', 'STANDARDNEXUS', 'STANDARDNONINVENTORYPARTFORM', 'STANDARDNOTEFORM', 'STANDARDPARTNERFORM', 'STANDARDPAYMENTFORM', 'STANDARDPERCENTCOMPLETEPROJECTREVENUERULE', 'STANDARDPHONECALLFORM', 'STANDARDPLANNEDREVENUEFORM', 'STANDARDPLANNEDSTANDARDCOSTFORM', 'STANDARDPRICEBOOKFORM', 'STANDARDPRICEPLANFORM', 'STANDARDPROJECTBUDGETFORM', 'STANDARDPROJECTICCHARGEREQFORM', 'STANDARDPROJECTPROGRESSCHARGERULEFORM', 'STANDARDPROJECTTASKFORM', 'STANDARDPROJECTTEMPLATEFORM', 'STANDARDPROMOTIONCODEFIXEDPRICE', 'STANDARDPROMOTIONCODEFORM', 'STANDARDPROMOTIONCODEFREEGIFT', 'STANDARDPROMOTIONCODEITEM', 'STANDARDPROMOTIONCODEORDER', 'STANDARDPROMOTIONCODESHIPPING', 'STANDARDPURCHASERULEFORM', 'STANDARDREGIONFORM', 'STANDARDRESOURCEALLOCATIONFORM', 'STANDARDRESOURCEGROUPFORM', 'STANDARDREVENUEELEMENTFORM', 'STANDARDREVENUERECOGNITIONEVENTFORM', 'STANDARDREVENUERECOGNITIONRULEFORM', 'STANDARDSALESTAXITEM', 'STANDARDSOLUTIONFORM', 'STANDARDSTANDARDCOSTVERSIONFORM', 'STANDARDSUBSCRIPTIONCHANGEORDER', 'STANDARDSUBSCRIPTIONFORM', 'STANDARDSUBSCRIPTIONLINEFORM', 'STANDARDSUBSCRIPTIONPLANFORM', 'STANDARDSUPPLYCHAINSNAPSHOT', 'STANDARDTASKFORM', 'STANDARDTAXTYPE', 'STANDARDTIMEBASEDCHARGERULEFORM', 'STANDARDTIMEENTRYFORM', 'STANDARDTIMESHEETFORM', 'STANDARDTIMETRACKINGFORM', 'STANDARDUSAGEFORM', 'STANDARDVENDORFORM', 'STANDARDWBSFORM', 'STANDARDWORKASSIGNMENT', 'STDBONUSFORM', 'STDFORMATPROFILEFORM', 'STDIMPORTEDEMPLOYEEEXPENSEFORM', 'STDPLANNEDORDERFORM', 'STDPLANNINGITEMCATEGORYFORM', 'STDPLANNINGITEMGROUPFORM', 'STDPLANNINGRULEGROUPFORM', 'STDSALESCHANNELFORM', 'STDSTUDENTRECORDFORM', 'STDSUPPLYCHAINSNAPSHOTSIMULATIONFORM', 'STDSUPPLYCHANGEORDERFORM', 'STDSUPPLYPLANDEFINITIONFORM'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, csvimport_entryform_standardElemID.name],
  }),
  csvimport_recordtypes: new PrimitiveType({
    elemID: csvimport_recordtypesElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCOUNT', 'ADVINTERCOMPANYJOURNALENTRY', 'ASSEMBLYITEM', 'BILLINGACCOUNT', 'BIN', 'BOM', 'BOMREVISION', 'BUDGETEXCHANGERATE', 'CALENDAREVENT', 'CASHSALE', 'CHECK', 'CLASSIFICATION', 'CMSPAGE', 'COMMERCECATEGORY', 'CONSOLIDATEDEXCHANGERATE', 'CONTACT', 'CREDITCARDCHARGE', 'CREDITCARDREFUND', 'CREDITMEMO', 'CURRENCYRATE', 'CUSTOMER', 'CUSTOMERANDCONTACT', 'CUSTOMERPAYMENT', 'CUSTOMERSUBSIDIARYRELATIONSHIP', 'CUSTOMLIST', 'CUSTOMPURCHASE', 'CUSTOMRECORD', 'CUSTOMSALE', 'CUSTOMTRANSACTION', 'DEPARTMENT', 'DESCRIPTIONITEM', 'DISCOUNTITEM', 'EMPLOYEE', 'ESTIMATE', 'EXPENSECATEGORY', 'EXPENSEREPORT', 'FAIRVALUEPRICE', 'GAINLOSSACCTMAPPING', 'GENERALTOKEN', 'GLOBALACCOUNTMAPPING', 'HCMJOB', 'INBOUNDSHIPMENT', 'INTERCOMPANYJOURNALENTRY', 'INVENTORYADJUSTMENT', 'INVENTORYCOSTREVALUATION', 'INVENTORYITEM', 'INVENTORYTRANSFER', 'INVOICE', 'ISSUE', 'ITEMACCOUNTMAPPING', 'ITEMCOLLECTION', 'ITEMCOLLECTIONITEMMAP', 'ITEMDEMANDPLAN', 'ITEMGROUP', 'ITEMLOCATIONCONFIGURATION', 'ITEMREVISION', 'ITEMSUPPLYPLAN', 'JOB', 'JOURNALENTRY', 'KITITEM', 'LEAD', 'LEADANDCONTACT', 'LOCATION', 'LOTNUMBEREDASSEMBLYITEM', 'LOTNUMBEREDINVENTORYITEM', 'MANUFACTURINGCOSTTEMPLATE', 'MANUFACTURINGROUTING', 'MARKUPITEM', 'MERCHANDISEHIERARCHYNODE', 'MESSAGE', 'NONINVENTORYPURCHASEITEM', 'NONINVENTORYRESALEITEM', 'NONINVENTORYSALEITEM', 'NOTE', 'OPPORTUNITY', 'OTHERCHARGEPURCHASEITEM', 'OTHERCHARGERESALEITEM', 'OTHERCHARGESALEITEM', 'PARTNER', 'PAYCHECK', 'PAYMENTCARD', 'PAYMENTCARDTOKEN', 'PAYMENTITEM', 'PERIODENDJOURNAL', 'PHONECALL', 'PRICEBOOK', 'PRICEPLAN', 'PROSPECT', 'PROSPECTANDCONTACT', 'PURCHASEORDER', 'RESOURCEALLOCATION', 'RETURNAUTHORIZATION', 'SALESORDER', 'SERIALIZEDASSEMBLYITEM', 'SERIALIZEDINVENTORYITEM', 'SERVICEPURCHASEITEM', 'SERVICERESALEITEM', 'SERVICESALEITEM', 'SITECATEGORY', 'SOLUTION', 'STATISTICALJOURNALENTRY', 'SUBSCRIPTION', 'SUBSCRIPTIONCHANGEORDER', 'SUBSCRIPTIONLINE', 'SUBSCRIPTIONPLAN', 'SUBTOTALITEM', 'SUPPORTCASE', 'TASK', 'TIMEBILL', 'TIMEOFFCHANGE', 'TIMESHEET', 'TOPIC', 'TRANSFERORDER', 'USAGE', 'VENDOR', 'VENDORBILL', 'VENDORCREDIT', 'VENDORPAYMENT', 'VENDORRETURNAUTHORIZATION', 'VENDORSUBSIDIARYRELATIONSHIP'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, csvimport_recordtypesElemID.name],
  }),
  csvimport_referencetype: new PrimitiveType({
    elemID: csvimport_referencetypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['EXTERNAL_ID', 'INTERNAL_ID', 'NAME', 'SCRIPT_ID'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, csvimport_referencetypeElemID.name],
  }),
  csvimport_transactionform_standard: new PrimitiveType({
    elemID: csvimport_transactionform_standardElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['INVENTORYSTATUSCHANGE', 'STANDARDASSEMBLYBUILD', 'STANDARDASSEMBLYUNBUILD', 'STANDARDBILLPAYMENT', 'STANDARDBILLPAYMENTSFORM', 'STANDARDBINPUTAWAYWORKSHEETFORM', 'STANDARDBINTRANSFERFORM', 'STANDARDBLANKETPURCHASEORDER', 'STANDARDBOM', 'STANDARDCANADAFINANCECHARGE', 'STANDARDCASHREFUND', 'STANDARDCASHSALE', 'STANDARDCHECK', 'STANDARDCOMMISSIONFORM', 'STANDARDCREDITCARDCHARGE', 'STANDARDCREDITMEMO', 'STANDARDCURRENCYREVALUATIONFORM', 'STANDARDCUSTOMERDEPOSIT', 'STANDARDCUSTOMERPAYMENT', 'STANDARDCUSTOMERPAYMENTAUTHORIZATION', 'STANDARDCUSTOMERREFUND', 'STANDARDDEPOSIT', 'STANDARDDEPOSITAPPLICATIONFORM', 'STANDARDDROPSHIPPURCHASEORDER', 'STANDARDESTIMATE', 'STANDARDEXPENSEREPORT', 'STANDARDFINANCECHARGE', 'STANDARDFULFILLMENTREQUEST', 'STANDARDFULFILLMENTREQUESTPICKINGTICKET', 'STANDARDINVENTORYADJUSTMENT', 'STANDARDINVENTORYCOSTREVALUATION', 'STANDARDINVENTORYCOUNT', 'STANDARDINVENTORYDISTRIBUTIONFORM', 'STANDARDINVENTORYTRANSFER', 'STANDARDINVENTORYWORKSHEET', 'STANDARDITEMFULFILLMENT', 'STANDARDITEMRECEIPT', 'STANDARDJOURNALENTRY', 'STANDARDOPPORTUNITY', 'STANDARDOUTSOURCEDPURCHASEORDER', 'STANDARDPACKINGSLIP', 'STANDARDPAYCHECK2FORM', 'STANDARDPAYCHECKFORM', 'STANDARDPAYCHECKJOURNAL', 'STANDARDPAYROLLADJUSTMENTFORM', 'STANDARDPAYROLLLIABILITYCHECKFORM', 'STANDARDPERIODENDJOURNAL', 'STANDARDPICKINGTICKET', 'STANDARDPRICELIST', 'STANDARDPRODUCTINVOICE', 'STANDARDPROFESSIONALINVOICE', 'STANDARDPROGRESSINVOICE', 'STANDARDPURCHASECONTRACT', 'STANDARDPURCHASEORDER', 'STANDARDPURCHTYPECUSTOMTRANSACTION', 'STANDARDREMITTANCESLIP', 'STANDARDREQUESTFORQUOTE', 'STANDARDREQUISITION', 'STANDARDRETURNAUTHORIZATIONCASH', 'STANDARDRETURNAUTHORIZATIONCREDIT', 'STANDARDRETURNFORM', 'STANDARDREVENUEARRANGEMENT', 'STANDARDREVENUECOMMITMENT', 'STANDARDREVENUECOMMITMENTREVERSAL', 'STANDARDREVENUECONTRACT', 'STANDARDSALESORDER', 'STANDARDSALESORDERCASHSALE', 'STANDARDSALESORDERINVOICE', 'STANDARDSALESORDERPROGRESSBILLING', 'STANDARDSALESTAXPAYMENTFORM', 'STANDARDSALESTYPECUSTOMTRANSACTION', 'STANDARDSERVICEINVOICE', 'STANDARDSHIPPINGLABEL', 'STANDARDSTATEMENT', 'STANDARDSTATEMENTCHARGEFORM', 'STANDARDSTOREPICKUPFULFILLMENT', 'STANDARDTAXLIABILITYCHEQUEFORM', 'STANDARDTEGATAPAYABLE', 'STANDARDTEGATARECEIVABLE', 'STANDARDTRANSFERFORM', 'STANDARDTRANSFERORDER', 'STANDARDVENDORBILL', 'STANDARDVENDORCREDIT', 'STANDARDVENDORREQUESTFORQUOTE', 'STANDARDVENDORRETURNAUTHORIZATION', 'STANDARDWAVEFORM', 'STANDARDWORKORDER', 'STANDARDWORKORDERCLOSE', 'STANDARDWORKORDERCOMPLETION', 'STANDARDWORKORDERISSUE', 'STDORDERRESERVATIONFORM', 'STDVENDORPREPAYMENTAPPLICATIONFORM', 'STDVENDORPREPAYMENTFORM'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, csvimport_transactionform_standardElemID.name],
  }),
  csvimports_entryformrecordtypes: new PrimitiveType({
    elemID: csvimports_entryformrecordtypesElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ASSEMBLYITEM', 'BILLINGACCOUNT', 'CALENDAREVENT', 'CONTACT', 'CUSTOMER', 'CUSTOMERANDCONTACT', 'DESCRIPTIONITEM', 'DISCOUNTITEM', 'EMPLOYEE', 'INBOUNDSHIPMENT', 'INVENTORYITEM', 'ISSUE', 'ITEMGROUP', 'ITEMPROCESSFAMILY', 'ITEMPROCESSGROUP', 'JOB', 'KITITEM', 'LEAD', 'LEADANDCONTACT', 'LOTNUMBEREDASSEMBLYITEM', 'LOTNUMBEREDINVENTORYITEM', 'MARKUPITEM', 'PARTNER', 'PAYMENTITEM', 'PHONECALL', 'PRICEBOOK', 'PRICEPLAN', 'PROSPECT', 'PROSPECTANDCONTACT', 'RESOURCEALLOCATION', 'SERIALIZEDASSEMBLYITEM', 'SERIALIZEDINVENTORYITEM', 'SOLUTION', 'SUBSCRIPTION', 'SUBSCRIPTIONCHANGEORDER', 'SUBSCRIPTIONLINE', 'SUBSCRIPTIONPLAN', 'SUBTOTALITEM', 'SUPPORTCASE', 'TASK', 'TIMEBILL', 'TIMESHEET', 'VENDOR'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, csvimports_entryformrecordtypesElemID.name],
  }),
  csvimports_transactionformrecordtypes: new PrimitiveType({
    elemID: csvimports_transactionformrecordtypesElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ADVINTERCOMPANYJOURNALENTRY', 'CASHSALE', 'CHECK', 'CREDITCARDCHARGE', 'CREDITMEMO', 'CUSTOMERPAYMENT', 'ESTIMATE', 'EXPENSEREPORT', 'INTERCOMPANYJOURNALENTRY', 'INVENTORYADJUSTMENT', 'INVENTORYCOSTREVALUATION', 'INVENTORYTRANSFER', 'INVOICE', 'JOURNALENTRY', 'OPPORTUNITY', 'PERIODENDJOURNAL', 'PURCHASEORDER', 'RETURNAUTHORIZATION', 'SALESORDER', 'STATISTICALJOURNALENTRY', 'TRANSFERORDER', 'VENDORBILL', 'VENDORCREDIT', 'VENDORPAYMENT', 'VENDORPREPAYMENT', 'VENDORRETURNAUTHORIZATION'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, csvimports_transactionformrecordtypesElemID.name],
  }),
  customrecordtype_accesstype: new PrimitiveType({
    elemID: customrecordtype_accesstypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CUSTRECORDENTRYPERM', 'NONENEEDED', 'USEPERMISSIONLIST'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customrecordtype_accesstypeElemID.name],
  }),
  customrecordtype_permission_restriction: new PrimitiveType({
    elemID: customrecordtype_permission_restrictionElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['1', '3'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customrecordtype_permission_restrictionElemID.name],
  }),
  customrecordtype_permittedlevel: new PrimitiveType({
    elemID: customrecordtype_permittedlevelElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['0', '1', '2', '3', '4'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customrecordtype_permittedlevelElemID.name],
  }),
  customrecordtype_permittedrole: new PrimitiveType({
    elemID: customrecordtype_permittedroleElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCOUNTANT', 'ACCOUNTANT__REVIEWER', 'ADMINISTRATOR', 'ADVANCED_PARTNER_CENTER', 'AP_CLERK', 'AR_CLERK', 'BOOKKEEPER', 'BUYER', 'CEO', 'CEO_HANDS_OFF', 'CHIEF_PEOPLE_OFFICER_CPO', 'CONSULTANT', 'CUSTOMER_CENTER', 'CUSTOMROLE41', 'CUSTOMROLE42', 'CUSTOMROLE43', 'CUSTOMROLE56', 'DATA_WAREHOUSE_INTEGRATOR', 'DEVELOPER', 'EMPLOYEE_CENTER', 'ENGINEER', 'ENGINEERING_MANAGER', 'FULL_ACCESS', 'HUMAN_RESOURCES_ADMINISTRATOR', 'HUMAN_RESOURCES_GENERALIST', 'INTRANET_MANAGER', 'ISSUE_ADMINISTRATOR', 'MARKETING_ADMINISTRATOR', 'MARKETING_ASSISTANT', 'MARKETING_MANAGER', 'NETSUITE_SUPPORT_CENTER__BASIC', 'ONLINE_FORM_USER', 'PARTNER_CENTER', 'PAYROLL_MANAGER', 'PAYROLL_SETUP', 'PM_MANAGER', 'PRODUCT_MANAGER', 'QA_ENGINEER', 'QA_MANAGER', 'RESOURCE_MANAGER', 'REVENUE_ACCOUNTANT', 'REVENUE_MANAGER', 'SALES_ADMINISTRATOR', 'SALES_MANAGER', 'SALES_PERSON', 'SALES_VICE_PRESIDENT', 'SHOPPER', 'STORE_MANAGER', 'SUITEAPPRELEASEMANAGER', 'SUPPORT_ADMINISTRATOR', 'SUPPORT_MANAGER', 'SUPPORT_PERSON', 'SYSTEM_ADMINISTRATOR', 'TAX_ENGINE', 'VENDOR_CENTER', 'WAREHOUSE_MANAGER', '_ALL_ROLES'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customrecordtype_permittedroleElemID.name],
  }),
  customrecordtype_tasktype: new PrimitiveType({
    elemID: customrecordtype_tasktypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['EDIT', 'LIST', 'SRCH'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customrecordtype_tasktypeElemID.name],
  }),
  customsegment_access_search_level: new PrimitiveType({
    elemID: customsegment_access_search_levelElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['EDIT', 'NONE', 'VIEW'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customsegment_access_search_levelElemID.name],
  }),
  customsegment_crm_application_id: new PrimitiveType({
    elemID: customsegment_crm_application_idElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CALENDAREVENT', 'CAMPAIGN', 'ISSUE', 'PHONECALL', 'PROJECTTASK', 'SOLUTION', 'SUPPORTCASE', 'TASK'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customsegment_crm_application_idElemID.name],
  }),
  customsegment_crm_sourcelist: new PrimitiveType({
    elemID: customsegment_crm_sourcelistElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['STDEVENTALLOCATIONPROJECT', 'STDEVENTALLOCATIONPROJECTTASK', 'STDEVENTASSIGNED', 'STDEVENTCOMPANY', 'STDEVENTCONTACT', 'STDEVENTCUSTOMER', 'STDEVENTDUPLICATEOF', 'STDEVENTHELPDESKEMPLOYEE', 'STDEVENTITEM', 'STDEVENTJOB', 'STDEVENTNEXTAPPROVER', 'STDEVENTOPPORTUNITY', 'STDEVENTORDER', 'STDEVENTORGANIZER', 'STDEVENTOWNER', 'STDEVENTPARENT', 'STDEVENTPRODUCT', 'STDEVENTPROMOTIONCODE', 'STDEVENTREPORTEDBY', 'STDEVENTREQUESTEDBY', 'STDEVENTRESOURCE', 'STDEVENTREVIEWER', 'STDEVENTSUBSIDIARY', 'STDEVENTSUPPORTCASE', 'STDEVENTTRANSACTION'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customsegment_crm_sourcelistElemID.name],
  }),
  customsegment_displaytype: new PrimitiveType({
    elemID: customsegment_displaytypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['HIDDEN', 'LOCKED', 'NORMAL'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customsegment_displaytypeElemID.name],
  }),
  customsegment_entities_application_id: new PrimitiveType({
    elemID: customsegment_entities_application_idElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CONTACT', 'CUSTOMER', 'EMPLOYEE', 'ENTITYGROUP', 'GENERICRESOURCE', 'JOB', 'OTHERNAME', 'PARTNER', 'PROJECTTEMPLATE', 'VENDOR', 'WEBSITE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customsegment_entities_application_idElemID.name],
  }),
  customsegment_entities_sourcelist: new PrimitiveType({
    elemID: customsegment_entities_sourcelistElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['STDENTITYAPPROVER', 'STDENTITYASSISTANT', 'STDENTITYCAMPAIGNEVENT', 'STDENTITYCLASS', 'STDENTITYCOMPANY', 'STDENTITYCONTACTCAMPAIGNEVENT', 'STDENTITYCONTACTSOURCE', 'STDENTITYDEFAULTACCTCORPCARDEXP', 'STDENTITYDEPARTMENT', 'STDENTITYDRACCOUNT', 'STDENTITYEXPENSEACCOUNT', 'STDENTITYFXACCOUNT', 'STDENTITYJOBITEM', 'STDENTITYLEADSOURCE', 'STDENTITYLOCATION', 'STDENTITYPARENT', 'STDENTITYPARENTPARTNER', 'STDENTITYPARTNER', 'STDENTITYPAYABLESACCOUNT', 'STDENTITYPROJECTMANAGER', 'STDENTITYPURCHASEORDERAPPROVER', 'STDENTITYRECEIVABLESACCOUNT', 'STDENTITYSALESREP', 'STDENTITYSUBSIDIARY', 'STDENTITYSUPERVISOR', 'STDENTITYTAXITEM', 'STDENTITYTIMEAPPROVER', 'STDENTITYVENDORTIMEAPPROVER', 'STDENTITYWORKPLACE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customsegment_entities_sourcelistElemID.name],
  }),
  customsegment_fieldtype: new PrimitiveType({
    elemID: customsegment_fieldtypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['MULTISELECT', 'SELECT'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customsegment_fieldtypeElemID.name],
  }),
  customsegment_items_application_id: new PrimitiveType({
    elemID: customsegment_items_application_idElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ASSEMBLYITEM', 'INVENTORYITEM', 'ITEMGROUP', 'KITITEM', 'NONINVENTORYITEM', 'OTHERCHARGEITEM', 'SERVICEITEM'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customsegment_items_application_idElemID.name],
  }),
  customsegment_items_sourcelist: new PrimitiveType({
    elemID: customsegment_items_sourcelistElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['STDITEMACCOUNT', 'STDITEMASSETACCOUNT', 'STDITEMBILLEXCHRATEVARIANCEACCT', 'STDITEMBILLPRICEVARIANCEACCT', 'STDITEMBILLQTYVARIANCEACCT', 'STDITEMCLASS', 'STDITEMCOGSACCOUNT', 'STDITEMCUSTRETURNVARIANCEACCOUNT', 'STDITEMDEFAULTRENEWALPLAN', 'STDITEMDEFERRALACCOUNT', 'STDITEMDEFERREDREVENUEACCOUNT', 'STDITEMDEPARTMENT', 'STDITEMDROPSHIPEXPENSEACCOUNT', 'STDITEMEXPENSEACCOUNT', 'STDITEMGAINLOSSACCOUNT', 'STDITEMINCOMEACCOUNT', 'STDITEMISSUEPRODUCT', 'STDITEMITEMREVENUECATEGORY', 'STDITEMLIABILITYACCOUNT', 'STDITEMLOCATION', 'STDITEMPARENT', 'STDITEMPREFERREDLOCATION', 'STDITEMPROJECTTEMPLATE', 'STDITEMREVENUERECOGNITIONRULE', 'STDITEMTAXACCOUNT', 'STDITEMTAXAGENCY', 'STDITEMUNBUILDVARIANCEACCOUNT', 'STDITEMVENDOR', 'STDITEMVENDRETURNVARIANCEACCOUNT'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customsegment_items_sourcelistElemID.name],
  }),
  customsegment_items_subtype: new PrimitiveType({
    elemID: customsegment_items_subtypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['BOTH', 'PURCHASE', 'SALE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customsegment_items_subtypeElemID.name],
  }),
  customsegment_otherrecords_application_id: new PrimitiveType({
    elemID: customsegment_otherrecords_application_idElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCOUNT', 'ACCOUNTINGBOOK', 'ADDRESS', 'ALLOCATIONSCHEDULEDESTINATION', 'ALLOCATIONSCHEDULESOURCE', 'BIN', 'BUDGETIMPORT', 'CHARGE', 'CHARGERULE', 'CLASSIFICATION', 'CLASSSEGMENTMAPPING', 'COMPETITOR', 'CURRENCYRATETYPE', 'DEPARTMENT', 'DEPTSEGMENTMAPPING', 'ENTITYACCOUNTMAPPING', 'EXPENSEAMORTIZATIONRULE', 'EXPENSECATEGORY', 'EXPENSEPLAN', 'FAIRVALUEFORMULA', 'FAIRVALUEPRICE', 'GLOBALACCOUNTMAPPING', 'GLOBALINVENTORYRELATIONSHIP', 'ISSUEPRODUCT', 'ISSUEPRODUCTVERSION', 'ITEMACCOUNTMAPPING', 'ITEMDEMANDPLAN', 'ITEMREVENUECATEGORY', 'ITEMSUPPLYPLAN', 'LABORCOSTCARD', 'LOCASSIGNCONF', 'LOCATION', 'LOCATIONCOSTINGGROUP', 'LOCSEGMENTMAPPING', 'MANUFACTURINGCOSTTEMPLATE', 'MANUFACTURINGROUTING', 'NOTE', 'PAYROLLBATCH', 'PAYROLLITEM', 'PLANNEDSTANDARDCOST', 'PRICEPLAN', 'PROJECTBUDGET', 'PROJECTBUDGETLINE', 'PROJECTICCHARGEREQUEST', 'PROMOTIONCODE', 'RECOGNITIONTREATMENTRULE', 'REGION', 'REVENUEELEMENT', 'REVENUEPLAN', 'REVENUERECOGNITIONRULE', 'REVENUERECOGNITIONTREATMENT', 'SALESCHANNEL', 'SALESTAXITEM', 'SHIPPINGPARTNERPACKAGE', 'SHIPPINGPARTNERREGISTRATION', 'SHIPPINGPARTNERSHIPMENT', 'STANDARDCOSTVERSION', 'SUBSIDIARY', 'TIMEENTRY', 'TIMESHEET', 'WBS', 'WBSLINE', 'WORKASSIGNMENT', 'WORKFLOW', 'WORKPLACE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customsegment_otherrecords_application_idElemID.name],
  }),
  customsegment_parent: new PrimitiveType({
    elemID: customsegment_parentElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CLASS', 'DEPARTMENT', 'LOCATION', 'SUBSIDIARY'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customsegment_parentElemID.name],
  }),
  customsegment_transactionbody_application_id: new PrimitiveType({
    elemID: customsegment_transactionbody_application_idElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ASSEMBLYBUILD', 'CUSTOMERPAYMENT', 'DEPOSIT', 'EXPENSEREPORT', 'INVENTORYADJUSTMENT', 'ITEMFULFILLMENT', 'ITEMRECEIPT', 'JOURNALENTRY', 'OPPORTUNITY', 'OTHERTRANSACTION', 'PAYCHECKJOURNAL', 'PERIODENDJOURNAL', 'PURCHASE', 'REVENUEARRANGEMENT', 'SALE', 'STORE', 'TEGATA', 'TRANSFERORDER', 'VENDORPAYMENT'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customsegment_transactionbody_application_idElemID.name],
  }),
  customsegment_transactionbody_sourcelist: new PrimitiveType({
    elemID: customsegment_transactionbody_sourcelistElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['STDBODYACCOUNT', 'STDBODYACCOUNTINGBOOK', 'STDBODYACCTCORPCARDEXP', 'STDBODYADJLOCATION', 'STDBODYADVANCEACCOUNT', 'STDBODYALACONFIGURATION', 'STDBODYAPACCT', 'STDBODYARACCT', 'STDBODYASSEMBLYITEM', 'STDBODYCLASS', 'STDBODYCREATEDFROM', 'STDBODYCUSTOMER', 'STDBODYDECISIONMAKER', 'STDBODYDEPARTMENT', 'STDBODYDEPOSIT', 'STDBODYDISCOUNTITEM', 'STDBODYDRACCOUNT', 'STDBODYEMPLOYEE', 'STDBODYENTITY', 'STDBODYENTITYEMPLOYEE', 'STDBODYEXPENSEACCOUNT', 'STDBODYFXACCOUNT', 'STDBODYITEM', 'STDBODYITEMFULFILLMENT', 'STDBODYJOB', 'STDBODYLEADSOURCE', 'STDBODYLOCATION', 'STDBODYNEXTAPPROVER', 'STDBODYOPPORTUNITY', 'STDBODYPARTNER', 'STDBODYPAYMENTCUSTOMER', 'STDBODYPROMOCODE', 'STDBODYPURCHASECONTRACT', 'STDBODYREVERSALENTRY', 'STDBODYSALESORDER', 'STDBODYSALESREP', 'STDBODYSHIPPINGTAXCODE', 'STDBODYSHIPTO', 'STDBODYSUBSIDIARY', 'STDBODYTAXITEM', 'STDBODYTOLOCATION', 'STDBODYTOSUBSIDIARY', 'STDBODYTRANSFERLOCATION', 'STDBODYVENDOR'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customsegment_transactionbody_sourcelistElemID.name],
  }),
  customsegment_transactionline_application_id: new PrimitiveType({
    elemID: customsegment_transactionline_application_idElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['EXPENSE', 'EXPENSEREPORT', 'INVENTORYADJUSTMENT', 'ITEMFULFILLMENT', 'ITEMRECEIPT', 'JOURNALENTRY', 'KITITEM', 'OPPORTUNITY', 'OWNERSHIPTRANSFER', 'PAYCHECKCOMPANYCONTRIBUTION', 'PAYCHECKCOMPANYTAX', 'PAYCHECKDEDUCTION', 'PAYCHECKEARNING', 'PAYCHECKEMPLOYEETAX', 'PERIODENDJOURNAL', 'PURCHASE', 'REVENUEARRANGEMENT', 'SALE', 'STORE', 'STOREWITHGROUPS', 'TIME', 'TRANSFERORDER', 'WORKORDER'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customsegment_transactionline_application_idElemID.name],
  }),
  customsegment_transactionline_sourcelist: new PrimitiveType({
    elemID: customsegment_transactionline_sourcelistElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['STDBODYACCOUNT', 'STDBODYACCOUNTINGBOOK', 'STDBODYACCTCORPCARDEXP', 'STDBODYADJLOCATION', 'STDBODYADVANCEACCOUNT', 'STDBODYALACONFIGURATION', 'STDBODYAPACCT', 'STDBODYARACCT', 'STDBODYASSEMBLYITEM', 'STDBODYCLASS', 'STDBODYCREATEDFROM', 'STDBODYCUSTOMER', 'STDBODYDECISIONMAKER', 'STDBODYDEPARTMENT', 'STDBODYDEPOSIT', 'STDBODYDISCOUNTITEM', 'STDBODYDRACCOUNT', 'STDBODYEMPLOYEE', 'STDBODYENTITY', 'STDBODYENTITYEMPLOYEE', 'STDBODYEXPENSEACCOUNT', 'STDBODYFXACCOUNT', 'STDBODYITEM', 'STDBODYITEMFULFILLMENT', 'STDBODYJOB', 'STDBODYLEADSOURCE', 'STDBODYLOCATION', 'STDBODYNEXTAPPROVER', 'STDBODYOPPORTUNITY', 'STDBODYPARTNER', 'STDBODYPAYMENTCUSTOMER', 'STDBODYPROMOCODE', 'STDBODYPURCHASECONTRACT', 'STDBODYREVERSALENTRY', 'STDBODYSALESORDER', 'STDBODYSALESREP', 'STDBODYSHIPPINGTAXCODE', 'STDBODYSHIPTO', 'STDBODYSUBSIDIARY', 'STDBODYTAXITEM', 'STDBODYTOLOCATION', 'STDBODYTOSUBSIDIARY', 'STDBODYTRANSFERLOCATION', 'STDBODYVENDOR', 'STDCOLACCOUNT', 'STDCOLCALL', 'STDCOLCASE', 'STDCOLCASETASKEVENT', 'STDCOLCHARGE', 'STDCOLCLASS', 'STDCOLCREATEDFROM', 'STDCOLCUSTOMER', 'STDCOLDEPARTMENT', 'STDCOLEMPLOYEE', 'STDCOLEVENT', 'STDCOLITEM', 'STDCOLJOB', 'STDCOLLOCATION', 'STDCOLPROJECTTASK', 'STDCOLSUBSIDIARY', 'STDCOLTASK'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customsegment_transactionline_sourcelistElemID.name],
  }),
  customsegment_valuesdisplayorder: new PrimitiveType({
    elemID: customsegment_valuesdisplayorderElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ALPHABETICAL', 'SUBLIST'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customsegment_valuesdisplayorderElemID.name],
  }),
  customtransactiontype_classification_position: new PrimitiveType({
    elemID: customtransactiontype_classification_positionElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['HEADER', 'LINES', 'NONE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customtransactiontype_classification_positionElemID.name],
  }),
  customtransactiontype_creditsupportstyles: new PrimitiveType({
    elemID: customtransactiontype_creditsupportstylesElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['BASIC', 'PURCHASE', 'SALES'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customtransactiontype_creditsupportstylesElemID.name],
  }),
  customtransactiontype_filterbyaccounttype: new PrimitiveType({
    elemID: customtransactiontype_filterbyaccounttypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCTPAY', 'ACCTREC', 'BANK', 'COGS', 'CREDCARD', 'DEFEREXPENSE', 'DEFERREVENUE', 'EQUITY', 'EXPENSE', 'FIXEDASSET', 'INCOME', 'LONGTERMLIAB', 'OTHASSET', 'OTHCURRASSET', 'OTHCURRLIAB', 'OTHEXPENSE', 'OTHINCOME', 'UNBILLEDREC'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customtransactiontype_filterbyaccounttypeElemID.name],
  }),
  customtransactiontype_statuses_id: new PrimitiveType({
    elemID: customtransactiontype_statuses_idElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'X', 'Z'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customtransactiontype_statuses_idElemID.name],
  }),
  customtransactiontype_subliststyle: new PrimitiveType({
    elemID: customtransactiontype_subliststyleElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['BASIC', 'HEADER_ONLY', 'JOURNAL', 'PURCHASE', 'SALES'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customtransactiontype_subliststyleElemID.name],
  }),
  customtransactiontype_subliststyle_salesandpurchase: new PrimitiveType({
    elemID: customtransactiontype_subliststyle_salesandpurchaseElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['PURCHASE', 'SALES'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customtransactiontype_subliststyle_salesandpurchaseElemID.name],
  }),
  customtransactiontype_tasktype: new PrimitiveType({
    elemID: customtransactiontype_tasktypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['LIST'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, customtransactiontype_tasktypeElemID.name],
  }),
  dashboard_layout: new PrimitiveType({
    elemID: dashboard_layoutElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['SINGLE_COLUMN', 'THREE_COLUMN', 'TWO_COLUMN', 'TWO_COLUMN_RIGHT'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, dashboard_layoutElemID.name],
  }),
  dashboard_mode: new PrimitiveType({
    elemID: dashboard_modeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ADD_MOVE', 'LOCKED', 'UNLOCKED'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, dashboard_modeElemID.name],
  }),
  emailtemplate_recordtype: new PrimitiveType({
    elemID: emailtemplate_recordtypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CUSTOM', 'ENTITY', 'EVENT', 'PROJECT', 'TRANSACTION'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, emailtemplate_recordtypeElemID.name],
  }),
  engine_versions: new PrimitiveType({
    elemID: engine_versionsElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['0.1', '1.0'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, engine_versionsElemID.name],
  }),
  entryform_buttonid: new PrimitiveType({
    elemID: entryform_buttonidElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCEPT', 'ACCEPTPAYMENT', 'ACTIVATE', 'ACTIVITYHISTORY', 'APPROVE', 'APPROVEALLPENDING', 'CANCEL', 'CHANGECUSTOMER', 'CLEARREVISIONS', 'COPY', 'COPYTIMESHEET', 'CREATENEWVERSION', 'CREATEPROJECT', 'CREATE_EMPLOYEE_CHANGE_REQUEST', 'DECLINE', 'DELETE', 'DELETELASTVERSION', 'EDIT_CHANGE_REASON', 'GENERATEPRICELIST', 'GENERATESTATEMENT', 'IMPORTPLANNEDTIME', 'LAUNCH', 'MAKECOPY', 'MERGE', 'MODIFY_PRICING', 'NEW', 'NEXTBILL', 'NEXTVERSION', 'PREVIOUSVERSION', 'PRINT', 'QUICKACCEPT', 'REACTIVATE', 'RECALCULATEACCOUNTINGDATA', 'RECALCULATEPROJECTPLAN', 'REJECT', 'REJECTALLPENDINGWITHNOTE', 'REJECTWITHNOTE', 'RENEW', 'RESETTER', 'RETRACT', 'SAVE', 'SEARCH', 'SELECT_EFFECTIVE_DATE', 'SUBMITAS', 'SUBMITCOPY', 'SUBMITEDIT', 'SUBMITNEW', 'SUBMITNEXT', 'SUSPEND', 'TENTATIVE', 'TERMINATE', 'TERMINATE_EMPLOYEE', 'UNLOCKTIMEPERIOD', 'UPDATEPROJECTMEASURES', 'VIEWALLTRANSACTIONS', 'VIEW_EMPLOYEE_TIMELINE', 'W4DATA'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, entryform_buttonidElemID.name],
  }),
  entryform_fieldid: new PrimitiveType({
    elemID: entryform_fieldidElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACADEMICYEAR', 'ACCESSLEVEL', 'ACCESSROLE', 'ACCOUNT', 'ACCOUNT', 'ACCOUNTINGBOOK', 'ACCOUNTINGBOOK', 'ACCOUNTINGBOOK', 'ACCOUNTMAPPINGDESCRIPTION', 'ACCOUNTMAPPINGID', 'ACCOUNTMAPPINGKEY', 'ACCOUNTNUMBER', 'ACTION', 'ACTUALDELIVERYDATE', 'ACTUALRUNTIME', 'ACTUALSETUPTIME', 'ACTUALSHIPPINGDATE', 'ACTUALTIME', 'ACTUALWORK', 'ADATE', 'ADDR1', 'ADDR2', 'ADDR3', 'ADDRESS', 'ADVANCERENEWALPERIODNUMBER', 'ADVANCERENEWALPERIODUNIT', 'ADVANCEWARNINGTHRESHOLD', 'AEIC', 'AGING', 'ALCOHOLRECIPIENTTYPE', 'ALIENNUMBER', 'ALIGNCHARGEWITHSUB', 'ALLDAYEVENT', 'ALLLOCATIONSCUSTOMERRETURN', 'ALLLOCATIONSFULFILLMENT', 'ALLOCATEDCONTRACTCOSTAMOUNT', 'ALLOCATEDDEMAND', 'ALLOCATEDHOURS', 'ALLOCATEDTIME', 'ALLOCATEDWORK', 'ALLOCATEPAYROLLEXPENSES', 'ALLOCATIONAMOUNT', 'ALLOCATIONRESOURCE', 'ALLOCATIONTYPE', 'ALLOWALLRESOURCESFORTASKS', 'ALLOWANCE', 'ALLOWCROSSSUBCUSTOMERRETURN', 'ALLOWCROSSSUBFULFILLMENT', 'ALLOWEXPENSES', 'ALLOWTASKTIMEFORRSRCALLOC', 'ALLOWTIME', 'ALTEMAIL', 'ALTERNATEDEMANDSOURCEITEM', 'ALTERNATEQUANTITY', 'ALTERNATESOURCEITEM', 'ALTERNATEUNITS', 'ALTERNATEUNITSTYPE', 'ALTNAME', 'ALTPHONE', 'ALTPHONE', 'AMORTIZATIONENDDATE', 'AMORTIZATIONPERIOD', 'AMORTIZATIONSCHEDULE', 'AMORTIZATIONSTARTDATE', 'AMORTIZATIONTEMPLATE', 'AMOUNT', 'AMOUNT', 'AMOUNTDUE', 'AMOUNTPAID', 'AMOUNTSOURCE', 'AMOUNTSOURCE', 'ANALYSISDURATION', 'APPLYDISCOUNTTO', 'APPLYPROJECTEXPENSETYPETOALL', 'APPROVALDATE', 'APPROVALLIMIT', 'APPROVALSTATUS', 'APPROVALSTATUS', 'APPROVALSTATUS', 'APPROVER', 'ARRANGEMENTLEVELRECLASS', 'ASSETACCOUNT', 'ASSIGNED', 'ASSIGNEDWEBSITE', 'ASSIGNEE', 'ASSIGNTASKS', 'ASSISTANT', 'ASSISTANTPHONE', 'ATPLEADTIME', 'ATPLEADTIME', 'ATPMETHOD', 'ATRIGGER', 'AUDIENCE', 'AUTHWORKDATE', 'AUTOCALCULATELAG', 'AUTOEXPANDKITFORREVENUEMGMT', 'AUTOLEADTIME', 'AUTONAME', 'AUTONAME', 'AUTONAME', 'AUTOPARTNERCODE', 'AUTOPREFERREDSTOCKLEVEL', 'AUTOPRODUCTIONLEADTIME', 'AUTORENEWAL', 'AUTOREORDERPOINT', 'AVAILABLENOW', 'AVAILABLEOFFLINE', 'AVAILABLETOPARTNERS', 'AVERAGECOST', 'AVGDAYSLATEEARLY', 'BACKWARDCONSUMPTIONDAYS', 'BACKWARDCONSUMPTIONDAYS', 'BALANCE', 'BALANCE', 'BALANCEPRIMARY', 'BANKTRANSACTIONCODE', 'BASEBOOK', 'BASECOST', 'BASELINE', 'BASEUNIT', 'BASEWAGE', 'BASEWAGETYPE', 'BBUDGETSHOWCALCULATEDLINES', 'BBUDGETUSECALCULATEDVALUES', 'BCN', 'BEFORESUBSCRIPTIONENDDATE', 'BILLADDRESS', 'BILLADDRESSLIST', 'BILLDATE', 'BILLEDAMOUNT', 'BILLEDCURRENCY', 'BILLEDTAXAMOUNT', 'BILLEXCHRATEVARIANCEACCT', 'BILLINGACCOUNT', 'BILLINGACCOUNT', 'BILLINGACCOUNT', 'BILLINGACCOUNT', 'BILLINGACCOUNTSTARTDATE', 'BILLINGCLASS', 'BILLINGCLASS', 'BILLINGITEM', 'BILLINGMODE', 'BILLINGRATECARD', 'BILLINGSCHEDULE', 'BILLINGSCHEDULE', 'BILLINGSCHEDULE', 'BILLINGSUBSCRIPTIONSTATUS', 'BILLINGSUBSIDIARY', 'BILLINGTRANSACTIONFORM', 'BILLINGTRANSACTIONTYPE', 'BILLOFLADING', 'BILLOFMATERIALS', 'BILLPAY', 'BILLPRICEVARIANCEACCT', 'BILLQTYVARIANCEACCT', 'BILLTO', 'BIRTHDATE', 'BONUSAMOUNTABSOLUTE', 'BONUSAMOUNTPERCENTAGE', 'BONUSAWARDDATE', 'BONUSCOMMENT', 'BONUSCURRENCY', 'BONUSEMPLOYEE', 'BONUSSTATUS', 'BONUSTARGET', 'BONUSTARGETCOMMENT', 'BONUSTARGETPAYFREQUENCY', 'BONUSTARGETTYPE', 'BONUSTYPE', 'BUILDBROKEN', 'BUILDENTIREASSEMBLY', 'BUILDFIXED', 'BUILDTARGET', 'BUILDTIME', 'BUILDTIMELOTSIZE', 'BUYINGREASON', 'BUYINGTIMEFRAME', 'CALCULATEDAMOUNT', 'CALCULATEDENDDATE', 'CALCULATEDENDDATEBASELINE', 'CALCULATEDSTARTDATE', 'CALCULATEDSTARTDATEBASELINE', 'CALCULATEDWORK', 'CALCULATEDWORKBASELINE', 'CAMPAIGNCATEGORY', 'CAMPAIGNEVENT', 'CAMPAIGNID', 'CANBEAUTOAPPLIED', 'CANNOTBECOMBINED', 'CAP', 'CAPHOURS', 'CAPMONEY', 'CAPTYPE', 'CARDCURRENCY', 'CARDMEMBEREMBOSSEDNAME', 'CARVEINAMOUNT', 'CARVEINRATIO', 'CARVEOUTAMOUNT', 'CARVEOUTRATIO', 'CARVEOVERRIDE', 'CASENUMBER', 'CASETASKEVENT', 'CASHSALEFORM', 'CATALOGTYPE', 'CATCHUPPERIOD', 'CATCHUPPERIOD', 'CATEGORY', 'CBUDGETLABORBUDGETFROMALLOC', 'CBUDGETSHOWCALCULATEDLINES', 'CBUDGETUSECALCULATEDVALUES', 'CHANGEACTION', 'CHARGEAMOUNTBILLED', 'CHARGEAMOUNTHOLDFORBILLING', 'CHARGEAMOUNTPENDING', 'CHARGEAMOUNTREADYFORBILLING', 'CHARGEAMOUNTREMAINING', 'CHARGEDATE', 'CHARGEEMPLOYEE', 'CHARGEEXPENSEAMOUNT', 'CHARGELABORAMOUNT', 'CHARGERULETYPE', 'CHARGETYPE', 'CITY', 'CITYZIP', 'CLASS', 'CLASS', 'CLASS', 'CLEVEL', 'CLICKSTREAM', 'CODE', 'CODEPATTERN', 'COGSACCOUNT', 'COMBINATIONTYPE', 'COMMENTS', 'COMMENTS', 'COMMISSIONPAYMENTPREFERENCE', 'COMPANY', 'COMPANYNAME', 'COMPENSATIONCURRENCY', 'COMPLETEDDATE', 'COMPLETEDQUANTITY', 'CONCURRENTWEBSERVICESUSER', 'CONNECTIVITYMETHOD', 'CONSOLAGING', 'CONSOLBALANCE', 'CONSOLDAYSOVERDUE', 'CONSOLDEPOSITBALANCE', 'CONSOLOVERDUEBALANCE', 'CONSOLUNBILLEDORDERS', 'CONSTRAINTTYPE', 'CONSUMPTIONUNIT', 'CONTACT', 'CONTACTCAMPAIGNEVENT', 'CONTACTSOURCE', 'CONTACTSOURCECAMPAIGNCATEGORY', 'CONTINGENTREVENUEHANDLING', 'CONTINGENTREVENUEHANDLING', 'CONTRAACCOUNT', 'CONTRACTCOSTALLOCATIONPCT', 'CONTRACTEXPENSEACCT', 'CONTRACTEXPENSEOFFSETACCT', 'CONVCOSTPERCUSTOMER', 'CONVERSIONRATE', 'CONVERSIONS', 'COPYDESCRIPTION', 'CORPORATECARD', 'COST', 'COST', 'COSTACCOUNTINGSTATUS', 'COSTAMORTIZATIONAMOUNT', 'COSTCATEGORY', 'COSTCENTER', 'COSTCHART', 'COSTESTIMATE', 'COSTESTIMATETYPE', 'COSTINGGROUPCURRENCY', 'COSTINGLOTSIZE', 'COSTINGMETHOD', 'COSTPERCUSTOMER', 'COUNTRY', 'COUNTRYOFMANUFACTURE', 'COUPONCODEFILE', 'COURSECODE', 'COURSEID', 'CREATECHARGERULE', 'CREATED', 'CREATEDBY', 'CREATEDBY', 'CREATEDBY', 'CREATEDBY', 'CREATEDDATE', 'CREATEDDATE', 'CREATEDDATE', 'CREATEDFROM', 'CREATEDFROM', 'CREATEEXPENSEPLANSON', 'CREATEREVENUEPLANSON', 'CREATEREVENUEPLANSON', 'CREATIONTRIGGEREDBY', 'CREATIONTRIGGEREDBY', 'CREDITDEBIT', 'CREDITHOLDOVERRIDE', 'CREDITLIMIT', 'CREDITMEMO', 'CREDITMEMOLINE', 'CSCHOOL', 'CUMULATIVEPERCENTCOMPLETE', 'CURRENCY', 'CURRENCY', 'CURRENCY', 'CURRENCYEXCHANGERATE', 'CURRENCYFORMATSAMPLE', 'CURRENTTRANSACTIONDATE', 'CUSTOMDIMENSION', 'CUSTOMER', 'CUSTOMER', 'CUSTOMER', 'CUSTOMER', 'CUSTOMER', 'CUSTOMERCATEGORY', 'CUSTOMERDEFAULT', 'CUSTOMERGROUP', 'CUSTOMERS', 'CUSTOMFORM', 'CUSTOMFORM', 'CUSTOMFORM', 'CUSTOMFORM', 'CUSTOMFORM', 'CUSTOMFORM', 'CUSTOMFORM', 'CUSTRETURNVARIANCEACCOUNT', 'DATECONVERTEDTOINV', 'DATECREATED', 'DATECREATED', 'DATEENROLLED', 'DATERUN', 'DAYSBEFOREEXPIRATION', 'DAYSOVERDUE', 'DEADLINE', 'DECLAREDVALUE', 'DEFAULTACCTCORPCARDEXP', 'DEFAULTADDRESS', 'DEFAULTALLOCATIONSTRATEGY', 'DEFAULTBANKACCOUNT', 'DEFAULTEXPENSEREPORTCURRENCY', 'DEFAULTITEMSHIPMETHOD', 'DEFAULTJOBRESOURCEROLE', 'DEFAULTNAME', 'DEFAULTORDERPRIORITY', 'DEFAULTRENEWALMETHOD', 'DEFAULTRENEWALPLAN', 'DEFAULTRENEWALPRICEBOOK', 'DEFAULTRENEWALTERM', 'DEFAULTRENEWALTRANTYPE', 'DEFAULTRETURNCOST', 'DEFAULTREVISION', 'DEFAULTTAXREG', 'DEFAULTVENDORPAYMENTACCOUNT', 'DEFERCONTRACTEXPENSEACCT', 'DEFERRALACCOUNT', 'DEFERREDREVENUEACCOUNT', 'DEFERREVREC', 'DELIVERED', 'DEMANDENTITY', 'DEMANDLOCATION', 'DEMANDLOCATIONDATE', 'DEMANDLOCATIONSUBSIDIARY', 'DEMANDMODIFIER', 'DEMANDSOURCE', 'DEMANDTIMEFENCE', 'DEMANDTIMEFENCE', 'DEPARTMENT', 'DEPARTMENT', 'DEPARTMENT', 'DEPOSITBALANCE', 'DESCRIPTION', 'DESCRIPTION', 'DESCRIPTION', 'DESCRIPTION', 'DESCRIPTION', 'DESCRIPTION', 'DESTINATIONACCOUNT', 'DESTINATIONCLASS', 'DESTINATIONDEPARTMENT', 'DESTINATIONLOCATION', 'DIMENSION1', 'DIMENSION10', 'DIMENSION2', 'DIMENSION3', 'DIMENSION4', 'DIMENSION5', 'DIMENSION6', 'DIMENSION7', 'DIMENSION8', 'DIMENSION9', 'DIRECTDEPOSIT', 'DIRECTREVENUEPOSTING', 'DISCOUNT', 'DISCOUNTEDSALESAMOUNT', 'DISCOUNTTOTAL', 'DISPLAYLINEDISCOUNTS', 'DISPLAYNAME', 'DISPLAYNAME', 'DISPLAYNAME', 'DISPLAYONLINE', 'DISPLAYSYMBOL', 'DISTRIBUTIONCATEGORY', 'DISTRIBUTIONCATEGORY', 'DISTRIBUTIONNETWORK', 'DISTRIBUTIONNETWORK', 'DOB', 'DOCNUMCREATEDFROM', 'DONTSHOWPRICE', 'DRACCOUNT', 'DRIVERSLICENSENUMBER', 'DROPSHIPEXPENSEACCOUNT', 'DUEDATE', 'DUPLICATEOF', 'DURATION', 'EFFECTIVEBOMCONTROL', 'EFFECTIVEDATE', 'EFFECTIVEDATE', 'EFFECTIVEENDDATE', 'EFFECTIVEPERIOD', 'EFFECTIVESTARTDATE', 'ELEMENTDATE', 'ELIGIBLEFORCOMMISSION', 'ELIGIBLEFORCOMMISSION', 'EMAIL', 'EMAIL', 'EMAILASSIGNEE', 'EMAILCELLS', 'EMAILEMPLOYEES', 'EMAILFORM', 'EMAILPREFERENCE', 'EMPLOYEE', 'EMPLOYEEFTESTATUS', 'EMPLOYEESTATUS', 'EMPLOYEETYPE', 'ENABLECATCHWEIGHT', 'ENABLEPERIODENDJOURNALS', 'ENDDATE', 'ENDDATE', 'ENDDATEBASELINE', 'ENDDATECHANGEIMPACT', 'ENDDATECHANGEIMPACT', 'ENDTIME', 'ENFORCEMINQTYINTERNALLY', 'ENTITY', 'ENTITYACCOUNT', 'ENTITYID', 'ENTITYSTATUS', 'ESCALATIONMESSAGE', 'ESTIMATEDBUDGET', 'ESTIMATEDCOST', 'ESTIMATEDCOST', 'ESTIMATEDCOSTJC', 'ESTIMATEDGROSSPROFIT', 'ESTIMATEDGROSSPROFITPERCENT', 'ESTIMATEDHOURSATCOMPLETION', 'ESTIMATEDHOURSTOCOMPLETE', 'ESTIMATEDLABORCOST', 'ESTIMATEDLABORCOST', 'ESTIMATEDLABORCOSTBASELINE', 'ESTIMATEDLABORCOSTBASELINE', 'ESTIMATEDLABORREVENUE', 'ESTIMATEDLABORREVENUE', 'ESTIMATEDMARGIN', 'ESTIMATEDREVENUE', 'ESTIMATEDREVENUE', 'ESTIMATEDREVENUEJC', 'ESTIMATEDREVRECENDDATE', 'ESTIMATEDTIME', 'ESTIMATEDTIMEOVERRIDE', 'ESTIMATEDTIMEOVERRIDE', 'ESTIMATEDTIMEOVERRIDEBASELINE', 'ESTIMATEDTIMEOVERRIDEBASELINE', 'ESTIMATEDWORK', 'ESTIMATEDWORK', 'ESTIMATEDWORKBASELINE', 'ESTIMATEREVRECTEMPLATE', 'ETHNICITY', 'EVENTDATE', 'EVENTID', 'EVENTPURPOSE', 'EVENTTYPE', 'EXCHANGERATE', 'EXCHANGERATE', 'EXCLUDEFROMSITEMAP', 'EXCLUDEITEMS', 'EXPAMTMULTIPLIER', 'EXPECTEDDELIVERYDATE', 'EXPECTEDRATE', 'EXPECTEDREVENUE', 'EXPECTEDSHIPPINGDATE', 'EXPENSEACCOUNT', 'EXPENSEAMORTIZATIONRULE', 'EXPENSELIMIT', 'EXPENSEMIGRATEADJACCOUNT', 'EXPENSETYPE', 'EXPRBUILDER', 'EXTERNALABSTRACT', 'EXTERNALDETAILS', 'EXTERNALDOCUMENTNUMBER', 'EXTERNALID', 'EXTERNALID', 'EXTERNALID', 'EXTRA', 'FACULTYNAME', 'FAIRVALUE', 'FAIRVALUEFORMULA', 'FAIRVALUEOVERRIDE', 'FAIRVALUERANGEPOLICY', 'FAMILY', 'FANAME', 'FAX', 'FAX', 'FEATUREDDESCRIPTION', 'FEDSTATUS', 'FEDUNEMP', 'FEDWITH', 'FEE', 'FEMAIL', 'FILLPASSWORD', 'FINANCIALINSTITUTION', 'FINISHBYDATE', 'FIRMED', 'FIRSTISSUEATTACHED', 'FIRSTISSUEREMOVED', 'FIRSTNAME', 'FIRSTUPDATED', 'FIRSTVISIT', 'FIXEDBUILDTIME', 'FIXEDLOTSIZE', 'FNAME', 'FORECASTCHARGERUNONDEMAND', 'FORECASTENDDATE', 'FORECASTSTARTDATE', 'FORMATPROFILE', 'FORWARDCONSUMPTIONDAYS', 'FORWARDCONSUMPTIONDAYS', 'FRAUDRISK', 'FREESHIPMETHOD', 'FREQUENCY', 'FREQUENCY', 'FROMSUBSIDIARY', 'FUTUREHORIZON', 'FUTUREHORIZON', 'FUTUREHORIZONDATE', 'FXACCOUNT', 'FXRATE', 'GAINLOSSACCOUNT', 'GAINLOSSOFFSETTINGACCTTYPE', 'GDATE', 'GENDER', 'GENERATEACCRUALS', 'GENERATEMODIFICATIONELEMENTS', 'GENERATEPEGGING', 'GIVEACCESS', 'GLOBALSUBSCRIPTIONSTATUS', 'GPATOTAL', 'GRADE', 'GROUPEDBYPO', 'GROUPINVOICES', 'GROUPORDER', 'HANDLINGCOST', 'HASOFFLINEACCESS', 'HEIGHT', 'HELPDESK', 'HIGHVALUE', 'HIGHVALUEPERCENT', 'HIREDATE', 'HOLDREVENUERECOGNITION', 'HOLDREVENUERECOGNITION', 'HOMEPHONE', 'HORIZONINDAYS', 'HOURS', 'I9VERIFIED', 'ID', 'IDNUMBER', 'IDNUMBER', 'IDNUMBER', 'IMAGE', 'IMMEDIATEDOWNLOAD', 'INACTIVE', 'INACTIVE', 'INACTIVE', 'INACTIVE', 'INBOUNDEMAIL', 'INCLUDECHILDREN', 'INCLUDECRMTASKSINTOTALS', 'INCLUDEDQUANTITY', 'INCLUDEDUSAGE', 'INCLUDEINRENEWAL', 'INCLUDESTARTENDLINES', 'INCOMEACCOUNT', 'INCOMEACCOUNT', 'INCOMINGMESSAGE', 'INCOTERM', 'INCOTERM', 'INDIRECT', 'INHERITIPRULES', 'INITIALAMOUNT', 'INITIALAMOUNT', 'INITIALRESPONSETIME', 'INITIALS', 'INITIALTERM', 'INPUTQUANTITY', 'INTERCOCOGSACCOUNT', 'INTERCODEFREVACCOUNT', 'INTERCOEXPENSEACCOUNT', 'INTERCOINCOMEACCOUNT', 'INTERNALID', 'INTERNALID', 'INTERNALID', 'INTERNALID', 'INTERNALONLY', 'INTRANSITBALANCE', 'INVENTORYAVAILABLE', 'INVENTORYAVAILFORALLOC', 'INVENTORYCOSTTEMPLATE', 'INVENTORYSTANDARDCOST', 'INVENTORYSUBSIDIARY', 'INVOICE', 'INVOICEFORM', 'INVOICEGROUPNUMBER', 'INVOICELINE', 'INVTCLASSIFICATION', 'INVTCOUNTINTERVAL', 'IPADDRESSRULE', 'IS1099ELIGIBLE', 'ISACCOUNTMAPPINGINACTIVE', 'ISADJUSTMENTONLY', 'ISAUTOLOCASSIGNMENTALLOWED', 'ISAUTOLOCASSIGNMENTSUSPENDED', 'ISBILLABLE', 'ISBOMITEMTYPE', 'ISBUDGETAPPROVED', 'ISCONSOLIDATED', 'ISDEFAULT', 'ISDONATIONITEM', 'ISDROPSHIPITEM', 'ISELIMINATE', 'ISELIMINATE', 'ISEXEMPT', 'ISEXEMPTTIME', 'ISFORRESCHEDULE', 'ISFULFILLABLE', 'ISGCOCOMPLIANT', 'ISINACTIVE', 'ISINACTIVE', 'ISINACTIVE', 'ISINACTIVE', 'ISINDIVIDUAL', 'ISINTERCOMPANY', 'ISJOBMANAGER', 'ISJOBRESOURCE', 'ISJOBRESOURCEVEND', 'ISONLINE', 'ISOWNER', 'ISPHANTOM', 'ISPRETAX', 'ISPRIMARY', 'ISPRIVATE', 'ISPRODUCTIVE', 'ISPRODUCTIVETIME', 'ISPUBLIC', 'ISREVIEWED', 'ISSALESREP', 'ISSHOWSTOPPER', 'ISSPECIALORDERITEM', 'ISSPECIALWORKORDERITEM', 'ISSTOREPICKUPALLOWED', 'ISSUE', 'ISSUEABSTRACT', 'ISSUENUMBER', 'ISSUEPRODUCT', 'ISSUEPRODUCT', 'ISSUEROLE', 'ISSUESTATUS', 'ISSUETAGS', 'ISSUETYPE', 'ISSUPPORTREP', 'ISTAXABLE', 'ISTRANCODEMAPPINGEXCLUDE', 'ISTRANCODEMAPPINGINACTIVE', 'ISUTILIZED', 'ISUTILIZEDTIME', 'ISVSOEBUNDLE', 'ISVSOEPRICE', 'ISWIP', 'ITEM', 'ITEM', 'ITEM', 'ITEMACCOUNT', 'ITEMCARRIER', 'ITEMGROUP', 'ITEMID', 'ITEMID', 'ITEMLABORCOSTAMOUNT', 'ITEMLOCATION', 'ITEMNAMENUMBER', 'ITEMPROCESSFAMILY', 'ITEMPROCESSGROUP', 'ITEMRESALECOSTAMOUNT', 'ITEMREVENUECATEGORY', 'ITEMREVENUECATEGORY', 'ITEMSHIPMETHOD', 'ITEMTOTAL', 'ITEMTYPE', 'JOB', 'JOBBILLINGTYPE', 'JOBDESCRIPTION', 'JOBITEM', 'JOBPRICE', 'JOBTYPE', 'JOURNALENTRY', 'KEYWORD', 'KEYWORDS', 'LABORCATEGORY', 'LABORCOST', 'LABORDEFERREDEXPENSEACCT', 'LABOREXPENSEACCT', 'LABORPRICE', 'LABORRESOURCES', 'LANDEDCOSTALLOCATIONMETHOD', 'LANDEDCOSTAMOUNT', 'LANDEDCOSTCOSTCATEGORY', 'LANDEDCOSTCURRENCY', 'LANDEDCOSTEFFECTIVEDATE', 'LANDEDCOSTEXCHANGERATE', 'LANDEDCOSTSHIPMENTITEMS', 'LANGUAGE', 'LASTBASELINEDATE', 'LASTBILLCYCLEDATE', 'LASTBILLCYCLEDATE', 'LASTBILLDATE', 'LASTBILLDATE', 'LASTCOMPUTATIONDATE', 'LASTCUSTOMERMESSAGERECEIVED', 'LASTISSUEATTACHED', 'LASTISSUEREMOVED', 'LASTMERGEDFROMARRANGEMENT', 'LASTMESSAGEDATE', 'LASTMODIFIED', 'LASTMODIFIEDBY', 'LASTMODIFIEDBY', 'LASTMODIFIEDDATE', 'LASTMODIFIEDDATE', 'LASTNAME', 'LASTPAGEVISITED', 'LASTPAIDDATE', 'LASTPURCHASEPRICE', 'LASTREOPENEDDATE', 'LASTREVIEWDATE', 'LASTVISIT', 'LATEDEMANDTHRESHOLD', 'LATEPERIODDAYS', 'LEADSGENERATED', 'LEADSOURCE', 'LEADTIME', 'LEADTIME', 'LEGALNAME', 'LENGTH', 'LIABILITYACCOUNT', 'LIMITTIMETOASSIGNEES', 'LINECREATEDFROM', 'LINENUMBER', 'LNAME', 'LOCALCHARGEAMOUNT', 'LOCALTAXAMOUNT', 'LOCATION', 'LOCATION', 'LOCATION', 'LOCATION', 'LOCATIONALLOWSTOREPICKUP', 'LOCATIONSTOREPICKUPBUFFERSTOCK', 'LOCATIONURLALIAS', 'LOCKSTATUS', 'LONGDESCRIPTION', 'LOWERWARNINGLIMIT', 'LOWVALUE', 'LOWVALUEPERCENT', 'MACHINERESOURCES', 'MANUFACTURER', 'MANUFACTURERADDR1', 'MANUFACTURERCITY', 'MANUFACTURERSTATE', 'MANUFACTURERTARIFF', 'MANUFACTURERTAXID', 'MANUFACTURERZIP', 'MANUFACTURINGCHARGEITEM', 'MANUFACTURINGCOSTTEMPLATE', 'MANUFACTURINGLOCATIONS', 'MANUFACTURINGWORKCENTER', 'MAPPEDNETSUITEACCOUNT', 'MARGINTARGET', 'MARITALSTATUS', 'MATCHBILLTORECEIPT', 'MATCHEMPLOYEEBY', 'MATERIALIZETIME', 'MATRIXITEMNAMETEMPLATE', 'MAXDONATIONAMOUNT', 'MAXIMUMQUANTITY', 'MEDICARE', 'MEMO', 'MEMO', 'MEMO', 'MEMO', 'MESSAGE', 'METATAGHTML', 'MILESTONE', 'MINIMUMORDERAMOUNT', 'MINIMUMQUANTITY', 'MINIMUMRESCHEDULEDAYS', 'MNAME', 'MOBILEPHONE', 'MODIFICATIONTYPE', 'MODIFIEDBY', 'MODULE', 'MONTHLYCLOSING', 'MOSSAPPLIES', 'MPN', 'MSPROJOUTLINENUM', 'MSPROJPREDS', 'MSPROJRESOURCES', 'MSPROJSCHEDWORK', 'MSPROJSERVICEITEM', 'MSPROJUID', 'MULTMANUFACTUREADDR', 'NAME', 'NAME', 'NAME', 'NAME', 'NAME', 'NAME', 'NAME', 'NEGATIVENUMBERFORMAT', 'NETSUITETRANSACTIONTYPE', 'NEWDATE', 'NEWDETAILS', 'NEWSTANDARDMIGRATEDATE', 'NEXTAGCATEGORY', 'NEXTAPPROVER', 'NEXTAPPROVER', 'NEXTAPPROVER', 'NEXTBILLCYCLEDATE', 'NEXTBILLCYCLEDATE', 'NEXTINVTCOUNTDATE', 'NEXTRENEWALSTARTDATE', 'NEXTREVIEWDATE', 'NONBILLABLETASK', 'NOPRICEMESSAGE', 'NOTES', 'NUMBERFORMAT', 'NUMBEROFORDERS', 'NUMBERTOGENERATE', 'NUMOFALLOWEDDOWNLOADS', 'OFFER', 'OFFERSUPPORT', 'OFFICEPHONE', 'ONLYUSERESERVATIONASSUPPLY', 'ONSPECIAL', 'OPENINGBALANCE', 'OPENINGBALANCEACCOUNT', 'OPENINGBALANCEDATE', 'OPERATIONSEQUENCE', 'ORDER', 'ORDERPRIORITY', 'ORGANIZER', 'ORIGIN', 'ORIGINALCHANGEORDERDISCAMOUNT', 'ORIGINALCHANGEORDERQUANTITY', 'ORIGINALDATE', 'ORIGINALITEMSUBTYPE', 'ORIGINALITEMTYPE', 'ORIGINATINGSUBSIDIARY', 'OTHERRELATIONSHIPS', 'OUTGOINGMESSAGE', 'OUTOFSTOCKBEHAVIOR', 'OUTOFSTOCKMESSAGE', 'OUTSIDEPROJECTPLAN', 'OVERALLQUANTITYPRICINGTYPE', 'OVERDUEBALANCE', 'OVERHEADTYPE', 'OVERRIDECURRENCYFORMAT', 'OVERRIDERATE', 'OWNER', 'OWNERROLE', 'PAGETITLE', 'PAIDEXTERNALLY', 'PARENT', 'PARENTBOMELEMENT', 'PARENTLINECURRENCY', 'PARENTLINECURRENCY', 'PARTNER', 'PARTNERCODE', 'PASSPORTNUMBER', 'PASSWORD', 'PASSWORD2', 'PASTDUEFORECASTDAYS', 'PASTHORIZON', 'PASTHORIZONDATE', 'PAYABLESACCOUNT', 'PAYFREQUENCY', 'PAYMENTMETHOD', 'PAYROLLITEM', 'PAYROLLWORKPLACE', 'PERCENTCOMPLETE', 'PERCENTCOMPLETEBYRSRCALLOC', 'PERCENTTIMECOMPLETE', 'PERCENTWORKCOMPLETE', 'PERIODICLOTSIZEDAYS', 'PERIODICLOTSIZETYPE', 'PERIODOFFSET', 'PERIODOFFSET', 'PERMITDISCOUNT', 'PHONE', 'PHONE', 'PHONETICNAME', 'PLANNEDHOURS', 'PLANNEDHOURS', 'PLANNEDORDERSTATUS', 'PLANNEDPERIOD', 'PLANNEDWORK', 'PLANNEDWORKBASELINE', 'PLANNEDWORKTOTAL', 'PLANNINGITEMCATEGORY', 'POCURRENCY', 'PONUMBER', 'PORATE', 'PORECEIPTCOST', 'POSTED', 'POSTINGDISCOUNTAPPLIED', 'POVENDOR', 'PREDCONFIDENCE', 'PREDICTEDDAYS', 'PREFCCPROCESSOR', 'PREFERENCECRITERION', 'PREFERREDLOCATION', 'PREFERREDSTOCKLEVEL', 'PREFERREDSTOCKLEVELDAYS', 'PREPAYMENTBALANCE', 'PRICE', 'PRICE', 'PRICEBOOK', 'PRICEINTERVALFREQUENCY', 'PRICELEVEL', 'PRICEMODELTYPE', 'PRICINGGROUP', 'PRINTITEMS', 'PRINTONCHECKAS', 'PRIORITY', 'PROBABILITY', 'PRODPRICEVARIANCEACCT', 'PRODQTYVARIANCEACCT', 'PRODUCER', 'PRODUCT', 'PRODUCTFEED', 'PRODUCTSERVICE', 'PRODUCTTEAM', 'PROFILE', 'PROFILETYPE', 'PROFIT', 'PROJECT', 'PROJECTCOMPLETELYBILLED', 'PROJECTEDENDDATE', 'PROJECTEDENDDATEBASELINE', 'PROJECTEXPENSETYPE', 'PROJECTFORMTEMPLATE', 'PROJECTIONDURATION', 'PROJECTIONINTERVAL', 'PROJECTIONMETHOD', 'PROJECTIONSTARTDATE', 'PROJECTMANAGER', 'PROJECTREVENUERULE', 'PROJECTTASK', 'PROJECTTEMPLATE', 'PROMOTIONCODE', 'PRORATEENDDATE', 'PRORATESTARTDATE', 'PURCHASEDESCRIPTION', 'PURCHASEORDER', 'PURCHASEORDERAMOUNT', 'PURCHASEORDERAPPROVALLIMIT', 'PURCHASEORDERAPPROVER', 'PURCHASEORDERLIMIT', 'PURCHASEORDERQUANTITY', 'PURCHASEORDERQUANTITYDIFF', 'PURCHASEPRICEVARIANCEACCT', 'PURCHASETAXCODE', 'QUANTITY', 'QUANTITY', 'QUANTITYAVAILABLE', 'QUANTITYAVAILABLEBASE', 'QUANTITYBACKORDERED', 'QUANTITYBILLED', 'QUANTITYCOMMITTED', 'QUANTITYEXPECTED', 'QUANTITYONHAND', 'QUANTITYONHANDBASE', 'QUANTITYONORDER', 'QUANTITYPRICINGSCHEDULE', 'QUANTITYRECEIVED', 'QUANTITYREMAINING', 'QUICKNOTE', 'RATE', 'RATE', 'RATEINCLUDINGTAX', 'RATEMULTIPLIER', 'RATEROUNDINGTYPE', 'RATESOURCETYPE', 'REACTIVATIONOPTION', 'RECALCADJUSTPERIODOFFSET', 'RECALCADJUSTPERIODOFFSET', 'RECEIPTAMOUNT', 'RECEIPTQUANTITY', 'RECEIPTQUANTITYDIFF', 'RECEIVABLESACCOUNT', 'RECEIVINGLOCATION', 'RECOGNITIONACCOUNT', 'RECOGNITIONMETHOD', 'RECOGNITIONMETHOD', 'RECOGNITIONPERIOD', 'RECOGNITIONPERIOD', 'RECOGNITIONTREATMENT', 'RECOGNITIONTREATMENTRULE', 'RECORD', 'RECORDID', 'RECORDNUMBER', 'RECORDNUMBER', 'RECORDTYPE', 'RECURRENCESTARTDATE', 'REFERENCEID', 'REFERRER', 'REFERRINGURL', 'REFORECASTMETHOD', 'REFORECASTMETHOD', 'REJECTEDHOURS', 'REJECTIONNOTE', 'RELATEDITEMSDESCRIPTION', 'RELATEDREVENUEARRANGEMENT', 'RELATEDREVENUEELEMENT', 'RELATEDTRANSACTIONS', 'RELEASED', 'RELEASEDATE', 'REMAININGDEFERREDBALANCE', 'REMAININGDEFERREDBALANCE', 'REMAININGDEFERREDCOSTBALANCE', 'REMAININGTIMETOCHARGE', 'REMAININGWORK', 'REMINDERDAYS', 'REMINDERMINUTES', 'REMINDERTYPE', 'RENEWALENDDATE', 'RENEWALMETHOD', 'RENEWALPLAN', 'RENEWALPRICEBOOK', 'RENEWALSTARTDATE', 'RENEWALTERM', 'RENEWALTRANTYPE', 'REORDERMULTIPLE', 'REORDERPOINT', 'REPLENISHMENTMETHOD', 'REPORTEDBY', 'REPRESENTINGSUBSIDIARY', 'REPRODUCE', 'REQUESTEDBY', 'REQUESTOFFCYCLEINVOICE', 'REQUESTOFFCYCLEINVOICE', 'REQUESTOR', 'REQUIREPWDCHANGE', 'RESALENUMBER', 'RESCHEDULEHORIZON', 'RESCHEDULEINDAYS', 'RESCHEDULEINDAYS', 'RESCHEDULEOUTDAYS', 'RESCHEDULEOUTDAYS', 'RESIDENTSTATUS', 'RESIDUAL', 'RESIDUAL', 'RESIDUALDISCSALESAMOUNT', 'RETURNOFELEMENT', 'REVENUEALLOCATIONGROUP', 'REVENUEALLOCATIONGROUP', 'REVENUEALLOCATIONRATIO', 'REVENUEARRANGEMENT', 'REVENUEMIGRATEADJACCOUNT', 'REVENUEPLAN', 'REVENUEPLANCURRENCY', 'REVENUEPLANCURRENCY', 'REVENUEPLANSTATUS', 'REVENUEPLANTYPE', 'REVENUEPLANTYPE', 'REVENUERECOGNITIONRULE', 'REVENUERECOGNITIONRULE', 'REVENUERECOGNITIONRULE', 'REVIEWER', 'REVRECENDDATE', 'REVRECENDDATE', 'REVRECENDDATESOURCE', 'REVRECENDDATESOURCE', 'REVRECFORECASTRULE', 'REVRECFORECASTRULE', 'REVRECLASSFXACCOUNT', 'REVRECOPTION', 'REVRECSCHEDULE', 'REVRECSTARTDATE', 'REVRECSTARTDATE', 'REVRECSTARTDATESOURCE', 'REVRECSTARTDATESOURCE', 'ROI', 'ROTATIONTYPE', 'ROUNDUPASCOMPONENT', 'RULE', 'RULEGROUP', 'RULEORDER', 'RUNID', 'RUNRATE', 'SAFETYSTOCKLEVEL', 'SAFETYSTOCKLEVELDAYS', 'SALESAMOUNT', 'SALESDESCRIPTION', 'SALESORDER', 'SALESORDERLINE', 'SALESORDERLINENUMBER', 'SALESREADINESS', 'SALESREP', 'SALESROLE', 'SALESTAXCODE', 'SALEUNIT', 'SALUTATION', 'SCHEDULEBCODE', 'SCHEDULEBNUMBER', 'SCHEDULEBQUANTITY', 'SCHEDULEDENDDATE', 'SCHEDULEDENDDATEBASELINE', 'SCHEDULINGMETHOD', 'SCRAPACCT', 'SEARCHENGINE', 'SEARCHKEYWORDS', 'SEASONALDEMAND', 'SECONDARYBASEUNIT', 'SECONDARYCONSUMPTIONUNIT', 'SECONDARYPURCHASEUNIT', 'SECONDARYSALEUNIT', 'SECONDARYSTOCKUNIT', 'SECONDARYUNITSTYPE', 'SEMESTER', 'SENDEMAIL', 'SENDTRANSACTIONSVIA', 'SERIALNUMBER', 'SERIALNUMBERS', 'SERVICEENDDATE', 'SERVICEGROUP', 'SERVICEITEM', 'SERVICESTARTDATE', 'SETUPTIME', 'SEVERITY', 'SHIPADDRESS', 'SHIPADDRESSLIST', 'SHIPCOMPLETE', 'SHIPINDIVIDUALLY', 'SHIPMENTBASECURRENCY', 'SHIPMENTCREATEDDATE', 'SHIPMENTITEM', 'SHIPMENTITEMAMOUNT', 'SHIPMENTITEMDESCRIPTION', 'SHIPMENTITEMEFFECTIVEDATE', 'SHIPMENTITEMEXCHANGERATE', 'SHIPMENTMEMO', 'SHIPMENTNUMBER', 'SHIPMENTSTATUS', 'SHIPPACKAGE', 'SHIPPINGCARRIER', 'SHIPPINGCOST', 'SHIPPINGITEM', 'SHIPPINGPARTNER', 'SHOPPINGDOTCOMCATEGORY', 'SHOPZILLACATEGORYID', 'SHOWDEFAULTDONATIONAMOUNT', 'SIMULATIONNUMBER', 'SITEMAPPRIORITY', 'SOCIALSECURITY', 'SOCIALSECURITYNUMBER', 'SOFTDESCRIPTOR', 'SOLUTIONCODE', 'SOURCE', 'SOURCEACCOUNT', 'SOURCECLASS', 'SOURCEDEPARTMENT', 'SOURCEITEMLOCATION', 'SOURCELOCATION', 'SOURCELOCATION', 'SOURCESERVICEITEMFROMRATECARD', 'SOURCETYPE', 'SOURCETYPE', 'SOURCEWEBSITE', 'SPAMLOCK', 'SPECIALSDESCRIPTION', 'SSCORE', 'STAGE', 'STANDARDCOSTVERSION', 'STARTDATE', 'STARTDATE', 'STARTDATE', 'STARTDATEBASELINE', 'STARTDATEBASELINE', 'STARTDATETIMEOFFCALC', 'STARTOFFSET', 'STARTOFFSET', 'STARTTIME', 'STATE', 'STATUS', 'STATUS', 'STATUS', 'STATUS', 'STDDEVDAYSLATEEARLY', 'STOCKDESCRIPTION', 'STOCKUNIT', 'STOPIFCAPPED', 'STOREDESCRIPTION', 'STOREDETAILEDDESCRIPTION', 'STOREDISPLAYIMAGE', 'STOREDISPLAYNAME', 'STOREDISPLAYTHUMBNAIL', 'STOREITEMTEMPLATE', 'STRATEGY', 'STRENGTHS', 'STUDENTID', 'STUDEPARTMENT', 'STUEMAIL', 'STUNATIONALITY', 'SUBMITTEDHOURS', 'SUBPARTNERLOGIN', 'SUBSCRIPTION', 'SUBSCRIPTIONCHANGEORDERSTATUS', 'SUBSCRIPTIONLINE', 'SUBSCRIPTIONLINE', 'SUBSCRIPTIONLINEDISCOUNT', 'SUBSCRIPTIONLINEQUANTITY', 'SUBSCRIPTIONLINESTATUS', 'SUBSCRIPTIONLINETYPE', 'SUBSCRIPTIONPLAN', 'SUBSCRIPTIONPLANLINE', 'SUBSCRIPTIONREVISION', 'SUBSIDIARY', 'SUBSIDIARY', 'SUBSIDIARY', 'SUPERVISOR', 'SUPERVISORAPPROVAL', 'SUPERVISORPHONE', 'SUPPLYENTITY', 'SUPPLYLOCATION', 'SUPPLYLOCATIONDATE', 'SUPPLYLOCATIONSUBSIDIARY', 'SUPPLYLOTSIZINGMETHOD', 'SUPPLYPLANDEFINITION', 'SUPPLYREPLENISHMENTMETHOD', 'SUPPLYTIMEFENCE', 'SUPPLYTIMEFENCE', 'SUPPLYTYPE', 'SUPPLYTYPE', 'SUPPORTCASE', 'SUPPORTFIRSTREPLY', 'SYMBOLPLACEMENT', 'TARGETUTILIZATION', 'TAXABLE', 'TAXEXEMPT', 'TAXFRACTIONUNIT', 'TAXIDNUM', 'TAXITEM', 'TAXROUNDING', 'TAXSCHEDULE', 'TAXTOTAL', 'TEGATAMATURITY', 'TEMPLATE', 'TEMPLATESTORED', 'TEMPLATESTORED', 'TERMINATEATSTARTOFDAY', 'TERMINATIONBYDEATH', 'TERMINATIONCATEGORY', 'TERMINATIONDATE', 'TERMINATIONDETAILS', 'TERMINATIONREASON', 'TERMINATIONREGRETTED', 'TERMINDAYS', 'TERMINDAYS', 'TERMINMONTHS', 'TERMINMONTHS', 'TERMINMONTHS', 'TERMS', 'TERMS', 'TERMS', 'TERRITORY', 'TIMEAPPROVAL', 'TIMEAPPROVER', 'TIMEAPPROVER', 'TIMEDEVENT', 'TIMEELAPSED', 'TIMELINETYPE', 'TIMEMODIFIED', 'TIMEOFFBALANCES', 'TIMEOFFPLAN', 'TIMEOFFTYPE', 'TIMEONHOLD', 'TIMEOPEN', 'TIMERECORD', 'TIMEREMAINING', 'TIMETOASSIGN', 'TIMETOCLOSE', 'TITLE', 'TOSUBSIDIARY', 'TOTAL', 'TOTALAMORTIZED', 'TOTALHOURS', 'TOTALQUANTITYONHAND', 'TOTALRECOGNIZED', 'TOTALRECOGNIZED', 'TOTALREVENUE', 'TOTALUNITCOST', 'TOTALVALUE', 'TRACKCODE', 'TRACKLANDEDCOST', 'TRANCODEMAPPINGDESCRIPTION', 'TRANCODEMAPPINGID', 'TRANDATE', 'TRANSACTION', 'TRANSACTION', 'TRANSACTIONCREATED', 'TRANSACTIONID', 'TRANSACTIONLINE', 'TRANSACTIONPARSER', 'TRANSACTIONPOLARITY', 'TRANSACTIONTYPE', 'TRANSACTIONTYPE', 'TRANSFERPRICE', 'TREATMENTOVERRIDE', 'TSCORE', 'TWOSTEPREVENUEALLOCATION', 'TYPE', 'UNBILLEDORDERS', 'UNBILLEDORDERS', 'UNBILLEDORDERSPRIMARY', 'UNBILLEDRECEIVABLEGROUP', 'UNBILLEDRECEIVABLEGROUPING', 'UNBUILDVARIANCEACCOUNT', 'UNIQUEVISITORS', 'UNIT', 'UNITLANDEDCOST', 'UNITS', 'UNITSTYPE', 'UNITSTYPE', 'UPCCODE', 'UPPERWARNINGLIMIT', 'URL', 'URLCOMPONENT', 'USAGEDATE', 'USAGEMULTIPLIERLINE', 'USAGEQUANTITY', 'USAGESUBSCRIPTION', 'USAGESUBSCRIPTIONLINE', 'USE', 'USEALLOCATEDTIMEFORFORECAST', 'USEBINS', 'USECACHEDCRMGROUP', 'USECOMPONENTYIELD', 'USEEMPLOYEETEMPLATE', 'USEMARGINALRATES', 'USEMATERIALIZEDSAVEDSEARCH', 'USEPERCENTCOMPLETEOVERRIDE', 'USEPERQUEST', 'USETIMEDATA', 'USETYPE', 'VARIANCETYPE', 'VATREGNUMBER', 'VENDOR', 'VENDORNAME', 'VENDRETURNVARIANCEACCOUNT', 'VERSION', 'VERSIONBROKEN', 'VERSIONFIXED', 'VERSIONTARGET', 'VERTICAL', 'VESSELNUMBER', 'VISAEXPDATE', 'VISATYPE', 'VISITS', 'VSOEDEFERRAL', 'VSOEDELIVERED', 'VSOEPERMITDISCOUNT', 'VSOEPRICE', 'VSOESOPGROUP', 'W4COMPLETED', 'WEAKNESSES', 'WEBLEAD', 'WEBSITE', 'WEIGHT', 'WIDTH', 'WIPACCT', 'WIPVARIANCEACCT', 'WORKASSIGNMENT', 'WORKCALENDAR', 'WORKCALENDAR', 'WORKCALENDARHOURS', 'WORKORDER', 'WORKPLACE', 'ZIPCODE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, entryform_fieldidElemID.name],
  }),
  entryform_standard: new PrimitiveType({
    elemID: entryform_standardElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['BILLOFDISTRIBUTIONFORM', 'CLASSSEGMENTMAPPINGFORM', 'DASHBOARDCUSTOMERFORM', 'DEPARTMENTSEGMENTMAPPINGFORM', 'DISTRIBUTIONNETWORKFORM', 'INVENTORYCOSTTEMPLATEFORM', 'LABORCATEGORYFORM', 'LABORCOSTELEMENTFORM', 'LOCATIONCOSTINGGROUPFORM', 'LOCATIONSEGMENTMAPPINGFORM', 'MANUFACTURINGCOSTTEMPLATEFORM', 'MANUFACTURINGROUTINGFORM', 'MANUFACTURINGTASK', 'SHIPPINGPARTNERPACKAGEFORM', 'SHIPPINGPARTNERREGISTRATIONFORM', 'SHIPPINGPARTNERSHIPMENTFORM', 'STANDARDACCOUNTINGBOOKFORM', 'STANDARDBILLINGACCOUNT', 'STANDARDBILLINGRATECARDFORM', 'STANDARDCAMPAIGNFORM', 'STANDARDCASEFORM', 'STANDARDCHARGEFORM', 'STANDARDCOMPETITORFORM', 'STANDARDCONTACTFORM', 'STANDARDCUSTOMERFORM', 'STANDARDCUSTOMRECORDFORM', 'STANDARDDESCRIPTIONFORM', 'STANDARDDISCOUNTFORM', 'STANDARDEMPLOYEEFORM', 'STANDARDENTITYACCOUNTMAPPINGFORM', 'STANDARDEVENTFORM', 'STANDARDEXPENSEAMORTIZATIONEVENTFORM', 'STANDARDEXPENSEAMORTIZATIONRULEFORM', 'STANDARDEXPENSEBASEDCHARGERULEFORM', 'STANDARDEXPENSEFORM', 'STANDARDEXPENSEPLANFORM', 'STANDARDEXTERNALCASEFORM', 'STANDARDEXTERNALCUSTOMERFORM', 'STANDARDEXTERNALISSUEFORM', 'STANDARDEXTERNALPARTNERFORM', 'STANDARDFAIRVALUEFORMULAFORM', 'STANDARDFAIRVALUEPRICEFORM', 'STANDARDFIXEDDATECHARGERULEFORM', 'STANDARDGAINLOSSACCOUNTMAPPINGFORM', 'STANDARDGENERICRESOURCEFORM', 'STANDARDGLOBALACCOUNTMAPPINGFORM', 'STANDARDGLOBALINVENTORYRELATIONSHIPFORM', 'STANDARDGROUPITEMFORM', 'STANDARDHELPDESKFORM', 'STANDARDINBOUNDSHIPMENT', 'STANDARDINVENTORYPARTFORM', 'STANDARDINVENTORYSTATUS', 'STANDARDINVOICEGROUP', 'STANDARDISSUEFORM', 'STANDARDITEMACCOUNTMAPPINGFORM', 'STANDARDITEMDEMANDPLANFORM', 'STANDARDITEMLOCATIONCONFIGURATIONFORM', 'STANDARDITEMPROCESSFAMILYFORM', 'STANDARDITEMPROCESSGROUPFORM', 'STANDARDITEMREVENUECATEGORYFORM', 'STANDARDITEMSUPPLYPLANFORM', 'STANDARDJOBFORM', 'STANDARDLEADFORM', 'STANDARDMANAGERGROUPITEMFORM', 'STANDARDMANAGERINVENTORYPARTFORM', 'STANDARDMANAGERNONINVENTORYPARTFORM', 'STANDARDMILESTONECHARGERULEFORM', 'STANDARDNONINVENTORYPARTFORM', 'STANDARDONLINEJOBFORM', 'STANDARDPARTNERFORM', 'STANDARDPAYMENTFORM', 'STANDARDPHONECALLFORM', 'STANDARDPLANNEDREVENUEFORM', 'STANDARDPLANNEDSTANDARDCOSTFORM', 'STANDARDPOPUPCONTACTFORM', 'STANDARDPOPUPCUSTOMERFORM', 'STANDARDPOPUPEMPLOYEEFORM', 'STANDARDPOPUPPARTNERFORM', 'STANDARDPOPUPVENDORFORM', 'STANDARDPRICEBOOKFORM', 'STANDARDPRICEPLANFORM', 'STANDARDPROJECTBUDGETFORM', 'STANDARDPROJECTICCHARGEREQFORM', 'STANDARDPROJECTPROGRESSCHARGERULEFORM', 'STANDARDPROJECTTASKFORM', 'STANDARDPROJECTTEMPLATEFORM', 'STANDARDPROMOTIONCODEFIXEDPRICE', 'STANDARDPROMOTIONCODEFORM', 'STANDARDPROMOTIONCODEFREEGIFT', 'STANDARDPROMOTIONCODEITEM', 'STANDARDPROMOTIONCODEORDER', 'STANDARDPROMOTIONCODESHIPPING', 'STANDARDPURCHASERULEFORM', 'STANDARDRESOURCEALLOCATIONFORM', 'STANDARDREVENUEELEMENTFORM', 'STANDARDREVENUERECOGNITIONEVENTFORM', 'STANDARDREVENUERECOGNITIONPLANFORM', 'STANDARDREVENUERECOGNITIONRULEFORM', 'STANDARDSOLUTIONFORM', 'STANDARDSTANDARDCOSTVERSIONFORM', 'STANDARDSUBSCRIPTIONCHANGEORDER', 'STANDARDSUBSCRIPTIONFORM', 'STANDARDSUBSCRIPTIONLINEFORM', 'STANDARDSUBSCRIPTIONPLANFORM', 'STANDARDSUPPLYCHAINSNAPSHOT', 'STANDARDTASKFORM', 'STANDARDTIMEBASEDCHARGERULEFORM', 'STANDARDTIMEENTRYFORM', 'STANDARDTIMESHEETFORM', 'STANDARDTIMETRACKINGFORM', 'STANDARDUSAGEFORM', 'STANDARDVENDORFORM', 'STANDARDWBSFORM', 'STANDARDWORKASSIGNMENT', 'STDBONUSFORM', 'STDFORMATPROFILEFORM', 'STDIMPORTEDEMPLOYEEEXPENSEFORM', 'STDPLANNEDORDERFORM', 'STDPLANNINGITEMCATEGORYFORM', 'STDPLANNINGITEMGROUPFORM', 'STDPLANNINGRULEGROUPFORM', 'STDSALESCHANNELFORM', 'STDSTUDENTRECORDFORM', 'STDSUPPLYCHAINSNAPSHOTSIMULATIONFORM', 'STDSUPPLYCHANGEORDERFORM', 'STDSUPPLYPLANDEFINITIONFORM'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, entryform_standardElemID.name],
  }),
  entryform_sublistid: new PrimitiveType({
    elemID: entryform_sublistidElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ENTITYACCESS', 'ENTITYACCESSHISTORY', 'ENTITYACHACCT', 'ENTITYACTIVEWORKFLOWS', 'ENTITYACTIVITIES', 'ENTITYADDRESSBOOK', 'ENTITYADDRESSBOOK', 'ENTITYBILLINGACCOUNTS', 'ENTITYBILLINGSUBSCRIPTIONS', 'ENTITYBONUSES', 'ENTITYBULKMERGE', 'ENTITYCALLS', 'ENTITYCAMPAIGNS', 'ENTITYCARTCONTENTS', 'ENTITYCASES', 'ENTITYCLICKSTREAMS', 'ENTITYCOMMISSION', 'ENTITYCOMPANY', 'ENTITYCONTACT', 'ENTITYCORPORATECARDS', 'ENTITYCREDITCARDS', 'ENTITYCURJURISDICTIONS', 'ENTITYCURRENCY', 'ENTITYCURRENCY', 'ENTITYCUSTOMERS', 'ENTITYDD', 'ENTITYDEALITEM', 'ENTITYDOWNLOAD', 'ENTITYEDUCATION', 'ENTITYEFTACCT', 'ENTITYEMERGENCYCONTACT', 'ENTITYEMPPERMS', 'ENTITYERPOLICIES', 'ENTITYEVENTS', 'ENTITYFINHIST', 'ENTITYGROUPPRICING', 'ENTITYHOSTEDHITS', 'ENTITYHREDUCATION', 'ENTITYHRSUPERVISORHIST', 'ENTITYISSUES', 'ENTITYITEMORDERS', 'ENTITYITEMPRICING', 'ENTITYITEMS', 'ENTITYJOBRESOURCES', 'ENTITYJOBS', 'ENTITYJOBTASKS', 'ENTITYJURISDICTIONHIST', 'ENTITYKEYWORDS', 'ENTITYMEDIAITEM', 'ENTITYMESSAGES', 'ENTITYMILESTONES', 'ENTITYONLINEFORMEVENTS', 'ENTITYONLINEFORMS', 'ENTITYOPPORTUNITIES', 'ENTITYPAGEHITS', 'ENTITYPARTNERS', 'ENTITYPAYACCRUED', 'ENTITYPAYCONTRIB', 'ENTITYPAYDEDUCT', 'ENTITYPAYEARN', 'ENTITYPAYMENTINSTRUMENTS', 'ENTITYPAYWITH', 'ENTITYPAYWITHOTHER', 'ENTITYPAYWITHSTATE', 'ENTITYPCTCOMPLETEOVERRIDE', 'ENTITYPLSTATEMENT', 'ENTITYPRICINGSCHEDULE', 'ENTITYPROJECTINDICATORS', 'ENTITYPROMOCODE', 'ENTITYRATES', 'ENTITYREFERRER', 'ENTITYRESOURCEALLOCATION', 'ENTITYROLES', 'ENTITYSALESTEAM', 'ENTITYSUBMACHINE', 'ENTITYSUBMACHINE', 'ENTITYSUBORDINATES', 'ENTITYSUBS', 'ENTITYSUBSCRIPTIONMSGMACH', 'ENTITYSUBSCRIPTIONS', 'ENTITYSYSTEMNOTES', 'ENTITYTASKS', 'ENTITYTAXREGISTRATION', 'ENTITYTIME', 'ENTITYTIME', 'ENTITYTIMEITEM', 'ENTITYTIMEOFFCONFLICTS', 'ENTITYUPSELL', 'ENTITYUSERNOTES', 'ENTITYWBS', 'ENTITYWORKASSIGNMENT', 'ENTITYWORKFLOWHISTORY', 'EVENTACTIVEWORKFLOWS', 'EVENTACTIVITIES', 'EVENTASSIGNEE', 'EVENTATTENDEE', 'EVENTBROKENINVERSION', 'EVENTCALLS', 'EVENTCAMPAIGNDIRECTMAIL', 'EVENTCAMPAIGNDRIP', 'EVENTCAMPAIGNEMAIL', 'EVENTCAMPAIGNEVENT', 'EVENTCASE', 'EVENTCASES', 'EVENTCONTACT', 'EVENTCOSTDETAIL', 'EVENTDEFAULTEVENT', 'EVENTDETAILS', 'EVENTESCALATEHIST', 'EVENTESCALATETO', 'EVENTEVENTRESPONSE', 'EVENTEVENTS', 'EVENTFIXEDINVERSION', 'EVENTINVITECALENDAR', 'EVENTISSUES', 'EVENTMEDIAITEM', 'EVENTMESSAGES', 'EVENTPREDECESSOR', 'EVENTRELATEDISSUES', 'EVENTRESOURCE', 'EVENTSOLUTIONS', 'EVENTSYSTEMNOTES', 'EVENTTARGETVERSION', 'EVENTTASKS', 'EVENTTIMEITEM', 'EVENTTIMEOFFCONFLICTS', 'EVENTTIMEOFFDETAILS', 'EVENTTOPICS', 'EVENTTRANSACTIONS', 'EVENTUSERNOTES', 'EVENTWORKASSIGNMENT', 'EVENTWORKFLOWHISTORY', 'ITEMACTIVEWORKFLOWS', 'ITEMACTIVEWORKFLOWS', 'ITEMBILLINGRATE', 'ITEMBINNUMBER', 'ITEMBINNUMBERSEARCH', 'ITEMCALLS', 'ITEMCORRELATEDITEMS', 'ITEMEVENTS', 'ITEMHIERARCHYVERSIONS', 'ITEMINVENTORYDETAILSRCH', 'ITEMINVENTORYNUMBERSRCH', 'ITEMINVENTORYSTATUSSRCH', 'ITEMITEMVENDOR', 'ITEMLOCATIONS', 'ITEMMEDIAITEM', 'ITEMMEMBER', 'ITEMMFGROUTING', 'ITEMNUMBERS', 'ITEMPRESITEMS', 'ITEMPRICE', 'ITEMSITECATEGORY', 'ITEMSYSTEMNOTES', 'ITEMSYSTEMNOTES', 'ITEMTASKS', 'ITEMTRANSACTIONS', 'ITEMTRANSACTIONS', 'ITEMTRANSLATIONS', 'ITEMUSERNOTES', 'ITEMUSERNOTES', 'ITEMWORKFLOWHISTORY', 'ITEMWORKFLOWHISTORY', 'OTHERACCOUNTMAPPING', 'OTHERACTIVEWORKFLOWS', 'OTHERACTIVEWORKFLOWS', 'OTHERBILLINGSCHEDULE', 'OTHERBILLREQUEST', 'OTHERCALLS', 'OTHERCAMPAIGNS', 'OTHERCHANGEORDER', 'OTHERCHARGES', 'OTHERCHARGES', 'OTHERCOSTDETAIL', 'OTHERCUSTOMERRETURN', 'OTHERDISTRIBUTIONCATEGORY', 'OTHERDISTRIBUTIONSOURCE', 'OTHERENROLL', 'OTHEREVENTS', 'OTHEREXPENSECODEMAPPING', 'OTHERFULFILLMENT', 'OTHERHISTORYTAB', 'OTHERIMPEMPLEXPENSEDETAIL', 'OTHERINVOICEGROUP', 'OTHERITEM', 'OTHERITEMS', 'OTHERLANDEDCOST', 'OTHERLINES', 'OTHERLOCATION', 'OTHERMEDIAITEM', 'OTHERMESSAGES', 'OTHERNEWLINEITEMS', 'OTHEROPPORTUNITIES', 'OTHERORDER', 'OTHERPARTNERS', 'OTHERPLANNINGMESSAGE', 'OTHERRATECARDPRICING', 'OTHERRATECARDPRICINGMULTI', 'OTHERRATECARDPROJECTS', 'OTHERRATECARDVERSION', 'OTHERRELATEDRECORDMACHINE', 'OTHERRELATEDSUBSCR', 'OTHERRENEWALHISTORY', 'OTHERRENEWALSTEPS', 'OTHERREVELEMENTS', 'OTHERROUTINGCOMPONENT', 'OTHERROUTINGSTEP', 'OTHERSUBLINE', 'OTHERSUBLINEFROMPLAN', 'OTHERSUBSCRIPTIONS', 'OTHERSYSTEMNOTES', 'OTHERSYSTEMNOTES', 'OTHERSYSTEMNOTES', 'OTHERSYSTEMNOTES', 'OTHERTASKS', 'OTHERTRANCODEMAPPING', 'OTHERTRANSACTIONS', 'OTHERTRANSLATIONS', 'OTHERUSERNOTES', 'OTHERWORKFLOWHISTORY', 'OTHERWORKFLOWHISTORY', 'RECORDACTIVEWORKFLOWS', 'RECORDMEDIAITEM', 'RECORDMESSAGES', 'RECORDSYSTEMNOTES', 'RECORDTRANSLATIONS', 'RECORDUSERNOTES', 'RECORDWORKFLOWHISTORY', 'TIMEACTIVEWORKFLOWS', 'TIMECHARGES', 'TIMESYSTEMNOTES', 'TIMEWORKFLOWHISTORY'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, entryform_sublistidElemID.name],
  }),
  entryform_subtabid: new PrimitiveType({
    elemID: entryform_subtabidElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CRMCONTACTS', 'ENTITYCURJURISDICTIONS', 'ENTITYEDUCATION', 'ENTITYEXPREPTCURRENCIES', 'ENTITYHRPERSONAL', 'ENTITYHRWORKSTATUS', 'ENTITYJURISDICTIONS', 'ENTITYPAYFED', 'ENTITYPROMOCODES', 'ENTITYQUALIFICATION', 'ENTITYSUBSCRIPTIONS', 'ENTITYSUBTAB_BBUDGET', 'ENTITYSUBTAB_CBUDGET', 'ENTITYWORKFLOW', 'EVENTFILE', 'EVENTMEDIA', 'EVENTSUBTAB_BBUDGET', 'EVENTSUBTAB_CBUDGET', 'EVENTSUPPORT', 'EVENTWORKFLOW', 'ITEMINVENTORYNUMBERS', 'ITEMLOCATIONS', 'ITEMMATRIX', 'ITEMMEMBERS', 'ITEMPROJECTS', 'ITEMPROJECTS', 'ITEMRELITEMS', 'ITEMTRANSLATION', 'ITEMVENDORS', 'ITEMWORKFLOW', 'ITEMWORKFLOW', 'OTHERWORKFLOW'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, entryform_subtabidElemID.name],
  }),
  entryform_tabid: new PrimitiveType({
    elemID: entryform_tabidElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CRMBUDGET', 'CRMKEYWORD', 'CRMMAIN', 'CRMMESSAGE', 'CRMRELATEDINFO', 'CRMRELATEDRECORDS', 'CRMSYSTEMINFORMATION', 'ENTITYACCESS', 'ENTITYACCOUNTING', 'ENTITYADDRESS', 'ENTITYADDRESS', 'ENTITYBILLACCNTS', 'ENTITYBUDGET', 'ENTITYCOMMISSION', 'ENTITYCOMMISSION', 'ENTITYCOMMUNICATION', 'ENTITYCOMPENSATIONTRACKING', 'ENTITYCUSTOM', 'ENTITYDD', 'ENTITYEDUCATION', 'ENTITYEFFECTIVEDATEHIST', 'ENTITYFINANCIAL', 'ENTITYGENERAL', 'ENTITYGOVID', 'ENTITYHUMANRESOURCES', 'ENTITYINFO', 'ENTITYMAIN', 'ENTITYMARKETING', 'ENTITYOUTSOURCEDMFG', 'ENTITYPAYROLL', 'ENTITYPL', 'ENTITYPREFERENCES', 'ENTITYPROJINDICATORS', 'ENTITYPROMOCODES', 'ENTITYQUALIFICATION', 'ENTITYRELATEDRECORDS', 'ENTITYRELATIONSHIPS', 'ENTITYRESOURCES', 'ENTITYSALES', 'ENTITYSCHEDULE', 'ENTITYSUBSCRIPTIONS', 'ENTITYSUBSCRIPTIONSTAB', 'ENTITYSUBSIDIARIES', 'ENTITYSUBSIDIARIES', 'ENTITYSUPPORT', 'ENTITYS_SYSINFO', 'ENTITYTAB_WBS', 'ENTITYTIMEOFF', 'ENTITYTIMETRACKING', 'ENTITYTIMETRACKING', 'ENTITYWORKFLOW', 'EVENTASSIGNEES', 'EVENTCASE', 'EVENTCOMMUNICATION', 'EVENTCOSTDETAILS', 'EVENTCUSTOM', 'EVENTDETAIL', 'EVENTESCALATION', 'EVENTEVENTS', 'EVENTEXTERNAL', 'EVENTFILE', 'EVENTGENERAL', 'EVENTICALENDAR', 'EVENTINTERACTIONS', 'EVENTISTATUS', 'EVENTMETRICS', 'EVENTNOTES', 'EVENTPREDECESSORS', 'EVENTRECURRENCE', 'EVENTRESOURCES', 'EVENTRSTATUS', 'EVENTSOLUTION', 'EVENTSTATISTICS', 'EVENTTIME', 'EVENTTIMEOFF', 'EVENTTOPIC', 'EVENTVERSION', 'EVENTWORKASSIGNMENTS', 'EVENTWORKFLOW', 'ITEMACCOUNTING', 'ITEMACCOUNTING', 'ITEMCOMMUNICATION', 'ITEMCOMMUNICATION', 'ITEMCUSTOM', 'ITEMCUSTOM', 'ITEMFILESINTERNAL', 'ITEMHAZMATDGOODS', 'ITEMHISTORY', 'ITEMINVENTORY', 'ITEMINVENTORYDETAIL', 'ITEMINVENTORYNUMBERS', 'ITEMMAIN', 'ITEMMAIN', 'ITEMMANUFACTURING', 'ITEMMATRIX', 'ITEMMEMBERS', 'ITEMMERCHANDISEHIERARCHY', 'ITEMPREFERENCES', 'ITEMPREFERENCES', 'ITEMPRICEBOOKS', 'ITEMPRICING', 'ITEMPURCHASINGINVENTORY', 'ITEMRELRECORDS', 'ITEMRELRECORDS', 'ITEMRENEWAL', 'ITEMREVRECORAMORTIZATION', 'ITEMSECONDARYUNITS', 'ITEMSPECIALS', 'ITEMSTORE', 'ITEMSYSTEMINFORMATION', 'ITEMSYSTEMINFORMATION', 'OTHERADDRESS', 'OTHERAUDIENCESETTINGS', 'OTHERCAMPAIGN', 'OTHERCHGORDERS', 'OTHERCODE', 'OTHERCOMMUNICATION', 'OTHERCONN_CONFIG_TAB', 'OTHERCOSTDETAILS', 'OTHERCOSTING', 'OTHERCREDENTIALFIELDS', 'OTHERCRMGROUPSETTINGS', 'OTHERCUSTOM', 'OTHERDEMAND', 'OTHERDETAILS', 'OTHEREMPLOYEE_LINKING_TAB', 'OTHERENROLL_FS_TAB', 'OTHEREXISTINGLINES', 'OTHEREXPENSE_CODE_MAP_TAB', 'OTHERFILTERSTAB', 'OTHERHISTORYTAB', 'OTHERIAM_FS_TAB', 'OTHERINVENTORYCOUNT', 'OTHERINVTLOCCUSTRETURN', 'OTHERINVTLOCFULFILLMENT', 'OTHERITEM', 'OTHERITEMS_TAB', 'OTHERITEM_FS_TAB', 'OTHERLANDEDCOST_TAB', 'OTHERLINES', 'OTHERLINES_TAB', 'OTHERLOCATIONSTAB', 'OTHERMAIN', 'OTHERMAIN', 'OTHERMINIMUMORDERAMOUNT', 'OTHERNEWLINES', 'OTHERORDERMANAGEMENT', 'OTHERORDERS', 'OTHEROTHER', 'OTHERPARSER_CONFIG_TAB', 'OTHERPARTNER', 'OTHERPLANNING', 'OTHERPLANNINGMESSAGES', 'OTHERPLANNINGTIMES', 'OTHERPREFERENCES', 'OTHERPRICING', 'OTHERRATES', 'OTHERRELATEDRECORDS', 'OTHERRELATEDRECORDS', 'OTHERRELRECORDS', 'OTHERRENEWAL', 'OTHERROUTINGCOMPONENTS', 'OTHERROUTINGSTEPS', 'OTHERRULE_FS_TAB', 'OTHERSALESCHANNELS', 'OTHERSAVEDSEARCHES', 'OTHERSCOPE_FS_TAB', 'OTHERSOURCE', 'OTHERSUBSCRIPTION', 'OTHERSYSTEMINFO', 'OTHERSYSTEMNOTES_FS_TAB', 'OTHERS_SYSINFO', 'OTHERS_SYSINFO', 'OTHERTTC_FS_TAB', 'OTHERUSAGELIMITS', 'OTHERVERSION', 'OTHERWORKFLOW', 'RECORDCUSTOM', 'RECORDMAIN', 'RECORDMEDIA', 'RECORDMERGE', 'RECORDNOTES', 'RECORDTRANSLATION', 'RECORDWORKFLOW', 'TIMEMAIN'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, entryform_tabidElemID.name],
  }),
  execution_context: new PrimitiveType({
    elemID: execution_contextElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACTION', 'ADVANCEDREVREC', 'BANKCONNECTIVITY', 'BANKSTATEMENTPARSER', 'BUNDLEINSTALLATION', 'CLIENT', 'CONSOLRATEADJUSTOR', 'CSVIMPORT', 'CUSTOMGLLINES', 'CUSTOMMASSUPDATE', 'DATASETBUILDER', 'DEBUGGER', 'EMAILCAPTURE', 'FICONNECTIVITY', 'FIPARSER', 'MAPREDUCE', 'OFFLINECLIENT', 'OTHER', 'PAYMENTGATEWAY', 'PAYMENTPOSTBACK', 'PLATFORMEXTENSION', 'PORTLET', 'PROMOTIONS', 'RECORDACTION', 'RESTLET', 'RESTWEBSERVICES', 'SCHEDULED', 'SDFINSTALLATION', 'SHIPPINGPARTNERS', 'SUITELET', 'TAXCALCULATION', 'USEREVENT', 'USERINTERFACE', 'WEBAPPLICATION', 'WEBSERVICES', 'WEBSTORE', 'WORKBOOKBUILDER', 'WORKFLOW'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, execution_contextElemID.name],
  }),
  feature_status: new PrimitiveType({
    elemID: feature_statusElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['DISABLED', 'ENABLED'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, feature_statusElemID.name],
  }),
  features: new PrimitiveType({
    elemID: featuresElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCOUNTING', 'ACCOUNTINGPERIODS', 'ACHVEND', 'ACTIVITYCODES', 'ADDONS', 'ADDRESSCUSTOMIZATION', 'ADMINKERNELPERM', 'ADVANCEDBILLOFMATERIALS', 'ADVANCEDEMPLOYEEPERMISSIONS', 'ADVANCEDEXPENSEMANAGEMENT', 'ADVANCEDGVMNTISSUEDIDTRACKING', 'ADVANCEDJOBS', 'ADVANCEDNUMBERINGSEQUENCES', 'ADVANCEDPRINTING', 'ADVANCEDPROCUREMENTAPPROVALS', 'ADVANCEDPROJECTACCOUNTING', 'ADVANCEDPROMOTIONS', 'ADVANCEDREVENUERECOGNITION', 'ADVANCEDREVENUERECOGNITIONAPP', 'ADVANCEDREVRECPLUGIN', 'ADVANCEDSITECUST', 'ADVANCEDSITEMANAGEMENT', 'ADVBILLING', 'ADVBINSERIALLOTMGMT', 'ADVFORECASTING', 'ADVINVENTORYMGMT', 'ADVPARTNERACCESS', 'ADVRECEIVING', 'ADVREVRECORADVEXPMGMT', 'ADVSHIPPING', 'ADVSUBSCRIPTIONBILLING', 'ADVTAXENGINE', 'ADVWEBREPORTS', 'ADVWEBSEARCH', 'ALTSALESAMOUNT', 'AMORTIZATION', 'APPDEFPKG', 'APPROVALROUTING', 'ASSEMBLIES', 'ASYNCCUSTOMER', 'ASYNCSALESORDER', 'AUTOAPPLYPROMOTIONS', 'AUTOLOCATIONASSIGNMENT', 'AVAILABLETOPROMISE', 'BALANCING_JOURNALS', 'BALANCING_SEGMENTS', 'BANKCONNECTIVITYPLUGIN', 'BARCODES', 'BASICGVMNTISSUEDIDTRACKING', 'BILLINGACCOUNTS', 'BILLINGCLASSES', 'BILLINGRATECARDS', 'BILLINGWORKCENTER', 'BILLPAY', 'BILLSCOSTS', 'BINMANAGEMENT', 'BLANKETPURCHASEORDERS', 'BOXNET', 'BUSINESS', 'CAMPAIGNASSISTANT', 'CAMPAIGNSUBSCRIPTIONS', 'CCTRACKING', 'CHARGEBASEDBILLING', 'CHARGEBASEDBILLINGANDADVREVREC', 'CHECKOUTSUBDOMAIN', 'CLASSES', 'COACLASSIFICATIONMANAGEMENT', 'COMMERCECATEGORIES', 'COMMERCESEARCHANALYTICS', 'COMMERCESEARCHBOOSTING', 'COMMISSIONONCUSTOMFIELDS', 'COMMISSIONS', 'COMMITABLEORDERSNOTSUPPLYALLOC', 'COMPENSATIONTRACKING', 'CONSOLPAYMENTS', 'CREATECONSOLIDATEDRATEPLUGINS', 'CREATEPAYMENTGATEWAYPLUGINS', 'CREATEPROMOTIONSPLUGINS', 'CREATESUITEBUNDLES', 'CRM', 'CRMTIME', 'CRM_TEMPLATE_CATEGORIES', 'CROSSSUBSIDIARYFULFILLMENT', 'CUSTOMCODE', 'CUSTOMERACCESS', 'CUSTOMGLLINES', 'CUSTOMPERMISSIONS', 'CUSTOMRECORDS', 'CUSTOMSEGMENTS', 'CUSTOMTRANSACTIONS', 'DEPARTMENTS', 'DIRECTDEPOSIT', 'DISTRIBUTIONRESOURCEPLANNING', 'DOCUMENTPUBLISHING', 'DOWNLOADITEMS', 'DROPSHIPMENTS', 'DUPLICATES', 'DYNALLOCATION', 'EFFECTIVEDATING', 'EFT', 'EMAILINTEGRATION', 'EMPLOYEECENTERPUBLISHING', 'EMPLOYEECHANGEREQUESTS', 'EMPPERMS', 'ENFORCE_INTEGRATION_ASD', 'ENHANCEDINVENTORYLOCATION', 'ENHANCEDPREMIERPAYROLL', 'ESCALATIONRULES', 'ESTIMATES', 'EXPENSEALLOCATION', 'EXPREPORTS', 'EXTCRM', 'EXTREMELIST', 'EXTSTORE', 'FCADVANCEDSECURITY', 'FCEXPENSE', 'FULFILLMENTREQUEST', 'FXRATETYPE', 'FXRATEUPDATES', 'GAINLOSSACCTMAPPING', 'GCO', 'GIFTCERTIFICATES', 'GLAUDITNUMBERING', 'GRIDORDERMANAGEMENT', 'GROSSPROFIT', 'GROUPAVERAGECOSTING', 'HELPDESK', 'HISTORICALMETRICS', 'HRANALYSIS', 'I18NTAXREPORTS', 'IDONINBOUNDSHIPMENT', 'INBOUNDCASEEMAIL', 'INBOUNDSHIPMENT', 'INSTALLMENTS', 'INTERCOMPANYAUTODROPSHIP', 'INTERCOMPANYAUTOELIMINATION', 'INTERCOMPANYFRAMEWORK', 'INTERCOMPANYTIMEEXPENSE', 'INTRANET', 'INTRANSITPAYMENTS', 'INVENTORY', 'INVENTORYCOUNT', 'INVENTORYSTATUS', 'INVOICEGROUP', 'IPADDRESSRULES', 'ISSUEDB', 'ITEMDEMANDPLANNING', 'ITEMOPTIONS', 'JOBCOSTING', 'JOBMANAGEMENT', 'JOBREQUISITION', 'JOBS', 'KNOWLEDGEBASE', 'KPIREPORTS', 'KUDOS', 'LANDEDCOST', 'LEADMANAGEMENT', 'LOCATIONS', 'LOTNUMBEREDINVENTORY', 'MAILMERGE', 'MARKETING', 'MATRIXITEMS', 'MERCHANDISEHIERARCHY', 'MFGROUTING', 'MFGWORKINPROCESS', 'MOBILEPUSHNTF', 'MOSS', 'MULTIBOOK', 'MULTIBOOKV2', 'MULTICURRENCY', 'MULTICURRENCYCUSTOMER', 'MULTICURRENCYVENDOR', 'MULTILANGUAGE', 'MULTILOCINVT', 'MULTILOCINVTNOTSUPPLYALLOC', 'MULTIPARTNER', 'MULTIPLEBUDGETS', 'MULTIPLECALENDARS', 'MULTISHIPTO', 'MULTISITE', 'MULTISUBSIDIARYCUSTOMER', 'MULTIVENDOR', 'MULTPRICE', 'NETSUITEAPPROVALSWORKFLOW', 'NUMBEREDINVENTORY', 'NUMBEREDINVENTORYORGIFTCERTS', 'OAUTH2', 'OIDC', 'OLDINTERCOMPANYJOURNAL', 'ONLINEORDERING', 'OPENIDSSO', 'OPPORTUNITIES', 'OUTLOOKINTEGRATION_V3', 'OUTSOURCEDMFG', 'PARTNERACCESS', 'PARTNERCOMMISSIONS', 'PARTNEREMPLOYEECOMMISSN', 'PAYABLES', 'PAYCHECKJOURNAL', 'PAYMENTINSTRUMENTS', 'PAYPALINTEGRATION', 'PAYROLL', 'PAYROLLSERVICE', 'PERIODENDJOURNALENTRIES', 'PERSONALIZED_CATALOG_VIEWS', 'PICKPACKSHIP', 'PI_REMOVAL', 'PLANNEDWORK', 'POSITIONMANAGEMENT', 'PRM', 'PROJECTTASKMANAGER', 'PROMOCODES', 'PURCHASECARDDATA', 'PURCHASECONTRACTS', 'PURCHASEORDERS', 'PURCHASEREQS', 'QUANTITYPRICING', 'RECEIVABLES', 'REQUISITIONS', 'RESOURCEALLOCATIONAPPROVAL', 'RESOURCEALLOCATIONCHART', 'RESOURCEALLOCATIONS', 'RESOURCESKILLSETS', 'RESTWEBSERVICES', 'RETURNAUTHS', 'REVENUECOMMITMENTS', 'REVENUERECOGNITION', 'REVEXPMGMTANDAMORTIZATION', 'REVEXPMGMTANDREVREC', 'REVRECSALESORDERFORECASTING', 'REVRECVSOE', 'RFQ', 'ROUTINGORSTANDARDORLANDEDCOST', 'RULEBASEDRECOGNITIONTREATMENT', 'RUM', 'SALESCAMPAIGNS', 'SALESORDERS', 'SAMLSSO', 'SDFCOPYTOACCOUNT', 'SERIALIZEDINVENTORY', 'SERVERSIDESCRIPTING', 'SERVICEPRINTEDCHECKS', 'SERVICEPRINTEDW2S', 'SFA', 'SHIPPINGLABELS', 'SHIPPINGPARTNERS', 'SHIPPINGPARTNERSDEVELOPMENT', 'SITELOCATIONALIASES', 'SOFTDESCRIPTORS', 'SPLITTENDER', 'STACKABLEPROMOTIONS', 'STANDARDCOSTING', 'STANDARDCOSTINGANDASSEMBLIES', 'STANDARDRECORDCUSTOMIZATION', 'STATACCOUNTING', 'STOREPICKUP', 'SUBSANDMULTICURRANDMULTBUDGETS', 'SUBSCRIPTIONBILLING', 'SUBSIDIARIES', 'SUBSIDIARIESANDMULTICURRENCY', 'SUITEANALYTICSCONNECT', 'SUITEAPPCONTROLCENTER', 'SUITEAPPDEVELOPMENTFRAMEWORK', 'SUITECOMMERCE', 'SUITECOMMERCEENTERPRISE', 'SUITECOMMERCE_ADVANCED', 'SUITECOMMERCE_IN_STORE', 'SUITECOMMERCE_MY_ACCOUNT', 'SUITESIGNON', 'SUITESOCIAL', 'SUITETAXDATARECORDS', 'SUITETAXENGINE', 'SUITETAXENGINEINDIA', 'SUITETAXREPORTS', 'SUITETAXREPORTSINDIA', 'SUPPLTAXCALC', 'SUPPLYALLOCATION', 'SUPPLYCHAINCONTROLTOWER', 'SUPPLYCHAINMANAGEMENT', 'SUPPLYCHAINPREDICTEDRISKS', 'SUPPORT', 'TABLEAU', 'TALENTMANAGEMENT', 'TAXAUDITFILES', 'TAX_OVERHAULINGDEV', 'TBA', 'TEAMSELLING', 'TELEPHONY', 'TERMINATIONREASONTRACKING', 'TIMEBASEDPRICING', 'TIMEBASEDPRICINGSUITEAPP', 'TIMEOFFMANAGEMENT', 'TIMESHEETRECORDANY', 'TIMESHEETS', 'TIMETRACKING', 'TRANDELETIONREASONCODE', 'UNIFIEDREVENUERECOGNITION', 'UNITSOFMEASURE', 'UPSELL', 'URLCOMPONENTALIASES', 'USR', 'VARIABLE_PAY_TBRBCT', 'VENDORACCESS', 'VENDORPREPAYMENTS', 'VENDORRETURNAUTHS', 'WARRANTYANDREPAIRSMANAGEMENT', 'WBS', 'WEBAPPLICATIONS', 'WEBAPPLICATIONVERSIONING', 'WEBDUPLICATEEMAILMANAGEMENT', 'WEBHOSTING', 'WEBSERVICES', 'WEBSERVICESEXTERNAL', 'WEBSITE', 'WEBSTORE', 'WEEKLYTIMESHEETS', 'WEEKLYTIMESHEETSNEWUI', 'WITHHOLDINGTAX', 'WMSSYSTEM', 'WORKBOOKAPI', 'WORKFLOW', 'WORKORDERS'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, featuresElemID.name],
  }),
  forbidden_features: new PrimitiveType({
    elemID: forbidden_featuresElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['DOCUMENTS', 'SUITEAPPDEVELOPMENTFRAMEWORK'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, forbidden_featuresElemID.name],
  }),
  form_buttonstyle: new PrimitiveType({
    elemID: form_buttonstyleElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['BUTTON', 'MENU'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, form_buttonstyleElemID.name],
  }),
  form_displaytype: new PrimitiveType({
    elemID: form_displaytypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['DISABLED', 'INLINETEXT', 'NORMAL'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, form_displaytypeElemID.name],
  }),
  form_fieldposition: new PrimitiveType({
    elemID: form_fieldpositionElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['BOTTOM', 'MIDDLE', 'TOP'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, form_fieldpositionElemID.name],
  }),
  generic_accesslevel_searchlevel: new PrimitiveType({
    elemID: generic_accesslevel_searchlevelElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['0', '1', '2'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_accesslevel_searchlevelElemID.name],
  }),
  generic_body_tab: new PrimitiveType({
    elemID: generic_body_tabElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['TRANSACTIONACCOUNTING', 'TRANSACTIONADDRESS', 'TRANSACTIONBILLING', 'TRANSACTIONBUILDS', 'TRANSACTIONCOMMUNICATION', 'TRANSACTIONFULFILLMENTSANDCREDITS', 'TRANSACTIONFULFILLMENTSANDRECEIPTS', 'TRANSACTIONGENERAL', 'TRANSACTIONHISTORY', 'TRANSACTIONITEMS', 'TRANSACTIONJOURNAL', 'TRANSACTIONMAIN', 'TRANSACTIONOUTPUTOPTIONS', 'TRANSACTIONPAYMENT', 'TRANSACTIONQUALIFICATION', 'TRANSACTIONRECEIPTSANDREFUNDS', 'TRANSACTIONRELATEDRECORDS', 'TRANSACTIONRELATIONSHIPS', 'TRANSACTIONSALES', 'TRANSACTIONSHIPPING', 'TRANSACTIONSYSTEMINFORMATION'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_body_tabElemID.name],
  }),
  generic_centercategory: new PrimitiveType({
    elemID: generic_centercategoryElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCOUNTCENTERCUSTOMERSACCOUNTSRECEIVABLE', 'ACCOUNTCENTERCUSTOMERSCREDITSANDRETURNS', 'ACCOUNTCENTERCUSTOMERSCUSTOM', 'ACCOUNTCENTERCUSTOMERSCUSTOMERRECEIVABLESREPORTS', 'ACCOUNTCENTERCUSTOMERSCUSTOMERSERVICE', 'ACCOUNTCENTERCUSTOMERSLISTS', 'ACCOUNTCENTERCUSTOMERSMARKETING', 'ACCOUNTCENTERCUSTOMERSOTHER', 'ACCOUNTCENTERCUSTOMERSSALES', 'ACCOUNTCENTERCUSTOMERSSALESORDERREPORTS', 'ACCOUNTCENTERCUSTOMERSSALESREPORTS', 'ACCOUNTCENTERCUSTOMERSUBSRIPTIONS', 'ACCOUNTCENTERFINANCIALBANKING', 'ACCOUNTCENTERFINANCIALBILLING', 'ACCOUNTCENTERFINANCIALCOSTACCOUNTING', 'ACCOUNTCENTERFINANCIALCUSTOM', 'ACCOUNTCENTERFINANCIALDEMANDPLANNING', 'ACCOUNTCENTERFINANCIALINVENTORY', 'ACCOUNTCENTERFINANCIALLISTS', 'ACCOUNTCENTERFINANCIALMANUFACTURING', 'ACCOUNTCENTERFINANCIALOTHER', 'ACCOUNTCENTERFINANCIALOTHERTRANSACTIONS', 'ACCOUNTCENTERFINANCIALREPORTS', 'ACCOUNTCENTERFINANCIALSUBSCRIPTIONS', 'ACCOUNTCENTERFINANCIALSUPPLYPLANNING', 'ACCOUNTCENTERPAYROLLANDHRCOMMISSIONREPORTS', 'ACCOUNTCENTERPAYROLLANDHRCOMMISSIONS', 'ACCOUNTCENTERPAYROLLANDHRCUSTOM', 'ACCOUNTCENTERPAYROLLANDHREXPENSEREPORTS', 'ACCOUNTCENTERPAYROLLANDHRLISTS', 'ACCOUNTCENTERPAYROLLANDHROTHER', 'ACCOUNTCENTERPAYROLLANDHRPAYROLL', 'ACCOUNTCENTERPAYROLLANDHRPAYROLLFORMS', 'ACCOUNTCENTERPAYROLLANDHRPAYROLLREPORTS', 'ACCOUNTCENTERPAYROLLANDHRTIMETRACKING', 'ACCOUNTCENTERPAYROLLANDHRTIMETRACKINGREPORTS', 'ACCOUNTCENTERSETUPACCOUNTING', 'ACCOUNTCENTERSETUPCOMPANY', 'ACCOUNTCENTERSETUPCUSTOM', 'ACCOUNTCENTERSETUPCUSTOMIZATION', 'ACCOUNTCENTERSETUPENTEROPENINGBALANCES', 'ACCOUNTCENTERSETUPHRINFORMATIONSYSTEM', 'ACCOUNTCENTERSETUPIMPORTEXPORT', 'ACCOUNTCENTERSETUPINTEGRATION', 'ACCOUNTCENTERSETUPMERCHANDISEHIERARCHY', 'ACCOUNTCENTERSETUPOTHERSETUP', 'ACCOUNTCENTERSETUPPERFORMANCEMANAGEMENT', 'ACCOUNTCENTERSETUPTAX', 'ACCOUNTCENTERSETUPUSERPREFERENCES', 'ACCOUNTCENTERSETUPUSERSROLES', 'ACCOUNTCENTERVENDORSACCOUNTSPAYABLE', 'ACCOUNTCENTERVENDORSCUSTOM', 'ACCOUNTCENTERVENDORSLISTS', 'ACCOUNTCENTERVENDORSOTHER', 'ACCOUNTCENTERVENDORSPURCHASES', 'ACCOUNTCENTERVENDORSSCHEDULEMANAGEMENT', 'ACCOUNTCENTERVENDORSVENDORPAYABLESREPORTS', 'ADMI_RECORDSCATALOG', 'BASICCOMMERCECONTENTMANAGEMENT', 'BASICCOMMERCECUSTOM', 'BASICCOMMERCEEXTENSIONS', 'BASICCOMMERCEHOSTING', 'BASICCOMMERCEMARKETING', 'BASICCOMMERCESCINSTORE', 'BASICCOMMERCESITEBUILDER', 'BASICCOMMERCEWEBSITES', 'BASICLISTICAUTOMATION', 'BASICLISTMAILING', 'BASICLISTOUTBOUNDREQUEST', 'BASICLISTSACCOUNTING', 'BASICLISTSBILLING', 'BASICLISTSCOMMISSIONS', 'BASICLISTSCUSTOM', 'BASICLISTSCUSTOMIZATION', 'BASICLISTSEMPLOYEES', 'BASICLISTSINTERCOMPANY', 'BASICLISTSMARKETING', 'BASICLISTSMASSUPDATE', 'BASICLISTSNETLEDGERSYSTEM', 'BASICLISTSRELATIONSHIPS', 'BASICLISTSSEARCH', 'BASICLISTSSUBSCRIPTIONS', 'BASICLISTSSUPPLYCHAIN', 'BASICLISTSSUPPLYPLANNING', 'BASICLISTSSUPPORT', 'BASICLISTSWEBSITE', 'BASICREPORTSBANKINGBUDGETING', 'BASICREPORTSCOMMISSIONS', 'BASICREPORTSCOSTACCOUNTING', 'BASICREPORTSCUSTOM', 'BASICREPORTSCUSTOMERRECEIVABLES', 'BASICREPORTSCUSTOMERSERVICE', 'BASICREPORTSDEMANDPLANNING', 'BASICREPORTSEMPLOYEESHR', 'BASICREPORTSFINANCIAL', 'BASICREPORTSFORECAST', 'BASICREPORTSINTEGRATION', 'BASICREPORTSINVENTORYITEMS', 'BASICREPORTSISSUEMANAGEMENT', 'BASICREPORTSMARKETING', 'BASICREPORTSNEWBANKINGBUDGETING', 'BASICREPORTSNEWFINANCIAL', 'BASICREPORTSNEWREPORT', 'BASICREPORTSNEWSEARCH', 'BASICREPORTSOLDFINANCIAL', 'BASICREPORTSORDERMANAGEMENT', 'BASICREPORTSPAYROLL', 'BASICREPORTSPIPELINEANALYSIS', 'BASICREPORTSPROJECTS', 'BASICREPORTSPURCHASES', 'BASICREPORTSRECENTREPORTS', 'BASICREPORTSREVENUE', 'BASICREPORTSSALES', 'BASICREPORTSSALESORDERS', 'BASICREPORTSSALESTAXCANADA', 'BASICREPORTSSALESTAXUS', 'BASICREPORTSSAVEDREPORTS', 'BASICREPORTSSAVEDSEARCHES', 'BASICREPORTSSCHEDULEDREPORTS', 'BASICREPORTSSCHEDULEDSEARCHES', 'BASICREPORTSSUBSCRIPTIONS', 'BASICREPORTSTAX', 'BASICREPORTSTAXAUDITFILES', 'BASICREPORTSTIMEBILLABLES', 'BASICREPORTSVAT', 'BASICREPORTSVATGST', 'BASICREPORTSVENDORSPAYABLES', 'BASICREPORTSWEBPRESENCE', 'BASICREPORTSWITHHOLDINGTAX', 'BASICSETUPACCOUNTING', 'BASICSETUPCOMPANY', 'BASICSETUPCUSTOM', 'BASICSETUPCUSTOMIZATION', 'BASICSETUPHRINFORMATIONSYSTEM', 'BASICSETUPIMPORTEXPORT', 'BASICSETUPINTEGRATION', 'BASICSETUPINTRANET', 'BASICSETUPISSUES', 'BASICSETUPMANUFACTURING', 'BASICSETUPMARKETING', 'BASICSETUPMERCHANDISEHIERARCHY', 'BASICSETUPORDERMANAGEMENT', 'BASICSETUPPAYROLL', 'BASICSETUPPERFORMANCEMANAGEMENT', 'BASICSETUPSALES', 'BASICSETUPSITEBUILDER', 'BASICSETUPSUITECOMMERCEADVANCED', 'BASICSETUPSUPPORT', 'BASICSETUPTAX', 'BASICSETUPUSERSROLES', 'BASICSETUPWAREHOUSEMANAGEMENT', 'BASICSUPPORTCOMMUNITIES', 'BASICSUPPORTCUSTOM', 'BASICSUPPORTCUSTOMERSERVICE', 'BASICSUPPORTDIRECTORIES', 'BASICSUPPORTFEEDBACK', 'BASICSUPPORTHELP', 'BASICTRANSACTIONSBANK', 'BASICTRANSACTIONSBILLING', 'BASICTRANSACTIONSCOMMISSIONS', 'BASICTRANSACTIONSCUSTOM', 'BASICTRANSACTIONSCUSTOMERS', 'BASICTRANSACTIONSDEMANDPLANNING', 'BASICTRANSACTIONSEMPLOYEES', 'BASICTRANSACTIONSFINANCIAL', 'BASICTRANSACTIONSINVENTORY', 'BASICTRANSACTIONSMANAGEMENT', 'BASICTRANSACTIONSMANUFACTURING', 'BASICTRANSACTIONSORDERMANAGEMENT', 'BASICTRANSACTIONSPURCHASESVENDORS', 'BASICTRANSACTIONSQUOTAFORECAST', 'BASICTRANSACTIONSSALES', 'BASICTRANSACTIONSSUBSCRIPTIONS', 'BASICTRANSACTIONSSUPPLYPLANNING', 'BASICTRANSACTIONSVENDORS', 'CUSTOMERHOMEBILLING', 'CUSTOMERHOMECUSTOM', 'CUSTOMERHOMEORDERS', 'CUSTOMERHOMESUPPORT', 'EMPLOYEEHOMEACTIVITIES', 'EMPLOYEEHOMECHANGEREQUESTS', 'EMPLOYEEHOMECUSTOM', 'EMPLOYEEHOMEDOCUMENTS', 'EMPLOYEEHOMEEXPENSEREPORTS', 'EMPLOYEEHOMEHELPDESK', 'EMPLOYEEHOMEMYINFORMATION', 'EMPLOYEEHOMEPURCHASEREQUESTS', 'EMPLOYEEHOMERELATIONSHIPS', 'EMPLOYEEHOMEREPORTS', 'EMPLOYEEHOMESEARCH', 'EMPLOYEEHOMETIMEOFFREQUEST', 'EMPLOYEEHOMETIMETRACKING', 'EMPLOYEEMYCOMPANY', 'ENGINEERCENTERISSUESCUSTOM', 'ENGINEERCENTERISSUESISSUES', 'ENGINEERCENTERISSUESRELATIONSHIPS', 'ENGINEERCENTERISSUESSEARCH', 'ENGINEERCENTERISSUESSETUP', 'EXECUTIVEEXPENSESACCOUNTSPAYABLE', 'EXECUTIVEEXPENSESCUSTOM', 'EXECUTIVEEXPENSESLISTS', 'EXECUTIVEEXPENSESOTHER', 'EXECUTIVEEXPENSESPURCHASES', 'EXECUTIVEEXPENSESVENDORPAYABLESREPORTS', 'EXECUTIVEFINANCIALADJUSTMENTS', 'EXECUTIVEFINANCIALBANKACCOUNTS', 'EXECUTIVEFINANCIALCOSTACCOUNTING', 'EXECUTIVEFINANCIALCUSTOM', 'EXECUTIVEFINANCIALLISTS', 'EXECUTIVEFINANCIALMANUFACTURING', 'EXECUTIVEFINANCIALOTHER', 'EXECUTIVEFINANCIALREPORTS', 'EXECUTIVEHRCOMMISSIONS', 'EXECUTIVEHRCUSTOM', 'EXECUTIVEHREXPENSEREPORTS', 'EXECUTIVEHRHR', 'EXECUTIVEHROTHER', 'EXECUTIVEHRPAYROLLFORMS', 'EXECUTIVEHRPAYROLLREPORTS', 'EXECUTIVEHRTIMETRACKING', 'EXECUTIVEHRTIMETRACKINGREPORTS', 'EXECUTIVESALESMARKETINGACCOUNTSRECEIVABLE', 'EXECUTIVESALESMARKETINGBILLING', 'EXECUTIVESALESMARKETINGCREDITSANDRETURNS', 'EXECUTIVESALESMARKETINGCUSTOM', 'EXECUTIVESALESMARKETINGCUSTOMERRECEIVABLESREPORTS', 'EXECUTIVESALESMARKETINGCUSTOMERSERVICE', 'EXECUTIVESALESMARKETINGFORECASTREPORTS', 'EXECUTIVESALESMARKETINGLISTS', 'EXECUTIVESALESMARKETINGMARKETING', 'EXECUTIVESALESMARKETINGMARKETINGREPORTS', 'EXECUTIVESALESMARKETINGOTHER', 'EXECUTIVESALESMARKETINGPIPELINEREPORTS', 'EXECUTIVESALESMARKETINGSALES', 'EXECUTIVESALESMARKETINGSALESORDERREPORTS', 'EXECUTIVESALESMARKETINGSALESREPORTS', 'EXECUTIVESETUPACCOUNTING', 'EXECUTIVESETUPCOMPANY', 'EXECUTIVESETUPCUSTOM', 'EXECUTIVESETUPCUSTOMIZATION', 'EXECUTIVESETUPENTEROPENINGBALANCES', 'EXECUTIVESETUPIMPORTEXPORT', 'EXECUTIVESETUPINTEGRATION', 'EXECUTIVESETUPMERCHANDISEHIERARCHY', 'EXECUTIVESETUPOTHERSETUP', 'EXECUTIVESETUPTAX', 'EXECUTIVESETUPUSERPREFERENCES', 'EXECUTIVESETUPUSERSROLES', 'MARKETCENTERCAMPAIGNSCUSTOM', 'MARKETCENTERCAMPAIGNSCUSTOMERSERVICE', 'MARKETCENTERCAMPAIGNSMARKETING', 'MARKETCENTERCAMPAIGNSOTHER', 'MARKETCENTERCAMPAIGNSOTHERLISTS', 'MARKETCENTERCAMPAIGNSOTHERTRANSACTIONS', 'MARKETCENTERCAMPAIGNSPRODUCTSSERVICES', 'MARKETCENTERCAMPAIGNSREPORTS', 'MARKETCENTERLEADSCUSTOM', 'MARKETCENTERLEADSCUSTOMERSERVICE', 'MARKETCENTERLEADSRELATIONSHIPS', 'MARKETCENTERLEADSREPORTS', 'MARKETCENTERLEADSTRANSACTIONS', 'MARKETCENTERSETUPCOMPANY', 'MARKETCENTERSETUPCUSTOM', 'MARKETCENTERSETUPCUSTOMIZATION', 'MARKETCENTERSETUPIMPORTEXPORT', 'MARKETCENTERSETUPINTEGRATION', 'MARKETCENTERSETUPMERCHANDISEHIERARCHY', 'MARKETCENTERSETUPOTHERSETUP', 'MARKETCENTERSETUPSALESMARKETINGAUTOMATION', 'MARKETCENTERSETUPUSERSROLES', 'OFFLINESALESCENTERACTIVITIESCUSTOM', 'OFFLINESALESCENTERACTIVITIESSCHEDULING', 'OFFLINESALESCENTERCUSTOMERSCUSTOM', 'OFFLINESALESCENTERCUSTOMERSRELATIONSHIPS', 'OFFLINESALESCENTERLEADSCUSTOM', 'OFFLINESALESCENTERLEADSRELATIONSHIPS', 'OFFLINESALESCENTEROPPORTUNITIESCUSTOM', 'OFFLINESALESCENTEROPPORTUNITIESRELATIONSHIPS', 'OFFLINESALESCENTEROPPORTUNITIESTRANSACTIONS', 'OFFLINESALESCENTERPROSPECTSCUSTOM', 'OFFLINESALESCENTERPROSPECTSRELATIONSHIPS', 'PARTNERCENTERCASESCUSTOM', 'PARTNERCENTERCASESCUSTOMERSERVICE', 'PARTNERCENTERCASESOTHER', 'PARTNERCENTERCASESOTHERLISTS', 'PARTNERCENTERCASESREPORTS', 'PARTNERCENTERCUSTOMERSCUSTOM', 'PARTNERCENTERCUSTOMERSMARKETING', 'PARTNERCENTERCUSTOMERSOTHER', 'PARTNERCENTERCUSTOMERSOTHERTRANSACTIONS', 'PARTNERCENTERCUSTOMERSRELATIONSHIPS', 'PARTNERCENTERCUSTOMERSREPORTS', 'PARTNERCENTERCUSTOMERSTRANSACTIONS', 'PARTNERCENTERCUSTOMERSTRIALTEMPLATETYPES', 'PARTNERCENTERSETUPCUSTOM', 'PARTNERCENTERSETUPMERCHANDISEHIERARCHY', 'PARTNERCENTERSETUPOTHERSETUP', 'SALESCENTERCUSTOMERSCUSTOM', 'SALESCENTERCUSTOMERSCUSTOMERREPORTS', 'SALESCENTERCUSTOMERSCUSTOMERSERVICE', 'SALESCENTERCUSTOMERSMARKETING', 'SALESCENTERCUSTOMERSOTHER', 'SALESCENTERCUSTOMERSOTHERLISTS', 'SALESCENTERCUSTOMERSOTHERTRANSACTIONS', 'SALESCENTERCUSTOMERSRELATIONSHIPS', 'SALESCENTERCUSTOMERSSUBSCRIPTIONS', 'SALESCENTERCUSTOMERSTRANSACTIONS', 'SALESCENTERFORECASTCOMMISSIONS', 'SALESCENTERFORECASTCUSTOM', 'SALESCENTERFORECASTREPORTS', 'SALESCENTERFORECASTSETUP', 'SALESCENTERFORECASTTRANSACTIONS', 'SALESCENTERLEADSCUSTOM', 'SALESCENTERLEADSLEADREPORTS', 'SALESCENTERLEADSOTHER', 'SALESCENTERLEADSRELATIONSHIPS', 'SALESCENTERLEADSTRANSACTIONS', 'SALESCENTEROPPORTUNITIESCUSTOM', 'SALESCENTEROPPORTUNITIESOTHER', 'SALESCENTEROPPORTUNITIESRELATIONSHIPS', 'SALESCENTEROPPORTUNITIESREPORTS', 'SALESCENTEROPPORTUNITIESTRANSACTIONS', 'SALESCENTERPROSPECTSCUSTOM', 'SALESCENTERPROSPECTSOTHER', 'SALESCENTERPROSPECTSPROSPECTREPORTS', 'SALESCENTERPROSPECTSRELATIONSHIPS', 'SALESCENTERPROSPECTSTRANSACTIONS', 'SHIPPINGCENTERINVENTORYCUSTOM', 'SHIPPINGCENTERINVENTORYINVENTORY', 'SHIPPINGCENTERINVENTORYLISTS', 'SHIPPINGCENTERINVENTORYMANUFACTURING', 'SHIPPINGCENTERINVENTORYOTHER', 'SHIPPINGCENTERINVENTORYREPORTS', 'SHIPPINGCENTERINVENTORYSCHEDULEMANAGEMENT', 'SHIPPINGCENTERINVENTORYSUPPLYPLANNING', 'SHIPPINGCENTERRECEIVINGCUSTOM', 'SHIPPINGCENTERRECEIVINGLISTS', 'SHIPPINGCENTERRECEIVINGOTHER', 'SHIPPINGCENTERRECEIVINGRECEIVING', 'SHIPPINGCENTERRECEIVINGREPORTS', 'SHIPPINGCENTERRECEIVINGSCHEDULEMANAGEMENT', 'SHIPPINGCENTERRECEIVINGSEARCH', 'SHIPPINGCENTERSETUPCUSTOM', 'SHIPPINGCENTERSETUPMERCHANDISEHIERARCHY', 'SHIPPINGCENTERSETUPOTHERSETUP', 'SHIPPINGCENTERSETUPWAREHOUSEMANAGEMENT', 'SHIPPINGCENTERSHIPPINGCUSTOM', 'SHIPPINGCENTERSHIPPINGLISTS', 'SHIPPINGCENTERSHIPPINGOTHER', 'SHIPPINGCENTERSHIPPINGREPORTS', 'SHIPPINGCENTERSHIPPINGSCHEDULEMANAGEMENT', 'SHIPPINGCENTERSHIPPINGSHIPPING', 'STOREMANAGERCOMMERCECONTENTMANAGEMENT', 'STOREMANAGERCOMMERCECUSTOM', 'STOREMANAGERCOMMERCEHOSTING', 'STOREMANAGERCOMMERCEMARKENTING', 'STOREMANAGERCOMMERCESITEBUILDER', 'STOREMANAGERCOMMERCESUITECOMMERCEINSTORE', 'STOREMANAGERCOMMERCEWEBSITES', 'STOREMANAGERCONTACTSCONTACTS', 'STOREMANAGERCONTACTSCUSTOM', 'STOREMANAGERCONTACTSREPORTS', 'STOREMANAGERSALESCUSTOM', 'STOREMANAGERSALESDEMANDPLANNING', 'STOREMANAGERSALESORDERS', 'STOREMANAGERSALESOTHER', 'STOREMANAGERSALESOTHERTRANSACTIONS', 'STOREMANAGERSALESREPORTS', 'STOREMANAGERSALESSEARCH', 'STOREMANAGERSALESSUPPLYPLANNING', 'STOREMANAGERSETUPCUSTOM', 'STOREMANAGERSETUPCUSTOMIZATION', 'STOREMANAGERSETUPMERCHANDISEHIERARCHY', 'STOREMANAGERSETUPOTHERLISTS', 'STOREMANAGERSETUPOTHERSETUP', 'STOREMANAGERSETUPSEARCHUPDATES', 'STOREMANAGERSETUPSITEBUILDER', 'STOREMANAGERSETUPSUITECOMMERCEADVANCED', 'STOREMANAGERWEBSITEAPPEARANCE', 'STOREMANAGERWEBSITEFILES', 'STOREMANAGERWEBSITEPUBLISHING', 'STOREMANAGERWEBSITEREPORTS', 'STOREMANAGERWEBSITESEARCHUPDATES', 'SUPPORTCENTERCASESCASECAPTURE', 'SUPPORTCENTERCASESCUSTOM', 'SUPPORTCENTERCASESCUSTOMERSERVICE', 'SUPPORTCENTERCASESOTHER', 'SUPPORTCENTERCASESOTHERLISTS', 'SUPPORTCENTERCASESOTHERTRANSACTIONS', 'SUPPORTCENTERCASESREPORTS', 'SUPPORTCENTERCUSTOMERSCUSTOM', 'SUPPORTCENTERCUSTOMERSMARKETING', 'SUPPORTCENTERCUSTOMERSRELATIONSHIPS', 'SUPPORTCENTERCUSTOMERSREPORTS', 'SUPPORTCENTERCUSTOMERSTRANSACTIONS', 'SUPPORTCENTERISSUESCUSTOM', 'SUPPORTCENTERISSUESISSUES', 'SUPPORTCENTERISSUESSEARCH', 'SUPPORTCENTERSETUPCOMPANY', 'SUPPORTCENTERSETUPCUSTOM', 'SUPPORTCENTERSETUPCUSTOMIZATION', 'SUPPORTCENTERSETUPIMPORTEXPORT', 'SUPPORTCENTERSETUPINTEGRATION', 'SUPPORTCENTERSETUPMERCHANDISEHIERARCHY', 'SUPPORTCENTERSETUPOTHERSETUP', 'SUPPORTCENTERSETUPSALESMARKETINGAUTOMATION', 'SUPPORTCENTERSETUPSUPPORT', 'SUPPORTCENTERSETUPUSERPREFERENCES', 'SUPPORTCENTERSETUPUSERSROLES', 'SYSADMINCENTERSETUPCOMPANY', 'SYSADMINCENTERSETUPCUSTOM', 'SYSADMINCENTERSETUPCUSTOMIZATION', 'SYSADMINCENTERSETUPENTEROPENINGBALANCES', 'SYSADMINCENTERSETUPIMPORTEXPORT', 'SYSADMINCENTERSETUPINTEGRATION', 'SYSADMINCENTERSETUPLISTS', 'SYSADMINCENTERSETUPMERCHANDISEHIERARCHY', 'SYSADMINCENTERSETUPOTHERLISTS', 'SYSADMINCENTERSETUPUSERPREFERENCES', 'SYSADMINCENTERSETUPUSERSROLES'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_centercategoryElemID.name],
  }),
  generic_centertab: new PrimitiveType({
    elemID: generic_centertabElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCOUNTCENTERCENTERCUSTOMERS', 'ACCOUNTCENTERCENTERFINANCIAL', 'ACCOUNTCENTERCENTERPAYROLLANDHR', 'ACCOUNTCENTERCENTERREPORTS', 'ACCOUNTCENTERCENTERREVENUE', 'ACCOUNTCENTERCENTERSETUP', 'ACCOUNTCENTERCENTERVENDORS', 'BASICCENTERACTIVITIES', 'BASICCENTERCOMMERCE', 'BASICCENTERCUSTOMERDASHBOARD', 'BASICCENTERCUSTOMIZATION', 'BASICCENTERDOCUMENTS', 'BASICCENTERHOMEHOME', 'BASICCENTERLISTS', 'BASICCENTERPROJECTDASHBOARD', 'BASICCENTERREPORTS', 'BASICCENTERSETUP', 'BASICCENTERSUPPORT', 'BASICCENTERTRANSACTIONS', 'BASICCONTROLTOWERDASHBOARD', 'BASICVENDORDASHBOARD', 'CUSTCENTERTAB-100', 'CUSTCENTERTAB-120', 'CUSTCENTERTAB-121', 'CUSTCENTERTAB-122', 'CUSTCENTERTAB-123', 'CUSTCENTERTAB-125', 'CUSTCENTERTAB-130', 'CUSTCENTERTAB-131', 'CUSTCENTERTAB-141', 'CUSTCENTERTAB-142', 'CUSTCENTERTAB-143', 'CUSTCENTERTAB-144', 'CUSTCENTERTAB-145', 'CUSTCENTERTAB-148', 'CUSTOMERCENTERHOMEHOME', 'EMPLOYEECENTERHOMEHOME', 'ENGINEERCENTERCENTERISSUES', 'ENGINEERCENTERCENTERREPORTS', 'EXECUTIVECENTEREXPENSES', 'EXECUTIVECENTERFINANCIAL', 'EXECUTIVECENTERHR', 'EXECUTIVECENTERREPORTS', 'EXECUTIVECENTERSALESMARKETING', 'EXECUTIVECENTERSETUP', 'MARKETCENTERCENTERCAMPAIGNS', 'MARKETCENTERCENTERLEADS', 'MARKETCENTERCENTERREPORTS', 'MARKETCENTERCENTERSETUP', 'OFFLINESALESCENTERCENTERACTIVITIES', 'OFFLINESALESCENTERCENTERCUSTOMERS', 'OFFLINESALESCENTERCENTERHOME', 'OFFLINESALESCENTERCENTERLEADS', 'OFFLINESALESCENTERCENTEROPPORTUNITIES', 'OFFLINESALESCENTERCENTERPROSPECTS', 'ORDERMANAGEMENTDASHBOARD', 'PARTNERCENTERCENTERCASES', 'PARTNERCENTERCENTERCUSTOMERS', 'PARTNERCENTERCENTERREPORTS', 'PARTNERCENTERCENTERSETUP', 'PARTNERCENTERHOMEHOME', 'PROJECTCENTERCENTERACTIVITIES', 'PROJECTCENTERCENTERCRM', 'PROJECTCENTERCENTERHOMEHOME', 'PROJECTCENTERCENTERPROJECTS', 'PROJECTCENTERCENTERREPORTS', 'PROJECTCENTERCENTERRESOURCES', 'PROJECTCENTERCENTERTIMEEXPENSES', 'SALESCENTERCENTERCUSTOMERS', 'SALESCENTERCENTERFORECAST', 'SALESCENTERCENTERLEADS', 'SALESCENTERCENTEROPPORTUNITIES', 'SALESCENTERCENTERPROSPECTS', 'SALESCENTERCENTERREPORTS', 'SALESCENTERCENTERSETUP', 'SHIPPINGCENTERCENTERINVENTORY', 'SHIPPINGCENTERCENTERRECEIVING', 'SHIPPINGCENTERCENTERREPORTS', 'SHIPPINGCENTERCENTERSETUP', 'SHIPPINGCENTERCENTERSHIPPING', 'STOREMANAGERCENTERCONTACTS', 'STOREMANAGERCENTERREPORTS', 'STOREMANAGERCENTERSALES', 'STOREMANAGERCENTERSETUP', 'STOREMANAGERCENTERWEBSITE', 'SUPPORTCENTERCENTERCASES', 'SUPPORTCENTERCENTERCUSTOMERS', 'SUPPORTCENTERCENTERISSUES', 'SUPPORTCENTERCENTERREPORTS', 'SUPPORTCENTERCENTERSETUP', 'SYSADMINCENTERCENTERLISTS', 'SYSADMINCENTERCENTERSETUP', 'VENDORCENTERHOMEHOME'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_centertabElemID.name],
  }),
  generic_centertype: new PrimitiveType({
    elemID: generic_centertypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCOUNTCENTER', 'ALL', 'BASIC', 'CUSTOMER', 'EMPLOYEE', 'ENGINEERCENTER', 'EXECUTIVE', 'HR', 'MARKETCENTER', 'OFFLINESALESCENTER', 'PARTNER', 'PARTNERCENTER', 'PROJECTCENTER', 'SALESCENTER', 'SHIPPINGCENTER', 'STOREMANAGER', 'SUITEAPPCONTROLCENTER', 'SUPPORTCENTER', 'SYSADMINCENTER', 'VENDOR', 'WEBSITE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_centertypeElemID.name],
  }),
  generic_crm_tab: new PrimitiveType({
    elemID: generic_crm_tabElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CRMBUDGET', 'CRMCONTACTS', 'CRMKEYWORD', 'CRMMAIN', 'CRMMESSAGE', 'CRMRELATEDINFO', 'CRMRELATEDRECORDS', 'CRMSYSTEMINFORMATION'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_crm_tabElemID.name],
  }),
  generic_custom_record_icon: new PrimitiveType({
    elemID: generic_custom_record_iconElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['1', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '2', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '3', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '4', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '5', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '6', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '7', '70', '8', '9'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_custom_record_iconElemID.name],
  }),
  generic_customfield_displaytype: new PrimitiveType({
    elemID: generic_customfield_displaytypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['HIDDEN', 'LOCKED', 'NORMAL', 'SHOWASLIST', 'STATICTEXT'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_customfield_displaytypeElemID.name],
  }),
  generic_customfield_dynamicdefault: new PrimitiveType({
    elemID: generic_customfield_dynamicdefaultElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['DEPARTMENT', 'LOCATION', 'ME', 'NOW', 'SUBSIDIARY', 'SUPERVISOR'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_customfield_dynamicdefaultElemID.name],
  }),
  generic_customfield_fieldtype: new PrimitiveType({
    elemID: generic_customfield_fieldtypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CHECKBOX', 'CLOBTEXT', 'CURRENCY', 'DATE', 'DATETIMETZ', 'DOCUMENT', 'EMAIL', 'FLOAT', 'HELP', 'IMAGE', 'INLINEHTML', 'INTEGER', 'MULTISELECT', 'PASSWORD', 'PERCENT', 'PHONE', 'RICHTEXT', 'SELECT', 'TEXT', 'TEXTAREA', 'TIMEOFDAY', 'URL'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_customfield_fieldtypeElemID.name],
  }),
  generic_customfield_fldfiltercomparetype: new PrimitiveType({
    elemID: generic_customfield_fldfiltercomparetypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['EQ', 'GT', 'GTE', 'LIKE', 'LT', 'LTE', 'NE', 'NOTLIKE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_customfield_fldfiltercomparetypeElemID.name],
  }),
  generic_customfield_onparentdelete: new PrimitiveType({
    elemID: generic_customfield_onparentdeleteElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['NO_ACTION', 'SET_NULL'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_customfield_onparentdeleteElemID.name],
  }),
  generic_customfield_parentsubtab: new PrimitiveType({
    elemID: generic_customfield_parentsubtabElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CRMBUDGET', 'CRMCONTACTS', 'CRMKEYWORD', 'CRMMAIN', 'CRMMESSAGE', 'CRMRELATEDINFO', 'CRMRELATEDRECORDS', 'CRMSYSTEMINFORMATION', 'ENTITYACCESS', 'ENTITYACCOUNTING', 'ENTITYBUDGET', 'ENTITYCOMMUNICATION', 'ENTITYCOMPENSATIONTRACKING', 'ENTITYFINANCIAL', 'ENTITYGENERAL', 'ENTITYHUMANRESOURCES', 'ENTITYINFO', 'ENTITYMAIN', 'ENTITYMARKETING', 'ENTITYPL', 'ENTITYPREFERENCES', 'ENTITYQUALIFICATION', 'ENTITYRELATEDRECORDS', 'ENTITYRELATIONSHIPS', 'ENTITYSALES', 'ENTITYSUBSCRIPTIONS', 'ENTITYSUPPORT', 'ENTITYTIMEOFF', 'ENTITYTIMETRACKING', 'ITEMBASIC', 'ITEMCOMMUNICATION', 'ITEMINVENTORY', 'ITEMLOCATIONS', 'ITEMMAIN', 'ITEMMATRIX', 'ITEMPURCHASINGINVENTORY', 'ITEMSYSTEMINFORMATION', 'ITEMVENDORS', 'TRANSACTIONACCOUNTING', 'TRANSACTIONADDRESS', 'TRANSACTIONBILLING', 'TRANSACTIONBUILDS', 'TRANSACTIONCOMMUNICATION', 'TRANSACTIONFULFILLMENTSANDCREDITS', 'TRANSACTIONFULFILLMENTSANDRECEIPTS', 'TRANSACTIONGENERAL', 'TRANSACTIONHISTORY', 'TRANSACTIONITEMS', 'TRANSACTIONJOURNAL', 'TRANSACTIONMAIN', 'TRANSACTIONOUTPUTOPTIONS', 'TRANSACTIONPAYMENT', 'TRANSACTIONQUALIFICATION', 'TRANSACTIONRECEIPTSANDREFUNDS', 'TRANSACTIONRELATEDRECORDS', 'TRANSACTIONRELATIONSHIPS', 'TRANSACTIONSALES', 'TRANSACTIONSHIPPING', 'TRANSACTIONSYSTEMINFORMATION'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_customfield_parentsubtabElemID.name],
  }),
  generic_customfield_selectrecordtype: new PrimitiveType({
    elemID: generic_customfield_selectrecordtypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['-10', '-100', '-101', '-102', '-103', '-104', '-105', '-106', '-108', '-109', '-110', '-111', '-112', '-113', '-114', '-115', '-116', '-117', '-118', '-119', '-120', '-121', '-122', '-123', '-124', '-125', '-126', '-127', '-128', '-129', '-131', '-132', '-133', '-134', '-135', '-136', '-137', '-138', '-139', '-140', '-1403', '-1404', '-141', '-142', '-143', '-144', '-145', '-146', '-147', '-148', '-149', '-150', '-1501', '-1502', '-1503', '-1504', '-151', '-152', '-153', '-154', '-155', '-1553', '-156', '-157', '-158', '-159', '-160', '-161', '-162', '-163', '-164', '-165', '-166', '-167', '-168', '-169', '-170', '-171', '-172', '-173', '-174', '-175', '-176', '-177', '-178', '-179', '-180', '-181', '-182', '-183', '-184', '-185', '-186', '-187', '-188', '-189', '-190', '-191', '-192', '-193', '-194', '-195', '-196', '-197', '-198', '-199', '-2', '-20', '-200', '-201', '-202', '-203', '-204', '-205', '-206', '-207', '-208', '-209', '-21', '-210', '-211', '-212', '-213', '-214', '-215', '-216', '-217', '-218', '-219', '-22', '-220', '-221', '-222', '-223', '-224', '-225', '-226', '-227', '-228', '-229', '-23', '-230', '-231', '-232', '-233', '-234', '-235', '-236', '-237', '-238', '-239', '-24', '-240', '-241', '-242', '-243', '-244', '-245', '-246', '-247', '-248', '-249', '-25', '-250', '-251', '-252', '-253', '-256', '-257', '-258', '-259', '-26', '-261', '-262', '-263', '-264', '-265', '-266', '-268', '-269', '-27', '-270', '-271', '-276', '-278', '-28', '-280', '-281', '-282', '-283', '-284', '-285', '-286', '-287', '-288', '-289', '-290', '-292', '-293', '-294', '-295', '-296', '-297', '-298', '-3', '-30', '-301', '-302', '-304', '-309', '-31', '-310', '-311', '-314', '-315', '-316', '-317', '-319', '-320', '-321', '-322', '-324', '-325', '-326', '-327', '-330', '-331', '-332', '-333', '-335', '-336', '-337', '-338', '-340', '-341', '-342', '-343', '-344', '-345', '-346', '-347', '-348', '-349', '-35', '-350', '-353', '-355', '-356', '-357', '-359', '-36', '-360', '-361', '-362', '-364', '-365', '-366', '-367', '-368', '-369', '-37', '-371', '-372', '-373', '-374', '-375', '-376', '-377', '-378', '-379', '-38', '-380', '-381', '-382', '-383', '-385', '-386', '-387', '-388', '-39', '-391', '-392', '-395', '-396', '-4', '-40', '-400', '-4006', '-4007', '-4009', '-4010', '-4011', '-4012', '-4016', '-402', '-4021', '-4023', '-4024', '-4025', '-4027', '-4028', '-403', '-4032', '-4033', '-4034', '-4035', '-4036', '-404', '-405', '-406', '-407', '-408', '-409', '-41', '-410', '-4104', '-4105', '-4106', '-4108', '-4109', '-411', '-4110', '-4114', '-4115', '-412', '-413', '-414', '-417', '-418', '-419', '-420', '-422', '-423', '-425', '-426', '-427', '-428', '-430', '-431', '-432', '-434', '-435', '-436', '-437', '-438', '-440', '-441', '-450', '-451', '-452', '-460', '-461', '-494', '-495', '-496', '-497', '-5', '-500', '-505', '-506', '-507', '-508', '-514', '-517', '-520', '-522', '-523', '-524', '-528', '-530', '-531', '-532', '-533', '-535', '-537', '-538', '-539', '-540', '-543', '-544', '-546', '-547', '-548', '-549', '-550', '-551', '-553', '-554', '-555', '-556', '-560', '-561', '-565', '-6', '-696', '-7', '-710', '-711', '-712', '-714', '-715', '-716', '-717', '-718', '-719', '-720', '-8', '-856', '-861', '-862', '-863', '-864', '-865', '-867', '-868', '-869', '-896', '-897', '-898', '-899', '-9', '-900', '-901', '-902', '-904', '-905', '-906', '-907', '-908', '-910', '-911', '-913', '-914', '-970', '-997', '-998', '-999'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_customfield_selectrecordtypeElemID.name],
  }),
  generic_customrecordothercustomfield_field: new PrimitiveType({
    elemID: generic_customrecordothercustomfield_fieldElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CREATED', 'CUSTOMFORM', 'ISINACTIVE', 'ISMATRIXOPTION', 'LASTMODIFIED', 'NAME', 'NKEY', 'OWNER', 'RECORDID'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_customrecordothercustomfield_fieldElemID.name],
  }),
  generic_customrecordothercustomfield_rectype: new PrimitiveType({
    elemID: generic_customrecordothercustomfield_rectypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['-101', '-102', '-103', '-107', '-108', '-112', '-113', '-115', '-117', '-118', '-121', '-126', '-128', '-129', '-1500', '-196', '-198', '-242', '-246', '-247', '-248', '-249', '-250', '-251', '-252', '-253', '-257', '-258', '-259', '-265', '-276', '-278', '-288', '-289', '-290', '-292', '-294', '-295', '-298', '-303', '-304', '-309', '-316', '-317', '-325', '-326', '-327', '-330', '-331', '-332', '-333', '-335', '-336', '-341', '-342', '-347', '-348', '-350', '-353', '-355', '-357', '-359', '-362', '-369', '-376', '-377', '-379', '-381', '-382', '-383', '-385', '-386', '-388', '-400', '-4006', '-4007', '-4011', '-4012', '-4014', '-4016', '-4021', '-4023', '-4024', '-4025', '-4028', '-4034', '-409', '-410', '-4104', '-4108', '-411', '-4110', '-4114', '-412', '-419', '-422', '-423', '-424', '-425', '-427', '-428', '-432', '-434', '-435', '-500', '-505', '-506', '-507', '-508', '-513', '-520', '-522', '-530', '-531', '-543', '-546', '-549', '-550', '-551', '-553', '-557', '-863', '-864', '-867', '-900', '-901', '-902', '-903', '-906', '-907', '-909'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_customrecordothercustomfield_rectypeElemID.name],
  }),
  generic_day_of_month: new PrimitiveType({
    elemID: generic_day_of_monthElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['1', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '2', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '3', '30', '31', '4', '5', '6', '7', '8', '9'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_day_of_monthElemID.name],
  }),
  generic_day_of_week: new PrimitiveType({
    elemID: generic_day_of_weekElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['FRIDAY', 'MONDAY', 'SATURDAY', 'SUNDAY', 'THURSDAY', 'TUESDAY', 'WEDNESDAY'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_day_of_weekElemID.name],
  }),
  generic_entity_tab: new PrimitiveType({
    elemID: generic_entity_tabElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ENTITYACCESS', 'ENTITYACCOUNTING', 'ENTITYBUDGET', 'ENTITYCOMMUNICATION', 'ENTITYCOMPENSATIONTRACKING', 'ENTITYFINANCIAL', 'ENTITYGENERAL', 'ENTITYHUMANRESOURCES', 'ENTITYINFO', 'ENTITYMAIN', 'ENTITYMARKETING', 'ENTITYPL', 'ENTITYPREFERENCES', 'ENTITYQUALIFICATION', 'ENTITYRELATEDRECORDS', 'ENTITYRELATIONSHIPS', 'ENTITYSALES', 'ENTITYSUBSCRIPTIONS', 'ENTITYSUPPORT', 'ENTITYTIMEOFF', 'ENTITYTIMETRACKING'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_entity_tabElemID.name],
  }),
  generic_item_tab: new PrimitiveType({
    elemID: generic_item_tabElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ITEMBASIC', 'ITEMCOMMUNICATION', 'ITEMINVENTORY', 'ITEMLOCATIONS', 'ITEMMAIN', 'ITEMMATRIX', 'ITEMPURCHASINGINVENTORY', 'ITEMSYSTEMINFORMATION', 'ITEMVENDORS'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_item_tabElemID.name],
  }),
  generic_itemoptionitemcol_field: new PrimitiveType({
    elemID: generic_itemoptionitemcol_fieldElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ADJUSTQTYBY', 'ALTSALESAMT', 'AMORTIZATIONENDDATE', 'AMORTIZATIONRESIDUAL', 'AMORTIZATIONSCHED', 'AMORTIZSTARTDATE', 'AMOUNT', 'AMOUNTORDERED', 'AMOUNTRECOGNIZED', 'AMOUNTREMAINING', 'AVERAGECOST', 'BALANCE', 'BILLEDDATE', 'BILLINGSCHEDULE', 'BILLRECEIPTS', 'BILLVARIANCESTATUS', 'BINNUMBERS', 'BINNUMBERSSTOCK', 'BOMQUANTITY', 'CATCHUPPERIOD', 'CHARGE', 'CHARGES', 'CHARGETYPE', 'CLASS', 'COMMITINVENTORY', 'COMMITMENTFIRM', 'COMPONENTYIELD', 'COSTESTIMATE', 'COSTESTIMATERATE', 'COSTESTIMATETYPE', 'COUNTRYOFMANUFACTURE', 'CREATEDFROM', 'CREATEPO', 'CREATEWO', 'CURRENCY', 'CURRENTPERCENT', 'CURRENTVALUE', 'CUSTOMER', 'DATECOL', 'DEFERREVREC', 'DEPARTMENT', 'DESCRIPTION', 'DISCOUNT', 'DROPSHIP', 'DUEDATE', 'EMPLOYEE', 'EMPLOYEEFULLNAME', 'ENDDATE', 'ESTGROSSPROFIT', 'ESTGROSSPROFITFIELDS', 'ESTGROSSPROFITPERCENT', 'ESTIMATEDAMOUNT', 'ESTIMATEDRATE', 'EVENT', 'EXCLUDEFROMRATEREQUEST', 'EXPECTEDRECEIPTDATE', 'EXPECTEDSHIPDATE', 'FROMJOB', 'GIFTCERTFIELDS', 'GLNUMBER', 'GLSEQUENCE', 'GROSSAMT', 'INVENTORYDETAIL', 'INVENTORYDETAILSTOCK', 'ISBILLABLE', 'ISCLOSED', 'ISDROPSHIPMENT', 'ISESTIMATE', 'ISTAXABLE', 'ITEM', 'ITEMPRICING', 'ITEMTAX', 'JOB', 'LANDEDCOST', 'LANDEDCOSTCATEGORY', 'LASTPURCHASEPRICE', 'LICENSECODE', 'LINKEDORDER', 'LINKEDORDERSTATUS', 'LOCATION', 'MANUFACTURER', 'MATCHBILLTORECEIPT', 'MEMO', 'MPN', 'NEWQUANTITY', 'OPTIONS', 'ORDERPRIORITY', 'ORDERSCHEDULE', 'ORIGINALAMOUNT', 'OTHERREFNUM', 'PARENTITEM', 'PAYMENT', 'PAYMENTMETHOD', 'PERCENTCOMPLETE', 'PORATE', 'POVENDOR', 'PRICE', 'PROCESSEDBYREVCOMMIT', 'PURCHASECONTRACT', 'QUANTITY', 'QUANTITYAVAILABLE', 'QUANTITYBACKORDERED', 'QUANTITYCOMMITTED', 'QUANTITYFULFILLED', 'QUANTITYONHAND', 'QUANTITYORDERED', 'QUANTITYRECEIVED', 'QUANTITYREMAINING', 'RATE', 'RATE10', 'RATE2', 'RATE3', 'RATE4', 'RATE5', 'RATE6', 'RATE7', 'RATE8', 'RATE9', 'REASON', 'RESTOCK', 'REVRECENDDATE', 'REVRECSCHEDULE', 'REVRECSTARTDATE', 'SERIALNUMBERS', 'SHIPADDRESS', 'SHIPCARRIER', 'SHIPMETHOD', 'SHIPPINGCOST', 'SPECIALORDER', 'STARTDATE', 'SUBNAME', 'TAX1AMT', 'TAXAMOUNT', 'TAXCODE', 'TAXRATE1', 'TAXRATE2', 'TERMINMONTHS', 'TERMS', 'TRANSACTIONNO', 'UNITCOST', 'UNITCOSTOVERRIDE', 'UNITPRICE', 'UNITS', 'UPCCODE', 'VENDORNAME', 'VSOEDELIVERED', 'VSOEFIELDS', 'WEIGHT'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_itemoptionitemcol_fieldElemID.name],
  }),
  generic_itemoptionitemcol_fieldtype: new PrimitiveType({
    elemID: generic_itemoptionitemcol_fieldtypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CHECKBOX', 'CURRENCY', 'DATE', 'DATETIMETZ', 'DOCUMENT', 'EMAIL', 'FLOAT', 'INLINEHTML', 'INTEGER', 'PASSWORD', 'PERCENT', 'PHONE', 'SELECT', 'TEXT', 'TEXTAREA', 'TIMEOFDAY', 'URL'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_itemoptionitemcol_fieldtypeElemID.name],
  }),
  generic_itemoptionitemcol_searchcomparefield: new PrimitiveType({
    elemID: generic_itemoptionitemcol_searchcomparefieldElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['STDCOLACCOUNT', 'STDCOLCALL', 'STDCOLCASE', 'STDCOLCHARGE', 'STDCOLCLASS', 'STDCOLCUSTOMER', 'STDCOLDEPARTMENT', 'STDCOLEMPLOYEE', 'STDCOLENTITY', 'STDCOLEVENT', 'STDCOLITEM', 'STDCOLJOB', 'STDCOLLOCATION', 'STDCOLSUBSIDIARY', 'STDCOLTASK'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_itemoptionitemcol_searchcomparefieldElemID.name],
  }),
  generic_month: new PrimitiveType({
    elemID: generic_monthElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['APRIL', 'AUGUST', 'DECEMBER', 'FEBRUARY', 'JANUARY', 'JULY', 'JUNE', 'MARCH', 'MAY', 'NOVEMBER', 'OCTOBER', 'SEPTEMBER'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_monthElemID.name],
  }),
  generic_order_of_week: new PrimitiveType({
    elemID: generic_order_of_weekElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['FIRST', 'FOURTH', 'LAST', 'SECOND', 'THIRD'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_order_of_weekElemID.name],
  }),
  generic_permission: new PrimitiveType({
    elemID: generic_permissionElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ADMI_ACCOUNTING', 'ADMI_ACCOUNTINGBOOK', 'ADMI_ACCOUNTINGLIST', 'ADMI_ACCTPERIODS', 'ADMI_ACCTSETUP', 'ADMI_ACH', 'ADMI_ADMINDOCSEU', 'ADMI_ADMINDOCSNA', 'ADMI_ADMINDOCSOTHER', 'ADMI_ADVANCED_ORDER_MANAGEMENT', 'ADMI_ADVANCED_TEMPLATES', 'ADMI_ALLOWNONGLCHANGES', 'ADMI_ALLOW_JS_HTML_UPLOAD', 'ADMI_ANALYTICS', 'ADMI_APPDEFPKG', 'ADMI_APPPUBLISHER', 'ADMI_APP_DEPLOYMENT', 'ADMI_AUDITLOGIN', 'ADMI_BACKUPEXPORT', 'ADMI_BALANCE_TRX_BY_SEGMENTS', 'ADMI_BANK_CONNECTIVITY_CONFIG', 'ADMI_BILLINGINFO', 'ADMI_BILLPAYSETUP', 'ADMI_BLCGA', 'ADMI_BUNDLER', 'ADMI_BUNDLERAUDITTRAIL', 'ADMI_BUNDLERMANUP', 'ADMI_CAMPAIGNEMAIL', 'ADMI_CAMPAIGNSETUP', 'ADMI_CASEALERT', 'ADMI_CASEFORM', 'ADMI_CASEISSUE', 'ADMI_CASEORIGIN', 'ADMI_CASEPRIORITY', 'ADMI_CASERULE', 'ADMI_CASESTATUS', 'ADMI_CASETERRITORY', 'ADMI_CASETYPE', 'ADMI_CENTERLINK', 'ADMI_CERTIFICATES', 'ADMI_CLASSESTOLOCS', 'ADMI_CLASSSEGMENTMAPPING', 'ADMI_CLOSE', 'ADMI_CLOSEPERIOD', 'ADMI_COMMERCECATEGORY', 'ADMI_COMMISSIONSETUP', 'ADMI_COMPANY', 'ADMI_CONSOLIDATED', 'ADMI_CONVERTCLASSES', 'ADMI_CONVERTLEAD', 'ADMI_COPYPROJECTTASK', 'ADMI_CREATEJOBSFROMSALESTRANS', 'ADMI_CREATEPEER', 'ADMI_CREDITCARD', 'ADMI_CRMLIST', 'ADMI_CROSSCHARGE', 'ADMI_CSP_SETUP', 'ADMI_CSVIMPORTPREF', 'ADMI_CUSTADDRESSFORM', 'ADMI_CUSTBODYFIELD', 'ADMI_CUSTCATEGORY', 'ADMI_CUSTCENTER', 'ADMI_CUSTCOLUMNFIELD', 'ADMI_CUSTEMAILLAYOUT', 'ADMI_CUSTENTITYFIELD', 'ADMI_CUSTENTRYFORM', 'ADMI_CUSTEVENTFIELD', 'ADMI_CUSTFIELD', 'ADMI_CUSTFIELDTAB', 'ADMI_CUSTFORM', 'ADMI_CUSTITEMFIELD', 'ADMI_CUSTITEMNUMBERFIELD', 'ADMI_CUSTLAYOUT', 'ADMI_CUSTLIST', 'ADMI_CUSTOMERFORM', 'ADMI_CUSTOMERRULE', 'ADMI_CUSTOMER_SEGMENTS', 'ADMI_CUSTOMIZEDFIELDLEVELHELP', 'ADMI_CUSTOMSCRIPT', 'ADMI_CUSTOMSUBLIST', 'ADMI_CUSTOTHERFIELD', 'ADMI_CUSTPAGE', 'ADMI_CUSTRECORD', 'ADMI_CUSTRECORDFORM', 'ADMI_CUSTSECTION', 'ADMI_CUSTTASKS', 'ADMI_CUSTTRANFIELD', 'ADMI_CUSTTRANSACTION', 'ADMI_DELETEDRECORD', 'ADMI_DEPTSEGMENTMAPPING', 'ADMI_DEVICE_ID', 'ADMI_DOMAINS', 'ADMI_DUPLICATESETUP', 'ADMI_EMAILPWD', 'ADMI_EMPLCATEGORY', 'ADMI_EMPLOYEECENTERPUBLISHING', 'ADMI_EMPLOYEELIST', 'ADMI_ENABLEFEATURES', 'ADMI_ENTITYACCOUNTMAPPING', 'ADMI_ENTITYSTATUS', 'ADMI_ESCALATIONRULE', 'ADMI_ESCALATIONTERRITORY', 'ADMI_EXPENSEREPORTPOLICY', 'ADMI_EXPORTIIF', 'ADMI_FFTEXCEPTIONREASON', 'ADMI_FINANCIALINSTITUTION', 'ADMI_FINCHARGEPREF', 'ADMI_GAINLOSSACCTMAPPING', 'ADMI_GLOBALACCOUNTMAPPING', 'ADMI_IMPORTCSVFILE', 'ADMI_IMPORTDEFAULT', 'ADMI_IMPORTOVERRIDESSTRIG', 'ADMI_IMPORTXML', 'ADMI_INTEGRAPP', 'ADMI_ISSUEOBFUSCATEMASSUPDATE', 'ADMI_ISSUESETUP', 'ADMI_ISSUESHOWSTOPPER', 'ADMI_ITEMACCOUNTMAPPING', 'ADMI_KERNEL', 'ADMI_KEYS', 'ADMI_KNOWLEDGEBASE', 'ADMI_KPIREPORT', 'ADMI_LOCATIONCOSTINGGROUP', 'ADMI_LOCSEGMENTMAPPING', 'ADMI_LOGIN_OAUTH', 'ADMI_LOGIN_OAUTH2', 'ADMI_MANAGECUSTOMSEGMENTS', 'ADMI_MANAGEPERMISSIONS', 'ADMI_MANAGEROLES', 'ADMI_MANAGEUSERS', 'ADMI_MANAGE_OAUTH2', 'ADMI_MANAGE_OAUTH_TOKENS', 'ADMI_MANAGE_OWN_OAUTH_TOKENS', 'ADMI_MANAGE_RESTRICTIONS', 'ADMI_MANUFACTURING', 'ADMI_MHLEVEL', 'ADMI_MHNODE', 'ADMI_MHVERSION', 'ADMI_MIGRATEREVARRNGANDPLAN', 'ADMI_MOBILE_ACCESS', 'ADMI_NSASOIDCPROVIDER', 'ADMI_NUMBERING', 'ADMI_OIDC', 'ADMI_OIDCSETUP', 'ADMI_OPENIDSSO', 'ADMI_OPENIDSSOSETUP', 'ADMI_ORDERALLOCATIONSTRATEGY', 'ADMI_ORDERPROMISING', 'ADMI_OUTLOOKINTEGRATION', 'ADMI_OUTLOOKINTEGRATION_V3', 'ADMI_PARTNERCONTRIBUTION', 'ADMI_PAYROLL', 'ADMI_PENDINGBOOKJOURNAL', 'ADMI_PERIODCLOSING', 'ADMI_PERIODOVERRIDE', 'ADMI_PI_REMOVAL_CREATE', 'ADMI_PI_REMOVAL_RUN', 'ADMI_PROJECTTEMPLATE', 'ADMI_PROJECT_ACCOUNTING_SETUP', 'ADMI_PROVISION', 'ADMI_PROVSN_NEW_TSTDRV', 'ADMI_PROVSN_QA', 'ADMI_PROVSN_TSTDRV', 'ADMI_REMINDERS', 'ADMI_REPOGROUPS', 'ADMI_REPOLAYOUTS', 'ADMI_RESTWEBSERVICES', 'ADMI_REVIEW_CUSTOM_GL_RUNS', 'ADMI_SAC_READALL', 'ADMI_SALESCHANNEL', 'ADMI_SALESTERRITORY', 'ADMI_SAMLSSO', 'ADMI_SAMLSSOSETUP', 'ADMI_SAVEDASHBOARD', 'ADMI_SECRETS', 'ADMI_SETUPCOMPANY', 'ADMI_SETUPIMAGERESIZE', 'ADMI_SETUPYEARSTATUS', 'ADMI_SFASETUP', 'ADMI_SITEMANAGEMENT', 'ADMI_SNAPSHOTS', 'ADMI_SS_NLCORP', 'ADMI_SS_SCHEDULING', 'ADMI_STATETAXIMPORT', 'ADMI_STORESEARCH', 'ADMI_STORESETUP', 'ADMI_SUBLIST', 'ADMI_SUBSIDIARYHIERARCHYMOD', 'ADMI_SUBSIDIARYSETTINGSMANAGER', 'ADMI_SUITEANALYTICSCONNECT', 'ADMI_SUITEAPP_MANAGEMENT', 'ADMI_SUITECOMMERCEANALYTICS', 'ADMI_SUITESIGNON', 'ADMI_SUITE_OAX_CONNECTOR', 'ADMI_SUPPLYALLOCATIONSETUP', 'ADMI_SUPPORTSETUP', 'ADMI_SWAPPRICES', 'ADMI_TAXMIGRATION', 'ADMI_TAXPERIODS', 'ADMI_TEAMSELLINGCONTRIBUTION', 'ADMI_TELEPHONY_SETUP', 'ADMI_TIMEMODIFICATION', 'ADMI_TRANSITEMTXT', 'ADMI_TRANSLATION', 'ADMI_TRAN_ACCOUNTING_RULES', 'ADMI_TSTDRV_MASTER', 'ADMI_TWOFACTORAUTH', 'ADMI_TWOFACTORAUTHBASE', 'ADMI_TYPE', 'ADMI_UNCATSITEITEMS', 'ADMI_UNLOCKEDTIMEPERIOD', 'ADMI_UPDATEPRICES', 'ADMI_UPSELLSETUP', 'ADMI_USER', 'ADMI_USERPREF', 'ADMI_VICARIOUS_EMAILS', 'ADMI_VIEWACHACCOUNT', 'ADMI_VIEWCREDITCARDS', 'ADMI_WEBSERVICES', 'ADMI_WEBSERVICESLOG', 'ADMI_WEBSERVICESOVERRIDESSTRIG', 'ADMI_WEBSERVICESSETUP', 'ADMI_WORKFLOW', 'ADMI_XMLADPSETUP', 'EDIT_FISCALCALENDAR', 'GRAP_AP', 'GRAP_AR', 'GRAP_EXP', 'GRAP_INC', 'GRAP_NETWORTH', 'LIST_ACCOUNT', 'LIST_ACH', 'LIST_ADDRESS', 'LIST_ALLGOVERNMENTISSUEDIDS', 'LIST_ALLOCSCHEDULE', 'LIST_AMORTIZATION', 'LIST_BASICGOVERNMENTISSUEDIDS', 'LIST_BIG_SEARCH', 'LIST_BILLINBOUNDSHIPMENT', 'LIST_BILLINGSCHEDULE', 'LIST_BILLOFDISTRIBUTION', 'LIST_BILLOFMATERIALSINQUIRY', 'LIST_BIN', 'LIST_BOM', 'LIST_BONUS', 'LIST_BONUSTYPE', 'LIST_CALENDAR', 'LIST_CALL', 'LIST_CAMPAIGN', 'LIST_CAMPAIGNHISTORY', 'LIST_CARDHOLDERAUTHENTICATION', 'LIST_CARDHOLDERAUTHEVENT', 'LIST_CASE', 'LIST_CASE_DUPLICATES', 'LIST_CATEGORY', 'LIST_CERTIFICATES', 'LIST_CHECKITEMAVAILABILITY', 'LIST_CLASS', 'LIST_COLORTHEME', 'LIST_COMMISSIONRULES', 'LIST_COMPANY', 'LIST_COMPETITOR', 'LIST_COMPONENTWHEREUSEDINQUIRY', 'LIST_CONTACT', 'LIST_CONTACTROLE', 'LIST_CONVERTLEAD', 'LIST_COSTEDBOMINQUIRY', 'LIST_CRMGROUP', 'LIST_CRMMESSAGE', 'LIST_CRMTEMPLATE', 'LIST_CURRENCY', 'LIST_CUSTJOB', 'LIST_CUSTPROFILE', 'LIST_CUSTRECORDENTRY', 'LIST_DEPARTMENT', 'LIST_DISTRIBUTIONNETWORK', 'LIST_EARLIEST_AVAILABILITY', 'LIST_EMAILTEMPLATE', 'LIST_EMPLOYEE', 'LIST_EMPLOYEECHANGEREASON', 'LIST_EMPLOYEECHANGEREQUEST', 'LIST_EMPLOYEECHANGETYPE', 'LIST_EMPLOYEEEFFECTIVEDATING', 'LIST_EMPLOYEESEPARATION', 'LIST_EMPLOYEESSN', 'LIST_EMPLOYEE_ACCESS', 'LIST_EMPLOYEE_ADMINISTRATION', 'LIST_EMPLOYEE_CONFIDENTIAL', 'LIST_EMPLOYEE_PUBLIC', 'LIST_EMPLOYEE_RECORD', 'LIST_EMPLOYEE_SELF', 'LIST_ENTITY_DUPLICATES', 'LIST_EVENT', 'LIST_EXPENSEAMORTIZATIONRULE', 'LIST_EXPENSEPLAN', 'LIST_EXPORT', 'LIST_FAIRVALUEDIMENSION', 'LIST_FAIRVALUEFORMULA', 'LIST_FAIRVALUEPRICE', 'LIST_FAXMESSAGE', 'LIST_FAXTEMPLATE', 'LIST_FILECABINET', 'LIST_FIND', 'LIST_FINHISTORY', 'LIST_FISCALCALENDAR', 'LIST_GENERAL_TOKEN', 'LIST_GENERICRESOURCE', 'LIST_GLLINESAUDITLOG', 'LIST_GLLINESAUDITLOGSEG', 'LIST_GLOBALINVTRELATIONSHIP', 'LIST_GOVERNMENTISSUEDIDTYPE', 'LIST_HCMJOB', 'LIST_HCMPOSITION', 'LIST_HISTORY', 'LIST_IMPORTED_EMPLOYEE_EXPENSE', 'LIST_INBOUNDSHIPMENT', 'LIST_INFOCATEGORY', 'LIST_INFOITEM', 'LIST_INFOITEMFORM', 'LIST_INTEGRAPP', 'LIST_INTERNALPUBLISH', 'LIST_INVCOSTTEMPLATE', 'LIST_INVENTORYSTATUS', 'LIST_ISSUE', 'LIST_ITEM', 'LIST_ITEMDEMANDPLAN', 'LIST_ITEMPROCESSFAMILY', 'LIST_ITEMPROCESSGROUP', 'LIST_ITEMREVENUECATEGORY', 'LIST_ITEMSUPPLYPLAN', 'LIST_ITEMTEMPLATE', 'LIST_ITEM_COLLECTION', 'LIST_ITEM_REVISION', 'LIST_JOB', 'LIST_JOBREQUISITION', 'LIST_KEYS', 'LIST_KNOWLEDGEBASE', 'LIST_KUDOS', 'LIST_LABORCOSTING', 'LIST_LOCATION', 'LIST_MAILMERGE', 'LIST_MAILMESSAGE', 'LIST_MAILTEMPLATE', 'LIST_MASSUPDATES', 'LIST_MATERIALREQUIREMENTSPLAN', 'LIST_MEDIAITEMFOLDER', 'LIST_MEMDOC', 'LIST_MFGCOSTTEMPLATE', 'LIST_MFGROUTING', 'LIST_MYROLES', 'LIST_NEWSITEM', 'LIST_NOTIFICATION', 'LIST_ORDERMANAGEDASHBOARD', 'LIST_ORDER_REALLOCATION', 'LIST_ORGANIZATIONVALUE', 'LIST_OTHERNAME', 'LIST_OUTBOUNDREQUEST', 'LIST_PARTNER', 'LIST_PARTNERCOMMISSNRULES', 'LIST_PAYCHECK', 'LIST_PAYMENT_CARD', 'LIST_PAYMENT_CARD_TOKEN', 'LIST_PAYMENT_INSTRUMENTS', 'LIST_PAYMETH', 'LIST_PAYROLLITEM', 'LIST_PDFMESSAGE', 'LIST_PDFTEMPLATE', 'LIST_PHASEDPROCESS', 'LIST_PICKSTRATEGY', 'LIST_PICKTASK', 'LIST_PLANNEDREVENUE', 'LIST_PLANNEDSTANDARDCOST', 'LIST_PRESCATEGORY', 'LIST_PRICEBOOK', 'LIST_PRICEPLAN', 'LIST_PROJECTREVENUERULE', 'LIST_PROJECTTASK', 'LIST_PROJECTTEMPLATE', 'LIST_PROJECT_BUDGET', 'LIST_PROMOTIONCODE', 'LIST_PUBLIC_TEMPLATE_CATEGORY', 'LIST_PUBLISHSEARCH', 'LIST_QUANTITYPRICINGSCHEDULE', 'LIST_REALLOCATE_ORDER_ITEM', 'LIST_RECOGNITIONEVENTTYPE', 'LIST_RECORDCUSTFIELD', 'LIST_RELATEDITEMS', 'LIST_RESOURCE', 'LIST_RESOURCEGROUP', 'LIST_REVENUEELEMENT', 'LIST_REVENUEPLAN', 'LIST_REVENUERECOGNITIONRULE', 'LIST_REVRECFIELDMAPPING', 'LIST_REVRECSCHEDULE', 'LIST_REVRECTREATMENT', 'LIST_REVRECTREATMENTRULE', 'LIST_REVRECVSOE', 'LIST_RSRCALLOCATION', 'LIST_RSRCALLOCATIONAPPRV', 'LIST_RSSFEED', 'LIST_SALESCAMPAIGN', 'LIST_SALESROLE', 'LIST_SCHEDULEMASSUPDATES', 'LIST_SCSNAPSHOT', 'LIST_SENTEMAIL', 'LIST_SHIPITEM', 'LIST_SHIPPARTPACKAGE', 'LIST_SHIPPARTREGISTRATION', 'LIST_SHIPPARTSHIPMENT', 'LIST_SHORTCUT', 'LIST_SITEEMAILTEMPLATE', 'LIST_STANDARDCOSTVERSION', 'LIST_STORECATEGORY', 'LIST_STOREITEMLISTLA', 'LIST_STORETAB', 'LIST_SUBSCRIPTION', 'LIST_SUBSCRIPTIONCHANGEORDER', 'LIST_SUBSCRIPTIONPLAN', 'LIST_SUBSIDIARY', 'LIST_SUPPLY_REALLOCATION', 'LIST_SYSTEMEMAILTEMPLATE', 'LIST_TABLEAU_WORKBOOK_EXPORT', 'LIST_TALENT_ADMINISTRATION', 'LIST_TASK', 'LIST_TAXDETAILSTAB', 'LIST_TAXENGINESELECTION', 'LIST_TAXITEM', 'LIST_TAXSCHEDULE', 'LIST_TEGATAACCOUNT', 'LIST_TEMPLATE_CATEGORY', 'LIST_TIMEOFFADMIN', 'LIST_TRANNUMBERAUDITLOG', 'LIST_UNDELIVEREDEMAIL', 'LIST_UNIT', 'LIST_UPSELL', 'LIST_UPSELLWIZARD', 'LIST_USAGE', 'LIST_VENDOR', 'LIST_WBS', 'LIST_WEBSITE', 'LIST_WORKASSIGNMENT', 'LIST_WORKCALENDAR', 'LIST_WORKPLACE', 'LIST_ZONE', 'NONE_NEEDED', 'REGT_ACCTPAY', 'REGT_ACCTREC', 'REGT_BANK', 'REGT_COGS', 'REGT_CREDCARD', 'REGT_DEFEREXPENSE', 'REGT_DEFERREVENUE', 'REGT_EQUITY', 'REGT_EXPENSE', 'REGT_FIXEDASSET', 'REGT_INCOME', 'REGT_LONGTERMLIAB', 'REGT_NONPOSTING', 'REGT_OTHASSET', 'REGT_OTHCURRASSET', 'REGT_OTHCURRLIAB', 'REGT_OTHEXPENSE', 'REGT_OTHINCOME', 'REGT_PAYROLL', 'REGT_STAT', 'REGT_UNBILLEDREC', 'REPO_1099', 'REPO_940', 'REPO_941', 'REPO_ACCOUNTDETAIL', 'REPO_AMORTIZATION', 'REPO_ANALYTICS', 'REPO_AP', 'REPO_AR', 'REPO_AUTHPARTNERCOMMISSION', 'REPO_BALANCESHEET', 'REPO_BOOKINGS', 'REPO_BUDGET', 'REPO_CASHFLOW', 'REPO_COMMISSION', 'REPO_CUSTOMIZATION', 'REPO_DEFERREDEXPENSE', 'REPO_EMAIL', 'REPO_FINANCIALS', 'REPO_GL', 'REPO_GRANT_ACCESS', 'REPO_GSTSUMMARY', 'REPO_INTEGRATION', 'REPO_INVENTORY', 'REPO_ISSUE', 'REPO_MARKETING', 'REPO_NONPOSTING', 'REPO_PANDL', 'REPO_PARTNERCOMMISSION', 'REPO_PAYCHECKDETAIL', 'REPO_PAYROLL', 'REPO_PAYROLLHIDEFINEMPINFO', 'REPO_PAYROLLHOURSEARNING', 'REPO_PAYROLLJOURNAL', 'REPO_PAYROLLLIAB', 'REPO_PAYROLLSTATEWITHHOLD', 'REPO_PAYROLLW2', 'REPO_PERIODENDFINANCIALS', 'REPO_PROJECT_ACCOUNTING', 'REPO_PSTSUMMARY', 'REPO_PURCHASEORDER', 'REPO_PURCHASES', 'REPO_QUOTA', 'REPO_RECONCILE', 'REPO_REMINDEREMPLOYEE', 'REPO_RETURNAUTH', 'REPO_REVREC', 'REPO_RSRCALLOCATION', 'REPO_SALES', 'REPO_SALESORDER', 'REPO_SALES_PARTNER', 'REPO_SALES_PROMO', 'REPO_SCHEDULE', 'REPO_SFA', 'REPO_SNAPSHOTCASE', 'REPO_SNAPSHOTLEAD', 'REPO_SUPPORT', 'REPO_TAX', 'REPO_TAXREPORTS', 'REPO_TIME', 'REPO_TRAN', 'REPO_TRIALBALANCE', 'REPO_UNBILLED', 'REPO_W4', 'REPO_WEBSITE', 'REPO_WEBSTORE', 'REPO_WORKFORCEANALYTICS', 'TRAN_ADJUSTMENTJOURNAL', 'TRAN_ALLOCSCHEDULE', 'TRAN_AMENDW4', 'TRAN_APPROVECOMMISSN', 'TRAN_APPROVEDD', 'TRAN_APPROVEEFT', 'TRAN_APPROVEPARTNERCOMM', 'TRAN_APPROVEVP', 'TRAN_AUDIT', 'TRAN_AUTO_CASH', 'TRAN_BALANCEOVERVIEW', 'TRAN_BALJRNAL', 'TRAN_BILLPAY_APPROVE', 'TRAN_BILLPAY_STATUS', 'TRAN_BINTRNFR', 'TRAN_BINWKSHT', 'TRAN_BLANKORD', 'TRAN_BLANKORDAPPRV', 'TRAN_BUDGET', 'TRAN_BUILD', 'TRAN_CARDCHRG', 'TRAN_CARDHOLDERAUTHENTICATION', 'TRAN_CARDHOLDERAUTHEVENT', 'TRAN_CARDRFND', 'TRAN_CASHRFND', 'TRAN_CASHSALE', 'TRAN_CHARGE', 'TRAN_CHARGERULE', 'TRAN_CHECK', 'TRAN_CLEARHOLD', 'TRAN_COMMISSN', 'TRAN_COMMITPAYROLL', 'TRAN_COPY_BUDGET', 'TRAN_CREATEINVCOUNT', 'TRAN_CUSTAUTH', 'TRAN_CUSTCHRG', 'TRAN_CUSTCRED', 'TRAN_CUSTDEP', 'TRAN_CUSTINVC', 'TRAN_CUSTINVCAPPRV', 'TRAN_CUSTPYMT', 'TRAN_CUSTRFND', 'TRAN_DEPAPPL', 'TRAN_DEPOSIT', 'TRAN_EDITBANKINGINFO', 'TRAN_EDITPROFILE', 'TRAN_ESTIMATE', 'TRAN_ESTIMATEDCOSTOVERRIDE', 'TRAN_EXPREPT', 'TRAN_FFTREQ', 'TRAN_FINCHRG', 'TRAN_FIND', 'TRAN_FORECAST', 'TRAN_FXREVAL', 'TRAN_GATEWAYNOTIFICATION', 'TRAN_GENERATECHARGES', 'TRAN_GST_REFUND', 'TRAN_IMPORTOLBFILE', 'TRAN_INTERCOADJ', 'TRAN_INVADJST', 'TRAN_INVCOUNT', 'TRAN_INVDISTR', 'TRAN_INVREVAL', 'TRAN_INVTRNFR', 'TRAN_INVWKSHT', 'TRAN_ITEMRCPT', 'TRAN_ITEMSHIP', 'TRAN_JOURNAL', 'TRAN_JOURNALAPPRV', 'TRAN_LIABPYMT', 'TRAN_MANAGEPAYROLL', 'TRAN_MATCHING_RULES', 'TRAN_MGRFORECAST', 'TRAN_NETTINGSETTLEMENTAPPRV', 'TRAN_NETTSTLM', 'TRAN_OPENBAL', 'TRAN_OPPRTNTY', 'TRAN_ORDERRESERVATION', 'TRAN_ORDRESVAPPRV', 'TRAN_OWNTRNSF', 'TRAN_PARTNERCOMMISSN', 'TRAN_PAYCHECK', 'TRAN_PAYMENTAUDIT', 'TRAN_PAYMENTEVENT', 'TRAN_PAYMENTRESULTPREVIEW', 'TRAN_PAYROLLRUN', 'TRAN_PCHKJRNL', 'TRAN_PEJRNL', 'TRAN_POSTPERIODS', 'TRAN_POSTVENDORBILLVARIANCE', 'TRAN_PRICELIST', 'TRAN_PRINT', 'TRAN_PRINTCHECKSFORMS', 'TRAN_PRINTSHIPMENTDOCS', 'TRAN_PROJECT_IC_CHARGE_REQUEST', 'TRAN_PURCHCON', 'TRAN_PURCHCONAPPRV', 'TRAN_PURCHORD', 'TRAN_PURCHORDBILL', 'TRAN_PURCHORDRECEIVE', 'TRAN_PURCHREQ', 'TRAN_PURCHREQAPPRV', 'TRAN_QUOTA', 'TRAN_RECEIVEINBOUND', 'TRAN_RECOG_GIFTCERT_INCOME', 'TRAN_RECONCILE', 'TRAN_REVARRNG', 'TRAN_REVARRNGAPPRV', 'TRAN_REVCOMM', 'TRAN_REVCOMRV', 'TRAN_REVCONTR', 'TRAN_RFQ', 'TRAN_RTNAUTH', 'TRAN_RTNAUTHAPPRV', 'TRAN_RTNAUTHCREDIT', 'TRAN_RTNAUTHRECEIVE', 'TRAN_RTNAUTHREVERSEREVCOMMIT', 'TRAN_SALESORD', 'TRAN_SALESORDAPPRV', 'TRAN_SALESORDCOMMITREVENUE', 'TRAN_SALESORDFULFILL', 'TRAN_SALESORDINVOICE', 'TRAN_SALESORDREVENUECONTRACT', 'TRAN_STATCHNG', 'TRAN_STATEMENT', 'TRAN_STATUSDD', 'TRAN_STATUSEFT', 'TRAN_STATUSVP', 'TRAN_STPICKUP', 'TRAN_SYSJRNL', 'TRAN_TAXLIAB', 'TRAN_TAXPYMT', 'TRAN_TEGPYBL', 'TRAN_TEGRCVBL', 'TRAN_TIMEBILL', 'TRAN_TIMECALC', 'TRAN_TIMEPOST', 'TRAN_TIMER', 'TRAN_TRANSFER', 'TRAN_TRNFRORD', 'TRAN_TRNFRORDAPPRV', 'TRAN_UNBUILD', 'TRAN_VENDAUTH', 'TRAN_VENDAUTHAPPRV', 'TRAN_VENDAUTHCREDIT', 'TRAN_VENDAUTHRETURN', 'TRAN_VENDBILL', 'TRAN_VENDBILLAPPRV', 'TRAN_VENDCRED', 'TRAN_VENDPYMT', 'TRAN_VENDPYMTAPPRV', 'TRAN_VENDRFQ', 'TRAN_VPREP', 'TRAN_VPREPAPP', 'TRAN_VPREPAPPRV', 'TRAN_WAVE', 'TRAN_WOCLOSE', 'TRAN_WOCOMPL', 'TRAN_WOISSUE', 'TRAN_WORKORD', 'TRAN_WORKORDBUILD', 'TRAN_WORKORDCLOSE', 'TRAN_WORKORDCOMPLETE', 'TRAN_WORKORDISSUE', 'TRAN_WORKORDMARKBUILT', 'TRAN_WORKORDMARKFIRMED', 'TRAN_WORKORDMARKRELEASED', 'TRAN_XCHGJRNL', 'TRAN_XMLDETAIL', 'TRAN_YTDADJST'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_permissionElemID.name],
  }),
  generic_permission_level: new PrimitiveType({
    elemID: generic_permission_levelElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CREATE', 'EDIT', 'FULL', 'NONE', 'VIEW'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_permission_levelElemID.name],
  }),
  generic_portlet: new PrimitiveType({
    elemID: generic_portletElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ANALYTICS', 'CALENDAR', 'DASHBOARD_APP', 'KPIMETER', 'KPIREPORT', 'LASTLOGIN', 'LIST', 'QUICKADD', 'QUICKSEARCH', 'RECENTRECORDS', 'RECENTREPORTS', 'REMINDERS', 'RSSSOURCE', 'SCHEDULER', 'SCRIPTPORTLET', 'SEARCHFORM', 'SEARCHRESULTS', 'SETTINGS', 'SHORTCUTS', 'SNAPSHOTS', 'SYSTEMSTATUS', 'TASKLINKS', 'TIMELINE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_portletElemID.name],
  }),
  generic_portletcolumn: new PrimitiveType({
    elemID: generic_portletcolumnElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['1', '2', '3'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_portletcolumnElemID.name],
  }),
  generic_repeat_time: new PrimitiveType({
    elemID: generic_repeat_timeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['PT12H', 'PT15M', 'PT1H', 'PT2H', 'PT30M', 'PT4H', 'PT6H', 'PT8H'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_repeat_timeElemID.name],
  }),
  generic_repeat_time_in_minutes: new PrimitiveType({
    elemID: generic_repeat_time_in_minutesElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['120', '15', '240', '30', '360', '480', '60', '720'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_repeat_time_in_minutesElemID.name],
  }),
  generic_role: new PrimitiveType({
    elemID: generic_roleElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCOUNTANT', 'ACCOUNTANT__REVIEWER', 'ADMINISTRATOR', 'ADVANCED_PARTNER_CENTER', 'AP_CLERK', 'AR_CLERK', 'BOOKKEEPER', 'BUYER', 'CEO', 'CEO_HANDS_OFF', 'CHIEF_PEOPLE_OFFICER_CPO', 'CONSULTANT', 'CUSTOMER_CENTER', 'CUSTOMROLE41', 'CUSTOMROLE42', 'CUSTOMROLE43', 'CUSTOMROLE56', 'DATA_WAREHOUSE_INTEGRATOR', 'DEVELOPER', 'EMPLOYEE_CENTER', 'ENGINEER', 'ENGINEERING_MANAGER', 'FULL_ACCESS', 'HUMAN_RESOURCES_ADMINISTRATOR', 'HUMAN_RESOURCES_GENERALIST', 'INTRANET_MANAGER', 'ISSUE_ADMINISTRATOR', 'MARKETING_ADMINISTRATOR', 'MARKETING_ASSISTANT', 'MARKETING_MANAGER', 'NETSUITE_SUPPORT_CENTER', 'NETSUITE_SUPPORT_CENTER__BASIC', 'ONLINE_FORM_USER', 'PARTNER_CENTER', 'PAYROLL_MANAGER', 'PAYROLL_SETUP', 'PM_MANAGER', 'PRODUCT_MANAGER', 'QA_ENGINEER', 'QA_MANAGER', 'RESOURCE_MANAGER', 'REVENUE_ACCOUNTANT', 'REVENUE_MANAGER', 'SALES_ADMINISTRATOR', 'SALES_MANAGER', 'SALES_PERSON', 'SALES_VICE_PRESIDENT', 'SHOPPER', 'STORE_MANAGER', 'SUITEAPPRELEASEMANAGER', 'SUPPORT_ADMINISTRATOR', 'SUPPORT_MANAGER', 'SUPPORT_PERSON', 'SYSTEM_ADMINISTRATOR', 'TAX_ENGINE', 'VENDOR_CENTER', 'WAREHOUSE_MANAGER', '_ALL_ROLES'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_roleElemID.name],
  }),
  generic_savedsearches_daterange: new PrimitiveType({
    elemID: generic_savedsearches_daterangeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACTIVITIES', 'BONUSES', 'FULFILLMENT_EXCEPTION_REASON_DEFAULT_VIEW', 'GENERIC_TAX_REPORT_DETAIL', 'GENERIC_TAX_REPORT_SUMMARY', 'NEWS_ITEM_LIST', 'REVENUE_RECOGNITION_ERRORS', 'SALES_ORDER_ALLOCATION_ALERTS'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_savedsearches_daterangeElemID.name],
  }),
  generic_savedsearches_period: new PrimitiveType({
    elemID: generic_savedsearches_periodElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['GL_AUDIT_NUMBERING_REVIEW'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_savedsearches_periodElemID.name],
  }),
  generic_standard_field: new PrimitiveType({
    elemID: generic_standard_fieldElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['STDBILLINGACCOUNTAUTONAME', 'STDBILLINGACCOUNTBILLADDRESS', 'STDBILLINGACCOUNTBILLADDRESSLIST', 'STDBILLINGACCOUNTBILLINGSCHEDULE', 'STDBILLINGACCOUNTCASHSALEFORM', 'STDBILLINGACCOUNTCLASS', 'STDBILLINGACCOUNTCREATEDBY', 'STDBILLINGACCOUNTCREATEDDATE', 'STDBILLINGACCOUNTCURRENCY', 'STDBILLINGACCOUNTCUSTOMER', 'STDBILLINGACCOUNTCUSTOMERDEFAULT', 'STDBILLINGACCOUNTCUSTOMFORM', 'STDBILLINGACCOUNTDEPARTMENT', 'STDBILLINGACCOUNTEXTERNALID', 'STDBILLINGACCOUNTFREQUENCY', 'STDBILLINGACCOUNTIDNUMBER', 'STDBILLINGACCOUNTINACTIVE', 'STDBILLINGACCOUNTINVOICEFORM', 'STDBILLINGACCOUNTLASTBILLCYCLEDATE', 'STDBILLINGACCOUNTLASTBILLDATE', 'STDBILLINGACCOUNTLOCATION', 'STDBILLINGACCOUNTMEMO', 'STDBILLINGACCOUNTNAME', 'STDBILLINGACCOUNTNEXTBILLCYCLEDATE', 'STDBILLINGACCOUNTSHIPADDRESS', 'STDBILLINGACCOUNTSHIPADDRESSLIST', 'STDBILLINGACCOUNTSTARTDATE', 'STDBILLINGACCOUNTSUBSIDIARY', 'STDBODYACCOUNT', 'STDBODYACCOUNTINGAPPROVAL', 'STDBODYACCOUNTINGBOOK', 'STDBODYACCTCORPCARDEXP', 'STDBODYACTIONITEM', 'STDBODYADDRESS', 'STDBODYADJLOCATION', 'STDBODYADVANCE', 'STDBODYADVANCEACCOUNT', 'STDBODYALACONFIGURATION', 'STDBODYALTSALESRANGEHIGH', 'STDBODYALTSALESRANGELOW', 'STDBODYALTSALESTOTAL', 'STDBODYALTSHIPPINGCOST', 'STDBODYAMOUNT', 'STDBODYAPACCT', 'STDBODYAPPLIED', 'STDBODYAPPROVALSTATUS', 'STDBODYAPPROVED', 'STDBODYARACCT', 'STDBODYASSEMBLYITEM', 'STDBODYAUTHCODE', 'STDBODYAVAILABLEBALANCE', 'STDBODYBALANCE', 'STDBODYBIDCLOSEDATE', 'STDBODYBIDOPENDATE', 'STDBODYBILLADDRESS', 'STDBODYBILLINGACCOUNT', 'STDBODYBILLINGADDRESS_TEXT', 'STDBODYBILLINGINSTRUCTIONS', 'STDBODYBILLINGSCHEDULE', 'STDBODYBINNUMBERS', 'STDBODYBUILDABLE', 'STDBODYBUILT', 'STDBODYBUYINGREASON', 'STDBODYBUYINGTIMEFRAME', 'STDBODYCARRIER', 'STDBODYCCAPPROVED', 'STDBODYCCEXPIREDATE', 'STDBODYCCISPURCHASECARDBIN', 'STDBODYCCNAME', 'STDBODYCCNUMBER', 'STDBODYCCSECURITYCODE', 'STDBODYCCSTREET', 'STDBODYCCZIPCODE', 'STDBODYCHECKNUM', 'STDBODYCLASS', 'STDBODYCOMPLETE', 'STDBODYCREATEDFROM', 'STDBODYCREDITLIMIT', 'STDBODYCURRENCY', 'STDBODYCURRENCYNAME', 'STDBODYCUSTOMER', 'STDBODYCUSTOMFORM', 'STDBODYDATEELIGIBLE', 'STDBODYDECISIONMAKER', 'STDBODYDEFERREDREVENUE', 'STDBODYDEPARTMENT', 'STDBODYDEPOSIT', 'STDBODYDEPOSITDATE', 'STDBODYDISCOUNTAMOUNT', 'STDBODYDISCOUNTDATE', 'STDBODYDISCOUNTITEM', 'STDBODYDISCOUNTRATE', 'STDBODYDISCOUNTTOTAL', 'STDBODYDOCUMENTSTATUS', 'STDBODYDRACCOUNT', 'STDBODYDUEDATE', 'STDBODYEFFECTIVITYBASEDON', 'STDBODYEMAIL', 'STDBODYEMPLOYEE', 'STDBODYENDDATE', 'STDBODYENTITY', 'STDBODYENTITYEMPLOYEE', 'STDBODYENTITYSTATUS', 'STDBODYESTGROSSPROFIT', 'STDBODYESTGROSSPROFITPERCENT', 'STDBODYESTIMATEDBUDGET', 'STDBODYESTIMATEDTOTAL', 'STDBODYESTIMATEDTOTALVALUE', 'STDBODYEXCHANGERATE', 'STDBODYEXCLUDECOMMISSION', 'STDBODYEXCLUDEFROMGLNUMBERING', 'STDBODYEXPANDASSEMBLY', 'STDBODYEXPECTEDCLOSE', 'STDBODYEXPENSEACCOUNT', 'STDBODYEXPENSEREPORTCURRENCY', 'STDBODYEXPENSEREPORTEXCHANGERATE', 'STDBODYEXTERNALID', 'STDBODYFIRMED', 'STDBODYFOB', 'STDBODYFORECASTTYPE', 'STDBODYFXACCOUNT', 'STDBODYGENERATETRANIDONSAVE', 'STDBODYHANDLINGCOST', 'STDBODYHANDLINGTAXAMOUNT', 'STDBODYINCOTERM', 'STDBODYISBUDGETAPPROVED', 'STDBODYISCROSSSUBTRANSACTION', 'STDBODYISCUSTOMAPPROVAL', 'STDBODYISINTRANSITPAYMENT', 'STDBODYISRECURRINGPAYMENT', 'STDBODYISTAXABLE', 'STDBODYITEM', 'STDBODYITEMFULFILLMENT', 'STDBODYJOB', 'STDBODYLEADSOURCE', 'STDBODYLINKEDTRACKINGNUMBERS', 'STDBODYLOCATION', 'STDBODYMAXIMUMAMOUNT', 'STDBODYMEMO', 'STDBODYMESSAGE', 'STDBODYMINIMUMAMOUNT', 'STDBODYNEXTAPPROVER', 'STDBODYONETIME', 'STDBODYOPPORTUNITY', 'STDBODYORDERSTATUS', 'STDBODYORDERTYPE', 'STDBODYOTHERREFNUM', 'STDBODYPACKINGLISTINSTRUCTIONS', 'STDBODYPARENTEXPENSEALLOC', 'STDBODYPARTNER', 'STDBODYPAYMENT', 'STDBODYPAYMENTCUSTOMER', 'STDBODYPAYMENTHOLD', 'STDBODYPAYMENTMETHOD', 'STDBODYPAYMENTSESSIONAMOUNT', 'STDBODYPAYPALAUTHID', 'STDBODYPAYPALORDERID', 'STDBODYPAYPALPROCESS', 'STDBODYPAYPALSTATUS', 'STDBODYPAYPALTRANID', 'STDBODYPAYROLLITEM', 'STDBODYPNREFNUM', 'STDBODYPOLICYVIOLATED', 'STDBODYPOSTINGPERIOD', 'STDBODYPRINTVOUCHER', 'STDBODYPROBABILITY', 'STDBODYPRODUCTLABELINGINSTRUCTIONS', 'STDBODYPROJALTSALESAMT', 'STDBODYPROJECTEDTOTAL', 'STDBODYPROMOCODE', 'STDBODYPURCHASECONTRACT', 'STDBODYPURCHASEORDERINSTRUCTIONS', 'STDBODYQUANTITY', 'STDBODYRANGEHIGH', 'STDBODYRANGELOW', 'STDBODYRECOGNIZEDREVENUE', 'STDBODYRECURANNUALLY', 'STDBODYRECURMONTHLY', 'STDBODYRECURQUARTERLY', 'STDBODYRECURWEEKLY', 'STDBODYREFUNDCHECK', 'STDBODYREIMBURSABLEAMOUNT', 'STDBODYRETURNTRACKINGNUMBERS', 'STDBODYREVCOMMITSTATUS', 'STDBODYREVENUESTATUS', 'STDBODYREVERSALDATE', 'STDBODYREVERSALDEFER', 'STDBODYREVERSALENTRY', 'STDBODYREVISION', 'STDBODYREVISIONMEMO', 'STDBODYREVRECONREVCOMMITMENT', 'STDBODYSALESEFFECTIVEDATE', 'STDBODYSALESORDER', 'STDBODYSALESREADINESS', 'STDBODYSALESREP', 'STDBODYSERIALNUMBERS', 'STDBODYSHIPADDR1', 'STDBODYSHIPADDR2', 'STDBODYSHIPADDRESS', 'STDBODYSHIPADDRESSLIST', 'STDBODYSHIPATTENTION', 'STDBODYSHIPCITY', 'STDBODYSHIPCOMPANY', 'STDBODYSHIPCOMPLETE', 'STDBODYSHIPCOUNTRY', 'STDBODYSHIPDATE', 'STDBODYSHIPISRESIDENTIAL', 'STDBODYSHIPMETHOD', 'STDBODYSHIPOVERRIDE', 'STDBODYSHIPPHONE', 'STDBODYSHIPPINGADDRESS_TEXT', 'STDBODYSHIPPINGCOST', 'STDBODYSHIPPINGTAX1RATE', 'STDBODYSHIPPINGTAXAMOUNT', 'STDBODYSHIPPINGTAXCODE', 'STDBODYSHIPSTATE', 'STDBODYSHIPSTATUS', 'STDBODYSHIPTO', 'STDBODYSHIPZIP', 'STDBODYSOFTDESCRIPTOR', 'STDBODYSOURCE', 'STDBODYSOURCETRANSACTIONNUMBER', 'STDBODYSTARTDATE', 'STDBODYSTATUS', 'STDBODYSUBSIDIARY', 'STDBODYSUPERVISOR', 'STDBODYSUPERVISORAPPROVAL', 'STDBODYTAXITEM', 'STDBODYTAXPERIOD', 'STDBODYTAXPOINTDATE', 'STDBODYTAXPOINTDATEOVERRIDE', 'STDBODYTAXRATE', 'STDBODYTAXTOTAL', 'STDBODYTERMS', 'STDBODYTITLE', 'STDBODYTOACH', 'STDBODYTOBEEMAILED', 'STDBODYTOBEFAXED', 'STDBODYTOBEPRINTED', 'STDBODYTOLOCATION', 'STDBODYTOSUBSIDIARY', 'STDBODYTOTAL', 'STDBODYTOTALALLOCATIONAMOUNT', 'STDBODYTOTALCOSTESTIMATE', 'STDBODYTOTALREVENUEAMOUNT', 'STDBODYTOTALSELLINGAMOUNT', 'STDBODYTRACKINGNUMBERS', 'STDBODYTRANDATE', 'STDBODYTRANID', 'STDBODYTRANISVSOEBUNDLE', 'STDBODYTRANSACTIONNUMBER', 'STDBODYTRANSFERLOCATION', 'STDBODYTRANSTATUS', 'STDBODYTRANTYPE', 'STDBODYUNAPPLIED', 'STDBODYUNDEPFUNDS', 'STDBODYUSEITEMCOSTASTRANSFERCOST', 'STDBODYUSEMULTICURRENCY', 'STDBODYUSERAMOUNT', 'STDBODYUSERTOTAL', 'STDBODYVENDOR', 'STDBODYVISIBLETOCUSTOMER', 'STDBODYVSOEAUTOCALC', 'STDBODYWAVEINTERNALID', 'STDBODYWAVEISINACTIVE', 'STDBODYWAVENAME', 'STDBODYWAVEPRIORITY', 'STDBODYWEIGHTEDTOTAL', 'STDBODYWINLOSSREASON', 'STDCHARGEAMOUNT', 'STDCHARGEBILLDATE', 'STDCHARGEBILLINGMODE', 'STDCHARGEBILLINGSCHEDULE', 'STDCHARGECHARGERULE', 'STDCHARGECLASS', 'STDCHARGECURRENCY', 'STDCHARGECUSTOMER', 'STDCHARGEDATE', 'STDCHARGEDEPARTMENT', 'STDCHARGEEMPLOYEE', 'STDCHARGEFIXEDCHARGERULE', 'STDCHARGEGROUPORDER', 'STDCHARGEITEM', 'STDCHARGELOCATION', 'STDCHARGENOTES', 'STDCHARGEPROJECTTASKSOURCE', 'STDCHARGEQUANTITY', 'STDCHARGERATE', 'STDCHARGERULEBILLINGRATECARD', 'STDCHARGERULECAPHOURS', 'STDCHARGERULECAPMONEY', 'STDCHARGERULECAPTYPE', 'STDCHARGERULECHARGERULETYPE', 'STDCHARGERULECHARGESTAGE', 'STDCHARGERULEDESCRIPTION', 'STDCHARGERULEEXPAMTMULTIPLIER', 'STDCHARGERULEEXPSAVEDSEARCH', 'STDCHARGERULEISINACTIVE', 'STDCHARGERULEITEM', 'STDCHARGERULENAME', 'STDCHARGERULEORDER', 'STDCHARGERULEPROJECT', 'STDCHARGERULERATEMULTIPLIER', 'STDCHARGERULERATEROUNDINGTYPE', 'STDCHARGERULERATESOURCETYPE', 'STDCHARGERULESALEUNIT', 'STDCHARGERULESAVEDSEARCH', 'STDCHARGERULESTOPIFCAPPED', 'STDCHARGERULEUNITSTYPE', 'STDCHARGERUNID', 'STDCHARGESALESORDER', 'STDCHARGESERVICEEND', 'STDCHARGESERVICESTART', 'STDCHARGESOLINE', 'STDCHARGESTAGE', 'STDCHARGESUBSCRIPTIONLINE', 'STDCHARGETIMESOURCE', 'STDCHARGETRANSACTION', 'STDCHARGETYPE', 'STDCHARGETYPENAME', 'STDCHARGETYPESCRIPTID', 'STDCHARGTRANSACTIONLINE', 'STDCOLACCOUNT', 'STDCOLAMOUNT', 'STDCOLBOMREVISIONCOMPONENT', 'STDCOLCALL', 'STDCOLCASE', 'STDCOLCASETASKEVENT', 'STDCOLCHARGE', 'STDCOLCLASS', 'STDCOLCREATEDFROM', 'STDCOLCUSTOMER', 'STDCOLDEPARTMENT', 'STDCOLDESCRIPTION', 'STDCOLEMPLOYEE', 'STDCOLENTITY', 'STDCOLEVENT', 'STDCOLEXPECTEDRECEIPTDATE', 'STDCOLEXPECTEDSHIPDATE', 'STDCOLGLNUMBER', 'STDCOLGLSEQUENCE', 'STDCOLISBILLABLE', 'STDCOLISCLOSED', 'STDCOLISTAXABLE', 'STDCOLITEM', 'STDCOLJOB', 'STDCOLLINE', 'STDCOLLOCATION', 'STDCOLONHAND', 'STDCOLPRICEINTERVALFREQUENCYNAME', 'STDCOLPRICEINTERVALREPEATEVERY', 'STDCOLPROJECTTASK', 'STDCOLQUANTITY', 'STDCOLQUANTITYBILLED', 'STDCOLQUANTITYCOMMITTED', 'STDCOLQUANTITYFULFILLED', 'STDCOLQUANTITYINVOICED', 'STDCOLQUANTITYRECEIVED', 'STDCOLQUANTITYREFUNDED', 'STDCOLRATE', 'STDCOLSUBSCRIPTION', 'STDCOLSUBSCRIPTIONLINE', 'STDCOLSUBSCRIPTIONLINEPERIODAMOUNT', 'STDCOLSUBSCRIPTIONLINERATE', 'STDCOLSUBSIDIARY', 'STDCOLTASK', 'STDCOLUNITS', 'STDENTITYACCESSROLE', 'STDENTITYACCOUNTNUMBER', 'STDENTITYACTUALTIME', 'STDENTITYADDRESS1', 'STDENTITYADDRESS2', 'STDENTITYALIENNUMBER', 'STDENTITYALLOCATEDTIME', 'STDENTITYALLOWALLRESOURCESFORTASKS', 'STDENTITYALLOWEXPENSES', 'STDENTITYALLOWTIME', 'STDENTITYALLOWTIMEFORRSRCALLOC', 'STDENTITYALTCONTACT', 'STDENTITYALTEMAIL', 'STDENTITYALTPHONE', 'STDENTITYAPPLYPROJECTEXPENSETYPETOALL', 'STDENTITYAPPROVALLIMIT', 'STDENTITYAPPROVER', 'STDENTITYASSIGNEDWEBSITE', 'STDENTITYASSISTANT', 'STDENTITYASSISTANTPHONE', 'STDENTITYAUTHWORKDATE', 'STDENTITYAVGDAYSLATEEARLY', 'STDENTITYBALANCE', 'STDENTITYBALANCEPRIMARY', 'STDENTITYBALANCEPRIMARYCURRENCY', 'STDENTITYBASEWAGE', 'STDENTITYBASEWAGETYPE', 'STDENTITYBCN', 'STDENTITYBILLADDRESS', 'STDENTITYBILLINGACCOUNT', 'STDENTITYBILLINGCLASS', 'STDENTITYBILLINGPHONE', 'STDENTITYBILLINGRATECARD', 'STDENTITYBILLINGSCHEDULE', 'STDENTITYBILLPAY', 'STDENTITYBIRTHDATE', 'STDENTITYBONUSTARGET', 'STDENTITYBONUSTARGETCOMMENT', 'STDENTITYBONUSTARGETPAYFREQUENCY', 'STDENTITYBONUSTARGETTYPE', 'STDENTITYBUYINGREASON', 'STDENTITYBUYINGTIMEFRAME', 'STDENTITYCALCULATEDENDDATE', 'STDENTITYCALCULATEDSTARTDATE', 'STDENTITYCALCULATEDSTARTDATEBASELINE', 'STDENTITYCALCULATEDWORK', 'STDENTITYCALCULATEDWORKBASELINE', 'STDENTITYCAMPAIGNCATEGORY', 'STDENTITYCAMPAIGNEVENT', 'STDENTITYCHANGEDETAILS', 'STDENTITYCHARGEAMOUNTBILLED', 'STDENTITYCHARGEAMOUNTHOLDFORBILLING', 'STDENTITYCHARGEAMOUNTPENDING', 'STDENTITYCHARGEAMOUNTREADYFORBILLING', 'STDENTITYCHARGEAMOUNTREMAINING', 'STDENTITYCHARGEEXPENSEAMOUNT', 'STDENTITYCHARGELABORAMOUNT', 'STDENTITYCITY', 'STDENTITYCLASS', 'STDENTITYCLICKSTREAM', 'STDENTITYCOMMENTS', 'STDENTITYCOMMISSIONPAYMENTPREFERENCE', 'STDENTITYCOMPANY', 'STDENTITYCOMPANYNAME', 'STDENTITYCOMPENSATIONCURRENCY', 'STDENTITYCONCURRENTWEBSERVICESUSER', 'STDENTITYCONSOLBALANCE', 'STDENTITYCONSOLDAYSOVERDUE', 'STDENTITYCONSOLOVERDUEBALANCE', 'STDENTITYCONSOLUNBILLEDORDERS', 'STDENTITYCONTACT', 'STDENTITYCONTACTCAMPAIGNEVENT', 'STDENTITYCONTACTSOURCE', 'STDENTITYCONTACTSOURCECAMPAIGNCATEGORY', 'STDENTITYCOUNTRY', 'STDENTITYCOUNTRYNAME', 'STDENTITYCREDITHOLDOVERRIDE', 'STDENTITYCREDITLIMIT', 'STDENTITYCREDITLIMITCURRENCY', 'STDENTITYCURRENCY', 'STDENTITYCUSTOMERCUSTOMFORM', 'STDENTITYCUSTTYPE', 'STDENTITYDATECREATED', 'STDENTITYDAYSOVERDUE', 'STDENTITYDEFAULTACCTCORPCARDEXP', 'STDENTITYDEFAULTADDRESS', 'STDENTITYDEFAULTEXPENSEREPORTCURRENCY', 'STDENTITYDEFAULTJOBRESOURCEROLE', 'STDENTITYDEFAULTORDERPRIORITY', 'STDENTITYDEPARTMENT', 'STDENTITYDIRECTDEPOSIT', 'STDENTITYDISPLAYSYMBOL', 'STDENTITYDRACCOUNT', 'STDENTITYDRIVERSLICENSENUMBER', 'STDENTITYELIGIBLEFORCOMMISSION', 'STDENTITYEMAIL', 'STDENTITYEMAILPREFERENCE', 'STDENTITYEMAILTRANSACTIONS', 'STDENTITYEMPLOYEECHANGEREASON', 'STDENTITYEMPLOYEEFTESTATUS', 'STDENTITYEMPLOYEEHCMJOB', 'STDENTITYEMPLOYEEHCMJOBID', 'STDENTITYEMPLOYEESTATUS', 'STDENTITYEMPLOYEESTATUSCATEGORY', 'STDENTITYEMPLOYEETERMINATIONCATEGORY', 'STDENTITYEMPLOYEETERMINATIONREGRETTED', 'STDENTITYEMPLOYEEWORKASSIGNMENT', 'STDENTITYEMPTYPE', 'STDENTITYENDDATE', 'STDENTITYENTITYFIRSTNAME', 'STDENTITYENTITYID', 'STDENTITYENTITYLASTNAME', 'STDENTITYENTITYMIDDLENAME', 'STDENTITYENTITYSALUTATION', 'STDENTITYESTIMATEDBUDGET', 'STDENTITYESTIMATEDGROSSPROFIT', 'STDENTITYESTIMATEDGROSSPROFITPERCENT', 'STDENTITYESTIMATEDLABORCOST', 'STDENTITYESTIMATEDLABORREVENUE', 'STDENTITYESTIMATEDTIMEOVERRIDE', 'STDENTITYESTIMATEREVRECTEMPLATE', 'STDENTITYETHNICITY', 'STDENTITYEXPENSEACCOUNT', 'STDENTITYEXPENSELIMIT', 'STDENTITYEXTERNALID', 'STDENTITYFAX', 'STDENTITYFAXTRANSACTIONS', 'STDENTITYFIRSTVISIT', 'STDENTITYFORECASTCHARGERUNONDEMAND', 'STDENTITYFXACCOUNT', 'STDENTITYFXRATE', 'STDENTITYGENDER', 'STDENTITYGIVEACCESS', 'STDENTITYGLOBALSUBSCRIPTIONSTATUS', 'STDENTITYHASOFFLINEACCESS', 'STDENTITYHIREDATE', 'STDENTITYHOMEPHONE', 'STDENTITYI9VERIFIED', 'STDENTITYIMAGE', 'STDENTITYINCLUDECRMTASKSINTOTALS', 'STDENTITYINCOTERM', 'STDENTITYINHERITIPRULES', 'STDENTITYINITIALS', 'STDENTITYINTRANSITBALANCE', 'STDENTITYIPADDRESSRULE', 'STDENTITYIS1099ELIGIBLE', 'STDENTITYISBUDGETAPPROVED', 'STDENTITYISEXEMPTTIME', 'STDENTITYISINACTIVE', 'STDENTITYISJOB', 'STDENTITYISJOBMANAGER', 'STDENTITYISJOBRESOURCE', 'STDENTITYISJOBRESOURCEVEND', 'STDENTITYISJOBRESOURCEVENDOR', 'STDENTITYISPERSON', 'STDENTITYISPRIVATE', 'STDENTITYISPRODUCTIVETIME', 'STDENTITYISSALESREP', 'STDENTITYISSUPPORTREP', 'STDENTITYISUTILIZEDTIME', 'STDENTITYJOBBILLINGTYPE', 'STDENTITYJOBDESCRIPTION', 'STDENTITYJOBEMPLOYMENTCATEGORY', 'STDENTITYJOBITEM', 'STDENTITYJOBPRICE', 'STDENTITYJOBTYPE', 'STDENTITYJURISDICTIONCOUNTY', 'STDENTITYJURISDICTIONFEDERAL', 'STDENTITYJURISDICTIONLOCAL', 'STDENTITYJURISDICTIONSCHOOL', 'STDENTITYJURISDICTIONSTATE', 'STDENTITYKEYWORDS', 'STDENTITYLABORCATEGORY', 'STDENTITYLABORCOST', 'STDENTITYLABORPRICE', 'STDENTITYLANGUAGE', 'STDENTITYLASTBASELINEDATE', 'STDENTITYLASTCOMPUTATIONDATE', 'STDENTITYLASTPAGEVISITED', 'STDENTITYLASTPAIDDATE', 'STDENTITYLASTREVIEWDATE', 'STDENTITYLASTVISIT', 'STDENTITYLEADSOURCE', 'STDENTITYLEGALNAME', 'STDENTITYLIMITTIMETOASSIGNEES', 'STDENTITYLOCATION', 'STDENTITYMARITALSTATUS', 'STDENTITYMATERIALIZETIME', 'STDENTITYMOBILEPHONE', 'STDENTITYNEGATIVENUMBERFORMAT', 'STDENTITYNEXTREVIEWDATE', 'STDENTITYNUMBERFORMAT', 'STDENTITYNUMBEROFORDERS', 'STDENTITYOFFICEPHONE', 'STDENTITYOVERDUEBALANCE', 'STDENTITYOVERRIDECURRENCYFORMAT', 'STDENTITYPARENT', 'STDENTITYPARENTPARTNER', 'STDENTITYPARTNER', 'STDENTITYPARTNERCODE', 'STDENTITYPARTNERCUSTOMFORM', 'STDENTITYPARTNERELIGIBLEFORCOMMISSION', 'STDENTITYPASSPORTNUMBER', 'STDENTITYPASSWORD', 'STDENTITYPASSWORD2', 'STDENTITYPAYABLESACCOUNT', 'STDENTITYPAYFREQUENCY', 'STDENTITYPERCENTCOMPLETE', 'STDENTITYPERCENTCOMPLETEBYRSRCALLOC', 'STDENTITYPERCENTTIMECOMPLETE', 'STDENTITYPHONE', 'STDENTITYPLANNEDWORK', 'STDENTITYPLANNEDWORKBASELINE', 'STDENTITYPREDCONFIDENCE', 'STDENTITYPREDICTEDDAYS', 'STDENTITYPREFCCPROCESSOR', 'STDENTITYPRICELEVEL', 'STDENTITYPRINTONCHECKAS', 'STDENTITYPRINTTRANSACTIONS', 'STDENTITYPROBABILITY', 'STDENTITYPROJECTCOMPLETELYBILLED', 'STDENTITYPROJECTEXPENSETYPE', 'STDENTITYPROJECTMANAGER', 'STDENTITYPURCHASEORDERAMOUNT', 'STDENTITYPURCHASEORDERAPPROVALLIMIT', 'STDENTITYPURCHASEORDERAPPROVER', 'STDENTITYPURCHASEORDERLIMIT', 'STDENTITYPURCHASEORDERQUANTITY', 'STDENTITYPURCHASEORDERQUANTITYDIFF', 'STDENTITYRATE', 'STDENTITYRECEIPTAMOUNT', 'STDENTITYRECEIPTQUANTITY', 'STDENTITYRECEIPTQUANTITYDIFF', 'STDENTITYRECEIVABLESACCOUNT', 'STDENTITYREFERRER', 'STDENTITYRELEASEDATE', 'STDENTITYREMINDERDAYS', 'STDENTITYREQUIREPWDCHANGE', 'STDENTITYRESALENUMBER', 'STDENTITYRESIDENTSTATUS', 'STDENTITYSALESREADINESS', 'STDENTITYSALESREP', 'STDENTITYSALESROLE', 'STDENTITYSCHEDULEDENDDATE', 'STDENTITYSCHEDULEDENDDATEBASELINE', 'STDENTITYSCHEDULINGMETHOD', 'STDENTITYSHIPADDRESS', 'STDENTITYSHIPCOMPLETE', 'STDENTITYSHIPPINGITEM', 'STDENTITYSHIPPINGPHONE', 'STDENTITYSOCIALSECURITYNUMBER', 'STDENTITYSOURCEWEBSITE', 'STDENTITYSTAGE', 'STDENTITYSTAGENAME', 'STDENTITYSTARTDATE', 'STDENTITYSTARTDATETIMEOFFCALC', 'STDENTITYSTATE', 'STDENTITYSTATENAME', 'STDENTITYSTATUS', 'STDENTITYSTDDEVDAYSLATEEARLY', 'STDENTITYSUBPARTNERLOGIN', 'STDENTITYSUBSIDIARY', 'STDENTITYSUPERVISOR', 'STDENTITYSUPERVISORPHONE', 'STDENTITYSYMBOLPLACEMENT', 'STDENTITYTARGETUTILIZATION', 'STDENTITYTAXABLE', 'STDENTITYTAXEXEMPT', 'STDENTITYTAXIDNUM', 'STDENTITYTAXITEM', 'STDENTITYTAXROUNDING', 'STDENTITYTERMINATIONDETAILS', 'STDENTITYTERMINATIONREASON', 'STDENTITYTERMS', 'STDENTITYTERRITORY', 'STDENTITYTIMEAPPROVAL', 'STDENTITYTIMEAPPROVER', 'STDENTITYTIMEOFFPLAN', 'STDENTITYTIMEREMAINING', 'STDENTITYTITLE', 'STDENTITYTYPE', 'STDENTITYUNBILLEDORDERS', 'STDENTITYUNBILLEDORDERSPRIMARY', 'STDENTITYUNBILLEDORDERSPRIMARYCURRENCY', 'STDENTITYURL', 'STDENTITYUSEALLOCATEDTIMEFORFORECAST', 'STDENTITYUSEPERQUEST', 'STDENTITYUSETIMEDATA', 'STDENTITYVATREGNUMBER', 'STDENTITYVENDORCUSTOMFORM', 'STDENTITYVENDORTIMEAPPROVER', 'STDENTITYVENDTYPE', 'STDENTITYVISAEXPDATE', 'STDENTITYVISATYPE', 'STDENTITYVISITS', 'STDENTITYWEBLEAD', 'STDENTITYWORKCALENDAR', 'STDENTITYWORKPLACE', 'STDENTITYZIP', 'STDEVENTACCESSLEVEL', 'STDEVENTACTUALTIME', 'STDEVENTACTUALWORK', 'STDEVENTALLDAYEVENT', 'STDEVENTALLOCATEDWORK', 'STDEVENTALLOCATIONAMOUNT', 'STDEVENTALLOCATIONPROJECT', 'STDEVENTALLOCATIONPROJECTTASK', 'STDEVENTALLOCATIONTYPE', 'STDEVENTALLOCATIONUNIT', 'STDEVENTAPPROVALSTATUS', 'STDEVENTASSIGNED', 'STDEVENTAUDIENCE', 'STDEVENTBASECOST', 'STDEVENTCALCULATEDWORK', 'STDEVENTCALCULATEDWORKBASELINE', 'STDEVENTCALLSTATUS', 'STDEVENTCAMPAIGNCATEGORY', 'STDEVENTCAMPAIGNID', 'STDEVENTCASECATEGORY', 'STDEVENTCASENUMBER', 'STDEVENTCASEPRIORITY', 'STDEVENTCASEPROFILE', 'STDEVENTCASESTATUS', 'STDEVENTCOMPANY', 'STDEVENTCOMPLETEDDATE', 'STDEVENTCONSTRAINTTYPE', 'STDEVENTCONTACT', 'STDEVENTCONVCOSTPERCUSTOMER', 'STDEVENTCONVERSIONS', 'STDEVENTCOST', 'STDEVENTCOSTPERCUSTOMER', 'STDEVENTCREATEDDATE', 'STDEVENTCUSTOMER', 'STDEVENTCUSTOMFORM', 'STDEVENTDISPLAYONLINE', 'STDEVENTDUEDATE', 'STDEVENTDUPLICATEOF', 'STDEVENTDURATION', 'STDEVENTEMAIL', 'STDEVENTEMAILASSIGNEE', 'STDEVENTENDBYDATE', 'STDEVENTENDDATE', 'STDEVENTENDTIME', 'STDEVENTESTIMATEDHOURSATCOMPLETION', 'STDEVENTESTIMATEDHOURSTOCOMPLETE', 'STDEVENTESTIMATEDTIME', 'STDEVENTESTIMATEDTIMEOVERRIDE', 'STDEVENTESTIMATEDWORK', 'STDEVENTEXPECTEDREVENUE', 'STDEVENTEXTERNALABSTRACT', 'STDEVENTEXTERNALDETAILS', 'STDEVENTEXTERNALID', 'STDEVENTFAMILY', 'STDEVENTFINISHBYDATE', 'STDEVENTHELPDESK', 'STDEVENTHELPDESKEMPLOYEE', 'STDEVENTINBOUNDEMAIL', 'STDEVENTINCOMINGMESSAGE', 'STDEVENTISINACTIVE', 'STDEVENTISMILESTONE', 'STDEVENTISOWNER', 'STDEVENTISREVIEWED', 'STDEVENTISSHOWSTOPPER', 'STDEVENTISSUE', 'STDEVENTISSUEABSTRACT', 'STDEVENTISSUENUMBER', 'STDEVENTISSUESTATUS', 'STDEVENTISSUETYPE', 'STDEVENTITEM', 'STDEVENTJOB', 'STDEVENTKEYWORD', 'STDEVENTLASTMESSAGEDATE', 'STDEVENTLASTMODIFIEDDATE', 'STDEVENTLASTREOPENEDDATE', 'STDEVENTLEADSGENERATED', 'STDEVENTLOCATION', 'STDEVENTLONGDESCRIPTION', 'STDEVENTMESSAGE', 'STDEVENTMILESTONE', 'STDEVENTMODULE', 'STDEVENTNEXTAPPROVER', 'STDEVENTNOENDDATE', 'STDEVENTNONBILLABLETASK', 'STDEVENTNOTES', 'STDEVENTNUMBER', 'STDEVENTNUMBERTEXT', 'STDEVENTNUMHOURS', 'STDEVENTOFFER', 'STDEVENTOPPORTUNITY', 'STDEVENTORDER', 'STDEVENTORGANIZER', 'STDEVENTORIGIN', 'STDEVENTOWNER', 'STDEVENTPARENT', 'STDEVENTPERCENTCOMPLETE', 'STDEVENTPERCENTCOMPLETEBYRSRCALLOC', 'STDEVENTPERCENTOFTIME', 'STDEVENTPERCENTTIMECOMPLETE', 'STDEVENTPHONE', 'STDEVENTPLANNEDWORK', 'STDEVENTPLANNEDWORKBASELINE', 'STDEVENTPLANNEDWORKTOTAL', 'STDEVENTPRIORITY', 'STDEVENTPRIORITYNAME', 'STDEVENTPRODUCT', 'STDEVENTPRODUCTTEAM', 'STDEVENTPROFIT', 'STDEVENTPROMOTIONCODE', 'STDEVENTREMAININGWORK', 'STDEVENTREMINDERMINUTES', 'STDEVENTREMINDERTYPE', 'STDEVENTREPORTEDBY', 'STDEVENTREPRODUCE', 'STDEVENTREQUESTEDBY', 'STDEVENTRESOURCE', 'STDEVENTREVIEWER', 'STDEVENTROI', 'STDEVENTSEARCHENGINE', 'STDEVENTSENDEMAIL', 'STDEVENTSERIESSTARTDATE', 'STDEVENTSEVERITY', 'STDEVENTSOLUTIONCODE', 'STDEVENTSOURCE', 'STDEVENTSTARTDATE', 'STDEVENTSTARTTIME', 'STDEVENTSTATUS', 'STDEVENTSTATUSNAME', 'STDEVENTSUBSIDIARY', 'STDEVENTSUPPORTCASE', 'STDEVENTTASKSTATUS', 'STDEVENTTIMEDEVENT', 'STDEVENTTIMEREMAINING', 'STDEVENTTITLE', 'STDEVENTTOTALREVENUE', 'STDEVENTTRANSACTION', 'STDEVENTUNIQUEVISITORS', 'STDEVENTURL', 'STDEVENTVERTICAL', 'STDGLSEQUENCEINACTIVE', 'STDGLSEQUENCEINITNUM', 'STDGLSEQUENCEINVALIDNUMCOUNT', 'STDGLSEQUENCELASTRUN', 'STDGLSEQUENCEMINDIGITS', 'STDGLSEQUENCENAME', 'STDGLSEQUENCENUMASSIGNEDCOUNT', 'STDGLSEQUENCEORDERTYPE', 'STDGLSEQUENCEPERIOD', 'STDGLSEQUENCEPREFIX', 'STDGLSEQUENCERUNAUTHOR', 'STDGLSEQUENCESUBSIDIARIES', 'STDGLSEQUENCESUFFIX', 'STDINVENTORYNUMBERITEM', 'STDITEMACCOUNT', 'STDITEMADVANCERENEWALPERIODNUMBER', 'STDITEMADVANCERENEWALPERIODUNIT', 'STDITEMAMORTIZATIONPERIOD', 'STDITEMAMORTIZATIONTEMPLATE', 'STDITEMASSETACCOUNT', 'STDITEMAUTOLEADTIME', 'STDITEMAUTOPREFERREDSTOCKLEVEL', 'STDITEMAUTORENEWAL', 'STDITEMAUTOREORDERPOINT', 'STDITEMAVAILABLE', 'STDITEMAVAILABLETOPARTNERS', 'STDITEMAVERAGECOST', 'STDITEMBACKORDERED', 'STDITEMBILLEXCHRATEVARIANCEACCT', 'STDITEMBILLINGSCHEDULE', 'STDITEMBILLPRICEVARIANCEACCT', 'STDITEMBILLQTYVARIANCEACCT', 'STDITEMBUILDENTIREASSEMBLY', 'STDITEMCITY', 'STDITEMCLASS', 'STDITEMCOGSACCOUNT', 'STDITEMCOPYDESCRIPTION', 'STDITEMCOST', 'STDITEMCOSTESTIMATE', 'STDITEMCOSTESTIMATETYPE', 'STDITEMCOSTINGMETHOD', 'STDITEMCOUNTRYOFMANUFACTURE', 'STDITEMCOUNTY', 'STDITEMCREATEDDATE', 'STDITEMCREATEJOB', 'STDITEMCREATEREVENUEPLANSON', 'STDITEMCURRENCY', 'STDITEMCUSTOMFORM', 'STDITEMCUSTRETURNVARIANCEACCOUNT', 'STDITEMDAYSBEFOREEXPIRATION', 'STDITEMDEFAULTRENEWALMETHOD', 'STDITEMDEFAULTRENEWALPLAN', 'STDITEMDEFAULTRENEWALTERM', 'STDITEMDEFAULTRENEWALTRANTYPE', 'STDITEMDEFAULTRETURNCOST', 'STDITEMDEFAULTREVISION', 'STDITEMDEFERRALACCOUNT', 'STDITEMDEFERREDREVENUEACCOUNT', 'STDITEMDEFERREVREC', 'STDITEMDEMANDMODIFIER', 'STDITEMDEPARTMENT', 'STDITEMDESCRIPTION', 'STDITEMDISPLAYNAME', 'STDITEMDONTSHOWPRICE', 'STDITEMDROPSHIPEXPENSEACCOUNT', 'STDITEMEFFECTIVEBOMCONTROL', 'STDITEMENFORCEMINQTYINTERNALLY', 'STDITEMEXCLUDEFROMSITEMAP', 'STDITEMEXPENSEACCOUNT', 'STDITEMEXTERNALID', 'STDITEMFEATUREDDESCRIPTION', 'STDITEMFRAUDRISK', 'STDITEMFUTUREHORIZON', 'STDITEMGAINLOSSACCOUNT', 'STDITEMGCOCOMPLIANT', 'STDITEMGENERATEACCRUALS', 'STDITEMHANDLINGCOST', 'STDITEMIMMEDIATEDOWNLOAD', 'STDITEMINCLUDECHILDREN', 'STDITEMINCLUDESTARTENDLINES', 'STDITEMINCOMEACCOUNT', 'STDITEMINITIALTERM', 'STDITEMINTERNALID', 'STDITEMISDONATIONITEM', 'STDITEMISDROPSHIPITEM', 'STDITEMISFULFILLABLE', 'STDITEMISINACTIVE', 'STDITEMISONLINE', 'STDITEMISPRETAX', 'STDITEMISSPECIALORDERITEM', 'STDITEMISSPECIALWORKORDERITEM', 'STDITEMISSTOREPICKUPALLOWED', 'STDITEMISSUEPRODUCT', 'STDITEMISTAXABLE', 'STDITEMISVSOEBUNDLE', 'STDITEMITEMREVENUECATEGORY', 'STDITEMITEMTYPE', 'STDITEMLASTPURCHASEPRICE', 'STDITEMLEADTIME', 'STDITEMLIABILITYACCOUNT', 'STDITEMLOCATION', 'STDITEMMANUFACTURER', 'STDITEMMATCHBILLTORECEIPT', 'STDITEMMATRIXITEMNAMETEMPLATE', 'STDITEMMAXDONATIONAMOUNT', 'STDITEMMAXIMUMQUANTITY', 'STDITEMMETATAGHTML', 'STDITEMMINIMUMQUANTITY', 'STDITEMMOSS', 'STDITEMMPN', 'STDITEMNAME', 'STDITEMNEXTAGCATEGORY', 'STDITEMNONPOSTING', 'STDITEMNOPRICEMESSAGE', 'STDITEMNUMOFALLOWEDDOWNLOADS', 'STDITEMOFFERSUPPORT', 'STDITEMONHAND', 'STDITEMONLINENAME', 'STDITEMONORDER', 'STDITEMONSPECIAL', 'STDITEMOUTOFSTOCKBEHAVIOR', 'STDITEMOUTOFSTOCKMESSAGE', 'STDITEMOVERALLQUANTITYPRICINGTYPE', 'STDITEMPAGETITLE', 'STDITEMPARENT', 'STDITEMPAYMENTMETHOD', 'STDITEMPREFERREDLOCATION', 'STDITEMPREFERREDSTOCKLEVEL', 'STDITEMPREFERREDSTOCKLEVELDAYS', 'STDITEMPRICINGGROUP', 'STDITEMPRINTITEMS', 'STDITEMPROCESSFAMILY', 'STDITEMPROCESSGROUP', 'STDITEMPROJECTEXPENSETYPE', 'STDITEMPROJECTTEMPLATE', 'STDITEMPURCHASEDESCRIPTION', 'STDITEMPURCHASEORDERAMOUNT', 'STDITEMPURCHASEORDERQUANTITY', 'STDITEMPURCHASEORDERQUANTITYDIFF', 'STDITEMPURCHASEUNIT', 'STDITEMQUANTITYCOMMITTED', 'STDITEMQUANTITYPRICINGSCHEDULE', 'STDITEMRATE', 'STDITEMRECEIPTAMOUNT', 'STDITEMRECEIPTQUANTITY', 'STDITEMRECEIPTQUANTITYDIFF', 'STDITEMRELATEDITEMSDESCRIPTION', 'STDITEMREORDERMULTIPLE', 'STDITEMREORDERPOINT', 'STDITEMRESIDUAL', 'STDITEMREVENUEALLOCATIONGROUP', 'STDITEMREVENUERECOGNITIONRULE', 'STDITEMREVRECSCHEDULE', 'STDITEMROUNDUPASCOMPONENT', 'STDITEMSAFETYSTOCKLEVEL', 'STDITEMSAFETYSTOCKLEVELDAYS', 'STDITEMSALESDESCRIPTION', 'STDITEMSALEUNIT', 'STDITEMSEARCHKEYWORDS', 'STDITEMSEASONALDEMAND', 'STDITEMSHIPINDIVIDUALLY', 'STDITEMSHIPPACKAGE', 'STDITEMSHIPPINGCOST', 'STDITEMSHOPPINGDOTCOMCATEGORY', 'STDITEMSHOPZILLACATEGORYID', 'STDITEMSHOWDEFAULTDONATIONAMOUNT', 'STDITEMSOFTDESCRIPTOR', 'STDITEMSPECIALSDESCRIPTION', 'STDITEMSTATE', 'STDITEMSTOCKDESCRIPTION', 'STDITEMSTOCKUNIT', 'STDITEMSTOREDESCRIPTION', 'STDITEMSTOREDETAILEDDESCRIPTION', 'STDITEMSTOREDISPLAYIMAGE', 'STDITEMSTOREDISPLAYTHUMBNAIL', 'STDITEMSTOREITEMTEMPLATE', 'STDITEMSUBSIDIARY', 'STDITEMTAXACCOUNT', 'STDITEMTAXAGENCY', 'STDITEMTAXSCHEDULE', 'STDITEMTAXTYPE', 'STDITEMTOTALVALUE', 'STDITEMTRACKLANDEDCOST', 'STDITEMTRANSFERPRICE', 'STDITEMUNBUILDVARIANCEACCOUNT', 'STDITEMUNDEPFUNDS', 'STDITEMUNITSTYPE', 'STDITEMUPCCODE', 'STDITEMUSEBINS', 'STDITEMUSECOMPONENTYIELD', 'STDITEMUSEMARGINALRATES', 'STDITEMVENDOR', 'STDITEMVENDORCOST', 'STDITEMVENDORNAME', 'STDITEMVENDRETURNVARIANCEACCOUNT', 'STDITEMVSOEDEFERRAL', 'STDITEMVSOEDELIVERED', 'STDITEMVSOEPERMITDISCOUNT', 'STDITEMVSOEPRICE', 'STDITEMVSOESOPGROUP', 'STDITEMWEIGHT', 'STDITEMWEIGHTUNITS', 'STDITEMZIP', 'STDLOCASSIGNCONFNAME', 'STDRECORDACCOUNTACCTNAME', 'STDRECORDACCOUNTACCTNUMBER', 'STDRECORDACCOUNTACCTTYPE', 'STDRECORDACCOUNTBAI2CUSTACCTNUM', 'STDRECORDACCOUNTBAI2ORIGID', 'STDRECORDACCOUNTBILLABLEEXPENSESACCT', 'STDRECORDACCOUNTCASHFLOWRATE', 'STDRECORDACCOUNTCATEGORY1099MISC', 'STDRECORDACCOUNTCLASS', 'STDRECORDACCOUNTCURRENCY', 'STDRECORDACCOUNTDEFERRALACCT', 'STDRECORDACCOUNTDEPARTMENT', 'STDRECORDACCOUNTDESCRIPTION', 'STDRECORDACCOUNTELIMINATE', 'STDRECORDACCOUNTEXCHANGERATE', 'STDRECORDACCOUNTEXTERNALID', 'STDRECORDACCOUNTGENERALRATE', 'STDRECORDACCOUNTIBANACCTNUM', 'STDRECORDACCOUNTINCLUDECHILDREN', 'STDRECORDACCOUNTINGBOOKEFFECTIVEPERIOD', 'STDRECORDACCOUNTINGBOOKEXTERNALID', 'STDRECORDACCOUNTINGBOOKINCLUDECHILDREN', 'STDRECORDACCOUNTINGBOOKISCONSOLIDATED', 'STDRECORDACCOUNTINGBOOKISPRIMARY', 'STDRECORDACCOUNTINGBOOKNAME', 'STDRECORDACCOUNTINGBOOKSTATUS', 'STDRECORDACCOUNTINGBOOKSUBSIDIARY', 'STDRECORDACCOUNTINGCONTEXTEXTERNALID', 'STDRECORDACCOUNTINGCONTEXTNAME', 'STDRECORDACCOUNTINGPERIODALLOWNONGLCHANGES', 'STDRECORDACCOUNTINGPERIODCLOSED', 'STDRECORDACCOUNTINGPERIODEND', 'STDRECORDACCOUNTINGPERIODISADJUST', 'STDRECORDACCOUNTINGPERIODISQUARTER', 'STDRECORDACCOUNTINGPERIODISYEAR', 'STDRECORDACCOUNTINGPERIODOPEN', 'STDRECORDACCOUNTINGPERIODPARENT', 'STDRECORDACCOUNTINGPERIODPERIODNAME', 'STDRECORDACCOUNTINGPERIODSTART', 'STDRECORDACCOUNTINVENTORY', 'STDRECORDACCOUNTISINACTIVE', 'STDRECORDACCOUNTISSUMMARY', 'STDRECORDACCOUNTLEGALNAME', 'STDRECORDACCOUNTLOCATION', 'STDRECORDACCOUNTOPENINGBALANCE', 'STDRECORDACCOUNTPARENT', 'STDRECORDACCOUNTRECONCILEWITHMATCHING', 'STDRECORDACCOUNTREVAL', 'STDRECORDADDRESSBOOKENTITY', 'STDRECORDADDRESSCOUNTRY', 'STDRECORDALLOCSCHEDDESTLINECLASS', 'STDRECORDALLOCSCHEDDESTLINEDEPARTMENT', 'STDRECORDALLOCSCHEDDESTLINELOCATION', 'STDRECORDALLOCSCHEDSRCLINECLASS', 'STDRECORDALLOCSCHEDSRCLINEDEPARTMENT', 'STDRECORDALLOCSCHEDSRCLINELOCATION', 'STDRECORDAPPROVEDBY', 'STDRECORDASCHARGEDPROJECTREVENUERULEDESCRIPTION', 'STDRECORDASCHARGEDPROJECTREVENUERULEISINACTIVE', 'STDRECORDASCHARGEDPROJECTREVENUERULENAME', 'STDRECORDASCHARGEDPROJECTREVENUERULEPROJECT', 'STDRECORDASCHARGEDPROJECTREVENUERULEREVENUERECONCILED', 'STDRECORDASCHARGEDPROJECTREVENUERULETOTALAMOUNTTORECOGNIZE', 'STDRECORDBILLINGCLASSCOST', 'STDRECORDBILLINGCLASSDESCRIPTION', 'STDRECORDBILLINGCLASSEXTERNALID', 'STDRECORDBILLINGCLASSISINACTIVE', 'STDRECORDBILLINGCLASSNAME', 'STDRECORDBILLINGCLASSPRICE', 'STDRECORDBILLINGCLASSSALEUNIT', 'STDRECORDBILLINGCLASSUNITSTYPE', 'STDRECORDBILLINGRATECARDCUSTOMER', 'STDRECORDBILLINGRATECARDISINACTIVE', 'STDRECORDBILLINGRATECARDNAME', 'STDRECORDBILLINGSCHEDULEAPPLYTOSUBTOTAL', 'STDRECORDBILLINGSCHEDULEEXTERNALID', 'STDRECORDBILLINGSCHEDULEFREQUENCY', 'STDRECORDBILLINGSCHEDULEINARREARS', 'STDRECORDBILLINGSCHEDULEINITIALAMOUNT', 'STDRECORDBILLINGSCHEDULEINITIALTERMS', 'STDRECORDBILLINGSCHEDULEISINACTIVE', 'STDRECORDBILLINGSCHEDULEISPUBLIC', 'STDRECORDBILLINGSCHEDULENAME', 'STDRECORDBILLINGSCHEDULENUMBERREMAINING', 'STDRECORDBILLINGSCHEDULERECURRENCETERMS', 'STDRECORDBILLINGSCHEDULESCHEDULETYPE', 'STDRECORDBILLINGSCHEDULETRANSACTION', 'STDRECORDBINNUMBERBINNUMBER', 'STDRECORDBINNUMBERISINACTIVE', 'STDRECORDBINNUMBERLOCATION', 'STDRECORDBINNUMBERMEMO', 'STDRECORDBINNUMBERSEQUENCENUMBER', 'STDRECORDBINNUMBERTYPE', 'STDRECORDBINNUMBERZONE', 'STDRECORDBOMAVAILABLEFORALLASSEMBLIES', 'STDRECORDBOMAVAILABLEFORALLLOCATIONS', 'STDRECORDBOMEXTERNALID', 'STDRECORDBOMID', 'STDRECORDBOMISINACTIVE', 'STDRECORDBOMMEMO', 'STDRECORDBOMNAME', 'STDRECORDBOMREVISIONBILLOFMATERIALS', 'STDRECORDBOMREVISIONCOMPONENTBOMREVISION', 'STDRECORDBOMREVISIONCOMPONENTID', 'STDRECORDBOMREVISIONCOMPONENTITEM', 'STDRECORDBOMREVISIONCOMPONENTLINENUMBER', 'STDRECORDBOMREVISIONCOMPONENTQUANTITY', 'STDRECORDBOMREVISIONCOMPONENTSOURCE', 'STDRECORDBOMREVISIONEFFECTIVEENDDATE', 'STDRECORDBOMREVISIONEFFECTIVESTARTDATE', 'STDRECORDBOMREVISIONEXTERNALID', 'STDRECORDBOMREVISIONID', 'STDRECORDBOMREVISIONISINACTIVE', 'STDRECORDBOMREVISIONMEMO', 'STDRECORDBOMREVISIONNAME', 'STDRECORDBONUSBONUSAMOUNTABSOLUTE', 'STDRECORDBONUSBONUSAWARDDATE', 'STDRECORDBONUSBONUSCOMMENT', 'STDRECORDBONUSBONUSCURRENCY', 'STDRECORDBONUSBONUSEMPLOYEE', 'STDRECORDBONUSBONUSSTATUS', 'STDRECORDBONUSBONUSTYPE', 'STDRECORDBONUSEXTERNALID', 'STDRECORDBONUSINTERNALID', 'STDRECORDBONUSTYPEEXTERNALID', 'STDRECORDBONUSTYPEINTERNALID', 'STDRECORDBONUSTYPEISINACTIVE', 'STDRECORDBONUSTYPENAME', 'STDRECORDBONUSTYPEPAYROLLITEM', 'STDRECORDBONUSTYPESUBSIDIARY', 'STDRECORDBUDGETACCOUNT', 'STDRECORDBUDGETAMOUNT', 'STDRECORDBUDGETCLASS', 'STDRECORDBUDGETCUSTOMER', 'STDRECORDBUDGETDEPARTMENT', 'STDRECORDBUDGETITEM', 'STDRECORDBUDGETLOCATION', 'STDRECORDBUDGETSUBSIDIARY', 'STDRECORDBUYINGREASONISINACTIVE', 'STDRECORDBUYINGREASONNAME', 'STDRECORDBUYINGTIMEFRAMEISINACTIVE', 'STDRECORDBUYINGTIMEFRAMENAME', 'STDRECORDCAMPAIGNAUDIENCEDESCRIPTION', 'STDRECORDCAMPAIGNAUDIENCEEXTERNALID', 'STDRECORDCAMPAIGNAUDIENCEISINACTIVE', 'STDRECORDCAMPAIGNAUDIENCENAME', 'STDRECORDCAMPAIGNCATEGORYDESCRIPTION', 'STDRECORDCAMPAIGNCATEGORYEXTERNALID', 'STDRECORDCAMPAIGNCATEGORYISEXTERNAL', 'STDRECORDCAMPAIGNCATEGORYISINACTIVE', 'STDRECORDCAMPAIGNCATEGORYLEADSOURCE', 'STDRECORDCAMPAIGNCATEGORYNAME', 'STDRECORDCAMPAIGNCATEGORYPARENT', 'STDRECORDCAMPAIGNCHANNELDESCRIPTION', 'STDRECORDCAMPAIGNCHANNELEVENTTYPE', 'STDRECORDCAMPAIGNCHANNELEXTERNALID', 'STDRECORDCAMPAIGNCHANNELISINACTIVE', 'STDRECORDCAMPAIGNCHANNELNAME', 'STDRECORDCAMPAIGNFAMILYDESCRIPTION', 'STDRECORDCAMPAIGNFAMILYEXTERNALID', 'STDRECORDCAMPAIGNFAMILYISINACTIVE', 'STDRECORDCAMPAIGNFAMILYNAME', 'STDRECORDCAMPAIGNOFFERDESCRIPTION', 'STDRECORDCAMPAIGNOFFEREXTERNALID', 'STDRECORDCAMPAIGNOFFERISINACTIVE', 'STDRECORDCAMPAIGNOFFERNAME', 'STDRECORDCAMPAIGNRESPONSECAMPAIGNEVENT', 'STDRECORDCAMPAIGNRESPONSECAMPAIGNRESPONSEDATE', 'STDRECORDCAMPAIGNRESPONSECHANNEL', 'STDRECORDCAMPAIGNRESPONSEENTITY', 'STDRECORDCAMPAIGNRESPONSEEXTERNALID', 'STDRECORDCAMPAIGNRESPONSELEADSOURCE', 'STDRECORDCAMPAIGNRESPONSENEWRESPONSEDATE', 'STDRECORDCAMPAIGNRESPONSENEWRESPONSETIME', 'STDRECORDCAMPAIGNRESPONSERESPONSE', 'STDRECORDCAMPAIGNRESPONSERESPONSETYPE', 'STDRECORDCAMPAIGNSEARCHENGINEDESCRIPTION', 'STDRECORDCAMPAIGNSEARCHENGINEEXTERNALID', 'STDRECORDCAMPAIGNSEARCHENGINEISINACTIVE', 'STDRECORDCAMPAIGNSEARCHENGINENAME', 'STDRECORDCAMPAIGNSUBSCRIPTIONDESCRIPTION', 'STDRECORDCAMPAIGNSUBSCRIPTIONEXTERNALDESCRIPTION', 'STDRECORDCAMPAIGNSUBSCRIPTIONEXTERNALNAME', 'STDRECORDCAMPAIGNSUBSCRIPTIONISINACTIVE', 'STDRECORDCAMPAIGNSUBSCRIPTIONNAME', 'STDRECORDCAMPAIGNSUBSCRIPTIONSUBSCRIBEDBYDEFAULT', 'STDRECORDCAMPAIGNVERTICALDESCRIPTION', 'STDRECORDCAMPAIGNVERTICALEXTERNALID', 'STDRECORDCAMPAIGNVERTICALISINACTIVE', 'STDRECORDCAMPAIGNVERTICALNAME', 'STDRECORDCASEISSUEDESCRIPTION', 'STDRECORDCASEISSUEEXTERNALID', 'STDRECORDCASEISSUEISINACTIVE', 'STDRECORDCASEISSUENAME', 'STDRECORDCASEORIGINDESCRIPTION', 'STDRECORDCASEORIGINEXTERNALID', 'STDRECORDCASEORIGINISINACTIVE', 'STDRECORDCASEORIGINNAME', 'STDRECORDCASEPRIORITYDESCRIPTION', 'STDRECORDCASEPRIORITYEXTERNALID', 'STDRECORDCASEPRIORITYISINACTIVE', 'STDRECORDCASEPRIORITYNAME', 'STDRECORDCASESTATUSAUTOCLOSECASE', 'STDRECORDCASESTATUSCASEONHOLD', 'STDRECORDCASESTATUSDESCRIPTION', 'STDRECORDCASESTATUSEXTERNALID', 'STDRECORDCASESTATUSISINACTIVE', 'STDRECORDCASESTATUSNAME', 'STDRECORDCASESTATUSSHOWAWAITINGREPLY', 'STDRECORDCASESTATUSSTAGE', 'STDRECORDCASETYPEDESCRIPTION', 'STDRECORDCASETYPEEXTERNALID', 'STDRECORDCASETYPEISINACTIVE', 'STDRECORDCASETYPENAME', 'STDRECORDCATCHUPPERIOD', 'STDRECORDCHARGERULEEXTERNALID', 'STDRECORDCLASS', 'STDRECORDCLASSEXTERNALID', 'STDRECORDCLASSINCLUDECHILDREN', 'STDRECORDCLASSISINACTIVE', 'STDRECORDCLASSNAME', 'STDRECORDCLASSPARENT', 'STDRECORDCLOSEDATE', 'STDRECORDCMSCONTENTAREANAME', 'STDRECORDCMSCONTENTCHANGEURL', 'STDRECORDCMSCONTENTCMSCONTENTTYPE', 'STDRECORDCMSCONTENTCREATED', 'STDRECORDCMSCONTENTCREATEDBY', 'STDRECORDCMSCONTENTDESCRIPTION', 'STDRECORDCMSCONTENTENDDATE', 'STDRECORDCMSCONTENTEXTERNALID', 'STDRECORDCMSCONTENTGLOBAL', 'STDRECORDCMSCONTENTHIDDEN', 'STDRECORDCMSCONTENTID', 'STDRECORDCMSCONTENTINTERNALID', 'STDRECORDCMSCONTENTLASTMODIFIED', 'STDRECORDCMSCONTENTLASTMODIFIEDBY', 'STDRECORDCMSCONTENTMATCHCOUNT', 'STDRECORDCMSCONTENTMATCHTYPE', 'STDRECORDCMSCONTENTNAME', 'STDRECORDCMSCONTENTPAGETYPE', 'STDRECORDCMSCONTENTPATH', 'STDRECORDCMSCONTENTSEQUENCENUMBER', 'STDRECORDCMSCONTENTSETTINGSID', 'STDRECORDCMSCONTENTSITE', 'STDRECORDCMSCONTENTSTARTDATE', 'STDRECORDCMSCONTENTTAGS', 'STDRECORDCMSCONTENTTEMPLATE', 'STDRECORDCMSCONTENTTYPECUSTOMRECORDID', 'STDRECORDCMSCONTENTTYPECUSTOMRECORDSCRIPTID', 'STDRECORDCMSCONTENTTYPEDESCRIPTION', 'STDRECORDCMSCONTENTTYPEEXTERNALID', 'STDRECORDCMSCONTENTTYPEICONIMAGEPATH', 'STDRECORDCMSCONTENTTYPEID', 'STDRECORDCMSCONTENTTYPEINTERNALID', 'STDRECORDCMSCONTENTTYPELABEL', 'STDRECORDCMSCONTENTTYPENAME', 'STDRECORDCMSCTSITEMAPPINGCMSCONTENTTYPE', 'STDRECORDCMSCTSITEMAPPINGDISPLAYINADMIN', 'STDRECORDCMSCTSITEMAPPINGEXTERNALID', 'STDRECORDCMSCTSITEMAPPINGID', 'STDRECORDCMSCTSITEMAPPINGINTERNALID', 'STDRECORDCMSCTSITEMAPPINGSITE', 'STDRECORDCMSPAGEADDTOHEAD', 'STDRECORDCMSPAGECREATED', 'STDRECORDCMSPAGECREATEDBY', 'STDRECORDCMSPAGEENDDATE', 'STDRECORDCMSPAGEEXTERNALID', 'STDRECORDCMSPAGEID', 'STDRECORDCMSPAGEINTERNALID', 'STDRECORDCMSPAGELASTMODIFIED', 'STDRECORDCMSPAGELASTMODIFIEDBY', 'STDRECORDCMSPAGEMETADESCRIPTION', 'STDRECORDCMSPAGEMETAKEYWORDS', 'STDRECORDCMSPAGENAME', 'STDRECORDCMSPAGEPAGEHEADER', 'STDRECORDCMSPAGEPAGETITLE', 'STDRECORDCMSPAGEPAGETYPE', 'STDRECORDCMSPAGESITE', 'STDRECORDCMSPAGESTARTDATE', 'STDRECORDCMSPAGETAGS', 'STDRECORDCMSPAGETEMPLATE', 'STDRECORDCMSPAGETYPEBASEURLPATH', 'STDRECORDCMSPAGETYPECMSCREATABLE', 'STDRECORDCMSPAGETYPECREATED', 'STDRECORDCMSPAGETYPECREATEDBY', 'STDRECORDCMSPAGETYPECUSTOMRECORDTYPE', 'STDRECORDCMSPAGETYPEDESCRIPTION', 'STDRECORDCMSPAGETYPEDISPLAYNAME', 'STDRECORDCMSPAGETYPEEXTERNALID', 'STDRECORDCMSPAGETYPEINACTIVE', 'STDRECORDCMSPAGETYPEINTERNALID', 'STDRECORDCMSPAGETYPELASTMODIFIED', 'STDRECORDCMSPAGETYPELASTMODIFIEDBY', 'STDRECORDCMSPAGETYPENAME', 'STDRECORDCMSPAGEURL', 'STDRECORDCOMMERCECATALOGDESCRIPTION', 'STDRECORDCOMMERCECATALOGEXTERNALID', 'STDRECORDCOMMERCECATALOGID', 'STDRECORDCOMMERCECATALOGINTERNALID', 'STDRECORDCOMMERCECATALOGNAME', 'STDRECORDCOMMERCECATALOGSITE', 'STDRECORDCOMMERCECATEGORYADDTOHEAD', 'STDRECORDCOMMERCECATEGORYCATALOG', 'STDRECORDCOMMERCECATEGORYCREATED', 'STDRECORDCOMMERCECATEGORYDESCRIPTION', 'STDRECORDCOMMERCECATEGORYDISPLAYINSITE', 'STDRECORDCOMMERCECATEGORYENDDATE', 'STDRECORDCOMMERCECATEGORYEXTERNALID', 'STDRECORDCOMMERCECATEGORYID', 'STDRECORDCOMMERCECATEGORYINTERNALID', 'STDRECORDCOMMERCECATEGORYISINACTIVE', 'STDRECORDCOMMERCECATEGORYITEMS', 'STDRECORDCOMMERCECATEGORYLASTMODIFIED', 'STDRECORDCOMMERCECATEGORYLASTMODIFIEDBY', 'STDRECORDCOMMERCECATEGORYMETADESCRIPTION', 'STDRECORDCOMMERCECATEGORYMETAKEYWORDS', 'STDRECORDCOMMERCECATEGORYNAME', 'STDRECORDCOMMERCECATEGORYPAGEBANNER', 'STDRECORDCOMMERCECATEGORYPAGEHEADING', 'STDRECORDCOMMERCECATEGORYPAGETITLE', 'STDRECORDCOMMERCECATEGORYPRIMARYPARENT', 'STDRECORDCOMMERCECATEGORYSEQUENCENUMBER', 'STDRECORDCOMMERCECATEGORYSITEMAPPRIORITY', 'STDRECORDCOMMERCECATEGORYSTARTDATE', 'STDRECORDCOMMERCECATEGORYSUBCATEGORIES', 'STDRECORDCOMMERCECATEGORYTHUMBNAIL', 'STDRECORDCOMMERCECATEGORYTITLE', 'STDRECORDCOMMERCECATEGORYURLFRAGMENT', 'STDRECORDCOMMERCECATEGORYVERSION', 'STDRECORDCOMMISSIONPLANDESCR', 'STDRECORDCOMMISSIONPLANINACTIVE', 'STDRECORDCOMMISSIONPLANPLANNAME', 'STDRECORDCOMMISSIONSCHEDULECURRENCYSYMBOL', 'STDRECORDCOMMISSIONSCHEDULEFORMGR', 'STDRECORDCOMMISSIONSCHEDULEFULLYPAIDELIGIBILITY', 'STDRECORDCOMMISSIONSCHEDULEINACTIVE', 'STDRECORDCOMMISSIONSCHEDULELINEITEMMAPPING', 'STDRECORDCOMMISSIONSCHEDULENAME', 'STDRECORDCOMMISSIONSCHEDULESUBSIDIARY', 'STDRECORDCOMMISSIONSCHEDULETARGET', 'STDRECORDCOMPETITORDESCRIPTION', 'STDRECORDCOMPETITOREXTERNALID', 'STDRECORDCOMPETITORISINACTIVE', 'STDRECORDCOMPETITORNAME', 'STDRECORDCOMPETITORPRODUCTSERVICE', 'STDRECORDCOMPETITORSTRATEGY', 'STDRECORDCOMPETITORSTRENGTHS', 'STDRECORDCOMPETITORURL', 'STDRECORDCOMPETITORWEAKNESSES', 'STDRECORDCONTACTCATEGORYEXTERNALID', 'STDRECORDCONTACTCATEGORYISINACTIVE', 'STDRECORDCONTACTCATEGORYNAME', 'STDRECORDCONTACTCATEGORYPRIVATE', 'STDRECORDCONTACTCATEGORYSYNC', 'STDRECORDCONTACTROLEDESCRIPTION', 'STDRECORDCONTACTROLEEXTERNALID', 'STDRECORDCONTACTROLEISINACTIVE', 'STDRECORDCONTACTROLENAME', 'STDRECORDCOSTCATEGORYACCOUNT', 'STDRECORDCOSTCATEGORYISINACTIVE', 'STDRECORDCOSTCATEGORYNAME', 'STDRECORDCREATED', 'STDRECORDCURRENCYCURRENCYFORMATSAMPLE', 'STDRECORDCURRENCYCURRENCYPRECISION', 'STDRECORDCURRENCYDISPLAYSYMBOL', 'STDRECORDCURRENCYEXCHANGERATE', 'STDRECORDCURRENCYEXTERNALID', 'STDRECORDCURRENCYINCLUDEINFXRATEUPDATES', 'STDRECORDCURRENCYISINACTIVE', 'STDRECORDCURRENCYLOCALE', 'STDRECORDCURRENCYNAME', 'STDRECORDCURRENCYOVERRIDECURRENCYFORMAT', 'STDRECORDCURRENCYSYMBOL', 'STDRECORDCURRENCYSYMBOLPLACEMENT', 'STDRECORDCUSTOMERCATEGORYEXTERNALID', 'STDRECORDCUSTOMERCATEGORYISINACTIVE', 'STDRECORDCUSTOMERCATEGORYNAME', 'STDRECORDCUSTOMERMESSAGEDESCRIPTION', 'STDRECORDCUSTOMERMESSAGEEXTERNALID', 'STDRECORDCUSTOMERMESSAGEISINACTIVE', 'STDRECORDCUSTOMERMESSAGENAME', 'STDRECORDCUSTOMERMESSAGEPREFERRED', 'STDRECORDCUSTOMERSUBSIDIARYRELATIONSHIPCUSTOMER', 'STDRECORDCUSTOMERSUBSIDIARYRELATIONSHIPENTITY', 'STDRECORDCUSTOMERSUBSIDIARYRELATIONSHIPISPRIMARYSUB', 'STDRECORDCUSTOMERSUBSIDIARYRELATIONSHIPSUBSIDIARY', 'STDRECORDCUSTOMFORM', 'STDRECORDDEPARTMENT', 'STDRECORDDEPARTMENTEXTERNALID', 'STDRECORDDEPARTMENTINCLUDECHILDREN', 'STDRECORDDEPARTMENTISINACTIVE', 'STDRECORDDEPARTMENTNAME', 'STDRECORDDEPARTMENTPARENT', 'STDRECORDDOCUMENTSTATUSTRANSACTIONTYPE', 'STDRECORDDOMAINWEBSITE', 'STDRECORDDRIVERSLICENSECLASS', 'STDRECORDDRIVERSLICENSEDATEOFISSUE', 'STDRECORDDRIVERSLICENSEDESCRIPTION', 'STDRECORDDRIVERSLICENSEEMPLOYEE', 'STDRECORDDRIVERSLICENSEEXPIRATIONDATE', 'STDRECORDDRIVERSLICENSEISINACTIVE', 'STDRECORDDRIVERSLICENSEISSUER', 'STDRECORDDRIVERSLICENSENAMEONDOCUMENT', 'STDRECORDDRIVERSLICENSENUMBERVALUE', 'STDRECORDEMAILTEMPLATEDESCRIPTION', 'STDRECORDEMAILTEMPLATEEMAILASSALESREP', 'STDRECORDEMAILTEMPLATEEXTERNALID', 'STDRECORDEMAILTEMPLATEFROMEMAIL', 'STDRECORDEMAILTEMPLATEFROMNAME', 'STDRECORDEMAILTEMPLATEISINACTIVE', 'STDRECORDEMAILTEMPLATEISPRIVATE', 'STDRECORDEMAILTEMPLATENAME', 'STDRECORDEMAILTEMPLATERECORDTYPE', 'STDRECORDEMAILTEMPLATEREPLYEMAIL', 'STDRECORDEMAILTEMPLATERESTRICTGROUP', 'STDRECORDEMAILTEMPLATESHOWCOMPANYINFO', 'STDRECORDEMAILTEMPLATESUBSCRIPTION', 'STDRECORDEMAILTEMPLATETRACKEMAIL', 'STDRECORDEMAILTEMPLATEUNSUBSCRIBE', 'STDRECORDEMPLOYEECHANGEREQUESTAPPROVALSTATUS', 'STDRECORDEMPLOYEECHANGEREQUESTDECLINEDBY', 'STDRECORDEMPLOYEECHANGEREQUESTEMPLOYEE', 'STDRECORDEMPLOYEECHANGEREQUESTEMPLOYEECHANGEREQUESTTYPE', 'STDRECORDEMPLOYEECHANGEREQUESTEMPLOYEECHANGETYPE', 'STDRECORDEMPLOYEECHANGEREQUESTEXTERNALID', 'STDRECORDEMPLOYEECHANGEREQUESTFINALAPPROVER', 'STDRECORDEMPLOYEECHANGEREQUESTINTERNALID', 'STDRECORDEMPLOYEECHANGEREQUESTISINACTIVE', 'STDRECORDEMPLOYEECHANGEREQUESTJUSTIFICATION', 'STDRECORDEMPLOYEECHANGEREQUESTNEXTAPPROVER', 'STDRECORDEMPLOYEECHANGEREQUESTPROPOSEDDATE', 'STDRECORDEMPLOYEECHANGEREQUESTREQUESTER', 'STDRECORDEMPLOYEECHANGEREQUESTREQUESTSTATUS', 'STDRECORDEMPLOYEECHANGETYPECHANGEREASON', 'STDRECORDEMPLOYEECHANGETYPEDESCRIPTION', 'STDRECORDEMPLOYEECHANGETYPEEXTERNALID', 'STDRECORDEMPLOYEECHANGETYPEGUIDELINES', 'STDRECORDEMPLOYEECHANGETYPEINTERNALID', 'STDRECORDEMPLOYEECHANGETYPEISINACTIVE', 'STDRECORDEMPLOYEECHANGETYPENAME', 'STDRECORDEMPLOYEESTATUSCATEGORY', 'STDRECORDEMPLOYEESTATUSISINACTIVE', 'STDRECORDEMPLOYEESTATUSNAME', 'STDRECORDEMPLOYEETYPECATEGORY', 'STDRECORDEMPLOYEETYPENAME', 'STDRECORDENTITYSTATUSDESCRIPTION', 'STDRECORDENTITYSTATUSEXTERNALID', 'STDRECORDENTITYSTATUSINCLUDEINLEADREPORTS', 'STDRECORDENTITYSTATUSISINACTIVE', 'STDRECORDENTITYSTATUSNAME', 'STDRECORDENTITYSTATUSPROBABILITY', 'STDRECORDENTITYSTATUSSTAGE', 'STDRECORDENTITYSTATUSSTAGENAME', 'STDRECORDEREXPLINEAMOUNT', 'STDRECORDEREXPLINEBILLINGSUBSIDIARY', 'STDRECORDEREXPLINECATEGORY', 'STDRECORDEREXPLINECLASS', 'STDRECORDEREXPLINECORPORATECREDITCARD', 'STDRECORDEREXPLINECURRENCY', 'STDRECORDEREXPLINECUSTOMER', 'STDRECORDEREXPLINEDEPARTMENT', 'STDRECORDEREXPLINEEXCHANGERATE', 'STDRECORDEREXPLINEEXPENSEACCOUNT', 'STDRECORDEREXPLINEEXPENSEDATE', 'STDRECORDEREXPLINEFOREIGNAMOUNT', 'STDRECORDEREXPLINEGROSSAMT', 'STDRECORDEREXPLINEISBILLABLE', 'STDRECORDEREXPLINELOCATION', 'STDRECORDEREXPLINEMEMO', 'STDRECORDEREXPLINEPROJECTTASK', 'STDRECORDEREXPLINEQUANTITY', 'STDRECORDEREXPLINERATE', 'STDRECORDEREXPLINEREFNUMBER', 'STDRECORDEREXPLINETAX1AMT', 'STDRECORDEREXPLINETAXAMOUNT', 'STDRECORDEREXPLINETAXCODE', 'STDRECORDEREXPLINETAXRATE1', 'STDRECORDEREXPLINETAXRATE2', 'STDRECORDEXPCATCHUPPERIOD', 'STDRECORDEXPENSECATEGORYDEFAULTRATE', 'STDRECORDEXPENSECATEGORYDESCRIPTION', 'STDRECORDEXPENSECATEGORYEXPENSEACCT', 'STDRECORDEXPENSECATEGORYEXPENSEITEM', 'STDRECORDEXPENSECATEGORYEXTERNALID', 'STDRECORDEXPENSECATEGORYISINACTIVE', 'STDRECORDEXPENSECATEGORYNAME', 'STDRECORDEXPENSECATEGORYPERSONALCORPORATECARDEXPENSE', 'STDRECORDEXPENSECATEGORYRATEREQUIRED', 'STDRECORDEXPHOLDREVENUERECOGNITION', 'STDRECORDEXPRECALCADJUSTPERIODOFFSET', 'STDRECORDEXPREFORECASTMETHOD', 'STDRECORDEXPREVENUERECOGNITIONRULE', 'STDRECORDEXPREVRECENDDATE', 'STDRECORDEXPREVRECSTARTDATE', 'STDRECORDEXTERNALID', 'STDRECORDFIELDDATATYPE', 'STDRECORDFIELDDATATYPENAME', 'STDRECORDFIELDLISTRECORD', 'STDRECORDFIELDRECORDTYPE', 'STDRECORDFIELDSCRIPTID', 'STDRECORDFIELDSTOREVALUE', 'STDRECORDFIELDTYPE', 'STDRECORDFISCALCALENDAREXTERNALID', 'STDRECORDFISCALCALENDARISDEFAULT', 'STDRECORDFISCALCALENDARNAME', 'STDRECORDFIXEDAMOUNTPROJECTREVENUERULEDESCRIPTION', 'STDRECORDFIXEDAMOUNTPROJECTREVENUERULEFIXEDAMOUNTTYPE', 'STDRECORDFIXEDAMOUNTPROJECTREVENUERULEFIXEDSCHEDULETYPE', 'STDRECORDFIXEDAMOUNTPROJECTREVENUERULEISINACTIVE', 'STDRECORDFIXEDAMOUNTPROJECTREVENUERULENAME', 'STDRECORDFIXEDAMOUNTPROJECTREVENUERULEPROJECT', 'STDRECORDFIXEDAMOUNTPROJECTREVENUERULEREVENUERECONCILED', 'STDRECORDFIXEDAMOUNTPROJECTREVENUERULESERVICEITEM', 'STDRECORDFIXEDAMOUNTPROJECTREVENUERULETOTALAMOUNTTORECOGNIZE', 'STDRECORDFORMATPROFILECREATEDBY', 'STDRECORDFORMATPROFILECREATEDDATE', 'STDRECORDFORMATPROFILEDESCRIPTION', 'STDRECORDFORMATPROFILEFINANCIALINSTITUTION', 'STDRECORDFORMATPROFILEFORMATPROFILE', 'STDRECORDFORMATPROFILEINTERNALID', 'STDRECORDFORMATPROFILEISINACTIVE', 'STDRECORDFORMATPROFILELASTMODIFIEDDATE', 'STDRECORDFORMATPROFILEMODIFIEDBY', 'STDRECORDFORMATPROFILEPROFILETYPE', 'STDRECORDFORMATPROFILETRANSACTIONPARSER', 'STDRECORDFULFILLMENTEXCEPTIONREASONDESCRIPTION', 'STDRECORDFULFILLMENTEXCEPTIONREASONEXCEPTIONTYPE', 'STDRECORDFULFILLMENTEXCEPTIONREASONEXTERNALID', 'STDRECORDFULFILLMENTEXCEPTIONREASONISINACTIVE', 'STDRECORDFULFILLMENTEXCEPTIONREASONNAME', 'STDRECORDGLOBALACCOUNTMAPPINGACCOUNTINGBOOK', 'STDRECORDGLOBALACCOUNTMAPPINGCLASS', 'STDRECORDGLOBALACCOUNTMAPPINGDEPARTMENT', 'STDRECORDGLOBALACCOUNTMAPPINGDESTINATIONACCOUNT', 'STDRECORDGLOBALACCOUNTMAPPINGEFFECTIVEDATE', 'STDRECORDGLOBALACCOUNTMAPPINGENDDATE', 'STDRECORDGLOBALACCOUNTMAPPINGEXTERNALID', 'STDRECORDGLOBALACCOUNTMAPPINGLOCATION', 'STDRECORDGLOBALACCOUNTMAPPINGSOURCEACCOUNT', 'STDRECORDGLOBALACCOUNTMAPPINGSUBSIDIARY', 'STDRECORDGLOBALINVENTORYRELATIONSHIPALLLOCATIONSCUSTOMERRETURN', 'STDRECORDGLOBALINVENTORYRELATIONSHIPALLLOCATIONSFULFILLMENT', 'STDRECORDGLOBALINVENTORYRELATIONSHIPALLOWCROSSSUBCUSTOMERRETURN', 'STDRECORDGLOBALINVENTORYRELATIONSHIPALLOWCROSSSUBFULFILLMENT', 'STDRECORDGLOBALINVENTORYRELATIONSHIPINVENTORYSUBSIDIARY', 'STDRECORDGLOBALINVENTORYRELATIONSHIPISINACTIVE', 'STDRECORDGLOBALINVENTORYRELATIONSHIPORIGINATINGSUBSIDIARY', 'STDRECORDGOALACTUALVALUEUPDATED', 'STDRECORDGOALCLOSEDDATE', 'STDRECORDGOALCURRENCY', 'STDRECORDGOALDETAILS', 'STDRECORDGOALEMPLOYEE', 'STDRECORDGOALFORMAT', 'STDRECORDGOALGOALSTATUS', 'STDRECORDGOALINTERNALID', 'STDRECORDGOALISINACTIVE', 'STDRECORDGOALLASTMODIFIEDDATE', 'STDRECORDGOALMOOD', 'STDRECORDGOALNAME', 'STDRECORDGOALPROGRESSVALUE', 'STDRECORDGOALSTARTVALUE', 'STDRECORDGOALTARGETDATE', 'STDRECORDGOVERNMENTISSUEDIDTYPEDESCRIPTION', 'STDRECORDGOVERNMENTISSUEDIDTYPEISALLOWMULTIPLE', 'STDRECORDGOVERNMENTISSUEDIDTYPEISINACTIVE', 'STDRECORDGOVERNMENTISSUEDIDTYPENAME', 'STDRECORDHCMJOBDESCRIPTION', 'STDRECORDHCMJOBINTERNALID', 'STDRECORDHCMJOBJOBID', 'STDRECORDHCMJOBTITLE', 'STDRECORDHEADCOUNT', 'STDRECORDHIRINGMANAGER', 'STDRECORDHOLDREVENUERECOGNITION', 'STDRECORDID', 'STDRECORDIGAMOUNTDUE', 'STDRECORDIGAMOUNTPAID', 'STDRECORDIGBILLADDRESS', 'STDRECORDIGBILLADDRESSLIST', 'STDRECORDIGCURRENCY', 'STDRECORDIGCUSTOMER', 'STDRECORDIGDISCOUNTTOTAL', 'STDRECORDIGDUEDATE', 'STDRECORDIGGROUPEDBYPO', 'STDRECORDIGHANDLINGCOST', 'STDRECORDIGINVOICEGROUPNUMBER', 'STDRECORDIGITEMTOTAL', 'STDRECORDIGMEMO', 'STDRECORDIGPONUMBER', 'STDRECORDIGSHIPPINGCOST', 'STDRECORDIGSTATUS', 'STDRECORDIGSUBSIDIARY', 'STDRECORDIGTAXTOTAL', 'STDRECORDIGTERMS', 'STDRECORDIGTOTAL', 'STDRECORDIGTRANDATE', 'STDRECORDIMPORTEDEMPLOYEEEXPENSEBILLEDAMOUNT', 'STDRECORDIMPORTEDEMPLOYEEEXPENSEBILLEDCURRENCY', 'STDRECORDIMPORTEDEMPLOYEEEXPENSEBILLEDTAXAMOUNT', 'STDRECORDIMPORTEDEMPLOYEEEXPENSECARDCURRENCY', 'STDRECORDIMPORTEDEMPLOYEEEXPENSECARDMEMBEREMBOSSEDNAME', 'STDRECORDIMPORTEDEMPLOYEEEXPENSECORPORATECARD', 'STDRECORDIMPORTEDEMPLOYEEEXPENSECOSTCENTER', 'STDRECORDIMPORTEDEMPLOYEEEXPENSECURRENCYEXCHANGERATE', 'STDRECORDIMPORTEDEMPLOYEEEXPENSEEXTERNALID', 'STDRECORDIMPORTEDEMPLOYEEEXPENSEID', 'STDRECORDIMPORTEDEMPLOYEEEXPENSELOCALCHARGEAMOUNT', 'STDRECORDIMPORTEDEMPLOYEEEXPENSELOCALTAXAMOUNT', 'STDRECORDIMPORTEDEMPLOYEEEXPENSEMEMO', 'STDRECORDIMPORTEDEMPLOYEEEXPENSESTATUS', 'STDRECORDIMPORTEDEMPLOYEEEXPENSETRANSACTIONID', 'STDRECORDINBOUNDITEMEXPECTEDRATE', 'STDRECORDINBOUNDITEMQUANTITYEXPECTED', 'STDRECORDINBOUNDITEMQUANTITYRECEIVED', 'STDRECORDINBOUNDITEMRECEIVINGLOCATION', 'STDRECORDINBOUNDITEMSHIPMENTITEMAMOUNT', 'STDRECORDINCOTERMDESCRIPTION', 'STDRECORDINCOTERMISINACTIVE', 'STDRECORDINCOTERMNAME', 'STDRECORDINVENTORYSTATUSDESCRIPTION', 'STDRECORDINVENTORYSTATUSEXTERNALID', 'STDRECORDINVENTORYSTATUSINTERNALID', 'STDRECORDINVENTORYSTATUSINVENTORYAVAILABLE', 'STDRECORDINVENTORYSTATUSISINACTIVE', 'STDRECORDINVENTORYSTATUSNAME', 'STDRECORDISACTUALDELIVERYDATE', 'STDRECORDISACTUALSHIPPINGDATE', 'STDRECORDISBILLOFLADING', 'STDRECORDISCREATEDDATE', 'STDRECORDISEXPECTEDDELIVERYDATE', 'STDRECORDISEXPECTEDSHIPPINGDATE', 'STDRECORDISEXTERNALDOCUMENTNUMBER', 'STDRECORDISINACTIVE', 'STDRECORDISMEMO', 'STDRECORDISSHIPMENTBASECURRENCY', 'STDRECORDISSHIPMENTNUMBER', 'STDRECORDISSTATUS', 'STDRECORDISVESSELNUMBER', 'STDRECORDITEMACCOUNTMAPPINGACCOUNTINGBOOK', 'STDRECORDITEMACCOUNTMAPPINGCLASS', 'STDRECORDITEMACCOUNTMAPPINGDEPARTMENT', 'STDRECORDITEMACCOUNTMAPPINGDESTINATIONACCOUNT', 'STDRECORDITEMACCOUNTMAPPINGEFFECTIVEDATE', 'STDRECORDITEMACCOUNTMAPPINGENDDATE', 'STDRECORDITEMACCOUNTMAPPINGEXTERNALID', 'STDRECORDITEMACCOUNTMAPPINGITEMACCOUNT', 'STDRECORDITEMACCOUNTMAPPINGLOCATION', 'STDRECORDITEMACCOUNTMAPPINGSOURCEACCOUNT', 'STDRECORDITEMACCOUNTMAPPINGSUBSIDIARY', 'STDRECORDITEMCOLLECTIONDESCRIPTION', 'STDRECORDITEMCOLLECTIONEXTERNALID', 'STDRECORDITEMCOLLECTIONINTERNALID', 'STDRECORDITEMCOLLECTIONISINACTIVE', 'STDRECORDITEMCOLLECTIONITEMMAPEXTERNALID', 'STDRECORDITEMCOLLECTIONITEMMAPINTERNALID', 'STDRECORDITEMCOLLECTIONITEMMAPITEM', 'STDRECORDITEMCOLLECTIONITEMMAPITEMCOLLECTION', 'STDRECORDITEMCOLLECTIONNAME', 'STDRECORDITEMCOLLECTIONSAVEDSEARCH', 'STDRECORDITEMLOCATIONCONFIGURATIONLOCATION', 'STDRECORDITEMLOCATIONCONFIGURATIONMEMO', 'STDRECORDITEMLOCATIONCONFIGURATIONNAME', 'STDRECORDITEMLOCATIONCONFIGURATIONSUBSIDIARY', 'STDRECORDITEMPROCESSFAMILYDESCRIPTION', 'STDRECORDITEMPROCESSFAMILYEXTERNALID', 'STDRECORDITEMPROCESSFAMILYINTERNALID', 'STDRECORDITEMPROCESSFAMILYISINACTIVE', 'STDRECORDITEMPROCESSFAMILYNAME', 'STDRECORDITEMPROCESSGROUPDESCRIPTION', 'STDRECORDITEMPROCESSGROUPEXTERNALID', 'STDRECORDITEMPROCESSGROUPINTERNALID', 'STDRECORDITEMPROCESSGROUPISINACTIVE', 'STDRECORDITEMPROCESSGROUPNAME', 'STDRECORDITEMREVISIONEFFECTIVEDATE', 'STDRECORDITEMREVISIONEXTERNALID', 'STDRECORDITEMREVISIONINACTIVE', 'STDRECORDITEMREVISIONITEM', 'STDRECORDITEMREVISIONMEMO', 'STDRECORDITEMREVISIONNAME', 'STDRECORDITEMREVISIONOBSOLETEDATE', 'STDRECORDJOB', 'STDRECORDJOBID', 'STDRECORDJOBREQUISITIONID', 'STDRECORDLABORBASEDPROJECTREVENUERULEBILLINGRATECARD', 'STDRECORDLABORBASEDPROJECTREVENUERULEDESCRIPTION', 'STDRECORDLABORBASEDPROJECTREVENUERULEISINACTIVE', 'STDRECORDLABORBASEDPROJECTREVENUERULENAME', 'STDRECORDLABORBASEDPROJECTREVENUERULEPROJECT', 'STDRECORDLABORBASEDPROJECTREVENUERULERATEMULTIPLIER', 'STDRECORDLABORBASEDPROJECTREVENUERULERATEROUNDINGTYPE', 'STDRECORDLABORBASEDPROJECTREVENUERULERATESOURCETYPE', 'STDRECORDLABORBASEDPROJECTREVENUERULEREVENUERECONCILED', 'STDRECORDLABORBASEDPROJECTREVENUERULESAVEDSEARCH', 'STDRECORDLABORBASEDPROJECTREVENUERULESERVICEITEM', 'STDRECORDLABORBASEDPROJECTREVENUERULETOTALAMOUNTTORECOGNIZE', 'STDRECORDLASTMODIFIED', 'STDRECORDLOCATION', 'STDRECORDLOCATIONADDRESS1', 'STDRECORDLOCATIONADDRESS2', 'STDRECORDLOCATIONADDRESSEE', 'STDRECORDLOCATIONADDRTEXT', 'STDRECORDLOCATIONALLOWSTOREPICKUP', 'STDRECORDLOCATIONATTENTION', 'STDRECORDLOCATIONBUFFERSTOCK', 'STDRECORDLOCATIONCITY', 'STDRECORDLOCATIONCOSTINGGROUPCOSTINGGROUPCURRENCY', 'STDRECORDLOCATIONCOSTINGGROUPMEMO', 'STDRECORDLOCATIONCOSTINGGROUPNAME', 'STDRECORDLOCATIONCOUNTRY', 'STDRECORDLOCATIONCOUNTRYNAME', 'STDRECORDLOCATIONENDTIME', 'STDRECORDLOCATIONEXTERNALID', 'STDRECORDLOCATIONINCLUDECHILDREN', 'STDRECORDLOCATIONINCLUDEINCT', 'STDRECORDLOCATIONINCLUDEINSUPPLYPLANNING', 'STDRECORDLOCATIONINVTTURNOVERVEL', 'STDRECORDLOCATIONISFRIDAY', 'STDRECORDLOCATIONISINACTIVE', 'STDRECORDLOCATIONISMONDAY', 'STDRECORDLOCATIONISSATURDAY', 'STDRECORDLOCATIONISSUNDAY', 'STDRECORDLOCATIONISTHURSDAY', 'STDRECORDLOCATIONISTUESDAY', 'STDRECORDLOCATIONISWEDNESDAY', 'STDRECORDLOCATIONLOCATIONCOSTINGGROUP', 'STDRECORDLOCATIONLOCATIONTYPE', 'STDRECORDLOCATIONLOGO', 'STDRECORDLOCATIONMAINADDRESS', 'STDRECORDLOCATIONMAINADDRESS_TEXT', 'STDRECORDLOCATIONMAKEINVENTORYAVAILABLE', 'STDRECORDLOCATIONMAKEINVENTORYAVAILABLESTORE', 'STDRECORDLOCATIONMAXSHIPPERDAY', 'STDRECORDLOCATIONNAME', 'STDRECORDLOCATIONNEXTPICKUPCUTOFFTIME', 'STDRECORDLOCATIONOVERRIDE', 'STDRECORDLOCATIONPARENT', 'STDRECORDLOCATIONPHONE', 'STDRECORDLOCATIONPICKUPALERTEMAIL', 'STDRECORDLOCATIONRETURNADDR', 'STDRECORDLOCATIONRETURNADDRESS', 'STDRECORDLOCATIONRETURNADDRESS1', 'STDRECORDLOCATIONRETURNADDRESS2', 'STDRECORDLOCATIONRETURNADDRESS_TEXT', 'STDRECORDLOCATIONRETURNCITY', 'STDRECORDLOCATIONRETURNCOUNTRY', 'STDRECORDLOCATIONRETURNSTATE', 'STDRECORDLOCATIONRETURNZIP', 'STDRECORDLOCATIONSAMEDAYPICKUPCUTOFFTIME', 'STDRECORDLOCATIONSHIPCUTOFF', 'STDRECORDLOCATIONSTARTTIME', 'STDRECORDLOCATIONSTATE', 'STDRECORDLOCATIONSTATENAME', 'STDRECORDLOCATIONSTOREFULFILLMENTMEMO', 'STDRECORDLOCATIONSTOREPICKUPBUFFERSTOCK', 'STDRECORDLOCATIONSUBSIDIARY', 'STDRECORDLOCATIONTIMEZONE', 'STDRECORDLOCATIONTOTALSHIPPINGCAPACITY', 'STDRECORDLOCATIONTRANINTERNALPREFIX', 'STDRECORDLOCATIONTRANPREFIX', 'STDRECORDLOCATIONUSEWAREHOUSEMANAGEMENT', 'STDRECORDLOCATIONZIP', 'STDRECORDMERCHANDISEHIERARCHYLEVELDESCRIPTION', 'STDRECORDMERCHANDISEHIERARCHYLEVELEXTERNALID', 'STDRECORDMERCHANDISEHIERARCHYLEVELINTERNALID', 'STDRECORDMERCHANDISEHIERARCHYLEVELNAME', 'STDRECORDMERCHANDISEHIERARCHYLEVELRANK', 'STDRECORDMERCHANDISEHIERARCHYNODEDESCRIPTION', 'STDRECORDMERCHANDISEHIERARCHYNODEEXTERNALID', 'STDRECORDMERCHANDISEHIERARCHYNODEINTERNALID', 'STDRECORDMERCHANDISEHIERARCHYNODENAME', 'STDRECORDMERCHANDISEHIERARCHYVERSIONDESCRIPTION', 'STDRECORDMERCHANDISEHIERARCHYVERSIONENDDATE', 'STDRECORDMERCHANDISEHIERARCHYVERSIONEXTERNALID', 'STDRECORDMERCHANDISEHIERARCHYVERSIONINTERNALID', 'STDRECORDMERCHANDISEHIERARCHYVERSIONNAME', 'STDRECORDMERCHANDISEHIERARCHYVERSIONSTARTDATE', 'STDRECORDMODULEPRODUCT', 'STDRECORDNAME', 'STDRECORDNOTEDIRECTION', 'STDRECORDNOTEEXTERNALID', 'STDRECORDNOTENOTE', 'STDRECORDNOTENOTEDATE', 'STDRECORDNOTENOTETYPE', 'STDRECORDNOTETIME', 'STDRECORDNOTETITLE', 'STDRECORDNOTETYPEDESCRIPTION', 'STDRECORDNOTETYPEEXTERNALID', 'STDRECORDNOTETYPEISINACTIVE', 'STDRECORDNOTETYPENAME', 'STDRECORDOPENDATE', 'STDRECORDORDERSTATUSCOUNTRY', 'STDRECORDORDERSTATUSDESCRIPTION', 'STDRECORDORDERSTATUSSTATE', 'STDRECORDOTHERGOVERNMENTISSUEDIDDESCRIPTION', 'STDRECORDOTHERGOVERNMENTISSUEDIDEMPLOYEE', 'STDRECORDOTHERGOVERNMENTISSUEDIDEXPIRATIONDATE', 'STDRECORDOTHERGOVERNMENTISSUEDIDIDTYPE', 'STDRECORDOTHERGOVERNMENTISSUEDIDISINACTIVE', 'STDRECORDOTHERGOVERNMENTISSUEDIDNAMEONDOCUMENT', 'STDRECORDOTHERGOVERNMENTISSUEDIDNUMBERVALUE', 'STDRECORDOTHERNAMECATEGORYEXTERNALID', 'STDRECORDOTHERNAMECATEGORYISINACTIVE', 'STDRECORDOTHERNAMECATEGORYNAME', 'STDRECORDOWNER', 'STDRECORDPARENT', 'STDRECORDPARTERCATEGORYISINACTIVE', 'STDRECORDPARTERCATEGORYNAME', 'STDRECORDPARTERCATEGORYPARENT', 'STDRECORDPARTNERCATEGORYEXTERNALID', 'STDRECORDPASSPORTDATEOFISSUE', 'STDRECORDPASSPORTDESCRIPTION', 'STDRECORDPASSPORTEMPLOYEE', 'STDRECORDPASSPORTEXPIRATIONDATE', 'STDRECORDPASSPORTISINACTIVE', 'STDRECORDPASSPORTISSUER', 'STDRECORDPASSPORTNAMEONDOCUMENT', 'STDRECORDPASSPORTNATIONALITY', 'STDRECORDPASSPORTNUMBERVALUE', 'STDRECORDPAYMENTMETHODACCOUNT', 'STDRECORDPAYMENTMETHODCREDITCARD', 'STDRECORDPAYMENTMETHODEXTERNALID', 'STDRECORDPAYMENTMETHODISEMV', 'STDRECORDPAYMENTMETHODISINACTIVE', 'STDRECORDPAYMENTMETHODISONLINE', 'STDRECORDPAYMENTMETHODNAME', 'STDRECORDPAYMENTMETHODTOKENIZED', 'STDRECORDPAYMENTMETHODVISUALTAGS', 'STDRECORDPAYROLLBATCHSUBSIDIARY', 'STDRECORDPAYROLLITEMALLOWBULKENTRY', 'STDRECORDPAYROLLITEMAPPLYLIMIT', 'STDRECORDPAYROLLITEMAPPLYRATE', 'STDRECORDPAYROLLITEMBASEDONQUANTITY', 'STDRECORDPAYROLLITEMDEFAULTRATE', 'STDRECORDPAYROLLITEMEMPLOYEEPAID', 'STDRECORDPAYROLLITEMEXPENSEACCOUNT', 'STDRECORDPAYROLLITEMEXTERNALID', 'STDRECORDPAYROLLITEMINACTIVE', 'STDRECORDPAYROLLITEMLIABILITYACCOUNT', 'STDRECORDPAYROLLITEMLIMIT', 'STDRECORDPAYROLLITEMNAME', 'STDRECORDPAYROLLITEMSHOWINEMPLOYEECENTER', 'STDRECORDPAYROLLITEMSUBSIDIARY', 'STDRECORDPAYROLLITEMUSEDEFAULTS', 'STDRECORDPAYROLLITEMVENDOR', 'STDRECORDPCTCOMPLETEPROJECTREVENUERULEDESCRIPTION', 'STDRECORDPCTCOMPLETEPROJECTREVENUERULEISINACTIVE', 'STDRECORDPCTCOMPLETEPROJECTREVENUERULENAME', 'STDRECORDPCTCOMPLETEPROJECTREVENUERULEPROJECT', 'STDRECORDPCTCOMPLETEPROJECTREVENUERULEREVENUERECONCILED', 'STDRECORDPCTCOMPLETEPROJECTREVENUERULESERVICEITEM', 'STDRECORDPCTCOMPLETEPROJECTREVENUERULETOTALAMOUNTTORECOGNIZE', 'STDRECORDPERFORMANCEREVIEWEMPLOYEE', 'STDRECORDPERFORMANCEREVIEWEMPLOYEEAPPROVALCOMMENTS', 'STDRECORDPERFORMANCEREVIEWEMPLOYEEDUEDATE', 'STDRECORDPERFORMANCEREVIEWEMPLOYEESUBMITTEDDATE', 'STDRECORDPERFORMANCEREVIEWINTERNALID', 'STDRECORDPERFORMANCEREVIEWISINACTIVE', 'STDRECORDPERFORMANCEREVIEWREVIEWCOMPLETIONDATE', 'STDRECORDPERFORMANCEREVIEWREVIEWDUEDATE', 'STDRECORDPERFORMANCEREVIEWREVIEWERSUBMITTEDDATE', 'STDRECORDPERFORMANCEREVIEWREVIEWPERIODEND', 'STDRECORDPERFORMANCEREVIEWREVIEWPERIODSTART', 'STDRECORDPERFORMANCEREVIEWREVIEWSTATUS', 'STDRECORDPERFORMANCEREVIEWSCHEDULEEMPLOYEEDUEDATE', 'STDRECORDPERFORMANCEREVIEWSCHEDULELAUNCHDATE', 'STDRECORDPERFORMANCEREVIEWSCHEDULENAME', 'STDRECORDPERFORMANCEREVIEWSCHEDULEREVIEWDUEDATE', 'STDRECORDPERFORMANCEREVIEWSCHEDULEREVIEWPERIODEND', 'STDRECORDPERFORMANCEREVIEWSCHEDULEREVIEWPERIODSTART', 'STDRECORDPERFORMANCEREVIEWTEMPLATE', 'STDRECORDPICKSTRATEGYCUSTOMER', 'STDRECORDPICKSTRATEGYDESCRIPTION', 'STDRECORDPICKSTRATEGYEXTERNALID', 'STDRECORDPICKSTRATEGYINCLUDEINBOUNDSTAGINGBINS', 'STDRECORDPICKSTRATEGYINTERNALID', 'STDRECORDPICKSTRATEGYISINACTIVE', 'STDRECORDPICKSTRATEGYITEM', 'STDRECORDPICKSTRATEGYITEMCLASSIFICATION', 'STDRECORDPICKSTRATEGYITEMPROCESSFAMILY', 'STDRECORDPICKSTRATEGYITEMPROCESSGROUP', 'STDRECORDPICKSTRATEGYLOCATION', 'STDRECORDPICKSTRATEGYNAME', 'STDRECORDPICKSTRATEGYORDERTYPE', 'STDRECORDPICKSTRATEGYPRIORITY', 'STDRECORDPICKSTRATEGYTRANSACTIONTYPE', 'STDRECORDPICKSTRATEGYUNITSTYPE', 'STDRECORDPICKTASKEXTERNALID', 'STDRECORDPICKTASKINTERNALID', 'STDRECORDPICKTASKINVENTORYNUMBER', 'STDRECORDPICKTASKISINACTIVE', 'STDRECORDPICKTASKITEM', 'STDRECORDPICKTASKLOCATION', 'STDRECORDPICKTASKMEMO', 'STDRECORDPICKTASKPICKER', 'STDRECORDPICKTASKQUANTITY', 'STDRECORDPICKTASKTOTALPICKEDQUANTITY', 'STDRECORDPICKTASKTOTALREMAININGQUANTITY', 'STDRECORDPICKTASKUNITS', 'STDRECORDPICKTASKWAVE', 'STDRECORDPLANNEDORDERENDDATE', 'STDRECORDPLANNEDORDERFIRMED', 'STDRECORDPLANNEDORDERITEM', 'STDRECORDPLANNEDORDERLOCATION', 'STDRECORDPLANNEDORDERMEMO', 'STDRECORDPLANNEDORDERQUANTITY', 'STDRECORDPLANNEDORDERRELEASED', 'STDRECORDPLANNEDORDERSOURCELOCATION', 'STDRECORDPLANNEDORDERSTARTDATE', 'STDRECORDPLANNEDORDERSUPPLYPLANDEFINITION', 'STDRECORDPLANNEDORDERTRANSACTIONCREATED', 'STDRECORDPLANNEDORDERTRANSACTIONTYPE', 'STDRECORDPLANNINGITEMCATEGORYDESCRIPTION', 'STDRECORDPLANNINGITEMCATEGORYNAME', 'STDRECORDPLANNINGITEMGROUPDESCRIPTION', 'STDRECORDPLANNINGITEMGROUPNAME', 'STDRECORDPLANNINGRULEGROUPDESCRIPTION', 'STDRECORDPLANNINGRULEGROUPNAME', 'STDRECORDPOSITIONBUDGETSTATUS', 'STDRECORDPOSITIONCLASS', 'STDRECORDPOSITIONDEPARTMENT', 'STDRECORDPOSITIONDESCRIPTION', 'STDRECORDPOSITIONFULLTIMEEQUIVALENT', 'STDRECORDPOSITIONHCMJOB', 'STDRECORDPOSITIONHEADCOUNTSTATUS', 'STDRECORDPOSITIONINACTIVE', 'STDRECORDPOSITIONINCUMBENTSHEADCOUNT', 'STDRECORDPOSITIONINTERNALID', 'STDRECORDPOSITIONLOCATION', 'STDRECORDPOSITIONMAXIMUMHEADCOUNT', 'STDRECORDPOSITIONOPENREQUISITION', 'STDRECORDPOSITIONPOSITIONID', 'STDRECORDPOSITIONSUBSIDIARY', 'STDRECORDPOSITIONTITLE', 'STDRECORDPOSTINGDESCRIPTION', 'STDRECORDPOSTINGTYPE', 'STDRECORDPRICEBOOKCURRENCY', 'STDRECORDPRICEBOOKNAME', 'STDRECORDPRICEBOOKSUBSCRIPTIONPLAN', 'STDRECORDPRICELEVELDISCOUNTPCT', 'STDRECORDPRICELEVELEXTERNALID', 'STDRECORDPRICELEVELISINACTIVE', 'STDRECORDPRICELEVELISONLINE', 'STDRECORDPRICELEVELNAME', 'STDRECORDPRICEPLANCURRENCY', 'STDRECORDPRICEPLANINCLUDEDQUANTITY', 'STDRECORDPRICEPLANPRICEMODELTYPE', 'STDRECORDPRICINGGROUPEXTERNALID', 'STDRECORDPRICINGGROUPISINACTIVE', 'STDRECORDPRICINGGROUPNAME', 'STDRECORDPRODUCTBUILDVERSION', 'STDRECORDPROJECTTYPEEXTERNALID', 'STDRECORDPROJECTTYPEISINACTIVE', 'STDRECORDPROJECTTYPENAME', 'STDRECORDPROJECTTYPEPARENT', 'STDRECORDPROMOTIONCODEAPPLYDISCOUNTTO', 'STDRECORDPROMOTIONCODECANNOTBECOMBINED', 'STDRECORDPROMOTIONCODECODE', 'STDRECORDPROMOTIONCODECODEPATTERN', 'STDRECORDPROMOTIONCODEDESCRIPTION', 'STDRECORDPROMOTIONCODEDISCOUNT', 'STDRECORDPROMOTIONCODEDISPLAYLINEDISCOUNTS', 'STDRECORDPROMOTIONCODEENDDATE', 'STDRECORDPROMOTIONCODEEXCLUDEITEMS', 'STDRECORDPROMOTIONCODEEXTERNALID', 'STDRECORDPROMOTIONCODEFREESHIPMETHOD', 'STDRECORDPROMOTIONCODEISINACTIVE', 'STDRECORDPROMOTIONCODEISPUBLIC', 'STDRECORDPROMOTIONCODEMINIMUMORDERAMOUNT', 'STDRECORDPROMOTIONCODENAME', 'STDRECORDPROMOTIONCODERATE', 'STDRECORDPROMOTIONCODESTARTDATE', 'STDRECORDQUANTITYPRICINGSCHEDULEINACTIVE', 'STDRECORDQUANTITYPRICINGSCHEDULENAME', 'STDRECORDQUANTITYPRICINGSCHEDULEOVERALLQUANTITYPRICINGTYPE', 'STDRECORDQUANTITYPRICINGSCHEDULEUSEMARGINALRATES', 'STDRECORDRECALCADJUSTPERIODOFFSET', 'STDRECORDRECORDFIELDTYPE', 'STDRECORDRECORDISLIST', 'STDRECORDRECORDSEARCHTYPE', 'STDRECORDRECRUITER', 'STDRECORDREFORECASTMETHOD', 'STDRECORDREQUISITIONSTATUS', 'STDRECORDREVENUEELEMENTALTERNATEQUANTITY', 'STDRECORDREVENUEELEMENTALTERNATEUNITS', 'STDRECORDREVENUEELEMENTCREATEREVENUEPLANSON', 'STDRECORDREVENUEELEMENTFORECASTENDDATE', 'STDRECORDREVENUEELEMENTFORECASTSTARTDATE', 'STDRECORDREVENUEELEMENTREFERENCEID', 'STDRECORDREVENUEELEMENTREVENUEALLOCATIONGROUP', 'STDRECORDREVENUEELEMENTREVRECENDDATE', 'STDRECORDREVENUEELEMENTREVRECSTARTDATE', 'STDRECORDREVENUEELEMENTTERMINDAYS', 'STDRECORDREVENUEELEMENTTERMINMONTHS', 'STDRECORDREVENUERECOGNITIONRULE', 'STDRECORDREVENUERECOGNITIONSCHEDULEAMORTIZATIONPERIOD', 'STDRECORDREVENUERECOGNITIONSCHEDULEAMORTIZATIONTYPE', 'STDRECORDREVENUERECOGNITIONSCHEDULEINITIALAMOUNT', 'STDRECORDREVENUERECOGNITIONSCHEDULEISINACTIVE', 'STDRECORDREVENUERECOGNITIONSCHEDULEISPUBLIC', 'STDRECORDREVENUERECOGNITIONSCHEDULEJOB', 'STDRECORDREVENUERECOGNITIONSCHEDULENAME', 'STDRECORDREVENUERECOGNITIONSCHEDULEPERIODOFFSET', 'STDRECORDREVENUERECOGNITIONSCHEDULERECURRENCETYPE', 'STDRECORDREVENUERECOGNITIONSCHEDULEREVRECOFFSET', 'STDRECORDREVRECENDDATE', 'STDRECORDREVRECSTARTDATE', 'STDRECORDSALESCHANNELDESCRIPTION', 'STDRECORDSALESCHANNELEXTERNALID', 'STDRECORDSALESCHANNELID', 'STDRECORDSALESCHANNELNAME', 'STDRECORDSALESCHANNELONLYUSERESERVATIONASSUPPLY', 'STDRECORDSALESCHANNELORDERPRIORITY', 'STDRECORDSALESREADINESSISINACTIVE', 'STDRECORDSALESREADINESSNAME', 'STDRECORDSALESROLEDESCRIPTION', 'STDRECORDSALESROLEEXTERNALID', 'STDRECORDSALESROLEISINACTIVE', 'STDRECORDSALESROLEISSALESREP', 'STDRECORDSALESROLENAME', 'STDRECORDSAVEDSEARCHRECORDTYPE', 'STDRECORDSAVEDSEARCHSCRIPTEDRECORDTYPE', 'STDRECORDSAVEDSEARCHTYPE', 'STDRECORDSCRIPTEDRECORDBASETYPE', 'STDRECORDSCRIPTEDRECORDLISTRECORD', 'STDRECORDSCRIPTEDRECORDSCRIPTID', 'STDRECORDSCRIPTEDRECORDSEARCHTYPE', 'STDRECORDSTATECOUNTRY', 'STDRECORDSTUDENTRECORDADDRESS', 'STDRECORDSTUDENTRECORDCITYZIP', 'STDRECORDSTUDENTRECORDCLEVEL', 'STDRECORDSTUDENTRECORDCSCHOOL', 'STDRECORDSTUDENTRECORDDOB', 'STDRECORDSTUDENTRECORDFANAME', 'STDRECORDSTUDENTRECORDFEE', 'STDRECORDSTUDENTRECORDFEMAIL', 'STDRECORDSTUDENTRECORDFNAME', 'STDRECORDSTUDENTRECORDGDATE', 'STDRECORDSTUDENTRECORDGPATOTAL', 'STDRECORDSTUDENTRECORDID', 'STDRECORDSTUDENTRECORDINACTIVE', 'STDRECORDSTUDENTRECORDLNAME', 'STDRECORDSTUDENTRECORDMNAME', 'STDRECORDSTUDENTRECORDSEMESTER', 'STDRECORDSTUDENTRECORDSSCORE', 'STDRECORDSTUDENTRECORDSTARTDATE', 'STDRECORDSTUDENTRECORDSTUDENTID', 'STDRECORDSTUDENTRECORDSTUDEPARTMENT', 'STDRECORDSTUDENTRECORDSTUEMAIL', 'STDRECORDSTUDENTRECORDSTUNATIONALITY', 'STDRECORDSTUDENTRECORDTSCORE', 'STDRECORDSUBSCRIPTIONADVANCERENEWALPERIODNUMBER', 'STDRECORDSUBSCRIPTIONADVANCERENEWALPERIODUNIT', 'STDRECORDSUBSCRIPTIONAUTONAME', 'STDRECORDSUBSCRIPTIONAUTORENEWAL', 'STDRECORDSUBSCRIPTIONBILLINGACCOUNT', 'STDRECORDSUBSCRIPTIONBILLINGACCOUNTSTARTDATE', 'STDRECORDSUBSCRIPTIONBILLINGSCHEDULE', 'STDRECORDSUBSCRIPTIONCLASS', 'STDRECORDSUBSCRIPTIONCURRENCY', 'STDRECORDSUBSCRIPTIONCUSTOMER', 'STDRECORDSUBSCRIPTIONCUSTOMFORM', 'STDRECORDSUBSCRIPTIONDEFAULTRENEWALMETHOD', 'STDRECORDSUBSCRIPTIONDEFAULTRENEWALPLAN', 'STDRECORDSUBSCRIPTIONDEFAULTRENEWALTERM', 'STDRECORDSUBSCRIPTIONDEFAULTRENEWALTRANTYPE', 'STDRECORDSUBSCRIPTIONDEPARTMENT', 'STDRECORDSUBSCRIPTIONENDDATE', 'STDRECORDSUBSCRIPTIONESTIMATEDREVRECENDDATE', 'STDRECORDSUBSCRIPTIONFREQUENCY', 'STDRECORDSUBSCRIPTIONIDNUMBER', 'STDRECORDSUBSCRIPTIONINITIALTERM', 'STDRECORDSUBSCRIPTIONLASTBILLCYCLEDATE', 'STDRECORDSUBSCRIPTIONLASTBILLDATE', 'STDRECORDSUBSCRIPTIONLINECLASS', 'STDRECORDSUBSCRIPTIONLINECUSTOMFORM', 'STDRECORDSUBSCRIPTIONLINEDEPARTMENT', 'STDRECORDSUBSCRIPTIONLINEDISCOUNT', 'STDRECORDSUBSCRIPTIONLINEENDDATE', 'STDRECORDSUBSCRIPTIONLINEESTIMATEDREVRECENDDATE', 'STDRECORDSUBSCRIPTIONLINEINCLUDEDUSAGE', 'STDRECORDSUBSCRIPTIONLINEITEM', 'STDRECORDSUBSCRIPTIONLINELINENUMBER', 'STDRECORDSUBSCRIPTIONLINELOCATION', 'STDRECORDSUBSCRIPTIONLINEPLANLINE', 'STDRECORDSUBSCRIPTIONLINEPRICEINTERVALFREQUENCY', 'STDRECORDSUBSCRIPTIONLINEPRICEPLAN', 'STDRECORDSUBSCRIPTIONLINEPRORATEENDDATE', 'STDRECORDSUBSCRIPTIONLINEPRORATESTARTDATE', 'STDRECORDSUBSCRIPTIONLINEQUANTITY', 'STDRECORDSUBSCRIPTIONLINERECURRENCESTARTDATE', 'STDRECORDSUBSCRIPTIONLINEREVRECOPTION', 'STDRECORDSUBSCRIPTIONLINESTARTDATE', 'STDRECORDSUBSCRIPTIONLINESTATUS', 'STDRECORDSUBSCRIPTIONLINESUBSCRIPTION', 'STDRECORDSUBSCRIPTIONLINESUBSCRIPTIONLINETYPE', 'STDRECORDSUBSCRIPTIONLINESUBSCRIPTIONPLAN', 'STDRECORDSUBSCRIPTIONLINETOTAL', 'STDRECORDSUBSCRIPTIONLINEUSAGEMULTIPLIERLINE', 'STDRECORDSUBSCRIPTIONLOCATION', 'STDRECORDSUBSCRIPTIONNAME', 'STDRECORDSUBSCRIPTIONNEXTBILLCYCLEDATE', 'STDRECORDSUBSCRIPTIONNEXTRENEWALSTARTDATE', 'STDRECORDSUBSCRIPTIONPLAN', 'STDRECORDSUBSCRIPTIONSTARTDATE', 'STDRECORDSUBSCRIPTIONSTATUS', 'STDRECORDSUBSCRIPTIONSUBSIDIARY', 'STDRECORDSUBSIDIARY', 'STDRECORDSUBSIDIARYADDR1', 'STDRECORDSUBSIDIARYADDR2', 'STDRECORDSUBSIDIARYADDRESSEE', 'STDRECORDSUBSIDIARYADDRPHONE', 'STDRECORDSUBSIDIARYADDRTEXT', 'STDRECORDSUBSIDIARYATTENTION', 'STDRECORDSUBSIDIARYCITY', 'STDRECORDSUBSIDIARYCOUNTRY', 'STDRECORDSUBSIDIARYCURRENCY', 'STDRECORDSUBSIDIARYDEFAULTACCTCORPCARDEXP', 'STDRECORDSUBSIDIARYEDITION', 'STDRECORDSUBSIDIARYEMAIL', 'STDRECORDSUBSIDIARYEXTERNALID', 'STDRECORDSUBSIDIARYFAX', 'STDRECORDSUBSIDIARYFEDERALIDNUMBER', 'STDRECORDSUBSIDIARYFISCALCALENDAR', 'STDRECORDSUBSIDIARYGLIMPACTLOCKING', 'STDRECORDSUBSIDIARYINTERNALTRANPREFIX', 'STDRECORDSUBSIDIARYISELIMINATION', 'STDRECORDSUBSIDIARYISINACTIVE', 'STDRECORDSUBSIDIARYLANGUAGELOCALE', 'STDRECORDSUBSIDIARYLEGALNAME', 'STDRECORDSUBSIDIARYLOGO', 'STDRECORDSUBSIDIARYMAINADDRESS', 'STDRECORDSUBSIDIARYMAINADDRESS_TEXT', 'STDRECORDSUBSIDIARYNAME', 'STDRECORDSUBSIDIARYOVERRIDE', 'STDRECORDSUBSIDIARYPAGELOGO', 'STDRECORDSUBSIDIARYPARENT', 'STDRECORDSUBSIDIARYPURCHASEORDERAMOUNT', 'STDRECORDSUBSIDIARYPURCHASEORDERQUANTITY', 'STDRECORDSUBSIDIARYPURCHASEORDERQUANTITYDIFF', 'STDRECORDSUBSIDIARYRECEIPTAMOUNT', 'STDRECORDSUBSIDIARYRECEIPTQUANTITY', 'STDRECORDSUBSIDIARYRECEIPTQUANTITYDIFF', 'STDRECORDSUBSIDIARYRETURNADDR', 'STDRECORDSUBSIDIARYRETURNADDRESS', 'STDRECORDSUBSIDIARYRETURNADDRESS1', 'STDRECORDSUBSIDIARYRETURNADDRESS2', 'STDRECORDSUBSIDIARYRETURNADDRESS_TEXT', 'STDRECORDSUBSIDIARYRETURNCITY', 'STDRECORDSUBSIDIARYRETURNCOUNTRY', 'STDRECORDSUBSIDIARYRETURNSTATE', 'STDRECORDSUBSIDIARYRETURNZIP', 'STDRECORDSUBSIDIARYSHIPADDR', 'STDRECORDSUBSIDIARYSHIPADDRESS1', 'STDRECORDSUBSIDIARYSHIPADDRESS2', 'STDRECORDSUBSIDIARYSHIPCITY', 'STDRECORDSUBSIDIARYSHIPCOUNTRY', 'STDRECORDSUBSIDIARYSHIPPINGADDRESS', 'STDRECORDSUBSIDIARYSHIPPINGADDRESS_TEXT', 'STDRECORDSUBSIDIARYSHIPSTATE', 'STDRECORDSUBSIDIARYSHIPZIP', 'STDRECORDSUBSIDIARYSHOWSUBSIDIARYNAME', 'STDRECORDSUBSIDIARYSSNORTIN', 'STDRECORDSUBSIDIARYSTATE', 'STDRECORDSUBSIDIARYSTATE1TAXNUMBER', 'STDRECORDSUBSIDIARYTAXFISCALCALENDAR', 'STDRECORDSUBSIDIARYTRANPREFIX', 'STDRECORDSUBSIDIARYURL', 'STDRECORDSUBSIDIARYZIP', 'STDRECORDSUPPLYCHAINSNAPSHOTDATERUN', 'STDRECORDSUPPLYCHAINSNAPSHOTFUTUREHORIZON', 'STDRECORDSUPPLYCHAINSNAPSHOTFUTUREHORIZONDATE', 'STDRECORDSUPPLYCHAINSNAPSHOTITEM', 'STDRECORDSUPPLYCHAINSNAPSHOTMEMO', 'STDRECORDSUPPLYCHAINSNAPSHOTPASTHORIZON', 'STDRECORDSUPPLYCHAINSNAPSHOTPASTHORIZONDATE', 'STDRECORDSUPPLYCHAINSNAPSHOTREPLENISHMENTMETHOD', 'STDRECORDSUPPLYCHAINSNAPSHOTSIMULATIONAUTONAME', 'STDRECORDSUPPLYCHAINSNAPSHOTSIMULATIONDEMANDENTITY', 'STDRECORDSUPPLYCHAINSNAPSHOTSIMULATIONDEMANDLOCATION', 'STDRECORDSUPPLYCHAINSNAPSHOTSIMULATIONDEMANDLOCATIONDATE', 'STDRECORDSUPPLYCHAINSNAPSHOTSIMULATIONDEMANDLOCATIONSUBSIDIARY', 'STDRECORDSUPPLYCHAINSNAPSHOTSIMULATIONDOCNUMCREATEDFROM', 'STDRECORDSUPPLYCHAINSNAPSHOTSIMULATIONISFORRESCHEDULE', 'STDRECORDSUPPLYCHAINSNAPSHOTSIMULATIONITEMNAMENUMBER', 'STDRECORDSUPPLYCHAINSNAPSHOTSIMULATIONMEMO', 'STDRECORDSUPPLYCHAINSNAPSHOTSIMULATIONOWNER', 'STDRECORDSUPPLYCHAINSNAPSHOTSIMULATIONQUANTITY', 'STDRECORDSUPPLYCHAINSNAPSHOTSIMULATIONSIMULATIONNUMBER', 'STDRECORDSUPPLYCHAINSNAPSHOTSIMULATIONSTATUS', 'STDRECORDSUPPLYCHAINSNAPSHOTSIMULATIONSUPPLYENTITY', 'STDRECORDSUPPLYCHAINSNAPSHOTSIMULATIONSUPPLYLOCATION', 'STDRECORDSUPPLYCHAINSNAPSHOTSIMULATIONSUPPLYLOCATIONDATE', 'STDRECORDSUPPLYCHAINSNAPSHOTSIMULATIONSUPPLYLOCATIONSUBSIDIARY', 'STDRECORDSUPPLYCHAINSNAPSHOTSIMULATIONTRANSACTIONTYPE', 'STDRECORDSUPPLYCHAINSNAPSHOTSTOCKUNIT', 'STDRECORDSUPPLYCHANGEORDERAPPROVALSTATUS', 'STDRECORDSUPPLYCHANGEORDERCHANGEACTION', 'STDRECORDSUPPLYCHANGEORDERCURRENTTRANSACTIONDATE', 'STDRECORDSUPPLYCHANGEORDERITEM', 'STDRECORDSUPPLYCHANGEORDERLOCATION', 'STDRECORDSUPPLYCHANGEORDERMEMO', 'STDRECORDSUPPLYCHANGEORDERNEWDATE', 'STDRECORDSUPPLYCHANGEORDERNEXTAPPROVER', 'STDRECORDSUPPLYCHANGEORDERORIGINALDATE', 'STDRECORDSUPPLYCHANGEORDERSOURCELOCATION', 'STDRECORDSUPPLYCHANGEORDERSUPPLYPLANDEFINITION', 'STDRECORDSUPPLYCHANGEORDERTRANSACTION', 'STDRECORDSUPPLYPLANDEFINITIONDESCRIPTION', 'STDRECORDSUPPLYPLANDEFINITIONHORIZONINDAYS', 'STDRECORDSUPPLYPLANDEFINITIONITEMGROUP', 'STDRECORDSUPPLYPLANDEFINITIONNAME', 'STDRECORDSUPPLYPLANDEFINITIONRULEGROUP', 'STDRECORDTARGETHIREDATE', 'STDRECORDTAXPERIODCLOSED', 'STDRECORDTAXPERIODEND', 'STDRECORDTAXPERIODISADJUST', 'STDRECORDTAXPERIODISQUARTER', 'STDRECORDTAXPERIODISYEAR', 'STDRECORDTAXPERIODOPEN', 'STDRECORDTAXPERIODPARENT', 'STDRECORDTAXPERIODPERIODNAME', 'STDRECORDTAXPERIODSTART', 'STDRECORDTERMDAYDISCOUNTEXPIRES', 'STDRECORDTERMDAYOFMONTHNETDUE', 'STDRECORDTERMDAYSUNTILEXPIRY', 'STDRECORDTERMDAYSUNTILNETDUE', 'STDRECORDTERMDISCOUNTPERCENT', 'STDRECORDTERMDISCOUNTPERCENTDATEDRIVEN', 'STDRECORDTERMDUENEXTMONTHIFWITHINDAYS', 'STDRECORDTERMEXTERNALID', 'STDRECORDTERMINATIONCATEGORY', 'STDRECORDTERMINATIONREASON', 'STDRECORDTERMINATIONREASONINACTIVE', 'STDRECORDTERMISINACTIVE', 'STDRECORDTERMNAME', 'STDRECORDTERMPREFERRED', 'STDRECORDTIMEENTRYBILLABLE', 'STDRECORDTIMEENTRYCASETASKEVENT', 'STDRECORDTIMEENTRYCLASS', 'STDRECORDTIMEENTRYCUSTOMER', 'STDRECORDTIMEENTRYCUSTOMFORM', 'STDRECORDTIMEENTRYDAY', 'STDRECORDTIMEENTRYDEPARTMENT', 'STDRECORDTIMEENTRYDURATION', 'STDRECORDTIMEENTRYEMPLOYEE', 'STDRECORDTIMEENTRYEXEMPT', 'STDRECORDTIMEENTRYEXTERNALID', 'STDRECORDTIMEENTRYITEM', 'STDRECORDTIMEENTRYLOCATION', 'STDRECORDTIMEENTRYLOCKRATE', 'STDRECORDTIMEENTRYMEMO', 'STDRECORDTIMEENTRYNEXTAPPROVER', 'STDRECORDTIMEENTRYPAIDEXTERNALLY', 'STDRECORDTIMEENTRYPAYROLLITEM', 'STDRECORDTIMEENTRYPAYROLLWORKPLACE', 'STDRECORDTIMEENTRYPOSTED', 'STDRECORDTIMEENTRYPRODUCTIVE', 'STDRECORDTIMEENTRYRATE', 'STDRECORDTIMEENTRYREMAININGTIMETOCHARGE', 'STDRECORDTIMEENTRYSTATUS', 'STDRECORDTIMEENTRYSUBSIDIARY', 'STDRECORDTIMEENTRYTYPE', 'STDRECORDTIMEENTRYUTILIZED', 'STDRECORDTIMEOFFCHANGEAMOUNT', 'STDRECORDTIMEOFFCHANGEDATEAPPLIED', 'STDRECORDTIMEOFFCHANGEDESCRIPTION', 'STDRECORDTIMEOFFCHANGEEMPLOYEE', 'STDRECORDTIMEOFFCHANGEHOURLYACCRUALRATE', 'STDRECORDTIMEOFFCHANGEINTERNALID', 'STDRECORDTIMEOFFCHANGETIMEOFFTIMEUNIT', 'STDRECORDTIMEOFFCHANGETIMEOFFTYPE', 'STDRECORDTIMEOFFPLANCLASS', 'STDRECORDTIMEOFFPLANDEPARTMENT', 'STDRECORDTIMEOFFPLANINTERNALID', 'STDRECORDTIMEOFFPLANISINACTIVE', 'STDRECORDTIMEOFFPLANISINCLUDEFUTUREACCRUALS', 'STDRECORDTIMEOFFPLANLOCATION', 'STDRECORDTIMEOFFPLANNAME', 'STDRECORDTIMEOFFPLANSTARTMONTH', 'STDRECORDTIMEOFFPLANSUBSIDIARY', 'STDRECORDTIMEOFFREQUESTAPPROVALSTATUS', 'STDRECORDTIMEOFFREQUESTEMPLOYEE', 'STDRECORDTIMEOFFREQUESTENDDATE', 'STDRECORDTIMEOFFREQUESTINTERNALID', 'STDRECORDTIMEOFFREQUESTMESSAGE', 'STDRECORDTIMEOFFREQUESTSTARTDATE', 'STDRECORDTIMEOFFRULEACCRUALFREQUENCY', 'STDRECORDTIMEOFFRULEACCRUALLIMIT', 'STDRECORDTIMEOFFRULEACCRUALTYPE', 'STDRECORDTIMEOFFRULEACCRUESBASEDON', 'STDRECORDTIMEOFFRULEALLOWCARRYOVER', 'STDRECORDTIMEOFFRULECARRYOVEREXPIRYMONTH', 'STDRECORDTIMEOFFRULEDAYOFNEXTACCRUAL', 'STDRECORDTIMEOFFRULEDAYOFWEEKOFNEXTACCRUAL', 'STDRECORDTIMEOFFRULEENTITLEMENT', 'STDRECORDTIMEOFFRULEEXPIREUNUSEDCARRYOVER', 'STDRECORDTIMEOFFRULEHOURLYACCRUALRATE', 'STDRECORDTIMEOFFRULEINTERNALID', 'STDRECORDTIMEOFFRULEISAUTOMATICALLYACCRUE', 'STDRECORDTIMEOFFRULEMAXIMUMCARRYOVER', 'STDRECORDTIMEOFFRULEMINIMUMTENURE', 'STDRECORDTIMEOFFRULERESETNEGATIVEBALANCES', 'STDRECORDTIMEOFFRULESETACCRUALLIMIT', 'STDRECORDTIMEOFFRULESHOULDLIMITCARRYOVER', 'STDRECORDTIMEOFFRULETIMEOFFPLAN', 'STDRECORDTIMEOFFRULETIMEOFFTYPE', 'STDRECORDTIMEOFFTYPECOLOR', 'STDRECORDTIMEOFFTYPEDISPLAYNAME', 'STDRECORDTIMEOFFTYPEINTERNALID', 'STDRECORDTIMEOFFTYPEISINACTIVE', 'STDRECORDTIMEOFFTYPEISTRACKONLY', 'STDRECORDTIMEOFFTYPEMINIMUMINCREMENT', 'STDRECORDTIMEOFFTYPENAME', 'STDRECORDTIMEOFFTYPEPAYROLLITEM', 'STDRECORDTIMEOFFTYPEPROJECT', 'STDRECORDTIMEOFFTYPEPROJECTTASK', 'STDRECORDTIMESHEETALLOCATEDHOURS', 'STDRECORDTIMESHEETAPPROVALSTATUS', 'STDRECORDTIMESHEETCUSTOMFORM', 'STDRECORDTIMESHEETEMPLOYEE', 'STDRECORDTIMESHEETENDDATE', 'STDRECORDTIMESHEETLOCKSTATUS', 'STDRECORDTIMESHEETPLANNEDHOURS', 'STDRECORDTIMESHEETREJECTEDHOURS', 'STDRECORDTIMESHEETSTARTDATE', 'STDRECORDTIMESHEETSUBMITTEDHOURS', 'STDRECORDTIMESHEETTOTALHOURS', 'STDRECORDTIMESHEETWORKCALENDARHOURS', 'STDRECORDTITLE', 'STDRECORDUNITSTYPEISINACTIVE', 'STDRECORDUNITSTYPENAME', 'STDRECORDUNLOCKEDTIMEPERIODENDDATE', 'STDRECORDUNLOCKEDTIMEPERIODENTITY', 'STDRECORDUNLOCKEDTIMEPERIODISINACTIVE', 'STDRECORDUNLOCKEDTIMEPERIODSTARTDATE', 'STDRECORDUNLOCKEDTIMEPERIODVALIDUNTIL', 'STDRECORDUSAGECUSTOMER', 'STDRECORDUSAGEDATE', 'STDRECORDUSAGEEXTERNALID', 'STDRECORDUSAGEITEM', 'STDRECORDUSAGEMEMO', 'STDRECORDUSAGEQUANTITY', 'STDRECORDUSAGESUBSCRIPTION', 'STDRECORDUSAGESUBSCRIPTIONLINE', 'STDRECORDUSAGESUBSCRIPTIONPLAN', 'STDRECORDVENDORCATEGORYEXTERNALID', 'STDRECORDVENDORCATEGORYISINACTIVE', 'STDRECORDVENDORCATEGORYISTAXAGENCY', 'STDRECORDVENDORCATEGORYNAME', 'STDRECORDVENDORSUBSIDIARYRELATIONSHIPCREDITLIMIT', 'STDRECORDVENDORSUBSIDIARYRELATIONSHIPENTITY', 'STDRECORDVENDORSUBSIDIARYRELATIONSHIPISPRIMARYSUB', 'STDRECORDVENDORSUBSIDIARYRELATIONSHIPSUBSIDIARY', 'STDRECORDVENDORSUBSIDIARYRELATIONSHIPTAXITEM', 'STDRECORDVENDORSUBSIDIARYRELATIONSHIPVENDOR', 'STDRECORDVERSIONPRODUCT', 'STDRECORDWEBSITESITETYPE', 'STDRECORDWINLOSSREASONEXTERNALID', 'STDRECORDWINLOSSREASONISINACTIVE', 'STDRECORDWINLOSSREASONNAME', 'STDRECORDWORKASSIGNMENTASSIGNEE', 'STDRECORDWORKASSIGNMENTBILLINGCLASS', 'STDRECORDWORKASSIGNMENTCLASS', 'STDRECORDWORKASSIGNMENTCUSTOMER', 'STDRECORDWORKASSIGNMENTDEADLINE', 'STDRECORDWORKASSIGNMENTDEPARTMENT', 'STDRECORDWORKASSIGNMENTENDDATE', 'STDRECORDWORKASSIGNMENTESTIMATEDHOURSATCOMPLETION', 'STDRECORDWORKASSIGNMENTESTIMATEDHOURSTOCOMPLETE', 'STDRECORDWORKASSIGNMENTEXTERNALID', 'STDRECORDWORKASSIGNMENTID', 'STDRECORDWORKASSIGNMENTISINACTIVE', 'STDRECORDWORKASSIGNMENTLOCATION', 'STDRECORDWORKASSIGNMENTPLANNEDHOURS', 'STDRECORDWORKASSIGNMENTPROJECT', 'STDRECORDWORKASSIGNMENTPROJECTTASK', 'STDRECORDWORKASSIGNMENTSERVICEITEM', 'STDRECORDWORKASSIGNMENTSTARTDATE', 'STDRECORDWORKASSIGNMENTSTATUS', 'STDRECORDWORKASSIGNMENTSUBSIDIARY', 'STDRECORDWORKASSIGNMENTTITLE', 'STDRECORDWORKCALENDARCOMMENTS', 'STDRECORDWORKCALENDARFRIDAY', 'STDRECORDWORKCALENDARISDEFAULT', 'STDRECORDWORKCALENDARMONDAY', 'STDRECORDWORKCALENDARNAME', 'STDRECORDWORKCALENDARSATURDAY', 'STDRECORDWORKCALENDARSTARTHOUR', 'STDRECORDWORKCALENDARSUNDAY', 'STDRECORDWORKCALENDARTHURSDAY', 'STDRECORDWORKCALENDARTUESDAY', 'STDRECORDWORKCALENDARWEDNESDAY', 'STDRECORDWORKCALENDARWORKHOURSPERDAY', 'STDRECORDWORKFLOWDESCRIPTION', 'STDRECORDWORKFLOWISINACTIVE', 'STDRECORDWORKFLOWOWNER', 'STDRECORDWORKFLOWRECORDTYPE', 'STDRECORDWORKFLOWRELEASESTATUS', 'STDRECORDWORKFLOWRUNASADMIN', 'STDRECORDWORKFLOWSAVEDSEARCH', 'STDRECORDWORKFLOWSCRIPTID', 'STDRECORDWORKFLOWTRIGGERCONDITIONTEXT', 'STDRECORDWORKFLOWTRIGGERONCREATE', 'STDRECORDWORKFLOWTRIGGERONUPDATE', 'STDRECORDWORKFLOWTRIGGERTYPE', 'STDRECORDWORKFLOWWORKFLOWNAME', 'STDRECORDWORKPLACEADDR1', 'STDRECORDWORKPLACEADDR2', 'STDRECORDWORKPLACEADDRESSEE', 'STDRECORDWORKPLACEADDRPHONE', 'STDRECORDWORKPLACEADDRTEXT', 'STDRECORDWORKPLACEATTENTION', 'STDRECORDWORKPLACECITY', 'STDRECORDWORKPLACECOUNTRY', 'STDRECORDWORKPLACEEXTERNALID', 'STDRECORDWORKPLACEISINACTIVE', 'STDRECORDWORKPLACEMAINADDRESS_TEXT', 'STDRECORDWORKPLACENAME', 'STDRECORDWORKPLACEOVERRIDE', 'STDRECORDWORKPLACEPARENT', 'STDRECORDWORKPLACESTATE', 'STDRECORDWORKPLACESUBSIDIARY', 'STDRECORDWORKPLACEZIP', 'STDRECORDZONEDESCRIPTION', 'STDRECORDZONEEXTERNALID', 'STDRECORDZONEINTERNALID', 'STDRECORDZONEISINACTIVE', 'STDRECORDZONELOCATION', 'STDRECORDZONENAME', 'STDRECURRINGBILL', 'STDREGIONFULFILLMENTPRIORITYLEVEL', 'STDREGIONINACTIVE', 'STDREGIONNAME', 'STDSUBSCRCHANGEORDERACTION', 'STDSUBSCRCHANGEORDERAPPROVALDATE', 'STDSUBSCRCHANGEORDERAPPROVALSTATUS', 'STDSUBSCRCHANGEORDERAUTONAME', 'STDSUBSCRCHANGEORDERBILLINGACCOUNT', 'STDSUBSCRCHANGEORDERCREATEDBY', 'STDSUBSCRCHANGEORDERCUSTOMER', 'STDSUBSCRCHANGEORDERCUSTOMFORM', 'STDSUBSCRCHANGEORDERDATECREATED', 'STDSUBSCRCHANGEORDEREFFECTIVEDATE', 'STDSUBSCRCHANGEORDEREXTERNALID', 'STDSUBSCRCHANGEORDERIDNUMBER', 'STDSUBSCRCHANGEORDERMEMO', 'STDSUBSCRCHANGEORDERREACTIVATIONOPTION', 'STDSUBSCRCHANGEORDERRENEWALENDDATE', 'STDSUBSCRCHANGEORDERRENEWALMETHOD', 'STDSUBSCRCHANGEORDERRENEWALPLAN', 'STDSUBSCRCHANGEORDERRENEWALSTARTDATE', 'STDSUBSCRCHANGEORDERRENEWALTERM', 'STDSUBSCRCHANGEORDERRENEWALTRANTYPE', 'STDSUBSCRCHANGEORDERREQUESTOFFCYCLEINVOICE', 'STDSUBSCRCHANGEORDERREQUESTOR', 'STDSUBSCRCHANGEORDERSUBSCRIPTION', 'STDSUBSCRCHANGEORDERSUBSCRIPTIONPLAN', 'STDSUBSCRCHANGEORDERSUBSIDIARY', 'STDTIMEAPPROVALSTATUS', 'STDTIMEBILLABLE', 'STDTIMEBILLINGSUBSIDIARY', 'STDTIMECLASS', 'STDTIMECUSTOMER', 'STDTIMECUSTOMFORM', 'STDTIMEDATE', 'STDTIMEDEPARTMENT', 'STDTIMEDURATION', 'STDTIMEEMPLOYEE', 'STDTIMEEVENT', 'STDTIMEEXEMPT', 'STDTIMEEXTERNALID', 'STDTIMEITEM', 'STDTIMELOCATION', 'STDTIMELOCKRATE', 'STDTIMEMEMO', 'STDTIMENEXTAPPROVER', 'STDTIMEOUTSIDEPROJECTPLAN', 'STDTIMEPAIDEXTERNALLY', 'STDTIMEPAYROLLITEM', 'STDTIMEPAYROLLWORKPLACE', 'STDTIMEPOSTED', 'STDTIMEPRODUCTIVE', 'STDTIMERATE', 'STDTIMEREJECTIONNOTE', 'STDTIMEREMAININGTIMETOCHARGE', 'STDTIMESUBSIDIARY', 'STDTIMESUPERVISORAPPROVAL', 'STDTIMETIMEMODIFIED', 'STDTIMETIMEOFFTYPE', 'STDTIMEUTILIZED', 'STDTIMEVENDOR', 'STDTIMEWORKASSIGNMENT', 'STDUSERCLASS', 'STDUSERDEPARTMENT', 'STDUSERLOCATION', 'STDUSERROLE', 'STDUSERSUBSIDIARY', 'STDUSERUSER'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_standard_fieldElemID.name],
  }),
  generic_standard_recordtype: new PrimitiveType({
    elemID: generic_standard_recordtypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCOUNT', 'ACCOUNTINGBOOK', 'ACCOUNTINGCONTEXT', 'ACCOUNTINGPERIOD', 'ADVINTERCOMPANYJOURNALENTRY', 'ALLOCATIONSCHEDULE', 'AMORTIZATIONSCHEDULE', 'AMORTIZATIONTEMPLATE', 'ASSEMBLYBUILD', 'ASSEMBLYITEM', 'ASSEMBLYUNBUILD', 'AUTOMATEDCLEARINGHOUSE', 'BALANCETRXBYSEGMENTS', 'BILLINGACCOUNT', 'BILLINGCLASS', 'BILLINGRATECARD', 'BILLINGREVENUEEVENT', 'BILLINGSCHEDULE', 'BIN', 'BINTRANSFER', 'BINWORKSHEET', 'BLANKETPURCHASEORDER', 'BOM', 'BOMREVISION', 'BONUS', 'BONUSTYPE', 'BUDGETEXCHANGERATE', 'BULKOWNERSHIPTRANSFER', 'BUNDLEINSTALLATIONSCRIPT', 'CALENDAREVENT', 'CAMPAIGN', 'CAMPAIGNRESPONSE', 'CAMPAIGNTEMPLATE', 'CARDHOLDERAUTHENTICATION', 'CASHREFUND', 'CASHSALE', 'CHARGE', 'CHARGERULE', 'CHECK', 'CLASSIFICATION', 'CLIENTSCRIPT', 'CMSCONTENT', 'CMSCONTENTTYPE', 'CMSPAGE', 'CMSPAGETYPE', 'COMMERCECATEGORY', 'COMMERCESEARCHBOOST', 'COMMERCESEARCHBOOSTTYPE', 'COMPETITOR', 'COMPONENTAREA', 'CONSOLIDATEDEXCHANGERATE', 'CONTACT', 'CONTACTCATEGORY', 'CONTACTROLE', 'COSTCATEGORY', 'COUPONCODE', 'CREDITCARDCHARGE', 'CREDITCARDREFUND', 'CREDITMEMO', 'CURRENCY', 'CUSTOMER', 'CUSTOMERCATEGORY', 'CUSTOMERDEPOSIT', 'CUSTOMERMESSAGE', 'CUSTOMERPAYMENT', 'CUSTOMERPAYMENTAUTHORIZATION', 'CUSTOMERREFUND', 'CUSTOMERSTATUS', 'CUSTOMERSUBSIDIARYRELATIONSHIP', 'DEPARTMENT', 'DEPOSIT', 'DEPOSITAPPLICATION', 'DESCRIPTIONITEM', 'DISCOUNTITEM', 'DOWNLOADITEM', 'DRIVERSLICENSE', 'EMAILTEMPLATE', 'EMPLOYEE', 'EMPLOYEECHANGEREQUEST', 'EMPLOYEECHANGEREQUESTTYPE', 'EMPLOYEESTATUS', 'EMPLOYEETYPE', 'ENTITYACCOUNTMAPPING', 'ESTIMATE', 'EXPENSEAMORTIZATIONEVENT', 'EXPENSECATEGORY', 'EXPENSEPLAN', 'EXPENSEREPORT', 'FAIRVALUEPRICE', 'FINANCIALINSTITUTION', 'FIXEDAMOUNTPROJECTREVENUERULE', 'FOLDER', 'FORMATPROFILE', 'FULFILLMENTREQUEST', 'GENERALTOKEN', 'GENERICRESOURCE', 'GIFTCERTIFICATE', 'GIFTCERTIFICATEITEM', 'GLNUMBERINGSEQUENCE', 'GLOBALACCOUNTMAPPING', 'GLOBALINVENTORYRELATIONSHIP', 'GOAL', 'GOVERNMENTISSUEDIDTYPE', 'HCMJOB', 'INBOUNDSHIPMENT', 'INTERCOMPALLOCATIONSCHEDULE', 'INTERCOMPANYJOURNALENTRY', 'INTERCOMPANYTRANSFERORDER', 'INVENTORYADJUSTMENT', 'INVENTORYCOSTREVALUATION', 'INVENTORYCOUNT', 'INVENTORYDETAIL', 'INVENTORYITEM', 'INVENTORYNUMBER', 'INVENTORYSTATUS', 'INVENTORYSTATUSCHANGE', 'INVENTORYTRANSFER', 'INVOICE', 'INVOICEGROUP', 'ISSUE', 'ISSUEPRODUCT', 'ISSUEPRODUCTVERSION', 'ITEMACCOUNTMAPPING', 'ITEMCOLLECTION', 'ITEMCOLLECTIONITEMMAP', 'ITEMDEMANDPLAN', 'ITEMFULFILLMENT', 'ITEMGROUP', 'ITEMLOCATIONCONFIGURATION', 'ITEMPROCESSFAMILY', 'ITEMPROCESSGROUP', 'ITEMRECEIPT', 'ITEMREVISION', 'ITEMSUPPLYPLAN', 'JOB', 'JOBREQUISITION', 'JOBSTATUS', 'JOBTYPE', 'JOURNALENTRY', 'KITITEM', 'KUDOS', 'LABORBASEDPROJECTREVENUERULE', 'LEAD', 'LOCATION', 'LOTNUMBEREDASSEMBLYITEM', 'LOTNUMBEREDINVENTORYITEM', 'MANUFACTURINGCOSTTEMPLATE', 'MANUFACTURINGOPERATIONTASK', 'MANUFACTURINGROUTING', 'MAPREDUCESCRIPT', 'MARKUPITEM', 'MASSUPDATESCRIPT', 'MEMDOC', 'MERCHANDISEHIERARCHYLEVEL', 'MERCHANDISEHIERARCHYNODE', 'MERCHANDISEHIERARCHYVERSION', 'MESSAGE', 'MFGPLANNEDTIME', 'NEXUS', 'NONINVENTORYITEM', 'NOTE', 'NOTETYPE', 'OPPORTUNITY', 'ORDERRESERVATION', 'ORDERSCHEDULE', 'ORDERTYPE', 'ORGANIZATIONVALUE', 'OTHERCHARGEITEM', 'OTHERGOVERNMENTISSUEDID', 'OTHERNAME', 'OTHERNAMECATEGORY', 'PARTNER', 'PARTNERCATEGORY', 'PASSPORT', 'PAYCHECK', 'PAYCHECKJOURNAL', 'PAYMENTCARD', 'PAYMENTCARDTOKEN', 'PAYMENTITEM', 'PAYMENTMETHOD', 'PAYROLLBATCH', 'PAYROLLBATCHADDEMPLOYEES', 'PAYROLLITEM', 'PCTCOMPLETEPROJECTREVENUERULE', 'PERFORMANCEMETRIC', 'PERFORMANCEREVIEW', 'PERFORMANCEREVIEWSCHEDULE', 'PERIODENDJOURNAL', 'PHONECALL', 'PICKSTRATEGY', 'PICKTASK', 'PLANNEDORDER', 'PLANNINGITEMCATEGORY', 'PLANNINGITEMGROUP', 'PLANNINGRULEGROUP', 'PORTLET', 'POSITION', 'PRICEBOOK', 'PRICELEVEL', 'PRICEPLAN', 'PRICINGGROUP', 'PROJECTEXPENSETYPE', 'PROJECTTASK', 'PROJECTTEMPLATE', 'PROMOTIONCODE', 'PROSPECT', 'PURCHASECONTRACT', 'PURCHASEORDER', 'PURCHASEREQUISITION', 'REALLOCATEITEM', 'RECEIVEINBOUNDSHIPMENT', 'RESOURCEALLOCATION', 'RESTLET', 'RETURNAUTHORIZATION', 'REVENUEARRANGEMENT', 'REVENUECOMMITMENT', 'REVENUECOMMITMENTREVERSAL', 'REVENUEPLAN', 'REVRECSCHEDULE', 'REVRECTEMPLATE', 'SALESCHANNEL', 'SALESORDER', 'SALESROLE', 'SALESTAXITEM', 'SCHEDULEDSCRIPT', 'SCHEDULEDSCRIPTINSTANCE', 'SERIALIZEDASSEMBLYITEM', 'SERIALIZEDINVENTORYITEM', 'SERVICEITEM', 'SHIPITEM', 'SHIPPINGPARTNERPACKAGE', 'SHIPPINGPARTNERREGISTRATION', 'SHIPPINGPARTNERSHIPMENT', 'SOLUTION', 'STATISTICALJOURNALENTRY', 'STOREPICKUPFULFILLMENT', 'STUDENTRECORD', 'SUBSCRIPTION', 'SUBSCRIPTIONCHANGEORDER', 'SUBSCRIPTIONLINE', 'SUBSCRIPTIONPLAN', 'SUBSCRIPTIONTERM', 'SUBSIDIARY', 'SUBSIDIARYSETTINGS', 'SUBTOTALITEM', 'SUITELET', 'SUPPLYCHAINSNAPSHOT', 'SUPPLYCHAINSNAPSHOTSIMULATION', 'SUPPLYCHANGEORDER', 'SUPPLYPLANDEFINITION', 'SUPPORTCASE', 'TASK', 'TAXACCT', 'TAXGROUP', 'TAXPERIOD', 'TAXSCHEDULE', 'TAXTYPE', 'TERM', 'TERMINATIONREASON', 'TIMEBILL', 'TIMEENTRY', 'TIMEOFFCHANGE', 'TIMEOFFPLAN', 'TIMEOFFREQUEST', 'TIMEOFFRULE', 'TIMEOFFTYPE', 'TIMESHEET', 'TOPIC', 'TRANSFERORDER', 'UNITSTYPE', 'UNLOCKEDTIMEPERIOD', 'USAGE', 'USEREVENTSCRIPT', 'VENDOR', 'VENDORBILL', 'VENDORCATEGORY', 'VENDORCREDIT', 'VENDORPAYMENT', 'VENDORPREPAYMENT', 'VENDORPREPAYMENTAPPLICATION', 'VENDORRETURNAUTHORIZATION', 'VENDORSUBSIDIARYRELATIONSHIP', 'WAVE', 'WBS', 'WEBSITE', 'WINLOSSREASON', 'WORKFLOWACTIONSCRIPT', 'WORKORDER', 'WORKORDERCLOSE', 'WORKORDERCOMPLETION', 'WORKORDERISSUE', 'WORKPLACE', 'ZONE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_standard_recordtypeElemID.name],
  }),
  generic_standard_task: new PrimitiveType({
    elemID: generic_standard_taskElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ADMI_ACCOUNTCLOSE', 'ADMI_ACCTSETUP', 'ADMI_ACHSETUP', 'ADMI_ACTIVATEBANKACCOUNT', 'ADMI_ADP', 'ADMI_ADVINVENTORYSETUP', 'ADMI_ALLOW_LOGIN', 'ADMI_BACKUP', 'ADMI_BASSETUP', 'ADMI_BILLINGEVENTS', 'ADMI_BILLINGTERMS', 'ADMI_BILLING_QEST', 'ADMI_BOUNCEDADDRESS', 'ADMI_BUDGET', 'ADMI_BUNDLEDETAILS', 'ADMI_CACHEINVALIDATIONREQUESTADV', 'ADMI_CACHEINVALIDATIONREQUESTLISTADV', 'ADMI_CLASSESTOLOCS', 'ADMI_CLEARACCOUNT', 'ADMI_CLOSEPERIOD', 'ADMI_COMMISSIONSETUP', 'ADMI_COMPANY', 'ADMI_CONVERTCLASSES', 'ADMI_COPYCOA', 'ADMI_CREATECONSOLCOMPANY', 'ADMI_CSVIMPORTPREF', 'ADMI_CUSTAPPTEXT', 'ADMI_DUPLICATESETUP', 'ADMI_EBAY', 'ADMI_EBAY_END_AUCTIONS', 'ADMI_EBAY_END_AUCTIONS_LOG', 'ADMI_EBAY_EXPORT', 'ADMI_EBAY_EXPORT_LOG', 'ADMI_EBAY_IMPORT', 'ADMI_EBAY_IMPORT_LOG', 'ADMI_EBAY_STATUS', 'ADMI_EDITNEXUSES', 'ADMI_EDITTAXACCTS', 'ADMI_EDITTAXTYPES', 'ADMI_EDITTEGATA', 'ADMI_EXPORTIIF', 'ADMI_EXPORTPRODUCTFEEDS', 'ADMI_EXPORTPRODUCTFEEDSADV', 'ADMI_FEATURES', 'ADMI_FEDEXREG', 'ADMI_FINCHARGEPREF', 'ADMI_FISCALPERIODS', 'ADMI_GENERAL', 'ADMI_HEADING', 'ADMI_IMAGERESIZE', 'ADMI_IMPORTADP', 'ADMI_IMPORTCSV', 'ADMI_IMPORTCSV_LOG', 'ADMI_IMPORTOLB', 'ADMI_IMPORT_COUPONCODE_STATUS', 'ADMI_INVOICESETUP', 'ADMI_ISSUEBUILD', 'ADMI_ISSUEEXTSTATUS', 'ADMI_ISSUEIMPORT', 'ADMI_ISSUEMODULE', 'ADMI_ISSUEPRIORITY', 'ADMI_ISSUEPRODUCT', 'ADMI_ISSUERELEASEUPDATE', 'ADMI_ISSUEREPRODUCE', 'ADMI_ISSUESETUP', 'ADMI_ISSUESEVERITY', 'ADMI_ISSUESOURCE', 'ADMI_ISSUESTATUS', 'ADMI_ISSUESTATUSFLOW', 'ADMI_ISSUETAGS', 'ADMI_ISSUETYPE', 'ADMI_ISSUEUSERTYPE', 'ADMI_ISSUEVERSION', 'ADMI_ITEMATTRGROUP', 'ADMI_LEADCUSTOMFIELDMAPPING', 'ADMI_LOGINAUDIT', 'ADMI_LOGINRESTRICT', 'ADMI_MAINTENANCEDOMAIN', 'ADMI_MAINTENANCEDOMAINADV', 'ADMI_MAINTENANCEDOMAINLIST', 'ADMI_MAINTENANCEDOMAINLISTADV', 'ADMI_MAINTENANCESCHEDULE', 'ADMI_MANAGEPAYROLL', 'ADMI_MANAGE_PLUGINS', 'ADMI_NAMING', 'ADMI_NETANSWERS', 'ADMI_NEXUSES', 'ADMI_NOTIFICATIONS', 'ADMI_NUMBERING', 'ADMI_OPENIDSSO', 'ADMI_OTHERSTUB', 'ADMI_OUTLOOKINTEGRATION', 'ADMI_OUTLOOKINTEGRATION_V3', 'ADMI_PAYMENTSETUP', 'ADMI_PAYROLL', 'ADMI_PAYROLLMAP', 'ADMI_PAYROLLREP', 'ADMI_PRINTING', 'ADMI_REDIRECT', 'ADMI_REDIRECTADV', 'ADMI_REDIRECTS', 'ADMI_REDIRECTSADV', 'ADMI_RELEASEPREVIEW', 'ADMI_SAMLSSO', 'ADMI_SANDBOXACCOUNTS', 'ADMI_SAVEDASH', 'ADMI_SAVEDIMPORTS', 'ADMI_SCRIPTDEBUGGER', 'ADMI_SETUPMANAGER', 'ADMI_SETUPURLS', 'ADMI_SETUPURLSADV', 'ADMI_SETUPURLSADV_LOG', 'ADMI_SETUPURLS_LOG', 'ADMI_SETUPYEARSTATUS', 'ADMI_SFASETUP', 'ADMI_SHIPPING', 'ADMI_SITEMAPGENERATOR', 'ADMI_SITEMAPGENERATORADV', 'ADMI_SITEMAP_MANAGER', 'ADMI_SOFTDESCRIPTORS', 'ADMI_STATETAXIMPORT', 'ADMI_STOREADMIN', 'ADMI_STOREADMINADV', 'ADMI_STORELIST', 'ADMI_STORELISTADV', 'ADMI_STOREPREVIEW', 'ADMI_STOREPREVIEWADV', 'ADMI_SUITESIGNON', 'ADMI_SUPPORTSETUP', 'ADMI_SWAPPRICES', 'ADMI_TAX', 'ADMI_TAXACCTS', 'ADMI_TAXTYPES', 'ADMI_TDCLRPOOL', 'ADMI_TDMKMSTR', 'ADMI_TEGATA', 'ADMI_TEXTCUST', 'ADMI_TEXTCUSTADV', 'ADMI_TEXTCUSTGROUP', 'ADMI_TEXTCUSTGROUPADV', 'ADMI_TRANSETUP', 'ADMI_TRANSITEMTXT', 'ADMI_TWOFACTORDEVICES', 'ADMI_TWOFACTORROLES', 'ADMI_UPDATEPRICES', 'ADMI_UPSELLSETUP', 'ADMI_UPSWIZ', 'ADMI_URLCOMPONENTS', 'ADMI_WEBSERVICEPREFS', 'ADMI_WEBSERVICES_STATUS', 'ADMI_WEBSERVICES_USAGE_LOG', 'ADMI_XML_ADP_SETUP', 'ADMI_XML_PAYTRUST_APPROVE', 'ADMI_XML_PAYTRUST_SETUP', 'ADMI_XML_PAYTRUST_STATUS', 'ADMI_YTDTAXLIBANDPYMTS', 'CARD_-10', 'CARD_-11', 'CARD_-12', 'CARD_-13', 'CARD_-14', 'CARD_-15', 'CARD_-16', 'CARD_-17', 'CARD_-18', 'CARD_-19', 'CARD_-20', 'CARD_-21', 'CARD_-22', 'CARD_-23', 'CARD_-24', 'CARD_-25', 'CARD_-26', 'CARD_-27', 'CARD_-28', 'CARD_-29', 'CARD_-30', 'CARD_-31', 'CARD_-32', 'CARD_-33', 'CARD_-34', 'CARD_-35', 'CARD_-36', 'CARD_-37', 'CARD_-38', 'CARD_-39', 'CARD_-40', 'CARD_-41', 'CARD_-42', 'CARD_-43', 'CARD_-44', 'CARD_-45', 'CARD_-46', 'CARD_-47', 'CARD_-48', 'CARD_-49', 'CARD_-50', 'CARD_-51', 'CARD_-52', 'CARD_-54', 'CARD_-55', 'CARD_-56', 'CARD_-58', 'CARD_-59', 'CARD_-60', 'CARD_-61', 'CARD_-62', 'CARD_-63', 'CARD_-7', 'CARD_-8', 'CARD_-9', 'CARD_-91', 'DUMM_SEPARATOR', 'EDIT_ACCOUNT', 'EDIT_ACCOUNTINGBOOK', 'EDIT_ACCOUNTINGOTHERLIST', 'EDIT_ACTIVITY', 'EDIT_ALLOCATION', 'EDIT_ALLOCATIONBATCH', 'EDIT_AMENDW4', 'EDIT_AMORTIZATIONSCHEDULE', 'EDIT_APPDEF', 'EDIT_APPPKG', 'EDIT_APPPKG_UPGRADE', 'EDIT_APPPUBLISHER', 'EDIT_BILLINGCLASS', 'EDIT_BILLINGRULE', 'EDIT_BILLINGSCHEDULE', 'EDIT_BILLOFDISTRIBUTION', 'EDIT_BILLRUNSCHEDULE', 'EDIT_BILLRUNSCHEDULES', 'EDIT_BINNUMBERRECORD', 'EDIT_BULKOP', 'EDIT_BUNDLE', 'EDIT_BUNDLEAUDITTRAIL', 'EDIT_CALENDARPREFERENCE', 'EDIT_CALL', 'EDIT_CAMPAIGN', 'EDIT_CAMPAIGNAUDIENCE', 'EDIT_CAMPAIGNBULK', 'EDIT_CAMPAIGNBULKIMPORT', 'EDIT_CAMPAIGNCATEGORY', 'EDIT_CAMPAIGNCHANNEL', 'EDIT_CAMPAIGNEMAIL', 'EDIT_CAMPAIGNFAMILY', 'EDIT_CAMPAIGNOFFER', 'EDIT_CAMPAIGNSEARCHENGINE', 'EDIT_CAMPAIGNSUBSCRIPTION', 'EDIT_CAMPAIGNVERTICAL', 'EDIT_CASEFIELDRULE', 'EDIT_CASEFORM', 'EDIT_CASEISSUE', 'EDIT_CASEORIGIN', 'EDIT_CASEPRIORITY', 'EDIT_CASEPROFILE', 'EDIT_CASESTATUS', 'EDIT_CASETERRITORY', 'EDIT_CASETYPE', 'EDIT_CHARGE', 'EDIT_CHARGERULE', 'EDIT_CLASS', 'EDIT_CLASSSEGMENTMAPPING', 'EDIT_COLORTHEME', 'EDIT_COMMISSIONSCHEDULE', 'EDIT_COMPETITOR', 'EDIT_CONTACT', 'EDIT_CRMGROUP', 'EDIT_CRMMESSAGE', 'EDIT_CRMOTHERLIST', 'EDIT_CRMTEMPLATE', 'EDIT_CURRENCY', 'EDIT_CURRENCYRATE', 'EDIT_CUSTADDRESSENTRYFORM', 'EDIT_CUSTADDRESSFORM', 'EDIT_CUSTBODYFIELD', 'EDIT_CUSTCATEGORY', 'EDIT_CUSTCENTER', 'EDIT_CUSTCOLUMNFIELD', 'EDIT_CUSTEMAILLAYOUT', 'EDIT_CUSTENTITYFIELD', 'EDIT_CUSTENTRYFORM', 'EDIT_CUSTEVENTFIELD', 'EDIT_CUSTFORM', 'EDIT_CUSTITEMFIELD', 'EDIT_CUSTITEMNUMBERFIELD', 'EDIT_CUSTJOB', 'EDIT_CUSTLAYOUT', 'EDIT_CUSTLIST', 'EDIT_CUSTOMERFIELDRULE', 'EDIT_CUSTOMERFORM', 'EDIT_CUSTOMERSTATUS', 'EDIT_CUSTOTHERFIELD', 'EDIT_CUSTPROFILE', 'EDIT_CUSTRECORD', 'EDIT_CUSTRECORDFIELD', 'EDIT_CUSTRECORDFORM', 'EDIT_CUSTSCRIPTFIELD', 'EDIT_CUSTSECTION', 'EDIT_CUSTTASKS', 'EDIT_CUSTWFSTATEFIELD', 'EDIT_CUSTWORKFLOWFIELD', 'EDIT_CUST_', 'EDIT_DEPARTMENT', 'EDIT_DEPTSEGMENTMAPPING', 'EDIT_DISTRIBUTIONNETWORK', 'EDIT_EDITPROFILE', 'EDIT_EMAILTEMPLATE', 'EDIT_EMPLCATEGORY', 'EDIT_EMPLOYEE', 'EDIT_EMPLOYEESFA', 'EDIT_EMPOTHERLIST', 'EDIT_ENTITYACCOUNTMAPPING', 'EDIT_ESCALATIONRULE', 'EDIT_ESCALATIONTERRITORY', 'EDIT_EVENT', 'EDIT_EXPCATEGORY', 'EDIT_FAXMESSAGE', 'EDIT_FAXTEMPLATE', 'EDIT_FISCALCALENDAR', 'EDIT_FISCALPERIOD', 'EDIT_GENERICRESOURCE', 'EDIT_GLOBALACCOUNTMAPPING', 'EDIT_HCMJOB', 'EDIT_IC_ALLOCATION', 'EDIT_IMPORT_COUPONCODE', 'EDIT_INFOITEM', 'EDIT_INFOITEMFORM', 'EDIT_INSTALLBUNDLE', 'EDIT_INVCOSTTEMPLATE', 'EDIT_ISSUE', 'EDIT_ISSUEPRODUCT', 'EDIT_ISSUETAG', 'EDIT_ISSUEUSERTYPE', 'EDIT_ITEM', 'EDIT_ITEMACCOUNTMAPPING', 'EDIT_ITEMDEMANDPLAN', 'EDIT_ITEMOPTION', 'EDIT_ITEMSUPPLYPLAN', 'EDIT_ITEM_REVISION', 'EDIT_JOB', 'EDIT_KBCATEGORY', 'EDIT_KPIREPORT', 'EDIT_LEAD', 'EDIT_LOCATION', 'EDIT_LOCSEGMENTMAPPING', 'EDIT_MAILMERGE', 'EDIT_MAILMESSAGE', 'EDIT_MAILTEMPLATE', 'EDIT_MEDIAITEM', 'EDIT_MEDIAITEMFOLDER', 'EDIT_MEMDOC', 'EDIT_MFGCOSTTEMPLATE', 'EDIT_MFGROUTING', 'EDIT_NEXUS', 'EDIT_OPENIDSSO', 'EDIT_OTHERNAME', 'EDIT_PARTNER', 'EDIT_PARTNERCOMMISSIONSCHED', 'EDIT_PARTNERPLANASSIGN', 'EDIT_PAYPALACCOUNT', 'EDIT_PAYROLLBATCH2', 'EDIT_PAYROLLITEM', 'EDIT_PDFMESSAGE', 'EDIT_PDFTEMPLATE', 'EDIT_PERIOD', 'EDIT_PLANASSIGN', 'EDIT_PLANNEDSTANDARDCOST', 'EDIT_PLUGIN', 'EDIT_PLUGINTYPE', 'EDIT_POSITION', 'EDIT_PRESCATEGORY', 'EDIT_PROCESSHISTTXN', 'EDIT_PROJECTEXPENSETYPE', 'EDIT_PROJECTTASK', 'EDIT_PROJECTTEMPLATE', 'EDIT_PROSPECT', 'EDIT_PUBLISHER', 'EDIT_PUBLISHERAPP', 'EDIT_QUANTITYPRICINGSCHEDULE', 'EDIT_REDIRECT', 'EDIT_REDIRECTADV', 'EDIT_REFERRALCODE', 'EDIT_REGISTERPUBLISHER', 'EDIT_RELATEDITEM', 'EDIT_RELATEDITEMADV', 'EDIT_REPORT', 'EDIT_RESOLVECONFLICTS', 'EDIT_RESOURCE', 'EDIT_RESOURCEGROUP', 'EDIT_REVRECSCHEDULE', 'EDIT_ROLE', 'EDIT_RSRCALLOCATION', 'EDIT_RSSFEED', 'EDIT_SALESCAMPAIGN', 'EDIT_SALESTEAM', 'EDIT_SALESTERRITORY', 'EDIT_SAVEDSEARCH', 'EDIT_SCRIPT', 'EDIT_SCRIPTEDRECORD', 'EDIT_SCRIPTRECORD', 'EDIT_SEARCH', 'EDIT_SHIPITEM', 'EDIT_SHIPPARTREGISTRATION', 'EDIT_SITEEMAILTEMPLATE', 'EDIT_SITEITEMTEMPLAT', 'EDIT_SITEMEDIA', 'EDIT_SITETAG', 'EDIT_SITETHEME', 'EDIT_SOLUTION', 'EDIT_SSCATEGORY', 'EDIT_STANDARDCOSTVERSION', 'EDIT_STATE', 'EDIT_STOREITEMLISTLAYOUT', 'EDIT_STORETAB', 'EDIT_SUBSIDIARY', 'EDIT_SUITEAPPLIST', 'EDIT_SUITESIGNON', 'EDIT_SUPPORTCASE', 'EDIT_SYSALERT', 'EDIT_TASK', 'EDIT_TAXACCT', 'EDIT_TAXGROUP', 'EDIT_TAXITEM', 'EDIT_TAXPERIOD', 'EDIT_TAXSCHEDULE', 'EDIT_TAXTYPE', 'EDIT_TEMPLATECATEGORY', 'EDIT_TERMINATIONREASON', 'EDIT_TIMESHEET', 'EDIT_TOPIC', 'EDIT_TRANSACTIONLIST', 'EDIT_TRAN_ADJJOURNAL', 'EDIT_TRAN_BINTRNFR', 'EDIT_TRAN_BINWKSHT', 'EDIT_TRAN_BLANKORD', 'EDIT_TRAN_BOOKICJOURNAL', 'EDIT_TRAN_BOOKICJOURNALIMPORT', 'EDIT_TRAN_BOOKJOURNAL', 'EDIT_TRAN_BOOKJOURNALIMPORT', 'EDIT_TRAN_BUILD', 'EDIT_TRAN_CARDCHRG', 'EDIT_TRAN_CASHRFND', 'EDIT_TRAN_CASHSALE', 'EDIT_TRAN_CHECK', 'EDIT_TRAN_COMMISSN', 'EDIT_TRAN_CUSTCHRG', 'EDIT_TRAN_CUSTCRED', 'EDIT_TRAN_CUSTDEP', 'EDIT_TRAN_CUSTINVC', 'EDIT_TRAN_CUSTPYMT', 'EDIT_TRAN_CUSTRFND', 'EDIT_TRAN_DEPAPPL', 'EDIT_TRAN_DEPOSIT', 'EDIT_TRAN_ESTIMATE', 'EDIT_TRAN_EXPREPT', 'EDIT_TRAN_FXREVAL', 'EDIT_TRAN_ICJOURNAL', 'EDIT_TRAN_ICJOURNALIMPORT', 'EDIT_TRAN_ICTRNFRORD', 'EDIT_TRAN_INVADJST', 'EDIT_TRAN_INVCOUNT', 'EDIT_TRAN_INVDISTR', 'EDIT_TRAN_INVREVAL', 'EDIT_TRAN_INVTRNFR', 'EDIT_TRAN_INVWKSHT', 'EDIT_TRAN_INVWKSHTIMPORT', 'EDIT_TRAN_ITEMRCPT', 'EDIT_TRAN_ITEMSHIP', 'EDIT_TRAN_JOURNAL', 'EDIT_TRAN_JOURNALIMPORT', 'EDIT_TRAN_LIAADJST', 'EDIT_TRAN_LIABPYMT', 'EDIT_TRAN_OPPRTNTY', 'EDIT_TRAN_ORDERPURCHREQ', 'EDIT_TRAN_PARTNERCOMMISSN', 'EDIT_TRAN_PAYCHECK', 'EDIT_TRAN_PAYCHECK2', 'EDIT_TRAN_PCHKJRNL', 'EDIT_TRAN_PEJRNL', 'EDIT_TRAN_PURCHCON', 'EDIT_TRAN_PURCHORD', 'EDIT_TRAN_PURCHORD_REQ', 'EDIT_TRAN_PURCHREQ', 'EDIT_TRAN_REPLENISHLOC', 'EDIT_TRAN_REVCOMM', 'EDIT_TRAN_REVCOMRV', 'EDIT_TRAN_REVCONTR', 'EDIT_TRAN_RFQ', 'EDIT_TRAN_RTNAUTH', 'EDIT_TRAN_SALESORD', 'EDIT_TRAN_STATJOURNAL', 'EDIT_TRAN_STATJOURNALIMPORT', 'EDIT_TRAN_STATSCHEDULE', 'EDIT_TRAN_TAXLIAB', 'EDIT_TRAN_TAXLIAB2', 'EDIT_TRAN_TAXPYMT', 'EDIT_TRAN_TAXPYMT2', 'EDIT_TRAN_TAXPYMTCA', 'EDIT_TRAN_TEGCOLLECT', 'EDIT_TRAN_TEGPAY', 'EDIT_TRAN_TEGPYBL', 'EDIT_TRAN_TEGRCVBL', 'EDIT_TRAN_TRANSFER', 'EDIT_TRAN_TRNFRORD', 'EDIT_TRAN_UNBUILD', 'EDIT_TRAN_VATLIABAU', 'EDIT_TRAN_VENDAUTH', 'EDIT_TRAN_VENDBILL', 'EDIT_TRAN_VENDCRED', 'EDIT_TRAN_VENDPYMT', 'EDIT_TRAN_VENDRFQ', 'EDIT_TRAN_WOCLOSE', 'EDIT_TRAN_WOCOMPL', 'EDIT_TRAN_WOISSUE', 'EDIT_TRAN_WORKORD', 'EDIT_TRAN_YTDADJST', 'EDIT_UNITSTYPE', 'EDIT_UPGRADEBUNDLE', 'EDIT_URLALIAS', 'EDIT_VENDOR', 'EDIT_WEBAPPS', 'EDIT_WEBAPPSADV', 'EDIT_WORKCALENDAR', 'EDIT_WORKFLOW', 'EDIT_WORKPLACE', 'EXTL_0', 'EXTL_10', 'EXTL_10_1', 'EXTL_12', 'EXTL_9', 'EXTL_9_1', 'INTL_SECTION', 'INTL_SECTIONS', 'INTL_TASKLINK', 'INTL_TASKLINKS', 'LIST_ACCOUNT', 'LIST_ACCOUNTINGBOOK', 'LIST_ACCOUNTINGOTHERLIST', 'LIST_ACTIVITY', 'LIST_ADP_BATCHES', 'LIST_ADP_PAYCHECK', 'LIST_ADVPDFTEMPLATE', 'LIST_ALLOCATION', 'LIST_ALLOCATIONBATCH', 'LIST_AMORTIZATION', 'LIST_AMORTIZATIONSCHEDULE', 'LIST_APPDEF', 'LIST_APPPKG', 'LIST_APPPUBLISHERS', 'LIST_APPROVEACH', 'LIST_APPROVEEFT', 'LIST_APPROVERSRCALLOCATION', 'LIST_APPROVERTIMEENTRY', 'LIST_APPROVEVP', 'LIST_BILLINGCLASS', 'LIST_BILLINGRULE', 'LIST_BILLINGRUNRESULTS', 'LIST_BILLINGSCHEDULE', 'LIST_BILLING_GROUPS', 'LIST_BILLING_WORK_CENTER', 'LIST_BILLOFDISTRIBUTION', 'LIST_BILLRUN', 'LIST_BILLRUNSCHEDULE', 'LIST_BIN', 'LIST_BUDGET', 'LIST_BUDGETRATES', 'LIST_BULKOP', 'LIST_BULKRESULTS', 'LIST_BUNDLE', 'LIST_CALENDAR', 'LIST_CALL', 'LIST_CAMPAIGN', 'LIST_CAMPAIGNAUDIENCE', 'LIST_CAMPAIGNCATEGORY', 'LIST_CAMPAIGNCHANNEL', 'LIST_CAMPAIGNEMAIL', 'LIST_CAMPAIGNFAMILY', 'LIST_CAMPAIGNOFFER', 'LIST_CAMPAIGNSEARCHENGINE', 'LIST_CAMPAIGNSUBSCRIPTION', 'LIST_CAMPAIGNVERTICAL', 'LIST_CASEFIELDRULE', 'LIST_CASEFORM', 'LIST_CASEISSUE', 'LIST_CASEORIGIN', 'LIST_CASEPRIORITY', 'LIST_CASEPROFILE', 'LIST_CASESTATUS', 'LIST_CASETERRITORIES', 'LIST_CASETERRITORY', 'LIST_CASETERRITORYASSIGN', 'LIST_CASETYPE', 'LIST_CCTRAN', 'LIST_CHARGE', 'LIST_CHARGERULE', 'LIST_CHARGERUNRESULTS', 'LIST_CHART_ACCOUNT', 'LIST_CLASS', 'LIST_CLASSSEGMENTMAPPING', 'LIST_COLORTHEME', 'LIST_COMMCAT', 'LIST_COMMISSIONSCHEDULE', 'LIST_COMPETITOR', 'LIST_CONSOLRATES', 'LIST_CONTACT', 'LIST_COUNTRY', 'LIST_CRMGROUP', 'LIST_CRMOTHERLIST', 'LIST_CRMTEMPLATE', 'LIST_CURRENCY', 'LIST_CURRENCYRATE', 'LIST_CUSTADDRESSENTRYFORM', 'LIST_CUSTBODYFIELD', 'LIST_CUSTCATEGORY', 'LIST_CUSTCENTER', 'LIST_CUSTCOLUMNFIELD', 'LIST_CUSTEMAILLAYOUT', 'LIST_CUSTENTITYFIELD', 'LIST_CUSTENTRYFORM', 'LIST_CUSTEVENTFIELD', 'LIST_CUSTFIELDTAB', 'LIST_CUSTFORM', 'LIST_CUSTITEMFIELD', 'LIST_CUSTITEMNUMBERFIELD', 'LIST_CUSTJOB', 'LIST_CUSTLAYOUT', 'LIST_CUSTLIST', 'LIST_CUSTOMCODEFILES', 'LIST_CUSTOMERFIELDRULE', 'LIST_CUSTOMERFORM', 'LIST_CUSTOMERSTATUS', 'LIST_CUSTOMSUBLIST', 'LIST_CUSTOTHERFIELD', 'LIST_CUSTRECORD', 'LIST_CUSTRECORDFORM', 'LIST_CUSTSECTION', 'LIST_DEPARTMENT', 'LIST_DEPTSEGMENTMAPPING', 'LIST_DIFFROLE', 'LIST_DISTRIBUTIONNETWORK', 'LIST_DUPLICATE_RESOLUTION_STATUS', 'LIST_EMAILTEMPLATE', 'LIST_EMPLCATEGORY', 'LIST_EMPLOYEE', 'LIST_EMPOTHERLIST', 'LIST_ENTITY', 'LIST_ENTITYACCOUNTMAPPING', 'LIST_ENTITY_DUPLICATES', 'LIST_ESCALATIONRULE', 'LIST_ESCALATIONTERRITORY', 'LIST_EVENT', 'LIST_EXPCATEGORY', 'LIST_FAXTEMPLATE', 'LIST_FCSITEFOLDER', 'LIST_FCSITEFOLDERADV', 'LIST_FILECABINET', 'LIST_FINCHRG', 'LIST_FISCALCALENDAR', 'LIST_FORECAST', 'LIST_GENERICRESOURCE', 'LIST_GIFTCERTIFICATES', 'LIST_GLNUMHISTORY', 'LIST_GLOBALACCOUNTMAPPING', 'LIST_HCMJOB', 'LIST_IMAGE', 'LIST_INFOITEM', 'LIST_INFOITEMFORM', 'LIST_INSTALLEDBUNDLE', 'LIST_INVCOSTTEMPLATE', 'LIST_ISSUE', 'LIST_ITEM', 'LIST_ITEMACCOUNTMAPPING', 'LIST_ITEMATTRGROUP', 'LIST_ITEMDEMANDPLAN', 'LIST_ITEMOPTION', 'LIST_ITEMSUPPLYPLAN', 'LIST_ITEM_REVISION', 'LIST_JOB', 'LIST_KBCATEGORY', 'LIST_KPIREPORT', 'LIST_LEAD', 'LIST_LOCATION', 'LIST_LOCSEGMENTMAPPING', 'LIST_MAILMERGE', 'LIST_MAILTEMPLATE', 'LIST_MEDIAITEMFOLDER', 'LIST_MEDIAITEMFOLDER_LOG', 'LIST_MEMDOC', 'LIST_MEMDOCRESULTS', 'LIST_MFGCOSTTEMPLATE', 'LIST_MFGOPERATIONTASK', 'LIST_MFGROUTING', 'LIST_MGRFORECAST', 'LIST_MYROLES', 'LIST_OTHERNAME', 'LIST_PARTNER', 'LIST_PARTNERCOMMISSIONSCHED', 'LIST_PARTNERPLANASSIGN', 'LIST_PARTNERPLANASSIGNS', 'LIST_PAYMENTEVENT', 'LIST_PAYPALACCOUNT', 'LIST_PAYROLLBATCH', 'LIST_PAYROLLISSUES', 'LIST_PAYROLLITEM', 'LIST_PDFTEMPLATE', 'LIST_PERIOD', 'LIST_PLANASSIGN', 'LIST_PLANASSIGNS', 'LIST_PLANNEDSTANDARDCOST', 'LIST_PLUGIN', 'LIST_PLUGINTYPE', 'LIST_POSITION', 'LIST_PRESCATEGORY', 'LIST_PROCESSHISTTXNSTATUS', 'LIST_PROJECTEXPENSETYPE', 'LIST_PROJECTTASK', 'LIST_PROJECTTASKIMPORT', 'LIST_PROJECTTEMPLATE', 'LIST_PROSPECT', 'LIST_PUBLISHERAPP', 'LIST_QUANTITYPRICINGSCHEDULE', 'LIST_QUOTA', 'LIST_RECENTRECORDS', 'LIST_RECVDFILES', 'LIST_REFERRALCODE', 'LIST_RELATEDITEM', 'LIST_RELATEDITEMADV', 'LIST_REPORESULT', 'LIST_REPOSCHEDULE', 'LIST_RESOURCE', 'LIST_RESOURCEGROUP', 'LIST_REVRECSCHEDS', 'LIST_REVRECSCHEDULE', 'LIST_ROLE', 'LIST_RSRCALLOCATION', 'LIST_RSSFEED', 'LIST_SALESCAMPAIGN', 'LIST_SALESTEAM', 'LIST_SALESTERRITORIES', 'LIST_SALESTERRITORY', 'LIST_SALESTERRITORYASSIGN', 'LIST_SAVEDASHBOARD', 'LIST_SAVEDBULKOP', 'LIST_SAVEDSEARCH', 'LIST_SCRIPT', 'LIST_SCRIPTEDRECORD', 'LIST_SCRIPTRECORD', 'LIST_SCRIPTSTATUS', 'LIST_SEARCHRESULTS', 'LIST_SEARCHRESULTSARCHIVE', 'LIST_SENTFILES', 'LIST_SHIPITEM', 'LIST_SHIPPARTREGISTRATION', 'LIST_SHIPPINGMANIFEST', 'LIST_SITEEMAILTEMPLATE', 'LIST_SITEITEMTEMPLAT', 'LIST_SITETAGS', 'LIST_SITETHEMES', 'LIST_SMBIMPORT', 'LIST_SOLUTION', 'LIST_SSCATEGORY', 'LIST_STANDARDCOSTVERSION', 'LIST_STATE', 'LIST_STATUSACH', 'LIST_STATUSEFT', 'LIST_STATUSVP', 'LIST_STOREITEMLISTLAYOUT', 'LIST_STORETAB', 'LIST_SUBSIDIARY', 'LIST_SUPPORTCASE', 'LIST_SYSALERT', 'LIST_SYSTEMEMAILTEMPLATE', 'LIST_TASK', 'LIST_TAXGROUP', 'LIST_TAXITEM', 'LIST_TAXPERIOD', 'LIST_TAXSCHEDULE', 'LIST_TEMPLATEFILES', 'LIST_TEMPLATE_CATEGORY', 'LIST_TERMINATIONREASON', 'LIST_TIMESHEET', 'LIST_TOPIC', 'LIST_TRANNUMBERAUDITLOG', 'LIST_TRANSACTION', 'LIST_TRAN_BINTRNFR', 'LIST_TRAN_BINWKSHT', 'LIST_TRAN_BLANKORD', 'LIST_TRAN_BOOKICJOURNAL', 'LIST_TRAN_BOOKJOURNAL', 'LIST_TRAN_BUILD', 'LIST_TRAN_CARDCHRG', 'LIST_TRAN_CASHRFND', 'LIST_TRAN_CASHSALE', 'LIST_TRAN_CHECK', 'LIST_TRAN_COMMISSN', 'LIST_TRAN_CUSTCHRG', 'LIST_TRAN_CUSTCRED', 'LIST_TRAN_CUSTDEP', 'LIST_TRAN_CUSTINVC', 'LIST_TRAN_CUSTPYMT', 'LIST_TRAN_CUSTRFND', 'LIST_TRAN_DEPAPPL', 'LIST_TRAN_DEPOSIT', 'LIST_TRAN_DOWNLOAD', 'LIST_TRAN_ESTIMATE', 'LIST_TRAN_EXPREPT', 'LIST_TRAN_FXREVAL', 'LIST_TRAN_ICJOURNAL', 'LIST_TRAN_ICTRNFRORD', 'LIST_TRAN_INVADJST', 'LIST_TRAN_INVCOUNT', 'LIST_TRAN_INVDISTR', 'LIST_TRAN_INVREVAL', 'LIST_TRAN_INVTRNFR', 'LIST_TRAN_INVWKSHT', 'LIST_TRAN_ITEMRCPT', 'LIST_TRAN_ITEMSHIP', 'LIST_TRAN_JOURNAL', 'LIST_TRAN_LIABPYMT', 'LIST_TRAN_OPPRTNTY', 'LIST_TRAN_PARTNERCOMMISSN', 'LIST_TRAN_PAYCHECK', 'LIST_TRAN_PCHKJRNL', 'LIST_TRAN_PEJRNL', 'LIST_TRAN_PURCHCON', 'LIST_TRAN_PURCHORD', 'LIST_TRAN_PURCHORD_REQ', 'LIST_TRAN_PURCHREQ', 'LIST_TRAN_REORDER', 'LIST_TRAN_REVCOMM', 'LIST_TRAN_REVCOMRV', 'LIST_TRAN_REVCONTR', 'LIST_TRAN_RFQ', 'LIST_TRAN_RTNAUTH', 'LIST_TRAN_SALESORD', 'LIST_TRAN_STATJOURNAL', 'LIST_TRAN_STATSCHEDULE', 'LIST_TRAN_TAXLIAB', 'LIST_TRAN_TAXPYMT', 'LIST_TRAN_TEGPYBL', 'LIST_TRAN_TEGRCVBL', 'LIST_TRAN_TRANSFER', 'LIST_TRAN_TRNFRORD', 'LIST_TRAN_UNBUILD', 'LIST_TRAN_VATLIAB', 'LIST_TRAN_VATLIABAU', 'LIST_TRAN_VATLIABUK', 'LIST_TRAN_VENDAUTH', 'LIST_TRAN_VENDBILL', 'LIST_TRAN_VENDCRED', 'LIST_TRAN_VENDPYMT', 'LIST_TRAN_VENDRFQ', 'LIST_TRAN_WOCLOSE', 'LIST_TRAN_WOCOMPL', 'LIST_TRAN_WOISSUE', 'LIST_TRAN_WORKORD', 'LIST_TRAN_YTDADJST', 'LIST_UNCATSITEITEM', 'LIST_UNCATSITEITEMADV', 'LIST_UNITSTYPE', 'LIST_UPSELLPOPUP', 'LIST_UPSELLWIZARD', 'LIST_URLALIASES', 'LIST_USER', 'LIST_VENDOR', 'LIST_WEBAPPS', 'LIST_WEBAPPSADV', 'LIST_WORKCALENDAR', 'LIST_WORKFLOW', 'LIST_WORKPLACE', 'REPO_10', 'REPO_100', 'REPO_101', 'REPO_102', 'REPO_103', 'REPO_104', 'REPO_105', 'REPO_106', 'REPO_107', 'REPO_108', 'REPO_109', 'REPO_11', 'REPO_110', 'REPO_111', 'REPO_112', 'REPO_113', 'REPO_114', 'REPO_115', 'REPO_116', 'REPO_118', 'REPO_119', 'REPO_12', 'REPO_121', 'REPO_122', 'REPO_123', 'REPO_126', 'REPO_127', 'REPO_128', 'REPO_13', 'REPO_130', 'REPO_131', 'REPO_132', 'REPO_133', 'REPO_134', 'REPO_135', 'REPO_14', 'REPO_141', 'REPO_142', 'REPO_143', 'REPO_144', 'REPO_145', 'REPO_146', 'REPO_147', 'REPO_148', 'REPO_149', 'REPO_15', 'REPO_150', 'REPO_151', 'REPO_152', 'REPO_16', 'REPO_161', 'REPO_162', 'REPO_163', 'REPO_164', 'REPO_165', 'REPO_169', 'REPO_17', 'REPO_170', 'REPO_171', 'REPO_172', 'REPO_173', 'REPO_174', 'REPO_175', 'REPO_176', 'REPO_177', 'REPO_178', 'REPO_179', 'REPO_18', 'REPO_180', 'REPO_183', 'REPO_184', 'REPO_185', 'REPO_188', 'REPO_189', 'REPO_19', 'REPO_191', 'REPO_192', 'REPO_193', 'REPO_194', 'REPO_195', 'REPO_196', 'REPO_197', 'REPO_198', 'REPO_199', 'REPO_2', 'REPO_20', 'REPO_203', 'REPO_204', 'REPO_205', 'REPO_206', 'REPO_209', 'REPO_21', 'REPO_210', 'REPO_211', 'REPO_214', 'REPO_215', 'REPO_218', 'REPO_219', 'REPO_22', 'REPO_220', 'REPO_221', 'REPO_222', 'REPO_223', 'REPO_225', 'REPO_226', 'REPO_227', 'REPO_229', 'REPO_23', 'REPO_230', 'REPO_231', 'REPO_232', 'REPO_233', 'REPO_234', 'REPO_235', 'REPO_239', 'REPO_24', 'REPO_240', 'REPO_241', 'REPO_242', 'REPO_243', 'REPO_246', 'REPO_248', 'REPO_249', 'REPO_25', 'REPO_250', 'REPO_251', 'REPO_256', 'REPO_257', 'REPO_258', 'REPO_26', 'REPO_261', 'REPO_262', 'REPO_264', 'REPO_266', 'REPO_267', 'REPO_268', 'REPO_269', 'REPO_27', 'REPO_270', 'REPO_271', 'REPO_272', 'REPO_273', 'REPO_274', 'REPO_277', 'REPO_278', 'REPO_279', 'REPO_28', 'REPO_280', 'REPO_281', 'REPO_282', 'REPO_283', 'REPO_284', 'REPO_285', 'REPO_286', 'REPO_29', 'REPO_292', 'REPO_293', 'REPO_3', 'REPO_30', 'REPO_31', 'REPO_32', 'REPO_33', 'REPO_34', 'REPO_35', 'REPO_36', 'REPO_37', 'REPO_38', 'REPO_39', 'REPO_4', 'REPO_41', 'REPO_42', 'REPO_43', 'REPO_44', 'REPO_48', 'REPO_49', 'REPO_5', 'REPO_50', 'REPO_51', 'REPO_53', 'REPO_54', 'REPO_55', 'REPO_56', 'REPO_57', 'REPO_58', 'REPO_59', 'REPO_6', 'REPO_60', 'REPO_61', 'REPO_62', 'REPO_63', 'REPO_64', 'REPO_65', 'REPO_66', 'REPO_67', 'REPO_68', 'REPO_69', 'REPO_7', 'REPO_71', 'REPO_72', 'REPO_73', 'REPO_74', 'REPO_77', 'REPO_78', 'REPO_79', 'REPO_8', 'REPO_80', 'REPO_81', 'REPO_82', 'REPO_83', 'REPO_84', 'REPO_85', 'REPO_87', 'REPO_88', 'REPO_9', 'REPO_90', 'REPO_91', 'REPO_93', 'REPO_94', 'REPO_95', 'REPO_96', 'REPO_97', 'REPO_98', 'REPO_99', 'REPO_ASSIGNFINANCIALLAYOUTS', 'REPO_BANKREGISTER', 'REPO_CUSTOMIZATION', 'REPO_CUST_10', 'REPO_CUST_100', 'REPO_CUST_101', 'REPO_CUST_102', 'REPO_CUST_103', 'REPO_CUST_104', 'REPO_CUST_105', 'REPO_CUST_106', 'REPO_CUST_107', 'REPO_CUST_11', 'REPO_CUST_111', 'REPO_CUST_112', 'REPO_CUST_113', 'REPO_CUST_114', 'REPO_CUST_115', 'REPO_CUST_116', 'REPO_CUST_118', 'REPO_CUST_119', 'REPO_CUST_12', 'REPO_CUST_121', 'REPO_CUST_122', 'REPO_CUST_123', 'REPO_CUST_126', 'REPO_CUST_127', 'REPO_CUST_128', 'REPO_CUST_129', 'REPO_CUST_13', 'REPO_CUST_130', 'REPO_CUST_131', 'REPO_CUST_132', 'REPO_CUST_133', 'REPO_CUST_134', 'REPO_CUST_135', 'REPO_CUST_137', 'REPO_CUST_138', 'REPO_CUST_139', 'REPO_CUST_14', 'REPO_CUST_140', 'REPO_CUST_141', 'REPO_CUST_142', 'REPO_CUST_143', 'REPO_CUST_144', 'REPO_CUST_145', 'REPO_CUST_146', 'REPO_CUST_147', 'REPO_CUST_148', 'REPO_CUST_149', 'REPO_CUST_15', 'REPO_CUST_150', 'REPO_CUST_151', 'REPO_CUST_16', 'REPO_CUST_161', 'REPO_CUST_162', 'REPO_CUST_169', 'REPO_CUST_17', 'REPO_CUST_170', 'REPO_CUST_171', 'REPO_CUST_172', 'REPO_CUST_173', 'REPO_CUST_174', 'REPO_CUST_175', 'REPO_CUST_176', 'REPO_CUST_177', 'REPO_CUST_178', 'REPO_CUST_179', 'REPO_CUST_18', 'REPO_CUST_180', 'REPO_CUST_183', 'REPO_CUST_184', 'REPO_CUST_185', 'REPO_CUST_188', 'REPO_CUST_189', 'REPO_CUST_19', 'REPO_CUST_191', 'REPO_CUST_192', 'REPO_CUST_193', 'REPO_CUST_194', 'REPO_CUST_195', 'REPO_CUST_196', 'REPO_CUST_197', 'REPO_CUST_198', 'REPO_CUST_199', 'REPO_CUST_2', 'REPO_CUST_20', 'REPO_CUST_203', 'REPO_CUST_204', 'REPO_CUST_205', 'REPO_CUST_206', 'REPO_CUST_209', 'REPO_CUST_21', 'REPO_CUST_210', 'REPO_CUST_211', 'REPO_CUST_214', 'REPO_CUST_215', 'REPO_CUST_218', 'REPO_CUST_219', 'REPO_CUST_22', 'REPO_CUST_220', 'REPO_CUST_221', 'REPO_CUST_222', 'REPO_CUST_223', 'REPO_CUST_225', 'REPO_CUST_226', 'REPO_CUST_227', 'REPO_CUST_229', 'REPO_CUST_230', 'REPO_CUST_231', 'REPO_CUST_232', 'REPO_CUST_233', 'REPO_CUST_234', 'REPO_CUST_235', 'REPO_CUST_239', 'REPO_CUST_240', 'REPO_CUST_241', 'REPO_CUST_242', 'REPO_CUST_243', 'REPO_CUST_246', 'REPO_CUST_248', 'REPO_CUST_249', 'REPO_CUST_25', 'REPO_CUST_250', 'REPO_CUST_251', 'REPO_CUST_256', 'REPO_CUST_257', 'REPO_CUST_258', 'REPO_CUST_26', 'REPO_CUST_261', 'REPO_CUST_262', 'REPO_CUST_264', 'REPO_CUST_266', 'REPO_CUST_267', 'REPO_CUST_268', 'REPO_CUST_269', 'REPO_CUST_27', 'REPO_CUST_270', 'REPO_CUST_271', 'REPO_CUST_272', 'REPO_CUST_273', 'REPO_CUST_274', 'REPO_CUST_277', 'REPO_CUST_278', 'REPO_CUST_279', 'REPO_CUST_28', 'REPO_CUST_280', 'REPO_CUST_281', 'REPO_CUST_282', 'REPO_CUST_283', 'REPO_CUST_284', 'REPO_CUST_285', 'REPO_CUST_286', 'REPO_CUST_29', 'REPO_CUST_292', 'REPO_CUST_293', 'REPO_CUST_3', 'REPO_CUST_30', 'REPO_CUST_31', 'REPO_CUST_32', 'REPO_CUST_33', 'REPO_CUST_34', 'REPO_CUST_35', 'REPO_CUST_36', 'REPO_CUST_37', 'REPO_CUST_38', 'REPO_CUST_39', 'REPO_CUST_4', 'REPO_CUST_40', 'REPO_CUST_41', 'REPO_CUST_42', 'REPO_CUST_43', 'REPO_CUST_44', 'REPO_CUST_48', 'REPO_CUST_49', 'REPO_CUST_5', 'REPO_CUST_51', 'REPO_CUST_53', 'REPO_CUST_54', 'REPO_CUST_55', 'REPO_CUST_56', 'REPO_CUST_57', 'REPO_CUST_58', 'REPO_CUST_59', 'REPO_CUST_6', 'REPO_CUST_60', 'REPO_CUST_61', 'REPO_CUST_62', 'REPO_CUST_63', 'REPO_CUST_64', 'REPO_CUST_65', 'REPO_CUST_66', 'REPO_CUST_67', 'REPO_CUST_68', 'REPO_CUST_69', 'REPO_CUST_7', 'REPO_CUST_71', 'REPO_CUST_72', 'REPO_CUST_73', 'REPO_CUST_74', 'REPO_CUST_8', 'REPO_CUST_80', 'REPO_CUST_81', 'REPO_CUST_82', 'REPO_CUST_83', 'REPO_CUST_84', 'REPO_CUST_85', 'REPO_CUST_87', 'REPO_CUST_88', 'REPO_CUST_9', 'REPO_CUST_90', 'REPO_CUST_91', 'REPO_CUST_94', 'REPO_CUST_95', 'REPO_CUST_96', 'REPO_CUST_97', 'REPO_CUST_98', 'REPO_CUST_99', 'REPO_CUST_NEG100', 'REPO_CUST_NEG101', 'REPO_CUST_NEG105', 'REPO_CUST_NEG106', 'REPO_CUST_NEG108', 'REPO_CUST_NEG109', 'REPO_CUST_NEG110', 'REPO_CUST_NEG111', 'REPO_CUST_NEG112', 'REPO_CUST_NEG113', 'REPO_CUST_NEG114', 'REPO_CUST_NEG115', 'REPO_CUST_NEG116', 'REPO_CUST_NEG118', 'REPO_CUST_NEG120', 'REPO_CUST_NEG121', 'REPO_CUST_NEG122', 'REPO_CUST_NEG123', 'REPO_CUST_NEG124', 'REPO_CUST_NEG125', 'REPO_CUST_NEG126', 'REPO_CUST_NEG127', 'REPO_CUST_NEG128', 'REPO_CUST_NEG130', 'REPO_CUST_NEG131', 'REPO_CUST_NEG132', 'REPO_CUST_NEG133', 'REPO_CUST_NEG134', 'REPO_CUST_NEG135', 'REPO_CUST_NEG136', 'REPO_CUST_NEG137', 'REPO_CUST_NEG138', 'REPO_CUST_NEG139', 'REPO_CUST_NEG140', 'REPO_CUST_NEG141', 'REPO_CUST_NEG144', 'REPO_CUST_NEG145', 'REPO_CUST_NEG146', 'REPO_CUST_NEG147', 'REPO_CUST_NEG148', 'REPO_CUST_NEG149', 'REPO_CUST_NEG150', 'REPO_CUST_NEG151', 'REPO_CUST_NEG152', 'REPO_CUST_NEG153', 'REPO_CUST_NEG154', 'REPO_CUST_NEG155', 'REPO_CUST_NEG156', 'REPO_CUST_NEG157', 'REPO_CUST_NEG158', 'REPO_CUST_NEG159', 'REPO_CUST_NEG160', 'REPO_CUST_NEG161', 'REPO_CUST_NEG162', 'REPO_CUST_NEG175', 'REPO_CUST_NEG178', 'REPO_CUST_NEG179', 'REPO_CUST_NEG180', 'REPO_CUST_NEG181', 'REPO_CUST_NEG182', 'REPO_CUST_NEG183', 'REPO_CUST_NEG184', 'REPO_CUST_NEG185', 'REPO_CUST_NEG186', 'REPO_CUST_NEG187', 'REPO_CUST_NEG188', 'REPO_CUST_NEG195', 'REPO_CUST_NEG196', 'REPO_CUST_NEG197', 'REPO_CUST_NEG198', 'REPO_CUST_NEG199', 'REPO_CUST_NEG200', 'REPO_CUST_NEG201', 'REPO_CUST_NEG202', 'REPO_CUST_NEG203', 'REPO_CUST_NEG204', 'REPO_CUST_NEG205', 'REPO_CUST_NEG206', 'REPO_CUST_NEG209', 'REPO_CUST_NEG210', 'REPO_CUST_NEG211', 'REPO_CUST_NEG212', 'REPO_CUST_NEG213', 'REPO_CUST_NEG214', 'REPO_CUST_NEG215', 'REPO_CUST_NEG216', 'REPO_CUST_NEG221', 'REPO_CUST_NEG222', 'REPO_CUST_NEG223', 'REPO_CUST_NEG224', 'REPO_CUST_NEG225', 'REPO_CUST_NEG226', 'REPO_CUST_NEG227', 'REPO_CUST_NEG228', 'REPO_CUST_NEG231', 'REPO_CUST_NEG232', 'REPO_CUST_NEG233', 'REPO_CUST_NEG234', 'REPO_CUST_NEG235', 'REPO_CUST_NEG236', 'REPO_CUST_NEG239', 'REPO_CUST_NEG240', 'REPO_CUST_NEG241', 'REPO_CUST_NEG242', 'REPO_CUST_NEG245', 'REPO_CUST_NEG246', 'REPO_CUST_NEG247', 'REPO_CUST_NEG248', 'REPO_CUST_NEG249', 'REPO_CUST_NEG250', 'REPO_CUST_NEG251', 'REPO_CUST_NEG252', 'REPO_CUST_NEG253', 'REPO_CUST_NEG254', 'REPO_CUST_NEG255', 'REPO_CUST_NEG256', 'REPO_CUST_NEG257', 'REPO_CUST_NEG258', 'REPO_CUST_NEG259', 'REPO_CUST_NEG260', 'REPO_CUST_NEG261', 'REPO_CUST_NEG262', 'REPO_CUST_NEG263', 'REPO_CUST_NEG264', 'REPO_CUST_NEG265', 'REPO_CUST_NEG266', 'REPO_CUST_NEG267', 'REPO_CUST_NEG268', 'REPO_CUST_NEG269', 'REPO_CUST_NEG273', 'REPO_CUST_NEG274', 'REPO_CUST_NEG275', 'REPO_CUST_NEG277', 'REPO_CUST_NEG278', 'REPO_CUST_NEG279', 'REPO_CUST_NEG280', 'REPO_CUST_NEG281', 'REPO_CUST_NEG284', 'REPO_CUST_NEG285', 'REPO_CUST_PAGE', 'REPO_EMAIL', 'REPO_FINANCIALLAYOUTS', 'REPO_GST34', 'REPO_NEG100', 'REPO_NEG101', 'REPO_NEG105', 'REPO_NEG106', 'REPO_NEG108', 'REPO_NEG109', 'REPO_NEG110', 'REPO_NEG111', 'REPO_NEG112', 'REPO_NEG113', 'REPO_NEG114', 'REPO_NEG115', 'REPO_NEG116', 'REPO_NEG118', 'REPO_NEG119', 'REPO_NEG120', 'REPO_NEG121', 'REPO_NEG122', 'REPO_NEG123', 'REPO_NEG124', 'REPO_NEG125', 'REPO_NEG126', 'REPO_NEG127', 'REPO_NEG128', 'REPO_NEG129', 'REPO_NEG130', 'REPO_NEG131', 'REPO_NEG132', 'REPO_NEG133', 'REPO_NEG134', 'REPO_NEG135', 'REPO_NEG136', 'REPO_NEG137', 'REPO_NEG138', 'REPO_NEG139', 'REPO_NEG140', 'REPO_NEG141', 'REPO_NEG144', 'REPO_NEG145', 'REPO_NEG146', 'REPO_NEG147', 'REPO_NEG148', 'REPO_NEG149', 'REPO_NEG150', 'REPO_NEG151', 'REPO_NEG152', 'REPO_NEG153', 'REPO_NEG154', 'REPO_NEG155', 'REPO_NEG156', 'REPO_NEG157', 'REPO_NEG158', 'REPO_NEG159', 'REPO_NEG160', 'REPO_NEG161', 'REPO_NEG162', 'REPO_NEG175', 'REPO_NEG178', 'REPO_NEG179', 'REPO_NEG180', 'REPO_NEG181', 'REPO_NEG182', 'REPO_NEG183', 'REPO_NEG184', 'REPO_NEG185', 'REPO_NEG186', 'REPO_NEG187', 'REPO_NEG188', 'REPO_NEG195', 'REPO_NEG196', 'REPO_NEG197', 'REPO_NEG198', 'REPO_NEG199', 'REPO_NEG200', 'REPO_NEG201', 'REPO_NEG202', 'REPO_NEG203', 'REPO_NEG204', 'REPO_NEG205', 'REPO_NEG206', 'REPO_NEG209', 'REPO_NEG210', 'REPO_NEG211', 'REPO_NEG212', 'REPO_NEG213', 'REPO_NEG214', 'REPO_NEG215', 'REPO_NEG216', 'REPO_NEG221', 'REPO_NEG222', 'REPO_NEG223', 'REPO_NEG224', 'REPO_NEG225', 'REPO_NEG226', 'REPO_NEG227', 'REPO_NEG228', 'REPO_NEG231', 'REPO_NEG232', 'REPO_NEG233', 'REPO_NEG234', 'REPO_NEG235', 'REPO_NEG236', 'REPO_NEG237', 'REPO_NEG239', 'REPO_NEG240', 'REPO_NEG241', 'REPO_NEG242', 'REPO_NEG245', 'REPO_NEG246', 'REPO_NEG247', 'REPO_NEG248', 'REPO_NEG249', 'REPO_NEG250', 'REPO_NEG251', 'REPO_NEG252', 'REPO_NEG253', 'REPO_NEG254', 'REPO_NEG255', 'REPO_NEG256', 'REPO_NEG257', 'REPO_NEG258', 'REPO_NEG259', 'REPO_NEG260', 'REPO_NEG261', 'REPO_NEG262', 'REPO_NEG263', 'REPO_NEG264', 'REPO_NEG265', 'REPO_NEG266', 'REPO_NEG267', 'REPO_NEG268', 'REPO_NEG269', 'REPO_NEG271', 'REPO_NEG273', 'REPO_NEG274', 'REPO_NEG275', 'REPO_NEG277', 'REPO_NEG278', 'REPO_NEG279', 'REPO_NEG280', 'REPO_NEG281', 'REPO_NEG284', 'REPO_NEG285', 'REPO_NEG322', 'REPO_NEG324', 'REPO_NEWFINANCIALREPORT', 'REPO_QUICKREPORT', 'REPO_RECENT', 'REPO_REGISTER_ACCTPAY', 'REPO_REGISTER_ACCTREC', 'REPO_REGISTER_BANK', 'REPO_REGISTER_COGS', 'REPO_REGISTER_CREDCARD', 'REPO_REGISTER_DEFEREXPENSE', 'REPO_REGISTER_DEFERREVENUE', 'REPO_REGISTER_EQUITY', 'REPO_REGISTER_EXPENSE', 'REPO_REGISTER_FIXEDASSET', 'REPO_REGISTER_INCOME', 'REPO_REGISTER_LONGTERMLIAB', 'REPO_REGISTER_NONPOSTING', 'REPO_REGISTER_OTHASSET', 'REPO_REGISTER_OTHCURRASSET', 'REPO_REGISTER_OTHCURRLIAB', 'REPO_REGISTER_OTHEXPENSE', 'REPO_REGISTER_OTHINCOME', 'REPO_REGISTER_UNBILLEDREC', 'SRCH_ACCOUNT', 'SRCH_ACCOUNTINGBOOK', 'SRCH_ACCOUNTINGPERIOD', 'SRCH_ACCOUNTINGTRANSACTION', 'SRCH_ACTIVITY', 'SRCH_AMORTIZATIONSCHEDULE', 'SRCH_APPDEF', 'SRCH_APPPKG', 'SRCH_AUDITTRAIL', 'SRCH_BILLINGCLASS', 'SRCH_BILLINGRULE', 'SRCH_BILLINGSCHEDULE', 'SRCH_BILLOFDISTRIBUTION', 'SRCH_BILLRUN', 'SRCH_BILLRUNSCHEDULE', 'SRCH_BIN', 'SRCH_BINNUMBER', 'SRCH_BUDGET', 'SRCH_BUDGETRATES', 'SRCH_CALENDAR', 'SRCH_CALL', 'SRCH_CAMPAIGN', 'SRCH_CASE', 'SRCH_CHARGE', 'SRCH_CHARGERULE', 'SRCH_CLASS', 'SRCH_CLASSSEGMENTMAPPING', 'SRCH_COMMISSIONABLEITEM', 'SRCH_COMMISSIONOVERVIEW', 'SRCH_COMPANY', 'SRCH_COMPETITOR', 'SRCH_CONSOLEXCHANGERATE', 'SRCH_CONSOLRATES', 'SRCH_CONTACT', 'SRCH_COUPONCODE', 'SRCH_CRMGROUP', 'SRCH_CUSTOMER', 'SRCH_DELETEDRECORD', 'SRCH_DEPARTMENT', 'SRCH_DEPTSEGMENTMAPPING', 'SRCH_DISTRIBUTIONNETWORK', 'SRCH_DOCUMENT', 'SRCH_EMPLOYEE', 'SRCH_EMPLOYEEPAYROLLITEM', 'SRCH_ENTITY', 'SRCH_ENTITYACCOUNTMAPPING', 'SRCH_FIRSTVISIT', 'SRCH_FISCALCALENDAR', 'SRCH_FOLDER', 'SRCH_GENERICRESOURCE', 'SRCH_GIFTCERTIFICATE', 'SRCH_GLOBALACCOUNTMAPPING', 'SRCH_INFOITEM', 'SRCH_INFOITEMFORM', 'SRCH_INVCOSTTEMPLATE', 'SRCH_INVENTORYNUMBER', 'SRCH_INVENTORYNUMBERBIN', 'SRCH_ISSUE', 'SRCH_ITEM', 'SRCH_ITEMACCOUNTMAPPING', 'SRCH_ITEMDEMANDPLAN', 'SRCH_ITEMSUPPLYPLAN', 'SRCH_ITEM_REVISION', 'SRCH_JOB', 'SRCH_LEAD', 'SRCH_LOCATION', 'SRCH_LOCSEGMENTMAPPING', 'SRCH_LOGINAUDIT', 'SRCH_MEDIAITEM', 'SRCH_MEMDOC', 'SRCH_MESSAGE', 'SRCH_MFGCOSTTEMPLATE', 'SRCH_MFGOPERATIONTASK', 'SRCH_MFGPLANNEDTIME', 'SRCH_MFGROUTING', 'SRCH_NEXUS', 'SRCH_ONLINECASEFORM', 'SRCH_ONLINELEADFORM', 'SRCH_PARTNER', 'SRCH_PAYMENTEVENT', 'SRCH_PAYROLLITEM', 'SRCH_PLANNEDSTANDARDCOST', 'SRCH_PRESCATEGORY', 'SRCH_PRICING', 'SRCH_PROJECTEXPENSETYPE', 'SRCH_PROJECTRESOURCE', 'SRCH_PROJECTTASK', 'SRCH_PROJECTTASKANDCRMTASK', 'SRCH_PROJECTTEMPLATE', 'SRCH_PROMOTION', 'SRCH_PROSPECT', 'SRCH_QUOTA', 'SRCH_REPORT', 'SRCH_RESOURCEGROUP', 'SRCH_REVREC', 'SRCH_REVRECOGNITIONSCHED', 'SRCH_ROLE', 'SRCH_RSRCALLOCATION', 'SRCH_SALESCAMPAIGN', 'SRCH_SALESTERRITORIES', 'SRCH_SAVEDSEARCH', 'SRCH_SCHEDULEDSCRIPTINSTANCE', 'SRCH_SCRIPT', 'SRCH_SCRIPTDEPLOYMENT', 'SRCH_SCRIPTNOTE', 'SRCH_SHIPITEM', 'SRCH_SHIPMENTPACKAGE', 'SRCH_SHIPPARTPACKAGE', 'SRCH_SHIPPARTREGISTRATION', 'SRCH_SHIPPARTSHIPMENT', 'SRCH_SHOPPINGCART', 'SRCH_SOLUTION', 'SRCH_STANDARDCOSTVERSION', 'SRCH_SUBSIDIARY', 'SRCH_SYSTEMNOTE', 'SRCH_TASK', 'SRCH_TAXGROUP', 'SRCH_TAXITEM', 'SRCH_TIME', 'SRCH_TIMEENTRY', 'SRCH_TIMESHEET', 'SRCH_TOPIC', 'SRCH_TRANNUMBERAUDITLOG', 'SRCH_TRANSACTION', 'SRCH_TRAN_BINTRNFR', 'SRCH_TRAN_BINWKSHT', 'SRCH_TRAN_BLANKORD', 'SRCH_TRAN_BOOKJOURNAL', 'SRCH_TRAN_BUILD', 'SRCH_TRAN_CARDCHRG', 'SRCH_TRAN_CASHRFND', 'SRCH_TRAN_CASHSALE', 'SRCH_TRAN_CHECK', 'SRCH_TRAN_COMMISSN', 'SRCH_TRAN_CUSTCHRG', 'SRCH_TRAN_CUSTCRED', 'SRCH_TRAN_CUSTDEP', 'SRCH_TRAN_CUSTINVC', 'SRCH_TRAN_CUSTPYMT', 'SRCH_TRAN_CUSTRFND', 'SRCH_TRAN_DEPAPPL', 'SRCH_TRAN_DEPOSIT', 'SRCH_TRAN_ESTIMATE', 'SRCH_TRAN_EXPREPT', 'SRCH_TRAN_FXREVAL', 'SRCH_TRAN_INVADJST', 'SRCH_TRAN_INVCOUNT', 'SRCH_TRAN_INVDISTR', 'SRCH_TRAN_INVREVAL', 'SRCH_TRAN_INVTRNFR', 'SRCH_TRAN_INVWKSHT', 'SRCH_TRAN_ITEMRCPT', 'SRCH_TRAN_ITEMSHIP', 'SRCH_TRAN_JOURNAL', 'SRCH_TRAN_LIABPYMT', 'SRCH_TRAN_OPPRTNTY', 'SRCH_TRAN_PAYCHECK', 'SRCH_TRAN_PCHKJRNL', 'SRCH_TRAN_PURCHCON', 'SRCH_TRAN_PURCHORD', 'SRCH_TRAN_PURCHREQ', 'SRCH_TRAN_REVCOMM', 'SRCH_TRAN_REVCOMRV', 'SRCH_TRAN_REVCONTR', 'SRCH_TRAN_RFQ', 'SRCH_TRAN_RTNAUTH', 'SRCH_TRAN_SALESORD', 'SRCH_TRAN_STATJOURNAL', 'SRCH_TRAN_TAXLIAB', 'SRCH_TRAN_TAXPYMT', 'SRCH_TRAN_TEGPYBL', 'SRCH_TRAN_TEGRCVBL', 'SRCH_TRAN_TRANSFER', 'SRCH_TRAN_TRNFRORD', 'SRCH_TRAN_UNBUILD', 'SRCH_TRAN_VENDAUTH', 'SRCH_TRAN_VENDBILL', 'SRCH_TRAN_VENDCRED', 'SRCH_TRAN_VENDPYMT', 'SRCH_TRAN_VENDRFQ', 'SRCH_TRAN_WOCLOSE', 'SRCH_TRAN_WOCOMPL', 'SRCH_TRAN_WOISSUE', 'SRCH_TRAN_WORKORD', 'SRCH_TRAN_YTDADJST', 'SRCH_UNITSTYPE', 'SRCH_USERNOTE', 'SRCH_VENDOR', 'SRCH_WORKCALENDAR', 'SRCH_WORKFLOW', 'SRCH_WORKFLOWINSTANCE', 'SRCH_WORKPLACE', 'SUPT_ALLOW_LOGIN', 'SUPT_BUG_BILLING', 'SUPT_BUG_SUPPORT', 'SUPT_BUG_SUPPORT_POPUP', 'SUPT_CENTER_ROLE', 'SUPT_GENERICHELP', 'SUPT_GLOSSARY', 'SUPT_GUIDES', 'SUPT_HELP', 'SUPT_MENUOPTIONS', 'SUPT_NSCENTRAL', 'SUPT_POLICYFORM', 'SUPT_RELEASENOTES', 'SUPT_SNEAKPEAK9_5', 'SUPT_VERSION_10_5', 'TRAN_ACTIVITY', 'TRAN_ADDCONTENT', 'TRAN_ADDSHORTCUT', 'TRAN_ALLOCATEPAYCHECKSTOJOBS', 'TRAN_ALLOCATIONBATCH', 'TRAN_APPROVAL_EXPREPT', 'TRAN_APPROVAL_PURCHORD', 'TRAN_APPROVECOMMISSN', 'TRAN_APPROVEPARTNERCOMMISSN', 'TRAN_AUDIT', 'TRAN_BANKRECON', 'TRAN_BANKVIEW', 'TRAN_BAS', 'TRAN_BATCHCHECK', 'TRAN_BILLOFMATERIALSINQUIRY', 'TRAN_BILLPAY_LOG', 'TRAN_BILLRUN', 'TRAN_BILLRUNRESULT', 'TRAN_BLANKORDAPPRV', 'TRAN_BUDGET', 'TRAN_BULKAUTHCOMMISSN_LOG', 'TRAN_BULKAUTHPARTNERCOMMISSN_LOG', 'TRAN_BULKBILL_LOG', 'TRAN_BULKCOMMITREVENUE_LOG', 'TRAN_BULKFULFILL_LOG', 'TRAN_BULKINVOICE_LOG', 'TRAN_BULKITEMSHIPSTATUSPACK_LOG', 'TRAN_BULKITEMSHIPSTATUSSHIP_LOG', 'TRAN_BULKRECEIVE_LOG', 'TRAN_BULKREVENUECONTRACT_LOG', 'TRAN_CALCULATEITEMDEMANDPLAN', 'TRAN_CALCULATEITEMDEMANDPLAN_STATUS', 'TRAN_CALENDARPREFERENCE', 'TRAN_CAMPAIGNSETUP', 'TRAN_CHARGEMANAGER', 'TRAN_CHECKITEMAVAILABILITY', 'TRAN_CLEARHOLD', 'TRAN_CLOSEWORKORDERS_LOG', 'TRAN_COMPLETEWORKORDERS_LOG', 'TRAN_COMPONENTWHEREUSEDINQUIRY', 'TRAN_COPY_BUDGET', 'TRAN_COSTEDBOMINQUIRY', 'TRAN_CREATEAMORTIZATIONJE', 'TRAN_CREATEAMORTIZATIONJE_LOG', 'TRAN_CREATEDEGROSSJE', 'TRAN_CREATEDEGROSSJE_LOG', 'TRAN_CREATEINTERCOADJJE', 'TRAN_CREATEINTERCOADJJE_LOG', 'TRAN_CREATEREVRECJE', 'TRAN_CREATEREVRECJE_LOG', 'TRAN_CREATE_INVCOUNT', 'TRAN_CREATE_JOBS_FROM_ORDERS', 'TRAN_CREATE_WORK_ORDERS_FOR_STOCK', 'TRAN_CREATE_WORK_ORDERS_FOR_STOCK_DEMAND_PLANNING', 'TRAN_CREATE_WORK_ORDERS_FOR_STOCK_LOG', 'TRAN_CUSTCATEGORY', 'TRAN_CUSTINVCAPPRV', 'TRAN_CUSTOMIZEITEMLIST', 'TRAN_CUSTOMIZETRANLIST', 'TRAN_DEPOSITSUMMARY', 'TRAN_DOMAINS', 'TRAN_DOMAINSADV', 'TRAN_EMAILPWD', 'TRAN_EMPLOYEESFA', 'TRAN_FINCHRG', 'TRAN_FORECAST', 'TRAN_FXREVAL_STATUS', 'TRAN_GENERATEFISCALPERIODS', 'TRAN_GENERATEITEMSUPPLYPLAN', 'TRAN_GENERATEITEMSUPPLYPLAN_STATUS', 'TRAN_GENERATETAXPERIODS', 'TRAN_GIFTCERTCREATEJE', 'TRAN_GLNUMSTATUS', 'TRAN_GSTREFUND', 'TRAN_HISTORY', 'TRAN_IMPACT', 'TRAN_INVOICECUSTOMERS', 'TRAN_ISSUEWORKORDERS_LOG', 'TRAN_ITEMGROSSREQUIREMENTS', 'TRAN_ITEMSHIPPACK', 'TRAN_ITEMSHIPSHIP', 'TRAN_JOURNALAPPROVAL', 'TRAN_LASTLOGIN', 'TRAN_LOGINAUDIT', 'TRAN_MARKBUILTWORKORDERS_LOG', 'TRAN_MARKVSOEDELIVERED', 'TRAN_MARKVSOEDELIVERED_LOG', 'TRAN_MATCHING_RULES', 'TRAN_MGRFORECAST', 'TRAN_NLVENDOR', 'TRAN_OPENBAL', 'TRAN_ORDERDEMANDPLANITEMS', 'TRAN_ORDERITEMS', 'TRAN_ORDER_REALLOCATION_LOG', 'TRAN_PAYMENTS', 'TRAN_PAYROLLBATCH', 'TRAN_PAYROLLRUN', 'TRAN_PAYROLLSTATUS', 'TRAN_PDF_F940', 'TRAN_PDF_F941', 'TRAN_PLANNEDSTANDARDCOSTROLLUP', 'TRAN_PLANNEDSTANDARDCOSTROLLUP_STATUS', 'TRAN_POSTVENDORBILLVARIANCES', 'TRAN_POSTVENDORBILLVARIANCES_STATUS', 'TRAN_PREVIEWW2', 'TRAN_PRINT', 'TRAN_PRINT1096', 'TRAN_PRINT1099', 'TRAN_PRINTBARCODES', 'TRAN_PRINTMAILINGLABELS', 'TRAN_PRINTPRICELIST', 'TRAN_PRINTSTATEMENT', 'TRAN_PRINTW2', 'TRAN_PRINTW2AUDIT', 'TRAN_PRINTW3', 'TRAN_PRINT_BOM', 'TRAN_PRINT_CASHSALE', 'TRAN_PRINT_CHECK', 'TRAN_PRINT_COMMERCIALINVOICE', 'TRAN_PRINT_CUSTCRED', 'TRAN_PRINT_CUSTINVC', 'TRAN_PRINT_ESTIMATE', 'TRAN_PRINT_INTEGRATEDSHIPPINGLABEL', 'TRAN_PRINT_ITEM_DETAIL_STATEMENT', 'TRAN_PRINT_ONE_ITEM_DETAIL_STATEMENT', 'TRAN_PRINT_PACKINGSLIP', 'TRAN_PRINT_PAYCHECK', 'TRAN_PRINT_PAYMENTVOUCHER', 'TRAN_PRINT_PICKINGTICKET', 'TRAN_PRINT_PRICELIST', 'TRAN_PRINT_PURCHORD', 'TRAN_PRINT_RTNAUTH', 'TRAN_PRINT_SALESORD', 'TRAN_PRINT_SHIPPINGLABEL', 'TRAN_PRINT_STATEMENT', 'TRAN_PROCESSCOMMISSN', 'TRAN_PROCESSICRTNAUTHS', 'TRAN_PROCESSICSALESORDERS', 'TRAN_PROCESSORDER', 'TRAN_PROCESSPARTNERCOMMISSN', 'TRAN_PURCHCONAPPRV', 'TRAN_PURCHORDPROC', 'TRAN_PURCHORDRECEIVE', 'TRAN_PURCHREQAPPRV', 'TRAN_QUOTA', 'TRAN_REALLOCITEMS', 'TRAN_RECONCILE', 'TRAN_RECONCILE_CC', 'TRAN_REIMBURSEMENTS', 'TRAN_REMINDERS', 'TRAN_REVALUESTANDARDCOSTINVENTORY', 'TRAN_REVALUESTANDARDCOSTINVENTORY_STATUS', 'TRAN_REVIEWNEGATIVEINVENTORY', 'TRAN_REVRECCREATEJE', 'TRAN_RTNAUTHAPPRV', 'TRAN_RTNAUTHCREDIT', 'TRAN_RTNAUTHRECEIVE', 'TRAN_RTNAUTHREVERSEREVCOMMITMENT', 'TRAN_SALESORDAPPRV', 'TRAN_SALESORDCOMMITREVENUE', 'TRAN_SALESORDFULFILL', 'TRAN_SALESORDPROC', 'TRAN_SALESORDREVENUECONTRACT', 'TRAN_SCHEDULE_ORDER_REALLOCATION', 'TRAN_SEARCH', 'TRAN_SHORTCUTS', 'TRAN_SNAPSHOTCOMPOSER', 'TRAN_SNAPSHOTS', 'TRAN_STATSCHEDULE', 'TRAN_TAXPERIODS', 'TRAN_TIMEAPPROVAL', 'TRAN_TIMEBILL', 'TRAN_TIMEBILL_WEEKLY', 'TRAN_TIMECALC', 'TRAN_TIMEENTRYAPPROVAL', 'TRAN_TIMEPOST', 'TRAN_TIMER', 'TRAN_TIMESHEETAPPROVAL', 'TRAN_TIMEVOID', 'TRAN_TRNFRORDAPPRV', 'TRAN_USERPREFS', 'TRAN_VENDAUTHAPPRV', 'TRAN_VENDAUTHCREDIT', 'TRAN_VENDAUTHRETURN', 'TRAN_VENDBILLAPPRV', 'TRAN_VENDBILLPURCHORD', 'TRAN_VENDPYMTS', 'TRAN_VENDPYMT_LOG', 'TRAN_WORKORDBUILD', 'TRAN_WORKORDBUILD_LOG', 'TRAN_WORKORDCLOSE', 'TRAN_WORKORDCOMPLETE', 'TRAN_WORKORDISSUE', 'TRAN_WORKORDMARKBUILT', 'TRAN_WORKORDMARKFIRMED', 'TRAN_WORKORDMARKRELEASED'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_standard_taskElemID.name],
  }),
  generic_standard_template: new PrimitiveType({
    elemID: generic_standard_templateElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['-200', '-201', '-202', '-203', '-204', '-205', '-206', '-207', '-208', '-209', '-210', '-211', '-212', '-213', '-214', '-215', '-216', '-217', '-218', '-219', '-220', '-221', '-222', '-223', '-224', '-225', '-226', '-600', '-683', '-684'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_standard_templateElemID.name],
  }),
  generic_standard_transactions: new PrimitiveType({
    elemID: generic_standard_transactionsElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ADVINTERCOMPANYJOURNALENTRY', 'ASSEMBLYBUILD', 'ASSEMBLYUNBUILD', 'BINTRANSFER', 'BINWORKSHEET', 'BLANKETPURCHASEORDER', 'CASHREFUND', 'CASHSALE', 'CHECK', 'CREDITCARDCHARGE', 'CREDITCARDREFUND', 'CREDITMEMO', 'CUSTOMERDEPOSIT', 'CUSTOMERPAYMENT', 'CUSTOMERPAYMENTAUTHORIZATION', 'CUSTOMERREFUND', 'DEPOSIT', 'DEPOSITAPPLICATION', 'ESTIMATE', 'EXPENSEREPORT', 'FULFILLMENTREQUEST', 'INTERCOMPANYJOURNALENTRY', 'INTERCOMPANYTRANSFERORDER', 'INVENTORYADJUSTMENT', 'INVENTORYCOSTREVALUATION', 'INVENTORYCOUNT', 'INVENTORYSTATUSCHANGE', 'INVENTORYTRANSFER', 'INVOICE', 'ITEMFULFILLMENT', 'ITEMRECEIPT', 'JOURNALENTRY', 'ORDERRESERVATION', 'PAYCHECK', 'PAYCHECKJOURNAL', 'PERIODENDJOURNAL', 'PURCHASECONTRACT', 'PURCHASEORDER', 'PURCHASEREQUISITION', 'RETURNAUTHORIZATION', 'REVENUEARRANGEMENT', 'REVENUECOMMITMENT', 'REVENUECOMMITMENTREVERSAL', 'SALESORDER', 'STATISTICALJOURNALENTRY', 'STOREPICKUPFULFILLMENT', 'TRANSFERORDER', 'VENDORBILL', 'VENDORCREDIT', 'VENDORPAYMENT', 'VENDORPREPAYMENT', 'VENDORPREPAYMENTAPPLICATION', 'VENDORRETURNAUTHORIZATION', 'WAVE', 'WORKORDER', 'WORKORDERCLOSE', 'WORKORDERCOMPLETION', 'WORKORDERISSUE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_standard_transactionsElemID.name],
  }),
  generic_tab_parent: new PrimitiveType({
    elemID: generic_tab_parentElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CRMBUDGET', 'CRMCONTACTS', 'CRMKEYWORD', 'CRMMAIN', 'CRMMESSAGE', 'CRMRELATEDINFO', 'CRMRELATEDRECORDS', 'CRMSYSTEMINFORMATION', 'ENTITYACCESS', 'ENTITYACCOUNTING', 'ENTITYBUDGET', 'ENTITYCOMMUNICATION', 'ENTITYCOMPENSATIONTRACKING', 'ENTITYFINANCIAL', 'ENTITYGENERAL', 'ENTITYHUMANRESOURCES', 'ENTITYINFO', 'ENTITYMAIN', 'ENTITYMARKETING', 'ENTITYPL', 'ENTITYPREFERENCES', 'ENTITYQUALIFICATION', 'ENTITYRELATEDRECORDS', 'ENTITYRELATIONSHIPS', 'ENTITYSALES', 'ENTITYSUBSCRIPTIONS', 'ENTITYSUPPORT', 'ENTITYTIMEOFF', 'ENTITYTIMETRACKING', 'ITEMBASIC', 'ITEMCOMMUNICATION', 'ITEMINVENTORY', 'ITEMLOCATIONS', 'ITEMMAIN', 'ITEMMATRIX', 'ITEMPURCHASINGINVENTORY', 'ITEMSYSTEMINFORMATION', 'ITEMVENDORS', 'TRANSACTIONACCOUNTING', 'TRANSACTIONADDRESS', 'TRANSACTIONBILLING', 'TRANSACTIONBUILDS', 'TRANSACTIONCOMMUNICATION', 'TRANSACTIONFULFILLMENTSANDCREDITS', 'TRANSACTIONFULFILLMENTSANDRECEIPTS', 'TRANSACTIONGENERAL', 'TRANSACTIONHISTORY', 'TRANSACTIONITEMS', 'TRANSACTIONJOURNAL', 'TRANSACTIONMAIN', 'TRANSACTIONOUTPUTOPTIONS', 'TRANSACTIONPAYMENT', 'TRANSACTIONQUALIFICATION', 'TRANSACTIONRECEIPTSANDREFUNDS', 'TRANSACTIONRELATEDRECORDS', 'TRANSACTIONRELATIONSHIPS', 'TRANSACTIONSALES', 'TRANSACTIONSHIPPING', 'TRANSACTIONSYSTEMINFORMATION'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_tab_parentElemID.name],
  }),
  generic_tab_type: new PrimitiveType({
    elemID: generic_tab_typeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CRM', 'ENTITY', 'ITEM', 'TRANSACTION'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_tab_typeElemID.name],
  }),
  generic_task: new PrimitiveType({
    elemID: generic_taskElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ADMI_ACCOUNTCLOSE', 'ADMI_ACCTSETUP', 'ADMI_ACHSETUP', 'ADMI_ACTIVATEBANKACCOUNT', 'ADMI_ADP', 'ADMI_ADVINVENTORYSETUP', 'ADMI_ADVRECORDCUST', 'ADMI_ALLOW_LOGIN', 'ADMI_BACKUP', 'ADMI_BALANCE_TRX_BY_SEGMENTS', 'ADMI_BASSETUP', 'ADMI_BILLINGEVENTS', 'ADMI_BILLINGTERMS', 'ADMI_BILLING_QEST', 'ADMI_BOUNCEDADDRESS', 'ADMI_CACHEINVALIDATIONREQUESTLISTADV', 'ADMI_CERTIFICATES', 'ADMI_CLASSESTOLOCS', 'ADMI_CLEARACCOUNT', 'ADMI_CLOSEPERIOD', 'ADMI_COMMISSIONSETUP', 'ADMI_COMPANY', 'ADMI_COMSEARCHBOOSTING', 'ADMI_CONVERTCLASSES', 'ADMI_CSVIMPORTPREF', 'ADMI_CUSTAPPTEXT', 'ADMI_CUSTOMER_SEGMENTS_MANAGER', 'ADMI_CUSTOMER_SEGMENTS_MANAGER_COMMERCE', 'ADMI_DUPLICATESETUP', 'ADMI_EMAIL', 'ADMI_EXPORTPRODUCTFEEDS', 'ADMI_FEATURES', 'ADMI_FINCHARGEPREF', 'ADMI_GENERAL', 'ADMI_GOVERNANCE', 'ADMI_GO_TO_TAB_COMMERCE_SB', 'ADMI_GO_TO_TAB_COMMERCE_SCE', 'ADMI_GO_TO_TAB_COMMERCE_WS', 'ADMI_HEADING', 'ADMI_HIERARCHYMANAGER', 'ADMI_IMAGERESIZE', 'ADMI_IMAGERESIZE_COMMERCE', 'ADMI_IMPORTADP', 'ADMI_IMPORTCSV', 'ADMI_IMPORTCSV_LOG', 'ADMI_INTEGR_APP', 'ADMI_INTERCOMPANY_SETUP', 'ADMI_INVENTORYCOSTINGSETUP', 'ADMI_INVOICESETUP', 'ADMI_ISSUEEXTSTATUS', 'ADMI_ISSUEIMPORT', 'ADMI_ISSUEPRIORITY', 'ADMI_ISSUEPRODUCT', 'ADMI_ISSUERELEASEUPDATE', 'ADMI_ISSUEREPRODUCE', 'ADMI_ISSUESETUP', 'ADMI_ISSUESEVERITY', 'ADMI_ISSUESOURCE', 'ADMI_ISSUESTATUS', 'ADMI_ISSUESTATUSFLOW', 'ADMI_ISSUETAGS', 'ADMI_ISSUETYPE', 'ADMI_ISSUEUSERTYPE', 'ADMI_KEYS', 'ADMI_LEADCUSTOMFIELDMAPPING', 'ADMI_LOGINAUDIT', 'ADMI_LOGINRESTRICT', 'ADMI_MAINTENANCEDOMAINLIST', 'ADMI_MAINTENANCESCHEDULE', 'ADMI_MANAGEPAYROLL', 'ADMI_MANAGE_PLUGINS', 'ADMI_MANUFACTURING', 'ADMI_NAMING', 'ADMI_NATIVESITEMAPGENERATOR', 'ADMI_NEXUSES', 'ADMI_NEXUSES2', 'ADMI_NOTIFICATIONS', 'ADMI_NSASOIDCPROVIDER', 'ADMI_NUMBERING', 'ADMI_OAUTH_TOKENS', 'ADMI_OAX_CONFIGURATION', 'ADMI_OIDC', 'ADMI_OPENIDSSO', 'ADMI_OTHERSTUB', 'ADMI_OUTSOURCEDMANUFACTURINGMANAGEMENT', 'ADMI_PAYMENTSETUP', 'ADMI_PAYROLL', 'ADMI_PAYROLLMAP', 'ADMI_PAYROLLREP', 'ADMI_PI_REMOVAL_CREATE', 'ADMI_PI_REMOVAL_RUN', 'ADMI_PLANNINGREPOSITORY', 'ADMI_PRINTING', 'ADMI_PROJECT_ACCOUNTING_SETUP', 'ADMI_REDIRECTS', 'ADMI_RELEASEPREVIEW', 'ADMI_REVIEW_CUSTOM_GL', 'ADMI_SAMLSSO', 'ADMI_SANDBOXACCOUNTS', 'ADMI_SAVEDIMPORTS', 'ADMI_SCCONTROLTOWERSETUP', 'ADMI_SCRIPTDEBUGGER', 'ADMI_SECRETS', 'ADMI_SETUPURLS', 'ADMI_SETUPURLSADV', 'ADMI_SFASETUP', 'ADMI_SHIPPING', 'ADMI_SITEMAPGENERATOR', 'ADMI_SITEMAP_MANAGER', 'ADMI_SOFTDESCRIPTORS', 'ADMI_STATETAXIMPORT', 'ADMI_STAXMIGRATION', 'ADMI_STOREADMIN', 'ADMI_STORELIST_COMMERCE', 'ADMI_STOREPREVIEW', 'ADMI_SUBSIDIARYSETTINGSMANAGER', 'ADMI_SUITEPROCESSORS', 'ADMI_SUITESIGNON', 'ADMI_SUPPLYALLOCATIONSETUP', 'ADMI_SUPPORTSETUP', 'ADMI_SWAPPRICES', 'ADMI_TALENT', 'ADMI_TAX', 'ADMI_TAXACCTS', 'ADMI_TAXTYPES', 'ADMI_TAXTYPES2', 'ADMI_TDCLRPOOL', 'ADMI_TDMKMSTR', 'ADMI_TEGATA', 'ADMI_TEXTCUST', 'ADMI_TEXTCUSTADV', 'ADMI_TIMEMODIFICATION', 'ADMI_TRAFFICHEALTH', 'ADMI_TRANSETUP', 'ADMI_TRANSITEMTXT', 'ADMI_TRANSLATION', 'ADMI_TWOFACTORDEVICES', 'ADMI_TWOFACTORROLES', 'ADMI_UPDATEPRICES', 'ADMI_UPSELLSETUP', 'ADMI_URLCOMPONENTS', 'ADMI_USERACCESSRESET', 'ADMI_WEBSERVICEPREFS', 'ADMI_WEBSERVICES_DEV', 'ADMI_WEBSERVICES_STATUS', 'ADMI_WEBSERVICES_USAGE_LOG', 'ADMI_XML_ADP_SETUP', 'ADMI_XML_PAYTRUST_APPROVE', 'ADMI_XML_PAYTRUST_SETUP', 'ADMI_XML_PAYTRUST_STATUS', 'ADMI_YTDTAXLIBANDPYMTS', 'CARD_-181', 'DUMM_SEPARATOR', 'EDIT_ADVANCEDORDERMANAGEMENTSETUP', 'EDIT_ALLOCATION', 'EDIT_ALLOCATIONBATCH', 'EDIT_AMORTJESCHEDULE', 'EDIT_APPPKG', 'EDIT_APPPKG_UPGRADE', 'EDIT_BILLINGACCOUNT', 'EDIT_BILLRUNSCHEDULE', 'EDIT_BUNDLE', 'EDIT_BUNDLEAUDITTRAIL', 'EDIT_CALENDARPREFERENCE', 'EDIT_CAMPAIGNBULK', 'EDIT_CHARGE', 'EDIT_CROSSCHARGE', 'EDIT_CUSTADDRESSFORM', 'EDIT_CUSTPROFILE', 'EDIT_CUSTTASKS', 'EDIT_DEPLOYMENTAUDITTRAIL', 'EDIT_EDITPROFILE', 'EDIT_EMPLOYEESELF', 'EDIT_FINANCIALINSTITUTION', 'EDIT_IC_ALLOCATION', 'EDIT_IMPORT_COUPONCODE', 'EDIT_IMPORT_COUPONCODE_COMMERCE', 'EDIT_INBOUNDSHIPMENT', 'EDIT_INSTALLBUNDLE', 'EDIT_LOCASSIGNRULES_AUDIT_TRAIL', 'EDIT_MAILMERGE', 'EDIT_MEMDOC', 'EDIT_ORDERPROMISINGSETUP', 'EDIT_PROCESSHISTTXN', 'EDIT_PROJECTICCHARGEREQUEST', 'EDIT_RECLASSJESCHEDULE', 'EDIT_REVRECJESCHEDULE', 'EDIT_SUBSCRIPTION', 'EDIT_SUITEAPPLIST', 'EDIT_SUPPORTCASE', 'EDIT_TIMEOFFREQUEST', 'EDIT_TIMESHEET', 'EDIT_TRAN_ADJJOURNAL', 'EDIT_TRAN_ADVICJOURNAL', 'EDIT_TRAN_BINTRNFR', 'EDIT_TRAN_BINWKSHT', 'EDIT_TRAN_BLANKORD', 'EDIT_TRAN_BOOKADVICJOURNAL', 'EDIT_TRAN_BOOKICJOURNAL', 'EDIT_TRAN_BOOKJOURNAL', 'EDIT_TRAN_BUILD', 'EDIT_TRAN_CARDCHRG', 'EDIT_TRAN_CASHRFND', 'EDIT_TRAN_CASHSALE', 'EDIT_TRAN_CHECK', 'EDIT_TRAN_COMMISSN', 'EDIT_TRAN_CUSTAUTH', 'EDIT_TRAN_CUSTCHRG', 'EDIT_TRAN_CUSTCRED', 'EDIT_TRAN_CUSTDEP', 'EDIT_TRAN_CUSTINVC', 'EDIT_TRAN_CUSTPYMT', 'EDIT_TRAN_CUSTRFND', 'EDIT_TRAN_DEPOSIT', 'EDIT_TRAN_ESTIMATE', 'EDIT_TRAN_EXPREPT', 'EDIT_TRAN_FXREVAL', 'EDIT_TRAN_ICJOURNAL', 'EDIT_TRAN_ICTRNFRORD', 'EDIT_TRAN_INVADJST', 'EDIT_TRAN_INVCOUNT', 'EDIT_TRAN_INVDISTR', 'EDIT_TRAN_INVREVAL', 'EDIT_TRAN_INVTRNFR', 'EDIT_TRAN_INVWKSHT', 'EDIT_TRAN_JOURNAL', 'EDIT_TRAN_LIABPYMT', 'EDIT_TRAN_OPPRTNTY', 'EDIT_TRAN_ORDERPURCHREQ', 'EDIT_TRAN_ORDRESV', 'EDIT_TRAN_PARTNERCOMMISSN', 'EDIT_TRAN_PCHKJRNL', 'EDIT_TRAN_PURCHCON', 'EDIT_TRAN_PURCHORD', 'EDIT_TRAN_PURCHREQ', 'EDIT_TRAN_REPLENISHINVENTORY', 'EDIT_TRAN_REPLENISHINVENTORY_MRP', 'EDIT_TRAN_REPLENISHLOC', 'EDIT_TRAN_RFQ', 'EDIT_TRAN_RTNAUTH', 'EDIT_TRAN_SALESORD', 'EDIT_TRAN_STATCHNG', 'EDIT_TRAN_STATJOURNAL', 'EDIT_TRAN_STATSCHEDULE', 'EDIT_TRAN_TAXLIAB', 'EDIT_TRAN_TAXLIAB2', 'EDIT_TRAN_TAXPYMT', 'EDIT_TRAN_TAXPYMT2', 'EDIT_TRAN_TAXPYMTCA', 'EDIT_TRAN_TEGCOLLECT', 'EDIT_TRAN_TEGPAY', 'EDIT_TRAN_TEGPYBL', 'EDIT_TRAN_TEGRCVBL', 'EDIT_TRAN_TRANSFER', 'EDIT_TRAN_TRNFRORD', 'EDIT_TRAN_UNBUILD', 'EDIT_TRAN_VATLIABAU', 'EDIT_TRAN_VENDAUTH', 'EDIT_TRAN_VENDBILL', 'EDIT_TRAN_VENDCRED', 'EDIT_TRAN_VENDORPREPAYMENT', 'EDIT_TRAN_VENDPYMT', 'EDIT_TRAN_WAVE', 'EDIT_TRAN_WITHDRAWINVENTORY', 'EDIT_TRAN_WORKORD', 'EDIT_TRAN_YTDADJST', 'EDIT_UNLOCKEDTIMEPERIOD', 'EDIT_UPGRADEBUNDLE', 'EDIT_USAGE', 'EXTL_10', 'EXTL_10_1', 'EXTL_12', 'EXTL_2', 'EXTL_9', 'EXTL_9_1', 'INTL_SECTIONS', 'INTL_TASKLINKS', 'LIST_ACCOUNT', 'LIST_ACCOUNTINGBOOK', 'LIST_ACCOUNTINGOTHERLIST', 'LIST_ACTIVITY', 'LIST_ADP_BATCHES', 'LIST_ADP_PAYCHECK', 'LIST_ADVPDFTEMPLATE', 'LIST_ALLOCATEORDERS', 'LIST_AMORTIZATION', 'LIST_AMORTIZATIONSCHEDULE', 'LIST_APPDEF', 'LIST_APPPUBLISHERS', 'LIST_APPROVALS', 'LIST_APPROVEACH', 'LIST_APPROVEEFT', 'LIST_APPROVERTIMEENTRY', 'LIST_APPROVEVP', 'LIST_AUTHORIZATIONCONSENT', 'LIST_BALANCE_OVERVIEW', 'LIST_BANKIMPORTHISTORY', 'LIST_BILLINGACCOUNT', 'LIST_BILLINGCLASS', 'LIST_BILLINGRATECARD', 'LIST_BILLINGREVENUEEVENT', 'LIST_BILLINGREVENUEEVENTTYPE', 'LIST_BILLINGSCHEDULE', 'LIST_BILLING_GROUPS', 'LIST_BILLOFDISTRIBUTION', 'LIST_BILLRUN', 'LIST_BILLRUNSCHEDULE', 'LIST_BIN', 'LIST_BOM', 'LIST_BONUSTYPE', 'LIST_BUDGETRATES', 'LIST_BULKOP', 'LIST_BULKPROCSUBMISSION', 'LIST_CALENDAR', 'LIST_CALL', 'LIST_CAMPAIGN', 'LIST_CAMPAIGNAUDIENCE', 'LIST_CAMPAIGNCATEGORY', 'LIST_CAMPAIGNCHANNEL', 'LIST_CAMPAIGNEMAIL', 'LIST_CAMPAIGNFAMILY', 'LIST_CAMPAIGNOFFER', 'LIST_CAMPAIGNSEARCHENGINE', 'LIST_CAMPAIGNSUBSCRIPTION', 'LIST_CAMPAIGNVERTICAL', 'LIST_CARDHOLDERAUTHENTICATIONEVENT', 'LIST_CASEALERT', 'LIST_CASEFIELDRULE', 'LIST_CASEFORM', 'LIST_CASEISSUE', 'LIST_CASEORIGIN', 'LIST_CASEPRIORITY', 'LIST_CASEPROFILE', 'LIST_CASESTATUS', 'LIST_CASETERRITORY', 'LIST_CASETERRITORYASSIGN', 'LIST_CASETYPE', 'LIST_CCTRAN', 'LIST_CHARGE', 'LIST_CHARGERULE', 'LIST_CHART_ACCOUNT', 'LIST_CLASS', 'LIST_CLASSSEGMENTMAPPING', 'LIST_CMSCONTENT', 'LIST_CMSCONTENTTYPE', 'LIST_CMSPAGE', 'LIST_CMSPAGETYPE', 'LIST_COLORTHEME', 'LIST_COLORTHEME_COMMERCE', 'LIST_COMMERCECATALOG', 'LIST_COMMERCECATEGORY', 'LIST_COMMISSIONSCHEDULE', 'LIST_COMPETITOR', 'LIST_COMSEARCHBOOST', 'LIST_COMSEARCHBOOSTTYPE', 'LIST_COMSEARCHGROUPSYNONYM', 'LIST_COMSEARCHONEWAYSYNONYM', 'LIST_CONSOLRATES', 'LIST_CONTACT', 'LIST_COUNTRY', 'LIST_CRMGROUP', 'LIST_CRMGROUP_COMMERCE', 'LIST_CRMOTHERLIST', 'LIST_CRMTEMPLATE', 'LIST_CSPSETUP', 'LIST_CURRENCY', 'LIST_CURRENCYRATE', 'LIST_CURRENCYRATETYPE', 'LIST_CUSTADDRESSENTRYFORM', 'LIST_CUSTBODYFIELD', 'LIST_CUSTCATEGORY', 'LIST_CUSTCENTER', 'LIST_CUSTCOLUMNFIELD', 'LIST_CUSTEMAILLAYOUT', 'LIST_CUSTENTITYFIELD', 'LIST_CUSTENTRYFORM', 'LIST_CUSTEVENTFIELD', 'LIST_CUSTFIELDTAB', 'LIST_CUSTFORM', 'LIST_CUSTITEMFIELD', 'LIST_CUSTITEMNUMBERFIELD', 'LIST_CUSTJOB', 'LIST_CUSTLAYOUT', 'LIST_CUSTLIST', 'LIST_CUSTOMCODEFILES', 'LIST_CUSTOMERFIELDRULE', 'LIST_CUSTOMERFORM', 'LIST_CUSTOMERSTATUS', 'LIST_CUSTOMIZEDFIELDLEVELHELP', 'LIST_CUSTOMSEGMENT', 'LIST_CUSTOMSUBLIST', 'LIST_CUSTOTHERFIELD', 'LIST_CUSTRECORD', 'LIST_CUSTSECTION', 'LIST_CUSTSUBLISTFIELD', 'LIST_CUSTTRANSACTION', 'LIST_DEPARTMENT', 'LIST_DEPTSEGMENTMAPPING', 'LIST_DEVICE_ID', 'LIST_DIFFROLE', 'LIST_DISTRIBUTIONNETWORK', 'LIST_DRIVERSLICENSE', 'LIST_DUPLICATE_RESOLUTION_STATUS', 'LIST_EMAILTEMPLATE', 'LIST_EMPLCATEGORY', 'LIST_EMPLCATEGORY_COMMERCE', 'LIST_EMPLOYEECHANGEREASON', 'LIST_EMPLOYEECHANGEREQUEST', 'LIST_EMPLOYEECHANGETYPE', 'LIST_EMPLOYEE_RECORD', 'LIST_EMPOTHERLIST', 'LIST_ENTITYACCOUNTMAPPING', 'LIST_ENTITY_DUPLICATES', 'LIST_ESCALATIONRULE', 'LIST_ESCALATIONTERRITORY', 'LIST_EVENT', 'LIST_EXPCATEGORY', 'LIST_EXPENSEAMORTIZATIONEVENT', 'LIST_EXPENSEAMORTIZATIONRULE', 'LIST_EXPENSEPLAN', 'LIST_EXPENSEREPORTPOLICY', 'LIST_FAIRVALUEDIMENSION', 'LIST_FAIRVALUEFORMULA', 'LIST_FAIRVALUEPRICE', 'LIST_FAXTEMPLATE', 'LIST_FCSITEFOLDER', 'LIST_FISCALCALENDAR', 'LIST_FULFILLMENTEXCEPTIONREASON', 'LIST_GAINLOSSACCTMAPPING', 'LIST_GATEWAYNOTIFICATION', 'LIST_GENERICRESOURCE', 'LIST_GIFTCERTIFICATES', 'LIST_GLNUMBERING', 'LIST_GLOBALACCOUNTMAPPING', 'LIST_GLOBALINVTRELATIONSHIP', 'LIST_GOAL', 'LIST_GOVERNMENTISSUEDIDTYPE', 'LIST_HCMJOB', 'LIST_IMAGE', 'LIST_IMAGE_COMMERCE', 'LIST_IMAGE_INTRANET', 'LIST_IMPORTEDEMPLOYEEEXPENSE', 'LIST_INFOITEM', 'LIST_INFOITEMFORM', 'LIST_INFOITEMFORM_COMMERCE', 'LIST_INFOITEM_COMMERCE', 'LIST_INVCOSTTEMPLATE', 'LIST_INVENTORYSTATUS', 'LIST_INVOICEGROUP', 'LIST_ISSUE', 'LIST_ITEM', 'LIST_ITEMACCOUNTMAPPING', 'LIST_ITEMCOLLECTION', 'LIST_ITEMCOLLECTION_COMMERCE', 'LIST_ITEMDEMANDPLAN', 'LIST_ITEMLOCCONFIG_LOG', 'LIST_ITEMOPTION', 'LIST_ITEMPROCESSFAMILY', 'LIST_ITEMPROCESSGROUP', 'LIST_ITEMREVENUECATEGORY', 'LIST_ITEMSUPPLYPLAN', 'LIST_ITEM_REVISION', 'LIST_JOB', 'LIST_JOBREQUISITION', 'LIST_JOBRESOURCEROLE', 'LIST_KBCATEGORY', 'LIST_KPIREPORT', 'LIST_KUDOS', 'LIST_LABORCATEGORY', 'LIST_LABORCOSTCARD', 'LIST_LABORCOSTELEMENT', 'LIST_LEAD', 'LIST_LOCASSIGNCONF', 'LIST_LOCATION', 'LIST_LOCATIONCOSTINGGROUP', 'LIST_LOCSEGMENTMAPPING', 'LIST_MAILMERGE', 'LIST_MAILTEMPLATE', 'LIST_MAPREDUCESCRIPTSTATUS', 'LIST_MEDIAITEMFOLDER', 'LIST_MERCHANDISEHIERARCHYLEVEL', 'LIST_MERCHANDISEHIERARCHYNODE', 'LIST_MERCHANDISEHIERARCHYVERSION', 'LIST_MFGCOSTTEMPLATE', 'LIST_MFGOPERATIONTASK', 'LIST_MFGROUTING', 'LIST_MYSUITEAPPS', 'LIST_NETTING', 'LIST_NEWSITEM', 'LIST_NOTIFICATION', 'LIST_ORDERALLOCATIONALERTS', 'LIST_ORDERALLOCATIONSTRATEGY', 'LIST_ORGANIZATIONVALUE', 'LIST_OTHERGOVERNMENTISSUEDID', 'LIST_OTHERNAME', 'LIST_OUTBOUNDEMAILLOG', 'LIST_OUTBOUNDREQUEST', 'LIST_PARTNER', 'LIST_PARTNERCOMMISSIONSCHED', 'LIST_PARTNERPLANASSIGN', 'LIST_PARTNERPLANASSIGNS', 'LIST_PASSPORT', 'LIST_PAYMENTEVENT', 'LIST_PAYMENTPROFILE', 'LIST_PAYMETHODS', 'LIST_PAYPALACCOUNT', 'LIST_PAYROLLITEM', 'LIST_PAYROLLITEMGROUP', 'LIST_PAYTERMS', 'LIST_PDFTEMPLATE', 'LIST_PERFORMANCEMETRIC', 'LIST_PERFORMANCEREVIEW', 'LIST_PERFORMANCEREVIEWQUESTION', 'LIST_PERFORMANCEREVIEWRATINGSCALE', 'LIST_PERFORMANCEREVIEWSCHEDULE', 'LIST_PERFORMANCEREVIEWTEMPLATE', 'LIST_PERIOD', 'LIST_PERMISSION', 'LIST_PICKSTRATEGY', 'LIST_PICKTASK', 'LIST_PLANASSIGN', 'LIST_PLANASSIGNS', 'LIST_PLANNEDORDER', 'LIST_PLANNEDSTANDARDCOST', 'LIST_PLANNINGITEMCATEGORY', 'LIST_PLANNINGITEMGROUP', 'LIST_PLANNINGRULEGROUP', 'LIST_PLUGIN', 'LIST_PLUGINTYPE', 'LIST_POSITION', 'LIST_PRESCATEGORY', 'LIST_PRESCATEGORY_COMMERCE', 'LIST_PRIORITYSETTINGS', 'LIST_PROJECTEXPENSETYPE', 'LIST_PROJECTTASK', 'LIST_PROJECTTEMPLATE', 'LIST_PROJECT_PROFITABILITY', 'LIST_PROSPECT', 'LIST_QUANTITYPRICINGSCHEDULE', 'LIST_RECVDFILES', 'LIST_REFERRALCODE', 'LIST_REFERRALCODE_COMMERCE', 'LIST_REGION', 'LIST_RELATEDITEM', 'LIST_RELATEDITEMADV', 'LIST_REPORESULT', 'LIST_REPOSCHEDULE', 'LIST_RESOURCE', 'LIST_RESOURCEGROUP', 'LIST_RESTRICTION', 'LIST_REVENUEALLOCATIONGROUP', 'LIST_REVENUEELEMENT', 'LIST_REVENUEPLAN', 'LIST_REVENUERECOGNITIONRULE', 'LIST_REVRECFIELDMAPPING', 'LIST_REVRECSCHEDS', 'LIST_REVRECSCHEDULE', 'LIST_REVRECTREATMENT', 'LIST_REVRECTREATMENTRULE', 'LIST_ROLE', 'LIST_RSRCALLOCATION', 'LIST_RSSFEED', 'LIST_RSSFEED_COMMERCE', 'LIST_SALESCAMPAIGN', 'LIST_SALESCHANNEL', 'LIST_SALESTEAM', 'LIST_SALESTERRITORIES', 'LIST_SALESTERRITORY', 'LIST_SALESTERRITORYASSIGN', 'LIST_SAVEDBULKOP', 'LIST_SAVEDSEARCH', 'LIST_SCHEDULEDSUPPLYCHAINSNAPSHOTREFRESH', 'LIST_SCRIPT', 'LIST_SCRIPTEDRECORD', 'LIST_SCRIPTLOGS', 'LIST_SCRIPTRECORD', 'LIST_SCRIPTSTATUS', 'LIST_SC_CONTROLTOWERDASHBRD', 'LIST_SC_SNAPSHOTS', 'LIST_SEARCHRESULTS', 'LIST_SEARCHRESULTSARCHIVE', 'LIST_SENTFILES', 'LIST_SHIPITEM', 'LIST_SITEEMAILTEMPLATE', 'LIST_SITEITEMTEMPLAT', 'LIST_SITETAGS', 'LIST_SITETHEMES', 'LIST_SOLUTION', 'LIST_SPA', 'LIST_SSCATEGORY', 'LIST_SSCATEGORY_COMMERCE', 'LIST_STANDARDCOSTVERSION', 'LIST_STATE', 'LIST_STATUSACH', 'LIST_STATUSEFT', 'LIST_STATUSVP', 'LIST_STOREITEMLISTLAYOUT', 'LIST_STOREITEMLISTLAYOUT_COMMERCE', 'LIST_STORETAB', 'LIST_STORETAB_COMMERCE', 'LIST_SUBSCRIPTION', 'LIST_SUBSCRIPTIONCHANGEORDER', 'LIST_SUBSCRIPTIONCHANGEORDER2', 'LIST_SUBSCRIPTIONPLAN', 'LIST_SUBSCRIPTIONRENEWALHISTORY', 'LIST_SUBSCRIPTIONRENEWALHISTORY2', 'LIST_SUBSIDIARY', 'LIST_SUITEAPPS_MARKET', 'LIST_SUPPLYCHAINSNAPSHOTSIMULATION', 'LIST_SUPPLYCHANGEORDER', 'LIST_SUPPLYCHANGEORDERAPPROVAL', 'LIST_SUPPLYPLANDEFINITION', 'LIST_SUPPORTCASE', 'LIST_SYSALERT', 'LIST_SYSTEMEMAILTEMPLATE', 'LIST_TASK', 'LIST_TAXGROUP', 'LIST_TAXITEM', 'LIST_TAXITEM2', 'LIST_TAXPERIOD', 'LIST_TAXREPORT', 'LIST_TAXSCHEDULE', 'LIST_TEMPLATEFILES', 'LIST_TEMPLATE_CATEGORY', 'LIST_TERMINATIONREASON', 'LIST_TIMEOFFCHANGE', 'LIST_TIMEOFFPLAN', 'LIST_TIMEOFFREQUEST', 'LIST_TIMEOFFTYPE', 'LIST_TOPIC', 'LIST_TRANNUMBERAUDITLOG', 'LIST_TRANSACTION', 'LIST_TRANSACTIONACCOUNTINGRULESET', 'LIST_TRAN_BALJRNAL', 'LIST_TRAN_BINTRNFR', 'LIST_TRAN_BINWKSHT', 'LIST_TRAN_BLANKORD', 'LIST_TRAN_CARDCHRG', 'LIST_TRAN_CASHRFND', 'LIST_TRAN_CASHSALE', 'LIST_TRAN_CHECK', 'LIST_TRAN_COMMISSN', 'LIST_TRAN_CUSTAUTH', 'LIST_TRAN_CUSTCHRG', 'LIST_TRAN_CUSTCRED', 'LIST_TRAN_CUSTDEP', 'LIST_TRAN_CUSTINVC', 'LIST_TRAN_CUSTPYMT', 'LIST_TRAN_CUSTRFND', 'LIST_TRAN_DEPOSIT', 'LIST_TRAN_DOWNLOAD', 'LIST_TRAN_ESTIMATE', 'LIST_TRAN_EXPREPT', 'LIST_TRAN_FFTREQ', 'LIST_TRAN_FXREVAL', 'LIST_TRAN_INVADJST', 'LIST_TRAN_INVDISTR', 'LIST_TRAN_INVTRNFR', 'LIST_TRAN_INVWKSHT', 'LIST_TRAN_JOURNAL', 'LIST_TRAN_LIABPYMT', 'LIST_TRAN_OPPRTNTY', 'LIST_TRAN_ORDRESV', 'LIST_TRAN_OWNTRNSF', 'LIST_TRAN_PAYCHECK2', 'LIST_TRAN_PEJRNL', 'LIST_TRAN_PURCHCON', 'LIST_TRAN_PURCHORD', 'LIST_TRAN_PURCHORD_REQ', 'LIST_TRAN_PURCHREQ', 'LIST_TRAN_REORDER', 'LIST_TRAN_REVARRNG', 'LIST_TRAN_RFQ', 'LIST_TRAN_RTNAUTH', 'LIST_TRAN_SALESORD', 'LIST_TRAN_TAXLIAB', 'LIST_TRAN_TAXPYMT', 'LIST_TRAN_TRANSFER', 'LIST_TRAN_VENDAUTH', 'LIST_TRAN_VENDBILL', 'LIST_TRAN_VENDCRED', 'LIST_TRAN_VENDPYMT', 'LIST_UNCATSITEITEM', 'LIST_UNCATSITEITEMADV', 'LIST_UNDELIVEREDEMAIL', 'LIST_UNITSTYPE', 'LIST_UPSELLWIZARD', 'LIST_UPSELLWIZARD_COMMERCE', 'LIST_URLALIASES', 'LIST_URLALIASES_COMMERCE', 'LIST_USAGE', 'LIST_USER', 'LIST_VENDOR', 'LIST_VENDORPERFORMANCE', 'LIST_WEBAPPS', 'LIST_WORKASSIGNMENT', 'LIST_WORKCALENDAR', 'LIST_WORKFLOW', 'LIST_WORKPLACE', 'LIST_ZONE', 'REPO_10', 'REPO_100', 'REPO_103', 'REPO_104', 'REPO_105', 'REPO_106', 'REPO_107', 'REPO_11', 'REPO_111', 'REPO_113', 'REPO_114', 'REPO_118', 'REPO_121', 'REPO_126', 'REPO_127', 'REPO_128', 'REPO_13', 'REPO_131', 'REPO_133', 'REPO_134', 'REPO_14', 'REPO_141', 'REPO_143', 'REPO_145', 'REPO_147', 'REPO_148', 'REPO_15', 'REPO_150', 'REPO_151', 'REPO_152', 'REPO_16', 'REPO_162', 'REPO_170', 'REPO_172', 'REPO_174', 'REPO_176', 'REPO_178', 'REPO_179', 'REPO_18', 'REPO_180', 'REPO_183', 'REPO_184', 'REPO_185', 'REPO_188', 'REPO_19', 'REPO_191', 'REPO_193', 'REPO_194', 'REPO_196', 'REPO_197', 'REPO_199', 'REPO_2', 'REPO_20', 'REPO_203', 'REPO_205', 'REPO_209', 'REPO_21', 'REPO_210', 'REPO_211', 'REPO_215', 'REPO_219', 'REPO_22', 'REPO_221', 'REPO_222', 'REPO_223', 'REPO_225', 'REPO_229', 'REPO_230', 'REPO_231', 'REPO_232', 'REPO_233', 'REPO_234', 'REPO_235', 'REPO_240', 'REPO_241', 'REPO_242', 'REPO_243', 'REPO_246', 'REPO_249', 'REPO_250', 'REPO_256', 'REPO_257', 'REPO_26', 'REPO_261', 'REPO_262', 'REPO_266', 'REPO_267', 'REPO_269', 'REPO_270', 'REPO_271', 'REPO_272', 'REPO_273', 'REPO_274', 'REPO_277', 'REPO_278', 'REPO_28', 'REPO_281', 'REPO_282', 'REPO_283', 'REPO_284', 'REPO_286', 'REPO_292', 'REPO_293', 'REPO_30', 'REPO_32', 'REPO_34', 'REPO_36', 'REPO_37', 'REPO_38', 'REPO_39', 'REPO_4', 'REPO_40', 'REPO_41', 'REPO_42', 'REPO_43', 'REPO_44', 'REPO_49', 'REPO_5', 'REPO_51', 'REPO_53', 'REPO_54', 'REPO_55', 'REPO_57', 'REPO_58', 'REPO_59', 'REPO_6', 'REPO_60', 'REPO_63', 'REPO_64', 'REPO_65', 'REPO_67', 'REPO_68', 'REPO_69', 'REPO_72', 'REPO_74', 'REPO_78', 'REPO_79', 'REPO_8', 'REPO_80', 'REPO_81', 'REPO_84', 'REPO_85', 'REPO_9', 'REPO_90', 'REPO_91', 'REPO_94', 'REPO_95', 'REPO_96', 'REPO_98', 'REPO_99', 'REPO_ASSIGNFINANCIALLAYOUTS', 'REPO_BANKREGISTER', 'REPO_CUST_PAGE', 'REPO_FINANCIALLAYOUTS', 'REPO_GST34', 'REPO_HEADCOUNT_ANALYSIS', 'REPO_NEG100', 'REPO_NEG105', 'REPO_NEG106', 'REPO_NEG108', 'REPO_NEG110', 'REPO_NEG112', 'REPO_NEG113', 'REPO_NEG114', 'REPO_NEG116', 'REPO_NEG118', 'REPO_NEG120', 'REPO_NEG122', 'REPO_NEG124', 'REPO_NEG127', 'REPO_NEG128', 'REPO_NEG129', 'REPO_NEG130', 'REPO_NEG131', 'REPO_NEG132', 'REPO_NEG133', 'REPO_NEG135', 'REPO_NEG137', 'REPO_NEG138', 'REPO_NEG140', 'REPO_NEG144', 'REPO_NEG146', 'REPO_NEG148', 'REPO_NEG150', 'REPO_NEG151', 'REPO_NEG152', 'REPO_NEG153', 'REPO_NEG154', 'REPO_NEG155', 'REPO_NEG156', 'REPO_NEG157', 'REPO_NEG158', 'REPO_NEG159', 'REPO_NEG160', 'REPO_NEG161', 'REPO_NEG162', 'REPO_NEG175', 'REPO_NEG178', 'REPO_NEG179', 'REPO_NEG180', 'REPO_NEG181', 'REPO_NEG182', 'REPO_NEG183', 'REPO_NEG184', 'REPO_NEG185', 'REPO_NEG186', 'REPO_NEG187', 'REPO_NEG188', 'REPO_NEG196', 'REPO_NEG197', 'REPO_NEG198', 'REPO_NEG199', 'REPO_NEG200', 'REPO_NEG201', 'REPO_NEG202', 'REPO_NEG203', 'REPO_NEG209', 'REPO_NEG210', 'REPO_NEG211', 'REPO_NEG212', 'REPO_NEG213', 'REPO_NEG215', 'REPO_NEG221', 'REPO_NEG222', 'REPO_NEG223', 'REPO_NEG224', 'REPO_NEG225', 'REPO_NEG226', 'REPO_NEG227', 'REPO_NEG228', 'REPO_NEG231', 'REPO_NEG232', 'REPO_NEG233', 'REPO_NEG236', 'REPO_NEG237', 'REPO_NEG239', 'REPO_NEG240', 'REPO_NEG241', 'REPO_NEG242', 'REPO_NEG245', 'REPO_NEG246', 'REPO_NEG247', 'REPO_NEG248', 'REPO_NEG249', 'REPO_NEG250', 'REPO_NEG253', 'REPO_NEG254', 'REPO_NEG255', 'REPO_NEG256', 'REPO_NEG257', 'REPO_NEG258', 'REPO_NEG259', 'REPO_NEG260', 'REPO_NEG265', 'REPO_NEG271', 'REPO_NEG277', 'REPO_NEG281', 'REPO_NEG282', 'REPO_NEG284', 'REPO_NEG285', 'REPO_NEG289', 'REPO_NEG291', 'REPO_NEG292', 'REPO_NEG295', 'REPO_NEG296', 'REPO_NEG297', 'REPO_NEG298', 'REPO_NEG299', 'REPO_NEG305', 'REPO_NEG306', 'REPO_NEG307', 'REPO_NEG308', 'REPO_NEG309', 'REPO_NEG310', 'REPO_NEG311', 'REPO_NEG314', 'REPO_NEG316', 'REPO_NEG320', 'REPO_NEG326', 'REPO_NEG330', 'REPO_REGISTER_ACCTPAY', 'REPO_REGISTER_ACCTREC', 'REPO_TURNOVER_ANALYSIS', 'SRCH_CUSTBAL', 'SRCH_CUSTOVDBAL', 'SRCH_EMPLOYEECHANGEREQUEST_MYREQ', 'SRCH_EMPLOYEECHANGEREQUEST_PENDINGREQ', 'SRCH_SAVEDSEARCH', 'SRCH_TRANSACTION', 'SRCH_UNBILLORDERS', 'SUPT_ALLOW_LOGIN', 'SUPT_BUG_BILLING', 'SUPT_BUG_SUPPORT', 'SUPT_BUG_SUPPORT_POPUP', 'SUPT_CENTER_ROLE', 'SUPT_GLOSSARY', 'SUPT_HELP', 'SUPT_MENUOPTIONS', 'SUPT_POLICYFORM', 'SUPT_RELEASENOTES', 'SUPT_VERSION_10_5', 'TRAN_ALLOCATEPAYCHECKSTOJOBS', 'TRAN_ALLOCATEREVENUEARRANGEMENTS', 'TRAN_APPROVAL_EXPREPT', 'TRAN_APPROVAL_PURCHORD', 'TRAN_APPROVECOMMISSN', 'TRAN_APPROVEPARTNERCOMMISSN', 'TRAN_AUDIT', 'TRAN_AUTO_CASH', 'TRAN_BALANCELCGACCOUNTS', 'TRAN_BAS', 'TRAN_BILLOFMATERIALSINQUIRY', 'TRAN_BILLRUN', 'TRAN_BLANKORDAPPRV', 'TRAN_BUDGET', 'TRAN_CALCULATEITEMDEMANDPLAN', 'TRAN_CAMPAIGNSETUP', 'TRAN_CHARGEMANAGER', 'TRAN_CHECKITEMAVAILABILITY', 'TRAN_CLEARHOLD', 'TRAN_COMPONENTWHEREUSEDINQUIRY', 'TRAN_CONFIRMTRANSACTIONS', 'TRAN_COPY_BUDGET', 'TRAN_COSTEDBOMINQUIRY', 'TRAN_CREATEAMORTIZATIONJE', 'TRAN_CREATEDEGROSSJE', 'TRAN_CREATEINTERCOADJJE', 'TRAN_CREATEREVRECJE', 'TRAN_CREATE_INVCOUNT', 'TRAN_CREATE_JOBS_FROM_ORDERS', 'TRAN_CREATE_WORK_ORDERS_FOR_STOCK', 'TRAN_CREATE_WORK_ORDERS_FOR_STOCK_DEMAND_PLANNING', 'TRAN_CREATE_WORK_ORDERS_FOR_STOCK_MRP', 'TRAN_CUSTINVCAPPRV', 'TRAN_DOMAINS', 'TRAN_EDITREVENUEARRANGEMENTS', 'TRAN_FINCHRG', 'TRAN_FORECAST', 'TRAN_GENERATEITEMSUPPLYPLAN', 'TRAN_GIFTCERTCREATEJE', 'TRAN_GSTREFUND', 'TRAN_INVOICECUSTOMERS', 'TRAN_INVOICEGROUP', 'TRAN_ITEMGROSSREQUIREMENTS', 'TRAN_ITEMSHIPPACK', 'TRAN_ITEMSHIPSHIP', 'TRAN_JOURNALAPPROVAL', 'TRAN_MANAGEARRANGEMENTS', 'TRAN_MANAGEEXPENSEPLANS', 'TRAN_MANAGEREVENUEARRANGEMENTS', 'TRAN_MANAGEREVENUEPLANS', 'TRAN_MARKVSOEDELIVERED', 'TRAN_MATCHING_RULES', 'TRAN_MATERIALREQUIREMENTSPLAN_LOG', 'TRAN_MERGEREVENUEARRANGEMENTS', 'TRAN_MGRFORECAST', 'TRAN_MIGRATEOPENREVENUETRANSACTIONS', 'TRAN_MYBANKINGINFO', 'TRAN_OPENBAL', 'TRAN_ORDERDEMANDPLANITEMS', 'TRAN_ORDERITEMS', 'TRAN_ORDERMRPITEMS', 'TRAN_ORDER_REALLOCATION', 'TRAN_ORDRESVAPPRV', 'TRAN_PAYROLLRUN', 'TRAN_PAYROLLSTATUS', 'TRAN_PDF_F940', 'TRAN_PDF_F941', 'TRAN_PLANNEDSTANDARDCOSTROLLUP', 'TRAN_PLANNINGWORKBENCHORDER_LOG', 'TRAN_POSTVENDORBILLVARIANCES', 'TRAN_PRINT', 'TRAN_PRINTPRICELIST', 'TRAN_PRINTSTATEMENT', 'TRAN_PRINTW2', 'TRAN_PRINTW2AUDIT', 'TRAN_PRINTW3', 'TRAN_PRINT_PACKINGSLIP', 'TRAN_PRINT_PICKINGTICKET', 'TRAN_PRINT_PRICELIST', 'TRAN_PRINT_STATEMENT', 'TRAN_PROCESSCOMMISSN', 'TRAN_PROCESSICRTNAUTHS', 'TRAN_PROCESSICSALESORDERS', 'TRAN_PROCESSORDER', 'TRAN_PROCESSPARTNERCOMMISSN', 'TRAN_PROMOTIONS_PREFERENCES', 'TRAN_PURCHCONAPPRV', 'TRAN_PURCHORDPROC', 'TRAN_PURCHORDRECEIVE', 'TRAN_PURCHREQAPPRV', 'TRAN_QUOTA', 'TRAN_REALLOCITEMS', 'TRAN_RECALCULATEEXPENSEFORECASTPLANS', 'TRAN_RECALCULATEREVENUEFORECASTPLANS', 'TRAN_RECONCILE', 'TRAN_RECONCILEACCOUNTSTATEMENT', 'TRAN_RECONCILE_CC', 'TRAN_REVALUESTANDARDCOSTINVENTORY', 'TRAN_REVARRNGAPPRV', 'TRAN_REVIEWNEGATIVEINVENTORY', 'TRAN_RTNAUTHAPPRV', 'TRAN_RTNAUTHCREDIT', 'TRAN_RTNAUTHRECEIVE', 'TRAN_RTNAUTHREVERSEREVCOMMITMENT', 'TRAN_SALESORDAPPRV', 'TRAN_SALESORDCOMMITREVENUE', 'TRAN_SALESORDFULFILL', 'TRAN_SALESORDPROC', 'TRAN_SALESORDREVENUECONTRACT', 'TRAN_SEARCH', 'TRAN_STPICKUP', 'TRAN_SUPPLY_REALLOCATION', 'TRAN_SUPPLY_REALLOCATION_LOG', 'TRAN_TIMEAPPROVAL', 'TRAN_TIMEBILL', 'TRAN_TIMEBILL_WEEKLY', 'TRAN_TIMEPOST', 'TRAN_TIMESHEETAPPROVAL', 'TRAN_TIMEVOID', 'TRAN_TRNFRORDAPPRV', 'TRAN_UPDATEEXPENSEPLANS', 'TRAN_UPDATEREVENUERECOGNITIONPLANS', 'TRAN_VENDAUTHAPPRV', 'TRAN_VENDAUTHCREDIT', 'TRAN_VENDAUTHRETURN', 'TRAN_VENDBILLAPPRV', 'TRAN_VENDPYMTAPPRV', 'TRAN_VENDPYMTS', 'TRAN_VPREPAPPRV', 'TRAN_WEEKLY_TIMESHEET', 'TRAN_WORKORDBUILD', 'TRAN_WORKORDCLOSE', 'TRAN_WORKORDCOMPLETE', 'TRAN_WORKORDISSUE', 'TRAN_WORKORDMARKBUILT', 'TRAN_WORKORDMARKFIRMED', 'TRAN_WORKORDMARKRELEASED'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_taskElemID.name],
  }),
  generic_year_month: new PrimitiveType({
    elemID: generic_year_monthElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['1', '10', '11', '12', '2', '3', '4', '5', '6', '7', '8', '9'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, generic_year_monthElemID.name],
  }),
  hiding_actions: new PrimitiveType({
    elemID: hiding_actionsElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['HIDE', 'UNHIDE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, hiding_actionsElemID.name],
  }),
  itemcustomfield_itemsubtype: new PrimitiveType({
    elemID: itemcustomfield_itemsubtypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['BOTH', 'PURCHASE', 'SALE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, itemcustomfield_itemsubtypeElemID.name],
  }),
  itemnumbercustomfield_field: new PrimitiveType({
    elemID: itemnumbercustomfield_fieldElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ADJUSTQTYBY', 'ALTSALESAMT', 'AMORTIZATIONENDDATE', 'AMORTIZATIONRESIDUAL', 'AMORTIZATIONSCHED', 'AMORTIZSTARTDATE', 'AMOUNT', 'AMOUNTORDERED', 'AMOUNTRECOGNIZED', 'AMOUNTREMAINING', 'AVERAGECOST', 'BALANCE', 'BILLEDDATE', 'BILLINGSCHEDULE', 'BILLRECEIPTS', 'BILLVARIANCESTATUS', 'BINNUMBERS', 'BINNUMBERSSTOCK', 'BOMQUANTITY', 'CATCHUPPERIOD', 'CHARGE', 'CHARGES', 'CHARGETYPE', 'CLASS', 'COMMITINVENTORY', 'COMMITMENTFIRM', 'COMPONENTYIELD', 'COSTESTIMATE', 'COSTESTIMATERATE', 'COSTESTIMATETYPE', 'COUNTRYOFMANUFACTURE', 'CREATEDFROM', 'CREATEPO', 'CREATEWO', 'CURRENCY', 'CURRENTPERCENT', 'CURRENTVALUE', 'CUSTOMER', 'DATECOL', 'DEFERREVREC', 'DEPARTMENT', 'DESCRIPTION', 'DISCOUNT', 'DROPSHIP', 'DUEDATE', 'EMPLOYEE', 'EMPLOYEEFULLNAME', 'ENDDATE', 'ESTGROSSPROFIT', 'ESTGROSSPROFITFIELDS', 'ESTGROSSPROFITPERCENT', 'ESTIMATEDAMOUNT', 'ESTIMATEDRATE', 'EVENT', 'EXCLUDEFROMRATEREQUEST', 'EXPECTEDRECEIPTDATE', 'EXPECTEDSHIPDATE', 'FROMJOB', 'GIFTCERTFIELDS', 'GLNUMBER', 'GLSEQUENCE', 'GROSSAMT', 'INVENTORYDETAIL', 'INVENTORYDETAILSTOCK', 'ISBILLABLE', 'ISCLOSED', 'ISDROPSHIPMENT', 'ISESTIMATE', 'ISTAXABLE', 'ITEM', 'ITEMPRICING', 'ITEMTAX', 'JOB', 'LANDEDCOST', 'LANDEDCOSTCATEGORY', 'LASTPURCHASEPRICE', 'LICENSECODE', 'LINKEDORDER', 'LINKEDORDERSTATUS', 'LOCATION', 'MANUFACTURER', 'MATCHBILLTORECEIPT', 'MEMO', 'MPN', 'NEWQUANTITY', 'OPTIONS', 'ORDERPRIORITY', 'ORDERSCHEDULE', 'ORIGINALAMOUNT', 'OTHERREFNUM', 'PARENTITEM', 'PAYMENT', 'PAYMENTMETHOD', 'PERCENTCOMPLETE', 'PORATE', 'POVENDOR', 'PRICE', 'PROCESSEDBYREVCOMMIT', 'PURCHASECONTRACT', 'QUANTITY', 'QUANTITYAVAILABLE', 'QUANTITYBACKORDERED', 'QUANTITYCOMMITTED', 'QUANTITYFULFILLED', 'QUANTITYONHAND', 'QUANTITYORDERED', 'QUANTITYRECEIVED', 'QUANTITYREMAINING', 'RATE', 'RATE10', 'RATE2', 'RATE3', 'RATE4', 'RATE5', 'RATE6', 'RATE7', 'RATE8', 'RATE9', 'REASON', 'RESTOCK', 'REVRECENDDATE', 'REVRECSCHEDULE', 'REVRECSTARTDATE', 'SERIALNUMBERS', 'SHIPADDRESS', 'SHIPCARRIER', 'SHIPMETHOD', 'SHIPPINGCOST', 'SPECIALORDER', 'STARTDATE', 'SUBNAME', 'TAX1AMT', 'TAXAMOUNT', 'TAXCODE', 'TAXRATE1', 'TAXRATE2', 'TERMINMONTHS', 'TERMS', 'TRANSACTIONNO', 'UNITCOST', 'UNITCOSTOVERRIDE', 'UNITPRICE', 'UNITS', 'UPCCODE', 'VENDORNAME', 'VSOEDELIVERED', 'VSOEFIELDS', 'WEIGHT'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, itemnumbercustomfield_fieldElemID.name],
  }),
  kpi_ranges_daterange: new PrimitiveType({
    elemID: kpi_ranges_daterangeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['FISCAL_HALF_BEFORE_LAST', 'FISCAL_HALF_BEFORE_LAST_TO_DATE', 'FISCAL_QUARTER_BEFORE_LAST', 'FISCAL_QUARTER_BEFORE_LAST_TO_DATE', 'FISCAL_YEAR_BEFORE_LAST_TO_DATE', 'FIVE_DAYS_AGO', 'FIVE_DAYS_FROM_NOW', 'FOUR_DAYS_AGO', 'FOUR_DAYS_FROM_NOW', 'FOUR_WEEKS_STARTING_THIS_WEEK', 'LAST_BUSINESS_WEEK', 'LAST_FISCAL_HALF', 'LAST_FISCAL_HALF_ONE_FISCAL_YEAR_AGO', 'LAST_FISCAL_HALF_TO_DATE', 'LAST_FISCAL_QUARTER', 'LAST_FISCAL_QUARTER_ONE_FISCAL_YEAR_AGO', 'LAST_FISCAL_QUARTER_TO_DATE', 'LAST_FISCAL_QUARTER_TWO_FISCAL_YEARS_AGO', 'LAST_FISCAL_YEAR_TO_DATE', 'LAST_MONTH', 'LAST_MONTH_ONE_FISCAL_QUARTER_AGO', 'LAST_MONTH_ONE_FISCAL_YEAR_AGO', 'LAST_MONTH_TO_DATE', 'LAST_MONTH_TWO_FISCAL_QUARTERS_AGO', 'LAST_MONTH_TWO_FISCAL_YEARS_AGO', 'LAST_ROLLING_HALF', 'LAST_ROLLING_QUARTER', 'LAST_ROLLING_YEAR', 'LAST_WEEK', 'LAST_WEEK_TO_DATE', 'LAST_YEAR', 'LAST_YEAR_TO_DATE', 'MONTH_AFTER_NEXT', 'MONTH_AFTER_NEXT_TO_DATE', 'MONTH_BEFORE_LAST', 'MONTH_BEFORE_LAST_TO_DATE', 'NEXT_BUSINESS_WEEK', 'NEXT_FISCAL_HALF', 'NEXT_FISCAL_QUARTER', 'NEXT_FISCAL_YEAR', 'NEXT_FOUR_WEEKS', 'NEXT_MONTH', 'NEXT_ONE_HALF', 'NEXT_ONE_MONTH', 'NEXT_ONE_QUARTER', 'NEXT_ONE_WEEK__7_ROLLING_DAYS', 'NEXT_ONE_YEAR', 'NEXT_WEEK', 'NINETY_DAYS_AGO', 'NINETY_DAYS_FROM_NOW', 'ONE_YEAR_BEFORE_LAST', 'PREVIOUS_FISCAL_QUARTERS_LAST_FISCAL_YEAR', 'PREVIOUS_FISCAL_QUARTERS_THIS_FISCAL_YEAR', 'PREVIOUS_MONTHS_LAST_FISCAL_HALF', 'PREVIOUS_MONTHS_LAST_FISCAL_QUARTER', 'PREVIOUS_MONTHS_LAST_FISCAL_YEAR', 'PREVIOUS_MONTHS_SAME_FISCAL_HALF_LAST_FISCAL_YEAR', 'PREVIOUS_MONTHS_SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR', 'PREVIOUS_MONTHS_THIS_FISCAL_HALF', 'PREVIOUS_MONTHS_THIS_FISCAL_QUARTER', 'PREVIOUS_MONTHS_THIS_FISCAL_YEAR', 'PREVIOUS_ONE_DAY', 'PREVIOUS_ONE_HALF', 'PREVIOUS_ONE_MONTH', 'PREVIOUS_ONE_QUARTER', 'PREVIOUS_ONE_WEEK', 'PREVIOUS_ONE_YEAR', 'PREVIOUS_ROLLING_HALF', 'PREVIOUS_ROLLING_QUARTER', 'PREVIOUS_ROLLING_YEAR', 'SAME_DAY_FISCAL_QUARTER_BEFORE_LAST', 'SAME_DAY_FISCAL_YEAR_BEFORE_LAST', 'SAME_DAY_LAST_FISCAL_QUARTER', 'SAME_DAY_LAST_FISCAL_YEAR', 'SAME_DAY_LAST_MONTH', 'SAME_DAY_LAST_WEEK', 'SAME_DAY_MONTH_BEFORE_LAST', 'SAME_DAY_WEEK_BEFORE_LAST', 'SAME_FISCAL_HALF_LAST_FISCAL_YEAR', 'SAME_FISCAL_HALF_LAST_FISCAL_YEAR_TO_DATE', 'SAME_FISCAL_QUARTER_FISCAL_YEAR_BEFORE_LAST', 'SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR', 'SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR_TO_DATE', 'SAME_MONTH_FISCAL_QUARTER_BEFORE_LAST', 'SAME_MONTH_FISCAL_YEAR_BEFORE_LAST', 'SAME_MONTH_LAST_FISCAL_QUARTER', 'SAME_MONTH_LAST_FISCAL_QUARTER_TO_DATE', 'SAME_MONTH_LAST_FISCAL_YEAR', 'SAME_MONTH_LAST_FISCAL_YEAR_TO_DATE', 'SAME_WEEK_FISCAL_YEAR_BEFORE_LAST', 'SAME_WEEK_LAST_FISCAL_YEAR', 'SIXTY_DAYS_AGO', 'SIXTY_DAYS_FROM_NOW', 'TEN_DAYS_AGO', 'TEN_DAYS_FROM_NOW', 'THIRTY_DAYS_AGO', 'THIRTY_DAYS_FROM_NOW', 'THIS_BUSINESS_WEEK', 'THIS_FISCAL_HALF', 'THIS_FISCAL_HALF_TO_DATE', 'THIS_FISCAL_QUARTER', 'THIS_FISCAL_QUARTER_TO_DATE', 'THIS_FISCAL_YEAR_TO_DATE', 'THIS_MONTH', 'THIS_MONTH_TO_DATE', 'THIS_ROLLING_HALF', 'THIS_ROLLING_QUARTER', 'THIS_ROLLING_YEAR', 'THIS_WEEK', 'THIS_WEEK_TO_DATE', 'THIS_YEAR', 'THIS_YEAR_TO_DATE', 'THREE_DAYS_AGO', 'THREE_DAYS_FROM_NOW', 'THREE_FISCAL_QUARTERS_AGO', 'THREE_FISCAL_QUARTERS_AGO_TO_DATE', 'THREE_FISCAL_YEARS_AGO', 'THREE_FISCAL_YEARS_AGO_TO_DATE', 'THREE_MONTHS_AGO', 'THREE_MONTHS_AGO_TO_DATE', 'TODAY', 'TODAY_TO_END_OF_THIS_MONTH', 'TOMORROW', 'TWO_DAYS_AGO', 'TWO_DAYS_FROM_NOW', 'WEEK_AFTER_NEXT', 'WEEK_AFTER_NEXT_TO_DATE', 'WEEK_BEFORE_LAST', 'WEEK_BEFORE_LAST_TO_DATE', 'YESTERDAY'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, kpi_ranges_daterangeElemID.name],
  }),
  kpi_ranges_daterange_or_period: new PrimitiveType({
    elemID: kpi_ranges_daterange_or_periodElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['FISCAL_YEAR_BEFORE_LAST', 'LAST_FISCAL_YEAR', 'THIS_FISCAL_YEAR'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, kpi_ranges_daterange_or_periodElemID.name],
  }),
  kpi_ranges_daterange_report: new PrimitiveType({
    elemID: kpi_ranges_daterange_reportElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['10_MONTHS_AGO', '11_MONTHS_AGO', '12_MONTHS_AGO', '1_DAY_AGO', '1_FISCAL_HALF_AGO', '1_FISCAL_QUARTER_AGO', '1_FISCAL_YEAR_AGO', '1_MONTH_AGO', '1_WEEK_AGO', '2_DAYS_AGO', '2_FISCAL_HALVES_AGO', '2_FISCAL_QUARTERS_AGO', '2_FISCAL_YEARS_AGO', '2_MONTHS_AGO', '2_WEEKS_AGO', '3_DAYS_AGO', '3_FISCAL_HALVES_AGO', '3_FISCAL_QUARTERS_AGO', '3_FISCAL_YEARS_AGO', '3_MONTHS_AGO', '3_WEEKS_AGO', '4_DAYS_AGO', '4_FISCAL_HALVES_AGO', '4_FISCAL_QUARTERS_AGO', '4_FISCAL_YEARS_AGO', '4_MONTHS_AGO', '4_WEEKS_AGO', '5_DAYS_AGO', '5_FISCAL_HALVES_AGO', '5_FISCAL_QUARTERS_AGO', '5_FISCAL_YEARS_AGO', '5_MONTHS_AGO', '5_WEEKS_AGO', '6_DAYS_AGO', '6_FISCAL_HALVES_AGO', '6_FISCAL_QUARTERS_AGO', '6_FISCAL_YEARS_AGO', '6_MONTHS_AGO', '6_WEEKS_AGO', '7_DAYS_AGO', '7_FISCAL_HALVES_AGO', '7_FISCAL_QUARTERS_AGO', '7_FISCAL_YEARS_AGO', '7_MONTHS_AGO', '7_WEEKS_AGO', '8_FISCAL_HALVES_AGO', '8_FISCAL_QUARTERS_AGO', '8_FISCAL_YEARS_AGO', '8_MONTHS_AGO', '8_WEEKS_AGO', '9_MONTHS_AGO', 'APRIL_LAST_YEAR', 'APRIL_LAST_YEAR_TO_DATE', 'APRIL_THIS_YEAR', 'APRIL_THIS_YEAR_TO_DATE', 'AUGUST_LAST_YEAR', 'AUGUST_LAST_YEAR_TO_DATE', 'AUGUST_THIS_YEAR', 'AUGUST_THIS_YEAR_TO_DATE', 'CALENDAR_WEEK_2_LAST_MONTH', 'CALENDAR_WEEK_2_SAME_MONTH_LAST_FISCAL_QUARTER', 'CALENDAR_WEEK_2_SAME_MONTH_LAST_FISCAL_YEAR', 'CALENDAR_WEEK_2_THIS_MONTH', 'CALENDAR_WEEK_3_LAST_MONTH', 'CALENDAR_WEEK_3_SAME_MONTH_LAST_FISCAL_QUARTER', 'CALENDAR_WEEK_3_SAME_MONTH_LAST_FISCAL_YEAR', 'CALENDAR_WEEK_3_THIS_MONTH', 'CALENDAR_WEEK_4_LAST_MONTH', 'CALENDAR_WEEK_4_SAME_MONTH_LAST_FISCAL_QUARTER', 'CALENDAR_WEEK_4_SAME_MONTH_LAST_FISCAL_YEAR', 'CALENDAR_WEEK_4_THIS_MONTH', 'DECEMBER_LAST_YEAR', 'DECEMBER_LAST_YEAR_TO_DATE', 'DECEMBER_THIS_YEAR', 'DECEMBER_THIS_YEAR_TO_DATE', 'FEBRUARY_LAST_YEAR', 'FEBRUARY_LAST_YEAR_TO_DATE', 'FEBRUARY_THIS_YEAR', 'FEBRUARY_THIS_YEAR_TO_DATE', 'FIRST_2_WEEKS_LAST_MONTH__FIRST_14_DAYS', 'FIRST_2_WEEKS_SAME_MONTH_LAST_FISCAL_QUARTER__FIRST_14_DAYS', 'FIRST_2_WEEKS_SAME_MONTH_LAST_FISCAL_YEAR__FIRST_14_DAYS', 'FIRST_2_WEEKS_THIS_MONTH__FIRST_14_DAYS', 'FIRST_3_WEEKS_LAST_MONTH__FIRST_21_DAYS', 'FIRST_3_WEEKS_SAME_MONTH_LAST_FISCAL_QUARTER__FIRST_21_DAYS', 'FIRST_3_WEEKS_SAME_MONTH_LAST_FISCAL_YEAR__FIRST_21_DAYS', 'FIRST_3_WEEKS_THIS_MONTH__FIRST_21_DAYS', 'FIRST_4_WEEKS_LAST_MONTH__FIRST_28_DAYS', 'FIRST_4_WEEKS_SAME_MONTH_LAST_FISCAL_QUARTER__FIRST_28_DAYS', 'FIRST_4_WEEKS_SAME_MONTH_LAST_FISCAL_YEAR__FIRST_28_DAYS', 'FIRST_4_WEEKS_THIS_MONTH__FIRST_28_DAYS', 'FIRST_FISCAL_HALF_FISCAL_YEAR_BEFORE_LAST', 'FIRST_FISCAL_HALF_FISCAL_YEAR_BEFORE_LAST_TO_DATE', 'FIRST_FISCAL_HALF_LAST_FISCAL_YEAR', 'FIRST_FISCAL_HALF_LAST_FISCAL_YEAR_TO_DATE', 'FIRST_FISCAL_HALF_THIS_FISCAL_YEAR', 'FIRST_FISCAL_HALF_THIS_FISCAL_YEAR_TO_DATE', 'FIRST_FISCAL_QUARTER_FISCAL_YEAR_BEFORE_LAST', 'FIRST_FISCAL_QUARTER_FISCAL_YEAR_BEFORE_LAST_TO_DATE', 'FIRST_FISCAL_QUARTER_LAST_FISCAL_YEAR', 'FIRST_FISCAL_QUARTER_LAST_FISCAL_YEAR_TO_DATE', 'FIRST_FISCAL_QUARTER_THIS_FISCAL_YEAR', 'FIRST_FISCAL_QUARTER_THIS_FISCAL_YEAR_TO_DATE', 'FIRST_MONTH_FISCAL_QUARTER_BEFORE_LAST', 'FIRST_MONTH_FISCAL_QUARTER_BEFORE_LAST_TO_DATE', 'FIRST_MONTH_LAST_FISCAL_QUARTER', 'FIRST_MONTH_LAST_FISCAL_QUARTER_TO_DATE', 'FIRST_MONTH_SAME_FISCAL_QUARTER_FISCAL_YEAR_BEFORE_LAST', 'FIRST_MONTH_SAME_FISCAL_QUARTER_FISCAL_YEAR_BEFORE_LAST_TO_DATE', 'FIRST_MONTH_SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR', 'FIRST_MONTH_SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR_TO_DATE', 'FIRST_MONTH_THIS_FISCAL_QUARTER', 'FIRST_MONTH_THIS_FISCAL_QUARTER_TO_DATE', 'FIRST_THREE_FISCAL_QUARTERS_FISCAL_YEAR_BEFORE_LAST', 'FIRST_THREE_FISCAL_QUARTERS_LAST_FISCAL_YEAR', 'FIRST_THREE_FISCAL_QUARTERS_THIS_FISCAL_YEAR', 'FIRST_TWO_FISCAL_QUARTERS_FISCAL_YEAR_BEFORE_LAST', 'FIRST_TWO_FISCAL_QUARTERS_LAST_FISCAL_YEAR', 'FIRST_TWO_FISCAL_QUARTERS_THIS_FISCAL_YEAR', 'FIRST_TWO_MONTHS_FISCAL_QUARTER_BEFORE_LAST', 'FIRST_TWO_MONTHS_LAST_FISCAL_QUARTER', 'FIRST_TWO_MONTHS_SAME_FISCAL_QUARTER_FISCAL_YEAR_BEFORE_LAST', 'FIRST_TWO_MONTHS_SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR', 'FIRST_TWO_MONTHS_THIS_FISCAL_QUARTER', 'FOURTH_FISCAL_QUARTER_FISCAL_YEAR_BEFORE_LAST', 'FOURTH_FISCAL_QUARTER_FISCAL_YEAR_BEFORE_LAST_TO_DATE', 'FOURTH_FISCAL_QUARTER_LAST_FISCAL_YEAR', 'FOURTH_FISCAL_QUARTER_LAST_FISCAL_YEAR_TO_DATE', 'FOURTH_FISCAL_QUARTER_THIS_FISCAL_YEAR', 'FOURTH_FISCAL_QUARTER_THIS_FISCAL_YEAR_TO_DATE', 'JANUARY_LAST_YEAR', 'JANUARY_LAST_YEAR_TO_DATE', 'JANUARY_THIS_YEAR', 'JANUARY_THIS_YEAR_TO_DATE', 'JANUARY_THROUGH_APRIL_LAST_YEAR', 'JANUARY_THROUGH_APRIL_THIS_YEAR', 'JANUARY_THROUGH_AUGUST_LAST_YEAR', 'JANUARY_THROUGH_AUGUST_THIS_YEAR', 'JANUARY_THROUGH_FEBRUARY_LAST_YEAR', 'JANUARY_THROUGH_FEBRUARY_THIS_YEAR', 'JANUARY_THROUGH_JULY_LAST_YEAR', 'JANUARY_THROUGH_JULY_THIS_YEAR', 'JANUARY_THROUGH_JUNE_LAST_YEAR', 'JANUARY_THROUGH_JUNE_THIS_YEAR', 'JANUARY_THROUGH_MARCH_LAST_YEAR', 'JANUARY_THROUGH_MARCH_THIS_YEAR', 'JANUARY_THROUGH_MAY_LAST_YEAR', 'JANUARY_THROUGH_MAY_THIS_YEAR', 'JANUARY_THROUGH_NOVEMBER_LAST_YEAR', 'JANUARY_THROUGH_NOVEMBER_THIS_YEAR', 'JANUARY_THROUGH_OCTOBER_LAST_YEAR', 'JANUARY_THROUGH_OCTOBER_THIS_YEAR', 'JANUARY_THROUGH_SEPTEMBER_LAST_YEAR', 'JANUARY_THROUGH_SEPTEMBER_THIS_YEAR', 'JULY_LAST_YEAR', 'JULY_LAST_YEAR_TO_DATE', 'JULY_THIS_YEAR', 'JULY_THIS_YEAR_TO_DATE', 'JUNE_LAST_YEAR', 'JUNE_LAST_YEAR_TO_DATE', 'JUNE_THIS_YEAR', 'JUNE_THIS_YEAR_TO_DATE', 'MARCH_LAST_YEAR', 'MARCH_LAST_YEAR_TO_DATE', 'MARCH_THIS_YEAR', 'MARCH_THIS_YEAR_TO_DATE', 'MAY_LAST_YEAR', 'MAY_LAST_YEAR_TO_DATE', 'MAY_THIS_YEAR', 'MAY_THIS_YEAR_TO_DATE', 'NOVEMBER_LAST_YEAR', 'NOVEMBER_LAST_YEAR_TO_DATE', 'NOVEMBER_THIS_YEAR', 'NOVEMBER_THIS_YEAR_TO_DATE', 'OCTOBER_LAST_YEAR', 'OCTOBER_LAST_YEAR_TO_DATE', 'OCTOBER_THIS_YEAR', 'OCTOBER_THIS_YEAR_TO_DATE', 'SECOND_FISCAL_HALF_FISCAL_YEAR_BEFORE_LAST', 'SECOND_FISCAL_HALF_FISCAL_YEAR_BEFORE_LAST_TO_DATE', 'SECOND_FISCAL_HALF_LAST_FISCAL_YEAR', 'SECOND_FISCAL_HALF_LAST_FISCAL_YEAR_TO_DATE', 'SECOND_FISCAL_HALF_THIS_FISCAL_YEAR', 'SECOND_FISCAL_HALF_THIS_FISCAL_YEAR_TO_DATE', 'SECOND_FISCAL_QUARTER_FISCAL_YEAR_BEFORE_LAST', 'SECOND_FISCAL_QUARTER_FISCAL_YEAR_BEFORE_LAST_TO_DATE', 'SECOND_FISCAL_QUARTER_LAST_FISCAL_YEAR', 'SECOND_FISCAL_QUARTER_LAST_FISCAL_YEAR_TO_DATE', 'SECOND_FISCAL_QUARTER_THIS_FISCAL_YEAR', 'SECOND_FISCAL_QUARTER_THIS_FISCAL_YEAR_TO_DATE', 'SECOND_MONTH_FISCAL_QUARTER_BEFORE_LAST', 'SECOND_MONTH_FISCAL_QUARTER_BEFORE_LAST_TO_DATE', 'SECOND_MONTH_LAST_FISCAL_QUARTER', 'SECOND_MONTH_LAST_FISCAL_QUARTER_TO_DATE', 'SECOND_MONTH_SAME_FISCAL_QUARTER_FISCAL_YEAR_BEFORE_LAST', 'SECOND_MONTH_SAME_FISCAL_QUARTER_FISCAL_YEAR_BEFORE_LAST_TO_DATE', 'SECOND_MONTH_SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR', 'SECOND_MONTH_SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR_TO_DATE', 'SECOND_MONTH_THIS_FISCAL_QUARTER', 'SECOND_MONTH_THIS_FISCAL_QUARTER_TO_DATE', 'SEPTEMBER_LAST_YEAR', 'SEPTEMBER_LAST_YEAR_TO_DATE', 'SEPTEMBER_THIS_YEAR', 'SEPTEMBER_THIS_YEAR_TO_DATE', 'START_OF_LAST_MONTH_TO_END_OF_ITS_FIRST_WEEK', 'START_OF_LAST_MONTH_TO_END_OF_ITS_FOURTH_WEEK', 'START_OF_LAST_MONTH_TO_END_OF_ITS_SECOND_WEEK', 'START_OF_LAST_MONTH_TO_END_OF_ITS_THIRD_WEEK', 'START_OF_SAME_MONTH_LAST_FISCAL_QUARTER_TO_END_OF_ITS_FIRST_WEEK', 'START_OF_SAME_MONTH_LAST_FISCAL_QUARTER_TO_END_OF_ITS_FOURTH_WEEK', 'START_OF_SAME_MONTH_LAST_FISCAL_QUARTER_TO_END_OF_ITS_SECOND_WEEK', 'START_OF_SAME_MONTH_LAST_FISCAL_QUARTER_TO_END_OF_ITS_THIRD_WEEK', 'START_OF_SAME_MONTH_LAST_FISCAL_YEAR_TO_END_OF_ITS_FIRST_WEEK', 'START_OF_SAME_MONTH_LAST_FISCAL_YEAR_TO_END_OF_ITS_FOURTH_WEEK', 'START_OF_SAME_MONTH_LAST_FISCAL_YEAR_TO_END_OF_ITS_SECOND_WEEK', 'START_OF_SAME_MONTH_LAST_FISCAL_YEAR_TO_END_OF_ITS_THIRD_WEEK', 'START_OF_THIS_MONTH_TO_END_OF_ITS_FIRST_WEEK', 'START_OF_THIS_MONTH_TO_END_OF_ITS_FOURTH_WEEK', 'START_OF_THIS_MONTH_TO_END_OF_ITS_SECOND_WEEK', 'START_OF_THIS_MONTH_TO_END_OF_ITS_THIRD_WEEK', 'START_OF_WEEK_5_LAST_MONTH_TO_END_OF_LAST_MONTH', 'START_OF_WEEK_5_SAME_MONTH_LAST_FISCAL_QUARTER_TO_END_OF_THAT_MONTH', 'START_OF_WEEK_5_SAME_MONTH_LAST_FISCAL_YEAR_TO_END_OF_THAT_MONTH', 'START_OF_WEEK_5_THIS_MONTH_TO_END_OF_THIS_MONTH', 'THIRD_FISCAL_QUARTER_FISCAL_YEAR_BEFORE_LAST', 'THIRD_FISCAL_QUARTER_FISCAL_YEAR_BEFORE_LAST_TO_DATE', 'THIRD_FISCAL_QUARTER_LAST_FISCAL_YEAR', 'THIRD_FISCAL_QUARTER_LAST_FISCAL_YEAR_TO_DATE', 'THIRD_FISCAL_QUARTER_THIS_FISCAL_YEAR', 'THIRD_FISCAL_QUARTER_THIS_FISCAL_YEAR_TO_DATE', 'THIRD_MONTH_FISCAL_QUARTER_BEFORE_LAST', 'THIRD_MONTH_FISCAL_QUARTER_BEFORE_LAST_TO_DATE', 'THIRD_MONTH_LAST_FISCAL_QUARTER', 'THIRD_MONTH_LAST_FISCAL_QUARTER_TO_DATE', 'THIRD_MONTH_SAME_FISCAL_QUARTER_FISCAL_YEAR_BEFORE_LAST', 'THIRD_MONTH_SAME_FISCAL_QUARTER_FISCAL_YEAR_BEFORE_LAST_TO_DATE', 'THIRD_MONTH_SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR', 'THIRD_MONTH_SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR_TO_DATE', 'THIRD_MONTH_THIS_FISCAL_QUARTER', 'THIRD_MONTH_THIS_FISCAL_QUARTER_TO_DATE', 'WEEK_1_LAST_MONTH__DAYS_1_TO_7', 'WEEK_1_SAME_MONTH_LAST_FISCAL_QUARTER__DAYS_1_TO_7', 'WEEK_1_SAME_MONTH_LAST_FISCAL_YEAR__DAYS_1_TO_7', 'WEEK_1_THIS_MONTH__DAYS_1_TO_7', 'WEEK_2_LAST_MONTH__DAYS_8_TO_14', 'WEEK_2_SAME_MONTH_LAST_FISCAL_QUARTER__DAYS_8_TO_14', 'WEEK_2_SAME_MONTH_LAST_FISCAL_YEAR__DAYS_8_TO_14', 'WEEK_2_THIS_MONTH__DAYS_8_TO_14', 'WEEK_3_LAST_MONTH__DAYS_15_TO_21', 'WEEK_3_SAME_MONTH_LAST_FISCAL_QUARTER__DAYS_15_TO_21', 'WEEK_3_SAME_MONTH_LAST_FISCAL_YEAR__DAYS_15_TO_21', 'WEEK_3_THIS_MONTH__DAYS_15_TO_21', 'WEEK_4_LAST_MONTH__DAYS_22_TO_28', 'WEEK_4_SAME_MONTH_LAST_FISCAL_QUARTER__DAYS_22_TO_28', 'WEEK_4_SAME_MONTH_LAST_FISCAL_YEAR__DAYS_22_TO_28', 'WEEK_4_THIS_MONTH__DAYS_22_TO_28', 'WEEK_5_LAST_MONTH__DAY_29_TO_MONTHS_END', 'WEEK_5_SAME_MONTH_LAST_FISCAL_QUARTER__DAY_29_TO_MONTHS_END', 'WEEK_5_SAME_MONTH_LAST_FISCAL_YEAR__DAY_29_TO_MONTHS_END', 'WEEK_5_THIS_MONTH__DAY_29_TO_MONTHS_END'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, kpi_ranges_daterange_reportElemID.name],
  }),
  kpi_ranges_period: new PrimitiveType({
    elemID: kpi_ranges_periodElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['FIRST_FISCAL_QUARTER_LAST_FY', 'FIRST_FISCAL_QUARTER_THIS_FY', 'FISCAL_QUARTER_BEFORE_LAST', 'FOURTH_FISCAL_QUARTER_LAST_FY', 'FOURTH_FISCAL_QUARTER_THIS_FY', 'LAST_FISCAL_QUARTER', 'LAST_FISCAL_QUARTER_ONE_FISCAL_YEAR_AGO', 'LAST_FISCAL_QUARTER_TO_PERIOD', 'LAST_FISCAL_YEAR_TO_PERIOD', 'LAST_PERIOD', 'LAST_PERIOD_ONE_FISCAL_QUARTER_AGO', 'LAST_PERIOD_ONE_FISCAL_YEAR_AGO', 'LAST_ROLLING_18_PERIODS', 'LAST_ROLLING_6_FISCAL_QUARTERS', 'PERIOD_BEFORE_LAST', 'SAME_FISCAL_QUARTER_LAST_FY', 'SAME_FISCAL_QUARTER_LAST_FY_TO_PERIOD', 'SAME_PERIOD_LAST_FISCAL_QUARTER', 'SAME_PERIOD_LAST_FY', 'SECOND_FISCAL_QUARTER_LAST_FY', 'SECOND_FISCAL_QUARTER_THIS_FY', 'THIRD_FISCAL_QUARTER_LAST_FY', 'THIRD_FISCAL_QUARTER_THIS_FY', 'THIS_FISCAL_QUARTER', 'THIS_FISCAL_QUARTER_TO_PERIOD', 'THIS_FISCAL_YEAR_TO_PERIOD', 'THIS_PERIOD'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, kpi_ranges_periodElemID.name],
  }),
  kpi_snapshots_custom: new PrimitiveType({
    elemID: kpi_snapshots_customElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CUSTOM', 'CUSTOM10', 'CUSTOM2', 'CUSTOM3', 'CUSTOM4', 'CUSTOM5', 'CUSTOM6', 'CUSTOM7', 'CUSTOM8', 'CUSTOM9'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, kpi_snapshots_customElemID.name],
  }),
  kpi_snapshots_daterange: new PrimitiveType({
    elemID: kpi_snapshots_daterangeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCTUPTIME', 'AGGREGATEDBOOKINGS', 'AVERAGEINVENTORY', 'BOOKINGS', 'BOOKINGSALT', 'CARTABANDON', 'CHECKOUTABANDON', 'CLOSEDCASES', 'CLOSEDISSUES', 'COMMISSIONS', 'COMMISSIONSPARTNER', 'CURRENTLOGGEDINUSERS', 'CUSTOMERSWON', 'ECOMMISSIONS', 'ECOMMISSIONSPARTNER', 'EMPLOYEES', 'ESCALATEDCASES', 'ESTIMATES', 'ESTIMATESRANGE', 'ETECASEEOVERFIVE', 'ETECASEEOVERTWO', 'ETECASEVOVERFIVE', 'ETECASEVOVERTWO', 'ETECUSTEOVERFIVE', 'ETECUSTEOVERTWO', 'ETECUSTVOVERFIVE', 'ETECUSTVOVERTWO', 'ETESOEOVERFIVE', 'ETESOEOVERTWO', 'ETESOVOVERFIVE', 'ETESOVOVERTWO', 'FILLRATE', 'FORECAST', 'FORECASTASA', 'FORECASTOVERRIDE', 'FORECASTOVERRIDEASA', 'HOSTEDSITETRAFFIC', 'NEWBUSINESSORD', 'NEWBUSINESSORDALT', 'NEWCASES', 'NEWCUSTOMERSORD', 'NEWISSUES', 'NEWLEADS', 'NEWLEADSGROSS', 'NEWOPPORTUNITIES', 'NEWVISITORS', 'OPENCASES', 'OPENISSUES', 'OPPORTUNITIES', 'OPPORTUNITIESLOST', 'OPPORTUNITIESRANGE', 'OPPORTUNITIESWON', 'ORDERS', 'PAGETIMESOVERFIVE', 'PAGETIMESOVERTWO', 'PCOMMISSIONS', 'PCOMMISSIONSPARTNER', 'PIPELINE', 'PIPELINEASA', 'PIPELINEDEALS', 'PIPELINEWEIGHTED', 'PIPELINEWEIGHTEDASA', 'PROSPECTS', 'PURCHASES', 'QUOTA', 'QUOTAASA', 'QUOTAREPS', 'RPAGETIMESOVERFIVE', 'RPAGETIMESOVERTWO', 'SITETRAFFIC', 'SPAGETIMESOVERFIVE', 'SPAGETIMESOVERTWO', 'TOTALBOOKINGS', 'TOTALORDERS', 'TOTALPIPEDEALS', 'TOTALPIPELINE', 'TOTALPIPELINEASA', 'TOTALPIPEWEIGHTED', 'TOTALPIPEWEIGHTEDASA', 'VENDOROPENPO', 'VISITORTRAFFIC', 'WEBORDERS', 'WEBREVENUE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, kpi_snapshots_daterangeElemID.name],
  }),
  kpi_snapshots_daterange_or_period: new PrimitiveType({
    elemID: kpi_snapshots_daterange_or_periodElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['BANKBAL', 'COGS', 'CREDITCARDBAL', 'DEFERREDREVENUE', 'EQUITY', 'EXPENSES', 'FIXEDASSET', 'INCOME', 'INTTURNOVRPERPERIOD', 'INVENTORY', 'LONGTERMLIAB', 'NETCASHFLOW', 'NEWBUSINESS', 'NEWCUSTOMERS', 'ONTIMERECEIPTS', 'ONTIMESHIPMENTS', 'OPERATINGEXPENSES', 'OPERCASHFLOW', 'OTHERASSET', 'OTHERCURRENTASSET', 'OTHERCURRENTLIAB', 'PAYABLES', 'PAYROLL', 'PROFIT', 'RECEIVABLES', 'REVENUE', 'SALES', 'SALESCASHBASIS', 'UTILIZATION', 'VENDORBALANCE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, kpi_snapshots_daterange_or_periodElemID.name],
  }),
  kpi_snapshots_formula: new PrimitiveType({
    elemID: kpi_snapshots_formulaElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['FORMULACURRENCY', 'FORMULANUMERIC', 'FORMULAPERCENT'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, kpi_snapshots_formulaElemID.name],
  }),
  kpi_snapshots_internal: new PrimitiveType({
    elemID: kpi_snapshots_internalElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCTUPTIME', 'AGGREGATEDBOOKINGS', 'BOOKINGS', 'CARTABANDON', 'CHECKOUTABANDON', 'CURRENTLOGGEDINUSERS', 'CUSTOMERSWON', 'EMPLOYEES', 'ETECASEEOVERFIVE', 'ETECASEEOVERTWO', 'ETECASEVOVERFIVE', 'ETECASEVOVERTWO', 'ETECUSTEOVERFIVE', 'ETECUSTEOVERTWO', 'ETECUSTVOVERFIVE', 'ETECUSTVOVERTWO', 'ETESOEOVERFIVE', 'ETESOEOVERTWO', 'ETESOVOVERFIVE', 'ETESOVOVERTWO', 'NEWBUSINESS', 'NEWBUSINESSORD', 'NEWCUSTOMERS', 'NEWCUSTOMERSORD', 'ORDERS', 'PAGETIMESOVERFIVE', 'PAGETIMESOVERTWO', 'RPAGETIMESOVERFIVE', 'RPAGETIMESOVERTWO', 'SPAGETIMESOVERFIVE', 'SPAGETIMESOVERTWO', 'VENDORBALANCE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, kpi_snapshots_internalElemID.name],
  }),
  kpiscorecards_comparisons: new PrimitiveType({
    elemID: kpiscorecards_comparisonsElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['RATIO_ABSOLUTE', 'RATIO_PERCENT', 'SUM', 'VARIANCE_ABSOLUTE', 'VARIANCE_PERCENT'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, kpiscorecards_comparisonsElemID.name],
  }),
  kpiscorecards_highlight_conditions: new PrimitiveType({
    elemID: kpiscorecards_highlight_conditionsElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ALWAYS', 'GREATER_THAN', 'LESS_THAN', 'MAGNITUDE_GREATER_THAN', 'MAGNITUDE_LESS_THAN'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, kpiscorecards_highlight_conditionsElemID.name],
  }),
  kpiscorecards_highlight_icons: new PrimitiveType({
    elemID: kpiscorecards_highlight_iconsElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['BLUE_FLAG', 'BLUE_NEW', 'CHECKMARK', 'DOLLAR_SIGN_1', 'DOLLAR_SIGN_2', 'DOLLAR_SIGN_3', 'EXCLAMATION_MARK', 'FIREBALL', 'GREEN_FLAG', 'HEART', 'ORANGE_FLAG', 'RED_ARROW_LEFT', 'RED_ARROW_RIGHT', 'RED_FLAG', 'RED_NEW', 'STARBURST', 'STARBURST_NEW', 'X_MARK', 'YELLOW_FLAG'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, kpiscorecards_highlight_iconsElemID.name],
  }),
  kpiscorecards_useperiods: new PrimitiveType({
    elemID: kpiscorecards_useperiodsElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['F', 'T'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, kpiscorecards_useperiodsElemID.name],
  }),
  locking_actions: new PrimitiveType({
    elemID: locking_actionsElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['LOCK', 'UNLOCK'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, locking_actionsElemID.name],
  }),
  overwriting_actions: new PrimitiveType({
    elemID: overwriting_actionsElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['OVERWRITE', 'PRESERVE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, overwriting_actionsElemID.name],
  }),
  plugintype_deployment_model: new PrimitiveType({
    elemID: plugintype_deployment_modelElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ALLOW_MULTIPLE', 'ALLOW_SINGLE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, plugintype_deployment_modelElemID.name],
  }),
  plugintype_loglevel: new PrimitiveType({
    elemID: plugintype_loglevelElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['AUDIT', 'DEBUG', 'EMERGENCY', 'ERROR'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, plugintype_loglevelElemID.name],
  }),
  plugintype_status: new PrimitiveType({
    elemID: plugintype_statusElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['RELEASED', 'TESTING'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, plugintype_statusElemID.name],
  }),
  portlet_analytics_height: new PrimitiveType({
    elemID: portlet_analytics_heightElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['MEDIUM', 'SHORT', 'TALL'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_analytics_heightElemID.name],
  }),
  portlet_analytics_portlettype: new PrimitiveType({
    elemID: portlet_analytics_portlettypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CHART', 'PIVOT', 'TABLE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_analytics_portlettypeElemID.name],
  }),
  portlet_calendar_agenda: new PrimitiveType({
    elemID: portlet_calendar_agendaElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['TODAY_ONLY', 'UPCOMING'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_calendar_agendaElemID.name],
  }),
  portlet_customsearch_backgroundtype: new PrimitiveType({
    elemID: portlet_customsearch_backgroundtypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['BANDS', 'GLOBAL_BACKGROUND', 'GRID', 'LINES'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_customsearch_backgroundtypeElemID.name],
  }),
  portlet_customsearch_charttheme: new PrimitiveType({
    elemID: portlet_customsearch_chartthemeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['BASIC', 'COLORFUL', 'GLOBAL_THEME', 'MATCH_COLOR_THEME_BOLD', 'MATCH_COLOR_THEME_LIGHT'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_customsearch_chartthemeElemID.name],
  }),
  portlet_customsearch_drilldown: new PrimitiveType({
    elemID: portlet_customsearch_drilldownElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['IN_PORTLET', 'NEW_PAGE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_customsearch_drilldownElemID.name],
  }),
  portlet_customsearch_savedsearch: new PrimitiveType({
    elemID: portlet_customsearch_savedsearchElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ALLOCATEORDER', 'ANALYTICSAUDITTRAILDETAILVIEW', 'COMMITORDER', 'CUSTOMERDASHBOARDVIEW', 'CUSTOMERSBYOSBALANCE', 'CUSTOMERSEARCH', 'CUSTOMERSTHISWEEKBYLEADSOURCE', 'CUSTOMERSTORENEWTHISMONTH', 'CUSTOMSEARCH61', 'CUSTOMTRANSACTIONSEARCH', 'DEFAULTSCRIPTNOTESPORTLETVIEW', 'DEPOSITSUMMARY', 'ESCALATEDCASES', 'FAILEDRECORDS', 'GLAUDITNUMBERINGHISTORY', 'GLIPGLIMPACT', 'GLIPGLMULTI', 'GLIPTRANSACTION', 'GOOGLEBASE', 'HIGHPRIORITYCASES', 'INFORMATIONITEMSVIEW', 'INVENTORYADJUSTMENTS', 'INVENTORYSTATUS', 'ISSUEDASHBOARDVIEW', 'LEADSTHISWEEKBYLEADSOURCE', 'MOBILEEXPENSEREPORTAWAITINGMYAPPROVAL', 'MOBILEEXPENSEREPORTNOTSUBMITTED', 'MOBILEEXPENSEREPORTOUTSTANDING', 'MOBILEEXPENSEREPORTREJECTED', 'MOBILETIMEENTRIES', 'MOBILETIMEENTRIES2', 'MYACTIVECUSTOMERS', 'MYACTIVELEADS', 'MYACTIVEPROSPECTS', 'MYCALLSTOCOMPLETE', 'MYNEWLEADSTHISWEEK', 'MYNEWPROSPECTSTHISWEEK', 'MYOPENORRECENTLYCLOSEDOPPORTUNITIES', 'MYOPPORTUNITIESTOCLOSE', 'MYTEAMSACTIVECUSTOMERS', 'MYTEAMSACTIVELEADS', 'MYTEAMSACTIVEPROSPECTS', 'MYUNCOMPLETEDTASKS', 'NEWCASESTODAY', 'NEWHIRESTHISMONTHBYHIREDATE', 'NEWHIRESTHISMONTHBYNAME', 'NEXTAG', 'OPENAPBALANCES', 'OPENARBALANCES', 'OPENESTIMATESANDORDERS', 'OPENSALESORDERS', 'OPPORTUNITYDASHBOARDVIEW', 'PARALLELBOOKSTRANSACTIONIMPACT', 'PHONECALLDASHBOARDVIEW', 'PRICEBOOKLIST', 'PRICELISTHISTORYBASESEARCH', 'PRICELISTHISTORYNOQUANTITYORPRICETYPE', 'PROSPECTSTHISWEEKBYLEADSOURCE', 'PURCHASEORDERRECEIPTPASTDUE', 'PURCHASEORDERSTORECEIVE', 'RECENTORUPCOMING', 'RESOURCEALLOCATIONSFORAPPROVAL', 'REVENUEARRANGEMENTSPENDINGAPPROVAL', 'REVENUERECOGNITIONERRORS', 'SALESORDERSHIPMENTPASTDUE', 'SALESORDERSTOFULFILL', 'SHOPPINGCOM', 'SHOPZILLA', 'STANDARDTASKPORTLETSEARCHDUEDATE', 'STANDARDTASKPORTLETSEARCHORDER', 'STATISTICALJOURNALIMPACTHISTORY', 'TASKDASHBOARDVIEW', 'TASKSTOREPLACE', 'THIRDPARTYCONVERSIONTRACKINGURL', 'TIMEBILLINGRULEFILTER', 'TIMEENTRIES', 'TIMEENTRYCHARGERULEFILTER', 'TODAYSSALESORDERS', 'TOPOPENESTIMATESTHISMONTH', 'TOPSALESREPTHISMONTH', 'TRANSACTIONIMPACT', 'TRANSACTIONIMPACTHISTORY', 'TRANSFERORDERRECEIPTPASTDUE', 'TRANSFERORDERSHIPMENTPASTDUE', 'USAGECHARGES', 'VENDORDASHBOARDVIEW', 'VENDORSBYOSBALANCE', 'WORKORDERBUILDPASTDUE', 'YAHOOSHOPPING'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_customsearch_savedsearchElemID.name],
  }),
  portlet_kpi_employees: new PrimitiveType({
    elemID: portlet_kpi_employeesElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ALL', 'ME_ONLY', 'MY_TEAM'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_kpi_employeesElemID.name],
  }),
  portlet_kpi_highlightif: new PrimitiveType({
    elemID: portlet_kpi_highlightifElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ALWAYS', 'GREATER_THAN', 'LESS_THAN', 'VARIANCE_GREATER_THAN', 'VARIANCE_LESS_THAN'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_kpi_highlightifElemID.name],
  }),
  portlet_kpimeter_combined_snapshots: new PrimitiveType({
    elemID: portlet_kpimeter_combined_snapshotsElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACTUAL_VS_FORECAST', 'ACTUAL_VS_QUOTA', 'FORECAST_VS_QUOTA', 'FORECAST_VS_QUOTA_ASA'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_kpimeter_combined_snapshotsElemID.name],
  }),
  portlet_kpireport_orientation: new PrimitiveType({
    elemID: portlet_kpireport_orientationElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['Date', 'KPIs'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_kpireport_orientationElemID.name],
  }),
  portlet_kpireport_reportid: new PrimitiveType({
    elemID: portlet_kpireport_reportidElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
    },
    path: [...enumsFolderPath, portlet_kpireport_reportidElemID.name],
  }),
  portlet_kpireport_restrict: new PrimitiveType({
    elemID: portlet_kpireport_restrictElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['All', 'My', 'Only'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_kpireport_restrictElemID.name],
  }),
  portlet_list_type: new PrimitiveType({
    elemID: portlet_list_typeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCOUNTINGBOOK', 'ACCOUNTINGCONTEXT', 'ACCOUNTINGTRANSACTION', 'ACTIVITY', 'ALLOC', 'ALLOCATEORDERSCHEDULE', 'AMORTIZATIONSCHEDULE', 'AMORTIZATIONTEMPLATE', 'ASCHARGEDPROJECTREVENUERULE', 'BALANCETRXBYSEGMENTS', 'BANKIMPORTHISTORY', 'BILLINGACCOUNT', 'BILLINGACCOUNTBILLCYCLE', 'BILLINGACCOUNTBILLREQUEST', 'BILLINGRATECARD', 'BILLINGREVENUEEVENT', 'BILLOFDISTRIBUTION', 'BILLRUN', 'BILLRUNSCHEDULE', 'BINNUMBER', 'BOM', 'BUDGET', 'BUDGETEXCHANGERATE', 'BULKPROCERRORS', 'BUSINESSEVENTHISTORY', 'BUSINESSEVENTPROCESSINGDETAILS', 'CALENDAR', 'CALL', 'CAMPAIGN', 'CARDHOLDERAUTHENTICATIONEVENT', 'CASE', 'CCTRAN', 'CHARGE', 'CHARGERULE', 'CHARGERUN', 'CLASS', 'CLASSSEGMENTMAPPING', 'CMSCONTENT', 'CMSPAGE', 'CMSPAGETYPE', 'COMMERCECATALOG', 'COMMITORDERSCHEDULE', 'COMPETITOR', 'COMSEARCHBOOST', 'COMSEARCHBOOSTTYPE', 'COMSEARCHGROUPSYN', 'COMSEARCHONEWAYSYN', 'CONSOLEXCHANGERATE', 'CONTACT', 'CURRENCYRATETYPE', 'CUSTOMER', 'DEPARTMENT', 'DEPTSEGMENTMAPPING', 'DISTRIBUTIONNETWORK', 'DOCUMENT', 'DRIVERSLICENSE', 'EMPLOYEE', 'EMPLOYEECHANGE', 'EMPLOYEECHANGEREASON', 'EMPLOYEECHANGEREQUEST', 'EMPLOYEECHANGETYPE', 'EMPLOYEESTATUS', 'EMPLOYEETYPE', 'ENTITYACCOUNTMAPPING', 'ENTITYMSESUBSIDIARY', 'EXPENSEAMORTIZATIONEVENT', 'EXPENSEAMORTIZATIONRULE', 'EXPENSEPLAN', 'EXPENSEREPORTPOLICY', 'FAIRVALUEFORMULA', 'FAIRVALUEPRICE', 'FINANCIALINSTITUTION', 'FIXEDAMOUNTPROJECTREVENUERULE', 'FORECAST', 'FULFILLMENTEXCEPTIONREASON', 'GATEWAYNOTIFICATION', 'GENERICRESOURCE', 'GIFTCERTIFICATE', 'GLOBALACCOUNTMAPPING', 'GOAL', 'GOVERNMENTISSUEDIDTYPE', 'GROUPINGRULE', 'HCMJOB', 'INBOUNDSHIPMENT', 'INFOITEM', 'INVCOSTTEMPLATE', 'INVENTORYSTATUS', 'ISSUE', 'ITEM', 'ITEMACCOUNTMAPPING', 'ITEMCOLLECTION', 'ITEMDEMANDPLAN', 'ITEMPROCESSFAMILY', 'ITEMPROCESSGROUP', 'ITEMREVENUECATEGORY', 'ITEMSUPPLYPLAN', 'JOB', 'JOBREQUISITION', 'KUDOS', 'LABORBASEDPROJECTREVENUERULE', 'LATEORDERALLOCATION', 'LOCASSIGNCONF', 'LOCATION', 'LOCATIONCOSTINGGROUP', 'LOCSEGMENTMAPPING', 'MEMDOC', 'MEMDOCRESULTS', 'MERCHANDISEHIERARCHYLEVEL', 'MERCHANDISEHIERARCHYNODE', 'MERCHANDISEHIERARCHYVERSION', 'MFGCOSTTEMPLATE', 'MFGOPERATIONTASK', 'MFGROUTING', 'MSESUBSIDIARY', 'NEWSITEM', 'NEXUS', 'NOTIFICATION', 'OAUTHTOKEN', 'ONLINECASEFORM', 'ONLINELEADFORM', 'OPPRTNTY', 'ORDERALLOCATIONSTRATEGY', 'ORGANIZATIONVALUE', 'ORIGINATINGLEAD', 'OTHERGOVERNMENTISSUEDID', 'OUTBOUNDEMAILLOG', 'OUTBOUNDREQUEST', 'PARTNER', 'PASSPORT', 'PAYMENTEVENT', 'PAYMENTPROCESSINGPROFILE', 'PAYROLLBATCH', 'PAYROLLBATCH2', 'PCTCOMPLETEPROJECTREVENUERULE', 'PERFORMANCEMETRIC', 'PERFORMANCEREVIEW', 'PERFORMANCEREVIEWQUESTION', 'PERFORMANCEREVIEWRATINGSCALE', 'PERFORMANCEREVIEWSCHEDULE', 'PERFORMANCEREVIEWTEMPLATE', 'PICKSTRATEGY', 'PICKTASK', 'PLANDEFINITIONSCHEDULE', 'PLANNEDREVENUE', 'PLANNEDSTANDARDCOST', 'POSITION', 'PROJECTEXPENSETYPE', 'PROJECTREVENUERULE', 'PROJECTREVENUERULELIST', 'PROJECTTASK', 'PROJECTTASKANDCRMTASK', 'PROJECTTEMPLATE', 'PROMOTION', 'QUOTA', 'REGION', 'REPORT', 'REPORTRESULTS', 'REPORTSCHEDULE', 'REPOSITORYREFRESHSCHEDULE', 'RESALLOCATIONTIMEOFFCONFLICT', 'RESOURCEGROUP', 'RESTRICTION', 'REVENUEELEMENT', 'REVENUEPLAN', 'REVREC', 'REVRECOGNITIONSCHED', 'REVRECRULE', 'REVRECSCHEDULE', 'REVRECTEMPLATE', 'RSRCALLOCATION', 'SALESCAMPAIGN', 'SALESTERRITORY', 'SCRIPTNOTE', 'SCSnapshotRefreshSchedule', 'SOLUTION', 'STANDARDCOSTVERSION', 'SUBSCRIPTION', 'SUBSCRIPTIONCHANGEORDER', 'SUBSCRIPTIONLINE', 'SUBSCRIPTIONLINEREVISION', 'SUBSIDIARY', 'SUPPLYCHAINSNAPSHOT', 'SUPPORTTERRITORY', 'SYSTEMMEASURE', 'TASK', 'TAXTYPE', 'TERMINATIONREASON', 'TIME', 'TIMEAPPROVAL', 'TIMEOFFCHANGE', 'TIMEOFFPLAN', 'TIMEOFFREQUEST', 'TIMEOFFTYPE', 'TIMESHEET', 'TRANSACTION', 'UNDELIVEREDEMAIL', 'UNLOCKEDTIMEPERIOD', 'USAGE', 'USEROAUTHTOKEN', 'VENDOR', 'WAVE', 'WORKASSIGNMENT', 'WORKPLACE', 'ZONE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_list_typeElemID.name],
  }),
  portlet_quicksearch_generic: new PrimitiveType({
    elemID: portlet_quicksearch_genericElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACTIVITY', 'CAMPAIGN', 'CASE_NUMBER', 'CONTACT', 'CUSTOMER', 'DOCUMENT', 'DOCUMENT_NUMBER', 'EMAIL', 'EMPLOYEE', 'EVENT', 'ISSUE_NUMBER', 'ITEM', 'JOB', 'NAME', 'NAME', 'NAME_ID', 'PARTNER', 'PHONE', 'PHONE_CALL', 'PO_CHECK_NUMBER', 'PRODUCT_PAGE', 'PROJECT_TASK', 'SOLUTION', 'TASK', 'TRACKING_NUMBER', 'TRANSACTION_NUMBER', 'VENDOR', 'ZIP_POSTAL_CODE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_quicksearch_genericElemID.name],
  }),
  portlet_quicksearch_transaction: new PrimitiveType({
    elemID: portlet_quicksearch_transactionElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ASSEMBLY_BUILD', 'ASSEMBLY_UNBUILD', 'BALANCING_JOURNAL', 'BILL', 'BILL_CREDIT', 'BILL_PAYMENT', 'BIN_PUTAWAY_WORKSHEET', 'BIN_TRANSFER', 'BLANKET_PURCHASE_ORDER', 'CASH_REFUND', 'CASH_SALE', 'CCARD_REFUND', 'CHECK', 'COMMISSION', 'CREDIT_CARD', 'CREDIT_MEMO', 'CROSS_CHARGE_JOURNAL', 'CURRENCY_REVALUATION', 'CUSTOM', 'CUSTOMER_DEPOSIT', 'CUSTOMER_PAYMENT_AUTHORIZATION', 'CUSTOMER_REFUND', 'DEPOSIT', 'DEPOSIT_APPLICATION', 'DEPRECATED_CUSTOM_TRANSACTION', 'ESTIMATE', 'EXPENSE_REPORT', 'FINANCE_CHARGE', 'FULFILLMENT_REQUEST', 'GL_IMPACT_ADJUSTMENT', 'INBOUND_SHIPMENT', 'INVENTORY_ADJUSTMENT', 'INVENTORY_COST_REVALUATION', 'INVENTORY_COUNT', 'INVENTORY_DISTRIBUTION', 'INVENTORY_STATUS_CHANGE', 'INVENTORY_TRANSFER', 'INVENTORY_WORKSHEET', 'INVOICE', 'INVOICE_GROUP', 'ITEM_FULFILLMENT', 'ITEM_RECEIPT', 'JOURNAL', 'LIABILITY_ADJUSTMENT', 'NETTING_SETTLEMENT', 'OPPORTUNITY', 'ORDER_RESERVATION', 'OWNERSHIP_TRANSFER', 'PAYCHECK', 'PAYCHECK_JOURNAL', 'PAYMENT', 'PAYROLL_ADJUSTMENT', 'PAYROLL_LIABILITY_CHECK', 'PERIOD_END_JOURNAL', 'PURCHASE-TYPE_CUSTOM_TRANSACTION', 'PURCHASE_CONTRACT', 'PURCHASE_ORDER', 'REQUEST_FOR_QUOTE', 'REQUISITION', 'RETURN_AUTHORIZATION', 'REVENUE_ARRANGEMENT', 'REVENUE_COMMITMENT', 'REVENUE_COMMITMENT_REVERSAL', 'REVENUE_CONTRACT', 'SALES-TYPE_CUSTOM_TRANSACTION', 'SALES_ORDER', 'SALES_TAX_PAYMENT', 'STATEMENT_CHARGE', 'STORE_PICKUP_FULFILLMENT', 'SYSTEM_JOURNAL', 'TAX_LIABILITY_CHEQUE', 'TEGATA_PAYABLE', 'TEGATA_RECEIVABLE', 'TRANSFER', 'TRANSFER_ORDER', 'VENDOR_PREPAYMENT', 'VENDOR_PREPAYMENT_APPLICATION', 'VENDOR_REQUEST_FOR_QUOTE', 'VENDOR_RETURN_AUTHORIZATION', 'WAVE', 'WORK_ORDER', 'WORK_ORDER_CLOSE', 'WORK_ORDER_COMPLETION', 'WORK_ORDER_ISSUE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_quicksearch_transactionElemID.name],
  }),
  portlet_quicksearch_type: new PrimitiveType({
    elemID: portlet_quicksearch_typeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['GENERIC', 'TRANSACTION'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_quicksearch_typeElemID.name],
  }),
  portlet_reportsnapshot_backgroundtype: new PrimitiveType({
    elemID: portlet_reportsnapshot_backgroundtypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['BANDS', 'GLOBAL_BACKGROUND', 'GRID', 'LINES'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_reportsnapshot_backgroundtypeElemID.name],
  }),
  portlet_reportsnapshot_charttheme: new PrimitiveType({
    elemID: portlet_reportsnapshot_chartthemeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['BASIC', 'COLORFUL', 'GLOBAL_THEME', 'MATCH_COLOR_THEME_BOLD', 'MATCH_COLOR_THEME_LIGHT'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_reportsnapshot_chartthemeElemID.name],
  }),
  portlet_reportsnapshot_charttype: new PrimitiveType({
    elemID: portlet_reportsnapshot_charttypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['AREA', 'BAR', 'COLUMN', 'LINE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_reportsnapshot_charttypeElemID.name],
  }),
  portlet_reportsnapshot_daterange: new PrimitiveType({
    elemID: portlet_reportsnapshot_daterangeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['FISCAL_HALF_BEFORE_LAST', 'FISCAL_HALF_BEFORE_LAST_TO_DATE', 'FISCAL_QUARTER_BEFORE_LAST', 'FISCAL_QUARTER_BEFORE_LAST_TO_DATE', 'FISCAL_YEAR_BEFORE_LAST', 'FISCAL_YEAR_BEFORE_LAST_TO_DATE', 'FIVE_DAYS_AGO', 'FIVE_DAYS_FROM_NOW', 'FOUR_DAYS_AGO', 'FOUR_DAYS_FROM_NOW', 'FOUR_WEEKS_STARTING_THIS_WEEK', 'LAST_BUSINESS_WEEK', 'LAST_FISCAL_HALF', 'LAST_FISCAL_HALF_ONE_FISCAL_YEAR_AGO', 'LAST_FISCAL_HALF_TO_DATE', 'LAST_FISCAL_QUARTER', 'LAST_FISCAL_QUARTER_ONE_FISCAL_YEAR_AGO', 'LAST_FISCAL_QUARTER_TO_DATE', 'LAST_FISCAL_QUARTER_TWO_FISCAL_YEARS_AGO', 'LAST_FISCAL_YEAR', 'LAST_FISCAL_YEAR_TO_DATE', 'LAST_MONTH', 'LAST_MONTH_ONE_FISCAL_QUARTER_AGO', 'LAST_MONTH_ONE_FISCAL_YEAR_AGO', 'LAST_MONTH_TO_DATE', 'LAST_MONTH_TWO_FISCAL_QUARTERS_AGO', 'LAST_MONTH_TWO_FISCAL_YEARS_AGO', 'LAST_ROLLING_HALF', 'LAST_ROLLING_QUARTER', 'LAST_ROLLING_YEAR', 'LAST_WEEK', 'LAST_WEEK_TO_DATE', 'LAST_YEAR', 'LAST_YEAR_TO_DATE', 'MONTH_AFTER_NEXT', 'MONTH_AFTER_NEXT_TO_DATE', 'MONTH_BEFORE_LAST', 'MONTH_BEFORE_LAST_TO_DATE', 'NEXT_BUSINESS_WEEK', 'NEXT_FISCAL_HALF', 'NEXT_FISCAL_QUARTER', 'NEXT_FISCAL_YEAR', 'NEXT_FOUR_WEEKS', 'NEXT_MONTH', 'NEXT_ONE_HALF', 'NEXT_ONE_MONTH', 'NEXT_ONE_QUARTER', 'NEXT_ONE_WEEK_7_ROLLING_DAYS_', 'NEXT_ONE_YEAR', 'NEXT_WEEK', 'NINETY_DAYS_AGO', 'NINETY_DAYS_FROM_NOW', 'ONE_YEAR_BEFORE_LAST', 'PREVIOUS_FISCAL_QUARTERS_LAST_FISCAL_YEAR', 'PREVIOUS_FISCAL_QUARTERS_THIS_FISCAL_YEAR', 'PREVIOUS_MONTHS_LAST_FISCAL_HALF', 'PREVIOUS_MONTHS_LAST_FISCAL_QUARTER', 'PREVIOUS_MONTHS_LAST_FISCAL_YEAR', 'PREVIOUS_MONTHS_SAME_FISCAL_HALF_LAST_FISCAL_YEAR', 'PREVIOUS_MONTHS_SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR', 'PREVIOUS_MONTHS_THIS_FISCAL_HALF', 'PREVIOUS_MONTHS_THIS_FISCAL_QUARTER', 'PREVIOUS_MONTHS_THIS_FISCAL_YEAR', 'PREVIOUS_ONE_DAY', 'PREVIOUS_ONE_HALF', 'PREVIOUS_ONE_MONTH', 'PREVIOUS_ONE_QUARTER', 'PREVIOUS_ONE_WEEK', 'PREVIOUS_ONE_YEAR', 'PREVIOUS_ROLLING_HALF', 'PREVIOUS_ROLLING_QUARTER', 'PREVIOUS_ROLLING_YEAR', 'SAME_DAY_FISCAL_QUARTER_BEFORE_LAST', 'SAME_DAY_FISCAL_YEAR_BEFORE_LAST', 'SAME_DAY_LAST_FISCAL_QUARTER', 'SAME_DAY_LAST_FISCAL_YEAR', 'SAME_DAY_LAST_MONTH', 'SAME_DAY_LAST_WEEK', 'SAME_DAY_MONTH_BEFORE_LAST', 'SAME_DAY_WEEK_BEFORE_LAST', 'SAME_FISCAL_HALF_LAST_FISCAL_YEAR', 'SAME_FISCAL_HALF_LAST_FISCAL_YEAR_TO_DATE', 'SAME_FISCAL_QUARTER_FISCAL_YEAR_BEFORE_LAST', 'SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR', 'SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR_TO_DATE', 'SAME_MONTH_FISCAL_QUARTER_BEFORE_LAST', 'SAME_MONTH_FISCAL_YEAR_BEFORE_LAST', 'SAME_MONTH_LAST_FISCAL_QUARTER', 'SAME_MONTH_LAST_FISCAL_QUARTER_TO_DATE', 'SAME_MONTH_LAST_FISCAL_YEAR', 'SAME_MONTH_LAST_FISCAL_YEAR_TO_DATE', 'SAME_WEEK_FISCAL_YEAR_BEFORE_LAST', 'SAME_WEEK_LAST_FISCAL_YEAR', 'SIXTY_DAYS_AGO', 'SIXTY_DAYS_FROM_NOW', 'TEN_DAYS_AGO', 'TEN_DAYS_FROM_NOW', 'THIRTY_DAYS_AGO', 'THIRTY_DAYS_FROM_NOW', 'THIS_BUSINESS_WEEK', 'THIS_FISCAL_HALF', 'THIS_FISCAL_HALF_TO_DATE', 'THIS_FISCAL_QUARTER', 'THIS_FISCAL_QUARTER_TO_DATE', 'THIS_FISCAL_YEAR', 'THIS_FISCAL_YEAR_TO_DATE', 'THIS_MONTH', 'THIS_MONTH_TO_DATE', 'THIS_ROLLING_HALF', 'THIS_ROLLING_QUARTER', 'THIS_ROLLING_YEAR', 'THIS_WEEK', 'THIS_WEEK_TO_DATE', 'THIS_YEAR', 'THIS_YEAR_TO_DATE', 'THREE_DAYS_AGO', 'THREE_DAYS_FROM_NOW', 'THREE_FISCAL_QUARTERS_AGO', 'THREE_FISCAL_QUARTERS_AGO_TO_DATE', 'THREE_FISCAL_YEARS_AGO', 'THREE_FISCAL_YEARS_AGO_TO_DATE', 'THREE_MONTHS_AGO', 'THREE_MONTHS_AGO_TO_DATE', 'TODAY', 'TODAY_TO_END_OF_THIS_MONTH', 'TOMORROW', 'TWO_DAYS_AGO', 'TWO_DAYS_FROM_NOW', 'WEEK_AFTER_NEXT', 'WEEK_AFTER_NEXT_TO_DATE', 'WEEK_BEFORE_LAST', 'WEEK_BEFORE_LAST_TO_DATE', 'YESTERDAY'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_reportsnapshot_daterangeElemID.name],
  }),
  portlet_reportsnapshot_displaytype: new PrimitiveType({
    elemID: portlet_reportsnapshot_displaytypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['GRAPH', 'LIST'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_reportsnapshot_displaytypeElemID.name],
  }),
  portlet_reportsnapshot_graphlayout: new PrimitiveType({
    elemID: portlet_reportsnapshot_graphlayoutElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['BAR', 'COLUMN', 'LINE', 'PIE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_reportsnapshot_graphlayoutElemID.name],
  }),
  portlet_reportsnapshot_reportperiodrange: new PrimitiveType({
    elemID: portlet_reportsnapshot_reportperiodrangeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['1ST_FQTR_LAST_FYEAR', '1ST_FQTR_THIS_FYEAR', '2ND_FQTR_LAST_FYEAR', '2ND_FQTR_THIS_FYEAR', '3RD_FQTR_LAST_FYEAR', '3RD_FQTR_THIS_FYEAR', '4TH_FQTR_LAST_FYEAR', '4TH_FQTR_THIS_FYEAR', 'FQTR_BEFORE_LAST', 'FYEAR_BEFORE_LAST', 'LAST_FISCAL_QUARTER', 'LAST_FISCAL_YEAR', 'LAST_FQTR_ONE_FYEAR_AGO', 'LAST_FQTR_TO_PERIOD', 'LAST_FYEAR_TO_PERIOD', 'LAST_PERIOD', 'LAST_PERIOD_ONE_FQTR_AGO', 'LAST_PERIOD_ONE_FYEAR_AGO', 'LAST_ROLLING_18_PERIODS', 'LAST_ROLLING_6_FQTRS', 'PERIOD_BEFORE_LAST', 'SAME_FQTR_LAST_FYEAR', 'SAME_FQTR_LAST_FYEAR_TO_PERIOD', 'SAME_PERIOD_LAST_FQTR', 'SAME_PERIOD_LAST_FYEAR', 'THIS_FISCAL_QUARTER', 'THIS_FISCAL_YEAR', 'THIS_FQTR_TO_PERIOD', 'THIS_FYEAR_TO_PERIOD', 'THIS_PERIOD'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_reportsnapshot_reportperiodrangeElemID.name],
  }),
  portlet_reportsnapshot_snapshot: new PrimitiveType({
    elemID: portlet_reportsnapshot_snapshotElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['AR_AGING_SUM', 'CAMPAIGN_ACTIVITY', 'CAMPAIGN_ANALYSIS', 'CLOSE_CASE_SUM', 'COMPARATIVE_SALES', 'COMPARATIVE_SALES_ORD', 'COMPARATIVE_SALES_ORD_ASA', 'CUSTJOB_ACTIVITY_SUMMARY', 'CUSTOMER_BY_LEADSOURCE_SUM', 'CUSTOMER_BY_PARTNER_SUM', 'EARNED_VALUE', 'ESCALATED_CASE', 'FORECAST', 'FORECASTFORASA', 'FORECAST_BY_CUST', 'FORECAST_BY_ITEM_SUMMARY', 'FORECAST_OUT_BY_CUST', 'FORECAST_STATUS', 'INVENTORY_REV_SUMMARY', 'ITEM_PURCHASE_DOLLARS', 'ITEM_PURCHASE_QUANTITY', 'ITEM_SALES_DOLLARS', 'ITEM_SALES_ORD', 'ITEM_SALES_ORD_AGG', 'ITEM_SALES_QUANTITY', 'OPEN_CASE_SUM', 'OPEN_ESTIMATES', 'OPEN_ESTIMATESRANGE', 'OPEN_INVOICES', 'OPEN_OPPORTUNITIES', 'OPEN_OPPORTUNITIESRANGE', 'OPEN_SALES_ORDERS', 'PARTNER_ACTIVITY_SUMMARY', 'PIPELINE', 'PIPELINE_CUSTOMER', 'PIPELINE_CUSTOMER_TOTAL', 'PIPELINE_STATUS', 'PIPELINE_TOTAL', 'PIPELINE_TOTAL_STATUS', 'PROFIT_SUM_BY_CUST', 'PROSPECT_ANALYSIS_SUM', 'QUICK_REPORT', 'SALES_BY_CUST', 'SALES_BY_REP', 'SALES_FORECAST_SUM_SALESREP', 'SALES_MANAGEMENT_FORECAST', 'SALES_MANAGEMENT_FORECASTASA', 'SALES_MANAGEMENT_SALES', 'SALES_MANAGEMENT_SALESORD', 'SALES_MANAGEMENT_SALESORD_AGG', 'SALES_ORD_ALT_BY_REP', 'SALES_ORD_BY_CUST', 'SALES_ORD_BY_CUST_AGG', 'SALES_ORD_BY_PARTNER', 'SALES_ORD_BY_PROMO_CODE', 'SALES_ORD_BY_REP', 'SALES_ORD_BY_REP_AGG', 'SALES_SUMMARY_PARTNER', 'TIME_SUM_EMPLOYEE', 'TIME_SUM_ITEM', 'TIME_SUM_JOB', 'UTIL_EMPLOYEE', 'WEBSITE_HOSTEDITEM_HITS_ENTITY', 'WEBSITE_ITEM_HITS', 'WEBSITE_ITEM_HITS_ENTITY', 'WEBSITE_ITEM_HITS_VISITORS', 'WEBSITE_KEYWORDS_REVENUE', 'WEBSITE_KEYWORDS_VISITORS', 'WEBSITE_MEDIA_HITS', 'WEBSITE_MEDIA_HITS_VISITORS', 'WEBSITE_REFERRER_REVENUE', 'WEBSITE_REFERRER_VISITORS', 'WEBSITE_SITESEARCHHITS_SUMMARY', 'WEBSTORE_ITEM_ORDERS', 'WEBSTORE_ITEM_ORDERS_VISITORS'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_reportsnapshot_snapshotElemID.name],
  }),
  portlet_reportsnapshot_topx: new PrimitiveType({
    elemID: portlet_reportsnapshot_topxElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['0', 'BOTTOM_10', 'BOTTOM_15', 'BOTTOM_25', 'BOTTOM_5', 'BOTTOM_50', 'TOP_10', 'TOP_15', 'TOP_25', 'TOP_5', 'TOP_50'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_reportsnapshot_topxElemID.name],
  }),
  portlet_trendgraph_backgroundtype: new PrimitiveType({
    elemID: portlet_trendgraph_backgroundtypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['BANDS', 'GLOBAL_BACKGROUND', 'GRID', 'LINES'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_trendgraph_backgroundtypeElemID.name],
  }),
  portlet_trendgraph_charttheme: new PrimitiveType({
    elemID: portlet_trendgraph_chartthemeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['BASIC', 'COLORFUL', 'GLOBAL_THEME', 'MATCH_COLOR_THEME___BOLD', 'MATCH_COLOR_THEME___LIGHT'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_trendgraph_chartthemeElemID.name],
  }),
  portlet_trendgraph_charttype: new PrimitiveType({
    elemID: portlet_trendgraph_charttypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['AREA', 'BAR', 'COLUMN', 'LINE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_trendgraph_charttypeElemID.name],
  }),
  portlet_trendgraph_trendtype: new PrimitiveType({
    elemID: portlet_trendgraph_trendtypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['DAILY', 'MONTHLY', 'QUARTERLY', 'WEEKLY', 'YEARLY'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, portlet_trendgraph_trendtypeElemID.name],
  }),
  reminders_highlighting_rules_colors: new PrimitiveType({
    elemID: reminders_highlighting_rules_colorsElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['BLUE', 'BROWN', 'CYAN', 'DARKGREEN', 'DARKRED', 'GOLDENROD', 'GREEN', 'LIGHTBLUE', 'LIMEGREEN', 'MAROON', 'ORANGE', 'PASTELGREEN', 'PINK', 'PURPLE', 'RED', 'YELLOW'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, reminders_highlighting_rules_colorsElemID.name],
  }),
  reminders_standard_reminders_with_days: new PrimitiveType({
    elemID: reminders_standard_reminders_with_daysElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ALLOCATIONSCHEDULESDUE', 'BILLPAYMENTSTOAPPROVE', 'BILLSTOPAY', 'EMPLOYEESTOPAY', 'EMPLOYEESTOREVIEW', 'EMPLOYEESWITHEXPIRINGAUTHORIZATION', 'EMPLOYEESWITHEXPIRINGVISA', 'EMPLOYEESWITHUPCOMINGANNIVERSARY', 'EMPLOYEESWITHUPCOMINGBIRTHDAY', 'MEMORIZEDTRANSACTIONSDUE', 'OPPORTUNITIESTOCLOSE', 'OVERDUEADVANCEDJOBS', 'OVERDUECALLS', 'OVERDUEINVOICES', 'OVERDUESTANDARDJOBS', 'OVERDUETASKS', 'PERIODSTOCLOSE', 'SALESORDERSTOBILL', 'SALESORDERSTOPROCESSINVOICE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, reminders_standard_reminders_with_daysElemID.name],
  }),
  reminders_standard_reminders_without_days: new PrimitiveType({
    elemID: reminders_standard_reminders_without_daysElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['AMORTIZATIONENTRIESPENDING', 'ASSEMBLIESTOBUILD', 'ASSEMBLIESTOORDER', 'BILLSTOAPPROVE', 'BUNDLESTOUPDATE', 'CAMPAIGNSTOEMAIL', 'CAMPAIGNSTOPRINT', 'CASESTORESPOND', 'CHECKSTOPRINT', 'COMMISSIONSREJECTED', 'CREDITCARDSTOAPPROVE', 'CREDITMEMOSTOPRINT', 'CUSTOMERSTOBILL', 'CUSTOMERSTORENEW', 'DIRECTDEPOSITSRETURNED', 'DIRECTDEPOSITSTOAPPROVE', 'DIRECTDEPOSITSTOPRINT', 'DOMAINCONFIGALERTS', 'EFTSRETURNED', 'EFTSTOAPPROVE', 'EMPLOYEESWITHFAILEDDIRECTDEPOSIT', 'EMPLOYEESWITHPENDINGDIRECTDEPOSIT', 'ESTIMATESTOPRINT', 'EVENTSTORESPOND', 'EXPENSEPLANSONHOLD', 'EXPENSEREPORTSTOAPPROVE', 'IMPORTSTOPROCESS', 'INCOMPLETECALLS', 'INCOMPLETETASKS', 'INVOICESREJECTED', 'INVOICESTOAPPROVE', 'INVOICESTOAPPROVECREDITHOLD', 'INVOICESTOAPPROVEPAYMENTTERMS', 'INVOICESTOAPPROVEUNKNOWNTAX', 'INVOICESTOPRINT', 'ITEMSTOORDER', 'JOURNALSTOAPPROVE', 'JOURNALSTOAPPROVEBYYOU', 'MISSINGTIMESHEETS', 'MISSINGTIMESHEETSLM', 'PAYCHECKSTOPRINT', 'PAYMENTSTODEPOSIT', 'PAYROLLBATCHESTOCOMMIT', 'PAYROLLTRANSACTIONISSUESTOACKNOWLEDGE', 'PAYROLLUPDATESTOCOMMIT', 'PURCHASEORDERSRECEIPTPASTDUE', 'PURCHASEORDERSTOBILL', 'PURCHASEORDERSTOPRINT', 'PURCHASEORDERSTORECEIVE', 'PURCHASEREQUESTSTOAPPROVE', 'RECEIPTSTOPRINT', 'REJECTEDPURCHASEORDERS', 'REJECTEDVENDORRETURNS', 'REQUISITIONSTOAPPROVE', 'RESOURCEALLOCATIONSTOAPPROVE', 'RETURNAUTHNSTOPRINT', 'RETURNAUTHSREQUIRINGREVENUECOMMITMENTREVERSALS', 'RETURNAUTHSTOAPPROVE', 'RETURNAUTHSTORECEIVE', 'RETURNAUTHSTOREFUND', 'REVENUEARRANGEMENTSNOTCOMPLIANT', 'REVENUEARRANGEMENTSPENDINGAPPROVAL', 'REVRECENTRIESPENDING', 'REVRECPLANSONHOLD', 'SALESORDERSHIPMENTPASTDUE', 'SALESORDERSREQUIRINGREVENUECOMMITMENTS', 'SALESORDERSTOAPPROVE', 'SALESORDERSTOFULFULL', 'SALESORDERSTOPRINT', 'SALESORDERSTOPROCESS', 'SHIPMENTSTOPACK', 'SHIPMENTSTOSHIP', 'SOLUTIONSTOAPPROVE', 'SYSTEMALERTSTOACKNOWLEDGE', 'TASKSDUETODAY', 'TEAMMISSINGWEEKLYTIMESHEETS', 'TEAMMISSINGWEEKLYTIMESHEETSLASTMONTH', 'TIMEENTRIESTOAPPROVE', 'TIMERECORDSREJECTED', 'TIMERECORDSTOAPPROVE', 'TIMESHEETSTOAPPROVE', 'TRANSFERORDERRECEIPTPASTDUE', 'TRANSFERORDERSHIPMENTPASTDUE', 'TRANSFERORDERSTOAPPROVE', 'VENDORRETURNAUTHSTOAPPROVE', 'VENDORRETURNAUTHSTOREFUND', 'VENDORRETURNAUTHSTORETURN', 'WORKORDERBUILDPASTDUE', 'WORKORDERSTOBUILD', 'WORKORDERSTOCLOSE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, reminders_standard_reminders_without_daysElemID.name],
  }),
  report_date_range: new PrimitiveType({
    elemID: report_date_rangeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['FISCAL_HALF_BEFORE_LAST', 'FISCAL_HALF_BEFORE_LAST_TO_DATE', 'FISCAL_QUARTER_BEFORE_LAST', 'FISCAL_QUARTER_BEFORE_LAST_TO_DATE', 'FISCAL_YEAR_BEFORE_LAST', 'FISCAL_YEAR_BEFORE_LAST_TO_DATE', 'FIVE_DAYS_AGO', 'FIVE_DAYS_FROM_NOW', 'FOUR_DAYS_AGO', 'FOUR_DAYS_FROM_NOW', 'FOUR_WEEKS_STARTING_THIS_WEEK', 'LAST_BUSINESS_WEEK', 'LAST_FISCAL_HALF', 'LAST_FISCAL_HALF_ONE_FISCAL_YEAR_AGO', 'LAST_FISCAL_HALF_TO_DATE', 'LAST_FISCAL_QUARTER', 'LAST_FISCAL_QUARTER_ONE_FISCAL_YEAR_AGO', 'LAST_FISCAL_QUARTER_TO_DATE', 'LAST_FISCAL_QUARTER_TWO_FISCAL_YEARS_AGO', 'LAST_FISCAL_YEAR', 'LAST_FISCAL_YEAR_TO_DATE', 'LAST_MONTH', 'LAST_MONTH_ONE_FISCAL_QUARTER_AGO', 'LAST_MONTH_ONE_FISCAL_YEAR_AGO', 'LAST_MONTH_TO_DATE', 'LAST_MONTH_TWO_FISCAL_QUARTERS_AGO', 'LAST_MONTH_TWO_FISCAL_YEARS_AGO', 'LAST_ROLLING_HALF', 'LAST_ROLLING_QUARTER', 'LAST_ROLLING_YEAR', 'LAST_WEEK', 'LAST_WEEK_TO_DATE', 'LAST_YEAR', 'LAST_YEAR_TO_DATE', 'MONTH_AFTER_NEXT', 'MONTH_AFTER_NEXT_TO_DATE', 'MONTH_BEFORE_LAST', 'MONTH_BEFORE_LAST_TO_DATE', 'NEXT_BUSINESS_WEEK', 'NEXT_FISCAL_HALF', 'NEXT_FISCAL_QUARTER', 'NEXT_FISCAL_YEAR', 'NEXT_FOUR_WEEKS', 'NEXT_MONTH', 'NEXT_ONE_HALF', 'NEXT_ONE_MONTH', 'NEXT_ONE_QUARTER', 'NEXT_ONE_WEEK__7_ROLLING_DAYS', 'NEXT_ONE_YEAR', 'NEXT_WEEK', 'NINETY_DAYS_AGO', 'NINETY_DAYS_FROM_NOW', 'ONE_YEAR_BEFORE_LAST', 'PREVIOUS_FISCAL_QUARTERS_LAST_FISCAL_YEAR', 'PREVIOUS_FISCAL_QUARTERS_THIS_FISCAL_YEAR', 'PREVIOUS_MONTHS_LAST_FISCAL_HALF', 'PREVIOUS_MONTHS_LAST_FISCAL_QUARTER', 'PREVIOUS_MONTHS_LAST_FISCAL_YEAR', 'PREVIOUS_MONTHS_SAME_FISCAL_HALF_LAST_FISCAL_YEAR', 'PREVIOUS_MONTHS_SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR', 'PREVIOUS_MONTHS_THIS_FISCAL_HALF', 'PREVIOUS_MONTHS_THIS_FISCAL_QUARTER', 'PREVIOUS_MONTHS_THIS_FISCAL_YEAR', 'PREVIOUS_ONE_DAY', 'PREVIOUS_ONE_HALF', 'PREVIOUS_ONE_MONTH', 'PREVIOUS_ONE_QUARTER', 'PREVIOUS_ONE_WEEK', 'PREVIOUS_ONE_YEAR', 'PREVIOUS_ROLLING_HALF', 'PREVIOUS_ROLLING_QUARTER', 'PREVIOUS_ROLLING_YEAR', 'SAME_DAY_FISCAL_QUARTER_BEFORE_LAST', 'SAME_DAY_FISCAL_YEAR_BEFORE_LAST', 'SAME_DAY_LAST_FISCAL_QUARTER', 'SAME_DAY_LAST_FISCAL_YEAR', 'SAME_DAY_LAST_MONTH', 'SAME_DAY_LAST_WEEK', 'SAME_DAY_MONTH_BEFORE_LAST', 'SAME_DAY_WEEK_BEFORE_LAST', 'SAME_FISCAL_HALF_LAST_FISCAL_YEAR', 'SAME_FISCAL_HALF_LAST_FISCAL_YEAR_TO_DATE', 'SAME_FISCAL_QUARTER_FISCAL_YEAR_BEFORE_LAST', 'SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR', 'SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR_TO_DATE', 'SAME_MONTH_FISCAL_QUARTER_BEFORE_LAST', 'SAME_MONTH_FISCAL_YEAR_BEFORE_LAST', 'SAME_MONTH_LAST_FISCAL_QUARTER', 'SAME_MONTH_LAST_FISCAL_QUARTER_TO_DATE', 'SAME_MONTH_LAST_FISCAL_YEAR', 'SAME_MONTH_LAST_FISCAL_YEAR_TO_DATE', 'SAME_WEEK_FISCAL_YEAR_BEFORE_LAST', 'SAME_WEEK_LAST_FISCAL_YEAR', 'SIXTY_DAYS_AGO', 'SIXTY_DAYS_FROM_NOW', 'TEN_DAYS_AGO', 'TEN_DAYS_FROM_NOW', 'THIRTY_DAYS_AGO', 'THIRTY_DAYS_FROM_NOW', 'THIS_BUSINESS_WEEK', 'THIS_FISCAL_HALF', 'THIS_FISCAL_HALF_TO_DATE', 'THIS_FISCAL_QUARTER', 'THIS_FISCAL_QUARTER_TO_DATE', 'THIS_FISCAL_YEAR', 'THIS_FISCAL_YEAR_TO_DATE', 'THIS_MONTH', 'THIS_MONTH_TO_DATE', 'THIS_ROLLING_HALF', 'THIS_ROLLING_QUARTER', 'THIS_ROLLING_YEAR', 'THIS_WEEK', 'THIS_WEEK_TO_DATE', 'THIS_YEAR', 'THIS_YEAR_TO_DATE', 'THREE_DAYS_AGO', 'THREE_DAYS_FROM_NOW', 'THREE_FISCAL_QUARTERS_AGO', 'THREE_FISCAL_QUARTERS_AGO_TO_DATE', 'THREE_FISCAL_YEARS_AGO', 'THREE_FISCAL_YEARS_AGO_TO_DATE', 'THREE_MONTHS_AGO', 'THREE_MONTHS_AGO_TO_DATE', 'TODAY', 'TODAY_TO_END_OF_THIS_MONTH', 'TOMORROW', 'TWO_DAYS_AGO', 'TWO_DAYS_FROM_NOW', 'WEEK_AFTER_NEXT', 'WEEK_AFTER_NEXT_TO_DATE', 'WEEK_BEFORE_LAST', 'WEEK_BEFORE_LAST_TO_DATE', 'YESTERDAY'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, report_date_rangeElemID.name],
  }),
  report_period_range: new PrimitiveType({
    elemID: report_period_rangeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['FIRST_FISCAL_QUARTER_LAST_FY', 'FIRST_FISCAL_QUARTER_THIS_FY', 'FISCAL_QUARTER_BEFORE_LAST', 'FISCAL_YEAR_BEFORE_LAST', 'FOURTH_FISCAL_QUARTER_LAST_FY', 'FOURTH_FISCAL_QUARTER_THIS_FY', 'LAST_FISCAL_QUARTER', 'LAST_FISCAL_QUARTER_ONE_FISCAL_YEAR_AGO', 'LAST_FISCAL_QUARTER_TO_PERIOD', 'LAST_FISCAL_YEAR', 'LAST_FISCAL_YEAR_TO_PERIOD', 'LAST_PERIOD', 'LAST_PERIOD_ONE_FISCAL_QUARTER_AGO', 'LAST_PERIOD_ONE_FISCAL_YEAR_AGO', 'LAST_ROLLING_18_PERIODS', 'LAST_ROLLING_6_FISCAL_QUARTERS', 'PERIOD_BEFORE_LAST', 'SAME_FISCAL_QUARTER_LAST_FY', 'SAME_FISCAL_QUARTER_LAST_FY_TO_PERIOD', 'SAME_PERIOD_LAST_FISCAL_QUARTER', 'SAME_PERIOD_LAST_FY', 'SECOND_FISCAL_QUARTER_LAST_FY', 'SECOND_FISCAL_QUARTER_THIS_FY', 'THIRD_FISCAL_QUARTER_LAST_FY', 'THIRD_FISCAL_QUARTER_THIS_FY', 'THIS_FISCAL_QUARTER', 'THIS_FISCAL_QUARTER_TO_PERIOD', 'THIS_FISCAL_YEAR', 'THIS_FISCAL_YEAR_TO_PERIOD', 'THIS_PERIOD'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, report_period_rangeElemID.name],
  }),
  role_centertype: new PrimitiveType({
    elemID: role_centertypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCOUNTCENTER', 'BASIC', 'ENGINEERCENTER', 'EXECUTIVE', 'HR', 'MARKETCENTER', 'PARTNERCENTER', 'PROJECTCENTER', 'SALESCENTER', 'SHIPPINGCENTER', 'STOREMANAGER', 'SUPPORTCENTER', 'SYSADMINCENTER'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, role_centertypeElemID.name],
  }),
  role_fullrestrictions: new PrimitiveType({
    elemID: role_fullrestrictionsElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['DEFAULTTOOWN', 'NONE', 'OWNONLY', 'UNASSIGNED'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, role_fullrestrictionsElemID.name],
  }),
  role_restrict: new PrimitiveType({
    elemID: role_restrictElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['EDIT', 'VIEWANDEDIT'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, role_restrictElemID.name],
  }),
  role_restrictions: new PrimitiveType({
    elemID: role_restrictionsElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['DEFAULTTOOWN', 'OWNONLY', 'UNASSIGNED'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, role_restrictionsElemID.name],
  }),
  role_restrictionsegment: new PrimitiveType({
    elemID: role_restrictionsegmentElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CLASS', 'DEPARTMENT', 'LOCATION'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, role_restrictionsegmentElemID.name],
  }),
  rolesubsidiaryoption: new PrimitiveType({
    elemID: rolesubsidiaryoptionElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ALL', 'ALLACTIVE', 'OWN', 'SELECTED'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, rolesubsidiaryoptionElemID.name],
  }),
  script_deploymentmodel: new PrimitiveType({
    elemID: script_deploymentmodelElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['PLUGIN_TYPE_DEPLOYMENT_ALLOW_MULTIPLE', 'PLUGIN_TYPE_DEPLOYMENT_ALLOW_ONLY_ONE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, script_deploymentmodelElemID.name],
  }),
  script_eventtype: new PrimitiveType({
    elemID: script_eventtypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['APPROVE', 'CANCEL', 'CHANGEPASSWORD', 'COPY', 'CREATE', 'DELETE', 'DROPSHIP', 'EDIT', 'EDITFORECAST', 'EMAIL', 'GET', 'MARKCOMPLETE', 'ORDERITEMS', 'PACK', 'PAYBILLS', 'POST', 'PRINT', 'QUICKVIEW', 'REASSIGN', 'REJECT', 'SHIP', 'SPECIALORDER', 'TRANSFORM', 'VIEW', 'XEDIT'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, script_eventtypeElemID.name],
  }),
  script_frequency: new PrimitiveType({
    elemID: script_frequencyElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['DAY', 'MONTH', 'MWF', 'NONE', 'TTH', 'WEEK', 'WEEKDAY', 'WEEKEND', 'YEAR'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, script_frequencyElemID.name],
  }),
  script_loglevel: new PrimitiveType({
    elemID: script_loglevelElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['AUDIT', 'DEBUG', 'EMERGENCY', 'ERROR', 'INTERNAL', 'SYSTEM'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, script_loglevelElemID.name],
  }),
  script_portlettype: new PrimitiveType({
    elemID: script_portlettypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['FORM', 'HTML', 'LINKS', 'LIST'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, script_portlettypeElemID.name],
  }),
  script_recurrenceminutes: new PrimitiveType({
    elemID: script_recurrenceminutesElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['120', '15', '240', '30', '360', '480', '60', '720'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, script_recurrenceminutesElemID.name],
  }),
  script_returnrecordtype: new PrimitiveType({
    elemID: script_returnrecordtypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['-10', '-100', '-101', '-102', '-103', '-104', '-105', '-106', '-107', '-108', '-109', '-110', '-111', '-112', '-113', '-114', '-115', '-116', '-117', '-118', '-119', '-120', '-121', '-122', '-123', '-124', '-125', '-126', '-127', '-128', '-129', '-130', '-131', '-132', '-133', '-134', '-135', '-136', '-137', '-138', '-139', '-140', '-1403', '-1404', '-141', '-142', '-143', '-144', '-145', '-146', '-147', '-148', '-149', '-150', '-1500', '-1501', '-1502', '-1503', '-1504', '-151', '-152', '-153', '-154', '-155', '-1553', '-156', '-157', '-158', '-159', '-160', '-161', '-162', '-163', '-164', '-165', '-166', '-167', '-168', '-169', '-170', '-171', '-172', '-173', '-174', '-175', '-176', '-177', '-178', '-179', '-180', '-181', '-182', '-183', '-184', '-185', '-186', '-187', '-188', '-189', '-190', '-191', '-192', '-193', '-194', '-195', '-196', '-197', '-198', '-199', '-2', '-20', '-200', '-201', '-202', '-203', '-204', '-205', '-206', '-207', '-208', '-209', '-21', '-210', '-211', '-212', '-213', '-214', '-215', '-216', '-217', '-218', '-219', '-22', '-220', '-221', '-222', '-223', '-224', '-225', '-226', '-227', '-228', '-229', '-23', '-230', '-231', '-232', '-233', '-234', '-235', '-236', '-237', '-238', '-239', '-24', '-240', '-241', '-242', '-243', '-244', '-245', '-246', '-247', '-248', '-249', '-25', '-250', '-251', '-252', '-253', '-256', '-257', '-258', '-259', '-26', '-260', '-261', '-262', '-263', '-264', '-265', '-266', '-268', '-269', '-27', '-270', '-271', '-272', '-273', '-274', '-276', '-278', '-279', '-28', '-280', '-281', '-282', '-283', '-284', '-285', '-286', '-287', '-288', '-289', '-290', '-292', '-293', '-294', '-295', '-296', '-297', '-298', '-3', '-30', '-301', '-302', '-303', '-304', '-305', '-306', '-309', '-31', '-310', '-311', '-314', '-315', '-316', '-317', '-319', '-320', '-321', '-322', '-324', '-325', '-326', '-327', '-328', '-330', '-331', '-332', '-333', '-335', '-336', '-337', '-338', '-340', '-341', '-342', '-343', '-344', '-345', '-346', '-347', '-348', '-349', '-35', '-350', '-351', '-352', '-353', '-354', '-355', '-356', '-357', '-359', '-36', '-360', '-361', '-362', '-364', '-365', '-366', '-367', '-368', '-369', '-37', '-371', '-372', '-373', '-374', '-375', '-376', '-377', '-378', '-379', '-38', '-380', '-381', '-382', '-383', '-385', '-386', '-387', '-388', '-39', '-390', '-391', '-392', '-393', '-394', '-395', '-396', '-4', '-40', '-400', '-4006', '-4007', '-4009', '-401', '-4010', '-4011', '-4012', '-4014', '-4016', '-402', '-4021', '-4023', '-4024', '-4025', '-4027', '-4028', '-403', '-4032', '-4033', '-4034', '-4035', '-4036', '-404', '-405', '-406', '-407', '-408', '-409', '-41', '-410', '-4104', '-4105', '-4106', '-4108', '-4109', '-411', '-4110', '-4114', '-4115', '-412', '-413', '-414', '-417', '-418', '-419', '-420', '-422', '-423', '-424', '-425', '-426', '-427', '-428', '-430', '-431', '-432', '-434', '-435', '-436', '-437', '-438', '-440', '-441', '-450', '-451', '-452', '-460', '-461', '-494', '-495', '-496', '-497', '-5', '-500', '-505', '-506', '-507', '-508', '-513', '-514', '-517', '-520', '-522', '-523', '-524', '-528', '-530', '-531', '-532', '-533', '-535', '-537', '-538', '-539', '-540', '-543', '-544', '-546', '-547', '-548', '-549', '-550', '-551', '-552', '-553', '-554', '-555', '-556', '-557', '-558', '-559', '-560', '-561', '-562', '-565', '-6', '-696', '-7', '-710', '-711', '-712', '-714', '-715', '-716', '-717', '-718', '-719', '-720', '-8', '-856', '-861', '-862', '-863', '-864', '-865', '-867', '-868', '-869', '-896', '-897', '-898', '-899', '-9', '-900', '-901', '-902', '-903', '-904', '-905', '-906', '-907', '-908', '-909', '-910', '-911', '-913', '-914', '-970', '-997', '-998', '-999'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, script_returnrecordtypeElemID.name],
  }),
  script_scripttype: new PrimitiveType({
    elemID: script_scripttypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACTION', 'APPPKGINSTALL', 'BUNDLEINSTALLATION', 'CLIENT', 'CONSOLRATEADJUSTOR', 'CUSTOMGLLINES', 'EMAILCAPTURE', 'MASSUPDATE', 'PAYMENTGATEWAY', 'PLUGINTYPE', 'PLUGINTYPEIMPL', 'PORTLET', 'PROMOTIONS', 'RESTLET', 'SCHEDULED', 'SCRIPTLET', 'SHIPPINGPARTNERS', 'SPASERVERSCRIPT', 'TAXCALCULATION', 'TESTPLUGIN', 'USEREVENT', 'WEBAPP'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, script_scripttypeElemID.name],
  }),
  script_setting: new PrimitiveType({
    elemID: script_settingElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['COMPANY', 'PORTLET', 'USER'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, script_settingElemID.name],
  }),
  script_starttime: new PrimitiveType({
    elemID: script_starttimeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['0000', '0030', '0100', '0130', '0200', '0230', '0300', '0330', '0400', '0430', '0500', '0530', '0600', '0630', '0700', '0730', '0800', '0830', '0900', '0930', '1000', '1030', '1100', '1130', '1200', '1230', '1300', '1330', '1400', '1430', '1500', '1530', '1600', '1630', '1700', '1730', '1800', '1830', '1900', '1930', '2000', '2030', '2100', '2130', '2200', '2230', '2300', '2330'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, script_starttimeElemID.name],
  }),
  script_status: new PrimitiveType({
    elemID: script_statusElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['COMPLETED', 'INPROGRESS', 'INQUEUE', 'NOTSCHEDULED', 'RELEASED', 'SCHEDULED', 'TESTING'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, script_statusElemID.name],
  }),
  scriptdeployment_recordtype: new PrimitiveType({
    elemID: scriptdeployment_recordtypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCOUNT', 'ACCOUNTINGBOOK', 'ACCOUNTINGCONTEXT', 'ACCOUNTINGPERIOD', 'ADVINTERCOMPANYJOURNALENTRY', 'ALLOCATIONSCHEDULE', 'AMORTIZATIONSCHEDULE', 'AMORTIZATIONTEMPLATE', 'APPDEFINITION', 'APPPACKAGE', 'ASSEMBLYBUILD', 'ASSEMBLYITEM', 'ASSEMBLYUNBUILD', 'AUTOMATEDCLEARINGHOUSE', 'BALANCETRXBYSEGMENTS', 'BILLINGACCOUNT', 'BILLINGCLASS', 'BILLINGRATECARD', 'BILLINGREVENUEEVENT', 'BILLINGSCHEDULE', 'BIN', 'BINTRANSFER', 'BINWORKSHEET', 'BLANKETPURCHASEORDER', 'BOM', 'BOMREVISION', 'BONUS', 'BONUSTYPE', 'BUDGETEXCHANGERATE', 'BULKOWNERSHIPTRANSFER', 'BUNDLEINSTALLATIONSCRIPT', 'CALENDAREVENT', 'CAMPAIGN', 'CAMPAIGNRESPONSE', 'CAMPAIGNTEMPLATE', 'CARDHOLDERAUTHENTICATION', 'CASHREFUND', 'CASHSALE', 'CHARGE', 'CHARGERULE', 'CHECK', 'CLASSIFICATION', 'CLIENTSCRIPT', 'CMSCONTENT', 'CMSCONTENTTYPE', 'CMSPAGE', 'CMSPAGETYPE', 'COMMERCECATEGORY', 'COMMERCESEARCHBOOST', 'COMMERCESEARCHBOOSTTYPE', 'COMPETITOR', 'COMPONENTAREA', 'CONSOLIDATEDEXCHANGERATE', 'CONTACT', 'CONTACTCATEGORY', 'CONTACTROLE', 'COSTCATEGORY', 'COUPONCODE', 'CREDITCARDCHARGE', 'CREDITCARDREFUND', 'CREDITMEMO', 'CURRENCY', 'CUSTOMER', 'CUSTOMERCATEGORY', 'CUSTOMERDEPOSIT', 'CUSTOMERMESSAGE', 'CUSTOMERPAYMENT', 'CUSTOMERPAYMENTAUTHORIZATION', 'CUSTOMERREFUND', 'CUSTOMERSTATUS', 'CUSTOMERSUBSIDIARYRELATIONSHIP', 'DEPARTMENT', 'DEPOSIT', 'DEPOSITAPPLICATION', 'DESCRIPTIONITEM', 'DISCOUNTITEM', 'DOWNLOADITEM', 'DRIVERSLICENSE', 'EMAILTEMPLATE', 'EMPLOYEE', 'EMPLOYEECHANGEREQUEST', 'EMPLOYEECHANGEREQUESTTYPE', 'EMPLOYEESTATUS', 'EMPLOYEETYPE', 'ENTITYACCOUNTMAPPING', 'ESTIMATE', 'EXPENSEAMORTIZATIONEVENT', 'EXPENSECATEGORY', 'EXPENSEPLAN', 'EXPENSEREPORT', 'FAIRVALUEPRICE', 'FINANCIALINSTITUTION', 'FIXEDAMOUNTPROJECTREVENUERULE', 'FOLDER', 'FORMATPROFILE', 'FULFILLMENTREQUEST', 'GENERALTOKEN', 'GENERICRESOURCE', 'GIFTCERTIFICATE', 'GIFTCERTIFICATEITEM', 'GLNUMBERINGSEQUENCE', 'GLOBALACCOUNTMAPPING', 'GLOBALINVENTORYRELATIONSHIP', 'GOAL', 'GOVERNMENTISSUEDIDTYPE', 'HCMJOB', 'INBOUNDSHIPMENT', 'INTERCOMPALLOCATIONSCHEDULE', 'INTERCOMPANYJOURNALENTRY', 'INTERCOMPANYTRANSFERORDER', 'INVENTORYADJUSTMENT', 'INVENTORYCOSTREVALUATION', 'INVENTORYCOUNT', 'INVENTORYITEM', 'INVENTORYNUMBER', 'INVENTORYSTATUS', 'INVENTORYSTATUSCHANGE', 'INVENTORYTRANSFER', 'INVOICE', 'INVOICEGROUP', 'ISSUE', 'ISSUEPRODUCT', 'ISSUEPRODUCTVERSION', 'ITEMACCOUNTMAPPING', 'ITEMCOLLECTION', 'ITEMCOLLECTIONITEMMAP', 'ITEMDEMANDPLAN', 'ITEMFULFILLMENT', 'ITEMGROUP', 'ITEMLOCATIONCONFIGURATION', 'ITEMPROCESSFAMILY', 'ITEMPROCESSGROUP', 'ITEMRECEIPT', 'ITEMREVISION', 'ITEMSUPPLYPLAN', 'JOB', 'JOBREQUISITION', 'JOBSTATUS', 'JOBTYPE', 'JOURNALENTRY', 'KITITEM', 'KUDOS', 'LABORBASEDPROJECTREVENUERULE', 'LEAD', 'LOCATION', 'LOTNUMBEREDASSEMBLYITEM', 'LOTNUMBEREDINVENTORYITEM', 'MANUFACTURINGCOSTTEMPLATE', 'MANUFACTURINGOPERATIONTASK', 'MANUFACTURINGROUTING', 'MAPREDUCESCRIPT', 'MARKUPITEM', 'MASSUPDATESCRIPT', 'MEMDOC', 'MERCHANDISEHIERARCHYLEVEL', 'MERCHANDISEHIERARCHYNODE', 'MERCHANDISEHIERARCHYVERSION', 'MESSAGE', 'MFGPLANNEDTIME', 'NEXUS', 'NONINVENTORYITEM', 'NOTE', 'NOTETYPE', 'OPPORTUNITY', 'ORDERRESERVATION', 'ORDERTYPE', 'ORGANIZATIONVALUE', 'OTHERCHARGEITEM', 'OTHERGOVERNMENTISSUEDID', 'OTHERNAME', 'OTHERNAMECATEGORY', 'PARTNER', 'PARTNERCATEGORY', 'PASSPORT', 'PAYCHECK', 'PAYCHECKJOURNAL', 'PAYMENTCARD', 'PAYMENTCARDTOKEN', 'PAYMENTITEM', 'PAYMENTMETHOD', 'PAYROLLBATCH', 'PAYROLLBATCHADDEMPLOYEES', 'PAYROLLITEM', 'PCTCOMPLETEPROJECTREVENUERULE', 'PERFORMANCEMETRIC', 'PERFORMANCEREVIEW', 'PERFORMANCEREVIEWSCHEDULE', 'PERIODENDJOURNAL', 'PHONECALL', 'PICKSTRATEGY', 'PICKTASK', 'PLANNEDORDER', 'PLANNINGITEMCATEGORY', 'PLANNINGITEMGROUP', 'PLANNINGRULEGROUP', 'PORTLET', 'POSITION', 'PRICEBOOK', 'PRICELEVEL', 'PRICEPLAN', 'PRICINGGROUP', 'PROJECTEXPENSETYPE', 'PROJECTTASK', 'PROJECTTEMPLATE', 'PROMOTIONCODE', 'PROSPECT', 'PURCHASECONTRACT', 'PURCHASEORDER', 'PURCHASEREQUISITION', 'REALLOCATEITEM', 'RECEIVEINBOUNDSHIPMENT', 'RESOURCEALLOCATION', 'RESTLET', 'RETURNAUTHORIZATION', 'REVENUEARRANGEMENT', 'REVENUECOMMITMENT', 'REVENUECOMMITMENTREVERSAL', 'REVENUEPLAN', 'REVRECSCHEDULE', 'REVRECTEMPLATE', 'SALESCHANNEL', 'SALESORDER', 'SALESROLE', 'SALESTAXITEM', 'SCHEDULEDSCRIPT', 'SCHEDULEDSCRIPTINSTANCE', 'SERIALIZEDASSEMBLYITEM', 'SERIALIZEDINVENTORYITEM', 'SERVICEITEM', 'SHIPITEM', 'SHIPPINGPARTNERREGISTRATION', 'SOLUTION', 'STATISTICALJOURNALENTRY', 'STOREPICKUPFULFILLMENT', 'STUDENTRECORD', 'SUBSCRIPTION', 'SUBSCRIPTIONCHANGEORDER', 'SUBSCRIPTIONLINE', 'SUBSCRIPTIONPLAN', 'SUBSCRIPTIONTERM', 'SUBSIDIARY', 'SUBSIDIARYSETTINGS', 'SUBTOTALITEM', 'SUITELET', 'SUPPLYCHAINSNAPSHOT', 'SUPPLYCHAINSNAPSHOTSIMULATION', 'SUPPLYCHANGEORDER', 'SUPPLYPLANDEFINITION', 'SUPPORTCASE', 'TASK', 'TAXACCT', 'TAXGROUP', 'TAXPERIOD', 'TAXSCHEDULE', 'TAXTYPE', 'TERM', 'TERMINATIONREASON', 'TIMEBILL', 'TIMEOFFCHANGE', 'TIMEOFFPLAN', 'TIMEOFFREQUEST', 'TIMEOFFRULE', 'TIMEOFFTYPE', 'TIMESHEET', 'TOPIC', 'TRANSFERORDER', 'UNITSTYPE', 'UNLOCKEDTIMEPERIOD', 'USAGE', 'USEREVENTSCRIPT', 'VENDOR', 'VENDORBILL', 'VENDORCATEGORY', 'VENDORCREDIT', 'VENDORPAYMENT', 'VENDORPREPAYMENT', 'VENDORPREPAYMENTAPPLICATION', 'VENDORRETURNAUTHORIZATION', 'VENDORSUBSIDIARYRELATIONSHIP', 'WAVE', 'WBS', 'WEBSITE', 'WINLOSSREASON', 'WORKFLOWACTIONSCRIPT', 'WORKORDER', 'WORKORDERCLOSE', 'WORKORDERCOMPLETION', 'WORKORDERISSUE', 'WORKPLACE', 'ZONE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, scriptdeployment_recordtypeElemID.name],
  }),
  snapshot_type_custom: new PrimitiveType({
    elemID: snapshot_type_customElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CUSTOM', 'CUSTOM10', 'CUSTOM2', 'CUSTOM3', 'CUSTOM4', 'CUSTOM5', 'CUSTOM6', 'CUSTOM7', 'CUSTOM8', 'CUSTOM9'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, snapshot_type_customElemID.name],
  }),
  snapshot_type_date_range_comparable: new PrimitiveType({
    elemID: snapshot_type_date_range_comparableElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCTUPTIME', 'AGGREGATEDBOOKINGS', 'AVERAGEINVENTORY', 'BOOKINGS', 'BOOKINGSALT', 'CARTABANDON', 'CHECKOUTABANDON', 'CLOSEDCASES', 'CLOSEDISSUES', 'CURRENTLOGGEDINUSERS', 'CUSTOMERSWON', 'ECOMMISSIONS', 'ECOMMISSIONSPARTNER', 'EMPLOYEES', 'ESCALATEDCASES', 'ESTIMATES', 'ESTIMATESRANGE', 'ETECASEEOVERFIVE', 'ETECASEEOVERTWO', 'ETECASEVOVERFIVE', 'ETECASEVOVERTWO', 'ETECUSTEOVERFIVE', 'ETECUSTEOVERTWO', 'ETECUSTVOVERFIVE', 'ETECUSTVOVERTWO', 'ETESOEOVERFIVE', 'ETESOEOVERTWO', 'ETESOVOVERFIVE', 'ETESOVOVERTWO', 'FILLRATE', 'FORECAST', 'FORECASTASA', 'FORECASTOVERRIDE', 'FORECASTOVERRIDEASA', 'HOSTEDSITETRAFFIC', 'NEWBUSINESSORD', 'NEWBUSINESSORDALT', 'NEWCASES', 'NEWCUSTOMERSORD', 'NEWISSUES', 'NEWLEADS', 'NEWLEADSGROSS', 'NEWOPPORTUNITIES', 'NEWVISITORS', 'OPENCASES', 'OPENISSUES', 'OPPORTUNITIES', 'OPPORTUNITIESLOST', 'OPPORTUNITIESRANGE', 'OPPORTUNITIESWON', 'ORDERS', 'PAGETIMESOVERFIVE', 'PAGETIMESOVERTWO', 'PCOMMISSIONS', 'PCOMMISSIONSPARTNER', 'PIPELINE', 'PIPELINEASA', 'PIPELINEDEALS', 'PIPELINEWEIGHTED', 'PIPELINEWEIGHTEDASA', 'PROSPECTS', 'QUOTA', 'QUOTAASA', 'QUOTAREPS', 'RPAGETIMESOVERFIVE', 'RPAGETIMESOVERTWO', 'SITETRAFFIC', 'SPAGETIMESOVERFIVE', 'SPAGETIMESOVERTWO', 'TOTALBOOKINGS', 'TOTALORDERS', 'TOTALPIPEDEALS', 'TOTALPIPELINE', 'TOTALPIPELINEASA', 'TOTALPIPEWEIGHTED', 'TOTALPIPEWEIGHTEDASA', 'VISITORTRAFFIC', 'WEBORDERS', 'WEBREVENUE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, snapshot_type_date_range_comparableElemID.name],
  }),
  snapshot_type_date_range_not_comparable: new PrimitiveType({
    elemID: snapshot_type_date_range_not_comparableElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['COMMISSIONS', 'COMMISSIONSPARTNER'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, snapshot_type_date_range_not_comparableElemID.name],
  }),
  snapshot_type_period_range_comparable: new PrimitiveType({
    elemID: snapshot_type_period_range_comparableElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['BANKBAL', 'COGS', 'CREDITCARDBAL', 'DEFERREDREVENUE', 'EQUITY', 'EXPENSES', 'FIXEDASSET', 'INCOME', 'INTTURNOVRPERPERIOD', 'INVENTORY', 'LONGTERMLIAB', 'NETCASHFLOW', 'NEWBUSINESS', 'NEWCUSTOMERS', 'ONTIMERECEIPTS', 'ONTIMESHIPMENTS', 'OPERATINGEXPENSES', 'OPERCASHFLOW', 'OTHERASSET', 'OTHERCURRENTASSET', 'OTHERCURRENTLIAB', 'PAYABLES', 'PAYROLL', 'PROFIT', 'RECEIVABLES', 'REVENUE', 'SALES', 'SALESCASHBASIS'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, snapshot_type_period_range_comparableElemID.name],
  }),
  snapshot_type_period_range_not_comparable: new PrimitiveType({
    elemID: snapshot_type_period_range_not_comparableElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['UTILIZATION'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, snapshot_type_period_range_not_comparableElemID.name],
  }),
  snapshot_type_trendgraph: new PrimitiveType({
    elemID: snapshot_type_trendgraphElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCTUPTIME', 'AGGREGATEDBOOKINGS', 'AVERAGEINVENTORY', 'BANKBAL', 'BOOKINGS', 'BOOKINGSALT', 'CARTABANDON', 'CHECKOUTABANDON', 'CLOSEDCASES', 'CLOSEDISSUES', 'COGS', 'CREDITCARDBAL', 'CURRENTLOGGEDINUSERS', 'CUSTCONSOLAVGDL', 'CUSTCONSOLUNBLEDORDS', 'CUSTOMERAVGDAYSLATE', 'CUSTOMERAVGDAYSTOPAY', 'CUSTOMERRECEIVABLES', 'CUSTOMERSWON', 'CUSTUNBILLEDORDERS', 'DEFERREDREVENUE', 'ECOMMISSIONS', 'ECOMMISSIONSPARTNER', 'EMPLOYEES', 'EQUITY', 'ESCALATEDCASES', 'ESTIMATES', 'ESTIMATESRANGE', 'ETECASEEOVERFIVE', 'ETECASEEOVERTWO', 'ETECASEVOVERFIVE', 'ETECASEVOVERTWO', 'ETECUSTEOVERFIVE', 'ETECUSTEOVERTWO', 'ETECUSTVOVERFIVE', 'ETECUSTVOVERTWO', 'ETESOEOVERFIVE', 'ETESOEOVERTWO', 'ETESOVOVERFIVE', 'ETESOVOVERTWO', 'EXPENSES', 'FILLRATE', 'FIXEDASSET', 'FORECAST', 'FORECASTASA', 'FORECASTOVERRIDE', 'FORECASTOVERRIDEASA', 'HOSTEDSITETRAFFIC', 'INCOME', 'INTTURNOVRPERPERIOD', 'INVENTORY', 'JOBAMOUNTRECOGNIZED', 'JOBFORECASTCHARGES', 'JOBINCURREDCOSTS', 'LONGTERMLIAB', 'NETCASHFLOW', 'NEWBUSINESS', 'NEWBUSINESSORD', 'NEWBUSINESSORDALT', 'NEWCASES', 'NEWCUSTOMERS', 'NEWCUSTOMERSORD', 'NEWISSUES', 'NEWLEADS', 'NEWLEADSGROSS', 'NEWOPPORTUNITIES', 'NEWVISITORS', 'ONTIMERECEIPTS', 'ONTIMESHIPMENTS', 'OPENCASES', 'OPENISSUES', 'OPERATINGEXPENSES', 'OPERCASHFLOW', 'OPPORTUNITIES', 'OPPORTUNITIESLOST', 'OPPORTUNITIESRANGE', 'OPPORTUNITIESWON', 'ORDERS', 'OTHERASSET', 'OTHERCURRENTASSET', 'OTHERCURRENTLIAB', 'PAGETIMESOVERFIVE', 'PAGETIMESOVERTWO', 'PAYABLES', 'PAYROLL', 'PCOMMISSIONS', 'PCOMMISSIONSPARTNER', 'PIPELINE', 'PIPELINEASA', 'PIPELINEDEALS', 'PIPELINEWEIGHTED', 'PIPELINEWEIGHTEDASA', 'PROFIT', 'PROJECTHOURSWORKED', 'PROJECTINVOICED', 'PROJECTPROFITABILITY', 'PROSPECTS', 'PURCHASES', 'QUOTA', 'QUOTAASA', 'QUOTAREPS', 'RECEIVABLES', 'REVENUE', 'RPAGETIMESOVERFIVE', 'RPAGETIMESOVERTWO', 'SALES', 'SALESCASHBASIS', 'SITETRAFFIC', 'SPAGETIMESOVERFIVE', 'SPAGETIMESOVERTWO', 'TOTALBOOKINGS', 'TOTALORDERS', 'TOTALPIPEDEALS', 'TOTALPIPELINE', 'TOTALPIPELINEASA', 'TOTALPIPEWEIGHTED', 'TOTALPIPEWEIGHTEDASA', 'VENDORBALANCE', 'VENDOROPENPO', 'VISITORTRAFFIC', 'WEBORDERS', 'WEBREVENUE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, snapshot_type_trendgraphElemID.name],
  }),
  sublist_standard_fields: new PrimitiveType({
    elemID: sublist_standard_fieldsElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['STDBODYACCOUNT', 'STDBODYACCOUNTINGBOOK', 'STDBODYACCTCORPCARDEXP', 'STDBODYADJLOCATION', 'STDBODYADVANCEACCOUNT', 'STDBODYALACONFIGURATION', 'STDBODYAPACCT', 'STDBODYAPPROVALSTATUS', 'STDBODYARACCT', 'STDBODYASSEMBLYITEM', 'STDBODYBILLINGACCOUNT', 'STDBODYBILLINGSCHEDULE', 'STDBODYBUYINGREASON', 'STDBODYBUYINGTIMEFRAME', 'STDBODYCLASS', 'STDBODYCREATEDFROM', 'STDBODYCURRENCY', 'STDBODYCUSTOMER', 'STDBODYCUSTOMFORM', 'STDBODYDECISIONMAKER', 'STDBODYDEPARTMENT', 'STDBODYDEPOSIT', 'STDBODYDISCOUNTITEM', 'STDBODYDRACCOUNT', 'STDBODYEFFECTIVITYBASEDON', 'STDBODYEMPLOYEE', 'STDBODYENTITY', 'STDBODYENTITYEMPLOYEE', 'STDBODYENTITYSTATUS', 'STDBODYEXPENSEACCOUNT', 'STDBODYEXPENSEREPORTCURRENCY', 'STDBODYFORECASTTYPE', 'STDBODYFXACCOUNT', 'STDBODYINCOTERM', 'STDBODYITEM', 'STDBODYITEMFULFILLMENT', 'STDBODYJOB', 'STDBODYLEADSOURCE', 'STDBODYLOCATION', 'STDBODYNEXTAPPROVER', 'STDBODYOPPORTUNITY', 'STDBODYORDERSTATUS', 'STDBODYORDERTYPE', 'STDBODYPARENTEXPENSEALLOC', 'STDBODYPARTNER', 'STDBODYPAYMENTCUSTOMER', 'STDBODYPAYMENTMETHOD', 'STDBODYPAYROLLITEM', 'STDBODYPOSTINGPERIOD', 'STDBODYPROMOCODE', 'STDBODYPURCHASECONTRACT', 'STDBODYREVCOMMITSTATUS', 'STDBODYREVENUESTATUS', 'STDBODYREVERSALENTRY', 'STDBODYREVISION', 'STDBODYSALESORDER', 'STDBODYSALESREADINESS', 'STDBODYSALESREP', 'STDBODYSHIPADDRESSLIST', 'STDBODYSHIPCOUNTRY', 'STDBODYSHIPMETHOD', 'STDBODYSHIPPINGTAXCODE', 'STDBODYSHIPSTATUS', 'STDBODYSHIPTO', 'STDBODYSTATUS', 'STDBODYSUBSIDIARY', 'STDBODYTAXITEM', 'STDBODYTAXPERIOD', 'STDBODYTERMS', 'STDBODYTOLOCATION', 'STDBODYTOSUBSIDIARY', 'STDBODYTRANSFERLOCATION', 'STDBODYTRANSTATUS', 'STDBODYTRANTYPE', 'STDBODYVENDOR', 'STDBODYWINLOSSREASON', 'STDCOLACCOUNT', 'STDCOLBOMREVISIONCOMPONENT', 'STDCOLCALL', 'STDCOLCASE', 'STDCOLCASETASKEVENT', 'STDCOLCHARGE', 'STDCOLCLASS', 'STDCOLCREATEDFROM', 'STDCOLCUSTOMER', 'STDCOLDEPARTMENT', 'STDCOLEMPLOYEE', 'STDCOLENTITY', 'STDCOLEVENT', 'STDCOLITEM', 'STDCOLJOB', 'STDCOLLOCATION', 'STDCOLPROJECTTASK', 'STDCOLSUBSCRIPTION', 'STDCOLSUBSCRIPTIONLINE', 'STDCOLSUBSIDIARY', 'STDCOLTASK', 'STDCOLUNITS', 'STDENTITYACCESSROLE', 'STDENTITYAPPROVER', 'STDENTITYASSIGNEDWEBSITE', 'STDENTITYASSISTANT', 'STDENTITYBILLINGACCOUNT', 'STDENTITYBILLINGCLASS', 'STDENTITYBILLINGRATECARD', 'STDENTITYBILLINGSCHEDULE', 'STDENTITYBUYINGREASON', 'STDENTITYBUYINGTIMEFRAME', 'STDENTITYCAMPAIGNCATEGORY', 'STDENTITYCAMPAIGNEVENT', 'STDENTITYCLASS', 'STDENTITYCOMMISSIONPAYMENTPREFERENCE', 'STDENTITYCOMPANY', 'STDENTITYCONTACTCAMPAIGNEVENT', 'STDENTITYCONTACTSOURCE', 'STDENTITYCONTACTSOURCECAMPAIGNCATEGORY', 'STDENTITYCOUNTRY', 'STDENTITYCREDITHOLDOVERRIDE', 'STDENTITYCURRENCY', 'STDENTITYCUSTOMERCUSTOMFORM', 'STDENTITYCUSTTYPE', 'STDENTITYDEFAULTACCTCORPCARDEXP', 'STDENTITYDEFAULTEXPENSEREPORTCURRENCY', 'STDENTITYDEFAULTJOBRESOURCEROLE', 'STDENTITYDEPARTMENT', 'STDENTITYDRACCOUNT', 'STDENTITYEMAILPREFERENCE', 'STDENTITYEMPLOYEECHANGEREASON', 'STDENTITYEMPLOYEEHCMJOB', 'STDENTITYEMPLOYEESTATUS', 'STDENTITYEMPLOYEESTATUSCATEGORY', 'STDENTITYEMPLOYEETERMINATIONCATEGORY', 'STDENTITYEMPLOYEETERMINATIONREGRETTED', 'STDENTITYEMPTYPE', 'STDENTITYESTIMATEREVRECTEMPLATE', 'STDENTITYETHNICITY', 'STDENTITYEXPENSEACCOUNT', 'STDENTITYFXACCOUNT', 'STDENTITYGLOBALSUBSCRIPTIONSTATUS', 'STDENTITYINCOTERM', 'STDENTITYJOBBILLINGTYPE', 'STDENTITYJOBEMPLOYMENTCATEGORY', 'STDENTITYJOBITEM', 'STDENTITYJOBTYPE', 'STDENTITYLABORCATEGORY', 'STDENTITYLANGUAGE', 'STDENTITYLEADSOURCE', 'STDENTITYLOCATION', 'STDENTITYMARITALSTATUS', 'STDENTITYNEGATIVENUMBERFORMAT', 'STDENTITYNUMBERFORMAT', 'STDENTITYPARENT', 'STDENTITYPARENTPARTNER', 'STDENTITYPARTNER', 'STDENTITYPARTNERCUSTOMFORM', 'STDENTITYPAYABLESACCOUNT', 'STDENTITYPAYFREQUENCY', 'STDENTITYPREFCCPROCESSOR', 'STDENTITYPRICELEVEL', 'STDENTITYPROJECTEXPENSETYPE', 'STDENTITYPROJECTMANAGER', 'STDENTITYPURCHASEORDERAPPROVER', 'STDENTITYRECEIVABLESACCOUNT', 'STDENTITYRESIDENTSTATUS', 'STDENTITYSALESREADINESS', 'STDENTITYSALESREP', 'STDENTITYSALESROLE', 'STDENTITYSCHEDULINGMETHOD', 'STDENTITYSHIPPINGITEM', 'STDENTITYSOURCEWEBSITE', 'STDENTITYSTAGE', 'STDENTITYSTATE', 'STDENTITYSTATUS', 'STDENTITYSUBSIDIARY', 'STDENTITYSUPERVISOR', 'STDENTITYSYMBOLPLACEMENT', 'STDENTITYTAXITEM', 'STDENTITYTAXROUNDING', 'STDENTITYTERMINATIONREASON', 'STDENTITYTERMS', 'STDENTITYTERRITORY', 'STDENTITYTIMEAPPROVAL', 'STDENTITYTIMEAPPROVER', 'STDENTITYTIMEOFFPLAN', 'STDENTITYTYPE', 'STDENTITYVENDORCUSTOMFORM', 'STDENTITYVENDORTIMEAPPROVER', 'STDENTITYVENDTYPE', 'STDENTITYVISATYPE', 'STDENTITYWORKCALENDAR', 'STDENTITYWORKPLACE', 'STDEVENTALLOCATIONPROJECT', 'STDEVENTALLOCATIONPROJECTTASK', 'STDEVENTALLOCATIONTYPE', 'STDEVENTAPPROVALSTATUS', 'STDEVENTASSIGNED', 'STDEVENTAUDIENCE', 'STDEVENTCALLSTATUS', 'STDEVENTCAMPAIGNCATEGORY', 'STDEVENTCASECATEGORY', 'STDEVENTCASEPRIORITY', 'STDEVENTCASEPROFILE', 'STDEVENTCASESTATUS', 'STDEVENTCOMPANY', 'STDEVENTCONSTRAINTTYPE', 'STDEVENTCONTACT', 'STDEVENTCUSTOMER', 'STDEVENTCUSTOMFORM', 'STDEVENTDUPLICATEOF', 'STDEVENTFAMILY', 'STDEVENTHELPDESKEMPLOYEE', 'STDEVENTISSUE', 'STDEVENTISSUESTATUS', 'STDEVENTISSUETYPE', 'STDEVENTITEM', 'STDEVENTJOB', 'STDEVENTMILESTONE', 'STDEVENTMODULE', 'STDEVENTNEXTAPPROVER', 'STDEVENTOFFER', 'STDEVENTOPPORTUNITY', 'STDEVENTORDER', 'STDEVENTORGANIZER', 'STDEVENTORIGIN', 'STDEVENTOWNER', 'STDEVENTPARENT', 'STDEVENTPRIORITY', 'STDEVENTPRODUCT', 'STDEVENTPRODUCTTEAM', 'STDEVENTPROMOTIONCODE', 'STDEVENTREMINDERMINUTES', 'STDEVENTREMINDERTYPE', 'STDEVENTREPORTEDBY', 'STDEVENTREPRODUCE', 'STDEVENTREQUESTEDBY', 'STDEVENTRESOURCE', 'STDEVENTREVIEWER', 'STDEVENTSEARCHENGINE', 'STDEVENTSEVERITY', 'STDEVENTSOURCE', 'STDEVENTSTATUS', 'STDEVENTSUBSIDIARY', 'STDEVENTSUPPORTCASE', 'STDEVENTTASKSTATUS', 'STDEVENTTRANSACTION', 'STDEVENTVERTICAL', 'STDITEMACCOUNT', 'STDITEMAMORTIZATIONTEMPLATE', 'STDITEMASSETACCOUNT', 'STDITEMBILLEXCHRATEVARIANCEACCT', 'STDITEMBILLINGSCHEDULE', 'STDITEMBILLPRICEVARIANCEACCT', 'STDITEMBILLQTYVARIANCEACCT', 'STDITEMCLASS', 'STDITEMCOGSACCOUNT', 'STDITEMCOSTESTIMATETYPE', 'STDITEMCOSTINGMETHOD', 'STDITEMCREATEREVENUEPLANSON', 'STDITEMCURRENCY', 'STDITEMCUSTOMFORM', 'STDITEMCUSTRETURNVARIANCEACCOUNT', 'STDITEMDEFAULTRENEWALPLAN', 'STDITEMDEFAULTRENEWALTRANTYPE', 'STDITEMDEFERRALACCOUNT', 'STDITEMDEFERREDREVENUEACCOUNT', 'STDITEMDEPARTMENT', 'STDITEMDROPSHIPEXPENSEACCOUNT', 'STDITEMEFFECTIVEBOMCONTROL', 'STDITEMEXPENSEACCOUNT', 'STDITEMFRAUDRISK', 'STDITEMGAINLOSSACCOUNT', 'STDITEMINCOMEACCOUNT', 'STDITEMINITIALTERM', 'STDITEMISSUEPRODUCT', 'STDITEMITEMREVENUECATEGORY', 'STDITEMITEMTYPE', 'STDITEMLIABILITYACCOUNT', 'STDITEMLOCATION', 'STDITEMOUTOFSTOCKBEHAVIOR', 'STDITEMOVERALLQUANTITYPRICINGTYPE', 'STDITEMPARENT', 'STDITEMPAYMENTMETHOD', 'STDITEMPREFERREDLOCATION', 'STDITEMPRICINGGROUP', 'STDITEMPROCESSFAMILY', 'STDITEMPROCESSGROUP', 'STDITEMPROJECTEXPENSETYPE', 'STDITEMPROJECTTEMPLATE', 'STDITEMPURCHASEUNIT', 'STDITEMQUANTITYPRICINGSCHEDULE', 'STDITEMREVENUEALLOCATIONGROUP', 'STDITEMREVENUERECOGNITIONRULE', 'STDITEMREVRECSCHEDULE', 'STDITEMSALEUNIT', 'STDITEMSHIPPACKAGE', 'STDITEMSOFTDESCRIPTOR', 'STDITEMSTATE', 'STDITEMSTOCKUNIT', 'STDITEMSTOREITEMTEMPLATE', 'STDITEMTAXACCOUNT', 'STDITEMTAXAGENCY', 'STDITEMTAXSCHEDULE', 'STDITEMTAXTYPE', 'STDITEMUNBUILDVARIANCEACCOUNT', 'STDITEMUNITSTYPE', 'STDITEMVENDOR', 'STDITEMVENDRETURNVARIANCEACCOUNT', 'STDITEMVSOEDEFERRAL', 'STDITEMVSOEPERMITDISCOUNT', 'STDITEMVSOESOPGROUP', 'STDUSERCLASS', 'STDUSERDEPARTMENT', 'STDUSERLOCATION', 'STDUSERROLE', 'STDUSERSUBSIDIARY', 'STDUSERUSER'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, sublist_standard_fieldsElemID.name],
  }),
  suiteletdeployment_tasktype: new PrimitiveType({
    elemID: suiteletdeployment_tasktypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['SCRIPT'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, suiteletdeployment_tasktypeElemID.name],
  }),
  tfaduration: new PrimitiveType({
    elemID: tfadurationElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['0', '12', '120', '144', '168', '192', '216', '24', '240', '264', '288', '312', '336', '360', '384', '4', '408', '432', '456', '48', '480', '504', '528', '552', '576', '6', '600', '624', '648', '672', '696', '72', '720', '744', '8', '96'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, tfadurationElemID.name],
  }),
  tfarequired: new PrimitiveType({
    elemID: tfarequiredElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['OFF', 'SMS'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, tfarequiredElemID.name],
  }),
  transactionform_advancedtemplate: new PrimitiveType({
    elemID: transactionform_advancedtemplateElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['OLDSTDTMPLPACKINGSLIP', 'STDTMPLAUVENDPYMT', 'STDTMPLAUVOUCHERCHECK', 'STDTMPLBCUSTTRAN', 'STDTMPLBOM', 'STDTMPLCASHRFND', 'STDTMPLCASHRFNDST', 'STDTMPLCASHSALE', 'STDTMPLCASHSALEST', 'STDTMPLCHECK', 'STDTMPLCUSTCRED', 'STDTMPLCUSTCREDST', 'STDTMPLCUSTDEP', 'STDTMPLCUSTINVC', 'STDTMPLCUSTINVCST', 'STDTMPLCUSTPYMT', 'STDTMPLEMPTY', 'STDTMPLEXPREPT', 'STDTMPLFRPICKINGTICKET', 'STDTMPLGLIMPACT', 'STDTMPLHCUSTTRAN', 'STDTMPLINVCGROUP2ST', 'STDTMPLINVCGROUPST', 'STDTMPLITEMLABEL', 'STDTMPLJCUSTTRAN', 'STDTMPLJOURNAL', 'STDTMPLMAILINGLABEL', 'STDTMPLMULTICURRSTMT', 'STDTMPLPACKINGSLIP', 'STDTMPLPAYCHECK', 'STDTMPLPAYMENTVOUCHER', 'STDTMPLPCUSTTRAN', 'STDTMPLPERIODENDJOURNAL', 'STDTMPLPICKINGTICKET', 'STDTMPLPRICELIST', 'STDTMPLPURCHORD', 'STDTMPLPURCHORDST', 'STDTMPLQUOTE', 'STDTMPLQUOTEST', 'STDTMPLRTNAUTH', 'STDTMPLRTNAUTHST', 'STDTMPLSALESORD', 'STDTMPLSALESORDST', 'STDTMPLSCUSTTRAN', 'STDTMPLSHIPPINGLABEL', 'STDTMPLSTATEMENT', 'STDTMPLSVENDBILL', 'STDTMPLSVENDCRED', 'STDTMPLSVPREP', 'STDTMPLUKCHECK', 'STDTMPLUKVENDPYMT', 'STDTMPLUKVOUCHERCHECK', 'STDTMPLUSVENDPYMT', 'STDTMPLUSVOUCHERCHECK', 'STDTMPLWAVE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, transactionform_advancedtemplateElemID.name],
  }),
  transactionform_buttonid: new PrimitiveType({
    elemID: transactionform_buttonidElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCEPTPAYMENT', 'ACTIVITYHISTORY', 'APPROVE', 'AUTOFILL', 'BILL', 'BILLREMAINING', 'CANCELORDER', 'CLEARSPLITS', 'CLOSEREMAINING', 'CREATEAUTHORIZATION', 'CREATECASHSALE', 'CREATEDEPOSIT', 'CREATEINVOICE', 'CREATEPICKUP', 'CREATESALESORD', 'CREDIT', 'DELETE', 'EMAIL', 'ENTERPREPAYMENT', 'FAX', 'GLIMPACT', 'GOTOREGISTER', 'ITEM_ADDPROJECTITEMS', 'MAKECOPY', 'MAKESTANDALONECOPY', 'MEMORIZE', 'NEW', 'NEXTBILL', 'PRINT', 'PRINTGLIMPACT', 'PRINTLABEL', 'PRINTPICKTICK', 'PROCESS', 'RECEIVE', 'REFUND', 'REJECT', 'RENEWAL', 'REQUESTFULFILLMENT', 'RESETTER', 'RETURN', 'REVCOMM', 'REVCOMRV', 'SAVEEMAIL', 'SAVEPRINT', 'SUBMITACCEPTDEPOSIT', 'SUBMITACCEPTPAYMENTAUTHORIZATION', 'SUBMITFULFILL', 'SUBMITNEW', 'UPDATEREVREC', 'UPDATEVSOE', 'VIEWEXPENSEPLANS', 'VOID'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, transactionform_buttonidElemID.name],
  }),
  transactionform_checkboxdefault: new PrimitiveType({
    elemID: transactionform_checkboxdefaultElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CHECKED', 'UNCHECKED', 'USE_FIELD_DEFAULT'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, transactionform_checkboxdefaultElemID.name],
  }),
  transactionform_columnid: new PrimitiveType({
    elemID: transactionform_columnidElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCOUNT', 'ALLOCATIONALERT', 'ALTSALESAMT', 'AMOUNT', 'AMOUNTORDERED', 'AMOUNTRECOGNIZED', 'AMOUNTREMAINING', 'ASSEMBLY', 'ASSEMBLYUNITS', 'AVERAGECOST', 'BILLEDDATE', 'BILLINGSCHEDULE', 'BILLOFMATERIALS', 'BILLOFMATERIALSREVISION', 'BILLVARIANCESTATUS', 'BINNUMBERS', 'CATCHUPPERIOD', 'CATEGORY', 'CHARGERULE', 'CHARGES', 'CHARGETYPE', 'CLASS', 'COMMITINVENTORY', 'COMMITMENTFIRM', 'COSTESTIMATE', 'COSTESTIMATERATE', 'COSTESTIMATETYPE', 'CREATEDFROM', 'CREATEDFROM', 'CREATEEXPENSEPLANSON', 'CREATEOUTSOURCEDWO', 'CREATEPO', 'CREATEWO', 'CREDIT', 'CREDITTAX', 'CURRENTPERCENT', 'CUSTOMER', 'DATECOL', 'DAYSLATE', 'DEBIT', 'DEBITTAX', 'DEFERREVREC', 'DEPARTMENT', 'DESCRIPTION', 'DISCOUNT', 'DONOTCREATEREVENUEELEMENT', 'DUEDATE', 'ELIMINATE', 'EMPLOYEE', 'EMPLOYEEFULLNAME', 'ENDDATE', 'ENTITY', 'ESTGROSSPROFIT', 'ESTGROSSPROFITPERCENT', 'EVENT', 'EXCLUDEFROMPREDICTIVERISK', 'EXCLUDEFROMRATEREQUEST', 'EXPECTEDDELIVERYDATE', 'EXPECTEDRECEIPTDATE', 'EXPECTEDSHIPDATE', 'EXPENSEAMORTIZATIONRULE', 'EXPENSEPLAN', 'EXPENSEPLANSTATUS', 'FREEGIFTPROMOTION', 'FROMJOB', 'GENERATEACCRUALS', 'GIFTCERTFIELDS', 'GLNUMBER', 'GLSEQUENCE', 'GROSSAMT', 'INVENTORYDETAIL', 'INVENTORYLOCATION', 'INVENTORYSUBSIDIARY', 'ISBILLABLE', 'ISCLOSED', 'ISESTIMATE', 'ISTAXABLE', 'ITEM', 'ITEMFULFILLMENTCHOICE', 'JOB', 'LANDEDCOSTCATEGORY', 'LASTPURCHASEPRICE', 'LICENSECODE', 'LINETAXCODE', 'LINETAXRATE', 'LINKEDORDER', 'LOCATION', 'LOCATIONAUTOASSIGNED', 'MATCHBILLTORECEIPT', 'MEMO', 'NOAUTOASSIGNLOCATION', 'OPTIONS', 'ORDERALLOCATIONSTRATEGY', 'ORDERPRIORITY', 'PAYMENT', 'PERCENTCOMPLETE', 'PORATE', 'POVENDOR', 'PRICE', 'PRICEINTERVALFREQUENCYNAME', 'PRICEINTERVALREPEATEVERY', 'PROCESSEDBYREVCOMMIT', 'PRODUCTIONENDDATE', 'PRODUCTIONSTARTDATE', 'PROJECTTASK', 'PROMISEDATE', 'PURCHASECONTRACT', 'QUANTITY', 'QUANTITYALLOCATED', 'QUANTITYAVAILABLE', 'QUANTITYBACKORDERED', 'QUANTITYCOMMITTED', 'QUANTITYDEMANDALLOCATED', 'QUANTITYFULFILLED', 'QUANTITYONHAND', 'QUANTITYONSHIPMENTS', 'QUANTITYORDERED', 'QUANTITYRECEIVED', 'QUANTITYREMAINING', 'RATE', 'REQUESTEDDATE', 'REQUESTEDDELIVERYDATE', 'RESIDUAL', 'REVENUERECOGNITIONRULE', 'REVRECENDDATE', 'REVRECSCHEDULE', 'REVRECSTARTDATE', 'SCHEDULE', 'SCHEDULENUM', 'SECONDARYQUANTITY', 'SECONDARYUNITS', 'SERIALNUMBERS', 'SHIPADDRESS', 'SHIPCARRIER', 'SHIPMETHOD', 'SOURCEEXPENSEDOC', 'SOURCEREVENUEPLAN', 'STARTDATE', 'SUBNAME', 'SUBSCRIPTION', 'SUBSCRIPTIONLINE', 'SUBSCRIPTIONLINEPERIODAMOUNT', 'SUBSCRIPTIONLINERATE', 'SUBSIDIARY', 'TARGETLOCATION', 'TARGETSUBSIDIARY', 'TAX1AMT', 'TAXACCOUNT', 'TAXAMOUNT', 'TAXBASIS', 'TAXCODE', 'TAXRATE1', 'TAXRATE2', 'TERMINMONTHS', 'TERMS', 'TOBEFULFILLED', 'TOBERECEIVED', 'TOTALAMOUNT', 'UNITS', 'VSOEFIELDS'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, transactionform_columnidElemID.name],
  }),
  transactionform_fieldid: new PrimitiveType({
    elemID: transactionform_fieldidElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCOUNT', 'ACCOUNTINGBOOK', 'ACCOUNTNUMBER', 'ACTUALSHIPDATE', 'ADDRESS', 'AGING1', 'AGING2', 'AGING3', 'AGING4', 'AGING5', 'AGINGBAL', 'ALACONFIGURATION', 'ALTERNATIVEPICKUPCONTACT', 'AMOUNTPAID', 'AMOUNTREMAINING', 'APACCT', 'APPROVALSTATUS', 'APPROVED', 'ARACCT', 'ASOFDATE', 'AUTHCODE', 'AUTOAPPLY', 'AUTOMATICALLYAPPLYPROMOTIONS', 'AVAILABLEBALANCE', 'AVAILABLEVENDORCREDIT', 'BALANCE', 'BARCODE', 'BILLADDRESS', 'BILLADDRESSLIST', 'BILLINGACCOUNT', 'BILLINGSCHEDULE', 'BULKPROCSUBMISSION', 'CANHAVESTACKABLE', 'CARDDATAPROVIDED', 'CCAPPROVED', 'CCAVSSTREETMATCH', 'CCAVSZIPMATCH', 'CCDEFAULT', 'CCEXPIREDATE', 'CCISPURCHASECARDBIN', 'CCNAME', 'CCNUMBER', 'CCPROCESSASPURCHASECARD', 'CCSAVE', 'CCSECURITYCODE', 'CCSECURITYCODEMATCH', 'CCSTREET', 'CCZIPCODE', 'CHARGEIT', 'CHECKNUM', 'CHECKNUMBER', 'CLASS', 'COMPANYADDRESS', 'COMPANYFEDNUM', 'COMPANYLOGO', 'COMPANYNAME', 'COMPANYPHONE', 'COMPANYURL', 'CONSOLIDATEBALANCE', 'COUPONCODE', 'CREATEDFROM', 'CREDITCARD', 'CREDITCARDPROCESSOR', 'CREDITTOTAL', 'CURRENCY', 'CUSTOMER', 'CUSTOMERCODE', 'CUSTOMERPAYMENTAUTHORIZATION', 'CUSTOMFORM', 'DEBITTOTAL', 'DEFERREDREVENUE', 'DEPARTMENT', 'DISCOUNTAMOUNT', 'DISCOUNTDATE', 'DISCOUNTITEM', 'DISCOUNTRATE', 'DOCUMENTSEQUENCE', 'DRACCOUNT', 'DUEDATE', 'DYNAMICDESCRIPTOR', 'EMPLOYEE', 'ENDDATE', 'ENTITY', 'ENTITYSTATUS', 'ENTITYTAXREGNUM', 'ESTGROSSPROFIT', 'ESTGROSSPROFITPERCENT', 'EXCHANGERATE', 'EXCLUDECOMMISSION', 'EXCLUDEFROMGLNUMBERING', 'EXPECTEDCLOSEDATE', 'EXPENSEPLANSTATUS', 'FILE', 'FIRMED', 'FOB', 'FORECASTTYPE', 'FORINVOICEGROUPING', 'FORMTITLE', 'FXACCOUNT', 'GENERATETRANIDONSAVE', 'GETAUTH', 'GIFTCERT', 'GROUPEDTO', 'HANDLINGCOST', 'HANDLINGMODE', 'HANDLINGTAX1RATE', 'HANDLINGTAX2RATE', 'HANDLINGTAXAMOUNT', 'HANDLINGTAXCODE', 'IGNOREAVS', 'IGNORECSC', 'INCLUDEINFORECAST', 'INCOTERM', 'INPUTAUTHCODE', 'INPUTREFERENCECODE', 'INTERCOSTATUS', 'INTERCOTRANSACTION', 'IPADDRESS', 'IPADDRESSCOUNTRY', 'ISAOMAUTOMATED', 'ISCROSSSUBTRANSACTION', 'ISINTRANSITPAYMENT', 'ISMULTISHIPTO', 'ISRECURRINGPAYMENT', 'ISTAXABLE', 'JOB', 'LEADSOURCE', 'LOCATION', 'MEMO', 'MESSAGE', 'MESSAGESEL', 'MOSSCOUNTRY', 'MOSSCOUNTRYDETAIL', 'NEXTAPPROVER', 'NEXUS', 'OFFSETACCOUNT', 'ONETIME', 'OPPORTUNITY', 'ORDERFULFILLMENTCHOICE', 'ORDERSTATUS', 'ORDERTYPE', 'OTHERREFNUM', 'OUTOFBALANCEBY', 'OUTPUTAUTHCODE', 'OUTPUTREFERENCECODE', 'OVERRIDEINSTALLMENTS', 'PAGENUMBER', 'PARENTEXPENSEALLOC', 'PARTNER', 'PAYEEADDRESSLIST', 'PAYMENT', 'PAYMENTCARDCSC', 'PAYMENTMETHOD', 'PAYMENTOPERATION', 'PAYMENTOPTION', 'PAYMENTPROCESSINGPROFILE', 'PAYMENTSESSIONAMOUNT', 'PAYPALAUTHID', 'PAYPALORDERID', 'PAYPALSTATUS', 'PAYPALTRANID', 'PENDING', 'PNREFNUM', 'POSTINGPERIOD', 'PRINTVOUCHER', 'PROBABILITY', 'PROJECT', 'PROMOCODE', 'PURCHASECONTRACT', 'RECOGNIZEDREVENUE', 'RECURANNUALLY', 'RECURMONTHLY', 'RECURQUARTERLY', 'RECURRENCEFREQUENCY', 'RECURRINGBILL', 'RECURWEEKLY', 'REFUNDCHECK', 'REPEATEVERY', 'REPEATUNIT', 'REQUIREDDEPOSITAMOUNT', 'REVCOMMITSTATUS', 'REVENUESTATUS', 'REVERSALDATE', 'REVERSALDEFER', 'REVERSALENTRY', 'REVRECENDDATE', 'REVRECONREVCOMMITMENT', 'REVRECSCHEDULE', 'REVRECSTARTDATE', 'SALESCHANNEL', 'SALESEFFECTIVEDATE', 'SALESREP', 'SHIPADDRESS', 'SHIPADDRESSLIST', 'SHIPCARRIER', 'SHIPCOMPLETE', 'SHIPDATE', 'SHIPMETHOD', 'SHIPPINGCOST', 'SHIPPINGTAX1RATE', 'SHIPPINGTAX2RATE', 'SHIPPINGTAXAMOUNT', 'SHIPPINGTAXCODE', 'SHIPTO', 'SOFTDESCRIPTOR', 'SOURCE', 'STARTDATE', 'SUBSIDIARY', 'SUBSIDIARYTAXREGNUM', 'SUBTOTAL', 'SUPERVISORAPPROVAL', 'TAXDETAILSOVERRIDE', 'TAXITEM', 'TAXPOINTDATE', 'TAXPOINTDATEOVERRIDE', 'TAXRATE', 'TAXREGOVERRIDE', 'TAXTOTAL', 'TERMS', 'TITLE', 'TOBEEMAILED', 'TOBEFAXED', 'TOBEPRINTED', 'TOPRINT2', 'TOSUBSIDIARY', 'TOTAL', 'TOTALAFTERTAXES', 'TOTALCOSTESTIMATE', 'TRACKINGNUMBERS', 'TRANDATE', 'TRANID', 'TRANISVSOEBUNDLE', 'TRANSACTIONNUMBER', 'UNBILLEDORDERS', 'VATREGNUM', 'VISIBLETOCUSTOMER', 'VOIDJOURNAL', 'VSOEAUTOCALC'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, transactionform_fieldidElemID.name],
  }),
  transactionform_htmllayout: new PrimitiveType({
    elemID: transactionform_htmllayoutElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CLASSICHTMLBOMLAYOUT', 'CLASSICHTMLPACKINGSLIPLAYOUT', 'CLASSICHTMLPICKINGTICKETLAYOUT', 'CLASSICHTMLPRICELISTLAYOUT', 'CLASSICHTMLREMITTANCESLIPLAYOUT', 'CLASSICHTMLRETURNFORMLAYOUT', 'CLASSICHTMLSTATEMENTLAYOUT', 'CLASSICHTMLTRANSACTIONLAYOUT', 'STANDARDHTMLBOMLAYOUT', 'STANDARDHTMLPACKINGSLIPLAYOUT', 'STANDARDHTMLPICKINGTICKETLAYOUT', 'STANDARDHTMLPRICELISTLAYOUT', 'STANDARDHTMLREMITTANCESLIPLAYOUT', 'STANDARDHTMLRETURNFORMLAYOUT', 'STANDARDHTMLSTATEMENTLAYOUT', 'STANDARDHTMLTRANSACTIONLAYOUT'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, transactionform_htmllayoutElemID.name],
  }),
  transactionform_pdflayout: new PrimitiveType({
    elemID: transactionform_pdflayoutElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CLASSICBOMLAYOUT', 'CLASSICDISCLAIMERPRICELISTLAYOUT', 'CLASSICDISCLAIMERTRANSACTIONLAYOUT', 'CLASSICPACKINGSLIPLAYOUT', 'CLASSICPICKINGTICKETLAYOUT', 'CLASSICPRICELISTLAYOUT', 'CLASSICREMITTANCESLIPLAYOUT', 'CLASSICRETURNFORMLAYOUT', 'CLASSICSHIPPINGLABELLAYOUT', 'CLASSICTRANSACTIONLAYOUT', 'CLASSICTRANSACTIONLAYOUTLARGELOGO', 'CLASSICTRANSACTIONLAYOUTWBARCODE', 'FEDEXDISCLAIMERLAYOUT', 'STANDARDBOMLAYOUT', 'STANDARDDISCLAIMERPRICELISTLAYOUT', 'STANDARDDISCLAIMERTRANSACTIONLAYOUT', 'STANDARDPACKINGSLIPLAYOUT', 'STANDARDPICKINGTICKETLAYOUT', 'STANDARDPRICELISTLAYOUT', 'STANDARDREMITTANCESLIPLAYOUT', 'STANDARDRETURNFORMLAYOUT', 'STANDARDSHIPPINGLABELLAYOUT', 'STANDARDTRANSACTIONLAYOUT', 'TRANSACTIONLAYOUTWITHTAXSUMMARY'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, transactionform_pdflayoutElemID.name],
  }),
  transactionform_roleid: new PrimitiveType({
    elemID: transactionform_roleidElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCOUNTANT', 'ACCOUNTANT__REVIEWER', 'ADMINISTRATOR', 'ADVANCED_PARTNER_CENTER', 'AP_CLERK', 'AR_CLERK', 'BOOKKEEPER', 'BUYER', 'CEO', 'CEO_HANDS_OFF', 'CHIEF_PEOPLE_OFFICER_CPO', 'CONSULTANT', 'CUSTOMER_CENTER', 'CUSTOMROLE41', 'CUSTOMROLE42', 'CUSTOMROLE43', 'CUSTOMROLE56', 'DATA_WAREHOUSE_INTEGRATOR', 'DEVELOPER', 'EMPLOYEE_CENTER', 'ENGINEER', 'ENGINEERING_MANAGER', 'FULL_ACCESS', 'HUMAN_RESOURCES_ADMINISTRATOR', 'HUMAN_RESOURCES_GENERALIST', 'INTRANET_MANAGER', 'ISSUE_ADMINISTRATOR', 'MARKETING_ADMINISTRATOR', 'MARKETING_ASSISTANT', 'MARKETING_MANAGER', 'NETSUITE_SUPPORT_CENTER', 'NETSUITE_SUPPORT_CENTER__BASIC', 'ONLINE_FORM_USER', 'PARTNER_CENTER', 'PAYROLL_MANAGER', 'PAYROLL_SETUP', 'PM_MANAGER', 'PRODUCT_MANAGER', 'QA_ENGINEER', 'QA_MANAGER', 'RESOURCE_MANAGER', 'REVENUE_ACCOUNTANT', 'REVENUE_MANAGER', 'SALES_ADMINISTRATOR', 'SALES_MANAGER', 'SALES_PERSON', 'SALES_VICE_PRESIDENT', 'SHOPPER', 'STORE_MANAGER', 'SUITEAPPRELEASEMANAGER', 'SUPPORT_ADMINISTRATOR', 'SUPPORT_MANAGER', 'SUPPORT_PERSON', 'SYSTEM_ADMINISTRATOR', 'TAX_ENGINE', 'VENDOR_CENTER', 'WAREHOUSE_MANAGER'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, transactionform_roleidElemID.name],
  }),
  transactionform_standard: new PrimitiveType({
    elemID: transactionform_standardElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['STANDARDBILLPAYMENT', 'STANDARDCASHREFUND', 'STANDARDCASHSALE', 'STANDARDCUSTOMERPAYMENT', 'STANDARDDROPSHIPPURCHASEORDER', 'STANDARDESTIMATE', 'STANDARDFINANCECHARGE', 'STANDARDJOURNALENTRY', 'STANDARDONLINEORDERCASHSALE', 'STANDARDONLINEORDERINVOICE', 'STANDARDONLINEPAYMENT', 'STANDARDPRODUCTINVOICE', 'STANDARDPROFESSIONALINVOICE', 'STANDARDPROGRESSINVOICE', 'STANDARDPURCHASEORDER', 'STANDARDSALESORDER', 'STANDARDSALESORDERCASHSALE', 'STANDARDSALESORDERINVOICE', 'STANDARDSALESORDERPROGRESSBILLING', 'STANDARDSERVICEINVOICE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, transactionform_standardElemID.name],
  }),
  transactionform_sublistid: new PrimitiveType({
    elemID: transactionform_sublistidElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACTIVEWORKFLOWS', 'ACTIVITIES', 'APPLIEDRULES', 'APPROVALS', 'ARRNGRLRCDS', 'BILLINGSCHEDULE', 'BIZEVTHISTORY', 'CALLS', 'CASES', 'EVENTS', 'EXPCOST', 'EXPENSE', 'EXPENSEPLANMESSAGE', 'GIFTCERTREDEMPTION', 'GLIMPACTCHANGES', 'INSTALLMENTS', 'ITEM', 'ITEMCOST', 'ITPRLRCDS', 'LINKS', 'MEDIAITEM', 'MESSAGES', 'PARTNERS', 'PLANNEDORDERRLRCDS', 'PROMOTIONS', 'SALESTEAM', 'SYSTEMNOTES', 'TASKS', 'TIME', 'TRANSFORMATIONS', 'USERNOTES', 'WORKFLOWHISTORY'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, transactionform_sublistidElemID.name],
  }),
  transactionform_subtabid: new PrimitiveType({
    elemID: transactionform_subtabidElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['COVERAGE', 'TRANSACTIONOUTPUTOPTIONS', 'TRANSACTIONPAYMENT', 'WORKFLOW'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, transactionform_subtabidElemID.name],
  }),
  transactionform_tabid: new PrimitiveType({
    elemID: transactionform_tabidElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['APPLICATIONS', 'CHARGES', 'CUSTOM', 'GLIMPACTTAB', 'LINES', 'MILESTONES', 'MULTIBOOK', 'MULTIPARTNER', 'PAYEEADDRESS', 'PROMOTIONSTAB', 'STOREPICKUP', 'TAXES', 'TEAMSELLING', 'TRANSACTIONACCOUNTING', 'TRANSACTIONADDRESS', 'TRANSACTIONBILLING', 'TRANSACTIONCOMMUNICATION', 'TRANSACTIONITEMS', 'TRANSACTIONOUTPUTOPTIONS', 'TRANSACTIONPAYMENT', 'TRANSACTIONRELATEDRECORDS', 'TRANSACTIONRELATIONSHIPS', 'TRANSACTIONSHIPPING', 'TRANSACTIONSYSTEMINFORMATION', 'WORKFLOW'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, transactionform_tabidElemID.name],
  }),
  transactionform_totalboxid: new PrimitiveType({
    elemID: transactionform_totalboxidElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['AMOUNTREMAINING', 'SUBTOTAL', 'TOTAL'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, transactionform_totalboxidElemID.name],
  }),
  transactionform_trantype: new PrimitiveType({
    elemID: transactionform_trantypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ASSEMBLY_BUILD_ASSEMBLY_UNBUILD_TRANSACTION', 'BILL_BILL_CREDIT_TRANSACTION', 'BILL_PURCHASE_TYPE_CUSTOM_TRANSACTION_TRANSACTION', 'BILL_VENDOR_RETURN_AUTHORIZATION_TRANSACTION', 'CASH_SALE_CASH_REFUND_TRANSACTION', 'CASH_SALE_RETURN_AUTHORIZATION_TRANSACTION', 'CASH_SALE_SALES_TYPE_CUSTOM_TRANSACTION_TRANSACTION', 'CUSTOMER_DEPOSIT_CUSTOMER_REFUND_TRANSACTION', 'CUSTOMER_PAYMENT_AUTHORIZATION_CUSTOMER_DEPOSIT_TRANSACTION', 'CUSTOMER_PAYMENT_AUTHORIZATION_PAYMENT_TRANSACTION', 'ESTIMATE_CASH_SALE_TRANSACTION', 'ESTIMATE_INVOICE_TRANSACTION', 'ESTIMATE_SALES_ORDER_TRANSACTION', 'INVOICE_CREDIT_MEMO_TRANSACTION', 'INVOICE_ESTIMATE_TRANSACTION', 'INVOICE_RETURN_AUTHORIZATION_TRANSACTION', 'INVOICE_SALES_TYPE_CUSTOM_TRANSACTION_TRANSACTION', 'OPPORTUNITY_CASH_SALE_TRANSACTION', 'OPPORTUNITY_ESTIMATE_TRANSACTION', 'OPPORTUNITY_INVOICE_TRANSACTION', 'OPPORTUNITY_SALES_ORDER_TRANSACTION', 'PAYMENT_CUSTOMER_REFUND_TRANSACTION', 'PURCHASE_ORDER_BILL_TRANSACTION', 'PURCHASE_ORDER_ITEM_RECEIPT_TRANSACTION', 'PURCHASE_ORDER_OWNERSHIP_TRANSFER_TRANSACTION', 'PURCHASE_ORDER_PURCHASE_TYPE_CUSTOM_TRANSACTION_TRANSACTION', 'PURCHASE_ORDER_VENDOR_RETURN_AUTHORIZATION_TRANSACTION', 'PURCHASE_TYPE_CUSTOM_TRANSACTION_BILL_CREDIT_TRANSACTION', 'PURCHASE_TYPE_CUSTOM_TRANSACTION_BILL_PAYMENT_TRANSACTION', 'PURCHASE_TYPE_CUSTOM_TRANSACTION_BILL_TRANSACTION', 'PURCHASE_TYPE_CUSTOM_TRANSACTION_PURCHASE_TYPE_CUSTOM_TRANSACTION_TRANSACTION', 'RETURN_AUTHORIZATION_CASH_REFUND_TRANSACTION', 'RETURN_AUTHORIZATION_CREDIT_MEMO_TRANSACTION', 'RETURN_AUTHORIZATION_ITEM_RECEIPT_TRANSACTION', 'RETURN_AUTHORIZATION_REVENUE_COMMITMENT_REVERSAL_TRANSACTION', 'RETURN_AUTHORIZATION_SALES_TYPE_CUSTOM_TRANSACTION_TRANSACTION', 'SALES_ORDER_CASH_SALE_TRANSACTION', 'SALES_ORDER_FULFILLMENT_REQUEST_TRANSACTION', 'SALES_ORDER_INVOICE_PACKING_SLIP', 'SALES_ORDER_INVOICE_PICKING_TICKET', 'SALES_ORDER_INVOICE_TRANSACTION', 'SALES_ORDER_ITEM_FULFILLMENT_TRANSACTION', 'SALES_ORDER_PURCHASE_ORDER_DROP_SHIPMENT_TRANSACTION', 'SALES_ORDER_PURCHASE_ORDER_SPECIAL_ORDER_TRANSACTION', 'SALES_ORDER_RETURN_AUTHORIZATION_TRANSACTION', 'SALES_ORDER_REVENUE_COMMITMENT_TRANSACTION', 'SALES_ORDER_SALES_TYPE_CUSTOM_TRANSACTION_TRANSACTION', 'SALES_ORDER_STORE_PICKUP_FULFILLMENT_TRANSACTION', 'SALES_ORDER_WORK_ORDER_TRANSACTION', 'SALES_TYPE_CUSTOM_TRANSACTION_CASH_REFUND_TRANSACTION', 'SALES_TYPE_CUSTOM_TRANSACTION_CASH_SALE_TRANSACTION', 'SALES_TYPE_CUSTOM_TRANSACTION_CREDIT_MEMO_TRANSACTION', 'SALES_TYPE_CUSTOM_TRANSACTION_CUSTOMER_REFUND_TRANSACTION', 'SALES_TYPE_CUSTOM_TRANSACTION_INVOICE_TRANSACTION', 'SALES_TYPE_CUSTOM_TRANSACTION_PAYMENT_TRANSACTION', 'SALES_TYPE_CUSTOM_TRANSACTION_SALES_TYPE_CUSTOM_TRANSACTION_TRANSACTION', 'TRANSFER_ORDER_INVOICE_PACKING_SLIP', 'TRANSFER_ORDER_INVOICE_PICKING_TICKET', 'TRANSFER_ORDER_ITEM_FULFILLMENT_TRANSACTION', 'TRANSFER_ORDER_ITEM_RECEIPT_TRANSACTION', 'VENDOR_PREPAYMENT_VENDOR_PREPAYMENT_APPLICATION_TRANSACTION', 'VENDOR_RETURN_AUTHORIZATION_BILL_CREDIT_TRANSACTION', 'VENDOR_RETURN_AUTHORIZATION_INVOICE_PACKING_SLIP', 'VENDOR_RETURN_AUTHORIZATION_ITEM_FULFILLMENT_TRANSACTION', 'VENDOR_RETURN_AUTHORIZATION_PURCHASE_TYPE_CUSTOM_TRANSACTION_TRANSACTION', 'WORK_ORDER_ASSEMBLY_BUILD_TRANSACTION', 'WORK_ORDER_WORK_ORDER_BILL_OF_MATERIALS', 'WORK_ORDER_WORK_ORDER_CLOSE_TRANSACTION', 'WORK_ORDER_WORK_ORDER_COMPLETION_TRANSACTION', 'WORK_ORDER_WORK_ORDER_ISSUE_TRANSACTION'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, transactionform_trantypeElemID.name],
  }),
  translationcollection_defaultlanguage: new PrimitiveType({
    elemID: translationcollection_defaultlanguageElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['af-ZA', 'ar', 'bg-BG', 'bn-BD', 'bs-BA', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en', 'en-AU', 'en-CA', 'en-GB', 'en-US', 'es-AR', 'es-ES', 'et-EE', 'fa-IR', 'fi-FI', 'fr-CA', 'fr-FR', 'gu-IN', 'he-IL', 'hi-IN', 'hr-HR', 'hu-HU', 'hy-AM', 'id-ID', 'is-IS', 'it-IT', 'ja-JP', 'kn-IN', 'ko-KR', 'lb-LU', 'lt-LT', 'lv-LV', 'mr-IN', 'ms-MY', 'nl-NL', 'no-NO', 'pa-IN', 'pl-PL', 'pt-BR', 'pt-PT', 'ro-RO', 'ru-RU', 'sh-RS', 'sk-SK', 'sl-SI', 'sq-AL', 'sr-RS', 'sv-SE', 'ta-IN', 'te-IN', 'th-TH', 'tl-PH', 'tr-TR', 'uk-UA', 'vi-VN', 'zh-CN', 'zh-TW'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, translationcollection_defaultlanguageElemID.name],
  }),
  webapp_entrytype: new PrimitiveType({
    elemID: webapp_entrytypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['CART', 'CHECKOUT', 'CUSTCENTER', 'HOMEPAGE', 'LOGIN', 'LOGOUT', 'REGISTER'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, webapp_entrytypeElemID.name],
  }),
  workflow_condition_type: new PrimitiveType({
    elemID: workflow_condition_typeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['FORMULA', 'VISUAL_BUILDER'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, workflow_condition_typeElemID.name],
  }),
  workflow_eventtype: new PrimitiveType({
    elemID: workflow_eventtypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['APPROVE', 'CANCEL', 'CHANGEPASSWORD', 'COPY', 'CREATE', 'DELETE', 'DROPSHIP', 'EDIT', 'EDITFORECAST', 'EMAIL', 'GET', 'MARKCOMPLETE', 'ORDERITEMS', 'PACK', 'PAYBILLS', 'POST', 'PRINT', 'QUICKVIEW', 'REASSIGN', 'REJECT', 'SHIP', 'SPECIALORDER', 'TRANSFORM', 'VIEW', 'XEDIT'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, workflow_eventtypeElemID.name],
  }),
  workflow_keephistory: new PrimitiveType({
    elemID: workflow_keephistoryElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ALWAYS', 'F', 'NEVER', 'ONLYWHENTESTING', 'T'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, workflow_keephistoryElemID.name],
  }),
  workflow_order_of_week: new PrimitiveType({
    elemID: workflow_order_of_weekElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['FIRST', 'FOURTH', 'LAST', 'SECOND', 'THIRD'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, workflow_order_of_weekElemID.name],
  }),
  workflow_releasestatus: new PrimitiveType({
    elemID: workflow_releasestatusElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['NOTINITIATING', 'NOTRUNNING', 'RELEASED', 'SUSPENDED', 'TESTING'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, workflow_releasestatusElemID.name],
  }),
  workflow_sublists: new PrimitiveType({
    elemID: workflow_sublistsElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['EXPENSEREPORT:EXPENSE', 'ITEM'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, workflow_sublistsElemID.name],
  }),
  workflow_timeunit: new PrimitiveType({
    elemID: workflow_timeunitElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['DAY', 'HOUR'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, workflow_timeunitElemID.name],
  }),
  workflow_triggertype: new PrimitiveType({
    elemID: workflow_triggertypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['AFTERSUBMIT', 'BEFORELOAD', 'BEFORESUBMIT'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, workflow_triggertypeElemID.name],
  }),
  workflowaction_attachmenttype: new PrimitiveType({
    elemID: workflowaction_attachmenttypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['FIELD', 'SPECIFIC'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, workflowaction_attachmenttypeElemID.name],
  }),
  workflowaction_buttonid: new PrimitiveType({
    elemID: workflowaction_buttonidElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ACCEPT', 'ACCEPTPAYMENT', 'ACTIVATE', 'ACTIVITYHISTORY', 'ADDMATRIX', 'APPLY', 'APPROVE', 'APPROVEALLPENDING', 'APPROVERETURN', 'AUTOFILL', 'BILL', 'BILLREMAINING', 'CANCEL', 'CANCELBILL', 'CANCELFULFILLMENT', 'CANCELORDER', 'CANCELREQUEST', 'CANCELRETURN', 'CAPTUREBYDEPOSIT', 'CAPTUREBYPAYMENT', 'CHANGECUSTOMER', 'CLEARREVISIONS', 'CLEARSPLITS', 'CLOSEREMAINING', 'COMPLETECOUNT', 'CONVERTINVT', 'CONVERTLEAD', 'CONVERTLOT', 'CONVERTSERIAL', 'COPY', 'COPYTIMESHEET', 'CREATEAUTHORIZATION', 'CREATEBUILD', 'CREATECASHSALE', 'CREATEDEPOSIT', 'CREATEINVOICE', 'CREATEMATRIX', 'CREATENEWVERSION', 'CREATEPICKUP', 'CREATEPO', 'CREATEPROJECT', 'CREATESALESORD', 'CREATEUNBUILD', 'CREATE_EMPLOYEE_CHANGE_REQUEST', 'CREDIT', 'DECLINE', 'DELETE', 'DELETELASTVERSION', 'DEPOSITSUMMARY', 'EDIT_CHANGE_REASON', 'EMAIL', 'ENTERCOMPLETION', 'ENTERCOMPLETIONWITHBACKFLUSH', 'ENTERPREPAYMENT', 'FAX', 'FULFILL', 'GENERATEPRICELIST', 'GENERATESTATEMENT', 'GLIMPACT', 'GOTOREGISTER', 'GRAB', 'IMPORTPLANNEDTIME', 'ISSUECOMPONENTS', 'ITEM_ADDPROJECTITEMS', 'LAUNCH', 'MAKECOPY', 'MAKECOPYWITHOUTPRICINGTIERS', 'MAKECOPYWITHOUTSCHEDULES', 'MAKESTANDALONECOPY', 'MARKASPOSTED', 'MARKINPROGRESS', 'MARKPACKED', 'MARKPICKEDUP', 'MEMORIZE', 'MERGE', 'MODIFY_PRICING', 'NEW', 'NEWEVENTFIELD', 'NEXT', 'NEXTBILL', 'NEXTVERSION', 'PAYMENT', 'PREV', 'PREVIOUSVERSION', 'PRINT', 'PRINTBOM', 'PRINTETDCOPY', 'PRINTGLIMPACT', 'PRINTITEMLABELS', 'PRINTLABEL', 'PRINTPICKTICK', 'PROCESS', 'QUICKACCEPT', 'REACTIVATE', 'RECALC', 'RECALCULATEACCOUNTINGDATA', 'RECALCULATEPROJECTPLAN', 'RECEIVE', 'REFUND', 'REJECT', 'REJECTALLPENDING', 'REJECTALLPENDINGWITHNOTE', 'REJECTREQUEST', 'REJECTWITHNOTE', 'REMOVEMATRIXOPTIONS', 'RENEW', 'RENEWAL', 'REQUESTFULFILLMENT', 'RESETTER', 'RETRACT', 'RETURN', 'REVCOMM', 'REVCOMRV', 'SAVE', 'SAVEANDPRINTLABEL', 'SAVEBASELINE', 'SAVEEMAIL', 'SAVEPRINT', 'SAVEPRINTBOM', 'SAVESUBMIT', 'SEARCH', 'SELECT_EFFECTIVE_DATE', 'STARTCOUNT', 'SUBMITACCEPTDEPOSIT', 'SUBMITACCEPTPAYMENTAUTHORIZATION', 'SUBMITAS', 'SUBMITBILL', 'SUBMITCOPY', 'SUBMITEDIT', 'SUBMITFULFILL', 'SUBMITINV', 'SUBMITNEW', 'SUBMITNEXT', 'SUBMITREFUND', 'SUBMITSAME', 'SUSPEND', 'TENTATIVE', 'TERMINATE', 'TERMINATE_EMPLOYEE', 'UNLOCKTIMEPERIOD', 'UPDATEMATRIX', 'UPDATEPROJECTMEASURES', 'UPDATEREVENUEPLAN', 'UPDATEREVREC', 'UPDATEVSOE', 'VIEWALLTRANSACTIONS', 'VIEWEXPENSEPLANS', 'VIEWREVENUEPLANS', 'VIEW_EMPLOYEE_TIMELINE', 'VOID', 'W4DATA'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, workflowaction_buttonidElemID.name],
  }),
  workflowaction_createline_position: new PrimitiveType({
    elemID: workflowaction_createline_positionElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['AFTERLASTLINE', 'BEFOREFIRSTLINE'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, workflowaction_createline_positionElemID.name],
  }),
  workflowaction_displaytype: new PrimitiveType({
    elemID: workflowaction_displaytypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['DISABLED', 'HIDDEN', 'INLINE', 'NORMAL'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, workflowaction_displaytypeElemID.name],
  }),
  workflowaction_eventtype: new PrimitiveType({
    elemID: workflowaction_eventtypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['APPROVE', 'CANCEL', 'COPY', 'CREATE', 'DELETE', 'DROPSHIP', 'EDIT', 'EDITFORECAST', 'EMAIL', 'MARKCOMPLETE', 'ORDERITEMS', 'PACK', 'PAYBILLS', 'PRINT', 'REASSIGN', 'REJECT', 'SHIP', 'SPECIALORDER', 'VIEW', 'XEDIT'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, workflowaction_eventtypeElemID.name],
  }),
  workflowaction_radioschedulemode: new PrimitiveType({
    elemID: workflowaction_radioschedulemodeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['DELAY', 'TIMEOFDAY'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, workflowaction_radioschedulemodeElemID.name],
  }),
  workflowaction_recipienttype: new PrimitiveType({
    elemID: workflowaction_recipienttypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['ADDRESS', 'CURRENTRECORD', 'FIELD', 'SPECIFIC'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, workflowaction_recipienttypeElemID.name],
  }),
  workflowaction_sendertype: new PrimitiveType({
    elemID: workflowaction_sendertypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['FIELD', 'SPECIFIC'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, workflowaction_sendertypeElemID.name],
  }),
  workflowaction_transtatementtype: new PrimitiveType({
    elemID: workflowaction_transtatementtypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['DEFAULT', 'HTML', 'INLINEABOVE', 'INLINEBELOW', 'PDF'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, workflowaction_transtatementtypeElemID.name],
  }),
  workflowaction_triggertype: new PrimitiveType({
    elemID: workflowaction_triggertypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['AFTERFIELDEDIT', 'AFTERFIELDSOURCING', 'AFTERSUBMIT', 'BEFOREFIELDEDIT', 'BEFORELOAD', 'BEFORESUBMIT', 'BEFOREUSEREDIT', 'BEFOREUSERSUBMIT', 'ONENTRY', 'ONEXIT', 'SCHEDULED'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, workflowaction_triggertypeElemID.name],
  }),
  workflowaction_triggertype_client: new PrimitiveType({
    elemID: workflowaction_triggertype_clientElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['AFTERFIELDEDIT', 'AFTERFIELDSOURCING', 'BEFOREFIELDEDIT'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, workflowaction_triggertype_clientElemID.name],
  }),
  workflowaction_valuedate: new PrimitiveType({
    elemID: workflowaction_valuedateElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['DAGO10', 'DAGO2', 'DAGO3', 'DAGO30', 'DAGO4', 'DAGO5', 'DAGO60', 'DAGO90', 'DFN10', 'DFN2', 'DFN3', 'DFN30', 'DFN4', 'DFN5', 'DFN60', 'DFN90', 'FHBL', 'FQB', 'FQBL', 'FQBLTD', 'FQBTD', 'FYB', 'FYBL', 'FYBLTD', 'FYBTD', 'LBW', 'LFH', 'LFHLFY', 'LFHTD', 'LFQ', 'LFQFYBL', 'LFQLFY', 'LFQTD', 'LFY', 'LFYTD', 'LM', 'LMFQBL', 'LMFYBL', 'LMLFQ', 'LMLFY', 'LMTD', 'LW', 'LWTD', 'LY', 'LYTD', 'MAN', 'MANTD', 'MB', 'MBL', 'MBLTD', 'MBTD', 'N4W', 'NBW', 'NFH', 'NFQ', 'NFY', 'NM', 'NOH', 'NOM', 'NOQ', 'NOW', 'NOY', 'NW', 'SDFQBL', 'SDFYBL', 'SDLFQ', 'SDLFY', 'SDLM', 'SDLW', 'SDMBL', 'SDWBL', 'SFHLFY', 'SFQFYBL', 'SFQLFY', 'SMFQBL', 'SMFYBL', 'SMLFQ', 'SMLFY', 'SOFHBL', 'SOFQBL', 'SOFYBL', 'SOLBW', 'SOLFH', 'SOLFHLFY', 'SOLFQ', 'SOLFQLFY', 'SOLFY', 'SOLM', 'SOLMLFQ', 'SOLMLFY', 'SOLRH', 'SOLRQ', 'SOLRY', 'SOLW', 'SOMBL', 'SONBW', 'SONFH', 'SONFQ', 'SONFY', 'SONM', 'SONW', 'SOPRH', 'SOPRQ', 'SOPRY', 'SOSFHLFY', 'SOSFQLFY', 'SOSMLFQ', 'SOSMLFY', 'SOTBW', 'SOTFH', 'SOTFQ', 'SOTFY', 'SOTM', 'SOTW', 'SOTY', 'SOWBL', 'SWFYBL', 'SWLFY', 'TBW', 'TFH', 'TFQ', 'TFY', 'TM', 'TODAY', 'TOMORROW', 'TRH', 'TRQ', 'TRY', 'TW', 'TWN3W', 'TY', 'WAN', 'WANTD', 'WBL', 'WBLTD', 'YESTERDAY'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, workflowaction_valuedateElemID.name],
  }),
  workflowaction_valuetype: new PrimitiveType({
    elemID: workflowaction_valuetypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['DATE', 'FIELD', 'FORMULA', 'STATIC'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, workflowaction_valuetypeElemID.name],
  }),
  workflowtransition_triggertype: new PrimitiveType({
    elemID: workflowtransition_triggertypeElemID,
    primitive: PrimitiveTypes.STRING,
    annotations: {
      [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({
        values: ['AFTERSUBMIT', 'BEFORELOAD', 'BEFORESUBMIT', 'ONENTRY', 'SCHEDULED'],
        enforce_value: false,
      }),
    },
    path: [...enumsFolderPath, workflowtransition_triggertypeElemID.name],
  }),
}
