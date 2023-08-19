(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{625:function(t,e,a){"use strict";a.r(e);var s=a(1),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"adr-037-governance-split-votes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-037-governance-split-votes"}},[t._v("#")]),t._v(" ADR 037: Governance split votes")]),t._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[t._v("#")]),t._v(" Changelog")]),t._v(" "),a("ul",[a("li",[t._v("2020/10/28: Intial draft")])]),t._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[t._v("#")]),t._v(" Status")]),t._v(" "),a("p",[t._v("Accepted")]),t._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v("This ADR defines a modification to the the governance module that would allow a staker to split their votes into several voting options. For example, it could use 70% of its voting power to vote Yes and 30% of its voting power to vote No.")]),t._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" Context")]),t._v(" "),a("p",[t._v("Currently, an address can cast a vote with only one options (Yes/No/Abstain/NoWithVeto) and use their full voting power behind that choice.")]),t._v(" "),a("p",[t._v('However, often times the entity owning that address might not be a single individual.  For example, a company might have different stakeholders who want to vote differently, and so it makes sense to allow them to split their voting power.  Another example use case is exchanges.  Many centralized exchanges often stake a portion of their users\' tokens in their custody.  Currently, it is not possible for them to do "passthrough voting" and giving their users voting rights over their tokens.  However, with this system, exchanges can poll their users for voting preferences, and then vote on-chain proportionally to the results of the poll.')]),t._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[t._v("#")]),t._v(" Decision")]),t._v(" "),a("p",[t._v("We modify the vote structs to be")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"dHlwZSBXZWlnaHRlZFZvdGVPcHRpb24gc3RydWN0IHsKICBPcHRpb24gc3RyaW5nCiAgV2VpZ2h0IHNkay5EZWMKfQoKdHlwZSBWb3RlIHN0cnVjdCB7CiAgUHJvcG9zYWxJRCBpbnQ2NAogIFZvdGVyICAgICAgc2RrLkFkZHJlc3MKICBPcHRpb25zICAgIFtdV2VpZ2h0ZWRWb3RlT3B0aW9uCn0K"}}),t._v(" "),a("p",[t._v("And for backwards compatibility, we introduce "),a("code",[t._v("MsgVoteWeighted")]),t._v(" while keeping "),a("code",[t._v("MsgVote")]),t._v(".")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"dHlwZSBNc2dWb3RlIHN0cnVjdCB7CiAgUHJvcG9zYWxJRCBpbnQ2NAogIFZvdGVyICAgICAgc2RrLkFkZHJlc3MKICBPcHRpb24gICAgIE9wdGlvbgp9Cgp0eXBlIE1zZ1ZvdGVXZWlnaHRlZCBzdHJ1Y3QgewogIFByb3Bvc2FsSUQgaW50NjQKICBWb3RlciAgICAgIHNkay5BZGRyZXNzCiAgT3B0aW9ucyAgICBbXVdlaWdodGVkVm90ZU9wdGlvbgp9Cg=="}}),t._v(" "),a("p",[t._v("The "),a("code",[t._v("ValidateBasic")]),t._v(" of a "),a("code",[t._v("MsgVoteWeighted")]),t._v(" struct would require that")]),t._v(" "),a("ol",[a("li",[t._v("The sum of all the Rates is equal to 1.0")]),t._v(" "),a("li",[t._v("No Option is repeated")])]),t._v(" "),a("p",[t._v("The governance tally function will iterate over all the options in a vote and add to the tally the result of the voter's voting power * the rate for that option.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"dGFsbHkoKSB7CiAgICByZXN1bHRzIDo9IG1hcFt0eXBlcy5Wb3RlT3B0aW9uXXNkay5EZWMKCiAgICBmb3IgXywgdm90ZSA6PSByYW5nZSB2b3RlcyB7CiAgICAgICAgZm9yIGksIHdlaWdodGVkT3B0aW9uIDo9IHJhbmdlIHZvdGUuT3B0aW9ucyB7CiAgICAgICAgICAgIHJlc3VsdHNbd2VpZ2h0ZWRPcHRpb24uT3B0aW9uXSArPSBnZXRWb3RpbmdQb3dlcih2b3RlLnZvdGVyKSAqIHdlaWdodGVkT3B0aW9uLldlaWdodAogICAgICAgIH0KICAgIH0KfQo="}}),t._v(" "),a("p",[t._v("The CLI command for creating a multi-option vote would be as such:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"c2ltZCB0eCBnb3Ygdm90ZSAxICZxdW90O3llcz0wLjYsbm89MC4zLGFic3RhaW49MC4wNSxub193aXRoX3ZldG89MC4wNSZxdW90OyAtLWZyb20gbXlrZXkK"}}),t._v(" "),a("p",[t._v("To create a single-option vote a user can do either")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"c2ltZCB0eCBnb3Ygdm90ZSAxICZxdW90O3llcz0xJnF1b3Q7IC0tZnJvbSBteWtleQo="}}),t._v(" "),a("p",[t._v("or")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"c2ltZCB0eCBnb3Ygdm90ZSAxIHllcyAtLWZyb20gbXlrZXkK"}}),t._v(" "),a("p",[t._v("to maintain backwards compatibility.")]),t._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[t._v("#")]),t._v(" Consequences")]),t._v(" "),a("h3",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[t._v("#")]),t._v(" Backwards Compatibility")]),t._v(" "),a("ul",[a("li",[t._v("Previous VoteMsg types will remain the same and so clients will not have to update their procedure unless they want to support the WeightedVoteMsg feature.")]),t._v(" "),a("li",[t._v("When querying a Vote struct from state, its structure will be different, and so clients wanting to display all voters and their respective votes will have to handle the new format and the fact that a single voter can have split votes.")]),t._v(" "),a("li",[t._v("The result of querying the tally function should have the same API for clients.")])]),t._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[t._v("#")]),t._v(" Positive")]),t._v(" "),a("ul",[a("li",[t._v("Can make the voting process more accurate for addresses representing multiple stakeholders, often some of the largest addresses.")])]),t._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[t._v("#")]),t._v(" Negative")]),t._v(" "),a("ul",[a("li",[t._v("Is more complex than simple voting, and so may be harder to explain to users.  However, this is mostly mitigated because the feature is opt-in.")])]),t._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[t._v("#")]),t._v(" Neutral")]),t._v(" "),a("ul",[a("li",[t._v("Relatively minor change to governance tally function.")])])],1)}),[],!1,null,null,null);e.default=o.exports}}]);