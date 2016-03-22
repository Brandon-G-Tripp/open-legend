System.register(["angular"],function(_export){var angular;return{setters:[function(_angular){angular=_angular["default"]}],execute:function(){"use strict";angular.module("app/core/03-wealth-equipment.tpl.html",[]).run(["$templateCache",function($templateCache){$templateCache.put("app/core/03-wealth-equipment.tpl.html",'<h1 id="chapter-3-wealth-equipment">Chapter 3: Wealth &amp; Equipment</h1><p>No story of heroic deeds is complete without equally heroic gear, weapons and armor. Indiana Jones had his whip, King Arthur had <em>Excalibur</em>, and Bilbo had his mithril shirt. In this chapter, you’ll learn everything you need to know about how to equip your character at first level and beyond, as well as how to keep track of your wealth as you capture dragon hoards and seize kingdoms.</p><h2 id="wealth">Wealth</h2><p>Rather than tracking every gold piece, gem, and fine art object that you acquire over the course of your adventures, Open Legend uses a simplified wealth system.</p><p>Every character has a Wealth Score, which begins at 2 and can range from 0 to 9, fluctuating up and down as you acquire and spend your riches. Your wealth score provides a general description of how well-off you are and the typical types of goods and services you can acquire. The Wealth Overview table describes the typical lifestyles and available goods for each Wealth Score.</p><h3 id="acquiring-goods-and-services">Acquiring Goods and Services</h3><p>When you are trying to buy new equipment, construct an inn, or hire a craftsman, your wealth score determines whether you are able. Every good or service is assigned a Wealth Level (either in the rules or by the GM). This level is compared with your Wealth Score in order to determine the cost of acquiring the item, as follows:</p><p>If the good you want to purchase has a level lower than your Wealth Score, you can acquire the item easily without taxing your time and resources.</p><p>If the item’s level is <strong>equal to</strong> your Wealth Score, you can acquire it, but the expense taxes your resources such that you cannot acquire new goods at that level or higher for two weeks.</p><p>If the object of your purchase is <strong>one level higher than</strong> your Wealth Score and your wealth score is above 0, you can acquire it, but the cost is so great that your Wealth Score is reduced by 1.</p><p>You cannot make purchases that are more than one level higher than your Wealth Score.</p><p><strong>The Rule of Common Sense</strong>. Your Wealth Score determines which purchases are possible given the proper circumstances. Obviously, if you are in the middle of a desert, you can’t buy a keg of water even if you have the wealth of an emperor. Likewise, even though you have enough money to raise an army, the GM may rule that you still require the appropriate amount of time, effort, and charisma to convince the soldiers to follow you.</p><div class="table-no-body"></div><table><thead><tr class="header"><th align="left">Wealth Overview</th></tr></thead><tbody><tr class="odd"><td align="left"></td></tr></tbody></table><table style="width:8%;"><colgroup><col width="2%"><col width="2%"><col width="2%"></colgroup><thead><tr class="header"><th align="left">Wealth Score</th><th align="left">Sample Lifestyles</th><th align="left">Sample Goods</th></tr></thead><tbody><tr class="odd"><td align="left">0</td><td align="left">beggar, street urchin</td><td align="left">3 square meals and a warm bed</td></tr><tr class="even"><td align="left">1</td><td align="left">unskilled laborer</td><td align="left">a night on the town, leather armor, simple weapons</td></tr><tr class="odd"><td align="left">2</td><td align="left">skilled laborer, town guardsman, 1st level hero</td><td align="left">martial weapons, scale mail armor, a good horse, a raft</td></tr><tr class="even"><td align="left">3</td><td align="left">master artisan, village mayor</td><td align="left">full plate armor, silver weapons, a small boat, a fine horse</td></tr><tr class="odd"><td align="left">4</td><td align="left">4th level hero, noble, city mayor</td><td align="left">elven full plate, a small ship, a siege engine</td></tr><tr class="even"><td align="left">5</td><td align="left">lord of a realm, thieves’ guild master in a large city</td><td align="left">a large cargo ship, a city wall</td></tr><tr class="odd"><td align="left">6</td><td align="left">7th level hero</td><td align="left">a large warship</td></tr><tr class="even"><td align="left">7</td><td align="left">king</td><td align="left">a stronghold, startup funding for a new town</td></tr><tr class="odd"><td align="left">8</td><td align="left">10th level hero</td><td align="left">startup funding for a new city, an army of 10,000</td></tr><tr class="even"><td align="left">9</td><td align="left">emperor</td><td align="left">a castle, an army of 50,000</td></tr></tbody></table><h3 id="gaining-wealth">Gaining Wealth</h3><p>As you adventure throughout the realm, slay mythic beasts, and win over affluent nobles, your wealth will increase. The GM decides when a character’s wealth increases, and the Wealth Overview table provides a few milestones of typical character Wealth Scores at different levels.</p><p>Typical situations of when the GM would grant you an increase in your Wealth Score include acquiring a large hoard from a monster’s lair, finding a buyer for a great and powerful magical item, or being rewarded by a great ruler.</p><h2 id="carrying-capacity">Carrying Capacity</h2><p><em>Open Legend</em> is about rolling dice, telling epic stories, and having a good time. So the rules for determining how much you can carry are purposefully simplified so that you and your friends can spend your time on what matters: the game.</p><h3 id="twenty-items-max">Twenty Items Max</h3><p>You can carry up to twenty pieces of gear. No more. Only track the items that will actually affect the game. So, no, you don’t need to record your pants and shirt on your character sheet. But, your armor does count.</p><h3 id="maximum-heavy-items-equals-might-score">Maximum <em>Heavy</em> Items Equals Might Score</h3><p>Some items have the <em>heavy</em> property. You can carry a number of <em>heavy</em> items equal to your Might score plus one. Once you’re carrying your maximum number of <em>heavy</em> items, your speed is cut in half.</p><h3 id="one-maybe-two-bulky-items">One (Maybe Two) <em>Bulky</em> Items</h3><p>Some items have the <em>bulky</em> property. You can carry one <em>bulky</em>item at no penalty. You can carry a second <em>bulky</em>item, but your speed is reduced to 5’.</p><h2 id="weapons">Weapons</h2><p>In this section, several tables present the melee and ranged weapons that your character will use in battle. Each table presents several columns of information.</p><p><strong>Wealth Level</strong> is an indication of how expensive the item is to purchase. See the <strong>Wealth</strong> section earlier in this chapter for an explanation of how that works.</p><p><strong>Properties</strong> are the descriptors that make each weapon unique from others. These properties translate to specific game mechanics described below.</p><p><strong>Banes</strong> indicate specific banes that the weapon is particularly effective at inflicting. When an attacker uses the weapon to inflict one of the listed banes, the Challenge Rating to apply the bane is calculated as if the Power Level is reduced by one. The target, however, still resists the bane at the normal Power Level. (For example, a warrior with Might 4 uses a maul to inflict the <em>stun</em>bane. The challenge rating for the warrior to apply the bane is 16, but the target must resist against a challenge rating of 18).</p><h3 id="weapon-properties">Weapon Properties</h3><p><strong>Forceful</strong> – This weapon can be used to make attacks with the Might attribute.</p><p><strong>Heavy</strong> – The weapon is particularly heavy to carry. You may carry a maximum number of <em>heavy</em> items equal to your Might score plus one.</p><p><strong>One-handed</strong> – The weapon uses a single hand and allows the other hand to be used for carrying a shield, second weapon, or kept free for other actions.</p><p><strong>Precise</strong> – This weapon can be used to make attacks with the Agility attribute.</p><p><strong>Range</strong> – This weapon can be used to make ranged attacks with no penalty up to the indicated distance (in feet). Attacks made up to twice the normal range suffer disadvantage 1, and attacks made up to three times the normal range suffer disadvantage 2. Attacks at farther distances cannot be made.</p><p><strong>Reach</strong> – The weapon can be used to attack enemies 10 feet away.</p><p><strong>Swift</strong> – Any time you roll initiative and are wielding or drawing this weapon, you gain an advantage equal to the weapon’s Swift rating to your initiative roll. Remember that initiative is re-rolled each time a new weapon is drawn. If you are wielding multiple weapons, the provided bonus is limited to the lowest among the weapons you wield.</p><p><strong>Two-handed</strong> – The weapon requires two hands to wield and cannot be used with a shield or other weapon. Two-handed melee weapons grant advantage 1 to all attacks; blows delivered with both hands are usually more deadly. Note that ranged attacks do not grant advantage when made with two hands.</p><p><strong>Versatile</strong> – The weapon can be wielded either one-handed or two-handed. The wielder can freely switch between the two modes and has all of the benefits and restrictions of each while using the weapon in that mode.</p><div class="table-no-body"></div><table><thead><tr class="header"><th align="left">Melee Weapons</th></tr></thead><tbody><tr class="odd"><td align="left"></td></tr></tbody></table><table style="width:11%;"><colgroup><col width="2%"><col width="2%"><col width="2%"><col width="2%"></colgroup><thead><tr class="header"><th align="left">Weapon</th><th align="left">Wealth Level</th><th align="left">Properties</th><th align="left">Banes</th></tr></thead><tbody><tr class="odd"><td align="left">Dagger</td><td align="left">1</td><td align="left">Melee, One-handed, Precise, Swift 2, Range 25</td><td align="left">Persistent Damage</td></tr><tr class="even"><td align="left">Longsword</td><td align="left">2</td><td align="left">Melee, Versatile, Forceful, Precise</td><td align="left">–</td></tr><tr class="odd"><td align="left">Unarmed</td><td align="left">-</td><td align="left">One-handed, Forceful, Precise</td><td align="left">–</td></tr><tr class="even"><td align="left">Battle Axe</td><td align="left">2</td><td align="left">Melee, Versatile, Forceful</td><td align="left">–</td></tr><tr class="odd"><td align="left">Spear</td><td align="left">1</td><td align="left">Melee, Two-handed, Reach, Range 35 Forceful, Precise</td><td align="left">–</td></tr><tr class="even"><td align="left">Mace</td><td align="left">1</td><td align="left">Melee, One-handed, Forceful</td><td align="left">Knockdown</td></tr><tr class="odd"><td align="left">Quarterstaff</td><td align="left">1</td><td align="left">Melee, Two-handed, Reach, Forceful, Precise</td><td align="left">Knockdown</td></tr><tr class="even"><td align="left">Flail</td><td align="left">2</td><td align="left">Melee, Two-handed, Forceful, Precise</td><td align="left">Knockdown, Immobile, Forced Move</td></tr><tr class="odd"><td align="left">Hatchet</td><td align="left">1</td><td align="left">Melee, One-handed, Range 25, Swift 1, Forceful, Precise</td><td align="left">–</td></tr><tr class="even"><td align="left">Scimitar</td><td align="left">2</td><td align="left">Melee, Versatile, Precise, Swift 1</td><td align="left">–</td></tr><tr class="odd"><td align="left">Short Sword</td><td align="left">2</td><td align="left">Melee, One-handed, Precise, Swift 1</td><td align="left">Slowed</td></tr><tr class="even"><td align="left">Warhammer</td><td align="left">2</td><td align="left">Melee, One-Handed, Forceful</td><td align="left">Knockdown</td></tr><tr class="odd"><td align="left">Maul</td><td align="left">2</td><td align="left">Melee, Forceful, Two-handed, Heavy</td><td align="left">Knockdown, Forced Move, Stunned</td></tr><tr class="even"><td align="left">Glaive</td><td align="left">2</td><td align="left">Melee, Two-handed, Reach, Forceful, Precise</td><td align="left">Knockdown, Immobile</td></tr><tr class="odd"><td align="left">Greataxe</td><td align="left">2</td><td align="left">Melee, Two-handed, Forceful, Heavy</td><td align="left">Knockdown, Forced Move</td></tr><tr class="even"><td align="left">Greatsword</td><td align="left">2</td><td align="left">Melee, Two-handed, Forceful, Precise, Heavy</td><td align="left">Knockdown, Forced Move</td></tr></tbody></table><div class="table-no-body"></div><table><thead><tr class="header"><th align="left">Ranged Weapons</th></tr></thead><tbody><tr class="odd"><td align="left"></td></tr></tbody></table><table><thead><tr class="header"><th align="left">Weapon</th><th align="left">Wealth Level</th><th align="left">Properties</th><th align="left">Banes</th></tr></thead><tbody><tr class="odd"><td align="left">Crossbow</td><td align="left">2</td><td align="left">Two-handed, Range 50, Precise</td><td align="left">Slowed</td></tr><tr class="even"><td align="left">Hand Crossbow</td><td align="left">2</td><td align="left">One-handed, Range 35, Precise, Swift 1</td><td align="left">Slowed</td></tr><tr class="odd"><td align="left">Longbow</td><td align="left">2</td><td align="left">Two-handed, Range 100, Precise</td><td align="left">Slowed</td></tr><tr class="even"><td align="left">Shortbow</td><td align="left">1</td><td align="left">Two-handed, Range 50, Precise, Swift 1</td><td align="left">Slowed</td></tr></tbody></table><h2 id="armor">Armor</h2><p>Armor reduces or negates the damage that your character would suffer from attacks by adding to your evasion and toughness defense scores. The Armor table summarizes the following properties of each type of armor:</p><p><strong>Required Fortitude</strong> lists the minimum Fortitude attribute score that a character requires in order to wear the armor.</p><p>The <strong>Heavy</strong> column specifies whether or not the armor has the <em>heavy</em> property. Your character can carry a maximum number of <em>heavy</em> items equal to his Might score plus one.</p><p><strong>Defense Bonus</strong> indicates the bonus that your character gains to both his evasion and toughness defenses.</p><p><strong>Move Penalty</strong>indicates the reduction in speed that your character suffers due to the bulkiness and weight of the armor.</p><p>Donning and removing armor takes a number of minutes equal to the total armor bonus. Sleeping in armor is only possible with special training. Without the Armor Mastery feat, sleeping in armor causes your character to gain one level of fatigue, which applies disadvantage 1 to all action rolls until he gets a proper night’s rest.</p><div class="table-no-body"></div><table><thead><tr class="header"><th align="left">Armor</th></tr></thead><tbody><tr class="odd"><td align="left"></td></tr></tbody></table><table><thead><tr class="header"><th align="left">Armor</th><th align="left">Wealth Level</th><th align="left">Required Fortitude</th><th align="left">Heavy</th><th align="left">Defense Bonus</th><th align="left">Move Penalty</th></tr></thead><tbody><tr class="odd"><td align="left">Small Shield^</td><td align="left">1</td><td align="left">1</td><td align="left">no</td><td align="left">1</td><td align="left">0</td></tr><tr class="even"><td align="left">Large Shield^</td><td align="left">1</td><td align="left">3</td><td align="left">yes</td><td align="left">2</td><td align="left">0</td></tr><tr class="odd"><td align="left">Leather</td><td align="left">1</td><td align="left">0</td><td align="left">no</td><td align="left">2</td><td align="left">0</td></tr><tr class="even"><td align="left">Chain Shirt</td><td align="left">2</td><td align="left">2</td><td align="left">no</td><td align="left">3</td><td align="left">0</td></tr><tr class="odd"><td align="left">Scale Shirt</td><td align="left">2</td><td align="left">2</td><td align="left">yes</td><td align="left">4</td><td align="left">0</td></tr><tr class="even"><td align="left">Chainmail</td><td align="left">2</td><td align="left">3</td><td align="left">yes</td><td align="left">5</td><td align="left">5’</td></tr><tr class="odd"><td align="left">Scale Mail</td><td align="left">2</td><td align="left">4</td><td align="left">yes</td><td align="left">6</td><td align="left">5’</td></tr><tr class="even"><td align="left">Plate Mail</td><td align="left">3</td><td align="left">5</td><td align="left">yes</td><td align="left">7</td><td align="left">10’</td></tr><tr class="odd"><td align="left">Elven Plate Mail</td><td align="left">4</td><td align="left">3</td><td align="left">yes</td><td align="left">7</td><td align="left">5’</td></tr></tbody></table><p><strong>^</strong> Grants advantage when using the defend or deflect actions.</p><h2 id="adventuring-gear">Adventuring Gear</h2><div class="table-no-body"></div><table><thead><tr class="header"><th align="left">Adventuring Gear</th></tr></thead><tbody><tr class="odd"><td align="left"></td></tr></tbody></table><table><thead><tr class="header"><th align="left">Gear</th><th align="left">Wealth Level</th><th align="left">Properties</th></tr></thead><tbody><tr class="odd"><td align="left">Adventurer’s Pack</td><td align="left">1</td><td align="left">bulky</td></tr><tr class="even"><td align="left">Healer’s Pack</td><td align="left">1</td><td align="left">bulky</td></tr><tr class="odd"><td align="left">Mage’s Pack</td><td align="left">1</td><td align="left">bulky</td></tr><tr class="even"><td align="left">Rogue’s Pack</td><td align="left">1</td><td align="left">bulky</td></tr></tbody></table><p><strong>Gear Packs.</strong> The following packs are well-contained and efficiently stored, counting as only one item in your inventory. Each pack contains an assortment of specialized gear.</p><p><strong>Adventurer’s Pack</strong> - bedroll, personal tent, 2 weeks rations, 3 days water, hammer, 6 pitons, 50’ rope, grappling hook, flint and steel, 10 torches.</p><p><strong>Healer’s Pack</strong> - bedroll, 2 weeks rations, 6 days water, bandages, herbs, mortar and pestle, 25’ rope, 3 flasks oil, flint and steel, lantern.</p><p><strong>Mage’s Pack</strong> bedroll, 1 weeks rations, 3 days water, parchment, quill, ink, box of chalk, pouch of sand, 5 empty vials, 5 candles, flint and steel.</p><p><strong>Rogue’s Pack</strong> - bedroll, 1 weeks rations, 3 days water, lockpicks, trap kit, bag of marbles, small mirror, 50’ rope, grappling hook, crowbar, flint and steel, 5 torches.</p>')}])}}});