var BlockLang;
var arrLang = {
  'EN': {
    'Abşeron':'Absheron'
,'Ağdam':'Agdam'
,'Ağdaş':'Agdash'
,'Ağcabədi':'Aghjabadi'
,'Ağstafa':'Agstafa'
,'Ağsu':'Agsu'
,'Astara':'Astara'
,'Babək':'Babek'
,'Bakı':'Baku '
,'Balakən':'Balakan'
,'Bərdə':'Barda'
,'Beyləqan':'Beylagan'
,'Biləsuvar':'Bilasuvar'
,'Daşkəsən':'Dashkasan'
,'Füzuli':'Fuzuli'
,'Gədəbəy':'Gadabay'
,'Gəncə':'Ganja '
,'Qobustan':'Gobustan'
,'Goranboy':'Goranboy'
,'Göyçay':'Goychay'
,'Xanlar':'Goygol'
,'Hajigabul':'Hajigabul'
,'İmişli':'Imishli'
,'İsmayıllı':'Ismailli'
,'Cəbrayıl':'Jabrayil'
,'Cəlilabad':'Jalilabad'
,'Culfa':'Julfa'
,'Kəlbəcər':'Kalbajar'
,'Kangarli':'Kangarli'
,'Xaçmaz':'Khachmaz'
,'Xizı':'Khizi'
,'Xocalı':'Khojaly'
,'Xocavənd':'Khojavend'
,'Kürdəmir':'Kurdamir'
,'Laçın':'Lachin'
,'Lankaran':'Lankaran'
,'Lankaran':'Lankaran '
,'Lerik':'Lerik'
,'Masallı':'Masally'
,'Mingəçevir':'Mingachevir '
,'Naftalan':'Naftalan '
,'Naxçıvan':'Nakhchivan '
,'Neftçala':'Neftchala'
,'Oğuz':'Oghuz'
,'Ordubad':'Ordubad'
,'Qax':'Qakh'
,'Qazax':'Qazakh'
,'Qəbələ':'Qbala'
,'Quba':'Quba'
,'Qubadli':'Qubadlı'
,'Qusar':'Qusar'
,'Saatlı':'Saatly'
,'Sabirabad':'Sabirabad'
,'Sədərək':'Sadarak'
,'Salyan':'Salyan'
,'Samux':'Samukh'
,'Dəvəçi':'Shabran'
,'Şahbuz':'Shahbuz'
,'ŞəkiRayon':'Shaki'
,'Şəki':'Shaki(city)'
,'Şamaxı':'Shamakhi'
,'Şəmkir':'Shamkir'
,'Şərur':'Sharur'
,'Shirvan':'Shirvan '
,'ŞuşaRayon':'Shusha'
,'Şuşa':'Shusha(city)'
,'Siyəzən':'Siazan'
,'Xankəndi':'Stepanakert '
,'Sumqayıt':'Sumqayıt '
,'Tərtər':'Tartar'
,'Tovuz':'Tovuz'
,'Ucar':'Ujar'
,'Yardımlı':'Yardymli'
,'YevlakhRayon':'Yevlakh'
,'Yevlakh':'Yevlakh(city) '
,'Zəngilan':'Zangilan'
,'Zaqatala':'Zaqatala',
  },
  'AZ': {
   'Absheron':'Abşeron'
,'Agdam':'Ağdam'
,'Agdash':'Ağdaş'
,'Aghjabadi':'Ağcabədi'
,'Agstafa':'Ağstafa'
,'Agsu':'Ağsu'
,'Astara':'Astara'
,'Babek':'Babək'
,'Baku ':'Bakı'
,'Balakan':'Balakən'
,'Barda':'Bərdə'
,'Beylagan':'Beyləqan'
,'Bilasuvar':'Biləsuvar'
,'Dashkasan':'Daşkəsən'
,'Fuzuli':'Füzuli'
,'Gadabay':'Gədəbəy'
,'Ganja ':'Gəncə'
,'Gobustan':'Qobustan'
,'Goranboy':'Goranboy'
,'Goychay':'Göyçay'
,'Goygol':'Xanlar'
,'Hajigabul':'Hajigabul'
,'Imishli':'İmişli'
,'Ismailli':'İsmayıllı'
,'Jabrayil':'Cəbrayıl'
,'Jalilabad':'Cəlilabad'
,'Julfa':'Culfa'
,'Kalbajar':'Kəlbəcər'
,'Kangarli':'Kangarli'
,'Khachmaz':'Xaçmaz'
,'Khizi':'Xizı'
,'Khojaly':'Xocalı'
,'Khojavend':'Xocavənd'
,'Kurdamir':'Kürdəmir'
,'Lachin':'Laçın'
,'Lankaran':'Lankaran'
,'Lankaran ':'Lankaran'
,'Lerik':'Lerik'
,'Masally':'Masallı'
,'Mingachevir ':'Mingəçevir'
,'Naftalan ':'Naftalan'
,'Nakhchivan ':'Naxçıvan'
,'Neftchala':'Neftçala'
,'Oghuz':'Oğuz'
,'Ordubad':'Ordubad'
,'Qakh':'Qax'
,'Qazakh':'Qazax'
,'Qbala':'Qəbələ'
,'Quba':'Quba'
,'Qubadlı':'Qubadli'
,'Qusar':'Qusar'
,'Saatly':'Saatlı'
,'Sabirabad':'Sabirabad'
,'Sadarak':'Sədərək'
,'Salyan':'Salyan'
,'Samukh':'Samux'
,'Shabran':'Dəvəçi'
,'Shahbuz':'Şahbuz'
,'Shaki':'ŞəkiRayon'
,'Shaki(city)':'Şəki'
,'Shamakhi':'Şamaxı'
,'Shamkir':'Şəmkir'
,'Sharur':'Şərur'
,'Shirvan ':'Shirvan'
,'Shusha':'ŞuşaRayon'
,'Shusha(city)':'Şuşa'
,'Siazan':'Siyəzən'
,'Stepanakert ':'Xankəndi'
,'Sumqayıt ':'Sumqayıt'
,'Tartar':'Tərtər'
,'Tovuz':'Tovuz'
,'Ujar':'Ucar'
,'Yardymli':'Yardımlı'
,'Yevlakh':'YevlakhRayon'
,'Yevlakh(city) ':'Yevlakh'
,'Zangilan':'Zəngilan'
,'Zaqatala':'Zaqatala',
  }
};



function AZ(){


	 BlockLang = {
		'question':'Sual',
		'points':'Xal',
		'find':'Tapın',
		'confirm':'TƏSTIQ',
		'next':'NÖVBƏTI',
		'pause':'Oyunu dayandirmaq',
		'resume':'DAVAM ETMƏK',
		'end':'BITIRMƏK',
		'falseSelect':'Sehv!<br> Sənin seçdiyin',
		'trueSelect':'Düz!',
		'choose':'Xəritə kəşfıyyatı',

}


}

function EN(){



	BlockLang = {
		'question':'Question',
		'points':'Points',
		'find':'Find',
		'confirm':'CONFIRM',
		'next':'NEXT',
		'pause':'',
		'resume':'RESUME GAME',
		'end':'END GAME',
		'falseSelect':'Wrong!<br>You selected',
		'trueSelect':'Correct!',
		'choose':'Map research',

}


}

