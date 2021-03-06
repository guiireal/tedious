// http://technet.microsoft.com/en-us/library/aa176553(v=sql.80).aspx
export const codepageByLcid: { [key: number]: string | undefined } = {
  [0x436]: 'CP1252',
  [0x401]: 'CP1256',
  [0x801]: 'CP1256',
  [0xC01]: 'CP1256',
  [0x1001]: 'CP1256',
  [0x1401]: 'CP1256',
  [0x1801]: 'CP1256',
  [0x1C01]: 'CP1256',
  [0x2001]: 'CP1256',
  [0x2401]: 'CP1256',
  [0x2801]: 'CP1256',
  [0x2C01]: 'CP1256',
  [0x3001]: 'CP1256',
  [0x3401]: 'CP1256',
  [0x3801]: 'CP1256',
  [0x3C01]: 'CP1256',
  [0x4001]: 'CP1256',
  [0x42D]: 'CP1252',
  [0x423]: 'CP1251',
  [0x402]: 'CP1251',
  [0x403]: 'CP1252',
  [0x30404]: 'CP950',
  [0x404]: 'CP950',
  [0x804]: 'CP936',
  [0x20804]: 'CP936',
  [0x1004]: 'CP936',
  [0x41a]: 'CP1250',
  [0x405]: 'CP1250',
  [0x406]: 'CP1252',
  [0x413]: 'CP1252',
  [0x813]: 'CP1252',
  [0x409]: 'CP1252',
  [0x809]: 'CP1252',
  [0x1009]: 'CP1252',
  [0x1409]: 'CP1252',
  [0xC09]: 'CP1252',
  [0x1809]: 'CP1252',
  [0x1C09]: 'CP1252',
  [0x2409]: 'CP1252',
  [0x2009]: 'CP1252',
  [0x425]: 'CP1257',
  [0x0438]: 'CP1252',
  [0x429]: 'CP1256',
  [0x40B]: 'CP1252',
  [0x40C]: 'CP1252',
  [0x80C]: 'CP1252',
  [0x100C]: 'CP1252',
  [0xC0C]: 'CP1252',
  [0x140C]: 'CP1252',
  [0x10437]: 'CP1252',
  [0x10407]: 'CP1252',
  [0x407]: 'CP1252',
  [0x807]: 'CP1252',
  [0xC07]: 'CP1252',
  [0x1007]: 'CP1252',
  [0x1407]: 'CP1252',
  [0x408]: 'CP1253',
  [0x40D]: 'CP1255',
  [0x439]: 'CPUTF8',
  [0x40E]: 'CP1250',
  [0x104E]: 'CP1250',
  [0x40F]: 'CP1252',
  [0x421]: 'CP1252',
  [0x410]: 'CP1252',
  [0x810]: 'CP1252',
  [0x411]: 'CP932',
  [0x10411]: 'CP932',
  [0x412]: 'CP949',
  [0x426]: 'CP1257',
  [0x427]: 'CP1257',
  [0x827]: 'CP1257',
  [0x41C]: 'CP1251',
  [0x414]: 'CP1252',
  [0x814]: 'CP1252',
  [0x415]: 'CP1250',
  [0x816]: 'CP1252',
  [0x416]: 'CP1252',
  [0x418]: 'CP1250',
  [0x419]: 'CP1251',
  [0x81A]: 'CP1251',
  [0xC1A]: 'CP1251',
  [0x41B]: 'CP1250',
  [0x424]: 'CP1250',
  [0x80A]: 'CP1252',
  [0x40A]: 'CP1252',
  [0xC0A]: 'CP1252',
  [0x100A]: 'CP1252',
  [0x140A]: 'CP1252',
  [0x180A]: 'CP1252',
  [0x1C0A]: 'CP1252',
  [0x200A]: 'CP1252',
  [0x240A]: 'CP1252',
  [0x280A]: 'CP1252',
  [0x2C0A]: 'CP1252',
  [0x300A]: 'CP1252',
  [0x340A]: 'CP1252',
  [0x380A]: 'CP1252',
  [0x3C0A]: 'CP1252',
  [0x400A]: 'CP1252',
  [0x41D]: 'CP1252',
  [0x41E]: 'CP874',
  [0x41F]: 'CP1254',
  [0x422]: 'CP1251',
  [0x420]: 'CP1256',
  [0x42A]: 'CP1258'
};

export const codepageBySortId: { [key: number]: string | undefined } = {
  [30]: 'CP437', // SQL_Latin1_General_CP437_BIN
  [31]: 'CP437', // SQL_Latin1_General_CP437_CS_AS
  [32]: 'CP437', // SQL_Latin1_General_CP437_CI_AS
  [33]: 'CP437', // SQL_Latin1_General_Pref_CP437_CI_AS
  [34]: 'CP437', // SQL_Latin1_General_CP437_CI_AI
  [40]: 'CP850', // SQL_Latin1_General_CP850_BIN
  [41]: 'CP850', // SQL_Latin1_General_CP850_CS_AS
  [42]: 'CP850', // SQL_Latin1_General_CP850_CI_AS
  [43]: 'CP850', // SQL_Latin1_General_Pref_CP850_CI_AS
  [44]: 'CP850', // SQL_Latin1_General_CP850_CI_AI
  [49]: 'CP850', // SQL_1xCompat_CP850_CI_AS
  [51]: 'CP1252', // SQL_Latin1_General_Cp1_CS_AS_KI_WI
  [52]: 'CP1252', // SQL_Latin1_General_Cp1_CI_AS_KI_WI
  [53]: 'CP1252', // SQL_Latin1_General_Pref_Cp1_CI_AS_KI_WI
  [54]: 'CP1252', // SQL_Latin1_General_Cp1_CI_AI_KI_WI
  [55]: 'CP850', // SQL_AltDiction_CP850_CS_AS
  [56]: 'CP850', // SQL_AltDiction_Pref_CP850_CI_AS
  [57]: 'CP850', // SQL_AltDiction_CP850_CI_AI
  [58]: 'CP850', // SQL_Scandinavian_Pref_CP850_CI_AS
  [59]: 'CP850', // SQL_Scandinavian_CP850_CS_AS
  [60]: 'CP850', // SQL_Scandinavian_CP850_CI_AS
  [61]: 'CP850', // SQL_AltDiction_CP850_CI_AS
  [80]: 'CP1250', // SQL_Latin1_General_1250_BIN
  [81]: 'CP1250', // SQL_Latin1_General_CP1250_CS_AS
  [82]: 'CP1250', // SQL_Latin1_General_Cp1250_CI_AS_KI_WI
  [83]: 'CP1250', // SQL_Czech_Cp1250_CS_AS_KI_WI
  [84]: 'CP1250', // SQL_Czech_Cp1250_CI_AS_KI_WI
  [85]: 'CP1250', // SQL_Hungarian_Cp1250_CS_AS_KI_WI
  [86]: 'CP1250', // SQL_Hungarian_Cp1250_CI_AS_KI_WI
  [87]: 'CP1250', // SQL_Polish_Cp1250_CS_AS_KI_WI
  [88]: 'CP1250', // SQL_Polish_Cp1250_CI_AS_KI_WI
  [89]: 'CP1250', // SQL_Romanian_Cp1250_CS_AS_KI_WI
  [90]: 'CP1250', // SQL_Romanian_Cp1250_CI_AS_KI_WI
  [91]: 'CP1250', // SQL_Croatian_Cp1250_CS_AS_KI_WI
  [92]: 'CP1250', // SQL_Croatian_Cp1250_CI_AS_KI_WI
  [93]: 'CP1250', // SQL_Slovak_Cp1250_CS_AS_KI_WI
  [94]: 'CP1250', // SQL_Slovak_Cp1250_CI_AS_KI_WI
  [95]: 'CP1250', // SQL_Slovenian_Cp1250_CS_AS_KI_WI
  [96]: 'CP1250', // SQL_Slovenian_Cp1250_CI_AS_KI_WI
  [104]: 'CP1251', // SQL_Latin1_General_1251_BIN
  [105]: 'CP1251', // SQL_Latin1_General_CP1251_CS_AS
  [106]: 'CP1251', // SQL_Latin1_General_CP1251_CI_AS
  [107]: 'CP1251', // SQL_Ukrainian_Cp1251_CS_AS_KI_WI
  [108]: 'CP1251', // SQL_Ukrainian_Cp1251_CI_AS_KI_WI
  [112]: 'CP1253', // SQL_Latin1_General_1253_BIN
  [113]: 'CP1253', // SQL_Latin1_General_CP1253_CS_AS
  [114]: 'CP1253', // SQL_Latin1_General_CP1253_CI_AS
  [120]: 'CP1253', // SQL_MixDiction_CP1253_CS_AS
  [121]: 'CP1253', // SQL_AltDiction_CP1253_CS_AS
  [122]: 'CP1253', // SQL_AltDiction2_CP1253_CS_AS
  [124]: 'CP1253', // SQL_Latin1_General_CP1253_CI_AI
  [128]: 'CP1254', // SQL_Latin1_General_1254_BIN
  [129]: 'CP1254', // SQL_Latin1_General_Cp1254_CS_AS_KI_WI
  [130]: 'CP1254', // SQL_Latin1_General_Cp1254_CI_AS_KI_WI
  [136]: 'CP1255', // SQL_Latin1_General_1255_BIN
  [137]: 'CP1255', // SQL_Latin1_General_CP1255_CS_AS
  [138]: 'CP1255', // SQL_Latin1_General_CP1255_CI_AS
  [144]: 'CP1256', // SQL_Latin1_General_1256_BIN
  [145]: 'CP1256', // SQL_Latin1_General_CP1256_CS_AS
  [146]: 'CP1256', // SQL_Latin1_General_CP1256_CI_AS
  [152]: 'CP1257', // SQL_Latin1_General_1257_BIN
  [153]: 'CP1257', // SQL_Latin1_General_CP1257_CS_AS
  [154]: 'CP1257', // SQL_Latin1_General_CP1257_CI_AS
  [155]: 'CP1257', // SQL_Estonian_Cp1257_CS_AS_KI_WI
  [156]: 'CP1257', // SQL_Estonian_Cp1257_CI_AS_KI_WI
  [157]: 'CP1257', // SQL_Latvian_Cp1257_CS_AS_KI_WI
  [158]: 'CP1257', // SQL_Latvian_Cp1257_CI_AS_KI_WI
  [159]: 'CP1257', // SQL_Lithuanian_Cp1257_CS_AS_KI_WI
  [160]: 'CP1257', // SQL_Lithuanian_Cp1257_CI_AS_KI_WI
  [183]: 'CP1252', // SQL_Danish_Pref_Cp1_CI_AS_KI_WI
  [184]: 'CP1252', // SQL_SwedishPhone_Pref_Cp1_CI_AS_KI_WI
  [185]: 'CP1252', // SQL_SwedishStd_Pref_Cp1_CI_AS_KI_WI
  [186]: 'CP1252' // SQL_Icelandic_Pref_Cp1_CI_AS_KI_WI
};
