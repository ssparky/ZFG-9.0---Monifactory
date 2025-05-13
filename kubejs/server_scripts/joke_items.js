ServerEvents.recipes((event) => {
    // Aluminium chloride
    event.recipes.gtceu.chemical_reactor('kubejs:aluminium_chloride')
        .itemInputs('gtceu:aluminium_dust')
        .inputFluids('gtceu:chlorine 3000')
        //.circuit(29)
        .itemOutputs('2x kubejs:aluminium_chloride')
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV])

    // Ammonium Chloride
    event.recipes.gtceu.chemical_reactor('kubejs:ammonium_chloride')
        .inputFluids('gtceu:ammonia 1000', 'gtceu:hydrochloric_acid 1000', 'minecraft:water 2000')
        //.circuit(29)
        .outputFluids(Fluid.of('kubejs:ammonium_chloride', 1000))
        .duration(240)
        .EUt(GTValues.VA[GTValues.MV])

    // Methylamine Hydrochloride
    event.recipes.gtceu.chemical_reactor('kubejs:methylamine_hydrochloride')
        .inputFluids('gtceu:formaldehyde 2000', 'kubejs:ammonium_chloride 1000', 'minecraft:water 2000')
        //.circuit(29)
        .outputFluids(Fluid.of('kubejs:methylamine_hydrochloride', 1000), Fluid.of('gtceu:formic_acid', 1000))
        .duration(700)
        .EUt(GTValues.VA[GTValues.HV])

    // Methylamine
    event.recipes.gtceu.chemical_reactor('kubejs:methylamine')
        .itemInputs('gtceu:sodium_hydroxide_dust')
        .inputFluids('kubejs:methylamine_hydrochloride 1000')
        //.circuit(29)
        .outputFluids(Fluid.of('kubejs:methylamine', 1000), Fluid.of('water', 2000))
        .itemOutputs('gtceu:salt_dust')
        .duration(300)
        .EUt(GTValues.VA[GTValues.HV])

    // Chloroacetone
    event.recipes.gtceu.chemical_reactor('kubejs:chloroacetone')
        .inputFluids('gtceu:acetone 1000', 'gtceu:chlorine 1000')
        //.circuit(29)
        .outputFluids(Fluid.of('kubejs:chloroacetone', 1000), Fluid.of('gtceu:hydrochloric_acid', 1000))
        .duration(160)
        .EUt(GTValues.VA[GTValues.MV])

    // Phenylacetone
    event.recipes.gtceu.chemical_reactor('kubejs:phenylacetone')
        .itemInputs('3x kubejs:aluminium_chloride')
        .inputFluids('kubejs:chloroacetone', 'gtceu:benzene 1000')
        //.circuit(29)
        .outputFluids(Fluid.of('kubejs:phenylacetone', 1000), Fluid.of('gtceu:chlorine', 9000))
        .itemOutputs('3x gtceu:aluminium_dust')
        .duration(900)
        .EUt(GTValues.VA[GTValues.EV])

    // Methamphetamine
    event.recipes.gtceu.chemical_reactor('kubejs:methamphetamine')
        .inputFluids('kubejs:phenylacetone 1000', 'kubejs:methylamine 1000')
        //.circuit(29)
        .outputFluids(Fluid.of('kubejs:methamphetamine', 1000), Fluid.of('water', 1000))
        .duration(1200)
        .EUt(GTValues.VA[GTValues.EV])

    // Crystalize
    event.recipes.gtceu.centrifuge('kubejs:crystal_meth')
        .inputFluids('kubejs:methamphetamine')
        .itemOutputs('2x kubejs:crystal_meth')
        .duration(800)
        .EUt(GTValues.VA[GTValues.MV])

    // Proper joke items
    event.shaped(
        Item.of('kubejs:dodo_pizza', 1),
        [
            'ABC',
            'DE ',
            '   '
        ],
        {
            A: 'farmersdelight:cutting_board',
            B: '#forge:dough',
            C: '#forge:crops/tomato',
            D: '#farmersdelight:tools/knives',
            E: 'kubejs:cock_balls'
        }
    ).damageIngredient('#farmersdelight:tools/knives', 1).keepIngredient('farmersdelight:cutting_board')
    event.shaped(
        Item.of('kubejs:cock_balls', 1),
        [
            '  B',
            'AB ',
            'CA '
        ],
        {
            A: 'smallships:cannon_ball',
            B: '#forge:rods',
            C: '#forge:milk/milk_bottle',
        }
    )

    // TODO: fireball milk and lemon milk
    event.recipes.gtceu.canner('kubejs:fireball_milk')
        .itemInputs('minecraft:glass_bottle')
        .inputFluids('kubejs:fireball_milk_fluid 250')
        .itemOutputs('kubejs:fireball_milk')
        .duration(400)
        .EUt(2)
    event.recipes.gtceu.canner('kubejs:lemon_milk')
        .itemInputs('minecraft:glass_bottle')
        .inputFluids('kubejs:lemon_milk_fluid 250')
        .itemOutputs('kubejs:lemon_milk')
        .duration(400)
        .EUt(2)
    event.recipes.gtceu.mixer("kubejs:fireball_milk_fluid")
        .itemInputs('3x minecraft:fire_charge', '4x minecraft:sugar')
        .inputFluids(Fluid.of('minecraft:milk', 100))
        .outputFluids(Fluid.of('kubejs:fireball_milk_fluid', 100))
        .duration(800)
        .EUt(40)
    event.recipes.gtceu.mixer("kubejs:lemon_milk_fluid")
        .itemInputs('2x minecraft:yellow_dye', '4x minecraft:sugar')
        .inputFluids(Fluid.of('minecraft:milk', 100))
        .outputFluids(Fluid.of('kubejs:lemon_milk_fluid', 100))
        .duration(800)
        .EUt(40)
    event.shaped(
        Item.of('kubejs:wooden_shears', 1),
        [
            'A  ',
            ' A ',
            '   ',
        ],
        {
            A: '#minecraft:planks'
        }
    )
})