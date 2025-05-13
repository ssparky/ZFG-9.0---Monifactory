/**
 * Various end-game recipes
 */

ServerEvents.recipes(event => {

    event.recipes.gtceu.assembler('neutron_emitter')
        .itemInputs('4x gtceu:double_neutronium_plate', '4x gtceu:polyethyl_cyanoacrylate_plate')
        .inputFluids('gtceu:tin_alloy 4680')
        .itemOutputs('kubejs:neutron_emitter')
        .duration(4000)
        .EUt(GTValues.VHA[GTValues.UV])

    event.recipes.gtceu.electrolyzer('actinium_from_uranium_hexafluoride')
        .inputFluids('gtceu:uranium_hexafluoride 1000')
        .chancedInput('kubejs:neutron_emitter', 100, 0)
        .outputFluids('gtceu:enriched_uranium_hexafluoride 50', 'gtceu:depleted_uranium_hexafluoride 450', 'gtceu:fluorine 800')
        .chancedOutput('gtceu:small_actinium_dust', 1000, 400)
        .duration(160)
        .EUt(GTValues.VHA[GTValues.ZPM])

    // Assembly Line
    // Dimensional Superassembler
    event.recipes.gtceu.assembly_line('dimensional_superassembler')
        .itemInputs('gtceu:assembly_line', '4x #gtceu:circuits/uiv', '16x gtceu:infinity_plate', '4x kubejs:dimensional_stabilization_netherite_casing', '16x kubejs:omnic_matrix_machine_casing', '6x gtceu:uev_conveyor_module', '4x gtceu:uev_robot_arm', '4x gtceu:uev_emitter', '2x gtceu:infinity_frame', '24x gtceu:polyethyl_cyanoacrylate_plate')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:omnium 5760')
        .itemOutputs('gtceu:dimensional_superassembler')
        .duration(6000)
        .EUt(13920000)

        .stationResearch(b => b
            .researchStack('gtceu:assembly_line')
            .CWUt(160, 1024000)
            .EUt(1200000)
        )

    // Helical Fusion Reactor
    event.recipes.gtceu.assembly_line('gtceu:helical_fusion_reactor')
        .itemInputs('gtceu:uv_fusion_reactor', '4x #gtceu:circuits/uev', 'gtceu:gravi_star', '2x gtceu:double_activated_netherite_plate', '4x gtceu:uhv_field_generator', '64x kubejs:multidimensional_cpu_chip', '64x kubejs:multidimensional_cpu_chip', '64x gtceu:ruthenium_trinium_americium_neutronate_single_wire', '24x gtceu:polyethyl_cyanoacrylate_plate')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:omnium 5760')
        .itemOutputs('gtceu:helical_fusion_reactor')
        .duration(6000)
        .EUt(13920000)
        .stationResearch(b => b
            .researchStack('gtceu:uv_fusion_reactor')
            .CWUt(160, 1024000)
            .EUt(1200000)
        )


    // Blacklight
    event.shaped('gtceu:blacklight', [
        'BPB',
        ' S ',
        'CPW'
    ], {
        B: 'gtceu:tungsten_carbide_screw',
        C: '#gtceu:circuits/iv',
        P: 'gtceu:tungsten_carbide_plate',
        S: 'gtceu:hssg_spring',
        W: 'gtceu:platinum_single_cable'
    }).id('gtceu:shaped/blacklight')

    // Trinaquadalloy Mixer Recipe
    event.recipes.gtceu.mixer("mixer_trinaquadalloy")
        .itemInputs("6x gtceu:trinium_dust", "2x gtceu:naquadah_dust", "gtceu:carbon_dust")
        .itemOutputs("9x gtceu:trinaquadalloy_dust")
        .circuit(1)
        .duration(300)
        .EUt(491250)

    // Fluxed Electrum Mixer Recipe
    event.recipes.gtceu.mixer("mixer_electrum_flux")
        .itemInputs("6x gtceu:electrum_dust", "gtceu:lumium_dust", "gtceu:signalum_dust")
        .itemOutputs("8x gtceu:electrum_flux_dust")
        .circuit(2)
        .duration(300)
        .EUt(129)

    // Atomic Casings
    event.shaped('2x gtceu:atomic_casing', [
        'PHP',
        'PFP',
        'PWP'
    ], {
        P: 'gtceu:trinaquadalloy_plate',
        H: '#forge:tools/hammers',
        W: '#forge:tools/wrenches',
        F: 'gtceu:naquadah_alloy_frame',
    }).id('gtceu:shaped/atomic_casing')

    event.recipes.gtceu.assembler("atomic_casing")
        .itemInputs("6x gtceu:trinaquadalloy_plate", "gtceu:naquadah_alloy_frame")
        .itemOutputs("2x gtceu:atomic_casing")
        .duration(100)
        .EUt(16)
        .circuit(6)

    // Sterilising Filter Casing
    event.shaped('4x gtceu:sterilizing_filter_casing', [
        'PEP',
        'FBF',
        'MSR'
    ], {
        B: 'gtceu:blacklight',
        E: 'gtceu:luv_emitter',
        F: 'gtceu:item_filter',
        M: 'gtceu:luv_electric_motor',
        P: 'gtceu:polybenzimidazole_large_fluid_pipe',
        R: 'gtceu:iridium_rotor',
        S: 'gtceu:tritanium_frame'
    }).id('gtceu:shaped/filter_casing_sterile')

    // FLux Gem
    event.remove({ id: 'redstone_arsenal:materials/flux_gem' })
    event.recipes.gtceu.autoclave("flux_gem")
        .itemInputs('minecraft:diamond')
        .inputFluids('gtceu:redstone 720')
        .itemOutputs('redstone_arsenal:flux_gem')
        .duration(200)
        .EUt(400)

    // Ultimate Material
    event.recipes.gtceu.assembly_line("kubejs:the_ultimate_material")
        .itemInputs('kubejs:warden_heart', '4x kubejs:guardian_scale', '8x kubejs:wither_bone', '12x kubejs:ender_dragon_scale')
        .itemOutputs('kubejs:the_ultimate_material')
        .duration(600)
        .EUt(491520)
        .stationResearch(b => b
            .researchStack('kubejs:warden_heart')
            .CWUt(96, 384000)
            .EUt(491520)
        )

    // Flux Plating
    event.shaped('4x redstone_arsenal:flux_plating', [
        ' P ',
        'PGP',
        ' P '
    ], {
        G: 'redstone_arsenal:flux_gem',
        P: 'gtceu:electrum_flux_plate'
    }).id('redstone_arsenal:materials/flux_plating')

    event.recipes.gtceu.omnic_forge('kubejs:flux_plating_assembly')
        .itemInputs('redstone_arsenal:flux_gem', '4x gtceu:electrum_flux_plate')
        .itemOutputs('4x redstone_arsenal:flux_plating')
        .duration(60)
        .EUt(GTValues.VA[GTValues.EV])

    // Vacuum Freezer
    // kubejs Superconductor Wire
    event.recipes.gtceu.vacuum_freezer("sculk_superconductor")
        .itemInputs('gtceu:cryococcus_ingot')
        .itemOutputs('gtceu:sculk_superconductor_ingot')
        .inputFluids(Fluid.of('gtceu:nether_star', 144))
        .duration(100)
        .EUt(6000)

    // Chemical Reactor

    event.recipes.gtceu.chemical_reactor("cryolobus_dust")
        .itemInputs('gtceu:manyullyn_dust', 'minecraft:sculk_catalyst')
        .itemOutputs('gtceu:cryolobus_dust')
        .duration(500)
        .EUt(2000)

    // Kubejs Stem Cells
    event.remove({ id: 'gtceu:chemical_reactor/stem_cells' })
    event.remove({ id: 'gtceu:large_chemical_reactor/stem_cells' })
    event.recipes.gtceu.chemical_reactor("kubejs_stem_cells")
        .itemInputs('minecraft:dragon_egg')
        .chancedInput('minecraft:sculk_catalyst', 500, 0)
        .inputFluids('gtceu:sterilized_growth_medium 500', 'gtceu:bacteria 500', 'enderio:xp_juice 2000')
        .itemOutputs('64x gtceu:stem_cells')
        .itemOutputsRanged('gtceu:stem_cells', 0, 64)
        .outputFluids('gtceu:bacterial_sludge 500')
        .duration(6000)
        .EUt(30720)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    // Blast Furnace
    event.recipes.gtceu.electric_blast_furnace("quantum_fluxed_eternium_heavy_plating")
        .itemInputs('10x redstone_arsenal:flux_plating', 'gtceu:cryococcus_plate', '16x kubejs:quantum_flux')
        .inputFluids('gtceu:krypton 1000')
        .itemOutputs('kubejs:quantum_fluxed_eternium_heavy_plating')
        .duration(200)
        .EUt(250000)
        .blastFurnaceTemp(9000)

    event.recipes.gtceu.electric_blast_furnace("universe_resistant_neutronium_heavy_plating")
        .itemInputs('gtceu:neutronium_plate', '2x kubejs:mote_of_omnium', '16x gtceu:quantum_eye')
        .inputFluids('gtceu:xenon 1000')
        .itemOutputs('kubejs:universe_resistant_neutronium_heavy_plating')
        .duration(200)
        .EUt(250000)
        .blastFurnaceTemp(10000)

    event.recipes.gtceu.omnic_forge("elementally_infused_omnic_matrix_heavy_plating")
        .itemInputs('4x gtceu:omnium_plate', 'gtceu:dense_crystal_matrix_plate', 'gtceu:gravi_star', '4x gtceu:neutron_reflector', '16x kubejs:primal_mana')
        .itemOutputs('kubejs:elementally_infused_omnic_matrix_heavy_plating')
        .duration(100)
        .EUt(1000000)

    event.recipes.gtceu.omnic_forge("dimensionally_stabilized_infinity_heavy_plating")
        .itemInputs('gtceu:infinity_plate', 'gtceu:dense_activated_netherite_plate', 'kubejs:quasi_stable_neutron_star', '8x gtceu:neutron_reflector', '12x kubejs:the_ultimate_material')
        .itemOutputs('kubejs:dimensionally_stabilized_infinity_heavy_plating')
        .duration(100)
        .EUt(4000000)

    // Mote of omnium
    event.recipes.gtceu.implosion_compressor("implosion_compressor_ominium_nugget")
        .itemInputs('kubejs:mote_of_omnium', 'minecraft:tnt')
        .itemOutputs('gtceu:omnium_nugget')
        .duration(20)
        .EUt(30)

    event.recipes.gtceu.implosion_compressor("implosion_compressor_ominium_nugget_itnt")
        .itemInputs('4x kubejs:mote_of_omnium', 'gtceu:industrial_tnt')
        .itemOutputs('4x gtceu:omnium_nugget')
        .duration(20)
        .EUt(30)


    // Ultimate Gem
    event.recipes.extendedcrafting.shapeless_table(
        'kubejs:ultimate_gem',
        [
            "kubejs:destabilized_clathrate",
            "gtceu:enori_empowered_gem",
            "enderio:ender_crystal",
            "enderio:vibrant_crystal",
            "kubejs:dilithium_crystal",
            "enderio:enticing_crystal",
            "enderio:weather_crystal",
            "enderio:prescient_crystal",
            "enderio:pulsating_crystal",
            "minecraft:prismarine_shard",
            "gtceu:cinnabar_gem",
            "kubejs:energized_clathrate",
            "minecraft:quartz",
            "gtceu:certus_quartz_gem",
            "gtceu:fluix_gem",
            "gtceu:restonia_empowered_gem",
            "gtceu:palis_empowered_gem",
            "gtceu:diamatine_empowered_gem",
            "gtceu:void_empowered_gem",
            "gtceu:emeradic_empowered_gem",
            "kubejs:resonating_crystal",
            "minecraft:emerald",
            "redstone_arsenal:flux_gem",
            "minecraft:diamond",
            "kubejs:resonant_clathrate"
        ]
    )

    event.recipes.extendedcrafting.shaped_table('gtceu:zero_point_module', [
        '  PPPPP  ',
        '  PBCBP  ',
        '  PCBCP  ',
        '  PBCBP  ',
        '   ZZZ   ',
        '   ZFZ   ',
        '   ZFZ   ',
        '   ZZZ   ',
        '   PPP   '
    ], {
        B: 'kubejs:stabilized_berkelium',
        C: 'kubejs:stabilized_californium',
        F: 'gtceu:zpm_field_generator',
        P: 'nuclearcraft:plate_elite',
        Z: '#gtceu:circuits/zpm'
    })

    // World Accelerators
    event.remove({ id: 'gtceu:shaped/lv_world_accelerator' })
    event.remove({ id: 'gtceu:shaped/mv_world_accelerator' })
    event.remove({ id: 'gtceu:shaped/hv_world_accelerator' })
    event.remove({ id: 'gtceu:shaped/ev_world_accelerator' })
    event.remove({ id: 'gtceu:shaped/iv_world_accelerator' })
    event.remove({ id: 'gtceu:shaped/luv_world_accelerator' })
    event.remove({ id: 'gtceu:shaped/zpm_world_accelerator' })
    event.remove({ id: 'gtceu:shaped/uv_world_accelerator' })

    event.recipes.gtceu.assembly_line('hv_world_accelerator')
        .itemInputs('gtceu:luv_machine_hull', '64x gtceu:luv_field_generator', '16x gtceu:luv_field_generator', '20x gtceu:luv_sensor', '20x gtceu:luv_emitter', '16x #gtceu:circuits/luv', '4x gtceu:double_iridium_plate', '2x gtceu:dense_cryolobus_plate')
        .inputFluids('gtceu:enderium 1152', 'gtceu:soldering_alloy 1152')
        .itemOutputs('gtceu:hv_world_accelerator')
        .stationResearch(b => b.researchStack('minecraft:clock').CWUt(4, 16000))
        .duration(6000)
        .EUt(30720)

    event.recipes.gtceu.assembly_line('ev_world_accelerator')
        .itemInputs('gtceu:zpm_machine_hull', '64x gtceu:zpm_field_generator', '16x gtceu:zpm_field_generator', '20x gtceu:zpm_sensor', '20x gtceu:zpm_emitter', '16x #gtceu:circuits/zpm', '4x gtceu:double_europium_plate', '2x gtceu:dense_cryolobus_plate')
        .inputFluids('gtceu:enderium 1152', 'gtceu:soldering_alloy 1152')
        .itemOutputs('gtceu:ev_world_accelerator')
        .duration(6000)
        .EUt(122880)
        .stationResearch(b => b
            .researchStack('gtceu:hv_world_accelerator')
            .CWUt(32, 128000)
            .EUt(122880)
        )

    event.recipes.gtceu.assembly_line('iv_world_accelerator')
        .itemInputs('gtceu:uv_machine_hull', '64x gtceu:uv_field_generator', '16x gtceu:uv_field_generator', '20x gtceu:uv_sensor', '20x gtceu:uv_emitter', '16x #gtceu:circuits/uv', '4x gtceu:double_europium_plate', '2x gtceu:dense_neutronium_plate')
        .inputFluids('gtceu:enderium 1152', 'gtceu:soldering_alloy 1152')
        .itemOutputs('gtceu:iv_world_accelerator')
        .duration(6000)
        .EUt(491520)
        .stationResearch(b => b
            .researchStack('gtceu:ev_world_accelerator')
            .CWUt(64, 256000)
            .EUt(491520)
        )

    event.recipes.gtceu.assembly_line('luv_world_accelerator')
        .itemInputs('gtceu:uhv_machine_hull', '64x gtceu:uhv_field_generator', '16x gtceu:uhv_field_generator', '20x gtceu:uhv_sensor', '20x gtceu:uhv_emitter', '16x #gtceu:circuits/uhv', '4x gtceu:double_activated_netherite_plate', '2x gtceu:dense_neutronium_plate')
        .inputFluids('gtceu:omnium 1152', 'gtceu:soldering_alloy 1152')
        .itemOutputs('gtceu:luv_world_accelerator')
        .duration(6000)
        .EUt(1966080)
        .stationResearch(b => b
            .researchStack('gtceu:iv_world_accelerator')
            .CWUt(128, 512000)
            .EUt(1966080)
        )

    // Beyond this point we could probably just treat these like joke items
    event.recipes.gtceu.assembly_line('zpm_world_accelerator')
        .itemInputs('gtceu:uev_machine_hull', '64x gtceu:uev_field_generator', '16x gtceu:uev_field_generator', '20x gtceu:uev_sensor', '20x gtceu:uev_emitter', '16x #gtceu:circuits/uev', '4x gtceu:double_holmium_plate', '2x gtceu:dense_infinity_plate')
        .inputFluids('gtceu:omnium 1152', 'gtceu:soldering_alloy 1152')
        .itemOutputs('gtceu:zpm_world_accelerator')
        .duration(6000)
        .EUt(7864320)
        .stationResearch(b => b
            .researchStack('gtceu:luv_world_accelerator')
            .CWUt(128, 512000)
            .EUt(7864320)
        )

    event.recipes.gtceu.assembly_line('uv_world_accelerator')
        .itemInputs('gtceu:uiv_machine_hull', '64x gtceu:uiv_field_generator', '16x gtceu:uiv_field_generator', '20x gtceu:uiv_sensor', '20x gtceu:uiv_emitter', '16x #gtceu:circuits/uiv', '4x gtceu:double_monium_plate', '2x gtceu:dense_infinity_plate')
        .inputFluids('gtceu:omnium 11520', 'gtceu:soldering_alloy 11520')
        .itemOutputs('gtceu:uv_world_accelerator')
        .duration(6000)
        .EUt(31457280)
        .stationResearch(b => b
            .researchStack('gtceu:zpm_world_accelerator')
            .CWUt(256, 1024000)
            .EUt(31457280)
        )

    // ! Creative Items !//

    // Creative Jetpack
    event.recipes.extendedcrafting.shaped_table(Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:creative"}').weakNBT(), [
        '  C   L  ',
        ' CCC LLL ',
        ' CVCFLEL ',
        ' CVCILEL ',
        ' CVCDLEL ',
        ' CVC LEL ',
        ' SSS HHH ',
        '  N   R  ',
        ' NNN RRR '
    ], {
        C: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:conductive_iron"}').weakNBT(),
        D: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:dark_soularium"}').weakNBT(),
        E: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:resonant"}').weakNBT(),
        F: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:fluxed"}').weakNBT(),
        H: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:hardened"}').weakNBT(),
        I: 'kubejs:infinity_catalyst',
        L: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:leadstone"}').weakNBT(),
        N: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:energetic"}').weakNBT(),
        R: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:reinforced"}').weakNBT(),
        S: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:electrical_steel"}').weakNBT(),
        V: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:vibrant"}').weakNBT()
    })

    // Creative Solar Panel
    event.recipes.extendedcrafting.shaped_table('solarflux:sp_custom_infinity', [
        'SNNNNNNNS',
        'NPPPNPPPN',
        'NPPPNPPPN',
        'NPPPNPPPN',
        'NNNNINNNN',
        'NPPPNPPPN',
        'NPPPNPPPN',
        'NPPPNPPPN',
        'SNNNNNNNS'
    ], {
        I: 'kubejs:infinity_catalyst',
        N: 'gtceu:neutronium_plate',
        P: 'gtceu:infinity_plate',
        S: 'solarflux:sp_custom_neutronium'
    })

    // Creative Chest
    event.recipes.extendedcrafting.shaped_table('2x gtceu:creative_chest', [
        'BMMMMMMMMMB',
        'MIWOPPPOYIM',
        'MIFNNNNNFIM',
        'MINCSSSCNIM',
        'RUSSAQASSUR',
        'REEMGHGMEER',
        'RUTTAQATTUR',
        'MINCTTTCNIM',
        'MIFNNNNNFIM',
        'MIXPPZPPVIM',
        'BMMMMMMMMMB'
    ], {
        A: 'kubejs:furious_infinity_catalyst',
        B: 'gtceu:monium_block',
        C: 'kubejs:serene_infinity_catalyst',
        E: 'kubejs:creative_energy_data',
        F: 'gtceu:uiv_field_generator',
        G: 'gtceu:monium_gear',
        H: 'gtceu:max_machine_hull',
        I: 'kubejs:elementally_infused_omnic_matrix_heavy_plating',
        M: 'kubejs:causality_exempt_monic_heavy_plating',
        N: 'kubejs:dimensionally_stabilized_infinity_heavy_plating',
        O: 'gtceu:uiv_sensor',
        P: 'kubejs:monic_processor_mainframe',
        Q: 'kubejs:field_stabilised_omnic_pulsar_compound',
        R: 'gtceu:uiv_robot_arm',
        S: 'kubejs:creative_storage_data',
        T: 'kubejs:creative_tank_data',
        U: 'gtceu:subatomic_digital_assembler',
        V: 'kubejs:infinity_file',
        W: 'kubejs:infinity_screwdriver',
        X: 'kubejs:infinity_wrench',
        Y: 'kubejs:infinity_hammer',
        Z: 'kubejs:infinity_wire_cutter'
    })

    // Thermal endergy recipes
    // Prismalium
    event.remove({id: 'thermalendergy:prismalium_ingot_from_dust'})
    event.recipes.gtceu.mixer('kubejs:prismalium_dust')
        .itemInputs('8x minecraft:prismarine_crystals', '4x gtceu:enderium_dust', '2x gtceu:europium_dust', 'gtceu:enriched_sunnarium_dust', '4x gtceu:charged_certus_quartz_dust')
        .itemOutputs('4x thermalendergy:prismalium_dust')
        .duration(300)
        .EUt(491250)
    event.recipes.gtceu.electric_blast_furnace('thermalendergy:prismalium_ingot')
        .itemInputs('thermalendergy:prismalium_dust')
        .inputFluids('gtceu:xenon 2000')
        .itemOutputs('thermalendergy:prismalium_ingot')
        .duration(900)
        .EUt(982500)
        .blastFurnaceTemp(8000)
    event.remove({id: 'thermalendergy:prismalium_gear'})
    event.remove({id: 'thermalendergy:machine/press/press_prismalium_ingot_to_gear'})
    event.recipes.gtceu.lathe('thermalendergy:prismalium_gear')
        .itemInputs('4x thermalendergy:prismalium_ingot')
        .itemOutputs('thermalendergy:prismalium_gear')
        .duration(300)
        .EUt(245625)
    event.remove({id: 'thermalendergy:machine/press/press_prismalium_ingot_to_plate'})
    event.recipes.gtceu.bender('thermalendergy:prismalium_plate')
        .itemInputs('thermalendergy:prismalium_ingot')
        .itemOutputs('thermalendergy:prismalium_plate')
        .duration(150)
        .EUt(245625)
    event.remove({id: 'thermalendergy:machine/press/press_prismalium_nugget_to_coin'})
    event.remove({id: 'thermalendergy:machine/press/press_prismalium_ingot_to_coin'})

    // Melodium
    event.remove({id: 'thermalendergy:melodium_ingot_from_dust'})
    event.recipes.gtceu.mixer('kubejs:melodium_dust')
        .itemInputs('5x gtceu:exquisite_fluix_gem', '8x gtceu:indium_gallium_phosphide_dust', '6x kubejs:stabilized_curium', '2x gtceu:neutronium_dust', 'gtceu:activated_netherite_dust')
        .itemOutputs('3x thermalendergy:melodium_dust')
        .duration(300)
        .EUt(982500)
    event.recipes.gtceu.electric_blast_furnace('thermalendergy:melodium_ingot')
        .itemInputs('thermalendergy:melodium_dust')
        .inputFluids('gtceu:jean_gasoline 8000')
        .itemOutputs('thermalendergy:melodium_ingot')
        .duration(900)
        .EUt(1965000)
        .blastFurnaceTemp(10000)
    event.remove({id: 'thermalendergy:melodium_gear'})
    event.remove({id: 'thermalendergy:machine/press/press_melodium_ingot_to_gear'})
    event.recipes.gtceu.lathe('thermalendergy:melodium_gear')
        .itemInputs('4x thermalendergy:melodium_ingot')
        .itemOutputs('thermalendergy:melodium_gear')
        .duration(300)
        .EUt(491250)
    event.remove({id: 'thermalendergy:machine/press/press_melodium_ingot_to_plate'})
    event.recipes.gtceu.bender('thermalendergy:melodium_plate')
        .itemInputs('thermalendergy:melodium_ingot')
        .itemOutputs('thermalendergy:melodium_plate')
        .duration(150)
        .EUt(491250)
    event.remove({id: 'thermalendergy:machine/press/press_melodium_nugget_to_coin'})
    event.remove({id: 'thermalendergy:machine/press/press_melodium_ingot_to_coin'})
    // Stellarium
    event.remove({id: 'thermalendergy:stellarium_ingot_from_dust'})
    event.recipes.gtceu.mixer('kubejs:stellarium_dust')
        .itemInputs('4x gtceu:crystal_matrix_dust', '2x gtceu:infinity_dust', '5x gtceu:holmium_dust', '6x gtceu:quantum_star', 'thermalendergy:melodium_dust', '2x thermalendergy:prismalium_dust')
        .itemOutputs('2x thermalendergy:stellarium_dust')
        .duration(300)
        .EUt(1965000)
    event.recipes.gtceu.electric_blast_furnace('thermalendergy:stellarium_ingot')
        .itemInputs('thermalendergy:stellarium_dust')
        .inputFluids('gtceu:sculk_superconductor 4000')
        .itemOutputs('thermalendergy:stellarium_ingot')
        .duration(1200)
        .EUt(3930000)
        .blastFurnaceTemp(14000)
    event.remove({id: 'thermalendergy:machine/press/press_stellarium_ingot_to_gear'})
    event.remove({id: 'thermalendergy:stellarium_gear'})
    event.recipes.gtceu.lathe('thermalendergy:stellarium_gear')
        .itemInputs('4x thermalendergy:stellarium_ingot')
        .itemOutputs('thermalendergy:stellarium_gear')
        .duration(300)
        .EUt(982500)
    event.remove({id: 'thermalendergy:machine/press/press_stellarium_ingot_to_plate'})
    event.recipes.gtceu.bender('thermalendergy:stellarium_plate')
        .itemInputs('thermalendergy:stellarium_ingot')
        .itemOutputs('thermalendergy:stellarium_plate')
        .duration(150)
        .EUt(982500)
    event.remove({id: 'thermalendergy:machine/press/press_stellarium_nugget_to_coin'})
    event.remove({id: 'thermalendergy:machine/press/press_stellarium_ingot_to_coin'})

    // Integral components
    event.shaped(Item.of('thermalendergy:endergy_upgrade_1', '{AugmentData:{BaseMod:15.0f,Type:"Upgrade"}}'), [
        'ABA',
        'BCB',
        'GBG'
    ], {
        A: 'gtceu:double_naquadria_plate',
        B: 'thermalendergy:prismalium_plate',
        C: 'thermal:upgrade_augment_3',
        G: 'gtceu:small_neutronium_gear'
    })
    event.shaped(Item.of('thermalendergy:endergy_upgrade_2', '{AugmentData:{BaseMod:25.0f,Type:"Upgrade"}}'), [
        'BBB',
        'GCG',
        'AGA'
    ], {
        A: 'gtceu:double_eltz_plate',
        B: 'thermalendergy:melodium_plate',
        C: 'thermalendergy:endergy_upgrade_1',
        G: 'gtceu:small_omnium_gear'
    })
    event.shaped(Item.of('thermalendergy:endergy_upgrade_3', '{AugmentData:{BaseMod:35.0f,Type:"Upgrade"}}'), [
        'BGB',
        'ACA',
        'BGB'
    ], {
        A: 'gtceu:double_infinity_plate',
        B: 'thermalendergy:stellarium_plate',
        C: 'thermalendergy:endergy_upgrade_2',
        G: 'gtceu:holmium_screw'
    })
})
