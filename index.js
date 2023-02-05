const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 5000;


//CNC & VMC Data
const cnc_vmc1 = require("./cnc&vmc/cnc&vmc1.json");
const cnc_vmc2 = require("./cnc&vmc/cnc&vmc2.json");
const cnc_vmc3 = require("./cnc&vmc/cnc&vmc3.json");
const cnc_vmc4 = require("./cnc&vmc/cnc&vmc4.json");
const cnc_vmc5 = require("./cnc&vmc/cnc&vmc5.json");
const cnc_vmc6 = require("./cnc&vmc/cnc&vmc6.json");
const cnc_vmc7 = require("./cnc&vmc/cnc&vmc7.json");
const cnc_vmc8 = require("./cnc&vmc/cnc&vmc8.json");
const cnc_vmc9 = require("./cnc&vmc/cnc&vmc9.json");
const cnc_vmc10 = require("./cnc&vmc/cnc&vmc10.json");
const cnc_vmc11 = require("./cnc&vmc/cnc&vmc11.json");
const cnc_vmc12 = require("./cnc&vmc/cnc&vmc12.json");
const cnc_vmc13 = require("./cnc&vmc/cnc&vmc13.json");
const cnc_vmc14 = require("./cnc&vmc/cnc&vmc14.json");

app.get("/cv/1", (req, res) => {
    res.send(cnc_vmc1);
});
app.get("/cv/2", (req, res) => {
    res.send(cnc_vmc2);
});
app.get("/cv/3", (req, res) => {
    res.send(cnc_vmc3);
});
app.get("/cv/4", (req, res) => {
    res.send(cnc_vmc4);
});
app.get("/cv/5", (req, res) => {
    res.send(cnc_vmc5);
});
app.get("/cv/6", (req, res) => {
    res.send(cnc_vmc6);
});
app.get("/cv/7", (req, res) => {
    res.send(cnc_vmc7);
});
app.get("/cv/8", (req, res) => {
    res.send(cnc_vmc8);
});
app.get("/cv/9", (req, res) => {
    res.send(cnc_vmc9);
});
app.get("/cv/10", (req, res) => {
    res.send(cnc_vmc10);
});
app.get("/cv/11", (req, res) => {
    res.send(cnc_vmc11);
});
app.get("/cv/12", (req, res) => {
    res.send(cnc_vmc12);
});
app.get("/cv/13", (req, res) => {
    res.send(cnc_vmc13);
});
app.get("/cv/14", (req, res) => {
    res.send(cnc_vmc14);
});

//COPA Data
const copadata1 = require("./COPA/copa1.json");
const copadata2 = require("./COPA/copa2.json");
const copadata3 = require("./COPA/copa3.json");
const copadata4 = require("./COPA/copa4.json");
const copadata5 = require("./COPA/copa5.json");
const copadata6 = require("./COPA/copa6.json");
const copadata7 = require("./COPA/copa7.json");
const copadata8 = require("./COPA/copa8.json");
const copadata9 = require("./COPA/copa9.json");
const copadata10 = require("./COPA/copa10.json");
const copadata11 = require("./COPA/copa11.json");
const copadata12 = require("./COPA/copa12.json");
const copadata13 = require("./COPA/copa13.json");
const copadata14 = require("./COPA/copa14.json");
const copadata15 = require("./COPA/copa15.json");
const copadata16 = require("./COPA/copa16.json");
const copadata17 = require("./COPA/copa17.json");
const copadata18 = require("./COPA/copa18.json");
const copadata19 = require("./COPA/copa19.json");
const copadata20 = require("./COPA/copa20.json");
const copadata21 = require("./COPA/copa21.json");

app.get("/copa/1", (req, res) => {
    res.send(copadata1);
});
app.get("/copa/2", (req, res) => {
    res.send(copadata2);
});
app.get("/copa/3", (req, res) => {
    res.send(copadata3);
});
app.get("/copa/4", (req, res) => {
    res.send(copadata4);
});
app.get("/copa/5", (req, res) => {
    res.send(copadata5);
});
app.get("/copa/6", (req, res) => {
    res.send(copadata6);
});
app.get("/copa/7", (req, res) => {
    res.send(copadata7);
});
app.get("/copa/8", (req, res) => {
    res.send(copadata8);
});
app.get("/copa/9", (req, res) => {
    res.send(copadata9);
});
app.get("/copa/10", (req, res) => {
    res.send(copadata10);
});
app.get("/copa/11", (req, res) => {
    res.send(copadata11);
});
app.get("/copa/12", (req, res) => {
    res.send(copadata12);
});
app.get("/copa/13", (req, res) => {
    res.send(copadata13);
});
app.get("/copa/14", (req, res) => {
    res.send(copadata14);
});
app.get("/copa/15", (req, res) => {
    res.send(copadata15);
});
app.get("/copa/16", (req, res) => {
    res.send(copadata16);
});
app.get("/copa/17", (req, res) => {
    res.send(copadata71);
});
app.get("/copa/18", (req, res) => {
    res.send(copadata18);
});
app.get("/copa/19", (req, res) => {
    res.send(copadata19);
});
app.get("/copa/20", (req, res) => {
    res.send(copadata20);
});
app.get("/copa/21", (req, res) => {
    res.send(copadata21);
});

//Electrician Data
const electriciandata1 = require("./Electrician/electrician1.json");
const electriciandata2 = require("./Electrician/electrician2.json");
const electriciandata3 = require("./Electrician/electrician3.json");
const electriciandata4 = require("./Electrician/electrician4.json");
const electriciandata5 = require("./Electrician/electrician5.json");
const electriciandata6 = require("./Electrician/electrician6.json");
const electriciandata7 = require("./Electrician/electrician7.json");
const electriciandata8 = require("./Electrician/electrician8.json");
const electriciandata9 = require("./Electrician/electrician9.json");
const electriciandata10 = require("./Electrician/electrician10.json");
const electriciandata11 = require("./Electrician/electrician11.json");
const electriciandata12 = require("./Electrician/electrician12.json");
const electriciandata13 = require("./Electrician/electrician13.json");
const electriciandata14 = require("./Electrician/electrician14.json");
const electriciandata15 = require("./Electrician/electrician15.json");
const electriciandata16 = require("./Electrician/electrician16.json");
const electriciandata17 = require("./Electrician/electrician17.json");
const electriciandata18 = require("./Electrician/electrician18.json");
const electriciandata19 = require("./Electrician/electrician19.json");
const electriciandata20 = require("./Electrician/electrician20.json");
const electriciandata21 = require("./Electrician/electrician21.json");
const electriciandata22 = require("./Electrician/electrician22.json");
const electriciandata23 = require("./Electrician/electrician23.json");
const electriciandata24 = require("./Electrician/electrician24.json");

app.get("/electrician/1", (req, res) => {
    res.send(electriciandata1);
});
app.get("/electrician/2", (req, res) => {
    res.send(electriciandata2);
});
app.get("/electrician/3", (req, res) => {
    res.send(electriciandata3);
});
app.get("/electrician/4", (req, res) => {
    res.send(electriciandata4);
});
app.get("/electrician/5", (req, res) => {
    res.send(electriciandata5);
});
app.get("/electrician/6", (req, res) => {
    res.send(electriciandata6);
});
app.get("/electrician/7", (req, res) => {
    res.send(electriciandata7);
});
app.get("/electrician/8", (req, res) => {
    res.send(electriciandata8);
});
app.get("/electrician/9", (req, res) => {
    res.send(electriciandata9);
});
app.get("/electrician/10", (req, res) => {
    res.send(electriciandata10);
});
app.get("/electrician/11", (req, res) => {
    res.send(electriciandata11);
});
app.get("/electrician/12", (req, res) => {
    res.send(electriciandata12);
});
app.get("/electrician/13", (req, res) => {
    res.send(electriciandata13);
});
app.get("/electrician/14", (req, res) => {
    res.send(electriciandata14);
});
app.get("/electrician/15", (req, res) => {
    res.send(electriciandata15);
});
app.get("/electrician/16", (req, res) => {
    res.send(electriciandata16);
});
app.get("/electrician/17", (req, res) => {
    res.send(electriciandata17);
});
app.get("/electrician/18", (req, res) => {
    res.send(electriciandata18);
});
app.get("/electrician/19", (req, res) => {
    res.send(electriciandata19);
});
app.get("/electrician/20", (req, res) => {
    res.send(electriciandata20);
});
app.get("/electrician/21", (req, res) => {
    res.send(electriciandata21);
});
app.get("/electrician/22", (req, res) => {
    res.send(electriciandata22);
});
app.get("/electrician/23", (req, res) => {
    res.send(electriciandata23);
});
app.get("/electrician/24", (req, res) => {
    res.send(electriciandata24);
});



//ES Data
const esdata1 = require("./ES/es1.json");
const esdata2 = require("./ES/es2.json");
const esdata3 = require("./ES/es3.json");
const esdata4 = require("./ES/es4.json");
const esdata5 = require("./ES/es5.json");
const esdata6 = require("./ES/es6.json");
const esdata7 = require("./ES/es7.json");
const esdata8 = require("./ES/es8.json");

app.get("/es/1", (req, res) => {
    res.send(esdata1);
});
app.get("/es/2", (req, res) => {
    res.send(esdata2);
});
app.get("/es/3", (req, res) => {
    res.send(esdata3);
});
app.get("/es/4", (req, res) => {
    res.send(esdata4);
});
app.get("/es/5", (req, res) => {
    res.send(esdata5);
});
app.get("/es/6", (req, res) => {
    res.send(esdata6);
});
app.get("/es/7", (req, res) => {
    res.send(esdata7);
});
app.get("/es/8", (req, res) => {
    res.send(esdata8);
});


//Fitter Data
const fitterdata1 = require("./Fitter/fitter1.json");
const fitterdata2 = require("./Fitter/fitter2.json");
const fitterdata3 = require("./Fitter/fitter3.json");
const fitterdata4 = require("./Fitter/fitter4.json");
const fitterdata5 = require("./Fitter/fitter5.json");
const fitterdata6 = require("./Fitter/fitter6.json");
const fitterdata7 = require("./Fitter/fitter7.json");
const fitterdata8 = require("./Fitter/fitter8.json");
const fitterdata9 = require("./Fitter/fitter9.json");
const fitterdata10 = require("./Fitter/fitter10.json");
const fitterdata11 = require("./Fitter/fitter11.json");
const fitterdata12 = require("./Fitter/fitter12.json");
const fitterdata13 = require("./Fitter/fitter13.json");
const fitterdata14 = require("./Fitter/fitter14.json");
const fitterdata15 = require("./Fitter/fitter15.json");
const fitterdata16 = require("./Fitter/fitter16.json");
const fitterdata17 = require("./Fitter/fitter17.json");
const fitterdata18 = require("./Fitter/fitter18.json");
const fitterdata19 = require("./Fitter/fitter19.json");
const fitterdata20 = require("./Fitter/fitter20.json");
const fitterdata21 = require("./Fitter/fitter21.json");
const fitterdata22 = require("./Fitter/fitter22.json");
const fitterdata23 = require("./Fitter/fitter23.json");
const fitterdata24 = require("./Fitter/fitter24.json");
const fitterdata25 = require("./Fitter/fitter25.json");
const fitterdata26 = require("./Fitter/fitter26.json");
const fitterdata27 = require("./Fitter/fitter27.json");
const fitterdata28 = require("./Fitter/fitter28.json");
const fitterdata29 = require("./Fitter/fitter29.json");
const fitterdata30 = require("./Fitter/fitter30.json");
const fitterdata31 = require("./Fitter/fitter31.json");
const fitterdata32 = require("./Fitter/fitter32.json");
const fitterdata33 = require("./Fitter/fitter33.json");
const fitterdata34 = require("./Fitter/fitter34.json");
const fitterdata35 = require("./Fitter/fitter35.json");
const fitterdata36 = require("./Fitter/fitter36.json");
const fitterdata37 = require("./Fitter/fitter37.json");
const fitterdata38 = require("./Fitter/fitter38.json");
const fitterdata39 = require("./Fitter/fitter39.json");


app.get("/fitter/1", (req, res) => {
    res.send(fitterdata1);
});
app.get("/fitter/2", (req, res) => {
    res.send(fitterdata2);
});
app.get("/fitter/3", (req, res) => {
    res.send(fitterdata3);
});
app.get("/fitter/4", (req, res) => {
    res.send(fitterdata4);
});
app.get("/fitter/5", (req, res) => {
    res.send(fitterdata5);
});
app.get("/fitter/6", (req, res) => {
    res.send(fitterdata6);
});
app.get("/fitter/7", (req, res) => {
    res.send(fitterdata7);
});
app.get("/fitter/8", (req, res) => {
    res.send(fitterdata8);
});
app.get("/fitter/9", (req, res) => {
    res.send(fitterdata9);
});
app.get("/fitter/10", (req, res) => {
    res.send(fitterdata10);
});
app.get("/fitter/11", (req, res) => {
    res.send(fitterdata11);
});
app.get("/fitter/12", (req, res) => {
    res.send(fitterdata12);
});
app.get("/fitter/13", (req, res) => {
    res.send(fitterdata13);
});
app.get("/fitter/14", (req, res) => {
    res.send(fitterdata14);
});
app.get("/fitter/15", (req, res) => {
    res.send(fitterdata15);
});
app.get("/fitter/16", (req, res) => {
    res.send(fitterdata16);
});
app.get("/fitter/17", (req, res) => {
    res.send(fitterdata17);
});
app.get("/fitter/18", (req, res) => {
    res.send(fitterdata18);
});
app.get("/fitter/19", (req, res) => {
    res.send(fitterdata19);
});
app.get("/fitter/20", (req, res) => {
    res.send(fitterdata20);
});
app.get("/fitter/21", (req, res) => {
    res.send(fitterdata21);
});
app.get("/fitter/22", (req, res) => {
    res.send(fitterdata22);
});
app.get("/fitter/23", (req, res) => {
    res.send(fitterdata23);
});
app.get("/fitter/24", (req, res) => {
    res.send(fitterdata24);
});
app.get("/fitter/25", (req, res) => {
    res.send(fitterdata25);
});
app.get("/fitter/26", (req, res) => {
    res.send(fitterdata26);
});
app.get("/fitter/27", (req, res) => {
    res.send(fitterdata27);
});
app.get("/fitter/28", (req, res) => {
    res.send(fitterdata28);
});
app.get("/fitter/29", (req, res) => {
    res.send(fitterdata29);
});
app.get("/fitter/30", (req, res) => {
    res.send(fitterdata30);
});
app.get("/fitter/31", (req, res) => {
    res.send(fitterdata31);
});
app.get("/fitter/32", (req, res) => {
    res.send(fitterdata32);
});
app.get("/fitter/33", (req, res) => {
    res.send(fitterdata33);
});
app.get("/fitter/34", (req, res) => {
    res.send(fitterdata34);
});
app.get("/fitter/35", (req, res) => {
    res.send(fitterdata35);
});
app.get("/fitter/36", (req, res) => {
    res.send(fitterdata36);
});
app.get("/fitter/37", (req, res) => {
    res.send(fitterdata37);
});
app.get("/fitter/38", (req, res) => {
    res.send(fitterdata38);
});
app.get("/fitter/39", (req, res) => {
    res.send(fitterdata39);
});

//Turner Data
const turnerdata1 = require("./Turner/turner1.json");
const turnerdata2 = require("./Turner/turner2.json");
const turnerdata3 = require("./Turner/turner3.json");
const turnerdata4 = require("./Turner/turner4.json");
const turnerdata5 = require("./Turner/turner5.json");
const turnerdata6 = require("./Turner/turner6.json");
const turnerdata7 = require("./Turner/turner7.json");
const turnerdata8 = require("./Turner/turner8.json");
const turnerdata9 = require("./Turner/turner9.json");
const turnerdata10 = require("./Turner/turner10.json");
const turnerdata11 = require("./Turner/turner11.json");
const turnerdata12 = require("./Turner/turner12.json");
const turnerdata13 = require("./Turner/turner13.json");
const turnerdata14 = require("./Turner/turner14.json");
const turnerdata15 = require("./Turner/turner15.json");
const turnerdata16 = require("./Turner/turner16.json");
const turnerdata17 = require("./Turner/turner17.json");
const turnerdata18 = require("./Turner/turner18.json");
const turnerdata19 = require("./Turner/turner19.json");
const turnerdata20 = require("./Turner/turner20.json");
const turnerdata21 = require("./Turner/turner21.json");
const turnerdata22 = require("./Turner/turner22.json");
const turnerdata23 = require("./Turner/turner23.json");
const turnerdata24 = require("./Turner/turner24.json");
const turnerdata25 = require("./Turner/turner25.json");
const turnerdata26 = require("./Turner/turner26.json");
const turnerdata27 = require("./Turner/turner27.json");
const turnerdata28 = require("./Turner/turner28.json");
const turnerdata29 = require("./Turner/turner29.json");
const turnerdata30 = require("./Turner/turner30.json");
const turnerdata31 = require("./Turner/turner31.json");
const turnerdata32 = require("./Turner/turner32.json");
const turnerdata33 = require("./Turner/turner33.json");
const turnerdata34 = require("./Turner/turner34.json");
const turnerdata35 = require("./Turner/turner35.json");
const turnerdata36 = require("./Turner/turner36.json");
const turnerdata37 = require("./Turner/turner37.json");
const turnerdata38 = require("./Turner/turner38.json");
const turnerdata39 = require("./Turner/turner39.json");


app.get("/turner/1", (req, res) => {
    res.send(turnerdata1);
});
app.get("/turner/2", (req, res) => {
    res.send(turnerdata2);
});
app.get("/turner/3", (req, res) => {
    res.send(turnerdata3);
});
app.get("/turner/4", (req, res) => {
    res.send(turnerdata4);
});
app.get("/turner/5", (req, res) => {
    res.send(turnerdata5);
});
app.get("/turner/6", (req, res) => {
    res.send(turnerdata6);
});
app.get("/turner/7", (req, res) => {
    res.send(turnerdata7);
});
app.get("/turner/8", (req, res) => {
    res.send(turnerdata8);
});
app.get("/turner/9", (req, res) => {
    res.send(turnerdata9);
});
app.get("/turner/10", (req, res) => {
    res.send(turnerdata10);
});
app.get("/turner/11", (req, res) => {
    res.send(turnerdata11);
});
app.get("/turner/12", (req, res) => {
    res.send(turnerdata12);
});
app.get("/turner/13", (req, res) => {
    res.send(turnerdata13);
});
app.get("/turner/14", (req, res) => {
    res.send(turnerdata14);
});
app.get("/turner/15", (req, res) => {
    res.send(turnerdata15);
});
app.get("/turner/16", (req, res) => {
    res.send(turnerdata16);
});
app.get("/turner/17", (req, res) => {
    res.send(turnerdata17);
});
app.get("/turner/18", (req, res) => {
    res.send(turnerdata18);
});
app.get("/turner/19", (req, res) => {
    res.send(turnerdata19);
});
app.get("/turner/20", (req, res) => {
    res.send(turnerdata20);
});
app.get("/turner/21", (req, res) => {
    res.send(turnerdata21);
});
app.get("/turner/22", (req, res) => {
    res.send(turnerdata22);
});
app.get("/turner/23", (req, res) => {
    res.send(turnerdata23);
});
app.get("/turner/24", (req, res) => {
    res.send(turnerdata24);
});
app.get("/turner/25", (req, res) => {
    res.send(turnerdata25);
});
app.get("/turner/26", (req, res) => {
    res.send(turnerdata26);
});
app.get("/turner/27", (req, res) => {
    res.send(turnerdata27);
});
app.get("/turner/28", (req, res) => {
    res.send(turnerdata28);
});
app.get("/turner/29", (req, res) => {
    res.send(turnerdata29);
});
app.get("/turner/30", (req, res) => {
    res.send(turnerdata30);
});
app.get("/turner/31", (req, res) => {
    res.send(turnerdata31);
});
app.get("/turner/32", (req, res) => {
    res.send(turnerdata32);
});
app.get("/turner/33", (req, res) => {
    res.send(turnerdata33);
});
app.get("/turner/34", (req, res) => {
    res.send(turnerdata34);
});
app.get("/turner/35", (req, res) => {
    res.send(turnerdata35);
});
app.get("/turner/36", (req, res) => {
    res.send(turnerdata36);
});
app.get("/turner/37", (req, res) => {
    res.send(turnerdata37);
});
app.get("/turner/38", (req, res) => {
    res.send(turnerdata38);
});
app.get("/turner/39", (req, res) => {
    res.send(turnerdata39);
});

// Maths & Science Data

const m_sdata1 = require("./Maths & Science/m&s1.json");
const m_sdata2 = require("./Maths & Science/m&s2.json");
const m_sdata3 = require("./Maths & Science/m&s3.json");
const m_sdata4 = require("./Maths & Science/m&s4.json");
const m_sdata5 = require("./Maths & Science/m&s5.json");
const m_sdata6 = require("./Maths & Science/m&s6.json");
const m_sdata7 = require("./Maths & Science/m&s7.json");
const m_sdata8 = require("./Maths & Science/m&s8.json");
const m_sdata9 = require("./Maths & Science/m&s9.json");
const m_sdata10 = require("./Maths & Science/m&s10.json");
const m_sdata11 = require("./Maths & Science/m&s11.json");
const m_sdata12 = require("./Maths & Science/m&s12.json");
const m_sdata13 = require("./Maths & Science/m&s13.json");
const m_sdata14 = require("./Maths & Science/m&s14.json");
const m_sdata15 = require("./Maths & Science/m&s15.json");
const m_sdata16 = require("./Maths & Science/m&s16.json");
const m_sdata17 = require("./Maths & Science/m&s17.json");
const m_sdata18 = require("./Maths & Science/m&s18.json");
const m_sdata19 = require("./Maths & Science/m&s19.json");
const m_sdata20 = require("./Maths & Science/m&s20.json");

app.get("/m_s/1", (req, res) => {
    res.send(m_sdata1);
});
app.get("/m_s/2", (req, res) => {
    res.send(m_sdata2);
});
app.get("/m_s/3", (req, res) => {
    res.send(m_sdata3);
});
app.get("/m_s/4", (req, res) => {
    res.send(m_sdata4);
});
app.get("/m_s/5", (req, res) => {
    res.send(m_sdata5);
});
app.get("/m_s/6", (req, res) => {
    res.send(m_sdata6);
});
app.get("/m_s/7", (req, res) => {
    res.send(m_sdata7);
});
app.get("/m_s/8", (req, res) => {
    res.send(m_sdata8);
});
app.get("/m_s/9", (req, res) => {
    res.send(m_sdata9);
});
app.get("/m_s/10", (req, res) => {
    res.send(m_sdata10);
});
app.get("/m_s/11", (req, res) => {
    res.send(m_sdata11);
});
app.get("/m_s/12", (req, res) => {
    res.send(m_sdata12);
});
app.get("/m_s/13", (req, res) => {
    res.send(m_sdata13);
});
app.get("/m_s/14", (req, res) => {
    res.send(m_sdata14);
});
app.get("/m_s/15", (req, res) => {
    res.send(m_sdata15);
});
app.get("/m_s/16", (req, res) => {
    res.send(m_sdata16);
});
app.get("/m_s/17", (req, res) => {
    res.send(m_sdata17);
});
app.get("/m_s/18", (req, res) => {
    res.send(m_sdata18);
});
app.get("/m_s/19", (req, res) => {
    res.send(m_sdata19);
});
app.get("/m_s/20", (req, res) => {
    res.send(m_sdata20);
});


//Mechanical Diesel Data

const mddata1 = require("./Mechanical Diesel/md1.json");
const mddata2 = require("./Mechanical Diesel/md2.json");
const mddata3 = require("./Mechanical Diesel/md3.json");
const mddata4 = require("./Mechanical Diesel/md4.json");
const mddata5 = require("./Mechanical Diesel/md5.json");
const mddata6 = require("./Mechanical Diesel/md6.json");
const mddata7 = require("./Mechanical Diesel/md7.json");
const mddata8 = require("./Mechanical Diesel/md8.json");
const mddata9 = require("./Mechanical Diesel/md9.json");
const mddata10 = require("./Mechanical Diesel/md10.json");

app.get("/md/1", (req, res) => {
    res.send(mddata1);
});
app.get("/md/2", (req, res) => {
    res.send(mddata2);
});
app.get("/md/3", (req, res) => {
    res.send(mddata3);
});
app.get("/md/4", (req, res) => {
    res.send(mddata4);
});
app.get("/md/5", (req, res) => {
    res.send(mddata5);
});
app.get("/md/6", (req, res) => {
    res.send(mddata6);
});
app.get("/md/7", (req, res) => {
    res.send(mddata7);
});
app.get("/md/8", (req, res) => {
    res.send(mddata8);
});
app.get("/md/9", (req, res) => {
    res.send(mddata9);
});
app.get("/md/10", (req, res) => {
    res.send(mddata10);
});


//MRAC Data
const mracdata1 = require("./MRAC/mrac1.json");
const mracdata2 = require("./MRAC/mrac2.json");
const mracdata3 = require("./MRAC/mrac3.json");
const mracdata4 = require("./MRAC/mrac4.json");
const mracdata5 = require("./MRAC/mrac5.json");
const mracdata6 = require("./MRAC/mrac6.json");
const mracdata7 = require("./MRAC/mrac7.json");
const mracdata8 = require("./MRAC/mrac8.json");
const mracdata9 = require("./MRAC/mrac9.json");
const mracdata10 = require("./MRAC/mrac10.json");
const mracdata11 = require("./MRAC/mrac11.json");
const mracdata12 = require("./MRAC/mrac12.json");
const mracdata13 = require("./MRAC/mrac13.json");
const mracdata14 = require("./MRAC/mrac14.json");
const mracdata15 = require("./MRAC/mrac15.json");
const mracdata16 = require("./MRAC/mrac16.json");
const mracdata17 = require("./MRAC/mrac17.json");
const mracdata18 = require("./MRAC/mrac18.json");
const mracdata19 = require("./MRAC/mrac19.json");
const mracdata20 = require("./MRAC/mrac20.json");
const mracdata21 = require("./MRAC/mrac21.json");
const mracdata22 = require("./MRAC/mrac22.json");
const mracdata23 = require("./MRAC/mrac23.json");
const mracdata24 = require("./MRAC/mrac24.json");
const mracdata25 = require("./MRAC/mrac25.json");
const mracdata26 = require("./MRAC/mrac26.json");
const mracdata27 = require("./MRAC/mrac27.json");
const mracdata28 = require("./MRAC/mrac28.json");
const mracdata29 = require("./MRAC/mrac29.json");
const mracdata30 = require("./MRAC/mrac30.json");
const mracdata31 = require("./MRAC/mrac31.json");
const mracdata32 = require("./MRAC/mrac32.json");
const mracdata33 = require("./MRAC/mrac33.json");
const mracdata34 = require("./MRAC/mrac34.json");
const mracdata35 = require("./MRAC/mrac35.json");
const mracdata36 = require("./MRAC/mrac36.json");
const mracdata37 = require("./MRAC/mrac37.json");
const mracdata38 = require("./MRAC/mrac38.json");
const mracdata39 = require("./MRAC/mrac39.json");


app.get("/mrac/1", (req, res) => {
    res.send(mracdata1);
});
app.get("/mrac/2", (req, res) => {
    res.send(mracdata2);
});
app.get("/mrac/3", (req, res) => {
    res.send(mracdata3);
});
app.get("/mrac/4", (req, res) => {
    res.send(mracdata4);
});
app.get("/mrac/5", (req, res) => {
    res.send(mracdata5);
});
app.get("/mrac/6", (req, res) => {
    res.send(mracdata6);
});
app.get("/mrac/7", (req, res) => {
    res.send(mracdata7);
});
app.get("/mrac/8", (req, res) => {
    res.send(mracdata8);
});
app.get("/mrac/9", (req, res) => {
    res.send(mracdata9);
});
app.get("/mrac/10", (req, res) => {
    res.send(mracdata10);
});
app.get("/mrac/11", (req, res) => {
    res.send(mracdata11);
});
app.get("/mrac/12", (req, res) => {
    res.send(mracdata12);
});
app.get("/mrac/13", (req, res) => {
    res.send(mracdata13);
});
app.get("/mrac/14", (req, res) => {
    res.send(mracdata14);
});
app.get("/mrac/15", (req, res) => {
    res.send(mracdata15);
});
app.get("/mrac/16", (req, res) => {
    res.send(mracdata16);
});
app.get("/mrac/17", (req, res) => {
    res.send(mracdata17);
});
app.get("/mrac/18", (req, res) => {
    res.send(mracdata18);
});
app.get("/mrac/19", (req, res) => {
    res.send(mracdata19);
});
app.get("/mrac/20", (req, res) => {
    res.send(mracdata20);
});
app.get("/mrac/21", (req, res) => {
    res.send(mracdata21);
});
app.get("/mrac/22", (req, res) => {
    res.send(mracdata22);
});
app.get("/mrac/23", (req, res) => {
    res.send(mracdata23);
});
app.get("/mrac/24", (req, res) => {
    res.send(mracdata24);
});
app.get("/mrac/25", (req, res) => {
    res.send(mracdata25);
});
app.get("/mrac/26", (req, res) => {
    res.send(mracdata26);
});
app.get("/mrac/27", (req, res) => {
    res.send(mracdata27);
});
app.get("/mrac/28", (req, res) => {
    res.send(mracdata28);
});
app.get("/mrac/29", (req, res) => {
    res.send(mracdata29);
});
app.get("/mrac/30", (req, res) => {
    res.send(mracdata30);
});
app.get("/mrac/31", (req, res) => {
    res.send(mracdata31);
});
app.get("/mrac/32", (req, res) => {
    res.send(mracdata32);
});
app.get("/mrac/33", (req, res) => {
    res.send(mracdata33);
});
app.get("/mrac/34", (req, res) => {
    res.send(mracdata34);
});
app.get("/mrac/35", (req, res) => {
    res.send(mracdata35);
});
app.get("/mrac/36", (req, res) => {
    res.send(mracdata36);
});
app.get("/mrac/37", (req, res) => {
    res.send(mracdata37);
});
app.get("/mrac/38", (req, res) => {
    res.send(mracdata38);
});
app.get("/mrac/39", (req, res) => {
    res.send(mracdata39);
});

const allAPIS = require("./AllAPI.json");

app.get("/allAPI/app", (req, res) => {
    res.send(allAPIS);
});

app.listen(port, () => {
    console.log("I am live");
});