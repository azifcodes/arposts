function getLines(ctx, text, maxWidth)
{
    var words = text.split(" ");
    var lines = [];
    var currentLine = words[0];

    for (var i = 1; i < words.length; i++)
    {
        var word = words[i];
        var width = ctx.measureText(currentLine + " " + word).width;
        if (width < maxWidth)
        {
            currentLine += " " + word;
        }
        else
        {
            lines.push(currentLine);
            currentLine = word;
        }
    }

    lines.push(currentLine);
    return lines;
}


const data = JSON.parse(window.localStorage.getItem("postCreationData"));

var Qtemp = new Image();

Qtemp.onload = function ()
{
    let Qc = document.getElementById("Qc");
    let Qctx = Qc.getContext("2d");

    Qctx.drawImage(Qtemp, 0, 0);

    Qfontsize = 77;

    Qctx.font = Qfontsize.toString() + "px Cairo";
    Qctx.textAlign = 'center';
    Qctx.textBaseline = 'middle';
    Qctx.fillStyle = 'yellow';

    let lines = getLines(Qctx, data.Qq, 1000);
    let y = 668 - (Qfontsize * Math.floor((lines.length - 1) / 2));

    for (line of lines)
    {
        Qctx.fillText(line, 540, y);
        y = y + Qfontsize;
    }


    Qctx.fillStyle = "white";
    Qctx.font = 'bold 32px Arial';
    Qctx.textAlign = 'left';
    Qctx.fillText(data.Qu, 75, 1042);

    Qctx.font = 'bold 34px Arial';
    Qctx.textAlign = 'right';
    Qctx.fillText(data.Qv, 1014, 1042);

    QcImg = Qc.toDataURL("image/png");
    const Qp = document.getElementById("Qp");
    Qp.src = QcImg;
}

Qtemp.src = "images/QPTemplate.png";


var Atemp = new Image();

Atemp.onload = function ()
{
    for (let i = 1; i < 10; i++)
    {
        let d = "A" + i;
        let Ac = document.getElementById(d + "c");
        let Actx = Ac.getContext("2d");

        Actx.drawImage(Atemp, 0, 0);

        Actx.fillStyle = "#02a9f4";
        Actx.font = 'bold 38px Arial';
        Actx.textAlign = 'left';
        Actx.texBaseline = "middle";
        Actx.fillText(data[d + "u"], 100, 100);


        Actx.textAlign = 'left';
        Actx.textBaseline = 'middle';
        Actx.fillStyle = 'white';

        let len = data[d + "a"].length;
        let Afontsize = 0;

        if (len <= 245)
        {
            Afontsize = 60;
        }
        else if (len >= 1230)
        {
            Afontsize = 30;
        }
        else
        {
            Afontsize = 60 - Math.round((len - 245) * 0.03);
        }

        Actx.font = Afontsize.toString() + "px Arial";

        let lines = getLines(Actx, data[d + "a"], 880);
        let y = 520 - (Afontsize * Math.floor((lines.length - 1) / 2));

        for (line of lines)
        {
            Actx.fillText(line, 100, y);
            y = y + Afontsize + 2;
        }

        Actx.fillStyle = "#ff6d00";
        Actx.font = 'bold 45px Arial';
        Actx.textAlign = 'right';
        Actx.fillText(data[d + "v"], 910, 1012);

        AcImg = Ac.toDataURL("image/png");
        let Ap = document.getElementById(d + "p");
        Ap.src = AcImg;
    }

    const Qcard = document.getElementById("Qcard");
    Qcard.style = "";

    const Acard = document.getElementById("Acard");
    Acard.style = "";

    const foot = document.getElementById("foot");
    foot.classList.remove("footerFix");

    const bar = document.getElementById("loadingBar");
    bar.innerHTML = 'Posts created successfully!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>';
    bar.className = "alert alert-success alert-dismissible fade show";
}

Atemp.src = "images/APTemplate.png";
