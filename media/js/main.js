for(var e=document.getElementsByClassName('round'),i=0;i<e.length;i++)e[i].innerHTML='<svg width="94px" height="98px" viewBox="0 0 94 98" version="1.1"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="button-ribbon" fill-rule="nonzero"><g id="Page-1"><g id="Ribbon"><rect id="Shadow3" fill-opacity="0.14" fill="#000000" x="62" y="32" width="32" height="6"></rect><rect id="Shadow2" fill-opacity="0.14" fill="#000000" x="32" y="62" width="32" height="6"></rect><rect id="Shadow1" fill-opacity="0.14" fill="#000000" x="4" y="92" width="30" height="6"></rect><polygon id="Background" fill="#353535" points="3 2 94 2 94 34 64 34 64 64 34 64 34 94 2 94"></polygon><rect id="BorderTop" fill="#7D7D7D" x="0" y="0" width="94" height="4"></rect><polygon id="BorderLeft" fill="#535353" points="0 0 4 0 4 94 0 94"></polygon><rect id="BorderCorner" fill="#616161" x="0" y="0" width="4" height="4"></rect></g></g></g></g></svg>';function createServer(a){url='/order',('pe'==a||'pc'==a)&&(url=url+'?platform='+a),location.href=url}var request=new XMLHttpRequest;request.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var a=JSON.parse(this.responseText);document.getElementById('counter_u').innerHTML=a[0]+'K',document.getElementById('counter_s').innerHTML=a[1]+'K',document.getElementById('counter_t').innerHTML=a[2]+'K',document.getElementById('counter_p').innerHTML=a[3]+'K'}},request.open('GET','https://panel.MCPEhost.ru/API/mobileApp/getLandingStat',!0),request.send();function setCookie(a,b,c){c=c||{};var e=c.expires;if("number"==typeof e&&e){var f=new Date;f.setTime(f.getTime()+1e3*e),e=c.expires=f}e&&e.toUTCString&&(c.expires=e.toUTCString()),b=encodeURIComponent(b);var g=a+"="+b;for(var h in c){g+="; "+h;var i=c[h];!0!==i&&(g+="="+i)}document.cookie=g}var url=location.href,pos=url.indexOf("from=");if(-1!=pos){var from=url.substr(pos+5);-1!=from.indexOf("&")&&(from=from.split("&"),from=from[0]),setCookie("from",from,{expires:160704000,path:"/",domain:".mcpehost.ru",secure:!0})}
