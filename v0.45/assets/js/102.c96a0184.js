(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{626:function(l,e,t){"use strict";t.r(e);var a=t(1),c=Object(a.a)({},(function(){var l=this,e=l.$createElement,t=l._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[t("h1",{attrs:{id:"adr-038-kvstore-state-listening"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adr-038-kvstore-state-listening"}},[l._v("#")]),l._v(" ADR 038: KVStore state listening")]),l._v(" "),t("h2",{attrs:{id:"changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[l._v("#")]),l._v(" Changelog")]),l._v(" "),t("ul",[t("li",[l._v("11/23/2020: Initial draft")]),l._v(" "),t("li",[l._v("10/14/2022:\n"),t("ul",[t("li",[l._v("Add "),t("code",[l._v("ListenCommit")]),l._v(", flatten the state writes in a block to a single batch.")]),l._v(" "),t("li",[l._v("Remove listeners from cache stores, should only listen to "),t("code",[l._v("rootmulti.Store")]),l._v(".")]),l._v(" "),t("li",[l._v("Remove "),t("code",[l._v("HaltAppOnDeliveryError()")]),l._v(", the errors are propogated by default, the implementations should return nil if don't want to propogate errors.")])])])]),l._v(" "),t("h2",{attrs:{id:"status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[l._v("#")]),l._v(" Status")]),l._v(" "),t("p",[l._v("Proposed")]),l._v(" "),t("h2",{attrs:{id:"abstract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[l._v("#")]),l._v(" Abstract")]),l._v(" "),t("p",[l._v("This ADR defines a set of changes to enable listening to state changes of individual KVStores and exposing these data to consumers.")]),l._v(" "),t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[l._v("#")]),l._v(" Context")]),l._v(" "),t("p",[l._v("Currently, KVStore data can be remotely accessed through "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/building-modules/messages-and-queries.md#queries",target:"_blank",rel:"noopener noreferrer"}},[l._v("Queries"),t("OutboundLink")],1),l._v("\nwhich proceed either through Tendermint and the ABCI, or through the gRPC server.\nIn addition to these request/response queries, it would be beneficial to have a means of listening to state changes as they occur in real time.")]),l._v(" "),t("h2",{attrs:{id:"decision"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[l._v("#")]),l._v(" Decision")]),l._v(" "),t("p",[l._v("We will modify the "),t("code",[l._v("CommitMultiStore")]),l._v(" interface and its concrete ("),t("code",[l._v("rootmulti")]),l._v(") implementations and introduce a new "),t("code",[l._v("listenkv.Store")]),l._v(" to allow listening to state changes in underlying KVStores. We don't need to listen to cache stores, because we can't be sure that the writes will be committed eventually, and the writes are duplicated in "),t("code",[l._v("rootmulti.Store")]),l._v(" eventually, so we should only listen to "),t("code",[l._v("rootmulti.Store")]),l._v(".\nWe will introduce a plugin system for configuring and running streaming services that write these state changes and their surrounding ABCI message context to different destinations.")]),l._v(" "),t("h3",{attrs:{id:"listening-interface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#listening-interface"}},[l._v("#")]),l._v(" Listening interface")]),l._v(" "),t("p",[l._v("In a new file, "),t("code",[l._v("store/types/listening.go")]),l._v(", we will create a "),t("code",[l._v("WriteListener")]),l._v(" interface for streaming out state changes from a KVStore.")]),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gV3JpdGVMaXN0ZW5lciBpbnRlcmZhY2UgZm9yIHN0cmVhbWluZyBkYXRhIG91dCBmcm9tIGEgbGlzdGVua3YuU3RvcmUKdHlwZSBXcml0ZUxpc3RlbmVyIGludGVyZmFjZSB7CgkvLyBpZiB2YWx1ZSBpcyBuaWwgdGhlbiBpdCB3YXMgZGVsZXRlZAoJLy8gc3RvcmVLZXkgaW5kaWNhdGVzIHRoZSBzb3VyY2UgS1ZTdG9yZSwgdG8gZmFjaWxpdGF0ZSB1c2luZyB0aGUgc2FtZSBXcml0ZUxpc3RlbmVyIGFjcm9zcyBzZXBhcmF0ZSBLVlN0b3JlcwoJLy8gZGVsZXRlIGJvb2wgaW5kaWNhdGVzIGlmIGl0IHdhcyBhIGRlbGV0ZTsgdHJ1ZTogZGVsZXRlLCBmYWxzZTogc2V0CglPbldyaXRlKHN0b3JlS2V5IFN0b3JlS2V5LCBrZXkgW11ieXRlLCB2YWx1ZSBbXWJ5dGUsIGRlbGV0ZSBib29sKSBlcnJvcgp9Cg=="}}),l._v(" "),t("h3",{attrs:{id:"listener-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#listener-type"}},[l._v("#")]),l._v(" Listener type")]),l._v(" "),t("p",[l._v("We will create two concrete implementations of the "),t("code",[l._v("WriteListener")]),l._v(" interface in "),t("code",[l._v("store/types/listening.go")]),l._v(", that writes out protobuf\nencoded KV pairs to an underlying "),t("code",[l._v("io.Writer")]),l._v(", and simply accumulate them in memory.")]),l._v(" "),t("p",[l._v("This will include defining a simple protobuf type for the KV pairs. In addition to the key and value fields this message\nwill include the StoreKey for the originating KVStore so that we can write out from separate KVStores to the same stream/file\nand determine the source of each KV pair.")]),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBTdG9yZUtWUGFpciB7CiAgb3B0aW9uYWwgc3RyaW5nIHN0b3JlX2tleSA9IDE7IC8vIHRoZSBzdG9yZSBrZXkgZm9yIHRoZSBLVlN0b3JlIHRoaXMgcGFpciBvcmlnaW5hdGVzIGZyb20KICByZXF1aXJlZCBib29sIHNldCA9IDI7IC8vIHRydWUgaW5kaWNhdGVzIGEgc2V0IG9wZXJhdGlvbiwgZmFsc2UgaW5kaWNhdGVzIGEgZGVsZXRlIG9wZXJhdGlvbgogIHJlcXVpcmVkIGJ5dGVzIGtleSA9IDM7CiAgcmVxdWlyZWQgYnl0ZXMgdmFsdWUgPSA0Owp9Cg=="}}),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RvcmVLVlBhaXJXcml0ZUxpc3RlbmVyIGlzIHVzZWQgdG8gY29uZmlndXJlIGxpc3RlbmluZyB0byBhIEtWU3RvcmUgYnkgd3JpdGluZyBvdXQgbGVuZ3RoLXByZWZpeGVkCi8vIHByb3RvYnVmIGVuY29kZWQgU3RvcmVLVlBhaXJzIHRvIGFuIHVuZGVybHlpbmcgaW8uV3JpdGVyCnR5cGUgU3RvcmVLVlBhaXJXcml0ZUxpc3RlbmVyIHN0cnVjdCB7Cgl3cml0ZXIgaW8uV3JpdGVyCgltYXJzaGFsbGVyIGNvZGVjLkJpbmFyeUNvZGVjCn0KCi8vIE5ld1N0b3JlS1ZQYWlyV3JpdGVMaXN0ZW5lciB3cmFwcyBjcmVhdGVzIGEgU3RvcmVLVlBhaXJXcml0ZUxpc3RlbmVyIHdpdGggYSBwcm92ZGllZCBpby5Xcml0ZXIgYW5kIGNvZGVjLkJpbmFyeUNvZGVjCmZ1bmMgTmV3U3RvcmVLVlBhaXJXcml0ZUxpc3RlbmVyKHcgaW8uV3JpdGVyLCBtIGNvZGVjLkJpbmFyeUNvZGVjKSAqU3RvcmVLVlBhaXJXcml0ZUxpc3RlbmVyIHsKCXJldHVybiAmYW1wO1N0b3JlS1ZQYWlyV3JpdGVMaXN0ZW5lcnsKCQl3cml0ZXI6IHcsCgkJbWFyc2hhbGxlcjogbSwKCX0KfQoKLy8gT25Xcml0ZSBzYXRpc2ZpZXMgdGhlIFdyaXRlTGlzdGVuZXIgaW50ZXJmYWNlIGJ5IHdyaXRpbmcgbGVuZ3RoLXByZWZpeGVkIHByb3RvYnVmIGVuY29kZWQgU3RvcmVLVlBhaXJzCmZ1bmMgKHdsICpTdG9yZUtWUGFpcldyaXRlTGlzdGVuZXIpIE9uV3JpdGUoc3RvcmVLZXkgdHlwZXMuU3RvcmVLZXksIGtleSBbXWJ5dGUsIHZhbHVlIFtdYnl0ZSwgZGVsZXRlIGJvb2wpIGVycm9yIGVycm9yIHsKICAgIGt2UGFpciA6PSBuZXcodHlwZXMuU3RvcmVLVlBhaXIpCiAgICBrdlBhaXIuU3RvcmVLZXkgPSBzdG9yZUtleS5OYW1lKCkKICAgIGt2UGFpci5EZWxldGUgPSBEZWxldGUKICAgIGt2UGFpci5LZXkgPSBrZXkKICAgIGt2UGFpci5WYWx1ZSA9IHZhbHVlCiAgICBieSwgZXJyIDo9IHdsLm1hcnNoYWxsZXIuTWFyc2hhbEJpbmFyeUxlbmd0aFByZWZpeGVkKGt2UGFpcikKICAgIGlmIGVyciAhPSBuaWwgewogICAgICAgIHJldHVybiBlcnIKICAgIH0KICAgIGlmIF8sIGVyciA6PSB3bC53cml0ZXIuV3JpdGUoYnkpOyBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9CiAgICByZXR1cm4gbmlsCn0K"}}),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"Ly8gTWVtb3J5TGlzdGVuZXIgbGlzdGVucyB0byB0aGUgc3RhdGUgd3JpdGVzIGFuZCBhY2N1bXVsYXRlIHRoZSByZWNvcmRzIGluIG1lbW9yeS4KdHlwZSBNZW1vcnlMaXN0ZW5lciBzdHJ1Y3QgewoJa2V5ICAgICAgICBTdG9yZUtleQoJc3RhdGVDYWNoZSBbXVN0b3JlS1ZQYWlyCn0KCi8vIE5ld01lbW9yeUxpc3RlbmVyIGNyZWF0ZXMgYSBsaXN0ZW5lciB0aGF0IGFjY3VtdWxhdGUgdGhlIHN0YXRlIHdyaXRlcyBpbiBtZW1vcnkuCmZ1bmMgTmV3TWVtb3J5TGlzdGVuZXIoa2V5IFN0b3JlS2V5KSAqTWVtb3J5TGlzdGVuZXIgewoJcmV0dXJuICZhbXA7TWVtb3J5TGlzdGVuZXJ7a2V5OiBrZXl9Cn0KCi8vIE9uV3JpdGUgaW1wbGVtZW50cyBXcml0ZUxpc3RlbmVyIGludGVyZmFjZQpmdW5jIChmbCAqTWVtb3J5TGlzdGVuZXIpIE9uV3JpdGUoc3RvcmVLZXkgU3RvcmVLZXksIGtleSBbXWJ5dGUsIHZhbHVlIFtdYnl0ZSwgZGVsZXRlIGJvb2wpIGVycm9yIHsKCWZsLnN0YXRlQ2FjaGUgPSBhcHBlbmQoZmwuc3RhdGVDYWNoZSwgU3RvcmVLVlBhaXJ7CgkJU3RvcmVLZXk6IHN0b3JlS2V5Lk5hbWUoKSwKCQlEZWxldGU6ICAgZGVsZXRlLAoJCUtleTogICAgICBrZXksCgkJVmFsdWU6ICAgIHZhbHVlLAoJfSkKCXJldHVybiBuaWwKfQoKLy8gUG9wU3RhdGVDYWNoZSByZXR1cm5zIHRoZSBjdXJyZW50IHN0YXRlIGNhY2hlcyBhbmQgc2V0IHRvIG5pbApmdW5jIChmbCAqTWVtb3J5TGlzdGVuZXIpIFBvcFN0YXRlQ2FjaGUoKSBbXVN0b3JlS1ZQYWlyIHsKCXJlcyA6PSBmbC5zdGF0ZUNhY2hlCglmbC5zdGF0ZUNhY2hlID0gbmlsCglyZXR1cm4gcmVzCn0KCi8vIFN0b3JlS2V5IHJldHVybnMgdGhlIHN0b3JlS2V5IGl0IGxpc3RlbnMgdG8KZnVuYyAoZmwgKk1lbW9yeUxpc3RlbmVyKSBTdG9yZUtleSgpIFN0b3JlS2V5IHsKCXJldHVybiBmbC5rZXkKfQo="}}),l._v(" "),t("h3",{attrs:{id:"listenkvstore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#listenkvstore"}},[l._v("#")]),l._v(" ListenKVStore")]),l._v(" "),t("p",[l._v("We will create a new "),t("code",[l._v("Store")]),l._v(" type "),t("code",[l._v("listenkv.Store")]),l._v(" that the "),t("code",[l._v("MultiStore")]),l._v(" wraps around a "),t("code",[l._v("KVStore")]),l._v(" to enable state listening.\nWe can configure the "),t("code",[l._v("Store")]),l._v(" with a set of "),t("code",[l._v("WriteListener")]),l._v("s which stream the output to specific destinations.")]),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RvcmUgaW1wbGVtZW50cyB0aGUgS1ZTdG9yZSBpbnRlcmZhY2Ugd2l0aCBsaXN0ZW5pbmcgZW5hYmxlZC4KLy8gT3BlcmF0aW9ucyBhcmUgdHJhY2VkIG9uIGVhY2ggY29yZSBLVlN0b3JlIGNhbGwgYW5kIHdyaXR0ZW4gdG8gYW55IG9mIHRoZQovLyB1bmRlcmx5aW5nIGxpc3RlbmVycyB3aXRoIHRoZSBwcm9wZXIga2V5IGFuZCBvcGVyYXRpb24gcGVybWlzc2lvbnMKdHlwZSBTdG9yZSBzdHJ1Y3QgewogICAgcGFyZW50ICAgIHR5cGVzLktWU3RvcmUKICAgIGxpc3RlbmVycyBbXXR5cGVzLldyaXRlTGlzdGVuZXIKICAgIHBhcmVudFN0b3JlS2V5IHR5cGVzLlN0b3JlS2V5Cn0KCi8vIE5ld1N0b3JlIHJldHVybnMgYSByZWZlcmVuY2UgdG8gYSBuZXcgdHJhY2VLVlN0b3JlIGdpdmVuIGEgcGFyZW50Ci8vIEtWU3RvcmUgaW1wbGVtZW50YXRpb24gYW5kIGEgYnVmZmVyZWQgd3JpdGVyLgpmdW5jIE5ld1N0b3JlKHBhcmVudCB0eXBlcy5LVlN0b3JlLCBwc2sgdHlwZXMuU3RvcmVLZXksIGxpc3RlbmVycyBbXXR5cGVzLldyaXRlTGlzdGVuZXIpICpTdG9yZSB7CiAgICByZXR1cm4gJmFtcDtTdG9yZXtwYXJlbnQ6IHBhcmVudCwgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsIHBhcmVudFN0b3JlS2V5OiBwc2t9Cn0KCi8vIFNldCBpbXBsZW1lbnRzIHRoZSBLVlN0b3JlIGludGVyZmFjZS4gSXQgdHJhY2VzIGEgd3JpdGUgb3BlcmF0aW9uIGFuZAovLyBkZWxlZ2F0ZXMgdGhlIFNldCBjYWxsIHRvIHRoZSBwYXJlbnQgS1ZTdG9yZS4KZnVuYyAocyAqU3RvcmUpIFNldChrZXkgW11ieXRlLCB2YWx1ZSBbXWJ5dGUpIHsKICAgIHR5cGVzLkFzc2VydFZhbGlkS2V5KGtleSkKICAgIHMucGFyZW50LlNldChrZXksIHZhbHVlKQogICAgcy5vbldyaXRlKGZhbHNlLCBrZXksIHZhbHVlKQp9CgovLyBEZWxldGUgaW1wbGVtZW50cyB0aGUgS1ZTdG9yZSBpbnRlcmZhY2UuIEl0IHRyYWNlcyBhIHdyaXRlIG9wZXJhdGlvbiBhbmQKLy8gZGVsZWdhdGVzIHRoZSBEZWxldGUgY2FsbCB0byB0aGUgcGFyZW50IEtWU3RvcmUuCmZ1bmMgKHMgKlN0b3JlKSBEZWxldGUoa2V5IFtdYnl0ZSkgewogICAgcy5wYXJlbnQuRGVsZXRlKGtleSkKICAgIHMub25Xcml0ZSh0cnVlLCBrZXksIG5pbCkKfQoKLy8gb25Xcml0ZSB3cml0ZXMgYSBLVlN0b3JlIG9wZXJhdGlvbiB0byBhbGwgdGhlIFdyaXRlTGlzdGVuZXJzCmZ1bmMgKHMgKlN0b3JlKSBvbldyaXRlKGRlbGV0ZSBib29sLCBrZXksIHZhbHVlIFtdYnl0ZSkgewogICAgZm9yIF8sIGwgOj0gcmFuZ2Ugcy5saXN0ZW5lcnMgewogICAgICAgIGlmIGVyciA6PSBsLk9uV3JpdGUocy5wYXJlbnRTdG9yZUtleSwga2V5LCB2YWx1ZSwgZGVsZXRlKTsgZXJyICE9IG5pbCB7CiAgICAgICAgICAgIC8vIGxvZyBlcnJvcgogICAgICAgIH0KICAgIH0KfQo="}}),l._v(" "),t("h3",{attrs:{id:"multistore-interface-updates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multistore-interface-updates"}},[l._v("#")]),l._v(" MultiStore interface updates")]),l._v(" "),t("p",[l._v("We will update the "),t("code",[l._v("CommitMultiStore")]),l._v(" interface to allow us to wrap a set of listeners around a specific "),t("code",[l._v("KVStore")]),l._v(".")]),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBDb21taXRNdWx0aVN0b3JlIGludGVyZmFjZSB7CiAgICAuLi4KCiAgICAvLyBMaXN0ZW5pbmdFbmFibGVkIHJldHVybnMgaWYgbGlzdGVuaW5nIGlzIGVuYWJsZWQgZm9yIHRoZSBLVlN0b3JlIGJlbG9uZ2luZyB0aGUgcHJvdmlkZWQgU3RvcmVLZXkKICAgIExpc3RlbmluZ0VuYWJsZWQoa2V5IFN0b3JlS2V5KSBib29sCgogICAgLy8gQWRkTGlzdGVuZXJzIGFkZHMgV3JpdGVMaXN0ZW5lcnMgZm9yIHRoZSBLVlN0b3JlIGJlbG9uZ2luZyB0byB0aGUgcHJvdmlkZWQgU3RvcmVLZXkKICAgIC8vIEl0IGFwcGVuZHMgdGhlIGxpc3RlbmVycyB0byBhIGN1cnJlbnQgc2V0LCBpZiBvbmUgYWxyZWFkeSBleGlzdHMKICAgIEFkZExpc3RlbmVycyhrZXkgU3RvcmVLZXksIGxpc3RlbmVycyBbXVdyaXRlTGlzdGVuZXIpCn0K"}}),l._v(" "),t("h3",{attrs:{id:"multistore-implementation-updates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multistore-implementation-updates"}},[l._v("#")]),l._v(" MultiStore implementation updates")]),l._v(" "),t("p",[l._v("We will modify all of the "),t("code",[l._v("CommitMultiStore")]),l._v(" implementations to satisfy these new interfaces, and adjust the "),t("code",[l._v("rootmulti")]),l._v(" "),t("code",[l._v("GetKVStore")]),l._v(" method\nto wrap the returned "),t("code",[l._v("KVStore")]),l._v(" with a "),t("code",[l._v("listenkv.Store")]),l._v(" if listening is turned on for that "),t("code",[l._v("Store")]),l._v(".")]),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAocnMgKlN0b3JlKSBHZXRLVlN0b3JlKGtleSB0eXBlcy5TdG9yZUtleSkgdHlwZXMuS1ZTdG9yZSB7CiAgICBzdG9yZSA6PSBycy5zdG9yZXNba2V5XS4odHlwZXMuS1ZTdG9yZSkKCiAgICBpZiBycy5UcmFjaW5nRW5hYmxlZCgpIHsKICAgICAgICBzdG9yZSA9IHRyYWNla3YuTmV3U3RvcmUoc3RvcmUsIHJzLnRyYWNlV3JpdGVyLCBycy50cmFjZUNvbnRleHQpCiAgICB9CiAgICBpZiBycy5MaXN0ZW5pbmdFbmFibGVkKGtleSkgewogICAgICAgIHN0b3JlID0gbGlzdGVua3YuTmV3U3RvcmUoa2V5LCBzdG9yZSwgcnMubGlzdGVuZXJzW2tleV0pCiAgICB9CgogICAgcmV0dXJuIHN0b3JlCn0K"}}),l._v(" "),t("p",[l._v("We will also adjust the "),t("code",[l._v("rootmulti")]),l._v(" "),t("code",[l._v("CacheMultiStore")]),l._v(" method to wrap the stores with "),t("code",[l._v("listenkv.Store")]),l._v(" to enable listening when the cache layer writes.")]),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAocnMgKlN0b3JlKSBDYWNoZU11bHRpU3RvcmUoKSB0eXBlcy5DYWNoZU11bHRpU3RvcmUgewoJc3RvcmVzIDo9IG1ha2UobWFwW3R5cGVzLlN0b3JlS2V5XXR5cGVzLkNhY2hlV3JhcHBlcikKCWZvciBrLCB2IDo9IHJhbmdlIHJzLnN0b3JlcyB7CgkJc3RvcmUgOj0gdi4odHlwZXMuS1ZTdG9yZSkKCQkvLyBXaXJlIHRoZSBsaXN0ZW5rdi5TdG9yZSB0byBhbGxvdyBsaXN0ZW5lcnMgdG8gb2JzZXJ2ZSB0aGUgd3JpdGVzIGZyb20gdGhlIGNhY2hlIHN0b3JlLAoJCS8vIHNldCBzYW1lIGxpc3RlbmVycyBvbiBjYWNoZSBzdG9yZSB3aWxsIG9ic2VydmUgZHVwbGljYXRlZCB3cml0ZXMuCgkJaWYgcnMuTGlzdGVuaW5nRW5hYmxlZChrKSB7CgkJCXN0b3JlID0gbGlzdGVua3YuTmV3U3RvcmUoc3RvcmUsIGssIHJzLmxpc3RlbmVyc1trXSkKCQl9CgkJc3RvcmVzW2tdID0gc3RvcmUKCX0KCXJldHVybiBjYWNoZW11bHRpLk5ld1N0b3JlKHJzLmRiLCBzdG9yZXMsIHJzLmtleXNCeU5hbWUsIHJzLnRyYWNlV3JpdGVyLCBycy5nZXRUcmFjaW5nQ29udGV4dCgpKQp9Cg=="}}),l._v(" "),t("h3",{attrs:{id:"exposing-the-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exposing-the-data"}},[l._v("#")]),l._v(" Exposing the data")]),l._v(" "),t("h4",{attrs:{id:"streaming-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#streaming-service"}},[l._v("#")]),l._v(" Streaming service")]),l._v(" "),t("p",[l._v("We will introduce a new "),t("code",[l._v("StreamingService")]),l._v(" interface for exposing "),t("code",[l._v("WriteListener")]),l._v(" data streams to external consumers.\nIn addition to streaming state changes as "),t("code",[l._v("StoreKVPair")]),l._v("s, the interface satisfies an "),t("code",[l._v("ABCIListener")]),l._v(" interface that plugs\ninto the BaseApp and relays ABCI requests and responses so that the service can observe those block metadatas as well.")]),l._v(" "),t("p",[l._v("The "),t("code",[l._v("WriteListener")]),l._v("s of "),t("code",[l._v("StreamingService")]),l._v(" listens to the "),t("code",[l._v("rootmulti.Store")]),l._v(", which is only written into at commit event by the cache store of "),t("code",[l._v("deliverState")]),l._v(".")]),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQUJDSUxpc3RlbmVyIGludGVyZmFjZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgQUJDSSBtZXNzYWdlIHByb2Nlc3Npbmcgb2YgdGhlIEJhc2VBcHAKdHlwZSBBQkNJTGlzdGVuZXIgaW50ZXJmYWNlIHsKICAgIC8vIExpc3RlbkJlZ2luQmxvY2sgdXBkYXRlcyB0aGUgc3RyZWFtaW5nIHNlcnZpY2Ugd2l0aCB0aGUgbGF0ZXN0IEJlZ2luQmxvY2sgbWVzc2FnZXMKICAgIExpc3RlbkJlZ2luQmxvY2soY3R4IHR5cGVzLkNvbnRleHQsIHJlcSBhYmNpLlJlcXVlc3RCZWdpbkJsb2NrLCByZXMgYWJjaS5SZXNwb25zZUJlZ2luQmxvY2spIGVycm9yCiAgICAvLyBMaXN0ZW5FbmRCbG9jayB1cGRhdGVzIHRoZSBzdGVhbWluZyBzZXJ2aWNlIHdpdGggdGhlIGxhdGVzdCBFbmRCbG9jayBtZXNzYWdlcwogICAgTGlzdGVuRW5kQmxvY2soY3R4IHR5cGVzLkNvbnRleHQsIHJlcSBhYmNpLlJlcXVlc3RFbmRCbG9jaywgcmVzIGFiY2kuUmVzcG9uc2VFbmRCbG9jaykgZXJyb3IKICAgIC8vIExpc3RlbkRlbGl2ZXJUeCB1cGRhdGVzIHRoZSBzdGVhbWluZyBzZXJ2aWNlIHdpdGggdGhlIGxhdGVzdCBEZWxpdmVyVHggbWVzc2FnZXMKICAgIExpc3RlbkRlbGl2ZXJUeChjdHggdHlwZXMuQ29udGV4dCwgcmVxIGFiY2kuUmVxdWVzdERlbGl2ZXJUeCwgcmVzIGFiY2kuUmVzcG9uc2VEZWxpdmVyVHgpIGVycm9yCiAgICAvLyBMaXN0ZW5Db21taXQgdXBkYXRlcyB0aGUgc3RlYW1pbmcgc2VydmljZSB3aXRoIHRoZSBsYXRlc3QgQ29tbWl0IG1lc3NhZ2UsCiAgICAvLyBBbGwgdGhlIHN0YXRlIHdyaXRlcyBvZiBjdXJyZW50IGJsb2NrIHNob3VsZCBoYXZlIG5vdGlmaWVkIGJlZm9yZSB0aGlzIG1lc3NhZ2UuCiAgICBMaXN0ZW5Db21taXQoY3R4IHR5cGVzLkNvbnRleHQsIHJlcyBhYmNpLlJlc3BvbnNlQ29tbWl0KSBlcnJvcgp9CgovLyBTdHJlYW1pbmdTZXJ2aWNlIGludGVyZmFjZSBmb3IgcmVnaXN0ZXJpbmcgV3JpdGVMaXN0ZW5lcnMgd2l0aCB0aGUgQmFzZUFwcCBhbmQgdXBkYXRpbmcgdGhlIHNlcnZpY2Ugd2l0aCB0aGUgQUJDSSBtZXNzYWdlcyB1c2luZyB0aGUgaG9va3MKdHlwZSBTdHJlYW1pbmdTZXJ2aWNlIGludGVyZmFjZSB7CiAgICAvLyBTdHJlYW0gaXMgdGhlIHN0cmVhbWluZyBzZXJ2aWNlIGxvb3AsIGF3YWl0cyBrdiBwYWlycyBhbmQgd3JpdGVzIHRoZW0gdG8gYSBkZXN0aW5hdGlvbiBzdHJlYW0gb3IgZmlsZQogICAgU3RyZWFtKHdnICpzeW5jLldhaXRHcm91cCkgZXJyb3IKICAgIC8vIExpc3RlbmVycyByZXR1cm5zIHRoZSBzdHJlYW1pbmcgc2VydmljZSdzIGxpc3RlbmVycyBmb3IgdGhlIEJhc2VBcHAgdG8gcmVnaXN0ZXIKICAgIExpc3RlbmVycygpIG1hcFt0eXBlcy5TdG9yZUtleV1bXXN0b3JlLldyaXRlTGlzdGVuZXIKICAgIC8vIEFCQ0lMaXN0ZW5lciBpbnRlcmZhY2UgZm9yIGhvb2tpbmcgaW50byB0aGUgQUJDSSBtZXNzYWdlcyBmcm9tIGluc2lkZSB0aGUgQmFzZUFwcAogICAgQUJDSUxpc3RlbmVyCiAgICAvLyBDbG9zZXIgaW50ZXJmYWNlCiAgICBpby5DbG9zZXIKfQo="}}),l._v(" "),t("h4",{attrs:{id:"baseapp-registration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#baseapp-registration"}},[l._v("#")]),l._v(" BaseApp registration")]),l._v(" "),t("p",[l._v("We will add a new method to the "),t("code",[l._v("BaseApp")]),l._v(" to enable the registration of "),t("code",[l._v("StreamingService")]),l._v("s:")]),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU2V0U3RyZWFtaW5nU2VydmljZSBpcyB1c2VkIHRvIHNldCBhIHN0cmVhbWluZyBzZXJ2aWNlIGludG8gdGhlIEJhc2VBcHAgaG9va3MgYW5kIGxvYWQgdGhlIGxpc3RlbmVycyBpbnRvIHRoZSBtdWx0aXN0b3JlCmZ1bmMgKGFwcCAqQmFzZUFwcCkgU2V0U3RyZWFtaW5nU2VydmljZShzIFN0cmVhbWluZ1NlcnZpY2UpIHsKCS8vIGFkZCB0aGUgbGlzdGVuZXJzIGZvciBlYWNoIFN0b3JlS2V5Cglmb3Iga2V5LCBsaXMgOj0gcmFuZ2Ugcy5MaXN0ZW5lcnMoKSB7CgkJYXBwLmNtcy5BZGRMaXN0ZW5lcnMoa2V5LCBsaXMpCgl9CgkvLyByZWdpc3RlciB0aGUgU3RyZWFtaW5nU2VydmljZSB3aXRoaW4gdGhlIEJhc2VBcHAKCS8vIEJhc2VBcHAgd2lsbCBwYXNzIEJlZ2luQmxvY2ssIERlbGl2ZXJUeCwgYW5kIEVuZEJsb2NrIHJlcXVlc3RzIGFuZCByZXNwb25zZXMgdG8gdGhlIHN0cmVhbWluZyBzZXJ2aWNlcyB0byB1cGRhdGUgdGhlaXIgQUJDSSBjb250ZXh0CglhcHAuYWJjaUxpc3RlbmVycyA9IGFwcGVuZChhcHAuYWJjaUxpc3RlbmVycywgcykKfQo="}}),l._v(" "),t("p",[l._v("We will also modify the "),t("code",[l._v("BeginBlock")]),l._v(", "),t("code",[l._v("EndBlock")]),l._v(", and "),t("code",[l._v("DeliverTx")]),l._v(" methods to pass ABCI requests and responses to any streaming service hooks registered\nwith the "),t("code",[l._v("BaseApp")]),l._v(".")]),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpCYXNlQXBwKSBCZWdpbkJsb2NrKHJlcSBhYmNpLlJlcXVlc3RCZWdpbkJsb2NrKSAocmVzIGFiY2kuUmVzcG9uc2VCZWdpbkJsb2NrKSB7CgoJLi4uCgoJZGVmZXIgZnVuYygpIHsKCQkvLyBjYWxsIHRoZSBob29rcyB3aXRoIHRoZSBCZWdpbkJsb2NrIG1lc3NhZ2VzCgkJZm9yIF8sIHN0cmVhbWluZ0xpc3RlbmVyIDo9IHJhbmdlIGFwcC5hYmNpTGlzdGVuZXJzIHsKCQkJaWYgZXJyIDo9IHN0cmVhbWluZ0xpc3RlbmVyLkxpc3RlbkJlZ2luQmxvY2soYXBwLmRlbGl2ZXJTdGF0ZS5jdHgsIHJlcSwgcmVzKTsgZXJyICE9IG5pbCB7CgkJCQlwYW5pYyhzZGtlcnJvcnMuV3JhcGYoZXJyLCAmcXVvdDtCZWdpbkJsb2NrIGxpc3RlbmluZyBob29rIGZhaWxlZCwgaGVpZ2h0OiAlZCZxdW90OywgcmVxLkhlYWRlci5IZWlnaHQpKQoJCQl9CgkJfQoJfSgpCgoJcmV0dXJuIHJlcwp9Cg=="}}),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpCYXNlQXBwKSBFbmRCbG9jayhyZXEgYWJjaS5SZXF1ZXN0RW5kQmxvY2spIChyZXMgYWJjaS5SZXNwb25zZUVuZEJsb2NrKSB7CgoJLi4uCgogIGRlZmVyIGZ1bmMoKSB7CgkJLy8gQ2FsbCB0aGUgc3RyZWFtaW5nIHNlcnZpY2UgaG9va3Mgd2l0aCB0aGUgRW5kQmxvY2sgbWVzc2FnZXMKCQlmb3IgXywgc3RyZWFtaW5nTGlzdGVuZXIgOj0gcmFuZ2UgYXBwLmFiY2lMaXN0ZW5lcnMgewoJCQlpZiBlcnIgOj0gc3RyZWFtaW5nTGlzdGVuZXIuTGlzdGVuRW5kQmxvY2soYXBwLmRlbGl2ZXJTdGF0ZS5jdHgsIHJlcSwgcmVzKTsgZXJyICE9IG5pbCB7CgkJCQlwYW5pYyhzZGtlcnJvcnMuV3JhcGYoZXJyLCAmcXVvdDtFbmRCbG9jayBsaXN0ZW5pbmcgaG9vayBmYWlsZWQsIGhlaWdodDogJWQmcXVvdDssIHJlcS5IZWlnaHQpKQoJCQl9CgkJfQogIH0oKQoKCXJldHVybiByZXMKfQo="}}),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpCYXNlQXBwKSBEZWxpdmVyVHgocmVxIGFiY2kuUmVxdWVzdERlbGl2ZXJUeCkgKHJlcyBhYmNpLlJlc3BvbnNlRGVsaXZlclR4KSB7CgoJZGVmZXIgZnVuYygpIHsKCQkvLyBjYWxsIHRoZSBob29rcyB3aXRoIHRoZSBEZWxpdmVyVHggbWVzc2FnZXMKCQlmb3IgXywgc3RyZWFtaW5nTGlzdGVuZXIgOj0gcmFuZ2UgYXBwLmFiY2lMaXN0ZW5lcnMgewoJCQlpZiBlcnIgOj0gc3RyZWFtaW5nTGlzdGVuZXIuTGlzdGVuRGVsaXZlclR4KGFwcC5kZWxpdmVyU3RhdGUuY3R4LCByZXEsIHJlcyk7IGVyciAhPSBuaWwgewoJCQkJcGFuaWMoc2RrZXJyb3JzLldyYXAoZXJyLCAmcXVvdDtEZWxpdmVyVHggbGlzdGVuaW5nIGhvb2sgZmFpbGVkJnF1b3Q7KSkKCQkJfQoJCX0KCX0oKQoKCS4uLgoKCXJldHVybiByZXMKfQo="}}),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ZnVuYyAoYXBwICpCYXNlQXBwKSBDb21taXQoKSBhYmNpLlJlc3BvbnNlQ29tbWl0IHsKCWhlYWRlciA6PSBhcHAuZGVsaXZlclN0YXRlLmN0eC5CbG9ja0hlYWRlcigpCglyZXRhaW5IZWlnaHQgOj0gYXBwLkdldEJsb2NrUmV0ZW50aW9uSGVpZ2h0KGhlYWRlci5IZWlnaHQpCgoJLy8gV3JpdGUgdGhlIERlbGl2ZXJUeCBzdGF0ZSBpbnRvIGJyYW5jaGVkIHN0b3JhZ2UgYW5kIGNvbW1pdCB0aGUgTXVsdGlTdG9yZS4KCS8vIFRoZSB3cml0ZSB0byB0aGUgRGVsaXZlclR4IHN0YXRlIHdyaXRlcyBhbGwgc3RhdGUgdHJhbnNpdGlvbnMgdG8gdGhlIHJvb3QKCS8vIE11bHRpU3RvcmUgKGFwcC5jbXMpIHNvIHdoZW4gQ29tbWl0KCkgaXMgY2FsbGVkIGlzIHBlcnNpc3RzIHRob3NlIHZhbHVlcy4KCWFwcC5kZWxpdmVyU3RhdGUubXMuV3JpdGUoKQoJY29tbWl0SUQgOj0gYXBwLmNtcy5Db21taXQoKQoKCXJlcyA6PSBhYmNpLlJlc3BvbnNlQ29tbWl0ewoJCURhdGE6ICAgICAgICAgY29tbWl0SUQuSGFzaCwKCQlSZXRhaW5IZWlnaHQ6IHJldGFpbkhlaWdodCwKCX0KCgkvLyBjYWxsIHRoZSBob29rcyB3aXRoIHRoZSBDb21taXQgbWVzc2FnZQoJZm9yIF8sIHN0cmVhbWluZ0xpc3RlbmVyIDo9IHJhbmdlIGFwcC5hYmNpTGlzdGVuZXJzIHsKCQlpZiBlcnIgOj0gc3RyZWFtaW5nTGlzdGVuZXIuTGlzdGVuQ29tbWl0KGFwcC5kZWxpdmVyU3RhdGUuY3R4LCByZXMpOyBlcnIgIT0gbmlsIHsKCQkJcGFuaWMoc2RrZXJyb3JzLldyYXBmKGVyciwgJnF1b3Q7Q29tbWl0IGxpc3RlbmluZyBob29rIGZhaWxlZCwgaGVpZ2h0OiAlZCZxdW90OywgaGVhZGVyLkhlaWdodCkpCgkJfQoJfQoKCWFwcC5sb2dnZXIuSW5mbygmcXVvdDtjb21taXQgc3luY2VkJnF1b3Q7LCAmcXVvdDtjb21taXQmcXVvdDssIGZtdC5TcHJpbnRmKCZxdW90OyVYJnF1b3Q7LCBjb21taXRJRCkpCiAgLi4uCn0K"}}),l._v(" "),t("h4",{attrs:{id:"error-handling-and-async-consumers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error-handling-and-async-consumers"}},[l._v("#")]),l._v(" Error Handling And Async Consumers")]),l._v(" "),t("p",[t("code",[l._v("ABCIListener")]),l._v("s are called synchronously inside the consensus state machine, the returned error causes panic which in turn halt the consensus state machine. The implementer should be careful not to break consensus unexpectedly or slow down it too much.")]),l._v(" "),t("p",[l._v("For some async use cases, one can spawn a go-routine internanlly to avoid slow down consensus state machine, and handle the errors internally and always returns "),t("code",[l._v("nil")]),l._v(" to avoid halting consensus state machine on error.")]),l._v(" "),t("p",[l._v("Furthermore, for most of the cases, we only need to use the builtin file streamer to listen to state changes directly inside cosmos-sdk, the other consumers should subscribe to the file streamer output externally.")]),l._v(" "),t("h4",{attrs:{id:"file-streamer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-streamer"}},[l._v("#")]),l._v(" File Streamer")]),l._v(" "),t("p",[l._v("We provide a minimal filesystem based implementation inside cosmos-sdk, and provides options to write output files reliably, the output files can be further consumed by external consumers, so most of the state listeners actually don't need to live inside the sdk and node, which improves the node robustness and simplify sdk internals.")]),l._v(" "),t("p",[l._v("The file streamer can be wired in app like this:")]),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ZXhwb3NlU3RvcmVLZXlzIDo9IC4uLiAvLyBkZWNpZGUgdGhlIGtleSBsaXN0IHRvIGxpc3RlbgpzZXJ2aWNlLCBlcnIgOj0gZmlsZS5OZXdTdHJlYW1pbmdTZXJ2aWNlKHN0cmVhbWluZ0RpciwgJnF1b3Q7JnF1b3Q7LCBleHBvc2VTdG9yZUtleXMsIGFwcENvZGVjLCBsb2dnZXIpCmJBcHAuU2V0U3RyZWFtaW5nU2VydmljZShzZXJ2aWNlKQo="}}),l._v(" "),t("h4",{attrs:{id:"plugin-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugin-system"}},[l._v("#")]),l._v(" Plugin system")]),l._v(" "),t("p",[l._v("We propose a plugin architecture to load and run "),t("code",[l._v("StreamingService")]),l._v(" implementations. We will introduce a plugin\nloading/preloading system that is used to load, initialize, inject, run, and stop Cosmos-SDK plugins. Each plugin\nmust implement the following interface:")]),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUGx1Z2luIGlzIHRoZSBiYXNlIGludGVyZmFjZSBmb3IgYWxsIGtpbmRzIG9mIGNvc21vcy1zZGsgcGx1Z2lucwovLyBJdCB3aWxsIGJlIGluY2x1ZGVkIGluIGludGVyZmFjZXMgb2YgZGlmZmVyZW50IFBsdWdpbnMKdHlwZSBQbHVnaW4gaW50ZXJmYWNlIHsKCS8vIE5hbWUgc2hvdWxkIHJldHVybiB1bmlxdWUgbmFtZSBvZiB0aGUgcGx1Z2luCglOYW1lKCkgc3RyaW5nCgoJLy8gVmVyc2lvbiByZXR1cm5zIGN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgcGx1Z2luCglWZXJzaW9uKCkgc3RyaW5nCgoJLy8gSW5pdCBpcyBjYWxsZWQgb25jZSB3aGVuIHRoZSBQbHVnaW4gaXMgYmVpbmcgbG9hZGVkCgkvLyBUaGUgcGx1Z2luIGlzIHBhc3NlZCB0aGUgQXBwT3B0aW9ucyBmb3IgY29uZmlndXJhdGlvbgoJLy8gQSBwbHVnaW4gd2lsbCBub3QgbmVjZXNzYXJpbHkgaGF2ZSBhIGZ1bmN0aW9uYWwgSW5pdAoJSW5pdChlbnYgc2VydmVyVHlwZXMuQXBwT3B0aW9ucykgZXJyb3IKCgkvLyBDbG9zZXIgaW50ZXJmYWNlIGZvciBzaHV0dGluZyBkb3duIHRoZSBwbHVnaW4gcHJvY2VzcwoJaW8uQ2xvc2VyCn0K"}}),l._v(" "),t("p",[l._v("The "),t("code",[l._v("Name")]),l._v(" method returns a plugin's name.\nThe "),t("code",[l._v("Version")]),l._v(" method returns a plugin's version.\nThe "),t("code",[l._v("Init")]),l._v(" method initializes a plugin with the provided "),t("code",[l._v("AppOptions")]),l._v(".\nThe io.Closer is used to shut down the plugin service.")]),l._v(" "),t("p",[l._v("For the purposes of this ADR we introduce a single kind of plugin- a state streaming plugin.\nWe will define a "),t("code",[l._v("StateStreamingPlugin")]),l._v(" interface which extends the above "),t("code",[l._v("Plugin")]),l._v(" interface to support a state streaming service.")]),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RhdGVTdHJlYW1pbmdQbHVnaW4gaW50ZXJmYWNlIGZvciBwbHVnaW5zIHRoYXQgbG9hZCBhIGJhc2VhcHAuU3RyZWFtaW5nU2VydmljZSBvbnRvIGEgYmFzZWFwcC5CYXNlQXBwCnR5cGUgU3RhdGVTdHJlYW1pbmdQbHVnaW4gaW50ZXJmYWNlIHsKCS8vIFJlZ2lzdGVyIGNvbmZpZ3VyZXMgYW5kIHJlZ2lzdGVycyB0aGUgcGx1Z2luIHN0cmVhbWluZyBzZXJ2aWNlIHdpdGggdGhlIEJhc2VBcHAKCVJlZ2lzdGVyKGJBcHAgKmJhc2VhcHAuQmFzZUFwcCwgbWFyc2hhbGxlciBjb2RlYy5CaW5hcnlDb2RlYywga2V5cyBtYXBbc3RyaW5nXSp0eXBlcy5LVlN0b3JlS2V5KSBlcnJvcgoKCS8vIFN0YXJ0IHN0YXJ0cyB0aGUgYmFja2dyb3VuZCBzdHJlYW1pbmcgcHJvY2VzcyBvZiB0aGUgcGx1Z2luIHN0cmVhbWluZyBzZXJ2aWNlCglTdGFydCh3ZyAqc3luYy5XYWl0R3JvdXApIGVycm9yCgoJLy8gUGx1Z2luIGlzIHRoZSBiYXNlIFBsdWdpbiBpbnRlcmZhY2UKCVBsdWdpbgp9Cg=="}}),l._v(" "),t("p",[l._v("The "),t("code",[l._v("Register")]),l._v(" method is used during App construction to register the plugin's streaming service with an App's BaseApp using the BaseApp's "),t("code",[l._v("SetStreamingService")]),l._v(" method.\nThe "),t("code",[l._v("Start")]),l._v(" method is used during App construction to start the registered plugin streaming services and maintain synchronization with them.")]),l._v(" "),t("p",[l._v("e.g. in "),t("code",[l._v("NewSimApp")]),l._v(":")]),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBOZXdTaW1BcHAoCglsb2dnZXIgbG9nLkxvZ2dlciwKCWRiIGRibS5EQiwKCXRyYWNlU3RvcmUgaW8uV3JpdGVyLAoJbG9hZExhdGVzdCBib29sLAoJYXBwT3B0cyBzZXJ2ZXJ0eXBlcy5BcHBPcHRpb25zLAoJYmFzZUFwcE9wdGlvbnMgLi4uZnVuYygqYmFzZWFwcC5CYXNlQXBwKSwKKSAqU2ltQXBwIHsKCgkuLi4KCglrZXlzIDo9IHNkay5OZXdLVlN0b3JlS2V5cygKCWF1dGh0eXBlcy5TdG9yZUtleSwgYmFua3R5cGVzLlN0b3JlS2V5LCBzdGFraW5ndHlwZXMuU3RvcmVLZXksCgltaW50dHlwZXMuU3RvcmVLZXksIGRpc3RydHlwZXMuU3RvcmVLZXksIHNsYXNoaW5ndHlwZXMuU3RvcmVLZXksCglnb3Z0eXBlcy5TdG9yZUtleSwgcGFyYW1zdHlwZXMuU3RvcmVLZXksIGliY2hvc3QuU3RvcmVLZXksIHVwZ3JhZGV0eXBlcy5TdG9yZUtleSwKCWV2aWRlbmNldHlwZXMuU3RvcmVLZXksIGliY3RyYW5zZmVydHlwZXMuU3RvcmVLZXksIGNhcGFiaWxpdHl0eXBlcy5TdG9yZUtleSwKCSkKCglwbHVnaW5zT25LZXkgOj0gZm10LlNwcmludGYoJnF1b3Q7JXMuJXMmcXVvdDssIHBsdWdpbi5QTFVHSU5TX1RPTUxfS0VZLCBwbHVnaW4uUExVR0lOU19PTl9UT01MX0tFWSkKCWlmIGNhc3QuVG9Cb29sKGFwcE9wdHMuR2V0KHBsdWdpbnNPbktleSkpIHsKCQkvLyB0aGlzIGxvYWRzIHRoZSBwcmVsb2FkZWQgYW5kIGFueSBwbHVnaW5zIGZvdW5kIGluIGBwbHVnaW5zLmRpcmAKCQlwbHVnaW5Mb2FkZXIsIGVyciA6PSBsb2FkZXIuTmV3UGx1Z2luTG9hZGVyKGFwcE9wdHMsIGxvZ2dlcikKCQlpZiBlcnIgIT0gbmlsIHsKCQkJLy8gaGFuZGxlIGVycm9yCgkJfQoKCQkvLyBpbml0aWFsaXplIHRoZSBsb2FkZWQgcGx1Z2lucwoJCWlmIGVyciA6PSBwbHVnaW5Mb2FkZXIuSW5pdGlhbGl6ZSgpOyBlcnIgIT0gbmlsIHsKCQkJLy8gaGFuZGxlIGVycm9yCgkJfQoKCQkvLyByZWdpc3RlciB0aGUgcGx1Z2luKHMpIHdpdGggdGhlIEJhc2VBcHAKCQlpZiBlcnIgOj0gcGx1Z2luTG9hZGVyLkluamVjdChiQXBwLCBhcHBDb2RlYywga2V5cyk7IGVyciAhPSBuaWwgewoJCQkvLyBoYW5kbGUgZXJyb3IKCQl9CgoJCS8vIHN0YXJ0IHRoZSBwbHVnaW4gc2VydmljZXMsIG9wdGlvbmFsbHkgdXNlIHdnIHRvIHN5bmNocm9uaXplIHNodXRkb3duIHVzaW5nIGlvLkNsb3NlcgoJCXdnIDo9IG5ldyhzeW5jLldhaXRHcm91cCkKCQlpZiBlcnIgOj0gcGx1Z2luTG9hZGVyLlN0YXJ0KHdnKTsgZXJyICE9IG5pbCB7CgkJCS8vIGhhbmRsZXIgZXJyb3IKCQl9Cgl9CgoJLi4uCgoJcmV0dXJuIGFwcAp9Cg=="}}),l._v(" "),t("h4",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[l._v("#")]),l._v(" Configuration")]),l._v(" "),t("p",[l._v("The plugin system will be configured within an app's app.toml file.")]),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"W3BsdWdpbnNdCiAgICBvbiA9IGZhbHNlICMgdHVybiB0aGUgcGx1Z2luIHN5c3RlbSwgYXMgYSB3aG9sZSwgb24gb3Igb2ZmCiAgICBlbmFibGVkID0gWyZxdW90O2xpc3QmcXVvdDssICZxdW90O29mJnF1b3Q7LCAmcXVvdDtwbHVnaW4mcXVvdDssICZxdW90O25hbWVzJnF1b3Q7LCAmcXVvdDt0byZxdW90OywgJnF1b3Q7ZW5hYmxlJnF1b3Q7XQogICAgZGlyID0gJnF1b3Q7dGhlIGRpcmVjdG9yeSB0byBsb2FkIG5vbi1wcmVsb2FkZWQgcGx1Z2lucyBmcm9tOyBkZWZhdWx0cyB0byBjb3Ntb3Mtc2RrL3BsdWdpbi9wbHVnaW5zJnF1b3Q7Cg=="}}),l._v(" "),t("p",[l._v("There will be three parameters for configuring the plugin system: "),t("code",[l._v("plugins.on")]),l._v(", "),t("code",[l._v("plugins.enabled")]),l._v(" and "),t("code",[l._v("plugins.dir")]),l._v(".\n"),t("code",[l._v("plugins.on")]),l._v(" is a bool that turns on or off the plugin system at large, "),t("code",[l._v("plugins.dir")]),l._v(" directs the system to a directory\nto load plugins from, and "),t("code",[l._v("plugins.enabled")]),l._v(" provides "),t("code",[l._v("opt-in")]),l._v(" semantics to plugin names to enable (including preloaded plugins).")]),l._v(" "),t("p",[l._v("Configuration of a given plugin is ultimately specific to the plugin, but we will introduce some standards here:")]),l._v(" "),t("p",[l._v("Plugin TOML configuration should be split into separate sub-tables for each kind of plugin (e.g. "),t("code",[l._v("plugins.streaming")]),l._v(").")]),l._v(" "),t("p",[l._v("Within these sub-tables, the parameters for a specific plugin of that kind are included in another sub-table (e.g. "),t("code",[l._v("plugins.streaming.file")]),l._v(").\nIt is generally expected, but not required, that a streaming service plugin can be configured with a set of store keys\n(e.g. "),t("code",[l._v("plugins.streaming.file.keys")]),l._v(") for the stores it listens to and a flag (e.g. "),t("code",[l._v("plugins.streaming.file.halt_app_on_delivery_error")]),l._v(")\nthat signifies whether the service operates in a fire-and-forget capacity, or stop the BaseApp when an error occurs in\nany of "),t("code",[l._v("ListenBeginBlock")]),l._v(", "),t("code",[l._v("ListenEndBlock")]),l._v(" and "),t("code",[l._v("ListenDeliverTx")]),l._v(".")]),l._v(" "),t("p",[l._v("e.g.")]),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"W3BsdWdpbnNdCiAgICBvbiA9IGZhbHNlICMgdHVybiB0aGUgcGx1Z2luIHN5c3RlbSwgYXMgYSB3aG9sZSwgb24gb3Igb2ZmCiAgICBlbmFibGVkID0gWyZxdW90O2xpc3QmcXVvdDssICZxdW90O29mJnF1b3Q7LCAmcXVvdDtwbHVnaW4mcXVvdDssICZxdW90O25hbWVzJnF1b3Q7LCAmcXVvdDt0byZxdW90OywgJnF1b3Q7ZW5hYmxlJnF1b3Q7XQogICAgZGlyID0gJnF1b3Q7dGhlIGRpcmVjdG9yeSB0byBsb2FkIG5vbi1wcmVsb2FkZWQgcGx1Z2lucyBmcm9tOyBkZWZhdWx0cyB0byAmcXVvdDsKICAgIFtwbHVnaW5zLnN0cmVhbWluZ10gIyBhIG1hcHBpbmcgb2YgcGx1Z2luLXNwZWNpZmljIHN0cmVhbWluZyBzZXJ2aWNlIHBhcmFtZXRlcnMsIG1hcHBlZCB0byB0aGVpciBwbHVnaW4gbmFtZQogICAgICAgIFtwbHVnaW5zLnN0cmVhbWluZy5maWxlXSAjIHRoZSBzcGVjaWZpYyBwYXJhbWV0ZXJzIGZvciB0aGUgZmlsZSBzdHJlYW1pbmcgc2VydmljZSBwbHVnaW4KICAgICAgICAgICAga2V5cyA9IFsmcXVvdDtsaXN0JnF1b3Q7LCAmcXVvdDtvZiZxdW90OywgJnF1b3Q7c3RvcmUmcXVvdDssICZxdW90O2tleXMmcXVvdDssICZxdW90O3dlJnF1b3Q7LCAmcXVvdDt3YW50JnF1b3Q7LCAmcXVvdDt0byZxdW90OywgJnF1b3Q7ZXhwb3NlJnF1b3Q7LCAmcXVvdDtmb3ImcXVvdDssICZxdW90O3RoaXMmcXVvdDssICZxdW90O3N0cmVhbWluZyZxdW90OywgJnF1b3Q7c2VydmljZSZxdW90O10KICAgICAgICAgICAgd3JpdGVfZGlyID0gJnF1b3Q7cGF0aCB0byB0aGUgd3JpdGUgZGlyZWN0b3J5JnF1b3Q7CiAgICAgICAgICAgIHByZWZpeCA9ICZxdW90O29wdGlvbmFsIHByZWZpeCB0byBwcmVwZW5kIHRvIHRoZSBnZW5lcmF0ZWQgZmlsZSBuYW1lcyZxdW90OwogICAgICAgICAgICBoYWx0X2FwcF9vbl9kZWxpdmVyeV9lcnJvciA9ICZxdW90O2ZhbHNlJnF1b3Q7ICMgZmFsc2UgPT0gZmlyZS1hbmQtZm9yZ2V0OyB0cnVlID09IHN0b3AgdGhlIGFwcGxpY2F0aW9uCiAgICAgICAgW3BsdWdpbnMuc3RyZWFtaW5nLmthZmthXQogICAgICAgICAgICBrZXlzID0gW10KICAgICAgICAgICAgdG9waWNfcHJlZml4ID0gJnF1b3Q7YmxvY2smcXVvdDsgIyBPcHRpb25hbCBwcmVmaXggZm9yIHRvcGljIG5hbWVzIHdoZXJlIGRhdGEgd2lsbCBiZSBzdG9yZWQuCiAgICAgICAgICAgIGZsdXNoX3RpbWVvdXRfbXMgPSA1MDAwICMgRmx1c2ggYW5kIHdhaXQgZm9yIG91dHN0YW5kaW5nIG1lc3NhZ2VzIGFuZCByZXF1ZXN0cyB0byBjb21wbGV0ZSBkZWxpdmVyeSB3aGVuIGNhbGxpbmcgYFN0cmVhbWluZ1NlcnZpY2UuQ2xvc2UoKS4gKG1pbGxpc2Vjb25kcykKICAgICAgICAgICAgaGFsdF9hcHBfb25fZGVsaXZlcnlfZXJyb3IgPSB0cnVlICMgV2hldGhlciBvciBub3QgdG8gaGFsdCB0aGUgYXBwbGljYXRpb24gd2hlbiBwbHVnaW4gZmFpbHMgdG8gZGVsaXZlciBtZXNzYWdlKHMpLgogICAgICAgIC4uLgo="}}),l._v(" "),t("h4",{attrs:{id:"encoding-and-decoding-streams"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#encoding-and-decoding-streams"}},[l._v("#")]),l._v(" Encoding and decoding streams")]),l._v(" "),t("p",[l._v("ADR-038 introduces the interfaces and types for streaming state changes out from KVStores, associating this\ndata with their related ABCI requests and responses, and registering a service for consuming this data and streaming it to some destination in a final format.\nInstead of prescribing a final data format in this ADR, it is left to a specific plugin implementation to define and document this format.\nWe take this approach because flexibility in the final format is necessary to support a wide range of streaming service plugins. For example,\nthe data format for a streaming service that writes the data out to a set of files will differ from the data format that is written to a Kafka topic.")]),l._v(" "),t("h2",{attrs:{id:"consequences"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[l._v("#")]),l._v(" Consequences")]),l._v(" "),t("p",[l._v("These changes will provide a means of subscribing to KVStore state changes in real time.")]),l._v(" "),t("h3",{attrs:{id:"backwards-compatibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[l._v("#")]),l._v(" Backwards Compatibility")]),l._v(" "),t("ul",[t("li",[l._v("This ADR changes the "),t("code",[l._v("CommitMultiStore")]),l._v(" interface, implementations supporting the previous version of these interfaces will not support the new ones")])]),l._v(" "),t("h3",{attrs:{id:"positive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[l._v("#")]),l._v(" Positive")]),l._v(" "),t("ul",[t("li",[l._v("Ability to listen to KVStore state changes in real time and expose these events to external consumers")])]),l._v(" "),t("h3",{attrs:{id:"negative"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[l._v("#")]),l._v(" Negative")]),l._v(" "),t("ul",[t("li",[l._v("Changes "),t("code",[l._v("CommitMultiStore")]),l._v("interface")])]),l._v(" "),t("h3",{attrs:{id:"neutral"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[l._v("#")]),l._v(" Neutral")]),l._v(" "),t("ul",[t("li",[l._v("Introduces additional- but optional- complexity to configuring and running a cosmos application")]),l._v(" "),t("li",[l._v("If an application developer opts to use these features to expose data, they need to be aware of the ramifications/risks of that data exposure as it pertains to the specifics of their application")])])],1)}),[],!1,null,null,null);e.default=c.exports}}]);