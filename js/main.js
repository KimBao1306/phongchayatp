import HeaderModule from './modules/HeaderModule.js';
import HeaderDropdownModule from './modules/HeaderDropdownModule.js';
import HeaderFixedModule from './modules/HeaderFixedModule.js';
import LightGalleryModule from './modules/LightGalleryModule.js';
import MfpModule from './modules/MfpModule.js';
import SwiperModule from './modules/SwiperModule.js';
import TabModule from './modules/TabModule.js';
import FlatPickrModule from './modules/FlatPickrModule.js';
import LoadingModule from './modules/LoadingModule.js';
import ScrollToTopModule from './modules/ScrollToTopModule.js';
import ViewportModule from './modules/ViewPortModule.js';
import FormatPhoneNumber from './modules/FormatPhoneNumber.js';
import HeaderCateModule from './modules/HeaderCateModule.js';
import SearchModule from './modules/SearchModule.js';
import FilterModule from './modules/FilterModule.js';
import BannerModule from './modules/BannerModule.js';

jQuery(window).ready(function ($) {
	LoadingModule();
	HeaderModule();
	HeaderDropdownModule();
	HeaderFixedModule();
	CounterModule();
	LightGalleryModule();
	MfpModule();
	SwiperModule();
	TabModule();
	ScrollToTopModule();
	ViewportModule();
	FormatPhoneNumber();
	HeaderCateModule();
	SearchModule();
	FilterModule();
	BannerModule();
});