/** Handles recipe tweaks incurred by ice and fire mod - mainly alternate coil recipes */

ServerEvents.recipes((event) => {
    // Cupronickel
    event.recipes.gtceu.assembler('gtceu:cupronickel_coil_block_inf_a')
        .itemInputs('4x gtceu:cupronickel_double_wire', '4x gtceu:bronze_foil', '8x iceandfire:deathworm_chitin_yellow')
        .inputFluids('gtceu:tin_alloy 144')
        .itemOutputs('gtceu:cupronickel_coil_block')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(23)
    event.recipes.gtceu.assembler('gtceu:cupronickel_coil_block_inf_b')
        .itemInputs('4x gtceu:cupronickel_double_wire', '4x gtceu:bronze_foil', '8x iceandfire:deathworm_chitin_white')
        .inputFluids('gtceu:tin_alloy 144')
        .itemOutputs('gtceu:cupronickel_coil_block')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(23)
    event.recipes.gtceu.assembler('gtceu:cupronickel_coil_block_inf_c')
        .itemInputs('4x gtceu:cupronickel_double_wire', '4x gtceu:bronze_foil', '8x iceandfire:deathworm_chitin_red')
        .inputFluids('gtceu:tin_alloy 144')
        .itemOutputs('gtceu:cupronickel_coil_block')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(23)

    // Kanthal
    event.recipes.gtceu.assembler('gtceu:kanthal_coil_block_inf')
        .itemInputs('4x gtceu:kanthal_double_wire', '4x gtceu:aluminium_foil', '8x iceandfire:dragonbone')
        .inputFluids('gtceu:copper 144')
        .itemOutputs('gtceu:kanthal_coil_block')
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(23)

    // Nichrome
    event.recipes.gtceu.assembler('gtceu:nichrome_coil_block_inf')
        .itemInputs('4x gtceu:nichrome_double_wire', '4x gtceu:stainless_steel_foil', '8x #iceandfire:scales/sea_serpent')
        .inputFluids('gtceu:aluminium 144')
        .itemOutputs('gtceu:nichrome_coil_block')
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV])
        .circuit(23)
    
    // RTM Alloy
    event.recipes.gtceu.assembler('gtceu:rtm_alloy_coil_block_inf')
        .itemInputs('4x gtceu:rtm_alloy_double_wire', '4x gtceu:vanadium_steel_foil', '8x #iceandfire:scales/dragon')
        .inputFluids('gtceu:nichrome 144')
        .itemOutputs('gtceu:rtm_alloy_coil_block')
        .duration(500)
        .EUt(GTValues.VA[GTValues.EV])
        .circuit(23)

    // HSS-G
    event.recipes.gtceu.assembler('gtceu:hssg_coil_block_inf_a')
        .itemInputs('4x gtceu:hssg_double_wire', '4x gtceu:tungsten_carbide_foil', '8x #forge:ingots/fire_dragonsteel')
        .inputFluids('gtceu:tungsten 144')
        .itemOutputs('gtceu:hssg_coil_block')
        .duration(600)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(23)
    event.recipes.gtceu.assembler('gtceu:hssg_coil_block_inf_b')
        .itemInputs('4x gtceu:hssg_double_wire', '4x gtceu:tungsten_carbide_foil', '8x #forge:ingots/ice_dragonsteel')
        .inputFluids('gtceu:tungsten 144')
        .itemOutputs('gtceu:hssg_coil_block')
        .duration(600)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(23)
    event.recipes.gtceu.assembler('gtceu:hssg_coil_block_inf_c')
        .itemInputs('4x gtceu:hssg_double_wire', '4x gtceu:tungsten_carbide_foil', '8x #forge:ingots/lightning_dragonsteel')
        .inputFluids('gtceu:tungsten 144')
        .itemOutputs('gtceu:hssg_coil_block')
        .duration(600)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(23)

    // Replace witherbones in all recipes
    event.replaceInput(
        {input: 'iceandfire:witherbone'},
        'iceandfire:witherbone',
        'kubejs:wither_bone'
    )
})