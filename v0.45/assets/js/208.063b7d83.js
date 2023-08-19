(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{738:function(e,c,s){"use strict";s.r(c);var a=s(1),t=Object(a.a)({},(function(){var e=this,c=e.$createElement,s=e._self._c||c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"keepers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keepers"}},[e._v("#")]),e._v(" Keepers")]),e._v(" "),s("p",[e._v("The bank module provides these exported keeper interfaces that can be\npassed to other modules that read or update account balances. Modules\nshould use the least-permissive interface that provides the functionality they\nrequire.")]),e._v(" "),s("p",[e._v("Best practices dictate careful review of "),s("code",[e._v("bank")]),e._v(" module code to ensure that\npermissions are limited in the way that you expect.")]),e._v(" "),s("h2",{attrs:{id:"blocklisting-addresses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blocklisting-addresses"}},[e._v("#")]),e._v(" Blocklisting Addresses")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("x/bank")]),e._v(" module accepts a map of addresses that are considered blocklisted\nfrom directly and explicitly receiving funds through means such as "),s("code",[e._v("MsgSend")]),e._v(" and\n"),s("code",[e._v("MsgMultiSend")]),e._v(" and direct API calls like "),s("code",[e._v("SendCoinsFromModuleToAccount")]),e._v(".")]),e._v(" "),s("p",[e._v("Typically, these addresses are module accounts. If these addresses receive funds\noutside the expected rules of the state machine, invariants are likely to be\nbroken and could result in a halted network.")]),e._v(" "),s("p",[e._v("By providing the "),s("code",[e._v("x/bank")]),e._v(" module with a blocklisted set of addresses, an error occurs for the operation if a user or client attempts to directly or indirectly send funds to a blocklisted account, for example, by using "),s("a",{attrs:{href:"http://docs.cosmos.network/master/ibc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"common-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#common-types"}},[e._v("#")]),e._v(" Common Types")]),e._v(" "),s("h3",{attrs:{id:"input"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[e._v("#")]),e._v(" Input")]),e._v(" "),s("p",[e._v("An input of a multiparty transfer")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gSW5wdXQgbW9kZWxzIHRyYW5zYWN0aW9uIGlucHV0LgptZXNzYWdlIElucHV0IHsKICBzdHJpbmcgICBhZGRyZXNzICAgICAgICAgICAgICAgICAgICAgICAgPSAxOwogIHJlcGVhdGVkIGNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbiBjb2lucyA9IDI7Cn0K"}}),e._v(" "),s("h3",{attrs:{id:"output"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[e._v("#")]),e._v(" Output")]),e._v(" "),s("p",[e._v("An output of a multiparty transfer.")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gT3V0cHV0IG1vZGVscyB0cmFuc2FjdGlvbiBvdXRwdXRzLgptZXNzYWdlIE91dHB1dCB7CiAgc3RyaW5nICAgYWRkcmVzcyAgICAgICAgICAgICAgICAgICAgICAgID0gMTsKICByZXBlYXRlZCBjb3Ntb3MuYmFzZS52MWJldGExLkNvaW4gY29pbnMgPSAyOwp9Cg=="}}),e._v(" "),s("h2",{attrs:{id:"basekeeper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basekeeper"}},[e._v("#")]),e._v(" BaseKeeper")]),e._v(" "),s("p",[e._v("The base keeper provides full-permission access: the ability to arbitrary modify any account's balance and mint or burn coins.")]),e._v(" "),s("p",[e._v("Restricted permission to mint per module could be achieved by using baseKeeper with "),s("code",[e._v("WithMintCoinsRestriction")]),e._v(" to give specific restrictions to mint (e.g. only minting certain denom).")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gS2VlcGVyIGRlZmluZXMgYSBtb2R1bGUgaW50ZXJmYWNlIHRoYXQgZmFjaWxpdGF0ZXMgdGhlIHRyYW5zZmVyIG9mIGNvaW5zCi8vIGJldHdlZW4gYWNjb3VudHMuCnR5cGUgS2VlcGVyIGludGVyZmFjZSB7CiAgICBTZW5kS2VlcGVyCgogICAgSW5pdEdlbmVzaXMoc2RrLkNvbnRleHQsICp0eXBlcy5HZW5lc2lzU3RhdGUpCiAgICBFeHBvcnRHZW5lc2lzKHNkay5Db250ZXh0KSAqdHlwZXMuR2VuZXNpc1N0YXRlCgogICAgR2V0U3VwcGx5KGN0eCBzZGsuQ29udGV4dCwgZGVub20gc3RyaW5nKSBzZGsuQ29pbgogICAgR2V0UGFnaW5hdGVkVG90YWxTdXBwbHkoY3R4IHNkay5Db250ZXh0LCBwYWdpbmF0aW9uICpxdWVyeS5QYWdlUmVxdWVzdCkgKHNkay5Db2lucywgKnF1ZXJ5LlBhZ2VSZXNwb25zZSwgZXJyb3IpCiAgICBJdGVyYXRlVG90YWxTdXBwbHkoY3R4IHNkay5Db250ZXh0LCBjYiBmdW5jKHNkay5Db2luKSBib29sKQogICAgR2V0RGVub21NZXRhRGF0YShjdHggc2RrLkNvbnRleHQsIGRlbm9tIHN0cmluZykgKHR5cGVzLk1ldGFkYXRhLCBib29sKQogICAgU2V0RGVub21NZXRhRGF0YShjdHggc2RrLkNvbnRleHQsIGRlbm9tTWV0YURhdGEgdHlwZXMuTWV0YWRhdGEpCiAgICBJdGVyYXRlQWxsRGVub21NZXRhRGF0YShjdHggc2RrLkNvbnRleHQsIGNiIGZ1bmModHlwZXMuTWV0YWRhdGEpIGJvb2wpCgogICAgU2VuZENvaW5zRnJvbU1vZHVsZVRvQWNjb3VudChjdHggc2RrLkNvbnRleHQsIHNlbmRlck1vZHVsZSBzdHJpbmcsIHJlY2lwaWVudEFkZHIgc2RrLkFjY0FkZHJlc3MsIGFtdCBzZGsuQ29pbnMpIGVycm9yCiAgICBTZW5kQ29pbnNGcm9tTW9kdWxlVG9Nb2R1bGUoY3R4IHNkay5Db250ZXh0LCBzZW5kZXJNb2R1bGUsIHJlY2lwaWVudE1vZHVsZSBzdHJpbmcsIGFtdCBzZGsuQ29pbnMpIGVycm9yCiAgICBTZW5kQ29pbnNGcm9tQWNjb3VudFRvTW9kdWxlKGN0eCBzZGsuQ29udGV4dCwgc2VuZGVyQWRkciBzZGsuQWNjQWRkcmVzcywgcmVjaXBpZW50TW9kdWxlIHN0cmluZywgYW10IHNkay5Db2lucykgZXJyb3IKICAgIERlbGVnYXRlQ29pbnNGcm9tQWNjb3VudFRvTW9kdWxlKGN0eCBzZGsuQ29udGV4dCwgc2VuZGVyQWRkciBzZGsuQWNjQWRkcmVzcywgcmVjaXBpZW50TW9kdWxlIHN0cmluZywgYW10IHNkay5Db2lucykgZXJyb3IKICAgIFVuZGVsZWdhdGVDb2luc0Zyb21Nb2R1bGVUb0FjY291bnQoY3R4IHNkay5Db250ZXh0LCBzZW5kZXJNb2R1bGUgc3RyaW5nLCByZWNpcGllbnRBZGRyIHNkay5BY2NBZGRyZXNzLCBhbXQgc2RrLkNvaW5zKSBlcnJvcgogICAgTWludENvaW5zKGN0eCBzZGsuQ29udGV4dCwgbW9kdWxlTmFtZSBzdHJpbmcsIGFtdCBzZGsuQ29pbnMpIGVycm9yCiAgICBCdXJuQ29pbnMoY3R4IHNkay5Db250ZXh0LCBtb2R1bGVOYW1lIHN0cmluZywgYW10IHNkay5Db2lucykgZXJyb3IKCiAgICBEZWxlZ2F0ZUNvaW5zKGN0eCBzZGsuQ29udGV4dCwgZGVsZWdhdG9yQWRkciwgbW9kdWxlQWNjQWRkciBzZGsuQWNjQWRkcmVzcywgYW10IHNkay5Db2lucykgZXJyb3IKICAgIFVuZGVsZWdhdGVDb2lucyhjdHggc2RrLkNvbnRleHQsIG1vZHVsZUFjY0FkZHIsIGRlbGVnYXRvckFkZHIgc2RrLkFjY0FkZHJlc3MsIGFtdCBzZGsuQ29pbnMpIGVycm9yCgogICAgdHlwZXMuUXVlcnlTZXJ2ZXIKfQo="}}),e._v(" "),s("h2",{attrs:{id:"sendkeeper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sendkeeper"}},[e._v("#")]),e._v(" SendKeeper")]),e._v(" "),s("p",[e._v("The send keeper provides access to account balances and the ability to transfer coins between\naccounts. The send keeper does not alter the total supply (mint or burn coins).")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU2VuZEtlZXBlciBkZWZpbmVzIGEgbW9kdWxlIGludGVyZmFjZSB0aGF0IGZhY2lsaXRhdGVzIHRoZSB0cmFuc2ZlciBvZiBjb2lucwovLyBiZXR3ZWVuIGFjY291bnRzIHdpdGhvdXQgdGhlIHBvc3NpYmlsaXR5IG9mIGNyZWF0aW5nIGNvaW5zLgp0eXBlIFNlbmRLZWVwZXIgaW50ZXJmYWNlIHsKICAgIFZpZXdLZWVwZXIKCiAgICBJbnB1dE91dHB1dENvaW5zKGN0eCBzZGsuQ29udGV4dCwgaW5wdXRzIFtddHlwZXMuSW5wdXQsIG91dHB1dHMgW110eXBlcy5PdXRwdXQpIGVycm9yCiAgICBTZW5kQ29pbnMoY3R4IHNkay5Db250ZXh0LCBmcm9tQWRkciBzZGsuQWNjQWRkcmVzcywgdG9BZGRyIHNkay5BY2NBZGRyZXNzLCBhbXQgc2RrLkNvaW5zKSBlcnJvcgoKICAgIEdldFBhcmFtcyhjdHggc2RrLkNvbnRleHQpIHR5cGVzLlBhcmFtcwogICAgU2V0UGFyYW1zKGN0eCBzZGsuQ29udGV4dCwgcGFyYW1zIHR5cGVzLlBhcmFtcykKCiAgICBJc1NlbmRFbmFibGVkQ29pbihjdHggc2RrLkNvbnRleHQsIGNvaW4gc2RrLkNvaW4pIGJvb2wKICAgIElzU2VuZEVuYWJsZWRDb2lucyhjdHggc2RrLkNvbnRleHQsIGNvaW5zIC4uLnNkay5Db2luKSBlcnJvcgoKICAgIEJsb2NrZWRBZGRyKGFkZHIgc2RrLkFjY0FkZHJlc3MpIGJvb2wKfQo="}}),e._v(" "),s("h2",{attrs:{id:"viewkeeper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#viewkeeper"}},[e._v("#")]),e._v(" ViewKeeper")]),e._v(" "),s("p",[e._v("The view keeper provides read-only access to account balances. The view keeper does not have balance alteration functionality. All balance lookups are "),s("code",[e._v("O(1)")]),e._v(".")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVmlld0tlZXBlciBkZWZpbmVzIGEgbW9kdWxlIGludGVyZmFjZSB0aGF0IGZhY2lsaXRhdGVzIHJlYWQgb25seSBhY2Nlc3MgdG8KLy8gYWNjb3VudCBiYWxhbmNlcy4KdHlwZSBWaWV3S2VlcGVyIGludGVyZmFjZSB7CiAgICBWYWxpZGF0ZUJhbGFuY2UoY3R4IHNkay5Db250ZXh0LCBhZGRyIHNkay5BY2NBZGRyZXNzKSBlcnJvcgogICAgSGFzQmFsYW5jZShjdHggc2RrLkNvbnRleHQsIGFkZHIgc2RrLkFjY0FkZHJlc3MsIGFtdCBzZGsuQ29pbikgYm9vbAoKICAgIEdldEFsbEJhbGFuY2VzKGN0eCBzZGsuQ29udGV4dCwgYWRkciBzZGsuQWNjQWRkcmVzcykgc2RrLkNvaW5zCiAgICBHZXRBY2NvdW50c0JhbGFuY2VzKGN0eCBzZGsuQ29udGV4dCkgW110eXBlcy5CYWxhbmNlCiAgICBHZXRCYWxhbmNlKGN0eCBzZGsuQ29udGV4dCwgYWRkciBzZGsuQWNjQWRkcmVzcywgZGVub20gc3RyaW5nKSBzZGsuQ29pbgogICAgTG9ja2VkQ29pbnMoY3R4IHNkay5Db250ZXh0LCBhZGRyIHNkay5BY2NBZGRyZXNzKSBzZGsuQ29pbnMKICAgIFNwZW5kYWJsZUNvaW5zKGN0eCBzZGsuQ29udGV4dCwgYWRkciBzZGsuQWNjQWRkcmVzcykgc2RrLkNvaW5zCgogICAgSXRlcmF0ZUFjY291bnRCYWxhbmNlcyhjdHggc2RrLkNvbnRleHQsIGFkZHIgc2RrLkFjY0FkZHJlc3MsIGNiIGZ1bmMoY29pbiBzZGsuQ29pbikgKHN0b3AgYm9vbCkpCiAgICBJdGVyYXRlQWxsQmFsYW5jZXMoY3R4IHNkay5Db250ZXh0LCBjYiBmdW5jKGFkZHJlc3Mgc2RrLkFjY0FkZHJlc3MsIGNvaW4gc2RrLkNvaW4pIChzdG9wIGJvb2wpKQp9Cg=="}})],1)}),[],!1,null,null,null);c.default=t.exports}}]);