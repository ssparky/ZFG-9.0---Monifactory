/** This file covers recipes for any mod that adds artifacts, relics, or other such curios */
ServerEvents.recipes((event) => {
    // Umbrella
    event.recipes.gtceu.assembler('artifacts:umbrella')
        .itemInputs('2x minecraft:stick', '4x redeco:white_upholstery', '4x redeco:red_upholstery')
        .itemOutputs('artifacts:umbrella')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)
    // Plastic Drinking Hat
    event.recipes.gtceu.assembler('artifacts:plastic_drinking_hat')
        .itemInputs('2x gtceu:empty_spray_can', '6x gtceu:polyvinyl_chloride_plate', '2x gtceu:polyethylene_tiny_fluid_pipe')
        .itemOutputs('artifacts:plastic_drinking_hat')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)
    // Noveltry Drinking Hat
    event.recipes.gtceu.assembler('artifacts:novelty_drinking_hat')
        .itemInputs('2x gtceu:red_dye_spray_can', '6x gtceu:polyvinyl_chloride_plate', '2x gtceu:polyethylene_tiny_fluid_pipe', '3x #forge:dyes/blue', '#forge:dyes/red', '#forge:dyes/white')
        .itemOutputs('artifacts:novelty_drinking_hat')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)
    // Snorkel
    event.recipes.gtceu.assembler('artifacts:snorkel')
        .itemInputs('4x gtceu:polyvinyl_chloride_foil', '2x gtceu:polyethylene_tiny_fluid_pipe', '2x gtceu:glass_lens')
        .itemOutputs('artifacts:snorkel')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)
    // Night Vision Goggles
    event.recipes.gtceu.assembler('artifacts:night_vision_goggles')
        .itemInputs('2x gtceu:lime_glass_lens', '2x #gtceu:circuits/hv', '4x gtceu:polytetrafluoroethylene_plate', '2x gtceu:hv_emitter')
        .itemOutputs('artifacts:night_vision_goggles')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)
    // Villager Hat
    event.recipes.gtceu.assembler('artifacts:villager_hat')
        .itemInputs('#chipped:hay_block', 'ironjetpacks:strap', 'gtceu:exquisite_emerald_gem')
        .itemOutputs('artifacts:villager_hat')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)
    // Supersticious Hat
    event.recipes.gtceu.assembler('artifacts:superstitious_hat')
        .itemInputs('2x #forge:plates/gold', 'ironjetpacks:strap', '5x redeco:lime_upholstery', '3x kubejs:solidified_experience')
        .itemOutputs('artifacts:superstitious_hat')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)
    // Cowboy Hat
    event.recipes.gtceu.assembler('artifacts:cowboy_hat')
        .itemInputs('4x kubejs:compressed_red_sand', '4x minecraft:leather', 'minecraft:string', 'majruszsaccessories:horseshoe')
        .itemOutputs('artifacts:cowboy_hat')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Anglers Hat
    event.recipes.gtceu.assembler('artifacts:anglers_hat')
        .itemInputs('4x redeco:light_gray_upholstery', 'minecraft:feather', '#forge:dyes/red', 'minecraft:tropical_fish', 'minecraft:salmon', 'minecraft:pufferfish')
        .itemOutputs('artifacts:anglers_hat')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Lucky Scarf
    event.recipes.gtceu.assembler('artifacts:lucky_scarf')
        .itemInputs('4x minecraft:lime_wool', '2x gtceu:gold_dust', '4x gtceu:lapis_dust', '6x minecraft:string')
        .itemOutputs('artifacts:lucky_scarf')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Scarf of Invisibility
    event.recipes.gtceu.assembler('artifacts:scarf_of_invisibility')
        .itemInputs('4x minecraft:blue_wool', '2x kubejs:primal_mana', '8x gtceu:glass_dust', '6x minecraft:string')
        .itemOutputs('artifacts:scarf_of_invisibility')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Cross Necklace
    event.recipes.gtceu.assembler('artifacts:cross_necklace')
        .itemInputs('2x gtceu:electrum_rod', '2x gtceu:electrum_bolt', '32x gtceu:electrum_ring', 'gtceu:ruby_dust')
        .itemOutputs('artifacts:cross_necklace')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Panic Necklace
    event.recipes.gtceu.assembler('artifacts:panic_necklace')
        .itemInputs('2x gtceu:cinnabar_dust', '2x gtceu:silver_bolt', '32x gtceu:silver_ring', 'gtceu:flawless_ruby_gem')
        .itemOutputs('artifacts:panic_necklace')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Shock Pendant
    event.recipes.gtceu.assembler('artifacts:shock_pendant')
        .itemInputs('6x gtceu:annealed_copper_dust', '2x gtceu:silver_bolt', '32x gtceu:silver_ring', 'gtceu:flawless_apatite_gem')
        .itemOutputs('artifacts:shock_pendant')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Flame Pendant
    event.recipes.gtceu.assembler('artifacts:flame_pendant')
        .itemInputs('3x gtceu:sodium_dust', '2x gtceu:silver_bolt', '32x gtceu:silver_ring', 'gtceu:flawless_spessartine_gem')
        .itemOutputs('artifacts:flame_pendant')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Thorn Pendant
    event.recipes.gtceu.assembler('artifacts:thorn_pendant')
        .itemInputs('4x gtceu:quartzite_dust', '2x gtceu:silver_bolt', '32x gtceu:silver_ring', 'gtceu:flawless_fluorite_gem')
        .itemOutputs('artifacts:thorn_pendant')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Charm of Sinking
    event.recipes.gtceu.assembler('artifacts:charm_of_sinking')
        .itemInputs('2x gtceu:watertight_steel_plate', 'minecraft:anvil', '2x minecraft:leather', 'gtceu:flawless_sodalite_gem')
        .itemOutputs('artifacts:charm_of_sinking')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Cloud in a Bottle
    event.recipes.gtceu.canner('artifacts:cloud_in_a_bottle')
        .itemInputs('redeco:jar')
        .inputFluids('gtceu:natural_gas', 4000)
        .itemOutputs('artifacts:cloud_in_a_bottle')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])

    // Obsidian Skull
    event.recipes.gtceu.assembler('artifacts:obsidian_skull')
        .itemInputs('16x gtceu:obsidian_dust', '2x gtceu:steel_bolt', '2x gtceu:steel_ring', 'gtceu:flawless_black_quartz_gem')
        .itemOutputs('artifacts:obsidian_skull')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Antidote Vessel
    event.recipes.gtceu.assembler('artifacts:antidote_vessel')
        .itemInputs('minecraft:glass_bottle', '4x gtceu:gold_ring', '4x gtceu:lead_foil', 'gtceu:flawless_olivine_gem', '4x minecraft:honeycomb')
        .itemOutputs('artifacts:antidote_vessel')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Universal Attractor
    event.recipes.gtceu.assembler('artifacts:universal_attractor')
        .itemInputs('gtceu:hv_item_magnet', '2x gtceu:dense_magnetic_steel_plate', '2x gtceu:cupronickel_rod', '4x kubejs:resonating_crystal')
        .itemOutputs('artifacts:universal_attractor')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Crystal Heart
    event.recipes.gtceu.assembler('artifacts:crystal_heart')
        .itemInputs('8x gtceu:exquisite_ruby_gem', '8x gtceu:exquisite_realgar_gem', '8x gtceu:exquisite_cinnabar_gem', '8x gtceu:exquisite_pyrope_gem', '8x gtceu:exquisite_red_garnet_gem', '8x gtceu:exquisite_almandine_gem')
        .itemOutputs('artifacts:crystal_heart')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Helium Flamingo
    event.recipes.gtceu.assembler('artifacts:helium_flamingo')
        .itemInputs('3x gtceu:silicone_rubber_plate', '6x gtceu:polyethylene_plate', '4x kubejs:solidified_helium', '10x #forge:dyes/pink', '10x #forge:dyes/magenta')
        .itemOutputs('artifacts:helium_flamingo')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Chorus Totem
    event.recipes.gtceu.assembler('artifacts:chorus_totem')
        .itemInputs('minecraft:totem_of_undying', '12x minecraft:chorus_fruit', '3x enderio:ender_crystal', 'gtceu:quantum_eye')
        .itemOutputs('2x artifacts:chorus_totem')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Digging Claws
    event.recipes.gtceu.assembler('artifacts:digging_claws')
        .itemInputs('3x minecraft:leather', '5x gtceu:sapphire_plate', '2x gtceu:diamond_drill_head', '2x gtceu:titanium_drill_head')
        .itemOutputs('artifacts:digging_claws')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Feral Claws
    event.recipes.gtceu.assembler('artifacts:feral_claws')
        .itemInputs('3x minecraft:leather', '5x gtceu:beryllium_plate', 'gtceu:hsse_knife', '4x kubejs:aerotheum_dust')
        .itemOutputs('artifacts:feral_claws')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Power Glove
    event.recipes.gtceu.assembler('artifacts:power_glove')
        .itemInputs('4x gtceu:steel_foil', '3x gtceu:double_brass_plate', '5x gtceu:lead_ring', 'gtceu:rubber_gloves')
        .itemOutputs('artifacts:power_glove')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Fire Gauntlet
    event.recipes.gtceu.assembler('artifacts:fire_gauntlet')
        .itemInputs('artifacts:power_glove', 'moreartifacts:mechanical_glove', '6x kubejs:pyrotheum_dust', '7x gtceu:magnesium_dust')
        .itemOutputs('artifacts:fire_gauntlet')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Pocket Piston
    event.recipes.gtceu.assembler('artifacts:pocket_piston')
        .itemInputs('create:mechanical_piston', '3x gtceu:hv_electric_piston', '2x #minecraft:buttons', '2x kubejs:resonating_crystal')
        .itemOutputs('artifacts:pocket_piston')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Vampiric Glove
    event.recipes.gtceu.assembler('artifacts:vampiric_glove')
        .itemInputs('2x minecraft:leather', '3x gtceu:glass_vial', '5x gtceu:red_alloy_screw', Item.of('minecraft:enchanted_book').enchant('majruszsenchantments:leech', 1).strongNBT())
        .itemOutputs('artifacts:vampiric_glove')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Golden Hook
    event.recipes.gtceu.assembler('artifacts:golden_hook')
        .itemInputs('5x gtceu:gold_rod', '3x gtceu:treated_wood_plate', '2x gtceu:rubber_foil', 'gtceu:gold_screw')
        .itemOutputs('artifacts:golden_hook')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Onion Ring
    event.recipes.gtceu.assembler('artifacts:onion_ring')
        .itemInputs('60x #forge:crops/onion', 'gtceu:rubber_ring', '8x gtceu:salt_dust')
        .itemOutputs('artifacts:onion_ring')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Pickaxe Heater
    event.recipes.gtceu.assembler('artifacts:pickaxe_heater')
        .itemInputs('moreartifacts:mechanical_glove', 'gtceu:hv_arc_furnace', '8x minecraft:blaze_rod')
        .itemOutputs('artifacts:pickaxe_heater')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Aqua Dashers
    event.recipes.gtceu.assembler('artifacts:aqua_dashers')
        .itemInputs('8x minecraft:leather', '6x gtceu:double_watertight_steel_plate', '4x gtceu:silicone_rubber_foil')
        .itemOutputs('artifacts:aqua_dashers')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Bunny Hoppers
    event.recipes.gtceu.assembler('artifacts:bunny_hoppers')
        .itemInputs('8x minecraft:rabbit_hide', '2x minecraft:rabbit_foot', '32x #forge:crops/carrot', '6x gtceu:small_tin_spring')
        .itemOutputs('artifacts:bunny_hoppers')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Kitty Slippers
    event.recipes.gtceu.assembler('artifacts:kitty_slippers')
        .itemInputs('4x minecraft:leather', '2x minecraft:music_disc_cat', '32x minecraft:cod', '6x #forge:dyes/black')
        .itemOutputs('artifacts:kitty_slippers')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Running Shoes
    event.recipes.gtceu.assembler('artifacts:running_shoes')
        .itemInputs('8x gtceu:polyethylene_plate', '6x gtceu:titanium_carbide_plate', '4x gtceu:stellite_100_plate', '18x gtceu:sugar_gem')
        .itemOutputs('artifacts:running_shoes')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Snowshoes
    event.recipes.gtceu.assembler('artifacts:snowshoes')
        .itemInputs('12x redeco:spruce_lattice', '6x minecraft:string', '4x gtceu:wrought_iron_rod', '64x minecraft:snowball')
        .itemOutputs('artifacts:snowshoes')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Steadfast Spikes
    event.recipes.gtceu.assembler('artifacts:steadfast_spikes')
        .itemInputs('6x minecraft:leather', '18x gtceu:stainless_steel_screw', '12x thermal:ice_grenade', '10x gtceu:magnesite_dust')
        .itemOutputs('artifacts:steadfast_spikes')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Flippers
    event.recipes.gtceu.assembler('artifacts:flippers')
        .itemInputs('thermal:diving_boots', '8x gtceu:polytetrafluoroethylene_rod', '6x #forge:dyes/blue', '6x gtceu:polytetrafluoroethylene_sheet')
        .itemOutputs('artifacts:flippers')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Rooted Boots
    event.recipes.gtceu.assembler('artifacts:rooted_boots')
        .itemInputs('12x minecraft:leather', '10x minecraft:mangrove_roots', '2x gtceu:flawless_green_sapphire_gem')
        .itemOutputs('artifacts:rooted_boots')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Whoopee Cushion
    event.recipes.gtceu.canner('artifacts:whoopee_cushion')
        .itemInputs('minecraft:leather')
        .inputFluids('gtceu:methane', 500)
        .itemOutputs('artifacts:whoopee_cushion')
        .duration(800)
        .EUt(GTValues.VA[GTValues.HV])

    // Relics mod
    // Amphibian Boot
    event.recipes.gtceu.assembler('relics:amphibian_boot')
        .itemInputs('2x minecraft:leather', '4x #forge:dyes/green', '6x gtceu:rubber_foil', '8x #chipped:verdant_froglight')
        .itemOutputs('relics:amphibian_boot')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Aqua Walker
    event.recipes.gtceu.assembler('relics:aqua_walker')
        .itemInputs('2x minecraft:leather', '4x #forge:dyes/cyan', '4x #forge:dyes/magenta', '6x gtceu:rubber_foil', '8x gtceu:watertight_steel_dust')
        .itemOutputs('relics:aqua_walker')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Arrow Quiver
    event.recipes.gtceu.assembler('relics:arrow_quiver')
        .itemInputs('ironjetpacks:strap', '2x spartanweaponry:quiver_compartment', '6x gtceu:gold_dust', '8x #minecraft:arrows')
        .itemOutputs('relics:arrow_quiver')
        .duration(800)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(18)

    // Bastion Ring
    event.recipes.gtceu.assembler('relics:bastion_ring')
        .itemInputs('16x #chipped:basalt', '14x gtceu:pure_gold_dust', '5x gtceu:gold_ring', '5x gtceu:gold_screw')
        .itemOutputs('relics:bastion_ring')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Blazing Flask
    event.recipes.gtceu.assembler('relics:blazing_flask')
        .itemInputs('artifacts:obsidian_skull', '12x kubejs:pyrotheum_dust', '8x gtceu:obsidian_dust', 'gtceu:exquisite_pyrope_gem')
        .itemOutputs('relics:blazing_flask')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Chorus Inhibitor
    event.recipes.gtceu.assembler('relics:chorus_inhibitor')
        .itemInputs('2x gtceu:amethyst_rod', '6x gtceu:titanium_ring', '12x minecraft:popped_chorus_fruit', 'gtceu:exquisite_realgar_gem')
        .itemOutputs('relics:chorus_inhibitor')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Drowned Belt
    event.recipes.gtceu.assembler('relics:drowned_belt')
        .itemInputs('relics:leather_belt', 'minecraft:trident', '4x minecraft:nautilus_shell', '6x aquaculture:neptunium_ingot')
        .itemOutputs('relics:drowned_belt')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Elytra Booster
    event.recipes.gtceu.assembler('relics:elytra_booster')
        .itemInputs('minecraft:elytra', '4x kubejs:resonant_thruster', '4x kubejs:dilithium_crystal', '8x gtceu:tungsten_carbide_plate')
        .itemOutputs('relics:elytra_booster')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Enders Hand
    event.recipes.gtceu.assembler('relics:enders_hand')
        .itemInputs('2x minecraft:ender_eye', '8x gtceu:ender_pearl_dust', 'waystones:warp_stone', 'gtceu:rubber_gloves')
        .itemOutputs('relics:enders_hand')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)
    
    // Holy Locket
    event.recipes.gtceu.assembler('relics:holy_locket')
        .itemInputs('8x gtceu:brass_bolt', '2x gtceu:gold_screw', '32x gtceu:lead_ring', 'gtceu:exquisite_ruby_gem')
        .itemOutputs('relics:holy_locket')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Horse Flute
    event.recipes.gtceu.assembler('relics:horse_flute')
        .itemInputs('immersive_melodies:flute', '16x farmersdelight:horse_feed', '2x redeco:red_upholstery', 'majruszsaccessories:golden_horseshoe')
        .itemOutputs('relics:horse_flute')
        .duration(800)
        .EUt(GTValues.VA[GTValues.HV])
        .circuit(18)

    // Hunter Belt
    event.recipes.gtceu.assembler('relics:hunter_belt')
        .itemInputs('relics:leather_belt', '16x minecraft:bone', '8x gtceu:malachite_gem', '48x minecraft:rotten_flesh')
        .itemOutputs('relics:hunter_belt')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Ice Breaker
    event.recipes.gtceu.assembler('relics:ice_breaker')
        .itemInputs('7x minecraft:leather', '16x gtceu:steel_screw', '8x gtceu:diamond_dust', '10x gtceu:iron_plate')
        .itemOutputs('relics:ice_breaker')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Ice Skates
    event.recipes.gtceu.assembler('relics:ice_skates')
        .itemInputs('8x gtceu:polyethylene_ingot', '2x gtceu:long_steel_rod', '8x #forge:dyes/white', '4x minecraft:string')
        .itemOutputs('relics:ice_skates')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Jellyfish Necklace
    event.recipes.gtceu.assembler('relics:jellyfish_necklace')
        .itemInputs('18x aquaculture:jellyfish', '2x gtceu:magnalium_bolt', '32x gtceu:aluminium_ring', 'gtceu:exquisite_lapis_gem')
        .itemOutputs('relics:jellyfish_necklace')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Leather Belt
    event.recipes.gtceu.assembler('relics:leather_belt')
        .itemInputs('18x minecraft:leather', '8x gtceu:iron_screw', '6x gtceu:wrought_iron_plate', '4x toolbelt:pouch')
        .itemOutputs('relics:leather_belt')
        .duration(800)
        .EUt(GTValues.VA[GTValues.HV])
        .circuit(18)

    // Magic Mirror
    event.recipes.gtceu.assembler('relics:magic_mirror')
        .itemInputs('4x gtceu:laminated_glass', '4x gtceu:long_sterling_silver_rod', '8x gtceu:blue_topaz_dust', '4x gtceu:diamond_lens')
        .itemOutputs('relics:magic_mirror')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Magma Walker
    event.recipes.gtceu.assembler('relics:magma_walker')
        .itemInputs('12x gtceu:polycaprolactam_plate', '4x gtceu:long_cupronickel_rod', '16x minecraft:blaze_powder', '8x kubejs:cryotheum_dust')
        .itemOutputs('relics:magma_walker')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Midnight Robe
    event.recipes.gtceu.assembler('relics:midnight_robe')
        .itemInputs('14x redeco:black_upholstery', '12x gtceu:microversium_dust', '4x kubejs:starry_diamond_block', '16x mcwwindows:black_mosaic_glass_pane')
        .itemOutputs('relics:midnight_robe')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Rage Glove
    event.recipes.gtceu.assembler('relics:rage_glove')
        .itemInputs('artifacts:fire_gauntlet', '8x create:blaze_cake', '8x thermal:fire_grenade', 'gtceu:rubber_gloves')
        .itemOutputs('relics:rage_glove')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Reflection Necklace
    event.recipes.gtceu.assembler('relics:reflection_necklace')
        .itemInputs('16x solarflux:mirror', '4x gtceu:osmium_rod', '32x gtceu:tungsten_steel_ring', 'gtceu:exquisite_lazurite_gem')
        .itemOutputs('relics:reflection_necklace')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Roller Skates
    event.recipes.gtceu.assembler('relics:roller_skates')
        .itemInputs('8x gtceu:polyethylene_plate', '4x gtceu:rubber_ring', '8x #forge:dyes/red', '4x gtceu:steel_ring', '2x gtceu:steel_rod')
        .itemOutputs('relics:roller_skates')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Shadow Glaive
    event.recipes.gtceu.assembler('relics:shadow_glaive')
        .itemInputs('gtceu:dark_steel_gear', '16x gtceu:black_steel_rod', '8x gtceu:amethyst_plate', '2x gtceu:void_gear')
        .itemOutputs('relics:shadow_glaive')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Space Dissector
    event.recipes.gtceu.assembler('relics:space_dissector')
        .itemInputs('2x gtceu:void_empowered_gear', '4x gtceu:iv_electric_motor', '6x kubejs:resonating_crystal', '16x gtceu:bismuth_bronze_rod')
        .itemOutputs('relics:space_dissector')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Spatial Sign
    event.recipes.gtceu.assembler('relics:spatial_sign')
        .itemInputs('moreartifacts:fast_clock', '24x gtceu:exquisite_uvarovite_gem', '24x gtceu:exquisite_yellow_garnet_gem', '24x gtceu:exquisite_sodalite_gem', '6x gtceu:ultimet_ingot')
        .itemOutputs('relics:spatial_sign')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Spore Sack
    event.recipes.gtceu.assembler('relics:spore_sack')
        .itemInputs('quark:seed_pouch', '32x minecraft:spore_blossom', '48x gtceu:bio_chaff', 'moreartifacts:bezoar')
        .itemOutputs('relics:spore_sack')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Wool Mitten
    event.recipes.gtceu.assembler('relics:wool_mitten')
        .itemInputs('16x #minecraft:wool', '4x #forge:dyes/light_blue', '8x #forge:dyes/white')
        .itemOutputs('relics:wool_mitten')
        .duration(800)
        .EUt(GTValues.VA[GTValues.HV])
        .circuit(18)


    // More Artifacts mod - these already have recipes, which need to be removed first!
    // Bezoar
    event.recipes.gtceu.assembler('moreartifacts:bezoar')
        .itemInputs('8x gtceu:lead_foil', '4x minecraft:poisonous_potato', '16x minecraft:spider_eye', '12x gtceu:silver_dust', '4x gtceu:malachite_dust')
        .itemOutputs('moreartifacts:bezoar')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Vitamins
    event.recipes.gtceu.assembler('moreartifacts:vitamins')
        .itemInputs('supplementaries:jar', '16x #forge:fruits', '4x gtceu:magnesium_dust', '6x gtceu:zinc_dust', '8x gtceu:calcium_dust', '12x gtceu:potassium_dust')
        .itemOutputs('moreartifacts:vitamins')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Fast Clock
    event.recipes.gtceu.assembler('moreartifacts:fast_clock')
        .itemInputs('minecraft:clock', '3x redstoneclock:redstone_clock', '8x gtceu:gold_spring', '4x enderio:vibrant_crystal')
        .itemOutputs('moreartifacts:fast_clock')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Sunglasses
    event.remove({id: 'moreartifacts:sunglasses'})
    event.recipes.gtceu.assembler('moreartifacts:sunglasses')
        .itemInputs('8x minecraft:tinted_glass', '2x gtceu:polyethylene_tiny_fluid_pipe', '4x #forge:dyes/black', '2x gtceu:black_glass_lens')
        .itemOutputs('moreartifacts:sunglasses')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Nectar
    event.remove({id: 'moreartifacts:nectar'})
    event.recipes.gtceu.assembler('moreartifacts:nectar')
        .itemInputs('32x #minecraft:small_flowers', '8x #rusticdelight:sweet_liquids', '6x minecraft:honeycomb', '2x minecraft:flowering_azalea')
        .itemOutputs('moreartifacts:nectar')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Desert Charm
    event.recipes.gtceu.assembler('moreartifacts:desert_charm')
        .itemInputs('64x kubejs:compressed_sand', '16x gtceu:gold_ring', '2x gtceu:gold_foil', '#chipped:blue_glazed_terracotta', '4x kubejs:wither_bone')
        .itemOutputs('moreartifacts:desert_charm')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Shulker Heart
    event.recipes.gtceu.assembler('moreartifacts:shulker_heart')
        .itemInputs('8x minecraft:shulker_shell', '4x ends_delight:shulker_meat', '3x minecraft:chorus_flower', '18x gtceu:ender_pearl_dust')
        .itemOutputs('moreartifacts:shulker_heart')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Wither Shard
    event.recipes.gtceu.assembler('moreartifacts:wither_shard')
        .itemInputs('8x kubejs:wither_bone', '16x enderio:withering_powder', '3x minecraft:wither_rose', '10x gtceu:flawless_coke_gem')
        .itemOutputs('moreartifacts:wither_shard')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Sculk Lens
    event.remove({id: 'moreartifacts:sculk_lens'})
    event.recipes.gtceu.assembler('moreartifacts:sculk_lens')
        .itemInputs('5x minecraft:echo_shard', '16x gtceu:sculk_dust', '2x gtceu:double_soularium_plate', '4x gtceu:gallium_dust')
        .itemOutputs('moreartifacts:sculk_lens')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Cobalt Shield
    event.recipes.gtceu.assembler('moreartifacts:cobalt_shield')
        .itemInputs('8x gtceu:double_cobalt_plate', '5x gtceu:long_steel_rod', '3x gtceu:gold_bolt', '7x gtceu:pure_cobalt_dust')
        .itemOutputs('moreartifacts:cobalt_shield')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Withered Bezoar
    event.remove({id: 'moreartifacts:withered_bezoar'})
    event.smithing('moreartifacts:withered_bezoar', 'gtceu:exquisite_rock_salt_gem', 'moreartifacts:bezoar', 'moreartifacts:wither_shard')

    // Sculk Shades
    event.remove({id: 'moreartifacts:sculk_shades'})
    event.smithing('moreartifacts:sculk_shades', 'gtceu:exquisite_echo_shard_gem', 'moreartifacts:sunglasses', 'moreartifacts:sculk_lens')

    // Shulked Clock
    event.remove({id: 'moreartifacts:shulked_clock'})
    event.smithing('moreartifacts:shulked_clock', 'gtceu:exquisite_fluix_gem', 'moreartifacts:fast_clock', 'moreartifacts:shulker_heart')

    // Purification Charm
    event.remove({id: 'moreartifacts:purification_charm'})
    event.smithing('moreartifacts:purification_charm', 'gtceu:exquisite_grossular_gem', 'moreartifacts:desert_charm', 'moreartifacts:nectar')

    // Obsidian shield
    event.remove({id: 'moreartifacts:obsidian_shield'})
    event.smithing('moreartifacts:obsidian_shield', 'gtceu:exquisite_black_quartz_gem', 'moreartifacts:cobalt_shield', 'artifacts:obsidian_skull')

    // Ankh Charm
    event.remove({id: 'moreartifacts:ankh_charm'})
    event.recipes.gtceu.assembler('moreartifacts:ankh_charm')
        .itemInputs('moreartifacts:sculk_shades', 'moreartifacts:shulked_clock', 'moreartifacts:purification_charm', 'moreartifacts:withered_bezoar', '32x #forge:storage_blocks/gold', '12x gtceu:lumium_plate')
        .itemOutputs('moreartifacts:ankh_charm')
        .duration(800)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(18)

    // Ankh Shield
    event.remove({id: 'moreartifacts:ankh_shield'})
    event.smithing('moreartifacts:ankh_shield', 'gtceu:diamatine_empowered_block', 'moreartifacts:ankh_charm', 'moreartifacts:obsidian_shield')

    // Melody Plushie
    event.remove({id: 'moreartifacts:melody_plushie'})
    event.recipes.gtceu.assembler('moreartifacts:melody_plushie')
        .itemInputs('8x gtceu:gravi_star', '32x gtceu:nether_star_dust', '4x redeco:pink_upholstery', '1x redeco:red_upholstery', '7x redeco:white_upholstery')
        .itemOutputs('moreartifacts:melody_plushie')
        .duration(800)
        .EUt(GTValues.VA[GTValues.UV])
        .circuit(18)

    // Hero Shield
    event.remove({id: 'moreartifacts:hero_shield'})
    event.recipes.gtceu.assembler('moreartifacts:hero_shield')
        .itemInputs('8x gtceu:double_rhodium_plated_palladium_plate', 'minecraft:dragon_egg', 'gtceu:exquisite_emerald_gem', '14x minecraft:glowstone_dust', '8x #forge:storage_blocks/diamond')
        .itemOutputs('moreartifacts:hero_shield')
        .duration(800)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(18)

    // Mechanical Glove
    event.remove({id: 'moreartifacts:mechanical_glove'})
    event.recipes.gtceu.assembler('moreartifacts:mechanical_glove')
        .itemInputs('gtceu:rubber_gloves', '8x gtceu:double_steel_plate', '10x gtceu:hv_electric_motor', '5x gtceu:hv_electric_piston')
        .itemOutputs('moreartifacts:mechanical_glove')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Enderian Scarf
    event.recipes.gtceu.assembler('moreartifacts:enderian_scarf')
        .itemInputs('8x gtceu:ender_pearl_dust', 'redeco:black_upholstery', '12x gtceu:lithium_dust')
        .itemOutputs('moreartifacts:enderian_scarf')
        .duration(800)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(18)
    
    // True Enderian Scarf
    event.remove({id: 'moreartifacts:true_enderian_scarf'})
    event.recipes.gtceu.assembler('moreartifacts:true_enderian_scarf')
        .itemInputs('moreartifacts:enderian_scarf', '32x gtceu:ender_pearl_dust', '4x enderio:ender_crystal', '6x minecraft:dragon_breath')
        .itemOutputs('moreartifacts:true_enderian_scarf')
        .duration(800)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(18)

    // Gilded Scarf
    event.remove({id: 'moreartifacts:gilded_scarf'})
    event.recipes.gtceu.assembler('moreartifacts:gilded_scarf')
        .itemInputs('moreartifacts:enderian_scarf', '8x gtceu:gold_foil', '32x #chipped:gilded_blackstone', '2x gtceu:netherite_dust')
        .itemOutputs('moreartifacts:gilded_scarf')
        .duration(800)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(18)

    // Balloon
    event.remove({id: 'moreartifacts:balloon'})
    event.recipes.gtceu.assembler('moreartifacts:balloon')
        .itemInputs('8x #forge:wools/red', '10x minecraft:string', '20x kubejs:solidified_nitrogen')
        .itemOutputs('moreartifacts:balloon')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Lucky Emerald Ring
    event.remove({id: 'moreartifacts:lucky_emerald_ring'})
    event.recipes.gtceu.assembler('moreartifacts:lucky_emerald_ring')
        .itemInputs('64x #forge:storage_blocks/emerald', '4x gtceu:quantum_star', '10x gtceu:emerald_rod', '40x gtceu:glowstone_plate')
        .itemOutputs('moreartifacts:lucky_emerald_ring')
        .duration(800)
        .EUt(GTValues.VA[GTValues.UV])
        .circuit(18)

    // Spectre Amulet
    event.remove({id: 'moreartifacts:spectre_amulet'})
    event.recipes.gtceu.assembler('moreartifacts:spectre_amulet')
        .itemInputs('32x gtceu:silver_ring', 'gtceu:exquisite_diamond_gem', '4x kubejs:diamond_lattice', 'artifacts:vampiric_glove')
        .itemOutputs('moreartifacts:spectre_amulet')
        .duration(800)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(18)

    // Venom Amulet
    event.remove({id: 'moreartifacts:venom_amulet'})
    event.recipes.gtceu.assembler('moreartifacts:venom_amulet')
        .itemInputs('32x gtceu:silver_ring', 'gtceu:exquisite_olivine_gem', 'moreartifacts:bezoar', '14x minecraft:fermented_spider_eye')
        .itemOutputs('moreartifacts:venom_amulet')
        .duration(800)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(18)

    // Decay Amulet
    event.remove({id: 'moreartifacts:decay_amulet'})
    event.recipes.gtceu.assembler('moreartifacts:decay_amulet')
        .itemInputs('32x gtceu:silver_ring', 'gtceu:exquisite_coal_gem', 'moreartifacts:wither_shard', '4x minecraft:wither_rose')
        .itemOutputs('moreartifacts:decay_amulet')
        .duration(800)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(18)

    // Necroplasm Amulet
    event.remove({id: 'moreartifacts:necroplasm_amulet'})
    event.recipes.gtceu.assembler('moreartifacts:necroplasm_amulet')
        .itemInputs('moreartifacts:spectre_amulet', 'moreartifacts:venom_amulet', 'moreartifacts:decay_amulet', '30x bhc:soul_heart_crystal')
        .itemOutputs('moreartifacts:necroplasm_amulet')
        .duration(800)
        .EUt(GTValues.VA[GTValues.UV])
        .circuit(18)

    // Shackle
    event.remove({id: 'moreartifacts:shackle'})
    event.recipes.gtceu.assembler('moreartifacts:shackle')
        .itemInputs('32x gtceu:iron_ring', '4x gtceu:iron_rod', 'supplementaries:key')
        .itemOutputs('moreartifacts:shackle')
        .duration(800)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(18)

    // Magic Quiver
    event.recipes.gtceu.assembler('moreartifacts:magic_quiver')
        .itemInputs('relics:arrow_quiver', '8x gtceu:flawless_amethyst_gem', '4x gtceu:red_alloy_foil')
        .itemOutputs('moreartifacts:magic_quiver')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Envenomed Quiver
    event.remove({id: 'moreartifacts:envenomed_quiver'})
    event.recipes.gtceu.assembler('moreartifacts:envenomed_quiver')
        .itemInputs('moreartifacts:magic_quiver', 'moreartifacts:bezoar', '10x minecraft:spider_eye', '4x gtceu:malachite_dust')
        .itemOutputs('moreartifacts:envenomed_quiver')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

    // Molten Quiver
    event.remove({id: 'moreartifacts:molten_quiver'})
    event.recipes.gtceu.assembler('moreartifacts:molten_quiver')
        .itemInputs('moreartifacts:magic_quiver', '18x kubejs:pyrotheum_dust', '4x minecraft:magma_cream', '24x minecraft:blaze_rod')
        .itemOutputs('moreartifacts:molten_quiver')
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(18)

})