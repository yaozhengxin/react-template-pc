const ENV = window.__ENV__

let BOSE_BASE_HOST = {
  DEV: '//istslb01.eastasia.cloudapp.azure.com',
  SATGE: '//stage.edisebay.com',
  PRD: '//www.edisebay.com'
}[ENV]

var HOSTS = {
  'DEV': {
    BOSE_BASE_HOST
  },
  'SATGE': {
    BOSE_BASE_HOST
  },
  'PRD': {
    BOSE_BASE_HOST
  }
}[ENV]

export default HOSTS
