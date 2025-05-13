/** Lattice Cutter Recipes - both crafting and to craft it*/
ServerEvents.recipes(event => {
    // Diamond Lattice
    event.recipes.gtceu.lattice_cutter('kubejs:diamond_lattice_a')
        .itemInputs('4x gtceu:flawless_diamond_gem')
        .itemOutputs('kubejs:diamond_lattice')
        .duration(3000)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM)
    event.recipes.gtceu.lattice_cutter('kubejs:diamond_lattice_b')
        .itemInputs('2x gtceu:exquisite_diamond_gem')
        .itemOutputs('kubejs:diamond_lattice')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(2)
    // Mud brick lattice
    event.recipes.gtceu.lattice_cutter('kubejs:mud_bricks_a')
        .itemInputs('4x minecraft:mud_bricks')
        .itemOutputs('16x quark:mud_brick_lattice')
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.lattice_cutter('kubejs:mud_bricks_b')
        .itemInputs('4x minecraft:packed_mud')
        .itemOutputs('16x quark:mud_brick_lattice')
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV])
        .circuit(2)
    // Redeco lattices
    let redecoLat = [
        'oak',
        'spruce',
        'birch',
        'jungle',
        'acacia',
        'dark_oak',
        'mangrove',
        'cherry',
        'crimson',
        'warped',
        'bamboo'
    ]
    redecoLat.forEach(wood => {
        event.recipes.gtceu.lattice_cutter(`kubejs:redeco_${wood}_lattice`)
            .itemInputs(`minecraft:${wood}_planks`)
            .itemOutputs(`32x redeco:${wood}_lattice`)
            .duration(100)
            .EUt(GTValues.VA[GTValues.HV])
            .circuit(1)
    })
    // Decorative Blocks Lattice
    event.recipes.gtceu.lattice_cutter('kubejs:decorative_blocks_lattice')
        .itemInputs('#minecraft:planks')
        .itemOutputs('16x decorative_blocks:lattice')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV])
        .circuit(3)
    // Framed blocks lattices
    event.recipes.gtceu.lattice_cutter('kubejs:framed_lattice_block')
        .itemInputs('framedblocks:framed_cube')
        .itemOutputs('12x framedblocks:framed_lattice_block')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV])
        .circuit(1)
    event.recipes.gtceu.lattice_cutter('kubejs:framed_thick_lattice')
        .itemInputs('framedblocks:framed_cube')
        .itemOutputs('8x framedblocks:framed_thick_lattice')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV])
        .circuit(2)
    // Vinery lattices
    let vineryLat = [
        'oak',
        'spruce',
        'birch',
        'jungle',
        'acacia',
        'dark_oak',
        'mangrove',
        'cherry',
        'bamboo'
    ]
    vineryLat.forEach(wood => {
        event.recipes.gtceu.lattice_cutter(`kubejs:vinery_${wood}_lattice`)
            .itemInputs(`minecraft:${wood}_planks`)
            .itemOutputs(`24x vinery:${wood}_lattice`)
            .duration(100)
            .EUt(GTValues.VA[GTValues.HV])
            .circuit(2)
    })
    event.recipes.gtceu.lattice_cutter('kubejs:vinery_dark_cherry_lattice')
        .itemInputs('vinery:dark_cherry_planks')
        .itemOutputs('24x vinery:dark_cherry_lattice')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV])
        .circuit(2)

    // Recipes for the cutter itself
    event.recipes.gtceu.assembler('kubejs:lattice_cutter_casing')
        .itemInputs('6x gtceu:ultimet_plate', 'gtceu:ultimet_frame')
        .itemOutputs('2x kubejs:lattice_cutter_casing')
        .duration(50)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(6)
    event.recipes.gtceu.assembler('kubejs:lattice_cutter_glass')
        .itemInputs('8x gtceu:ultimet_rod', '2x gtceu:tempered_glass')
        .itemOutputs('2x kubejs:lattice_cutter_glass')
        .duration(50)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(6)
    event.shaped('gtceu:lattice_cutter', [
        'BAB',
        'DED',
        'CFC',
    ],
    {
        A: '#forge:lenses/white',
        B: 'gtceu:ev_field_generator',
        C: 'gtceu:ultimet_frame',
        D: 'gtceu:ev_emitter',
        E: 'gtceu:tempered_glass',
        F: 'gtceu:aluminium_quadruple_cable'
    }).id('kubejs:lattice_cutter_controller')
})
