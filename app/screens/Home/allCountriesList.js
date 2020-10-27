const allCountriesList = [
  {
    countryCode: 'KE',
    countryName: 'Kenya',
    imageUrl: require('app/assets/images/countries/ke.png'),
  },
  {
    countryCode: 'AD',
    countryName: 'Andorra',
    imageUrl: require('app/assets/images/countries/ad.png'),
  },
  {
    countryCode: 'AE',
    countryName: 'United Arab Emirates',
    imageUrl: require('app/assets/images/countries/ae.png'),
  },
  // {
  //   countryCode: 'AF',
  //   countryName: 'Afghanistan',
  //   imageUrl: require('app/assets/images/countries/af.png'),
  // },
  {
    countryCode: 'AG',
    countryName: 'Antigua and Barbuda',
    imageUrl: require('app/assets/images/countries/ag.png'),
  },
  // {
  //   countryCode: 'AI',
  //   countryName: 'Anguilla',
  //   imageUrl: require('app/assets/images/countries/ai.png'),
  // },
  {
    countryCode: 'AL',
    countryName: 'Albania',
    imageUrl: require('app/assets/images/countries/al.png'),
  },
  {
    countryCode: 'AM',
    countryName: 'Armenia',
    imageUrl: require('app/assets/images/countries/am.png'),
  },
  // {
  //   countryCode: 'AN',
  //   countryName: 'Netherlands Antilles',
  //   imageUrl: require('app/assets/images/countries/an.png'),
  // },
  {
    countryCode: 'AO',
    countryName: 'Angola',
    imageUrl: require('app/assets/images/countries/ao.png'),
  },
  // {
  //   countryCode: 'AQ',
  //   countryName: 'Antarctica',
  //   imageUrl: require('app/assets/images/countries/aq.png'),
  // },
  {
    countryCode: 'AR',
    countryName: 'Argentina',
    imageUrl: require('app/assets/images/countries/ar.png'),
  },
  // {
  //   countryCode: 'AS',
  //   countryName: 'American Samoa',
  //   imageUrl: require('app/assets/images/countries/as.png'),
  // },
  {
    countryCode: 'AT',
    countryName: 'Austria',
    imageUrl: require('app/assets/images/countries/at.png'),
  },
  {
    countryCode: 'AU',
    countryName: 'Australia',
    imageUrl: require('app/assets/images/countries/au.png'),
  },
  // {
  //   countryCode: 'AW',
  //   countryName: 'Aruba',
  //   imageUrl: require('app/assets/images/countries/aw.png'),
  // },
  // {
  //   countryCode: 'AX',
  //   countryName: 'Åland Islands',
  //   imageUrl: require('app/assets/images/countries/ax.png'),
  // },
  {
    countryCode: 'AZ',
    countryName: 'Azerbaijan',
    imageUrl: require('app/assets/images/countries/az.png'),
  },
  {
    countryCode: 'BA',
    countryName: 'Bosnia and Herzegovina',
    imageUrl: require('app/assets/images/countries/ba.png'),
  },
  {
    countryCode: 'BB',
    countryName: 'Barbados',
    imageUrl: require('app/assets/images/countries/bb.png'),
  },
  {
    countryCode: 'BD',
    countryName: 'Bangladesh',
    imageUrl: require('app/assets/images/countries/bd.png'),
  },
  {
    countryCode: 'BE',
    countryName: 'Belgium',
    imageUrl: require('app/assets/images/countries/be.png'),
  },
  {
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    imageUrl: require('app/assets/images/countries/bf.png'),
  },
  {
    countryCode: 'BG',
    countryName: 'Bulgaria',
    imageUrl: require('app/assets/images/countries/bg.png'),
  },
  {
    countryCode: 'BH',
    countryName: 'Bahrain',
    imageUrl: require('app/assets/images/countries/bh.png'),
  },
  {
    countryCode: 'BI',
    countryName: 'Burundi',
    imageUrl: require('app/assets/images/countries/bi.png'),
  },
  {
    countryCode: 'BJ',
    countryName: 'Benin',
    imageUrl: require('app/assets/images/countries/bj.png'),
  },
  // {
  //   countryCode: 'BL',
  //   countryName: 'Saint Barthélemy',
  //   imageUrl: require('app/assets/images/countries/bl.png'),
  // },
  // {
  //   countryCode: 'BM',
  //   countryName: 'Bermuda',
  //   imageUrl: require('app/assets/images/countries/bm.png'),
  // },
  {
    countryCode: 'BN',
    countryName: 'Brunei Darussalam',
    imageUrl: require('app/assets/images/countries/bn.png'),
  },
  {
    countryCode: 'BO',
    countryName: 'Bolivia, Plurinational State of Bolivia',
    imageUrl: require('app/assets/images/countries/bo.png'),
  },
  // {
  //   countryCode: 'BQ',
  //   countryName: 'Caribbean Netherlands',
  //   imageUrl: require('app/assets/images/countries/bq.png'),
  // },
  {
    countryCode: 'BR',
    countryName: 'Brazil',
    imageUrl: require('app/assets/images/countries/br.png'),
  },
  {
    countryCode: 'BS',
    countryName: 'Bahamas',
    imageUrl: require('app/assets/images/countries/bs.png'),
  },
  {
    countryCode: 'BT',
    countryName: 'Bhutan',
    imageUrl: require('app/assets/images/countries/bt.png'),
  },
  // {
  //   countryCode: 'BV',
  //   countryName: 'Bouvet Island',
  //   imageUrl: require('app/assets/images/countries/bv.png'),
  // },
  {
    countryCode: 'BW',
    countryName: 'Botswana',
    imageUrl: require('app/assets/images/countries/bw.png'),
  },
  {
    countryCode: 'BY',
    countryName: 'Belarus',
    imageUrl: require('app/assets/images/countries/by.png'),
  },
  {
    countryCode: 'BZ',
    countryName: 'Belize',
    imageUrl: require('app/assets/images/countries/bz.png'),
  },
  {
    countryCode: 'CA',
    countryName: 'Canada',
    imageUrl: require('app/assets/images/countries/ca.png'),
  },
  // {
  //   countryCode: 'CC',
  //   countryName: 'Cocos (Keeling) Islands',
  //   imageUrl: require('app/assets/images/countries/cc.png'),
  // },
  {
    countryCode: 'CD',
    countryName: 'Congo, the Democratic Republic of Congo',
    imageUrl: require('app/assets/images/countries/cd.png'),
  },
  {
    countryCode: 'CF',
    countryName: 'Central African Republic',
    imageUrl: require('app/assets/images/countries/cf.png'),
  },
  {
    countryCode: 'CG',
    countryName: 'Congo',
    imageUrl: require('app/assets/images/countries/cg.png'),
  },
  {
    countryCode: 'CH',
    countryName: 'Switzerland',
    imageUrl: require('app/assets/images/countries/ch.png'),
  },
  {
    countryCode: 'CI',
    countryName: 'Ivory Coast',
    imageUrl: require('app/assets/images/countries/ci.png'),
  },
  // {
  //   countryCode: 'CK',
  //   countryName: 'Cook Islands',
  //   imageUrl: require('app/assets/images/countries/ck.png'),
  // },
  {
    countryCode: 'CL',
    countryName: 'Chile',
    imageUrl: require('app/assets/images/countries/cl.png'),
  },
  {
    countryCode: 'CM',
    countryName: 'Cameroon',
    imageUrl: require('app/assets/images/countries/cm.png'),
  },
  {
    countryCode: 'CN',
    countryName: 'China',
    imageUrl: require('app/assets/images/countries/cn.png'),
  },
  {
    countryCode: 'CO',
    countryName: 'Colombia',
    imageUrl: require('app/assets/images/countries/co.png'),
  },
  {
    countryCode: 'CR',
    countryName: 'Costa Rica',
    imageUrl: require('app/assets/images/countries/cr.png'),
  },
  {
    countryCode: 'CU',
    countryName: 'Cuba',
    imageUrl: require('app/assets/images/countries/cu.png'),
  },
  {
    countryCode: 'CV',
    countryName: 'Cape Verde',
    imageUrl: require('app/assets/images/countries/cv.png'),
  },
  // {
  //   countryCode: 'CW',
  //   countryName: 'Curaçao',
  //   imageUrl: require('app/assets/images/countries/cw.png'),
  // },
  // {
  //   countryCode: 'CX',
  //   countryName: 'Christmas Island',
  //   imageUrl: require('app/assets/images/countries/cx.png'),
  // },
  {
    countryCode: 'CY',
    countryName: 'Cyprus',
    imageUrl: require('app/assets/images/countries/cy.png'),
  },
  {
    countryCode: 'CZ',
    countryName: 'Czech Republic',
    imageUrl: require('app/assets/images/countries/cz.png'),
  },
  {
    countryCode: 'DE',
    countryName: 'Germany',
    imageUrl: require('app/assets/images/countries/de.png'),
  },
  {
    countryCode: 'DJ',
    countryName: 'Djibouti',
    imageUrl: require('app/assets/images/countries/dj.png'),
  },
  {
    countryCode: 'DK',
    countryName: 'Denmark',
    imageUrl: require('app/assets/images/countries/dk.png'),
  },
  {
    countryCode: 'DM',
    countryName: 'Dominica',
    imageUrl: require('app/assets/images/countries/dm.png'),
  },
  // {
  //   countryCode: 'DO',
  //   countryName: 'Dominican Republic',
  //   imageUrl: require('app/assets/images/countries/do.png'),
  // },
  {
    countryCode: 'DZ',
    countryName: 'Algeria',
    imageUrl: require('app/assets/images/countries/dz.png'),
  },
  {
    countryCode: 'EC',
    countryName: 'Ecuador',
    imageUrl: require('app/assets/images/countries/ec.png'),
  },
  {
    countryCode: 'EE',
    countryName: 'Estonia',
    imageUrl: require('app/assets/images/countries/ee.png'),
  },
  {
    countryCode: 'EG',
    countryName: 'Egypt',
    imageUrl: require('app/assets/images/countries/eg.png'),
  },
  // {
  //   countryCode: 'EH',
  //   countryName: 'Western Sahara',
  //   imageUrl: require('app/assets/images/countries/eh.png'),
  // },
  {
    countryCode: 'ER',
    countryName: 'Eritrea',
    imageUrl: require('app/assets/images/countries/er.png'),
  },
  {
    countryCode: 'ES',
    countryName: 'Spain',
    imageUrl: require('app/assets/images/countries/es.png'),
  },
  {
    countryCode: 'ET',
    countryName: 'Ethiopia',
    imageUrl: require('app/assets/images/countries/et.png'),
  },
  // {
  //   countryCode: 'EU',
  //   countryName: 'Europe',
  //   imageUrl: require('app/assets/images/countries/eu.png'),
  // },
  {
    countryCode: 'FI',
    countryName: 'Finland',
    imageUrl: require('app/assets/images/countries/fi.png'),
  },
  {
    countryCode: 'FJ',
    countryName: 'Fiji',
    imageUrl: require('app/assets/images/countries/fj.png'),
  },
  // {
  //   countryCode: 'FK',
  //   countryName: 'Falkland Islands (Malvinas)',
  //   imageUrl: require('app/assets/images/countries/fk.png'),
  // },
  {
    countryCode: 'FM',
    countryName: 'Micronesia, Federated States of Micronesia',
    imageUrl: require('app/assets/images/countries/fm.png'),
  },
  {
    countryCode: 'FO',
    countryName: 'Faroe Islands',
    imageUrl: require('app/assets/images/countries/fo.png'),
  },
  {
    countryCode: 'FR',
    countryName: 'France',
    imageUrl: require('app/assets/images/countries/fr.png'),
  },
  {
    countryCode: 'GA',
    countryName: 'Gabon',
    imageUrl: require('app/assets/images/countries/ga.png'),
  },
  // {
  //   countryCode: 'GB-ENG',
  //   countryName: 'England',
  //   imageUrl: require('app/assets/images/countries/gb-eng.png'),
  // },
  // {
  //   countryCode: 'GB-NIR',
  //   countryName: 'Northern Ireland',
  //   imageUrl: require('app/assets/images/countries/gb-nir.png'),
  // },
  // {
  //   countryCode: 'GB-SCT',
  //   countryName: 'Scotland',
  //   imageUrl: require('app/assets/images/countries/gb-sct.png'),
  // },
  // {
  //   countryCode: 'GB-WLS',
  //   countryName: 'Wales',
  //   imageUrl: require('app/assets/images/countries/gb-wls.png'),
  // },
  {
    countryCode: 'GB',
    countryName: 'United Kingdom',
    imageUrl: require('app/assets/images/countries/gb.png'),
  },
  {
    countryCode: 'GD',
    countryName: 'Grenada',
    imageUrl: require('app/assets/images/countries/gd.png'),
  },
  {
    countryCode: 'GE',
    countryName: 'Georgia',
    imageUrl: require('app/assets/images/countries/ge.png'),
  },
  // {
  //   countryCode: 'GF',
  //   countryName: 'French Guiana',
  //   imageUrl: require('app/assets/images/countries/gf.png'),
  // },
  // {
  //   countryCode: 'GG',
  //   countryName: 'Guernsey',
  //   imageUrl: require('app/assets/images/countries/gg.png'),
  // },
  {
    countryCode: 'GH',
    countryName: 'Ghana',
    imageUrl: require('app/assets/images/countries/gh.png'),
  },
  // {
  //   countryCode: 'GI',
  //   countryName: 'Gibraltar',
  //   imageUrl: require('app/assets/images/countries/gi.png'),
  // },
  // {
  //   countryCode: 'GL',
  //   countryName: 'Greenland',
  //   imageUrl: require('app/assets/images/countries/gl.png'),
  // },
  {
    countryCode: 'GM',
    countryName: 'Gambia',
    imageUrl: require('app/assets/images/countries/gm.png'),
  },
  {
    countryCode: 'GN',
    countryName: 'Guinea',
    imageUrl: require('app/assets/images/countries/gn.png'),
  },
  // {
  //   countryCode: 'GP',
  //   countryName: 'Guadeloupe',
  //   imageUrl: require('app/assets/images/countries/gp.png'),
  // },
  {
    countryCode: 'GQ',
    countryName: 'Equatorial Guinea',
    imageUrl: require('app/assets/images/countries/gq.png'),
  },
  {
    countryCode: 'GR',
    countryName: 'Greece',
    imageUrl: require('app/assets/images/countries/gr.png'),
  },
  // {
  //   countryCode: 'GS',
  //   countryName: 'South Georgia and the South Sandwich Islands',
  //   imageUrl: require('app/assets/images/countries/gs.png'),
  // },
  {
    countryCode: 'GT',
    countryName: 'Guatemala',
    imageUrl: require('app/assets/images/countries/gt.png'),
  },
  // {
  //   countryCode: 'GU',
  //   countryName: 'Guam',
  //   imageUrl: require('app/assets/images/countries/gu.png'),
  // },
  {
    countryCode: 'GW',
    countryName: 'Guinea-Bissau',
    imageUrl: require('app/assets/images/countries/gw.png'),
  },
  {
    countryCode: 'GY',
    countryName: 'Guyana',
    imageUrl: require('app/assets/images/countries/gy.png'),
  },
  {
    countryCode: 'HK',
    countryName: 'Hong Kong',
    imageUrl: require('app/assets/images/countries/hk.png'),
  },
  // {
  //   countryCode: 'HM',
  //   countryName: 'Heard Island and McDonald Islands',
  //   imageUrl: require('app/assets/images/countries/hm.png'),
  // },
  {
    countryCode: 'HN',
    countryName: 'Honduras',
    imageUrl: require('app/assets/images/countries/hn.png'),
  },
  {
    countryCode: 'HR',
    countryName: 'Croatia',
    imageUrl: require('app/assets/images/countries/hr.png'),
  },
  {
    countryCode: 'HT',
    countryName: 'Haiti',
    imageUrl: require('app/assets/images/countries/hu.png'),
  },
  {
    countryCode: 'HU',
    countryName: 'Hungary',
    imageUrl: require('app/assets/images/countries/hu.png'),
  },
  {
    countryCode: 'ID',
    countryName: 'Indonesia',
    imageUrl: require('app/assets/images/countries/id.png'),
  },
  {
    countryCode: 'IE',
    countryName: 'Ireland',
    imageUrl: require('app/assets/images/countries/ie.png'),
  },
  {
    countryCode: 'IL',
    countryName: 'Israel',
    imageUrl: require('app/assets/images/countries/il.png'),
  },
  // {
  //   countryCode: 'IM',
  //   countryName: 'Isle of Man',
  //   imageUrl: require('app/assets/images/countries/im.png'),
  // },
  {
    countryCode: 'IN',
    countryName: 'India',
    imageUrl: require('app/assets/images/countries/in.png'),
  },
  // {
  //   countryCode: 'IO',
  //   countryName: 'British Indian Ocean Territory',
  //   imageUrl: require('app/assets/images/countries/io.png'),
  // },
  {
    countryCode: 'IQ',
    countryName: 'Iraq',
    imageUrl: require('app/assets/images/countries/iq.png'),
  },
  {
    countryCode: 'IR',
    countryName: 'Iran, Islamic Republic of Iran',
    imageUrl: require('app/assets/images/countries/ir.png'),
  },
  {
    countryCode: 'IS',
    countryName: 'Iceland',
    imageUrl: require('app/assets/images/countries/is.png'),
  },
  {
    countryCode: 'IT',
    countryName: 'Italy',
    imageUrl: require('app/assets/images/countries/it.png'),
  },
  // {
  //   countryCode: 'JE',
  //   countryName: 'Jersey',
  //   imageUrl: require('app/assets/images/countries/je.png'),
  // },
  {
    countryCode: 'JM',
    countryName: 'Jamaica',
    imageUrl: require('app/assets/images/countries/jm.png'),
  },
  {
    countryCode: 'JO',
    countryName: 'Jordan',
    imageUrl: require('app/assets/images/countries/jo.png'),
  },
  {
    countryCode: 'JP',
    countryName: 'Japan',
    imageUrl: require('app/assets/images/countries/jp.png'),
  },
  {
    countryCode: 'KG',
    countryName: 'Kyrgyzstan',
    imageUrl: require('app/assets/images/countries/kg.png'),
  },
  {
    countryCode: 'KH',
    countryName: 'Cambodia',
    imageUrl: require('app/assets/images/countries/kh.png'),
  },
  {
    countryCode: 'KI',
    countryName: 'Kiribati',
    imageUrl: require('app/assets/images/countries/ki.png'),
  },
  {
    countryCode: 'KM',
    countryName: 'Comoros',
    imageUrl: require('app/assets/images/countries/km.png'),
  },
  {
    countryCode: 'KN',
    countryName: 'Saint Kitts and Nevis',
    imageUrl: require('app/assets/images/countries/kn.png'),
  },
  // {
  //   countryCode: 'KP',
  //   countryName: "North Korea, Democratic People's Republic of Korea",
  //   imageUrl: require('app/assets/images/countries/kp.png'),
  // },
  {
    countryCode: 'KR',
    countryName: 'South Korea, Republic of Korea',
    imageUrl: require('app/assets/images/countries/kr.png'),
  },
  {
    countryCode: 'KW',
    countryName: 'Kuwait',
    imageUrl: require('app/assets/images/countries/kw.png'),
  },
  {
    countryCode: 'KY',
    countryName: 'Cayman Islands',
    imageUrl: require('app/assets/images/countries/ky.png'),
  },
  {
    countryCode: 'KZ',
    countryName: 'Kazakhstan',
    imageUrl: require('app/assets/images/countries/kz.png'),
  },
  {
    countryCode: 'LA',
    countryName: "Lao People's Democratic Republic",
    imageUrl: require('app/assets/images/countries/la.png'),
  },
  {
    countryCode: 'LB',
    countryName: 'Lebanon',
    imageUrl: require('app/assets/images/countries/lb.png'),
  },
  {
    countryCode: 'LC',
    countryName: 'Saint Lucia',
    imageUrl: require('app/assets/images/countries/lc.png'),
  },
  {
    countryCode: 'LI',
    countryName: 'Liechtenstein',
    imageUrl: require('app/assets/images/countries/li.png'),
  },
  {
    countryCode: 'LK',
    countryName: 'Sri Lanka',
    imageUrl: require('app/assets/images/countries/lk.png'),
  },
  {
    countryCode: 'LR',
    countryName: 'Liberia',
    imageUrl: require('app/assets/images/countries/lr.png'),
  },
  {
    countryCode: 'LS',
    countryName: 'Lesotho',
    imageUrl: require('app/assets/images/countries/ls.png'),
  },
  {
    countryCode: 'LT',
    countryName: 'Lithuania',
    imageUrl: require('app/assets/images/countries/lt.png'),
  },
  {
    countryCode: 'LU',
    countryName: 'Luxembourg',
    imageUrl: require('app/assets/images/countries/lu.png'),
  },
  {
    countryCode: 'LV',
    countryName: 'Latvia',
    imageUrl: require('app/assets/images/countries/lv.png'),
  },
  {
    countryCode: 'LY',
    countryName: 'Libya',
    imageUrl: require('app/assets/images/countries/ly.png'),
  },
  {
    countryCode: 'MA',
    countryName: 'Morocco',
    imageUrl: require('app/assets/images/countries/ma.png'),
  },
  // {
  //   countryCode: 'MC',
  //   countryName: 'Monaco',
  //   imageUrl: require('app/assets/images/countries/mc.png'),
  // },
  {
    countryCode: 'MD',
    countryName: 'Moldova, Republic of Moldova',
    imageUrl: require('app/assets/images/countries/md.png'),
  },
  {
    countryCode: 'ME',
    countryName: 'Montenegro',
    imageUrl: require('app/assets/images/countries/me.png'),
  },
  // {
  //   countryCode: 'MF',
  //   countryName: 'Saint Martin',
  //   imageUrl: require('app/assets/images/countries/mf.png'),
  // },
  {
    countryCode: 'MG',
    countryName: 'Madagascar',
    imageUrl: require('app/assets/images/countries/mg.png'),
  },
  {
    countryCode: 'MH',
    countryName: 'Marshall Islands',
    imageUrl: require('app/assets/images/countries/mh.png'),
  },
  {
    countryCode: 'MK',
    countryName: 'North Macedonia',
    imageUrl: require('app/assets/images/countries/mk.png'),
  },
  {
    countryCode: 'ML',
    countryName: 'Mali',
    imageUrl: require('app/assets/images/countries/ml.png'),
  },
  {
    countryCode: 'MM',
    countryName: 'Myanmar',
    imageUrl: require('app/assets/images/countries/mm.png'),
  },
  {
    countryCode: 'MN',
    countryName: 'Mongolia',
    imageUrl: require('app/assets/images/countries/mn.png'),
  },
  // {
  //   countryCode: 'MO',
  //   countryName: 'Macao',
  //   imageUrl: require('app/assets/images/countries/mo.png'),
  // },
  // {
  //   countryCode: 'MP',
  //   countryName: 'Northern Mariana Islands',
  //   imageUrl: require('app/assets/images/countries/mp.png'),
  // },
  // {
  //   countryCode: 'MQ',
  //   countryName: 'Martinique',
  //   imageUrl: require('app/assets/images/countries/mq.png'),
  // },
  {
    countryCode: 'MR',
    countryName: 'Mauritania',
    imageUrl: require('app/assets/images/countries/mr.png'),
  },
  // {
  //   countryCode: 'MS',
  //   countryName: 'Montserrat',
  //   imageUrl: require('app/assets/images/countries/ms.png'),
  // },
  {
    countryCode: 'MT',
    countryName: 'Malta',
    imageUrl: require('app/assets/images/countries/mt.png'),
  },
  {
    countryCode: 'MU',
    countryName: 'Mauritius',
    imageUrl: require('app/assets/images/countries/mu.png'),
  },
  {
    countryCode: 'MV',
    countryName: 'Maldives',
    imageUrl: require('app/assets/images/countries/mv.png'),
  },
  {
    countryCode: 'MW',
    countryName: 'Malawi',
    imageUrl: require('app/assets/images/countries/mw.png'),
  },
  {
    countryCode: 'MX',
    countryName: 'Mexico',
    imageUrl: require('app/assets/images/countries/mx.png'),
  },
  {
    countryCode: 'MY',
    countryName: 'Malaysia',
    imageUrl: require('app/assets/images/countries/my.png'),
  },
  {
    countryCode: 'MZ',
    countryName: 'Mozambique',
    imageUrl: require('app/assets/images/countries/mz.png'),
  },
  {
    countryCode: 'NA',
    countryName: 'Namibia',
    imageUrl: require('app/assets/images/countries/na.png'),
  },
  // {
  //   countryCode: 'NC',
  //   countryName: 'New Caledonia',
  //   imageUrl: require('app/assets/images/countries/nc.png'),
  // },
  {
    countryCode: 'NE',
    countryName: 'Niger',
    imageUrl: require('app/assets/images/countries/ne.png'),
  },
  // {
  //   countryCode: 'NF',
  //   countryName: 'Norfolk Island',
  //   imageUrl: require('app/assets/images/countries/nf.png'),
  // },
  {
    countryCode: 'NG',
    countryName: 'Nigeria',
    imageUrl: require('app/assets/images/countries/ng.png'),
  },
  {
    countryCode: 'NI',
    countryName: 'Nicaragua',
    imageUrl: require('app/assets/images/countries/ni.png'),
  },
  {
    countryCode: 'NL',
    countryName: 'Netherlands',
    imageUrl: require('app/assets/images/countries/nl.png'),
  },
  {
    countryCode: 'NO',
    countryName: 'Norway',
    imageUrl: require('app/assets/images/countries/no.png'),
  },
  {
    countryCode: 'NP',
    countryName: 'Nepal',
    imageUrl: require('app/assets/images/countries/np.png'),
  },
  {
    countryCode: 'NR',
    countryName: 'Nauru',
    imageUrl: require('app/assets/images/countries/nr.png'),
  },
  {
    countryCode: 'NU',
    countryName: 'Niue',
    imageUrl: require('app/assets/images/countries/nu.png'),
  },
  {
    countryCode: 'NZ',
    countryName: 'New Zealand',
    imageUrl: require('app/assets/images/countries/nz.png'),
  },
  {
    countryCode: 'OM',
    countryName: 'Oman',
    imageUrl: require('app/assets/images/countries/om.png'),
  },
  {
    countryCode: 'PA',
    countryName: 'Panama',
    imageUrl: require('app/assets/images/countries/pa.png'),
  },
  {
    countryCode: 'PE',
    countryName: 'Peru',
    imageUrl: require('app/assets/images/countries/pe.png'),
  },
  {
    countryCode: 'PF',
    countryName: 'French Polynesia',
    imageUrl: require('app/assets/images/countries/pf.png'),
  },
  {
    countryCode: 'PG',
    countryName: 'Papua New Guinea',
    imageUrl: require('app/assets/images/countries/pg.png'),
  },
  {
    countryCode: 'PH',
    countryName: 'Philippines',
    imageUrl: require('app/assets/images/countries/ph.png'),
  },
  {
    countryCode: 'PK',
    countryName: 'Pakistan',
    imageUrl: require('app/assets/images/countries/pk.png'),
  },
  {
    countryCode: 'PL',
    countryName: 'Poland',
    imageUrl: require('app/assets/images/countries/pl.png'),
  },
  // {
  //   countryCode: 'PM',
  //   countryName: 'Saint Pierre and Miquelon',
  //   imageUrl: require('app/assets/images/countries/pm.png'),
  // },
  // {
  //   countryCode: 'PN',
  //   countryName: 'Pitcairn',
  //   imageUrl: require('app/assets/images/countries/pn.png'),
  // },
  // {
  //   countryCode: 'PR',
  //   countryName: 'Puerto Rico',
  //   imageUrl: require('app/assets/images/countries/pr.png'),
  // },
  {
    countryCode: 'PS',
    countryName: 'Palestine',
    imageUrl: require('app/assets/images/countries/ps.png'),
  },
  {
    countryCode: 'PT',
    countryName: 'Portugal',
    imageUrl: require('app/assets/images/countries/pt.png'),
  },
  {
    countryCode: 'PW',
    countryName: 'Palau',
    imageUrl: require('app/assets/images/countries/pw.png'),
  },
  {
    countryCode: 'PY',
    countryName: 'Paraguay',
    imageUrl: require('app/assets/images/countries/py.png'),
  },
  {
    countryCode: 'QA',
    countryName: 'Qatar',
    imageUrl: require('app/assets/images/countries/qa.png'),
  },
  // {
  //   countryCode: 'RE',
  //   countryName: 'Réunion',
  //   imageUrl: require('app/assets/images/countries/re.png'),
  // },
  {
    countryCode: 'RO',
    countryName: 'Romania',
    imageUrl: require('app/assets/images/countries/ro.png'),
  },
  {
    countryCode: 'RS',
    countryName: 'Serbia',
    imageUrl: require('app/assets/images/countries/rs.png'),
  },
  {
    countryCode: 'RU',
    countryName: 'Russian Federation',
    imageUrl: require('app/assets/images/countries/ru.png'),
  },
  {
    countryCode: 'RW',
    countryName: 'Rwanda',
    imageUrl: require('app/assets/images/countries/rw.png'),
  },
  {
    countryCode: 'SA',
    countryName: 'Saudi Arabia',
    imageUrl: require('app/assets/images/countries/sa.png'),
  },
  {
    countryCode: 'SB',
    countryName: 'Solomon Islands',
    imageUrl: require('app/assets/images/countries/sb.png'),
  },
  {
    countryCode: 'SC',
    countryName: 'Seychelles',
    imageUrl: require('app/assets/images/countries/sc.png'),
  },
  {
    countryCode: 'SD',
    countryName: 'Sudan',
    imageUrl: require('app/assets/images/countries/sd.png'),
  },
  {
    countryCode: 'SE',
    countryName: 'Sweden',
    imageUrl: require('app/assets/images/countries/se.png'),
  },
  {
    countryCode: 'SG',
    countryName: 'Singapore',
    imageUrl: require('app/assets/images/countries/sg.png'),
  },
  // {
  //   countryCode: 'SH',
  //   countryName: 'Saint Helena, Ascension and Tristan da Cunha',
  //   imageUrl: require('app/assets/images/countries/sh.png'),
  // },
  {
    countryCode: 'SI',
    countryName: 'Slovenia',
    imageUrl: require('app/assets/images/countries/si.png'),
  },
  // {
  //   countryCode: 'SJ',
  //   countryName: 'Svalbard and Jan Mayen Islands',
  //   imageUrl: require('app/assets/images/countries/sj.png'),
  // },
  {
    countryCode: 'SK',
    countryName: 'Slovakia',
    imageUrl: require('app/assets/images/countries/sk.png'),
  },
  {
    countryCode: 'SL',
    countryName: 'Sierra Leone',
    imageUrl: require('app/assets/images/countries/sl.png'),
  },
  // {
  //   countryCode: 'SM',
  //   countryName: 'San Marino',
  //   imageUrl: require('app/assets/images/countries/sm.png'),
  // },
  {
    countryCode: 'SN',
    countryName: 'Senegal',
    imageUrl: require('app/assets/images/countries/sn.png'),
  },
  {
    countryCode: 'SO',
    countryName: 'Somalia',
    imageUrl: require('app/assets/images/countries/so.png'),
  },
  {
    countryCode: 'SR',
    countryName: 'Suriname',
    imageUrl: require('app/assets/images/countries/sr.png'),
  },
  {
    countryCode: 'SS',
    countryName: 'South Sudan',
    imageUrl: require('app/assets/images/countries/ss.png'),
  },
  {
    countryCode: 'ST',
    countryName: 'Sao Tome and Principe',
    imageUrl: require('app/assets/images/countries/st.png'),
  },
  {
    countryCode: 'SV',
    countryName: 'El Salvador',
    imageUrl: require('app/assets/images/countries/sv.png'),
  },
  // {
  //   countryCode: 'SX',
  //   countryName: 'Sint Maarten (Dutch part)',
  //   imageUrl: require('app/assets/images/countries/sx.png'),
  // },
  {
    countryCode: 'SY',
    countryName: 'Syrian Arab Republic',
    imageUrl: require('app/assets/images/countries/sy.png'),
  },
  {
    countryCode: 'SZ',
    countryName: 'Swaziland',
    imageUrl: require('app/assets/images/countries/sz.png'),
  },
  // {
  //   countryCode: 'TC',
  //   countryName: 'Turks and Caicos Islands',
  //   imageUrl: require('app/assets/images/countries/tc.png'),
  // },
  {
    countryCode: 'TD',
    countryName: 'Chad',
    imageUrl: require('app/assets/images/countries/td.png'),
  },
  // {
  //   countryCode: 'TF',
  //   countryName: 'French Southern Territories',
  //   imageUrl: require('app/assets/images/countries/tf.png'),
  // },
  {
    countryCode: 'TG',
    countryName: 'Togo',
    imageUrl: require('app/assets/images/countries/tg.png'),
  },
  {
    countryCode: 'TH',
    countryName: 'Thailand',
    imageUrl: require('app/assets/images/countries/th.png'),
  },
  {
    countryCode: 'TJ',
    countryName: 'Tajikistan',
    imageUrl: require('app/assets/images/countries/tj.png'),
  },
  {
    countryCode: 'TK',
    countryName: 'Tokelau',
    imageUrl: require('app/assets/images/countries/tk.png'),
  },
  {
    countryCode: 'TL',
    countryName: 'Timor-Leste',
    imageUrl: require('app/assets/images/countries/tl.png'),
  },
  {
    countryCode: 'TM',
    countryName: 'Turkmenistan',
    imageUrl: require('app/assets/images/countries/tm.png'),
  },
  {
    countryCode: 'TN',
    countryName: 'Tunisia',
    imageUrl: require('app/assets/images/countries/tn.png'),
  },
  {
    countryCode: 'TO',
    countryName: 'Tonga',
    imageUrl: require('app/assets/images/countries/to.png'),
  },
  {
    countryCode: 'TR',
    countryName: 'Turkey',
    imageUrl: require('app/assets/images/countries/tr.png'),
  },
  {
    countryCode: 'TT',
    countryName: 'Trinidad and Tobago',
    imageUrl: require('app/assets/images/countries/tt.png'),
  },
  {
    countryCode: 'TV',
    countryName: 'Tuvalu',
    imageUrl: require('app/assets/images/countries/tv.png'),
  },
  {
    countryCode: 'TW',
    countryName: 'Taiwan',
    imageUrl: require('app/assets/images/countries/tw.png'),
  },
  {
    countryCode: 'TZ',
    countryName: 'Tanzania, United Republic of Tanzania',
    imageUrl: require('app/assets/images/countries/tz.png'),
  },
  {
    countryCode: 'UA',
    countryName: 'Ukraine',
    imageUrl: require('app/assets/images/countries/ua.png'),
  },
  {
    countryCode: 'UG',
    countryName: 'Uganda',
    imageUrl: require('app/assets/images/countries/ug.png'),
  },
  // {
  //   countryCode: 'UM',
  //   countryName: 'US Minor Outlying Islands',
  //   imageUrl: require('app/assets/images/countries/um.png'),
  // },
  {
    countryCode: 'US',
    countryName: 'United States of America',
    imageUrl: require('app/assets/images/countries/us.png'),
  },
  {
    countryCode: 'UY',
    countryName: 'Uruguay',
    imageUrl: require('app/assets/images/countries/uy.png'),
  },
  {
    countryCode: 'UZ',
    countryName: 'Uzbekistan',
    imageUrl: require('app/assets/images/countries/uz.png'),
  },
  {
    countryCode: 'VA',
    countryName: 'Holy See (Vatican City State)',
    imageUrl: require('app/assets/images/countries/va.png'),
  },
  {
    countryCode: 'VC',
    countryName: 'Saint Vincent and the Grenadines',
    imageUrl: require('app/assets/images/countries/vc.png'),
  },
  {
    countryCode: 'VE',
    countryName: 'Venezuela, Bolivarian Republic of Venezuala',
    imageUrl: require('app/assets/images/countries/ve.png'),
  },
  // {
  //   countryCode: 'VG',
  //   countryName: 'Virgin Islands, British',
  //   imageUrl: require('app/assets/images/countries/vg.png'),
  // },
  // {
  //   countryCode: 'VI',
  //   countryName: 'Virgin Islands, U.S.',
  //   imageUrl: require('app/assets/images/countries/vi.png'),
  // },
  // {
  //   countryCode: 'VN',
  //   countryName: 'Vietnam',
  //   imageUrl: require('app/assets/images/countries/vn.png'),
  // },
  {
    countryCode: 'VU',
    countryName: 'Vanuatu',
    imageUrl: require('app/assets/images/countries/vu.png'),
  },
  // {
  //   countryCode: 'WF',
  //   countryName: 'Wallis and Futuna Islands',
  //   imageUrl: require('app/assets/images/countries/wf.png'),
  // },
  // {
  //   countryCode: 'XK',
  //   countryName: 'Kosovo',
  //   imageUrl: require('app/assets/images/countries/xk.png'),
  // },
  {
    countryCode: 'WS',
    countryName: 'Samoa',
    imageUrl: require('app/assets/images/countries/ws.png'),
  },
  {
    countryCode: 'YE',
    countryName: 'Yemen',
    imageUrl: require('app/assets/images/countries/ye.png'),
  },
  // {
  //   countryCode: 'YT',
  //   countryName: 'Mayotte',
  //   imageUrl: require('app/assets/images/countries/yt.png'),
  // },
  {
    countryCode: 'ZA',
    countryName: 'South Africa',
    imageUrl: require('app/assets/images/countries/za.png'),
  },
  {
    countryCode: 'ZM',
    countryName: 'Zambia',
    imageUrl: require('app/assets/images/countries/zm.png'),
  },
  {
    countryCode: 'ZW',
    countryName: 'Zimbabwe',
    imageUrl: require('app/assets/images/countries/zw.png'),
  },
];
export default allCountriesList;
