var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_geo_export_f8b708115f60497fa48ec8a780ec626e_0 = new ol.format.GeoJSON();
var features_geo_export_f8b708115f60497fa48ec8a780ec626e_0 = format_geo_export_f8b708115f60497fa48ec8a780ec626e_0.readFeatures(json_geo_export_f8b708115f60497fa48ec8a780ec626e_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geo_export_f8b708115f60497fa48ec8a780ec626e_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_geo_export_f8b708115f60497fa48ec8a780ec626e_0.addFeatures(features_geo_export_f8b708115f60497fa48ec8a780ec626e_0);var lyr_geo_export_f8b708115f60497fa48ec8a780ec626e_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_geo_export_f8b708115f60497fa48ec8a780ec626e_0, 
                style: style_geo_export_f8b708115f60497fa48ec8a780ec626e_0,
                title: '<img src="styles/legend/geo_export_f8b708115f60497fa48ec8a780ec626e_0.png" /> geo_export_f8b70811-5f60-497f-a48e-c8a780ec626e'
            });var format_whitneynyartists_1 = new ol.format.GeoJSON();
var features_whitneynyartists_1 = format_whitneynyartists_1.readFeatures(json_whitneynyartists_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_whitneynyartists_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_whitneynyartists_1.addFeatures(features_whitneynyartists_1);var lyr_whitneynyartists_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_whitneynyartists_1, 
                style: style_whitneynyartists_1,
    title: 'whitney-ny-artists<br />\
    <img src="styles/legend/whitneynyartists_1_0.png" />  1932.0 - 1933.0 <br />\
    <img src="styles/legend/whitneynyartists_1_1.png" />  1933.0 - 1934.0 <br />\
    <img src="styles/legend/whitneynyartists_1_2.png" />  1934.0 - 1935.0 <br />\
    <img src="styles/legend/whitneynyartists_1_3.png" />  1935.0 - 1936.0 <br />\
    <img src="styles/legend/whitneynyartists_1_4.png" />  1936.0 - 1937.0 <br />\
    <img src="styles/legend/whitneynyartists_1_5.png" />  1937.0 - 1938.0 <br />\
    <img src="styles/legend/whitneynyartists_1_6.png" />  1938.0 - 1939.0 <br />\
    <img src="styles/legend/whitneynyartists_1_7.png" />  1939.0 - 1940.0 <br />\
    <img src="styles/legend/whitneynyartists_1_8.png" />  1940.0 - 1941.0 <br />\
    <img src="styles/legend/whitneynyartists_1_9.png" />  1941.0 - 1942.0 <br />\
    <img src="styles/legend/whitneynyartists_1_10.png" />  1942.0 - 1943.0 <br />\
    <img src="styles/legend/whitneynyartists_1_11.png" />  1943.0 - 1944.0 <br />\
    <img src="styles/legend/whitneynyartists_1_12.png" />  1944.0 - 1945.0 <br />\
    <img src="styles/legend/whitneynyartists_1_13.png" />  1945.0 - 1946.0 <br />\
    <img src="styles/legend/whitneynyartists_1_14.png" />  1946.0 - 1947.0 <br />\
    <img src="styles/legend/whitneynyartists_1_15.png" />  1947.0 - 1948.0 <br />\
    <img src="styles/legend/whitneynyartists_1_16.png" />  1948.0 - 1949.0 <br />\
    <img src="styles/legend/whitneynyartists_1_17.png" />  1949.0 - 1950.0 <br />\
    <img src="styles/legend/whitneynyartists_1_18.png" />  1950.0 - 1951.0 <br />\
    <img src="styles/legend/whitneynyartists_1_19.png" />  1951.0 - 1952.0 <br />\
    <img src="styles/legend/whitneynyartists_1_20.png" />  1952.0 - 1953.0 <br />\
    <img src="styles/legend/whitneynyartists_1_21.png" />  1953.0 - 1954.0 <br />\
    <img src="styles/legend/whitneynyartists_1_22.png" />  1954.0 - 1955.0 <br />\
    <img src="styles/legend/whitneynyartists_1_23.png" />  1955.0 - 1956.0 <br />\
    <img src="styles/legend/whitneynyartists_1_24.png" />  1956.0 - 1957.0 <br />\
    <img src="styles/legend/whitneynyartists_1_25.png" />  1957.0 - 1958.0 <br />\
    <img src="styles/legend/whitneynyartists_1_26.png" />  1958.0 - 1959.0 <br />\
    <img src="styles/legend/whitneynyartists_1_27.png" />  1959.0 - 1960.0 <br />\
    <img src="styles/legend/whitneynyartists_1_28.png" />  1960.0 - 1961.0 <br />\
    <img src="styles/legend/whitneynyartists_1_29.png" />  1961.0 - 1962.0 <br />\
    <img src="styles/legend/whitneynyartists_1_30.png" />  1962.0 - 1963.0 <br />\
    <img src="styles/legend/whitneynyartists_1_31.png" />  1963.0 - 1964.0 <br />\
    <img src="styles/legend/whitneynyartists_1_32.png" />  1964.0 - 1965.0 <br />\
    <img src="styles/legend/whitneynyartists_1_33.png" />  1965.0 - 1966.0 <br />\
    <img src="styles/legend/whitneynyartists_1_34.png" />  1966.0 - 1967.0 <br />\
    <img src="styles/legend/whitneynyartists_1_35.png" />  1967.0 - 1968.0 <br />\
    <img src="styles/legend/whitneynyartists_1_36.png" />  1968.0 - 1969.0 <br />\
    <img src="styles/legend/whitneynyartists_1_37.png" />  1969.0 - 1970.0 <br />\
    <img src="styles/legend/whitneynyartists_1_38.png" />  1970.0 - 1971.0 <br />\
    <img src="styles/legend/whitneynyartists_1_39.png" />  1971.0 - 1972.0 <br />\
    <img src="styles/legend/whitneynyartists_1_40.png" />  1972.0 - 1973.0 <br />\
    <img src="styles/legend/whitneynyartists_1_41.png" />  1973.0 - 1974.0 <br />\
    <img src="styles/legend/whitneynyartists_1_42.png" />  1974.0 - 1975.0 <br />\
    <img src="styles/legend/whitneynyartists_1_43.png" />  1975.0 - 1976.0 <br />\
    <img src="styles/legend/whitneynyartists_1_44.png" />  1976.0 - 1977.0 <br />\
    <img src="styles/legend/whitneynyartists_1_45.png" />  1977.0 - 1978.0 <br />\
    <img src="styles/legend/whitneynyartists_1_46.png" />  1978.0 - 1979.0 <br />\
    <img src="styles/legend/whitneynyartists_1_47.png" />  1979.0 - 1980.0 <br />\
    <img src="styles/legend/whitneynyartists_1_48.png" />  1980.0 - 1981.0 <br />\
    <img src="styles/legend/whitneynyartists_1_49.png" />  1981.0 - 1982.0 <br />\
    <img src="styles/legend/whitneynyartists_1_50.png" />  1982.0 - 1983.0 <br />\
    <img src="styles/legend/whitneynyartists_1_51.png" />  1983.0 - 1984.0 <br />\
    <img src="styles/legend/whitneynyartists_1_52.png" />  1984.0 - 1985.0 <br />\
    <img src="styles/legend/whitneynyartists_1_53.png" />  1985.0 - 1986.0 <br />\
    <img src="styles/legend/whitneynyartists_1_54.png" />  1986.0 - 1987.0 <br />\
    <img src="styles/legend/whitneynyartists_1_55.png" />  1987.0 - 1988.0 <br />\
    <img src="styles/legend/whitneynyartists_1_56.png" />  1988.0 - 1989.0 <br />\
    <img src="styles/legend/whitneynyartists_1_57.png" />  1989.0 - 1990.0 <br />\
    <img src="styles/legend/whitneynyartists_1_58.png" />  1990.0 - 1991.0 <br />\
    <img src="styles/legend/whitneynyartists_1_59.png" />  1991.0 - 1992.0 <br />\
    <img src="styles/legend/whitneynyartists_1_60.png" />  1992.0 - 1993.0 <br />\
    <img src="styles/legend/whitneynyartists_1_61.png" />  1993.0 - 1994.0 <br />\
    <img src="styles/legend/whitneynyartists_1_62.png" />  1994.0 - 1995.0 <br />\
    <img src="styles/legend/whitneynyartists_1_63.png" />  1995.0 - 1996.0 <br />\
    <img src="styles/legend/whitneynyartists_1_64.png" />  1996.0 - 1997.0 <br />\
    <img src="styles/legend/whitneynyartists_1_65.png" />  1997.0 - 1998.0 <br />\
    <img src="styles/legend/whitneynyartists_1_66.png" />  1998.0 - 1999.0 <br />\
    <img src="styles/legend/whitneynyartists_1_67.png" />  1999.0 - 2000.0 <br />\
    <img src="styles/legend/whitneynyartists_1_68.png" />  2000.0 - 2001.0 <br />\
    <img src="styles/legend/whitneynyartists_1_69.png" />  2001.0 - 2002.0 <br />\
    <img src="styles/legend/whitneynyartists_1_70.png" />  2002.0 - 2003.0 <br />\
    <img src="styles/legend/whitneynyartists_1_71.png" />  2003.0 - 2004.0 <br />\
    <img src="styles/legend/whitneynyartists_1_72.png" />  2004.0 - 2005.0 <br />\
    <img src="styles/legend/whitneynyartists_1_73.png" />  2005.0 - 2006.0 <br />\
    <img src="styles/legend/whitneynyartists_1_74.png" />  2006.0 - 2007.0 <br />\
    <img src="styles/legend/whitneynyartists_1_75.png" />  2007.0 - 2008.0 <br />\
    <img src="styles/legend/whitneynyartists_1_76.png" />  2008.0 - 2009.0 <br />\
    <img src="styles/legend/whitneynyartists_1_77.png" />  2009.0 - 2010.0 <br />\
    <img src="styles/legend/whitneynyartists_1_78.png" />  2010.0 - 2011.0 <br />\
    <img src="styles/legend/whitneynyartists_1_79.png" />  2011.0 - 2012.0 <br />\
    <img src="styles/legend/whitneynyartists_1_80.png" />  2012.0 - 2013.0 <br />\
    <img src="styles/legend/whitneynyartists_1_81.png" />  2013.0 - 2014.0 <br />\
    <img src="styles/legend/whitneynyartists_1_82.png" />  2014.0 - 2015.0 <br />\
    <img src="styles/legend/whitneynyartists_1_83.png" />  2015.0 - 2016.0 <br />\
    <img src="styles/legend/whitneynyartists_1_84.png" />  2016.0 - 2017.0 <br />\
    <img src="styles/legend/whitneynyartists_1_85.png" />  2017.0 - 2018.0 <br />\
    <img src="styles/legend/whitneynyartists_1_86.png" />  2018.0 - 2019.0 <br />'
        });

lyr_geo_export_f8b708115f60497fa48ec8a780ec626e_0.setVisible(true);lyr_whitneynyartists_1.setVisible(true);
var layersList = [baseLayer,lyr_geo_export_f8b708115f60497fa48ec8a780ec626e_0,lyr_whitneynyartists_1];
lyr_geo_export_f8b708115f60497fa48ec8a780ec626e_0.set('fieldAliases', {'bike_lane': 'bike_lane', 'bike_trafd': 'bike_trafd', 'borocode': 'borocode', 'date_creat': 'date_creat', 'time_creat': 'time_creat', 'frm_lvl_co': 'frm_lvl_co', 'full_stree': 'full_stree', 'l_blkfc_id': 'l_blkfc_id', 'l_high_hn': 'l_high_hn', 'l_low_hn': 'l_low_hn', 'l_zip': 'l_zip', 'date_modif': 'date_modif', 'time_modif': 'time_modif', 'physicalid': 'physicalid', 'post_direc': 'post_direc', 'post_modif': 'post_modif', 'post_type': 'post_type', 'pre_direct': 'pre_direct', 'pre_modifi': 'pre_modifi', 'pre_type': 'pre_type', 'r_blkfc_id': 'r_blkfc_id', 'r_high_hn': 'r_high_hn', 'r_low_hn': 'r_low_hn', 'r_zip': 'r_zip', 'rw_type': 'rw_type', 'shape_leng': 'shape_leng', 'snow_pri': 'snow_pri', 'st_label': 'st_label', 'st_name': 'st_name', 'st_width': 'st_width', 'status': 'status', 'to_lvl_co': 'to_lvl_co', 'trafdir': 'trafdir', });
lyr_whitneynyartists_1.set('fieldAliases', {'id': 'id', 'last': 'last', 'first': 'first', 'spelling_c': 'spelling_c', 'nyt_name': 'nyt_name', 'nyt_topmap': 'nyt_topmap', 'nyt_topm_1': 'nyt_topm_1', 'tier': 'tier', 'need_tier_': 'need_tier_', 'is_gallery': 'is_gallery', 'spot_check': 'spot_check', 'ocr_error': 'ocr_error', 'malformed_': 'malformed_', 'dont_publi': 'dont_publi', 'gallery': 'gallery', 'number': 'number', 'street': 'street', 'city': 'city', 'state': 'state', 'country': 'country', 'nyt_state_': 'nyt_state_', 'nyt_countr': 'nyt_countr', 'place_slug': 'place_slug', 'suspicious': 'suspicious', 'has_exact_': 'has_exact_', 'location_m': 'location_m', 'lat': 'lat', 'lon': 'lon', 'geocoded-a': 'geocoded-a', 'geocode-pr': 'geocode-pr', 'is_chicago': 'is_chicago', 'is_longisl': 'is_longisl', 'is_midwest': 'is_midwest', 'is_southwe': 'is_southwe', 'is_on_stat': 'is_on_stat', 'city-group': 'city-group', 'city-name': 'city-name', 'city-state': 'city-state', 'city-lat': 'city-lat', 'city-lon': 'city-lon', 'exhibition': 'exhibition', 'year': 'year', 'nyt_year': 'nyt_year', 'nyt_decade': 'nyt_decade', 'email-addr': 'email-addr', 'notes': 'notes', 'random': 'random', });
lyr_geo_export_f8b708115f60497fa48ec8a780ec626e_0.set('fieldImages', {'bike_lane': 'TextEdit', 'bike_trafd': 'TextEdit', 'borocode': 'TextEdit', 'date_creat': 'TextEdit', 'time_creat': 'TextEdit', 'frm_lvl_co': 'TextEdit', 'full_stree': 'TextEdit', 'l_blkfc_id': 'TextEdit', 'l_high_hn': 'TextEdit', 'l_low_hn': 'TextEdit', 'l_zip': 'TextEdit', 'date_modif': 'TextEdit', 'time_modif': 'TextEdit', 'physicalid': 'TextEdit', 'post_direc': 'TextEdit', 'post_modif': 'TextEdit', 'post_type': 'TextEdit', 'pre_direct': 'TextEdit', 'pre_modifi': 'TextEdit', 'pre_type': 'TextEdit', 'r_blkfc_id': 'TextEdit', 'r_high_hn': 'TextEdit', 'r_low_hn': 'TextEdit', 'r_zip': 'TextEdit', 'rw_type': 'TextEdit', 'shape_leng': 'TextEdit', 'snow_pri': 'TextEdit', 'st_label': 'TextEdit', 'st_name': 'TextEdit', 'st_width': 'TextEdit', 'status': 'TextEdit', 'to_lvl_co': 'TextEdit', 'trafdir': 'TextEdit', });
lyr_whitneynyartists_1.set('fieldImages', {'id': 'TextEdit', 'last': 'TextEdit', 'first': 'TextEdit', 'spelling_c': 'TextEdit', 'nyt_name': 'TextEdit', 'nyt_topmap': 'TextEdit', 'nyt_topm_1': 'TextEdit', 'tier': 'TextEdit', 'need_tier_': 'TextEdit', 'is_gallery': 'TextEdit', 'spot_check': 'TextEdit', 'ocr_error': 'TextEdit', 'malformed_': 'TextEdit', 'dont_publi': 'TextEdit', 'gallery': 'TextEdit', 'number': 'TextEdit', 'street': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'country': 'TextEdit', 'nyt_state_': 'TextEdit', 'nyt_countr': 'TextEdit', 'place_slug': 'TextEdit', 'suspicious': 'TextEdit', 'has_exact_': 'TextEdit', 'location_m': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'geocoded-a': 'TextEdit', 'geocode-pr': 'TextEdit', 'is_chicago': 'TextEdit', 'is_longisl': 'TextEdit', 'is_midwest': 'TextEdit', 'is_southwe': 'TextEdit', 'is_on_stat': 'TextEdit', 'city-group': 'TextEdit', 'city-name': 'TextEdit', 'city-state': 'TextEdit', 'city-lat': 'TextEdit', 'city-lon': 'TextEdit', 'exhibition': 'TextEdit', 'year': 'TextEdit', 'nyt_year': 'TextEdit', 'nyt_decade': 'TextEdit', 'email-addr': 'TextEdit', 'notes': 'TextEdit', 'random': 'TextEdit', });
lyr_geo_export_f8b708115f60497fa48ec8a780ec626e_0.set('fieldLabels', {'bike_lane': 'no label', 'bike_trafd': 'no label', 'borocode': 'no label', 'date_creat': 'no label', 'time_creat': 'no label', 'frm_lvl_co': 'no label', 'full_stree': 'no label', 'l_blkfc_id': 'no label', 'l_high_hn': 'no label', 'l_low_hn': 'no label', 'l_zip': 'no label', 'date_modif': 'no label', 'time_modif': 'no label', 'physicalid': 'no label', 'post_direc': 'no label', 'post_modif': 'no label', 'post_type': 'no label', 'pre_direct': 'no label', 'pre_modifi': 'no label', 'pre_type': 'no label', 'r_blkfc_id': 'no label', 'r_high_hn': 'no label', 'r_low_hn': 'no label', 'r_zip': 'no label', 'rw_type': 'no label', 'shape_leng': 'no label', 'snow_pri': 'no label', 'st_label': 'no label', 'st_name': 'no label', 'st_width': 'no label', 'status': 'no label', 'to_lvl_co': 'no label', 'trafdir': 'no label', });
lyr_whitneynyartists_1.set('fieldLabels', {'id': 'no label', 'last': 'no label', 'first': 'no label', 'spelling_c': 'no label', 'nyt_name': 'no label', 'nyt_topmap': 'no label', 'nyt_topm_1': 'no label', 'tier': 'no label', 'need_tier_': 'no label', 'is_gallery': 'no label', 'spot_check': 'no label', 'ocr_error': 'no label', 'malformed_': 'no label', 'dont_publi': 'no label', 'gallery': 'no label', 'number': 'no label', 'street': 'no label', 'city': 'no label', 'state': 'no label', 'country': 'no label', 'nyt_state_': 'no label', 'nyt_countr': 'no label', 'place_slug': 'no label', 'suspicious': 'no label', 'has_exact_': 'no label', 'location_m': 'no label', 'lat': 'no label', 'lon': 'no label', 'geocoded-a': 'no label', 'geocode-pr': 'no label', 'is_chicago': 'no label', 'is_longisl': 'no label', 'is_midwest': 'no label', 'is_southwe': 'no label', 'is_on_stat': 'no label', 'city-group': 'no label', 'city-name': 'no label', 'city-state': 'no label', 'city-lat': 'no label', 'city-lon': 'no label', 'exhibition': 'no label', 'year': 'no label', 'nyt_year': 'no label', 'nyt_decade': 'no label', 'email-addr': 'no label', 'notes': 'no label', 'random': 'no label', });
lyr_whitneynyartists_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});