# SRPG-Growth-Mode

set up in Database -> Config -> Script -> Global Parameters

fixedGrowth: (true/false)
determines whether or not to use fixed growths

zeroGrowth: (true/false)
negates growth rates completely, even having growth bonuses will not increase stats

example
{
	fixedGrowth: true,
	zeroGrowth: false
}

you can change these during gameplay with Event Command -> Event -> Execute Code, and writing "root.getMetaSession().global.customParam = value" following in the box, useful for a prompt at the beginning of the game

examples
root.getMetaSession().global.fixedGrowth = false; // disables fixed growth rates
root.getMetaSession().global.zeroGrowth = true; // enables 0% growths
