/**
 * Fluid Registry - defines ID, name,
 * color, and temperature of custom fluids.
 */
StartupEvents.registry('fluid', event => {

    // Thermal Expansion Fluids
    event.create('molten_pyrotheum')
        .bucketColor(Color.rgba(247, 219, 58, 255))
        .displayName('§6Blazing Pyrotheum') // orange
        .temperature(273 * 3000)
        .stillTexture('kubejs:block/pyrotheum_still')
        .flowingTexture('kubejs:block/pyrotheum_flow');
    event.create('molten_cryotheum')
        .bucketColor(Color.rgba(67, 244, 247, 255))
        .displayName('§bGelid Cryotheum') // aqua
        .temperature(5)
        .stillTexture('kubejs:block/cryotheum_still')
        .flowingTexture('kubejs:block/cryotheum_flow');
    event.create('molten_petrotheum')
        .bucketColor(Color.rgba(26, 19, 16, 255))
        .displayName('§8Tectonic Petrotheum') // darkGray
        .stillTexture('kubejs:block/petrotheum_still')
        .flowingTexture('kubejs:block/petrotheum_flow');
    event.create('molten_aerotheum')
        .bucketColor(Color.rgba(200, 218, 148, 255))
        .displayName('§7Zephyrean Aerotheum') // gray
        .stillTexture('kubejs:block/aerotheum_still')
        .flowingTexture('kubejs:block/aerotheum_flow');
    event.create("molten_primal_mana")
        .bucketColor(Color.rgba(0, 72, 112, 255))
        .displayName('§dPrimal Mana') // lightPurple
        .stillTexture('kubejs:block/mana_still')
        .flowingTexture('kubejs:block/mana_flow');

    // Joke fluids (meth line) 
    // This entire line is included just as a bad joke. The 'recipe' is taken from wikipedia, with the proportions made up entirely.
    // [phenylacetone + methylamine] -> 
    // [[chloroacetone + benzene*] + [methylamine hydrochloride + sodium hydroxide]] -> 
    // [[[acetone* + chlorine*] + benzene*] + [[formaldehyde* + ammonium chloride] + sodium hydroxide*]] ->
    // [[[acetone* + chlorine*] + benzene*] + [[formaldehyde* + [ammonia* + hydrochloric acid*]] + sodium hydroxide*]]
    event.create('ammonium_chloride') // 1x ammonia + 1x hydrochloric acid + 2x water
        .bucketColor(Color.rgba(177, 177, 166, 255))
        .displayName('Ammonium Chloride Solution')
        .temperature(750)
        .stillTexture('kubejs:block/creth/ammonium_chloride_still')
        .flowingTexture('kubejs:block/creth/ammonium_chloride_flow');

    event.create('methylamine_hydrochloride') // 2x formaldehyde + 1x ammonium chloride solution -> 1x methylamine_hcl + 1x formic acid (water retained for keeping salt in solution)
        .bucketColor(Color.rgba(195, 182, 196, 255))
        .displayName('Methylamine Hydrochloride Solution')
        .temperature(400)
        .stillTexture('kubejs:block/creth/methylamine_hydrochloride_still')
        .flowingTexture('kubejs:block/creth/methylamine_hydrochloride_flow');

    event.create('methylamine') // 1x methylamine_hcl + 1x NaOH -> 1x methylamine + 1x salt + 1x water (+ extra water out of solution)
        .bucketColor(Color.rgba(135, 147, 135, 255))
        .displayName('Methylamine')
        .temperature(200)
        .stillTexture('kubejs:block/creth/methylamine_still')
        .flowingTexture('kubejs:block/creth/methylamine_flow');

    event.create('chloroacetone') // 1x acetone + 1x chlorine gas -> 1x chloroacetone + 1x hydrochloric acid
        .bucketColor(Color.rgba(125, 125, 65, 255))
        .displayName('Chloroacetone')
        .temperature(350)
        .stillTexture('kubejs:block/creth/chloroacetone_still')
        .flowingTexture('kubejs:block/creth/chloroacetone_flow');

    event.create('phenylacetone') // 1x chloroacetone + 1x benzene + 4x aluminium chloride catalyst -> 1x phenylacetone + enough aluminium and chlorine to rebuild catalyst
        .bucketColor(Color.rgba(125, 125, 65, 255))
        .displayName('Phenylacetone')
        .temperature(300)
        .stillTexture('kubejs:block/creth/phenylacetone_still')
        .flowingTexture('kubejs:block/creth/phenylacetone_flow');

    event.create('methamphetamine') // 1x phenylacetone + 1x methylamine -> 1x meth + some water or something
        .bucketColor(Color.rgba(125, 105, 105, 255))
        .displayName('Methamphetamine')
        .temperature(300)
        .stillTexture('kubejs:block/creth/creth_still')
        .flowingTexture('kubejs:block/creth/creth_flow');

    // Misc jokes
    event.create('lemon_milk_fluid')
      .thinTexture(0xF5E495)
      .bucketColor(0xF5E495)
      .displayName('Lemon Milk')
                   
    event.create('fireball_milk_fluid')
      .thinTexture(0xF7BD75)
      .bucketColor(0xF7BD75)
      .displayName('Fireball Milk')
})
