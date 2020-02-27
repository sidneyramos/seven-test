(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{281:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/card.bec77b52.png"},282:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/test.5c795737.png"},288:function(module,exports,__webpack_require__){__webpack_require__(289),__webpack_require__(435),module.exports=__webpack_require__(436)},353:function(module,exports){},38:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/logo.2a3f011a.png"},39:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/tile.25b4e634.jpg"},436:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(280);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(624)],module)}.call(this,__webpack_require__(437)(module))},624:function(module,exports,__webpack_require__){var map={"./0-Welcome.stories.js":707,"./1-Card.stories.js":708};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=624},707:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=(__webpack_require__(273),__webpack_require__(276),__webpack_require__(84),__webpack_require__(116),__webpack_require__(117),__webpack_require__(642),__webpack_require__(15)),card=__webpack_require__(281),card_default=__webpack_require__.n(card),logo=__webpack_require__(38),logo_default=__webpack_require__.n(logo),tile=__webpack_require__(39),tile_default=__webpack_require__.n(tile),test=__webpack_require__(282),test_default=__webpack_require__.n(test);function _templateObject2(){var data=_taggedTemplateLiteral(["\n  font-size: 16px;\n  display: block;\n  padding-left: ",";\n"]);return _templateObject2=function(){return data},data}function _templateObject(){var data=_taggedTemplateLiteral(["\n  font-family: Rubik;\n  font-weight: 300;\n  padding: 15px;\n  display: inline-block;\n"]);return _templateObject=function(){return data},data}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}__webpack_require__(645);var cardImageProps={src:card_default.a,alt:"Example Card"},logoImageProps={src:logo_default.a,alt:"Logo Image"},tileImageProps={src:tile_default.a,alt:"Tile Image"},WelcomeContainer=styled_components_browser_esm.a.div(_templateObject()),CodeElement=styled_components_browser_esm.a.code(_templateObject2(),(function(props){return props.sub?"".concat(40*props.sub,"px"):"0px"})),_ref=react_default.a.createElement("p",null,"This is a coding test submission by Sidney Ramos for the Front-end Developer position at Seven West Media."),_ref2=react_default.a.createElement("p",null,"The task was to create a responsive card component that looks like following image:"),_ref3=react_default.a.createElement("p",null,react_default.a.createElement("strong",null,"The requirements were:"),react_default.a.createElement("ul",null,react_default.a.createElement("li",null,"Use styled-components on a simple React view to accomplish that."),react_default.a.createElement("li",null,"Develop unit tests using your preferred test framework."),react_default.a.createElement("li",null,"Write a README.md with your assumptions, why did you pick that approach, what you could have done better if time was not a constraint."),react_default.a.createElement("li",null,"Push code to Github and host a working demo of the solution using Github Pages."))),_ref4=react_default.a.createElement("strong",null,"Assets provided:"),_ref5=react_default.a.createElement("p",null,react_default.a.createElement("strong",null,"Assumptions:"),react_default.a.createElement("ul",null,react_default.a.createElement("li",null,"Looking at the outcome image, it can be derived that there are 2 major elements. The background image and the foreground element containing the logo and the text."),react_default.a.createElement("li",null,"In terms of the font, ",react_default.a.createElement("a",{href:"https://7plus.com.au/"},"Seven Plus")," ","uses Montserrat which is a Google Font so we wouldn't come across any problems with purchasing fonts."),react_default.a.createElement("li",null,"We can safely assume that the text and logo overlay is 25% or 1/4th of the overall height of the card."),react_default.a.createElement("li",null,"Transparency of background of the overlay seems to be around 50%."))),_ref6=react_default.a.createElement("p",null,react_default.a.createElement("strong",null,"Questions/Challenges:"),react_default.a.createElement("ul",null,react_default.a.createElement("li",null,react_default.a.createElement("strong",null,"Does the card have a hover state? "),react_default.a.createElement("p",null,"If we look at ",react_default.a.createElement("a",{href:"https://7plus.com.au/"},"Seven Plus"),", one of Seven West Media's offerings, the layout is similar to Netflix wherein they display a grid of plain block images - no overlay whatsoever. It's only when you hover that either a.) more context is provided or b.) focus is exaggerated.")),react_default.a.createElement("li",null,react_default.a.createElement("strong",null,"Does the card have a mobile version? "),react_default.a.createElement("p",null,"When it comes to mobile, how do we present a collection of these card components? Do we crop it into a square so more cards can be viewed by the user, and present it as a plain grid? Or would leaving it as a rectangular shape and inserting it in a swipeable carousel be the better option?")),react_default.a.createElement("li",null,react_default.a.createElement("strong",null,"How do we preserve the aspect ratio of the background image?"," "),react_default.a.createElement("p",null,"When we create a card that doesn't fit the aspect ratio of the image (e.g. a square), how do we resize the component in such a way that we preserve the aspect ratio and still make the component look presentable?")))),_ref7=react_default.a.createElement("p",null,react_default.a.createElement("strong",null,"Approach:"),react_default.a.createElement("ul",null,react_default.a.createElement("li",null,react_default.a.createElement("strong",null,"Building an individual card component"),react_default.a.createElement("ul",null,react_default.a.createElement("li",null,react_default.a.createElement("p",null,"Looking at the task at face value, there are 2 approaches that can be used for developing such a card:"),react_default.a.createElement("ol",null,react_default.a.createElement("li",null,react_default.a.createElement(CodeElement,null,"div "),react_default.a.createElement(CodeElement,null,"├── img (Background)"),react_default.a.createElement(CodeElement,null,"└── div (Overlay)"),react_default.a.createElement(CodeElement,{sub:1},"├── img (Logo) "),react_default.a.createElement(CodeElement,{sub:1},"└── h1 / p (Title) ")),react_default.a.createElement("li",null,react_default.a.createElement(CodeElement,null,"div (set background-image)"),react_default.a.createElement(CodeElement,null,"└── div (Overlay)"),react_default.a.createElement(CodeElement,{sub:1},"├── img (Logo) "),react_default.a.createElement(CodeElement,{sub:1},"└── h1 / p (Title) "))),react_default.a.createElement("p",null,"The second option is more intuitive and useful than the first because background-image is a lot easier to control than height, width and object-fit of an image element.")),react_default.a.createElement("li",null,"Now that the DOM architecture has been settled, the next challenge is how to make sure the aspect ratio of the background is preserved regardless of width. I did a bit of research and found an interesting way to make a div preserve the aspect ratio involving padding. The link for said article can be found"," ",react_default.a.createElement("a",{href:"https://css-tricks.com/aspect-ratio-boxes/"},"here.")),react_default.a.createElement("li",null,"The next and final challenge would be to find out how to resize the text such that it's still legible for any width. Initially, based on stock knowledge and experience I knew that media queries were the most obvious answer but I never liked how it kind of snapped whenever it transitioned into a different font size. So I did a bit of research and found a lightweight, dependency-free Javascript library called"," ",react_default.a.createElement("a",{href:"https://github.com/rikschennink/fitty"},"Fitty")," that resizes the text based on the parent container. All I had to do now was hook it up to the React component through the useEffect hook (the card component was purely functional so I lacked the component lifecycle syntax) and voila! Responsive text."),react_default.a.createElement("li",null,react_default.a.createElement("em",null,"Side comment: The component is so responsive now that it actually looks as if it's just an image being resized. 😅")))))),_ref8=react_default.a.createElement("p",null,react_default.a.createElement("strong",null,"Possible Extensions:"),react_default.a.createElement("ul",null,react_default.a.createElement("li",null,react_default.a.createElement("strong",null,"Building an collection card grid"),react_default.a.createElement("p",null,"Due to time constraints, I could only focus on creating an individual card component. It would have been nice to demonstrate what would happen if you insert the card into a grid. But maybe that should be left for some other time.")))),_ref9=react_default.a.createElement("p",null,react_default.a.createElement("strong",null,"Testing Results:"),react_default.a.createElement("ul",null,react_default.a.createElement("li",null,react_default.a.createElement("strong",null,"Snapshot Testing"),react_default.a.createElement("p",null,"Due to time constraints, only limited testing was done. Snapshot Testing through Jest was done just to ensure that it renders correctly. If I had more time I would've been able to come up with more test cases.",react_default.a.createElement("img",{src:test_default.a,alt:"testing results"}))))),Card=function(){return react_default.a.createElement(WelcomeContainer,null,_ref,_ref2,react_default.a.createElement("img",{src:cardImageProps.src,alt:cardImageProps.alt}),_ref3,react_default.a.createElement("p",null,_ref4,react_default.a.createElement("ul",null,react_default.a.createElement("li",null,react_default.a.createElement("img",{src:cardImageProps.src,alt:cardImageProps.alt})),react_default.a.createElement("li",null,react_default.a.createElement("img",{src:tileImageProps.src,alt:tileImageProps.alt})),react_default.a.createElement("li",null,react_default.a.createElement("img",{src:logoImageProps.src,alt:logoImageProps.alt})))),_ref5,_ref6,_ref7,_ref8,_ref9)};Card.displayName="Card",Card.__docgenInfo={description:"",methods:[],displayName:"Card"};var Welcome=Card;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Welcome.jsx"]={name:"Card",docgenInfo:Card.__docgenInfo,path:"components/Welcome.jsx"}),__webpack_require__.d(__webpack_exports__,"ReadMe",(function(){return ReadMe}));__webpack_exports__.default={title:"Welcome",component:Welcome};var _0_Welcome_stories_ref=react_default.a.createElement(Welcome,null),ReadMe=function(){return _0_Welcome_stories_ref};ReadMe.displayName="ReadMe",ReadMe.__docgenInfo={description:"",methods:[],displayName:"ReadMe"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/0-Welcome.stories.js"]={name:"ReadMe",docgenInfo:ReadMe.__docgenInfo,path:"stories/0-Welcome.stories.js"})},708:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(84),__webpack_require__(116),__webpack_require__(117);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=(__webpack_require__(273),__webpack_require__(276),__webpack_require__(17),__webpack_require__(118),__webpack_require__(34),__webpack_require__(35),__webpack_require__(15)),fitty_module=__webpack_require__(286),fitty_module_default=__webpack_require__.n(fitty_module);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _templateObject7(){var data=_taggedTemplateLiteral(["\n  height: 100%;\n  width: auto;\n"]);return _templateObject7=function(){return data},data}function _templateObject6(){var data=_taggedTemplateLiteral(["\n  height: 50%;\n  width: 50%;\n"]);return _templateObject6=function(){return data},data}function _templateObject5(){var data=_taggedTemplateLiteral(["\n  margin: 0;\n  line-height: 1.2;\n"]);return _templateObject5=function(){return data},data}function _templateObject4(){var data=_taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  height: calc(23%);\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 2%;\n  color: white;\n"]);return _templateObject4=function(){return data},data}function _templateObject3(){var data=_taggedTemplateLiteral(["\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  justify-content: flex-end;\n"]);return _templateObject3=function(){return data},data}function _templateObject2(){var data=_taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);return _templateObject2=function(){return data},data}function _templateObject(){var data=_taggedTemplateLiteral(["\n  height: 0;\n  overflow: hidden;\n  padding-top: ",';\n  background: #f0f0f0;\n  background-image: url("','");\n  background-size: cover;\n  position: relative;\n  font-family: Montserrat;\n\n  &.hover {\n    cursor: pointer;\n\n    .overlay-container {\n      opacity: 0;\n      transition: all 0.3s;\n    }\n\n    &:hover {\n      .overlay-container {\n        opacity: 1;\n      }\n    }\n  }\n']);return _templateObject=function(){return data},data}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var classNames=__webpack_require__(668),CardContainer=styled_components_browser_esm.a.div(_templateObject(),(function(props){return props.width&&props.height?"".concat(props.height/props.width*100,"%"):"100%"}),(function(props){return props.backgroundImage})),InnerCardContainer=styled_components_browser_esm.a.div(_templateObject2()),FlexBox=styled_components_browser_esm.a.div(_templateObject3()),OverlayContainer=styled_components_browser_esm.a.div(_templateObject4()),OverlayTitle=styled_components_browser_esm.a.h1(_templateObject5()),OverlayTitleContainer=styled_components_browser_esm.a.div(_templateObject6()),LogoImage=styled_components_browser_esm.a.img(_templateObject7()),Card=function(_ref){_ref.children;var _ref$image=_ref.image,image=void 0===_ref$image?"http://via.placeholder.com/640x360":_ref$image,logo=_ref.logo,title=_ref.title,isHover=_ref.isHover,props=_objectWithoutProperties(_ref,["children","image","logo","title","isHover"]),backgroundImage=new Image;return backgroundImage.src=image,Object(react.useEffect)((function(){fitty_module_default()(".fit")})),react_default.a.createElement(CardContainer,_extends({className:classNames(["card-container",{hover:isHover}]),width:backgroundImage.width,height:backgroundImage.height,backgroundImage:image},props),react_default.a.createElement(InnerCardContainer,{className:"inner-card-container"},react_default.a.createElement(FlexBox,null,title&&react_default.a.createElement(OverlayContainer,{className:"overlay-container"},logo&&react_default.a.createElement(LogoImage,{src:logo.src,alt:logo.alt}),react_default.a.createElement(OverlayTitleContainer,null,react_default.a.createElement(OverlayTitle,{className:"fit"},title))))))};Card.displayName="Card",Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{image:{defaultValue:{value:'"http://via.placeholder.com/640x360"',computed:!1},required:!1}}};var components_Card=Card;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Card.jsx"]={name:"Card",docgenInfo:Card.__docgenInfo,path:"components/Card.jsx"});var tile=__webpack_require__(39),tile_default=__webpack_require__.n(tile),static_logo=__webpack_require__(38),logo_default=__webpack_require__.n(static_logo);function _1_Card_stories_templateObject3(){var data=_1_Card_stories_taggedTemplateLiteral(["\n  width: 768px;\n"]);return _1_Card_stories_templateObject3=function(){return data},data}function _1_Card_stories_templateObject2(){var data=_1_Card_stories_taggedTemplateLiteral(["\n  width: 480px;\n"]);return _1_Card_stories_templateObject2=function(){return data},data}function _1_Card_stories_templateObject(){var data=_1_Card_stories_taggedTemplateLiteral(["\n  width: 300px;\n"]);return _1_Card_stories_templateObject=function(){return data},data}function _1_Card_stories_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}__webpack_require__.d(__webpack_exports__,"SmallIndividualCard",(function(){return SmallIndividualCard})),__webpack_require__.d(__webpack_exports__,"MediumIndividualCard",(function(){return MediumIndividualCard})),__webpack_require__.d(__webpack_exports__,"LargeIndividualCard",(function(){return LargeIndividualCard})),__webpack_require__.d(__webpack_exports__,"FullwidthIndividualCard",(function(){return FullwidthIndividualCard})),__webpack_require__.d(__webpack_exports__,"DefaultIndividualCard",(function(){return DefaultIndividualCard})),__webpack_require__.d(__webpack_exports__,"NoImageIndividualCard",(function(){return NoImageIndividualCard})),__webpack_require__.d(__webpack_exports__,"NoLogoIndividualCard",(function(){return NoLogoIndividualCard})),__webpack_require__.d(__webpack_exports__,"NoTitleIndividualCard",(function(){return NoTitleIndividualCard})),__webpack_require__.d(__webpack_exports__,"HoverIndividualCard",(function(){return HoverIndividualCard})),__webpack_require__(669);__webpack_exports__.default={title:"Card",component:components_Card};var SmallCardContainer=styled_components_browser_esm.a.div(_1_Card_stories_templateObject()),MediumCardContainer=styled_components_browser_esm.a.div(_1_Card_stories_templateObject2()),LargeCardContainer=styled_components_browser_esm.a.div(_1_Card_stories_templateObject3()),SmallIndividualCard=function(){return react_default.a.createElement(SmallCardContainer,null,react_default.a.createElement(components_Card,{image:tile_default.a,logo:{src:logo_default.a,alt:"Seven West Media"},title:"Home and Away"}))};SmallIndividualCard.displayName="SmallIndividualCard";var MediumIndividualCard=function(){return react_default.a.createElement(MediumCardContainer,null,react_default.a.createElement(components_Card,{image:tile_default.a,logo:{src:logo_default.a,alt:"Seven West Media"},title:"Home and Away"}))};MediumIndividualCard.displayName="MediumIndividualCard";var LargeIndividualCard=function(){return react_default.a.createElement(LargeCardContainer,null,react_default.a.createElement(components_Card,{image:tile_default.a,logo:{src:logo_default.a,alt:"Seven West Media"},title:"Home and Away"}))};LargeIndividualCard.displayName="LargeIndividualCard";var FullwidthIndividualCard=function(){return react_default.a.createElement(components_Card,{image:tile_default.a,logo:{src:logo_default.a,alt:"Seven West Media"},title:"Home and Away"})};FullwidthIndividualCard.displayName="FullwidthIndividualCard";var _1_Card_stories_ref=react_default.a.createElement(SmallCardContainer,null,react_default.a.createElement(components_Card,null)),DefaultIndividualCard=function(){return _1_Card_stories_ref};DefaultIndividualCard.displayName="DefaultIndividualCard";var NoImageIndividualCard=function(){return react_default.a.createElement(SmallCardContainer,null,react_default.a.createElement(components_Card,{logo:{src:logo_default.a,alt:"Seven West Media"},title:"Home and Away"}))};NoImageIndividualCard.displayName="NoImageIndividualCard";var _ref2=react_default.a.createElement(SmallCardContainer,null,react_default.a.createElement(components_Card,{image:tile_default.a,title:"Home and Away"})),NoLogoIndividualCard=function(){return _ref2};NoLogoIndividualCard.displayName="NoLogoIndividualCard";var NoTitleIndividualCard=function(){return react_default.a.createElement(SmallCardContainer,null,react_default.a.createElement(components_Card,{image:tile_default.a,logo:{src:logo_default.a,alt:"Seven West Media"}}))};NoTitleIndividualCard.displayName="NoTitleIndividualCard";var HoverIndividualCard=function(){return react_default.a.createElement(SmallCardContainer,null,react_default.a.createElement(components_Card,{image:tile_default.a,logo:{src:logo_default.a,alt:"Seven West Media"},title:"Home and Away",isHover:!0}))};HoverIndividualCard.displayName="HoverIndividualCard",SmallIndividualCard.__docgenInfo={description:"",methods:[],displayName:"SmallIndividualCard"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/1-Card.stories.js"]={name:"SmallIndividualCard",docgenInfo:SmallIndividualCard.__docgenInfo,path:"stories/1-Card.stories.js"}),MediumIndividualCard.__docgenInfo={description:"",methods:[],displayName:"MediumIndividualCard"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/1-Card.stories.js"]={name:"MediumIndividualCard",docgenInfo:MediumIndividualCard.__docgenInfo,path:"stories/1-Card.stories.js"}),LargeIndividualCard.__docgenInfo={description:"",methods:[],displayName:"LargeIndividualCard"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/1-Card.stories.js"]={name:"LargeIndividualCard",docgenInfo:LargeIndividualCard.__docgenInfo,path:"stories/1-Card.stories.js"}),FullwidthIndividualCard.__docgenInfo={description:"",methods:[],displayName:"FullwidthIndividualCard"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/1-Card.stories.js"]={name:"FullwidthIndividualCard",docgenInfo:FullwidthIndividualCard.__docgenInfo,path:"stories/1-Card.stories.js"}),DefaultIndividualCard.__docgenInfo={description:"",methods:[],displayName:"DefaultIndividualCard"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/1-Card.stories.js"]={name:"DefaultIndividualCard",docgenInfo:DefaultIndividualCard.__docgenInfo,path:"stories/1-Card.stories.js"}),NoImageIndividualCard.__docgenInfo={description:"",methods:[],displayName:"NoImageIndividualCard"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/1-Card.stories.js"]={name:"NoImageIndividualCard",docgenInfo:NoImageIndividualCard.__docgenInfo,path:"stories/1-Card.stories.js"}),NoLogoIndividualCard.__docgenInfo={description:"",methods:[],displayName:"NoLogoIndividualCard"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/1-Card.stories.js"]={name:"NoLogoIndividualCard",docgenInfo:NoLogoIndividualCard.__docgenInfo,path:"stories/1-Card.stories.js"}),NoTitleIndividualCard.__docgenInfo={description:"",methods:[],displayName:"NoTitleIndividualCard"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/1-Card.stories.js"]={name:"NoTitleIndividualCard",docgenInfo:NoTitleIndividualCard.__docgenInfo,path:"stories/1-Card.stories.js"}),HoverIndividualCard.__docgenInfo={description:"",methods:[],displayName:"HoverIndividualCard"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/1-Card.stories.js"]={name:"HoverIndividualCard",docgenInfo:HoverIndividualCard.__docgenInfo,path:"stories/1-Card.stories.js"})}},[[288,1,2]]]);
//# sourceMappingURL=main.7155cbaddf6d2b46fa38.bundle.js.map