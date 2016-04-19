(function() {
window["JST"] = window["JST"] || {};

window["JST"]["alternateOption.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="alternate-options row">\n	<div class="left-side col-sm-12">\n		<div class="message">{{alternateMessage}}</div>\n		<div class="address">\n			<div class="company">{{company}}</div>	\n			<div class="street">{{street}}</div>	\n			<div class="locale">{{locale}}</div>			\n		</div>\n		<!--  div class="downloadMessage">{{downloadMessage}}</div> -->\n	</div>\n</div>\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["band.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<band></band>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["bgImage.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="bg-image row skrollable skrollable-between" sn-skrollr data-top-top="transform: translate(0%, 0%)" data-top-bottom="transform: translate(0%, 50%)" style="transform: translate(0%, 0%);">\n	<!--  <img class="" data-ng-src="{{bgImage.image}}" alt="{{bgImage.alt}}">-->\n	<span picture-fill data-alt="{{bgImage.alt}}" data-picture>\n		<span pf-src="{{defImage}}"></span>\n		<span ng-repeat="image in images" pf-src="{{image.src}}" data-media="(min-width: {{image.media}})"></span>\n  </span>\n</div>\n\n<!--  span picture-fill data-alt="{{post.thumbnail.description}}" ng-if="post.thumbnail">\n  <span pf-src="{{post.thumbnail.url}}"></span>\n  <span pf-src="{{post.thumbnail.url | trimExt}}-150x150.jpg" data-media="(min-width: 1px)"></span>\n  <span pf-src="{{post.thumbnail.url | trimExt}}-300x300.jpg" data-media="(min-width: 1px) and (-webkit-min-device-pixel-ratio: 1.5),(min-resolution: 144dpi),(min-resolution: 1.5dppx)"></span>\n  <span pf-src="{{post.thumbnail.url | trimExt}}-300x225.jpg" data-media="(min-width: 320px)"></span>\n  <span pf-src="{{post.thumbnail.url | trimExt}}-600x450.jpg" data-media="(min-width: 320px) and (-webkit-min-device-pixel-ratio: 1.5),(min-resolution: 144dpi),(min-resolution: 1.5dppx)"></span>\n  <span pf-src="{{post.thumbnail.url | trimExt}}-1024x768.jpg" data-media="(min-width: 645px)"></span>\n  <span pf-src="{{post.thumbnail.url | trimExt}}.jpg" data-media="(min-width: 645px) and (-webkit-min-device-pixel-ratio: 1.5),(min-resolution: 144dpi),(min-resolution: 1.5dppx)"></span>\n  <span pf-src="{{post.thumbnail.url | trimExt}}.jpg" data-media="(min-width: 2068px)"></span>\n</span>\n\n\n <span pf-src="{{bgImage.image}}"></span>\n  	<span pf-src="{{bgImage.image | trimExt}}-320.jpg" data-media="(min-width: 1px)"></span>\n  	<span pf-src="{{bgImage.image | trimExt}}-320.jpg" data-media="(min-width: 1px) and (-webkit-min-device-pixel-ratio: 1.5),(min-resolution: 144dpi),(min-resolution: 1.5dppx)"></span>\n  <span pf-src="{{bgImage.image | trimExt}}-320.jpg" data-media="(min-width: 320px)"></span>\n  <span pf-src="{{bgImage.image | trimExt}}-320.jpg" data-media="(min-width: 320px) and (-webkit-min-device-pixel-ratio: 1.5),(min-resolution: 144dpi),(min-resolution: 1.5dppx)"></span>\n  <span pf-src="{{bgImage.image | trimExt}}-480.jpg" data-media="(min-width: 645px)"></span>\n  <span pf-src="{{bgImage.image | trimExt}}-768.jpg" data-media="(min-width: 645px) and (-webkit-min-device-pixel-ratio: 1.5),(min-resolution: 144dpi),(min-resolution: 1.5dppx)"></span>\n  <span pf-src="{{bgImage.image | trimExt}}-1920.jpg" data-media="(min-width: 2068px)"></span>\n\n\nbelow works\n<span picture-fill data-alt="Juicy hanger steak on a croissant.">\n  	<span pf-src="./images/monk_boys-320.jpg" data-media="(min-width: 1px)"></span>\n  <span pf-src="./images/monk_boys-480.jpg" data-media="(min-width: 645px)"></span>\n  <span pf-src="./images/monk_boys-768.jpg" data-media="(min-width: 920px)"></span>\n  <span pf-src="./images/monk_boys-1920.jpg" data-media="(min-width: 1200px)"></span>\n  </span>\n-->';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["blogComponent.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<!-- blog component -->\n<div class="blog-component">\n	<div class="left-side col-sm-10">\n		<!-- add ng repeat for number of items to be displayed and work on querying info for multiple items -->\n		<!-- may need to filter out sections too -->\n		<div ng-repeat="post in posts" class="friends">\n			<h1 class="blog-title">{{post.blogTitle}}</h1>\n			<div class="date">{{post.date}}</div>\n			<div class="text-section">{{post.blogText}}</div>\n			\n			<!-- refactor to use directive for this portion, also on mid component also refactor the section for video -->\n			<!-- <visual-media></visual-media> -->\n			<div class="bottom-content">\n				<div ng-if="post.video.show ==\'true\'" class="title">{{post.video.title}}</div>\n				<div class="video-container row">\n				<!-- 4:3 aspect ratio -->\n				<div class="col-sm-12">\n					<!--  do ngif between video and not video -->\n					<div ng-if="post.video.show ==\'true\'" class="embed-responsive embed-responsive-16by9">\n					<!-- <iframe ng-if="post.video.show ==\'true\'" class="embed-responsive-item" src="https://www.youtube.com/embed/jDXZwkyLuPg"></iframe> -->\n						<iframe ng-if="post.video.show ==\'true\'" class="embed-responsive-item" src="{{post.video.url | trustUrl}}"></iframe>\n					</div>\n					<div ng-if="image.show ==\'true\'" class="bottom-image">\n	  					<img class="" data-ng-src="{{post.image.src}}" alt="{{post.image.alt}}">\n					</div>\n				</div>\n				\n	         \n				</div>\n			</div>\n		</div><!-- end ng-repeat -->\n		<!-- add pagination -->\n		<!--  uib-pagination boundary-links="true" total-items="5" ng-model="currentPage" class="pagination-sm" previous-text="&lsaquo;" next-text="&rsaquo;" first-text="&laquo;" last-text="&raquo;"></uib-pagination-->\n	 <uib-pagination boundary-links="true" rotate="true" num-pages="numPages" total-items="allPosts.length" ng-model="currentPage" ng-change="pageChanged()" class="pagination-sm" previous-text="&lsaquo;" next-text="&rsaquo;" first-text="&laquo;" last-text="&raquo;" max-size="3" items-per-page="2"></uib-pagination>\n   </div>\n	<right-block-module></right-block-module>\n	\n</div>\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["blogHeader.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="blog-header">\n	<div class="blog-top-message">{{blogTopMessage}}</div>\n	<input class="search-box"></input><!-- add form here -->\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["carousel.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class=\'care-Carousel row skrollable skrollable-between\' carousel-click sn-skrollr data-top-top="transform: translate(0%, 0%)" data-top-bottom="transform: translate(0%, 50%)" style="transform: translate(0%, 0%);">\n  <div>\n    <uib-carousel class=\'carousel-fade\' interval="interval" no-wrap="noWrapSlides">\n      <uib-slide data-ng-repeat="slide in carousel" active="slide.active">\n		<img data-ng-src="{{slide.image}}" alt="{{slide.altTag}}">\n        <div class="carousel-caption"> \n          \n        </div>\n      </uib-slide>\n    </uib-carousel>\n  </div>\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["contactComponent.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="contact-component row">\n	<div class="left-side col-sm-10">\n		<div class="contact-title">{{title}}</div>\n		<!--div class="directions">{{directions}}</div-->\n		<div class="tempDirections">{{tempDirections}}</div>\n		<a href="mailto:info@careforpeace.org" class="emailLink">Email Us</a>\n		\n		<!--form name="contactForm" data-ng-submit="sendMail()">\n		  	<input type="text" ng-model="name" name="text" placeholder="Name"/>\n		  	<input type="email" ng-model="email" name="email" placeholder="Email" ng-required/>\n		  	<input type="text" ng-model="message" name="message" maxlength="500" placeholder="Message"/>\n		  	<input type="submit" id="submit" value="Send" />\n		</form-->\n		<div class="alternate">{{alternate}}</div>\n		<div class="physical">\n			<div class="company">{{company}}</div>\n			<div class="street">{{street}}</div>\n			<div class="cityState">{{cityState}}</div>\n		</div>\n	</div>\n	<right-block-module></right-block-module>\n</div>\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["donateInfo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="donate-info row">\n	<div class="text-section col-sm-12 ">{{info}}</div>\n	\n		<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n\n			<input type="hidden" name="cmd" value="_s-xclick">\n			\n			<input type="hidden" name="hosted_button_id" value="TP39BAE27GSJL">\n			\n			<input type="submit" class="donate-button" value="Donate" src="" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\n			\n			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\n		</form>\n		\n		<!-- to do: missing end div? -->\n		';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["donateOptions.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="donate-options row">\n	<div class="col-sm-12">\n		<div class="message">{{message}}</div>\n		<div ng-repeat="batch in batches" class="batch row">\n			<div ng-repeat="option in batch" class="option-grid col-sm-3">\n				<div class="amount">{{option.amount}}\n					<form action="{{option.action | trustUrl}}" method="post" target="_top" name="myForm">\n						<input type="hidden" name="cmd" value="_s-xclick">\n						<input type="hidden" name="hosted_button_id" value="{{option.value}}">\n						<input type="image" class="option-image"src="{{option.image}}" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\n					</form>\n				</div>	\n			</div>\n		</div>\n	</div>\n</div>\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["footer.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<!-- div  class="footer-section container-fluid" > -->\n<div  class="footer-section container" >\n	<div class="row">\n		<div ng-repeat="infoItem in info.footerInfo"  data-ng-class="{last: $last, first: $first}" class="info-Text col-sm-4">\n			<span data-ng-class="{last: $last, first: $first}" class="descriptor">{{infoItem.descriptor}}</span>\n			<a href="{{infoItem.href}}" class="text">{{infoItem.text}}</a>\n		</div>\n	</div>\n	<div class="row">\n		<div class="trademark-display col-sm-12">\n			<span class="glyphicon glyphicon-copyright-mark"></span>\n			<span class="trademark">{{info.footerTrademark}}</span>\n		</div>\n		\n	</div>\n</div>\n\n<!--sn-skrollr skrollable-between"  data-top-top="transform: translate(0%, 60%)" data-top-bottom="transform: translate(0%, 50%)" style="transform: translate(0%, 0%);" -->';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["midComponent.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="middle-component row">\n	<div class="left-side col-sm-10">\n		<div class="top-content">{{infoSection}}</div>\n		<div class="bottom-content">\n			<div ng-if="video.show ==\'true\'" class="title">{{video.title}}</div>\n			<div class="video-container row">\n			<!-- 4:3 aspect ratio -->\n			<div class="col-sm-12">\n				<!--  do ngif between video and not video -->\n				<div ng-if="video.show ==\'true\'" class="embed-responsive embed-responsive-16by9">\n  					<iframe ng-if="video.show ==\'true\'" class="embed-responsive-item" src="https://www.youtube.com/embed/jDXZwkyLuPg"></iframe>\n				</div>\n				<div ng-if="image.show ==\'true\'" class="bottom-image">\n  					<img class="" data-ng-src="{{image.src}}" alt="{{image.alt}}">\n				</div>\n			</div>\n         \n			</div>\n		</div>\n	</div>\n	<right-block-module></right-block-module>\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["ourFriends.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="our-friends row">\n	<div class="left-side col-sm-10 ">\n		<div class="friends-title">{{ourFriendsTitle}}</div>\n		<div ng-repeat="friend in friendsArray" class="friends">\n			<b>{{friend.name}}</b>\n			{{friend.about}}\n		</div>\n	</div>\n</div>\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["rightBlockModule.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="right-side col-sm-2">\n	<div class="media-container">\n		<div class="donate">\n			<img class="button-image" href="{{top.href}}" data-ng-src="{{top.image}}" alt="{{top.alt}}" height="" width="">\n			<div class="button-text">{{top.text}}</div>\n		</div>\n		<div ng-repeat="link in links" class="links">\n			<div class="title">{{link.title}}</div>\n			<button type="button" href="{{link.href}}" class="{{link.icon}}"><span class="text">{{link.text}}</span></button>\n		</div>\n		<div class="care">{{care}}</div>\n	</div>\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["teamGridComponent.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="team-grid-component row">\n	<div class="left-side col-sm-10 ">\n		<div class="meet-title col-sm-12">{{title}}</div>\n		<div class="description">{{description}}</div>\n		<div ng-repeat="batch in batches" class="team row">\n			<div ng-repeat="member in batch" class="member col-sm-4">\n				<img class="member-photo" data-ng-src="{{member.image}}" alt="{{member.alt}}" height="" width="">\n				<div class="name">{{member.name}}</div>\n				<div class="about">{{member.about}}</div>\n			</div>\n		</div>\n	</div>\n	<right-block-module></right-block-module>\n</div>\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["teamMemberComponent.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="team-member-component row">\n	<div class="left-side col-sm-10 ">\n		<div class="other-member-title">{{otherMembersTitle}}</div>\n		<div ng-repeat="member in otherMembers" class="members">\n			<p> <b>{{member.name}}</b>\n			{{member.about}}\n			</p>\n		</div>\n	</div>\n</div>\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["topBand.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<top-band></top-band>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["topicGrid.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div sn-skrollr class="topic-grid row skrollable-between" data-top-top="transform: translate(0%, 0%)" data-top-bottom="transform: translate(0%, 50%)" style="transform: translate(0%, 0%);">\n	<div class="left-block col-sm-5">\n		<div class="top-box row">\n			<div class="header">{{left[0].header}}</div>\n			<div class="content">{{left[0].content}}</div>\n		</div>\n		<div class="bottom-box row"><!-- -->\n			<div  class="header "  >{{left[1].header}}</div>\n			<div class="content">{{left[1].content}}</div>\n		</div>\n	</div>\n\n	<div class="right-block col-sm-7 ">\n		<div ng-repeat="rowItem in grid" class="row {{rowItem.row}}">\n  			<div ng-repeat="gridItem in rowItem.items" class="{{gridItem.position}} col-xs-4">\n  				<div class="button-text" data-ng-class="{donate: $last}">{{gridItem.text}}</div>\n				<a href="{{gridItem.href}}">\n					<img data-ng-src="{{gridItem.image}}" alt="{{gridItem.alt}}" height="{{gridItem.height}}" width="{{gridItem.width}}" class="{{gridItem.row}}">\n				</a>\n  			</div>\n  		</div>\n  		\n 	</div>\n\n</div>\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["visualMedia.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<!-- visual media component -->\n<div class="visual-media">\n	<div ng-if="video.show ==\'true\'" class="title">{{video.title}}</div>\n		<div class="media-container row">\n		<!-- 4:3 aspect ratio -->\n		<div class="col-sm-12">\n			<!--  do ngif between video and not video -->\n			<div ng-if="video.show ==\'true\'" class="embed-responsive embed-responsive-16by9">\n					<iframe ng-if="video.show ==\'true\'" class="embed-responsive-item" src="{{video.url}}"></iframe>\n			</div>\n			<!-- break down images to be dynamic (up to 3 but recommend in groups of 3, otherwise build out to be dynamic in case number changes -->\n			<div ng-if="image.show ==\'true\'" class="bottom-image">\n				<img class="" data-ng-src="{{image.src}}" alt="{{image.alt}}">\n			</div>\n		</div>	         \n	</div>\n</div>\n<!-- TODO: also make rules on sizing images.  Add picture-fill to this section and be sure any images are cut -->';

}
return __p
}})();