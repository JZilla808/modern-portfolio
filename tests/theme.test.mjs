import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { themeScript } from '../data/theme.ts';
function run(stored, systemDark, storageThrows = false) {
 const document = { documentElement: { dataset: {} } };
 vm.runInNewContext(themeScript, {document, localStorage: {getItem() {if(storageThrows)throw new Error('blocked');return stored;}},window:{matchMedia:()=>({matches:systemDark})}});
 return document.documentElement.dataset.theme;
}
test('explicit choice overrides system preference before paint',()=>{assert.equal(run('light',true),'light');assert.equal(run('dark',false),'dark');});
test('missing or stale preference follows the system',()=>{assert.equal(run(null,true),'dark');assert.equal(run('invalid',false),'light');});
test('blocked storage still initializes a usable theme',()=>{assert.equal(run(null,true,true),'dark');assert.equal(run(null,false,true),'light');});
