/**
 * JSON Object containing reference to the subdirectory for path based navigation within specific layouts
 *  Paths represent individual persona based stories.
 */
export const LAYOUTS = [
      {NAME: 'RETAIL_INTERNAL', NAVPATH: "/internal/", STYLEPATH:"internal", USERNAME:'Alan Smith', HEADER: "",SIDEBAR:""},
      {NAME: 'RETAIL_EXTERNAL', NAVPATH: "/external/", STYLEPATH:"external",  USERNAME:'Alan Smith', HEADER: "",SIDEBAR:""},
      {NAME: 'FS_BASIC', NAVPATH: "/fsbasic", STYLEPATH:"internal", PRODUCT:'Asset Management System', USERNAME:'Brian Moody', AVATAR:'67',TITLE:'Regional Manager',
          NAVMENU:[
              {text:'Alerts',navpath:'/fsbasic',glyph:'warning-sign'},
              {text:'Market Analysis',navpath:'/fsbasic/markets',glyph:'user'},
              {text:'Trends',navpath:'/fsbasic/trends',glyph:'th-large'}
          ]},
      {NAME: 'FS_PREM', NAVPATH: "/fsprem", STYLEPATH:"external", PRODUCT:'Asset Management System', USERNAME:'Alan Smith', AVATAR:'21',  TITLE:'Regional Manager',
          NAVMENU:[
              {text:'Alerts',navpath:'/fsprem/',glyph:'warning-sign'},
              {text:'KPIS',navpath:'/fsprem/kpi',glyph:'usd'},
              {text:'Market Analysis',navpath:'/fsprem/markets',glyph:'user'},
              {text:'Trends',navpath:'/fsprem/trends',glyph:'th-large'},
              {text:'Analyze',navpath:'/fsprem/analyze',glyph:'eye-open'}
      ]}
];

