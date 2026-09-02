const base=(process.env.VITE_HHHAI_API_URL||'https://hhhai.onrender.com').replace(/\/$/,'');
const paths=['/api/status','/api/markets','/api/trading/status','/api/trading/management','/api/decision/status','/api/risk/status','/api/learning/status','/api/control-center/status','/api/integration/status','/api/position-intelligence/status','/api/realtime/world/BTCUSDT?exchange=binance'];
let failed=0;
for(const path of paths){
  try{const r=await fetch(base+path,{headers:{accept:'application/json'}});if(!r.ok){console.error(`FAIL ${r.status} ${path}`);failed++;}else{const text=await r.text();if(!text){console.error(`FAIL empty response ${path}`);failed++;}else console.log(`PASS ${r.status} ${path}`)}}catch(e){console.error(`FAIL ${path}: ${e.message}`);failed++;}
}
if(failed){console.error(`${failed} production contract checks failed`);process.exit(1)}
console.log(`All ${paths.length} production backend contract checks passed`);
