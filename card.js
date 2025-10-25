const Character = {
    "Anby": ["electric", "Gentle House", "A"], // Rank A
    "Anton": ["electric", "Belobog", "A"], // Rank A 
    "Ben": ["fire", "Belobog", "A"], // Rank A 
    "Billy": ["physical", "Gentle House", "A"], // Rank A 
    "Corin": ["physical", "Victoria", "A"], // Rank A 
    "Nicole": ["ether", "Gentle House", "A"], // Rank A 
    "Soukaku": ["ice", "Section 6", "A"], // Rank A 
    "Ellen": ["ice", "Victoria", "S"], // Rank S
    "Grace": ["electric", "Belobog", "S"], // Rank S 
    "Koleda": ["fire", "Belobog", "S"], // Rank S 
    "Lycaon": ["ice", "Victoria", "S"], // Rank S 
    "Nekomata": ["physical", "Gentle House", "S"], // Rank S 
    "Rina": ["electric", "Victoria", "S"], // Rank S 
    "Soldat 11": ["fire", "Obol", "S"], // Rank S 
    "Lucy": ["fire", "Calydon", "A"], // Rank A 
    "Piper": ["physical", "Calydon", "A"], // Rank A 
    "Zhu Yuan": ["ether", "N.E.P.S", "S"], // Rank S 
    "Qingyi": ["electric", "N.E.P.S", "S"], // Rank S 
    "Jane Doe": ["physical", "N.E.P.S", "S"], // Rank S 
    "Seth": ["electric", "N.E.P.S", "A"], // Rank S 
    "Burnice": ["fire", "Calydon", "S"], // Rank S 
    "Caesar": ["physical", "Calydon", "S"], // Rank S 
    "Lighter": ["fire", "Calydon", "S"], // Rank S 
    "Yanagi": ["electric", "Section 6", "S"], // Rank S 
    "Miyabi": ["ice", "Section 6", "S"], // Rank S 
    "Harumasa": ["electric", "Section 6", "S"], // Rank S 
    "Astra Yao": ["ether", "Stars of Lyra", "S"], // Rank S
    "Evelyn": ["fire", "Stars of Lyra", "S"], // Rank S
    "Soldat 0 - Anby": ["electric", "Silver Squad", "S"], // Rank S
    "Pulchra": ["physical", "Calydon", "A"], // Rank A 
    "Trigger": ["electric", "Obol", "S"], // Rank S
    "Vivian": ["ether", "Mockingbird", "S"], // Rank S
    "Hugo": ["ice", "Mockingbird", "S"], // Rank S
    "Yi Xuan": ["Auric Ink", "Yunkui Summit", "S"], // Rank S
    "Pan Yinhu": ["physical", "Yunkui Summit", "A"], // Rank S
    "Ju Fufu": ["fire", "Yunkui Summit", "S"], // Rank S
    "Yuzuha": ["physical", "Spook Shack", "S"], // Rank S
    "Alice": ["physical", "Spook Shack", "S"], // Rank S
    "Seed": ["electric", "Obol", "S"], // Rank S
    "Orphie": ["fire", "Silver Squad", "S"], // Rank S
    "Manato": ["fire", "Spook Shack", "A"], // Rank S
    "Lucia": ["ether", "Spook Shack", "S"], // Rank S

};
const CharacterCitation = {
    "Anby": "Target Confirmed ? Commencing the operation", 
    "Anton": "Though job ? I got this !",  
    "Ben": "I'm kind of a math nerf, but that doesn't stop me from beating on some thugs.",  
    "Billy": "The Starlight Knights never lose Hahaha !",  
    "Corin": "Can someone like me really manage ?",  
    "Nicole": "A wise choice ! But I should warn you, my services don't come cheap !",  
    "Soukaku": "I'm happy as long as I can always eat my fill.",  
    "Ellen": "Ah, another annoying commission... I should've taken a different shift.", 
    "Grace": "Such sharp and strong lines, truly beautiful...",  
    "Koleda": "I'm Belobog Heavy Industrie's president, Koleda.",  
    "Lycaon": "Your personal attendant Lycaon, at your service.",  
    "Nekomata": "The best mackerel is always the one you haven't eaten yet",  
    "Rina": "Are you the new master ?",  
    "Soldat 11": "I don't care where you've been, but whatever the case, I await my orders.",
    "Lucy":"An honored guest just arrived. Allow me, Lady Lucy, to entrtain you !",  
    "Piper":"Need a lift ? Don't forget to buckle up.",  
    "Zhu Yuan": "Leader of Public Security's Criminal Investigation team, Zhu Yuan, standing by.", 
    "Qingyi": "If you encounter any trouble, please contact New Eridu Public Security.",
    "Jane Doe": "When you find yourself in a sticky situation, try to find your own way out.",
    "Seth":"If you encounter any trouble, please contact New Eridu Public Security.",
    "Burnice":"I come, I see, I crash !",
    "Caesar":"I come, I see, I crash !",
    "Lighter":"I come, I see, I crash !",
    "Yanagi":"All evil must be eradicated. What is 'evil'? That's for us to judge",
    "Miyabi":"All evil must be eradicated. What is 'evil'? That's for us to judge.",
    "Harumasa":"All evil must be eradicated. What is 'evil'? That's for us to judge.",
    "Astra Yao":"Music is magic !", 
    "Evelyn": "Music is magic !",
    "Soldat 0 - Anby": "If Nicole asks, please cover for me.",
    "Pulchra": "I come, I... I'm not saying that out loud.",
    "Trigger": "Grant peace to the living, and speak for the dead",
    "Vivian": "Please forgive me for borrowing your light in the dim night",
    "Hugo": "Please forgive me for borrowing your light in the dim night",
    "Yi Xuan": "Those who enter my sanctuary shall find their troubles lifted",
    "Pan Yinhu": "Those who enter my sanctuary shall find their troubles lifted",
    "Ju Fufu": "Those who enter my sanctuary shall find their troubles lifted",
    "Yuzuha": "Tales of a hundred demons. Endless mysteries await -- Welcome to the Spook Shack !",
    "Alice": "Tales of a hundred demons. Endless mysteries await -- Welcome to the Spook Shack !",
    "Seed": "Grant peace to the living, and speak for the dead.",
    "Orphie": "Grant peace to the living",
    "Manato": "\"Tales of a hundred demons. Endless ...\" Uh, Yuzuha what's the second half again ?",
    "Lucia": "Tales of a hundred demons. Endless mysteries await -- Welcome to the Spook Shack !",
};
const CharacterStuff = {
    // Electro
    "Anby": {
        "W-Engine": [["Demara Battery Mark II", "A"], ["The Restrained", "S"], ["Six Shooter", "A"], ["Precious Fossilized Core", "A"]],
        "Key-Talent": [["Spécial", ">"], ["Ult", "="], ["Normal", ">"], ["Dodge", ""]],
        "Stuff":[["Shockstar Disco", "S", ">"], ["Thunder Metal", "S", ">"], ["Freedom Blues", "S", ""], 
                 ["Thunder Metal", "S", ">"], ["Shockstar Disco", "S", ""]],
        "Bangboo":[["Plugboo", "S"], ["Electroboo", "A"], ["Butler", "S"], ["Amillion", "S"]],
        "Stats":["TC / DC", "ELEC%", "Impact%  /  RE"],
    },

    "Anton": {
        "W-Engine": [["Drill Rig Red Axis", "A"], ["Zanshin Herb Case", "S"], ["The Brimstone", "S"], ["Cannon Rotor", "A"]],
        "Key-Talent": [["Spécial", "="], ["Normal", "="], ["Ult", ">"], ["Dodge", ""]],
        "Stuff":[["Thunder Metal", "S", ">"], ["Woodpecker Electro", "S", ""], 
                 ["Woodpecker Electro", "S", ">"], ["Thunder Metal", "S", ">"], ["Puffer Electro", "S", ""]],
        "Bangboo":[["Safety", "S"], ["Plugboo", "S"], ["Electroboo", "A"]],
        "Stats":["TC / DC", "ELEC% / ATK%", "ATK% / RE"],
    },

    "Grace":{
        "W-Engine": [["Timeweaver", "S"],["Fusion Compiler", "S"], ["Electro Lip Gloss", "A"], ["Weeping Gemini", "A"]],
        "Key-Talent": [["Spécial", ">"], ["Ult", "="], ["Normal", ">"], ["Dodge", ""]],
        "Stuff":[["Freedom Blues", "S", ">"], ["Thunder Metal", "S", ">"], ["Monsoon Funk", "S", ""], 
                 ["Chaos Jazz", "S", ">"],  ["Thunder Metal", "S", ">"], ["Thunder Metal", "S", ""]],
        "Bangboo":[["Plugboo", "S"],["Electroboo", "A"], ["Butler", "S"], ["Sumoboo", "A"]],
        "Stats":["Anomaly", "ELEC% / ATK%", "Anomaly / RE"],
    },

    "Seth":{
        "W-Engine": [["Peacekeeper-Specializ", "A"], ["Spring Embrace", "A"], ["Bunny Band", "A"]],
        "Key-Talent": [["Normal", ">"], ["Spécial", ">"], ["Ult", ">"], ["Dodge", ""]],
        "Stuff":[["Freedom Blues", "S", ">"], ["Thunder Metal", "S", ">"], ["Hormone punk", "S", ""], 
                 ["Chaos Jazz", "S", ">"], ["Thunder Metal", "S", ">"], ["Hormone punk", "S", ""]],
        "Bangboo":[["Plugboo", "S"], ["Officer Cui", "S"]],
        "Stats":["ANOMALY / ATK%", "ELEC% / ATK%", "ANOMALY% / ATK%"],
    },

    "Rina": {
        "W-Engine": [["Weeping Cradle", "S"], ["Reverb Mark II", "B"], ["Unfettered Game Ball", "A"], ["Slice of Time", "A"]],
        "Key-Talent": [["Spécial", "="], ["Ult", ">"], ["Normal", ">"], ["Dodge", ""]],
        "Stuff":[["Freedom Blues", "S", ">"], ["Swing Jazz", "S", ""], 
                 ["Freedom Blues", "S", "="], ["Monsoon Funk", "S", ">"], ["Doom Grindcore", "S", ""]],
        "Bangboo":[["Butler", "S"], ["Booressure", "A"], ["Electroboo", "A"], ["Avocaboo", "A"]],
        "Stats":["Anomaly / ATK%", "PEN", "RE"],
    },

    "Qingyi": {
        "W-Engine": [["Ice-Jade Teapot", "S"], ["The Restrained", "S"], ["Hellfire Gears", "A"]],
        "Key-Talent": [["Normal", ">"], ["Spécial", "="], ["Ult", ">"], ["Dodge", ""]],
        "Stuff":[["Shockstar Disco", "S", ">"], ["Thunder Metal", "S", ""], 
                 ["Thunder Metal", "S", ">"], ["Woodpecker Electro", "S", ">"], ["Doom Grindcore", "S", ""]],
        "Bangboo":[["Plugboo", "S"], ["Officer Cui", "S"], ["Sumoboo", "A"]],
        "Stats":["TC / DC", "ELEC% / ATK%", "Impact%"],
    },

    "Yanagi":{
        "W-Engine": [["Timeweaver", "S"], ["Fusion Compiler", "A"], ["Weeping Gemini", "A"]],
        "Key-Talent": [["Normal", "="], ["Spécial", "="], ["Ult", ">"], ["Dodge", ""]],
        "Stuff":[["Freedom Blues", "S", ">"], ["Chaos Jazz", "S", ">"], ["Thunder Metal", "S", ""], 
                 ["Thunder Metal", "S", ">"],  ["Freedom Blues", "S", ""]],
        "Bangboo":[["Agent Gulliver", "S"],["Plugboo", "S"], ["Electroboo", "A"]],
        "Stats":["Anomaly", "ELEC% / PEN%", "Anomaly"],
    },

    "Harumasa": {
        "W-Engine": [["Zanshin Herb Case", "S"], ["The Brimstone", "S"], ["Marcato Desire", "A"]],
        "Key-Talent": [["Dodge", ">"], ["Normal", ">"], ["Spécial", ">"], ["Ult", ""]],
        "Stuff":[["Thunder Metal", "S", ">"], ["Woodpecker Electro", "S", ""], 
                 ["Woodpecker Electro", "S", ">"], ["Thunder Metal", "S", ">"], ["Hormone punk", "S", ""]],
        "Bangboo":[["Agent Gulliver", "S"], ["Plugboo", "S"], ["Electroboo", "A"]],
        "Stats":["TC / DC", "ELEC%", "ATK%"],
    },

    "Soldat 0 - Anby": {
        "W-Engine": [["Severed Innocence", "S"], ["Heartstring Nocturne", "S"], ["The Brimstone", "S"], ["Marcato Desire", "A"]],
        "Key-Talent": [["Spécial", ">"], ["Normal", ">"], ["Ult", ">"], ["Dodge", ""]],
        "Stuff":[["Shadow Harmony", "S", ""], 
                 ["Woodpecker Electro", "S", ">"], ["Branch & Blade Song", "S", ""]],
        "Bangboo":[["Snap", "S"], ["Knightboo", "A"], ["Plugboo", "S"]],
        "Stats":["TC / DC", "ELEC% / ATK% / PEN%", "ATK%"],
    },
    "Trigger": {
        "W-Engine": [["Spectral Gaze", "S"], ["The Restrained", "S"], ["Ice-Jade Teapot", "S"], ["Steam Oven", "A"]],
        "Key-Talent": [["Normal", ">"], ["Spécial", "="], ["Ult", ">"], ["Soutien", ""]],
        "Stuff":[["Shadow Harmony", "S", ">"], ["Shockstar Disco", "S", ""],
                 ["Woodpecker Electro", "S", ">"], ["Shockstar Disco", "S", ""]],
        "Bangboo":[["Snap", "S"], ["Plugboo", "S"], ["Butler", "S"], ["Booressure", "A"]],
        "Stats":["TC%", "ELEC% / ATK%", "Impact%"],
    },

    "Seed": {
        "W-Engine": [["Cordis Germina", "S"], ["Heartstring Nocturne", "S"], ["Severed Innocence", "S"], ["Marcato Desire", "A"]],
        "Key-Talent": [["Normal", ">"], ["Spécial", "="], ["Ult", ">"], ["Dodge", ""]],
        "Stuff":[["Dawn's Bloom", "S", ">"], ["Woodpecker Electro", "S", ""],
                 ["Woodpecker Electro", "S", ">"], ["Branch & Blade Song", "S", ""]],
        "Bangboo":[["Mercury", "S"]],
        "Stats":["CRIT", "ELECTRO% / ATK% / PEN%", "ATK%"],
    },
    // Physique
    "Billy": {
        "W-Engine": [["Steel Cushion", "S"], ["Starlight Engine Replica", "A"], ["Starlight Engine", "A"], ["Cannon Rotor", "A"] ],
        "Key-Talent": [["Spécial", ">"], ["Ult", "="], ["Normal", ">"], ["Dodge", ""]],
        "Stuff":[["Woodpecker Electro", "S", ">"], ["Puffer Electro", "S", ">"], ["Fanged Metal", "S", ""], 
                 ["Fanged Metal", "S", ">"], ["Branch & Blade Song", "S", ">"], ["Woodpecker Electro", "S", ""]],
        "Bangboo":[["Bangvolver", "S"], ["Luckyboo", "A"], ["Snap", "S"], ],
        "Stats":["TC / DC", "PHYSIQUE% / PEN", "ATK%"],
    },
    "Corin":{
        "W-Engine": [["Housekeeper", "A"], ["Steel Cushion", "S"], ["Cannon Rotor", "A"], ["Starlight Engine", "A"]],
        "Key-Talent": [["Spécial", ">"], ["Normal", ">"], ["Ult", "="], ["Dodge", ""]],
        "Stuff":[["Woodpecker Electro", "S", ">"], ["Fanged Metal", "S", ">"], ["Puffer Electro", "S", ""], 
                 ["Fanged Metal", "S", ">"], ["Monsoon Funk", "S", ""]],
        "Bangboo":[["Snap", "S"], ["Butler", "S"], ["Paperboo", "A"]],
        "Stats":["TC / DC", "PHYSIQUE% / ATK%", "ATK% / RE"],
    },
    "Nekomata": {
        "W-Engine": [["Steel Cushion", "S"], ["The Brimstone", "S"], ["Heartstring Nocturne", "S"], ["Marcato Desire", "A"]],
        "Key-Talent": [["Normal", "="], ["Dodge", ">"], ["Spécial", ">"], ["Ult", ""]],
        "Stuff":[["Fanged Metal", "S", ">"], ["Woodpecker Electro", "S", ">"], ["Puffer Electro", "S", ""], 
                 ["Hormone Punk", "S", ">"], ["Branch & Blade Song", "S", "="], ["Woodpecker Electro", "S", ""]],
        "Bangboo":[["Bangvolver", "S"], ["Paperboo", "A"], ["Snap", "S"], ],
        "Stats":["TC / DC", "PHYSIQUE% / PEN", "ATK% / RE"],
    },
    "Piper": {
        "W-Engine": [["Roaring Ride", "A"], ["Fusion Compiler", "S"], ["Electro Lip Gloss", "A"], ["Rainforest Gourmet", "A"]],
        "Key-Talent": [["Spécial", ">"], ["Ult", ">"], ["Normal", ">"], ["Dodge", ""]],
        "Stuff":[["Freedom Blues", "S", ">"], ["Fanged Metal", "S", ">"], ["Swing Jazz", "S", ""], 
                 ["Chaos Jazz", "S", ">"], ["Fanged Metal", "S", "="], ["Hormone Punk", "S", ""]],
        "Bangboo":[["Bangvolver", "S"], ["Red Moccus", "S"], ],
        "Stats":["Anomaly", "PHYSIQUE% / PEN", "Anomaly / RE"],
    },
    "Caesar": {
        "W-Engine": [["Tusk of Fury", "S"], ["Original Transmorpher", "A"], ["Spring Embrace", "A"],],
        "Key-Talent": [["Spécial", ">"], ["Normal", ">"], ["Ult", ">"], ["Dodge", ""]],
        "Stuff":[["Proto Punk", "S", ">"], ["Freedom Blues", "S", ">"], ["Swing Jazz", "S", ""],
                 ["Shockstar Disco", "S", ">"], ["Swing Jazz", "S", ">"], ["Hormone Punk", "S", ""]],
        "Bangboo":[["Paperboo", "A"], ["Red Moccus", "S"], ["Snap", "S"]],
        "Stats":["Anomaly% / ATK%", "PHYSIQUE% / ATK%", "ATK% / Impact%"],
    },

    "Jane Doe": {
        "W-Engine": [["Sharpened Stinger", "S"], ["Fusion Compiler", "S"], ["Electro Lip Gloss", "A"]],
        "Key-Talent": [["Normal", ">"], ["Dodge", ">"], ["Ult", ">"], ["Spécial", ""]],
        "Stuff":[["Fanged Metal", "S", ">"], ["Freedom Blues", "S", ""], 
                 ["Chaos Jazz", "S", ">"], ["Fanged Metal", "S", ">"], ["Freedom Blues", "S", ""]],
        "Bangboo":[["Bangvolver", "S"], ["Officer Cui", "S"], ["Luckyboo", "A"], ],
        "Stats":["Anomaly", "PHYSIQUE% / ATK%", "Anomaly% "],
    },

    "Pulchra": {
        "W-Engine": [["Blazing Laurel", "S"], ["Box Cutter", "A"], ["Hellfire Gears", "S"], ["Steam Oven", "A"]],
        "Key-Talent": [["Spécial", ">"], ["Soutien", ">"], ["Ult", ">"], ["Normal", ""]],
        "Stuff":[["Shadow Harmony", "S", ">"], ["Proto Punk", "S", ">"], ["Astral Voice", "S", ""],
                 ["Shockstar Disco", "S", ">"], ["Woodpecker Electro", "S", ""]],
        "Bangboo":[["Snap", "S"], ["Red Moccus", "S"], ["Paperboo", "A"], ],
        "Stats":["TC / DC", "PHYSIQUE%", "Impact% "],
    },

    "Pan Yinhu": {
        "W-Engine": [["Tremor Trigram Vessel", "A"], ["Spring Embrace", "A"], ["Tusk of Fury", "S"],],
        "Key-Talent": [["Ult", "="], ["Spécial", ">"], ["Normal", ">"], ["Dodge", ""]],
        "Stuff":[["Astral Voice", "S", ">"], ["Swing Jazz", "S", ""],
                 ["Swing Jazz", "S", ">"], ["Astral Voice", "S", ""]],
        "Bangboo":[["Snap", "S"], ["Paperboo", "A"]],
        "Stats":["CRIT", "ATK%", "RECHARGE > ATK%"],
    },

    "Yuzuha": {
        "W-Engine": [["Metanuki morphosis", "S"], ["Weeping Cradle", "S"], ["Kaboom the Cannon", "A"], ["Bashful Demon", "A"]],
        "Key-Talent": [["Normal", "="], ["Spécial", ">"], ["Ult", ">"], ["Soutien", ""]],
        "Stuff":[["Astral Voice", "S", "="], ["Swing Jazz", "S", ">"], ["Freedom Blues", "S", ""],
                 ["Phaethon’s Melody", "S", ""]],
        "Bangboo":[["Robin", "S"]],
        "Stats":["ATK% > Anomaly%", "ATK", "Maitrise"],
    },

    "Alice": {
        "W-Engine": [["Practiced Perfection", "S"], ["Sharpened Stinger", "S"], ["Fusion Compiler", "S"], ["Weeping Gemini", "A"]],
        "Key-Talent": [["Ult", ">"], ["Normal", "="], ["Spécial", ">>"], ["Dodge", ""]],
        "Stuff":[["Fanged Metal", "S", ">"], ["Hormone Punk", "S", ""],
                 ["Phaethon’s Melody", "S", ">"], ["Puffer Electro", "S", ">"], ["Astral Voice", "S", ""]],
        "Bangboo":[["Butler", "S"], ["Knightboo", "A"], ["Snap", "S"]],
        "Stats":["Adresse", "Physique / PEN%", "Maitrtise"],
    },
    // Glace
    "Ellen": {
        "W-Engine": [["Deep Sea Visitor", "S"], ["The Brimstone", "S"], ["Cannon Rotor", "A"], ["Starlight Engine", "A"]],
        "Key-Talent": [["Spécial", "="], ["Ult", ">"], ["Normal", "="], ["Dodge", ""]],
        "Stuff":[["Polar Metal", "S", ">"], ["Woodpecker Electro", "S", ""], 
                 ["Polar Metal", "S", ">"], ["Puffer Electro", "S", ">"], ["Woodpecker Electro", "S", ""]],
        "Bangboo":[["Sharkboo", "S"], ["Butler", "S"], ["Penguinboo", "A"], ["Bagboo", "A"],],
        "Stats":["TC / DC", "PEN / GLACE%", "ATK%"],
    },
    "Lycaon": {
        "W-Engine": [["The Restrained", "S"],["Ice-Jade Teapot", "S"], ["Blazing Laurel", "S"], ["Six Shooter", "A"]],
        "Key-Talent": [["Normal", "="], ["Spécial", "="], ["Dodge", "="], ["Normal", ""]],
        "Stuff":[["Shockstar Disco", "S", ">"], ["Swing Jazz", "S", ">"], ["Polar Metal", "S", ""], 
                 ["Shockstar disco", "S", ">"], ["Polar Metal", "S", ""]],
        "Bangboo":[["Sharkboo", "S"], ["Penguinboo", "A"], ["Butler", "S"], ["Sumoboo", "A"],],
        "Stats":["TC/DC/Anomalie", "GLACE% / PEN", "Impact%"],
    },
    "Soukaku": {
        "W-Engine": [["Bashful Demon", "A"], ["Reverb Mark II", "B"], ["Slice of Time", "A"], ["Unfettered Game Ball", "A"]],        
        "Key-Talent": [["Normal", "="], ["Spécial", ">"], ["Ult", ">"], ["Dodge", ""]],
        "Stuff":[["Swing Jazz", "S", ">"], ["Freedom Blues", "S", ">"], ["Polar Metal", "S", ""], 
                 ["Polar Metal", "S", ">"], ["Puffer Electro", "S", ">"], ["Shockstar Disco", "S", ""]],
        "Bangboo":[["Sharkboo", "S"], ["Penguinboo", "A"], ["Butler", "S"], ["Booressure", "A"],],
        "Stats":["ATK%", "ATK%", "RE"],
    },
    "Miyabi": {
        "W-Engine": [["Hailstorm Shrine", "S"], ["Fusion Compiler", "S"], ["Electro Lip Gloss", "A"]],
        "Key-Talent": [["Normal", ">"], ["Spécial", ">"], ["Ult", ">"], ["Dodge", ""]],
        "Stuff":[["Branch & Blade Song", "S", ""], 
                 ["Woodpecker Electro", "S", ">"], ["Polar Metal", "S", ">"], ["Hormone Punk", "S", ""]],
        "Bangboo":[["Agent Gulliver", "S"], ["Knightboo", "A"], ["Sharkboo", "S"]],
        "Stats":["TC", "GLACE%", "ATK%"],
    },
    "Hugo": {
        "W-Engine": [["Myriad Eclypse", "S"], ["Deep Sea Visitor", "S"], ["Heartstring Nocturne", "S"], ["Marcato Desire", "A"]],
        "Key-Talent": [["Spécial", "="], ["Ult", ">"], ["Normal", ">>"], ["Dodge", ""]],
        "Stuff":[["Hormone punk", "S", ""], 
                 ["Woodpecker Electro", "S", ">"], ["Polar Metal", "S", ""]],
        "Bangboo":[["Robin", "S"], ["Paperboo", "A"], ["Sharkboo", "S"], ["Penguinboo", "A"],],
        "Stats":["TC / DC", "PEN / GLACE% / ATK%", "ATK%"],
    },
    // Feu
    "Ben": {
        "W-Engine": [["Big Cylinder", "A"], ["Spring Embrace", "S"], ["Identity Base", "B"], ["Original Transmorphe", "A"]],
        "Key-Talent": [["Spécial", ">"], ["Ult", "="], ["Normal", ">"], ["Dodge", ""]],
        "Stuff":[["Soul Rock", "S", ">"], ["Swing Jazz", "S", ">"], ["Twisted Grindcore", "S", ""], 
                 ["Proto Punk", "S", ">"], ["Twisted Grindcore", "S", "="], ["Soul Rock", "S", ""]],
        "Bangboo":[["Rocketboo", "S"], ["Paperboo", "A"], ["Safety", "S"], ],
        "Stats":["DEF%", "DEF%", "RE / Impact%"],
    },
    "Koleda": {
        "W-Engine": [["Hellfire Gears", "S"], ["Blazing Laurel", "S"], ["Six Shooter", "A"]],
        "Key-Talent": [["Normal", "="], ["Spécial", "="], ["Ult", ">"], ["Dodge", ""]],
        "Stuff":[["Shockstar Disco", "S", ">"], ["Inferno Metal", "S", ""], 
                 ["Shockstar disco", "S", ">"], ["Inferno Metal", "S", ""]],
        "Bangboo":[["Rocketboo", "S"], ["Sumoboo", "A"], ["Amillion", "S"], ["Butler", "S"]],
        "Stats":["TC/DC/Anomalie", "FEU% / PEN", "RE"],
    },
    "Lucy": {
        "W-Engine": [["Kaboom the Cannon", "A"], ["Unfettered Game Ball", "A"], ["Reverb Mark II", "B"], ["Weeping Cradle", "S"]],
        "Key-Talent": [["Spécial", "="], ["Ult", ">>"], ["Normal", ">"], ["Dodge", ""]],
        "Stuff":[["Swing Jazz", "S", ""], 
                 ["Hormone Punk", "S", ">"], ["Freedom Blues", "S", ""]],
        "Bangboo":[["Red Moccus", "S"], ["Rocketboo", "S"]],
        "Stats":["TC / DC / ATK%", "ATK%", "RE"],
    },
    "Soldat 11": {
        "W-Engine": [["The Brimstone", "S"], ["Cannon Rotor", "A"], ["Street Superstar", "A"], ["Housekeeper", "A"]],
        "Key-Talent": [["Normal", "="], ["Spécial", ">"], ["Ult", ">"], ["Dodge", ""]],
        "Stuff":[["Inferno Metal", "S", ">"], ["Woodpecker Electro", "S", ">"], ["Hormone Punk", "S", ""], 
                 ["Inferno Metal", "S", ">"], ["Woodpecker Electro", "S", ">"], ["Monsoon Funk", "S", ""]],
        "Bangboo":[["Rocketboo", "S"], ["Butler", "S"], ["Boollseye", "A"], ["Bagboo", "A"]],
        "Stats":["TC / DC", "FEU% / ATK% / PEN", "ATK%"],
    },
    "Burnice": {
        "W-Engine": [["Flamemaker Shaker", "S"], ["Fusion Compiler", "S"], ["Roaring Ride", "A"]],
        "Key-Talent": [["Spécial", "="], ["Soutien", ">"], ["Normal", ">"], ["Ult", ""]],
        "Stuff":[["Chaos Jazz", "S", ">"], ["Freedom Blues", "S", ""], 
                 ["Inferno Metal", "S", ">"], ["Freedom Blues", "S", ">"], ["Hormone punk", "S", ""]],
        "Bangboo":[["Red Moccus", "S"], ["Rocketboo", "S"], ["Cryboo", "A"]],
        "Stats":["ANOMALY", "FEU% / ATK%", "ANOMALY%"],
    },
    "Lighter": {
        "W-Engine": [["Blazing Laurel", "S"], ["Ice-jade teapot", "S"], ["Steam Oven", "A"]],
        "Key-Talent": [["Normal", ">"], ["Spécial", ">"], ["Ult", ">"], ["Dodge", ""]],
        "Stuff":[["Shockstar Disco", "S", ""], 
                 ["Inferno Metal", "S", ">"], ["Hormone Punk", "S", ""],],
        "Bangboo":[["Red Moccus", "S"], ["Rocketboo", "S"], ["Cryboo", "A"]],
        "Stats":["CRIT", "FEU% / ATK%", "Impact%"],
    },

    "Evelyn": {
        "W-Engine": [["Heartstring Nocturne", "S"], ["The Brimstone", "S"], ["Marcato Desire", "A"]],
        "Key-Talent": [["Ult", "="], ["Soutien", ">"], ["Spécial", ">"], ["Normal", ""]],
        "Stuff":[["Woodpecker Electro", "S", "="], ["Hormone Punk", "S", ""], 
                 ["Branch & Blade Song", "S", ">"], ["Inferno Metal", "S", ">"], ["Puffer Electro", "S", ""]],
        "Bangboo":[["Snap", "S"], ["Paperboo", "A"], ["Rocketboo", "S"]],
        "Stats":["CRIT", "PEN% / ATK% / FEU", "ATK%"],
    },

    "Ju Fufu": {
        "W-Engine": [["Roaring Furnace", "S"], ["Blazing Laurel", "S"], ["Precious Fossilized Core", "A"]],
        "Key-Talent": [["Dodge", ">"], ["Spécial", "="], ["Ult", ">"], ["Normal", ""]],
        "Stuff":[["King of the Summit", "S", ""], 
                 ["Astral Voice", "S", ">"], ["Woodpecker Electro", "S", ">"], ["Shockstar Disco", "S", ""]],
        "Bangboo":[["Snap", "S"]],
        "Stats":["ATK%", "ATK%", "Impact% / ATK%"],
    },

    "Orphie": {
        "W-Engine": [["Bellicose ", "S"], ["Heartstring Nocturne", "S"], ["Severed Innocence", "S"], ["Marcato Desire", "A"]],
        "Key-Talent": [["Spécial", ">"], ["Ult", ">>"], ["Dodge", ">"], ["Normal", ""]],
        "Stuff":[["Shadow Harmony", "S", ">"], ["Astral Voice", "S", ""], 
                 ["Swing Jazz", "S", ">"], ["Moonlight Lullaby", "S", ""]],
        "Bangboo":[["Snap", "S"], ["Mercury", "S"]],
        "Stats":["CRIT", "FEU / ATK%", "Recharge % / (ATK%)"],
    },

    "Manato": {
        "W-Engine": [["Grill O’Wisp", "A"], ["Qingming Birdcage", "S"], ["Radiowave Journey", "A"], ["Puzzle Sphere", "A"]],
        "Key-Talent": [["Ult", ">"], ["Spécial", ">"], ["Normal", ">"], ["Soutien", ""]],
        "Stuff":[["Yunkui Tales", "S", ">"], ["Inferno Metal", "S", ""],
                 ["Woodpecker Electro", "S", ">"], ["Inferno Metal", "S", ""]],
        "Bangboo":[["Excaliboo", "S"], ["Miss Esme", "S"]],
        "Stats":["CRIT", "FEU% > PV%", "PV%"],
    },
    // Ether
    "Nicole": {
        "W-Engine": [["The Vault", "A"], ["Weeping Cradle", "S"], ["Unfettered Game Ball", "A"], ["Slice of Time", "A"]],
        "Key-Talent": [["Spécial", ">"], ["Ult", "="], ["Normal", ">"], ["Dodge", ""]],
        "Stuff":[["Chaotic Metal", "S", ">"], ["Freedom Blues", "S", ">"], ["Swing Jazz", "S", ""], 
                 ["Chaotic Metal", "S", ">"], ["Freedom Blues", "S", ">"], ["Woodpecker Electro", "S", ""]],
        "Bangboo":[["Resonaboo", "S"], ["Devilboo", "A"], ["Butler", "S"], ["Booressure", "A"]],
        "Stats":["Anomalie", "Pen / ETHER%", "Maitrise Ano / RE"],
    },
    
    "Zhu Yuan": {
        "W-Engine": [["Riot Suppressor Mark VI", "S"], ["Cannon Rotor", "A"], ["Lunar Decrescent", "B"]],
        "Key-Talent": [["Spécial", ">"], ["Ult", "="], ["Normal", ">"], ["Dodge", ""]],
        "Stuff":[["Woodpecker Electro", "S", ">"], ["Chaotic Metal", "S", ">"], ["Doom Grindcore", "S", ""], 
                 ["Chaotic Metal", "S", "="], ["Woodpecker Electro", "S", ">"], ["Hormone Punk", "S", ""]],
        "Bangboo":[["Resonaboo", "S"], ["Officer Cui", "S"], ["Devilboo", "A"]],
        "Stats":["TC / DC", "ETHER% / ATK%", "ATK%"],
    },

    "Astra Yao": {
        "W-Engine": [["Elegant Vanity", "S"], ["Weeping Cradle", "S"], ["The Vault", "A"], ["Slice of Time", "A"]],
        "Key-Talent": [["Spécial", "="], ["Soutien", ">"], ["Ult", "="], ["Normal", ""]],
        "Stuff":[["Astral Voice", "S", ">"], ["Swing Jazz", "S", ""], 
                 ["Swing Jazz", "S", ">"], ["Hormone Punk", "S", ""]],
        "Bangboo":[["Snap", "S"], ["Resonaboo", "S"], ["Knightboo", "A"], ["Devilboo", "A"]],
        "Stats":["ATK% / Crit", "ATK% / ETHER%", "RE"],
    },

    "Vivian": {
        "W-Engine": [["Flight of Fancy", "S"], ["Timeweaver", "S"], ["Electro Lip Gloss", "A"], ["Weeping Gemini", "A"]],
        "Key-Talent": [["Normal", ">"], ["Spécial", ">"], ["Ult", ">"], ["Dodge", ""]],
        "Stuff":[["Phaethon’s Melody", "S", ""], 
                 ["Chaos Jazz", "S", "="], ["Freedom Blues", "S", ""]],
        "Bangboo":[["Robin", "S"], ["Resonaboo", "S"], ["Booressure", "A"]],
        "Stats":["Anomalie", "ETHER% > ATK% / PEN%", "Maitrise Ano"],
    },

    "Yi Xuan": {
        "W-Engine": [["Qingming Birdcage", "S"], ["Radiowave Journey", "A"], ["Puzzle Sphere", "A"], ["Cinder Cobalt", "B"]],
        "Key-Talent": [["Ult", "="], ["Spécial", ">"], ["Normal", "="], ["Dodge", ""]],
        "Stuff":[["Yunkui Tales", "S", ""], 
                 ["Chaotic Metal", "S", ">"], ["Woodpecker Electro", "S", ">"], ["Branch & Blade Song", "S", ""]],
        "Bangboo":[["Snap", "S"]],
        "Stats":["CRIT", "PV% / ETHER%", "PV%"],
    },

    "Lucia": {
        "W-Engine": [["Dreamlith Earth", "S"], ["Elegant Vanity", "S"], ["Unfettered Game Ball", "A"], ["Weeping Cradle", "S"]],
        "Key-Talent": [["Core", ">"], ["Ult", "="], ["Spécial", ">"], ["Normal", ""]],
        "Stuff":[["Moonlight Lullaby", "S", ""], 
                 ["Woodpecker Electro", "S", ">"], ["Yunkui tales", "S", ""]],
        "Bangboo":[["Snap", "S"]],
        "Stats":["PV%", "PV%", "PV%"],
    }
}

const CharacterTeam = {
    "Anby": [
        [["Rina","Grace"], ["Notre duo va permettre d’augmenter les dégâts de l’équipe de façon considérable et fera bien profiter notre Anby peu importe son build."]],
        [["Anton"], ["Anton s’accorde plutôt bien avec Anby puisque ensemble,  ils étourdissent facilement les ennemis sur leurs chemin tout en infligeant de bons dégâts."]],
    ],

    "Anton": [
        [["Grace"], ["Grace va booster et provoquer les réactions électriques dont Anton pourra profiter aiséments."]],
        [["Rina"], ["Le meilleur support électrique pour notre DPS, La PEN et la recharge qu’elle procure va beaucoup profiter à Anton qui en a besoin."]],
    ],

    "Grace": [
        [["Seth"], ["Une équipe de SHOCK qui se complète et brise les faiblesses électriques aiséments."]],
        [["Rina"], ["Avec sa capacité à déclencher et à renforcer les dégâts des Shocks, Rina complète parfaitement Grace."]],
    ],

    "Rina": [
        [["Anton"], ["Il Bénéficie beaucoup de la présence de Rina pour booster ses dégâts électriques ainsi qu’apporter de la recharge."]],
        [["Grace"], ["Rina multiplie les dégâts de Grace grace à la PEN qu’elle apporte en plus des dégâts bonus aux ennemis électrifiés."]],
    ],

    "Qingyi": [
        [["Zhu Yuan"], ["Zhu Yuan inflige énormément de dégâts supplémentaires aux ennemis étourdis, une tâche que Qingyi remplit facilement. De plus, étant de la même faction, ajouter Officier Cui dans l'équipe devient une bonne idée."]],
        [["Anton"], ["Qingyi étourdit facilement les ennemis, offrant ainsi à Anton l'occasion de faire des dégâts. Plugboo gagne aussi en intérêt lorsqu'il est joué dans cette équipe."]],
    ],

    "Seth": [
        [["Grace"], ["En plus d'être du même type que Seth, Grace est axée sur l'anomalie, que Seth inflige aisément aux ennemis tout en renforçant celle de ses alliés."]],
        [["Jane Doe"], ["Jane bénéficie grandement du bonus d'anomalie que Seth procure.Seth reste indispensable dans son rôle principal, qui est de protéger ses alliés tout en les aidant à appliquer des anomalies aux ennemis."]],
    ],

    "Yanagi": [
        [["Miyabi", "Burnice"], ["Un autre personnage Anomalie ira à merveille pour Yanagi puisqu’elle en a besoin pour fonctionner correctement."]],
        [["Seth"], ["Seth est un bon défenseur qui va permettre à Yanagi de survivre mais surtout de booster ses dégâts d’Anomalie."]],
    ],

    "Billy": [
        [["Anby", "Nicole"], ["Le trio F2P s'avère être plus performant qu'on ne le pense, avec une excellente complémentarité entre ses membres."]],
        [["Corin", "Nekomata"], ["Un allié physique peut s'avérer utile pour compenser les faiblesses de Billy et compléter ses dégâts."]],
    ],

    "Corin": [
        [["Qingyi", "Lycaon"], ["Corin augmente considérablement ses dégâts en attaquant un ennemi immobilisé."]],
        [["Nekomata"], ["Dans ce cas là, c'est surtout Nekomata qui bénéficie grandement de la présence de Corin, bien que cela ne lui déplaise pas non plus."]],
    ],

    "Nekomata": [
        [["Piper", "Lucy"], ["Un duo extrêmement puissant pour accompagner votre Nekomata."]],
        [["Corin", "Billy"], ["Idéal dans une équipe monophysique si vous avez peu d'options !"]],
    ],

    "Piper": [
        [["Lucy"], ["En partageant la même faction que Piper, Lucy résout les problèmes d'équipe tout en offrant un bonus d'attaque constant pour toute l'équipe."]],
        [["Caesar"], ["Caesar complète correctement Piper avec son bouclier apportant un bonus d'attaque. Red moccus devient également une option viable dû à leur faction commune."]],
    ],

    "Jane Doe": [
        [["Seth"], ["Seth complète parfaitement Jane grâce à leur faction commune et à sa capacité à augmenter considérablement l’efficacité de l’anomalie sur les ennemis."]],
        [["Piper"], ["Jane fonctionne très bien avec un autre personnage spécialisé dans l'anomalie physique, faisant de Piper un allié de choix pour elle."]],
    ],

    "Caesar": [
        [["Burnice"], ["Burnice doit échanger souvent pour activer son passif, et Caesar facilite cela. Red Moccus s’intègre bien dans cette équipe"]],
        [["Everyone"], ["Les bonus de Caesar profitent à tous les alliés, qu'ils soient DPS ou utilisateurs d'anomalies. Son bouclier renforce la survie de l'équipe."]],
    ],

    "Ellen": [
        [["Soukaku"], ["Ellen est parfaite avec Soukaku, car son passif se déclenche pleinement grâce au buff de Soukaku, maximisant ainsi ses dégâts."]],
        [["Lycaon"], ["Ellen et Lycaon forment un duo DPS redoutable grâce à leurs étourdissements et leur faction commune, ce qui accroît leurs dégâts de glace."]],
    ],

    "Lycaon": [
        [["Ellen"], ["Ellen complète bien Lycaon grâce à son passif qui augmente considérablement ses dégâts. Sharkboo leur offre également un avantage important."]],
        [["Soukaku"], ["Soukaku et Lycaon forment un duo glacial monstrueux, augmentant mutuellement leurs dégâts et leurs capacités d'étourdissement."]],
    ],

    "Soukaku": [
        [["Ellen"], ["Le passif de Soukakou améliore grandement les dégâts d'Ellen, créant une synergie puissante."]],
        [["Lycaon"], ["Soukaku et Lycaon forment un duo redoutable, augmentant mutuellement leurs dégâts et leurs étourdissements, pour un combo efficace."]],
    ],

    "Ben": [
        [["Koleda"], ["Le kit de Koleda devient beaucoup plus efficace en présence de Ben. Il est donc évident qu'il faut les jouer ensemble si possible."]],
        [["Soldat 11"], ["Grâce aux attaques de Ben qui facilitent les étourdissements, Soldat 11 bénéficie pleinement du soutien de notre nounours !"]],
    ],

    "Koleda": [
        [["Ben"], ["Koleda a besoin de Ben dans l’équipe pour compléter son kit. De plus, leurs passifs s'harmonisent parfaitement. En bref, ils forment un duo flamboyant."]],
        [["Soldat 11"], ["Soldat 11 bénéficie d’une amélioration de ses dégâts lorsque les ennemis sont immobilisés, une tâche que Koleda remplit aisément, la rendant idéale pour ce rôle."]],
    ],

    "Lucy": [
        [["Caesar"], ["Caesar s'accorde plutôt bien avec Lucy puisqu'elle lui apporte de la survivabilité et un bonus d'attaques qui fait toujours plaisir. Le bangboo Red Moccus est une bonne option pour compléter cette équipe"]],
        [["Soldat 11"], ["Lucy renforce Soldat 11 et aide à appliquer des anomalies. Le statut de brûlure qu'elle inflige apporte des dégâts supplémentaires."]],
    ],

    "Soldat 11": [
        [["Ben"], ["Ben est un allié intéressant pour Soldat 11, car il apporte de la défense et aide à étourdir les ennemis."]],
        [["Lucy"], ["Lucy offre de généreux buffs à Soldat 11 et permet de briser aisément les faiblesses au feu, ajoutant ainsi des dégâts supplémentaires."]],
    ],

    "Burnice": [
        [["Yanagi"], ["Burnice a besoin d'un allié qui inflige une anomalie rapidement après un court échange de coups. Yanagi est sur la même longueur d'onde provoquant une synergie efficace qui inflige des dégats plus que correct."]],
        [["Lucy"], ["Lucy, de type Feu et de la même faction, se combine bien avec Burnice en lui apportant une précieuse recharge d'énergie, idéale pour un DPS énergivore."]],
    ],

    "Lighter": [
        [["Ellen", "Soldat 11"], ["Lighter baisse la résistance GLACE/FEU des ennemis et booste les DGTS GLACE/FEU des alliés, permettant donc à Ellen et Soldier 11 de briller de mille feux !"]],
        [["Lucy"], ["Partageant le même type et la même faction, Lucy s’associe bien avec Lighter en offrant une précieuse régénération d’énergie, utile si un DPS énergivore est dans l’équipe."]],
    ],

    "Nicole": [
        [["Zhu Yuan"], ["Quoi de mieux pour notre chère policière qu’une partenaire folle qui augmente facilement les dégâts de votre équipe Ether ?"]],
        [["People"], ["Nicole fonctionne dans n’importe quelle composition d’équipe comme groupeuse AOE."]],
    ],

    "Zhu Yuan": [
        [["Nicole"], ["Zhu Yuan et Nicole s'accordent parfaitement grâce à leur type commun permettant d'appliquer la corruption aisément. De plus, Nicole réduit la rés éther des ennemis."]],
        [["Qingyi"], ["Qingyi complète parfaitement Zhu yuan de par leur faction communes ainsi que l'incroyable efficacité de Qingyi à étourdir les ennemis."]],
    ],

    "Harumasa": [
        [["Qingyi", "Anby"], ["Harusama a besoin d’un allié capable d’étourdir ou appliquer une anomalie à un ennemi. Qingyi / Anby sera donc très utile !"]],
        [["Yanagi", "Burnice"], ["Harusama bénéficie d’un bonus de dégâts conséquents lorsque les ennemis subissent une anomalie. Un allié anomalie est donc un excellent choix."]],
    ],

    "Miyabi": [
        [["Yanagi", "Burnice"], ["Associer Miyabi avec un autre personnage anomalie est une excellente idée pour propulser ses dégâts au plus haut point ! + de disorder permet + de dégâts."]],
        [["Soukaku"], ["Le meilleur support Glace pour un excellent DPS Glace évidemment !"]],
    ],

    "Astra Yao": [
        [["everyone"], ["Astra Yao peut se jouer dans toutes les équipes qui manquent une place puisqu’elle s’allie à la fois aux anomalies ET aux attaquants."]]
    ],

    "Evelyn": [
        [["Lighter"], ["Un incroyable support Feu pour une excellente DPS Feu. Un duo flamboyant tout feu tout flamme"]],
        [["Astra Yao"], ["Evelyn a besoin d’un support dans l’équipe. Comment dire non à la star ?"]],
    ],

    "Soldat 0 - Anby": [
        [["Astra Yao"], ["Le meilleur soutien du jeu pour augmenter ses DGT très facilement."]],
        [["Caesar"], ["Une meilleure résistance à l’interruption ainsi qu’un gros gain d’attaque peuvent faire la différence pour propulser les performances de votre Anby !"]],
    ],

    "Pulchra": [
        [["Soldat 0 - Anby"], ["Pulchra lui apporte énormément grâce à son kit conçu pour booster ses dégâts et infliger de la Confusion de manière proactive."]],
        [["Nekomata"], ["Pour les trois joueurs de Nekomata, vous allez vous amuser !?"]],
    ],

    "Trigger": [
        [["Soldat 0 - Anby"], ["Ces deux personnages se renforcent mutuellement, ce qui rend leur duo particulièrement efficace."]],
        [["Ellen", "Soldat 11"], ["Ces unités ne dépendent pas des effets d’étourdissement pour faire leurs dégâts principaux et ont besoin de stabilité sur le terrain."]],
    ],

    "Vivian": [
        [["Jane Doe"], ["Un duo dévastateur pour exploser les ennemis !"]],
        [["Astra Yao"], ["Ses Tremolos, qui se déclenchent via les Quick Assists, comptent comme des EX Special."]],
    ],

    "Hugo": [
        [["Stun"], ["Hugo a besoin d'allié stunner pour exploser les ennemis avec son attaque ex (ex: Lyacon, Lighter, Trigger)"]],
        [["Astra Yao", "Lucy"], ["Des alternatives viables pour booster à fond l'équipe !"]],
    ],

    "Yi Xuan": [
        [["Pan Yinhu"], ["Le gigachad Panda est capable d’augmenter directement la Force de l’équipe ce qui en fait naturellement votre meilleure option pour Yi Xuan."]],
        [["Astra Yao"], ["Malgré la puissance de Pan, Astra reste une très bonne support pour Yi Xuan grâce à ses nombreux buffs polyvalents."]],
    ],

    "Pan Yinhu": [
        [["Yi Xuan"], ["Le gigachad Panda est capable d’augmenter directement la Force de Yi Xuan d’un grand montant !"]],
        [["Astra Yao"], ["Astra reste excellente au côté de notre Panda pour une combinaison de buff incroyable !"]],
    ],

    "Ju Fufu": [
        [["Yi Xuan"], ["La meilleure allié de Yi Xuan pour le refund d'ultime / les buffs octroyés !"]],
        [["Soldat 0 - Anby"], ["Ju Fufu est un bon remplacement de Trigger / Pulchra"]],
    ],

    "Yuzuha": [
        [["Vivian"], ["Le meilleur duo de supports anomalie du jeu, capable de porter n’importe quel DPS vers la victoire. "]],
        [["everyone"], ["Point faible, trop forte"]],
    ],

    "Alice": [
        [["Yuzuha"], ["Yuzuha est un duo parfait avec Alice. Elle booste l’accumulation d’anomalie, facilite le déclenchement des assauts, et offre de puissants buffs à toute l’équipe."]],
        [["Vivian"], ["Si vous cherchez à faire exploser vos ennemis, associer Vivian à Alice est une excellente idée."]],
    ],

    "Seed": [
        [["Attaquant"], ["N'importe quel attaquant peut fonctionner avec Seed (sauf exception)"]],
        [["Trigger"], ["La meilleure stunneuse off field pour Seed !"]],
    ],

    "Orphie": [
        [["Soldat 0 - Anby"], ["Les buffs qu’Orphie fournit s’appliquent parfaitement à Sanby, qui nécessite beaucoup de temps sur le terrain, cela s’équilibre très bien avec Orphie qui en possède peu"]],
        [["Seed"], ["Le duo Orphie & Seed présente des atouts, mais aussi des limites. Retenez qu'ils sont correct ensemble !"]],
    ],

    "Manato": [
        [["Lucia", "Pan Yinhu"], ["Besoin d’un support rupture ? Ils sont là pour vous !"]],
        [["Astra Yao"], ["Ses buffs sont moins adaptés à Manato comparés à ceux de Lucia, mais restent utiles."]],
    ],

    "Lucia": [
        [["Yi Xuan"], ["Lucia étant l’une des meilleures buffeuses pour les équipes rupture, elle forme une excellente synergie avec Yi Xuan."]],
        [["Yidhari", "Manato"], ["Tout comme pour Yi Xuan, Lucia est un excellent soutien pour Manato et Yidhari."]],
    ],
}
const createINFOGRAPHICS = function(CharacterName){
    console.log(CharacterName)
    let mainDiv = document.getElementById("InfographicID");
    // Ajout du background
    let bg = document.createElement("img");
    bg.classList.add("BG");
    bg.src = `./Characters/${CharacterName}/BG.png`;
    mainDiv.appendChild(bg);
    // Pour adapter la couleur de l'infographique en fonction du type
    const root = ColorDiv(Character[CharacterName][0], Character[CharacterName][1]);
    // Ajout de la colonne de gauche
        let leftDiv = document.createElement("div");
        leftDiv.classList.add("LeftDiv");
        // Ajout du nom
        let h1 = document.createElement("h1");
        h1.classList.add("CharacterName");
        if (CharacterName.length >= 14 ){
            h1.style.fontSize = "1.6em";
        }
        h1.innerHTML = CharacterName;
        leftDiv.appendChild(h1);
        // Ajout de l'image
        let imgCHARACTER = document.createElement("img");
        imgCHARACTER.classList.add("CharacterIMG");
        imgCHARACTER.src = `./Characters/${CharacterName}/Character.webp`;
        // Ajout du type + rareté + gang du personnage
        leftDiv.appendChild(imgCHARACTER);
        let gangDiv = document.createElement("div");
        gangDiv.classList.add("gangDiv");
        gangDiv = addInformation(gangDiv, CharacterName);
        leftDiv.appendChild(gangDiv);
        // Ajout de la citation
        let citationDiv = document.createElement("div");
        citationDiv.classList.add("citationDiv");
        citationDiv.innerHTML = CharacterCitation[CharacterName];
        leftDiv.appendChild(citationDiv);
        // Ajout "s"ur la div principale
        mainDiv.appendChild(leftDiv);
    // Ajout de la colonne de droite
        let rightDiv = document.createElement("div");
        rightDiv.classList.add("RightDiv");
        // Ajout de la premère rangée
        rightDiv.appendChild(firstRow(CharacterName));
        mainDiv.appendChild(rightDiv);
        // Ajout de la seconde rangée
        rightDiv.appendChild(secondRow(CharacterName));
        mainDiv.appendChild(rightDiv);
        // Ajout de la troisième rangée
        rightDiv.appendChild(thirdRow(CharacterName));
        mainDiv.appendChild(rightDiv);
};

function ColorDiv(Type, Gang){
    const root = document.documentElement;
    // Type
    if (Type == "electric"){
        root.style.setProperty('--c1', '#0076fd');
        root.style.setProperty('--c2', '#1ac5fe');
        root.style.setProperty('--opacity', '#0076fd80');
    }
    if (Type == "fire"){
        root.style.setProperty('--c1', '#ef1605');
        root.style.setProperty('--c2', '#ff5719');
        root.style.setProperty('--opacity', '#ef160580');
    }
    if (Type == "physical"){
        root.style.setProperty('--c1', '#dd8a11');
        root.style.setProperty('--c2', '#ffcc0a');
        root.style.setProperty('--opacity', '#dd8a1180');

    }
    if (Type == "ice"){
        root.style.setProperty('--c1', '#00cce7');
        root.style.setProperty('--c2', '#00f7b4');
        root.style.setProperty('--opacity', '#00cce980');

    }
    if (Type == "ether" || Type == "Auric Ink"){
        root.style.setProperty('--c1', '#b73284');
        root.style.setProperty('--c2', '#3e70ff');
        root.style.setProperty('--opacity', '#b7328480');

    }
    // GANG
    if (Gang == "Gentle House"){
        root.style.setProperty('--c3', '#fd638fad');
        root.style.setProperty('--c4', '#8830fead');
    }
    if (Gang == "Belobog"){
        root.style.setProperty('--c3', '#ffc548');
        root.style.setProperty('--c4', '#756659');
    }
    if (Gang == "Section 6"){
        root.style.setProperty('--c3', '#31535a');
        root.style.setProperty('--c4', '#d3ddde');
    }
    if (Gang == "Victoria"){
        root.style.setProperty('--c3', '#807b5b');
        root.style.setProperty('--c4', '#b6b294');
    }
    if (Gang == "Yunkui Summit"){
        root.style.setProperty('--c3', '#807b5b');
        root.style.setProperty('--c4', '#b6b294');
    }
    if (Gang == "Unknown"){
        root.style.setProperty('--c3', '#f1f1f2');
        root.style.setProperty('--c4', '#bebebe');
    }
    return root;
}

const addInformation = function(gangDiv, CharacterName){
    // Ajout du type + rareté + gang du personnage
    let typeIMG = document.createElement("img");
    typeIMG.classList.add("gangIMG");
    typeIMG.style.height = '100%';
    typeIMG.style.marginLeft = '0.5%';
    typeIMG.src = `./type/${Character[CharacterName][0]}.webp`;
    let gangIMG = document.createElement("img");
    gangIMG.classList.add("gangIMG");
    gangIMG.src = `./Gang/${Character[CharacterName][1]}.png`;
    let rarityIMG = document.createElement("img");
    rarityIMG.classList.add("gangIMG");
    rarityIMG.style.height = '100%';
    rarityIMG.style.marginLeft = '0.5%';
    rarityIMG.src = `./rarity/rarity_${Character[CharacterName][2]}.webp`;
    // Ajout du texte du gang
    let gangSpan = document.createElement("span");
    gangSpan.innerHTML = "";
    // Push de tout
    gangDiv.appendChild(gangIMG);
    gangDiv.appendChild(gangSpan);
    gangDiv.appendChild(rarityIMG);
    gangDiv.appendChild(typeIMG);
    return gangDiv
};

const firstRow = function(CharacterName){
    let row = document.createElement("div");
    row.classList.add("row");
    row.style.height = "25%";
    // Création de la cellule W-Engine:
        let cells = document.createElement("div");
        cells.classList.add("cells");
        cells.style.width = "55%"; 
        // Création du titre de la cellule
        let h3 = document.createElement("h3");
        h3.classList.add("nameCells");
        h3.innerHTML = "W-Engine:";
        cells.appendChild(h3);
        // Création des images avec les W-Engines
        let ALLcellsW_Engine = document.createElement("div");
        ALLcellsW_Engine.classList.add("AllW-EngineDiv");
        for (let i = 0; i < CharacterStuff[CharacterName]["W-Engine"].length; i++){
            let cellsW_Engine = document.createElement("div");
            cellsW_Engine.classList.add("W-EngineDiv");
            let img = document.createElement("img");
            img.src = `./W-Engines/${CharacterStuff[CharacterName]["W-Engine"][i][0]}.webp`;
            cellsW_Engine.appendChild(img);
            let h5 = document.createElement("h5");
            h5.innerHTML = CharacterStuff[CharacterName]["W-Engine"][i][0];
            if (CharacterStuff[CharacterName]["W-Engine"][i][1] == "S"){
                h5.style.color = "#d7bc57"; // Couleur rank S
            }
            else if (CharacterStuff[CharacterName]["W-Engine"][i][1] == "A") {
                h5.style.color = "#952fd2"; // Couleur rank A
            }
            else {
                h5.style.color = "#4173bd"; // Couleur rank B
            }
            cellsW_Engine.appendChild(h5);
            ALLcellsW_Engine.appendChild(cellsW_Engine);
        }
        cells.appendChild(ALLcellsW_Engine);
    row.appendChild(cells);
    // Création de la cellule Talent:
        let cellsTalent = document.createElement("div");
        cellsTalent.classList.add("cells");
        cellsTalent.style.width = "35%"; 
        // Création du titre de la cellule
        let V2_h3 = document.createElement("h3");
        V2_h3.classList.add("nameCells");
        V2_h3.innerHTML = "Key Talents:";
        cellsTalent.appendChild(V2_h3);
        // Création des images avec les Talents
        let ALLcellsTalent = document.createElement("div");
        ALLcellsTalent.classList.add("AllTalentDiv");
        for (let i = 0; i < CharacterStuff[CharacterName]["Key-Talent"].length; i++){
            let cellsTalent = document.createElement("div");
            cellsTalent.classList.add("TalentDiv");
            let img = document.createElement("img");
            img.src = `./Talents/${CharacterStuff[CharacterName]["Key-Talent"][i][0]}.webp`;
            cellsTalent.appendChild(img);
            let h5 = document.createElement("h5");
            h5.innerHTML = CharacterStuff[CharacterName]["Key-Talent"][i][0];
            ALLcellsTalent.appendChild(cellsTalent);
            cellsTalent.appendChild(h5);
            let p = document.createElement("p");
            p.innerHTML = CharacterStuff[CharacterName]["Key-Talent"][i][1];
            ALLcellsTalent.appendChild(p);
        } 
        cellsTalent.appendChild(ALLcellsTalent);
    row.appendChild(cellsTalent);
    return row
}

const secondRow = function(CharacterName){
    let row = document.createElement("div");
    row.classList.add("row");
    row.style.height = "40%";
    // Création de la cellule Stuff:
        let cells = document.createElement("div");
        cells.classList.add("cells");
        cells.style.width = "55%"; 
        // Création du titre de la cellule
        let h3 = document.createElement("h3");
        h3.classList.add("nameCells");
        h3.innerHTML = "Stuff:";
        cells.appendChild(h3);
        // Création des images avec les W-Engines
        let number_firstRow = null;
        let number_secondRow = null;
        for (const [index, element] of CharacterStuff[CharacterName]["Stuff"].entries()) {
            if (element[2] == ""){
                if (number_firstRow != null){
                    number_secondRow = index + 1 - number_firstRow
                }
                else{
                    number_firstRow = index + 1
                }
            }
        }
        for (let j = 0; j < 2; j++){
            let number = null;
            if (j == 0){
                number = number_firstRow;
            }
            else{
                number = number_secondRow;
            }
            const ALLcellsDisk = document.createElement("div");
            ALLcellsDisk.classList.add("AllDiskDiv");
            ALLcellsDisk.style.marginLeft = `${7 * (j+1)}%`
                for (let i = 0; i < number; i++){
                    console.log(i)
                    let cellsDisk = document.createElement("div");
                    cellsDisk.classList.add("DiskDiv");
                    let img = document.createElement("img");
                    img.src = `./Disks/${CharacterStuff[CharacterName]["Stuff"][i + (j * number_firstRow)][0]}.png`;
                    cellsDisk.appendChild(img);
                    let h5_V1 = document.createElement("h5")
                    let h5 = document.createElement("h5");
                    if (j == 0){
                        h5_V1.innerHTML = `4PC`;
                        h5.innerHTML = `${CharacterStuff[CharacterName]["Stuff"][i + (j * number_firstRow)][0]}`;
                    }
                    else {
                        h5_V1.innerHTML = `2PC`;
                        h5.innerHTML = `${CharacterStuff[CharacterName]["Stuff"][i + (j * number_firstRow)][0]}`;
                    }
                    if (CharacterStuff[CharacterName]["Stuff"][i + (j * number_firstRow)][1] == "S"){
                        h5_V1.style.color = "#d7bc57";
                        h5.style.color = "#d7bc57"; // Couleur rank S
                    }
                    else if (CharacterStuff[CharacterName]["Stuff"][i + (j * number_firstRow)][1] == "A") {
                        h5_V1.style.color = "#d7bc57";
                        h5.style.color = "#952fd2"; // Couleur rank A
                    }
                    else {
                        h5_V1.style.color = "#d7bc57";
                        h5.style.color = "#4173bd"; // Couleur rank B
                    }
                    cellsDisk.appendChild(h5_V1);
                    cellsDisk.appendChild(h5);
                    ALLcellsDisk.appendChild(cellsDisk);
                    let p = document.createElement("p");
                    p.innerHTML = CharacterStuff[CharacterName]["Stuff"][i + (j * number_firstRow)][2];
                    ALLcellsDisk.appendChild(p);
                }
            cells.appendChild(ALLcellsDisk);
        }
    row.appendChild(cells);
    // Création de la cellule Bangboo & Stats :
        let cellsV2 = document.createElement("div");
        cellsV2.classList.add("cells");
        cellsV2.style.width = "35%"; 
        // Création du titre de la cellule Bangboo
        let h3V2 = document.createElement("h3");
        h3V2.classList.add("nameCells");
        h3V2.innerHTML = "Bangboo:";
        cellsV2.appendChild(h3V2);
        // Création des images avec les W-Engines
        let ALLcellsBangboo = document.createElement("div");
        ALLcellsBangboo.classList.add("AllBangbooDiv");
        for (let i = 0; i < CharacterStuff[CharacterName]["Bangboo"].length; i++){
            let cellsBangboo = document.createElement("div");
            cellsBangboo.classList.add("BangbooDiv");
            let imgV2 = document.createElement("img");
            imgV2.src = `./Bangboo/${CharacterStuff[CharacterName]["Bangboo"][i][0]}.webp`;
            cellsBangboo.appendChild(imgV2);
            let h5 = document.createElement("h5");
            h5.innerHTML = CharacterStuff[CharacterName]["Bangboo"][i][0];
            if (CharacterStuff[CharacterName]["Bangboo"][i][1] == "S"){
                h5.style.color = "#d7bc57"; // Couleur rank S
            }
            else if (CharacterStuff[CharacterName]["Bangboo"][i][1] == "A") {
                h5.style.color = "#952fd2"; // Couleur rank A
            }
            else {
                h5.style.color = "#4173bd"; // Couleur rank B
            }
            cellsBangboo.appendChild(h5);
            ALLcellsBangboo.appendChild(cellsBangboo);
        }
        cellsV2.appendChild(ALLcellsBangboo)
        // Création du titre de la cellule Stats
        let h3V3 = document.createElement("h3");
        h3V3.classList.add("nameCells");
        h3V3.style.marginLeft = "10%"
        h3V3.innerHTML = "Stats:";
        cellsV2.appendChild(h3V3);
        // Création des divs Stats
        const romain = ["IV", "V", "VI"]
        let ALLcellsStats = document.createElement("div");
        ALLcellsStats.classList.add("AllStatsDiv");
        for (let i = 0; i < 3; i++){
            let h4 = document.createElement("h4");
            h4.style.marginLeft = `${19 + (i* 7)}%`
            h4.innerHTML = `${romain[i]}: ${CharacterStuff[CharacterName]["Stats"][i]}`
            if (CharacterStuff[CharacterName]["Stats"][i].length >= 16 ){
                h4.style.fontSize = "0.5em";
            }
            if (CharacterStuff[CharacterName]["Stats"][i].length >= 20 ){
                h4.style.fontSize = "0.4em";
            }
            ALLcellsStats.appendChild(h4)
        }
        cellsV2.appendChild(ALLcellsStats)
    row.appendChild(cellsV2)
    return row
}

const thirdRow = function(CharacterName){
    let row = document.createElement("div");
    row.classList.add("row");
    row.style.height = "30%";
    row.style.marginLeft = "7%";
    row.style.justifyContent = "start";
    // Création de la cellule Stuff:
        let cells = document.createElement("div");
        cells.classList.add("cells");
        cells.style.width = "55%"; 
        // Création du titre de la cellule
        let h3 = document.createElement("h3");
        h3.classList.add("nameCells");
        h3.innerHTML = "Team:";
        cells.appendChild(h3);
        let AllTeam = document.createElement("div");
        AllTeam.classList.add("AllTeam")
        for (let i = 0; i < CharacterTeam[CharacterName].length; i++){
            let TeamDiv = document.createElement("div");
            TeamDiv.classList.add("TeamDiv");
            TeamDiv.style.marginLeft = `${3 + 5 * i}%`
            for (const element of CharacterTeam[CharacterName][i][0]) {
                let img = document.createElement("img");
                img.src = `./emoji/${element} Emoji.webp`;
                TeamDiv.appendChild(img);
            }
            let h5 = document.createElement("h5");
            h5.innerHTML = CharacterTeam[CharacterName][i][1];
            TeamDiv.appendChild(h5)
            AllTeam.appendChild(TeamDiv)
        }
        cells.appendChild(AllTeam)
    row.appendChild(cells)
   
    // Création de l'emoji Youtube:
        let div = document.createElement("div");
        div.classList.add("YoutubeDiv");
        let YoutubeName = document.createElement("div");
        YoutubeName.classList.add("youtubeName")
        YoutubeName.innerHTML = "LeCrapuleux";
        let YoutubeLogo = document.createElement("img");
        YoutubeLogo.classList.add("Youtube");
        YoutubeLogo.src = "./Youtube.png";
        YoutubeName.appendChild(YoutubeLogo);
        div.appendChild(YoutubeName);
        let Emote = document.createElement("img");
        Emote.classList.add("Emote");
        Emote.src = `./Crapuleux/${EmoteRandom()}.png`;
        div.appendChild(Emote)
    row.appendChild(div)

    return row
}

const EmoteRandom = function(){
    const Emoji = ["CrapuleuxDeadInside", "CrapuleuxDumb", "CrapuleuxHappy", "CrapuleuxMad", "CrapuleuxNerd", "CrapuleuxSad"];
    let EmojiRandom = Emoji[Math.floor(Math.random() * Emoji.length)];
    return EmojiRandom
}

createINFOGRAPHICS("Lucia")
// Anby, Anton, Grace, Rina, Qingyi, Harumasa, Soldat 0 - Anby, Trigger, Seed
// Billy, Corin, Nekomata, Piper, Jane Doe, César, Pulchra, Pan Yinhu, Yuzuha, Alice
// Ellen, Lycaon, Soukaku, Lighter, Miyabi
// Ben, Koleda, Lucy, Soldat 11, Burnice, Evelyn, Ju fufu, Orphie, Manato
// Nicole, Zhu Yuan, Astra Yao, Yi Xuan, Lucia
