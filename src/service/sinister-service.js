export default function (userStoryService) {
    var knownToMe = []
    function initialization(players) {
        knownToMe = players.filter(function (p) { return p.card.alignment == "sinister"});
    }

}