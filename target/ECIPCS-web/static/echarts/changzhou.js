(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        factory(exports, require('echarts'));
    } else {
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded');
        return;
    }
    echarts.registerMap('changzhoushi', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "320404",
            "properties": {"name": "钟楼区", "cp": [119.902369, 31.802089], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@G@@A@CB@@C@CBC@AAC@@A@A@A@C@A@@@CACB@F@@AB@BDDFFC@A@@@ABCCCC@@ACCCAAAAAACACA@@CCAAABABA@A@A@@@AB@BCBAB@@ABCB@@@B@A@BB@@@@@BB@@BDCDABA@CB@@@@BDCBC@@@@AA@@@@B@@@@C@AB@AA@@@A@@BA@@@@@A@@B@B@B@@@BC@@@@B@@@@@@@@AB@@@@@B@@A@A@@@CCA@@BA@@@A@@@B@@@A@@@AA@@@A@@AA@@@A@@@A@@A@@A@@A@@@@@ABAB@B@@B@@BA@@@@BAA@BEB@@@@@@A@@ACB@AA@@@BB@@@@@BA@@@A@@@@@A@@@@BA@@@@BA@@@B@@@A@A@B@@AABA@@A@@A@@@@@@@A@@A@@@@A@@AA@@AA@@A@@@@A@@BCA@@@AA@@ADECA@B@AA@@AA@@BA@BBA@@@C@BE@@B@@C@CE@E@C@GAAD@@@@@@A@@A@@@@AB@AB@@@@@@@@@A@@@@@@@@@A@@@A@@@@BA@@@@B@@A@@BA@@@A@@@@@A@ABA@@A@@@A@@@@@A@@@A@@@@@@@A@@B@@AB@A@A@@@@@A@@@@@@@@B@@@@A@@AA@BAA@@@@@AB@@@@@@A@AB@A@CGBA@@A@@@A@@@A@@AAA@CA@FA@@B@@CA@@A@@@AB@@BB@@@BGA@@@@ACAB@AB@@AABA@@@A@@@@@@@@B@@@BBABDBB@@AB@@@@@@@BB@@@@@A@AB@@B@@B@@@@@@A@@@@@@B@@A@@@A@B@@A@@@@B@@@@@AA@@@@@@ABA@@@@@A@@@@A@@@@@A@@@@B@@@A@BA@@BB@AA@@@@@@@@@AB@@@@@B@@@B@@A@@@@A@@@@A@@@@@@@BC@@@B@@AAABC@@@C@A@@BA@@@ABA@A@@@@BA@@A@@@@@@@@@@@@C@A@@@@@@@A@@@A@@@ACA@@@@@@@A@A@ABBB@@CB@@@@@@@@@DB@@BB@B@@A@@B@@BB@@@AB@@@@AB@@@BA@@@@@A@AB@@@B@@@@AAA@@AA@AB@A@@@@@@CA@B@@@@@B@BA@@@@A@@A@@@@@AA@B@AA@AA@@BBA@@@A@A@@@@@@@AA@@A@@BAD@@@B@@@B@@BDBFBB@@@@B@@@BBB@@@@BB@@BB@@@@@BB@@@@@B@@@@B@B@@B@@@@@@@BB@@@@@@@B@B@@@@@@@@@B@B@@D@@@@@BA@@B@@AB@@@@B@@@@@@@@@@@@B@@B@@@@@@@B@@B@@B@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@BDH@BCB@@BB@@ABB@@@BB@@@@@@BB@@BB@@@@@B@@@AB@BB@@@@@@@B@@@@@@A@@@@@@@@@@@@@@D@@@@@B@@BA@B@@@@@B@@@BBB@@@D@@A@@@@B@@B@BB@@@@BA@@B@@@BBB@B@D@D@B@BAB@@AB@B@@B@@@ABB@@@AB@@@AB@@B@@@@@B@@@@@@B@@@A@@@@A@@@@AB@@@B@@@@B@@B@@@@@@@BB@@BB@@B@@@@ABA@@@@B@@@@B@@@A@@D@B@@@BBB@@@DBB@@@@@BBB@A@B@@AA@@@BA@@@AB@@@@@@@@B@@@@B@@@AB@@BABB@@A@A@@@@@B@@@B@@@@@@@@@B@@AAA@ABA@ABAB@@@D@B@@ABDB@@@B@AABABB@B@@@AA@@@BB@BB@AA@@B@@A@@@D@BBBDFB@B@@ADA@@BBBBA@@B@@@@BB@@@ABB@@@@@@A@@@@@@@BB@@@@@@@BD@ABD@BA@A@A@@@BDB@@@A@B@@DBB@B@F@BAB@@@@A@@@@B@@@@@FC@@@@@BDA@@B@@@BA@@@@@@BB@@BB@@B@BF@@@@@@@BB@@BB@@@@BA@C@B@@B@BHJ@@BC@@B@BBB@BA@@@B@@@BAB@@BB@@CDAB@@FD@@B@DAJELEDA@@FJHNHNHL@@@@B@B@@@@A@@DB@A@A@@@C@@@@@A@@@@B@B@@@B@@A@@B@@@@@@@B@ABC@@@A@@B@@BD@@@@@@@@BB@@BA@B@@BA@@HA@AD@AADA@B@@B@@@B@@@B@@@@@@@@A@@B@@B@@@A@@@@@A@@B@@@@@@@@@@@B@@@@@@AAA@@@@@ABADAAABA@@@@AAAABAB@DAD@@@B@@@B@@A@@@@@@B@B@@A@@B@@A@@@AB@@@BA@@@@@@DA@BBAB@@A@ABA@@AA@C@@@AAC@@@CAE@A@@XGJCPELCFADAB@@@ACECDE@@@A@AB@@@@@@@A@@A@@AE@A@@@IAADA@CAG@@ACAE@@A@CD@@CAAAA@C@C@CA@@AA@AA@@AC@A@@A@@@@@@BA@@B@@@B@@@@@@@DB@BB@BB@@@@@@@@@A@@@@@@@@@@AA@@B@B@@BDA@AEAA@@AD@@BB@@AA@@@@@@A@@@@@AAA@AA@A@@@A@A@@@@B@B@B@@@BC@AC@@A@CBA@@AC@A@A@E@C@"],
                "encodeOffsets": [[122804, 32520]]
            }
        }, {
            "type": "Feature",
            "id": "320402",
            "properties": {"name": "天宁区", "cp": [119.999219, 31.792787], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@@A@CBEBKDB@@BC@@@BBD@@@@@BBAD@D@@B@D@DB@@@ABA@@B@@@BBB@B@@@@@BBB@@C@@D@@BB@B@HABAACBAD@B@@@@@@@B@@A@GAAFB@BBAB@@AB@DB@BB@BBFB@@DDFDDB@@B@D@FBD@HBH@@@@@@BB@@B@@B@@BB@@@@@@BB@@@@DAHA@@AC@@BA@@D@BABAB@@@@@B@@@@@@DDBB@@BCBCB@@BB@B@D@BADA@@B@@@BBA@@BB@@@@@@@B@@B@ABB@B@B@D@@D@@B@B@@@BB@B@HA@A@A@@@A@A@@@@@AAB@@@A@@@@BA@BB@@@@ABA@@@A@@B@AAB@@@B@@@@@BB@@@@BBDABADA@B@@@@BBBB@AB@@BB@@@@CA@BADFBDDBFFDBB@@@@B@BA@@@DBBC@BABHBDBB@BD@@@BB@DBDB@@FB@@B@@BB@BBDBB@BD@@BABB@@BBAB@@@@BB@@BB@BBB@@B@@@@@BA@@BBB@@@B@BB@@B@@BB@D@BAF@@@@@B@B@@BD@H@B@B@F@F@F@@@BDB@BDFBD@@B@@DAB@@@BAD@D@B@BAB@@@BA@B@@DB@AFBB@B@@AB@B@@B@@@@DB@@@@AB@@@BBB@@AB@@@@@@B@@@BB@@@@@ABBB@B@@@BA@@@@@BA@@@@B@B@@ADBB@@HBBA@A@@B@@@@@B@@@BAB@@@BBBA@@B@@@B@B@ABB@DB@@D@@A@@B@@@@@B@@@B@@@B@@B@@B@@@@@BABB@A@@@@@@@BB@@@@A@@B@@A@B@@B@@A@@BA@@@@B@DC@@@@@@B@@@A@@A@@@@@@B@@@BA@@@@B@@A@@@A@AAA@A@@A@@@@@@C@@@@B@AA@@@@@@A@@@@@@A@@B@@A@@@@@A@@AA@@A@@@CA@AAC@@AAAAAAAC@@@@@@AAA@@@@A@@B@@@@@@@A@@AA@@@A@AABA@@@@AC@AABAA@@CA@@@@AA@@@BA@@@@A@A@ADIDBBA@@@@@@@@@BB@BAB@AA@@BA@@B@@@BACE@A@A@@@@@A@@@@@@@AD@@AD@@@B@BB@@B@BAB@BAB@AA@@AAAAA@@@@@A@AB@@@@AAD@@@@@BAA@AA@DA@@@AABAFE@AA@@@CC@BA@@@@@A@@A@AIAA@C@A@A@A@A@AAABABABEBBDA@@@A@@DA@@@AAA@@B@@A@@AE@E@E@AB@A@A@@A@@AAB@AA@ACAACA@A@ABA@@@@EA@ABA@@A@@@@@A@@@A@ABA@@@A@AA@AAAC@CAAAAD@@CAC@@@A@A@@@BAA@C@IC@@A@BBA@@B@BA@@@AB@@A@AAAB@B@@@BA@AAA@AACC@AAAAAA@@A@ABA@@@CA@C@@B@AA@A@@AA@@EDCC@A@@AA@@@AAB@@A@A@@C@@@A@@@A@@@CA@B@@A@@B@B@@@@BBA@BB@@A@@BA@@@A@A@A@A@A@CD@@@@AAA@A@A@AA@C@@AAA@A@@@A@@A@@A@@@A@AB@@A@@A@AA@@@AB@@@BA@@B@@@AC@@BA@@@A@BB@@A@@@@A@@@BAB@@A@A@@@ABE@@AAC@@@C@@@@@@@@@A@@EAC@C@A@A@A@E@@@AECEAAA@MH@GG@CC@@AAA@C@A@A@@@@C@A@@@@@A@@@ACG@AXM`QDAHCHCAC@@@@@@A@AA@@AABA@@@@@A@@AA@@@C@BEAC@GBE@ODGBAF@@@@@@@D@@A@@@@@C@@B@@@@@@AA@B@@@@@@C@@A@@B@@AA@@AAA@@A@A@@@@@@AAB@@A@@A@@A@AC@@@BAB@BA@@A@@@B@@@AA@@@@@@@@@@@A@@@@B@@@@@@AA@@@@@@@@@@@@A@@AAC@@@@@@@@A@@B@@A@@BCACAA@@F@FAHC@C@C@G@ABA@ABA@ABGFA@C@CBC@A@A@CA@@A@A@@BA@@@A@@F@@B@@@@@@@@@@B@@@BA@@@AA@@@B@@@@A@@@A@@@C@@@A@@@C@@@A@@@@BE@@@ABAA@BA@C@AACB@@@@@D@@A@EACBAAA@A@C@@D@DA@@D@BH@D@F@B@B@D@@BB@DAB@@@BDD@@A@@@A@A@A@@B@B@@@B@B@@BBB@B@@@@@B@@@@B@@BA@@AC@@BB@FB@BCB@AA@A@@@BB@@@@@@@@@@@B@@@@@@@@AAA@@ACA@@@@@@A@@@A@@@AB@@@@@@@BB@D@@BB@@BBB@@DBD@D@B@BBDB@@DCB@@@BFBD@@BH@DCBBB@J@@@BBF@@@BB@@@@@@@A@@B@B@@CFFDBD"],
                "encodeOffsets": [[122840, 32562]]
            }
        }, {
            "type": "Feature",
            "id": "320411",
            "properties": {"name": "新北区", "cp": [119.971697, 31.830427], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@CC@@EAAAA@@ACAA@@BA@AB@AEABB@H@BA@@@@@@@A@C@ABBDABGBA@A@@AC@@@@DA@AA@@@@A@A@AA@@A@@@AB@B@@CAC@A@@@@CBCAA@@@@C@AA@@D@@AA@OFIDWH@@@BBF@D@@BD@B@@@DBB@@AB@B@BA@AB@ACB@@@@@@AB@@A@@B@@@BA@@@@BA@A@@@@@@@@BA@@@A@@@C@CBA@ABBBBB@@@@ABBBCBAB@B@@@@BB@B@@@@A@@@@@@@@@@@A@@@@B@@@@@B@@@AA@@@@B@@@@@@A@@@A@@@A@@@@ACBBBC@@BGB@@AB@@@AAB@@AA@@@@@@@@AC@@@AB@@@D@BAA@@@@@@@A@@@@BA@@@A@A@@@@@@B@@@@@D@@@B@BCA@@@B@@A@A@@@@@GKGMGMEI@@CBKFIFCBA@@@EC@@BADC@@AA@@BA@A@@@A@@ABA@AAA@@@AD@@GI@A@AA@D@B@@A@@A@@AA@@A@@@@@@AEA@@@AA@@AA@@@@@@AB@@A@@@CB@A@@@@ED@@@@A@@@@@@B@@A@ABE@A@A@CA@@@A@B@@CA@A@@@B@BABC@BAC@@A@@@@@@AA@@@@@@B@@@@@@@AA@B@@AA@@@@@AB@AAAA@@CB@BA@A@CEAA@A@C@@@BA@@@BBA@@AAA@@B@@B@@@AAAABBBA@@@A@AC@BA@C@@@A@AB@BAB@BBB@BA@@@@@@@@@A@@@A@@@@@B@B@@@AAAB@@BA@@A@@@@@@A@@@@@@A@@B@@AB@@B@@BA@B@A@AA@@@@A@CA@@A@AA@@A@C@@@@B@@@@@@B@@@B@AB@B@B@@A@A@@@@B@@@@ABAB@@@B@@@BA@@B@@@@@BBA@@@BB@@@@@@B@@B@@@@@@@B@@@@@BA@@B@@BBB@@B@@B@@@BAB@@AB@@@@@@@B@@@@B@@@@B@@@B@@@@@B@@@@@BB@@@@@@@B@@@@BD@B@@@@@@@B@BB@@@BBA@DA@@@@@@@@B@@@@B@BBB@BB@@ABC@BB@@@BB@@@@@B@@@@@BA@@N\\@@@B@A@@A@C@@@A@@@@@@@A@A@@B@@A@@@A@@@@@@AABAA@@BB@@A@@@A@@@@@AA@@@@AB@BA@EA@@A@@@A@@AC@@AA@@@@@A@@A@B@@@@@@@BB@@@@@@B@@A@A@@@@@A@@@A@@@@@AB@@@A@@@@A@A@A@@@@AA@@@AA@@B@@@A@@AA@@@@@@@B@A@@A@@@@@@@@AA@@@@@@@@@@A@@B@@A@@@@ACB@@@AC@A@@@A@AD@BA@@BBB@BAA@B@@@AA@ADADABAB@B@@@@@BB@BBA@B@@@@B@@B@ABBBA@@@@B@@@@@B@@@DB@@BB@AB@@A@B@@B@@CB@B@@@@@@@@A@@@@@ABA@@B@@ADAA@BAB@@@@@B@@A@@B@@@@AB@@@@A@@@@@@BA@@BA@@B@@@B@B@@@B@@@BBB@BDAFC@@BB@@BB@@DDBABB@@@@ABB@B@@@@@B@@B@@@@CBDBB@@@@B@@B@@@@BB@@B@B@@BB@@B@@@B@@DD@@AB@@BBA@B@@B@@@H@@@@B@@@@@@@@@@DBAD@@@BA@@D@@@@@B@@BB@BBAAB@H@H@@@B@@@@@@@@@@A@BB@@@B@@BA@@@B@@@@B@@B@@@@@@B@@B@@B@@@@A@@D@@B@@@@BB@@D@@@BBA@@B@DC@@@A@@@B@@@ABAAC@@BA@@@@BB@A@@B@@@@@@@BA@@BBBA@@@A@@@BBA@@@@@@@@@@@CBA@@AA@@@@B@@@BA@@@@@AB@@@@BDA@BD@@A@B@@D@@ADA@@@A@@@BAA@@@@B@@A@@ACBAA@@@@@BA@BB@@@@B@@DA@@BA@@@A@@@BHC@BF@@BBB@BHCBB@@@BB@@@@@@@B@BD@BJA@BBC@@@@@@B@@B@@BA@@DB@@@@BB@@@@@@DDB@@A@BD@@B@BFE@@BBD@@@FB@@@@@@A@@@B@@@@B@BB@B@B@@@B@@@DAB@@@@@D@@B@@@@B@B@@@BB@@@@@CB@@@@A@@DB@@B@BB@@B@@@@@@@@B@@@B@@@B@BF@@B@@DCB@AC@@@C@@BEBBDBA@D@@DA@@@BDFA@@B@@B@BB@B@@A@@D@BD@@BB@BDBA@D@@@BA@@@B@@@@@BDB@@B@@@@@B@B@DBB@BHNBBBD@@BB@@BB@@@@@B@@BBBBD@@@@@D@D@B@B@B@BBB@B@BAB@D@@@B@@@B@B@B@B@B@B@B@BABAB@@@@AB@@@B@@@B@@@B@B@B@B@@@@BB@@@BA@@@BB@@BBA@@BB@@@@B@@@B@@@@@@D@@BBB@@BB@@@@BB@B@@B@@@@@@HADATM@@@@ABBBB@FD@@DDFDBABB@@BA@@DG@@@AA@@CBC@@@@@ABABA@CB@DEDADABABBD@@B@D@BBB@BBBB@BB@@B@D@F@DAAAAC@A@E@@@ABEFKDG@ABCDKBCBCDCBCDAFEDAB@BAD@D@JBH@D@D@F@FAF@NCB@B@B@B@BBBBDHDDJJBBFDFDLQJIDCDCFGLKNMFEBCZWKSACEG@A@ACC@A@E@A@@BA@@AA@A@@@@BA@@@A@@@@AA@AAA@@B@@ABA@CBA@A@@BA@@@@@AB@B@BAB@@A@@@ABABB@ABA@AB@BA@@@@DA@@@A@@@A@@@A@@AAA@AA@@AAEAA@C@A@A@@AA@A@@A@@@@@A@AA@@@C@@@@@@@AA@AA@@@@@B@@AA@B@@A@@@@A@@@@@@AB@@@@@B@@@@A@@@@@@@A@@A@@@@@@AB@@B@@@A@@@@A@@@@@@AB@@@A@@AA@@@@A@@@@B@@@@A@@@@@A@@@@AA@@A@A@@@@@AA@@A@@@BABA@@B@@@A@@@B@@@B@@@@A@@@B@@@@@@@A@@@@@AB@AAB@@@@A@@@@B@@@@@@A@@A@@@@@@@D@@@@@@@@@@@@@B@@@@@@@B@@@B@@AA@@@@@@AA@B@B@@@@AB@@@@A@@@@@A@@BA@@@@BB@@@@B@BB@@BABA@@@@@@@@@A@@@@@@BAA@@@@A@@@AA@@@@@@A@@@AA@@@@@A@@@@@A@AA@C@@@@B@DC@@@A@@@@A@AAB@@@AA@@A@@A@@A@@@@@@A@@A@@@@@@@@CBBB@@AA@B@@@@A@@A@@@@@A@@@@@@@AA@@@@AB@@AA@@@@@@A@@@A@BC@A@A@@B@GC@ABAA@@@@D@B@@A@A@@@CAA@@@@@A@@@@@@@A@@@@A@@@@@@@@@A@@A@@@@@@@@@@@@@@@@AC@A@A@@BA@@EB@@@@@@A@@@A@@DBBAAA@@@@D@@@F@@A@@@@B@@A@A@@FABG@AAEFB@@@@@AB@@@B@@A@@@A@@@A@@@AA@@BAA@A@A@CACFCB@@A@@@@@@@A@@@@BABA@A@CB@@AD@@BB@BG@C@@A@@A@@@@A@@AA@@@@AA@@A@@@@G@GAC@EAC@A@@@CAEC"],
                "encodeOffsets": [[122869, 32568]]
            }
        }, {
            "type": "Feature",
            "id": "320413",
            "properties": {"name": "金坛区", "cp": [119.597811, 31.723219], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@AA@@A@@@@BA@@AB@AAB@AA@A@A@@@A@ABAE@@@@@A@@@A@AB@@@A@@A@A@@B@AA@@@@@A@A@A@@B@@@A@@A@@@A@A@@@@@@C@CB@@G@@@A@A@CACAA@CC@@EAA@@@A@AAE@C@@C@@A@@@A@A@@@@@AA@@@A@@@@@A@@@@@@@@ACB@@A@BB@@A@@@@@A@@B@@@@@B@@@BB@A@@@@A@A@@@@A@A@@BAB@@@AAA@@AB@@@@A@@@@A@@AB@@A@@@AAA@@@ABABA@@@@@@AA@AA@@B@@@@@AA@@@BAB@@@@@AAB@@BBA@@@AA@@A@@@@@@@A@@@@B@@@@AA@@A@@A@@B@A@@CCA@A@@AA@@A@@@@@AA@A@@@BA@AAB@@BAA@@BA@@A@@A@A@@@@@@@@BA@@@@@@@@@B@@@@AA@@@@@@AA@@AA@@@A@@AB@@A@A@@@A@A@@@@@A@AA@E@G@A@EAA@EAA@@B@B@@B@@@@B@@@@@B@@@@DD@@@B@BA@AB@@A@@B@@@@A@@A@@@BA@ABAAA@@@C@@D@@@@C@@@B@@@A@@B@AAB@@@@E@@@A@@@@@@@@@@BAAA@@@A@@AAAB@AA@A@@@A@@AAAA@@A@A@@@CA@AA@@@ABABAA@@@@@BCBABA@A@C@AAA@EAKAC@E@GBABCBCBCDC@ABC@A@C@G@C@uBKCIAKB@@GBCB@A@@@AAB@@@@@@B@@@@@@B@@@BA@@@@@A@@@A@@@AB@ACB@@A@BB@@A@A@B@AB@@B@A@@BA@CBC@@@@B@@AA@@@AA@@@A@@BA@@@@BCDBB@@CB@AA@@B@@@@@@@@@B@@@@@@@@@BA@@BBB@@@BEDACB@@A@@@@@A@@A@@@@B@A@@A@@A@@@AA@@@A@@@@BA@@@A@@A@BA@@A@@@@@@@@@@@@@A@@@@@@B@B@@@B@@AA@@@@@A@@@@@@A@@@@A@@@@@A@@@@@@B@@@@B@@@@@@@@@@@AB@@@@@@@@@@@@@@@@A@@@@@@@@@@@@B@@@AA@A@@@@AA@@@B@@AC@A@BAAC@AA@@@@B@@@@@AA@@B@A@@@@A@@@@@@@@@A@@B@@B@@@@@@BA@@@@@@@@@@@@B@@@@@@A@@@A@@@@@@@A@@@A@BF@DBBA@AA@@@@@B@@@@@@@@@@@@@@@B@@@B@@@@@@@B@@@@A@@@@@@B@@@BEA@@@@@@@B@@A@A@@@@@@@G@@@@B@@@@C@@BA@A@@A@BCA@@@BA@A@@BA@@B@@@@@BABCC@B@B@@@@@@@BA@@@@@@B@@@B@@@AA@A@@@@@AB@BB@@@@@@@@B@@@@AB@@@@@@A@@BB@@@B@A@@B@B@@@@@@@B@@B@E@@@A@@B@@@@@@@@@@@@A@AB@@@AA@@BB@@@@B@@@@A@@@@@@@@@@@@@BB@@@@@@@@A@@@@@@@@@@AA@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@B@@A@@@BB@B@@AA@@@@@@A@@B@@@B@@DB@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@@B@AAB@@@@@@A@@B@@@B@@@@@@B@@@@@B@@@BB@@@@BB@@@@@@@@@@A@@@@BAA@@A@@@@@@@A@@@@@@@A@@BA@@@@@@@A@@BB@@@@@@B@@@A@@A@@@@@@@@B@@A@@@@@A@@@@@@@@BA@@@@@@@AB@@@A@@A@@B@@@@@@A@@BB@ABAA@@@A@B@A@@@@AB@AAB@A@B@A@BA@@@@@@B@@@@@@@@A@@@A@@@@@@A@@@@A@@@@A@@@@@@@@@@@@@@A@B@AB@@@@A@@A@@@BAA@@B@@@@A@@@@@@B@@@@@@@AA@@@@A@B@@BAA@B@@@@@@A@@@@B@@@@@@@BA@@@@@@@@BB@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@B@@@@BA@@@@@@@@@@@@BA@@@@@AB@@@@@@A@BBA@A@@@@@@@A@@B@@A@@@@@@@AB@@A@@B@@@@AB@ACAB@@@@@@@@@@A@@@@BB@@@A@A@AA@@@@@A@@@@@@@@@@@@A@@@@@@@@B@@A@@@@@@@@@@@@@AAB@@@A@@A@@A@@@@@@AC@@@@@@A@@@@@@B@AA@@B@@@@@@@AA@@B@@@@A@@@@@@@@AABAA@@@@AB@@@@CB@AAB@@@@A@@@@@AB@@@@A@@AABA@A@A@BBA@BB@@BA@B@@@@@@A@@@BBAB@@@@@BAB@@@@A@@@@@A@@B@@A@@BA@@@@@@BA@@@@@@@A@@@@B@B@@@@@@A@@@@@@@AA@B@B@@A@@@@@A@BA@@ABAB@B@@A@AB@@A@ADC@@@@D@B@@@@AB@@ABAB@DA@@BAB@@AD@@@BEA@@ABA@@@@B@B@BA@@B@B@B@@A@AB@BB@@@@BBB@@@@@@@B@@@@B@@@BB@ABD@@@@B@@@B@@AB@@@BC@@@@BAB@@A@@@A@A@@B@B@@BA@@@BB@B@@@@BAB@BC@@@AD@DADCB@@@@BBA@@DB@ABBCBABABBB@B@@@@BBCDAB@@@B@BA@B@@BB@BBB@@B@BAB@BA@AAC@@@AAA@CAA@A@A@C@@@@@A@@DC@@@A@A@EB@@@@A@@@@@C@CB@@ADA@CB@BA@CB@BBBB@@B@@B@@BABAB@@@BB@@@BB@B@@@@@B@@B@@F@@@BB@@D@@@B@@BFBA@@@@@DBB@@@B@@@@AA@@A@@B@@@@@A@@A@@@@BA@@@EF@B@@AB@@A@@BB@@D@BA@A@@B@@BB@@@@BD@BBB@@@@B@B@BBB@B@@@B@AA@@@AB@BB@B@@BB@@A@@B@@@B@@@@BB@@@BB@CBABABAB@BA@@BB@@@@B@@A@A@@@A@@@A@A@@@@@@AB@@@@@@@A@@@@@@@@A@@A@@@@@@@B@@@@@@@@@@@@@@@AAA@@@AAA@A@CB@@AAA@@@@@AD@@AB@@A@@@@A@@AB@@A@@@@B@@B@@@ED@@BB@@@@AB@B@@D@DA@BD@BBA@@@@@A@@@@@@BB@@@@@@@BA@B@B@@ABIB@@@B@@DB@B@@@B@@@@AB@@A@AD@BB@@B@@AB@B@B@@BB@BEA@@@@AD@B@@@FBB@@@B@@A@@@@B@@B@BB@@@BA@BD@@BBB@@@@B@B@@@B@@@B@B@B@@@B@@D@D@B@BBDA@B@@@B@B@B@@BB@BD@@@@B@@@@@@@@BBA@BBB@@@@@@@A@@@@@AD@B@@@@BBB@@B@D@D@B@DAAC@C@@@@@AB@D@B@B@BBB@@@@@B@BABB@BB@B@BB@BBA@@B@@@BABAB@@@BBBBBB@@B@BBB@@@BB@@@@@B@AB@B@B@BB@BB@@@B@B@@B@BB@BBB@BB@HBBDBDABABABB@@BBB@DAB@@ABBDA@@@@@BB@@@@@BBB@B@@@A@@BA@@B@B@@B@@B@@@@BABB@BB@B@@BD@B@BB@@@B@@@B@B@@B@CD@@AFADFDD@B@@B@@CB@AA@A@@B@B@@@B@BBB@@AD@BBD@B@B@@DB@@CB@DB@CB@@A@@@@B@@ABB@@B@@@@A@@C@@AB@@A@@@@@@B@AAB@@@@@@@@@@AB@@@B@@@@ABA@@B@@@@A@@AB@@A@@@AA@@A@@A@@@A@@BA@@B@@@AB@@@BA@B@@@@@@@@@@@@@B@@A@ABBB@B@@@@@BBB@@@@@BABB@@B@@@@@@@B@@@B@@@B@F@@@B@@@@@@@BA@@@AD@@@AB@@@@B@@@@@@@@@BA@@@@A@BA@@@@B@@@@@B@@@@@@@@@@@@@@@B@@@B@@A@@@@@A@@@@@@@AB@@@@@@@@@@A@@@@BAA@@@@@@@B@@AA@@@@@@AA@@@@@B@@@@@@@@@A@@@@CD@B@@@B@@@BABAD@@@BBDAB@BAB@@@D@FBB@B@@@@@@A@@@@@@B@@@@@@@B@@@@A@@B@@@@@@AB@@@@@@A@@@@@@@@@@@@@@@@@@@@BA@@A@B@@B@@@BB@@@@@@B@@B@@A@@@@@@AA@@@A@@@@@A@@@@B@@BBA@B@@@@@BB@@@@@@@@@@@@@@@@@B@@@@@@BB@@B@@@BB@@A@@B@BD@@@@B@B@@A@@@AD@@@ACB@B@B@@A@@@AB@@@C@@AB@@@B@@A@@J@BBB@@@@@@B@@ABB@@BB@@@AB@@@@A@BBAB@BA@@@@BA@@@@@@@@@C@CB@B@D@@@@C@@DFA@B@@B@@@B@AB@BAA@@A@@@@@@@@@@BA@@A@@@B@@A@@B@@@B@@@AA@@B@@BBA@@@@BAA@B@@@@@B@@@@@B@@@@@@@@@@B@@B@@A@B@@@@@@@@@B@@@@@@B@@@@@@@BA@A@C@@@AB@@CB@@C@AAC@A@A@@@AB@DC@@@A@@DBB@@@B@@@@@@@B@@@@B@@A@B@@@B@@@@@@@@@AB@@@@@@B@@@@BB@@D@BBBBDB@BBB@BBB@@A@@B@@C@@@@BABHDHBDBB@@BBB@@F@@@B@BA@DB@@@@B@@@@@@DB@@@B@@@@@@BB@@@B@@DADD@A@BB@B@BB@@@@@BDB@@@B@AB@@@@@@@@@@@B@@@BA@@FABAD@@A@@@@@@@@@A@@BA@@@A@@BAA@@AB@@@@AF@@A@@@ABCBA@@@@@A@@H@FBBAFGB@@@B@@D@@@@@@@@B@@@BA@BBA@@@AB@A@@@AADAFA@@B@AAFA@AB@@ADCDABABB@@@@@@B@@@@@B@@B@@@AB@B@@C@@D@DA@@B@BE@@@@D@B@B@@@DBB@F@FBB@D@B@B@BBB@D@B@BAD@@@@@B@B@@@VBD@@@B@@@@CDB@@@B@@@BF@AF@@BBBB@BA@@BB@@BD@@AFD@@@E@@@@@A@BA@@A@@@@A@@AB@@@A@@@@@@A@@B@A@B@@@BAA@@ABAB@@@@@@@@@@AHB@@@ABB@A@@B@@@@@@@B@B@@AB@@@@@AA@@@@@@B@@@@@@@@@@@@BB@@@@@@@B@@@@@B@@B@@@@@@B@@A@@BA@B@@@A@@@A@@@@A@@@BA@@B@BA@@A@BA@@@@@@@A@B@A@A@@B@@@@@@AD@@@@@BAB@AB@@B@BA@@@BB@@@B@@@@@@@@@D@@@A@@BAA@B@@B@B@@@@BH@@@A@@@B@@AB@@CAB@A@A@@@AB@@AB@@@@AB@@@@@@@@A@@@@A@@A@@B@@@@@A@A@@@@A@@@@B@@@@A@@AABA@@@@AAB@@A@@B@AAAB@@@A@@BABB@A@BB@@A@@@@@@B@@@@@D@@@B@BAB@@A@@BA@A@@AAA@@@@AB@@A@@@@@@@@B@@AD@F@@A@@@@@@@@@@@AB@@@@AAC@@AAA@@C@@@@AA@@B@@@@@@@@@B@@@@@@@@A@@A@@@@AA@@@@@BA@@@@B@@@@@@@BB@A@@@@@@BA@@CG@@@@B@@@@CF@B@@@@@@@@C@@@@BA@@@A@@@@@A@A@@AAB@@@B@@@B@@@BAB@@@JBBAB@HABB@@BD@@@BB@B@@@@B@D@@@@D@FAB@@@@A@@@@@B@@BAA@@AA@@@@A@@@BB@@A@@@@B@AAB@BABB@@AA@@@@B@@@@@@@@@@A@@@@@@@A@@@BB@@@@A@@A@@@B@@@@@@@B@@@@@@@@@@B@@@@B@A@B@@@@@@@@@@@@BB@BA@B@@@@A@B@@@@@B@@@@@@@@@BB@@@@DCFEA@@@@@@AC@@C@@@@A@@B@A@@@@@ADA@@A@@@@A@@@@@@@@B@@AA@@@BA@@BEB@@A@@@@@@B@@@@ABB@A@@@@@ABB@A@@@@A@BA@@@@@A@@@@@A@@B@A@B@@A@@@@@@B@@@@A@@B@@@B@@A@@@@B@@@B@@A@@@A@@B@@B@@@@@@@@B@@@@@B@@@B@A@B@@B@@@@BABB@@B@AB@@@@BA@@@@B@@@B@@@A@@@@@B@@@@A@@@@@@AA@@B@@@@@@A@@@@B@@@@BDA@@@B@B@@@@@@@@@@B@@@B@@@@@@@CA@@DB@A@@B@@B@@@@@@@@B@@@@@@@B@@@BB@A@@@@B@@@@@@@@@B@@@B@@AA@@@@@@A@@BB@AB@@AA@@@@AB@@@B@B@@B@@DA@@@@D@@@@@DB@@@@B@@@@AB@@@@@@AB@@@BA@@B@@@@@B@@A@@@@@A@@@AB@@@@A@@@@@@B@@@@AAA@@@@A@@AA@@@@@BA@@A@@@@@@@B@@@@AB@@A@@B@@@A@@@BCBAB@@@BB@@AABAB@@@@AB@B@@@@@@A@@@ABB@@B@B@@@BAB@B@B@@A@CAA@@BA@@@A@@@A@ABA@@@CA@@@AA@@B@@BD@@AA@@@B@B@AAB@@@@A@@@BFB@@@AB@@B@AD@@@@AB@@@B@@A@@@BBAA@B@@A@@BDDAB@B@@@@AB@FAB@DAB@@@DB@C@@@A@@@@@AD@@@@@P@@BB@@@B@@@@@@AA@B@A@@@@@@@@@@AB@AC@@BB@@AAF@BA@@B@@A@A@@B@BB@ABBB@@A@@@@@A@@@@@AA@@A@@@A@AB@B@B@@@@@@C@AA@@@A@@@A@@@CB@@AA@AB@BA@@@CCCB@@@@AA@ABB@A@@@AB@A@@A@A@@@A@@A@@BAA@BAD@B@@@@@@@@BB@@@B@@@B@BAB@@@@@@AA@@@A@CC@@@@@@@@AA@@@AAACB@@ACA@C@@@A@@A@@A@@AAB@ACBA@A@@@@AA@A@@@@@AAAB@@@@A@@A@AB@AAA@@@@@@@@B@@@@A@@@@@@@@B@@@@@@@@@@@@A@A@@BA@@@@@@AA@A@BB@@@@A@@@@BB@@@@@GB@@@@@B@@@@A@@@BB@@@@A@@B@@@@A@@B@@@@@BA@@@CA@@@@@@@B@@@@BBA@CB@A@@CAA@@@AA@@A@@@A@@@AAA@CBC@@@BAAAAB@@@@@@@B@@A@@@@A@@@@A@@@BA@A@C@@@@@@@A@@@AAB@AABAAB@@A@@A@@@@@@@AA@@@@B@A@B@@A@@A@@@@@B@@@@@@A@@@@B@@@@A@B@@@A@@@@A@AB@@ABACBA@AAA@A@@@@@@@A@@B@AAB@@@@@B@@@@@@A@A@AD@B@B@@@@@@AB@@@@AD@@@@@@AABAAC@A@@@@@B@@A@@@@@A@@@@@A@@@@@@A@@A@@AC@@B@@@@@B@@@AA@@B@@@B@@AAB@@@@BAAA@A@@@@AC@@B@@@@@B@@@@@@@@A@@@@B@B@@@@@@@@@B@@@BAB@D@AAB@AABA@@@@AA@@@@@@A@@@@A@@A@DAAAAA@@ABA@@@AD@@A@A@@@@AB@@@BAAA@@B@AC@@@@@@B@AAC@E@@@A@AAAB@@@B@@@B@@@A@@@@A@@AAB@@@A@A@@@A@@@C@@B@@@CGBAAA@C@ABA@@@A@A@BB@@ACC@@@AB@@@B@@@@A@A@@@@@AB@@@@@AABAA@@B@@AAA@@@@@@AB@@A@@@@AA@@@A@B@AA@@AA@@@@@A@@@@@@@A@@@@@A@A@@@AAC@@@"],
                "encodeOffsets": [[122553, 32387]]
            }
        }, {
            "type": "Feature",
            "id": "320481",
            "properties": {"name": "溧阳市", "cp": [119.48421, 31.416911], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@@A@@@A@@@@AA@@@A@@@@@AA@@@@AA@@A@@@@AA@@@@@AA@@@@AA@@@@A@@@AA@@@@A@@@AA@@@@A@@@A@@AA@@@A@@@@BA@@@AB@@@@@@@B@@A@@@@B@@@@@@@B@@@@@@@BA@@@@B@@@@@@@@@B@@@@AB@@@B@@@@@B@@@@A@@@A@@@AB@@A@@@A@@@@@@@@@A@@@A@@@@@A@@@@@A@@@@@A@@@@@A@@@A@@A@@B@@A@@@@@A@@@@@@@A@@@@@A@@@@A@@A@@@@A@@@A@@A@@@@A@@@@@AA@@@@A@@@A@@@@@A@@@@@A@@@A@@@@@A@@@A@@@@B@@A@@@@B@@@@@@@BA@@@@@@B@@@@@@@B@@A@@@@@AB@@A@@@A@@BA@@@@@A@@@@@A@@@@BA@@@A@@@A@@@A@@@AB@@A@@@@@@@A@@@A@@@@@AB@@@@A@@@A@@@@@A@@B@@A@@B@@AB@@@@@@AB@@A@@@@@@@@B@@@@@B@@@@@@@@BB@@@@@@@B@@@@@@@B@@@@@@@B@@A@@@@@@@AA@@@@A@@@@@A@@A@@@@A@@@@@AA@@@@A@@@@AA@@@@AA@@@@@AA@@@@@@@AA@@A@@@@A@@@@@@@A@@@@BA@@@@BA@@@AB@@@@@BA@@@@B@@A@@B@@@B@@AB@@@@@@@B@@@@@B@@@@@@BB@@@@@@@B@@@@@@@B@@@B@@@B@@@B@@@B@@B@@B@@@B@@@B@@@@@B@@@@@B@@@B@@@B@@@@@B@@@B@@@@@B@@@@@@BB@@@@AB@@@@@@AB@@@@A@@@A@@@A@@@A@@@A@A@@BA@@@@@A@@@@@AB@@@@A@@@@BA@@@@@AB@@@@A@BDBBB@@@@B@D@B@@@BB@@BBBB@@@B@D@@@B@B@@B@@@D@B@BABAB@BAB@B@@BBB@@BB@BB@B@BB@@H@BBD@@DDBBBDBBFFBDDDD@BBDDBBFDCF@@C@BB@@@@A@@@@B@@B@@@@@@@@@B@B@ABB@@BA@A@@AA@@A@B@@CBCA@BC@@BCB@@A@@B@D@@@C@@AD@@@@@BA@@@@@AD@@@@@@@B@@@@@@@@@@@@AFC@AA@@@B@@@BB@@@@B@@A@@@@@A@@B@@@@@B@B@@@@@@AB@@A@@@@B@@@@@@@BA@A@AB@@@B@@@@AD@@A@@A@@A@@B@@@@A@@@@@@BA@@@A@@@@@@@@B@@A@@@B@AB@@@@@@@A@@A@@A@B@@@@A@@BB@@@@@A@@@CA@@@@@@AB@@@@A@@@BAA@B@AA@@A@@@A@@@@BAA@@@@A@A@@BA@A@@@A@@BBB@ABB@@B@@@@@@@@B@@A@@@@@A@@@B@@B@@@@@@@@@@@@C@@B@@@@A@@@@@@B@@@ABBA@BB@AB@@@@BA@@@@@@B@@B@@@@B@A@B@@A@@@@@@@@B@@A@@B@@@B@@A@@@B@@B@@@@A@@@@B@@@@ABB@@@@@A@@@@@AB@@@AA@@B@AAB@@B@@@@@B@@@@@@@@@@@@BD@@@@@@@BA@@AB@B@@@B@@@@@@B@@@A@@@B@ABB@A@@BA@B@@BA@B@AB@@@@A@B@@B@@A@BB@A@B@@B@A@B@@@@B@@@@@@@@@@BBA@@@@@@@A@@B@AABB@@@ABB@@@@@@@@@BB@@A@@@B@BB@@B@@@@@@BA@@@A@@@@B@B@@@B@B@@AB@@@B@@A@@@@BB@@@@@AB@@@@@@@@@B@@AB@@B@@@@@C@@@@@@@A@@B@@@@@B@@@@@@A@@B@@@@@A@BA@@@@@@@@@@B@@@@@@B@@B@@B@@@BB@@@@@@@@@B@@@@@@B@@@@B@@@@@@@@@B@@@@@@B@@@@@@@@B@@B@AB@@@@BAA@@@B@@@@@B@@@@@@@@A@B@@@@@B@@B@@@@@@@@BA@@@@@@@@@A@@@@@@@@@@@A@@@@@A@@@@@@@@@@B@@@@@@@B@@A@@@@BA@@@@B@@@BABB@A@B@@@AB@@@@B@@@@@B@@B@BC@@@@A@@@@@@@@@A@@@@A@@@@@@@@@@AA@@B@@@@@@@@A@@@@@A@@@A@@@@A@@@@@BAAA@@@@@@@@@@@@AB@@@@@A@@@@@@BA@@@@@A@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@@@A@@@B@@@A@@@@@@@@A@B@A@@@B@@@AA@B@@@@@BA@@@@@@@A@@B@@@@@B@@AB@@@@A@@@AB@@@@@@@@@@@@@@A@@@ABA@A@A@@@AB@@A@@B@@A@@B@B@B@B@B@DB@DBFB@@BB@@@B@@@BBBBBBB@@@@@BBD@@@@B@@@@BBD@B@@BBBB@@@B@BA@@B@D@@@B@BBB@@@B@@@@BB@@@D@@@@ABCBA@@@A@@B@@ABABA@CBBB@@BB@@@@B@@BB@@@@BB@@BB@@B@@B@BB@@BB@@B@@@B@@@B@B@B@@@B@B@BA@@B@BB@@@@B@B@@@B@BB@@B@@@@@@@@@B@@BB@BB@@@B@BBBB@BB@@BAA@@@BAB@@@DBB@BB@@@@BA@@B@@@@@BB@@@BB@@B@@@B@@@BDB@@@@@B@@A@@BA@BB@B@@@@B@@BBABB@@@@B@@B@@@@@BBB@@BBB@@@@B@B@B@@@@@BB@@BD@@BB@@BB@@BA@BBBB@@@BA@@B@@AB@@@@@B@BB@@@E@@@A@C@@@A@@@E@@@@@CA@@@@@@A@@@@@A@CA@@@@@@A@@@@@@B@@@@@@@A@@@@@@A@@@@@@A@@ABA@@@ABB@@@@@@@@@@B@@@@B@@@@@@BB@@B@@B@@B@B@@A@@@A@B@A@@@BB@@@@@@AB@B@@@@@B@@B@@BB@@@BB@@@B@@@B@BA@B@@@BB@@@@@B@B@BBB@@BB@@AB@BBBB@D@D@B@B@B@B@@@B@B@B@@@@@@@@@@B@B@@BB@@B@B@@@@@B@@@BB@@@B@@B@@BBB@@@@@@@@@@@@B@@@@@@@@BA@@@ABA@B@@BA@@@B@@@@@B@@@B@@@@@@@@@@B@@@@@B@B@@BBD@BB@@@BBB@@@@DBB@BB@@@@BB@BBBBB@@@BA@@B@B@B@@BBB@@@@@@B@BADAD@@@B@@@BB@BD@DDB@@AB@@BBBD@@BB@@@BB@BBB@BB@@@B@@@BBBA@@B@B@B@@BB@B@@@B@@BB@@BB@@B@@B@B@@BD@B@@@B@@@@@B@@@@A@@@@@ABB@@@B@@@@@B@@@@@BBBB@@BB@@B@B@@B@@@B@@@B@@AB@@@@@@@@@BABB@@@B@@@@@@BB@BA@BB@@@D@BBB@DBB@@@@BB@BB@@DD@@BA@A@@BBB@B@DBFAB@@@@@@@@@BA@@@A@AA@@@@@AC@@@@B@@@@A@@B@@DB@@@B@@@@@@@@@@@AB@BBA@D@ABAB@@D@@@B@@@@A@@@AB@D@@@@B@B@@@@@@BB@B@@@BABA@@@@BBBB@BBBBBB@BD@@D@BB@@@@BBB@@@B@@@BB@@B@B@BBBB@@BB@@BBBB@BBB@@FBD@BBFD@@DB@@@@@@BAB@@@@@BA@@@BCB@BA@AB@@BB@@B@BBFBFD@B@@@D@BBB@BBBD@B@D@B@@@@BBB@BBB@@BB@@AB@@AB@@BBBB@BBFBBBBDAB@@ADAB@BC@@DAD@@@@@B@@@@@FAB@B@@@D@@CB@@@@@D@B@B@B@DBB@BB@@D@BBB@@ABA@A@AA@AAA@@AA@B@@A@A@@BADCAA@@@@@AAABABADAAA@BCA@@AB@A@@A@CDCBC@@B@@ADA@AB@@@@@AAA@@B@@AA@A@@@@B@B@@@BA@AB@@@@AD@@A@@BA@@@A@@@@@AC@BAA@@A@@@@@@A@@@@@@AA@A@@A@@ABAB@@@@A@A@AB@@A@A@A@@B@BA@@FB@A@@BC@@BA@AB@@CBABA@@BA@@@@@A@C@@D@BCB@@@BAB@@@@ABABA@@ABB@@@@@B@@@@A@ABB@@@@@@B@@@@@@@@A@A@@B@@@@@@@B@@A@@@@B@@AB@@@@AB@@@@@B@@@@@BA@A@@@@BAAA@@B@@@@@@@@AAB@@AAB@AAB@B@B@BA@BB@@@@@BA@@@@B@@@@@BA@BDA@@@@BA@@@@BBBA@B@@@@@@B@@@@@@AB@@B@@@@@@@AB@@B@A@@@@B@@@@@@@BD@@@@@@@BB@@@@B@@BA@B@@@@@@@@@@@@@BA@@@@@@@@@@B@@@@@@@@@@B@@@@@B@@B@B@B@@AA@@@@@B@@@@@@@@A@DB@BBA@@@@@AB@@@BA@@@@@@B@@@@AB@@@@@@@B@B@AAB@@@@@@@BA@@@@B@@A@@@@@@@@@@B@@A@@A@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@A@@A@@@@@@B@@A@@@@@@@A@@B@@@@@@@@ABB@AA@B@@@@@BB@@@@@@A@@@@@@@@B@@A@@@BB@A@@@BB@@@@@BAA@B@@@@@@@@@@@@@@@@B@@B@@@@@@B@@@@B@@@B@@@@@@@@@@A@@@@B@@A@B@A@BBA@BBA@@@@@B@A@B@@BBBAA@@AB@@@@@@@@AB@@@@B@@BA@@@@@@B@@A@@@@@@B@@@@@B@@@@A@@@@@@B@@@@B@@@A@@@@A@@AB@@@@@@@B@@AB@@@@@@@B@@@@@@@B@@@BB@A@@B@@@@@@@@@@@AA@@@@AA@@A@@@@@A@@@@@@@@A@@@AB@@@@@@@BA@B@A@@@@@A@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@CA@@@A@@@AB@@@@@@@BB@@@AAA@@B@@@@A@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@B@@B@@@@@@@@B@@@@@@@@@AA@@@@@@@@@@@@B@@@@@@A@@A@@AB@@B@@BAB@@@@@@@@@@@@@@AB@@@F@A@@@@A@@@@@@@A@AB@A@@@A@@AB@@@@@@@BA@@@@@A@@@@@@A@@ABA@@@@B@B@@B@@@A@@@A@@@@B@@A@@@@@@@A@ADDBA@A@@@@@AB@@AB@B@@A@@DB@A@BB@B@@AD@@@@@@A@@H@@@@@@@B@B@@@@A@@@@@@FB@A@@@A@@@@B@@@@@@A@@@@@@@A@@@A@@@@@@@@@@@@@@@A@@@@BBB@AA@CAEB@@@B@@@@@@@B@@@B@@@@@@@@A@@@@@@@@@@B@@A@@@@A@@@@AB@@@@@@@@@B@@@@@@B@AB@@B@@@@@A@@B@@BBDABB@D@@BA@@@B@@B@@B@B@@B@@@A@@@@@@@@@@B@@@@@@@@@@@@@@@@@BA@@@@@@@@@@A@@@@@@A@@@@B@@@@@B@@@@@@B@@@@B@@@@@B@@BA@@@A@A@@@@@@@@B@@@@@@@@@@@@@BB@@A@BB@@@B@@A@@B@@@B@@B@@@BB@@@@B@A@@B@@@@B@@@@@BA@BDFC@A@@AA@AB@@A@@@@@@@@@A@@@@@@@@@AB@@BDA@@AADC@A@@B@@AB@@@B@@B@@BB@@@A@@D@DAB@@AB@A@@@BAA@B@B@@@AAB@@@DA@BBA@@B@@@B@@@@@B@@A@@@A@@@@A@@@@@@@BA@B@@@BDAHA@@LAJBLDvAD@H@D@B@D@BAD@DCDADABAHAF@D@LBFBB@BBD@B@B@BADA@A@@@@BBBABA@@B@@BDB@@B@B@@@BBBB@@@B@@@BBBA@BB@BB@@@B@BB@A@@@@@@@@B@@@F@@@@@BA@B@AB@@@A@@@D@@@@@@CD@@@B@BBBAB@@A@@@BB@@@@@@AB@@@BAB@@A@A@@CC@@@@@A@@@@@A@@A@@@@A@AAAA@AA@@@@A@@@@ACCBAAAAB@ACC@AAADAAAABACAEAC@@@@@AA@EEAAA@AAAC@A@A@AACACCECG@CACAA@A@C@AAC@CAAACCB@@AB@@E@ABC@ABGCA@@@C@@A@@B@BA@@@AB@BCA@@A@@A@@@@@@@@@@A@@AA@@@CB@A@@@@ABA@@DEAA@@@CH@@@AC@A@@A@A@@ED@@B@@@DDAB@B@@@AC@C@@@B@@@@A@@@C@@A@AAEB@@@@@F@AEG@C@@A@@A@@@CEB@B@@@@AB@@@@C@A@@B@BCBABBD@F@@@DA@BB@@DF@@@@@@@@A@@@@@@@@@@@@@@@A@@@@BBA@B@@B@ABBDAD@BB@@D@@@@A@@@C@AAA@AA@@@C@@A@@@AAAF@@@BA@AB@@AAA@C@A@AAAAA@A@@@A@@BA@CB@@@AC@AA@ACA@A@@A@A@@CAA@A@@@EA@@BAA@C@C@CBE@CBI@OBAE@ABC@@@A@AAG@@A@@A@A@ABA@AB@@AB@@A@@C@@AAC@A@@A@@@@B@@@@C@A@@@A@AA@@@@@B@@@B@@CA@@@@C@@A@@@A@@A@AAA@A@@@AA@@A@A@@A@AB@@AAEB@@@FA@@@CB@@A@@B@@@B@@@@A@@@@@@@AA@@A@@@@AA@ABA@A@@AGAAB@AA@@B@@@@@@A@@A@@@@@@A@@@@A@@B@@A@@A@@@@A@@@ACB@@AAA@@A@@@@A@@@@@AAAAAA@AA@CACAC@A@@AA@A@AA@A@@A@ABA@@@AAC@ABC@A@@@ABE@CAA@A@A@A@ABCBABE@ABC@C@A@@B@@@B@@@B@@@B@@@@@@@@A@@@@@A@A@@@@@@A@@ACB@AA@@CCB@@EA@@AC@@@AA@A@@@@@AAD@AA@AB@AA@@C@@@AC@@AA@A@@@@@A@A@@AA@@@AJA@@@CA@BA@@@@@@@@@A@B@A@@@@A@@@@@AA@CB@@@@A@A@A@@@@B@@@B@@@@A@@B@@@@@BBBCA@@B@AA@@A@AB@@@B@@B@@@@B@@@@BB@AAB@@@@@@@@A@@@@@@@AA@B@B@@@@@@@BB@A@@@@@@@@A@@@@AA@@@@A@@@@@BB@B@@A@@@A@@@BB@@@@@BA@@BA@A@A@@BA@@BAA@AA@B@@@@@B@@@@@AA@BAA@@@A@@@A@@@@A@@A@@@@@B@@@B@B@AA@AAA@@@A@@B@@A@@@@@@@AA@@C@@@AB@@A@A@@B@B@@@@B@@@BBA@@@A@@@@@@B@@@B@@@AAB@@@@AA@@@B@@@AA@@@A@@@A@A@@A@@@@@CA@@AAA@A@@@@@@@BA@ABA@@AAB@AABA@@@A@A@@@A@@BA@@@@A@@@@@@A@A@@AA@AA@@AA@BC@@@A@@ADAAA@@AA@@@@@@ABA@@@@@@@@@BB@@A@@@B@@@A@@@@@A@@@@@@@A@@@@@@AA@B@AAA@@AA@@A@@@@ABA@@B@A@B@@@@AB@B@@@@@@AA@A@@@@@ABA@@@A@@@@@B@B@@A@@@AB@@@BB@@@@BA@@@@@@A@@A@@@@@@BA@@@@@@B@AA@@@ABBB@@@@@@BBA@@@@@@@@B@@@@@@@B@BB@@@@AA@@@A@@@@@A@@@AB@@@BA@BBA@@B@@@@@B@BB@A@@@@@@@A@@A@@@@@B@@@@ABA@@@A@A@@@@@@@@@@@@A@@A@@A@@@A@@@@B@@AA@BAA@@A@@@@A@@B@@@@@@@@@@A@@B@B@@A@@@@B@@@B@@@@A@@@B@@@@B@B@B@@BB@@@@@@A@@@@@A@@@@@@@@B@@@@@@@BB@@@@BB@@@@B@@@@@@@@A@@@BB@@@B@@@@@B@@A@@B@@A@@@@B@@@@A@@@@B@@@AABA@@B@@@@@@@@@@A@@@@A@AA@A@@@@BA@A@BA@@@@@@AA@@@@B@@@A@@BABB@@@A@@AAB@BA@@@@AB@@A@@AB@@A@A@A@@@@BA@A@@@@@A@@@A@@A@@ABAA@AA@@B@@BB@@AA@@@@A@@AA@@@@B@@@B@@@B@@@@@@@AA@@A@@A@@B@@@@@@@@@AAD@@@@AC@@@@@@@@A@BB@@@@@@@@ABA@@A@@A@@@@BA@@@A@@@A@AA@@A@AA@@@@@BA@AAA@@@A@A@@@AB@@@@A@@@A@@@@@A@AA@@AA@AD@@@@A@@@A@@BAB@@@@@@@A@@@@BA@@@@@A@@A@@@B@@@@@@@@A@@@@AA@@@@AA@@@@@A@@@@BA@@CA@B@B@@B@A@@@@@A@@B@B@@A@@@@@@A@@@@AA@@A@AC@AA@@@@A@@A@AA@@@@AAAA@@AA@C@AAA@A@@A@A@@BA@@BA@@@@A@@BABC@AA@@B@@A@@@@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@A@@AA@@@@@A@@@@AA@@@A@@@@@A@@@@AA@@@A@@@@@AA@@A@@@@@@@AB@@@@A@@@A@@@A@@@@@A@@@AB@@A@@@@@AB@@A@@@AB@@@@A@@@AB@@A@@@AB@@@@A@@@AB@@@@A@@BA@@@@@A@@@A@@B@@A@@@@@A@@@A@@@A@@@@@A@@@@@AA@@@@@@AA@@@@@@AA@@@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@@AA@@@@@@@@@A@@@@@@@A@@@@@@A@@A@@@@A@@@@@A@@@@@@BA@@@@@@@AB@@@@@@@BA@@@@@@@AB@@@@@@@BA@@@@@@@AB@@@@@@A@@@@@A@@@@@@@A@@@@@A@@@AA@@A@@@A@@@@@A@@@@@AAA@@@@@A@@@A@@@A@@@A@@@A@@@A@@@@@@@A@@@AB@@A@@@@@@BA@@@@B@@A@@B@@@@AB@@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@A@@BA@@@@@AB@@@@AB@@@@AB@@@@@@A@@B@@A@@@@BA@@@@@@@AB@@@@@@A@@@@B@@@@A@@@@@AB@@@@@@A@@@@B@@@@A@@@@@@BA@@@@@@@AB@@@@@@A@@@@@@@A@@@A@@@@@@@A@@@@@@@A@@@@@A@@@@@@@A@@@@@@@A@@@@@A@@@@B@@B@@B@@@B@@@@@BA@@@A@@@@BA@@@@@A@@@@@@@A@@@@@@@A@@@A@@@@@@@A@@@@@@@AA@@@@@@AA@@@@AA@@B@@A@@@A@@@AA@@@@@@@AA@@@AA@@@@@AA@@A@@@A@@@@@A@@@A@@@@BA@@@@@@@AB@@@@A@@B@@A@@@@@AB@@@@AB@@@@@@A@@@@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@B@@AA@@@@@A@@@@@AA@@@@A@@@@A@@A@@@@A@@A@@A@@@@@A@@@@@A@@@@@@@A@@@@@AB@@@@@@A@@@@@@B@@@@@BA@@@@B@@@@@@@B@@AB@@@@@B@@@@@B@@@B@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@BB@@@@B@@B@@@@B@@B@@B@@@@BB@@@@B@@B@@@@@B@@@B@@@B@@@B@@@B@@@B@@@B@@@B@@@B@B@@@B@@@@@@B@@@B@@@@A@@@@B@@A@@@@@A@@B@@@@A@@@AB@@@@A@@@@BA@@@@@A@A@@@@@AB@@A@@@A@@A@@@@@@A@@@@A@@@@@A@@AA@@@@@A@@@@@AA@@@@@@AA@@@@AA@@@@@@B@@@@@B@@@BA@@@AA@@@@A@@@AA@@A@@@AA@@@@A@@@@@@AA@@@@@@@AA@@@@@@A@@A@@A@@@A@@@A@@@A@@BA@@@@@A@@B@@A@@B@@AB@@@@@B@@@B@@@@@B@@@@@B@@@B@@@@A@@@@@A@@@@@@BAA@@@@A@@A@@@@A@@A@@A@@@@@@B@@@@A@@@@B@@@@@@@@@BA@@@@@@B@@@@@@@B@@A@@@@@@B@@@@@B@@A@@B@@@@@B@@@@@B@@@B@@@@A@@B@@@B@@@@@B@@@@@B@@AB@@@@@@@B@@B@@B@@@@@@@B@@BB@@@@@@@B@@@@BB@@@@@B@@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@@@@B@@@@@@@B@@@@@@@B@@@@@B@@@@@@@B@@B@@B@@@B@@B@@B@@@@@@@B@@@B@@@B@@@@@@AB@@@@@@@@AB@@@@@@@B@@@@@B@@@@@B@@@@@@BB@@@@@@BB@@B@@@BB@@@@B@@@BB@@@@B@@@@BB@@@@@@BB@@@@B@@@BB@@B@@@@@@@@@BB@@@@@@B@@@@@@@B@@@@BB@@@@@B@@@B@@@@@B@@@@@B@@@B@@@B@B@@@B@@@@B@@@@BB@@@@@@@B@@@@BB@@@@@@@B@@B@@@@B@@@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@@@@AB@@@@@BA@@@A@@@@@A@@BA@@@A@@@A@@@@@A@@@@@AB@@@@@B@@@B@@@@@B@@@B@@@B@@AB@@@@@@@B@@@@@B@@@@@B@@A@@B@@@@@@@BA@@@@B@@@@AB@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@AB@@@@AB@@A@@B@@@@A@@BA@@@@B@@@@A@@@@BA@@@@@@BA@@@@@@BA@@@@@@@@B@@@@@B@@@@@B@@A@@@@@@B@@@@@B@@A@@@@B@@@@A@@@@@A@@@@@AA@@@@A@@@@@A@@@AA@@@@@@A@@A@@@@@A@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@@@A@@@@AA@@@@@@AAACAAAA@@@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@AB@@@@@@A@@@@@@@A@@@@@@AA@@@A@@AA@@@@@AA@@@@A@@@AA@@@@A@@A@@A@@A@@A@@A@@@AA@@@@A@@@@@AB@@@@@BA@@@@B@@A@@B@@A@@B@@A@@@@@A@@@A@@@A@@@A@@@A@@@A@@@A@@@A@@@A@@BA@@@@@A@@@A@@@@@A@@@AB@@@@@@A@@@A@@@A@A@AA@@A@@@A@@@@@A@@@@A@@@@A@@@@@A@@@A@@@@BAA@@@@A@@@@@A@@@A@@@@@AA@@@@A@@@A@@@@@A@@@A@@@@@A@@@A@@@@@A@@@A@@@@@A@@@@@AA@@@A@@A@@A@@A@@@AA@@A@@@@@AA@@@@A@@@AB@@@@A@@@A@@@A@@@@@"],
                "encodeOffsets": [[122147, 32010]]
            }
        }, {
            "type": "Feature",
            "id": "320412",
            "properties": {"name": "武进区", "cp": [119.942437, 31.701187], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@AB@@@@C@@@@@@B@@@B@@B@@@@@@@@@@@@B@@@B@@@@A@CB@@AA@@C@@B@@@AA@@D@BCBGB@@@A@@@@A@@AA@@@A@AAC@@B@@@B@@@@A@@@@@@@A@@@A@AFA@@BB@A@AB@@@@@@CA@@A@BDA@@@AB@@@BB@@BCDA@B@@@BB@@@@@B@BCA@BCA@@@@@@A@ED@@@CE@@@BAAEC@A@AAC@AA@@A@@@@@A@@@A@A@A@@AA@A@@@A@@@A@@@A@A@A@C@A@C@A@A@@AA@A@CAA@A@C@C@A@A@C@A@A@@@@@@B@@BBBB@@CB@@CBA@A@ABA@@@AAA@@@@@@AA@ACA@@BA@@BCB@@AAA@A@A@AB@@AA@@A@DCB@@@EC@@ABA@CC@@AC@@CCECB@@@@@@@@@B@B@BAB@B@@@@@B@BA@@@@D@B@B@B@B@B@B@@@@@@@BABC@ABA@@@@@@@A@A@@@AB@@@@@BE@A@AGACA@@@BA@AAEBA@GCA@EA@@@@@@C@A@E@E@A@ABC@@DABEBC@A@BBADKBE@A@ABEDKJCDEFCB@@AAECGDKDCBC@MF[HIBIBA@ABEBEBOBAB@@@@CBA@ABA@I@AA@AAA@@AD@@A@@B@@@BBB@@A@A@A@GAB@@AAAB@A@@A@@A@@B@B@B@@@@CAAAAAAAAA@@@@CAA@C@A@@@A@AB@BAB@@AB@@A@@@@B@B@@@@@B@BA@ABA@@D@@B@@@@@AB@@@BA@@@@BB@@@B@@B@BC@@@@@BD@@@B@@ABABAA@@AA@B@@CA@B@@AB@@@B@@A@@@A@@@@@@BBD@@@@BBA@@B@@@@C@@B@@@@A@@BA@@B@B@B@@A@@B@B@@A@@@@D@DA@@B@B@@AB@AAB@AA@@@A@@@@B@@AB@@@B@@@@BBA@@@@@@@B@@@@@B@@@ABB@@@AB@@@@AB@@@@@B@@A@@@ADA@A@@@@@A@C@AA@@A@@@@B@@BB@@A@@@AB@@@@A@@@A@@B@@@B@@ABA@CB@@@@@@@B@B@@@BB@@@A@@@@B@B@B@@@@BBA@@@@B@BB@@@A@@B@B@@@B@@@@BFBAB@@@B@B@B@@BBA@BBA@@AB@@@@@BB@@B@@D@BB@@B@B@@@@@B@@@@@@@B@@@@@B@@BB@@B@A@B@@BB@@@@@BA@@B@@@@B@BB@@@AB@ABBB@@@@A@@B@@@@@B@B@@A@@@A@@B@@DD@BA@@A@B@B@@AB@B@DBBABDH@@A@@@@D@@@B@@@B@B@@BA@BB@@@@@@B@@@A@@@A@@BABBB@@@F@D@BBA@@@@@@@BDA@@@BBAB@@A@@B@@B@B@@@BC@@B@BA@@BBBBCBB@@@@B@@B@@@@@@@BB@@@@ABBBA@BBC@A@AB@@A@@@@@@@@@A@A@@@@@@B@@@@@@A@@@@@A@@@BD@@@@@BBBAB@@@@BA@BA@@@A@@@BB@@A@@@@@A@@@BD@@@BB@@@@@@@@B@@@@@B@@@@@BA@@@@@B@D@BBBA@B@@@@C@@B@@A@@B@@@@A@A@C@@B@B@B@@@@A@@@@@A@BBA@@@@B@@@@@@@BBB@BABBDBA@@BAB@@@@@@B@@@A@B@@A@@@@@@B@@@@A@@@@@B@@@@BA@B@A@@@@@BB@@@@@@B@@@@BA@BBBA@BBA@B@@@B@@@@@@@D@BAB@@B@@@@@@B@@B@@@@A@@@@@@BABBAB@@D@DAB@BB@@B@@@B@@@BB@@B@DB@@@BDAB@AA@@@@@A@@@@@@DB@@B@@A@@@@@AB@@@@@@AB@@@@@AA@@B@@@@@@A@@@@HA@@@@A@@A@@B@@@@@AAB@B@@B@@@@B@@AB@B@@@@@@@@@@@@@@A@@@@@@B@@@@@@A@@@@@@B@BBA@@B@BB@@@@@BABB@@@@B@B@@B@@B@B@DA@BBA@BB@@@@BB@@@D@B@BD@@DABB@B@@BB@@@@@@@@DDB@@@B@@B@@@@A@ABA@@@A@@@A@@A@@@@@@A@C@ABB@AB@@@BB@@@B@B@@@@BBA@@B@A@BAB@@B@@A@DD@D@@ABA@@BBB@@DA@@B@@@B@@@B@@B@D@@@@A@A@A@@B@B@@@BB@@B@@@@@B@@@@@BA@AA@BAAA@@@@B@BA@@@ABE@BB@@AA@@BDA@@B@@@@@@@@B@A@B@@B@@@@A@@@IJ@@@@@A@A@@@D@BA@@BAB@@@@@@CBA@@@@BA@BD@@@B@@@B@@@@B@@@@@@@A@BB@@@@A@@@@@@@@@A@B@@D@@@@@F@@B@@B@@BB@@@B@@@@@@B@@D@@A@BDD@AB@B@B@BA@@@@@@@@@@@@BB@@@@AB@@@BB@@@@@@B@B@@@B@AA@@BBB@@B@ABB@@@@B@@@@B@@B@@A@A@@@@@ADB@@@@@@@BBAB@@BB@BB@@@@@A@@BAB@@@@@B@@A@@BA@@@@BA@@A@@AA@@@@BA@A@@AA@@C@@@@@@@@DA@@AABAB@B@@@@@@@B@BD@@B@@@B@@@@@@@B@D@@@@@@@@@@@@@@BB@@A@@B@B@BA@@B@@AB@D@@@D@BABB@@@A@@AD@@@@@@B@@@@@@B@@B@@@@A@@@A@@@@BA@@@@@@@@B@@BAA@@ABB@@@A@@@@@@B@@@@@B@@B@@@@@B@BA@@@@@@BB@@@@A@@@@@@BA@B@@@B@@@@A@@@@B@@@@@@@@AA@@@BAB@@@@@A@@A@@@@@@BA@@AAACAB@A@@@A@@@@@@B@@@B@BA@BA@@BBABD@@@@HB@A@@AA@@BA@@B@@@DB@@@AB@@EDBB@BB@@@B@@@B@@@BB@HA@D@BBAB@@@@@@@BA@@@@B@ABB@@BB@@@@@@A@@@@@@B@@@@@B@B@A@@BA@@@@B@@@@@@@B@@@B@@@@@B@@@BB@BAB@@@@@B@@@B@@AB@@@@A@@B@@A@@B@@@B@@@@@@@@@B@@@@@@@@@A@@BBA@@@@@BB@@@@@@@BCHBD@F@F@@D@DA@@@AFD@@@B@AAB@@AB@@BB@@B@ADBCF@BB@@B@@DB@AB@@@@@@BB@@BB@@BB@@@@@@BB@@@@@@@B@@@@BB@BA@BA@B@B@@@A@@@B@@A@@B@@A@@B@@@@@B@@@B@@A@@@@AA@@B@@BDA@BB@@@@@@@FA@ABB@A@@B@@AA@@@@ABABA@@@@B@@@@BB@@@@B@@@B@@BB@@@B@@BB@@B@@@A@@@B@@@B@@AB@DD@@B@B@@@@A@@@@BA@@@@@@@@@A@@D@@A@@@A@A@AB@@@@@B@@AB@@@B@@BBAD@@@@@@A@@B@@B@@D@DAAC@@@@DAB@BADCAC@@AA@@@@A@@A@B@A@@DABA@@BADA@ABA@@B@B@B@BABABBDD@@DBDBBBBBBBDDBD@@DDDDBA@@B@D@EECC@ABA@@@EDADB@@B@D@B@B@B@@@BD@BADD@B@B@BBDAFBB@@@@C@@@@DABBD@B@@ABBBA@@F@@A@@B@@@D@@@B@@@D@@@B@@@B@@@@@@A@@BB@@B@@A@@@A@@@@@@@@A@@@@EB@@@B@@AB@B@@@DBB@B@D@DAD@B@HEBAB@BAB@BAH@D@D@D@BG@E@EB@DBDB@AB@@@@AB@@@@@@@@@BD@BB@@@@@@@@@@@@@BB@@@@@@@A@@B@@@@@@@@@@@B@@B@@@A@@@BB@@ABA@A@@BDB@@@@BB@@@BA@B@@@@B@B@@@BB@BB@@BA@@@@BD@@@@@@@@ABB@@@@@@@AD@@@@@B@@@@C@@@@@@BEHAPCF@HAD@FB@A@D@@BB@@@B@@@@ABBB@@BBB@@@@@@@BDGDGDCB_RWN@BDH@B@@@B@@@@@B@D@@B@B@D@B@BB@@DDH@@HNGB@BBDFBF@@F@B@B@B@D@D@FB@@@B@@@@@@@@@D@@BD@BF@BA@@B@B@@@BA@A@@@B@@B@@@AAB@@@B@@AD@@B@@@AB@@A@@BA@@B@@B@BB@@@BAB@@@B@@@@BB@@@B@B@BB@@@DBBB@B@B@BB@@@@DCB@B@B@B@B@@@B@@AB@@@AAB@AA@@@@@A@AB@@@@ADB@@B@@@B@@@D@@@@B@BA@BB@@B@@BB@D@CD@FB@@BB@B@@B@AD@B@@D@@AB@B@BB@BBBB@BDDBBB@BBB@@A@@@ABABBB@@@BA@@B@@A@AB@AAB@@@JDD@B@AB@@B@B@@@D@DB@@BCBBDBD@BB@BBBB@@@B@BAB@@@B@@@@@B@@@AB@BFB@@@@AB@B@BDBBBBDB@@BBA@BB@@@@B@BBAF@F@F@@BB@@@@AB@BB@@B@@CB@@@B@ACFABABABABBB@B@B@B@D@B@JBA@DA@@BABABABA@AB@@AB@BABABEBA@@BABE@C@@BABC@AF@@@@ACA@@@@@CB@F@@@@@B@@@B@B@@@B@@@@AA@@A@ABAB@@AA@A@@AA@@@@@@@@A@A@@A@@@@@@A@@@@@@@@BAB@@ADA@CFB@@@BB@@A@@B@@@BC@@A@@A@@@@A@@@A@A@@@B@@A@AFBBC@@@@B@@@@@AABAAABA@@@@A@AA@B@@A@A@@@@@C@GAA@A@A@GA@A@@A@@@@@A@@@A@A@AAA@@B@@AF@B@@CBA@@@@@A@@B@@AAA@@BA@@BFBABAA@@@@A@@@@@A@@@@@AB@@A@@@@@A@@@A@A@@@@A@@A@A@@@@D@@A@@@@@@@A@@@@B@@@BAA@B@@@@CA@@@A@@A@A@A@AA@@@@@@@A@@EA@CA@@EB@@AB@@@AA@@@C@A@C@A@@@@BAA@@A@@@@@A@@@@A@@CB@@C@@A@@CB@@BB@@E@CBA@CCB@A@@ACB@DA@E@ABABABABACA@@@C@@AAA@@AA@@@@@@@A@@@@@@A@@AA@@@A@A@CC@@@@CFBBEAA@@C@AA@AA@@BB@AB@@@@A@@@@@@@C@BAAA@BC@BAAA@@@CA@@CA@A@AC@A@@@@BA@@@@@AAA@@B@@AAB@AB@@@D@@A@@B@@CDAB@@@B@@AD@@@@@@AA@@@@@@AA@@AA@@@@BA@@AA@@@@@A@@A@@B@A@@AEE@A@BUL@A@BAA@@@@CB@@@B@@C@BBCB@@@@@AA@@@@@A@@@A@@@BA@A@@@@B@@@@@@@A@@AAB@@BA@@@@@@@A@@@@@@@@@@@@@@B@@AACAA@@@ABC@@@A@@@A@C@A@A@@@@@A@@B@@@@@A@@@B@@@C@@AD@@A@@@@B@@AB@AED@@AF@@B@@B@@@A@@BF@@AA@AEA@AC@@A@@CA@AA@@@B@@AA@@@BA@@@C@AG@A@@BA@@A@@AB@@@@@@G@@@@@@@AA@@@C@@A@EA@A@@@AAB@AAB@@@A@@@EB@A@@@AD@@A@@@E@@A@A@A@A@@@AAA@A@ED@@GGDAAA@A@@BAA@@A@@@@A@@@AA@@AA@BEA@@@E@@CA@@ADQK@@AA@@@AA@A@KEECCC@ED@@CA@@@A@@AA@BE@@@AACAA@@CAECCA@B@@AAA@@A@@AEB@BA@@@AAA@A@@CBAC@@CBCCAC@@B@DCBCBA@AACACACAA@ABCDCFCHEFAB@HBB@F@@@@@@@DB@@@A@@B@@AB@AA@A@@BAB@@@B@DB@@DALAHA@@@@@AB@@AB@AAD@@A@BAAA@@BA@@C@@@@CB@A@@AA@AB@D@@@B@B@@@@B@@@@@@@@BA@@@@BBB@AAB@@@BA@@@@@@@@@AA@BA@@@AA@@@AA@@@EB@@A@A@@@A@ABABAAAAB@ABAA@B@AC@@@@@AB@@@@AB@AAB@@AA@@@@ADABA@@@AAB@ACDA@@@@A@@A@A@BA@@BA@@@AAA@@@ADB@@B@@@@@@@@ABB@@BA@@@BBA@@@B@@BAA@B@FDDB@B@@@@@@BD@@@@BA@BBB@@@@B@@@BAAC@@@@@@@@B@BA@@@BBA@@B@A@@A@AA@@A@A@@@A@@@AB@@A@@A@@A@@@@@@@@@A@AF@BB@F@B@BB@LK@A@AAAAAAACAAAEEEEEEAACGEGACAA@GACBCA@@@@@BCFM@@OGUIA@ADADGECAB@@CAKDGDCBAEECAGEA@CACC@CDCAAEEC@CA@ADCA@AAACAA@CAA@ABCB@B@AC@AD@DAAAAEAACAACBAA@AC@EAC@CBC@CDC@EACDCF@HABCB@DA@ADA@@`CAC@CAC@GBSFKD]JSFODKFEFABAFAH@BCV@J@H@JB\\BFLRBBBDB@JRFLHVB@@B@D@B@BCR@D@B@B@DBLBHBHBHB@@B@BA@CFABEBBBBB@B@BB@B@B@@BBB@@CDA@AD@@A@A@ABEB@@@@@B@B@@ABCB@@C@C@@@@A@@A@A@@BA@@@A@A@@@@@A@A@@@AA@@@@@@@@@@@BC@A@@@A@@@@@@@@BA@@BB@BBA@AD@@A@A@BBA@@B@@@@@BAA@@AAABCAC@A@@AAB@A@@AB@CA@CB@@@@@@@@@BA@@B@@C@@@EBA@BE@A@@GC@@A@EFABADA@@B@BCB@@@AC@@A@@A@@FAF@@@@@BA@A@AB@AAAB@@@@@AA@@@B@@@@@@@@@@A@BBA@@AAAA@@BBBA@@@C@@B@@@B@@@AB@@B@@D@@B@@@@B@BB@@@@@@@@@@ABB@B@@BC@@B@@@DB@ELAD@AAB@@A@@BA@@@@@A@@@ABB@@@@@"],
                "encodeOffsets": [[122849, 32291]]
            }
        }],
        "UTF8Encoding": true
    });
}));