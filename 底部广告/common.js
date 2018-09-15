document.writeln("<!DOCTYPE html>");
document.writeln("<html lang=\'en\'>");
document.writeln("<head>");
document.writeln("	<meta charset=\'UTF-8\'>");
document.writeln("	<title>公共底部</title>");
document.writeln("	<style>");
document.writeln("		* {");
document.writeln("			margin: 0;");
document.writeln("			padding: 0;");
document.writeln("		}");
document.writeln("		a {");
document.writeln("			text-decoration: none;");
document.writeln("			color: #000;");
document.writeln("		}");
document.writeln("		.comm-footer {");
document.writeln("			position: relative;");
document.writeln("			width: 100%;");
document.writeln("			height: 70px;");
document.writeln("			position: fixed;");
document.writeln("			z-index: 999;");
document.writeln("			left: 0;");
document.writeln("			bottom: 0;");
document.writeln("			color: #fff;");
document.writeln("			background-color: rgba(0,0,0,.8);");
document.writeln("		}");
document.writeln("		.comm-footer-w {");
document.writeln("			height: 70px;");
document.writeln("			width: 980px;");
document.writeln("			position: relative;");
document.writeln("			margin: 0 auto;");
document.writeln("		}");
document.writeln("		.footer-w {");
document.writeln("			width: 980px;");
document.writeln("			margin: 0 auto;");
document.writeln("		}");
document.writeln("		.comm-footer-l {");
document.writeln("			float: left;");
document.writeln("			margin-left: 50px;");
document.writeln("			width: 420px;");
document.writeln("		}");
document.writeln("		.comm-footer-l a {");
document.writeln("			height: 70px;");
document.writeln("			color: #0073b6;");
document.writeln("		}");
document.writeln("		.comm-footer-l a img {");
document.writeln("			vertical-align: top;");
document.writeln("			width: 420px;");
document.writeln("			height: 70px;");
document.writeln("		}");
document.writeln("		.comm-footer-r {");
document.writeln("			float: left;");
document.writeln("			line-height: 70px;");
document.writeln("			font-size: 14px;");
document.writeln("			color: #d7d7d7;");
document.writeln("			width: 386px;");
document.writeln("			height: 70px;");
document.writeln("		}");
document.writeln("		.btn {");
document.writeln("			display: inline-block;");
document.writeln("			margin-left: 10px;");
document.writeln("			border: 0;");
document.writeln("			width: 100px;");
document.writeln("			height: 30px;");
document.writeln("			line-height: 30px;");
document.writeln("			text-align: center;");
document.writeln("			cursor: pointer;");
document.writeln("			border-radius: 3px;");
document.writeln("			color: #fff;");
document.writeln("			margin-top: 20px;");
document.writeln("		}");
document.writeln("		.comm-footer-r .btn-weibo {");
document.writeln("			float: left;");
document.writeln("			background-color: #da371f;");
document.writeln("		}");
document.writeln("		.comm-footer-r .btn-qq {");
document.writeln("			float: left;");
document.writeln("			background-color: #2b8fc8;");
document.writeln("		}");
document.writeln("		.comm-footer-r .btn-qyer {");
document.writeln("			float: left;");
document.writeln("			background-color: #7ab898;");
document.writeln("		}");
document.writeln("		.comm-footer-r .log {");
document.writeln("			float: left;");
document.writeln("			margin-left: 10px;");
document.writeln("			margin-right: 4px;");
document.writeln("			color: #d7d7d7;");
document.writeln("			font-weight: 700;");
document.writeln("		}");
document.writeln("		.comm-footer-icon {");
document.writeln("			position: absolute;");
document.writeln("			line-height: 70px;");
document.writeln("			right: 3%;");
document.writeln("			bottom: 0;");
document.writeln("			font-size: 16px;");
document.writeln("		}");
document.writeln("      .comm-footer-icon i {");
document.writeln("      	cursor : pointer;");
document.writeln("      }");
document.writeln("		@font-face {");
document.writeln("		  	font-family: \'iconfont\';");
document.writeln("		  	src: url(\'footer-font/iconfont.eot\');");
document.writeln("		  	src: url(\'footer-font/iconfont.eot?#iefix\') format(\'embedded-opentype\'),");
document.writeln("		  	url(\'footer-font/iconfont.woff\') format(\'woff\'),");
document.writeln("		  	url(\'footer-font/iconfont.ttf\') format(\'truetype\'),");
document.writeln("		  	url(\'footer-font/iconfont.svg#iconfont\') format(\'svg\');");
document.writeln("		}");
document.writeln("		.iconfont{");
document.writeln("		  	font-family:\'iconfont\' !important;");
document.writeln("		  	font-size:16px;font-style:normal;");
document.writeln("		    -webkit-font-smoothing: antialiased;");
document.writeln("		    -webkit-text-stroke-width: 0.2px;");
document.writeln("		    -moz-osx-font-smoothing: grayscale;");
document.writeln("		}");
document.writeln("	</style>");
document.writeln("</head>");
document.writeln("<body>");
document.writeln("	<div class=\'comm-footer\'>");
document.writeln("		<div class=\'comm-footer-w footer-w\'>");
document.writeln("			<div class=\'comm-footer-l\'>");
document.writeln("				<a href=\'javascript:;\'>");
document.writeln("					<img src=\'images/footer.png\' alt=\'\'>");
document.writeln("				</a>");
document.writeln("			</div>");
document.writeln("			<div class=\'comm-footer-r\'>");
document.writeln("				<a href=\'javascript:;\' class=\'btn btn-weibo\'>");
document.writeln("					<i class=\'iconfont\'>&#xe60a;</i>");
document.writeln("					<span>微博登录</span>");
document.writeln("				</a>");
document.writeln("				<a href=\'javascript:;\' class=\'btn btn-qq\'>");
document.writeln("					<i class=\'iconfont\'>&#xe601;</i>");
document.writeln("					<span>QQ登录</span>");
document.writeln("				</a>");
document.writeln("				<a href=\'javascript:;\' class=\'log\'>登录</a>");
document.writeln("				<span style=\'float: left;\'>或</span>");
document.writeln("				<a href=\'javascript:;\' class=\'btn btn-qyer\'>");
document.writeln("					<span>注册穷游</span>");
document.writeln("				</a>");
document.writeln("			</div>");
document.writeln("		</div>");
document.writeln("		<span class=\'comm-footer-icon\'>");
document.writeln("			<i class=\'close iconfont\'>&#xe6bc;</i>");
document.writeln("		</span>");
document.writeln("	</div>");
document.writeln("</body>");
document.writeln("</html>")
// var close = document.getElementsByClassName('close');
// console.log(close);
$('.close').click(function () {
	$('.comm-footer').animate({
		height: 0,
		},
		500, function() {
		console.log('123');
	});
})