var xpPerLevel=[0,0,4e4,5e4,5e4,6e4,6e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,8e4,5e4,50250,50500,50500,50750,51e3,51250,51500,51750,52e3,52e3,52250,52500,52750,53e3,53250,53500,53500,53750,54e3,54250,54500,54750,55e3,55250,55500,55750,55750,56e3,56250,56500,56750,57e3,57250,57500,57750,58e3,58250,58500,58750,59e3,59250,59500,59750,6e4,60250,60500,60750,61e3,61250,61500,61750,62e3,62250,62500,62750,63e3,63250,63500,63750,64e3,64250,64500,64750,65e3,65250,65500,65750,66e3,66250,66750,67e3,67250,67500,67750,68e3,68250,68500,68750,69250,69500,69750,7e4,70250,70500,70750,71250,71500,71750,72e3,72250,72750,73e3,73250,73500,73750,74250,74500,74750,75e3,75250,75750,76e3,76250,76500,77e3,77250,77500,78e3,78250,78500,78750,79250,79500,79750,80250,80500,80750,81250,81500,81750,82250,82500,82750,83250,83500,83750,84250,84500,85e3,85250,85500,86e3,86250,86750,87e3,87250,87750,88e3,88500,88750,89250,89500,9e4,90250,90750,91e3,91500,91750,92250,92500,93e3,93250,93750,94e3,94500,94750,95250,95500,96e3,96500,96750,97250,97500,98e3,98500,98750,99250,99500,1e5,100500,100750,101250,101750,102e3,102500,103e3,103250,103750,104250,104750,105e3,105500,106e3,106500,106750,107250,107750,108250,108500,109e3,109500,11e4,110500,110750,111250,111750,112250,112750,113250,113500,114e3,114500,115e3,115500,116e3,116500,117e3,117500,117750,118250,118750,119250,119750,120250,120750,121250,121750,122250,122750,123250,123750,124250,124750,125250,125750,126500,127e3,127500,128e3,128500,129e3,129500,13e4,130500,131250,131750,132250,132750,133250,133750,134500,135e3,135500,136e3,136750,137250,137750,138250,139e3,139500,14e4,140500,141250,141750,142250,143e3,143500,144e3,144750,145250,146e3,146500,147e3,147750,148250,149e3,149500,150250,150750,151500,152e3,152750,153250,154e3,154500,155250,155750,156500,157e3,157750,158500,159e3,159750,160250,161e3,161750,162250,163e3,163750,164250,165e3,165750,166500,167e3,167750,168500,169250,169750,170500,171250,172e3,172750,173250,174e3,174750,175500,176250,177e3,177750,178500,179250,179750,180500,181250,182e3,182750,183500,184250,185e3,186e3,186750,187500,188250,189e3,189750,190500,191250,192e3,192750,193750,194500,195250,196e3,196750,197750,198500,199250,200250,201e3,201750,202500,203500,204250,205e3,206e3,206750,207750,208500,209250,210250,211e3,212e3,212750,213750,214500,215500,216250,217250,218250,219e3,22e4,220750,221750,222750,223500,224500,225500,226250,227250,228250,229250,23e4,231e3,232e3,233e3,234e3,234750,235750,236750,237750,238750,239750,240750,241750,242750,243750,244750,245750,246750,247750,248750,249750,250750,251750,252750,254e3,255e3,256e3,257e3,258e3,259250,260250,261250,262250,263500,264500,265500,266750,267750,269e3,27e4,271250,272250,273250,274500,275500,276750,278e3,279e3,280250,281250,282500,283750,284750,286e3,287250,288250,289500,290750,292e3,293e3,294250,295500,296750,298e3,299250,300500,301750,303e3,304250,305500,306750,308e3,309250,310500,311750,313e3,314250,315500,317e3,318250,319500,320750,322e3,323500,324750,326e3,327500,328750,330250,331500,332750,334250,335500,337e3,338500,339750,341250,342500,344e3,345500,346750,348250,349750,351e3,352500,354e3,355500,357e3,358500,359750,361250,362750,364250,365750,367250,368750,370250,371750,373500,375e3,376500,378e3,379500,381250,382750,384250,385750,387500,389e3,390750,392250,393750,395500,397e3,398750,400500,402e3,403750,405250,407e3,408750,410250,412e3,413750,415500,417250,418750,420500,422250,424e3,425750,427500,429250,431e3,432750,434500,436500,438250,44e4,441750,443750,445500,447250,449e3,451e3,452750,454750,456500,458500,460250,462250,464e3,466e3,468e3,469750,471750,473750,475750,477750,479500,481500,483500,485500,487500,489500,491500,493500,495500,497750,499750,501750,503750,506e3,508e3,51e4,512250,514250,516250,518500,520500,522750,525e3,527e3,529250,531500,533500,535750,538e3,540250,542500,544750,547e3,549250,551500,553750,556e3,558250,560500,562750,565250,567500,569750,572250,574500,576750,579250,581500,584e3,586500,588750,591250,593750,596e3,598500,601e3,603500,606e3,608500,611e3,613500,616e3,618500,621e3,623750,626250,628750,631250,634e3,636500,639250,641750,644500,647e3,649750,652500,655e3,657750,660500,663250,666e3,668750,671500,674250,677e3,679750,682500,685250,688250,691e3,693750,696750,699500,702500,705250,708250,711250,714e3,717e3,72e4,723e3,726e3,728750,731750,734750,738e3,741e3,744e3,747e3,75e4,753250,756250,759500,762500,765750,768750,772e3,775250,778250,781500,784750,788e3,791250,794500,797750,801e3,804250,807500,811e3,814250,817500,821e3,824250,827750,831250,834500,838e3,841500,845e3,848250,851750,855250,858750,862500,866e3,869500,873e3,876750,880250,884e3,887500,891250,894750,898500,902250,906e3,909750,913500,917250,921e3,924750,928500,932250,936250,94e4,944e3,947750,951750,955500,959500,963500,967500,971500,975500,979500,983500,987500,991500,995500,999750,1003750,1008e3,1012e3,1016250,1020500,1024500,1028750,1033e3,1037250,1041500,1045750,1050250,1054500,1058750,1063250,1067500,1072e3,1076250,1080750,1085250,1089750,1094250,1098750,1103250,1107750,1112250,1116750,1121500,1126e3,1130750,1135250,114e4,1144750,1149250,1154e3,1158750,1163500,1168250,1173250,1178e3,1182750,1187750,1192500,1197500,1202500,1207250,1212250,1217250,1222250,1227250,1232500,1237500,1242500,1247750,1252750,1258e3,1263e3,1268250,1273500,1278750,1284e3,1289250,1294500,13e5,1305250,1310750,1316e3,1321500,1326750,1332250,1337750,1343250,1348750,1354250,136e4,1365500,1371250,1376750,1382500,1388e3,1393750,1399500,1405250,1411e3,1417e3,1422750,1428500,1434500,1440250,1446250,1452250,1458250,1464250,1470250,1476250,1482250,1488500,1494500,1500750,1506750,1513e3,1519250,1525500,1531750,1538e3,1544500,1550750,1557250,1563500,157e4,1576500,1583e3,1589500,1596e3,1602500,1609e3,1615750,1622250,1629e3,1635750,1642500,1649250,1656e3,1662750,1669750,1676500,1683500,1690250,1697250,1704250,1711250,1718250,1725250,1732500,1739500,1746750,1754e3,1761e3,1768250,1775500,1783e3,1790250,1797500,1805e3,1812500,182e4,1827250,1835e3,1842500,185e4,1857500,1865250,1873e3,1880500,1888250,1896e3,1904e3,1911750,1919500,1927500,1935500,1943250,1951250,1959500,1967500,1975500,1983750,1991750,2e6],totalPerLevel=[0,0,4e4,9e4,14e4,2e5,26e4,34e4,42e4,5e5,58e4,66e4,74e4,82e4,9e5,98e4,106e4,114e4,122e4,13e5,138e4,146e4,154e4,162e4,17e5,178e4,186e4,194e4,202e4,21e5,218e4,226e4,234e4,242e4,25e5,258e4,266e4,274e4,282e4,29e5,298e4,306e4,314e4,322e4,33e5,338e4,346e4,354e4,362e4,37e5,378e4,386e4,394e4,402e4,41e5,418e4,426e4,434e4,442e4,45e5,458e4,466e4,474e4,482e4,49e5,498e4,506e4,514e4,522e4,53e5,538e4,546e4,554e4,562e4,57e5,578e4,586e4,594e4,602e4,61e5,618e4,626e4,634e4,642e4,65e5,658e4,666e4,674e4,682e4,69e5,698e4,706e4,714e4,722e4,73e5,738e4,746e4,754e4,762e4,77e5,778e4,783e4,7880250,7930750,7981250,8032e3,8083e3,8134250,8185750,8237500,8289500,8341500,8393750,8446250,8499e3,8552e3,8605250,8658750,8712250,8766e3,882e4,8874250,8928750,8983500,9038500,9093750,9149250,9205e3,9260750,9316750,9373e3,9429500,9486250,9543250,9600500,9658e3,9715750,9773750,9832e3,9890500,9949250,10008250,10067500,10127e3,10186750,10246750,10307e3,10367500,10428250,10489250,10550500,10612e3,10673750,10735750,10798e3,10860500,10923250,10986250,11049500,11113e3,11176750,11240750,11305e3,11369500,11434250,11499250,11564500,1163e4,11695750,11761750,11828e3,11894750,11961750,12029e3,12096500,12164250,12232250,12300500,12369e3,12437750,12507e3,12576500,12646250,12716250,12786500,12857e3,12927750,12999e3,13070500,13142250,13214250,13286500,13359250,13432250,13505500,13579e3,13652750,13727e3,13801500,13876250,13951250,14026500,14102250,14178250,14254500,14331e3,14408e3,14485250,14562750,14640750,14719e3,14797500,14876250,14955500,15035e3,15114750,15195e3,15275500,15356250,15437500,15519e3,15600750,15683e3,15765500,15848250,15931500,16015e3,16098750,16183e3,16267500,16352500,16437750,16523250,16609250,16695500,16782250,16869250,16956500,17044250,17132250,17220750,17309500,17398750,17488250,17578250,17668500,17759250,17850250,17941750,18033500,18125750,18218250,18311250,18404500,18498250,18592250,18686750,18781500,18876750,18972250,19068250,19164750,19261500,19358750,19456250,19554250,19652750,19751500,19850750,19950250,20050250,20150750,20251500,20352750,20454500,20556500,20659e3,20762e3,20865250,20969e3,21073250,21178e3,21283e3,21388500,21494500,21601e3,21707750,21815e3,21922750,22031e3,22139500,22248500,22358e3,22468e3,22578500,22689250,22800500,22912250,23024500,23137250,23250500,23364e3,23478e3,23592500,23707500,23823e3,23939e3,24055500,24172500,2429e4,24407750,24526e3,24644750,24764e3,24883750,25004e3,25124750,25246e3,25367750,2549e4,25612750,25736e3,25859750,25984e3,26108750,26234e3,26359750,26486250,26613250,26740750,26868750,26997250,27126250,27255750,27385750,27516250,27647500,27779250,27911500,28044250,28177500,28311250,28445750,28580750,28716250,28852250,28989e3,29126250,29264e3,29402250,29541250,29680750,29820750,29961250,30102500,30244250,30386500,30529500,30673e3,30817e3,30961750,31107e3,31253e3,31399500,31546500,31694250,31842500,31991500,32141e3,32291250,32442e3,32593500,32745500,32898250,33051500,33205500,3336e4,33515250,33671e3,33827500,33984500,34142250,34300750,34459750,34619500,34779750,34940750,35102500,35264750,35427750,35591500,35755750,35920750,36086500,36253e3,3642e4,36587750,36756250,36925500,37095250,37265750,37437e3,37609e3,37781750,37955e3,38129e3,38303750,38479250,38655500,38832500,39010250,39188750,39368e3,39547750,39728250,39909500,40091500,40274250,40457750,40642e3,40827e3,41013e3,41199750,41387250,41575500,41764500,41954250,42144750,42336e3,42528e3,42720750,42914500,43109e3,43304250,43500250,43697e3,43894750,44093250,44292500,44492750,44693750,44895500,45098e3,45301500,45505750,45710750,45916750,46123500,46331250,46539750,46749e3,46959250,47170250,47382250,47595e3,47808750,48023250,48238750,48455e3,48672250,48890500,49109500,49329500,49550250,49772e3,49994750,50218250,50442750,50668250,50894500,51121750,5135e4,51579250,51809250,52040250,52272250,52505250,52739250,52974e3,53209750,53446500,53684250,53923e3,54162750,54403500,54645250,54888e3,55131750,55376500,55622250,55869e3,56116750,56365500,56615250,56866e3,57117750,57370500,57624500,57879500,58135500,58392500,58650500,58909750,5917e4,59431250,59693500,59957e3,60221500,60487e3,60753750,61021500,61290500,61560500,61831750,62104e3,62377250,62651750,62927250,63204e3,63482e3,63761e3,64041250,64322500,64605e3,64888750,65173500,65459500,65746750,66035e3,66324500,66615250,66907250,67200250,67494500,6779e4,68086750,68384750,68684e3,68984500,69286250,69589250,69893500,70199e3,70505750,70813750,71123e3,71433500,71745250,72058250,72372500,72688e3,73005e3,73323250,73642750,73963500,74285500,74609e3,74933750,75259750,75587250,75916e3,76246250,76577750,76910500,77244750,77580250,77917250,78255750,78595500,78936750,79279250,79623250,79968750,80315500,80663750,81013500,81364500,81717e3,82071e3,82426500,82783500,83142e3,83501750,83863e3,84225750,8459e4,84955750,85323e3,85691750,86062e3,86433750,86807250,87182250,87558750,87936750,88316250,88697500,89080250,89464500,89850250,90237750,90626750,91017500,91409750,91803500,92199e3,92596e3,92994750,93395250,93797250,94201e3,94606250,95013250,95422e3,95832250,96244250,96658e3,97073500,97490750,97909500,9833e4,98752250,99176250,99602e3,100029500,100458750,100889750,101322500,101757e3,102193500,102631750,103071750,103513500,103957250,104402750,10485e4,105299e3,10575e4,106202750,106657500,107114e3,107572500,108032750,108495e3,108959e3,109425e3,109893e3,110362750,110834500,111308250,111784e3,112261750,112741250,113222750,113706250,114191750,114679250,115168750,115660250,116153750,116649250,117147e3,117646750,118148500,118652250,119158250,119666250,120176250,120688500,121202750,121719e3,122237500,122758e3,123280750,123805750,124332750,124862e3,125393500,125927e3,126462750,127000750,127541e3,128083500,128628250,129175250,129724500,130276e3,130829750,131385750,131944e3,132504500,133067250,133632500,1342e5,134769750,135342e3,135916500,136493250,137072500,137654e3,138238e3,138824500,139413250,140004500,140598250,141194250,141792750,142393750,142997250,143603250,144211750,144822750,145436250,146052250,146670750,147291750,147915500,148541750,149170500,149801750,150435750,151072250,151711500,152353250,152997750,153644750,154294500,154947e3,155602e3,156259750,156920250,157583500,158249500,158918250,159589750,160264e3,160941e3,161620750,162303250,162988500,163676750,164367750,165061500,165758250,166457750,167160250,167865500,168573750,169285e3,169999e3,170716e3,171436e3,172159e3,172885e3,173613750,174345500,175080250,175818250,176559250,177303250,178050250,178800250,179553500,180309750,181069250,181831750,182597500,183366250,184138250,184913500,185691750,186473250,187258e3,188046e3,188837250,189631750,190429500,191230500,192034750,192842250,193653250,194467500,195285e3,196106e3,196930250,197758e3,198589250,199423750,200261750,201103250,201948250,202796500,203648250,204503500,205362250,206224750,207090750,207960250,208833250,20971e4,210590250,211474250,212361750,213253e3,214147750,215046250,215948500,216854500,217764250,218677750,219595e3,220516e3,221440750,222369250,223301500,224237750,225177750,226121750,227069500,228021250,228976750,229936250,230899750,231867250,232838750,233814250,234793750,235777250,236764750,237756250,238751750,239751500,240755250,241763250,242775250,243791500,244812e3,245836500,246865250,247898250,248935500,249977e3,251022750,252073e3,253127500,254186250,255249500,256317e3,257389e3,258465250,259546e3,260631250,261721e3,262815250,263914e3,265017250,266125e3,267237250,268354e3,269475500,270601500,271732250,272867500,274007500,275152250,276301500,277455500,278614250,279777750,280946e3,282119250,283297250,28448e4,285667750,286860250,288057750,289260250,290467500,291679750,292897e3,294119250,295346500,296579e3,297816500,299059e3,300306750,301559500,302817500,304080500,305348750,306622250,307901e3,309185e3,310474250,311768750,313068750,314374e3,315684750,317000750,318322250,319649e3,320981250,322319e3,323662250,325011e3,326365250,327725250,329090750,330462e3,331838750,333221250,334609250,336003e3,337402500,338807750,340218750,341635750,343058500,344487e3,345921500,347361750,348808e3,350260250,351718500,353182750,354653e3,356129250,357611500,3591e5,360594500,362095250,363602e3,365115e3,366634250,368159750,369691500,371229500,372774e3,374324750,375882e3,377445500,379015500,380592e3,382175e3,383764500,385360500,386963e3,388572e3,390187750,39181e4,393439e3,395074750,396717250,398366500,400022500,401685250,403355e3,405031500,406715e3,408405250,410102500,411806750,413518e3,415236250,416961500,418694e3,420433500,422180250,423934250,425695250,427463500,429239e3,431022e3,432812250,434609750,436414750,438227250,440047250,441874500,443709500,445552e3,447402e3,449259500,451124750,452997750,454878250,456766500,458662500,460566500,462478250,464397750,466325250,468260750,470204e3,472155250,474114750,476082250,478057750,480041500,482033250,484033250];