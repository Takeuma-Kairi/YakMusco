
/*局所麻酔薬*/
var quiz= [[
["リドカインの作用点は、電位依存性 Na イオンチャネルである", 0, "問題文の通り。", 0],
["テトラカインの局所麻酔作用の機序は、K イオンチャネル遮断である", 1, "Na イオンチャネル遮断である", 0],
["オキセサゼインは、強酸性下でも活性を示すため、胃炎や消化性潰瘍に用いられる", 0, "問題文の通り", 0],
["局所麻酔薬は、一般的に太い神経の伝導を早く抑制する", 1,"一般的に細い神経の伝導を早く抑制する", 0],
["局所麻酔薬は、触覚、温覚、痛覚の順に感覚が失われる", 1, "痛覚、温覚、触覚の順に感覚が失われる", 0],
["炎症巣では細胞外液が酸性側に傾くため、局所麻酔薬の麻酔効果が高くなる",1,"酸性部位では細胞外にイオン型が増加し、細胞膜を通過できず作用は減弱する", 0],
["テトラカインは、神経細胞内でイオン型となって Na イオンチャネルを遮断する",0 ,"非イオン型として細胞膜を通過し、イオン型に変換された後、Na イオンチャネルを細胞の内側から遮断する", 0],
["リドカインの作用を持続させる目的で、アドレナリンのような血管収縮薬が併用される",0 ,"問題文の通り", 0],
["プロカインは組織浸透性が低いので、表面麻酔には不適当である",0 ,"問題文の通り。そのためプロカインは注射で用いられる", 0],
["オキセサゼインは、強酸性条件下でも有効であり、胃粘膜局所麻酔薬として用いられる",0 ,"問題文の通り", 0],
["メピバカインは、血中エステラーゼによる代謝物がアレルギー反応を起こしやすい",1, "メピバカインはアミド型であり、そもそも血中エステラーゼによる分解を受けにくい", 0]],

/*ここから不整脈薬*/
[
["シベンゾリンは、NaチャネルおよびKチャネルを遮断し、活動電位持続時間を延長する。", 0,"問題文の通り。シベンゾリンはⅠa群の抗不整脈薬である。", 0],
["メキシレチンは、Naチャネルを遮断し、活動電位持続時間を延長する。", 1, "Ⅰb群の抗不整脈薬であり、Naチャネルを遮断する。活動電位持続時間は短縮する。", 0],
["ピルシカイニドは、Caチャネルを選択的に遮断し、活動電位持続時間を延長する", 1, "Ⅰc群の抗不整脈薬であり、心筋細胞のNaチャネルを遮断し、活動電位持続時間は変化しない。", 0],
["アミオダロンは、Kチャネルを遮断し、活動電位持続時間を延長する", 0, "Ⅲ群の抗不整脈薬であり、Kチャネル以外にも、Naチャネル、β受容体を遮断し、活動電位持続時間を延長する。", 0],
["ベプリジルは、β受容体を遮断し、不応期を延長する", 1, "Ⅳ群の不整脈薬であり、CaチャネルやNaチャネル、Kチャネルを遮断し、不応期を延長する。", 0],
["キニジンは、NaチャネルとKチャネルを遮断し、活動電位持続時間を短縮する", 1, "活動電位持続時間を延長する",0],
["ソタロールは、心筋のKチャネル遮断作用とβ受容体遮断作用を示す", 0, "問題文の通り。ソタロールはⅢ群に分類される。", 0],
["ベラパミルはL型Caチャネルを遮断し、房室結節細胞の不応期を延長する", 0, "問題文の通り。ベラパミルはⅣ群に分類される。", 0],
["アトロピンはムスカリン性アセチルコリンM2受容体を遮断し、徐脈性不整脈を改善する", 0, "問題文の通り。アトロピンは洞性徐脈、房室ブロックを改善する。", 0],
["アセブトロールはアドレナリンβ受容体を遮断し、異所性ペースメーカー活性を抑制する", 0, "問題文の通り。アセブトロールはⅡ群に分類される。",0],
["洞房結節において、心拍リズム形成に必要な興奮が発生する", 0, "問題文の通り。洞房結節は心拍リズム形成におけるペースメーカーである。", 0],
["心電図において、QRS波は、心室の収縮のはじまりに対応している", 0, "問題文の通り。P波は心房の興奮、QRS波は心室の興奮、T波は心室の再分極を記録したものである。", 0],
["心臓を支配する交感神経活動が亢進すると、心拍数が増加する", 0, "問題文の通り。交感神経が興奮すると、洞房結節の興奮頻度が増加し、刺激電動速度も増大するため、心拍数が増加する。",0],
["心臓における興奮は、一連の特殊なニューロンにより伝導される。", 1, "心臓の刺激伝導系は特殊心筋と呼ばれる「心筋細胞」であり、神経細胞ではない。",0],
["洞房結節は、一般にNaイオンの細胞内流入により活動電位を発生させ、刺激電動系におけるペースメーカーとして機能する", 1 , "Caイオンの細胞内流入により活動電位を発生させる。", 0],
["心電図において、P波は心室の収縮のはじまりに対応している", 1, "心房の収縮を記録したものである。", 0]
],

[
["メチルジゴキシンは、Na,K-ATPaseを阻害して、心筋細胞内Ca濃度を上昇させて陽性変力作用を示す", 0, "問題文の通り。陽性変力作用とは、心筋収縮力増強作用のことである。", 0],
["コルホルシンダロパートは、cAMP誘導体で、細胞内でcAMPに変換されて心筋収縮力を増強する", 1, "コルホルシンダロパートはアデニル酸シクラーゼ活性化薬である。問題文はブクラデシンに関する記述である。", 0],
["ピモベンダンは、トロポニンCのCaイオン感受性を増大させるとともに、ホスホジエステラーゼⅢを阻害して強心作用を示す", 0, "問題文の通り。", 0],
["カルペリチドは、グアニル酸シクラーゼ内臓型受容体を遮断して、前負荷および後負荷を軽減させる", 1, "カルペリチドはナトリウム利尿ペプチド（ＡＮＰ）であり、ＡＮＰのグアニル酸シクラーゼ-A（ＧＣ-Ａ）受容体を刺激する。なお、本剤は静脈拡張や尿量増加に伴う前負荷軽減作用と、動脈拡張による後負荷軽減作用を示す。", 0],
["ブクラデシンは、細胞膜通過後cAMPとなり、心筋収縮力を増強する", 0, "問題文の通り。", 0],
["カルペリチドは、前負荷も後負荷も軽減させる", 0, "カルペリチドは、心房性ナトリウム利尿ペプチド(ANP)刺激薬である。細胞内cGMP濃度を上昇させることで、血管拡張作用や利尿作用を示す。静脈拡張と尿量増加による前負荷の軽減作用と、動脈拡張による後負荷の軽減作用を示す。", 0],
["強心配糖体は、Na/Ca交換系を直接抑制し、心筋細胞内Ca濃度を増加させる", 1, "Na,K-ATPaseを阻害して、間接的にNa/Ca交感系を抑制する。", 0],
["強心配糖体は、房室伝導時間を短縮し、心電図上PR間隔を短縮する", 1, "房室結節を直接抑制することにより、房室間興奮電動を遅延させるため、PR間隔の延長を伴うことがある。", 0],
["強心配糖体は、心拍数を減少させるので、発作性上室性頻脈の治療に用いられる。", 0, "問題文の通り。迷走神経刺激作用や刺激伝導速度の抑制により心拍数を減少させる。", 0],
["強心配糖体は、心室筋の自動性を高めるので、副作用として心室期外収縮を起こす", 0, "問題文の通り。", 0],
["強心配糖体は、低カリウム血症を起こす利尿薬との併用により、ジギタリス中毒が増強される", 0, "問題文の通り。", 0],
["リシノプリルは、アンジオテンシンⅡの分解を阻害して、心筋のリモデリングを抑制する", 1, "リシノプリルはACE阻害薬であり、アンジオテンシンⅡの生成を阻害することで心筋リモデリングを抑制する。また、血管を拡張させ心負荷を軽減する。", 0],
["心不全患者で、「座っていれば問題無いが、少し散歩するだけでも息切れがする」という症状の重症度は、NYHA機能分類はⅢ度（中等度～重症）にあたる", 0, "問題文の通り。Ⅰ度は「身体活動では症状無し」、Ⅱ度は「普通の身体活動で、疲労、呼吸困難などが出現し、通常の身体活動がある程度制限される」、Ⅲ度は「普通以下の身体活動で、愁訴出現し、通常の身体活動が高度に制限される」、Ⅳ度は、「安静時にも呼吸困難を示す」", 0]],

/* 虚血性心疾患 */
[["ニトログリセリンは、静脈血管を拡張して静脈還流量を増大させ、心臓の前負荷を軽減する", 1, "静脈還流量を減少させるため、前負荷を軽減する。", 0],
["ニトログリセリンは、冠動脈の太い部分を強く弛緩させる", 0, "ニトログリセリンは、より太い血管に対する拡張作用が強い。", 0],
["ニトログリセリンは、静脈拡張作用は弱い", 1, "静脈拡張作用は強い。", 0],
["ニコランジルは、NO供与体としての作用とKチャネル開口作用を有する", 0, "問題文の通り。", 0],
["急性心筋梗塞では、心電図上ＳＴ波に異常が現れ、臨床検査では血清クレアチンキナーゼ値が上昇する。", 0, "問題文の通り。", 0],
["アテノロールは、心拍数と心収縮力を減少させることで、心筋の酸素消費量を低下させる", 0, "問題文の通り。アテノロールはβ1遮断薬であり、心負荷を軽減させる。", 0]],

/* 抗菌薬 */
[["ベンジルペニシリンは、N-アセチルグルコサミンにペンタペプチドを結合させるトランスペプチダーゼを阻害する", 1, "N-アセチルムラミン酸に結合しているペプチド鎖にペンタぺプチドを結合させるトランスペプチダーゼ活性を阻害する。",0],
["一般に、第一世代より第二世代、第二世代より第三世代のセフェム系抗菌薬の方が、グラム陰性桿菌に対する抗菌力は低下している", 1, "世代が進むほど強力になる。",0],
["ラタモキセフは、注射剤として使用され、βラクタマーゼに極めて安定である。", 0, "問題文の通り。なお、ラタモキセフは第三世代セフェム系抗菌薬である。",0],
["βラクタム環を開裂するセファロスポリナーゼを産生する細菌は、セファレキシンに対する耐性を示す。", 0, "セファレキシンは、第一世代セフェム系抗菌薬であり、βラクタマーゼのうちセファロスポリナーゼにより分解される。",0],
["スルバクタムは緑膿菌に対して強い抗菌活性を示すが、セファロスポリナーゼにより容易に分解される", 1, "スルバクタムは、それ自身の抗菌活性は極めて弱い、βラクタマーゼ阻害薬である。",0],
["セフメタゾールは、ジスルフィラム様作用を有するので、投与期間中に飲酒すると血中アセトアルデヒド濃度が上昇しやすくなる。", 0, "問題文の通り。なお、第三世代セフェム系のセフォペラゾン、セフメノキシム、ラモタキセフも、セフメタゾールと同様の構造を有しているためジスルフィラム様作用を有する。",0],
["注射用イミペネムは、腎での代謝・不活化を防ぐためにシラスタチンを含む。", 0, "問題文の通り。シラスタチンは、デヒドロペプチダーゼ-1を阻害してイミペネムの腎での代謝・不活化を防ぐ",0],
["バンコマイシンは消化管から吸収されやすいため、腸管内感染には適用されない", 1, "吸収されないため腸管内感染に有効である。",0],
["テイコプラニンは、細菌の細胞壁合成阻害作用を有するが、MRSAに対する抗菌力はない。", 1, "細胞壁合成阻害作用により抗菌作用を示し、MRSAにも有効である。",0],
["メロペネムは、腎尿細管に存在するデヒドロペプチダーゼ1により分解され、腎毒性を引き起こす。", 1, "メロペネムはカルバペネム系のなかでもデヒドロペプチダーゼ1に対して安定であり、分解物による腎毒性は起こりにくい。",0],
["バンコマイシンは、細胞壁合成を阻害する", 0, "細胞壁合成の前駆体(D-Ala-D-Ala)と結合することで細胞壁合成を阻害する。", 0],
["ホスホマイシンは、トランスペプチダーゼを阻害し、細胞壁合成を阻害する", 1, "細胞壁ペプチドグリカン合成初期段階のUDPサイクルを阻害する。",0],
["ストレプトマイシンは、細胞壁合成に関わるトランスペプチダーゼと結合して、細菌の増殖を抑制する。", 1, "リボソームの30Sサブユニットに結合することでタンパク質合成を阻害する。",0],
["エリスロマイシンは、30Sリボソームに結合して、アミノアシルtRNAの転移を阻害する。", 1, "50Sサブユニットと結合することでペプチド鎖の伸長を阻害し、タンパク質合成を抑制する。",0],
["クラリスロマイシンは、リボソームの50Sサブユニットと結合し、タンパク質合成を阻害する。", 0, "問題文の通り。",0],
["テトラサイクリンは、30Sリボソームに結合して、アミノアシルtRNAがmRNA・30Sリボソーム複合体に結合するのを阻害する。", 0, "問題文の通り。",0],
["レボフロキサシンは、細菌のDNAジャイレースを阻害し、幅広い抗菌スペクトルを示す。", 0, "問題文の通り。抗菌スペクトルは広範囲であり、グラム陽性菌、グラム陰性菌、マイコプラズマ、クラミジアに有効である。",0],
["リンコマイシンは、DNA依存性RNAポリメラーゼを阻害することで細菌のDNA複製を阻害する。", 1, "50Sリボソームに結合し、ペプチド転移酵素反応を抑制することでタンパク質合成を阻害する。",0],
["スルファメトキサゾールは、パラアミノ安息香酸と競合的に拮抗することで葉酸の生合成を阻害する。", 0, "問題文の通り。葉酸合成過程に必要なパラアミノ安息香酸(PABA)と競合的に拮抗し、ジヒドロプテロイン酸合成酵素を阻害して活性型葉酸の生合成を阻害する。",0],
["ノルフロキサシンは、DNAジャイレースを阻害することで細菌のDNA複製を抑制する。", 0, "問題文の通り。",0]],

/* 降圧薬 */
[
["アムロジピンは、ジヒドロピリジン系Caイオンチャネル遮断薬であり、作用持続は短い。", 1, "作用発現が穏やかで持続時間が長く、反射性頻脈を起こしにくい。", 0],
["シルニジピンは、L型Caイオンチャネル遮断作用を示すとともに、交感神経終末に存在するN型Caイオンチャネル遮断作用も有するため、反射性頻脈を起こしにくい。", 0, "問題の通り。N型Caイオンチャネル遮断によりノルアドレナリンの遊離が抑制されるため。", 0],
["エナラプリルは、アンジオテンシンⅡおよびブラジキニンの生成を抑制する", 1, "ブラジキニンの「分解」を抑制する。", 0],
["ロサルタンは、アンジオテンシンⅡ AT1受容体遮断薬であり、アンジオテンシンⅡによる血管収縮やアルドステロン分泌を抑制する。", 0, "問題文の通り。", 0],
["アリスキレンは、血中のアンジオテンシノーゲンからアンジオテンシンⅠへの変換反応を阻害し、副作用として高カリウム血症を起こす。", 0, "問題文の通り。", 0],
["カンデサルタン シレキセチルは、その活性代謝物がアンジオテンシンⅡ AT2受容体を選択的に遮断し、副腎皮質からのアルドステロンの遊離を抑制する。", 1, "AT1受容体を選択的に遮断する。", 0],
["イミダプリルは、加水分解を受けてイミダプリラートへと変換され、ブラジキニンの生成を抑制する。", 1, "ブラジキニンの「分解」を抑制する。", 0],
["レニン阻害薬は、血中のアンジオテンシンⅠとアンジオテンシンⅡの量を減少させる。", 0, "問題文の通り。", 0],
["レニン阻害薬は、血中のブラジキニン量を増加させる。", 1, "ブラジキニン量には影響しない。", 0],
["アドレナリンβ1受容体遮断薬は、レニン分泌量を減少させる。", 0, "問題文の通り。", 0],
["ジルチアゼムは、房室結節のL型Caイオンチャネルを遮断する。", 0, "洞房結節や房室結節、血管平滑筋のL型Caイオンチャネルを遮断する。", 0],
["アムロジピンは、心筋のL型Caイオンチャネルを遮断するが、血管平滑筋のL型Caイオンチャネルは遮断しない。", 1, "本薬は血管選択性であり、心筋への作用は弱い。", 0]],

/* 抗結核薬 */
[
["リファンピシンは、DNA依存性RNAポリメラーゼを阻害し、RNA合成を抑制する。", 0, "問題文の通り。"],
["イソニアジドは、リファンピシンとの併用により重篤な肝障害を起こすことがある。", 0, "リファンピシンの肝代謝酵素誘導作用により、イソニアジドの代謝産物である肝毒性物質の産生を促進させると考えられている。併用は可能だが、定期的に肝機能検査を行う必要がある。"],
["エタンブトール塩酸塩は、聴力低下、耳鳴などの聴力障害を起こすことが多い。", 1, "重篤な副作用として、「視力障害」が現れることがある。"],
["エタンブトールにより視力障害が起こった場合、いったん投与を中止し、視力が回復したら再開する。", 1, "エタンブトールによる視力低下は高度に進行すると、非可逆的になることがある。そのため、副作用が発現した場合には投与を中止し、再投与は控えるべきである。"],
["リファンピシンの服用で、唾液や涙液が橙赤色になることがある。", 0, "尿、便、唾液、痰、汗、涙液が、リファンピシンやその代謝物により橙赤色に着色することがある。"],
["飲み忘れなど不規則な抗結核薬の服用は、結核菌が薬剤耐性を獲得する原因となる。", 0, "直接監視下短期化学療法(DOTS)などにより、確実な治療の継続性の確保が重要である。"],
["結核は、2週間以上持続する高熱が主訴である。", 1, "2週間以上持続する咳や淡があれば肺結核を疑う"],
["結核は、肺に限定した疾患である。", 1, "血行性に全身に感染する。"],
["ツベルクリン反応検査は、Ⅰ型アレルギー反応を利用している", 1, "Ⅳ型アレルギー反応を利用している。"],
["結核の初感染経路は、飛沫による経気道感染である。", 0, "空気感染（飛沫核感染）により肺に病巣を形成する"]
]

];

var chara=[[
["img/chara/co.png", 1, "コカイン", "<p>エステル型。</p><p>コカ葉から単離された局所麻酔薬の原型。</p><p>以降、開発されたものには「-caine」のステムがつくことになった。</p><p>非イオン型で知覚神経に侵入し、イオン型に変換された後に神経の内側から Na イオンチャネルを遮断する。</p><p>アミントランスポーター阻害作用も有するため、血管収縮薬を併用しなくても作用が見込める。</p>"],
["img/chara/pro.png", 0, "プロカイン", "<p>エステル型。</p><p>pro-は他の局所麻酔薬の「先行、さきがけ」の意。現在は後継の局所麻酔薬に取って代わられ、あまり使われていない。</p><p>組織浸透性が低いため表面麻酔では使えない。</p>"],
["img/chara/benzo.png", 0, "アミノ安息香酸エチル","<p>エステル型。</p><p>化学名がそのまま一般名になっている。</p>"],
["img/chara/tetra.png", 0, "テトラカイン", "<p>エステル型。</p><p>アミノ安息香酸エチルに炭素4つ(tetra)のブチル基を付加したもの。</p>"],
["img/chara/dibu.png", 0, "ジブカイン", "<p>アミド型。</p><p>エチレンジアミンとブチル基を構造にもつため、「ジ」「ブ」と名がついた。</p><p>キナの木由来の抗マラリア薬、「キニーネ」は局所麻酔作用も持っていた。ただし副作用が強いというデメリットがあり、それを解消できるキニーネ代用薬を探す過程で、ジブカインが開発された。</p><p>開発経緯の名残として、構造にはキノリンが含まれている。</p><p>本薬はアミド型局所麻酔薬のさきがけである。</p>"],
["img/chara/lido.png", 0, "リドカイン", "<p>アミド型。</p><p>コリンエステラーゼによる分解を受けにくい。</p><p>組織浸透性が高く、表面麻酔に使用可能。</p>"],
["img/chara/mepiva.png", 0, "メピバカイン", "<p>vaは血管収縮(vaso-contriction)作用の意。</p><p>以降、血管収縮作用をあわせもった局所麻酔薬には「-vacaine」がつく。</p>"],
["img/chara/oxetha.png", 0, "オキセサゼイン", "<p>アミド型。</p><p>酸性部位でも薬効を発揮する。ガストリン遊離抑制作用による胃酸分泌抑制作用がある。</p><p>このため、胃炎などに起因する疼痛に対し経口投与で用いられる。</p>"]],

/*ここから不整脈薬*/
[["img/chara/qui.png", 1, "キニジン", "<p>Ⅰa群の抗不整脈薬。NaイオンとKイオンチャネルを遮断する。活動電位持続時間を延長する。</p><p>キナの木から採られた生薬で、キノリン骨格を持つ。右旋性（＋）のものがキニジン、左旋性（-）のものがキニーネとして区別され、後者のキニーネは抗マラリア薬として使われる。</p><p>なお、余談だが、薬害で有名なキノホルムもまた、キノリン骨格をベースにもつ抗マラリア薬である。</p>"],
["img/chara/proa.png", 0, "プロカインアミド","<p>Ⅰa群の抗不整脈薬。</p><p>プロカインの構造にアミド結合を入れ込んだもの。</p><p>時は第二次世界大戦。大日本帝国が東南アジアを占領したため、キニジンの原料であるキナの木の流通がストップした。代替品を探す米国は、研究の中でプロカインに着目し、これをベースにプロカインアミドを開発した。</p>"],
["img/chara/diso.png", 0, "ジソピラミド","<p>Ⅰa群の抗不整脈薬。</p><p>副作用に、口渇などに代表される抗コリン作用がある。</p>"],
["img/chara/cibe.png", 0, "シベンゾリン","<p>Ⅰa群の抗不整脈薬。</p><p>糖尿病治療薬のグリニド薬のように、膵臓のKイオンチャネルも遮断してしまうので、インスリン分泌が上昇、低血糖の副作用が見られる。</p>"],
["img/chara/lid_arr.png", 0, "リドカイン","<p>Ⅰb群の抗不整脈薬。</p>Naイオンチャネルを遮断する。活動電位持続時間を短縮する。</p>"],
["img/chara/apri.png", 0, "アプリンジン","<p>Ⅰb群の抗不整脈薬。</p>"],
["img/chara/mex.png", 0, "メキシレチン","<p>Ⅰb群の抗不整脈薬。</p><p>神経のNaイオンチャネルも遮断し、異常興奮を防ぐため、神経障害性疼痛にも用いられる。</p><p>リドカインに構造が似る。</p>"],
["img/chara/proph.png", 0, "プロパフェノン","<p>Ⅰc群の抗不整脈薬。</p><p>Naイオンチャネルを遮断する。活動電位持続時間には影響を及ぼさない。</p><p>β受容体遮断作用をあわせもつため、徐脈や気管支痙攣のおそれがある。</p>"],
["img/chara/pils.png", 0, "ピルシカイニド","<p>Ⅰc群の抗不整脈薬。</p><p>リドカインに類似した構造を持つ。</p>"],
["img/chara/flec.png", 0, "フレカイニド","<p>Ⅰa群の抗不整脈薬。</p><p>プロカインアミドに類似した構造を持つ。</p>"],
["img/chara/propra.png", 0, "プロプラノロール", "<p>Ⅱ群の抗不整脈薬。</p><p>β遮断薬。心拍数を下げることで頻脈性不整脈に効果を示す。</p><p>これ以外のβ遮断薬も、同じく頻脈性不整脈に用いられる。</p><p>なお、これ以降、同様な構造（アミノプロパンジオール）をもったβ遮断薬には、「-olol」がステムとしてつく。</p>"],
["img/chara/amio.png", 0, "アミオダロン", "<p>Ⅲ群の抗不整脈薬。</p><p>Kイオンチャネルを遮断する。活動電位持続時間を延長する。</p><p>そのほか、β受容体、Kチャネル、Caチャネルなども遮断する。</p><p>肺線維症や間質性肺炎などの重篤な副作用がある。</p><p>ケラ(学名：Ammi visnaga)という植物に含まれる、平滑筋弛緩作用を持つ成分「ケリン(Khelin)」を参考にして開発された。その後、基礎研究から抗不整脈作用が見出された。</p>"],
["img/chara/sota.png", 0, "ソタロール", "<p>Ⅲ群の抗不整脈薬。</p><p>Kイオンチャネルを遮断する。活動電位持続時間を延長する。</p><p>そのほか、β受容体、Caチャネルなども遮断する。</p><p>むしろ、当初はβ遮断薬として使われていた。Kイオンチャネル遮断による抗不整脈作用は、後から発見された。薬名に「-olol」がついていないのは、プロプラノロールよりも前に発見されたものだから。</p>"],
["img/chara/nife.png", 0, "ニフェカラント", "<p>Ⅲ群の抗不整脈薬。</p><p>Kイオンチャネルを遮断する。活動電位持続時間を延長する。</p>"],

["img/chara/verap.png", 0, "ベラパミル", "<p>Ⅳ群の抗不整脈薬。</p><p>洞房結節や房室結節のL型Caチャネルを遮断することで、頻脈性不整脈を改善する。</p><p>ケシ属の植物(poppy)から単離される、血管拡張・鎮痙剤「パパベリン」の誘導体。</p>"],
["img/chara/bepri.png", 0, "ベプリジル", "<p>Ⅳ群の抗不整脈薬。</p><p>洞房結節や房室結節のL型Caチャネルを遮断することで、頻脈性不整脈を改善する。</p><p>その他、Naチャネル、Kチャネルの遮断作用を示す。</p>"],

["img/chara/atro.png", 0, "アトロピン", "<p>非選択的ムスカリン性アセチルコリン受容体遮断薬。</p><p>心拍数を増加させ、徐脈の治療に用いられる。</p><p>ベラドンナという植物の根っこ（ベラドンナコン）由来。</p><p>"],
["img/chara/isop.png", 0, "イソプレナリン", "<p>β刺激薬。</p><p>β1受容体刺激による心機能を促進させる。</p><p>名前の由来は、「アドレナリン」のメチル基を「イソプロピル基」に変えた構造であることから。</p><p>Raymond P. Ahlquistは、本薬を用いた研究で、アドレナリン受容体がαとβという2種類に分けられることを発見した。</p>"]
],
/* 心不全 */
[["img/chara/digo.png", 1, "ジゴキシン・デスラノシド", "<p>ジギタリス属の植物から抽出される強心配糖体。</p><p>Na/K-ATPaseを阻害することで間接的に細胞内Ca濃度を上昇させ、心筋の収縮力を増加させる。</p>"],
["img/chara/colfo.png", 0, "コルホルシンダロパート", "<p>アデニル酸シクラーゼを直接活性化する。cAMP濃度を上昇させることで、心機能を促進する。</p><p>長い薬名だが、スペル上はColforsin Daropateとなっており、「コルホルシン」に「ダロパート」がくっついたもの、という意味である。</p><p>コルホルシンは「フォルスコリン」という、コレウス・フォルスコリという植物から単離された物質のことを指し、例えばDHCのダイエットサプリ「フォースコリー」の成分はこれである。cAMP濃度上昇によるエネルギー代謝上昇による効果がある。</p><p>これにジメチルアミノプロパン酸（略してダロパート）をつけ、水溶性誘導体にしたものがコルホルシンダロパートである。</p>"],
["img/chara/rinon.png", 0, "ミルリノン・オルプリノン", "<p>PDEⅢ阻害薬。</p><p>ミルリノン・オルプリノンは、いずれも「アムリノン」という薬剤の誘導体であるため、「リノン」が名についている。アムリノンよりも効果が増強され、副作用が低減している。</p>"],
["img/chara/buda.png", 0, "ブクラデシン", "<p>cAMP誘導体。</p><p>ブチリル基をcAMPにくっつけたものなので、butyryl + cyclic + adenosine、略してbucladesine。</p>"],
["img/chara/carpe.png", 0, "カルペリチド", "<p>心房性ナトリウム利尿ペプチド（ANP)製剤。</p><p>体内では心房から分泌され、腎臓に作用してNa排泄促進に伴う「利尿作用」と、血管平滑筋に作用する「血圧低下作用」をもつ。</p>"]
],
/* 虚血性心疾患 */
[["img/chara/nitro.png", 1, "ニトログリセリン", "<p>硝酸薬</p><p>NOを遊離し、可溶性グアニル酸シクラーゼを活性化することで、cGMPの合成を促進し、血管拡張作用が現れる。</p><p>静脈血管の拡張により、静脈還流量を減少させる。</p><p>肝初回通過効果によって薬効が消失するため、経口投与以外（舌下投与・貼付剤）で用いられる。</p><p>急激な血圧低下の可能性があるため、シルデナフィルなどのPDE Ⅴ阻害薬との併用は禁忌である。</p><p>アルフレッド・ノーベルが爆薬として実用化した。</p><p>ある時、英国の火薬工場で、休みが終わって月曜日の仕事が始まるときまって胸痛を訴える工員が何人もいることが話題になった。実は胸痛を訴えた工員はもともと狭心症であり、平日は扱っていたニトログリセリンが皮膚や粘膜から吸収され狭心症が抑えられていたものが、週末に休みを取ることで効果がなくなっていたのだった。</p>"],
["img/chara/isoso.png", 0, "硝酸イソソルビド", "<p>硝酸薬。</p><p>ソルビトールから合成したイソソルビドに硝酸を結合したもの。</p>"],
["img/chara/nicol.png", 0, "ニコランジル", "<p>硝酸薬。</p><p>ジルは、血管拡張薬(vasodilator)の「dil」。</p>"]

],

/* 抗菌薬 */
[["img/chara/PCG.png", 1, "ベンジルペニシリン", "<p>βラクタム系のうち、ペニシリン系に属する抗菌薬。トランスペプチダーゼ（PBP）を阻害し、細胞壁（ペプチドグリカン）合成を阻害する。</p><p>βラクタマーゼのうち、ペニシリナーゼにより分解される。</p><p>多剤と比較してアナフィラキシーショックを起こしやすい。</p><p>フレミングにより発見された逸話が有名だが、臨床の実用にはフローリーとチェインまで待たなければならなかった。</p><p>商品名は「ペニシリンG」だが、構造の違いでペニシリンKやペニシリンFなどのバリエーションがある。その中でも作用が強く安定性も高かったペニシリンGだけが臨床で使われている。</p>"],
["img/chara/AMPC.png", 0, "アモキシシリン", "<p>ペニシリン系。</p><p>クラリスロマイシン、プロトンポンプ阻害薬とともにピロリ菌除菌に用いられる。</p>"],
["img/chara/ABPC.png", 0, "アンピシリン", "<p>ペニシリン系。</p>"],
["img/chara/BAPC.png", 0, "バカンピシリン", "<p>ペニシリン系。アンピシリンのプロドラッグである。</p>"],
["img/chara/PIPC.png", 0, "ピペラシリン", "<p>ペニシリン系。緑膿菌にも有効。</p>"],
["img/chara/Cefalex.png", 0, "セファレキシン", "<p>βラクタム系のうち、セフェム系（第一世代）に属する。</p><p>グラム陽性菌への作用が強い。</p><p>小腸上皮細胞刷子縁膜側に存在するH/ジペプチド輸送体により吸収される。</p><p>βラクタマーゼのうち、セファロスポリナーゼにより分解される。</p>"],
["img/chara/CMZ.png", 0, "セフメタゾール", "<p>セフェム系（第二世代）。</p><p>βラクタマーゼでは分解されない。</p><p>ジスルフィラム様作用により、飲酒の際にアルデヒドの蓄積が起こりやすくなる。</p>"],
["img/chara/CFPN-PI.png", 0, "セフカペン", "<p>セフェム系（第三世代）</p><p>グラム陰性菌への作用が強い。</p><p>βラクタマーゼでは分解されない。</p>"],
["img/chara/CFDN.png", 0, "セフジニル", "<p>セフェム系（第三世代）</p><p>グラム陰性菌への作用が強い。</p><p>βラクタマーゼでは分解されない。</p><p>キレートを形成しやすいため、鉄剤などと同時に服用すると吸収率が低下する。</p>"],
["img/chara/IPM_CS.png", 0, "イミペネム・シラスタチン配合剤", "<p>βラクタム系のうち、カルバペネム系に属する。</p><p>βラクタマーゼでは分解されない。</p><p>イミペネムは腎臓のデヒドロペプチダーゼ（DHP）により代謝され腎毒性を示してしまうため、シラスタチン（DHP阻害薬）との合剤で用いられる。</p>"],
["img/chara/MEPM.png", 0, "メロペネム", "<p>カルバペネム系。</p><p>デヒドロペプチダーゼ（DHP）で分解されないため、単剤で使用可能。</p>"],
["img/chara/SBT_CVA.png", 0, "クラブラン酸、スルバクタム", "<p>βラクタマーゼ阻害薬。</p><p>単体での作用は乏しい。</p><p>クラブラン酸はアモキシシリンと（商品名オーグメンチン）、スルバクタムはアンピシリンなどと（商品名ユナシンS）の合剤である。</p>"],
["img/chara/VCM_TEIC.png", 0, "バンコマイシン、テイコプラニン", "<p>グリコペプチド系。</p><p>細胞壁合成の前駆体である、ぺプチジル-D-アラニル-D-アラニン（D-Ala-D-Ala)と結合し、細胞壁合成を阻害する。</p><p>腎障害や聴覚障害（第8脳神経障害）が特徴的な副作用である。</p><p>ヒスタミン遊離によるレッドネック症候群の予防のため、点滴は時間をかけて行われる。（バンコマイシンは60分以上、テイコプラニンは30分以上）</p><p>バンコマイシンの経口薬（散剤）は、吸収されないため、消化管管腔の殺菌に用いられる。</p>"],
["img/chara/FOM.png", 0, "ホスホマイシン", "<p>ホスホマイシン系。</p><p>細胞壁合成初期段階におけるUDPサイクルを阻害し、細胞壁合成を阻害する。</p>"],
["img/chara/DAP.png", 0, "ダプトマイシン", "<p>環状リポペプチド系。</p><p>菌の細胞膜と結合し、脱分極させ、カリウムを流出させることで膜電位を消失させる。</p><p>バンコマイシンやリネゾリドに耐性を持つMRSAにも用いられる。</p>"],
["img/chara/SM.png", 0, "ストレプトマイシン", "<p>アミノグリコシド系。</p><p>細菌リボソームの30Sサブユニットに結合し、タンパク質合成を阻害する。</p><p>腎障害、聴覚障害（第8脳神経障害）の副作用がある。</p><p>薬効は濃度依存的であるため、一回の投与量を大きくした方が作用は強い。</p>"],
["img/chara/KM.png", 0, "カナマイシン", "<p>アミノグリコシド系。</p><p>経口投与ではほとんど吸収されないため、肝性脳症に対して消化管腔内のアンモニア酸性菌の殺菌を目的に用いられる。</p>"],
["img/chara/GM.png", 0, "ゲンタマイシン", "<p>アミノグリコシド系。</p><p>基原である放線菌Micromonospora purpureaは、紫色をしている。その色は、ゲンチアナバイオレットという色素の色に近い。そのためGentamicinという名になっている。</p>"],
["img/chara/AMK.png", 0, "アミカシン", "<p>アミノグリコシド系。</p><p>カナマイシンの誘導体のため、「-kasin」という語尾になっている。</p>"],
["img/chara/ABK.png", 0, "アルベカシン", "<p>アミノグリコシド系。</p><p>カナマイシンの誘導体のため、「-kasin」という語尾になっている。</p><p>MRSAに対しても用いられる。</p>"],
["img/chara/chloram.png", 0, "クロラムフェニコール", "<p>クロラムフェニコール系。</p><p>50Sサブユニットに結合し、タンパク質合成を阻害する。新生児、未熟児に投与すると、灰白症候群の副作用が起こる。</p>"],
["img/chara/EM_CAM_AZM.png", 0, "エリスロマイシン、クラリスロマイシン、アジスロマイシン", "<p>マクロライド系。</p><p>大きな(Macro)ラクトン環(-olide)構造をもつため、マクロライドという。</p><p>50Sサブユニットに結合し、タンパク質合成を阻害する。</p><p>クラリスロマイシンは、アモキシシリン、プロトンポンプ阻害薬とともにピロリ菌の除菌に用いられる。</p><p>クラリスロマイシンやエリスロマイシンはCYP3A4の阻害作用をもつ。</p><p>一方でアジスロマイシンは阻害作用を持たず、副作用の発現頻度も低い。</p><p>また、アジスロマイシンは作用が持続する（3日間の内服で作用が1週間続く）</p>"],
["img/chara/TetraCycline.png", 0, "テトラサイクリン、ミノサイクリン", "<p>テトラサイクリン系。</p><p>細菌リボソームの30Sサブユニットに結合し、タンパク質合成を阻害する。</p><p>キレートを形成しやすいため、鉄剤などと同時に服用すると吸収率が低下する。</p><p>抗菌スペクトルが幅広く、クラミジア、マイコプラズマ、リケッチアにも作用を発揮する。</p>"],
["img/chara/linco.png", 0, "リンコマイシン、クリンダマイシン", "<p>リンコマイシン系。</p><p>50Sサブユニットに結合し、タンパク質合成を阻害する。</p>"],
["img/chara/LZD_TZD.png", 0, "リネゾリド、テジゾリド", "<p>オキサゾリジノン系。</p><p>50Sサブユニットに結合し、70S開始複合体の形成を妨げ、タンパク質合成を阻害する。</p><p>いずれもMRSAに作用を示すが、リネゾリドは、VREにも使用可能である。</p><p>テジゾリドは、主に硫酸抱合で代謝され、腎代謝をあまり受けない。</p>"],
["img/chara/Sulfonamide.png", 0, "スルファメトキサゾール", "<p>サルファ剤</p><p>葉酸の前駆物質であるパラアミノ安息香酸(PABA)と構造が似ており、競合的に拮抗することで葉酸合成を阻害する。</p><p>ジヒドロ葉酸還元酵素阻害薬であるトリメトプリムとの合剤（商品名バクタ）は、ニューモシスチス肺炎にも用いられる。</p>"],
["img/chara/Quinolone.png", 0, "レボフロキサシン、ノルフロキサシン、シプロフロキサシン", "<p>ニューキノロン系。</p><p>DNAジャイレースを阻害して、DNA合成を阻害する。</p><p>キレートを形成しやすいため、鉄剤などと同時に服用すると吸収率が低下する。</p><p>NSAIDsとの併用で抗GABA作用による痙攣が起こることがある。</p><p>妊婦への投与は禁忌である。</p>"]],

/* 降圧薬 */
[
["img/chara/dilti.png", 1, "ジルチアゼム", "<p>狭心症に用いられるCa拮抗薬。</p>血管平滑筋や心筋のL型Caチャネルを遮断することで、血管拡張作用、新機能抑制作用を示す。</p><p>冠血管拡張により心筋への酸素供給を増大させ、心機能抑制により酸素消費を抑制する。</p>"],
["img/chara/nifedi.png", 0, "ニフェジピン", "<p>Ca拮抗薬。</p><p>血管選択的にL型Caチャネルを遮断し、血管拡張作用を示す。</p><p>反射性頻脈を起こすことがある。</p><p>CYP3A4にて代謝される。グレープフルーツジュースによって薬効が増強される。</p><p>ケラと呼ばれるセリ科の薬草には、平滑筋弛緩作用があることが古くから知られてきた。本薬は、そのケラの果実から単離された成分、ケリン(Khelin)の作用に着目したものである。</p><p>なお、探索研究の途上では、ニフェジピンだけでなく、アミオダロンなども生まれた。</p>"],
["img/chara/amlo.png", 0, "アムロジピン", "<p>Ca拮抗薬。</p><p>作用持続時間が長く、効果の現れ方も緩徐なため、反射性頻脈は起こりにくい。</p>"],
["img/chara/Cilni.png", 0, "シルニジピン", "<p>Ca拮抗薬。</p><p>L型だけでなくN型Caチャネルも遮断し、ノルアドレナリン遊離を抑制するため、反射性頻脈は起こしにくい。</p>"],
["img/chara/capto.png", 0, "カプトプリル", "<p>ACE阻害薬。</p><p>代謝活性化され、アンジオテンシン変換酵素を阻害する。</p><p>アンジオテンシンⅡによる血管収縮やアルドステロン分泌を抑制する。</p><p>ブラジキニンの分解も抑制するため、空咳の副作用がある。</p><p>1949年、血中にヘビ毒が入ると、血圧低下と腸管の収縮を引き起こす物質が産生されることが発見され、「ブラジキニン」と名付けられた（これは、ギリシャ語の「遅い brady」と「運動 kinin」をつなぎ合わせたものである）。</p><p>ブラジキニンは、循環調整、血管拡張・浮腫、炎症、痛みに作用を及ぼしている。</p><p>1965年、ハララカという毒ヘビ(Bothrops jararaca)の毒中に、ブラジキニンの作用を増強するペプチドが発見された。さらに、この物質がアンジオテンシンⅠからアンジオテンシンⅡ産生への変換を抑制することも分かった。</p><p>研究の末、-Phe-Ala-Proという配列がACEの基質になることがわかったため、このトリペプチドをベースに、ACE阻害薬の開発がすすめられた。</p><p>ACEの活性中心には亜鉛イオンが存在するが、これと結合しやすいようにメルカプト基を導入したのが本薬である。</p>"],
["img/chara/enala.png", 0, "エナラプリル", "<p>ACE阻害薬。</p><p>代謝活性化されて「エナラプリラート」となり、アンジオテンシン変換酵素を阻害する。</p><p>カプトプリルのメルカプト基は反応性が高く、問題点が多くあったため、そのもとになったトリペプチドの誘導体を改めて探索する戦略がとられた。</p><p>その結果、エナラプリラートが選ばれたが、これは消化管から吸収されないため、エステル化して吸収できるようにしたのがエナラプリルである。後続のACE阻害薬の構造も同様である。</p><p>エナラプリルは体内で加水分解されエナラプリラートになる。</p>"],
["img/chara/imida.png", 0, "イミダプリル", "<p>ACE阻害薬。</p><p>代謝活性化されて「イミダプリラート」となり、アンジオテンシン変換酵素を阻害する。</p><p>腎保護作用があり、1型糖尿病に伴う腎症にも用いられる。</p>"],
["img/chara/Lo.png", 0, "ロサルタン", "<p>アンジオテンシンⅡ AT1受容体遮断薬。ARB。</p><p>血管収縮やアルドステロン分泌を抑制する。</p><p>輸出細動脈の拡張により糸球体内圧を低下させるため、腎保護作用を示す。2型糖尿病に伴う腎症にも用いられる。</p><p>サルタンという名前は、選択的アンジオテンシンⅡ受容体拮抗薬(Selective Angiotensin RecepTor ANtagonist)から。</p>"],
["img/chara/Telmi.png", 0, "テルミサルタン", "<p>アンジオテンシンⅡ AT1受容体遮断薬。ARB。</p><p>空腹時投与に比べ、食後投与では血中濃度が低下する。</p>"],
["img/chara/Alis.png", 0, "アリスキレン", "<p>レニン阻害薬。</p><p>RAA系を抑制し、アンジオテンシンの産生を抑制、降圧作用を示す。</p><p>キレンという名前は、腎臓Kidney + レニンRenin + 阻害薬 Inhibitorから。</p>"]
],
/* 抗結核薬 */
[
["img/chara/rifa.png" , 1 ,"リファンピシン", "<p>結核菌のDNA依存性RNAポリメラーゼを阻害し、RNA合成を阻害する。</p><p>CYP3A4やP-gpを誘導する。</p><p>開発者は、フランスの映画「Rififi」（Du rififi chez les homme）のファンだった。ちなみに本作品は、1955年にカンヌ国際映画祭で監督賞を受賞した名作である。</p><p>研究段階から本薬をrififiというニックネームで呼んでいたのが、そのまま、rifampicinの命名につながった。</p>"],
["img/chara/Ison_Pyraz.png" , 0 ,"イソニアジド、ピラジナミド", "<p>イソニアジド：結核菌の細胞壁成分であるミコール酸の合成を阻害する。</p><p>NAT2によるアセチル化で不活化されるが、日本人の10%、白人の50%はNAT2の働きが遅く（slow acetylator)、副作用の末梢神経障害を起こしやすい。</p><p>MAO阻害作用があるため当初は抗うつ薬として開発されていた。</p><p>安価なため世界中で使用されているが、結核菌はイソニアジドに対する耐性を獲得しやすい。</p><p>ピラジナミド：イソニアジドの耐性獲得を遅らせるとともに、作用を増強させる。</p>"],
["img/chara/Etham.png" , 0 ,"エタンブトール", "<p>結核菌の核酸合成を阻害し、細胞分裂を抑制する。</p><p>視力障害の副作用がある。</p>"]
]


];

edu_unit = 0; //0:局所麻酔、1:不整脈

quiz_num = 0;//現在解いている問題。
quiz_monme_num = 0; //今、何問目？
answering_phase = 0; //0->まる、ばつ、とばし 1 -> つぎのもんだいへ
seikaisu = 0;

chara_num= 0;
chara_get=[0,0];

home_tachie = [0,0];

save_sinsu = 
["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
"u", "v", "w", "x", "y", "z", "A", "B", "C", "D", 
"E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", 
"Y", "Z", "!", "?"];

//=========================================================
function save_make(){
	var unit_length = 0;
	var ans = "";
	var if_ryaku = true;
	
	for(var i = 0; i < quiz.length; i++){
		var ans_temp = "";
		
		if((quiz[i].length / 6) != Math.floor(quiz[i].length / 6)){
			unit_length = Math.floor(quiz[i].length / 6) + 1;
		}else{
			unit_length = Math.floor(quiz[i].length / 6);
		}
		
		for(var j = 0; j< unit_length; j++){
			var num_temp = 0;
			
			for(var k = 0; k<=5; k++){
				if((j*6)+k >= quiz[i].length){
					break;
				}else if(quiz[i][(j*6)+k][3] != 0){
					num_temp += Math.pow(2,k);
				}
			}
			
			if(num_temp != 0){
				if_ryaku = false;
			}
			
			ans_temp += save_sinsu[num_temp];
		}
		if(!if_ryaku){
			ans += ans_temp;
		}
		
		if_ryaku = true;
		ans += ":";
	}

	ans += "&";
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	
	unit_length = 0;
	if_ryaku = true;
	
	for(var i = 0; i < chara.length; i++){
		var num_temp = chara[i].length-1;
		for(var j=0; j< chara[i].length; j++){
			if(chara[i][j][1] != 1){
				num_temp = j-1;
				break;
			}
		}
		ans += (save_sinsu[num_temp] + ":");
	}

	document.getElementById("save_write").innerHTML = ans;
				
}

//======================================================
function mysaveindexOf(n){
	return(save_sinsu.indexOf(n));
}
//======================================================

function change64to2(n){
	var ans = [0,0,0,0,0,0];
	
	var sin64 = n;
	
	for(var i=0; i<6; i++){
		if(sin64 == 1){
			ans[i] = 1;
			break;
		}else if(sin64 % 2 == 1){
			ans[i] = 1;
		}
		sin64 = Math.floor(sin64/2);
	}
	
	return(ans);
}
	
//======================================================
	
function save_load(){
	var str = prompt("セーブデータを入力してください。");
	
	try {
		var kugiri = str.indexOf("&");
		var quiz_save = str.substr(0, kugiri);
		var chara_save = str.substr(kugiri+1);
		
		console.log(quiz_save);
		console.log(chara_save);
		
		var quiz_save_unit_arr = quiz_save.split(":");
		var chara_save_unit_arr = chara_save.split(":");
		
		
		for(var i=0; i<quiz_save_unit_arr.length-1; i++){
			var quiz_save_arr = quiz_save_unit_arr[i].split("");
			
			if(quiz_save_arr.length == 0){
				//alert("記帳無し:" + i);
				for(var j=0; j< quiz[i] .length; j++){
					quiz[i][j][3]=0;
				}
			}else{			
				for(var j=0; j<quiz_save_arr.length;j++){
					var temp_arr = change64to2(mysaveindexOf(quiz_save_arr[j]));
					for(var k=0; k<6;k++){
						if((j*6)+k < quiz[i].length){
							quiz[i][(j*6)+k][3] = temp_arr[k];
						}else{
							break;
						}
					}
				}		
			}
		}
		
		
		for(var i=0; i< chara_save_unit_arr.length-1; i++){
			var kakutokukokomade = mysaveindexOf(chara_save_unit_arr[i]);
			for(var j=0; j<chara[i].length; j++){
				if(j <= kakutokukokomade){
					chara[i][j][1] = 1;
				}else{
					chara[i][j][1] = 0;
				}
			}
		}
		
		alert("ロードが完了しました");
		change_ran(2);
		
	} catch (error) {
		alert("すみませんが、よくわかりませんでした。");
	}
}
//======================================================
function bookmarking(){
	var img_bookmark = document.getElementById("bookmark");
	var temp_bookmarked="img/bookmarked.png";
	var temp_non_bookmark="img/non-bookmark.png";
	
	if(quiz[edu_unit][quiz_num][3] == 0){
		img_bookmark.src= temp_bookmarked;
		quiz[edu_unit][quiz_num][3]=1;
	}else{
		img_bookmark.src= temp_non_bookmark;
		quiz[edu_unit][quiz_num][3]=0;
	}		
}
//======================================================
function change_edu_unit(n){
	var body = document.getElementById("mybody");
	
	switch(n){
		case "0":
			body.className = "cain_body";
			break;
		case "1":
			body.className = "arr_body";
			break;
		case "2":	
			body.className = "hf_body";
			break;
		case "3":	
			body.className = "isc_body";
			break;
		
		case "5":	
			body.className = "hypet_body";
			break;	
			
		case "4":	
			body.className = "bact_body";
			break;
		
		case "6":	
			body.className = "tb_body";
			break;
		
			/*----------------------------*/
		default:
			alert("エラー単元選択");
			break;
	}
		
	edu_unit = parseInt(n);
	quiz_num = 0;
	chara_num = 0;
	
	change_ran(2);
}

//======================================================
function change_mondai(n){
  quiz_num = parseInt(n)-1;
  quiz_init();
}

//======================================================
function change_chara(n){
  change_img(parseInt(n)-1);
}

//======================================================
/*function change_home_chara(){
	var next_chara_num = home_tachie[edu_unit] + 1;
	
	var img_home_tachie = document.getElementById("home_tachie")
	var div_serifu = document.getElementById("serifu");

	if(next_chara_num < chara[edu_unit].length){
		if(chara[edu_unit][next_chara_num][1] == 1){	//次のキャラクターを表示する
		}else{
			next_chara_num = 0;//キャラ配列の最後尾に来たら、もしくは次のキャラクターを持っていないなら、最初のキャラクターに戻って表示する。
		}
	}else{
			next_chara_num = 0;
	}
	
	img_home_tachie.src = chara[edu_unit][next_chara_num][0];
	home_tachie[edu_unit] = next_chara_num;
	div_serifu.innerHTML =chara[edu_unit][next_chara_num][2];
} */

function mondai_select_add(){
  mondai_select = document.getElementById("mondai_select");
  select_length = mondai_select.options.length;
  if(mondai_select.options.length != quiz[edu_unit].length){
    
    for(var i=0; i<select_length; i++){
      mondai_select.options.remove(0);
    }
  
    for(var j=0; j<quiz[edu_unit].length; j++){
      var temp_option = document.createElement("option");
      temp_option.value = j+1;
      temp_option.text = j+1;
      mondai_select.add(temp_option, null);
    }
  }
  mondai_select.options[quiz_num].selected = true;
}

//======================================================
function chara_select_add(){
  chara_select = document.getElementById("chara_select");
  select_length = chara_select.options.length;
  if(chara_select.options.length != chara[edu_unit].length){
    
    for(var i=0; i<select_length; i++){
      chara_select.options.remove(0);
    }
    
    for(var j=0; j<chara[edu_unit].length; j++){
      var temp_option = document.createElement("option");
      temp_option.value = j+1;
      temp_option.text = j+1;
      chara_select.add(temp_option, null);
    }
  }
  
  chara_select.options[chara_num].selected = true;
}
//======================================================
function change_img(n){
var src_temp = "img/chara/chara0.png";
var nam_temp = "?";
var expl_temp = "?";

var left_btn = document.getElementById("left_btn");
var right_btn = document.getElementById("right_btn");

left_btn.src = "img/left.png";
right_btn.src = "img/right.png";

  if((n >= 0) && (n < chara[edu_unit].length)){
    chara_num = n;
    
    if(chara[edu_unit][chara_num][1] == 1){
      src_temp = chara[edu_unit][chara_num][0];
      nam_temp = chara[edu_unit][chara_num][2];
      expl_temp = chara[edu_unit][chara_num][3];
    }
    
    nam_temp = (n + 1) + "/" + chara[edu_unit].length + "  " + nam_temp;
    
    document.getElementById("tachie").src = src_temp;
    document.getElementById("drug_nam").innerHTML = nam_temp;
    document.getElementById("drug_expl").innerHTML = expl_temp;
  }
	
	if(n <= 0){
		left_btn.src = "img/left_not_active.png";
	}else if(n >= chara[edu_unit].length - 1){
		right_btn.src = "img/right_not_active.png";
	}
  
  chara_select_add();
}
//======================================================
function answering(n){

  var hyouka = "<p>";
  
  switch(n){
    case 2:
      quiz_num++;
      quiz_monme_num++;
      if(quiz_num >= quiz[edu_unit].length){
        quiz_num = 0;
      }
      answering_phase = 0;
      quiz_show();
      break;
    
    case 0:
    case 1:
    document.getElementById("maru").src = "img/maru_not_active.png";
    document.getElementById("batu").src = "img/batu_not_active.png";
    
      if(n == 0){
        hyouka += "〇 → ";
      }else{
        hyouka += "× → ";
      }
        
      if(answering_phase == 0){
        if(quiz[edu_unit][quiz_num][1] == n){
          hyouka += "正解！";
          seikaisu++;
        }else{
          hyouka += "不正解…";
        }
        
        hyouka += "</p><p>" + quiz[edu_unit][quiz_num][2] + "</p>";
        document.getElementById("mondai").innerHTML += hyouka;
      }
      answering_phase = 1;
      break;
   
  default:
    alert("エラー");
    break;
  }
}

//======================================================
function quiz_init(){
  quiz_monme_num = 0;
  seikaisu = 0;
  quiz_show();
}

//======================================================
function quiz_restart(){
  quiz_monme_num = 0;
	seikaisu = 0;
	
	quiz_num -= 3;
	if(quiz_num < 0){
		quiz_num += quiz[edu_unit].length;
	}
	
  quiz_show();
}
//======================================================
function quiz_show(){  
	var img_bookmark = document.getElementById("bookmark");
	var mondai = document.getElementById("mondai");
  var maru = document.getElementById("maru");
  var batu = document.getElementById("batu");
  var next_question = document.getElementById("next_question");
  var mondai_select_label = document.getElementById("mondai_select_label");
  var mondai_select = document.getElementById("mondai_select");
  
  img_bookmark.style.display = "inline";
  maru.src = "img/maru.png";
  batu.src = "img/batu.png";
  
  maru.style.display = "inline";
  batu.style.display = "inline";
  next_question.style.display = "inline";
  
  mondai_select.style.display = "inline-block";
  mondai_select_label.style.display = "inline-block";
  
  
  mondai_select_add();
  
  /* var q1 = document.getElementById("q1"); 
  var q2 = document.getElementById("q2"); 
  var q3 = document.getElementById("q3");  */
  /* var result = document.getElementById("result");  */
  
  /* q1.src = "img/q_not_active.png";
  q2.src = "img/q_not_active.png";
  q3.src = "img/q_not_active.png";
  result.src = "img/result_not_active.png"; */
  
	//---
  var mondaibun = '<p><span class="caption_span">第' + (quiz_monme_num + 1) + '問</span></p>' + quiz[edu_unit][quiz_num][0]; ;
  /* (問題番号：' + (quiz_num + 1) + ")</span></p>" + quiz[edu_unit][quiz_num][0]; */
  mondai.innerHTML = mondaibun;
	
	//---
	
  mondai.className="mondai";
	
	if(quiz[edu_unit][quiz_num][3] == 0){
		img_bookmark.src="img/non-bookmark.png";
	}else{
		img_bookmark.src="img/bookmarked.png";
	}

  /* switch(quiz_monme_num){
    case 3: */
      /* result.src = "img/result_normal.png" */
		if(quiz_monme_num == 3){	
      img_bookmark.style.display = "none";
      maru.style.display = "none";
      batu.style.display = "none";
      next_question.style.display = "none";
			
      mondai_select_label.style.display = "none";
      mondai_select.style.display = "none";
			
      mondaibun = "<h1>結果は…</h1><p>" + seikaisu + "/3問正解</p>" + 
									'<p><button onclick="quiz_restart()">もう一回やる</button><button onclick="quiz_init()">次の問題セットに進む</button></p>';
      
			var ifComplete = true;
			for(var i=0; i< chara[edu_unit].length; i++){
				if(chara[edu_unit][i][1] == 0){
					ifComplete = false;
					chara[edu_unit][i][1] = 1;
					mondaibun += "<p>新しくギャラリーに追加されました (" + chara[edu_unit][i][2] + ")</p>";
					break;
				}
			}
			if(ifComplete){
				mondaibun += "<p>コンプリート！</p>";
			}
			      
     mondai.innerHTML = mondaibun;
     mondai.className="mondai mondai_result";
		}
    
    /* case 2:
      q3.src = "img/q_normal.png";
    case 1:
      q2.src = "img/q_normal.png";
    case 0:
      q1.src = "img/q_normal.png";
      break; */
		/* 
		default:
			alert("エラー。現在の回答フェーズ：" + quiz_monme_num);
			break;
  } */
  
}
//======================================================
function change_ran(rannum){
  chara_num = 0;
  
  switch(rannum){
    case 1:
    document.getElementById("home").style.display="none";
    document.getElementById("gallery").style.display="block";
    document.getElementById("quiz").style.display="none";
    document.getElementById("setting").style.display="none";
    change_img(0);
    break;
    
    case 2:
    document.getElementById("home").style.display="block";
    document.getElementById("gallery").style.display="none";
    document.getElementById("quiz").style.display="none";
    document.getElementById("setting").style.display="none";
		//change_home_chara();
    break;
    
    case 3:
    document.getElementById("home").style.display="none";
    document.getElementById("gallery").style.display="none";
    document.getElementById("quiz").style.display="block";
    document.getElementById("setting").style.display="none";
    quiz_init();
    break;
    
 		case 4:
    document.getElementById("home").style.display="none";
    document.getElementById("gallery").style.display="none";
    document.getElementById("quiz").style.display="none";
    document.getElementById("setting").style.display="block";
		save_make();
    break;

		
    default:
      alert("エラー！");
      break;
  }
}