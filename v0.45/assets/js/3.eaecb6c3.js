(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{501:function(o,t,e){o.exports=e.p+"assets/img/simpleMerkleTree.35a69100.png"},502:function(o,t,e){o.exports=e.p+"assets/img/existProof.16d0e856.png"},503:function(o,t,e){o.exports=e.p+"assets/img/absence1.9fe56931.png"},504:function(o,t,e){o.exports=e.p+"assets/img/absence2.d0d2b33b.png"},505:function(o,t,e){o.exports=e.p+"assets/img/absence3.c3f6007e.png"},506:function(o,t,e){o.exports=e.p+"assets/img/substoreProof.10b5e7ad.png"},507:function(o,t,e){o.exports=e.p+"assets/img/commitValidation.dd75cbe3.png"},508:function(o,t,e){o.exports=e.p+"assets/img/updateValidatorToHeight.6ff55d6c.png"},706:function(o,t,e){"use strict";e.r(t);var a=e(1),s=Object(a.a)({},(function(){var o=this,t=o.$createElement,a=o._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[a("h1",{attrs:{id:"라이트-클라이언트-스펙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#라이트-클라이언트-스펙"}},[o._v("#")]),o._v(" 라이트 클라이언트 스펙")]),o._v(" "),a("p",[o._v("이 문서는 LCD(Light Client Daemon)을 사용하는 방법을 설명합니다. LCD는 모듈러 API를 지원합니다. 현재 LCD는 ICS0 (텐더민트API), ICS1 (키API)와 ICS20 (토큰API) 만을 지원하는 상태입니다. 추후에 추가 모듈을 지원할 예정입니다.")]),o._v(" "),a("h2",{attrs:{id:"abci-상태-빌드-검증하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abci-상태-빌드-검증하기"}},[o._v("#")]),o._v(" ABCI 상태 빌드/검증하기")]),o._v(" "),a("p",[o._v("코스모스 SDK 기반 애플리케이션은 멀티-서브스토어(multi-substore)를 이용해 저장을 합니다. 각 서브스토어는 IAVL 스토어를 응용합니다. 서브스토어는 단순한 머클 트리(Merkle tree) 형태로 정렬됩니다. 머클 트리를 만들기 위해서는 각 서브스토어의 이름, 블록 높이 그리고 스토어 루트 해시(store root hash) 필요하며, 이를 기반으로 간단한 머클 가지 노드(Merkle leaf node)를 만들 수 있습니다. 이후 가지 노드를 이용해 해시값을 머클 뿌리(Merkle root)까지 연산하게 됩니다. 단순 머클 트리(simple Merkle tree)의 루트 해시(Root hash)는 블록 헤더에 포함되는 앱 해시(AppHash)입니다.")]),o._v(" "),a("p",[a("img",{attrs:{src:e(501),alt:"Simple Merkle Tree"}})]),o._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/irisnet/cosmos-sdk/tree/bianjie/lcd_spec/docs/spec/lcd#trust-propagation",target:"_blank",rel:"noopener noreferrer"}},[o._v("LCD 신뢰 전파"),a("OutboundLink")],1),o._v("에서 설명했던바와 같이, 앱해시는 신뢰할 수 있는 검증인 세트의 보팅파워(총 스테이킹 수량)를 검증하는 방식으로 확인할 수 있습니다. 이 절차에는 ABCI 상태에서부터 앱해시 증거를 찾으면 됩니다. 증거에는 다음과 같은 정보가 포함되어있습니다:")]),o._v(" "),a("ul",[a("li",[o._v("IAVL 증거")]),o._v(" "),a("li",[o._v("섭스토어에서 앱해시까지의 증거")])]),o._v(" "),a("h3",{attrs:{id:"iavl-증거-iavl-proof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iavl-증거-iavl-proof"}},[o._v("#")]),o._v(" IAVL 증거 (IAVL proof)")]),o._v(" "),a("p",[o._v("증거물에는 두 가지의 종류가 있습니다: 존재 증거(existance proof)와 부재 증거(absence proof). 만약 쿼리 키가 IAVL 스토어에 존재하는 경우 키 밸류(key-value)와 존재 증거를 제공하게 됩니다. 반면, 만약 키가 존재하지 않는다면 해당 키가 존재하지 않는 것을 증명할 수 있는 부재 증거를 제공합니다.")]),o._v(" "),a("h3",{attrs:{id:"iavl-존재-증거-iavl-existance-proof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iavl-존재-증거-iavl-existance-proof"}},[o._v("#")]),o._v(" IAVL 존재 증거 (IAVL Existance Proof)")]),o._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBDb21taXRJRCBzdHJ1Y3QgewogICAgVmVyc2lvbiBpbnQ2NAogICAgSGFzaCAgICBbXWJ5dGUKfQoKdHlwZSBzdG9yZUNvcmUgc3RydWN0IHsKICAgIENvbW1pdElEIENvbW1pdElECn0KCnR5cGUgTXVsdGlTdG9yZUNvbW1pdElEIHN0cnVjdCB7CiAgICBOYW1lIHN0cmluZwogICAgQ29yZSBzdG9yZUNvcmUKfQoKdHlwZSBwcm9vZklubmVyTm9kZSBzdHJ1Y3QgewogICAgSGVpZ2h0ICBpbnQ4CiAgICBTaXplICAgIGludDY0CiAgICBWZXJzaW9uIGludDY0CiAgICBMZWZ0ICAgIFtdYnl0ZQogICAgUmlnaHQgICBbXWJ5dGUKfQoKdHlwZSBLZXlFeGlzdHNQcm9vZiBzdHJ1Y3QgewogICAgTXVsdGlTdG9yZUNvbW1pdEluZm8gW11NdWx0aVN0b3JlQ29tbWl0SUQgLy9BbGwgc3Vic3RvcmUgY29tbWl0SURzCiAgICBTdG9yZU5hbWUgc3RyaW5nIC8vQ3VycmVudCBzdWJzdG9yZSBuYW1lCiAgICBIZWlnaHQgIGludDY0IC8vVGhlIGNvbW1pdCBoZWlnaHQgb2YgY3VycmVudCBzdWJzdG9yZQogICAgUm9vdEhhc2ggY21uLkhleEJ5dGVzIC8vVGhlIHJvb3QgaGFzaCBvZiB0aGlzIElBVkwgdHJlZQogICAgVmVyc2lvbiAgaW50NjQgLy9UaGUgdmVyc2lvbiBvZiB0aGUga2V5LXZhbHVlIGluIHRoaXMgSUFWTCB0cmVlCiAgICBJbm5lck5vZGVzIFtdcHJvb2ZJbm5lck5vZGUgLy9UaGUgcGF0aCBmcm9tIHRvIHJvb3Qgbm9kZSB0byBrZXktdmFsdWUgbGVhZiBub2RlCn0K"}}),o._v(" "),a("p",[o._v("존재 증거의 데이터 형식은 위와 같이 나열되어 있습니다. 존재 증거를 생성하고 검증하는 방식은 다음과 같습니다:")]),o._v(" "),a("p",[a("img",{attrs:{src:e(502),alt:"Exist Proof"}})]),o._v(" "),a("p",[o._v("증거 생성 절차:")]),o._v(" "),a("ul",[a("li",[o._v("루트 노드에서 IAVL 트리를 액세스")]),o._v(" "),a("li",[o._v("방문 노드(visited node)를 InnerNodes에 기록")]),o._v(" "),a("li",[o._v("타겟 가지 노드(leaf node)를 찾은 경우, 가지 노드 버전을 증거 버전에 할당")]),o._v(" "),a("li",[o._v("현재 IAVL 트리 높이(IAVL tree height)를 증거 높이(proof height)에 할당")]),o._v(" "),a("li",[o._v("현재 IAVL 트리의 루트해시(rootHash)를 증거 루트해시에 할당")]),o._v(" "),a("li",[o._v("현재 서브스토어 이름을 증거 스토어 이름(proof StoreName)에 할당")]),o._v(" "),a("li",[o._v("db에서 멀티스토어 커밋 정보(multistore commitInfo)를 읽은 후 증거 StoreCommitInfo에 할당")])]),o._v(" "),a("p",[o._v("검증 절차:")]),o._v(" "),a("ul",[a("li",[o._v("키, 값 그리고 증거 버전(proof version)을 이용해 리프 노드(leaf node)를 생성")]),o._v(" "),a("li",[o._v("리프 노드 해시값을 연산")]),o._v(" "),a("li",[o._v("해시 값을 innerNoder의 rightHash에 할당한 후, 첫 innnerNode의 해시를 연산")]),o._v(" "),a("li",[o._v("해시 연산 절차를 전파. 만약 위의 innerNode가 다음 innerNode의 left child(좌측 자녀)인 경우, 해당 innerNode를 다음 innerNode의 좌측 해시로 배정한다. 이 외의 경우, 위의 innerNode 해시를 다음 innerNode의 우측 해시로 배정한다.")]),o._v(" "),a("li",[o._v("마지막 innerNode의 해시값은 해당 증거의 rootHash와 동일해야 한다. 그렇지 않은 경우, 증거는 무효하다.")])]),o._v(" "),a("h3",{attrs:{id:"iavl-부재-증거-iavl-absence-proof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iavl-부재-증거-iavl-absence-proof"}},[o._v("#")]),o._v(" IAVL 부재 증거(IAVL Absence Proof)")]),o._v(" "),a("p",[o._v("모든 IAVL 리프 노드는 각 리프노드의 키로 정렬되어있습니다. 그렇기 때문에 IAVL 트리의 전체 키 내의 목표 키 위치를 찾을 수 있습니다. 아래와 같이, 키가 좌측 키 또는 우측 키인지 확인이 가능합니다. 만약 우측 키와 좌측 키의 존재를 증명할 수 있을 경우, 인접 노드(adjecent node) 여부를 증명할 수 있는 것이며 타겟 키가 존재하지 않는다는 것을 증명하게 됩니다.")]),o._v(" "),a("p",[a("img",{attrs:{src:e(503),alt:"Absence Proof1"}})]),o._v(" "),a("p",[o._v("만약 타겟 키가 최우측 리프 노드(right most leaf node) 보다 크거나 또는 최좌측 키(left most key) 보다 작은 경우 타겟 키는 존재하지 않음을 증명합니다.")]),o._v(" "),a("p",[a("img",{attrs:{src:e(504),alt:"Absence Proof2"}}),a("img",{attrs:{src:e(505),alt:"Absence Proof3"}})]),o._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBwcm9vZkxlYWZOb2RlIHN0cnVjdCB7CiAgICBLZXlCeXRlcyAgIGNtbi5IZXhCeXRlcwogICAgVmFsdWVCeXRlcyBjbW4uSGV4Qnl0ZXMKICAgIFZlcnNpb24gICAgaW50NjQKfQoKdHlwZSBwYXRoV2l0aE5vZGUgc3RydWN0IHsKICAgIElubmVyTm9kZXMgW11wcm9vZklubmVyTm9kZQogICAgTm9kZSBwcm9vZkxlYWZOb2RlCn0KCnR5cGUgS2V5QWJzZW50UHJvb2Ygc3RydWN0IHsKICAgIE11bHRpU3RvcmVDb21taXRJbmZvIFtdTXVsdGlTdG9yZUNvbW1pdElECiAgICBTdG9yZU5hbWUgc3RyaW5nCiAgICBIZWlnaHQgIGludDY0CiAgICBSb290SGFzaCBjbW4uSGV4Qnl0ZXMKICAgIExlZnQgICpwYXRoV2l0aE5vZGUgLy8gUHJvb2YgdGhlIGxlZnQga2V5IGV4aXN0CiAgICBSaWdodCAqcGF0aFdpdGhOb2RlICAvL1Byb29mIHRoZSByaWdodCBrZXkgZXhpc3QKfQo="}}),o._v(" "),a("p",[o._v("위는 부재 증거의 데이터 구조입니다. 증거를 생성하는 절차는 다음과 같습니다:")]),o._v(" "),a("ul",[a("li",[o._v("루트 노드에서 IAVL 트리를 액세스")]),o._v(" "),a("li",[o._v("전체 키 세트의 deserved index(INDEX로 표기됨)을 받는다")]),o._v(" "),a("li",[o._v("만약 받은 인덱스의 값이 0일 경우, 우측 인덱스의 값은 0이며 좌측 노드는 존재하지 않는다")]),o._v(" "),a("li",[o._v("만약 받은 인덱스의 값이 전체 키 세트의 크기와 동일한 경우, 좌측 노드 인덱스는 INDEX-1 이어야 하며 우측 노드는 존재하지 않는다")]),o._v(" "),a("li",[o._v("이외의 경우, 우측 노드 인덱스는 INDEX여야 하며 좌측 노드 인덱스는 INDEX-1이다")]),o._v(" "),a("li",[o._v("현재 IAVL 트리의 높이를 증거 높이에 할당한다")]),o._v(" "),a("li",[o._v("현재 IAVL 트리의 rootHash를 증거 rootHash로 할당한다")]),o._v(" "),a("li",[o._v("현재 substore 이름을 증거의 StoreName으로 할당한다")]),o._v(" "),a("li",[o._v("db에서 multistore commitInfo를 읽은 후 증거의 StoreCommitInfo에 할당한다")])]),o._v(" "),a("p",[o._v("증거 검증 절차:")]),o._v(" "),a("ul",[a("li",[o._v("만약 우측 노드만 존재하는 경우, 존재 증거(exist proof)를 검증하여 최좌특 노드인지 확인한다")]),o._v(" "),a("li",[o._v("만약 우측 노드만 존재하는 경우, 존재 증거(exist proof)를 검증하여 최우측 노드인지 확인한다")]),o._v(" "),a("li",[o._v("만약 좌측 노드와 우측 노드가 동시에 존재하는 경우, 두 노드가 인접(adjacent)한지 확인한다")])]),o._v(" "),a("h3",{attrs:{id:"substores-증거와-apphash-증거-확인하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#substores-증거와-apphash-증거-확인하기"}},[o._v("#")]),o._v(" Substores 증거와 AppHash 증거 확인하기")]),o._v(" "),a("p",[o._v("IAVL 증거를 검증했다면 substore 증거와 AppHash를 비교하여 검증할 수 있습니다. 우선 MultiStoreCommitInfo를 반복(iterate)하여 proof StoreName을 이용해 서브스토어의 commitID를 찾을 수 있습니다. 여기에서 commitID의 해시가 RootHash의 proof와 동일하다는 것을 검증합니다. 만약 동일하지 않을 경우, 증거는 유효하지 않습니다. 이후 서브스토어 commitInfo 어레이를 서브스토어 이름의 해시 값으로 정렬합니다. 마지막으로, 모든 서브스토어 commitInfo 어레이를 기반으로 단순 머클 트리(simple Merkle tree)를 빌드하여 머클 루트 해시가 앱 해시와 동일한지 검증합니다.")]),o._v(" "),a("p",[a("img",{attrs:{src:e(506),alt:"substore proof"}})]),o._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBTaW1wbGVIYXNoRnJvbVR3b0hhc2hlcyhsZWZ0IFtdYnl0ZSwgcmlnaHQgW11ieXRlKSBbXWJ5dGUgewogICAgdmFyIGhhc2hlciA9IHJpcGVtZDE2MC5OZXcoKQoKICAgIGVyciA6PSBlbmNvZGVCeXRlU2xpY2UoaGFzaGVyLCBsZWZ0KQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcGFuaWMoZXJyKQogICAgfQoKICAgIGVyciA9IGVuY29kZUJ5dGVTbGljZShoYXNoZXIsIHJpZ2h0KQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcGFuaWMoZXJyKQogICAgfQoKICAgIHJldHVybiBoYXNoZXIuU3VtKG5pbCkKfQoKZnVuYyBTaW1wbGVIYXNoRnJvbUhhc2hlcyhoYXNoZXMgW11bXWJ5dGUpIFtdYnl0ZSB7CiAgICAvLyBSZWN1cnNpdmUgaW1wbC4KICAgIHN3aXRjaCBsZW4oaGFzaGVzKSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgICByZXR1cm4gbmlsCiAgICAgICAgY2FzZSAxOgogICAgICAgICAgICByZXR1cm4gaGFzaGVzWzBdCiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgICAgbGVmdCA6PSBTaW1wbGVIYXNoRnJvbUhhc2hlcyhoYXNoZXNbOihsZW4oaGFzaGVzKSsxKS8yXSkKICAgICAgICAgICAgcmlnaHQgOj0gU2ltcGxlSGFzaEZyb21IYXNoZXMoaGFzaGVzWyhsZW4oaGFzaGVzKSsxKS8yOl0pCiAgICAgICAgICAgIHJldHVybiBTaW1wbGVIYXNoRnJvbVR3b0hhc2hlcyhsZWZ0LCByaWdodCkKICAgIH0KfQo="}}),o._v(" "),a("h2",{attrs:{id:"검증인-세트를-이용한-블록헤더-검증하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#검증인-세트를-이용한-블록헤더-검증하기"}},[o._v("#")]),o._v(" 검증인 세트를 이용한 블록헤더 검증하기")]),o._v(" "),a("p",[o._v("위 항목에서는 appHash를 자주 언급합니다. 그렇다면 appHash는 어디에서 존재하는 것일까요? appHash는 블록 헤더에 존재합니다. 그렇기 때문에 특정 블록 높이의 블록헤더를 LCD가 신뢰하는 검증인 세트에 검증해야 합니다. 검증 절차는 다음과 같습니다:")]),o._v(" "),a("p",[a("img",{attrs:{src:e(507),alt:"commit verification"}})]),o._v(" "),a("p",[o._v("만약 신뢰 검증인 세트가 블록 헤더와 일치하지 않는 경우, 해당 블록 높이의 검증인 세트로 업데이트를 해야합니다. LCD는 검증인 세트의 변경이 보팅 파워의 1/3을 초과할 수 없다는 규칙을 따릅니다. 만약 타겟 검증인 세트가 현재 신뢰되는 검증인 세트에서 1/3 보팅파워를 초과하는 변화가 있는 경우, 타겟 검증인 세트 전에 숨겨진 검증인 세트 변경이 있었는지 확인해야 합니다. 모든 검증인 세트 변경이 이 규칙을 따를때 검증인 세트 업데이트가 이루어질 수 있습니다.")]),o._v(" "),a("p",[o._v("예를 들어:")]),o._v(" "),a("p",[a("img",{attrs:{src:e(508),alt:"Update validator set to height"}})]),o._v(" "),a("ul",[a("li",[o._v("Update to 10000, tooMuchChangeErr")]),o._v(" "),a("li",[o._v("Update to 5050,  tooMuchChangeErr")]),o._v(" "),a("li",[o._v("Update to 2575, Success")]),o._v(" "),a("li",[o._v("Update to 5050, Success")]),o._v(" "),a("li",[o._v("Update to 10000,tooMuchChangeErr")]),o._v(" "),a("li",[o._v("Update to 7525, Success")]),o._v(" "),a("li",[o._v("Update to 10000, Success")])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);