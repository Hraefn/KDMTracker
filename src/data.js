db.collection('settlements').insertOne ([
	{	name: 'Fuckutopia',
        sLimit: 1,
        sOnDepart: 1,
        currentYear: 1,
        population: 15,
        principleNewLife: 'Protect the Young',
        principleDeath: 'Graves',
        principleSociety: 'Collective Toil',
        principleConviction: 'Barbaric',
        innovations: [
            {   name: 'Language',
                isKnown: true,
                sLimitMod: 1,
                sOnDepartMod: 0,
                sAction: 'Encourage',
                type: 'language',
                consequenceOf: '',
                consequenceAdd: 'language',
                description: 'Basic Innovation'
            },
            {   name: 'Paint',
                isKnown: false,
                sLimitMod: 0,
                sOnDepartMod: 0,
                sAction: 'Dash',
                type: 'art',
                consequenceOf: 'Language',
                consequenceAdd: 'language',
                description: 'Basic Innovation'
            }
        ],
        events: [
            { name: 'Returning Survivors', lanternYear: 1 },
            { name: 'First Story', lanternYear: 1 }
        ],
        resources: [
            { name: 'Broken Lantern', group: 'Basic', type: ['scrap'], quantity: 0 },
            { name: 'Love Juice', group: 'Basic', type: ['organ'], isConsumable: true, quantity: 0 },
            { name: 'Monster Bone', group: 'Basic', type: ['bone'], quantity: 0 },
            { name: 'Monster Hide', group: 'Basic', type: ['hide'], quantity: 0 },
            { name: 'Monster Organ', group: 'Basic', type: ['organ'], isConsumable: true, quantity: 0 },
            { name: 'Skull', group: 'Basic', type: ['bone'], quantity: 0 },
            { name: '???', group: 'Basic', type: ['bone', 'hide', 'organ', 'scrap'], quantity: 0 },
            { name: 'Crab Spider', group: 'Vermin', type: ['hide'], isConsumable: true, quantity: 0 },
            { name: 'Cyclops Fly', group: 'Vermin', isConsumable: true, quantity: 0 },
            { name: 'Hissing Cockroach', group: 'Vermin', isConsumable: true, quantity: 0 },
            { name: 'Lone Art', group: 'Vermin', isConsumable: true, quantity: 0 },
            { name: 'Nghtmare Tick', group: 'Vermin', isConsumable: true, quantity: 0 },
            { name: 'Sword Beetle', group: 'Vermin', isConsumable: true, quantity: 0 },
            { name: '1,000 Year Sunspot', group: 'Strange', type: ['bone', 'organ'], quantity: 0 },
            { name: '3,000 Year Sunspot', group: 'Strange', type: ['bone', 'organ', 'scrap'], quantity: 0 },
            { name: 'Active Thyroid', group: 'Strange', type: ['organ'], isConsumable: true, quantity: 0 },
            { name: 'Blistering Plasma Fruit', group: 'Strange', type: ['organ'], isConsumable: true, quantity: 0 },
            { name: 'Bugfish', group: 'Strange', type: ['flower','organ'], quantity: 0 },
            { name: 'Canopic Jar', group: 'Strange', type: ['organ', 'scrap'], quantity: 0 },
            { name: 'Crimson Vial', group: 'Strange', type: ['iron'], quantity: 0 },
            { name: 'Crystal Sword Mold', group: 'Strange', type: ['iron', 'scrap'], quantity: 0 },
            { name: 'Dark Water', group: 'Strange', quantity: 0 },
            { name: 'Drifting Dream Fruit', group: 'Strange', isConsumable: true, quantity: 0 },
            { name: 'Elder Cat Teeth', group: 'Strange', type: ['bone'], quantity: 0 },
            { name: 'Fresh Acanthus', group: 'Strange', type: ['herb'], quantity: 0 },
            { name: 'Gormite', group: 'Strange', type: ['iron', 'scrap'], quantity: 0 },
            { name: 'Hagfish', group: 'Strange', type: ['bone', 'flower', 'hide'], quantity: 0 },
            { name: 'Iron', group: 'Strange', type: ['scrap'], quantity: 0 },
            { name: 'Jagged Marrow Fruit', group: 'Strange', type: ['bone', 'scrap'], isConsumable: true, quantity: 0 }, 
            { name: 'Jowls', group: 'Strange', type: ['flower', 'iron'], quantity: 0 },
            { name: 'Leather', group: 'Strange', type: ['hide'], quantity: 0 },
            { name: 'Legendary Horns', group: 'Strange', type: ['bone', 'scrap'], quantity: 0 }, 
            { name: 'Lonely Fruit', group: 'Strange', isConsumable: true, quantity: 0 },
            { name: 'Old Blue Box', group: 'Strange', type: ['scrap'], quantity: 0 },
            { name: 'Perfect Crucible', group: 'Strange', type: ['iron'], quantity: 0 },
            { name: 'Phoenix Crest', group: 'Strange', type: ['organ'], quantity: 0 },  
            { name: 'Pituitary Gland', group: 'Strange', type: ['organ'], quantity: 0 },       
            { name: 'Porous Flesh Fruit', group: 'Strange', type: ['hide'], isConsumable: true, quantity: 0 },
            { name: 'Preserved Caustic Dung', group: 'Strange', type: ['organ', 'scrap'], isConsumable: true, quantity: 0 },
            { name: 'Pure Bulb', group: 'Strange', type: ['organ'], quantity: 0 },
            { name: 'Radiant Heart', group: 'Strange', type: ['organ'], quantity: 0 },
            { name: 'Red Vial', group: 'Strange', isConsumable: true, quantity: 0 },
            { name: 'Salt', group: 'Strange', quantity: 0 },
            { name: 'Sarcophagus', group: 'Strange', type: ['iron'], quantity: 0 },
            { name: 'Scell', group: 'Strange', type: ['organ'], isConsumable: true, quantity: 0 },
            { name: 'Second Heart', group: 'Strange', type: ['bone','organ'], quantity: 0 },
            { name: 'Shining Liver', group: 'Strange', type: ['organ'], quantity: 0 },
            { name: 'Silken Nervous System', group: 'Strange', type: ['organ'], quantity: 0 },
            { name: 'Silver Urn', group: 'Strange', type: ['bone', 'scrap'], quantity: 0 },
            { name: 'Stomach Lining', group: 'Strange', type: ['organ'], quantity: 0 },
            { name: 'Sunstones', group: 'Strange', type: ['bone'], quantity: 0 },
            { name: 'Triptych', group: 'Strange', type: ['hide', 'scrap'], quantity: 0 },
            { name: 'Web Silk', group: 'Strange', type: ['silk'], quantity: 0 },
            { name: 'Curious Hand', group: 'White Lion', type: ['hide'], quantity: 0 },
            { name: 'Eye of the Cat', group: 'White Lion', type: ['organ'], isConsumable: true, quantity: 0 },
            { name: 'Golden Whiskers', group: 'White Lion', type: ['organ'], quantity: 0 },
            { name: 'Great Cat Bones', group: 'White Lion', type: ['bone'], quantity: 0 },
            { name: 'Lion Claw', group: 'White Lion', type: ['bone'], quantity: 0 },
            { name: 'Lion Tail', group: 'White Lion', type: ['hide'], quantity: 0 },
            { name: 'Lion Testes', group: 'White Lion', type: ['organ'], isConsumable: true, quantity: 0 },
            { name: 'Shimmering Mane', group: 'White Lion', type: ['hide'], quantity: 0 },
            { name: 'Sinew', group: 'White Lion', type: ['organ'], quantity: 0 },
            { name: 'White Fur', group: 'White Lion', type: ['hide'], quantity: 0 },
            { name: 'Beast Steak', group: 'Screaming Antelope', type: ['organ'], quantity: 0 },
            { name: 'Bladder', group: 'Screaming Antelope', type: ['organ'], quantity: 0 },
            { name: 'Large Flat Tooth', group: 'Screaming Antelope', type: ['bone'], quantity: 0 },
            { name: 'Muscly Gums', group: 'Screaming Antelope', type: ['organ'], quantity: 0 },
            { name: 'Pelt', group: 'Screaming Antelope', type: ['hide'], quantity: 0 },
            { name: 'Screaming Brain', group: 'Screaming Antelope', type: ['organ'], quantity: 0 },
            { name: 'Shank Bone', group: 'Screaming Antelope', type: ['bone'], quantity: 0 },
            { name: 'Spiral Horn', group: 'Screaming Antelope', type: ['bone'], quantity: 0 },
            { name: 'Bird Beak', group: 'Phoenix', type: ['bone'], quantity: 0 },
            { name: 'Black Skull', group: 'Phoenix', type: ['bone', 'iron'], quantity: 0 },
            { name: 'Hollow Wing Bones', group: 'Phoenix', type: ['bone'], quantity: 0 },
            { name: 'Muculent Droppings', group: 'Phoenix', type: ['organ'], quantity: 0 },
            { name: 'Phoenix Eye', group: 'Phoenix', type: ['organ', 'scrap'], quantity: 0 },
            { name: 'Phoenix Finger', group: 'Phoenix', type: ['bone'], quantity: 0 },
            { name: 'Phoenix Whisker', group: 'Phoenix', type: ['hide'], quantity: 0 },
            { name: 'Pustules', group: 'Phoenix', type: ['organ'], quantity: 0 },
            { name: 'Rainbow Droppings', group: 'Phoenix', type: ['organ'], quantity: 0 },
            { name: 'Shimmering Halo', group: 'Phoenix', type: ['organ'], quantity: 0 },
            { name: 'Small Feathers', group: 'Phoenix', type: ['hide'], quantity: 0 },
            { name: 'Small Hand Parasites', group: 'Phoenix', type: ['organ'], quantity: 0 },
            { name: 'Tail Feathers', group: 'Phoenix', type: ['hide'], quantity: 0 },
            { name: 'Wishbone', group: 'Phoenix', type: ['bone'], quantity: 0 },
            { name: 'Cabled Vein', group: 'Dragon King', type: ['organ'], quantity: 0 },
            { name: 'Dragon Iron', group: 'Dragon King', type: ['iron'], quantity: 0 },
            { name: 'Hardened Ribs', group: 'Dragon King', type: ['bone'], quantity: 0 },
            { name: 'Horn Fragments', group: 'Dragon King', type: ['bone'], quantity: 0 },
            { name: 'Husk', group: 'Dragon King', type: ['hide'], quantity: 0 },
            { name: 'Kings Claw', group: 'Dragon King', type: ['bone'], quantity: 0 },
            { name: 'Kings Tongue', group: 'Dragon King', type: ['hide'], quantity: 0 },
            { name: 'Radioactive Dung', group: 'Dragon King', type: ['organ', 'scrap'], quantity: 0 },
            { name: 'Veined Wing', group: 'Dragon King', type: ['hide'], quantity: 0 },
            { name: 'Lantern Bloom', group: 'Flower Knight', type: ['flower', 'hide'], quantity: 0 },
            { name: 'Lantern Bud', group: 'Flower Knight', type: ['flower', 'scrap'], quantity: 0 },
            { name: 'Osseous Bloom', group: 'Flower Knight', type: ['bone', 'flower'], quantity: 0 },
            { name: 'Sighing Bloom', group: 'Flower Knight', type: ['flower', 'organ'], quantity: 0 },
            { name: 'Warbling Bloom', group: 'Flower Knight', type: ['flower', 'hide'], quantity: 0 },
            { name: 'Black Lens', group: 'Sunstalker', type: ['organ'], quantity: 0 },
            { name: 'Brain Root', group: 'Sunstalker', type: ['organ'], quantity: 0 },
            { name: 'Cycloid Scales', group: 'Sunstalker', type: ['hide'], quantity: 0 },
            { name: 'Fertility Tentacle', group: 'Sunstalker', type: ['organ'], quantity: 0 },
            { name: 'Hung Sunteeth', group: 'Sunstalker', type: ['bone'], quantity: 0 },
            { name: 'Inner Shadow Skin', group: 'Sunstalker', type: ['hide'], quantity: 0 },
            { name: 'Prismatic Gills', group: 'Sunstalker', type: ['organ'], quantity: 0 },
            { name: 'Shadow Ink Gland', group: 'Sunstalker', type: ['organ'], quantity: 0 },
            { name: 'Shadow Tentacles', group: 'Sunstalker', type: ['hide', 'organ'], quantity: 0 },  
            { name: 'Shark Tongue', group: 'Sunstalker', type: ['organ'], quantity: 0 },     
            { name: 'Small Sunteeth', group: 'Sunstalker', type: ['bone'], quantity: 0 },
            { name: 'Sting Lung', group: 'Sunstalker', type: ['organ'], quantity: 0 },
            { name: 'Sunshark Blubber', group: 'Sunstalker', type: ['organ'], quantity: 0 },
            { name: 'Sunshark Bone', group: 'Sunstalker', type: ['bone'], quantity: 0 },
            { name: 'Sunshark Fin', group: 'Sunstalker', type: ['bone', 'hide'], quantity: 0 },
            { name: 'Shadow Ink Gland', group: 'Sunstalker', type: ['organ'], quantity: 0 },
            { name: 'Acid Gland', group: 'Gorm', type: ['organ'], quantity: 0 },
            { name: 'Dense Bone', group: 'Gorm', type: ['bone'], quantity: 0 },
            { name: 'Gorm Brains', group: 'Gorm', type: ['organ'], quantity: 0 },
            { name: 'Handed Skull', group: 'Gorm', type: ['bone'], quantity: 0 },
            { name: 'Jiggling Lard', group: 'Gorm', type: ['organ', 'hide'], quantity: 0 },
            { name: 'Mammoth Hand', group: 'Gorm', type: ['bone', 'hide', 'organ'], quantity: 0 },
            { name: 'Meaty Rib', group: 'Gorm', type: ['bone','organ'], quantity: 0 },
            { name: 'Milky Eye', group: 'Gorm', type: ['organ'], quantity: 0 },
            { name: 'Stout Heart', group: 'Gorm', type: ['organ'], quantity: 0 },
            { name: 'Stout Hide', group: 'Gorm', type: ['hide'], quantity: 0 },
            { name: 'Stout Kidney', group: 'Gorm', type: ['organ'], quantity: 0 },
            { name: 'Stout Vertebrate', group: 'Gorm', type: ['bone'], quantity: 0 },
            { name: 'Arachnid Heart', group: 'Spidicules', type: ['organ'], quantity: 0 },
            { name: 'Chitin', group: 'Spidicules', type: ['hide'], quantity: 0 },
            { name: 'Eyeballs', group: 'Spidicules', type: ['organ'], quantity: 0 },
            { name: 'Exoskeleton', group: 'Spidicules', type: ['hide'], quantity: 0 },
            { name: 'Large Appendage', group: 'Spidicules', type: ['bone'], quantity: 0 },
            { name: 'Serrated Fangs', group: 'Spidicules', type: ['bone'], quantity: 0 },
            { name: 'Small Appendages', group: 'Spidicules', type: ['hide'], quantity: 0 },
            { name: 'Spinnerets', group: 'Spidicules', type: ['organ', 'scrap'], quantity: 0 },
            { name: 'Stomach', group: 'Spidicules', type: ['organ'], quantity: 0 },
            { name: 'Thick Web Silk', group: 'Spidicules', type: ['hide', 'silk'], quantity: 0 },
            { name: 'Unlaid Eggs', group: 'Spidicules', type: ['organ'], isConsumable: true, quantity: 0 },
            { name: 'Venom Sac', group: 'Spidicules', type: ['organ'], isConsumable: true, quantity: 0 },
            { name: 'Beetle Horn', group: 'Dung Beetle Knight', type: ['bone'], quantity: 0 },
            { name: 'Century Fingernails', group: 'Dung Beetle Knight', type: ['bone'], quantity: 0 },
            { name: 'Century Shell', group: 'Dung Beetle Knight', type: ['hide', 'iron'], quantity: 0 },
            { name: 'Compound Eye', group: 'Dung Beetle Knight', type: ['organ'], isConsumable: true, quantity: 0 },
            { name: 'Elytra', group: 'Dung Beetle Knight', type: ['bone', 'hide', 'organ'], quantity: 0 },
            { name: 'Scarab Shell', group: 'Dung Beetle Knight', type: ['hide'], quantity: 0 },
            { name: 'Scarab Wing', group: 'Dung Beetle Knight', type: ['organ'], quantity: 0 },
            { name: 'Underplate Fungus', group: 'Dung Beetle Knight', type: ['hide', 'herb'], isConsumable: true, quantity: 0 },
        ],
    }    
])

        gear: [
            { name: 'Cloth Cloth', group: 'Starting Gear', quantity: 0 }, 
            { name: 'Founding Stone', group: 'Starting Gear', quantity: 0 },
            { name: 'Dried Acanthus', group: 'Organ Grinder', quantity: 0 },
            { name: 'Fecal Salve', group: 'Organ Grinder', quantity: 0 },
            { name: 'Lucky Charm', group: 'Organ Grinder', quantity: 0 },
            { name: 'Monster Grease', group: 'Organ Grinder', quantity: 0 },
            { name: 'Monster Tooth Necklace', group: 'Organ Grinder', quantity: 0 },
            { name: 'Stone Noses', group: 'Organ Grinder', quantity: 0 },
            { name: 'Bone Axe', group: 'Bone Smith', quantity: 0 },
            { name: 'Bone Blade', group: 'Bone Smith', quantity: 0 },
            { name: 'Bone Club', group: 'Bone Smith', quantity: 0 },
            { name: 'Bone Dagger', group: 'Bone Smith', quantity: 0 },
            { name: 'Bone Darts', group: 'Bone Smith', quantity: 0 },
            { name: 'Bone Helm', group: 'Bone Smith', quantity: 0 },
            { name: 'Bone Pickaxe', group: 'Bone Smith', quantity: 0 },
            { name: 'Bone Sickel', group: 'Bone Smith', quantity: 0 },
            { name: 'Bandages', group: 'Skinnery', quantity: 0 },
            { name: 'Rawhide Boots', group: 'Skinnery', quantity: 0 },
            { name: 'Rawhide Drums', group: 'Skinnery', quantity: 0 },
            { name: 'Rawhide Gloves', group: 'Skinnery', quantity: 0 },
            { name: 'Rawhide Headband', group: 'Skinnery', quantity: 0 },
            { name: 'Rawhide Pants', group: 'Skinnery', quantity: 0 },
            { name: 'Rawhide Vest', group: 'Skinnery', quantity: 0 },
            { name: 'Rawhide Whip', group: 'Skinnery', quantity: 0 },
            { name: 'Almanac', group: 'Barber Surgeon', quantity: 0 },
            { name: 'Brain Mist', group: 'Barber Surgeon', quantity: 0 },
            { name: 'Bug Trap', group: 'Barber Surgeon', quantity: 0 },
            { name: 'Elder Earrings', group: 'Barber Surgeon', quantity: 0 },
            { name: 'First Aid Kit', group: 'Barber Surgeon', quantity: 0 },
            { name: 'Musk Bomb', group: 'Barber Surgeon', quantity: 0 },
            { name: 'Scavenger Kit', group: 'Barber Surgeon', quantity: 0 },
            { name: 'Speed Power', group: 'Barber Surgeon', quantity: 0 },
            { name: 'Blood Sheath', group: 'Weapon Crafter', quantity: 0 },
            { name: 'Counterweighted Axe', group: 'Weapon Crafter', quantity: 0 },
            { name: 'Finger of God', group: 'Weapon Crafter', quantity: 0 },
            { name: 'Rainbow Katana', group: 'Weapon Crafter', quantity: 0 },
            { name: 'Scrap Dagger', group: 'Weapon Crafter', quantity: 0 },
            { name: 'Scrap Sword', group: 'Weapon Crafter', quantity: 0 },
            { name: 'Skullcap Hammer', group: 'Weapon Crafter', quantity: 0 },
            { name: 'Whistling Mace', group: 'Weapon Crafter', quantity: 0 },
            { name: 'Zanbato', group: 'Weapon Crafter', quantity: 0 },
            { name: 'Hunter Whip', group: 'Leather Worker', quantity: 0 },
            { name: 'Leather Boots', group: 'Leather Worker', quantity: 0 },
            { name: 'Leather Bracers', group: 'Leather Worker', quantity: 0 },
            { name: 'Leather Cuirass', group: 'Leather Worker', quantity: 0 },
            { name: 'Leather Mask', group: 'Leather Worker', quantity: 0 },
            { name: 'Leather Skirt', group: 'Leather Worker', quantity: 0 },
            { name: 'Round Leather Shield', group: 'Leather Worker', quantity: 0 },
            { name: 'Beacon Shield', group: 'Blacksmith', quantity: 0 },
            { name: 'Dragon Slayer', group: 'Blacksmith', quantity: 0 },
            { name: 'Lantern Cuirass', group: 'Blacksmith', quantity: 0 },
            { name: 'Lantern Dagger', group: 'Blacksmith', quantity: 0 },
            { name: 'Lantern Gauntlet', group: 'Blacksmith', quantity: 0 },
            { name: 'Lantern Glaive', group: 'Blacksmith', quantity: 0 },
            { name: 'Lantern Greaves', group: 'Blacksmith', quantity: 0 },
            { name: 'Lantern Helm', group: 'Blacksmith', quantity: 0 },
            { name: 'Lantern Mail', group: 'Blacksmith', quantity: 0 },
            { name: 'Lantern Sword', group: 'Blacksmith', quantity: 0 },
            { name: 'Perfect Slayer', group: 'Blacksmith', quantity: 0 },
            { name: 'Ring Whip', group: 'Blacksmith', quantity: 0 },
            { name: 'Scrap Shield', group: 'Blacksmith', quantity: 0 },
            { name: 'Antelope Mask', group: 'Mask Maker', quantity: 0 },
            { name: 'Death Mask', group: 'Mask Maker', quantity: 0 },
            { name: 'God Mask', group: 'Mask Maker', quantity: 0 },
            { name: 'Man Mask', group: 'Mask Maker', quantity: 0 },
            { name: 'Phoenix Mask', group: 'Mask Maker', quantity: 0 },
            { name: 'White Lion Mask', group: 'Mask Maker', quantity: 0 },
            { name: 'Beast Knuckle', group: 'Stone Circle', quantity: 0 },
            { name: 'Blood Paint', group: 'Stone Circle', quantity: 0 },
            { name: 'Blue Charm', group: 'Stone Circle', quantity: 0 },
            { name: 'Bone Earring', group: 'Stone Circle', quantity: 0 },
            { name: 'Boss Mehndi', group: 'Stone Circle', quantity: 0 },
            { name: 'Green Charm', group: 'Stone Circle', quantity: 0 },
            { name: 'Lance of Longinus', group: 'Stone Circle', quantity: 0 },
            { name: 'Red Charm', group: 'Stone Circle', quantity: 0 },
            { name: 'Screaming Bracers', group: 'Stone Circle', quantity: 0 },
            { name: 'Screaming Coat', group: 'Stone Circle', quantity: 0 },
            { name: 'Screaming Horns', group: 'Stone Circle', quantity: 0 },
            { name: 'Screaming Leg Warmers', group: 'Stone Circle', quantity: 0 },
            { name: 'Screaming Skirt', group: 'Stone Circle', quantity: 0 },
            { name: 'Cat Eye Circlet', group: 'Catarium', quantity: 0 },
            { name: 'Cat Fang Knife', group: 'Catarium', quantity: 0 },
            { name: 'Cat Gut Bow', group: 'Catarium', quantity: 0 },
            { name: 'Claw Head Arrow', group: 'Catarium', quantity: 0 },
            { name: 'Frenzy Drink', group: 'Catarium', quantity: 0 },
            { name: 'King Spear', group: 'Catarium', quantity: 0 },
            { name: 'Lion Beast Katar', group: 'Catarium', quantity: 0 },
            { name: 'Lion Headdress', group: 'Catarium', quantity: 0 },
            { name: 'Lion Skin Cloak', group: 'Catarium', quantity: 0 },
            { name: 'Whisker Harp', group: 'Catarium', quantity: 0 },
            { name: 'White Lion Boots', group: 'Catarium', quantity: 0 },
            { name: 'White Lion Coat', group: 'Catarium', quantity: 0 },
            { name: 'White Lion Gauntlet', group: 'Catarium', quantity: 0 },
            { name: 'White Lion Helm', group: 'Catarium', quantity: 0 },
            { name: 'White Lion Skirt', group: 'Catarium', quantity: 0 },

    ],


    
