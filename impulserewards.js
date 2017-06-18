impulse.giveDailyReward = function (userid, user) {
    if (!user || !userid) return false;
    userid = toId(userid);
    if (!Db.DailyBonus.has(userid)) {
        Db.DailyBonus.set(userid, [1, Date.now()]);
        return false;
    }
    let lastTime = Db.DailyBonus.get(userid)[1];
    if ((Date.now() - lastTime) < 86400000) return false;
    if ((Date.now() - lastTime) >= 127800000) Db('DailyBonus').set(userid, [1, Date.now()]);
    if (Db.DailyBonus.get(userid)[0] === 8) Db.DailyBonus.set(userid, [7, Date.now()]);
    Db.DailyBonus.set(userid), Db.DailyBonus.get(userid)[0];
    user.send('|popup||wide||html| <center><u><b><font size="3">Impulse Daily Bonus</font></b></u><br>You have been awarded ' + Db('DailyBonus').get(userid)[0] + ' Buck.<br>' + showDailyRewardAni(userid) + '<br>Because you have connected to the server for the past ' + Db('DailyBonus').get(userid)[0] + ' Days.</center>');
    Db.DailyBonus.set(userid), Db.DailyBonus.get(userid)[0] + 1, Date.now();
};
 
function showDailyRewardAni(userid) {
    userid = toId(userid);
    let streak = Db.DailyBonus.get(userid)[0];
    let output = '';
    for (let i = 1; i <= streak; i++) {
        output += "<img src='https://www.mukuru.com/media/img/icons/new_order.png' width='16' height='16'> ";
    }
    return output;
}
