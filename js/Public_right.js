var publicStr = [];
    publicStr.push("<style>");
    publicStr.push(".public_right {");
    publicStr.push("	position: fixed;");
    publicStr.push("	right: 40px;");
    publicStr.push("	bottom: 120px;");
    publicStr.push("	width: 55px;");
    publicStr.push("	text-align: center;");
    publicStr.push("	background-color: #fff;");
    publicStr.push("	border: 1px solid #e2e2e2;");
    publicStr.push("	box-shadow: 0 0 9px 1px #e2e2e2;");
    publicStr.push("	z-index: 999;");
    publicStr.push("}");
    publicStr.push(".public_right ul li {");
    publicStr.push("	height: 59px;");
    publicStr.push("	color: #b2b2b2;");
    publicStr.push("	border-bottom: 1px solid #e2e2e2;");
    publicStr.push("	-webkit-box-sizing: border-box;");
    publicStr.push("	-moz-box-sizing: border-box;");
    publicStr.push("	box-sizing: border-box;");
    publicStr.push("}");
    publicStr.push(".public_right ul li i {");
    publicStr.push("	display: block;");
    publicStr.push("	width: 53px;");
    publicStr.push("	line-height: 37px;");
    publicStr.push("	font-size: 22px;");
    publicStr.push("}");
    publicStr.push(".public_right ul li span {");
    publicStr.push("	font-size: 12px;");
    publicStr.push("}");
    publicStr.push("");
    publicStr.push(".public_right ul li:nth-child(2):hover .public_ewm{");
    publicStr.push("	display: block;");
    publicStr.push("}");
    publicStr.push(".public_right ul li:nth-child(2){");
    publicStr.push("	position: relative;");
    publicStr.push("}");
    publicStr.push(".public_ewm{");
    publicStr.push("	position: absolute;");
    publicStr.push("	left: -171px;");
    publicStr.push("	top: -121px;");
    publicStr.push("	width: 120px;");
    publicStr.push("	height: 150px;");
    publicStr.push("	padding: 14px;");
    publicStr.push("	background-color: #fff;");
    publicStr.push("	border: 1px solid #ddd;");
    publicStr.push("	display: none;");
    publicStr.push("}");
    publicStr.push(".public_ewm::after,.public_ewm::before{");
    publicStr.push("	position: absolute;");
    publicStr.push("	top: 128px;");
    publicStr.push("	right: -8px;");
    publicStr.push("	content: '';");
    publicStr.push("	width: 0;");
    publicStr.push("	height: 0;");
    publicStr.push("	border-top: 8px solid transparent;");
    publicStr.push("	border-bottom: 8px solid transparent;");
    publicStr.push("	border-left: 8px solid #fff;");
    publicStr.push("}");
    publicStr.push(".public_ewm::before{");
    publicStr.push("	right: -9px;");
    publicStr.push("	border-left-color: #ddd;");
    publicStr.push("}");
    publicStr.push(".public_ewm p{");
    publicStr.push("	height: 25px;");
    publicStr.push("	color: #333;");
    publicStr.push("	font-size: 14px;");
    publicStr.push("}");
    publicStr.push(".public_right ul li:nth-child(3) {");
    publicStr.push("	border: none;");
    publicStr.push("}");
    publicStr.push(".public_right ul li:hover,");
    publicStr.push(".public_right ul li a:hover {");
    publicStr.push("	color: #fff;");
    publicStr.push("	background: #07AE72;");
    publicStr.push("}");
    publicStr.push(".public_font{");
    publicStr.push("    font-family:\"iconfont\" !important;");
    publicStr.push("    font-style:normal;");
    publicStr.push("    -webkit-font-smoothing: antialiased;");
    publicStr.push("    -webkit-text-stroke-width: 0.2px;");
    publicStr.push("    -moz-osx-font-smoothing: grayscale;");
    publicStr.push("}");
    publicStr.push(".public_right ul li:hover i{");
    publicStr.push("	-webkit-animation: myfont 0.5s linear;");
    publicStr.push("	-moz-animation: myfont 0.5s linear;");
    publicStr.push("	animation: myfont 0.5s linear;");
    publicStr.push("}");
    publicStr.push("");
    publicStr.push("@-webkit-	keyframes myfont {");
    publicStr.push("	0%{");
    publicStr.push("		-webkit-transform: rotate(0);");
    publicStr.push("		-moz-transform: rotate(0);");
    publicStr.push("		transform: rotate(0);");
    publicStr.push("	}");
    publicStr.push("	25%{");
    publicStr.push("		-webkit-transform: rotate(30deg);");
    publicStr.push("		-moz-transform: rotate(30deg);");
    publicStr.push("		transform: rotate(30deg);");
    publicStr.push("	}");
    publicStr.push("	75%{");
    publicStr.push("		-webkit-transform: rotate(-30deg);");
    publicStr.push("		-moz-transform: rotate(-30deg);");
    publicStr.push("		transform: rotate(-30deg);");
    publicStr.push("	}");
    publicStr.push("	100%{");
    publicStr.push("		-webkit-transform: rotate(0);");
    publicStr.push("		-moz-transform: rotate(0);");
    publicStr.push("		transform: rotate(0);");
    publicStr.push("	}");
    publicStr.push("}");
    publicStr.push("@-moz-keyframes myfont {");
    publicStr.push("	0%{");
    publicStr.push("		-webkit-transform: rotate(0);");
    publicStr.push("		-moz-transform: rotate(0);");
    publicStr.push("		transform: rotate(0);");
    publicStr.push("	}");
    publicStr.push("	25%{");
    publicStr.push("		-webkit-transform: rotate(30deg);");
    publicStr.push("		-moz-transform: rotate(30deg);");
    publicStr.push("		transform: rotate(30deg);");
    publicStr.push("	}");
    publicStr.push("	75%{");
    publicStr.push("		-webkit-transform: rotate(-30deg);");
    publicStr.push("		-moz-transform: rotate(-30deg);");
    publicStr.push("		transform: rotate(-30deg);");
    publicStr.push("	}");
    publicStr.push("	100%{");
    publicStr.push("		-webkit-transform: rotate(0);");
    publicStr.push("		-moz-transform: rotate(0);");
    publicStr.push("		transform: rotate(0);");
    publicStr.push("	}");
    publicStr.push("}");
    publicStr.push("@keyframes myfont {");
    publicStr.push("	0%{");
    publicStr.push("		transform: rotate(0);");
    publicStr.push("	}");
    publicStr.push("	25%{");
    publicStr.push("		transform: rotate(30deg);");
    publicStr.push("	}");
    publicStr.push("	75%{");
    publicStr.push("		transform: rotate(-30deg);");
    publicStr.push("	}");
    publicStr.push("	100%{");
    publicStr.push("		transform: rotate(0);");
    publicStr.push("	}");
    publicStr.push("}");
    publicStr.push("@font-face {");
    publicStr.push("    font-family: 'iconfont';");
    publicStr.push("    src: url('pulic_font/iconfont.eot');");
    publicStr.push("    src: url('pulic_font/iconfont.eot?#iefix') format('embedded-opentype'),");
    publicStr.push("    url('pulic_font/iconfont.woff') format('woff'),");
    publicStr.push("    url('pulic_font/iconfont.ttf') format('truetype'),");
    publicStr.push("    url('pulic_font/iconfont.svg#iconfont') format('svg');");
    publicStr.push("}");
    publicStr.push("</style>");
    publicStr.push("<section class=\"public_right\">");
    publicStr.push("<ul>");
    publicStr.push("    <li>");
    publicStr.push("        <a href=\"#\">");
    publicStr.push("            <i class=\"public_font\">&#xe6bd;</i>");
    publicStr.push("            <span>返回顶部</span>");
    publicStr.push("        </a>");
    publicStr.push("    </li>");
    publicStr.push("    <li>");
    publicStr.push("        <a href=\"javascript:;\">");
    publicStr.push("            <i class=\"public_font\">&#xe61a;</i>");
    publicStr.push("            <div class=\"public_ewm\"><p>下载穷游APP</p><img src=\"images/public_right.png\"></div>");
    publicStr.push("            <span>扫码下载</span>");
    publicStr.push("        </a>");
    publicStr.push("    </li>");
    publicStr.push("    <li>");
    publicStr.push("        <a href=\"javascript:;\">");
    publicStr.push("            <i class=\"public_font\">&#xe61c;</i>");
    publicStr.push("            <span>意见反馈</span>");
    publicStr.push("        </a>");
    publicStr.push("    </li>");
    publicStr.push("</ul>");
    publicStr.push("</section>");
var public = document.createElement('section');
public.innerHTML = publicStr.join('');
while (public.firstElementChild) {
    document.body.appendChild(public.firstElementChild);
};