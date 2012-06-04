Ext.define('SFenforce.util.Config', {
    singleton : true,

    config : {
        /* @private */
        beatsBounds: null,
        bounds: new OpenLayers.Bounds(-13630460.905642, 4544450.3840456, -13624163.334642, 4552410.6141212),
        geoserverUrl: '/geoserver22beta2/ows',
        featureNS: 'http://www.sfpark.org/SFenforce'
    },

    constructor: function(config) {
        this.initConfig(config);
        return this;
    }
});
