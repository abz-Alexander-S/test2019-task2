(this.webpackJsonptask2=this.webpackJsonptask2||[]).push([[7],{131:function(e,t,s){},134:function(e,t,s){},170:function(e,t,s){"use strict";s.r(t);var a=s(12),r=s(4),i=s(13),n=s(14),o=s(15),c=s(0),u=s.n(c),l=(s(55),s(131),s(46)),m=s.n(l),h=s(33),d=s.n(h),f=s(45),p=s.n(f),b=s(169),g=function(e){function t(e){var s;Object(a.a)(this,t),(s=Object(i.a)(this,Object(n.a)(t).call(this,e))).state={userImg:s.props.user.photo};var r=d.a.parse(navigator.userAgent);return s.isWindows=/Windows/i.test(r.os.family),s.isFirefox=/Firefox/i.test(r.browser.family),s.user=s.props.user,s}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){new p.a;return u.a.createElement("div",{className:"user"},u.a.createElement("img",{className:"user__photo b-lazy",src:m.a,"data-src":this.user.photo,alt:"user"}),u.a.createElement("div",{className:"user__info"},u.a.createElement("div",{className:"user__info-name".concat(this.isWindows||this.isFirefox?" overpassFixUserName":""),title:this.user.name},this.user.name),u.a.createElement("div",{className:"user__info-position"},this.user.position),u.a.createElement(b.a,{title:this.user.email,placement:"bottom"},u.a.createElement("p",{className:"user__info-email"},this.user.email)),u.a.createElement("div",{className:"user__info-phone"},this.user.phone)))}}]),t}(u.a.Component),v=(s(134),s(57),s(117));s.d(t,"default",(function(){return _}));var _=function(e){function t(e){var s;Object(a.a)(this,t),s=Object(i.a)(this,Object(n.a)(t).call(this,e));s.state={nextPage:1,usersPerPage:6,users:[],fullUsersList:!1,isLoading:!1};var r=d.a.parse(navigator.userAgent);return s.isNeedToFix=/Windows|Android/i.test(r.os.family),s.isFirefox=/Firefox/i.test(r.browser.family),s.correctUsersPerPageChecker=function(){return document.body.clientWidth>755?(s.setState({usersPerPage:6}),6):(s.setState({usersPerPage:3}),3)},s.getUsers=function(e,t){s.state.fullUsersList||s.state.isLoading||(s.setState({isLoading:!0}),s.setState({isLoading:!1}))},s}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.correctUsersPerPageChecker();this.getUsers(this.state.nextPage,e),window.addEventListener("resize",this.correctUsersPerPageChecker)}},{key:"render",value:function(){var e=this,t=this.props.contentText,s=this.state.users.map((function(e,t){return u.a.createElement(g,{key:t,user:e})}));return u.a.createElement("section",{className:"users"},u.a.createElement("div",{className:"users__container"},u.a.createElement("h2",{className:"users__title heading2".concat(this.isNeedToFix||this.isFirefox?" overpassFix":"")},t.title),u.a.createElement("h5",{className:"users__subtitle heading5"},t.subtitle),u.a.createElement("div",{className:"users__list"},s),u.a.createElement("div",{onClick:function(){return e.getUsers(e.state.nextPage,e.state.usersPerPage)},className:"users__button-show-more button"},u.a.createElement(v.a,{variant:"contained",className:"button-item button-item_secondary".concat(this.state.fullUsersList||this.state.isLoading?" disabled":""),disabled:this.state.fullUsersList},t.buttonShowMore))))}}]),t}(u.a.Component)}}]);
//# sourceMappingURL=7.a466db15.chunk.js.map