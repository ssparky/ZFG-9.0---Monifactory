/** This file handles recipes for Baubley Heart Canisters (BHC) */

ServerEvents.recipes((event) => {
    // Melted heart recipes (removal)
    event.remove({id:'bhc:smelting/red_heart_melted'})
    event.remove({id:'bhc:smelting/yellow_heart_melted'})
    event.remove({id:'bhc:smelting/green_heart_melted'})
    event.remove({id:'bhc:smelting/blue_heart_melted'})

    event.remove({id:'bhc:red_heart_melted_reversed'})
    event.remove({id:'bhc:yellow_heart_melted_reversed'})
    event.remove({id:'bhc:green_heart_melted_reversed'})

    event.remove({id:'bhc:yellow_heart_melted'})
    event.remove({id:'bhc:green_heart_melted'})
    event.remove({id:'bhc:blue_heart_melted'})

    // Misc materials
    event.remove({id:'bhc:canister'})
    event.shaped('bhc:canister', [
        'ABA', 
        'ABA', 
        'ABA'
    ], 
        {
            A: 'gtceu:stainless_steel_plate',
            B: 'minecraft:bone'
        }
    ).id('kubejs:bhc/canister')
    event.remove({id:'bhc:relic_apple'})
    event.shaped('bhc:relic_apple', [
        ' B ', 
        'ACA', 
        ' B '
    ], 
        {
            A: 'gtceu:flawless_diamond_gem',
            B: 'gtceu:flawless_emerald_gem',
            C: 'minecraft:apple'
        }
    ).id('kubejs:bhc/relic_apple')

    // Remove vitality blade
    event.remove({id:'bhc:blade_of_vitality'})

    // Canister recipes
    event.remove({id:'bhc:red_heart_canister'})
    event.remove({input: 'bhc:wither_bone'}) // Double check because it doesnt want to remove for some reason
    event.shapeless('bhc:red_heart_canister', ['bhc:red_heart', 'kubejs:wither_bone', 'bhc:relic_apple', 'bhc:canister']).id('kubejs:bhc/red_heart_canister')

    // Hearts themselves
    event.remove({id:'bhc:red_heart'})
    event.remove({id:'bhc:yellow_heart'})
    event.remove({id:'bhc:green_heart'})
    event.remove({id:'bhc:blue_heart'})
    event.shapeless('bhc:red_heart', ['gtceu:exquisite_ruby_gem', '8x gtceu:red_alloy_dust']).id('kubejs:bhc/red_heart')
    event.shapeless('bhc:yellow_heart', ['gtceu:exquisite_yellow_garnet_gem', '8x gtceu:tungstic_acid_dust']).id('kubejs:bhc/yellow_heart')
    event.shapeless('bhc:green_heart', ['gtceu:exquisite_fluorite_gem', '8x gtceu:incoloy_ma_956_dust']).id('kubejs:bhc/green_heart')
    event.shapeless('bhc:blue_heart', ['gtceu:exquisite_sapphire_gem', '8x gtceu:cryolobus_dust']).id('kubejs:bhc/blue_heart')

    // Soul heart crystal
    event.remove({id:'bhc:soul_heart_crystal'})
    event.shaped('bhc:soul_heart_crystal', [
        'ABA', 
        'BCB', 
        'ABA'
    ], 
        {
            A: 'bhc:blue_heart',
            B: 'bhc:green_heart',
            C: 'gtceu:exquisite_amethyst_gem'
        }
    ).id('kubejs:bhc/soul_heart_crystal')
})
