
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
["リシノプリルは、アンジオテンシンⅡの分解を阻害して、心筋のリモデリングを抑制する", 1, "リシノプリルはACE阻害薬であり、アンジオテンシンⅡの生成を阻害することで心筋リモデリングを抑制する。また、血管を拡張させ心負荷を軽減する。", 0],
["コルホルシンダロパートは、cAMP誘導体で、細胞内でcAMPに変換されて心筋収縮力を増強する", 1, "コルホルシンダロパートはアデニル酸シクラーゼ活性化薬である。問題文はブクラデシンに関する記述である。", 0],
["ピモベンダンは、トロポニンCのCaイオン感受性を増大させるとともに、ホスホジエステラーゼⅢを阻害して強心作用を示す", 0, "問題文の通り。", 0],
["カルペリチドは、グアニル酸シクラーゼ内臓型受容体を遮断して、前負荷および後負荷を軽減させる", 1, "カルペリチドはナトリウム利尿ペプチド（ＡＮＰ）であり、ＡＮＰのグアニル酸シクラーゼ-A（ＧＣ-Ａ）受容体を刺激する。なお、本剤は静脈拡張や尿量増加に伴う前負荷軽減作用と、動脈拡張による後負荷軽減作用を示す。", 0],
["ブクラデシンは、細胞膜通過後cAMPとなり、心筋収縮力を増強する", 0, "問題文の通り。", 0],
]];

var chara=[[
["img/chara/co.png", 1, "コカイン", "<p>エステル型。</p><p>コカ葉から単離された局所麻酔薬の原型。</p><p>以降、開発されたものには「-caine」のステムがつくことになった。</p><p>非イオン型で知覚神経に侵入し、イオン型に変換された後に神経の内側から Na イオンチャネルを遮断する。</p><p>アミントランスポーター阻害作用も有するため、血管収縮薬を併用しなくても作用が見込める。</p>"],
["img/chara/pro.png", 0, "プロカイン", "<p>エステル型。</p><p>pro-は他の局所麻酔薬の「先行、さきがけ」の意。現在は後継の局所麻酔薬に取って代わられ、あまり使われていない。</p><p>組織浸透性が低いため表面麻酔では使えない。</p>"],
["img/chara/benzo.png", 0, "アミノ安息香酸エチル","<p>エステル型。</p><p>化学名がそのまま一般名になっている。</p>"],
["img/chara/tetra.png", 0, "テトラカイン", "<p>エステル型。</p><p>アミノ安息香酸エチルに炭素4つ(tetra)のブチル基を付加したもの。</p>"],
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
["img/chara/amio.png", 0, "アミオダロン", "<p>Ⅲ群の抗不整脈薬。</p><p>Kイオンチャネルを遮断する。活動電位持続時間を延長する。</p><p>そのほか、β受容体、Kチャネル、Caチャネルなども遮断する。</p><p>肺線維症や間質性肺炎などの重篤な副作用がある。</p>"],
["img/chara/sota.png", 0, "ソタロール", "<p>Ⅲ群の抗不整脈薬。</p><p>Kイオンチャネルを遮断する。活動電位持続時間を延長する。</p><p>そのほか、β受容体、Caチャネルなども遮断する。</p><p>むしろ、当初はβ遮断薬として使われていた。Kイオンチャネル遮断による抗不整脈作用は、後から発見された。薬名に「-olol」がついていないのは、プロプラノロールよりも前に発見されたものだから。</p>"],
["img/chara/nife.png", 0, "ニフェカラント", "<p>Ⅲ群の抗不整脈薬。</p><p>Kイオンチャネルを遮断する。活動電位持続時間を延長する。</p>"],

["img/chara/verap.png", 0, "ベラパミル", "<p>Ⅳ群の抗不整脈薬。</p><p>洞房結節や房室結節のL型Caチャネルを遮断することで、頻脈性不整脈を改善する。</p><p>ケシ属の植物(poppy)から単離される、血管拡張・鎮痙剤「パパベリン」の誘導体。</p>"],
["img/chara/bepri.png", 0, "ベプリジル", "<p>Ⅳ群の抗不整脈薬。</p><p>洞房結節や房室結節のL型Caチャネルを遮断することで、頻脈性不整脈を改善する。</p><p>その他、Naチャネル、Caチャネルの遮断作用を示す。</p>"],

["img/chara/atro.png", 0, "アトロピン", "<p>非選択的ムスカリン性アセチルコリン受容体遮断薬。</p><p>心拍数を増加させ、徐脈の治療に用いられる。</p><p>ベラドンナという植物の根っこ（ベラドンナコン）由来。</p><p>"],
["img/chara/isop.png", 0, "イソプレナリン", "<p>β刺激薬。</p><p>β1受容体刺激による心機能を促進させる。</p><p>名前の由来は、「アドレナリン」のメチル基を「イソプロピル基」に変えた構造であることから。</p><p>Raymond P. Ahlquistは、本薬を用いた研究で、アドレナリン受容体がαとβという2種類に分けられることを発見した。</p>"]
],

[["img/chara/digo.png", 1, "ジゴキシン・デスラノシド", "<p>ジギタリス属の植物から抽出される強心配糖体。</p><p>Na/K-ATPaseを阻害することで間接的に細胞内Ca濃度を上昇させ、心筋の収縮力を増加させる。</p>"],
["img/chara/colfo.png", 0, "コルホルシンダロパート", "<p>アデニル酸シクラーゼを直接活性化する。cAMP濃度を上昇させることで、心機能を促進する。</p><p>長い薬名だが、スペル上はColforsin Daropateとなっており、「コルホルシン」に「ダロパート」がくっついたもの、という意味である。</p><p>コルホルシンは「フォルスコリン」という、コレウス・フォルスコリという植物から単離された物質のことを指し、例えばDHCのダイエットサプリ「フォースコリー」の成分はこれである。cAMP濃度上昇によるエネルギー代謝上昇による効果がある。</p><p>これにジメチルアミノプロパン酸（略してダロパート）をつけ、水溶性誘導体にしたものがコルホルシンダロパートである。</p>"],
["img/chara/rinon.png", 0, "ミルリノン・オルプリノン", "<p>PDEⅢ阻害薬。</p><p>ミルリノン・オルプリノンは、いずれも「アムリノン」という薬剤の誘導体であるため、「リノン」が名についている。アムリノンよりも効果が増強され、副作用が低減している。</p>"],
["img/chara/buda.png", 0, "ブクラデシン", "<p>cAMP誘導体。</p><p>ブチリル基をcAMPにくっつけたものなので、butyryl + cyclic + adenosine、略してbucladesine。</p>"],
["img/chara/carpe.png", 0, "カルペリチド", "<p>心房性ナトリウム利尿ペプチド（ANP)製剤。</p><p>体内では心房から分泌され、腎臓に作用してNa排泄促進に伴う「利尿作用」と、血管平滑筋に作用する「血圧低下作用」をもつ。</p>"]
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

function save_make(){
	
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
    /* document.getElementById("setting").style.display="none"; */
    change_img(0);
    break;
    
    case 2:
    document.getElementById("home").style.display="block";
    document.getElementById("gallery").style.display="none";
    document.getElementById("quiz").style.display="none";
    /* document.getElementById("setting").style.display="none"; */
		//change_home_chara();
    break;
    
    case 3:
    document.getElementById("home").style.display="none";
    document.getElementById("gallery").style.display="none";
    document.getElementById("quiz").style.display="block";
    /* document.getElementById("setting").style.display="none"; */
    quiz_init();
    break;
    
/* 		case 4:
    document.getElementById("home").style.display="none";
    document.getElementById("gallery").style.display="none";
    document.getElementById("quiz").style.display="none";
    document.getElementById("setting").style.display="block";
    break;
		 */
		
    default:
      alert("エラー！");
      break;
  }
}