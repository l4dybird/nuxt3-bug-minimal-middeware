# Nuxt3 Bug Minimal Middeware

## How to reproduce

1. Checkout this repo
2. Run `npm i`
3. npm `npm run dev`
4. Access direct link http://localhost:3000/#hoge

Output:

```bash
http://localhost:3000/ に移動しました
client.ts:18 [vite] connecting...
client.ts:133 [vite] connected.
chunk-BVQHDTV7.js:2710 <Suspense> is an experimental feature and its API will likely change.
chunk-BVQHDTV7.js:1449  [Vue warn]: Unhandled error during execution of scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core 
  at <NuxtLayoutProvider layoutProps= {ref: RefImpl} key="default" name="default"  ... > 
  at <NuxtLayout> 
  at <App key=3 > 
  at <NuxtRoot>
warn2 @ chunk-BVQHDTV7.js:1449
logError @ chunk-BVQHDTV7.js:1623
handleError @ chunk-BVQHDTV7.js:1615
callWithErrorHandling @ chunk-BVQHDTV7.js:1567
flushJobs @ chunk-BVQHDTV7.js:1763
Promise.then (async)
queueFlush @ chunk-BVQHDTV7.js:1676
queueJob @ chunk-BVQHDTV7.js:1670
(匿名) @ chunk-BVQHDTV7.js:7208
triggerEffect @ chunk-BVQHDTV7.js:614
triggerEffects @ chunk-BVQHDTV7.js:604
triggerRefValue @ chunk-BVQHDTV7.js:1211
(匿名) @ chunk-BVQHDTV7.js:1371
triggerEffect @ chunk-BVQHDTV7.js:614
triggerEffects @ chunk-BVQHDTV7.js:599
triggerRefValue @ chunk-BVQHDTV7.js:1211
set value @ chunk-BVQHDTV7.js:1255
finalizeNavigation @ vue-router.js:2563
(匿名) @ vue-router.js:2618
Promise.then (async)
(匿名) @ vue-router.js:2617
(匿名) @ vue-router.js:412
popStateHandler @ vue-router.js:411
(匿名) @ auth.global.ts:3
(匿名) @ router.js?v=76fe3e51:127
fn @ nuxt.js:146
runWithContext @ chunk-BVQHDTV7.js:5256
callWithNuxt @ nuxt.js:151
runWithContext @ nuxt.js:28
(匿名) @ router.js?v=76fe3e51:127
await in (匿名) (async)
(匿名) @ vue-router.js:1492
(匿名) @ vue-router.js:1470
runWithContext @ chunk-BVQHDTV7.js:5256
runWithContext @ vue-router.js:2485
(匿名) @ vue-router.js:2754
Promise.then (async)
(匿名) @ vue-router.js:2754
runGuardQueue @ vue-router.js:2754
(匿名) @ vue-router.js:2504
Promise.then (async)
navigate @ vue-router.js:2498
pushWithRedirect @ vue-router.js:2431
push @ vue-router.js:2367
replace @ vue-router.js:2370
(匿名) @ router.js?v=76fe3e51:167
_function @ index.mjs?v=76fe3e51:133
(匿名) @ index.mjs?v=76fe3e51:48
(匿名) @ index.mjs?v=76fe3e51:48
app:created (async)
serialTaskCaller @ index.mjs?v=76fe3e51:46
callHookWith @ index.mjs?v=76fe3e51:198
callHook @ index.mjs?v=76fe3e51:187
initApp @ entry.js:53
await in initApp (async)
(匿名) @ entry.js:64
chunk-BVQHDTV7.js:9157  Uncaught (in promise) TypeError: Cannot read properties of null (reading 'parentNode')
    at parentNode (chunk-BVQHDTV7.js:9157:30)
    at ReactiveEffect.componentUpdateFn [as fn] (chunk-BVQHDTV7.js:7175:11)
    at ReactiveEffect.run (chunk-BVQHDTV7.js:423:19)
    at instance.update (chunk-BVQHDTV7.js:7212:52)
    at updateComponent (chunk-BVQHDTV7.js:7039:18)
    at processComponent (chunk-BVQHDTV7.js:6974:7)
    at patch (chunk-BVQHDTV7.js:6436:11)
    at patchSuspense (chunk-BVQHDTV7.js:2562:7)
    at Object.process (chunk-BVQHDTV7.js:2481:7)
    at patch (chunk-BVQHDTV7.js:6461:16)
parentNode @ chunk-BVQHDTV7.js:9157
componentUpdateFn @ chunk-BVQHDTV7.js:7175
run @ chunk-BVQHDTV7.js:423
instance.update @ chunk-BVQHDTV7.js:7212
updateComponent @ chunk-BVQHDTV7.js:7039
processComponent @ chunk-BVQHDTV7.js:6974
patch @ chunk-BVQHDTV7.js:6436
patchSuspense @ chunk-BVQHDTV7.js:2562
process @ chunk-BVQHDTV7.js:2481
patch @ chunk-BVQHDTV7.js:6461
componentUpdateFn @ chunk-BVQHDTV7.js:7171
run @ chunk-BVQHDTV7.js:423
instance.update @ chunk-BVQHDTV7.js:7212
callWithErrorHandling @ chunk-BVQHDTV7.js:1565
flushJobs @ chunk-BVQHDTV7.js:1763
chunk-BVQHDTV7.js:7520  Uncaught (in promise) TypeError: Cannot read properties of null (reading 'subTree')
    at move (chunk-BVQHDTV7.js:7520:28)
    at move (chunk-BVQHDTV7.js:7520:7)
    at Object.resolve (chunk-BVQHDTV7.js:2789:11)
    at chunk-BVQHDTV7.js:2912:20
move @ chunk-BVQHDTV7.js:7520
move @ chunk-BVQHDTV7.js:7520
resolve @ chunk-BVQHDTV7.js:2789
(匿名) @ chunk-BVQHDTV7.js:2912
Promise.then (async)
registerDep @ chunk-BVQHDTV7.js:2876
mountComponent @ chunk-BVQHDTV7.js:7003
processComponent @ chunk-BVQHDTV7.js:6963
patch @ chunk-BVQHDTV7.js:6436
componentUpdateFn @ chunk-BVQHDTV7.js:7106
run @ chunk-BVQHDTV7.js:423
instance.update @ chunk-BVQHDTV7.js:7212
setupRenderEffect @ chunk-BVQHDTV7.js:7220
mountComponent @ chunk-BVQHDTV7.js:7010
processComponent @ chunk-BVQHDTV7.js:6963
patch @ chunk-BVQHDTV7.js:6436
mountSuspense @ chunk-BVQHDTV7.js:2523
process @ chunk-BVQHDTV7.js:2469
patch @ chunk-BVQHDTV7.js:6461
componentUpdateFn @ chunk-BVQHDTV7.js:7106
run @ chunk-BVQHDTV7.js:423
instance.update @ chunk-BVQHDTV7.js:7212
setupRenderEffect @ chunk-BVQHDTV7.js:7220
mountComponent @ chunk-BVQHDTV7.js:7010
processComponent @ chunk-BVQHDTV7.js:6963
patch @ chunk-BVQHDTV7.js:6436
componentUpdateFn @ chunk-BVQHDTV7.js:7106
run @ chunk-BVQHDTV7.js:423
instance.update @ chunk-BVQHDTV7.js:7212
setupRenderEffect @ chunk-BVQHDTV7.js:7220
mountComponent @ chunk-BVQHDTV7.js:7010
processComponent @ chunk-BVQHDTV7.js:6963
patch @ chunk-BVQHDTV7.js:6436
mountSuspense @ chunk-BVQHDTV7.js:2523
process @ chunk-BVQHDTV7.js:2469
patch @ chunk-BVQHDTV7.js:6461
componentUpdateFn @ chunk-BVQHDTV7.js:7106
run @ chunk-BVQHDTV7.js:423
instance.update @ chunk-BVQHDTV7.js:7212
setupRenderEffect @ chunk-BVQHDTV7.js:7220
mountComponent @ chunk-BVQHDTV7.js:7010
processComponent @ chunk-BVQHDTV7.js:6963
patch @ chunk-BVQHDTV7.js:6436
render2 @ chunk-BVQHDTV7.js:7730
mount @ chunk-BVQHDTV7.js:5215
app.mount @ chunk-BVQHDTV7.js:10537
initApp @ entry.js:55
await in initApp (async)
(匿名) @ entry.js:64
```