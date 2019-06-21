//begin define cards as objects
var c0 = {
    cardName: 'The Fool',
    imgSrcUp: '../img/cardimg/00.jpg',
    imgSrcDn: '../img/cardimg/00r.jpg',
    descUp: 'Folly, mania, extravagance, intoxication, delirium, frenzy, bewrayment.',
    descDn: 'Negligence, absence, distribution, carelessness, apathy, nullity, vanity.'
}
var c1 = {
    cardName: 'The Magician',
    imgSrcUp: '../img/cardimg/01.jpg',
    imgSrcDn: '../img/cardimg/01r.jpg',
    descUp: 'Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.',
    descDn: 'Physician, Magus, mental disease, disgrace, disquiet.'
}
var c2 = {
    cardName: 'The High Priestess',
    imgSrcUp: '../img/cardimg/02.jpg',
    imgSrcDn: '../img/cardimg/02r.jpg',
    descUp: 'Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent, if male; the Querent herself, if female; silence, tenacity; mystery, wisdom, science.',
    descDn: 'Passion, moral or physical ardour, conceit, surface knowledge.'
}
var c3 = {
    cardName: 'The Empress',
    imgSrcUp: '../img/cardimg/03.jpg',
    imgSrcDn: '../img/cardimg/03r.jpg',
    descUp: 'Fruitfulness, action, initiative, length of days; the unknown, clandestine; also difficulty, doubt, ignorance.',
    descDn: 'Light, truth, the unravelling of involved matters, public rejoicings; according to another reading, vacillation.'
}
var c4 = {
    cardName: 'The Emperor',
    imgSrcUp: '../img/cardimg/04.jpg',
    imgSrcDn: '../img/cardimg/04r.jpg',
    descUp: 'Stability, power, protection, realization; a great person; aid, reason, conviction; also authority and will.',
    descDn: 'Benevolence, compassion, credit; also confusion to enemies, obstruction, immaturity.'
}
var c5 = {
    cardName: 'The Hierophant',
    imgSrcUp: '../img/cardimg/05.jpg',
    imgSrcDn: '../img/cardimg/05r.jpg',
    descUp: 'Marriage, alliance, captivity, servitude; by another account, mercy and goodness; inspiration; the man to whom the Querent has recourse.',
    descDn: 'Society, good understanding, concord, overkindness, weakness.'
}
var c6 = {
    cardName: 'The Lovers',
    imgSrcUp: '../img/cardimg/06.jpg',
    imgSrcDn: '../img/cardimg/06r.jpg',
    descUp: 'Attraction, love, beauty, trials overcome.',
    descDn: 'Failure, foolish designs. Another account speaks of marriage frustrated and contrarieties of all kinds.'
}
var c7 = {
    cardName: 'The Chariot',
    imgSrcUp: '../img/cardimg/07.jpg',
    imgSrcDn: '../img/cardimg/07r.jpg',
    descUp: 'Succour, providence also war, triumph, presumption, vengeance, trouble.',
    descDn: 'Riot, quarrel, dispute, litigation, defeat.'
}
var c8 = {
    cardName: 'Strength',
    imgSrcUp: '../img/cardimg/08.jpg',
    imgSrcDn: '../img/cardimg/08r.jpg',
    descUp: 'Power, energy, action, courage, magnanimity; also complete success and honours.',
    descDn: 'Despotism, abuse if power, weakness, discord, sometimes even disgrace.'
}
var c9 = {
    cardName: 'The Hermit',
    imgSrcUp: '../img/cardimg/09.jpg',
    imgSrcDn: '../img/cardimg/09r.jpg',
    descUp: 'Prudence, circumspection; also and especially treason, dissimulation, roguery, corruption.',
    descDn: 'Concealment, disguise, policy, fear, unreasoned caution.'
}
var c10 = {
    cardName: 'Fortune',
    imgSrcUp: '../img/cardimg/10.jpg',
    imgSrcDn: '../img/cardimg/10r.jpg',
    descUp: 'Destiny, fortune, success, elevation, luck, felicity.',
    descDn: 'Increase, abundance, superfluity.'
}
var c11 = {
    cardName: 'Justice',
    imgSrcUp: '../img/cardimg/11.jpg',
    imgSrcDn: '../img/cardimg/11r.jpg',
    descUp: 'Equity, rightness, probity, executive; triumph of the deserving side in law.',
    descDn: 'Law in all its departments, legal complications, bigotry, bias, excessive severity.'
}
var c12 = {
    cardName: 'The Hanged Man',
    imgSrcUp: '../img/cardimg/12.jpg',
    imgSrcDn: '../img/cardimg/12r.jpg',
    descUp: 'Wisdom, circumspection, discernment, trials, sacrifice, intuition, divination, prophecy.',
    descDn: 'Selfishness, the crowd, body politic.'
}
var c13 = {
    cardName: 'Death',
    imgSrcUp: '../img/cardimg/13.jpg',
    imgSrcDn: '../img/cardimg/13r.jpg',
    descUp: 'End, mortality, destruction, corruption also, for a man, the loss of a benefactor for a woman, many contrarieties; for a maid, failure of marriage projects.',
    descDn: 'Inertia, sleep, lethargy, petrifaction, somnambulism; hope destroyed.'
}
var c14 = {
    cardName: 'Temperance',
    imgSrcUp: '../img/cardimg/14.jpg',
    imgSrcDn: '../img/cardimg/14r.jpg',
    descUp: 'Economy, moderation, frugality, management, accommodation.',
    descDn: 'Things connected with churches, religions, sects, the priesthood, sometimes even the priest who will marry the Querent; also disunion, unfortunate combinations, competing interests.'
}
var c15 = {
    cardName: 'The Devil',
    imgSrcUp: '../img/cardimg/15.jpg',
    imgSrcDn: '../img/cardimg/15r.jpg',
    descUp: 'Ravage, violence, vehemence, extraordinary efforts, force, fatality; that which is predestined but is not for this reason evil.',
    descDn: 'Evil fatality, weakness, pettiness, blindness.'
}
var c16 = {
    cardName: 'The Tower',
    imgSrcUp: '../img/cardimg/16.jpg',
    imgSrcDn: '../img/cardimg/16r.jpg',
    descUp: 'Misery, distress, indigence, adversity, calamity, disgrace, deception, ruin. It is a card in particular of unforeseen catastrophe.',
    descDn: 'According to one account, the same in a lesser degree also oppression, imprisonment, tyranny.'
}
var c17 = {
    cardName: 'The Star',
    imgSrcUp: '../img/cardimg/17.jpg',
    imgSrcDn: '../img/cardimg/17r.jpg',
    descUp: 'Loss, theft, privation, abandonment; another reading says-hope and bright prospects.',
    descDn: 'Arrogance, haughtiness, impotence.'
}
var c18 = {
    cardName: 'The Moon',
    imgSrcUp: '../img/cardimg/18.jpg',
    imgSrcDn: '../img/cardimg/18r.jpg',
    descUp: 'Hidden enemies, danger, calumny, darkness, terror, deception, occult forces, error.',
    descDn: 'Instability, inconstancy, silence, lesser degrees of deception and error.'
}
var c19 = {
    cardName: 'The Sun',
    imgSrcUp: '../img/cardimg/19.jpg',
    imgSrcDn: '../img/cardimg/19r.jpg',
    descUp: 'Material happiness, fortunate marriage, contentment.',
    descDn: 'Material happiness, fortunate marriage, contentment, but in a lesser sense as when card upright.'
}
var c20 = {
    cardName: 'Judgment',
    imgSrcUp: '../img/cardimg/20.jpg',
    imgSrcDn: '../img/cardimg/20r.jpg',
    descUp: 'Change of position, renewal, outcome. Another account specifies total loss though lawsuit.',
    descDn: 'Weakness, pusillanimity, simplicity; also deliberation, decision, sentence.'
}
var c21 = {
    cardName: 'The World',
    imgSrcUp: '../img/cardimg/21.jpg',
    imgSrcDn: '../img/cardimg/21r.jpg',
    descUp: 'Assured success, recompense, voyage, route, emigration, flight, change of place.',
    descDn: 'Inertia, fixity, stagnation, permanence.'
}
var c22 = {
    cardName: 'Ace of Wands',
    imgSrcUp: '../img/cardimg/22.jpg',
    imgSrcDn: '../img/cardimg/22r.jpg',
    descUp: 'Creation, invention, enterprise, the powers which result in these; principle, beginning, source; birth, family, origin, and in a sense the virility which is behind them; the starting point of enterprises; according to another account, money, fortune, inheritance.',
    descDn: 'Fall, decadence, ruin, perdition, to perish also a certain clouded joy.'
}
var c23 = {
    cardName: 'Two of Wands',
    imgSrcUp: '../img/cardimg/23.jpg',
    imgSrcDn: '../img/cardimg/23r.jpg',
    descUp: 'Between the alternative readings there is no marriage possible; on the one hand, riches, fortune, magnificence; on the other, physical suffering, disease, chagrin, sadness, mortification. The design gives one suggestion; here is a lord overlooking his dominion and alternately contemplating a globe; it looks like the malady, the mortification, the sadness of Alexander amidst the grandeur of this world\'s wealth.',
    descDn: 'Surprise, wonder, enchantment, emotion, trouble, fear.'
}
var c24 = {
    cardName: 'Three of Wands',
    imgSrcUp: '../img/cardimg/24.jpg',
    imgSrcDn: '../img/cardimg/24r.jpg',
    descUp: 'He symbolizes established strength, enterprise, effort, trade, commerce, discovery; those are his ships, bearing his merchandise, which are sailing over the sea. The card also signifies able co-operation in business, as if the successful merchant prince were looking from his side towards yours with a view to help you.',
    descDn: 'The end of troubles, suspension or cessation of adversity, toil and disappointment.'
}
var c25 = {
    cardName: 'Four of Wands',
    imgSrcUp: '../img/cardimg/25.jpg',
    imgSrcDn: '../img/cardimg/25r.jpg',
    descUp: 'They are for once almost on the surface--country life, haven of refuge, a species of domestic harvest-home, repose, concord, harmony, prosperity, peace, and the perfected work of these.',
    descDn: 'The meaning remains unaltered; it is prosperity, increase, felicity, beauty, embellishment.'
}
var c26 = {
    cardName: 'Five of Wands',
    imgSrcUp: '../img/cardimg/26.jpg',
    imgSrcDn: '../img/cardimg/26r.jpg',
    descUp: 'Imitation, as, for example, sham fight, but also the strenuous competition and struggle of the search after riches and fortune. In this sense it connects with the battle of life. Hence some attributions say that it is a card of gold, gain, opulence.',
    descDn: 'Litigation, disputes, trickery, contradiction.'
}
var c27 = {
    cardName: 'Six of Wands',
    imgSrcUp: '../img/cardimg/27.jpg',
    imgSrcDn: '../img/cardimg/27r.jpg',
    descUp: 'The card has been so designed that it can cover several significations; on the surface, it is a victor triumphing, but it is also great news, such as might be carried in state by the King\'s courier; it is expectation crowned with its own desire, the crown of hope, and so forth.',
    descDn: 'Apprehension, fear, as of a victorious enemy at the gate; treachery, disloyalty, as of gates being opened to the enemy; also indefinite delay.'
}
var c28 = {
    cardName: 'Seven of Wands',
    imgSrcUp: '../img/cardimg/28.jpg',
    imgSrcDn: '../img/cardimg/28r.jpg',
    descUp: 'It is a card of valour, for, on the surface, six are attacking one, who has, however, the vantage position. On the intellectual plane, it signifies discussion, wordy strife; in business--negotiations, war of trade, barter, competition. It is further a card of success, for the combatant is on the top and his enemies may be unable to reach him.',
    descDn: 'Perplexity, embarrassments, anxiety. It is also a caution against indecision.'
}
var c29 = {
    cardName: 'Eight of Wands',
    imgSrcUp: '../img/cardimg/29.jpg',
    imgSrcDn: '../img/cardimg/29r.jpg',
    descUp: 'Activity in undertakings, the path of such activity, swiftness, as that of an express messenger; great haste, great hope, speed towards an end which promises assured felicity; generally, that which is on the move; also the arrows of love.',
    descDn: 'Arrows of jealousy, internal dispute, stingings of conscience, quarrels; and domestic disputes for persons who are married.'
}
var c30 = {
    cardName: 'Nine of Wands',
    imgSrcUp: '../img/cardimg/30.jpg',
    imgSrcDn: '../img/cardimg/30r.jpg',
    descUp: 'The card signifies strength in opposition. If attacked, the person will meet an onslaught boldly; and his build shews, that he may prove a formidable antagonist. With this main significance there are all its possible adjuncts--delay, suspension, adjournment.',
    descDn: 'Obstacles, adversity, calamity.'
}
var c31 = {
    cardName: 'Ten of Wands',
    imgSrcUp: '../img/cardimg/31.jpg',
    imgSrcDn: '../img/cardimg/31r.jpg',
    descUp: 'A card of many significances, and some of the readings cannot be harmonized. I set aside that which connects it with honour and good faith. The chief meaning is oppression simply, but it is also fortune, gain, any kind of success, and then it is the oppression of these things. It is also a card of false-seeming, disguise, perfidy. The place which the figure is approaching may suffer from the rods that he carries. Success is stultified if the Nine of Swords follows, and if it is a question of a lawsuit, there will be certain loss.',
    descDn: 'Contrarieties, difficulties, intrigues, and their analogies.'
}
var c32 = {
    cardName: 'Page of Wands',
    imgSrcUp: '../img/cardimg/32.jpg',
    imgSrcDn: '../img/cardimg/32r.jpg',
    descUp: 'Dark young man, faithful, a lover, an envoy, a postman. Beside a man, he will bear favourable testimony concerning him. A dangerous rival, if followed by the Page of Cups. Has the chief qualities of his suit. He may signify family intelligence.',
    descDn: 'Anecdotes, announcements, evil news. Also indecision and the instability which accompanies it.'
}
var c33 = {
    cardName: 'Knight of Wands',
    imgSrcUp: '../img/cardimg/33.jpg',
    imgSrcDn: '../img/cardimg/33r.jpg',
    descUp: 'Departure, absence, flight, emigration. A dark young man, friendly. Change of residence.',
    descDn: 'Rupture, division, interruption, discord.'
}
var c34 = {
    cardName: 'Queen of Wands',
    imgSrcUp: '../img/cardimg/34.jpg',
    imgSrcDn: '../img/cardimg/34r.jpg',
    descUp: 'A dark woman, countrywoman, friendly, chaste, loving, honourable. If the card beside her signifies a man, she is well disposed towards him; if a woman, she is interested in the Querent. Also, love of money, or a certain success in business.',
    descDn: 'Good, economical, obliging, serviceable. Signifies also--but in certain positions and in the neighbourhood of other cards tending in such directions--opposition, jealousy, even deceit and infidelity.'
}
var c35 = {
    cardName: 'King of Wands',
    imgSrcUp: '../img/cardimg/35.jpg',
    imgSrcDn: '../img/cardimg/35r.jpg',
    descUp: 'Dark man, friendly, countryman, generally married, honest and conscientious. The card always signifies honesty, and may mean news concerning an unexpected heritage to fall in before very long.',
    descDn: 'Good, but severe; austere, yet tolerant.'
}
var c36 = {
    cardName: 'Ace of Cups',
    imgSrcUp: '../img/cardimg/36.jpg',
    imgSrcDn: '../img/cardimg/36r.jpg',
    descUp: 'House of the true heart, joy, content, abode, nourishment, abundance, fertility; Holy Table, felicity hereof.',
    descDn: 'House of the false heart, mutation, instability, revolution.'
}
var c37 = {
    cardName: 'Two of Cups',
    imgSrcUp: '../img/cardimg/37.jpg',
    imgSrcDn: '../img/cardimg/37r.jpg',
    descUp: 'Love, passion, friendship, affinity, union, concord, sympathy, the interrelation of the sexes',
    descDn: 'Discord, antipathy (no reverse meaning given by Waite)'
}
var c38 = {
    cardName: 'Three of Cups',
    imgSrcUp: '../img/cardimg/38.jpg',
    imgSrcDn: '../img/cardimg/38r.jpg',
    descUp: 'The conclusion of any matter in plenty, perfection and merriment; happy issue, victory, fulfilment, solace, healing.',
    descDn: 'Expedition, dispatch, achievement, end. It signifies also the side of excess in physical enjoyment, and the pleasures of the senses.'
}
var c39 = {
    cardName: 'Four of Cups',
    imgSrcUp: '../img/cardimg/39.jpg',
    imgSrcDn: '../img/cardimg/39r.jpg',
    descUp: 'Weariness, disgust, aversion, imaginary vexations, as if the wine of this world had caused satiety only; another wine, as if a fairy gift, is now offered the wastrel, but he sees no consolation therein. This is also a card of blended pleasure.',
    descDn: 'Novelty, presage, new instruction, new relations.'
}
var c40 = {
    cardName: 'Five of Cups',
    imgSrcUp: '../img/cardimg/40.jpg',
    imgSrcDn: '../img/cardimg/40r.jpg',
    descUp: 'It is a card of loss, but something remains over; three have been taken, but two are left; it is a card of inheritance, patrimony, transmission, but not corresponding to expectations; with some interpreters it is a card of marriage, but not without bitterness or frustration.',
    descDn: 'News, alliances, affinity, consanguinity, ancestry, return, false projects.'
}
var c41 = {
    cardName: 'Six of Cups',
    imgSrcUp: '../img/cardimg/41.jpg',
    imgSrcDn: '../img/cardimg/41r.jpg',
    descUp: 'A card of the past and of memories, looking back, as--for example--on childhood; happiness, enjoyment, but coming rather from the past; things that have vanished. Another reading reverses this, giving new relations, new knowledge, new environment, and then the children are disporting in an unfamiliar precinct.',
    descDn: 'The future, renewal, that which will come to pass presently.'
}
var c42 = {
    cardName: 'Seven of Cups',
    imgSrcUp: '../img/cardimg/42.jpg',
    imgSrcDn: '../img/cardimg/42r.jpg',
    descUp: 'Fairy favours, images of reflection, sentiment, imagination, things seen in the glass of contemplation; some attainment in these degrees, but nothing permanent or substantial is suggested.',
    descDn: 'Desire, will, determination, project.'
}
var c43 = {
    cardName: 'Eight of Cups',
    imgSrcUp: '../img/cardimg/43.jpg',
    imgSrcDn: '../img/cardimg/43r.jpg',
    descUp: 'The card speaks for itself on the surface, but other readings are entirely antithetical--giving joy, mildness, timidity, honour, modesty. In practice, it is usually found that the card shews the decline of a matter, or that a matter which has been thought to be important is really of slight consequence--either for good or evil.',
    descDn: 'Great joy, happiness, feasting.'
}
var c44 = {
    cardName: 'Nine of Cups',
    imgSrcUp: '../img/cardimg/44.jpg',
    imgSrcDn: '../img/cardimg/44r.jpg',
    descUp: 'Concord, contentment, physical bien-être; also victory, success, advantage; satisfaction for the Querent or person for whom the consultation is made.',
    descDn: 'Truth, loyalty, liberty; but the readings vary and include mistakes, imperfections, etc.'
}
var c45 = {
    cardName: 'Ten of Cups',
    imgSrcUp: '../img/cardimg/45.jpg',
    imgSrcDn: '../img/cardimg/45r.jpg',
    descUp: 'Contentment, repose of the entire heart; the perfection of that state; also perfection of human love and friendship; if with several picture-cards, a person who is taking charge of the Querent\'s interests; also the town, village or country inhabited by the Querent.',
    descDn: 'Repose of the false heart, indignation, violence.'
}
var c46 = {
    cardName: 'Page of Cups',
    imgSrcUp: '../img/cardimg/46.jpg',
    imgSrcDn: '../img/cardimg/46r.jpg',
    descUp: 'Fair young man, one impelled to render service and with whom the Querent will be connected; a studious youth; news, message; application, reflection, meditation; also these things directed to business.',
    descDn: 'Taste, inclination, attachment, seduction, deception, artifice.'
}
var c47 = {
    cardName: 'Knight of Cups',
    imgSrcUp: '../img/cardimg/47.jpg',
    imgSrcDn: '../img/cardimg/47r.jpg',
    descUp: 'Arrival, approach--sometimes that of a messenger; advances, proposition, demeanour, invitation, incitement.',
    descDn: 'Trickery, artifice, subtlety, swindling, duplicity, fraud.'
}
var c48 = {
    cardName: 'Queen of Cups',
    imgSrcUp: '../img/cardimg/48.jpg',
    imgSrcDn: '../img/cardimg/48r.jpg',
    descUp: 'Good, fair woman; honest, devoted woman, who will do service to the Querent; loving intelligence, and hence the gift of vision; success, happiness, pleasure; also wisdom, virtue; a perfect spouse and a good mother.',
    descDn: 'The accounts vary; good woman; otherwise, distinguished woman but one not to be trusted; perverse woman; vice, dishonour, depravity.'
}
var c49 = {
    cardName: 'King of Cups',
    imgSrcUp: '../img/cardimg/49.jpg',
    imgSrcDn: '../img/cardimg/49r.jpg',
    descUp: 'Fair man, man of business, law, or divinity; responsible, disposed to oblige the Querent; also equity, art and science, including those who profess science, law and art; creative intelligence.',
    descDn: 'Dishonest, double-dealing man; roguery, exaction, injustice, vice, scandal, pillage, considerable loss.'
}
var c50 = {
    cardName: 'Ace of Swords',
    imgSrcUp: '../img/cardimg/50.jpg',
    imgSrcDn: '../img/cardimg/50r.jpg',
    descUp: 'Triumph, the excessive degree in everything, conquest, triumph of force. It is a card of great force, in love as well as in hatred. The crown may carry a much higher significance than comes usually within the sphere of fortune-telling.',
    descDn: 'Triumph, the excessive degree in everything, conquest, triumph of force, but the results are disastrous; another account says--conception, childbirth, augmentation, multiplicity.'
}
var c51 = {
    cardName: 'Two of Swords',
    imgSrcUp: '../img/cardimg/51.jpg',
    imgSrcDn: '../img/cardimg/51r.jpg',
    descUp: 'Conformity and the equipoise which it suggests, courage, friendship, concord in a state of arms; another reading gives tenderness, affection, intimacy. The suggestion of harmony and other favourable readings must be considered in a qualified manner, as Swords generally are not symbolical of beneficent forces in human affairs.',
    descDn: 'Imposture, falsehood, duplicity, disloyalty.'
}
var c52 = {
    cardName: 'Three of Swords',
    imgSrcUp: '../img/cardimg/52.jpg',
    imgSrcDn: '../img/cardimg/52r.jpg',
    descUp: 'Removal, absence, delay, division, rupture, dispersion, and all that the design signifies naturally, being too simple and obvious to call for specific enumeration.',
    descDn: 'Mental alienation, error, loss, distraction, disorder, confusion.'
}
var c53 = {
    cardName: 'Four of Swords',
    imgSrcUp: '../img/cardimg/53.jpg',
    imgSrcDn: '../img/cardimg/53r.jpg',
    descUp: 'Vigilance, retreat, solitude, hermit\'s repose, exile, tomb and coffin. It is these last that have suggested the design.',
    descDn: 'Wise administration, circumspection, economy, avarice, precaution, testament.'
}
var c54 = {
    cardName: 'Five of Swords',
    imgSrcUp: '../img/cardimg/54.jpg',
    imgSrcDn: '../img/cardimg/54r.jpg',
    descUp: 'Degradation, destruction, revocation, infamy, dishonour, loss, with the variants and analogues of these.',
    descDn: 'Burial, funeral rites.'
}
var c55 = {
    cardName: 'Six of Swords',
    imgSrcUp: '../img/cardimg/55.jpg',
    imgSrcDn: '../img/cardimg/55r.jpg',
    descUp: 'Journey by water, route, way, envoy, commissionary, expedient.',
    descDn: 'Declaration, confession, publicity; one account says that it is a proposal of love.'
}
var c56 = {
    cardName: 'Seven of Swords',
    imgSrcUp: '../img/cardimg/56.jpg',
    imgSrcDn: '../img/cardimg/56r.jpg',
    descUp: 'Design, attempt, wish, hope, confidence; also quarrelling, a plan that may fail, annoyance. The design is uncertain in its import, because the significations are widely at variance with each other.',
    descDn: 'Good advice, counsel, instruction, slander, babbling.'
}
var c57 = {
    cardName: 'Eight of Swords',
    imgSrcUp: '../img/cardimg/57.jpg',
    imgSrcDn: '../img/cardimg/57r.jpg',
    descUp: 'Bad news, violent chagrin, crisis, censure, power in trammels, conflict, calumny; also sickness.',
    descDn: 'Disquiet, difficulty, opposition, accident, treachery; what is unforeseen; fatality.'
}
var c58 = {
    cardName: 'Nine of Swords',
    imgSrcUp: '../img/cardimg/58.jpg',
    imgSrcDn: '../img/cardimg/58r.jpg',
    descUp: 'Death, failure, miscarriage, delay, deception, disappointment, despair.',
    descDn: 'Imprisonment, suspicion, doubt, reasonable fear, shame.'
}
var c59 = {
    cardName: 'Ten of Swords',
    imgSrcUp: '../img/cardimg/59.jpg',
    imgSrcDn: '../img/cardimg/59r.jpg',
    descUp: 'Whatsoever is intimated by the design; also pain, affliction, tears, sadness, desolation. It is not especially a card of violent death.',
    descDn: 'Advantage, profit, success, favour, but none of these are permanent; also power and authority.'
}
var c60 = {
    cardName: 'Page of Swords',
    imgSrcUp: '../img/cardimg/60.jpg',
    imgSrcDn: '../img/cardimg/60r.jpg',
    descUp: 'Authority, overseeing, secret service, vigilance, spying, examination, and the qualities thereto belonging.',
    descDn: 'The more evil side of these qualities: authority, overseeing, secret service, vigilance, spying, examination. What is unforeseen, the unprepared state, and sickness is also intimated.'
}
var c61 = {
    cardName: 'Knight of Swords',
    imgSrcUp: '../img/cardimg/61.jpg',
    imgSrcDn: '../img/cardimg/61r.jpg',
    descUp: 'Skill, bravery, capacity, defence, address, enmity, wrath, war, destruction, opposition, resistance, ruin. There is therefore a sense in which the card signifies death, but it carries this meaning only in its proximity to other cards of fatality.',
    descDn: 'Imprudence, incapacity, extravagance.'
}
var c62 = {
    cardName: 'Queen of Swords',
    imgSrcUp: '../img/cardimg/62.jpg',
    imgSrcDn: '../img/cardimg/62r.jpg',
    descUp: 'Widowhood, female sadness and embarrassment, absence, sterility, mourning, privation, separation.',
    descDn: 'Malice, bigotry, artifice, prudery, bale, deceit.'
}
var c63 = {
    cardName: 'King of Swords',
    imgSrcUp: '../img/cardimg/63.jpg',
    imgSrcDn: '../img/cardimg/63r.jpg',
    descUp: 'Whatsoever arises out of the idea of judgment and all its connexions-power, command, authority, militant intelligence, law, offices of the crown, and so forth.',
    descDn: 'Cruelty, perversity, barbarity, perfidy, evil intention.'
}
var c64 = {
    cardName: 'Ace of Pentacles',
    imgSrcUp: '../img/cardimg/64.jpg',
    imgSrcDn: '../img/cardimg/64r.jpg',
    descUp: 'Perfect contentment, felicity, ecstasy; also speedy intelligence; gold.',
    descDn: 'The evil side of wealth, bad intelligence.'
}
var c65 = {
    cardName: 'Two of Pentacles',
    imgSrcUp: '../img/cardimg/65.jpg',
    imgSrcDn: '../img/cardimg/65r.jpg',
    descUp: 'On the one hand it is represented as a card of gaiety, recreation and its connexions, which is the subject of the design; but it is read also as news and messages in writing, as obstacles, agitation, trouble, embroilment.',
    descDn: 'Enforced gaiety, simulated enjoyment, literal sense, handwriting, composition, letters of exchange.'
}
var c66 = {
    cardName: 'Three of Pentacles',
    imgSrcUp: '../img/cardimg/66.jpg',
    imgSrcDn: '../img/cardimg/66r.jpg',
    descUp: 'Métier, trade, skilled labour; usually, however, regarded as a card of nobility, aristocracy, renown, glory.',
    descDn: 'Mediocrity, in work and otherwise, puerility, pettiness, weakness.'
}
var c67 = {
    cardName: 'Four of Pentacles',
    imgSrcUp: '../img/cardimg/67.jpg',
    imgSrcDn: '../img/cardimg/67r.jpg',
    descUp: 'The surety of possessions, cleaving to that which one has, gift, legacy, inheritance.',
    descDn: 'Suspense, delay, opposition.'
}
var c68 = {
    cardName: 'Five of Pentacles',
    imgSrcUp: '../img/cardimg/68.jpg',
    imgSrcDn: '../img/cardimg/68r.jpg',
    descUp: 'The card foretells material trouble above all, whether in the form illustrated--that is, destitution--or otherwise. For some cartomancists, it is a card of love and lovers-wife, husband, friend, mistress; also concordance, affinities. These alternatives cannot be harmonized.',
    descDn: 'Disorder, chaos, ruin, discord, profligacy.'
}
var c69 = {
    cardName: 'Six of Pentacles',
    imgSrcUp: '../img/cardimg/69.jpg',
    imgSrcDn: '../img/cardimg/69r.jpg',
    descUp: 'Presents, gifts, gratification another account says attention, vigilance now is the accepted time, present prosperity, etc.',
    descDn: 'Desire, cupidity, envy, jealousy, illusion.'
}
var c70 = {
    cardName: 'Seven of Pentacles',
    imgSrcUp: '../img/cardimg/70.jpg',
    imgSrcDn: '../img/cardimg/70r.jpg',
    descUp: 'These are exceedingly contradictory; in the main, it is a card of money, business, barter; but one reading gives altercation, quarrels--and another innocence, ingenuity, purgation.',
    descDn: 'Cause for anxiety regarding money which it may be proposed to lend.'
}
var c71 = {
    cardName: 'Eight of Pentacles',
    imgSrcUp: '../img/cardimg/71.jpg',
    imgSrcDn: '../img/cardimg/71r.jpg',
    descUp: 'Work, employment, commission, craftsmanship, skill in craft and business, perhaps in the preparatory stage.',
    descDn: 'Voided ambition, vanity, cupidity, exaction, usury. It may also signify the possession of skill, in the sense of the ingenious mind turned to cunning and intrigue.'
}
var c72 = {
    cardName: 'Nine of Pentacles',
    imgSrcUp: '../img/cardimg/72.jpg',
    imgSrcDn: '../img/cardimg/72r.jpg',
    descUp: 'Prudence, safety, success, accomplishment, certitude, discernment.',
    descDn: 'Roguery, deception, voided project, bad faith.'
}
var c73 = {
    cardName: 'Ten of Pentacles',
    imgSrcUp: '../img/cardimg/73.jpg',
    imgSrcDn: '../img/cardimg/73r.jpg',
    descUp: 'Gain, riches; family matters, archives, extraction, the abode of a family.',
    descDn: 'Chance, fatality, loss, robbery, games of hazard; sometimes gift, dowry, pension.'
}
var c74 = {
    cardName: 'Page of Pentacles',
    imgSrcUp: '../img/cardimg/74.jpg',
    imgSrcDn: '../img/cardimg/74r.jpg',
    descUp: 'Application, study, scholarship, reflection another reading says news, messages and the bringer thereof; also rule, management.',
    descDn: 'Prodigality, dissipation, liberality, luxury; unfavourable news.'
}
var c75 = {
    cardName: 'Knight of Pentacles',
    imgSrcUp: '../img/cardimg/75.jpg',
    imgSrcDn: '../img/cardimg/75r.jpg',
    descUp: 'Utility, serviceableness, interest, responsibility, rectitude-all on the normal and external plane.',
    descDn: 'Inertia, idleness, repose of that kind, stagnation; also placidity, discouragement, carelessness.'
}
var c76 = {
    cardName: 'Queen of Pentacles',
    imgSrcUp: '../img/cardimg/76.jpg',
    imgSrcDn: '../img/cardimg/76r.jpg',
    descUp: 'Opulence, generosity, magnificence, security, liberty.',
    descDn: 'Evil, suspicion, suspense, fear, mistrust.'
}
var c77 = {
    cardName: 'King of Pentacles',
    imgSrcUp: '../img/cardimg/77.jpg',
    imgSrcDn: '../img/cardimg/77r.jpg',
    descUp: 'Valour, realizing intelligence, business and normal intellectual aptitude, sometimes mathematical gifts and attainments of this kind; success in these paths.',
    descDn: 'Vice, weakness, ugliness, perversity, corruption, peril.'
}

//end define cards as objects


let deckArray = [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20,
c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43,
c44, c45, c46, c47, c48, c49, c50, c51, c52, c53, c54, c55, c56, c57, c58, c59, c60, c61, c62, c63, c64, c65, c66,
c67, c68, c69, c70, c71, c72, c73, c74, c75, c76, c77];

export default deckArray;



