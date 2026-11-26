/* Har bir so'z: [inglizcha so'z, turi, o'zbekcha ta'rif, inglizcha gap (___), gapning o'zbekcha tarjimasi]. Har bir paketda 6 ta so'z. */
const PACKS=[
{words:[
["ardent","sifat","Qizg'in, g'ayratli; kuchli ishtiyoq bilan.","The senator was an ___ supporter of the bill and spoke for two hours in its defense.","Senator qonunni qizg'in qo'llab-quvvatladi va uni ikki soat himoya qildi."],
["candid","sifat","Ochiq-oydin, to'g'ri so'zli.","Her ___ review pointed out every weakness in the plan.","Uning ochiq-oydin sharhi rejadagi har bir zaif jihatni ko'rsatdi."],
["aloof","sifat","Uzoq turuvchi, sovuqqon, odamlardan chetda.","He stayed ___ at the party, watching from the corner.","U ziyofatda chetda turib, burchakdan kuzatib o'tirdi."],
["wry","sifat","Istehzoli, quruq hazilli.","The author's ___ asides made the dull report enjoyable.","Muallifning istehzoli izohlari zerikarli hisobotni qiziqarli qildi."],
["sardonic","sifat","Achchiq kinoyali, masxara qiluvchi.","His ___ smile told us he did not believe a word of the promise.","Uning achchiq tabassumi va'daning bir og'iz so'ziga ham ishonmasligini bildirdi."],
["earnest","sifat","Jiddiy va samimiy.","The student made an ___ effort to understand the proof.","Talaba isbotni tushunish uchun jiddiy harakat qildi."]]},
{words:[
["corroborate","fe'l","Qo'shimcha dalil bilan tasdiqlash.","A second witness came forward to ___ her account.","Ikkinchi guvoh uning bayonini tasdiqlash uchun chiqdi."],
["refute","fe'l","Rad etish, xato ekanini isbotlash.","The new data ___ the earlier hypothesis.","Yangi ma'lumotlar avvalgi farazni rad etdi."],
["tenuous","sifat","Zaif, asossiz, ishonchsiz.","The link between the two events is ___ at best.","Ikki voqea orasidagi bog'liqlik eng yaxshi holda ham juda zaif."],
["cogent","sifat","Ravshan, mantiqli va ishonarli.","She made a ___ case for extending the deadline.","U muddatni uzaytirish uchun ishonarli dalil keltirdi."],
["substantiate","fe'l","Dalil bilan asoslash.","You will need records to ___ that figure.","Bu raqamni asoslash uchun sizga hujjatlar kerak bo'ladi."],
["fallacy","ot","Xato fikr yoki noto'g'ri mantiq.","It is a ___ to assume that correlation means causation.","O'zaro bog'liqlik sababiyatni bildiradi deb o'ylash xatodir."]]},
{words:[
["ephemeral","sifat","Qisqa muddatli, o'tkinchi.","The fame of a viral video is often ___.","Viral videoning mashhurligi ko'pincha qisqa umrli bo'ladi."],
["transient","sifat","Vaqtinchalik, doimiy bo'lmagan.","The town's ___ population of seasonal workers leaves each fall.","Shahardagi vaqtinchalik mavsumiy ishchilar har kuzda ketib qoladi."],
["burgeon","fe'l","Tez o'sib rivojlanmoq.","Small businesses began to ___ along the new highway.","Yangi shosse bo'ylab kichik bizneslar tez o'sa boshladi."],
["dwindle","fe'l","Asta-sekin kamayib bormoq.","Hope began to ___ as the days passed without news.","Xabarsiz kunlar o'tgani sari umid so'na boshladi."],
["nascent","sifat","Endigina paydo bo'layotgan.","The ___ movement had only a few dozen members.","Endigina shakllanayotgan harakatda atigi bir necha o'nlab a'zo bor edi."],
["obsolete","sifat","Eskirgan, endi ishlatilmaydigan.","Film cameras were nearly ___ by the early 2000s.","Plyonkali kameralar 2000-yillar boshiga kelib deyarli eskirgan edi."]]},
{words:[
["frugal","sifat","Tejamkor, pulni ehtiyot qiladigan.","Growing up poor made her ___ with every dollar.","Kambag'al o'sgani uni har bir dollarni tejashga o'rgatdi."],
["austere","sifat","Sodda, qattiqqo'l, hashamsiz.","The monk lived in an ___ cell with a single bed.","Rohib bitta to'shakli sodda xujrada yashadi."],
["lavish","sifat","Dabdabali, serhasham, saxovatli.","The wedding was a ___ affair with a hundred courses.","To'y yuz xil taomli dabdabali marosim bo'ldi."],
["ostentatious","sifat","Ko'zga tashlanuvchi, o'zini ko'rsatishga qaratilgan.","His ___ yacht was the largest in the harbor.","Uning ko'zga tashlanadigan yaxtasi portdagi eng kattasi edi."],
["prudent","sifat","Hushyor, kelajakni o'ylaydigan.","It is ___ to save part of every paycheck.","Har bir maoshning bir qismini jamg'arish aqllilikdir."],
["profuse","sifat","Mo'l, behisob.","He offered ___ apologies for arriving late.","U kechikkani uchun ko'p-ko'p uzr so'radi."]]},
{words:[
["appease","fe'l","Talabiga ko'nib tinchitmoq.","The manager tried to ___ the angry customer with a refund.","Menejer g'azablangan mijozni pulini qaytarib tinchitmoqchi bo'ldi."],
["mitigate","fe'l","Yengillashtirmoq, zararni kamaytirmoq.","Planting trees can ___ the effects of flooding.","Daraxt ekish suv toshqini oqibatlarini yengillashtirishi mumkin."],
["exacerbate","fe'l","Yomonlashtirmoq, battar qilmoq.","Skipping sleep will only ___ your headache.","Uxlamaslik faqat boshingiz og'rig'ini battar qiladi."],
["placate","fe'l","Jahlini bosmoq, tinchlantirmoq.","A kind word was enough to ___ the crying child.","Yig'layotgan bolani tinchlantirish uchun mehrli so'z yetarli bo'ldi."],
["volatile","sifat","Tez o'zgaruvchan, beqaror.","The ___ market swung sharply from one day to the next.","Beqaror bozor kundan-kunga keskin tebrandi."],
["amicable","sifat","Do'stona, nizosiz.","The two companies reached an ___ settlement.","Ikki kompaniya do'stona kelishuvga erishdi."]]},
{words:[
["erudite","sifat","Chuqur bilimli, ilmli.","The ___ professor quoted sources in four languages.","Ilmli professor to'rt tildagi manbalardan iqtibos keltirdi."],
["pedantic","sifat","Mayda qoidalarga haddan ortiq yopishuvchi.","Correcting every comma in a casual note seems ___.","Oddiy xatdagi har bir vergulni tuzatish mayda-chuydalikdek tuyuladi."],
["astute","sifat","Zukko, muhim narsani tez ilg'ovchi.","An ___ investor, she spotted the risk early.","Zukko investor sifatida u xavfni erta payqadi."],
["lucid","sifat","Ravon, tushunarli.","The guide gave a ___ explanation of a hard topic.","Qo'llanma murakkab mavzuni ravshan tushuntirdi."],
["obscure","sifat","Noaniq, yashirin, kam ma'lum.","The meaning of the poem remained ___ to most readers.","She'rning ma'nosi ko'pchilik o'quvchilarga noaniq bo'lib qoldi."],
["ambivalent","sifat","Ikkilangan, qarama-qarshi his-tuyg'uli.","She felt ___ about leaving the city she loved.","U sevgan shahridan ketish haqida ikkilanib turardi."]]},
{words:[
["laconic","sifat","Kam so'zli, qisqa va lo'nda gapiradigan.","His ___ reply, a single word, ended the discussion.","Uning bir og'iz so'zdan iborat lo'nda javobi muhokamani tugatdi."],
["meticulous","sifat","Juda sinchkov, har bir mayda narsaga e'tiborli.","The ___ editor checked every date and footnote.","Sinchkov muharrir har bir sana va izohni tekshirdi."],
["benevolent","sifat","Mehribon, yaxshilik qilishga moyil.","A ___ donor paid for the new library.","Mehribon homiy yangi kutubxona uchun pul to'ladi."],
["cynical","sifat","Shubhachi, hech kimga ishonmaydigan.","He grew ___ about politics after years of broken promises.","Yillar davomida buzilgan va'dalardan so'ng u siyosatga nisbatan shubhachi bo'lib qoldi."],
["diligent","sifat","Tirishqoq, mehnatsevar.","A ___ student, she reviewed her notes every night.","Tirishqoq talaba sifatida u har kecha konspektlarini takrorlardi."],
["gregarious","sifat","Odamlar bilan bo'lishni yoqtiradigan, xushmuomala.","The ___ host introduced himself to every guest.","Xushmuomala mezbon har bir mehmon bilan o'zi tanishdi."]]},
{words:[
["scrutinize","fe'l","Sinchiklab o'rganmoq, diqqat bilan tekshirmoq.","Auditors ___ every line of the budget.","Auditorlar byudjetning har bir satrini sinchiklab tekshiradi."],
["elucidate","fe'l","Aniqlashtirib tushuntirmoq, oydinlashtirmoq.","Can you ___ what you meant by that remark?","Bu izohingiz bilan nimani nazarda tutganingizni tushuntirib bera olasizmi?"],
["undermine","fe'l","Asta-sekin zaiflashtirmoq, ildiziga bolta urmoq.","Constant rumors can ___ trust in a team.","Tinimsiz mish-mishlar jamoaga bo'lgan ishonchni yemirishi mumkin."],
["advocate","fe'l","G'oyani ochiq qo'llab-quvvatlamoq, targ'ib qilmoq.","Doctors ___ regular exercise for a healthy heart.","Shifokorlar sog'lom yurak uchun muntazam mashq qilishni targ'ib qiladi."],
["discern","fe'l","Ajrata bilmoq, payqamoq.","It was hard to ___ a face in the dim light.","Xira yorug'likda yuzni payqash qiyin edi."],
["pervade","fe'l","Hamma joyga singib ketmoq, to'lib ketmoq.","The smell of fresh bread seemed to ___ the whole street.","Yangi non hidi butun ko'chaga singib ketganday edi."]]},
{words:[
["arbitrary","sifat","O'zboshimchalik bilan, asossiz tanlangan.","The rule seemed ___ because no one could explain it.","Qoida o'zboshimchalikdek tuyuldi, chunki uni hech kim tushuntira olmasdi."],
["pragmatic","sifat","Amaliy, natijaga qaraydigan.","She took a ___ approach and chose the cheaper option.","U amaliy yondashib, arzonroq variantni tanladi."],
["plausible","sifat","Ishonarli, haqiqatga o'xshash.","The detective found the suspect's story ___.","Tergovchi gumondorning hikoyasini ishonarli deb topdi."],
["inherent","sifat","Ajralmas, tabiatiga xos.","Risk is ___ in any new business.","Xavf har qanday yangi biznesga xosdir."],
["meager","sifat","Kam, ozg'in, yetarli bo'lmagan.","Their ___ savings barely covered one month's rent.","Ularning oz jamg'armasi zo'rg'a bir oylik ijaraga yetdi."],
["versatile","sifat","Ko'p qirrali, turli vazifaga moslasha oladigan.","A ___ actor, he played both comedies and dramas.","Ko'p qirrali aktyor sifatida u ham komediya, ham dramada o'ynadi."]]},
{words:[
["tentative","sifat","Vaqtincha, qat'iy bo'lmagan; ikkilanib qilingan.","We made ___ plans, pending the weather forecast.","Ob-havo prognozini kutib, taxminiy reja tuzdik."],
["resilient","sifat","Chidamli, qiyinchilikdan tez tiklanadigan.","Children are often more ___ than adults expect.","Bolalar ko'pincha kattalar o'ylagandan chidamliroq bo'ladi."],
["scarce","sifat","Kam uchraydigan, tanqis.","Fresh water is ___ in the desert.","Cho'lda toza suv tanqis."],
["novel","sifat","Yangi, ilgari bo'lmagan.","The team proposed a ___ solution to the old problem.","Jamoa eski muammoga mutlaqo yangi yechim taklif qildi."],
["ubiquitous","sifat","Hamma joyda uchraydigan.","Smartphones have become ___ in modern life.","Smartfonlar zamonaviy hayotda hamma joyda uchraydigan bo'ldi."],
["intricate","sifat","Murakkab, nozik naqshli.","The clock's ___ mechanism had hundreds of tiny parts.","Soatning murakkab mexanizmi yuzlab mayda qismdan iborat edi."]]}
];
PACKS.forEach((p,i)=>{p.id="p"+(i+1);p.label=(i*6+1)+"–"+(i*6+6);p.words.forEach((w,j)=>w.n=i*6+j+1)});
const MODE_NAME={match:"Juftlash",recall:"Eslash",context:"Kontekstda"};
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const reduced=()=>window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
const replay=(el,cls)=>{el.classList.remove(cls);void el.offsetWidth;el.classList.add(cls)};

let mem={};
try{mem=JSON.parse(localStorage.getItem("bright-sat-v1")||"{}")||{}}catch(e){mem={}}
const save=()=>{try{localStorage.setItem("bright-sat-v1",JSON.stringify(mem))}catch(e){}};
const lvl=w=>Math.min(3,mem[w]||0);
const credit=(w,ok)=>{if(ok){mem[w]=Math.min(3,(mem[w]||0)+1);save()}};
const packDone=p=>p.words.filter(w=>lvl(w[0])>=3).length;
const dots=n=>'<span class="dots" role="img" aria-label="3 tadan '+n+'">'+[0,1,2].map(i=>'<i class="'+(i<n?'on':'')+'"></i>').join("")+'</span>';
const getPack=id=>PACKS.find(p=>p.id===id);

let P={pack:PACKS[0].id,mode:"match"};
let selIdx=0,S=null,animIn=true;

/* ---------- mavzu (kunduzgi / tungi) ---------- */
const isDark=()=>{const t=document.documentElement.dataset.theme;return t?t==="dark":(window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches)};
const themeLabel=()=>{$("#themeBtn").textContent=isDark()?"Kunduzgi rejim":"Tungi rejim"};
try{const t=localStorage.getItem("bright-sat-theme");if(t)document.documentElement.dataset.theme=t}catch(e){}
$("#themeBtn").addEventListener("click",()=>{
  const t=isDark()?"light":"dark";document.documentElement.dataset.theme=t;
  try{localStorage.setItem("bright-sat-theme",t)}catch(e){}
  themeLabel();
});
themeLabel();

/* ---------- bosh sahifa ---------- */
function renderHome(){
  const r=$("#ranges");
  r.classList.toggle("enter",animIn);
  r.innerHTML=PACKS.map((p,i)=>'<button class="range" style="--i:'+i+'" data-i="'+i+'" aria-pressed="'+(i===selIdx)+'"><span class="num">'+p.label+'</span><span class="cnt">'+packDone(p)+'/6</span></button>').join("");
  animIn=false;
  const p=PACKS[selIdx],done=packDone(p);
  const pn=$("#panel");replay(pn,"flipx");
  pn.innerHTML='<div class="eyebrow">Tanlangan oraliq</div><h2>'+p.label+' so\'zlar</h2>'+
    '<ul class="wl">'+p.words.map(w=>'<li'+(lvl(w[0])>=3?' class="got"':'')+'>'+esc(w[0])+'</li>').join("")+'</ul>'+
    '<div class="actions"><button class="btn primary" data-go="match">'+p.label+' so\'zlarni o\'rganish</button>'+
    '<button class="btn" data-go="recall">Eslash</button><button class="btn" data-go="context">Kontekstda</button></div>'+
    '<ul class="words">'+p.words.map(w=>'<li><span><b>'+esc(w[0])+'</b><em>'+esc(w[1])+'</em></span><span class="def">'+esc(w[2])+'</span>'+dots(lvl(w[0]))+'</li>').join("")+'</ul>'+
    '<p class="meta">6 ta so\'z · 3 ta mashq rejimi · '+done+' ta o\'rganilgan</p>';
}
$("#ranges").addEventListener("click",e=>{
  const b=e.target.closest("[data-i]");if(!b)return;
  selIdx=+b.dataset.i;renderHome();
});
$("#rndBtn").addEventListener("click",()=>{
  let i;do{i=Math.floor(Math.random()*PACKS.length)}while(i===selIdx&&PACKS.length>1);
  selIdx=i;renderHome();
});
$("#panel").addEventListener("click",e=>{
  const b=e.target.closest("[data-go]");if(!b)return;
  P.pack=PACKS[selIdx].id;P.mode=b.dataset.go;S=null;location.hash="practice";
});

/* ---------- mashq ---------- */
$("#packSel").innerHTML=PACKS.map(p=>'<option value="'+p.id+'">'+p.label+' · '+esc(p.words.slice(0,3).map(w=>w[0]).join(", "))+'…</option>').join("");
$("#packSel").addEventListener("change",e=>{P.pack=e.target.value;startSession()});
$("#modeSeg").addEventListener("click",e=>{const b=e.target.closest("[data-mode]");if(!b)return;P.mode=b.dataset.mode;startSession()});
function syncControls(){
  $("#packSel").value=P.pack;
  document.querySelectorAll("#modeSeg button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.mode===P.mode));
}
function startSession(){
  const pack=getPack(P.pack);
  S={pack,words:shuffle(pack.words),i:0,score:0,answered:false,match:null};
  if(P.mode==="match")S.match={left:null,right:null,done:{},missed:{},defs:shuffle(pack.words.map(w=>w[0])),locked:false};
  syncControls();
  renderStage(true);
}
function head(total){
  const w=(S.i>0?S.i-1:0)/total*100;
  return '<div class="step"><span>'+MODE_NAME[P.mode]+' · '+S.pack.label+' so\'zlar</span><span>'+Math.min(S.i+1,total)+' / '+total+'</span></div>'+
    '<div class="prog"><i style="width:'+w+'%"></i></div>';
}
function growBar(st,total){
  requestAnimationFrame(()=>{const b=st.querySelector(".prog i");if(b)b.style.width=(S.i/total*100)+"%"});
}
function renderStage(fresh){
  const st=$("#stage");
  st.onclick=null;
  if(fresh)replay(st,"flip");
  if(P.mode==="match")return renderMatch(st);
  if(S.i>=S.words.length)return renderResult(st,S.score,S.words.length,"to'g'ri javob");
  const w=S.words[S.i],total=S.words.length;
  if(P.mode==="recall"){
    const hint=w[0][0]+" "+Array(w[0].length-1).fill("_").join(" ");
    st.innerHTML=head(total)+'<p class="q">'+esc(w[2])+'<small>'+esc(w[1])+' · '+hint+'</small></p>'+
      '<form class="recall" id="rf"><label class="field" style="flex:1 1 200px"><span style="position:absolute;left:-9999px">Javobingiz</span>'+
      '<input type="text" id="recallIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Inglizcha so\'zni yozing"></label>'+
      '<button class="btn primary" type="submit" id="chk">Tekshirish</button></form><p class="fb" id="fb" aria-live="polite"></p>';
    growBar(st,total);
    $("#recallIn").focus({preventScroll:true});
    $("#rf").addEventListener("submit",ev=>{
      ev.preventDefault();
      if(S.answered){nextQ();return}
      const v=$("#recallIn").value.trim().toLowerCase();if(!v)return;
      const ok=v===w[0];S.answered=true;if(ok){S.score++;credit(w[0],true)}
      $("#recallIn").disabled=true;
      const fb=$("#fb");fb.className="fb "+(ok?"good":"bad");
      fb.textContent=ok?"To'g'ri!":"To'g'ri javob: “"+w[0]+"”.";
      $("#chk").textContent=S.i+1>=total?"Natijani ko'rish":"Keyingi so'z";
      $("#chk").focus();
    });
  }else{
    const others=shuffle(S.pack.words.filter(x=>x[0]!==w[0])).slice(0,3).map(x=>x[0]);
    const opts=shuffle([w[0]].concat(others));
    const sent=esc(w[3]).replace("___",'<span class="blank" id="blank">&nbsp;&nbsp;&nbsp;&nbsp;</span>');
    st.innerHTML=head(total)+'<p class="q">'+sent+'<small>Gapga mos inglizcha so\'zni tanlang.</small></p><div class="opts" id="opts">'+
      opts.map(o=>'<button class="opt" data-o="'+esc(o)+'">'+esc(o)+'</button>').join("")+'</div><p class="fb" id="fb" aria-live="polite"></p><p class="tr" id="tr"></p><div id="nx"></div>';
    growBar(st,total);
    $("#opts").addEventListener("click",ev=>{
      const b=ev.target.closest(".opt");if(!b||S.answered)return;
      S.answered=true;const ok=b.dataset.o===w[0];
      if(ok){S.score++;credit(w[0],true)}
      document.querySelectorAll("#opts .opt").forEach(x=>{x.disabled=true;if(x.dataset.o===w[0])x.classList.add("right")});
      if(!ok)b.classList.add("wrong");
      const bl=$("#blank");bl.textContent=w[0];bl.classList.add("filled");
      const fb=$("#fb");fb.className="fb "+(ok?"good":"bad");
      fb.textContent=(ok?"To'g'ri! ":"Noto'g'ri. ")+w[0]+" — "+w[2];
      $("#tr").textContent="Tarjimasi: "+w[4];
      $("#nx").innerHTML='<button class="btn primary next" id="nb">'+(S.i+1>=total?"Natijani ko'rish":"Keyingi savol")+'</button>';
      $("#nb").addEventListener("click",nextQ);$("#nb").focus();
    });
  }
}
function nextQ(){S.i++;S.answered=false;renderStage(true)}

function renderMatch(st){
  const m=S.match,words=S.pack.words,n=words.length;
  if(Object.keys(m.done).length===n){
    return renderResult(st,words.filter(w=>!m.missed[w[0]]).length,n,"birinchi urinishda juftlandi");
  }
  const def=k=>words.find(w=>w[0]===k)[2];
  st.innerHTML='<div class="step"><span>'+MODE_NAME.match+' · '+S.pack.label+' so\'zlar</span><span id="mcount"></span></div>'+
    '<div class="prog"><i id="mbar" style="width:0%"></i></div>'+
    '<p class="q" style="margin-bottom:16px">So\'zni bosing, so\'ng uning ma\'nosini bosing.</p><div class="pair"><div class="col">'+
    S.words.map(w=>'<button class="opt w" data-l="'+esc(w[0])+'">'+esc(w[0])+'</button>').join("")+
    '</div><div class="col">'+
    m.defs.map(k=>'<button class="opt" data-r="'+esc(k)+'">'+esc(def(k))+'</button>').join("")+'</div></div>';
  const sess=S;
  const sync=()=>{
    st.querySelectorAll("[data-l]").forEach(b=>{const k=b.dataset.l;b.classList.toggle("done",!!m.done[k]);b.classList.toggle("sel",m.left===k);b.disabled=!!m.done[k]});
    st.querySelectorAll("[data-r]").forEach(b=>{const k=b.dataset.r;b.classList.toggle("done",!!m.done[k]);b.classList.toggle("sel",m.right===k);b.disabled=!!m.done[k]});
    const d=Object.keys(m.done).length;
    $("#mcount").textContent=d+" / "+n+" juftlandi";
    requestAnimationFrame(()=>{const bar=$("#mbar");if(bar)bar.style.width=(d/n*100)+"%"});
  };
  const flash=(els,cls,ms)=>{els.forEach(e=>e&&e.classList.add(cls));setTimeout(()=>els.forEach(e=>e&&e.classList.remove(cls)),ms)};
  sync();
  st.onclick=ev=>{
    if(m.locked)return;
    const l=ev.target.closest("[data-l]"),r=ev.target.closest("[data-r]");
    if(l&&!l.disabled)m.left=l.dataset.l===m.left?null:l.dataset.l;
    else if(r&&!r.disabled)m.right=r.dataset.r===m.right?null:r.dataset.r;
    else return;
    if(m.left&&m.right){
      const a=m.left,b=m.right;
      const ea=st.querySelector('[data-l="'+a+'"]'),eb=st.querySelector('[data-r="'+b+'"]');
      m.left=m.right=null;
      if(a===b){
        m.done[a]=true;if(!m.missed[a])credit(a,true);
        sync();flash([ea,eb],"new",500);
        if(Object.keys(m.done).length===n){
          m.locked=true;
          setTimeout(()=>{if(S===sess)renderStage(true)},700);
        }
      }else{
        m.missed[a]=true;sync();flash([ea,eb],"miss",350);
      }
    }else sync();
  };
}
function countUp(el,to,total){
  if(reduced()||to===0){el.textContent=to+"/"+total;return}
  const t0=performance.now(),dur=800;
  (function f(t){const k=Math.min(1,(t-t0)/dur);el.textContent=Math.round(to*(1-Math.pow(1-k,3)))+"/"+total;if(k<1)requestAnimationFrame(f)})(t0);
}
function renderResult(st,score,total,label){
  st.onclick=null;
  const rest=Object.keys(MODE_NAME).filter(m=>m!==P.mode);
  st.innerHTML='<div class="result"><div class="big" id="big">0/'+total+'</div><p>'+S.pack.label+" so'zlar: "+label+'.</p>'+
    '<div class="actions"><button class="btn primary" id="again">Qayta boshlash</button>'+
    rest.map(m=>'<button class="btn" data-sw="'+m+'">'+MODE_NAME[m]+' rejimi</button>').join("")+
    '<a class="btn" href="#progress">Natijalarni ko\'rish</a></div></div>';
  countUp($("#big"),score,total);
  $("#again").addEventListener("click",startSession);
  st.querySelectorAll("[data-sw]").forEach(b=>b.addEventListener("click",()=>{P.mode=b.dataset.sw;startSession()}));
}

/* ---------- so'zlar ---------- */
function renderWords(){
  const q=$("#wq").value.trim().toLowerCase();
  const all=[];PACKS.forEach(p=>p.words.forEach(w=>all.push(w)));
  const list=q?all.filter(w=>w[0].includes(q)||w[2].toLowerCase().includes(q)):all;
  $("#wordsLine").textContent=list.length+" ta so'z ko'rsatilmoqda (jami "+all.length+").";
  $("#allWords").innerHTML=list.length?list.map(w=>'<li><span class="idx">'+w.n+'</span><span><b>'+esc(w[0])+'</b><em>'+esc(w[1])+'</em></span><span class="def">'+esc(w[2])+'</span>'+dots(lvl(w[0]))+'</li>').join(""):'<li class="none" style="display:block">Hech narsa topilmadi. Boshqa so\'z bilan urinib ko\'ring.</li>';
}
$("#wq").addEventListener("input",renderWords);

/* ---------- natijalar ---------- */
function renderProgress(){
  const total=PACKS.length*6,done=PACKS.reduce((n,p)=>n+packDone(p),0);
  const started=PACKS.reduce((n,p)=>n+p.words.filter(w=>lvl(w[0])>0).length,0);
  $("#stats").innerHTML=[[done,"o'rganilgan so'z"],[started-done,"jarayonda"],[total-started,"boshlanmagan"]].map(s=>'<div class="stat"><b>'+s[0]+'</b><span>'+s[1]+'</span></div>').join("");
  const r=$("#rows");r.classList.add("enter");
  r.innerHTML=PACKS.map((p,i)=>{const d=packDone(p);return '<div class="row" style="--i:'+i+'"><b>'+p.label+'</b><div class="meter"><i style="width:'+(d/6*100)+'%"></i></div><span>'+d+' / 6</span></div>'}).join("");
}
let confirmReset=false;
$("#resetBtn").addEventListener("click",()=>{
  if(!confirmReset){confirmReset=true;$("#resetBtn").textContent="Tasdiqlash uchun yana bosing";return}
  mem={};save();confirmReset=false;$("#resetBtn").textContent="Natijalarni tozalash";renderProgress();
});

/* ---------- yo'naltirish ---------- */
const VIEWS=["home","practice","words","progress"];
let lastView=null;
function route(){
  const h=(location.hash||"#home").slice(1);
  const v=VIEWS.includes(h)?h:"home";
  VIEWS.forEach(x=>{$("#v-"+x).hidden=x!==v});
  document.querySelectorAll("[data-nav]").forEach(a=>{if(a.dataset.nav===v)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
  if(v!==lastView)replay($("#v-"+v),"view-in");
  if(v==="home"){animIn=v!==lastView;renderHome()}
  if(v==="practice"){if(!S||S.pack.id!==P.pack)startSession();else{syncControls();renderStage(false)}}
  if(v==="words")renderWords();
  if(v==="progress"){confirmReset=false;$("#resetBtn").textContent="Natijalarni tozalash";renderProgress()}
  lastView=v;
}
window.addEventListener("hashchange",route);
route();
