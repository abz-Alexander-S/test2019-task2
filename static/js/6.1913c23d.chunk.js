(this.webpackJsonptask2=this.webpackJsonptask2||[]).push([[6],{200:function(e,t,s){},213:function(e,t,s){},214:function(e,t,s){},234:function(e,t,s){"use strict";s.r(t);var a=s(21),i=s(12),r=s(26),n=s(27),o=s(28),c=s(0),u=s.n(c),l=s(53),m=s.n(l),h=(s(213),s(87)),d=s.n(h),f=s(43),p=s.n(f),g=s(73),v=s.n(g),b=s(197),_=function(e){function t(e){var s;Object(a.a)(this,t),(s=Object(r.a)(this,Object(n.a)(t).call(this,e))).state={userImg:s.props.user.photo,emailIsLong:!1};var i=p.a.parse(navigator.userAgent);return s.isWindows=/Windows/i.test(i.os.family),s.isFirefox=/Firefox/i.test(i.browser.family),s.user=s.props.user,s}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector(".user.user".concat(this.props.idx," .user__info-email"));e.scrollWidth<209||(this.setState({emailIsLong:!0}),e.style.cursor="pointer")}},{key:"render",value:function(){new v.a;return u.a.createElement("div",{className:"user user".concat(this.props.idx)},u.a.createElement("img",{className:"user__photo b-lazy",src:d.a,"data-src":this.user.photo,alt:"user"}),u.a.createElement("div",{className:"user__info"},u.a.createElement("div",{className:"user__info-name".concat(this.isWindows||this.isFirefox?" overpassFixUserName":""),title:this.user.name},this.user.name),u.a.createElement("div",{className:"user__info-position"},this.user.position),u.a.createElement(b.a,{title:this.user.email,placement:"bottom",disableFocusListener:!this.state.emailIsLong,disableHoverListener:!this.state.emailIsLong,disableTouchListener:!this.state.emailIsLong},u.a.createElement("p",{className:"user__info-email"},this.user.email)),u.a.createElement("div",{className:"user__info-phone"},this.user.phone)))}}]),t}(u.a.Component),x=(s(214),s(200),s(193));s.d(t,"default",(function(){return L}));var L=function(e){function t(e){var s;Object(a.a)(this,t),s=Object(r.a)(this,Object(n.a)(t).call(this,e));s.state={nextPage:1,usersPerPage:6,users:[],fullUsersList:!1,isLoading:!1,requestIsFail:!1};var i=p.a.parse(navigator.userAgent);return s.isNeedToFix=/Windows|Android/i.test(i.os.family),s.isFirefox=/Firefox/i.test(i.browser.family),s.correctUsersPerPageChecker=function(){return document.body.clientWidth>755?(s.setState({usersPerPage:6}),6):(s.setState({usersPerPage:3}),3)},s.getUsers=function(e,t){s.state.fullUsersList||s.state.isLoading||(s.setState({isLoading:!0}),m.a.get("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=".concat(e,"&count=").concat(t)).then((function(e){var t=e.data.users,a=e.data.page>=e.data.total_pages;s.setState((function(e){var s=e.users.concat(t);return{fullUsersList:a,nextPage:++e.nextPage,users:s}}))})).catch((function(){s.setState({requestIsFail:!0})})),s.setState({isLoading:!1}))},s}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.correctUsersPerPageChecker();this.getUsers(this.state.nextPage,e),window.addEventListener("resize",this.correctUsersPerPageChecker)}},{key:"render",value:function(){var e=this,t=this.props.contentText,s=this.state.users.map((function(e,t){return u.a.createElement(_,{key:t,idx:t,user:e})}));return u.a.createElement("section",{className:"users".concat(this.state.requestIsFail?" requestIsFail":"")},u.a.createElement("div",{className:"users__container"},u.a.createElement("h2",{className:"users__title heading2".concat(this.isNeedToFix||this.isFirefox?" overpassFix":"")},t.title),u.a.createElement("h5",{className:"users__subtitle heading5"},t.subtitle),u.a.createElement("div",{className:"users__list"},s),u.a.createElement("div",{onClick:function(){return e.getUsers(e.state.nextPage,e.state.usersPerPage)},className:"users__button-show-more button"},u.a.createElement(x.a,{variant:"contained",className:"button-item button-item_secondary".concat(this.state.fullUsersList||this.state.isLoading?" disabled":""),disabled:this.state.fullUsersList},t.buttonShowMore))))}}]),t}(u.a.Component)}}]);
//# sourceMappingURL=6.1913c23d.chunk.js.map