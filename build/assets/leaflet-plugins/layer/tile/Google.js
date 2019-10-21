//# sourceMappingURL=Google.js.map
L.Google=L.Class.extend({includes:L.Mixin.Events,options:{minZoom:0,maxZoom:18,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",opacity:1,continuousWorld:!1,noWrap:!1,mapOptions:{backgroundColor:"#dddddd"}},initialize:function(a,b){L.Util.setOptions(this,b);(this._ready=void 0!=google.maps.Map)||L.Google.asyncWait.push(this);this._type=a||"SATELLITE"},onAdd:function(a,b){this._map=a;this._insertAtTheBottom=b;this._initContainer();this._initMapObject();a.on("viewreset",this._resetCallback,
this);this._limitedUpdate=L.Util.limitExecByInterval(this._update,150,this);a.on("move",this._update,this);a.on("zoomanim",this._handleZoomAnim,this);a._controlCorners.bottomright.style.marginBottom="20px";this._reset();this._update()},onRemove:function(a){this._map._container.removeChild(this._container);this._map.off("viewreset",this._resetCallback,this);this._map.off("move",this._update,this);this._map.off("zoomanim",this._handleZoomAnim,this);a._controlCorners.bottomright.style.marginBottom="0em"},
getAttribution:function(){return this.options.attribution},setOpacity:function(a){this.options.opacity=a;1>a&&L.DomUtil.setOpacity(this._container,a)},setElementSize:function(a,b){a.style.width=b.x+"px";a.style.height=b.y+"px"},_initContainer:function(){var a=this._map._container,b=a.firstChild;this._container||(this._container=L.DomUtil.create("div","leaflet-google-layer leaflet-top leaflet-left"),this._container.id="_GMapContainer_"+L.Util.stamp(this),this._container.style.zIndex="auto");a.insertBefore(this._container,
b);this.setOpacity(this.options.opacity);this.setElementSize(this._container,this._map.getSize())},_initMapObject:function(){if(this._ready){this._google_center=new google.maps.LatLng(0,0);var a=new google.maps.Map(this._container,{center:this._google_center,zoom:0,tilt:0,mapTypeId:google.maps.MapTypeId[this._type],disableDefaultUI:!0,keyboardShortcuts:!1,draggable:!1,disableDoubleClickZoom:!0,scrollwheel:!1,streetViewControl:!1,styles:this.options.mapOptions.styles,backgroundColor:this.options.mapOptions.backgroundColor}),
b=this;this._reposition=google.maps.event.addListenerOnce(a,"center_changed",function(){b.onReposition()});this._google=a;google.maps.event.addListenerOnce(a,"idle",function(){b._checkZoomLevels()})}},_checkZoomLevels:function(){this._google.getZoom()!==this._map.getZoom()&&this._map.setZoom(this._google.getZoom())},_resetCallback:function(a){this._reset(a.hard)},_reset:function(a){this._initContainer()},_update:function(a){this._google&&(this._resize(),a=a&&a.latlng?a.latlng:this._map.getCenter(),
a=new google.maps.LatLng(a.lat,a.lng),this._google.setCenter(a),this._google.setZoom(this._map.getZoom()),this._checkZoomLevels())},_resize:function(){var a=this._map.getSize();if(this._container.style.width!=a.x||this._container.style.height!=a.y)this.setElementSize(this._container,a),this.onReposition()},_handleZoomAnim:function(a){var b=a.center,b=new google.maps.LatLng(b.lat,b.lng);this._google.setCenter(b);this._google.setZoom(a.zoom)},onReposition:function(){this._google&&google.maps.event.trigger(this._google,
"resize")}});L.Google.asyncWait=[];L.Google.asyncInitialize=function(){var a;for(a=0;a<L.Google.asyncWait.length;a++){var b=L.Google.asyncWait[a];b._ready=!0;b._container&&(b._initMapObject(),b._update())}L.Google.asyncWait=[]};