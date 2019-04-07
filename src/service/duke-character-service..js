export default function () {
    var knownToMe = []
    function initialization(players) {
        knownToMe = players.filter(function (p) { return p.card.alignment == "sinister" && p.card.name != 'Nerlin' });
    }
}