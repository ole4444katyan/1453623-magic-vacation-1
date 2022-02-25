// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import loadListener from './modules/load-listener.js';
import prizesOpener from './modules/prizes-opener.js';
import {animationPreparer} from './modules/animation.js';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
loadListener();
prizesOpener();
animationPreparer();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
