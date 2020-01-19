function sydTime(){
    const now = moment();
    const syd = moment.tz(now, "Australia/Sydney").format("HH:mm:ss A");
    const qld = moment.tz(now, "Australia/Brisbane").format("HH:mm:ss A");
    const vic = moment.tz(now, "Australia/Melbourne").format("HH:mm:ss A");
    const sa = moment.tz(now, "Australia/Adelaide").format("HH:mm:ss A");
    const wa = moment.tz(now, "Australia/Perth").format("HH:mm:ss A");
    const nt = moment.tz(now, "Australia/Darwin").format("HH:mm:ss A");
    const tas = moment.tz(now, "Australia/Hobart").format("HH:mm:ss A");
    const nz = moment.tz(now, "Pacific/Auckland").format("HH:mm:ss A");

    document.getElementById('qldTime').innerHTML = qld;
    document.getElementById('sydTime').innerHTML = syd;
    document.getElementById('vicTime').innerHTML = vic;
    document.getElementById('saTime').innerHTML = sa;
    document.getElementById('waTime').innerHTML = wa;
    document.getElementById('ntTime').innerHTML = nt;
    document.getElementById('tasTime').innerHTML = tas;
    document.getElementById('nzTime').innerHTML = nz;

}

setInterval(sydTime, 1000);